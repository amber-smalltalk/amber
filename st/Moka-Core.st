Smalltalk createPackage: 'Moka-Core'!
Object subclass: #MKController
	instanceVariableNames: 'view model'
	package: 'Moka-Core'!
!MKController commentStamp!
I implement the Controller part of the MVC pattern in Moka.

I hold onto my `model` and `view`, set with `MKView >> controller:`.!

!MKController methodsFor: 'accessing'!

model
	^ model
!

model: aModel
	model := aModel
!

view
	^ view
!

view: aView
	view := aView
! !

!MKController methodsFor: 'actions'!

onChange: anEvent
!

onClick: anEvent
!

onDblClick: anEvent
!

onKeyDown: anEvent
!

onKeyPress: anEvent
!

onKeyUp: anEvent
!

onMouseEnter: anEvent
!

onMouseLeave: anEvent
!

onMouseMove: anEvent
!

onMouseOut: anEvent
!

onMouseOver: anEvent
! !

MKController subclass: #MKAspectsController
	instanceVariableNames: ''
	package: 'Moka-Core'!
!MKAspectsController commentStamp!
I am an abstract controller for performing one action using an `aspect` on a model.

## API

- Use `#aspect:` to plug a selector to be performed on the model
- Subclasses can either use `#performActionWith:` or `#performAction` to evaluate the `aspect` selector on the model with one or no argument.!

!MKAspectsController methodsFor: 'actions'!

performAspectAction: aSelector
	self model perform: aSelector
!

performAspectAction: aSelector with: anObject
	self model 
		perform: aSelector asMutator
		withArguments: { anObject }
! !

MKAspectsController subclass: #MKSingleAspectController
	instanceVariableNames: ''
	package: 'Moka-Core'!
!MKSingleAspectController commentStamp!
I am an abstract controller used with single aspect views.

My view must hold onto one aspect accessed with `#aspect`.!

!MKSingleAspectController methodsFor: 'actions'!

performAspectAction
	^ self performAspectAction: self view aspect
!

performAspectActionWith: anObject
	^ self 
		performAspectAction: self view aspect
		with: anObject
! !

Object subclass: #MKObservable
	instanceVariableNames: 'announcer'
	package: 'Moka-Core'!
!MKObservable commentStamp!
View models are typically subclasses of me. 

I implement the Observable part of the Observer pattern in Moka.

The observer pattern is implemented through an `announcer` object.

## API

- Listening

  Use `#on:do:` or `#on:send:to:` to listen to receiver changes

- Triggering

  `#changed:` is the builtin method used to trigger `#update:` in views.
  Use `#announce:` in subclasses to trigger announcements to listeners.!

!MKObservable methodsFor: 'announcements'!

announce: anAnnouncement
	announcer announce: anAnnouncement
!

changed: aSelector
	"Trigger `#update:` to all listening aspect views"
	
	self announce: (MKAspectChanged aspect: aSelector)
!

on: anAnnouncement do: aBlock
	announcer on: anAnnouncement do: aBlock
!

on: anAnnouncement send: aSelector to: anObject
	announcer on: anAnnouncement send: aSelector to: anObject
! !

!MKObservable methodsFor: 'initialization'!

initialize
	super initialize.
	announcer := Announcer new
! !

MKObservable subclass: #MKView
	instanceVariableNames: 'controller model root extraCssClass'
	package: 'Moka-Core'!
!MKView commentStamp!
I implement the View part of the MVC pattern in Moka.

## API
- Instance can be created with the `MKView class >> model:*` convenience methods
- rendering is done through `#renderContentOn:`, to be overridden in concrete view classes
- `#update` provide updating facility, refreshing the entire view
- subclasses can override `#defaultControllerClass` to provide a default controller specific to a view
- subclasses can override `#observeModel`
- Extra css classes can be added with `#extraCssClass:`.!

!MKView methodsFor: 'accessing'!

children
	"Answer all the sub-views of the receiver"
	^ #()
!

controller
	"Answer the current receiver's controller.
	If no controller is installed yet, install the `defaultController`
	of the receiver and answer it."
	
	controller ifNil: [ 
		self controller: self defaultController ].
	^ controller
!

controller: aController
	"Install `aController` to be the receiver's controller"
	
	controller := aController.
	aController 
		view: self;
		model: self model
!

cssClass
	^ String streamContents: [ :stream |
		stream << 'moka_view'.
		self extraCssClass ifNotEmpty: [
			stream << ' ' << self extraCssClass ] ]
!

cssStyle
	^ ''
!

extraCssClass
	^ extraCssClass ifNil: [ '' ]
!

extraCssClass: aString
	extraCssClass := aString
!

model
	^ model
!

model: aModel
	model := aModel.
	self observeModel
!

tag
	^ 'div'
! !

!MKView methodsFor: 'actions'!

blur
	root ifNotNil: [ root asJQuery blur ]
!

focus
	root ifNotNil: [ root asJQuery focus ]
!

remove
	"Removes the receiver from the DOM"
	root ifNotNil: [ root asJQuery remove ].
	
	self announce: (MKViewRemoved view: self)
!

resized
	"Action triggered when the view has been resized from the outside"
	
	self children do: [ :each | each resized ]
! !

!MKView methodsFor: 'adding'!

appendToBrush: aTagBrush
	self appendToJQuery: aTagBrush asJQuery
!

appendToJQuery: aJQuery
	self renderOn: (HTMLCanvas onJQuery: aJQuery)
! !

!MKView methodsFor: 'converting'!

asJQuery
	^ root asJQuery
! !

!MKView methodsFor: 'defaults'!

defaultControllerClass
	^ MKController
! !

!MKView methodsFor: 'dom'!

domPosition
	"Answer the position of the reciever in the page"
	
	| offset |
	offset := self asJQuery offset.
	^ offset left @ offset top
!

domSize
	^ self asJQuery width @ self asJQuery height
! !

!MKView methodsFor: 'factory'!

defaultController
	^ self defaultControllerClass new
! !

!MKView methodsFor: 'observing'!

observeModel
	"No op. Override in subclasses"
! !

!MKView methodsFor: 'private'!

setupEventHandlers
	root
		onClick: [ :event | self controller onClick: event ];
		onDblClick: [ :event | self controller onDblClick: event ];
		onMouseEnter: [ :event | self controller onMouseEnter: event ];
		onMouseLeave: [ :event | self controller onMouseLeave: event ];
		onMouseOver: [ :event | self controller onMouseOver: event ];
		onMouseOut: [ :event | self controller onMouseOut: event ];
		onMouseMove: [ :event | self controller onMouseMove: event ];
		onKeyDown: [ :event | self controller onKeyDown: event ];
		onKeyUp: [ :event | self controller onKeyUp: event ];
		onKeyPress: [ :event | self controller onKeyPress: event ];
		onChange: [ :event | self controller onChange: event ]
! !

!MKView methodsFor: 'rendering'!

render
	"Append the receiver to the BODY element"
	
	self appendToJQuery: 'body' asJQuery
!

renderContentOn: html
	"Main rendering method, override in subclasses."
!

renderOn: html
	"Basic rendering method.
	Do not override this method, but `#renderContentOn:`"
	
	root := (html tag: self tag)
		class: self cssClass;
		style: self cssStyle;
		yourself.
	root with: [ self renderContentOn: html ].
	
	self setupEventHandlers
! !

!MKView methodsFor: 'updating'!

update
	"Update the view's content. Override in subclasses to fine-tune updating"
	
	root ifNil: [ ^ self ].
	
	root asJQuery empty.
	[ :html | self renderContentOn: html ] 
		appendToJQuery: root asJQuery
! !

!MKView class methodsFor: 'instance creation'!

model: aModel
	^ self new
		model: aModel;
		yourself
!

model: aModel controller: aController
	^ (self model: aModel)
		controller: aController;
		yourself
! !

MKView subclass: #MKLayoutView
	instanceVariableNames: 'layout'
	package: 'Moka-Core'!
!MKLayoutView commentStamp!
I implement the View part of the MVC pattern in Moka.

## API
- Instance can be created with the `MKView class >> model:*` convenience methods
- rendering is done through `#renderContentOn:`, to be overridden in concrete view classes
- `#update` provide updating facility, refreshing the entire view
- subclasses can override `#defaultControllerClass` to provide a default controller specific to a view
- subclasses can override `#observeModel`
- Extra css classes can be added with `#extraCssClass:`.!

!MKLayoutView methodsFor: 'accessing'!

cssStyle
	^ self layout asCssString
!

layout
	^ layout ifNil: [ layout := self defaultLayout ]
! !

!MKLayoutView methodsFor: 'defaults'!

defaultLayout
	^ MKLayout new
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		yourself
! !

!MKLayoutView methodsFor: 'layout'!

bottom
	^ self layout bottom
!

bottom: aNumber
	self layout bottom: aNumber
!

centerX
	^ self layout centerX
!

centerX: aNumber
	self layout centerX: aNumber
!

centerY
	^ self layout centerY
!

centerY: aNumber
	self layout centerY: aNumber
!

height
	^ self layout height
!

height: aNumber
	self layout height: aNumber
!

left
	^ self layout left
!

left: aNumber
	self layout left: aNumber
!

right
	^ self layout right
!

right: aNumber
	self layout right: aNumber
!

top
	^ self layout top
!

top: aNumber
	self layout top: aNumber
!

width
	^ self layout width
!

width: aNumber
	self layout width: aNumber
! !

!MKLayoutView class methodsFor: 'instance creation'!

model: aModel
	^ self new
		model: aModel;
		yourself
!

model: aModel controller: aController
	^ (self model: aModel)
		controller: aController;
		yourself
! !

MKLayoutView subclass: #MKAspectsView
	instanceVariableNames: ''
	package: 'Moka-Core'!
!MKAspectsView commentStamp!
I am an abstract view which state depend on aspects of a model.!

!MKAspectsView methodsFor: 'accessing'!

valueForAspect: aSelector
	^ self model perform: aSelector
! !

!MKAspectsView methodsFor: 'defaults'!

defaultControllerClass
	^ MKAspectController
! !

!MKAspectsView methodsFor: 'observing'!

observeModel
	super observeModel.
	
	self model
		on: MKAspectChanged
		send: 'update:'
		to: self
! !

!MKAspectsView methodsFor: 'updating'!

update: anAnnouncement
	"Override in subclasses to match the view's aspect(s)"
! !

MKAspectsView subclass: #MKSingleAspectView
	instanceVariableNames: 'aspect'
	package: 'Moka-Core'!
!MKSingleAspectView commentStamp!
I am an abstract view which state depend on an `aspect` of a model. 

##API

- Use the `#aspect:` to listen to a specific aspect of a model. Changes will then trigger `#update`.!

!MKSingleAspectView methodsFor: 'accessing'!

aspect
	^ aspect
!

aspect: aSelector
	aspect := aSelector
!

aspectValue
	^ self valueForAspect: self aspect
! !

!MKSingleAspectView methodsFor: 'defaults'!

defaultControllerClass
	^ MKSingleAspectController
! !

!MKSingleAspectView methodsFor: 'updating'!

update: anAnnouncement
	anAnnouncement aspect = self aspect ifTrue: [
		self update ]
! !

!MKSingleAspectView class methodsFor: 'instance creation'!

model: aModel aspect: aSelector
	^ (self model: aModel)
		aspect: aSelector;
		yourself
! !

MKLayoutView subclass: #MKDecorator
	instanceVariableNames: 'decorated'
	package: 'Moka-Core'!
!MKDecorator commentStamp!
I am root class of the decorator pattern in Moka. 

I am used to add rendering and/or behavior to other views.

## API

To decorate a view, use the class-side `#decorate:` method.!

!MKDecorator methodsFor: 'accessing'!

children
	^ { self decorated }
!

decorated
	^ decorated
!

decorated: aView
	decorated := aView.
	self observeDecorated
! !

!MKDecorator methodsFor: 'observing'!

observeDecorated
	"Override in subclasses"
! !

!MKDecorator methodsFor: 'rendering'!

renderContentOn: html
	html with: self decorated
! !

!MKDecorator class methodsFor: 'instance creation'!

decorate: aView
	^ self new
		decorated: aView;
		yourself
! !

