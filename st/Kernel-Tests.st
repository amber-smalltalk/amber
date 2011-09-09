TestCase subclass: #StringTest
	instanceVariableNames: ''
	category: 'Kernel-Tests'!

!StringTest methodsFor: 'tests'!

testJoin
	self assert: 'hello,world' equals: (',' join: #('hello' 'world'))
!

testStreamContents
	self 
		assert: 'hello world' 
		equals: (String streamContents: [:aStream| aStream 
                                                 					nextPutAll: 'hello'; space; 
                                                 					nextPutAll: 'world'])
!

testIncludesSubString
	self assert: ('jtalk' includesSubString: 'alk').
	self deny: ('jtalk' includesSubString: 'zork').
! !

TestCase subclass: #DictionaryTest
	instanceVariableNames: ''
	category: 'Kernel-Tests'!

!DictionaryTest methodsFor: 'tests'!

testPrintString
	self 
		assert: 'a Dictionary(''firstname'' -> ''James'' , ''lastname'' -> ''Bond'')' 
		equals: (Dictionary new 
                         	at:'firstname' put: 'James';
                        	at:'lastname' put: 'Bond';
                        	printString)
! !

TestCase subclass: #BooleanTest
	instanceVariableNames: ''
	category: 'Kernel-Tests'!

!BooleanTest methodsFor: 'not yet classified'!

testLogic

	"Trivial logic table"
	self assert: (true & true); deny: (true & false); deny: (false & true); deny: (false & false).
	self assert: (true | true); assert: (true | false); assert: (false | true); deny: (false | false).
        "Checking that expressions work fine too"
	self assert: (true & (1 > 0)); deny: ((1 > 0) & false); deny: ((1 > 0) & (1 > 2)).
        self assert: (false | (1 > 0)); assert: ((1 > 0) | false); assert: ((1 > 0) | (1 > 2))
! !

TestCase subclass: #NumberTest
	instanceVariableNames: ''
	category: 'Kernel-Tests'!

!NumberTest methodsFor: 'not yet classified'!

testPrintShowingDecimalPlaces
	self assert: '23.00' equals: (23 printShowingDecimalPlaces: 2).
	self assert: '23.57' equals: (23.5698 printShowingDecimalPlaces: 2).
	self assert: '-234.56700' equals:( 234.567 negated printShowingDecimalPlaces: 5).
	self assert: '23' equals: (23.4567 printShowingDecimalPlaces: 0).
	self assert: '24' equals: (23.5567 printShowingDecimalPlaces: 0).
	self assert: '-23' equals: (23.4567 negated printShowingDecimalPlaces: 0).
	self assert: '-24' equals: (23.5567 negated printShowingDecimalPlaces: 0).
	self assert: '100000000.0' equals: (100000000 printShowingDecimalPlaces: 1).
	self assert: '0.98000' equals: (0.98 printShowingDecimalPlaces: 5).
	self assert: '-0.98' equals: (0.98 negated printShowingDecimalPlaces: 2).
	self assert: '2.57' equals: (2.567 printShowingDecimalPlaces: 2).
	self assert: '-2.57' equals: (-2.567 printShowingDecimalPlaces: 2).
	self assert: '0.00' equals: (0 printShowingDecimalPlaces: 2).
! !

