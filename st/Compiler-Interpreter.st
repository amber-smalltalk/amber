Smalltalk current createPackage: 'Compiler-Interpreter'!
BlockClosure subclass: #AIBlockClosure
	instanceVariableNames: 'node outerContext'
	package: 'Compiler-Interpreter'!
!AIBlockClosure commentStamp!
I am a special `BlockClosure` subclass used by an interpreter to interpret a block node.

While I am polymorphic with `BlockClosure`, some methods such as `#new` will raise interpretation errors. Unlike a `BlockClosure`, my instance are not JavaScript functions.

Evaluating an instance will result in interpreting the `node` instance variable (instance of `BlockNode`).!

!AIBlockClosure methodsFor: 'accessing'!

compiledSource
	"Unlike blocks, the receiver doesn't represent a JS function"
	
	^ '[ AST Block closure ]'
!

numArgs
	^ node temps size
! !

!AIBlockClosure methodsFor: 'converting'!

currySelf
	self interpreterError
! !

!AIBlockClosure methodsFor: 'error handling'!

interpreterError
	ASTInterpreterError signal: 'Method cannot be interpreted by the interpreter.'
! !

!AIBlockClosure methodsFor: 'evaluating'!

applyTo: anObject arguments: aCollection
	self interpreterError
!

value
	^ self valueWithPossibleArguments: #()
!

value: anArgument
	^ self valueWithPossibleArguments: {anArgument}
!

value: firstArgument value: secondArgument
	^ self valueWithPossibleArguments: {firstArgument . secondArgument}
!

value: firstArgument value: secondArgument value: thirdArgument
	^ self valueWithPossibleArguments: {firstArgument . secondArgument . thirdArgument}
!

valueWithPossibleArguments: aCollection
	| context sequenceNode |
	context := outerContext newBlockContext.

	"Interpret a copy of the sequence node to avoid creating a new AIBlockClosure"
	sequenceNode := node nodes first copy
		parent: nil;
		yourself.

	"Populate the arguments into the context locals"	
	node parameters withIndexDo: [ :each :index |
		context localAt: each put: (aCollection at: index ifAbsent: [ nil ]) ].

	"Interpret the first node of the BlockSequenceNode"
	context interpreter
		node: sequenceNode nextChild;
		proceed.
		
	outerContext interpreter
		setNonLocalReturnFromContext: context.
		
	^ context interpreter pop
! !

!AIBlockClosure methodsFor: 'initialization'!

initializeWithContext: aContext node: aNode
	node := aNode.
	outerContext := aContext
! !

!AIBlockClosure class methodsFor: 'instance creation'!

forContext: aContext node: aNode
	^ self new
		initializeWithContext: aContext node: aNode;
		yourself
! !

MethodContext subclass: #AIContext
	instanceVariableNames: 'outerContext innerContext pc locals selector index sendIndexes evaluatedSelector ast interpreter'
	package: 'Compiler-Interpreter'!
!AIContext commentStamp!
I am like a `MethodContext`, used by the `ASTInterpreter`.
Unlike a `MethodContext`, my instances are not read-only.

When debugging, my instances are created by copying the current `MethodContext` (thisContext)!

!AIContext methodsFor: 'accessing'!

evaluatedSelector
	^ evaluatedSelector
!

evaluatedSelector: aString
	evaluatedSelector := aString
!

index
	^ index ifNil: [ 0 ]
!

index: anInteger
	index := anInteger
!

innerContext
	^ innerContext
!

innerContext: anAIContext
	innerContext := anAIContext
!

localAt: aString
	"Lookup the local value up to the method context"

	^ self locals at: aString ifAbsent: [ 
		self outerContext ifNotNil: [ :context | 
			context localAt: aString ] ]
!

localAt: aString ifAbsent: aBlock
	"Lookup the local value up to the method context"

	^ self locals at: aString ifAbsent: [ 
		self outerContext 
			ifNotNil: [ :context | context localAt: aString ifAbsent: aBlock ]
			ifNil: [ aBlock value ] ]
!

localAt: aString put: anObject
	self locals at: aString put: anObject
!

locals
	locals ifNil: [ self initializeLocals ].
	
	^ locals
!

method
	^ self methodContext ifNotNil: [
		self methodContext receiver class lookupSelector: self methodContext selector ]
!

outerContext
	^ outerContext
!

outerContext: anAIContext
	outerContext := anAIContext.
	outerContext innerContext: self
!

selector
	^ selector
!

selector: aString
	selector := aString
!

sendIndexAt: aString
	^ self sendIndexes at: aString ifAbsent: [ 0 ]
!

sendIndexes
	^ sendIndexes ifNil: [ Dictionary new ]
!

sendIndexes: aDictionary
	sendIndexes := aDictionary
! !

!AIContext methodsFor: 'factory'!

newBlockContext
	^ self class new
		outerContext: self;
		yourself
! !

!AIContext methodsFor: 'initialization'!

initializeAST
	ast := self method ast.
	(SemanticAnalyzer on: self method methodClass)
		visit: ast
!

initializeFromMethodContext: aMethodContext

	self
		evaluatedSelector: aMethodContext evaluatedSelector;
		index: aMethodContext index;
		sendIndexes: aMethodContext sendIndexes;
		receiver: aMethodContext receiver;
		selector: aMethodContext selector.
		
	aMethodContext outerContext ifNotNil: [ :outer |
		"If the method context is nil, the block was defined in JS, so ignore it"
		outer methodContext ifNotNil: [
			self outerContext: (self class fromMethodContext: aMethodContext outerContext) ].
			aMethodContext locals keysAndValuesDo: [ :key :value |
				self locals at: key put: value ] ]
!

initializeInterpreter
	interpreter := ASTInterpreter new
		context: self;
		yourself.
	
	self innerContext ifNotNil: [
		self setupInterpreter: interpreter ]
!

initializeLocals
	locals := Dictionary new.
	locals at: 'thisContext' put: self.
! !

!AIContext methodsFor: 'interpreting'!

arguments
	^ self ast arguments collect: [ :each |
		self localAt: each ]
!

ast
	self isBlockContext ifTrue: [ 
		^ self outerContext ifNotNil: [ :context | context ast ] ].

	ast ifNil: [ self initializeAST ].
	^ ast
!

interpreter
	interpreter ifNil: [ self initializeInterpreter ].
	^ interpreter
!

interpreter: anInterpreter
	interpreter := anInterpreter
!

receiver
	^ self localAt: 'self'
!

receiver: anObject
	self localAt: 'self' put: anObject
!

setupInterpreter: anInterpreter
	| currentNode |
	
	"Retrieve the current node"
	currentNode := ASTPCNodeVisitor new
			selector: self evaluatedSelector;
			context: self;
			visit: self ast;
			currentNode.
	
	anInterpreter node: currentNode.

	"Push the send args and receiver to the interpreter stack"	
	self innerContext arguments reversed do: [ :each | 
		anInterpreter push: each ].
		
	anInterpreter push: (self innerContext receiver)
! !

!AIContext class methodsFor: 'instance creation'!

fromMethodContext: aMethodContext
	^ self new
		initializeFromMethodContext: aMethodContext;
		yourself
! !

Object subclass: #ASTDebugger
	instanceVariableNames: 'interpreter context'
	package: 'Compiler-Interpreter'!
!ASTDebugger commentStamp!
I am a stepping debugger interface for Amber code.
I internally use an instance of `ASTInterpreter` to actually step through node and interpret them.

My instances are created from an `AIContext` with `ASTDebugger class >> context:`.
They hold an `AIContext` instance internally, recursive copy of the `MethodContext`.

## API

Use the methods of the `'stepping'` protocol to do stepping.!

!ASTDebugger methodsFor: 'accessing'!

context
	^ context
!

context: aContext
	context := aContext
!

interpreter
	^ interpreter ifNil: [ interpreter := self defaultInterpreterClass new ]
!

interpreter: anInterpreter
	interpreter := anInterpreter
!

method
	^ self context method
!

nextNode
	^ self interpreter nextNode
! !

!ASTDebugger methodsFor: 'defaults'!

defaultInterpreterClass
	^ ASTInterpreter
! !

!ASTDebugger methodsFor: 'initialization'!

buildAST
	"Build the AST tree from the method source code.
	The AST is annotated with a SemanticAnalyzer,
	to know the semantics and bindings of each node needed for later debugging"
	
	| ast |
	
	ast := Smalltalk current parse: self method source.
	(SemanticAnalyzer on: self context receiver class)
		visit: ast.
	
	^ ast
!

initializeInterpreter
	| ast next |
	ast := self buildAST.
	next := ASTPCNodeVisitor new
		context: self context;
		visit: ast;
		currentNode.
	self interpreter node: next
!

initializeWithContext: aContext
	"TODO: do we need to handle block contexts?"
	
	self context: aContext.
	self initializeInterpreter
! !

!ASTDebugger methodsFor: 'stepping'!

proceed
	self shouldBeImplemented
!

restart
	self interpreter restart
!

skip
	self interpreter skip
!

stepInto
	self shouldBeImplemented
!

stepOver
	self interpreter stepOver
! !

!ASTDebugger methodsFor: 'testing'!

atEnd
	^ self interpreter atEnd
! !

!ASTDebugger class methodsFor: 'instance creation'!

context: aContext
	^ self new
		initializeWithContext: aContext;
		yourself
! !

NodeVisitor subclass: #ASTInterpreter
	instanceVariableNames: 'node context stack returnValue returned'
	package: 'Compiler-Interpreter'!
!ASTInterpreter commentStamp!
I visit an AST, interpreting (evaluating) nodes one after the other, using a small stack machine.

## API

While my instances should be used from within an `ASTDebugger`, which provides a more high level interface,
you can use methods from the `interpreting` protocol:

- `#step` evaluates the current `node` only
- `#stepOver` evaluates the AST from the current `node` up to the next stepping node (most likely the next send node)
- `#proceed` evaluates eagerly the AST
- `#restart` select the first node of the AST
- `#skip` skips the current node, moving to the next one if any!

!ASTInterpreter methodsFor: 'accessing'!

context
	^ context
!

context: aContext
	context := aContext
!

node
	"Answer the next node, ie the node to be evaluated in the next step"
	
	^ node
!

node: aNode
	node := aNode
!

result
	^ self hasReturned 
		ifTrue: [ self returnValue ] 
		ifFalse: [ self context receiver ]
!

returnValue
	^ returnValue
!

returnValue: anObject
	returnValue := anObject
!

stack
	^ stack ifNil: [ stack := OrderedCollection new ]
! !

!ASTInterpreter methodsFor: 'interpreting'!

interpret
	"Interpret the next node to be evaluated"
	
	self visit: self node
!

interpret: aNode
	self node: aNode.
	self interpret
!

next
	self node: self node nextNode
!

proceed
	"Eagerly evaluate the ast"
	
	[ self atEnd ] 
		whileFalse: [ self step ]
!

restart
	self node: self context ast nextChild
!

setNonLocalReturnFromContext: aContext
	aContext interpreter hasReturned ifTrue: [
		returned := true.
		self returnValue: aContext interpreter returnValue ]
!

skip
	self next
!

step
	self 
		interpret; 
		next
!

stepOver
	self step.
	
	[ self node isSteppingNode ] whileFalse: [ 
		self step ]
! !

!ASTInterpreter methodsFor: 'private'!

assign: aNode to: anObject
	aNode binding isInstanceVar
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

messageFromSendNode: aSendNode arguments: aCollection
	^ Message new
		selector: aSendNode selector;
		arguments: aCollection;
		yourself
!

messageNotUnderstood: aMessage receiver: anObject
	MessageNotUnderstood new
		meesage: aMessage;
		receiver: anObject;
		signal
!

sendMessage: aMessage to: anObject superSend: aBoolean
	| method |
	
	aBoolean ifFalse: [ ^ aMessage sendTo: anObject ].
	anObject class superclass ifNil: [ ^ self messageNotUnderstood: aMessage receiver: anObject ].
	
	method := anObject class superclass methodDictionary
		at: aMessage selector
		ifAbsent: [ ^ self messageNotUnderstood: aMessage receiver: anObject ].
		
	^ method sendTo: anObject arguments: aMessage arguments
! !

!ASTInterpreter methodsFor: 'stack'!

peek
	"Peek the top object of the context stack"
	
	self stack ifEmpty: [ ^ nil ].
	
	^ self stack last
!

pop
	"Pop an object from the context stack"
	
	| peekedValue |
	
	peekedValue := self peek.
	self stack removeLast.
	^ peekedValue
!

push: anObject
	"Push an object to the context stack"
	
	^ self stack add: anObject
! !

!ASTInterpreter methodsFor: 'testing'!

atEnd
	^ self hasReturned or: [ self node isNil ]
!

hasReturned
	^ returned ifNil: [ false ]
! !

!ASTInterpreter methodsFor: 'visiting'!

visit: aNode
	self hasReturned ifFalse: [ super visit: aNode ]
!

visitAssignmentNode: aNode
	| poppedValue |
	
	poppedValue := self pop.
	
	"Pop the left side of the assignment.
	It already has been visited, and we don't need its value."
	self pop.
	
	self push: poppedValue.
	self assign: aNode left to: poppedValue
!

visitBlockNode: aNode
	"Do not evaluate the block node.
	Instead, put all instructions into a block that we push to the stack for later evaluation"
	
	| block |
	
	block := AIBlockClosure forContext: self context node: aNode.
	
	self push: block
!

visitDynamicArrayNode: aNode
	| array |
	
	array := #().
	aNode nodes do: [ :each |
		array addFirst: self pop ].
	
	self push: array
!

visitDynamicDictionaryNode: aNode
	| associations hashedCollection |
	
	associations := OrderedCollection new.
	hashedCollection := HashedCollection new.
	
	aNode nodes do: [ :each | 
		associations add: self pop ].
	
	associations reversed do: [ :each |
		hashedCollection add: each ].
	
	self push: hashedCollection
!

visitJSStatementNode: aNode
	returned := true.
	self returnValue: (self eval: aNode source)
!

visitNode: aNode
	"Do nothing by default. Especially, do not visit children recursively."
!

visitReturnNode: aNode
	returned := true.
	self returnValue: self pop
!

visitSendNode: aNode
	| receiver args message result |
	
	args := aNode arguments collect: [ :each | self pop ].
	receiver := self pop.
	
	message := self
		messageFromSendNode: aNode
		arguments: args reversed.
	
	result := self sendMessage: message to: receiver superSend: aNode superSend.
	
	"For cascade sends, push the reciever if the send is not the last one"
	(aNode isCascadeSendNode and: [ aNode isLastChild not ])
		ifTrue: [ self push: receiver ]
		ifFalse: [ self push: result ]
!

visitValueNode: aNode
	self push: aNode value
!

visitVariableNode: aNode
	aNode binding isUnknownVar ifTrue: [
		^ self push: (PlatformInterface globals at: aNode value ifAbsent: [ self error: 'Unknown variable' ]) ].
		
	self push: (aNode binding isInstanceVar
		ifTrue: [ self context receiver instVarAt: aNode value ]
		ifFalse: [ self context 
			localAt: aNode value
			ifAbsent: [
				aNode value isCapitalized
					ifTrue: [
						Smalltalk current 
							at: aNode value 
							ifAbsent: [ PlatformInterface globals at: aNode value ] ] ] ])
! !

Error subclass: #ASTInterpreterError
	instanceVariableNames: ''
	package: 'Compiler-Interpreter'!
!ASTInterpreterError commentStamp!
I get signaled when an AST interpreter is unable to interpret a node.!

NodeVisitor subclass: #ASTPCNodeVisitor
	instanceVariableNames: 'context index selector currentNode'
	package: 'Compiler-Interpreter'!
!ASTPCNodeVisitor commentStamp!
I visit an AST until I get to the current node for the `context` and answer it.

## API

My instances must be filled with a context object using `#context:`.

After visiting the AST the current node is answered by `#currentNode`!

!ASTPCNodeVisitor methodsFor: 'accessing'!

context
	^ context
!

context: aContext
	context := aContext
!

currentNode
	^ currentNode
!

increaseIndex
	index := self index + 1
!

index
	^ index ifNil: [ index := 0 ]
!

selector
	^ selector
!

selector: aString
	selector := aString
! !

!ASTPCNodeVisitor methodsFor: 'visiting'!

visitJSStatementNode: aNode
	"If a JSStatementNode is encountered, it always is the current node.
	Stop visiting the AST there"
	
	currentNode := aNode
!

visitSendNode: aNode
	| sendIndex |
	sendIndex := self context sendIndexAt: self selector.
	
	super visitSendNode: aNode.
	
	self selector = aNode selector ifTrue: [
		self index < sendIndex ifFalse: [ 
			self index > sendIndex ifFalse: [ currentNode := aNode ] ].
		self increaseIndex ]
! !

!Node methodsFor: '*Compiler-Interpreter'!

isSteppingNode
	^ false
! !

!AssignmentNode methodsFor: '*Compiler-Interpreter'!

isSteppingNode
	^ true
! !

!BlockNode methodsFor: '*Compiler-Interpreter'!

isSteppingNode
	^ true
! !

!DynamicArrayNode methodsFor: '*Compiler-Interpreter'!

isSteppingNode
	^ true
! !

!DynamicDictionaryNode methodsFor: '*Compiler-Interpreter'!

isSteppingNode
	^ true
! !

!JSStatementNode methodsFor: '*Compiler-Interpreter'!

isSteppingNode
	^ true
! !

!SendNode methodsFor: '*Compiler-Interpreter'!

isSteppingNode
	^ true
! !

