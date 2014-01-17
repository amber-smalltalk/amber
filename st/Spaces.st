Smalltalk createPackage: 'Spaces'!
Object subclass: #ObjectSpace
	instanceVariableNames: 'frame'
	package: 'Spaces'!
!ObjectSpace commentStamp!
I am a connection to another Smalltalk environment.
The implementation creates an iframe on the same location as the window, and connect to the Amber environment.



## Usage example:

	| space |
	
	space := ObjectSpace new.
	space do: [ smalltalk ] "Answers aSmalltalk"
	(space do: [ smalltalk ]) == smalltalk "Answers false"
	
	space release "Remove the object space environment"!

!ObjectSpace methodsFor: 'accessing'!

frame
	^ frame
! !

!ObjectSpace methodsFor: 'evaluating'!

do: aBlock
	self isConnected ifFalse: [ ^ ObjectSpaceConnectionError signal ].
	^ frame contentWindow eval: '(', aBlock compiledSource, ')()'
! !

!ObjectSpace methodsFor: 'events'!

whenReadyDo: aBlock
	frame asJQuery
		bind: 'load'
		do: aBlock
! !

!ObjectSpace methodsFor: 'initialization'!

connectTo: aFrame
	self release.
	frame := aFrame
!

create
	'body' asJQuery append: '<iframe style="display: none;"></iframe>'.
	frame := 'iframe' asJQuery get last.
	frame contentWindow location: window location
!

initialize
	super initialize.
	self create
!

isConnected
	^ self frame notNil
! !

!ObjectSpace methodsFor: 'releasing'!

destroy
	frame ifNil: [ ^ self ].
	frame asJQuery remove.

	self release
!

release
	frame := nil
! !

!ObjectSpace class methodsFor: 'instance creation'!

on: aFrame
	^ self basicNew
		connectTo: aFrame;
		yourself
! !

Error subclass: #ObjectSpaceConnectionError
	instanceVariableNames: ''
	package: 'Spaces'!

!ObjectSpaceConnectionError methodsFor: 'accessing'!

messageText
	^ 'The ObjectSpace is not connected'
! !

TestCase subclass: #ObjectSpaceTest
	instanceVariableNames: 'space'
	package: 'Spaces'!

!ObjectSpaceTest methodsFor: 'initialization'!

setUp
	space := ObjectSpace new
!

tearDown
	space destroy
! !

!ObjectSpaceTest methodsFor: 'tests'!

testConnection
	space destroy.
	self deny: space isConnected.
	self should: [ space do: [] ] raise: ObjectSpaceConnectionError
!

testCreate

	self assert: space frame notNil.
	self assert: space isConnected
!

testEvaluation
	| result |

	space whenReadyDo: [
		result := space do: [ smalltalk ].

		self assert: result class name equals: 'Smalltalk'.
		self deny: result class = Smalltalk.
		self deny: result == smalltalk ]
!

testRelease

	self deny: space frame isNil.

	space release.
	
	self assert: space frame isNil
! !

