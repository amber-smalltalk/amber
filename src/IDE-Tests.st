Smalltalk createPackage: 'IDE-Tests'!
TestCase subclass: #IDEBrowserTest
	instanceVariableNames: 'originalBrowser'
	package: 'IDE-Tests'!

!IDEBrowserTest methodsFor: 'tests'!

setUp
	originalBrowser := Browser current.
	Browser register: IDEBrowser.
!

tearDown
	Browser register: originalBrowser
!

testOpenOn
	"IDEBrowser should accept an instance or class.
	When accepting an instance, IDEBrowser should browse its class.
	When accepting a class, IDEBrowser should inspect it."
	self shouldnt: [ (Browser openOn: 3) close ] raise: Error.
	self shouldnt: [ (Browser openOn: Number) close ] raise: Error.
! !

