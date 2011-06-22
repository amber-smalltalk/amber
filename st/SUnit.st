Object subclass: #TestCase
	instanceVariableNames: 'testedClass'
	category: 'SUnit'!

!TestCase methodsFor: 'accessing'!

testedClass
	^testedClass
!

testedClass: aClass
	testedClass := aClass
! !

!TestCase methodsFor: 'private'!

cleanUpInstanceVariables
	self class instanceVariableNames do: [ :name |
		name = 'testSelector' ifFalse: [
			self instVarAt: name put: nil ]]
!

signalFailure: aString
	TestFailure new
		messageText: aString;
		signal
! !

!TestCase methodsFor: 'running'!

setUp
!

tearDown
!

methods
	^self class methodDictionary keys select: [:each | each match: '^test']
!

runCaseFor: aTestResult
	[self setUp.
	self performTestFor: aTestResult]
		on: Error
		do: [:ex |
			self tearDown.
			self cleanUpInstanceVariables.
			ex signal].
	self tearDown.
	self cleanUpInstanceVariables
!

performTestFor: aResult
	self methods do: [:each | 
		[[self perform: each]
			on: TestFailure do: [:ex | aResult addFailure: self class name, '>>', each]]
			on: Error do: [:ex | aResult addError: self class name, '>>', each].
		aResult increaseRuns]
! !

!TestCase methodsFor: 'testing'!

assert: aBoolean
	aBoolean ifFalse: [self signalFailure: 'Assertion failed']
!

deny: aBoolean
	self assert: aBoolean not
! !

TestCase subclass: #ExampleTest
	instanceVariableNames: 'test'
	category: 'SUnit'!

!ExampleTest methodsFor: 'not yet classified'!

testFailure
	self deny: true
	
!

testPasses
	100000 timesRepeat: [self assert: 1 + 1 = 2]
!

testError
	self assert: 1 foo
! !

TabWidget subclass: #ProgressBar
	instanceVariableNames: 'percent progressDiv'
	category: 'SUnit'!

!ProgressBar methodsFor: 'accessing'!

percent
	^percent ifNil: [0]
!

percent: aNumber
	percent := aNumber
! !

!ProgressBar methodsFor: 'rendering'!

renderOn: html 
	html div 
		class: 'progress_bar';
		with: [
			html div 
				class: 'progress';
				style: 'width:', self percent asString, '%']
! !

!ProgressBar methodsFor: 'updating'!

updatePercent: aNumber
	self percent: aNumber.
	self update
! !

Error subclass: #TestFailure
	instanceVariableNames: ''
	category: 'SUnit'!

TabWidget subclass: #TestRunner
	instanceVariableNames: 'selectedCategories categoriesList selectedClasses classesList selectedMethods progressBar methodsList result statusDiv'
	category: 'SUnit'!

!TestRunner methodsFor: 'accessing'!

label
    ^'[Test runner]'

!

categories
    | categories |
    categories := Array new.
    self allClasses do: [:each |
	(categories includes: each category) ifFalse: [
	    categories add: each category]].
    ^categories sort
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

selectedMethods
	^selectedMethods ifNil: [self selectedClasses collect: [:each |
		each methodDictionary keys select: [:key |  key beginsWith: 'test' ]]]
!

statusInfo
	^self printTotal, self printPasses, self printErrors, self printFailures
!

result
	^result
!

failedMethods
	self result failures collect: [:each |
		html li 
			class: 'failures';
			with: each]
! !

!TestRunner methodsFor: 'actions'!

selectAllCategories
	self categories do: [:each | 
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
	result total: (aCollection inject: 0 into: [:acc :each | acc + each methods size]).
	aCollection do: [:each | 
		[each runCaseFor: result.
		self progressBar updatePercent: result runs / result total * 100.
		self updateStatusDiv.
		self updateMethodsList] valueWithTimeout: 100].
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
	^(((self result total) - (self result errors size + (self result failures size))) asString) , ' passes, '
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
	onClick: [self run: (self selectedClasses collect: [:each | each new])]

!

renderCategoriesOn: html
    	categoriesList := html ul class: 'jt_column sunit categories'.
	self updateCategoriesList
!

renderClassesOn: html
    	classesList := html ul class: 'jt_column sunit classes'.
	self updateClassesList
!

renderResultsOn: html
    	statusDiv := html div.
	html with: self progressBar.
   	methodsList := html ul class: 'jt_column sunit methods'.
	self updateMethodsList.
	self updateStatusDiv
!

renderFailuresOn: html
	self result failures do: [:each |
		html li 
			class: 'failures';
			with: each]
!

renderErrorsOn: html
	self result errors do: [:each |
		html li 
			class: 'errors';
			with: each]
! !

!TestRunner methodsFor: 'testing'!

canBeClosed
    ^true

!

isSelectedClass: aClass
	^(self selectedClasses includes: aClass)
!

isSelectedCategory: aCategory
	^(self selectedCategories includes: aCategory)
! !

!TestRunner methodsFor: 'updating'!

updateCategoriesList
    categoriesList contents: [:html |
	    html li 
		class: 'all';
		with: 'All';
		onClick: [self selectAllCategories].
	self categories do: [:each || li |
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
		self renderFailuresOn: html.
                self renderErrorsOn: html]
!

updateStatusDiv
	statusDiv class: 'sunit status ', result status.
	statusDiv contents: [:html |
		html span with: self statusInfo]
! !

Object subclass: #TestResult
	instanceVariableNames: 'timestamp runs errors failures total'
	category: 'SUnit'!

!TestResult methodsFor: 'accessing'!

timestamp
	^timestamp
!

errors
	^errors
!

failures
	^failures
!

total
	^total
!

total: aNumber
	total := aNumber
!

addError: anError
	self errors add: anError
!

addFailure: aFailure
	self failures add: aFailure
!

runs
	^runs
!

increaseRuns
	runs := runs + 1
!

status
	^self errors isEmpty 
		ifTrue: [
			self failures isEmpty 
				ifTrue: ['success']
				ifFalse: ['failure']]
		ifFalse: ['error']
! !

!TestResult methodsFor: 'initialization'!

initialize
	super initialize.
	timestamp := Date now.
	runs := 0.
	errors := Array new.
	failures := Array new.
	total := 0
! !

TestCase subclass: #ExampleTest2
	instanceVariableNames: ''
	category: 'SUnit'!

!ExampleTest2 methodsFor: 'not yet classified'!

testPasses
	100000 timesRepeat: [self assert: 1 + 1 = 2]
! !

TestCase subclass: #ExampleTest3
	instanceVariableNames: ''
	category: 'SUnit'!

!ExampleTest3 methodsFor: 'not yet classified'!

testPasses
	100000 timesRepeat: [self assert: 1 + 1 = 2]
! !

