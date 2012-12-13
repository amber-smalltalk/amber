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

Object subclass: #TestCase
	instanceVariableNames: 'testSelector'
	package: 'SUnit'!

!TestCase methodsFor: 'accessing'!

selector
	^testSelector
!

setTestSelector: aSelector
	testSelector := aSelector
! !

!TestCase methodsFor: 'private'!

signalFailure: aString
	TestFailure new
		messageText: aString;
		signal
! !

!TestCase methodsFor: 'running'!

performTest
	self perform: self selector
!

runCase
	[	self setUp.
		self performTest ] ensure: [
		self tearDown.
		"self cleanUpInstanceVariables" ]
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

!TestResult methodsFor: 'running'!

nextRunDo: aBlock
"Runs aBlock with index of next run
or does nothing if no more runs"
^self runs == self total
	ifFalse: [ aBlock value: self runs + 1 ]
!

runCase: aTestCase
	[[	self increaseRuns.
    	aTestCase runCase]
	on: TestFailure do: [:ex | self addFailure: aTestCase]]
	on: Error do: [:ex | self addError: aTestCase]
! !

Object subclass: #TestSuiteRunner
	instanceVariableNames: 'suite result announcer'
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

run
	| worker |
	result total: suite size.
    announcer announce: (ResultAnnouncement new result: result).
    worker := [ result nextRunDo: [ :index |
		[ result runCase: (suite at: index) ]
		ensure: [ worker valueWithTimeout: 0.
        	announcer announce: (ResultAnnouncement new result: result) ]]].
	(suite size min: 25) timesRepeat: [ worker valueWithTimeout: 0 ]
! !

!TestSuiteRunner methodsFor: 'initialization'!

initialize
	super initialize.
	announcer := Announcer new.
    result := TestResult new
! !

!TestSuiteRunner class methodsFor: 'instance creation'!

new
	self shouldNotImplement
!

on: aCollection
	^super new suite: aCollection
! !

