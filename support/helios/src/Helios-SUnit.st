Smalltalk createPackage: 'Helios-SUnit'!
HLToolListWidget subclass: #HLMultiSelectToolListWidget
	instanceVariableNames: ''
	package: 'Helios-SUnit'!
!HLMultiSelectToolListWidget commentStamp!
This is a list that handles multiple selection!

!HLMultiSelectToolListWidget methodsFor: 'accessing'!

activeItemCssClass
	^'selector'
!

listCssClass 
	^'nav nav-multiselect nav-pills nav-stacked'
!

listCssClassForItem: anObject
	^(super listCssClassForItem: anObject), ((self isSelected: anObject)
		ifTrue: [' active']
		ifFalse: ['']).
! !

!HLMultiSelectToolListWidget methodsFor: 'actions'!

select: anObject
	self subclassResponsibility
!

toggleListItem: aListItem
	| item |
	
	(aListItem get: 0) ifNil: [ ^ self ].
	"Find item"
	item := aListItem data: 'item'.
	self toggleSelection: item
!

toggleSelection: anObject
	(self isSelected: anObject) 
		ifTrue: [ self unselect: anObject ]
		ifFalse: [self select: anObject ]
!

unselect: anObject
	self subclassResponsibility
! !

!HLMultiSelectToolListWidget methodsFor: 'rendering'!

reselectItem: anObject
	anObject ifNil: [^self].
	self toggleSelection: anObject
! !

!HLMultiSelectToolListWidget methodsFor: 'testing'!

isSelected: anObject
	self subclassResponsibility
! !

HLMultiSelectToolListWidget subclass: #HLSUnitClassesListWidget
	instanceVariableNames: ''
	package: 'Helios-SUnit'!
!HLSUnitClassesListWidget commentStamp!
I display a list of  classes (subclasses of `TestCase`).!

!HLSUnitClassesListWidget methodsFor: 'accessing'!

buttonsDivCssClass
	^ 'buttons_bar'
!

cssClassForItem: aClass	
	^ aClass theNonMetaClass heliosClass
!

items
	^ items ifNil: [ self initializeItems ]
!

label
	^ 'Classes'
! !

!HLSUnitClassesListWidget methodsFor: 'actions'!

observeModel
    self model announcer 
		on: HLPackageSelected
		send: #onPackageSelected:
		to: self;
		
		on: HLPackageUnselected
		send: #onPackageUnselected:
		to: self;
		
		on: HLClassSelected
		send: #onClassSelected:
		to: self;
		
		on: HLClassUnselected
		send: #onClassUnselected:
		to: self.
!

observeSystem
    self model systemAnnouncer 
		on: ClassAdded 
		send: #onClassAdded:
		to: self.
!

select: anObject
	model selectClass: anObject
!

unselect: anObject
	model unselectClass: anObject
! !

!HLSUnitClassesListWidget methodsFor: 'initialization'!

initializeItems
	^items := model testClasses
! !

!HLSUnitClassesListWidget methodsFor: 'reactions'!

onClassAdded: anAnnouncement	
	(self model selectedPackages includes: anAnnouncement theClass package)
		ifTrue: [ 
			self 
				initializeItems;
				refresh ]
!

onClassSelected: anAnnouncement
	| listItem |
	listItem := self findListItemFor: anAnnouncement item.
	listItem addClass: 'active'.
!

onClassUnselected: anAnnouncement
	| listItem |
	listItem := self findListItemFor: anAnnouncement item.
	listItem removeClass: 'active'.
!

onPackageSelected: anAnnouncement
	self initializeItems;
		refresh
!

onPackageUnselected: anAnnouncement
	self initializeItems;
		refresh
! !

!HLSUnitClassesListWidget methodsFor: 'rendering'!

renderButtonsOn: html
	html button
		class: 'button'; 
		with: 'Select all';
		onClick: [ self model selectAllClasses ]
!

renderItemLabel: aClass on: html
	html with: aClass name
! !

!HLSUnitClassesListWidget methodsFor: 'testing'!

isSelected: anObject
	^model selectedClasses includes: anObject
! !

HLMultiSelectToolListWidget subclass: #HLSUnitPackagesListWidget
	instanceVariableNames: ''
	package: 'Helios-SUnit'!
!HLSUnitPackagesListWidget commentStamp!
I display a list of packages for which unit tests are associated (packages containing subclasses of `TestCase`).!

!HLSUnitPackagesListWidget methodsFor: 'accessing'!

buttonsDivCssClass
	^ 'buttons_bar'
!

cssClassForItem: anItem	
	^ anItem isDirty 
		ifTrue: [ 'package_dirty' ]
		ifFalse: [ 'package' ]
!

items
	^ items ifNil: [ self initializeItems ]
!

label
	^ 'Packages'
! !

!HLSUnitPackagesListWidget methodsFor: 'actions'!

observeModel
    self model announcer 
		on: HLPackageSelected
		send: #onPackageSelected:
		to: self;
		
		on: HLPackageUnselected
		send: #onPackageUnselected:
		to: self
!

observeSystem
    self model systemAnnouncer 
		on: ClassAdded 
		send: #onClassAdded:
		to: self.
!

select: anObject
	model selectPackage: anObject
!

unselect: anObject
	model unselectPackage: anObject
! !

!HLSUnitPackagesListWidget methodsFor: 'initialization'!

initializeItems
	^items := model testPackages 
		sort: [:a :b | a name < b name]
! !

!HLSUnitPackagesListWidget methodsFor: 'reactions'!

onClassAdded: anAnnouncement
	((self items includes: anAnnouncement theClass package) not and: [anAnnouncement theClass package isTestPackage])
		ifTrue: [ 
			self 
				initializeItems;
				refresh ]
!

onPackageSelected: anAnnouncement
	| listItem |
	listItem := self findListItemFor: anAnnouncement item.
	listItem addClass: 'active'.
!

onPackageUnselected: anAnnouncement
	| listItem |
	listItem := self findListItemFor: anAnnouncement item.
	listItem removeClass: 'active'.
! !

!HLSUnitPackagesListWidget methodsFor: 'rendering'!

renderButtonsOn: html
	html button
		class: 'button';
		with: 'Run Tests';
		onClick: [ self model runTests ].
	html button
		class: 'button';
		with: 'Select all';
		onClick: [ self model selectAllPackages ]
!

renderItemLabel: aPackage on: html
	html with: aPackage name
! !

!HLSUnitPackagesListWidget methodsFor: 'testing'!

isSelected: anObject
	^model selectedPackages includes: anObject
! !

HLWidget subclass: #HLSUnit
	instanceVariableNames: 'model packagesListWidget classesListWidget resultWidget failuresWidget errorsWidget'
	package: 'Helios-SUnit'!
!HLSUnit commentStamp!
I am the main widget for running unit tests in Helios.

I provide the ability to select set of tests to run per package, and a detailed result log with passed tests, failed tests and errors.!

!HLSUnit methodsFor: 'accessing'!

model
	^ model ifNil: [ model := HLSUnitModel new ]
!

resultSection
	^HLHorizontalSplitter 
		with: self resultWidget
		with: (HLHorizontalSplitter 
			with: self failuresWidget
			with: self errorsWidget)
! !

!HLSUnit methodsFor: 'actions'!

unregister
	super unregister.

	{ 
		self packagesListWidget.
		self classesListWidget.
		self resultWidget.
		self errorsWidget.
		self failuresWidget
	} 
		do: [ :each | each unregister ]
! !

!HLSUnit methodsFor: 'keybindings'!

registerBindingsOn: aBindingGroup
	HLToolCommand 
		registerConcreteClassesOn: aBindingGroup 
		for: self model
! !

!HLSUnit methodsFor: 'rendering'!

renderContentOn: html
	| resultSection |
	html with: (HLContainer with:  (
		HLVerticalSplitter 
			with: (HLVerticalSplitter
				with: self packagesListWidget 
        		with: self classesListWidget)
			with: (resultSection := self resultSection))).
	
	[resultSection resize: 0] valueWithTimeout: 100.
	
	self packagesListWidget focus
! !

!HLSUnit methodsFor: 'widgets'!

classesListWidget
	^ classesListWidget ifNil: [ 
		classesListWidget := HLSUnitClassesListWidget on: self model.
		classesListWidget next: self failuresWidget ]
!

errorsWidget
	^ errorsWidget ifNil: [errorsWidget := HLSUnitErrorsListWidget on: self model]
!

failuresWidget
	^ failuresWidget ifNil: [
		failuresWidget := HLSUnitFailuresListWidget on: self model.
		failuresWidget next: self errorsWidget]
!

packagesListWidget
	^ packagesListWidget ifNil: [ 
		packagesListWidget := HLSUnitPackagesListWidget on: self model.
		packagesListWidget next: self classesListWidget]
!

resultWidget
	^ resultWidget ifNil: [
		resultWidget := HLSUnitResults new
			model: self model;
			yourself]
! !

!HLSUnit class methodsFor: 'accessing'!

tabClass
	^ 'sunit'
!

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

HLModel subclass: #HLSUnitModel
	instanceVariableNames: 'selectedPackages selectedClasses testResult currentSuite'
	package: 'Helios-SUnit'!
!HLSUnitModel commentStamp!
I am the model for running unit tests in Helios.

I provide the ability to select set of tests to run per package, and a detailed result log with passed tests, failed tests and errors.!

!HLSUnitModel methodsFor: 'accessing'!

currentSuite
	^currentSuite
!

selectedClasses
	^ (self unfilteredSelectedClasses) select: [ :each |
		self selectedPackages includes: each package ]
!

selectedPackages
	^ selectedPackages ifNil: [ selectedPackages := Set new ]
!

testCases
	| testCases |
	testCases := #().
	self selectedClasses
		do: [ :each | testCases addAll: each buildSuite ].
	^ testCases
!

testClasses
	"Answer all concrete subclasses of TestCase in selected packages"
	
	| stream |
	stream := Array new writeStream.
	self selectedPackages do: [ :package |
		stream nextPutAll: (package classes select:  [ :each |
			each isTestClass ] ) ].
	^ stream contents
!

testPackages
	"Answer all packages containing concrete subclasses of TestCase"
	
	^ self environment packages 
		select: [ :each | each isTestPackage ]
!

testResult
	^testResult ifNil: [testResult := TestResult new]
! !

!HLSUnitModel methodsFor: 'actions'!

invertSelectedClasses
	self testClasses do: [:each | 
		(self unfilteredSelectedClasses includes: each)
			ifTrue: [ self unselectClass: each ]
			ifFalse: [ self selectClass: each ]].
!

invertSelectedPackages
	self testPackages do: [:each | 
		(self selectedPackages includes: each)
			ifTrue: [ self unselectPackage: each ]
			ifFalse: [ self selectPackage: each ]].
!

runTests
	| worker |
	worker := TestSuiteRunner on: self testCases.
	testResult := worker result.
	self announcer announce: (HLRunTests on: worker).
	self subscribeToTestSuite: worker.
	worker run
!

selectAllClasses
	self testClasses do: [:each | self selectClass: each].
!

selectAllPackages
	self testPackages do: [:each | self selectPackage: each].
!

selectClass: aClass
	self unfilteredSelectedClasses add: aClass.
	self announcer announce: (HLClassSelected on: aClass).
!

selectPackage: aPackage
	self selectedPackages add: aPackage.
	self announcer announce: (HLPackageSelected on: aPackage).
!

subscribeToTestSuite: aTestSuiteRunner
	currentSuite ifNotNil: [ currentSuite announcer unsubscribe: self].
	currentSuite := aTestSuiteRunner.
	currentSuite announcer 
		on: ResultAnnouncement
		send: #onResultAnnouncement:
		to: self
!

unselectClass: aClass
	self unfilteredSelectedClasses remove: aClass ifAbsent: [^self].
	self announcer announce: (HLClassUnselected on: aClass).
!

unselectPackage: aPackage
	self selectedPackages remove: aPackage ifAbsent: [^self].
	self announcer announce: (HLPackageUnselected on: aPackage).
! !

!HLSUnitModel methodsFor: 'private'!

unfilteredSelectedClasses
	^ (selectedClasses ifNil: [ selectedClasses := Set new ])
! !

!HLSUnitModel methodsFor: 'reacting'!

onResultAnnouncement: announcement
	"Propogate announcement"
	self announcer announce: announcement.
! !

HLToolListWidget subclass: #HLSUnitResultListWidget
	instanceVariableNames: ''
	package: 'Helios-SUnit'!
!HLSUnitResultListWidget commentStamp!
I group the lists that display test results!

!HLSUnitResultListWidget methodsFor: 'actions'!

performFailure: aTestCase
	aTestCase runCase
! !

!HLSUnitResultListWidget methodsFor: 'initialization'!

observeModel
	self model announcer 
		on: ResultAnnouncement
		send: #onResultAnnouncement:
		to: self
! !

!HLSUnitResultListWidget methodsFor: 'reacting'!

onResultAnnouncement: announcement
	self refresh.
! !

!HLSUnitResultListWidget methodsFor: 'rendering'!

renderItemLabel: anObject on: html
	html with: anObject class name, ' >> ', anObject selector
!

reselectItem: anObject
	self performFailure: anObject
! !

HLSUnitResultListWidget subclass: #HLSUnitErrorsListWidget
	instanceVariableNames: ''
	package: 'Helios-SUnit'!
!HLSUnitErrorsListWidget commentStamp!
I display a list of tests that have errors!

!HLSUnitErrorsListWidget methodsFor: 'accessing'!

items
	^self model testResult errors
!

label
	^'Errors'
! !

HLSUnitResultListWidget subclass: #HLSUnitFailuresListWidget
	instanceVariableNames: ''
	package: 'Helios-SUnit'!
!HLSUnitFailuresListWidget commentStamp!
I display a list of tests that have failures!

!HLSUnitFailuresListWidget methodsFor: 'accessing'!

items
	^self model testResult failures
!

label
	^'Failures'
! !

HLWidget subclass: #HLSUnitResultStatus
	instanceVariableNames: 'model'
	package: 'Helios-SUnit'!
!HLSUnitResultStatus commentStamp!
I display the status of the previous test run

1. How many tests where run.
* How many tests passed.
* How many tests failed.
* How many tests resulted in an error.!

!HLSUnitResultStatus methodsFor: 'accessing'!

model
	^ model ifNil: [model := TestResult new]
!

model: anObject
	model := anObject.
	self observeModel.
!

result
	^ self model testResult
!

statusCssClass
	^'sunit status ', self result status
!

statusInfo
	^ self printTotal, self printPasses, self printErrors, self printFailures
! !

!HLSUnitResultStatus methodsFor: 'actions'!

observeModel
	self model announcer 
		on: ResultAnnouncement
		send: #onResultAnnouncement:
		to: self
!

unregister
	super unregister.
	self model announcer unsubscribe: self.
! !

!HLSUnitResultStatus methodsFor: 'printing'!

printErrors
	^ self result errors size asString , ' errors, '
!

printFailures
	^ self result failures size asString, ' failures'
!

printPasses
	^ (self result runs - self result errors size - self result failures size) asString , ' passes, '
!

printTotal
	^ self result total asString, ' runs, '
! !

!HLSUnitResultStatus methodsFor: 'reacting'!

onResultAnnouncement: announcement
	self refresh.
! !

!HLSUnitResultStatus methodsFor: 'rendering'!

renderContentOn: html
	html div
		class: self statusCssClass;
		with: [ html span with: self statusInfo ]
! !

HLWidget subclass: #HLSUnitResults
	instanceVariableNames: 'model progressBarWidget resultStatusWidget'
	package: 'Helios-SUnit'!
!HLSUnitResults commentStamp!
I am the widget that displays the test results for a previous test run in Helios.

I display.

1. The status of the tests.
* Progress of the currently running test suite.!

!HLSUnitResults methodsFor: 'accessing'!

model
	^model
!

model: anObject
	model := anObject.
	self observeModel
!

progressBarWidget
	^progressBarWidget ifNil: [progressBarWidget := HLProgressBarWidget new
		label: '';
		yourself]
!

resultStatusWidget
	^resultStatusWidget ifNil: [resultStatusWidget := HLSUnitResultStatus new
		model: self model;
		yourself]
! !

!HLSUnitResults methodsFor: 'actions'!

unregister
	super unregister.
	self model announcer unsubscribe: self.
	self resultStatusWidget unregister.
! !

!HLSUnitResults methodsFor: 'initialization'!

observeModel
    self model announcer 
		on: HLRunTests
		send: #onRunTests:
		to: self;
		
		on: ResultAnnouncement
		send: #onResultAnnouncement:
		to: self
! !

!HLSUnitResults methodsFor: 'reacting'!

onResultAnnouncement: announcement
	[self progressBarWidget 
		updateProgress: (self model testResult runs / self model testResult total * 100) rounded] valueWithTimeout: 10
!

onRunTests: announcement
	self progressBarWidget updateProgress: 0;
		refresh.
! !

!HLSUnitResults methodsFor: 'rendering'!

renderContentOn: html
	html with: self resultStatusWidget;
		with: self progressBarWidget
! !

