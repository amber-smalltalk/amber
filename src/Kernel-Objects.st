Smalltalk createPackage: 'Kernel-Objects'!
nil subclass: #ProtoObject
	instanceVariableNames: ''
	package: 'Kernel-Objects'!
!ProtoObject commentStamp!
I implement the basic behavior required for any object in Amber.

In most cases, subclassing `ProtoObject` is wrong and `Object` should be used instead. However subclassing `ProtoObject` can be useful in some special cases like proxy implementations.!

!ProtoObject methodsFor: 'accessing'!

class
	<return self.klass>
!

identityHash
	<
		var hash=self.identityHash;
		if (hash) return hash;
		hash=smalltalk.nextId();
		Object.defineProperty(self, 'identityHash', {value:hash});
		return hash;
	>
!

instVarAt: aString
	< return self['@'+aString] >
!

instVarAt: aString put: anObject
	< self['@' + aString] = anObject >
!

yourself
	^ self
! !

!ProtoObject methodsFor: 'comparing'!

= anObject
	^ self == anObject
!

== anObject
	^ self identityHash = anObject identityHash
!

~= anObject
	^ (self = anObject) = false
!

~~ anObject
	^ (self == anObject) = false
! !

!ProtoObject methodsFor: 'converting'!

asString
	^ self printString
! !

!ProtoObject methodsFor: 'error handling'!

doesNotUnderstand: aMessage
	MessageNotUnderstood new
		receiver: self;
		message: aMessage;
		signal
! !

!ProtoObject methodsFor: 'evaluating'!

evaluate: aString on: anEvaluator
	^ anEvaluator evaluate: aString receiver: self
! !

!ProtoObject methodsFor: 'initialization'!

initialize
! !

!ProtoObject methodsFor: 'inspecting'!

inspect
	Inspector inspect: self
!

inspectOn: anInspector
! !

!ProtoObject methodsFor: 'message handling'!

perform: aString
	^ self perform: aString withArguments: #()
!

perform: aString withArguments: aCollection
	<return smalltalk.send(self, aString._asSelector(), aCollection)>
! !

!ProtoObject methodsFor: 'printing'!

printOn: aStream
	aStream nextPutAll: (self class name first isVowel
		ifTrue: [ 'an ' ]
		ifFalse: [ 'a ' ]).
	aStream nextPutAll: self class name
!

printString
	^ String streamContents: [ :str | 
		self printOn: str ]
! !

!ProtoObject class methodsFor: 'accessing'!

heliosClass
	"Should be an Helios extension. Unfortunately, since helios can browse remote
	environments, we can't extend base classes"
	
	^ 'class'
! !

!ProtoObject class methodsFor: 'initialization'!

initialize
! !

ProtoObject subclass: #Object
	instanceVariableNames: ''
	package: 'Kernel-Objects'!
!Object commentStamp!
**I am the root of the Smalltalk class system**. With the exception of unual subclasses of `ProtoObject`, all other classes in the system are subclasses of me.

I provide default behavior common to all normal objects (some of it inherited from `ProtoObject`), such as:

- accessing
- copying
- comparison
- error handling
- message sending
- reflection

Also utility messages that all objects should respond to are defined here.

I have no instance variable.

##Access

Instance variables can be accessed with `#instVarAt:` and `#instVarAt:put:`. `#instanceVariableNames` answers a collection of all instance variable names.
Accessing JavaScript properties of an object is done through `#basicAt:`, `#basicAt:put:` and `basicDelete:`.

##Copying

Copying an object is handled by `#copy` and `#deepCopy`. The first one performs a shallow copy of the receiver, while the second one performs a deep copy.
The hook method `#postCopy` can be overriden in subclasses to copy fields as necessary to complete the full copy. It will be sent by the copy of the receiver.

##Comparison

I understand equality `#=` and identity `#==` comparison.

##Error handling

- `#halt` is the typical message to use for inserting breakpoints during debugging.
- `#error:` throws a generic error exception
- `#doesNotUnderstand:` handles the fact that there was an attempt to send the given message to the receiver but the receiver does not understand this message.
	Overriding this message can be useful to implement proxies for example.!

!Object methodsFor: 'accessing'!

basicAt: aString
	<return self[aString]>
!

basicAt: aString put: anObject
	<return self[aString] = anObject>
!

basicDelete: aString
	<delete self[aString]; return aString>
!

size
	self error: 'Object not indexable'
!

value
	<return self.valueOf()>
! !

!Object methodsFor: 'browsing'!

browse
	Finder findClass: self class
! !

!Object methodsFor: 'converting'!

-> anObject
	^ Association key: self value: anObject
!

asJSON
	| variables |
	variables := HashedCollection new.
	self class allInstanceVariableNames do: [ :each |
		variables at: each put: (self instVarAt: each) asJSON ].
	^ variables
!

asJSONString
	^ JSON stringify: self asJSON
!

asJavascript
	^ self asString
! !

!Object methodsFor: 'copying'!

copy
	^ self shallowCopy postCopy
!

deepCopy
	<
		var copy = self.klass._new();
		Object.keys(self).forEach(function (i) {
		if(/^@.+/.test(i)) {
			copy[i] = self[i]._deepCopy();
		}
		});
		return copy;
	>
!

postCopy
!

shallowCopy
	<
		var copy = self.klass._new();
		Object.keys(self).forEach(function(i) {
		if(/^@.+/.test(i)) {
			copy[i] = self[i];
		}
		});
		return copy;
	>
! !

!Object methodsFor: 'error handling'!

deprecatedAPI
	"Just a simple way to deprecate methods.
	#deprecatedAPI is in the 'error handling' protocol even if it doesn't throw an error,
	but it could in the future."
	console warn: thisContext home asString, ' is deprecated!! (in ', thisContext home home asString, ')'.
!

deprecatedAPI: aString
	"Just a simple way to deprecate methods.
	#deprecatedAPI is in the 'error handling' protocol even if it doesn't throw an error,
	but it could in the future."
	console warn: thisContext home asString, ' is deprecated!! (in ', thisContext home home asString, ')'.
	console warn: aString
!

error: aString
	Error signal: aString
!

halt
	Halt signal
!

shouldNotImplement
	self error: 'This method should not be implemented in ', self class name
!

subclassResponsibility
	self error: 'This method is a responsibility of a subclass'
!

throw: anObject
	< throw anObject >
!

try: aBlock catch: anotherBlock
	self deprecatedAPI.
	
	^ aBlock tryCatch: anotherBlock
! !

!Object methodsFor: 'inspecting'!

inspectOn: anInspector
	| variables |
	variables := Dictionary new.
	variables at: '#self' put: self.
	self class allInstanceVariableNames do: [ :each |
		variables at: each put: (self instVarAt: each) ].
	anInspector
		setLabel: self printString;
		setVariables: variables
! !

!Object methodsFor: 'message handling'!

basicPerform: aString
	^ self basicPerform: aString withArguments: #()
!

basicPerform: aString withArguments: aCollection
	<return self[aString].apply(self, aCollection);>
! !

!Object methodsFor: 'streaming'!

putOn: aStream
	aStream nextPut: self
! !

!Object methodsFor: 'testing'!

ifNil: aBlock
	"inlined in the Compiler"
	^ self
!

ifNil: aBlock ifNotNil: anotherBlock
	"inlined in the Compiler"
	^ anotherBlock value: self
!

ifNotNil: aBlock
	"inlined in the Compiler"
	^ aBlock value: self
!

ifNotNil: aBlock ifNil: anotherBlock
	"inlined in the Compiler"
	^ aBlock value: self
!

isBehavior
	^ false
!

isBoolean
	^ false
!

isClass
	^ false
!

isCompiledMethod
	^ false
!

isImmutable
	^ false
!

isKindOf: aClass
	^ (self isMemberOf: aClass)
		ifTrue: [ true ]
		ifFalse: [ self class inheritsFrom: aClass ]
!

isMemberOf: aClass
	^ self class = aClass
!

isMetaclass
	^ false
!

isNil
	^ false
!

isNumber
	^ false
!

isPackage
	^ false
!

isParseFailure
	^ false
!

isString
	^ false
!

isSymbol
	^ false
!

notNil
	^ self isNil not
!

respondsTo: aSelector
	^ self class canUnderstand: aSelector
! !

!Object class methodsFor: 'helios'!

accessorProtocolWith: aGenerator
	aGenerator accessorProtocolForObject
!

accessorsSourceCodesWith: aGenerator
	aGenerator accessorsForObject
!

heliosClass
	"Should be an Helios extension. Unfortunately, since helios can browse remote
	environments, we can't extend base classes"
	
	^ 'class'
!

initializeProtocolWith: aGenerator
	aGenerator initializeProtocolForObject
!

initializeSourceCodesWith: aGenerator
	aGenerator initializeForObject
! !

!Object class methodsFor: 'initialization'!

initialize
	"no op"
! !

Object subclass: #Boolean
	instanceVariableNames: ''
	package: 'Kernel-Objects'!
!Boolean commentStamp!
I define the protocol for logic testing operations and conditional control structures for the logical values (see the `controlling` protocol).

I have two instances, `true` and `false`.

I am directly mapped to JavaScript Boolean. The `true` and `false` objects are the JavaScript boolean objects.

## Usage Example:

    aBoolean not ifTrue: [ ... ] ifFalse: [ ... ]!

!Boolean methodsFor: 'comparing'!

= aBoolean
	<
		return aBoolean !!= null &&
			typeof aBoolean._isBoolean === "function" &&
			aBoolean._isBoolean() &&
			Boolean(self == true) == aBoolean
	>
!

== aBoolean
	^ self = aBoolean
! !

!Boolean methodsFor: 'controlling'!

& aBoolean
	<
		if(self == true) {
		return aBoolean;
		} else {
		return false;
		}
	>
!

and: aBlock
	^ self = true
		ifTrue: aBlock
		ifFalse: [ false ]
!

ifFalse: aBlock
	"inlined in the Compiler"
	^ self ifTrue: [] ifFalse: aBlock
!

ifFalse: aBlock ifTrue: anotherBlock
	"inlined in the Compiler"
	^ self ifTrue: anotherBlock ifFalse: aBlock
!

ifTrue: aBlock
	"inlined in the Compiler"
	^ self ifTrue: aBlock ifFalse: []
!

ifTrue: aBlock ifFalse: anotherBlock
	"inlined in the Compiler"
	<
		if(self == true) {
		return aBlock._value();
		} else {
		return anotherBlock._value();
		}
	>
!

not
	^ self = false
!

or: aBlock
	^ self = true
		ifTrue: [ true ]
		ifFalse: aBlock
!

| aBoolean
	<
		if(self == true) {
		return true;
		} else {
		return aBoolean;
		}
	>
! !

!Boolean methodsFor: 'converting'!

asBit
	^ self ifTrue: [ 1 ] ifFalse: [ 0 ]
!

asJSON
	^ self
!

asString
	< return self.toString() >
! !

!Boolean methodsFor: 'copying'!

deepCopy
	^ self
!

shallowCopy
	^ self
! !

!Boolean methodsFor: 'printing'!

printOn: aStream
	aStream nextPutAll: self asString
! !

!Boolean methodsFor: 'testing'!

isBoolean
	^ true
!

isImmutable
	^ true
! !

Object subclass: #Date
	instanceVariableNames: ''
	package: 'Kernel-Objects'!
!Date commentStamp!
I am used to work with both dates and times. Therefore `Date today` and `Date now` are both valid in
Amber and answer the same date object.

Date directly maps to the `Date()` JavaScript constructor, and Amber date objects are JavaScript date objects.

## API

The class-side `instance creation` protocol contains some convenience methods for creating date/time objects such as `#fromSeconds:`.

Arithmetic and comparison is supported (see the `comparing` and `arithmetic` protocols).

The `converting` protocol provides convenience methods for various convertions (to numbers, strings, etc.).!

!Date methodsFor: 'accessing'!

day
	^ self dayOfWeek
!

day: aNumber
	self dayOfWeek: aNumber
!

dayOfMonth
	<return self.getDate()>
!

dayOfMonth: aNumber
	<self.setDate(aNumber)>
!

dayOfWeek
	<return self.getDay() + 1>
!

dayOfWeek: aNumber
	<return self.setDay(aNumber - 1)>
!

hours
	<return self.getHours()>
!

hours: aNumber
	<self.setHours(aNumber)>
!

milliseconds
	<return self.getMilliseconds()>
!

milliseconds: aNumber
	<self.setMilliseconds(aNumber)>
!

minutes
	<return self.getMinutes()>
!

minutes: aNumber
	<self.setMinutes(aNumber)>
!

month
	<return self.getMonth() + 1>
!

month: aNumber
	<self.setMonth(aNumber - 1)>
!

seconds
	<return self.getSeconds()>
!

seconds: aNumber
	<self.setSeconds(aNumber)>
!

time
	<return self.getTime()>
!

time: aNumber
	<self.setTime(aNumber)>
!

year
	<return self.getFullYear()>
!

year: aNumber
	<self.setFullYear(aNumber)>
! !

!Date methodsFor: 'arithmetic'!

+ aDate
	<return self + aDate>
!

- aDate
	<return self - aDate>
! !

!Date methodsFor: 'comparing'!

< aDate
	<return self < aDate>
!

<= aDate
	<return self <= aDate>
!

> aDate
	<return self >> aDate>
!

>= aDate
	<return self >>= aDate>
! !

!Date methodsFor: 'converting'!

asDateString
	<return self.toDateString()>
!

asLocaleString
	<return self.toLocaleString()>
!

asMilliseconds
	^ self time
!

asNumber
	^ self asMilliseconds
!

asString
	<return self.toString()>
!

asTimeString
	<return self.toTimeString()>
! !

!Date methodsFor: 'printing'!

printOn: aStream
	aStream nextPutAll: self asString
! !

!Date class methodsFor: 'helios'!

heliosClass
	^ 'magnitude'
! !

!Date class methodsFor: 'instance creation'!

fromMilliseconds: aNumber
	^ self new: aNumber
!

fromSeconds: aNumber
	^ self fromMilliseconds: aNumber * 1000
!

fromString: aString
	"Example: Date fromString('2011/04/15 00:00:00')"
	^ self new: aString
!

millisecondsToRun: aBlock
	| t |
	t := Date now.
	aBlock value.
	^ Date now - t
!

new: anObject
	<return new Date(anObject)>
!

now
	^ self today
!

today
	^ self new
! !

Object subclass: #Number
	instanceVariableNames: ''
	package: 'Kernel-Objects'!
!Number commentStamp!
I am the Amber representation for all numbers.
I am directly mapped to JavaScript Number.

## API

I provide all necessary methods for arithmetic operations, comparison, conversion and so on with numbers.

My instances can also be used to evaluate a block a fixed number of times:

	5 timesRepeat: [ Transcript show: 'This will be printed 5 times'; cr ].
	
	1 to: 5 do: [ :aNumber| Transcript show: aNumber asString; cr ].
	
	1 to: 10 by: 2 do: [ :aNumber| Transcript show: aNumber asString; cr ].!

!Number methodsFor: 'accessing'!

identityHash
	^ self asString, 'n'
! !

!Number methodsFor: 'arithmetic'!

* aNumber
	"Inlined in the Compiler"
	<return self * aNumber>
!

+ aNumber
	"Inlined in the Compiler"
	<return self + aNumber>
!

- aNumber
	"Inlined in the Compiler"
	<return self - aNumber>
!

/ aNumber
	"Inlined in the Compiler"
	<return self / aNumber>
!

// aNumber
	^ (self / aNumber) floor
!

\\ aNumber
	<return self % aNumber>
!

abs
	<return Math.abs(self);>
!

max: aNumber
	<return Math.max(self, aNumber);>
!

min: aNumber
	<return Math.min(self, aNumber);>
!

negated
	^ 0 - self
! !

!Number methodsFor: 'comparing'!

< aNumber
	"Inlined in the Compiler"
	<return self < aNumber>
!

<= aNumber
	"Inlined in the Compiler"
	<return self <= aNumber>
!

= aNumber
	<
		return aNumber !!= null &&
			typeof aNumber._isNumber === "function" &&
			aNumber._isNumber() &&
			Number(self) == aNumber
	>
!

> aNumber
	"Inlined in the Compiler"
	<return self >> aNumber>
!

>= aNumber
	"Inlined in the Compiler"
	<return self >>= aNumber>
! !

!Number methodsFor: 'converting'!

& aNumber
	<return self & aNumber>
!

@ aNumber
	^ Point x: self y: aNumber
!

asJSON
	^ self
!

asJavascript
	^ '(', self printString, ')'
!

asNumber
	^ self
!

asPoint
	^ Point x: self y: self
!

asString
	< return String(self) >
!

atRandom
	^ (Random new next * self) truncated + 1
!

ceiling
	<return Math.ceil(self);>
!

floor
	<return Math.floor(self);>
!

rounded
	<return Math.round(self);>
!

to: aNumber
	| array first last count |
	first := self truncated.
	last := aNumber truncated + 1.
	count := 1.
	array := Array new.
	(last - first) timesRepeat: [
		array at: count put: first.
		count := count + 1.
		first := first + 1 ].
	^ array
!

to: stop by: step
	| array value pos |
	value := self.
	array := Array new.
	pos := 1.
	step = 0 ifTrue: [ self error: 'step must be non-zero' ].
	step < 0
		ifTrue: [ [ value >= stop ] whileTrue: [
					array at: pos put: value.
					pos := pos + 1.
					value := value + step ]]
		ifFalse: [ [ value <= stop ] whileTrue: [
					array at: pos put: value.
				pos := pos + 1.
					value := value + step ]].
	^ array
!

truncated
	<
		if(self >>= 0) {
			return Math.floor(self);
		} else {
			return Math.floor(self * (-1)) * (-1);
		};
	>
!

| aNumber
	<return self | aNumber>
! !

!Number methodsFor: 'copying'!

copy
	^ self
!

deepCopy
	^ self copy
! !

!Number methodsFor: 'enumerating'!

timesRepeat: aBlock
	| count |
	count := 1.
	[ count > self ] whileFalse: [
		aBlock value.
		count := count + 1 ]
!

to: stop by: step do: aBlock
	| value |
	value := self.
	step = 0 ifTrue: [ self error: 'step must be non-zero' ].
	step < 0
		ifTrue: [ [ value >= stop ] whileTrue: [
					aBlock value: value.
					value := value + step ]]
		ifFalse: [ [ value <= stop ] whileTrue: [
					aBlock value: value.
					value := value + step ]]
!

to: stop do: aBlock
	"Evaluate aBlock for each number from self to aNumber."
	| nextValue |
	nextValue := self.
	[ nextValue <= stop ]
		whileTrue:
			[ aBlock value: nextValue.
			nextValue := nextValue + 1 ]
! !

!Number methodsFor: 'mathematical functions'!

** exponent
	^ self raisedTo: exponent
!

arcCos
	<return Math.acos(self);>
!

arcSin
	<return Math.asin(self);>
!

arcTan
	<return Math.atan(self);>
!

cos
	<return Math.cos(self);>
!

ln
	<return Math.log(self);>
!

log
	<return Math.log(self) / Math.LN10;>
!

log: aNumber
	<return Math.log(self) / Math.log(aNumber);>
!

raisedTo: exponent
	<return Math.pow(self, exponent);>
!

sign
	self isZero 
		ifTrue: [ ^ 0 ].
	self positive
		ifTrue: [ ^ 1 ]
		ifFalse: [ ^ -1 ].
!

sin
	<return Math.sin(self);>
!

sqrt
	<return Math.sqrt(self)>
!

squared
	^ self * self
!

tan
	<return Math.tan(self);>
! !

!Number methodsFor: 'printing'!

printOn: aStream
	aStream nextPutAll: self asString
!

printShowingDecimalPlaces: placesDesired
	<return self.toFixed(placesDesired)>
! !

!Number methodsFor: 'testing'!

even
	^ 0 = (self \\ 2)
!

isImmutable
	^ true
!

isNumber
	^ true
!

isZero
	^ self = 0
!

negative
	"Answer whether the receiver is mathematically negative."

	^ self < 0
!

odd
	^ self even not
!

positive
	"Answer whether the receiver is positive or equal to 0. (ST-80 protocol)."

	^ self >= 0
! !

!Number class methodsFor: 'helios'!

heliosClass
	^ 'magnitude'
! !

!Number class methodsFor: 'instance creation'!

e
	<return Math.E;>
!

pi
	<return Math.PI>
! !

Object subclass: #Point
	instanceVariableNames: 'x y'
	package: 'Kernel-Objects'!
!Point commentStamp!
I represent an x-y pair of numbers usually designating a geometric coordinate.

## API

Instances are traditionally created using the binary `#@` message to a number:

	100@120

Points can then be arithmetically manipulated:

	100@100 + (10@10)

...or for example:

	(100@100) * 2

**NOTE:** Creating a point with a negative y-value will need a space after `@` in order to avoid a parsing error:

	100@ -100 "but 100@-100 would not parse"!

!Point methodsFor: 'accessing'!

x
	^ x
!

x: aNumber
	x := aNumber
!

y
	^ y
!

y: aNumber
	y := aNumber
! !

!Point methodsFor: 'arithmetic'!

* aPoint
	^ Point x: self x * aPoint asPoint x y: self y * aPoint asPoint y
!

+ aPoint
	^ Point x: self x + aPoint asPoint x y: self y + aPoint asPoint y
!

- aPoint
	^ Point x: self x - aPoint asPoint x y: self y - aPoint asPoint y
!

/ aPoint
	^ Point x: self x / aPoint asPoint x y: self y / aPoint asPoint y
! !

!Point methodsFor: 'comparing'!

< aPoint
	^ self x < aPoint x and: [
		self y < aPoint y ]
!

<= aPoint
	^ self x <= aPoint x and: [
		self y <= aPoint y ]
!

= aPoint
	^ aPoint class = self class and: [
		(aPoint x = self x) & (aPoint y = self y) ]
!

> aPoint
	^ self x > aPoint x and: [
		self y > aPoint y ]
!

>= aPoint
	^ self x >= aPoint x and: [
		self y >= aPoint y ]
! !

!Point methodsFor: 'converting'!

asPoint
	^ self
! !

!Point methodsFor: 'printing'!

printOn: aStream
	"Print receiver in classic x@y notation."

	x printOn: aStream.
	
	aStream nextPutAll: '@'.
	(y notNil and: [ y negative ]) ifTrue: [
			"Avoid ambiguous @- construct"
			aStream space ].
	
	y printOn: aStream
! !

!Point methodsFor: 'transforming'!

dist: aPoint 
	"Answer the distance between aPoint and the receiver."
	| dx dy |
	dx := aPoint x - x.
	dy := aPoint y - y.
	^ (dx * dx + (dy * dy)) sqrt
!

translateBy: delta
	"Answer a Point translated by delta (an instance of Point)."
	^ (delta x + x) @ (delta y + y)
! !

!Point class methodsFor: 'helios'!

heliosClass
	^ 'magnitude'
! !

!Point class methodsFor: 'instance creation'!

x: aNumber y: anotherNumber
	^ self new
		x: aNumber;
		y: anotherNumber;
		yourself
! !

Object subclass: #Random
	instanceVariableNames: ''
	package: 'Kernel-Objects'!
!Random commentStamp!
I an used to generate a random number and I am implemented as a trivial wrapper around javascript `Math.random()`.

## API

The typical use case it to use the `#next` method like the following:

	Random new next

This will return a float x where x < 1 and x > 0. If you want a random integer from 1 to 10 you can use `#atRandom`

	10 atRandom

A random number in a specific interval can be obtained with the following:

	(3 to: 7) atRandom

Be aware that `#to:` does not create an Interval as in other Smalltalk implementations but in fact an `Array` of numbers, so it's better to use:

	5 atRandom + 2

Since `#atRandom` is implemented in `SequencableCollection` you can easy pick an element at random:

	#('a' 'b' 'c') atRandom

As well as letter from a `String`:

	'abc' atRandom

Since Amber does not have Characters this will return a `String` of length 1 like for example `'b'`.!

!Random methodsFor: 'accessing'!

next
	<return Math.random()>
!

next: anInteger
	^ (1 to: anInteger) collect: [ :each | self next ]
! !

Object subclass: #UndefinedObject
	instanceVariableNames: ''
	package: 'Kernel-Objects'!
!UndefinedObject commentStamp!
I describe the behavior of my sole instance, `nil`. `nil` represents a prior value for variables that have not been initialized, or for results which are meaningless.

`nil` is the Smalltalk equivalent of the `undefined` JavaScript object.

__note:__ When sending messages to the `undefined` JavaScript object, it will be replaced by `nil`.!

!UndefinedObject methodsFor: 'class creation'!

subclass: aString instanceVariableNames: anotherString
	^ self subclass: aString instanceVariableNames: anotherString package: nil
!

subclass: aString instanceVariableNames: aString2 category: aString3
	"Kept for compatibility."
	self deprecatedAPI.
	^ self subclass: aString instanceVariableNames: aString2 package: aString3
!

subclass: aString instanceVariableNames: aString2 package: aString3
	^ ClassBuilder new
		superclass: self subclass: aString asString instanceVariableNames: aString2 package: aString3
! !

!UndefinedObject methodsFor: 'converting'!

asJSON
	^ null
! !

!UndefinedObject methodsFor: 'copying'!

deepCopy
	^ self
!

shallowCopy
	^ self
! !

!UndefinedObject methodsFor: 'printing'!

printOn: aStream
	aStream nextPutAll: 'nil'
! !

!UndefinedObject methodsFor: 'testing'!

ifNil: aBlock
	"inlined in the Compiler"
	^ self ifNil: aBlock ifNotNil: []
!

ifNil: aBlock ifNotNil: anotherBlock
	"inlined in the Compiler"
	^ aBlock value
!

ifNotNil: aBlock
	"inlined in the Compiler"
	^ self
!

ifNotNil: aBlock ifNil: anotherBlock
	"inlined in the Compiler"
	^ anotherBlock value
!

isImmutable
	^ true
!

isNil
	^ true
!

notNil
	^ false
! !

!UndefinedObject class methodsFor: 'instance creation'!

new
		self error: 'You cannot create new instances of UndefinedObject. Use nil'
! !

