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

beHandled
	<self.amberHandled = true>
!

beUnhandled
	<self.amberHandled = false>
!

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
!

signalerContext
	^ self signalerContextFrom: self context
!

signalerContextFrom: aContext
	"Find the first sender of signal(:), the first context which is neither 
	for an instance method nor for a class side method of Exception (or subclass).
	This will make sure that the same context is found for both, `Error signal` 
	and `Error new signal`"

	^ aContext findContextSuchThat: [ :context |
		(context receiver == self 
		or: [ context receiver == self class ]) not ]
! !

!Error methodsFor: 'initialization'!

initialize
	self messageText: 'Errorclass: ', (self class name).
! !

!Error methodsFor: 'signaling'!

resignal
	"Resignal the receiver without changing its exception context"
	
	<
		self.amberHandled = false;
		throw(self);
	>
!

signal
	<
		self.amberHandled = false;
		self.context = smalltalk.getThisContext(); 
		self.smalltalkError = true; throw(self)
	>
!

signal: aString
	self messageText: aString.
	self signal
! !

!Error methodsFor: 'testing'!

isSmalltalkError
	<return self.smalltalkError === true>
!

wasHandled
	<return self.amberHandled || false>
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

Error subclass: #Halt
	instanceVariableNames: ''
	package: 'Kernel-Exceptions'!
!Halt commentStamp!
I am provided to support `Object>>#halt`.!

!Halt methodsFor: 'accessing'!

messageText
	^ 'Halt encountered'
!

signalerContextFrom: aContext
	"specialized version to find the proper context to open the debugger on.
	This will find the first context whose method is no longer on `Halt` or 
	`Halt class` nor is `#halt` method itself."
	
	^ aContext findContextSuchThat: [ :context |
		(context receiver == self 
		or: [ (context receiver == self class) 
		or: [ context method selector = #halt ]]) not ]
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

Error subclass: #PackageCommitError
	instanceVariableNames: ''
	package: 'Kernel-Exceptions'!
!PackageCommitError commentStamp!
I get signaled when an attempt to commit a package has failed.!

