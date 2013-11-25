Smalltalk current createPackage: 'Moka-Examples'!
MKModel subclass: #MKClassesListBuilder
	instanceVariableNames: ''
	package: 'Moka-Examples'!

!MKClassesListBuilder methodsFor: 'as yet unclassified'!

build
	MKPaneView new
		height: 150;
		addView: (
			(MKListView 	
				model: MKClassesModel new
				collectionAspect: #classes
				selectionAspect: #selectedClass)
					left: 4;
					top: 4;
					bottom: 4;
					right: 0.5;
					yourself);
		addView: (MKPanelView new
			left: 0.5;
			top: 4;
			right: 4;
			bottom: 4;
			addView: (MKSourceListView 	
				model: MKClassesModel new
				collectionAspect: #classes
				selectionAspect: #selectedClass);
			yourself);
		render
! !

!MKClassesListBuilder class methodsFor: 'as yet unclassified'!

initialize
	self new build
! !

MKModel subclass: #MKClassesModel
	instanceVariableNames: 'classes selectedClass'
	package: 'Moka-Examples'!

!MKClassesModel methodsFor: 'as yet unclassified'!

classes
	^ Smalltalk current classes
!

selectedClass
	^ selectedClass ifNil: [ self classes first ]
!

selectedClass: aClass
	selectedClass := aClass.
	self changed: #selectedClass
! !

Object subclass: #MKCounterBuilder
	instanceVariableNames: 'counter'
	package: 'Moka-Examples'!

!MKCounterBuilder methodsFor: 'accessing'!

build
	| pane |
	pane := MKPanelView new
		top: 200;
		width: 400;
		borderRight: 1;
		bottom: 0;
		yourself.
	
	pane addView: ((MKHeadingView model: self counter aspect: #count)
		level: 3;
		top: 0;
		left: 8;
		height: 28;
		yourself).
	pane addView: ((MKButtonView model: self counter aspect: #increase) 
		label: 'Increase';
		top: 50;
		left: 8;
		yourself).
	pane addView: ((MKButtonView model: self counter aspect: #decrease) 
		label: 'Decrease';
		default: true;
		top: 50;
		left: 92;
		yourself).
	pane addView: ((MKInputView model: self counter aspect: #text)
		top: 100;
		left: 8;
		yourself).
	pane addView: ((MKInputView model: self counter aspect: #text)
		top: 150;
		left: 8;
		triggerChangeOnAnyKey;
		yourself).
	pane addView: ((MKTextAreaView model: self counter aspect: #text)
		top: 200;
		left: 8;
		yourself).
	pane addView: ((MKCheckboxView model: self counter aspect: #checked)
		top: 300;
		left: 8;
		yourself).
	pane addView: ((MKSwitchView model: self counter aspect: #checked)
		top: 350;
		centerX: 0;
		yourself).
	pane addView: ((MKSwitchView model: self counter aspect: #checked)
		top: 380;
		centerX: -50;
		yourself).
	pane addView: ((MKSwitchView model: self counter aspect: #checked)
		top: 410;
		centerX: 50;
		yourself).
	pane addView: ((MKSwitchView model: self counter aspect: #checked)
		right: 4;
		centerY: 0;
		yourself).
	pane addView: ((MKSwitchView model: self counter aspect: #checked)
		right: 4;
		centerY: 30;
		yourself).
	pane addView: ((MKSwitchView model: self counter aspect: #checked)
		right: 4;
		centerY: -30;
		yourself).
	pane addView: ((MKDropdownView 
			model: self counter
			collectionAspect: #options
			selectionAspect: #selectedOption)
		left: 4;
		top: 440;
		yourself).
		
	pane render
	"(MKButtonView model: self counter aspect: #decrease) 
		label: 'Decrease';
		render"
!

counter
	^ counter ifNil: [ counter := MKCounterModel new ]
! !

!MKCounterBuilder class methodsFor: 'initialization'!

initialize
	self new build
! !

MKModel subclass: #MKCounterModel
	instanceVariableNames: 'count text checked options selectedOption'
	package: 'Moka-Examples'!

!MKCounterModel methodsFor: 'accessing'!

options
	^ Smalltalk current classes collect: [ :each | each name ]
!

selectedOption
	^ selectedOption ifNil: [ selectedOption := self options last ]
!

selectedOption: aString
	selectedOption := aString.
	self changed: #selectedOption
! !

!MKCounterModel methodsFor: 'actions'!

checked
	^ checked ifNil: [ false ]
!

checked: aBoolean
	checked := aBoolean.
	self changed: 'checked'
!

count
	^ count asString
!

decrease
	count := count - 1.
	self changed: #count
!

increase
	count := count + 1.
	self changed: #count
!

text
	^ text ifNil: [ '' ]
!

text: aString
	text := aString.
	self changed: 'text'
! !

!MKCounterModel methodsFor: 'initialization'!

initialize
	super initialize.
	count := 0
! !

