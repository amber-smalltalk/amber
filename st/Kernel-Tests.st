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

