Smalltalk current createPackage: 'Helios-Workspace-Tests'!
TestCase subclass: #HLCodeWidgetTest
	instanceVariableNames: ''
	package: 'Helios-Workspace-Tests'!

!HLCodeWidgetTest methodsFor: 'as yet unclassified'!

testKeyMap
"Key maps are a collection of associations."
self assert: ( HLCodeWidget pcKeyMap isKindOf: HashedCollection ).
self assert: ( HLCodeWidget macKeyMap isKindOf: HashedCollection ).
! !

