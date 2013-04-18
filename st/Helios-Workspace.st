Smalltalk current createPackage: 'Helios-Workspace'!
Object subclass: #HLCodeModel
	instanceVariableNames: 'announcer environment receiver'
	package: 'Helios-Workspace'!

!HLCodeModel methodsFor: 'accessing'!

announcer
	^ announcer ifNil: [ announcer := Announcer new ]
!

environment
	^ environment ifNil: [ HLManager current environment ]
!

environment: anEnvironment
	environment := anEnvironment
!

receiver
	^ receiver ifNil: [ receiver := self defaultReceiver ]
!

receiver: anObject
	receiver := anObject
! !

!HLCodeModel methodsFor: 'actions'!

doIt: aString

	^ self environment eval: aString on: self receiver
! !

!HLCodeModel methodsFor: 'defaults'!

defaultReceiver
	^ DoIt new
! !

!HLCodeModel class methodsFor: 'actions'!

on: anEnvironment

	^ self new
    	environment: anEnvironment;
        yourself
! !

HLWidget subclass: #HLCodeWidget
	instanceVariableNames: 'model wrapper code editor state'
	package: 'Helios-Workspace'!

!HLCodeWidget methodsFor: 'accessing'!

announcer
	^ self model announcer
!

contents
	^ editor getValue
!

contents: aString
	editor setValue: aString.
	state ifNotNil: [ self updateState ]
!

currentLine
    ^editor getLine: (editor getCursor line)
!

currentLineOrSelection
    ^editor somethingSelected
		ifFalse: [ self currentLine ]
		ifTrue: [ self selection ]
!

model
	^ model ifNil: [ model := HLCodeModel new ]
!

model: aModel
	model := aModel
!

receiver
	^ self model receiver
!

receiver: anObject
	self model receiver: anObject
!

selection
	^editor getSelection
!

selectionEnd
   ^code element selectionEnd
!

selectionEnd: anInteger
   code element selectionEnd: anInteger
!

selectionStart
   ^code element selectionStart
!

selectionStart: anInteger
   code element selectionStart: anInteger
! !

!HLCodeWidget methodsFor: 'actions'!

clear
	self contents: ''
!

configureEditor
	self editor at: 'amberCodeWidget' put: self.
	self editor on: 'change' do: [ self onChange ]
!

doIt
	| result |

	self model announcer announce: (HLDoItRequested on: model).
	result := model doIt: self currentLineOrSelection.
	self model announcer announce: (HLDoItExecuted on: model).

	^ result
!

editor
	^ editor
!

focus
	editor focus
!

inspectIt
	| newInspector |
       
	self model announcer announce: (HLInspectItRequested on: model).
	newInspector := self makeInspectorOn: self doIt.
	newInspector open
!

makeInspectorOn: anObject

	^ HLInspector new 
		inspect: anObject;
		yourself
!

print: aString
	| start stop currentLine |
    currentLine := (editor getCursor: false) line.
	start := HashedCollection new.
	start at: 'line' put: currentLine.
	start at: 'ch' put: (editor getCursor: false) ch.
    (editor getSelection) ifEmpty: [
    	"select current line if selection is empty"
    	start at: 'ch' put: (editor getLine: currentLine) size.
        editor setSelection: #{'line' -> currentLine. 'ch' -> 0} end: start.
    ].
	stop := HashedCollection new.
	stop at: 'line' put: currentLine.
	stop at: 'ch' put: ((start at: 'ch') + aString size + 2).

	editor replaceSelection: (editor getSelection, ' ', aString, ' ').
	editor setCursor: (editor getCursor: true).
	editor setSelection: stop end: start
!

printIt
	| result |

	result:=  self doIt.       
	self model announcer announce: (HLPrintItRequested on: model).
    self print: result printString.
	
	self focus.
!

saveIt
	"I do not do anything"
!

setEditorOn: aTextarea
	<self['@editor'] = CodeMirror.fromTextArea(aTextarea, {
		theme: 'amber',
                lineNumbers: true,
                enterMode: 'flat',
                indentWithTabs: true,
				indentUnit: 4,
                matchBrackets: true,
                electricChars: true,
				keyMap: 'Amber',
				extraKeys: {"Shift-Space": "autocomplete"}
	})>
! !

!HLCodeWidget methodsFor: 'hints'!

messageHintFor: anEditor token: aToken
	^ ((Smalltalk current at: 'allSelectors') value asSet asArray 
		select: [ :each | each includesSubString: aToken string ])
		reject: [ :each | each = aToken string ]
!

variableHintFor: anEditor token: aToken
	| variables classNames pseudoVariables |
	
	variables := ((window jQuery: anEditor display wrapper) find: 'span.cm-variable') get
		collect: [ :each | (window jQuery: each) html ].
	
	classNames := Smalltalk current classes collect: [ :each | each name ].
	pseudoVariables := Smalltalk current pseudoVariableNames.
	
	^ ((variables, classNames, pseudoVariables) asSet asArray 
		select: [ :each | each includesSubString: aToken string ])
		reject: [ :each | each = aToken string ]
! !

!HLCodeWidget methodsFor: 'reactions'!

onChange
	self updateState
!

onDoIt
	
    self doIt
!

onInspectIt

	self inspectIt
!

onPrintIt

	self printIt
!

onSaveIt
	"I do not do anything"
! !

!HLCodeWidget methodsFor: 'rendering'!

renderContentOn: html
	code := html textarea.
	state := html div class: 'state'.
	self 
		setEditorOn: code element;
		configureEditor;
		updateState
! !

!HLCodeWidget methodsFor: 'testing'!

canHaveFocus
	^ true
!

hasFocus
	^ code asJQuery is: ':active'
!

hasModification
	^ false
! !

!HLCodeWidget methodsFor: 'updating'!

updateState
	self hasModification 
		ifTrue: [ state asJQuery addClass: 'modified' ]
		ifFalse: [ state asJQuery removeClass: 'modified' ]
! !

!HLCodeWidget class methodsFor: 'accessing'!

keyMap
	^ HLManager current keyBinder systemIsMac
		ifTrue: [ self macKeyMap ]
		ifFalse: [ self pcKeyMap ]
!

macKeyMap
	^ #{
		'Alt-Backspace'		-> 'delWordBefore'.
		'Alt-Delete'		-> 'delWordAfter'. 
		'Alt-Left'		-> 'goWordBoundaryLeft'.
		'Alt-Right'		-> 'goWordBoundaryRight'. 
		'Cmd-A'			-> 'selectAll'. 
		'Cmd-Alt-F'		-> 'replace'. 
		'Cmd-D'			-> 'doIt'. 
		'Cmd-Down'		-> 'goDocEnd'. 
		'Cmd-End'		-> 'goDocEnd'. 
		'Cmd-F'			-> 'find'.
		'Cmd-G'			-> 'findNext'. 
		'Cmd-I'			-> 'inspectIt'. 
		'Cmd-Left'		-> 'goLineStart'. 
		'Cmd-P'			-> 'printIt'. 
		'Cmd-Right'		-> 'goLineEnd'. 
		'Cmd-S'			-> 'saveIt'. 
		'Cmd-Up'		-> 'goDocStart'. 
		'Cmd-Y'			-> 'redo'.
		'Cmd-Z'			-> 'undo'. 
		'Cmd-['			-> 'indentLess'. 
		'Cmd-]'			-> 'indentMore'.
		'Ctrl-Alt-Backspace'	-> 'delWordAfter'. 
		'Shift-Cmd-Alt-F'	-> 'replaceAll'.
		'Shift-Cmd-G'		-> 'findPrev'. 
		'Shift-Cmd-Z'		-> 'redo'. 
    	'fallthrough' 	-> { 'basic'. 'emacsy' }
  }
!

pcKeyMap
	^ {
		'Alt-Left' -> 'goLineStart'. 
		'Alt-Right' -> 'goLineEnd'.
		'Alt-Up' -> 'goDocStart'. 
		'Ctrl-A' -> 'selectAll'. 
		'Ctrl-Backspace' -> 'delWordBefore'. 
		'Ctrl-D' -> 'doIt'. 
		'Ctrl-Delete' -> 'delWordAfter'. 
		'Ctrl-Down' -> 'goDocEnd'.
		'Ctrl-End' -> 'goDocEnd'. 
		'Ctrl-F' -> 'find'.
		'Ctrl-G' -> 'findNext'. 
		'Ctrl-I' -> 'inspectIt'.
		'Ctrl-Home' -> 'goDocStart'. 
		'Ctrl-Left' -> 'goWordBoundaryLeft'. 
		'Ctrl-P' -> 'printIt'.
		'Ctrl-Right' -> 'goWordBoundaryRight'. 
		'Ctrl-S' -> 'saveIt'. 
		'Ctrl-Y' -> 'redo'.
		'Ctrl-Z' -> 'undo'. 
		'Ctrl-[' -> 'indentLess'. 
		'Ctrl-]' -> 'indentMore'.
		'Shift-Ctrl-F' -> 'replace'. 
		'Shift-Ctrl-G' -> 'findPrev'. 
		'Shift-Ctrl-R' -> 'replaceAll'.
		'Shift-Ctrl-Z' -> 'redo'. 
		'fallthrough' -> #('basic')
}
! !

!HLCodeWidget class methodsFor: 'hints'!

hintFor: anEditor options: options
	| cursor token completions |
	
	cursor := anEditor getCursor.
	token := anEditor getTokenAt: cursor.
	token at: 'state' put: ((CodeMirror basicAt: 'innerMode')
		value: anEditor getMode value: (token at: 'state')) state.
	
	completions := token type = 'variable' 
		ifTrue: [ HLCodeWidget variableHintFor: anEditor token: token ]
		ifFalse: [ HLCodeWidget messageHintFor: anEditor token: token ].
	
	^ #{
		'list' -> completions.
		'from' -> ((CodeMirror basicAt: 'Pos') value: cursor line value: token end).
		'to' -> ((CodeMirror basicAt: 'Pos') value: cursor line value: token start)
	}
!

messageHintFor: anEditor token: aToken
	^ (anEditor at: 'amberCodeWidget')
		messageHintFor: anEditor token: aToken
!

variableHintFor: anEditor token: aToken
	^ (anEditor at: 'amberCodeWidget')
		variableHintFor: anEditor token: aToken
! !

!HLCodeWidget class methodsFor: 'initialization'!

initialize
	super initialize.
	self 
		setupCodeMirror;
		setupCommands;
		setupKeyMaps.
!

setupCodeMirror
	< 
		CodeMirror.keyMap.default.fallthrough = ["basic"];
		CodeMirror.commands.autocomplete = function(cm) {
        	CodeMirror.showHint(cm, self._hintFor_options_);
      	}
	>
!

setupCommands
	(CodeMirror basicAt: 'commands') 
		at: 'doIt' put: [ :cm | cm amberCodeWidget doIt ];
		at: 'inspectIt' put: [ :cm | cm amberCodeWidget inspectIt ];
		at: 'printIt' put: [ :cm | cm amberCodeWidget printIt ];
		at: 'saveIt' put: [ :cm | cm amberCodeWidget saveIt ]
!

setupKeyMaps
	<CodeMirror.keyMap['Amber'] = self._keyMap()>
! !

HLCodeWidget subclass: #HLNavigationCodeWidget
	instanceVariableNames: 'methodContents'
	package: 'Helios-Workspace'!

!HLNavigationCodeWidget methodsFor: 'accessing'!

contents: aString
	self methodContents: aString.
	super contents: aString
!

methodContents
	^ methodContents ifNil: [ '' ]
!

methodContents: aString
	^ methodContents := aString
!

previous
	"for browser lists widget"
!

previous: aWidget
	"for browser lists widget"
! !

!HLNavigationCodeWidget methodsFor: 'testing'!

hasModification
	^ (self methodContents = self contents) not
! !

!HLNavigationCodeWidget class methodsFor: 'instance creation'!

on: aBrowserModel
	^ self new
		browserModel: aBrowserModel;
		yourself
! !

!HLNavigationCodeWidget class methodsFor: 'testing'!

canBeOpenAsTab
	^ false
! !

HLNavigationCodeWidget subclass: #HLBrowserCodeWidget
	instanceVariableNames: 'browserModel'
	package: 'Helios-Workspace'!

!HLBrowserCodeWidget methodsFor: 'accessing'!

browserModel
	^ browserModel
!

browserModel: aBrowserModel
	browserModel := aBrowserModel.
	self 
		observeSystem;
		observeBrowserModel
! !

!HLBrowserCodeWidget methodsFor: 'actions'!

observeBrowserModel
	self browserModel announcer
		on: HLSaveSourceCode
		do: [ :ann | self onSaveIt ];
		on: HLShowInstanceToggled
		do: [ :ann | self onShowInstanceToggled ];
		on: HLSourceCodeSaved
		do: [ :ann | self onSourceCodeSaved ];
		on: HLAboutToChange
		do: [ :ann | self onBrowserAboutToChange: ann actionBlock ];
		on: HLParseErrorRaised
		do: [ :ann | self onParseError: ann ];
		on: HLCompileErrorRaised
		do: [ :ann | self onCompileError: ann error ];
		on: HLUnknownVariableErrorRaised
		do: [ :ann | self onUnknownVariableError: ann error ];
		on: HLInstVarAdded 
		do: [ :ann | self onInstVarAdded ];
		on: HLMethodSelected 
		do: [ :ann | self onMethodSelected: ann item ];
    	on: HLClassSelected 
		do: [ :ann | self onClassSelected: ann item ];
    	on: HLProtocolSelected 
		do: [ :ann | self onProtocolSelected: ann item ];
		on: HLSourceCodeFocusRequested 
		do: [ :ann | self onSourceCodeFocusRequested ]
!

observeSystem
	self browserModel systemAnnouncer
    	on: MethodModified
        do: [ :ann | self onMethodModified: ann method ];
		on: HLMethodSelected 
		do: [ :ann | self onMethodSelected: ann item ];
    	on: HLClassSelected 
		do: [ :ann | self onClassSelected: ann item ];
    	on: HLProtocolSelected 
		do: [ :ann | self onProtocolSelected: ann item ];
		on: HLSourceCodeFocusRequested 
		do: [ :ann | self onSourceCodeFocusRequested ]
!

refresh
	self hasModification ifTrue: [ ^ self ].
    self hasFocus ifTrue: [ ^ self ].

	self contents: self browserModel selectedMethod source
!

saveIt
	self browserModel saveSourceCode
! !

!HLBrowserCodeWidget methodsFor: 'reactions'!

onBrowserAboutToChange
	self hasModification
		ifTrue: [ 
			self 
				confirm: 'Do you want to cancel changes?' 
				ifFalse: [ HLChangeForbidden signal ].
			
			"Don't ask twice"
			self methodContents: self contents ]
!

onBrowserAboutToChange: aBlock
	self hasModification
		ifTrue: [
			self 
				confirm: 'Do you want to cancel changes?' 
				ifTrue: [
					"Don't ask twice"
					self methodContents: self contents.
					aBlock value ].
			
			
			HLChangeForbidden signal ]
!

onClassSelected: aClass
	aClass ifNil: [ ^ self contents: '' ].
    
    self contents: aClass definition
!

onCompileError: anError
	self alert: anError messageText
!

onInstVarAdded
	self browserModel save: self contents
!

onMethodModified: aMethod
	self browserModel selectedClass = aMethod methodClass ifFalse: [ ^ self ].
	self browserModel selectedMethod ifNil: [ ^ self ].
    self browserModel selectedMethod selector = aMethod selector ifFalse: [ ^ self ].

	self refresh
!

onMethodSelected: aCompiledMethod
	aCompiledMethod ifNil: [ ^ self contents: '' ].
    
    self contents: aCompiledMethod source
!

onParseError: anAnnouncement
	| lineIndex newContents |
	
	lineIndex := 1.
	
	self contents: (String streamContents: [ :stream |
		self contents linesDo: [ :each |
			lineIndex = anAnnouncement line 
				ifTrue: [ 
					stream 
						nextPutAll: (each copyFrom: 1 to: anAnnouncement column);
						nextPutAll: '<- ';
						nextPutAll: anAnnouncement message;
						nextPutAll: ' ';
						nextPutAll: (each copyFrom: anAnnouncement column + 1 to: each size) ]
				ifFalse: [ stream nextPutAll: each ].
			stream nextPutAll: String cr.
			lineIndex := lineIndex + 1 ] ])
!

onProtocolSelected: aString
	self browserModel selectedClass ifNil: [ ^ self contents: '' ].
    
    self contents: self browserModel selectedClass definition
!

onSaveIt
	self browserModel save: self contents
!

onShowInstanceToggled
	self browserModel selectedClass ifNil: [ ^ self contents: '' ].
    
    self contents: self browserModel selectedClass definition
!

onSourceCodeFocusRequested
	self focus
!

onSourceCodeSaved
	self methodContents: self contents.
	self updateState
!

onUnknownVariableError: anError
	self 
		confirm: (String streamContents: [ :stream |
			stream 
				nextPutAll: anError messageText;
				nextPutAll: String cr;
				nextPutAll: 'Would you like to define an instance variable?' ])
		ifTrue: [
			self browserModel addInstVarNamed: anError variableName ]
! !

!HLBrowserCodeWidget class methodsFor: 'instance creation'!

on: aBrowserModel
	^ self new
		browserModel: aBrowserModel;
		yourself
! !

!HLBrowserCodeWidget class methodsFor: 'testing'!

canBeOpenAsTab
	^ false
! !

HLWidget subclass: #HLWorkspace
	instanceVariableNames: 'codeWidget'
	package: 'Helios-Workspace'!

!HLWorkspace methodsFor: 'accessing'!

codeWidget
	^ codeWidget ifNil: [ codeWidget := HLCodeWidget new ]
! !

!HLWorkspace methodsFor: 'actions'!

focus
	^ self codeWidget focus
! !

!HLWorkspace methodsFor: 'rendering'!

renderContentOn: html
	html with: (HLContainer with: self codeWidget)
! !

!HLWorkspace methodsFor: 'testing'!

canHaveFocus
	^ true
! !

!HLWorkspace class methodsFor: 'accessing'!

tabLabel
	^ 'Workspace'
!

tabPriority
	^ 10
! !

!HLWorkspace class methodsFor: 'testing'!

canBeOpenAsTab
	^ true
! !

