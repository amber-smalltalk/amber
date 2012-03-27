Smalltalk current createPackage: 'Compiler' properties: #{}!
Object subclass: #ChunkParser
	instanceVariableNames: 'stream'
	package: 'Compiler'!

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

Object subclass: #DoIt
	instanceVariableNames: ''
	package: 'Compiler'!

Object subclass: #Exporter
	instanceVariableNames: ''
	package: 'Compiler'!

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
		"Export classes in dependency order"
	    	package sortedClasses do: [:each |
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
	    nextPutAll: '''', package name, ''', ', package propertiesAsJSON , ');'.
	aStream lf
!

exportPackageExtensionsOf: package on: aStream
	"Issue #143: sort classes and methods alphabetically"

	| name |
	name := package name.
	(Package sortedClasses: Smalltalk current classes) do: [:each |
		{each. each class} do: [:aClass | 
			((aClass methodDictionary values) sorted: [:a :b | a selector <= b selector]) do: [:method |
				(method category match: '^\*', name) ifTrue: [
					self exportMethod: method of: each on: aStream ]]]]
! !

Exporter subclass: #ChunkExporter
	instanceVariableNames: ''
	package: 'Compiler'!

!ChunkExporter methodsFor: 'not yet classified'!

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
        nextPutAll: '	instanceVariableNames: '''.
    aClass instanceVariableNames 
        do: [:each | aStream nextPutAll: each]
        separatedBy: [aStream nextPutAll: ' '].
    aStream 
        nextPutAll: ''''; lf;
        nextPutAll: '	package: ''', aClass category, '''!!'; lf.
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
	    nextPutAll: 'Smalltalk current createPackage: ''', package name,
		''' properties: ', package properties storeString, '!!'; lf.
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
				self exportMethods: methods category: category of: each on: aStream ]]]
! !

Exporter subclass: #StrippedExporter
	instanceVariableNames: ''
	package: 'Compiler'!

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
		nextPutAll: 'unescape(''', aMethod selector asSelector escaped, '''),';lf;
		nextPutAll: 'smalltalk.method({';lf;
		nextPutAll: 'selector: unescape(''', aMethod selector escaped, '''),';lf;
		nextPutAll: 'fn: ', aMethod fn compiledSource;lf;
		nextPutAll: '}),';lf;
		nextPutAll: 'smalltalk.', (self classNameFor: aClass);
		nextPutAll: ');';lf;lf
! !

Object subclass: #Importer
	instanceVariableNames: ''
	package: 'Compiler'!

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

Object subclass: #Node
	instanceVariableNames: 'nodes'
	package: 'Compiler'!

!Node methodsFor: 'accessing'!

addNode: aNode
	self nodes add: aNode
!

nodes
	^nodes ifNil: [nodes := Array new]
! !

!Node methodsFor: 'building'!

nodes: aCollection
	nodes := aCollection
! !

!Node methodsFor: 'testing'!

isBlockNode
	^false
!

isBlockSequenceNode
	^false
!

isValueNode
	^false
! !

!Node methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitNode: self
! !

Node subclass: #AssignmentNode
	instanceVariableNames: 'left right'
	package: 'Compiler'!

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
	package: 'Compiler'!

!BlockNode methodsFor: 'accessing'!

inlined
	^inlined ifNil: [false]
!

inlined: aBoolean
	inlined := aBoolean
!

parameters
	^parameters ifNil: [parameters := Array new]
!

parameters: aCollection
	parameters := aCollection
! !

!BlockNode methodsFor: 'testing'!

isBlockNode
	^true
! !

!BlockNode methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitBlockNode: self
! !

Node subclass: #CascadeNode
	instanceVariableNames: 'receiver'
	package: 'Compiler'!

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

Node subclass: #DynamicArrayNode
	instanceVariableNames: ''
	package: 'Compiler'!

!DynamicArrayNode methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitDynamicArrayNode: self
! !

Node subclass: #DynamicDictionaryNode
	instanceVariableNames: ''
	package: 'Compiler'!

!DynamicDictionaryNode methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitDynamicDictionaryNode: self
! !

Node subclass: #JSStatementNode
	instanceVariableNames: 'source'
	package: 'Compiler'!

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

Node subclass: #MethodNode
	instanceVariableNames: 'selector arguments source'
	package: 'Compiler'!

!MethodNode methodsFor: 'accessing'!

arguments
	^arguments ifNil: [#()]
!

arguments: aCollection
	arguments := aCollection
!

selector
	^selector
!

selector: aString
	selector := aString
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

Node subclass: #ReturnNode
	instanceVariableNames: ''
	package: 'Compiler'!

!ReturnNode methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitReturnNode: self
! !

Node subclass: #SendNode
	instanceVariableNames: 'selector arguments receiver'
	package: 'Compiler'!

!SendNode methodsFor: 'accessing'!

arguments
	^arguments ifNil: [arguments := #()]
!

arguments: aCollection
	arguments := aCollection
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
!

receiver
	^receiver
!

receiver: aNode
	receiver := aNode
!

selector
	^selector
!

selector: aString
	selector := aString
!

valueForReceiver: anObject
	^SendNode new
	    receiver: (self receiver 
		ifNil: [anObject]
		ifNotNil: [self receiver valueForReceiver: anObject]);
	    selector: self selector;
	    arguments: self arguments;
	    yourself
! !

!SendNode methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitSendNode: self
! !

Node subclass: #SequenceNode
	instanceVariableNames: 'temps'
	package: 'Compiler'!

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
	package: 'Compiler'!

!BlockSequenceNode methodsFor: 'testing'!

isBlockSequenceNode
	^true
! !

!BlockSequenceNode methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitBlockSequenceNode: self
! !

Node subclass: #ValueNode
	instanceVariableNames: 'value'
	package: 'Compiler'!

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
	package: 'Compiler'!

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
	package: 'Compiler'!

!ClassReferenceNode methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitClassReferenceNode: self
! !

Object subclass: #NodeVisitor
	instanceVariableNames: ''
	package: 'Compiler'!

!NodeVisitor methodsFor: 'visiting'!

visit: aNode
	aNode accept: self
!

visitAssignmentNode: aNode
	self visitNode: aNode
!

visitBlockNode: aNode
	self visitNode: aNode
!

visitBlockSequenceNode: aNode
	self visitSequenceNode: aNode
!

visitCascadeNode: aNode
	self visitNode: aNode
!

visitClassReferenceNode: aNode
	self 
	    nextPutAll: 'smalltalk.';
	    nextPutAll: aNode value
!

visitDynamicArrayNode: aNode
	self visitNode: aNode
!

visitDynamicDictionaryNode: aNode
	self visitNode: aNode
!

visitJSStatementNode: aNode
	self 
	    nextPutAll: 'function(){';
	    nextPutAll: aNode source;
	    nextPutAll: '})()'
!

visitMethodNode: aNode
	self visitNode: aNode
!

visitNode: aNode
!

visitReturnNode: aNode
	self visitNode: aNode
!

visitSendNode: aNode
	self visitNode: aNode
!

visitSequenceNode: aNode
	self visitNode: aNode
!

visitValueNode: aNode
	self visitNode: aNode
!

visitVariableNode: aNode
! !

NodeVisitor subclass: #Compiler
	instanceVariableNames: 'stream nestedBlocks earlyReturn currentClass currentSelector unknownVariables tempVariables messageSends referencedClasses classReferenced source argVariables'
	package: 'Compiler'!

!Compiler methodsFor: 'accessing'!

argVariables
	^argVariables copy
!

classNameFor: aClass
	^aClass isMetaclass
	    ifTrue: [aClass instanceClass name, '.klass']
	    ifFalse: [
		aClass isNil
		    ifTrue: ['nil']
		    ifFalse: [aClass name]]
!

currentClass
	^currentClass
!

currentClass: aClass
	currentClass := aClass
!

knownVariables
	^self pseudoVariables 
		addAll: self tempVariables;
		addAll: self argVariables;
		yourself
!

parser
	^SmalltalkParser new
!

pseudoVariables
	^#('self' 'super' 'true' 'false' 'nil' 'thisContext')
!

safeVariableNameFor: aString
	^(Smalltalk current reservedWords includes: aString)
		ifTrue: [aString, '_']
		ifFalse: [aString]
!

source
	^source ifNil: ['']
!

source: aString
	source := aString
!

tempVariables
	^tempVariables copy
!

unknownVariables
	^unknownVariables copy
! !

!Compiler methodsFor: 'compiling'!

compile: aString
	^self compileNode: (self parse: aString)
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

compileNode: aNode
	stream := '' writeStream.
	self visit: aNode.
	^stream contents
!

eval: aString
	<return eval(aString)>
!

load: aString forClass: aClass
	| compiled |
	compiled := self eval: (self compile: aString forClass: aClass).
	self setupClass: aClass.
	^compiled
!

loadExpression: aString
	| result |
	DoIt addCompiledMethod: (self eval: (self compileExpression: aString)).
	result := DoIt new doIt.
	DoIt removeCompiledMethod: (DoIt methodDictionary at: 'doIt').
	^result
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
! !

!Compiler methodsFor: 'testing'!

performOptimizations
	^self class performOptimizations
! !

!Compiler methodsFor: 'visiting'!

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

visit: aNode
	aNode accept: self
!

visitAssignmentNode: aNode
	stream nextPutAll: '('.
	self visit: aNode left.
	stream nextPutAll: '='.
	self visit: aNode right.
	stream nextPutAll: ')'
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

visitClassReferenceNode: aNode
	(referencedClasses includes: aNode value) ifFalse: [
		referencedClasses add: aNode value].
	stream nextPutAll: '(smalltalk.', aNode value, ' || ', aNode value, ')'
!

visitDynamicArrayNode: aNode
	stream nextPutAll: '['.
	aNode nodes 
		do: [:each | self visit: each]
		separatedBy: [stream nextPutAll: ','].
	stream nextPutAll: ']'
!

visitDynamicDictionaryNode: aNode
	stream nextPutAll: 'smalltalk.HashedCollection._fromPairs_(['.
		aNode nodes 
			do: [:each | self visit: each]
			separatedBy: [stream nextPutAll: ','].
		stream nextPutAll: '])'
!

visitFailure: aFailure
	self error: aFailure asString
!

visitJSStatementNode: aNode
	stream nextPutAll: (aNode source replace: '>>' with: '>')
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

visitValueNode: aNode
	stream nextPutAll: aNode value asJavascript
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

