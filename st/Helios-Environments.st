Smalltalk current createPackage: 'Helios-Environments'!
Object subclass: #HLEnvironment
 instanceVariableNames: ''
 package: 'Helios-Environments'!
!HLEnvironment commentStamp!
Abstract class defining common behavior for local and remote environments!

!HLEnvironment methodsFor: 'accessing'!

classBuilder
	^ self subclassResponsibility
!

packages
	^ self subclassResponsibility
! !

!HLEnvironment methodsFor: 'actions'!

eval: someCode on: aReceiver

	^ self subclassResponsibility
!

moveMethod: aMethod toClass: aClassName ifAbsent: aBlock
	self subclassResponsibility
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

classBuilder
	^ ClassBuilder new
!

packages
	^ Smalltalk current packages
! !

!HLLocalEnvironment methodsFor: 'actions'!

eval: aString on: aReceiver
	| compiler  |
	compiler := Compiler new.
	[ compiler parseExpression: aString ] on: Error do: [ :ex |
		^ window alert: ex messageText ].
	^ compiler evaluateExpression: aString on: aReceiver
!

moveMethod: aMethod toClass: aClassName ifAbsent: aBlock
	| destinationClass |
	
	destinationClass := Smalltalk current at: aClassName asSymbol.
	destinationClass ifNil: [ ^ aBlock value ].
	
	destinationClass adoptMethod: aMethod.
	aMethod methodClass forsakeMethod: aMethod.
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
		compile: aMethod source;
		category: aMethod protocol.
!

forsakeMethod: aMethod
	self removeCompiledMethod: aMethod
! !

