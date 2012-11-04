Smalltalk current createPackage: 'Helios-Workspace' properties: #{}!
Object subclass: #HLCodeModel
	instanceVariableNames: 'announcer environment receiver'
	package: 'Helios-Workspace'!

!HLCodeModel methodsFor: 'accessing'!

announcer
	^ announcer ifNil: [ self initializeAnnouncer ]
!

environment
	^ environment ifNil: [ self initializeEnvironment]
!

environment: anEnvironment
	environment := anEnvironment
!

receiver
	^ receiver
!

receiver: anObject
	receiver := anObject
! !

!HLCodeModel methodsFor: 'actions'!

doIt: someCode do: aReaction

	| result |
    result := self environment eval: someCode on: self receiver.
	aReaction value: result.
    ^result
!

subscribe: aWidget
	aWidget subscribeTo: self announcer
! !

!HLCodeModel methodsFor: 'initialization'!

initializeAnnouncer
	^ announcer := Announcer new
!

initializeEnvironment
	^ environment := Smalltalk current
!

initializeReceiver
	^receiver := DoIt new
! !

!HLCodeModel class methodsFor: 'actions'!

on: anEnvironment

	^ self new
    	environment: anEnvironment;
        yourself
! !

HLWidget subclass: #HLCodeWidget
	instanceVariableNames: 'model wrapper code editor doItReaction'
	package: 'Helios-Workspace'!

!HLCodeWidget methodsFor: 'accessing'!

announcer
	^ self model announcer
!

currentLine
    ^editor getLine: (editor getCursor line)
!

currentLineOrSelection
    ^editor somethingSelected
		ifFalse: [self currentLine]
		ifTrue: [self selection]
!

doItReaction

	^ doItReaction ifNil:[self initializeDoItReaction]
!

doItReaction: aBlock

	doItReaction := aBlock
!

model

	^ model
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
!

val
	^ code getValue
!

val: aString
    code setValue: aString
!

wrapper

	^ wrapper
! !

!HLCodeWidget methodsFor: 'actions'!

clear
      self val: ''
!

editor
	^editor
!

focus
      self editor focus
!

observeWrapper

    wrapper onKeyDown: [:e | self onKeyDown: e]
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

setEditorOn: aTextarea
	<self['@editor'] = CodeMirror.fromTextArea(aTextarea, {
		theme: 'amber',
                lineNumbers: true,
                enterMode: 'flat',
                matchBrackets: true,
                electricChars: false
	})>
! !

!HLCodeWidget methodsFor: 'initialization'!

initializeDoItReaction

	^ doItReaction := ["no-op"]
! !

!HLCodeWidget methodsFor: 'reactions'!

onDoIt
	| result |

	result:=  model 
    				doIt: self currentLineOrSelection 
        			do: self doItReaction.
        
	self announcer announce: (HLDoItRequested on: model).
	^ result
!

onInspectIt
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

	| result |

	result:=  model 
    				doIt: self currentLineOrSelection 
        			do: self doItReaction.
        
	self announcer announce: (HLPrintItRequested on: model).

    self print: result printString.
	self focus.
! !

!HLCodeWidget methodsFor: 'rendering'!

renderOn: html
    wrapper := html div class: 'code'.
    self observeWrapper
    wrapper with: [code := html textarea].
    self setEditorOn: code element.
! !

HLWidget subclass: #HLWorkspace
	instanceVariableNames: 'model code'
	package: 'Helios-Workspace'!

!HLWorkspace methodsFor: 'accessing'!

code

	^ code ifNil:[self initializeCode]
!

model

	^ model ifNil:[self initializeModel]
!

model: aModel

	model := aModel.
     
    self code model: aModel code.
    self observeCode.
! !

!HLWorkspace methodsFor: 'actions'!

ensureModel
	"Sends the #model: initialization message if needed."

	model ifNil:[
		self model: self model]
!

makeCode

	^ HLCodeWidget new
    	model: model code;
        yourself
!

observeCode
! !

!HLWorkspace methodsFor: 'initialization'!

initializeCode

	^ code := self makeCode.
!

initializeModel

	^ model := HLWorkspaceModel new
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

	self ensureModel.
    
	html with: self code
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
	^ announcer ifNil: [ self initializeAnnouncer ]
!

code
	"Answers the code model working for this workspace model"
	^ code ifNil:[self initializeCode]
!

environment
	^ environment ifNil: [ self initializeEnvironment]
!

environment: anEnvironment
	environment := anEnvironment
! !

!HLWorkspaceModel methodsFor: 'actions'!

beLocal

	self initializeEnvironment
!

beRemoteOn: anIPAddress port: aPort

	"to-do"
    
    "environment := HLRemoteEnvironment on: anIPAddress port: aPort
    
    ...kind of stuff"
!

subscribe: aWidget
	aWidget subscribeTo: self announcer
! !

!HLWorkspaceModel methodsFor: 'initialization'!

initializeAnnouncer
	^ announcer := Announcer new
!

initializeCode

	^ code := HLCodeModel on: self environment
!

initializeEnvironment
	^ environment := HLLocalEnvironment new
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

