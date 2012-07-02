smalltalk.addPackage('Compiler-Tests', {});
smalltalk.addClass('IRASTTranslatorTest', smalltalk.TestCase, [], 'Compiler-Tests');
smalltalk.addMethod(
"_testIRMethod",
smalltalk.method({
selector: "testIRMethod",
category: 'tests',
fn: function (){
var self=this;

return self;},
args: [],
source: "testIRMethod",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslatorTest);



smalltalk.addClass('ScopeVarTest', smalltalk.TestCase, [], 'Compiler-Tests');
smalltalk.addMethod(
"_testClassRefVar",
smalltalk.method({
selector: "testClassRefVar",
category: 'tests',
fn: function (){
var self=this;
var node=nil;
(node=(function($rec){smalltalk.send($rec, "_value_", ["Object"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.ClassReferenceNode || ClassReferenceNode), "_new", [])));
smalltalk.send(smalltalk.send((smalltalk.SemanticAnalyzer || SemanticAnalyzer), "_new", []), "_visit_", [node]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(node, "_binding", []), "_isClassRefVar", [])]);
return self;},
args: [],
source: "testClassRefVar\x0a\x09| node |\x0a\x09node := ClassReferenceNode new\x0a\x09\x09value: 'Object';\x0a\x09\x09yourself.\x0a\x09SemanticAnalyzer new visit: node.\x0a\x09self assert: node binding isClassRefVar",
messageSends: ["value:", "yourself", "new", "visit:", "assert:", "isClassRefVar", "binding"],
referencedClasses: ["ClassReferenceNode", "SemanticAnalyzer"]
}),
smalltalk.ScopeVarTest);

smalltalk.addMethod(
"_testInstanceVar",
smalltalk.method({
selector: "testInstanceVar",
category: 'tests',
fn: function (){
var self=this;
var node=nil;
var scope=nil;
(node=(function($rec){smalltalk.send($rec, "_value_", ["bzzz"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.VariableNode || VariableNode), "_new", [])));
(scope=smalltalk.send((smalltalk.MethodLexicalScope || MethodLexicalScope), "_new", []));
smalltalk.send(scope, "_addIVar_", ["bzzz"]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(scope, "_bindingFor_", [node]), "_isInstanceVar", [])]);
return self;},
args: [],
source: "testInstanceVar\x0a\x09| node scope |\x0a\x09node := VariableNode new\x0a\x09\x09value: 'bzzz';\x0a\x09\x09yourself.\x0a\x09scope := MethodLexicalScope new.\x0a\x09scope addIVar: 'bzzz'.\x0a\x09self assert: (scope bindingFor: node) isInstanceVar",
messageSends: ["value:", "yourself", "new", "addIVar:", "assert:", "isInstanceVar", "bindingFor:"],
referencedClasses: ["VariableNode", "MethodLexicalScope"]
}),
smalltalk.ScopeVarTest);

smalltalk.addMethod(
"_testPseudoVar",
smalltalk.method({
selector: "testPseudoVar",
category: 'tests',
fn: function (){
var self=this;
var node=nil;
var pseudoVars=nil;
(pseudoVars=["self", "super", "true", "false", "nil"]);
smalltalk.send(pseudoVars, "_do_", [(function(each){(node=(function($rec){smalltalk.send($rec, "_value_", [each]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.VariableNode || VariableNode), "_new", [])));return smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.MethodLexicalScope || MethodLexicalScope), "_new", []), "_bindingFor_", [node]), "_isPseudoVar", [])]);})]);
return self;},
args: [],
source: "testPseudoVar\x0a\x09| node pseudoVars |\x0a\x09pseudoVars := #('self' 'super' 'true' 'false' 'nil').\x0a\x09pseudoVars do: [:each |\x0a\x09\x09node := VariableNode new\x0a\x09\x09value: each;\x0a\x09\x09yourself.\x0a\x09\x09self assert: (MethodLexicalScope new bindingFor: node) isPseudoVar ]",
messageSends: ["do:", "value:", "yourself", "new", "assert:", "isPseudoVar", "bindingFor:"],
referencedClasses: ["VariableNode", "MethodLexicalScope"]
}),
smalltalk.ScopeVarTest);

smalltalk.addMethod(
"_testTempVar",
smalltalk.method({
selector: "testTempVar",
category: 'tests',
fn: function (){
var self=this;
var node=nil;
var scope=nil;
(node=(function($rec){smalltalk.send($rec, "_value_", ["bzzz"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.VariableNode || VariableNode), "_new", [])));
(scope=smalltalk.send((smalltalk.MethodLexicalScope || MethodLexicalScope), "_new", []));
smalltalk.send(scope, "_addTemp_", ["bzzz"]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(scope, "_bindingFor_", [node]), "_isTempVar", [])]);
return self;},
args: [],
source: "testTempVar\x0a\x09| node scope |\x0a\x09node := VariableNode new\x0a\x09\x09value: 'bzzz';\x0a\x09\x09yourself.\x0a\x09scope := MethodLexicalScope new.\x0a\x09scope addTemp: 'bzzz'.\x0a\x09self assert: (scope bindingFor: node) isTempVar",
messageSends: ["value:", "yourself", "new", "addTemp:", "assert:", "isTempVar", "bindingFor:"],
referencedClasses: ["VariableNode", "MethodLexicalScope"]
}),
smalltalk.ScopeVarTest);

smalltalk.addMethod(
"_testUnknownVar",
smalltalk.method({
selector: "testUnknownVar",
category: 'tests',
fn: function (){
var self=this;
var node=nil;
(node=(function($rec){smalltalk.send($rec, "_value_", ["bzzz"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.VariableNode || VariableNode), "_new", [])));
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.MethodLexicalScope || MethodLexicalScope), "_new", []), "_bindingFor_", [node]), "_isNil", [])]);
return self;},
args: [],
source: "testUnknownVar\x0a\x09| node |\x0a\x09node := VariableNode new\x0a\x09\x09value: 'bzzz';\x0a\x09\x09yourself.\x0a\x09self assert: (MethodLexicalScope new bindingFor: node) isNil",
messageSends: ["value:", "yourself", "new", "assert:", "isNil", "bindingFor:"],
referencedClasses: ["VariableNode", "MethodLexicalScope"]
}),
smalltalk.ScopeVarTest);



smalltalk.addClass('SemanticAnalyzerTest', smalltalk.TestCase, ['analyzer'], 'Compiler-Tests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function () {
var self=this;
(self['@analyzer']=smalltalk.send((smalltalk.SemanticAnalyzer || SemanticAnalyzer), "_on_", [(smalltalk.Object || Object)]));
return self;},
args: [],
source: "setUp\x0a\x09analyzer := SemanticAnalyzer on: Object",
messageSends: ["on:"],
referencedClasses: ["SemanticAnalyzer", "Object"]
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testAssignment",
smalltalk.method({
selector: "testAssignment",
category: 'tests',
fn: function () {
var self=this;
var src=nil;
var ast=nil;
(src="foo self  := 1");
(ast=smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_parse_", [src]));
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send(self['@analyzer'], "_visit_", [ast]);}), (smalltalk.InvalidAssignmentError || InvalidAssignmentError)]);
return self;},
args: [],
source: "testAssignment\x0a\x09| src ast |\x0a\x0a\x09src := 'foo self  := 1'.\x0a\x09ast := smalltalk parse: src.\x0a\x09self should: [analyzer visit: ast] raise: InvalidAssignmentError",
messageSends: ["parse:", "should:raise:", "visit:"],
referencedClasses: ["InvalidAssignmentError"]
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testNonLocalReturn",
smalltalk.method({
selector: "testNonLocalReturn",
category: 'tests',
fn: function (){
var self=this;
var src=nil;
var ast=nil;
(src="foo | a | a + 1. ^ a");
(ast=smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_parse_", [src]));
smalltalk.send(self['@analyzer'], "_visit_", [ast]);
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(ast, "_scope", []), "_hasNonLocalReturn", [])]);
return self;},
args: [],
source: "testNonLocalReturn\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. ^ a'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self deny: ast scope hasNonLocalReturn",
messageSends: ["parse:", "visit:", "deny:", "hasNonLocalReturn", "scope"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testNonLocalReturn2",
smalltalk.method({
selector: "testNonLocalReturn2",
category: 'tests',
fn: function (){
var self=this;
var src=nil;
var ast=nil;
(src="foo | a | a + 1. [ [ ^ a] ]");
(ast=smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_parse_", [src]));
smalltalk.send(self['@analyzer'], "_visit_", [ast]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(ast, "_scope", []), "_hasNonLocalReturn", [])]);
return self;},
args: [],
source: "testNonLocalReturn2\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ [ ^ a] ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self assert: ast scope hasNonLocalReturn",
messageSends: ["parse:", "visit:", "assert:", "hasNonLocalReturn", "scope"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testScope",
smalltalk.method({
selector: "testScope",
category: 'tests',
fn: function () {
var self=this;
var src=nil;
var ast=nil;
(src="foo | a | a + 1. [ | b | b := a ]");
(ast=smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_parse_", [src]));
smalltalk.send(self['@analyzer'], "_visit_", [ast]);
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(ast, "_nodes", []), "_first", []), "_nodes", []), "_last", []), "_scope", []), "__eq_eq", [smalltalk.send(ast, "_scope", [])])]);
return self;},
args: [],
source: "testScope\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ | b | b := a ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self deny: ast nodes first nodes last scope == ast scope.",
messageSends: ["parse:", "visit:", "deny:", "==", "scope", "last", "nodes", "first"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testScope2",
smalltalk.method({
selector: "testScope2",
category: 'tests',
fn: function () {
var self=this;
var src=nil;
var ast=nil;
(src="foo | a | a + 1. [ [ | b | b := a ] ]");
(ast=smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_parse_", [src]));
smalltalk.send(self['@analyzer'], "_visit_", [ast]);
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(ast, "_nodes", []), "_first", []), "_nodes", []), "_last", []), "_nodes", []), "_first", []), "_nodes", []), "_first", []), "_scope", []), "__eq_eq", [smalltalk.send(ast, "_scope", [])])]);
return self;},
args: [],
source: "testScope2\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ [ | b | b := a ] ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self deny: ast nodes first nodes last nodes first nodes first scope == ast scope.",
messageSends: ["parse:", "visit:", "deny:", "==", "scope", "first", "nodes", "last"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testScopeLevel",
smalltalk.method({
selector: "testScopeLevel",
category: 'tests',
fn: function () {
var self=this;
var src=nil;
var ast=nil;
(src="foo | a | a + 1. [ [ | b | b := a ] ]");
(ast=smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_parse_", [src]));
smalltalk.send(self['@analyzer'], "_visit_", [ast]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(ast, "_scope", []), "_scopeLevel", []), "__eq", [(1)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(ast, "_nodes", []), "_first", []), "_nodes", []), "_last", []), "_nodes", []), "_first", []), "_nodes", []), "_first", []), "_scope", []), "_scopeLevel", []), "__eq", [(3)])]);
return self;},
args: [],
source: "testScopeLevel\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ [ | b | b := a ] ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self assert: ast scope scopeLevel = 1.\x0a\x09self assert: ast nodes first nodes last nodes first nodes first scope scopeLevel = 3",
messageSends: ["parse:", "visit:", "assert:", "=", "scopeLevel", "scope", "first", "nodes", "last"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testUnknownVariables",
smalltalk.method({
selector: "testUnknownVariables",
category: 'tests',
fn: function () {
var self=this;
var src=nil;
var ast=nil;
(src="foo | a | b + a");
(ast=smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_parse_", [src]));
smalltalk.send(self['@analyzer'], "_visit_", [ast]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(ast, "_scope", []), "_unknownVariables", []), "__eq", [["b"]])]);
return self;},
args: [],
source: "testUnknownVariables\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | b + a'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self assert: ast scope unknownVariables = #('b')",
messageSends: ["parse:", "visit:", "assert:", "=", "unknownVariables", "scope"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testUnknownVariablesWithScope",
smalltalk.method({
selector: "testUnknownVariablesWithScope",
category: 'tests',
fn: function () {
var self=this;
var src=nil;
var ast=nil;
(src="foo | a b | [ c + 1. [ a + 1. d + 1 ]]");
(ast=smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_parse_", [src]));
smalltalk.send(self['@analyzer'], "_visit_", [ast]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(ast, "_scope", []), "_unknownVariables", []), "__eq", [["c", "d"]])]);
return self;},
args: [],
source: "testUnknownVariablesWithScope\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a b | [ c + 1. [ a + 1. d + 1 ]]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self assert: ast scope unknownVariables = #('c' 'd' )",
messageSends: ["parse:", "visit:", "assert:", "=", "unknownVariables", "scope"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testVariableShadowing",
smalltalk.method({
selector: "testVariableShadowing",
category: 'tests',
fn: function () {
var self=this;
var src=nil;
var ast=nil;
(src="foo | a | a + 1");
(ast=smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_parse_", [src]));
smalltalk.send(self['@analyzer'], "_visit_", [ast]);
return self;},
args: [],
source: "testVariableShadowing\x0a\x09| src ast |\x0a\x09src := 'foo | a | a + 1'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast",
messageSends: ["parse:", "visit:"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testVariableShadowing2",
smalltalk.method({
selector: "testVariableShadowing2",
category: 'tests',
fn: function () {
var self=this;
var src=nil;
var ast=nil;
(src="foo | a | a + 1. [ | a | a := 2 ]");
(ast=smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_parse_", [src]));
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send(self['@analyzer'], "_visit_", [ast]);}), (smalltalk.ShadowingVariableError || ShadowingVariableError)]);
return self;},
args: [],
source: "testVariableShadowing2\x0a\x09| src ast |\x0a\x09src := 'foo | a | a + 1. [ | a | a := 2 ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09self should: [analyzer visit: ast] raise: ShadowingVariableError",
messageSends: ["parse:", "should:raise:", "visit:"],
referencedClasses: ["ShadowingVariableError"]
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testVariableShadowing3",
smalltalk.method({
selector: "testVariableShadowing3",
category: 'tests',
fn: function () {
var self=this;
var src=nil;
var ast=nil;
(src="foo | a | a + 1. [ | b | b := 2 ]");
(ast=smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_parse_", [src]));
smalltalk.send(self['@analyzer'], "_visit_", [ast]);
return self;},
args: [],
source: "testVariableShadowing3\x0a\x09| src ast |\x0a\x09src := 'foo | a | a + 1. [ | b | b := 2 ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast",
messageSends: ["parse:", "visit:"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testVariableShadowing4",
smalltalk.method({
selector: "testVariableShadowing4",
category: 'tests',
fn: function () {
var self=this;
var src=nil;
var ast=nil;
(src="foo | a | a + 1. [ [ [ | b | b := 2 ] ] ]");
(ast=smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_parse_", [src]));
smalltalk.send(self['@analyzer'], "_visit_", [ast]);
return self;},
args: [],
source: "testVariableShadowing4\x0a\x09| src ast |\x0a\x09src := 'foo | a | a + 1. [ [ [ | b | b := 2 ] ] ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast",
messageSends: ["parse:", "visit:"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testVariableShadowing5",
smalltalk.method({
selector: "testVariableShadowing5",
category: 'tests',
fn: function () {
var self=this;
var src=nil;
var ast=nil;
(src="foo | a | a + 1. [ [ [ | a | a := 2 ] ] ]");
(ast=smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_parse_", [src]));
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send(self['@analyzer'], "_visit_", [ast]);}), (smalltalk.ShadowingVariableError || ShadowingVariableError)]);
return self;},
args: [],
source: "testVariableShadowing5\x0a\x09| src ast |\x0a\x09src := 'foo | a | a + 1. [ [ [ | a | a := 2 ] ] ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09self should: [analyzer visit: ast] raise: ShadowingVariableError",
messageSends: ["parse:", "should:raise:", "visit:"],
referencedClasses: ["ShadowingVariableError"]
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testVariablesLookup",
smalltalk.method({
selector: "testVariablesLookup",
category: 'tests',
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
return self;},
args: [],
source: "testVariablesLookup\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ | b | b := a ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09\x22Binding for `a` in the message send\x22\x0a\x09self assert: ast nodes first nodes first receiver binding isTempVar.\x0a\x09self assert: ast nodes first nodes first receiver binding scope == ast scope.\x0a\x0a\x09\x22Binding for `b`\x22\x0a\x09self assert: ast nodes first nodes last nodes first nodes first left binding isTempVar.\x0a\x09self assert: ast nodes first nodes last nodes first nodes first left binding scope == ast nodes first nodes last scope.",
messageSends: ["parse:", "visit:", "assert:", "isTempVar", "binding", "receiver", "first", "nodes", "==", "scope", "left", "last"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);



