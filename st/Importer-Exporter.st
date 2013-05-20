Smalltalk current createPackage: 'Importer-Exporter'!
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

!Exporter methodsFor: 'fileOut'!

exportAll
	"Export all packages in the system."

	^String streamContents: [:stream |
		Smalltalk current packages do: [:pkg |
		stream nextPutAll: (self exportPackage: pkg name)]]
!

exportClass: aClass
	"Export a single class. Subclasses override these methods."

	^String streamContents: [:stream |
		self exportDefinitionOf: aClass on: stream.
		self exportMethodsOf: aClass on: stream.
		self exportMetaDefinitionOf: aClass on: stream.
		self exportMethodsOf: aClass class on: stream]
!

exportPackage: packageName
	"Export a given package by name."

	| package |
	^String streamContents: [:stream |
				package := Smalltalk current packageAt: packageName.
				self exportPackageDefinitionOf: package on: stream.

		"Export classes in dependency order.
		Update (issue #171): Remove duplicates for export"
			package sortedClasses asSet do: [:each |
						stream nextPutAll: (self exportClass: each)].
		self exportPackageExtensionsOf: package on: stream]
! !

!Exporter methodsFor: 'private'!

classNameFor: aClass
	^aClass isMetaclass
		ifTrue: [aClass instanceClass name, '.klass']
		ifFalse: [
		aClass isNil
			ifTrue: ['nil']
			ifFalse: [aClass name]]
!

exportDefinitionOf: aClass on: aStream
	aStream
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
	aClass class instanceVariableNames isEmpty ifFalse: [
		aStream
		nextPutAll: 'smalltalk.', (self classNameFor: aClass class);
		nextPutAll: '.iVarNames = ['.
		aClass class instanceVariableNames
		do: [:each | aStream nextPutAll: '''', each, '''']
		separatedBy: [aStream nextPutAll: ','].
		aStream nextPutAll: '];', String lf]
!

exportMethod: aMethod of: aClass on: aStream
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
		nextPutAll: 'smalltalk.', (self classNameFor: aClass);
		nextPutAll: ');';lf;lf
!

exportMethodsOf: aClass on: aStream
	"Issue #143: sort methods alphabetically"

	((aClass methodDictionary values) sorted: [:a :b | a selector <= b selector]) do: [:each |
		(each category match: '^\*') ifFalse: [
			self exportMethod: each of: aClass on: aStream]].
	aStream lf
!

exportPackageDefinitionOf: package on: aStream
	aStream
		nextPutAll: 'smalltalk.addPackage(';
		nextPutAll: '''', package name, ''');';
		lf
!

exportPackageExtensionsOf: package on: aStream
	"Issue #143: sort classes and methods alphabetically"

	| name |
	name := package name.
	(Package sortedClasses: Smalltalk current classes) do: [:each |
		{each. each class} do: [:aClass |
			((aClass methodDictionary values) sorted: [:a :b | a selector <= b selector]) do: [:method |
				(method category match: '^\*', name) ifTrue: [
					self exportMethod: method of: aClass on: aStream ]]]]
! !

Exporter subclass: #ChunkExporter
	instanceVariableNames: ''
	package: 'Importer-Exporter'!
!ChunkExporter commentStamp!
I am an exporter dedicated to outputting Amber source code in the classic Smalltalk chunk format.

I do not output any compiled code.!

!ChunkExporter methodsFor: 'private'!

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

exportMethod: aMethod of: aClass on: aStream
	aStream
		lf; lf; nextPutAll: (self chunkEscape: aMethod source); lf;
		nextPutAll: '!!'
!

exportMethods: methods category: category of: aClass on: aStream
	"Issue #143: sort methods alphabetically"

	aStream
		nextPutAll: '!!', (self classNameFor: aClass);
		nextPutAll: ' methodsFor: ''', category, '''!!'.
		(methods sorted: [:a :b | a selector <= b selector]) do: [:each |
				self exportMethod: each of: aClass on: aStream].
	aStream nextPutAll: ' !!'; lf; lf
!

exportMethodsOf: aClass on: aStream
	"Issue #143: sort protocol alphabetically"

	| map |
	map := Dictionary new.
	aClass protocolsDo: [:category :methods |
		(category match: '^\*') ifFalse: [ map at: category put: methods ]].
	(map keys sorted: [:a :b | a <= b ]) do: [:category | | methods |
		methods := map at: category.
		self
			exportMethods: methods
			category: category
			of: aClass
			on: aStream ]
!

exportPackageDefinitionOf: package on: aStream
	"Chunk format."

	aStream
		nextPutAll: 'Smalltalk current createPackage: ''', package name, '''!!';
		lf
!

exportPackageExtensionsOf: package on: aStream
	"We need to override this one too since we need to group
	all methods in a given protocol under a leading methodsFor: chunk
	for that class."

	"Issue #143: sort protocol alphabetically"

	| name map |
	name := package name.
	(Package sortedClasses: Smalltalk current classes) do: [:each |
		{each. each class} do: [:aClass |
			map := Dictionary new.
			aClass protocolsDo: [:category :methods |
				(category match: '^\*', name) ifTrue: [ map at: category put: methods ]].
			(map keys sorted: [:a :b | a <= b ]) do: [:category | | methods |
				methods := map at: category.
				self exportMethods: methods category: category of: aClass on: aStream ]]]
! !

Exporter subclass: #StrippedExporter
	instanceVariableNames: ''
	package: 'Importer-Exporter'!
!StrippedExporter commentStamp!
I export Amber code into a JavaScript string, but without any optional associated data like the Amber source code.!

!StrippedExporter methodsFor: 'private'!

exportDefinitionOf: aClass on: aStream
	aStream
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

exportMethod: aMethod of: aClass on: aStream
	aStream
		nextPutAll: 'smalltalk.addMethod(';lf;
		"nextPutAll: aMethod selector asSelector asJavascript, ',';lf;"
		nextPutAll: 'smalltalk.method({';lf;
		nextPutAll: 'selector: ', aMethod selector asJavascript, ',';lf;
		nextPutAll: 'fn: ', aMethod fn compiledSource, ',';lf;
		nextPutAll: 'messageSends: ', aMethod messageSends asJavascript;
		nextPutAll: '}),';lf;
		nextPutAll: 'smalltalk.', (self classNameFor: aClass);
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

Object subclass: #PackageHandler
	instanceVariableNames: ''
	package: 'Importer-Exporter'!
!PackageHandler commentStamp!
I am responsible for handling package loading and committing.

I should not be used directly. Instead, use the corresponding `Package` methods.!

!PackageHandler methodsFor: 'committing'!

commit: aPackage
	{ 
		Exporter -> (aPackage commitPathJs, '/', aPackage name, '.js').
		StrippedExporter -> (aPackage commitPathJs, '/', aPackage name, '.deploy.js').
		ChunkExporter -> (aPackage commitPathSt, '/', aPackage name, '.st')
	} 
		do: [ :commitStrategy|| fileContents |
			fileContents := (commitStrategy key new exportPackage: aPackage name).
			self ajaxPutAt: commitStrategy value data: fileContents ]
		displayingProgress: 'Committing package ', aPackage name
! !

!PackageHandler methodsFor: 'loading'!

loadPackage: packageName prefix: aString
	| url |
	url := '/', aString, '/js/', packageName, '.js'.
	jQuery
		ajax: url
		options: #{
			'type' -> 'GET'.
			'dataType' -> 'script'.
			'complete' -> [ :jqXHR :textStatus |
				jqXHR readyState = 4
					ifTrue: [ self setupPackageNamed: packageName prefix: aString ] ].
			'error' -> [ window alert: 'Could not load package at: ', url ]
		}
!

loadPackages: aCollection prefix: aString
	aCollection do: [ :each |
		self loadPackage: each prefix: aString ]
! !

!PackageHandler methodsFor: 'private'!

ajaxPutAt: aURL data: aString
	jQuery
		ajax: aURL 
		options: #{ 
			'type' -> 'PUT'.
			'data' -> aString.
			'contentType' -> 'text/plain;charset=UTF-8'.
			'error' -> [ :xhr | self error: 'Commiting ' , aURL , ' failed with reason: "' , (xhr responseText) , '"'] }
!

setupPackageNamed: packageName prefix: aString

	(Package named: packageName)
		setupClasses;
		commitPathJs: '/', aString, '/js';
		commitPathSt: '/', aString, '/st'
! !

!PackageHandler class methodsFor: 'loading'!

loadPackages: aCollection prefix: aString
	^ self new loadPackages: aCollection prefix: aString
! !

!Package methodsFor: '*Importer-Exporter'!

commit
	^ PackageHandler new commit: self
! !

