Smalltalk current createPackage: 'Kernel' properties: #{}!
nil subclass: #Object
	instanceVariableNames: ''
	category: 'Kernel'!

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

instVarAt: aString
	<return self['@'+aString]>
!

instVarAt: aString put: anObject
	<self['@' + aString] = anObject>
!

basicAt: aString
	<return self[aString]>
!

basicAt: aString put: anObject
	<return self[aString] = anObject>
!

basicDelete: aString
    <delete self[aString]>
! !

!Object methodsFor: 'comparing'!

= anObject
	^self == anObject
!

~= anObject
	^(self = anObject) = false
!

== anObject
	<return self === anObject>
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
	<return JSON.stringify(self._asJSONObject())>
!

asJSONObject
	| object |
	object := Object new.
	self class instanceVariableNames do: [:each |
		object basicAt: each put: (self instVarAt: each) asJSONObject].
	^object
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
	<try{aBlock()} catch(e) {anotherBlock(e)}>
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
	console warn: thisContext home asString, ' is deprecated!!'
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
! !

!Object class methodsFor: 'initialization'!

initialize
	"no op"
! !

Object subclass: #Smalltalk
	instanceVariableNames: ''
	category: 'Kernel'!

!Smalltalk methodsFor: 'accessing'!

classes
	<return self.classes()>
!

readJSON: anObject
	<return self.readJSObject(anObject)>
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
	instanceVariableNames: ''
	category: 'Kernel'!
!Package commentStamp!
A Package is similar to a "class category" typically found in other Smalltalks like Pharo or Squeak. Amber does not have class categories anymore, it had in the beginning but now each class in the system knows which package it belongs to.

A Package has a name, an Array of "requires", a comment and a Dictionary with other optional key value attributes. A Package can also be queried for its classes, but it will then resort to a reverse scan of all classes to find them.
Packages are manipulated through "Smalltalk current", like for example finding one based on a name:

	Smalltalk current packageAt: 'Kernel'

...but you can also use:

	Package named: 'Kernel'

A Package differs slightly from a Monticello package which can span multiple class categories using a naming convention based on hyphenation. But just as in Monticello a Package supports "class extensions" so a Package
can define behaviors in foreign classes using a naming convention for method categories where the category starts with an asterisk and then the name of the owning package follows. This can easily be seen in for example class
String where the method category "*IDE" defines #inspectOn: which thus is a method belonging to the IDE package.!

!Package methodsFor: 'accessing'!

name
	<return self.pkgName || nil>
!

name: aString
	<return self.pkgName = aString>
!

dependencies
	^self propertyAt: 'dependencies' ifAbsent: [#()]
!

dependencies: anArray
	^self propertyAt: 'dependencies' put: anArray
!

properties
	"It is stored as a javascript object."

	| result |
	result := Dictionary new.
	<for (var i in self.properties) {
		result._at_put_(i, self.properties[i]);
	}
	return result;>
!

properties: aDict
	"We store it as a javascript object."
	
	| object |
	<object = {};>.
	aDict keysAndValuesDo: [:key :value |
		<object[key] = value>.
	].
	<return self.properties = object>
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
	<return self.properties || nil>
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

!Package class methodsFor: 'not yet classified'!

named: aPackageName

	^Smalltalk current packageAt: aPackageName
!

named: aPackageName ifAbsent: aBlock

	^Smalltalk current packageAt: aPackageName ifAbsent: aBlock
! !

Object subclass: #Behavior
	instanceVariableNames: ''
	category: 'Kernel'!

!Behavior methodsFor: 'accessing'!

name
	<return self.className || nil>
!

superclass
	<return self.superclass || nil>
!

subclasses
	<return smalltalk.subclasses(self)>
!

allSubclasses
	| result |
	result := self subclasses.
	self subclasses do: [:each |
	    result addAll: each allSubclasses].
	^result
!

withAllSubclasses
	^(Array with: self) addAll: self allSubclasses; yourself
!

prototype
	<return self.fn.prototype>
!

methodDictionary
	<var dict = smalltalk.Dictionary._new();
	var methods = self.fn.prototype.methods;
	for(var i in methods) {
		if(methods[i].selector) {
			dict._at_put_(methods[i].selector, methods[i]);
		}
	};
	return dict>
!

methodsFor: aString
	^ClassCategoryReader new
	    class: self category: aString;
	    yourself
!

addCompiledMethod: aMethod
	<smalltalk.addMethod(aMethod.selector._asSelector(), aMethod, self)>
!

instanceVariableNames
	<return self.iVarNames>
!

comment
    ^(self basicAt: 'comment') ifNil: ['']
!

comment: aString
    self basicAt: 'comment' put: aString
!

commentStamp
    ^ClassCommentReader new
	class: self;
	yourself
!

removeCompiledMethod: aMethod
	<delete self.fn.prototype[aMethod.selector._asSelector()];
	delete self.fn.prototype.methods[aMethod.selector];
	smalltalk.init(self);>
!

protocols
    | protocols |
    protocols := Array new.
    self methodDictionary do: [:each |
	    (protocols includes: each category) ifFalse: [
		protocols add: each category]].
    ^protocols sort
!

protocolsDo: aBlock
	"Execute aBlock for each method category with
	its collection of methods in the sort order of category name."

	| methodsByCategory |
	methodsByCategory := Dictionary new.
	self methodDictionary values do: [:m |
		(methodsByCategory at: m category ifAbsentPut: [Array new])
 			add: m]. 
	self protocols do: [:category |
		aBlock value: category value: (methodsByCategory at: category)]
!

allInstanceVariableNames
	| result |
	result := self instanceVariableNames copy.
	self superclass ifNotNil: [
	    result addAll: self superclass allInstanceVariableNames].
	^result
!

methodAt: aString
	<return smalltalk.methods(self)[aString]>
!

methodsFor: aString stamp: aStamp
	"Added for compatibility, right now ignores stamp."
	^self methodsFor: aString
!

commentStamp: aStamp prior: prior
        ^self commentStamp
! !

!Behavior methodsFor: 'compiling'!

compile: aString
	self compile: aString category: ''
!

compile: aString category: anotherString
	| method |
	method := Compiler new load: aString forClass: self.
	method category: anotherString.
	self addCompiledMethod: method
! !

!Behavior methodsFor: 'instance creation'!

new
	^self basicNew initialize
!

basicNew
	<return new self.fn()>
!

inheritsFrom: aClass
	^aClass allSubclasses includes: self
! !

Behavior subclass: #Class
	instanceVariableNames: ''
	category: 'Kernel'!

!Class methodsFor: 'accessing'!

category
	^self package ifNil: ['Unclassified'] ifNotNil: [self package name]
!

rename: aString
	<
		smalltalk[aString] = self;
		delete smalltalk[self.className];
		self.className = aString;
	>
!

package
	<return self.pkg>
!

package: aPackage
	<self.pkg = aPackage>
! !

!Class methodsFor: 'class creation'!

subclass: aString instanceVariableNames: anotherString
	"Kept for compatibility."
	^self subclass: aString instanceVariableNames: anotherString package: nil
!

subclass: aString instanceVariableNames: aString2 category: aString3
	"Kept for compatibility."
	^self subclass: aString instanceVariableNames: aString2 package: aString3
!

subclass: aString instanceVariableNames: aString2 classVariableNames: classVars poolDictionaries: pools category: aString3
	"Just ignore class variables and pools. Added for compatibility."
	^self subclass: aString instanceVariableNames: aString2 package: aString3
!

subclass: aString instanceVariableNames: aString2 package: aString3
	^ClassBuilder new
	    superclass: self subclass: aString instanceVariableNames: aString2 package: aString3
! !

!Class methodsFor: 'printing'!

printString
	^self name
! !

!Class methodsFor: 'testing'!

isClass
	^true
! !

Behavior subclass: #Metaclass
	instanceVariableNames: ''
	category: 'Kernel'!

!Metaclass methodsFor: 'accessing'!

instanceClass
	<return self.instanceClass>
!

instanceVariableNames: aCollection
	ClassBuilder new
	    class: self instanceVariableNames: aCollection
! !

!Metaclass methodsFor: 'printing'!

printString
	^self instanceClass name, ' class'
! !

!Metaclass methodsFor: 'testing'!

isMetaclass
	^true
! !

Object subclass: #CompiledMethod
	instanceVariableNames: ''
	category: 'Kernel'!

!CompiledMethod methodsFor: 'accessing'!

source
	^(self basicAt: 'source') ifNil: ['']
!

source: aString
	self basicAt: 'source' put: aString
!

category
	^(self basicAt: 'category') ifNil: ['']
!

category: aString
	self basicAt: 'category' put: aString
!

selector
	^self basicAt: 'selector'
!

selector: aString
	self basicAt: 'selector' put: aString
!

fn
	^self basicAt: 'fn'
!

fn: aBlock
	self basicAt: 'fn' put: aBlock
!

messageSends
	^self basicAt: 'messageSends'
!

methodClass
	^self basicAt: 'methodClass'
!

referencedClasses
	^self basicAt: 'referencedClasses'
!

arguments
	<return self.args || []>
! !

Object subclass: #Number
	instanceVariableNames: ''
	category: 'Kernel'!

!Number methodsFor: ''!


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
	aNumber class = self class ifFalse: [^false]. 
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
!

== aNumber
	aNumber class = self class ifFalse: [^false]. 
	<return Number(self) === Number(aNumber)>
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

asJSONObject
	^self
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

Object subclass: #BlockClosure
	instanceVariableNames: ''
	category: 'Kernel'!

!BlockClosure methodsFor: 'accessing'!

compiledSource
	<return self.toString()>
!

numArgs
	<return self.length>
! !

!BlockClosure methodsFor: 'controlling'!

whileTrue: aBlock
	"inlined in the Compiler"
	<while(self()) {aBlock()}>
!

whileFalse: aBlock
	"inlined in the Compiler"
	<while(!!self()) {aBlock()}>
!

whileFalse
	"inlined in the Compiler"
	self whileFalse: []
!

whileTrue
	"inlined in the Compiler"
	self whileTrue: []
! !

!BlockClosure methodsFor: 'error handling'!

on: anErrorClass do: aBlock
	self try: self catch: [:error |
	    (error isKindOf: anErrorClass) 
	     ifTrue: [aBlock value: error]
	     ifFalse: [error signal]]
! !

!BlockClosure methodsFor: 'evaluating'!

value
	"inlined in the Compiler"
	<return self();>
!

value: anArg
	"inlined in the Compiler"
	<return self(anArg);>
!

value: firstArg value: secondArg
	"inlined in the Compiler"
	<return self(firstArg, secondArg);>
!

value: firstArg value: secondArg value: thirdArg
	"inlined in the Compiler"
	<return self(firstArg, secondArg, thirdArg);>
!

valueWithPossibleArguments: aCollection
	<return self.apply(null, aCollection);>
!

new
	"Use the receiver as a JS constructor. 
	*Do not* use this method to instanciate Smalltalk objects!!"
	<return new self()>
!

applyTo: anObject arguments: aCollection
	<return self.apply(anObject, aCollection)>
!

timeToRun
	"Answer the number of milliseconds taken to execute this block."

	^ Date millisecondsToRun: self
! !

!BlockClosure methodsFor: 'timeout/interval'!

valueWithTimeout: aNumber
	<return setTimeout(self, aNumber)>
!

valueWithInterval: aNumber
	<return setInterval(self, aNumber)>
! !

Object subclass: #Boolean
	instanceVariableNames: ''
	category: 'Kernel'!

!Boolean methodsFor: 'comparing'!

= aBoolean
	aBoolean class = self class ifFalse: [^false].
	<return Boolean(self == true) == aBoolean>
!

== aBoolean
	aBoolean class = self class ifFalse: [^false].
	<return Boolean(self == true) === Boolean(aBoolean == true)>
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

!Boolean methodsFor: 'converting'!

asJSONObject
	^self
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
	category: 'Kernel'!
!Date commentStamp!
The Date class is used to work with dates and times.!

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
!

asJSONObject
	^self
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
	category: 'Kernel'!

!UndefinedObject methodsFor: 'class creation'!

subclass: aString instanceVariableNames: anotherString
	^self subclass: aString instanceVariableNames: anotherString package: nil
!

subclass: aString instanceVariableNames: aString2 category: aString3
	"Kept for compatibility."
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

Object subclass: #Collection
	instanceVariableNames: ''
	category: 'Kernel'!

!Collection methodsFor: 'accessing'!

size
	self subclassResponsibility
!

readStream
	^self stream
!

writeStream
	^self stream
!

stream
	^self streamClass on: self
!

streamClass
	^self class streamClass
! !

!Collection methodsFor: 'adding/removing'!

add: anObject
	self subclassResponsibility
!

addAll: aCollection
	aCollection do: [:each |
	    self add: each].
	^aCollection
!

remove: anObject
    self subclassResponsibility
! !

!Collection methodsFor: 'converting'!

asArray
	| array index |
	array := Array new.
	index := 0.
	self do: [:each |
	    index := index + 1.
	    array at: index put: each].
	^array
!

asSet
	^Set withAll: self
! !

!Collection methodsFor: 'copying'!

, aCollection
	^self copy 
	    addAll: aCollection; 
	    yourself
!

copyWith: anObject
	^self copy add: anObject; yourself
!

copyWithAll: aCollection
	^self copy addAll: aCollection; yourself
!

copyWithoutAll: aCollection
	"Answer a copy of the receiver that does not contain any elements 
	equal to those in aCollection."

	^ self reject: [:each | aCollection includes: each]
! !

!Collection methodsFor: 'enumerating'!

do: aBlock
	<for(var i=0;i<self.length;i++){aBlock(self[i]);}>
!

collect: aBlock
	| newCollection |
	newCollection := self class new.
	self do: [:each |
	    newCollection add: (aBlock value: each)].
	^newCollection
!

detect: aBlock
	^self detect: aBlock ifNone: [self errorNotFound]
!

detect: aBlock ifNone: anotherBlock
	<
		for(var i = 0; i < self.length; i++)
			if(aBlock(self[i]))
				return self[i];
		return anotherBlock();
	>
!

do: aBlock separatedBy: anotherBlock
    	| first |
    	first := true.
    	self do: [:each |
    	    first
    		ifTrue: [first := false]
    		ifFalse: [anotherBlock value].
    	    aBlock value: each]
!

inject: anObject into: aBlock
	| result |
	result := anObject.
	self do: [:each | 
	    result := aBlock value: result value: each].
	^result
!

reject: aBlock
	^self select: [:each | (aBlock value: each) = false]
!

select: aBlock
	| stream |
	stream := self class new writeStream.
	self do: [:each |
	    (aBlock value: each) ifTrue: [
		stream nextPut: each]].
	^stream contents
! !

!Collection methodsFor: 'error handling'!

errorNotFound
	self error: 'Object is not in the collection'
! !

!Collection methodsFor: 'testing'!

includes: anObject
	<
		var i = self.length;
		while (i--) {
			if (smalltalk.send(self[i], "__eq", [anObject])) {return true;}	
		}
		return false
	>
!

notEmpty
	^self isEmpty not
!

isEmpty
	^self size = 0
!

ifNotEmpty: aBlock
	self notEmpty ifTrue: aBlock.
!

ifEmpty: aBlock
	self isEmpty ifTrue: aBlock.
! !

!Collection class methodsFor: 'accessing'!

streamClass
	    ^Stream
! !

!Collection class methodsFor: 'instance creation'!

with: anObject
	    ^self new
		add: anObject;
		yourself
!

with: anObject with: anotherObject
	    ^self new
		add: anObject;
		add: anotherObject;
		yourself
!

with: firstObject with: secondObject with: thirdObject
	    ^self new
		add: firstObject;
		add: secondObject;
		add: thirdObject;
		yourself
!

withAll: aCollection
	    ^self new
		addAll: aCollection;
		yourself
! !

Collection subclass: #SequenceableCollection
	instanceVariableNames: ''
	category: 'Kernel'!

!SequenceableCollection methodsFor: 'accessing'!

at: anIndex
	^self at: anIndex ifAbsent: [
	    self errorNotFound]
!

at: anIndex ifAbsent: aBlock
	self subclassResponsibility
!

at: anIndex put: anObject
	self subclassResponsibility
!

first
	^self at: 1
!

fourth
	^self at: 4
!

last
	^self at: self size
!

second
	^self at: 2
!

third
	^self at: 3
!

allButFirst
	^self copyFrom: 2 to: self size
!

allButLast
	^self copyFrom: 1 to: self size - 1
!

indexOf: anObject
	^self indexOf: anObject ifAbsent: [self errorNotFound]
!

indexOf: anObject ifAbsent: aBlock
	<
		for(var i=0;i<self.length;i++){
			if(self[i].__eq(anObject)) {return i+1}
		}
		return aBlock();
	>
!

indexOf: anObject startingAt: start ifAbsent: aBlock
	<
		for(var i=start-1;i<self.length;i++){
			if(self[i].__eq(anObject)) {return i+1}
		}
		return aBlock();
	>
!

indexOf: anObject startingAt: start
	"Answer the index of the first occurence of anElement after start
	within the receiver. If the receiver does not contain anElement, 
	answer 0."
	^self indexOf: anObject startingAt: start ifAbsent: [0]
!

atRandom
	^ self at: self size atRandom
! !

!SequenceableCollection methodsFor: 'adding'!

removeLast
	self remove: self last
!

addLast: anObject
	self add: anObject
! !

!SequenceableCollection methodsFor: 'converting'!

reversed
	self subclassResponsibility
! !

!SequenceableCollection methodsFor: 'copying'!

copyFrom: anIndex to: anotherIndex
	self subclassResponsibility
! !

!SequenceableCollection methodsFor: 'enumerating'!

withIndexDo: aBlock
	<for(var i=0;i<self.length;i++){aBlock(self[i], i+1);}>
! !

SequenceableCollection subclass: #String
	instanceVariableNames: ''
	category: 'Kernel'!

!String methodsFor: 'accessing'!

size
	<return self.length>
!

at: anIndex
	<return self[anIndex - 1]>
!

at: anIndex put: anObject
    	self errorReadOnly
!

at: anIndex ifAbsent: aBlock
    	(self at: anIndex) ifNil: [aBlock]
!

escaped
	<return escape(self)>
!

unescaped
	<return unescape(self)>
!

asciiValue
	<return self.charCodeAt(0);>
! !

!String methodsFor: 'adding'!

add: anObject
    	self errorReadOnly
!

remove: anObject
	self errorReadOnly
! !

!String methodsFor: 'comparing'!

= aString
	aString class = self class ifFalse: [^false].
	<return String(self) == aString>
!

> aString
	<return String(self) >> aString>
!

< aString
	<return String(self) < aString>
!

>= aString
	<return String(self) >>= aString>
!

<= aString
	<return String(self) <= aString>
!

== aString
	aString class = self class ifFalse: [^false].
	<return String(self) === String(aString)>
! !

!String methodsFor: 'converting'!

asSelector
	"If you change this method, change smalltalk.convertSelector too (see js/boot.js file)"

	| selector |
	selector := '_', self.
    	selector := selector replace: ':' with: '_'.
    	selector := selector replace: '[+]' with: '_plus'.
    	selector := selector replace: '-' with: '_minus'.
    	selector := selector replace: '[*]' with: '_star'.
    	selector := selector replace: '[/]' with: '_slash'.
    	selector := selector replace: '>' with: '_gt'.
    	selector := selector replace: '<' with: '_lt'.
    	selector := selector replace: '=' with: '_eq'.
    	selector := selector replace: ',' with: '_comma'.
    	selector := selector replace: '[@]' with: '_at'.
	^selector
!

asJavascript
	<
		if(self.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)
			return "unescape(\"" + escape(self) + "\")";
		else
			return "\"" + self + "\"";
	>
!

tokenize: aString
	<return self.split(aString)>
!

asString
    	^self
!

asNumber
	<return Number(self)>
!

asJSONObject
	^self
!

asLowercase
	<return self.toLowerCase()>
!

asUppercase
	<return self.toUpperCase()>
!

reversed
	<return self.split("").reverse().join("")>
!

asJavaScriptSelector
	^(self asSelector replace: '^_' with: '') replace: '_.*' with: ''.
! !

!String methodsFor: 'copying'!

, aString
	<return self + aString>
!

copyFrom: anIndex to: anotherIndex
	<return self.substring(anIndex - 1, anotherIndex)>
!

shallowCopy
    	^self class fromString: self
!

deepCopy
    	^self shallowCopy
! !

!String methodsFor: 'error handling'!

errorReadOnly
    	self error: 'Object is read-only'
! !

!String methodsFor: 'printing'!

printString
    	^'''', self, ''''
!

printNl
	<console.log(self)>
! !

!String methodsFor: 'regular expressions'!

replace: aString with: anotherString
    	^self replaceRegexp: (RegularExpression fromString: aString flag: 'g') with: anotherString
!

replaceRegexp: aRegexp with: aString
	<return self.replace(aRegexp, aString)>
!

match: aRegexp
	<return self.search(aRegexp) !!= -1>
!

trimLeft: separators

    	^self replaceRegexp: (RegularExpression fromString: '^[', separators, ']+' flag: 'g') with: ''
!

trimRight: separators

    	^self replaceRegexp: (RegularExpression fromString: '[', separators, ']+$' flag: 'g') with: ''
!

trimLeft
	^self trimLeft: '\s'
!

trimRight
	^self trimRight: '\s'
!

trimBoth
	^self trimBoth: '\s'
!

trimBoth: separators

    	^(self trimLeft: separators) trimRight: separators
! !

!String methodsFor: 'split join'!

join: aCollection 
	^ String
		streamContents: [:stream | aCollection
				do: [:each | stream nextPutAll: each asString] 
				separatedBy: [stream nextPutAll: self]]
!

lineIndicesDo: aBlock
	"execute aBlock with 3 arguments for each line:
	- start index of line
	- end index of line without line delimiter
	- end index of line including line delimiter(s) CR, LF or CRLF"
	
	| cr lf start sz nextLF nextCR |
	start := 1.
	sz := self size.
	cr := String cr.
	nextCR := self indexOf: cr startingAt: 1.
	lf := String lf.
	nextLF := self indexOf: lf startingAt: 1.
	[ start <= sz ] whileTrue: [
		(nextLF = 0 and: [ nextCR = 0 ])
			ifTrue: [ "No more CR, nor LF, the string is over"
					aBlock value: start value: sz value: sz.
					^self ].
		(nextCR = 0 or: [ 0 < nextLF and: [ nextLF < nextCR ] ])
			ifTrue: [ "Found a LF"
					aBlock value: start value: nextLF - 1 value: nextLF.
					start := 1 + nextLF.
					nextLF := self indexOf: lf startingAt: start ]
			ifFalse: [ 1 + nextCR = nextLF
				ifTrue: [ "Found a CR-LF pair"
					aBlock value: start value: nextCR - 1 value: nextLF.
					start := 1 + nextLF.
					nextCR := self indexOf: cr startingAt: start.
					nextLF := self indexOf: lf startingAt: start ]
				ifFalse: [ "Found a CR"
					aBlock value: start value: nextCR - 1 value: nextCR.
					start := 1 + nextCR.
					nextCR := self indexOf: cr startingAt: start ]]]
!

linesDo: aBlock
	"Execute aBlock with each line in this string. The terminating line
	delimiters CR, LF or CRLF pairs are not included in what is passed to aBlock"

	self lineIndicesDo: [:start :endWithoutDelimiters :end |
		aBlock value: (self copyFrom: start to: endWithoutDelimiters)]
!

lines
	"Answer an array of lines composing this receiver without the line ending delimiters."

	| lines |
	lines := Array new.
	self linesDo: [:aLine | lines add: aLine].
	^lines
!

lineNumber: anIndex
	"Answer a string containing the characters in the given line number."

	| lineCount |
	lineCount := 0.
	self lineIndicesDo: [:start :endWithoutDelimiters :end |
		(lineCount := lineCount + 1) = anIndex ifTrue: [^self copyFrom: start to: endWithoutDelimiters]].
	^nil
! !

!String methodsFor: 'testing'!

isString
    	^true
!

includesSubString: subString
	< return self.indexOf(subString) !!= -1 >
! !

!String class methodsFor: 'accessing'!

streamClass
	    ^StringStream
!

cr
	<return '\r'>
!

lf
	<return '\n'>
!

space
	<return ' '>
!

tab
	<return '\t'>
!

crlf
	<return '\r\n'>
! !

!String class methodsFor: 'instance creation'!

fromString: aString
	    <return new self.fn(aString)>
!

streamContents: blockWithArg
	|stream|
	stream := (self streamClass on: String new).
	blockWithArg value: stream.
	^ stream contents
!

value: aUTFCharCode

	<return String.fromCharCode(aUTFCharCode);>
! !

SequenceableCollection subclass: #Array
	instanceVariableNames: ''
	category: 'Kernel'!

!Array methodsFor: 'accessing'!

size
	<return self.length>
!

at: anIndex put: anObject
	<return self[anIndex - 1] = anObject>
!

at: anIndex ifAbsent: aBlock
	<
	    var value = self[anIndex - 1];
	    if(value === undefined) {
		return aBlock();
	    } else {
		return value;
	    }
	>
! !

!Array methodsFor: 'adding/removing'!

add: anObject
	<self.push(anObject); return anObject;>
!

remove: anObject
	<
		for(var i=0;i<self.length;i++) {
			if(self[i] == anObject) {
				self.splice(i,1);
				break;
			}
		}
	>
!

removeFrom: aNumber to: anotherNumber
	<self.splice(aNumber - 1,anotherNumber - 1)>
! !

!Array methodsFor: 'comparing'!

= aCollection
	(self class = aCollection class and: [
        	self size = aCollection size]) ifFalse: [^false].
	self withIndexDo: [:each :i |
                 (aCollection at: i) = each ifFalse: [^false]].
	^true
! !

!Array methodsFor: 'converting'!

asJavascript
	^'[', ((self collect: [:each | each asJavascript]) join: ', '),  ']'
!

asJSONObject
	^self collect: [:each | each asJSONObject]
!

reversed
	<return self._copy().reverse()>
! !

!Array methodsFor: 'copying'!

shallowCopy
	| newCollection |
	newCollection := self class new.
	self do: [:each | newCollection add: each].
	^newCollection
!

deepCopy
	| newCollection |
	newCollection := self class new.
	self do: [:each | newCollection add: each deepCopy].
	^newCollection
!

copyFrom: anIndex to: anotherIndex
	| array |
	array := self class new.
	anIndex to: anotherIndex do: [:each |
	    array add: (self at: each)].
	^array
! !

!Array methodsFor: 'enumerating'!

join: aString
	<return self.join(aString)>
!

sort
    ^self basicPerform: 'sort'
!

sort: aBlock
	<
		return self.sort(function(a, b) {
			if(aBlock(a,b)) {return -1} else {return 1}
		})
	>
!

sorted
	^self copy sort
!

sorted: aBlock
	^self copy sort: aBlock
!

printString
	| str |
	str := '' writeStream.
	str nextPutAll: super printString, ' ('.
	self 
		do: [:each | str nextPutAll: each printString]
		separatedBy: [str nextPutAll: ' '].
	str nextPutAll: ')'.
	^str contents
! !

Object subclass: #RegularExpression
	instanceVariableNames: ''
	category: 'Kernel'!

!RegularExpression methodsFor: 'evaluating'!

compile: aString
	<return self.compile(aString)>
!

exec: aString
	<return self.exec(aString) || nil>
!

test: aString
	<return self.test(aString)>
! !

!RegularExpression class methodsFor: 'instance creation'!

fromString: aString flag: anotherString
	<return new RegExp(aString, anotherString)>
!

fromString: aString
	    ^self fromString: aString flag: ''
! !

Object subclass: #Error
	instanceVariableNames: 'messageText'
	category: 'Kernel'!

!Error methodsFor: 'accessing'!

messageText
	^messageText
!

messageText: aString
	messageText := aString
!

context
	<return self.context>
! !

!Error methodsFor: 'signaling'!

signal
	<self.context = smalltalk.getThisContext(); self.smalltalkError = true; throw(self)>
! !

!Error class methodsFor: 'instance creation'!

signal: aString
	    ^self new
		messageText: aString;
		signal
! !

Object subclass: #MethodContext
	instanceVariableNames: ''
	category: 'Kernel'!

!MethodContext methodsFor: 'accessing'!

receiver
	<return self.receiver>
!

selector
	<return smalltalk.convertSelector(self.selector)>
!

home
	<return self.homeContext>
!

temps
	<return self.temps>
!

printString
	^super printString, '(', self asString, ')'
!

asString
	^self receiver class printString, ' >> ', self selector
! !

Object subclass: #Association
	instanceVariableNames: 'key value'
	category: 'Kernel'!

!Association methodsFor: 'accessing'!

key: aKey
	key := aKey
!

key
	^key
!

value: aValue
	value := aValue
!

value
	^value
! !

!Association methodsFor: 'comparing'!

= anAssociation
	^self class = anAssociation class and: [
	    self key = anAssociation key and: [
		self value = anAssociation value]]
!

storeOn: aStream
	"Store in the format (key->value)"

	"aStream nextPutAll: '('."
	key storeOn: aStream.
	aStream nextPutAll: '->'.
	value storeOn: aStream.
	"aStream nextPutAll: ')'"
! !

!Association class methodsFor: 'instance creation'!

key: aKey value: aValue
	    ^self new
		key: aKey;
		value: aValue;
		yourself
! !

Collection subclass: #Dictionary
	instanceVariableNames: 'keys'
	category: 'Kernel'!

!Dictionary methodsFor: 'accessing'!

size
	^keys size
!

associations
	| associations |
	associations := #().
	keys do: [:each |
	    associations add: (Association key: each value: (self at: each))].
	^associations
!

keys
	^keys copy
!

values
    	^keys collect: [:each | self at: each]
!

at: aKey put: aValue
	(keys includes: aKey) ifFalse: [keys add: aKey].
	^self basicAt: aKey put: aValue
!

at: aKey ifAbsent: aBlock
	^(self keys includes: aKey)
		ifTrue: [self basicAt: aKey]
		ifFalse: aBlock
!

at: aKey ifAbsentPut: aBlock
    	^self at: aKey ifAbsent: [
    	    self at: aKey put: aBlock value]
!

at: aKey ifPresent: aBlock
	^(self basicAt: aKey) ifNotNil: [aBlock value: (self at: aKey)]
!

at: aKey ifPresent: aBlock ifAbsent: anotherBlock
	^(self basicAt: aKey)
	    ifNil: anotherBlock
	    ifNotNil: [aBlock value: (self at: aKey)]
!

at: aKey
	^self at: aKey ifAbsent: [self errorNotFound]
! !

!Dictionary methodsFor: 'adding/removing'!

add: anAssociation
    	self at: anAssociation key put: anAssociation value
!

addAll: aDictionary
    	super addAll: aDictionary associations.
    	^aDictionary
!

remove: aKey
    self removeKey: aKey
!

removeKey: aKey
    keys remove: aKey
! !

!Dictionary methodsFor: 'comparing'!

= aDictionary
	self class = aDictionary class ifFalse: [^false].
	self size = aDictionary size ifFalse: [^false].
	^self associations = aDictionary associations
! !

!Dictionary methodsFor: 'converting'!

asJSONObject
	| object |
	object := Object new.
	self keysAndValuesDo: [:key :value |
		object basicAt: key put: value asJSONObject].
	^object
! !

!Dictionary methodsFor: 'copying'!

shallowCopy
	| copy |
	copy := self class new.
	self associationsDo: [:each |
	    copy at: each key  put: each value].
	^copy
!

, aCollection
	self shouldNotImplement
!

copyFrom: anIndex to: anotherIndex
	self shouldNotImplement
! !

!Dictionary methodsFor: 'enumerating'!

associationsDo: aBlock
    	self associations do: aBlock
!

keysAndValuesDo: aBlock
    	self associationsDo: [:each |
    	    aBlock value: each key value: each value]
!

do: aBlock
    	self values do: aBlock
!

select: aBlock
    	| newDict |
    	newDict := self class new.
    	self keysAndValuesDo: [:key :value |
    	    (aBlock value: value) ifTrue: [newDict at: key put: value]].
    	^newDict
!

collect: aBlock
    	| newDict |
    	newDict := self class new.
    	self keysAndValuesDo: [:key :value |
    	    newDict at: key put: (aBlock value: value)].
    	^newDict
!

detect: aBlock ifNone: anotherBlock
	^self values detect: aBlock ifNone: anotherBlock
!

includes: anObject
	^self values includes: anObject
! !

!Dictionary methodsFor: 'initialization'!

initialize
    	super initialize.
    	keys := #()
! !

!Dictionary methodsFor: 'printing'!

printString
	^ String streamContents: [:aStream|  
                                  		aStream 
                                  			nextPutAll: super printString;
                                  			nextPutAll: '('.
                                  		self associations 
                                  			do: [:anAssociation|  
                                                                      	aStream 
                                                                      		nextPutAll: anAssociation key printString;
                                                                      		nextPutAll: ' -> ';
                                                                      		nextPutAll: anAssociation value printString]
                                  
                                 			separatedBy: [aStream nextPutAll: ' , '].
                                  		aStream nextPutAll: ')'.
                                 ]
!

storeOn: aStream
	aStream nextPutAll: '#{'.
	self associations
		do: [:each | each storeOn: aStream]
		separatedBy: [ aStream nextPutAll: '. '].
	aStream nextPutAll: '}'
! !

!Dictionary class methodsFor: 'instance creation'!

fromPairs: aCollection
	| dict |
	dict := self new.
	aCollection do: [:each | dict add: each].
	^dict
! !

Object subclass: #ClassBuilder
	instanceVariableNames: ''
	category: 'Kernel'!

!ClassBuilder methodsFor: 'class creation'!

superclass: aClass subclass: aString
	^self superclass: aClass subclass: aString instanceVariableNames: '' package: nil
!

class: aClass instanceVariableNames: aString
	aClass isMetaclass ifFalse: [self error: aClass name, ' is not a metaclass'].
	aClass basicAt: 'iVarNames' put: (self instanceVariableNamesFor: aString).
	self setupClass: aClass
!

superclass: aClass subclass: aString instanceVariableNames: aString2 package: aString3
	| newClass |
	newClass := self addSubclassOf: aClass
				named: aString instanceVariableNames: (self instanceVariableNamesFor: aString2)
				package: (aString3 ifNil: ['unclassified']).
	self setupClass: newClass.
	^newClass
! !

!ClassBuilder methodsFor: 'private'!

instanceVariableNamesFor: aString
	^(aString tokenize: ' ') reject: [:each | each isEmpty]
!

addSubclassOf: aClass named: aString instanceVariableNames: aCollection
	<smalltalk.addClass(aString, aClass, aCollection);
	    return smalltalk[aString]>
!

setupClass: aClass
	<smalltalk.init(aClass);>
!

addSubclassOf: aClass named: aString instanceVariableNames: aCollection package: packageName
	<smalltalk.addClass(aString, aClass, aCollection, packageName);
	    return smalltalk[aString]>
! !

Object subclass: #ClassCategoryReader
	instanceVariableNames: 'class category chunkParser'
	category: 'Kernel'!

!ClassCategoryReader methodsFor: 'accessing'!

class: aClass category: aString
	class := aClass.
	category := aString
! !

!ClassCategoryReader methodsFor: 'fileIn'!

scanFrom: aChunkParser
	| chunk |
	[chunk := aChunkParser nextChunk.
	chunk isEmpty] whileFalse: [
	    self compileMethod: chunk]
! !

!ClassCategoryReader methodsFor: 'initialization'!

initialize
	super initialize.
	chunkParser := ChunkParser new.
! !

!ClassCategoryReader methodsFor: 'private'!

compileMethod: aString
	| method |
	method := Compiler new load: aString forClass: class.
	method category: category.
	class addCompiledMethod: method
! !

Object subclass: #Stream
	instanceVariableNames: 'collection position streamSize'
	category: 'Kernel'!

!Stream methodsFor: 'accessing'!

collection
	^collection
!

setCollection: aCollection
	collection := aCollection
!

position
	^position ifNil: [position := 0]
!

position: anInteger
	position := anInteger
!

streamSize
	^streamSize
!

setStreamSize: anInteger
	streamSize := anInteger
!

contents
	^self collection
	    copyFrom: 1 
	    to: self streamSize
!

size
	^self streamSize
! !

!Stream methodsFor: 'actions'!

reset
	self position: 0
!

close
!

flush
!

resetContents
	self reset.
	self setStreamSize: 0
! !

!Stream methodsFor: 'enumerating'!

do: aBlock
	[self atEnd] whileFalse: [aBlock value: self next]
! !

!Stream methodsFor: 'positioning'!

setToEnd
	self position: self size
!

skip: anInteger
	self position: ((self position + anInteger) min: self size max: 0)
! !

!Stream methodsFor: 'reading'!

next
	self position: self position + 1. 
	^collection at: self position
!

next: anInteger
	| tempCollection |
	tempCollection := self collection class new.
	anInteger timesRepeat: [
	    self atEnd ifFalse: [
		tempCollection add: self next]].
	^tempCollection
!

peek
	^self atEnd ifFalse: [
	    self collection at: self position + 1]
! !

!Stream methodsFor: 'testing'!

atEnd
	^self position = self size
!

atStart
	^self position = 0
!

isEmpty
	^self size = 0
! !

!Stream methodsFor: 'writing'!

nextPut: anObject
	self position: self position + 1.
	self collection at: self position put: anObject.
	self setStreamSize: (self streamSize max: self position)
!

nextPutAll: aCollection
	aCollection do: [:each |
	    self nextPut: each]
! !

!Stream class methodsFor: 'instance creation'!

on: aCollection
	    ^self new 
		setCollection: aCollection;
		setStreamSize: aCollection size;
		yourself
! !

Stream subclass: #StringStream
	instanceVariableNames: ''
	category: 'Kernel'!

!StringStream methodsFor: 'reading'!

next: anInteger
	| tempCollection |
	tempCollection := self collection class new.
	anInteger timesRepeat: [
	    self atEnd ifFalse: [
		tempCollection := tempCollection, self next]].
	^tempCollection
! !

!StringStream methodsFor: 'writing'!

nextPut: aString
	self nextPutAll: aString
!

nextPutAll: aString
	self setCollection: 
	    (self collection copyFrom: 1 to: self position),
	    aString,
	    (self collection copyFrom: (self position + 1 + aString size) to: self collection size).
	self position: self position + aString size.
	self setStreamSize: (self streamSize max: self position)
!

cr
	^self nextPutAll: String cr
!

crlf
	^self nextPutAll: String crlf
!

lf
	^self nextPutAll: String lf
!

space
	self nextPut: ' '
! !

Object subclass: #ClassCommentReader
	instanceVariableNames: 'class chunkParser'
	category: 'Kernel'!

!ClassCommentReader methodsFor: 'accessing'!

class: aClass
	class := aClass
! !

!ClassCommentReader methodsFor: 'fileIn'!

scanFrom: aChunkParser
	| chunk |
	chunk := aChunkParser nextChunk.
	chunk isEmpty ifFalse: [
	    self setComment: chunk].
! !

!ClassCommentReader methodsFor: 'initialization'!

initialize
	super initialize.
	chunkParser := ChunkParser new.
! !

!ClassCommentReader methodsFor: 'private'!

setComment: aString
    class comment: aString
! !

Object subclass: #Random
	instanceVariableNames: ''
	category: 'Kernel'!

!Random methodsFor: 'accessing'!

next
	<return Math.random()>
!

next: anInteger
    ^(1 to: anInteger) collect: [:each | self next]
! !

Object subclass: #Point
	instanceVariableNames: 'x y'
	category: 'Kernel'!

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

!Point class methodsFor: 'instance creation'!

x: aNumber y: anotherNumber
	^self new
		x: aNumber;
		y: anotherNumber;
		yourself
! !

Object subclass: #Message
	instanceVariableNames: 'selector arguments'
	category: 'Kernel'!

!Message methodsFor: 'accessing'!

selector
	^selector
!

selector: aString
	selector := aString
!

arguments: anArray
	arguments := anArray
!

arguments
	^arguments
! !

!Message methodsFor: 'printing'!

printString
	^ String streamContents: [:aStream|  
                                  				aStream 
                                  					nextPutAll: super printString;
                                  					nextPutAll: '(';
                                  					nextPutAll: selector;
                                  					nextPutAll: ')' 				]
! !

!Message class methodsFor: 'instance creation'!

selector: aString arguments: anArray
	^self new
		selector: aString;
		arguments: anArray;
		yourself
! !

Error subclass: #MessageNotUnderstood
	instanceVariableNames: 'message receiver'
	category: 'Kernel'!

!MessageNotUnderstood methodsFor: 'accessing'!

message
	^message
!

message: aMessage
	message := aMessage
!

receiver
	^receiver
!

receiver: anObject
	receiver := anObject
!

messageText
	^self receiver asString, ' does not understand #', self message selector
! !

Object subclass: #ErrorHandler
	instanceVariableNames: ''
	category: 'Kernel'!

!ErrorHandler methodsFor: 'error handling'!

handleError: anError
	anError context ifNotNil: [self logErrorContext: anError context].
	self logError: anError
! !

!ErrorHandler methodsFor: 'private'!

logContext: aContext
	aContext home ifNotNil: [
		self logContext: aContext home].
	self log: aContext receiver asString, '>>', aContext selector
!

logErrorContext: aContext
	aContext ifNotNil: [
		aContext home ifNotNil: [
			self logContext: aContext home]]
!

logError: anError
	self log: anError messageText
!

log: aString
	console log: aString
! !

ErrorHandler class instanceVariableNames: 'current'!

!ErrorHandler class methodsFor: 'accessing'!

current
	^current ifNil: [current := self new]
!

setCurrent: anHandler
	current := anHandler
! !

!ErrorHandler class methodsFor: 'initialization'!

initialize
	self register
!

register
	ErrorHandler setCurrent: self new
! !

Object subclass: #JSObjectProxy
	instanceVariableNames: 'jsObject'
	category: 'Kernel'!

!JSObjectProxy methodsFor: 'accessing'!

jsObject: aJSObject
	jsObject := aJSObject
!

jsObject
	^jsObject
!

at: aString
	<return self['@jsObject'][aString]>
!

at: aString put: anObject
	<self['@jsObject'][aString] = anObject>
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

Collection subclass: #Set
	instanceVariableNames: 'elements'
	category: 'Kernel'!

!Set methodsFor: 'accessing'!

size
	^elements size
! !

!Set methodsFor: 'adding/removing'!

add: anObject
	<
		var found;
		for(var i in self['@elements']) {
			if(anObject == self['@elements'][i]) {
				found = true;
				break;
			}
		}
		if(!!found) {self['@elements'].push(anObject)}
	>
!

remove: anObject
	elements remove: anObject
! !

!Set methodsFor: 'comparing'!

= aCollection
	^self class = aCollection class and: [
        	elements = aCollection asArray]
! !

!Set methodsFor: 'converting'!

asArray
	^elements copy
! !

!Set methodsFor: 'enumerating'!

detect: aBlock ifNone: anotherBlock
	^elements detect: aBlock ifNone: anotherBlock
!

do: aBlock
	elements do: aBlock
! !

!Set methodsFor: 'initialization'!

initialize
	super initialize.
	elements := #()
! !

!Set methodsFor: 'testing'!

includes: anObject
	^elements includes: anObject
! !

Object subclass: #Transcript
	instanceVariableNames: 'textarea'
	category: 'Kernel'!

Transcript class instanceVariableNames: 'current'!

!Transcript class methodsFor: 'instance creation'!

open
    self current open
!

new
    self shouldNotImplement
!

current
    ^current
!

register: aTranscript
	current := aTranscript
! !

!Transcript class methodsFor: 'printing'!

show: anObject
    self current show: anObject
!

cr
    self current show: String cr
!

clear
    self current clear
! !

Object subclass: #ConsoleTranscript
	instanceVariableNames: 'textarea'
	category: 'Kernel'!

!ConsoleTranscript methodsFor: 'actions'!

open
! !

!ConsoleTranscript methodsFor: 'printing'!

clear
	"no op"
!

cr
	"no op"
!

show: anObject
	<console.log(String(anObject._asString()))>
! !

!ConsoleTranscript class methodsFor: 'initialization'!

initialize
	Transcript register: self new
! !

