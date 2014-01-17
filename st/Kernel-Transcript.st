Smalltalk createPackage: 'Kernel-Transcript'!
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
	Transcript registerIfNone: self new
! !

