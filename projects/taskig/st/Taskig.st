Smalltalk current createPackage: 'Taskig' properties: #{}!
Object subclass: #ToDoApp
	instanceVariableNames: 'logger storage listModel listWidget'
	package: 'Taskig'!
!ToDoApp commentStamp!
A ToDoApp is the entry point for this ToDo application.Instance Variables	listModel:		Data model.	listWidget:	Main widget.	logger:			A logging facility.	storage:		A storage facility.!

!ToDoApp methodsFor: 'accessing'!

listWidget	^listWidget
! !

!ToDoApp methodsFor: 'initialize-release'!

initializeWithLogger: aLogger andStorage: aStorage 
	"Main initialization method."
	logger := aLogger.
	storage := aStorage.
	listModel := TaskList new.
	storage loadTasksInto: listModel.
	listWidget := TaskListWidget newWithList: listModel.
	self setupListeners.
	self open.
!

open
	"Show the main widget"
	listWidget appendToJQuery: '#playground' asJQuery
!

setupListeners	"Listen to changes in the listModel"	| announcer |	announcer := listModel announcer.	announcer on: NewTaskAdded do: [ :announcement | self onTaskAdded: announcement task ].	announcer on: TaskRemoved do: [ :announcement | self onTaskRemoved: announcement task ].
! !

!ToDoApp methodsFor: 'interaction'!

onTaskAdded: aTask	"The model has added a task. Save it."	storage save: aTask
!

onTaskRemoved: aTask	"The model has removed a task. Save it."	storage delete: aTask
! !

!ToDoApp class methodsFor: 'configuration'!

defaultLogger	^ NullLogger new
!

defaultStorage

	^ NullStorage new
! !

!ToDoApp class methodsFor: 'instance creation'!

main

	self newWithDefaults.
!

newWithDefaults	"Create a new ToDo application with default logger and storage."	| logger storage |	logger := self defaultLogger.	storage := self defaultStorage.	^self newWithLogger: logger andStorage: storage
!

newWithLogger: logger andStorage: storage	"Create a new ToDo application."	^self new initializeWithLogger: logger andStorage: storage
! !

!Object methodsFor: '*Taskig'!

todo: aString
	"Do nothing. This is for notes to the developer."
	^self
! !

!Error class methodsFor: '*Taskig-Exceptions'!

signal: aString
	    ^self new
		messageText: aString;
		signal
! !

