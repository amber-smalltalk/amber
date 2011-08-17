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
	<return self == anObject>
!

~= anObject
	^(self = anObject) == false
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
	^self
!

ifNil: aBlock ifNotNil: anotherBlock
	^anotherBlock value
!

ifNotNil: aBlock
	^aBlock value
!

ifNotNil: aBlock ifNil: anotherBlock
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

debugMode
	<return self.debugMode>
!

debugMode: aBoolean
	<self.debugMode = aBoolean>
!

readJSON: anObject
	<return self.readJSObject(anObject)>
!

at: aString
	<return self[aString]>
!

removeClass: aClass
	aClass isMetaclass ifTrue: [self error: aClass asString, ' is a Metaclass and cannot be removed!!'].
	aClass methodDictionary values do: [:each |
		aClass removeCompiledMethod: each].
	aClass class methodDictionary values do: [:each |
		aClass class removeCompiledMethod: each].
	self basicDelete: aClass name
! !

Smalltalk class instanceVariableNames: 'current'!

!Smalltalk class methodsFor: 'accessing'!

current
	<return smalltalk>
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
	<return self.category>
!

category: aString
	<self.category = aString>
!

rename: aString
	<
		smalltalk[aString] = self;
		delete smalltalk[self.className];
		self.className = aString;
	>
! !

!Class methodsFor: 'class creation'!

subclass: aString instanceVariableNames: anotherString
	^self subclass: aString instanceVariableNames: anotherString category: nil
!

subclass: aString instanceVariableNames: aString2 category: aString3
	^ClassBuilder new
	    superclass: self subclass: aString instanceVariableNames: aString2 category: aString3
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
! !

Object subclass: #Number
	instanceVariableNames: ''
	category: 'Kernel'!

!Number methodsFor: 'arithmetic'!

+ aNumber
	<return self + aNumber>
!

- aNumber
	<return self - aNumber>
!

* aNumber
	<return self * aNumber>
!

/ aNumber
	<return self / aNumber>
!

max: aNumber
	<return Math.max(self, aNumber);>
!

min: aNumber
	<return Math.min(self, aNumber);>
! !

!Number methodsFor: 'comparing'!

= aNumber
	<return Number(self) == aNumber>
!

> aNumber
	<return self >> aNumber>
!

< aNumber
	<return self < aNumber>
!

>= aNumber
	<return self >>= aNumber>
!

<= aNumber
	<return self <= aNumber>
! !

!Number methodsFor: 'converting'!

rounded
	<return Math.round(self);>
!

truncated
	<return Math.floor(self);>
!

to: aNumber
	| array first last count |
	first := self truncated.
	last := aNumber truncated + 1.
	count := 1.
	(first <= last) ifFalse: [self error: 'Wrong interval'].
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

to: aNumber do: aBlock
	^(self to: aNumber) do: aBlock
! !

!Number methodsFor: 'printing'!

printString
	<return String(self)>
! !

!Number methodsFor: 'testing'!

isNumber
	^true
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
! !

!BlockClosure methodsFor: 'controlling'!

whileTrue: aBlock
	<while(self()) {aBlock()}>
!

whileFalse: aBlock
	<while(!!self()) {aBlock()}>
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
	<return self();>
!

value: anArg
	<return self(anArg);>
!

value: firstArg value: secondArg
	<return self(firstArg, secondArg);>
!

value: firstArg value: secondArg value: thirdArg
	<return self(firstArg, secondArg, thirdArg);>
!

valueWithPossibleArguments: aCollection
	<return self.apply(null, aCollection);>
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
	<return Boolean(self == true) == aBoolean>
!

asJSONObject
	^self
! !

!Boolean methodsFor: 'controlling'!

ifTrue: aBlock
	^self ifTrue: aBlock ifFalse: []
!

ifFalse: aBlock
	^self ifTrue: [] ifFalse: aBlock
!

ifFalse: aBlock ifTrue: anotherBlock
	^self ifTrue: anotherBlock ifFalse: aBlock
!

ifTrue: aBlock ifFalse: anotherBlock
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
	<self <= aDate>
!

>= aDate
	<self >>= aDate>
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
	^self subclass: aString instanceVariableNames: anotherString category: nil
!

subclass: aString instanceVariableNames: aString2 category: aString3
	^ClassBuilder new
	    superclass: self subclass: aString instanceVariableNames: aString2 category: aString3
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
	^self ifNil: aBlock ifNotNil: []
!

ifNotNil: aBlock
	^self
!

ifNil: aBlock ifNotNil: anotherBlock
	^aBlock value
!

ifNotNil: aBlock ifNil: anotherBlock
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
! !

!SequenceableCollection methodsFor: 'adding'!

removeLast
	self remove: self last
!

addLast: anObject
	self add: anObject
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

asParser
    	^PPStringParser new string: self
!

asChoiceParser
    	^PPChoiceParser withAll: (self asArray collect: [:each | each asParser])
!

asCharacterParser
    	^PPCharacterParser new string: self
!

asJSONObject
	^self
!

asLowercase
	<return self.toLowerCase()>
!

asUppercase
	<return self.toUpperCase()>
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

!String methodsFor: 'testing'!

isString
    	^true
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

!Array methodsFor: 'converting'!

asJavascript
	^'[', ((self collect: [:each | each asJavascript]) join: ', '),  ']'
!

asJSONObject
	^self collect: [:each | each asJSONObject]
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
			if(aBlock(a,b)) {return 1} else {return -1}
		})
	>
!

sorted
	^self copy sort
!

sorted: aBlock
	^self copy sorted: aBlock
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
	<self.context = thisContext; self.smalltalkError = true; throw(self)>
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
	self associationsDo: [:assoc |
	    (aDictionary at: assoc key ifAbsent: [^false]) = assoc value 
		ifFalse: [^false]].
	^true
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

Object subclass: #ClassBuilder
	instanceVariableNames: ''
	category: 'Kernel'!

!ClassBuilder methodsFor: 'class creation'!

superclass: aClass subclass: aString
	self superclass: aClass subclass: aString instanceVariableNames: '' category: nil
!

superclass: aClass subclass: aString instanceVariableNames: aString2 category: aString3
	| newClass |
	newClass := self addSubclassOf: aClass named: aString instanceVariableNames: (self instanceVariableNamesFor: aString2).
	self setupClass: newClass.
	newClass category: (aString3 ifNil: ['unclassified'])
!

class: aClass instanceVariableNames: aString
	aClass isMetaclass ifFalse: [self error: aClass name, ' is not a metaclass'].
	aClass basicAt: 'iVarNames' put: (self instanceVariableNamesFor: aString).
	self setupClass: aClass
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

scanFrom: aStream
	| nextChunk |
	nextChunk := (chunkParser emptyChunk / chunkParser chunk) parse: aStream.
	nextChunk isEmptyChunk ifFalse: [
	    self compileMethod: nextChunk contents.
	    self scanFrom: aStream].
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
! !

Object subclass: #ClassCommentReader
	instanceVariableNames: 'class chunkParser'
	category: 'Kernel'!

!ClassCommentReader methodsFor: 'accessing'!

class: aClass
	class := aClass
! !

!ClassCommentReader methodsFor: 'fileIn'!

scanFrom: aStream
	| nextChunk |
	nextChunk := (chunkParser emptyChunk / chunkParser chunk) parse: aStream.
	nextChunk isEmptyChunk ifFalse: [
	    self setComment: nextChunk contents].
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
    ^1 to: anInteger collect: [:each | self next]
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
	^current
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

