Smalltalk current createPackage: 'Kernel-Objects' properties: #{}!
nil subclass: #Object
	instanceVariableNames: ''
	category: 'Kernel-Objects'!
!Object commentStamp!
*Object is the root of the Smalltalk class system*. All classes in the system are subclasses of Object.

Object provides default behavior common to all normal objects, such as: 

- access
- copying
- comparison
- error handling
- message sending
- reflection

Also utility messages that all objects should respond to are defined here.

Object has no instance variable.

##Access

Instance variables can be accessed with `#instVarAt:` and `#instVarAt:put:`. `Object >> instanceVariableNames` answers a collection of all instance variable names.
Accessing JavaScript properties of an object is done through `#basicAt:`, `#basicAt:put:` and `basicDelete:`.

##Copying

Copying an object is handled by `#copy` and `#deepCopy`. The first one performs a shallow copy of the receiver, while the second one performs a deep copy.
The hook method `#postCopy` can be overriden in subclasses to copy fields as necessary to complete the full copy. It will be sent by the copy of the receiver.

##Comparison

Objects understand equality  `#=` and identity `#==` comparison.

##Error handling

- `#halt` is the typical message to use for inserting breakpoints during debugging.
- `#error:` throws a generic error exception
- `#doesNotUnderstand:` handles the fact that there was an attempt to send the given message to the receiver but the receiver does not understand this message.
  Overriding this message can be useful to implement proxies for example.!

!Object methodsFor: 'accessing'!

yourself
	^self
!

class
	<return self.klass>
!

size
	self error: 'Object not indexable'
!

instVarAt: aSymbol
	| varname |
	varname := aSymbol asString.
	<return self['@'+varname]>
!

instVarAt: aSymbol put: anObject
	| varname |
	varname := aSymbol asString.
	<self['@' + varname] = anObject>
!

basicAt: aString
	<return self[aString]>
!

basicAt: aString put: anObject
	<return self[aString] = anObject>
!

basicDelete: aString
    <delete self[aString]; return aString>
!

identityHash
	<return self.identityHash || (self.identityHash = smalltalk.nextId());>
! !

!Object methodsFor: 'comparing'!

= anObject
	^self == anObject
!

~= anObject
	^(self = anObject) = false
!

== anObject
	^self identityHash = anObject identityHash
!

~~ anObject
	^(self == anObject) = false
! !

!Object methodsFor: 'converting'!

-> anObject
	^Association key: self value: anObject
!

asString
	^self printString
!

asJavascript
	^self asString
!

asJSON
	^JSON parse: self asJSONString
!

asJSONString
	^JSON stringify: self
! !

!Object methodsFor: 'copying'!

copy
	^self shallowCopy postCopy
!

shallowCopy
	<
	    var copy = self.klass._new();
	    for(var i in self) {
		if(/^@.+/.test(i)) {
		    copy[i] = self[i];
		}
	    }
	    return copy;
	>
!

deepCopy
	<    
	    var copy = self.klass._new();
	    for(var i in self) {
		if(/^@.+/.test(i)) {
		    copy[i] = self[i]._deepCopy();
		}
	    }
	    return copy;
	>
!

postCopy
! !

!Object methodsFor: 'error handling'!

error: aString
	Error signal: aString
!

subclassResponsibility
	self error: 'This method is a responsibility of a subclass'
!

shouldNotImplement
	self error: 'This method should not be implemented in ', self class name
!

try: aBlock catch: anotherBlock
	<try{result = aBlock()} catch(e) {result = anotherBlock(e)};
	return result;>
!

doesNotUnderstand: aMessage
	MessageNotUnderstood new
		receiver: self;
		message: aMessage;
		signal
!

halt
	self error: 'Halt encountered'
!

deprecatedAPI
	"Just a simple way to deprecate methods.
	#deprecatedAPI is in the 'error handling' protocol even if it doesn't throw an error,
	but it could in the future."
	console warn: thisContext home asString, ' is deprecated!! (in ', thisContext home home asString, ')'
! !

!Object methodsFor: 'initialization'!

initialize
! !

!Object methodsFor: 'message handling'!

perform: aSymbol
	^self perform: aSymbol withArguments: #()
!

perform: aSymbol withArguments: aCollection
	^self basicPerform: aSymbol asSelector withArguments: aCollection
!

basicPerform: aSymbol 
	^self basicPerform: aSymbol withArguments: #()
!

basicPerform: aSymbol withArguments: aCollection
	<return self[aSymbol].apply(self, aCollection);>
! !

!Object methodsFor: 'printing'!

printString
	^'a ', self class name
!

printNl
	<console.log(self)>
!

log: aString block: aBlock

	| result |
	console log:  aString,  ' time: ', (Date millisecondsToRun: [result := aBlock value]) printString.
	^result
!

storeString
	"Answer a String representation of the receiver from which the receiver 
	can be reconstructed."

	^ String streamContents: [:s | self storeOn: s]
!

storeOn: aStream
	aStream nextPutAll: self printString
! !

!Object methodsFor: 'testing'!

isKindOf: aClass
	^(self isMemberOf: aClass)
	    ifTrue: [true]
	    ifFalse: [self class inheritsFrom: aClass]
!

isMemberOf: aClass
	^self class = aClass
!

ifNil: aBlock
	"inlined in the Compiler"
	^self
!

ifNil: aBlock ifNotNil: anotherBlock
	"inlined in the Compiler"
	^anotherBlock value
!

ifNotNil: aBlock
	"inlined in the Compiler"
	^aBlock value
!

ifNotNil: aBlock ifNil: anotherBlock
	"inlined in the Compiler"
	^aBlock value
!

isNil
	^false
!

notNil
	^self isNil not
!

isClass
	^false
!

isMetaclass
	^false
!

isNumber
	^false
!

isString
	^false
!

isParseFailure
	^false
!

isSymbol
	^false
! !

!Object class methodsFor: 'initialization'!

initialize
	"no op"
! !

Object subclass: #Smalltalk
	instanceVariableNames: ''
	category: 'Kernel-Objects'!
!Smalltalk commentStamp!
Smalltalk has only one instance, accessed with `Smalltalk current`. 
It represents the global JavaScript variable `smalltalk` declared in `js/boot.js`.

The `smalltalk` object holds all class and packages defined in the system.

## Classes

Classes can be accessed using the following methods:

- `#classes` answers the full list of Smalltalk classes in the system
- `#at:` answers a specific class of `nil`

## Packages

Packages can be accessed using the following methods:

- `#packages` answers the full list of packages
- `#packageAt:` answers a specific class of `nil`

__note:__ classes and packages are accessed using strings, not symbols

## Parsing

The `#parse:` method is used to parse Smalltalk source code. 
It requires the `Compiler` package and the `js/parser.js` parser file in order to work!

!Smalltalk methodsFor: 'accessing'!

classes
	<return self.classes()>
!

at: aString
	<return self[aString]>
!

basicParse: aString
	<return smalltalk.parser.parse(aString)>
!

parse: aString
	| result | 
	self try: [result := self basicParse: aString] catch: [:ex | (self parseError: ex parsing: aString) signal].
	^result
!

parseError: anException parsing: aString
	| row col message lines badLine code |
	<row = anException.line;
	col = anException.column;
	message = anException.message;>.
	lines := aString lines.
	badLine := lines at: row.
	badLine := (badLine copyFrom: 1 to: col - 1), ' ===>', (badLine copyFrom:  col to: badLine size).
	lines at: row put: badLine.
	code := String streamContents: [:s |
                  lines withIndexDo: [:l :i |
                     s nextPutAll: i asString, ': ', l, String lf]].
	^ Error new messageText: ('Parse error on line ' , row , ' column ' , col , ' : ' , message , ' Below is code with line numbers and ===> marker inserted:' , String lf, code)
!

reservedWords
	"JavaScript reserved words"
	<return self.reservedWords>
!

readJSObject: anObject
	<return self.readJSObject(anObject)>
! !

!Smalltalk methodsFor: 'classes'!

removeClass: aClass
	aClass isMetaclass ifTrue: [self error: aClass asString, ' is a Metaclass and cannot be removed!!'].
	aClass methodDictionary values do: [:each |
		aClass removeCompiledMethod: each].
	aClass class methodDictionary values do: [:each |
		aClass class removeCompiledMethod: each].
	self basicDelete: aClass name
! !

!Smalltalk methodsFor: 'packages'!

packages
	"Return all Package instances in the system."

	<return self.packages.all()>
!

packageAt: packageName
       <return self.packages[packageName]>
!

packageAt: packageName ifAbsent: aBlock
       ^(self packageAt: packageName) ifNil: aBlock
!

removePackage: packageName
	"Removes a package and all its classes."

	| pkg |
	pkg := self packageAt: packageName ifAbsent: [self error: 'Missing package: ', packageName].
	pkg classes do: [:each |
        	self removeClass: each].
	self deletePackage: packageName
!

renamePackage: packageName to: newName
	"Rename a package."

	| pkg |
	pkg := self packageAt: packageName ifAbsent: [self error: 'Missing package: ', packageName].
	(self packageAt: newName) ifNotNil: [self error: 'Already exists a package called: ', newName].
	<smalltalk.packages[newName] = smalltalk.packages[packageName]>.
	pkg name: newName.
	self deletePackage: packageName.
! !

!Smalltalk methodsFor: 'private'!

createPackage: packageName
	"Create and bind a new package with given name and return it."

      <return smalltalk.addPackage(packageName, nil)>
!

deletePackage: packageName
	"Deletes a package by deleting its binding, but does not check if it contains classes etc.
	To remove a package, use #removePackage instead."

       <delete smalltalk.packages[packageName]>
!

createPackage: packageName properties: aDict
	"Create and bind a new package with given name and return it."

	| object |
	<object = {};>.
	aDict keysAndValuesDo: [:key :value |
		<object[key] = value>.
	].
       <return smalltalk.addPackage(packageName, object)>
! !

Smalltalk class instanceVariableNames: 'current'!

!Smalltalk class methodsFor: 'accessing'!

current
	<return smalltalk>
! !

Object subclass: #Package
	instanceVariableNames: 'commitPathJs commitPathSt'
	category: 'Kernel-Objects'!
!Package commentStamp!
A Package is similar to a "class category" typically found in other Smalltalks like Pharo or Squeak. Amber does not have class categories anymore, it had in the beginning but now each class in the system knows which package it belongs to.

A Package has a name, an Array of "requires", a comment and a Dictionary with other optional key value attributes. A Package can also be queried for its classes, but it will then resort to a reverse scan of all classes to find them.
Packages are manipulated through "Smalltalk current", like for example finding one based on a name:

	Smalltalk current packageAt: 'Kernel'

...but you can also use:

	Package named: 'Kernel'

A Package differs slightly from a Monticello package which can span multiple class categories using a naming convention based on hyphenation. But just as in Monticello a Package supports "class extensions" so a Package
can define behaviors in foreign classes using a naming convention for method categories where the category starts with an asterisk and then the name of the owning package follows. This can easily be seen in for example class
String where the method category "*IDE" defines #inspectOn: which thus is a method belonging to the IDE package.

You can fetch a package from the server:

	Package fetch: 'Additional-Examples'!

!Package methodsFor: 'accessing'!

name
	<return self.pkgName>
!

name: aString
	<self.pkgName = aString>
!

dependencies
	^self propertyAt: 'dependencies' ifAbsent: [#()]
!

dependencies: anArray
	^self propertyAt: 'dependencies' put: anArray
!

properties
	^Smalltalk current readJSObject: (self basicAt: 'properties')
!

properties: aDict
	"We store it as a javascript object."
	
	| object |
	<object = {};>.
	aDict keysAndValuesDo: [:key :value |
		<object[key] = value>.
	].
	<return self.properties = object>
!

commitPathJs
	^ commitPathJs ifNil: [self class defaultCommitPathJs]
!

commitPathJs: aString
	commitPathJs := aString
!

commitPathSt
	^ commitPathSt ifNil: [self class defaultCommitPathSt]
!

commitPathSt: aString
	commitPathSt := aString
! !

!Package methodsFor: 'classes'!

classes
	"We need to do a reverse scan."
	^Smalltalk current classes select: [:c | c package == self]
! !

!Package methodsFor: 'printing'!

printString
	^self name
! !

!Package methodsFor: 'private'!

propertiesAsJSON
	<return JSON.stringify(self.properties)>
!

jsProperties
	<return self.properties>
!

jsProperties: aJSObject
	<return self.properties = aJSObject>
! !

!Package methodsFor: 'properties'!

propertyAt: key

	<return self.properties[key]>
!

propertyAt: key put: value

	<return self.properties[key] = value>
!

propertyAt: key ifAbsent: block

	^(self propertyAt: key) ifNil: [block value]
! !

Package class instanceVariableNames: 'defaultCommitPathJs defaultCommitPathSt'!

!Package class methodsFor: 'commit paths'!

defaultCommitPathJs
	^ defaultCommitPathJs ifNil: [ defaultCommitPathJs := 'js']
!

defaultCommitPathJs: aString
	defaultCommitPathJs := aString
!

defaultCommitPathSt
	^ defaultCommitPathSt ifNil: [ defaultCommitPathSt := 'st']
!

defaultCommitPathSt: aString
	defaultCommitPathSt := aString
!

resetCommitPaths
        defaultCommitPathJs := nil.
        defaultCommitPathSt := nil.
! !

!Package class methodsFor: 'loading-storing'!

fetch: aPackageName prefix: aPrefix
	jQuery getScript: (aPrefix , aPackageName , '.js') onSuccess: [ Package init: aPackageName ]
!

fetch: aPackageName
	self fetch: aPackageName prefix: self defaultCommitPathJs, '/'
!

commitToLocalStorage: aPackageName
	| key sourceCode |
	key := 'smalltalk.packages.' , aPackageName.
	sourceCode := Exporter new exportPackage: aPackageName.
	<localStorage[key] = escape(sourceCode)>
!

init: aPackageName
	(smalltalk classes select: [ :each | <each.pkg.pkgName == aPackageName> ])
		do: [ :each | <smalltalk.init(each)> ];
		do: [ :each | each initialize ]
! !

!Package class methodsFor: 'not yet classified'!

named: aPackageName

	^Smalltalk current packageAt: aPackageName
!

named: aPackageName ifAbsent: aBlock

	^Smalltalk current packageAt: aPackageName ifAbsent: aBlock
! !

Object subclass: #Number
	instanceVariableNames: ''
	category: 'Kernel-Objects'!

!Number methodsFor: ''!


! !

!Number methodsFor: 'accessing'!

identityHash
	^self asString, 'n'
! !

!Number methodsFor: 'arithmetic'!

+ aNumber
	"Inlined in the Compiler"
	<return self + aNumber>
!

- aNumber
	"Inlined in the Compiler"
	<return self - aNumber>
!

* aNumber
	"Inlined in the Compiler"
	<return self * aNumber>
!

/ aNumber
	"Inlined in the Compiler"
	<return self / aNumber>
!

max: aNumber
	<return Math.max(self, aNumber);>
!

min: aNumber
	<return Math.min(self, aNumber);>
!

negated
	^0 - self
!

\\ aNumber
	<return self % aNumber>
!

sqrt
	<return Math.sqrt(self)>
!

squared
	^self * self
! !

!Number methodsFor: 'comparing'!

= aNumber
	aNumber isNumber ifFalse: [^false]. 
	<return Number(self) == aNumber>
!

> aNumber
	"Inlined in the Compiler"
	<return self >> aNumber>
!

< aNumber
	"Inlined in the Compiler"
	<return self < aNumber>
!

>= aNumber
	"Inlined in the Compiler"
	<return self >>= aNumber>
!

<= aNumber
	"Inlined in the Compiler"
	<return self <= aNumber>
! !

!Number methodsFor: 'converting'!

rounded
	<return Math.round(self);>
!

truncated
|result|

    self >= 0 
        ifTrue: [<result = Math.floor(self);>]
        ifFalse: [<result = (Math.floor(self * (-1)) * (-1));>].

    ^ result
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
	    first := first + 1].
	^array
!

asString
	^self printString
!

asJavascript
	^'(', self printString, ')'
!

atRandom
    ^(Random new next * self) truncated + 1
!

@ aNumber
	^Point x: self y: aNumber
!

asPoint
	^Point x: self y: self
!

to: stop by: step
	| array value pos |
	value := self.
	array := Array new.
	pos := 1.
	step = 0 ifTrue: [self error: 'step must be non-zero'].
	step < 0
		ifTrue: [[ value >= stop ] whileTrue: [
	    			array at: pos put: value.
	    			pos := pos + 1.
	    			value := value + step]]
		ifFalse: [[ value <= stop ] whileTrue: [
	    			array at: pos put: value.
	  			pos := pos + 1.
	    			value := value + step]].
	^array
! !

!Number methodsFor: 'copying'!

deepCopy
	^self copy
!

copy
	^self
! !

!Number methodsFor: 'enumerating'!

timesRepeat: aBlock
	| integer count |
	integer := self truncated.
	count := 1.
	[count > self] whileFalse: [
	    aBlock value.
	    count := count + 1]
!

to: stop do: aBlock
	"Evaluate aBlock for each number from self to aNumber."
	| nextValue |
	nextValue := self.
	[nextValue <= stop]
		whileTrue: 
			[aBlock value: nextValue.
			nextValue := nextValue + 1]
!

to: stop by: step do: aBlock
	| value |
	value := self.
	step = 0 ifTrue: [self error: 'step must be non-zero'].
	step < 0
		ifTrue: [[ value >= stop ] whileTrue: [
	    			aBlock value: value.
	    			value := value + step]]
		ifFalse: [[ value <= stop ] whileTrue: [
	    			aBlock value: value.
	    			value := value + step]]
! !

!Number methodsFor: 'printing'!

printString
	<return String(self)>
!

printShowingDecimalPlaces: placesDesired
	<return self.toFixed(placesDesired)>
! !

!Number methodsFor: 'testing'!

isNumber
	^true
!

even
	^ 0 = (self \\ 2)
!

odd
	^ self even not
!

negative
	"Answer whether the receiver is mathematically negative."

	^ self < 0
!

positive
	"Answer whether the receiver is positive or equal to 0. (ST-80 protocol)."

	^ self >= 0
!

isZero
	^self = 0
! !

!Number methodsFor: 'timeouts/intervals'!

clearInterval
	<clearInterval(Number(self))>
!

clearTimeout
	<clearTimeout(Number(self))>
! !

!Number class methodsFor: 'instance creation'!

pi
	<return Math.PI>
! !

Object subclass: #Boolean
	instanceVariableNames: ''
	category: 'Kernel-Objects'!
!Boolean commentStamp!
Boolean wraps the JavaScript `Boolean()` constructor. The `true` and `false` objects are the JavaScript boolean objects.

Boolean defines the protocol for logic testing operations and conditional control structures for the logical values.
Boolean instances are weither `true` or `false`.!

!Boolean methodsFor: 'comparing'!

= aBoolean
	aBoolean class = self class ifFalse: [^false].
	<return Boolean(self == true) == aBoolean>
! !

!Boolean methodsFor: 'controlling'!

ifTrue: aBlock
	"inlined in the Compiler"
	^self ifTrue: aBlock ifFalse: []
!

ifFalse: aBlock
	"inlined in the Compiler"
	^self ifTrue: [] ifFalse: aBlock
!

ifFalse: aBlock ifTrue: anotherBlock
	"inlined in the Compiler"
	^self ifTrue: anotherBlock ifFalse: aBlock
!

ifTrue: aBlock ifFalse: anotherBlock
	"inlined in the Compiler"
	<
	    if(self == true) {
		return aBlock();
	    } else {
		return anotherBlock();
	    }
	>
!

and: aBlock
	^self = true
	    ifTrue: aBlock
	    ifFalse: [false]
!

or: aBlock
	^self = true
	    ifTrue: [true]
	    ifFalse: aBlock
!

not
	^self = false
!

& aBoolean
	<
	    if(self == true) {
		return aBoolean;
	    } else {
		return false;
	    }
	>
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

!Boolean methodsFor: 'copying'!

shallowCopy
	^self
!

deepCopy
	^self
! !

!Boolean methodsFor: 'printing'!

printString
	<return self.toString()>
! !

Object subclass: #Date
	instanceVariableNames: ''
	category: 'Kernel-Objects'!
!Date commentStamp!
The Date class is used to work with dates and times. Therefore `Date today` and `Date now` are both valid in
Amber and answer the same date object.

Date wraps the `Date()` JavaScript constructor, and Smalltalk date objects are JavaScript date objects.!

!Date methodsFor: 'accessing'!

year
	<return self.getFullYear()>
!

month
	<return self.getMonth() + 1>
!

month: aNumber
	<self.setMonth(aNumber - 1)>
!

day
	^self dayOfWeek
!

dayOfWeek
	<return self.getDay() + 1>
!

dayOfWeek: aNumber
	<return self.setDay(aNumber - 1)>
!

day: aNumber
	self day: aNumber
!

year: aNumber
	<self.setFullYear(aNumber)>
!

dayOfMonth
	<return self.getDate()>
!

dayOfMonth: aNumber
	<self.setDate(aNumber)>
!

time
	<return self.getTime()>
!

time: aNumber
	<self.setTime(aNumber)>
!

hours: aNumber
	<self.setHours(aNumber)>
!

minutes: aNumber
	<self.setMinutes(aNumber)>
!

seconds: aNumber
	<self.setSeconds(aNumber)>
!

milliseconds: aNumber
	<self.setMilliseconds(aNumber)>
!

hours
	<return self.getHours()>
!

minutes
	<return self.getMinutes()>
!

seconds
	<return self.getSeconds()>
!

milliseconds
	<return self.getMilliseconds()>
! !

!Date methodsFor: 'arithmetic'!

- aDate
	<return self - aDate>
!

+ aDate
	<return self + aDate>
! !

!Date methodsFor: 'comparing'!

< aDate
	<return self < aDate>
!

> aDate
	<return self >> aDate>
!

<= aDate
	<return self <= aDate>
!

>= aDate
	<return self >>= aDate>
! !

!Date methodsFor: 'converting'!

asString
	<return self.toString()>
!

asMilliseconds
	^self time
!

asDateString
	<return self.toDateString()>
!

asTimeString
	<return self.toTimeString()>
!

asLocaleString
	<return self.toLocaleString()>
!

asNumber
	^self asMilliseconds
! !

!Date methodsFor: 'printing'!

printString
	^self asString
! !

!Date class methodsFor: 'instance creation'!

new: anObject
	<return new Date(anObject)>
!

fromString: aString
	"Example: Date fromString('2011/04/15 00:00:00')"
	^self new: aString
!

fromSeconds: aNumber
	^self fromMilliseconds: aNumber * 1000
!

fromMilliseconds: aNumber
	^self new: aNumber
!

today
	^self new
!

now
	^self today
!

millisecondsToRun: aBlock
	| t |
	t := Date now.
	aBlock value.
	^Date now - t
! !

Object subclass: #UndefinedObject
	instanceVariableNames: ''
	category: 'Kernel-Objects'!
!UndefinedObject commentStamp!
UndefinedObject describes the behavior of its sole instance, `nil`. `nil` represents a prior value for variables that have not been initialized, or for results which are meaningless.

`nil` is the Smalltalk representation of the `undefined` JavaScript object.!

!UndefinedObject methodsFor: 'class creation'!

subclass: aString instanceVariableNames: anotherString
	^self subclass: aString instanceVariableNames: anotherString package: nil
!

subclass: aString instanceVariableNames: aString2 category: aString3
	"Kept for compatibility."
	self deprecatedAPI.
	^self subclass: aString instanceVariableNames: aString2 package: aString3
!

subclass: aString instanceVariableNames: aString2 package: aString3
	^ClassBuilder new
	    superclass: self subclass: aString instanceVariableNames: aString2 package: aString3
! !

!UndefinedObject methodsFor: 'copying'!

shallowCopy
	^self
!

deepCopy
	^self
! !

!UndefinedObject methodsFor: 'printing'!

printString
    ^'nil'
! !

!UndefinedObject methodsFor: 'testing'!

ifNil: aBlock
	"inlined in the Compiler"
	^self ifNil: aBlock ifNotNil: []
!

ifNotNil: aBlock
	"inlined in the Compiler"
	^self
!

ifNil: aBlock ifNotNil: anotherBlock
	"inlined in the Compiler"
	^aBlock value
!

ifNotNil: aBlock ifNil: anotherBlock
	"inlined in the Compiler"
	^anotherBlock value
!

isNil
	^true
!

notNil
	^false
! !

!UndefinedObject class methodsFor: 'instance creation'!

new
	    self error: 'You cannot create new instances of UndefinedObject. Use nil'
! !

Object subclass: #Random
	instanceVariableNames: ''
	category: 'Kernel-Objects'!
!Random commentStamp!
`Random` is a random number generator and is implemented as a trivial wrapper around javascript `Math.random()` and is used like this:

	Random new next

This will return a float x where x < 1 and x > 0. If you want a random integer from 1 to 10 you can use `#atRandom`

	10 atRandom

...and if you want a random number in a specific interval this also works:

	(3 to: 7) atRandom

...but be aware that `#to:` does not create an Interval as in other Smalltalk implementations but in fact an `Array` of numbers, so it's better to use:

	5 atRandom + 2

Since `#atRandom` is implemented in `SequencableCollection` you can easy pick an element at random:

	#('a' 'b' 'c') atRandom

...or perhaps a letter from a `String`:

	'abc' atRandom

Since Amber does not have Characters this will return a `String` of length 1 like for example `'b'`.!

!Random methodsFor: 'accessing'!

next
	<return Math.random()>
!

next: anInteger
    ^(1 to: anInteger) collect: [:each | self next]
! !

Object subclass: #Point
	instanceVariableNames: 'x y'
	category: 'Kernel-Objects'!
!Point commentStamp!
A `Point` represents an x-y pair of numbers usually designating a geometric coordinate.
Points are traditionally created using the binary `#@` message to a number:

	100@120

Points can then be arithmetically manipulated:

	100@100 + (10@10)

...or for example:

	(100@100) * 2

**NOTE:** Creating a Point with a negative y-value will need a space after `@` in order to avoid a parsing error:

	100@ -100 "but 100@-100 would not parse"

Amber does not have much behavior in this class out-of-the-box.!

!Point methodsFor: 'accessing'!

x
	^x
!

y
	^y
!

y: aNumber
	y := aNumber
!

x: aNumber
	x := aNumber
! !

!Point methodsFor: 'arithmetic'!

* aPoint
	^Point x: self x * aPoint asPoint x y: self y * aPoint asPoint y
!

+ aPoint
	^Point x: self x + aPoint asPoint x y: self y + aPoint asPoint y
!

- aPoint
	^Point x: self x - aPoint asPoint x y: self y - aPoint asPoint y
!

/ aPoint
	^Point x: self x / aPoint asPoint x y: self y / aPoint asPoint y
!

= aPoint
	^aPoint class = self class and: [
		(aPoint x = self x) & (aPoint y = self y)]
! !

!Point methodsFor: 'converting'!

asPoint
	^self
! !

!Point methodsFor: 'printing'!

printString
	"Print receiver in classic x@y notation."

	^String streamContents: [:stream |
		stream nextPutAll: x printString, '@'.
		(y notNil and: [y negative])
			ifTrue: [
				"Avoid ambiguous @- construct"
				stream space].
		stream nextPutAll: y printString]
! !

!Point class methodsFor: 'instance creation'!

x: aNumber y: anotherNumber
	^self new
		x: aNumber;
		y: anotherNumber;
		yourself
! !

Object subclass: #JSObjectProxy
	instanceVariableNames: 'jsObject'
	category: 'Kernel-Objects'!
!JSObjectProxy commentStamp!
JSObjectProxy handles sending messages to JavaScript object, therefore accessing JavaScript objects from Amber is transparent.
JSOjbectProxy makes intensive use of `#doesNotUnderstand:`.

## Examples

JSObjectProxy objects are instanciated by Amber when a Smalltalk message is sent to a JavaScript object.

    window alert: 'hello world'.
    window inspect.
    (window jQuery: 'body') append: 'hello world'

Smalltalk messages sends are converted to JavaScript function calls or object property access _(in this order)_. If n one of them match, a `MessageNotUnderstood` error will be thrown. 

## Message conversion rules

- `someUser name` becomes  `someUser.name`
- `someUser name: 'John'` becomes `someUser name = "John"`
- `console log: 'hello world'` becomes `console.log('hello world')`
- `(window jQuery: 'foo') css: 'background' color: 'red'` becomes `window.jQuery('foo').css('background', 'red')`

__Note:__ For keyword-based messages, only the first keyword is kept: `window foo: 1 bar: 2` is equivalent to `window foo: 1 baz: 2`.!

!JSObjectProxy methodsFor: 'accessing'!

jsObject: aJSObject
	jsObject := aJSObject
!

jsObject
	^jsObject
!

at: aSymbol
	| attr |
	attr := aSymbol asString.
	<return self['@jsObject'][attr]>
!

at: aSymbol put: anObject
	| attr |
	attr := aSymbol asString.
	<self['@jsObject'][attr] = anObject>
! !

!JSObjectProxy methodsFor: 'proxy'!

printString
	^self jsObject toString
!

inspectOn: anInspector
	| variables |
	variables := Dictionary new.
	variables at: '#self' put: self jsObject.
	anInspector setLabel: self printString.
	<for(var i in self['@jsObject']) {
		variables._at_put_(i, self['@jsObject'][i]);
	}>.
	anInspector setVariables: variables
!

doesNotUnderstand: aMessage
	| obj selector jsSelector arguments |
	obj := self jsObject.
	selector := aMessage selector.
	jsSelector := selector asJavaScriptSelector.
	arguments := aMessage arguments.
	<if(obj[jsSelector] !!= undefined) {return smalltalk.send(obj, jsSelector, arguments)}>.
	super doesNotUnderstand: aMessage
! !

!JSObjectProxy class methodsFor: 'instance creation'!

on: aJSObject
	^self new
		jsObject: aJSObject;
		yourself
! !

