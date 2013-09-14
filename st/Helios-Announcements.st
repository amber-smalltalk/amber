Smalltalk current createPackage: 'Helios-Announcements'!
Object subclass: #HLAboutToChange
	instanceVariableNames: 'actionBlock'
	package: 'Helios-Announcements'!

!HLAboutToChange methodsFor: 'accessing'!

actionBlock
	^ actionBlock
!

actionBlock: aBlock
	actionBlock := aBlock
! !

Object subclass: #HLAnnouncement
	instanceVariableNames: ''
	package: 'Helios-Announcements'!
!HLAnnouncement commentStamp!
I am the root of the announcement class hierarchy used in the Helios UI.!

!HLAnnouncement class methodsFor: 'helios'!

heliosClass
	^ 'announcement'
! !

HLAnnouncement subclass: #HLCodeHandled
	instanceVariableNames: 'code'
	package: 'Helios-Announcements'!
!HLCodeHandled commentStamp!
I am the root class of announcements emitted by `HLCodeWidget`s!

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
!HLDoItExecuted commentStamp!
I am emitted by a `HLCodeWidget` after a DoIt has been executed.!

HLCodeHandled subclass: #HLDoItRequested
	instanceVariableNames: ''
	package: 'Helios-Announcements'!
!HLDoItRequested commentStamp!
I am emitted by a `HLCodeWidget` before a DoIt is executed.!

HLCodeHandled subclass: #HLInspectItRequested
	instanceVariableNames: ''
	package: 'Helios-Announcements'!
!HLInspectItRequested commentStamp!
I am emitted by a `HLCodeWidget` before an object is inspected.!

HLCodeHandled subclass: #HLPrintItRequested
	instanceVariableNames: ''
	package: 'Helios-Announcements'!
!HLPrintItRequested commentStamp!
I am emitted by a `HLCodeWidget` before an object is printed.!

HLAnnouncement subclass: #HLDebuggerContextSelected
	instanceVariableNames: 'context'
	package: 'Helios-Announcements'!

!HLDebuggerContextSelected methodsFor: 'accessing'!

context
	^ context
!

context: aContext
	context := aContext
! !

HLAnnouncement subclass: #HLDiveRequested
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLAnnouncement subclass: #HLEditComment
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLAnnouncement subclass: #HLErrorRaised
	instanceVariableNames: 'error'
	package: 'Helios-Announcements'!

!HLErrorRaised methodsFor: 'accessing'!

error
	^ error
!

error: anError
	error := anError
! !

HLErrorRaised subclass: #HLCompileErrorRaised
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLErrorRaised subclass: #HLParseErrorRaised
	instanceVariableNames: 'line column message'
	package: 'Helios-Announcements'!

!HLParseErrorRaised methodsFor: 'accessing'!

column
	^ column
!

column: anInteger
	column := anInteger
!

line
	^ line
!

line: anInteger
	line := anInteger
!

message
	^ message
!

message: aString
	message := aString
! !

HLErrorRaised subclass: #HLUnknownVariableErrorRaised
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLAnnouncement subclass: #HLFocusRequested
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLFocusRequested subclass: #HLClassesFocusRequested
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLFocusRequested subclass: #HLMethodsFocusRequested
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLFocusRequested subclass: #HLPackagesFocusRequested
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLFocusRequested subclass: #HLProtocolsFocusRequested
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLFocusRequested subclass: #HLSourceCodeFocusRequested
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLAnnouncement subclass: #HLInstVarAdded
	instanceVariableNames: 'theClass variableName'
	package: 'Helios-Announcements'!

!HLInstVarAdded methodsFor: 'accessing'!

theClass
	^ theClass
!

theClass: aClass
	theClass := aClass
!

variableName
	^ variableName
!

variableName: aString
	variableName := aString
! !

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

HLAnnouncement subclass: #HLSaveSourceCode
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLAnnouncement subclass: #HLSearchReferences
	instanceVariableNames: 'searchString'
	package: 'Helios-Announcements'!

!HLSearchReferences methodsFor: 'accessing'!

searchString
	^ searchString
!

searchString: aString
	searchString := aString
! !

HLAnnouncement subclass: #HLShowCommentToggled
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLAnnouncement subclass: #HLShowInstanceToggled
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLAnnouncement subclass: #HLSourceCodeSaved
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

