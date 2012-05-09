Smalltalk current createPackage: 'SUnit-Tests' properties: #{}!
TestCase subclass: #TestCaseTest
	instanceVariableNames: ''
	package: 'SUnit-Tests'!

!TestCaseTest methodsFor: 'not yet classified'!

testShouldRaiseException

	self should: [ 42 doSomething ] raise: MessageNotUnderstood.
!

testShouldntRaiseException

	self shouldnt: [ 4 + 2 ] raise: Error.
! !

