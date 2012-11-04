Smalltalk current createPackage: 'Helios-Inspector' properties: #{}!
HLWidget subclass: #HLInspector
	instanceVariableNames: 'model variables display code'
	package: 'Helios-Inspector'!

!HLInspector methodsFor: 'accessing'!

code

	^ code ifNil:[self initializeCode]
!

display

	^ display ifNil:[self initializeDisplay]
!

inspectee

	^ self model inspectee
!

inspectee: anObject

	self model inspectee: anObject
!

model

	^ model ifNil:[self initializeModel]
!

model: aModel

	model := aModel.
     
    self code model: aModel code.
    self observeCode.
!

tabLabel
	
    ^ model inspectee printString
!

variables

	^ variables ifNil:[self initializeVariables]
! !

!HLInspector methodsFor: 'actions'!

ensureModel
	"Sends the #model: initialization message if needed."

	model ifNil:[
		self model: self model]
!

inspect: anObject

	self model inspectee: anObject
!

makeCode

	^ HLCodeWidget new
    	model: model code;
		doItReaction: [self refresh];
        yourself.
!

makeDisplay

	^ HLInspectorDisplay new
    	model: self model;
        yourself
!

makeVariables

	^ HLInspectorVariables new
    	model: self model;
        yourself
!

observeCode
!

open

	HLManager current addTab: (HLTab on: self labelled: self tabLabel)
!

refresh

	self 
		inspect: self inspectee; 
		updateVariablesList;
		updateValueTextarea
! !

!HLInspector methodsFor: 'initialization'!

initializeCode

	^ code := self makeCode.
!

initializeDisplay
	^ display := self makeDisplay
!

initializeModel

	^ model := HLInspectorModel new
!

initializeVariables
	^ variables := self makeVariables
! !

!HLInspector methodsFor: 'reactions'!

onDoIt
!

onInspectIt
!

onPrintIt
! !

!HLInspector methodsFor: 'rendering'!

renderContentOn: html

	self ensureModel.
    
   	html with: (HLContainer with: (HLHorizontalSplitter
    	with: (HLVerticalSplitter 
            		with: self variables
            	    with: self display)
        with: self code))
! !

!HLInspector class methodsFor: 'accessing'!

tabLabel
	^ 'Inspector'
!

tabPriority
	^ 10
! !

!HLInspector class methodsFor: 'testing'!

canBeOpenAsTab
	^ false
! !

HLNavigationListWidget subclass: #HLInspectorDisplay
	instanceVariableNames: 'model'
	package: 'Helios-Inspector'!

!HLInspectorDisplay methodsFor: 'accessing'!

model

	^ model
!

model: aModel

	model := aModel
! !

!HLInspectorDisplay methodsFor: 'rendering'!

renderContentOn: html
	
    html div with: 'display'
! !

Object subclass: #HLInspectorModel
	instanceVariableNames: 'announcer environment inspectee code variables selection'
	package: 'Helios-Inspector'!

!HLInspectorModel methodsFor: 'accessing'!

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
!

inspectee 

	^ inspectee
!

inspectee: anObject 

	inspectee := anObject
!

selection

	^ selection ifNil:[self initializeSelection]
!

selection: anObject

	selection := anObject
! !

!HLInspectorModel methodsFor: 'actions'!

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

!HLInspectorModel methodsFor: 'initialization'!

initializeAnnouncer
	^ announcer := Announcer new
!

initializeCode

	^ code := HLCodeModel on: self environment
!

initializeEnvironment
	^ environment := HLLocalEnvironment new
!

initializeSelection

	^ selection := self inspectee
! !

!HLInspectorModel methodsFor: 'reactions'!

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

!HLInspectorModel class methodsFor: 'actions'!

on: anEnvironment

	^ self new
    	environment: anEnvironment;
        yourself
! !

HLNavigationListWidget subclass: #HLInspectorVariables
	instanceVariableNames: 'model'
	package: 'Helios-Inspector'!

!HLInspectorVariables methodsFor: 'accessing'!

model
	
    ^ model
!

model: aModel
	
    model := aModel
! !

!HLInspectorVariables methodsFor: 'rendering'!

renderContentOn: html
	
    html div with: 'variables'
! !

