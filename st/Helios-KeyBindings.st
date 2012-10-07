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

addGroupKey: anInteger labelled: aString
	self add: (HLBindingGroup on: anInteger labelled: aString)
!

at: aString
	^ self bindings 
    	detect: [ :each | each label = aString ]
      	ifNone: [ nil ]
!

atkey: anInteger
	^ self bindings 
    	detect: [ :each | each key = anInteger ]
      	ifNone: [ nil ]
!

bindings
	^ bindings ifNil: [ bindings := OrderedCollection new ]
! !

!HLBindingGroup methodsFor: 'testing'!

isBindingGroup
	^ true
! !

Object subclass: #HLKeyBinder
	instanceVariableNames: 'modifierKey active helper bindings selectedBinding'
	package: 'Helios-KeyBindings'!

!HLKeyBinder methodsFor: 'accessing'!

bindings
	^ bindings ifNil: [ bindings := HLBindingGroup new ]
!

helper
	^ helper ifNil: [ helper := HLKeyBinderHelper on: self ]
!

modifierKey
	^ modifierKey ifNil: [
		modifierKey = (navigator platform match: 'Mac')
			ifTrue: [ 91 ]
			ifFalse: [ 17 ] ]
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
    aBinding isBindingGroup
    	ifTrue: [
			selectedBinding := aBinding.
    		self helper refresh ]
        ifFalse: [ 
			aBinding callback value.
			self deactivate ]
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

handleBindingFor: anEvent
	| binding |
    binding := self selectedBinding atKey: anEvent which.
    
    binding ifNotNil: [ 
    	self applyBinding: binding.
		anEvent preventDefault.
		^ false ]
!

handleBindingKey: anInteger
!

handleKeyDown: event
	self isActive
    	ifTrue: [ 
        	self handleBindingKey: event which ]
      	ifFalse: [
          	event which = self modifierKey ifTrue: [
				self activate. 
                event preventDefault. 
                ^ false ] ]
!

handleKeyUp: event
	event which = self modifierKey ifTrue: [
      	self deactivate ]
!

setupEvents
	(window jQuery: 'body') keydown: [ :event | self handleKeyDown: event ].
    (window jQuery: 'body') keyup: [ :event | self handleKeyUp: event ]
! !

!HLKeyBinder methodsFor: 'initialization'!

initialize
	super initialize.
    active := false
! !

!HLKeyBinder methodsFor: 'testing'!

isActive
	^ active ifNil: [ false ]
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
	(window jQuery: '.key_helper') remove
!

show
	self appendToJQuery: 'body' asJQuery
! !

!HLKeyBinderHelper methodsFor: 'keyBindings'!

registerBindings
	"Do nothing"
! !

!HLKeyBinderHelper methodsFor: 'rendering'!

renderBindingsOn: html
	self selectedBinding bindings do: [ :each |
		html span class: 'command'; with: [
			html span class: 'label'; with: each shortcut asLowercase.
  			html span class: 'action'; with: each label ] ]
!

renderContentOn: html
	html div class: 'key_helper'; with: [
      	self renderBindingsOn: html ]
! !

!HLKeyBinderHelper class methodsFor: 'instance creation'!

on: aKeyBinder
	^ self new
    	keyBinder: aKeyBinder;
        yourself
! !

