Smalltalk createPackage: 'Helios-Workspace-Tests'!
TestCase subclass: #HLCodeModelTest
	instanceVariableNames: 'model'
	package: 'Helios-Workspace-Tests'!

!HLCodeModelTest methodsFor: 'setup / teardown'!

setUp
	model := HLCodeModel new
		receiver: DoIt new;
		yourself.
! !

!HLCodeModelTest methodsFor: 'testing'!

testDoItDangerously
	self should: [ model doItDangerously: 'nothing' ] raise: Error.
	self shouldnt: [ model doItDangerously: '4 + 3' ] raise: Error.
! !

TestCase subclass: #HLCodeWidgetTest
	instanceVariableNames: ''
	package: 'Helios-Workspace-Tests'!

!HLCodeWidgetTest methodsFor: 'tests'!

testKeyMap
	"Key maps are a collection of associations."
	self assert: (HLCodeWidget pcKeyMap isKindOf: HashedCollection).
	self assert: (HLCodeWidget macKeyMap isKindOf: HashedCollection)
! !

