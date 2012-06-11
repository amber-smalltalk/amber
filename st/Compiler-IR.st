Smalltalk current createPackage: 'Compiler-IR' properties: #{}!
NodeVisitor subclass: #IRASTTranslator
	instanceVariableNames: 'builder source'
	package: 'Compiler-IR'!
!IRASTTranslator commentStamp!
I am the AST (abstract syntax tree) visitor responsible for building the intermediate representation graph.
I rely on a builder object, instance of IRBuilder.

I am myself unable to produce a valid IR as nodes are not resolved. 
See concrete subclasses.!

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
		superSend: aNode superSend;
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
		self builder assignment
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

Object subclass: #IRInliner
	instanceVariableNames: ''
	package: 'Compiler-IR'!

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
	instanceVariableNames: 'left right'
	package: 'Compiler-IR'!

!IRAssignment methodsFor: 'emiting'!

emitOn: aStream
	aStream 
		nextPutAssignment: self instructions first 
		to: self instructions last
! !

!IRAssignment methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitIRAssignment: self
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
		arguments: self arguments
! !

!IRClosure methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitIRClosure: self
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

accept: aVisitor
	aVisitor visitIRMethod: self
!

emitOn: aStream
	aStream
		nextPutMethodDeclaration: self 
		with: [
			aStream 
				nextPutFunctionWith: [ 
					self internalVariables notEmpty ifTrue: [
						aStream nextPutVars: self internalVariables ].
					super emitOn: aStream ]
			arguments: self arguments ]
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

!IRNonLocalReturnHandling methodsFor: 'emiting'!

emitOn: aStream
	aStream nextPutNonLocalReturnHandlingWith: [
		super emitOn: aStream ]
! !

!IRNonLocalReturnHandling methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitIRNonLocalReturnHandling: self
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

!IRReturn methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitIRReturn: self
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

!IRSend methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitIRSend: self
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

!IRSequence methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitIRSequence: self
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

!IRStatement methodsFor: 'emiting'!

emitOn: aStream
	aStream nextPutStatement: self pc with: [
		super emitOn: aStream ]
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

!IRTempDeclaration methodsFor: 'emiting'!

emitOn: aStream
	aStream nextPutVar: self name asVariableName
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
! !

!IRValue methodsFor: 'emiting'!

accept: aVisitor
	aVisitor visitIRValue: self
!

emitOn: aStream
	aStream nextPutAll: self value asJavascript
! !

!IRValue methodsFor: 'visiting'!

value: aString
	value := aString
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

!IRVariable methodsFor: 'emiting'!

accept: aVisitor
	aVisitor visitIRVariable: self
! !

!IRVariable methodsFor: 'visiting'!

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

visitIRAssignment: anIRAssignment
	self visitIRInstruction: anIRAssignment
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

!IRJSTranslator methodsFor: 'initialization'!

initialize
	super initialize.
	stream := JSStream new.
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

nextPutAssignment: varInstruction to: valueInstruction
	varInstruction emitOn: self.
	stream nextPutAll: '='.
	valueInstruction emitOn: self
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
	stream nextPutAll: 'return self;}'
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

nextPutReturnWith: aBlock
	stream nextPutAll: 'return '.
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
	"stream 
		nextPutAll: 'case ', anInteger asString, ':'; lf."
	aBlock value.
	stream 
		nextPutAll: ';'; lf";
		nextPutAll: 'smalltalk.thisContext.pc=', (anInteger + 1) asString, ';'; lf"
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

