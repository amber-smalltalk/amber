Smalltalk current createPackage: 'SUnit-Tests' properties: #{}!
TestCase subclass: #ExampleSetTest
	instanceVariableNames: 'empty full'
	package: 'SUnit-Tests'!
!ExampleSetTest commentStamp!
ExampleSetTest is taken from Pharo 1.4.

THe purpose of this class is to demonstrate a simple use case of the test framework.!

!ExampleSetTest methodsFor: 'running'!

setUp
	empty := Set new.
	full := Set with: 5 with: #abc
! !

!ExampleSetTest methodsFor: 'tests'!

testAdd
	empty add: 5.
	self assert: (empty includes: 5)
!

testGrow
	empty addAll: (1 to: 100).
	self assert: empty size = 100
!

testIllegal
	self 
		should: [empty at: 5] 
		raise: Error.
	self 
		should: [empty at: 5 put: #abc] 
		raise: Error
!

testIncludes
	self assert: (full includes: 5).
	self assert: (full includes: #abc)
!

testOccurrences
	self assert: (empty occurrencesOf: 0) = 0.
	self assert: (full occurrencesOf: 5) = 1.
	full add: 5.
	self assert: (full occurrencesOf: 5) = 1
!

testRemove
	full remove: 5.
	self assert: (full includes: #abc).
	self deny: (full includes: 5)
! !

TestCase subclass: #SUnitAsyncTest
	instanceVariableNames: 'flag'
	package: 'SUnit-Tests'!

!SUnitAsyncTest methodsFor: 'helpers'!

fakeError
	flag := 'bad'.
	self graceTime: 10.
    flag := (self async: [ flag := 'ok'. self error: 'Intentional' ]) valueWithTimeout: 5
!

fakeErrorFailingInTearDown
	flag := 'bad'.
	self graceTime: 10.
    flag := (self async: [ self error: 'Intentional' ]) valueWithTimeout: 5
!

fakeFailure
	flag := 'bad'.
	self graceTime: 10.
    flag := (self async: [ flag := 'ok'. self assert: false ]) valueWithTimeout: 5
!

fakeMultipleGraceTimeFailing
	self graceTime: 100.
    (self async: [
		self graceTime: 5.
        (self async: [ self finished ]) valueWithTimeout: 10
	]) valueWithTimeout: 5
!

fakeMultipleGraceTimePassing
	self graceTime: 10.
    (self async: [
		self graceTime: 20.
        (self async: [ self finished ]) valueWithTimeout: 10
	]) valueWithTimeout: 5
!

fakeTimeout
	self graceTime: 4.
    (self async: [ self finished ]) valueWithTimeout: 5
! !

!SUnitAsyncTest methodsFor: 'private'!

sortedSelectors: aCollection
	^(aCollection collect: [:each | each selector]) sorted
! !

!SUnitAsyncTest methodsFor: 'running'!

setUp
	flag := 'ok'
!

tearDown
	self assert: 'ok' equals: flag
! !

!SUnitAsyncTest methodsFor: 'tests'!

testAsyncErrorsAndFailures
	| suite runner result assertBlock |
	suite := #('fakeError' 'fakeErrorFailingInTearDown' 'fakeFailure' 'testPass') collect: [ :each | self class selector: each ].
    runner := TestSuiteRunner on: suite.
    self graceTime: 200.
	result := runner result.
    assertBlock := self async: [
		self assert: #('fakeError') equals: (self sortedSelectors: result errors).
		self assert: #('fakeErrorFailingInTearDown' 'fakeFailure') equals: (self sortedSelectors: result failures).
		self finished
  	].
    runner announcer on: ResultAnnouncement do: [:ann |
    	ann result == result  ifTrue: [ result runs = result total ifTrue: assertBlock ]].
	runner run
!

testAsyncNeedsGraceTime
    self should: [ self async: [ ] ] raise: Error.
    self graceTime: 0.
    self shouldnt: [ self async: [ ] ] raise: Error.
    self finished
!

testFinishedNeedsGraceTime
    self should: [ self finished ] raise: Error.
    self graceTime: 0.
    self shouldnt: [ self finished ] raise: Error.
!

testIsAsyncReturnsCorrectValues
    self deny: self isAsync.
    self graceTime: 0.
    self assert: self isAsync.
    self finished.
    self deny: self isAsync
!

testPass
	flag := 'bad'.
	self graceTime: 10.
    flag := (self async: [ self assert: true. self finished. flag := 'ok' ]) valueWithTimeout: 5
!

testTimeouts
	| suite runner result assertBlock |
	suite := #('fakeTimeout' 'fakeMultipleGraceTimeFailing' 'fakeMultipleGraceTimePassing' 'testPass') collect: [ :each | self class selector: each ].
    runner := TestSuiteRunner on: suite.
    self graceTime: 200.
	result := runner result.
    assertBlock := self async: [
		self assert: result errors isEmpty.
		self assert: #('fakeMultipleGraceTimeFailing' 'fakeTimeout') equals: (self sortedSelectors: result failures).
		self finished
  	].
    runner announcer on: ResultAnnouncement do: [:ann |
    	ann result == result  ifTrue: [ result runs = result total ifTrue: assertBlock ]].
	runner run
!

testTwoAsyncPassesWithFinishedOnlyOneIsRun
	| x |
	flag := 'bad'.
	self graceTime: 10.
    x := 0.
    flag := (self async: [ self finished. flag := 'ok'. x := x+1. self assert: 1 equals: x ]) valueWithTimeout: 0.
    flag := (self async: [ self finished. flag := 'ok'. x := x+1. self assert: 1 equals: x ]) valueWithTimeout: 0.
! !

