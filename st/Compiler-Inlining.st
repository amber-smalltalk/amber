Smalltalk current createPackage: 'Compiler-Inlining' properties: #{}!
IRAssignment subclass: #IRInlinedAssignment
	instanceVariableNames: ''
	package: 'Compiler-Inlining'!

!IRInlinedAssignment methodsFor: 'testing'!

isInlined
	^ true
! !

!IRInlinedAssignment methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitIRInlinedAssignment: self
! !

IRClosure subclass: #IRInlinedClosure
	instanceVariableNames: 'assignTo'
	package: 'Compiler-Inlining'!

!IRInlinedClosure methodsFor: 'accessing'!

assignTo
	^ assignTo
!

assignTo: aScopeVar
	assignTo := aScopeVar
! !

!IRInlinedClosure methodsFor: 'testing'!

isInlined
	^ true
! !

!IRInlinedClosure methodsFor: 'visiting'!

accept: aVisitor
	aVisitor visitIRInlinedClosure: self
! !

IRReturn subclass: #IRInlinedNonLocalReturn
	instanceVariableNames: ''
	package: 'Compiler-Inlining'!

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

IRVisitor subclass: #IRInliner
	instanceVariableNames: ''
	package: 'Compiler-Inlining'!

!IRInliner methodsFor: 'testing'!

shouldInlineAssignment: anIRAssignment
	^ anIRAssignment isInlined not and: [ 
		anIRAssignment instructions last isSend and: [	
			self shouldInlineSend: (anIRAssignment instructions last) ]]
!

shouldInlineSend: anIRSend
	^ anIRSend isInlined not and: [
		IRSendInliner inlinedSelectors includes: anIRSend selector ]
! !

!IRInliner methodsFor: 'visiting'!

assignmentInliner
	^ IRAssignmentInliner new 
		translator: self;
		yourself
!

sendInliner
	^ IRSendInliner new 
		translator: self;
		yourself
!

visitIRAssignment: anIRAssignment
	(self shouldInlineAssignment: anIRAssignment) 
		ifTrue: [ self assignmentInliner inlineAssignment: anIRAssignment ]
		ifFalse: [ super visitIRAssignment: anIRAssignment ]
!

visitIRNonLocalReturn: anIRNonLocalReturn
	| localReturn |
	anIRNonLocalReturn scope canInlineNonLocalReturns ifTrue: [
		anIRNonLocalReturn scope methodScope removeNonLocalReturn: anIRNonLocalReturn scope.
		localReturn := IRInlinedNonLocalReturn new
			scope: anIRNonLocalReturn scope;
			yourself.
		anIRNonLocalReturn instructions do: [ :each |
			localReturn add: each ].
		anIRNonLocalReturn replaceWith: localReturn ].
	super visitIRNonLocalReturn: anIRNonLocalReturn
!

visitIRSend: anIRSend
	(self shouldInlineSend: anIRSend)
		ifTrue: [ self sendInliner inlineSend: anIRSend ]
		ifFalse: [ super visitIRSend: anIRSend ]
! !

IRJSTranslator subclass: #IRInliningJSTranslator
	instanceVariableNames: ''
	package: 'Compiler-Inlining'!

!IRInliningJSTranslator methodsFor: 'visiting'!

visitIRInlinedAssignment: anIRInlinedAssignment
	self visit: anIRInlinedAssignment instructions last
!

visitIRInlinedClosure: anIRInlinedClosure
	anIRInlinedClosure instructions allButLast do: [ :each | self visit: each ].
	(anIRInlinedClosure assignTo notNil and: [
		anIRInlinedClosure instructions last canBeAssigned ]) ifTrue: [
			self stream nextPutAll: anIRInlinedClosure assignTo variable alias.
			self stream nextPutAssignment ].
	self visit: anIRInlinedClosure instructions last
!

visitIRInlinedIfFalse: anIRInlinedIfFalse
	self stream 
		nextPutIf: [ 
			self stream nextPutAll: '!!'.
			self visit: anIRInlinedIfFalse instructions first ]
		with: [ self visit: anIRInlinedIfFalse instructions last ]
!

visitIRInlinedIfTrue: anIRInlinedIfTrue
	self stream 
		nextPutIf: [ self visit: anIRInlinedIfTrue instructions first ]
		with: [ self visit: anIRInlinedIfTrue instructions last ]
! !

Object subclass: #IRSendInliner
	instanceVariableNames: 'send translator'
	package: 'Compiler-Inlining'!
!IRSendInliner commentStamp!
I inline some message sends and block closure arguments. I heavily rely on #perform: to dispatch inlining methods.!

!IRSendInliner methodsFor: 'accessing'!

inlinedClosure
	^ IRInlinedClosure new
!

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
	| inlinedClosure |
	inlinedClosure := self inlinedClosure.
	inlinedClosure scope: anIRClosure scope.
	anIRClosure instructions first instructions do: [ :each |
		inlinedClosure add: (self translator visit: each) ].
	^ inlinedClosure
!

inlineSend: anIRSend
	self send: anIRSend.
	self perform: self send selector withArguments: self send instructions allButFirst
! !

!IRSendInliner class methodsFor: 'accessing'!

inlinedSelectors
	^ #('ifTrue:' 'ifFalse:')
! !

IRSendInliner subclass: #IRAssignmentInliner
	instanceVariableNames: 'assignment'
	package: 'Compiler-Inlining'!

!IRAssignmentInliner methodsFor: 'accessing'!

assignment
	^ assignment
!

assignment: aNode
	assignment := aNode
!

inlinedClosure
	^ super inlinedClosure
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

CodeGenerator subclass: #InliningCodeGenerator
	instanceVariableNames: ''
	package: 'Compiler-Inlining'!

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

