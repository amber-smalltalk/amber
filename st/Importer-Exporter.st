Smalltalk current createPackage: 'Importer-Exporter'!
Object subclass: #AbstractExporter
	instanceVariableNames: ''
	package: 'Importer-Exporter'!
!AbstractExporter commentStamp!
I am an abstract exporter for Amber source code.!

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

!AbstractExporter methodsFor: 'fileOut'!

recipe
	"Recipe to export a given package."

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

extensionCategoriesOfPackage: aPackage
	"Issue #143: sort protocol alphabetically"

	| name map result |
	name := aPackage name.
	result := OrderedCollection new.
	(Package sortedClasses: Smalltalk current classes) do: [:each |
		{each. each class} do: [:aClass |
			map := Dictionary new.
			aClass protocolsDo: [:category :methods |
				(category match: '^\*', name) ifTrue: [ map at: category put: methods ]].
			result addAll: ((map keys sorted: [:a :b | a <= b ]) collect: [:category |
				MethodCategory name: category theClass: aClass methods: (map at: category)]) ]].
	^result
!

methodsOfCategory: aCategory
	"Issue #143: sort methods alphabetically"

	^(aCategory methods) sorted: [:a :b | a selector <= b selector]
!

ownCategoriesOfClass: aClass
	"Answer the protocols of aClassthat are not package extensions"
	
	"Issue #143: sort protocol alphabetically"

	| map |
	map := Dictionary new.
	aClass protocolsDo: [:category :methods |
		(category match: '^\*') ifFalse: [ map at: category put: methods ]].
	^(map keys sorted: [:a :b | a <= b ]) collect: [:category |
		MethodCategory name: category theClass: aClass methods: (map at: category) ]
!

ownCategoriesOfMetaClass: aClass
	"Issue #143: sort protocol alphabetically"

	^self ownCategoriesOfClass: aClass class
! !

!ChunkExporter methodsFor: 'fileOut'!

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

!ChunkExporter methodsFor: 'output'!

exportCategoryEpilogueOf: aCategory on: aStream
	aStream nextPutAll: ' !!'; lf; lf
!

exportCategoryPrologueOf: aCategory on: aStream
	aStream
		nextPutAll: '!!', (self classNameFor: aCategory theClass);
		nextPutAll: ' methodsFor: ''', aCategory name, '''!!'
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

exportPackageDefinitionOf: aPackage on: aStream
	"Chunk format."

	aStream
		nextPutAll: 'Smalltalk current createPackage: ''', aPackage name, '''!!';
		lf
! !

AbstractExporter subclass: #Exporter
	instanceVariableNames: ''
	package: 'Importer-Exporter'!
!Exporter commentStamp!
I am responsible for outputting Amber code into a JavaScript string.

The generated output is enough to reconstruct the exported data, including Smalltalk source code and other metadata.

## Use case

I am typically used to save code outside of the Amber runtime (committing to disk, etc.).

## API

Use `#exportAll`, `#exportClass:` or `#exportPackage:` methods.!

!Exporter methodsFor: 'accessing'!

extensionMethodsOfPackage: aPackage
	"Issue #143: sort classes and methods alphabetically"

	| name result |
	name := aPackage name.
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

!Exporter methodsFor: 'convenience'!

classNameFor: aClass
	^aClass isMetaclass
		ifTrue: [ aClass instanceClass name, '.klass' ]
		ifFalse: [
			aClass isNil
				ifTrue: [ 'nil' ]
				ifFalse: [ aClass name ] ]
! !

!Exporter methodsFor: 'fileOut'!

recipe
	"Export a given package."

	^{
		self -> #exportPackagePrologueOf:on:.
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
		self -> #exportPackageEpilogueOf:on:
	}
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
! !

Exporter subclass: #StrippedExporter
	instanceVariableNames: ''
	package: 'Importer-Exporter'!
!StrippedExporter commentStamp!
I export Amber code into a JavaScript string, but without any optional associated data like the Amber source code.!

!StrippedExporter methodsFor: 'output'!

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

Object subclass: #MethodCategory
	instanceVariableNames: 'methods name theClass'
	package: 'Importer-Exporter'!
!MethodCategory commentStamp!
I am an abstraction for a method category in a class / metaclass.

I know of my class, name and methods.
I am used when exporting a package.!

!MethodCategory methodsFor: 'accessing'!

methods
	^methods
!

methods: aCollection
	methods := aCollection
!

name
	^name
!

name: aString
	name := aString
!

theClass
	^theClass
!

theClass: aClass
	theClass := aClass
! !

!MethodCategory class methodsFor: 'not yet classified'!

name: aString theClass: aClass methods: anArray
	^self new
		name: aString;
		theClass: aClass;
		methods: anArray;
		yourself
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
				(PluggableExporter forRecipe: commitStrategy key) exportPackage: aPackage on: stream ].
			self ajaxPutAt: commitStrategy value data: fileContents ]
		displayingProgress: 'Committing package ', aPackage name
!

commitChannels
	self subclassResponsibility
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

PackageHandler subclass: #LegacyPackageHandler
	instanceVariableNames: ''
	package: 'Importer-Exporter'!
!LegacyPackageHandler commentStamp!
I am responsible for handling package loading and committing.

I should not be used directly. Instead, use the corresponding `Package` methods.!

!LegacyPackageHandler methodsFor: 'committing'!

commitChannels
	^{ 
		[ :pkg | Exporter default recipe -> (pkg commitPathJs, '/', pkg name, '.js') ].
		[ :pkg | StrippedExporter default recipe -> (pkg commitPathJs, '/', pkg name, '.deploy.js') ].
		[ :pkg | ChunkExporter default recipe -> (pkg commitPathSt, '/', pkg name, '.st') ]
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
!PluggableExporter commentStamp!
I am an engine for exporting structured data on a Stream.

My instances are created using
  PluggableExporter newUsing: recipe,
where recipe is structured description of the exporting algorithm.

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

commit
	^ self transport commit: self
!

commitPathJs
	^ (extension ifNil: [ extension := #{} ]) at: #commitPathJs ifAbsentPut: [self transport commitPathJsFor: self]
!

commitPathJs: aString
	^ (extension ifNil: [ extension := #{} ]) at: #commitPathJs put: aString
!

commitPathSt
	^ (extension ifNil: [ extension := #{} ]) at: #commitPathSt ifAbsentPut: [self transport commitPathStFor: self]
!

commitPathSt: aString
	^ (extension ifNil: [ extension := #{} ]) at: #commitPathSt put: aString
!

transport
	^ PackageHandler for: self transportType
!

transportType
	<return (self.transport && self.transport.type) || 'unknown';>
! !

