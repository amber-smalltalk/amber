Smalltalk current createPackage: 'Kernel-Transcript' properties: #{}!
Object subclass: #ConsoleTranscript
	instanceVariableNames: 'textarea'
	package: 'Kernel-Transcript'!

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

Object subclass: #Transcript
	instanceVariableNames: 'textarea'
	package: 'Kernel-Transcript'!

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

show: anObject
    self current show: anObject
! !

