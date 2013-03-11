Smalltalk current createPackage: 'Helios-KeyBindings'!
Object subclass: #HLBinding
 instanceVariableNames: 'key label each'
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
!

applyOn: aKeyBinder then: aBlock
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
		ifFalse: [ self command execute ]
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
 instanceVariableNames: 'input callback'
 package: 'Helios-KeyBindings'!

!HLBindingInput methodsFor: 'accessing'!

callback
	^ callback ifNil: [ callback := [ :value | ] ]
!

callback: aBlock
	callback := aBlock
!

input
	^ input asJQuery val
!

renderActionFor: aBinder html: html
	html span 
		class: 'command'; 
		with: [
			input := html input
				class: 'search-query';
				placeholder: self displayLabel ].
				
	input onKeyPress: [:event |
		event keyCode = 13 ifTrue: [
			self applyOn: aBinder ] ].
				
	input asJQuery focus
! !

!HLBindingInput methodsFor: 'actions'!

applyOn: aKeyBinder
	self evaluate: self input
!

evaluate: aString
	self callback value: aString
! !

!HLBindingInput methodsFor: 'testing'!

isActive
	^ true
! !

Object subclass: #HLKeyBinder
 instanceVariableNames: 'modifierKey helper bindings selectedBinding'
 package: 'Helios-KeyBindings'!

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
    aBinding applyOn: self.
	
	aBinding isFinal ifTrue: [ self deactivate ]
!

deactivate
    selectedBinding := nil.
	self helper hide
!

flushBindings
	bindings := nil
!

selectBinding: aBinding	
	selectedBinding := aBinding.
	self helper refresh
! !

!HLKeyBinder methodsFor: 'defaults'!

defaultBindings
	| group |
	
	group := HLBindingGroup new
		addGroupKey: 86 labelled: 'View';
		add: HLCloseTabCommand new asBinding;
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
      		event ctrlKey  ifTrue: [
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
	(window jQuery: 'body') keydown: [ :event | self handleKeyDown: event ]
! !

!HLKeyBinder methodsFor: 'initialization'!

initialize
	super initialize.
	helper := HLKeyBinderHelper on: self.
	helper 	
		renderStart;
		renderCog.
    active := false
! !

!HLKeyBinder methodsFor: 'testing'!

isActive
	^ ('.', self helper cssClass) asJQuery is: ':visible'
!

systemIsMac
	^ navigator platform match: 'Mac'
! !

HLWidget subclass: #HLKeyBinderHelper
 instanceVariableNames: 'keyBinder'
 package: 'Helios-KeyBindings'!

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

!HLKeyBinderHelper methodsFor: 'keyBindings'!

registerBindings
	"Do nothing"
! !

!HLKeyBinderHelper methodsFor: 'rendering'!

renderBindingGroup: aBindingGroup on: html
	(aBindingGroup activeBindings 
    	sorted: [ :a :b | a key < b key ])
        do: [ :each | each renderActionFor: self keyBinder html: html ]
!

renderBindingOn: html
	self selectedBinding renderOn: self html: html
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
        	renderSelectionOn:html;
          	renderBindingOn: html;
			renderCloseOn: html ]
!

renderSelectionOn: html
		html span 
        	class: 'selected'; 
            with: (self selectedBinding label ifNil: [ 'Action' ])
!

renderStart
	[ :html |
		html div 
			id: 'keybinding-start-helper';
			with: 'Press ', self keyBinder activationKeyLabel, ' to start' ] appendToJQuery: 'body' asJQuery.
	
	[ (window jQuery: '#keybinding-start-helper') fadeOut: 1000 ] 
		valueWithTimeout: 2000
! !

!HLKeyBinderHelper class methodsFor: 'instance creation'!

on: aKeyBinder
	^ self new
    	keyBinder: aKeyBinder;
        yourself
! !

