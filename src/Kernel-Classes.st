Smalltalk createPackage: 'Kernel-Classes'!
Object subclass: #Behavior
	instanceVariableNames: ''
	package: 'Kernel-Classes'!
!Behavior commentStamp!
I am the superclass of all class objects.

I define the protocol for creating instances of a class with `#basicNew` and `#new` (see `boot.js` for class constructors details).

My instances know about the subclass/superclass relationships between classes, contain the description that instances are created from,
and hold the method dictionary that's associated with each class.

I also provides methods for compiling methods, examining the method dictionary, and iterating over the class hierarchy.!

!Behavior methodsFor: 'accessing'!

>> aString
	^ self methodAt: aString
!

allInstanceVariableNames
	| result |
	result := self instanceVariableNames copy.
	self superclass ifNotNil: [
		result addAll: self superclass allInstanceVariableNames ].
	^ result
!

allSelectors
	^ self allSuperclasses
		inject: self selectors
		into: [ :acc :each | acc addAll: each selectors; yourself ]
!

allSubclasses
	"Answer an collection of the receiver's and the receiver's descendent's subclasses. "

	| subclasses index |
	
	subclasses := self subclasses.
	index := 1.
	[ index > subclasses size ]
		whileFalse: [ subclasses addAll: (subclasses at: index) subclasses.
			index := index + 1 ].

	^ subclasses
!

allSuperclasses
	
	self superclass ifNil: [ ^ #() ].
	
	^ (OrderedCollection with: self superclass)
		addAll: self superclass allSuperclasses;
		yourself
!

comment
	^ (self basicAt: 'comment') ifNil: [ '' ]
!

comment: aString
	self basicAt: 'comment' put: aString.
	SystemAnnouncer current
		announce: (ClassCommentChanged new
			theClass: self;
			yourself)
!

commentStamp
	^ ClassCommentReader new
	class: self;
	yourself
!

commentStamp: aStamp prior: prior
		^ self commentStamp
!

definition
	^ ''
!

instanceVariableNames
	<return self.iVarNames>
!

javascriptConstructor
	"Answer the JS constructor used to instantiate. See boot.js"
	
	<return self.fn>
!

javascriptConstructor: aJavaScriptFunction
	"Set the JS constructor used to instantiate.
	See the JS counter-part in boot.js `smalltalk.setClassConstructor'"
	
	<smalltalk.setClassConstructor(self, aJavaScriptFunction);>
!

lookupSelector: selector
	"Look up the given selector in my methodDictionary.
	Return the corresponding method if found.
	Otherwise chase the superclass chain and try again.
	Return nil if no method is found."
	
	| lookupClass |
	
	lookupClass := self.
	[ lookupClass = nil ] whileFalse: [
		(lookupClass includesSelector: selector)
				ifTrue: [ ^ lookupClass methodAt: selector ].
			lookupClass := lookupClass superclass ].
	^ nil
!

methodAt: aString
	^ self methodDictionary at: aString
!

methodDictionary
	<var dict = globals.HashedCollection._new();
	var methods = self.methods;
	Object.keys(methods).forEach(function(i) {
		if(methods[i].selector) {
			dict._at_put_(methods[i].selector, methods[i]);
		}
	});
	return dict>
!

methodTemplate
	^ String streamContents: [ :stream |
		stream 
			nextPutAll: 'messageSelectorAndArgumentNames';
			nextPutAll: String lf, String tab;
			nextPutAll: '"comment stating purpose of message"';
			nextPutAll: String lf, String lf, String tab;
			nextPutAll: '| temporary variable names |';
			nextPutAll: String lf, String tab;
			nextPutAll: 'statements' ]
!

methods
	^ self methodDictionary values
!

methodsFor: aString
	^ ClassCategoryReader new
		class: self category: aString;
		yourself
!

methodsFor: aString stamp: aStamp
	"Added for compatibility, right now ignores stamp."
	^ self methodsFor: aString
!

methodsInProtocol: aString
	^ self methods select: [ :each | each protocol = aString ]
!

name
	<return self.className || nil>
!

organization
	^ self basicAt: 'organization'
!

ownMethods
	"Answer the methods of the receiver that are not package extensions"

	^ (self ownProtocols 
		inject: OrderedCollection new
		into: [ :acc :each | acc, (self methodsInProtocol: each) ])
			sorted: [ :a :b | a selector <= b selector ]
!

ownProtocols
	"Answer the protocols of the receiver that are not package extensions"

	^ self protocols reject: [ :each |
		each match: '^\*' ]
!

protocols
	^ self organization elements sorted
!

prototype
	<return self.fn.prototype>
!

removeProtocolIfEmpty: aString
	self methods
		detect: [ :each | each protocol = aString ]
		ifNone: [ self organization removeElement: aString ]
!

selectors
	^ self methodDictionary keys
!

subclasses
	self subclassResponsibility
!

superclass
	<return self.superclass || nil>
!

theMetaClass
	^ self class
!

theNonMetaClass
	^ self
!

withAllSubclasses
	^ (Array with: self) addAll: self allSubclasses; yourself
! !

!Behavior methodsFor: 'compiling'!

addCompiledMethod: aMethod
	| oldMethod announcement |
	
	oldMethod := self methodDictionary
		at: aMethod selector
		ifAbsent: [ nil ].
	
	(self protocols includes: aMethod protocol)
		ifFalse: [ self organization addElement: aMethod protocol ].

	self basicAddCompiledMethod: aMethod.
	
	oldMethod ifNotNil: [
		self removeProtocolIfEmpty: oldMethod protocol ].
	
	announcement := oldMethod
		ifNil: [
			MethodAdded new
					method: aMethod;
					yourself ]
		ifNotNil: [
			MethodModified new
					oldMethod: oldMethod;
					method: aMethod;
					yourself ].
					
					
	SystemAnnouncer current
				announce: announcement
!

compile: aString
	^ self compile: aString protocol: ''
!

compile: aString protocol: anotherString
	^ Compiler new
		install: aString
		forClass: self
		protocol: anotherString
!

recompile
	^ Compiler new recompile: self
!

removeCompiledMethod: aMethod
	self basicRemoveCompiledMethod: aMethod.
	
	self removeProtocolIfEmpty: aMethod protocol.
	
	SystemAnnouncer current
		announce: (MethodRemoved new
			method: aMethod;
			yourself)
! !

!Behavior methodsFor: 'enumerating'!

allSubclassesDo: aBlock
	"Evaluate the argument, aBlock, for each of the receiver's subclasses."

	self allSubclasses do: [ :each |
    	aBlock value: each ]
!

protocolsDo: aBlock
	"Execute aBlock for each method protocol with
	its collection of methods in the sort order of protocol name."

	| methodsByProtocol |
	methodsByProtocol := HashedCollection new.
	self methodDictionary valuesDo: [ :m |
		(methodsByProtocol at: m protocol ifAbsentPut: [ Array new ])
			add: m ].
	self protocols do: [ :protocol |
		aBlock value: protocol value: (methodsByProtocol at: protocol) ]
! !

!Behavior methodsFor: 'instance creation'!

basicNew
	<return new self.fn()>
!

new
	^ self basicNew initialize
! !

!Behavior methodsFor: 'private'!

basicAddCompiledMethod: aMethod
	<smalltalk.addMethod(aMethod, self)>
!

basicRemoveCompiledMethod: aMethod
	<smalltalk.removeMethod(aMethod,self)>
! !

!Behavior methodsFor: 'testing'!

canUnderstand: aSelector
	^ (self includesSelector: aSelector asString) or: [
		self superclass notNil and: [ self superclass canUnderstand: aSelector ]]
!

includesBehavior: aClass
	^ self == aClass or: [
			self inheritsFrom: aClass ]
!

includesSelector: aString
	^ self methodDictionary includesKey: aString
!

inheritsFrom: aClass
	self superclass ifNil: [ ^ false ].

	^ aClass == self superclass or: [ 
		self superclass inheritsFrom: aClass ]
!

isBehavior
	^ true
! !

Behavior subclass: #Class
	instanceVariableNames: ''
	package: 'Kernel-Classes'!
!Class commentStamp!
I am __the__ class object.

My instances are the classes of the system.
Class creation is done throught a `ClassBuilder` instance.!

!Class methodsFor: 'accessing'!

category
	^ self package ifNil: [ 'Unclassified' ] ifNotNil: [ self package name ]
!

definition
	^ String streamContents: [ :stream |
		stream
			nextPutAll: self superclass asString;
			nextPutAll: ' subclass: #';
			nextPutAll: self name;
			nextPutAll: String lf, String tab;
			nextPutAll: 'instanceVariableNames: '''.
		self instanceVariableNames
			do: [ :each | stream nextPutAll: each ]
			separatedBy: [ stream nextPutAll: ' ' ].
		stream
			nextPutAll: '''', String lf, String tab;
			nextPutAll: 'package: ''';
			nextPutAll: self category;
			nextPutAll: '''' ]
!

package
	^ self basicAt: 'pkg'
!

package: aPackage
	| oldPackage |
	
	self package = aPackage ifTrue: [ ^ self ].
	
	oldPackage := self package.
	
	self basicAt: 'pkg' put: aPackage.
	oldPackage organization removeElement: self.
	aPackage organization addElement: self.

	SystemAnnouncer current announce: (ClassMoved new
		theClass: self;
		oldPackage: oldPackage;
		yourself)
!

rename: aString
	ClassBuilder new renameClass: self to: aString
!

subclasses
	<return self.subclasses._copy()>
! !

!Class methodsFor: 'browsing'!

browse
	Finder findClass: self
! !

!Class methodsFor: 'class creation'!

subclass: aString instanceVariableNames: anotherString
	"Kept for compatibility."
	^ self subclass: aString instanceVariableNames: anotherString package: nil
!

subclass: aString instanceVariableNames: aString2 category: aString3
	"Kept for compatibility."
	self deprecatedAPI.
	^ self subclass: aString instanceVariableNames: aString2 package: aString3
!

subclass: aString instanceVariableNames: aString2 classVariableNames: classVars poolDictionaries: pools category: aString3
	"Just ignore class variables and pools. Added for compatibility."
	^ self subclass: aString instanceVariableNames: aString2 package: aString3
!

subclass: aString instanceVariableNames: aString2 package: aString3
	^ ClassBuilder new
		superclass: self subclass: aString asString instanceVariableNames: aString2 package: aString3
! !

!Class methodsFor: 'converting'!

asJavascript
	^ 'globals.', self name
! !

!Class methodsFor: 'printing'!

printOn: aStream
	aStream nextPutAll: self name
! !

!Class methodsFor: 'testing'!

isClass
	^ true
! !

Behavior subclass: #Metaclass
	instanceVariableNames: ''
	package: 'Kernel-Classes'!
!Metaclass commentStamp!
I am the root of the class hierarchy.

My instances are metaclasses, one for each real class, and have a single instance, which they hold onto: the class that they are the metaclass of.!

!Metaclass methodsFor: 'accessing'!

definition
	^ String streamContents: [ :stream |
		stream
			nextPutAll: self asString;
			nextPutAll: ' instanceVariableNames: '''.
		self instanceVariableNames
			do: [ :each | stream nextPutAll: each ]
			separatedBy: [ stream nextPutAll: ' ' ].
		stream nextPutAll: '''' ]
!

instanceClass
	<return self.instanceClass>
!

instanceVariableNames: aCollection
	ClassBuilder new
		class: self instanceVariableNames: aCollection
!

package
	^ self instanceClass package
!

subclasses
	^ (self instanceClass subclasses 
		select: [ :each | each isMetaclass not ])
		collect: [ :each | each theMetaClass ]
!

theMetaClass
	^ self
!

theNonMetaClass
	^ self instanceClass
! !

!Metaclass methodsFor: 'converting'!

asJavascript
	^ 'globals.', self instanceClass name, '.klass'
! !

!Metaclass methodsFor: 'printing'!

printOn: aStream
	aStream
		nextPutAll: self instanceClass name;
		nextPutAll: ' class'
! !

!Metaclass methodsFor: 'testing'!

isMetaclass
	^ true
! !

Object subclass: #ClassBuilder
	instanceVariableNames: ''
	package: 'Kernel-Classes'!
!ClassBuilder commentStamp!
I am responsible for compiling new classes or modifying existing classes in the system.

Rather than using me directly to compile a class, use `Class >> subclass:instanceVariableNames:package:`.!

!ClassBuilder methodsFor: 'accessing'!

instanceVariableNamesFor: aString
	^ (aString tokenize: ' ') reject: [ :each | each isEmpty ]
! !

!ClassBuilder methodsFor: 'class definition'!

addSubclassOf: aClass named: className instanceVariableNames: aCollection package: packageName
	| theClass thePackage |
	
	theClass := Smalltalk globals at: className.
	thePackage := Package named: packageName.
	
	theClass ifNotNil: [
		theClass package: thePackage.
		theClass superclass == aClass ifFalse: [
			^ self
				migrateClassNamed: className
				superclass: aClass
				instanceVariableNames: aCollection
				package: packageName ] ].
		
	^ self
		basicAddSubclassOf: aClass
		named: className
		instanceVariableNames: aCollection
		package: packageName
!

class: aClass instanceVariableNames: ivarNames
	self basicClass: aClass instanceVariableNames: ivarNames.
	self setupClass: aClass.
	
	SystemAnnouncer current
		announce: (ClassDefinitionChanged new
			theClass: aClass;
			yourself)
!

superclass: aClass subclass: className
	^ self superclass: aClass subclass: className instanceVariableNames: '' package: nil
!

superclass: aClass subclass: className instanceVariableNames: ivarNames package: packageName
	| newClass |
	
	newClass := self addSubclassOf: aClass
		named: className instanceVariableNames: (self instanceVariableNamesFor: ivarNames)
		package: (packageName ifNil: [ 'unclassified' ]).
	self setupClass: newClass.
	
	SystemAnnouncer current
		announce: (ClassAdded new
			theClass: newClass;
			yourself).
	
	^ newClass
! !

!ClassBuilder methodsFor: 'class migration'!

migrateClass: aClass superclass: anotherClass
	^ self
		migrateClassNamed: aClass name
		superclass: anotherClass
		instanceVariableNames: aClass instanceVariableNames
		package: aClass package name
!

migrateClassNamed: className superclass: aClass instanceVariableNames: aCollection package: packageName
	| oldClass newClass tmp |
	
	tmp := 'new*', className.
	oldClass := Smalltalk globals at: className.
	
	newClass := self
		addSubclassOf: aClass
		named: tmp
		instanceVariableNames: aCollection
		package: packageName.

	self basicSwapClassNames: oldClass with: newClass.

	[ self copyClass: oldClass to: newClass ]
		on: Error
		do: [ :exception |
			self
				basicSwapClassNames: oldClass with: newClass;
				basicRemoveClass: newClass.
			exception signal ].

	self
		rawRenameClass: oldClass to: tmp;
		rawRenameClass: newClass to: className.

	oldClass subclasses 
		do: [ :each | self migrateClass: each superclass: newClass ]
		displayingProgress: 'Recompiling ', newClass name, '...'.

	self basicRemoveClass: oldClass.
	
	SystemAnnouncer current announce: (ClassMigrated new
		theClass: newClass;
		oldClass: oldClass;
		yourself).
	
	^ newClass
!

renameClass: aClass to: className
	self basicRenameClass: aClass to: className.
	
	"Recompile the class to fix potential issues with super sends"
	aClass recompile.
	
	SystemAnnouncer current
		announce: (ClassRenamed new
			theClass: aClass;
			yourself)
! !

!ClassBuilder methodsFor: 'copying'!

copyClass: aClass named: className
	| newClass |

	newClass := self
		addSubclassOf: aClass superclass
		named: className
		instanceVariableNames: aClass instanceVariableNames
		package: aClass package name.

	self copyClass: aClass to: newClass.
	
	SystemAnnouncer current
		announce: (ClassAdded new
			theClass: newClass;
			yourself).
	
	^ newClass
!

copyClass: aClass to: anotherClass

	anotherClass comment: aClass comment.

	aClass methodDictionary valuesDo: [ :each |
		Compiler new install: each source forClass: anotherClass protocol: each protocol ].

	self basicClass: anotherClass class instanceVariables: aClass class instanceVariableNames.

	aClass class methodDictionary valuesDo: [ :each |
		Compiler new install: each source forClass: anotherClass class protocol: each protocol ].

	self setupClass: anotherClass
! !

!ClassBuilder methodsFor: 'method definition'!

installMethod: aCompiledMethod forClass: aBehavior protocol: aString
	aCompiledMethod protocol: aString.
	aBehavior addCompiledMethod: aCompiledMethod.
	self setupClass: aBehavior.
	^ aCompiledMethod
! !

!ClassBuilder methodsFor: 'private'!

basicAddSubclassOf: aClass named: aString instanceVariableNames: aCollection package: packageName
	<
		smalltalk.addClass(aString, aClass, aCollection, packageName);
		return globals[aString]
	>
!

basicClass: aClass instanceVariableNames: aString
	self basicClass: aClass instanceVariables: (self instanceVariableNamesFor: aString)
!

basicClass: aClass instanceVariables: aCollection

	aClass isMetaclass ifFalse: [ self error: aClass name, ' is not a metaclass' ].
	aClass basicAt: 'iVarNames' put: aCollection
!

basicRemoveClass: aClass
	<smalltalk.removeClass(aClass)>
!

basicRenameClass: aClass to: aString
	<
		globals[aString] = aClass;
		delete globals[aClass.className];
		aClass.className = aString;
	>
!

basicSwapClassNames: aClass with: anotherClass
	<
		var tmp = aClass.className;
		aClass.className = anotherClass.className;
		anotherClass.className = tmp;
	>
!

rawRenameClass: aClass to: aString
	<
		globals[aString] = aClass;
	>
! !

!ClassBuilder methodsFor: 'public'!

setupClass: aClass
	<smalltalk.init(aClass);>
! !

Object subclass: #ClassCategoryReader
	instanceVariableNames: 'class category'
	package: 'Kernel-Classes'!
!ClassCategoryReader commentStamp!
I provide a mechanism for retrieving class descriptions stored on a file in the Smalltalk chunk format.!

!ClassCategoryReader methodsFor: 'accessing'!

class: aClass category: aString
	class := aClass.
	category := aString
! !

!ClassCategoryReader methodsFor: 'fileIn'!

scanFrom: aChunkParser
	| chunk |
	[ chunk := aChunkParser nextChunk.
	chunk isEmpty ] whileFalse: [
		self compileMethod: chunk ].
	ClassBuilder new setupClass: class
! !

!ClassCategoryReader methodsFor: 'initialization'!

initialize
	super initialize.
! !

!ClassCategoryReader methodsFor: 'private'!

compileMethod: aString
	Compiler new install: aString forClass: class protocol: category
! !

Object subclass: #ClassCommentReader
	instanceVariableNames: 'class'
	package: 'Kernel-Classes'!
!ClassCommentReader commentStamp!
I provide a mechanism for retrieving class comments stored on a file.

See also `ClassCategoryReader`.!

!ClassCommentReader methodsFor: 'accessing'!

class: aClass
	class := aClass
! !

!ClassCommentReader methodsFor: 'fileIn'!

scanFrom: aChunkParser
	| chunk |
	chunk := aChunkParser nextChunk.
	chunk isEmpty ifFalse: [
		self setComment: chunk ].
! !

!ClassCommentReader methodsFor: 'initialization'!

initialize
	super initialize.
! !

!ClassCommentReader methodsFor: 'private'!

setComment: aString
	class comment: aString
! !

Object subclass: #ClassSorterNode
	instanceVariableNames: 'theClass level nodes'
	package: 'Kernel-Classes'!
!ClassSorterNode commentStamp!
I provide an algorithm for sorting classes alphabetically.

See [Issue #143](https://github.com/amber-smalltalk/amber/issues/143) on GitHub.!

!ClassSorterNode methodsFor: 'accessing'!

getNodesFrom: aCollection
	| children others |
	children := #().
	others := #().
	aCollection do: [ :each |
		(each superclass = self theClass)
			ifTrue: [ children add: each ]
			ifFalse: [ others add: each ]].
	nodes:= children collect: [ :each |
		ClassSorterNode on: each classes: others level: self level + 1 ]
!

level
	^ level
!

level: anInteger
	level := anInteger
!

nodes
	^ nodes
!

theClass
	^ theClass
!

theClass: aClass
	theClass := aClass
! !

!ClassSorterNode methodsFor: 'visiting'!

traverseClassesWith: aCollection
	"sort classes alphabetically Issue #143"

	aCollection add: self theClass.
	(self nodes sorted: [ :a :b | a theClass name <= b theClass name ]) do: [ :aNode |
		aNode traverseClassesWith: aCollection ].
! !

!ClassSorterNode class methodsFor: 'instance creation'!

on: aClass classes: aCollection level: anInteger
	^ self new
		theClass: aClass;
		level: anInteger;
		getNodesFrom: aCollection;
		yourself
! !

