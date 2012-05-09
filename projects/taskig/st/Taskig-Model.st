Smalltalk current createPackage: 'Taskig-Model' properties: #{}!
Object subclass: #NullLogger
	instanceVariableNames: ''
	package: 'Taskig-Model'!
!NullLogger commentStamp!
A NullLogger does not log anything.This is usefull while running tests.!

!NullLogger methodsFor: 'logging'!

debug: aMessage
!

error: aMessage
!

fatal: aMessage
!

info: aMessage
!

trace: aMessage
!

warn: aMessage
! !

NullLogger subclass: #TranscriptLogger
	instanceVariableNames: ''
	package: 'Taskig-Model'!
!TranscriptLogger commentStamp!
A TranscriptLogger logs to the console.!

!TranscriptLogger methodsFor: 'logging'!

trace: aMessage
! !

Object subclass: #NullStorage
	instanceVariableNames: 'tasks'
	package: 'Taskig-Model'!
!NullStorage commentStamp!
A MemoryStorage is a singleton providing storage of tasks in the image.!

!NullStorage methodsFor: 'as yet unclassified'!

delete: aTask
!

initialize
!

loadTasksInto: aListModel
!

save: aTask
!

size
! !

NullStorage class instanceVariableNames: 'Instance'!

Object subclass: #Task
	instanceVariableNames: 'description creationDate dueDate'
	package: 'Taskig-Model'!
!Task commentStamp!
A Task represent a ToDo item.Instance Variables	creationDate:		<Date>	description:		<String>	dueDate:			<Date>!

!Task methodsFor: 'CRUD'!

updateWith: aTask	self shouldBeImplemented
! !

!Task methodsFor: 'initialize-release'!

initializeWithDescription: aDescription createdOn: aDate dueOn: anotherDate	"Main initializing method."	description 	:= aDescription.	creationDate 	:= aDate.	dueDate 		:= anotherDate.
! !

!Task class methodsFor: 'instance creation'!

newWithDefaults	"Constructor used when creating a new Task via UI."	^ self newWithDescription: 'What shall I do?'
!

newWithDescription: aDescription	| today |	today := self today.	^self newWithDescription: aDescription createdOn: today.
!

newWithDescription: aDescription createdOn: creationDate	^self newWithDescription: aDescription createdOn: creationDate dueOn: nil
!

newWithDescription: aDescription createdOn: creationDate dueOn: dueDate	self assertNotEmpty: aDescription.	"self assertCreationDateNotEmpty."		self assert: dueDate isLaterThan: creationDate.	^self new 		initializeWithDescription: aDescription 		createdOn: creationDate 		dueOn: dueDate
!

today	"Today's date"	^Date today
! !

!Task class methodsFor: 'validation'!

assert: dueDate isLaterThan: creationDate
	"Due date should be later than creation date."
	dueDate ifNotNil: [ dueDate >= creationDate 
		ifFalse: [ DueDateShouldBeLaterThanCreationDateException signal ] ]
!

assertNotEmpty: aDescription	"Validate that description is not empty."	aDescription asString ifEmpty: [ EmptyDescriptionException signal ]
! !

Object subclass: #TaskList
	instanceVariableNames: 'tasks announcer'
	package: 'Taskig-Model'!
!TaskList commentStamp!
A TaskList is a collection of tasks.!

!TaskList methodsFor: 'CRUD'!

addTask: aTask	| announcement |	tasks add: aTask.	announcement := NewTaskAdded newWith: aTask.	announcer announce: announcement.
!

do: aBlockClosure	tasks do: aBlockClosure
!

removeTask: aTask	| announcement |	tasks remove: aTask.	announcement := TaskRemoved newWith: aTask.	announcer announce:  announcement.
!

size	"Return the size of the tasks list."	^ tasks size
! !

!TaskList methodsFor: 'accessing'!

announcer	^announcer
! !

!TaskList methodsFor: 'initialize-release'!

initialize 	tasks := OrderedCollection new.	announcer := Announcer new.
! !

