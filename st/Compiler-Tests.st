Smalltalk current createPackage: 'Compiler-Tests'!
TestCase subclass: #ASTVisitorTest
	instanceVariableNames: ''
	package: 'Compiler-Tests'!

!ASTVisitorTest methodsFor: 'convenience'!

analyze: aNode forClass: aClass
	(SemanticAnalyzer on: aClass) visit: aNode.
	^ aNode
! !

!ASTVisitorTest methodsFor: 'parsing'!

parse: aString
	^ Smalltalk current parse: aString
!

parse: aString forClass: aClass
	^ self analyze: (self parse: aString) forClass: aClass
! !

ASTVisitorTest subclass: #ASTPCNodeVisitorTest
	instanceVariableNames: ''
	package: 'Compiler-Tests'!

!ASTPCNodeVisitorTest methodsFor: 'factory'!

astPCNodeVisitor
	^ self astPCNodeVisitorForPC: 0
!

astPCNodeVisitorForPC: anInteger
	^ ASTPCNodeVisitor new
		pc: 0;
		context: (AIContext new 
			pc: anInteger; 
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
	self assert: ((self astPCNodeVisitorForPC: 2)
		visit: ast;
		currentNode) selector equals: 'yourself'
!

testMessageSendWithInlining
	| ast |
	
	ast := self parse: 'foo true ifTrue: [ self asString yourself ]. ^ self asBoolean' forClass: Object.
	self assert: ((self astPCNodeVisitorForPC: 2)
		visit: ast;
		currentNode) selector equals: 'yourself'.
		
	ast := self parse: 'foo true ifTrue: [ self asString yourself ]. ^ self asBoolean' forClass: Object.
	self assert: ((self astPCNodeVisitorForPC: 3)
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

ASTVisitorTest subclass: #AbstractASTInterpreterTest
	instanceVariableNames: ''
	package: 'Compiler-Tests'!

!AbstractASTInterpreterTest methodsFor: 'accessing'!

interpreter
	^ self subclassResponsibility
! !

!AbstractASTInterpreterTest methodsFor: 'interpreting'!

interpret: aString
	^ self
		interpret: aString
		withArguments: Dictionary new
!

interpret: aString receiver: anObject withArguments: aDictionary
	"The food is a methodNode. Interpret the sequenceNode only"
	
	| ctx |
	
	ctx := AIContext new.
	ctx receiver: anObject.
	aDictionary keysAndValuesDo: [ :key :value |
		ctx localAt: key put: value ].
	
	^ self interpreter
		context: ctx;
		interpret: (self parse: aString forClass: anObject class)
			nodes first;
		result
!

interpret: aString withArguments: aDictionary
	^ self
		interpret: aString
		receiver: Object new
		withArguments: aDictionary
! !

AbstractASTInterpreterTest subclass: #ASTInterpreterTest
	instanceVariableNames: ''
	package: 'Compiler-Tests'!

!ASTInterpreterTest methodsFor: 'accessing'!

interpreter
	^ ASTInterpreter new
! !

!ASTInterpreterTest methodsFor: 'tests'!

testBinarySend
	self assert: (self interpret: 'foo 2+3+4') equals: 9
!

testBlockLiteral
	self assert: (self interpret: 'foo ^ true ifTrue: [ 1 ] ifFalse: [ 2 ]') equals: 1.
	self assert: (self interpret: 'foo true ifTrue: [ ^ 1 ] ifFalse: [ 2 ]') equals: 1.
	self assert: (self interpret: 'foo ^ false ifTrue: [ 1 ] ifFalse: [ 2 ]') equals: 2
!

testCascade
	self assert: (self interpret: 'foo ^ OrderedCollection new add: 2; add: 3; yourself') equals: (OrderedCollection with: 2 with: 3)
!

testDynamicArray
	self assert: (self interpret: 'foo ^ {1+1. 2+2}') equals: #(2 4)
!

testDynamicDictionary
	self assert: (self interpret: 'foo ^ #{1->1. 2->3}') equals: #{1->1. 2->3}
!

testInlinedJSStatement
	self assert: (self interpret: 'foo <return 2+3>') equals: 5.
	
	self
		assert: (self
			interpret: 'foo: anInteger <return 2 + anInteger>'
			withArguments: #{ 'anInteger' -> 3})
		equals: 5
!

testInstVarAccess
	self
		assert: (self
			interpret: 'foo ^ x'
			receiver: 2@3
			withArguments: #{})
		equals: 2
!

testInstVarAssignment
	self
		assert: (self
			interpret: 'foo: anInteger x := anInteger. ^ x'
			receiver: Point new
			withArguments: #{'anInteger' -> 2})
		equals: 2
!

testNonlocalReturn
	self assert: (self interpret: 'foo true ifTrue: [ ^ 1 ]. ^2') equals: 1
!

testReceiver
	self
		assert: (self
			interpret: 'foo ^ self'
			receiver: 2@3
			withArguments: #{})
		equals: 2@3
!

testSuper
	self 
		assert: (self 
			interpret: 'foo ^ super isBoolean' 
			receiver: true 
			withArguments: Dictionary new) 
		equals: false
!

testTempAssignment
	self assert: (self interpret: 'foo | a | a := 2. ^ a') equals: 2
!

testThisContext
	self assert: (self interpret: 'foo ^ thisContext') outerContext isNil.
	self assert: (self interpret: 'foo ^ [ thisContext ] value') outerContext notNil.
	self assert: (self interpret: 'foo ^ [ thisContext ] value outerContext == thisContext')
! !

AbstractASTInterpreterTest subclass: #ASTSteppingInterpreterTest
	instanceVariableNames: 'interpreter'
	package: 'Compiler-Tests'!

!ASTSteppingInterpreterTest methodsFor: 'accessing'!

interpreter
	^ interpreter ifNil: [ interpreter := ASTSteppingInterpreter new ]
! !

!ASTSteppingInterpreterTest methodsFor: 'tests'!

testAtEnd
	self interpret: 'foo 1 + 2'.
	self deny: self interpreter atEnd.

	self interpreter step.
	self deny: self interpreter atEnd.
	
	self interpreter step.
	self deny: self interpreter atEnd.
	
	self interpreter step.
	self deny: self interpreter atEnd.
	
	self interpreter step.
	self assert: self interpreter atEnd
!

testMessageSend
	self interpret: 'foo 1 + 2'.
	
	"SequenceNode"
	self interpreter step.
	
	"SendNode"
	self interpreter step.
	
	"ValueNode"
	self interpreter step.
	self assert: self interpreter currentNode value equals: 1.
	
	"ValueNode"
	self interpreter step.
	self assert: self interpreter currentNode value equals: 2.
	
	"Result"
	self interpreter step.
	self assert: self interpreter result equals: 3
!

testSimpleStepping
	self interpret: 'foo 1'.
	
	"SequenceNode"
	self interpreter step.
	
	self assert: self interpreter result isNil.
	
	"ValueNode"
	self interpreter step.
	
	self assert: self interpreter result equals: 1
! !

TestCase subclass: #CodeGeneratorTest
	instanceVariableNames: 'receiver'
	package: 'Compiler-Tests'!

!CodeGeneratorTest methodsFor: 'accessing'!

codeGeneratorClass
	^ CodeGenerator
!

targetClass
	^ DoIt
! !

!CodeGeneratorTest methodsFor: 'factory'!

compiler
	^ Compiler new
		codeGeneratorClass: self codeGeneratorClass;
		yourself
! !

!CodeGeneratorTest methodsFor: 'initialization'!

setUp
	receiver := self targetClass new
!

tearDown
	"receiver := nil"
! !

!CodeGeneratorTest methodsFor: 'testing'!

should: aString return: anObject
	| method result |

	method := self compiler install: aString forClass: self targetClass category: 'tests'.
	result := receiver perform: method selector.
	self targetClass removeCompiledMethod: method.
	self assert: anObject equals: result
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

testDynamicArrayElementsOrdered
	self should: 'foo
	| x |
	x := 1.
	^ { x. true ifTrue: [ x := 2 ] }
' return: #(1 2).
!

testDynamicDictionaryElementsOrdered
	self should: 'foo
	| x |
	x := ''foo''->1.
	^ #{ x. (true ifTrue: [ x := ''bar''->2 ]) }
' return: #{'foo'->1. 'bar'->2}.
!

testInnerTemporalDependentElementsOrdered
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

testLiterals
	self should: 'foo ^ 1' return: 1.
	self should: 'foo ^ ''hello''' return: 'hello'.
	self should: 'foo ^ #(1 2 3 4)' return: #(1 2 3 4).
	self should: 'foo ^ {1. [:x | x ] value: 2. 3. [4] value}' return: #(1 2 3 4).
	self should: 'foo ^ true' return: true.
	self should: 'foo ^ false' return: false.
	self should: 'foo ^ #{1->2. 3->4}' return: #{1->2. 3->4}.
	self should: 'foo ^ #hello' return: #hello.
	self should: 'foo ^ -123.456' return: -123.456
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

testNonLocalReturn
	self should: 'foo [ ^ 1 ] value' return: 1.
	self should: 'foo [ ^ 1 + 1 ] value' return: 2.
	self should: 'foo | a b | a := 1. b := 2. [ ^ a + b ] value. self halt' return: 3.
	self should: 'foo [ :x | ^ x + x ] value: 4. ^ 2' return: 8
!

testPascalCaseGlobal
	self should: 'foo ^Object' return: (smalltalk at: 'Object').
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
	node := ClassReferenceNode new
		value: 'Object';
		yourself.
	SemanticAnalyzer new visit: node.
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
	ast := smalltalk parse: src.
	self should: [analyzer visit: ast] raise: InvalidAssignmentError
!

testNonLocalReturn
	| src ast |

	src := 'foo | a | a + 1. ^ a'.
	ast := smalltalk parse: src.
	analyzer visit: ast.

	self deny: ast scope hasNonLocalReturn
!

testNonLocalReturn2
	| src ast |

	src := 'foo | a | a + 1. [ [ ^ a] ]'.
	ast := smalltalk parse: src.
	analyzer visit: ast.

	self assert: ast scope hasNonLocalReturn
!

testScope
	| src ast |

	src := 'foo | a | a + 1. [ | b | b := a ]'.
	ast := smalltalk parse: src.
	analyzer visit: ast.

	self deny: ast nodes first nodes last scope == ast scope.
!

testScope2
	| src ast |

	src := 'foo | a | a + 1. [ [ | b | b := a ] ]'.
	ast := smalltalk parse: src.
	analyzer visit: ast.

	self deny: ast nodes first nodes last nodes first nodes first scope == ast scope.
!

testScopeLevel
	| src ast |

	src := 'foo | a | a + 1. [ [ | b | b := a ] ]'.
	ast := smalltalk parse: src.
	analyzer visit: ast.

	self assert: ast scope scopeLevel equals: 1.
	self assert: ast nodes first nodes last nodes first nodes first scope scopeLevel equals: 3
!

testUnknownVariables
	| src ast |

	src := 'foo | a | b + a'.
	ast := smalltalk parse: src.

	self should: [ analyzer visit: ast ] raise: UnknownVariableError
!

testUnknownVariablesWithScope
	| src ast |

	src := 'foo | a b | [ c + 1. [ a + 1. d + 1 ]]'.
	ast := smalltalk parse: src.
	
	self should: [ analyzer visit: ast ] raise: UnknownVariableError
!

testVariableShadowing
	| src ast |
	src := 'foo | a | a + 1'.
	ast := smalltalk parse: src.
	analyzer visit: ast
!

testVariableShadowing2
	| src ast |
	src := 'foo | a | a + 1. [ | a | a := 2 ]'.
	ast := smalltalk parse: src.
	self should: [analyzer visit: ast] raise: ShadowingVariableError
!

testVariableShadowing3
	| src ast |
	src := 'foo | a | a + 1. [ | b | b := 2 ]'.
	ast := smalltalk parse: src.
	analyzer visit: ast
!

testVariableShadowing4
	| src ast |
	src := 'foo | a | a + 1. [ [ [ | b | b := 2 ] ] ]'.
	ast := smalltalk parse: src.
	analyzer visit: ast
!

testVariableShadowing5
	| src ast |
	src := 'foo | a | a + 1. [ [ [ | a | a := 2 ] ] ]'.
	ast := smalltalk parse: src.
	self should: [analyzer visit: ast] raise: ShadowingVariableError
!

testVariablesLookup
	| src ast |

	src := 'foo | a | a + 1. [ | b | b := a ]'.
	ast := smalltalk parse: src.
	analyzer visit: ast.

	"Binding for `a` in the message send"
	self assert: ast nodes first nodes first receiver binding isTempVar.
	self assert: ast nodes first nodes first receiver binding scope == ast scope.

	"Binding for `b`"
	self assert: ast nodes first nodes last nodes first nodes first left binding isTempVar.
	self assert: ast nodes first nodes last nodes first nodes first left binding scope == ast nodes first nodes last scope.
! !

