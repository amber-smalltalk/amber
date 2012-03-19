Smalltalk current createPackage: 'Kernel-Transcript' properties: #{}!
Object subclass: #Transcript
	instanceVariableNames: 'textarea'
	category: 'Kernel-Transcript'!

Transcript class instanceVariableNames: 'current'!

!Transcript class methodsFor: 'instance creation'!

open
    self current open
!

new
    self shouldNotImplement
!

current
    ^current
!

register: aTranscript
	current := aTranscript
! !

!Transcript class methodsFor: 'printing'!

show: anObject
    self current show: anObject
!

cr
    self current show: String cr
!

clear
    self current clear
! !

Object subclass: #ConsoleTranscript
	instanceVariableNames: 'textarea'
	category: 'Kernel-Transcript'!

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
	| string |
	string := anObject asString.
	<console.log(String(string))>
! !

!ConsoleTranscript class methodsFor: 'initialization'!

initialize
	Transcript register: self new
! !

