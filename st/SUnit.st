Smalltalk current createPackage: 'SUnit' properties: #{}!
Object subclass: #ResultAnnouncement
	instanceVariableNames: 'result'
	package: 'SUnit'!

!ResultAnnouncement methodsFor: 'accessing'!

result
	^result
!

result: aTestResult
	result := aTestResult
! !

Object subclass: #RunningTestContext
	instanceVariableNames: 'finished testCase result step'
	package: 'SUnit'!

!RunningTestContext methodsFor: 'accessing'!

finished: aBlock
	finished := aBlock
!

result: aTestResult
	result := aTestResult
!

testCase: aTestCase
	testCase := aTestCase
! !

!RunningTestContext methodsFor: 'private'!

exception: anException ifNotAsync: aBlock
	testCase isAsync
		ifTrue: [ step := [ testCase finished. anException signal ]]
		ifFalse: [ aBlock value ]
! !

!RunningTestContext methodsFor: 'running'!

execute: aBlock
    step := aBlock.
	[ step isNil ] whileFalse: [
	    testCase context: self.
		[[[	step
        		ensure: [ testCase context: nil. step := nil. testCase isAsync ifFalse: [ testCase tearDown ]]]
				on: TestFailure do: [:ex | self exception: ex ifNotAsync: [ result addFailure: testCase]]]
				on: Error do: [:ex | self exception: ex ifNotAsync: [ result addError: testCase]]]
				ensure: [ testCase isAsync ifFalse: [ result increaseRuns. finished value ]]]
!

start
	self execute: [ testCase setUp. testCase performTest ]
! !

!RunningTestContext class methodsFor: 'instance creation'!

testCase: aTestCase result: aTestResult finished: aBlock
	^self new
        testCase: aTestCase;
        result: aTestResult;
        finished: aBlock;
        yourself
! !

RunningTestContext subclass: #ErroringTestContext
	instanceVariableNames: ''
	package: 'SUnit'!

!ErroringTestContext methodsFor: 'private'!

exception: anException ifNotAsync: aBlock
	anException signal
! !

!ErroringTestContext class methodsFor: 'instance creation'!

testCase: aTestCase
	^self
        testCase: aTestCase
        result: TestResult new
        finished: []
! !

Object subclass: #TestCase
	instanceVariableNames: 'testSelector asyncTimeout context'
	package: 'SUnit'!

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
	self mustBeAsync: '#async'.
    c := context.
    ^[ self isAsync ifTrue: [ c execute: aBlock ]]
!

finished
	self mustBeAsync: '#finished'.
	asyncTimeout := nil
!

graceTime: millis
	asyncTimeout := true
!

isAsync
	^asyncTimeout notNil
!

mustBeAsync: aString
	self isAsync ifFalse: [ self error: aString, ' used without prior #graceTime:' ]
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

	(ErroringTestContext testCase: self) start
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

assert: expected equals: actual
	^ self assert: (expected = actual) description: 'Expected: ', expected asString, ' but was: ', actual asString
!

deny: aBoolean
	self assert: aBoolean not
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

!TestCase class methodsFor: 'testing'!

isAbstract
	^ self name = 'TestCase'
!

shouldInheritSelectors
	^self ~= self lookupHierarchyRoot
! !

Error subclass: #TestFailure
	instanceVariableNames: ''
	package: 'SUnit'!

Object subclass: #TestResult
	instanceVariableNames: 'timestamp runs errors failures total'
	package: 'SUnit'!

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

Object subclass: #TestSuiteRunner
	instanceVariableNames: 'suite result announcer runNextTest'
	package: 'SUnit'!

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
   	^RunningTestContext testCase: (suite at: anInteger) result: result finished: [ self resume ]
! !

!TestSuiteRunner class methodsFor: 'instance creation'!

new
	self shouldNotImplement
!

on: aCollection
	^super new suite: aCollection
! !

