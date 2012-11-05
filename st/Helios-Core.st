Smalltalk current createPackage: 'Helios-Core' properties: #{}!
Object subclass: #HLEnvironment
	instanceVariableNames: ''
	package: 'Helios-Core'!
!HLEnvironment commentStamp!
Abstract class defining common behavior for local and remote environments!

!HLEnvironment methodsFor: 'accessing'!

packages

	^ self subclassResponsibility
! !

!HLEnvironment methodsFor: 'actions'!

eval: someCode on: aReceiver

	^ self subclassResponsibility
! !

HLEnvironment subclass: #HLLocalEnvironment
	instanceVariableNames: ''
	package: 'Helios-Core'!

!HLLocalEnvironment methodsFor: 'accessing'!

packages

	^ Smalltalk current packages
! !

!HLLocalEnvironment methodsFor: 'actions'!

eval: someCode on: aReceiver
	| compiler  |
	compiler := Compiler new.
	[compiler parseExpression: someCode] on: Error do: [:ex |
		^window alert: ex messageText].
	^(compiler eval: (compiler compile: 'doIt ^[', someCode, '] value' forClass: DoIt)) fn applyTo: aReceiver arguments: #()
! !

HLEnvironment subclass: #HLRemoteEnvironment
	instanceVariableNames: ''
	package: 'Helios-Core'!

!HLRemoteEnvironment methodsFor: 'accessing'!

packages
	"Answer the remote environment's packages"
  
	"to-do"
    
    "Note for future self and friends:
    the problem with remote stuff is that the answers shouldn't be expected to be
    received in a syncrhonous fashion. Everything network is asyc, so you *are going to deal with callbacks* here"
! !

!HLRemoteEnvironment methodsFor: 'actions'!

eval: someCode on: aReceiver

	"Note for future self and friends:
    whatever way this compilation happens on the other side, 
    it should return a proxy to the remote resulting object"
    
    self notYetImplemented
! !

Object subclass: #HLRemoteObject
	instanceVariableNames: ''
	package: 'Helios-Core'!
!HLRemoteObject commentStamp!
This is a local proxy to a remote object.
Tipically useful for evaluating and inspecting and interacting with instances of a remote VM.!

!HLRemoteObject methodsFor: 'actions'!

doesNotUnderstand: aMessage

	"to-do

	aham, blah blah

	super doesNotUnderstand: aMessage"
!

inspectOn: anInspector

	"to-do"

	"this is a source of so much fun..."
!

printString
	^ 'this is a remote object'
! !

Widget subclass: #HLSourceArea
	instanceVariableNames: 'editor textarea div receiver onDoIt'
	package: 'Helios-Core'!

!HLSourceArea methodsFor: 'accessing'!

contents
    ^editor getValue
!

contents: aString
    editor setValue: aString
!

currentLine
    ^editor getLine: (editor getCursor line)
!

currentLineOrSelection
    ^editor somethingSelected
	ifFalse: [self currentLine]
	ifTrue: [self selection]
!

editor
	^editor
!

onDoIt
	^onDoIt
!

onDoIt: aBlock
	onDoIt := aBlock
!

receiver
	^receiver ifNil: [DoIt new]
!

receiver: anObject
	receiver := anObject
!

selection
	^editor getSelection
!

selectionEnd
   ^textarea element selectionEnd
!

selectionEnd: anInteger
   textarea element selectionEnd: anInteger
!

selectionStart
   ^textarea element selectionStart
!

selectionStart: anInteger
   textarea element selectionStart: anInteger
!

setEditorOn: aTextarea
	<self['@editor'] = CodeMirror.fromTextArea(aTextarea, {
		theme: 'amber',
                lineNumbers: true,
                enterMode: 'flat',
                matchBrackets: true,
                electricChars: false
	})>
!

val
    ^editor getValue
!

val: aString
    editor setValue: aString
! !

!HLSourceArea methodsFor: 'actions'!

clear
      self contents: ''
!

doIt
    | result |
    result := self eval: self currentLineOrSelection.
    self onDoIt ifNotNil: [self onDoIt value].
    ^result
!

eval: aString
	| compiler  |
	compiler := Compiler new.
	[compiler parseExpression: aString] on: Error do: [:ex |
		^window alert: ex messageText].
	^(compiler eval: (compiler compile: 'doIt ^[', aString, '] value' forClass: DoIt)) fn applyTo: self receiver arguments: #()
!

fileIn
    Importer new import: self currentLineOrSelection readStream
!

handleKeyDown: anEvent
    <if(anEvent.ctrlKey) {
		if(anEvent.keyCode === 80) { //ctrl+p
			self._printIt();
			anEvent.preventDefault();
			return false;
		}
		if(anEvent.keyCode === 68) { //ctrl+d
			self._doIt();
			anEvent.preventDefault();
			return false;
		}
		if(anEvent.keyCode === 73) { //ctrl+i
			self._inspectIt();
			anEvent.preventDefault();
			return false;
		}
	}>
!

inspectIt
    self doIt inspect
!

print: aString
	| start stop |
	start := HashedCollection new.
	stop := HashedCollection new.
	start at: 'line' put: (editor getCursor: false) line.
	start at: 'ch' put: (editor getCursor: false) ch.
	stop at: 'line' put: (start at: 'line').
	stop at: 'ch' put: ((start at: 'ch') + aString size + 2).
	editor replaceSelection: (editor getSelection, ' ', aString, ' ').
	editor setCursor: (editor getCursor: true).
	editor setSelection: stop end: start
!

printIt
    self print: self doIt printString
! !

!HLSourceArea methodsFor: 'events'!

onKeyDown: aBlock
	div onKeyDown: aBlock
!

onKeyUp: aBlock
	div onKeyUp: aBlock
! !

!HLSourceArea methodsFor: 'rendering'!

renderOn: html
    div := html div class: 'source'.
    div with: [textarea := html textarea].
    self setEditorOn: textarea element.
    div onKeyDown: [:e | self handleKeyDown: e]
! !

Object subclass: #HLTab
	instanceVariableNames: 'widget label'
	package: 'Helios-Core'!

!HLTab methodsFor: 'accessing'!

activate
	self manager activate: self
!

add
	self manager addTab: self
!

label
	^ label ifNil: [ '' ]
!

label: aString
	label := aString
!

manager
	^ HLManager current
!

widget
	^ widget
!

widget: aWidget
	widget := aWidget
! !

!HLTab methodsFor: 'testing'!

isActive
	^ self manager activeTab = self
! !

!HLTab class methodsFor: 'instance creation'!

on: aWidget labelled: aString
	^ self new
		widget: aWidget;
		label: aString;
		yourself
! !

Widget subclass: #HLWidget
	instanceVariableNames: 'rootDiv'
	package: 'Helios-Core'!

!HLWidget methodsFor: 'accessing'!

manager
	^ HLManager current
! !

!HLWidget methodsFor: 'announcements'!

subscribeTo: anAnnouncer
! !

!HLWidget methodsFor: 'keybindings'!

registerBindings
	self registerBindingsOn: self manager keyBinder bindings
!

registerBindingsOn: aBindingGroup
! !

!HLWidget methodsFor: 'rendering'!

renderContentOn: html
!

renderOn: html
    self registerBindings.

	rootDiv := html div with: [
    	self renderContentOn: html ]
! !

!HLWidget methodsFor: 'updating'!

refresh
	rootDiv ifNil: [ ^ self ].
    
	rootDiv asJQuery empty.
    [ :html | self renderContentOn: html ] appendToJQuery: rootDiv asJQuery
! !

!HLWidget class methodsFor: 'accessing'!

openAsTab
	HLManager current addTab: (HLTab on: self new labelled: self tabLabel)
!

tabLabel
	^ 'Tab'
!

tabPriority
	^ 500
! !

!HLWidget class methodsFor: 'testing'!

canBeOpenAsTab
	^ false
! !

HLWidget subclass: #HLDebugger
	instanceVariableNames: ''
	package: 'Helios-Core'!

HLWidget subclass: #HLFocusableWidget
	instanceVariableNames: 'hiddenInput'
	package: 'Helios-Core'!

!HLFocusableWidget methodsFor: 'accessing'!

focusClass
	^ 'focused'
! !

!HLFocusableWidget methodsFor: 'events'!

blur
	hiddenInput asJQuery blur
!

focus
	hiddenInput asJQuery focus
!

hasFocus
	^ rootDiv notNil and: [ rootDiv asJQuery hasClass: self focusClass ]
! !

!HLFocusableWidget methodsFor: 'rendering'!

renderContentOn: html
!

renderHiddenInputOn: html
	hiddenInput := html input
    	style: 'position: absolute; left: -100000px;';
    	onBlur: [ rootDiv asJQuery removeClass: self focusClass ];
        onFocus: [ rootDiv asJQuery addClass: self focusClass ]
!

renderOn: html
	self registerBindings.
	self renderHiddenInputOn: html.
    
    rootDiv := html div 
    	class: 'hl_widget'; 
        onClick: [ hiddenInput asJQuery focus ];
        with: [
			self renderContentOn: html ]
! !

HLFocusableWidget subclass: #HLListWidget
	instanceVariableNames: 'items selectedItem'
	package: 'Helios-Core'!

!HLListWidget methodsFor: 'accessing'!

cssClassForItem: anObject
	^ self selectedItem = anObject
			ifTrue: [ 'active' ]
			ifFalse: [ 'inactive' ]
!

iconForItem: anObject
	^ ''
!

items
	^ items ifNil: [ self initializeItems ]
!

items: aCollection
	items := aCollection
!

selectedItem
	^ selectedItem
!

selectedItem: anObject
	selectedItem := anObject
! !

!HLListWidget methodsFor: 'actions'!

activateListItem: aListItem
	| parent position |
    
	(aListItem get: 0) ifNil: [ ^self ].

	<position = aListItem.parent().children().get().indexOf(aListItem.get(0)) + 1>.

    parent := aListItem parent.
	parent children removeClass: 'active'.
	aListItem addClass: 'active'.
    
    "Move the scrollbar to show the active element"
    aListItem position top < 0 ifTrue: [
		(parent get: 0) scrollTop: ((parent get: 0) scrollTop + aListItem position top - 10) ].
    aListItem position top + aListItem height > parent height ifTrue: [ 
		(parent get: 0) scrollTop: ((parent get: 0) scrollTop + aListItem height - (parent height - aListItem position top)) +10 ].
        
   "Activate the corresponding item"
   self selectItem: (self items at: (aListItem attr: 'list-data') asNumber)
!

selectItem: anObject
	self selectedItem: anObject
! !

!HLListWidget methodsFor: 'events'!

setupKeyBindings
	| next |
	hiddenInput asJQuery unbind: 'keydown'.

	hiddenInput asJQuery keydown: [ :e | | selected |
    	selected := window jQuery: '.focused .nav-pills .active'.
        e which = 38 ifTrue: [ 
        	self activateListItem: selected prev ].
      	e which = 40 ifTrue: [
          	next := selected next.
            (next get: 0) ifNil: [ next := window jQuery: '.focused .nav-pills li:first-child' ].
			self activateListItem: next ] ]
! !

!HLListWidget methodsFor: 'initializing'!

initializeItems
	^ items := #()
! !

!HLListWidget methodsFor: 'rendering'!

renderButtonsOn: html
!

renderContentOn: html
	html ul 
    	class: 'nav nav-pills nav-stacked';
        with: [ self renderListOn: html ].
    html div class: 'pane_actions form-actions'; with: [
      	self renderButtonsOn: html ].
        
   self setupKeyBindings
!

renderItem: anObject on: html
	| li |
    
	li := html li.
    li
    	class: (self cssClassForItem: anObject);
        at: 'list-data' put: (self items indexOf: anObject) asString;
        with: [ 
        	html a
            	with: [ 
            		(html tag: 'i') class: (self iconForItem: anObject).
  					self renderItemLabel: anObject on: html ];
				onClick: [
                  	self activateListItem: li asJQuery ] ]
!

renderItemLabel: anObject on: html
	html with: anObject asString
!

renderListOn: html
	self items do: [ :each | 
    	self renderItem: each on: html ]
! !

HLListWidget subclass: #HLNavigationListWidget
	instanceVariableNames: 'previous next'
	package: 'Helios-Core'!

!HLNavigationListWidget methodsFor: 'accessing'!

next
	^ next
!

next: aWidget
	next := aWidget.
    aWidget previous = self ifFalse: [ aWidget previous: self ]
!

previous
	^ previous
!

previous: aWidget
	previous := aWidget.
    aWidget next = self ifFalse: [ aWidget next: self ]
! !

!HLNavigationListWidget methodsFor: 'actions'!

nextFocus
	self next ifNotNil: [ self next focus ]
!

previousFocus
	self previous ifNotNil: [ self previous focus ]
! !

!HLNavigationListWidget methodsFor: 'events'!

setupKeyBindings
	super setupKeyBindings.

	hiddenInput asJQuery keydown: [ :e |
        e which = 39 ifTrue: [ 
        	self nextFocus ].
		e which = 37 ifTrue: [ 
        	self previousFocus ] ]
! !

HLWidget subclass: #HLManager
	instanceVariableNames: 'tabs activeTab keyBinder'
	package: 'Helios-Core'!

!HLManager methodsFor: 'accessing'!

activeTab
	^ activeTab
!

keyBinder
	^ keyBinder ifNil: [ keyBinder := HLKeyBinder new ]
!

tabs
	^ tabs ifNil: [ tabs := OrderedCollection new ]
! !

!HLManager methodsFor: 'actions'!

activate: aTab
	self keyBinder flushBindings.
	activeTab := aTab.
    
	self 
		refresh;
		show: aTab
!

addTab: aTab
	self tabs add: aTab.
    self activate: aTab
!

removeTab: aTab
	"Todo: activate the previously activated tab. Keep a history of tabs selection"

	(self tabs includes: aTab) ifFalse: [ ^ self ].

	self tabs remove: aTab.
	self refresh
! !

!HLManager methodsFor: 'initialization'!

initialize
	super initialize.
    self keyBinder setupEvents
! !

!HLManager methodsFor: 'rendering'!

refresh
	(window jQuery: '.navbar') remove.
	(window jQuery: '#container') remove.
	self appendToJQuery: 'body' asJQuery
!

renderAddOn: html
    html li 
    	class: 'dropdown';
        with: [ 
			html a 
        		class: 'dropdown-toggle';
           	 	at: 'data-toggle' put: 'dropdown';
            	with: [ 
            		html with: 'Open...'.
  					(html tag: 'b') class: 'caret' ].
           html ul 
           		class: 'dropdown-menu';
                with: [
                  	((HLWidget withAllSubclasses
                    	select: [ :each | each canBeOpenAsTab ])
                        sorted: [ :a :b | a tabPriority < b tabPriority ])
                        do: [ :each |
  							html li with: [
                      			html a 
                                	with: each tabLabel;
      								onClick: [ each openAsTab ] ] ] ] ]
!

renderContentOn: html
	html div 
		class: 'navbar navbar-fixed-top';
		with: [ html div 
			class: 'navbar-inner';
			with: [ self renderTabsOn: html ] ].
	html div id: 'container'
!

renderTabsOn: html
	html ul 
		class: 'nav';
		with: [ 
        	self tabs do: [ :each |
				html li 
					class: (each isActive ifTrue: [ 'active' ] ifFalse: [ 'inactive' ]);
					with: [
						html a
							with: [
      							((html tag: 'i') class: 'icon-remove-circle')
  									onClick: [ self removeTab: each ].
                              	html with: each label ];
							onClick: [ each activate ] ] ].
			self renderAddOn: html ]
!

show: aTab
	(window jQuery: '#container') empty.
	aTab widget appendToJQuery: '#container' asJQuery
! !

HLManager class instanceVariableNames: 'current'!

!HLManager class methodsFor: 'accessing'!

current
	^ current ifNil: [ current := self basicNew initialize ]
! !

!HLManager class methodsFor: 'initialization'!

initialize
	self current appendToJQuery: 'body' asJQuery
! !

!HLManager class methodsFor: 'instance creation'!

new
	"Use current instead"

	self shouldNotImplement
! !

HLWidget subclass: #HLSUnit
	instanceVariableNames: ''
	package: 'Helios-Core'!

!HLSUnit class methodsFor: 'accessing'!

tabLabel
	^ 'SUnit'
!

tabPriority
	^ 1000
! !

!HLSUnit class methodsFor: 'testing'!

canBeOpenAsTab
	^ true
! !

HLWidget subclass: #HLTranscript
	instanceVariableNames: ''
	package: 'Helios-Core'!

!HLTranscript class methodsFor: 'accessing'!

tabLabel
	^ 'Transcript'
!

tabPriority
	^ 600
! !

!HLTranscript class methodsFor: 'testing'!

canBeOpenAsTab
	^ true
! !

