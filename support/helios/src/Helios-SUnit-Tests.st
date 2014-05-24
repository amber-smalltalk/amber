Smalltalk createPackage: 'Helios-SUnit-Tests'!
TestCase subclass: #HLSUnitModelTest
	instanceVariableNames: 'model'
	package: 'Helios-SUnit-Tests'!
!HLSUnitModelTest commentStamp!
Test cases for the functionality of  `HLSUnitModel`!

!HLSUnitModelTest methodsFor: 'accessing'!

thisPackage
	^self class package
! !

!HLSUnitModelTest methodsFor: 'initializing'!

setUp
	super setUp.
	model := HLSUnitModel new
! !

!HLSUnitModelTest methodsFor: 'tests'!

testClassBecomesAvailable
	self assert: model testClasses isEmpty.
	model selectPackage: self thisPackage.
	self assert: (model testClasses includes: self class).
!

testEmptyTestResults
	self assert: (model testResult isKindOf: TestResult)
!

testInvertSelectedClasses
	model selectAllPackages.
	model selectAllClasses.
	model unselectClass: self class.
	self assert: model selectedClasses notEmpty.
	self assert: model selectedClasses size equals: model testClasses size - 1.
	model invertSelectedClasses.
	self assert: model selectedClasses size equals: 1.
	self assert: model selectedClasses anyOne equals: self class.
!

testInvertSelectedPackages
	model selectAllPackages.
	model unselectPackage: self thisPackage.
	self assert: model selectedPackages notEmpty.
	self assert: model selectedPackages size equals: model testPackages size - 1.
	model invertSelectedPackages.
	self assert: model selectedPackages size equals: 1.
	self assert: model selectedPackages anyOne equals: self thisPackage.
!

testSelectAllClasses
	model selectAllPackages.
	self assert: model testClasses notEmpty.
	model selectAllClasses.
	self assert: model selectedClasses size equals: model testClasses size
!

testSelectAllPackages
	self assert: model selectedPackages isEmpty.
	model selectAllPackages.
	self assert: model selectedPackages size equals: model testPackages size
!

testSelectClass
	| announcementFired |
	model selectPackage: self thisPackage.
	self assert: model selectedClasses isEmpty.
	model announcer on: HLClassSelected
		do: [ announcementFired := true ]
		for: self.
	model selectClass: self class.
	self assert: model selectedClasses anyOne equals: self class.
	self assert: announcementFired.
!

testSelectPackage
	| announcementFired |
	self assert: model selectedPackages isEmpty.
	model announcer on: HLPackageSelected
		do: [ announcementFired := true ]
		for: self.
	model selectPackage: self thisPackage.
	self assert: model selectedPackages anyOne equals: self thisPackage.
	self assert: announcementFired
!

testSelectedClassNotListedIfPackageUnselected
	model selectPackage: self thisPackage.
	model selectClass: self class.
	self assert: model selectedClasses anyOne equals: self class.
	model unselectPackage: self thisPackage.
	self assert: model selectedClasses isEmpty.
!

testTestClassHasOnlyTestClasses
	| notATestClass |
	notATestClass := Object subclass: #HLNotATestClass
		instanceVariableNames: ''
		package: self class category.
	model selectPackage: self thisPackage.
	self deny: (model testClasses includes: notATestClass).
	Smalltalk removeClass: notATestClass.
!

testTestPackages
	self assert: model testPackages notEmpty.
	self assert: (model testPackages anySatisfy: [:each | each = self thisPackage]).
!

testUnselectClass
	| announcementFired |
	model selectPackage: self thisPackage.
	model selectClass: self class.
	model announcer on: HLClassUnselected
		do: [ announcementFired := true ]
		for: self.
	model unselectClass: self class.
	self assert: model selectedClasses isEmpty.
	self assert: announcementFired
!

testUnselectPackage
	| announcementFired |
	model selectPackage: self thisPackage.
	model announcer on: HLPackageUnselected
		do: [ announcementFired := true ]
		for: self.
	model unselectPackage: self thisPackage.
	self assert: model selectedPackages isEmpty.
	self assert: announcementFired.
! !

