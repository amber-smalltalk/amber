Smalltalk current createPackage: 'Compiler-Interpreter' properties: #{}!
NodeVisitor subclass: #ASTInterpreter
	instanceVariableNames: 'currentNode context shouldReturn'
	package: 'Compiler-Interpreter'!

!ASTInterpreter methodsFor: 'accessing'!

context
	^ context
!

context: aMethodContext
	context := aMethodContext
! !

!ASTInterpreter methodsFor: 'initialization'!

initialize
	super initialize.
    shouldReturn := false
! !

!ASTInterpreter methodsFor: 'interpreting'!

blockValue: anASTBlockClosure
	^ self interpret: anASTBlockClosure astNode nodes first
!

interpret: aNode
	shouldReturn := false.
    ^ self interpretNode: aNode
!

interpretNode: aNode
	currentNode := aNode.
    ^ self visit: aNode
!

send: aSelector to: anObject arguments: aCollection
	^ anObject perform: aSelector withArguments: aCollection
! !

!ASTInterpreter methodsFor: 'visiting'!

visitBlockNode: aNode
    ^ [ self interpretNode: aNode nodes first ]
!

visitReturnNode: aNode
	shouldReturn := true.
    ^ self interpretNode: aNode nodes first
!

visitSendNode: aNode
	"TODO: Handle super sends"
	| receiver arguments |
    
    receiver := self interpretNode: aNode receiver.
    arguments := aNode arguments collect: [ :each |
		self interpretNode: each ].
    
    ^ self send: aNode selector to: receiver arguments: arguments
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

TestCase subclass: #ASTInterpretorTest
	instanceVariableNames: ''
	package: 'Compiler-Interpreter'!

!ASTInterpretorTest methodsFor: 'accessing'!

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

!ASTInterpretorTest methodsFor: 'tests'!

testBinarySend
	self assert: (self interpret: 'foo 2+3+4') equals: 9
!

testBlockLiteral
	self assert: false
! !

