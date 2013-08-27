Smalltalk current createPackage: 'Importer-Exporter'!
Object subclass: #AbstractExporter
	instanceVariableNames: ''
	package: 'Importer-Exporter'!
!AbstractExporter commentStamp!
I am an abstract exporter for Amber source code.

## API

Use `#exportPackage:on:` to export a given package on a Stream.!

!AbstractExporter methodsFor: 'accessing'!

extensionMethodsOfPackage: aPackage
	| result |
	
	result := OrderedCollection new.
	
	(self extensionProtocolsOfPackage: aPackage) do: [ :each |
		result addAll: each methods ].
		
	^ result
!

extensionProtocolsOfPackage: aPackage
	| extensionName result |
	
	extensionName := '*', aPackage name.
	result := OrderedCollection new.
	
	"The classes must be loaded since it is extensions only.
	Therefore sorting (dependency resolution) does not matter here.
	Not sorting improves the speed by a number of magnitude."
	
	Smalltalk current classes do: [ :each |
		{each. each class} do: [ :behavior |
			(behavior protocols includes: extensionName) ifTrue: [
				result add: (ExportMethodProtocol name: extensionName theClass: behavior) ] ] ].

	^result
! !

!AbstractExporter methodsFor: 'convenience'!

chunkEscape: aString
	"Replace all occurrences of !! with !!!! and trim at both ends."

	^(aString replace: '!!' with: '!!!!') trimBoth
!

classNameFor: aClass
	^aClass isMetaclass
		ifTrue: [ aClass instanceClass name, ' class' ]
		ifFalse: [
			aClass isNil
				ifTrue: [ 'nil' ]
				ifFalse: [ aClass name ] ]
! !

!AbstractExporter methodsFor: 'output'!

exportPackage: aPackage on: aStream
	self subclassResponsibility
! !

AbstractExporter class instanceVariableNames: 'default'!

!AbstractExporter class methodsFor: 'instance creation'!

default
	^ default ifNil: [ default := self new ]
! !

AbstractExporter subclass: #ChunkExporter
	instanceVariableNames: ''
	package: 'Importer-Exporter'!
!ChunkExporter commentStamp!
I am an exporter dedicated to outputting Amber source code in the classic Smalltalk chunk format.

I do not output any compiled code.!

!ChunkExporter methodsFor: 'accessing'!

ownMethodProtocolsOfClass: aClass
	"Answer a collection of ExportMethodProtocol object of aClass that are not package extensions"
	
	^ aClass ownProtocols collect: [ :each |
		ExportMethodProtocol name: each theClass: aClass ]
! !

!ChunkExporter methodsFor: 'output'!

exportDefinitionOf: aClass on: aStream
	"Chunk format."

	aStream
		nextPutAll: (self classNameFor: aClass superclass);
		nextPutAll: ' subclass: #', (self classNameFor: aClass); lf;
		tab; nextPutAll: 'instanceVariableNames: '''.
	aClass instanceVariableNames
		do: [:each | aStream nextPutAll: each]
		separatedBy: [aStream nextPutAll: ' '].
	aStream
		nextPutAll: ''''; lf;
		tab; nextPutAll: 'package: ''', aClass category, '''!!'; lf.
	aClass comment notEmpty ifTrue: [
		aStream
		nextPutAll: '!!', (self classNameFor: aClass), ' commentStamp!!';lf;
		nextPutAll: (self chunkEscape: aClass comment), '!!';lf].
	aStream lf
!

exportMetaDefinitionOf: aClass on: aStream

	aClass class instanceVariableNames isEmpty ifFalse: [
		aStream
			nextPutAll: (self classNameFor: aClass class);
			nextPutAll: ' instanceVariableNames: '''.
		aClass class instanceVariableNames
			do: [:each | aStream nextPutAll: each]
			separatedBy: [aStream nextPutAll: ' '].
		aStream
			nextPutAll: '''!!'; lf; lf]
!

exportMethod: aMethod on: aStream
	aStream
		lf; lf; nextPutAll: (self chunkEscape: aMethod source); lf;
		nextPutAll: '!!'
!

exportPackage: aPackage on: aStream

	self exportPackageDefinitionOf: aPackage on: aStream.
	
	aPackage sortedClasses do: [ :each |
		self exportDefinitionOf: each on: aStream.
		
		self 
			exportProtocols: (self ownMethodProtocolsOfClass: each)
			on: aStream.
			
		self exportMetaDefinitionOf: each on: aStream.
		
		self 
			exportProtocols: (self ownMethodProtocolsOfClass: each class)
			on: aStream ].
			
	self 
		exportProtocols: (self extensionProtocolsOfPackage: aPackage)
		on: aStream
!

exportPackageDefinitionOf: aPackage on: aStream
	aStream
		nextPutAll: 'Smalltalk current createPackage: ''', aPackage name, '''!!';
		lf
!

exportProtocol: aProtocol on: aStream
	self exportProtocolPrologueOf: aProtocol on: aStream.
	aProtocol methods do: [ :method | 
		self exportMethod: method on: aStream ].
	self exportProtocolEpilogueOf: aProtocol on: aStream
!

exportProtocolEpilogueOf: aProtocol on: aStream
	aStream nextPutAll: ' !!'; lf; lf
!

exportProtocolPrologueOf: aProtocol on: aStream
	aStream
		nextPutAll: '!!', (self classNameFor: aProtocol theClass);
		nextPutAll: ' methodsFor: ''', aProtocol name, '''!!'
!

exportProtocols: aCollection on: aStream
	aCollection do: [ :each |
		self exportProtocol: each on: aStream ]
! !

AbstractExporter subclass: #Exporter
	instanceVariableNames: ''
	package: 'Importer-Exporter'!
!Exporter commentStamp!
I am responsible for outputting Amber code into a JavaScript string.

The generated output is enough to reconstruct the exported data, including Smalltalk source code and other metadata.

## Use case

I am typically used to save code outside of the Amber runtime (committing to disk, etc.).!

!Exporter methodsFor: 'convenience'!

classNameFor: aClass
	^aClass isMetaclass
		ifTrue: [ aClass instanceClass name, '.klass' ]
		ifFalse: [
			aClass isNil
				ifTrue: [ 'nil' ]
				ifFalse: [ aClass name ] ]
! !

!Exporter methodsFor: 'output'!

exportDefinitionOf: aClass on: aStream
	aStream
		lf;
		nextPutAll: 'smalltalk.addClass(';
		nextPutAll: '''', (self classNameFor: aClass), ''', ';
		nextPutAll: 'smalltalk.', (self classNameFor: aClass superclass);
		nextPutAll: ', ['.
	aClass instanceVariableNames
		do: [:each | aStream nextPutAll: '''', each, '''']
		separatedBy: [aStream nextPutAll: ', '].
	aStream
		nextPutAll: '], ''';
		nextPutAll: aClass category, '''';
		nextPutAll: ');'.
	aClass comment notEmpty ifTrue: [
		aStream
			lf;
		nextPutAll: 'smalltalk.';
		nextPutAll: (self classNameFor: aClass);
		nextPutAll: '.comment=';
		nextPutAll: aClass comment asJavascript;
		nextPutAll: ';'].
	aStream lf
!

exportMetaDefinitionOf: aClass on: aStream
	aStream lf.
	aClass class instanceVariableNames isEmpty ifFalse: [
		aStream
		nextPutAll: 'smalltalk.', (self classNameFor: aClass class);
		nextPutAll: '.iVarNames = ['.
		aClass class instanceVariableNames
		do: [:each | aStream nextPutAll: '''', each, '''']
		separatedBy: [aStream nextPutAll: ','].
		aStream nextPutAll: '];', String lf]
!

exportMethod: aMethod on: aStream
	aStream
		nextPutAll: 'smalltalk.addMethod(';lf;
		"nextPutAll: aMethod selector asSelector asJavascript, ',';lf;"
		nextPutAll: 'smalltalk.method({';lf;
		nextPutAll: 'selector: ', aMethod selector asJavascript, ',';lf;
		nextPutAll: 'category: ''', aMethod category, ''',';lf;
		nextPutAll: 'fn: ', aMethod fn compiledSource, ',';lf;
		nextPutAll: 'args: ', aMethod arguments asJavascript, ','; lf;
		nextPutAll: 'source: ', aMethod source asJavascript, ',';lf;
		nextPutAll: 'messageSends: ', aMethod messageSends asJavascript, ',';lf;
		nextPutAll: 'referencedClasses: ', aMethod referencedClasses asJavascript.
	aStream
		lf;
		nextPutAll: '}),';lf;
		nextPutAll: 'smalltalk.', (self classNameFor: aMethod methodClass);
		nextPutAll: ');';lf;lf
!

exportPackage: aPackage on: aStream
	
	self 
		exportPackagePrologueOf: aPackage on: aStream;
		exportPackageDefinitionOf: aPackage on: aStream;
		exportPackageTransportOf: aPackage on: aStream.
	
	aPackage sortedClasses do: [ :each |
		self exportDefinitionOf: each on: aStream.
		each ownMethods do: [ :method |
			self exportMethod: method on: aStream ].
			
		self exportMetaDefinitionOf: each on: aStream.
		each class ownMethods do: [ :method |
			self exportMethod: method on: aStream ] ].
			
	(self extensionMethodsOfPackage: aPackage) do: [ :each |
		self exportMethod: each on: aStream ].
		
	self exportPackageEpilogueOf: aPackage on: aStream
!

exportPackageDefinitionOf: aPackage on: aStream
	aStream
		nextPutAll: 'smalltalk.addPackage(';
		nextPutAll: '''', aPackage name, ''');';
		lf
!

exportPackageEpilogueOf: aPackage on: aStream
	aStream
		nextPutAll: '})(global_smalltalk,global_nil,global__st);';
		lf
!

exportPackagePrologueOf: aPackage on: aStream
	aStream
		nextPutAll: '(function(smalltalk,nil,_st){';
		lf
!

exportPackageTransportOf: aPackage on: aStream
	| json |
	json := aPackage transportJson.
	json = 'null' ifFalse: [
		aStream
			nextPutAll: 'smalltalk.packages[';
			nextPutAll: aPackage name asJavascript;
			nextPutAll: '].transport = ';
			nextPutAll: json;
			nextPutAll: ';';
			lf ]
! !

Exporter subclass: #AmdExporter
	instanceVariableNames: ''
	package: 'Importer-Exporter'!

!AmdExporter methodsFor: 'output'!

exportPackageEpilogueOf: aPackage on: aStream
	aStream
		nextPutAll: '});';
		lf
!

exportPackagePrologueOf: aPackage on: aStream
	aStream
		nextPutAll: 'define("';
		nextPutAll: (aPackage amdNamespace ifNil: [ 'amber' ]); "ifNil: only for LegacyPH, it should not happen with AmdPH"
		nextPutAll: '/';
		nextPutAll: aPackage name;
		nextPutAll: '", ';
		nextPutAll: (#('amber_vm/smalltalk' 'amber_vm/nil' 'amber_vm/_st'), (self amdNamesOfPackages: aPackage loadDependencies)) asJavascript;
		nextPutAll: ', function(smalltalk,nil,_st){';
		lf
! !

!AmdExporter methodsFor: 'private'!

amdNamesOfPackages: anArray
	^ (anArray
		select: [ :each | each amdNamespace notNil ])
		collect: [ :each | each amdNamespace, '/', each name ]
! !

Object subclass: #ChunkParser
	instanceVariableNames: 'stream'
	package: 'Importer-Exporter'!
!ChunkParser commentStamp!
I am responsible for parsing aStream contents in the chunk format.

## API

    ChunkParser new
        stream: aStream;
        nextChunk!

!ChunkParser methodsFor: 'accessing'!

stream: aStream
	stream := aStream
! !

!ChunkParser methodsFor: 'reading'!

nextChunk
	"The chunk format (Smalltalk Interchange Format or Fileout format)
	is a trivial format but can be a bit tricky to understand:
		- Uses the exclamation mark as delimiter of chunks.
		- Inside a chunk a normal exclamation mark must be doubled.
		- A non empty chunk must be a valid Smalltalk expression.
		- A chunk on top level with a preceding empty chunk is an instruction chunk:
			- The object created by the expression then takes over reading chunks.

	This method returns next chunk as a String (trimmed), empty String (all whitespace) or nil."

	| char result chunk |
	result := '' writeStream.
		[char := stream next.
		char notNil] whileTrue: [
				char = '!!' ifTrue: [
						stream peek = '!!'
								ifTrue: [stream next "skipping the escape double"]
								ifFalse: [^result contents trimBoth "chunk end marker found"]].
				result nextPut: char].
	^nil "a chunk needs to end with !!"
! !

!ChunkParser class methodsFor: 'instance creation'!

on: aStream
	^self new stream: aStream
! !

Object subclass: #ExportMethodProtocol
	instanceVariableNames: 'name theClass'
	package: 'Importer-Exporter'!
!ExportMethodProtocol commentStamp!
I am an abstraction for a method protocol in a class / metaclass.

I know of my class, name and methods.
I am used when exporting a package.!

!ExportMethodProtocol methodsFor: 'accessing'!

methods
	^ self theClass methodsInProtocol: self name
!

name
	^name
!

name: aString
	name := aString
!

sortedMethods
	^ self methods sorted: [ :a :b | a selector <= b selector ]
!

theClass
	^theClass
!

theClass: aClass
	theClass := aClass
! !

!ExportMethodProtocol class methodsFor: 'instance creation'!

name: aString theClass: aClass
	^self new
		name: aString;
		theClass: aClass;
		yourself
! !

Object subclass: #ExportRecipeInterpreter
	instanceVariableNames: ''
	package: 'Importer-Exporter'!
!ExportRecipeInterpreter commentStamp!
I am an interpreter for export recipes.

## Recipe format

Recipe is an array, which can contain two kinds of elements:

 - an assocation where the key is the receiver and the value is a two-arguments selector
    In this case, `receiver perform: selector withArguments: { data. stream }` is called.
	This essentially defines one step of export process.
	The key (eg. receiver) is presumed to be some kind of 'repository' of the exporting methods
	that just format appropriate aspect of data into a stream; like a class or a singleton,
	so that the recipe itself can be decoupled from data.

 - a subarray, where first element is special and the rest is recursive recipe.

    `subarray first` must be an association similar to one above,
	with key being the 'repository' receiver, but value is one-arg selector.
	In this case, `receiver perform: selector withArguments: { data }` should create a collection.
	Then, the sub-recipe (`subarray allButFirst`) is applied to every element of a collection, eg.
	  collection do: [ :each | self export: each using: sa allButFirst on: stream ]!

!ExportRecipeInterpreter methodsFor: 'interpreting'!

interpret: aRecipe for: anObject on: aStream
	| recipeStream |
	
	recipeStream := aRecipe readStream.
	
	[ recipeStream atEnd ] whileFalse: [
		self 
			interpretStep: recipeStream next
			for: anObject
			on: aStream ]
!

interpretStep: aRecipeStep for: anObject on: aStream
	aRecipeStep value == aRecipeStep ifTrue: [ 
		^ self interpretSubRecipe: aRecipeStep for: anObject on: aStream ].
			
	aRecipeStep key perform: aRecipeStep value withArguments: { anObject. aStream }
!

interpretSubRecipe: aRecipe for: anObject on: aStream
	| selection |
	selection := aRecipe first key 
		perform: aRecipe first value 
		withArguments: { anObject }.
	selection do: [ :each |	
		self interpret: aRecipe allButFirst for: each on: aStream ]
! !

Object subclass: #Importer
	instanceVariableNames: ''
	package: 'Importer-Exporter'!
!Importer commentStamp!
I can import Amber code from a string in the chunk format.

## API

    Importer new import: aString!

!Importer methodsFor: 'fileIn'!

import: aStream
	| chunk result parser lastEmpty |
	parser := ChunkParser on: aStream.
	lastEmpty := false.
	[chunk := parser nextChunk.
	chunk isNil] whileFalse: [
		chunk isEmpty
			ifTrue: [lastEmpty := true]
			ifFalse: [
				result := Compiler new evaluateExpression: chunk.
				lastEmpty
						ifTrue: [
									lastEmpty := false.
									result scanFrom: parser]]]
! !

InterfacingObject subclass: #PackageHandler
	instanceVariableNames: ''
	package: 'Importer-Exporter'!
!PackageHandler commentStamp!
I am responsible for handling package loading and committing.

I should not be used directly. Instead, use the corresponding `Package` methods.!

!PackageHandler methodsFor: 'accessing'!

chunkContentsFor: aPackage
	^ String streamContents: [ :str |
		self chunkExporter exportPackage: aPackage on: str ]
!

chunkExporterClass
	^ ChunkExporter
!

commitPathJsFor: aPackage
	self subclassResponsibility
!

commitPathStFor: aPackage
	self subclassResponsibility
!

contentsFor: aPackage
	^ String streamContents: [ :str |
		self exporter exportPackage: aPackage on: str ]
!

exporterClass
	^ Exporter
! !

!PackageHandler methodsFor: 'committing'!

commit: aPackage
	{
		[ self commitStFileFor: aPackage ].
		[ self commitJsFileFor: aPackage ]
	}
		do: [ :each | each value ]
		displayingProgress: 'Committing package ', aPackage name
!

commitJsFileFor: aPackage
	self 
		ajaxPutAt: (self commitPathJsFor: aPackage), '/', aPackage name, '.js'
		data: (self contentsFor: aPackage)
!

commitStFileFor: aPackage
	self 
		ajaxPutAt: (self commitPathStFor: aPackage), '/', aPackage name, '.st'
		data: (self chunkContentsFor: aPackage)
! !

!PackageHandler methodsFor: 'factory'!

chunkExporter
	^ self chunkExporterClass default
!

exporter
	^ self exporterClass default
! !

!PackageHandler methodsFor: 'private'!

ajaxPutAt: aURL data: aString
	self
		ajax: #{
			'url' -> aURL.
			'type' -> 'PUT'.
			'data' -> aString.
			'contentType' -> 'text/plain;charset=UTF-8'.
			'error' -> [ :xhr | self error: 'Commiting ' , aURL , ' failed with reason: "' , (xhr responseText) , '"'] }
! !

PackageHandler class instanceVariableNames: 'registry'!

!PackageHandler class methodsFor: 'accessing'!

classRegisteredFor: aString
	^ registry at: aString
!

for: aString
	^ (self classRegisteredFor: aString) new
! !

!PackageHandler class methodsFor: 'initialization'!

initialize
	super initialize.
	registry := #{}
! !

!PackageHandler class methodsFor: 'registry'!

register: aClass for: aString
	registry at: aString put: aClass
!

registerFor: aString
	PackageHandler register: self for: aString
! !

PackageHandler subclass: #AmdPackageHandler
	instanceVariableNames: ''
	package: 'Importer-Exporter'!
!AmdPackageHandler commentStamp!
I am responsible for handling package loading and committing.

I should not be used directly. Instead, use the corresponding `Package` methods.!

!AmdPackageHandler methodsFor: 'accessing'!

commitPathJsFor: aPackage
	^self toUrl: (self namespaceFor: aPackage)
!

commitPathStFor: aPackage
	"if _source is not mapped, .st commit will likely fail"
	^self toUrl: (self namespaceFor: aPackage), '/_source'.
!

exporterClass
	^ AmdExporter
! !

!AmdPackageHandler methodsFor: 'committing'!

namespaceFor: aPackage
	^ aPackage amdNamespace
		ifNil: [ aPackage amdNamespace: self class defaultNamespace; amdNamespace ]
! !

!AmdPackageHandler methodsFor: 'private'!

toUrl: aString
	^ Smalltalk current amdRequire
		ifNil: [ self error: 'AMD loader not present' ]
		ifNotNil: [ :require | (require basicAt: 'toUrl') value: aString ]
! !

!AmdPackageHandler class methodsFor: 'commit paths'!

defaultNamespace
	^ Smalltalk current defaultAMDNamespace
!

defaultNamespace: aString
	Smalltalk current defaultAMDNamespace: aString
!

resetCommitPaths
	defaultNamespace := nil
! !

!AmdPackageHandler class methodsFor: 'initialization'!

initialize
	super initialize.
	self registerFor: 'amd'
! !

Object subclass: #PluggableExporter
	instanceVariableNames: 'recipe'
	package: 'Importer-Exporter'!
!PluggableExporter commentStamp!
I am an engine for exporting structured data on a Stream.

My instances are created using
  PluggableExporter forRecipe: aRecipe,
where recipe is structured description of the exporting algorithm (see `ExportRecipeInterpreter`).

The actual exporting is done by interpreting the recipe using a `RecipeInterpreter`.


I am used to export amber packages, so I have a convenience method
`exportPackage: aPackage on: aStream`
which exports `aPackage` using the `recipe`
(it is otherwise no special, so it may be renamed to export:on:)!

!PluggableExporter methodsFor: 'accessing'!

interpreter
	^ ExportRecipeInterpreter new
!

recipe
	^recipe
!

recipe: anArray
	recipe := anArray
! !

!PluggableExporter methodsFor: 'fileOut'!

exportAllPackages
	"Export all packages in the system."

	^String streamContents: [:stream |
		Smalltalk current packages do: [:pkg |
		self exportPackage: pkg on: stream]]
!

exportPackage: aPackage on: aStream
	self interpreter interpret: self recipe for: aPackage on: aStream
! !

!PluggableExporter class methodsFor: 'convenience'!

ownClassesOfPackage: package
	"Export classes in dependency order.
	Update (issue #171): Remove duplicates for export"
	^package sortedClasses asSet
! !

!PluggableExporter class methodsFor: 'instance creation'!

forRecipe: aRecipe
	^self new recipe: aRecipe; yourself
! !

!Package methodsFor: '*Importer-Exporter'!

amdNamespace
	<return (self.transport && self.transport.amdNamespace) || nil>
!

amdNamespace: aString
	<
		if (!!self.transport) { self.transport = { type: 'amd' }; }
		if (self.transport.type !!== 'amd') { throw new Error('Package '+self._name()+' has transport type '+self.transport.type+', not "amd".'); }
		self.transport.amdNamespace = aString;
	>
!

commit
	^ self handler commit: self
!

commitPathJs
	^ (extension ifNil: [ extension := #{} ]) at: #commitPathJs ifAbsent: [ self handler commitPathJsFor: self ]
!

commitPathJs: aString
	^ (extension ifNil: [ extension := #{} ]) at: #commitPathJs put: aString
!

commitPathSt
	^ (extension ifNil: [ extension := #{} ]) at: #commitPathSt ifAbsent: [ self handler commitPathStFor: self ]
!

commitPathSt: aString
	^ (extension ifNil: [ extension := #{} ]) at: #commitPathSt put: aString
!

handler
	^ PackageHandler for: self transportType
!

transportJson
	<return JSON.stringify(self.transport || null);>
!

transportType
	<return (self.transport && self.transport.type) || 'unknown';>
! !

