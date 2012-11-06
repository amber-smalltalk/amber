Smalltalk current createPackage: 'Helios-Workspace' properties: #{}!
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
		ifFalse: [self currentLine]
		ifTrue: [self selection]
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
      self editor focus
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

observeWrapper

    wrapper onKeyDown: [ :e | self onKeyDown: e ]
!

print: aString
	| start stop |
	start := HashedCollection new.
	stop := HashedCollection new.
	start at: 'line' put: (editor getCursor: false) line.
	start at: 'ch' put: (editor getCursor: false) ch.
	stop at: 'line' put: (start at: 'line').
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

setEditorOn: aTextarea
	<self['@editor'] = CodeMirror.fromTextArea(aTextarea, {
		theme: 'amber',
                lineNumbers: true,
                enterMode: 'flat',
                matchBrackets: true,
                electricChars: false
	})>
! !

!HLCodeWidget methodsFor: 'reactions'!

onDoIt
	
    self doIt
!

onInspectIt

	self inspectIt
!

onKeyDown: anEvent

    <if(anEvent.ctrlKey) {
		if(anEvent.keyCode === 80) { //ctrl+p
			self._onPrintIt();
			anEvent.preventDefault();
			return false;
		}
		if(anEvent.keyCode === 68) { //ctrl+d
			self._onDoIt();
			anEvent.preventDefault();
			return false;
		}
		if(anEvent.keyCode === 73) { //ctrl+i
			self._onInspectIt();
			anEvent.preventDefault();
			return false;
		}
	}>
!

onPrintIt

	self printIt
! !

!HLCodeWidget methodsFor: 'rendering'!

renderContentOn: html
    code := html textarea.
    self setEditorOn: code element.
    
    self observeWrapper
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

