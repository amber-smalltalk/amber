Smalltalk current createPackage: 'Compiler-Interpreter' properties: #{}!
NodeVisitor subclass: #AIContext
	instanceVariableNames: 'outerContext pc locals selector'
	package: 'Compiler-Interpreter'!
!AIContext commentStamp!
AIContext is like a `MethodContext`, used by the `ASTInterpreter`.
Unlike a `MethodContext`, it is not read-only.

When debugging, `AIContext` instances are created by copying the current `MethodContext` (thisContext)!

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

Object subclass: #ASTInterpreter
	instanceVariableNames: 'currentNode context shouldReturn result'
	package: 'Compiler-Interpreter'!
!ASTInterpreter commentStamp!
ASTIntepreter is like a `NodeVisitor`, interpreting nodes one after each other.
It is built using Continuation Passing Style for stepping purposes.

Usage example:

    | ast interpreter |
    ast := Smalltalk current parse: 'foo 1+2+4'.
    (SemanticAnalyzer on: Object) visit: ast.

    ASTInterpreter new
        interpret: ast nodes first;
        result "Answers 7"!

!ASTInterpreter methodsFor: 'accessing'!

context
	^ context ifNil: [ context := AIContext new ]
!

context: anAIContext
	context := anAIContext
!

result
	^ result
! !

!ASTInterpreter methodsFor: 'initialization'!

initialize
	super initialize.
    shouldReturn := false
! !

!ASTInterpreter methodsFor: 'interpreting'!

interpret: aNode
	shouldReturn := false.
    self interpret: aNode continue: [ :value |
    	result := value ]
!

interpret: aNode continue: aBlock
	shouldReturn ifTrue: [ ^ self ].

	aNode isNode 
    	ifTrue: [ 	
        	currentNode := aNode.
            self interpretNode: aNode continue: [ :value |
  				self continue: aBlock value: value] ]
        ifFalse: [ self continue: aBlock value: aNode ]
!

interpretAssignmentNode: aNode continue: aBlock
	self interpret: aNode right continue: [ :value |
    	self 
        	continue: aBlock
            value: (self assign: aNode left to: value) ]
!

interpretBlockNode: aNode continue: aBlock
	"TODO: Context should be set"
    
    self 
    	continue: aBlock 
        value: [ self interpret: aNode nodes first; result ]
!

interpretBlockSequenceNode: aNode continue: aBlock
	self interpretSequenceNode: aNode continue: aBlock
!

interpretCascadeNode: aNode continue: aBlock
	"TODO: Handle super sends"
	
    self interpret: aNode receiver continue: [ :receiver |
		"Only interpret the receiver once"
        aNode nodes do: [ :each | each receiver: receiver ].
  
    	self 
        	interpretAll: aNode nodes allButLast
    		continue: [
              	self 
                	interpret: aNode nodes last
                	continue: [ :val | self continue: aBlock value: val ] ] ]
!

interpretClassReferenceNode: aNode continue: aBlock
	self continue: aBlock value: (Smalltalk current at: aNode value)
!

interpretDynamicArrayNode: aNode continue: aBlock
	self interpretAll: aNode nodes continue: [ :array |
    	self 
        	continue: aBlock
			value: array ]
!

interpretDynamicDictionaryNode: aNode continue: aBlock
    self interpretAll: aNode nodes continue: [ :array | | hashedCollection |
    	hashedCollection := HashedCollection new.
        array do: [ :each | hashedCollection add: each ].
        self 	
        	continue: aBlock
            value: hashedCollection ]
!

interpretJSStatementNode: aNode continue: aBlock
	shouldReturn := true.
	self continue: aBlock value: (self eval: aNode source)
!

interpretMethodNode: aNode continue: aBlock
	self interpretAll: aNode nodes continue: [ :array |
    	self continue: aBlock value: array first ]
!

interpretNode: aNode continue: aBlock
    aNode interpreter: self continue: aBlock
!

interpretReturnNode: aNode continue: aBlock
    self interpret: aNode nodes first continue: [ :value |
    	shouldReturn := true.
		self continue: aBlock value: value ]
!

interpretSendNode: aNode continue: aBlock
	"TODO: Handle super sends"
    
    self interpret: aNode receiver continue: [ :receiver |
    	self messageFromSendNode: aNode do: [ :message |
        	self context pc: self context pc + 1.
        	self 
            	continue: aBlock 
                value: (message sendTo: receiver) ] ]
!

interpretSequenceNode: aNode continue: aBlock
	self interpretAll: aNode nodes continue: [ :array |
    	self continue: aBlock value: array last ]
!

interpretValueNode: aNode continue: aBlock
	self continue: aBlock value: aNode value
!

interpretVariableNode: aNode continue: aBlock
    self 
    	continue: aBlock
        value: (aNode binding isInstanceVar
			ifTrue: [ self context receiver instVarAt: aNode value ]
			ifFalse: [ self context localAt: aNode value ])
! !

!ASTInterpreter methodsFor: 'private'!

assign: aNode to: anObject
	^ aNode binding isInstanceVar 
    	ifTrue: [ self context receiver instVarAt: aNode value put: anObject ]
      	ifFalse: [ self context localAt: aNode value put: anObject ]
!

continue: aBlock value: anObject
	result := anObject.
    aBlock value: anObject
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

ASTInterpreter subclass: #ASTDebugger
	instanceVariableNames: 'continuation'
	package: 'Compiler-Interpreter'!
!ASTDebugger commentStamp!
ASTDebugger is an interpreter with stepping capabilities.
Use `#stepOver` to actually interpret the next node.

Usage example:

    | ast debugger |
    ast := Smalltalk current parse: 'foo 1+2+4'.
    (SemanticAnalyzer on: Object) visit: ast.

    debugger := ASTDebugger new
        interpret: ast nodes first;
        yourself.
        
    debugger stepOver; stepOver.
    debugger stepOver; stepOver.
    debugger result."Answers 1"
    debugger stepOver.
    debugger result. "Answers 3"
    debugger stepOver.
    debugger result. "Answers 7"!

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

step
	continuation value
! !

!Node methodsFor: '*Compiler-Interpreter'!

interpreter: anInterpreter continue: aBlock
	^ anInterpreter interpretNode: self continue: aBlock
! !

!AssignmentNode methodsFor: '*Compiler-Interpreter'!

interpreter: anInterpreter continue: aBlock
	^ anInterpreter interpretAssignmentNode: self continue: aBlock
! !

!BlockNode methodsFor: '*Compiler-Interpreter'!

interpreter: anInterpreter continue: aBlock
	^ anInterpreter interpretBlockNode: self continue: aBlock
! !

!CascadeNode methodsFor: '*Compiler-Interpreter'!

interpreter: anInterpreter continue: aBlock
	^ anInterpreter interpretCascadeNode: self continue: aBlock
! !

!DynamicArrayNode methodsFor: '*Compiler-Interpreter'!

interpreter: anInterpreter continue: aBlock
	^ anInterpreter interpretDynamicArrayNode: self continue: aBlock
! !

!DynamicDictionaryNode methodsFor: '*Compiler-Interpreter'!

interpreter: anInterpreter continue: aBlock
	^ anInterpreter interpretDynamicDictionaryNode: self continue: aBlock
! !

!JSStatementNode methodsFor: '*Compiler-Interpreter'!

interpreter: anInterpreter continue: aBlock
	^ anInterpreter interpretJSStatementNode: self continue: aBlock
! !

!MethodNode methodsFor: '*Compiler-Interpreter'!

interpreter: anInterpreter continue: aBlock
	^ anInterpreter interpretMethodNode: self continue: aBlock
! !

!ReturnNode methodsFor: '*Compiler-Interpreter'!

interpreter: anInterpreter continue: aBlock
	^ anInterpreter interpretReturnNode: self continue: aBlock
! !

!SendNode methodsFor: '*Compiler-Interpreter'!

interpreter: anInterpreter continue: aBlock
	^ anInterpreter interpretSendNode: self continue: aBlock
! !

!SequenceNode methodsFor: '*Compiler-Interpreter'!

interpreter: anInterpreter continue: aBlock
	^ anInterpreter interpretSequenceNode: self continue: aBlock
! !

!BlockSequenceNode methodsFor: '*Compiler-Interpreter'!

interpreter: anInterpreter continue: aBlock
	^ anInterpreter interpretBlockSequenceNode: self continue: aBlock
! !

!ValueNode methodsFor: '*Compiler-Interpreter'!

interpreter: anInterpreter continue: aBlock
	^ anInterpreter interpretValueNode: self continue: aBlock
! !

!VariableNode methodsFor: '*Compiler-Interpreter'!

interpreter: anInterpreter continue: aBlock
	^ anInterpreter interpretVariableNode: self continue: aBlock
! !

!ClassReferenceNode methodsFor: '*Compiler-Interpreter'!

interpreter: anInterpreter continue: aBlock
	^ anInterpreter interpretClassReferenceNode: self continue: aBlock
! !

