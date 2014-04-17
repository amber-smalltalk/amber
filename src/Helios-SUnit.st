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
		to: self
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

onClassSelected: anAnnouncement
	self refresh
!

onClassUnselected: anAnnouncement
	self refresh
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

onPackageSelected: anAnnouncement
	self refresh
!

onPackageUnselected: anAnnouncement
	self refresh
! !

!HLSUnitPackagesListWidget methodsFor: 'rendering'!

renderButtonsOn: html
	html button
	with: 'Run Tests';
	onClick: [ self model runTests ]
!

renderItemLabel: aPackage on: html
	html with: aPackage name
! !

!HLSUnitPackagesListWidget methodsFor: 'testing'!

isSelected: anObject
	^model selectedPackages includes: anObject
! !

HLWidget subclass: #HLSUnit
<<<<<<< variant A
	instanceVariableNames: 'model packagesListWidget resultWidget'
>>>>>>> variant B
	instanceVariableNames: 'model packagesListWidget classesListWidget resultWidget failuresWidget errorsWidget'
####### Ancestor
	instanceVariableNames: ''
======= end
	package: 'Helios-SUnit'!
<<<<<<< variant A
!HLSUnit commentStamp!
I am the main widget for running unit tests in Helios.

I provide the ability to select set of tests to run per package, and a detailed result log with passed tests, failed tests and errors.!

!HLSUnit methodsFor: 'accessing'!

model
	^ model ifNil: [ model := HLSUnitModel new ]
! !

!HLSUnit methodsFor: 'rendering'!

renderContentOn: html
	html with: (HLVerticalSplitter
        with: self packagesListWidget 
        with: self resultWidget).
	
	self packagesListWidget focus
! !

!HLSUnit methodsFor: 'widgets'!

packagesListWidget
	^ packagesListWidget ifNil: [ 
		packagesListWidget := HLSUnitPackagesListWidget on: self model ]
!

resultWidget
	^ resultWidget ifNil: [
		resultWidget := HLWidget new ]
! !
>>>>>>> variant B
!HLSUnit commentStamp!
I am the main widget for running unit tests in Helios.

I provide the ability to select set of tests to run per package, and a detailed result log with passed tests, failed tests and errors.!

!HLSUnit methodsFor: 'accessing'!

model
	^ model ifNil: [ model := HLSUnitModel new ]
! !

!HLSUnit methodsFor: 'keybindings'!

registerBindingsOn: aBindingGroup
	HLToolCommand 
		registerConcreteClassesOn: aBindingGroup 
		for: self model
! !

!HLSUnit methodsFor: 'rendering'!

renderContentOn: html
	html with: (HLContainer with:  (
		HLVerticalSplitter 
			with: (HLVerticalSplitter
				with: self packagesListWidget 
        		with: self classesListWidget)
			with: (HLHorizontalSplitter 
				with: self resultWidget
				with: (HLHorizontalSplitter 
					with: self failuresWidget
					with: self errorsWidget)))).
	
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
####### Ancestor
======= end

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

<<<<<<< variant A
HLModel subclass: #HLSUnitModel
	instanceVariableNames: 'selectedPackages'
	package: 'Helios-SUnit'!

!HLSUnitModel methodsFor: 'accessing'!

selectedPackages
	^ selectedPackages ifNil: [ selectedPackages := Set new ]
!

testPackages
	"Answer all packages containing concrete subclasses of TestCase"
	
	^ self environment packages 
		select: [ :each | each isTestPackage ]
! !

!HLSUnitModel methodsFor: 'actions'!

selectPackage: aPackage
	self packages add: aPackage
!

unselectPackage: aPackage
	self packages remove: aPackage ifAbsent: []
! !

HLWidget subclass: #HLSUnitPackagesListWidget
	instanceVariableNames: 'model'
	package: 'Helios-SUnit'!
!HLSUnitPackagesListWidget commentStamp!
I display a list of packages for which unit tests are associated (packages containing subclasses of `TestCase`).!

!HLSUnitPackagesListWidget methodsFor: 'accessing'!

model
	^ model
!

model: anObject
	model := anObject
! !

!HLSUnitPackagesListWidget class methodsFor: 'instance creation'!

on: aSUnitModel
	^ self new
		model: aSUnitModel;
		yourself
! !

>>>>>>> variant B
HLModel subclass: #HLSUnitModel
	instanceVariableNames: 'selectedPackages selectedClasses testResult currentSuite'
	package: 'Helios-SUnit'!

!HLSUnitModel methodsFor: 'accessing'!

currentSuite
	^currentSuite
!

selectedClasses
	^ (self privateSelectedClasses) select: [:each |
		self selectedPackages includes: each package]
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
			(each includesBehavior: TestCase) and: [ 
				each isAbstract not ] ] ) ].
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

runTests
	| worker |
	worker := TestSuiteRunner on: self testCases.
	testResult := worker result.
	self announcer announce: (HLRunTests on: worker).
	self subscribeToTestSuite: worker.
	worker run
!

selectAllPackages
	self testPackages do: [:each | self selectPackage: each]
!

selectClass: aClass
	self privateSelectedClasses add: aClass.
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
	self privateSelectedClasses remove: aClass ifAbsent: [^self].
	self announcer announce: (HLClassUnselected on: aClass).
!

unselectPackage: aPackage
	self selectedPackages remove: aPackage ifAbsent: [^self].
	self announcer announce: (HLPackageUnselected on: aPackage).
! !

!HLSUnitModel methodsFor: 'private'!

privateSelectedClasses
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

!HLSUnitFailuresListWidget methodsFor: 'accessing'!

label
	^'Failures'
! !

!HLSUnitFailuresListWidget methodsFor: 'as yet unclassified'!

items
	^self model testResult failures
! !

HLWidget subclass: #HLSUnitResultStatus
	instanceVariableNames: 'model'
	package: 'Helios-SUnit'!

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

!HLSUnitResultStatus methodsFor: 'initialization'!

observeModel
	self model announcer 
		on: ResultAnnouncement
		send: #onResultAnnouncement:
		to: self
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

####### Ancestor
======= end
