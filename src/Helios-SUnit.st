Smalltalk createPackage: 'Helios-SUnit'!
HLWidget subclass: #HLSUnit
	instanceVariableNames: 'model packagesListWidget resultWidget'
	package: 'Helios-SUnit'!
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

