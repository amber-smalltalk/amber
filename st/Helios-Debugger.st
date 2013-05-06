Smalltalk current createPackage: 'Helios-Debugger'!
Object subclass: #HLContextInspectorDecorator
	instanceVariableNames: 'context'
	package: 'Helios-Debugger'!

!HLContextInspectorDecorator methodsFor: 'accessing'!

context
	^ context
! !

!HLContextInspectorDecorator methodsFor: 'initialization'!

initializeFromContext: aContext
	context := aContext
! !

!HLContextInspectorDecorator methodsFor: 'inspecting'!

inspectOn: anInspector
	| variables inspectedContext |
	
	variables := Dictionary new.
	inspectedContext := self context.
	
	variables addAll: inspectedContext locals.
	
	[ inspectedContext isBlockContext ] whileTrue: [
		inspectedContext := inspectedContext outerContext.
		variables addAll: inspectedContext locals ].
	
	anInspector
		setLabel: 'Context';
		setVariables: variables
! !

!HLContextInspectorDecorator class methodsFor: 'instance creation'!

on: aContext
	^ self new
		initializeFromContext: aContext;
		yourself
! !

HLFocusableWidget subclass: #HLDebugger
	instanceVariableNames: 'model stackListWidget codeWidget inspectorWidget'
	package: 'Helios-Debugger'!
!HLDebugger commentStamp!
I am the main widget for the Helios debugger.!

!HLDebugger methodsFor: 'accessing'!

codeWidget
	^ codeWidget ifNil: [ codeWidget := HLBrowserCodeWidget new
		browserModel: self model;
		yourself ]
!

initializeFromMethodContext: aMethodContext
	model := HLDebuggerModel on: aMethodContext.
	self observeModel
!

inspectorWidget
	^ inspectorWidget ifNil: [ 
		inspectorWidget := HLInspectorWidget new ]
!

model
	^ model ifNil: [ model := HLDebuggerModel new ]
!

stackListWidget
	^ stackListWidget ifNil: [ 
		stackListWidget := (HLStackListWidget on: self model)
			next: self codeWidget;
			yourself ]
! !

!HLDebugger methodsFor: 'actions'!

focus
	self stackListWidget focus
!

observeModel
	self model announcer 
		on: HLDebuggerContextSelected
		send: #onContextSelected:
		to: self
! !

!HLDebugger methodsFor: 'reactions'!

onContextSelected: anAnnouncement
	self inspectorWidget inspect: (HLContextInspectorDecorator on: anAnnouncement context)
! !

!HLDebugger methodsFor: 'rendering'!

open
	HLManager current addTab: (HLTab on: self labelled: self class tabLabel)
!

renderContentOn: html
	html with: (HLContainer with: (HLHorizontalSplitter
		with: self stackListWidget
		with: (HLVerticalSplitter
			with: self codeWidget
			with: self inspectorWidget)))
! !

!HLDebugger class methodsFor: 'accessing'!

tabLabel
	^ 'Debugger'
! !

!HLDebugger class methodsFor: 'instance creation'!

on: aMethodContext
	^ self new
		initializeFromMethodContext: aMethodContext;
		yourself
! !

HLToolModel subclass: #HLDebuggerModel
	instanceVariableNames: 'rootContext currentContext contexts'
	package: 'Helios-Debugger'!
!HLDebuggerModel commentStamp!
I am a model for Helios debugging.

My instances hold a reference to an `AIContext` instance, built from a `MethodContext`. The context should be the root of the context stack.!

!HLDebuggerModel methodsFor: 'accessing'!

contexts
	^ contexts
!

currentContext
	currentContext ifNil: [ self currentContext: self rootContext ].
	^ currentContext
!

currentContext: aContext
	self withChangesDo: [ 
		currentContext := aContext.
		self announcer announce: (HLDebuggerContextSelected new
			context: aContext;
			yourself).
		self selectedMethod: aContext method ]
!

rootContext
	^ rootContext
! !

!HLDebuggerModel methodsFor: 'initialization'!

initializeContexts
	"Flatten the context stack into an OrderedCollection"
	
	| context |
	
	contexts := OrderedCollection new.
	context := self rootContext.
	
	[ context notNil ] whileTrue: [
		contexts add: context.
		context := context outerContext ]
!

initializeFromContext: aMethodContext
	rootContext := AIContext fromMethodContext: aMethodContext.
	self initializeContexts
! !

!HLDebuggerModel class methodsFor: 'instance creation'!

on: aMethodContext
	^ self new
		initializeFromContext: aMethodContext;
		yourself
! !

HLToolListWidget subclass: #HLStackListWidget
	instanceVariableNames: ''
	package: 'Helios-Debugger'!

!HLStackListWidget methodsFor: 'accessing'!

items
	^ items ifNil: [ items := self model contexts ]
!

label
	^ 'Stack'
! !

!HLStackListWidget methodsFor: 'actions'!

selectItem: aContext
   	self model currentContext: aContext
! !

