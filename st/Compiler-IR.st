Smalltalk current createPackage: 'Compiler-IR' properties: #{}!
NodeVisitor subclass: #IRASTTranslator
	instanceVariableNames: 'builder source theClass'
	package: 'Compiler-IR'!
!IRASTTranslator commentStamp!
I am the AST (abstract syntax tree) visitor responsible for building the intermediate representation graph.
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
!

theClass
	^ theClass
!

theClass: aClass
	theClass := aClass
! !

!IRASTTranslator methodsFor: 'visiting'!

visitAssignmentNode: aNode
	self builder assignment 
		with: [ self visit: aNode left ];
		with: [ self visit: aNode right ]
!

visitBlockNode: aNode
	self builder closure 
		with: [ 
			aNode scope temps do: [ :each |
				self builder tempDeclaration name: each name ].
			super visitBlockNode: aNode ];
		arguments: aNode parameters
!

visitBlockSequenceNode: aNode
	self builder blockSequence with: [
		aNode nodes do: [ :each | self visit: each ]]
!

visitJSStatementNode: aNode
	self builder verbatim: aNode source
!

visitMethodNode: aNode
	self builder method 
		scope: aNode scope;
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
		ifFalse: [ super visitMethodNode: aNode ].

	aNode hasLocalReturn ifFalse: [
		self builder return with: [
			self builder variable: (aNode scope pseudoVars at: 'self') ]]
!

visitReturnNode: aNode
	(aNode nonLocalReturn 
		ifTrue: [ self builder nonLocalReturn ]
		ifFalse: [ self builder return ]) with: [ super visitReturnNode: aNode ]
!

visitSendNode: aNode
	| send |
	send := self builder send.
	send selector: aNode selector.
	aNode superSend ifTrue: [ send classSend: self theClass superclass ].
	send with: [
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

	nextAlias ifNil: [ nextAlias := 0 ].
	nextAlias := nextAlias + 1.
	^ '$', nextAlias asString
! !

!IRASTResolver methodsFor: 'visiting'!

resolve: aNode
	aNode isBlockSequenceNode ifFalse: [
		aNode nodes do: [ :each | self resolve: each ]].
	aNode shouldBeAliased ifTrue: [
			| alias |
			alias := self nextAlias.
			self builder method internalVariables add: alias.
			self builder alias
				with: [ self builder variable: (AliasVar new 
					name: alias;
					node: aNode;
					yourself) ];
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
	^ self builder variable: (AliasVar new 
		name: aNode alias;
		node: aNode;
		yourself)
!

visitCascadeNode: aNode
	"Special care must be taken for cascade nodes.
	Only the last node should be aliased if any"

	aNode nodes allButLast do: [ :each |
		self visit: each resolving: false ].
	self visit: aNode nodes last
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

alias
	^ self add: IRAlias
!

append: anObject
	^root append: anObject
!

assignment
	^ self add: IRAssignment
!

blockSequence
	^ self add: IRBlockSequence
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

!IRInstruction methodsFor: 'testing'!

isClosure
	^ false
!

isInlined
	^ false
! !

!IRInstruction methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitIRInstruction: self
! !

!IRInstruction class methodsFor: 'instance creation'!

on: aBuilder
	^ self new
		builder: aBuilder;
		yourself
! !

IRInstruction subclass: #IRAssignment
	instanceVariableNames: ''
	package: 'Compiler-IR'!

!IRAssignment methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitIRAssignment: self
! !

IRAssignment subclass: #IRAlias
	instanceVariableNames: ''
	package: 'Compiler-IR'!

!IRAlias methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitIRAlias: self
! !

IRInstruction subclass: #IRNonLocalReturn
	instanceVariableNames: ''
	package: 'Compiler-IR'!
!IRNonLocalReturn commentStamp!
I am a non local return instruction.
Non local returns are handled using a try/catch JS statement.

See IRNonLocalReturnHandling class!

!IRNonLocalReturn methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitIRNonLocalReturn: self
! !

IRInstruction subclass: #IRNonLocalReturnHandling
	instanceVariableNames: ''
	package: 'Compiler-IR'!
!IRNonLocalReturnHandling commentStamp!
I represent a non local return handling instruction.
Non local returns are handled with a try/catch statement!

!IRNonLocalReturnHandling methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitIRNonLocalReturnHandling: self
! !

IRInstruction subclass: #IRReturn
	instanceVariableNames: ''
	package: 'Compiler-IR'!
!IRReturn commentStamp!
I am a local return instruction.!

!IRReturn methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitIRReturn: self
! !

IRInstruction subclass: #IRScopedInstruction
	instanceVariableNames: 'scope'
	package: 'Compiler-IR'!

!IRScopedInstruction methodsFor: 'accessing'!

scope
	^ scope
!

scope: aScope
	aScope instruction: self.
	scope := aScope
! !

IRScopedInstruction subclass: #IRClosure
	instanceVariableNames: 'arguments inlined'
	package: 'Compiler-IR'!

!IRClosure methodsFor: 'accessing'!

arguments
	^ arguments
!

arguments: aCollection
	arguments := aCollection
!

inlined
	^ inlined ifNil: [ false ]
!

inlined: aBoolean
	inlined := aBoolean
! !

!IRClosure methodsFor: 'testing'!

isClosure
	^ true
!

isInlined
	^ self inlined
! !

!IRClosure methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitIRClosure: self
! !

IRScopedInstruction subclass: #IRMethod
	instanceVariableNames: 'source selector classReferences messageSends arguments internalVariables'
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

!IRMethod methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitIRMethod: self
! !

IRInstruction subclass: #IRSend
	instanceVariableNames: 'selector classSend inlined'
	package: 'Compiler-IR'!
!IRSend commentStamp!
I am a message send instruction.!

!IRSend methodsFor: 'accessing'!

classSend
	^ classSend
!

classSend: aClass
	classSend := aClass
!

inlined
	^ inlined ifNil: [ false ]
!

inlined: aBoolean
	inlined := aBoolean
!

selector
	^ selector
!

selector: aString
	selector := aString
! !

!IRSend methodsFor: 'testing'!

isInlined
	^ self inlined
! !

!IRSend methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitIRSend: self
! !

IRInstruction subclass: #IRSequence
	instanceVariableNames: ''
	package: 'Compiler-IR'!

!IRSequence methodsFor: 'adding'!

appendInstruction: anIRInstruction
	self instructions add: ((IRStatement on: self builder) with: anIRInstruction)
! !

!IRSequence methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitIRSequence: self
! !

IRSequence subclass: #IRBlockSequence
	instanceVariableNames: ''
	package: 'Compiler-IR'!

!IRBlockSequence methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitIRBlockSequence: self
! !

IRInstruction subclass: #IRStatement
	instanceVariableNames: 'pc'
	package: 'Compiler-IR'!
!IRStatement commentStamp!
I am a statement instruction. 
Statements can be used to control the PC count, among other things.!

!IRStatement methodsFor: 'accessing'!

pc
	^ pc ifNil: [pc := self builder nextPc]
! !

!IRStatement methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitIRStatement: self
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

!IRTempDeclaration methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitIRTempDeclaration: self
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

!IRValue methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitIRValue: self
! !

IRInstruction subclass: #IRVariable
	instanceVariableNames: 'variable'
	package: 'Compiler-IR'!
!IRVariable commentStamp!
I am a variable instruction.!

!IRVariable methodsFor: 'accessing'!

variable
	^ variable
!

variable: aScopeVariable
	variable := aScopeVariable
! !

!IRVariable methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitIRVariable: self
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

!IRVerbatim methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitIRVerbatim: self
! !

Object subclass: #IRVisitor
	instanceVariableNames: ''
	package: 'Compiler-IR'!

!IRVisitor methodsFor: 'visiting'!

visit: anIRInstruction
	anIRInstruction accept: self
!

visitIRAlias: anIRAlias
	self visitIRAssignment: anIRAlias
!

visitIRAssignment: anIRAssignment
	self visitIRInstruction: anIRAssignment
!

visitIRBlockSequence: anIRBlockSequence
	self visitIRSequence: anIRBlockSequence
!

visitIRClosure: anIRClosure
	self visitIRInstruction: anIRClosure
!

visitIRInstruction: anIRInstruction
	anIRInstruction instructions do: [ :each | self visit: each ]
!

visitIRMethod: anIRMethod
	self visitIRInstruction: anIRMethod
!

visitIRNonLocalReturn: anIRNonLocalReturn
	self visitIRInstruction: anIRNonLocalReturn
!

visitIRNonLocalReturnHandling: anIRNonLocalReturnHandling
	self visitIRInstruction: anIRNonLocalReturnHandling
!

visitIRReturn: anIRReturn
	self visitIRInstruction: anIRReturn
!

visitIRSend: anIRSend
	self visitIRInstruction: anIRSend
!

visitIRSequence: anIRSequence
	self visitIRInstruction: anIRSequence
!

visitIRStatement: anIRStatement
	self visitIRInstruction: anIRStatement
!

visitIRTempDeclaration: anIRTempDeclaration
	self visitIRInstruction: anIRTempDeclaration
!

visitIRValue: anIRValue
	self visitIRInstruction: anIRValue
!

visitIRVariable: anIRVariable
	self visitIRInstruction: anIRVariable
!

visitIRVerbatim: anIRVerbatim
	self visitIRInstruction: anIRVerbatim
! !

IRVisitor subclass: #IRJSTranslator
	instanceVariableNames: 'stream'
	package: 'Compiler-IR'!

!IRJSTranslator methodsFor: 'accessing'!

contents
	^ self stream contents
!

stream
	^ stream
!

stream: aStream
	stream := aStream
! !

!IRJSTranslator methodsFor: 'initialization'!

initialize
	super initialize.
	stream := JSStream new.
! !

!IRJSTranslator methodsFor: 'visiting'!

visitIRAssignment: anIRAssignment
	self visit: anIRAssignment instructions first.
	self stream nextPutAssignment.
	self visit: anIRAssignment instructions last.
!

visitIRBlockSequence: anIRBlockSequence
	self stream nextPutSequenceWith: [
		anIRBlockSequence instructions notEmpty ifTrue: [
			anIRBlockSequence instructions allButLast do: [ :each | 
				self visit: each ].
			self stream nextPutReturn.
			self visit: anIRBlockSequence instructions last ]]
!

visitIRClosure: anIRClosure
	self stream 
		nextPutClosureWith: [ super visitIRClosure: anIRClosure ] 
		arguments: anIRClosure arguments
!

visitIRMethod: anIRMethod
	self stream
		nextPutMethodDeclaration: anIRMethod 
		with: [ self stream 
			nextPutFunctionWith: [ 
				anIRMethod internalVariables notEmpty ifTrue: [
					self stream nextPutVars: anIRMethod internalVariables ].
				super visitIRMethod: anIRMethod ]
			arguments: anIRMethod arguments ]
!

visitIRNonLocalReturn: anIRNonLocalReturn
	self stream nextPutNonLocalReturnWith: [
		super visitIRNonLocalReturn: anIRNonLocalReturn ]
!

visitIRNonLocalReturnHandling: anIRNonLocalReturnHandling
	self stream nextPutNonLocalReturnHandlingWith: [
		super visitIRNonLocalReturnHandling: anIRNonLocalReturnHandling ]
!

visitIRReturn: anIRReturn
	self stream nextPutReturnWith: [
		super visitIRReturn: anIRReturn ]
!

visitIRSend: anIRSend
	self stream nextPutAll: 'smalltalk.send('.
	self visit: anIRSend instructions first.
	self stream nextPutAll:  ',"', anIRSend selector asSelector, '",['.
	anIRSend instructions allButFirst
		do: [ :each | self visit: each ]
		separatedBy: [ self stream nextPutAll: ',' ].
	self stream nextPutAll: ']'.
	anIRSend classSend ifNotNil: [  
		self stream nextPutAll: ',', anIRSend classSend asJavascript ].
	self stream nextPutAll: ')'
!

visitIRSequence: anIRSequence
	self stream nextPutSequenceWith: [
		"self instructions do: [ :each |
			((IRStatement on: self builder)
				pc: self builder nextPc;
				with: each;
				yourself) emitOn: aStream ]"
		super visitIRSequence: anIRSequence ]
!

visitIRStatement: anIRStatement
	self stream nextPutStatementWith: [
		super visitIRStatement: anIRStatement ]
!

visitIRTempDeclaration: anIRTempDeclaration
	self stream nextPutVar: anIRTempDeclaration name asVariableName
!

visitIRValue: anIRValue
	self stream nextPutAll: anIRValue value asJavascript
!

visitIRVariable: anIRVariable
	self stream nextPutAll: anIRVariable variable alias
!

visitIRVerbatim: anIRVerbatim
	self stream nextPutStatementWith: [
		self stream nextPutAll: anIRVerbatim source ]
! !

Object subclass: #JSStream
	instanceVariableNames: 'stream'
	package: 'Compiler-IR'!

!JSStream methodsFor: 'accessing'!

contents
	^ stream contents
! !

!JSStream methodsFor: 'initialization'!

initialize
	super initialize.
	stream := '' writeStream.
! !

!JSStream methodsFor: 'streaming'!

lf
	stream lf
!

nextPut: aString
	stream nextPut: aString
!

nextPutAll: aString
	stream nextPutAll: aString
!

nextPutAssignment
	stream nextPutAll: '='
!

nextPutClosureWith: aBlock arguments: anArray
	stream nextPutAll: '(function('.
	anArray 
		do: [ :each | stream nextPutAll: each asVariableName ]
		separatedBy: [ stream nextPut: ',' ].
	stream nextPutAll: '){'; lf.
	aBlock value.
	stream nextPutAll: '})'
!

nextPutFunctionWith: aBlock arguments: anArray
	stream nextPutAll: 'fn: function('.
	anArray 
		do: [ :each | stream nextPutAll: each asVariableName ]
		separatedBy: [ stream nextPut: ',' ].
	stream nextPutAll: '){'; lf.
	stream nextPutAll: 'var self=this;'; lf.
	aBlock value.
	stream nextPutAll: '}'
!

nextPutMethodDeclaration: aMethod with: aBlock
	stream 
		nextPutAll: 'smalltalk.method({'; lf;
		nextPutAll: 'selector: "', aMethod selector, '",'; lf;
		nextPutAll: 'source: ', aMethod source asJavascript, ',';lf.
	aBlock value.
	stream 
		nextPutAll: ',', String lf, 'messageSends: ';
		nextPutAll: aMethod messageSends asArray asJavascript, ','; lf;
          	nextPutAll: 'args: ', (aMethod arguments collect: [ :each | each value ]) asArray asJavascript, ','; lf;
		nextPutAll: 'referencedClasses: ['.
	aMethod classReferences 
		do: [:each | stream nextPutAll: each asJavascript]
		separatedBy: [stream nextPutAll: ','].
	stream 
		nextPutAll: ']';
		nextPutAll: '})'
!

nextPutNonLocalReturnHandlingWith: aBlock
	stream 
		nextPutAll: 'var $early={};'; lf;
		nextPutAll: 'try {'; lf.
	aBlock value.
	stream 
		nextPutAll: '}'; lf;
		nextPutAll: 'catch(e) {if(e===$early)return e[0]; throw e}'; lf
!

nextPutNonLocalReturnWith: aBlock
	stream nextPutAll: '(function(){throw $early=['.
	aBlock value.
	stream nextPutAll: ']})()'
!

nextPutReturn
	stream nextPutAll: 'return '
!

nextPutReturnWith: aBlock
	self nextPutReturn.
	aBlock value
!

nextPutSendTo: receiver selector: selector arguments: arguments
	stream nextPutAll: 'smalltalk.send('.
	receiver emitOn: self. 
	stream nextPutAll: ',"', selector asSelector, '",['.
	arguments 
		do: [ :each | each emitOn: self ]
		separatedBy: [ stream nextPutAll: ',' ].
	stream nextPutAll: '])'
!

nextPutSequenceWith: aBlock
	"stream 
		nextPutAll: 'switch(smalltalk.thisContext.pc){'; lf."
	aBlock value.
	"stream 
		nextPutAll: '};'; lf"
!

nextPutStatement: anInteger with: aBlock
	stream nextPutAll: 'case ', anInteger asString, ':'; lf.
	self nextPutStatementWith: aBlock.
	stream nextPutAll: 'smalltalk.thisContext.pc=', (anInteger + 1) asString, ';'; lf
!

nextPutStatementWith: aBlock
	aBlock value.
	stream nextPutAll: ';'; lf
!

nextPutVar: aString
	stream nextPutAll: 'var ', aString, ';'; lf
!

nextPutVars: aCollection
	stream nextPutAll: 'var '.
	aCollection 
		do: [ :each | stream nextPutAll: each ]
		separatedBy: [ stream nextPutAll: ',' ].
	stream nextPutAll: ';'; lf
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

