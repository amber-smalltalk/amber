Smalltalk current createPackage: 'Helios-Core'!
Object subclass: #HLModel
	instanceVariableNames: 'announcer environment'
	package: 'Helios-Core'!
!HLModel commentStamp!
I am the abstract superclass of all models of Helios.
I am the "Model" part of the MVC pattern implementation in Helios.

I provide access to an `Environment` object and both a local (model-specific) and global (system-specific) announcer.

The `#withChangesDo:` method is handy for performing model changes ensuring that all widgets are aware of the change and can prevent it from happening.

Modifications of the system should be done via commands (see `HLCommand` and subclasses).!

!HLModel methodsFor: 'accessing'!

announcer
	^ announcer ifNil: [ announcer := Announcer new ]
!

environment
	^ environment ifNil: [ self manager environment ]
!

environment: anEnvironment
	environment := anEnvironment
!

manager
	^ HLManager current
!

systemAnnouncer
	^ self environment systemAnnouncer
! !

!HLModel methodsFor: 'error handling'!

withChangesDo: aBlock
	[ 
		self announcer announce: (HLAboutToChange new
			actionBlock: aBlock).
		aBlock value.
	]
		on: HLChangeForbidden 
		do: [ :ex | ]
! !

!HLModel methodsFor: 'testing'!

isBrowserModel
	^ false
!

isReferencesModel
	^ false
!

isToolModel
	^ false
! !

HLModel subclass: #HLToolModel
	instanceVariableNames: 'selectedClass selectedPackage selectedProtocol selectedSelector'
	package: 'Helios-Core'!
!HLToolModel commentStamp!
I am a model specific to package and class manipulation. All browsers should either use me or a subclass as their model.

I provide methods for package, class, protocol and method manipulation and access, forwarding to my environment.

I also handle compilation of classes and methods as well as compilation and parsing errors.!

!HLToolModel methodsFor: 'accessing'!

allSelectors
	^ self environment allSelectors
!

availableClassNames
	^ self environment availableClassNames
!

availablePackageNames
	^ self environment availablePackageNames
!

availablePackages
	^ self environment availablePackageNames
!

availableProtocols
	^ self environment availableProtocolsFor: self selectedClass
!

packages
	^ self environment packages
!

selectedClass
	^ selectedClass
!

selectedClass: aClass
	(self selectedClass = aClass and: [ aClass isNil ]) 
		ifTrue: [ ^ self ].
	
	self withChangesDo: [
		selectedClass = aClass ifTrue: [ 
			self selectedProtocol: nil ].
    
		aClass 
   			ifNil: [ selectedClass := nil ]
    		ifNotNil: [
				self selectedPackage: aClass theNonMetaClass package.
				self showInstance 
   					ifTrue: [ selectedClass := aClass theNonMetaClass ]
     				ifFalse: [ selectedClass := aClass theMetaClass ] ].
		self selectedProtocol: nil.
		self announcer announce: (HLClassSelected on: self selectedClass) ]
!

selectedMethod
	^ self selectedClass ifNotNil: [ 
		self selectedClass methodDictionary 
			at: selectedSelector 
			ifAbsent: [ nil ] ]
!

selectedMethod: aCompiledMethod
	selectedSelector = aCompiledMethod ifTrue: [ ^ self ].
    
    self withChangesDo: [
		aCompiledMethod
    		ifNil: [ selectedSelector := nil ]
      		ifNotNil: [
				selectedClass := aCompiledMethod methodClass.
				selectedSelector := aCompiledMethod selector ].

		self announcer announce: (HLMethodSelected on: aCompiledMethod) ]
!

selectedPackage
	^ selectedPackage
!

selectedPackage: aPackage
	selectedPackage = aPackage ifTrue: [ ^ self ].
    
	self withChangesDo: [
		selectedPackage := aPackage.
		self selectedClass: nil.
		self announcer announce: (HLPackageSelected on: aPackage) ]
!

selectedProtocol
	^ selectedProtocol
!

selectedProtocol: aString
	selectedProtocol = aString ifTrue: [ ^ self ].

	self withChangesDo: [
		selectedProtocol := aString.
		self selectedMethod: nil.
		self announcer announce: (HLProtocolSelected on: aString) ]
! !

!HLToolModel methodsFor: 'actions'!

addInstVarNamed: aString
	self environment addInstVarNamed: aString to: self selectedClass.
	self announcer announce: (HLInstVarAdded new
		theClass: self selectedClass;
		variableName: aString;
		yourself)
!

save: aString
	self announcer announce: HLSourceCodeSaved new.
	
	(self shouldCompileClassDefinition: aString)
		ifTrue: [ self compileClassDefinition: aString ]
		ifFalse: [ self compileMethod: aString ]
!

saveSourceCode
	self announcer announce: HLSaveSourceCode new
! !

!HLToolModel methodsFor: 'commands actions'!

commitPackage
	self 
		withHelperLabelled: 'Committing package ', self selectedPackage name, '...'
		do: [ self environment commitPackage: self selectedPackage ]
!

copyClassTo: aClassName
	self withChangesDo: [ 
		self environment 
			copyClass: self selectedClass theNonMetaClass
			to: aClassName ]
!

moveClassToPackage: aPackageName
	self withChangesDo: [
		self environment 
			moveClass: self selectedClass theNonMetaClass
			toPackage: aPackageName ]
!

moveMethodToClass: aClassName
	self withChangesDo: [
		self environment 
			moveMethod: self selectedMethod 
			toClass: aClassName ]
!

moveMethodToProtocol: aProtocol
	self withChangesDo: [
		self environment 
			moveMethod: self selectedMethod 
			toProtocol: aProtocol ]
!

openClassNamed: aString
	| class |
	
	self withChangesDo: [
		class := self environment classNamed: aString.
		self selectedPackage: class package.
		self selectedClass: class ]
!

removeClass
	self withChangesDo: [
		self manager 
			confirm: 'Do you REALLY want to remove class ', self selectedClass name
			ifTrue: [ self environment removeClass: self selectedClass ] ]
!

removeMethod
	self withChangesDo: [
		self manager 
			confirm: 'Do you REALLY want to remove method ', self selectedMethod methodClass name,' >> #', self selectedMethod selector
			ifTrue: [ self environment removeMethod: self selectedMethod ] ]
!

removeProtocol
	self withChangesDo: [
		self manager 
			confirm: 'Do you REALLY want to remove protocol ', self selectedProtocol
			ifTrue: [ self environment 
				removeProtocol: self selectedProtocol 
				from: self selectedClass ] ]
!

renameClassTo: aClassName
	self withChangesDo: [
		self environment 
			renameClass: self selectedClass theNonMetaClass
			to: aClassName ]
!

renameProtocolTo: aString
	self withChangesDo: [
		self environment 
			renameProtocol: self selectedProtocol
			to: aString
			in: self selectedClass ]
! !

!HLToolModel methodsFor: 'compiling'!

compileClassComment: aString
	self environment 
		compileClassComment: aString 
		for: self selectedClass
!

compileClassDefinition: aString
	self environment compileClassDefinition: aString
!

compileMethod: aString
	| method |
	
	self withCompileErrorHandling: [ 
		method := self environment 
			compileMethod: aString 
			for: self selectedClass
			protocol: self compilationProtocol.

		self selectedMethod: method ]
! !

!HLToolModel methodsFor: 'defaults'!

allProtocol
	^ '-- all --'
!

unclassifiedProtocol
	^ 'as yet unclassified'
! !

!HLToolModel methodsFor: 'error handling'!

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

handleUnkownVariableError: anError
	self announcer announce: (HLUnknownVariableErrorRaised new
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

!HLToolModel methodsFor: 'private'!

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

!HLToolModel methodsFor: 'testing'!

isToolModel
	^ true
!

shouldCompileClassDefinition: aString
	^ self selectedClass isNil or: [
		aString first asUppercase = aString first ]
! !

!HLToolModel class methodsFor: 'actions'!

on: anEnvironment

	^ self new
    	environment: anEnvironment;
        yourself
! !

Widget subclass: #HLTab
	instanceVariableNames: 'widget label root'
	package: 'Helios-Core'!
!HLTab commentStamp!
I am a widget specialized into building another widget as an Helios tab.

I should not be used directly, `HLWidget class >> #openAsTab` should be used instead.

## Example

    HLWorkspace openAsTab!

!HLTab methodsFor: 'accessing'!

activate
	self manager activate: self
!

add
	self manager addTab: self
!

displayLabel
	^ self label size > 20 
		ifTrue: [ (self label first: 20), '...' ]
		ifFalse: [ self label ]
!

focus
	self widget canHaveFocus ifTrue: [
		self widget focus ]
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

!HLTab methodsFor: 'actions'!

hide
	root ifNotNil: [ root asJQuery css: 'visibility' put: 'hidden' ]
!

registerBindings
	self widget registerBindings
!

remove
	self widget unregister.
	root ifNotNil: [ root asJQuery remove ]
!

show
	root
		ifNil: [ self appendToJQuery: 'body' asJQuery ]
		ifNotNil: [ root asJQuery css: 'visibility' put: 'visible' ]
! !

!HLTab methodsFor: 'rendering'!

renderOn: html
	root := html div
		class: 'tab';
		yourself.
	self renderTab
!

renderTab
	root contents: [ :html |
		html div
			class: 'amber_box';
			with: [ self widget renderOn: html ] ]
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
!HLWidget commentStamp!
I am the abstract superclass of all Helios widgets.

I provide common methods, additional behavior to widgets useful for Helios, like dialog creation, command execution and tab creation.!

!HLWidget methodsFor: 'accessing'!

manager
	^ HLManager current
!

wrapper
	^ wrapper
! !

!HLWidget methodsFor: 'actions'!

alert: aString
	window alert: aString
!

confirm: aString ifTrue: aBlock
	self manager confirm: aString ifTrue: aBlock
!

execute: aCommand
	HLManager current keyBinder
		activate;
		applyBinding: aCommand asBinding
!

request: aString do: aBlock
	self manager request: aString do: aBlock
!

request: aString value: valueString do: aBlock
	self manager 
		request: aString 
		value: valueString
		do: aBlock
!

unregister
	"This method is called whenever the receiver is closed (as a tab).
	Widgets subscribing to announcements should unregister there"
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
	wrapper := html div.
    [ :renderer | self renderContentOn: renderer ] appendToJQuery: wrapper asJQuery
! !

!HLWidget methodsFor: 'testing'!

canHaveFocus
	^ false
! !

!HLWidget methodsFor: 'updating'!

refresh
	self wrapper ifNil: [ ^ self ].
    
	self wrapper asJQuery empty.
    [ :html | self renderContentOn: html ] appendToJQuery: self wrapper asJQuery
! !

!HLWidget class methodsFor: 'accessing'!

openAsTab
	self canBeOpenAsTab ifFalse: [ ^ self ].
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

HLWidget subclass: #HLConfirmation
	instanceVariableNames: 'confirmationString actionBlock cancelBlock'
	package: 'Helios-Core'!

!HLConfirmation methodsFor: 'accessing'!

actionBlock
	^ actionBlock ifNil: [ [] ]
!

actionBlock: aBlock
	actionBlock := aBlock
!

cancelBlock
	^ cancelBlock ifNil: [ [] ]
!

cancelBlock: aBlock
	cancelBlock := aBlock
!

confirmationString
	^ confirmationString ifNil: [ 'Confirm' ]
!

confirmationString: aString
	confirmationString := aString
!

cssClass
	^ ''
! !

!HLConfirmation methodsFor: 'actions'!

cancel
	self cancelBlock value.
	self remove
!

confirm
	self actionBlock value.
	self remove
!

remove
	(window jQuery: '.dialog') removeClass: 'active'.
	[ 
		(window jQuery: '#overlay') remove.
		(window jQuery: '.dialog') remove
	] valueWithTimeout: 300
! !

!HLConfirmation methodsFor: 'rendering'!

renderButtonsOn: html
	| confirmButton |
	
	html div 
		class: 'buttons';
		with: [
			html button
				class: 'button';
				with: 'Cancel';
				onClick: [ self cancel ].
			confirmButton := html button
				class: 'button default';
				with: 'Confirm';
				onClick: [ self confirm ] ].

	confirmButton asJQuery focus
!

renderContentOn: html
	| confirmButton |
	
	html div id: 'overlay'.
	html div 
		class: 'dialog ', self cssClass;
		with: [
			self
				renderMainOn: html;
				renderButtonsOn: html ].

	(window jQuery: '.dialog') addClass: 'active'.
	self setupKeyBindings
!

renderMainOn: html
	html span with: self confirmationString
!

setupKeyBindings
	(window jQuery: '.dialog') keyup: [ :e |
		e keyCode = 27 ifTrue: [ self cancel ] ]
! !

HLConfirmation subclass: #HLRequest
	instanceVariableNames: 'input value'
	package: 'Helios-Core'!

!HLRequest methodsFor: 'accessing'!

cssClass
	^ 'large'
!

value
	^ value ifNil: [ '' ]
!

value: aString
	value := aString
! !

!HLRequest methodsFor: 'actions'!

confirm
	self actionBlock value: input asJQuery val.
	self remove
! !

!HLRequest methodsFor: 'rendering'!

renderMainOn: html
	super renderMainOn: html.
	input := html textarea.
	input asJQuery val: self value
! !

HLWidget subclass: #HLDebugger
	instanceVariableNames: ''
	package: 'Helios-Core'!

HLWidget subclass: #HLFocusableWidget
	instanceVariableNames: ''
	package: 'Helios-Core'!

!HLFocusableWidget methodsFor: 'accessing'!

focusClass
	^ 'focused'
! !

!HLFocusableWidget methodsFor: 'events'!

blur
	self wrapper asJQuery blur
!

focus
	self wrapper asJQuery focus
!

hasFocus
	^ self wrapper notNil and: [ self wrapper asJQuery is: ':focus' ]
! !

!HLFocusableWidget methodsFor: 'rendering'!

renderContentOn: html
!

renderOn: html
	self registerBindings.
    
    wrapper := html div 
    	class: 'hl_widget';
		yourself.
		
       wrapper with: [ self renderContentOn: html ].
	
	wrapper
		at: 'tabindex' put: '0';
		onBlur: [ self wrapper asJQuery removeClass: self focusClass ];
        onFocus: [ self wrapper asJQuery addClass: self focusClass ]
! !

!HLFocusableWidget methodsFor: 'testing'!

canHaveFocus
	^ true
! !

HLFocusableWidget subclass: #HLListWidget
	instanceVariableNames: 'items selectedItem mapping'
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

positionOf: aListItem
	<
    	return aListItem.parent().children().get().indexOf(aListItem.get(0)) + 1
	>
!

selectedItem
	^ selectedItem
!

selectedItem: anObject
	selectedItem := anObject
! !

!HLListWidget methodsFor: 'actions'!

activateFirstListItem
	self activateListItem: (window jQuery: ((wrapper asJQuery find: 'li.inactive') get: 0))
!

activateItem: anObject
	self activateListItem: (mapping 
		at: anObject
		ifAbsent: [ ^ self ]) asJQuery
!

activateListItem: aListItem
	| item |
    
	(aListItem get: 0) ifNil: [ ^self ].
	aListItem parent children removeClass: 'active'.
	aListItem addClass: 'active'.
    
	self ensureVisible: aListItem.
    
   "Activate the corresponding item"
   item := (self items at: (aListItem attr: 'list-data') asNumber).
   self selectedItem == item ifFalse: [
	   self selectItem: item ]
!

activateNextListItem
	self activateListItem: (window jQuery: '.focused .nav-pills .active') next.
	
	"select the first item if none is selected"
	(window jQuery: '.focused .nav-pills .active') get ifEmpty: [
		self activateFirstListItem ]
!

activatePreviousListItem
	self activateListItem: (window jQuery: '.focused .nav-pills .active') prev
!

ensureVisible: aListItem	
	"Move the scrollbar to show the active element"
	
	| perent position |
	
	position := self positionOf: aListItem.
	parent := aListItem parent.
	
    aListItem position top < 0 ifTrue: [
		(parent get: 0) scrollTop: ((parent get: 0) scrollTop + aListItem position top - 10) ].
    aListItem position top + aListItem height > parent height ifTrue: [ 
		(parent get: 0) scrollTop: ((parent get: 0) scrollTop + aListItem height - (parent height - aListItem position top)) +10 ]
!

focus
	super focus.
    self items isEmpty ifFalse: [ 
		self selectedItem ifNil: [ self activateFirstListItem ] ]
!

refresh
	super refresh.
	
	self ensureVisible: (mapping 
		at: self selectedItem
		ifAbsent: [ ^ self ]) asJQuery
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
	"TODO: refactor this!!"
	
	| active interval delay repeatInterval |
	
	active := false.
	repeatInterval := 70.
	self wrapper asJQuery unbind: 'keydown'.

	self wrapper asJQuery keydown: [ :e |
		
        (e which = 38 and: [ active = false ]) ifTrue: [ 
			active := true.
			self activatePreviousListItem.
        	delay := [
				interval := [
					(self wrapper asJQuery hasClass: self focusClass)
						ifTrue: [
							self activatePreviousListItem ]
						ifFalse: [
							active := false.
							interval ifNotNil: [ interval clearInterval ].
							delay ifNotNil: [ delay clearTimeout] ] ]
					valueWithInterval: repeatInterval ]
						valueWithTimeout: 300 ].
			
      	(e which = 40 and: [ active = false ]) ifTrue: [
            active := true.
			self activateNextListItem.
        	delay := [
				interval := [ 
					(self wrapper asJQuery hasClass: self focusClass)
						ifTrue: [
							self activateNextListItem ]
						ifFalse: [
							active := false.
							interval ifNotNil: [ interval clearInterval ].
							delay ifNotNil: [ delay clearTimeout] ] ]
					valueWithInterval: repeatInterval ]
						valueWithTimeout: 300 ] ].
	
	self wrapper asJQuery keyup: [ :e |
		active ifTrue: [
			active := false.
			interval ifNotNil: [ interval clearInterval ].
			delay ifNotNil: [ delay clearTimeout] ] ]
! !

!HLListWidget methodsFor: 'initialization'!

initialize
	super initialize.
	
	mapping := Dictionary new.
! !

!HLListWidget methodsFor: 'private'!

registerMappingFrom: anObject to: aTag
	mapping at: anObject put: aTag
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
	self registerMappingFrom: anObject to: li.
	
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
	mapping := Dictionary new.
	
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

	self wrapper asJQuery keydown: [ :e |
        e which = 39 ifTrue: [ 
        	self nextFocus ].
		e which = 37 ifTrue: [ 
        	self previousFocus ] ]
! !

HLNavigationListWidget subclass: #HLToolListWidget
	instanceVariableNames: 'model'
	package: 'Helios-Core'!

!HLToolListWidget methodsFor: 'accessing'!

commandCategory
	^ self label
!

label
	^ 'List'
!

menuCommands
	"Answer a collection of commands to be put in the cog menu"
	
	^ ((HLToolCommand concreteClasses
		select: [ :each | each isValidFor: self model ])
			collect: [ :each | each for: self model ])
			select: [ :each | 
				each category = self commandCategory and: [ 
					each isAction and: [ each isActive ] ] ]
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

!HLToolListWidget methodsFor: 'actions'!

activateListItem: anItem
	self model withChangesDo: [ super activateListItem: anItem ]
!

activateNextListItem
	self model withChangesDo: [ super activateNextListItem ]
!

activatePreviousListItem
	self model withChangesDo: [ super activatePreviousListItem ]
!

observeModel
!

observeSystem
!

unregister
	super unregister.
	
	self model announcer unsubscribe: self.
	self model systemAnnouncer unsubscribe: self
! !

!HLToolListWidget methodsFor: 'rendering'!

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

!HLToolListWidget methodsFor: 'updating'!

updateMenu
	(self wrapper asJQuery find: '.cog') remove.
	
	[ :html | self renderMenuOn: html ] 
		appendToJQuery: (self wrapper asJQuery find: '.list-label')
! !

!HLToolListWidget class methodsFor: 'instance creation'!

on: aModel
	^ self new 
    	model: aModel;
        yourself
! !

HLWidget subclass: #HLManager
	instanceVariableNames: 'tabs activeTab keyBinder environment history'
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

history
	^ history ifNil: [ history := OrderedCollection new ]
!

history: aCollection
	history := aCollection
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
	aTab registerBindings.
	activeTab := aTab.
	
	self 
		refresh;
		addToHistory: aTab;
		show: aTab
!

addTab: aTab
	self tabs add: aTab.
    self activate: aTab
!

addToHistory: aTab
	self removeFromHistory: aTab.
	self history add: aTab
!

confirm: aString ifFalse: aBlock
	(HLConfirmation new
		confirmationString: aString;
		cancelBlock: aBlock;
		yourself)
			appendToJQuery: 'body' asJQuery
!

confirm: aString ifTrue: aBlock
	(HLConfirmation new
		confirmationString: aString;
		actionBlock: aBlock;
		yourself)
			appendToJQuery: 'body' asJQuery
!

removeActiveTab
	self removeTab: self activeTab
!

removeFromHistory: aTab
	self history: (self history reject: [ :each | each == aTab ])
!

removeTab: aTab
	(self tabs includes: aTab) ifFalse: [ ^ self ].

	self removeFromHistory: aTab.
	self tabs remove: aTab.
	self keyBinder flushBindings.
	aTab remove.
	self refresh.
	self history ifNotEmpty: [
		self history last activate ]
!

request: aString do: aBlock
	self 
		request: aString
		value: ''
		do: aBlock
!

request: aString value: valueString do: aBlock
	(HLRequest new
		confirmationString: aString;
		actionBlock: aBlock;
		value: valueString;
		yourself)
			appendToJQuery: 'body' asJQuery
! !

!HLManager methodsFor: 'defaults'!

defaultEnvironment
	"If helios is loaded from within a frame, answer the parent window environment"
	
	window parent ifNil: [ ^ Environment new ].
	
	^ ((window parent at: 'smalltalk')
		at: 'Environment') new
! !

!HLManager methodsFor: 'initialization'!

initialize
	super initialize.
    self keyBinder setupEvents
! !

!HLManager methodsFor: 'rendering'!

refresh
	(window jQuery: '.navbar') remove.
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
			with: [ self renderTabsOn: html ] ]
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
      							((html tag: 'i') class: 'icon-remove')
  									onClick: [ self removeTab: each ].
                              	html with: each displayLabel ];
							onClick: [ each activate ] ] ].
			self renderAddOn: html ]
!

show: aTab
	self tabs do: [ :each | each hide ].
	aTab show; focus
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

