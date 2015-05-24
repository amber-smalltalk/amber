Smalltalk createPackage: 'Platform-Node'!
Object subclass: #NodePlatform
	instanceVariableNames: ''
	package: 'Platform-Node'!
!NodePlatform commentStamp!
I am `Platform` service implementation for node-like environment.!

!NodePlatform methodsFor: 'accessing'!

globals
	^ global
!

newXhr
	XMLHttpRequest
		ifNotNil: [ ^ XMLHttpRequest new ]
		ifNil: [ self error: 'XMLHttpRequest not available.' ]
! !

!NodePlatform class methodsFor: 'testing'!

initialize
	self isFeasible ifTrue: [ Platform registerIfNone: self new ]
!

isFeasible
<return typeof global !!== "undefined">
! !

