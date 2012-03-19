Smalltalk current createPackage: 'Tools' properties: #{}!
Object subclass: #Guid
	instanceVariableNames: 'guidString'
	category: 'Tools'!

!Guid methodsFor: 'conversion'!

asString
	^guidString
! !

!Guid methodsFor: 'initialization'!

initialize
	guidString := self newGuidString
!

newGuidString
	<return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
		return v.toString(16);
	})>
! !

!Guid methodsFor: 'printing'!

printString
	^'a Guid{', guidString, '}'
! !

!Guid class methodsFor: 'instance creation'!

new
	^super new initialize
! !

Widget subclass: #ToolWidget
	instanceVariableNames: 'id div position size zIndex topBar label body'
	category: 'Tools'!
!ToolWidget commentStamp!
A ToolWidget:
	- floats on the DOM (jQuery UI Draggable)
	- resizeable (jQuery UI Resizable)
	- provides a blank canvas that subclasses should implement
	- stores itself to localStorage
	- allows for easy inspection of the tool (double click on title bar)!

!ToolWidget methodsFor: 'accessing'!

id: anInteger
	id := anInteger
!

id
	^id ifNil: [ Guid new ]
!

domId
	^'tool-', id asString
!

position
	^position
!

position: aPoint
	position := aPoint.
	self save.
!

size
	^size
!

size: aPoint
	size := aPoint.
	self save.
!

menuId
	^'menu-', id asString
!

labelString
	^self class printString
! !

!ToolWidget methodsFor: 'actions'!

remove
	div asJQuery remove.
	self class remove: id asString
!

save
	self class saveAll
!

inspect
	console log: 'ToolWidget>>inspect'.
	super inspect
!

browse
	console log: 'ToolWidget>>browse'.
	Browser openOn: self class
!

confirmedRemove
	div asJQuery remove.
	self class remove: id
!

confirmRemove
	(window confirm: 'Remove this tool?')
		ifTrue: [ self remove ]
!

reload
	self save.
	div asJQuery remove.
	self appendToJQuery: 'body' asJQuery.
!

open
	self appendToJQuery: 'body' asJQuery.
! !

!ToolWidget methodsFor: 'converting'!

asHashedCollection
	^#{
		'x' -> position x .
		'y' -> position y .
		'width' -> size x .
		'height' -> size y .
		'id' -> id asString .
		'zIndex' -> zIndex }
! !

!ToolWidget methodsFor: 'initialization'!

initialize
	super initialize.
	id := Guid new.
	position := 50@50.
	size := 500@250.
	zIndex := 11000.
!

initializeHandlers
	div asJQuery draggable: #{
		'handle' -> '.draggable-handle' .
		'stop' -> [ :event :ui | self position: (ui position left)@(ui position top) ] }.

	div asJQuery resizable: #{
		'stop' -> [ :event :ui :size |
			size := <ui.size>.
			self size: (size width)@(size height) ] }.
! !

!ToolWidget methodsFor: 'menu'!

handleMenuAction: anActionString
	self perform: anActionString.
!

updateMenu
	jQuery contextMenu: #{
		'selector' -> ('#', self domId) .
		'callback' -> [ :key :options | self handleMenuAction: key ] .
		'items' -> (JSON parse: (JSON stringify: self menuItems)) }
!

menuItems
	"Answer a dictionary of menu items: 'methodName' -> #{ 'name' -> 'Display String' ..."
	^ #{
	'inspect' -> #{ 'name' -> 'Inspect this tool' . 'icon' -> 'quit' } .
	'browse' -> #{ 'name' -> 'Browse this tool' . 'icon' -> 'copy' } .
	'reload' -> #{ 'name' -> 'Reload this tool' } .
	'confirmRemove' -> #{ 'name' -> 'Remove this tool' . 'icon' -> 'delete' }
	}
! !

!ToolWidget methodsFor: 'rendering'!

renderOn: html
	div := html div
		id: self domId;
		class: self cssClass;
		style: self style;
		with: [
			topBar := html div
				class: 'draggable-handle';
				style: 'cursor:move;';
				with: [
					html a
						href: '#close';
						style: 'position: absolute; right: 20px; color: #933';
						onClick: [ self remove ];
						with: 'x'.
					label := html span: self labelString ].
			body := html div class: 'body' ].

	topBar asJQuery bind: 'dblclick' do: [ self inspect ].
	self
		initializeHandlers;
		renderBody;
		updateMenu.
!

style
	^'
	border:1px solid black;
	background-color:#fff;
	position:absolute;
	left:', position x printString, 'px;
	top:', position y printString, 'px;
	width:', size x printString, 'px;
	height:', size y printString, 'px;
	z-index:', zIndex printString, ';
	'
!

renderBody
	body contents: [ :html | html p: '[ blank tool ]' ]
!

cssClass
	^'amber-tool'
! !

ToolWidget class instanceVariableNames: 'allInstances storage'!

!ToolWidget class methodsFor: 'accessing'!

allInstances
	allInstances ifNil: [ self initializeInstances ].
	^allInstances
! !

!ToolWidget class methodsFor: 'initialization'!

initialize
	storage := LocalStorage withScope: self printString.
	self
		initializeInstances;
		load;
		saveAll.
!

initializeInstances
	storage at: 'instances' ifAbsentPut: '{}'.
	allInstances := #{}.
! !

!ToolWidget class methodsFor: 'instance creation'!

openNew
	| newInstance |
	newInstance := self new.
	self persist: newInstance.
	newInstance open.
	^newInstance
!

fromJSON: aJSON
	^self new
		id: aJSON id;
		position: (aJSON x)@(aJSON y);
		size: (aJSON width)@(aJSON height);
		appendToJQuery: 'body' asJQuery;
		yourself.
! !

!ToolWidget class methodsFor: 'persistence'!

removeAll
	allInstances do: [ :ea | ea remove ].
	self initializeInstances.
!

saveAll
	storage
		at: 'instances'
		put: (JSON stringify: (allInstances collect: [ :ea | ea asHashedCollection ]))
!

load
	| jsObject dictionary |
	dictionary := Dictionary new.
	jsObject := (JSON parse: (storage at: 'instances' ifAbsentPut: '{}')) jsObject.
	<for(var i in jsObject) {
		dictionary._at_put_(i, jsObject[i]);
	}>.
	dictionary keysAndValuesDo: [ :key :value | allInstances at: key put: (self fromJSON: value) ].
!

remove: anInstanceId
	allInstances removeKey: anInstanceId asString.
	self saveAll.
!

persist: aToolWidget
	self allInstances at: aToolWidget id asString put: aToolWidget.
	self saveAll
! !

ToolWidget subclass: #WorkspaceTool
	instanceVariableNames: 'editor receiver onDoIt'
	category: 'Tools'!
!WorkspaceTool commentStamp!
A WorkspaceTool
	- has an Ace editor
	- adds additional menuItems and keybindings:
		- printIt <CTRL-p>
		- doIt <CTRL-d>
		- browseIt <CTRL-b>
		- inspectIt <CTRL-i>!

!WorkspaceTool methodsFor: 'accessing'!

currentLine
	^editor getSession getLine: editor getCursorPosition row
!

currentLineOrSelection
	^editor getSelection isEmpty
		ifTrue: [ self currentLine ]
		ifFalse: [ self selection ]
!

onDoIt: aBlock
	onDoIt := aBlock
!

onDoIt
	^onDoIt
!

selection
	^editor getSession doc getTextRange: editor getSelectionRange
!

val
	^editor
		ifNil: [ '' ]
		ifNotNil: [ editor getSession getValue ]
!

val: aString
	editor getSession setValue: aString
!

receiver
	^receiver ifNil: [ DoIt new ]
!

receiver: anObject
	receiver := anObject
!

editorId
	^'ace-', id asString
! !

!WorkspaceTool methodsFor: 'actions'!

printIt
	| result range newEnd |
	result := self doIt printString.
	range := editor getSelectionRange.
	editor moveCursorToPosition: range end.
	newEnd := editor getSession insert: range end text: ' ', result, ' '.
	range setStart: range end; setEnd: newEnd.
	editor selection setSelectionRange: range.
	self save.
	editor focus.
!

clear
	self val: ''
!

doIt
	| result |
	result := self eval: self currentLineOrSelection.
	self onDoIt ifNotNil: [ self onDoIt value ].
	self save.
	^result
!

eval: aString
	| compiler  |
	compiler := Compiler new.
	[ compiler parseExpression: aString ] on: Error do: [ :ex |
		^window alert: ex messageText ].
	^(compiler load: 'doIt ^[', aString, '] value' forClass: DoIt) fn applyTo: self receiver arguments: #()
!

inspectIt
	self save.
	self doIt inspect
!

fileIn
	Importer new import: self currentLineOrSelection readStream
!

remove
	editor ifNotNil: [ editor destroy ].
	super remove
!

browseIt
	self save.
	Browser openOn: self doIt class
!

size: aPoint
	super size: aPoint.
	editor ifNotNil: [ editor resize ].
! !

!WorkspaceTool methodsFor: 'commands'!

initializeCommands
	self addCommand: 'Ctrl-P' named: 'printIt' do: [ self printIt ].
	self addCommand: 'Ctrl-D' named: 'doIt' do: [ self doIt ].
	self addCommand: 'Ctrl-I' named: 'inspectIt' do: [ self inspectIt ].
	self addCommand: 'Ctrl-B' named: 'browseIt' do: [ self browseIt ].
!

addCommand: aKeyBindingString named: aNameString do: aBlock
	editor commands addCommand: #{
		'name' -> aNameString .
		'bindKey' -> #{
			'win' -> aKeyBindingString .
			'mac' -> aKeyBindingString .
			'sender' -> 'editor' } .
		'exec' -> aBlock }.
! !

!WorkspaceTool methodsFor: 'converting'!

asHashedCollection
	^ super asHashedCollection
		at: 'val' put: self val;
		yourself.
! !

!WorkspaceTool methodsFor: 'initialization'!

initializeEditor
	| mode |
	editor := ace edit: self editorId.
	mode := (window require: 'ace/mode/smalltalk') at: 'Mode'.
	editor getSession setMode: mode new.
	"editor setTheme: 'ace/theme/solarized_dark'."
	self initializeCommands.
	self val: '"Check out the contextmenu (right click)"'.
	"editor getSession on: 'change' do: [ self save ]."
! !

!WorkspaceTool methodsFor: 'menu'!

menuItems
	^HashedCollection new
		at: 'doIt' put: #{ 'name' -> 'Do It' . 'accesskey' -> 'd' };
		at: 'printIt' put: #{ 'name' -> 'Print It' . 'accesskey' -> 'p' };
		at: 'inspectIt' put: #{ 'name' -> 'Inspect It' . 'accesskey' -> 'i' };
		at: 'browseIt' put: #{ 'name' -> 'Browse It' . 'accesskey' -> 'b' };
		at: 'sep2' put: '----------';
		at: 'fileIn' put: #{ 'name' -> 'File In' . 'accesskey' -> 'f' };
		at: 'clear' put: #{ 'name' -> 'Clear' };
		at: 'sep1' put: '----------';
		addAll: super menuItems;
		yourself
! !

!WorkspaceTool methodsFor: 'rendering'!

renderBody
	body contents: [ :html |
		html div id: self editorId; style: 'width:', size x printString, 'px; height:', (size y - 20) printString, 'px;' ].
	self initializeEditor.
! !

!WorkspaceTool class methodsFor: 'not yet classified'!

fromJSON: anObject
	^(super fromJSON: anObject)
		val: anObject val;
		yourself.
! !

ToolWidget subclass: #InspectorTool
	instanceVariableNames: 'object variables'
	category: 'Tools'!
!InspectorTool commentStamp!
Examples:

	InspectorTool on: 'foo'!

!InspectorTool methodsFor: 'accessing'!

setLabel: aString
	label := aString
!

setVariables: aDictionary
	variables addAll: aDictionary
!

renderBody
	body contents: [ :html |
		html h1: object printString ]
!

labelString
	^label
! !

!InspectorTool methodsFor: 'initialization'!

inspect: anObject
	object := anObject.
	variables := Dictionary new.
	object inspectOn: self
! !

!InspectorTool class methodsFor: 'instance creation'!

openOn: anObject
	| newInstance |
	newInstance := self new inspect: anObject.
	self persist: newInstance.
	newInstance open.
	^newInstance
! !

