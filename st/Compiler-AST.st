Smalltalk current createPackage: 'Compiler-AST'!
Object subclass: #Node
	instanceVariableNames: 'parent position nodes shouldBeInlined shouldBeAliased'
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

extent
	"Answer the line and column of the end position of the receiver in the source code"
	
	^ self nextNode 
		ifNil: [ self parent ifNotNil: [ :node | node extent ] ]
		ifNotNil: [ :node | node position ]
!

nextNode
	^ self parent ifNotNil: [ :node |
		node nextNode: self ]
!

nextNode: aNode
	"Answer the next node after aNode"
	
	^ self nodes 
		at: (self nodes indexOf: aNode) + 1
		ifAbsent: [ nil ]
!

nodes
	^nodes ifNil: [nodes := Array new]
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
! !

!Node methodsFor: 'building'!

nodes: aCollection
	nodes := aCollection.
	aCollection do: [ :each | each parent: self ]
!

position: aPosition
	position := aPosition
! !

!Node methodsFor: 'testing'!

isAssignmentNode
	^ false
!

isBlockNode
	^false
!

isBlockSequenceNode
	^false
!

isImmutable
	^false
!

isJSStatementNode
	^ false
!

isNode
	^ true
!

isReturnNode
	^false
!

isSendNode
	^false
!

isValueNode
	^false
!

stopOnStepping
	^ false
!

subtreeNeedsAliasing
	^(self shouldBeAliased or: [ self shouldBeInlined ]) or: [
		(self nodes detect: [ :each | each subtreeNeedsAliasing ] ifNone: [ false ]) ~= false ]
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
	^left
!

left: aNode
	left := aNode
!

nodes
	^ Array with: self left with: self right
!

right
	^right
!

right: aNode
	right := aNode
! !

!AssignmentNode methodsFor: 'testing'!

isAssignmentNode
	^ true
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

parameters
	^parameters ifNil: [parameters := Array new]
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
	^true
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
	^receiver
!

receiver: aNode
	receiver := aNode
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
	instanceVariableNames: 'source'
	package: 'Compiler-AST'!
!JSStatementNode commentStamp!
I represent an JavaScript statement node.!

!JSStatementNode methodsFor: 'accessing'!

source
	^source ifNil: ['']
!

source: aString
	source := aString
! !

!JSStatementNode methodsFor: 'testing'!

isJSStatementNode
	^ true
! !

!JSStatementNode methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitJSStatementNode: self
! !

Node subclass: #MethodNode
	instanceVariableNames: 'selector arguments source scope classReferences messageSends superSends'
	package: 'Compiler-AST'!
!MethodNode commentStamp!
I represent an method node.

A method node must be the root and only method node of a valid AST.!

!MethodNode methodsFor: 'accessing'!

arguments
	^arguments ifNil: [#()]
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

extent
	^ self source lines size @ (self source lines last size + 1)
!

messageSends
	^ messageSends
!

messageSends: aCollection
	messageSends := aCollection
!

scope
	^ scope
!

scope: aMethodScope
	scope := aMethodScope
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
	^arguments ifNil: [arguments := #()]
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
	^CascadeNode new
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

nodes
	^ (Array withAll: self arguments)
		add: self receiver;
		yourself
!

receiver
	^receiver
!

receiver: aNode
	receiver := aNode.
	aNode isNode ifTrue: [
		aNode parent: self ]
!

selector
	^selector
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
	^SendNode new
		position: self position;
		receiver: (self receiver
		ifNil: [anObject]
		ifNotNil: [self receiver valueForReceiver: anObject]);
		selector: self selector;
		arguments: self arguments;
		yourself
! !

!SendNode methodsFor: 'testing'!

isSendNode
	^ true
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
	^temps ifNil: [#()]
!

temps: aCollection
	temps := aCollection
! !

!SequenceNode methodsFor: 'testing'!

asBlockSequenceNode
	^BlockSequenceNode new
		position: self position;
		nodes: self nodes;
		temps: self temps;
		yourself
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
	^true
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
	^value
!

value: anObject
	value := anObject
! !

!ValueNode methodsFor: 'testing'!

isImmutable
	^ self value isImmutable
!

isValueNode
	^true
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
	^assigned ifNil: [false]
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
! !

!VariableNode methodsFor: 'testing'!

isImmutable
	^false
! !

!VariableNode methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitVariableNode: self
! !

VariableNode subclass: #ClassReferenceNode
	instanceVariableNames: ''
	package: 'Compiler-AST'!
!ClassReferenceNode commentStamp!
I represent an class reference node.!

!ClassReferenceNode methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitClassReferenceNode: self
! !

!Object methodsFor: '*Compiler-AST'!

isNode
	^ false
! !

!CompiledMethod methodsFor: '*Compiler-AST'!

ast
	self source ifEmpty: [ self error: 'Method source is empty' ].
	
	^ Smalltalk current parse: self source
! !

