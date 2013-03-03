Smalltalk current createPackage: 'Helios-Environments' properties: #{}!
Object subclass: #HLEnvironment
	instanceVariableNames: ''
	package: 'Helios-Environments'!
!HLEnvironment commentStamp!
Abstract class defining common behavior for local and remote environments!

!HLEnvironment methodsFor: 'accessing'!

packages

	^ self subclassResponsibility
! !

!HLEnvironment methodsFor: 'actions'!

eval: someCode on: aReceiver

	^ self subclassResponsibility
! !

HLEnvironment subclass: #HLLocalEnvironment
	instanceVariableNames: ''
	package: 'Helios-Environments'!

!HLLocalEnvironment methodsFor: 'accessing'!

packages

	^ Smalltalk current packages
! !

!HLLocalEnvironment methodsFor: 'actions'!

eval: someCode on: aReceiver
	| compiler  |
	compiler := Compiler new.
	[compiler parseExpression: someCode] on: Error do: [:ex |
		^window alert: ex messageText].
	^(compiler eval: (compiler compile: 'doIt ^[', someCode, '] value' forClass: DoIt)) fn applyTo: aReceiver arguments: #()
! !

HLEnvironment subclass: #HLRemoteEnvironment
	instanceVariableNames: ''
	package: 'Helios-Environments'!

!HLRemoteEnvironment methodsFor: 'accessing'!

packages
	"Answer the remote environment's packages"
  
	"to-do"
    
    "Note for future self and friends:
    the problem with remote stuff is that the answers shouldn't be expected to be
    received in a syncrhonous fashion. Everything network is asyc, so you *are going to deal with callbacks* here"
! !

!HLRemoteEnvironment methodsFor: 'actions'!

eval: someCode on: aReceiver

	"Note for future self and friends:
    whatever way this compilation happens on the other side, 
    it should return a proxy to the remote resulting object"
    
    self notYetImplemented
! !

Object subclass: #HLRemoteObject
	instanceVariableNames: ''
	package: 'Helios-Environments'!
!HLRemoteObject commentStamp!
This is a local proxy to a remote object.
Tipically useful for evaluating and inspecting and interacting with instances of a remote VM.!

!HLRemoteObject methodsFor: 'actions'!

doesNotUnderstand: aMessage

	"to-do

	aham, blah blah

	super doesNotUnderstand: aMessage"
!

inspectOn: anInspector

	"to-do"

	"this is a source of so much fun..."
!

printString
	^ 'this is a remote object'
! !

