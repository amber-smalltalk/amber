Smalltalk createPackage: 'Helios-KeyBindings'!
Object subclass: #HLBinding
	instanceVariableNames: 'key label'
	package: 'Helios-KeyBindings'!
!HLBinding commentStamp!
I am the abstract representation of a keybinding in Helios. My instances hold a key (integer value) and a label. 

Bindings are built into a tree of keys, so pressing a key may result in more key choices (for example, to open a workspace, 'o' is pressed first then 'w' is pressed).

Binding action handling and selection is handled by the `current` instance of `HLKeyBinder`.

Subclasses implement specific behavior like evaluating actions or (sub-)grouping other bindings.!

!HLBinding methodsFor: 'accessing'!

atKey: aKey
	"Answer the sub-binding at key aKey.
	Always answer nil here. See HLBindingGroup for more."
	
	^ nil
!

displayLabel
	^ self label
!

key
	^ key
!

key: anInteger
	key := anInteger
!

label
	^ label
!

label: aString
	label := aString
!

shortcut
	^ String fromCharCode: self key
! !

!HLBinding methodsFor: 'actions'!

apply
!

release
! !

!HLBinding methodsFor: 'rendering'!

renderOn: aBindingHelper html: html
! !

!HLBinding methodsFor: 'testing'!

isActive
	^ self subclassResponsibility
! !

!HLBinding class methodsFor: 'instance creation'!

on: anInteger labelled: aString
	^ self new
    	key: anInteger;
        label: aString;
        yourself
! !

HLBinding subclass: #HLBindingAction
	instanceVariableNames: 'command'
	package: 'Helios-KeyBindings'!
!HLBindingAction commentStamp!
My instances are the leafs of the binding tree. They evaluate actions through commands, instances of concrete subclasses of `HLCommand`.

The `#apply` methods is used to evaluate the `command`. If the command requires user input, an `inputWidget` will be displayed to the user.!

!HLBindingAction methodsFor: 'accessing'!

command
	^ command
!

command: aCommand
	command := aCommand
!

input: aString
	self command input: aString
!

inputBinding
	^ HLBindingInput new
		label: self command inputLabel;
		ghostText: self command displayLabel;
		defaultValue: self command defaultInput;
		inputCompletion: self command inputCompletion;
		callback: [ :val | 
			self command 
				input: val;
				execute ];
		yourself
!

inputWidget
	^ HLBindingActionInputWidget new
		ghostText: self command displayLabel;
		defaultValue: self command defaultInput;
		inputCompletion: self command inputCompletion;
		callback: [ :value | 
			self 
				input: value;
				executeCommand ];
		yourself
! !

!HLBindingAction methodsFor: 'actions'!

apply
	self command isInputRequired
		ifTrue: [ HLKeyBinder current helper showWidget: self inputWidget ]
		ifFalse: [ self executeCommand ]
!

executeCommand
	self command execute.
	HLKeyBinder current deactivate
! !

!HLBindingAction methodsFor: 'testing'!

isActive
	^ self command isActive
! !

HLBinding subclass: #HLBindingGroup
	instanceVariableNames: 'bindings'
	package: 'Helios-KeyBindings'!
!HLBindingGroup commentStamp!
My instances hold other bindings, either actions or groups, and do not have actions by themselves.

Children are accessed with `atKey:` and added with the `add*` methods.!

!HLBindingGroup methodsFor: 'accessing'!

activeBindings
	^ self bindings select: [ :each | each isActive ]
!

at: aString
	^ self bindings 
    	detect: [ :each | each label = aString ]
      	ifNone: [ nil ]
!

at: aString add: aBinding
	| binding |
	
	binding := self at: aString.
	binding ifNil: [ ^ self ].
		
	binding add: aBinding
!

atKey: anInteger
	^ self bindings 
    	detect: [ :each | each key = anInteger ]
      	ifNone: [ nil ]
!

bindings
	^ bindings ifNil: [ bindings := OrderedCollection new ]
!

displayLabel
	^ super displayLabel, '...'
! !

!HLBindingGroup methodsFor: 'actions'!

release
	self bindings do: [ :each | each release ]
! !

!HLBindingGroup methodsFor: 'add'!

addGroupKey: anInteger labelled: aString
	self add: (HLBindingGroup on: anInteger labelled: aString)
! !

!HLBindingGroup methodsFor: 'adding'!

add: aBinding
	^ self bindings add: aBinding
!

addActionKey: anInteger labelled: aString callback: aBlock
	self add: ((HLBindingAction on: anInteger labelled: aString)
    	callback: aBlock;
        yourself)
! !

!HLBindingGroup methodsFor: 'rendering'!

renderOn: aBindingHelper html: html
	self isActive ifTrue: [
		aBindingHelper renderBindingGroup: self on: html ]
! !

!HLBindingGroup methodsFor: 'testing'!

isActive
	^ self activeBindings notEmpty
! !

HLWidget subclass: #HLBindingActionInputWidget
	instanceVariableNames: 'input callback status wrapper ghostText message inputCompletion defaultValue messageTag'
	package: 'Helios-KeyBindings'!
!HLBindingActionInputWidget commentStamp!
My instances are built when a `HLBindingAction` that requires user input is applied.!

!HLBindingActionInputWidget methodsFor: 'accessing'!

callback
	^ callback ifNil: [ callback := [ :value | ] ]
!

callback: aBlock
	callback := aBlock
!

defaultValue
	^ defaultValue ifNil: [ '' ]
!

defaultValue: aString
	defaultValue := aString
!

ghostText
	^ ghostText
!

ghostText: aText
	ghostText := aText
!

input
	^ input
!

inputCompletion
	^ inputCompletion ifNil: [ #() ]
!

inputCompletion: aCollection
	inputCompletion := aCollection
!

message
	^ message ifNil: [ message := '' ]
!

message: aString
	message := aString
!

status
	^ status ifNil: [ status := 'info' ]
!

status: aStatus
	status := aStatus
! !

!HLBindingActionInputWidget methodsFor: 'actions'!

clearStatus
	self status: 'info'.
	self message: ''.
	self refresh
!

errorStatus
	self status: 'error'.
	self refresh
!

evaluate: aString	
	[ self callback value: aString ]
		on: Error
		do: [ :ex |
			self input asJQuery 
				one: 'keydown' 
				do: [ self clearStatus ].
			self message: ex messageText.
			self errorStatus ]
!

refresh
	wrapper ifNil: [ ^ self ].
    
	wrapper class: self status.
	messageTag contents: self message
! !

!HLBindingActionInputWidget methodsFor: 'rendering'!

renderOn: html
	wrapper ifNil: [ wrapper := html span ].

	wrapper 
		class: self status;
		with: [
			input := html input
				placeholder: self ghostText;
				value: self defaultValue;
				onKeyDown: [ :event | 
					event which = 13 ifTrue: [
						self evaluate: input asJQuery val ] ]
				yourself.
			input asJQuery 
				typeahead: #{ 'source' -> self inputCompletion }.
			messageTag := (html span
				class: 'help-inline';
				with: self message;
				yourself) ].
	
	"Evaluate with a timeout to ensure focus.
	Commands can be executed from a menu, clicking on the menu to
	evaluate the command would give it the focus otherwise"
	
	[ input asJQuery focus; select ] valueWithTimeout: 10
! !

Object subclass: #HLKeyBinder
	instanceVariableNames: 'modifierKey helper bindings selectedBinding'
	package: 'Helios-KeyBindings'!
!HLKeyBinder commentStamp!
My `current` instance holds keybindings for Helios actions and evaluate them.

Bindings can be nested by groups. The `bindings` instance variable holds the root of the key bindings tree.

Bindings are instances of a concrete subclass of `HLBinding`.

I am always either in 'active' or 'inactive' state. In active state I capture key down events and my `helper` widget is displayed at the bottom of the window. My `selectedBinding`, if any, is displayed by the helper.

Bindings are evaluated through `applyBinding:`. If a binding is final (not a group of other bindings), evaluating it will result in deactivating the binder, and hiding the `helper` widget.!

!HLKeyBinder methodsFor: 'accessing'!

activationKey
	"SPACE"
	^ 32
!

activationKeyLabel
	^ 'ctrl + space'
!

bindings
	^ bindings ifNil: [ bindings := self defaultBindings ]
!

escapeKey
	"ESC"
	^ 27
!

helper
	^ helper
!

selectedBinding
	^ selectedBinding ifNil: [ self bindings ]
! !

!HLKeyBinder methodsFor: 'actions'!

activate
	self helper show
!

applyBinding: aBinding
	aBinding isActive ifFalse: [ ^ self ].
	
	self selectBinding: aBinding.
    aBinding apply
!

deactivate
	selectedBinding ifNotNil: [ selectedBinding release ].
    selectedBinding := nil.
	self helper hide
!

flushBindings
	bindings := nil
!

selectBinding: aBinding
	aBinding = selectedBinding ifTrue: [ ^ self ].
	
	selectedBinding := aBinding.
	self helper refresh
! !

!HLKeyBinder methodsFor: 'defaults'!

defaultBindings
	| group |
	
	group := HLBindingGroup new
		add: HLCloseTabCommand new asBinding;
		add: HLSwitchTabCommand new asBinding;
		yourself.
		
	HLOpenCommand registerConcreteClassesOn: group.
				
	^ group
! !

!HLKeyBinder methodsFor: 'events'!

handleActiveKeyDown: event

	"ESC, ctrl+g ctrl+space deactivate the keyBinder"
	(event which = self escapeKey or: [
		(event which = 71 or: [ event which = self activationKey ]) 
			and: [ event ctrlKey ] ])
        		ifTrue: [ 
           			self deactivate.
					event preventDefault.
					^ false ].
            
    "Handle the keybinding"
    ^ self handleBindingFor: event
!

handleBindingFor: anEvent
	| binding |
    binding := self selectedBinding atKey: anEvent which.
    
    binding ifNotNil: [ 
    	self applyBinding: binding.
		anEvent preventDefault.
		^ false ]
!

handleInactiveKeyDown: event
	event which = self activationKey ifTrue: [
    	event ctrlKey ifTrue: [
			self activate. 
            event preventDefault. 
            ^ false ] ]
!

handleKeyDown: event
	^ self isActive
    	ifTrue: [ self handleActiveKeyDown: event ]
      	ifFalse: [ self handleInactiveKeyDown: event ]
!

setupEvents
	'body' asJQuery keydown: [ :event | self handleKeyDown: event ]
! !

!HLKeyBinder methodsFor: 'initialization'!

initialize
	super initialize.
	helper := HLKeyBinderHelperWidget on: self
! !

!HLKeyBinder methodsFor: 'testing'!

isActive
	^ ('.', self helper cssClass) asJQuery is: ':visible'
!

systemIsMac
	^ navigator platform match: 'Mac'
! !

HLKeyBinder class instanceVariableNames: 'current'!

!HLKeyBinder class methodsFor: 'instance creation'!

current
	^ current ifNil: [ current := super new ]
!

new
	self shouldNotImplement
! !

HLWidget subclass: #HLKeyBinderHelperWidget
	instanceVariableNames: 'keyBinder'
	package: 'Helios-KeyBindings'!
!HLKeyBinderHelperWidget commentStamp!
I am the widget responsible for displaying active keybindings in a bar at the bottom of the window. Each keybinding is an instance of `HLBinding`. 

Rendering is done through a double dispatch, see `#renderSelectedBindingOn:`.!

!HLKeyBinderHelperWidget methodsFor: 'accessing'!

cssClass
	^ 'key_helper'
!

keyBinder
	^ keyBinder
!

keyBinder: aKeyBinder
	keyBinder := aKeyBinder
!

mainId
	^ 'binding-helper-main'
!

selectedBinding
	^ self keyBinder selectedBinding
! !

!HLKeyBinderHelperWidget methodsFor: 'actions'!

deactivate
	self keyBinder deactivate
!

hide
	('.', self cssClass) asJQuery remove.
	'.helper_overlay' asJQuery remove.
	self showCog
!

hideCog
	'#cog-helper' asJQuery hide
!

show
	self hideCog.
	self appendToJQuery: 'body' asJQuery
!

showCog
	'#cog-helper' asJQuery show
!

showWidget: aWidget
	"Some actions need to display more info to the user or request input.
	This method is the right place for that"
	
	('#', self mainId) asJQuery empty.
	aWidget appendToJQuery: ('#', self mainId) asJQuery
! !

!HLKeyBinderHelperWidget methodsFor: 'rendering'!

renderBindingActionFor: aBinding on: html
	html span class: 'command'; with: [
		html strong 
			class: 'label'; 
			with: aBinding shortcut asLowercase.
  		html a 
        	class: 'action'; 
            with: aBinding displayLabel;
  			onClick: [ self keyBinder applyBinding: aBinding ] ]
!

renderBindingGroup: aBindingGroup on: html
	(aBindingGroup activeBindings 
    	sorted: [ :a :b | a key < b key ])
        do: [ :each | self renderBindingActionFor: each on: html ]
!

renderCloseOn: html
	html a
		class: 'close';
		with: [ (html tag: 'i') class: 'icon-remove' ];
		onClick: [ self keyBinder deactivate ]
!

renderContentOn: html
	html div 
		id: 'overlay';
		class: 'helper_overlay';
		onClick: [ self deactivate ].
	
	html div class: self cssClass; with: [
      	self renderLabelOn: html.
		html div
			id: self mainId;
			with: [ self renderSelectedBindingOn: html ].
		self renderCloseOn: html ].
		
	':focus' asJQuery blur
!

renderLabelOn: html
		html span 
        	class: 'selected'; 
            with: (self selectedBinding label ifNil: [ 'Action' ])
!

renderSelectedBindingOn: html
	self selectedBinding renderOn: self html: html
! !

!HLKeyBinderHelperWidget class methodsFor: 'instance creation'!

on: aKeyBinder
	^ self new
    	keyBinder: aKeyBinder;
        yourself
! !

Object subclass: #HLRepeatedKeyDownHandler
	instanceVariableNames: 'repeatInterval delay interval keyBindings widget keyDown'
	package: 'Helios-KeyBindings'!
!HLRepeatedKeyDownHandler commentStamp!
I am responsible for handling repeated key down actions for widgets.

##Usage

    (self on: aWidget)
        whileKeyDown: 38 do: aBlock;
        whileKeyDown: 40 do: anotherBlock;
        bindKeys

I perform an action block on a key press, wait for 300 ms and then preform the same action block every `repeatInterval` milliseconds until the key is released.!

!HLRepeatedKeyDownHandler methodsFor: 'accessing'!

keyBindings
	^ keyBindings ifNil: [ keyBindings := Dictionary new ]
!

repeatInterval
	^ repeatInterval ifNil: [ self defaultRepeatInterval ]
!

repeatInterval: anInteger
	repeatInterval := anInteger
!

widget
	^ widget
!

widget: aWidget
	widget := aWidget
! !

!HLRepeatedKeyDownHandler methodsFor: 'actions'!

startRepeatingAction: aBlock
	^ [ (self widget hasFocus)
		ifTrue: [ aBlock value ]
		ifFalse: [ self handleKeyUp ] ] valueWithInterval: self repeatInterval
!

whileKeyDown: aKey do: aBlock
	self keyBindings at: aKey put: aBlock
! !

!HLRepeatedKeyDownHandler methodsFor: 'binding'!

bindKeys
	self widget 
		bindKeyDown: [ :e | self handleKeyDown: e ] 
		keyUp: [ :e | self handleKeyUp ]
!

rebindKeys
	self 
		unbindKeys;
		bindKeys
!

unbindKeys
	self widget unbindKeyDownKeyUp
! !

!HLRepeatedKeyDownHandler methodsFor: 'defaults'!

defaultRepeatInterval
	^ 70
! !

!HLRepeatedKeyDownHandler methodsFor: 'events handling'!

handleEvent: anEvent forKey: anInteger action: aBlock
	(anEvent which = anInteger and: [ self isKeyDown not ])
		ifTrue: [ self whileKeyDownDo: aBlock ]
!

handleKeyDown: anEvent
	self keyBindings keysAndValuesDo: [ :key :action | 
		self handleEvent: anEvent forKey: key action: action ]
!

handleKeyUp
	self isKeyDown ifTrue: [
		keyDown := false.
		interval ifNotNil: [ interval clearInterval ].
		delay ifNotNil: [ delay clearTimeout ] ]
!

whileKeyDownDo: aBlock
	keyDown := true.
	aBlock value.
	delay := [ interval := self startRepeatingAction: aBlock ] 
		valueWithTimeout: 300
! !

!HLRepeatedKeyDownHandler methodsFor: 'testing'!

isKeyDown
	^ keyDown ifNil: [ false ]
! !

!HLRepeatedKeyDownHandler class methodsFor: 'instance creation'!

on: aWidget
	^ self new
		widget: aWidget;
		yourself
! !

