Object subclass: #Node
	instanceVariableNames: 'nodes'
	category: 'Compiler'!


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

!Node methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitNode: self
! !


Node subclass: #MethodNode
	instanceVariableNames: 'selector arguments source'
	category: 'Compiler'!


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


Node subclass: #SendNode
	instanceVariableNames: 'selector arguments receiver'
	category: 'Compiler'!


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
	left := aNode
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
	instanceVariableNames: 'parameters'
	category: 'Compiler'!


!BlockNode methodsFor: 'accessing'!

parameters
	^parameters ifNil: [parameters := Array new]
!

parameters: aCollection
	parameters := aCollection
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

!ValueNode methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitValueNode: self
! !


ValueNode subclass: #VariableNode
	instanceVariableNames: ''
	category: 'Compiler'!


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
	instanceVariableNames: 'stream nestedBlocks earlyReturn currentClass currentSelector'
	category: 'Compiler'!


!Compiler methodsFor: 'accessing'!

currentClass
	^currentClass
!

currentClass: aClass
	currentClass := aClass
!

parser
	^SmalltalkParser new
! !

!Compiler methodsFor: 'compiling'!

compile: aString
	^self compileNode: (self parser parse: aString readStream)
!

compile: aString forClass: aClass
	self currentClass: aClass.
	^self compile: aString
!

compileExpression: aString
	self currentClass: DoIt.
	^self compile: 'doIt ^[', aString, '] value'
!

compileNode: aNode
	stream := '' writeStream.
	self visit: aNode.
	^stream contents
!

eval: aString
	^{'return eval(aString);'}
!

load: aString forClass: aClass
	^self eval: (self compile: aString forClass: aClass)
!

loadExpression: aString
	DoIt addCompiledMethod: (self eval: (self compileExpression: aString)).
	^DoIt new doIt
! !

!Compiler methodsFor: 'initialization'!

initialize
	super initialize.
	stream := '' writeStream
! !

!Compiler methodsFor: 'visiting'!

visit: aNode
	aNode accept: self
!

visitAssignmentNode: aNode
	self visit: aNode left.
	stream nextPutAll: '='.
	self visit: aNode right
!

visitBlockNode: aNode
	stream nextPutAll: '(function('.
	aNode parameters 
	    do: [:each |
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
		aNode temps do: [:each |
		    stream nextPutAll: 'var ', each, '=nil;'.
		    stream nextPutAll: String cr].
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
	stream
	    nextPutAll: 'smalltalk.';
	    nextPutAll: aNode value
!

visitJSStatementNode: aNode
	stream nextPutAll: '(function(){'.
	stream nextPutAll: (aNode source value replace: '''''' with: '''').
	stream nextPutAll: '})()'
!

visitMethodNode: aNode
	| str currentSelector |
	currentSelector := aNode selector asSelector.
	nestedBlocks := 0.
	earlyReturn := false.
	stream 
	    nextPutAll: 'smalltalk.method({', String cr;
	    nextPutAll: 'selector: "', aNode selector, '",', String cr;
	    nextPutAll: 'source: unescape("', aNode source escaped, '"),', String cr;
	    nextPutAll: 'fn: function('.
	aNode arguments 
	    do: [:each | stream nextPutAll: each]
	    separatedBy: [stream nextPutAll: ', '].
	stream 
	    nextPutAll: '){', String cr;
	    nextPutAll: 'var self=this;', String cr.
	str := stream.
	stream := '' writeStream.
	aNode nodes do: [:each |
	    self visit: each].
	earlyReturn ifTrue: [
	    str nextPutAll: 'try{'].
	str nextPutAll: stream contents.
	stream := str.
	stream 
	    nextPutAll: String cr; 
	    nextPutAll: 'return self;'.
	earlyReturn ifTrue: [
	    stream nextPutAll: String cr, '} catch(e) {if(e.name === ''stReturn'' && e.selector === ', currentSelector printString, '){return e.fn()} throw(e)}'].
	stream 
	    nextPutAll: '}', String cr;
	    nextPutAll: '})'
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
	| str |
	str := stream.
	stream := '' writeStream.
	self visit: aNode receiver.
	stream contents = 'super' 
	    ifTrue: [
		stream := str.
		stream 
		    nextPutAll: 'self.klass.superclass.fn.prototype[''';
		    nextPutAll: aNode selector asSelector;
		    nextPutAll: '''].apply(self, ['.
		aNode arguments 
		    do: [:each | self visit: each]
		    separatedBy: [stream nextPutAll: ','].
		stream nextPutAll: '])']
	    ifFalse: [
		str nextPutAll: stream contents.
		stream := str.
		stream nextPutAll: '.', aNode selector asSelector, '('.
		aNode arguments 
		    do: [:each | self visit: each]
		    separatedBy: [stream nextPutAll: ','].
		stream nextPutAll: ')']
!

visitSequenceNode: aNode
	aNode temps do: [:each |
	    stream nextPutAll: 'var ', each, '=nil;'.
	    stream nextPutAll: String cr].
	aNode nodes do: [:each |
	    self visit: each.
	    stream nextPutAll: ';']
	    separatedBy: [stream nextPutAll: String cr]
!

visitValueNode: aNode
	stream nextPutAll: aNode value asJavascript
!

visitVariableNode: aNode
	(self currentClass instVarNames includes: aNode value) 
	    ifTrue: [stream nextPutAll: 'self[''@', aNode value, ''']']
	    ifFalse: [stream nextPutAll: aNode value]
! !


Object subclass: #DoIt
	instanceVariableNames: ''
	category: 'Compiler'!

