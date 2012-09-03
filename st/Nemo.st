Smalltalk current createPackage: 'Nemo' properties: #{}!
Object subclass: #NemoConnection
	instanceVariableNames: 'socket'
	package: 'Nemo'!

!NemoConnection methodsFor: 'not yet classified'!

close
	socket close.
	socket := nil
!

createDefaultSocket
	
	self createSocketOn: self defaultURL.
!

createLocalSocketOn: aPort

	^ self createSocketOn: 'ws://localhost:', aPort asString, '/nemo'
!

createSocketOn: uri
	socket := <new WebSocket(uri)>.
	socket at: 'onmessage' put: [ :message | self handleMessage: message ].
	socket at: 'onerror' put: [ :err | console log: err ]
!

defaultURL

	^ self class defaultURL
!

handleMessage: aMessage
	| string result |

	string := aMessage data.
	string isString ifFalse: [ ^ self ].

	[ result := Compiler new evaluateExpression: string ]
		on: Error
		do: [ :ex | ^ socket send: ex asNemoString ].
	socket send: result asNemoString
!

send: aString
	socket send: aString
! !

NemoConnection class instanceVariableNames: 'default'!

!NemoConnection class methodsFor: 'not yet classified'!

default
	^ default ifNil: [ default := self new ]
!

defaultURL

	^ 'ws://localhost:8010/nemo'
! !

!Object methodsFor: '*Nemo'!

asNemo
	^ self asJSON
!

asNemoString
	^JSON stringify: self asNemo
! !

!Class methodsFor: '*Nemo'!

asNemo
	^ Dictionary new
		at: 'name' put: self name;
		at: 'superclass' put: (self superclass ifNotNil: [ self superclass name ]);
		at: 'classComment' put: self comment;
		at: 'definition' put: self definition;
		at: 'package' put: self category;
		at: 'instVarNames' put: self instanceVariableNames;
		asNemo
! !

!Metaclass methodsFor: '*Nemo'!

asNemo
	^ Dictionary new
		at: 'definition' put: self definition;
		at: 'instVarNames' put: self instanceVariableNames;
		asNemo
! !

!Collection methodsFor: '*Nemo'!

asNemo
	^self asArray collect: [:each | each asNemo]
! !

!HashedCollection methodsFor: '*Nemo'!

asNemo
	| c |
	c := self class new.
	self keysAndValuesDo: [:key :value |
		c at: key put: value asNemo].
	^c
! !

!Dictionary methodsFor: '*Nemo'!

asNemo
	^self asHashedCollection asNemo
! !

!String methodsFor: '*Nemo'!

asNemo
	^ self
! !

!CompiledMethod methodsFor: '*Nemo'!

asNemo
	^ Dictionary new
		at: 'name' put: self selector;
		at: 'protocol' put: self category;
		at: 'sourceCode' put: self source;
		at: 'compiledSource' put: self fn compiledSource;
		at: 'messageSends' put: self messageSends;
		asNemo
! !

!Error methodsFor: '*Nemo'!

asNemo
	^ Dictionary new
		at: 'error' put: self messageText;
		asNemo
! !

!Package methodsFor: '*Nemo'!

asNemo
	^ Dictionary new
		at: 'name' put: self name;
		asNemo
! !

