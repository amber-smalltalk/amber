Smalltalk current createPackage: 'Kernel-Collections' properties: #{}!
Object subclass: #Collection
	instanceVariableNames: ''
	category: 'Kernel-Collections'!

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
    ^self remove: anObject ifAbsent: [self errorNotFound]
!

remove: anObject ifAbsent: aBlock
    self subclassResponsibility
! !

!Collection methodsFor: 'converting'!

asArray
	^Array withAll: self
!

asSet
	^Set withAll: self
!

asJSONString
	^JSON stringify: (self collect: [:each | each asJSONString])
!

asOrderedCollection
	^OrderedCollection withAll: self
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
!

new: anInteger
	^self new
! !

Collection subclass: #SequenceableCollection
	instanceVariableNames: ''
	category: 'Kernel-Collections'!

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

!SequenceableCollection methodsFor: 'comparing'!

= aCollection
	(self class = aCollection class and: [
		self size = aCollection size]) ifFalse: [^false].
	self withIndexDo: [:each :i |
                 (aCollection at: i) = each ifFalse: [^false]].
	^true
! !

!SequenceableCollection methodsFor: 'converting'!

reversed
	self subclassResponsibility
! !

!SequenceableCollection methodsFor: 'copying'!

copyFrom: anIndex to: anotherIndex
	| range newCollection |
	range := anIndex to: anotherIndex.
	newCollection := self class new: range size.
	range do: [:each |
	    newCollection at: each put: (self at: each)].
	^newCollection
!

shallowCopy
	| newCollection |
	newCollection := self class new: self size.
	self withIndexDo: [ :each :index | 
		newCollection at: index put: each].
	^newCollection
!

deepCopy
	| newCollection |
	newCollection := self class new: self size.
	self withIndexDo: [:each :index | 
		newCollection at: index put: each deepCopy].
	^newCollection
! !

!SequenceableCollection methodsFor: 'enumerating'!

withIndexDo: aBlock
	<for(var i=0;i<self.length;i++){aBlock(self[i], i+1);}>
! !

!SequenceableCollection methodsFor: 'printing'!

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

SequenceableCollection subclass: #CharacterArray
	instanceVariableNames: ''
	category: 'Kernel-Collections'!

!CharacterArray methodsFor: 'accessing'!

at: anIndex put: anObject
	self errorReadOnly
! !

!CharacterArray methodsFor: 'adding'!

add: anObject
	self errorReadOnly
!

remove: anObject
	self errorReadOnly
! !

!CharacterArray methodsFor: 'converting'!

asString
	^self subclassResponsibility
!

asNumber
	^self asString asNumber
!

asUppercase
	^self class fromString: self asString asUppercase
!

asSymbol
	^self subclassResponsibility
!

asLowercase
	^self class fromString: self asString asLowercase
! !

!CharacterArray methodsFor: 'copying'!

, aString
	^self asString, aString asString
! !

!CharacterArray methodsFor: 'error handling'!

errorReadOnly
	self error: 'Object is read-only'
! !

!CharacterArray methodsFor: 'printing'!

printString
	^self asString printString
! !

!CharacterArray class methodsFor: 'instance creation'!

fromString: aString
	self subclassResponsibility
! !

CharacterArray subclass: #String
	instanceVariableNames: ''
	category: 'Kernel-Collections'!

!String methodsFor: 'accessing'!

size
	<return self.length>
!

at: anIndex ifAbsent: aBlock
	<return self[anIndex - 1] || aBlock()>
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

!String methodsFor: 'comparing'!

= aString
	aString class = self class ifFalse: [^false].
	<return String(self) === String(aString)>
!

> aString
	<return String(self) >> aString._asString()>
!

< aString
	<return String(self) < aString._asString()>
!

>= aString
	<return String(self) >>= aString._asString()>
!

<= aString
	<return String(self) <= aString._asString()>
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
!

asJSONString
	^self
!

asSymbol
	^Symbol lookup: self
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

CharacterArray subclass: #Symbol
	instanceVariableNames: ''
	category: 'Kernel-Collections'!

!Symbol methodsFor: 'accessing'!

at: anIndex ifAbsent: aBlock
	^self asString at: anIndex ifAbsent: aBlock
!

size
	^self asString size
! !

!Symbol methodsFor: 'comparing'!

< aSymbol
	^self asString < aSymbol asString
!

<= aSymbol
	^self asString <= aSymbol asString
!

>= aSymbol
	^self asString >= aSymbol asString
!

= aSymbol
	aSymbol class = self class ifFalse: [^false].
	^self asString = aSymbol asString
!

> aSymbol
	^self asString > aSymbol asString
! !

!Symbol methodsFor: 'converting'!

asString
	<return self.value>
!

asSymbol
	^self
!

asJavascript
	^'smalltalk.symbolFor("', self asString, '")'
!

asSelector
	^self asString asSelector
! !

!Symbol methodsFor: 'copying'!

copyFrom: anIndex to: anotherIndex
	^self class fromString: (self asString copyFrom: anIndex to: anotherIndex)
!

deepCopy
	^self
!

shallowCopy
	^self
! !

!Symbol methodsFor: 'printing'!

printString
	^'#', self asString
!

isSymbol
	^true
! !

!Symbol class methodsFor: 'instance creation'!

lookup: aString
	<return smalltalk.symbolFor(aString);>
!

basicNew
	self shouldNotImplement
!

fromString: aString
	^self lookup: aString
! !

SequenceableCollection subclass: #Array
	instanceVariableNames: ''
	category: 'Kernel-Collections'!

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

reversed
	<return self._copy().reverse()>
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
! !

!Array class methodsFor: 'instance creation'!

new: anInteger
	<return new Array(anInteger)>
!

with: anObject
	    ^(self new: 1)
		at: 1 put: anObject;
		yourself
!

with: anObject with: anObject2
	    ^(self new: 2)
		at: 1 put: anObject;
		at: 2 put: anObject2;
		yourself
!

with: anObject with: anObject2 with: anObject3
	    ^(self new: 3)
		at: 1 put: anObject;
		at: 2 put: anObject2;
		at: 3 put: anObject3;
		yourself
!

withAll: aCollection
	| instance |
	instance := self new: aCollection size.
	aCollection withIndexDo: [:index :each |
		instance at: index put: each].
	^instance
! !

Object subclass: #RegularExpression
	instanceVariableNames: ''
	category: 'Kernel-Collections'!

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

Object subclass: #Association
	instanceVariableNames: 'key value'
	category: 'Kernel-Collections'!

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

Object subclass: #Stream
	instanceVariableNames: 'collection position streamSize'
	category: 'Kernel-Collections'!

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
	^self atEnd 
		ifTrue: [nil]
		ifFalse: [
			self position: self position + 1. 
			collection at: self position]
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
	category: 'Kernel-Collections'!

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

Collection subclass: #Set
	instanceVariableNames: 'elements'
	category: 'Kernel-Collections'!

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
!

select: aBlock
	| collection |
	collection := self class new. 
	self do: [:each |
		(aBlock value: each) ifTrue: [
			collection add: each]].
	^collection
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

Collection subclass: #HashedCollection
	instanceVariableNames: ''
	category: 'Kernel-Collections'!
!HashedCollection commentStamp!
A HashedCollection is a traditional JavaScript object, or a Smalltalk Dictionary.

Unlike a Dictionary, it can only have strings as keys.!

!HashedCollection methodsFor: 'accessing'!

size
	^self keys size
!

associations
	| associations |
	associations := #().
	self keys do: [:each |
	    associations add: (Association key: each value: (self at: each))].
	^associations
!

keys
	<
		var keys = [];
		for(var i in self) {
			if(self.hasOwnProperty(i)) {
				keys.push(i);
			}
		};
		return keys;
	>
!

values
	^self keys collect: [:each | self at: each]
!

at: aKey put: aValue
	^self basicAt: aKey put: aValue
!

at: aKey ifAbsent: aBlock
	^(self includesKey: aKey)
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

!HashedCollection methodsFor: 'adding/removing'!

add: anAssociation
	self at: anAssociation key put: anAssociation value
!

addAll: aHashedCollection
	super addAll: aHashedCollection associations.
	^aHashedCollection
!

removeKey: aKey
    self remove: aKey
!

remove: aKey ifAbsent: aBlock
    ^self removeKey: aKey ifAbsent: aBlock
!

removeKey: aKey ifAbsent: aBlock
	^(self includesKey: aKey) 
		ifFalse: [aBlock value]
		ifTrue: [self basicDelete: aKey]
! !

!HashedCollection methodsFor: 'comparing'!

= aHashedCollection
	self class = aHashedCollection class ifFalse: [^false].
	self size = aHashedCollection size ifFalse: [^false].
	^self associations = aHashedCollection associations
! !

!HashedCollection methodsFor: 'converting'!

asDictionary
	^Dictionary fromPairs: self associations
! !

!HashedCollection methodsFor: 'copying'!

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
!

deepCopy
	| copy |
	copy := self class new.
	self associationsDo: [:each |
	    copy at: each key  put: each value deepCopy].
	^copy
! !

!HashedCollection methodsFor: 'enumerating'!

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

!HashedCollection methodsFor: 'printing'!

printString
	^String streamContents: [:aStream|  
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
						aStream nextPutAll: ')']
!

storeOn: aStream
	aStream nextPutAll: '#{'.
	self associations
		do: [:each | each storeOn: aStream]
		separatedBy: [ aStream nextPutAll: '. '].
	aStream nextPutAll: '}'
! !

!HashedCollection methodsFor: 'testing'!

includesKey: aKey
	<return self.hasOwnProperty(aKey)>
! !

!HashedCollection class methodsFor: 'instance creation'!

fromPairs: aCollection
	| dict |
	dict := self new.
	aCollection do: [:each | dict add: each].
	^dict
! !

HashedCollection subclass: #Dictionary
	instanceVariableNames: 'keys values'
	category: 'Kernel-Collections'!

!Dictionary methodsFor: 'accessing'!

at: aKey ifAbsent: aBlock
	<
		var index;
		for(var i=0;i<self['@keys'].length;i++){
			if(self['@keys'][i].__eq(aKey)) {index = i;}
		};
		if(typeof index === 'undefined') {
			return aBlock();
		} else {
			return self['@values'][index];
		}
	>
!

keys
	^keys copy
!

values
	^values copy
!

at: aKey put: aValue
	<
		var index = self['@keys'].indexOf(aKey);
		if(index === -1) {
			self['@values'].push(aValue);
			self['@keys'].push(aKey);
		} else {
			self['@values'][index] = aValue;
		};

		return aValue;
	>
! !

!Dictionary methodsFor: 'adding/removing'!

removeKey: aKey ifAbsent: aBlock
	<
		var index = self['@keys'].indexOf(aKey);
		if(index === -1) {
			return aBlock()
		} else {
			self['@keys'].splice(i, 1);
			self['@values'].splice(i, 1);
			return aKey
		};
	>
! !

!Dictionary methodsFor: 'converting'!

asHashedCollection
	^HashedCollection fromPairs: self associations
!

asJSONString
	^self asHashedCollection asJSONString
! !

!Dictionary methodsFor: 'initialization'!

initialize
	super initialize.
	keys := #().
	values := #()
! !

!Dictionary methodsFor: 'testing'!

includesKey: aKey
	^keys includes: aKey
! !

SequenceableCollection subclass: #OrderedCollection
	instanceVariableNames: 'elements'
	category: 'Kernel-Collections'!

!OrderedCollection methodsFor: 'accessing'!

size
	^elements size
!

at: anIndex put: anObject
	<return self['@elements'][anIndex - 1] = anObject>
!

at: anIndex ifAbsent: aBlock
	^elements at: anIndex ifAbsent: aBlock
! !

!OrderedCollection methodsFor: 'adding/removing'!

add: anObject
	<self['@elements'].push(anObject); return anObject;>
!

remove: anObject
	<
		for(var i=0;i<self['@elements'].length;i++) {
			if(self['@elements'][i] == anObject) {
				self['@elements'].splice(i,1);
				break;
			}
		}
	>
!

removeFrom: aNumber to: anotherNumber
	<self['@elements'].splice(aNumber - 1,anotherNumber - 1)>
! !

!OrderedCollection methodsFor: 'converting'!

reversed
	^self asArray reversed asOrderedCollection
!

asOrderedCollection
	^self
!

asArray
	^elements copy
! !

!OrderedCollection methodsFor: 'enumerating'!

join: aString
	^elements join: aString
!

sort
 	elements sort.
	^self
!

sort: aBlock
	elements sort: aBlock.
	^self
!

sorted
	^self copy sort
!

sorted: aBlock
	^self copy sort: aBlock
!

withIndexDo: aBlock
	elements withIndexDo: aBlock
!

detect: aBlock ifNone: anotherBlock
	^elements detect: aBlock ifNone: anotherBlock
!

do: aBlock
	elements do: aBlock
! !

!OrderedCollection methodsFor: 'initialization'!

initialize
	super initialize.
	elements := #()
! !

