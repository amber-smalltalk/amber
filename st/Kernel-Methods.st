Smalltalk current createPackage: 'Kernel-Methods' properties: #{}!
Object subclass: #BlockClosure
	instanceVariableNames: ''
	package: 'Kernel-Methods'!
!BlockClosure commentStamp!
A BlockClosure is a lexical closure.
The JavaScript representation is a function.

A BlockClosure is evaluated with the `#value*` methods in the 'evaluating' protocol.!

!BlockClosure methodsFor: 'accessing'!

compiledSource
	<return self.toString()>
!

numArgs
	<return self.length>
! !

!BlockClosure methodsFor: 'controlling'!

whileFalse
	"inlined in the Compiler"
	self whileFalse: []
!

whileFalse: aBlock
	"inlined in the Compiler"
	<while(!!self()) {aBlock()}>
!

whileTrue
	"inlined in the Compiler"
	self whileTrue: []
!

whileTrue: aBlock
	"inlined in the Compiler"
	<while(self()) {aBlock()}>
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
	     ifFalse: [ smalltalkError signal ] ]
! !

!BlockClosure methodsFor: 'evaluating'!

applyTo: anObject arguments: aCollection
	<return self.apply(anObject, aCollection)>
!

ensure: aBlock
	<try{return self()}finally{aBlock._value()}>
!

new
	"Use the receiver as a JS constructor. 
	*Do not* use this method to instanciate Smalltalk objects!!"
	<return new self()>
!

newValue: anObject
	"Use the receiver as a JS constructor. 
	*Do not* use this method to instanciate Smalltalk objects!!"
	<return new self(anObject)>
!

newValue:  anObject value: anObject2
	"Use the receiver as a JS constructor. 
	*Do not* use this method to instanciate Smalltalk objects!!"
	<return new self(anObject, anObject2)>
!

newValue:  anObject value: anObject2 value: anObject3
	"Use the receiver as a JS constructor. 
	*Do not* use this method to instanciate Smalltalk objects!!"
	<return new self(anObject, anObject2,anObject3)>
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
CompiledMethod hold the source and compiled code of a class method.

You can get a CompiledMethod using `Behavior>>methodAt:`

	String methodAt: 'lines'

and read the source code

	(String methodAt: 'lines') source

See referenced classes:

	(String methodAt: 'lines') referencedClasses

or messages sent from this method:
	
	(String methodAt: 'lines')  messageSends!

!CompiledMethod methodsFor: 'accessing'!

arguments
	<return self.args || []>
!

category
	^(self basicAt: 'category') ifNil: ['']
!

category: aString
	| oldCategory |
    oldCategory := self category.
	self basicAt: 'category' put: aString.
    
    self methodClass ifNotNil: [
    	self methodClass organization addElement: aString.
    
		(self methodClass methods 
    		select: [ :each | each category = oldCategory ])
        	ifEmpty: [ self methodClass organization removeElement: oldCategory ] ]
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

Object subclass: #ForkPool
	instanceVariableNames: 'poolSize maxPoolSize queue worker'
	package: 'Kernel-Methods'!
!ForkPool commentStamp!
A ForkPool is responsible for handling forked blocks.
The pool size sets the maximum concurrent forked blocks.

The default instance is accessed with `ForkPool default`!

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
	queue back: aBlock
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
		block := queue frontIfAbsent: [ sentinel ].
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
Generally, the system does not use instances of Message for efficiency reasons.
However, when a message is not understood by its receiver, the interpreter will make up an instance of it in order to capture the information involved in an actual message transmission. 
This instance is sent it as an argument with the message `doesNotUnderstand:` to the receiver.

See boot.js, `messageNotUnderstood`  and its counterpart `Object>>doesNotUnderstand:`!

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

!Message methodsFor: 'printing'!

printString
	^ String streamContents: [:aStream|  
                                  				aStream 
                                  					nextPutAll: super printString;
                                  					nextPutAll: '(';
                                  					nextPutAll: selector;
                                  					nextPutAll: ')' 				]
!

sendTo: anObject
	^ anObject perform: self selector withArguments: self arguments
! !

!Message class methodsFor: 'instance creation'!

selector: aString arguments: anArray
	^self new
		selector: aString;
		arguments: anArray;
		yourself
! !

Object subclass: #MethodContext
	instanceVariableNames: ''
	package: 'Kernel-Methods'!
!MethodContext commentStamp!
MethodContext holds all the dynamic state associated with the execution of either a method activation resulting from a message send. That is used to build the call stack while debugging.
  
MethodContext instances are JavaScript `SmalltalkMethodContext` objects defined in boot.js!

!MethodContext methodsFor: 'accessing'!

home
	<return self.methodContext || self.homeContext>
!

locals
	<return self.locals>
!

method
	^self methodContext receiver class lookupSelector: self methodContext selector
!

methodContext
	self isBlockContext ifFalse: [ ^ self ].
    
    ^ self home
!

outerContext
	<return self.homeContext>
!

pc
	<return self.pc>
!

printString
	^super printString, '(', self asString, ')'
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
    	ifTrue: [ 'a block (in ', self methodContext receiver class printString, ')' ]
      	ifFalse: [ self receiver class printString, ' >> ', self selector ]
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
NativeFunction is a wrapper around native functions, such as `WebSocket`.
For 'normal' functions (whose constructor is the JavaScript `Function` object), use `BlockClosure`.

See the class-side `instance creation` methods.

Created instances will most probably be instance of `JSObjectProxy`.

Usage example:

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

