Smalltalk current createPackage: 'Taskig-Exceptions' properties: #{}!
Error subclass: #DueDateShouldBeLaterThanCreationDateException
	instanceVariableNames: ''
	package: 'Taskig-Exceptions'!
!DueDateShouldBeLaterThanCreationDateException commentStamp!
A DueDateShouldBeLaterThanCreationDate is thrown when trying to create a task with a creation date that is later than the due date.!

!DueDateShouldBeLaterThanCreationDateException class methodsFor: 'not yet classified'!

message
	^'Due date should be later than creation date.'
! !

Error subclass: #EmptyDescriptionException
	instanceVariableNames: ''
	package: 'Taskig-Exceptions'!
!EmptyDescriptionException commentStamp!
An EmptyDescriptionException is an exeption thrown when trying to create a task with an empty description.!

!EmptyDescriptionException class methodsFor: 'not yet classified'!

message
	^'Description should not be empty.'
! !

!Error class methodsFor: '*Taskig-Exceptions'!

signal: aString
	    ^self new
		messageText: aString;
		signal
! !

