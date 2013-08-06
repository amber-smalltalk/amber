Smalltalk current createPackage: 'Importer-Exporter'!
Object subclass: #AmdExporter
	instanceVariableNames: ''
	package: 'Importer-Exporter'!

!AmdExporter class methodsFor: 'exporting-output'!

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
		nextPutAll: '", ["amber_vm/smalltalk","amber_vm/nil","amber_vm/_st"], function(smalltalk,nil,_st){';
		lf
!

exportPackageTransportOf: aPackage on: aStream
	aStream
		nextPutAll: 'smalltalk.packages[';
		nextPutAll: aPackage name asJavascript;
		nextPutAll: '].transport = ';
		nextPutAll: aPackage transportJson;
		nextPutAll: ';';
		lf
! !

Object subclass: #ChunkExporter
	instanceVariableNames: ''
	package: 'Importer-Exporter'!
!ChunkExporter commentStamp!
I am an exporter dedicated to outputting Amber source code in the classic Smalltalk chunk format.

I do not output any compiled code.!

!ChunkExporter class methodsFor: 'exporting-accessing'!

extensionCategoriesOfPackage: package
	"Issue #143: sort protocol alphabetically"

	| name map result |
	name := package name.
	result := OrderedCollection new.
	(Package sortedClasses: Smalltalk current classes) do: [:each |
		{each. each class} do: [:aClass |
			map := Dictionary new.
			aClass protocolsDo: [:category :methods |
				(category match: '^\*', name) ifTrue: [ map at: category put: methods ]].
			result addAll: ((map keys sorted: [:a :b | a <= b ]) collect: [:category |
				#{ 'methods'->(map at: category). 'name'->category. 'class'->aClass}]) ]].
	^result
!

methodsOfCategory: category
	"Issue #143: sort methods alphabetically"

	^(category at: #methods) sorted: [:a :b | a selector <= b selector]
!

ownCategoriesOfClass: aClass
	"Issue #143: sort protocol alphabetically"

	| map |
	map := Dictionary new.
	aClass protocolsDo: [:category :methods |
		(category match: '^\*') ifFalse: [ map at: category put: methods ]].
	^(map keys sorted: [:a :b | a <= b ]) collect: [:category |
		#{
			'methods'->(map at: category).
			'name'->category.
			'class'->aClass }]
!

ownCategoriesOfMetaClass: aClass
	"Issue #143: sort protocol alphabetically"

	^self ownCategoriesOfClass: aClass class
! !

!ChunkExporter class methodsFor: 'exporting-output'!

exportCategoryEpilogueOf: category on: aStream
	aStream nextPutAll: ' !!'; lf; lf
!

exportCategoryPrologueOf: category on: aStream
	aStream
		nextPutAll: '!!', (self classNameFor: (category at: #class));
		nextPutAll: ' methodsFor: ''', (category at: #name), '''!!'
!

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

exportPackageDefinitionOf: package on: aStream
	"Chunk format."

	aStream
		nextPutAll: 'Smalltalk current createPackage: ''', package name, '''!!';
		lf
! !

!ChunkExporter class methodsFor: 'fileOut'!

recipe
	"Export a given package."

	| exportCategoryRecipe |
	exportCategoryRecipe := {
		self -> #exportCategoryPrologueOf:on:.
		{
			self -> #methodsOfCategory:.
			self -> #exportMethod:on: }.
		self -> #exportCategoryEpilogueOf:on: }.

	^{
		self -> #exportPackageDefinitionOf:on:.
		{
			PluggableExporter -> #ownClassesOfPackage:.
			self -> #exportDefinitionOf:on:.
			{ self -> #ownCategoriesOfClass: }, exportCategoryRecipe.
			self -> #exportMetaDefinitionOf:on:.
			{ self -> #ownCategoriesOfMetaClass: }, exportCategoryRecipe }.
		{ self -> #extensionCategoriesOfPackage: }, exportCategoryRecipe
	}
! !

!ChunkExporter class methodsFor: 'private'!

chunkEscape: aString
	"Replace all occurrences of !! with !!!! and trim at both ends."

	^(aString replace: '!!' with: '!!!!') trimBoth
!

classNameFor: aClass
	^aClass isMetaclass
		ifTrue: [aClass instanceClass name, ' class']
		ifFalse: [
		aClass isNil
			ifTrue: ['nil']
			ifFalse: [aClass name]]
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

	This metod returns next chunk as a String (trimmed), empty String (all whitespace) or nil."

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

!ChunkParser class methodsFor: 'not yet classified'!

on: aStream
	^self new stream: aStream
! !

Object subclass: #Exporter
	instanceVariableNames: ''
	package: 'Importer-Exporter'!
!Exporter commentStamp!
I am responsible for outputting Amber code into a JavaScript string.

The generated output is enough to reconstruct the exported data, including Smalltalk source code and other metadata.

## Use case

I am typically used to save code outside of the Amber runtime (committing to disk, etc.).

## API

Use `#exportAll`, `#exportClass:` or `#exportPackage:` methods.!

!Exporter class methodsFor: 'exporting-accessing'!

extensionMethodsOfPackage: package
	"Issue #143: sort classes and methods alphabetically"

	| name result |
	name := package name.
	result := OrderedCollection new.
	(Package sortedClasses: Smalltalk current classes) do: [:each |
		{each. each class} do: [:aClass |
			result addAll: (((aClass methodDictionary values)
				sorted: [:a :b | a selector <= b selector])
				select: [:method | method category match: '^\*', name]) ]].
	^result
!

ownMethodsOfClass: aClass
	"Issue #143: sort methods alphabetically"

	^((aClass methodDictionary values) sorted: [:a :b | a selector <= b selector])
		reject: [:each | (each category match: '^\*')]
!

ownMethodsOfMetaClass: aClass
	"Issue #143: sort methods alphabetically"

	^self ownMethodsOfClass: aClass class
! !

!Exporter class methodsFor: 'exporting-output'!

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

exportPackageDefinitionOf: package on: aStream
	aStream
		nextPutAll: 'smalltalk.addPackage(';
		nextPutAll: '''', package name, ''');';
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
! !

!Exporter class methodsFor: 'fileOut'!

amdRecipe
	"Export a given package with amd transport type."

	| legacy |
	legacy := self recipe.
	^(legacy copyFrom: 1 to: 2),
	{ AmdExporter -> #exportPackageTransportOf:on: },
	(legacy copyFrom: 3 to: legacy size)
!

recipe
	"Export a given package."

	^{
		AmdExporter -> #exportPackagePrologueOf:on:.
		self -> #exportPackageDefinitionOf:on:.
		{
			PluggableExporter -> #ownClassesOfPackage:.
			self -> #exportDefinitionOf:on:.
			{
				self -> #ownMethodsOfClass:.
				self -> #exportMethod:on: }.
			self -> #exportMetaDefinitionOf:on:.
			{
				self -> #ownMethodsOfMetaClass:.
				self -> #exportMethod:on: } }.
		{
			self -> #extensionMethodsOfPackage:.
			self -> #exportMethod:on: }.
		AmdExporter -> #exportPackageEpilogueOf:on:
	}
! !

!Exporter class methodsFor: 'private'!

classNameFor: aClass
	^aClass isMetaclass
		ifTrue: [aClass instanceClass name, '.klass']
		ifFalse: [
		aClass isNil
			ifTrue: ['nil']
			ifFalse: [aClass name]]
! !

Exporter subclass: #StrippedExporter
	instanceVariableNames: ''
	package: 'Importer-Exporter'!
!StrippedExporter commentStamp!
I export Amber code into a JavaScript string, but without any optional associated data like the Amber source code.!

!StrippedExporter class methodsFor: 'exporting-output'!

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
	aStream lf
!

exportMethod: aMethod on: aStream
	aStream
		nextPutAll: 'smalltalk.addMethod(';lf;
		"nextPutAll: aMethod selector asSelector asJavascript, ',';lf;"
		nextPutAll: 'smalltalk.method({';lf;
		nextPutAll: 'selector: ', aMethod selector asJavascript, ',';lf;
		nextPutAll: 'fn: ', aMethod fn compiledSource, ',';lf;
		nextPutAll: 'messageSends: ', aMethod messageSends asJavascript;
		nextPutAll: '}),';lf;
		nextPutAll: 'smalltalk.', (self classNameFor: aMethod methodClass);
		nextPutAll: ');';lf;lf
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

!PackageHandler methodsFor: 'committing'!

commit: aPackage
	self commitChannels
		do: [ :commitStrategyFactory || fileContents commitStrategy |
			commitStrategy := commitStrategyFactory value: aPackage.
			fileContents := String streamContents: [ :stream |
				(PluggableExporter newUsing: commitStrategy key) exportPackage: aPackage on: stream ].
			self ajaxPutAt: commitStrategy value data: fileContents ]
		displayingProgress: 'Committing package ', aPackage name
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
	^registry at: aString
!

for: aString
	^(self classRegisteredFor: aString) new
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

!AmdPackageHandler methodsFor: 'committing'!

commitChannels
	^{ 
		[ :pkg | Exporter amdRecipe -> (pkg commitPathJs, '/', pkg name, '.js') ].
		[ :pkg | StrippedExporter amdRecipe -> (pkg commitPathJs, '/', pkg name, '.deploy.js') ].
		[ :pkg | ChunkExporter recipe -> (pkg commitPathSt, '/', pkg name, '.st') ]
	}
!

commitPathJsFor: aPackage
	^self toUrl: (self namespaceFor: aPackage)
!

commitPathStFor: aPackage
	"if _source is not mapped, .st commit will likely fail"
	^self toUrl: (self namespaceFor: aPackage), '/_source'.
!

namespaceFor: aPackage
	^aPackage amdNamespace
		ifNil: [ aPackage amdNamespace: self class defaultNamespace; amdNamespace ]
! !

!AmdPackageHandler methodsFor: 'private'!

toUrl: aString
	(Smalltalk current at: '_amd_require')
		ifNil: [ self error: 'AMD loader not present' ]
		ifNotNil: [ :require | ^(require basicAt: 'toUrl') value: aString ]
! !

AmdPackageHandler class instanceVariableNames: 'defaultNamespace'!

!AmdPackageHandler class methodsFor: 'commit paths'!

commitPathsFromLoader
	"TODO"
!

defaultNamespace
	^ defaultNamespace ifNil: [ self error: 'AMD default namespace not set.' ]
!

defaultNamespace: aString
	defaultNamespace := aString
!

resetCommitPaths
	defaultNamespace := nil
! !

!AmdPackageHandler class methodsFor: 'initialization'!

initialize
	super initialize.
	self registerFor: 'amd'.
	self commitPathsFromLoader
! !

PackageHandler subclass: #LegacyPackageHandler
	instanceVariableNames: ''
	package: 'Importer-Exporter'!
!LegacyPackageHandler commentStamp!
I am responsible for handling package loading and committing.

I should not be used directly. Instead, use the corresponding `Package` methods.!

!LegacyPackageHandler methodsFor: 'committing'!

commitChannels
	^{ 
		[ :pkg | Exporter recipe -> (pkg commitPathJs, '/', pkg name, '.js') ].
		[ :pkg | StrippedExporter recipe -> (pkg commitPathJs, '/', pkg name, '.deploy.js') ].
		[ :pkg | ChunkExporter recipe -> (pkg commitPathSt, '/', pkg name, '.st') ]
	}
!

commitPathJsFor: aPackage
	^self class defaultCommitPathJs
!

commitPathStFor: aPackage
	^self class defaultCommitPathSt
! !

!LegacyPackageHandler methodsFor: 'loading'!

loadPackage: packageName prefix: aString
	| url |
	url := '/', aString, '/js/', packageName, '.js'.
	self
		ajax: #{
			'url' -> url.
			'type' -> 'GET'.
			'dataType' -> 'script'.
			'complete' -> [ :jqXHR :textStatus |
				jqXHR readyState = 4
					ifTrue: [ self setupPackageNamed: packageName prefix: aString ] ].
			'error' -> [ self alert: 'Could not load package at: ', url ]
		}
!

loadPackages: aCollection prefix: aString
	aCollection do: [ :each |
		self loadPackage: each prefix: aString ]
! !

!LegacyPackageHandler methodsFor: 'private'!

setupPackageNamed: packageName prefix: aString

	(Package named: packageName)
		setupClasses;
		commitPathJs: '/', aString, '/js';
		commitPathSt: '/', aString, '/st'
! !

LegacyPackageHandler class instanceVariableNames: 'defaultCommitPathJs defaultCommitPathSt'!

!LegacyPackageHandler class methodsFor: 'commit paths'!

commitPathsFromLoader
	<
		var commitPath = typeof amber !!== 'undefined' && amber.commitPath;
		if (!!commitPath) return;
		if (commitPath.js) self._defaultCommitPathJs_(commitPath.js);
		if (commitPath.st) self._defaultCommitPathSt_(commitPath.st);
	>
!

defaultCommitPathJs
	^ defaultCommitPathJs ifNil: [ defaultCommitPathJs := 'js']
!

defaultCommitPathJs: aString
	defaultCommitPathJs := aString
!

defaultCommitPathSt
	^ defaultCommitPathSt ifNil: [ defaultCommitPathSt := 'st']
!

defaultCommitPathSt: aString
	defaultCommitPathSt := aString
!

resetCommitPaths
	defaultCommitPathJs := nil.
	defaultCommitPathSt := nil
! !

!LegacyPackageHandler class methodsFor: 'initialization'!

initialize
	super initialize.
	self registerFor: 'unknown'.
	self commitPathsFromLoader
! !

!LegacyPackageHandler class methodsFor: 'loading'!

loadPackages: aCollection prefix: aString
	^ self new loadPackages: aCollection prefix: aString
! !

Object subclass: #PluggableExporter
	instanceVariableNames: 'recipe'
	package: 'Importer-Exporter'!

!PluggableExporter methodsFor: 'accessing'!

recipe
	^recipe
!

recipe: anArray
	recipe := anArray
! !

!PluggableExporter methodsFor: 'fileOut'!

export: anObject usingRecipe: anArray on: aStream
	| args |
	args := { anObject. aStream }.
	anArray do: [ :each | | val |
		val := each value.
		val == each
			ifFalse: [ "association"
				each key perform: val withArguments: args ]
			ifTrue: [ "sub-array"
				| selection |
				selection := each first key perform: each first value withArguments: { anObject }.
				selection do: [ :eachPart |	self export: eachPart usingRecipe: each allButFirst on: aStream ]]]
!

exportAll
	"Export all packages in the system."

	^String streamContents: [:stream |
		Smalltalk current packages do: [:pkg |
		self exportPackage: pkg on: stream]]
!

exportPackage: aPackage on: aStream
	self export: aPackage usingRecipe: self recipe on: aStream
! !

!PluggableExporter class methodsFor: 'exporting-accessing'!

newUsing: recipe
	^self new recipe: recipe; yourself
!

ownClassesOfPackage: package
	"Export classes in dependency order.
	Update (issue #171): Remove duplicates for export"
	^package sortedClasses asSet
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
	^ self transport commit: self
!

commitPathJs
	^ (extension ifNil: [ extension := #{} ]) at: #commitPathJs ifAbsent: [self transport commitPathJsFor: self]
!

commitPathJs: aString
	^ (extension ifNil: [ extension := #{} ]) at: #commitPathJs put: aString
!

commitPathSt
	^ (extension ifNil: [ extension := #{} ]) at: #commitPathSt ifAbsent: [self transport commitPathStFor: self]
!

commitPathSt: aString
	^ (extension ifNil: [ extension := #{} ]) at: #commitPathSt put: aString
!

transport
	^ PackageHandler for: self transportType
!

transportJson
	<return JSON.stringify(self.transport || null);>
!

transportType
	<return (self.transport && self.transport.type) || 'unknown';>
! !

