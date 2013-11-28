Smalltalk current createPackage: 'Kernel-Tests'!
TestCase subclass: #AnnouncementSubscriptionTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!AnnouncementSubscriptionTest methodsFor: 'tests'!

testHandlesAnnouncement
	| subscription announcementClass1 announcementClass2 classBuilder |
	
	classBuilder := ClassBuilder new.
	announcementClass1 := classBuilder basicAddSubclassOf: SystemAnnouncement named: 'TestAnnouncement1' instanceVariableNames: #() package: 'Kernel-Tests'.
	
	subscription := AnnouncementSubscription new announcementClass: SystemAnnouncement.
	"Test whether the same class triggers the announcement"
	self assert: (subscription handlesAnnouncement: SystemAnnouncement) equals: true.
	"Test whether a subclass triggers the announcement"
	self assert: (subscription handlesAnnouncement: announcementClass1) equals: true.
	"Test whether an unrelated class does not trigger the announcement"
	self assert: (subscription handlesAnnouncement: Object) equals: false.
	
	classBuilder basicRemoveClass: announcementClass1.
! !

TestCase subclass: #AnnouncerTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!AnnouncerTest methodsFor: 'not yet classified'!

testOnDo
	| counter announcer |
	
	counter := 0.
	announcer := Announcer new.
	announcer on: SystemAnnouncement do: [ counter := counter + 1 ].

	announcer announce: (SystemAnnouncement new).
	self assert: counter equals: 1.

	announcer announce: (SystemAnnouncement new).
	self assert: counter equals: 2.
!

testOnDoOnce
	| counter announcer |
	
	counter := 0.
	announcer := Announcer new.
	announcer on: SystemAnnouncement doOnce: [ counter := counter + 1 ].

	announcer announce: (SystemAnnouncement new).
	self assert: counter equals: 1.

	announcer announce: (SystemAnnouncement new).
	self assert: counter equals: 1.
! !

TestCase subclass: #BlockClosureTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!BlockClosureTest methodsFor: 'tests'!

testCanClearInterval
	self shouldnt: [ ([ Error new signal ] valueWithInterval: 0) clearInterval ] raise: Error
!

testCanClearTimeout
	self shouldnt: [ ([ Error new signal ] valueWithTimeout: 0) clearTimeout ] raise: Error
!

testCompiledSource
	self assert: ([ 1+1 ] compiledSource includesSubString: 'function')
!

testCurrySelf
	| curriedMethod array |
	curriedMethod := [ :selfarg :x | selfarg at: x ] currySelf asCompiledMethod: 'foo:'.
	array := #(3 1 4).
	ClassBuilder new installMethod: curriedMethod forClass: Array category: '**test helper'.
	[ self assert: (array foo: 2) equals: 1 ]
	ensure: [ Array removeCompiledMethod: curriedMethod ]
!

testEnsure
	self assert: ([ 3 ] ensure: [ 4 ]) equals: 3
!

testEnsureRaises
	self should: [ [Error new signal ] ensure: [ true ]] raise: Error
!

testExceptionSemantics
	"See https://github.com/NicolasPetton/amber/issues/314"
	self timeout: 100.
	
	(self async: [
		[
			self assert: true.
			Error signal.
			"The following should *not* be run"
			self deny: true.
			self finished.
		] on: Error do: [ :ex | self finished ]
	]) valueWithTimeout: 0
!

testNewWithValues
<
	function theTestPrototype() {this.name = "theTestPrototype";}
	function theTestConstructor(arg1, arg2, arg3) {}
	theTestConstructor.prototype = new theTestPrototype;

	var theWrappedConstructor = _st(theTestConstructor);
	var theResult = theWrappedConstructor._newWithValues_([1, 2, 3 ]);
	self._assert_equals_(Object.getPrototypeOf(theResult).name, 'theTestPrototype');

	"newWithValues: cannot help if the argument list is wrong, and should warn that a mistake was made."
	function constructionShouldFail() {var anotherResult = theWrappedConstructor._newWithValues_('This is so wrong');}
	self._should_raise_(_st(constructionShouldFail), smalltalk.Error);
>
!

testNumArgs
	self assert: [] numArgs equals: 0.
	self assert: [ :a :b | ] numArgs equals: 2
!

testOnDo
	self assert: ([ Error new signal ] on: Error do: [ :ex | true ])
!

testValue
	self assert: ([ 1+1 ] value) equals: 2.
	self assert: ([ :x | x +1 ] value: 2) equals: 3.
	self assert: ([ :x :y | x*y ] value: 2 value: 4) equals: 8.

	"Arguments are optional in Amber. This isn't ANSI compliant."

	self assert: ([ :a :b :c | 1 ] value) equals: 1
!

testValueWithPossibleArguments
	self assert: ([ 1 ] valueWithPossibleArguments: #(3 4)) equals: 1.
	self assert: ([ :a | a + 4 ] valueWithPossibleArguments: #(3 4)) equals: 7.
	self assert: ([ :a :b | a + b ] valueWithPossibleArguments: #(3 4 5)) equals: 7.
!

testWhileFalse
	| i |
	i := 0.
	[ i > 5 ] whileFalse: [ i := i + 1 ].
	self assert: i equals: 6.

	i := 0.
	[ i := i + 1. i > 5 ] whileFalse.
	self assert: i equals: 6
!

testWhileTrue
	| i |
	i := 0.
	[ i < 5 ] whileTrue: [ i := i + 1 ].
	self assert: i equals: 5.

	i := 0.
	[ i := i + 1. i < 5 ] whileTrue.
	self assert: i equals: 5
! !

TestCase subclass: #BooleanTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!BooleanTest methodsFor: 'tests'!

testEquality
	"We're on top of JS...just be sure to check the basics!!"

	self deny: 0 = false.
	self deny: false = 0.
	self deny: '' = false.
	self deny: false = ''.

	self assert: (true = true).
	self deny: false = true.
	self deny: true = false.
	self assert: (false = false).

	"JS may do some type coercing after sending a message"
	self assert: (true yourself = true).
	self assert: (true yourself = true yourself)
!

testIdentity
	"We're on top of JS...just be sure to check the basics!!"

	self deny: 0 == false.
	self deny: false == 0.
	self deny: '' == false.
	self deny: false == ''.

	self assert: true == true.
	self deny: false == true.
	self deny: true == false.
	self assert: false == false.

	"JS may do some type coercing after sending a message"
	self assert: true yourself == true.
	self assert: true yourself == true yourself
!

testIfTrueIfFalse

	self assert: (true ifTrue: [ 'alternative block' ]) equals: 'alternative block'.
	self assert: (true ifFalse: [ 'alternative block' ]) equals: nil.

	self assert: (false ifTrue: [ 'alternative block' ]) equals: nil.
	self assert: (false ifFalse: [ 'alternative block' ]) equals: 'alternative block'.

	self assert: (false ifTrue: [ 'alternative block' ] ifFalse: [ 'alternative block2' ]) equals: 'alternative block2'.
	self assert: (false ifFalse: [ 'alternative block' ] ifTrue: [ 'alternative block2' ]) equals: 'alternative block'.

	self assert: (true ifTrue: [ 'alternative block' ] ifFalse: [ 'alternative block2' ]) equals: 'alternative block'.
	self assert: (true ifFalse: [ 'alternative block' ] ifTrue: [ 'alternative block2' ]) equals: 'alternative block2'.
!

testIfTrueIfFalseWithBoxing

	self assert: (true yourself ifTrue: [ 'alternative block' ]) equals: 'alternative block'.
	self assert: (true yourself ifFalse: [ 'alternative block' ]) equals: nil.

	self assert: (false yourself ifTrue: [ 'alternative block' ]) equals: nil.
	self assert: (false yourself ifFalse: [ 'alternative block' ]) equals: 'alternative block'.

	self assert: (false yourself ifTrue: [ 'alternative block' ] ifFalse: [ 'alternative block2' ]) equals: 'alternative block2'.
	self assert: (false yourself ifFalse: [ 'alternative block' ] ifTrue: [ 'alternative block2' ]) equals: 'alternative block'.

	self assert: (true yourself ifTrue: [ 'alternative block' ] ifFalse: [ 'alternative block2' ]) equals: 'alternative block'.
	self assert: (true yourself ifFalse: [ 'alternative block' ] ifTrue: [ 'alternative block2' ]) equals: 'alternative block2'.
!

testLogic
	"Trivial logic table"
	self assert: (true & true);
		deny: (true & false);
		deny: (false & true);
		deny: (false & false).
	self assert: (true | true);
		assert: (true | false);
		assert: (false | true);
		deny: (false | false).
	"Checking that expressions work fine too"
	self assert: (true & (1 > 0));
		deny: ((1 > 0) & false);
		deny: ((1 > 0) & (1 > 2)).
	self assert: (false | (1 > 0));
		assert: ((1 > 0) | false);
		assert: ((1 > 0) | (1 > 2))
!

testLogicKeywords
	"Trivial logic table"
	self
		assert: (true and: [ true ]);
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

testNonBooleanError
	self should: [ '' ifTrue: [] ifFalse: [] ] raise: NonBooleanReceiver
! !

TestCase subclass: #ClassBuilderTest
	instanceVariableNames: 'builder theClass'
	package: 'Kernel-Tests'!

!ClassBuilderTest methodsFor: 'running'!

setUp
	builder := ClassBuilder new
!

tearDown
	theClass ifNotNil: [ Smalltalk current removeClass: theClass. theClass := nil ]
! !

!ClassBuilderTest methodsFor: 'tests'!

testClassCopy
	theClass := builder copyClass: ObjectMock named: 'ObjectMock2'.
	self assert: theClass superclass == ObjectMock superclass.
	self assert: theClass instanceVariableNames == ObjectMock instanceVariableNames.
	self assert: theClass name equals: 'ObjectMock2'.
	self assert: theClass package == ObjectMock package.
	self assert: theClass methodDictionary keys equals: ObjectMock methodDictionary keys
!

testClassMigration
	| instance oldClass |
	
	oldClass := builder copyClass: ObjectMock named: 'ObjectMock2'.
	instance := (Smalltalk current at: 'ObjectMock2') new.
	
	"Change the superclass of ObjectMock2"
	ObjectMock subclass: (Smalltalk current at: 'ObjectMock2')
		instanceVariableNames: ''
		package: 'Kernel-Tests'.
	
	self deny: oldClass == ObjectMock2.
	
	self assert: ObjectMock2 superclass == ObjectMock.
	self assert: ObjectMock2 instanceVariableNames isEmpty.
	self assert: ObjectMock2 selectors equals: oldClass selectors.
	self assert: ObjectMock2 comment equals: oldClass comment.
	self assert: ObjectMock2 package name equals: 'Kernel-Tests'.
	
	self deny: instance class == ObjectMock2.
	"Commeting this out. Tests implementation detail."
	"self assert: instance class name equals: 'OldObjectMock2'."
	
	self assert: (Smalltalk current at: instance class name) isNil.
	
	Smalltalk current removeClass: ObjectMock2
!

testClassMigrationWithClassInstanceVariables
	
	builder copyClass: ObjectMock named: 'ObjectMock2'.
	ObjectMock2 class instanceVariableNames: 'foo bar'.
	
	"Change the superclass of ObjectMock2"
	ObjectMock subclass: (Smalltalk current at: 'ObjectMock2')
		instanceVariableNames: ''
		package: 'Kernel-Tests'.
	
	self assert: ObjectMock2 class instanceVariableNames equals: #('foo' 'bar').
	
	Smalltalk current removeClass: ObjectMock2
!

testClassMigrationWithSubclasses
	
	builder copyClass: ObjectMock named: 'ObjectMock2'.
	ObjectMock2 subclass: 'ObjectMock3' instanceVariableNames: '' package: 'Kernel-Tests'.
	ObjectMock3 subclass: 'ObjectMock4' instanceVariableNames: '' package: 'Kernel-Tests'.
	
	"Change the superclass of ObjectMock2"
	ObjectMock subclass: (Smalltalk current at: 'ObjectMock2')
		instanceVariableNames: ''
		package: 'Kernel-Tests'.
	
	self assert: (ObjectMock subclasses includes: ObjectMock2).
	self assert: (ObjectMock2 subclasses includes: ObjectMock3).
	self assert: (ObjectMock3 subclasses includes: ObjectMock4).
	
	ObjectMock allSubclasses do: [ :each | Smalltalk current removeClass: each ]
!

testInstanceVariableNames
	self assert: (builder instanceVariableNamesFor: '  hello   world   ') equals: #('hello' 'world')
! !

TestCase subclass: #CollectionTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!CollectionTest methodsFor: 'accessing'!

collection
	^ self collectionClass withAll: self defaultValues
!

collectionClass
	^ self class collectionClass
!

collectionWithDuplicates
	^ self collectionClass withAll: #('a' 'b' 'c' 1 2 1 'a')
!

defaultValues
	^ #(1 2 3 -4)
! !

!CollectionTest methodsFor: 'convenience'!

assertSameContents: aCollection as: anotherCollection
	self assert: (aCollection size = anotherCollection size).
	aCollection do: [ :each |
		self assert: ((aCollection occurrencesOf: each) = (anotherCollection occurrencesOf: each)) ]
! !

!CollectionTest methodsFor: 'testing'!

isCollectionReadOnly
	^ false
! !

!CollectionTest methodsFor: 'tests'!

testAllSatisfy
	| collection anyOne |
	collection := self collection.
	anyOne := collection anyOne.
	self assert: (collection allSatisfy: [ :each | collection includes: each ]).
	self deny: (collection allSatisfy: [ :each | each ~= anyOne ])
!

testAnyOne
	self should: [ self collectionClass new anyOne ] raise: Error.
	self assert: (self collection includes: self collection anyOne)
!

testAnySatisfy
	| anyOne |
	anyOne := self collection anyOne.
	self assert: (self collection anySatisfy: [ :each | each = anyOne ]).
	self deny: (self collection anySatisfy: [ :each | each = Object new ])
!

testAsArray
	self
		assertSameContents: self collection
		as: self collection asArray
!

testAsOrderedCollection
	self
		assertSameContents: self collection
		as: self collection asOrderedCollection
!

testAsSet
	| c set |
	c := self collectionWithDuplicates.
	set := c asSet.
	self assert: set size equals: 5.
	c do: [ :each |
		self assert: (set includes: each) ]
!

testCollect
	| newCollection |
	newCollection := #(1 2 3 4).
	self
		assertSameContents: (self collection collect: [ :each |
			each abs ])
		as: newCollection
!

testDetect
	self assert: (self collection detect: [ :each | each < 0 ]) equals: -4.
	self
		should: [ self collection detect: [ :each | each = 6 ] ]
		raise: Error
!

testDo
	| newCollection |
	newCollection := OrderedCollection new.
	self collection do: [ :each |
		newCollection add: each ].
	self
		assertSameContents: self collection
		as: newCollection
!

testIfEmptyFamily
	self assert: (self collectionClass new ifEmpty: [ 42 ]) equals: 42.
	self assert: (self collection ifEmpty: [ 42 ]) equals: self collection.

	self assert: (self collectionClass new ifNotEmpty: [ 42 ]) equals: self collectionClass new.
	self assert: (self collection ifNotEmpty: [ 42 ]) equals: 42.
	
	self assert: (self collectionClass new ifEmpty: [ 42 ] ifNotEmpty: [ 999 ]) equals: 42.
	self assert: (self collection ifEmpty: [ 42 ] ifNotEmpty: [ 999 ]) equals: 999.

	self assert: (self collectionClass new ifNotEmpty: [ 42 ] ifEmpty: [ 999 ]) equals: 999.
	self assert: (self collection ifNotEmpty: [ 42 ] ifEmpty: [ 999 ]) equals: 42
!

testIsEmpty
	self assert: self collectionClass new isEmpty.
	self deny: self collection isEmpty
!

testNoneSatisfy
	| anyOne |
	anyOne := self collection anyOne.
	self deny: (self collection noneSatisfy: [ :each | each = anyOne ]).
	self assert: (self collection noneSatisfy: [ :each | each = Object new ])
!

testRemoveAll
	self assert: (self collection removeAll; yourself) equals: self collectionClass new
!

testSelect
	| newCollection |
	newCollection := #(2 -4).
	self
		assertSameContents: (self collection select: [ :each |
			each even ])
		as: newCollection
!

testSize
	self assert: self collectionClass new size equals: 0.
	self assert: self collection size equals: 4
! !

!CollectionTest class methodsFor: 'accessing'!

collectionClass
	^ nil
! !

!CollectionTest class methodsFor: 'testing'!

isAbstract
	^ self collectionClass isNil
! !

CollectionTest subclass: #IndexableCollectionTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!IndexableCollectionTest methodsFor: 'tests'!

testAt
	self assert: (self collection at: 4) equals: -4.
	self should: [ self collection at: 5 ] raise: Error
!

testAtIfAbsent
	self assert: (self collection at: (self collection size + 1) ifAbsent: [ 'none' ]) equals: 'none'
!

testIndexOf
	self assert: (self collection indexOf: 2) equals: 2.
	self should: [ self collection indexOf: 999 ] raise: Error.
	self assert: (self collection indexOf: 999 ifAbsent: [ 'sentinel' ]) equals: 'sentinel'
!

testWithIndexDo
	| collection |
	collection := self collection.
	
	self collection withIndexDo: [ :each :index |
		self assert: (collection at: index) equals: each ]
! !

IndexableCollectionTest subclass: #HashedCollectionTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!HashedCollectionTest methodsFor: 'accessing'!

collection
	^ #{ 'b' -> 1. 'a' -> 2. 'c' -> 3. 'd' -> -4 }
!

collectionWithDuplicates
	^ #{ 'b' -> 1. 'a' -> 2. 'c' -> 3. 'd' -> -4. 'e' -> 1. 'f' -> 2. 'g' -> 10 }
! !

!HashedCollectionTest methodsFor: 'tests'!

testAsDictionary
self assert: ( self collectionClass new asDictionary isMemberOf: Dictionary ).
!

testAt
	self assert: (self collection at: 'a') equals: 2.
	self should: [ self collection at: 5 ] raise: Error
!

testFrom
"Accept a collection of associations."
| associations |
associations := { 'a' -> 1. 'b' -> 2 }.
self assertSameContents: ( self class collectionClass from: associations ) as: #{ 'a' -> 1. 'b' -> 2 }.
!

testIndexOf
	self assert: (self collection indexOf: 2) equals: 'a'.
	self should: [ self collection indexOf: 999 ] raise: Error.
	self assert: (self collection indexOf: 999 ifAbsent: [ 'sentinel' ]) equals: 'sentinel'
!

testNewFromPairs
"Accept an array in which all odd indexes are keys and evens are values."
| flattenedAssociations |
flattenedAssociations := { 'a'. 1. 'b'. 2 }.
self assertSameContents: ( self class collectionClass newFromPairs: flattenedAssociations ) as: #{ 'a' -> 1. 'b' -> 2 }.
! !

!HashedCollectionTest class methodsFor: 'accessing'!

collectionClass
	^ HashedCollection
! !

HashedCollectionTest subclass: #DictionaryTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!DictionaryTest methodsFor: 'accessing'!

collection
	^ Dictionary new
		at: 1 put: 1;
		at: 'a' put: 2;
		at: true put: 3;
		at: 4 put: -4;
		yourself
!

collectionWithDuplicates
	^ Dictionary new
		at: 1 put: 1;
		at: 'a' put: 2;
		at: true put: 3;
		at: 4 put: -4;
		at: 'b' put: 1;
		at: 3 put: 3;
		at: false put: 12;
		yourself
! !

!DictionaryTest methodsFor: 'tests'!

testAccessing
	| d |

	d := Dictionary new.

	d at: 'hello' put: 'world'.
	self assert: (d at: 'hello') equals: 'world'.
	self assert: (d at: 'hello' ifAbsent: [ nil ]) equals: 'world'.
	self deny: (d at: 'foo' ifAbsent: [ nil ]) = 'world'.

	self assert: (d includesKey: 'hello').
	self deny: (d includesKey: 'foo').

	d at: 1 put: 2.
	self assert: (d at: 1) equals: 2.

	d at: 1@3 put: 3.
	self assert: (d at: 1@3) equals: 3.

	self assert: (d includesKey: 1@3).
	self deny: (d includesKey: 3@1)
!

testAsHashedCollection
self assert: ( self collectionClass new asHashedCollection isMemberOf: HashedCollection ).
!

testDynamicDictionaries
	self assert: #{'hello' -> 1} asDictionary equals: (Dictionary with: 'hello' -> 1)
!

testEquality
	| d1 d2 |

	self assert: (Dictionary new = Dictionary new).
		
	d1 := Dictionary new at: 1 put: 2; yourself.
	d2 := Dictionary new at: 1 put: 2; yourself.
	self assert: (d1 = d2).

	d2 := Dictionary new at: 1 put: 3; yourself.
	self deny: d1 = d2.

	d2 := Dictionary new at: 2 put: 2; yourself.
	self deny: d1 = d2.

	d2 := Dictionary new at: 1 put: 2; at: 3 put: 4; yourself.
	self deny: d1 = d2.
!

testIfAbsent

	| d visited |
	visited := false.
	d := Dictionary new.

	d at: 'hello' ifAbsent: [ visited := true ].
	self assert: visited.
!

testIfPresent

	| d visited absent |
	visited := false.
	d := Dictionary new.
	d at: 'hello' put: 'world'.

	d at: 'hello' ifPresent: [ :value | visited := value ].
	self assert: visited equals: 'world'.

	absent := d at: 'bye' ifPresent: [ :value | visited := value ].
	self assert: absent isNil.
!

testIfPresentIfAbsent

	| d visited |
	visited := false.
	d := Dictionary new.
	d at: 'hello' put: 'world'.

	d at: 'hello' ifPresent: [ :value | visited := value ] ifAbsent: [ visited := true ].
	self assert: visited equals: 'world'.

	d at: 'buy' ifPresent: [ :value | visited := value ] ifAbsent: [ visited := true ].
	self assert: visited.
!

testKeys
	| d |

	d := Dictionary new.
	d at: 1 put: 2.
	d at: 2 put: 3.
	d at: 3 put: 4.

	self assert: d keys equals: #(1 2 3)
!

testPointKey
	| d |

	d := Dictionary new.
	
	d at: 1@1 put: 'foo'.
	self assert: (d at: 1@1) equals: 'foo'.
	d at: 1@1 put: 'bar'.
	self assert: (d at: 1@1) equals: 'bar'.
	d removeKey: 1@1.
	self assert: (d at: 1@1 ifAbsent: [ 'baz' ]) equals: 'baz'.
	self deny: (d includesKey: 1@1)
!

testPrintString
	self
		assert: (Dictionary new
							at:'firstname' put: 'James';
							at:'lastname' put: 'Bond';
							printString)
		equals: 'a Dictionary (''firstname'' -> ''James'' , ''lastname'' -> ''Bond'')'
!

testRemoveKey
	| d key |

	d := Dictionary new.
	d at: 1 put: 2.
	d at: 2 put: 3.
	d at: 3 put: 4.

	key := 2.

	self assert: d keys equals: #(1 2 3).

	d removeKey: key.
	self assert: d keys equals: #(1 3).
	self assert: d values equals: #(2 4).
	self deny: (d includesKey: 2)
!

testRemoveKeyIfAbsent
	| d key |

	d := Dictionary new.
	d at: 1 put: 2.
	d at: 2 put: 3.
	d at: 3 put: 4.

	key := 2.
	self assert: (d removeKey: key) equals: 3.

	key := 3.
	self assert: (d removeKey: key ifAbsent: [ 42 ]) equals: 4.

	key := 'why'.
	self assert: (d removeKey: key ifAbsent: [ 42 ] ) equals: 42.
!

testSize
	| d |

	d := Dictionary new.
	self assert: d size equals: 0.

	d at: 1 put: 2.
	self assert: d size equals: 1.

	d at: 2 put: 3.
	self assert: d size equals: 2.
!

testValues
	| d |

	d := Dictionary new.
	d at: 1 put: 2.
	d at: 2 put: 3.
	d at: 3 put: 4.

	self assert: d values equals: #(2 3 4)
! !

!DictionaryTest class methodsFor: 'accessing'!

collectionClass
	^ Dictionary
! !

IndexableCollectionTest subclass: #SequenceableCollectionTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!SequenceableCollectionTest methodsFor: 'tests'!

testFirst
	self assert: (self collection first) equals: (self collection at: 1)
!

testFourth
	self assert: (self collection fourth) equals: (self collection at: 4)
!

testLast
	self assert: (self collection last) equals: (self collection at: self collection size)
!

testSecond
	self assert: (self collection second) equals: (self collection at: 2)
!

testThird
	self assert: (self collection third) equals: (self collection at: 3)
! !

SequenceableCollectionTest subclass: #ArrayTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!ArrayTest methodsFor: 'tests'!

testAdd 
	| array | 
	array := self collection. 
	array add: 6.
	
	self assert: array last equals: 6
!

testAddFirst
	self assert: (self collection addFirst: 0; yourself) first equals: 0
!

testAtIfAbsent
	| array |
	array := #('hello' 'world').
	self assert: (array at: 1) equals: 'hello'.
	self assert: (array at: 2) equals: 'world'.
	self assert: (array at: 2 ifAbsent: [ 'not found' ]) equals: 'world'.
	self assert: (array at: 0 ifAbsent: [ 'not found' ]) equals: 'not found'.
	self assert: (array at: -10 ifAbsent: [ 'not found' ]) equals: 'not found'.
	self assert: (array at: 3 ifAbsent: [ 'not found' ]) equals: 'not found'.
!

testFirstN
	self assert: ({1. 2. 3. 4. 5} first: 3) equals: {1. 2. 3}
!

testIfEmpty
	self assert: ( '' ifEmpty: [ 'zork' ] ) equals: 'zork'
!

testPrintString
	| array |
	array := Array new.
	self assert: array printString equals: 'an Array ()'.
	array add: 1; add: 3.
	self assert: array printString equals: 'an Array (1 3)'.
	array add: 'foo'.
	self assert: array printString equals: 'an Array (1 3 ''foo'')'.
	array remove: 1; remove: 3.
	self assert: array printString equals: 'an Array (''foo'')'.
	array addLast: 3.
	self assert: array printString equals: 'an Array (''foo'' 3)'.
	array addLast: 3.
	self assert: array printString equals: 'an Array (''foo'' 3 3)'.
!

testRemove 
	| array |
	array := #(1 2 3 4 5). 
	array remove: 3.

	self assert: array equals: #(1 2 4 5).
	self should: [ array remove: 3 ] raise: Error
!

testRemoveFromTo
	
	self assert: (#(1 2 3 4) removeFrom: 1 to: 3) equals: #(4).
	self assert: (#(1 2 3 4) removeFrom: 2 to: 3) equals: #(1 4).
	self assert: (#(1 2 3 4) removeFrom: 2 to: 4) equals: #(1)
!

testRemoveIndex
	
	self assert: (#(1 2 3 4) removeIndex: 2) equals: #(1 3 4).
	self assert: (#(1 2 3 4) removeIndex: 1) equals: #(2 3 4).
	self assert: (#('hello') removeIndex: 1) equals: #()
!

testRemoveLast 
	| array |
	array := #(1 2). 
	array removeLast.
	
	self assert: array last equals: 1
!

testReversed
	|array|
	array := #(5 4 3 2 1). 
	self assert: (array reversed) equals: #(1 2 3 4 5)
!

testSort
	| array |
	array := #(3 1 4 5 2). 
	array sort.
	self assert: array equals: #(1 2 3 4 5)
! !

!ArrayTest class methodsFor: 'accessing'!

collectionClass
	^ Array
! !

SequenceableCollectionTest subclass: #StringTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!StringTest methodsFor: 'accessing'!

collection
	^ 'hello'
!

collectionWithDuplicates
	^ 'abbaerte'
! !

!StringTest methodsFor: 'tests'!

testAddRemove
	self should: [ 'hello' add: 'a' ] raise: Error.
	self should: [ 'hello' remove: 'h' ] raise: Error
!

testAsArray
	self assert: 'hello' asArray equals: #('h' 'e' 'l' 'l' 'o').
!

testAsLowerCase
	self assert: 'JACKIE' asLowercase equals: 'jackie'.
!

testAsNumber
	self assert: '3' asNumber equals: 3.
	self assert: '-3' asNumber equals: -3.
	self assert: '-1.5' asNumber equals: -1.5.
!

testAsUpperCase
	self assert: 'jackie' asUppercase equals: 'JACKIE'.
!

testAsciiValue
    | characterA characterU |
    characterA := 'A'.
    characterU := 'U'.
    self assert: (characterA asciiValue) equals:65.
    self assert: (characterU asciiValue) equals:85
!

testAt
	self assert: ('hello' at: 1) equals: 'h'.
	self assert: ('hello' at: 5) equals: 'o'.
	self assert: ('hello' at: 6 ifAbsent: [ nil ]) equals: nil
!

testAtPut
	"String instances are read-only"
	self should: [ 'hello' at: 1 put: 'a' ] raise: Error
!

testCapitalized
	self assert: 'test' capitalized equals: 'Test'.
	self assert: 'Test' capitalized equals: 'Test'.
	self assert: '' capitalized equals: ''.
	self assert: 'Test' isCapitalized equals: true.
	self assert: 'test' isCapitalized equals: false.
!

testCharCodeAt
	self assert: ('jackie' charCodeAt:1) equals: 106.
	self assert: ('jackie' charCodeAt:2) equals: 97.
	self assert: ('jackie' charCodeAt:3) equals: 99.
	self assert: ('jackie' charCodeAt:4) equals: 107.
	self assert: ('jackie' charCodeAt:5) equals: 105.
	self assert: ('jackie' charCodeAt:6) equals: 101
!

testCollect
	| newCollection |
	newCollection := 'hheelllloo'.
	self
		assertSameContents: (self collection collect: [ :each |
			each, each ])
		as: newCollection
!

testCopyFromTo
	self assert: ('jackie' copyFrom: 1 to: 3) equals: 'jac'.
	self assert: ('jackie' copyFrom: 4 to: 6) equals: 'kie'.
!

testCopyWithoutAll
	self
		assert: ('*hello* *world*' copyWithoutAll: '*')
		equals: 'hello world'
!

testDetect
	self assert: (self collection detect: [ :each | each = 'h' ]) equals: 'h'.
	self
		should: [ self collection detect: [ :each | each = 6 ] ]
		raise: Error
!

testEquality
	self assert: 'hello' equals: 'hello'.
	self deny: 'hello' = 'world'.
	
	"Test for issue 459"
	self deny: 'hello' = (#() at: 1 ifAbsent: [ ]).

	self assert: 'hello' equals: 'hello' yourself.
	self assert: 'hello' yourself equals: 'hello'.

	"test JS falsy value"
	self deny: '' = 0
!

testIdentity
	self assert: 'hello' == 'hello'.
	self deny: 'hello' == 'world'.

	self assert: 'hello' == 'hello' yourself.
	self assert: 'hello' yourself == 'hello'.

	"test JS falsy value"
	self deny: '' == 0
!

testIdentityHash
	self assert: 'foo' identityHash equals: 'foo' identityHash.
	self deny: ('foo' identityHash = 'bar' identityHash)
!

testIncludesSubString
	self assert: ('amber' includesSubString: 'ber').
	self deny: ('amber' includesSubString: 'zork').
!

testIndexOf
	self assert: (self collection indexOf: 'e') equals: 2.
	self should: [ self collection indexOf: 999 ] raise: Error.
	self assert: (self collection indexOf: 999 ifAbsent: [ 'sentinel' ]) equals: 'sentinel'
!

testIsVowel
    |vowel consonant|
    vowel := 'u'.
    consonant := 'z'.
    self assert: vowel isVowel equals: true.
    self assert: consonant isVowel equals: false
!

testJoin
	self assert: (',' join: #('hello' 'world')) equals: 'hello,world'
!

testRemoveAll
	self should: [ self collection removeAll ] raise: Error
!

testReversed
	self assert: 'jackiechan' reversed equals: 'nahceikcaj'.
!

testSelect
	| newCollection |
	newCollection := 'o'.
	self
		assertSameContents: (self collection select: [ :each |
			each = 'o' ])
		as: newCollection
!

testSize
	self assert: 'smalltalk' size equals: 9.
	self assert: '' size equals: 0
!

testStreamContents
	self
		assert: (String streamContents: [ :aStream |
			aStream
				nextPutAll: 'hello'; space;
				nextPutAll: 'world' ])
		equals: 'hello world'
!

testSubStrings
	self assert: ('jackiechan' subStrings: 'ie') equals: #( 'jack' 'chan' ).
!

testTrim
	self assert: '       jackie' trimLeft equals: 'jackie'.
	self assert: 'jackie               ' trimRight equals: 'jackie'.
! !

!StringTest class methodsFor: 'accessing'!

collectionClass
	^ String
! !

TestCase subclass: #ConsoleTranscriptTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!ConsoleTranscriptTest methodsFor: 'tests'!

testShow
| originalTranscript |
originalTranscript := Transcript current.
Transcript register: ConsoleTranscript new.

self shouldnt: [ Transcript show: 'Hello console!!' ] raise: Error.
self shouldnt: [ Transcript show: console ] raise: Error.

Transcript register: originalTranscript.
! !

TestCase subclass: #JSObjectProxyTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!JSObjectProxyTest methodsFor: 'accessing'!

jsObject
	<return jsObject = {a: 1, b: function() {return 2;}, c: function(object) {return object;}, d: '', 'e': null, 'f': void 0}>
! !

!JSObjectProxyTest methodsFor: 'tests'!

testAtIfAbsent
	| testObject |
	testObject := self jsObject.
	self assert: (testObject at: 'abc' ifAbsent: [ 'Property does not exist' ]) equals: 'Property does not exist'.
	self assert: (testObject at: 'e' ifAbsent: [ 'Property does not exist' ]) equals: nil.
	self assert: (testObject at: 'a' ifAbsent: [ 'Property does not exist' ]) equals: 1.
	self assert: (testObject at: 'f' ifAbsent: [ 'Property does not exist' ]) equals: nil.
!

testAtIfPresent
	| testObject |
	
	testObject := self jsObject.
	
	self assert: (testObject at: 'abc' ifPresent: [ :x | 'hello ',x asString ]) equals: nil.
	self assert: (testObject at: 'e' ifPresent: [ :x | 'hello ',x asString ]) equals: 'hello nil'.
	self assert: (testObject at: 'a' ifPresent: [ :x | 'hello ',x asString ]) equals: 'hello 1'.
	self assert: (testObject at: 'f' ifPresent: [ :x | 'hello ',x asString ]) equals: 'hello nil'.
!

testAtIfPresentIfAbsent
	| testObject |
	testObject := self jsObject.
	self assert: (testObject at: 'abc' ifPresent: [ :x|'hello ',x asString ] ifAbsent: [ 'not present' ]) equals: 'not present'.
	self assert: (testObject at: 'e' ifPresent: [ :x|'hello ',x asString ] ifAbsent: [ 'not present' ]) equals: 'hello nil'.
	self assert: (testObject at: 'a' ifPresent: [ :x|'hello ',x asString ] ifAbsent: [ 'not present' ]) equals: 'hello 1'.
	self assert: (testObject at: 'f' ifPresent: [ :x|'hello ',x asString ] ifAbsent: [ 'not present' ]) equals: 'hello nil'.
!

testDNU
	self should: [ self jsObject foo ] raise: MessageNotUnderstood
!

testMessageSend

	self assert: self jsObject a equals: 1.
	self assert: self jsObject b equals: 2.
	self assert: (self jsObject c: 3) equals: 3
!

testMethodWithArguments
	self assert: (self jsObject c: 1) equals: 1
!

testPrinting
	self assert: self jsObject printString equals: '[object Object]'
!

testPropertyThatReturnsEmptyString
	| object |

	object := self jsObject.
	self assert: object d equals: ''.

	object d: 'hello'.
	self assert: object d equals: 'hello'
!

testPropertyThatReturnsUndefined
	| object |

	object := self jsObject.
	self shouldnt: [ object e ] raise: MessageNotUnderstood.
	self assert: object e isNil
!

testValue
	| testObject |
	testObject := self jsObject.
	self assert: testObject value printString equals: '[object Object]'.
	testObject at: 'value' put: 'aValue'.
	self assert: testObject value equals: 'aValue'
!

testYourself
	| object |
	object := self jsObject
		d: 'test';
		yourself.

	self assert: object d equals: 'test'
! !

TestCase subclass: #JavaScriptExceptionTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!JavaScriptExceptionTest methodsFor: 'helpers'!

throwException
	<throw 'test'>
! !

!JavaScriptExceptionTest methodsFor: 'tests'!

testCatchingException
	[ self throwException ]
		on: Error
		do: [ :error |
			self assert: error exception = 'test' ]
!

testRaisingException
	self should: [ self throwException ] raise: JavaScriptException
! !

TestCase subclass: #MessageSendTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!MessageSendTest methodsFor: 'tests'!

testValue
	| messageSend |
	
	messageSend := MessageSend new
		receiver: Object new;
		selector: #asString;
		yourself.
		
	self assert: messageSend value equals: 'an Object'
!

testValueWithArguments
	| messageSend |
	
	messageSend := MessageSend new
		receiver: 2;
		selector: '+';
		yourself.
		
	self assert: (messageSend value: 3) equals: 5.
	
	self assert: (messageSend valueWithPossibleArguments: #(4)) equals: 6
! !

TestCase subclass: #MethodInheritanceTest
	instanceVariableNames: 'receiverTop receiverMiddle receiverBottom method performBlock'
	package: 'Kernel-Tests'!

!MethodInheritanceTest methodsFor: 'accessing'!

codeGeneratorClass
	^ CodeGenerator
!

targetClassBottom
	^ JavaScriptException
!

targetClassMiddle
	^ Error
!

targetClassTop
	^ Object
! !

!MethodInheritanceTest methodsFor: 'factory'!

compiler
	^ Compiler new
		codeGeneratorClass: self codeGeneratorClass;
		yourself
! !

!MethodInheritanceTest methodsFor: 'initialization'!

setUp
	receiverTop := self targetClassTop new.
	receiverMiddle := self targetClassMiddle new.
	receiverBottom := self targetClassBottom new.
	method := nil.
	performBlock := [ self error: 'performBlock not initialized' ]
!

tearDown
	[ self deinstallTop ] on: Error do: [ ].
	[ self deinstallMiddle ] on: Error do: [ ].
	[ self deinstallBottom ] on: Error do: [ ]
! !

!MethodInheritanceTest methodsFor: 'testing'!

deinstallBottom
	self targetClassBottom removeCompiledMethod: method
!

deinstallMiddle
	self targetClassMiddle removeCompiledMethod: method
!

deinstallTop
	self targetClassTop removeCompiledMethod: method
!

installBottom: aString
	method := self compiler install: aString forClass: self targetClassBottom category: 'tests'
!

installMiddle: aString
	method := self compiler install: aString forClass: self targetClassMiddle category: 'tests'
!

installTop: aString
	method := self compiler install: aString forClass: self targetClassTop category: 'tests'
!

shouldMNU
	self shouldMNUTop.
	self shouldMNUMiddle.
	self shouldMNUBottom
!

shouldMNUBottom
	self should: [ performBlock value: receiverBottom ] raise: MessageNotUnderstood
!

shouldMNUMiddle
	self should: [ performBlock value: receiverMiddle ] raise: MessageNotUnderstood
!

shouldMNUTop
	self should: [ performBlock value: receiverTop ] raise: MessageNotUnderstood
!

shouldReturn: anObject
	| result |

	result := performBlock value: receiverTop.
	self assert: { 'top'. anObject } equals: { 'top'. result }.
	result := performBlock value: receiverMiddle.
	self assert: { 'middle'. anObject } equals: { 'middle'. result }.
	result := performBlock value: receiverBottom.
	self assert: { 'bottom'. anObject } equals: { 'bottom'. result }
!

shouldReturn: anObject and: anObject2 and: anObject3
	| result |

	result := performBlock value: receiverTop.
	self assert: { 'top'. anObject } equals: { 'top'. result }.
	result := performBlock value: receiverMiddle.
	self assert: { 'middle'. anObject2 } equals: { 'middle'. result }.
	result := performBlock value: receiverBottom.
	self assert: { 'bottom'. anObject3 } equals: { 'bottom'. result }
! !

!MethodInheritanceTest methodsFor: 'tests'!

testMNU11
	performBlock := [ :x | x foo ].
	self shouldMNU.
	self installTop: 'foo ^ false'.
	self installTop: 'foo ^ true'.
	self deinstallTop.
	self shouldMNU
!

testMNU22
	performBlock := [ :x | x foo ].
	self shouldMNU.
	self installMiddle: 'foo ^ false'.
	self installMiddle: 'foo ^ true'.
	self deinstallMiddle.
	self shouldMNU
!

testReturns1
	performBlock := [ :x | x foo ].
	self installTop: 'foo ^ false'.
	self shouldReturn: false.
	self installTop: 'foo ^ true'.
	self shouldReturn: true
! !

TestCase subclass: #NumberTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!NumberTest methodsFor: 'tests'!

testAbs
	self assert: 4 abs equals: 4.
	self assert: -4 abs equals: 4
!

testArithmetic
	
	"We rely on JS here, so we won't test complex behavior, just check if
	message sends are corrects"

	self assert: 1.5 + 1 equals: 2.5.
	self assert: 2 - 1 equals: 1.
	self assert: -2 - 1 equals: -3.
	self assert: 12 / 2 equals: 6.
	self assert: 3 * 4 equals: 12.
	self assert: 7 // 2 equals: 3.
	self assert: 7 \\ 2 equals: 1.

	"Simple parenthesis and execution order"
	self assert: 1 + 2 * 3 equals: 9.
	self assert: 1 + (2 * 3) equals: 7
!

testAsNumber
	self assert: 3 asNumber equals: 3.
!

testCeiling
	self assert: 1.2 ceiling equals: 2.
	self assert: -1.2 ceiling equals: -1.
	self assert: 1.0 ceiling equals: 1.
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

testCopying
	self assert: 1 copy == 1.
	self assert: 1 deepCopy == 1
!

testEquality
	self assert: (1 = 1).
	self assert: (0 = 0).
	self deny: (1 = 0).

	self assert: (1 yourself = 1).
	self assert: (1 = 1 yourself).
	self assert: (1 yourself = 1 yourself).
	
	self deny: 0 = false.
	self deny: false = 0.
	self deny: '' = 0.
	self deny: 0 = ''
!

testFloor
	self assert: 1.2 floor equals: 1.
	self assert: -1.2 floor equals: -2.
	self assert: 1.0 floor equals: 1.
!

testHexNumbers

	self assert: 16r9 equals: 9.
	self assert: 16rA truncated equals: 10.
	self assert: 16rB truncated equals: 11.
	self assert: 16rC truncated equals: 12.
	self assert: 16rD truncated equals: 13.
	self assert: 16rE truncated equals: 14.
	self assert: 16rF truncated equals: 15
!

testIdentity
	self assert: 1 == 1.
	self assert: 0 == 0.
	self deny: 1 == 0.

	self assert: 1 yourself == 1.
	self assert: 1 == 1 yourself.
	self assert: 1 yourself == 1 yourself.
	
	self deny: 1 == 2
!

testInvalidHexNumbers

	self should: [ 16rG ] raise: MessageNotUnderstood.
	self should: [ 16rg ] raise: MessageNotUnderstood.
	self should: [ 16rH ] raise: MessageNotUnderstood.
	self should: [ 16rh ] raise: MessageNotUnderstood.
	self should: [ 16rI ] raise: MessageNotUnderstood.
	self should: [ 16ri ] raise: MessageNotUnderstood.
	self should: [ 16rJ ] raise: MessageNotUnderstood.
	self should: [ 16rj ] raise: MessageNotUnderstood.
	self should: [ 16rK ] raise: MessageNotUnderstood.
	self should: [ 16rk ] raise: MessageNotUnderstood.
	self should: [ 16rL ] raise: MessageNotUnderstood.
	self should: [ 16rl ] raise: MessageNotUnderstood.
	self should: [ 16rM ] raise: MessageNotUnderstood.
	self should: [ 16rm ] raise: MessageNotUnderstood.
	self should: [ 16rN ] raise: MessageNotUnderstood.
	self should: [ 16rn ] raise: MessageNotUnderstood.
	self should: [ 16rO ] raise: MessageNotUnderstood.
	self should: [ 16ro ] raise: MessageNotUnderstood.
	self should: [ 16rP ] raise: MessageNotUnderstood.
	self should: [ 16rp ] raise: MessageNotUnderstood.
	self should: [ 16rQ ] raise: MessageNotUnderstood.
	self should: [ 16rq ] raise: MessageNotUnderstood.
	self should: [ 16rR ] raise: MessageNotUnderstood.
	self should: [ 16rr ] raise: MessageNotUnderstood.
	self should: [ 16rS ] raise: MessageNotUnderstood.
	self should: [ 16rs ] raise: MessageNotUnderstood.
	self should: [ 16rT ] raise: MessageNotUnderstood.
	self should: [ 16rt ] raise: MessageNotUnderstood.
	self should: [ 16rU ] raise: MessageNotUnderstood.
	self should: [ 16ru ] raise: MessageNotUnderstood.
	self should: [ 16rV ] raise: MessageNotUnderstood.
	self should: [ 16rv ] raise: MessageNotUnderstood.
	self should: [ 16rW ] raise: MessageNotUnderstood.
	self should: [ 16rw ] raise: MessageNotUnderstood.
	self should: [ 16rX ] raise: MessageNotUnderstood.
	self should: [ 16rx ] raise: MessageNotUnderstood.
	self should: [ 16rY ] raise: MessageNotUnderstood.
	self should: [ 16ry ] raise: MessageNotUnderstood.
	self should: [ 16rZ ] raise: MessageNotUnderstood.
	self should: [ 16rz ] raise: MessageNotUnderstood.
	self should: [ 16rABcdEfZ ] raise: MessageNotUnderstood.
!

testLog
	self assert: 10000 log equals: 4.
	self assert: (512 log: 2) equals: 9.
	self assert: Number e ln equals: 1.
!

testMinMax
	
	self assert: (2 max: 5) equals: 5.
	self assert: (2 min: 5) equals: 2
!

testNegated
	self assert: 3 negated equals: -3.
	self assert: -3 negated equals: 3
!

testPrintShowingDecimalPlaces
	self assert: (23 printShowingDecimalPlaces: 2) equals: '23.00'.
	self assert: (23.5698 printShowingDecimalPlaces: 2) equals: '23.57'.
	self assert: (234.567 negated printShowingDecimalPlaces: 5) equals: '-234.56700'.
	self assert: (23.4567 printShowingDecimalPlaces: 0) equals: '23'.
	self assert: (23.5567 printShowingDecimalPlaces: 0) equals: '24'.
	self assert: (23.4567 negated printShowingDecimalPlaces: 0) equals: '-23'.
	self assert: (23.5567 negated printShowingDecimalPlaces: 0) equals: '-24'.
	self assert: (100000000 printShowingDecimalPlaces: 1) equals: '100000000.0'.
	self assert: (0.98 printShowingDecimalPlaces: 5) equals: '0.98000'.
	self assert: (0.98 negated printShowingDecimalPlaces: 2) equals: '-0.98'.
	self assert: (2.567 printShowingDecimalPlaces: 2) equals: '2.57'.
	self assert: (-2.567 printShowingDecimalPlaces: 2) equals: '-2.57'.
	self assert: (0 printShowingDecimalPlaces: 2) equals: '0.00'.
!

testRaisedTo
	self assert: (2 raisedTo: 4) equals: 16.
	self assert: (2 raisedTo: 0) equals: 1.
	self assert: (2 raisedTo: -3) equals: 0.125.
	self assert: (4 raisedTo: 0.5) equals: 2.
	
	self assert: 2 ** 4 equals: 16.
!

testRounded
	
	self assert: 3 rounded equals: 3.
	self assert: 3.212 rounded equals: 3.
	self assert: 3.51 rounded equals: 4
!

testSign
	self assert: 5 sign equals: 1.
	self assert: 0 sign equals: 0.
	self assert: -1.4 sign equals: -1.
!

testSqrt
	
	self assert: 4 sqrt equals: 2.
	self assert: 16 sqrt equals: 4
!

testSquared
	
	self assert: 4 squared equals: 16
!

testTimesRepeat
	| i |

	i := 0.
	0 timesRepeat: [ i := i + 1 ].
	self assert: i equals: 0.

	5 timesRepeat: [ i := i + 1 ].
	self assert: i equals: 5
!

testTo
	self assert: (1 to: 5) equals: #(1 2 3 4 5)
!

testToBy
	self assert: (0 to: 6 by: 2) equals: #(0 2 4 6).

	self should: [ 1 to: 4 by: 0 ] raise: Error
!

testTrigonometry
	self assert: 0 cos equals: 1.
	self assert: 0 sin equals: 0.
	self assert: 0 tan equals: 0.
	self assert: 1 arcCos equals: 0.
	self assert: 0 arcSin equals: 0.
	self assert: 0 arcTan equals: 0.
!

testTruncated
	
	self assert: 3 truncated equals: 3.
	self assert: 3.212 truncated equals: 3.
	self assert: 3.51 truncated equals: 3
! !

Object subclass: #ObjectMock
	instanceVariableNames: 'foo bar'
	package: 'Kernel-Tests'!
!ObjectMock commentStamp!
ObjectMock is there only to perform tests on classes.!

!ObjectMock methodsFor: 'not yet classified'!

foo
	^ foo
!

foo: anObject
	foo := anObject
! !

TestCase subclass: #ObjectTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!ObjectTest methodsFor: 'tests'!

notDefined
	<return void 0;>
!

testBasicAccess
	| o |
	o := Object new.
	o basicAt: 'a' put: 1.
	self assert: (o basicAt: 'a') equals: 1.
	self assert: (o basicAt: 'b') equals: nil
!

testBasicPerform
	| o |
	o := Object new.
	o basicAt: 'func' put: [ 'hello' ].
	o basicAt: 'func2' put: [ :a | a + 1 ].

	self assert: (o basicPerform: 'func') equals: 'hello'.
	self assert: (o basicPerform: 'func2' withArguments: #(3)) equals: 4
!

testDNU
	self should: [ Object new foo ] raise: MessageNotUnderstood
!

testEquality
	| o |
	o := Object new.
	self deny: o = Object new.
	self assert: (o = o).
	self assert: (o yourself = o).
	self assert: (o = o yourself)
!

testHalt
	self should: [ Object new halt ] raise: Error
!

testIdentity
	| o |
	o := Object new.
	self deny: o == Object new.
	self assert: o == o.
	self assert: o yourself == o.
	self assert: o == o yourself
!

testIfNil
	self deny: Object new isNil.
	self deny: (Object new ifNil: [ true ]) = true.
	self assert: (Object new ifNotNil: [ true ]) equals: true.

	self assert: (Object new ifNil: [ false ] ifNotNil: [ true ]) equals: true.
	self assert: (Object new ifNotNil: [ true ] ifNil: [ false ]) equals: true
!

testInstVars
	| o |
	o := ObjectMock new.
	self assert: (o instVarAt: #foo) equals: nil.

	o instVarAt: #foo put: 1.
	self assert: (o instVarAt: #foo) equals: 1.
	self assert: (o instVarAt: 'foo') equals: 1
!

testNilUndefined
	"nil in Smalltalk is the undefined object in JS"

	self assert: self notDefined equals: nil
!

testYourself
	| o |
	o := ObjectMock new.
	self assert: o yourself == o
!

testidentityHash
	| o1 o2 |
	
	o1 := Object new.
	o2 := Object new.

	self assert: o1 identityHash == o1 identityHash.
	self deny: o1 identityHash == o2 identityHash
! !

TestCase subclass: #PointTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!PointTest methodsFor: 'tests'!

testAccessing
	self assert: (Point x: 3 y: 4) x equals: 3.
	self assert: (Point x: 3 y: 4) y equals: 4.
	self assert: (Point new x: 3) x equals: 3.
	self assert: (Point new y: 4) y equals: 4
!

testArithmetic
	self assert: 3@4 * (3@4 ) equals: (Point x: 9 y: 16).
	self assert: 3@4 + (3@4 ) equals: (Point x: 6 y: 8).
	self assert: 3@4 - (3@4 ) equals: (Point x: 0 y: 0).
	self assert: 6@8 / (3@4 ) equals: (Point x: 2 y: 2)
!

testAt
	self assert: 3@4 equals: (Point x: 3 y: 4)
!

testEgality
	self assert: (3@4 = (3@4)).
	self deny: 3@5 = (3@6)
!

testNew

	self assert: (Point new x: 3) y equals: nil.
	self deny: (Point new x: 3) x = 0.
	self assert: (Point new y: 4) x equals: nil.
	self deny: (Point new y: 4) y = 0
!

testTranslateBy
	self assert: (3@3 translateBy: 0@1) equals: 3@4.
	self assert: (3@3 translateBy: 0@1 negated) equals: 3@2.
	self assert: (3@3 translateBy: 2@3) equals: 5@6.
	self assert: (3@3 translateBy: 3 negated @0) equals: 0@3.
! !

TestCase subclass: #QueueTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!QueueTest methodsFor: 'tests'!

testNextIfAbsent
	| queue |
	queue := Queue new.
	queue nextPut: 'index1'. 

	self assert: (queue  nextIfAbsent: 'empty') = 'index1'.
	self deny: (queue  nextIfAbsent: 'empty') = 'index1'
!

testQueueNext
	| queue |               
	queue := Queue new.
	queue 
		nextPut: 'index1';
		nextPut: 'index2'.

	self assert: queue next = 'index1'.
	self deny: queue next = 'index'.
	self should: [ queue next ] raise: Error
! !

TestCase subclass: #RandomTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!RandomTest methodsFor: 'tests'!

testAtRandomNumber
	|val|	

	100 timesRepeat: [
		val := 10 atRandom.	
		self assert: (val > 0).
		self assert: (val <11)
	]
!

testAtRandomSequenceableCollection
	|val|
	
	100 timesRepeat: [
		val := 'abc' atRandom.
		self assert: ((val = 'a') | (val = 'b') | (val = 'c' )).
	].
!

textNext

	10000 timesRepeat: [
			| current next |
			next := Random new next.
			self assert: (next >= 0).
			self assert: (next < 1).
			self deny: current = next.
			next = current ]
! !

TestCase subclass: #SetTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!SetTest methodsFor: 'tests'!

testAddRemove
	| set |
	set := Set new.
	
	self assert: set isEmpty.

	set add: 3.
	self assert: (set includes: 3).

	set add: 5.
	self assert: (set includes: 5).

	set remove: 3.
	self deny: (set includes: 3)
!

testAt
	self should: [ Set new at: 1 put: 2 ] raise: Error
!

testCollect
	self assert: (#(5 6 8) asSet collect: [ :x | x \\ 3 ]) equals: #(0 2) asSet
!

testComparing
	self assert: #(0 2) asSet equals: #(0 2) asSet.
	self assert: #(2 0) asSet equals: #(0 2) asSet.
	self deny: #(0 2 3) asSet = #(0 2) asSet.
	self deny: #(1 2) asSet = #(0 2) asSet
!

testPrintString
	| set |
	set := Set new.
	self assert: set printString equals: 'a Set ()'.
	set add: 1; add: 3.
	self assert: set printString equals: 'a Set (1 3)'.
	set add: 'foo'.
	self assert: set printString equals: 'a Set (1 3 ''foo'')'.
	set remove: 1; remove: 3.
	self assert: set printString equals: 'a Set (''foo'')'.
	set add: 3.
	self assert: set printString equals: 'a Set (''foo'' 3)'.
	set add: 3.
	self assert: set printString equals: 'a Set (''foo'' 3)'
!

testSize
	self assert: Set new size equals: 0.
	self assert: (Set withAll: #(1 2 3 4)) size equals: 4.
	self assert: (Set withAll: #(1 1 1 1)) size equals: 1
!

testUnboxedObjects
	self assert: {'foo' yourself. 'foo' yourself} asSet asArray equals: #('foo')
!

testUnicity
	| set |
	set := Set new.
	set add: 21.
	set add: 'hello'.

	set add: 21.
	self assert: set size equals: 2.
	
	set add: 'hello'.
	self assert: set size equals: 2.

	self assert: set asArray equals: #(21 'hello')
! !

TestCase subclass: #StreamTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!StreamTest methodsFor: 'accessing'!

collectionClass
	^ self class collectionClass
!

newCollection
	^ self collectionClass new
!

newStream
	^ self collectionClass new stream
! !

!StreamTest methodsFor: 'tests'!

testAtStartAtEnd
	| stream |
	
	stream := self newStream.
	self assert: stream atStart.
	self assert: stream atEnd.
	
	stream nextPutAll: self newCollection.
	self assert: stream atEnd.
	self deny: stream atStart.
	
	stream position: 1.
	self deny: stream atEnd.
	self deny: stream atStart
!

testContents
	| stream |
	
	stream := self newStream.
	stream nextPutAll: self newCollection.
	
	self assert: stream contents equals: self newCollection
!

testIsEmpty
	| stream |
	
	stream := self newStream.
	self assert: stream isEmpty.
	
	stream nextPutAll: self newCollection.
	self deny: stream isEmpty
!

testPosition
	| collection stream |
	
	collection := self newCollection.
	stream := self newStream.
	
	stream nextPutAll: collection.
	self assert: stream position equals: collection size.
	
	stream position: 0.
	self assert: stream position equals: 0.
	
	stream next.
	self assert: stream position equals: 1.
	
	stream next.
	self assert: stream position equals: 2
!

testReading
	| stream collection |
	
	collection := self newCollection.
	stream := self newStream.
	
	stream 
		nextPutAll: collection;
		position: 0.
	
	collection do: [ :each |
		self assert: stream next equals: each ].
		
	self assert: stream next isNil
!

testStreamContents
!

testWrite
	| stream collection |
	
	collection := self newCollection.
	stream := self newStream.
	
	collection do: [ :each | stream << each ].
	self assert: stream contents equals: collection
!

testWriting
	| stream collection |
	
	collection := self newCollection.
	stream := self newStream.
	
	collection do: [ :each | stream nextPut: each ].
	self assert: stream contents equals: collection.
	
	stream := self newStream.
	stream nextPutAll: collection.
	self assert: stream contents equals: collection
! !

!StreamTest class methodsFor: 'accessing'!

collectionClass
	^ nil
! !

!StreamTest class methodsFor: 'testing'!

isAbstract
	^ self collectionClass isNil
! !

StreamTest subclass: #ArrayStreamTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!ArrayStreamTest methodsFor: 'accessing'!

newCollection
	^ { true. 1. 3@4. 'foo' }
! !

!ArrayStreamTest class methodsFor: 'accessing'!

collectionClass
	^ Array
! !

StreamTest subclass: #StringStreamTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!StringStreamTest methodsFor: 'accessing'!

newCollection
	^ 'hello world'
! !

!StringStreamTest class methodsFor: 'accessing'!

collectionClass
	^ String
! !

TestCase subclass: #UndefinedTest
	instanceVariableNames: ''
	package: 'Kernel-Tests'!

!UndefinedTest methodsFor: 'tests'!

testCopying
	self assert: nil copy equals: nil
!

testDeepCopy
	self assert: nil deepCopy = nil
!

testIfNil
	self assert: (nil ifNil: [ true ]) equals: true.
	self deny: (nil ifNotNil: [ true ]) = true.
	self assert: (nil ifNil: [ true ] ifNotNil: [ false ]) equals: true.
	self deny: (nil ifNotNil: [ true ] ifNil: [ false ]) = true
!

testIsNil
	self assert: nil isNil.
	self deny: nil notNil.
! !

