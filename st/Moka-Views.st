Smalltalk current createPackage: 'Moka-Views'!
MKSingleAspectView subclass: #MKButtonView
	instanceVariableNames: 'default label icon'
	package: 'Moka-Views'!
!MKButtonView commentStamp!
I am a push button view. My default controller is `MKButtonController`.

My controller must answer to `#onPressed`.

## API

- Instances can be set a `default` button
- Use `#label:` to set the label string!

!MKButtonView methodsFor: 'accessing'!

cssClass
	^ String streamContents: [ :stream |
		stream << super cssClass << ' mk_button'.
		self isDefault 
			ifTrue: [ stream << ' default' ] ]
!

default
	^ default
!

default: aBoolean
	default := aBoolean
!

icon
	^ icon
!

icon: aString
	icon := aString
!

label
	^ label ifNil: [ self defaultLabel ]
!

label: aString
	label := aString
!

tag
	^ 'button'
! !

!MKButtonView methodsFor: 'defaults'!

defaultControllerClass
	^ MKButtonController
!

defaultLabel
	^ 'OK'
!

defaultLayout
	^ super defaultLayout
		width: 80;
		height: 24;
		yourself
! !

!MKButtonView methodsFor: 'rendering'!

renderContentOn: html
	self hasIcon ifTrue: [
		html img 
			class: 'mk_icon';
			src: self icon ].
	html with: self label
! !

!MKButtonView methodsFor: 'testing'!

hasIcon
	^ icon notNil
!

isDefault
	^ self default ifNil: [ false ]
! !

MKSingleAspectView subclass: #MKCheckboxView
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
	^ super cssClass, ' mk_checkbox'
!

id
	^ id ifNil: [ id := 1000000 atRandom asString ]
! !

!MKCheckboxView methodsFor: 'defaults'!

defaultControllerClass
	^ MKCheckboxController
!

defaultLayout
	^ super defaultLayout
		width: 16;
		height: 16;
		yourself
! !

!MKCheckboxView methodsFor: 'events'!

update
	self checked
		ifTrue: [ root asJQuery addClass: 'checked' ]
		ifFalse: [ root asJQuery removeClass: 'checked' ]
! !

!MKCheckboxView methodsFor: 'rendering'!

renderContentOn: html	
	self checked ifTrue: [ 
		root asJQuery addClass: 'checked' ].
	
	root at: 'tabindex' put: '0'
! !

MKCheckboxView subclass: #MKSwitchView
	instanceVariableNames: ''
	package: 'Moka-Views'!
!MKSwitchView commentStamp!
I am a switch view, similar to a `MKCheckboxView` but displayed as a switch. 
My default controller is `MKCheckboxController`.!

!MKSwitchView methodsFor: 'accessing'!

checkboxCssClass
	^ 'mk_switch'
!

cssClass
	^ super cssClass, ' mk_switch'
! !

!MKSwitchView methodsFor: 'defaults'!

defaultLayout
	^ super defaultLayout
		width: 48;
		height: 20;
		yourself
! !

MKLayoutView subclass: #MKImageView
	instanceVariableNames: 'imagePath alternativeContents'
	package: 'Moka-Views'!
!MKImageView commentStamp!
I display an image.

##API

Create instances using `MKImageView class>>imagePath:`.!

!MKImageView methodsFor: 'accessing'!

alternativeContents
	^ alternativeContents ifNil: [ self imagePath ]
!

alternativeContents: aString
	alternativeContents := aString
!

imagePath
	^ imagePath ifNil: [ '' ]
!

imagePath: aString
	imagePath := aString
!

tag
	^ 'img'
! !

!MKImageView methodsFor: 'rendering'!

renderContentOn: html
	root 
		src: self imagePath;
		alt: self alternativeContents
! !

!MKImageView class methodsFor: 'instance creation'!

imagePath: aString
	^ self new
		imagePath: aString;
		yourself
! !

MKSingleAspectView subclass: #MKLabelView
	instanceVariableNames: ''
	package: 'Moka-Views'!
!MKLabelView commentStamp!
I am an label view. I display a `String`.!

!MKLabelView methodsFor: 'accessing'!

cssClass
	^ super cssClass, ' mk_label'
! !

!MKLabelView methodsFor: 'defaults'!

defaultControllerClass
	^ super defaultControllerClass
!

defaultLayout
	^ MKLabelLayout new
		height: 24;
		top: 0;
		left:0;
		right: 0;
		textAlign: 'left';
		yourself
! !

!MKLabelView methodsFor: 'layout'!

textAlign: aString
	self layout textAlign: aString
! !

!MKLabelView methodsFor: 'rendering'!

renderContentOn: html
	html with: self aspectValue
! !

MKLabelView subclass: #MKHeadingView
	instanceVariableNames: 'level'
	package: 'Moka-Views'!
!MKHeadingView commentStamp!
I display a heading, with a `level` from 1 to 6.!

!MKHeadingView methodsFor: 'accessing'!

cssClass
	^ String streamContents: [ :stream |
		stream 
			<< super cssClass 	
			<< ' mk_heading level'
			<< self level asString ]
!

level
	^ level ifNil: [ 1 ]
!

level: aNumber
	level := aNumber
!

tag
	^ 'h', self level asString
! !

MKLayoutView subclass: #MKOverlayView
	instanceVariableNames: 'childView'
	package: 'Moka-Views'!
!MKOverlayView commentStamp!
I display an transparent overlay, typically over other views, except my `childView`.

## API

Create instances using the class-side `childView:` method.!

!MKOverlayView methodsFor: 'accessing'!

childView
	^ childView
!

childView: aView
	childView := aView
!

children
	^ { self childView }
!

cssClass
	^ super cssClass, ' mk_overlay'
! !

!MKOverlayView methodsFor: 'actions'!

remove
	super remove.
	self childView remove
! !

!MKOverlayView methodsFor: 'defaults'!

defaultControllerClass
	^ MKOverlayController
!

renderContentOn: html
	"Left empty on purpose. 
	No Content is rendered, as the childView is actually displayed separately"
! !

!MKOverlayView class methodsFor: 'instance creation'!

childView: aView
	^ self new
		childView: aView;
		yourself
! !

MKLayoutView subclass: #MKPaneView
	instanceVariableNames: 'views'
	package: 'Moka-Views'!
!MKPaneView commentStamp!
I am a view containing other views.

## API

Use `#addView:` to add a view to the pane.!

!MKPaneView methodsFor: 'accessing'!

children
	^ self views
!

cssClass
	^ super cssClass, ' mk_pane'
!

views
	^ views ifNil: [ views := OrderedCollection new ]
! !

!MKPaneView methodsFor: 'adding'!

addView: aView
	self views add: aView
! !

!MKPaneView methodsFor: 'defaults'!

defaultLayout
	^ MKPaneLayout new
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		yourself
! !

!MKPaneView methodsFor: 'layout'!

borderBottom: aNumber
	self layout borderBottom: aNumber
!

borderLeft: aNumber
	self layout borderLeft: aNumber
!

borderRight: aNumber
	self layout borderRight: aNumber
!

borderTop: aNumber
	self layout borderTop: aNumber
! !

!MKPaneView methodsFor: 'rendering'!

renderContentOn: html
	self views do: [ :each | 
		html with: each ]
! !

MKPaneView subclass: #MKPanelView
	instanceVariableNames: ''
	package: 'Moka-Views'!
!MKPanelView commentStamp!
I am similar to a `MKPaneView` but I am scrollable and display a light background.!

!MKPanelView methodsFor: 'accessing'!

cssClass
	^ super cssClass, ' mk_panel'
! !

MKAspectsView subclass: #MKSelectionView
	instanceVariableNames: 'selectionAspect collectionAspect displayBlock iconBlock'
	package: 'Moka-Views'!
!MKSelectionView commentStamp!
I an abstract selection view of a list of elements.

## API

Rendering can be customized with `#displayBlock:` and `#iconBlock:`. Both take the item of the list as argument and answer a string.!

!MKSelectionView methodsFor: 'accessing'!

collection
	^ self valueForAspect: self collectionAspect
!

collectionAspect
	^ collectionAspect
!

collectionAspect: aSelector
	collectionAspect := aSelector
!

displayBlock
	^ displayBlock ifNil: [ self defaultDisplayBlock ]
!

displayBlock: aBlock
	displayBlock := aBlock
!

iconBlock
	^ iconBlock
!

iconBlock: aBlock
	iconBlock := aBlock
!

selectedItem
	^ self valueForAspect: self selectionAspect
!

selectionAspect
	^ selectionAspect
!

selectionAspect: aSelector
	selectionAspect := aSelector
! !

!MKSelectionView methodsFor: 'defaults'!

defaultDisplayBlock
	^ [ :item | item asString ]
! !

!MKSelectionView methodsFor: 'rendering'!

renderIconFor: anObject on: html
	self hasIcon ifTrue: [
		html img 
			class: 'mk_icon';
			src: (self iconBlock value: anObject) ]
! !

!MKSelectionView methodsFor: 'testing'!

hasIcon
	^ self iconBlock notNil
! !

!MKSelectionView class methodsFor: 'instance creation'!

model: aModel collectionAspect: collectionSelector selectionAspect: selectionSelector
	^ (self model: aModel)
		collectionAspect: collectionSelector;
		selectionAspect: selectionSelector;
		yourself
! !

MKSelectionView subclass: #MKDropdownView
	instanceVariableNames: 'modalPaneView listView'
	package: 'Moka-Views'!
!MKDropdownView commentStamp!
I am a push button view. My default controller is `MKButtonController`.

My controller must answer to `#onPressed`.

## API

- Instances can be set a `default` button
- Use `#label:` to set the label string!

!MKDropdownView methodsFor: 'accessing'!

cssClass
	^ super cssClass, ' mk_dropdown'
!

selectedListItem
	^ (root asJQuery find: ':selected') text
!

tag
	^ 'button'
!

update: anAnnouncement
	({self selectionAspect. self collectionAspect} 
		includes: anAnnouncement aspect) ifTrue: [
			self update ]
! !

!MKDropdownView methodsFor: 'actions'!

popupList
	"Show a new list view inside a modal pane"
	self modalPaneView 
		left: self domPosition x;
		top: self domPosition y;
		render.
	self listView focus
! !

!MKDropdownView methodsFor: 'defaults'!

defaultControllerClass
	^ MKDropdownController
!

defaultLayout
	^ super defaultLayout
		width: 120;
		height: 24;
		yourself
! !

!MKDropdownView methodsFor: 'rendering'!

renderContentOn: html
	html div class: 'mk_dropdown_arrows'.
	self renderIconFor: self selectedItem on: html.
	html with: (self displayBlock value: self selectedItem)
! !

!MKDropdownView methodsFor: 'views'!

listView
	^ listView ifNil: [
		listView := (MKDropdownListView 	
			model: self model
			collectionAspect: self collectionAspect
			selectionAspect: self selectionAspect)
				width: self width;
				height: 'auto';
				displayBlock: self displayBlock;
				iconBlock: self iconBlock;
				yourself ]
!

modalPaneView
	^ modalPaneView ifNil: [
		modalPaneView := (MKModalDecorator decorate: self listView)
			extraCssClass: 'mk_dropdown_pane';
			closeOnEnter: true;
			closeOnClick: true;
			yourself.
		modalPaneView 
			on: MKViewRemoved
			send: #focus
			to: self.
		modalPaneView ]
! !

MKSelectionView subclass: #MKListView
	instanceVariableNames: ''
	package: 'Moka-Views'!
!MKListView commentStamp!
I display a list of elements in a list control field.!

!MKListView methodsFor: 'accessing'!

activeItem
	^ self findItemFor: (root asJQuery find: '.', self selectedCssClass)
!

cssClass
	^ super cssClass, ' mk_list'
!

findItemFor: aListItem
	^ aListItem asJQuery data at: 'item'
!

findListItemFor: anObject
	^ (((root asJQuery find: 'li') 
		filter: [ :thisArg | (thisArg asJQuery data: 'item') = anObject ] currySelf) eq: 0)
!

selectedCssClass
	^ 'selected'
!

tag
	^ 'ul'
! !

!MKListView methodsFor: 'actions'!

activateItem: anObject
	self activateListItem: (self findListItemFor: anObject)
!

activateListItem: aListItem
	| item |
	
	(aListItem get: 0) ifNil: [ ^ self ].
	aListItem parent children removeClass: self selectedCssClass.
	aListItem addClass: self selectedCssClass.
    
	self ensureVisible: aListItem
! !

!MKListView methodsFor: 'defaults'!

defaultControllerClass
	^ MKListController
! !

!MKListView methodsFor: 'private'!

ensureVisible: aListItem	
	"Move the scrollbar to show the active element"
	
	| parent position |
	(aListItem get: 0) ifNil: [ ^ self ].
	position := self positionOf: aListItem.
	parent := aListItem parent.
	
    aListItem position top < 0 ifTrue: [
		(parent get: 0) scrollTop: ((parent get: 0) scrollTop + aListItem position top - 10) ].
    aListItem position top + aListItem height > parent height ifTrue: [ 
		(parent get: 0) scrollTop: ((parent get: 0) scrollTop + aListItem height - (parent height - aListItem position top)) +10 ].
	
	self announce: (MKViewScroll view: self)
!

positionOf: aListItem
	"TODO: rewrite in smalltalk"
	<return aListItem.parent().children().get().indexOf(aListItem.get(0)) + 1>
! !

!MKListView methodsFor: 'rendering'!

renderContentOn: html
	self collection do: [ :each  | 
    	self renderItem: each  on: html ].
	
	"make the list focusable"
	root at: 'tabindex' put: '0'
!

renderItem: anObject on: html
	| li |
	
	li := html li.
	li asJQuery data: 'item' put: anObject.
	
	self selectedItem = anObject ifTrue: [
		li class: self selectedCssClass ].
	li with: [ self renderIconFor: anObject on: html ].
	li with: (self displayBlock value: anObject)
! !

!MKListView methodsFor: 'updating'!

update: anAnnouncement
	anAnnouncement aspect = self selectionAspect ifTrue: [
		self updateSelectedItem ].
		
	anAnnouncement aspect = self collectionAspect ifTrue: [
		self update ]
!

updateSelectedItem
	self activateItem: self selectedItem
! !

!MKListView class methodsFor: 'instance creation'!

model: aModel collectionAspect: collectionSelector selectionAspect: selectionSelector
	^ (self model: aModel)
		collectionAspect: collectionSelector;
		selectionAspect: selectionSelector;
		yourself
! !

MKListView subclass: #MKDropdownListView
	instanceVariableNames: ''
	package: 'Moka-Views'!
!MKDropdownListView commentStamp!
I am similar to a `MKListView`, but inside a `MKDropdownView`.!

!MKDropdownListView methodsFor: 'accessing'!

cssClass
	^ super cssClass, ' mk_dropdown_list'
!

defaultControllerClass
	^ MKDropdownListController
! !

MKListView subclass: #MKSourceListView
	instanceVariableNames: ''
	package: 'Moka-Views'!
!MKSourceListView commentStamp!
I am similar to a `MKListView`, but displayed slightly differently, in a similar way as in the left-side the of Finder in OSX.!

!MKSourceListView methodsFor: 'accessing'!

cssClass
	^ super cssClass, ' mk_sourcelist'
! !

MKLayoutView subclass: #MKSplitView
	instanceVariableNames: 'firstView secondView splitter thickness minimumThickness'
	package: 'Moka-Views'!
!MKSplitView commentStamp!
I am the superclass of all split views. I arrange two child view with a splitter between them.

## API

Create instances using the class-side method `firstView:secondView:`.!

!MKSplitView methodsFor: 'accessing'!

children
	^ { self firstView. self secondView }
!

cssClass
	^ super cssClass, ' mk_split_view'
!

firstView
	^ firstView
!

firstView: aView
	firstView := MKDecorator decorate: aView
!

minimumThickness
	^ minimumThickness ifNil: [ self defaultMinimumThickness ]
!

minimumThickness: aNumber
	minimumThickness := aNumber
!

secondView
	^ secondView
!

secondView: aView
	secondView := MKDecorator decorate: aView
!

splitter
	"Answer the `splitter` TagBrush"
	
	^ splitter
!

splitterCssClass
	^ 'mk_splitter'
!

thickness
	^ thickness ifNil: [ self defaultThickness ]
!

thickness: aNumber
	thickness := aNumber
! !

!MKSplitView methodsFor: 'defaults'!

defaultMinimumThickness
	^ 50
!

defaultThickness
	^ 300
! !

!MKSplitView methodsFor: 'rendering'!

renderContentOn: html
	html with: self firstView.
	splitter := html div class: self splitterCssClass.
	html with: self secondView.
	
	self controller placeSplitter: self thickness
! !

!MKSplitView class methodsFor: 'instance creation'!

firstView: aView secondView: anotherView
	^ self new
		firstView: aView;
		secondView: anotherView;
		yourself
! !

MKSplitView subclass: #MKHorizontalSplitView
	instanceVariableNames: ''
	package: 'Moka-Views'!
!MKHorizontalSplitView commentStamp!
I split my child views vertically.!

!MKHorizontalSplitView methodsFor: 'accessing'!

cssClass
	^ super cssClass, ' horizontal'
!

leftThickness: aNumber
	self thickness: aNumber.
	self controller: MKLeftFixedHorizontalSplitController new
!

rightThickness: aNumber
	self thickness: aNumber.
	self controller: MKRightFixedHorizontalSplitController new
!

secondView: aView
	super secondView: aView.
	self secondView 
		right: 0;
		left: 'auto'
! !

!MKHorizontalSplitView methodsFor: 'defaults'!

defaultControllerClass
	^ MKLeftFixedHorizontalSplitController
! !

!MKHorizontalSplitView methodsFor: 'private'!

setupEventHandlers
	splitter asJQuery draggable: #{ 
    	'axis' -> 'x'. 
        'containment' -> splitter asJQuery parent.
		'helper' -> 'clone'.
		'cursor' -> 'ew-resize'.
		'stop' -> [ self resized ].
        'drag' -> [ :event :ui | self controller onResize: event helper: ui ] }
! !

MKSplitView subclass: #MKVerticalSplitView
	instanceVariableNames: ''
	package: 'Moka-Views'!
!MKVerticalSplitView commentStamp!
I split my child views horizontally.!

!MKVerticalSplitView methodsFor: 'accessing'!

bottomThickness: aNumber
	self thickness: aNumber.
	self controller: MKBottomFixedVerticalSplitController new
!

cssClass
	^ super cssClass, ' vertical'
!

secondView: aView
	super secondView: aView.
	self secondView 
		bottom: 0;
		top: 'auto'
!

topThickness: aNumber
	self thickness: aNumber.
	self controller: MKTopFixedVerticalSplitController new
! !

!MKVerticalSplitView methodsFor: 'defaults'!

defaultControllerClass
	^ MKTopFixedVerticalSplitController
! !

!MKVerticalSplitView methodsFor: 'private'!

setupEventHandlers
	splitter asJQuery draggable: #{ 
    	'axis' -> 'y'. 
        'containment' -> splitter asJQuery parent.
		'cursor' -> 'ns-resize'.
		'helper' -> 'clone'.
		'stop' -> [ self resized ].
        'drag' -> [ :event :ui | self controller onResize: event helper: ui ] }
! !

MKSingleAspectView subclass: #MKTextAreaView
	instanceVariableNames: ''
	package: 'Moka-Views'!
!MKTextAreaView commentStamp!
I am an text area view. My default controller is `MKAnyKeyInputController`.

My controller must answer to `#onKeyPressed:`.!

!MKTextAreaView methodsFor: 'accessing'!

cssClass
	^ super cssClass, ' mk_textarea'
!

tag
	^ 'textarea'
!

value
	^ root asJQuery val
! !

!MKTextAreaView methodsFor: 'defaults'!

defaultControllerClass
	^ MKAnyKeyInputController
!

defaultLayout
	^ super defaultLayout
		width: 160;
		height: 80;
		yourself
! !

!MKTextAreaView methodsFor: 'rendering'!

renderContentOn: html
	root with: self aspectValue
! !

!MKTextAreaView methodsFor: 'updating'!

update
	root ifNotNil: [ root asJQuery val: self aspectValue ]
! !

MKTextAreaView subclass: #MKInputView
	instanceVariableNames: ''
	package: 'Moka-Views'!
!MKInputView commentStamp!
I am an input view. My default controller is `MKEnterInputController`.

My controller must answer to `#onKeyPressed:`.!

!MKInputView methodsFor: 'accessing'!

cssClass
	^ 'moka_view mk_input'
!

tag
	^ 'input'
! !

!MKInputView methodsFor: 'defaults'!

defaultControllerClass
	^ MKEnterInputController
!

defaultLayout
	^ super defaultLayout
		width: 160;
		height: 24;
		yourself
! !

!MKInputView methodsFor: 'rendering'!

renderContentOn: html
	root value: self aspectValue
! !

!MKInputView methodsFor: 'settings'!

triggerChangeOnAnyKey
	self controller: MKAnyKeyInputController new
!

triggerChangeOnEnter
	self controller: MKEnterInputController new
! !

