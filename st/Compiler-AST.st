Smalltalk current createPackage: 'Compiler-AST' properties: #{}!
Object subclass: #Node
	instanceVariableNames: 'nodes used assignedTo alias canBeInlined'
	package: 'Compiler-AST'!
!Node commentStamp!
I am the abstract root class of the abstract syntax tree.!

!Node methodsFor: 'accessing'!

addNode: aNode
	self nodes add: aNode
!

alias
	^ alias
!

alias: aString
	alias := aString
!

assignedTo
	^ assignedTo
!

assignedTo: aScopeVar
	assignedTo := aScopeVar
!

beUsed
	used := true
!

canBeInlined
	^ canBeInlined ifNil: [ false ]
!

canBeInlined: aBoolean
	canBeInlined := aBoolean
!

nodes
	^nodes ifNil: [nodes := Array new]
!

used
	^ used ifNil: [ false ]
!

used: aBoolean
	used := aBoolean
! !

!Node methodsFor: 'building'!

nodes: aCollection
	nodes := aCollection
! !

!Node methodsFor: 'testing'!

canAliasChildren
	^ true
!

isAliased
	^ self alias notNil
!

isAssignmentNode
	^ false
!

isBlockNode
	^false
!

isBlockSequenceNode
	^false
!

isSendNode
	^false
!

isUsed
	^ self used
!

isValueNode
	^false
!

shouldBeAliased
	^ self isUsed and: [ self alias isNil ]
! !

!Node methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitNode: self
! !

Node subclass: #AssignmentNode
	instanceVariableNames: 'left right'
	package: 'Compiler-AST'!

!AssignmentNode methodsFor: 'accessing'!

left
	^left
!

left: aNode
	left := aNode.
	left assigned: true
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

canInlineNonLocalReturns
	^ self canBeInlined and: [
		self scope outerScope node canInlineNonLocalReturns]
!

isBlockNode
	^true
! !

!BlockNode methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitBlockNode: self
! !

Node subclass: #CascadeNode
	instanceVariableNames: 'receiver'
	package: 'Compiler-AST'!

!CascadeNode methodsFor: 'accessing'!

alias
	^self nodes last alias
!

beUsed
	self nodes do: [ :each | each beUsed ]
!

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

!DynamicArrayNode methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitDynamicArrayNode: self
! !

Node subclass: #DynamicDictionaryNode
	instanceVariableNames: ''
	package: 'Compiler-AST'!

!DynamicDictionaryNode methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitDynamicDictionaryNode: self
! !

Node subclass: #JSStatementNode
	instanceVariableNames: 'source'
	package: 'Compiler-AST'!

!JSStatementNode methodsFor: 'accessing'!

source
	^source ifNil: ['']
!

source: aString
	source := aString
! !

!JSStatementNode methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitJSStatementNode: self
! !

Node subclass: #MethodNode
	instanceVariableNames: 'selector arguments source scope classReferences messageSends'
	package: 'Compiler-AST'!

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
! !

!MethodNode methodsFor: 'testing'!

canAliasChildren
	^ false
!

canInlineNonLocalReturns
	^ true
!

hasLocalReturn
	^ self scope
		ifNil: [ false ]
		ifNotNil: [ self scope hasLocalReturn ]
!

hasNonLocalReturn
	^ self scope
		ifNil: [ false ]
		ifNotNil: [ self scope hasNonLocalReturn ]
! !

!MethodNode methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitMethodNode: self
! !

Node subclass: #ReturnNode
	instanceVariableNames: 'nonLocalReturn canBeInlined'
	package: 'Compiler-AST'!

!ReturnNode methodsFor: 'accessing'!

nonLocalReturn
	^ nonLocalReturn ifNil: [ false ]
!

nonLocalReturn: aBoolean
	nonLocalReturn := aBoolean
! !

!ReturnNode methodsFor: 'testing'!

shouldBeAliased
	^ false
! !

!ReturnNode methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitReturnNode: self
! !

Node subclass: #SendNode
	instanceVariableNames: 'selector arguments receiver superSend'
	package: 'Compiler-AST'!

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

nodes
	^ (Array withAll: self arguments)
		add: self receiver;
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

superSend
	^ superSend ifNil: [ false ]
!

superSend: aBoolean
	superSend := aBoolean
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

!SendNode methodsFor: 'testing'!

isSendNode
	^ true
! !

!SendNode methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitSendNode: self
! !

Node subclass: #SequenceNode
	instanceVariableNames: 'temps scope'
	package: 'Compiler-AST'!

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
	    nodes: self nodes;
	    temps: self temps;
	    yourself
!

canAliasChildren
	^ false
! !

!SequenceNode methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitSequenceNode: self
! !

SequenceNode subclass: #BlockSequenceNode
	instanceVariableNames: ''
	package: 'Compiler-AST'!

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

!ValueNode methodsFor: 'accessing'!

value
	^value
!

value: anObject
	value := anObject
! !

!ValueNode methodsFor: 'testing'!

isValueNode
	^true
!

shouldBeAliased
	^ false
! !

!ValueNode methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitValueNode: self
! !

ValueNode subclass: #VariableNode
	instanceVariableNames: 'assigned binding'
	package: 'Compiler-AST'!

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

!VariableNode methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitVariableNode: self
! !

VariableNode subclass: #ClassReferenceNode
	instanceVariableNames: ''
	package: 'Compiler-AST'!

!ClassReferenceNode methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitClassReferenceNode: self
! !

