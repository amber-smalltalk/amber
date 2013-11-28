Smalltalk current createPackage: 'Moka-Controllers'!
MKSingleAspectController subclass: #MKAnyKeyInputController
	instanceVariableNames: 'lastValue'
	package: 'Moka-Controllers'!
!MKAnyKeyInputController commentStamp!
I am the default controller for `MKTextAreaView`. Actions are performed on any key press if the view's value changes.!

!MKAnyKeyInputController methodsFor: 'accessing'!

inputText
	^ self view value
! !

!MKAnyKeyInputController methodsFor: 'actions'!

onKeyUp: anEvent
	self setNewValue
!

setNewValue
	| newValue |
	
	newValue := self inputText.
	newValue = lastValue ifTrue: [ ^ self ].
	
	lastValue := newValue.
	self performAspectActionWith: newValue
! !

MKAnyKeyInputController subclass: #MKEnterInputController
	instanceVariableNames: ''
	package: 'Moka-Controllers'!
!MKEnterInputController commentStamp!
I am the default controller for `MKInputView`. 
Actions are performed on 'enter' key press.!

!MKEnterInputController methodsFor: 'actions'!

onKeyDown: anEvent
	anEvent keyCode = String cr asciiValue ifTrue: [
		self setNewValue ]
!

onKeyUp: anEvent
! !

MKSingleAspectController subclass: #MKButtonController
	instanceVariableNames: ''
	package: 'Moka-Controllers'!
!MKButtonController commentStamp!
I am the default controller for `MKButtonView`.!

!MKButtonController methodsFor: 'actions'!

onClick: anEvent
	self performAspectAction
! !

MKSingleAspectController subclass: #MKCheckboxController
	instanceVariableNames: ''
	package: 'Moka-Controllers'!
!MKCheckboxController commentStamp!
I am the default controller for `MKCheckboxView`.!

!MKCheckboxController methodsFor: 'actions'!

onClick: anEvent
	self toggle
!

onKeyDown: anEvent
	"Avoid scrolling in scrollable views"
	
	anEvent stopPropagation
!

onKeyPress: anEvent
	anEvent charCode = ' ' asciiValue ifTrue: [ 
		self toggle.
		anEvent stopPropagation; preventDefault ]
!

toggle
	self performAspectActionWith: self view checked not
! !

MKAspectsController subclass: #MKDropdownController
	instanceVariableNames: ''
	package: 'Moka-Controllers'!

!MKDropdownController methodsFor: 'actions'!

onClick: anEvent
	self view popupList
!

onKeyDown: anEvent
	anEvent keyCode = String cr asciiValue ifTrue: [
		self view popupList ]
! !

MKAspectsController subclass: #MKListController
	instanceVariableNames: 'downRepeater upRepeater'
	package: 'Moka-Controllers'!

!MKListController methodsFor: 'accessing'!

activeItem
	^ self view activeItem
!

collection
	^ self view collection
!

downRepeater
	^ downRepeater ifNil: [ downRepeater := MKRepeater new ]
!

upRepeater
	^ upRepeater ifNil: [ upRepeater := MKRepeater new ]
! !

!MKListController methodsFor: 'actions'!

activateItem: anItem
	"On item activation, change the model selection"
	
	self selectItem: anItem
!

onClick: anEvent
	self selectItem: (self itemForTarget: anEvent target)
!

onKeyDown: anEvent
	"Down"
	anEvent keyCode = 40 ifTrue: [ 
		anEvent preventDefault; stopPropagation.
		self upRepeater stopRepeating.
		self downRepeater repeat: [ 
			self activateItem: self nextItem ] ].
	"Up"
	anEvent keyCode = 38 ifTrue: [ 
		anEvent preventDefault; stopPropagation.
		self downRepeater stopRepeating.
		self upRepeater repeat: [ 
			self activateItem: self previousItem ] ].
!

onKeyUp: anEvent
	self downRepeater stopRepeating.
	self upRepeater stopRepeating
!

selectItem: anItem
	self 
		performAspectAction: self view selectionAspect 
		with: anItem
! !

!MKListController methodsFor: 'private'!

itemForTarget: aDOMElement
	^ self view findItemFor: aDOMElement
!

nextItem
	^ self collection 
		at: (self collection indexOf: self activeItem) + 1
		ifAbsent: [ self collection last ]
!

previousItem
	^ self view collection 
		at: (self view collection indexOf: self activeItem) - 1
		ifAbsent: [ self view collection first ]
! !

MKListController subclass: #MKDropdownListController
	instanceVariableNames: ''
	package: 'Moka-Controllers'!

!MKDropdownListController methodsFor: 'actions'!

activateItem: anItem
	"Select the list item in the view.
	No change is done to the model"
	
	self view activateItem: anItem
!

onKeyDown: anEvent
	super onKeyDown: anEvent.
	
	anEvent keyCode = String cr asciiValue ifTrue: [
		self selectItem: self view activeItem ]
!

onMouseMove: anEvent
	(self upRepeater isRepeating or: [ self downRepeater isRepeating ])
		ifTrue: [ ^ self ].
		
	self activateItem: (self itemForTarget: anEvent target)
! !

MKSingleAspectController subclass: #MKModalPaneController
	instanceVariableNames: ''
	package: 'Moka-Controllers'!

!MKModalPaneController methodsFor: 'actions'!

onClick: anEvent
	self view closeOnClick ifTrue: [ self removeView ]
!

onKeyDown: anEvent
	"ESC"
	anEvent keyCode = 27 ifTrue: [
		self removeView ].
		
	self view closeOnEnter ifTrue: [
		anEvent keyCode = String cr asciiValue ifTrue: [ 
			self removeView ] ]
!

removeView
	self view overlay remove
! !

MKSingleAspectController subclass: #MKOverlayController
	instanceVariableNames: ''
	package: 'Moka-Controllers'!
!MKOverlayController commentStamp!
I am the default controller for `MKOverlayView`.

On a click to the overlay, it is removed together with it's content view.!

!MKOverlayController methodsFor: 'actions'!

onClick: anEvent
	self view remove
! !

Object subclass: #MKRepeater
	instanceVariableNames: 'repeatInterval interval delay'
	package: 'Moka-Controllers'!
!MKRepeater commentStamp!
I am an internal class used by controllers to repeat block actions after a `delay` and with an `interval`.!

!MKRepeater methodsFor: 'accessing'!

repeatInterval
	^ repeatInterval ifNil: [ self defaultRepeatInterval ]
!

repeatInterval: aNumber
	repeatInterval := aNumber
! !

!MKRepeater methodsFor: 'actions'!

repeat: aBlock
	self isRepeating ifTrue: [ ^ self ].
	aBlock value.
	delay := [ interval := aBlock valueWithInterval: self repeatInterval ] 
		valueWithTimeout: 300
!

stopRepeating
	interval ifNotNil: [ interval clearInterval ].
	delay ifNotNil: [ delay clearTimeout ].
	interval := delay := nil
! !

!MKRepeater methodsFor: 'defaults'!

defaultRepeatInterval
	^ 70
! !

!MKRepeater methodsFor: 'testing'!

isRepeating
	^ delay notNil
! !

MKController subclass: #MKScrollController
	instanceVariableNames: ''
	package: 'Moka-Controllers'!

!MKScrollController methodsFor: 'accessing'!

position
	^ self view domDecoratedSize * self scrollPercent
!

scrollPercent
	^ self view domScrollPosition / (self view domSize - self view domScrollbarSize)
! !

!MKScrollController methodsFor: 'actions'!

onHorizontalDrag: anEvent
	(self view decorated asJQuery get: 0) at: 'scrollLeft' put: self position x
!

onVerticalDrag: anEvent
	console log: self position asString.
	(self view decorated asJQuery get: 0) at: 'scrollTop' put: self position y
! !

