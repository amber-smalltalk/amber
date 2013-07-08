Smalltalk current createPackage: 'Compiler-Inlining'!
IRAssignment subclass: #IRInlinedAssignment
	instanceVariableNames: ''
	package: 'Compiler-Inlining'!
!IRInlinedAssignment commentStamp!
I represent an inlined assignment instruction.!

!IRInlinedAssignment methodsFor: 'testing'!

isInlined
	^ true
! !

!IRInlinedAssignment methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitIRInlinedAssignment: self
! !

IRClosure subclass: #IRInlinedClosure
	instanceVariableNames: ''
	package: 'Compiler-Inlining'!
!IRInlinedClosure commentStamp!
I represent an inlined closure instruction.!

!IRInlinedClosure methodsFor: 'testing'!

isInlined
	^ true
! !

!IRInlinedClosure methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitIRInlinedClosure: self
! !

IRReturn subclass: #IRInlinedReturn
	instanceVariableNames: ''
	package: 'Compiler-Inlining'!
!IRInlinedReturn commentStamp!
I represent an inlined local return instruction.!

!IRInlinedReturn methodsFor: 'testing'!

isInlined
	^ true
! !

!IRInlinedReturn methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitIRInlinedReturn: self
! !

IRSend subclass: #IRInlinedSend
	instanceVariableNames: ''
	package: 'Compiler-Inlining'!
!IRInlinedSend commentStamp!
I am the abstract super class of inlined message send instructions.!

!IRInlinedSend methodsFor: 'testing'!

isInlined
	^ true
! !

!IRInlinedSend methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitInlinedSend: self
! !

IRInlinedSend subclass: #IRInlinedIfFalse
	instanceVariableNames: ''
	package: 'Compiler-Inlining'!
!IRInlinedIfFalse commentStamp!
I represent an inlined `#ifFalse:` message send instruction.!

!IRInlinedIfFalse methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitIRInlinedIfFalse: self
! !

IRInlinedSend subclass: #IRInlinedIfNilIfNotNil
	instanceVariableNames: ''
	package: 'Compiler-Inlining'!
!IRInlinedIfNilIfNotNil commentStamp!
I represent an inlined `#ifNil:ifNotNil:` message send instruction.!

!IRInlinedIfNilIfNotNil methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitIRInlinedIfNilIfNotNil: self
! !

IRInlinedSend subclass: #IRInlinedIfTrue
	instanceVariableNames: ''
	package: 'Compiler-Inlining'!
!IRInlinedIfTrue commentStamp!
I represent an inlined `#ifTrue:` message send instruction.!

!IRInlinedIfTrue methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitIRInlinedIfTrue: self
! !

IRInlinedSend subclass: #IRInlinedIfTrueIfFalse
	instanceVariableNames: ''
	package: 'Compiler-Inlining'!
!IRInlinedIfTrueIfFalse commentStamp!
I represent an inlined `#ifTrue:ifFalse:` message send instruction.!

!IRInlinedIfTrueIfFalse methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitIRInlinedIfTrueIfFalse: self
! !

IRBlockSequence subclass: #IRInlinedSequence
	instanceVariableNames: ''
	package: 'Compiler-Inlining'!
!IRInlinedSequence commentStamp!
I represent a (block) sequence inside an inlined closure instruction (instance of `IRInlinedClosure`).!

!IRInlinedSequence methodsFor: 'testing'!

isInlined
	^ true
! !

!IRInlinedSequence methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitIRInlinedSequence: self
! !

IRVisitor subclass: #IRInliner
	instanceVariableNames: ''
	package: 'Compiler-Inlining'!
!IRInliner commentStamp!
I visit an IR tree, inlining message sends and block closures.

Message selectors that can be inlined are answered by `IRSendInliner >> #inlinedSelectors`!

!IRInliner methodsFor: 'factory'!

assignmentInliner
	^ IRAssignmentInliner new
		translator: self;
		yourself
!

returnInliner
	^ IRReturnInliner new
		translator: self;
		yourself
!

sendInliner
	^ IRSendInliner new
		translator: self;
		yourself
! !

!IRInliner methodsFor: 'testing'!

shouldInlineAssignment: anIRAssignment
	^ anIRAssignment isInlined not and: [
		anIRAssignment instructions last isSend and: [
			self shouldInlineSend: (anIRAssignment instructions last) ]]
!

shouldInlineReturn: anIRReturn
	^ anIRReturn isInlined not and: [
		anIRReturn instructions first isSend and: [
			self shouldInlineSend: (anIRReturn instructions first) ]]
!

shouldInlineSend: anIRSend
	^ anIRSend isInlined not and: [
		IRSendInliner shouldInline: anIRSend ]
! !

!IRInliner methodsFor: 'visiting'!

transformNonLocalReturn: anIRNonLocalReturn
	"Replace a non local return into a local return"

	| localReturn |
	anIRNonLocalReturn scope canInlineNonLocalReturns ifTrue: [
		anIRNonLocalReturn scope methodScope removeNonLocalReturn: anIRNonLocalReturn scope.
		localReturn := IRReturn new
			scope: anIRNonLocalReturn scope;
			yourself.
		anIRNonLocalReturn instructions do: [ :each |
			localReturn add: each ].
		anIRNonLocalReturn replaceWith: localReturn.
		^ localReturn ].
	^ super visitIRNonLocalReturn: anIRNonLocalReturn
!

visitIRAssignment: anIRAssignment
	^ (self shouldInlineAssignment: anIRAssignment)
		ifTrue: [ self assignmentInliner inlineAssignment: anIRAssignment ]
		ifFalse: [ super visitIRAssignment: anIRAssignment ]
!

visitIRNonLocalReturn: anIRNonLocalReturn
	^ self transformNonLocalReturn: anIRNonLocalReturn
!

visitIRReturn: anIRReturn
	^ (self shouldInlineReturn: anIRReturn)
		ifTrue: [ self returnInliner inlineReturn: anIRReturn ]
		ifFalse: [ super visitIRReturn: anIRReturn ]
!

visitIRSend: anIRSend
	^ (self shouldInlineSend: anIRSend)
		ifTrue: [ self sendInliner inlineSend: anIRSend ]
		ifFalse: [ super visitIRSend: anIRSend ]
! !

IRJSTranslator subclass: #IRInliningJSTranslator
	instanceVariableNames: ''
	package: 'Compiler-Inlining'!
!IRInliningJSTranslator commentStamp!
I am a specialized JavaScript translator able to write inlined IR instructions to JavaScript stream (`JSStream` instance).!

!IRInliningJSTranslator methodsFor: 'visiting'!

visitIRInlinedAssignment: anIRInlinedAssignment
	self visit: anIRInlinedAssignment instructions last
!

visitIRInlinedClosure: anIRInlinedClosure
	self stream nextPutVars: (anIRInlinedClosure tempDeclarations collect: [ :each |
		each name asVariableName ]).
	anIRInlinedClosure instructions do: [ :each |
		self visit: each ]
!

visitIRInlinedIfFalse: anIRInlinedIfFalse
	self stream nextPutIf: [
		self stream nextPutAll: '!! smalltalk.assert('.
		self visit: anIRInlinedIfFalse instructions first.
		self stream nextPutAll: ')' ]
		with: [ self visit: anIRInlinedIfFalse instructions last ]
!

visitIRInlinedIfNil: anIRInlinedIfNil
	self stream nextPutIf: [
		self stream nextPutAll: '($receiver = '.
		self visit: anIRInlinedIfNil instructions first.
		self stream nextPutAll: ') == nil || $receiver == undefined' ]
		with: [ self visit: anIRInlinedIfNil instructions last ]
!

visitIRInlinedIfNilIfNotNil: anIRInlinedIfNilIfNotNil
	self stream
		nextPutIfElse: [
			self stream nextPutAll: '($receiver = '.
			self visit: anIRInlinedIfNilIfNotNil instructions first.
			self stream nextPutAll: ') == nil || $receiver == undefined' ]
		with: [ self visit: anIRInlinedIfNilIfNotNil instructions second ]
		with: [ self visit: anIRInlinedIfNilIfNotNil instructions third ]
!

visitIRInlinedIfTrue: anIRInlinedIfTrue
	self stream nextPutIf: [
		self stream nextPutAll: 'smalltalk.assert('.
		self visit: anIRInlinedIfTrue instructions first.
		self stream nextPutAll: ')' ]
		with: [ self visit: anIRInlinedIfTrue instructions last ]
!

visitIRInlinedIfTrueIfFalse: anIRInlinedIfTrueIfFalse
	self stream
		nextPutIfElse: [
			self stream nextPutAll: 'smalltalk.assert('.
			self visit: anIRInlinedIfTrueIfFalse instructions first.
			self stream nextPutAll: ')' ]
		with: [ self visit: anIRInlinedIfTrueIfFalse instructions second ]
		with: [ self visit: anIRInlinedIfTrueIfFalse instructions third ]
!

visitIRInlinedNonLocalReturn: anIRInlinedReturn
	self stream nextPutStatementWith: [
		self visit: anIRInlinedReturn instructions last ].
	self stream nextPutNonLocalReturnWith: [ ]
!

visitIRInlinedReturn: anIRInlinedReturn
	self visit: anIRInlinedReturn instructions last
!

visitIRInlinedSequence: anIRInlinedSequence
	anIRInlinedSequence instructions do: [ :each |
		self stream nextPutStatementWith: [ self visit: each ]]
! !

Object subclass: #IRSendInliner
	instanceVariableNames: 'send translator'
	package: 'Compiler-Inlining'!
!IRSendInliner commentStamp!
I inline some message sends and block closure arguments. I heavily rely on #perform: to dispatch inlining methods.!

!IRSendInliner methodsFor: 'accessing'!

send
	^ send
!

send: anIRSend
	send := anIRSend
!

translator
	^ translator
!

translator: anASTTranslator
	translator := anASTTranslator
! !

!IRSendInliner methodsFor: 'error handling'!

inliningError: aString
	InliningError signal: aString
! !

!IRSendInliner methodsFor: 'factory'!

inlinedClosure
	^ IRInlinedClosure new
!

inlinedSequence
	^ IRInlinedSequence new
! !

!IRSendInliner methodsFor: 'inlining'!

ifFalse: anIRInstruction
	^ self inlinedSend: IRInlinedIfFalse new with: anIRInstruction
!

ifFalse: anIRInstruction ifTrue: anotherIRInstruction
	^ self perform: #ifTrue:ifFalse: withArguments: { anotherIRInstruction. anIRInstruction }
!

ifNil: anIRInstruction
	^ self
		inlinedSend: IRInlinedIfNilIfNotNil new
		with: anIRInstruction
		with: (IRClosure new
			scope: anIRInstruction scope copy;
			add: (IRBlockSequence new
				add: self send instructions first;
				yourself);
			yourself)
!

ifNil: anIRInstruction ifNotNil: anotherIRInstruction
	^ self inlinedSend: IRInlinedIfNilIfNotNil new with: anIRInstruction with: anotherIRInstruction
!

ifNotNil: anIRInstruction
	^ self
		inlinedSend: IRInlinedIfNilIfNotNil new
		with: (IRClosure new
			scope: anIRInstruction scope copy;
			add: (IRBlockSequence new
				add: self send instructions first;
				yourself);
			yourself)
		with: anIRInstruction
!

ifNotNil: anIRInstruction ifNil: anotherIRInstruction
	^ self inlinedSend: IRInlinedIfNilIfNotNil new with: anotherIRInstruction with: anIRInstruction
!

ifTrue: anIRInstruction
	^ self inlinedSend: IRInlinedIfTrue new with: anIRInstruction
!

ifTrue: anIRInstruction ifFalse: anotherIRInstruction
	^ self inlinedSend: IRInlinedIfTrueIfFalse new with: anIRInstruction with: anotherIRInstruction
!

inlineClosure: anIRClosure
	| inlinedClosure sequence statements |

	inlinedClosure := self inlinedClosure.
	inlinedClosure scope: anIRClosure scope.

	"Add the possible temp declarations"
	anIRClosure tempDeclarations do: [ :each |
			inlinedClosure add: each ].

	"Add a block sequence"
	sequence := self inlinedSequence.

	"Map the closure arguments to the receiver of the message send"
	anIRClosure arguments do: [ :each |
		inlinedClosure add: (IRTempDeclaration new name: each; yourself).
		sequence add: (IRAssignment new
			add: (IRVariable new variable: (AliasVar new scope: inlinedClosure scope; name: each; yourself));
			add: (IRVariable new variable: (AliasVar new scope: inlinedClosure scope; name: '$receiver'; yourself));
			yourself) ].
			
	"To ensure the correct order of the closure instructions: first the temps then the sequence"
	inlinedClosure add: sequence.

	"Get all the statements"
	statements := anIRClosure instructions last instructions.
	
	statements ifNotEmpty: [
		statements allButLast do: [ :each | sequence add: each ].

		"Inlined closures don't have implicit local returns"
		(statements last isReturn and: [ statements last isBlockReturn ])
			ifTrue: [ sequence add: statements last instructions first ]
			ifFalse: [ sequence add: statements last ] ].

	^ inlinedClosure
!

inlineSend: anIRSend
	self send: anIRSend.
	^ self
		perform: self send selector
		withArguments: self send instructions allButFirst
!

inlinedSend: inlinedSend with: anIRInstruction
	| inlinedClosure |

	anIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].
	anIRInstruction arguments size = 0 ifFalse: [ self inliningError: 'Inlined block should have zero argument' ].

	inlinedClosure := self translator visit: (self inlineClosure: anIRInstruction).

	inlinedSend
		add: self send instructions first;
		add: inlinedClosure.

	self send replaceWith: inlinedSend.

	^ inlinedSend
!

inlinedSend: inlinedSend with: anIRInstruction with: anotherIRInstruction
	| inlinedClosure1 inlinedClosure2 |

	anIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].
	anotherIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].

	inlinedClosure1 := self translator visit: (self inlineClosure: anIRInstruction).
	inlinedClosure2 := self translator visit: (self inlineClosure: anotherIRInstruction).

	inlinedSend
		add: self send instructions first;
		add: inlinedClosure1;
		add: inlinedClosure2.

	self send replaceWith: inlinedSend.
	^ inlinedSend
! !

!IRSendInliner class methodsFor: 'accessing'!

inlinedSelectors
	^ #('ifTrue:' 'ifFalse:' 'ifTrue:ifFalse:' 'ifFalse:ifTrue:' 'ifNil:' 'ifNotNil:' 'ifNil:ifNotNil:' 'ifNotNil:ifNil:')
!

shouldInline: anIRInstruction
	(self inlinedSelectors includes: anIRInstruction selector) ifFalse: [ ^ false ].
	anIRInstruction instructions allButFirst do: [ :each |
		each isClosure ifFalse: [ ^ false ]].
	^ true
! !

IRSendInliner subclass: #IRAssignmentInliner
	instanceVariableNames: 'assignment'
	package: 'Compiler-Inlining'!
!IRAssignmentInliner commentStamp!
I inline message sends together with assignments by moving them around into the inline closure instructions.

##Example

	foo
		| a |
		a := true ifTrue: [ 1 ]

Will produce:

	if(smalltalk.assert(true) {
		a = 1;
	};!

!IRAssignmentInliner methodsFor: 'accessing'!

assignment
	^ assignment
!

assignment: aNode
	assignment := aNode
! !

!IRAssignmentInliner methodsFor: 'inlining'!

inlineAssignment: anIRAssignment
	| inlinedAssignment |
	self assignment: anIRAssignment.
	inlinedAssignment := IRInlinedAssignment new.
	anIRAssignment instructions do: [ :each |
		inlinedAssignment add: each ].
	anIRAssignment replaceWith: inlinedAssignment.
	self inlineSend: inlinedAssignment instructions last.
	^ inlinedAssignment
!

inlineClosure: anIRClosure
	| inlinedClosure statements |

	inlinedClosure := super inlineClosure: anIRClosure.
	statements := inlinedClosure instructions last instructions.
	
	statements ifNotEmpty: [
		statements last canBeAssigned ifTrue: [
			statements last replaceWith: (IRAssignment new
				add: self assignment instructions first;
				add: statements last copy;
				yourself) ] ].

	^ inlinedClosure
! !

IRSendInliner subclass: #IRReturnInliner
	instanceVariableNames: ''
	package: 'Compiler-Inlining'!
!IRReturnInliner commentStamp!
I inline message sends with inlined closure together with a return instruction.!

!IRReturnInliner methodsFor: 'factory'!

inlinedReturn
	^ IRInlinedReturn new
! !

!IRReturnInliner methodsFor: 'inlining'!

inlineClosure: anIRClosure
	| closure statements |

	closure := super inlineClosure: anIRClosure.
	statements := closure instructions last instructions.
	
	statements ifNotEmpty: [
		statements last isReturn
			ifFalse: [ statements last replaceWith: (IRReturn new
				add: statements last copy;
				yourself)] ].

	^ closure
!

inlineReturn: anIRReturn
	| return |
	return := self inlinedReturn.
	anIRReturn instructions do: [ :each |
		return add: each ].
	anIRReturn replaceWith: return.
	self inlineSend: return instructions last.
	^ return
! !

CodeGenerator subclass: #InliningCodeGenerator
	instanceVariableNames: ''
	package: 'Compiler-Inlining'!
!InliningCodeGenerator commentStamp!
I am a specialized code generator that uses inlining to produce more optimized JavaScript output!

!InliningCodeGenerator methodsFor: 'compiling'!

compileNode: aNode
	| ir stream |

	self semanticAnalyzer visit: aNode.
	ir := self translator visit: aNode.
	self inliner visit: ir.

	^ self irTranslator
		currentClass: self currentClass;
		visit: ir;
		contents
!

inliner
	^ IRInliner new
!

irTranslator
	^ IRInliningJSTranslator new
! !

