smalltalk.addPackage('Compiler-IR', {});
smalltalk.addClass('IRASTTranslator', smalltalk.NodeVisitor, ['source', 'theClass', 'method', 'sequence', 'nextAlias'], 'Compiler-IR');
smalltalk.IRASTTranslator.comment="I am the AST (abstract syntax tree) visitor responsible for building the intermediate representation graph.\x0aI rely on a builder object, instance of IRBuilder."
smalltalk.addMethod(
"_alias_",
smalltalk.method({
selector: "alias:",
category: 'visiting',
fn: function (aNode) {
var self=this;
var variable=nil;
(variable=(function($rec){smalltalk.send($rec, "_variable_", [smalltalk.send(smalltalk.send((smalltalk.AliasVar || AliasVar), "_new", []), "_name_", [smalltalk.send("$", "__comma", [smalltalk.send(self, "_nextAlias", [])])])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.IRVariable || IRVariable), "_new", [])));
smalltalk.send(smalltalk.send(self, "_sequence", []), "_add_", [(function($rec){smalltalk.send($rec, "_add_", [variable]);smalltalk.send($rec, "_add_", [smalltalk.send(self, "_visit_", [aNode])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.IRAssignment || IRAssignment), "_new", []))]);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_method", []), "_internalVariables", []), "_add_", [variable]);
return variable;
return self;},
args: ["aNode"],
source: "alias: aNode\x0a\x09| variable |\x0a\x09variable := IRVariable new \x0a\x09\x09variable: (AliasVar new name: '$', self nextAlias); \x0a\x09\x09yourself.\x0a\x0a\x09self sequence add: (IRAssignment new\x0a\x09\x09add: variable;\x0a\x09\x09add: (self visit: aNode);\x0a\x09\x09yourself).\x0a\x0a\x09self method internalVariables add: variable.\x0a\x0a\x09^ variable",
messageSends: ["variable:", "name:", "new", ",", "nextAlias", "yourself", "add:", "sequence", "visit:", "internalVariables", "method"],
referencedClasses: ["AliasVar", "IRVariable", "IRAssignment"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_method",
smalltalk.method({
selector: "method",
category: 'accessing',
fn: function () {
var self=this;
return self['@method'];
return self;},
args: [],
source: "method\x0a\x09^ method",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_method_",
smalltalk.method({
selector: "method:",
category: 'accessing',
fn: function (anIRMethod) {
var self=this;
(self['@method']=anIRMethod);
return self;},
args: ["anIRMethod"],
source: "method: anIRMethod\x0a\x09method := anIRMethod",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_nextAlias",
smalltalk.method({
selector: "nextAlias",
category: 'accessing',
fn: function () {
var self=this;
(($receiver = self['@nextAlias']) == nil || $receiver == undefined) ? (function(){return (self['@nextAlias']=(0));})() : $receiver;
(self['@nextAlias']=((($receiver = self['@nextAlias']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));
return smalltalk.send(self['@nextAlias'], "_asString", []);
return self;},
args: [],
source: "nextAlias\x0a\x09nextAlias ifNil: [ nextAlias := 0 ].\x0a\x09nextAlias := nextAlias + 1.\x0a\x09^ nextAlias asString",
messageSends: ["ifNil:", "+", "asString"],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_sequence",
smalltalk.method({
selector: "sequence",
category: 'accessing',
fn: function () {
var self=this;
return self['@sequence'];
return self;},
args: [],
source: "sequence\x0a\x09^ sequence",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_sequence_",
smalltalk.method({
selector: "sequence:",
category: 'accessing',
fn: function (anIRSequence) {
var self=this;
(self['@sequence']=anIRSequence);
return self;},
args: ["anIRSequence"],
source: "sequence: anIRSequence\x0a\x09sequence := anIRSequence",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
category: 'accessing',
fn: function () {
var self=this;
return self['@source'];
return self;},
args: [],
source: "source\x0a\x09^ source",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
category: 'accessing',
fn: function (aString) {
var self=this;
(self['@source']=aString);
return self;},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
category: 'accessing',
fn: function () {
var self=this;
return self['@theClass'];
return self;},
args: [],
source: "theClass\x0a\x09^ theClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
category: 'accessing',
fn: function (aClass) {
var self=this;
(self['@theClass']=aClass);
return self;},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitAssignmentNode_",
smalltalk.method({
selector: "visitAssignmentNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
var left=nil;
var right=nil;
var assignment=nil;
(right=smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_right", [])]));
(left=smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_left", [])]));
smalltalk.send(smalltalk.send(self, "_sequence", []), "_add_", [(function($rec){smalltalk.send($rec, "_add_", [left]);smalltalk.send($rec, "_add_", [right]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.IRAssignment || IRAssignment), "_new", []))]);
return left;
return self;},
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a\x09| left right assignment |\x0a\x09right := self visit: aNode right.\x0a\x09left := self visit: aNode left.\x0a\x09self sequence add: (IRAssignment new \x0a\x09\x09add: left;\x0a\x09\x09add: right;\x0a\x09\x09yourself).\x0a\x09^ left",
messageSends: ["visit:", "right", "left", "add:", "sequence", "yourself", "new"],
referencedClasses: ["IRAssignment"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitAssignmentNode_aliasing_",
smalltalk.method({
selector: "visitAssignmentNode:aliasing:",
category: 'visiting',
fn: function (aNode, aBoolean) {
var self=this;
var left=nil;
var right=nil;
((($receiver = aBoolean).klass === smalltalk.Boolean) ? ($receiver ? (function(){var assignment=nil;
(assignment=smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_right", [])]));smalltalk.send(smalltalk.send(self, "_sequence", []), "_add_", [assignment]);return (right=smalltalk.send(smalltalk.send(assignment, "_instructions", []), "_first", []));})() : (function(){return (right=smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_right", [])]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){var assignment=nil;
(assignment=smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_right", [])]));smalltalk.send(smalltalk.send(self, "_sequence", []), "_add_", [assignment]);return (right=smalltalk.send(smalltalk.send(assignment, "_instructions", []), "_first", []));}), (function(){return (right=smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_right", [])]));})]));
(left=smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_left", [])]));
return (function($rec){smalltalk.send($rec, "_add_", [left]);smalltalk.send($rec, "_add_", [right]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.IRAssignment || IRAssignment), "_new", []));
return self;},
args: ["aNode", "aBoolean"],
source: "visitAssignmentNode: aNode aliasing: aBoolean\x0a\x09| left right |\x0a\x09\x0a\x09aBoolean \x0a\x09\x09ifTrue: [ | assignment |\x0a\x09\x09\x09assignment := self visit: aNode right.\x0a\x09\x09\x09self sequence add: assignment.\x0a\x09\x09\x09right :=  assignment instructions first ]\x0a\x09\x09ifFalse: [ right := self visit: aNode right ].\x0a\x0a\x09left := self visit: aNode left.\x0a\x09\x0a\x09^ IRAssignment new \x0a\x09\x09add: left;\x0a\x09\x09add: right;\x0a\x09\x09yourself",
messageSends: ["ifTrue:ifFalse:", "visit:", "right", "add:", "sequence", "first", "instructions", "left", "yourself", "new"],
referencedClasses: ["IRAssignment"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
var closure=nil;
(closure=(function($rec){smalltalk.send($rec, "_arguments_", [smalltalk.send(aNode, "_parameters", [])]);smalltalk.send($rec, "_scope_", [smalltalk.send(aNode, "_scope", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.IRClosure || IRClosure), "_new", [])));
smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_scope", []), "_temps", []), "_do_", [(function(each){return smalltalk.send(closure, "_add_", [(function($rec){smalltalk.send($rec, "_name_", [smalltalk.send(each, "_name", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.IRTempDeclaration || IRTempDeclaration), "_new", []))]);})]);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){return smalltalk.send(closure, "_add_", [smalltalk.send(self, "_visit_", [each])]);})]);
return closure;
return self;},
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09| closure |\x0a\x09closure := IRClosure new\x0a\x09\x09arguments: aNode parameters;\x0a\x09\x09scope: aNode scope;\x0a\x09\x09yourself.\x0a\x09aNode scope temps do: [ :each |\x0a\x09\x09closure add: (IRTempDeclaration new \x0a\x09\x09\x09name: each name;\x0a\x09\x09\x09yourself) ].\x0a\x09aNode nodes do: [ :each | closure add: (self visit: each) ].\x0a\x09^ closure",
messageSends: ["arguments:", "parameters", "scope:", "scope", "yourself", "new", "do:", "temps", "add:", "name:", "name", "nodes", "visit:"],
referencedClasses: ["IRClosure", "IRTempDeclaration"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitBlockSequenceNode_",
smalltalk.method({
selector: "visitBlockSequenceNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
return smalltalk.send(self, "_withSequence_do_", [smalltalk.send((smalltalk.IRBlockSequence || IRBlockSequence), "_new", []), (function(){return smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_ifNotEmpty_", [(function(){smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_allButLast", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(self, "_sequence", []), "_add_", [smalltalk.send(self, "_visit_", [each])]);})]);return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_last", []), "_isReturnNode", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_sequence", []), "_add_", [(function($rec){smalltalk.send($rec, "_add_", [smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_last", [])])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.IRReturn || IRReturn), "_new", []))]);})() : (function(){return smalltalk.send(smalltalk.send(self, "_sequence", []), "_add_", [smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_last", [])])]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self, "_sequence", []), "_add_", [(function($rec){smalltalk.send($rec, "_add_", [smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_last", [])])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.IRReturn || IRReturn), "_new", []))]);}), (function(){return smalltalk.send(smalltalk.send(self, "_sequence", []), "_add_", [smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_last", [])])]);})]));})]);})]);
return self;},
args: ["aNode"],
source: "visitBlockSequenceNode: aNode\x0a\x09^ self\x0a\x09\x09withSequence: IRBlockSequence new\x0a\x09\x09do: [ \x0a\x09\x09\x09aNode nodes ifNotEmpty: [\x0a\x09\x09\x09\x09aNode nodes allButLast do: [ :each | \x0a\x09\x09\x09\x09\x09self sequence add: (self visit: each) ].\x0a\x09\x09\x09\x09aNode nodes last isReturnNode \x0a\x09\x09\x09\x09\x09ifFalse: [ self sequence add: (IRReturn new add: (self visit: aNode nodes last); yourself) ]\x0a\x09\x09\x09\x09\x09ifTrue: [ self sequence add: (self visit: aNode nodes last) ]]]",
messageSends: ["withSequence:do:", "new", "ifNotEmpty:", "nodes", "do:", "allButLast", "add:", "sequence", "visit:", "ifFalse:ifTrue:", "isReturnNode", "last", "yourself"],
referencedClasses: ["IRBlockSequence", "IRReturn"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
var alias=nil;
((($receiver = smalltalk.send(smalltalk.send(aNode, "_receiver", []), "_isValueNode", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){(alias=smalltalk.send(self, "_alias_", [smalltalk.send(aNode, "_receiver", [])]));return smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){return smalltalk.send(each, "_receiver_", [smalltalk.send(smalltalk.send((smalltalk.VariableNode || VariableNode), "_new", []), "_binding_", [smalltalk.send(alias, "_variable", [])])]);})]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){(alias=smalltalk.send(self, "_alias_", [smalltalk.send(aNode, "_receiver", [])]));return smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){return smalltalk.send(each, "_receiver_", [smalltalk.send(smalltalk.send((smalltalk.VariableNode || VariableNode), "_new", []), "_binding_", [smalltalk.send(alias, "_variable", [])])]);})]);})]));
smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_allButLast", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(self, "_sequence", []), "_add_", [smalltalk.send(self, "_visit_", [each])]);})]);
return smalltalk.send(self, "_alias_", [smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_last", [])]);
return self;},
args: ["aNode"],
source: "visitCascadeNode: aNode\x0a\x09| alias |\x0a\x0a\x09aNode receiver isValueNode ifFalse: [ \x0a\x09\x09alias := self alias: aNode receiver.\x0a\x09\x09aNode nodes do: [ :each |\x0a\x09\x09\x09each receiver: (VariableNode new binding: alias variable) ]].\x0a\x0a\x09aNode nodes allButLast do: [ :each |\x0a\x09\x09self sequence add: (self visit: each) ].\x0a\x0a\x09^ self alias: aNode nodes last",
messageSends: ["ifFalse:", "isValueNode", "receiver", "alias:", "do:", "nodes", "receiver:", "binding:", "new", "variable", "allButLast", "add:", "sequence", "visit:", "last"],
referencedClasses: ["VariableNode"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitJSStatementNode_",
smalltalk.method({
selector: "visitJSStatementNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
return (function($rec){smalltalk.send($rec, "_source_", [smalltalk.send(aNode, "_source", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.IRVerbatim || IRVerbatim), "_new", []));
return self;},
args: ["aNode"],
source: "visitJSStatementNode: aNode\x0a\x09^ IRVerbatim new\x0a\x09\x09source: aNode source;\x0a\x09\x09yourself",
messageSends: ["source:", "source", "yourself", "new"],
referencedClasses: ["IRVerbatim"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitMethodNode_",
smalltalk.method({
selector: "visitMethodNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
smalltalk.send(self, "_method_", [(function($rec){smalltalk.send($rec, "_source_", [smalltalk.send(self, "_source", [])]);smalltalk.send($rec, "_arguments_", [smalltalk.send(aNode, "_arguments", [])]);smalltalk.send($rec, "_selector_", [smalltalk.send(aNode, "_selector", [])]);smalltalk.send($rec, "_messageSends_", [smalltalk.send(aNode, "_messageSends", [])]);smalltalk.send($rec, "_classReferences_", [smalltalk.send(aNode, "_classReferences", [])]);smalltalk.send($rec, "_scope_", [smalltalk.send(aNode, "_scope", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.IRMethod || IRMethod), "_new", []))]);
smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_scope", []), "_temps", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(self, "_method", []), "_add_", [(function($rec){smalltalk.send($rec, "_name_", [smalltalk.send(each, "_name", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.IRTempDeclaration || IRTempDeclaration), "_new", []))]);})]);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(self, "_method", []), "_add_", [smalltalk.send(self, "_visit_", [each])]);})]);
((($receiver = smalltalk.send(smalltalk.send(aNode, "_scope", []), "_hasLocalReturn", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_method", []), "_add_", [smalltalk.send((smalltalk.IRReturn || IRReturn), "_new", [])]), "_add_", [(function($rec){smalltalk.send($rec, "_variable_", [smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_scope", []), "_pseudoVars", []), "_at_", ["self"])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.IRVariable || IRVariable), "_new", []))]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_method", []), "_add_", [smalltalk.send((smalltalk.IRReturn || IRReturn), "_new", [])]), "_add_", [(function($rec){smalltalk.send($rec, "_variable_", [smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_scope", []), "_pseudoVars", []), "_at_", ["self"])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.IRVariable || IRVariable), "_new", []))]);})]));
return smalltalk.send(self, "_method", []);
return self;},
args: ["aNode"],
source: "visitMethodNode: aNode\x0a\x0a\x09self method: (IRMethod new\x0a\x09\x09source: self source;\x0a\x09\x09arguments: aNode arguments;\x0a\x09\x09selector: aNode selector;\x0a\x09\x09messageSends: aNode messageSends;\x0a\x09\x09classReferences: aNode classReferences;\x0a\x09\x09scope: aNode scope;\x0a\x09\x09yourself).\x0a\x0a\x09aNode scope temps do: [ :each |\x0a\x09\x09self method add: (IRTempDeclaration new\x0a\x09\x09\x09name: each name;\x0a\x09\x09\x09yourself) ].\x0a\x0a\x09aNode nodes do: [ :each | self method add: (self visit: each) ].\x0a\x0a\x09aNode scope hasLocalReturn ifFalse: [\x0a\x09\x09(self method add: IRReturn new) add: (IRVariable new\x0a\x09\x09\x09variable: (aNode scope pseudoVars at: 'self');\x0a\x09\x09\x09yourself) ].\x0a\x0a\x09^ self method",
messageSends: ["method:", "source:", "source", "arguments:", "arguments", "selector:", "selector", "messageSends:", "messageSends", "classReferences:", "classReferences", "scope:", "scope", "yourself", "new", "do:", "temps", "add:", "method", "name:", "name", "nodes", "visit:", "ifFalse:", "hasLocalReturn", "variable:", "at:", "pseudoVars"],
referencedClasses: ["IRMethod", "IRTempDeclaration", "IRReturn", "IRVariable"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
var return_=nil;
(return_=((($receiver = smalltalk.send(aNode, "_nonLocalReturn", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send((smalltalk.IRNonLocalReturn || IRNonLocalReturn), "_new", []);})() : (function(){return smalltalk.send((smalltalk.IRReturn || IRReturn), "_new", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send((smalltalk.IRNonLocalReturn || IRNonLocalReturn), "_new", []);}), (function(){return smalltalk.send((smalltalk.IRReturn || IRReturn), "_new", []);})])));
smalltalk.send(return_, "_scope_", [smalltalk.send(aNode, "_scope", [])]);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){return smalltalk.send(return_, "_add_", [smalltalk.send(self, "_visit_", [each])]);})]);
return return_;
return self;},
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09| return |\x0a\x09return := aNode nonLocalReturn \x0a\x09\x09ifTrue: [ IRNonLocalReturn new ]\x0a\x09\x09ifFalse: [ IRReturn new ].\x0a\x09return scope: aNode scope.\x0a\x09aNode nodes do: [ :each |\x0a\x09\x09return add: (self visit: each) ].\x0a\x09^ return",
messageSends: ["ifTrue:ifFalse:", "nonLocalReturn", "new", "scope:", "scope", "do:", "nodes", "add:", "visit:"],
referencedClasses: ["IRNonLocalReturn", "IRReturn"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
var send=nil;
var receiver=nil;
var arguments=nil;
(send=smalltalk.send((smalltalk.IRSend || IRSend), "_new", []));
(function($rec){smalltalk.send($rec, "_selector_", [smalltalk.send(aNode, "_selector", [])]);return smalltalk.send($rec, "_index_", [smalltalk.send(aNode, "_index", [])]);})(send);
((($receiver = smalltalk.send(aNode, "_superSend", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(send, "_classSend_", [smalltalk.send(smalltalk.send(self, "_theClass", []), "_superclass", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(send, "_classSend_", [smalltalk.send(smalltalk.send(self, "_theClass", []), "_superclass", [])]);})]));
(receiver=smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_receiver", [])]));
(arguments=smalltalk.send(smalltalk.send(aNode, "_arguments", []), "_collect_", [(function(each){return ((($receiver = smalltalk.send(each, "_shouldBeInlined", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_alias_", [each]);})() : (function(){return smalltalk.send(self, "_visit_", [each]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_alias_", [each]);}), (function(){return smalltalk.send(self, "_visit_", [each]);})]));})]));
smalltalk.send(send, "_add_", [receiver]);
smalltalk.send(arguments, "_do_", [(function(each){return smalltalk.send(send, "_add_", [each]);})]);
return send;
return self;},
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09| send receiver arguments |\x0a\x09send := IRSend new.\x0a\x09send \x0a\x09\x09selector: aNode selector;\x0a\x09\x09index: aNode index.\x0a\x09aNode superSend ifTrue: [ send classSend: self theClass superclass ].\x0a\x0a\x09receiver := self visit: aNode receiver.\x0a\x09arguments := aNode arguments collect: [ :each | \x0a\x09\x09each shouldBeInlined\x0a\x09\x09\x09ifTrue: [ self alias: each ]\x0a\x09\x09\x09ifFalse: [ self visit: each ]].\x0a\x0a\x09send add: receiver.\x0a\x09arguments do: [ :each | send add: each ].\x0a\x0a\x09^ send",
messageSends: ["new", "selector:", "selector", "index:", "index", "ifTrue:", "superSend", "classSend:", "superclass", "theClass", "visit:", "receiver", "collect:", "arguments", "ifTrue:ifFalse:", "shouldBeInlined", "alias:", "add:", "do:"],
referencedClasses: ["IRSend"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
return smalltalk.send(self, "_withSequence_do_", [smalltalk.send((smalltalk.IRSequence || IRSequence), "_new", []), (function(){return smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){var instruction=nil;
(instruction=smalltalk.send(self, "_visit_", [each]));return ((($receiver = smalltalk.send(instruction, "_isVariable", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_sequence", []), "_add_", [instruction]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_sequence", []), "_add_", [instruction]);})]));})]);})]);
return self;},
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09^ self \x0a\x09\x09withSequence: IRSequence new \x09\x0a\x09\x09do: [\x0a\x09\x09\x09aNode nodes do: [ :each | | instruction |\x0a\x09\x09\x09\x09instruction := self visit: each.\x0a\x09\x09\x09\x09instruction isVariable ifFalse: [\x0a\x09\x09\x09\x09\x09self sequence add: instruction ]]]",
messageSends: ["withSequence:do:", "new", "do:", "nodes", "visit:", "ifFalse:", "isVariable", "add:", "sequence"],
referencedClasses: ["IRSequence"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitValueNode_",
smalltalk.method({
selector: "visitValueNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
return (function($rec){smalltalk.send($rec, "_value_", [smalltalk.send(aNode, "_value", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.IRValue || IRValue), "_new", []));
return self;},
args: ["aNode"],
source: "visitValueNode: aNode\x0a\x09^ IRValue new \x0a\x09\x09value: aNode value; \x0a\x09\x09yourself",
messageSends: ["value:", "value", "yourself", "new"],
referencedClasses: ["IRValue"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitVariableNode_",
smalltalk.method({
selector: "visitVariableNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
return (function($rec){smalltalk.send($rec, "_variable_", [smalltalk.send(aNode, "_binding", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.IRVariable || IRVariable), "_new", []));
return self;},
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09^ IRVariable new \x0a\x09\x09variable: aNode binding; \x0a\x09\x09yourself",
messageSends: ["variable:", "binding", "yourself", "new"],
referencedClasses: ["IRVariable"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_withSequence_do_",
smalltalk.method({
selector: "withSequence:do:",
category: 'accessing',
fn: function (aSequence, aBlock) {
var self=this;
var outerSequence=nil;
(outerSequence=smalltalk.send(self, "_sequence", []));
smalltalk.send(self, "_sequence_", [aSequence]);
smalltalk.send(aBlock, "_value", []);
smalltalk.send(self, "_sequence_", [outerSequence]);
return aSequence;
return self;},
args: ["aSequence", "aBlock"],
source: "withSequence: aSequence do: aBlock\x0a\x09| outerSequence |\x0a\x09outerSequence := self sequence.\x0a\x09self sequence: aSequence.\x0a\x09aBlock value.\x0a\x09self sequence: outerSequence.\x0a\x09^ aSequence",
messageSends: ["sequence", "sequence:", "value"],
referencedClasses: []
}),
smalltalk.IRASTTranslator);



smalltalk.addClass('IRInstruction', smalltalk.Object, ['parent', 'instructions'], 'Compiler-IR');
smalltalk.IRInstruction.comment="I am the abstract root class of the IR (intermediate representation) instructions class hierarchy.\x0aThe IR graph is used to emit JavaScript code using a JSStream. "
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor, "_visitIRInstruction_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRInstruction: self",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
category: 'building',
fn: function (anObject) {
var self=this;
smalltalk.send(anObject, "_parent_", [self]);
return smalltalk.send(smalltalk.send(self, "_instructions", []), "_add_", [anObject]);
return self;},
args: ["anObject"],
source: "add: anObject\x0a\x09anObject parent: self.\x0a\x09^ self instructions add: anObject",
messageSends: ["parent:", "add:", "instructions"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_canBeAssigned",
smalltalk.method({
selector: "canBeAssigned",
category: 'testing',
fn: function () {
var self=this;
return true;
return self;},
args: [],
source: "canBeAssigned\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_instructions",
smalltalk.method({
selector: "instructions",
category: 'accessing',
fn: function () {
var self=this;
return (($receiver = self['@instructions']) == nil || $receiver == undefined) ? (function(){return (self['@instructions']=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection), "_new", []));})() : $receiver;
return self;},
args: [],
source: "instructions\x0a\x09^ instructions ifNil: [ instructions := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isClosure",
smalltalk.method({
selector: "isClosure",
category: 'testing',
fn: function () {
var self=this;
return false;
return self;},
args: [],
source: "isClosure\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
category: 'testing',
fn: function () {
var self=this;
return false;
return self;},
args: [],
source: "isInlined\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isLocalReturn",
smalltalk.method({
selector: "isLocalReturn",
category: 'testing',
fn: function () {
var self=this;
return false;
return self;},
args: [],
source: "isLocalReturn\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isReturn",
smalltalk.method({
selector: "isReturn",
category: 'testing',
fn: function () {
var self=this;
return false;
return self;},
args: [],
source: "isReturn\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isSend",
smalltalk.method({
selector: "isSend",
category: 'testing',
fn: function () {
var self=this;
return false;
return self;},
args: [],
source: "isSend\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isSequence",
smalltalk.method({
selector: "isSequence",
category: 'testing',
fn: function () {
var self=this;
return false;
return self;},
args: [],
source: "isSequence\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isTempDeclaration",
smalltalk.method({
selector: "isTempDeclaration",
category: 'testing',
fn: function () {
var self=this;
return false;
return self;},
args: [],
source: "isTempDeclaration\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isVariable",
smalltalk.method({
selector: "isVariable",
category: 'testing',
fn: function () {
var self=this;
return false;
return self;},
args: [],
source: "isVariable\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_parent",
smalltalk.method({
selector: "parent",
category: 'accessing',
fn: function () {
var self=this;
return self['@parent'];
return self;},
args: [],
source: "parent\x0a\x09^ parent",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_parent_",
smalltalk.method({
selector: "parent:",
category: 'accessing',
fn: function (anIRInstruction) {
var self=this;
(self['@parent']=anIRInstruction);
return self;},
args: ["anIRInstruction"],
source: "parent: anIRInstruction\x0a\x09parent := anIRInstruction",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_remove",
smalltalk.method({
selector: "remove",
category: 'building',
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(self, "_parent", []), "_remove_", [self]);
return self;},
args: [],
source: "remove\x0a\x09self parent remove: self",
messageSends: ["remove:", "parent"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_remove_",
smalltalk.method({
selector: "remove:",
category: 'building',
fn: function (anIRInstruction) {
var self=this;
smalltalk.send(smalltalk.send(self, "_instructions", []), "_remove_", [anIRInstruction]);
return self;},
args: ["anIRInstruction"],
source: "remove: anIRInstruction\x0a\x09self instructions remove: anIRInstruction",
messageSends: ["remove:", "instructions"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_replace_with_",
smalltalk.method({
selector: "replace:with:",
category: 'building',
fn: function (anIRInstruction, anotherIRInstruction) {
var self=this;
smalltalk.send(anotherIRInstruction, "_parent_", [self]);
smalltalk.send(smalltalk.send(self, "_instructions", []), "_at_put_", [smalltalk.send(smalltalk.send(self, "_instructions", []), "_indexOf_", [anIRInstruction]), anotherIRInstruction]);
return self;},
args: ["anIRInstruction", "anotherIRInstruction"],
source: "replace: anIRInstruction with: anotherIRInstruction\x0a\x09anotherIRInstruction parent: self.\x0a\x09self instructions \x0a\x09\x09at: (self instructions indexOf: anIRInstruction)\x0a\x09\x09put: anotherIRInstruction",
messageSends: ["parent:", "at:put:", "instructions", "indexOf:"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_replaceWith_",
smalltalk.method({
selector: "replaceWith:",
category: 'building',
fn: function (anIRInstruction) {
var self=this;
smalltalk.send(smalltalk.send(self, "_parent", []), "_replace_with_", [self, anIRInstruction]);
return self;},
args: ["anIRInstruction"],
source: "replaceWith: anIRInstruction\x0a\x09self parent replace: self with: anIRInstruction",
messageSends: ["replace:with:", "parent"],
referencedClasses: []
}),
smalltalk.IRInstruction);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aBuilder) {
var self=this;
return (function($rec){smalltalk.send($rec, "_builder_", [aBuilder]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aBuilder"],
source: "on: aBuilder\x0a\x09^ self new\x0a\x09\x09builder: aBuilder;\x0a\x09\x09yourself",
messageSends: ["builder:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.IRInstruction.klass);


smalltalk.addClass('IRAssignment', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor, "_visitIRAssignment_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRAssignment: self",
messageSends: ["visitIRAssignment:"],
referencedClasses: []
}),
smalltalk.IRAssignment);



smalltalk.addClass('IRScopedInstruction', smalltalk.IRInstruction, ['scope'], 'Compiler-IR');
smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
category: 'accessing',
fn: function () {
var self=this;
return self['@scope'];
return self;},
args: [],
source: "scope\x0a\x09^ scope",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRScopedInstruction);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
category: 'accessing',
fn: function (aScope) {
var self=this;
(self['@scope']=aScope);
return self;},
args: ["aScope"],
source: "scope: aScope\x0a\x09scope := aScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRScopedInstruction);



smalltalk.addClass('IRClosure', smalltalk.IRScopedInstruction, ['arguments'], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor, "_visitIRClosure_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRClosure: self",
messageSends: ["visitIRClosure:"],
referencedClasses: []
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
category: 'accessing',
fn: function () {
var self=this;
return (($receiver = self['@arguments']) == nil || $receiver == undefined) ? (function(){return [];})() : $receiver;
return self;},
args: [],
source: "arguments\x0a\x09^ arguments ifNil: [ #() ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
category: 'accessing',
fn: function (aCollection) {
var self=this;
(self['@arguments']=aCollection);
return self;},
args: ["aCollection"],
source: "arguments: aCollection\x0a\x09arguments := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_isClosure",
smalltalk.method({
selector: "isClosure",
category: 'testing',
fn: function () {
var self=this;
return true;
return self;},
args: [],
source: "isClosure\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
category: 'accessing',
fn: function (aScope) {
var self=this;
smalltalk.send(self, "_scope_", [aScope], smalltalk.IRClosure.superclass || nil);
smalltalk.send(aScope, "_instruction_", [self]);
return self;},
args: ["aScope"],
source: "scope: aScope\x0a\x09super scope: aScope.\x0a\x09aScope instruction: self",
messageSends: ["scope:", "instruction:"],
referencedClasses: []
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_sequence",
smalltalk.method({
selector: "sequence",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_instructions", []), "_last", []);
return self;},
args: [],
source: "sequence\x0a\x09^ self instructions last",
messageSends: ["last", "instructions"],
referencedClasses: []
}),
smalltalk.IRClosure);



smalltalk.addClass('IRMethod', smalltalk.IRScopedInstruction, ['source', 'selector', 'classReferences', 'messageSends', 'arguments', 'internalVariables'], 'Compiler-IR');
smalltalk.IRMethod.comment="I am a method instruction"
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor, "_visitIRMethod_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRMethod: self",
messageSends: ["visitIRMethod:"],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
category: 'accessing',
fn: function () {
var self=this;
return self['@arguments'];
return self;},
args: [],
source: "arguments\x0a\x09^ arguments",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
category: 'accessing',
fn: function (aCollection) {
var self=this;
(self['@arguments']=aCollection);
return self;},
args: ["aCollection"],
source: "arguments: aCollection\x0a\x09arguments := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_classReferences",
smalltalk.method({
selector: "classReferences",
category: 'accessing',
fn: function () {
var self=this;
return self['@classReferences'];
return self;},
args: [],
source: "classReferences\x0a\x09^ classReferences",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_classReferences_",
smalltalk.method({
selector: "classReferences:",
category: 'accessing',
fn: function (aCollection) {
var self=this;
(self['@classReferences']=aCollection);
return self;},
args: ["aCollection"],
source: "classReferences: aCollection\x0a\x09classReferences := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_internalVariables",
smalltalk.method({
selector: "internalVariables",
category: 'accessing',
fn: function () {
var self=this;
return (($receiver = self['@internalVariables']) == nil || $receiver == undefined) ? (function(){return (self['@internalVariables']=smalltalk.send((smalltalk.Set || Set), "_new", []));})() : $receiver;
return self;},
args: [],
source: "internalVariables\x0a\x09^ internalVariables ifNil: [ internalVariables := Set new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Set"]
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_messageSends",
smalltalk.method({
selector: "messageSends",
category: 'accessing',
fn: function () {
var self=this;
return self['@messageSends'];
return self;},
args: [],
source: "messageSends\x0a\x09^ messageSends",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_messageSends_",
smalltalk.method({
selector: "messageSends:",
category: 'accessing',
fn: function (aCollection) {
var self=this;
(self['@messageSends']=aCollection);
return self;},
args: ["aCollection"],
source: "messageSends: aCollection\x0a\x09messageSends := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
category: 'accessing',
fn: function (aScope) {
var self=this;
smalltalk.send(self, "_scope_", [aScope], smalltalk.IRMethod.superclass || nil);
smalltalk.send(aScope, "_instruction_", [self]);
return self;},
args: ["aScope"],
source: "scope: aScope\x0a\x09super scope: aScope.\x0a\x09aScope instruction: self",
messageSends: ["scope:", "instruction:"],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function () {
var self=this;
return self['@selector'];
return self;},
args: [],
source: "selector\x0a\x09^ selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
category: 'accessing',
fn: function (aString) {
var self=this;
(self['@selector']=aString);
return self;},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
category: 'accessing',
fn: function () {
var self=this;
return self['@source'];
return self;},
args: [],
source: "source\x0a\x09^ source",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
category: 'accessing',
fn: function (aString) {
var self=this;
(self['@source']=aString);
return self;},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);



smalltalk.addClass('IRReturn', smalltalk.IRScopedInstruction, [], 'Compiler-IR');
smalltalk.IRReturn.comment="I am a local return instruction."
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor, "_visitIRReturn_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRReturn: self",
messageSends: ["visitIRReturn:"],
referencedClasses: []
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_canBeAssigned",
smalltalk.method({
selector: "canBeAssigned",
category: 'testing',
fn: function () {
var self=this;
return false;
return self;},
args: [],
source: "canBeAssigned\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_isLocalReturn",
smalltalk.method({
selector: "isLocalReturn",
category: 'testing',
fn: function () {
var self=this;
return smalltalk.send(self, "_isReturn", []);
return self;},
args: [],
source: "isLocalReturn\x0a\x09^ self isReturn",
messageSends: ["isReturn"],
referencedClasses: []
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_isNonLocalReturn",
smalltalk.method({
selector: "isNonLocalReturn",
category: 'testing',
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_isLocalReturn", []), "_not", []);
return self;},
args: [],
source: "isNonLocalReturn\x0a\x09^ self isLocalReturn not",
messageSends: ["not", "isLocalReturn"],
referencedClasses: []
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_isReturn",
smalltalk.method({
selector: "isReturn",
category: 'testing',
fn: function () {
var self=this;
return true;
return self;},
args: [],
source: "isReturn\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRReturn);



smalltalk.addClass('IRNonLocalReturn', smalltalk.IRReturn, [], 'Compiler-IR');
smalltalk.IRNonLocalReturn.comment="I am a non local return instruction.\x0aNon local returns are handled using a try/catch JS statement.\x0a\x0aSee IRNonLocalReturnHandling class"
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor, "_visitIRNonLocalReturn_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRNonLocalReturn: self",
messageSends: ["visitIRNonLocalReturn:"],
referencedClasses: []
}),
smalltalk.IRNonLocalReturn);

smalltalk.addMethod(
"_isLocalReturn",
smalltalk.method({
selector: "isLocalReturn",
category: 'testing',
fn: function () {
var self=this;
return false;
return self;},
args: [],
source: "isLocalReturn\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRNonLocalReturn);



smalltalk.addClass('IRSend', smalltalk.IRInstruction, ['selector', 'classSend', 'index'], 'Compiler-IR');
smalltalk.IRSend.comment="I am a message send instruction. "
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor, "_visitIRSend_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRSend: self",
messageSends: ["visitIRSend:"],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_classSend",
smalltalk.method({
selector: "classSend",
category: 'accessing',
fn: function () {
var self=this;
return self['@classSend'];
return self;},
args: [],
source: "classSend\x0a\x09^ classSend",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_classSend_",
smalltalk.method({
selector: "classSend:",
category: 'accessing',
fn: function (aClass) {
var self=this;
(self['@classSend']=aClass);
return self;},
args: ["aClass"],
source: "classSend: aClass\x0a\x09classSend := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_index",
smalltalk.method({
selector: "index",
category: 'accessing',
fn: function () {
var self=this;
return self['@index'];
return self;},
args: [],
source: "index\x0a\x09^ index",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_index_",
smalltalk.method({
selector: "index:",
category: 'accessing',
fn: function (anInteger) {
var self=this;
(self['@index']=anInteger);
return self;},
args: ["anInteger"],
source: "index: anInteger\x0a\x09index := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_isSend",
smalltalk.method({
selector: "isSend",
category: 'testing',
fn: function () {
var self=this;
return true;
return self;},
args: [],
source: "isSend\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function () {
var self=this;
return self['@selector'];
return self;},
args: [],
source: "selector\x0a\x09^ selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
category: 'accessing',
fn: function (aString) {
var self=this;
(self['@selector']=aString);
return self;},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);



smalltalk.addClass('IRSequence', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor, "_visitIRSequence_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRSequence: self",
messageSends: ["visitIRSequence:"],
referencedClasses: []
}),
smalltalk.IRSequence);

smalltalk.addMethod(
"_isSequence",
smalltalk.method({
selector: "isSequence",
category: 'testing',
fn: function () {
var self=this;
return true;
return self;},
args: [],
source: "isSequence\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSequence);



smalltalk.addClass('IRBlockSequence', smalltalk.IRSequence, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor, "_visitIRBlockSequence_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRBlockSequence: self",
messageSends: ["visitIRBlockSequence:"],
referencedClasses: []
}),
smalltalk.IRBlockSequence);



smalltalk.addClass('IRTempDeclaration', smalltalk.IRInstruction, ['name'], 'Compiler-IR');
smalltalk.IRTempDeclaration.comment="I am a temporary variable declaration instruction"
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor, "_visitIRTempDeclaration_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRTempDeclaration: self",
messageSends: ["visitIRTempDeclaration:"],
referencedClasses: []
}),
smalltalk.IRTempDeclaration);

smalltalk.addMethod(
"_isTempDeclaration",
smalltalk.method({
selector: "isTempDeclaration",
category: 'visiting',
fn: function () {
var self=this;
return true;
return self;},
args: [],
source: "isTempDeclaration\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRTempDeclaration);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'accessing',
fn: function () {
var self=this;
return self['@name'];
return self;},
args: [],
source: "name\x0a\x09^ name",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRTempDeclaration);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
category: 'accessing',
fn: function (aString) {
var self=this;
(self['@name']=aString);
return self;},
args: ["aString"],
source: "name: aString\x0a\x09name := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRTempDeclaration);



smalltalk.addClass('IRValue', smalltalk.IRInstruction, ['value'], 'Compiler-IR');
smalltalk.IRValue.comment="I am the simplest possible instruction. I represent a value."
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor, "_visitIRValue_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRValue: self",
messageSends: ["visitIRValue:"],
referencedClasses: []
}),
smalltalk.IRValue);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
category: 'accessing',
fn: function () {
var self=this;
return self['@value'];
return self;},
args: [],
source: "value\x0a\x09^value",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRValue);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
category: 'accessing',
fn: function (aString) {
var self=this;
(self['@value']=aString);
return self;},
args: ["aString"],
source: "value: aString\x0a\x09value := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRValue);



smalltalk.addClass('IRVariable', smalltalk.IRInstruction, ['variable'], 'Compiler-IR');
smalltalk.IRVariable.comment="I am a variable instruction."
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor, "_visitIRVariable_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRVariable: self",
messageSends: ["visitIRVariable:"],
referencedClasses: []
}),
smalltalk.IRVariable);

smalltalk.addMethod(
"_isVariable",
smalltalk.method({
selector: "isVariable",
category: 'testing',
fn: function () {
var self=this;
return true;
return self;},
args: [],
source: "isVariable\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRVariable);

smalltalk.addMethod(
"_variable",
smalltalk.method({
selector: "variable",
category: 'accessing',
fn: function () {
var self=this;
return self['@variable'];
return self;},
args: [],
source: "variable\x0a\x09^ variable",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRVariable);

smalltalk.addMethod(
"_variable_",
smalltalk.method({
selector: "variable:",
category: 'accessing',
fn: function (aScopeVariable) {
var self=this;
(self['@variable']=aScopeVariable);
return self;},
args: ["aScopeVariable"],
source: "variable: aScopeVariable\x0a\x09variable := aScopeVariable",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRVariable);



smalltalk.addClass('IRVerbatim', smalltalk.IRInstruction, ['source'], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor, "_visitIRVerbatim_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRVerbatim: self",
messageSends: ["visitIRVerbatim:"],
referencedClasses: []
}),
smalltalk.IRVerbatim);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
category: 'accessing',
fn: function () {
var self=this;
return self['@source'];
return self;},
args: [],
source: "source\x0a\x09^ source",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRVerbatim);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
category: 'accessing',
fn: function (aString) {
var self=this;
(self['@source']=aString);
return self;},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRVerbatim);



smalltalk.addClass('IRVisitor', smalltalk.Object, [], 'Compiler-IR');
smalltalk.addMethod(
"_visit_",
smalltalk.method({
selector: "visit:",
category: 'visiting',
fn: function (anIRInstruction) {
var self=this;
return smalltalk.send(anIRInstruction, "_accept_", [self]);
return self;},
args: ["anIRInstruction"],
source: "visit: anIRInstruction\x0a\x09^ anIRInstruction accept: self",
messageSends: ["accept:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRAssignment_",
smalltalk.method({
selector: "visitIRAssignment:",
category: 'visiting',
fn: function (anIRAssignment) {
var self=this;
return smalltalk.send(self, "_visitIRInstruction_", [anIRAssignment]);
return self;},
args: ["anIRAssignment"],
source: "visitIRAssignment: anIRAssignment\x0a\x09^ self visitIRInstruction: anIRAssignment",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRBlockSequence_",
smalltalk.method({
selector: "visitIRBlockSequence:",
category: 'visiting',
fn: function (anIRBlockSequence) {
var self=this;
return smalltalk.send(self, "_visitIRSequence_", [anIRBlockSequence]);
return self;},
args: ["anIRBlockSequence"],
source: "visitIRBlockSequence: anIRBlockSequence\x0a\x09^ self visitIRSequence: anIRBlockSequence",
messageSends: ["visitIRSequence:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRClosure_",
smalltalk.method({
selector: "visitIRClosure:",
category: 'visiting',
fn: function (anIRClosure) {
var self=this;
return smalltalk.send(self, "_visitIRInstruction_", [anIRClosure]);
return self;},
args: ["anIRClosure"],
source: "visitIRClosure: anIRClosure\x0a\x09^ self visitIRInstruction: anIRClosure",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRInstruction_",
smalltalk.method({
selector: "visitIRInstruction:",
category: 'visiting',
fn: function (anIRInstruction) {
var self=this;
smalltalk.send(smalltalk.send(anIRInstruction, "_instructions", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_", [each]);})]);
return anIRInstruction;
return self;},
args: ["anIRInstruction"],
source: "visitIRInstruction: anIRInstruction\x0a\x09anIRInstruction instructions do: [ :each | self visit: each ].\x0a\x09^ anIRInstruction",
messageSends: ["do:", "instructions", "visit:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRMethod_",
smalltalk.method({
selector: "visitIRMethod:",
category: 'visiting',
fn: function (anIRMethod) {
var self=this;
return smalltalk.send(self, "_visitIRInstruction_", [anIRMethod]);
return self;},
args: ["anIRMethod"],
source: "visitIRMethod: anIRMethod\x0a\x09^ self visitIRInstruction: anIRMethod",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRNonLocalReturn_",
smalltalk.method({
selector: "visitIRNonLocalReturn:",
category: 'visiting',
fn: function (anIRNonLocalReturn) {
var self=this;
return smalltalk.send(self, "_visitIRInstruction_", [anIRNonLocalReturn]);
return self;},
args: ["anIRNonLocalReturn"],
source: "visitIRNonLocalReturn: anIRNonLocalReturn\x0a\x09^ self visitIRInstruction: anIRNonLocalReturn",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRNonLocalReturnHandling_",
smalltalk.method({
selector: "visitIRNonLocalReturnHandling:",
category: 'visiting',
fn: function (anIRNonLocalReturnHandling) {
var self=this;
return smalltalk.send(self, "_visitIRInstruction_", [anIRNonLocalReturnHandling]);
return self;},
args: ["anIRNonLocalReturnHandling"],
source: "visitIRNonLocalReturnHandling: anIRNonLocalReturnHandling\x0a\x09^ self visitIRInstruction: anIRNonLocalReturnHandling",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRReturn_",
smalltalk.method({
selector: "visitIRReturn:",
category: 'visiting',
fn: function (anIRReturn) {
var self=this;
return smalltalk.send(self, "_visitIRInstruction_", [anIRReturn]);
return self;},
args: ["anIRReturn"],
source: "visitIRReturn: anIRReturn\x0a\x09^ self visitIRInstruction: anIRReturn",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRSend_",
smalltalk.method({
selector: "visitIRSend:",
category: 'visiting',
fn: function (anIRSend) {
var self=this;
return smalltalk.send(self, "_visitIRInstruction_", [anIRSend]);
return self;},
args: ["anIRSend"],
source: "visitIRSend: anIRSend\x0a\x09^ self visitIRInstruction: anIRSend",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRSequence_",
smalltalk.method({
selector: "visitIRSequence:",
category: 'visiting',
fn: function (anIRSequence) {
var self=this;
return smalltalk.send(self, "_visitIRInstruction_", [anIRSequence]);
return self;},
args: ["anIRSequence"],
source: "visitIRSequence: anIRSequence\x0a\x09^ self visitIRInstruction: anIRSequence",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRTempDeclaration_",
smalltalk.method({
selector: "visitIRTempDeclaration:",
category: 'visiting',
fn: function (anIRTempDeclaration) {
var self=this;
return smalltalk.send(self, "_visitIRInstruction_", [anIRTempDeclaration]);
return self;},
args: ["anIRTempDeclaration"],
source: "visitIRTempDeclaration: anIRTempDeclaration\x0a\x09^ self visitIRInstruction: anIRTempDeclaration",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRValue_",
smalltalk.method({
selector: "visitIRValue:",
category: 'visiting',
fn: function (anIRValue) {
var self=this;
return smalltalk.send(self, "_visitIRInstruction_", [anIRValue]);
return self;},
args: ["anIRValue"],
source: "visitIRValue: anIRValue\x0a\x09^ self visitIRInstruction: anIRValue",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRVariable_",
smalltalk.method({
selector: "visitIRVariable:",
category: 'visiting',
fn: function (anIRVariable) {
var self=this;
return smalltalk.send(self, "_visitIRInstruction_", [anIRVariable]);
return self;},
args: ["anIRVariable"],
source: "visitIRVariable: anIRVariable\x0a\x09^ self visitIRInstruction: anIRVariable",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRVerbatim_",
smalltalk.method({
selector: "visitIRVerbatim:",
category: 'visiting',
fn: function (anIRVerbatim) {
var self=this;
return smalltalk.send(self, "_visitIRInstruction_", [anIRVerbatim]);
return self;},
args: ["anIRVerbatim"],
source: "visitIRVerbatim: anIRVerbatim\x0a\x09^ self visitIRInstruction: anIRVerbatim",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);



smalltalk.addClass('IRJSTranslator', smalltalk.IRVisitor, ['stream'], 'Compiler-IR');
smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_stream", []), "_contents", []);
return self;},
args: [],
source: "contents\x0a\x09^ self stream contents",
messageSends: ["contents", "stream"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.IRJSTranslator.superclass || nil);
(self['@stream']=smalltalk.send((smalltalk.JSStream || JSStream), "_new", []));
return self;},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09stream := JSStream new.",
messageSends: ["initialize", "new"],
referencedClasses: ["JSStream"]
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_stream",
smalltalk.method({
selector: "stream",
category: 'accessing',
fn: function () {
var self=this;
return self['@stream'];
return self;},
args: [],
source: "stream\x0a\x09^ stream",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_stream_",
smalltalk.method({
selector: "stream:",
category: 'accessing',
fn: function (aStream) {
var self=this;
(self['@stream']=aStream);
return self;},
args: ["aStream"],
source: "stream: aStream\x0a\x09stream := aStream",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRAssignment_",
smalltalk.method({
selector: "visitIRAssignment:",
category: 'visiting',
fn: function (anIRAssignment) {
var self=this;
smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRAssignment, "_instructions", []), "_first", [])]);
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAssignment", []);
smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRAssignment, "_instructions", []), "_last", [])]);
return self;},
args: ["anIRAssignment"],
source: "visitIRAssignment: anIRAssignment\x0a\x09self visit: anIRAssignment instructions first.\x0a\x09self stream nextPutAssignment.\x0a\x09self visit: anIRAssignment instructions last.",
messageSends: ["visit:", "first", "instructions", "nextPutAssignment", "stream", "last"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRClosure_",
smalltalk.method({
selector: "visitIRClosure:",
category: 'visiting',
fn: function (anIRClosure) {
var self=this;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutClosureWith_arguments_", [(function(){return smalltalk.send(self, "_visitIRClosure_", [anIRClosure], smalltalk.IRJSTranslator.superclass || nil);}), smalltalk.send(anIRClosure, "_arguments", [])]);
return self;},
args: ["anIRClosure"],
source: "visitIRClosure: anIRClosure\x0a\x09self stream \x0a\x09\x09nextPutClosureWith: [ super visitIRClosure: anIRClosure ] \x0a\x09\x09arguments: anIRClosure arguments",
messageSends: ["nextPutClosureWith:arguments:", "stream", "visitIRClosure:", "arguments"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRMethod_",
smalltalk.method({
selector: "visitIRMethod:",
category: 'visiting',
fn: function (anIRMethod) {
var self=this;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutMethodDeclaration_with_", [anIRMethod, (function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutFunctionWith_arguments_", [(function(){((($receiver = smalltalk.send(smalltalk.send(anIRMethod, "_internalVariables", []), "_notEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutVars_", [smalltalk.send(smalltalk.send(smalltalk.send(anIRMethod, "_internalVariables", []), "_asArray", []), "_collect_", [(function(each){return smalltalk.send(smalltalk.send(each, "_variable", []), "_alias", []);})])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutVars_", [smalltalk.send(smalltalk.send(smalltalk.send(anIRMethod, "_internalVariables", []), "_asArray", []), "_collect_", [(function(each){return smalltalk.send(smalltalk.send(each, "_variable", []), "_alias", []);})])]);})]));return ((($receiver = smalltalk.send(smalltalk.send(anIRMethod, "_scope", []), "_hasNonLocalReturn", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutNonLocalReturnHandlingWith_", [(function(){return smalltalk.send(self, "_visitIRMethod_", [anIRMethod], smalltalk.IRJSTranslator.superclass || nil);})]);})() : (function(){return smalltalk.send(self, "_visitIRMethod_", [anIRMethod], smalltalk.IRJSTranslator.superclass || nil);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutNonLocalReturnHandlingWith_", [(function(){return smalltalk.send(self, "_visitIRMethod_", [anIRMethod], smalltalk.IRJSTranslator.superclass || nil);})]);}), (function(){return smalltalk.send(self, "_visitIRMethod_", [anIRMethod], smalltalk.IRJSTranslator.superclass || nil);})]));}), smalltalk.send(anIRMethod, "_arguments", [])]);})]);
return self;},
args: ["anIRMethod"],
source: "visitIRMethod: anIRMethod\x0a\x09self stream\x0a\x09\x09nextPutMethodDeclaration: anIRMethod \x0a\x09\x09with: [ self stream \x0a\x09\x09\x09nextPutFunctionWith: [ \x0a\x09\x09\x09\x09anIRMethod internalVariables notEmpty ifTrue: [\x0a\x09\x09\x09\x09\x09self stream nextPutVars: (anIRMethod internalVariables asArray collect: [ :each |\x0a\x09\x09\x09\x09\x09\x09each variable alias ]) ].\x0a\x09\x09\x09\x09anIRMethod scope hasNonLocalReturn \x0a\x09\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x09self stream nextPutNonLocalReturnHandlingWith: [\x0a\x09\x09\x09\x09\x09\x09\x09super visitIRMethod: anIRMethod ]]\x0a\x09\x09\x09\x09\x09ifFalse: [ super visitIRMethod: anIRMethod ]]\x0a\x09\x09\x09arguments: anIRMethod arguments ]",
messageSends: ["nextPutMethodDeclaration:with:", "stream", "nextPutFunctionWith:arguments:", "ifTrue:", "notEmpty", "internalVariables", "nextPutVars:", "collect:", "asArray", "alias", "variable", "ifTrue:ifFalse:", "hasNonLocalReturn", "scope", "nextPutNonLocalReturnHandlingWith:", "visitIRMethod:", "arguments"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRNonLocalReturn_",
smalltalk.method({
selector: "visitIRNonLocalReturn:",
category: 'visiting',
fn: function (anIRNonLocalReturn) {
var self=this;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutNonLocalReturnWith_", [(function(){return smalltalk.send(self, "_visitIRNonLocalReturn_", [anIRNonLocalReturn], smalltalk.IRJSTranslator.superclass || nil);})]);
return self;},
args: ["anIRNonLocalReturn"],
source: "visitIRNonLocalReturn: anIRNonLocalReturn\x0a\x09self stream nextPutNonLocalReturnWith: [\x0a\x09\x09super visitIRNonLocalReturn: anIRNonLocalReturn ]",
messageSends: ["nextPutNonLocalReturnWith:", "stream", "visitIRNonLocalReturn:"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRReturn_",
smalltalk.method({
selector: "visitIRReturn:",
category: 'visiting',
fn: function (anIRReturn) {
var self=this;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutReturnWith_", [(function(){return smalltalk.send(self, "_visitIRReturn_", [anIRReturn], smalltalk.IRJSTranslator.superclass || nil);})]);
return self;},
args: ["anIRReturn"],
source: "visitIRReturn: anIRReturn\x0a\x09self stream nextPutReturnWith: [\x0a\x09\x09super visitIRReturn: anIRReturn ]",
messageSends: ["nextPutReturnWith:", "stream", "visitIRReturn:"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRSend_",
smalltalk.method({
selector: "visitIRSend:",
category: 'visiting',
fn: function (anIRSend) {
var self=this;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", ["smalltalk.send("]);
smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRSend, "_instructions", []), "_first", [])]);
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", [smalltalk.send(smalltalk.send(",\x22", "__comma", [smalltalk.send(smalltalk.send(anIRSend, "_selector", []), "_asSelector", [])]), "__comma", ["\x22,["])]);
smalltalk.send(smalltalk.send(smalltalk.send(anIRSend, "_instructions", []), "_allButFirst", []), "_do_separatedBy_", [(function(each){return smalltalk.send(self, "_visit_", [each]);}), (function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", [","]);})]);
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", ["]"]);
((($receiver = ((($receiver = smalltalk.send(anIRSend, "_index", [])).klass === smalltalk.Number) ? $receiver >(1) : smalltalk.send($receiver, "__gt", [(1)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){(($receiver = smalltalk.send(anIRSend, "_classSend", [])) == nil || $receiver == undefined) ? (function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", [",undefined"]);})() : (function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", [smalltalk.send(",", "__comma", [smalltalk.send(smalltalk.send(anIRSend, "_classSend", []), "_asJavascript", [])])]);})();return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", [smalltalk.send(",", "__comma", [smalltalk.send(smalltalk.send(anIRSend, "_index", []), "_asString", [])])]);})() : (function(){return (($receiver = smalltalk.send(anIRSend, "_classSend", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", [smalltalk.send(",", "__comma", [smalltalk.send(smalltalk.send(anIRSend, "_classSend", []), "_asJavascript", [])])]);})() : nil;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){(($receiver = smalltalk.send(anIRSend, "_classSend", [])) == nil || $receiver == undefined) ? (function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", [",undefined"]);})() : (function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", [smalltalk.send(",", "__comma", [smalltalk.send(smalltalk.send(anIRSend, "_classSend", []), "_asJavascript", [])])]);})();return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", [smalltalk.send(",", "__comma", [smalltalk.send(smalltalk.send(anIRSend, "_index", []), "_asString", [])])]);}), (function(){return (($receiver = smalltalk.send(anIRSend, "_classSend", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", [smalltalk.send(",", "__comma", [smalltalk.send(smalltalk.send(anIRSend, "_classSend", []), "_asJavascript", [])])]);})() : nil;})]));
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", [")"]);
return self;},
args: ["anIRSend"],
source: "visitIRSend: anIRSend\x0a\x09self stream nextPutAll: 'smalltalk.send('.\x0a\x09self visit: anIRSend instructions first.\x0a\x09self stream nextPutAll:  ',\x22', anIRSend selector asSelector, '\x22,['.\x0a\x09anIRSend instructions allButFirst\x0a\x09\x09do: [ :each | self visit: each ]\x0a\x09\x09separatedBy: [ self stream nextPutAll: ',' ].\x0a\x09self stream nextPutAll: ']'.\x0a\x09anIRSend index > 1 \x0a\x09\x09ifTrue: [\x0a\x09\x09\x09anIRSend classSend \x0a\x09\x09\x09\x09ifNil: [ self stream nextPutAll: ',undefined' ]\x0a\x09\x09\x09\x09ifNotNil: [ self stream nextPutAll: ',', anIRSend classSend asJavascript ].\x0a\x09\x09\x09self stream nextPutAll: ',', anIRSend index asString ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09anIRSend classSend ifNotNil: [  \x0a\x09\x09\x09\x09self stream nextPutAll: ',', anIRSend classSend asJavascript ]].\x0a\x09self stream nextPutAll: ')'",
messageSends: ["nextPutAll:", "stream", "visit:", "first", "instructions", ",", "asSelector", "selector", "do:separatedBy:", "allButFirst", "ifTrue:ifFalse:", ">", "index", "ifNil:ifNotNil:", "classSend", "asJavascript", "asString", "ifNotNil:"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRSequence_",
smalltalk.method({
selector: "visitIRSequence:",
category: 'visiting',
fn: function (anIRSequence) {
var self=this;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutSequenceWith_", [(function(){return smalltalk.send(smalltalk.send(anIRSequence, "_instructions", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutStatementWith_", [smalltalk.send(self, "_visit_", [each])]);})]);})]);
return self;},
args: ["anIRSequence"],
source: "visitIRSequence: anIRSequence\x0a\x09self stream nextPutSequenceWith: [\x0a\x09\x09anIRSequence instructions do: [ :each |\x0a\x09\x09\x09self stream nextPutStatementWith: (self visit: each) ]]",
messageSends: ["nextPutSequenceWith:", "stream", "do:", "instructions", "nextPutStatementWith:", "visit:"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRTempDeclaration_",
smalltalk.method({
selector: "visitIRTempDeclaration:",
category: 'visiting',
fn: function (anIRTempDeclaration) {
var self=this;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutVar_", [smalltalk.send(smalltalk.send(anIRTempDeclaration, "_name", []), "_asVariableName", [])]);
return self;},
args: ["anIRTempDeclaration"],
source: "visitIRTempDeclaration: anIRTempDeclaration\x0a\x09self stream nextPutVar: anIRTempDeclaration name asVariableName",
messageSends: ["nextPutVar:", "stream", "asVariableName", "name"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRValue_",
smalltalk.method({
selector: "visitIRValue:",
category: 'visiting',
fn: function (anIRValue) {
var self=this;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", [smalltalk.send(smalltalk.send(anIRValue, "_value", []), "_asJavascript", [])]);
return self;},
args: ["anIRValue"],
source: "visitIRValue: anIRValue\x0a\x09self stream nextPutAll: anIRValue value asJavascript",
messageSends: ["nextPutAll:", "stream", "asJavascript", "value"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRVariable_",
smalltalk.method({
selector: "visitIRVariable:",
category: 'visiting',
fn: function (anIRVariable) {
var self=this;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", [smalltalk.send(smalltalk.send(anIRVariable, "_variable", []), "_alias", [])]);
return self;},
args: ["anIRVariable"],
source: "visitIRVariable: anIRVariable\x0a\x09self stream nextPutAll: anIRVariable variable alias",
messageSends: ["nextPutAll:", "stream", "alias", "variable"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRVerbatim_",
smalltalk.method({
selector: "visitIRVerbatim:",
category: 'visiting',
fn: function (anIRVerbatim) {
var self=this;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutStatementWith_", [(function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", [smalltalk.send(anIRVerbatim, "_source", [])]);})]);
return self;},
args: ["anIRVerbatim"],
source: "visitIRVerbatim: anIRVerbatim\x0a\x09self stream nextPutStatementWith: [\x0a\x09\x09self stream nextPutAll: anIRVerbatim source ]",
messageSends: ["nextPutStatementWith:", "stream", "nextPutAll:", "source"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);



smalltalk.addClass('JSStream', smalltalk.Object, ['stream'], 'Compiler-IR');
smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.send(self['@stream'], "_contents", []);
return self;},
args: [],
source: "contents\x0a\x09^ stream contents",
messageSends: ["contents"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.JSStream.superclass || nil);
(self['@stream']=smalltalk.send("", "_writeStream", []));
return self;},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09stream := '' writeStream.",
messageSends: ["initialize", "writeStream"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_lf",
smalltalk.method({
selector: "lf",
category: 'streaming',
fn: function () {
var self=this;
smalltalk.send(self['@stream'], "_lf", []);
return self;},
args: [],
source: "lf\x0a\x09stream lf",
messageSends: ["lf"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPut_",
smalltalk.method({
selector: "nextPut:",
category: 'streaming',
fn: function (aString) {
var self=this;
smalltalk.send(self['@stream'], "_nextPut_", [aString]);
return self;},
args: ["aString"],
source: "nextPut: aString\x0a\x09stream nextPut: aString",
messageSends: ["nextPut:"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutAll_",
smalltalk.method({
selector: "nextPutAll:",
category: 'streaming',
fn: function (aString) {
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", [aString]);
return self;},
args: ["aString"],
source: "nextPutAll: aString\x0a\x09stream nextPutAll: aString",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutAssignment",
smalltalk.method({
selector: "nextPutAssignment",
category: 'streaming',
fn: function () {
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", ["="]);
return self;},
args: [],
source: "nextPutAssignment\x0a\x09stream nextPutAll: '='",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutClosureWith_arguments_",
smalltalk.method({
selector: "nextPutClosureWith:arguments:",
category: 'streaming',
fn: function (aBlock, anArray) {
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", ["(function("]);
smalltalk.send(anArray, "_do_separatedBy_", [(function(each){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(each, "_asVariableName", [])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPut_", [","]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", ["){"]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
smalltalk.send(aBlock, "_value", []);
smalltalk.send(self['@stream'], "_nextPutAll_", ["})"]);
return self;},
args: ["aBlock", "anArray"],
source: "nextPutClosureWith: aBlock arguments: anArray\x0a\x09stream nextPutAll: '(function('.\x0a\x09anArray \x0a\x09\x09do: [ :each | stream nextPutAll: each asVariableName ]\x0a\x09\x09separatedBy: [ stream nextPut: ',' ].\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: '})'",
messageSends: ["nextPutAll:", "do:separatedBy:", "asVariableName", "nextPut:", "lf", "value"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutFunctionWith_arguments_",
smalltalk.method({
selector: "nextPutFunctionWith:arguments:",
category: 'streaming',
fn: function (aBlock, anArray) {
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", ["fn: function("]);
smalltalk.send(anArray, "_do_separatedBy_", [(function(each){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(each, "_asVariableName", [])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPut_", [","]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", ["){"]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
(function($rec){smalltalk.send($rec, "_nextPutAll_", ["var self=this;"]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
smalltalk.send(aBlock, "_value", []);
smalltalk.send(self['@stream'], "_nextPutAll_", ["}"]);
return self;},
args: ["aBlock", "anArray"],
source: "nextPutFunctionWith: aBlock arguments: anArray\x0a\x09stream nextPutAll: 'fn: function('.\x0a\x09anArray \x0a\x09\x09do: [ :each | stream nextPutAll: each asVariableName ]\x0a\x09\x09separatedBy: [ stream nextPut: ',' ].\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09stream nextPutAll: 'var self=this;'; lf.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: '}'",
messageSends: ["nextPutAll:", "do:separatedBy:", "asVariableName", "nextPut:", "lf", "value"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutIf_with_",
smalltalk.method({
selector: "nextPutIf:with:",
category: 'streaming',
fn: function (aBlock, anotherBlock) {
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", ["if("]);
smalltalk.send(aBlock, "_value", []);
(function($rec){smalltalk.send($rec, "_nextPutAll_", ["){"]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
smalltalk.send(anotherBlock, "_value", []);
smalltalk.send(self['@stream'], "_nextPutAll_", ["}"]);
return self;},
args: ["aBlock", "anotherBlock"],
source: "nextPutIf: aBlock with: anotherBlock\x0a\x09stream nextPutAll: 'if('.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09anotherBlock value.\x0a\x09stream nextPutAll: '}'",
messageSends: ["nextPutAll:", "value", "lf"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutMethodDeclaration_with_",
smalltalk.method({
selector: "nextPutMethodDeclaration:with:",
category: 'streaming',
fn: function (aMethod, aBlock) {
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", ["smalltalk.method({"]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("selector: \x22", "__comma", [smalltalk.send(aMethod, "_selector", [])]), "__comma", ["\x22,"])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("source: ", "__comma", [smalltalk.send(smalltalk.send(aMethod, "_source", []), "_asJavascript", [])]), "__comma", [","])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
smalltalk.send(aBlock, "_value", []);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(",", "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])]), "__comma", ["messageSends: "])]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aMethod, "_messageSends", []), "_asArray", []), "_asJavascript", []), "__comma", [","])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("args: ", "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aMethod, "_arguments", []), "_collect_", [(function(each){return smalltalk.send(each, "_value", []);})]), "_asArray", []), "_asJavascript", [])]), "__comma", [","])]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", ["referencedClasses: ["]);})(self['@stream']);
smalltalk.send(smalltalk.send(aMethod, "_classReferences", []), "_do_separatedBy_", [(function(each){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(each, "_asJavascript", [])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [","]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", ["]"]);return smalltalk.send($rec, "_nextPutAll_", ["})"]);})(self['@stream']);
return self;},
args: ["aMethod", "aBlock"],
source: "nextPutMethodDeclaration: aMethod with: aBlock\x0a\x09stream \x0a\x09\x09nextPutAll: 'smalltalk.method({'; lf;\x0a\x09\x09nextPutAll: 'selector: \x22', aMethod selector, '\x22,'; lf;\x0a\x09\x09nextPutAll: 'source: ', aMethod source asJavascript, ',';lf.\x0a\x09aBlock value.\x0a\x09stream \x0a\x09\x09nextPutAll: ',', String lf, 'messageSends: ';\x0a\x09\x09nextPutAll: aMethod messageSends asArray asJavascript, ','; lf;\x0a          \x09nextPutAll: 'args: ', (aMethod arguments collect: [ :each | each value ]) asArray asJavascript, ','; lf;\x0a\x09\x09nextPutAll: 'referencedClasses: ['.\x0a\x09aMethod classReferences \x0a\x09\x09do: [:each | stream nextPutAll: each asJavascript]\x0a\x09\x09separatedBy: [stream nextPutAll: ','].\x0a\x09stream \x0a\x09\x09nextPutAll: ']';\x0a\x09\x09nextPutAll: '})'",
messageSends: ["nextPutAll:", "lf", ",", "selector", "asJavascript", "source", "value", "asArray", "messageSends", "collect:", "arguments", "do:separatedBy:", "classReferences"],
referencedClasses: ["String"]
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutNonLocalReturnHandlingWith_",
smalltalk.method({
selector: "nextPutNonLocalReturnHandlingWith:",
category: 'streaming',
fn: function (aBlock) {
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", ["var $early={};"]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", ["try {"]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
smalltalk.send(aBlock, "_value", []);
(function($rec){smalltalk.send($rec, "_nextPutAll_", ["}"]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", ["catch(e) {if(e===$early)return e[0]; throw e}"]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
return self;},
args: ["aBlock"],
source: "nextPutNonLocalReturnHandlingWith: aBlock\x0a\x09stream \x0a\x09\x09nextPutAll: 'var $early={};'; lf;\x0a\x09\x09nextPutAll: 'try {'; lf.\x0a\x09aBlock value.\x0a\x09stream \x0a\x09\x09nextPutAll: '}'; lf;\x0a\x09\x09nextPutAll: 'catch(e) {if(e===$early)return e[0]; throw e}'; lf",
messageSends: ["nextPutAll:", "lf", "value"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutNonLocalReturnWith_",
smalltalk.method({
selector: "nextPutNonLocalReturnWith:",
category: 'streaming',
fn: function (aBlock) {
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", ["throw $early=["]);
smalltalk.send(aBlock, "_value", []);
smalltalk.send(self['@stream'], "_nextPutAll_", ["]"]);
return self;},
args: ["aBlock"],
source: "nextPutNonLocalReturnWith: aBlock\x0a\x09stream nextPutAll: 'throw $early=['.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: ']'",
messageSends: ["nextPutAll:", "value"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutReturn",
smalltalk.method({
selector: "nextPutReturn",
category: 'streaming',
fn: function () {
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);
return self;},
args: [],
source: "nextPutReturn\x0a\x09stream nextPutAll: 'return '",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutReturnWith_",
smalltalk.method({
selector: "nextPutReturnWith:",
category: 'streaming',
fn: function (aBlock) {
var self=this;
smalltalk.send(self, "_nextPutReturn", []);
smalltalk.send(aBlock, "_value", []);
return self;},
args: ["aBlock"],
source: "nextPutReturnWith: aBlock\x0a\x09self nextPutReturn.\x0a\x09aBlock value",
messageSends: ["nextPutReturn", "value"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutSendTo_selector_arguments_",
smalltalk.method({
selector: "nextPutSendTo:selector:arguments:",
category: 'streaming',
fn: function (receiver, selector, arguments) {
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", ["smalltalk.send("]);
smalltalk.send(receiver, "_emitOn_", [self]);
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(",\x22", "__comma", [smalltalk.send(selector, "_asSelector", [])]), "__comma", ["\x22,["])]);
smalltalk.send(arguments, "_do_separatedBy_", [(function(each){return smalltalk.send(each, "_emitOn_", [self]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [","]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", ["])"]);
return self;},
args: ["receiver", "selector", "arguments"],
source: "nextPutSendTo: receiver selector: selector arguments: arguments\x0a\x09stream nextPutAll: 'smalltalk.send('.\x0a\x09receiver emitOn: self. \x0a\x09stream nextPutAll: ',\x22', selector asSelector, '\x22,['.\x0a\x09arguments \x0a\x09\x09do: [ :each | each emitOn: self ]\x0a\x09\x09separatedBy: [ stream nextPutAll: ',' ].\x0a\x09stream nextPutAll: '])'",
messageSends: ["nextPutAll:", "emitOn:", ",", "asSelector", "do:separatedBy:"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutSequenceWith_",
smalltalk.method({
selector: "nextPutSequenceWith:",
category: 'streaming',
fn: function (aBlock) {
var self=this;
smalltalk.send(aBlock, "_value", []);
return self;},
args: ["aBlock"],
source: "nextPutSequenceWith: aBlock\x0a\x09\x22stream \x0a\x09\x09nextPutAll: 'switch(smalltalk.thisContext.pc){'; lf.\x22\x0a\x09aBlock value.\x0a\x09\x22stream \x0a\x09\x09nextPutAll: '};'; lf\x22",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutStatement_with_",
smalltalk.method({
selector: "nextPutStatement:with:",
category: 'streaming',
fn: function (anInteger, aBlock) {
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("case ", "__comma", [smalltalk.send(anInteger, "_asString", [])]), "__comma", [":"])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
smalltalk.send(self, "_nextPutStatementWith_", [aBlock]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("smalltalk.thisContext.pc=", "__comma", [smalltalk.send(((($receiver = anInteger).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])), "_asString", [])]), "__comma", [";"])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
return self;},
args: ["anInteger", "aBlock"],
source: "nextPutStatement: anInteger with: aBlock\x0a\x09stream nextPutAll: 'case ', anInteger asString, ':'; lf.\x0a\x09self nextPutStatementWith: aBlock.\x0a\x09stream nextPutAll: 'smalltalk.thisContext.pc=', (anInteger + 1) asString, ';'; lf",
messageSends: ["nextPutAll:", ",", "asString", "lf", "nextPutStatementWith:", "+"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutStatementWith_",
smalltalk.method({
selector: "nextPutStatementWith:",
category: 'streaming',
fn: function (aBlock) {
var self=this;
smalltalk.send(aBlock, "_value", []);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [";"]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
return self;},
args: ["aBlock"],
source: "nextPutStatementWith: aBlock\x0a\x09aBlock value.\x0a\x09stream nextPutAll: ';'; lf",
messageSends: ["value", "nextPutAll:", "lf"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutVar_",
smalltalk.method({
selector: "nextPutVar:",
category: 'streaming',
fn: function (aString) {
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("var ", "__comma", [aString]), "__comma", [";"])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
return self;},
args: ["aString"],
source: "nextPutVar: aString\x0a\x09stream nextPutAll: 'var ', aString, ';'; lf",
messageSends: ["nextPutAll:", ",", "lf"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutVars_",
smalltalk.method({
selector: "nextPutVars:",
category: 'streaming',
fn: function (aCollection) {
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", ["var "]);
smalltalk.send(aCollection, "_do_separatedBy_", [(function(each){return smalltalk.send(self['@stream'], "_nextPutAll_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [","]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [";"]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
return self;},
args: ["aCollection"],
source: "nextPutVars: aCollection\x0a\x09stream nextPutAll: 'var '.\x0a\x09aCollection \x0a\x09\x09do: [ :each | stream nextPutAll: each ]\x0a\x09\x09separatedBy: [ stream nextPutAll: ',' ].\x0a\x09stream nextPutAll: ';'; lf",
messageSends: ["nextPutAll:", "do:separatedBy:", "lf"],
referencedClasses: []
}),
smalltalk.JSStream);



smalltalk.addMethod(
"_appendToInstruction_",
smalltalk.method({
selector: "appendToInstruction:",
category: '*Compiler-IR',
fn: function (anIRInstruction) {
var self=this;
smalltalk.send(anIRInstruction,"_appendBlock_",[self]);
return self;},
args: ["anIRInstruction"],
source: "appendToInstruction: anIRInstruction\x0a    anIRInstruction appendBlock: self",
messageSends: ["appendBlock:"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_asVariableName",
smalltalk.method({
selector: "asVariableName",
category: '*Compiler-IR',
fn: function () {
var self=this;
return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_reservedWords", []), "_includes_", [self])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "__comma", ["_"]);})() : (function(){return self;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "__comma", ["_"]);}), (function(){return self;})]));
return self;},
args: [],
source: "asVariableName\x0a\x09^ (Smalltalk current reservedWords includes: self)\x0a\x09\x09ifTrue: [ self, '_' ]\x0a\x09\x09ifFalse: [ self ]",
messageSends: ["ifTrue:ifFalse:", "includes:", "reservedWords", "current", ","],
referencedClasses: ["Smalltalk"]
}),
smalltalk.String);

