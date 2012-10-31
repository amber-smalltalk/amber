Smalltalk current createPackage: 'Helios-Announcements' properties: #{}!
Object subclass: #HLAnnouncement
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLAnnouncement subclass: #HLItemSelected
	instanceVariableNames: 'item'
	package: 'Helios-Announcements'!

!HLItemSelected methodsFor: 'accessing'!

item
	^ item
!

item: anObject
	item := anObject
! !

!HLItemSelected class methodsFor: 'instance creation'!

on: anItem
	^ self new
    	item: anItem;
        yourself
! !

HLItemSelected subclass: #HLClassSelected
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLItemSelected subclass: #HLMethodSelected
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLItemSelected subclass: #HLPackageSelected
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLItemSelected subclass: #HLProtocolSelected
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLAnnouncement subclass: #HLShowCommentToggled
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLAnnouncement subclass: #HLShowInstanceToggled
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

