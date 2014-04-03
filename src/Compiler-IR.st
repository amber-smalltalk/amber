Smalltalk createPackage: 'Compiler-IR'!
NodeVisitor subclass: #IRASTTranslator
	instanceVariableNames: 'source theClass method sequence nextAlias'
	package: 'Compiler-IR'!
!IRASTTranslator commentStamp!
I am the AST (abstract syntax tree) visitor responsible for building the intermediate representation graph.!

!IRASTTranslator methodsFor: 'accessing'!

method
	^ method
!

method: anIRMethod
	method := anIRMethod
!

nextAlias
	nextAlias ifNil: [ nextAlias := 0 ].
	nextAlias := nextAlias + 1.
	^ nextAlias asString
!

sequence
	^ sequence
!

sequence: anIRSequence
	sequence := anIRSequence
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
!

withSequence: aSequence do: aBlock
	| outerSequence |
	outerSequence := self sequence.
	self sequence: aSequence.
	aBlock value.
	self sequence: outerSequence.
	^ aSequence
! !

!IRASTTranslator methodsFor: 'visiting'!

alias: aNode
	| variable |

	aNode isImmutable ifTrue: [ ^ self visit: aNode ].

	variable := IRVariable new
		variable: (AliasVar new name: '$', self nextAlias);
		yourself.

	self sequence add: (IRAssignment new
		add: variable;
		add: (self visit: aNode);
		yourself).

	self method internalVariables add: variable.

	^ variable
!

aliasTemporally: aCollection
	"https://github.com/NicolasPetton/amber/issues/296
	
	If a node is aliased, all preceding ones are aliased as well.
	The tree is iterated twice. First we get the aliasing dependency,
	then the aliasing itself is done"

	| threshold result |
	threshold := 0.
	
	aCollection withIndexDo: [ :each :i |
		each subtreeNeedsAliasing
			ifTrue: [ threshold := i ] ].

	result := OrderedCollection new.
	aCollection withIndexDo: [ :each :i |
		result add: (i <= threshold
			ifTrue: [ self alias: each ]
			ifFalse: [ self visit: each ]) ].

	^ result
!

visitAssignmentNode: aNode
	| left right assignment |
	right := self visit: aNode right.
	left := self visit: aNode left.
	self sequence add: (IRAssignment new
		add: left;
		add: right;
		yourself).
	^ left
!

visitBlockNode: aNode
	| closure |
	closure := IRClosure new
		arguments: aNode parameters;
		requiresSmalltalkContext: aNode requiresSmalltalkContext;
		scope: aNode scope;
		yourself.
	aNode scope temps do: [ :each |
		closure add: (IRTempDeclaration new
			name: each name;
			scope: aNode scope;
			yourself) ].
	aNode nodes do: [ :each | closure add: (self visit: each) ].
	^ closure
!

visitBlockSequenceNode: aNode
	^ self
		withSequence: IRBlockSequence new
		do: [
			aNode nodes ifNotEmpty: [
				aNode nodes allButLast do: [ :each |
					self sequence add: (self visitOrAlias: each) ].
				aNode nodes last isReturnNode
					ifFalse: [ self sequence add: (IRBlockReturn new add: (self visitOrAlias: aNode nodes last); yourself) ]
					ifTrue: [ self sequence add: (self visitOrAlias: aNode nodes last) ] ]]
!

visitCascadeNode: aNode
	| alias receiver |

	aNode receiver isImmutable 
		ifTrue: [ receiver := aNode receiver ]
		ifFalse: [
			alias := self alias: aNode receiver.
			receiver := VariableNode new binding: alias variable ].
	
	aNode nodes do: [ :each |
			each receiver: receiver ].

	aNode nodes allButLast do: [ :each |
		self sequence add: (self visit: each) ].

	^ self alias: aNode nodes last
!

visitDynamicArrayNode: aNode
	| array |
	array := IRDynamicArray new.
	(self aliasTemporally: aNode nodes) do: [ :each | array add: each ].
	^ array
!

visitDynamicDictionaryNode: aNode
	| dictionary |
	dictionary := IRDynamicDictionary new.
	(self aliasTemporally: aNode nodes) do: [ :each | dictionary add: each ].
	^ dictionary
!

visitJSStatementNode: aNode
	^ IRVerbatim new
		source: aNode source crlfSanitized;
		yourself
!

visitMethodNode: aNode

	self method: (IRMethod new
		source: self source crlfSanitized;
		theClass: self theClass;
		arguments: aNode arguments;
		selector: aNode selector;
		sendIndexes: aNode sendIndexes;
		superSends: aNode superSends;
		requiresSmalltalkContext: aNode requiresSmalltalkContext;
		classReferences: aNode classReferences;
		scope: aNode scope;
		yourself).

	aNode scope temps do: [ :each |
		self method add: (IRTempDeclaration new
			name: each name;
			scope: aNode scope;
			yourself) ].

	aNode nodes do: [ :each | self method add: (self visit: each) ].

	aNode scope hasLocalReturn ifFalse: [
		(self method add: IRReturn new) add: (IRVariable new
			variable: (aNode scope pseudoVars at: 'self');
			yourself) ].

	^ self method
!

visitOrAlias: aNode
	^ aNode shouldBeAliased
		ifTrue: [ self alias: aNode ]
		ifFalse: [ self visit: aNode ]
!

visitReturnNode: aNode
	| return |
	return := aNode nonLocalReturn
		ifTrue: [ IRNonLocalReturn new ]
		ifFalse: [ IRReturn new ].
	return scope: aNode scope.
	aNode nodes do: [ :each |
		return add: (self alias: each) ].
	^ return
!

visitSendNode: aNode
	| send all receiver arguments |
	send := IRSend new.
	send
		selector: aNode selector;
		index: aNode index.
	aNode superSend ifTrue: [ send classSend: self theClass superclass ].
	
	all := self aliasTemporally: { aNode receiver }, aNode arguments.
	receiver := all first.
	arguments := all allButFirst.

	send add: receiver.
	arguments do: [ :each | send add: each ].

	^ send
!

visitSequenceNode: aNode
	^ self
		withSequence: IRSequence new
		do: [
			aNode nodes do: [ :each | | instruction |
				instruction := self visitOrAlias: each.
				instruction isVariable ifFalse: [
					self sequence add: instruction ] ]]
!

visitValueNode: aNode
	^ IRValue new
		value: aNode value;
		yourself
!

visitVariableNode: aNode
	^ IRVariable new
		variable: aNode binding;
		yourself
! !

Object subclass: #IRInstruction
	instanceVariableNames: 'parent instructions'
	package: 'Compiler-IR'!
!IRInstruction commentStamp!
I am the abstract root class of the IR (intermediate representation) instructions class hierarchy.
The IR graph is used to emit JavaScript code using a JSStream.!

!IRInstruction methodsFor: 'accessing'!

instructions
	^ instructions ifNil: [ instructions := OrderedCollection new ]
!

method
	^ self parent method
!

parent
	^ parent
!

parent: anIRInstruction
	parent := anIRInstruction
!

scope
	^ self parent ifNotNil: [ :node | 
		node scope ]
! !

!IRInstruction methodsFor: 'building'!

add: anObject
	anObject parent: self.
	^ self instructions add: anObject
!

remove
	self parent remove: self
!

remove: anIRInstruction
	self instructions remove: anIRInstruction
!

replace: anIRInstruction with: anotherIRInstruction
	anotherIRInstruction parent: self.
	self instructions
		at: (self instructions indexOf: anIRInstruction)
		put: anotherIRInstruction
!

replaceWith: anIRInstruction
	self parent replace: self with: anIRInstruction
! !

!IRInstruction methodsFor: 'testing'!

canBeAssigned
	^ true
!

isClosure
	^ false
!

isInlined
	^ false
!

isLocalReturn
	^ false
!

isMethod
	^ false
!

isReturn
	^ false
!

isSend
	^ false
!

isSequence
	^ false
!

isTempDeclaration
	^ false
!

isVariable
	^ false
!

needsBoxingAsReceiver
	^ true
! !

!IRInstruction methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitIRInstruction: self
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
	^ aVisitor visitIRAssignment: self
! !

IRInstruction subclass: #IRDynamicArray
	instanceVariableNames: ''
	package: 'Compiler-IR'!

!IRDynamicArray methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitIRDynamicArray: self
! !

IRInstruction subclass: #IRDynamicDictionary
	instanceVariableNames: ''
	package: 'Compiler-IR'!

!IRDynamicDictionary methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitIRDynamicDictionary: self
! !

IRInstruction subclass: #IRScopedInstruction
	instanceVariableNames: 'scope'
	package: 'Compiler-IR'!

!IRScopedInstruction methodsFor: 'accessing'!

scope
	^ scope
!

scope: aScope
	scope := aScope
! !

IRScopedInstruction subclass: #IRClosureInstruction
	instanceVariableNames: 'arguments requiresSmalltalkContext'
	package: 'Compiler-IR'!

!IRClosureInstruction methodsFor: 'accessing'!

arguments
	^ arguments ifNil: [ #() ]
!

arguments: aCollection
	arguments := aCollection
!

locals
	^ self arguments copy
		addAll: (self tempDeclarations collect: [ :each | each name ]);
		yourself
!

requiresSmalltalkContext
	^ requiresSmalltalkContext ifNil: [ false ]
!

requiresSmalltalkContext: anObject
	requiresSmalltalkContext := anObject
!

scope: aScope
	super scope: aScope.
	aScope instruction: self
!

tempDeclarations
	^ self instructions select: [ :each |
		each isTempDeclaration ]
! !

IRClosureInstruction subclass: #IRClosure
	instanceVariableNames: ''
	package: 'Compiler-IR'!

!IRClosure methodsFor: 'accessing'!

sequence
	^ self instructions last
! !

!IRClosure methodsFor: 'testing'!

isClosure
	^ true
! !

!IRClosure methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitIRClosure: self
! !

IRClosureInstruction subclass: #IRMethod
	instanceVariableNames: 'theClass source selector classReferences sendIndexes superSends requiresSmalltalkContext internalVariables'
	package: 'Compiler-IR'!
!IRMethod commentStamp!
I am a method instruction!

!IRMethod methodsFor: 'accessing'!

classReferences
	^ classReferences
!

classReferences: aCollection
	classReferences := aCollection
!

internalVariables
	^ internalVariables ifNil: [ internalVariables := Set new ]
!

isMethod
	^ true
!

messageSends
	^ self sendIndexes keys
!

method
	^ self
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
!

theClass
	^ theClass
!

theClass: aClass
	theClass := aClass
! !

!IRMethod methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitIRMethod: self
! !

IRScopedInstruction subclass: #IRReturn
	instanceVariableNames: ''
	package: 'Compiler-IR'!
!IRReturn commentStamp!
I am a local return instruction.!

!IRReturn methodsFor: 'accessing'!

scope
	^ scope ifNil: [ self parent scope ]
! !

!IRReturn methodsFor: 'testing'!

canBeAssigned
	^ false
!

isBlockReturn
	^ false
!

isLocalReturn
	^ true
!

isNonLocalReturn
	^ self isLocalReturn not
!

isReturn
	^ true
! !

!IRReturn methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitIRReturn: self
! !

IRReturn subclass: #IRBlockReturn
	instanceVariableNames: ''
	package: 'Compiler-IR'!
!IRBlockReturn commentStamp!
Smalltalk blocks return their last statement. I am a implicit block return instruction.!

!IRBlockReturn methodsFor: 'testing'!

isBlockReturn
	^ true
! !

!IRBlockReturn methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitIRBlockReturn: self
! !

IRReturn subclass: #IRNonLocalReturn
	instanceVariableNames: ''
	package: 'Compiler-IR'!
!IRNonLocalReturn commentStamp!
I am a non local return instruction.
Non local returns are handled using a try/catch JavaScript statement.

See `IRNonLocalReturnHandling` class.!

!IRNonLocalReturn methodsFor: 'testing'!

isLocalReturn
	^ false
! !

!IRNonLocalReturn methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitIRNonLocalReturn: self
! !

IRScopedInstruction subclass: #IRTempDeclaration
	instanceVariableNames: 'name'
	package: 'Compiler-IR'!

!IRTempDeclaration methodsFor: 'accessing'!

name
	^ name
!

name: aString
	name := aString
! !

!IRTempDeclaration methodsFor: 'testing'!

isTempDeclaration
	^ true
! !

!IRTempDeclaration methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitIRTempDeclaration: self
! !

IRInstruction subclass: #IRSend
	instanceVariableNames: 'selector classSend index'
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

index
	^ index
!

index: anInteger
	index := anInteger
!

selector
	^ selector
!

selector: aString
	selector := aString
! !

!IRSend methodsFor: 'testing'!

isSend
	^ true
! !

!IRSend methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitIRSend: self
! !

IRInstruction subclass: #IRSequence
	instanceVariableNames: ''
	package: 'Compiler-IR'!

!IRSequence methodsFor: 'testing'!

isSequence
	^ true
! !

!IRSequence methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitIRSequence: self
! !

IRSequence subclass: #IRBlockSequence
	instanceVariableNames: ''
	package: 'Compiler-IR'!

!IRBlockSequence methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitIRBlockSequence: self
! !

IRInstruction subclass: #IRValue
	instanceVariableNames: 'value'
	package: 'Compiler-IR'!
!IRValue commentStamp!
I am the simplest possible instruction. I represent a value.!

!IRValue methodsFor: 'accessing'!

value
	^ value
!

value: aString
	value := aString
! !

!IRValue methodsFor: 'testing'!

needsBoxingAsReceiver
	^ false
! !

!IRValue methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitIRValue: self
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

!IRVariable methodsFor: 'testing'!

isVariable
	^ true
!

needsBoxingAsReceiver
	^ self variable isPseudoVar not
! !

!IRVariable methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitIRVariable: self
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
	^ aVisitor visitIRVerbatim: self
! !

Object subclass: #IRVisitor
	instanceVariableNames: ''
	package: 'Compiler-IR'!

!IRVisitor methodsFor: 'visiting'!

visit: anIRInstruction
	^ anIRInstruction accept: self
!

visitIRAssignment: anIRAssignment
	^ self visitIRInstruction: anIRAssignment
!

visitIRBlockReturn: anIRBlockReturn
	^ self visitIRReturn: anIRBlockReturn
!

visitIRBlockSequence: anIRBlockSequence
	^ self visitIRSequence: anIRBlockSequence
!

visitIRClosure: anIRClosure
	^ self visitIRInstruction: anIRClosure
!

visitIRDynamicArray: anIRDynamicArray
	^ self visitIRInstruction: anIRDynamicArray
!

visitIRDynamicDictionary: anIRDynamicDictionary
	^ self visitIRInstruction: anIRDynamicDictionary
!

visitIRInlinedClosure: anIRInlinedClosure
	^ self visitIRClosure: anIRInlinedClosure
!

visitIRInlinedSequence: anIRInlinedSequence
	^ self visitIRSequence: anIRInlinedSequence
!

visitIRInstruction: anIRInstruction
	anIRInstruction instructions do: [ :each | self visit: each ].
	^ anIRInstruction
!

visitIRMethod: anIRMethod
	^ self visitIRInstruction: anIRMethod
!

visitIRNonLocalReturn: anIRNonLocalReturn
	^ self visitIRInstruction: anIRNonLocalReturn
!

visitIRNonLocalReturnHandling: anIRNonLocalReturnHandling
	^ self visitIRInstruction: anIRNonLocalReturnHandling
!

visitIRReturn: anIRReturn
	^ self visitIRInstruction: anIRReturn
!

visitIRSend: anIRSend
	^ self visitIRInstruction: anIRSend
!

visitIRSequence: anIRSequence
	^ self visitIRInstruction: anIRSequence
!

visitIRTempDeclaration: anIRTempDeclaration
	^ self visitIRInstruction: anIRTempDeclaration
!

visitIRValue: anIRValue
	^ self visitIRInstruction: anIRValue
!

visitIRVariable: anIRVariable
	^ self visitIRInstruction: anIRVariable
!

visitIRVerbatim: anIRVerbatim
	^ self visitIRInstruction: anIRVerbatim
! !

IRVisitor subclass: #IRJSTranslator
	instanceVariableNames: 'stream currentClass'
	package: 'Compiler-IR'!

!IRJSTranslator methodsFor: 'accessing'!

contents
	^ self stream contents
!

currentClass
	^ currentClass
!

currentClass: aClass
	currentClass := aClass
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

visitIRClosure: anIRClosure
	self stream
		nextPutClosureWith: [
			self stream nextPutVars: (anIRClosure tempDeclarations collect: [ :each |
					each name asVariableName ]).
			self stream
				nextPutBlockContextFor: anIRClosure
				during: [ super visitIRClosure: anIRClosure ] ]
		arguments: anIRClosure arguments
!

visitIRDynamicArray: anIRDynamicArray
	self stream nextPutAll: '['.
	anIRDynamicArray instructions
		do: [ :each | self visit: each ]
		separatedBy: [ self stream nextPutAll: ',' ].
	stream nextPutAll: ']'
!

visitIRDynamicDictionary: anIRDynamicDictionary
	self stream nextPutAll: 'globals.HashedCollection._newFromPairs_(['.
		anIRDynamicDictionary instructions
			do: [ :each | self visit: each ]
			separatedBy: [ self stream nextPutAll: ',' ].
	self stream nextPutAll: '])'
!

visitIRMethod: anIRMethod

	self stream
		nextPutMethodDeclaration: anIRMethod
		with: [ self stream
			nextPutFunctionWith: [
				self stream nextPutVars: (anIRMethod tempDeclarations collect: [ :each |
					each name asVariableName ]).
				anIRMethod classReferences do: [ :each | self stream nextPutClassRefFunction: each ].
				self stream nextPutContextFor: anIRMethod during: [
				anIRMethod internalVariables notEmpty ifTrue: [
					self stream nextPutVars: (anIRMethod internalVariables asSet collect: [ :each |
						each variable alias ]) ].
				anIRMethod scope hasNonLocalReturn
					ifTrue: [
						self stream nextPutNonLocalReturnHandlingWith: [
							super visitIRMethod: anIRMethod ] ]
					ifFalse: [ super visitIRMethod: anIRMethod ] ]]
			arguments: anIRMethod arguments ]
!

visitIRNonLocalReturn: anIRNonLocalReturn
	self stream nextPutNonLocalReturnWith: [
		super visitIRNonLocalReturn: anIRNonLocalReturn ]
!

visitIRReturn: anIRReturn
	self stream nextPutReturnWith: [
		super visitIRReturn: anIRReturn ]
!

visitIRSend: anIRSend
	| sends |
	sends := (anIRSend method sendIndexes at: anIRSend selector) size.
	
	anIRSend classSend
		ifNil: [ self visitSend: anIRSend ]
		ifNotNil: [ self visitSuperSend: anIRSend ].
		
	(sends > 1 and: [ anIRSend index < sends ])
		ifTrue: [ self stream nextPutSendIndexFor: anIRSend ]
!

visitIRSequence: anIRSequence
	self stream nextPutSequenceWith: [
		anIRSequence instructions do: [ :each |
			self stream nextPutStatementWith: (self visit: each) ] ]
!

visitIRTempDeclaration: anIRTempDeclaration
	"self stream
		nextPutAll: 'var ', anIRTempDeclaration name asVariableName, ';';
		lf"
!

visitIRValue: anIRValue
	self stream nextPutAll: anIRValue value asJavascript
!

visitIRVariable: anIRVariable
	anIRVariable variable name = 'thisContext'
		ifTrue: [ self stream nextPutAll: 'smalltalk.getThisContext()' ]
		ifFalse: [ self stream nextPutAll: anIRVariable variable alias ]
!

visitIRVerbatim: anIRVerbatim
	self stream nextPutStatementWith: [
		self stream nextPutAll: anIRVerbatim source ]
!

visitReceiver: anIRInstruction
	anIRInstruction needsBoxingAsReceiver ifFalse: [ ^ self visit: anIRInstruction ].
	
	self stream nextPutAll: '_st('.
	self visit: anIRInstruction.
	self stream nextPutAll: ')'
!

visitSend: anIRSend
	self visitReceiver: anIRSend instructions first.
	self stream nextPutAll: '.', anIRSend selector asSelector, '('.
	anIRSend instructions allButFirst
		do: [ :each | self visit: each ]
		separatedBy: [ self stream nextPutAll: ',' ].
	self stream nextPutAll: ')'
!

visitSuperSend: anIRSend
	self stream
		nextPutAll: '(', anIRSend scope alias, '.supercall = true, ';
		nextPutAll: self currentClass asJavascript;
		nextPutAll: '.superclass.fn.prototype.';
		nextPutAll: anIRSend selector asSelector, '.apply(';
		nextPutAll: '_st('.
	self visit: anIRSend instructions first.
	self stream nextPutAll: '), ['.
	anIRSend instructions allButFirst
		do: [ :each | self visit: each ]
		separatedBy: [ self stream nextPutAll: ',' ].
	self stream 
		nextPutAll: ']));'; lf;
		nextPutAll: anIRSend scope alias, '.supercall = false'
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

nextPutBlockContextFor: anIRClosure during: aBlock
	anIRClosure requiresSmalltalkContext ifFalse: [ ^ aBlock value ].
	self
		nextPutAll: 'return smalltalk.withContext(function(', anIRClosure scope alias, ') {'; lf.
	
	aBlock value.
	
	self
		nextPutAll: '}, function(', anIRClosure scope alias, ') {';
		nextPutAll: anIRClosure scope alias, '.fillBlock({'.
	
	anIRClosure locals
		do: [ :each |
			self
				nextPutAll: each asVariableName;
				nextPutAll: ':';
				nextPutAll: each asVariableName ]
		separatedBy: [ self nextPutAll: ',' ].
	
	self
		nextPutAll: '},';
		nextPutAll: anIRClosure scope outerScope alias, ',', anIRClosure scope blockIndex asString, ')})'
!

nextPutClassRefFunction: aString
	"Creates an inner function $aString into method and called as `$Foo()`whenever the global is accessed.
	This ensures that undefined global access will answer `nil`"
	
	stream
		nextPutAll: 'function $';
		nextPutAll: aString;
		nextPutAll: '(){return globals.';
		nextPutAll: aString;
		nextPutAll: '||(typeof ';
		nextPutAll: aString;
		nextPutAll: '=="undefined"?nil:';
		nextPutAll: aString;
		nextPutAll: ')}';
		lf
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

nextPutContextFor: aMethod during: aBlock
	aMethod requiresSmalltalkContext ifFalse: [ ^ aBlock value ].
	
	self
		nextPutAll: 'return smalltalk.withContext(function(', aMethod scope alias, ') { '; lf.
	aBlock value.
	
	self
		nextPutAll: '}, function(', aMethod scope alias, ') {', aMethod scope alias;
		nextPutAll: '.fill(self,', aMethod selector asJavascript, ',{'.

	aMethod locals
		do: [ :each |
			self
				nextPutAll: each asVariableName;
				nextPutAll: ':';
				nextPutAll: each asVariableName ]
		separatedBy: [ self nextPutAll: ',' ].
	
	self
		nextPutAll: '},';
		nextPutAll: aMethod theClass asJavascript;
		nextPutAll: ')})'
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

nextPutIf: aBlock with: anotherBlock
	stream nextPutAll: 'if('.
	aBlock value.
	stream nextPutAll: '){'; lf.
	anotherBlock value.
	stream nextPutAll: '}'
!

nextPutIfElse: aBlock with: ifBlock with: elseBlock
	stream nextPutAll: 'if('.
	aBlock value.
	stream nextPutAll: '){'; lf.
	ifBlock value.
	stream nextPutAll: '} else {'; lf.
	elseBlock value.
	stream nextPutAll: '}'
!

nextPutMethodDeclaration: aMethod with: aBlock
	stream
		nextPutAll: 'smalltalk.method({'; lf;
		nextPutAll: 'selector: ', aMethod selector asJavascript, ','; lf;
		nextPutAll: 'source: ', aMethod source asJavascript, ',';lf.
	aBlock value.
	stream
		nextPutAll: ',', String lf, 'messageSends: ';
		nextPutAll: aMethod messageSends asArray asJavascript, ','; lf;
		nextPutAll: 'args: ', (aMethod arguments collect: [ :each | each value ]) asArray asJavascript, ','; lf;
		nextPutAll: 'referencedClasses: ['.
	aMethod classReferences
		do: [ :each | stream nextPutAll: each asJavascript ]
		separatedBy: [ stream nextPutAll: ',' ].
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
	stream nextPutAll: 'throw $early=['.
	aBlock value.
	stream nextPutAll: ']'
!

nextPutReturn
	stream nextPutAll: 'return '
!

nextPutReturnWith: aBlock
	self nextPutReturn.
	aBlock value
!

nextPutSendIndexFor: anIRSend
	self 
		nextPutAll: ';'; lf;
		nextPutAll: anIRSend scope alias;
		nextPutAll: '.sendIdx[';
		nextPutAll: anIRSend selector asJavascript;
		nextPutAll: ']=';
		nextPutAll: anIRSend index asString
!

nextPutSequenceWith: aBlock
	"stream
		nextPutAll: 'switch(smalltalk.thisContext.pc){'; lf."
	aBlock value.
	"stream
		nextPutAll: '};'; lf"
!

nextPutStatementWith: aBlock
	aBlock value.
	stream nextPutAll: ';'; lf
!

nextPutVars: aCollection
	aCollection ifEmpty: [ ^ self ].
	
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

