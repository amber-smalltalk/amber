Smalltalk current createPackage: 'Taskig-Tests' properties: #{}!
TestCase subclass: #ExceptionsTestCase
	instanceVariableNames: ''
	package: 'Taskig-Tests'!

!ExceptionsTestCase methodsFor: 'not yet classified'!

testRaisingEnException
	"Test raising an exception."
	[ EmptyDescriptionException signal ]
		on: EmptyDescriptionException
		do: [ :exception | self assert: exception messageText equals: EmptyDescriptionException message ]
! !

Object subclass: #Mock
	instanceVariableNames: 'selectorList'
	package: 'Taskig-Tests'!
!Mock commentStamp!
A generic Mock to make testing easier.!

!Mock methodsFor: 'as yet unclassified'!

doesNotUnderstand: aMessage
	"Execute block for selector, if present."
	selectorList at: aMessage selector asSymbol
		ifPresent: [ :valueBlock | valueBlock value ]
		ifAbsent: [ super doesNotUnderstand: aMessage ].
!

ignore: aSelectorSymbol 
	"Ignore this selector."
	selectorList at: aSelectorSymbol asSymbol put: [].
!

on: aSelectorSymbol do: aBlockClosure
	"Register a selector for later execution"
	selectorList at: aSelectorSymbol asSymbol put: aBlockClosure.
! !

!Mock methodsFor: 'initialize-release'!

initialize	selectorList := Dictionary new.
! !

TestCase subclass: #MockTestCase
	instanceVariableNames: ''
	package: 'Taskig-Tests'!

!MockTestCase methodsFor: 'as yet unclassified'!

testAmessageWithoutArguments	| mock visited |	visited := false.	mock := Mock new.	mock on: #testOne do: [ visited := true ].	mock testOne.	self assert: visited.
!

testAnIgonredMessage	| mock  |	mock := Mock new.	mock ignore: #thisMessage.	mock thisMessage.
!

testAnIgonredMessageShouldNotDoAnything	| mock  |	mock := Mock new.	mock ignore: #thisMessage.	mock thisMessage.
!

testAnUnknownMessage	| mock |	mock := Mock new.		self should: [ mock testOne ] raise: Error.
! !

TestCase subclass: #TaskListTestCase
	instanceVariableNames: 'task list'
	package: 'Taskig-Tests'!

!TaskListTestCase methodsFor: 'as yet unclassified'!

setUp	| today |	today := Date today.	task := Task newWithDescription: 'One' createdOn: today dueOn: nil.	list := TaskList new.
!

testAddingATask	self assert: list size equals: 0.	list addTask: task.	self assert: list size equals: 1.
!

testAddingATaskShouldTriggerAnnouncement	| visited |	visited := false.	list announcer on: NewTaskAdded do: [ :announcement | visited := true ].	list addTask: task.	self assert: visited.
!

testRemovingATask	list addTask: task.	self assert: list size equals: 1.	list removeTask: task.	self assert: list size equals: 0.
!

testRemovingATaskShouldTriggerAnnouncement	| visited |	visited := false.	list addTask: task.	list announcer on: TaskRemoved do: [ :announcement | visited := true ].	list removeTask: task.			self assert: visited.
! !

TestCase subclass: #TaskListWidgetCase
	instanceVariableNames: ''
	package: 'Taskig-Tests'!

!TaskListWidgetCase methodsFor: 'as yet unclassified'!

testNewTaskEventShouldAddAnEmptyTaskToTheModel	| widget listModel flag |	flag := false.	listModel := Mock new.	listModel ignore: #do:.	listModel on: #addTask: do: [ flag := true ].	widget := TaskListWidget newWithList: listModel.		widget onNewTask.	self assert: flag.
! !

TestCase subclass: #TaskTestCase
	instanceVariableNames: ''
	package: 'Taskig-Tests'!

!TaskTestCase methodsFor: 'as yet unclassified'!

testDescriptionShouldNotBeEmpty	self should: [ Task newWithDescription: '' createdOn: 1 dueOn: 2 ] 		raise: EmptyDescriptionException.
!

testDueDateIsNotMandatory	| today |	today := Date today.	self shouldnt: [ Task newWithDescription: 'One' createdOn: today dueOn: nil ] 		raise: Error.
!

testDueDateShouldBeLaterThanCreationDate	| today yesterday |	today := 3.	yesterday := 2.	self should: [ Task newWithDescription: 'Something to do' createdOn: today dueOn: yesterday ] 		raise: DueDateShouldBeLaterThanCreationDateException.
! !

TestCase subclass: #ToDoAppTestCase
	instanceVariableNames: ''
	package: 'Taskig-Tests'!

!ToDoAppTestCase methodsFor: 'as yet unclassified'!

testNewTaskGetsSaved	| app storageMock  visited widget |	visited := false.	storageMock := Mock new.	storageMock ignore: #loadTasksInto:.	storageMock on: #save: do: [ visited := true ].	app := ToDoApp newWithLogger: NullLogger new andStorage: storageMock.	widget := app listWidget.	widget onNewTask.		self assert: visited.
! !

