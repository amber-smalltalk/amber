Smalltalk current createPackage: 'Compiler-Interpreter' properties: #{}!
BlockClosure subclass: #ASTBlockClosure
	instanceVariableNames: 'astNode'
	package: 'Compiler-Interpreter'!
!ASTBlockClosure commentStamp!
ASTBlockClosure is polymorph with BlockClosure. 
An ASTBlockClosure is used to interpret a BlockNode, and override all "primitive" methods (#value and co).!

!ASTBlockClosure methodsFor: 'accessing'!

astNode
	^ astNode
!

astNode: aNode
	astNode := aNode
! !

!ASTBlockClosure methodsFor: 'evaluating'!

value
	^ ASTInterpreter current blockValue: self
! !

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
	^ ASTBlockClosure new
    	astNode: aNode;
        yourself
!

visitReturnNode: aNode
	shouldReturn := true.
    ^ self interpret: aNode nodes first
!

visitSendNode: aNode
	"TODO: Handle super sends"
	| receiver arguments |
    
    receiver := self interpret: aNode receiver.
    arguments := aNode arguments collect: [ :each |
		self interpret: each ].
    
    ^ self send: aNode selector to: receiver arguments: arguments
!

visitSequenceNode: aNode
	aNode nodes allButLast do: [ :each | | value |
        value := self interpret: each.
		shouldReturn ifTrue: [ ^ value ] ].
    ^ self interpret: aNode nodes last
!

visitValueNode: aNode
	^ aNode value
! !

ASTInterpreter class instanceVariableNames: 'current'!

!ASTInterpreter class methodsFor: 'instance creation'!

current
	^ current ifNil: [ current := super new ]
!

new
	self shouldNotImplement
! !

