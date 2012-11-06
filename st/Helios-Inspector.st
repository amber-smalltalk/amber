Smalltalk current createPackage: 'Helios-Inspector' properties: #{}!
HLWidget subclass: #HLInspector
	instanceVariableNames: 'model variablesWidget displayWidget codeWidget label'
	package: 'Helios-Inspector'!

!HLInspector methodsFor: 'accessing'!

codeWidget
	^ codeWidget ifNil: [
		codeWidget := HLCodeWidget new
    		model: model code;
        	receiver: model inspectee;
        	yourself ]
!

displayWidget
	^ displayWidget ifNil: [
		displayWidget := HLInspectorDisplayWidget new
    		model: self model;
        	yourself ]
!

inspectee
	^ self model inspectee
!

inspectee: anObject
	self model inspectee: anObject
!

label
    ^ label ifNil: [ model inspectee printString ]
!

model
	^ model ifNil: [ 
    	self model: HLInspectorModel new.
		model ]
!

model: aModel
	model := aModel. 
    self codeWidget model: aModel code.
    
    self 
        observeCodeWidget;
    	observeVariablesWidget;
        observeModel
!

tabLabel
    ^ self label
!

variablesWidget
	^ variablesWidget ifNil: [
		variablesWidget := HLInspectorVariablesWidget new
    		model: self model;
        	yourself ]
! !

!HLInspector methodsFor: 'actions'!

inspect: anObject
	self model inspect: anObject on: self.
    
	self 
    	refreshVariablesWidget;
		refreshDisplayWidget
!

observeCodeWidget
	self codeWidget announcer 
    	on: HLDoItExecuted 
        do: [ self onDoneIt ]
!

observeModel
	self model announcer
        on: HLInstanceVariableSelected do: [ :ann | self onInstanceVariableSelected ]
!

observeVariablesWidget
	self variablesWidget announcer 
    	on: HLRefreshRequested do: [ :ann | self onRefresh ];
        on: HLDiveRequested do:[ self onDive ]
!

open
	HLManager current addTab: (HLTab on: self labelled: self tabLabel)
!

refresh
	self inspect: self inspectee
!

refreshDisplayWidget
	self displayWidget refresh
!

refreshVariablesWidget
	self variablesWidget refresh
!

setLabel: aString
	label := aString
!

setVariables: aDictionary
	self model variables: aDictionary
! !

!HLInspector methodsFor: 'reactions'!

onDive

	self inspect: self model selectedInstVarObject
!

onDoneIt

	self refresh
!

onInspectIt
!

onInstanceVariableSelected
	self codeWidget receiver: self model selectedInstVarObject.
	self refreshDisplayWidget
!

onPrintIt
!

onRefresh

	self refresh
! !

!HLInspector methodsFor: 'rendering'!

renderContentOn: html
   	html with: (HLContainer with: (HLHorizontalSplitter
    	with: (HLVerticalSplitter 
            		with: self variablesWidget
            	    with: self displayWidget)
        with: self codeWidget))
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

HLNavigationListWidget subclass: #HLInspectorDisplayWidget
	instanceVariableNames: 'model'
	package: 'Helios-Inspector'!

!HLInspectorDisplayWidget methodsFor: 'accessing'!

model

	^ model
!

model: aModel

	model := aModel
! !

!HLInspectorDisplayWidget methodsFor: 'rendering'!

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
	^ announcer ifNil: [announcer := Announcer new ]
!

code
	"Answers the code model working for this workspace model"
	^ code ifNil:[ code := HLCodeModel on: self environment ]
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
	^ selection ifNil:[ '' ]
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

HLNavigationListWidget subclass: #HLInspectorVariablesWidget
	instanceVariableNames: 'announcer model list diveButton'
	package: 'Helios-Inspector'!

!HLInspectorVariablesWidget methodsFor: 'accessing'!

announcer
	^ announcer ifNil:[ announcer := Announcer new ]
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

!HLInspectorVariablesWidget methodsFor: 'actions'!

refresh
	self resetItems.
    super refresh
!

resetItems
	items := nil
! !

!HLInspectorVariablesWidget methodsFor: 'defaults'!

defaultItems
	^ self model variables keys
! !

!HLInspectorVariablesWidget methodsFor: 'reactions'!

selectItem: anObject
	super selectItem: anObject.
    self model selectedInstVar: anObject
! !

!HLInspectorVariablesWidget methodsFor: 'rendering'!

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

