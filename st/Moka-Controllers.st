Smalltalk current createPackage: 'Moka-Controllers'!
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

MKAspectController subclass: #MKInputController
	instanceVariableNames: ''
	package: 'Moka-Controllers'!
!MKInputController commentStamp!
I am the default controller for `MKInputView`.!

!MKInputController methodsFor: 'actions'!

onEnterPressed: aString
	self performActionWith: aString
! !

