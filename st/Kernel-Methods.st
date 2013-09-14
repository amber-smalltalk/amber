Smalltalk current createPackage: 'Kernel-Methods'!
Object subclass: #BlockClosure
	instanceVariableNames: ''
	package: 'Kernel-Methods'!
!BlockClosure commentStamp!
I represent a lexical closure.
I am is directly mapped to JavaScript Function.

## API

1. Evaluation

    My instances get evaluated with the `#value*` methods in the 'evaluating' protocol.

    Example: ` [ :x | x + 1 ] value: 3 "Answers 4" `

2. Control structures

    Blocks are used (together with `Boolean`) for control structures (methods in the `controlling` protocol).

    Example: `aBlock whileTrue: [ ... ]`

3. Error handling

    I provide the `#on:do:` method for handling exceptions.

    Example: ` aBlock on: MessageNotUnderstood do: [ :ex | ... ] `!

!BlockClosure methodsFor: 'accessing'!

compiledSource
	<return self.toString()>
!

numArgs
	<return self.length>
!

receiver
	^ nil
! !

!BlockClosure methodsFor: 'controlling'!

whileFalse
	"inlined in the Compiler"
	self whileFalse: []
!

whileFalse: aBlock
	"inlined in the Compiler"
	<while(!!smalltalk.assert(self._value())) {aBlock._value()}>
!

whileTrue
	"inlined in the Compiler"
	self whileTrue: []
!

whileTrue: aBlock
	"inlined in the Compiler"
	<while(smalltalk.assert(self._value())) {aBlock._value()}>
! !

!BlockClosure methodsFor: 'converting'!

asCompiledMethod: aString
	<return smalltalk.method({selector:aString, fn:self});>
!

currySelf
	"Transforms [ :selfarg :x :y | stcode ] block
	which represents JS function (selfarg, x, y, ...) {jscode}
	into function (x, y, ...) {jscode} that takes selfarg from 'this'.
	IOW, it is usable as JS method and first arg takes the receiver."
	
	<
		return function () {
			var args = [ this ];
			args.push.apply(args, arguments);
			return self.apply(null, args);
		}
	>
! !

!BlockClosure methodsFor: 'error handling'!

on: anErrorClass do: aBlock
	"All exceptions thrown in the Smalltalk stack are cought.
	Convert all JS exceptions to JavaScriptException instances."
	
	^self try: self catch: [ :error | | smalltalkError |
		smalltalkError := Smalltalk current asSmalltalkException: error.
		(smalltalkError isKindOf: anErrorClass)
		ifTrue: [ aBlock value: smalltalkError ]
		ifFalse: [ smalltalkError resignal ] ]
! !

!BlockClosure methodsFor: 'evaluating'!

applyTo: anObject arguments: aCollection
	<return self.apply(anObject, aCollection)>
!

ensure: aBlock
	<try{return self._value()}finally{aBlock._value()}>
!

new
	"Use the receiver as a JS constructor.
	*Do not* use this method to instanciate Smalltalk objects!!"
	<return new self()>
!

newValue: anObject
^ self newWithValues: { anObject }
!

newValue: anObject value: anObject2
^ self newWithValues: { anObject. anObject2 }.
!

newValue: anObject value: anObject2 value: anObject3
^ self newWithValues: { anObject. anObject2. anObject3 }.
!

newWithValues: aCollection
"Use the receiver as a JavaScript constructor with a variable number of arguments.
Answer the object created using the operator `new`.

This algorithm was inspired by http://stackoverflow.com/a/6069331.

Here's a general breakdown of what's going on:
1) Create a new, empty constructor function.
2) Set it's prototype to the receiver's prototype. Because the receiver is a `BlockClosure`, it is also a JavaScript function.
3) Instantiate a new object using the constructor function just created. 
   This forces the interpreter to set the internal [[prototype]] property to what was set on the function before. 
   This has to be done, as we have no access to the [[prototype]] property externally.
4) Apply `self` to the object I just instantiated."

<
	var constructor = function() {};
	constructor.prototype = self.prototype;
	var object = new constructor;
	var result = self.apply(object, aCollection);
	return typeof result === "object" ? result : object;
>
!

timeToRun
	"Answer the number of milliseconds taken to execute this block."

	^ Date millisecondsToRun: self
!

value
	"inlined in the Compiler"
	<return self();>
!

value: anArg
	"inlined in the Compiler"
	<return self(anArg);>
!

value: firstArg value: secondArg
	"inlined in the Compiler"
	<return self(firstArg, secondArg);>
!

value: firstArg value: secondArg value: thirdArg
	"inlined in the Compiler"
	<return self(firstArg, secondArg, thirdArg);>
!

valueWithPossibleArguments: aCollection
	<return self.apply(null, aCollection);>
! !

!BlockClosure methodsFor: 'timeout/interval'!

fork
	ForkPool default fork: self
!

valueWithInterval: aNumber
	<
		var interval = setInterval(self, aNumber);
		return smalltalk.Timeout._on_(interval);
	>
!

valueWithTimeout: aNumber
	<
		var timeout = setTimeout(self, aNumber);
		return smalltalk.Timeout._on_(timeout);
	>
! !

Object subclass: #CompiledMethod
	instanceVariableNames: ''
	package: 'Kernel-Methods'!
!CompiledMethod commentStamp!
I represent a class method of the system. I hold the source and compiled code of a class method.

## API
My instances can be accessed using `Behavior >> #methodAt:`

    Object methodAt: 'asString'

Source code access:

	(String methodAt: 'lines') source

Referenced classes:

	(String methodAt: 'lines') referencedClasses

Messages sent from an instance:
	
	(String methodAt: 'lines') messageSends!

!CompiledMethod methodsFor: 'accessing'!

arguments
	<return self.args || []>
!

category
	^(self basicAt: 'category') ifNil: [ self defaultCategory ]
!

category: aString
	| oldProtocol |
	oldProtocol := self protocol.
	self basicAt: 'category' put: aString.

	SystemAnnouncer current announce: (MethodMoved new
		method: self;
		oldProtocol: oldProtocol;
		yourself).

	self methodClass ifNotNil: [
		self methodClass organization addElement: aString.
	
		(self methodClass methods
			select: [ :each | each protocol = oldProtocol ])
			ifEmpty: [ self methodClass organization removeElement: oldProtocol ] ]
!

fn
	^self basicAt: 'fn'
!

fn: aBlock
	self basicAt: 'fn' put: aBlock
!

messageSends
	^self basicAt: 'messageSends'
!

methodClass
	^self basicAt: 'methodClass'
!

protocol
	^ self category
!

protocol: aString
	self category: aString
!

referencedClasses
	^self basicAt: 'referencedClasses'
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

!CompiledMethod methodsFor: 'defaults'!

defaultCategory
	^ 'as yet unclassified'
! !

!CompiledMethod methodsFor: 'testing'!

isCompiledMethod
	^ true
!

isOverridden
	| selector |
    
    selector := self selector.
    self methodClass allSubclassesDo: [ :each |
	    (each includesSelector: selector)
        	ifTrue: [ ^ true ] ].
	^ false
!

isOverride
	| superclass |
    
    superclass := self methodClass superclass.
	superclass ifNil: [ ^ false ].
	
    ^ (self methodClass superclass lookupSelector: self selector) notNil
! !

Object subclass: #ForkPool
	instanceVariableNames: 'poolSize maxPoolSize queue worker'
	package: 'Kernel-Methods'!
!ForkPool commentStamp!
I am responsible for handling forked blocks.
The pool size sets the maximum concurrent forked blocks.

## API

The default instance is accessed with `#default`.
The maximum concurrent forked blocks can be set with `#maxPoolSize:`.

Forking is done via `BlockClosure >> #fork`!

!ForkPool methodsFor: 'accessing'!

maxPoolSize
	^ maxPoolSize ifNil: [ self defaultMaxPoolSize ]
!

maxPoolSize: anInteger
	maxPoolSize := anInteger
! !

!ForkPool methodsFor: 'actions'!

fork: aBlock
	poolSize < self maxPoolSize ifTrue: [ self addWorker ].
	queue nextPut: aBlock
! !

!ForkPool methodsFor: 'defaults'!

defaultMaxPoolSize
	^ self class defaultMaxPoolSize
! !

!ForkPool methodsFor: 'initialization'!

initialize
	super initialize.
	
	poolSize := 0.
	queue := Queue new.
	worker := self makeWorker
!

makeWorker
	| sentinel |
	sentinel := Object new.
	^[ | block |
		poolSize := poolSize - 1.
		block := queue nextIfAbsent: [ sentinel ].
		block == sentinel ifFalse: [
			[ block value ] ensure: [ self addWorker ]]]
! !

!ForkPool methodsFor: 'private'!

addWorker
	worker valueWithTimeout: 0.
	poolSize := poolSize + 1
! !

ForkPool class instanceVariableNames: 'default'!

!ForkPool class methodsFor: 'accessing'!

default
	^default ifNil: [ default := self new ]
!

defaultMaxPoolSize
	^100
!

resetDefault
	default := nil
! !

Object subclass: #Message
	instanceVariableNames: 'selector arguments'
	package: 'Kernel-Methods'!
!Message commentStamp!
In general, the system does not use instances of me for efficiency reasons.
However, when a message is not understood by its receiver, the interpreter will make up an instance of it in order to capture the information involved in an actual message transmission.
This instance is sent it as an argument with the message `#doesNotUnderstand:` to the receiver.

See boot.js, `messageNotUnderstood` and its counterpart `Object >> #doesNotUnderstand:`

## API

Besides accessing methods, `#sendTo:` provides a convenient way to send a message to an object.!

!Message methodsFor: 'accessing'!

arguments
	^arguments
!

arguments: anArray
	arguments := anArray
!

selector
	^selector
!

selector: aString
	selector := aString
! !

!Message methodsFor: 'actions'!

sendTo: anObject
	^ anObject perform: self selector withArguments: self arguments
! !

!Message methodsFor: 'printing'!

printOn: aStream
	super printOn: aStream.
	aStream
		nextPutAll: '(';
		nextPutAll: self selector;
		nextPutAll: ')'
! !

!Message class methodsFor: 'instance creation'!

selector: aString arguments: anArray
	^self new
		selector: aString;
		arguments: anArray;
		yourself
! !

Object subclass: #MessageSend
	instanceVariableNames: 'receiver message'
	package: 'Kernel-Methods'!
!MessageSend commentStamp!
I encapsulate message sends to objects. Arguments can be either predefined or supplied when the message send is performed. 

## API

Use `#value` to perform a message send with its predefined arguments and `#value:*` if additonal arguments have to supplied.!

!MessageSend methodsFor: 'accessing'!

arguments
	^ message arguments
!

arguments: aCollection
	message arguments: aCollection
!

receiver
	^ receiver
!

receiver: anObject
	receiver := anObject
!

selector
	^ message selector
!

selector: aString
	message selector: aString
! !

!MessageSend methodsFor: 'evaluating'!

value
	^ message sendTo: self receiver
!

value: anObject
	^ message 
		arguments: { anObject };
		sendTo: self receiver
!

value: firstArgument value: secondArgument
	^ message 
		arguments: { firstArgument. secondArgument };
		sendTo: self receiver
!

value: firstArgument value: secondArgument value: thirdArgument
	^ message 
		arguments: { firstArgument. secondArgument. thirdArgument };
		sendTo: self receiver
!

valueWithPossibleArguments: aCollection
	self arguments: aCollection.
	^ self value
! !

!MessageSend methodsFor: 'initialization'!

initialize
	super initialize.
	message := Message new
! !

!MessageSend methodsFor: 'printing'!

printOn: aStream
	super printOn: aStream.
	aStream
		nextPutAll: '(';
		nextPutAll: self receiver;
		nextPutAll: ' >> ';
		nextPutAll: self selector;
		nextPutAll: ')'
! !

Object subclass: #MethodContext
	instanceVariableNames: ''
	package: 'Kernel-Methods'!
!MethodContext commentStamp!
I hold all the dynamic state associated with the execution of either a method activation resulting from a message send. I am used to build the call stack while debugging.

My instances are JavaScript `SmalltalkMethodContext` objects defined in `boot.js`.!

!MethodContext methodsFor: 'accessing'!

home
	<return self.homeContext>
!

locals
	<return self.locals || {}>
!

method
	^ self methodContext ifNotNil: [
		self methodContext receiver class lookupSelector: self methodContext selector ]
!

methodContext
	self isBlockContext ifFalse: [ ^ self ].
	
	^ self home ifNotNil: [ :home |
		home methodContext ]
!

outerContext
	<return self.outerContext || self.homeContext>
!

pc
	<return self.pc>
!

receiver
	<return self.receiver>
!

selector
	<
		if(self.selector) {
			return smalltalk.convertSelector(self.selector);
		} else {
			return nil;
		}
	>
!

temps
	self deprecatedAPI.
	
	^ self locals
! !

!MethodContext methodsFor: 'converting'!

asString
	^self isBlockContext
		ifTrue: [ 'a block (in ', self methodContext asString, ')' ]
		ifFalse: [ self receiver class name, ' >> ', self selector ]
! !

!MethodContext methodsFor: 'printing'!

printOn: aStream
	super printOn: aStream.
	aStream 
		nextPutAll: '(';
		nextPutAll: self asString;
		nextPutAll: ')'
! !

!MethodContext methodsFor: 'testing'!

isBlockContext
	"Block context do not have selectors."
	
	^ self selector isNil
! !

Object subclass: #NativeFunction
	instanceVariableNames: ''
	package: 'Kernel-Methods'!
!NativeFunction commentStamp!
I am a wrapper around native functions, such as `WebSocket`.
For 'normal' functions (whose constructor is the JavaScript `Function` object), use `BlockClosure`.

## API

See the class-side `instance creation` methods for instance creation.

Created instances will most probably be instance of `JSObjectProxy`.

## Usage example:

	| ws |
	ws := NativeFunction constructor: 'WebSocket' value: 'ws://localhost'.
	ws at: 'onopen' put: [ ws send: 'hey there from Amber' ]!

!NativeFunction class methodsFor: 'instance creation'!

constructor: aString
	<
		var native=eval(aString);
		return new native();
	>
!

constructor: aString value:anObject
	<
		var native=eval(aString);
		return new native(anObject);
	>
!

constructor: aString value:anObject value: anObject2
	<
		var native=eval(aString);
		return new native(anObject,anObject2);
	>
!

constructor: aString value:anObject value: anObject2 value:anObject3
	<
		var native=eval(aString);
		return new native(anObject,anObject2, anObject3);
	>
! !

!NativeFunction class methodsFor: 'testing'!

exists: aString
	<
		if(aString in window) {
			return true
		} else {
			return false
		}
	>
! !

