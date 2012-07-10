Smalltalk current createPackage: 'Compiler-Inlining' properties: #{}!
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

IRInlinedReturn subclass: #IRInlinedNonLocalReturn
	instanceVariableNames: ''
	package: 'Compiler-Inlining'!
!IRInlinedNonLocalReturn commentStamp!
I represent an inlined non local return instruction.!

!IRInlinedNonLocalReturn methodsFor: 'testing'!

isInlined
	^ true
! !

!IRInlinedNonLocalReturn methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitIRInlinedNonLocalReturn: self
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

!IRInlinedIfFalse methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitIRInlinedIfFalse: self
! !

IRInlinedSend subclass: #IRInlinedIfTrue
	instanceVariableNames: ''
	package: 'Compiler-Inlining'!

!IRInlinedIfTrue methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitIRInlinedIfTrue: self
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

IRInlinedSequence subclass: #IRAssigningInlinedSequence
	instanceVariableNames: 'assignTo'
	package: 'Compiler-Inlining'!

!IRAssigningInlinedSequence methodsFor: 'accessing'!

accept: aVisitor
	^ aVisitor visitIRAssigningInlinedSequence: self
!

assignTo
	^ assignTo
!

assignTo: anIRInstruction
	assignTo := anIRInstruction
! !

IRInlinedSequence subclass: #IRReturningInlinedSequence
	instanceVariableNames: ''
	package: 'Compiler-Inlining'!

!IRReturningInlinedSequence methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitIRReturningInlinedSequence: self
! !

IRReturningInlinedSequence subclass: #IRNonLocalReturningInlinedSequence
	instanceVariableNames: ''
	package: 'Compiler-Inlining'!

!IRNonLocalReturningInlinedSequence methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitIRNonLocalReturningInlinedSequence: self
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

nonLocalReturnInliner
	^ IRNonLocalReturnInliner new 
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
	^ (self shouldInlineReturn: anIRNonLocalReturn) 
		ifTrue: [ self nonLocalReturnInliner inlineReturn: anIRNonLocalReturn ]
		ifFalse: [ self transformNonLocalReturn: anIRNonLocalReturn ]
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

visitIRAssigningInlinedSequence: anIRInlinedSequence

	anIRInlinedSequence instructions allButLast do: [ :each | 
		self stream nextPutStatementWith: [ self visit: each ]].

	self stream nextPutStatementWith: [
		anIRInlinedSequence instructions last canBeAssigned 
			ifTrue: [
				self stream 
					nextPutAll: anIRInlinedSequence assignTo variable alias;
                                	nextPutAssignment.
				self visit: anIRInlinedSequence instructions last ]
			ifFalse: [ self visit: anIRInlinedSequence instructions last ]]
!

visitIRInlinedAssignment: anIRInlinedAssignment
	self visit: anIRInlinedAssignment instructions last
!

visitIRInlinedClosure: anIRInlinedClosure
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

visitIRInlinedIfTrue: anIRInlinedIfTrue
	self stream nextPutIf: [ 
		self stream nextPutAll: 'smalltalk.assert('. 
		self visit: anIRInlinedIfTrue instructions first.
		self stream nextPutAll: ')' ]
		with: [ self visit: anIRInlinedIfTrue instructions last ]
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
!

visitIRNonLocalReturningInlinedSequence: anIRInlinedSequence

	anIRInlinedSequence instructions allButLast do: [ :each | 
		self stream nextPutStatementWith: [ self visit: each ]].

	self stream nextPutStatementWith: [
		anIRInlinedSequence instructions last canBeAssigned 
			ifTrue: [
				self stream nextPutNonLocalReturnWith: [
					self visit: anIRInlinedSequence instructions last ]]
			ifFalse: [ self visit: anIRInlinedSequence instructions last ]]
!

visitIRReturningInlinedSequence: anIRInlinedSequence

	anIRInlinedSequence instructions allButLast do: [ :each | 
		self stream nextPutStatementWith: [ self visit: each ]].

	self stream nextPutStatementWith: [
		anIRInlinedSequence instructions last canBeAssigned 
			ifTrue: [
				self stream nextPutReturn.
				self visit: anIRInlinedSequence instructions last ]
			ifFalse: [ self visit: anIRInlinedSequence instructions last ]]
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
	| inlinedSend inlinedClosure |

	anIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].
	anIRInstruction arguments size = 0 ifFalse: [ self inliningError: 'Inlined block should have zero argument' ].

	inlinedClosure := self inlineClosure: anIRInstruction.

	inlinedSend := IRInlinedIfFalse new.
	inlinedSend
		add: self send instructions first;
		add: inlinedClosure.

	self send replaceWith: inlinedSend.
	^ inlinedSend
!

ifTrue: anIRInstruction
	| inlinedSend inlinedClosure |

	anIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].
	anIRInstruction arguments size = 0 ifFalse: [ self inliningError: 'Inlined block should have zero argument' ].

	inlinedClosure := self inlineClosure: anIRInstruction.

	inlinedSend := IRInlinedIfTrue new.
	inlinedSend
		add: self send instructions first;
		add: inlinedClosure.

	self send replaceWith: inlinedSend.
	^ inlinedSend
!

inlineClosure: anIRClosure
	| inlinedClosure sequence statements |
	inlinedClosure := self inlinedClosure.
	inlinedClosure scope: anIRClosure scope.

	"Add the possible temp declarations"
	anIRClosure instructions do: [ :each | 
		each isSequence ifFalse: [
			inlinedClosure add: each ]].

	"Add a block sequence"
	sequence := self inlinedSequence.
	inlinedClosure add: sequence.

	"Get all the statements"
	statements := anIRClosure instructions last instructions.
	
	statements ifNotEmpty: [
		statements allButLast do: [ :each | sequence add: (self translator visit: each) ].
		"Inlined closures don't have implicit local returns"
		statements last isLocalReturn 
			ifTrue: [ sequence add: (self translator visit: statements last instructions first) ]
			ifFalse: [ sequence add: (self translator visit: statements last) ]].

	^ inlinedClosure
!

inlineSend: anIRSend
	self send: anIRSend.
	^ self perform: self send selector withArguments: self send instructions allButFirst
! !

!IRSendInliner class methodsFor: 'accessing'!

inlinedSelectors
	^ #('ifTrue:' 'ifFalse:')
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

!IRAssignmentInliner methodsFor: 'factory'!

inlinedSequence
	^ IRAssigningInlinedSequence new
		assignTo: self assignment instructions first;
		yourself
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
! !

IRSendInliner subclass: #IRReturnInliner
	instanceVariableNames: ''
	package: 'Compiler-Inlining'!
!IRReturnInliner commentStamp!
I inline message sends with inlined closure together with a return instruction.!

!IRReturnInliner methodsFor: 'factory'!

inlinedReturn
	^ IRInlinedReturn new
!

inlinedSequence
	^ IRReturningInlinedSequence new
! !

!IRReturnInliner methodsFor: 'inlining'!

inlineReturn: anIRReturn
	| return |
	return := self inlinedReturn.
	anIRReturn instructions do: [ :each |
		return add: each ].
	anIRReturn replaceWith: return.
	self inlineSend: return instructions last.
	^ return
! !

IRReturnInliner subclass: #IRNonLocalReturnInliner
	instanceVariableNames: ''
	package: 'Compiler-Inlining'!

!IRNonLocalReturnInliner methodsFor: 'factory'!

inlinedReturn
	^ IRInlinedNonLocalReturn new
!

inlinedSequence
	^ IRNonLocalReturningInlinedSequence new
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
		visit: ir;
		contents
!

inliner
	^ IRInliner new
!

irTranslator
	^ IRInliningJSTranslator new
! !

