Smalltalk current createPackage: 'Kernel-Methods' properties: #{}!
Object subclass: #CompiledMethod
	instanceVariableNames: ''
	category: 'Kernel-Methods'!

!CompiledMethod methodsFor: 'accessing'!

source
	^(self basicAt: 'source') ifNil: ['']
!

source: aString
	self basicAt: 'source' put: aString
!

category
	^(self basicAt: 'category') ifNil: ['']
!

category: aString
	self basicAt: 'category' put: aString
!

selector
	^self basicAt: 'selector'
!

selector: aString
	self basicAt: 'selector' put: aString
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

arguments
	<return self.args || []>
! !

Object subclass: #BlockClosure
	instanceVariableNames: ''
	category: 'Kernel-Methods'!
!BlockClosure commentStamp!
A BlockClosure is a lexical closure.
The JavaScript representation is a function.

A BlockClosure is evaluated with the #value* methods in the 'evaluating' protocol.!

!BlockClosure methodsFor: 'accessing'!

compiledSource
	<return self.toString()>
!

numArgs
	<return self.length>
! !

!BlockClosure methodsFor: 'controlling'!

whileTrue: aBlock
	"inlined in the Compiler"
	<while(self()) {aBlock()}>
!

whileFalse: aBlock
	"inlined in the Compiler"
	<while(!!self()) {aBlock()}>
!

whileFalse
	"inlined in the Compiler"
	self whileFalse: []
!

whileTrue
	"inlined in the Compiler"
	self whileTrue: []
! !

!BlockClosure methodsFor: 'error handling'!

on: anErrorClass do: aBlock
	^self try: self catch: [:error |
	    (error isKindOf: anErrorClass) 
	     ifTrue: [aBlock value: error]
	     ifFalse: [error signal]]
! !

!BlockClosure methodsFor: 'evaluating'!

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
!

new
	"Use the receiver as a JS constructor. 
	*Do not* use this method to instanciate Smalltalk objects!!"
	<return new self()>
!

applyTo: anObject arguments: aCollection
	<return self.apply(anObject, aCollection)>
!

timeToRun
	"Answer the number of milliseconds taken to execute this block."

	^ Date millisecondsToRun: self
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
! !

!BlockClosure methodsFor: 'timeout/interval'!

valueWithTimeout: aNumber
	<return setTimeout(self, aNumber)>
!

valueWithInterval: aNumber
	<return setInterval(self, aNumber)>
! !

Object subclass: #MethodContext
	instanceVariableNames: ''
	category: 'Kernel-Methods'!

!MethodContext methodsFor: 'accessing'!

receiver
	<return self.receiver>
!

selector
	<return smalltalk.convertSelector(self.selector)>
!

home
	<return self.homeContext>
!

temps
	<return self.temps>
!

printString
	^super printString, '(', self asString, ')'
!

asString
	^self receiver class printString, ' >> ', self selector
! !

Object subclass: #Message
	instanceVariableNames: 'selector arguments'
	category: 'Kernel-Methods'!

!Message methodsFor: 'accessing'!

selector
	^selector
!

selector: aString
	selector := aString
!

arguments: anArray
	arguments := anArray
!

arguments
	^arguments
! !

!Message methodsFor: 'printing'!

printString
	^ String streamContents: [:aStream|  
                                  				aStream 
                                  					nextPutAll: super printString;
                                  					nextPutAll: '(';
                                  					nextPutAll: selector;
                                  					nextPutAll: ')' 				]
! !

!Message class methodsFor: 'instance creation'!

selector: aString arguments: anArray
	^self new
		selector: aString;
		arguments: anArray;
		yourself
! !

