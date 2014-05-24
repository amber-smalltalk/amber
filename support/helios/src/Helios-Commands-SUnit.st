Smalltalk createPackage: 'Helios-Commands-SUnit'!
HLToolCommand subclass: #HLSUnitCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-SUnit'!
!HLSUnitCommand commentStamp!
I group the commands pertaining to Helios-SUnit (`HLSUnitModel`)!

!HLSUnitCommand class methodsFor: 'testing'!

isValidFor: aModel
	^ aModel isKindOf: HLSUnitModel
! !

HLSUnitCommand subclass: #HLSUnitInvertSelectedCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-SUnit'!
!HLSUnitInvertSelectedCommand commentStamp!
I group the commands that invert selections!

!HLSUnitInvertSelectedCommand class methodsFor: 'accessing'!

key
	^ 'i'
!

label
	^'Invert selection'
! !

HLSUnitInvertSelectedCommand subclass: #HLSUnitInvertSelectedClassesCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-SUnit'!
!HLSUnitInvertSelectedClassesCommand commentStamp!
Invert the currently selected classes on a `HLSUnitModel`!

!HLSUnitInvertSelectedClassesCommand methodsFor: 'accessing'!

category
	^'Classes'
! !

!HLSUnitInvertSelectedClassesCommand methodsFor: 'executing'!

execute
	self model invertSelectedClasses
! !

!HLSUnitInvertSelectedClassesCommand methodsFor: 'testing'!

isActive
	^model selectedPackages notEmpty
! !

!HLSUnitInvertSelectedClassesCommand class methodsFor: 'accessing'!

key
	^ 'c'
!

label
	^ 'Invert selected classes'
! !

HLSUnitInvertSelectedCommand subclass: #HLSUnitInvertSelectedPackagesCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-SUnit'!
!HLSUnitInvertSelectedPackagesCommand commentStamp!
Invert the currently selected packages on a `HLSUnitModel`!

!HLSUnitInvertSelectedPackagesCommand methodsFor: 'accessing'!

category
	^'Packages'
! !

!HLSUnitInvertSelectedPackagesCommand methodsFor: 'executing'!

execute
	self model invertSelectedPackages
! !

!HLSUnitInvertSelectedPackagesCommand methodsFor: 'testing'!

isActive
	^true
! !

!HLSUnitInvertSelectedPackagesCommand class methodsFor: 'accessing'!

key
	^ 'p'
!

label
	^ 'Invert selected packages'
! !

HLSUnitCommand subclass: #HLSUnitRunTests
	instanceVariableNames: ''
	package: 'Helios-Commands-SUnit'!
!HLSUnitRunTests commentStamp!
Run the test cases in the currently selected classes on a `HLSUnitModel`!

!HLSUnitRunTests methodsFor: 'executing'!

execute
	self model runTests
! !

!HLSUnitRunTests methodsFor: 'testing'!

isActive
	^true
! !

!HLSUnitRunTests class methodsFor: 'accessing'!

key
	^'r'
!

label
	^'Run Tests'
! !

HLSUnitCommand subclass: #HLSUnitSelectAllCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-SUnit'!
!HLSUnitSelectAllCommand commentStamp!
I group the select all commands!

!HLSUnitSelectAllCommand class methodsFor: 'accessing'!

key
	^ 'a'
!

label
	^ 'Select all'
! !

HLSUnitSelectAllCommand subclass: #HLSUnitSelectAllClassesCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-SUnit'!
!HLSUnitSelectAllClassesCommand commentStamp!
Select all available test classes based on what packages are selected on a `HLSUnitModel`!

!HLSUnitSelectAllClassesCommand methodsFor: 'accessing'!

category
	^'Classes'
! !

!HLSUnitSelectAllClassesCommand methodsFor: 'executing'!

execute
	self model selectAllClasses
! !

!HLSUnitSelectAllClassesCommand methodsFor: 'testing'!

isActive
	^model selectedPackages notEmpty
! !

!HLSUnitSelectAllClassesCommand class methodsFor: 'accessing'!

key
	^ 'c'
!

label
	^ 'Select all classes'
! !

HLSUnitSelectAllCommand subclass: #HLSUnitSelectAllPackagesCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-SUnit'!
!HLSUnitSelectAllPackagesCommand commentStamp!
Select all packages with test cases on a `HLSUnitModel`!

!HLSUnitSelectAllPackagesCommand methodsFor: 'accessing'!

category
	^'Packages'
! !

!HLSUnitSelectAllPackagesCommand methodsFor: 'executing'!

execute
	self model selectAllPackages
! !

!HLSUnitSelectAllPackagesCommand methodsFor: 'testing'!

isActive
	^true
! !

!HLSUnitSelectAllPackagesCommand class methodsFor: 'accessing'!

key
	^ 'p'
!

label
	^ 'Select all packages'
! !

