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
	model := aBrowserModel.
    
    self observeModel
! !

!HLBrowserListWidget methodsFor: 'actions'!

observeModel
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

observeModel
	self model announcer 
    	on: HLPackageSelected do: [ :ann | self onPackageSelected: ann item ];
    	on: HLShowInstanceToggled do: [ :ann | self onShowInstanceToggled ];
		on: HLClassSelected do: [ :ann | self onClassSelected: ann item ]
!

selectItem: aClass
	super selectItem: aClass.
    self model selectedClass: aClass
!

showInstance: aBoolean
	self model showInstance: aBoolean
! !

!HLClassesListWidget methodsFor: 'reactions'!

onClassSelected: aClass
	self focus
!

onPackageSelected: aPackage
    self selectedItem: nil.
    
    self items: (aPackage 
    	ifNil: [ #() ]
  		ifNotNil: [ (aPackage classes 
        	collect: [ :each | each theNonMetaClass ]) asSet asArray ]).

    self refresh
!

onShowInstanceToggled
	self refresh
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

observeModel
	self model announcer on: HLProtocolSelected do: [ :ann |
    	self onProtocolSelected: ann item ].
    self model announcer on: HLShowInstanceToggled do: [ :ann |
    	self onProtocolSelected: nil ].
    self model announcer on: HLMethodSelected do: [ :ann |
    	self onMethodSelected: ann item ]
!

selectItem: aCompiledMethod
	super selectItem: aCompiledMethod.
   	self model selectedMethod: aCompiledMethod
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

!HLMethodsListWidget methodsFor: 'reactions'!

onMethodSelected: aMethod
	self focus
!

onProtocolSelected: aString
    self selectedItem: nil.
    
    self items: (self model selectedClass 
    	ifNil: [ #() ]
      	ifNotNil: [ aString
    		ifNil: [ #() ]
      		ifNotNil: [ self methodsInProtocol: aString ] ]).
        
    self refresh
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

initializeItems
	^ items := self model packages sort:[:a :b|
						a name < b name]
!

items
	^ items ifNil: [self initializeItems]
! !

!HLPackagesListWidget methodsFor: 'actions'!

focusClassesListWidget
	self model announcer announce: HLClassesListFocus new
!

observeModel
    self model announcer on: HLPackageSelected do: [ :ann |
    	self onPackageSelected: ann item ]
!

selectItem: aPackage
	super selectItem: aPackage.
    self model selectedPackage: aPackage
! !

!HLPackagesListWidget methodsFor: 'reactions'!

onPackageSelected: aPackage
	self focus
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

observeModel
	self model announcer on: HLClassSelected do: [ :ann |
    	self onClassSelected: ann item ].
    self model announcer on: HLShowInstanceToggled do: [ :ann |
    	self onClassSelected: self model selectedClass ].
    self model announcer on: HLProtocolSelected do: [ :ann |
    	self onProtocolSelected: ann item ]
!

selectItem: aString
	super selectItem: aString.
    self model selectedProtocol: aString
! !

!HLProtocolsListWidget methodsFor: 'reactions'!

onClassSelected: aClass
    self selectedItem: nil.
    
    self items: (aClass
    	ifNil: [ Array with: self allProtocol ]
      	ifNotNil: [ 
        	(Array with: self allProtocol) 
            	addAll: aClass protocols; 
                yourself ]).

    self refresh
!

onProtocolSelected: aString
	self focus
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

announcer
	^ announcer ifNil: [ announcer := Announcer new ]
!

environment
	^ environment ifNil: [ HLManager current environment ]
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

!HLBrowserModel class methodsFor: 'actions'!

on: anEnvironment

	^ self new
    	environment: anEnvironment;
        yourself
! !

HLWidget subclass: #HLBrowserSourceWidget
	instanceVariableNames: 'model codeWidget'
	package: 'Helios-Browser'!

!HLBrowserSourceWidget methodsFor: 'accessing'!

codeWidget
	^ codeWidget ifNil: [ codeWidget := HLCodeWidget new ]
!

contents
	^ self sourceArea contents
!

contents: aString
	self codeWidget contents: aString
!

model
	^ model
!

model: aBrowserModel
	model := aBrowserModel.
    
    self observeModel
! !

!HLBrowserSourceWidget methodsFor: 'actions'!

observeModel
	self model announcer on: HLMethodSelected do: [ :ann |
    	self onMethodSelected: ann item ].
    self model announcer on: HLClassSelected do: [ :ann |
    	self onClassSelected: ann item ].
    self model announcer on: HLProtocolSelected do: [ :ann |
    	self onProtocolSelected: ann item ]
! !

!HLBrowserSourceWidget methodsFor: 'reactions'!

onClassSelected: aClass
	aClass ifNil: [ ^ self contents: '' ].
    
    self contents: aClass definition
!

onMethodSelected: aCompiledMethod
	aCompiledMethod ifNil: [ ^ self contents: '' ].
    
    self contents: aCompiledMethod source
!

onProtocolSelected: aString
	self model selectedClass ifNil: [ ^ self contents: '' ].
    
    self contents: self model selectedClass definition
! !

!HLBrowserSourceWidget methodsFor: 'rendering'!

renderContentOn: html
	self codeWidget renderOn: html
! !

!HLBrowserSourceWidget class methodsFor: 'instance creation'!

on: aBrowserModel
	^ self new
    	model: aBrowserModel;
        yourself
! !

