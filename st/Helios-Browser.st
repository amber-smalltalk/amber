Smalltalk current createPackage: 'Helios-Browser'!
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

!HLBrowser methodsFor: 'actions'!

focus
	^ self packagesListWidget focus
! !

!HLBrowser methodsFor: 'keybindings'!

registerBindingsOn: aBindingGroup
	HLBrowserCommand 
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
		methodsListWidget next: self sourceWidget]
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

label
	^ 'List'
!

menuCommands
	"Answer a collection of commands to be put in the cog menu"
	
	^ (HLBrowserCommand concreteClasses 
		select: [ :each | each isValidFor: self selectedItem ])
		collect: [ :each | each for: self model ]
!

model
	^ model
!

model: aBrowserModel
	model := aBrowserModel.
    
    self 
		observeSystem;
		observeModel
!

selectedItem: anItem
	"Selection changed, update the cog menu"
	
	super selectedItem: anItem.
	self updateMenu
! !

!HLBrowserListWidget methodsFor: 'actions'!

observeModel
!

observeSystem
! !

!HLBrowserListWidget methodsFor: 'rendering'!

renderContentOn: html
	self renderHeadOn: html.	
	super renderContentOn: html
!

renderHeadOn: html
	html div 
		class: 'list-label';
		with: [
			html with: self label.
			self renderMenuOn: html ]
!

renderMenuOn: html
	| commands |
	
	commands := self menuCommands.
	commands isEmpty ifTrue: [ ^ self ].
	
	html div 
		class: 'btn-group cog';
		with: [
			html a
				class: 'btn dropdown-toggle';
				at: 'data-toggle' put: 'dropdown';
				with: [ (html tag: 'i') class: 'icon-cog' ].
		html ul 
			class: 'dropdown-menu pull-right';
			with: [ 
				self menuCommands do: [ :each | 
					html li with: [ html a 
						with: each menuLabel;
						onClick: [ self execute: each ] ] ] ] ]
! !

!HLBrowserListWidget methodsFor: 'updating'!

updateMenu
	(self wrapper asJQuery find: '.cog') remove.
	
	[ :html | self renderMenuOn: html ] 
		appendToJQuery: (self wrapper asJQuery find: '.list-label')
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
    		(aCollection includes: each superclass) not ]
!

iconForItem: aClass
	^ aClass theNonMetaClass comment isEmpty
    	ifFalse: [ 'icon-none' ]
      	ifTrue: [ 'icon-question-sign' ]
!

label
	^ 'Classes'
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
		on: HLClassSelected do: [ :ann | self onClassSelected: ann item ];
		on: HLClassesFocusRequested do: [ :ann | self onClassesFocusRequested ]
!

observeSystem
	self model systemAnnouncer
    	on: ClassAdded
        do: [ :ann | self onClassAdded: ann theClass ];
        on: ClassRemoved
        do: [ :ann | self onClassRemoved: ann theClass ]
!

selectItem: aClass
    self model selectedClass: aClass
!

showInstance: aBoolean
	self model showInstance: aBoolean
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

onClassAdded: aClass
	aClass package = self model selectedPackage ifFalse: [ ^ self ].
    
    self setItemsForSelectedPackage.
    self refresh
!

onClassRemoved: aClass
	aClass package = self model selectedPackage ifFalse: [ ^ self ].
    aClass = self model selectedClass ifTrue: [ self selectItem: nil ].
    
    self setItemsForSelectedPackage.
    self refresh
!

onClassSelected: aClass
	| selectedClass |
	
	aClass ifNil: [ ^ self ].
	
	selectedClass := aClass theNonMetaClass.
	self selectedItem: selectedClass.

	self hasFocus ifFalse: [
		self 
			activateItem: selectedClass;
			focus ]
!

onClassesFocusRequested
	self focus
!

onPackageSelected: aPackage
    self selectedItem: nil.
    
    self setItemsForSelectedPackage.
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
				onClick: [ self model showInstance: false ] ]
!

renderItem: aClass level: anInteger on: html
	| li |
    
	li := html li.
	self registerMappingFrom: aClass to: li.
	
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

iconForItem: aSelector
	| override overriden method |
    
    method := self methodForSelector: aSelector.
    override := self isOverride: method.
    overriden := self isOverridden: method.
    
	^ override
    	ifTrue: [ overriden
			ifTrue: [ 'icon-resize-vertical' ]
			ifFalse: [ 'icon-arrow-up' ] ]
		ifFalse: [
			overriden
			ifTrue: [ 'icon-arrow-down' ]
			ifFalse: [ 'icon-none' ] ]
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
	^ (self methodsInProtocol: aString)
    	collect: [ :each | each selector ]
! !

!HLMethodsListWidget methodsFor: 'actions'!

observeModel
	self model announcer 
		on: HLProtocolSelected 
		do: [ :ann | self onProtocolSelected: ann item ];
		on: HLShowInstanceToggled 
		do: [ :ann | self onProtocolSelected: nil ];
		on: HLMethodSelected 
		do: [ :ann | self onMethodSelected: ann item ];
		on: HLMethodsFocusRequested 
		do: [ :ann | self onMethodsFocusRequested ]
!

observeSystem
	self model systemAnnouncer 
    	on: ProtocolAdded
        do: [ :ann | self onProtocolAdded: ann theClass ];
    	on: ProtocolRemoved
        do: [ :ann | self onProtocolRemoved: ann theClass ];
    	on: MethodAdded 
        do: [ :ann | self onMethodAdded: ann method ];
        on: MethodRemoved 
        do: [ :ann | self onMethodRemoved: ann method ]
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

onMethodAdded: aMethod
	self model selectedClass = aMethod methodClass ifFalse: [ ^ self ].
    
    self setItemsForSelectedProtocol.
    self refresh
!

onMethodRemoved: aMethod
	self items detect: [ :each | each = aMethod selector ] ifNone: [ ^ self ].

    self selectedItem ifNotNil: [
      	(aMethod methodClass = self model selectedClass and: [ aMethod selector = self selectedItem selector ])
  			ifTrue: [ self selectItem: nil ] ].
    self setItemsForSelectedProtocol.

self refresh
!

onMethodSelected: aMethod
	self selectedItem: aMethod.
	aMethod ifNil: [ ^ self ].
    
	self hasFocus ifFalse: [
		self 
			activateItem: aMethod;
			focus ]
!

onMethodsFocusRequested
	self focus
!

onProtocolAdded: aClass
	self model selectedClass = aClass ifFalse: [ ^ self ].
	
	self setItemsForSelectedProtocol.
    self refresh.
	self focus
!

onProtocolRemoved: aClass
	self model selectedClass = aClass ifFalse: [ ^ self ].
	
	self setItemsForSelectedProtocol.
    self refresh.
	self focus
!

onProtocolSelected: aString
    self selectedItem: nil.
    
	self setItemsForSelectedProtocol.
    self refresh
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

HLBrowserListWidget subclass: #HLPackagesListWidget
	instanceVariableNames: ''
	package: 'Helios-Browser'!

!HLPackagesListWidget methodsFor: 'accessing'!

items
	^ items ifNil: [self initializeItems]
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
		do: [ :ann | self onPackageSelected: ann item ];
		on: HLPackagesFocusRequested 
		do: [ :ann | self onPackagesFocusRequested ]
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

onPackageSelected: aPackage
	self selectedItem: aPackage.
	self hasFocus ifFalse: [
		self
			activateItem: aPackage;
			focus ]
!

onPackagesFocusRequested
	self focus
! !

!HLPackagesListWidget methodsFor: 'rendering'!

renderButtonsOn: html
	html div 
		class: 'buttons';
		with: [
			html button 
				class: 'btn';
				with: 'Commit';
				onClick: [ self commitPackage ] ]
!

renderItemLabel: aPackage on: html
	html with: aPackage name
! !

HLBrowserListWidget subclass: #HLProtocolsListWidget
	instanceVariableNames: ''
	package: 'Helios-Browser'!

!HLProtocolsListWidget methodsFor: 'accessing'!

allProtocol
	^ self model allProtocol
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
		do: [ :ann | self onClassSelected: ann item ];
    	on: HLShowInstanceToggled 
		do: [ :ann | self onClassSelected: self model selectedClass ];
    	on: HLProtocolSelected
		do: [ :ann | self onProtocolSelected: ann item ];
		on: HLProtocolsFocusRequested 
		do: [ :ann | self onProtocolsFocusRequested ]
!

observeSystem
	self model systemAnnouncer
		on: ProtocolAdded 
	    do: [ :ann | self onProtocolAdded: ann protocol to: ann theClass ];
	    on: ProtocolRemoved
	    do: [ :ann | self onProtocolRemoved: ann protocol from: ann theClass ]
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

onClassSelected: aClass
    self selectedItem: nil.
    
    self setItemsForSelectedClass.
    self refresh
!

onProtocolAdded: aString to: aClass
	aClass = self model selectedClass ifFalse: [ ^ self ].
    
    self setItemsForSelectedClass.
    self refresh
!

onProtocolRemoved: aString from: aClass
	aClass = self model selectedClass ifFalse: [ ^ self ].
    
    self model selectedProtocol = aString 
    	ifTrue: [ self selectItem: nil ].
        
    self setItemsForSelectedClass.
    self refresh
!

onProtocolSelected: aString
	self selectedItem: aString.
	aString ifNil: [ ^ self ].
    
	self hasFocus ifFalse: [
		self 
			activateItem: aString;
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

Object subclass: #HLBrowserModel
	instanceVariableNames: 'announcer environment selectedPackage selectedClass selectedProtocol selectedSelector showInstance showComment'
	package: 'Helios-Browser'!

!HLBrowserModel methodsFor: 'accessing'!

announcer
	^ announcer ifNil: [ announcer := Announcer new ]
!

availableClassNames
	^ self environment availableClassNames
!

availableProtocols
	^ self environment availableProtocolsFor: self selectedClass
!

environment
	^ environment ifNil: [ HLManager current environment ]
!

environment: anEnvironment
	environment := anEnvironment
!

handleUnkownVariableError: anError
	self announcer announce: (HLUnknownVariableErrorRaised new
		error: anError;
		yourself)
!

manager
	^ HLManager current
!

packages
	^ self environment packages
!

selectedClass
	^ selectedClass
!

selectedClass: aClass
	selectedClass = aClass ifTrue: [ 
		aClass ifNil: [ ^ self ].
		self selectedProtocol: nil ].
    
	aClass 
   		ifNil: [ selectedClass := nil ]
    	ifNotNil: [
			self showInstance 
   				ifTrue: [ selectedClass := aClass theNonMetaClass ]
     			ifFalse: [ selectedClass := aClass theMetaClass ] ].
	self selectedProtocol: nil.
	self announcer announce: (HLClassSelected on: self selectedClass)
!

selectedMethod
	^ self selectedClass ifNotNil: [ 
			self selectedClass methodDictionary 
				at: selectedSelector 
				ifAbsent: [ nil ] ]
!

selectedMethod: aCompiledMethod
	selectedSelector = aCompiledMethod ifTrue: [ ^ self ].
    
    aCompiledMethod
    	ifNil: [ selectedSelector := nil ]
      	ifNotNil: [
			selectedSelector = aCompiledMethod selector ifTrue: [ ^ self ].
			selectedSelector := aCompiledMethod selector ].

    self announcer announce: (HLMethodSelected on: aCompiledMethod)
!

selectedPackage
	^ selectedPackage
!

selectedPackage: aPackage
	selectedPackage = aPackage ifTrue: [ ^ self ].
    
	selectedPackage := aPackage.
	self selectedClass: nil.
    self announcer announce: (HLPackageSelected on: aPackage)
!

selectedProtocol
	^ selectedProtocol
!

selectedProtocol: aString
	selectedProtocol = aString ifTrue: [ ^ self ].
    
	selectedProtocol := aString.
    self selectedMethod: nil.
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
!

systemAnnouncer
	^ self environment systemAnnouncer
! !

!HLBrowserModel methodsFor: 'actions'!

addInstVarNamed: aString
	self environment addInstVarNamed: aString to: self selectedClass.
	self announcer announce: (HLInstVarAdded new
		theClass: self selectedClass;
		variableName: aString;
		yourself)
!

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

save: aString
	(self shouldCompileClassDefinition: aString)
		ifTrue: [ self compileClassDefinition: aString ]
		ifFalse: [ self compileMethod: aString ]
!

saveSourceCode
	self announcer announce: HLSaveSourceCode new
! !

!HLBrowserModel methodsFor: 'commands actions'!

commitPackage
	self 
		withHelperLabelled: 'Committing package ', self selectedPackage name, '...'
		do: [ self environment commitPackage: self selectedPackage ]
!

moveMethodToClass: aClassName
	self environment 
		moveMethod: self selectedMethod 
		toClass: aClassName
!

moveMethodToProtocol: aProtocol
	self environment moveMethod: self selectedMethod toProtocol: aProtocol
!

openClassNamed: aString
	| class |
	
	class := self environment classNamed: aString.
	self selectedPackage: class package.
	self selectedClass: class
!

removeMethod
	(self manager confirm: 'Do you REALLY want to remove method ', self selectedMethod methodClass name,' >> #', self selectedMethod selector)
		ifTrue: [ self environment removeMethod: self selectedMethod ]
! !

!HLBrowserModel methodsFor: 'compiling'!

compileClassComment: aString
	self environment 
		compileClassComment: aString 
		for: self selectedClass
!

compileClassDefinition: aString
	self environment compileClassDefinition: aString
!

compileMethod: aString

	self withCompileErrorHandling: [ self environment 
		compileMethod: aString 
		for: self selectedClass
		protocol: self compilationProtocol ]
! !

!HLBrowserModel methodsFor: 'defaults'!

allProtocol
	^ '-- all --'
!

unclassifiedProtocol
	^ 'as yet unclassified'
! !

!HLBrowserModel methodsFor: 'error handling'!

handleCompileError: anError
	self announcer announce: (HLCompileErrorRaised new
		error: anError;
		yourself)
!

handleParseError: anError
	| split line column messageToInsert |
	
	split := anError messageText tokenize: ' : '.
	messageToInsert := split second.

	"21 = 'Parse error on line ' size + 1"
	split := split first copyFrom: 21 to: split first size.
	
	split := split tokenize: ' column '.
	line := split first.
	column := split second.
	
	self announcer announce: (HLParseErrorRaised new
		line: line asNumber;
		column: column asNumber;
		message: messageToInsert;
		error: anError;
		yourself)
!

withCompileErrorHandling: aBlock
	[
		[
			aBlock 
				on: ParseError
				do: [:ex | self handleParseError: ex ]
		]
			on: UnknownVariableError
			do: [ :ex | self handleUnkownVariableError: ex ]
	]
		on: CompilerError
		do: [ :ex | self handleCompileError: ex ]
! !

!HLBrowserModel methodsFor: 'private'!

compilationProtocol
	| currentProtocol |
	
	currentProtocol := self selectedProtocol.
	currentProtocol ifNil: [ currentProtocol := self unclassifiedProtocol ].
	self selectedMethod ifNotNil: [ currentProtocol := self selectedMethod protocol ].

	^ currentProtocol = self allProtocol
		ifTrue: [ self unclassifiedProtocol ]
		ifFalse: [ currentProtocol ]
!

withHelperLabelled: aString do: aBlock
	"TODO: doesn't belong here"

	(window jQuery: '#helper') remove.

	[ :html |
		html div 
			id: 'helper';
			with: aString ] appendToJQuery: 'body' asJQuery.
	
	[
		aBlock value.
		(window jQuery: '#helper') remove
	] 
		valueWithTimeout: 10
! !

!HLBrowserModel methodsFor: 'testing'!

shouldCompileClassDefinition: aString
	^ self selectedClass isNil or: [
		aString first asUppercase = aString first ]
! !

!HLBrowserModel class methodsFor: 'actions'!

on: anEnvironment

	^ self new
    	environment: anEnvironment;
        yourself
! !

HLWidget subclass: #HLBrowserSourceWidget
	instanceVariableNames: 'model methodContents codeWidget'
	package: 'Helios-Browser'!

!HLBrowserSourceWidget methodsFor: 'accessing'!

codeWidget
	^ codeWidget ifNil: [ codeWidget := HLSourceCodeWidget on: self model ]
!

contents
	^ self codeWidget contents
!

contents: aString
	self methodContents: aString.
	self codeWidget contents: aString
!

methodContents
	^ methodContents ifNil: [ methodContents := '' ]
!

methodContents: aString
	methodContents := aString
!

model
	^ model
!

model: aBrowserModel
	model := aBrowserModel.
    
    self observeModel
!

previous
	"for browser lists widget"
!

previous: aWidget
	"for browser lists widget"
! !

!HLBrowserSourceWidget methodsFor: 'actions'!

focus
	self codeWidget focus
!

observeModel
	self model announcer 
		on: HLMethodSelected 
		do: [ :ann | self onMethodSelected: ann item ];
    	on: HLClassSelected 
		do: [ :ann | self onClassSelected: ann item ];
    	on: HLProtocolSelected 
		do: [ :ann | self onProtocolSelected: ann item ];
		on: HLSourceCodeFocusRequested 
		do: [ :ann | self onSourceCodeFocusRequested ]
!

observeSystem
	SystemAnnouncer current
    	on: MethodModified
        do: [ :ann | self onMethodModified: ann method ]
! !

!HLBrowserSourceWidget methodsFor: 'initialization'!

initialize
	super initialize.
    
    self observeSystem
! !

!HLBrowserSourceWidget methodsFor: 'reactions'!

onClassSelected: aClass
	aClass ifNil: [ ^ self contents: '' ].
    
    self contents: aClass definition
!

onMethodModified: aMethod

	self model selectedClass = aMethod methodClass ifFalse: [ ^ self ].
	self model selectedMethod ifNil: [ ^ self ].
    self model selectedMethod selector = aMethod selector ifFalse: [ ^ self ].

    self refresh
!

onMethodSelected: aCompiledMethod
	aCompiledMethod ifNil: [ ^ self contents: '' ].
    
    self contents: aCompiledMethod source
!

onProtocolSelected: aString
	self model selectedClass ifNil: [ ^ self contents: '' ].
    
    self contents: self model selectedClass definition
!

onSourceCodeFocusRequested
	self focus
! !

!HLBrowserSourceWidget methodsFor: 'rendering'!

renderContentOn: html
	self codeWidget renderOn: html
! !

!HLBrowserSourceWidget methodsFor: 'testing'!

hasFocus
	^ self codeWidget hasFocus
!

hasModification
	^ (self methodContents = self contents) not
! !

!HLBrowserSourceWidget methodsFor: 'updating'!

refresh
	self hasModification ifTrue: [ ^ self ].
    self hasFocus ifTrue: [ ^ self ].

	self contents: self model selectedMethod source
! !

!HLBrowserSourceWidget class methodsFor: 'instance creation'!

on: aBrowserModel
	^ self new
    	model: aBrowserModel;
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
        do: [ :ann | self onMethodAdded: ann method ];
        on: MethodRemoved
        do: [ :ann | self onMethodRemoved: ann method ]
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

onMethodAdded: aMethod
	self invalidateCacheFor: aMethod
!

onMethodRemoved: aMethod
	self invalidateCacheFor: aMethod
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

!CompiledMethod methodsFor: '*Helios-Browser'!

isOverridden
	| selector |
    
    selector := self selector.
    self methodClass allSubclassesDo: [ :each |
	    (each includesSelector: selector)
        	ifTrue: [ ^ true ] ].
	^ false
!

isOverride
	| superclass |
    
    superclass := self methodClass superclass.
	superclass ifNil: [ ^ false ].
	
    ^ (self methodClass superclass lookupSelector: self selector) notNil
! !

