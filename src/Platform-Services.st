Smalltalk createPackage: 'Platform-Services'!
Object subclass: #ConsoleErrorHandler
	instanceVariableNames: ''
	package: 'Platform-Services'!
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

Object subclass: #ConsoleTranscript
	instanceVariableNames: 'textarea'
	package: 'Platform-Services'!
!ConsoleTranscript commentStamp!
I am a specific transcript emitting to the JavaScript console.

If no other transcript is registered, I am the default.!

!ConsoleTranscript methodsFor: 'actions'!

open
! !

!ConsoleTranscript methodsFor: 'printing'!

clear
	"no op"
!

cr
	"no op"
!

show: anObject
"Smalltalk objects should have no trouble displaying themselves on the Transcript; Javascript objects don't know how, so must be wrapped in a JSObectProxy."
<console.log(String($recv(anObject)._asString()))>
! !

!ConsoleTranscript class methodsFor: 'initialization'!

initialize
	Transcript registerIfNone: self new
! !

Object subclass: #InterfacingObject
	instanceVariableNames: ''
	package: 'Platform-Services'!
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
	self deprecatedAPI.
	^ PlatformInterface ajax: anObject
!

alert: aString
	^ Terminal alert: aString
!

confirm: aString
	^ Terminal confirm: aString
!

prompt: aString
	^ Terminal prompt: aString
!

prompt: aString default: defaultString
	^ Terminal prompt: aString default: defaultString
! !

InterfacingObject subclass: #Environment
	instanceVariableNames: ''
	package: 'Platform-Services'!
!Environment commentStamp!
I provide an unified entry point to manipulate Amber packages, classes and methods.

Typical use cases include IDEs, remote access and restricting browsing.!

!Environment methodsFor: 'accessing'!

allSelectors
	^ Smalltalk core allSelectors
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

renamePackage: aPackageName to: aNewPackageName
        (Smalltalk globals at: aNewPackageName)
                ifNotNil: [ self error: 'A package named ', aNewPackageName, ' already exists' ].

        Smalltalk renamePackage: aPackageName to: aNewPackageName
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
 			ifFalse: [ exception resignal ] ]
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

Object subclass: #NullProgressHandler
	instanceVariableNames: ''
	package: 'Platform-Services'!
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

Object subclass: #PlatformInterface
	instanceVariableNames: ''
	package: 'Platform-Services'!
!PlatformInterface commentStamp!
Deprecated. Use `Platform` or `Terminal`.!

!PlatformInterface class methodsFor: 'accessing'!

globals
	self deprecatedAPI: 'Use Platform globals'.
	^ Platform globals
! !

!PlatformInterface class methodsFor: 'actions'!

ajax: anObject
	self deprecatedAPI: 'Use Platform newXhr or dedicated library.'.
	^ JQuery
		ifNotNil: [ JQuery current ajax: anObject ]
		ifNil: [ self error: 'JQuery wrapper not loaded, cannot do AJAX.' ]
!

alert: aString
	self deprecatedAPI: 'Use Terminal alert:'.
	^ Terminal alert: aString
!

confirm: aString
	self deprecatedAPI: 'Use Terminal confirm:'.
	^ Terminal confirm: aString
!

existsGlobal: aString
	self deprecatedAPI: 'Use Smalltalk existsJsGlobal:'.
	^ PlatformInterface globals 
		at: aString 
		ifPresent: [ true ] 
		ifAbsent: [ false ]
!

newXhr
	self deprecatedAPI: 'Use Platform newXhr'.
	^ Platform newXhr
!

prompt: aString
	self deprecatedAPI: 'Use Terminal prompt:'.
	^ Terminal prompt: aString
!

prompt: aString default: defaultString
	self deprecatedAPI: 'Use Terminal prompt:default:'.
	^ Terminal prompt: aString default: defaultString
! !

Object subclass: #Service
	instanceVariableNames: ''
	package: 'Platform-Services'!
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
	package: 'Platform-Services'!
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
	package: 'Platform-Services'!
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
	package: 'Platform-Services'!
!Inspector commentStamp!
I am the service responsible for inspecting objects.

The default inspector object is the transcript.!

!Inspector class methodsFor: 'inspecting'!

inspect: anObject
	^ self current inspect: anObject
! !

Service subclass: #Platform
	instanceVariableNames: ''
	package: 'Platform-Services'!
!Platform commentStamp!
I am bridge to JS environment.

## API

    Platform globals. "JS global object"
    Platform newXHR "new XMLHttpRequest() or its shim"!

!Platform class methodsFor: 'accessing'!

globals
	^ self current globals
!

newXhr
	^ self current newXhr
! !

Service subclass: #ProgressHandler
	instanceVariableNames: ''
	package: 'Platform-Services'!
!ProgressHandler commentStamp!
I am used to manage progress in collection iterations, see `SequenceableCollection >> #do:displayingProgress:`.

Registered instances must implement `#do:on:displaying:`.

The default behavior is to simply iterate over the collection, using `NullProgressHandler`.!

!ProgressHandler class methodsFor: 'progress handling'!

do: aBlock on: aCollection displaying: aString
	self current do: aBlock on: aCollection displaying: aString
! !

Service subclass: #Terminal
	instanceVariableNames: ''
	package: 'Platform-Services'!
!Terminal commentStamp!
I am UI interface service.

## API

    Terminal alert: 'Hey, there is a problem'.
    Terminal confirm: 'Affirmative?'.
    Terminal prompt: 'Your name:'.!

!Terminal class methodsFor: 'dialogs'!

alert: aString
	^ self current alert: aString
!

confirm: aString
	^ self current confirm: aString
!

prompt: aString
	^ self current prompt: aString
!

prompt: aString default: defaultString
	^ self current prompt: aString default: defaultString
! !

Service subclass: #Transcript
	instanceVariableNames: ''
	package: 'Platform-Services'!
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

!AssociativeCollection methodsFor: '*Platform-Services'!

inspectOn: anInspector
	| variables |
	variables := Dictionary new.
	variables at: '#self' put: self.
	variables at: '#keys' put: self keys.
	self keysAndValuesDo: [ :key :value |
		variables at: key put: value ].
	anInspector
		setLabel: self printString;
		setVariables: variables
! !

!Collection methodsFor: '*Platform-Services'!

inspectOn: anInspector
	| variables |
	variables := Dictionary new.
	variables at: '#self' put: self.
	self withIndexDo: [ :each :i |
		variables at: i put: each ].
	anInspector
		setLabel: self printString;
		setVariables: variables
! !

!Date methodsFor: '*Platform-Services'!

inspectOn: anInspector
	| variables |
	variables := Dictionary new.
	variables at: '#self' put: self.
	variables at: '#year' put: self year.
	variables at: '#month' put: self month.
	variables at: '#day' put: self day.
	variables at: '#hours' put: self hours.
	variables at: '#minutes' put: self minutes.
	variables at: '#seconds' put: self seconds.
	variables at: '#milliseconds' put: self milliseconds.
	anInspector
		setLabel: self printString;
		setVariables: variables
! !

!JSObjectProxy methodsFor: '*Platform-Services'!

inspectOn: anInspector
	| variables |
	variables := Dictionary new.
	variables at: '#self' put: self jsObject.
	anInspector setLabel: self printString.
	JSObjectProxy addObjectVariablesTo: variables ofProxy: self.
	anInspector setVariables: variables
! !

!MethodContext methodsFor: '*Platform-Services'!

inspectOn: anInspector
	| variables |
	variables := Dictionary new.
	variables at: '#self' put: self.
	variables at: '#home' put: self home.
	variables at: '#receiver' put: self receiver.
	variables at: '#selector' put: self selector.
	variables at: '#locals' put: self locals.
	self class instanceVariableNames do: [ :each |
		variables at: each put: (self instVarAt: each) ].
	anInspector
		setLabel: self printString;
		setVariables: variables
! !

!Object methodsFor: '*Platform-Services'!

inspectOn: anInspector
	| variables |
	variables := Dictionary new.
	variables at: '#self' put: self.
	self class allInstanceVariableNames do: [ :each |
		variables at: each put: (self instVarAt: each) ].
	anInspector
		setLabel: self printString;
		setVariables: variables
! !

!SequenceableCollection methodsFor: '*Platform-Services'!

do: aBlock displayingProgress: aString
	ProgressHandler 
		do: aBlock 
		on: self 
		displaying: aString
! !

!Set methodsFor: '*Platform-Services'!

inspectOn: anInspector
	| variables i |
	variables := Dictionary new.
	variables at: '#self' put: self.
	i := 1.
	self do: [ :each |
		variables at: i put: each.
		i := i + 1 ].
	anInspector
		setLabel: self printString;
		setVariables: variables
! !

!String methodsFor: '*Platform-Services'!

inspectOn: anInspector
	| label |
	super inspectOn: anInspector.
	self printString size > 30
		ifTrue: [ label := (self printString copyFrom: 1 to: 30), '...''' ]
		ifFalse: [ label := self printString ].
	anInspector setLabel: label
! !

