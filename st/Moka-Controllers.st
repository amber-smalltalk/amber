Smalltalk current createPackage: 'Moka-Controllers'!
MKAspectController subclass: #MKAnyKeyInputController
	instanceVariableNames: 'lastValue'
	package: 'Moka-Controllers'!

!MKAnyKeyInputController methodsFor: 'accessing'!

inputText
	^ self view value
! !

!MKAnyKeyInputController methodsFor: 'actions'!

onKeyPressed: anEvent
	| newValue |
	
	newValue := self inputText.
	newValue = lastValue ifTrue: [ ^ self ].
	
	lastValue := newValue.
	self performActionWith: newValue
! !

MKAnyKeyInputController subclass: #MKEnterInputController
	instanceVariableNames: ''
	package: 'Moka-Controllers'!
!MKEnterInputController commentStamp!
I am the default controller for `MKInputView`. 
Actions are performed on 'enter' key press.!

!MKEnterInputController methodsFor: 'actions'!

onKeyPressed: anEvent
	anEvent keyCode = String cr asciiValue ifTrue: [
		super onKeyPressed: anEvent ]
! !

MKAspectController subclass: #MKButtonController
	instanceVariableNames: ''
	package: 'Moka-Controllers'!
!MKButtonController commentStamp!
I am the default controller for `MKButtonView`.!

!MKButtonController methodsFor: 'actions'!

onPressed
	self performAction
! !

MKAspectController subclass: #MKCheckboxController
	instanceVariableNames: ''
	package: 'Moka-Controllers'!
!MKCheckboxController commentStamp!
I am the default controller for `MKCheckboxView`.!

!MKCheckboxController methodsFor: 'actions'!

onToggled: aBoolean
	self performActionWith: aBoolean
! !

