smalltalk.addPackage('Compiler-Tests', {});
smalltalk.addClass('IRASTTranslatorTest', smalltalk.TestCase, [], 'Compiler-Tests');
smalltalk.addMethod(
"_testIRMethod",
smalltalk.method({
selector: "testIRMethod",
fn: function (){
var self=this;

return self;}
}),
smalltalk.IRASTTranslatorTest);



smalltalk.addClass('ScopeVarTest', smalltalk.TestCase, [], 'Compiler-Tests');
smalltalk.addMethod(
"_testClassRefVar",
smalltalk.method({
selector: "testClassRefVar",
fn: function (){
var self=this;
var node=nil;
(node=(function($rec){smalltalk.send($rec, "_value_", ["Object"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.ClassReferenceNode || ClassReferenceNode), "_new", [])));
smalltalk.send(smalltalk.send((smalltalk.SemanticAnalyzer || SemanticAnalyzer), "_new", []), "_visit_", [node]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(node, "_binding", []), "_isClassRefVar", [])]);
return self;}
}),
smalltalk.ScopeVarTest);

smalltalk.addMethod(
"_testInstanceVar",
smalltalk.method({
selector: "testInstanceVar",
fn: function (){
var self=this;
var node=nil;
var scope=nil;
(node=(function($rec){smalltalk.send($rec, "_value_", ["bzzz"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.VariableNode || VariableNode), "_new", [])));
(scope=smalltalk.send((smalltalk.MethodLexicalScope || MethodLexicalScope), "_new", []));
smalltalk.send(scope, "_addIVar_", ["bzzz"]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(scope, "_bindingFor_", [node]), "_isInstanceVar", [])]);
return self;}
}),
smalltalk.ScopeVarTest);

smalltalk.addMethod(
"_testPseudoVar",
smalltalk.method({
selector: "testPseudoVar",
fn: function (){
var self=this;
var node=nil;
var pseudoVars=nil;
(pseudoVars=["self", "super", "true", "false", "nil"]);
smalltalk.send(pseudoVars, "_do_", [(function(each){(node=(function($rec){smalltalk.send($rec, "_value_", [each]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.VariableNode || VariableNode), "_new", [])));return smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.MethodLexicalScope || MethodLexicalScope), "_new", []), "_bindingFor_", [node]), "_isPseudoVar", [])]);})]);
return self;}
}),
smalltalk.ScopeVarTest);

smalltalk.addMethod(
"_testTempVar",
smalltalk.method({
selector: "testTempVar",
fn: function (){
var self=this;
var node=nil;
var scope=nil;
(node=(function($rec){smalltalk.send($rec, "_value_", ["bzzz"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.VariableNode || VariableNode), "_new", [])));
(scope=smalltalk.send((smalltalk.MethodLexicalScope || MethodLexicalScope), "_new", []));
smalltalk.send(scope, "_addTemp_", ["bzzz"]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(scope, "_bindingFor_", [node]), "_isTempVar", [])]);
return self;}
}),
smalltalk.ScopeVarTest);

smalltalk.addMethod(
"_testUnknownVar",
smalltalk.method({
selector: "testUnknownVar",
fn: function (){
var self=this;
var node=nil;
(node=(function($rec){smalltalk.send($rec, "_value_", ["bzzz"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.VariableNode || VariableNode), "_new", [])));
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.MethodLexicalScope || MethodLexicalScope), "_new", []), "_bindingFor_", [node]), "_isNil", [])]);
return self;}
}),
smalltalk.ScopeVarTest);



smalltalk.addClass('SemanticAnalyzerTest', smalltalk.TestCase, ['analyzer'], 'Compiler-Tests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function () {
var self=this;
(self['@analyzer']=smalltalk.send((smalltalk.SemanticAnalyzer || SemanticAnalyzer), "_on_", [(smalltalk.Object || Object)]));
return self;}
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testAssignment",
smalltalk.method({
selector: "testAssignment",
fn: function () {
var self=this;
var src=nil;
var ast=nil;
(src="foo self  := 1");
(ast=smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_parse_", [src]));
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send(self['@analyzer'], "_visit_", [ast]);}), (smalltalk.InvalidAssignmentError || InvalidAssignmentError)]);
return self;}
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testNonLocalReturn",
smalltalk.method({
selector: "testNonLocalReturn",
fn: function () {
var self=this;
var src=nil;
var ast=nil;
(src="foo | a | a + 1. ^ a");
(ast=smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_parse_", [src]));
smalltalk.send(self['@analyzer'], "_visit_", [ast]);
smalltalk.send(self, "_deny_", [smalltalk.send(ast, "_hasNonLocalReturn", [])]);
return self;}
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testNonLocalReturn2",
smalltalk.method({
selector: "testNonLocalReturn2",
fn: function () {
var self=this;
var src=nil;
var ast=nil;
(src="foo | a | a + 1. [ [ ^ a] ]");
(ast=smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_parse_", [src]));
smalltalk.send(self['@analyzer'], "_visit_", [ast]);
smalltalk.send(self, "_assert_", [smalltalk.send(ast, "_hasNonLocalReturn", [])]);
return self;}
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testScope",
smalltalk.method({
selector: "testScope",
fn: function () {
var self=this;
var src=nil;
var ast=nil;
(src="foo | a | a + 1. [ | b | b := a ]");
(ast=smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_parse_", [src]));
smalltalk.send(self['@analyzer'], "_visit_", [ast]);
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(ast, "_nodes", []), "_first", []), "_nodes", []), "_last", []), "_scope", []), "__eq_eq", [smalltalk.send(ast, "_scope", [])])]);
return self;}
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testScope2",
smalltalk.method({
selector: "testScope2",
fn: function () {
var self=this;
var src=nil;
var ast=nil;
(src="foo | a | a + 1. [ [ | b | b := a ] ]");
(ast=smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_parse_", [src]));
smalltalk.send(self['@analyzer'], "_visit_", [ast]);
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(ast, "_nodes", []), "_first", []), "_nodes", []), "_last", []), "_nodes", []), "_first", []), "_nodes", []), "_first", []), "_scope", []), "__eq_eq", [smalltalk.send(ast, "_scope", [])])]);
return self;}
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testScopeLevel",
smalltalk.method({
selector: "testScopeLevel",
fn: function () {
var self=this;
var src=nil;
var ast=nil;
(src="foo | a | a + 1. [ [ | b | b := a ] ]");
(ast=smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_parse_", [src]));
smalltalk.send(self['@analyzer'], "_visit_", [ast]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(ast, "_scope", []), "_scopeLevel", []), "__eq", [(1)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(ast, "_nodes", []), "_first", []), "_nodes", []), "_last", []), "_nodes", []), "_first", []), "_nodes", []), "_first", []), "_scope", []), "_scopeLevel", []), "__eq", [(3)])]);
return self;}
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testUnknownVariables",
smalltalk.method({
selector: "testUnknownVariables",
fn: function () {
var self=this;
var src=nil;
var ast=nil;
(src="foo | a | b + a");
(ast=smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_parse_", [src]));
smalltalk.send(self['@analyzer'], "_visit_", [ast]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(ast, "_scope", []), "_unknownVariables", []), "__eq", [["b"]])]);
return self;}
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testUnknownVariablesWithScope",
smalltalk.method({
selector: "testUnknownVariablesWithScope",
fn: function () {
var self=this;
var src=nil;
var ast=nil;
(src="foo | a b | [ c + 1. [ a + 1. d + 1 ]]");
(ast=smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_parse_", [src]));
smalltalk.send(self['@analyzer'], "_visit_", [ast]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(ast, "_scope", []), "_unknownVariables", []), "__eq", [["c", "d"]])]);
return self;}
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testVariableShadowing",
smalltalk.method({
selector: "testVariableShadowing",
fn: function () {
var self=this;
var src=nil;
var ast=nil;
(src="foo | a | a + 1");
(ast=smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_parse_", [src]));
smalltalk.send(self['@analyzer'], "_visit_", [ast]);
return self;}
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testVariableShadowing2",
smalltalk.method({
selector: "testVariableShadowing2",
fn: function () {
var self=this;
var src=nil;
var ast=nil;
(src="foo | a | a + 1. [ | a | a := 2 ]");
(ast=smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_parse_", [src]));
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send(self['@analyzer'], "_visit_", [ast]);}), (smalltalk.ShadowingVariableError || ShadowingVariableError)]);
return self;}
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testVariableShadowing3",
smalltalk.method({
selector: "testVariableShadowing3",
fn: function () {
var self=this;
var src=nil;
var ast=nil;
(src="foo | a | a + 1. [ | b | b := 2 ]");
(ast=smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_parse_", [src]));
smalltalk.send(self['@analyzer'], "_visit_", [ast]);
return self;}
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testVariableShadowing4",
smalltalk.method({
selector: "testVariableShadowing4",
fn: function () {
var self=this;
var src=nil;
var ast=nil;
(src="foo | a | a + 1. [ [ [ | b | b := 2 ] ] ]");
(ast=smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_parse_", [src]));
smalltalk.send(self['@analyzer'], "_visit_", [ast]);
return self;}
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testVariableShadowing5",
smalltalk.method({
selector: "testVariableShadowing5",
fn: function () {
var self=this;
var src=nil;
var ast=nil;
(src="foo | a | a + 1. [ [ [ | a | a := 2 ] ] ]");
(ast=smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_parse_", [src]));
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send(self['@analyzer'], "_visit_", [ast]);}), (smalltalk.ShadowingVariableError || ShadowingVariableError)]);
return self;}
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testVariablesLookup",
smalltalk.method({
selector: "testVariablesLookup",
fn: function () {
var self=this;
var src=nil;
var ast=nil;
(src="foo | a | a + 1. [ | b | b := a ]");
(ast=smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_parse_", [src]));
smalltalk.send(self['@analyzer'], "_visit_", [ast]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(ast, "_nodes", []), "_first", []), "_nodes", []), "_first", []), "_receiver", []), "_binding", []), "_isTempVar", [])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(ast, "_nodes", []), "_first", []), "_nodes", []), "_first", []), "_receiver", []), "_binding", []), "_scope", []), "__eq_eq", [smalltalk.send(ast, "_scope", [])])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(ast, "_nodes", []), "_first", []), "_nodes", []), "_last", []), "_nodes", []), "_first", []), "_nodes", []), "_first", []), "_left", []), "_binding", []), "_isTempVar", [])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(ast, "_nodes", []), "_first", []), "_nodes", []), "_last", []), "_nodes", []), "_first", []), "_nodes", []), "_first", []), "_left", []), "_binding", []), "_scope", []), "__eq_eq", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(ast, "_nodes", []), "_first", []), "_nodes", []), "_last", []), "_scope", [])])]);
return self;}
}),
smalltalk.SemanticAnalyzerTest);



