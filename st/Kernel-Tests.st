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

