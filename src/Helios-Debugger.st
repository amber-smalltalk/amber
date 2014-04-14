Smalltalk createPackage: 'Helios-Debugger'!
Object subclass: #HLContextInspectorDecorator
	instanceVariableNames: 'context'
	package: 'Helios-Debugger'!

!HLContextInspectorDecorator methodsFor: 'accessing'!

context
	^ context
! !

!HLContextInspectorDecorator methodsFor: 'evaluating'!

evaluate: aString on: anEvaluator
	^ self context evaluate: aString on: anEvaluator
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
		to: self;
		
		on: HLDebuggerStepped
		send: #onDebuggerStepped:
		to: self;
		
		on: HLDebuggerProceeded
		send: #onDebuggerProceeded
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
!

onDebuggerProceeded
	self removeTab
!

onDebuggerStepped: anAnnouncement
	self model atEnd ifTrue: [ self removeTab ].
	
	self inspectorWidget inspect: (HLContextInspectorDecorator on: anAnnouncement context).
	self stackListWidget refresh
! !

!HLDebugger methodsFor: 'rendering'!

renderContentOn: html
	self renderHeadOn: html.
	html with: (HLContainer with: (HLVerticalSplitter
		with: self codeWidget
		with: (HLHorizontalSplitter
			with: self stackListWidget
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
	^ [ self debuggerModel evaluate: aString ]
		tryCatch: [ :e | 
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
	self browserModel nextNode ifNotNil: [ :node |
		self highlightNode: node ]
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

!HLDebuggerCodeWidget methodsFor: 'rendering'!

renderOn: html
	super renderOn: html.
	self contents: self browserModel selectedMethod source
! !

HLToolModel subclass: #HLDebuggerModel
	instanceVariableNames: 'rootContext debugger error'
	package: 'Helios-Debugger'!
!HLDebuggerModel commentStamp!
I am a model for debugging Amber code in Helios.

My instances hold a reference to an `ASTDebugger` instance, itself referencing the current `context`. The context should be the root of the context stack.!

!HLDebuggerModel methodsFor: 'accessing'!

contexts
	| contexts context |
	
	contexts := OrderedCollection new.
	context := self rootContext.
	
	[ context notNil ] whileTrue: [
		contexts add: context.
		context := context outerContext ].
		
	^ contexts
!

currentContext
	^ self debugger context
!

currentContext: aContext
	self withChangesDo: [ 
		self selectedMethod: aContext method.
		self debugger context: aContext.
		self announcer announce: (HLDebuggerContextSelected new
			context: aContext;
			yourself) ]
!

debugger
	^ debugger ifNil: [ debugger := ASTDebugger new ]
!

error
	^ error
!

nextNode
	^ self debugger node
!

rootContext
	^ rootContext
! !

!HLDebuggerModel methodsFor: 'actions'!

proceed
	self debugger proceed.
	
	self announcer announce: HLDebuggerProceeded new
!

restart
	self debugger restart.
	self onStep.
	
	self announcer announce: (HLDebuggerStepped new
		context: self currentContext;
		yourself)
!

stepOver
	self debugger stepOver.
	self onStep.
	
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
		evaluate: aString 
		for: self currentContext
! !

!HLDebuggerModel methodsFor: 'initialization'!

initializeFromError: anError
	| errorContext |
	
	error := anError.
	errorContext := (AIContext fromMethodContext: error context).
	rootContext := error signalerContextFrom: errorContext.
	self selectedMethod: rootContext method
! !

!HLDebuggerModel methodsFor: 'private'!

flushInnerContexts
	"When stepping, the inner contexts are not relevent anymore,
	and can be flushed"
	
	self currentContext innerContext: nil.
	rootContext := self currentContext.
	self initializeContexts
! !

!HLDebuggerModel methodsFor: 'reactions'!

onStep
	rootContext := self currentContext.
	
	"Force a refresh of the context list and code widget"
	self selectedMethod: self currentContext method.
	self announcer announce: (HLDebuggerContextSelected new
		context: self currentContext;
		yourself)
! !

!HLDebuggerModel methodsFor: 'testing'!

atEnd
	^ self debugger atEnd
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
	^ self model contexts
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

proceed
	self model proceed
!

restart
	self model restart
!

selectItem: aContext
   	self model currentContext: aContext.
	super selectItem: aContext
!

selectedItem
   	^ self model currentContext
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
				class: 'btn proceed';
				with: 'Proceed';
				onClick: [ self proceed ] ]
! !

