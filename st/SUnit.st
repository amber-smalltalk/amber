Smalltalk current createPackage: 'SUnit' properties: #{}!
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

performTestFor: aResult
	[[self perform: self selector]
		on: TestFailure do: [:ex | aResult addFailure: self]]
		on: Error do: [:ex | aResult addError: self]
!

runCaseFor: aTestResult
	self setUp.
	aTestResult increaseRuns.
	self performTestFor: aTestResult.
	self tearDown
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

