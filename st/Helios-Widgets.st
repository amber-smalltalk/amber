Smalltalk current createPackage: 'Helios-Widgets' properties: #{}!
Object subclass: #HLTab
	instanceVariableNames: 'widget label'
	package: 'Helios-Widgets'!

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
	^ HLTabManager current
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
	package: 'Helios-Widgets'!

!HLWidget methodsFor: 'accessing'!

announcer
	^ self manager announcer
!

manager
	^ HLTabManager current
! !

!HLWidget methodsFor: 'announces'!

announce: anObject
	self announcer announce: anObject
!

on: anAnnouncement do: aBlock
	self announcer on: anAnnouncement do: aBlock
! !

!HLWidget methodsFor: 'initialization'!

initialize
	super initialize.
    self subscribe
!

subscribe
! !

!HLWidget methodsFor: 'rendering'!

renderContentOn: html
!

renderOn: html
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
	HLTabManager current addTab: (HLTab on: self new labelled: self tabLabel)
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

HLWidget subclass: #HLBrowser
	instanceVariableNames: 'environment selectedPackage selectedClass packagesListWidget classesListWidget'
	package: 'Helios-Widgets'!

!HLBrowser methodsFor: 'accessing'!

classesListWidget
	^ classesListWidget ifNil: [
      	classesListWidget := HLClassesListWidget on: self ]
!

environment
	^ environment ifNil: [ environment := Smalltalk current ]
!

environment: anEnvironment
	environment := anEnvironment
!

packagesListWidget
	^ packagesListWidget ifNil: [
      	packagesListWidget := HLPackagesListWidget on: self ]
!

selectPackage: aPackage
	selectedPackage := aPackage.
    selectedClass := nil.
    
    self classesListWidget package: aPackage.
!

selectedPackage
	^ selectedPackage
! !

!HLBrowser methodsFor: 'rendering'!

renderContentOn: html
	html with: (HLContainer with: (HLHorizontalSplitter 
    	with: (HLVerticalSplitter
        	with: (HLVerticalSplitter
            	with: self packagesListWidget
                with: self classesListWidget)
            with: (HLVerticalSplitter
            	with: 'Protocols'
                with: 'Methods')) 
        with: 'Source Code'))
!

renderTopPanesOn: html
	html div class: 'pane'; with: self packagesListWidget.
	html div class: 'pane'; with: self classesListWidget.
    html div class: 'pane'; with: 'hello'.
	html div class: 'pane'; with: 'world'
! !

HLBrowser class instanceVariableNames: 'nextId'!

!HLBrowser class methodsFor: 'accessing'!

nextId
	nextId ifNil: [ nextId := 0 ].
    ^ 'browser_', (nextId + 1) asString
!

tabLabel
	^ 'Browser'
!

tabPriority
	^ 0
! !

!HLBrowser class methodsFor: 'testing'!

canBeOpenAsTab
	^ true
! !

HLWidget subclass: #HLDebugger
	instanceVariableNames: ''
	package: 'Helios-Widgets'!

HLWidget subclass: #HLFocusableWidget
	instanceVariableNames: 'hiddenInput'
	package: 'Helios-Widgets'!

!HLFocusableWidget methodsFor: 'accessing'!

focusClass
	^ 'focused'
! !

!HLFocusableWidget methodsFor: 'events'!

blur
	rootDiv asJQuery removeClass: self focusClass.
!

focus
	rootDiv asJQuery addClass: self focusClass
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
    	onBlur: [ self blur ];
        onFocus: [ self focus ]
!

renderOn: html
	self renderHiddenInputOn: html.
    
    rootDiv := html div 
    	class: 'hl_widget'; 
        onClick: [ hiddenInput asJQuery focus ];
        with: [
			self renderContentOn: html ]
! !

HLFocusableWidget subclass: #HLListWidget
	instanceVariableNames: 'items selectedItem'
	package: 'Helios-Widgets'!

!HLListWidget methodsFor: 'accessing'!

cssClassForItem: anObject
	^ self selectedItem = anObject
			ifTrue: [ 'active' ]
			ifFalse: [ 'inactive' ]
!

items
	^ self subclassResponsibility
!

selectedItem
	^ selectedItem ifNil: [ 
    	self items ifNotEmpty: [ self items first ] ]
!

selectedItem: anObject
	selectedItem := anObject
! !

!HLListWidget methodsFor: 'actions'!

activateListItem: aListItem
	aListItem asJQuery parent children removeClass: 'active'.
	aListItem asJQuery addClass: 'active'
!

selectItem: anObject
	self selectedItem: anObject
! !

!HLListWidget methodsFor: 'rendering'!

renderContentOn: html
	html ul 
    	class: 'nav nav-pills nav-stacked';
        with: [ 
        	self items do: [ :each | 
            	self renderItem: each on: html ] ]
!

renderItem: anObject on: html
	| li |
    
	li := html li.
    li
    	class: (self cssClassForItem: anObject);
        with: [ 
        	html a
            	with: [ 
            		(html tag: 'i') class: anObject heliosListIcon.
  					self renderItemLabel: anObject on: html ];
				onClick: [
                  	self activateListItem: li.
                	self selectItem: anObject ] ]
!

renderItemLabel: anObject on: html
	html with: anObject asString
! !

HLListWidget subclass: #HLBrowserListWidget
	instanceVariableNames: 'browser'
	package: 'Helios-Widgets'!

!HLBrowserListWidget methodsFor: 'accessing'!

browser
	^ browser
!

browser: aBrowser
	browser := aBrowser
! !

!HLBrowserListWidget class methodsFor: 'instance creation'!

on: aBrowser
	^ self new
    	browser: aBrowser;
        yourself
! !

HLBrowserListWidget subclass: #HLClassesListWidget
	instanceVariableNames: 'package'
	package: 'Helios-Widgets'!

!HLClassesListWidget methodsFor: 'accessing'!

items
	^ self package 
    	ifNil: [ #() ]
  		ifNotNil: [ self package classes ]
!

package
	^ package
!

package: aPackage
	package := aPackage.
    self refresh
! !

HLBrowserListWidget subclass: #HLPackagesListWidget
	instanceVariableNames: ''
	package: 'Helios-Widgets'!

!HLPackagesListWidget methodsFor: 'accessing'!

browser
	^ browser
!

browser: aBrowser
	browser := aBrowser
!

environment
	^ self browser environment
!

items
	^ self environment packages
! !

!HLPackagesListWidget methodsFor: 'actions'!

selectItem: aPackage
	super selectItem: aPackage.
    self browser selectPackage: aPackage
! !

HLWidget subclass: #HLInspector
	instanceVariableNames: ''
	package: 'Helios-Widgets'!

HLWidget subclass: #HLSUnit
	instanceVariableNames: ''
	package: 'Helios-Widgets'!

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

HLWidget subclass: #HLTabManager
	instanceVariableNames: 'tabs activeTab announcer'
	package: 'Helios-Widgets'!

!HLTabManager methodsFor: 'accessing'!

activate: aTab
	activeTab := aTab.
	self 
		refresh;
		show: aTab
!

activeTab
	^ activeTab
!

addTab: aTab
	self tabs add: aTab.
    self activate: aTab
!

announcer
	^ announcer ifNil: [ announcer := Announcer new ]
!

removeTab: aTab
	"Todo: activate the previously activated tab. Keep a history of tabs selection"

	(self tabs includes: aTab) ifFalse: [ ^ self ].

	self tabs remove: aTab.
	self refresh
!

tabs
	^ tabs ifNil: [ tabs := OrderedCollection new ]
! !

!HLTabManager methodsFor: 'rendering'!

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

HLTabManager class instanceVariableNames: 'current'!

!HLTabManager class methodsFor: 'accessing'!

current
	^ current ifNil: [ current := self basicNew initialize ]
! !

!HLTabManager class methodsFor: 'initialization'!

initialize
	self current appendToJQuery: 'body' asJQuery
! !

!HLTabManager class methodsFor: 'instance creation'!

new
	"Use current instead"

	self shouldNotImplement
! !

HLWidget subclass: #HLTranscript
	instanceVariableNames: ''
	package: 'Helios-Widgets'!

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

HLWidget subclass: #HLWorkspace
	instanceVariableNames: ''
	package: 'Helios-Widgets'!

!HLWorkspace class methodsFor: 'accessing'!

tabLabel
	^ 'Workspace'
!

tabPriority
	^ 10
! !

!HLWorkspace class methodsFor: 'testing'!

canBeOpenAsTab
	^ true
! !

!Object methodsFor: '*Helios-Widgets'!

heliosListIcon
	^ ''
! !

