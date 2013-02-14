Smalltalk current createPackage: 'Compiler-Interpreter' properties: #{}!
NodeVisitor subclass: #AIContext
	instanceVariableNames: 'outerContext pc locals selector'
	package: 'Compiler-Interpreter'!

!AIContext methodsFor: 'accessing'!

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
	^ self localAt: 'self'
!

receiver: anObject
	self localAt: 'self' put: anObject
! !

!AIContext methodsFor: 'initialization'!

initializeFromMethodContext: aMethodContext
	self pc: aMethodContext pc.
    self receiver: aMethodContext receiver.
    self selector: aMethodContext selector.
    aMethodContext outerContext ifNotNil: [
		self outerContext: (self class fromMethodContext: aMethodContext outerContext) ].
    aMethodContext locals keysAndValuesDo: [ :key :value |
    	self locals at: key put: value ]
! !

NodeVisitor subclass: #ASTInterpreter
	instanceVariableNames: 'currentNode context shouldReturn currentValue'
	package: 'Compiler-Interpreter'!

!ASTInterpreter methodsFor: 'accessing'!

context
	^ context ifNil: [ context := AIContext new ]
!

context: anAIContext
	context := anAIContext
!

currentValue
	^ currentValue
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

continue: anObject
	currentValue := anObject
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
    self interpret: aNode continue: [ :value |
    	currentValue := value ]
!

interpret: aNode continue: aBlock
	shouldReturn ifTrue: [ ^ self ].

	aNode isNode 
    	ifTrue: [ self visit: aNode ]
        ifFalse: [ currentValue := aNode ].
	aBlock value: self currentValue
!

interpretAll: aCollection continue: aBlock
	self 
    	interpretAll: aCollection 
        continue: aBlock 
        result: OrderedCollection new
!

interpretAll: nodes continue: aBlock result: aCollection
	nodes isEmpty 
    	ifTrue: [ aBlock value: aCollection ]
    	ifFalse: [
    		self interpret: nodes first continue: [:value |
    			self 
                	interpretAll: nodes allButFirst 
                    continue: aBlock
  					result: aCollection, { value } ] ]
!

messageFromSendNode: aSendNode do: aBlock
	self interpretAll: aSendNode arguments continue: [ :args |
    	aBlock value: (Message new
    		selector: aSendNode selector;
        	arguments: args;
        	yourself) ]
! !

!ASTInterpreter methodsFor: 'visiting'!

visitAssignmentNode: aNode
	self interpret: aNode right continue: [ :value |
    	self continue: (self assign: aNode left to: value) ]
!

visitBlockNode: aNode
	"TODO: Context should be set"
    
    self continue: [ self interpret: aNode nodes first; currentValue ]
!

visitCascadeNode: aNode
	"TODO: Handle super sends"
	
    self interpret: aNode receiver continue: [ :receiver |
		"Only interpret the receiver once"
        aNode nodes do: [ :each | each receiver: receiver ].
  
    	self 
        	interpretAll: aNode nodes allButLast
    		continue: [
              	self 
                	interpret: aNode nodes last
                	continue: [ :val | self continue: val ] ] ]
!

visitClassReferenceNode: aNode
	self continue: (Smalltalk current at: aNode value)
!

visitDynamicArrayNode: aNode
	self interpretAll: aNode nodes continue: [ :array |
    	self continue: array ]
!

visitDynamicDictionaryNode: aNode
    self interpretAll: aNode nodes continue: [ :array | | hashedCollection |
    	hashedCollection := HashedCollection new.
        array do: [ :each | hashedCollection add: each ].
        self continue: hashedCollection ]
!

visitJSStatementNode: aNode
	shouldReturn := true.
	self continue: (self eval: aNode source)
!

visitReturnNode: aNode
    self interpret: aNode nodes first continue: [ :value |
    	shouldReturn := true.
		self continue: value ]
!

visitSendNode: aNode
	"TODO: Handle super sends"
    
    self interpret: aNode receiver continue: [ :receiver |
    	self messageFromSendNode: aNode do: [ :message |
        	self context pc: self context pc + 1.
        	self continue: (message sendTo: receiver) ] ]
!

visitSequenceNode: aNode
	self interpretAll: aNode nodes continue: [ :array |
    	self continue: array last ]
!

visitValueNode: aNode
	self continue: aNode value
!

visitVariableNode: aNode
    self continue: (aNode binding isInstanceVar
		ifTrue: [ self context receiver instVarAt: aNode value ]
		ifFalse: [ self context localAt: aNode value ])
! !

ASTInterpreter subclass: #ASTDebugger
	instanceVariableNames: 'continuation'
	package: 'Compiler-Interpreter'!

!ASTDebugger methodsFor: 'initialization'!

initialize
	super initialize.
    continuation := [  ]
! !

!ASTDebugger methodsFor: 'interpreting'!

interpret: aNode continue: aBlock
	continuation := [ super interpret: aNode continue: aBlock ]
! !

!ASTDebugger methodsFor: 'stepping'!

stepOver
	continuation value
! !

