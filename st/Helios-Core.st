Smalltalk current createPackage: 'Helios-Core' properties: #{}!
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
	instanceVariableNames: 'wrapper'
	package: 'Helios-Core'!

!HLWidget methodsFor: 'accessing'!

manager
	^ HLManager current
!

wrapper
	^ wrapper
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

	wrapper := html div.
    [ :renderer | self renderContentOn: renderer ] appendToJQuery: wrapper asJQuery
! !

!HLWidget methodsFor: 'updating'!

refresh
	self wrapper ifNil: [ ^ self ].
    
	self wrapper asJQuery empty.
    [ :html | self renderContentOn: html ] appendToJQuery: self wrapper asJQuery
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
	^ self wrapper notNil and: [ self wrapper asJQuery hasClass: self focusClass ]
! !

!HLFocusableWidget methodsFor: 'rendering'!

renderContentOn: html
!

renderHiddenInputOn: html
	hiddenInput := html input
    	style: 'position: absolute; left: -100000px;';
    	onBlur: [ self wrapper asJQuery removeClass: self focusClass ];
        onFocus: [ self wrapper asJQuery addClass: self focusClass ]
!

renderOn: html
	self registerBindings.
	self renderHiddenInputOn: html.
    
    wrapper := html div 
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
	^ items ifNil: [ items := self defaultItems ]
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

activateFirstListItem
	self activateListItem: (window jQuery: ((wrapper asJQuery find: 'li') get: 0))
!

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

focus
	super focus.
    self items isEmpty ifFalse: [ 
		self selectedItem ifNil: [ self activateFirstListItem ] ]
!

selectItem: anObject
	self selectedItem: anObject
! !

!HLListWidget methodsFor: 'defaults'!

defaultItems
	^ #()
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
	instanceVariableNames: 'tabs activeTab keyBinder environment'
	package: 'Helios-Core'!

!HLManager methodsFor: 'accessing'!

activeTab
	^ activeTab
!

environment
	"The default environment used by all Helios objects"
    
	^ environment ifNil: [ environment := self defaultEnvironment ]
!

environment: anEnvironment
	environment := anEnvironment
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

!HLManager methodsFor: 'defaults'!

defaultEnvironment
	^ HLLocalEnvironment new
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

