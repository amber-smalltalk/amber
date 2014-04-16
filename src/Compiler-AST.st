Smalltalk createPackage: 'Compiler-AST'!
Object subclass: #Node
	instanceVariableNames: 'parent position source nodes shouldBeInlined shouldBeAliased'
	package: 'Compiler-AST'!
!Node commentStamp!
I am the abstract root class of the abstract syntax tree.

Concrete classes should implement `#accept:` to allow visiting.

`position` holds a point containing line and column number of the symbol location in the original source file.!

!Node methodsFor: 'accessing'!

addNode: aNode
	self nodes add: aNode.
	aNode parent: self
!

allNodes
	| allNodes |
	
	allNodes := self nodes asSet.
	self nodes do: [ :each | 
		allNodes addAll: each allNodes ].
	
	^ allNodes
!

method
	^ self parent ifNotNil: [ :node | node method ]
!

navigationNodeAt: aPoint ifAbsent: aBlock
	"Answer the navigation node in the receiver's tree at aPoint 
	or nil if no navigation node was found.
	
	See `node >> isNaviationNode`"
	
	| children |
	
	children := self allNodes select: [ :each | 
		each isNavigationNode and: [ each inPosition: aPoint ] ].
	
	children ifEmpty: [ ^ aBlock value ].
	
	^ (children asArray sort: [ :a :b | 
		(a positionStart dist: aPoint) <= 
		(b positionStart dist: aPoint) ]) first
!

nextChild
	"Answer the next node after aNode.
	Recurse into the possible children of the receiver to answer the next node to be evaluated"
	
	^ self nodes isEmpty
		ifTrue: [ self ]
		ifFalse: [ self nodes first nextChild ]
!

nextNode
	^ self parent ifNotNil: [ :node |
		node nextNode: self ]
!

nextNode: aNode
	"Answer the next node after aNode.
	Recurse into the possible children of the next node to answer the next node to be evaluated"
	
	| next |
	
	next := self nodes 
		at: (self nodes indexOf: aNode) + 1
		ifAbsent: [ ^ self ].
	
	^ next nextChild
!

nodes
	^ nodes ifNil: [ nodes := Array new ]
!

parent
	^ parent
!

parent: aNode
	parent := aNode
!

position
	"answer the line and column of the receiver in the source code"
	
	^ position ifNil: [ 
		self parent ifNotNil: [ :node | node position ] ]
!

position: aPosition
	position := aPosition
!

positionEnd
	^ self positionStart + ((self source lines size - 1) @ (self source lines last size - 1))
!

positionStart
	^ self position
!

shouldBeAliased
	^ shouldBeAliased ifNil: [ false ]
!

shouldBeAliased: aBoolean
	shouldBeAliased := aBoolean
!

shouldBeInlined
	^ shouldBeInlined ifNil: [ false ]
!

shouldBeInlined: aBoolean
	shouldBeInlined := aBoolean
!

size
	^ self source size
!

source
	^ source ifNil: [ '' ]
!

source: aString
	source := aString
! !

!Node methodsFor: 'building'!

nodes: aCollection
	nodes := aCollection.
	aCollection do: [ :each | each parent: self ]
! !

!Node methodsFor: 'copying'!

postCopy
	super postCopy.
	self nodes do: [ :each | each parent: self ]
! !

!Node methodsFor: 'testing'!

inPosition: aPoint
	^ (self positionStart <= aPoint and: [
		self positionEnd >= aPoint ])
!

isAssignmentNode
	^ false
!

isBlockNode
	^ false
!

isBlockSequenceNode
	^ false
!

isCascadeNode
	^ false
!

isImmutable
	^ false
!

isJSStatementNode
	^ false
!

isLastChild
	^ self parent nodes last = self
!

isNavigationNode
	"Answer true if the node can be navigated to"
	
	^ false
!

isNode
	^ true
!

isReferenced
	"Answer true if the receiver is referenced by other nodes.
	Do not take sequences or assignments into account"
	
	^ (self parent isSequenceNode or: [
		self parent isAssignmentNode ]) not
!

isReturnNode
	^ false
!

isSendNode
	^ false
!

isSequenceNode
	^ false
!

isValueNode
	^ false
!

isVariableNode
	^ false
!

requiresSmalltalkContext
	"Answer true if the receiver requires a smalltalk context.
	Only send nodes require a context.
	
	If no node requires a context, the method will be compiled without one.
	See `IRJSTranslator` and `JSStream` for context creation"
	
	^ (self nodes 
		detect: [ :each | each requiresSmalltalkContext ]
		ifNone: [ nil ]) notNil
!

stopOnStepping
	^ false
!

subtreeNeedsAliasing
	^ (self shouldBeAliased or: [ self shouldBeInlined ]) or: [
		self nodes anySatisfy: [ :each | each subtreeNeedsAliasing ] ]
! !

!Node methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitNode: self
! !

Node subclass: #AssignmentNode
	instanceVariableNames: 'left right'
	package: 'Compiler-AST'!
!AssignmentNode commentStamp!
I represent an assignment node.!

!AssignmentNode methodsFor: 'accessing'!

left
	^ left
!

left: aNode
	left := aNode.
	aNode parent: self
!

nodes
	^ Array with: self left with: self right
!

right
	^ right
!

right: aNode
	right := aNode.
	aNode parent: self
! !

!AssignmentNode methodsFor: 'testing'!

isAssignmentNode
	^ true
!

shouldBeAliased
	^ super shouldBeAliased or: [ self isReferenced ]
! !

!AssignmentNode methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitAssignmentNode: self
! !

Node subclass: #BlockNode
	instanceVariableNames: 'parameters scope'
	package: 'Compiler-AST'!
!BlockNode commentStamp!
I represent an block closure node.!

!BlockNode methodsFor: 'accessing'!

nextChild
	"Answer the receiver as we want to avoid eager evaluation"
	
	^ self
!

nextNode: aNode
	"Answer the receiver as we want to avoid eager evaluation"
	
	^ self
!

parameters
	^ parameters ifNil: [ parameters := Array new ]
!

parameters: aCollection
	parameters := aCollection
!

scope
	^ scope
!

scope: aLexicalScope
	scope := aLexicalScope
! !

!BlockNode methodsFor: 'testing'!

isBlockNode
	^ true
!

subtreeNeedsAliasing
	^ self shouldBeAliased or: [ self shouldBeInlined ]
! !

!BlockNode methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitBlockNode: self
! !

Node subclass: #CascadeNode
	instanceVariableNames: 'receiver'
	package: 'Compiler-AST'!
!CascadeNode commentStamp!
I represent an cascade node.!

!CascadeNode methodsFor: 'accessing'!

receiver
	^ receiver
!

receiver: aNode
	receiver := aNode
! !

!CascadeNode methodsFor: 'testing'!

isCascadeNode
	^ true
! !

!CascadeNode methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitCascadeNode: self
! !

Node subclass: #DynamicArrayNode
	instanceVariableNames: ''
	package: 'Compiler-AST'!
!DynamicArrayNode commentStamp!
I represent an dynamic array node.!

!DynamicArrayNode methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitDynamicArrayNode: self
! !

Node subclass: #DynamicDictionaryNode
	instanceVariableNames: ''
	package: 'Compiler-AST'!
!DynamicDictionaryNode commentStamp!
I represent an dynamic dictionary node.!

!DynamicDictionaryNode methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitDynamicDictionaryNode: self
! !

Node subclass: #JSStatementNode
	instanceVariableNames: ''
	package: 'Compiler-AST'!
!JSStatementNode commentStamp!
I represent an JavaScript statement node.!

!JSStatementNode methodsFor: 'testing'!

isJSStatementNode
	^ true
!

requiresSmalltalkContext
	^ true
! !

!JSStatementNode methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitJSStatementNode: self
! !

Node subclass: #MethodNode
	instanceVariableNames: 'selector arguments source scope classReferences sendIndexes superSends'
	package: 'Compiler-AST'!
!MethodNode commentStamp!
I represent an method node.

A method node must be the root and only method node of a valid AST.!

!MethodNode methodsFor: 'accessing'!

arguments
	^ arguments ifNil: [ #() ]
!

arguments: aCollection
	arguments := aCollection
!

classReferences
	^ classReferences
!

classReferences: aCollection
	classReferences := aCollection
!

messageSends
	^ self sendIndexes keys
!

method
	^ self
!

scope
	^ scope
!

scope: aMethodScope
	scope := aMethodScope
!

selector
	^ selector
!

selector: aString
	selector := aString
!

sendIndexes
	^ sendIndexes
!

sendIndexes: aDictionary
	sendIndexes := aDictionary
!

sequenceNode
	self nodes do: [ :each |
		each isSequenceNode ifTrue: [ ^ each ] ].
		
	^ nil
!

source
	^ source
!

source: aString
	source := aString
!

superSends
	^ superSends
!

superSends: aCollection
	superSends := aCollection
! !

!MethodNode methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitMethodNode: self
! !

Node subclass: #ReturnNode
	instanceVariableNames: 'scope'
	package: 'Compiler-AST'!
!ReturnNode commentStamp!
I represent an return node. At the AST level, there is not difference between a local return or non-local return.!

!ReturnNode methodsFor: 'accessing'!

scope
	^ scope
!

scope: aLexicalScope
	scope := aLexicalScope
! !

!ReturnNode methodsFor: 'testing'!

isReturnNode
	^ true
!

nonLocalReturn
	^ self scope isMethodScope not
! !

!ReturnNode methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitReturnNode: self
! !

Node subclass: #SendNode
	instanceVariableNames: 'selector arguments receiver superSend index'
	package: 'Compiler-AST'!
!SendNode commentStamp!
I represent an message send node.!

!SendNode methodsFor: 'accessing'!

arguments
	^ arguments ifNil: [ arguments := #() ]
!

arguments: aCollection
	arguments := aCollection.
	aCollection do: [ :each | each parent: self ]
!

cascadeNodeWithMessages: aCollection
	| first |
	first := SendNode new
		selector: self selector;
		arguments: self arguments;
		yourself.
	^ CascadeNode new
		receiver: self receiver;
		nodes: (Array with: first), aCollection;
		yourself
!

index
	^ index
!

index: anInteger
	index := anInteger
!

navigationLink
	^ self selector
!

nodes
	self receiver ifNil: [ ^ self arguments copy ].
	
	^ (Array with: self receiver)
		addAll: self arguments;
		yourself
!

receiver
	^ receiver
!

receiver: aNode
	receiver := aNode.
	aNode isNode ifTrue: [
		aNode parent: self ]
!

selector
	^ selector
!

selector: aString
	selector := aString
!

superSend
	^ superSend ifNil: [ false ]
!

superSend: aBoolean
	superSend := aBoolean
!

valueForReceiver: anObject
	^ SendNode new
		position: self position;
		source: self source;
		receiver: (self receiver
		ifNil: [ anObject ] 
		ifNotNil: [ self receiver valueForReceiver: anObject ]);
		selector: self selector;
		arguments: self arguments;
		yourself
! !

!SendNode methodsFor: 'testing'!

isCascadeSendNode
	^ self parent isCascadeNode
!

isNavigationNode
	^ true
!

isSendNode
	^ true
!

requiresSmalltalkContext
	^ true
!

shouldBeAliased
	"Because we keep track of send indexes, some send nodes need additional care for aliasing. 
	See IRJSVisitor >> visitIRSend:"
	
	| sends |
	
	sends := (self method sendIndexes at: self selector) size.
	
	^ (super shouldBeAliased or: [
		self isReferenced and: [
			(sends > 1 and: [ self index < sends ])
				or: [ self superSend ] ] ])
!

stopOnStepping
	^ true
! !

!SendNode methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitSendNode: self
! !

Node subclass: #SequenceNode
	instanceVariableNames: 'temps scope'
	package: 'Compiler-AST'!
!SequenceNode commentStamp!
I represent an sequence node. A sequence represent a set of instructions inside the same scope (the method scope or a block scope).!

!SequenceNode methodsFor: 'accessing'!

scope
	^ scope
!

scope: aLexicalScope
	scope := aLexicalScope
!

temps
	^ temps ifNil: [ #() ]
!

temps: aCollection
	temps := aCollection
! !

!SequenceNode methodsFor: 'converting'!

asBlockSequenceNode
	^ BlockSequenceNode new
		position: self position;
		source: self source;
		nodes: self nodes;
		temps: self temps;
		yourself
! !

!SequenceNode methodsFor: 'testing'!

isSequenceNode
	^ true
! !

!SequenceNode methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitSequenceNode: self
! !

SequenceNode subclass: #BlockSequenceNode
	instanceVariableNames: ''
	package: 'Compiler-AST'!
!BlockSequenceNode commentStamp!
I represent an special sequence node for block scopes.!

!BlockSequenceNode methodsFor: 'testing'!

isBlockSequenceNode
	^ true
! !

!BlockSequenceNode methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitBlockSequenceNode: self
! !

Node subclass: #ValueNode
	instanceVariableNames: 'value'
	package: 'Compiler-AST'!
!ValueNode commentStamp!
I represent a value node.!

!ValueNode methodsFor: 'accessing'!

value
	^ value
!

value: anObject
	value := anObject
! !

!ValueNode methodsFor: 'testing'!

isImmutable
	^ self value isImmutable
!

isValueNode
	^ true
! !

!ValueNode methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitValueNode: self
! !

ValueNode subclass: #VariableNode
	instanceVariableNames: 'assigned binding'
	package: 'Compiler-AST'!
!VariableNode commentStamp!
I represent an variable node.!

!VariableNode methodsFor: 'accessing'!

alias
	^ self binding alias
!

assigned
	^ assigned ifNil: [ false ]
!

assigned: aBoolean
	assigned := aBoolean
!

beAssigned
	self binding validateAssignment.
	assigned := true
!

binding
	^ binding
!

binding: aScopeVar
	binding := aScopeVar
!

navigationLink
	^ self value
! !

!VariableNode methodsFor: 'testing'!

isArgument
	^ self binding isArgVar
!

isImmutable
	^ self binding isImmutable
!

isNavigationNode
	^ true
!

isVariableNode
	^ true
! !

!VariableNode methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitVariableNode: self
! !

!CompiledMethod methodsFor: '*Compiler-AST'!

ast
	self source ifEmpty: [ self error: 'Method source is empty' ].
	
	^ Smalltalk parse: self source
! !

!Object methodsFor: '*Compiler-AST'!

isNode
	^ false
! !

