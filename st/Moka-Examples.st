Smalltalk current createPackage: 'Moka-Examples'!
Object subclass: #MKCounterBuilder
	instanceVariableNames: 'counter'
	package: 'Moka-Examples'!

!MKCounterBuilder methodsFor: 'accessing'!

build
	(MKLabelView model: self counter aspect: #count) render.
	(MKButtonView model: self counter aspect: #increase) 
		label: 'Increase';
		render.
	(MKInputView model: self counter aspect: #text)
		render.
	(MKInputView model: self counter aspect: #text)
		triggerChangeOnAnyKey;
		render.
	(MKTextAreaView model: self counter aspect: #text)
		render.
	(MKCheckboxView model: self counter aspect: #checked)
		render.
	(MKSwitchView model: self counter aspect: #checked)
		render.
	(MKButtonView model: self counter aspect: #decrease) 
		label: 'Decrease';
		render
!

counter
	^ counter ifNil: [ counter := MKCounterModel new ]
! !

!MKCounterBuilder class methodsFor: 'initialization'!

initialize
	self new build
! !

MKModel subclass: #MKCounterModel
	instanceVariableNames: 'count text checked'
	package: 'Moka-Examples'!

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

