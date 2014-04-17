Smalltalk createPackage: 'Helios-Commands-SUnit'!
HLToolCommand subclass: #HLSUnitCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-SUnit'!

!HLSUnitCommand class methodsFor: 'testing'!

isValidFor: aModel
	^ aModel isKindOf: HLSUnitModel
! !

HLSUnitCommand subclass: #HLSUnitRunTests
	instanceVariableNames: ''
	package: 'Helios-Commands-SUnit'!

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

!HLSUnitSelectAllCommand class methodsFor: 'accessing'!

key
	^ 'a'
!

label
	^ 'Select all'
! !

HLSUnitSelectAllCommand subclass: #HLSUnitSelectAllPackagesCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-SUnit'!

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

