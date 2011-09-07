Object subclass: #TestCase
	instanceVariableNames: 'testedClass'
	category: 'SUnit'!

!TestCase methodsFor: 'accessing'!

testedClass
	^testedClass
!

testedClass: aClass
	testedClass := aClass
! !

!TestCase methodsFor: 'private'!

cleanUpInstanceVariables
	self class instanceVariableNames do: [ :name |
		name = 'testSelector' ifFalse: [
			self instVarAt: name put: nil ]]
!

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

methods
	^self class methodDictionary keys select: [:each | each match: '^test']
!

runCaseFor: aTestResult
	[self setUp.
	self performTestFor: aTestResult]
		on: Error
		do: [:ex |
			self tearDown.
			self cleanUpInstanceVariables.
			ex signal].
	self tearDown.
	self cleanUpInstanceVariables
!

performTestFor: aResult
	self methods do: [:each | 
		[[self perform: each]
			on: TestFailure do: [:ex | aResult addFailure: self class name, '>>', each, ': ', ex messageText]]
			on: Error do: [:ex | aResult addError: self class name, '>>', each, ': ', ex messageText].
		aResult increaseRuns]
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

