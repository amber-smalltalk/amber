smalltalk.addPackage('Compiler-Tests', {});
smalltalk.addClass('ASTInterpretorTest', smalltalk.TestCase, [], 'Compiler-Interpreter');
smalltalk.addMethod(
"_analyze_forClass_",
smalltalk.method({
selector: "analyze:forClass:",
fn: function (aNode,aClass){
var self=this;
_st(_st((smalltalk.SemanticAnalyzer || SemanticAnalyzer))._on_(aClass))._visit_(aNode);
return aNode;
}
}),
smalltalk.ASTInterpretorTest);

smalltalk.addMethod(
"_interpret_",
smalltalk.method({
selector: "interpret:",
fn: function (aString){
var self=this;
var $1;
$1=_st(_st((smalltalk.ASTInterpreter || ASTInterpreter))._new())._interpret_(_st(_st(_st(self)._parse_forClass_(aString,(smalltalk.Object || Object)))._nodes())._first());
return $1;
}
}),
smalltalk.ASTInterpretorTest);

smalltalk.addMethod(
"_parse_",
smalltalk.method({
selector: "parse:",
fn: function (aString){
var self=this;
var $1;
$1=_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._parse_(aString);
return $1;
}
}),
smalltalk.ASTInterpretorTest);

smalltalk.addMethod(
"_parse_forClass_",
smalltalk.method({
selector: "parse:forClass:",
fn: function (aString,aClass){
var self=this;
var $1;
$1=_st(self)._analyze_forClass_(_st(self)._parse_(aString),aClass);
return $1;
}
}),
smalltalk.ASTInterpretorTest);

smalltalk.addMethod(
"_testBinarySend",
smalltalk.method({
selector: "testBinarySend",
fn: function (){
var self=this;
_st(self)._assert_equals_(_st(self)._interpret_("foo 2+3+4"),(9));
return self}
}),
smalltalk.ASTInterpretorTest);

smalltalk.addMethod(
"_testBlockLiteral",
smalltalk.method({
selector: "testBlockLiteral",
fn: function (){
var self=this;
_st(self)._assert_(false);
return self}
}),
smalltalk.ASTInterpretorTest);



smalltalk.addClass('CodeGeneratorTest', smalltalk.TestCase, ['receiver'], 'Compiler-Tests');
smalltalk.addMethod(
"_codeGeneratorClass",
smalltalk.method({
selector: "codeGeneratorClass",
fn: function (){
var self=this;
return (smalltalk.CodeGenerator || CodeGenerator);
}
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_compiler",
smalltalk.method({
selector: "compiler",
fn: function (){
var self=this;
var $2,$3,$1;
$2=_st((smalltalk.Compiler || Compiler))._new();
_st($2)._codeGeneratorClass_(_st(self)._codeGeneratorClass());
$3=_st($2)._yourself();
$1=$3;
return $1;
}
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
self["@receiver"]=_st(_st(self)._targetClass())._new();
return self}
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_should_return_",
smalltalk.method({
selector: "should:return:",
fn: function (aString,anObject){
var self=this;
var method;
var result;
method=_st(_st(self)._compiler())._install_forClass_category_(aString,_st(self)._targetClass(),"tests");
result=_st(self["@receiver"])._perform_(_st(method)._selector());
_st(_st(self)._targetClass())._removeCompiledMethod_(method);
_st(self)._assert_equals_(anObject,result);
return self}
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_targetClass",
smalltalk.method({
selector: "targetClass",
fn: function (){
var self=this;
return (smalltalk.DoIt || DoIt);
}
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
fn: function (){
var self=this;
return self}
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testAssignment",
smalltalk.method({
selector: "testAssignment",
fn: function (){
var self=this;
_st(self)._should_return_("foo | a | a := true ifTrue: [ 1 ]. ^ a",(1));
_st(self)._should_return_("foo | a | a := false ifTrue: [ 1 ]. ^ a",nil);
_st(self)._should_return_("foo | a | ^ a := true ifTrue: [ 1 ]",(1));
return self}
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testBlockReturn",
smalltalk.method({
selector: "testBlockReturn",
fn: function (){
var self=this;
_st(self)._should_return_("foo ^ #(1 2 3) collect: [ :each | true ifTrue: [ each + 1 ] ]",[(2), (3), (4)]);
_st(self)._should_return_("foo ^ #(1 2 3) collect: [ :each | false ifFalse: [ each + 1 ] ]",[(2), (3), (4)]);
_st(self)._should_return_("foo ^ #(1 2 3) collect: [ :each | each odd ifTrue: [ each + 1 ] ifFalse: [ each - 1 ] ]",[(2), (1), (4)]);
return self}
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testCascades",
smalltalk.method({
selector: "testCascades",
fn: function (){
var self=this;
_st(self)._should_return_("foo ^ Array new add: 3; add: 4; yourself",[(3), (4)]);
return self}
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testLiterals",
smalltalk.method({
selector: "testLiterals",
fn: function (){
var self=this;
_st(self)._should_return_("foo ^ 1",(1));
_st(self)._should_return_("foo ^ 'hello'","hello");
_st(self)._should_return_("foo ^ #(1 2 3 4)",[(1), (2), (3), (4)]);
_st(self)._should_return_("foo ^ {1. [:x | x ] value: 2. 3. [4] value}",[(1), (2), (3), (4)]);
_st(self)._should_return_("foo ^ true",true);
_st(self)._should_return_("foo ^ false",false);
_st(self)._should_return_("foo ^ #{1->2. 3->4}",smalltalk.HashedCollection._fromPairs_([_st((1)).__minus_gt((2)),_st((3)).__minus_gt((4))]));
_st(self)._should_return_("foo ^ #hello",smalltalk.symbolFor("hello"));
_st(self)._should_return_("foo ^ -123.456",(-123.456));
return self}
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testLocalReturn",
smalltalk.method({
selector: "testLocalReturn",
fn: function (){
var self=this;
_st(self)._should_return_("foo ^ 1",(1));
_st(self)._should_return_("foo ^ 1 + 1",(2));
_st(self)._should_return_("foo ",self["@receiver"]);
_st(self)._should_return_("foo self asString",self["@receiver"]);
_st(self)._should_return_("foo | a b | a := 1. b := 2. ^ a + b",(3));
return self}
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testMessageSends",
smalltalk.method({
selector: "testMessageSends",
fn: function (){
var self=this;
_st(self)._should_return_("foo ^ 1 asString","1");
_st(self)._should_return_("foo ^ 1 + 1",(2));
_st(self)._should_return_("foo ^ 1 + 2 * 3",(9));
_st(self)._should_return_("foo ^ 1 to: 3",[(1), (2), (3)]);
_st(self)._should_return_("foo ^ 1 to: 5 by: 2",[(1), (3), (5)]);
return self}
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testNestedIfTrue",
smalltalk.method({
selector: "testNestedIfTrue",
fn: function (){
var self=this;
_st(self)._should_return_("foo ^ true ifTrue: [ false ifFalse: [ 1 ] ]",(1));
_st(self)._should_return_("foo ^ true ifTrue: [ false ifTrue: [ 1 ] ]",nil);
_st(self)._should_return_("foo true ifTrue: [ false ifFalse: [ ^ 1 ] ]",(1));
_st(self)._should_return_("foo true ifTrue: [ false ifTrue: [ ^ 1 ] ]",self["@receiver"]);
return self}
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testNonLocalReturn",
smalltalk.method({
selector: "testNonLocalReturn",
fn: function (){
var self=this;
_st(self)._should_return_("foo [ ^ 1 ] value",(1));
_st(self)._should_return_("foo [ ^ 1 + 1 ] value",(2));
_st(self)._should_return_("foo | a b | a := 1. b := 2. [ ^ a + b ] value. self halt",(3));
_st(self)._should_return_("foo [ :x | ^ x + x ] value: 4. ^ 2",(8));
return self}
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testifFalse",
smalltalk.method({
selector: "testifFalse",
fn: function (){
var self=this;
_st(self)._should_return_("foo true ifFalse: [ ^ 1 ]",self["@receiver"]);
_st(self)._should_return_("foo false ifFalse: [ ^ 2 ]",(2));
_st(self)._should_return_("foo ^ true ifFalse: [ 1 ]",nil);
_st(self)._should_return_("foo ^ false ifFalse: [ 2 ]",(2));
return self}
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testifFalseIfTrue",
smalltalk.method({
selector: "testifFalseIfTrue",
fn: function (){
var self=this;
_st(self)._should_return_("foo true ifFalse: [ ^ 1 ] ifTrue: [ ^ 2 ]",(2));
_st(self)._should_return_("foo false ifFalse: [ ^ 2 ] ifTrue: [ ^1 ]",(2));
_st(self)._should_return_("foo ^ true ifFalse: [ 1 ] ifTrue: [ 2 ]",(2));
_st(self)._should_return_("foo ^ false ifFalse: [ 2 ] ifTrue: [ 1 ]",(2));
return self}
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testifNil",
smalltalk.method({
selector: "testifNil",
fn: function (){
var self=this;
_st(self)._should_return_("foo ^ 1 ifNil: [ 2 ]",(1));
_st(self)._should_return_("foo ^ nil ifNil: [ 2 ]",(2));
_st(self)._should_return_("foo 1 ifNil: [ ^ 2 ]",self["@receiver"]);
_st(self)._should_return_("foo nil ifNil: [ ^ 2 ]",(2));
return self}
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testifNilIfNotNil",
smalltalk.method({
selector: "testifNilIfNotNil",
fn: function (){
var self=this;
_st(self)._should_return_("foo ^ 1 ifNil: [ 2 ] ifNotNil: [ 3 ]",(3));
_st(self)._should_return_("foo ^ nil ifNil: [ 2 ] ifNotNil: [ 3 ]",(2));
_st(self)._should_return_("foo 1 ifNil: [ ^ 2 ] ifNotNil: [ ^3 ]",(3));
_st(self)._should_return_("foo nil ifNil: [ ^ 2 ] ifNotNil: [ ^3 ]",(2));
return self}
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testifNotNil",
smalltalk.method({
selector: "testifNotNil",
fn: function (){
var self=this;
_st(self)._should_return_("foo ^ 1 ifNotNil: [ 2 ]",(2));
_st(self)._should_return_("foo ^ nil ifNotNil: [ 2 ]",nil);
_st(self)._should_return_("foo 1 ifNotNil: [ ^ 2 ]",(2));
_st(self)._should_return_("foo nil ifNotNil: [ ^ 2 ]",self["@receiver"]);
return self}
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testifTrue",
smalltalk.method({
selector: "testifTrue",
fn: function (){
var self=this;
_st(self)._should_return_("foo false ifTrue: [ ^ 1 ]",self["@receiver"]);
_st(self)._should_return_("foo true ifTrue: [ ^ 2 ]",(2));
_st(self)._should_return_("foo ^ false ifTrue: [ 1 ]",nil);
_st(self)._should_return_("foo ^ true ifTrue: [ 2 ]",(2));
return self}
}),
smalltalk.CodeGeneratorTest);

smalltalk.addMethod(
"_testifTrueIfFalse",
smalltalk.method({
selector: "testifTrueIfFalse",
fn: function (){
var self=this;
_st(self)._should_return_("foo false ifTrue: [ ^ 1 ] ifFalse: [ ^2 ]",(2));
_st(self)._should_return_("foo true ifTrue: [ ^ 1 ] ifFalse: [ ^ 2 ]",(1));
_st(self)._should_return_("foo ^ false ifTrue: [ 2 ] ifFalse: [ 1 ]",(1));
_st(self)._should_return_("foo ^ true ifTrue: [ 2 ] ifFalse: [ 1 ]",(2));
return self}
}),
smalltalk.CodeGeneratorTest);



smalltalk.addClass('InliningCodeGeneratorTest', smalltalk.CodeGeneratorTest, [], 'Compiler-Tests');
smalltalk.addMethod(
"_codeGeneratorClass",
smalltalk.method({
selector: "codeGeneratorClass",
fn: function (){
var self=this;
return (smalltalk.InliningCodeGenerator || InliningCodeGenerator);
}
}),
smalltalk.InliningCodeGeneratorTest);



smalltalk.addClass('ScopeVarTest', smalltalk.TestCase, [], 'Compiler-Tests');
smalltalk.addMethod(
"_testClassRefVar",
smalltalk.method({
selector: "testClassRefVar",
fn: function (){
var self=this;
var $1,$2;
var node;
$1=_st((smalltalk.ClassReferenceNode || ClassReferenceNode))._new();
_st($1)._value_("Object");
$2=_st($1)._yourself();
node=$2;
_st(_st((smalltalk.SemanticAnalyzer || SemanticAnalyzer))._new())._visit_(node);
_st(self)._assert_(_st(_st(node)._binding())._isClassRefVar());
return self}
}),
smalltalk.ScopeVarTest);

smalltalk.addMethod(
"_testInstanceVar",
smalltalk.method({
selector: "testInstanceVar",
fn: function (){
var self=this;
var $1,$2;
var node;
var scope;
$1=_st((smalltalk.VariableNode || VariableNode))._new();
_st($1)._value_("bzzz");
$2=_st($1)._yourself();
node=$2;
scope=_st((smalltalk.MethodLexicalScope || MethodLexicalScope))._new();
_st(scope)._addIVar_("bzzz");
_st(self)._assert_(_st(_st(scope)._bindingFor_(node))._isInstanceVar());
return self}
}),
smalltalk.ScopeVarTest);

smalltalk.addMethod(
"_testPseudoVar",
smalltalk.method({
selector: "testPseudoVar",
fn: function (){
var self=this;
var $1,$2;
var node;
var pseudoVars;
pseudoVars=["self", "super", "true", "false", "nil"];
_st(pseudoVars)._do_((function(each){
$1=_st((smalltalk.VariableNode || VariableNode))._new();
_st($1)._value_(each);
$2=_st($1)._yourself();
node=$2;
node;
return _st(self)._assert_(_st(_st(_st((smalltalk.MethodLexicalScope || MethodLexicalScope))._new())._bindingFor_(node))._isPseudoVar());
}));
return self}
}),
smalltalk.ScopeVarTest);

smalltalk.addMethod(
"_testTempVar",
smalltalk.method({
selector: "testTempVar",
fn: function (){
var self=this;
var $1,$2;
var node;
var scope;
$1=_st((smalltalk.VariableNode || VariableNode))._new();
_st($1)._value_("bzzz");
$2=_st($1)._yourself();
node=$2;
scope=_st((smalltalk.MethodLexicalScope || MethodLexicalScope))._new();
_st(scope)._addTemp_("bzzz");
_st(self)._assert_(_st(_st(scope)._bindingFor_(node))._isTempVar());
return self}
}),
smalltalk.ScopeVarTest);

smalltalk.addMethod(
"_testUnknownVar",
smalltalk.method({
selector: "testUnknownVar",
fn: function (){
var self=this;
var $1,$2;
var node;
$1=_st((smalltalk.VariableNode || VariableNode))._new();
_st($1)._value_("bzzz");
$2=_st($1)._yourself();
node=$2;
_st(self)._assert_(_st(_st(_st((smalltalk.MethodLexicalScope || MethodLexicalScope))._new())._bindingFor_(node))._isNil());
return self}
}),
smalltalk.ScopeVarTest);



smalltalk.addClass('SemanticAnalyzerTest', smalltalk.TestCase, ['analyzer'], 'Compiler-Tests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
self["@analyzer"]=_st((smalltalk.SemanticAnalyzer || SemanticAnalyzer))._on_((smalltalk.Object || Object));
return self}
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testAssignment",
smalltalk.method({
selector: "testAssignment",
fn: function (){
var self=this;
var src;
var ast;
src="foo self := 1";
ast=_st(smalltalk)._parse_(src);
_st(self)._should_raise_((function(){
return _st(self["@analyzer"])._visit_(ast);
}),(smalltalk.InvalidAssignmentError || InvalidAssignmentError));
return self}
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testNonLocalReturn",
smalltalk.method({
selector: "testNonLocalReturn",
fn: function (){
var self=this;
var src;
var ast;
src="foo | a | a + 1. ^ a";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
_st(self)._deny_(_st(_st(ast)._scope())._hasNonLocalReturn());
return self}
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testNonLocalReturn2",
smalltalk.method({
selector: "testNonLocalReturn2",
fn: function (){
var self=this;
var src;
var ast;
src="foo | a | a + 1. [ [ ^ a] ]";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
_st(self)._assert_(_st(_st(ast)._scope())._hasNonLocalReturn());
return self}
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testScope",
smalltalk.method({
selector: "testScope",
fn: function (){
var self=this;
var src;
var ast;
src="foo | a | a + 1. [ | b | b := a ]";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
_st(self)._deny_(_st(_st(_st(_st(_st(_st(ast)._nodes())._first())._nodes())._last())._scope()).__eq_eq(_st(ast)._scope()));
return self}
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testScope2",
smalltalk.method({
selector: "testScope2",
fn: function (){
var self=this;
var src;
var ast;
src="foo | a | a + 1. [ [ | b | b := a ] ]";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
_st(self)._deny_(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(ast)._nodes())._first())._nodes())._last())._nodes())._first())._nodes())._first())._scope()).__eq_eq(_st(ast)._scope()));
return self}
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testScopeLevel",
smalltalk.method({
selector: "testScopeLevel",
fn: function (){
var self=this;
var src;
var ast;
src="foo | a | a + 1. [ [ | b | b := a ] ]";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
_st(self)._assert_(_st(_st(_st(ast)._scope())._scopeLevel()).__eq((1)));
_st(self)._assert_(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(ast)._nodes())._first())._nodes())._last())._nodes())._first())._nodes())._first())._scope())._scopeLevel()).__eq((3)));
return self}
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testUnknownVariables",
smalltalk.method({
selector: "testUnknownVariables",
fn: function (){
var self=this;
var src;
var ast;
src="foo | a | b + a";
ast=_st(smalltalk)._parse_(src);
_st(self)._should_raise_((function(){
return _st(self["@analyzer"])._visit_(ast);
}),(smalltalk.UnknownVariableError || UnknownVariableError));
return self}
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testUnknownVariablesDefinedInJS",
smalltalk.method({
selector: "testUnknownVariablesDefinedInJS",
fn: function (){
var self=this;
 var someVariable = 1 ;
;
_st(self)._shouldnt_raise_((function(){
return _st(smalltalk)._parse_("foo someVariable");
}),(smalltalk.UnknownVariableError || UnknownVariableError));
return self}
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testUnknownVariablesWithScope",
smalltalk.method({
selector: "testUnknownVariablesWithScope",
fn: function (){
var self=this;
var src;
var ast;
src="foo | a b | [ c + 1. [ a + 1. d + 1 ]]";
ast=_st(smalltalk)._parse_(src);
_st(self)._should_raise_((function(){
return _st(self["@analyzer"])._visit_(ast);
}),(smalltalk.UnknownVariableError || UnknownVariableError));
return self}
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testVariableShadowing",
smalltalk.method({
selector: "testVariableShadowing",
fn: function (){
var self=this;
var src;
var ast;
src="foo | a | a + 1";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
return self}
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testVariableShadowing2",
smalltalk.method({
selector: "testVariableShadowing2",
fn: function (){
var self=this;
var src;
var ast;
src="foo | a | a + 1. [ | a | a := 2 ]";
ast=_st(smalltalk)._parse_(src);
_st(self)._should_raise_((function(){
return _st(self["@analyzer"])._visit_(ast);
}),(smalltalk.ShadowingVariableError || ShadowingVariableError));
return self}
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testVariableShadowing3",
smalltalk.method({
selector: "testVariableShadowing3",
fn: function (){
var self=this;
var src;
var ast;
src="foo | a | a + 1. [ | b | b := 2 ]";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
return self}
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testVariableShadowing4",
smalltalk.method({
selector: "testVariableShadowing4",
fn: function (){
var self=this;
var src;
var ast;
src="foo | a | a + 1. [ [ [ | b | b := 2 ] ] ]";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
return self}
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testVariableShadowing5",
smalltalk.method({
selector: "testVariableShadowing5",
fn: function (){
var self=this;
var src;
var ast;
src="foo | a | a + 1. [ [ [ | a | a := 2 ] ] ]";
ast=_st(smalltalk)._parse_(src);
_st(self)._should_raise_((function(){
return _st(self["@analyzer"])._visit_(ast);
}),(smalltalk.ShadowingVariableError || ShadowingVariableError));
return self}
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testVariablesLookup",
smalltalk.method({
selector: "testVariablesLookup",
fn: function (){
var self=this;
var src;
var ast;
src="foo | a | a + 1. [ | b | b := a ]";
ast=_st(smalltalk)._parse_(src);
_st(self["@analyzer"])._visit_(ast);
_st(self)._assert_(_st(_st(_st(_st(_st(_st(_st(ast)._nodes())._first())._nodes())._first())._receiver())._binding())._isTempVar());
_st(self)._assert_(_st(_st(_st(_st(_st(_st(_st(_st(ast)._nodes())._first())._nodes())._first())._receiver())._binding())._scope()).__eq_eq(_st(ast)._scope()));
_st(self)._assert_(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(ast)._nodes())._first())._nodes())._last())._nodes())._first())._nodes())._first())._left())._binding())._isTempVar());
_st(self)._assert_(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(ast)._nodes())._first())._nodes())._last())._nodes())._first())._nodes())._first())._left())._binding())._scope()).__eq_eq(_st(_st(_st(_st(_st(ast)._nodes())._first())._nodes())._last())._scope()));
return self}
}),
smalltalk.SemanticAnalyzerTest);



