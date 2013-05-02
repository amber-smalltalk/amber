Smalltalk current createPackage: 'Kernel-Announcements'!
Object subclass: #AnnouncementSubscription
	instanceVariableNames: 'valuable announcementClass'
	package: 'Kernel-Announcements'!
!AnnouncementSubscription commentStamp!
I am a single entry in a subscription registry of an `Announcer`.
Several subscriptions by the same object is possible.!

!AnnouncementSubscription methodsFor: 'accessing'!

announcementClass
	^ announcementClass
!

announcementClass: aClass
	announcementClass := aClass
!

block
	"Use #valuable instead"
	
	self deprecatedAPI.
	^ self valuable
!

block: aValuable
	"Use #valuable instead"
	
	self deprecatedAPI.
	self valuable: aValuable
!

receiver
	^ self valuable receiver
!

valuable
	^ valuable
!

valuable: aValuable
	valuable := aValuable
! !

!AnnouncementSubscription methodsFor: 'announcing'!

deliver: anAnnouncement
	(self handlesAnnouncement: anAnnouncement)
		ifTrue: [self valuable value: anAnnouncement]
!

handlesAnnouncement: anAnnouncement
	"anAnnouncement might be announced from within another Amber environment"
	
	^ (Smalltalk current at: self announcementClass name)
		ifNil: [ ^ false ]
		ifNotNil: [ :class |
		class includesBehavior: (Smalltalk current at: anAnnouncement class theNonMetaClass name) ]
! !

Object subclass: #Announcer
	instanceVariableNames: 'registry subscriptions'
	package: 'Kernel-Announcements'!
!Announcer commentStamp!
I hold annoncement subscriptions (instances of `AnnouncementSubscription`) in a private registry.
I announce (trigger) announces, which are then dispatched to all subscriptions.

The code is based on the announcements as [described by Vassili Bykov](http://www.cincomsmalltalk.com/userblogs/vbykov/blogView?searchCategory=Announcements%20Framework).

## API

Use `#announce:` to trigger an announcement.

Use `#on:do:` or `#on:send:to:` to register subscriptions.

When using `#on:send:to:`, unregistration can be done with `#unregister:`.

## Usage example:

    SystemAnnouncer current
        on: ClassAdded
        do: [ :ann | window alert: ann theClass name, ' added' ].!

!Announcer methodsFor: 'announcing'!

announce: anAnnouncement
	subscriptions do: [ :each |
		each deliver: anAnnouncement ]
! !

!Announcer methodsFor: 'initialization'!

initialize
	super initialize.
	subscriptions := OrderedCollection new
! !

!Announcer methodsFor: 'subscribing'!

on: aClass do: aBlock
	subscriptions add: (AnnouncementSubscription new
		valuable: aBlock;
		announcementClass: aClass;
		yourself)
!

on: aClass send: aSelector to: anObject
	subscriptions add: (AnnouncementSubscription new
		valuable: (MessageSend new
			receiver: anObject;
			selector: aSelector;
			yourself);
		announcementClass: aClass;
		yourself)
!

unsubscribe: anObject
	subscriptions := subscriptions reject: [ :each |
		each receiver = anObject ]
! !

Announcer subclass: #SystemAnnouncer
	instanceVariableNames: ''
	package: 'Kernel-Announcements'!
!SystemAnnouncer commentStamp!
My unique instance is the global announcer handling all Amber system-related announces.

## API

Access to the unique instance is done via `#current`!

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

SystemAnnouncement subclass: #ClassAnnouncement
	instanceVariableNames: 'theClass'
	package: 'Kernel-Announcements'!
!ClassAnnouncement commentStamp!
I am the abstract superclass of class-related announcements.!

!ClassAnnouncement methodsFor: 'accessing'!

theClass
	^ theClass
!

theClass: aClass
	theClass := aClass
! !

ClassAnnouncement subclass: #ClassAdded
	instanceVariableNames: ''
	package: 'Kernel-Announcements'!
!ClassAdded commentStamp!
I am emitted when a class is added to the system.
See ClassBuilder >> #addSubclassOf:... methods!

ClassAnnouncement subclass: #ClassCommentChanged
	instanceVariableNames: ''
	package: 'Kernel-Announcements'!
!ClassCommentChanged commentStamp!
I am emitted when the comment of a class changes. (Behavior >> #comment)!

ClassAnnouncement subclass: #ClassDefinitionChanged
	instanceVariableNames: ''
	package: 'Kernel-Announcements'!
!ClassDefinitionChanged commentStamp!
I am emitted when the definition of a class changes.
See ClassBuilder >> #class:instanceVariableNames:!

ClassAnnouncement subclass: #ClassMigrated
	instanceVariableNames: 'oldClass'
	package: 'Kernel-Announcements'!
!ClassMigrated commentStamp!
I am emitted when a class is migrated.!

!ClassMigrated methodsFor: 'accessing'!

oldClass
	^ oldClass
!

oldClass: aClass
	oldClass := aClass
! !

ClassAnnouncement subclass: #ClassMoved
	instanceVariableNames: 'oldPackage'
	package: 'Kernel-Announcements'!
!ClassMoved commentStamp!
I am emitted when a class is moved from one package to another.!

!ClassMoved methodsFor: 'accessing'!

oldPackage
	^ oldPackage
!

oldPackage: aPackage
	oldPackage := aPackage
! !

ClassAnnouncement subclass: #ClassRemoved
	instanceVariableNames: ''
	package: 'Kernel-Announcements'!
!ClassRemoved commentStamp!
I am emitted when a class is removed.
See Smalltalk >> #removeClass:!

ClassAnnouncement subclass: #ClassRenamed
	instanceVariableNames: ''
	package: 'Kernel-Announcements'!
!ClassRenamed commentStamp!
I am emitted when a class is renamed.
See ClassBuilder >> #renameClass:to:!

SystemAnnouncement subclass: #MethodAnnouncement
	instanceVariableNames: 'method'
	package: 'Kernel-Announcements'!
!MethodAnnouncement commentStamp!
I am the abstract superclass of method-related announcements.!

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

MethodAnnouncement subclass: #MethodModified
	instanceVariableNames: 'oldMethod'
	package: 'Kernel-Announcements'!

!MethodModified methodsFor: 'accessing'!

oldMethod
	^ oldMethod
!

oldMethod: aMethod
	oldMethod := aMethod
! !

MethodAnnouncement subclass: #MethodMoved
	instanceVariableNames: 'oldProtocol'
	package: 'Kernel-Announcements'!

!MethodMoved methodsFor: 'accessing'!

oldProtocol
	^ oldProtocol
!

oldProtocol: aString
	oldProtocol := aString
! !

MethodAnnouncement subclass: #MethodRemoved
	instanceVariableNames: ''
	package: 'Kernel-Announcements'!

SystemAnnouncement subclass: #PackageAnnouncement
	instanceVariableNames: 'package'
	package: 'Kernel-Announcements'!

!PackageAnnouncement methodsFor: 'accessing'!

package
	^ package
!

package: aPackage
	package := aPackage
! !

PackageAnnouncement subclass: #PackageAdded
	instanceVariableNames: ''
	package: 'Kernel-Announcements'!

PackageAnnouncement subclass: #PackageRemoved
	instanceVariableNames: ''
	package: 'Kernel-Announcements'!

SystemAnnouncement subclass: #ProtocolAnnouncement
	instanceVariableNames: 'theClass protocol'
	package: 'Kernel-Announcements'!

!ProtocolAnnouncement methodsFor: 'accessing'!

protocol
	^ protocol
!

protocol: aString
	protocol := aString
!

theClass
	^ theClass
!

theClass: aClass
	theClass := aClass
! !

ProtocolAnnouncement subclass: #ProtocolAdded
	instanceVariableNames: ''
	package: 'Kernel-Announcements'!

ProtocolAnnouncement subclass: #ProtocolRemoved
	instanceVariableNames: ''
	package: 'Kernel-Announcements'!

