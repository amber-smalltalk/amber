Smalltalk current createPackage: 'Helios-Browser'!
HLWidget subclass: #HLBrowser
	instanceVariableNames: 'model packagesListWidget classesListWidget protocolsListWidget methodsListWidget sourceWidget bottomDiv'
	package: 'Helios-Browser'!
!HLBrowser commentStamp!
I render a system browser with 4 panes (Packages, Classes, Protocols, Methods) and a source area.!

!HLBrowser methodsFor: 'accessing'!

environment
	^ self model environment
!

model
	^ model ifNil: [ model := HLBrowserModel new ]
!

model: aModel
	model := aModel
! !

!HLBrowser methodsFor: 'actions'!

focus
	^ self packagesListWidget focus
!

unregister
	super unregister.

	{ 
		self packagesListWidget.
		self classesListWidget.
		self protocolsListWidget.
		self methodsListWidget.
		self sourceWidget
	} 
		do: [ :each | each unregister ]
! !

!HLBrowser methodsFor: 'keybindings'!

registerBindingsOn: aBindingGroup
	HLToolCommand 
		registerConcreteClassesOn: aBindingGroup 
		for: self model
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
        with: self sourceWidget)).
	
	self packagesListWidget focus
! !

!HLBrowser methodsFor: 'testing'!

canHaveFocus
	^ true
! !

!HLBrowser methodsFor: 'widgets'!

classesListWidget
	^ classesListWidget ifNil: [
      	classesListWidget := HLClassesListWidget on: self model.
		classesListWidget next: self protocolsListWidget ]
!

methodsListWidget
	^ methodsListWidget ifNil: [
      	methodsListWidget := HLMethodsListWidget on: self model.
		methodsListWidget next: self sourceWidget ]
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
      	sourceWidget := HLBrowserBottomWidget new
			model: self model;
			yourself ]
! !

HLBrowser class instanceVariableNames: 'nextId'!

!HLBrowser class methodsFor: 'accessing'!

nextId
	nextId ifNil: [ nextId := 0 ].
    ^ 'browser_', (nextId + 1) asString
!

tabClass
	^ 'browser'
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

HLWidget subclass: #HLBrowserBottomWidget
	instanceVariableNames: 'model codeWidget documentationWidget'
	package: 'Helios-Browser'!
!HLBrowserBottomWidget commentStamp!
I render the code area of a browser and optionally the documentation for the selected class.!

!HLBrowserBottomWidget methodsFor: 'accessing'!

codeWidget
	^ codeWidget ifNil: [ codeWidget := HLBrowserCodeWidget new
		browserModel: self model;
		yourself ]
!

documentationWidget
	^ documentationWidget ifNil: [ documentationWidget := HLDocumentationWidget new
		model: self model;
		yourself ]
!

model
	^ model
!

model: aModel
	model := aModel.
	self observeModel
!

previous
	"For navigation"
!

previous: aWidget
	"For navigation"
! !

!HLBrowserBottomWidget methodsFor: 'actions'!

focus
	self codeWidget focus
!

observeModel
	self model announcer 
		on: HLShowInstanceToggled
		send: #onShowInstanceToggled
		to: self;
		on: HLShowCommentToggled
		send: #onShowCommentToggled
		to: self
! !

!HLBrowserBottomWidget methodsFor: 'reactions'!

onShowCommentToggled
	self refresh
!

onShowInstanceToggled
	self refresh
! !

!HLBrowserBottomWidget methodsFor: 'rendering'!

renderContentOn: html
	self model showComment 
		ifTrue: [ self renderPanesOn: html ]
		ifFalse: [ html with: self codeWidget ]
!

renderPanesOn: html
	html with: (HLVerticalSplitter
		with: self codeWidget
		with: self documentationWidget)
! !

!HLBrowserBottomWidget methodsFor: 'testing'!

canHaveFocus
	^ true
! !

HLToolModel subclass: #HLBrowserModel
	instanceVariableNames: 'showInstance showComment'
	package: 'Helios-Browser'!

!HLBrowserModel methodsFor: 'accessing'!

showComment
	^ showComment ifNil: [ false ]
!

showComment: aBoolean
	self withChangesDo: [
		showComment := aBoolean.
		self announcer announce: HLShowCommentToggled new ]
!

showInstance
	^ showInstance ifNil: [ true ]
!

showInstance: aBoolean

	self withChangesDo: [
		showInstance := aBoolean.

    	self selectedClass ifNotNil: [
    		self selectedClass: (aBoolean
    			ifTrue: [self selectedClass theNonMetaClass ]
	    	  	ifFalse: [ self selectedClass theMetaClass ]) ].
    
		self announcer announce: HLShowInstanceToggled new ]
! !

!HLBrowserModel methodsFor: 'actions'!

focusOnClasses
	self announcer announce: HLClassesFocusRequested new
!

focusOnMethods
	self announcer announce: HLMethodsFocusRequested new
!

focusOnPackages
	self announcer announce: HLPackagesFocusRequested new
!

focusOnProtocols
	self announcer announce: HLProtocolsFocusRequested new
!

focusOnSourceCode
	self announcer announce: HLSourceCodeFocusRequested new
!

setClassComment: aString
	self environment
		setClassCommentOf: self selectedClass theNonMetaClass
		to: aString
! !

!HLBrowserModel methodsFor: 'commands actions'!

editComment
	self announcer announce: HLEditComment new
! !

!HLBrowserModel methodsFor: 'testing'!

isBrowserModel
	^ true
! !

!HLBrowserModel class methodsFor: 'actions'!

on: anEnvironment

	^ self new
    	environment: anEnvironment;
        yourself
! !

Object subclass: #HLClassCache
	instanceVariableNames: 'class selectorsCache overrideCache overriddenCache'
	package: 'Helios-Browser'!

!HLClassCache methodsFor: 'accessing'!

overriddenCache
	^ overriddenCache ifNil: [ overriddenCache := HashedCollection new ]
!

overrideCache
	^ overrideCache ifNil: [ overrideCache := HashedCollection new ]
!

selectorsCache
	^ selectorsCache
!

selectorsCache: aCache
	selectorsCache := aCache
!

theClass
	^ class
!

theClass: aClass
	class := aClass
! !

!HLClassCache methodsFor: 'actions'!

invalidateChildrenSelector: aSelector
	self theClass subclasses do: [ :each |
    	(self selectorsCache cacheFor: each)
        	removeSelector: aSelector;
        	invalidateChildrenSelector: aSelector ]
!

invalidateParentSelector: aSelector
	self theClass superclass ifNotNil: [
    	(self selectorsCache cacheFor: self theClass superclass)
        	removeSelector: aSelector;
			invalidateParentSelector: aSelector ]
!

invalidateSelector: aSelector
	self 
    	invalidateParentSelector: aSelector;
        invalidateChildrenSelector: aSelector;
        removeSelector: aSelector
! !

!HLClassCache methodsFor: 'private'!

removeSelector: aSelector
	self overriddenCache 
    	removeKey: aSelector
        ifAbsent: [ ].
    self overrideCache 
    	removeKey: aSelector
        ifAbsent: [ ]
! !

!HLClassCache methodsFor: 'testing'!

isOverridden: aMethod
	^ self overriddenCache 
    	at: aMethod selector
      	ifAbsentPut: [ aMethod isOverridden ]
!

isOverride: aMethod
	^ self overrideCache
    	at: aMethod selector
      	ifAbsentPut: [ aMethod isOverride ]
! !

!HLClassCache class methodsFor: 'instance creation'!

on: aClass selectorsCache: aSelectorsCache
	^ self new
    	theClass: aClass;
        selectorsCache: aSelectorsCache;
        yourself
! !

HLToolListWidget subclass: #HLClassesListWidget
	instanceVariableNames: ''
	package: 'Helios-Browser'!
!HLClassesListWidget commentStamp!
I render a list of classes in the selected package.!

!HLClassesListWidget methodsFor: 'accessing'!

cssClassForItem: aClass
	aClass theNonMetaClass comment isEmpty 
		ifTrue: [ ^ 'uncommented' ].
	^ aClass theNonMetaClass heliosClass
!

getChildrenOf: aClass
	^ self items select: [ :each | each superclass = aClass ]
!

getRootClassesOf: aCollection
	^ aCollection select: [ :each |
    		(aCollection includes: each superclass) not ]
!

label
	^ 'Classes'
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
    	on: HLPackageSelected
		send: #onPackageSelected:
		to: self;
		
    	on: HLShowInstanceToggled 
		send: #onShowInstanceToggled
		to: self;
		
		on: HLShowCommentToggled
		send: #onShowCommentToggled
		to: self;
		
		on: HLClassSelected
		send: #onClassSelected:
		to: self;
		
		on: HLClassesFocusRequested
		send: #onClassesFocusRequested
		to: self
!

observeSystem
	self model systemAnnouncer
    	on: ClassAdded
		send: #onClassAdded:
		to: self;
		
        on: ClassRemoved
        send: #onClassRemoved:
		to: self;
		
		on: ClassMoved
		send: #onClassMoved:
		to: self;
		
		on: ClassRenamed
		send: #onClassRenamed:
		to: self;
		
		on: ClassMigrated
		send: #onClassMigrated:
		to: self;
		
		on: ClassCommentChanged
        send: #onClassCommentChanged:
		to: self
!

selectItem: aClass
    self model selectedClass: aClass
!

showComment: aBoolean
	self model showComment: aBoolean
!

showInstance: aBoolean
	self model showInstance: aBoolean
!

toggleShowComment
	self model showComment: self showComment not
! !

!HLClassesListWidget methodsFor: 'private'!

setItemsForPackage: aPackage
	self items: (aPackage 
    	ifNil: [ #() ]
  		ifNotNil: [ ((aPackage classes 
        	collect: [ :each | each theNonMetaClass ]) asSet asArray) 
            	sort: [:a :b | a name < b name ] ]).
!

setItemsForSelectedPackage
	self setItemsForPackage: self model selectedPackage
! !

!HLClassesListWidget methodsFor: 'reactions'!

onClassAdded: anAnnouncement
	| class |
	
	class := anAnnouncement theClass.
	
	(class package = self model selectedPackage or: [
		self items includes: class ]) ifFalse: [ ^ self ].
    
    self setItemsForSelectedPackage.
    self refresh
!

onClassCommentChanged: anAnnouncement
	| class |
	class := anAnnouncement theClass.

	class package = self model selectedPackage ifFalse: [ ^ self ].
    
    self refresh
!

onClassMigrated: anAnnouncement
	| class oldClass |
	
	class := anAnnouncement theClass.
	oldClass := anAnnouncement oldClass.

	(self items includes: oldClass) ifFalse: [ ^ self ].

	self model selectedClass = oldClass ifTrue: [
		self model selectedClass: class ].
    
    self setItemsForSelectedPackage.
    self refresh
!

onClassMoved: anAnnouncement
	| class oldPackage |
	
	class := anAnnouncement theClass.
	oldPackage := anAnnouncement oldPackage.
	
	(oldPackage = self model selectedPackage or: [
		class package = self model selectedPackage ])
			ifFalse: [ ^ self ].
	
	oldPackage = self model selectedPackage ifTrue: [ 
		self 
			selectedItem: nil;
			selectItem: nil ].
    
    self setItemsForSelectedPackage.
    self refresh
!

onClassRemoved: anAnnouncement
	| class |
	class := anAnnouncement theClass.

	class package = self model selectedPackage ifFalse: [ ^ self ].
    
    self setItemsForSelectedPackage.
    self refresh
!

onClassRenamed: anAnnouncement
	anAnnouncement theClass package = self model selectedPackage ifFalse: [ ^ self ].
    
    self setItemsForSelectedPackage.
    self refresh
!

onClassSelected: anAnnouncement
	| selectedClass |
	
	anAnnouncement item ifNil: [ ^ self ].
	
	selectedClass := anAnnouncement item theNonMetaClass.
	self selectedItem: selectedClass.

	self hasFocus ifFalse: [
		self 
			activateItem: selectedClass;
			focus ]
!

onClassesFocusRequested
	self focus
!

onPackageSelected: anAnnouncement
    self selectedItem: nil.
    
    self setItemsForSelectedPackage.
    self refresh
!

onShowCommentToggled
	self refresh
!

onShowInstanceToggled
	self refresh
! !

!HLClassesListWidget methodsFor: 'rendering'!

renderButtonsOn: html
	| checkbox |
	
	html div 
        class: 'btn-group';
		with: [ 
           	html button 
                class: (String streamContents: [ :str |
                	str nextPutAll: 'btn'.
                    self showInstance ifTrue: [ 
                    	str nextPutAll: ' active' ] ]);
  				with: 'Instance';
                onClick: [ self showInstance: true ].
  			html button
  				class: (String streamContents: [ :str |
                	str nextPutAll: 'btn'.
                    self showClass ifTrue: [ 
                    	str nextPutAll: ' active' ] ]);
  				with: 'Class';
				onClick: [ self showInstance: false ] ].
		html label 
			class: 'checkbox';
			with: [
				checkbox := html input
					type: 'checkbox';
					onClick: [ self toggleShowComment ].
				html with: 'Doc' ].
				
		self showComment ifTrue: [
			checkbox at: 'checked' put: 'checked' ]
!

renderItem: aClass level: anInteger on: html
	| li |
    
	li := html li.
	self registerMappingFrom: aClass to: li.
	
    li
    	at: 'list-data' put: (self items indexOf: aClass);
		class: (self listCssClassForItem: aClass);
		with: [ 
        	html a
            	with: [ 
            		(html tag: 'i') class: (self cssClassForItem: aClass).
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

!HLClassesListWidget methodsFor: 'testing'!

showClass
	^ self model showInstance not
!

showComment
	^ self model showComment
!

showInstance
	^ self model showInstance
! !

HLFocusableWidget subclass: #HLDocumentationWidget
	instanceVariableNames: 'model'
	package: 'Helios-Browser'!
!HLDocumentationWidget commentStamp!
I render the documentation for the selected class!

!HLDocumentationWidget methodsFor: 'accessing'!

documentation
	^ self selectedItem 
		ifNil: [ '' ]
		ifNotNil: [ :item | item comment ifEmpty: [ self defaultDocumentation ] ]
!

head
	^ self selectedItem 
		ifNil: [ self defaultHead ]
		ifNotNil: [ :item | item name ]
!

model
	^ model
!

model: aModel
	model := aModel.
	self 
		observeSystem;
		observeModel
!

selectedItem
	^ self model selectedClass ifNotNil: [ :class | class theNonMetaClass ]
! !

!HLDocumentationWidget methodsFor: 'actions'!

editDocumentation
	self model editComment
!

observeModel
	self model announcer 
		on: HLClassSelected
		send: #onClassSelected:
		to: self;
		
		on: HLEditComment
		send: #onEditDocumentation
		to: self
!

observeSystem
	self model systemAnnouncer 
		on: ClassCommentChanged
		send: #onClassCommentChanged:
		to: self
!

selectClass: aClass
	self model selectedClass: aClass
!

unregister
	super unregister.
	self model announcer unregister: self
! !

!HLDocumentationWidget methodsFor: 'defaults'!

defaultDocumentation
	^ 'No documentation available. 
**That''s bad. Seriously.**'
!

defaultHead
	^ 'No class selected'
! !

!HLDocumentationWidget methodsFor: 'reactions'!

onClassCommentChanged: anAnnouncement
	anAnnouncement theClass = self model selectedClass theNonMetaClass
		ifTrue: [ self refresh ]
!

onClassSelected: anAnnouncement
	self refresh
!

onEditDocumentation
	self 
		request: self model selectedClass theNonMetaClass name, ' comment'
		value: self model selectedClass theNonMetaClass comment
		do: [ :comment | self setClassComment: comment ]
!

setClassComment: aString
	self model setClassComment: aString
! !

!HLDocumentationWidget methodsFor: 'rendering'!

renderContentOn: html
	html div 
		class: 'doc';
		with: [
			self 
				renderHeadOn: html;
				renderDocOn: html ]
!

renderDocOn: html
	self selectedItem ifNotNil: [
		self renderInheritanceOn: html.
		html h1 
			with: 'Overview';
			with: [ 
				html button
					class: 'button default';
					with: 'Edit';
					onClick: [ self editDocumentation ] ].
		(html div 
			class: 'markdown';
			asJQuery) html: ((Showdown at: 'converter') new makeHtml: self documentation) ]
!

renderHeadOn: html
	html div 
		class: 'head';
		with: self head
!

renderInheritanceOn: html
	html div 	
		class: 'inheritance';
		with: [
			html with: 'Subclass of '.
			self selectedItem superclass 
				ifNil: [ html em with: 'nil' ]
				ifNotNil: [
					html a 
						with: self selectedItem superclass name;
						onClick: [ self selectClass: self selectedItem superclass ] ] ]
! !

HLToolListWidget subclass: #HLMethodsListWidget
	instanceVariableNames: 'selectorsCache'
	package: 'Helios-Browser'!
!HLMethodsListWidget commentStamp!
I render a list of methods for the selected protocol.!

!HLMethodsListWidget methodsFor: 'accessing'!

allProtocol
	^ self model allProtocol
!

cssClassForItem: aSelector
	| override overriden method |
    
    method := self methodForSelector: aSelector.
    override := self isOverride: method.
    overriden := self isOverridden: method.
    
	^ override
    	ifTrue: [ overriden
			ifTrue: [ 'override-overridden' ]
			ifFalse: [ 'override' ] ]
		ifFalse: [
			overriden
			ifTrue: [ 'overridden' ]
			ifFalse: [ '' ] ]
!

label
	^ 'Methods'
!

methodForSelector: aSelector
	^ self model selectedClass
    	methodDictionary at: aSelector
!

methodsInProtocol: aString
	self model selectedClass ifNil: [ ^ #() ].
    
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
	^ self class selectorsCache
!

selectorsInProtocol: aString
	^ ((self methodsInProtocol: aString)
    	collect: [ :each | each selector ]) sorted
! !

!HLMethodsListWidget methodsFor: 'actions'!

observeModel
	self model announcer 
		on: HLProtocolSelected 
		send: #onProtocolSelected: 
		to: self;
		
		on: HLShowInstanceToggled 
		send: #onShowInstanceToggled
		to: self;
		
		on: HLMethodSelected 
		send: #onMethodSelected:
		to: self;
		
		on: HLMethodsFocusRequested 
		send: #onMethodsFocusRequested
		to: self
!

observeSystem
	self model systemAnnouncer 
    	on: ProtocolAdded
        send: #onProtocolAdded:
		to: self;
    	
		on: ProtocolRemoved
        send: #onProtocolRemoved:
		to: self;
		
    	on: MethodAdded 
        send: #onMethodAdded:
		to: self;
		
        on: MethodRemoved 
        send: #onMethodRemoved:
		to: self;
		
		on: MethodMoved 
        send: #onMethodMoved:
		to: self
!

selectItem: aSelector
	aSelector ifNil: [ ^ self model selectedMethod: nil ].

   	self model selectedMethod: (self methodForSelector: aSelector)
! !

!HLMethodsListWidget methodsFor: 'private'!

setItemsForProtocol: aString
	^ self items: (aString
    	ifNil: [ #() ]
      	ifNotNil: [ self selectorsInProtocol: aString ])
!

setItemsForSelectedProtocol
	self setItemsForProtocol: self model selectedProtocol
! !

!HLMethodsListWidget methodsFor: 'reactions'!

onMethodAdded: anAnnouncement
	self model selectedClass = anAnnouncement method methodClass ifFalse: [ ^ self ].
    
    self setItemsForSelectedProtocol.
    self refresh
!

onMethodMoved: anAnnouncement
	self model selectedMethod = anAnnouncement method ifFalse: [ ^ self ].
    
	self model selectedProtocol = self model allProtocol ifFalse: [
		self 
			selectedItem: nil; 
			selectItem: nil;
			setItemsForSelectedProtocol;
    		refresh ]
!

onMethodRemoved: anAnnouncement
	| method |
	
	method := anAnnouncement method.
	
	self items detect: [ :each | each = method selector ] ifNone: [ ^ self ].

    self selectedItem ifNotNil: [
      	(method methodClass = self model selectedClass and: [ method selector = self selectedItem ])
  			ifTrue: [ 
				self selectedItem: nil; 
				selectItem: nil ] ].

    self setItemsForSelectedProtocol.
	self refresh
!

onMethodSelected: anAnnouncement
	| selector method |
	
	method := anAnnouncement item.
	
	selector := method isCompiledMethod 
		ifTrue: [ method selector ]
		ifFalse: [ nil ].
		
	self 
		selectedItem: selector;
		activateItem: selector
!

onMethodsFocusRequested
	self focus
!

onProtocolAdded: anAnnouncement
	self model selectedClass = anAnnouncement theClass ifFalse: [ ^ self ].
	
	self setItemsForSelectedProtocol.
    self refresh.
	self focus
!

onProtocolRemoved: anAnnouncement
	self model selectedClass = anAnnouncement theClass ifFalse: [ ^ self ].
	
	self setItemsForSelectedProtocol.
    self refresh.
	self focus
!

onProtocolSelected: anAnnouncement
    self selectedItem: nil.
    
	self setItemsForSelectedProtocol.
    self refresh
!

onShowInstanceToggled
	self onProtocolSelected: nil
! !

!HLMethodsListWidget methodsFor: 'rendering'!

renderContentOn: html
	self model showInstance
    	ifFalse: [ html div 
        	class: 'class_side'; 
            with: [ super renderContentOn: html ] ]
      	ifTrue: [ super renderContentOn: html ]
!

renderItemLabel: aSelector on: html
	html with: aSelector
! !

!HLMethodsListWidget methodsFor: 'testing'!

isOverridden: aMethod
   ^ self selectorsCache isOverridden: aMethod
!

isOverride: aMethod
   ^ self selectorsCache isOverride: aMethod
! !

HLMethodsListWidget class instanceVariableNames: 'selectorsCache'!

!HLMethodsListWidget class methodsFor: 'accessing'!

selectorsCache
	^ HLSelectorsCache current
! !

HLToolListWidget subclass: #HLPackagesListWidget
	instanceVariableNames: ''
	package: 'Helios-Browser'!
!HLPackagesListWidget commentStamp!
I render a list of the system packages.!

!HLPackagesListWidget methodsFor: 'accessing'!

cssClassForItem: anItem	
	^ 'package'
!

items
	^ items ifNil: [ self initializeItems ]
!

label
	^ 'Packages'
! !

!HLPackagesListWidget methodsFor: 'actions'!

commitPackage
	self model commitPackage
!

focusClassesListWidget
	self model announcer announce: HLClassesListFocus new
!

observeModel
    self model announcer 
		on: HLPackageSelected
		send: #onPackageSelected:
		to: self;
		
		on: HLPackagesFocusRequested 
		send: #onPackagesFocusRequested
		to: self
!

observeSystem
    self model systemAnnouncer 
		on: ClassAdded 
		send: #onClassAdded:
		to: self
!

selectItem: aPackage
	self model selectedPackage: aPackage
! !

!HLPackagesListWidget methodsFor: 'initialization'!

initializeItems
	^ items := self model packages 
		sort: [ :a :b | a name < b name ]
! !

!HLPackagesListWidget methodsFor: 'reactions'!

onClassAdded: anAnnouncement
	"Amber doesn't have yet a global organizer for packages"
	
	(self items includes: anAnnouncement theClass package) ifFalse: [ 
		self 
			initializeItems;
			refresh ]
!

onPackageSelected: anAnnouncement
	| package |
	
	package := anAnnouncement item.
	
	self selectedItem: package.
	self hasFocus ifFalse: [
		self
			activateItem: package;
			focus ]
!

onPackagesFocusRequested
	self focus
! !

!HLPackagesListWidget methodsFor: 'rendering'!

renderItemLabel: aPackage on: html
	html with: aPackage name
! !

HLToolListWidget subclass: #HLProtocolsListWidget
	instanceVariableNames: ''
	package: 'Helios-Browser'!
!HLProtocolsListWidget commentStamp!
I render a list of protocols for the selected class.!

!HLProtocolsListWidget methodsFor: 'accessing'!

allProtocol
	^ self model allProtocol
!

cssClassForItem: anItem
	anItem = self allProtocol ifTrue: [ ^ '' ].
	anItem = 'private' ifTrue: [ ^ 'private' ].
	anItem = 'initialization' ifTrue: [ ^ 'initialization' ].
	(anItem match: '^\*') ifTrue: [ ^ 'extension' ].
	^ ''
!

label
	^ 'Protocols'
!

selectedItem
	^ super selectedItem" ifNil: [ self allProtocol ]"
! !

!HLProtocolsListWidget methodsFor: 'actions'!

observeModel
    self model announcer 
		on: HLClassSelected
		send: #onClassSelected:
		to: self;
		
    	on: HLShowInstanceToggled 
		send: #onClassSelected:
		to: self;
		
    	on: HLProtocolSelected
		send: #onProtocolSelected:
		to: self;
		
		on: HLProtocolsFocusRequested 
		send: #onProtocolsFocusRequested
		to: self
!

observeSystem
	self model systemAnnouncer
		on: ProtocolAdded 
		send: #onProtocolAdded:
		to: self;
		
		on: ProtocolRemoved
		send: #onProtocolRemoved:
		to: self
!

selectItem: aString
    self model selectedProtocol: aString
! !

!HLProtocolsListWidget methodsFor: 'private'!

setItemsForClass: aClass
	self items: (aClass
    	ifNil: [ Array with: self allProtocol ]
      	ifNotNil: [ 
        	(Array with: self allProtocol) 
            	addAll: aClass protocols; 
                yourself ])
!

setItemsForSelectedClass
	self setItemsForClass: self model selectedClass
! !

!HLProtocolsListWidget methodsFor: 'reactions'!

onClassSelected: anAnnouncement
    self selectedItem: nil.
    
    self setItemsForSelectedClass.
    self refresh
!

onProtocolAdded: anAnnouncement
	| class |
	
	class := anAnnouncement theClass.
	
	class = self model selectedClass ifFalse: [ ^ self ].
    
    self setItemsForSelectedClass.
    self refresh
!

onProtocolRemoved: anAnnouncement
	| class protocol |
	
	class := anAnnouncement theClass.
	protocol := anAnnouncement protocol.
	
	class = self model selectedClass ifFalse: [ ^ self ].
    
    self model selectedProtocol = protocol 
    	ifTrue: [ 
			self 
				selectedItem: nil;
				selectItem: nil ].
        
    self setItemsForSelectedClass.
    self refresh
!

onProtocolSelected: anAnnouncement
	| protocol |
	
	protocol := anAnnouncement item.
	
	self selectedItem: protocol.
	protocol ifNil: [ ^ self ].
    
	self hasFocus ifFalse: [
		self 
			activateItem: protocol;
			focus ]
!

onProtocolsFocusRequested
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

Object subclass: #HLSelectorsCache
	instanceVariableNames: 'classesCache'
	package: 'Helios-Browser'!

!HLSelectorsCache methodsFor: 'accessing'!

cacheFor: aClass
	aClass ifNil: [ ^ nil ].
    
	^ self classesCache
    	at: aClass name
        ifAbsentPut: [ self newCacheFor: aClass ]
!

classesCache
	^ classesCache ifNil: [ classesCache := HashedCollection new ]
! !

!HLSelectorsCache methodsFor: 'actions'!

observeSystem
	SystemAnnouncer current
		on: MethodAdded
		send: #onMethodAdded:
		to: self;
		
		on: MethodRemoved
        send: #onMethodRemoved:
		to: self
! !

!HLSelectorsCache methodsFor: 'factory'!

newCacheFor: aClass
	^ HLClassCache 
    	on: aClass
        selectorsCache: self
! !

!HLSelectorsCache methodsFor: 'initialization'!

initialize
	super initialize.
    self observeSystem
! !

!HLSelectorsCache methodsFor: 'private'!

invalidateCacheFor: aMethod
	(self cacheFor: aMethod methodClass)
    	invalidateSelector: aMethod selector
! !

!HLSelectorsCache methodsFor: 'reactions'!

onMethodAdded: anAnnouncement
	self invalidateCacheFor: anAnnouncement method
!

onMethodRemoved: anAnnouncement
	self invalidateCacheFor: anAnnouncement method
! !

!HLSelectorsCache methodsFor: 'testing'!

isOverridden: aMethod
	^ (self cacheFor: aMethod methodClass)
    	isOverridden: aMethod
!

isOverride: aMethod
	^ (self cacheFor: aMethod methodClass)
    	isOverride: aMethod
! !

HLSelectorsCache class instanceVariableNames: 'current'!

!HLSelectorsCache class methodsFor: 'accessing'!

current
	^ current ifNil: [ current := super new ]
!

flush
	current := nil
! !

!HLSelectorsCache class methodsFor: 'instance creation'!

new
	self shouldNotImplement
! !

