Widget subclass: #TabManager
	instanceVariableNames: 'selectedTab tabs opened'
	category: 'IDE'!

TabManager class instanceVariableNames: 'current'!

!TabManager class methodsFor: 'instance creation'!

current
    ^current ifNil: [current := super new]
!

new
    self shouldNotImplement
! !

!TabManager methodsFor: 'initialization'!

initialize
    super initialize.
    opened := true.
    'body' asJQuery 
	append: self;
	addClass: 'jtalk'.
    self 
	addTab: Transcript current;
	addTab: Workspace new.
    self selectTab: self tabs last.
! !

!TabManager methodsFor: 'accessing'!

tabs
    ^tabs ifNil: [tabs := Array new]
! !

!TabManager methodsFor: 'adding/Removing'!

addTab: aWidget
    self tabs add: aWidget.
    'body' asJQuery append: aWidget.
    aWidget root asJQuery hide
!

removeTab: aWidget
    self tabs remove: aWidget.
    self update
! !

!TabManager methodsFor: 'actions'!

open
    opened ifFalse: [
	self root asJQuery show.
	'body' asJQuery addClass: 'jtalk'.
	selectedTab root asJQuery show.
	opened := true]
!

close
    opened ifTrue: [
	self tabs do: [:each |
	    each root asJQuery hide].
	self root asJQuery hide.
	'body' asJQuery removeClass: 'jtalk'.
	opened := false]
!

newBrowserTab
    Browser open
!

selectTab: aWidget
    self open.
    selectedTab := aWidget.
    self tabs do: [:each |
	each root asJQuery hide].
    aWidget root asJQuery show.
    self update
!

closeTab: aWidget
    self removeTab: aWidget.
    self selectTab: self tabs last.
    aWidget root asJQuery remove.
    self update
! !

!TabManager methodsFor: 'rendering'!

renderOn: html
    html ul
	id: 'jtalkTabs';
	with: [
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
! !


Widget subclass: #TabWidget
	instanceVariableNames: ''
	category: 'IDE'!

!TabWidget class methodsFor: 'instance creation'!

open
    ^self new open
! !

!TabWidget methodsFor: 'accessing'!

label
    self subclassResponsibility
! !

!TabWidget methodsFor: 'actions'!

open
    TabManager current
	addTab: self;
	selectTab: self
! !
   
!TabWidget methodsFor: 'testing'!

canBeClosed
    ^false
! !

!TabWidget methodsFor: 'rendering'!

renderOn: html
    html div 
	class: 'jtalkTool';
	with: [
	    html div
		class: 'box';
		with: [self renderBoxOn: html].
	    html div
		class: 'buttons';
		with: [self renderButtonsOn: html]]
!

renderBoxOn: html
!

renderButtonsOn: html
! !



TabWidget subclass: #Workspace
	instanceVariableNames: 'textarea'
	category: 'IDE'!

!Workspace methodsFor: 'accessing'!

label
    ^'[Workspace]'
!

selection
    ^{'return document.selection'}
!

selectionStart
    ^{'return jQuery(''.workspace'')[0].selectionStart'}
!

selectionEnd
    ^{'return jQuery(''.workspace'')[0].selectionEnd'}
!

selectionStart: anInteger
    {'jQuery(''.workspace'')[0].selectionStart = anInteger'}
!

selectionEnd: anInteger
    {'jQuery(''.workspace'')[0].selectionEnd = anInteger'}
!

currentLine
    | lines startLine endLine|
    lines := textarea asJQuery val tokenize: String cr.
    startLine := endLine := 0.
    lines do: [:each |
	endLine := startLine + each size.
	startLine := endLine + 1.
	endLine >= self selectionStart ifTrue: [
	    self selectionEnd: endLine.
	    ^each]]
! !

!Workspace methodsFor: 'actions'!

handleKeyDown: anEvent
    ^{'if(anEvent.ctrlKey) {
		if(anEvent.keyCode === 68) { //ctrl+p
			self._printIt();
			return false;
		}
		if(anEvent.keyCode === 80) { //ctrl+d
			self._doIt();
			return false;
		}
	}'}
!

clearWorkspace
    textarea asJQuery val: ''
!

doIt
    self printIt
!

printIt
    | selection |
    textarea asJQuery focus.
    self selectionStart = self selectionEnd
	ifTrue: [selection := self currentLine]
	ifFalse: [
	    selection := textarea asJQuery val copyFrom: self selectionStart + 1 to: self selectionEnd + 1].
    self print: (self eval: selection) printString
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

eval: aString
    ^Compiler new loadExpression: aString
! !

!Workspace methodsFor: 'rendering'!

renderBoxOn: html
    textarea := html textarea.
    textarea onKeyDown: [:e | self handleKeyDown: e].
    textarea 
	class: 'workspace';
	at: 'spellcheck' put: 'false'
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
	with: 'Clear workspace';
	onClick: [self clearWorkspace]
! !



TabWidget subclass: #Transcript
	instanceVariableNames: 'textarea'
	category: 'IDE'!

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
    textarea 
	class: 'transcript';
	at: 'spellcheck' put: 'false'
!

renderButtonsOn: html
    html button
	with: 'Clear transcript';
	onClick: [self clear]
! !

TabWidget subclass: #Browser
	instanceVariableNames: 'selectedCategory selectedClass selectedProtocol selectedMethod categoriesList classesList protocolsList methodsList sourceTextarea tabsList selectedTab saveButton classButtons methodButtons'
	category: 'IDE'!

!Browser class methodsFor: 'convenience'!

open
    self new open
! !

!Browser methodsFor: 'initialization'!

initialize
    super initialize.
    selectedTab := #instance
! !

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
    | class protocols |
    protocols := Array new.
    selectedClass ifNotNil: [
	selectedTab = #comment ifTrue: [^#()].
	class := selectedTab = #instance
	    ifTrue: [selectedClass]
	    ifFalse: [selectedClass class].
	class methodDictionary isEmpty ifTrue: [
	    protocols add: 'not yet classified'].
	class methodDictionary do: [:each |
	    (protocols includes: each category) ifFalse: [
		protocols add: each category]]].
    ^protocols sort
!

methods
    | class |
    selectedTab = #comment ifTrue: [^#()].
    selectedClass ifNotNil: [
	class := selectedTab = #instance
	    ifTrue: [selectedClass]
	    ifFalse: [selectedClass class]].
    ^(selectedProtocol 
	ifNil: [
	    class 
		ifNil: [#()] 
		ifNotNil: [class methodDictionary values]]
	ifNotNil: [
	    class methodDictionary values select: [:each |
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
	    nextPutAll: String cr, String tab;
	    nextPutAll: 'instanceVariableNames: '''.
	selectedClass instanceVariableNames 
	    do: [:each | stream nextPutAll: each] 
	    separatedBy: [stream nextPutAll: ' '].
	stream
	    nextPutAll: '''', String cr, String tab;
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
! !

!Browser methodsFor: 'actions'!

enableSaveButton
    saveButton removeAt: 'disabled'
!

disableSaveButton
    saveButton ifNotNil: [
	saveButton at: 'disabled' put: true]
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
    selectedTab = #comment ifTrue: [
	selectedClass ifNotNil: [
	    self compileClassComment]].
    (selectedProtocol notNil or: [selectedMethod notNil])
	ifFalse: [self compileDefinition]
	ifTrue: [self compileMethodDefinition].
    self disableSaveButton
!

compileClassComment
    selectedClass comment: sourceTextarea asJQuery val
!

compileMethodDefinition
    selectedTab = #instance
	ifTrue: [self compileMethodDefinitionFor: selectedClass]
	ifFalse: [self compileMethodDefinitionFor: selectedClass class]
!

compileMethodDefinitionFor: aClass
    | method |
    method := Compiler new load: sourceTextarea asJQuery val forClass: selectedClass.
    method category: selectedProtocol.
    aClass addCompiledMethod: method.
    self updateMethodsList.
    self selectMethod: method
!

compileDefinition
    | newClass |
    newClass := Compiler new loadExpression: sourceTextarea asJQuery val.
    self 
	updateCategoriesList;
	updateClassesList
!

selectCategory: aCategory
    selectedCategory := aCategory.
    selectedClass := selectedProtocol := selectedMethod :=  nil.
    self 
	updateCategoriesList;
	updateClassesList;
	updateProtocolsList;
	updateMethodsList;
	updateSourceAndButtons
!

selectClass: aClass
    selectedClass := aClass.
    selectedProtocol := selectedMethod := nil.
    self 
	updateClassesList;
	updateProtocolsList;
	updateMethodsList;
	updateSourceAndButtons
!

selectProtocol: aString
    selectedProtocol := aString.
    selectedMethod := nil.
    self 
	updateProtocolsList;
	updateMethodsList;
	updateSourceAndButtons
!

selectMethod: aMethod
    selectedMethod := aMethod.
    self 
	updateProtocolsList;
	updateMethodsList;
	updateSourceAndButtons
!

selectTab: aString
    selectedTab := aString.
    self selectProtocol: nil.
    self updateTabsList.
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
	    categoriesList := html ul class: 'column categories'.
	    classesList := html ul class: 'column classes'.
	    protocolsList := html ul class: 'column protocols'.
	    methodsList := html ul class: 'column methods'.
	    self
		updateCategoriesList;
		updateClassesList;
		updateProtocolsList;
		updateMethodsList.
	    html div class: 'clear']
!

renderTabsOn: html
    tabsList := html ul class: 'tabs'.
    self updateTabsList.
!

renderBottomPanelOn: html
    html div
	class: 'sourceCode';
	with: [
	    sourceTextarea := html textarea 
		onKeyPress: [self enableSaveButton];
		class: 'source';
		at: 'spellcheck' put: 'false']
!

renderButtonsOn: html
    saveButton := html button.
    saveButton 
	with: 'Save';
	onClick: [self compile].
    methodButtons := html span with: [
	html button
	    with: 'Remove method';
	    onClick: [self removeMethod]].
    classButtons := html span with: [
	html button
	    with: 'Remove class';
	    onClick: [self removeClass]].
    self updateSourceAndButtons
! !

!Browser methodsFor: 'updating'!

updateCategoriesList
    categoriesList contents: [:html |
	self categories do: [:each || li |
	    li := html li.
	    selectedCategory = each ifTrue: [
		li class: 'selected'].
	    li
		with: each;
		onClick: [self selectCategory: each]]]
!

updateClassesList
    TabManager current update.
    classesList contents: [:html |
	self classes do: [:each || li |
	    li := html li.
	    selectedClass = each ifTrue: [
		li class: 'selected'].
	    li
		with: each name;
		onClick: [self selectClass: each]]]
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
    selectedMethod 
	ifNil: [
	    self hideMethodButtons.
	    selectedClass 
		ifNil: [self hideClassButtons]
		ifNotNil: [self showClassButtons]]
	ifNotNil: [
	    self hideClassButtons
	    self showMethodButtons].
    sourceTextarea asJQuery val: self source
! !

!Browser methodsFor: 'testing'!

canBeClosed
    ^true
! !
		





	
