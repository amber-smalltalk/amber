Smalltalk createPackage: 'Kernel-Infrastructure'!
ProtoObject subclass: #JSObjectProxy
	instanceVariableNames: 'jsObject'
	package: 'Kernel-Infrastructure'!
!JSObjectProxy commentStamp!
I handle sending messages to JavaScript objects, making  JavaScript object accessing from Amber fully transparent.
My instances make intensive use of `#doesNotUnderstand:`.

My instances are automatically created by Amber whenever a message is sent to a JavaScript object.

## Usage examples

JSObjectProxy objects are instanciated by Amber when a Smalltalk message is sent to a JavaScript object.

	window alert: 'hello world'.
	window inspect.
	(window jQuery: 'body') append: 'hello world'

Amber messages sends are converted to JavaScript function calls or object property access _(in this order)_. If n one of them match, a `MessageNotUnderstood` error will be thrown.

## Message conversion rules

- `someUser name` becomes `someUser.name`
- `someUser name: 'John'` becomes `someUser name = "John"`
- `console log: 'hello world'` becomes `console.log('hello world')`
- `(window jQuery: 'foo') css: 'background' color: 'red'` becomes `window.jQuery('foo').css('background', 'red')`

__Note:__ For keyword-based messages, only the first keyword is kept: `window foo: 1 bar: 2` is equivalent to `window foo: 1 baz: 2`.!

!JSObjectProxy methodsFor: 'accessing'!

at: aString
	<return self['@jsObject'][aString]>
!

at: aString ifAbsent: aBlock
	"return the aString property or evaluate aBlock if the property is not defined on the object"
	<
		var obj = self['@jsObject'];
		return aString in obj ? obj[aString] : aBlock._value();
	>
!

at: aString ifPresent: aBlock
	"return the evaluation of aBlock with the value if the property is defined or return nil"
	<
		var obj = self['@jsObject'];
		return aString in obj ? aBlock._value_(obj[aString]) : nil;
	>
!

at: aString ifPresent: aBlock ifAbsent: anotherBlock
	"return the evaluation of aBlock with the value if the property is defined
	or return value of anotherBlock"
	<
		var obj = self['@jsObject'];
		return aString in obj ? aBlock._value_(obj[aString]) : anotherBlock._value();
	>
!

at: aString put: anObject
	<return self['@jsObject'][aString] = anObject>
!

in: aValuable
	^ aValuable value: jsObject
!

jsObject
	^ jsObject
! !

!JSObjectProxy methodsFor: 'comparing'!

= anObject
	anObject class == self class ifFalse: [ ^ false ].
	^ JSObjectProxy compareJSObjectOfProxy: self withProxy: anObject
! !

!JSObjectProxy methodsFor: 'enumerating'!

asJSON
	"Answers the receiver in a stringyfy-friendly fashion"

	^ jsObject
!

keysAndValuesDo: aBlock
	<
		var o = self['@jsObject'];
		for(var i in o) {
			aBlock._value_value_(i, o[i]);
		}
	>
! !

!JSObjectProxy methodsFor: 'printing'!

printOn: aStream
	aStream nextPutAll: self printString
!

printString
	<
		var js = self['@jsObject'];
		return js.toString
			? js.toString()
			: Object.prototype.toString.call(js)
	>
! !

!JSObjectProxy methodsFor: 'proxy'!

doesNotUnderstand: aMessage
	^ (JSObjectProxy lookupProperty: aMessage selector asJavaScriptPropertyName ofProxy: self)
		ifNil: [ super doesNotUnderstand: aMessage ]
		ifNotNil: [ :jsSelector | 
			JSObjectProxy 
				forwardMessage: jsSelector 
				withArguments: aMessage arguments
				ofProxy: self ]
! !

!JSObjectProxy methodsFor: 'streaming'!

putOn: aStream
	aStream nextPutJSObject: jsObject
! !

!JSObjectProxy class methodsFor: 'instance creation'!

on: aJSObject
	| instance |
	instance := self new.
	self jsObject: aJSObject ofProxy: instance.
	^ instance
! !

!JSObjectProxy class methodsFor: 'proxy'!

addObjectVariablesTo: aDictionary ofProxy: aProxy
	<
		var jsObject = aProxy['@jsObject'];
		for(var i in jsObject) {
			aDictionary._at_put_(i, jsObject[i]);
		}
	>
!

compareJSObjectOfProxy: aProxy withProxy: anotherProxy
<
	var anotherJSObject = anotherProxy.klass ? anotherProxy["@jsObject"] : anotherProxy;
	return aProxy["@jsObject"] === anotherJSObject
>
!

forwardMessage: aString withArguments: anArray ofProxy: aProxy
	<
		return $core.accessJavaScript(aProxy._jsObject(), aString, anArray);
	>
!

jsObject: aJSObject ofProxy: aProxy
	<aProxy['@jsObject'] = aJSObject>
!

lookupProperty: aString ofProxy: aProxy
	"Looks up a property in JS object.
	Answer the property if it is present, or nil if it is not present."
	
	<return aString in aProxy._jsObject() ? aString : nil>
! !

Object subclass: #Organizer
	instanceVariableNames: ''
	package: 'Kernel-Infrastructure'!
!Organizer commentStamp!
I represent categorization information. 

## API

Use `#addElement:` and `#removeElement:` to manipulate instances.!

!Organizer methodsFor: 'accessing'!

addElement: anObject
	<self.elements.addElement(anObject)>
!

elements
	^ (self basicAt: 'elements') copy
!

removeElement: anObject
	<self.elements.removeElement(anObject)>
! !

Organizer subclass: #ClassOrganizer
	instanceVariableNames: ''
	package: 'Kernel-Infrastructure'!
!ClassOrganizer commentStamp!
I am an organizer specific to classes. I hold method categorization information for classes.!

!ClassOrganizer methodsFor: 'accessing'!

addElement: aString
	super addElement: aString.

	SystemAnnouncer current announce: (ProtocolAdded new
		protocol: aString;
		theClass: self theClass;
		yourself)
!

removeElement: aString
	super removeElement: aString.

	SystemAnnouncer current announce: (ProtocolRemoved new
		protocol: aString;
		theClass: self theClass;
		yourself)
!

theClass
	< return self.theClass >
! !

Organizer subclass: #PackageOrganizer
	instanceVariableNames: ''
	package: 'Kernel-Infrastructure'!
!PackageOrganizer commentStamp!
I am an organizer specific to packages. I hold classes categorization information.!

Object subclass: #Package
	instanceVariableNames: 'transport imports dirty'
	package: 'Kernel-Infrastructure'!
!Package commentStamp!
I am similar to a "class category" typically found in other Smalltalks like Pharo or Squeak. Amber does not have class categories anymore, it had in the beginning but now each class in the system knows which package it belongs to.

Each package has a name and can be queried for its classes, but it will then resort to a reverse scan of all classes to find them.

## API

Packages are manipulated through "Smalltalk current", like for example finding one based on a name or with `Package class >> #name` directly:

    Smalltalk current packageAt: 'Kernel'
    Package named: 'Kernel'

A package differs slightly from a Monticello package which can span multiple class categories using a naming convention based on hyphenation. But just as in Monticello a package supports "class extensions" so a package can define behaviors in foreign classes using a naming convention for method categories where the category starts with an asterisk and then the name of the owning package follows.

You can fetch a package from the server:

	Package load: 'Additional-Examples'!

!Package methodsFor: 'accessing'!

beClean
	dirty := false.
	
	SystemAnnouncer current announce: (PackageClean new
		package: self;
		yourself)
!

beDirty
	dirty := true.
	
	SystemAnnouncer current announce: (PackageDirty new
		package: self;
		yourself)
!

classTemplate
	^ String streamContents: [ :stream |
		stream
			nextPutAll: 'Object';
			nextPutAll: ' subclass: #NameOfSubclass';
			nextPutAll: String lf, String tab;
			nextPutAll: 'instanceVariableNames: '''''.
		stream
			nextPutAll: '''', String lf, String tab;
			nextPutAll: 'package: ''';
			nextPutAll: self name;
			nextPutAll: '''' ]
!

definition
	^ String streamContents: [ :stream |
		stream 
			nextPutAll: self class name;
			nextPutAll: String lf, String tab;
			nextPutAll: 'named: ';
			nextPutAll: '''', self name, '''';
			nextPutAll: String lf, String tab;
			nextPutAll: 'imports: ';
			nextPutAll: self importsDefinition;
			nextPutAll: String lf, String tab;
			nextPutAll: 'transport: (';
			nextPutAll: self transport definition, ')' ]
!

imports
	^ imports ifNil: [
		| parsed |
		parsed := self importsFromJson: self basicImports.
		self imports: parsed.
		imports ]
!

imports: anArray
	self validateImports: anArray.
	imports := anArray asSet
!

importsDefinition
	^ String streamContents: [ :stream |
		stream nextPutAll: '{'.
		self sortedImportsAsArray
			do: [ :each | stream nextPutAll: each importsString ]
			separatedBy: [ stream nextPutAll: '. ' ].
		stream nextPutAll: '}' ]
!

name
	<return self.pkgName>
!

name: aString
	self basicName: aString.
	self beDirty
!

organization
	^ self basicAt: 'organization'
!

transport
	^ transport ifNil: [ 
		transport := (PackageTransport fromJson: self basicTransport)
			package: self;
			yourself ]
!

transport: aPackageTransport
	transport := aPackageTransport.
	aPackageTransport package: self
! !

!Package methodsFor: 'classes'!

classes
	^ self organization elements
!

setupClasses
	self classes
		do: [ :each | ClassBuilder new setupClass: each ];
		do: [ :each | each initialize ]
!

sortedClasses
	"Answer all classes in the receiver, sorted by superclass/subclasses and by class name for common subclasses (Issue #143)."

	^ self class sortedClasses: self classes
! !

!Package methodsFor: 'converting'!

importsAsJson

	^ self sortedImportsAsArray collect: [ :each |
		each isString
			ifTrue: [ each ]
			ifFalse: [ each key, '=', each value ]]
!

importsFromJson: anArray
	"Parses array of string, eg. #('asdf' 'qwer=tyuo')
	into array of Strings and Associations,
	eg. {'asdf'. 'qwer'->'tyuo'}"

	^ anArray collect: [ :each |
		| split |
		split := each tokenize: '='.
		split size = 1
			ifTrue: [ split first ]
			ifFalse: [ split first -> split second ]]
! !

!Package methodsFor: 'dependencies'!

loadDependencies
	"Returns list of packages that need to be loaded
	before loading this package."
	
	| classes packages |
	classes := self loadDependencyClasses.
	^ (classes collect: [ :each | each package ]) asSet
		remove: self ifAbsent: [];
		yourself
!

loadDependencyClasses
	"Returns classes needed at the time of loading a package.
	These are all that are used to subclass
	and to define an extension method"
	
	| starCategoryName |
	starCategoryName := '*', self name.
	^ (self classes collect: [ :each | each superclass ]) asSet
		remove: nil ifAbsent: [];
		addAll: (Smalltalk classes select: [ :each | each protocols, each class protocols includes: starCategoryName ]);
		yourself
! !

!Package methodsFor: 'printing'!

printOn: aStream
	super printOn: aStream.
	aStream 
		nextPutAll: ' (';
		nextPutAll: self name;
		nextPutAll: ')'
! !

!Package methodsFor: 'private'!

basicImports
	"Answer the imports literal JavaScript object as setup in the JavaScript file, if any"
	
	<return self.imports || []>
!

basicName: aString
	<self.pkgName = aString>
!

basicTransport
	"Answer the transport literal JavaScript object as setup in the JavaScript file, if any"
	
	<return self.transport>
!

sortedImportsAsArray
	"Answer imports sorted first by type (associations first),
	then by value"

	^ self imports asArray
		sorted: [ :a :b |
			a isString not & b isString or: [
				a isString = b isString and: [
					a value <= b value ]]]
! !

!Package methodsFor: 'testing'!

isDirty
	^ dirty ifNil: [ false ]
!

isPackage
	^ true
! !

!Package methodsFor: 'validation'!

validateImports: aCollection

	aCollection do: [ :import |
		import isString ifFalse: [
			(import respondsTo: #key) ifFalse: [
				self error: 'Imports must be Strings or Associations' ].
			import key isString & import value isString ifFalse: [
				self error: 'Key and value must be Strings' ].
			(import key match: '^[a-zA-Z][a-zA-Z0-9]*$') ifFalse: [
				self error: 'Keys must be identifiers' ]]]
! !

Package class instanceVariableNames: 'defaultCommitPathJs defaultCommitPathSt'!

!Package class methodsFor: 'accessing'!

named: aPackageName
	^ Smalltalk 
		packageAt: aPackageName
		ifAbsent: [ 
			Smalltalk createPackage: aPackageName ]
!

named: aPackageName ifAbsent: aBlock
	^ Smalltalk packageAt: aPackageName ifAbsent: aBlock
!

named: aPackageName imports: anArray transport: aTransport
	| package |
	
	package := self named: aPackageName.
	package imports: anArray.
	package transport: aTransport.
	
	^ package
!

named: aPackageName transport: aTransport
	| package |
	
	package := self named: aPackageName.
	package transport: aTransport.
	
	^ package
! !

!Package class methodsFor: 'sorting'!

sortedClasses: classes
	"Answer classes, sorted by superclass/subclasses and by class name for common subclasses (Issue #143)"

	| children others nodes expandedClasses |
	children := #().
	others := #().
	classes do: [ :each |
		(classes includes: each superclass)
			ifFalse: [ children add: each ]
			ifTrue: [ others add: each ]].
	nodes := children collect: [ :each |
		ClassSorterNode on: each classes: others level: 0 ].
	nodes := nodes sorted: [ :a :b | a theClass name <= b theClass name ].
	expandedClasses := Array new.
	nodes do: [ :aNode |
		aNode traverseClassesWith: expandedClasses ].
	^ expandedClasses
! !

Object subclass: #PackageStateObserver
	instanceVariableNames: ''
	package: 'Kernel-Infrastructure'!
!PackageStateObserver commentStamp!
My current instance listens for any changes in the system that might affect the state of a package (being dirty).!

!PackageStateObserver methodsFor: 'accessing'!

announcer
	^ SystemAnnouncer current
! !

!PackageStateObserver methodsFor: 'actions'!

observeSystem
	self announcer
		on: PackageAdded
		send: #onPackageAdded:
		to: self;
		
		on: ClassAnnouncement
		send: #onClassModification:
		to: self;
		
		on: MethodAnnouncement
		send: #onMethodModification:
		to: self;
		
		on: ProtocolAnnouncement
		send: #onProtocolModification:
		to: self
! !

!PackageStateObserver methodsFor: 'reactions'!

onClassModification: anAnnouncement
	anAnnouncement theClass ifNotNil: [ :theClass | theClass package beDirty ]
!

onMethodModification: anAnnouncement
	anAnnouncement method package ifNotNil: [ :package | package beDirty ]
!

onPackageAdded: anAnnouncement
	anAnnouncement package beDirty
!

onProtocolModification: anAnnouncement
	anAnnouncement package ifNotNil: [ :package | package beDirty ]
! !

PackageStateObserver class instanceVariableNames: 'current'!

!PackageStateObserver class methodsFor: 'accessing'!

current
	^ current ifNil: [ current := self new ]
! !

!PackageStateObserver class methodsFor: 'initialization'!

initialize
	self current observeSystem
! !

Object subclass: #Setting
	instanceVariableNames: 'key value defaultValue'
	package: 'Kernel-Infrastructure'!
!Setting commentStamp!
I represent a setting **stored** at `Smalltalk settings`. 
In the current implementation, `Smalltalk settings` is an object persisted in the localStorage.

## API

A `Setting` value can be read using `value` and set using `value:`.

Settings are accessed with `'key' asSetting` or `'key' asSettingIfAbsent: aDefaultValue`.

To read the value of a setting you can also use the convenience:

`theValueSet :=  'any.characteristic' settingValue` 

or with a default using:

 `theEnsuredValueSet := 'any.characteristic' settingValueIfAbsent: true`!

!Setting methodsFor: 'accessing'!

defaultValue
	^ defaultValue
!

defaultValue: aStringifiableObject
	defaultValue := aStringifiableObject
!

key
	^ key
!

key: aString
	key := aString
!

value
	^ Smalltalk settings at: self key ifAbsent: [ self defaultValue ]
!

value: aStringifiableObject
	^ Smalltalk settings at: self key put: aStringifiableObject
! !

!Setting class methodsFor: 'instance creation'!

at: aString ifAbsent: aDefaultValue
	
	^ super new
		key: aString;
		defaultValue: aDefaultValue;
		yourself
!

new
	self shouldNotImplement
! !

Object subclass: #SmalltalkImage
	instanceVariableNames: ''
	package: 'Kernel-Infrastructure'!
!SmalltalkImage commentStamp!
I represent the Smalltalk system, wrapping
operations of variable `$core` declared in `support/boot.js`.

## API

I have only one instance, accessed with global variable `Smalltalk`.

## Classes

Classes can be accessed using the following methods:

- `#classes` answers the full list of Smalltalk classes in the system
- `#globals #at:` answers a specific global (usually, a class) or `nil`

## Packages

Packages can be accessed using the following methods:

- `#packages` answers the full list of packages
- `#packageAt:` answers a specific package or `nil`

## Parsing

The `#parse:` method is used to parse Amber source code.
It requires the `Compiler` package and the `support/parser.js` parser file in order to work.!

!SmalltalkImage methodsFor: 'accessing'!

cancelOptOut: anObject
	"A Smalltalk object has a 'klass' property.
	If this property is shadowed for anObject by optOut:,
	the object is treated as plain JS object.
	This removes the shadow and anObject is Smalltalk object
	again if it was before."
	
	<delete anObject.klass>
!

core
	<return $core>
!

globals
	<return $globals>
!

includesKey: aKey
	<return $core.hasOwnProperty(aKey)>
!

optOut: anObject
	"A Smalltalk object has a 'klass' property.
	This shadows the property for anObject.
	The object is treated as plain JS object following this."
	
	<anObject.klass = null>
!

parse: aString
	| result |
	
	[ result := self basicParse: aString ] 
		tryCatch: [ :ex | (self parseError: ex parsing: aString) signal ].
		
	^ result
		source: aString;
		yourself
!

pseudoVariableNames
	^ #('self' 'super' 'nil' 'true' 'false' 'thisContext')
!

readJSObject: anObject
	<return $core.readJSObject(anObject)>
!

reservedWords
	"JavaScript reserved words"
	<return $core.reservedWords>
!

settings
	^ SmalltalkSettings
!

version
	"Answer the version string of Amber"
	
	^ '0.14.16'
! !

!SmalltalkImage methodsFor: 'accessing amd'!

amdRequire
	^ self core at: 'amdRequire'
!

defaultAmdNamespace
	^ 'transport.defaultAmdNamespace' settingValue
!

defaultAmdNamespace: aString
	'transport.defaultAmdNamespace' settingValue: aString
! !

!SmalltalkImage methodsFor: 'classes'!

classes
	<return $core.classes()>
!

removeClass: aClass
	aClass isMetaclass ifTrue: [ self error: aClass asString, ' is a Metaclass and cannot be removed!!' ].
	
	self deleteClass: aClass.
	
	SystemAnnouncer current
		announce: (ClassRemoved new
			theClass: aClass;
			yourself)
! !

!SmalltalkImage methodsFor: 'error handling'!

asSmalltalkException: anObject
	"A JavaScript exception may be thrown.
	We then need to convert it back to a Smalltalk object"
	
	^ ((self isSmalltalkObject: anObject) and: [ anObject isKindOf: Error ])
		ifTrue: [ anObject ]
		ifFalse: [ JavaScriptException on: anObject ]
!

parseError: anException parsing: aString
	^ ParseError new messageText: 'Parse error on line ', (anException basicAt: 'line') ,' column ' , (anException basicAt: 'column') ,' : Unexpected character ', (anException basicAt: 'found')
! !

!SmalltalkImage methodsFor: 'globals'!

addGlobalJsVariable: aString
	self globalJsVariables add: aString
!

deleteGlobalJsVariable: aString
	self globalJsVariables remove: aString ifAbsent:[]
!

globalJsVariables
	"Array of global JavaScript variables"
	<return $core.globalJsVariables>
! !

!SmalltalkImage methodsFor: 'packages'!

createPackage: packageName
	| package announcement |
	
	package := self basicCreatePackage: packageName.
	
	announcement := PackageAdded new
		package: package;
		yourself.
		
	SystemAnnouncer current announce: announcement.
	
	^ package
!

packageAt: packageName
	<return $core.packages[packageName]>
!

packageAt: packageName ifAbsent: aBlock
	^ (self packageAt: packageName) ifNil: aBlock
!

packages
	"Return all Package instances in the system."

	<
		return Object.keys($core.packages).map(function(k) {
			return $core.packages[k];
		})
	>
!

removePackage: packageName
	"Removes a package and all its classes."

	| pkg |
	pkg := self packageAt: packageName ifAbsent: [ self error: 'Missing package: ', packageName ].
	pkg classes do: [ :each |
			self removeClass: each ].
	self deletePackage: packageName
!

renamePackage: packageName to: newName
	"Rename a package."

	| pkg |
	pkg := self packageAt: packageName ifAbsent: [ self error: 'Missing package: ', packageName ].
	(self packageAt: newName) ifNotNil: [ self error: 'Already exists a package called: ', newName ].
	pkg name: newName.
	self basicRegisterPackage: pkg.
	self deletePackage: packageName.
! !

!SmalltalkImage methodsFor: 'private'!

basicCreatePackage: packageName
	"Create and bind a new bare package with given name and return it."
	<return $core.addPackage(packageName)>
!

basicParse: aString
	^ SmalltalkParser parse: aString
!

basicRegisterPackage: aPackage
	"Put aPackage in $core.packages object."
	<$core.packages[aPackage.pkgName]=aPackage>
!

deleteClass: aClass
	"Deletes a class by deleting its binding only. Use #removeClass instead"
	
	<$core.removeClass(aClass)>
!

deletePackage: packageName
	"Deletes a package by deleting its binding, but does not check if it contains classes etc.
	To remove a package, use #removePackage instead."

	<delete $core.packages[packageName]>
! !

!SmalltalkImage methodsFor: 'testing'!

existsJsGlobal: aString
	^ Platform globals 
		at: aString 
		ifPresent: [ true ] 
		ifAbsent: [ false ]
!

isSmalltalkObject: anObject
	"Consider anObject a Smalltalk object if it has a 'klass' property.
	Note that this may be unaccurate"
	
	<return anObject.klass !!= null>
! !

SmalltalkImage class instanceVariableNames: 'current'!

!SmalltalkImage class methodsFor: 'initialization'!

initialize
	| st |
	st := self current.
	st globals at: 'Smalltalk' put: st
! !

!SmalltalkImage class methodsFor: 'instance creation'!

current
	^ current ifNil: [ current := super new ] ifNotNil: [ self deprecatedAPI. current ]
!

new
	self shouldNotImplement
! !

!Association methodsFor: '*Kernel-Infrastructure'!

importsString
	"This is for use by package exporter.
	It can fail for non-string keys and values."

	^ self key importsString, ' -> ', self value importsString
! !

!String methodsFor: '*Kernel-Infrastructure'!

asJavaScriptPropertyName
<return $core.st2prop(self)>
!

asSetting
	"Answer aSetting dedicated to locally store a value using this string as key.
	Nil will be the default value."
	^ Setting at: self ifAbsent: nil
!

asSettingIfAbsent: aDefaultValue
	"Answer aSetting dedicated to locally store a value using this string as key.
	Make this setting to have aDefaultValue."
	^ Setting at: self ifAbsent: aDefaultValue
!

importsString
	"Answer receiver as Smalltalk expression"
	^ '''', (self replace: '''' with: ''''''), ''''
!

settingValue
	^ self asSetting value
!

settingValue: aValue
	"Sets the value of the setting that will be locally stored using this string as key.
	Note that aValue can be any object that can be stringifyed"
	^ self asSetting value: aValue
!

settingValueIfAbsent: aDefaultValue
	"Answer the value of the locally stored setting using this string as key.
	Use aDefaultValue in case no setting is found"
	^ (self asSettingIfAbsent: aDefaultValue) value
! !

