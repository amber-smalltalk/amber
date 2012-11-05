Smalltalk current createPackage: 'Helios-Announcements' properties: #{}!
Object subclass: #HLAnnouncement
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLAnnouncement subclass: #HLCodeHandled
	instanceVariableNames: 'code'
	package: 'Helios-Announcements'!

!HLCodeHandled methodsFor: 'accessing'!

code

	^ code
!

code: aModel

	code := aModel
! !

!HLCodeHandled class methodsFor: 'actions'!

on: aCodeModel

	^ self new 
    	code: aCodeModel;
        yourself
! !

HLCodeHandled subclass: #HLDoItExecuted
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLCodeHandled subclass: #HLDoItRequested
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLCodeHandled subclass: #HLInspectItRequested
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLCodeHandled subclass: #HLPrintItRequested
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLAnnouncement subclass: #HLDiveRequested
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

HLItemSelected subclass: #HLInstanceVariableSelected
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

HLAnnouncement subclass: #HLRefreshRequested
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLAnnouncement subclass: #HLShowCommentToggled
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLAnnouncement subclass: #HLShowInstanceToggled
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

