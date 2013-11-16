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
	instanceVariableNames: 'id'
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
!

cssClass
	^ 'mk_checkbox'
!

id
	^ id ifNil: [ id := 1000000 atRandom asString ]
! !

!MKCheckboxView methodsFor: 'defaults'!

defaultControllerClass
	^ MKCheckboxController
! !

!MKCheckboxView methodsFor: 'events'!

pressed
	self controller onToggled: self checked not
!

update
	| checkbox |
	checkbox := ('#', self id) asJQuery.
	
	self checked
		ifTrue: [ checkbox attr: 'checked' put: 'checked' ]
		ifFalse: [ checkbox removeAttr: 'checked' ]
! !

!MKCheckboxView methodsFor: 'rendering'!

renderContentOn: html
	| checkbox |
	
	checkbox := html input
		type: 'checkbox';
		class: self cssClass;
		id: self id;
		onClick: [ self pressed ].
		
	self checked ifTrue: [ 
		checkbox at: 'checked' put: 'checked' ].
		
	html label
		for: self id;
		with: [ html entity: 'nbsp' ]
! !

MKCheckboxView subclass: #MKSwitchView
	instanceVariableNames: ''
	package: 'Moka-Views'!
!MKSwitchView commentStamp!
I am a switch view, similar to a `MKCheckboxView` but displayed as a switch. 
My default controller is `MKCheckboxController`.!

!MKSwitchView methodsFor: 'accessing'!

cssClass
	^ 'mk_switch'
! !

MKAspectView subclass: #MKLabelView
	instanceVariableNames: 'input'
	package: 'Moka-Views'!
!MKLabelView commentStamp!
I am an label view. I display a `String`.!

!MKLabelView methodsFor: 'defaults'!

defaultControllerClass
	^ super defaultControllerClass
! !

!MKLabelView methodsFor: 'rendering'!

renderContentOn: html
	html span with: self aspectValue
! !

MKAspectView subclass: #MKTextAreaView
	instanceVariableNames: 'input'
	package: 'Moka-Views'!
!MKTextAreaView commentStamp!
I am an text area view. My default controller is `MKAnyKeyInputController`.

My controller must answer to `#onKeyPressed:`.!

!MKTextAreaView methodsFor: 'accessing'!

value
	^ input asJQuery val
! !

!MKTextAreaView methodsFor: 'defaults'!

defaultControllerClass
	^ MKAnyKeyInputController
! !

!MKTextAreaView methodsFor: 'events'!

keyUp: anEvent
	self controller onKeyPressed: anEvent
! !

!MKTextAreaView methodsFor: 'rendering'!

renderContentOn: html
	input := html textarea 
		with: self aspectValue;
		onKeyUp: [ :event | self keyUp: event ]
! !

!MKTextAreaView methodsFor: 'updating'!

update
	input ifNotNil: [ input asJQuery val: self aspectValue ]
! !

MKTextAreaView subclass: #MKInputView
	instanceVariableNames: ''
	package: 'Moka-Views'!
!MKInputView commentStamp!
I am an input view. My default controller is `MKEnterInputController`.

My controller must answer to `#onKeyPressed:`.!

!MKInputView methodsFor: 'defaults'!

defaultControllerClass
	^ MKEnterInputController
! !

!MKInputView methodsFor: 'rendering'!

renderContentOn: html
	input := html input
		value: self aspectValue;
		onKeyUp: [ :event |
			self keyUp: event ];
		yourself
! !

!MKInputView methodsFor: 'settings'!

triggerChangeOnAnyKey
	self controller: MKAnyKeyInputController new
!

triggerChangeOnEnter
	self controller: MKEnterInputController new
! !

