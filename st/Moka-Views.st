Smalltalk current createPackage: 'Moka-Views'!
MKAspectView subclass: #MKButtonView
	instanceVariableNames: 'default label'
	package: 'Moka-Views'!
!MKButtonView commentStamp!
I am a push button view. My default controller is `MKButtonController`.

My controller must answer to `#onPressed`.

## API

- Instances can be set a `default` button
- Use `#label:` to set the label string!

!MKButtonView methodsFor: 'accessing'!

cssClass
	^ self isDefault 
		ifTrue: [ 'default' ]
		ifFalse: [ '' ]
!

default
	^ default
!

default: aBoolean
	default := aBoolean
!

label
	^ label ifNil: [ self defaultLabel ]
!

label: aString
	label := aString
! !

!MKButtonView methodsFor: 'defaults'!

defaultControllerClass
	^ MKButtonController
!

defaultLabel
	^ 'OK'
! !

!MKButtonView methodsFor: 'events'!

pressed
	self controller onPressed
! !

!MKButtonView methodsFor: 'rendering'!

renderContentOn: html
	html button
		class: self cssClass;
		with: self label;
		onClick: [ self pressed ]
! !

!MKButtonView methodsFor: 'testing'!

isDefault
	^ self default ifNil: [ false ]
! !

MKAspectView subclass: #MKCheckboxView
	instanceVariableNames: 'label'
	package: 'Moka-Views'!
!MKCheckboxView commentStamp!
I am a checkbox view. My default controller is `MKCheckboxController`.

My controller must answer to `#onToggled:`.

##API

- If no `aspect` is provided, the ckeckbox state will always be off.
- use `#label:` to set the label string.!

!MKCheckboxView methodsFor: 'accessing'!

checked
	^ self aspectValue ifNil: [ false ]
! !

!MKCheckboxView methodsFor: 'events'!

pressed
	self controller onToggled: self checked not
! !

!MKCheckboxView methodsFor: 'rendering'!

label
	^ label ifNil: [ '' ]
!

label: aString
	label := aString
!

renderContentOn: html
	html input
		type: 'checkbox';
		at: 'checked' put: self checked;
		value: self label;
		onClick: [ self pressed ]
! !

MKAspectView subclass: #MKInputView
	instanceVariableNames: 'input'
	package: 'Moka-Views'!
!MKInputView commentStamp!
I am an input view. My default controller is `MKInputController`.

My controller must answer to `#onEnterPressed:`.!

!MKInputView methodsFor: 'accessing'!

value
	^ input asJQuery val
! !

!MKInputView methodsFor: 'events'!

enterPressed
	self controller onEnterPressed: self value
!

keyDown: anEvent
	anEvent which = String cr asciiValue ifTrue: [
		self enterPressed ]
! !

!MKInputView methodsFor: 'rendering'!

renderContentOn: html
	input := html input
		value: self aspectValue;
		onKeyDown: [ :event |
			self keyDown: event ];
		yourself
! !

