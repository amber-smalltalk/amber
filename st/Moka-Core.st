Smalltalk current createPackage: 'Moka-Core'!
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

MKController subclass: #MKAspectController
	instanceVariableNames: 'aspect'
	package: 'Moka-Core'!
!MKAspectController commentStamp!
I am an abstract controller for performing one action using an `aspect` on a model.

## API

- Use `#aspect:` to plug a selector to be performed on the model
- Subclasses can either use `#performActionWith:` or `#performAction` to evaluate the `aspect` selector on the model with one or no argument.!

!MKAspectController methodsFor: 'accessing'!

aspect
	^ aspect
!

aspect: aSelector
	aspect := aSelector
! !

!MKAspectController methodsFor: 'actions'!

performAction
	self aspect ifNotNil: [
		self model 
			perform: self aspect ]
!

performActionWith: anObject
	self aspect ifNil: [ ^ self ].
	
	self model 
		perform: self aspect asMutator
		withArguments: { anObject }
! !

Object subclass: #MKModel
	instanceVariableNames: 'announcer'
	package: 'Moka-Core'!
!MKModel commentStamp!
I implement the Model part of the MVC pattern in Moka.

I am the abstract superclass of all Moka model. The observer pattern is implemented through an `announcer` object.

## API

- Listening

  Use `#on:do:` or `#on:send:to:` to listen to model changes

- Triggering

  `#changed:` is the builtin method used to trigger `#update:` in views.
  Use `#announce:` in subclasses to trigger announcements to listeners.!

!MKModel methodsFor: 'announcements'!

announce: anAnnouncement
	announcer announce: anAnnouncement
!

changed: aSelector
	"Trigger `#update:` to all listening aspect views"
	
	self announce: (MKModelChanged aspect: aSelector)
!

on: anAnnouncement do: aBlock
	announcer on: anAnnouncement do: aBlock
!

on: anAnnouncement send: aSelector to: anObject
	announcer on: anAnnouncement send: aSelector to: anObject
! !

!MKModel methodsFor: 'initialization'!

initialize
	super initialize.
	announcer := Announcer new
! !

Object subclass: #MKModelChanged
	instanceVariableNames: 'aspect'
	package: 'Moka-Core'!
!MKModelChanged commentStamp!
I am an announcement announced when a model is changed.!

!MKModelChanged methodsFor: 'accessing'!

aspect
	^ aspect
!

aspect: aSelector
	aspect := aSelector
! !

!MKModelChanged class methodsFor: 'instance creation'!

aspect: aSelector
	^ self new
		aspect: aSelector;
		yourself
! !

Widget subclass: #MKView
	instanceVariableNames: 'controller model wrapper'
	package: 'Moka-Core'!
!MKView commentStamp!
I implement the View part of the MVC pattern in Moka.

## API
- Instance can be created with the `MKView class >> model:*` convenience methods
- rendering is done through `#renderContentOn:`, to be overridden in concrete view classes
- `#update` provide updating facility, refreshing the entire view
- subclasses can override `#defaultControllerClass` to provide a default controller specific to a view
- subclasses can override `#observeModel`.!

!MKView methodsFor: 'accessing'!

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

model
	^ model
!

model: aModel
	model := aModel.
	self observeModel
! !

!MKView methodsFor: 'defaults'!

defaultControllerClass
	^ MKController
! !

!MKView methodsFor: 'factory'!

defaultController
	^ self defaultControllerClass new
! !

!MKView methodsFor: 'observing'!

observeModel
	"No op. Override in subclasses"
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
	Wraps the content with a `wrapper` div for updating the receiver.
	
	Do not override this method, but `#renderContentOn:`"
	
	wrapper := html div
		class: 'moka_view';
		yourself.
	wrapper with: [ self renderContentOn: html ]
! !

!MKView methodsFor: 'updating'!

update
	"Update the view's content."
	
	wrapper ifNil: [ self error: 'The view has not been rendered yet' ].
	
	wrapper asJQuery empty.
	[ :html | self renderContentOn: html ] 
		appendToJQuery: wrapper asJQuery
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

MKView subclass: #MKAspectView
	instanceVariableNames: 'aspect label'
	package: 'Moka-Core'!
!MKAspectView commentStamp!
I am an abstract view which state depend on an `aspect` of a model. 

##API

- Use the `#aspect:` to listen to a specific aspect of a model. Changes will then trigger `#update`.!

!MKAspectView methodsFor: 'accessing'!

aspect
	^ aspect
!

aspect: aSelector
	aspect := aSelector
!

aspectValue
	^ self model perform: self aspect
!

controller: aController
	super controller: aController.
	aController aspect: self aspect
! !

!MKAspectView methodsFor: 'defaults'!

defaultControllerClass
	^ MKAspectController
! !

!MKAspectView methodsFor: 'observing'!

observeModel
	super observeModel.
	
	self model
		on: MKModelChanged
		send: 'update:'
		to: self
! !

!MKAspectView methodsFor: 'updating'!

update: anAnnouncement
	anAnnouncement aspect = self aspect
		ifTrue: [ self update ]
! !

!MKAspectView class methodsFor: 'instance creation'!

model: aModel aspect: aSelector
	^ (self model: aModel)
		aspect: aSelector;
		yourself
! !

