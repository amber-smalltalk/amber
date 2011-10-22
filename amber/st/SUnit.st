Smalltalk current createPackage: 'SUnit' properties: #{}!
Object subclass: #TestCase
	instanceVariableNames: 'testSelector'
	category: 'SUnit'!

!TestCase methodsFor: 'accessing'!

setTestSelector: aSelector
	testSelector := aSelector
!

selector
	^testSelector
! !

!TestCase methodsFor: 'private'!

signalFailure: aString
	TestFailure new
		messageText: aString;
		signal
! !

!TestCase methodsFor: 'running'!

setUp
!

tearDown
!

runCaseFor: aTestResult
	self setUp.
	aTestResult increaseRuns.
	self performTestFor: aTestResult.
	self tearDown
!

performTestFor: aResult
	[[self perform: self selector]
		on: TestFailure do: [:ex | aResult addFailure: self]]
		on: Error do: [:ex | aResult addError: self]
! !

!TestCase methodsFor: 'testing'!

assert: aBoolean
	self assert: aBoolean description: 'Assertion failed'
!

deny: aBoolean
	self assert: aBoolean not
!

assert: expected equals: actual
	^ self assert: (expected = actual) description: 'Expected: ', expected asString, ' but was: ', actual asString
!

assert: aBoolean description: aString
	aBoolean ifFalse: [self signalFailure: aString]
! !

!TestCase class methodsFor: 'accessing'!

testSelectors
	^self methodDictionary keys select: [:each | each match: '^test']
!

selector: aSelector
	^self new
		setTestSelector: aSelector;
		yourself
!

lookupHierarchyRoot
	^TestCase
!

allTestSelectors
	| selectors |
	selectors := self testSelectors.
	self shouldInheritSelectors ifTrue: [
		selectors addAll: self superclass allTestSelectors].
	^selectors
!

buildSuite
	^self allTestSelectors collect: [:each | self selector: each]
! !

!TestCase class methodsFor: 'testing'!

shouldInheritSelectors
	^self ~= self lookupHierarchyRoot
! !

Error subclass: #TestFailure
	instanceVariableNames: ''
	category: 'SUnit'!

Object subclass: #TestResult
	instanceVariableNames: 'timestamp runs errors failures total'
	category: 'SUnit'!

!TestResult methodsFor: 'accessing'!

timestamp
	^timestamp
!

errors
	^errors
!

failures
	^failures
!

total
	^total
!

total: aNumber
	total := aNumber
!

addError: anError
	self errors add: anError
!

addFailure: aFailure
	self failures add: aFailure
!

runs
	^runs
!

increaseRuns
	runs := runs + 1
!

status
	^self errors isEmpty 
		ifTrue: [
			self failures isEmpty 
				ifTrue: ['success']
				ifFalse: ['failure']]
		ifFalse: ['error']
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

