Smalltalk current createPackage: 'Compiler' properties: #{}!
Object subclass: #ChunkParser
	instanceVariableNames: 'stream'
	package:'Compiler'!

!ChunkParser methodsFor: '*Compiler'!

stream: aStream
	stream := aStream
! !

!ChunkParser methodsFor: '*Compiler'!

nextChunk
	"The chunk format (Smalltalk Interchange Format or Fileout format)
	is a trivial format but can be a bit tricky to understand:
		- Uses the exclamation mark as delimiter of chunks.
		- Inside a chunk a normal exclamation mark must be doubled.
		- A non empty chunk must be a valid Smalltalk expression.
		- A chunk on top level with a preceding empty chunk is an instruction chunk:
			- The object created by the expression then takes over reading chunks.

	This metod returns next chunk as a String (trimmed), empty String (all whitespace) or nil."

	| char result chunk |
	result := '' writeStream.
        [char := stream next.
        char notNil] whileTrue: [
                 char = '!!' ifTrue: [
                         stream peek = '!!'
                                ifTrue: [stream next "skipping the escape double"]
                                ifFalse: [^result contents trimBoth  "chunk end marker found"]].
                 result nextPut: char].
	^nil "a chunk needs to end with !!"
! !

!ChunkParser class methodsFor: '*Compiler'!

on: aStream
	^self new stream: aStream
! !

Object subclass: #Exporter
	instanceVariableNames: ''
	package:'Compiler'!

!Exporter methodsFor: '*Compiler'!

exportAll
    "Export all packages in the system."

    ^String streamContents: [:stream |
    	Smalltalk current packages do: [:pkg |
		stream nextPutAll: (self exportPackage: pkg name)]]
!

exportClass: aClass
	"Export a single class. Subclasses override these methods."

	^String streamContents: [:stream |
		self exportDefinitionOf: aClass on: stream.
		self exportMethodsOf: aClass on: stream.
		self exportMetaDefinitionOf: aClass on: stream.
		self exportMethodsOf: aClass class on: stream]
!

exportPackage: packageName
	"Export a given package by name."

	| package |
	^String streamContents: [:stream |
                package := Smalltalk current packageAt: packageName.
                self exportPackageDefinitionOf: package on: stream.

		"Export classes in dependency order.
		Update (issue #171): Remove duplicates for export"
	    	package sortedClasses asSet do: [:each |
                        stream nextPutAll: (self exportClass: each)].
		self exportPackageExtensionsOf: package on: stream]
! !

!Exporter methodsFor: '*Compiler'!

classNameFor: aClass
	^aClass isMetaclass
	    ifTrue: [aClass instanceClass name, '.klass']
	    ifFalse: [
		aClass isNil
		    ifTrue: ['nil']
		    ifFalse: [aClass name]]
!

exportDefinitionOf: aClass on: aStream
	aStream 
	    nextPutAll: 'smalltalk.addClass(';
	    nextPutAll: '''', (self classNameFor: aClass), ''', ';
	    nextPutAll: 'smalltalk.', (self classNameFor: aClass superclass);
	    nextPutAll: ', ['.
	aClass instanceVariableNames 
	    do: [:each | aStream nextPutAll: '''', each, '''']
	    separatedBy: [aStream nextPutAll: ', '].
	aStream	
	    nextPutAll: '], ''';
	    nextPutAll: aClass category, '''';
	    nextPutAll: ');'.
	aClass comment notEmpty ifTrue: [
	    aStream 
	    	lf;
		nextPutAll: 'smalltalk.';
		nextPutAll: (self classNameFor: aClass);
		nextPutAll: '.comment=';
		nextPutAll: aClass comment asJavascript].
	aStream lf
!

exportMetaDefinitionOf: aClass on: aStream
	aClass class instanceVariableNames isEmpty ifFalse: [
	    aStream 
		nextPutAll: 'smalltalk.', (self classNameFor: aClass class);
		nextPutAll: '.iVarNames = ['.
	    aClass class instanceVariableNames
		do: [:each | aStream nextPutAll: '''', each, '''']
		separatedBy: [aStream nextPutAll: ','].
	    aStream nextPutAll: '];', String lf]
!

exportMethod: aMethod of: aClass on: aStream
	aStream 
		nextPutAll: 'smalltalk.addMethod(';lf;
		nextPutAll: aMethod selector asSelector asJavascript, ',';lf;
		nextPutAll: 'smalltalk.method({';lf;
		nextPutAll: 'selector: ', aMethod selector asJavascript, ',';lf;
		nextPutAll: 'category: ''', aMethod category, ''',';lf;
		nextPutAll: 'fn: ', aMethod fn compiledSource, ',';lf;
		nextPutAll: 'args: ', aMethod arguments asJavascript, ','; lf;
		nextPutAll: 'source: ', aMethod source asJavascript, ',';lf;
		nextPutAll: 'messageSends: ', aMethod messageSends asJavascript, ',';lf;
		nextPutAll: 'referencedClasses: ', aMethod referencedClasses asJavascript.
	aStream
		lf;
		nextPutAll: '}),';lf;
		nextPutAll: 'smalltalk.', (self classNameFor: aClass);
		nextPutAll: ');';lf;lf
!

exportMethodsOf: aClass on: aStream
	"Issue #143: sort methods alphabetically"

	((aClass methodDictionary values) sorted: [:a :b | a selector <= b selector]) do: [:each |
		(each category match: '^\*') ifFalse: [
			self exportMethod: each of: aClass on: aStream]].
	aStream lf
!

exportPackageDefinitionOf: package on: aStream
	aStream 
	    nextPutAll: 'smalltalk.addPackage(';
	    nextPutAll: '''', package name, ''', ', package propertiesAsJSON , ');'.
	aStream lf
!

exportPackageExtensionsOf: package on: aStream
	"Issue #143: sort classes and methods alphabetically"

	| name |
	name := package name.
	(Package sortedClasses: Smalltalk current classes) do: [:each |
		{each. each class} do: [:aClass | 
			((aClass methodDictionary values) sorted: [:a :b | a selector <= b selector]) do: [:method |
				(method category match: '^\*', name) ifTrue: [
					self exportMethod: method of: aClass on: aStream ]]]]
! !

Exporter subclass: #ChunkExporter
	instanceVariableNames: ''
	package:'Compiler'!

!ChunkExporter methodsFor: '*Compiler'!

chunkEscape: aString
	"Replace all occurrences of !! with !!!! and trim at both ends."

	^(aString replace: '!!' with: '!!!!') trimBoth
!

classNameFor: aClass
	^aClass isMetaclass
	    ifTrue: [aClass instanceClass name, ' class']
	    ifFalse: [
		aClass isNil
		    ifTrue: ['nil']
		    ifFalse: [aClass name]]
!

exportDefinitionOf: aClass on: aStream
    "Chunk format."

    aStream 
        nextPutAll: (self classNameFor: aClass superclass);
        nextPutAll: ' subclass: #', (self classNameFor: aClass); lf;
        nextPutAll: '	instanceVariableNames: '''.
    aClass instanceVariableNames 
        do: [:each | aStream nextPutAll: each]
        separatedBy: [aStream nextPutAll: ' '].
    aStream 
        nextPutAll: ''''; lf;
        nextPutAll: '	package: ''', aClass category, '''!!'; lf.
    aClass comment notEmpty ifTrue: [
        aStream 
        nextPutAll: '!!', (self classNameFor: aClass), ' commentStamp!!';lf;
        nextPutAll: (self chunkEscape: aClass comment), '!!';lf].
    aStream lf
!

exportMetaDefinitionOf: aClass on: aStream

	aClass class instanceVariableNames isEmpty ifFalse: [
		aStream 
		    nextPutAll: (self classNameFor: aClass class);
		    nextPutAll: ' instanceVariableNames: '''.
		aClass class instanceVariableNames 
		    do: [:each | aStream nextPutAll: each]
		    separatedBy: [aStream nextPutAll: ' '].
		aStream	
		    nextPutAll: '''!!'; lf; lf]
!

exportMethod: aMethod of: aClass on: aStream
	aStream 
		lf; lf; nextPutAll: (self chunkEscape: aMethod source); lf;
		nextPutAll: '!!'
!

exportMethods: methods category: category of: aClass on: aStream
	"Issue #143: sort methods alphabetically"

	aStream
		nextPutAll: '!!', (self classNameFor: aClass);
		nextPutAll: ' methodsFor: ''', category, '''!!'.
		(methods sorted: [:a :b | a selector <= b selector]) do: [:each |
				self exportMethod: each of: aClass on: aStream].
	aStream nextPutAll: ' !!'; lf; lf
!

exportMethodsOf: aClass on: aStream
	"Issue #143: sort protocol alphabetically"

	| map |
	map := Dictionary new.
	aClass protocolsDo: [:category :methods | 
		(category match: '^\*') ifFalse: [ map at: category put: methods ]].
	(map keys sorted: [:a :b | a <= b ]) do: [:category | | methods |
		methods := map at: category.
		self
			exportMethods: methods
			category: category
			of: aClass
			on: aStream ]
!

exportPackageDefinitionOf: package on: aStream
	"Chunk format."

	aStream 
	    nextPutAll: 'Smalltalk current createPackage: ''', package name,
		''' properties: ', package properties storeString, '!!'; lf.
!

exportPackageExtensionsOf: package on: aStream
	"We need to override this one too since we need to group
	all methods in a given protocol under a leading methodsFor: chunk
	for that class."

	"Issue #143: sort protocol alphabetically"

	| name map |
	name := package name.
	(Package sortedClasses: Smalltalk current classes) do: [:each |
		{each. each class} do: [:aClass |
			map := Dictionary new.
			aClass protocolsDo: [:category :methods | 
				(category match: '^\*', name) ifTrue: [ map at: category put: methods ]].
			(map keys sorted: [:a :b | a <= b ]) do: [:category | | methods |
				methods := map at: category.	
				self exportMethods: methods category: category of: aClass on: aStream ]]]
! !

Exporter subclass: #StrippedExporter
	instanceVariableNames: ''
	package:'Compiler'!

!StrippedExporter methodsFor: '*Compiler'!

exportDefinitionOf: aClass on: aStream
	aStream 
	    nextPutAll: 'smalltalk.addClass(';
	    nextPutAll: '''', (self classNameFor: aClass), ''', ';
	    nextPutAll: 'smalltalk.', (self classNameFor: aClass superclass);
	    nextPutAll: ', ['.
	aClass instanceVariableNames 
	    do: [:each | aStream nextPutAll: '''', each, '''']
	    separatedBy: [aStream nextPutAll: ', '].
	aStream	
	    nextPutAll: '], ''';
	    nextPutAll: aClass category, '''';
	    nextPutAll: ');'.
	aStream lf
!

exportMethod: aMethod of: aClass on: aStream
	aStream 
		nextPutAll: 'smalltalk.addMethod(';lf;
		nextPutAll: aMethod selector asSelector asJavascript, ',';lf;
		nextPutAll: 'smalltalk.method({';lf;
		nextPutAll: 'selector: ', aMethod selector asJavascript, ',';lf;
		nextPutAll: 'fn: ', aMethod fn compiledSource;lf;
		nextPutAll: '}),';lf;
		nextPutAll: 'smalltalk.', (self classNameFor: aClass);
		nextPutAll: ');';lf;lf
! !

Object subclass: #Importer
	instanceVariableNames: ''
	package:'Compiler'!

!Importer methodsFor: '*Compiler'!

import: aStream
    | chunk result parser lastEmpty |
    parser := ChunkParser on: aStream.
    lastEmpty := false.
    [chunk := parser nextChunk.
     chunk isNil] whileFalse: [
        chunk isEmpty
       		ifTrue: [lastEmpty := true]
       		ifFalse: [
        		result := Compiler new evaluateExpression: chunk.
        		lastEmpty 
            			ifTrue: [
                                  	lastEmpty := false.
                                  	result scanFrom: parser]]]
! !

Object subclass: #PackageLoader
	instanceVariableNames: ''
	package:'Compiler'!

!PackageLoader methodsFor: '*Compiler'!

initializePackageNamed: packageName prefix: aString

	(Package named: packageName) 
    	setupClasses;
        commitPathJs: '/', aString, '/js';
        commitPathSt: '/', aString, '/st'
!

loadPackage: packageName prefix: aString	
	| url |
    url := '/', aString, '/js/', packageName, '.js'.
	jQuery 
		ajax: url
        options: #{
			'type' -> 'GET'.
			'dataType' -> 'script'.
    		'complete' -> [ :jqXHR :textStatus | 
				jqXHR readyState = 4 
                	ifTrue: [ self initializePackageNamed: packageName prefix: aString ] ].
			'error' -> [ window alert: 'Could not load package at:  ', url ]
		}
!

loadPackages: aCollection prefix: aString
	aCollection do: [ :each |
    	self loadPackage: each prefix: aString ]
! !

!PackageLoader class methodsFor: '*Compiler'!

loadPackages: aCollection prefix: aString
	^ self new loadPackages: aCollection prefix: aString
! !

Error subclass: #CompilerError
	instanceVariableNames: ''
	package:'Compiler'!
!CompilerError commentStamp!
I am the common superclass of all compiling errors.!

CompilerError subclass: #ParseError
	instanceVariableNames: ''
	package:'Compiler'!
!ParseError commentStamp!
Instance of ParseError are signaled on any parsing error. 
See `Smalltalk >> #parse:`!

CompilerError subclass: #SemanticError
	instanceVariableNames: ''
	package:'Compiler'!
!SemanticError commentStamp!
I represent an abstract semantic error thrown by the SemanticAnalyzer.
Semantic errors can be unknown variable errors, etc.
See my subclasses for concrete errors.

The IDE should catch instances of Semantic error to deal with them when compiling!

SemanticError subclass: #InliningError
	instanceVariableNames: ''
	package:'Compiler'!
!InliningError commentStamp!
Instances of InliningError are signaled when using an `InliningCodeGenerator`in a `Compiler`.!

SemanticError subclass: #InvalidAssignmentError
	instanceVariableNames: 'variableName'
	package:'Compiler'!
!InvalidAssignmentError commentStamp!
I get signaled when a pseudo variable gets assigned.!

!InvalidAssignmentError methodsFor: '*Compiler'!

messageText
	^ ' Invalid assignment to variable: ', self variableName
!

variableName
	^ variableName
!

variableName: aString
	variableName := aString
! !

SemanticError subclass: #ShadowingVariableError
	instanceVariableNames: 'variableName'
	package:'Compiler'!
!ShadowingVariableError commentStamp!
I get signaled when a variable in a block or method scope shadows a variable of the same name in an outer scope.!

!ShadowingVariableError methodsFor: '*Compiler'!

messageText
	^ 'Variable shadowing error: ', self variableName, ' is already defined'
!

variableName
	^ variableName
!

variableName: aString
	variableName := aString
! !

SemanticError subclass: #UnknownVariableError
	instanceVariableNames: 'variableName'
	package:'Compiler'!
!UnknownVariableError commentStamp!
I get signaled when a variable is not defined.
The default behavior is to allow it, as this is how Amber currently is able to seamlessly send messages to JavaScript objects.!

!UnknownVariableError methodsFor: '*Compiler'!

variableName
	^ variableName
!

variableName: aString
	variableName := aString
! !

Object subclass: #Compiler
	instanceVariableNames: 'currentClass source unknownVariables codeGeneratorClass'
	package:'Compiler'!
!Compiler commentStamp!
I provide the public interface for compiling Amber source code into JavaScript.

The code generator used to produce JavaScript can be plugged with `#codeGeneratorClass`. 
The default code generator is an instance of `InlinedCodeGenerator`!

!Compiler methodsFor: '*Compiler'!

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

!Compiler methodsFor: '*Compiler'!

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
	| compiled |
	compiled := self eval: (self compile: aString forClass: aBehavior).
	compiled category: anotherString.
	aBehavior addCompiledMethod: compiled.
    self setupClass: aBehavior.
	^compiled
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

!Compiler class methodsFor: '*Compiler'!

recompile: aClass
	self new recompile: aClass
!

recompileAll
	Smalltalk current classes do: [:each |
		self recompile: each]
! !

Object subclass: #DoIt
	instanceVariableNames: ''
	package:'Compiler'!
!DoIt commentStamp!
`DoIt` is the class used to compile and evaluate expressions. See `Compiler >> evaluateExpression:`.!

Object subclass: #NodeVisitor
	instanceVariableNames: ''
	package:'Compiler'!
!NodeVisitor commentStamp!
I am the abstract super class of all AST node visitors.!

!NodeVisitor methodsFor: '*Compiler'!

visit: aNode
	^ aNode accept: self
!

visitAll: aCollection
	^ aCollection do: [ :each | self visit: each ]
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
	package:'Compiler'!
!AbstractCodeGenerator commentStamp!
I am the abstract super class of all code generators and provide their common API.!

!AbstractCodeGenerator methodsFor: '*Compiler'!

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

!AbstractCodeGenerator methodsFor: '*Compiler'!

compileNode: aNode
	self subclassResponsibility
! !

AbstractCodeGenerator subclass: #CodeGenerator
	instanceVariableNames: ''
	package:'Compiler'!
!CodeGenerator commentStamp!
I am a basic code generator. I generate a valid JavaScript output, but no not perform any inlining.
See `InliningCodeGenerator` for an optimized JavaScript code generation.!

!CodeGenerator methodsFor: '*Compiler'!

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

Object subclass: #Node
	instanceVariableNames: 'position nodes shouldBeInlined shouldBeAliased'
	package:'Compiler'!
!Node commentStamp!
I am the abstract root class of the abstract syntax tree.

position: holds a point containing lline- and column number of the symbol location in the original source file!

!Node methodsFor: '*Compiler'!

addNode: aNode
	self nodes add: aNode
!

nodes
	^nodes ifNil: [nodes := Array new]
!

position
	^position ifNil: [position := 0@0]
!

shouldBeAliased
	^ shouldBeAliased ifNil: [ false ]
!

shouldBeAliased: aBoolean
	shouldBeAliased := aBoolean
!

shouldBeInlined
	^ shouldBeInlined ifNil: [ false ]
!

shouldBeInlined: aBoolean
	shouldBeInlined := aBoolean
! !

!Node methodsFor: '*Compiler'!

nodes: aCollection
	nodes := aCollection
!

position: aPosition
	position := aPosition
! !

!Node methodsFor: '*Compiler'!

isAssignmentNode
	^ false
!

isBlockNode
	^false
!

isBlockSequenceNode
	^false
!

isImmutable
	^false
!

isReturnNode
	^false
!

isSendNode
	^false
!

isValueNode
	^false
!

subtreeNeedsAliasing
    ^(self shouldBeAliased or: [ self shouldBeInlined ]) or: [
        (self nodes detect: [ :each | each subtreeNeedsAliasing ] ifNone: [ false ]) ~= false ]
! !

!Node methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitNode: self
! !

Node subclass: #AssignmentNode
	instanceVariableNames: 'left right'
	package:'Compiler'!

!AssignmentNode methodsFor: '*Compiler'!

left
	^left
!

left: aNode
	left := aNode
!

nodes
	^ Array with: self left with: self right
!

right
	^right
!

right: aNode
	right := aNode
! !

!AssignmentNode methodsFor: '*Compiler'!

isAssignmentNode
	^ true
! !

!AssignmentNode methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitAssignmentNode: self
! !

Node subclass: #BlockNode
	instanceVariableNames: 'parameters scope'
	package:'Compiler'!

!BlockNode methodsFor: '*Compiler'!

parameters
	^parameters ifNil: [parameters := Array new]
!

parameters: aCollection
	parameters := aCollection
!

scope
	^ scope
!

scope: aLexicalScope
	scope := aLexicalScope
! !

!BlockNode methodsFor: '*Compiler'!

isBlockNode
	^true
! !

!BlockNode methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitBlockNode: self
! !

Node subclass: #CascadeNode
	instanceVariableNames: 'receiver'
	package:'Compiler'!

!CascadeNode methodsFor: '*Compiler'!

receiver
	^receiver
!

receiver: aNode
	receiver := aNode
! !

!CascadeNode methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitCascadeNode: self
! !

Node subclass: #DynamicArrayNode
	instanceVariableNames: ''
	package:'Compiler'!

!DynamicArrayNode methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitDynamicArrayNode: self
! !

Node subclass: #DynamicDictionaryNode
	instanceVariableNames: ''
	package:'Compiler'!

!DynamicDictionaryNode methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitDynamicDictionaryNode: self
! !

Node subclass: #JSStatementNode
	instanceVariableNames: 'source'
	package:'Compiler'!

!JSStatementNode methodsFor: '*Compiler'!

source
	^source ifNil: ['']
!

source: aString
	source := aString
! !

!JSStatementNode methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitJSStatementNode: self
! !

Node subclass: #MethodNode
	instanceVariableNames: 'selector arguments source scope classReferences messageSends superSends'
	package:'Compiler'!

!MethodNode methodsFor: '*Compiler'!

arguments
	^arguments ifNil: [#()]
!

arguments: aCollection
	arguments := aCollection
!

classReferences
	^ classReferences
!

classReferences: aCollection
	classReferences := aCollection
!

messageSends
	^ messageSends
!

messageSends: aCollection
	messageSends := aCollection
!

scope
	^ scope
!

scope: aMethodScope
	scope := aMethodScope
!

selector
	^selector
!

selector: aString
	selector := aString
!

source
	^source
!

source: aString
	source := aString
!

superSends
	^ superSends
!

superSends: aCollection
	superSends := aCollection
! !

!MethodNode methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitMethodNode: self
! !

Node subclass: #ReturnNode
	instanceVariableNames: 'scope'
	package:'Compiler'!

!ReturnNode methodsFor: '*Compiler'!

scope
	^ scope
!

scope: aLexicalScope
	scope := aLexicalScope
! !

!ReturnNode methodsFor: '*Compiler'!

isReturnNode
	^ true
!

nonLocalReturn
	^ self scope isMethodScope not
! !

!ReturnNode methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitReturnNode: self
! !

Node subclass: #SendNode
	instanceVariableNames: 'selector arguments receiver superSend index'
	package:'Compiler'!

!SendNode methodsFor: '*Compiler'!

arguments
	^arguments ifNil: [arguments := #()]
!

arguments: aCollection
	arguments := aCollection
!

cascadeNodeWithMessages: aCollection
	| first |
	first := SendNode new
	    selector: self selector;
	    arguments: self arguments;
	    yourself.
	^CascadeNode new
	    receiver: self receiver;
	    nodes: (Array with: first), aCollection;
	    yourself
!

index
	^ index
!

index: anInteger
	index := anInteger
!

nodes
	^ (Array withAll: self arguments)
		add: self receiver;
		yourself
!

receiver
	^receiver
!

receiver: aNode
	receiver := aNode
!

selector
	^selector
!

selector: aString
	selector := aString
!

superSend
	^ superSend ifNil: [ false ]
!

superSend: aBoolean
	superSend := aBoolean
!

valueForReceiver: anObject
	^SendNode new
	    receiver: (self receiver 
		ifNil: [anObject]
		ifNotNil: [self receiver valueForReceiver: anObject]);
	    selector: self selector;
	    arguments: self arguments;
	    yourself
! !

!SendNode methodsFor: '*Compiler'!

isSendNode
	^ true
! !

!SendNode methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitSendNode: self
! !

Node subclass: #SequenceNode
	instanceVariableNames: 'temps scope'
	package:'Compiler'!

!SequenceNode methodsFor: '*Compiler'!

scope
	^ scope
!

scope: aLexicalScope
	scope := aLexicalScope
!

temps
	^temps ifNil: [#()]
!

temps: aCollection
	temps := aCollection
! !

!SequenceNode methodsFor: '*Compiler'!

asBlockSequenceNode
	^BlockSequenceNode new
	    nodes: self nodes;
	    temps: self temps;
	    yourself
! !

!SequenceNode methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitSequenceNode: self
! !

SequenceNode subclass: #BlockSequenceNode
	instanceVariableNames: ''
	package:'Compiler'!

!BlockSequenceNode methodsFor: '*Compiler'!

isBlockSequenceNode
	^true
! !

!BlockSequenceNode methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitBlockSequenceNode: self
! !

Node subclass: #ValueNode
	instanceVariableNames: 'value'
	package:'Compiler'!

!ValueNode methodsFor: '*Compiler'!

value
	^value
!

value: anObject
	value := anObject
! !

!ValueNode methodsFor: '*Compiler'!

isImmutable
	^true
!

isValueNode
	^true
! !

!ValueNode methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitValueNode: self
! !

ValueNode subclass: #VariableNode
	instanceVariableNames: 'assigned binding'
	package:'Compiler'!

!VariableNode methodsFor: '*Compiler'!

alias
	^ self binding alias
!

assigned
	^assigned ifNil: [false]
!

assigned: aBoolean
	assigned := aBoolean
!

beAssigned
	self binding validateAssignment.
	assigned := true
!

binding
	^ binding
!

binding: aScopeVar
	binding := aScopeVar
! !

!VariableNode methodsFor: '*Compiler'!

isImmutable
	^false
! !

!VariableNode methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitVariableNode: self
! !

VariableNode subclass: #ClassReferenceNode
	instanceVariableNames: ''
	package:'Compiler'!

!ClassReferenceNode methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitClassReferenceNode: self
! !

Object subclass: #LexicalScope
	instanceVariableNames: 'node instruction temps args outerScope'
	package:'Compiler'!
!LexicalScope commentStamp!
I represent a lexical scope where variable names are associated with ScopeVars
Instances are used for block scopes. Method scopes are instances of MethodLexicalScope.

I am attached to a ScopeVar and method/block nodes.
Each context (method/closure) get a fresh scope that inherits from its outer scope.!

!LexicalScope methodsFor: '*Compiler'!

alias
	^ '$ctx', self scopeLevel asString
!

allVariableNames
	^ self args keys, self temps keys
!

args
	^ args ifNil: [ args := Dictionary new ]
!

bindingFor: aStringOrNode
	^ self pseudoVars at: aStringOrNode value ifAbsent: [ 
		self args at: aStringOrNode value ifAbsent: [
			self temps at: aStringOrNode value ifAbsent: [ nil ]]]
!

instruction
	^ instruction
!

instruction: anIRInstruction
	instruction := anIRInstruction
!

lookupVariable: aNode
	| lookup |
	lookup := (self bindingFor: aNode).
	lookup ifNil: [
		lookup := self outerScope ifNotNil: [ 
			(self outerScope lookupVariable: aNode) ]].
	^ lookup
!

methodScope
	^ self outerScope ifNotNil: [
		self outerScope methodScope ]
!

node
	"Answer the node in which I am defined"
	
	^ node
!

node: aNode
	node := aNode
!

outerScope
	^ outerScope
!

outerScope: aLexicalScope
	outerScope := aLexicalScope
!

pseudoVars
	^ self methodScope pseudoVars
!

scopeLevel
	self outerScope ifNil: [ ^ 1 ].
	self isInlined ifTrue: [ ^ self outerScope scopeLevel ].
    
	^ self outerScope scopeLevel + 1
!

temps
	^ temps ifNil: [ temps := Dictionary new ]
! !

!LexicalScope methodsFor: '*Compiler'!

addArg: aString
	self args at: aString put: (ArgVar on: aString).
	(self args at: aString) scope: self
!

addTemp: aString
	self temps at: aString put: (TempVar on: aString).
	(self temps at: aString) scope: self
! !

!LexicalScope methodsFor: '*Compiler'!

canInlineNonLocalReturns
	^ self isInlined and: [ self outerScope canInlineNonLocalReturns ]
!

isBlockScope
	^ self isMethodScope not
!

isInlined
	^ self instruction notNil and: [
      	self instruction isInlined ]
!

isMethodScope
	^ false
! !

LexicalScope subclass: #MethodLexicalScope
	instanceVariableNames: 'iVars pseudoVars unknownVariables localReturn nonLocalReturns'
	package:'Compiler'!
!MethodLexicalScope commentStamp!
I represent a method scope.!

!MethodLexicalScope methodsFor: '*Compiler'!

allVariableNames
	^ super allVariableNames, self iVars keys
!

bindingFor: aNode
	^ (super bindingFor: aNode) ifNil: [
		self iVars at: aNode value ifAbsent: [ nil ]]
!

iVars
	^ iVars ifNil: [ iVars := Dictionary new ]
!

localReturn
	^ localReturn ifNil: [ false ]
!

localReturn: aBoolean
	localReturn := aBoolean
!

methodScope
	^ self
!

nonLocalReturns
	^ nonLocalReturns ifNil: [ nonLocalReturns := OrderedCollection new ]
!

pseudoVars
	pseudoVars ifNil: [
		pseudoVars := Dictionary new.
		Smalltalk current pseudoVariableNames do: [ :each |
			pseudoVars at: each put: ((PseudoVar on: each)
				scope: self methodScope;
				yourself) ]].
	^ pseudoVars
!

unknownVariables
	^ unknownVariables ifNil: [ unknownVariables := OrderedCollection new ]
! !

!MethodLexicalScope methodsFor: '*Compiler'!

addIVar: aString
	self iVars at: aString put: (InstanceVar on: aString).
	(self iVars at: aString) scope: self
!

addNonLocalReturn: aScope
	self nonLocalReturns add: aScope
!

removeNonLocalReturn: aScope
	self nonLocalReturns remove: aScope ifAbsent: []
! !

!MethodLexicalScope methodsFor: '*Compiler'!

canInlineNonLocalReturns
	^ true
!

hasLocalReturn
	^ self localReturn
!

hasNonLocalReturn
	^ self nonLocalReturns notEmpty
!

isMethodScope
	^ true
! !

Object subclass: #ScopeVar
	instanceVariableNames: 'scope name'
	package:'Compiler'!
!ScopeVar commentStamp!
I am an entry in a LexicalScope that gets associated with variable nodes of the same name.  
There are 4 different subclasses of vars: temp vars, local vars, args, and unknown/global vars.!

!ScopeVar methodsFor: '*Compiler'!

alias
	^ self name asVariableName
!

name
	^ name
!

name: aString
	name := aString
!

scope
	^ scope
!

scope: aScope
	scope := aScope
! !

!ScopeVar methodsFor: '*Compiler'!

isArgVar
	^ false
!

isClassRefVar
	^ false
!

isInstanceVar
	^ false
!

isPseudoVar
	^ false
!

isTempVar
	^ false
!

isUnknownVar
	^ false
!

validateAssignment
	(self isArgVar or: [ self isPseudoVar ]) ifTrue: [
		InvalidAssignmentError new
			variableName: self name;
			signal]
! !

!ScopeVar class methodsFor: '*Compiler'!

on: aString
	^ self new 
		name: aString;
		yourself
! !

ScopeVar subclass: #AliasVar
	instanceVariableNames: 'node'
	package:'Compiler'!
!AliasVar commentStamp!
I am an internally defined variable by the compiler!

!AliasVar methodsFor: '*Compiler'!

node
	^ node
!

node: aNode
	node := aNode
! !

ScopeVar subclass: #ArgVar
	instanceVariableNames: ''
	package:'Compiler'!
!ArgVar commentStamp!
I am an argument of a method or block.!

!ArgVar methodsFor: '*Compiler'!

isArgVar
	^ true
! !

ScopeVar subclass: #ClassRefVar
	instanceVariableNames: ''
	package:'Compiler'!
!ClassRefVar commentStamp!
I am an class reference variable!

!ClassRefVar methodsFor: '*Compiler'!

alias
	^ '(smalltalk.', self name, ' || ', self name, ')'
! !

!ClassRefVar methodsFor: '*Compiler'!

isClassRefVar
	^ true
! !

ScopeVar subclass: #InstanceVar
	instanceVariableNames: ''
	package:'Compiler'!
!InstanceVar commentStamp!
I am an instance variable of a method or block.!

!InstanceVar methodsFor: '*Compiler'!

alias
	^ 'self["@', self name, '"]'
!

isInstanceVar
	^ true
! !

ScopeVar subclass: #PseudoVar
	instanceVariableNames: ''
	package:'Compiler'!
!PseudoVar commentStamp!
I am an pseudo variable.

The five Smalltalk pseudo variables are: 'self', 'super', 'nil', 'true' and 'false'!

!PseudoVar methodsFor: '*Compiler'!

alias
	^ self name
! !

!PseudoVar methodsFor: '*Compiler'!

isPseudoVar
	^ true
! !

ScopeVar subclass: #TempVar
	instanceVariableNames: ''
	package:'Compiler'!
!TempVar commentStamp!
I am an temporary variable of a method or block.!

!TempVar methodsFor: '*Compiler'!

alias
	^ self scope alias, '.locals.', super alias
! !

!TempVar methodsFor: '*Compiler'!

isTempVar
	^ true
! !

ScopeVar subclass: #UnknownVar
	instanceVariableNames: ''
	package:'Compiler'!
!UnknownVar commentStamp!
I am an unknown variable. Amber uses unknown variables as JavaScript globals!

!UnknownVar methodsFor: '*Compiler'!

isUnknownVar
	^ true
! !

NodeVisitor subclass: #SemanticAnalyzer
	instanceVariableNames: 'currentScope theClass classReferences messageSends superSends'
	package:'Compiler'!
!SemanticAnalyzer commentStamp!
I semantically analyze the abstract syntax tree and annotate it with informations such as non local returns and variable scopes.!

!SemanticAnalyzer methodsFor: '*Compiler'!

classReferences
	^ classReferences ifNil: [ classReferences := Set new ]
!

messageSends
	^ messageSends ifNil: [ messageSends := Dictionary new ]
!

superSends
	^ superSends ifNil: [ superSends := Dictionary new ]
!

theClass
	^ theClass
!

theClass: aClass
	theClass := aClass
! !

!SemanticAnalyzer methodsFor: '*Compiler'!

errorShadowingVariable: aString
	ShadowingVariableError new
		variableName: aString;
		signal
!

errorUnknownVariable: aNode
	"Throw an error if the variable is undeclared in the global JS scope (i.e. window)"

	| identifier |
    identifier := aNode value.
	((#('jQuery' 'window' 'process' 'global') includes: identifier) not and: [ self isVariableGloballyUndefined: identifier ]) ifTrue: [
			UnknownVariableError new
				variableName: aNode value;
				signal ]
		ifFalse: [
			currentScope methodScope unknownVariables add: aNode value. ]
! !

!SemanticAnalyzer methodsFor: '*Compiler'!

newBlockScope
	^ self newScopeOfClass: LexicalScope
!

newMethodScope
	^ self newScopeOfClass: MethodLexicalScope
!

newScopeOfClass: aLexicalScopeClass
	^ aLexicalScopeClass new 
		outerScope: currentScope;
		yourself
! !

!SemanticAnalyzer methodsFor: '*Compiler'!

popScope
	currentScope ifNotNil: [
		currentScope := currentScope outerScope ]
!

pushScope: aScope
	aScope outerScope: currentScope.
	currentScope := aScope
!

validateVariableScope: aString
	"Validate the variable scope in by doing a recursive lookup, up to the method scope"

	(currentScope lookupVariable: aString) ifNotNil: [
		self errorShadowingVariable: aString ]
! !

!SemanticAnalyzer methodsFor: '*Compiler'!

isVariableGloballyUndefined: aString
	<return eval('typeof ' + aString + ' == "undefined"')>
! !

!SemanticAnalyzer methodsFor: '*Compiler'!

visitAssignmentNode: aNode
	super visitAssignmentNode: aNode.
	aNode left beAssigned
!

visitBlockNode: aNode
	self pushScope: self newBlockScope.
	aNode scope: currentScope.
	currentScope node: aNode.
	
	aNode parameters do: [ :each | 
		self validateVariableScope: each.
		currentScope addArg: each ].

	super visitBlockNode: aNode.
	self popScope
!

visitCascadeNode: aNode
	"Populate the receiver into all children"
	aNode nodes do: [ :each | 
		each receiver: aNode receiver ].
	super visitCascadeNode: aNode.
	aNode nodes first superSend ifTrue: [
		aNode nodes do: [ :each | each superSend: true ]]
!

visitClassReferenceNode: aNode
	self classReferences add: aNode value.
	aNode binding: (ClassRefVar new name: aNode value; yourself)
!

visitMethodNode: aNode
	self pushScope: self newMethodScope.
	aNode scope: currentScope.
	currentScope node: aNode.

	self theClass allInstanceVariableNames do: [:each | 
		currentScope addIVar: each ].
	aNode arguments do: [ :each | 
		self validateVariableScope: each.
		currentScope addArg: each ].

	super visitMethodNode: aNode.

	aNode 
		classReferences: self classReferences;
		messageSends: self messageSends keys;
        superSends: self superSends keys.
	self popScope
!

visitReturnNode: aNode
	aNode scope: currentScope.
	currentScope isMethodScope
		ifTrue: [ currentScope localReturn: true ]
		ifFalse: [ currentScope methodScope addNonLocalReturn: currentScope ].
	super visitReturnNode: aNode
!

visitSendNode: aNode

	aNode receiver value = 'super' 
		ifTrue: [
			aNode superSend: true.
			aNode receiver value: 'self'.
			self superSends at: aNode selector ifAbsentPut: [ Set new ].
			(self superSends at: aNode selector) add: aNode ]
          
		ifFalse: [ (IRSendInliner inlinedSelectors includes: aNode selector) ifTrue: [
			aNode shouldBeInlined: true.
			aNode receiver shouldBeAliased: true ] ].

	self messageSends at: aNode selector ifAbsentPut: [ Set new ].
	(self messageSends at: aNode selector) add: aNode.

	aNode index: (self messageSends at: aNode selector) size.

	super visitSendNode: aNode
!

visitSequenceNode: aNode
	aNode temps do: [ :each | 
		self validateVariableScope: each.
		currentScope addTemp: each ].

	super visitSequenceNode: aNode
!

visitVariableNode: aNode
	"Bind a ScopeVar to aNode by doing a lookup in the current scope.
	If no ScopeVar is found, bind a UnknowVar and throw an error"

	aNode binding: ((currentScope lookupVariable: aNode) ifNil: [ 
		self errorUnknownVariable: aNode.
		UnknownVar new name: aNode value; yourself ])
! !

!SemanticAnalyzer class methodsFor: '*Compiler'!

on: aClass
	^ self new
		theClass: aClass;
		yourself
! !

NodeVisitor subclass: #IRASTTranslator
	instanceVariableNames: 'source theClass method sequence nextAlias'
	package:'Compiler'!
!IRASTTranslator commentStamp!
I am the AST (abstract syntax tree) visitor responsible for building the intermediate representation graph.
I rely on a builder object, instance of IRBuilder.!

!IRASTTranslator methodsFor: '*Compiler'!

method
	^ method
!

method: anIRMethod
	method := anIRMethod
!

nextAlias
	nextAlias ifNil: [ nextAlias := 0 ].
	nextAlias := nextAlias + 1.
	^ nextAlias asString
!

sequence
	^ sequence
!

sequence: anIRSequence
	sequence := anIRSequence
!

source
	^ source
!

source: aString
	source := aString
!

theClass
	^ theClass
!

theClass: aClass
	theClass := aClass
!

withSequence: aSequence do: aBlock
	| outerSequence |
	outerSequence := self sequence.
	self sequence: aSequence.
	aBlock value.
	self sequence: outerSequence.
	^ aSequence
! !

!IRASTTranslator methodsFor: '*Compiler'!

alias: aNode
	| variable |

	aNode isImmutable ifTrue: [ ^ self visit: aNode ].

	variable := IRVariable new 
		variable: (AliasVar new name: '$', self nextAlias); 
		yourself.

	self sequence add: (IRAssignment new
		add: variable;
		add: (self visit: aNode);
		yourself).

	self method internalVariables add: variable.

	^ variable
!

aliasTemporally: aCollection
	"https://github.com/NicolasPetton/amber/issues/296
    
    If a node is aliased, all preceding ones are aliased as well.
    The tree is iterated twice. First we get the aliasing dependency, 
    then the aliasing itself is done"

	| threshold result |
    threshold := 0.
    
    aCollection withIndexDo: [ :each :i |
        each subtreeNeedsAliasing
		    ifTrue: [ threshold := i ]].

	result := OrderedCollection new.
	aCollection withIndexDo: [ :each :i | 
		result add: (i <= threshold
			ifTrue: [ self alias: each ]
			ifFalse: [ self visit: each ])].

    ^result
!

visitAssignmentNode: aNode
	| left right assignment |
	right := self visit: aNode right.
	left := self visit: aNode left.
	self sequence add: (IRAssignment new 
		add: left;
		add: right;
		yourself).
	^ left
!

visitBlockNode: aNode
	| closure |
	closure := IRClosure new
		arguments: aNode parameters;
		scope: aNode scope;
		yourself.
	aNode scope temps do: [ :each |
		closure add: (IRTempDeclaration new 
			name: each name;
            scope: aNode scope;
			yourself) ].
	aNode nodes do: [ :each | closure add: (self visit: each) ].
	^ closure
!

visitBlockSequenceNode: aNode
	^ self
		withSequence: IRBlockSequence new
		do: [ 
			aNode nodes ifNotEmpty: [
				aNode nodes allButLast do: [ :each | 
					self sequence add: (self visit: each) ].
				aNode nodes last isReturnNode 
					ifFalse: [ self sequence add: (IRBlockReturn new add: (self visit: aNode nodes last); yourself) ]
					ifTrue: [ self sequence add: (self visit: aNode nodes last) ]]]
!

visitCascadeNode: aNode
	| alias |

	aNode receiver isImmutable ifFalse: [ 
		alias := self alias: aNode receiver.
		aNode nodes do: [ :each |
			each receiver: (VariableNode new binding: alias variable) ]].

	aNode nodes allButLast do: [ :each |
		self sequence add: (self visit: each) ].

	^ self alias: aNode nodes last
!

visitDynamicArrayNode: aNode
	| array |
	array := IRDynamicArray new.
	(self aliasTemporally: aNode nodes) do: [:each | array add: each].
	^ array
!

visitDynamicDictionaryNode: aNode
	| dictionary |
	dictionary := IRDynamicDictionary new.
    (self aliasTemporally: aNode nodes) do: [:each | dictionary add: each].
	^ dictionary
!

visitJSStatementNode: aNode
	^ IRVerbatim new
		source: aNode source;
		yourself
!

visitMethodNode: aNode

	self method: (IRMethod new
		source: self source;
        theClass: self theClass;
		arguments: aNode arguments;
		selector: aNode selector;
		messageSends: aNode messageSends;
        superSends: aNode superSends;
		classReferences: aNode classReferences;
		scope: aNode scope;
		yourself).

	aNode scope temps do: [ :each |
		self method add: (IRTempDeclaration new
			name: each name;
            scope: aNode scope;
			yourself) ].

	aNode nodes do: [ :each | self method add: (self visit: each) ].

	aNode scope hasLocalReturn ifFalse: [
		(self method add: IRReturn new) add: (IRVariable new
			variable: (aNode scope pseudoVars at: 'self');
			yourself) ].

	^ self method
!

visitReturnNode: aNode
	| return |
	return := aNode nonLocalReturn 
		ifTrue: [ IRNonLocalReturn new ]
		ifFalse: [ IRReturn new ].
	return scope: aNode scope.
	aNode nodes do: [ :each |
		return add: (self alias: each) ].
	^ return
!

visitSendNode: aNode
	| send all receiver arguments |
	send := IRSend new.
	send 
		selector: aNode selector;
		index: aNode index.
	aNode superSend ifTrue: [ send classSend: self theClass superclass ].
    
    all := self aliasTemporally: { aNode receiver }, aNode arguments.
	receiver := all first.
	arguments := all allButFirst.

	send add: receiver.
	arguments do: [ :each | send add: each ].

	^ send
!

visitSequenceNode: aNode
	^ self 
		withSequence: IRSequence new 	
		do: [
			aNode nodes do: [ :each | | instruction |
				instruction := self visit: each.
				instruction isVariable ifFalse: [
					self sequence add: instruction ]]]
!

visitValueNode: aNode
	^ IRValue new 
		value: aNode value; 
		yourself
!

visitVariableNode: aNode
	^ IRVariable new 
		variable: aNode binding; 
		yourself
! !

Object subclass: #IRInstruction
	instanceVariableNames: 'parent instructions'
	package:'Compiler'!
!IRInstruction commentStamp!
I am the abstract root class of the IR (intermediate representation) instructions class hierarchy.
The IR graph is used to emit JavaScript code using a JSStream.!

!IRInstruction methodsFor: '*Compiler'!

instructions
	^ instructions ifNil: [ instructions := OrderedCollection new ]
!

parent
	^ parent
!

parent: anIRInstruction
	parent := anIRInstruction
! !

!IRInstruction methodsFor: '*Compiler'!

add: anObject
	anObject parent: self.
	^ self instructions add: anObject
!

remove
	self parent remove: self
!

remove: anIRInstruction
	self instructions remove: anIRInstruction
!

replace: anIRInstruction with: anotherIRInstruction
	anotherIRInstruction parent: self.
	self instructions 
		at: (self instructions indexOf: anIRInstruction)
		put: anotherIRInstruction
!

replaceWith: anIRInstruction
	self parent replace: self with: anIRInstruction
! !

!IRInstruction methodsFor: '*Compiler'!

canBeAssigned
	^ true
!

isClosure
	^ false
!

isInlined
	^ false
!

isLocalReturn
	^ false
!

isReturn
	^ false
!

isSend
	^ false
!

isSequence
	^ false
!

isTempDeclaration
	^ false
!

isVariable
	^ false
! !

!IRInstruction methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitIRInstruction: self
! !

!IRInstruction class methodsFor: '*Compiler'!

on: aBuilder
	^ self new
		builder: aBuilder;
		yourself
! !

IRInstruction subclass: #IRAssignment
	instanceVariableNames: ''
	package:'Compiler'!

!IRAssignment methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitIRAssignment: self
! !

IRInstruction subclass: #IRDynamicArray
	instanceVariableNames: ''
	package:'Compiler'!

!IRDynamicArray methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitIRDynamicArray: self
! !

IRInstruction subclass: #IRDynamicDictionary
	instanceVariableNames: ''
	package:'Compiler'!

!IRDynamicDictionary methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitIRDynamicDictionary: self
! !

IRInstruction subclass: #IRScopedInstruction
	instanceVariableNames: 'scope'
	package:'Compiler'!

!IRScopedInstruction methodsFor: '*Compiler'!

scope
	^ scope
!

scope: aScope
	scope := aScope
! !

IRScopedInstruction subclass: #IRClosure
	instanceVariableNames: 'arguments'
	package:'Compiler'!

!IRClosure methodsFor: '*Compiler'!

arguments
	^ arguments ifNil: [ #() ]
!

arguments: aCollection
	arguments := aCollection
!

scope: aScope
	super scope: aScope.
	aScope instruction: self
!

sequence
	^ self instructions last
! !

!IRClosure methodsFor: '*Compiler'!

isClosure
	^ true
! !

!IRClosure methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitIRClosure: self
! !

IRScopedInstruction subclass: #IRMethod
	instanceVariableNames: 'theClass source selector classReferences messageSends superSends arguments internalVariables'
	package:'Compiler'!
!IRMethod commentStamp!
I am a method instruction!

!IRMethod methodsFor: '*Compiler'!

arguments
	^ arguments
!

arguments: aCollection
	arguments := aCollection
!

classReferences
	^ classReferences
!

classReferences: aCollection
	classReferences := aCollection
!

internalVariables
	^ internalVariables ifNil: [ internalVariables := Set new ]
!

messageSends
	^ messageSends
!

messageSends: aCollection
	messageSends := aCollection
!

scope: aScope
	super scope: aScope.
	aScope instruction: self
!

selector
	^ selector
!

selector: aString
	selector := aString
!

source
	^ source
!

source: aString
	source := aString
!

superSends
	^ superSends
!

superSends: aCollection
	superSends := aCollection
!

theClass
	^ theClass
!

theClass: aClass
	theClass := aClass
! !

!IRMethod methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitIRMethod: self
! !

IRScopedInstruction subclass: #IRReturn
	instanceVariableNames: ''
	package:'Compiler'!
!IRReturn commentStamp!
I am a local return instruction.!

!IRReturn methodsFor: '*Compiler'!

canBeAssigned
	^ false
!

isBlockReturn
	^ false
!

isLocalReturn
	^ true
!

isNonLocalReturn
	^ self isLocalReturn not
!

isReturn
	^ true
! !

!IRReturn methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitIRReturn: self
! !

IRReturn subclass: #IRBlockReturn
	instanceVariableNames: ''
	package:'Compiler'!
!IRBlockReturn commentStamp!
Smalltalk blocks return their last statement. I am a implicit block return instruction.!

!IRBlockReturn methodsFor: '*Compiler'!

isBlockReturn
	^ true
! !

!IRBlockReturn methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitIRBlockReturn: self
! !

IRReturn subclass: #IRNonLocalReturn
	instanceVariableNames: ''
	package:'Compiler'!
!IRNonLocalReturn commentStamp!
I am a non local return instruction.
Non local returns are handled using a try/catch JS statement.

See IRNonLocalReturnHandling class!

!IRNonLocalReturn methodsFor: '*Compiler'!

isLocalReturn
	^ false
! !

!IRNonLocalReturn methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitIRNonLocalReturn: self
! !

IRScopedInstruction subclass: #IRTempDeclaration
	instanceVariableNames: 'name'
	package:'Compiler'!

!IRTempDeclaration methodsFor: '*Compiler'!

name
	^ name
!

name: aString
	name := aString
! !

!IRTempDeclaration methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitIRTempDeclaration: self
! !

IRInstruction subclass: #IRSend
	instanceVariableNames: 'selector classSend index'
	package:'Compiler'!
!IRSend commentStamp!
I am a message send instruction.!

!IRSend methodsFor: '*Compiler'!

classSend
	^ classSend
!

classSend: aClass
	classSend := aClass
!

index
	^ index
!

index: anInteger
	index := anInteger
!

javascriptSelector
	^ self classSend 
    	ifNil: [ self selector asSelector ]
      	ifNotNil: [ self selector asSuperSelector ]
!

selector
	^ selector
!

selector: aString
	selector := aString
! !

!IRSend methodsFor: '*Compiler'!

isSend
	^ true
! !

!IRSend methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitIRSend: self
! !

IRInstruction subclass: #IRSequence
	instanceVariableNames: ''
	package:'Compiler'!

!IRSequence methodsFor: '*Compiler'!

isSequence
	^ true
! !

!IRSequence methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitIRSequence: self
! !

IRSequence subclass: #IRBlockSequence
	instanceVariableNames: ''
	package:'Compiler'!

!IRBlockSequence methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitIRBlockSequence: self
! !

IRInstruction subclass: #IRValue
	instanceVariableNames: 'value'
	package:'Compiler'!
!IRValue commentStamp!
I am the simplest possible instruction. I represent a value.!

!IRValue methodsFor: '*Compiler'!

value
	^value
!

value: aString
	value := aString
! !

!IRValue methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitIRValue: self
! !

IRInstruction subclass: #IRVariable
	instanceVariableNames: 'variable'
	package:'Compiler'!
!IRVariable commentStamp!
I am a variable instruction.!

!IRVariable methodsFor: '*Compiler'!

variable
	^ variable
!

variable: aScopeVariable
	variable := aScopeVariable
! !

!IRVariable methodsFor: '*Compiler'!

isVariable
	^ true
! !

!IRVariable methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitIRVariable: self
! !

IRInstruction subclass: #IRVerbatim
	instanceVariableNames: 'source'
	package:'Compiler'!

!IRVerbatim methodsFor: '*Compiler'!

source
	^ source
!

source: aString
	source := aString
! !

!IRVerbatim methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitIRVerbatim: self
! !

Object subclass: #IRVisitor
	instanceVariableNames: ''
	package:'Compiler'!

!IRVisitor methodsFor: '*Compiler'!

visit: anIRInstruction
	^ anIRInstruction accept: self
!

visitIRAssignment: anIRAssignment
	^ self visitIRInstruction: anIRAssignment
!

visitIRBlockReturn: anIRBlockReturn
	^ self visitIRReturn: anIRBlockReturn
!

visitIRBlockSequence: anIRBlockSequence
	^ self visitIRSequence: anIRBlockSequence
!

visitIRClosure: anIRClosure
	^ self visitIRInstruction: anIRClosure
!

visitIRDynamicArray: anIRDynamicArray
	^ self visitIRInstruction: anIRDynamicArray
!

visitIRDynamicDictionary: anIRDynamicDictionary
	^ self visitIRInstruction: anIRDynamicDictionary
!

visitIRInlinedClosure: anIRInlinedClosure
	^ self visitIRClosure: anIRInlinedClosure
!

visitIRInlinedSequence: anIRInlinedSequence
	^ self visitIRSequence: anIRInlinedSequence
!

visitIRInstruction: anIRInstruction
	anIRInstruction instructions do: [ :each | self visit: each ].
	^ anIRInstruction
!

visitIRMethod: anIRMethod
	^ self visitIRInstruction: anIRMethod
!

visitIRNonLocalReturn: anIRNonLocalReturn
	^ self visitIRInstruction: anIRNonLocalReturn
!

visitIRNonLocalReturnHandling: anIRNonLocalReturnHandling
	^ self visitIRInstruction: anIRNonLocalReturnHandling
!

visitIRReturn: anIRReturn
	^ self visitIRInstruction: anIRReturn
!

visitIRSend: anIRSend
	^ self visitIRInstruction: anIRSend
!

visitIRSequence: anIRSequence
	^ self visitIRInstruction: anIRSequence
!

visitIRTempDeclaration: anIRTempDeclaration
	^ self visitIRInstruction: anIRTempDeclaration
!

visitIRValue: anIRValue
	^ self visitIRInstruction: anIRValue
!

visitIRVariable: anIRVariable
	^ self visitIRInstruction: anIRVariable
!

visitIRVerbatim: anIRVerbatim
	^ self visitIRInstruction: anIRVerbatim
! !

IRVisitor subclass: #IRJSTranslator
	instanceVariableNames: 'stream'
	package:'Compiler'!

!IRJSTranslator methodsFor: '*Compiler'!

contents
	^ self stream contents
!

stream
	^ stream
!

stream: aStream
	stream := aStream
! !

!IRJSTranslator methodsFor: '*Compiler'!

initialize
	super initialize.
	stream := JSStream new.
! !

!IRJSTranslator methodsFor: '*Compiler'!

visitIRAssignment: anIRAssignment
	self visit: anIRAssignment instructions first.
	self stream nextPutAssignment.
	self visit: anIRAssignment instructions last.
!

visitIRClosure: anIRClosure
	self stream 
		nextPutClosureWith: [ 
        	self stream 
            	nextPutBlockContextFor: anIRClosure
                during: [ super visitIRClosure: anIRClosure ] ]
		arguments: anIRClosure arguments
!

visitIRDynamicArray: anIRDynamicArray
	self stream nextPutAll: '['.
	anIRDynamicArray instructions
		do: [ :each | self visit: each ]
		separatedBy: [ self stream nextPutAll: ',' ].
	stream nextPutAll: ']'
!

visitIRDynamicDictionary: anIRDynamicDictionary
	self stream nextPutAll: 'smalltalk.HashedCollection._fromPairs_(['.
		anIRDynamicDictionary instructions 
			do: [ :each | self visit: each ]
			separatedBy: [self stream nextPutAll: ',' ].
	self stream nextPutAll: '])'
!

visitIRMethod: anIRMethod
	self stream
		nextPutMethodDeclaration: anIRMethod 
		with: [ self stream 
			nextPutFunctionWith: [ 
            	self stream nextPutContextFor: anIRMethod during: [
				anIRMethod internalVariables notEmpty ifTrue: [
					self stream nextPutVars: (anIRMethod internalVariables asArray collect: [ :each |
						each variable alias ]) ].
				anIRMethod scope hasNonLocalReturn 
					ifTrue: [
						self stream nextPutNonLocalReturnHandlingWith: [
							super visitIRMethod: anIRMethod ]]
					ifFalse: [ super visitIRMethod: anIRMethod ]]]
			arguments: anIRMethod arguments ]
!

visitIRNonLocalReturn: anIRNonLocalReturn
	self stream nextPutNonLocalReturnWith: [
		super visitIRNonLocalReturn: anIRNonLocalReturn ]
!

visitIRReturn: anIRReturn
	self stream nextPutReturnWith: [
		super visitIRReturn: anIRReturn ]
!

visitIRSend: anIRSend
	anIRSend classSend 
    	ifNil: [
			self stream nextPutAll: '_st('.
			self visit: anIRSend instructions first.
   		 	self stream nextPutAll: ').', anIRSend selector asSelector, '('.
			anIRSend instructions allButFirst
				do: [ :each | self visit: each ]
				separatedBy: [ self stream nextPutAll: ',' ].
			self stream nextPutAll: ')' ]
		ifNotNil: [ 
			self stream 
            	nextPutAll: anIRSend classSend asJavascript, '.fn.prototype.';
				nextPutAll: anIRSend selector asSelector, '.apply(';
				nextPutAll: '_st('.
			self visit: anIRSend instructions first.
			self stream nextPutAll: '), ['.
			anIRSend instructions allButFirst
				do: [ :each | self visit: each ]
				separatedBy: [ self stream nextPutAll: ',' ].
			self stream nextPutAll: '])' ]
!

visitIRSequence: anIRSequence
	self stream nextPutSequenceWith: [
		anIRSequence instructions do: [ :each |
			self stream nextPutStatementWith: (self visit: each) ]]
!

visitIRTempDeclaration: anIRTempDeclaration
	self stream 
    	nextPutAll: anIRTempDeclaration scope alias, '.locals.', anIRTempDeclaration name, '=nil;'; 
        lf
!

visitIRValue: anIRValue
	self stream nextPutAll: anIRValue value asJavascript
!

visitIRVariable: anIRVariable
	anIRVariable variable name = 'thisContext'
    	ifTrue: [ self stream nextPutAll: 'smalltalk.getThisContext()' ]
      	ifFalse: [ self stream nextPutAll: anIRVariable variable alias ]
!

visitIRVerbatim: anIRVerbatim
	self stream nextPutStatementWith: [
		self stream nextPutAll: anIRVerbatim source ]
! !

Object subclass: #JSStream
	instanceVariableNames: 'stream'
	package:'Compiler'!

!JSStream methodsFor: '*Compiler'!

contents
	^ stream contents
! !

!JSStream methodsFor: '*Compiler'!

initialize
	super initialize.
	stream := '' writeStream.
! !

!JSStream methodsFor: '*Compiler'!

lf
	stream lf
!

nextPut: aString
	stream nextPut: aString
!

nextPutAll: aString
	stream nextPutAll: aString
!

nextPutAssignment
	stream nextPutAll: '='
!

nextPutBlockContextFor: anIRClosure during: aBlock
	self 
    	nextPutAll: 'return smalltalk.withContext(function(', anIRClosure scope alias, ') { '; 
        nextPutAll: String cr.
    aBlock value.
    self nextPutAll: '})'
!

nextPutClosureWith: aBlock arguments: anArray
	stream nextPutAll: '(function('.
	anArray 
		do: [ :each | stream nextPutAll: each asVariableName ]
		separatedBy: [ stream nextPut: ',' ].
	stream nextPutAll: '){'; lf.
	aBlock value.
	stream nextPutAll: '})'
!

nextPutContextFor: aMethod during: aBlock
	self 
    	nextPutAll: 'return smalltalk.withContext(function(', aMethod scope alias, ') { '; 
        nextPutAll: String cr.
    aBlock value.
    self 
    	nextPutAll: '}, self, ';
        nextPutAll: aMethod selector asJavascript, ', ['.
    aMethod arguments 
    	do: [ :each | self nextPutAll: each asVariableName ]
      	separatedBy: [ self nextPutAll: ','  ].
    self nextPutAll: '], ';
        nextPutAll: aMethod theClass asJavascript;
        nextPutAll: ')'
!

nextPutFunctionWith: aBlock arguments: anArray
	stream nextPutAll: 'fn: function('.
	anArray 
		do: [ :each | stream nextPutAll: each asVariableName ]
		separatedBy: [ stream nextPut: ',' ].
	stream nextPutAll: '){'; lf.
	stream nextPutAll: 'var self=this;'; lf.
	aBlock value.
	stream nextPutAll: '}'
!

nextPutIf: aBlock with: anotherBlock
	stream nextPutAll: 'if('.
	aBlock value.
	stream nextPutAll: '){'; lf.
	anotherBlock value.
	stream nextPutAll: '}'
!

nextPutIfElse: aBlock with: ifBlock with: elseBlock
	stream nextPutAll: 'if('.
	aBlock value.
	stream nextPutAll: '){'; lf.
	ifBlock value.
	stream nextPutAll: '} else {'; lf.
	elseBlock value.
	stream nextPutAll: '}'
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
	stream nextPutAll: 'throw $early=['.
	aBlock value.
	stream nextPutAll: ']'
!

nextPutReturn
	stream nextPutAll: 'return '
!

nextPutReturnWith: aBlock
	self nextPutReturn.
	aBlock value
!

nextPutSequenceWith: aBlock
	"stream 
		nextPutAll: 'switch(smalltalk.thisContext.pc){'; lf."
	aBlock value.
	"stream 
		nextPutAll: '};'; lf"
!

nextPutStatement: anInteger with: aBlock
	stream nextPutAll: 'case ', anInteger asString, ':'; lf.
	self nextPutStatementWith: aBlock.
	stream nextPutAll: 'smalltalk.thisContext.pc=', (anInteger + 1) asString, ';'; lf
!

nextPutStatementWith: aBlock
	aBlock value.
	stream nextPutAll: ';'; lf
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

!BlockClosure methodsFor: '*Compiler'!

appendToInstruction: anIRInstruction
    anIRInstruction appendBlock: self
! !

!String methodsFor: '*Compiler'!

asVariableName
	^ (Smalltalk current reservedWords includes: self)
		ifTrue: [ self, '_' ]
		ifFalse: [ self ]
! !

IRAssignment subclass: #IRInlinedAssignment
	instanceVariableNames: ''
	package:'Compiler'!
!IRInlinedAssignment commentStamp!
I represent an inlined assignment instruction.!

!IRInlinedAssignment methodsFor: '*Compiler'!

isInlined
	^ true
! !

!IRInlinedAssignment methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitIRInlinedAssignment: self
! !

IRClosure subclass: #IRInlinedClosure
	instanceVariableNames: ''
	package:'Compiler'!
!IRInlinedClosure commentStamp!
I represent an inlined closure instruction.!

!IRInlinedClosure methodsFor: '*Compiler'!

isInlined
	^ true
! !

!IRInlinedClosure methodsFor: '*Compiler'!

accept: aVisitor
	aVisitor visitIRInlinedClosure: self
! !

IRReturn subclass: #IRInlinedReturn
	instanceVariableNames: ''
	package:'Compiler'!
!IRInlinedReturn commentStamp!
I represent an inlined local return instruction.!

!IRInlinedReturn methodsFor: '*Compiler'!

isInlined
	^ true
! !

!IRInlinedReturn methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitIRInlinedReturn: self
! !

IRInlinedReturn subclass: #IRInlinedNonLocalReturn
	instanceVariableNames: ''
	package:'Compiler'!
!IRInlinedNonLocalReturn commentStamp!
I represent an inlined non local return instruction.!

!IRInlinedNonLocalReturn methodsFor: '*Compiler'!

isInlined
	^ true
! !

!IRInlinedNonLocalReturn methodsFor: '*Compiler'!

accept: aVisitor
	^ aVisitor visitIRInlinedNonLocalReturn: self
! !

IRSend subclass: #IRInlinedSend
	instanceVariableNames: ''
	package:'Compiler'!
!IRInlinedSend commentStamp!
I am the abstract super class of inlined message send instructions.!

!IRInlinedSend methodsFor: '*Compiler'!

isInlined
	^ true
! !

!IRInlinedSend methodsFor: '*Compiler'!

accept: aVisitor
	aVisitor visitInlinedSend: self
! !

IRInlinedSend subclass: #IRInlinedIfFalse
	instanceVariableNames: ''
	package:'Compiler'!

!IRInlinedIfFalse methodsFor: '*Compiler'!

accept: aVisitor
	aVisitor visitIRInlinedIfFalse: self
! !

IRInlinedSend subclass: #IRInlinedIfNilIfNotNil
	instanceVariableNames: ''
	package:'Compiler'!

!IRInlinedIfNilIfNotNil methodsFor: '*Compiler'!

accept: aVisitor
	aVisitor visitIRInlinedIfNilIfNotNil: self
! !

IRInlinedSend subclass: #IRInlinedIfTrue
	instanceVariableNames: ''
	package:'Compiler'!

!IRInlinedIfTrue methodsFor: '*Compiler'!

accept: aVisitor
	aVisitor visitIRInlinedIfTrue: self
! !

IRInlinedSend subclass: #IRInlinedIfTrueIfFalse
	instanceVariableNames: ''
	package:'Compiler'!

!IRInlinedIfTrueIfFalse methodsFor: '*Compiler'!

accept: aVisitor
	aVisitor visitIRInlinedIfTrueIfFalse: self
! !

IRBlockSequence subclass: #IRInlinedSequence
	instanceVariableNames: ''
	package:'Compiler'!
!IRInlinedSequence commentStamp!
I represent a (block) sequence inside an inlined closure instruction (instance of `IRInlinedClosure`).!

!IRInlinedSequence methodsFor: '*Compiler'!

isInlined
	^ true
! !

!IRInlinedSequence methodsFor: '*Compiler'!

accept: aVisitor
	aVisitor visitIRInlinedSequence: self
! !

IRVisitor subclass: #IRInliner
	instanceVariableNames: ''
	package:'Compiler'!
!IRInliner commentStamp!
I visit an IR tree, inlining message sends and block closures.

Message selectors that can be inlined are answered by `IRSendInliner >> #inlinedSelectors`!

!IRInliner methodsFor: '*Compiler'!

assignmentInliner
	^ IRAssignmentInliner new 
		translator: self;
		yourself
!

nonLocalReturnInliner
	^ IRNonLocalReturnInliner new 
		translator: self;
		yourself
!

returnInliner
	^ IRReturnInliner new 
		translator: self;
		yourself
!

sendInliner
	^ IRSendInliner new 
		translator: self;
		yourself
! !

!IRInliner methodsFor: '*Compiler'!

shouldInlineAssignment: anIRAssignment
	^ anIRAssignment isInlined not and: [ 
		anIRAssignment instructions last isSend and: [	
			self shouldInlineSend: (anIRAssignment instructions last) ]]
!

shouldInlineReturn: anIRReturn
	^ anIRReturn isInlined not and: [ 
		anIRReturn instructions first isSend and: [	
			self shouldInlineSend: (anIRReturn instructions first) ]]
!

shouldInlineSend: anIRSend
	^ anIRSend isInlined not and: [
		IRSendInliner shouldInline: anIRSend ]
! !

!IRInliner methodsFor: '*Compiler'!

transformNonLocalReturn: anIRNonLocalReturn
	"Replace a non local return into a local return"

	| localReturn |
	anIRNonLocalReturn scope canInlineNonLocalReturns ifTrue: [
		anIRNonLocalReturn scope methodScope removeNonLocalReturn: anIRNonLocalReturn scope.
		localReturn := IRReturn new
			scope: anIRNonLocalReturn scope;
			yourself.
		anIRNonLocalReturn instructions do: [ :each |
			localReturn add: each ].
		anIRNonLocalReturn replaceWith: localReturn.
		^ localReturn ].
	^ super visitIRNonLocalReturn: anIRNonLocalReturn
!

visitIRAssignment: anIRAssignment
	^ (self shouldInlineAssignment: anIRAssignment) 
		ifTrue: [ self assignmentInliner inlineAssignment: anIRAssignment ]
		ifFalse: [ super visitIRAssignment: anIRAssignment ]
!

visitIRNonLocalReturn: anIRNonLocalReturn
	^ (self shouldInlineReturn: anIRNonLocalReturn) 
		ifTrue: [ self nonLocalReturnInliner inlineReturn: anIRNonLocalReturn ]
		ifFalse: [ self transformNonLocalReturn: anIRNonLocalReturn ]
!

visitIRReturn: anIRReturn
	^ (self shouldInlineReturn: anIRReturn) 
		ifTrue: [ self returnInliner inlineReturn: anIRReturn ]
		ifFalse: [ super visitIRReturn: anIRReturn ]
!

visitIRSend: anIRSend
	^ (self shouldInlineSend: anIRSend)
		ifTrue: [ self sendInliner inlineSend: anIRSend ]
		ifFalse: [ super visitIRSend: anIRSend ]
! !

IRJSTranslator subclass: #IRInliningJSTranslator
	instanceVariableNames: ''
	package:'Compiler'!
!IRInliningJSTranslator commentStamp!
I am a specialized JavaScript translator able to write inlined IR instructions to JavaScript stream (`JSStream` instance).!

!IRInliningJSTranslator methodsFor: '*Compiler'!

visitIRInlinedAssignment: anIRInlinedAssignment
	self visit: anIRInlinedAssignment instructions last
!

visitIRInlinedClosure: anIRInlinedClosure
	anIRInlinedClosure instructions do: [ :each |
		self visit: each ]
!

visitIRInlinedIfFalse: anIRInlinedIfFalse
	self stream nextPutIf: [ 
		self stream nextPutAll: '!! smalltalk.assert('.
		self visit: anIRInlinedIfFalse instructions first.
		self stream nextPutAll: ')' ]
		with: [ self visit: anIRInlinedIfFalse instructions last ]
!

visitIRInlinedIfNil: anIRInlinedIfNil
	self stream nextPutIf: [ 
		self stream nextPutAll: '($receiver = '. 
		self visit: anIRInlinedIfNil instructions first.
		self stream nextPutAll: ') == nil || $receiver == undefined' ]
		with: [ self visit: anIRInlinedIfNil instructions last ]
!

visitIRInlinedIfNilIfNotNil: anIRInlinedIfNilIfNotNil
	self stream 
		nextPutIfElse: [ 
			self stream nextPutAll: '($receiver = '. 
			self visit: anIRInlinedIfNilIfNotNil instructions first.
			self stream nextPutAll: ') == nil || $receiver == undefined' ]
		with: [ self visit: anIRInlinedIfNilIfNotNil instructions second ]
		with: [ self visit: anIRInlinedIfNilIfNotNil instructions third ]
!

visitIRInlinedIfTrue: anIRInlinedIfTrue
	self stream nextPutIf: [ 
		self stream nextPutAll: 'smalltalk.assert('. 
		self visit: anIRInlinedIfTrue instructions first.
		self stream nextPutAll: ')' ]
		with: [ self visit: anIRInlinedIfTrue instructions last ]
!

visitIRInlinedIfTrueIfFalse: anIRInlinedIfTrueIfFalse
	self stream 
		nextPutIfElse: [ 
			self stream nextPutAll: 'smalltalk.assert('. 
			self visit: anIRInlinedIfTrueIfFalse instructions first.
			self stream nextPutAll: ')' ]
		with: [ self visit: anIRInlinedIfTrueIfFalse instructions second ]
		with: [ self visit: anIRInlinedIfTrueIfFalse instructions third ]
!

visitIRInlinedNonLocalReturn: anIRInlinedReturn
	self stream nextPutStatementWith: [
		self visit: anIRInlinedReturn instructions last ].
	self stream nextPutNonLocalReturnWith: [ ]
!

visitIRInlinedReturn: anIRInlinedReturn
	self visit: anIRInlinedReturn instructions last
!

visitIRInlinedSequence: anIRInlinedSequence
	anIRInlinedSequence instructions do: [ :each | 
		self stream nextPutStatementWith: [ self visit: each ]]
! !

Object subclass: #IRSendInliner
	instanceVariableNames: 'send translator'
	package:'Compiler'!
!IRSendInliner commentStamp!
I inline some message sends and block closure arguments. I heavily rely on #perform: to dispatch inlining methods.!

!IRSendInliner methodsFor: '*Compiler'!

send
	^ send
!

send: anIRSend
	send := anIRSend
!

translator
	^ translator
!

translator: anASTTranslator
	translator := anASTTranslator
! !

!IRSendInliner methodsFor: '*Compiler'!

inliningError: aString
	InliningError signal: aString
! !

!IRSendInliner methodsFor: '*Compiler'!

inlinedClosure
	^ IRInlinedClosure new
!

inlinedSequence
	^ IRInlinedSequence new
! !

!IRSendInliner methodsFor: '*Compiler'!

ifFalse: anIRInstruction
	^ self inlinedSend: IRInlinedIfFalse new with: anIRInstruction
!

ifFalse: anIRInstruction ifTrue: anotherIRInstruction
	^ self perform: #ifTrue:ifFalse: withArguments: { anotherIRInstruction. anIRInstruction }
!

ifNil: anIRInstruction
	^ self 
		inlinedSend: IRInlinedIfNilIfNotNil new 
		with: anIRInstruction
		with: (IRClosure new
			scope: anIRInstruction scope copy;
			add: (IRBlockSequence new
				add: self send instructions first;
				yourself);
			yourself)
!

ifNil: anIRInstruction ifNotNil: anotherIRInstruction
	^ self inlinedSend: IRInlinedIfNilIfNotNil new with: anIRInstruction with: anotherIRInstruction
!

ifNotNil: anIRInstruction
	^ self 
		inlinedSend: IRInlinedIfNilIfNotNil new
		with: (IRClosure new
			scope: anIRInstruction scope copy;
			add: (IRBlockSequence new
				add: self send instructions first;
				yourself);
			yourself)
		with: anIRInstruction
!

ifNotNil: anIRInstruction ifNil: anotherIRInstruction
	^ self inlinedSend: IRInlinedIfNilIfNotNil new with: anotherIRInstruction with: anIRInstruction
!

ifTrue: anIRInstruction
	^ self inlinedSend: IRInlinedIfTrue new with: anIRInstruction
!

ifTrue: anIRInstruction ifFalse: anotherIRInstruction
	^ self inlinedSend: IRInlinedIfTrueIfFalse new with: anIRInstruction with: anotherIRInstruction
!

inlineClosure: anIRClosure
	| inlinedClosure sequence statements |

	inlinedClosure := self inlinedClosure.
	inlinedClosure scope: anIRClosure scope.

	"Add the possible temp declarations"
	anIRClosure instructions do: [ :each | 
		each isSequence ifFalse: [
			inlinedClosure add: each ]].

	"Add a block sequence"
	sequence := self inlinedSequence.
	inlinedClosure add: sequence.

	"Get all the statements"
	statements := anIRClosure instructions last instructions.
	
	statements ifNotEmpty: [
		statements allButLast do: [ :each | sequence add: each ].

		"Inlined closures don't have implicit local returns"
		(statements last isReturn and: [ statements last isBlockReturn ])
			ifTrue: [ sequence add: statements last instructions first ]
			ifFalse: [ sequence add: statements last ] ].

	^ inlinedClosure
!

inlineSend: anIRSend
	self send: anIRSend.
	^ self 
		perform: self send selector 
		withArguments: self send instructions allButFirst
!

inlinedSend: inlinedSend with: anIRInstruction
	| inlinedClosure |

	anIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].
	anIRInstruction arguments size = 0 ifFalse: [ self inliningError: 'Inlined block should have zero argument' ].

	inlinedClosure := self translator visit: (self inlineClosure: anIRInstruction).

	inlinedSend
		add: self send instructions first;
		add: inlinedClosure.

	self send replaceWith: inlinedSend.

	^ inlinedSend
!

inlinedSend: inlinedSend with: anIRInstruction with: anotherIRInstruction
	| inlinedClosure1 inlinedClosure2 |

	anIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].
	anIRInstruction arguments size = 0 ifFalse: [ self inliningError: 'Inlined block should have zero argument' ].

	anotherIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].
	anotherIRInstruction arguments size = 0 ifFalse: [ self inliningError: 'Inlined block should have zero argument' ].

	inlinedClosure1 := self translator visit: (self inlineClosure: anIRInstruction).
	inlinedClosure2 := self translator visit: (self inlineClosure: anotherIRInstruction).


	inlinedSend
		add: self send instructions first;
		add: inlinedClosure1;
		add: inlinedClosure2.

	self send replaceWith: inlinedSend.
	^ inlinedSend
! !

!IRSendInliner class methodsFor: '*Compiler'!

inlinedSelectors
	^ #('ifTrue:' 'ifFalse:' 'ifTrue:ifFalse:' 'ifFalse:ifTrue:' 'ifNil:' 'ifNotNil:' 'ifNil:ifNotNil:' 'ifNotNil:ifNil')
!

shouldInline: anIRInstruction
	(self inlinedSelectors includes: anIRInstruction selector) ifFalse: [ ^ false ].
	anIRInstruction instructions allButFirst do: [ :each |
		each isClosure ifFalse: [ ^ false ]].
	^ true
! !

IRSendInliner subclass: #IRAssignmentInliner
	instanceVariableNames: 'assignment'
	package:'Compiler'!
!IRAssignmentInliner commentStamp!
I inline message sends together with assignments by moving them around into the inline closure instructions. 

##Example

	foo
		| a |
		a := true ifTrue: [ 1 ]

Will produce:

	if(smalltalk.assert(true) {
		a = 1;
	};!

!IRAssignmentInliner methodsFor: '*Compiler'!

assignment
	^ assignment
!

assignment: aNode
	assignment := aNode
! !

!IRAssignmentInliner methodsFor: '*Compiler'!

inlineAssignment: anIRAssignment
	| inlinedAssignment |
	self assignment: anIRAssignment.
	inlinedAssignment := IRInlinedAssignment new.
	anIRAssignment instructions do: [ :each |
		inlinedAssignment add: each ].
	anIRAssignment replaceWith: inlinedAssignment.
	self inlineSend: inlinedAssignment instructions last.
	^ inlinedAssignment
!

inlineClosure: anIRClosure
	| inlinedClosure statements |

	inlinedClosure := super inlineClosure: anIRClosure.
	statements := inlinedClosure instructions last instructions.
	
	statements ifNotEmpty: [
		statements last canBeAssigned ifTrue: [
			statements last replaceWith: (IRAssignment new
				add: self assignment instructions first;
				add: statements last copy;
				yourself) ] ].

	^ inlinedClosure
! !

IRSendInliner subclass: #IRNonLocalReturnInliner
	instanceVariableNames: ''
	package:'Compiler'!

!IRNonLocalReturnInliner methodsFor: '*Compiler'!

inlinedReturn
	^ IRInlinedNonLocalReturn new
! !

!IRNonLocalReturnInliner methodsFor: '*Compiler'!

inlineClosure: anIRClosure
	"| inlinedClosure statements |

	inlinedClosure := super inlineClosure: anIRClosure.
	statements := inlinedClosure instructions last instructions.
	
	statements ifNotEmpty: [
		statements last replaceWith: (IRNonLocalReturn new
			add: statements last copy;
			yourself) ].

	^ inlinedClosure"

	^ super inlineCLosure: anIRClosure
! !

IRSendInliner subclass: #IRReturnInliner
	instanceVariableNames: ''
	package:'Compiler'!
!IRReturnInliner commentStamp!
I inline message sends with inlined closure together with a return instruction.!

!IRReturnInliner methodsFor: '*Compiler'!

inlinedReturn
	^ IRInlinedReturn new
! !

!IRReturnInliner methodsFor: '*Compiler'!

inlineClosure: anIRClosure
	| closure statements |

	closure := super inlineClosure: anIRClosure.
	statements := closure instructions last instructions.
	
	statements ifNotEmpty: [
		statements last isReturn
			ifFalse: [ statements last replaceWith: (IRReturn new
				add: statements last copy;
				yourself)] ].

	^ closure
!

inlineReturn: anIRReturn
	| return |
	return := self inlinedReturn.
	anIRReturn instructions do: [ :each |
		return add: each ].
	anIRReturn replaceWith: return.
	self inlineSend: return instructions last.
	^ return
! !

CodeGenerator subclass: #InliningCodeGenerator
	instanceVariableNames: ''
	package:'Compiler'!
!InliningCodeGenerator commentStamp!
I am a specialized code generator that uses inlining to produce more optimized JavaScript output!

!InliningCodeGenerator methodsFor: '*Compiler'!

compileNode: aNode
	| ir stream |

	self semanticAnalyzer visit: aNode.
	ir := self translator visit: aNode.
	self inliner visit: ir.

	^ self irTranslator
		visit: ir;
		contents
!

inliner
	^ IRInliner new
!

irTranslator
	^ IRInliningJSTranslator new
! !

NodeVisitor subclass: #AIContext
	instanceVariableNames: 'outerContext pc locals receiver selector'
	package:'Compiler'!

!AIContext methodsFor: '*Compiler'!

initializeFromMethodContext: aMethodContext
	self pc: aMethodContext pc.
    self receiver: aMethodContext receiver.
    self selector: aMethodContext selector.
    aMethodContext outerContext ifNotNil: [
		self outerContext: (self class fromMethodContext: aMethodContext outerContext) ].
    aMethodContext locals keysAndValuesDo: [ :key :value |
    	self locals at: key put: value ]
!

locals
	^ locals ifNil: [ locals := Dictionary new ]
!

outerContext
	^ outerContext
!

outerContext: anAIContext
	outerContext := anAIContext
!

pc
	^ pc ifNil: [ pc := 0 ]
!

pc: anInteger
	pc := anInteger
!

receiver
	^ receiver
!

receiver: anObject
	receiver := anObject
!

selector
	^ selector
!

selector: aString
	selector := aString
! !

!AIContext class methodsFor: '*Compiler'!

fromMethodContext: aMethodContext
	^ self new 
    	initializeFromMethodContext: aMethodContext;
        yourself
! !

NodeVisitor subclass: #ASTInterpreter
	instanceVariableNames: 'currentNode context shouldReturn'
	package:'Compiler'!

!ASTInterpreter methodsFor: '*Compiler'!

context
	^ context
!

context: anAIContext
	context := anAIContext
! !

!ASTInterpreter methodsFor: '*Compiler'!

initialize
	super initialize.
    shouldReturn := false
! !

!ASTInterpreter methodsFor: '*Compiler'!

interpret: aNode
	shouldReturn := false.
    ^ self interpretNode: aNode
!

interpretNode: aNode
	currentNode := aNode.
    ^ self visit: aNode
!

messageFromSendNode: aSendNode
	^ Message new
    	selector: aSendNode selector;
        arguments: (aSendNode arguments collect: [ :each |
        	self interpretNode: each ]);
        yourself
! !

!ASTInterpreter methodsFor: '*Compiler'!

visitBlockNode: aNode
    ^ [ self interpretNode: aNode nodes first ]
!

visitCascadeNode: aNode
	"TODO: Handle super sends"
	| receiver |
    
    receiver := self interpretNode: aNode receiver.

    aNode nodes allButLast
    	do: [ :each | 
        	(self messageFromSendNode: each)
            	sendTo: receiver ].

    ^ (self messageFromSendNode: aNode nodes last)
            	sendTo: receiver
!

visitClassReferenceNode: aNode
	^ Smalltalk current at: aNode value
!

visitJSStatementNode: aNode
	self halt
!

visitReturnNode: aNode
	shouldReturn := true.
    ^ self interpretNode: aNode nodes first
!

visitSendNode: aNode
	"TODO: Handle super sends"
    
    ^ (self messageFromSendNode: aNode)
    	sendTo: (self interpretNode: aNode receiver)
!

visitSequenceNode: aNode
	aNode nodes allButLast do: [ :each | | value |
        value := self interpretNode: each.
		shouldReturn ifTrue: [ ^ value ] ].
    ^ self interpretNode: aNode nodes last
!

visitValueNode: aNode
	^ aNode value
! !

