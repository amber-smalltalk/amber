Smalltalk current createPackage: 'Helios-Environments'!
Object subclass: #HLEnvironment
	instanceVariableNames: ''
	package: 'Helios-Environments'!
!HLEnvironment commentStamp!
Abstract class defining common behavior for local and remote environments!

!HLEnvironment methodsFor: 'accessing'!

availableClassNames
	self subclassResponsibility
!

availableProtocolsFor: aClass
	self subclassResponsibility
!

classBuilder
	^ self subclassResponsibility
!

classNamed: aString
	self subclassResponsibility
!

packages
	^ self subclassResponsibility
! !

!HLEnvironment methodsFor: 'actions'!

commitPackage: aPackage
	self subclassResponsibility
!

eval: someCode on: aReceiver

	^ self subclassResponsibility
!

moveMethod: aMethod toClass: aClassName
	self subclassResponsibility
!

moveMethod: aMethod toProtocol: aProtocol
	self subclassResponsibility
!

removeMethod: aMethod
	self sublcassResponsibility
! !

!HLEnvironment methodsFor: 'compiling'!

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
	class
		compile: sourceCode
		category: protocol
! !

HLEnvironment subclass: #HLLocalEnvironment
	instanceVariableNames: ''
	package: 'Helios-Environments'!

!HLLocalEnvironment methodsFor: 'accessing'!

availableClassNames
	^ Smalltalk current classes 
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

packages
	^ Smalltalk current packages
! !

!HLLocalEnvironment methodsFor: 'actions'!

commitPackage: aPackage
	aPackage heliosCommit
!

eval: aString on: aReceiver
	| compiler  |
	compiler := Compiler new.
	[ compiler parseExpression: aString ] on: Error do: [ :ex |
		^ window alert: ex messageText ].
	^ compiler evaluateExpression: aString on: aReceiver
!

moveMethod: aMethod toClass: aClassName
	| destinationClass |
	
	destinationClass := Smalltalk current at: aClassName asSymbol.
	destinationClass ifNil: [ self error: 'Invalid class name' ].
	destinationClass == aMethod methodClass ifTrue: [ ^ self ].
	
	destinationClass adoptMethod: aMethod.
	aMethod methodClass forsakeMethod: aMethod.
!

moveMethod: aMethod toProtocol: aProtocol
	aMethod category: aProtocol
!

removeMethod: aMethod
	aMethod methodClass forsakeMethod: aMethod
! !

HLEnvironment subclass: #HLRemoteEnvironment
	instanceVariableNames: ''
	package: 'Helios-Environments'!

!HLRemoteEnvironment methodsFor: 'accessing'!

packages
	"Answer the remote environment's packages"
  
	"to-do"
    
    "Note for future self and friends:
    the problem with remote stuff is that the answers shouldn't be expected to be
    received in a syncrhonous fashion. Everything network is asyc, so you *are going to deal with callbacks* here"
! !

!HLRemoteEnvironment methodsFor: 'actions'!

eval: someCode on: aReceiver

	"Note for future self and friends:
    whatever way this compilation happens on the other side, 
    it should return a proxy to the remote resulting object"
    
    self notYetImplemented
! !

Object subclass: #HLRemoteObject
	instanceVariableNames: ''
	package: 'Helios-Environments'!
!HLRemoteObject commentStamp!
This is a local proxy to a remote object.
Tipically useful for evaluating and inspecting and interacting with instances of a remote VM.!

!HLRemoteObject methodsFor: 'actions'!

doesNotUnderstand: aMessage

	"to-do

	aham, blah blah

	super doesNotUnderstand: aMessage"
!

inspectOn: anInspector

	"to-do"

	"this is a source of so much fun..."
!

printString
	^ 'this is a remote object'
! !

!Behavior methodsFor: '*Helios-Environments'!

adoptMethod: aMethod
	self 
		compile: aMethod source
		category: aMethod protocol.
!

forsakeMethod: aMethod
	self removeCompiledMethod: aMethod
! !

