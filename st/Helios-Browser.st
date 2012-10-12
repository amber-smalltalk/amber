Smalltalk current createPackage: 'Helios-Browser' properties: #{}!
HLWidget subclass: #HLBrowser
	instanceVariableNames: 'model packagesListWidget classesListWidget protocolsListWidget methodsListWidget sourceWidget'
	package: 'Helios-Browser'!

!HLBrowser methodsFor: 'accessing'!

announcer
	^ self model announcer
!

environment
	^ self model environment
!

model
	^ model ifNil: [ model := HLBrowserModel new ]
!

model: aModel
	model := aModel
! !

!HLBrowser methodsFor: 'keybindings'!

registerBindingsOn: aBindingGroup
	aBindingGroup 
    	addGroupKey: 66 labelled: 'Browse';
        addGroupKey: 71 labelled: 'Go to';
        addGroupKey: 84 labelled: 'Toggle'.
        
   	HLBrowserCommand withAllSubclasses do: [ :each |
   		each key ifNotNil: [
  			(aBindingGroup at: each bindingGroup) 
  				add: (each on: self model) asBinding ] ]
! !

!HLBrowser methodsFor: 'rendering'!

renderContentOn: html
	html with: (HLContainer with: (HLHorizontalSplitter 
    	with: (HLVerticalSplitter
        	with: (HLVerticalSplitter
            	with: self packagesListWidget
                with: self classesListWidget)
            with: (HLVerticalSplitter
            	with: self protocolsListWidget
                with: self methodsListWidget)) 
        with: self sourceWidget))
! !

!HLBrowser methodsFor: 'widgets'!

classesListWidget
	^ classesListWidget ifNil: [
      	classesListWidget := HLClassesListWidget on: self model.
		classesListWidget next: self protocolsListWidget ]
!

methodsListWidget
	^ methodsListWidget ifNil: [
      	methodsListWidget := HLMethodsListWidget on: self model ]
!

packagesListWidget
	^ packagesListWidget ifNil: [
      	packagesListWidget := HLPackagesListWidget on: self model.
		packagesListWidget next: self classesListWidget ]
!

protocolsListWidget
	^ protocolsListWidget ifNil: [
      	protocolsListWidget := HLProtocolsListWidget on: self model.
		protocolsListWidget next: self methodsListWidget ]
!

sourceWidget
	^ sourceWidget ifNil: [
      	sourceWidget := HLBrowserSourceWidget on: self model ]
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

HLNavigationListWidget subclass: #HLBrowserListWidget
	instanceVariableNames: 'model'
	package: 'Helios-Browser'!

!HLBrowserListWidget methodsFor: 'accessing'!

model
	^ model
!

model: aBrowserModel
	"TODO: unsubscribe from previous model"
    
	model := aBrowserModel.
    model subscribe: self
! !

!HLBrowserListWidget class methodsFor: 'instance creation'!

on: aModel
	^ self new 
    	model: aModel;
        yourself
! !

HLBrowserListWidget subclass: #HLClassesListWidget
	instanceVariableNames: ''
	package: 'Helios-Browser'!

!HLClassesListWidget methodsFor: 'accessing'!

getChildrenOf: aClass
	^ self items select: [ :each | each superclass = aClass ]
!

getRootClassesOf: aCollection
	^ aCollection select: [ :each |
    	(each allSuperclasses intersection: aCollection) isEmpty ]
!

iconForItem: aClass
	^ aClass theNonMetaClass comment isEmpty
    	ifFalse: [ 'icon-none' ]
      	ifTrue: [ 'icon-question-sign' ]
!

showInstance
	^ self model showInstance
! !

!HLClassesListWidget methodsFor: 'actions'!

focusMethodsListWidget
	self model announcer announce: HLMethodsListFocus new
!

focusProtocolsListWidget
	self model announcer announce: HLProtocolsListFocus new
!

packageSelected: aPackage
    self selectedItem: nil.
    
    self items: (aPackage 
    	ifNil: [ #() ]
  		ifNotNil: [ (aPackage classes 
        	collect: [ :each | each theNonMetaClass ]) asSet asArray ]).

    self refresh
!

selectItem: aClass
	super selectItem: aClass.
    self model selectedClass: aClass
!

showInstance: aBoolean
	self model showInstance: aBoolean
! !

!HLClassesListWidget methodsFor: 'announcements'!

subscribeTo: anAnnouncer
	anAnnouncer on: HLPackageSelected do: [ :ann |
    	self packageSelected: ann item ].
    anAnnouncer on: HLShowInstanceToggled do: [ :ann |
    	self refresh ].
    anAnnouncer on: HLClassSelected do: [ :ann |
    	self focus ]
! !

!HLClassesListWidget methodsFor: 'rendering'!

renderButtonsOn: html
	html div 
        class: 'btn-group';
		at: 'data-toggle' put: 'buttons-radio';
		with: [ 
           	html button 
                class: (String streamContents: [ :str |
                	str nextPutAll: 'btn'.
                    self showInstance ifTrue: [ 
                    	str nextPutAll: ' active'] ]);
  				with: 'Instance';
                onClick: [ self showInstance: true ].
  			html button
  				class: (String streamContents: [ :str |
                	str nextPutAll: 'btn'.
                    self model showInstance ifFalse: [ 
                    	str nextPutAll: ' active'] ]);
  				with: 'Class';
				onClick: [ self model showInstance: false ] ].
                 
  	html button 
           	class: 'btn';
            at: 'data-toggle' put: 'button';
  			with: 'Comment'
!

renderItem: aClass level: anInteger on: html
	| li |
    
	li := html li.
    li
    	at: 'list-data' put: (self items indexOf: aClass);
    	class: (self cssClassForItem: aClass);
        with: [ 
        	html a
            	with: [ 
            		(html tag: 'i') class: (self iconForItem: aClass).
  					self renderItemLabel: aClass level: anInteger on: html ];
				onClick: [
                  	self activateListItem: li asJQuery ] ].
                    
    (self getChildrenOf: aClass) do: [ :each |
    	self renderItem: each level: anInteger + 1 on: html ]
!

renderItem: aClass on: html
	super renderItem: aClass on: html.
    	(self getChildrenOf: aClass) do: [ :each |
    		self renderItem: each level: 1 on: html ]
!

renderItemLabel: aClass level: anInteger on: html
	html span asJQuery html: (String streamContents: [ :str |
		anInteger timesRepeat: [
			str nextPutAll: '&nbsp;&nbsp;&nbsp;&nbsp;'].
			str nextPutAll: aClass name ])
!

renderItemLabel: aClass on: html
	self renderItemLabel: aClass level: 0 on: html
!

renderListOn: html
	(self getRootClassesOf: self items)
    	do: [ :each | self renderItem: each on: html ]
! !

HLBrowserListWidget subclass: #HLMethodsListWidget
	instanceVariableNames: 'selectorsCache'
	package: 'Helios-Browser'!

!HLMethodsListWidget methodsFor: 'accessing'!

allProtocol
	^ self model allProtocol
!

iconForItem: aCompiledMethod
	| override overriden |
    
    override := self isOverride: aCompiledMethod.
    overriden := self isOverriden: aCompiledMethod.
    
	^ override
    	ifTrue: [ overriden
			ifTrue: [ 'icon-resize-vertical' ]
			ifFalse: [ 'icon-arrow-up' ] ]
		ifFalse: [
			overriden
			ifTrue: [ 'icon-arrow-down' ]
			ifFalse: [ 'icon-none' ] ]
!

methodsInProtocol: aString
	^ aString = self allProtocol
    	ifTrue: [ self model selectedClass methods ]
      	ifFalse: [ self model selectedClass methodsInProtocol: aString ]
!

overrideSelectors
	^ self selectorsCache 
    	at: 'override'
        ifAbsentPut: [ 
        	self model selectedClass allSuperclasses
				inject: Set new into: [ :acc :each | acc addAll: each selectors; yourself ] ]
!

overridenSelectors
	^ self selectorsCache 
    	at: 'overriden'
        ifAbsentPut: [ 
        	self model selectedClass allSubclasses
				inject: Set new into: [ :acc :each | acc addAll: each selectors; yourself ] ]
!

selectorsCache
	^ selectorsCache
! !

!HLMethodsListWidget methodsFor: 'actions'!

protocolSelected: aString
    self selectedItem: nil.
    
    self items: (self model selectedClass 
    	ifNil: [ #() ]
      	ifNotNil: [ aString
    		ifNil: [ #() ]
      		ifNotNil: [ self methodsInProtocol: aString ] ]).
        
    self refresh
!

selectItem: aCompiledMethod
	super selectItem: aCompiledMethod.
   	self model selectedMethod: aCompiledMethod
! !

!HLMethodsListWidget methodsFor: 'announcements'!

subscribeTo: anAnnouncer
	anAnnouncer on: HLProtocolSelected do: [ :ann |
    	self protocolSelected: ann item ].
    anAnnouncer on: HLShowInstanceToggled do: [ :ann |
    	self protocolSelected: nil ].
    anAnnouncer on: HLMethodSelected do: [ :ann |
    	self focus ]
! !

!HLMethodsListWidget methodsFor: 'cache'!

flushSelectorsCache
	selectorsCache := Dictionary new
! !

!HLMethodsListWidget methodsFor: 'initialization'!

initialize
	super initialize.
    self flushSelectorsCache
! !

!HLMethodsListWidget methodsFor: 'rendering'!

renderContentOn: html
	self model showInstance
    	ifFalse: [ html div 
        	class: 'class_side'; 
            with: [ super renderContentOn: html ] ]
      	ifTrue: [ super renderContentOn: html ].
        
    self flushSelectorsCache
!

renderItemLabel: aCompiledMethod on: html
	html with: aCompiledMethod selector
! !

!HLMethodsListWidget methodsFor: 'testing'!

isOverride: aMethod

   ^ self overrideSelectors includes: aMethod selector
!

isOverriden: aMethod

   ^ self overridenSelectors includes: aMethod selector
! !

HLBrowserListWidget subclass: #HLPackagesListWidget
	instanceVariableNames: ''
	package: 'Helios-Browser'!

!HLPackagesListWidget methodsFor: 'accessing'!

items
	^ items ifNil: [ items := self model packages ]
! !

!HLPackagesListWidget methodsFor: 'actions'!

focusClassesListWidget
	self model announcer announce: HLClassesListFocus new
!

selectItem: aPackage
	super selectItem: aPackage.
    self model selectedPackage: aPackage
! !

!HLPackagesListWidget methodsFor: 'announcements'!

subscribeTo: anAnnouncer
    anAnnouncer on: HLPackageSelected do: [ :ann |
    	self focus ]
! !

!HLPackagesListWidget methodsFor: 'rendering'!

renderButtonsOn: html

	html span class: 'info'; with: 'Auto commit'.
	html div 
        class: 'btn-group switch';
		at: 'data-toggle' put: 'buttons-radio';
		with: [ 
           	html button 
                class: (String streamContents: [ :str |
                	str nextPutAll: 'btn' ]);
  				with: 'On'.
  			html button
  				class: (String streamContents: [ :str |
                	str nextPutAll: 'btn active' ]);
  				with: 'Off' ].
                
    html a 
         	class: 'btn';
			with: 'Commit'.
! !

HLBrowserListWidget subclass: #HLProtocolsListWidget
	instanceVariableNames: ''
	package: 'Helios-Browser'!

!HLProtocolsListWidget methodsFor: 'accessing'!

allProtocol
	^ self model allProtocol
!

selectedItem
	^ super selectedItem" ifNil: [ self allProtocol ]"
! !

!HLProtocolsListWidget methodsFor: 'actions'!

classSelected: aClass
    self selectedItem: nil.
    
    self items: (aClass
    	ifNil: [ Array with: self allProtocol ]
      	ifNotNil: [ 
        	(Array with: self allProtocol) 
            	addAll: aClass protocols; 
                yourself ]).

    self refresh
!

selectItem: aString
	super selectItem: aString.
    self model selectedProtocol: aString
! !

!HLProtocolsListWidget methodsFor: 'announcements'!

subscribeTo: anAnnouncer
	anAnnouncer on: HLClassSelected do: [ :ann |
    	self classSelected: ann item ].
    anAnnouncer on: HLShowInstanceToggled do: [ :ann |
    	self classSelected: self model selectedClass ].
    anAnnouncer on: HLProtocolSelected do: [ :ann |
    	self focus ]
! !

!HLProtocolsListWidget methodsFor: 'rendering'!

renderContentOn: html
	self model showInstance
    	ifFalse: [ html div 
        	class: 'class_side'; 
            with: [ super renderContentOn: html ] ]
      	ifTrue: [ super renderContentOn: html ]
! !

Object subclass: #HLBrowserModel
	instanceVariableNames: 'announcer environment selectedPackage selectedClass selectedProtocol selectedMethod showInstance showComment'
	package: 'Helios-Browser'!

!HLBrowserModel methodsFor: 'accessing'!

allProtocol
	^ '-- All --'
!

environment
	^ environment ifNil: [ environment := Smalltalk current ]
!

environment: anEnvironment
	environment := anEnvironment
!

packages
	^ self environment packages
!

selectedClass
	^ selectedClass
!

selectedClass: aClass
	selectedClass = aClass ifFalse: [
		aClass 
    		ifNil: [ selectedClass := nil ]
      		ifNotNil: [
				self showInstance 
    				ifTrue: [ selectedClass := aClass theNonMetaClass ]
      				ifFalse: [ selectedClass := aClass theMetaClass ] ].
    
   		self 
    		selectedMethod: nil;
       	 	selectedProtocol: nil ].
        
   self announcer announce: (HLClassSelected on: self selectedClass)
!

selectedMethod
	^ selectedMethod
!

selectedMethod: aCompiledMethod
	selectedMethod = aCompiledMethod ifFalse: [
		selectedMethod := aCompiledMethod ].
    
    self announcer announce: (HLMethodSelected on: aCompiledMethod)
!

selectedPackage
	^ selectedPackage
!

selectedPackage: aPackage
	selectedPackage = aPackage ifFalse: [
		selectedPackage := aPackage.
    	self selectedClass: nil ].
    
    self announcer announce: (HLPackageSelected on: aPackage)
!

selectedProtocol
	^ selectedProtocol
!

selectedProtocol: aString
	selectedProtocol = aString ifFalse: [
      	selectedProtocol := aString.
    	self selectedMethod: nil ].
    
    self announcer announce: (HLProtocolSelected on: aString)
!

showComment
	^ showComment ifNil: [ false ]
!

showComment: aBoolean
	showComment := aBoolean.
    
    self announcer announce: HLShowCommentToggled new
!

showInstance
	^ showInstance ifNil: [ true ]
!

showInstance: aBoolean
	showInstance := aBoolean.
    
    self selectedClass ifNotNil: [
    	self selectedClass: (aBoolean
    		ifTrue: [self selectedClass theNonMetaClass ]
    	  	ifFalse: [ self selectedClass theMetaClass ]) ].
    
    self announcer announce: HLShowInstanceToggled new
! !

!HLBrowserModel methodsFor: 'announcements'!

announcer
	^ announcer ifNil: [ announcer := Announcer new ]
!

subscribe: aWidget
	aWidget subscribeTo: self announcer
! !

HLWidget subclass: #HLBrowserSourceWidget
	instanceVariableNames: 'model sourceArea'
	package: 'Helios-Browser'!

!HLBrowserSourceWidget methodsFor: 'accessing'!

contents
	^ self sourceArea contents
!

contents: aString
	self sourceArea contents: aString
!

model
	^ model
!

model: aBrowserModel
	"TODO: unsubscribe from previous model"
    
	model := aBrowserModel.
    model subscribe: self
!

sourceArea
	^ sourceArea ifNil: [ sourceArea := HLSourceArea new ]
! !

!HLBrowserSourceWidget methodsFor: 'actions'!

classSelected: aClass
	aClass ifNil: [ ^ self contents: '' ].
    
    self contents: aClass definition
!

methodSelected: aCompiledMethod
	aCompiledMethod ifNil: [ ^ self contents: '' ].
    
    self contents: aCompiledMethod source
!

protocolSelected: aString
	self model selectedClass ifNil: [ ^ self contents: '' ].
    
    self contents: self model selectedClass definition
! !

!HLBrowserSourceWidget methodsFor: 'announcements'!

subscribeTo: anAnnouncer
	anAnnouncer on: HLMethodSelected do: [ :ann |
    	self methodSelected: ann item ].
    anAnnouncer on: HLClassSelected do: [ :ann |
    	self classSelected: ann item ].
    anAnnouncer on: HLProtocolSelected do: [ :ann |
    	self protocolSelected: ann item ]
! !

!HLBrowserSourceWidget methodsFor: 'rendering'!

renderContentOn: html
	self sourceArea renderOn: html
! !

!HLBrowserSourceWidget class methodsFor: 'instance creation'!

on: aBrowserModel
	^ self new
    	model: aBrowserModel;
        yourself
! !

