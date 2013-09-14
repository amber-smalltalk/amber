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
	
	[ inspectedContext notNil and: [ inspectedContext isBlockContext ] ] whileTrue: [
		inspectedContext := inspectedContext outerContext.
		inspectedContext ifNotNil: [
			variables addAll: inspectedContext locals ] ].
	
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
	^ codeWidget ifNil: [ codeWidget := HLDebuggerCodeWidget new
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
!

unregister
	super unregister.
	self inspectorWidget unregister
! !

!HLDebugger methodsFor: 'keybindings'!

registerBindingsOn: aBindingGroup
	HLToolCommand 
		registerConcreteClassesOn: aBindingGroup 
		for: self model
! !

!HLDebugger methodsFor: 'reactions'!

onContextSelected: anAnnouncement
	self inspectorWidget inspect: (HLContextInspectorDecorator on: anAnnouncement context)
! !

!HLDebugger methodsFor: 'rendering'!

renderContentOn: html
	html with: (HLContainer with: (HLHorizontalSplitter
		with: self stackListWidget
		with: (HLVerticalSplitter
			with: self codeWidget
			with: self inspectorWidget)))
! !

!HLDebugger class methodsFor: 'accessing'!

tabClass
	^ 'debugger'
!

tabLabel
	^ 'Debugger'
! !

!HLDebugger class methodsFor: 'instance creation'!

on: aMethodContext
	^ self new
		initializeFromMethodContext: aMethodContext;
		yourself
! !

HLBrowserCodeWidget subclass: #HLDebuggerCodeWidget
	instanceVariableNames: 'highlightedNode'
	package: 'Helios-Debugger'!

!HLDebuggerCodeWidget methodsFor: 'accessing'!

contents: aString
	self clearHighlight.
	super contents: aString
!

editorOptions
	^ super editorOptions
		at: 'gutters' put: #('CodeMirror-linenumbers' 'stops');
		yourself
!

highlightedNode
	^ highlightedNode
!

highlightedNode: aNode
	highlightedNode := aNode
! !

!HLDebuggerCodeWidget methodsFor: 'actions'!

addStopAt: anInteger
	editor
		setGutterMarker: anInteger
		gutter: 'stops'
		value: '<div class="stop"></stop>' asJQuery toArray first
!

clearHighlight
	editor clearGutter: 'stops'.
	self highlightedNode ifNotNil: [ :node |
		editor 
			removeLineClass: node position x - 1
			where: 'background'
			class: 'highlighted' ]
!

highlight
	| anchor head selection |
	
	head := #{
		'line' -> (self highlightedNode position x - 1).
		'ch' -> (self highlightedNode position y - 1)
	}.
	
	anchor := #{
		'line' -> (self highlightedNode extent x - 1).
		'ch' -> (self highlightedNode extent y - 1)
	}.
	
	editor setSelection: head to: anchor
!

highlightLine: anInteger
	editor 
		addLineClass: anInteger
		where: 'background'
		class: 'highlighted'
!

highlightNode: aNode
	| line |
	aNode ifNotNil: [
		line := aNode position x - 1.
		self 
			clearHighlight; 
			addStopAt: line;
			highlightLine: line;
			highlightedNode: aNode
		]
!

observeBrowserModel
	super observeBrowserModel.
	
	self browserModel announcer 
		on: HLDebuggerContextSelected
		send: #onContextSelected
		to: self
! !

!HLDebuggerCodeWidget methodsFor: 'reactions'!

onContextSelected
	self highlightNode: self browserModel nextNode
! !

HLToolModel subclass: #HLDebuggerModel
	instanceVariableNames: 'rootContext currentContext contexts interpreter'
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
		self selectedMethod: aContext method.
		currentContext := aContext.
		interpreter := ASTDebugger context: aContext.
		self announcer announce: (HLDebuggerContextSelected new
			context: aContext;
			yourself) ]
!

interpreter
	^ interpreter
!

nextNode
	^ self interpreter nextNode
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

ErrorHandler subclass: #HLErrorHandler
	instanceVariableNames: ''
	package: 'Helios-Debugger'!

!HLErrorHandler methodsFor: 'error handling'!

handleError: anError
	self onErrorHandled.

	[ 
		(HLDebugger on: anError context) openAsTab 
	] 
		on: Error 
		do: [ :error | ErrorHandler new handleError: error ]
!

onErrorHandled
	"when an error is handled, we need to make sure that
	any progress bar widget gets removed. Because HLProgressBarWidget is asynchronous,
	it has to be done here."
	
	HLProgressWidget default 
		flush; 
		remove
! !

!HLErrorHandler class methodsFor: 'error handling'!

handleError: anError
	^ self new handleError: anError
! !

HLToolListWidget subclass: #HLStackListWidget
	instanceVariableNames: ''
	package: 'Helios-Debugger'!

!HLStackListWidget methodsFor: 'accessing'!

items
	^ items ifNil: [ items := self model contexts ]
!

label
	^ 'Call stack'
! !

!HLStackListWidget methodsFor: 'actions'!

selectItem: aContext
   	self model currentContext: aContext
! !

