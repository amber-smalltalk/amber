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

!BlockClosure methodsFor: 'error handling'!

on: anErrorClass do: aBlock
	^self try: self catch: [:error |
	    (error isKindOf: anErrorClass) 
	     ifTrue: [aBlock value: error]
	     ifFalse: [error signal]]
! !

!BlockClosure methodsFor: 'evaluating'!

applyTo: anObject arguments: aCollection
	<return self.apply(anObject, aCollection)>
!

ensure: aBlock
	| success |
	success := false.
	^[self value. success := true. aBlock value]
		on: Error
		do: [:ex |
			success ifFalse: [aBlock value].
			ex signal]
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
	<return new self(anObject, anObject2)>
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

valueWithInterval: aNumber
	<return setInterval(self, aNumber)>
!

valueWithTimeout: aNumber
	<return setTimeout(self, aNumber)>
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
	self basicAt: 'category' put: aString
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
	Smalltalk current send: self selector to: anObject arguments: self arguments
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
  
MethodContext instances are JavaScript `SmalltalkMethodContext` objects defined in boot.js 

Current limitation: MethodContext instances are not created on Block evaluation. That means it's actually impossible to debug inside a Block.!

!MethodContext methodsFor: 'accessing'!

asString
	^self receiver class printString, ' >> ', self selector
!

home
	<return self.homeContext>
!

printString
	^super printString, '(', self asString, ')'
!

receiver
	<return self.receiver>
!

selector
	<return smalltalk.convertSelector(self.selector)>
!

temps
	<return self.temps>
! !

