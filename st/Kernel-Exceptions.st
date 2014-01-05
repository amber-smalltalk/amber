Smalltalk createPackage: 'Kernel-Exceptions'!
Object subclass: #Error
	instanceVariableNames: 'messageText'
	package: 'Kernel-Exceptions'!
!Error commentStamp!
From the ANSI standard:

This protocol describes the behavior of instances of class `Error`.
These are used to represent error conditions that prevent the normal continuation of processing.
Actual error exceptions used by an application may be subclasses of this class.
As `Error` is explicitly specified to be subclassable, conforming implementations must implement its behavior in a non-fragile manner.!

!Error methodsFor: 'accessing'!

context
	<return self.context>
!

jsStack
	<return self.stack>
!

messageText
	^ messageText
!

messageText: aString
	messageText := aString
! !

!Error methodsFor: 'initialization'!

initialize
	self messageText: 'Errorclass: ', (self class name).
! !

!Error methodsFor: 'signaling'!

resignal
	"Resignal the receiver without changing its exception context"
	
	<throw(self)>
!

signal
	<self.context = smalltalk.getThisContext(); self.smalltalkError = true; throw(self)>
!

signal: aString
	self messageText: aString.
	self signal
! !

!Error methodsFor: 'testing'!

isSmalltalkError
	<return self.smalltalkError === true>
! !

!Error class methodsFor: 'helios'!

heliosClass
	^ 'exception'
! !

!Error class methodsFor: 'instance creation'!

signal
	^ self new signal
!

signal: aString
	^ self new
		signal: aString
! !

Error subclass: #JavaScriptException
	instanceVariableNames: 'exception'
	package: 'Kernel-Exceptions'!
!JavaScriptException commentStamp!
A JavaScriptException is thrown when a non-Smalltalk exception occurs while in the Smalltalk stack.
See `boot.js` `inContext()` and `BlockClosure >> on:do:`!

!JavaScriptException methodsFor: 'accessing'!

context: aMethodContext
	"Set the context from the outside.
	See boot.js `inContext()` exception handling"
	
	<self.context = aMethodContext>
!

exception
	^ exception
!

exception: anException
	exception := anException
!

messageText
	<return 'JavaScript exception: ' + self["@exception"].toString()>
! !

!JavaScriptException class methodsFor: 'instance creation'!

on: anException
	^ self new
		exception: anException;
		yourself
!

on: anException context: aMethodContext
	^ self new
		exception: anException;
		context: aMethodContext;
		yourself
! !

Error subclass: #MessageNotUnderstood
	instanceVariableNames: 'message receiver'
	package: 'Kernel-Exceptions'!
!MessageNotUnderstood commentStamp!
This exception is provided to support `Object>>doesNotUnderstand:`.!

!MessageNotUnderstood methodsFor: 'accessing'!

message
	^ message
!

message: aMessage
	message := aMessage
!

messageText
	^ self receiver asString, ' does not understand #', self message selector
!

receiver
	^ receiver
!

receiver: anObject
	receiver := anObject
! !

Error subclass: #NonBooleanReceiver
	instanceVariableNames: 'object'
	package: 'Kernel-Exceptions'!
!NonBooleanReceiver commentStamp!
NonBooleanReceiver exceptions may be thrown when executing inlined methods such as `#ifTrue:` with a non boolean receiver.!

!NonBooleanReceiver methodsFor: 'accessing'!

object
	^ object
!

object: anObject
	object := anObject
! !

