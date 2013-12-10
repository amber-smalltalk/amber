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
!MKDropdownController commentStamp!
I am the default controller for `MKDropdownView`.!

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

MKSingleAspectController subclass: #MKModalController
	instanceVariableNames: ''
	package: 'Moka-Controllers'!

!MKModalController methodsFor: 'actions'!

onClick: anEvent
	self view closeOnClick ifTrue: [ self removeView ]
!

onKeyDown: anEvent
	self view closeOnEnter ifTrue: [
		anEvent keyCode = String cr asciiValue ifTrue: [
			self removeView.
			anEvent 
				stopPropagation;
				preventDefault ] ].
	
	"ESC"
	anEvent keyCode = 27 ifTrue: [
		self removeView ]
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
!MKScrollController commentStamp!
I am the default controller for `MKScrollDecorator`.!

!MKScrollController methodsFor: 'actions'!

onDecoratedScroll
	self view updateScrollbarsPosition
!

onHorizontalDrag: anEvent
	(self view decorated asJQuery get: 0) at: 'scrollLeft' put: self view domScrollPosition x
!

onMousewheel: anEvent
	anEvent deltaY ~= 0 ifTrue: [
		self view scrollDeltaY: anEvent deltaY * 10 ].
	
	anEvent deltaX ~= 0 ifTrue: [
		self view scrollDeltaX: anEvent deltaX * 10 ]
!

onResize
	self view resized
!

onVerticalDrag: anEvent
	(self view decorated asJQuery get: 0) at: 'scrollTop' put: self view domScrollPosition y
! !

MKController subclass: #MKSplitController
	instanceVariableNames: ''
	package: 'Moka-Controllers'!
!MKSplitController commentStamp!
I am the abstract controller for `MKSplitView`.!

!MKSplitController methodsFor: 'actions'!

onResize: anEvent helper: aJQuery
	self placeSplitter: (self positionForSplitter: aJQuery)
!

placeSplitter: aJQuery
	self subclassResponsibility
! !

!MKSplitController methodsFor: 'private'!

positionForSplitter: aJQuery
	^ self subclassResponsibility
! !

MKSplitController subclass: #MKBottomFixedVerticalSplitController
	instanceVariableNames: ''
	package: 'Moka-Controllers'!
!MKBottomFixedVerticalSplitController commentStamp!
I am an alternative controller for `MKVerticalSplitView`.

When the splitter is moved, the second view is set a fixed size, thus resizing will preserve the height of the second view, while the first view will be resized.!

!MKBottomFixedVerticalSplitController methodsFor: 'actions'!

placeSplitter: aNumber
	| splitter |
	splitter := self view splitter asJQuery.
	self view secondView asJQuery 
		css: 'height' put: aNumber asMokaCssString;
		css: 'bottom' put: 0.
	splitter 
		css: 'top' put: 'auto';
		css: 'bottom' put: (aNumber - splitter height) asMokaCssString.
	self view firstView asJQuery css: 'bottom' put: aNumber asMokaCssString
! !

!MKBottomFixedVerticalSplitController methodsFor: 'private'!

positionForSplitter: aJQuery
	^ ((self view domSize y - aJQuery position top) 
		max: self view minimumThickness) min: (self view domSize y - self view minimumThickness)
! !

MKSplitController subclass: #MKLeftFixedHorizontalSplitController
	instanceVariableNames: ''
	package: 'Moka-Controllers'!
!MKLeftFixedHorizontalSplitController commentStamp!
I am the controller for `MKHorizontalSplitView`.

When the splitter is moved, the left view is set a fixed size, thus resizing will preserve the width of the first view, while the second view will be resized.!

!MKLeftFixedHorizontalSplitController methodsFor: 'actions'!

placeSplitter: aNumber
	self view firstView asJQuery css: 'width' put: aNumber asMokaCssString.
	self view splitter asJQuery css: 'left' put: aNumber asMokaCssString.
	self view secondView asJQuery css: 'left' put: aNumber asMokaCssString
! !

!MKLeftFixedHorizontalSplitController methodsFor: 'private'!

positionForSplitter: aJQuery
	^ (aJQuery position left max: self view minimumThickness)
		min: (self view domSize x - self view minimumThickness)
! !

MKSplitController subclass: #MKRightFixedHorizontalSplitController
	instanceVariableNames: ''
	package: 'Moka-Controllers'!
!MKRightFixedHorizontalSplitController commentStamp!
I am an alternative controller for `MKHorizontalSplitView`.

When the splitter is moved, the second view is set a fixed size, thus resizing will preserve the width of the second view, while the first view will be resized.!

!MKRightFixedHorizontalSplitController methodsFor: 'actions'!

placeSplitter: aNumber
	| splitter |
	splitter := self view splitter asJQuery.
	self view secondView asJQuery 
		css: 'width' put: aNumber asMokaCssString;
		css: 'right' put: 0.
	splitter 
		css: 'left' put: 'auto';
		css: 'right' put: (aNumber - splitter width) asMokaCssString.
	self view firstView asJQuery css: 'right' put: aNumber asMokaCssString
! !

!MKRightFixedHorizontalSplitController methodsFor: 'private'!

positionForSplitter: aJQuery
	^ ((self view domSize x - aJQuery position left)
		max: self view minimumThickness)
			min: (self view domSize x - self view minimumThickness)
! !

MKSplitController subclass: #MKTopFixedVerticalSplitController
	instanceVariableNames: ''
	package: 'Moka-Controllers'!
!MKTopFixedVerticalSplitController commentStamp!
I am the controller for `MKVerticalSplitView`.

When the splitter is moved, the top view is set a fixed size, thus resizing will preserve the height of the first view, while the second view will be resized.!

!MKTopFixedVerticalSplitController methodsFor: 'actions'!

placeSplitter: aNumber
	self view firstView asJQuery css: 'height' put: aNumber asMokaCssString.
	self view splitter asJQuery css: 'top' put: aNumber asMokaCssString.
	self view secondView asJQuery css: 'top' put: aNumber asMokaCssString
! !

!MKTopFixedVerticalSplitController methodsFor: 'private'!

positionForSplitter: aJQuery
	^ (aJQuery position top max: self view minimumThickness)
		min: (self view domSize y - self view minimumThickness)
! !

