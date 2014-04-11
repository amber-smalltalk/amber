Smalltalk createPackage: 'Kernel-Infrastructure'!
Object subclass: #ConsoleErrorHandler
	instanceVariableNames: ''
	package: 'Kernel-Infrastructure'!
!ConsoleErrorHandler commentStamp!
I am manage Smalltalk errors, displaying the stack in the console.!

!ConsoleErrorHandler methodsFor: 'error handling'!

handleError: anError
	anError context ifNotNil: [ self logErrorContext: anError context ].
	self logError: anError
! !

!ConsoleErrorHandler methodsFor: 'private'!

log: aString
	console log: aString
!

logContext: aContext
	aContext home ifNotNil: [
		self logContext: aContext home ].
	self log: aContext asString
!

logError: anError
	self log: anError messageText
!

logErrorContext: aContext
	aContext ifNotNil: [
		aContext home ifNotNil: [
			self logContext: aContext home ]]
! !

ConsoleErrorHandler class instanceVariableNames: 'current'!

!ConsoleErrorHandler class methodsFor: 'initialization'!

initialize
	ErrorHandler registerIfNone: self new
! !

Object subclass: #InterfacingObject
	instanceVariableNames: ''
	package: 'Kernel-Infrastructure'!
!InterfacingObject commentStamp!
I am superclass of all object that interface with user or environment. `Widget` and a few other classes are subclasses of me. I delegate all of the above APIs to `PlatformInterface`.

## API

    self alert: 'Hey, there is a problem'.
    self confirm: 'Affirmative?'.
    self prompt: 'Your name:'.

    self ajax: #{
        'url' -> '/patch.js'. 'type' -> 'GET'. dataType->'script'
    }.!

!InterfacingObject methodsFor: 'actions'!

ajax: anObject
	^ PlatformInterface ajax: anObject
!

alert: aString
	^ PlatformInterface alert: aString
!

confirm: aString
	^ PlatformInterface confirm: aString
!

prompt: aString
	^ PlatformInterface prompt: aString
!

prompt: aString default: defaultString
	^ PlatformInterface prompt: aString default: defaultString
! !

InterfacingObject subclass: #Environment
	instanceVariableNames: ''
	package: 'Kernel-Infrastructure'!
!Environment commentStamp!
I provide an unified entry point to manipulate Amber packages, classes and methods.

Typical use cases include IDEs, remote access and restricting browsing.!

!Environment methodsFor: 'accessing'!

allSelectors
	^ Smalltalk vm allSelectors
!

availableClassNames
	^ Smalltalk classes 
		collect: [ :each | each name ]
!

availablePackageNames
	^ Smalltalk packages 
		collect: [ :each | each name ]
!

availableProtocolsFor: aClass
	| protocols |
	
	protocols := aClass protocols.
	aClass superclass ifNotNil: [ protocols addAll: (self availableProtocolsFor: aClass superclass) ].
	^ protocols asSet asArray sort
!

classBuilder
	^ ClassBuilder new
!

classNamed: aString
	^ (Smalltalk globals at: aString asSymbol)
		ifNil: [ self error: 'Invalid class name' ]
!

classes
	^ Smalltalk classes
!

doItReceiver
	^ DoIt new
!

packages
	^ Smalltalk packages
!

systemAnnouncer
	^ (Smalltalk globals at: #SystemAnnouncer) current
! !

!Environment methodsFor: 'actions'!

commitPackage: aPackage onSuccess: aBlock onError: anotherBlock
	aPackage transport
		commitOnSuccess: aBlock
		onError: anotherBlock
!

copyClass: aClass to: aClassName
	(Smalltalk globals at: aClassName)
		ifNotNil: [ self error: 'A class named ', aClassName, ' already exists' ].
		
	ClassBuilder new copyClass: aClass named: aClassName
!

inspect: anObject
	Inspector inspect: anObject
!

moveClass: aClass toPackage: aPackageName
	| package |
	
	package := Package named: aPackageName.
	package ifNil: [ self error: 'Invalid package name' ].
	package == aClass package ifTrue: [ ^ self ].
	
	aClass package: package
!

moveMethod: aMethod toClass: aClassName
	| destinationClass |
	
	destinationClass := self classNamed: aClassName.
	destinationClass == aMethod methodClass ifTrue: [ ^ self ].
	
	aMethod methodClass isMetaclass ifTrue: [ 
		destinationClass := destinationClass class ].
	
	destinationClass 
		compile: aMethod source
		protocol: aMethod protocol.
	aMethod methodClass 
		removeCompiledMethod: aMethod
!

moveMethod: aMethod toProtocol: aProtocol
	aMethod protocol: aProtocol
!

removeClass: aClass
	Smalltalk removeClass: aClass
!

removeMethod: aMethod
	aMethod methodClass removeCompiledMethod: aMethod
!

removeProtocol: aString from: aClass
	(aClass methodsInProtocol: aString)
		do: [ :each | aClass removeCompiledMethod: each ]
!

renameClass: aClass to: aClassName
	(Smalltalk globals at: aClassName)
		ifNotNil: [ self error: 'A class named ', aClassName, ' already exists' ].
		
	ClassBuilder new renameClass: aClass to: aClassName
!

renameProtocol: aString to: anotherString in: aClass
	(aClass methodsInProtocol: aString)
		do: [ :each | each protocol: anotherString ]
!

setClassCommentOf: aClass to: aString
	aClass comment: aString
! !

!Environment methodsFor: 'compiling'!

addInstVarNamed: aString to: aClass
	self classBuilder
		addSubclassOf: aClass superclass 
		named: aClass name 
		instanceVariableNames: (aClass instanceVariableNames copy add: aString; yourself)
		package: aClass package name
!

compileClassComment: aString for: aClass
	aClass comment: aString
!

compileClassDefinition: aString
	[ self evaluate: aString for: DoIt new ]
		on: Error
		do: [ :error | self alert: error messageText ]
!

compileMethod: sourceCode for: class protocol: protocol
	^ class
		compile: sourceCode
		protocol: protocol
! !

!Environment methodsFor: 'error handling'!

evaluate: aBlock on: anErrorClass do: exceptionBlock
	"Evaluate a block and catch exceptions happening on the environment stack"
	
	aBlock tryCatch: [ :exception | 
		(exception isKindOf: (self classNamed: anErrorClass name))
			ifTrue: [ exceptionBlock value: exception ]
 			ifFalse: [ exception signal ] ]
! !

!Environment methodsFor: 'evaluating'!

evaluate: aString for: anObject
	^ Evaluator evaluate: aString for: anObject
! !

!Environment methodsFor: 'services'!

registerErrorHandler: anErrorHandler
	ErrorHandler register: anErrorHandler
!

registerFinder: aFinder
	Finder register: aFinder
!

registerInspector: anInspector
	Inspector register: anInspector
!

registerProgressHandler: aProgressHandler
	ProgressHandler register: aProgressHandler
!

registerTranscript: aTranscript
	Transcript register: aTranscript
! !

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

jsObject
	^ jsObject
!

jsObject: aJSObject
	jsObject := aJSObject
!

lookupProperty: aString
	"Looks up a property in JS object.
	Answer the property if it is present, or nil if it is not present."
	
	<return aString in self._jsObject() ? aString : nil>
! !

!JSObjectProxy methodsFor: 'comparing'!

= anObject
	anObject class == self class ifFalse: [ ^ false ].
	^ self compareJSObjectWith: anObject jsObject
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

!JSObjectProxy methodsFor: 'private'!

compareJSObjectWith: aJSObject
 	<return self["@jsObject"] === aJSObject>
! !

!JSObjectProxy methodsFor: 'proxy'!

addObjectVariablesTo: aDictionary
	<
		for(var i in self['@jsObject']) {
			aDictionary._at_put_(i, self['@jsObject'][i]);
		}
	>
!

doesNotUnderstand: aMessage
	^ (self lookupProperty: aMessage selector asJavaScriptSelector)
		ifNil: [ super doesNotUnderstand: aMessage ]
		ifNotNil: [ :jsSelector | 
			self 
				forwardMessage: jsSelector 
				withArguments: aMessage arguments ]
!

forwardMessage: aString withArguments: anArray
	<
		return smalltalk.send(self._jsObject(), aString, anArray);
	>
!

inspectOn: anInspector
	| variables |
	variables := Dictionary new.
	variables at: '#self' put: self jsObject.
	anInspector setLabel: self printString.
	self addObjectVariablesTo: variables.
	anInspector setVariables: variables
! !

!JSObjectProxy class methodsFor: 'instance creation'!

on: aJSObject
	^ self new
		jsObject: aJSObject;
		yourself
! !

Object subclass: #NullProgressHandler
	instanceVariableNames: ''
	package: 'Kernel-Infrastructure'!
!NullProgressHandler commentStamp!
I am the default progress handler. I do not display any progress, and simply iterate over the collection.!

!NullProgressHandler methodsFor: 'progress handling'!

do: aBlock on: aCollection displaying: aString
	aCollection do: aBlock
! !

NullProgressHandler class instanceVariableNames: 'current'!

!NullProgressHandler class methodsFor: 'initialization'!

initialize
	ProgressHandler registerIfNone: self new
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
	instanceVariableNames: 'transport dirty'
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
	
	SystemAnnouncer current announce: (PackageClean new
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
			nextPutAll: ' named: ';
			nextPutAll: '''', self name, '''';
			nextPutAll: String lf, String tab;
			nextPutAll:  ' transport: (';
			nextPutAll: self transport definition, ')' ]
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

basicName: aString
	<self.pkgName = aString>
!

basicTransport
	"Answer the transport literal JavaScript object as setup in the JavaScript file, if any"
	
	<return self.transport>
! !

!Package methodsFor: 'testing'!

isDirty
	^ dirty ifNil: [ false ]
!

isPackage
	^ true
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
	anAnnouncement theClass ifNotNil: [ :theClass |
		theClass package beDirty ]
!

onMethodModification: anAnnouncement
	anAnnouncement method package ifNotNil: [ :package | package beDirty ]
!

onPackageAdded: anAnnouncement
	anAnnouncement package beDirty
!

onProtocolModification: anAnnouncement
	anAnnouncement theClass package beDirty
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

Object subclass: #PlatformInterface
	instanceVariableNames: ''
	package: 'Kernel-Infrastructure'!
!PlatformInterface commentStamp!
I am single entry point to UI and environment interface.
My `initialize` tries several options (for now, browser environment only) to set myself up.

## API

    PlatformInterface alert: 'Hey, there is a problem'.
    PlatformInterface confirm: 'Affirmative?'.
    PlatformInterface prompt: 'Your name:'.

    PlatformInterface ajax: #{
        'url' -> '/patch.js'. 'type' -> 'GET'. dataType->'script'
    }.!

PlatformInterface class instanceVariableNames: 'worker'!

!PlatformInterface class methodsFor: 'accessing'!

globals
	<return (new Function('return this'))();>
!

setWorker: anObject
	worker := anObject
! !

!PlatformInterface class methodsFor: 'actions'!

ajax: anObject
	^ worker
		ifNotNil: [ worker ajax: anObject ]
		ifNil: [ self error: 'ajax: not available' ]
!

alert: aString
	^ worker
		ifNotNil: [ worker alert: aString ]
		ifNil: [ self error: 'alert: not available' ]
!

confirm: aString
	^ worker
		ifNotNil: [ worker confirm: aString ]
		ifNil: [ self error: 'confirm: not available' ]
!

existsGlobal: aString
	^ PlatformInterface globals 
		at: aString 
		ifPresent: [ true ] 
		ifAbsent: [ false ]
!

prompt: aString
	^ worker
		ifNotNil: [ worker prompt: aString ]
		ifNil: [ self error: 'prompt: not available' ]
!

prompt: aString default: defaultString
	^ worker
		ifNotNil: [ worker prompt: aString default: defaultString ]
		ifNil: [ self error: 'prompt: not available' ]
! !

!PlatformInterface class methodsFor: 'initialization'!

initialize
	| candidate |
	
	super initialize.
	
	BrowserInterface ifNotNil: [
		candidate := BrowserInterface new.
		candidate isAvailable ifTrue: [ self setWorker: candidate. ^ self ]
	]
! !

Object subclass: #Service
	instanceVariableNames: ''
	package: 'Kernel-Infrastructure'!
!Service commentStamp!
I implement the basic behavior for class registration to a service.

See the `Transcript` class for a concrete service.

## API

Use class-side methods `#register:` and `#registerIfNone:` to register classes to a specific service.!

Service class instanceVariableNames: 'current'!

!Service class methodsFor: 'accessing'!

current
	^ current
! !

!Service class methodsFor: 'instance creation'!

new
	self shouldNotImplement
! !

!Service class methodsFor: 'registration'!

register: anObject
	current := anObject
!

registerIfNone: anObject
	self current ifNil: [ self register: anObject ]
! !

Service subclass: #ErrorHandler
	instanceVariableNames: ''
	package: 'Kernel-Infrastructure'!
!ErrorHandler commentStamp!
I am the service used to handle Smalltalk errors.
See `boot.js` `handleError()` function.

Registered service instances must implement `#handleError:` to perform an action on the thrown exception.!

!ErrorHandler class methodsFor: 'error handling'!

handleError: anError
	self handleUnhandledError: anError
!

handleUnhandledError: anError
	anError wasHandled ifTrue: [ ^ self ].
	
	^ self current handleError: anError
! !

Service subclass: #Finder
	instanceVariableNames: ''
	package: 'Kernel-Infrastructure'!
!Finder commentStamp!
I am the service responsible for finding classes/methods.
__There is no default finder.__

## API

Use `#browse` on an object to find it.!

!Finder class methodsFor: 'finding'!

findClass: aClass
	^ self current findClass: aClass
!

findMethod: aCompiledMethod
	^ self current findMethod: aCompiledMethod
!

findString: aString
	^ self current findString: aString
! !

Service subclass: #Inspector
	instanceVariableNames: ''
	package: 'Kernel-Infrastructure'!
!Inspector commentStamp!
I am the service responsible for inspecting objects.

The default inspector object is the transcript.!

!Inspector class methodsFor: 'inspecting'!

inspect: anObject
	^ self current inspect: anObject
! !

Service subclass: #ProgressHandler
	instanceVariableNames: ''
	package: 'Kernel-Infrastructure'!
!ProgressHandler commentStamp!
I am used to manage progress in collection iterations, see `SequenceableCollection >> #do:displayingProgress:`.

Registered instances must implement `#do:on:displaying:`.

The default behavior is to simply iterate over the collection, using `NullProgressHandler`.!

!ProgressHandler class methodsFor: 'progress handling'!

do: aBlock on: aCollection displaying: aString
	self current do: aBlock on: aCollection displaying: aString
! !

Service subclass: #Transcript
	instanceVariableNames: ''
	package: 'Kernel-Infrastructure'!
!Transcript commentStamp!
I am a facade for Transcript actions.

I delegate actions to the currently registered transcript.

## API

    Transcript 
        show: 'hello world';
        cr;
        show: anObject.!

!Transcript class methodsFor: 'instance creation'!

open
	self current open
! !

!Transcript class methodsFor: 'printing'!

clear
	self current clear
!

cr
	self current show: String cr
!

inspect: anObject
	self show: anObject
!

show: anObject
	self current show: anObject
! !

Object subclass: #Setting
	instanceVariableNames: 'key value defaultValue'
	package: 'Kernel-Infrastructure'!
!Setting commentStamp!
I represent a setting accessible via `Smalltalk settings`.

## API

A `Setting` value can be read using `value` and set using `value:`.

Settings are accessed with `'key' asSetting` or `'key' asSettingIfAbsent: 'defaultValue'`.!

!Setting methodsFor: 'accessing'!

defaultValue
	^ defaultValue
!

defaultValue: anObject
	defaultValue := anObject
!

key
	^ key
!

key: anObject
	key := anObject
!

value
	^ Smalltalk settings at: self key ifAbsent: [ self defaultValue ]
!

value: aString
	^ Smalltalk settings at: self key put: aString
! !

!Setting class methodsFor: 'instance creation'!

at: aString ifAbsent: anotherString
	^ super new
		key: aString;
		defaultValue: anotherString;
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
operations of variable `smalltalk` declared in `support/boot.js`.

## API

I have only one instance, accessed with global variable `Smalltalk`.

The `smalltalk` object holds all class and packages defined in the system.

## Classes

Classes can be accessed using the following methods:

- `#classes` answers the full list of Smalltalk classes in the system
- `#at:` answers a specific class or `nil`

## Packages

Packages can be accessed using the following methods:

- `#packages` answers the full list of packages
- `#packageAt:` answers a specific package or `nil`

## Parsing

The `#parse:` method is used to parse Amber source code.
It requires the `Compiler` package and the `support/parser.js` parser file in order to work.!

!SmalltalkImage methodsFor: 'accessing'!

at: aString
	self deprecatedAPI.
	^ self globals at: aString
!

at: aKey ifAbsent: aBlock
	^ (self includesKey: aKey)
		ifTrue: [ self at: aKey ]
		ifFalse: [ aBlock value ]
!

at: aString put: anObject
	self deprecatedAPI.
	^ self globals at: aString put: anObject
!

current
	"Backward compatibility for Smalltalk current ..."
	self deprecatedAPI.
	^ self
!

globals
	"Future compatibility to be able to use Smalltalk globals at: ..."
	<return globals>
!

includesKey: aKey
	<return smalltalk.hasOwnProperty(aKey)>
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
	<return smalltalk.readJSObject(anObject)>
!

reservedWords
	"JavaScript reserved words"
	<return smalltalk.reservedWords>
!

settings
	^ SmalltalkSettings
!

version
	"Answer the version string of Amber"
	
	^ '0.12.4'
!

vm
	"Future compatibility to be able to use Smalltalk vm ..."
	<return smalltalk>
! !

!SmalltalkImage methodsFor: 'accessing amd'!

amdRequire
	^ self vm at: 'amdRequire'
!

defaultAmdNamespace
	^ 'transport.defaultAmdNamespace' settingValue
!

defaultAmdNamespace: aString
	'transport.defaultAmdNamespace' settingValue: aString
! !

!SmalltalkImage methodsFor: 'classes'!

classes
	<return smalltalk.classes()>
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
	<return smalltalk.globalJsVariables>
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
	<return smalltalk.packages[packageName]>
!

packageAt: packageName ifAbsent: aBlock
	^ (self packageAt: packageName) ifNil: aBlock
!

packages
	"Return all Package instances in the system."

	<
		return Object.keys(smalltalk.packages).map(function(k) {
			return smalltalk.packages[k];
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
	(self at: 'packages') at: newName put: pkg.
	pkg name: newName.
	self deletePackage: packageName.
! !

!SmalltalkImage methodsFor: 'private'!

basicCreatePackage: packageName
	"Create and bind a new bare package with given name and return it."
	<return smalltalk.addPackage(packageName)>
!

basicParse: aString
	^ SmalltalkParser parse: aString
!

createPackage: packageName properties: aDict
	"Needed to import .st files: they begin with this call."
	self deprecatedAPI.
	
	aDict isEmpty ifFalse: [ self error: 'createPackage:properties: called with nonempty properties' ].
	^ self createPackage: packageName
!

deleteClass: aClass
	"Deletes a class by deleting its binding only. Use #removeClass instead"
	
	<smalltalk.removeClass(aClass)>
!

deletePackage: packageName
	"Deletes a package by deleting its binding, but does not check if it contains classes etc.
	To remove a package, use #removePackage instead."

	<delete smalltalk.packages[packageName]>
! !

!SmalltalkImage methodsFor: 'testing'!

isSmalltalkObject: anObject
	"Consider anObject a Smalltalk object if it has a 'klass' property.
	Note that this may be unaccurate"
	
	<return typeof anObject.klass !!== 'undefined'>
! !

SmalltalkImage class instanceVariableNames: 'current'!

!SmalltalkImage class methodsFor: 'initialization'!

initialize
	globals at: 'Smalltalk' put: self current
! !

!SmalltalkImage class methodsFor: 'instance creation'!

current
	^ current ifNil: [ current := super new ] ifNotNil: [ self deprecatedAPI. current ]
!

new
	self shouldNotImplement
! !

!SequenceableCollection methodsFor: '*Kernel-Infrastructure'!

do: aBlock displayingProgress: aString
	ProgressHandler 
		do: aBlock 
		on: self 
		displaying: aString
! !

!String methodsFor: '*Kernel-Infrastructure'!

asJavaScriptSelector
	"Return first keyword of the selector, without trailing colon."
	^ self replace: '^([a-zA-Z0-9]*).*$' with: '$1'
!

asSetting
	^ Setting at: self ifAbsent: nil
!

asSettingIfAbsent: aString
	^ Setting at: self ifAbsent: aString
!

settingValue
	^ self asSetting value
!

settingValue: aString
	^ self asSetting value: aString
!

settingValueIfAbsent: aString
	^ (self asSettingIfAbsent: aString) value
! !

