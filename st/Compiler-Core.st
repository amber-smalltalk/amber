Smalltalk current createPackage: 'Compiler-Core' properties: #{}!
Object subclass: #Compiler
	instanceVariableNames: 'currentClass source unknownVariables codeGeneratorClass'
	package: 'Compiler-Core'!

!Compiler methodsFor: 'accessing'!

codeGeneratorClass
	^codeGeneratorClass ifNil: [FunCodeGenerator]
!

codeGeneratorClass: aClass
	codeGeneratorClass := aClass
!

currentClass
	^currentClass
!

currentClass: aClass
	currentClass := aClass
!

source
	^source ifNil: ['']
!

source: aString
	source := aString
!

unknownVariables
	^unknownVariables
!

unknownVariables: aCollection
	unknownVariables := aCollection
! !

!Compiler methodsFor: 'compiling'!

compile: aString
	^self compileNode: (self parse: aString)
!

compile: aString forClass: aClass
	self currentClass: aClass.
	self source: aString.
	^self compile: aString
!

compileExpression: aString
	self currentClass: DoIt.
	self source: 'doIt ^[', aString, '] value'.
	^self compileNode: (self parse: self source)
!

compileNode: aNode
	| generator result |
	generator := self codeGeneratorClass new.
	generator
		source: self source;
		currentClass: self currentClass.
	result := generator compileNode: aNode.
	self unknownVariables: #().
	^result
!

eval: aString
	<return eval(aString)>
!

evaluateExpression: aString
	"Unlike #eval: evaluate a Smalltalk expression and answer the returned object"
	| result |
	DoIt addCompiledMethod: (self eval: (self compileExpression: aString)).
	result := DoIt new doIt.
	DoIt removeCompiledMethod: (DoIt methodDictionary at: 'doIt').
	^result
!

parse: aString
    ^Smalltalk current parse: aString
!

parseExpression: aString
    ^self parse: 'doIt ^[', aString, '] value'
!

recompile: aClass
	aClass methodDictionary do: [:each |
		self install: each source forClass: aClass category: each category].
	self setupClass: aClass.
	aClass isMetaclass ifFalse: [self recompile: aClass class]
!

recompileAll
	Smalltalk current classes do: [:each |
		Transcript show: each; cr.
		[self recompile: each] valueWithTimeout: 100]
!

setupClass: aClass
	<smalltalk.init(aClass)>
! !

!Compiler class methodsFor: 'compiling'!

recompile: aClass
	self new recompile: aClass
!

recompileAll
	Smalltalk current classes do: [:each |
		self recompile: each]
! !

Object subclass: #DoIt
	instanceVariableNames: ''
	package: 'Compiler-Core'!

Object subclass: #JSStream
	instanceVariableNames: 'stream'
	package: 'Compiler-Core'!

!JSStream methodsFor: 'accessing'!

contents
	^ stream contents
! !

!JSStream methodsFor: 'initialization'!

initialize
	super initialize.
	stream := '' writeStream.
! !

!JSStream methodsFor: 'streaming'!

lf
	stream lf
!

nextPut: aString
	stream nextPut: aString
!

nextPutAll: aString
	stream nextPutAll: aString
!

nextPutAssignment: varInstruction to: valueInstruction
	varInstruction emitOn: self.
	stream nextPutAll: '='.
	valueInstruction emitOn: self
!

nextPutClosureWith: aBlock arguments: anArray
	stream nextPutAll: '(function('.
	anArray 
		do: [ :each | stream nextPutAll: each ]
		separatedBy: [ stream nextPut: ',' ].
	stream nextPutAll: '){'; lf.
	aBlock value.
	stream nextPutAll: '})'
!

nextPutFunctionWith: aBlock arguments: anArray
	stream nextPutAll: 'fn: function('.
	anArray 
		do: [ :each | stream nextPutAll: each ]
		separatedBy: [ stream nextPut: ',' ].
	stream nextPutAll: '){'; lf.
	self nextPutVar: '$return'.
	stream nextPutAll: 'var self=this;'; lf.
	aBlock value.
	stream nextPutAll: 'return $return || self;}'
!

nextPutMethodDeclaration: aMethod with: aBlock
	stream 
		nextPutAll: 'smalltalk.method({'; lf;
		nextPutAll: 'selector: "', aMethod selector, '",'; lf;
		nextPutAll: 'source: ', aMethod source asJavascript, ',';lf.
	aBlock value.
	stream 
		nextPutAll: ',', String lf, 'messageSends: ';
		nextPutAll: aMethod messageSends asArray asJavascript, ','; lf;
          	nextPutAll: 'args: ', (aMethod arguments collect: [ :each | each value ]) asArray asJavascript, ','; lf;
		nextPutAll: 'referencedClasses: ['.
	aMethod classReferences 
		do: [:each | stream nextPutAll: each asJavascript]
		separatedBy: [stream nextPutAll: ','].
	stream 
		nextPutAll: ']';
		nextPutAll: '})'
!

nextPutNonLocalReturnHandlingWith: aBlock
	stream 
		nextPutAll: 'var $early={};'; lf;
		nextPutAll: 'try {'; lf.
	aBlock value.
	stream 
		nextPutAll: '}'; lf;
		nextPutAll: 'catch(e) {if(e===$early)return e[0]; throw e}'; lf
!

nextPutNonLocalReturnWith: aBlock
	stream nextPutAll: '(function(){throw $early=['.
	aBlock value.
	stream nextPutAll: ']})()'
!

nextPutReturnWith: aBlock
	stream nextPutAll: '$return='.
	aBlock value
!

nextPutSendTo: receiver selector: selector arguments: arguments
	stream nextPutAll: 'smalltalk.send('.
	receiver emitOn: self. 
	stream nextPutAll: ',"', selector asSelector, '",['.
	arguments 
		do: [ :each | each emitOn: self ]
		separatedBy: [ stream nextPutAll: ',' ].
	stream nextPutAll: '])'
!

nextPutSequenceWith: aBlock
	stream 
		nextPutAll: 'switch(smalltalk.thisContext.pc){'; lf.
	aBlock value.
	stream 
		nextPutAll: '};'; lf
!

nextPutStatement: anInteger with: aBlock
	stream 
		nextPutAll: 'case ', anInteger asString, ':'; lf.
	aBlock value.
	stream 
		nextPutAll: ';'; lf;
		nextPutAll: 'smalltalk.thisContext.pc=', (anInteger + 1) asString, ';'; lf
!

nextPutVar: aString
	stream nextPutAll: 'var ', aString, ';'; lf
!

nextPutVars: aCollection
	stream nextPutAll: 'var '.
	aCollection 
		do: [ :each | stream nextPutAll: each ]
		separatedBy: [ stream nextPutAll: ',' ].
	stream nextPutAll: ';'; lf
! !

Object subclass: #NodeVisitor
	instanceVariableNames: ''
	package: 'Compiler-Core'!

!NodeVisitor methodsFor: 'visiting'!

visit: aNode
	aNode accept: self
!

visitAll: aCollection
	aCollection do: [ :each | self visit: each ]
!

visitAssignmentNode: aNode
	self visitNode: aNode
!

visitBlockNode: aNode
	self visitNode: aNode
!

visitBlockSequenceNode: aNode
	self visitSequenceNode: aNode
!

visitCascadeNode: aNode
	self visitNode: aNode
!

visitClassReferenceNode: aNode
	self visitNode: aNode
!

visitDynamicArrayNode: aNode
	self visitNode: aNode
!

visitDynamicDictionaryNode: aNode
	self visitNode: aNode
!

visitJSStatementNode: aNode
	self visitNode: aNode
!

visitMethodNode: aNode
	self visitNode: aNode
!

visitNode: aNode
	aNode nodes do: [ :each | self visit: each ]
!

visitReturnNode: aNode
	self visitNode: aNode
!

visitSendNode: aNode
	self visitNode: aNode
!

visitSequenceNode: aNode
	self visitNode: aNode
!

visitValueNode: aNode
	self visitNode: aNode
!

visitVariableNode: aNode
	self visitNode: aNode
! !

