Smalltalk current createPackage: 'Kernel-Collections'!
Object subclass: #Association
	instanceVariableNames: 'key value'
	package: 'Kernel-Collections'!
!Association commentStamp!
I represent a pair of associated objects, a key and a value. My instances can serve as entries in a dictionary.

Instances can be created with the class-side method `#key:value:`!

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

!Association methodsFor: 'printing'!

printOn: aStream
	self key printOn: aStream.
	aStream nextPutAll: ' -> '.
	self value printOn: aStream
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
!Collection commentStamp!
I am the abstract superclass of all classes that represent a group of elements.

I provide a set of useful methods to the Collection hierarchy such as enumerating and converting methods.!

!Collection methodsFor: 'accessing'!

occurrencesOf: anObject
	"Answer how many of the receiver's elements are equal to anObject."

	| tally |
	tally := 0.
	self do: [:each | anObject = each ifTrue: [tally := tally + 1]].
	^tally
!

size
	self subclassResponsibility
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
	| stream |
	stream := self class new writeStream.
	self do: [ :each |
		stream nextPut: (aBlock value: each) ].
	^stream contents
!

detect: aBlock
	^self detect: aBlock ifNone: [self errorNotFound]
!

detect: aBlock ifNone: anotherBlock
	self subclassResponsibility
!

do: aBlock
	self subclassResponsibility
!

do: aBlock separatedBy: anotherBlock
	| actionBeforeElement |
	actionBeforeElement := [actionBeforeElement := anotherBlock].
	self do: [:each |
		actionBeforeElement value.
		aBlock value: each]
!

inject: anObject into: aBlock
	| result |
	result := anObject.
	self do: [:each |
		result := aBlock value: result value: each].
	^result
!

intersection: aCollection
	"Answer the set theoretic intersection of two collections."

	| set outputSet |
	
	set := self asSet.
	outputSet := Set new.
	
	aCollection do: [ :each |
		((set includes: each) and: [(outputSet includes: each) not])
			ifTrue: [
				outputSet add: each]].
		
	^ self class withAll: outputSet asArray
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

!Collection methodsFor: 'streaming'!

putOn: aStream
	self do: [ :each | each putOn: aStream ]
! !

!Collection methodsFor: 'testing'!

contains: aBlock
	"Evaluate aBlock with the elements of the receiver.
	If aBlock returns true for any element return true.
	Otherwise return false."

	self do: [ :each | (aBlock value: each) ifTrue: [ ^ true ] ].
	^ false
!

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
	| sentinel |
	sentinel := Object new.
	^(self detect: [ :each | each = anObject] ifNone: [ sentinel ]) ~= sentinel
!

isEmpty
	^self size = 0
!

notEmpty
	^self isEmpty not
! !

!Collection class methodsFor: 'helios'!

heliosClass
	^ 'collection'
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

Collection subclass: #IndexableCollection
	instanceVariableNames: ''
	package: 'Kernel-Collections'!
!IndexableCollection commentStamp!
I am a key-value store collection, that is,
I store values under indexes.

As a rule of thumb, if a collection has `#at:` and `#at:put:`,
it is an IndexableCollection.!

!IndexableCollection methodsFor: 'accessing'!

at: anIndex
	"Lookup the given index in the receiver.
	If it is present, answer the value stored at anIndex.
	Otherwise, raise an error."

	^self at: anIndex ifAbsent: [ self errorNotFound ]
!

at: anIndex ifAbsent: aBlock
	"Lookup the given index in the receiver.
	If it is present, answer the value stored at anIndex.
	Otherwise, answer the value of aBlock."

	self subclassReponsibility
!

at: anIndex ifPresent: aBlock
	"Lookup the given index in the receiver.
	If it is present, answer the value of evaluating aBlock with the value stored at anIndex.
	Otherwise, answer nil."

	^self at: anIndex ifPresent: aBlock ifAbsent: [ nil ]
!

at: anIndex ifPresent: aBlock ifAbsent: anotherBlock
	"Lookup the given index in the receiver.
	If it is present, answer the value of evaluating aBlock with the value stored at anIndex.
	Otherwise, answer the value of anotherBlock."

	self subclassResponsibility
!

at: anIndex put: anObject
	"Store anObject under the given index in the receiver."

	self subclassReponsibility
!

indexOf: anObject
	"Lookup index at which anObject is stored in the receiver.
	If not present, raise an error."

	^self indexOf: anObject ifAbsent: [ self errorNotFound ]
!

indexOf: anObject ifAbsent: aBlock
	"Lookup index at which anObject is stored in the receiver.
	If not present, return value of executing aBlock."

	self subclassResponsibility
! !

!IndexableCollection methodsFor: 'enumarating'!

with: anotherCollection do: aBlock
	"Calls aBlock with every value from self
	and with indetically-indexed value from anotherCollection"

	self withIndexDo: [ :each :index |
		aBlock value: each value: (anotherCollection at: index) ]
!

withIndexDo: aBlock
	"Calls aBlock with every value from self
	and with its index as the second argument"

	self subclassReponsibility
! !

IndexableCollection subclass: #HashedCollection
	instanceVariableNames: ''
	package: 'Kernel-Collections'!
!HashedCollection commentStamp!
I am a traditional JavaScript object, or a Smalltalk `Dictionary`.

Unlike a `Dictionary`, I can only have strings as keys.!

!HashedCollection methodsFor: 'accessing'!

associations
	| associations |
	associations := #().
	self associationsDo: [:each | associations add: each].
	^associations
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

at: aKey ifPresent: aBlock ifAbsent: anotherBlock
	"Lookup the given key in the receiver.
	If it is present, answer the value of evaluating the oneArgBlock with the value associated with the key,
	otherwise answer the value of absentBlock."
	^(self includesKey: aKey)
		ifTrue: [ aBlock value: (self at: aKey) ]
		ifFalse: anotherBlock
!

at: aKey put: aValue
	^self basicAt: aKey put: aValue
!

indexOf: anObject ifAbsent: aBlock

	^ self keys detect: [ :each | (self at: each) = anObject ] ifNone: aBlock
!

keyAtValue: anObject
	^ self keyAtValue: anObject ifAbsent: [ self errorNotFound ]
!

keyAtValue: anObject ifAbsent: aBlock
	^ self indexOf: anObject ifAbsent: aBlock
!

keys
	<
		if ('function'===typeof Object.keys) return Object.keys(self);
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
	^Dictionary from: self associations
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

deepCopy
	| copy |
	copy := self class new.
	self keysAndValuesDo: [:key :value |
		copy at: key put: value deepCopy].
	^copy
!

shallowCopy
	| copy |
	copy := self class new.
	self keysAndValuesDo: [:key :value |
		copy at: key put: value].
	^copy
! !

!HashedCollection methodsFor: 'enumerating'!

associationsDo: aBlock
	self keysAndValuesDo: [:key :value |
		aBlock value: (Association key: key value: value)]
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
	self valuesDo: aBlock
!

includes: anObject
	^self values includes: anObject
!

keysAndValuesDo: aBlock
	self keysDo: [:each |
		aBlock value: each value: (self at: each)]
!

keysDo: aBlock
	self keys do: aBlock
!

select: aBlock
	| newDict |
	newDict := self class new.
	self keysAndValuesDo: [:key :value |
		(aBlock value: value) ifTrue: [newDict at: key put: value]].
	^newDict
!

valuesDo: aBlock
	self keysAndValuesDo: [ :key :value | aBlock value: value ]
!

withIndexDo: aBlock
	self keysAndValuesDo: [ :key :value | aBlock value: value value: key ]
! !

!HashedCollection methodsFor: 'printing'!

printOn: aStream
	super printOn: aStream.
	
	aStream nextPutAll: ' ('.
	self associations
		do: [:each | each printOn: aStream ]
		separatedBy: [ aStream nextPutAll: ' , ' ].
	aStream nextPutAll: ')'
! !

!HashedCollection methodsFor: 'testing'!

includesKey: aKey
	<return self.hasOwnProperty(aKey)>
! !

!HashedCollection class methodsFor: 'instance creation'!

from: aCollection
	| newCollection |
	newCollection := self new.
	aCollection do: [ :each | newCollection add: each ].
	^ newCollection
!

fromPairs: aCollection
	"This message is poorly named and has been replaced by #from:"
	^ self from: aCollection
!

newFromPairs: aCollection
	"Accept an array of elements where every two elements form an 
	association - the odd element being the key, and the even element the value."
	
	| newCollection |
	
	aCollection size even ifFalse: [ 
		self error: '#newFromPairs only accepts arrays of an even length' ].
		
	newCollection := self new.
	( 1 to: aCollection size by: 2 ) do: [ :each | 
		newCollection at: (aCollection at: each) put: (aCollection at: each + 1) ].
		
	^ newCollection
! !

HashedCollection subclass: #Dictionary
	instanceVariableNames: 'keys values'
	package: 'Kernel-Collections'!
!Dictionary commentStamp!
I represent a set of elements that can be viewed from one of two perspectives: a set of associations,
or a container of values that are externally named where the name can be any object that responds to `=`.

The external name is referred to as the key.!

!Dictionary methodsFor: 'accessing'!

at: aKey ifAbsent: aBlock
	<
		var index = self._positionOfKey_(aKey);
		return index >>=0 ? self['@values'][index] : aBlock._value();
	>
!

at: aKey put: aValue
	<
		var index = self._positionOfKey_(aKey);
		if(index === -1) {
			var keys = self['@keys'];
			index = keys.length;
			keys.push(aKey);
		}

		return self['@values'][index] = aValue;
	>
!

indexOf: anObject ifAbsent: aBlock

	| index |
	index := values indexOf: anObject ifAbsent: [0].
	^ index = 0 ifTrue: [ aBlock value ] ifFalse: [ keys at: index ]
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
		var index = self._positionOfKey_(aKey);
		if(index === -1) {
			return aBlock._value()
		} else {
			var keys = self['@keys'], values = self['@values'];
			var value = values[index], l = keys.length;
			keys[index] = keys[l-1];
			keys.pop();
			values[index] = values[l-1];
			values.pop();
			return value;
		}
	>
! !

!Dictionary methodsFor: 'converting'!

asHashedCollection
	^HashedCollection from: self associations
!

asJSON
	^self asHashedCollection asJSON
! !

!Dictionary methodsFor: 'enumerating'!

keysAndValuesDo: aBlock
	^keys with: values do: aBlock
!

keysDo: aBlock
	^keys do: aBlock
!

valuesDo: aBlock
	^values do: aBlock
! !

!Dictionary methodsFor: 'initialization'!

initialize
	super initialize.
	keys := #().
	values := #()
! !

!Dictionary methodsFor: 'private'!

positionOfKey: anObject
	<
		var keys = self['@keys'];
		for(var i=0;i<keys.length;i++){
			if(keys[i].__eq(anObject)) { return i;}
		}
		return -1;
	>
! !

!Dictionary methodsFor: 'testing'!

includesKey: aKey
	< return self._positionOfKey_(aKey) >>= 0; >
! !

IndexableCollection subclass: #SequenceableCollection
	instanceVariableNames: ''
	package: 'Kernel-Collections'!
!SequenceableCollection commentStamp!
I am an IndexableCollection
with numeric indexes starting with 1.!

!SequenceableCollection methodsFor: 'accessing'!

allButFirst
	^self copyFrom: 2 to: self size
!

allButLast
	^self copyFrom: 1 to: self size - 1
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

indexOf: anObject ifAbsent: aBlock
	<
		for(var i=0;i<self.length;i++) {
			if(self[i].__eq(anObject)) {return i+1}
		};
		return aBlock._value();
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
		return aBlock._value();
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

!SequenceableCollection methodsFor: 'adding/removing'!

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

detect: aBlock ifNone: anotherBlock
	<
		for(var i = 0; i < self.length; i++)
			if(aBlock._value_(self[i]))
				return self[i];
		return anotherBlock._value();
	>
!

do: aBlock
	<for(var i=0;i<self.length;i++){aBlock._value_(self[i]);}>
!

do: aBlock displayingProgress: aString
	ProgressHandler current
		do: aBlock on: self displaying: aString
!

with: anotherCollection do: aBlock
	<for(var i=0;i<self.length;i++){aBlock._value_value_(self[i], anotherCollection[i]);}>
!

withIndexDo: aBlock
	<for(var i=0;i<self.length;i++){aBlock._value_value_(self[i], i+1);}>
! !

!SequenceableCollection methodsFor: 'streaming'!

newStream
	^self streamClass on: self
!

readStream
	"For Pharo compatibility"
	
	^self stream
!

stream
	^self newStream
!

streamClass
	^self class streamClass
!

writeStream
	"For Pharo compatibility"
	
	^self stream
! !

!SequenceableCollection methodsFor: 'testing'!

includes: anObject
	^(self indexOf: anObject ifAbsent: [nil]) notNil
! !

!SequenceableCollection class methodsFor: 'accessing'!

streamClass
		^Stream
! !

!SequenceableCollection class methodsFor: 'streaming'!

streamContents: aBlock
	| stream |
	stream := (self streamClass on: self new).
	aBlock value: stream.
	^ stream contents
! !

SequenceableCollection subclass: #Array
	instanceVariableNames: ''
	package: 'Kernel-Collections'!
!Array commentStamp!
I represent a collection of objects ordered by the collector. The size of arrays is dynamic.

I am directly mapped to JavaScript Number.

*Note* In Amber, `OrderedCollection` is an alias for `Array`.!

!Array methodsFor: 'accessing'!

at: anIndex ifAbsent: aBlock
	<
		if((anIndex < 1) || (self.length < anIndex)) {return aBlock._value()};
		return self[anIndex - 1];
	>
!

at: anIndex ifPresent: aBlock ifAbsent: anotherBlock
	<return anIndex < 1 || self.length < anIndex ? anotherBlock._value() : aBlock._value_(self[anIndex - 1]);>
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

remove: anObject ifAbsent: aBlock
	<
		for(var i=0;i<self.length;i++) {
			if(_st(self[i]).__eq(anObject)) {
				self.splice(i,1);
				return self;
			}
		};
		aBlock._value();
	>
!

removeFrom: aNumber to: anotherNumber
	<self.splice(aNumber -1, anotherNumber - aNumber + 1)>
!

removeIndex: anInteger
	<self.splice(anInteger - 1, 1)>
! !

!Array methodsFor: 'converting'!

asJavascript
	^'[', ((self collect: [:each | each asJavascript]) join: ', '), ']'
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
			if(aBlock._value_value_(a,b)) {return -1} else {return 1}
		})
	>
!

sorted
	^self copy sort
!

sorted: aBlock
	^self copy sort: aBlock
! !

!Array methodsFor: 'printing'!

printOn: aStream
	super printOn: aStream.
	
	aStream nextPutAll: ' ('.
	self 
		do: [ :each | each printOn: aStream ]
		separatedBy: [ aStream nextPutAll: ' ' ].
	aStream nextPutAll: ')'
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
	| instance index |
	index := 1.
	instance := self new: aCollection size.
	aCollection do: [:each |
		instance at: index put: each.
		index := index + 1].
	^instance
! !

SequenceableCollection subclass: #CharacterArray
	instanceVariableNames: ''
	package: 'Kernel-Collections'!
!CharacterArray commentStamp!
I am the abstract superclass of string-like collections.!

!CharacterArray methodsFor: 'accessing'!

at: anIndex put: anObject
	self errorReadOnly
! !

!CharacterArray methodsFor: 'adding/removing'!

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
	^self asString
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

printOn: aStream
	self asString printOn: aStream
! !

!CharacterArray methodsFor: 'streaming'!

putOn: aStream
	aStream nextPutString: self
! !

!CharacterArray class methodsFor: 'instance creation'!

fromString: aString
	self subclassResponsibility
! !

CharacterArray subclass: #String
	instanceVariableNames: ''
	package: 'Kernel-Collections'!
!String commentStamp!
I am an indexed collection of Characters. Unlike most Smalltalk dialects, Amber doesn't provide the Character class. Instead, elements of a String are single character strings.

String inherits many useful methods from its hierarchy, such as
	`Collection >> #,`!

!String methodsFor: 'accessing'!

asciiValue
	<return self.charCodeAt(0);>
!

at: anIndex ifAbsent: aBlock
	<return String(self).charAt(anIndex - 1) || aBlock._value()>
!

at: anIndex ifPresent: aBlock ifAbsent: anotherBlock
	<
		var result = String(self).charAt(anIndex - 1);
		return result ? aBlock._value_(result) : anotherBlock._value();
	>
!

charCodeAt: anInteger
	< return self.charCodeAt(anInteger - 1) >
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
	<
		if(typeof aString === 'undefined') { return false }
		if(!!aString._isString || !! aString._isString()) {
			return false;
		}
		return String(self) === String(aString)
	>
!

== aString
	^self = aString
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

asJavascript
	<
		if(self.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)
			return "\"" + self.replace(/[\x00-\x1f"\\\x7f-\x9f]/g, function(ch){var c=ch.charCodeAt(0);return "\\x"+("0"+c.toString(16)).slice(-2)}) + "\"";
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

asRegexp
	^ RegularExpression fromString: self
!

asSelector
	<return smalltalk.selector(self)>
!

asString
	^self
!

asSymbol
	^ self
!

asUppercase
	<return self.toUpperCase()>
!

crlfSanitized
	^self lines join: String lf
!

reversed
	<return self.split("").reverse().join("")>
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

!String methodsFor: 'enumerating'!

do: aBlock
	<for(var i=0;i<self.length;i++){aBlock._value_(self.charAt(i));}>
!

withIndexDo: aBlock
	<for(var i=0;i<self.length;i++){aBlock._value_value_(self.charAt(i), i+1);}>
! !

!String methodsFor: 'printing'!

printNl
	<console.log(self)>
!

printOn: aStream
	aStream 
		nextPutAll: '''';
		nextPutAll: self;
		nextPutAll: ''''
! !

!String methodsFor: 'regular expressions'!

match: aRegexp
	<return self.search(aRegexp) !!= -1>
!

matchesOf: aRegularExpression
	<return self.match(aRegularExpression)>
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
!

subStrings: aString
	^ self tokenize: aString
!

tokenize: aString
	<return self.split(aString)>
! !

!String methodsFor: 'testing'!

includesSubString: subString
	< return self.indexOf(subString) !!= -1 >
!

isImmutable
	^ true
!

isString
	^true
!

isVowel
	"Answer true if the receiver is a one character string containing a voyel"
	
	^ self size = 1 and: [ 'aeiou' includes: self asLowercase ]
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

fromCharCode: anInteger
	<return String.fromCharCode(anInteger)>
!

fromString: aString
		<return String(aString)>
!

value: aUTFCharCode

	<return String.fromCharCode(aUTFCharCode);>
! !

!String class methodsFor: 'random'!

random
	"Returns random alphanumeric string beginning with letter"
	<return (Math.random()*(22/32)+(10/32)).toString(32).slice(2);>
!

randomNotIn: aString
	| result |
    [ result := self random. aString includesSubString: result ] whileTrue.
    ^result
! !

Collection subclass: #Set
	instanceVariableNames: 'elements'
	package: 'Kernel-Collections'!
!Set commentStamp!
I represent an unordered set of objects without duplicates.!

!Set methodsFor: 'accessing'!

size
	^elements size
! !

!Set methodsFor: 'adding/removing'!

add: anObject
	<
		var found;
		for(var i=0; i < self['@elements'].length; i++) {
			if(_st(anObject).__eq(self['@elements'][i])) {
				found = true;
				break;
			}
		}
		if(!!found) {self['@elements'].push(anObject)}
	>
!

remove: anObject
	elements remove: anObject
!

remove: anObject ifAbsent: aBlock
	elements remove: anObject ifAbsent: aBlock
! !

!Set methodsFor: 'comparing'!

= aCollection
	self class = aCollection class ifFalse: [ ^ false ].
	self size = aCollection size ifFalse: [ ^ false ].
	self do: [:each | (aCollection includes: each) ifFalse: [ ^ false ] ].
	^ true
! !

!Set methodsFor: 'converting'!

asArray
	^elements copy
! !

!Set methodsFor: 'enumerating'!

collect: aBlock
	^self class withAll: (elements collect: aBlock)
!

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

!Set methodsFor: 'printing'!

printOn: aStream
	super printOn: aStream.
	
	aStream nextPutAll: ' ('.
	self 
		do: [ :each | each printOn: aStream ]
		separatedBy: [ aStream nextPutAll: ' ' ].
	aStream nextPutAll: ')'
! !

!Set methodsFor: 'testing'!

includes: anObject
	^elements includes: anObject
! !

Object subclass: #Queue
	instanceVariableNames: 'read readIndex write'
	package: 'Kernel-Collections'!
!Queue commentStamp!
I am a one-sided queue.

## Usage

Use `#nextPut:` to add items to the queue.
Use `#next` or `#nextIfAbsent:` to get (and remove) the next item in the queue.

## Implementation notes

A Queue uses two OrderedCollections inside,
`read` is at the front, is not modified and only read using `readIndex`.
`write` is at the back and is appended new items.
When `read` is exhausted, `write` is promoted to `read` and new `write` is created.

As a consequence, no data moving is done by me, write appending may do data moving
when growing `write`, but this is left to engine to implement as good as it chooses to.!

!Queue methodsFor: 'accessing'!

next
	^self nextIfAbsent: [ self error: 'Cannot read from empty Queue.' ]
!

nextIfAbsent: aBlock
	| result |
	result := read at: readIndex ifAbsent: [
		write isEmpty ifTrue: [
			readIndex > 1 ifTrue: [ read := #(). readIndex := 1 ].
			^aBlock value ].
		read := write.
		readIndex := 1.
		write := OrderedCollection new.
		read first ].
	read at: readIndex put: nil.
	readIndex := readIndex + 1.
	^result
!

nextPut: anObject
	write add: anObject
! !

!Queue methodsFor: 'initialization'!

initialize
	super initialize.
	read := OrderedCollection new.
	write := OrderedCollection new.
	readIndex := 1
! !

Object subclass: #RegularExpression
	instanceVariableNames: ''
	package: 'Kernel-Collections'!
!RegularExpression commentStamp!
I represent a regular expression object. My instances are JavaScript `RegExp` object.!

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
!Stream commentStamp!
I represent an accessor for a sequence of objects. This sequence is referred to as my "contents".
My instances are read/write streams to the contents sequence collection.!

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

<< anObject
	self write: anObject
!

nextPut: anObject
	self position: self position + 1.
	self collection at: self position put: anObject.
	self setStreamSize: (self streamSize max: self position)
!

nextPutAll: aCollection
	aCollection do: [:each |
		self nextPut: each]
!

nextPutString: aString
	self nextPut: aString
!

write: anObject
	anObject putOn: self
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
!StringStream commentStamp!
I am a Stream specific to `String` objects.!

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
	| pre post |
	self atEnd ifTrue: [ self setCollection: self collection, aString ] ifFalse: [
		pre := self collection copyFrom: 1 to: self position.
		post := self collection copyFrom: (self position + 1 + aString size) to: self collection size.
		self setCollection: pre, aString, post
	].
	self position: self position + aString size.
	self setStreamSize: (self streamSize max: self position)
!

nextPutString: aString
	self nextPutAll: aString
!

space
	self nextPut: ' '
!

tab
	^self nextPutAll: String tab
! !

