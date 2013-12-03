Smalltalk current createPackage: 'Moka-Decorators'!
MKDecorator subclass: #MKModalDecorator
	instanceVariableNames: 'overlay closeOnEnter closeOnClick'
	package: 'Moka-Decorators'!
!MKModalDecorator commentStamp!
I render my `decorated` view as a modal pane.!

!MKModalDecorator methodsFor: 'accessing'!

closeOnClick
	^ closeOnClick ifNil: [ false ]
!

closeOnClick: aBoolean
	closeOnClick := aBoolean
!

closeOnEnter
	^ closeOnEnter ifNil: [ false ]
!

closeOnEnter: aBoolean
	closeOnEnter := aBoolean
!

cssClass
	^ super cssClass, ' mk_modal'
!

overlay
	^ overlay ifNil: [ overlay := MKOverlayView childView: self ]
!

zindex
	^ 1001
! !

!MKModalDecorator methodsFor: 'defaults'!

defaultControllerClass
	^ MKModalController
!

defaultLayout
	^ super defaultLayout
		centerY: 0;
		centerX: 0;"
		width: 300;
		height: 200;"
		yourself
! !

!MKModalDecorator methodsFor: 'rendering'!

renderOn: html
	super renderOn: html.
	root at: 'tabindex' put: '0'.
	root asJQuery focus.
	html with: self overlay
! !

MKDecorator subclass: #MKScrollDecorator
	instanceVariableNames: 'verticalScrollbar horizontalScrollbar'
	package: 'Moka-Decorators'!
!MKScrollDecorator commentStamp!
I decorate a view adding scrollbars around it.

The `decorated` view can send `MKViewScrolled` announcement to update the scrollbars position.!

!MKScrollDecorator methodsFor: 'accessing'!

cssClass
	^ super cssClass, ' mk_scroll'
!

horizontalScrollbar
	^ horizontalScrollbar
!

scrollPercent
	| element |
	element := self decorated asJQuery get: 0.
	^ (element scrollLeft / element scrollWidth) @ (element scrollTop / element scrollHeight)
!

scrollbarPosition
	| position |
	position := self scrollPercent * (self domSize - self domScrollbarSize).
	^ position x rounded @ position y rounded
!

scrollbarSize
	| domSize overflow |
	
	domSize := self domSize.
	overflow := self domOverflow.
	^ ((domSize x / (overflow x + domSize x)) * 100) @ ((domSize y / (overflow y + domSize y) * 100))
!

verticalScrollbar
	^ verticalScrollbar
! !

!MKScrollDecorator methodsFor: 'actions'!

resized
	super resized.
	self updateScrollbars
!

scrollDeltaX: aNumber
	| scrollbar left maxLeft |
	scrollbar := self horizontalScrollbar asJQuery.
	maxLeft := self domSize x - scrollbar width.
	left := ((scrollbar position left + aNumber) max: 0) min: maxLeft.
	scrollbar css: 'left' put: left.
	(self decorated asJQuery get: 0) at: 'scrollLeft' put: self domScrollPosition x
!

scrollDeltaY: aNumber
	| scrollbar top maxTop |
	scrollbar := self verticalScrollbar asJQuery.
	maxTop := self domSize y - scrollbar height.
	top := ((scrollbar position top - aNumber) max: 0) min: maxTop.
	scrollbar css: 'top' put: top.
	(self decorated asJQuery get: 0) at: 'scrollTop' put: self domScrollPosition y
! !

!MKScrollDecorator methodsFor: 'defaults'!

defaultControllerClass
	^ MKScrollController
! !

!MKScrollDecorator methodsFor: 'dom'!

domDecoratedSize
	| element |
	element := self decorated asJQuery get: 0.
	^ element scrollWidth @ element scrollHeight
!

domOverflow
	| element |
	element := self decorated asJQuery get: 0.
	^ (element scrollWidth - element clientWidth) @ (element scrollHeight - element clientHeight)
!

domScrollPercent
	^ self domScrollbarPosition / (self domSize - self domScrollbarSize)
!

domScrollPosition
	^ (self domDecoratedSize - self domSize) * self domScrollPercent
!

domScrollbarPosition
	^ horizontalScrollbar asJQuery position left @ verticalScrollbar asJQuery position top
!

domScrollbarSize
	^ horizontalScrollbar asJQuery width @ verticalScrollbar asJQuery height
! !

!MKScrollDecorator methodsFor: 'observing'!

observeDecorated
	self decorated 
		on: MKViewScroll 
		send: #onDecoratedScroll
		to: self controller
! !

!MKScrollDecorator methodsFor: 'private'!

setupEventHandlers
	super setupEventHandlers.
	
	root asJQuery mousewheel: [ :event | 
		self controller onMousewheel: event ].
		
	(jQuery value: window) resize: [ :event | 
		self resized ]
!

setupScrollbars
	verticalScrollbar asJQuery draggable: #{
		'containment' -> 'parent'.
		'axis' -> 'y'.
		'drag' -> [ :event | self controller onVerticalDrag: event ]
	}.
	horizontalScrollbar asJQuery draggable: #{
		'containment' -> 'parent'.
		'axis' -> 'x'.
		'drag' -> [ :event | self controller onHorizontalDrag: event ]
	}.
	
	self updateScrollbars
! !

!MKScrollDecorator methodsFor: 'rendering'!

renderContentOn: html
	html div 
		class: 'mk_scroll_container';
		with: [ super renderContentOn: html ].
	
	html div 
		class: 'mk_scroll_rail vertical';
		with: [
			verticalScrollbar := html div
				class: 'mk_scrollbar';
				yourself ].
	html div 
		class: 'mk_scroll_rail horizontal';
		with: [
			horizontalScrollbar := html div
				class: 'mk_scrollbar';
				yourself ].
	
	self setupScrollbars
! !

!MKScrollDecorator methodsFor: 'testing'!

hasHorizontalOverflow
	^ self domOverflow x > 0
!

hasVerticalOverflow
	^ self domOverflow y > 0
! !

!MKScrollDecorator methodsFor: 'updating'!

updateScrollbars
	| width height |
	
	width := self hasHorizontalOverflow
		ifTrue: [ self scrollbarSize x max: 10 ]
		ifFalse: [ 0 ].
	height := self hasVerticalOverflow
		ifTrue: [ self scrollbarSize y max: 10 ]
		ifFalse: [ 0 ].
	
	horizontalScrollbar asJQuery 
		width: width asString, '%'.
	verticalScrollbar asJQuery 
		height: height asString, '%'
!

updateScrollbarsPosition
	| position |
	position := self scrollbarPosition.
	horizontalScrollbar asJQuery
		css: 'left' put: position x.
	verticalScrollbar asJQuery
		css: 'top' put: position y
! !

