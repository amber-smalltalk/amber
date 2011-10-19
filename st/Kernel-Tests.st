Smalltalk current createPackage: 'Kernel-Tests' properties: #{}!
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
	self assert: ('amber' includesSubString: 'ber').
	self deny: ('amber' includesSubString: 'zork').
!

testEquality
	self assert: 'hello' = 'hello'.
	self deny: 'hello' = 'world'.

	self assert: 'hello'  = 'hello' yourself.
	self assert: 'hello' yourself = 'hello'.

	"test JS falsy value"
	self deny: '' = 0
!

testCopyWithoutAll
	self 
		assert: 'hello world' 
		equals: ('*hello* *world*' copyWithoutAll: '*')
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
!

testEquality
	| d1 d2 |

	self assert: Dictionary new = Dictionary new.
		
	d1 := Dictionary new at: 1 put: 2; yourself.
	d2 := Dictionary new at: 1 put: 2; yourself.
	self assert: d1 = d2.

	d2 := Dictionary new at: 1 put: 3; yourself.
	self deny: d1 = d2.

	d2 := Dictionary new at: 2 put: 2; yourself.
	self deny: d1 = d2.

	d2 := Dictionary new at: 1 put: 2; at: 3 put: 4; yourself.
	self deny: d1 = d2.
!

testDynamicDictionaries
	self assert: #{1 -> 'hello'. 2 -> 'world'} = (Dictionary with: 1 -> 'hello' with: 2 -> 'world')
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
!

testEquality
	"We're on top of JS...just be sure to check the basics!!"

	self deny: 0 = false. 
	self deny: false = 0.
	self deny: '' = false.
	self deny: false = ''.

	self assert: true = true.
	self deny: false = true.
	self deny: true = false.
	self assert: false = false.

	"JS may do some type coercing after sending a message"
	self assert: true yourself = true.
	self assert: true yourself = true yourself
!

testLogicKeywords
 
	"Trivial logic table"
	self 
		assert: (true and: [ true]); 
		deny: (true and: [ false ]); 
		deny: (false and: [ true ]); 
		deny: (false and: [ false ]).
	self 
		assert: (true or: [ true ]); 
		assert: (true or: [ false ]); 
		assert: (false or: [ true ]); 
		deny: (false or: [ false ]).
        
	"Checking that expressions work fine too"
	self 
		assert: (true and: [ 1 > 0 ]); 
		deny: ((1 > 0) and: [ false ]); 
		deny: ((1 > 0) and: [ 1 > 2 ]).
        self 
		assert: (false or: [ 1 > 0 ]); 
		assert: ((1 > 0) or: [ false ]); 
		assert: ((1 > 0) or: [ 1 > 2 ])
!

testIfTrueIfFalse
 
	self assert: (true ifTrue: ['alternative block']) = 'alternative block'.
	self assert: (true ifFalse: ['alternative block']) = nil.

	self assert: (false ifTrue: ['alternative block']) = nil.
	self assert: (false ifFalse: ['alternative block']) = 'alternative block'.

	self assert: (false ifTrue: ['alternative block'] ifFalse: ['alternative block2']) = 'alternative block2'.
	self assert: (false ifFalse: ['alternative block'] ifTrue: ['alternative block2']) = 'alternative block'.

	self assert: (true ifTrue: ['alternative block'] ifFalse: ['alternative block2']) = 'alternative block'.
	self assert: (true ifFalse: ['alternative block'] ifTrue: ['alternative block2']) = 'alternative block2'.
! !

TestCase subclass: #NumberTest
	instanceVariableNames: ''
	category: 'Kernel-Tests'!

!NumberTest methodsFor: 'tests'!

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
!

testEquality
	self assert: 1 = 1.
	self assert: 0 = 0.
	self deny: 1 = 0.

	self assert: 1 yourself = 1.
	self assert: 1 = 1 yourself.
	self assert: 1 yourself = 1 yourself.
	
	self deny: 0 = false.
	self deny: false = 0.
	self deny: '' = 0.
	self deny: 0 = ''
!

testArithmetic
	
	"We rely on JS here, so we won't test complex behavior, just check if 
	message sends are corrects"

	self assert: 1.5 + 1 = 2.5.
	self assert: 2 - 1 = 1.
	self assert: -2 - 1 = -3.
	self assert: 12 / 2 = 6.
	self assert: 3 * 4 = 12.

	"Simple parenthesis and execution order"

	self assert: 1 + 2 * 3 = 9.
	self assert: 1 + (2 * 3) = 7
!

testRounded
	
	self assert: 3 rounded = 3.
	self assert: 3.212 rounded = 3.
	self assert: 3.51 rounded = 4
!

testNegated
	self assert: 3 negated = -3.
	self assert: -3 negated = 3
!

testComparison

	self assert: 3 > 2.
	self assert: 2 < 3.
	
	self deny: 3 < 2.
	self deny: 2 > 3.

	self assert: 3 >= 3.
	self assert: 3.1 >= 3.
	self assert: 3 <= 3.
	self assert: 3 <= 3.1
!

testTruncated
	
	self assert: 3 truncated = 3.
	self assert: 3.212 truncated = 3.
	self assert: 3.51 truncated = 3
!

testCopying
	self assert: 1 copy = 1.
	self assert: 1 deepCopy = 1
! !

TestCase subclass: #JSObjectProxyTest
	instanceVariableNames: ''
	category: 'Kernel-Tests'!

!JSObjectProxyTest methodsFor: 'tests'!

testMethodWithArguments
	self deny: ('body' asJQuery hasClass: 'amber').

	'body' asJQuery addClass: 'amber'.
	self assert: ('body' asJQuery hasClass: 'amber').

	'body' asJQuery removeClass: 'amber'.
	self deny: ('body' asJQuery hasClass: 'amber').
!

testYourself
	|body|
	body := 'body' asJQuery
				addClass: 'amber';
				yourself.

	self assert: (body hasClass: 'amber').

	body removeClass: 'amber'.
	self deny: (body hasClass: 'amber').
!

testPropertyThatReturnsEmptyString
	<document.location.hash = ''>.
	self assert: '' equals: document location hash.

	document location hash: 'test'.
	self assert: '#test' equals: document location hash.
! !

