Smalltalk current createPackage: 'Helios-KeyBindings' properties: #{}!
Object subclass: #HLBinding
	instanceVariableNames: 'key label'
	package: 'Helios-KeyBindings'!

!HLBinding methodsFor: 'accessing'!

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
	self subclassResponsibility
! !

!HLBinding methodsFor: 'rendering'!

renderOn: aBindingHelper html: html
! !

!HLBinding methodsFor: 'testing'!

isBindingAction
	^ false
!

isBindingGroup
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
	instanceVariableNames: 'callback'
	package: 'Helios-KeyBindings'!

!HLBindingAction methodsFor: 'accessing'!

callback
	^ callback
!

callback: aBlock
	callback := aBlock
! !

!HLBindingAction methodsFor: 'actions'!

applyOn: aKeyBinder
	aKeyBinder applyBindingAction: self
! !

!HLBindingAction methodsFor: 'testing'!

isBindingAction
	^ true
! !

HLBinding subclass: #HLBindingGroup
	instanceVariableNames: 'bindings'
	package: 'Helios-KeyBindings'!

!HLBindingGroup methodsFor: 'accessing'!

add: aBinding
	^ self bindings add: aBinding
!

addActionKey: anInteger labelled: aString callback: aBlock
	self add: ((HLBindingAction on: anInteger labelled: aString)
    	callback: aBlock;
        yourself)
!

addActionKey: anInteger labelled: aString command: aCommand
	self add: ((HLBindingAction on: anInteger labelled: aString)
    	command: aCommand;
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

atKey: anInteger
	^ self bindings 
    	detect: [ :each | each key = anInteger ]
      	ifNone: [ nil ]
!

bindings
	^ bindings ifNil: [ bindings := OrderedCollection new ]
! !

!HLBindingGroup methodsFor: 'actions'!

applyOn: aKeyBinder
	aKeyBinder applyBindingGroup: self
! !

!HLBindingGroup methodsFor: 'rendering'!

renderOn: aBindingHelper html: html
	aBindingHelper renderBindingGroup: self on: html
! !

!HLBindingGroup methodsFor: 'testing'!

isBindingGroup
	^ true
! !

Object subclass: #HLKeyBinder
	instanceVariableNames: 'modifierKey active helper bindings selectedBinding'
	package: 'Helios-KeyBindings'!

!HLKeyBinder methodsFor: 'accessing'!

activationKey
	"SPACE"
	^ 32
!

bindings
	^ bindings ifNil: [ bindings := HLBindingGroup new ]
!

escapeKey
	"ESC"
	^ 27
!

helper
	^ helper ifNil: [ helper := HLKeyBinderHelper on: self ]
!

selectedBinding
	^ selectedBinding ifNil: [ self bindings ]
! !

!HLKeyBinder methodsFor: 'actions'!

activate
	active := true.
	self helper show
!

applyBinding: aBinding
    aBinding applyOn: self
!

applyBindingAction: aBinding
    aBinding callback value.
	self deactivate
!

applyBindingGroup: aBinding
    selectedBinding := aBinding.
    self helper refresh
!

deactivate
	active := false.
    selectedBinding := nil.
	self helper hide
!

flushBindings
	bindings := nil.
    helper := nil
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
    active := false
! !

!HLKeyBinder methodsFor: 'testing'!

isActive
	^ active ifNil: [ false ]
!

systemIsMac
	^ navigator platform match: 'Mac'
! !

HLWidget subclass: #HLKeyBinderHelper
	instanceVariableNames: 'keyBinder'
	package: 'Helios-KeyBindings'!

!HLKeyBinderHelper methodsFor: 'accessing'!

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
	rootDiv asJQuery remove
!

show
	self appendToJQuery: 'body' asJQuery
! !

!HLKeyBinderHelper methodsFor: 'keyBindings'!

registerBindings
	"Do nothing"
! !

!HLKeyBinderHelper methodsFor: 'rendering'!

renderBindingGroup: aBindingGroup on: html
	(aBindingGroup bindings 
    	sorted: [ :a :b | a key < b key ])
        do: [ :each |
			html span class: 'command'; with: [
				html span class: 'label'; with: each shortcut asLowercase.
  				html a 
                	class: 'action'; 
                    with: each label;
  					onClick: [ self keyBinder applyBinding: each ] ] ]
!

renderBindingOn: html
	self selectedBinding renderOn: self html: html
!

renderContentOn: html
	html div class: 'key_helper'; with: [
      	self 
        	renderSelectionOn:html;
          	renderBindingOn: html ]
!

renderSelectionOn: html
		html span 
        	class: 'selected'; 
            with: (self selectedBinding label ifNil: [ 'Action' ])
! !

!HLKeyBinderHelper class methodsFor: 'instance creation'!

on: aKeyBinder
	^ self new
    	keyBinder: aKeyBinder;
        yourself
! !

