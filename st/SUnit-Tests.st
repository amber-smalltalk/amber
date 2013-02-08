Smalltalk current createPackage: 'SUnit-Tests' properties: #{}!
TestCase subclass: #SUnitAsyncTest
	instanceVariableNames: 'flag'
	package: 'SUnit-Tests'!

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
!

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

