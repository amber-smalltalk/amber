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

doIt: someCode

	^ self environment eval: someCode on: self receiver
!

subscribe: aWidget
	aWidget subscribeTo: self announcer
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
	instanceVariableNames: 'model wrapper code editor'
	package: 'Helios-Workspace'!

!HLCodeWidget methodsFor: 'accessing'!

announcer
	^ self model announcer
!

contents
	^ editor getValue
!

contents: aString
	editor setValue: aString
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
	^ model ifNil: [ 
    	self model: HLCodeModel new.
		model ]
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
	self editor at: 'amberCodeWidget' put: self
!

doIt
	| result |

	self announcer announce: (HLDoItRequested on: model).

	result:=  model doIt: self currentLineOrSelection.

	self announcer announce: (HLDoItExecuted on: model).

	^ result
!

editor
	^editor
!

focus
	editor focus
!

inspectIt
	| newInspector |
       
	self announcer announce: (HLInspectItRequested on: model).
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
       
	self announcer announce: (HLPrintItRequested on: model).

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
                electricChars: false,
				keyMap: 'Amber'
	})>
! !

!HLCodeWidget methodsFor: 'reactions'!

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
    self setEditorOn: code element.
    self configureEditor
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
    	'fallthrough' 	-> { 'basic' }
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

!HLCodeWidget class methodsFor: 'initialization'!

initialize
	super initialize.
	self 
		setupCodeMirror;
		setupCommands;
		setupKeyMaps.
!

setupCodeMirror
	< CodeMirror.keyMap.default.fallthrough = ["basic"] >
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

HLCodeWidget subclass: #HLSourceCodeWidget
	instanceVariableNames: ''
	package: 'Helios-Workspace'!

!HLSourceCodeWidget methodsFor: 'reactions'!

onKeyDown: anEvent
	(super onKeyDown: anEvent) ifFalse: [ ^ false ].
    
	anEvent ctrlKey ifTrue: [
		anEvent keyCode = 83 ifTrue: [
			self onSave.
			anEvent preventDefault.
			^ false ] ]
!

onSave
! !

HLWidget subclass: #HLWorkspace
	instanceVariableNames: 'model codeWidget'
	package: 'Helios-Workspace'!

!HLWorkspace methodsFor: 'accessing'!

codeWidget
	^ codeWidget ifNil: [
		codeWidget := HLCodeWidget new
    		model: self model code;
        	yourself ]
!

model
	^ model ifNil: [ 
    	self model: HLWorkspaceModel new.
		model ]
!

model: aModel
	model := aModel.
     
    self codeWidget model: aModel code.
    self observeCodeWidget.
! !

!HLWorkspace methodsFor: 'actions'!

observeCodeWidget
! !

!HLWorkspace methodsFor: 'reactions'!

onDoIt
!

onInspectIt
!

onPrintIt
! !

!HLWorkspace methodsFor: 'rendering'!

renderContentOn: html
	html with: self codeWidget
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

Object subclass: #HLWorkspaceModel
	instanceVariableNames: 'announcer environment code'
	package: 'Helios-Workspace'!

!HLWorkspaceModel methodsFor: 'accessing'!

announcer
	^ announcer ifNil: [ announcer := Announcer new ]
!

code
	"Answers the code model working for this workspace model"
	^ code ifNil:[ HLCodeModel on: self environment ]
!

environment
	^ environment ifNil: [ HLManager current environment ]
!

environment: anEnvironment
	environment := anEnvironment
! !

!HLWorkspaceModel methodsFor: 'reactions'!

onKeyDown: anEvent

	<if(anEvent.ctrlKey) {
		if(anEvent.keyCode === 80) { //ctrl+p
			self._printIt();
			anEvent.preventDefault();
			return false;
		}
		if(anEvent.keyCode === 68) { //ctrl+d
			self._doIt();
			anEvent.preventDefault();
			return false;
		}
		if(anEvent.keyCode === 73) { //ctrl+i
			self._inspectIt();
			anEvent.preventDefault();
			return false;
		}
	}>
! !

!HLWorkspaceModel class methodsFor: 'actions'!

on: anEnvironment

	^ self new
    	environment: anEnvironment;
        yourself
! !

