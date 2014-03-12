Smalltalk createPackage: 'Compiler-Tests'!
TestCase subclass: #ASTParsingTest
	instanceVariableNames: ''
	package: 'Compiler-Tests'!

!ASTParsingTest methodsFor: 'convenience'!

analyze: aNode forClass: aClass
	(SemanticAnalyzer on: aClass) visit: aNode.
	^ aNode
! !

!ASTParsingTest methodsFor: 'parsing'!

parse: aString
	^ Smalltalk parse: aString
!

parse: aString forClass: aClass
	^ self analyze: (self parse: aString) forClass: aClass
! !

ASTParsingTest subclass: #ASTPCNodeVisitorTest
	instanceVariableNames: ''
	package: 'Compiler-Tests'!

!ASTPCNodeVisitorTest methodsFor: 'factory'!

astPCNodeVisitor
	^ ASTPCNodeVisitor new
		context: (AIContext new
			yourself);
		yourself
!

astPCNodeVisitorForSelector: aString
	^ ASTPCNodeVisitor new
		selector: aString;
		context: (AIContext new
			yourself);
		yourself
! !

!ASTPCNodeVisitorTest methodsFor: 'tests'!

testJSStatementNode
	| ast visitor |
	
	ast := self parse: 'foo <consolee.log(1)>' forClass: Object.
	self assert: (self astPCNodeVisitor
		visit: ast;
		currentNode) isJSStatementNode
!

testMessageSend
	| ast |
	
	ast := self parse: 'foo self asString yourself. ^ self asBoolean' forClass: Object.
	self assert: ((self astPCNodeVisitorForSelector: 'yourself')
		visit: ast;
		currentNode) selector equals: 'yourself'
!

testMessageSendWithBlocks
	| ast |
	
	ast := self parse: 'foo true ifTrue: [ [ self asString yourself ] value.  ]. ^ self asBoolean' forClass: Object.
	self assert: ((self astPCNodeVisitorForSelector: 'yourself')
		visit: ast;
		currentNode) selector equals: 'yourself'
!

testMessageSendWithInlining
	| ast |
	
	ast := self parse: 'foo true ifTrue: [ self asString yourself ]. ^ self asBoolean' forClass: Object.
	self assert: ((self astPCNodeVisitorForSelector: 'yourself')
		visit: ast;
		currentNode) selector equals: 'yourself'.
		
	ast := self parse: 'foo true ifTrue: [ self asString yourself ]. ^ self asBoolean' forClass: Object.
	self assert: ((self astPCNodeVisitorForSelector: 'asBoolean')
		visit: ast;
		currentNode) selector equals: 'asBoolean'
!

testNoMessageSend
	| ast |
	
	ast := self parse: 'foo ^ self' forClass: Object.
	self assert: (self astPCNodeVisitor
		visit: ast;
		currentNode) isNil
!

testPC
	| ast visitor |
	
	ast := self parse: 'foo <console.log(1)>' forClass: Object.
	self assert: (self astPCNodeVisitor
		visit: ast;
		currentNode) isJSStatementNode
! !

ASTParsingTest subclass: #ASTPositionTest
	instanceVariableNames: ''
	package: 'Compiler-Tests'!

!ASTPositionTest methodsFor: 'tests'!

testNodeAtPosition
	| node |
	
	node := self parse: 'yourself
	^ self'.
	
	self assert: (node navigationNodeAt: 2@4 ifAbsent: [ nil ]) source equals: 'self'.
	
	node := self parse: 'foo
	true ifTrue: [ 1 ]'.
	
	self assert: (node navigationNodeAt: 2@7 ifAbsent: [ nil ]) selector equals: 'ifTrue:'.
	
	node := self parse: 'foo
	self foo; bar; baz'.
	
	self assert: (node navigationNodeAt: 2@8 ifAbsent: [ nil ]) selector equals: 'foo'
! !

ASTParsingTest subclass: #CodeGeneratorTest
	instanceVariableNames: 'receiver'
	package: 'Compiler-Tests'!

!CodeGeneratorTest methodsFor: 'accessing'!

codeGeneratorClass
	^ CodeGenerator
! !

!CodeGeneratorTest methodsFor: 'factory'!

compiler
	^ Compiler new
		codeGeneratorClass: self codeGeneratorClass;
		yourself
! !

!CodeGeneratorTest methodsFor: 'initialization'!

setUp
	receiver := DoIt new
!

tearDown
	"receiver := nil"
! !

!CodeGeneratorTest methodsFor: 'testing'!

should: aString receiver: anObject return: aResult
	| method result |

	receiver := anObject.
	method := self compiler install: aString forClass: anObject class protocol: 'tests'.
	result := receiver perform: method selector.
	anObject class removeCompiledMethod: method.
	self assert: aResult equals: result
!

should: aString return: anObject
	^ self 
		should: aString 
		receiver: receiver 
		return: anObject
! !

!CodeGeneratorTest methodsFor: 'tests'!

testAssignment
	self should: 'foo | a | a := true ifTrue: [ 1 ]. ^ a' return: 1.
	self should: 'foo | a | a := false ifTrue: [ 1 ]. ^ a' return: nil.

	self should: 'foo | a | ^ a := true ifTrue: [ 1 ]' return: 1
!

testBackslashSelectors
	
	self should: '\ arg ^ 4' return: 4.
	self should: '\\ arg ^ 42' return: 42
!

testBlockReturn
	self should: 'foo ^ #(1 2 3) collect: [ :each | true ifTrue: [ each + 1 ] ]' return: #(2 3 4).
	self should: 'foo ^ #(1 2 3) collect: [ :each | false ifFalse: [ each + 1 ] ]' return: #(2 3 4).
	self should: 'foo ^ #(1 2 3) collect: [ :each | each odd ifTrue: [ each + 1 ] ifFalse: [ each - 1 ] ]' return: #(2 1 4).
!

testCascades
	
	self should: 'foo ^ Array new add: 3; add: 4; yourself' return: #(3 4)
!

testCascadesWithInlining
	
	self should: 'foo ^ true ifTrue: [ 1 ] ifFalse: [ 2 ]' return: 1.
	self should: 'foo ^ false ifTrue: [ 1 ] ifFalse: [ 2 ]' return: 2
!

testDynamicArrayElementsOrdered
	self should: 'foo
	| x |
	x := 1.
	^ { x. x := 2 }
' return: #(1 2).

	self should: 'foo
	| x |
	x := 1.
	^ { x. true ifTrue: [ x := 2 ] }
' return: #(1 2).
!

testDynamicDictionaryElementsOrdered
	self should: 'foo
	| x |
	x := ''foo''.
	^ #{ x->1. ''bar''->(true ifTrue: [ 2 ]) }
' return: #{'foo'->1. 'bar'->2}.
!

testDynamicDictionaryWithMoreArrows
	self should: 'foo ^ #{1->2->3}' return: (HashedCollection with: 1->2->3)
!

testGlobalVar
	self should: 'foo ^ eval class' return: BlockClosure.
	self should: 'foo ^ Math cos: 0' return: 1.
	self should: 'foo ^ NonExistingVar' return: nil
!

testInnerTemporalDependentElementsOrdered
	self should: 'foo
	| x |
	x := Array.
	^ x with: ''foo''->x with: ''bar''->(x := 2)
' return: {'foo'->Array. 'bar'->2}.

	self should: 'foo
	| x |
	x := Array.
	^ x with: ''foo''->x with: ''bar''->(true ifTrue: [ x := 2 ])
' return: {'foo'->Array. 'bar'->2}.

	self should: 'foo
	| x |
	x := 1.
	^ Array with: ''foo''->x with: ''bar''->(true ifTrue: [ x := 2 ])
' return: {'foo'->1. 'bar'->2}.

	self should: 'foo
	| x |
	x := 1.
	^ { ''foo''->x. ''bar''->(true ifTrue: [ x := 2 ]) }
' return: {'foo'->1. 'bar'->2}.

	self should: 'foo
	| x |
	x := 1.
	^ #{ ''foo''->x. ''bar''->(true ifTrue: [ x := 2 ]) }
' return: #{'foo'->1. 'bar'->2}.
!

testJSStatement
	self should: 'foo <return 2+3>' return: 5
!

testLexicalScope
	self should: 'foo | a | a := 1. [ a := 2 ] value. ^ a' return: 2
!

testLiterals
	self should: 'foo ^ 1' return: 1.
	self should: 'foo ^ ''hello''' return: 'hello'.
	self should: 'foo ^ #(1 2 3 4)' return: #(1 2 3 4).
	self should: 'foo ^ {1. [:x | x ] value: 2. 3. [4] value}' return: #(1 2 3 4).
	self should: 'foo ^ true' return: true.
	self should: 'foo ^ false' return: false.
	self should: 'foo ^ #{1->2. 3->4}' return: #{1->2. 3->4}.
	self should: 'foo ^ #hello' return: #hello.
	self should: 'foo ^ -123.456' return: -123.456.
	self should: 'foo ^ -2.5e4' return: -25000.
!

testLocalReturn
	self should: 'foo ^ 1' return: 1.
	self should: 'foo ^ 1 + 1' return: 2.
	self should: 'foo ' return: receiver.
	self should: 'foo self asString' return: receiver.
	self should: 'foo | a b | a := 1. b := 2. ^ a + b' return: 3
!

testMessageSends
	self should: 'foo ^ 1 asString' return: '1'.

	self should: 'foo ^ 1 + 1' return: 2.
	self should: 'foo ^ 1 + 2 * 3' return: 9.

	self should: 'foo ^ 1 to: 3' return: #(1 2 3).
	self should: 'foo ^ 1 to: 5 by: 2' return: #(1 3 5)
!

testMultipleSequences
	self should: 'foo | a b c | a := 2. b := 3. c := a + b. ^ c * 6' return: 30
!

testMutableLiterals
	"Mutable literals must be aliased in cascades.
	See https://github.com/amber-smalltalk/amber/issues/428"
	
	self 
		should: 'foo ^ #( 1 2 ) at: 1 put: 3; yourself' 
		return: #(3 2)
!

testNestedIfTrue
	self should: 'foo ^ true ifTrue: [ false ifFalse: [ 1 ] ]' return: 1.
	self should: 'foo ^ true ifTrue: [ false ifTrue: [ 1 ] ]' return: nil.

	self should: 'foo true ifTrue: [ false ifFalse: [ ^ 1 ] ]' return: 1.
	self should: 'foo true ifTrue: [ false ifTrue: [ ^ 1 ] ]' return: receiver.
!

testNestedSends
	self should: 'foo ^ (Point x: (Point x: 2 y: 3) y: 4) asString' return: (Point x: (2@3) y: 4) asString
!

testNonLocalReturn
	self should: 'foo [ ^ 1 ] value' return: 1.
	self should: 'foo [ ^ 1 + 1 ] value' return: 2.
	self should: 'foo | a b | a := 1. b := 2. [ ^ a + b ] value. self halt' return: 3.
	self should: 'foo [ :x | ^ x + x ] value: 4. ^ 2' return: 8
!

testPascalCaseGlobal
	self should: 'foo ^Object' return: (Smalltalk globals at: 'Object').
	self should: 'foo ^NonExistent' return: nil
!

testSendReceiverAndArgumentsOrdered
	self should: 'foo
	| x |
	x := 1.
	^ Array with: x with: (true ifTrue: [ x := 2 ])
' return: #(1 2).

	self should: 'foo
	| x |
	x := Array.
	^ x with: x with: (true ifTrue: [ x := 2 ])
' return: {Array. 2}.
!

testSuperSend
	self 
		should: 'foo ^ super isBoolean' 
		receiver: true
		return: false
!

testTempVariables
	self should: 'foo | a | ^ a' return: nil.
	self should: 'foo | AVariable | ^ AVariable' return: nil.
	self should: 'foo | a b c | ^ c' return: nil.
	self should: 'foo | a | [ | d | ^ d ] value' return: nil.
	
	self should: 'foo | a | a:= 1. ^ a' return: 1.
	self should: 'foo | AVariable | AVariable := 1. ^ AVariable' return: 1.
!

testThisContext
	self should: 'foo ^ [ thisContext ] value outerContext == thisContext' return: true
!

testifFalse
	self should: 'foo true ifFalse: [ ^ 1 ]' return: receiver.
	self should: 'foo false ifFalse: [ ^ 2 ]' return: 2.
	
	self should: 'foo ^ true ifFalse: [ 1 ]' return: nil.
	self should: 'foo ^ false ifFalse: [ 2 ]' return: 2.
!

testifFalseIfTrue
	self should: 'foo true ifFalse: [ ^ 1 ] ifTrue: [ ^ 2 ]' return: 2.
	self should: 'foo false ifFalse: [ ^ 2 ] ifTrue: [ ^1 ]' return: 2.
	
	self should: 'foo ^ true ifFalse: [ 1 ] ifTrue: [ 2 ]' return: 2.
	self should: 'foo ^ false ifFalse: [ 2 ] ifTrue: [ 1 ]' return: 2.
!

testifNil
	self should: 'foo ^ 1 ifNil: [ 2 ]' return: 1.
	self should: 'foo ^ nil ifNil: [ 2 ]' return: 2.

	self should: 'foo 1 ifNil: [ ^ 2 ]' return: receiver.
	self should: 'foo nil ifNil: [ ^ 2 ]' return: 2.
!

testifNilIfNotNil
	self should: 'foo ^ 1 ifNil: [ 2 ] ifNotNil: [ 3 ]' return: 3.
	self should: 'foo ^ nil ifNil: [ 2 ] ifNotNil: [ 3 ]' return: 2.

	self should: 'foo 1 ifNil: [ ^ 2 ] ifNotNil: [ ^3 ]' return: 3.
	self should: 'foo nil ifNil: [ ^ 2 ] ifNotNil: [ ^3 ]' return: 2.
!

testifNotNil
	self should: 'foo ^ 1 ifNotNil: [ 2 ]' return: 2.
	self should: 'foo ^ nil ifNotNil: [ 2 ]' return: nil.

	self should: 'foo 1 ifNotNil: [ ^ 2 ]' return: 2.
	self should: 'foo nil ifNotNil: [ ^ 2 ]' return: receiver.
!

testifNotNilWithArgument
	self should: 'foo ^ 1 ifNotNil: [ :val | val + 2 ]' return: 3.
	self should: 'foo ^ nil ifNotNil: [ :val | val + 2 ]' return: nil.
	
	self should: 'foo ^ 1 ifNil: [ 5 ] ifNotNil: [ :val | val + 2 ]' return: 3.
	self should: 'foo ^ nil ifNil: [ 5 ] ifNotNil: [ :val | val + 2 ]' return: 5.
	
	self should: 'foo ^ 1 ifNotNil: [ :val | val + 2 ] ifNil: [ 5 ]' return: 3.
	self should: 'foo ^ nil ifNotNil: [ :val | val + 2 ] ifNil: [ 5 ]' return: 5
!

testifTrue
	self should: 'foo false ifTrue: [ ^ 1 ]' return: receiver.
	self should: 'foo true ifTrue: [ ^ 2 ]' return: 2.
	
	self should: 'foo ^ false ifTrue: [ 1 ]' return: nil.
	self should: 'foo ^ true ifTrue: [ 2 ]' return: 2.
!

testifTrueIfFalse
	self should: 'foo false ifTrue: [ ^ 1 ] ifFalse: [ ^2 ]' return: 2.
	self should: 'foo true ifTrue: [ ^ 1 ] ifFalse: [ ^ 2 ]' return: 1.
	
	self should: 'foo ^ false ifTrue: [ 2 ] ifFalse: [ 1 ]' return: 1.
	self should: 'foo ^ true ifTrue: [ 2 ] ifFalse: [ 1 ]' return: 2.
! !

CodeGeneratorTest subclass: #ASTInterpreterTest
	instanceVariableNames: ''
	package: 'Compiler-Tests'!

!ASTInterpreterTest methodsFor: 'parsing'!

analyze: aNode forClass: aClass
	(SemanticAnalyzer on: aClass) visit: aNode.
	^ aNode
!

parse: aString
	^ Smalltalk parse: aString
!

parse: aString forClass: aClass
	^ self analyze: (self parse: aString) forClass: aClass
! !

!ASTInterpreterTest methodsFor: 'private'!

interpret: aString receiver: anObject withArguments: aDictionary
	"The food is a methodNode. Interpret the sequenceNode only"
	
	| ctx ast interpreter |
	
	interpreter := ASTInterpreter new.
	ast := self parse: aString forClass: anObject class.
	
	ctx := AIContext new
		receiver: anObject;
		interpreter: interpreter;
		yourself.
		
	"Define locals for the context"
	ast sequenceNode ifNotNil: [ :sequence |
		sequence temps do: [ :each |
			ctx defineLocal: each ] ].
		
	aDictionary keysAndValuesDo: [ :key :value |
		ctx localAt: key put: value ].
	
	^ interpreter
		context: ctx;
		interpret: ast nextChild;
		proceed;
		result
! !

!ASTInterpreterTest methodsFor: 'testing'!

should: aString receiver: anObject return: aResult
	receiver := anObject.
	
	^ self 
		assert: (self interpret: aString receiver: receiver withArguments: #{})
		equals: aResult
!

should: aString return: anObject
	^ self 
		should: aString
		receiver: receiver
		return: anObject
! !

ASTInterpreterTest subclass: #ASTDebuggerTest
	instanceVariableNames: ''
	package: 'Compiler-Tests'!

!ASTDebuggerTest methodsFor: 'private'!

interpret: aString receiver: anObject withArguments: aDictionary
	| ctx ast debugger |
	
	ctx := AIContext new
		receiver: anObject;
		interpreter: ASTInterpreter new;
		yourself.
	ast := self parse: aString forClass: anObject class.
		
	"Define locals for the context"
	ast sequenceNode ifNotNil: [ :sequence |
		sequence temps do: [ :each |
			ctx defineLocal: each ] ].
	
	aDictionary keysAndValuesDo: [ :key :value |
		ctx localAt: key put: value ].
	ctx interpreter context: ctx.
	
	ctx interpreter node: ast nextChild.
	
	debugger := ASTDebugger context: ctx.
	
	^ debugger 
		proceed; 
		result
! !

CodeGeneratorTest subclass: #InliningCodeGeneratorTest
	instanceVariableNames: ''
	package: 'Compiler-Tests'!

!InliningCodeGeneratorTest methodsFor: 'accessing'!

codeGeneratorClass
	^ InliningCodeGenerator
! !

TestCase subclass: #ScopeVarTest
	instanceVariableNames: ''
	package: 'Compiler-Tests'!

!ScopeVarTest methodsFor: 'tests'!

testClassRefVar
	| node |
	node := VariableNode new
		value: 'Object';
		yourself.
	SemanticAnalyzer new 
		pushScope: MethodLexicalScope new;
		visit: node.
	self assert: node binding isClassRefVar
!

testInstanceVar
	| node scope |
	node := VariableNode new
		value: 'bzzz';
		yourself.
	scope := MethodLexicalScope new.
	scope addIVar: 'bzzz'.
	self assert: (scope bindingFor: node) isInstanceVar
!

testPseudoVar
	| node pseudoVars |
	pseudoVars := #('self' 'super' 'true' 'false' 'nil').
	pseudoVars do: [:each |
		node := VariableNode new
		value: each;
		yourself.
		self assert: (MethodLexicalScope new bindingFor: node) isPseudoVar ]
!

testTempVar
	| node scope |
	node := VariableNode new
		value: 'bzzz';
		yourself.
	scope := MethodLexicalScope new.
	scope addTemp: 'bzzz'.
	self assert: (scope bindingFor: node) isTempVar
!

testUnknownVar
	| node |
	node := VariableNode new
		value: 'bzzz';
		yourself.
	self assert: (MethodLexicalScope new bindingFor: node) isNil
! !

TestCase subclass: #SemanticAnalyzerTest
	instanceVariableNames: 'analyzer'
	package: 'Compiler-Tests'!

!SemanticAnalyzerTest methodsFor: 'running'!

setUp
	analyzer := SemanticAnalyzer on: Object
! !

!SemanticAnalyzerTest methodsFor: 'tests'!

testAssignment
	| src ast |

	src := 'foo self := 1'.
	ast := Smalltalk parse: src.
	self should: [analyzer visit: ast] raise: InvalidAssignmentError
!

testNonLocalReturn
	| src ast |

	src := 'foo | a | a + 1. ^ a'.
	ast := Smalltalk parse: src.
	analyzer visit: ast.

	self deny: ast scope hasNonLocalReturn
!

testNonLocalReturn2
	| src ast |

	src := 'foo | a | a + 1. [ [ ^ a] ]'.
	ast := Smalltalk parse: src.
	analyzer visit: ast.

	self assert: ast scope hasNonLocalReturn
!

testScope
	| src ast |

	src := 'foo | a | a + 1. [ | b | b := a ]'.
	ast := Smalltalk parse: src.
	analyzer visit: ast.

	self deny: ast nodes first nodes last scope == ast scope.
!

testScope2
	| src ast |

	src := 'foo | a | a + 1. [ [ | b | b := a ] ]'.
	ast := Smalltalk parse: src.
	analyzer visit: ast.

	self deny: ast nodes first nodes last nodes first nodes first scope == ast scope.
!

testScopeLevel
	| src ast |

	src := 'foo | a | a + 1. [ [ | b | b := a ] ]'.
	ast := Smalltalk parse: src.
	analyzer visit: ast.

	self assert: ast scope scopeLevel equals: 1.
	self assert: ast nodes first nodes last nodes first nodes first scope scopeLevel equals: 3
!

testUnknownVariables
	| src ast |

	src := 'foo | a | b + a'.
	ast := Smalltalk parse: src.

	self should: [ analyzer visit: ast ] raise: UnknownVariableError
!

testUnknownVariablesWithScope
	| src ast |

	src := 'foo | a b | [ c + 1. [ a + 1. d + 1 ]]'.
	ast := Smalltalk parse: src.
	
	self should: [ analyzer visit: ast ] raise: UnknownVariableError
!

testVariableShadowing
	| src ast |
	src := 'foo | a | a + 1'.
	ast := Smalltalk parse: src.
	analyzer visit: ast
!

testVariableShadowing2
	| src ast |
	src := 'foo | a | a + 1. [ | a | a := 2 ]'.
	ast := Smalltalk parse: src.
	self should: [analyzer visit: ast] raise: ShadowingVariableError
!

testVariableShadowing3
	| src ast |
	src := 'foo | a | a + 1. [ | b | b := 2 ]'.
	ast := Smalltalk parse: src.
	analyzer visit: ast
!

testVariableShadowing4
	| src ast |
	src := 'foo | a | a + 1. [ [ [ | b | b := 2 ] ] ]'.
	ast := Smalltalk parse: src.
	analyzer visit: ast
!

testVariableShadowing5
	| src ast |
	src := 'foo | a | a + 1. [ [ [ | a | a := 2 ] ] ]'.
	ast := Smalltalk parse: src.
	self should: [analyzer visit: ast] raise: ShadowingVariableError
!

testVariablesLookup
	| src ast |

	src := 'foo | a | a + 1. [ | b | b := a ]'.
	ast := Smalltalk parse: src.
	analyzer visit: ast.

	"Binding for `a` in the message send"
	self assert: ast nodes first nodes first receiver binding isTempVar.
	self assert: ast nodes first nodes first receiver binding scope == ast scope.

	"Binding for `b`"
	self assert: ast nodes first nodes last nodes first nodes first left binding isTempVar.
	self assert: ast nodes first nodes last nodes first nodes first left binding scope == ast nodes first nodes last scope.
! !

SemanticAnalyzerTest subclass: #AISemanticAnalyzerTest
	instanceVariableNames: ''
	package: 'Compiler-Tests'!

!AISemanticAnalyzerTest methodsFor: 'running'!

setUp
	analyzer := (AISemanticAnalyzer on: Object)
		context: (AIContext new
			defineLocal: 'local';
			localAt: 'local' put: 3;
			yourself);
		yourself
! !

!AISemanticAnalyzerTest methodsFor: 'tests'!

testContextVariables
	| src ast |
	
	src := 'foo | a | local + a'.
	ast := Smalltalk parse: src.

	self shouldnt: [ analyzer visit: ast ] raise: UnknownVariableError
! !

