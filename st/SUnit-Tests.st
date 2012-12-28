Smalltalk current createPackage: 'SUnit-Tests' properties: #{}!
TestCase subclass: #SUnitAsyncTest
	instanceVariableNames: 'flag'
	package: 'SUnit-Tests'!

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
    flag := (self async: [ self error: 'Intentional'. self finished. flag := 'ok' ]) valueWithTimeout: 5
!

fakeFailure
	flag := 'bad'.
	self graceTime: 10.
    flag := (self async: [ self assert: false. self finished. flag := 'ok' ]) valueWithTimeout: 5
!

testAsyncErrorsAndFailuresWork
	| suite runner result assertBlock |
	suite := { self class selector: 'fakeError'. self class selector: 'fakeFailure'. self class selector: 'testPass' }.
    runner := TestSuiteRunner on: suite.
    self graceTime: 200.
	result := runner result.
    assertBlock := self async: [
		self assert: 1 equals: result errors size.
		self assert: 'fakeError' equals: result errors first selector.
		self assert: 1 equals: result failures size.
		self assert: 'fakeFailure' equals: result failures first selector.
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
! !

