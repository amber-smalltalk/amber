Smalltalk current createPackage: 'IDE'!
Widget subclass: #ClassesList
	instanceVariableNames: 'browser ul nodes'
	package: 'IDE'!

!ClassesList methodsFor: 'accessing'!

browser
	^browser
!

browser: aBrowser
	browser := aBrowser
!

category
	^self browser selectedPackage
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

nodes
	nodes ifNil: [nodes := self getNodes].
	^nodes
!

resetNodes
	nodes := nil
! !

!ClassesList methodsFor: 'rendering'!

renderOn: html
	ul := html ul
		class: 'amber_column browser classes';
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
	package: 'IDE'!

!ClassesListNode methodsFor: ''!

renderOn: html
	| li cssClass |
	cssClass := ''.
	li := html li
		onClick: [self browser selectClass: self theClass].
	li asJQuery html: self label.

	self browser selectedClass = self theClass ifTrue: [
		cssClass := cssClass, ' selected'].

	self theClass comment isEmpty ifFalse: [
		cssClass := cssClass, ' commented'].

	li class: cssClass.

	self nodes do: [:each |
		each renderOn: html]
! !

!ClassesListNode methodsFor: 'accessing'!

browser
	^browser
!

browser: aBrowser
	browser := aBrowser
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
!

label
	| str |
	str := String new writeStream.
	self level timesRepeat: [
		str nextPutAll: '&nbsp;&nbsp;&nbsp;&nbsp;'].
	str nextPutAll: self theClass name.
	^str contents
!

level
	^level
!

level: anInteger
	level := anInteger
!

nodes
	^nodes
!

theClass
	^theClass
!

theClass: aClass
	theClass := aClass
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

ErrorHandler subclass: #DebugErrorHandler
	instanceVariableNames: ''
	package: 'IDE'!

!DebugErrorHandler methodsFor: 'error handling'!

handleError: anError
	[ Debugger new
		error: anError;
		open ] on: Error do: [ :error |
			ErrorHandler new handleError: error ]
! !

!DebugErrorHandler class methodsFor: 'initialization'!

initialize
	self register
! !

Widget subclass: #SourceArea
	instanceVariableNames: 'editor div receiver onDoIt'
	package: 'IDE'!

!SourceArea methodsFor: 'accessing'!

currentLine
	^editor getLine: (editor getCursor line)
!

currentLineOrSelection
	^editor somethingSelected
	ifFalse: [self currentLine]
	ifTrue: [self selection]
!

editor
	^editor
!

onDoIt
	^onDoIt
!

onDoIt: aBlock
	onDoIt := aBlock
!

receiver
	^receiver ifNil: [DoIt new]
!

receiver: anObject
	receiver := anObject
!

selection
	^editor getSelection
!

setEditorOn: aTextarea
	<self['@editor'] = CodeMirror.fromTextArea(aTextarea, {
		theme: 'amber',
				lineNumbers: true,
				enterMode: 'flat',
				indentWithTabs: true,
				indentUnit: 4,
				matchBrackets: true,
				electricChars: false
	})>
!

val
	^editor getValue
!

val: aString
	editor setValue: aString
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
	| compiler |
	compiler := Compiler new.
	[ compiler parseExpression: aString ] on: Error do: [:ex |
		^window alert: ex messageText].
	^compiler evaluateExpression: aString on: self receiver
!

fileIn
	Importer new import: self currentLineOrSelection readStream
!

focus
	self editor focus.
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
	| start stop currentLine |
	currentLine := (editor getCursor: false) line.
	start := HashedCollection new.
	start at: 'line' put: currentLine.
	start at: 'ch' put: (editor getCursor: false) ch.
	(editor getSelection) ifEmpty: [
		"select current line if selection is empty"
		start at: 'ch' put: (editor getLine: currentLine) size.
		editor setSelection: #{'line' -> currentLine. 'ch' -> 0} end: start.
	].
	stop := HashedCollection new.
	stop at: 'line' put: currentLine.
	stop at: 'ch' put: ((start at: 'ch') + aString size + 2).

	editor replaceSelection: (editor getSelection, ' ', aString, ' ').
	editor setCursor: (editor getCursor: true).
	editor setSelection: stop end: start
!

printIt
	self print: self doIt printString.
	self focus.
! !

!SourceArea methodsFor: 'events'!

onKeyDown: aBlock
	div onKeyDown: aBlock
!

onKeyUp: aBlock
	div onKeyUp: aBlock
! !

!SourceArea methodsFor: 'rendering'!

renderOn: html
	| textarea |
	div := html div class: 'source'.
	div with: [textarea := html textarea].
	self setEditorOn: textarea element.
	div onKeyDown: [:e | self handleKeyDown: e]
! !

!SourceArea class methodsFor: 'initialization'!

initialize
	super initialize.
	self setupCodeMirror
!

setupCodeMirror
	< CodeMirror.keyMap["default"].fallthrough = ["basic"] >
! !

Widget subclass: #TabManager
	instanceVariableNames: 'selectedTab tabs opened ul input'
	package: 'IDE'!

!TabManager methodsFor: 'accessing'!

labelFor: aWidget
	| label maxSize |
	maxSize := 15.
	label := aWidget label copyFrom: 0 to: (aWidget label size min: maxSize).
	aWidget label size > maxSize ifTrue: [
		label := label, '...'].
	^label
!

tabs
	^tabs ifNil: [tabs := Array new]
! !

!TabManager methodsFor: 'actions'!

close
	opened ifTrue: [
	'#amber' asJQuery hide.
	ul asJQuery hide.
	selectedTab hide.
	self removeBodyMargin.
	'body' asJQuery removeClass: 'amberBody'.
	opened := false]
!

closeTab: aWidget
	self removeTab: aWidget.
	self selectTab: self tabs last.
	aWidget remove.
	self update
!

newBrowserTab
	Browser open
!

onResize: aBlock
	<jQuery('#amber').resizable({
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
	'body' asJQuery addClass: 'amberBody'.
	'#amber' asJQuery show.
	ul asJQuery show.
	self updateBodyMargin.
	selectedTab show.
	opened := true]
!

removeBodyMargin
	self setBodyMargin: 0
!

search: aString
	| searchedClass |
	searchedClass := Smalltalk current at: aString.
		searchedClass isClass
			ifTrue: [Browser openOn: searchedClass]
			ifFalse: [ReferencesBrowser search: aString]
!

selectTab: aWidget
	self open.
	selectedTab := aWidget.
	self tabs do: [:each |
	each hide].
	aWidget show.
	
	self update
!

setBodyMargin: anInteger
	'.amberBody' asJQuery css: 'margin-bottom' put: anInteger asString, 'px'
!

updateBodyMargin
	self setBodyMargin: '#amber' asJQuery height
!

updatePosition
	<jQuery('#amber').css('top', '').css('bottom', '0px')>
! !

!TabManager methodsFor: 'adding/Removing'!

addTab: aWidget
	self tabs add: aWidget.
	aWidget appendToJQuery: '#amber' asJQuery.
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
	[:html | html div id: 'amber'] appendToJQuery: 'body' asJQuery.
	'body' asJQuery
	addClass: 'amberBody'.
	self appendToJQuery: '#amber' asJQuery.
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
		id: 'amberTabs';
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
		id: 'amber_toolbar';
		with: [
			input := html input
				class: 'implementors';
				yourself.
			input onKeyPress: [:event |
				event keyCode = 13 ifTrue: [
				self search: input asJQuery val]].
			html div id: 'amber_close'; onClick: [self close]]
! !

!TabManager methodsFor: 'updating'!

update
	self renderTabs
! !

TabManager class instanceVariableNames: 'current'!

!TabManager class methodsFor: 'actions'!

toggleAmberIDE
	(window jQuery: '#amber') length = 0
		ifTrue: [ Browser open ]
		ifFalse: [
			((window jQuery: '#amber') is: ':visible')
				ifTrue: [ TabManager current close ]
				ifFalse: [ TabManager current open ] ]
! !

!TabManager class methodsFor: 'instance creation'!

current
	^current ifNil: [current := super new]
!

new
	self shouldNotImplement
! !

Widget subclass: #TabWidget
	instanceVariableNames: 'div'
	package: 'IDE'!

!TabWidget methodsFor: 'accessing'!

label
	self subclassResponsibility
! !

!TabWidget methodsFor: 'actions'!

close
	TabManager current closeTab: self
!

hide
	div asJQuery hide
!

open
	TabManager current addTab: self.
	TabManager current selectTab: self
!

remove
	div asJQuery remove
!

show
	div asJQuery show
! !

!TabWidget methodsFor: 'rendering'!

renderBoxOn: html
!

renderButtonsOn: html
!

renderOn: html
	div := html div
		class: 'amberTool';
		yourself.
	self renderTab
!

renderTab
	div contents: [:html |
		html div
		class: 'amber_box';
		with: [self renderBoxOn: html].
		html div
		class: 'amber_buttons';
		with: [self renderButtonsOn: html]]
!

update
	self renderTab
! !

!TabWidget methodsFor: 'testing'!

canBeClosed
	^false
! !

!TabWidget class methodsFor: 'instance creation'!

open
	^self new open
! !

TabWidget subclass: #Browser
	instanceVariableNames: 'selectedPackage selectedClass selectedProtocol selectedMethod packagesList classesList protocolsList methodsList sourceArea tabsList selectedTab saveButton classButtons methodButtons unsavedChanges'
	package: 'IDE'!

!Browser methodsFor: 'accessing'!

classCommentSource
	^selectedClass comment
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

classDeclarationTemplate
	^'Object subclass: #NameOfSubclass
	instanceVariableNames: ''''
	package: ''', self selectedPackage, ''''
!

classes
	^((Smalltalk current classes
	select: [:each | each category = selectedPackage])
	sort: [:a :b | a name < b name]) asSet
!

declarationSource
	^selectedTab = #instance
	ifTrue: [self classDeclarationSource]
	ifFalse: [self metaclassDeclarationSource]
!

dummyMethodSource
	^'messageSelectorAndArgumentNames
	"comment stating purpose of message"

	| temporary variable names |
	statements'
!

label
	^selectedClass
	ifNil: ['Browser (nil)']
	ifNotNil: ['Browser: ', selectedClass name]
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

methodSource
	^selectedMethod
	ifNil: [self dummyMethodSource]
	ifNotNil: [selectedMethod source]
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

packages
	| packages |
	packages := Array new.
	Smalltalk current classes do: [:each |
	(packages includes: each category) ifFalse: [
		packages add: each category]].
	^packages sort
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

selectedClass
	^selectedClass
!

selectedPackage
	^selectedPackage
!

source
	selectedTab = #comment ifFalse: [
	^(selectedProtocol notNil or: [selectedMethod notNil])
		ifFalse: [self declarationSource]
		ifTrue: [self methodSource]].
	^selectedClass
	ifNil: ['']
	ifNotNil: [self classCommentSource]
! !

!Browser methodsFor: 'actions'!

addInstanceVariableNamed: aString toClass: aClass
	ClassBuilder new
		addSubclassOf: aClass superclass
		named: aClass name
		instanceVariableNames: (aClass instanceVariableNames copy add: aString; yourself)
		package: aClass package name
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
!

addNewProtocol
	| newProtocol |
	newProtocol := window prompt: 'New method protocol'.
	(newProtocol notNil and: [newProtocol notEmpty]) ifTrue: [
	selectedMethod category: newProtocol.
	self setMethodProtocol: newProtocol]
!

cancelChanges
	^unsavedChanges
	ifTrue: [window confirm: 'Cancel changes?']
	ifFalse: [true]
!

commitPackage
	selectedPackage ifNotNil: [
		(Package named: selectedPackage) commit ]
!

compile
	| currentEditLine |
	self disableSaveButton.
	currentEditLine := sourceArea editor getCursor.
	selectedTab = #comment
	ifTrue: [
			selectedClass ifNotNil: [
				self compileClassComment]]
	ifFalse: [
			(selectedProtocol notNil or: [selectedMethod notNil])
				ifFalse: [self compileDefinition]
				ifTrue: [self compileMethodDefinition]].
	sourceArea editor setCursor: currentEditLine.
!

compileClassComment
	selectedClass comment: sourceArea val
!

compileDefinition
	| newClass |
	newClass := Compiler new evaluateExpression: sourceArea val.
	self
	resetClassesList;
	updateCategoriesList;
	updateClassesList.
	self selectClass: newClass
!

compileMethodDefinition
	selectedTab = #instance
	ifTrue: [self compileMethodDefinitionFor: selectedClass]
	ifFalse: [self compileMethodDefinitionFor: selectedClass class]
!

compileMethodDefinitionFor: aClass
	| compiler method source node |
	source := sourceArea val.
	selectedProtocol ifNil: [ selectedProtocol := selectedMethod category ].
	compiler := Compiler new.
	compiler source: source.
	node := compiler parse: source.
	node isParseFailure ifTrue: [
	^window alert: 'PARSE ERROR: ', node reason, ', position: ', node position asString].
	compiler currentClass: aClass.
	method := compiler eval: (compiler compileNode: node).
	compiler unknownVariables do: [:each |
		"Do not try to redeclare javascript's objects"
		(window at: each) ifNil: [
		(window confirm: 'Declare ''', each, ''' as instance variable?') ifTrue: [
			self addInstanceVariableNamed: each toClass: aClass.
			^self compileMethodDefinitionFor: aClass]]].
	ClassBuilder new installMethod: method forClass: aClass category: selectedProtocol.
	self updateMethodsList.
	self selectMethod: method
!

copyClass
	| className |
	className := window prompt: 'Copy class'.
	(className notNil and: [className notEmpty]) ifTrue: [
		ClassBuilder new copyClass: self selectedClass named: className.
			self
			resetClassesList;
			updateClassesList.
		self selectClass: (Smalltalk current at: className)]
!

disableSaveButton
	saveButton ifNotNil: [
	saveButton at: 'disabled' put: true].
	unsavedChanges := false
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

hideClassButtons
	classButtons asJQuery hide
!

hideMethodButtons
	methodButtons asJQuery hide
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

removePackage

	(window confirm: 'Do you really want to remove the whole package ', selectedPackage, ' with all its classes?')
	ifTrue: [
		Smalltalk current removePackage: selectedPackage.
		self updateCategoriesList]
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

renamePackage

	| newName |
	newName := window prompt: 'Rename package ', selectedPackage.
	newName ifNotNil: [
	newName notEmpty ifTrue: [
	Smalltalk current renamePackage: selectedPackage to: newName.
	self updateCategoriesList]]
!

search: aString
	self cancelChanges ifTrue: [| searchedClass |
		searchedClass := Smalltalk current at: aString.
		searchedClass isClass
			ifTrue: [self class openOn: searchedClass]
			ifFalse: [self searchReferencesOf: aString]]
!

searchClassReferences
	ReferencesBrowser search: selectedClass name
!

searchReferencesOf: aString
	ReferencesBrowser search: aString
!

selectCategory: aCategory
	self cancelChanges ifTrue: [
	selectedPackage := aCategory.
	selectedClass := selectedProtocol := selectedMethod := nil.
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

selectMethod: aMethod
	self cancelChanges ifTrue: [
	selectedMethod := aMethod.
	self
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

selectTab: aString
	self cancelChanges ifTrue: [
	selectedTab := aString.
	self selectProtocol: nil.
	self updateTabsList]
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

showClassButtons
	classButtons asJQuery show
!

showMethodButtons
	methodButtons asJQuery show
! !

!Browser methodsFor: 'initialization'!

initialize
	super initialize.
	selectedTab := #instance.
	selectedPackage := self packages first.
	unsavedChanges := false
! !

!Browser methodsFor: 'rendering'!

renderBottomPanelOn: html
	html div
	class: 'amber_sourceCode';
	with: [
		sourceArea := SourceArea new.
		sourceArea renderOn: html.
			sourceArea onKeyDown: [:e |
				self handleSourceAreaKeyDown: e].
		sourceArea onKeyUp: [self updateStatus]]
!

renderBoxOn: html
	self
	renderTopPanelOn: html;
	renderTabsOn: html;
	renderBottomPanelOn: html
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
!

renderTabsOn: html
	tabsList := html ul class: 'amber_tabs amber_browser'.
	self updateTabsList.
!

renderTopPanelOn: html
	html div
		class: 'top';
		with: [
			packagesList := html ul class: 'amber_column browser packages'.
				html div class: 'amber_packagesButtons'; with: [
				html button
					title: 'Commit classes in this package to disk';
					onClick: [self commitPackage];
					with: 'Commit'.
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
			protocolsList := html ul class: 'amber_column browser protocols'.
			methodsList := html ul class: 'amber_column browser methods'.
			self
				updateCategoriesList;
				updateClassesList;
				updateProtocolsList;
				updateMethodsList.
			html div class: 'amber_clear']
! !

!Browser methodsFor: 'testing'!

canBeClosed
	^true
! !

!Browser methodsFor: 'updating'!

resetClassesList
	classesList resetNodes
!

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
	classesList updateNodes
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

updateSourceAndButtons
	| currentProtocol |

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
			with: 'Copy class';
			onClick: [self copyClass].
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
				currentProtocol := selectedProtocol.
				(currentProtocol isNil and: [ selectedMethod notNil ])
					ifTrue: [ currentProtocol := selectedMethod category].
				self protocols do: [:each | | option |
					option := html option with: each.
					currentProtocol = each ifTrue: [ option at: 'selected' put: 'selected' ] ]].
		selectedMethod isNil ifFalse: [
			referencesSelect := html select.
						referencesSelect
				onChange: [self searchReferencesOf: referencesSelect asJQuery val];
				with: [ |option|
					html option
						with: 'References';
						at: 'disabled' put: 'disabled';
						at: 'selected' put: 'selected'.
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
! !

!Browser class methodsFor: 'convenience'!

open
	self new open
!

openOn: aClass
	^self new
	open;
	selectCategory: aClass category;
	selectClass: aClass
! !

TabWidget subclass: #Debugger
	instanceVariableNames: 'error selectedContext sourceArea ul ul2 inspector saveButton unsavedChanges selectedVariable selectedVariableName inspectButton'
	package: 'IDE'!

!Debugger methodsFor: 'accessing'!

allVariables
	| all |
	all := Dictionary new.

	self receiver class allInstanceVariableNames do: [:each |
		all at: each put: (self receiver instVarAt: each) ].
	
	selectedContext locals keysAndValuesDo: [ :key :value |
		all at: key put: value ].
	
	^ all
!

error
	^error
!

error: anError
	error := anError
!

label
	^'[Debugger]'
!

method
	^selectedContext method
!

receiver
	^selectedContext receiver
!

source
	^self method
		ifNil: ['Method doesn''t exist!!']
		ifNotNil: [self method source]
! !

!Debugger methodsFor: 'actions'!

inspectSelectedVariable
	selectedVariable inspect
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

selectVariable: anObject named: aString
	
	selectedVariable := anObject.
	selectedVariableName := aString.
	inspector contents: [:html | html with: anObject printString].
	self updateVariablesList
! !

!Debugger methodsFor: 'initialization'!

initialize
	super initialize.
	unsavedChanges = false
! !

!Debugger methodsFor: 'rendering'!

renderBottomPanelOn: html
	html div
		class: 'amber_sourceCode debugger';
		with: [
			sourceArea := SourceArea new.
			sourceArea renderOn: html].
	ul2 := html ul class: 'amber_column debugger variables'.
	inspector := html div class: 'amber_column debugger inspector'.
	sourceArea
		onKeyUp: [self updateStatus]
!

renderBoxOn: html
	self
		renderTopPanelOn: html;
		renderBottomPanelOn: html
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
		class: 'amber_button debugger inspect';
		with: 'Inspect';
		onClick: [self inspectSelectedVariable].
	self
		updateSourceArea;
		updateStatus;
		updateVariablesList;
		updateInspector
!

renderContext: aContext on: html
	| li |
	li := html li.
	selectedContext = aContext ifTrue: [
		li class: 'selected'].
	li
		with: aContext asString;
		onClick: [self selectContext: aContext].
	aContext outerContext ifNotNil: [self renderContext: aContext outerContext on: html]
!

renderTopPanelOn: html
	selectedContext := self error context.
	html div
		class: 'top';
		with: [
			html div
				class: 'label';
				with: self error messageText.
			ul := html ul
				class: 'amber_column debugger contexts';
				with: [self renderContext: self error context on: html]]
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

updateInspector
	inspector contents: [:html |]
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

updateVariablesList
	ul2 contents: [ :html | | li |
		li := html li
			with: 'self';
			onClick: [ self selectVariable: self receiver named: 'self' ].
				selectedVariableName = 'self' ifTrue: [ li class: 'selected' ].
		
		self allVariables keysAndValuesDo: [:key :value |
						li := html li
							with: key;
							onClick: [ self selectVariable: value named: key ].
						selectedVariableName = key ifTrue: [
							li class: 'selected' ] ] ].
							
	selectedVariable
		ifNil: [ inspectButton at: 'disabled' put: true ]
		ifNotNil: [ inspectButton removeAt: 'disabled' ]
! !

TabWidget subclass: #IDETranscript
	instanceVariableNames: 'textarea'
	package: 'IDE'!

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

open
	TabManager current
	open;
	selectTab: self
!

show: anObject
	textarea ifNil: [self open].
	textarea asJQuery val: textarea asJQuery val, anObject asString.
! !

!IDETranscript methodsFor: 'rendering'!

renderBoxOn: html
	textarea := html textarea.
	textarea
	class: 'amber_transcript';
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

current
	^current ifNil: [current := super new]
!

new
	self shouldNotImplement
!

open
	TabManager current
	open;
	selectTab: self current
! !

TabWidget subclass: #Inspector
	instanceVariableNames: 'label variables object selectedVariable variablesList valueTextarea diveButton sourceArea'
	package: 'IDE'!

!Inspector methodsFor: 'accessing'!

label
	^label ifNil: ['Inspector (nil)']
!

selectedVariable
	^selectedVariable
!

selectedVariable: aString
	selectedVariable := aString
!

setLabel: aString
	label := aString
!

setVariables: aCollection
	variables := aCollection
!

sourceArea
	^sourceArea
!

variables
	^variables
! !

!Inspector methodsFor: 'actions'!

dive
	(self variables at: self selectedVariable) inspect
!

inspect: anObject
	object := anObject.
	variables := #().
	object inspectOn: self
!

refresh
	self
		inspect: object;
		updateVariablesList;
		updateValueTextarea
! !

!Inspector methodsFor: 'rendering'!

renderBottomPanelOn: html
	html div
	class: 'amber_sourceCode';
	with: [
		sourceArea := SourceArea new
		receiver: object;
		onDoIt: [self refresh];
		yourself.
			sourceArea renderOn: html]
!

renderBoxOn: html
	self
		renderTopPanelOn: html;
		renderBottomPanelOn: html
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
!

renderTopPanelOn: html
	html div
		class: 'top';
		with: [
			variablesList := html ul class: 'amber_column variables'.
			valueTextarea := html textarea class: 'amber_column value'; at: 'readonly' put: 'readonly'.
			html div class: 'amber_tabs inspector'; with: [
				html button
					class: 'amber_button inspector refresh';
					with: 'Refresh';
					onClick: [self refresh].
				diveButton := html button
					class: 'amber_button inspector dive';
					with: 'Dive';
					onClick: [self dive]].
			html div class: 'amber_clear'].
	self
		updateVariablesList;
		updateValueTextarea.
! !

!Inspector methodsFor: 'testing'!

canBeClosed
	^true
! !

!Inspector methodsFor: 'updating'!

selectVariable: aString
	self selectedVariable: aString.
	self
		updateVariablesList;
		updateValueTextarea;
		updateButtons
!

updateButtons
	(self selectedVariable notNil and: [(self variables at: self selectedVariable) notNil])
		ifFalse: [diveButton at: 'disabled' put: true]
		ifTrue: [diveButton removeAt: 'disabled']
!

updateValueTextarea
	valueTextarea asJQuery val: (self selectedVariable isNil
		ifTrue: ['']
		ifFalse: [(self variables at: self selectedVariable) printString])
!

updateVariablesList
	variablesList contents: [:html |
		self variables keys do: [:each || li |
			li := html li.
			li
				with: each;
				onClick: [self selectVariable: each].
			self selectedVariable = each ifTrue: [
				li class: 'selected']]]
! !

!Inspector class methodsFor: 'instance creation'!

inspect: anObject
	^self new
		inspect: anObject;
		yourself
!

on: anObject
	^self new
		inspect: anObject;
		yourself
! !

TabWidget subclass: #ProgressBar
	instanceVariableNames: 'percent progressDiv div'
	package: 'IDE'!

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

TabWidget subclass: #ReferencesBrowser
	instanceVariableNames: 'implementors senders implementorsList input timer selector sendersList referencedClasses referencedClassesList matches matchesList'
	package: 'IDE'!

!ReferencesBrowser methodsFor: 'accessing'!

classesAndMetaclasses
	^Smalltalk current classes, (Smalltalk current classes collect: [:each | each class])
!

implementors
	^implementors ifNil: [implementors := Array new]
!

label
	^'[References]'
!

matches
	^matches ifNil: [matches := Array new]
!

referencedClasses
	^referencedClasses ifNil: [referencedClasses := Array new]
!

selector
	^selector
!

senders
	^senders ifNil: [senders := Array new]
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

search: aString
	self
		searchReferencesFor: aString;
		updateImplementorsList;
		updateSendersList;
		updateReferencedClassesList;
		updateMatchesList
!

searchMethodSource
	| regex |
	regex := selector allButFirst.
	self classesAndMetaclasses do: [:each |
		each methodDictionary values do: [:value |
			(value source match: regex) ifTrue: [
				self matches add: value]]]
!

searchReferencedClasses
	self classesAndMetaclasses do: [:each |
		each methodDictionary values do: [:value |
			(value referencedClasses includes: selector) ifTrue: [
				self referencedClasses add: value]]]
!

searchReferencesFor: aString
	selector := aString.
	implementors := Array new.
	senders := Array new.
	referencedClasses := Array new.
	matches := Array new.
	self searchMethodSource.
	(selector match: '^[A-Z]')
		ifFalse: [self searchSelectorReferences]
		ifTrue: [self searchReferencedClasses]
!

searchSelectorReferences
	self classesAndMetaclasses do: [:each |
		each methodDictionary keysAndValuesDo: [:key :value |
			key = selector ifTrue: [self implementors add: value].
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
		renderReferencedClassesOn: html;
		renderMatchesOn: html
!

renderImplementorsOn: html
	implementorsList := html ul class: 'amber_column implementors'.
	self updateImplementorsList
!

renderInputOn: html
	input := html input
		class: 'implementors';
		yourself.
	input asJQuery val: selector.
	self setInputEvents
!

renderMatchesOn: html
	matchesList := html ul class: 'amber_column matches'.
	self updateMatchesList
!

renderReferencedClassesOn: html
	referencedClassesList := html ul class: 'amber_column referenced_classes'.
	self updateReferencedClassesList
!

renderSendersOn: html
	sendersList := html ul class: 'amber_column senders'.
	self updateSendersList
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

updateMatchesList
	matchesList contents: [:html |
	html li
		class: 'column_label';
		with: 'Regex matches (', self matches size asString, ')';
		style: 'font-weight: bold'.
	self matches do: [:each || li |
		li := html li.
		li
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
! !

!ReferencesBrowser class methodsFor: 'instance creation'!

search: aString
	^self new
		searchReferencesFor: aString;
		open
! !

TabWidget subclass: #TestRunner
	instanceVariableNames: 'selectedCategories packagesList selectedClasses classesList selectedMethods progressBar methodsList result statusDiv'
	package: 'IDE'!

!TestRunner methodsFor: 'accessing'!

allClasses
	^TestCase allSubclasses select: [ :each | each isAbstract not ]
!

classes
	^(self allClasses
	select: [:each | self selectedCategories includes: each category])
	sort: [:a :b | a name > b name]
!

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

progressBar
	^progressBar ifNil: [progressBar := ProgressBar new]
!

result
	^result
!

selectedCategories
	^selectedCategories ifNil: [selectedCategories := Array new]
!

selectedClasses
	^selectedClasses ifNil: [selectedClasses := Array new]
!

statusInfo
	^self printTotal, self printPasses, self printErrors, self printFailures
!

testCases
	| testCases |
	testCases := #().
	(self selectedClasses
		select: [:each | self selectedCategories includes: each category])
		do: [:each | testCases addAll: each buildSuite].
	^testCases
! !

!TestRunner methodsFor: 'actions'!

performFailure: aTestCase
	aTestCase runCase
!

run: aCollection
| worker |
	worker := TestSuiteRunner on: aCollection.
	result := worker result.
	worker announcer on: ResultAnnouncement do: [:ann |
		ann result == result ifTrue: [
			self progressBar updatePercent: result runs / result total * 100.
			self updateStatusDiv.
			self updateMethodsList
		]
	].
	worker run
!

selectAllCategories
	self packages do: [:each |
		(selectedCategories includes: each) ifFalse: [
			self selectedCategories add: each]].
	self
		updateCategoriesList;
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
	^(self result runs - self result errors size - self result failures size) asString , ' passes, '
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
	packagesList := html ul class: 'amber_column sunit packages'.
	self updateCategoriesList
!

renderClassesOn: html
	classesList := html ul class: 'amber_column sunit classes'.
	self updateClassesList
!

renderErrorsOn: html
	self result errors do: [:each |
		html li
			class: 'errors';
			with: each class name, ' >> ', each selector;
						onClick: [self performFailure: each]]
!

renderFailuresOn: html
	self result failures do: [:each |
		html li
			class: 'failures';
			with: each class name, ' >> ', each selector;
						onClick: [self performFailure: each]]
!

renderResultsOn: html
	statusDiv := html div.
	html with: self progressBar.
	methodsList := html ul class: 'amber_column sunit results'.
	self updateMethodsList.
	self updateStatusDiv
! !

!TestRunner methodsFor: 'testing'!

isSelectedCategory: aCategory
	^(self selectedCategories includes: aCategory)
!

isSelectedClass: aClass
	^(self selectedClasses includes: aClass)
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

TabWidget subclass: #Workspace
	instanceVariableNames: 'sourceArea'
	package: 'IDE'!

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

fileIn
	sourceArea fileIn
!

inspectIt
	sourceArea inspectIt
!

printIt
	sourceArea printIt
!

show
	super show.
	sourceArea focus.
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

!HashedCollection methodsFor: '*IDE'!

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

!String methodsFor: '*IDE'!

inspectOn: anInspector
	| label |
	super inspectOn: anInspector.
	self printString size > 30
		ifTrue: [label := (self printString copyFrom: 1 to: 30), '...''']
		ifFalse: [label := self printString].
	anInspector setLabel: label
! !

!Set methodsFor: '*IDE'!

inspectOn: anInspector
	| variables |
	variables := Dictionary new.
	variables at: '#self' put: self.
	elements withIndexDo: [:each :i |
		variables at: i put: each].
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

