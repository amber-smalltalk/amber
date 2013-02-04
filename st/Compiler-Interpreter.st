Smalltalk current createPackage: 'Compiler-Interpreter' properties: #{}!
NodeVisitor subclass: #AIContext
	instanceVariableNames: 'outerContext pc locals receiver selector'
	package: 'Compiler-Interpreter'!

!AIContext methodsFor: 'accessing'!

initializeFromMethodContext: aMethodContext
	self pc: aMethodContext pc.
    self receiver: aMethodContext receiver.
    self selector: aMethodContext selector.
    aMethodContext outerContext ifNotNil: [
		self outerContext: (self class fromMethodContext: aMethodContext outerContext) ].
    aMethodContext locals keysAndValuesDo: [ :key :value |
    	self locals at: key put: value ]
!

locals
	^ locals ifNil: [ locals := Dictionary new ]
!

outerContext
	^ outerContext
!

outerContext: anAIContext
	outerContext := anAIContext
!

pc
	^ pc ifNil: [ pc := 0 ]
!

pc: anInteger
	pc := anInteger
!

receiver
	^ receiver
!

receiver: anObject
	receiver := anObject
!

selector
	^ selector
!

selector: aString
	selector := aString
! !

!AIContext class methodsFor: 'instance creation'!

fromMethodContext: aMethodContext
	^ self new 
    	initializeFromMethodContext: aMethodContext;
        yourself
! !

NodeVisitor subclass: #ASTInterpreter
	instanceVariableNames: 'currentNode context shouldReturn'
	package: 'Compiler-Interpreter'!

!ASTInterpreter methodsFor: 'accessing'!

context
	^ context
!

context: anAIContext
	context := anAIContext
! !

!ASTInterpreter methodsFor: 'initialization'!

initialize
	super initialize.
    shouldReturn := false
! !

!ASTInterpreter methodsFor: 'interpreting'!

interpret: aNode
	shouldReturn := false.
    ^ self interpretNode: aNode
!

interpretNode: aNode
	currentNode := aNode.
    ^ self visit: aNode
!

messageFromSendNode: aSendNode
	^ Message new
    	selector: aSendNode selector;
        arguments: (aSendNode arguments collect: [ :each |
        	self interpretNode: each ]);
        yourself
! !

!ASTInterpreter methodsFor: 'visiting'!

visitBlockNode: aNode
    ^ [ self interpretNode: aNode nodes first ]
!

visitCascadeNode: aNode
	"TODO: Handle super sends"
	| receiver |
    
    receiver := self interpretNode: aNode receiver.

    aNode nodes allButLast
    	do: [ :each | 
        	(self messageFromSendNode: each)
            	sendTo: receiver ].

    ^ (self messageFromSendNode: aNode nodes last)
            	sendTo: receiver
!

visitClassReferenceNode: aNode
	^ Smalltalk current at: aNode value
!

visitJSStatementNode: aNode
	self halt
!

visitReturnNode: aNode
	shouldReturn := true.
    ^ self interpretNode: aNode nodes first
!

visitSendNode: aNode
	"TODO: Handle super sends"
    
    ^ (self messageFromSendNode: aNode)
    	sendTo: (self interpretNode: aNode receiver)
!

visitSequenceNode: aNode
	aNode nodes allButLast do: [ :each | | value |
        value := self interpretNode: each.
		shouldReturn ifTrue: [ ^ value ] ].
    ^ self interpretNode: aNode nodes last
!

visitValueNode: aNode
	^ aNode value
! !

TestCase subclass: #ASTInterpreterTest
	instanceVariableNames: ''
	package: 'Compiler-Interpreter'!

!ASTInterpreterTest methodsFor: 'accessing'!

analyze: aNode forClass: aClass
	(SemanticAnalyzer on: aClass) visit: aNode.
    ^ aNode
!

interpret: aString
	"the food is a methodNode. Interpret the sequenceNode only"
    ^ ASTInterpreter new
    	interpret: (self parse: aString forClass: Object) 
        	nodes first
!

parse: aString
	^ Smalltalk current parse: aString
!

parse: aString forClass: aClass
	^ self analyze: (self parse: aString) forClass: aClass
! !

!ASTInterpreterTest methodsFor: 'tests'!

testBinarySend
	self assert: (self interpret: 'foo 2+3+4') equals: 9
!

testBlockLiteral
	self assert: (self interpret: 'foo ^ true ifTrue: [ 1 ] ifFalse: [ 2 ]') equals: 1.
    self assert: (self interpret: 'foo true ifTrue: [ ^ 1 ] ifFalse: [ 2 ]') equals: 1.
    self assert: (self interpret: 'foo ^ false ifTrue: [ 1 ] ifFalse: [ 2 ]') equals: 2
!

testCascade
	self assert: (self interpret: 'foo ^ OrderedCollection new add: 2; add: 3; yourself') equals: (OrderedCollection with: 2 with: 3)
! !

