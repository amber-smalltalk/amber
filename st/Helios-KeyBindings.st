Smalltalk current createPackage: 'Helios-KeyBindings'!
Object subclass: #HLBinding
	instanceVariableNames: 'key label'
	package: 'Helios-KeyBindings'!

!HLBinding methodsFor: 'accessing'!

atKey: aKey
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

applyOn: aKeyBinder
	self isFinal ifTrue: [ aKeyBinder deactivate ]
!

release
! !

!HLBinding methodsFor: 'rendering'!

renderActionFor: aBinder html: html
	html span class: 'command'; with: [
		html span 
			class: 'label'; 
			with: self shortcut asLowercase.
  		html a 
        	class: 'action'; 
            with: self displayLabel;
  			onClick: [ aBinder applyBinding: self ] ]
!

renderOn: aBindingHelper html: html
! !

!HLBinding methodsFor: 'testing'!

isActive
	^ self subclassResponsibility
!

isFinal
	" Answer true if the receiver is the final binding of a sequence "
	
	^ false
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

!HLBindingAction methodsFor: 'accessing'!

command
	^ command
!

command: aCommand
	command := aCommand
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
! !

!HLBindingAction methodsFor: 'actions'!

applyOn: aKeyBinder
	self command isInputRequired
		ifTrue: [ aKeyBinder selectBinding: self inputBinding ]
		ifFalse: [ self command execute ].
	super applyOn: aKeyBinder
! !

!HLBindingAction methodsFor: 'testing'!

isActive
	^ self command isActive
!

isFinal
	^ self command isInputRequired not
! !

HLBinding subclass: #HLBindingGroup
	instanceVariableNames: 'bindings'
	package: 'Helios-KeyBindings'!

!HLBindingGroup methodsFor: 'accessing'!

activeBindings
	^ self bindings select: [ :each | each isActive ]
!

add: aBinding
	^ self bindings add: aBinding
!

addActionKey: anInteger labelled: aString callback: aBlock
	self add: ((HLBindingAction on: anInteger labelled: aString)
    	callback: aBlock;
        yourself)
!

addGroupKey: anInteger labelled: aString
	self add: (HLBindingGroup on: anInteger labelled: aString)
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

!HLBindingGroup methodsFor: 'rendering'!

renderOn: aBindingHelper html: html
	self isActive ifTrue: [
		aBindingHelper renderBindingGroup: self on: html ]
! !

!HLBindingGroup methodsFor: 'testing'!

isActive
	^ self activeBindings notEmpty
! !

HLBinding subclass: #HLBindingInput
	instanceVariableNames: 'input callback status wrapper binder ghostText isFinal message messageTag inputCompletion defaultValue'
	package: 'Helios-KeyBindings'!
!HLBindingInput commentStamp!
This class should be refactored the following way:

- It shouldn't be a binding but a widget
- the binder helper should display the widget if the BindingAction requires an input before evaluating it.!

!HLBindingInput methodsFor: 'accessing'!

atKey: aKey
	aKey = 13 ifFalse: [ ^ nil ]
!

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

!HLBindingInput methodsFor: 'actions'!

applyOn: aKeyBinder
	self isFinal: true.
	self evaluate: self input asJQuery val
!

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
	do: [:ex |
		self input asJQuery 
			one: 'keydown' 
			do: [ self clearStatus ].
		self message: ex messageText.
		self errorStatus.
		self isFinal: false ].
!

release
	status := nil.
	wrapper := nil.
	binder := nil
! !

!HLBindingInput methodsFor: 'rendering'!

refresh
	wrapper ifNil: [ ^ self ].
    
	wrapper class: self status.
	messageTag contents: self message
!

renderOn: aBinder html: html
	binder := aBinder.
	wrapper ifNil: [ wrapper := html span ].

	wrapper 
		class: self status;
		with: [
			input := html input
				placeholder: self ghostText;
				value: self defaultValue;
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
	
	[ input asJQuery focus ] valueWithTimeout: 10
! !

!HLBindingInput methodsFor: 'testing'!

isActive
	^ true
!

isFinal
	^ isFinal ifNil: [ isFinal := super isFinal ]
!

isFinal: aBoolean
	isFinal := aBoolean
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
    aBinding applyOn: self
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

	"ESC or ctrl+g deactivate the keyBinder"
	(event which = self escapeKey or: [
		event which = 71 and: [ event ctrlKey ] ])
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
	helper := HLKeyBinderHelper on: self.
	helper 	
		renderStart;
		renderCog
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

HLWidget subclass: #HLKeyBinderHelper
	instanceVariableNames: 'keyBinder'
	package: 'Helios-KeyBindings'!
!HLKeyBinderHelper commentStamp!
I am the widget responsible for displaying active keybindings in a bar at the bottom of the window. Each keybinding is an instance of `HLBinding`. 

Rendering is done through a double dispatch, see `#renderSelectedBindingOn:`.!

!HLKeyBinderHelper methodsFor: 'accessing'!

cssClass
	^ 'key_helper'
!

keyBinder
	^ keyBinder
!

keyBinder: aKeyBinder
	keyBinder := aKeyBinder
!

selectedBinding
	^ self keyBinder selectedBinding
! !

!HLKeyBinderHelper methodsFor: 'actions'!

hide
	('.', self cssClass) asJQuery remove.
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
! !

!HLKeyBinderHelper methodsFor: 'rendering'!

renderBindingActionFor: aBinding on: html
	html span class: 'command'; with: [
		html span 
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

renderCog
	[ :html |
		html 
			div id: 'cog-helper'; 
			with: [
				html a 
					with: [ (html tag: 'i') class: 'icon-cog' ];
					onClick: [ self keyBinder activate ] ] ]
		appendToJQuery: 'body' asJQuery
!

renderContentOn: html
	html div class: self cssClass; with: [
      	self 
        	renderLabelOn:html;
          	renderSelectedBindingOn: html;
			renderCloseOn: html ]
!

renderLabelOn: html
		html span 
        	class: 'selected'; 
            with: (self selectedBinding label ifNil: [ 'Action' ])
!

renderSelectedBindingOn: html
	self selectedBinding renderOn: self html: html
!

renderStart
	'#helper' asJQuery remove.

	[ :html |
		html div 
			id: 'helper';
			with: 'Press ', self keyBinder activationKeyLabel, ' to start' ] appendToJQuery: 'body' asJQuery.
	
	[ '#helper' asJQuery fadeOut: 1000 ] 
		valueWithTimeout: 2000
! !

!HLKeyBinderHelper class methodsFor: 'instance creation'!

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

