Smalltalk createPackage: 'Helios-Inspector'!
HLNavigationListWidget subclass: #HLInspectorDisplayWidget
	instanceVariableNames: 'inspector'
	package: 'Helios-Inspector'!

!HLInspectorDisplayWidget methodsFor: 'accessing'!

inspector
	^ inspector
!

inspector: anInspector
	inspector := anInspector
!

model

	^ self inspector model
! !

!HLInspectorDisplayWidget methodsFor: 'rendering'!

renderContentOn: html
	
    html div with: self selectionDisplayString
!

selectionDisplayString
	|selection|
	selection := self model selection.
    ^ (self model variables includesKey: selection)
    	ifTrue:[ (self model instVarObjectAt: selection) printString ]
      	ifFalse:[ '' ]
! !

HLModel subclass: #HLInspectorModel
	instanceVariableNames: 'inspectee code variables label selection'
	package: 'Helios-Inspector'!
!HLInspectorModel commentStamp!
I am the model of the Helios inspector `HLInspectorWidget`.

## API

Use the method `inspect:on:` to inspect an object on an inspector.!

!HLInspectorModel methodsFor: 'accessing'!

code
	"Answers the code model working for this workspace model"
	^ code ifNil:[ code := HLCodeModel on: self environment ]
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

!HLInspectorModel class methodsFor: 'actions'!

on: anEnvironment

	^ self new
    	environment: anEnvironment;
        yourself
! !

HLNavigationListWidget subclass: #HLInspectorVariablesWidget
	instanceVariableNames: 'announcer inspector list diveButton'
	package: 'Helios-Inspector'!

!HLInspectorVariablesWidget methodsFor: 'accessing'!

announcer
	^ announcer ifNil:[ announcer := Announcer new ]
!

inspector
	^ inspector
!

inspector: anInspector
	inspector := anInspector
!

label
	^ self model label
!

model
    ^ self inspector model
!

selection
	^ self model selection
!

variables
	^ self model variables keys
! !

!HLInspectorVariablesWidget methodsFor: 'actions'!

dive
	self announcer announce: HLDiveRequested new
!

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
		onClick: [ self dive ]
!

renderContentOn: html
	self renderHeadOn: html.
	super renderContentOn: html.
	self wrapper onDblClick: [ self dive ]
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
		codeWidget := self defaultCodeWidget ]
!

codeWidget: aWidget
	codeWidget := aWidget
!

displayWidget
	^ displayWidget ifNil: [
		displayWidget := HLInspectorDisplayWidget new
    		inspector: self;
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
    		inspector: self;
        	yourself ]
! !

!HLInspectorWidget methodsFor: 'actions'!

inspect: anObject
	self model inspect: anObject on: self.
	self codeWidget receiver: anObject.
    
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
        on: HLDiveRequested 
		send: #onDive
		to: self
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
	self model label: aString
!

setVariables: aDictionary
	self model variables: aDictionary
! !

!HLInspectorWidget methodsFor: 'defaults'!

defaultCodeWidget
	^ HLCodeWidget new
    	model: self model code;
       	receiver: self model inspectee;
       	yourself
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

!HLInspector methodsFor: 'actions'!

inspect: anObject
	self setTabLabel: anObject printString.
	super inspect: anObject
! !

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
		openAsTab;
		inspect: anObject
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

