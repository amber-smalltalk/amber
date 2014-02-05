Smalltalk createPackage: 'Helios-Debugger'!
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

cssClass
	^ super cssClass, ' hl_debugger'
!

model
	^ model ifNil: [ model := HLDebuggerModel new ]
! !

!HLDebugger methodsFor: 'actions'!

focus
	self stackListWidget focus
!

observeModel
	self model announcer 
		on: HLDebuggerContextSelected
		send: #onContextSelected:
		to: self.
		
	self model announcer 
		on: HLDebuggerStepped
		send: #onContextSelected:
		to: self
!

unregister
	super unregister.
	self inspectorWidget unregister
! !

!HLDebugger methodsFor: 'initialization'!

initializeFromError: anError
	model := HLDebuggerModel on: anError.
	self observeModel
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
	self renderHeadOn: html.
	html with: (HLContainer with: (HLHorizontalSplitter
		with: self stackListWidget
		with: (HLVerticalSplitter
			with: self codeWidget
			with: self inspectorWidget)))
!

renderHeadOn: html
	html div 
		class: 'head'; 
		with: [ html h2 with: self model error messageText ]
! !

!HLDebugger methodsFor: 'widgets'!

codeWidget
	^ codeWidget ifNil: [ codeWidget := HLDebuggerCodeWidget new
		model: (HLDebuggerCodeModel new
			debuggerModel: self model;
			yourself);
		browserModel: self model;
		yourself ]
!

inspectorWidget
	^ inspectorWidget ifNil: [ 
		inspectorWidget := HLInspectorWidget new ]
!

stackListWidget
	^ stackListWidget ifNil: [ 
		stackListWidget := (HLStackListWidget on: self model)
			next: self codeWidget;
			yourself ]
! !

!HLDebugger class methodsFor: 'accessing'!

tabClass
	^ 'debugger'
!

tabLabel
	^ 'Debugger'
! !

!HLDebugger class methodsFor: 'instance creation'!

on: anError
	^ self new
		initializeFromError: anError;
		yourself
! !

HLCodeModel subclass: #HLDebuggerCodeModel
	instanceVariableNames: 'debuggerModel'
	package: 'Helios-Debugger'!

!HLDebuggerCodeModel methodsFor: 'accessing'!

debuggerModel
	^ debuggerModel
!

debuggerModel: anObject
	debuggerModel := anObject
! !

!HLDebuggerCodeModel methodsFor: 'actions'!

doIt: aString
	^ self 
		try: [ self debuggerModel evaluate: aString ]
		catch: [ :e | 
			ErrorHandler handleError: e.
			nil ]
! !

HLBrowserCodeWidget subclass: #HLDebuggerCodeWidget
	instanceVariableNames: ''
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
! !

!HLDebuggerCodeWidget methodsFor: 'actions'!

addStopAt: anInteger
	editor
		setGutterMarker: anInteger
		gutter: 'stops'
		value: '<div class="stop"></stop>' asJQuery toArray first
!

clearHighlight
	self editor clearGutter: 'stops'
!

highlight
	self highlightNode: self browserModel nextNode
!

highlightNode: aNode
	| token |
	
	aNode ifNotNil: [
		self
			clearHighlight;
			addStopAt: aNode positionStart x - 1.

		self editor 
			setSelection: #{ 'line' -> (aNode positionStart x - 1). 'ch' -> (aNode positionStart y - 1) }
			to: #{ 'line' -> (aNode positionEnd x - 1). 'ch' -> (aNode positionEnd y) } ]
!

observeBrowserModel
	super observeBrowserModel.
	
	self browserModel announcer 
		on: HLDebuggerContextSelected
		send: #onContextSelected
		to: self.
	
	self browserModel announcer 
		on: HLDebuggerStepped
		send: #onContextSelected
		to: self.
	
	self browserModel announcer 
		on: HLDebuggerWhere
		send: #onContextSelected
		to: self
! !

!HLDebuggerCodeWidget methodsFor: 'reactions'!

onContextSelected
	self highlight
! !

HLToolModel subclass: #HLDebuggerModel
	instanceVariableNames: 'rootContext currentContext contexts error'
	package: 'Helios-Debugger'!
!HLDebuggerModel commentStamp!
I am a model for debugging Amber code in Helios.

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
		self announcer announce: (HLDebuggerContextSelected new
			context: aContext;
			yourself) ]
!

error
	^ error
!

error: anError
	error := anError
!

interpreter
	^ self currentContext interpreter
!

nextNode
	^ self interpreter node
!

rootContext
	^ rootContext
! !

!HLDebuggerModel methodsFor: 'actions'!

restart
	self interpreter restart.
	self flushInnerContexts.
	
	self announcer announce: (HLDebuggerStepped new
		context: self currentContext;
		yourself)
!

skip
	self interpreter skip.
	self flushInnerContexts.
	
	self announcer announce: (HLDebuggerStepped new
		context: self currentContext;
		yourself)
!

stepOver
	self interpreter stepOver.
	self flushInnerContexts.
	
	self announcer announce: (HLDebuggerStepped new
		context: self currentContext;
		yourself)
!

where
	self announcer announce: HLDebuggerWhere new
! !

!HLDebuggerModel methodsFor: 'evaluating'!

evaluate: aString
	^ self environment 
		interpret: aString 
		inContext: self currentContext
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
	rootContext := (AIContext fromMethodContext: aMethodContext).
	self initializeContexts
!

initializeFromError: anError
	error := anError.
	console log: error.
	console log: error context.
	rootContext := (AIContext fromMethodContext: error context).
	self initializeContexts
! !

!HLDebuggerModel methodsFor: 'private'!

flushInnerContexts
	"When stepping, the inner contexts are not relevent anymore,
	and can be flushed"
	
	self currentContext innerContext: nil.
	rootContext := self currentContext.
	self initializeContexts
! !

!HLDebuggerModel class methodsFor: 'instance creation'!

on: anError
	^ self new
		initializeFromError: anError;
		yourself
! !

Object subclass: #HLErrorHandler
	instanceVariableNames: ''
	package: 'Helios-Debugger'!

!HLErrorHandler methodsFor: 'error handling'!

confirmDebugError: anError
	HLConfirmationWidget new
		confirmationString: anError messageText;
		actionBlock: [ self debugError: anError ];
		cancelButtonLabel: 'Abandon';
		confirmButtonLabel: 'Debug';
		show
!

debugError: anError

	[ 
		(HLDebugger on: anError) openAsTab 
	] 
		on: Error 
		do: [ :error | ConsoleErrorHandler new handleError: error ]
!

handleError: anError
	self confirmDebugError: anError
!

onErrorHandled
	"when an error is handled, we need to make sure that
	any progress bar widget gets removed. Because HLProgressBarWidget is asynchronous,
	it has to be done here."
	
	HLProgressWidget default 
		flush; 
		remove
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

observeModel
	super observeModel.
	
	self model announcer 
		on: HLDebuggerStepped
		send: #onDebuggerStepped:
		to: self
!

restart
	self model restart
!

selectItem: aContext
   	self model currentContext: aContext.
	super selectItem: aContext
!

skip
	self model skip
!

stepOver
	self model stepOver
!

where
	self model where
! !

!HLStackListWidget methodsFor: 'reactions'!

onDebuggerStepped: anAnnouncement
	items := nil.
	self refresh
! !

!HLStackListWidget methodsFor: 'rendering'!

renderButtonsOn: html
	html div 
		class: 'debugger_bar'; 
		with: [
			html button 
				class: 'btn restart';
				with: 'Restart';
				onClick: [ self restart ].
			html button 
				class: 'btn where';
				with: 'Where';
				onClick: [ self where ].
			html button 
				class: 'btn stepOver';
				with: 'Step over';
				onClick: [ self stepOver ].
			html button 
				class: 'btn skip';
				with: 'Skip';
				onClick: [ self skip ] ]
! !

