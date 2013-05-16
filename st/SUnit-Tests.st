Smalltalk current createPackage: 'SUnit-Tests'!
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
	self assert: empty size equals: 100
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
	self assert: (empty occurrencesOf: 0) equals: 0.
	self assert: (full occurrencesOf: 5) equals: 1.
	full add: 5.
	self assert: (full occurrencesOf: 5) equals: 1
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
	self timeout: 30.
	flag := (self async: [ flag := 'ok'. self error: 'Intentional' ]) valueWithTimeout: 20
!

fakeErrorFailingInTearDown
	flag := 'bad'.
	self timeout: 30.
	flag := (self async: [ self error: 'Intentional' ]) valueWithTimeout: 20
!

fakeFailure
	flag := 'bad'.
	self timeout: 30.
	flag := (self async: [ flag := 'ok'. self assert: false ]) valueWithTimeout: 20
!

fakeMultipleTimeoutFailing
	self timeout: 100.
	(self async: [
		self timeout: 20.
		(self async: [ self finished ]) valueWithTimeout: 30
	]) valueWithTimeout: 20
!

fakeMultipleTimeoutPassing
	self timeout: 20.
	(self async: [
		self timeout: 40.
		(self async: [ self finished ]) valueWithTimeout: 20
	]) valueWithTimeout: 10
!

fakeTimeout
	self timeout: 10.
	(self async: [ self finished ]) valueWithTimeout: 20
! !

!SUnitAsyncTest methodsFor: 'private'!

selectorSetOf: aCollection
	^(aCollection collect: [:each | each selector]) asSet
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
	self timeout: 200.
	result := runner result.
	assertBlock := self async: [
		self assert: (self selectorSetOf: result errors) equals: #('fakeError') asSet.
		self assert: (self selectorSetOf: result failures) equals: #('fakeErrorFailingInTearDown' 'fakeFailure') asSet.
		self finished
	].
	runner announcer on: ResultAnnouncement do: [:ann |
		ann result == result ifTrue: [ result runs = result total ifTrue: assertBlock ]].
	runner run
!

testAsyncNeedsTimeout
	self should: [ self async: [ ] ] raise: Error.
	self timeout: 0.
	self shouldnt: [ self async: [ ] ] raise: Error.
	self finished
!

testFinishedNeedsTimeout
	self should: [ self finished ] raise: Error.
	self timeout: 0.
	self shouldnt: [ self finished ] raise: Error.
!

testIsAsyncReturnsCorrectValues
	self deny: self isAsync.
	self timeout: 0.
	self assert: self isAsync.
	self finished.
	self deny: self isAsync
!

testPass
	flag := 'bad'.
	self timeout: 10.
	flag := (self async: [ self assert: true. self finished. flag := 'ok' ]) valueWithTimeout: 5
!

testTimeouts
	| suite runner result assertBlock |
	suite := #('fakeTimeout' 'fakeMultipleTimeoutFailing' 'fakeMultipleTimeoutPassing' 'testPass') collect: [ :each | self class selector: each ].
	runner := TestSuiteRunner on: suite.
	self timeout: 200.
	result := runner result.
	assertBlock := self async: [
		self assert: (self selectorSetOf: result errors) equals: Set new.
		self assert: (self selectorSetOf: result failures) equals: #('fakeMultipleTimeoutFailing' 'fakeTimeout') asSet.
		self finished
	].
	runner announcer on: ResultAnnouncement do: [:ann |
		ann result == result ifTrue: [ result runs = result total ifTrue: assertBlock ]].
	runner run
!

testTwoAsyncPassesWithFinishedOnlyOneIsRun
	| x |
	flag := 'bad'.
	self timeout: 10.
	x := 0.
	flag := (self async: [ self finished. flag := 'ok'. x := x+1. self assert: x equals: 1 ]) valueWithTimeout: 0.
	flag := (self async: [ self finished. flag := 'ok'. x := x+1. self assert: x equals: 1 ]) valueWithTimeout: 0.
! !

