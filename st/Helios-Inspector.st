Smalltalk current createPackage: 'Helios-Inspector' properties: #{}!
HLWidget subclass: #HLInspector
	instanceVariableNames: 'model variables display code label'
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

label
	
    ^ label ifNil:[self initializeLabel]
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
	
    ^ self label
!

variables

	^ variables ifNil:[self initializeVariables]
! !

!HLInspector methodsFor: 'actions'!

ensureModel
	"Sends the #model: initialization message if needed."

	self observeVariables.
        
	model ifNil:[
		self model: self model]
!

inspect: anObject

	self model inspect: anObject on: self.
    
	self 
    	refreshVariables;
		refreshDisplay;
        yourself
!

makeCode

	^ HLCodeWidget new
    	model: model code;
        receiver: model inspectee;
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

	self code announcer 
    	on: HLDoItExecuted 
        do: [self onDoneIt]
!

observeVariables

	self variables announcer 
    	on: HLRefreshRequested do:[:ann| self onRefresh];
        on: HLDiveRequested do:[self onDive];
        yourself.

	self model announcer
        on: HLInstanceVariableSelected do:[:ann| self onInstanceVariableSelected];
        yourself.
!

open

	HLManager current addTab: (HLTab on: self labelled: self tabLabel)
!

refresh

	self inspect: self inspectee
!

refreshDisplay

	self display refresh
!

refreshVariables

	self variables refresh
!

setLabel: aString
	label := aString
!

setVariables: aDictionary

	self model variables: aDictionary
! !

!HLInspector methodsFor: 'initialization'!

initializeCode

	^ code := self makeCode.
!

initializeDisplay
	^ display := self makeDisplay
!

initializeLabel
	^ label := model inspectee printString
!

initializeModel

	^ model := HLInspectorModel new
!

initializeVariables
	^ variables := self makeVariables
! !

!HLInspector methodsFor: 'reactions'!

onDive

	self inspect: self model selectedInstVarObject
!

onDoIt
!

onDoneIt

	self refresh
!

onInspectIt
!

onInstanceVariableSelected

	self code receiver: self model selectedInstVarObject.
	self refreshDisplay
!

onPrintIt
!

onRefresh

	self refresh
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
	
    html div with: self selectionDisplayString
!

selectionDisplayString
	|selection|
	selection := model selection.
    ^ (model variables keys includes: selection)
    	ifTrue:[(model instVarObjectAt: selection) printString]
      	ifFalse:['']
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
	^ environment ifNil: [ HLManager current environment ]
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

selectedInstVarObject

	^ self instVarObjectAt: self selection
!

selection

	^ selection ifNil:[self initializeSelection]
!

selection: anObject

	selection := anObject.

	self announcer announce: (HLInstanceVariableSelected on: selection)
!

variables

	^ variables
!

variables: aCollection

	variables := aCollection
! !

!HLInspectorModel methodsFor: 'actions'!

inspect: anObject on: anInspector

	inspectee := anObject.
	variables := #().
	inspectee inspectOn: anInspector
!

instVarObjectAt: anInstVarName

	^ self variables at: anInstVarName
!

selectedInstVar: anInstVarName

    self selection: anInstVarName
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

initializeSelection

	^ selection := ''
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
	instanceVariableNames: 'announcer model list diveButton'
	package: 'Helios-Inspector'!

!HLInspectorVariables methodsFor: 'accessing'!

announcer

	^ announcer ifNil:[self initializeAnnouncer]
!

model
	
    ^ model
!

model: aModel
	
    model := aModel
!

selection

	^ model selection
!

variables

	^ model variables
! !

!HLInspectorVariables methodsFor: 'actions'!

refresh

	self resetItems.
    
    super refresh
!

resetItems

	items := nil
! !

!HLInspectorVariables methodsFor: 'initialization'!

initializeAnnouncer

	^ announcer := Announcer new
!

initializeItems
	^ items := self model variables keys
! !

!HLInspectorVariables methodsFor: 'reactions'!

selectItem: anObject
	   
	super selectItem: anObject.
    
    self model selectedInstVar: anObject
! !

!HLInspectorVariables methodsFor: 'rendering'!

renderButtonsOn: html

	html button
			class: 'btn';
			with: 'Refresh';
			onClick: [self announcer announce: HLRefreshRequested new].

	diveButton := html button 
				class: 'btn';
				with: 'Dive'; 
				onClick: [self announcer announce: HLDiveRequested new]
! !

