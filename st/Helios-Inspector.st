Smalltalk current createPackage: 'Helios-Inspector'!
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
	instanceVariableNames: 'announcer environment inspectee code variables label selection'
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

label
    ^ label ifNil: [ self inspectee printString ]
!

label: aString
    label := aString
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
	^ variables ifNil: [ Dictionary new ]
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

label
	^ self model label
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
	^ self model variables keys
! !

!HLInspectorVariablesWidget methodsFor: 'actions'!

refresh
	self variables = self items ifFalse: [
		self resetItems.
    	super refresh ]
!

resetItems
	items := nil
! !

!HLInspectorVariablesWidget methodsFor: 'defaults'!

defaultItems
	^ self variables
! !

!HLInspectorVariablesWidget methodsFor: 'reactions'!

selectItem: anObject
	super selectItem: anObject.
    self model selectedInstVar: anObject
! !

!HLInspectorVariablesWidget methodsFor: 'rendering'!

renderButtonsOn: html
	diveButton := html button 
		class: 'btn';
		with: 'Dive'; 
		onClick: [ self announcer announce: HLDiveRequested new ]
!

renderContentOn: html
	self renderHeadOn: html.
	super renderContentOn: html
!

renderHeadOn: html
	html div 
		class: 'list-label';
		with: self label
! !

HLWidget subclass: #HLInspectorWidget
	instanceVariableNames: 'model variablesWidget displayWidget codeWidget'
	package: 'Helios-Inspector'!

!HLInspectorWidget methodsFor: 'accessing'!

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

initialize
	super initialize.
	self register
!

inspectee
	^ self model inspectee
!

inspectee: anObject
	self model inspectee: anObject
!

label
    ^ self model label
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
    ^ 'Inspector'
!

variablesWidget
	^ variablesWidget ifNil: [
		variablesWidget := HLInspectorVariablesWidget new
    		model: self model;
        	yourself ]
! !

!HLInspectorWidget methodsFor: 'actions'!

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
        on: HLInstanceVariableSelected
		send: #onInstanceVariableSelected
		to: self
!

observeVariablesWidget
	self variablesWidget announcer 
        on: HLDiveRequested do:[ self onDive ]
!

refresh
	self 
		refreshVariablesWidget;
		refreshDisplayWidget
!

refreshDisplayWidget
	self displayWidget refresh
!

refreshVariablesWidget
	self variablesWidget refresh
!

setLabel: aString
	self model label: aString
!

setVariables: aDictionary
	self model variables: aDictionary
! !

!HLInspectorWidget methodsFor: 'reactions'!

onDive

	HLInspector new 
		inspect: self model selectedInstVarObject;
		openAsTab
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
! !

!HLInspectorWidget methodsFor: 'registration'!

register
	HLInspector register: self
!

unregister
	super unregister.
	HLInspector unregister: self
! !

!HLInspectorWidget methodsFor: 'rendering'!

renderContentOn: html
   	html with: (HLHorizontalSplitter
    	with: (HLVerticalSplitter 
            with: self variablesWidget
            with: self displayWidget)
        with: self codeWidget)
! !

HLInspectorWidget subclass: #HLInspector
	instanceVariableNames: ''
	package: 'Helios-Inspector'!

!HLInspector methodsFor: 'rendering'!

renderContentOn: html
   	html with: (HLContainer with: (HLHorizontalSplitter
    	with: (HLVerticalSplitter 
            with: self variablesWidget
            with: self displayWidget)
        with: self codeWidget)).
	
	self variablesWidget focus
! !

HLInspector class instanceVariableNames: 'inspectors'!

!HLInspector class methodsFor: 'accessing'!

inspectors
	^ inspectors ifNil: [ inspectors := OrderedCollection new ]
!

tabClass
	^ 'inspector'
!

tabLabel
	^ 'Inspector'
!

tabPriority
	^ 10
! !

!HLInspector class methodsFor: 'actions'!

inspect: anObject
	self new
		inspect: anObject;
		openAsTab
! !

!HLInspector class methodsFor: 'initialization'!

initialize
	super initialize.
	self watchChanges
!

watchChanges
	[ self inspectors do: [ :each | each refresh ] ]
		valueWithInterval: 500
! !

!HLInspector class methodsFor: 'registration'!

register: anInspector
	self inspectors add: anInspector
!

unregister: anInspector
	self inspectors remove: anInspector
! !

!HLInspector class methodsFor: 'testing'!

canBeOpenAsTab
	^ false
! !

