Smalltalk current createPackage: 'Compiler' properties: #{}!
Object subclass: #ChunkParser
	instanceVariableNames: 'stream'
	category: 'Compiler'!

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
                                ifFalse: [^result contents trimBoth  "chunk end marker found"]].
                 result nextPut: char].
	^nil "a chunk needs to end with !!"
! !

!ChunkParser class methodsFor: 'not yet classified'!

on: aStream
	^self new stream: aStream
! !

Object subclass: #Importer
	instanceVariableNames: ''
	category: 'Compiler'!

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
        		result := Compiler new loadExpression: chunk.
        		lastEmpty 
            			ifTrue: [
                                  	lastEmpty := false.
                                  	result scanFrom: parser]]]
! !

Object subclass: #Exporter
	instanceVariableNames: ''
	category: 'Compiler'!

!Exporter methodsFor: 'fileOut'!

exportPackage: packageName
	"Export a given package by name."

	| package |
	^String streamContents: [:stream |
                package := Smalltalk current packageAt: packageName.
                self exportPackageDefinitionOf: package on: stream.
	    	package classes do: [:each |
                        stream nextPutAll: (self exportClass: each)].
		self exportPackageExtensionsOf: package on: stream]
!

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
! !

!Exporter methodsFor: 'private'!

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
		nextPutAll: 'unescape(''', aClass comment escaped, ''')'].
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

exportMethodsOf: aClass on: aStream
	aClass methodDictionary values do: [:each |
		(each category match: '^\*') ifFalse: [
			self exportMethod: each of: aClass on: aStream]].
	aStream lf
!

classNameFor: aClass
	^aClass isMetaclass
	    ifTrue: [aClass instanceClass name, '.klass']
	    ifFalse: [
		aClass isNil
		    ifTrue: ['nil']
		    ifFalse: [aClass name]]
!

exportMethod: aMethod of: aClass on: aStream
	aStream 
		nextPutAll: 'smalltalk.addMethod(';lf;
		nextPutAll: 'unescape(''', aMethod selector asSelector escaped, '''),';lf;
		nextPutAll: 'smalltalk.method({';lf;
		nextPutAll: 'selector: unescape(''', aMethod selector escaped, '''),';lf;
		nextPutAll: 'category: ''', aMethod category, ''',';lf;
		nextPutAll: 'fn: ', aMethod fn compiledSource, ',';lf;
		nextPutAll: 'args: ', aMethod arguments asJavascript, ','; lf;
		nextPutAll: 'source: unescape(''', aMethod source escaped, '''),';lf;
		nextPutAll: 'messageSends: ', aMethod messageSends asJavascript, ',';lf;
		nextPutAll: 'referencedClasses: ', aMethod referencedClasses asJavascript.
	aStream
		lf;
		nextPutAll: '}),';lf;
		nextPutAll: 'smalltalk.', (self classNameFor: aClass);
		nextPutAll: ');';lf;lf
!

exportPackageExtensionsOf: package on: aStream
	| name |
	name := package name.
	Smalltalk current classes, (Smalltalk current classes collect: [:each | each class]) do: [:each |
		each methodDictionary values do: [:method |
			method category = ('*', name) ifTrue: [
				self exportMethod: method of: each on: aStream]]]
!

exportPackageDefinitionOf: package on: aStream
	aStream 
	    nextPutAll: 'smalltalk.addPackage(';
	    nextPutAll: '''', package name, ''', ', package propertiesAsJSON , ');'.
	aStream lf
! !

Exporter subclass: #ChunkExporter
	instanceVariableNames: ''
	category: 'Compiler'!

!ChunkExporter methodsFor: 'not yet classified'!

exportDefinitionOf: aClass on: aStream
	"Chunk format."

	aStream 
	    nextPutAll: (self classNameFor: aClass superclass);
	    nextPutAll: ' subclass: #', (self classNameFor: aClass); lf;
	    nextPutAll: '	instanceVariableNames: '''.
	aClass instanceVariableNames 
	    do: [:each | aStream nextPutAll: each]
	    separatedBy: [aStream nextPutAll: ' '].
	aStream	
	    nextPutAll: ''''; lf;
	    nextPutAll: '	category: ''', aClass category, '''!!'; lf.
 	aClass comment notEmpty ifTrue: [
	    aStream 
		nextPutAll: '!!', (self classNameFor: aClass), ' commentStamp!!';lf;
		nextPutAll: (self chunkEscape: aClass comment), '!!';lf].
	aStream lf
!

exportMethod: aMethod of: aClass on: aStream
	aStream 
		lf; lf; nextPutAll: (self chunkEscape: aMethod source); lf;
		nextPutAll: '!!'
!

exportMethodsOf: aClass on: aStream

   aClass protocolsDo: [:category :methods |
	(category match: '^\*') ifFalse: [ 
		self
			exportMethods: methods
			category: category
			of: aClass
			on: aStream]]
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

classNameFor: aClass
	^aClass isMetaclass
	    ifTrue: [aClass instanceClass name, ' class']
	    ifFalse: [
		aClass isNil
		    ifTrue: ['nil']
		    ifFalse: [aClass name]]
!

chunkEscape: aString
	"Replace all occurrences of !! with !!!! and trim at both ends."

	^(aString replace: '!!' with: '!!!!') trimBoth
!

exportMethods: methods category: category of: aClass on: aStream

	aStream
		nextPutAll: '!!', (self classNameFor: aClass);
		nextPutAll: ' methodsFor: ''', category, '''!!'.
    	methods do: [:each |
		self exportMethod: each of: aClass on: aStream].
	aStream nextPutAll: ' !!'; lf; lf
!

exportPackageExtensionsOf: package on: aStream
	"We need to override this one too since we need to group
	all methods in a given protocol under a leading methodsFor: chunk
	for that class."

	| name |
	name := package name.
	Smalltalk current classes, (Smalltalk current classes collect: [:each | each class]) do: [:each |
		each protocolsDo: [:category :methods |
			category = ('*', name) ifTrue: [
				self exportMethods: methods category: category of: each on: aStream]]]
!

exportPackageDefinitionOf: package on: aStream
	"Chunk format."

	aStream 
	    nextPutAll: 'Smalltalk current createPackage: ''', package name,
		''' properties: ', package properties storeString, '!!'; lf.
! !

Exporter subclass: #StrippedExporter
	instanceVariableNames: ''
	category: 'Compiler'!

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
		nextPutAll: '''', aMethod selector asSelector, ''',';lf;
		nextPutAll: 'smalltalk.method({';lf;
		nextPutAll: 'selector: ''', aMethod selector, ''',';lf;
		nextPutAll: 'fn: ', aMethod fn compiledSource;lf;
		nextPutAll: '}),';lf;
		nextPutAll: 'smalltalk.', (self classNameFor: aClass);
		nextPutAll: ');';lf;lf
! !

Object subclass: #Node
	instanceVariableNames: 'nodes'
	category: 'Compiler'!

!Node methodsFor: 'accessing'!

nodes
	^nodes ifNil: [nodes := Array new]
!

addNode: aNode
	self nodes add: aNode
! !

!Node methodsFor: 'building'!

nodes: aCollection
	nodes := aCollection
! !

!Node methodsFor: 'testing'!

isValueNode
	^false
!

isBlockNode
	^false
!

isBlockSequenceNode
	^false
! !

!Node methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitNode: self
! !

Node subclass: #MethodNode
	instanceVariableNames: 'selector arguments source'
	category: 'Compiler'!

!MethodNode methodsFor: 'accessing'!

selector
	^selector
!

selector: aString
	selector := aString
!

arguments
	^arguments ifNil: [#()]
!

arguments: aCollection
	arguments := aCollection
!

source
	^source
!

source: aString
	source := aString
! !

!MethodNode methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitMethodNode: self
! !

Node subclass: #SendNode
	instanceVariableNames: 'selector arguments receiver'
	category: 'Compiler'!

!SendNode methodsFor: 'accessing'!

selector
	^selector
!

selector: aString
	selector := aString
!

arguments
	^arguments ifNil: [arguments := #()]
!

arguments: aCollection
	arguments := aCollection
!

receiver
	^receiver
!

receiver: aNode
	receiver := aNode
!

valueForReceiver: anObject
	^SendNode new
	    receiver: (self receiver 
		ifNil: [anObject]
		ifNotNil: [self receiver valueForReceiver: anObject]);
	    selector: self selector;
	    arguments: self arguments;
	    yourself
!

cascadeNodeWithMessages: aCollection
	| first |
	first := SendNode new
	    selector: self selector;
	    arguments: self arguments;
	    yourself.
	^CascadeNode new
	    receiver: self receiver;
	    nodes: (Array with: first), aCollection;
	    yourself
! !

!SendNode methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitSendNode: self
! !

Node subclass: #CascadeNode
	instanceVariableNames: 'receiver'
	category: 'Compiler'!

!CascadeNode methodsFor: 'accessing'!

receiver
	^receiver
!

receiver: aNode
	receiver := aNode
! !

!CascadeNode methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitCascadeNode: self
! !

Node subclass: #AssignmentNode
	instanceVariableNames: 'left right'
	category: 'Compiler'!

!AssignmentNode methodsFor: 'accessing'!

left
	^left
!

left: aNode
	left := aNode.
	left assigned: true
!

right
	^right
!

right: aNode
	right := aNode
! !

!AssignmentNode methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitAssignmentNode: self
! !

Node subclass: #BlockNode
	instanceVariableNames: 'parameters inlined'
	category: 'Compiler'!

!BlockNode methodsFor: 'accessing'!

parameters
	^parameters ifNil: [parameters := Array new]
!

parameters: aCollection
	parameters := aCollection
!

inlined
	^inlined ifNil: [false]
!

inlined: aBoolean
	inlined := aBoolean
! !

!BlockNode methodsFor: 'testing'!

isBlockNode
	^true
! !

!BlockNode methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitBlockNode: self
! !

Node subclass: #SequenceNode
	instanceVariableNames: 'temps'
	category: 'Compiler'!

!SequenceNode methodsFor: 'accessing'!

temps
	^temps ifNil: [#()]
!

temps: aCollection
	temps := aCollection
! !

!SequenceNode methodsFor: 'testing'!

asBlockSequenceNode
	^BlockSequenceNode new
	    nodes: self nodes;
	    temps: self temps;
	    yourself
! !

!SequenceNode methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitSequenceNode: self
! !

SequenceNode subclass: #BlockSequenceNode
	instanceVariableNames: ''
	category: 'Compiler'!

!BlockSequenceNode methodsFor: 'testing'!

isBlockSequenceNode
	^true
! !

!BlockSequenceNode methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitBlockSequenceNode: self
! !

Node subclass: #ReturnNode
	instanceVariableNames: ''
	category: 'Compiler'!

!ReturnNode methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitReturnNode: self
! !

Node subclass: #ValueNode
	instanceVariableNames: 'value'
	category: 'Compiler'!

!ValueNode methodsFor: 'accessing'!

value
	^value
!

value: anObject
	value := anObject
! !

!ValueNode methodsFor: 'testing'!

isValueNode
	^true
! !

!ValueNode methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitValueNode: self
! !

ValueNode subclass: #VariableNode
	instanceVariableNames: 'assigned'
	category: 'Compiler'!

!VariableNode methodsFor: 'accessing'!

assigned
	^assigned ifNil: [false]
!

assigned: aBoolean
	assigned := aBoolean
! !

!VariableNode methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitVariableNode: self
! !

VariableNode subclass: #ClassReferenceNode
	instanceVariableNames: ''
	category: 'Compiler'!

!ClassReferenceNode methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitClassReferenceNode: self
! !

Node subclass: #JSStatementNode
	instanceVariableNames: 'source'
	category: 'Compiler'!

!JSStatementNode methodsFor: 'accessing'!

source
	^source ifNil: ['']
!

source: aString
	source := aString
! !

!JSStatementNode methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitJSStatementNode: self
! !

Object subclass: #NodeVisitor
	instanceVariableNames: ''
	category: 'Compiler'!

!NodeVisitor methodsFor: 'visiting'!

visit: aNode
	aNode accept: self
!

visitNode: aNode
!

visitMethodNode: aNode
	self visitNode: aNode
!

visitSequenceNode: aNode
	self visitNode: aNode
!

visitBlockSequenceNode: aNode
	self visitSequenceNode: aNode
!

visitBlockNode: aNode
	self visitNode: aNode
!

visitReturnNode: aNode
	self visitNode: aNode
!

visitSendNode: aNode
	self visitNode: aNode
!

visitCascadeNode: aNode
	self visitNode: aNode
!

visitValueNode: aNode
	self visitNode: aNode
!

visitVariableNode: aNode
!

visitAssignmentNode: aNode
	self visitNode: aNode
!

visitClassReferenceNode: aNode
	self 
	    nextPutAll: 'smalltalk.';
	    nextPutAll: aNode value
!

visitJSStatementNode: aNode
	self 
	    nextPutAll: 'function(){';
	    nextPutAll: aNode source;
	    nextPutAll: '})()'
!

visitDynamicArrayNode: aNode
	self visitNode: aNode
!

visitDynamicDictionaryNode: aNode
	self visitNode: aNode
! !

NodeVisitor subclass: #Compiler
	instanceVariableNames: 'stream nestedBlocks earlyReturn currentClass currentSelector unknownVariables tempVariables messageSends referencedClasses classReferenced source argVariables'
	category: 'Compiler'!

!Compiler methodsFor: 'accessing'!

parser
	^SmalltalkParser new
!

currentClass
	^currentClass
!

currentClass: aClass
	currentClass := aClass
!

unknownVariables
	^unknownVariables copy
!

pseudoVariables
	^#('self' 'super' 'true' 'false' 'nil' 'thisContext')
!

tempVariables
	^tempVariables copy
!

knownVariables
	^self pseudoVariables 
		addAll: self tempVariables;
		addAll: self argVariables;
		yourself
!

classNameFor: aClass
	^aClass isMetaclass
	    ifTrue: [aClass instanceClass name, '.klass']
	    ifFalse: [
		aClass isNil
		    ifTrue: ['nil']
		    ifFalse: [aClass name]]
!

source
	^source ifNil: ['']
!

source: aString
	source := aString
!

argVariables
	^argVariables copy
!

safeVariableNameFor: aString
	^(Smalltalk current reservedWords includes: aString)
		ifTrue: [aString, '_']
		ifFalse: [aString]
! !

!Compiler methodsFor: 'compiling'!

loadExpression: aString
	| result |
	DoIt addCompiledMethod: (self eval: (self compileExpression: aString)).
	result := DoIt new doIt.
	DoIt removeCompiledMethod: (DoIt methodDictionary at: #doIt).
	^result
!

load: aString forClass: aClass
	| compiled |
	compiled := self eval: (self compile: aString forClass: aClass).
	self setupClass: aClass.
	^compiled
!

compile: aString forClass: aClass
	self currentClass: aClass.
	self source: aString.
	^self compile: aString
!

compileExpression: aString
	self currentClass: DoIt.
	self source: 'doIt ^[', aString, '] value'.
	^self compileNode: (self parse: self source)
!

eval: aString
	<return eval(aString)>
!

compile: aString
	^self compileNode: (self parse: aString)
!

compileNode: aNode
	stream := '' writeStream.
	self visit: aNode.
	^stream contents
!

parse: aString
    ^Smalltalk current parse: aString
!

parseExpression: aString
    ^self parse: 'doIt ^[', aString, '] value'
!

recompile: aClass
	aClass methodDictionary do: [:each || method |
		method := self load: each source forClass: aClass.
		method category: each category.
		aClass addCompiledMethod: method].
	aClass isMetaclass ifFalse: [self recompile: aClass class]
!

recompileAll
	Smalltalk current classes do: [:each |
		Transcript show: each; cr.
		[self recompile: each] valueWithTimeout: 100]
!

setupClass: aClass
	<smalltalk.init(aClass)>
! !

!Compiler methodsFor: 'initialization'!

initialize
	super initialize.
	stream := '' writeStream. 
	unknownVariables := #().
	tempVariables := #().
	argVariables := #().
	messageSends := #().
	classReferenced := #()
! !

!Compiler methodsFor: 'optimizations'!

checkClass: aClassName for: receiver
        stream nextPutAll: '((($receiver = ', receiver, ').klass === smalltalk.', aClassName, ') ? '
!

inlineLiteral: aSelector receiverNode: anObject argumentNodes: aCollection
        | inlined |
        inlined := false.
 
	"-- BlockClosures --"

	(aSelector = 'whileTrue:') ifTrue: [
          	(anObject isBlockNode and: [aCollection first isBlockNode]) ifTrue: [
                	stream nextPutAll: '(function(){while('.
                  	self visit: anObject.
                  	stream nextPutAll: '()) {'.
                	self visit: aCollection first.
          		stream nextPutAll: '()}})()'.
                	inlined := true]].

	(aSelector = 'whileFalse:') ifTrue: [
          	(anObject isBlockNode and: [aCollection first isBlockNode]) ifTrue: [
                	stream nextPutAll: '(function(){while(!!'.
                  	self visit: anObject.
                  	stream nextPutAll: '()) {'.
                	self visit: aCollection first.
          		stream nextPutAll: '()}})()'.
                	inlined := true]].

	(aSelector = 'whileTrue') ifTrue: [
          	anObject isBlockNode ifTrue: [
                	stream nextPutAll: '(function(){while('.
                  	self visit: anObject.
                  	stream nextPutAll: '()) {}})()'.
                	inlined := true]].

	(aSelector = 'whileFalse') ifTrue: [
          	anObject isBlockNode ifTrue: [
                	stream nextPutAll: '(function(){while(!!'.
                  	self visit: anObject.
                  	stream nextPutAll: '()) {}})()'.
                	inlined := true]].

	"-- Numbers --"

	(aSelector = '+') ifTrue: [
          	(self isNode: anObject ofClass: Number) ifTrue: [
                  	self visit: anObject.
                  	stream nextPutAll: ' + '.
                	self visit: aCollection first.
                	inlined := true]].

	(aSelector = '-') ifTrue: [
          	(self isNode: anObject ofClass: Number) ifTrue: [
                  	self visit: anObject.
                  	stream nextPutAll: ' - '.
                	self visit: aCollection first.
                	inlined := true]].

	(aSelector = '*') ifTrue: [
          	(self isNode: anObject ofClass: Number) ifTrue: [
                  	self visit: anObject.
                  	stream nextPutAll: ' * '.
                	self visit: aCollection first.
                	inlined := true]].

	(aSelector = '/') ifTrue: [
          	(self isNode: anObject ofClass: Number) ifTrue: [
                  	self visit: anObject.
                  	stream nextPutAll: ' / '.
                	self visit: aCollection first.
                	inlined := true]].

	(aSelector = '<') ifTrue: [
          	(self isNode: anObject ofClass: Number) ifTrue: [
                  	self visit: anObject.
                  	stream nextPutAll: ' < '.
                	self visit: aCollection first.
                	inlined := true]].

	(aSelector = '<=') ifTrue: [
          	(self isNode: anObject ofClass: Number) ifTrue: [
                  	self visit: anObject.
                  	stream nextPutAll: ' <= '.
                	self visit: aCollection first.
                	inlined := true]].

	(aSelector = '>') ifTrue: [
          	(self isNode: anObject ofClass: Number) ifTrue: [
                  	self visit: anObject.
                  	stream nextPutAll: ' > '.
                	self visit: aCollection first.
                	inlined := true]].

	(aSelector = '>=') ifTrue: [
          	(self isNode: anObject ofClass: Number) ifTrue: [
                  	self visit: anObject.
                  	stream nextPutAll: ' >= '.
                	self visit: aCollection first.
                	inlined := true]].
                	   
	"-- UndefinedObject --"

	(aSelector = 'ifNil:') ifTrue: [
		aCollection first isBlockNode ifTrue: [
          		stream nextPutAll: '(($receiver = '.
          		self visit: anObject.
          		stream nextPutAll: ') == nil || $receiver == undefined) ? '.
                  	self visit: aCollection first.
                  	stream nextPutAll: '() : $receiver'.
                  	inlined := true]].

	(aSelector = 'ifNotNil:') ifTrue: [
		aCollection first isBlockNode ifTrue: [
          		stream nextPutAll: '(($receiver = '.
          		self visit: anObject.
          		stream nextPutAll: ') !!= nil && $receiver !!= undefined) ? '.
                  	self visit: aCollection first.
                  	stream nextPutAll: '() : nil'.
                  	inlined := true]].

	(aSelector = 'ifNil:ifNotNil:') ifTrue: [
		(aCollection first isBlockNode and: [aCollection second isBlockNode]) ifTrue: [
          		stream nextPutAll: '(($receiver = '.
          		self visit: anObject.
          		stream nextPutAll: ') == nil || $receiver == undefined) ? '.
                  	self visit: aCollection first.
                  	stream nextPutAll: '() : '.
                  	self visit: aCollection second.
                  	stream nextPutAll: '()'.
                  	inlined := true]].

	(aSelector = 'ifNotNil:ifNil:') ifTrue: [
		(aCollection first isBlockNode and: [aCollection second isBlockNode]) ifTrue: [
          		stream nextPutAll: '(($receiver = '.
          		self visit: anObject.
          		stream nextPutAll: ') == nil || $receiver == undefined) ? '.
                  	self visit: aCollection second.
                  	stream nextPutAll: '() : '.
                  	self visit: aCollection first.
                  	stream nextPutAll: '()'.
                  	inlined := true]].
                 
        ^inlined
!

isNode: aNode ofClass: aClass
	^aNode isValueNode and: [
          	aNode value class = aClass or: [
          		aNode value = 'self' and: [self currentClass = aClass]]]
!

inline: aSelector receiver: receiver argumentNodes: aCollection
        | inlined |
        inlined := false.

	"-- Booleans --"

	(aSelector = 'ifFalse:') ifTrue: [
		aCollection first isBlockNode ifTrue: [
                	self checkClass: 'Boolean' for: receiver.
                	stream nextPutAll: '(!! $receiver ? '.
                	self visit: aCollection first.
          		stream nextPutAll: '() : nil)'.
                	inlined := true]].

	(aSelector = 'ifTrue:') ifTrue: [
		aCollection first isBlockNode ifTrue: [
                	self checkClass: 'Boolean' for: receiver.
                	stream nextPutAll: '($receiver ? '.
                	self visit: aCollection first.
          		stream nextPutAll: '() : nil)'.
                	inlined := true]].

	(aSelector = 'ifTrue:ifFalse:') ifTrue: [
		(aCollection first isBlockNode and: [aCollection second isBlockNode]) ifTrue: [
                	self checkClass: 'Boolean' for: receiver.
                	stream nextPutAll: '($receiver ? '.
                	self visit: aCollection first.
          		stream nextPutAll: '() : '.
          		self visit: aCollection second.
          		stream nextPutAll: '())'.
                	inlined := true]].

	(aSelector = 'ifFalse:ifTrue:') ifTrue: [
		(aCollection first isBlockNode and: [aCollection second isBlockNode]) ifTrue: [
                	self checkClass: 'Boolean' for: receiver.
                	stream nextPutAll: '(!! $receiver ? '.
                	self visit: aCollection first.
          		stream nextPutAll: '() : '.
          		self visit: aCollection second.
          		stream nextPutAll: '())'.
                	inlined := true]].

	"-- Numbers --"

	(aSelector = '<') ifTrue: [
                self checkClass: 'Number' for: receiver.
                stream nextPutAll: '$receiver <'.
                self visit: aCollection first.
                inlined := true].

	(aSelector = '<=') ifTrue: [
                self checkClass: 'Number' for: receiver.
                stream nextPutAll: '$receiver <='.
                self visit: aCollection first.
                inlined := true].

	(aSelector = '>') ifTrue: [ 
                self checkClass: 'Number' for: receiver.
                stream nextPutAll: '$receiver >'.
                self visit: aCollection first.
                inlined := true].

	(aSelector = '>=') ifTrue: [
                self checkClass: 'Number' for: receiver.
                stream nextPutAll: '$receiver >='.
                self visit: aCollection first.
                inlined := true].

        (aSelector = '+') ifTrue: [
                self checkClass: 'Number' for: receiver.
                stream nextPutAll: '$receiver +'.
                self visit: aCollection first.
                inlined := true].

        (aSelector = '-') ifTrue: [
                self checkClass: 'Number' for: receiver.
                stream nextPutAll: '$receiver -'.
                self visit: aCollection first.
                inlined := true].

        (aSelector = '*') ifTrue: [
                self checkClass: 'Number' for: receiver.
                stream nextPutAll: '$receiver *'.
                self visit: aCollection first.
                inlined := true].

        (aSelector = '/') ifTrue: [
                self checkClass: 'Number' for: receiver.
                stream nextPutAll: '$receiver /'.
                self visit: aCollection first.
                inlined := true].

        ^inlined
! !

!Compiler methodsFor: 'testing'!

performOptimizations
	^self class performOptimizations
! !

!Compiler methodsFor: 'visiting'!

visit: aNode
	aNode accept: self
!

visitMethodNode: aNode
	| str currentSelector | 
	currentSelector := aNode selector asSelector.
	nestedBlocks := 0.
	earlyReturn := false.
	messageSends := #().
	referencedClasses := #().
	unknownVariables := #().
	tempVariables := #().
	argVariables := #().
	stream 
	    nextPutAll: 'smalltalk.method({'; lf;
	    nextPutAll: 'selector: "', aNode selector, '",'; lf.
	stream nextPutAll: 'source: unescape("', self source escaped, '"),';lf.
	stream nextPutAll: 'fn: function('.
	aNode arguments 
	    do: [:each | 
		argVariables add: each.
		stream nextPutAll: each]
	    separatedBy: [stream nextPutAll: ', '].
	stream 
	    nextPutAll: '){'; lf;
	    nextPutAll: 'var self=this;'; lf.
	str := stream.
	stream := '' writeStream.
	aNode nodes do: [:each |
	    self visit: each].
	earlyReturn ifTrue: [
	    str nextPutAll: 'try{'].
	str nextPutAll: stream contents.
	stream := str.
	stream 
	    lf; 
	    nextPutAll: 'return self;'.
	earlyReturn ifTrue: [
	    stream lf; nextPutAll: '} catch(e) {if(e.name === ''stReturn'' && e.selector === ', currentSelector printString, '){return e.fn()} throw(e)}'].
	stream nextPutAll: '}'.
	stream 
		nextPutAll: ',', String lf, 'messageSends: ';
		nextPutAll: messageSends asJavascript, ','; lf;
          	nextPutAll: 'args: ', argVariables asJavascript, ','; lf;
		nextPutAll: 'referencedClasses: ['.
	referencedClasses 
		do: [:each | stream nextPutAll: each printString]
		separatedBy: [stream nextPutAll: ','].
	stream nextPutAll: ']'.
	stream nextPutAll: '})'
!

visitBlockNode: aNode
	stream nextPutAll: '(function('.
	aNode parameters 
	    do: [:each |
		tempVariables add: each.
		stream nextPutAll: each]
	    separatedBy: [stream nextPutAll: ', '].
	stream nextPutAll: '){'.
	aNode nodes do: [:each | self visit: each].
	stream nextPutAll: '})'
!

visitSequenceNode: aNode
	aNode temps do: [:each || temp |
            temp := self safeVariableNameFor: each.
	    tempVariables add: temp.
	    stream nextPutAll: 'var ', temp, '=nil;'; lf].
	aNode nodes do: [:each |
	    self visit: each.
	    stream nextPutAll: ';']
	    separatedBy: [stream lf]
!

visitBlockSequenceNode: aNode
	| index |
	nestedBlocks := nestedBlocks + 1.
	aNode nodes isEmpty
	    ifTrue: [
		stream nextPutAll: 'return nil;']
	    ifFalse: [
		aNode temps do: [:each | | temp |
                    temp := self safeVariableNameFor: each.
		    tempVariables add: temp.
		    stream nextPutAll: 'var ', temp, '=nil;'; lf].
		index := 0.
		aNode nodes do: [:each |
		    index := index + 1.
		    index = aNode nodes size ifTrue: [
			stream nextPutAll: 'return '].
		    self visit: each.
		    stream nextPutAll: ';']].
	nestedBlocks := nestedBlocks - 1
!

visitReturnNode: aNode
	nestedBlocks > 0 ifTrue: [
	    earlyReturn := true].
	earlyReturn
	    ifTrue: [
		stream
		    nextPutAll: '(function(){throw(';
		    nextPutAll: '{name: ''stReturn'', selector: ';
		    nextPutAll: currentSelector printString;
		    nextPutAll: ', fn: function(){return ']
	    ifFalse: [stream nextPutAll: 'return '].
	aNode nodes do: [:each |
	    self visit: each].
	earlyReturn ifTrue: [
	    stream nextPutAll: '}})})()']
!

visitSendNode: aNode
        | str receiver superSend inlined |
        str := stream.
        (messageSends includes: aNode selector) ifFalse: [
                messageSends add: aNode selector].
        stream := '' writeStream.
        self visit: aNode receiver.
        superSend := stream contents = 'super'.
        receiver := superSend ifTrue: ['self'] ifFalse: [stream contents].
        stream := str.
	
	self performOptimizations 
		ifTrue: [
			(self inlineLiteral: aNode selector receiverNode: aNode receiver argumentNodes: aNode arguments) ifFalse: [
				(self inline: aNode selector receiver: receiver argumentNodes: aNode arguments)
                			ifTrue: [stream nextPutAll: ' : ', (self send: aNode selector to: '$receiver' arguments: aNode arguments superSend: superSend), ')']
                			ifFalse: [stream nextPutAll: (self send: aNode selector to: receiver arguments: aNode arguments superSend: superSend)]]]
		ifFalse: [stream nextPutAll: (self send: aNode selector to: receiver arguments: aNode arguments superSend: superSend)]
!

visitCascadeNode: aNode
	| index |
	index := 0.
	(tempVariables includes: '$rec') ifFalse: [
		tempVariables add: '$rec'].
	stream nextPutAll: '(function($rec){'.
	aNode nodes do: [:each |
	    index := index + 1.
	    index = aNode nodes size ifTrue: [
		stream nextPutAll: 'return '].
	    each receiver: (VariableNode new value: '$rec').
	    self visit: each.
	    stream nextPutAll: ';'].
	stream nextPutAll: '})('.
	self visit: aNode receiver.
	stream nextPutAll: ')'
!

visitValueNode: aNode
	stream nextPutAll: aNode value asJavascript
!

visitAssignmentNode: aNode
	self visit: aNode left.
	stream nextPutAll: '='.
	self visit: aNode right
!

visitClassReferenceNode: aNode
	(referencedClasses includes: aNode value) ifFalse: [
		referencedClasses add: aNode value].
	stream nextPutAll: '(smalltalk.', aNode value, ' || ', aNode value, ')'
!

visitVariableNode: aNode
	| varName |
	(self currentClass allInstanceVariableNames includes: aNode value) 
		ifTrue: [stream nextPutAll: 'self[''@', aNode value, ''']']
		ifFalse: [
                  	varName := self safeVariableNameFor: aNode value.
			(self knownVariables includes: varName) 
                  		ifFalse: [
                                  	unknownVariables add: aNode value.
                                  	aNode assigned 
                                  		ifTrue: [stream nextPutAll: varName]
                                  		ifFalse: [stream nextPutAll: '(typeof ', varName, ' == ''undefined'' ? nil : ', varName, ')']]
                  		ifTrue: [
                                  	aNode value = 'thisContext'
                                  		ifTrue: [stream nextPutAll: '(smalltalk.getThisContext())']
                				ifFalse: [stream nextPutAll: varName]]]
!

visitJSStatementNode: aNode
	stream nextPutAll: (aNode source replace: '>>' with: '>')
!

visitFailure: aFailure
	self error: aFailure asString
!

send: aSelector to: aReceiver arguments: aCollection superSend: aBoolean
	^String streamContents: [:str || tmp |
        	tmp := stream.
		str nextPutAll: 'smalltalk.send('.
		str nextPutAll: aReceiver.
		str nextPutAll: ', "', aSelector asSelector, '", ['.
                stream := str.
		aCollection
	    		do: [:each | self visit: each]
	    		separatedBy: [stream nextPutAll: ', '].
                stream := tmp.
                str nextPutAll: ']'.
		aBoolean ifTrue: [
			str nextPutAll: ', smalltalk.', (self classNameFor: self currentClass superclass)].
		str nextPutAll: ')']
!

visitDynamicArrayNode: aNode
	stream nextPutAll: '['.
	aNode nodes 
		do: [:each | self visit: each]
		separatedBy: [stream nextPutAll: ','].
	stream nextPutAll: ']'
!

visitDynamicDictionaryNode: aNode
	stream nextPutAll: 'smalltalk.Dictionary._fromPairs_(['.
		aNode nodes 
			do: [:each | self visit: each]
			separatedBy: [stream nextPutAll: ','].
		stream nextPutAll: '])'
! !

Compiler class instanceVariableNames: 'performOptimizations'!

!Compiler class methodsFor: 'accessing'!

performOptimizations
	^performOptimizations ifNil: [true]
!

performOptimizations: aBoolean
	performOptimizations := aBoolean
! !

!Compiler class methodsFor: 'compiling'!

recompile: aClass
	aClass methodDictionary do: [:each || method |
		method := self new load: each source forClass: aClass.
		method category: each category.
		aClass addCompiledMethod: method].
	aClass isMetaclass ifFalse: [self recompile: aClass class]
!

recompileAll
	Smalltalk current classes do: [:each |
		self recompile: each]
! !

Object subclass: #DoIt
	instanceVariableNames: ''
	category: 'Compiler'!

Node subclass: #DynamicArrayNode
	instanceVariableNames: ''
	category: 'Compiler'!

!DynamicArrayNode methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitDynamicArrayNode: self
! !

Node subclass: #DynamicDictionaryNode
	instanceVariableNames: ''
	category: 'Compiler'!

!DynamicDictionaryNode methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitDynamicDictionaryNode: self
! !

