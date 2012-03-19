Smalltalk current createPackage: 'Todos' properties: #{}!
Widget subclass: #TodoApp
	instanceVariableNames: 'todos'
	category: 'Todos'!

!TodoApp methodsFor: 'initialization'!

initialize
	super initialize.
	todos := Array new.
! !

!TodoApp methodsFor: 'rendering'!

renderOn: html
	html div class: 'title'; with: [ html h1 with: 'Todos' ].
	html div class: 'content'; with: [ self
		renderFormOn: html;
		renderListOn: html;
		renderStatsOn: html ]
!

update
!

renderFormOn: html
	html form id: 'create-todo';
		with: [ html input id: 'new-todo'; type: 'text'; placeholder: 'What needs to be done?' ];
		onSubmit: [ :event :input :todo |
			input := '#new-todo' asJQuery.
			event preventDefault.
			self createTodoNamed: input val.
			input val: '' ]
!

renderListOn: html
	html div id: 'todos'; with: [
		"html div id: 'todo-actions'; with: [
			html input id: 'check-all'; class: 'check'; type: 'checkbox'.
			html label for: 'check-all'; with: 'Mark all as complete' ]."
		html ul id: 'todo-list' ]
!

renderStatsOn: html
	html div id: 'todo-stats'; with: [
		html span class: 'todo-count'; with: [
			html span class: 'number'; with: '1'.
			html with: ' '.
			html span class: 'word'; with: 'item'.
			html with: ' left.' ].

		html span class: 'todo-clear'; with: [
			html a href: '#'; with: [
				html with: 'Clear '.
				html span class: 'number-done'; with: '1'.
				html with: ' completed '.
				html span class: 'word-done'; with: 'item' ]]]
! !

!TodoApp methodsFor: 'todos'!

createTodoNamed: aString
	todos add: (Todo new
		content: aString;
		appendToJQuery: '#todo-list' asJQuery)
! !

TodoApp class instanceVariableNames: 'default'!

!TodoApp class methodsFor: 'accessing'!

default
	^default
! !

!TodoApp class methodsFor: 'initialization'!

initialize
	default := self new appendToJQuery: '#todoapp' asJQuery
! !

Widget subclass: #Todo
	instanceVariableNames: 'content li input div'
	category: 'Todos'!

!Todo methodsFor: 'accessing'!

content: aString
	content := aString
!

content
	^content
! !

!Todo methodsFor: 'printing'!

printString
	^'a Todo(', content asString, ')'
! !

!Todo methodsFor: 'rendering'!

renderOn: html
	li := html li class: 'todo'; with: [
		html div class: 'display'; with: [
			html input class: 'check'; type: 'checkbox'.
			
			div := html div class: 'todo-content';
				onDblClick: [ :e | li asJQuery addClass: 'editing'. input asJQuery focus ];
				with: content.
			
			html span class: 'todo-destroy' ].

		html div class: 'edit'; with: [
			input := html input type: 'text';
				class: 'todo-input'; 
				onBlur: [ self updateContent ];
				onKeyPress: [ :e | e keyCode = 13 ifTrue: [ self updateContent ]];
				value: content ]].
!

updateContent
	content := input asJQuery val.
	li asJQuery removeClass: 'editing'.
	div asJQuery html: content
! !

