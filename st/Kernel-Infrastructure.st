Smalltalk current createPackage: 'Kernel-Infrastructure'!
Object subclass: #InspectorHandler
	instanceVariableNames: ''
	package: 'Kernel-Infrastructure'!
!InspectorHandler commentStamp!
I am responsible for inspecting object.

My class-side `inspector` inst var holds the current inspector I'm delegating object inspection to.

The default inspector object is the transcript.!

InspectorHandler class instanceVariableNames: 'inspector'!

!InspectorHandler class methodsFor: 'accessing'!

inspector
	^ inspector ifNil: [ inspector := Transcript ]
! !

!InspectorHandler class methodsFor: 'registration'!

inspect: anObject
	^ self inspector inspect: anObject
!

register: anInspector
	inspector := anInspector
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
! !

InterfacingObject subclass: #Environment
	instanceVariableNames: ''
	package: 'Kernel-Infrastructure'!
!Environment commentStamp!
I provide an unified entry point to manipulate Amber packages, classes and methods.

Typical use cases include IDEs, remote access and restricting browsing.!

!Environment methodsFor: 'accessing'!

allSelectors
	^ (Smalltalk current at: 'allSelectors') value
!

availableClassNames
	^ Smalltalk current classes 
		collect: [ :each | each name ]
!

availablePackageNames
	^ Smalltalk current packages 
		collect: [ :each | each name ]
!

availableProtocolsFor: aClass
	| protocols |
	
	protocols := aClass protocols.
	aClass superclass ifNotNil: [ protocols addAll: (self availableProtocolsFor: aClass superclass) ].
	^ protocols asSet asArray
!

classBuilder
	^ ClassBuilder new
!

classNamed: aString
	^ (Smalltalk current at: aString asSymbol)
		ifNil: [ self error: 'Invalid class name' ]
!

classes
	^ Smalltalk current classes
!

doItReceiver
	^ DoIt new
!

packages
	^ Smalltalk current packages
!

systemAnnouncer
	^ (Smalltalk current at: #SystemAnnouncer) current
! !

!Environment methodsFor: 'actions'!

commitPackage: aPackage
	aPackage commit
!

copyClass: aClass to: aClassName
	(Smalltalk current at: aClassName)
		ifNotNil: [ self error: 'A class named ', aClassName, ' already exists' ].
		
	ClassBuilder new copyClass: aClass named: aClassName
!

eval: aString on: aReceiver
	| compiler |
	compiler := Compiler new.
	[ compiler parseExpression: aString ] on: Error do: [ :ex |
		^ self alert: ex messageText ].
	^ compiler evaluateExpression: aString on: aReceiver
!

inspect: anObject
	InspectorHandler inspector inspect: anObject
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
	
	destinationClass := Smalltalk current at: aClassName asSymbol.
	destinationClass ifNil: [ self error: 'Invalid class name' ].
	destinationClass == aMethod methodClass ifTrue: [ ^ self ].
	
	destinationClass 
		compile: aMethod source
		category: aMethod protocol.
	aMethod methodClass 
		removeCompiledMethod: aMethod
!

moveMethod: aMethod toProtocol: aProtocol
	aMethod category: aProtocol
!

registerErrorHandler: anErrorHandler
	ErrorHandler setCurrent: anErrorHandler
!

registerInspector: anInspector
	InspectorHandler register: anInspector
!

registerProgressHandler: aProgressHandler
	ProgressHandler setCurrent: aProgressHandler
!

removeClass: aClass
	Smalltalk current removeClass: aClass
!

removeMethod: aMethod
	aMethod methodClass removeCompiledMethod: aMethod
!

removeProtocol: aString from: aClass
	(aClass methods
		select: [ :each | each protocol = aString ])
		do: [ :each | aClass removeCompiledMethod: each ]
!

renameClass: aClass to: aClassName
	(Smalltalk current at: aClassName)
		ifNotNil: [ self error: 'A class named ', aClassName, ' already exists' ].
		
	ClassBuilder new renameClass: aClass to: aClassName
!

renameProtocol: aString to: anotherString in: aClass
	(aClass methods
		select: [ :each | each protocol = aString ])
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
	self eval: aString on: DoIt new
!

compileMethod: sourceCode for: class protocol: protocol
	^ class
		compile: sourceCode
		category: protocol
! !

!Environment methodsFor: 'error handling'!

evaluate: aBlock on: anErrorClass do: exceptionBlock
	"Evaluate a block and catch exceptions happening on the environment stack"
	
	self try: aBlock catch: [ :exception | 
		(exception isKindOf: (self classNamed: anErrorClass name))
			ifTrue: [ exceptionBlock value: exception ]
 			ifFalse: [ exception signal ] ]
! !

Object subclass: #JSObjectProxy
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
	<self['@jsObject'][aString] = anObject>
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
!

value
	"if attribute 'value' exists on the JS object return it,
	otherwise return the result of Object>>value."
	
	^ self 
		at: 'value' 
		ifAbsent: [ super value ]
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
	instanceVariableNames: 'transport'
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

basicTransport
	"Answer the transport literal JavaScript object as setup in the JavaScript file, if any"
	
	<return self.transport>
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
	<self.pkgName = aString>
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
	^ self organization elements asSet asArray
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
		addAll: (Smalltalk current classes select: [ :each | each protocols, each class protocols includes: starCategoryName ]);
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

!Package methodsFor: 'testing'!

isPackage
	^ true
! !

Package class instanceVariableNames: 'defaultCommitPathJs defaultCommitPathSt'!

!Package class methodsFor: 'accessing'!

named: aPackageName
	^ Smalltalk current 
		packageAt: aPackageName
		ifAbsent: [ 
			Smalltalk current createPackage: aPackageName ]
!

named: aPackageName ifAbsent: aBlock
	^ Smalltalk current packageAt: aPackageName ifAbsent: aBlock
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

Object subclass: #ProgressHandler
	instanceVariableNames: ''
	package: 'Kernel-Infrastructure'!
!ProgressHandler commentStamp!
I am used to manage progress in collection iterations, see `SequenceableCollection >> #do:displayingProgress:`.

Subclasses of can register themselves as the current handler with
`ProgressHandler class >> register`.

The default behavior is to simply iterate over the collection.!

!ProgressHandler methodsFor: 'progress handling'!

do: aBlock on: aCollection displaying: aString
	aCollection do: aBlock
! !

ProgressHandler class instanceVariableNames: 'current'!

!ProgressHandler class methodsFor: 'accessing'!

current
	^ current ifNil: [ current := self new ]
!

setCurrent: anHandler
	current := anHandler
! !

!ProgressHandler class methodsFor: 'initialization'!

initialize
	self register
!

register
	ProgressHandler setCurrent: self new
! !

Object subclass: #Smalltalk
	instanceVariableNames: ''
	package: 'Kernel-Infrastructure'!
!Smalltalk commentStamp!
I represent the global JavaScript variable `smalltalk` declared in `js/boot.js`.

## API

I have only one instance, accessed with class-side method `#current`.

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
It requires the `Compiler` package and the `js/parser.js` parser file in order to work.!

!Smalltalk methodsFor: 'accessing'!

at: aString
	^ self basicAt: aString
!

at: aKey ifAbsent: aBlock
	^ (self includesKey: aKey)
		ifTrue: [ self at: aKey ]
		ifFalse: aBlock
!

at: aString put: anObject
	^ self basicAt: aString put: anObject
!

includesKey: aKey
	<return self.hasOwnProperty(aKey)>
!

parse: aString
	| result |
	
	self 
		try: [ result := self basicParse: aString ] 
		catch: [ :ex | (self parseError: ex parsing: aString) signal ].
		
	^ result
		source: aString;
		yourself
!

pseudoVariableNames
	^ #('self' 'super' 'nil' 'true' 'false' 'thisContext')
!

readJSObject: anObject
	<return self.readJSObject(anObject)>
!

reservedWords
	"JavaScript reserved words"
	<return self.reservedWords>
!

version
	"Answer the version string of Amber"
	
	^ '0.12.2'
! !

!Smalltalk methodsFor: 'accessing amd'!

amdRequire
	^ self at: 'amdRequire'
!

defaultAmdNamespace
	^ self at: 'defaultAmdNamespace'
!

defaultAmdNamespace: aString
	self at: 'defaultAmdNamespace' put: aString
! !

!Smalltalk methodsFor: 'classes'!

classes
	<return self.classes()>
!

removeClass: aClass
	aClass isMetaclass ifTrue: [ self error: aClass asString, ' is a Metaclass and cannot be removed!!' ].
	
	self deleteClass: aClass.
	
	SystemAnnouncer current
		announce: (ClassRemoved new
			theClass: aClass;
			yourself)
! !

!Smalltalk methodsFor: 'error handling'!

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

!Smalltalk methodsFor: 'globals'!

addGlobalJsVariable: aString
	self globalJsVariables add: aString
!

deleteGlobalJsVariable: aString
	self globalJsVariables remove: aString ifAbsent:[]
!

globalJsVariables
	"Array of global JavaScript variables"
	<return self.globalJsVariables>
! !

!Smalltalk methodsFor: 'packages'!

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
	<return self.packages[ packageName]>
!

packageAt: packageName ifAbsent: aBlock
	^ (self packageAt: packageName) ifNil: aBlock
!

packages
	"Return all Package instances in the system."

	<
		var packages = [];
		for(var key in self.packages) {
			packages.push(self.packages[key]);
		}
		return packages;
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

!Smalltalk methodsFor: 'private'!

basicCreatePackage: packageName
	"Create and bind a new bare package with given name and return it."
	<return smalltalk.addPackage(packageName)>
!

basicParse: aString
	<return smalltalk.parser.parse(aString)>
!

createPackage: packageName properties: aDict
	"Needed to import .st files: they begin with this call."
	self deprecatedAPI.
	
	aDict isEmpty ifFalse: [ self error: 'createPackage:properties: called with nonempty properties' ].
	^ self createPackage: packageName
!

deleteClass: aClass
	"Deletes a class by deleting its binding only. Use #removeClass instead"
	
	<self.removeClass(aClass)>
!

deletePackage: packageName
	"Deletes a package by deleting its binding, but does not check if it contains classes etc.
	To remove a package, use #removePackage instead."

	<delete self.packages[ packageName]>
! !

!Smalltalk methodsFor: 'testing'!

isSmalltalkObject: anObject
	"Consider anObject a Smalltalk object if it has a 'klass' property.
	Note that this may be unaccurate"
	
	<return typeof anObject.klass !!== 'undefined'>
! !

!Smalltalk class methodsFor: 'accessing'!

current
	<return smalltalk>
! !

!SequenceableCollection methodsFor: '*Kernel-Infrastructure'!

do: aBlock displayingProgress: aString
	ProgressHandler current
		do: aBlock on: self displaying: aString
! !

!String methodsFor: '*Kernel-Infrastructure'!

asJavaScriptSelector
	"Return first keyword of the selector, without trailing colon."
	^ self replace: '^([a-zA-Z0-9]*).*$' with: '$1'
! !

