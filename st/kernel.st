nil subclass: #Object
	instanceVariableNames: ''
	category: 'Kernel'!


!Object methodsFor: 'accessing'!

basicAt: aString
	^{'
	    var value = self[aString];
	    if(typeof(value) == ''undefined'') {
		return nil;
	    } else {
		return value;
	    }
	'}
!

basicAt: aString put: anObject
	^{'return self[aString] = anObject'}
!

basicDelete: aString
    {'delete self[aString]'}
!

class
	^{'return self.klass'}
!

instVarAt: aString
	^{'
	    var value = self[''@''+aString];
	    if(typeof(value) == ''undefined'') {
		return nil;
	    } else {
		return value;
	    }
	'}
!

instVarAt: aString put: anObject
	^{'self[''@'' + aString] = anObject'}
!

size
	self error: 'Object not indexable'
!

yourself
	^self
! !

!Object methodsFor: 'comparing'!

= anObject
	^{'return self == anObject'}
!

~= anObject
	^(self = anObject) == false
! !

!Object methodsFor: 'converting'!

-> anObject
	^Association key: self value: anObject
!

asJavascript
	^self asString
!

asString
	^self printString
! !

!Object methodsFor: 'copying'!

copy
	^self shallowCopy postCopy
!

deepCopy
	{'	    
	    var copy = self.klass._new();
	    for(var i in self) {
		if(/^@.+/.test(i)) {
		    copy[i] = self[i]._deepCopy();
		}
	    }
	    return copy;
	'}.
!

postCopy
!

shallowCopy
	^{'
	    var copy = self.klass._new();
	    for(var i in self) {
		if(/^@.+/.test(i)) {
		    copy[i] = self[i];
		}
	    }
	    return copy;
	'}
! !

!Object methodsFor: 'error handling'!

error: aString
	Error signal: aString
!

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
	^{'return self[aSymbol].apply(self, aCollection);'}
!

shouldNotImplement
	self error: 'This method should not be implemented in ', self class name
!

subclassResponsibility
	self error: 'This method is a responsibility of a subclass'
!

try: aBlock catch: anotherBlock
	{'try{aBlock()} catch(e) {anotherBlock(e)}'}
! !

!Object methodsFor: 'initialization'!

initialize
! !

!Object methodsFor: 'message handling'!

perform: aSymbol
	^self perform: aSymbol withArguments: #()
! !

!Object methodsFor: 'printing'!

printNl
	{'console.log(self)'}
!

printString
	^'a ', self class name
! !

!Object methodsFor: 'testing'!

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

isClass
	^false
!

isKindOf: aClass
	^(self isMemberOf: aClass)
	    ifTrue: [true]
	    ifFalse: [self class inheritsFrom: aClass]
!

isMemberOf: aClass
	^self class = aClass
!

isMetaclass
	^false
!

isNil
	^false
!

isNumber
	^false
!

isParseFailure
	^false
!

isString
	^false
!

notNil
	^self isNil not
! !

!Object methodsFor: '*Canvas'!

appendToBrush: aTagBrush
    aTagBrush append: self asString
! !

Object subclass: #Smalltalk
	instanceVariableNames: ''
	category: 'Kernel'!


Smalltalk class instanceVariableNames: 'current'!

!Smalltalk class methodsFor: 'accessing'!

current
	    ^{'return smalltalk'}
! !

!Smalltalk methodsFor: 'accessing'!

classes
	^{'return self.classes()'}
! !


Object subclass: #Behavior
	instanceVariableNames: ''
	category: 'Kernel'!


!Behavior methodsFor: 'accessing'!

addCompiledMethod: aMethod
	{'self.fn.prototype[aMethod.selector._asSelector()] = aMethod.fn;
	self.fn.prototype.methods[aMethod.selector] = aMethod'}
!

removeCompiledMethod: aMethod
	{'delete self.fn.prototype[aMethod.selector._asSelector()];
	delete self.fn.prototype.methods[aMethod.selector]'}
!

allSubclasses
	| result |
	result := self subclasses.
	self subclasses do: [:each |
	    result addAll: each allSubclasses].
	^result
!

instanceVariableNames
	^{'return self.iVarNames'}
!

methodDictionary
	^{'var dict = smalltalk.Dictionary._new();
	var methods = self.fn.prototype.methods;
	for(var i in methods) {
		if(methods[i].selector) {
			dict._at_put_(methods[i].selector, methods[i]);
		}
	};
	return dict'}
!

methodsFor: aString
	^ClassCategoryReader new
	    class: self category: aString;
	    yourself
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

name
	^{'return self.className || nil'}
!

prototype
	^{'return self.fn.prototype'}
!

subclasses
	^{'return smalltalk.subclasses(self)'}
!

superclass
	^{'return self.superclass || nil'}
!

withAllSubclasses
	^(Array with: self) addAll: self allSubclasses; yourself
! !

!Behavior methodsFor: 'instance creation'!

basicNew
	^{'return new self.fn();'}
!

new
	^self basicNew 
	    initialize;
	    yourself
! !


Behavior subclass: #Class
	instanceVariableNames: ''
	category: 'Kernel'!


!Class methodsFor: 'accessing'!

category
	^{'return self.category'}
!

category: aString
	{'self.category = aString'}
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
	^{'return self.instanceClass'}
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

category
	^(self basicAt: 'category') ifNil: ['']
!

category: aString
	self basicAt: 'category' put: aString
!

fn
	^self basicAt: 'fn'
!

fn: aBlock
	self basicAt: 'fn' put: aBlock
!

selector
	^self basicAt: 'selector'
!

selector: aString
	self basicAt: 'selector' put: aString
!

source
	^(self basicAt: 'source') ifNil: ['']
!

source: aString
	self basicAt: 'source' put: aString
! !


Object subclass: #Number
	instanceVariableNames: ''
	category: 'Kernel'!


!Number methodsFor: 'arithmetic'!

* aNumber
	^{'return self * aNumber'}
!

+ aNumber
	^{'return self + aNumber'}
!

- aNumber
	^{'return self - aNumber'}
!

/ aNumber
	^{'return self / aNumber'}
!

max: aNumber
	^{'return Math.max(self, aNumber);'}
!

min: aNumber
	^{'return Math.min(self, aNumber);'}
! !

!Number methodsFor: 'comparing'!

< aNumber
	^{'return self < aNumber'}
!

<= aNumber
	^{'return self <= aNumber'}
!

= aNumber
	^{'return Number(self) == aNumber'}
!

> aNumber
	^{'return self > aNumber'}
!

>= aNumber
	^{'return self >= aNumber'}
! !

!Number methodsFor: 'converting'!

asJavascript
	^'(', self printString, ')'
!

asString
	^self printString
!

rounded
	^{'return Math.round(self);'}
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

atRandom
    ^(Random new next * self) truncated + 1
!

truncated
	^{'return Math.floor(self);'}
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

!Number methodsFor: 'interval'!

clearInterval
    {'clearInterval(Number(self))'}
! !

!Number methodsFor: 'printing'!

printString
	^{'return String(self)'}
! !

!Number methodsFor: 'testing'!

isNumber
	^true
! !

Object subclass: #Random
	instanceVariableNames: ''
	category: 'Kernel'
!

!Random methodsFor: 'accessing'!

next
    ^{'return Math.random()'}
!

next: anInteger
    ^(1 to: anInteger) collect: [:each | self next]
! !

Object subclass: #BlockClosure
	instanceVariableNames: ''
	category: 'Kernel'!


!BlockClosure methodsFor: 'accessing'!

compiledSource
	^{'return self.toString()'}
! !

!BlockClosure methodsFor: 'controlling'!

whileFalse: aBlock
	{'while(!!self()) {aBlock()}'}
!

whileTrue: aBlock
	{'while(self()) {aBlock()}'}
! !

!BlockClosure methodsFor: 'error handling'!

on: anErrorClass do: aBlock
	self try: self catch: [:error |
	    (error isKindOf: anErrorClass) 
	     ifTrue: [aBlock value]
	     ifFalse: [error signal]]
! !

!BlockClosure methodsFor: 'evaluating'!

value
	^{'return self();'}
!

value: anArg
	^{'return self(anArg);'}
!

value: firstArg value: secondArg
	^{'return self(firstArg, secondArg);'}
!

value: firstArg value: secondArg value: thirdArg
	^{'return self(firstArg, secondArg, thirdArg);'}
!

valueWithPossibleArguments: aCollection
	^{'return self.apply(null, aCollection);'}
! !

!BlockClosure methodsFor: 'timeout/interval'!

valueWithTimeout: aNumber
    {'setTimeout(self, aNumber)'}
!

valueWithInterval: aNumber
    ^{'return setInterval(self, aNumber)'}
! !

!BlockClosure methodsFor: '*JQuery'!

appendToJQuery: aJQuery
	| canvas |
	canvas := HTMLCanvas new.
	self value: canvas.
	aJQuery append: canvas
! !

!BlockClosure methodsFor: '*Canvas'!

appendToBrush: aTagBrush
    aTagBrush appendBlock: self
! !



Object subclass: #Boolean
	instanceVariableNames: ''
	category: 'Kernel'!


!Boolean methodsFor: 'comparing'!

= aBoolean
    	^{'return Boolean(self == true) == aBoolean'}
! !

!Boolean methodsFor: 'controlling'!

and: aBlock
	^self = true
	    ifTrue: aBlock
	    ifFalse: [false]
!

ifFalse: aBlock
	^self ifTrue: [] ifFalse: aBlock
!

ifFalse: aBlock ifTrue: anotherBlock
	^self ifTrue: anotherBlock ifFalse: aBlock
!

ifTrue: aBlock
	^self ifTrue: aBlock ifFalse: []
!

ifTrue: aBlock ifFalse: anotherBlock
	^{'
	    if(self == true) {
		return aBlock();
	    } else {
		return anotherBlock();
	    }
	'}
!

not
	^self = false
!

or: aBlock
	^self = true
	    ifTrue: [true]
	    ifFalse: aBlock
! !

!Boolean methodsFor: 'copying'!

deepCopy
	^self
!

shallowCopy
	^self
! !

!Boolean methodsFor: 'printing'!

printString
	^{'return self.toString()'}
! !


Object subclass: #UndefinedObject
	instanceVariableNames: ''
	category: 'Kernel'!


!UndefinedObject class methodsFor: 'instance creation'!

new
	    self error: 'You cannot create new instances of UndefinedObject. Use nil'
! !

!UndefinedObject methodsFor: 'class creation'!

subclass: aString instanceVariableNames: anotherString
	^self subclass: aString instanceVariableNames: anotherString category: nil
!

subclass: aString instanceVariableNames: aString2 category: aString3
	^ClassBuilder new
	    superclass: self subclass: aString instanceVariableNames: aString2 category: aString3
! !

!UndefinedObject methodsFor: 'copying'!

deepCopy
	^self
!

shallowCopy
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

ifNil: aBlock ifNotNil: anotherBlock
	^aBlock value
!

ifNotNil: aBlock
	^self
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


Object subclass: #Error
	instanceVariableNames: 'messageText'
	category: 'Kernel'!


!Error class methodsFor: 'instance creation'!

signal: aString
	    ^self new
		messageText: aString;
		signal
! !

!Error methodsFor: 'accessing'!

messageText
	^messageText
!

messageText: aString
	messageText := aString
! !

!Error methodsFor: 'signaling'!

signal
	^{'throw({smalltalkError: self})'}
! !


Object subclass: #Collection
	instanceVariableNames: ''
	category: 'Kernel'!


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

!Collection methodsFor: 'accessing'!

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

readStream
	^self stream
!

second
	^self at: 2
!

size
	self subclassResponsibility
!

stream
	^self streamClass on: self
!

streamClass
	^self class streamClass
!

third
	^self at: 3
!

writeStream
	^self stream
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

copyFrom: anIndex to: anotherIndex
	self subclassResponsibility
!

copyWith: anObject
	^self copy add: anObject; yourself
!

copyWithAll: aCollection
	^self copy addAll: aCollection; yourself
! !

!Collection methodsFor: 'enumerating'!

collect: aBlock
	| stream |
	stream := self class new writeStream.
	self do: [:each |
	    stream nextPut: (aBlock value: each)].
	^stream contents
!

detect: aBlock
	^self detect: aBlock ifNone: [self errorNotFound]
!

detect: aBlock ifNone: anotherBlock
	^{'
	for(var i = 0; i < self.length; i++)
		if(aBlock(self[i]))
			return self[i];
	return anotherBlock();
	'}
!

do: aBlock
	{'for(var i=0;i<self.length;i++){aBlock(self[i]);}'}
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
	^{'
		var i = self.length;
		while (i--) {
			if (self[i].__eq(anObject)) {
				return true;
			}	
		}
		return false;

	'}
!

isEmpty
	^self size = 0
!

notEmpty
	^self isEmpty not
! !


Collection subclass: #String
	instanceVariableNames: ''
	category: 'Kernel'!


!String class methodsFor: 'accessing'!

cr
	    ^{'{return ''\n''};'}
!

lf
	    ^{'return ''\r'';'}
!

space
	    ^{'return '' '';'}
!

streamClass
	    ^StringStream
!

tab
	    ^{'return ''\t'';'}
! !

!String class methodsFor: 'instance creation'!

fromString: aString
	    ^{'return new self.fn(aString);'}
! !

!String methodsFor: 'accessing'!

at: anIndex
    	^{'return self[anIndex - 1] || nil;'}
!

at: anIndex ifAbsent: aBlock
    	(self at: anIndex) ifNil: [aBlock]
!

at: anIndex put: anObject
    	self errorReadOnly
!

escaped
	^{'return escape(self)'}
!

size
	^{'return self.length'}
!

unescaped
	^{'return unescape(self)'}
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
	^{'return String(self) == aString'}
!

> aString
	^{'return String(self) > aString'}
!

< aString
	^{'return String(self) < aString'}
!

>= aString
	^{'return String(self) >= aString'}
!

<= aString
	^{'return String(self) <= aString'}
! !

!String methodsFor: 'converting'!

asCharacterParser
    	^PPCharacterParser new string: self
!

asChoiceParser
    	^PPChoiceParser withAll: (self asArray collect: [:each | each asParser])
!

asJavascript
	^{'
	if(self.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)
		return "unescape(\"" + escape(self) + "\")";
	else
		return "\"" + self + "\"";
	'}
!

asNumber
	^{'return Number(self);'}
!

asParser
    	^PPStringParser new string: self
!

asSelector
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

asString
    	^self
!

tokenize: aString
	^{'return self.split(aString)'}
! !

!String methodsFor: 'copying'!

, aString
    	^{'return self + aString'}
!

copyFrom: anIndex to: anotherIndex
    	^{'return self.substring(anIndex - 1, anotherIndex);'}
!

deepCopy
    	^self shallowCopy
!

shallowCopy
    	^self class fromString: self
! !

!String methodsFor: 'error handling'!

errorReadOnly
    	self error: 'Object is read-only'
! !

!String methodsFor: 'printing'!

printNl
	{'console.log(self)'}
!

printString
    	^'''', self, ''''
! !

!String methodsFor: 'regular expressions'!

match: aRegexp
    	^{'return self.search(aRegexp) !!= -1'}
!

replace: aString with: anotherString
    	^self replaceRegexp: (RegularExpression fromString: aString flag: 'g') with: anotherString
!

replaceRegexp: aRegexp with: aString
    	^{'return self.replace(aRegexp, aString);'}
! !

!String methodsFor: 'testing'!

isString
    	^true
! !

!String methodsFor: '*JQuery'!

asJQuery
    ^JQuery fromString: self
!

appendToJQuery: aJQuery
    {'aJQuery._appendElement_(String(self))'}
! !

!String methodsFor: '*Canvas'!

appendToBrush: aTagBrush
    aTagBrush appendString: self
! !

Object subclass: #RegularExpression
	instanceVariableNames: ''
	category: 'Kernel'!


!RegularExpression class methodsFor: 'instance creation'!

fromString: aString
	    ^self fromString: aString flag: ''
!

fromString: aString flag: anotherString
	    ^{'return new RegExp(aString, anotherString);'}
! !

!RegularExpression methodsFor: 'evaluating'!

compile: aString
	^{'return self.compile(aString);'}
!

exec: aString
	^{'return self.exec(aString);'}
!

test: aString
	^{'return self.test(aString);'}
! !


Collection subclass: #Array
	instanceVariableNames: ''
	category: 'Kernel'!


!Array methodsFor: 'accessing'!

at: anIndex ifAbsent: aBlock
	^{'
	    var value = self[anIndex - 1];
	    if(value === undefined) {
		return aBlock();
	    } else {
		return value;
	    }
	'}
!

at: anIndex put: anObject
	^{'return self[anIndex - 1] = anObject'}
!

size
	^{'return self.length'}
! !

!Array methodsFor: 'adding'!

add: anObject
	^{'self.push(anObject); return anObject;'}
!

addLast: anObject
	^self add: anObject
!

remove: anObject
    {'for(var i=0;i<self.length;i++) {
	if(self[i] == anObject) {
		self.splice(i,1);
		break;
	}
    }'}
! !

!Array methodsFor: 'converting'!

asJavascript
	^'[', ((self collect: [:each | each asJavascript]) join: ', '),  ']'
! !

!Array methodsFor: 'copying'!

deepCopy
	| newCollection |
	newCollection := self class new.
	self do: [:each | newCollection add: each deepCopy].
	^newCollection
!

shallowCopy
	| newCollection |
	newCollection := self class new.
	self do: [:each | newCollection add: each].
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

sort
    ^self copy basicPerform: 'sort'
!

sort: aBlock
    ^self copy basicPerform: 'sort' withArguments: (Array with: aBlock)
!

join: aString
	^{'return self.join(aString);'}
! !



Object subclass: #Association
	instanceVariableNames: 'key value'
	category: 'Kernel'!


!Association class methodsFor: 'instance creation'!

key: aKey value: aValue
	    ^self new
		key: aKey;
		value: aValue;
		yourself
! !

!Association methodsFor: 'accessing'!

key
	^key
!

key: aKey
	key := aKey
!

value
	^value
!

value: aValue
	value := aValue
! !

!Association methodsFor: 'comparing'!

= anAssociation
	^self class = anAssociation class and: [
	    self key = anAssociation key and: [
		self value = anAssociation value]]
! !


Collection subclass: #Dictionary
	instanceVariableNames: 'keys'
	category: 'Kernel'!


!Dictionary methodsFor: 'accessing'!

associations
	| associations |
	associations := #().
	keys do: [:each |
	    associations add: (Association key: each value: (self at: each))].
	^associations
!

at: aKey ifAbsent: aBlock
	^(self basicAt: aKey) ifNil: aBlock
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

at: aKey put: aValue
	(keys includes: aKey) ifFalse: [keys add: aKey].
	^self basicAt: aKey put: aValue
!

keys
	^keys copy
!

size
	^keys size
!

values
    	^keys collect: [:each | self at: each]
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

!Dictionary methodsFor: 'copying'!

, aCollection
	self shouldNotImplement
!

copyFrom: anIndex to: anotherIndex
	self shouldNotImplement
!

shallowCopy
	| copy |
	copy := self class new.
	self associationsDo: [:each |
	    copy at: each key  put: each value].
	^copy
! !

!Dictionary methodsFor: 'enumerating'!

associationsDo: aBlock
    	self associations do: aBlock
!

collect: aBlock
    	| newDict |
    	newDict := self class new.
    	self keysAndValuesDo: [:key :value |
    	    (aBlock value: value) ifTrue: [newDict at: key put: value]].
    	^newDict
!

detect: aBlock ifNone: anotherBlock
	^self values detect: aBlock ifNone: anotherBlock
!

do: aBlock
    	self values do: aBlock
!

includes: anObject
	^self values includes: anObject
!

keysAndValuesDo: aBlock
    	self associationsDo: [:each |
    	    aBlock value: each key value: each value]
!

select: aBlock
    	| newDict |
    	newDict := self class new.
    	self keysAndValuesDo: [:key :value |
    	    (aBlock value: value) ifTrue: [newDict at: key put: value]].
    	^newDict
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

class: aClass instanceVariableNames: aString
	aClass isMetaclass ifFalse: [self error: aClass name, ' is not a metaclass'].
	aClass basicAt: 'iVarNames' put: (self instanceVariableNamesFor: aString).
	self setupClass: aClass
!

superclass: aClass subclass: aString
	self superclass: aClass subclass: aString instanceVariableNames: '' category: nil
!

superclass: aClass subclass: aString instanceVariableNames: aString2 category: aString3
	| newClass |
	newClass := self addSubclassOf: aClass named: aString instanceVariableNames: (self instanceVariableNamesFor: aString2).
	self setupClass: newClass.
	newClass category: (aString3 ifNil: ['unclassified'])
! !

!ClassBuilder methodsFor: 'private'!

addSubclassOf: aClass named: aString instanceVariableNames: aCollection
	^{'smalltalk.addClass(aString, aClass, aCollection);
	    return smalltalk[aString]'}
!

instanceVariableNamesFor: aString
	^(aString tokenize: ' ') reject: [:each | each isEmpty]
!

setupClass: aClass
	{'smalltalk.init(aClass);'}
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


Object subclass: #Stream
	instanceVariableNames: 'collection position streamSize'
	category: 'Kernel'!


!Stream class methodsFor: 'instance creation'!

on: aCollection
	    ^self new 
		setCollection: aCollection;
		setStreamSize: aCollection size;
		yourself
! !

!Stream methodsFor: 'accessing'!

collection
	^collection
!

contents
	^self collection
	    copyFrom: 1 
	    to: self streamSize
!

position
	^position ifNil: [position := 0]
!

position: anInteger
	position := anInteger
!

setCollection: aCollection
	collection := aCollection
!

setStreamSize: anInteger
	streamSize := anInteger
!

size
	^self streamSize
!

streamSize
	^streamSize
! !

!Stream methodsFor: 'actions'!

close
!

flush
!

reset
	self position: 0
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
! !


