smalltalk.addPackage('Compiler-Tests', {});
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
fn: function () {
var self=this;
var src=nil;
var ast=nil;
(src="foo | a | a + 1. ^ a");
(ast=smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_parse_", [src]));
smalltalk.send(self['@analyzer'], "_visit_", [ast]);
smalltalk.send(self, "_deny_", [smalltalk.send(ast, "_hasNonLocalReturn", [])]);
return self;},
args: [],
source: "testNonLocalReturn\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. ^ a'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self deny: ast hasNonLocalReturn",
messageSends: ["parse:", "visit:", "deny:", "hasNonLocalReturn"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzerTest);

smalltalk.addMethod(
"_testNonLocalReturn2",
smalltalk.method({
selector: "testNonLocalReturn2",
category: 'tests',
fn: function () {
var self=this;
var src=nil;
var ast=nil;
(src="foo | a | a + 1. [ [ ^ a] ]");
(ast=smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_parse_", [src]));
smalltalk.send(self['@analyzer'], "_visit_", [ast]);
smalltalk.send(self, "_assert_", [smalltalk.send(ast, "_hasNonLocalReturn", [])]);
return self;},
args: [],
source: "testNonLocalReturn2\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ [ ^ a] ]'.\x0a\x09ast := smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self assert: ast hasNonLocalReturn",
messageSends: ["parse:", "visit:", "assert:", "hasNonLocalReturn"],
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



