Smalltalk current createPackage: 'Kernel-Announcements' properties: #{}!
Object subclass: #AnnouncementSubscription
	instanceVariableNames: 'block announcementClass'
	package: 'Kernel-Announcements'!

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

SystemAnnouncement subclass: #ClassCommentChanged
	instanceVariableNames: ''
	package: 'Kernel-Announcements'!

SystemAnnouncement subclass: #ClassDefinitionChanged
	instanceVariableNames: ''
	package: 'Kernel-Announcements'!

SystemAnnouncement subclass: #ClassRemoved
	instanceVariableNames: ''
	package: 'Kernel-Announcements'!

SystemAnnouncement subclass: #ClassRenamed
	instanceVariableNames: ''
	package: 'Kernel-Announcements'!

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

