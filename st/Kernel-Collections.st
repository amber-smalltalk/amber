Smalltalk current createPackage: 'Kernel-Collections' properties: #{}!
Object subclass: #Association
	instanceVariableNames: 'key value'
	package: 'Kernel-Collections'!

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

Object subclass: #Collection
	instanceVariableNames: ''
	package: 'Kernel-Collections'!

!Collection methodsFor: 'accessing'!

readStream
	^self stream
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
    ^self remove: anObject ifAbsent: [self errorNotFound]
!

remove: anObject ifAbsent: aBlock
    self subclassResponsibility
! !

!Collection methodsFor: 'converting'!

asArray
	^Array withAll: self
!

asJSON
	^self asArray collect: [:each | each asJSON]
!

asOrderedCollection
	^self asArray
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

do: aBlock
	<for(var i=0;i<self.length;i++){aBlock(self[i]);}>
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

ifEmpty: aBlock
	"Evaluate the given block with the receiver as argument, answering its value if the receiver is empty, otherwise answer the receiver. Note that the fact that this method returns its argument in case the receiver is not empty allows one to write expressions like the following ones: self classifyMethodAs: 
		(myProtocol ifEmpty: ['As yet unclassified'])"
	^ self isEmpty 
		ifTrue: [ aBlock value ]
		ifFalse: [ self ]
!

ifNotEmpty: aBlock
	self notEmpty ifTrue: aBlock.
!

includes: anObject
	<
		var i = self.length;
		while (i--) {
			if (smalltalk.send(self[i], "__eq", [anObject])) {return true;}	
		}
		return false
	>
!

isEmpty
	^self size = 0
!

notEmpty
	^self isEmpty not
! !

!Collection class methodsFor: 'accessing'!

streamClass
	    ^Stream
! !

!Collection class methodsFor: 'instance creation'!

new: anInteger
	^self new
!

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

Collection subclass: #HashedCollection
	instanceVariableNames: ''
	package: 'Kernel-Collections'!
!HashedCollection commentStamp!
A HashedCollection is a traditional JavaScript object, or a Smalltalk Dictionary.

Unlike a Dictionary, it can only have strings as keys.!

!HashedCollection methodsFor: 'accessing'!

associations
	| associations |
	associations := #().
	self keys do: [:each |
	    associations add: (Association key: each value: (self at: each))].
	^associations
!

at: aKey
	^self at: aKey ifAbsent: [self errorNotFound]
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

at: aKey put: aValue
	^self basicAt: aKey put: aValue
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

size
	^self keys size
!

values
	^self keys collect: [:each | self at: each]
! !

!HashedCollection methodsFor: 'adding/removing'!

add: anAssociation
	self at: anAssociation key put: anAssociation value
!

addAll: aHashedCollection
	super addAll: aHashedCollection associations.
	^aHashedCollection
!

remove: aKey ifAbsent: aBlock
    ^self removeKey: aKey ifAbsent: aBlock
!

removeKey: aKey
    ^self remove: aKey
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
!

asJSON
	| c |
	c := self class new.
	self keysAndValuesDo: [:key :value |
		c at: key put: value asJSON].
	^c
! !

!HashedCollection methodsFor: 'copying'!

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
!

shallowCopy
	| copy |
	copy := self class new.
	self associationsDo: [:each |
	    copy at: each key  put: each value].
	^copy
! !

!HashedCollection methodsFor: 'enumerating'!

associationsDo: aBlock
	self associations do: aBlock
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
	package: 'Kernel-Collections'!

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
!

keys
	^keys copy
!

values
	^values copy
! !

!Dictionary methodsFor: 'adding/removing'!

removeKey: aKey ifAbsent: aBlock
    <
            var index = self['@keys'].indexOf(aKey);
            if(index === -1) {
                return aBlock()
            } else {
                var value;
                self['@keys'].splice(index, 1);
                value = self['@values'].splice(index, 1);
                return value[0];
            };
    >
! !

!Dictionary methodsFor: 'converting'!

asHashedCollection
	^HashedCollection fromPairs: self associations
!

asJSON
	^self asHashedCollection asJSON
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

Collection subclass: #SequenceableCollection
	instanceVariableNames: ''
	package: 'Kernel-Collections'!

!SequenceableCollection methodsFor: 'accessing'!

allButFirst
	^self copyFrom: 2 to: self size
!

allButLast
	^self copyFrom: 1 to: self size - 1
!

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

atRandom
	^ self at: self size atRandom
!

first
	^self at: 1
!

first: n
	"Answer the first n elements of the receiver.
	Raise an error if there are not enough elements."

	^ self copyFrom: 1 to: n
!

fourth
	^self at: 4
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

indexOf: anObject startingAt: start
	"Answer the index of the first occurence of anElement after start
	within the receiver. If the receiver does not contain anElement, 
	answer 0."
	^self indexOf: anObject startingAt: start ifAbsent: [0]
!

indexOf: anObject startingAt: start ifAbsent: aBlock
	<
		for(var i=start-1;i<self.length;i++){
			if(self[i].__eq(anObject)) {return i+1}
		}
		return aBlock();
	>
!

last
	^self at: self size
!

second
	^self at: 2
!

third
	^self at: 3
! !

!SequenceableCollection methodsFor: 'adding'!

addLast: anObject
	self add: anObject
!

removeLast
	self remove: self last
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
	range withIndexDo: [:each :i |
	    newCollection at: i put: (self at: each)].
	^newCollection
!

deepCopy
	| newCollection |
	newCollection := self class new: self size.
	self withIndexDo: [:each :index | 
		newCollection at: index put: each deepCopy].
	^newCollection
!

shallowCopy
	| newCollection |
	newCollection := self class new: self size.
	self withIndexDo: [ :each :index | 
		newCollection at: index put: each].
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

SequenceableCollection subclass: #Array
	instanceVariableNames: ''
	package: 'Kernel-Collections'!

!Array methodsFor: 'accessing'!

at: anIndex ifAbsent: aBlock
	<
	    var value = self[anIndex - 1];
	    if(value === undefined) {
		return aBlock();
	    } else {
		return value;
	    }
	>
!

at: anIndex put: anObject
	<return self[anIndex - 1] = anObject>
!

size
	<return self.length>
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
	aCollection withIndexDo: [:each :index  |
		instance at: index put: each].
	^instance
! !

SequenceableCollection subclass: #Array
	instanceVariableNames: ''
	package: 'Kernel-Collections'!

!Array methodsFor: 'accessing'!

at: anIndex ifAbsent: aBlock
	<
	    var value = self[anIndex - 1];
	    if(value === undefined) {
		return aBlock();
	    } else {
		return value;
	    }
	>
!

at: anIndex put: anObject
	<return self[anIndex - 1] = anObject>
!

size
	<return self.length>
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
	aCollection withIndexDo: [:each :index  |
		instance at: index put: each].
	^instance
! !

SequenceableCollection subclass: #CharacterArray
	instanceVariableNames: ''
	package: 'Kernel-Collections'!

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

asLowercase
	^self class fromString: self asString asLowercase
!

asNumber
	^self asString asNumber
!

asString
	^self subclassResponsibility
!

asSymbol
	^self subclassResponsibility
!

asUppercase
	^self class fromString: self asString asUppercase
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
	package: 'Kernel-Collections'!

!String methodsFor: 'accessing'!

asciiValue
	<return self.charCodeAt(0);>
!

at: anIndex ifAbsent: aBlock
	<return self[anIndex - 1] || aBlock()>
!

escaped
	<return escape(self)>
!

size
	<return self.length>
!

unescaped
	<return unescape(self)>
! !

!String methodsFor: 'comparing'!

< aString
	<return String(self) < aString._asString()>
!

<= aString
	<return String(self) <= aString._asString()>
!

= aString
	aString class = self class ifFalse: [^false].
	<return String(self) === String(aString)>
!

> aString
	<return String(self) >> aString._asString()>
!

>= aString
	<return String(self) >>= aString._asString()>
! !

!String methodsFor: 'converting'!

asJSON
	^self
!

asJavaScriptSelector
	^(self asSelector replace: '^_' with: '') replace: '_.*' with: ''.
!

asJavascript
	<
		if(self.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)
			return "unescape(\"" + escape(self) + "\")";
		else
			return "\"" + self + "\"";
	>
!

asLowercase
	<return self.toLowerCase()>
!

asNumber
	<return Number(self)>
!

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

asString
	^self
!

asSymbol
	^Symbol lookup: self
!

asUppercase
	<return self.toUpperCase()>
!

reversed
	<return self.split("").reverse().join("")>
!

tokenize: aString
	<return self.split(aString)>
! !

!String methodsFor: 'copying'!

, aString
	<return self + aString>
!

copyFrom: anIndex to: anotherIndex
	<return self.substring(anIndex - 1, anotherIndex)>
!

deepCopy
	^self shallowCopy
!

shallowCopy
	^self class fromString: self
! !

!String methodsFor: 'printing'!

printNl
	<console.log(self)>
!

printString
	^'''', self, ''''
! !

!String methodsFor: 'regular expressions'!

match: aRegexp
	<return self.search(aRegexp) !!= -1>
!

replace: aString with: anotherString
	^self replaceRegexp: (RegularExpression fromString: aString flag: 'g') with: anotherString
!

replaceRegexp: aRegexp with: aString
	<return self.replace(aRegexp, aString)>
!

trimBoth
	^self trimBoth: '\s'
!

trimBoth: separators

	^(self trimLeft: separators) trimRight: separators
!

trimLeft
	^self trimLeft: '\s'
!

trimLeft: separators

	^self replaceRegexp: (RegularExpression fromString: '^[', separators, ']+' flag: 'g') with: ''
!

trimRight
	^self trimRight: '\s'
!

trimRight: separators

	^self replaceRegexp: (RegularExpression fromString: '[', separators, ']+$' flag: 'g') with: ''
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

lineNumber: anIndex
	"Answer a string containing the characters in the given line number."

	| lineCount |
	lineCount := 0.
	self lineIndicesDo: [:start :endWithoutDelimiters :end |
		(lineCount := lineCount + 1) = anIndex ifTrue: [^self copyFrom: start to: endWithoutDelimiters]].
	^nil
!

lines
	"Answer an array of lines composing this receiver without the line ending delimiters."

	| lines |
	lines := Array new.
	self linesDo: [:aLine | lines add: aLine].
	^lines
!

linesDo: aBlock
	"Execute aBlock with each line in this string. The terminating line
	delimiters CR, LF or CRLF pairs are not included in what is passed to aBlock"

	self lineIndicesDo: [:start :endWithoutDelimiters :end |
		aBlock value: (self copyFrom: start to: endWithoutDelimiters)]
! !

!String methodsFor: 'testing'!

includesSubString: subString
	< return self.indexOf(subString) !!= -1 >
!

isString
	^true
! !

!String class methodsFor: 'accessing'!

cr
	<return '\r'>
!

crlf
	<return '\r\n'>
!

lf
	<return '\n'>
!

space
	<return ' '>
!

streamClass
	    ^StringStream
!

tab
	<return '\t'>
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
	package: 'Kernel-Collections'!

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

= aSymbol
	aSymbol class = self class ifFalse: [^false].
	^self asString = aSymbol asString
!

> aSymbol
	^self asString > aSymbol asString
!

>= aSymbol
	^self asString >= aSymbol asString
! !

!Symbol methodsFor: 'converting'!

asJSON
	^self asString asJSON
!

asJavascript
	^'smalltalk.symbolFor("', self asString, '")'
!

asSelector
	^self asString asSelector
!

asString
	<return self.value>
!

asSymbol
	^self
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

isSymbol
	^true
!

printString
	^'#', self asString
! !

!Symbol class methodsFor: 'instance creation'!

basicNew
	self shouldNotImplement
!

fromString: aString
	^self lookup: aString
!

lookup: aString
	<return smalltalk.symbolFor(aString);>
! !

Collection subclass: #Set
	instanceVariableNames: 'elements'
	package: 'Kernel-Collections'!

!Set methodsFor: 'accessing'!

size
	^elements size
! !

!Set methodsFor: 'adding/removing'!

add: anObject
	<
		var found;
		for(var i=0; i < self['@elements'].length; i++) {
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

Object subclass: #RegularExpression
	instanceVariableNames: ''
	package: 'Kernel-Collections'!

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

fromString: aString
	    ^self fromString: aString flag: ''
!

fromString: aString flag: anotherString
	<return new RegExp(aString, anotherString)>
! !

Object subclass: #Stream
	instanceVariableNames: 'collection position streamSize'
	package: 'Kernel-Collections'!

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
	package: 'Kernel-Collections'!

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

cr
	^self nextPutAll: String cr
!

crlf
	^self nextPutAll: String crlf
!

lf
	^self nextPutAll: String lf
!

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

space
	self nextPut: ' '
! !

