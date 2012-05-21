Smalltalk current createPackage: 'Compiler-Visitors' properties: #{}!
NodeVisitor subclass: #AbstractCodeGenerator
	instanceVariableNames: 'currentClass source'
	package: 'Compiler-Visitors'!

!AbstractCodeGenerator methodsFor: 'accessing'!

classNameFor: aClass
	^aClass isMetaclass
	    ifTrue: [aClass instanceClass name, '.klass']
	    ifFalse: [
		aClass isNil
		    ifTrue: ['nil']
		    ifFalse: [aClass name]]
!

currentClass
	^currentClass
!

currentClass: aClass
	currentClass := aClass
!

pseudoVariables
	^#('self' 'super' 'true' 'false' 'nil' 'thisContext')
!

safeVariableNameFor: aString
	^(Smalltalk current reservedWords includes: aString)
		ifTrue: [aString, '_']
		ifFalse: [aString]
!

source
	^source ifNil: ['']
!

source: aString
	source := aString
! !

!AbstractCodeGenerator methodsFor: 'compiling'!

compileNode: aNode
	self subclassResponsibility
! !

AbstractCodeGenerator subclass: #CodeGenerator
	instanceVariableNames: ''
	package: 'Compiler-Visitors'!

!CodeGenerator methodsFor: 'compiling'!

compileNode: aNode
	| ir stream |
	self semanticAnalyzer visit: aNode.
	ir := self translator visit: aNode; builder.
	stream := JSStream new.
	ir emitOn: stream.
	^ stream contents
!

semanticAnalyzer
	^ SemanticAnalyzer on: self currentClass
!

translator
	^ IRASTResolver new
		source: self source;
		yourself
! !

AbstractCodeGenerator subclass: #FunCodeGenerator
	instanceVariableNames: 'stream nestedBlocks earlyReturn currentSelector unknownVariables tempVariables messageSends referencedClasses classReferenced argVariables'
	package: 'Compiler-Visitors'!

!FunCodeGenerator methodsFor: 'accessing'!

argVariables
	^argVariables copy
!

knownVariables
	^self pseudoVariables 
		addAll: self tempVariables;
		addAll: self argVariables;
		yourself
!

tempVariables
	^tempVariables copy
!

unknownVariables
	^unknownVariables copy
! !

!FunCodeGenerator methodsFor: 'compiling'!

compileNode: aNode
	stream := '' writeStream.
	self visit: aNode.
	^stream contents
! !

!FunCodeGenerator methodsFor: 'initialization'!

initialize
	super initialize.
	stream := '' writeStream. 
	unknownVariables := #().
	tempVariables := #().
	argVariables := #().
	messageSends := #().
	classReferenced := #()
! !

!FunCodeGenerator methodsFor: 'optimizations'!

checkClass: aClassName for: receiver
        stream nextPutAll: '((($receiver = ', receiver, ').klass === smalltalk.', aClassName, ') ? '
!

inline: aSelector receiver: receiver argumentNodes: aCollection
        | inlined |
        inlined := false.

	"-- Booleans --"

	(aSelector = 'ifFalse:') ifTrue: [
		aCollection first isBlockNode ifTrue: [
                	self checkClass: 'Boolean' for: receiver.
                	stream nextPutAll: '(!! $receiver ? '.
                	self visit: aCollection first.
          		stream nextPutAll: '() : nil)'.
                	inlined := true]].

	(aSelector = 'ifTrue:') ifTrue: [
		aCollection first isBlockNode ifTrue: [
                	self checkClass: 'Boolean' for: receiver.
                	stream nextPutAll: '($receiver ? '.
                	self visit: aCollection first.
          		stream nextPutAll: '() : nil)'.
                	inlined := true]].

	(aSelector = 'ifTrue:ifFalse:') ifTrue: [
		(aCollection first isBlockNode and: [aCollection second isBlockNode]) ifTrue: [
                	self checkClass: 'Boolean' for: receiver.
                	stream nextPutAll: '($receiver ? '.
                	self visit: aCollection first.
          		stream nextPutAll: '() : '.
          		self visit: aCollection second.
          		stream nextPutAll: '())'.
                	inlined := true]].

	(aSelector = 'ifFalse:ifTrue:') ifTrue: [
		(aCollection first isBlockNode and: [aCollection second isBlockNode]) ifTrue: [
                	self checkClass: 'Boolean' for: receiver.
                	stream nextPutAll: '(!! $receiver ? '.
                	self visit: aCollection first.
          		stream nextPutAll: '() : '.
          		self visit: aCollection second.
          		stream nextPutAll: '())'.
                	inlined := true]].

	"-- Numbers --"

	(aSelector = '<') ifTrue: [
                self checkClass: 'Number' for: receiver.
                stream nextPutAll: '$receiver <'.
                self visit: aCollection first.
                inlined := true].

	(aSelector = '<=') ifTrue: [
                self checkClass: 'Number' for: receiver.
                stream nextPutAll: '$receiver <='.
                self visit: aCollection first.
                inlined := true].

	(aSelector = '>') ifTrue: [ 
                self checkClass: 'Number' for: receiver.
                stream nextPutAll: '$receiver >'.
                self visit: aCollection first.
                inlined := true].

	(aSelector = '>=') ifTrue: [
                self checkClass: 'Number' for: receiver.
                stream nextPutAll: '$receiver >='.
                self visit: aCollection first.
                inlined := true].

        (aSelector = '+') ifTrue: [
                self checkClass: 'Number' for: receiver.
                stream nextPutAll: '$receiver +'.
                self visit: aCollection first.
                inlined := true].

        (aSelector = '-') ifTrue: [
                self checkClass: 'Number' for: receiver.
                stream nextPutAll: '$receiver -'.
                self visit: aCollection first.
                inlined := true].

        (aSelector = '*') ifTrue: [
                self checkClass: 'Number' for: receiver.
                stream nextPutAll: '$receiver *'.
                self visit: aCollection first.
                inlined := true].

        (aSelector = '/') ifTrue: [
                self checkClass: 'Number' for: receiver.
                stream nextPutAll: '$receiver /'.
                self visit: aCollection first.
                inlined := true].

        ^inlined
!

inlineLiteral: aSelector receiverNode: anObject argumentNodes: aCollection
        | inlined |
        inlined := false.
 
	"-- BlockClosures --"

	(aSelector = 'whileTrue:') ifTrue: [
          	(anObject isBlockNode and: [aCollection first isBlockNode]) ifTrue: [
                	stream nextPutAll: '(function(){while('.
                  	self visit: anObject.
                  	stream nextPutAll: '()) {'.
                	self visit: aCollection first.
          		stream nextPutAll: '()}})()'.
                	inlined := true]].

	(aSelector = 'whileFalse:') ifTrue: [
          	(anObject isBlockNode and: [aCollection first isBlockNode]) ifTrue: [
                	stream nextPutAll: '(function(){while(!!'.
                  	self visit: anObject.
                  	stream nextPutAll: '()) {'.
                	self visit: aCollection first.
          		stream nextPutAll: '()}})()'.
                	inlined := true]].

	(aSelector = 'whileTrue') ifTrue: [
          	anObject isBlockNode ifTrue: [
                	stream nextPutAll: '(function(){while('.
                  	self visit: anObject.
                  	stream nextPutAll: '()) {}})()'.
                	inlined := true]].

	(aSelector = 'whileFalse') ifTrue: [
          	anObject isBlockNode ifTrue: [
                	stream nextPutAll: '(function(){while(!!'.
                  	self visit: anObject.
                  	stream nextPutAll: '()) {}})()'.
                	inlined := true]].

	"-- Numbers --"

	(aSelector = '+') ifTrue: [
          	(self isNode: anObject ofClass: Number) ifTrue: [
                  	self visit: anObject.
                  	stream nextPutAll: ' + '.
                	self visit: aCollection first.
                	inlined := true]].

	(aSelector = '-') ifTrue: [
          	(self isNode: anObject ofClass: Number) ifTrue: [
                  	self visit: anObject.
                  	stream nextPutAll: ' - '.
                	self visit: aCollection first.
                	inlined := true]].

	(aSelector = '*') ifTrue: [
          	(self isNode: anObject ofClass: Number) ifTrue: [
                  	self visit: anObject.
                  	stream nextPutAll: ' * '.
                	self visit: aCollection first.
                	inlined := true]].

	(aSelector = '/') ifTrue: [
          	(self isNode: anObject ofClass: Number) ifTrue: [
                  	self visit: anObject.
                  	stream nextPutAll: ' / '.
                	self visit: aCollection first.
                	inlined := true]].

	(aSelector = '<') ifTrue: [
          	(self isNode: anObject ofClass: Number) ifTrue: [
                  	self visit: anObject.
                  	stream nextPutAll: ' < '.
                	self visit: aCollection first.
                	inlined := true]].

	(aSelector = '<=') ifTrue: [
          	(self isNode: anObject ofClass: Number) ifTrue: [
                  	self visit: anObject.
                  	stream nextPutAll: ' <= '.
                	self visit: aCollection first.
                	inlined := true]].

	(aSelector = '>') ifTrue: [
          	(self isNode: anObject ofClass: Number) ifTrue: [
                  	self visit: anObject.
                  	stream nextPutAll: ' > '.
                	self visit: aCollection first.
                	inlined := true]].

	(aSelector = '>=') ifTrue: [
          	(self isNode: anObject ofClass: Number) ifTrue: [
                  	self visit: anObject.
                  	stream nextPutAll: ' >= '.
                	self visit: aCollection first.
                	inlined := true]].
                	   
	"-- UndefinedObject --"

	(aSelector = 'ifNil:') ifTrue: [
		aCollection first isBlockNode ifTrue: [
          		stream nextPutAll: '(($receiver = '.
          		self visit: anObject.
          		stream nextPutAll: ') == nil || $receiver == undefined) ? '.
                  	self visit: aCollection first.
                  	stream nextPutAll: '() : $receiver'.
                  	inlined := true]].

	(aSelector = 'ifNotNil:') ifTrue: [
		aCollection first isBlockNode ifTrue: [
          		stream nextPutAll: '(($receiver = '.
          		self visit: anObject.
          		stream nextPutAll: ') !!= nil && $receiver !!= undefined) ? '.
                  	self visit: aCollection first.
                  	stream nextPutAll: '() : nil'.
                  	inlined := true]].

	(aSelector = 'ifNil:ifNotNil:') ifTrue: [
		(aCollection first isBlockNode and: [aCollection second isBlockNode]) ifTrue: [
          		stream nextPutAll: '(($receiver = '.
          		self visit: anObject.
          		stream nextPutAll: ') == nil || $receiver == undefined) ? '.
                  	self visit: aCollection first.
                  	stream nextPutAll: '() : '.
                  	self visit: aCollection second.
                  	stream nextPutAll: '()'.
                  	inlined := true]].

	(aSelector = 'ifNotNil:ifNil:') ifTrue: [
		(aCollection first isBlockNode and: [aCollection second isBlockNode]) ifTrue: [
          		stream nextPutAll: '(($receiver = '.
          		self visit: anObject.
          		stream nextPutAll: ') == nil || $receiver == undefined) ? '.
                  	self visit: aCollection second.
                  	stream nextPutAll: '() : '.
                  	self visit: aCollection first.
                  	stream nextPutAll: '()'.
                  	inlined := true]].
                 
        ^inlined
!

isNode: aNode ofClass: aClass
	^aNode isValueNode and: [
          	aNode value class = aClass or: [
          		aNode value = 'self' and: [self currentClass = aClass]]]
! !

!FunCodeGenerator methodsFor: 'testing'!

performOptimizations
	^self class performOptimizations
! !

!FunCodeGenerator methodsFor: 'visiting'!

send: aSelector to: aReceiver arguments: aCollection superSend: aBoolean
	^String streamContents: [:str || tmp |
        	tmp := stream.
		str nextPutAll: 'smalltalk.send('.
		str nextPutAll: aReceiver.
		str nextPutAll: ', "', aSelector asSelector, '", ['.
                stream := str.
		aCollection
	    		do: [:each | self visit: each]
	    		separatedBy: [stream nextPutAll: ', '].
                stream := tmp.
                str nextPutAll: ']'.
		aBoolean ifTrue: [
			str nextPutAll: ', smalltalk.', (self classNameFor: self currentClass), '.superclass || nil'].
		str nextPutAll: ')']
!

visit: aNode
	aNode accept: self
!

visitAssignmentNode: aNode
	stream nextPutAll: '('.
	self visit: aNode left.
	stream nextPutAll: '='.
	self visit: aNode right.
	stream nextPutAll: ')'
!

visitBlockNode: aNode
	stream nextPutAll: '(function('.
	aNode parameters 
	    do: [:each |
		tempVariables add: each.
		stream nextPutAll: each]
	    separatedBy: [stream nextPutAll: ', '].
	stream nextPutAll: '){'.
	aNode nodes do: [:each | self visit: each].
	stream nextPutAll: '})'
!

visitBlockSequenceNode: aNode
	| index |
	nestedBlocks := nestedBlocks + 1.
	aNode nodes isEmpty
	    ifTrue: [
		stream nextPutAll: 'return nil;']
	    ifFalse: [
		aNode temps do: [:each | | temp |
                    temp := self safeVariableNameFor: each.
		    tempVariables add: temp.
		    stream nextPutAll: 'var ', temp, '=nil;'; lf].
		index := 0.
		aNode nodes do: [:each |
		    index := index + 1.
		    index = aNode nodes size ifTrue: [
			stream nextPutAll: 'return '].
		    self visit: each.
		    stream nextPutAll: ';']].
	nestedBlocks := nestedBlocks - 1
!

visitCascadeNode: aNode
	| index |
	index := 0.
	(tempVariables includes: '$rec') ifFalse: [
		tempVariables add: '$rec'].
	stream nextPutAll: '(function($rec){'.
	aNode nodes do: [:each |
	    index := index + 1.
	    index = aNode nodes size ifTrue: [
		stream nextPutAll: 'return '].
	    each receiver: (VariableNode new value: '$rec').
	    self visit: each.
	    stream nextPutAll: ';'].
	stream nextPutAll: '})('.
	self visit: aNode receiver.
	stream nextPutAll: ')'
!

visitClassReferenceNode: aNode
	(referencedClasses includes: aNode value) ifFalse: [
		referencedClasses add: aNode value].
	stream nextPutAll: '(smalltalk.', aNode value, ' || ', aNode value, ')'
!

visitDynamicArrayNode: aNode
	stream nextPutAll: '['.
	aNode nodes 
		do: [:each | self visit: each]
		separatedBy: [stream nextPutAll: ','].
	stream nextPutAll: ']'
!

visitDynamicDictionaryNode: aNode
	stream nextPutAll: 'smalltalk.HashedCollection._fromPairs_(['.
		aNode nodes 
			do: [:each | self visit: each]
			separatedBy: [stream nextPutAll: ','].
		stream nextPutAll: '])'
!

visitFailure: aFailure
	self error: aFailure asString
!

visitJSStatementNode: aNode
	stream nextPutAll: aNode source
!

visitMethodNode: aNode
	| str currentSelector | 
	currentSelector := aNode selector asSelector.
	nestedBlocks := 0.
	earlyReturn := false.
	messageSends := #().
	referencedClasses := #().
	unknownVariables := #().
	tempVariables := #().
	argVariables := #().
	stream 
	    nextPutAll: 'smalltalk.method({'; lf;
	    nextPutAll: 'selector: "', aNode selector, '",'; lf.
	stream nextPutAll: 'source: ', self source asJavascript, ',';lf.
	stream nextPutAll: 'fn: function('.
	aNode arguments 
	    do: [:each | 
		argVariables add: each.
		stream nextPutAll: each]
	    separatedBy: [stream nextPutAll: ', '].
	stream 
	    nextPutAll: '){'; lf;
	    nextPutAll: 'var self=this;'; lf.
	str := stream.
	stream := '' writeStream.
	aNode nodes do: [:each |
	    self visit: each].
	earlyReturn ifTrue: [
	    str nextPutAll: 'var $early={};'; lf; nextPutAll: 'try{'].
	str nextPutAll: stream contents.
	stream := str.
	stream 
	    lf; 
	    nextPutAll: 'return self;'.
	earlyReturn ifTrue: [
	    stream lf; nextPutAll: '} catch(e) {if(e===$early)return e[0]; throw e}'].
	stream nextPutAll: '}'.
	stream 
		nextPutAll: ',', String lf, 'messageSends: ';
		nextPutAll: messageSends asJavascript, ','; lf;
          	nextPutAll: 'args: ', argVariables asJavascript, ','; lf;
		nextPutAll: 'referencedClasses: ['.
	referencedClasses 
		do: [:each | stream nextPutAll: each printString]
		separatedBy: [stream nextPutAll: ','].
	stream nextPutAll: ']'.
	stream nextPutAll: '})'
!

visitReturnNode: aNode
	nestedBlocks > 0 ifTrue: [
	    earlyReturn := true].
	nestedBlocks > 0
	    ifTrue: [
		stream
		    nextPutAll: '(function(){throw $early=[']
	    ifFalse: [stream nextPutAll: 'return '].
	aNode nodes do: [:each |
	    self visit: each].
	nestedBlocks > 0 ifTrue: [
	    stream nextPutAll: ']})()']
!

visitSendNode: aNode
        | str receiver superSend inlined |
        str := stream.
        (messageSends includes: aNode selector) ifFalse: [
                messageSends add: aNode selector].
        stream := '' writeStream.
        self visit: aNode receiver.
        superSend := stream contents = 'super'.
        receiver := superSend ifTrue: ['self'] ifFalse: [stream contents].
        stream := str.
	
	self performOptimizations 
		ifTrue: [
			(self inlineLiteral: aNode selector receiverNode: aNode receiver argumentNodes: aNode arguments) ifFalse: [
				(self inline: aNode selector receiver: receiver argumentNodes: aNode arguments)
                			ifTrue: [stream nextPutAll: ' : ', (self send: aNode selector to: '$receiver' arguments: aNode arguments superSend: superSend), ')']
                			ifFalse: [stream nextPutAll: (self send: aNode selector to: receiver arguments: aNode arguments superSend: superSend)]]]
		ifFalse: [stream nextPutAll: (self send: aNode selector to: receiver arguments: aNode arguments superSend: superSend)]
!

visitSequenceNode: aNode
	aNode temps do: [:each || temp |
            temp := self safeVariableNameFor: each.
	    tempVariables add: temp.
	    stream nextPutAll: 'var ', temp, '=nil;'; lf].
	aNode nodes do: [:each |
	    self visit: each.
	    stream nextPutAll: ';']
	    separatedBy: [stream lf]
!

visitValueNode: aNode
	stream nextPutAll: aNode value asJavascript
!

visitVariableNode: aNode
	| varName |
	(self currentClass allInstanceVariableNames includes: aNode value) 
		ifTrue: [stream nextPutAll: 'self[''@', aNode value, ''']']
		ifFalse: [
                  	varName := self safeVariableNameFor: aNode value.
			(self knownVariables includes: varName) 
                  		ifFalse: [
                                  	unknownVariables add: aNode value.
                                  	aNode assigned 
                                  		ifTrue: [stream nextPutAll: varName]
                                  		ifFalse: [stream nextPutAll: '(typeof ', varName, ' == ''undefined'' ? nil : ', varName, ')']]
                  		ifTrue: [
                                  	aNode value = 'thisContext'
                                  		ifTrue: [stream nextPutAll: '(smalltalk.getThisContext())']
                				ifFalse: [stream nextPutAll: varName]]]
! !

FunCodeGenerator class instanceVariableNames: 'performOptimizations'!

!FunCodeGenerator class methodsFor: 'accessing'!

performOptimizations
	^performOptimizations ifNil: [true]
!

performOptimizations: aBoolean
	performOptimizations := aBoolean
! !

AbstractCodeGenerator subclass: #ImpCodeGenerator
	instanceVariableNames: 'stream nestedBlocks earlyReturn currentSelector unknownVariables tempVariables messageSends referencedClasses classReferenced argVariables mutables target lazyVars realVarNames'
	package: 'Compiler-Visitors'!

!ImpCodeGenerator methodsFor: 'accessing'!

argVariables
	^argVariables copy
!

knownVariables
	^self pseudoVariables 
		addAll: self tempVariables;
		addAll: self argVariables;
		yourself
!

tempVariables
	^tempVariables copy
!

unknownVariables
	^unknownVariables copy
! !

!ImpCodeGenerator methodsFor: 'compilation DSL'!

aboutToModifyState
| list old |
	list := mutables.
	mutables := Set new.
	old := self switchTarget: nil.
	list do: [ :each | | value |
		self switchTarget: each.
		self realAssign: (lazyVars at: each)
	].
	self switchTarget: old
!

ifValueWanted: aBlock
	target ifNotNil: aBlock
!

isolated: node
 	^ self visit: node targetBeing: self nextLazyvarName
!

isolatedUse: node
| old |
	old := self switchTarget: self nextLazyvarName.
	self visit: node.
	^self useValueNamed: (self switchTarget: old)
!

lazyAssign: aString dependsOnState: aBoolean
	(lazyVars includesKey: target)
		ifTrue: [ lazyVars at: target put: aString. aBoolean ifTrue: [ mutables add: target ] ]
		ifFalse: [ self realAssign: aString ]
!

lazyAssignExpression: aString
	self lazyAssign: aString dependsOnState: true
!

lazyAssignValue: aString
	self lazyAssign: aString dependsOnState: false
!

makeTargetRealVariable
	(lazyVars includesKey: target) ifTrue: [
		lazyVars removeKey: target.
		lazyVars at: 'assigned ',target put: nil. "<-- only to retain size, it is used in nextLazyvarName"
		realVarNames add: target ].
!

nextLazyvarName
	| name |
	name := '$', lazyVars size asString.
	lazyVars at: name put: name.
	^name
!

nilIfValueWanted
	target ifNotNil: [ self lazyAssignValue: 'nil' ]
!

realAssign: aString
	| closer |
	aString ifNotEmpty: [
		self aboutToModifyState.
		closer := ''.
		self ifValueWanted: [ stream nextPutAll:
			(target = '^' ifTrue: ['return '] ifFalse: [
				target = '!!' ifTrue: [ closer := ']'. 'throw $early=['] ifFalse: [
					target, '=']]) ].
		self makeTargetRealVariable.
		stream nextPutAll: aString, closer, ';', self mylf ]
!

switchTarget: aString
	| old |
	old := target.
	target := aString.
	^old
!

useValueNamed: key
	| val |
	(realVarNames includes: key) ifTrue: [ ^key ].
	mutables remove: key.
	^lazyVars at: key
!

visit: aNode targetBeing: aString
| old |
	old := self switchTarget: aString.
	self visit: aNode.
	^ self switchTarget: old.
! !

!ImpCodeGenerator methodsFor: 'compiling'!

compileNode: aNode
	stream := '' writeStream.
	self visit: aNode.
	^stream contents
! !

!ImpCodeGenerator methodsFor: 'initialization'!

initialize
	super initialize.
	stream := '' writeStream. 
	unknownVariables := #().
	tempVariables := #().
	argVariables := #().
	messageSends := #().
	classReferenced := #().
	mutables := Set new.
	realVarNames := Set new.
	lazyVars := HashedCollection new.
	target := nil
! !

!ImpCodeGenerator methodsFor: 'optimizations'!

checkClass: aClassName for: receiver
	self prvCheckClass: aClassName for: receiver.
	stream nextPutAll: '{'
!

checkClass: aClassName for: receiver includeIf: aBoolean
	self prvCheckClass: aClassName for: receiver.
	stream nextPutAll: (aBoolean ifTrue: ['if(('] ifFalse: ['if(!!(']), (self useValueNamed: receiver), ')) {'
!

inline: aSelector receiver: receiver argumentNodes: aCollection

	"-- Booleans --"

	(aSelector = 'ifFalse:') ifTrue: [
		aCollection first isBlockNode ifTrue: [
			self checkClass: 'Boolean' for: receiver includeIf: false.
			self prvPutAndElse: [ self visit: aCollection first nodes first ].
			self prvPutAndElse: [ self nilIfValueWanted ].
			^true]].

	(aSelector = 'ifTrue:') ifTrue: [
		aCollection first isBlockNode ifTrue: [
			self checkClass: 'Boolean' for: receiver includeIf: true.
			self prvPutAndElse: [ self visit: aCollection first nodes first ].
			self prvPutAndElse: [ self nilIfValueWanted ].
			^true]].

	(aSelector = 'ifTrue:ifFalse:') ifTrue: [
		(aCollection first isBlockNode and: [aCollection second isBlockNode]) ifTrue: [
			self checkClass: 'Boolean' for: receiver includeIf: true.
			self prvPutAndElse: [ self visit: aCollection first nodes first ].
			self prvPutAndElse: [ self visit: aCollection second nodes first ].
			^true]].

	(aSelector = 'ifFalse:ifTrue:') ifTrue: [
		(aCollection first isBlockNode and: [aCollection second isBlockNode]) ifTrue: [
			self checkClass: 'Boolean' for: receiver includeIf: false.
			self prvPutAndElse: [ self visit: aCollection first nodes first ].
			self prvPutAndElse: [ self visit: aCollection second nodes first ].
			^true]].

	"-- Numbers --"

	(aSelector = '<') ifTrue: [ | operand |
		operand := self isolatedUse: aCollection first.
		self checkClass: 'Number' for: receiver.
		self prvPutAndElse: [
			self lazyAssignExpression: '(', (self useValueNamed: receiver), '<', operand, ')' ].
		^{ VerbatimNode new value: operand }].

	(aSelector = '<=') ifTrue: [ | operand |
		operand := self isolatedUse: aCollection first.
		self checkClass: 'Number' for: receiver.
		self prvPutAndElse: [
			self lazyAssignExpression: '(', (self useValueNamed: receiver), '<=', operand, ')' ].
		^{ VerbatimNode new value: operand }].

	(aSelector = '>') ifTrue: [ | operand |
		operand := self isolatedUse: aCollection first.
		self checkClass: 'Number' for: receiver.
		self prvPutAndElse: [
			self lazyAssignExpression: '(', (self useValueNamed: receiver), '>', operand, ')' ].
		^{ VerbatimNode new value: operand }].

	(aSelector = '>=') ifTrue: [ | operand |
		operand := self isolatedUse: aCollection first.
		self checkClass: 'Number' for: receiver.
		self prvPutAndElse: [
			self lazyAssignExpression: '(', (self useValueNamed: receiver), '>=', operand, ')' ].
		^{ VerbatimNode new value: operand }].

        (aSelector = '+') ifTrue: [ | operand |
		operand := self isolatedUse: aCollection first.
		self checkClass: 'Number' for: receiver.
		self prvPutAndElse: [
			self lazyAssignExpression: '(', (self useValueNamed: receiver), '+', operand, ')' ].
		^{ VerbatimNode new value: operand }].

        (aSelector = '-') ifTrue: [ | operand |
		operand := self isolatedUse: aCollection first.
		self checkClass: 'Number' for: receiver.
		self prvPutAndElse: [
			self lazyAssignExpression: '(', (self useValueNamed: receiver), '-', operand, ')' ].
		^{ VerbatimNode new value: operand }].

        (aSelector = '*') ifTrue: [ | operand |
		operand := self isolatedUse: aCollection first.
		self checkClass: 'Number' for: receiver.
		self prvPutAndElse: [
			self lazyAssignExpression: '(', (self useValueNamed: receiver), '*', operand, ')' ].
		^{ VerbatimNode new value: operand }].

        (aSelector = '/') ifTrue: [ | operand |
		operand := self isolatedUse: aCollection first.
		self checkClass: 'Number' for: receiver.
		self prvPutAndElse: [
			self lazyAssignExpression: '(', (self useValueNamed: receiver), '/', operand, ')' ].
		^{ VerbatimNode new value: operand }].

        ^nil
!

inlineLiteral: aSelector receiverNode: anObject argumentNodes: aCollection
        | inlined |
        inlined := false.
 
	"-- BlockClosures --"

	(aSelector = 'whileTrue:') ifTrue: [
          	(anObject isBlockNode and: [aCollection first isBlockNode]) ifTrue: [ | old |
			self prvWhileConditionStatement: 'for(;;){' pre: 'if (!!(' condition: anObject post: ')) {'.
			stream nextPutAll: 'break}', self mylf.
			self prvPutAndClose: [ self visit: aCollection first nodes first targetBeing: nil ].
			inlined := true]].

	(aSelector = 'whileFalse:') ifTrue: [
          	(anObject isBlockNode and: [aCollection first isBlockNode]) ifTrue: [ | old |
			self prvWhileConditionStatement: 'for(;;){' pre: 'if ((' condition: anObject post: ')) {'.
			stream nextPutAll: 'break}', self mylf.
			self prvPutAndClose: [ self visit: aCollection first nodes first targetBeing: nil ].
			inlined := true]].

	(aSelector = 'whileTrue') ifTrue: [
          	anObject isBlockNode ifTrue: [
			self prvWhileConditionStatement: 'do{' pre: '}while((' condition: anObject post: '));', self mylf.
			inlined := true]].

	(aSelector = 'whileFalse') ifTrue: [
          	anObject isBlockNode ifTrue: [
			self prvWhileConditionStatement: 'do{' pre: '}while(!!(' condition: anObject post: '));', self mylf.
			inlined := true]].

	"-- Numbers --"

	(#('+' '-' '*' '/' '<' '<=' '>=' '>') includes: aSelector) ifTrue: [
		(self prvInlineNumberOperator: aSelector on: anObject and: aCollection first) ifTrue: [
			inlined := true]].
                	   
	"-- UndefinedObject --"

	(aSelector = 'ifNil:') ifTrue: [
		aCollection first isBlockNode ifTrue: [ | rcv |
			self aboutToModifyState.
			rcv := self isolatedUse: anObject.
			rcv = 'super' ifTrue: [ rcv := 'self' ].
			self makeTargetRealVariable.
			stream nextPutAll: 'if((', rcv, ') === nil || (', rcv, ') == null) {'.
			self prvPutAndElse: [ self visit: aCollection first nodes first ].
			self prvPutAndClose: [ self lazyAssignValue: rcv ].
			inlined := true]].

	(aSelector = 'ifNotNil:') ifTrue: [
		aCollection first isBlockNode ifTrue: [ | rcv |
			self aboutToModifyState.
			rcv := self isolatedUse: anObject.
			rcv = 'super' ifTrue: [ rcv := 'self' ].
			self makeTargetRealVariable.
			stream nextPutAll: 'if((', rcv, ') !!== nil && (', rcv, ') !!= null) {'.
			self prvPutAndElse: [ self visit: aCollection first nodes first ].
			self prvPutAndClose: [ self lazyAssignValue: rcv ].
			inlined := true]].

	(aSelector = 'ifNil:ifNotNil:') ifTrue: [
		(aCollection first isBlockNode and: [aCollection second isBlockNode]) ifTrue: [ | rcv |
			self aboutToModifyState.
			rcv := self isolatedUse: anObject.
			rcv = 'super' ifTrue: [ rcv := 'self' ].
			self makeTargetRealVariable.
			stream nextPutAll: 'if((', rcv, ') === nil || (', rcv, ') == null) {'.
			self prvPutAndElse: [ self visit: aCollection first nodes first ].
			self prvPutAndClose: [ self visit: aCollection second nodes first ].
			inlined := true]].

	(aSelector = 'ifNotNil:ifNil:') ifTrue: [
		(aCollection first isBlockNode and: [aCollection second isBlockNode]) ifTrue: [ | rcv |
			self aboutToModifyState.
			rcv := self isolatedUse: anObject.
			rcv = 'super' ifTrue: [ rcv := 'self' ].
			self makeTargetRealVariable.
			stream nextPutAll: 'if((', rcv, ') !!== nil && (', rcv, ') !!= null) {'.
			self prvPutAndElse: [ self visit: aCollection first nodes first ].
			self prvPutAndClose: [ self visit: aCollection second nodes first ].
			inlined := true]].

	(aSelector = 'isNil') ifTrue: [ | rcv |
		rcv := self isolatedUse: anObject.
		rcv = 'super' ifTrue: [ rcv := 'self' ].
		self lazyAssignValue: '((', rcv, ') === nil || (', rcv, ') == null)'.
		inlined := true].

	(aSelector = 'notNil') ifTrue: [ | rcv |
		rcv := self isolatedUse: anObject.
		rcv = 'super' ifTrue: [ rcv := 'self' ].
		self lazyAssignValue: '((', rcv, ') !!== nil && (', rcv, ') !!= null)'.
		inlined := true].

        ^inlined
!

isNode: aNode ofClass: aClass
	^aNode isValueNode and: [
          	aNode value class = aClass or: [
          		aNode value = 'self' and: [self currentClass = aClass]]]
!

prvCheckClass: aClassName for: receiver
	self makeTargetRealVariable.
	self aboutToModifyState.
        stream nextPutAll: 'if((', (self useValueNamed: receiver), ').klass === smalltalk.', aClassName, ') '
!

prvInlineNumberOperator: aSelector on: receiverNode and: operandNode
	(aSelector = aSelector) ifTrue: [
		(self isNode: receiverNode ofClass: Number) ifTrue: [
			| rcv operand |
			rcv := self isolated: receiverNode.
			operand := self isolated: operandNode.
			self lazyAssignValue: ((self useValueNamed: rcv), aSelector, (self useValueNamed: operand)).
			^true]].
	^false
!

prvWhileConditionStatement: stmtString pre: preString condition: anObject post: postString
	| x |
	stream nextPutAll: stmtString.
	x := self isolatedUse: anObject nodes first.
	x ifEmpty: [ x := '"should not reach - receiver includes ^"' ].
	stream nextPutAll: preString, x, postString.
	self nilIfValueWanted
! !

!ImpCodeGenerator methodsFor: 'output'!

mylf
	^String lf, ((Array new: nestedBlocks+2)  join: String tab)
!

prvPutAndClose: aBlock

	aBlock value.
	stream nextPutAll: '}', self mylf
!

prvPutAndElse: aBlock

	aBlock value.
	stream nextPutAll: '} else {'
!

putTemps: temps
    temps ifNotEmpty: [
	stream nextPutAll: 'var '.
	temps do: [:each | | temp |
            temp := self safeVariableNameFor: each.
	    tempVariables add: temp.
	    stream nextPutAll: temp, '=nil'] separatedBy: [ stream nextPutAll: ',' ].
	stream nextPutAll: ';', self mylf
    ]
! !

!ImpCodeGenerator methodsFor: 'testing'!

assert: aBoolean
	aBoolean ifFalse: [ self error: 'assertion failed' ]
!

performOptimizations
	^self class performOptimizations
! !

!ImpCodeGenerator methodsFor: 'visiting'!

send: aSelector to: aReceiver arguments: aCollection superSend: aBoolean
	| args |
	args := self isolated: (DynamicArrayNode new nodes: aCollection; yourself).
	self lazyAssignExpression: (String streamContents: [ :str |
		str nextPutAll: 'smalltalk.send('.
		str nextPutAll: (self useValueNamed: aReceiver).
		str nextPutAll: ', "', aSelector asSelector, '", '.
		str nextPutAll: (self useValueNamed: args).
		aBoolean ifTrue: [
			str nextPutAll: ', smalltalk.', (self classNameFor: self currentClass superclass)].
		str nextPutAll: ')'
	])
!

sequenceOfNodes: nodes temps: temps
	nodes isEmpty
		ifFalse: [ | old index |
			self putTemps: temps.
			old :=self switchTarget: nil.
			index := 0.
			nodes do: [:each |
				index := index + 1.
				index = nodes size ifTrue: [ self switchTarget: old ].
			self visit: each ]]
		ifTrue: [ self nilIfValueWanted ]
!

visit: aNode
	aNode accept: self
!

visitAssignmentNode: aNode
| olds oldt |
	olds := stream.
	stream := '' writeStream.
	oldt := self switchTarget: self nextLazyvarName.
	self visit: aNode left.
	self assert: (lazyVars at: target) ~= target.
	self switchTarget: (self useValueNamed: (self switchTarget: nil)).
	self assert: (lazyVars includesKey: target) not.
	stream := olds.
	self visit: aNode right.
	olds := self switchTarget: oldt.
	self ifValueWanted: [ self lazyAssignExpression: olds ]
!

visitBlockNode: aNode
| oldt olds oldm |
	self assert: aNode nodes size = 1.
	oldt := self switchTarget: '^'.
	olds := stream.
	stream := '' writeStream.
	stream nextPutAll: '(function('.
	aNode parameters 
	    do: [:each |
		tempVariables add: each.
		stream nextPutAll: each]
	    separatedBy: [stream nextPutAll: ', '].
	stream nextPutAll: '){'.
	nestedBlocks := nestedBlocks + 1.
	oldm := mutables.
	mutables := Set new.
	self visit: aNode nodes first.
	self assert: mutables isEmpty.
	mutables := oldm.
	nestedBlocks := nestedBlocks - 1.
	stream nextPutAll: '})'.
	self switchTarget: oldt.
	oldt := stream contents.
	stream := olds.
	self lazyAssignExpression: oldt
!

visitBlockSequenceNode: aNode
	self sequenceOfNodes: aNode nodes temps: aNode temps
!

visitCascadeNode: aNode
	| rcv |
	rcv := self isolated: aNode receiver.
	self aboutToModifyState.
	rcv := self useValueNamed: rcv.
	aNode nodes do: [:each |
		each receiver: (VerbatimNode new value: rcv) ].
	self sequenceOfNodes: aNode nodes temps: #()
!

visitClassReferenceNode: aNode
	(referencedClasses includes: aNode value) ifFalse: [
		referencedClasses add: aNode value].
	self lazyAssignExpression: '(smalltalk.', aNode value, ' || ', aNode value, ')'
!

visitDynamicArrayNode: aNode
	| args |
	args :=aNode nodes collect: [ :node | self isolated: node ].
	self lazyAssignValue: (String streamContents: [ :str |
		str nextPutAll: '['.
		args
	    		do: [:each | str nextPutAll: (self useValueNamed: each) ]
	    		separatedBy: [str nextPutAll: ', '].
                str nextPutAll: ']'
	])
!

visitDynamicDictionaryNode: aNode
	| elements |
	elements := self isolated: (DynamicArrayNode new nodes: aNode nodes; yourself).
	self lazyAssignValue: 'smalltalk.HashedCollection._fromPairs_(', (self useValueNamed: elements), ')'
!

visitFailure: aFailure
	self error: aFailure asString
!

visitJSStatementNode: aNode
	self aboutToModifyState.
	stream nextPutAll: ';', (aNode source replace: '>>' with: '>'), ';', self mylf
!

visitMethodNode: aNode
	| str currentSelector | 
	currentSelector := aNode selector asSelector.
	nestedBlocks := 0.
	earlyReturn := false.
	messageSends := #().
	referencedClasses := #().
	unknownVariables := #().
	tempVariables := #().
	argVariables := #().
	lazyVars := HashedCollection new.
	mutables := Set new.
	realVarNames := Set new.
	stream 
	    nextPutAll: 'smalltalk.method({'; lf;
	    nextPutAll: 'selector: "', aNode selector, '",'; lf.
	stream nextPutAll: 'source: ', self source asJavascript, ',';lf.
	stream nextPutAll: 'fn: function('.
	aNode arguments 
	    do: [:each | 
		argVariables add: each.
		stream nextPutAll: each]
	    separatedBy: [stream nextPutAll: ', '].
	stream 
	    nextPutAll: '){var self=this;', self mylf.
	str := stream.
	stream := '' writeStream.
	self switchTarget: nil.
	self assert: aNode nodes size = 1.
	self visit: aNode nodes first.
	realVarNames ifNotEmpty: [ str nextPutAll: 'var ', (realVarNames asArray join: ','), ';', self mylf ].
	earlyReturn ifTrue: [
	    str nextPutAll: 'var $early={}; try{', self mylf].
	str nextPutAll: stream contents.
	stream := str.
	(aNode nodes first nodes notEmpty and: [ |checker|
	    checker := ReturnNodeChecker new.
	    checker visit: aNode nodes first nodes last.
	    checker wasReturnNode]) ifFalse: [ self switchTarget: '^'. self lazyAssignValue: 'self'. self switchTarget: nil ].
	earlyReturn ifTrue: [
	    stream nextPutAll: '} catch(e) {if(e===$early) return e[0]; throw e}'].
	stream nextPutAll: '}'.
	stream 
		nextPutAll: ',', String lf, 'messageSends: ';
		nextPutAll: messageSends asJavascript, ','; lf;
          	nextPutAll: 'args: ', argVariables asJavascript, ','; lf;
		nextPutAll: 'referencedClasses: ['.
	referencedClasses 
		do: [:each | stream nextPutAll: each printString]
		separatedBy: [stream nextPutAll: ','].
	stream nextPutAll: ']'.
	stream nextPutAll: '})'.
	self assert: mutables isEmpty
!

visitReturnNode: aNode
	self assert: aNode nodes size = 1.
	nestedBlocks > 0 ifTrue: [
	    earlyReturn := true].
	self
		visit: aNode nodes first
		targetBeing: (nestedBlocks > 0 ifTrue: ['!!'] ifFalse: ['^']).
	self lazyAssignValue: ''
!

visitSendNode: aNode
        | receiver superSend rcv |
        (messageSends includes: aNode selector) ifFalse: [
                messageSends add: aNode selector].
	
	self performOptimizations 
		ifTrue: [
			(self inlineLiteral: aNode selector receiverNode: aNode receiver argumentNodes: aNode arguments) ifTrue: [ ^self ].
		].

	rcv := self isolated: aNode receiver.
        superSend := (lazyVars at: rcv ifAbsent: []) = 'super'.
        superSend ifTrue: [ mutables remove: rcv. lazyVars at: rcv put: 'self' ].

	self performOptimizations 
		ifTrue: [ | inline |
			inline := self inline: aNode selector receiver: rcv argumentNodes: aNode arguments.
			inline ifNotNil: [ | args |
				args := inline = true ifTrue: [ aNode arguments ] ifFalse: [ inline ].
				self prvPutAndClose: [ self send: aNode selector to: rcv arguments: args superSend: superSend ].
				^self ]].
	self send: aNode selector to: rcv arguments: aNode arguments superSend: superSend
!

visitSequenceNode: aNode
	aNode nodes isEmpty ifFalse: [
		self sequenceOfNodes: aNode nodes temps: aNode temps ]
!

visitValueNode: aNode
	self lazyAssignValue: aNode value asJavascript
!

visitVariableNode: aNode
	| varName |
	(self currentClass allInstanceVariableNames includes: aNode value) 
		ifTrue: [self lazyAssignExpression: 'self[''@', aNode value, ''']']
		ifFalse: [
                  	varName := self safeVariableNameFor: aNode value.
			(self knownVariables includes: varName) 
                  		ifFalse: [
                                  	unknownVariables add: aNode value.
                                  	aNode assigned 
                                  		ifTrue: [self lazyAssignExpression: varName]
                                  		ifFalse: [self lazyAssignExpression: '(typeof ', varName, ' == ''undefined'' ? nil : ', varName, ')']]
                  		ifTrue: [
                                  	aNode value = 'thisContext'
                                  		ifTrue: [self lazyAssignExpression: '(smalltalk.getThisContext())']
                				ifFalse: [(self pseudoVariables includes: varName)
							ifTrue: [ self lazyAssignValue: varName ]
							ifFalse: [ self lazyAssignExpression: varName]]]]
!

visitVerbatimNode: aNode
	self lazyAssignValue: aNode value
! !

ImpCodeGenerator class instanceVariableNames: 'performOptimizations'!

!ImpCodeGenerator class methodsFor: 'accessing'!

performOptimizations
	^performOptimizations ifNil: [true]
!

performOptimizations: aBoolean
	performOptimizations := aBoolean
! !

NodeVisitor subclass: #ReturnNodeChecker
	instanceVariableNames: 'wasReturnNode'
	package: 'Compiler-Visitors'!

!ReturnNodeChecker methodsFor: 'accessing'!

wasReturnNode
	^wasReturnNode
! !

!ReturnNodeChecker methodsFor: 'initializing'!

initialize
	wasReturnNode := false
! !

!ReturnNodeChecker methodsFor: 'visiting'!

visitReturnNode: aNode
	wasReturnNode := true
! !

