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

localAt: aString
	^ self locals at: aString ifAbsent: [ nil ]
!

localAt: aString put: anObject
	self locals at: aString put: anObject
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
	^ context ifNil: [ context := AIContext new ]
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

assign: aNode to: anObject
	^ aNode binding isInstanceVar 
    	ifTrue: [ self context receiver instVarAt: aNode value put: anObject ]
      	ifFalse: [ self context localAt: aNode value put: anObject ]
!

eval: aString
	"Evaluate aString as JS source inside an JS function. 
    aString is not sandboxed."
    
    | source function |
    
    source := String streamContents: [ :str |
    	str nextPutAll: '(function('.
        self context locals keys 
        	do: [ :each | str nextPutAll: each ]
          	separatedBy: [ str nextPutAll: ',' ].
        str 
        	nextPutAll: '){ return (function() {';
        	nextPutAll: aString;
            nextPutAll: '})() })' ].
            
	function := Compiler new eval: source.
    
	^ function valueWithPossibleArguments: self context locals values
!

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

visitAssignmentNode: aNode
	^ self assign: aNode left to: (self interpretNode: aNode right)
!

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
	shouldReturn := true.
	^ self eval: aNode source
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
!

visitVariableNode: aNode
	^ aNode binding isInstanceVar
    	ifTrue: [ self context receiver instVarAt: aNode value ]
      	ifFalse: [ self context localAt: aNode value ]
! !

