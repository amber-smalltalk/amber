smalltalk.addPackage('Compiler-Tests', {});
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



