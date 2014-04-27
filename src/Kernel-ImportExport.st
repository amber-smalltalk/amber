Smalltalk createPackage: 'Kernel-ImportExport'!
Object subclass: #AbstractExporter
	instanceVariableNames: ''
	package: 'Kernel-ImportExport'!
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
	Therefore topological sorting (dependency resolution) does not matter here.
	Not sorting topologically improves the speed by a number of magnitude.
	
	Not to shuffle diffs, classes are sorted by their name."
	
	(Smalltalk classes asArray sorted: [ :a :b | a name < b name ]) do: [ :each |
		{each. each class} do: [ :behavior |
			(behavior protocols includes: extensionName) ifTrue: [
				result add: (ExportMethodProtocol name: extensionName theClass: behavior) ] ] ].

	^ result
! !

!AbstractExporter methodsFor: 'convenience'!

chunkEscape: aString
	"Replace all occurrences of !! with !!!! and trim at both ends."

	^ (aString replace: '!!' with: '!!!!') trimBoth
!

classNameFor: aClass
	^ aClass isMetaclass
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

AbstractExporter subclass: #ChunkExporter
	instanceVariableNames: ''
	package: 'Kernel-ImportExport'!
!ChunkExporter commentStamp!
I am an exporter dedicated to outputting Amber source code in the classic Smalltalk chunk format.

I do not output any compiled code.!

!ChunkExporter methodsFor: 'accessing'!

extensionCategoriesOfPackage: aPackage
	"Issue #143: sort protocol alphabetically"

	| name map result |
	name := aPackage name.
	result := OrderedCollection new.
	(Package sortedClasses: Smalltalk classes) do: [ :each |
		{each. each class} do: [ :aClass |
			map := Dictionary new.
			aClass protocolsDo: [ :category :methods |
				category = ('*', name) ifTrue: [ map at: category put: methods ] ].
			result addAll: ((map keys sorted: [ :a :b | a <= b ]) collect: [ :category |
				MethodCategory name: category theClass: aClass methods: (map at: category) ]) ] ].
	^ result
!

ownCategoriesOfClass: aClass
	"Answer the protocols of aClass that are not package extensions"
	
	"Issue #143: sort protocol alphabetically"

	| map |
	map := Dictionary new.
	aClass protocolsDo: [ :each :methods |
		(each match: '^\*') ifFalse: [ map at: each put: methods ] ].
	^ (map keys sorted: [ :a :b | a <= b ]) collect: [ :each |
		MethodCategory name: each theClass: aClass methods: (map at: each) ]
!

ownCategoriesOfMetaClass: aClass
	"Issue #143: sort protocol alphabetically"

	^ self ownCategoriesOfClass: aClass class
!

ownMethodProtocolsOfClass: aClass
	"Answer a collection of ExportMethodProtocol object of aClass that are not package extensions"
	
	^ aClass ownProtocols collect: [ :each |
		ExportMethodProtocol name: each theClass: aClass ]
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
		do: [ :each | aStream nextPutAll: each ]
		separatedBy: [ aStream nextPutAll: ' ' ].
	aStream
		nextPutAll: ''''; lf;
		tab; nextPutAll: 'package: ''', aClass category, '''!!'; lf.
	aClass comment notEmpty ifTrue: [
		aStream
		nextPutAll: '!!', (self classNameFor: aClass), ' commentStamp!!';lf;
		nextPutAll: (self chunkEscape: aClass comment), '!!';lf ].
	aStream lf
!

exportMetaDefinitionOf: aClass on: aStream

	aClass class instanceVariableNames isEmpty ifFalse: [
		aStream
			nextPutAll: (self classNameFor: aClass class);
			nextPutAll: ' instanceVariableNames: '''.
		aClass class instanceVariableNames
			do: [ :each | aStream nextPutAll: each ]
			separatedBy: [ aStream nextPutAll: ' ' ].
		aStream
			nextPutAll: '''!!'; lf; lf ]
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
		nextPutAll: 'Smalltalk createPackage: ''', aPackage name, '''!!';
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
	package: 'Kernel-ImportExport'!
!Exporter commentStamp!
I am responsible for outputting Amber code into a JavaScript string.

The generated output is enough to reconstruct the exported data, including Smalltalk source code and other metadata.

## Use case

I am typically used to save code outside of the Amber runtime (committing to disk, etc.).!

!Exporter methodsFor: 'accessing'!

ownMethodsOfClass: aClass
	"Issue #143: sort methods alphabetically"

	^ ((aClass methodDictionary values) sorted: [ :a :b | a selector <= b selector ])
		reject: [ :each | (each protocol match: '^\*') ]
!

ownMethodsOfMetaClass: aClass
	"Issue #143: sort methods alphabetically"

	^ self ownMethodsOfClass: aClass class
! !

!Exporter methodsFor: 'convenience'!

classNameFor: aClass
	^ aClass isMetaclass
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
		nextPutAll: 'globals.', (self classNameFor: aClass superclass);
		nextPutAll: ', ['.
	aClass instanceVariableNames
		do: [ :each | aStream nextPutAll: '''', each, '''' ]
		separatedBy: [ aStream nextPutAll: ', ' ].
	aStream
		nextPutAll: '], ''';
		nextPutAll: aClass category, '''';
		nextPutAll: ');'.
	aClass comment notEmpty ifTrue: [
		aStream
			lf;
		nextPutAll: 'globals.';
		nextPutAll: (self classNameFor: aClass);
		nextPutAll: '.comment=';
		nextPutAll: aClass comment asJavascript;
		nextPutAll: ';' ].
	aStream lf
!

exportMetaDefinitionOf: aClass on: aStream
	aStream lf.
	aClass class instanceVariableNames isEmpty ifFalse: [
		aStream
		nextPutAll: 'globals.', (self classNameFor: aClass class);
		nextPutAll: '.iVarNames = ['.
		aClass class instanceVariableNames
		do: [ :each | aStream nextPutAll: '''', each, '''' ]
		separatedBy: [ aStream nextPutAll: ',' ].
		aStream nextPutAll: '];', String lf ]
!

exportMethod: aMethod on: aStream
	aStream
		nextPutAll: 'smalltalk.addMethod(';lf;
		"nextPutAll: aMethod selector asSelector asJavascript, ',';lf;"
		nextPutAll: 'smalltalk.method({';lf;
		nextPutAll: 'selector: ', aMethod selector asJavascript, ',';lf;
		nextPutAll: 'protocol: ''', aMethod protocol, ''',';lf;
		nextPutAll: 'fn: ', aMethod fn compiledSource, ',';lf;
		nextPutAll: 'args: ', aMethod arguments asJavascript, ','; lf;
		nextPutAll: 'source: ', aMethod source asJavascript, ',';lf;
		nextPutAll: 'messageSends: ', aMethod messageSends asJavascript, ',';lf;
		nextPutAll: 'referencedClasses: ', aMethod referencedClasses asJavascript.
	aStream
		lf;
		nextPutAll: '}),';lf;
		nextPutAll: 'globals.', (self classNameFor: aMethod methodClass);
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
	aStream
		nextPutAll: 'smalltalk.packages[';
		nextPutAll: aPackage name asJavascript;
		nextPutAll: '].transport = ';
		nextPutAll: aPackage transport asJSONString;
		nextPutAll: ';';
		lf
! !

Exporter subclass: #AmdExporter
	instanceVariableNames: 'namespace'
	package: 'Kernel-ImportExport'!
!AmdExporter commentStamp!
I am used to export Packages in an AMD (Asynchronous Module Definition) JavaScript format.!

!AmdExporter methodsFor: 'output'!

exportPackageEpilogueOf: aPackage on: aStream
	aStream
		nextPutAll: '});';
		lf
!

exportPackagePrologueOf: aPackage on: aStream
	aStream
		nextPutAll: 'define("';
		nextPutAll: (self amdNamespaceOfPackage: aPackage);
		nextPutAll: '/';
		nextPutAll: aPackage name;
		nextPutAll: '", ';
		nextPutAll: (#('amber_vm/smalltalk' 'amber_vm/nil' 'amber_vm/_st' 'amber_vm/globals'), (self amdNamesOfPackages: aPackage loadDependencies)) asJavascript;
		nextPutAll: ', function(smalltalk,nil,_st, globals){';
		lf
! !

!AmdExporter methodsFor: 'private'!

amdNamesOfPackages: anArray
	^ (anArray
		select: [ :each | (self amdNamespaceOfPackage: each) notNil ])
		collect: [ :each | (self amdNamespaceOfPackage: each), '/', each name ]
!

amdNamespaceOfPackage: aPackage
	^ (aPackage transport type = 'amd')
		ifTrue: [ aPackage transport namespace ]
		ifFalse: [ nil ]
! !

Object subclass: #ChunkParser
	instanceVariableNames: 'stream last'
	package: 'Kernel-ImportExport'!
!ChunkParser commentStamp!
I am responsible for parsing aStream contents in the chunk format.

## API

    ChunkParser new
        stream: aStream;
        nextChunk!

!ChunkParser methodsFor: 'accessing'!

last
	^ last
!

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
		[ char := stream next.
		char notNil ] whileTrue: [
				char = '!!' ifTrue: [
						stream peek = '!!'
								ifTrue: [ stream next "skipping the escape double" ]
								ifFalse: [ ^ last := result contents trimBoth "chunk end marker found" ]].
				result nextPut: char ].
	^ last := nil "a chunk needs to end with !!"
! !

!ChunkParser class methodsFor: 'instance creation'!

on: aStream
	^ self new stream: aStream
! !

Object subclass: #ExportMethodProtocol
	instanceVariableNames: 'name theClass'
	package: 'Kernel-ImportExport'!
!ExportMethodProtocol commentStamp!
I am an abstraction for a method protocol in a class / metaclass.

I know of my class, name and methods.
I am used when exporting a package.!

!ExportMethodProtocol methodsFor: 'accessing'!

methods
	^ (self theClass methodsInProtocol: self name)
		sorted: [ :a :b | a selector <= b selector ]
!

name
	^ name
!

name: aString
	name := aString
!

theClass
	^ theClass
!

theClass: aClass
	theClass := aClass
! !

!ExportMethodProtocol class methodsFor: 'instance creation'!

name: aString theClass: aClass
	^ self new
		name: aString;
		theClass: aClass;
		yourself
! !

Object subclass: #Importer
	instanceVariableNames: 'lastSection lastChunk'
	package: 'Kernel-ImportExport'!
!Importer commentStamp!
I can import Amber code from a string in the chunk format.

## API

    Importer new import: aString!

!Importer methodsFor: 'accessing'!

lastChunk
	^ lastChunk
!

lastSection
	^ lastSection
! !

!Importer methodsFor: 'fileIn'!

import: aStream
	| chunk result parser lastEmpty |
	parser := ChunkParser on: aStream.
	lastEmpty := false.
	lastSection := 'n/a, not started'.
	lastChunk := nil.
	[
	[ chunk := parser nextChunk.
	chunk isNil ] whileFalse: [
		chunk isEmpty
			ifTrue: [ lastEmpty := true ]
			ifFalse: [
				lastSection := chunk.
				result := Compiler new evaluateExpression: chunk.
				lastEmpty
						ifTrue: [
									lastEmpty := false.
									result scanFrom: parser ]] ].
	lastSection := 'n/a, finished'
	] on: Error do: [:e | lastChunk := parser last. e signal ].
! !

InterfacingObject subclass: #PackageHandler
	instanceVariableNames: ''
	package: 'Kernel-ImportExport'!
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
	self 
		commit: aPackage
		onSuccess: []
		onError: [ :error |
			PackageCommitError new
				messageText: 'Commiting failed with reason: "' , (error responseText) , '"';
				signal ]
!

commit: aPackage onSuccess: aBlock onError: anotherBlock
	self 
		commitJsFileFor: aPackage 
		onSuccess: [
			self 
				commitStFileFor: aPackage 
				onSuccess: [ aPackage beClean. aBlock value ]
				onError: anotherBlock ] 
		onError: anotherBlock
!

commitJsFileFor: aPackage onSuccess: aBlock onError: anotherBlock
	self 
		ajaxPutAt: (self commitPathJsFor: aPackage), '/', aPackage name, '.js'
		data: (self contentsFor: aPackage)
		onSuccess: aBlock
		onError: anotherBlock
!

commitStFileFor: aPackage onSuccess: aBlock onError: anotherBlock
	self 
		ajaxPutAt: (self commitPathStFor: aPackage), '/', aPackage name, '.st'
		data: (self chunkContentsFor: aPackage)
		onSuccess: aBlock
		onError: anotherBlock
! !

!PackageHandler methodsFor: 'error handling'!

onCommitError: anError
	PackageCommitError new
		messageText: 'Commiting failed with reason: "' , (anError responseText) , '"';
		signal
! !

!PackageHandler methodsFor: 'factory'!

chunkExporter
	^ self chunkExporterClass new
!

exporter
	^ self exporterClass new
! !

!PackageHandler methodsFor: 'loading'!

load: aPackage
	self subclassResponsibility
! !

!PackageHandler methodsFor: 'private'!

ajaxPutAt: aURL data: aString onSuccess: aBlock onError: anotherBlock
	self
		ajax: #{
			'url' -> aURL.
			'type' -> 'PUT'.
			'data' -> aString.
			'contentType' -> 'text/plain;charset=UTF-8'.
			'success' -> aBlock.
			'error' -> anotherBlock
		}
! !

PackageHandler subclass: #AmdPackageHandler
	instanceVariableNames: ''
	package: 'Kernel-ImportExport'!
!AmdPackageHandler commentStamp!
I am responsible for handling package loading and committing.

I should not be used directly. Instead, use the corresponding `Package` methods.!

!AmdPackageHandler methodsFor: 'accessing'!

commitPathJsFor: aPackage
	^ self toUrl: (self namespaceFor: aPackage)
!

commitPathStFor: aPackage
	"If _source is not mapped, .st will be committed to .js path.
	It is recommended not to use _source as it can be deprecated."
	
	| path pathWithout |
	path := self toUrl: (self namespaceFor: aPackage), '/_source'.
	pathWithout := self commitPathJsFor: aPackage.
	^ path = (pathWithout, '/_source') ifTrue: [ pathWithout ] ifFalse: [ path ]
!

exporterClass
	^ AmdExporter
! !

!AmdPackageHandler methodsFor: 'committing'!

namespaceFor: aPackage
	^ aPackage transport namespace
! !

!AmdPackageHandler methodsFor: 'loading'!

load: aPackage
	Smalltalk amdRequire
		ifNil: [ self error: 'AMD loader not present' ]
		ifNotNil: [ :require |
			require value: (Array new: (self namespaceFor: aPackage), '/', aPackage name ) ]
! !

!AmdPackageHandler methodsFor: 'private'!

toUrl: aString
	^ Smalltalk amdRequire
		ifNil: [ self error: 'AMD loader not present' ]
		ifNotNil: [ :require | (require basicAt: 'toUrl') value: aString ]
! !

!AmdPackageHandler class methodsFor: 'commit paths'!

defaultNamespace
	^ Smalltalk defaultAmdNamespace
!

defaultNamespace: aString
	Smalltalk defaultAmdNamespace: aString
! !

Object subclass: #PackageTransport
	instanceVariableNames: 'package'
	package: 'Kernel-ImportExport'!
!PackageTransport commentStamp!
I represent the transport mechanism used to commit a package.

My concrete subclasses have a `#handler` to which committing is delegated.!

!PackageTransport methodsFor: 'accessing'!

commitHandlerClass
	self subclassResponsibility
!

definition
	^ ''
!

package
	^ package
!

package: aPackage
	package := aPackage
!

type
	^ self class type
! !

!PackageTransport methodsFor: 'committing'!

commit
	self commitHandler commit: self package
!

commitOnSuccess: aBlock onError: anotherBlock
	self commitHandler 
		commit: self package
		onSuccess: aBlock
		onError: anotherBlock
! !

!PackageTransport methodsFor: 'converting'!

asJSON
	^ #{ 'type' -> self type }
! !

!PackageTransport methodsFor: 'factory'!

commitHandler
	^ self commitHandlerClass new
! !

!PackageTransport methodsFor: 'initialization'!

setupFromJson: anObject
	"no op. override if needed in subclasses"
! !

!PackageTransport methodsFor: 'loading'!

load
	self commitHandler load: self package
! !

PackageTransport class instanceVariableNames: 'registry'!

!PackageTransport class methodsFor: 'accessing'!

classRegisteredFor: aString
	^ registry at: aString
!

defaultType
	^ AmdPackageTransport type
!

type
	"Override in subclasses"
	^ nil
! !

!PackageTransport class methodsFor: 'initialization'!

initialize
	super initialize.
	registry := #{}.
	self register
! !

!PackageTransport class methodsFor: 'instance creation'!

for: aString
	^ (self classRegisteredFor: aString) new
!

fromJson: anObject
	anObject ifNil: [ ^ self for: self defaultType ].
	
	^ (self for: anObject type)
		setupFromJson: anObject;
		yourself
! !

!PackageTransport class methodsFor: 'registration'!

register
	PackageTransport register: self
!

register: aClass
	aClass type ifNotNil: [
		registry at: aClass type put: aClass ]
! !

PackageTransport subclass: #AmdPackageTransport
	instanceVariableNames: 'namespace'
	package: 'Kernel-ImportExport'!
!AmdPackageTransport commentStamp!
I am the default transport for committing packages.

See `AmdExporter` and `AmdPackageHandler`.!

!AmdPackageTransport methodsFor: 'accessing'!

commitHandlerClass
	^ AmdPackageHandler
!

definition
	^ String streamContents: [ :stream |
		stream 
			nextPutAll: self class name;
			nextPutAll: ' namespace: ';
			nextPutAll: '''', self namespace, '''' ]
!

namespace
	^ namespace ifNil: [ self defaultNamespace ]
!

namespace: aString
	namespace := aString
! !

!AmdPackageTransport methodsFor: 'actions'!

setPath: aString
	"Set the path the the receiver's `namespace`"
	
	(require basicAt: 'config') value: #{
		'paths' -> #{
			self namespace -> aString
		}
	}.
! !

!AmdPackageTransport methodsFor: 'converting'!

asJSON
	^ super asJSON
		at: 'amdNamespace' put: self namespace;
		yourself
! !

!AmdPackageTransport methodsFor: 'defaults'!

defaultNamespace
	^ Smalltalk defaultAmdNamespace
! !

!AmdPackageTransport methodsFor: 'initialization'!

setupFromJson: anObject
	self namespace: (anObject at: 'amdNamespace')
! !

!AmdPackageTransport methodsFor: 'printing'!

printOn: aStream
	super printOn: aStream.
	aStream
		nextPutAll: ' (AMD Namespace: ';
		nextPutAll: self namespace;
		nextPutAll: ')'
! !

!AmdPackageTransport class methodsFor: 'accessing'!

type
	^ 'amd'
! !

!AmdPackageTransport class methodsFor: 'instance creation'!

namespace: aString
	^ self new
		namespace: aString;
		yourself
! !

!Package methodsFor: '*Kernel-ImportExport'!

commit
	^ self transport commit
!

load
	^ self transport load
!

loadFromNamespace: aString
	^ self transport
		namespace: aString;
		load
! !

!Package class methodsFor: '*Kernel-ImportExport'!

load: aPackageName
	(self named: aPackageName) load
!

load: aPackageName fromNamespace: aString
	(self named: aPackageName) loadFromNamespace: aString
! !

