Smalltalk current createPackage: 'SUnit'!
Object subclass: #ResultAnnouncement
	instanceVariableNames: 'result'
	package: 'SUnit'!
!ResultAnnouncement commentStamp!
I get signaled when a `TestCase` has been run.

My instances hold the result (instance of `TestResult`) of the test run.!

!ResultAnnouncement methodsFor: 'accessing'!

result
	^result
!

result: aTestResult
	result := aTestResult
! !

Object subclass: #TestCase
	instanceVariableNames: 'testSelector asyncTimeout context'
	package: 'SUnit'!
!TestCase commentStamp!
I am an implementation of the command pattern to run a test.

## API

My instances are created with the class method `#selector:`,
passing the symbol that names the method to be executed when the test case runs.

When you discover a new fixture, subclass `TestCase` and create a `#test...` method for the first test.
As that method develops and more `#test...` methods are added, you will find yourself refactoring temps
into instance variables for the objects in the fixture and overriding `#setUp` to initialize these variables.
As required, override `#tearDown` to nil references, release objects and deallocate.!

!TestCase methodsFor: 'accessing'!

context: aRunningTestContext
	context := aRunningTestContext
!

selector
	^testSelector
!

setTestSelector: aSelector
	testSelector := aSelector
! !

!TestCase methodsFor: 'async'!

async: aBlock
	| c |
	self errorIfNotAsync: '#async'.
	c := context.
	^ [ self isAsync ifTrue: [ c execute: aBlock ] ]
!

finished
	self errorIfNotAsync: '#finished'.
	asyncTimeout := nil
!

timeout: aNumber
	"Set a grace time timeout in milliseconds to run the test asynchronously"
	
	asyncTimeout ifNotNil: [ asyncTimeout clearTimeout ].
	
	"to allow #async: message send without throwing an error"
	asyncTimeout := 0.
	
	asyncTimeout := (self async: [
		self assert: false description: 'SUnit grace time exhausted' ])
			valueWithTimeout: aNumber
! !

!TestCase methodsFor: 'error handling'!

errorIfNotAsync: aString
	self isAsync ifFalse: [
		self error: aString, ' used without prior #timeout:' ]
! !

!TestCase methodsFor: 'private'!

signalFailure: aString
	TestFailure new
		messageText: aString;
		signal
! !

!TestCase methodsFor: 'running'!

performTest
	asyncTimeout := nil.
	self perform: self selector
!

runCase
	"Runs a test case in isolated context, leaking all errors."

	(TestContext testCase: self) start
!

setUp
!

tearDown
! !

!TestCase methodsFor: 'testing'!

assert: aBoolean
	self assert: aBoolean description: 'Assertion failed'
!

assert: aBoolean description: aString
	aBoolean ifFalse: [self signalFailure: aString]
!

assert: actual equals: expected
	^ self assert: (actual = expected) description: 'Expected: ', expected printString, ' but was: ', actual printString
!

deny: aBoolean
	self assert: aBoolean not
!

isAsync
	^asyncTimeout notNil
!

should: aBlock
	self assert: aBlock value
!

should: aBlock raise: anExceptionClass
	self assert: ([aBlock value. false]
		on: anExceptionClass
		do: [:ex | true])
!

shouldnt: aBlock raise: anExceptionClass
	self assert: ([aBlock value. true]
		on: anExceptionClass
		do: [:ex | false])
! !

!TestCase class methodsFor: 'accessing'!

allTestSelectors
	| selectors |
	selectors := self testSelectors.
	self shouldInheritSelectors ifTrue: [
		selectors addAll: self superclass allTestSelectors].
	^selectors
!

buildSuite
	^self allTestSelectors collect: [:each | self selector: each]
!

lookupHierarchyRoot
	^TestCase
!

selector: aSelector
	^self new
		setTestSelector: aSelector;
		yourself
!

testSelectors
	^self methodDictionary keys select: [:each | each match: '^test']
! !

!TestCase class methodsFor: 'helios'!

heliosClass
	^ 'test'
! !

!TestCase class methodsFor: 'testing'!

isAbstract
	^ self name = 'TestCase'
!

shouldInheritSelectors
	^self ~= self lookupHierarchyRoot
! !

Object subclass: #TestContext
	instanceVariableNames: 'testCase'
	package: 'SUnit'!
!TestContext commentStamp!
I govern running a particular test case.

My main added value is `#execute:` method which runs a block as a part of test case (restores context, nilling it afterwards, cleaning/calling `#tearDown` as appropriate for sync/async scenario).!

!TestContext methodsFor: 'accessing'!

testCase: aTestCase
	testCase := aTestCase
! !

!TestContext methodsFor: 'running'!

execute: aBlock
	| failed |
	
	testCase context: self.
	[
		failed := true.
		aBlock value.
		failed := false
	]
		ensure: [
			testCase context: nil.
			
			(failed and: [ testCase isAsync ]) ifTrue: [
				testCase finished ].
			testCase isAsync ifFalse: [
				testCase tearDown ] ]
!

start
	self execute: [
		testCase setUp.
		testCase performTest ]
! !

!TestContext class methodsFor: 'instance creation'!

testCase: aTestCase
	^self new
		testCase: aTestCase;
		yourself
! !

TestContext subclass: #ReportingTestContext
	instanceVariableNames: 'finished result'
	package: 'SUnit'!
!ReportingTestContext commentStamp!
I add `TestResult` reporting to `TestContext`.

Errors are caught and save into a `TestResult`,
When test case is finished (which can be later for async tests), a callback block is executed; this is used by a `TestSuiteRunner`.!

!ReportingTestContext methodsFor: 'accessing'!

finished: aBlock
	finished := aBlock
!

result: aTestResult
	result := aTestResult
! !

!ReportingTestContext methodsFor: 'private'!

withErrorReporting: aBlock
	[ aBlock
		on: TestFailure
		do: [ :ex | result addFailure: testCase ]
	]
		on: Error
		do: [ :ex | result addError: testCase ]
! !

!ReportingTestContext methodsFor: 'running'!

execute: aBlock
	[
		self withErrorReporting: [ super execute: aBlock ]
	]
		ensure: [
			testCase isAsync ifFalse: [
				result increaseRuns. finished value ] ]
! !

!ReportingTestContext class methodsFor: 'instance creation'!

testCase: aTestCase result: aTestResult finished: aBlock
	^(super testCase: aTestCase)
		result: aTestResult;
		finished: aBlock;
		yourself
! !

Error subclass: #TestFailure
	instanceVariableNames: ''
	package: 'SUnit'!
!TestFailure commentStamp!
I am raised when the boolean parameter of an #`assert:` or `#deny:` call is the opposite of what the assertion claims.

The test framework distinguishes between failures and errors.
A failure is an event whose possibiity is explicitly anticipated and checked for in an assertion,
whereas an error is an unanticipated problem like a division by 0 or an index out of bounds.!

Object subclass: #TestResult
	instanceVariableNames: 'timestamp runs errors failures total'
	package: 'SUnit'!
!TestResult commentStamp!
I implement the collecting parameter pattern for running a bunch of tests.

My instances hold tests that have run, sorted into the result categories of passed, failures and errors.

`TestResult` is an interesting object to subclass or substitute. `#runCase:` is the external protocol you need to reproduce!

!TestResult methodsFor: 'accessing'!

addError: anError
	self errors add: anError
!

addFailure: aFailure
	self failures add: aFailure
!

errors
	^errors
!

failures
	^failures
!

increaseRuns
	runs := runs + 1
!

runs
	^runs
!

status
	^self errors isEmpty
		ifTrue: [
			self failures isEmpty
				ifTrue: ['success']
				ifFalse: ['failure']]
		ifFalse: ['error']
!

timestamp
	^timestamp
!

total
	^total
!

total: aNumber
	total := aNumber
! !

!TestResult methodsFor: 'initialization'!

initialize
	super initialize.
	timestamp := Date now.
	runs := 0.
	errors := Array new.
	failures := Array new.
	total := 0
! !

!TestResult methodsFor: 'running'!

nextRunDo: aBlock
"Runs aBlock with index of next run
or does nothing if no more runs"
^self runs == self total
	ifFalse: [ aBlock value: self runs + 1 ]
!

runCase: aTestCase
	[[ self increaseRuns.
		aTestCase runCase]
	on: TestFailure do: [:ex | self addFailure: aTestCase]]
	on: Error do: [:ex | self addError: aTestCase]
! !

Object subclass: #TestSuiteRunner
	instanceVariableNames: 'suite result announcer runNextTest'
	package: 'SUnit'!
!TestSuiteRunner commentStamp!
I am responsible for running a collection (`suite`) of tests.

## API

Instances should be created using the class-side `#on:` method, taking a collection of tests to run as parameter.
To run the test suite, use `#run`.!

!TestSuiteRunner methodsFor: 'accessing'!

announcer
	^announcer
!

result
	^result
!

suite: aCollection
	suite := aCollection
! !

!TestSuiteRunner methodsFor: 'actions'!

resume
	runNextTest fork.
	announcer announce: (ResultAnnouncement new result: result)
!

run
	result total: suite size.
	self resume
! !

!TestSuiteRunner methodsFor: 'initialization'!

initialize
	super initialize.
	announcer := Announcer new.
	result := TestResult new.
	runNextTest := [ | runs | runs := result runs. runs < result total ifTrue: [ (self contextOf: runs + 1) start ]].
! !

!TestSuiteRunner methodsFor: 'private'!

contextOf: anInteger
	^ReportingTestContext testCase: (suite at: anInteger) result: result finished: [ self resume ]
! !

!TestSuiteRunner class methodsFor: 'instance creation'!

new
	self shouldNotImplement
!

on: aCollection
	^super new suite: aCollection
! !

