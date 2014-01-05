Smalltalk createPackage: 'Moka-Announcements'!
Object subclass: #MKAnnouncement
	instanceVariableNames: ''
	package: 'Moka-Announcements'!
!MKAnnouncement commentStamp!
I am the root class of all announcements sent in Moka.!

MKAnnouncement subclass: #MKAspectChanged
	instanceVariableNames: 'aspect'
	package: 'Moka-Announcements'!
!MKAspectChanged commentStamp!
I am announced whenever an `aspect` is changed.

## API

Create instances using the class-side method `#aspect:`!

!MKAspectChanged methodsFor: 'accessing'!

aspect
	^ aspect
!

aspect: aSelector
	aspect := aSelector
! !

!MKAspectChanged class methodsFor: 'instance creation'!

aspect: aSelector
	^ self new
		aspect: aSelector;
		yourself
! !

MKAnnouncement subclass: #MKViewAnnouncement
	instanceVariableNames: 'view'
	package: 'Moka-Announcements'!
!MKViewAnnouncement commentStamp!
I am the root class of all viewn announcements. I hold a `view` object.

## API

Create instance with the class-side method `#view:`!

!MKViewAnnouncement methodsFor: 'accessing'!

view
	^ view
!

view: aView
	view := aView
! !

!MKViewAnnouncement class methodsFor: 'instance creation'!

view: aView
	^ self new
		view: aView;
		yourself
! !

MKViewAnnouncement subclass: #MKViewRemoved
	instanceVariableNames: ''
	package: 'Moka-Announcements'!
!MKViewRemoved commentStamp!
I am announced when a view gets removed from the DOM.!

MKViewAnnouncement subclass: #MKViewScroll
	instanceVariableNames: ''
	package: 'Moka-Announcements'!
!MKViewScroll commentStamp!
I am often used in conjunction with `MKScrollDecorator`.

I am announced when a view's scroll changed programatically!

