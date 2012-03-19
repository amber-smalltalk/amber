Smalltalk current createPackage: 'Kernel-Exceptions' properties: #{}!
Object subclass: #Error
	instanceVariableNames: 'messageText'
	category: 'Kernel-Exceptions'!

!Error methodsFor: 'accessing'!

messageText
	^messageText
!

messageText: aString
	messageText := aString
!

context
	<return self.context>
!

jsStack
	<return self.stack>
! !

!Error methodsFor: 'signaling'!

signal
	<self.context = smalltalk.getThisContext(); self.smalltalkError = true; throw(self)>
! !

!Error methodsFor: 'testing'!

isSmalltalkError
	<return self.smalltalkError === true>
! !

!Error class methodsFor: 'instance creation'!

signal: aString
	    ^self new
		messageText: aString;
		signal
! !

Error subclass: #MessageNotUnderstood
	instanceVariableNames: 'message receiver'
	category: 'Kernel-Exceptions'!

!MessageNotUnderstood methodsFor: 'accessing'!

message
	^message
!

message: aMessage
	message := aMessage
!

receiver
	^receiver
!

receiver: anObject
	receiver := anObject
!

messageText
	^self receiver asString, ' does not understand #', self message selector
! !

Object subclass: #ErrorHandler
	instanceVariableNames: ''
	category: 'Kernel-Exceptions'!

!ErrorHandler methodsFor: 'error handling'!

handleError: anError
	anError context ifNotNil: [self logErrorContext: anError context].
	self logError: anError
! !

!ErrorHandler methodsFor: 'private'!

logContext: aContext
	aContext home ifNotNil: [
		self logContext: aContext home].
	self log: aContext receiver asString, '>>', aContext selector
!

logErrorContext: aContext
	aContext ifNotNil: [
		aContext home ifNotNil: [
			self logContext: aContext home]]
!

logError: anError
	self log: anError messageText
!

log: aString
	console log: aString
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

