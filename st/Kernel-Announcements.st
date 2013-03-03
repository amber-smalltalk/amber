Smalltalk current createPackage: 'Kernel-Announcements' properties: #{}!
Object subclass: #AnnouncementSubscription
	instanceVariableNames: 'block announcementClass'
	package: 'Kernel-Announcements'!
!AnnouncementSubscription commentStamp!
The subscription is a single entry in a subscription registry of an `Announcer`.
Several subscriptions by the same object is possible.!

!AnnouncementSubscription methodsFor: 'accessing'!

announcementClass
	^announcementClass
!

announcementClass: aClass
	announcementClass := aClass
!

block
	^block
!

block: aBlock
	block := aBlock
! !

!AnnouncementSubscription methodsFor: 'announcing'!

deliver: anAnnouncement
	(self handlesAnnouncement: anAnnouncement)
		ifTrue: [self block value: anAnnouncement]
!

handlesAnnouncement: anAnnouncement
	^anAnnouncement isKindOf: self announcementClass
! !

Object subclass: #Announcer
	instanceVariableNames: 'registry subscriptions'
	package: 'Kernel-Announcements'!
!Announcer commentStamp!
The code is based on the announcements as [described by Vassili Bykov](http://www.cincomsmalltalk.com/userblogs/vbykov/blogView?searchCategory=Announcements%20Framework).
The Announcer holds annoncement subscriptions (`AnnouncementSubscription`) in a private registry.

Use `#on:do:` to register subscriptions.!

!Announcer methodsFor: 'announcing'!

announce: anAnnouncement
	subscriptions do: [:each |
		each deliver: anAnnouncement]
! !

!Announcer methodsFor: 'initialization'!

initialize
	super initialize.
	subscriptions := Array new
! !

!Announcer methodsFor: 'subscribing'!

on: aClass do: aBlock
	subscriptions add: (AnnouncementSubscription new
		block: aBlock;
		announcementClass: aClass;
		yourself)
! !

Announcer subclass: #SystemAnnouncer
	instanceVariableNames: ''
	package: 'Kernel-Announcements'!
!SystemAnnouncer commentStamp!
My unique instance #current is the global announcer handling all Amber system-related announces!

SystemAnnouncer class instanceVariableNames: 'current'!

!SystemAnnouncer class methodsFor: 'accessing'!

current
	^ current ifNil: [ current := super new ]
! !

!SystemAnnouncer class methodsFor: 'instance creation'!

new
	self shouldNotImplement
! !

Object subclass: #SystemAnnouncement
	instanceVariableNames: 'theClass'
	package: 'Kernel-Announcements'!
!SystemAnnouncement commentStamp!
I am the superclass of all system announcements!

!SystemAnnouncement methodsFor: 'accessing'!

theClass
	^ theClass
!

theClass: aClass
	theClass := aClass
! !

SystemAnnouncement subclass: #ClassAdded
	instanceVariableNames: ''
	package: 'Kernel-Announcements'!
!ClassAdded commentStamp!
I am emitted when a class is added to the system.
See ClassBuilder >> #addSubclassOf:... methods!

SystemAnnouncement subclass: #ClassCommentChanged
	instanceVariableNames: ''
	package: 'Kernel-Announcements'!
!ClassCommentChanged commentStamp!
I am emitted when the comment of a class changes. (Behavior >> #comment)!

SystemAnnouncement subclass: #ClassDefinitionChanged
	instanceVariableNames: ''
	package: 'Kernel-Announcements'!
!ClassDefinitionChanged commentStamp!
I am emitted when the defintion of a class changes.
See ClassBuilder >> #class:instanceVariableNames:!

SystemAnnouncement subclass: #ClassRemoved
	instanceVariableNames: ''
	package: 'Kernel-Announcements'!
!ClassRemoved commentStamp!
I am emitted when a class is removed.
See Smalltalk >> #removeClass:!

SystemAnnouncement subclass: #ClassRenamed
	instanceVariableNames: ''
	package: 'Kernel-Announcements'!
!ClassRenamed commentStamp!
I am emitted when a class is renamed.
See ClassBuilder >> #renameClass:to:!

SystemAnnouncement subclass: #MethodAnnouncement
	instanceVariableNames: 'method'
	package: 'Kernel-Announcements'!

!MethodAnnouncement methodsFor: 'accessing'!

method
	^ method
!

method: aCompiledMethod
	method := aCompiledMethod
! !

MethodAnnouncement subclass: #MethodAdded
	instanceVariableNames: ''
	package: 'Kernel-Announcements'!

MethodAnnouncement subclass: #MethodRemoved
	instanceVariableNames: ''
	package: 'Kernel-Announcements'!

