Smalltalk current createPackage: 'Moka-Views'!
MKSingleAspectView subclass: #MKButtonView
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
	html with: self label
! !

!MKButtonView methodsFor: 'testing'!

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

MKView subclass: #MKContainerView
	instanceVariableNames: 'childView'
	package: 'Moka-Views'!
!MKContainerView commentStamp!
I display my single `childView`. 

I am used to switch between views.!

!MKContainerView methodsFor: 'accessing'!

childView
	^ childView
!

childView: aView
	childView := aView.
	self update
! !

!MKContainerView methodsFor: 'rendering'!

renderContentOn: html
	html with: self childView
! !

!MKContainerView class methodsFor: 'instance creation'!

childView: aView
	^ self new 
		childView: aView;
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

MKView subclass: #MKOverlayView
	instanceVariableNames: 'childView'
	package: 'Moka-Views'!

!MKOverlayView methodsFor: 'accessing'!

childView
	^ childView
!

childView: aView
	childView := aView
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

MKView subclass: #MKPaneView
	instanceVariableNames: 'views'
	package: 'Moka-Views'!
!MKPaneView commentStamp!
I am a view containing other views.

## API

Use `#addView:` to add a view to the pane.!

!MKPaneView methodsFor: 'accessing'!

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

MKPaneView subclass: #MKModalPaneView
	instanceVariableNames: 'overlay closeOnEnter closeOnClick'
	package: 'Moka-Views'!

!MKModalPaneView methodsFor: 'accessing'!

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

!MKModalPaneView methodsFor: 'defaults'!

defaultControllerClass
	^ MKModalPaneController
!

defaultLayout
	^ super defaultLayout
		centerY: 0;
		centerX: 0;
		width: 300;
		height: 200;
		yourself
! !

!MKModalPaneView methodsFor: 'rendering'!

renderOn: html
	super renderOn: html.
	root at: 'tabindex' put: '0'.
	root asJQuery focus.
	html with: self overlay
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
	instanceVariableNames: 'selectionAspect collectionAspect'
	package: 'Moka-Views'!
!MKSelectionView commentStamp!
I an abstract selection view of a list of elements.!

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
	self modalPaneView render.
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
	html with: self selectedItem
! !

!MKDropdownView methodsFor: 'views'!

listView
	^ listView ifNil: [
		listView := (MKDropdownListView 	
			model: self model
			collectionAspect: self collectionAspect
			selectionAspect: self selectionAspect)
				width: 'auto';
				height: 'auto';
				yourself ]
!

modalPaneView
	^ modalPaneView ifNil: [
		modalPaneView := MKModalPaneView new
			extraCssClass: 'mk_dropdown_pane';
			closeOnEnter: true;
			closeOnClick: true;
			addView: self listView;
			left: self position x;
			top: self position y;
			"Max height of the list"
			height: 400;
			yourself ]
! !

MKSelectionView subclass: #MKListView
	instanceVariableNames: 'displayBlock'
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

displayBlock
	^ displayBlock ifNil: [ self defaultDisplayBlock ]
!

displayBlock: aBlock
	displayBlock := aBlock
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
!

defaultDisplayBlock
	^ [ :item | item asString ]
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
		(parent get: 0) scrollTop: ((parent get: 0) scrollTop + aListItem height - (parent height - aListItem position top)) +10 ]
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

