Smalltalk current createPackage: 'Helios-Transcript'!
HLWidget subclass: #HLTranscript
	instanceVariableNames: 'textarea'
	package: 'Helios-Transcript'!
!HLTranscript commentStamp!
I am a widget responsible for displaying transcript contents.

## Transcript API

    Transcript 
        show: 'hello world';
        cr;
        show: anObject.

    Transcript clear.

See the `Transcript` class.!

!HLTranscript methodsFor: 'actions'!

clear
	textarea asJQuery text: ''
!

show: aString
	textarea ifNotNil: [
 		textarea asJQuery append: aString asString ]
! !

!HLTranscript methodsFor: 'initialization'!

initialize
	super initialize.
	self register
! !

!HLTranscript methodsFor: 'registration'!

register
	HLTranscriptHandler register: self
!

unregister
	super unregister.
	HLTranscriptHandler unregister: self
! !

!HLTranscript methodsFor: 'rendering'!

renderOn: html
	html div
		class: 'transcript';
		with: [ textarea := html textarea ]
! !

Object subclass: #HLTranscriptHandler
	instanceVariableNames: ''
	package: 'Helios-Transcript'!
!HLTranscriptHandler commentStamp!
I handle transcript events, dispatching them to all instances of `HLTranscript`.

## API

On class initialization I am automatically registered as the current transcript.!

HLTranscriptHandler class instanceVariableNames: 'transcripts'!

!HLTranscriptHandler class methodsFor: 'accessing'!

transcripts
	^ transcripts ifNil: [ transcripts := OrderedCollection new ]
! !

!HLTranscriptHandler class methodsFor: 'initialization'!

initialize
	Transcript register: self
! !

!HLTranscriptHandler class methodsFor: 'registration'!

clear
	self transcripts do: [ :each |
		each clear ]
!

register: aTranscript
	self transcripts add: aTranscript
!

show: aString
	self transcripts do: [ :each |
		each show: aString ]
!

unregister: aTranscript
	self transcripts remove: aTranscript
! !

