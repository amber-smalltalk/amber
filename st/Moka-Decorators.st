Smalltalk current createPackage: 'Moka-Decorators'!
MKDecorator subclass: #MKScrollDecorator
	instanceVariableNames: 'verticalScrollbar horizontalScrollbar'
	package: 'Moka-Decorators'!

!MKScrollDecorator methodsFor: 'accessing'!

cssClass
	^ super cssClass, ' mk_scroll'
!

scrollbarSize
	| domSize overflow |
	
	domSize := self domSize.
	overflow := self domOverflow.
	^ ((domSize x / (overflow x + domSize x)) * 100) @ ((domSize y / (overflow y + domSize y) * 100))
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

domScrollPosition
	^ horizontalScrollbar asJQuery position left @ verticalScrollbar asJQuery position top
!

domScrollbarSize
	^ horizontalScrollbar asJQuery width @ verticalScrollbar asJQuery height
! !

!MKScrollDecorator methodsFor: 'private'!

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
	
	horizontalScrollbar asJQuery width: width asString, '%'.
	verticalScrollbar asJQuery height: height asString, '%'
! !

