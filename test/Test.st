Smalltalk current createPackage: 'Test' properties: #{}!
Object subclass: #NodeTestRunner
	instanceVariableNames: ''
	package: 'Test'!

!NodeTestRunner class methodsFor: 'not yet classified'!

initialize
	self runTestSuite
!

runTestSuite
	| result |
	result := TestResult new.

	((TestCase allSubclasses
		select: [ :each | each isAbstract not ])
		do: [ :each | each buildSuite do: [ :suite | suite runCaseFor: result ] ]).

	console log: result runs asString, ' tests run, ', result failures size asString, ' failures, ', result errors size asString, ' errors.'.

	result failures isEmpty ifFalse: [ 
		self throw: result failures first class name, ' >> ', result failures first selector, ' is failing!!' ].
	result errors isEmpty ifFalse: [
		self throw: result errors first class name, ' >> ', result errors first selector, ' has errors!!' ].
! !

