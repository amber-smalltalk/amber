Smalltalk createPackage: 'Platform-Browser'!
Object subclass: #BrowserTerminal
	instanceVariableNames: ''
	package: 'Platform-Browser'!
!BrowserTerminal commentStamp!
I am `Terminal` service implementation for browser.!

!BrowserTerminal methodsFor: 'actions'!

alert: aString
	^ window alert: aString
!

confirm: aString
	^ window confirm: aString
!

prompt: aString
	^ window prompt: aString
!

prompt: aString default: defaultString
	^ window prompt: aString default: defaultString
! !

!BrowserTerminal class methodsFor: 'testing'!

initialize
	self isFeasible ifTrue: [ Terminal registerIfNone: self new ]
!

isFeasible
<return typeof window !!== "undefined">
! !

!Object methodsFor: '*Platform-Browser'!

postMessageTo: aFrame
^ self postMessageTo: aFrame origin: '*'
!

postMessageTo: aFrame origin: aString
<return aFrame.postMessage(self, aString)>
! !

