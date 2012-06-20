Smalltalk current createPackage: 'Compiler-Tests' properties: #{}!
TestCase subclass: #IRASTTranslatorTest
	instanceVariableNames: ''
	package: 'Compiler-Tests'!

!IRASTTranslatorTest methodsFor: 'tests'!

testIRMethod
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

	src := 'foo self  := 1'.
	ast := smalltalk parse: src.
	self should: [analyzer visit: ast] raise: InvalidAssignmentError
!

testNonLocalReturn
	| src ast |

	src := 'foo | a | a + 1. ^ a'.
	ast := smalltalk parse: src.
	analyzer visit: ast.

	self deny: ast hasNonLocalReturn
!

testNonLocalReturn2
	| src ast |

	src := 'foo | a | a + 1. [ [ ^ a] ]'.
	ast := smalltalk parse: src.
	analyzer visit: ast.

	self assert: ast hasNonLocalReturn
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

	self assert: ast scope scopeLevel = 1.
	self assert: ast nodes first nodes last nodes first nodes first scope scopeLevel = 3
!

testUnknownVariables
	| src ast |

	src := 'foo | a | b + a'.
	ast := smalltalk parse: src.
	analyzer visit: ast.

	self assert: ast scope unknownVariables = #('b')
!

testUnknownVariablesWithScope
	| src ast |

	src := 'foo | a b | [ c + 1. [ a + 1. d + 1 ]]'.
	ast := smalltalk parse: src.
	analyzer visit: ast.

	self assert: ast scope unknownVariables = #('c' 'd' )
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

