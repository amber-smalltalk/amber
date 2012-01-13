Smalltalk current createPackage: 'Kernel-Classes' properties: #{}!
Object subclass: #Behavior
	instanceVariableNames: ''
	category: 'Kernel-Classes'!

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
	<var dict = smalltalk.HashedCollection._new();
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
	methodsByCategory := HashedCollection new.
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
	category: 'Kernel-Classes'!

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
	self deprecatedAPI.
	^self subclass: aString instanceVariableNames: aString2 package: aString3
!

subclass: aString instanceVariableNames: aString2 classVariableNames: classVars poolDictionaries: pools category: aString3
	"Just ignore class variables and pools. Added for compatibility."
	^self subclass: aString instanceVariableNames: aString2 package: aString3
!

subclass: aString instanceVariableNames: aString2 package: aString3
	^ClassBuilder new
	    superclass: self subclass: aString asString instanceVariableNames: aString2 package: aString3
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
	category: 'Kernel-Classes'!

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

Object subclass: #ClassBuilder
	instanceVariableNames: ''
	category: 'Kernel-Classes'!

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
!

copyClass: aClass named: aString
	| newClass |

	newClass := self 
		addSubclassOf: aClass superclass
		named: aString 
		instanceVariableNames: aClass instanceVariableNames 
		package: aClass package name.

	self setupClass: newClass.

	aClass methodDictionary values do: [:each |
		newClass addCompiledMethod: (Compiler new load: each source forClass: newClass).
		(newClass methodDictionary at: each selector) category: each category].

	aClass class methodDictionary values do: [:each |
		newClass class addCompiledMethod: (Compiler new load: each source forClass: newClass class).
		(newClass class methodDictionary at: each selector) category: each category].

	self setupClass: newClass.
	^newClass
! !

Object subclass: #ClassCategoryReader
	instanceVariableNames: 'class category chunkParser'
	category: 'Kernel-Classes'!

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

Object subclass: #ClassCommentReader
	instanceVariableNames: 'class chunkParser'
	category: 'Kernel-Classes'!

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

