Smalltalk current createPackage: 'Compiler-Core' properties: #{}!
Object subclass: #Compiler
	instanceVariableNames: 'currentClass source unknownVariables codeGeneratorClass'
	package: 'Compiler-Core'!
!Compiler commentStamp!
I provide the public interface for compiling Amber source code into JavaScript.

The code generator used to produce JavaScript can be plugged with `#codeGeneratorClass`. 
The default code generator is an instance of `InlinedCodeGenerator`!

!Compiler methodsFor: 'accessing'!

codeGeneratorClass
	^codeGeneratorClass ifNil: [InliningCodeGenerator]
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

install: aString forClass: aBehavior category: anotherString
   	^ ClassBuilder new
    	installMethod: (self eval: (self compile: aString forClass: aBehavior))
        forClass: aBehavior
        category: anotherString
!

parse: aString
    ^Smalltalk current parse: aString
!

parseExpression: aString
    ^self parse: 'doIt ^[', aString, '] value'
!

recompile: aClass
	aClass methodDictionary do: [:each |
		console log: aClass name, ' >> ', each selector.
		self install: each source forClass: aClass category: each category].
	"self setupClass: aClass."
	aClass isMetaclass ifFalse: [self recompile: aClass class]
!

recompileAll
	Smalltalk current classes do: [:each |
		Transcript show: each; cr.
		[self recompile: each] valueWithTimeout: 100]
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
!DoIt commentStamp!
`DoIt` is the class used to compile and evaluate expressions. See `Compiler >> evaluateExpression:`.!

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

visitClassReferenceNode: aNode
	^ self visitVariableNode: aNode
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

NodeVisitor subclass: #AbstractCodeGenerator
	instanceVariableNames: 'currentClass source'
	package: 'Compiler-Core'!
!AbstractCodeGenerator commentStamp!
I am the abstract super class of all code generators and provide their common API.!

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

