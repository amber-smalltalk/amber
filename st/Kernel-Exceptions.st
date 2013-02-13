Smalltalk current createPackage: 'Kernel-Exceptions' properties: #{}!
Object subclass: #Error
	instanceVariableNames: 'messageText'
	package: 'Kernel-Exceptions'!

!Error methodsFor: 'accessing'!

context
	<return self.context>
!

jsStack
	<return self.stack>
!

messageText
	^messageText
!

messageText: aString
	messageText := aString
! !

!Error methodsFor: 'initialization'!

initialize
	self messageText: 'Errorclass: ', (self class name).
! !

!Error methodsFor: 'signaling'!

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

!Error class methodsFor: 'instance creation'!

signal
	^self new signal
!

signal: aString
	    ^self new
		signal: aString
! !

Error subclass: #MessageNotUnderstood
	instanceVariableNames: 'message receiver'
	package: 'Kernel-Exceptions'!

!MessageNotUnderstood methodsFor: 'accessing'!

message
	^message
!

message: aMessage
	message := aMessage
!

messageText
	^self receiver asString, ' does not understand #', self message selector
!

receiver
	^receiver
!

receiver: anObject
	receiver := anObject
! !

Error subclass: #NonBooleanReceiver
	instanceVariableNames: 'object'
	package: 'Kernel-Exceptions'!

!NonBooleanReceiver methodsFor: 'accessing'!

object
	^ object
!

object: anObject
	object := anObject
! !

Object subclass: #ErrorHandler
	instanceVariableNames: ''
	package: 'Kernel-Exceptions'!

!ErrorHandler methodsFor: 'error handling'!

handleError: anError
	anError context ifNotNil: [self logErrorContext: anError context].
	self logError: anError
! !

!ErrorHandler methodsFor: 'private'!

log: aString
	console log: aString
!

logContext: aContext
	aContext home ifNotNil: [
		self logContext: aContext home].
	self log: aContext receiver asString, '>>', aContext selector asString
!

logError: anError
	self log: anError messageText
!

logErrorContext: aContext
	aContext ifNotNil: [
		aContext home ifNotNil: [
			self logContext: aContext home]]
! !

ErrorHandler class instanceVariableNames: 'current'!

!ErrorHandler class methodsFor: 'accessing'!

current
	^current ifNil: [current := self new]
!

setCurrent: anHandler
	current := anHandler
! !

!ErrorHandler class methodsFor: 'initialization'!

initialize
	self register
!

register
	ErrorHandler setCurrent: self new
! !

