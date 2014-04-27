Smalltalk createPackage: 'Compiler-Core'!
Object subclass: #AbstractCodeGenerator
	instanceVariableNames: 'currentClass source'
	package: 'Compiler-Core'!
!AbstractCodeGenerator commentStamp!
I am the abstract super class of all code generators and provide their common API.!

!AbstractCodeGenerator methodsFor: 'accessing'!

classNameFor: aClass
	^ aClass isMetaclass
		ifTrue: [ aClass instanceClass name, '.klass' ]
		ifFalse: [
		aClass isNil
			ifTrue: [ 'nil' ]
			ifFalse: [ aClass name ]]
!

currentClass
	^ currentClass
!

currentClass: aClass
	currentClass := aClass
!

pseudoVariables
	^ Smalltalk pseudoVariableNames
!

source
	^ source ifNil: [ '' ]
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
	package: 'Compiler-Core'!
!CodeGenerator commentStamp!
I am a basic code generator. I generate a valid JavaScript output, but no not perform any inlining.
See `InliningCodeGenerator` for an optimized JavaScript code generation.!

!CodeGenerator methodsFor: 'compiling'!

compileNode: aNode
	| ir stream |
	self semanticAnalyzer visit: aNode.
	ir := self translator visit: aNode.
	^ self irTranslator
		currentClass: self currentClass;
		visit: ir;
		contents
!

irTranslator
	^ IRJSTranslator new
!

semanticAnalyzer
	^ SemanticAnalyzer on: self currentClass
!

translator
	^ IRASTTranslator new
		source: self source;
		theClass: self currentClass;
		yourself
! !

Object subclass: #Compiler
	instanceVariableNames: 'currentClass source unknownVariables codeGeneratorClass'
	package: 'Compiler-Core'!
!Compiler commentStamp!
I provide the public interface for compiling Amber source code into JavaScript.

The code generator used to produce JavaScript can be plugged with `#codeGeneratorClass`.
The default code generator is an instance of `InlinedCodeGenerator`!

!Compiler methodsFor: 'accessing'!

codeGeneratorClass
	^ codeGeneratorClass ifNil: [ InliningCodeGenerator ]
!

codeGeneratorClass: aClass
	codeGeneratorClass := aClass
!

currentClass
	^ currentClass
!

currentClass: aClass
	currentClass := aClass
!

source
	^ source ifNil: [ '' ]
!

source: aString
	source := aString
!

unknownVariables
	^ unknownVariables
!

unknownVariables: aCollection
	unknownVariables := aCollection
! !

!Compiler methodsFor: 'compiling'!

compile: aString
	^ self compileNode: (self parse: aString)
!

compile: aString forClass: aClass
	self currentClass: aClass.
	self source: aString.
	^ self compile: aString
!

compileExpression: aString
	self currentClass: DoIt.
	self source: 'doIt ^ [ ', aString, ' ] value'.
	^ self compileNode: (self parse: self source)
!

compileExpression: aString on: anObject
	self currentClass: anObject class.
	self source: 'xxxDoIt ^ [ ', aString, ' ] value'.
	^ self compileNode: (self parse: self source)
!

compileNode: aNode
	| generator result |
	generator := self codeGeneratorClass new.
	generator
		source: self source;
		currentClass: self currentClass.
	result := generator compileNode: aNode.
	self unknownVariables: #().
	^ result
!

eval: aString
	<return eval(aString)>
!

evaluateExpression: aString
	"Unlike #eval: evaluate a Smalltalk expression and answer the returned object"
	^ self evaluateExpression: aString on: DoIt new
!

evaluateExpression: aString on: anObject
	"Unlike #eval: evaluate a Smalltalk expression with anObject as the receiver and answer the returned object"
	| result method |
	method := self eval: (self compileExpression: aString on: anObject).
	method protocol: 'xxxDoIt'.
	anObject class addCompiledMethod: method.
	result := anObject xxxDoIt.
	anObject class removeCompiledMethod: method.
	^ result
!

install: aString forClass: aBehavior protocol: anotherString
	^ ClassBuilder new
		installMethod: (self eval: (self compile: aString forClass: aBehavior))
		forClass: aBehavior
		protocol: anotherString
!

parse: aString
	^ Smalltalk parse: aString
!

parseExpression: aString
	^ self parse: 'doIt ^ [ ', aString, ' ] value'
!

recompile: aClass
	aClass methodDictionary values
		do: [ :each | 
			self 
				install: each source 
				forClass: aClass 
				protocol: each protocol ]
		displayingProgress: 'Recompiling ', aClass name.
	aClass isMetaclass ifFalse: [ self recompile: aClass class ]
!

recompileAll
	Smalltalk classes 
		do: [ :each | self recompile: each ]
		displayingProgress: 'Compiling all classes...'
! !

!Compiler class methodsFor: 'compiling'!

recompile: aClass
	self new recompile: aClass
!

recompileAll
	Smalltalk classes do: [ :each |
		self recompile: each ]
! !

Object subclass: #DoIt
	instanceVariableNames: ''
	package: 'Compiler-Core'!
!DoIt commentStamp!
`DoIt` is the class used to compile and evaluate expressions. See `Compiler >> evaluateExpression:`.!

InterfacingObject subclass: #Evaluator
	instanceVariableNames: ''
	package: 'Compiler-Core'!
!Evaluator commentStamp!
I evaluate code against a receiver, dispatching #evaluate:on: to the receiver.!

!Evaluator methodsFor: 'evaluating'!

evaluate: aString context: aContext
	"Similar to #evaluate:for:, with the following differences:
	- instead of compiling and running `aString`, `aString` is interpreted using an `ASTInterpreter`
	- instead of evaluating against a receiver, evaluate in the context of `aContext`"

	| compiler ast |
	
	compiler := Compiler new.
	[ ast := compiler parseExpression: aString ] 
		on: Error 
		do: [ :ex | ^ self alert: ex messageText ].
		
	(AISemanticAnalyzer on: aContext receiver class)
		context: aContext;
		visit: ast.

	^ aContext evaluateNode: ast
!

evaluate: aString for: anObject
	^ anObject evaluate: aString on: self
!

evaluate: aString receiver: anObject
	| compiler |
	
	compiler := Compiler new.
	[ compiler parseExpression: aString ] 
		on: Error 
		do: [ :ex | ^ self alert: ex messageText ].

	^ compiler evaluateExpression: aString on: anObject
! !

!Evaluator class methodsFor: 'instance creation'!

evaluate: aString for: anObject
	^ self new evaluate: aString for: anObject
! !

Object subclass: #NodeVisitor
	instanceVariableNames: ''
	package: 'Compiler-Core'!
!NodeVisitor commentStamp!
I am the abstract super class of all AST node visitors.!

!NodeVisitor methodsFor: 'visiting'!

visit: aNode
	^ aNode accept: self
!

visitAll: aCollection
	^ aCollection collect: [ :each | self visit: each ]
!

visitAssignmentNode: aNode
	^ self visitNode: aNode
!

visitBlockNode: aNode
	^ self visitNode: aNode
!

visitBlockSequenceNode: aNode
	^ self visitSequenceNode: aNode
!

visitCascadeNode: aNode
	^ self visitNode: aNode
!

visitDynamicArrayNode: aNode
	^ self visitNode: aNode
!

visitDynamicDictionaryNode: aNode
	^ self visitNode: aNode
!

visitJSStatementNode: aNode
	^ self visitNode: aNode
!

visitMethodNode: aNode
	^ self visitNode: aNode
!

visitNode: aNode
	^ self visitAll: aNode nodes
!

visitReturnNode: aNode
	^ self visitNode: aNode
!

visitSendNode: aNode
	^ self visitNode: aNode
!

visitSequenceNode: aNode
	^ self visitNode: aNode
!

visitValueNode: aNode
	^ self visitNode: aNode
!

visitVariableNode: aNode
	^ self visitNode: aNode
! !

!String methodsFor: '*Compiler-Core'!

asVariableName
	^ (Smalltalk reservedWords includes: self)
		ifTrue: [ self, '_' ]
		ifFalse: [ self ]
! !

