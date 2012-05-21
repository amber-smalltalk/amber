Smalltalk current createPackage: 'Compiler-IR' properties: #{}!
NodeVisitor subclass: #IRASTTranslator
	instanceVariableNames: 'builder source'
	package: 'Compiler-IR'!
!IRASTTranslator commentStamp!
I an the AST (abstract syntax tree) visitor responsible for building the intermediate representation graph.
I rely on a builder object, instance of IRBuilder.!

!IRASTTranslator methodsFor: 'accessing'!

builder
	^ builder ifNil: [ builder := IRBuilder new ]
!

builder: aBuilder
	builder := aBuilder
!

source
	^ source
!

source: aString
	source := aString
! !

!IRASTTranslator methodsFor: 'visiting'!

visitAssignmentNode: aNode
	self builder assignment 
		with: [ self visit: aNode left ];
		with: [ self visit: aNode right ]
!

visitBlockNode: aNode
	self builder closure 
		with: [ super visitBlockNode: aNode ];
		arguments: aNode parameters
!

visitJSStatementNode: aNode
	self builder verbatim: aNode source
!

visitMethodNode: aNode
	self builder method 
		source: self source;
		arguments: aNode arguments;
		selector: aNode selector;
		messageSends: aNode messageSends;
		classReferences: aNode classReferences.

	aNode scope temps do: [ :each |
		self builder tempDeclaration name: each name ].
	aNode hasNonLocalReturn 
		ifTrue: [ self builder nonLocalReturnHandling with: [
			super visitMethodNode: aNode ]]
		ifFalse: [ super visitMethodNode: aNode ]
!

visitReturnNode: aNode
	(aNode nonLocalReturn 
		ifTrue: [ self builder nonLocalReturn ]
		ifFalse: [ self builder return ]) with: [ super visitReturnNode: aNode ]
!

visitSendNode: aNode
	self builder send
		selector: aNode selector;
		with: [
			self visit: aNode receiver.
			(aNode arguments do: [ :each | self visit: each ]) ]
!

visitSequenceNode: aNode
	self builder sequence with: [
		super visitSequenceNode: aNode ]
!

visitValueNode: aNode
	self builder value: aNode value
!

visitVariableNode: aNode
	self builder variable: aNode binding
! !

IRASTTranslator subclass: #IRASTResolver
	instanceVariableNames: 'nextAlias'
	package: 'Compiler-IR'!
!IRASTResolver commentStamp!
I resolve nodes by creating an alias variable when appropriate, to flatten the AST.
Nodes referenced in other nodes are aliased, except for some specific nodes such as variable or value nodes.!

!IRASTResolver methodsFor: 'accessing'!

nextAlias
	"Message sends are assigned, or 'aliased', to internal variables.
	Internal variable names are unique, and attached to the annotated send node"

	nextAlias ifNil: [nextAlias := 0].
	nextAlias := nextAlias + 1.
	^ '$_', nextAlias asString
! !

!IRASTResolver methodsFor: 'visiting'!

resolve: aNode
	aNode isBlockSequenceNode ifFalse: [
		aNode nodes do: [ :each | self resolve: each ]].
	aNode shouldBeAliased ifTrue: [
		| alias |
		alias := self nextAlias.
		self builder method internalVariables add: alias.
		self builder assignment
			with: [ self builder variable: (AliasVar new name: alias) ];
			with: [ self visit: aNode resolving: false ].
			aNode alias: alias ]
!

visit: aNode
	self visit: aNode resolving: aNode canAliasChildren
!

visit: aNode resolving: aBoolean
	aBoolean ifTrue: [ self resolve: aNode ].
	aNode isAliased 
		ifTrue: [ self visitAliased: aNode ]
		ifFalse: [ super visit: aNode ]
!

visitAliased: aNode
	^ self builder variable: (AliasVar new name: aNode alias)
! !

Object subclass: #IRBuilder
	instanceVariableNames: 'method root nextPc'
	package: 'Compiler-IR'!
!IRBuilder commentStamp!
I am responsible for building the IR (Intermatiate Representation) graph, composed of IRInstruction objects.!

!IRBuilder methodsFor: 'accessing'!

method
	^ method
!

nextPc
	nextPc ifNil: [ nextPc := 0 ].
	nextPc := nextPc + 1.
	^ nextPc
!

root
	^ root
!

root: anIRInstruction
	root := anIRInstruction
! !

!IRBuilder methodsFor: 'building'!

add: aClass
	^ self root append: (aClass on: self)
!

append: anObject
	^root append: anObject
!

assignment
	^ self add: IRAssignment
!

closure
	^ self add: IRClosure
!

nonLocalReturn
	^ self add: IRNonLocalReturn
!

nonLocalReturnHandling
	^ self add: IRNonLocalReturnHandling
!

return
	^ self add: IRReturn
!

send
	^ self add: IRSend
!

sequence
	^ self add: IRSequence
!

statement
	^ self add: IRStatement
!

tempDeclaration
	^ self add: IRTempDeclaration
!

value
	^ self add: IRValue
!

value: aString
	^ self value
		value: aString;
		yourself
!

variable
	^ self add: IRVariable
!

variable: aScopeVariable
	^ self variable
		variable: aScopeVariable;
		yourself
!

verbatim: aString
	^(self add: IRVerbatim)
		source: aString;
		yourself
!

with: anObject
	self root with: anObject
! !

!IRBuilder methodsFor: 'emiting'!

emitOn: aStream
	method emitOn: aStream
! !

!IRBuilder methodsFor: 'initialization'!

initialize
	super initialize.
	root := method := IRMethod on: self
! !

Object subclass: #IRInstruction
	instanceVariableNames: 'builder instructions'
	package: 'Compiler-IR'!
!IRInstruction commentStamp!
I am the abstract root class of the IR (intermediate representation) instructions class hierarchy.
The IR graph is used to emit JavaScript code using a JSStream.!

!IRInstruction methodsFor: 'accessing'!

builder
	^ builder
!

builder: aBuilder
	builder := aBuilder
!

instructions
	^ instructions ifNil: [ instructions := OrderedCollection new ]
! !

!IRInstruction methodsFor: 'building'!

append: anObject
	anObject appendToInstruction: self.
	^ anObject
!

appendBlock: aBlock
	| root |
	root := self builder root.
	self builder root: self.
	aBlock value.
	self builder root: root
!

appendInstruction: anIRInstruction
	self instructions add: anIRInstruction
!

appendString: aString
	self append: (self builder value: aString)
!

appendToInstruction: anIRInstruction
	anIRInstruction appendInstruction: self
!

with: anObject
	anObject appendToInstruction: self
! !

!IRInstruction methodsFor: 'emiting'!

emitOn: aStream
	"Just emit all sub instructions to aStream.
	Subclasses should not forget to call `super emitOn:`"

	self instructions do: [ :each |
		each emitOn: aStream ]
! !

!IRInstruction class methodsFor: 'instance creation'!

on: aBuilder
	^ self new
		builder: aBuilder;
		yourself
! !

IRInstruction subclass: #IRAssignment
	instanceVariableNames: 'left right'
	package: 'Compiler-IR'!

!IRAssignment methodsFor: 'emiting'!

emitOn: aStream
	aStream 
		nextPutAssignment: self instructions first
		to: self instructions second
! !

IRInstruction subclass: #IRClosure
	instanceVariableNames: 'arguments'
	package: 'Compiler-IR'!

!IRClosure methodsFor: 'accessing'!

arguments
	^ arguments
!

arguments: aCollection
	arguments := aCollection
! !

!IRClosure methodsFor: 'emiting'!

emitOn: aStream
	aStream 
		nextPutClosureWith: [ super emitOn: aStream ]
		arguments: (self arguments collect: [ :each | each asVariableName ])
! !

IRInstruction subclass: #IRMethod
	instanceVariableNames: 'source selector classReferences messageSends arguments internalVariables source'
	package: 'Compiler-IR'!
!IRMethod commentStamp!
I am a method instruction!

!IRMethod methodsFor: 'accessing'!

arguments
	^ arguments
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

internalVariables
	^ internalVariables ifNil: [ internalVariables := Set new ]
!

messageSends
	^ messageSends
!

messageSends: aCollection
	messageSends := aCollection
!

selector
	^ selector
!

selector: aString
	selector := aString
!

source
	^ source
!

source: aString
	source := aString
! !

!IRMethod methodsFor: 'emiting'!

emitOn: aStream
	aStream 
		nextPutMethodDeclaration: self
		with: [
			aStream 
				nextPutFunctionWith: [ 
					self internalVariables notEmpty ifTrue: [
						aStream nextPutVars: self internalVariables ].
					super emitOn: aStream ]
				arguments: (self arguments collect: [ :each | each asVariableName ]) ]
! !

IRInstruction subclass: #IRNonLocalReturn
	instanceVariableNames: ''
	package: 'Compiler-IR'!
!IRNonLocalReturn commentStamp!
I am a non local return instruction.
Non local returns are handled using a try/catch JS statement.

See IRNonLocalReturnHandling class!

!IRNonLocalReturn methodsFor: 'emiting'!

emitOn: aStream
	aStream nextPutNonLocalReturnWith: [
		super emitOn: aStream ]
! !

IRInstruction subclass: #IRNonLocalReturnHandling
	instanceVariableNames: ''
	package: 'Compiler-IR'!
!IRNonLocalReturnHandling commentStamp!
I represent a non local return handling instruction.
Non local returns are handled with a try/catch statement!

!IRNonLocalReturnHandling methodsFor: 'emiting'!

emitOn: aStream
	aStream nextPutNonLocalReturnHandlingWith: [
		super emitOn: aStream ]
! !

IRInstruction subclass: #IRReturn
	instanceVariableNames: ''
	package: 'Compiler-IR'!
!IRReturn commentStamp!
I am a local return instruction.!

!IRReturn methodsFor: 'emiting'!

emitOn: aStream
	aStream nextPutReturnWith: [
		super emitOn: aStream ]
! !

IRInstruction subclass: #IRSend
	instanceVariableNames: 'selector superSend'
	package: 'Compiler-IR'!
!IRSend commentStamp!
I am a message send instruction.!

!IRSend methodsFor: 'accessing'!

emitOn: aStream

	aStream nextPutAll: 'smalltalk.send('.
	self instructions first emitOn: aStream.
	aStream nextPutAll:  ',"', self selector asSelector, '", ['.
	self instructions allButFirst
		do: [ :each | each emitOn: aStream ]
		separatedBy: [ aStream nextPutAll: ',' ].
	aStream nextPutAll: '])'
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
! !

IRInstruction subclass: #IRSequence
	instanceVariableNames: ''
	package: 'Compiler-IR'!

!IRSequence methodsFor: 'emiting'!

appendInstruction: anIRInstruction
	self instructions add: ((IRStatement on: self builder) with: anIRInstruction)
!

emitOn: aStream
	aStream nextPutSequenceWith: [
		"self instructions do: [ :each |
			((IRStatement on: self builder)
				pc: self builder nextPc;
				with: each;
				yourself) emitOn: aStream ]"
		super emitOn: aStream ]
! !

IRInstruction subclass: #IRStatement
	instanceVariableNames: 'pc'
	package: 'Compiler-IR'!

!IRStatement methodsFor: 'accessing'!

pc
	^ pc ifNil: [pc := self builder nextPc]
! !

!IRStatement methodsFor: 'emiting'!

emitOn: aStream
	aStream nextPutStatement: self pc with: [
		super emitOn: aStream ]
! !

IRInstruction subclass: #IRTempDeclaration
	instanceVariableNames: 'name'
	package: 'Compiler-IR'!
!IRTempDeclaration commentStamp!
I am a temporary variable declaration instruction!

!IRTempDeclaration methodsFor: 'accessing'!

name
	^ name
!

name: aString
	name := aString
! !

!IRTempDeclaration methodsFor: 'emiting'!

emitOn: aStream
	aStream nextPutVar: self name asVariableName
! !

IRInstruction subclass: #IRValue
	instanceVariableNames: 'value'
	package: 'Compiler-IR'!
!IRValue commentStamp!
I am the simplest possible instruction. I represent a value.!

!IRValue methodsFor: 'accessing'!

value
	^value
!

value: aString
	value := aString
! !

!IRValue methodsFor: 'emiting'!

emitOn: aStream
	aStream nextPutAll: self value asJavascript
! !

IRInstruction subclass: #IRVariable
	instanceVariableNames: 'variable'
	package: 'Compiler-IR'!

!IRVariable methodsFor: 'accessing'!

variable
	^ variable
!

variable: aScopeVariable
	variable := aScopeVariable
! !

!IRVariable methodsFor: 'emiting'!

emitOn: aStream
	aStream nextPutAll: self variable alias
! !

IRInstruction subclass: #IRVerbatim
	instanceVariableNames: 'source'
	package: 'Compiler-IR'!

!IRVerbatim methodsFor: 'accessing'!

source
	^ source
!

source: aString
	source := aString
! !

!IRVerbatim methodsFor: 'emiting'!

emitOn: aStream
	aStream nextPutAll: self source, ';'
! !

!BlockClosure methodsFor: '*Compiler-IR'!

appendToInstruction: anIRInstruction
    anIRInstruction appendBlock: self
! !

!String methodsFor: '*Compiler-IR'!

appendToInstruction: anInstruction
	anInstruction appendString: self
!

asVariableName
	^ (Smalltalk current reservedWords includes: self)
		ifTrue: [ self, '_' ]
		ifFalse: [ self ]
!

emitOn: aStream
	aStream nextPutAll: self
! !

