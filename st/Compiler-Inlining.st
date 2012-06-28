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

IRNonLocalReturn subclass: #IRInlinedNonLocalReturn
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
	^ (self shouldInlineAssignment: anIRAssignment) 
		ifTrue: [ self assignmentInliner inlineAssignment: anIRAssignment ]
		ifFalse: [ super visitIRAssignment: anIRAssignment ]
!

visitIRSend: anIRSend
	^ (self shouldInlineSend: anIRSend)
		ifTrue: [ self sendInliner inlineSend: anIRSend ]
		ifFalse: [ super visitIRSend: anIRSend ]
!

visitSendNode: aNode
	aNode canBeInlined
		ifTrue: [ self sendInliner inlineSend: aNode ]
		ifFalse: [ super visitSendNode: aNode ]
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
	anIRInlinedClosure assignTo ifNotNil: [
		self stream nextPutAll: anIRInlinedClosure assignTo variable alias.
		self stream nextPutAssignment ].
	self visit: anIRInlinedClosure instructions last
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

ifTrue: anIRInstruction
	| inlinedSend inlinedClosure |

	anIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].
	anIRInstruction arguments size = 0 ifFalse: [ self inliningError: 'Inlined block should have zero argument' ].

	inlinedClosure := self inlinedClosure.
	anIRInstruction instructions do: [ :each |
		instruction := (self translator visit: each) first.
		inlinedClosure add: instruction ].

	inlinedSend := IRInlinedIfTrue new.
	inlinedSend
		add: self send instructions first;
		add: inlinedClosure.

	self send replaceWith: inlinedSend.
	^ inlinedSend
!

inlineSend: anIRSend
	self send: anIRSend.
	self perform: self send selector withArguments: self send instructions allButFirst
! !

!IRSendInliner class methodsFor: 'accessing'!

inlinedSelectors
	^ #('ifTrue:')
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

