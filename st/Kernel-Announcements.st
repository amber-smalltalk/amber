Smalltalk current createPackage: 'Kernel-Announcements' properties: #{}!
Object subclass: #Announcer
	instanceVariableNames: 'registry subscriptions'
	category: 'Kernel-Announcements'!

!Announcer methodsFor: 'announcing'!

announce: anAnnouncement
	subscriptions do: [:each |
		each deliver: anAnnouncement]
! !

!Announcer methodsFor: 'initialization'!

initialize
	super initialize.
	subscriptions := OrderedCollection new
! !

!Announcer methodsFor: 'subscribing'!

on: aClass do: aBlock
	subscriptions add: (AnnouncementSubscription new
		block: aBlock;
		announcementClass: aClass;
		yourself)
! !

Object subclass: #AnnouncementSubscription
	instanceVariableNames: 'block announcementClass'
	category: 'Kernel-Announcements'!

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

