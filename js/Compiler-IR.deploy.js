smalltalk.addPackage('Compiler-IR', {});
smalltalk.addClass('IRASTTranslator', smalltalk.NodeVisitor, ['builder', 'source', 'theClass'], 'Compiler-IR');
smalltalk.addMethod(
"_builder",
smalltalk.method({
selector: "builder",
fn: function () {
var self=this;
return (($receiver = self['@builder']) == nil || $receiver == undefined) ? (function(){return (self['@builder']=smalltalk.send((smalltalk.IRBuilder || IRBuilder), "_new", []));})() : $receiver;
return self;}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_builder_",
smalltalk.method({
selector: "builder:",
fn: function (aBuilder) {
var self=this;
(self['@builder']=aBuilder);
return self;}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function () {
var self=this;
return self['@source'];
return self;}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString) {
var self=this;
(self['@source']=aString);
return self;}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
fn: function () {
var self=this;
return self['@theClass'];
return self;}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
fn: function (aClass) {
var self=this;
(self['@theClass']=aClass);
return self;}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitAssignmentNode_",
smalltalk.method({
selector: "visitAssignmentNode:",
fn: function (aNode) {
var self=this;
(function($rec){smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_left", [])]);})]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_right", [])]);})]);})(smalltalk.send(smalltalk.send(self, "_builder", []), "_assignment", []));
return self;}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
fn: function (aNode) {
var self=this;
(function($rec){smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_scope", []), "_temps", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_builder", []), "_tempDeclaration", []), "_name_", [smalltalk.send(each, "_name", [])]);})]);return smalltalk.send(self, "_visitBlockNode_", [aNode], smalltalk.IRASTTranslator.superclass || nil);})]);return smalltalk.send($rec, "_arguments_", [smalltalk.send(aNode, "_parameters", [])]);})(smalltalk.send(smalltalk.send(self, "_builder", []), "_closure", []));
return self;}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitBlockSequenceNode_",
smalltalk.method({
selector: "visitBlockSequenceNode:",
fn: function (aNode) {
var self=this;
var $1,$2,$3,$4,$5;
$1=(function(){
$2=(function(each){
return smalltalk.send(self,"_visit_",[each]);
});
$3=smalltalk.send(aNode,"_nodes",[]);
return smalltalk.send($3,"_do_",[$2]);
});
$4=smalltalk.send(self,"_builder",[]);
$5=smalltalk.send($4,"_blockSequence",[]);
smalltalk.send($5,"_with_",[$1]);
return self;}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitJSStatementNode_",
smalltalk.method({
selector: "visitJSStatementNode:",
fn: function (aNode) {
var self=this;
smalltalk.send(smalltalk.send(self, "_builder", []), "_verbatim_", [smalltalk.send(aNode, "_source", [])]);
return self;}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitMethodNode_",
smalltalk.method({
selector: "visitMethodNode:",
fn: function (aNode) {
var self=this;
(function($rec){smalltalk.send($rec, "_source_", [smalltalk.send(self, "_source", [])]);smalltalk.send($rec, "_arguments_", [smalltalk.send(aNode, "_arguments", [])]);smalltalk.send($rec, "_selector_", [smalltalk.send(aNode, "_selector", [])]);smalltalk.send($rec, "_messageSends_", [smalltalk.send(aNode, "_messageSends", [])]);return smalltalk.send($rec, "_classReferences_", [smalltalk.send(aNode, "_classReferences", [])]);})(smalltalk.send(smalltalk.send(self, "_builder", []), "_method", []));
smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_scope", []), "_temps", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_builder", []), "_tempDeclaration", []), "_name_", [smalltalk.send(each, "_name", [])]);})]);
((($receiver = smalltalk.send(aNode, "_hasNonLocalReturn", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_builder", []), "_nonLocalReturnHandling", []), "_with_", [(function(){return smalltalk.send(self, "_visitMethodNode_", [aNode], smalltalk.IRASTTranslator.superclass || nil);})]);})() : (function(){return smalltalk.send(self, "_visitMethodNode_", [aNode], smalltalk.IRASTTranslator.superclass || nil);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_builder", []), "_nonLocalReturnHandling", []), "_with_", [(function(){return smalltalk.send(self, "_visitMethodNode_", [aNode], smalltalk.IRASTTranslator.superclass || nil);})]);}), (function(){return smalltalk.send(self, "_visitMethodNode_", [aNode], smalltalk.IRASTTranslator.superclass || nil);})]));
((($receiver = smalltalk.send(aNode, "_hasLocalReturn", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_builder", []), "_return", []), "_with_", [(function(){return smalltalk.send(smalltalk.send(self, "_builder", []), "_variable_", [smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_scope", []), "_pseudoVars", []), "_at_", ["self"])]);})]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_builder", []), "_return", []), "_with_", [(function(){return smalltalk.send(smalltalk.send(self, "_builder", []), "_variable_", [smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_scope", []), "_pseudoVars", []), "_at_", ["self"])]);})]);})]));
return self;}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
fn: function (aNode) {
var self=this;
smalltalk.send(((($receiver = smalltalk.send(aNode, "_nonLocalReturn", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_builder", []), "_nonLocalReturn", []);})() : (function(){return smalltalk.send(smalltalk.send(self, "_builder", []), "_return", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_builder", []), "_nonLocalReturn", []);}), (function(){return smalltalk.send(smalltalk.send(self, "_builder", []), "_return", []);})])), "_with_", [(function(){return smalltalk.send(self, "_visitReturnNode_", [aNode], smalltalk.IRASTTranslator.superclass || nil);})]);
return self;}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
fn: function (aNode) {
var self=this;
var send=nil;
(send=smalltalk.send(smalltalk.send(self, "_builder", []), "_send", []));
smalltalk.send(send, "_selector_", [smalltalk.send(aNode, "_selector", [])]);
((($receiver = smalltalk.send(aNode, "_superSend", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(send, "_classSend_", [smalltalk.send(smalltalk.send(self, "_theClass", []), "_superclass", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(send, "_classSend_", [smalltalk.send(smalltalk.send(self, "_theClass", []), "_superclass", [])]);})]));
smalltalk.send(send, "_with_", [(function(){smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_receiver", [])]);return smalltalk.send(smalltalk.send(aNode, "_arguments", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_", [each]);})]);})]);
return self;}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
fn: function (aNode) {
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_builder", []), "_sequence", []), "_with_", [(function(){return smalltalk.send(self, "_visitSequenceNode_", [aNode], smalltalk.IRASTTranslator.superclass || nil);})]);
return self;}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitValueNode_",
smalltalk.method({
selector: "visitValueNode:",
fn: function (aNode) {
var self=this;
smalltalk.send(smalltalk.send(self, "_builder", []), "_value_", [smalltalk.send(aNode, "_value", [])]);
return self;}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitVariableNode_",
smalltalk.method({
selector: "visitVariableNode:",
fn: function (aNode) {
var self=this;
smalltalk.send(smalltalk.send(self, "_builder", []), "_variable_", [smalltalk.send(aNode, "_binding", [])]);
return self;}
}),
smalltalk.IRASTTranslator);



smalltalk.addClass('IRASTResolver', smalltalk.IRASTTranslator, ['nextAlias'], 'Compiler-IR');
smalltalk.addMethod(
"_nextAlias",
smalltalk.method({
selector: "nextAlias",
fn: function () {
var self=this;
(($receiver = self['@nextAlias']) == nil || $receiver == undefined) ? (function(){return (self['@nextAlias']=(0));})() : $receiver;
(self['@nextAlias']=((($receiver = self['@nextAlias']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));
return smalltalk.send("$", "__comma", [smalltalk.send(self['@nextAlias'], "_asString", [])]);
return self;}
}),
smalltalk.IRASTResolver);

smalltalk.addMethod(
"_resolve_",
smalltalk.method({
selector: "resolve:",
fn: function (aNode) {
var self=this;
((($receiver = smalltalk.send(aNode, "_isBlockSequenceNode", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){return smalltalk.send(self, "_resolve_", [each]);})]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){return smalltalk.send(self, "_resolve_", [each]);})]);})]));
((($receiver = smalltalk.send(aNode, "_shouldBeAliased", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var alias=nil;
(alias=smalltalk.send(self, "_nextAlias", []));smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_builder", []), "_method", []), "_internalVariables", []), "_add_", [alias]);(function($rec){smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(self, "_builder", []), "_variable_", [(function($rec){smalltalk.send($rec, "_name_", [alias]);smalltalk.send($rec, "_node_", [aNode]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.AliasVar || AliasVar), "_new", []))]);})]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_visit_resolving_", [aNode, false]);})]);})(smalltalk.send(smalltalk.send(self, "_builder", []), "_alias", []));return smalltalk.send(aNode, "_alias_", [alias]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var alias=nil;
(alias=smalltalk.send(self, "_nextAlias", []));smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_builder", []), "_method", []), "_internalVariables", []), "_add_", [alias]);(function($rec){smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(self, "_builder", []), "_variable_", [(function($rec){smalltalk.send($rec, "_name_", [alias]);smalltalk.send($rec, "_node_", [aNode]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.AliasVar || AliasVar), "_new", []))]);})]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_visit_resolving_", [aNode, false]);})]);})(smalltalk.send(smalltalk.send(self, "_builder", []), "_alias", []));return smalltalk.send(aNode, "_alias_", [alias]);})]));
return self;}
}),
smalltalk.IRASTResolver);

smalltalk.addMethod(
"_visit_",
smalltalk.method({
selector: "visit:",
fn: function (aNode) {
var self=this;
smalltalk.send(self, "_visit_resolving_", [aNode, smalltalk.send(aNode, "_canAliasChildren", [])]);
return self;}
}),
smalltalk.IRASTResolver);

smalltalk.addMethod(
"_visit_resolving_",
smalltalk.method({
selector: "visit:resolving:",
fn: function (aNode, aBoolean) {
var self=this;
((($receiver = aBoolean).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_resolve_", [aNode]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_resolve_", [aNode]);})]));
((($receiver = smalltalk.send(aNode, "_isAliased", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_visitAliased_", [aNode]);})() : (function(){return smalltalk.send(self, "_visit_", [aNode], smalltalk.IRASTResolver.superclass || nil);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_visitAliased_", [aNode]);}), (function(){return smalltalk.send(self, "_visit_", [aNode], smalltalk.IRASTResolver.superclass || nil);})]));
return self;}
}),
smalltalk.IRASTResolver);

smalltalk.addMethod(
"_visitAliased_",
smalltalk.method({
selector: "visitAliased:",
fn: function (aNode) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_builder", []), "_variable_", [(function($rec){smalltalk.send($rec, "_name_", [smalltalk.send(aNode, "_alias", [])]);smalltalk.send($rec, "_node_", [aNode]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.AliasVar || AliasVar), "_new", []))]);
return self;}
}),
smalltalk.IRASTResolver);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
fn: function (aNode) {
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_allButLast", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_resolving_", [each, false]);})]);
smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_last", [])]);
return self;}
}),
smalltalk.IRASTResolver);



smalltalk.addClass('IRBuilder', smalltalk.Object, ['method', 'root', 'nextPc'], 'Compiler-IR');
smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function (aClass) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_root", []), "_append_", [smalltalk.send(aClass, "_on_", [self])]);
return self;}
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
fn: function () {
var self=this;
return smalltalk.send(self, "_add_", [(smalltalk.IRAlias || IRAlias)]);
return self;}
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_append_",
smalltalk.method({
selector: "append:",
fn: function (anObject) {
var self=this;
return smalltalk.send(self['@root'], "_append_", [anObject]);
return self;}
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_assignment",
smalltalk.method({
selector: "assignment",
fn: function () {
var self=this;
return smalltalk.send(self, "_add_", [(smalltalk.IRAssignment || IRAssignment)]);
return self;}
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_blockSequence",
smalltalk.method({
selector: "blockSequence",
fn: function () {
var self=this;
return smalltalk.send(self, "_add_", [(smalltalk.IRBlockSequence || IRBlockSequence)]);
return self;}
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_closure",
smalltalk.method({
selector: "closure",
fn: function () {
var self=this;
return smalltalk.send(self, "_add_", [(smalltalk.IRClosure || IRClosure)]);
return self;}
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_emitOn_",
smalltalk.method({
selector: "emitOn:",
fn: function (aStream) {
var self=this;
smalltalk.send(self['@method'], "_emitOn_", [aStream]);
return self;}
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.IRBuilder.superclass || nil);
(self['@root']=(self['@method']=smalltalk.send((smalltalk.IRMethod || IRMethod), "_on_", [self])));
return self;}
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_method",
smalltalk.method({
selector: "method",
fn: function () {
var self=this;
return self['@method'];
return self;}
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_nextPc",
smalltalk.method({
selector: "nextPc",
fn: function () {
var self=this;
(($receiver = self['@nextPc']) == nil || $receiver == undefined) ? (function(){return (self['@nextPc']=(0));})() : $receiver;
(self['@nextPc']=((($receiver = self['@nextPc']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));
return self['@nextPc'];
return self;}
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_nonLocalReturn",
smalltalk.method({
selector: "nonLocalReturn",
fn: function () {
var self=this;
return smalltalk.send(self, "_add_", [(smalltalk.IRNonLocalReturn || IRNonLocalReturn)]);
return self;}
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_nonLocalReturnHandling",
smalltalk.method({
selector: "nonLocalReturnHandling",
fn: function () {
var self=this;
return smalltalk.send(self, "_add_", [(smalltalk.IRNonLocalReturnHandling || IRNonLocalReturnHandling)]);
return self;}
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_return",
smalltalk.method({
selector: "return",
fn: function () {
var self=this;
return smalltalk.send(self, "_add_", [(smalltalk.IRReturn || IRReturn)]);
return self;}
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_root",
smalltalk.method({
selector: "root",
fn: function () {
var self=this;
return self['@root'];
return self;}
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_root_",
smalltalk.method({
selector: "root:",
fn: function (anIRInstruction) {
var self=this;
(self['@root']=anIRInstruction);
return self;}
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_send",
smalltalk.method({
selector: "send",
fn: function () {
var self=this;
return smalltalk.send(self, "_add_", [(smalltalk.IRSend || IRSend)]);
return self;}
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_sequence",
smalltalk.method({
selector: "sequence",
fn: function () {
var self=this;
return smalltalk.send(self, "_add_", [(smalltalk.IRSequence || IRSequence)]);
return self;}
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_statement",
smalltalk.method({
selector: "statement",
fn: function () {
var self=this;
return smalltalk.send(self, "_add_", [(smalltalk.IRStatement || IRStatement)]);
return self;}
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_tempDeclaration",
smalltalk.method({
selector: "tempDeclaration",
fn: function () {
var self=this;
return smalltalk.send(self, "_add_", [(smalltalk.IRTempDeclaration || IRTempDeclaration)]);
return self;}
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
fn: function () {
var self=this;
return smalltalk.send(self, "_add_", [(smalltalk.IRValue || IRValue)]);
return self;}
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
fn: function (aString) {
var self=this;
return (function($rec){smalltalk.send($rec, "_value_", [aString]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_value", []));
return self;}
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_variable",
smalltalk.method({
selector: "variable",
fn: function () {
var self=this;
return smalltalk.send(self, "_add_", [(smalltalk.IRVariable || IRVariable)]);
return self;}
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_variable_",
smalltalk.method({
selector: "variable:",
fn: function (aScopeVariable) {
var self=this;
return (function($rec){smalltalk.send($rec, "_variable_", [aScopeVariable]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_variable", []));
return self;}
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_verbatim_",
smalltalk.method({
selector: "verbatim:",
fn: function (aString) {
var self=this;
return (function($rec){smalltalk.send($rec, "_source_", [aString]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_add_", [(smalltalk.IRVerbatim || IRVerbatim)]));
return self;}
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_with_",
smalltalk.method({
selector: "with:",
fn: function (anObject) {
var self=this;
smalltalk.send(smalltalk.send(self, "_root", []), "_with_", [anObject]);
return self;}
}),
smalltalk.IRBuilder);



smalltalk.addClass('IRInstruction', smalltalk.Object, ['builder', 'instructions'], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRInstruction_", [self]);
return self;}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_append_",
smalltalk.method({
selector: "append:",
fn: function (anObject) {
var self=this;
smalltalk.send(anObject, "_appendToInstruction_", [self]);
return anObject;
return self;}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_appendBlock_",
smalltalk.method({
selector: "appendBlock:",
fn: function (aBlock) {
var self=this;
var root=nil;
(root=smalltalk.send(smalltalk.send(self, "_builder", []), "_root", []));
smalltalk.send(smalltalk.send(self, "_builder", []), "_root_", [self]);
smalltalk.send(aBlock, "_value", []);
smalltalk.send(smalltalk.send(self, "_builder", []), "_root_", [root]);
return self;}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_appendInstruction_",
smalltalk.method({
selector: "appendInstruction:",
fn: function (anIRInstruction) {
var self=this;
smalltalk.send(smalltalk.send(self, "_instructions", []), "_add_", [anIRInstruction]);
return self;}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_appendString_",
smalltalk.method({
selector: "appendString:",
fn: function (aString) {
var self=this;
smalltalk.send(self, "_append_", [smalltalk.send(smalltalk.send(self, "_builder", []), "_value_", [aString])]);
return self;}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_appendToInstruction_",
smalltalk.method({
selector: "appendToInstruction:",
fn: function (anIRInstruction) {
var self=this;
smalltalk.send(anIRInstruction, "_appendInstruction_", [self]);
return self;}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_builder",
smalltalk.method({
selector: "builder",
fn: function () {
var self=this;
return self['@builder'];
return self;}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_builder_",
smalltalk.method({
selector: "builder:",
fn: function (aBuilder) {
var self=this;
(self['@builder']=aBuilder);
return self;}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_instructions",
smalltalk.method({
selector: "instructions",
fn: function () {
var self=this;
return (($receiver = self['@instructions']) == nil || $receiver == undefined) ? (function(){return (self['@instructions']=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection), "_new", []));})() : $receiver;
return self;}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isClosure",
smalltalk.method({
selector: "isClosure",
fn: function () {
var self=this;
return false;
return self;}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isReturn",
smalltalk.method({
selector: "isReturn",
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_with_",
smalltalk.method({
selector: "with:",
fn: function (anObject) {
var self=this;
smalltalk.send(anObject, "_appendToInstruction_", [self]);
return self;}
}),
smalltalk.IRInstruction);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aBuilder) {
var self=this;
return (function($rec){smalltalk.send($rec, "_builder_", [aBuilder]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.IRInstruction.klass);


smalltalk.addClass('IRAssignment', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRAssignment_", [self]);
return self;}
}),
smalltalk.IRAssignment);



smalltalk.addClass('IRAlias', smalltalk.IRAssignment, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRAlias_", [self]);
return self;}
}),
smalltalk.IRAlias);



smalltalk.addClass('IRClosure', smalltalk.IRInstruction, ['arguments'], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRClosure_", [self]);
return self;}
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
fn: function (){
var self=this;
return (($receiver = self['@arguments']) == nil || $receiver == undefined) ? (function(){return [];})() : $receiver;
return self;}
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
fn: function (aCollection) {
var self=this;
(self['@arguments']=aCollection);
return self;}
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_isClosure",
smalltalk.method({
selector: "isClosure",
fn: function () {
var self=this;
return true;
return self;}
}),
smalltalk.IRClosure);



smalltalk.addClass('IRMethod', smalltalk.IRInstruction, ['source', 'selector', 'classReferences', 'messageSends', 'arguments', 'internalVariables'], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRMethod_", [self]);
return self;}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
fn: function () {
var self=this;
return self['@arguments'];
return self;}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
fn: function (aCollection) {
var self=this;
(self['@arguments']=aCollection);
return self;}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_classReferences",
smalltalk.method({
selector: "classReferences",
fn: function () {
var self=this;
return self['@classReferences'];
return self;}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_classReferences_",
smalltalk.method({
selector: "classReferences:",
fn: function (aCollection) {
var self=this;
(self['@classReferences']=aCollection);
return self;}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_internalVariables",
smalltalk.method({
selector: "internalVariables",
fn: function () {
var self=this;
return (($receiver = self['@internalVariables']) == nil || $receiver == undefined) ? (function(){return (self['@internalVariables']=smalltalk.send((smalltalk.Set || Set), "_new", []));})() : $receiver;
return self;}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_messageSends",
smalltalk.method({
selector: "messageSends",
fn: function () {
var self=this;
return self['@messageSends'];
return self;}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_messageSends_",
smalltalk.method({
selector: "messageSends:",
fn: function (aCollection) {
var self=this;
(self['@messageSends']=aCollection);
return self;}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function () {
var self=this;
return self['@selector'];
return self;}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aString) {
var self=this;
(self['@selector']=aString);
return self;}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function () {
var self=this;
return self['@source'];
return self;}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString) {
var self=this;
(self['@source']=aString);
return self;}
}),
smalltalk.IRMethod);



smalltalk.addClass('IRNonLocalReturnHandling', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRNonLocalReturnHandling_", [self]);
return self;}
}),
smalltalk.IRNonLocalReturnHandling);



smalltalk.addClass('IRReturn', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRReturn_", [self]);
return self;}
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_isReturn",
smalltalk.method({
selector: "isReturn",
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.IRReturn);



smalltalk.addClass('IRNonLocalReturn', smalltalk.IRReturn, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRNonLocalReturn_", [self]);
return self;}
}),
smalltalk.IRNonLocalReturn);



smalltalk.addClass('IRSend', smalltalk.IRInstruction, ['selector', 'classSend'], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRSend_", [self]);
return self;}
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_classSend",
smalltalk.method({
selector: "classSend",
fn: function () {
var self=this;
return self['@classSend'];
return self;}
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_classSend_",
smalltalk.method({
selector: "classSend:",
fn: function (aClass) {
var self=this;
(self['@classSend']=aClass);
return self;}
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function () {
var self=this;
return self['@selector'];
return self;}
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aString) {
var self=this;
(self['@selector']=aString);
return self;}
}),
smalltalk.IRSend);



smalltalk.addClass('IRSequence', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRSequence_", [self]);
return self;}
}),
smalltalk.IRSequence);

smalltalk.addMethod(
"_appendInstruction_",
smalltalk.method({
selector: "appendInstruction:",
fn: function (anIRInstruction) {
var self=this;
smalltalk.send(smalltalk.send(self, "_instructions", []), "_add_", [smalltalk.send(smalltalk.send((smalltalk.IRStatement || IRStatement), "_on_", [smalltalk.send(self, "_builder", [])]), "_with_", [anIRInstruction])]);
return self;}
}),
smalltalk.IRSequence);



smalltalk.addClass('IRBlockSequence', smalltalk.IRSequence, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRBlockSequence_", [self]);
return self;}
}),
smalltalk.IRBlockSequence);



smalltalk.addClass('IRStatement', smalltalk.IRInstruction, ['pc'], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRStatement_", [self]);
return self;}
}),
smalltalk.IRStatement);

smalltalk.addMethod(
"_isReturn",
smalltalk.method({
selector: "isReturn",
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_instructions", []), "_first", []), "_isReturn", []);
return self;}
}),
smalltalk.IRStatement);

smalltalk.addMethod(
"_pc",
smalltalk.method({
selector: "pc",
fn: function () {
var self=this;
return (($receiver = self['@pc']) == nil || $receiver == undefined) ? (function(){return (self['@pc']=smalltalk.send(smalltalk.send(self, "_builder", []), "_nextPc", []));})() : $receiver;
return self;}
}),
smalltalk.IRStatement);



smalltalk.addClass('IRTempDeclaration', smalltalk.IRInstruction, ['name'], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRTempDeclaration_", [self]);
return self;}
}),
smalltalk.IRTempDeclaration);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
var self=this;
return self['@name'];
return self;}
}),
smalltalk.IRTempDeclaration);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
fn: function (aString) {
var self=this;
(self['@name']=aString);
return self;}
}),
smalltalk.IRTempDeclaration);



smalltalk.addClass('IRValue', smalltalk.IRInstruction, ['value'], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRValue_", [self]);
return self;}
}),
smalltalk.IRValue);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
fn: function () {
var self=this;
return self['@value'];
return self;}
}),
smalltalk.IRValue);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
fn: function (aString) {
var self=this;
(self['@value']=aString);
return self;}
}),
smalltalk.IRValue);



smalltalk.addClass('IRVariable', smalltalk.IRInstruction, ['variable'], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRVariable_", [self]);
return self;}
}),
smalltalk.IRVariable);

smalltalk.addMethod(
"_variable",
smalltalk.method({
selector: "variable",
fn: function () {
var self=this;
return self['@variable'];
return self;}
}),
smalltalk.IRVariable);

smalltalk.addMethod(
"_variable_",
smalltalk.method({
selector: "variable:",
fn: function (aScopeVariable) {
var self=this;
(self['@variable']=aScopeVariable);
return self;}
}),
smalltalk.IRVariable);



smalltalk.addClass('IRVerbatim', smalltalk.IRInstruction, ['source'], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRVerbatim_", [self]);
return self;}
}),
smalltalk.IRVerbatim);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function () {
var self=this;
return self['@source'];
return self;}
}),
smalltalk.IRVerbatim);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString) {
var self=this;
(self['@source']=aString);
return self;}
}),
smalltalk.IRVerbatim);



smalltalk.addClass('IRVisitor', smalltalk.Object, [], 'Compiler-IR');
smalltalk.addMethod(
"_visit_",
smalltalk.method({
selector: "visit:",
fn: function (anIRInstruction) {
var self=this;
smalltalk.send(anIRInstruction, "_accept_", [self]);
return self;}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRAlias_",
smalltalk.method({
selector: "visitIRAlias:",
fn: function (anIRAlias) {
var self=this;
smalltalk.send(self, "_visitIRAssignment_", [anIRAlias]);
return self;}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRAssignment_",
smalltalk.method({
selector: "visitIRAssignment:",
fn: function (anIRAssignment) {
var self=this;
smalltalk.send(self, "_visitIRInstruction_", [anIRAssignment]);
return self;}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRBlockSequence_",
smalltalk.method({
selector: "visitIRBlockSequence:",
fn: function (anIRBlockSequence) {
var self=this;
smalltalk.send(self, "_visitIRSequence_", [anIRBlockSequence]);
return self;}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRClosure_",
smalltalk.method({
selector: "visitIRClosure:",
fn: function (anIRClosure) {
var self=this;
smalltalk.send(self, "_visitIRInstruction_", [anIRClosure]);
return self;}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRInlinedClosure_",
smalltalk.method({
selector: "visitIRInlinedClosure:",
fn: function (anIRClosure){
var self=this;
smalltalk.send(self, "_visitIRClosure_", [anIRClosure]);
return self;}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRInlinedIfTrue_",
smalltalk.method({
selector: "visitIRInlinedIfTrue:",
fn: function (anIRInlinedIfTrue) {
var self=this;
smalltalk.send(self, "_visitIRInlinedSend_", [anIRInlinedIfTrue]);
return self;}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRInlinedSend_",
smalltalk.method({
selector: "visitIRInlinedSend:",
fn: function (anIRInlinedSend) {
var self=this;
smalltalk.send(self, "_visitIRSend_", [anIRInlinedSend]);
return self;}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRInstruction_",
smalltalk.method({
selector: "visitIRInstruction:",
fn: function (anIRInstruction) {
var self=this;
smalltalk.send(smalltalk.send(anIRInstruction, "_instructions", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_", [each]);})]);
return self;}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRMethod_",
smalltalk.method({
selector: "visitIRMethod:",
fn: function (anIRMethod) {
var self=this;
smalltalk.send(self, "_visitIRInstruction_", [anIRMethod]);
return self;}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRNonLocalReturn_",
smalltalk.method({
selector: "visitIRNonLocalReturn:",
fn: function (anIRNonLocalReturn) {
var self=this;
smalltalk.send(self, "_visitIRInstruction_", [anIRNonLocalReturn]);
return self;}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRNonLocalReturnHandling_",
smalltalk.method({
selector: "visitIRNonLocalReturnHandling:",
fn: function (anIRNonLocalReturnHandling) {
var self=this;
smalltalk.send(self, "_visitIRInstruction_", [anIRNonLocalReturnHandling]);
return self;}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRReturn_",
smalltalk.method({
selector: "visitIRReturn:",
fn: function (anIRReturn) {
var self=this;
smalltalk.send(self, "_visitIRInstruction_", [anIRReturn]);
return self;}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRSend_",
smalltalk.method({
selector: "visitIRSend:",
fn: function (anIRSend) {
var self=this;
smalltalk.send(self, "_visitIRInstruction_", [anIRSend]);
return self;}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRSequence_",
smalltalk.method({
selector: "visitIRSequence:",
fn: function (anIRSequence) {
var self=this;
smalltalk.send(self, "_visitIRInstruction_", [anIRSequence]);
return self;}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRStatement_",
smalltalk.method({
selector: "visitIRStatement:",
fn: function (anIRStatement) {
var self=this;
smalltalk.send(self, "_visitIRInstruction_", [anIRStatement]);
return self;}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRTempDeclaration_",
smalltalk.method({
selector: "visitIRTempDeclaration:",
fn: function (anIRTempDeclaration) {
var self=this;
smalltalk.send(self, "_visitIRInstruction_", [anIRTempDeclaration]);
return self;}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRValue_",
smalltalk.method({
selector: "visitIRValue:",
fn: function (anIRValue) {
var self=this;
smalltalk.send(self, "_visitIRInstruction_", [anIRValue]);
return self;}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRVariable_",
smalltalk.method({
selector: "visitIRVariable:",
fn: function (anIRVariable) {
var self=this;
smalltalk.send(self, "_visitIRInstruction_", [anIRVariable]);
return self;}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRVerbatim_",
smalltalk.method({
selector: "visitIRVerbatim:",
fn: function (anIRVerbatim) {
var self=this;
smalltalk.send(self, "_visitIRInstruction_", [anIRVerbatim]);
return self;}
}),
smalltalk.IRVisitor);



smalltalk.addClass('IRJSTranslator', smalltalk.IRVisitor, ['stream'], 'Compiler-IR');
smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_stream", []), "_contents", []);
return self;}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.IRJSTranslator.superclass || nil);
(self['@stream']=smalltalk.send((smalltalk.JSStream || JSStream), "_new", []));
return self;}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_stream",
smalltalk.method({
selector: "stream",
fn: function () {
var self=this;
return self['@stream'];
return self;}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_stream_",
smalltalk.method({
selector: "stream:",
fn: function (aStream) {
var self=this;
(self['@stream']=aStream);
return self;}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRAssignment_",
smalltalk.method({
selector: "visitIRAssignment:",
fn: function (anIRAssignment) {
var self=this;
smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRAssignment, "_instructions", []), "_first", [])]);
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAssignment", []);
smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRAssignment, "_instructions", []), "_last", [])]);
return self;}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRBlockSequence_",
smalltalk.method({
selector: "visitIRBlockSequence:",
fn: function (anIRBlockSequence){
var self=this;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutSequenceWith_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(anIRBlockSequence, "_instructions", []), "_notEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(smalltalk.send(smalltalk.send(anIRBlockSequence, "_instructions", []), "_allButLast", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_", [each]);})]);((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(anIRBlockSequence, "_instructions", []), "_last", []), "_isReturn", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutReturn", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutReturn", []);})]));return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRBlockSequence, "_instructions", []), "_last", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(smalltalk.send(smalltalk.send(anIRBlockSequence, "_instructions", []), "_allButLast", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_", [each]);})]);((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(anIRBlockSequence, "_instructions", []), "_last", []), "_isReturn", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutReturn", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutReturn", []);})]));return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRBlockSequence, "_instructions", []), "_last", [])]);})]));})]);
return self;}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRClosure_",
smalltalk.method({
selector: "visitIRClosure:",
fn: function (anIRClosure) {
var self=this;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutClosureWith_arguments_", [(function(){return smalltalk.send(self, "_visitIRClosure_", [anIRClosure], smalltalk.IRJSTranslator.superclass || nil);}), smalltalk.send(anIRClosure, "_arguments", [])]);
return self;}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRMethod_",
smalltalk.method({
selector: "visitIRMethod:",
fn: function (anIRMethod) {
var self=this;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutMethodDeclaration_with_", [anIRMethod, (function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutFunctionWith_arguments_", [(function(){((($receiver = smalltalk.send(smalltalk.send(anIRMethod, "_internalVariables", []), "_notEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutVars_", [smalltalk.send(anIRMethod, "_internalVariables", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutVars_", [smalltalk.send(anIRMethod, "_internalVariables", [])]);})]));return smalltalk.send(self, "_visitIRMethod_", [anIRMethod], smalltalk.IRJSTranslator.superclass || nil);}), smalltalk.send(anIRMethod, "_arguments", [])]);})]);
return self;}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRNonLocalReturn_",
smalltalk.method({
selector: "visitIRNonLocalReturn:",
fn: function (anIRNonLocalReturn) {
var self=this;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutNonLocalReturnWith_", [(function(){return smalltalk.send(self, "_visitIRNonLocalReturn_", [anIRNonLocalReturn], smalltalk.IRJSTranslator.superclass || nil);})]);
return self;}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRNonLocalReturnHandling_",
smalltalk.method({
selector: "visitIRNonLocalReturnHandling:",
fn: function (anIRNonLocalReturnHandling) {
var self=this;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutNonLocalReturnHandlingWith_", [(function(){return smalltalk.send(self, "_visitIRNonLocalReturnHandling_", [anIRNonLocalReturnHandling], smalltalk.IRJSTranslator.superclass || nil);})]);
return self;}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRReturn_",
smalltalk.method({
selector: "visitIRReturn:",
fn: function (anIRReturn) {
var self=this;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutReturnWith_", [(function(){return smalltalk.send(self, "_visitIRReturn_", [anIRReturn], smalltalk.IRJSTranslator.superclass || nil);})]);
return self;}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRSend_",
smalltalk.method({
selector: "visitIRSend:",
fn: function (anIRSend) {
var self=this;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", ["smalltalk.send("]);
smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRSend, "_instructions", []), "_first", [])]);
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", [smalltalk.send(smalltalk.send(",\x22", "__comma", [smalltalk.send(smalltalk.send(anIRSend, "_selector", []), "_asSelector", [])]), "__comma", ["\x22,["])]);
smalltalk.send(smalltalk.send(smalltalk.send(anIRSend, "_instructions", []), "_allButFirst", []), "_do_separatedBy_", [(function(each){return smalltalk.send(self, "_visit_", [each]);}), (function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", [","]);})]);
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", ["]"]);
(($receiver = smalltalk.send(anIRSend, "_classSend", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", [smalltalk.send(",", "__comma", [smalltalk.send(smalltalk.send(anIRSend, "_classSend", []), "_asJavascript", [])])]);})() : nil;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", [")"]);
return self;}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRSequence_",
smalltalk.method({
selector: "visitIRSequence:",
fn: function (anIRSequence) {
var self=this;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutSequenceWith_", [(function(){return smalltalk.send(self, "_visitIRSequence_", [anIRSequence], smalltalk.IRJSTranslator.superclass || nil);})]);
return self;}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRStatement_",
smalltalk.method({
selector: "visitIRStatement:",
fn: function (anIRStatement) {
var self=this;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutStatementWith_", [(function(){return smalltalk.send(self, "_visitIRStatement_", [anIRStatement], smalltalk.IRJSTranslator.superclass || nil);})]);
return self;}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRTempDeclaration_",
smalltalk.method({
selector: "visitIRTempDeclaration:",
fn: function (anIRTempDeclaration) {
var self=this;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutVar_", [smalltalk.send(smalltalk.send(anIRTempDeclaration, "_name", []), "_asVariableName", [])]);
return self;}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRValue_",
smalltalk.method({
selector: "visitIRValue:",
fn: function (anIRValue) {
var self=this;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", [smalltalk.send(smalltalk.send(anIRValue, "_value", []), "_asJavascript", [])]);
return self;}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRVariable_",
smalltalk.method({
selector: "visitIRVariable:",
fn: function (anIRVariable) {
var self=this;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", [smalltalk.send(smalltalk.send(anIRVariable, "_variable", []), "_alias", [])]);
return self;}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRVerbatim_",
smalltalk.method({
selector: "visitIRVerbatim:",
fn: function (anIRVerbatim) {
var self=this;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutStatementWith_", [(function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", [smalltalk.send(anIRVerbatim, "_source", [])]);})]);
return self;}
}),
smalltalk.IRJSTranslator);



smalltalk.addClass('JSStream', smalltalk.Object, ['stream'], 'Compiler-IR');
smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
fn: function () {
var self=this;
return smalltalk.send(self['@stream'], "_contents", []);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.JSStream.superclass || nil);
(self['@stream']=smalltalk.send("", "_writeStream", []));
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_lf",
smalltalk.method({
selector: "lf",
fn: function () {
var self=this;
smalltalk.send(self['@stream'], "_lf", []);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPut_",
smalltalk.method({
selector: "nextPut:",
fn: function (aString) {
var self=this;
smalltalk.send(self['@stream'], "_nextPut_", [aString]);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutAll_",
smalltalk.method({
selector: "nextPutAll:",
fn: function (aString) {
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", [aString]);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutAssignment",
smalltalk.method({
selector: "nextPutAssignment",
fn: function () {
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", ["="]);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutClosureWith_arguments_",
smalltalk.method({
selector: "nextPutClosureWith:arguments:",
fn: function (aBlock, anArray) {
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", ["(function("]);
smalltalk.send(anArray, "_do_separatedBy_", [(function(each){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(each, "_asVariableName", [])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPut_", [","]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", ["){"]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
smalltalk.send(aBlock, "_value", []);
smalltalk.send(self['@stream'], "_nextPutAll_", ["})"]);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutFunctionWith_arguments_",
smalltalk.method({
selector: "nextPutFunctionWith:arguments:",
fn: function (aBlock, anArray) {
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", ["fn: function("]);
smalltalk.send(anArray, "_do_separatedBy_", [(function(each){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(each, "_asVariableName", [])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPut_", [","]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", ["){"]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
(function($rec){smalltalk.send($rec, "_nextPutAll_", ["var self=this;"]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
smalltalk.send(aBlock, "_value", []);
smalltalk.send(self['@stream'], "_nextPutAll_", ["}"]);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutIf_with_",
smalltalk.method({
selector: "nextPutIf:with:",
fn: function (aBlock, anotherBlock){
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", ["if("]);
smalltalk.send(aBlock, "_value", []);
(function($rec){smalltalk.send($rec, "_nextPutAll_", ["){"]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
smalltalk.send(anotherBlock, "_value", []);
smalltalk.send(self['@stream'], "_nextPutAll_", ["}"]);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutMethodDeclaration_with_",
smalltalk.method({
selector: "nextPutMethodDeclaration:with:",
fn: function (aMethod, aBlock) {
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", ["smalltalk.method({"]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("selector: \x22", "__comma", [smalltalk.send(aMethod, "_selector", [])]), "__comma", ["\x22,"])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("source: ", "__comma", [smalltalk.send(smalltalk.send(aMethod, "_source", []), "_asJavascript", [])]), "__comma", [","])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
smalltalk.send(aBlock, "_value", []);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(",", "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])]), "__comma", ["messageSends: "])]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aMethod, "_messageSends", []), "_asArray", []), "_asJavascript", []), "__comma", [","])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("args: ", "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aMethod, "_arguments", []), "_collect_", [(function(each){return smalltalk.send(each, "_value", []);})]), "_asArray", []), "_asJavascript", [])]), "__comma", [","])]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", ["referencedClasses: ["]);})(self['@stream']);
smalltalk.send(smalltalk.send(aMethod, "_classReferences", []), "_do_separatedBy_", [(function(each){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(each, "_asJavascript", [])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [","]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", ["]"]);return smalltalk.send($rec, "_nextPutAll_", ["})"]);})(self['@stream']);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutNonLocalReturnHandlingWith_",
smalltalk.method({
selector: "nextPutNonLocalReturnHandlingWith:",
fn: function (aBlock) {
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", ["var $early={};"]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", ["try {"]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
smalltalk.send(aBlock, "_value", []);
(function($rec){smalltalk.send($rec, "_nextPutAll_", ["}"]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", ["catch(e) {if(e===$early)return e[0]; throw e}"]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutNonLocalReturnWith_",
smalltalk.method({
selector: "nextPutNonLocalReturnWith:",
fn: function (aBlock){
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", ["throw $early=["]);
smalltalk.send(aBlock, "_value", []);
smalltalk.send(self['@stream'], "_nextPutAll_", ["]"]);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutReturn",
smalltalk.method({
selector: "nextPutReturn",
fn: function () {
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutReturnWith_",
smalltalk.method({
selector: "nextPutReturnWith:",
fn: function (aBlock) {
var self=this;
smalltalk.send(self, "_nextPutReturn", []);
smalltalk.send(aBlock, "_value", []);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutSendTo_selector_arguments_",
smalltalk.method({
selector: "nextPutSendTo:selector:arguments:",
fn: function (receiver, selector, arguments) {
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", ["smalltalk.send("]);
smalltalk.send(receiver, "_emitOn_", [self]);
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(",\x22", "__comma", [smalltalk.send(selector, "_asSelector", [])]), "__comma", ["\x22,["])]);
smalltalk.send(arguments, "_do_separatedBy_", [(function(each){return smalltalk.send(each, "_emitOn_", [self]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [","]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", ["])"]);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutSequenceWith_",
smalltalk.method({
selector: "nextPutSequenceWith:",
fn: function (aBlock) {
var self=this;
smalltalk.send(aBlock, "_value", []);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutStatement_with_",
smalltalk.method({
selector: "nextPutStatement:with:",
fn: function (anInteger, aBlock) {
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("case ", "__comma", [smalltalk.send(anInteger, "_asString", [])]), "__comma", [":"])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
smalltalk.send(self, "_nextPutStatementWith_", [aBlock]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("smalltalk.thisContext.pc=", "__comma", [smalltalk.send(((($receiver = anInteger).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])), "_asString", [])]), "__comma", [";"])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutStatementWith_",
smalltalk.method({
selector: "nextPutStatementWith:",
fn: function (aBlock) {
var self=this;
smalltalk.send(aBlock, "_value", []);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [";"]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutVar_",
smalltalk.method({
selector: "nextPutVar:",
fn: function (aString) {
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("var ", "__comma", [aString]), "__comma", [";"])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutVars_",
smalltalk.method({
selector: "nextPutVars:",
fn: function (aCollection) {
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", ["var "]);
smalltalk.send(aCollection, "_do_separatedBy_", [(function(each){return smalltalk.send(self['@stream'], "_nextPutAll_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [","]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [";"]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
return self;}
}),
smalltalk.JSStream);



smalltalk.addMethod(
"_appendToInstruction_",
smalltalk.method({
selector: "appendToInstruction:",
fn: function (anIRInstruction) {
var self=this;
smalltalk.send(anIRInstruction, "_appendBlock_", [self]);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_appendToInstruction_",
smalltalk.method({
selector: "appendToInstruction:",
fn: function (anInstruction) {
var self=this;
smalltalk.send(anInstruction, "_appendString_", [self]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_asVariableName",
smalltalk.method({
selector: "asVariableName",
fn: function () {
var self=this;
return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_reservedWords", []), "_includes_", [self])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "__comma", ["_"]);})() : (function(){return self;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "__comma", ["_"]);}), (function(){return self;})]));
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_emitOn_",
smalltalk.method({
selector: "emitOn:",
fn: function (aStream) {
var self=this;
smalltalk.send(aStream, "_nextPutAll_", [self]);
return self;}
}),
smalltalk.String);

