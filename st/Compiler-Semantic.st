Smalltalk current createPackage: 'Compiler-Semantic' properties: #{}!
SemanticError subclass: #InvalidAssignmentError
	instanceVariableNames: 'variableName'
	package: 'Compiler-Semantic'!
!InvalidAssignmentError commentStamp!
I get signaled when a pseudo variable gets assigned.!

!InvalidAssignmentError methodsFor: 'accessing'!

variableName
	^ variableName
!

variableName: aString
	variableName := aString
! !

Object subclass: #LexicalScope
	instanceVariableNames: 'node temps args outerScope'
	package: 'Compiler-Semantic'!
!LexicalScope commentStamp!
I represent a lexical scope where variable names are associated with ScopeVars
Instances are used for block scopes. Method scopes are instances of MethodLexicalScope.

I am attached to a ScopeVar and method/block nodes.
Each context (method/closure) get a fresh scope that inherits from its outer scope.!

!LexicalScope methodsFor: 'accessing'!

allVariableNames
	^ self args keys, self temps keys
!

args
	^ args ifNil: [ args := Dictionary new ]
!

bindingFor: aStringOrNode
	^ self args at: aStringOrNode value ifAbsent: [
		self temps at: aStringOrNode value ifAbsent: [ nil ]]
!

lookupVariable: aNode
	| lookup |
	lookup := (self bindingFor: aNode).
	lookup ifNil: [
		lookup := self outerScope ifNotNil: [ 
			(self outerScope lookupVariable: aNode) ]].
	^ lookup
!

methodScope
	^ self outerScope ifNotNil: [
		self outerScope methodScope ]
!

node
	"Answer the node in which I am defined"
	
	^ node
!

node: aNode
	node := aNode
!

outerScope
	^ outerScope
!

outerScope: aLexicalScope
	outerScope := aLexicalScope
!

scopeLevel
	^ (self outerScope 
		ifNil: [ 0 ]
		ifNotNil: [ self outerScope scopeLevel ]) + 1
!

temps
	^ temps ifNil: [ temps := Dictionary new ]
! !

!LexicalScope methodsFor: 'adding'!

addArg: aString
	self args at: aString put: (ArgVar on: aString).
	(self args at: aString) scope: self
!

addTemp: aString
	self temps at: aString put: (TempVar on: aString).
	(self temps at: aString) scope: self
! !

!LexicalScope methodsFor: 'testing'!

isMethodScope
	^ false
! !

LexicalScope subclass: #MethodLexicalScope
	instanceVariableNames: 'iVars unknownVariables nonLocalReturn'
	package: 'Compiler-Semantic'!
!MethodLexicalScope commentStamp!
I represent a method scope.!

!MethodLexicalScope methodsFor: 'accessing'!

allVariableNames
	^ super allVariableNames, self iVars keys
!

bindingFor: aNode
	^ (super bindingFor: aNode) ifNil: [
		self iVars at: aNode value ifAbsent: [ nil ]]
!

iVars
	^ iVars ifNil: [ iVars := Dictionary new ]
!

methodScope
	^ self
!

nonLocalReturn
	^ nonLocalReturn ifNil: [ false ]
!

nonLocalReturn: aBoolean
	nonLocalReturn := aBoolean
!

unknownVariables
	^ unknownVariables ifNil: [ unknownVariables := OrderedCollection new ]
! !

!MethodLexicalScope methodsFor: 'adding'!

addIvar: aString
	self iVars at: aString put: (InstanceVar on: aString).
	(self iVars at: aString) scope: self
! !

!MethodLexicalScope methodsFor: 'testing'!

hasNonLocalReturn
	^ self nonLocalReturn
!

isMethodScope
	^ true
! !

Object subclass: #ScopeVar
	instanceVariableNames: 'scope name'
	package: 'Compiler-Semantic'!
!ScopeVar commentStamp!
I am an entry in a LexicalScope that gets associated with variable nodes of the same name.  
There are 4 different subclasses of vars: temp vars, local vars, args, and unknown/global vars.!

!ScopeVar methodsFor: 'accessing'!

alias
	^ self name asVariableName
!

name
	^ name
!

name: aString
	name := aString
!

scope
	^ scope
!

scope: aScope
	scope := aScope
! !

!ScopeVar methodsFor: 'testing'!

isArgVar
	^ false
!

isInstanceVar
	^ false
!

isTempVar
	^ false
!

isUnknownVar
	^ false
! !

!ScopeVar class methodsFor: 'instance creation'!

on: aString
	^ self new 
		name: aString;
		yourself
! !

ScopeVar subclass: #AliasVar
	instanceVariableNames: ''
	package: 'Compiler-Semantic'!
!AliasVar commentStamp!
I am an internally defined variable by the compiler!

ScopeVar subclass: #ArgVar
	instanceVariableNames: ''
	package: 'Compiler-Semantic'!
!ArgVar commentStamp!
I am an argument of a method or block.!

!ArgVar methodsFor: 'testing'!

isArgVar
	^ true
! !

ScopeVar subclass: #ClassRefVar
	instanceVariableNames: ''
	package: 'Compiler-Semantic'!
!ClassRefVar commentStamp!
I am an class reference variable!

!ClassRefVar methodsFor: 'accessing'!

alias
	^ '(Smalltalk.', self name, ' || ', self name, ')'
! !

ScopeVar subclass: #InstanceVar
	instanceVariableNames: ''
	package: 'Compiler-Semantic'!
!InstanceVar commentStamp!
I am an instance variable of a method or block.!

!InstanceVar methodsFor: 'testing'!

alias
	^ 'self["@', self name, ']'
!

isInstanceVar
	^ true
! !

ScopeVar subclass: #TempVar
	instanceVariableNames: ''
	package: 'Compiler-Semantic'!
!TempVar commentStamp!
I am an temporary variable of a method or block.!

!TempVar methodsFor: 'testing'!

isTempVar
	^ true
! !

ScopeVar subclass: #UnknownVar
	instanceVariableNames: ''
	package: 'Compiler-Semantic'!
!UnknownVar commentStamp!
I am an unknown variable. Amber uses unknown variables as JavaScript globals!

!UnknownVar methodsFor: 'testing'!

isUnknownVar
	^ true
! !

NodeVisitor subclass: #SemanticAnalyzer
	instanceVariableNames: 'currentScope theClass classReferences messageSends'
	package: 'Compiler-Semantic'!
!SemanticAnalyzer commentStamp!
I semantically analyze the abstract syntax tree and annotate it with informations such as non local returns and variable scopes.!

!SemanticAnalyzer methodsFor: 'accessing'!

classReferences
	^ classReferences ifNil: [ classReferences := Set new ]
!

messageSends
	^ messageSends ifNil: [ messageSends := Set new ]
!

pseudoVariables
	^#('self' 'super' 'true' 'false' 'nil' 'thisContext')
!

theClass
	^ theClass
!

theClass: aClass
	theClass := aClass
! !

!SemanticAnalyzer methodsFor: 'error handling'!

errorInvalidAssignment: aString
	InvalidAssignmentError new
		variableName: aString;
		signal
!

errorShadowingVariable: aString
	ShadowingVariableError new
		variableName: aString;
		signal
!

errorUnknownVariable: aNode
	self allowUnknownVariables 
		ifTrue: [ currentScope methodScope unknownVariables add: aNode value ]
		ifFalse: [ 
			UnknownVariableError new
				variableName: aNode value;
				signal ]
! !

!SemanticAnalyzer methodsFor: 'factory'!

newBlockScope
	^ self newScopeOfClass: LexicalScope
!

newMethodScope
	^ self newScopeOfClass: MethodLexicalScope
!

newScopeOfClass: aLexicalScopeClass
	^ aLexicalScopeClass new 
		outerScope: currentScope;
		yourself
! !

!SemanticAnalyzer methodsFor: 'scope'!

popScope
	currentScope ifNotNil: [
		currentScope := currentScope outerScope ]
!

pushScope: aScope
	aScope outerScope: currentScope.
	currentScope := aScope
!

validateVariableScope: aString
	"Validate the variable scope in by doing a recursive lookup, up to the method scope"

	(currentScope lookupVariable: aString) ifNotNil: [
		self errorShadowingVariable: aString ]
! !

!SemanticAnalyzer methodsFor: 'testing'!

allowUnknownVariables
	^ true
! !

!SemanticAnalyzer methodsFor: 'visiting'!

visitAssignmentNode: aNode
	(self pseudoVariables includes: aNode left value) ifTrue: [
		self errorInvalidAssignment: aNode left ].
	aNode left beAssigned.
	aNode right beUsed.
	super visitAssignmentNode: aNode
!

visitBlockNode: aNode
	self pushScope: self newBlockScope.
	aNode scope: currentScope.
	
	aNode parameters do: [ :each | 
		self validateVariableScope: each.
		currentScope addArg: each ].

	super visitBlockNode: aNode.
	self popScope
!

visitCascadeNode: aNode
	"Populate the receiver into all children"
	aNode nodes do: [ :each | each receiver: aNode receiver ].
	super visitCascadeNode: aNode
!

visitClassReferenceNode: aNode
	self classReferences add: aNode value.
	aNode binding: (ClassRefVar new name: aNode value; yourself)
!

visitMethodNode: aNode
	self pushScope: self newMethodScope.
	aNode scope: currentScope.

	self theClass allInstanceVariableNames do: [:each | 
		currentScope addIVar: each ].
	aNode arguments do: [ :each | 
		self validateVariableScope: each.
		currentScope addArg: each ].

	super visitMethodNode: aNode.

	aNode 
		classReferences: self classReferences;
		messageSends: self messageSends.
	self popScope
!

visitReturnNode: aNode
	currentScope isMethodScope ifFalse: [
		currentScope methodScope nonLocalReturn: true.
		aNode nonLocalReturn: true ].
	aNode nodes first beUsed.
	super visitReturnNode: aNode
!

visitSendNode: aNode
	self messageSends add: aNode selector.
	aNode receiver ifNotNil: [
		aNode receiver beUsed ].
	aNode arguments do: [ :each |
		each beUsed ].
	super visitSendNode: aNode
!

visitSequenceNode: aNode
	aNode temps do: [ :each | 
		self validateVariableScope: each.
		currentScope addTemp: each ].

	super visitSequenceNode: aNode
!

visitVariableNode: aNode
	"Bind a ScopeVar to aNode by doing a lookup in the current scope.
	If no ScopeVar is found, bind a UnknowVar and throw an error"

	aNode binding: ((currentScope lookupVariable: aNode) ifNil: [ 
		self errorUnknownVariable: aNode.
		UnknownVar new name: aNode value; yourself ])
! !

!SemanticAnalyzer class methodsFor: 'instance creation'!

on: aClass
	^ self new
		theClass: aClass;
		yourself
! !

