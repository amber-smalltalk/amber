Smalltalk createPackage: 'Test'!
Object subclass: #NodeTestRunner
	instanceVariableNames: ''
	package: 'Test'!

!NodeTestRunner class methodsFor: 'not yet classified'!

main
	self runTestSuite
!

runTestSuite
	| suite worker |

	suite := OrderedCollection new.
    (TestCase allSubclasses select: [ :each | each isAbstract not ])
	do: [ :each | suite addAll: each buildSuite ].

	worker := TestSuiteRunner on: suite.
	worker announcer on: ResultAnnouncement do:
	[ :ann | | result |
    	result := ann result.
        result runs = result total ifTrue: [
	        console log: result runs asString, ' tests run, ', result failures size asString, ' failures, ', result errors size asString, ' errors.'.

            result failures isEmpty ifFalse: [
                result failures first runCase.
                "the line above should throw, normally, but just in case I leave the line below"
                self throw: result failures first class name, ' >> ', result failures first selector, ' is failing!!' ].
            result errors isEmpty ifFalse: [
                result errors first runCase.
                "the line above should throw, normally, but just in case I leave the line below"
                self throw: result errors first class name, ' >> ', result errors first selector, ' has errors!!' ].
    ]].
    worker run
! !

