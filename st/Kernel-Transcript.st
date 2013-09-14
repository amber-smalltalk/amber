Smalltalk current createPackage: 'Kernel-Transcript'!
Object subclass: #ConsoleTranscript
	instanceVariableNames: 'textarea'
	package: 'Kernel-Transcript'!
!ConsoleTranscript commentStamp!
I am a specific transcript emitting to the JavaScript console.

If no other transcript is registered, I am the default.!

!ConsoleTranscript methodsFor: 'actions'!

open
! !

!ConsoleTranscript methodsFor: 'printing'!

clear
	"no op"
!

cr
	"no op"
!

show: anObject
"Smalltalk objects should have no trouble displaying themselves on the Transcript; Javascript objects don't know how, so must be wrapped in a JSObectProxy."
<console.log(String(_st(anObject)._asString()))>
! !

!ConsoleTranscript class methodsFor: 'initialization'!

initialize
	Transcript register: self new
! !

Object subclass: #Transcript
	instanceVariableNames: ''
	package: 'Kernel-Transcript'!
!Transcript commentStamp!
I am a facade for Transcript actions.

I delegate actions to the currently registered transcript.

## API

    Transcript 
        show: 'hello world';
        cr;
        show: anObject.!

Transcript class instanceVariableNames: 'current'!

!Transcript class methodsFor: 'instance creation'!

current
	^current
!

new
	self shouldNotImplement
!

open
	self current open
!

register: aTranscript
	current := aTranscript
! !

!Transcript class methodsFor: 'printing'!

clear
	self current clear
!

cr
	self current show: String cr
!

inspect: anObject
	self show: anObject
!

show: anObject
	self current show: anObject
! !

