Smalltalk current createPackage: 'Helios' properties: #{}!
Widget subclass: #HLBrowser
	instanceVariableNames: ''
	package: 'Helios'!

Widget subclass: #HLDebugger
	instanceVariableNames: ''
	package: 'Helios'!

Widget subclass: #HLInspector
	instanceVariableNames: ''
	package: 'Helios'!

Widget subclass: #HLSUnit
	instanceVariableNames: ''
	package: 'Helios'!

Object subclass: #HLTab
	instanceVariableNames: 'widget label'
	package: 'Helios'!

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

Widget subclass: #HLTabManager
	instanceVariableNames: 'tabs activeTab'
	package: 'Helios'!

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
	self refresh
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

renderOn: html
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
		with: [ self tabs do: [ :each |
			html li 
				class: (each isActive ifTrue: [ 'active' ] ifFalse: [ 'inactive' ]);
				with: [
					html a
						with: each label;
						onClick: [ each activate ] ] ] ]
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

Widget subclass: #HLTranscript
	instanceVariableNames: ''
	package: 'Helios'!

Widget subclass: #HLWorkspace
	instanceVariableNames: ''
	package: 'Helios'!

