Smalltalk createPackage: 'Helios-SUnit'!
HLWidget subclass: #HLSUnit
	instanceVariableNames: ''
	package: 'Helios-SUnit'!

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

