Smalltalk current createPackage: 'IDE' properties: #{}!

Widget subclass: #TabManager
	instanceVariableNames: 'selectedTab tabs opened ul input'
	category: 'IDE'!

!TabManager methodsFor: 'accessing'!

tabs
    ^tabs ifNil: [tabs := Array new]
!

labelFor: aWidget
	| label maxSize |
	maxSize := 15.
	label := aWidget label copyFrom: 0 to: (aWidget label size min: maxSize).
	aWidget label size > maxSize ifTrue: [
		label := label, '...'].
	^label
! !

!TabManager methodsFor: 'actions'!

updateBodyMargin
    self setBodyMargin: '#jtalk' asJQuery height
!

updatePosition
    <jQuery('#jtalk').css('top', '').css('bottom', '0px')>
!

removeBodyMargin
    self setBodyMargin: 0
!

setBodyMargin: anInteger
    '.jtalkBody' asJQuery css: 'margin-bottom' put: anInteger asString, 'px'
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
!

search: aString
	| searchedClass |
	searchedClass := Smalltalk current at: aString.
		searchedClass isClass
			ifTrue: [Browser openOn: searchedClass]
			ifFalse: [ReferencesBrowser search: aString]
! !

!TabManager methodsFor: 'adding/Removing'!

addTab: aWidget
    self tabs add: aWidget.
    aWidget appendToJQuery: '#jtalk' asJQuery.
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
    [:html | html div id: 'jtalk'] appendToJQuery: 'body' asJQuery.
    'body' asJQuery 
	addClass: 'jtalkBody'.
    self appendToJQuery: '#jtalk' asJQuery.
    self 
	addTab: IDETranscript current;
	addTab: Workspace new;
	addTab: TestRunner new.
    self selectTab: self tabs last.
    self 
	onResize: [self updateBodyMargin; updatePosition];
	onWindowResize: [self updatePosition]
! !

!TabManager methodsFor: 'rendering'!

renderOn: html
	html div id: 'logo'.
	self renderToolbarOn: html.
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
		html span class: 'ltab'.
		html span
			class: 'mtab';
			with: [
				aWidget canBeClosed ifTrue: [
					html span 
						class: 'close';
						with: 'x';
					onClick: [self closeTab: aWidget]].
			html span with: (self labelFor: aWidget)].
		html span class: 'rtab'];
	onClick: [self selectTab: aWidget]
!

renderTabs
	ul contents: [:html |
	    self tabs do: [:each |
		self renderTabFor: each on: html].
	    html li
		class: 'newtab';
		with: [
			html span class: 'ltab'.
			html span class: 'mtab'; with: ' + '.
			html span class: 'rtab'];
		onClick: [self newBrowserTab]]
!

renderToolbarOn: html
	html div 
		id: 'jt_toolbar';
		with: [
			input := html input 
				class: 'implementors';
				yourself.
			input onKeyPress: [:event |
				event keyCode = 13 ifTrue: [
				self search: input asJQuery val]].
			html div id: 'jt_close'; onClick: [self close]]
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
!

close
    TabManager current closeTab: self
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
    ^'Workspace'
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
!

fileIn
    sourceArea fileIn
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
	with: 'FileIn';
	title: 'ctrl+f';
	onClick: [self fileIn].
    html button
	with: 'Clear workspace';
	onClick: [self clearWorkspace]
! !

TabWidget subclass: #Browser
	instanceVariableNames: 'selectedPackage selectedClass selectedProtocol selectedMethod packagesList classesList protocolsList methodsList sourceArea tabsList selectedTab saveButton classButtons methodButtons unsavedChanges'
	category: 'IDE'!

!Browser methodsFor: 'accessing'!

label
    ^selectedClass 
	ifNil: ['Browser (nil)']
	ifNotNil: ['Browser: ', selectedClass name]
!

packages
    | packages |
    packages := Array new.
    Smalltalk current classes do: [:each |
	(packages includes: each category) ifFalse: [
	    packages add: each category]].
    ^packages sort
!

classes
    ^(Smalltalk current classes 
	select: [:each | each category = selectedPackage])
	sort: [:a :b | a name < b name]
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
		each category = selectedProtocol]]) sort: [:a :b | a selector < b selector]
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
	selectedClass ifNil: [^self classDeclarationTemplate].
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
	    nextPutAll: 'package: ''';
	    nextPutAll: selectedClass category;
	    nextPutAll: ''''.
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
!

classDeclarationTemplate
	^'Object subclass: #NameOfSubclass
	instanceVariableNames: ''''
	package: ''', self selectedPackage, ''''
!

selectedPackage
	^selectedPackage
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
    selectedTab = #comment 
	ifTrue: [
			selectedClass ifNotNil: [
				self compileClassComment]]
	ifFalse: [
			(selectedProtocol notNil or: [selectedMethod notNil])
				ifFalse: [self compileDefinition]
				ifTrue: [self compileMethodDefinition]]
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
    compiler source: source.
    node := compiler parse: source.
    node isParseFailure ifTrue: [
	^window alert: 'PARSE ERROR: ', node reason, ', position: ', node position asString].
    compiler currentClass: aClass.
    method := compiler eval: (compiler compileNode: node).
    method category: selectedProtocol.
    compiler unknownVariables do: [:each |
         "Do not try to redeclare javascript's objects"
         (window at: each) ifNil: [
	 	(window confirm: 'Declare ''', each, ''' as instance variable?') ifTrue: [
			self addInstanceVariableNamed: each toClass: aClass.
			^self compileMethodDefinitionFor: aClass]]].
    aClass addCompiledMethod: method.
    compiler setupClass: aClass.
    self updateMethodsList.
    self selectMethod: method
!

compileDefinition
    | newClass |
    newClass := Compiler new loadExpression: sourceArea val.
    self 
	resetClassesList;
	updateCategoriesList;
	updateClassesList.
    self selectClass: newClass
!

cancelChanges
    ^unsavedChanges 
	ifTrue: [window confirm: 'Cancel changes?']
	ifFalse: [true]
!

removeClass
    (window confirm: 'Do you really want to remove ', selectedClass name, '?')
	ifTrue: [
	    Smalltalk current removeClass: selectedClass.
	    self resetClassesList.
	    self selectClass: nil]
!

removeMethod
    self cancelChanges ifTrue: [
	(window confirm: 'Do you really want to remove #', selectedMethod selector, '?')
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
    newProtocol := window prompt: 'New method protocol'.
    (newProtocol notNil and: [newProtocol notEmpty]) ifTrue: [
	selectedMethod category: newProtocol.
	self setMethodProtocol: newProtocol]
!

selectCategory: aCategory
    self cancelChanges ifTrue: [
	selectedPackage := aCategory.
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
    newName := window prompt: 'Rename class ', selectedClass name.
    (newName notNil and: [newName notEmpty]) ifTrue: [
	selectedClass rename: newName.
	self 
		updateClassesList;
		updateSourceAndButtons]
!

addInstanceVariableNamed: aString toClass: aClass
	ClassBuilder new
		addSubclassOf: aClass superclass 
		named: aClass name 
		instanceVariableNames: (aClass instanceVariableNames copy add: aString; yourself)
		package: aClass package name
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
!

handleSourceAreaKeyDown: anEvent
	 <if(anEvent.ctrlKey) {
		if(anEvent.keyCode === 83) { //ctrl+s
			self._compile();
			anEvent.preventDefault();
			return false;
		}
	}
	>
!

commitPackage
	selectedPackage ifNotNil: [
		jQuery 
			ajax: self class commitPathJs, '/', selectedPackage, '.js'
			options: #{
				'type' -> 'PUT'.
				'data' -> (Exporter new exportPackage: selectedPackage).
				'error' -> [window alert: 'Commit failed!!']
			}.
		jQuery 
			ajax: self class commitPathJs, '/', selectedPackage, '.deploy.js'
			options: #{
				'type' -> 'PUT'.
				'data' -> (StrippedExporter new exportPackage: selectedPackage).
				'error' -> [window alert: 'Commit failed!!']
			}.
		jQuery 
			ajax: self class commitPathSt, '/', selectedPackage, '.st'
			options: #{
				'type' -> 'PUT'.
				'data' -> (ChunkExporter new exportPackage: selectedPackage).
				'error' -> [window alert: 'Commit failed!!']
			}]
!

renamePackage

  | newName |
  newName := window prompt: 'Rename package ', selectedPackage.
  newName ifNotNil: [
    newName notEmpty ifTrue: [
	Smalltalk current renamePackage: selectedPackage to: newName.
	self updateCategoriesList]]
!

removePackage

  (window confirm: 'Do you really want to remove the whole package ', selectedPackage, ' with all its classes?')
	ifTrue: [
	    Smalltalk current removePackage: selectedPackage.
	    self updateCategoriesList]
!

commitPackageToLocalStorage
	| key sourceCode |
	selectedPackage ifNotNil: [
          	key := 'smalltalk.packages.' , selectedPackage.
		sourceCode := (Exporter new exportPackage: selectedPackage).
		<localStorage[key] = sourceCode>]
!

addNewClass
	| className |
	className := window prompt: 'New class'.
	(className notNil and: [className notEmpty]) ifTrue: [
		Object subclass: className instanceVariableNames: '' package: self selectedPackage.
          	 self 
			resetClassesList;
			updateClassesList.
		self selectClass: (Smalltalk current at: className)]
! !

!Browser methodsFor: 'initialization'!

initialize
    super initialize.
    selectedTab := #instance.
    selectedPackage := self packages first.
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
			packagesList := html ul class: 'jt_column browser packages'.
          		html div class: 'jt_packagesButtons'; with: [
				html button 
					title: 'Commit classes in this package to disk';
					onClick: [self commitPackage];
					with: 'Commit'.
        			html button 
					title: 'Commit classes in this package to local storage';
					onClick: [self commitPackageToLocalStorage];
					with: 'Local'.
        			html button
					title: 'Rename package';
					onClick: [self renamePackage];
					with: 'Rename'.
        			html button
					title: 'Remove this package from the system';
					onClick: [self removePackage];
					with: 'Remove'].
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
    tabsList := html ul class: 'jt_tabs jt_browser'.
    self updateTabsList.
!

renderBottomPanelOn: html
    html div
	class: 'jt_sourceCode';
	with: [
	    sourceArea := SourceArea new.
	    sourceArea renderOn: html.
            sourceArea onKeyDown: [:e |
                                   self handleSourceAreaKeyDown: e].
	    sourceArea onKeyUp: [self updateStatus]]
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
			onClick: [sourceArea inspectIt]]. 
    self updateSourceAndButtons
! !

!Browser methodsFor: 'testing'!

canBeClosed
	^true
! !

!Browser methodsFor: 'updating'!

updateCategoriesList
    packagesList contents: [:html |
	self packages do: [:each || li label |
	    each isEmpty 
		ifTrue: [label := 'Unclassified']
		ifFalse: [label := each].
	    li := html li.
	    selectedPackage = each ifTrue: [
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
	    with: [
		html span class: 'ltab'.
		html span class: 'mtab'; with: 'Instance'.
		html span class: 'rtab'];
	    onClick: [self selectTab: #instance].
	li := html li.
	selectedTab = #class ifTrue: [li class: 'selected'].
	li
	    with: [
		html span class: 'ltab'.
		html span class: 'mtab'; with: 'Class'.
		html span class: 'rtab'];
	    onClick: [self selectTab: #class].
	li := html li.
	selectedTab = #comment ifTrue: [li class: 'selected'].
	li
	    with: [
		html span class: 'ltab'.
		html span class: 'mtab'; with: 'Comment'.
		html span class: 'rtab'];
	    onClick: [self selectTab: #comment]]
!

updateSourceAndButtons
	self disableSaveButton.
	classButtons contents: [:html |
		html button
			title: 'Create a new class';
			onClick: [self addNewClass];
			with: 'New class'.
		html button
			with: 'Rename class';
			onClick: [self renameClass].
		html button
			with: 'Remove class';
			onClick: [self removeClass].
		html button
			with: 'References';
			onClick: [self searchClassReferences]].
	methodButtons contents: [:html | | protocolSelect referencesSelect |
		html button
			with: 'Remove method';
			onClick: [self removeMethod].
		protocolSelect := html select.
                protocolSelect
			onChange: [ self setMethodProtocol: protocolSelect asJQuery val];
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
			referencesSelect := html select.
                        referencesSelect
				onChange: [self searchReferencesOf: referencesSelect asJQuery val];
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
	sourceArea val = self source
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
	instanceVariableNames: 'label variables object selectedVariable variablesList valueTextarea diveButton sourceArea'
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
!

sourceArea
	^sourceArea
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
			html div class: 'jt_tabs inspector'; with: [
				html button
					class: 'jt_button inspector refresh';
					with: 'Refresh';
					onClick: [self refresh].
				diveButton := html button 
					class: 'jt_button inspector dive';
					with: 'Dive'; 
					onClick: [self dive]].
			html div class: 'jt_clear'].
	self
		updateVariablesList;
		updateValueTextarea.
!

renderBottomPanelOn: html
    html div
	class: 'jt_sourceCode';
	with: [
	    sourceArea := SourceArea new
		receiver: object;
		onDoIt: [self refresh];
		yourself.
            sourceArea renderOn: html]
!

renderButtonsOn: html
	html button 
		with: 'DoIt';
		onClick: [self sourceArea doIt].
	html button 
		with: 'PrintIt';
		onClick: [self sourceArea printIt].
	html button 
		with: 'InspectIt';
		onClick: [self sourceArea inspectIt].
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
	^'[References]'
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
       browser := Browser openOn: (aMethod methodClass isMetaclass 
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
			(value referencedClasses includes: selector) ifTrue: [
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
	instanceVariableNames: 'editor div receiver onDoIt'
	category: 'IDE'!

!SourceArea methodsFor: 'accessing'!

val
    ^editor getValue
!

val: aString
    editor setValue: aString
!

currentLine
    ^editor getLine: (editor getCursor line)
!

selection
	^editor getSelection
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

setEditorOn: aTextarea
	<self['@editor'] = CodeMirror.fromTextArea(aTextarea, {
		theme: 'jtalk',
                lineNumbers: true,
                enterMode: 'classic',
                matchBrackets: true,
                electricChars: false
	})>
!

editor
	^editor
!

receiver
	^receiver ifNil: [DoIt new]
!

receiver: anObject
	receiver := anObject
!

onDoIt: aBlock
	onDoIt := aBlock
!

onDoIt
	^onDoIt
!

currentLineOrSelection
    ^editor somethingSelected
	ifFalse: [self currentLine]
	ifTrue: [self selection]
! !

!SourceArea methodsFor: 'actions'!

clear
      self val: ''
!

doIt
    | result |
    result := self eval: self currentLineOrSelection.
    self onDoIt ifNotNil: [self onDoIt value].
    ^result
!

eval: aString
	| compiler  |
	compiler := Compiler new.
	[compiler parseExpression: aString] on: Error do: [:ex |
		^window alert: ex messageText].
	^(compiler load: 'doIt ^[', aString, '] value' forClass: DoIt) fn applyTo: self receiver arguments: #()
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
	| start stop |
	start := Dictionary new.
	stop := Dictionary new.
	start at: 'line' put: (editor getCursor: false) line.
	start at: 'ch' put: (editor getCursor: false) ch.
	stop at: 'line' put: (start at: 'line').
	stop at: 'ch' put: ((start at: 'ch') + aString size + 2).
	editor replaceSelection: (editor getSelection, ' ', aString, ' ').
	editor setCursor: (editor getCursor: true).
	editor setSelection: stop end: start
!

printIt
    self print: self doIt printString
!

fileIn
    Importer new import: self currentLineOrSelection readStream
! !

!SourceArea methodsFor: 'events'!

onKeyUp: aBlock
	div onKeyUp: aBlock
!

onKeyDown: aBlock
	div onKeyDown: aBlock
! !

!SourceArea methodsFor: 'rendering'!

renderOn: html
    | textarea |
    div := html div class: 'source'.
    div with: [textarea := html textarea].
    self setEditorOn: textarea element.
    div onKeyDown: [:e | self handleKeyDown: e]
! !

Widget subclass: #ClassesList
	instanceVariableNames: 'browser ul nodes'
	category: 'IDE'!

!ClassesList methodsFor: 'accessing'!

category
	^self browser selectedPackage
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

!ClassesListNode methodsFor: ''!

renderOn: html
	| li cssClass |
	cssClass := ''.
	li := html li 
		onClick: [self browser selectClass: self theClass]. 
	li asJQuery html: self label.

	self browser selectedClass = self theClass ifTrue:  [
		cssClass := cssClass, ' selected'].

	self theClass comment isEmpty ifFalse: [
		cssClass := cssClass, ' commented'].

	li class: cssClass.

	self nodes do: [:each |
		each renderOn: html]
! !

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
	| children others |
	children := #().
	others := #().
	aCollection do: [:each |
		(each superclass = self theClass)
			ifTrue: [children add: each]
			ifFalse: [others add: each]].
	nodes:= children collect: [:each |
		ClassesListNode on: each browser: self browser classes: others level: self level + 1]
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

TabWidget subclass: #Debugger
	instanceVariableNames: 'error selectedContext sourceArea ul ul2 inspector saveButton unsavedChanges selectedVariable selectedVariableName inspectButton'
	category: 'IDE'!

!Debugger methodsFor: 'accessing'!

error
	^error
!

error: anError
	error := anError
!

label
	^'[Debugger]'
!

source
	^self method 
		ifNil: ['Method doesn''t exist!!']
		ifNotNil: [self method source]
!

method
	^selectedContext receiver class methodAt: selectedContext selector
!

arguments
	^self method 
		ifNil: [selectedContext temps collect: [:each | nil]]
		ifNotNil: [self method arguments]
!

receiver
	^selectedContext receiver
! !

!Debugger methodsFor: 'actions'!

selectContext: aContext
	selectedContext := aContext.
	selectedVariable := nil.
	selectedVariableName := nil.
	self 
		updateContextsList;
		updateSourceArea;
		updateInspector;
		updateVariablesList;
		updateStatus
!

proceed
	self close.
	selectedContext receiver perform: selectedContext selector withArguments: selectedContext temps
!

save
	| protocol |
	protocol := (selectedContext receiver class methodDictionary at: selectedContext selector) category.
	selectedContext receiver class compile: sourceArea val category: protocol.
	self updateStatus
!

selectVariable: anObject named: aString
	selectedVariable := anObject.
	selectedVariableName := aString.
	inspector contents: [:html | html with: anObject printString].
	self updateVariablesList
!

inspectSelectedVariable
	selectedVariable inspect
! !

!Debugger methodsFor: 'initialization'!

initialize
	super initialize.
	unsavedChanges = false
! !

!Debugger methodsFor: 'rendering'!

renderTopPanelOn: html
	selectedContext := self error context.
	html div 
		class: 'top'; 
		with: [
			html div 
				class: 'label';
				with: self error messageText.
			ul := html ul 
				class: 'jt_column debugger contexts';
				with: [self renderContext: self error context on: html]]
!

renderContext: aContext on: html
	| li |
	li := html li.
	selectedContext = aContext ifTrue: [
		li class: 'selected'].
	li 
		with: aContext asString;
		onClick: [self selectContext: aContext].
	aContext home ifNotNil: [self renderContext: aContext home on: html]
!

renderBottomPanelOn: html
	html div
		class: 'jt_sourceCode debugger';
		with: [
			sourceArea := SourceArea new.
			sourceArea renderOn: html].
	ul2 := html ul class: 'jt_column debugger variables'.
	inspector := html div class: 'jt_column debugger inspector'.
	sourceArea
		onKeyUp: [self updateStatus]
!

renderButtonsOn: html
	saveButton := html button
		with: 'Save';
		onClick: [self save].
	html button
		with: 'DoIt';
		onClick: [sourceArea doIt].
	html button
		with: 'PrintIt';
		onClick: [sourceArea printIt].
	html button
		with: 'InspectIt';
		onClick: [sourceArea inspectIt].
	html button 
		with: 'Proceed';
		onClick: [self proceed].
	html button
		with: 'Abandon';
		onClick: [self close].
	inspectButton := html button
		class: 'jt_button debugger inspect';
		with: 'Inspect';
		onClick: [self inspectSelectedVariable].
	 self 
		updateSourceArea;
		updateStatus;
		updateVariablesList;
		updateInspector
!

renderBoxOn: html
    self 
	renderTopPanelOn: html;
	renderBottomPanelOn: html
! !

!Debugger methodsFor: 'testing'!

canBeClosed
    ^true
! !

!Debugger methodsFor: 'updating'!

updateContextsList
	ul contents: [:html |
		self renderContext: self error context on: html]
!

updateSourceArea
	 sourceArea val: self source
!

updateStatus
	sourceArea val = self source
		ifTrue: [
			saveButton ifNotNil: [
				saveButton at: 'disabled' put: true].
			unsavedChanges := false]
		ifFalse: [
			saveButton ifNotNil: [
				saveButton removeAt: 'disabled'].
			unsavedChanges := true]
!

updateInspector
	inspector contents: [:html |]
!

updateVariablesList
	ul2 contents: [:html | | li |
		li := html li 
			with: 'self';
			onClick: [self selectVariable: self receiver named: 'self'].
                selectedVariableName = 'self' ifTrue: [
			li class: 'selected'].
                self arguments withIndexDo: [:each :index | | param |
                        param := selectedContext temps at: index.
                        li := html li 
				with: each;
				onClick: [self selectVariable: param named: each].
                         selectedVariableName = each ifTrue: [
				li class: 'selected']].
                self receiver class allInstanceVariableNames do: [:each | | ivar |
                        ivar := self receiver instVarAt: each.
                        li := html li 
				with: each;
				onClick: [self selectVariable: ivar named: each].
                         selectedVariableName = each ifTrue: [
				li class: 'selected']]].
	selectedVariable ifNil: [inspectButton at: 'disabled' put: true] ifNotNil: [inspectButton removeAt: 'disabled']
! !

ErrorHandler subclass: #DebugErrorHandler
	instanceVariableNames: ''
	category: 'IDE'!

!DebugErrorHandler methodsFor: 'error handling'!

handleError: anError
	[Debugger new
		error: anError;
		open] on: Error do: [:error |
			ErrorHandler new handleError: error]
! !

!DebugErrorHandler class methodsFor: 'initialization'!

initialize
	self register
! !

TabWidget subclass: #ProgressBar
	instanceVariableNames: 'percent progressDiv div'
	category: 'IDE'!

!ProgressBar methodsFor: 'accessing'!

percent
	^percent ifNil: [0]
!

percent: aNumber
	percent := aNumber
! !

!ProgressBar methodsFor: 'rendering'!

renderOn: html 
	div := html div 
		class: 'progress_bar';
		yourself.
	self renderProgressBar
!

renderProgressBar
	div contents: [:html |
		html div 
			class: 'progress';
			style: 'width:', self percent asString, '%']
! !

!ProgressBar methodsFor: 'updating'!

updatePercent: aNumber
	self percent: aNumber.
	self renderProgressBar
! !

TabWidget subclass: #TestRunner
	instanceVariableNames: 'selectedCategories packagesList selectedClasses classesList selectedMethods progressBar methodsList result statusDiv'
	category: 'IDE'!

!TestRunner methodsFor: 'accessing'!

label
    ^'SUnit'
!

packages
    | packages |
    packages := Array new.
    self allClasses do: [:each |
	(packages includes: each category) ifFalse: [
	    packages add: each category]].
    ^packages sort
!

classes
    ^(self allClasses 
	select: [:each | self selectedCategories includes: each category])
	sort: [:a :b | a name > b name]
!

selectedCategories
	^selectedCategories ifNil: [selectedCategories := Array new]
!

allClasses
	^TestCase allSubclasses
!

selectedClasses
	^selectedClasses  ifNil: [selectedClasses := Array new]
!

progressBar
	^progressBar ifNil: [progressBar := ProgressBar new]
!

statusInfo
	^self printTotal, self printPasses, self printErrors, self printFailures
!

result
	^result
!

testCases
	| testCases |
	testCases := #().
	self selectedClasses do: [:each | testCases addAll: each buildSuite].
	^testCases
! !

!TestRunner methodsFor: 'actions'!

selectAllCategories
	self packages do: [:each | 
		(selectedCategories includes: each) ifFalse: [
			self selectedCategories add: each]].
	self 
	    updateCategoriesList;
	    updateClassesList
!

toggleCategory: aCategory
	(self isSelectedCategory: aCategory) 
		ifFalse: [selectedCategories add: aCategory]
		ifTrue: [selectedCategories remove: aCategory].
	self 
	    updateCategoriesList;
	    updateClassesList
!

toggleClass: aClass
	(self isSelectedClass: aClass) 
		ifFalse: [selectedClasses add: aClass]
		ifTrue: [selectedClasses remove: aClass].
	self 
	    updateClassesList
!

selectAllClasses
	self classes do: [:each | 
		(selectedClasses includes: each) ifFalse: [
			self selectedClasses add: each]].
	self 
	    updateCategoriesList;
	    updateClassesList
!

run: aCollection
	result := TestResult new.
	self 
		updateStatusDiv;
		updateMethodsList.
	self progressBar updatePercent: 0.
	result total: aCollection size.
	aCollection do: [:each | 
		[each runCaseFor: result.
		self progressBar updatePercent: result runs / result total * 100.
		self updateStatusDiv.
		self updateMethodsList] valueWithTimeout: 100].
!

performFailure: aTestCase
	aTestCase perform: aTestCase selector
! !

!TestRunner methodsFor: 'initialization'!

initialize
	super initialize.
	result := TestResult new
! !

!TestRunner methodsFor: 'printing'!

printErrors
	^self result errors size asString , ' errors, '
!

printFailures
	^self result failures size asString, ' failures'
!

printPasses
	^(self result total - self result errors size - self result failures size) asString , ' passes, '
!

printTotal
	^self result total asString, ' runs, '
! !

!TestRunner methodsFor: 'rendering'!

renderBoxOn: html
    self 
	renderCategoriesOn: html;
	renderClassesOn: html;
	renderResultsOn: html
!

renderButtonsOn: html
    html button
	with: 'Run selected';
	onClick: [self run: self testCases]
!

renderCategoriesOn: html
	packagesList := html ul class: 'jt_column sunit packages'.
	self updateCategoriesList
!

renderClassesOn: html
	classesList := html ul class: 'jt_column sunit classes'.
	self updateClassesList
!

renderResultsOn: html
	statusDiv := html div.
	html with: self progressBar.
	methodsList := html ul class: 'jt_column sunit results'.
	self updateMethodsList.
	self updateStatusDiv
!

renderFailuresOn: html
	self result failures do: [:each |
		html li 
			class: 'failures';
			with: each class name, ' >> ', each selector;
                        onClick: [self performFailure: each]]
!

renderErrorsOn: html
	self result errors do: [:each |
		html li 
			class: 'errors';
			with: each class name, ' >> ', each selector;
                        onClick: [self performFailure: each]]
! !

!TestRunner methodsFor: 'testing'!

isSelectedClass: aClass
	^(self selectedClasses includes: aClass)
!

isSelectedCategory: aCategory
	^(self selectedCategories includes: aCategory)
! !

!TestRunner methodsFor: 'updating'!

updateCategoriesList
    packagesList contents: [:html |
	    html li 
		class: 'all';
		with: 'All';
		onClick: [self selectAllCategories].
	self packages do: [:each || li |
	    li := html li.
	    (self selectedCategories includes: each) ifTrue: [
		li class: 'selected'].
	    li
		with: each;
		onClick: [self toggleCategory: each]]]
!

updateClassesList
    classesList contents: [:html |
	(self selectedCategories isEmpty) ifFalse: [
		html li
			class: 'all';
			with: 'All';
			onClick: [self selectAllClasses]].
	self classes do: [:each || li |
		li := html li.
		(self selectedClasses includes: each) ifTrue: [
			li class: 'selected'].
		li
			with: each name;
			onClick: [self toggleClass: each]]]
!

updateMethodsList
	methodsList contents: [:html |
		self renderErrorsOn: html.
                self renderFailuresOn: html]
!

updateStatusDiv
	statusDiv class: 'sunit status ', result status.
	statusDiv contents: [:html |
		html span with: self statusInfo]
! !

TabWidget subclass: #IDETranscript
	instanceVariableNames: 'textarea'
	category: 'IDE'!

!IDETranscript methodsFor: 'accessing'!

label
    ^'Transcript'
! !

!IDETranscript methodsFor: 'actions'!

clear
    textarea asJQuery val: ''
!

cr
    textarea asJQuery val: textarea asJQuery val, String cr.
!

show: anObject
    textarea asJQuery val: textarea asJQuery val, anObject asString.
!

open
    TabManager current 
	open;
	selectTab: self
! !

!IDETranscript methodsFor: 'rendering'!

renderBoxOn: html
    textarea := html textarea.
    textarea 
	class: 'jt_transcript';
	at: 'spellcheck' put: 'false'
!

renderButtonsOn: html
    html button
	with: 'Clear transcript';
	onClick: [self clear]
! !

IDETranscript class instanceVariableNames: 'current'!

!IDETranscript class methodsFor: 'initialization'!

initialize
	Transcript register: self current
! !

!IDETranscript class methodsFor: 'instance creation'!

new
    self shouldNotImplement
!

open
    TabManager current 
	open;
	selectTab: self current
!

current
	^current ifNil: [current := super new]
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
	variables at: '#temps' put: self temps.
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

