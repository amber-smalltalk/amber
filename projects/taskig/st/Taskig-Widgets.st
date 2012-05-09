Smalltalk current createPackage: 'Taskig-Widgets' properties: #{}!
Widget subclass: #TaskBaseWidget
	instanceVariableNames: 'taskModel announcer'
	package: 'Taskig-Widgets'!
!TaskBaseWidget commentStamp!
Common behaviour for the viewer and editor tasks widgets.!

!TaskBaseWidget methodsFor: 'accessing'!

announcer	^announcer
! !

!TaskBaseWidget methodsFor: 'initialize-release'!

initializeWithTask: aTask

	super initialize.
	taskModel := aTask.
	announcer := Announcer new.
! !

!TaskBaseWidget methodsFor: 'rendering'!

hide
!

renderContentsOnBrush: tagBrush	tagBrush empty.
!

renderOn: html	self renderContentsOnBrush: html div.
! !

!TaskBaseWidget class methodsFor: 'instance creation'!

newWithTask: aTask	^ self new initializeWithTask: aTask
! !

TaskBaseWidget subclass: #TaskEditorWidget
	instanceVariableNames: 'editedTask'
	package: 'Taskig-Widgets'!
!TaskEditorWidget commentStamp!
This widget allows a task to be edited.!

!TaskEditorWidget methodsFor: 'interaction'!

cancelEditingEvent	announcer announce: EditingCanceled new.
!

editingDoneEvent	| announcement |	announcement := EditingDone newWithTask: editedTask.	announcer announce: announcement.
! !

TaskBaseWidget subclass: #TaskViewerWidget
	instanceVariableNames: ''
	package: 'Taskig-Widgets'!
!TaskViewerWidget commentStamp!
This widget allows a taks to be viewed, edited and deleted.!

!TaskViewerWidget methodsFor: 'interaction'!

deleteTaskEvent	| announcement |	announcement := DeletingTask newWithTask: taskModel.	announcer announce: announcement.
!

editTaskEvent	| announcement |	announcement := EditingTask newWithTask: taskModel.	announcer announce: announcement.
! !

Widget subclass: #TaskListWidget
	instanceVariableNames: 'listModel children rowsBrush'
	package: 'Taskig-Widgets'!
!TaskListWidget commentStamp!
This widget shows a list of tasks.!

!TaskListWidget methodsFor: 'initialize-release'!

initializeWithList: aListModel

	super initialize.
	children := OrderedCollection new.
	listModel := aListModel.
	listModel do: [ :aTask | self createTaskWidgetFor: aTask ]
! !

!TaskListWidget methodsFor: 'interaction'!

onDeleteTask: announcement 	"A request to delete aTask has been issued."	listModel removeTask: announcement task.	children remove: announcement widget.
!

onNewTask	"This is executed when a user clicks on a button, to create a new task"	| task widget |	task := Task newWithDefaults.	listModel addTask: task.	widget := self createTaskWidgetFor: task.	self insertTaskOnTopOfList: widget.
! !

!TaskListWidget methodsFor: 'private'!

createTaskWidgetFor: aTask	| widget |	widget := TaskWidget newWithTask: aTask.	widget announcer on: DeletingTask do: [ :announcement | self onDeleteTask: announcement ]. 	children add: widget.	^widget
! !

!TaskListWidget methodsFor: 'rendering'!

insertTaskOnTopOfList: aTaskWidget	self todo: 'append this item to the top of the list.'
!

renderOn: html
	self renderTableHeaderOn: html.
	rowsBrush := html div: 
		[ children do: [ :widget | widget renderOn: html ]]
!

renderTableHeaderOn: html
	html table
		class: 'TaskList';
		with: [ html tr 
				class: 'TableHeaderRow'; 
				with: [ #('Created' 'Description' 'DueOn' 'Done') 
						do: [ :text | html td 
									class: 'TableHeaderColumn'; 
									with: text ] ] ]
! !

!TaskListWidget class methodsFor: 'instance creation'!

newWithList: aListModel	^ self new initializeWithList: aListModel
! !

Widget subclass: #TaskWidget
	instanceVariableNames: 'task viewer editor tagBrush announcer'
	package: 'Taskig-Widgets'!
!TaskWidget commentStamp!
This widget manages the interaction between the task viewer and the task editor.!

!TaskWidget methodsFor: 'accessing'!

announcer	^announcer
!

task	^task
! !

!TaskWidget methodsFor: 'initialize-release'!

initializeWithTask: aTask

	super initialize.
	task := aTask.
	announcer := Announcer new.
	self initializeViewer.
! !

!TaskWidget methodsFor: 'interaction'!

onDeletingTask: announcement	"Remove the widget and delegate this announcement."	viewer hide.	self todo: 'jquery: remove this div from the document.'.	announcement widget: self.		"Allow the parent list easy removal of this widget."	announcer announce: announcement.
!

onEditingCanceled	"Message send when the editor has canceled this editing."	self showViewer
!

onEditingDone: announcement	"Message send when the editor widget has finnished editing."	task updateWith: announcement task.	self showViewer.
!

onEditingTask: announcement	"Show editor for this task."	self showEditor.
! !

!TaskWidget methodsFor: 'private'!

editor	^editor ifNil: [ self initializeEditor ]
!

initializeEditor	editor := TaskEditorWidget newWithTask: task.	editor announcer on: EditingCanceled do: [ :announcement | self onEditingCanceled ].	editor announcer on: EditingDone 	do: [ :announcement | self onEditingDone: announcement ].  	^editor
!

initializeViewer	viewer := TaskViewerWidget newWithTask: task.	viewer announcer on: DeletingTask do: [ :announcement | self onDeletingTask: announcement ].	viewer announcer on: EditingTask do: [ :announcement | self editingTask: announcement ].
!

showEditor	viewer hide.	editor renderContentsOnBrush: tagBrush.
!

showViewer	editor hide.	viewer renderContentsOnBrush: tagBrush.
! !

!TaskWidget methodsFor: 'rendering'!

renderOn: html	tagBrush := html div: [ viewer renderOn: html ]
! !

!TaskWidget class methodsFor: 'instance creation'!

newWithTask: aTask	^self new initializeWithTask: aTask
! !

