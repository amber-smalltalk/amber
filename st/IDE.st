Widget subclass: #TabManager
	instanceVariableNames: 'selectedTab tabs opened ul'
	category: 'IDE'!

!TabManager methodsFor: 'accessing'!

tabs
    ^tabs ifNil: [tabs := Array new]
! !

!TabManager methodsFor: 'actions'!

updateBodyMargin
    self setBodyMargin: '#jtalk' asJQuery height + 27
!

updatePosition
    <jQuery('#jtalk').css('top', '').css('bottom', '27px')>
!

removeBodyMargin
    self setBodyMargin: 0
!

setBodyMargin: anInteger
    '.jtalkBody' asJQuery cssAt: 'margin-bottom' put: anInteger asString, 'px'
!

onResize: aBlock
    <jQuery('#jtalk').resizable({
	handles: 'n', 
	resize: aBlock,
	minHeight: 230
})>
!

onWindowResize: aBlock
    <jQuery(window).resize(aBlock)>
!

open
    opened ifFalse: [
	'body' asJQuery addClass: 'jtalkBody'.
	'#jtalk' asJQuery show.
	ul asJQuery show.
	self updateBodyMargin.
	selectedTab show.
	opened := true]
!

close
    opened ifTrue: [
	'#jtalk' asJQuery hide.
	ul asJQuery hide.
	selectedTab hide.
	self removeBodyMargin.
	'body' asJQuery removeClass: 'jtalkBody'.
	opened := false]
!

newBrowserTab
    Browser open
!

selectTab: aWidget
    self open.
    selectedTab := aWidget.
    self tabs do: [:each |
	each hide].
    aWidget show.
	
    self update
!

closeTab: aWidget
    self removeTab: aWidget.
    self selectTab: self tabs last.
    aWidget remove.
    self update
! !

!TabManager methodsFor: 'adding/Removing'!

addTab: aWidget
    self tabs add: aWidget.
    '#jtalk' asJQuery append: aWidget.
    aWidget hide
!

removeTab: aWidget
    self tabs remove: aWidget.
    self update
! !

!TabManager methodsFor: 'initialization'!

initialize
    super initialize.
    opened := true.
    'body' asJQuery 
	append: self;
	append: [:html | html div id: 'jtalk'];
	addClass: 'jtalkBody'.
    self 
	addTab: Transcript current;
	addTab: Workspace new.
    self selectTab: self tabs last.
    self 
	onResize: [self updateBodyMargin; updatePosition];
	onWindowResize: [self updatePosition]
! !

!TabManager methodsFor: 'rendering'!

renderOn: html
	ul := html ul
		id: 'jtalkTabs';
		yourself.
	self renderTabs
!

renderTabFor: aWidget on: html
    | li |
    li := html li.
    selectedTab = aWidget ifTrue: [
	li class: 'selected'].
    li with: [
	html span
	    with: aWidget label;
	    onClick: [self selectTab: aWidget].
	aWidget canBeClosed ifTrue: [
	    html span 
		class: 'close';
		with: 'x';
		onClick: [self closeTab: aWidget]]]
!

renderTabs
	ul contents: [:html |
	    html li 
		class: 'closeAll';
		with: 'x';
		onClick: [self close].
	    self tabs do: [:each |
		self renderTabFor: each on: html].
	    html li
		class: 'newtab';
		with: ' + ';
		onClick: [self newBrowserTab]]
! !

!TabManager methodsFor: 'updating'!

update
	self renderTabs
! !

TabManager class instanceVariableNames: 'current'!

!TabManager class methodsFor: 'instance creation'!

current
    ^current ifNil: [current := super new]
!

new
    self shouldNotImplement
! !

Widget subclass: #TabWidget
	instanceVariableNames: 'div'
	category: 'IDE'!

!TabWidget methodsFor: 'accessing'!

label
    self subclassResponsibility
! !

!TabWidget methodsFor: 'actions'!

open
    TabManager current addTab: self.
    TabManager current selectTab: self
!

show
	div asJQuery show
!

hide
	div asJQuery hide
!

remove
	div asJQuery remove
! !

!TabWidget methodsFor: 'rendering'!

renderOn: html
	div := html div
		class: 'jtalkTool';
		yourself.
	self renderTab
!

renderBoxOn: html
!

renderButtonsOn: html
!

update
	self renderTab
!

renderTab
	div contents: [:html |
	    html div
		class: 'jt_box';
		with: [self renderBoxOn: html].
	    html div
		class: 'jt_buttons';
		with: [self renderButtonsOn: html]]
! !

!TabWidget methodsFor: 'testing'!

canBeClosed
    ^false
! !

!TabWidget class methodsFor: 'instance creation'!

open
    ^self new open
! !

TabWidget subclass: #Workspace
	instanceVariableNames: 'sourceArea'
	category: 'IDE'!

!Workspace methodsFor: 'accessing'!

label
    ^'[Workspace]'
! !

!Workspace methodsFor: 'actions'!

clearWorkspace
    sourceArea clear
!

doIt
   sourceArea doIt
!

printIt
	sourceArea printIt
!

inspectIt
    sourceArea inspectIt
! !

!Workspace methodsFor: 'rendering'!

renderBoxOn: html
    sourceArea := SourceArea new.
    sourceArea renderOn: html
!

renderButtonsOn: html
    html button
	with: 'DoIt';
	title: 'ctrl+d';
	onClick: [self doIt].
    html button
	with: 'PrintIt';
	title: 'ctrl+p';
	onClick: [self printIt].
    html button
	with: 'InspectIt';
	title: 'ctrl+i';
	onClick: [self inspectIt].
    html button
	with: 'Clear workspace';
	onClick: [self clearWorkspace]
! !

TabWidget subclass: #Transcript
	instanceVariableNames: 'textarea'
	category: 'IDE'!

!Transcript methodsFor: 'accessing'!

label
    ^'[Transcript]'
! !

!Transcript methodsFor: 'actions'!

show: anObject
    textarea asJQuery val: textarea asJQuery val, anObject asString.
!

cr
    textarea asJQuery val: textarea asJQuery val, String cr.
!

clear
    textarea asJQuery val: ''
! !

!Transcript methodsFor: 'rendering'!

renderBoxOn: html
    textarea := html textarea.
    textarea asJQuery call: 'tabby'.
    textarea 
	class: 'jt_transcript';
	at: 'spellcheck' put: 'false'
!

renderButtonsOn: html
    html button
	with: 'Clear transcript';
	onClick: [self clear]
! !

Transcript class instanceVariableNames: 'current'!

!Transcript class methodsFor: 'instance creation'!

open
    self current open
!

new
    self shouldNotImplement
!

current
    ^current ifNil: [current := super new]
! !

!Transcript class methodsFor: 'printing'!

show: anObject
    self current show: anObject
!

cr
    self current show: String cr
!

clear
    self current clear
! !

TabWidget subclass: #Browser
	instanceVariableNames: 'selectedCategory selectedClass selectedProtocol selectedMethod commitButton categoriesList classesList protocolsList methodsList sourceArea tabsList selectedTab saveButton classButtons methodButtons unsavedChanges input'
	category: 'IDE'!

!Browser methodsFor: 'accessing'!

label
    ^selectedClass 
	ifNil: ['Browser (nil)']
	ifNotNil: [selectedClass name]
!

categories
    | categories |
    categories := Array new.
    Smalltalk current classes do: [:each |
	(categories includes: each category) ifFalse: [
	    categories add: each category]].
    ^categories sort
!

classes
    ^(Smalltalk current classes 
	select: [:each | each category = selectedCategory])
	sort: [:a :b | a name > b name]
!

protocols
    | klass |
    selectedClass ifNotNil: [
	selectedTab = #comment ifTrue: [^#()].
	klass := selectedTab = #instance
	    ifTrue: [selectedClass]
	    ifFalse: [selectedClass class].
	klass methodDictionary isEmpty ifTrue: [
	    ^Array with: 'not yet classified'].
	^klass protocols].
    ^Array new
!

methods
    | klass |
    selectedTab = #comment ifTrue: [^#()].
    selectedClass ifNotNil: [
	klass := selectedTab = #instance
	    ifTrue: [selectedClass]
	    ifFalse: [selectedClass class]].
    ^(selectedProtocol 
	ifNil: [
	    klass 
		ifNil: [#()] 
		ifNotNil: [klass methodDictionary values]]
	ifNotNil: [
	    klass methodDictionary values select: [:each |
		each category = selectedProtocol]]) sort: [:a :b | a selector > b selector]
!

source
    selectedTab = #comment ifFalse: [
	^(selectedProtocol notNil or: [selectedMethod notNil])
	    ifFalse: [self declarationSource]
	    ifTrue: [self methodSource]].
    ^selectedClass
	ifNil: ['']
	ifNotNil: [self classCommentSource]
!

methodSource
    ^selectedMethod
	ifNil: [self dummyMethodSource]
	ifNotNil: [selectedMethod source]
!

dummyMethodSource
    ^'messageSelectorAndArgumentNames
	"comment stating purpose of message"

	| temporary variable names |
	statements'
!

declarationSource
    ^selectedTab = #instance
	ifTrue: [self classDeclarationSource]
	ifFalse: [self metaclassDeclarationSource]
!

classDeclarationSource
    | stream |
    stream := '' writeStream.
    selectedClass ifNotNil: [
	stream 
	    nextPutAll: selectedClass superclass asString;
	    nextPutAll: ' subclass: #';
	    nextPutAll: selectedClass name;
	    nextPutAll: String lf, String tab;
	    nextPutAll: 'instanceVariableNames: '''.
	selectedClass instanceVariableNames 
	    do: [:each | stream nextPutAll: each] 
	    separatedBy: [stream nextPutAll: ' '].
	stream
	    nextPutAll: '''', String lf, String tab;
	    nextPutAll: 'category: ''';
	    nextPutAll: selectedClass category;
	    nextPutAll: ''''].
    ^stream contents
!

metaclassDeclarationSource
    | stream |
    stream := '' writeStream.
    selectedClass ifNotNil: [
	stream 
	    nextPutAll: selectedClass asString;
	    nextPutAll: ' class ';
	    nextPutAll: 'instanceVariableNames: '''.
	selectedClass class instanceVariableNames
	    do: [:each | stream nextPutAll: each]
	    separatedBy: [stream nextPutAll: ' '].
	stream nextPutAll: ''''].
    ^stream contents
!

classCommentSource
    ^selectedClass comment
!

selectedClass
	^selectedClass
! !

!Browser methodsFor: 'actions'!

disableSaveButton
    saveButton ifNotNil: [
	saveButton at: 'disabled' put: true].
    unsavedChanges := false
!

hideClassButtons
    classButtons asJQuery hide
!

showClassButtons
    classButtons asJQuery show
!

hideMethodButtons
    methodButtons asJQuery hide
!

showMethodButtons
    methodButtons asJQuery show
!

compile
    self disableSaveButton.
    selectedTab = #comment ifTrue: [
	selectedClass ifNotNil: [
	    self compileClassComment]].
    (selectedProtocol notNil or: [selectedMethod notNil])
	ifFalse: [self compileDefinition]
	ifTrue: [self compileMethodDefinition]
!

compileClassComment
    selectedClass comment: sourceArea val
!

compileMethodDefinition
    selectedTab = #instance
	ifTrue: [self compileMethodDefinitionFor: selectedClass]
	ifFalse: [self compileMethodDefinitionFor: selectedClass class]
!

compileMethodDefinitionFor: aClass
    | compiler method source node |
    source := sourceArea val.
    selectedProtocol ifNil: [selectedProtocol := selectedMethod category].
    compiler := Compiler new.
    node := compiler parse: source.
    node isParseFailure ifTrue: [
	^self alert: 'PARSE ERROR: ', node reason, ', position: ', node position asString].
    compiler currentClass: aClass.
    method := compiler eval: (compiler compileNode: node).
    method category: selectedProtocol.
    compiler unknownVariables do: [:each |
	(self confirm: 'Declare ''', each, ''' as instance variable?') ifTrue: [
		self addInstanceVariableNamed: each toClass: aClass.
		^self compileMethodDefinitionFor: aClass]].
    aClass addCompiledMethod: method.
    compiler setupClass: aClass.
    self updateMethodsList.
    self selectMethod: method
!

compileDefinition
    | newClass |
    newClass := Compiler new loadExpression: sourceArea textarea asJQuery val.
    self 
	resetClassesList;
	updateCategoriesList;
	updateClassesList
!

commitCategory
    selectedCategory ifNotNil: [
	(Ajax url: self class commitPathJs, '/', selectedCategory, '.js')
	    at: 'type' put: 'PUT';
	    at: 'data' put: (Exporter new exportCategory: selectedCategory);
	    at: 'error' put: [self alert: 'Commit failed!!'];
	    send.
	(Ajax url: self class commitPathSt, '/', selectedCategory, '.st')
	    at: 'type' put: 'PUT';
	    at: 'data' put: (ChunkExporter new exportCategory: selectedCategory);
	    at: 'error' put: [self alert: 'Commit failed!!'];
	    send]
!

cancelChanges
    ^unsavedChanges 
	ifTrue: [self confirm: 'Cancel changes?']
	ifFalse: [true]
!

removeClass
    (self confirm: 'Do you really want to remove ', selectedClass name, '?')
	ifTrue: [
	    Smalltalk current basicDelete: selectedClass name.
	    self resetClassesList.
	    self selectClass: nil]
!

removeMethod
    self cancelChanges ifTrue: [
	(self confirm: 'Do you really want to remove #', selectedMethod selector, '?')
	    ifTrue: [
		selectedTab = #instance 
			ifTrue: [selectedClass removeCompiledMethod: selectedMethod]
			ifFalse: [selectedClass class removeCompiledMethod: selectedMethod].
		self selectMethod: nil]]
!

setMethodProtocol: aString
    self cancelChanges ifTrue: [
	(self protocols includes: aString)
	    ifFalse: [self addNewProtocol]
	    ifTrue: [
		selectedMethod category: aString.
		selectedProtocol := aString.
		selectedMethod := selectedMethod.
		self 
		    updateProtocolsList;
		    updateMethodsList;
		    updateSourceAndButtons]]
!

addNewProtocol
    | newProtocol |
    newProtocol := self prompt: 'New method protocol'.
    newProtocol notEmpty ifTrue: [
	selectedMethod category: newProtocol.
	self setMethodProtocol: newProtocol]
!

selectCategory: aCategory
    self cancelChanges ifTrue: [
	selectedCategory := aCategory.
	selectedClass := selectedProtocol := selectedMethod :=  nil.
	self resetClassesList.
	self 
	    updateCategoriesList;
	    updateClassesList;
	    updateProtocolsList;
	    updateMethodsList;
	    updateSourceAndButtons]
!

selectClass: aClass
    self cancelChanges ifTrue: [
	selectedClass := aClass.
	selectedProtocol := selectedMethod := nil.
	self 
	    updateClassesList;
	    updateProtocolsList;
	    updateMethodsList;
	    updateSourceAndButtons]
!

selectProtocol: aString
    self cancelChanges ifTrue: [
	selectedProtocol := aString.
	selectedMethod := nil.
	self 
	    updateProtocolsList;
	    updateMethodsList;
	    updateSourceAndButtons]
!

selectMethod: aMethod
    self cancelChanges ifTrue: [
	selectedMethod := aMethod.
	self 
	    updateProtocolsList;
	    updateMethodsList;
	    updateSourceAndButtons]
!

selectTab: aString
    self cancelChanges ifTrue: [
	selectedTab := aString.
	self selectProtocol: nil.
	self updateTabsList]
!

renameClass
    | newName |
    newName := self prompt: 'Rename class ', selectedClass name.
    newName notEmpty ifTrue: [
	selectedClass rename: newName.
	self 
		updateClassesList;
		updateSourceAndButtons]
!

addInstanceVariableNamed: aString toClass: aClass
	ClassBuilder new
		addSubclassOf: aClass superclass named: aClass name instanceVariableNames: (aClass instanceVariableNames copy add: aString; yourself)
!

searchReferencesOf: aString
	ReferencesBrowser search: aString
!

searchClassReferences
	ReferencesBrowser search: selectedClass name
!

search: aString
	self cancelChanges ifTrue: [| searchedClass |
		searchedClass := Smalltalk current at: aString.
		searchedClass isClass
			ifTrue: [self class openOn: searchedClass]
			ifFalse: [self searchReferencesOf: aString]]
! !

!Browser methodsFor: 'initialization'!

initialize
    super initialize.
    selectedTab := #instance.
    unsavedChanges := false
! !

!Browser methodsFor: 'rendering'!

renderBoxOn: html
    self 
	renderTopPanelOn: html;
	renderTabsOn: html;
	renderBottomPanelOn: html
!

renderTopPanelOn: html
    html div 
	class: 'top'; 
	with: [
	    self renderInputOn: html.
	    categoriesList := html ul class: 'jt_column browser categories'.
	    commitButton := html button 
		class: 'jt_commit';
		title: 'Commit classes in this category to disk';
		onClick: [self commitCategory];
		with: 'Commit category'.
	    classesList := ClassesList on: self.
	    classesList renderOn: html.
	    protocolsList := html ul class: 'jt_column browser protocols'.
	    methodsList := html ul class: 'jt_column browser methods'.
	    self
		updateCategoriesList;
		updateClassesList;
		updateProtocolsList;
		updateMethodsList.
	    html div class: 'jt_clear']
!

renderTabsOn: html
    tabsList := html ul class: 'jt_tabs'.
    self updateTabsList.
!

renderBottomPanelOn: html
    html div
	class: 'jt_sourceCode';
	with: [
	    sourceArea := SourceArea new.
	    sourceArea renderOn: html.
	    sourceArea textarea
		onKeyUp: [self updateStatus]]
!

renderButtonsOn: html
    saveButton := html button.
    saveButton 
	with: 'Save';
	onClick: [self compile].
    methodButtons := html span.
    classButtons := html span.
    html div 
	class: 'right';
	with: [
		html button
			with: 'DoIt';
			onClick: [sourceArea doIt].
		html button
			with: 'PrintIt';
			onClick: [sourceArea printIt].
		html button with: 'InspectIt';
			onClick: [sourceArea inspectit]]. 
    self updateSourceAndButtons
!

renderInputOn: html 
	input := html input 
		class: 'implementors';
		yourself.
	input onKeyPress: [:event |
		event keyCode = 13 ifTrue: [
			self search: input asJQuery val]]
! !

!Browser methodsFor: 'testing'!

canBeClosed
	^true
! !

!Browser methodsFor: 'updating'!

updateCategoriesList
    categoriesList contents: [:html |
	self categories do: [:each || li label |
	    each isEmpty 
		ifTrue: [label := 'Unclassified']
		ifFalse: [label := each].
	    li := html li.
	    selectedCategory = each ifTrue: [
		li class: 'selected'].
	    li
		with: label;
		onClick: [self selectCategory: each]]]
!

updateClassesList
    TabManager current update.
    classesList updateNodes.
    "classesList contents: [:html |
	self classes do: [:each || li |
	    li := html li.
	    selectedClass = each ifTrue: [
		li class: 'selected'].
	    li
		with: each name;
		onClick: [self selectClass: each]]]"
!

updateProtocolsList
    protocolsList contents: [:html |
	self protocols do: [:each || li |
	    li := html li.
	    selectedProtocol = each ifTrue: [
		li class: 'selected'].
	    li 
		with: each;
		onClick: [self selectProtocol: each]]]
!

updateMethodsList
    methodsList contents: [:html |
	self methods do: [:each || li |
	    li := html li.
	    selectedMethod = each ifTrue: [
		li class: 'selected'].
	    li
		with: each selector;
		onClick: [self selectMethod: each]]]
!

updateTabsList
    tabsList contents: [:html || li |
	li := html li.
	selectedTab = #instance ifTrue: [li class: 'selected'].
	li
	    with: 'Instance';
	    onClick: [self selectTab: #instance].
	li := html li.
	selectedTab = #class ifTrue: [li class: 'selected'].
	li
	    with: 'Class';
	    onClick: [self selectTab: #class].
	li := html li.
	selectedTab = #comment ifTrue: [li class: 'selected'].
	li
	    with: 'Comment';
	    onClick: [self selectTab: #comment]]
!

updateSourceAndButtons
	self disableSaveButton.
	classButtons contents: [:html |
		html button
			with: 'Rename class';
			onClick: [self renameClass].
		html button
			with: 'Remove class';
			onClick: [self removeClass].
		html button
			with: 'References';
			onClick: [self searchClassReferences]].
	methodButtons contents: [:html |
		html button
			with: 'Remove method';
			onClick: [self removeMethod].
		html select 
	    		onChange: [:e :select | self setMethodProtocol: select val];
	    		with: [
				html option
		    			with: 'Method protocol';
					at: 'disabled' put: 'disabled'.
				html option
		    			class: 'important';
		    			with: 'New...'.
				self protocols do: [:each |
		    			html option with: each]].
		selectedMethod isNil ifFalse: [
			html select 
	    			onChange: [:e :select | self searchReferencesOf: select val];
	    			with: [
					html option
		    				with: 'References';
						at: 'disabled' put: 'disabled'.
					html option
		    				class: 'important';
		    				with: selectedMethod selector.
					selectedMethod messageSends sorted do: [:each |
		    				html option with: each]]]].
    	selectedMethod isNil
		ifTrue: [
	    		self hideMethodButtons.
	    			(selectedClass isNil or: [selectedProtocol notNil])
					ifTrue: [self hideClassButtons]
	    				ifFalse: [self showClassButtons]]
		ifFalse: [
	    		self hideClassButtons.
	    		self showMethodButtons].
    	sourceArea val: self source
!

updateStatus
	sourceArea textarea asJQuery val = self source
		ifTrue: [
			saveButton ifNotNil: [
				saveButton at: 'disabled' put: true].
    			unsavedChanges := false]
		ifFalse: [
			saveButton ifNotNil: [
    				saveButton removeAt: 'disabled'].
    			unsavedChanges := true]
!

resetClassesList
	classesList resetNodes
! !

!Browser class methodsFor: 'accessing'!

commitPathJs
	^'js'
!

commitPathSt
	^'st'
! !

!Browser class methodsFor: 'convenience'!

openOn: aClass
    ^self new
	open;
	selectCategory: aClass category;
	selectClass: aClass
!

open
    self new open
! !

TabWidget subclass: #Inspector
	instanceVariableNames: 'label variables object selectedVariable variablesList valueTextarea workspaceTextarea diveButton'
	category: 'IDE'!

!Inspector methodsFor: 'accessing'!

label
	^label ifNil: ['Inspector (nil)']
!

variables
	^variables
!

setVariables: aCollection
	variables := aCollection
!

setLabel: aString
	label := aString
!

selectedVariable
	^selectedVariable
!

selectedVariable: aString
	selectedVariable := aString
! !

!Inspector methodsFor: 'actions'!

inspect: anObject
	object := anObject.
	variables := #().
	object inspectOn: self
!

dive
	(self variables at: self selectedVariable) inspect
!

refresh
	self 
		inspect: object; 
		updateVariablesList;
		updateValueTextarea
! !

!Inspector methodsFor: 'rendering'!

renderBoxOn: html
	self 
		renderTopPanelOn: html;
		renderBottomPanelOn: html
!

renderTopPanelOn: html
    html div 
	class: 'top'; 
	with: [
	    variablesList := html ul class: 'jt_column variables'.
	    valueTextarea := html textarea class: 'jt_column value'; at: 'readonly' put: 'readonly'.
	    self
		updateVariablesList;
		updateValueTextarea.
	    html div class: 'jt_clear']
!

renderBottomPanelOn: html
    html div
	class: 'jt_sourceCode';
	with: [
	    workspaceTextarea := html textarea 
		class: 'source';
		at: 'spellcheck' put: 'false'.
	    workspaceTextarea asJQuery call: 'tabby']
!

renderButtonsOn: html
	html button
		with: 'Refresh';
		onClick: [self refresh].
	diveButton := html button 
		with: 'Dive'; 
		onClick: [self dive].
	self updateButtons
! !

!Inspector methodsFor: 'testing'!

canBeClosed
	^true
! !

!Inspector methodsFor: 'updating'!

updateVariablesList
	variablesList contents: [:html |
		self variables keys do: [:each || li |
			li := html li.
			li
				with: each;
				onClick: [self selectVariable: each].
			self selectedVariable = each ifTrue: [
				li class: 'selected']]]
!

selectVariable: aString
	self selectedVariable: aString.
	self 
		updateVariablesList;
		updateValueTextarea;
		updateButtons
!

updateValueTextarea
	valueTextarea asJQuery val: (self selectedVariable isNil
		ifTrue: ['']
		ifFalse: [(self variables at: self selectedVariable) printString])
!

updateButtons
	(self selectedVariable notNil and: [(self variables at: self selectedVariable) notNil])
		ifFalse: [diveButton at: 'disabled' put: true] 
		ifTrue: [diveButton removeAt: 'disabled']
! !

!Inspector class methodsFor: 'instance creation'!

on: anObject
	^self new
		inspect: anObject;
		yourself
! !

TabWidget subclass: #ReferencesBrowser
	instanceVariableNames: 'implementors senders implementorsList input timer selector sendersList referencedClasses referencedClassesList'
	category: 'IDE'!

!ReferencesBrowser methodsFor: 'accessing'!

implementors
	^implementors ifNil: [implementors := Array new]
!

label
	^'[ReferencesBrowser]'
!

selector
	^selector
!

senders
	^senders ifNil: [senders := Array new]
!

classesAndMetaclasses
	^Smalltalk current classes, (Smalltalk current classes collect: [:each | each class])
!

referencedClasses
	^referencedClasses ifNil: [referencedClasses := Array new]
! !

!ReferencesBrowser methodsFor: 'actions'!

openBrowserOn: aMethod
       | browser |
       browser := Browser openOn: (aMethod class isMetaclass 
		ifTrue: [aMethod methodClass instanceClass] ifFalse: [aMethod methodClass]).
       aMethod methodClass isMetaclass ifTrue: [browser selectTab: #class].
       browser
               selectProtocol: aMethod category;
               selectMethod: aMethod
!

searchReferencesFor: aString
	selector := aString.
	implementors := Array new.
	senders := Array new.
	referencedClasses := Array new.
	(selector match: '^[A-Z]') 
		ifFalse: [self searchSelectorReferencesFor: selector]
		ifTrue: [self searchReferencedClassesFor: selector]
!

search: aString
	self 
		searchReferencesFor: aString;
		updateImplementorsList;
		updateSendersList;
		updateReferencedClassesList
!

searchReferencedClassesFor: aString
	self classesAndMetaclasses do: [:each |
		each methodDictionary values do: [:value |
			(((value referencedClasses select: [:each | each notNil])collect: [:each | each name]) includes: selector) ifTrue: [
				self referencedClasses add: value]]]
!

searchSelectorReferencesFor: aString
	self classesAndMetaclasses do: [:each | 
		each methodDictionary keysAndValuesDo: [:key :value | 
			key = selector ifTrue: [self implementors add: value]].
		each methodDictionary keysAndValuesDo: [:key :value | 
			(value messageSends includes: selector) ifTrue: [
				self senders add: value]]]
! !

!ReferencesBrowser methodsFor: 'initialization'!

initialize
	super initialize.
	selector := ''
! !

!ReferencesBrowser methodsFor: 'private'!

setInputEvents
	input
		onKeyUp: [timer := [self search: input asJQuery val] valueWithTimeout: 100];
		onKeyDown: [timer ifNotNil: [timer clearTimeout]]
! !

!ReferencesBrowser methodsFor: 'rendering'!

renderBoxOn: html
	self 
		renderInputOn: html;
		renderImplementorsOn: html;
		renderSendersOn: html;
		renderReferencedClassesOn: html
!

renderInputOn: html
	input := html input 
		class: 'implementors';
		yourself.
	input asJQuery val: selector.
	self setInputEvents
!

renderImplementorsOn: html
    	implementorsList := html ul class: 'jt_column implementors'.
	self updateImplementorsList
!

renderSendersOn: html
    	sendersList := html ul class: 'jt_column senders'.
	self updateSendersList
!

renderReferencedClassesOn: html
    	referencedClassesList := html ul class: 'jt_column referenced_classes'.
	self updateReferencedClassesList
! !

!ReferencesBrowser methodsFor: 'testing'!

canBeClosed
	^true
! !

!ReferencesBrowser methodsFor: 'updating'!

updateImplementorsList
    implementorsList contents: [:html |
	html li
		class: 'column_label'; 
		with: 'Implementors (', self implementors size asString, ')';
		style: 'font-weight: bold'.
	self implementors do: [:each || li |
	    li := html li.
	    li
		with: (each methodClass asString, ' >> ', self selector);
		onClick: [self openBrowserOn: each]]]
!

updateSendersList
    	sendersList contents: [:html |
	html li
		class: 'column_label'; 
		with: 'Senders (', self senders size asString, ')';
		style: 'font-weight: bold'.
	self senders do: [:each |
		html li
	    		with: (each methodClass asString, ' >> ', each selector);
			onClick: [self openBrowserOn: each]]]
!

updateReferencedClassesList
    	referencedClassesList contents: [:html |
	html li
		class: 'column_label'; 
		with: 'Class references (', self referencedClasses size asString, ')';
		style: 'font-weight: bold'.
	self referencedClasses do: [:each |
		html li
	    		with: (each methodClass asString, ' >> ', each selector);
			onClick: [self openBrowserOn: each]]]
! !

!ReferencesBrowser class methodsFor: 'instance creation'!

search: aString
	^self new
		searchReferencesFor: aString;
		open
! !

Widget subclass: #SourceArea
	instanceVariableNames: 'textarea'
	category: 'IDE'!

!SourceArea methodsFor: 'accessing'!

val
    ^textarea asJQuery val
!

val: aString
    textarea asJQuery val: aString
!

currentLine
    | lines startLine endLine|
    lines := textarea asJQuery val tokenize: String lf.
    startLine := endLine := 0.
    lines do: [:each |
	endLine := startLine + each size.
	startLine := endLine + 1.
	endLine >= self selectionStart ifTrue: [
	    self selectionEnd: endLine.
	    ^each]]
!

selection
    <return document.selection>
!

selectionEnd
   ^textarea element selectionEnd
!

selectionStart
   ^textarea element selectionStart
!

selectionStart: anInteger
   textarea element selectionStart: anInteger
!

selectionEnd: anInteger
   textarea element selectionEnd: anInteger
!

textarea
	^textarea
! !

!SourceArea methodsFor: 'actions'!

clear
    textarea asJQuery val: ''
!

doIt
    | selection |
    textarea asJQuery focus.
    self selectionStart = self selectionEnd
	ifTrue: [selection := self currentLine]
	ifFalse: [
	    selection := textarea asJQuery val copyFrom: self selectionStart + 1 to: self selectionEnd + 1].
    ^self eval: selection
!

eval: aString
    | compiler node |
    compiler := Compiler new.
    node := compiler parseExpression: aString.
    node isParseFailure ifTrue: [
	^self alert: node reason, ', position: ', node position].
    ^compiler loadExpression: aString
!

handleKeyDown: anEvent
    <if(anEvent.ctrlKey) {
		if(anEvent.keyCode === 80) { //ctrl+p
			self._printIt();
			anEvent.preventDefault();
			return false;
		}
		if(anEvent.keyCode === 68) { //ctrl+d
			self._doIt();
			anEvent.preventDefault();
			return false;
		}
		if(anEvent.keyCode === 73) { //ctrl+i
			self._inspectIt();
			anEvent.preventDefault();
			return false;
		}
	}>
!

inspectIt
    self doIt inspect
!

print: aString
    | start |
    start := self selectionEnd.
    textarea asJQuery val: (
	(textarea asJQuery val copyFrom: 1 to: start),
	' ', aString, ' ',
	(textarea asJQuery val copyFrom: start + 1 to: textarea asJQuery val size)).
    self selectionStart: start.
    self selectionEnd: start + aString size + 2
!

printIt
    self print: self doIt printString
! !

!SourceArea methodsFor: 'rendering'!

renderOn: html
    textarea := html textarea.
    textarea asJQuery call: 'tabby'.
    textarea onKeyDown: [:e | self handleKeyDown: e].
    textarea 
	class: 'jt_workspace';
	at: 'spellcheck' put: 'false'
! !

Widget subclass: #ClassesList
	instanceVariableNames: 'browser ul nodes'
	category: 'IDE'!

!ClassesList methodsFor: 'accessing'!

category
	^self browser selectedCategory
!

nodes
	nodes ifNil: [nodes := self getNodes].
	^nodes
!

browser
	^browser
!

browser: aBrowser
	browser := aBrowser
!

getNodes
	| classes children others |
	classes := self browser classes.
	children := #().
	others := #().
	classes do: [:each |
		(classes includes: each superclass)
			ifFalse: [children add: each]
			ifTrue: [others add: each]].
	^children collect: [:each |
		ClassesListNode on: each browser: self browser classes: others level: 0]
!

resetNodes
	nodes := nil
! !

!ClassesList methodsFor: 'rendering'!

renderOn: html
	ul := html ul
		class: 'jt_column browser classes';
		yourself.
	self updateNodes
!

updateNodes
	ul contents: [:html |
		self nodes do: [:each |
			each renderOn: html]]
! !

!ClassesList class methodsFor: 'instance creation'!

on: aBrowser
	^self new 
		browser: aBrowser; 
		yourself
! !

Widget subclass: #ClassesListNode
	instanceVariableNames: 'browser theClass level nodes'
	category: 'IDE'!

!ClassesListNode methodsFor: 'accessing'!

nodes
	^nodes
!

theClass
	^theClass
!

theClass: aClass
	theClass := aClass
!

browser
	^browser
!

browser: aBrowser
	browser := aBrowser
!

level
	^level
!

level: anInteger
	level := anInteger
!

label
	| str |
	str := String new writeStream.
	self level timesRepeat: [
		str nextPutAll: '&nbsp;&nbsp;&nbsp;&nbsp;'].
	str nextPutAll: self theClass name.
	^str contents
!

getNodesFrom: aCollection
	| classes children others |
	classes := aCollection.
	children := #().
	others := #().
	classes do: [:each |
		(each superclass = self theClass)
			ifTrue: [children add: each]
			ifFalse: [others add: each]].
	nodes:= children collect: [:each |
		ClassesListNode on: each browser: self browser classes: others level: self level + 1]
! !

!ClassesListNode methodsFor: 'rendering'!

renderOn: html
	| li |
	li := html li 
		onClick: [self browser selectClass: self theClass].
	li asJQuery contents: self label.
	self browser selectedClass = self theClass ifTrue:  [
		li class: 'selected'].
	self nodes do: [:each |
		each renderOn: html]
! !

!ClassesListNode class methodsFor: 'instance creation'!

on: aClass browser: aBrowser classes: aCollection level: anInteger
	^self new
		theClass: aClass;
		browser: aBrowser;
		level: anInteger;
		getNodesFrom: aCollection;
		yourself
! !

!Object methodsFor: '*IDE'!

inspect
	Inspector new 
		inspect: self;
		open
!

inspectOn: anInspector
	| variables |
	variables := Dictionary new.
	variables at: '#self' put: self.
	self class allInstanceVariableNames do: [:each |
		variables at: each put: (self instVarAt: each)].
	anInspector 
		setLabel: self printString;
		setVariables: variables
! !

!Date methodsFor: '*IDE'!

inspectOn: anInspector
	| variables |
	variables := Dictionary new.
	variables at: '#self' put: self.
	variables at: '#year' put: self year.
	variables at: '#month' put: self month.
	variables at: '#day' put: self day.
	variables at: '#hours' put: self hours.
	variables at: '#minutes' put: self minutes.
	variables at: '#seconds' put: self seconds.
	variables at: '#milliseconds' put: self milliseconds.
	anInspector 
		setLabel: self printString;
		setVariables: variables
! !

!Collection methodsFor: '*IDE'!

inspectOn: anInspector
	| variables |
	variables := Dictionary new.
	variables at: '#self' put: self.
	self withIndexDo: [:each :i |
		variables at: i put: each].
	anInspector 
		setLabel: self printString;
		setVariables: variables
! !

!String methodsFor: '*IDE'!

inspectOn: anInspector
	| label |
	super inspectOn: anInspector.
	self printString size > 30 
		ifTrue: [label := (self printString copyFrom: 1 to: 30), '...''']
		ifFalse: [label := self printString]. 
	anInspector setLabel: label
! !

!MethodContext methodsFor: '*IDE'!

inspectOn: anInspector
	| variables |
	variables := Dictionary new.
	variables at: '#self' put: self.
	variables at: '#home' put: self home.
	variables at: '#receiver' put: self receiver.
	variables at: '#selector' put: self selector.
	self class instanceVariableNames do: [:each |
		variables at: each put: (self instVarAt: each)].
	anInspector 
		setLabel: self printString;
		setVariables: variables
! !

!Dictionary methodsFor: '*IDE'!

inspectOn: anInspector
	| variables |
	variables := Dictionary new.
	variables at: '#self' put: self.
	variables at: '#keys' put: self keys.
	self keysAndValuesDo: [:key :value |
		variables at: key put: value].
	anInspector 
		setLabel: self printString;
		setVariables: variables
! !

