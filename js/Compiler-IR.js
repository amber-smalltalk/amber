smalltalk.addPackage('Compiler-IR', {});
smalltalk.addClass('IRASTTranslator', smalltalk.NodeVisitor, ['builder', 'source'], 'Compiler-IR');
smalltalk.IRASTTranslator.comment="I am the AST (abstract syntax tree) visitor responsible for building the intermediate representation graph.\x0aI rely on a builder object, instance of IRBuilder.\x0a\x0aI am myself unable to produce a valid IR as nodes are not resolved. \x0aSee concrete subclasses."
smalltalk.addMethod(
"_builder",
smalltalk.method({
selector: "builder",
category: 'accessing',
fn: function () {
var self=this;
return (($receiver = self['@builder']) == nil || $receiver == undefined) ? (function(){return (self['@builder']=smalltalk.send((smalltalk.IRBuilder || IRBuilder), "_new", []));})() : $receiver;
return self;},
args: [],
source: "builder\x0a\x09^ builder ifNil: [ builder := IRBuilder new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["IRBuilder"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_builder_",
smalltalk.method({
selector: "builder:",
category: 'accessing',
fn: function (aBuilder) {
var self=this;
(self['@builder']=aBuilder);
return self;},
args: ["aBuilder"],
source: "builder: aBuilder\x0a\x09builder := aBuilder",
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
"_visitAssignmentNode_",
smalltalk.method({
selector: "visitAssignmentNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
(function($rec){smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_left", [])]);})]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_right", [])]);})]);})(smalltalk.send(smalltalk.send(self, "_builder", []), "_assignment", []));
return self;},
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a\x09self builder assignment \x0a\x09\x09with: [ self visit: aNode left ];\x0a\x09\x09with: [ self visit: aNode right ]",
messageSends: ["with:", "visit:", "left", "right", "assignment", "builder"],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
(function($rec){smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_visitBlockNode_", [aNode], smalltalk.IRASTTranslator.superclass || nil);})]);return smalltalk.send($rec, "_arguments_", [smalltalk.send(aNode, "_parameters", [])]);})(smalltalk.send(smalltalk.send(self, "_builder", []), "_closure", []));
return self;},
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09self builder closure \x0a\x09\x09with: [ super visitBlockNode: aNode ];\x0a\x09\x09arguments: aNode parameters",
messageSends: ["with:", "visitBlockNode:", "arguments:", "parameters", "closure", "builder"],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitJSStatementNode_",
smalltalk.method({
selector: "visitJSStatementNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
smalltalk.send(smalltalk.send(self, "_builder", []), "_verbatim_", [smalltalk.send(aNode, "_source", [])]);
return self;},
args: ["aNode"],
source: "visitJSStatementNode: aNode\x0a\x09self builder verbatim: aNode source",
messageSends: ["verbatim:", "builder", "source"],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitMethodNode_",
smalltalk.method({
selector: "visitMethodNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
(function($rec){smalltalk.send($rec, "_source_", [smalltalk.send(self, "_source", [])]);smalltalk.send($rec, "_arguments_", [smalltalk.send(aNode, "_arguments", [])]);smalltalk.send($rec, "_selector_", [smalltalk.send(aNode, "_selector", [])]);smalltalk.send($rec, "_messageSends_", [smalltalk.send(aNode, "_messageSends", [])]);return smalltalk.send($rec, "_classReferences_", [smalltalk.send(aNode, "_classReferences", [])]);})(smalltalk.send(smalltalk.send(self, "_builder", []), "_method", []));
smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_scope", []), "_temps", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_builder", []), "_tempDeclaration", []), "_name_", [smalltalk.send(each, "_name", [])]);})]);
((($receiver = smalltalk.send(aNode, "_hasNonLocalReturn", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_builder", []), "_nonLocalReturnHandling", []), "_with_", [(function(){return smalltalk.send(self, "_visitMethodNode_", [aNode], smalltalk.IRASTTranslator.superclass || nil);})]);})() : (function(){return smalltalk.send(self, "_visitMethodNode_", [aNode], smalltalk.IRASTTranslator.superclass || nil);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_builder", []), "_nonLocalReturnHandling", []), "_with_", [(function(){return smalltalk.send(self, "_visitMethodNode_", [aNode], smalltalk.IRASTTranslator.superclass || nil);})]);}), (function(){return smalltalk.send(self, "_visitMethodNode_", [aNode], smalltalk.IRASTTranslator.superclass || nil);})]));
return self;},
args: ["aNode"],
source: "visitMethodNode: aNode\x0a\x09self builder method \x0a\x09\x09source: self source;\x0a\x09\x09arguments: aNode arguments;\x0a\x09\x09selector: aNode selector;\x0a\x09\x09messageSends: aNode messageSends;\x0a\x09\x09classReferences: aNode classReferences.\x0a\x0a\x09aNode scope temps do: [ :each |\x0a\x09\x09self builder tempDeclaration name: each name ].\x0a\x09aNode hasNonLocalReturn \x0a\x09\x09ifTrue: [ self builder nonLocalReturnHandling with: [\x0a\x09\x09\x09super visitMethodNode: aNode ]]\x0a\x09\x09ifFalse: [ super visitMethodNode: aNode ]",
messageSends: ["source:", "source", "arguments:", "arguments", "selector:", "selector", "messageSends:", "messageSends", "classReferences:", "classReferences", "method", "builder", "do:", "temps", "scope", "name:", "tempDeclaration", "name", "ifTrue:ifFalse:", "hasNonLocalReturn", "with:", "nonLocalReturnHandling", "visitMethodNode:"],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
smalltalk.send(((($receiver = smalltalk.send(aNode, "_nonLocalReturn", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_builder", []), "_nonLocalReturn", []);})() : (function(){return smalltalk.send(smalltalk.send(self, "_builder", []), "_return", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_builder", []), "_nonLocalReturn", []);}), (function(){return smalltalk.send(smalltalk.send(self, "_builder", []), "_return", []);})])), "_with_", [(function(){return smalltalk.send(self, "_visitReturnNode_", [aNode], smalltalk.IRASTTranslator.superclass || nil);})]);
return self;},
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09(aNode nonLocalReturn \x0a\x09\x09ifTrue: [ self builder nonLocalReturn ]\x0a\x09\x09ifFalse: [ self builder return ]) with: [ super visitReturnNode: aNode ]",
messageSends: ["with:", "ifTrue:ifFalse:", "nonLocalReturn", "builder", "return", "visitReturnNode:"],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
(function($rec){smalltalk.send($rec, "_selector_", [smalltalk.send(aNode, "_selector", [])]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_receiver", [])]);return smalltalk.send(smalltalk.send(aNode, "_arguments", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_", [each]);})]);})]);})(smalltalk.send(smalltalk.send(self, "_builder", []), "_send", []));
return self;},
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09self builder send\x0a\x09\x09selector: aNode selector;\x0a\x09\x09with: [\x0a\x09\x09\x09self visit: aNode receiver.\x0a\x09\x09\x09(aNode arguments do: [ :each | self visit: each ]) ]",
messageSends: ["selector:", "selector", "with:", "visit:", "receiver", "do:", "arguments", "send", "builder"],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_builder", []), "_sequence", []), "_with_", [(function(){return smalltalk.send(self, "_visitSequenceNode_", [aNode], smalltalk.IRASTTranslator.superclass || nil);})]);
return self;},
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09self builder sequence with: [\x0a\x09\x09super visitSequenceNode: aNode ]",
messageSends: ["with:", "sequence", "builder", "visitSequenceNode:"],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitValueNode_",
smalltalk.method({
selector: "visitValueNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
smalltalk.send(smalltalk.send(self, "_builder", []), "_value_", [smalltalk.send(aNode, "_value", [])]);
return self;},
args: ["aNode"],
source: "visitValueNode: aNode\x0a\x09self builder value: aNode value",
messageSends: ["value:", "builder", "value"],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitVariableNode_",
smalltalk.method({
selector: "visitVariableNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
smalltalk.send(smalltalk.send(self, "_builder", []), "_variable_", [smalltalk.send(aNode, "_binding", [])]);
return self;},
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09self builder variable: aNode binding",
messageSends: ["variable:", "builder", "binding"],
referencedClasses: []
}),
smalltalk.IRASTTranslator);



smalltalk.addClass('IRASTResolver', smalltalk.IRASTTranslator, ['nextAlias'], 'Compiler-IR');
smalltalk.IRASTResolver.comment="I resolve nodes by creating an alias variable when appropriate, to flatten the AST.\x0aNodes referenced in other nodes are aliased, except for some specific nodes such as variable or value nodes."
smalltalk.addMethod(
"_nextAlias",
smalltalk.method({
selector: "nextAlias",
category: 'accessing',
fn: function () {
var self=this;
(($receiver = self['@nextAlias']) == nil || $receiver == undefined) ? (function(){return (self['@nextAlias']=(0));})() : $receiver;
(self['@nextAlias']=((($receiver = self['@nextAlias']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));
return smalltalk.send("$", "__comma", [smalltalk.send(self['@nextAlias'], "_asString", [])]);
return self;},
args: [],
source: "nextAlias\x0a\x09\x22Message sends are assigned, or 'aliased', to internal variables.\x0a\x09Internal variable names are unique, and attached to the annotated send node\x22\x0a\x0a\x09nextAlias ifNil: [ nextAlias := 0 ].\x0a\x09nextAlias := nextAlias + 1.\x0a\x09^ '$', nextAlias asString",
messageSends: ["ifNil:", "+", ",", "asString"],
referencedClasses: []
}),
smalltalk.IRASTResolver);

smalltalk.addMethod(
"_resolve_",
smalltalk.method({
selector: "resolve:",
category: 'visiting',
fn: function (aNode) {
var self=this;
((($receiver = smalltalk.send(aNode, "_isBlockSequenceNode", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){return smalltalk.send(self, "_resolve_", [each]);})]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){return smalltalk.send(self, "_resolve_", [each]);})]);})]));
((($receiver = smalltalk.send(aNode, "_shouldBeAliased", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var alias=nil;
(alias=smalltalk.send(self, "_nextAlias", []));smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_builder", []), "_method", []), "_internalVariables", []), "_add_", [alias]);(function($rec){smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(self, "_builder", []), "_variable_", [smalltalk.send(smalltalk.send((smalltalk.AliasVar || AliasVar), "_new", []), "_name_", [alias])]);})]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_visit_resolving_", [aNode, false]);})]);})(smalltalk.send(smalltalk.send(self, "_builder", []), "_assignment", []));return smalltalk.send(aNode, "_alias_", [alias]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var alias=nil;
(alias=smalltalk.send(self, "_nextAlias", []));smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_builder", []), "_method", []), "_internalVariables", []), "_add_", [alias]);(function($rec){smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(self, "_builder", []), "_variable_", [smalltalk.send(smalltalk.send((smalltalk.AliasVar || AliasVar), "_new", []), "_name_", [alias])]);})]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_visit_resolving_", [aNode, false]);})]);})(smalltalk.send(smalltalk.send(self, "_builder", []), "_assignment", []));return smalltalk.send(aNode, "_alias_", [alias]);})]));
return self;},
args: ["aNode"],
source: "resolve: aNode\x0a\x09aNode isBlockSequenceNode ifFalse: [\x0a\x09\x09aNode nodes do: [ :each | self resolve: each ]].\x0a\x09aNode shouldBeAliased ifTrue: [\x0a\x09\x09| alias |\x0a\x09\x09alias := self nextAlias.\x0a\x09\x09self builder method internalVariables add: alias.\x0a\x09\x09self builder assignment\x0a\x09\x09\x09with: [ self builder variable: (AliasVar new name: alias) ];\x0a\x09\x09\x09with: [ self visit: aNode resolving: false ].\x0a\x09\x09\x09aNode alias: alias ]",
messageSends: ["ifFalse:", "isBlockSequenceNode", "do:", "nodes", "resolve:", "ifTrue:", "shouldBeAliased", "nextAlias", "add:", "internalVariables", "method", "builder", "with:", "variable:", "name:", "new", "visit:resolving:", "assignment", "alias:"],
referencedClasses: ["AliasVar"]
}),
smalltalk.IRASTResolver);

smalltalk.addMethod(
"_visit_",
smalltalk.method({
selector: "visit:",
category: 'visiting',
fn: function (aNode) {
var self=this;
smalltalk.send(self, "_visit_resolving_", [aNode, smalltalk.send(aNode, "_canAliasChildren", [])]);
return self;},
args: ["aNode"],
source: "visit: aNode\x0a\x09self visit: aNode resolving: aNode canAliasChildren ",
messageSends: ["visit:resolving:", "canAliasChildren"],
referencedClasses: []
}),
smalltalk.IRASTResolver);

smalltalk.addMethod(
"_visit_resolving_",
smalltalk.method({
selector: "visit:resolving:",
category: 'visiting',
fn: function (aNode, aBoolean) {
var self=this;
((($receiver = aBoolean).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_resolve_", [aNode]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_resolve_", [aNode]);})]));
((($receiver = smalltalk.send(aNode, "_isAliased", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_visitAliased_", [aNode]);})() : (function(){return smalltalk.send(self, "_visit_", [aNode], smalltalk.IRASTResolver.superclass || nil);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_visitAliased_", [aNode]);}), (function(){return smalltalk.send(self, "_visit_", [aNode], smalltalk.IRASTResolver.superclass || nil);})]));
return self;},
args: ["aNode", "aBoolean"],
source: "visit: aNode resolving: aBoolean\x0a\x09aBoolean ifTrue: [ self resolve: aNode ].\x0a\x09aNode isAliased \x0a\x09\x09ifTrue: [ self visitAliased: aNode ]\x0a\x09\x09ifFalse: [ super visit: aNode ]",
messageSends: ["ifTrue:", "resolve:", "ifTrue:ifFalse:", "isAliased", "visitAliased:", "visit:"],
referencedClasses: []
}),
smalltalk.IRASTResolver);

smalltalk.addMethod(
"_visitAliased_",
smalltalk.method({
selector: "visitAliased:",
category: 'visiting',
fn: function (aNode) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_builder", []), "_variable_", [smalltalk.send(smalltalk.send((smalltalk.AliasVar || AliasVar), "_new", []), "_name_", [smalltalk.send(aNode, "_alias", [])])]);
return self;},
args: ["aNode"],
source: "visitAliased: aNode\x0a\x09^ self builder variable: (AliasVar new name: aNode alias)",
messageSends: ["variable:", "builder", "name:", "new", "alias"],
referencedClasses: ["AliasVar"]
}),
smalltalk.IRASTResolver);



smalltalk.addClass('IRBuilder', smalltalk.Object, ['method', 'root', 'nextPc'], 'Compiler-IR');
smalltalk.IRBuilder.comment="I am responsible for building the IR (Intermatiate Representation) graph, composed of IRInstruction objects."
smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
category: 'building',
fn: function (aClass) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_root", []), "_append_", [smalltalk.send(aClass, "_on_", [self])]);
return self;},
args: ["aClass"],
source: "add: aClass\x0a\x09^ self root append: (aClass on: self)",
messageSends: ["append:", "root", "on:"],
referencedClasses: []
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_append_",
smalltalk.method({
selector: "append:",
category: 'building',
fn: function (anObject) {
var self=this;
return smalltalk.send(self['@root'], "_append_", [anObject]);
return self;},
args: ["anObject"],
source: "append: anObject\x0a\x09^root append: anObject",
messageSends: ["append:"],
referencedClasses: []
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_assignment",
smalltalk.method({
selector: "assignment",
category: 'building',
fn: function () {
var self=this;
return smalltalk.send(self, "_add_", [(smalltalk.IRAssignment || IRAssignment)]);
return self;},
args: [],
source: "assignment\x0a\x09^ self add: IRAssignment",
messageSends: ["add:"],
referencedClasses: ["IRAssignment"]
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_closure",
smalltalk.method({
selector: "closure",
category: 'building',
fn: function () {
var self=this;
return smalltalk.send(self, "_add_", [(smalltalk.IRClosure || IRClosure)]);
return self;},
args: [],
source: "closure\x0a\x09^ self add: IRClosure",
messageSends: ["add:"],
referencedClasses: ["IRClosure"]
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_emitOn_",
smalltalk.method({
selector: "emitOn:",
category: 'emiting',
fn: function (aStream) {
var self=this;
smalltalk.send(self['@method'], "_emitOn_", [aStream]);
return self;},
args: ["aStream"],
source: "emitOn: aStream\x0a\x09method emitOn: aStream",
messageSends: ["emitOn:"],
referencedClasses: []
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.IRBuilder.superclass || nil);
(self['@root']=(self['@method']=smalltalk.send((smalltalk.IRMethod || IRMethod), "_on_", [self])));
return self;},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09root := method := IRMethod on: self",
messageSends: ["initialize", "on:"],
referencedClasses: ["IRMethod"]
}),
smalltalk.IRBuilder);

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
smalltalk.IRBuilder);

smalltalk.addMethod(
"_nextPc",
smalltalk.method({
selector: "nextPc",
category: 'accessing',
fn: function () {
var self=this;
(($receiver = self['@nextPc']) == nil || $receiver == undefined) ? (function(){return (self['@nextPc']=(0));})() : $receiver;
(self['@nextPc']=((($receiver = self['@nextPc']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));
return self['@nextPc'];
return self;},
args: [],
source: "nextPc\x0a\x09nextPc ifNil: [ nextPc := 0 ].\x0a\x09nextPc := nextPc + 1.\x0a\x09^ nextPc",
messageSends: ["ifNil:", "+"],
referencedClasses: []
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_nonLocalReturn",
smalltalk.method({
selector: "nonLocalReturn",
category: 'building',
fn: function () {
var self=this;
return smalltalk.send(self, "_add_", [(smalltalk.IRNonLocalReturn || IRNonLocalReturn)]);
return self;},
args: [],
source: "nonLocalReturn\x0a\x09^ self add: IRNonLocalReturn",
messageSends: ["add:"],
referencedClasses: ["IRNonLocalReturn"]
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_nonLocalReturnHandling",
smalltalk.method({
selector: "nonLocalReturnHandling",
category: 'building',
fn: function () {
var self=this;
return smalltalk.send(self, "_add_", [(smalltalk.IRNonLocalReturnHandling || IRNonLocalReturnHandling)]);
return self;},
args: [],
source: "nonLocalReturnHandling\x0a\x09^ self add: IRNonLocalReturnHandling",
messageSends: ["add:"],
referencedClasses: ["IRNonLocalReturnHandling"]
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_return",
smalltalk.method({
selector: "return",
category: 'building',
fn: function () {
var self=this;
return smalltalk.send(self, "_add_", [(smalltalk.IRReturn || IRReturn)]);
return self;},
args: [],
source: "return\x0a\x09^ self add: IRReturn",
messageSends: ["add:"],
referencedClasses: ["IRReturn"]
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_root",
smalltalk.method({
selector: "root",
category: 'accessing',
fn: function () {
var self=this;
return self['@root'];
return self;},
args: [],
source: "root\x0a\x09^ root",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_root_",
smalltalk.method({
selector: "root:",
category: 'accessing',
fn: function (anIRInstruction) {
var self=this;
(self['@root']=anIRInstruction);
return self;},
args: ["anIRInstruction"],
source: "root: anIRInstruction\x0a\x09root := anIRInstruction",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_send",
smalltalk.method({
selector: "send",
category: 'building',
fn: function () {
var self=this;
return smalltalk.send(self, "_add_", [(smalltalk.IRSend || IRSend)]);
return self;},
args: [],
source: "send\x0a\x09^ self add: IRSend",
messageSends: ["add:"],
referencedClasses: ["IRSend"]
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_sequence",
smalltalk.method({
selector: "sequence",
category: 'building',
fn: function () {
var self=this;
return smalltalk.send(self, "_add_", [(smalltalk.IRSequence || IRSequence)]);
return self;},
args: [],
source: "sequence\x0a\x09^ self add: IRSequence",
messageSends: ["add:"],
referencedClasses: ["IRSequence"]
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_statement",
smalltalk.method({
selector: "statement",
category: 'building',
fn: function () {
var self=this;
return smalltalk.send(self, "_add_", [(smalltalk.IRStatement || IRStatement)]);
return self;},
args: [],
source: "statement\x0a\x09^ self add: IRStatement",
messageSends: ["add:"],
referencedClasses: ["IRStatement"]
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_tempDeclaration",
smalltalk.method({
selector: "tempDeclaration",
category: 'building',
fn: function () {
var self=this;
return smalltalk.send(self, "_add_", [(smalltalk.IRTempDeclaration || IRTempDeclaration)]);
return self;},
args: [],
source: "tempDeclaration\x0a\x09^ self add: IRTempDeclaration",
messageSends: ["add:"],
referencedClasses: ["IRTempDeclaration"]
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
category: 'building',
fn: function () {
var self=this;
return smalltalk.send(self, "_add_", [(smalltalk.IRValue || IRValue)]);
return self;},
args: [],
source: "value\x0a\x09^ self add: IRValue",
messageSends: ["add:"],
referencedClasses: ["IRValue"]
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
category: 'building',
fn: function (aString) {
var self=this;
return (function($rec){smalltalk.send($rec, "_value_", [aString]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_value", []));
return self;},
args: ["aString"],
source: "value: aString\x0a\x09^ self value\x0a\x09\x09value: aString;\x0a\x09\x09yourself",
messageSends: ["value:", "yourself", "value"],
referencedClasses: []
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_variable",
smalltalk.method({
selector: "variable",
category: 'building',
fn: function () {
var self=this;
return smalltalk.send(self, "_add_", [(smalltalk.IRVariable || IRVariable)]);
return self;},
args: [],
source: "variable\x0a\x09^ self add: IRVariable",
messageSends: ["add:"],
referencedClasses: ["IRVariable"]
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_variable_",
smalltalk.method({
selector: "variable:",
category: 'building',
fn: function (aScopeVariable) {
var self=this;
return (function($rec){smalltalk.send($rec, "_variable_", [aScopeVariable]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_variable", []));
return self;},
args: ["aScopeVariable"],
source: "variable: aScopeVariable\x0a\x09^ self variable\x0a\x09\x09variable: aScopeVariable;\x0a\x09\x09yourself",
messageSends: ["variable:", "yourself", "variable"],
referencedClasses: []
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_verbatim_",
smalltalk.method({
selector: "verbatim:",
category: 'building',
fn: function (aString) {
var self=this;
return (function($rec){smalltalk.send($rec, "_source_", [aString]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_add_", [(smalltalk.IRVerbatim || IRVerbatim)]));
return self;},
args: ["aString"],
source: "verbatim: aString\x0a\x09^(self add: IRVerbatim)\x0a\x09\x09source: aString;\x0a\x09\x09yourself",
messageSends: ["source:", "yourself", "add:"],
referencedClasses: ["IRVerbatim"]
}),
smalltalk.IRBuilder);

smalltalk.addMethod(
"_with_",
smalltalk.method({
selector: "with:",
category: 'building',
fn: function (anObject) {
var self=this;
smalltalk.send(smalltalk.send(self, "_root", []), "_with_", [anObject]);
return self;},
args: ["anObject"],
source: "with: anObject\x0a\x09self root with: anObject",
messageSends: ["with:", "root"],
referencedClasses: []
}),
smalltalk.IRBuilder);



smalltalk.addClass('IRInstruction', smalltalk.Object, ['builder', 'instructions'], 'Compiler-IR');
smalltalk.IRInstruction.comment="I am the abstract root class of the IR (intermediate representation) instructions class hierarchy.\x0aThe IR graph is used to emit JavaScript code using a JSStream. "
smalltalk.addMethod(
"_append_",
smalltalk.method({
selector: "append:",
category: 'building',
fn: function (anObject) {
var self=this;
smalltalk.send(anObject, "_appendToInstruction_", [self]);
return anObject;
return self;},
args: ["anObject"],
source: "append: anObject\x0a\x09anObject appendToInstruction: self.\x0a\x09^ anObject",
messageSends: ["appendToInstruction:"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_appendBlock_",
smalltalk.method({
selector: "appendBlock:",
category: 'building',
fn: function (aBlock) {
var self=this;
var root=nil;
(root=smalltalk.send(smalltalk.send(self, "_builder", []), "_root", []));
smalltalk.send(smalltalk.send(self, "_builder", []), "_root_", [self]);
smalltalk.send(aBlock, "_value", []);
smalltalk.send(smalltalk.send(self, "_builder", []), "_root_", [root]);
return self;},
args: ["aBlock"],
source: "appendBlock: aBlock\x0a\x09| root |\x0a\x09root := self builder root.\x0a\x09self builder root: self.\x0a\x09aBlock value.\x0a\x09self builder root: root",
messageSends: ["root", "builder", "root:", "value"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_appendInstruction_",
smalltalk.method({
selector: "appendInstruction:",
category: 'building',
fn: function (anIRInstruction) {
var self=this;
smalltalk.send(smalltalk.send(self, "_instructions", []), "_add_", [anIRInstruction]);
return self;},
args: ["anIRInstruction"],
source: "appendInstruction: anIRInstruction\x0a\x09self instructions add: anIRInstruction",
messageSends: ["add:", "instructions"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_appendString_",
smalltalk.method({
selector: "appendString:",
category: 'building',
fn: function (aString) {
var self=this;
smalltalk.send(self, "_append_", [smalltalk.send(smalltalk.send(self, "_builder", []), "_value_", [aString])]);
return self;},
args: ["aString"],
source: "appendString: aString\x0a\x09self append: (self builder value: aString)",
messageSends: ["append:", "value:", "builder"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_appendToInstruction_",
smalltalk.method({
selector: "appendToInstruction:",
category: 'building',
fn: function (anIRInstruction) {
var self=this;
smalltalk.send(anIRInstruction, "_appendInstruction_", [self]);
return self;},
args: ["anIRInstruction"],
source: "appendToInstruction: anIRInstruction\x0a\x09anIRInstruction appendInstruction: self",
messageSends: ["appendInstruction:"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_builder",
smalltalk.method({
selector: "builder",
category: 'accessing',
fn: function () {
var self=this;
return self['@builder'];
return self;},
args: [],
source: "builder\x0a\x09^ builder",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_builder_",
smalltalk.method({
selector: "builder:",
category: 'accessing',
fn: function (aBuilder) {
var self=this;
(self['@builder']=aBuilder);
return self;},
args: ["aBuilder"],
source: "builder: aBuilder\x0a\x09builder := aBuilder",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_emitOn_",
smalltalk.method({
selector: "emitOn:",
category: 'emiting',
fn: function (aStream) {
var self=this;
smalltalk.send(smalltalk.send(self, "_instructions", []), "_do_", [(function(each){return smalltalk.send(each, "_emitOn_", [aStream]);})]);
return self;},
args: ["aStream"],
source: "emitOn: aStream\x0a\x09\x22Just emit all sub instructions to aStream.\x0a\x09Subclasses should not forget to call `super emitOn:`\x22\x0a\x0a\x09self instructions do: [ :each |\x0a\x09\x09each emitOn: aStream ]",
messageSends: ["do:", "instructions", "emitOn:"],
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
"_with_",
smalltalk.method({
selector: "with:",
category: 'building',
fn: function (anObject) {
var self=this;
smalltalk.send(anObject, "_appendToInstruction_", [self]);
return self;},
args: ["anObject"],
source: "with: anObject\x0a\x09anObject appendToInstruction: self",
messageSends: ["appendToInstruction:"],
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


smalltalk.addClass('IRAssignment', smalltalk.IRInstruction, ['left', 'right'], 'Compiler-IR');
smalltalk.addMethod(
"_emitOn_",
smalltalk.method({
selector: "emitOn:",
category: 'emiting',
fn: function (aStream) {
var self=this;
smalltalk.send(aStream, "_nextPutAssignment_to_", [smalltalk.send(smalltalk.send(self, "_instructions", []), "_first", []), smalltalk.send(smalltalk.send(self, "_instructions", []), "_last", [])]);
return self;},
args: ["aStream"],
source: "emitOn: aStream\x0a\x09aStream \x0a\x09\x09nextPutAssignment: self instructions first \x0a\x09\x09to: self instructions last",
messageSends: ["nextPutAssignment:to:", "first", "instructions", "last"],
referencedClasses: []
}),
smalltalk.IRAssignment);



smalltalk.addClass('IRClosure', smalltalk.IRInstruction, ['arguments'], 'Compiler-IR');
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
"_emitOn_",
smalltalk.method({
selector: "emitOn:",
category: 'emiting',
fn: function (aStream) {
var self=this;
smalltalk.send(aStream, "_nextPutClosureWith_arguments_", [(function(){return smalltalk.send(self, "_emitOn_", [aStream], smalltalk.IRClosure.superclass || nil);}), smalltalk.send(self, "_arguments", [])]);
return self;},
args: ["aStream"],
source: "emitOn: aStream\x0a\x09aStream \x0a\x09\x09nextPutClosureWith: [ super emitOn: aStream ] \x0a\x09\x09arguments: self arguments",
messageSends: ["nextPutClosureWith:arguments:", "emitOn:", "arguments"],
referencedClasses: []
}),
smalltalk.IRClosure);



smalltalk.addClass('IRMethod', smalltalk.IRInstruction, ['source', 'selector', 'classReferences', 'messageSends', 'arguments', 'internalVariables', 'source'], 'Compiler-IR');
smalltalk.IRMethod.comment="I am a method instruction"
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
"_emitOn_",
smalltalk.method({
selector: "emitOn:",
category: 'emiting',
fn: function (aStream) {
var self=this;
smalltalk.send(aStream, "_nextPutMethodDeclaration_with_", [self, (function(){return smalltalk.send(aStream, "_nextPutFunctionWith_arguments_", [(function(){((($receiver = smalltalk.send(smalltalk.send(self, "_internalVariables", []), "_notEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(aStream, "_nextPutVars_", [smalltalk.send(self, "_internalVariables", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(aStream, "_nextPutVars_", [smalltalk.send(self, "_internalVariables", [])]);})]));return smalltalk.send(self, "_emitOn_", [aStream], smalltalk.IRMethod.superclass || nil);}), smalltalk.send(self, "_arguments", [])]);})]);
return self;},
args: ["aStream"],
source: "emitOn: aStream\x0a\x09aStream\x0a\x09\x09nextPutMethodDeclaration: self \x0a\x09\x09with: [\x0a\x09\x09\x09aStream \x0a\x09\x09\x09\x09nextPutFunctionWith: [ \x0a\x09\x09\x09\x09\x09self internalVariables notEmpty ifTrue: [\x0a\x09\x09\x09\x09\x09\x09aStream nextPutVars: self internalVariables ].\x0a\x09\x09\x09\x09\x09super emitOn: aStream ]\x0a\x09\x09\x09arguments: self arguments ]",
messageSends: ["nextPutMethodDeclaration:with:", "nextPutFunctionWith:arguments:", "ifTrue:", "notEmpty", "internalVariables", "nextPutVars:", "emitOn:", "arguments"],
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



smalltalk.addClass('IRNonLocalReturn', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.IRNonLocalReturn.comment="I am a non local return instruction.\x0aNon local returns are handled using a try/catch JS statement.\x0a\x0aSee IRNonLocalReturnHandling class"
smalltalk.addMethod(
"_emitOn_",
smalltalk.method({
selector: "emitOn:",
category: 'emiting',
fn: function (aStream) {
var self=this;
smalltalk.send(aStream, "_nextPutNonLocalReturnWith_", [(function(){return smalltalk.send(self, "_emitOn_", [aStream], smalltalk.IRNonLocalReturn.superclass || nil);})]);
return self;},
args: ["aStream"],
source: "emitOn: aStream\x0a\x09aStream nextPutNonLocalReturnWith: [\x0a\x09\x09super emitOn: aStream ]",
messageSends: ["nextPutNonLocalReturnWith:", "emitOn:"],
referencedClasses: []
}),
smalltalk.IRNonLocalReturn);



smalltalk.addClass('IRNonLocalReturnHandling', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.IRNonLocalReturnHandling.comment="I represent a non local return handling instruction.\x0aNon local returns are handled with a try/catch statement"
smalltalk.addMethod(
"_emitOn_",
smalltalk.method({
selector: "emitOn:",
category: 'emiting',
fn: function (aStream) {
var self=this;
smalltalk.send(aStream, "_nextPutNonLocalReturnHandlingWith_", [(function(){return smalltalk.send(self, "_emitOn_", [aStream], smalltalk.IRNonLocalReturnHandling.superclass || nil);})]);
return self;},
args: ["aStream"],
source: "emitOn: aStream\x0a\x09aStream nextPutNonLocalReturnHandlingWith: [\x0a\x09\x09super emitOn: aStream ]",
messageSends: ["nextPutNonLocalReturnHandlingWith:", "emitOn:"],
referencedClasses: []
}),
smalltalk.IRNonLocalReturnHandling);



smalltalk.addClass('IRReturn', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.IRReturn.comment="I am a local return instruction."
smalltalk.addMethod(
"_emitOn_",
smalltalk.method({
selector: "emitOn:",
category: 'emiting',
fn: function (aStream) {
var self=this;
smalltalk.send(aStream, "_nextPutReturnWith_", [(function(){return smalltalk.send(self, "_emitOn_", [aStream], smalltalk.IRReturn.superclass || nil);})]);
return self;},
args: ["aStream"],
source: "emitOn: aStream\x0a\x09aStream nextPutReturnWith: [\x0a\x09\x09super emitOn: aStream ]",
messageSends: ["nextPutReturnWith:", "emitOn:"],
referencedClasses: []
}),
smalltalk.IRReturn);



smalltalk.addClass('IRSend', smalltalk.IRInstruction, ['selector', 'superSend'], 'Compiler-IR');
smalltalk.IRSend.comment="I am a message send instruction. "
smalltalk.addMethod(
"_emitOn_",
smalltalk.method({
selector: "emitOn:",
category: 'accessing',
fn: function (aStream) {
var self=this;
smalltalk.send(aStream, "_nextPutAll_", ["smalltalk.send("]);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_instructions", []), "_first", []), "_emitOn_", [aStream]);
smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(smalltalk.send(",\x22", "__comma", [smalltalk.send(smalltalk.send(self, "_selector", []), "_asSelector", [])]), "__comma", ["\x22, ["])]);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_instructions", []), "_allButFirst", []), "_do_separatedBy_", [(function(each){return smalltalk.send(each, "_emitOn_", [aStream]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [","]);})]);
smalltalk.send(aStream, "_nextPutAll_", ["])"]);
return self;},
args: ["aStream"],
source: "emitOn: aStream\x0a\x0a\x09aStream nextPutAll: 'smalltalk.send('.\x0a\x09self instructions first emitOn: aStream.\x0a\x09aStream nextPutAll:  ',\x22', self selector asSelector, '\x22, ['.\x0a\x09self instructions allButFirst\x0a\x09\x09do: [ :each | each emitOn: aStream ]\x0a\x09\x09separatedBy: [ aStream nextPutAll: ',' ].\x0a\x09aStream nextPutAll: '])'",
messageSends: ["nextPutAll:", "emitOn:", "first", "instructions", ",", "asSelector", "selector", "do:separatedBy:", "allButFirst"],
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

smalltalk.addMethod(
"_superSend",
smalltalk.method({
selector: "superSend",
category: 'accessing',
fn: function () {
var self=this;
return (($receiver = self['@superSend']) == nil || $receiver == undefined) ? (function(){return false;})() : $receiver;
return self;},
args: [],
source: "superSend\x0a\x09^ superSend ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_superSend_",
smalltalk.method({
selector: "superSend:",
category: 'accessing',
fn: function (aBoolean) {
var self=this;
(self['@superSend']=aBoolean);
return self;},
args: ["aBoolean"],
source: "superSend: aBoolean\x0a\x09superSend := aBoolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);



smalltalk.addClass('IRSequence', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
"_appendInstruction_",
smalltalk.method({
selector: "appendInstruction:",
category: 'emiting',
fn: function (anIRInstruction) {
var self=this;
smalltalk.send(smalltalk.send(self, "_instructions", []), "_add_", [smalltalk.send(smalltalk.send((smalltalk.IRStatement || IRStatement), "_on_", [smalltalk.send(self, "_builder", [])]), "_with_", [anIRInstruction])]);
return self;},
args: ["anIRInstruction"],
source: "appendInstruction: anIRInstruction\x0a\x09self instructions add: ((IRStatement on: self builder) with: anIRInstruction)",
messageSends: ["add:", "instructions", "with:", "on:", "builder"],
referencedClasses: ["IRStatement"]
}),
smalltalk.IRSequence);

smalltalk.addMethod(
"_emitOn_",
smalltalk.method({
selector: "emitOn:",
category: 'emiting',
fn: function (aStream) {
var self=this;
smalltalk.send(aStream, "_nextPutSequenceWith_", [(function(){return smalltalk.send(self, "_emitOn_", [aStream], smalltalk.IRSequence.superclass || nil);})]);
return self;},
args: ["aStream"],
source: "emitOn: aStream\x0a\x09aStream nextPutSequenceWith: [\x0a\x09\x09\x22self instructions do: [ :each |\x0a\x09\x09\x09((IRStatement on: self builder)\x0a\x09\x09\x09\x09pc: self builder nextPc;\x0a\x09\x09\x09\x09with: each;\x0a\x09\x09\x09\x09yourself) emitOn: aStream ]\x22\x0a\x09\x09super emitOn: aStream ]",
messageSends: ["nextPutSequenceWith:", "emitOn:"],
referencedClasses: []
}),
smalltalk.IRSequence);



smalltalk.addClass('IRStatement', smalltalk.IRInstruction, ['pc'], 'Compiler-IR');
smalltalk.IRStatement.comment="I am a statement instruction. \x0aStatements can be used to control the PC count, among other things."
smalltalk.addMethod(
"_emitOn_",
smalltalk.method({
selector: "emitOn:",
category: 'emiting',
fn: function (aStream) {
var self=this;
smalltalk.send(aStream, "_nextPutStatement_with_", [smalltalk.send(self, "_pc", []), (function(){return smalltalk.send(self, "_emitOn_", [aStream], smalltalk.IRStatement.superclass || nil);})]);
return self;},
args: ["aStream"],
source: "emitOn: aStream\x0a\x09aStream nextPutStatement: self pc with: [\x0a\x09\x09super emitOn: aStream ]",
messageSends: ["nextPutStatement:with:", "pc", "emitOn:"],
referencedClasses: []
}),
smalltalk.IRStatement);

smalltalk.addMethod(
"_pc",
smalltalk.method({
selector: "pc",
category: 'accessing',
fn: function () {
var self=this;
return (($receiver = self['@pc']) == nil || $receiver == undefined) ? (function(){return (self['@pc']=smalltalk.send(smalltalk.send(self, "_builder", []), "_nextPc", []));})() : $receiver;
return self;},
args: [],
source: "pc\x0a\x09^ pc ifNil: [pc := self builder nextPc]",
messageSends: ["ifNil:", "nextPc", "builder"],
referencedClasses: []
}),
smalltalk.IRStatement);



smalltalk.addClass('IRTempDeclaration', smalltalk.IRInstruction, ['name'], 'Compiler-IR');
smalltalk.IRTempDeclaration.comment="I am a temporary variable declaration instruction"
smalltalk.addMethod(
"_emitOn_",
smalltalk.method({
selector: "emitOn:",
category: 'emiting',
fn: function (aStream) {
var self=this;
smalltalk.send(aStream, "_nextPutVar_", [smalltalk.send(smalltalk.send(self, "_name", []), "_asVariableName", [])]);
return self;},
args: ["aStream"],
source: "emitOn: aStream\x0a\x09aStream nextPutVar: self name asVariableName",
messageSends: ["nextPutVar:", "asVariableName", "name"],
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
"_emitOn_",
smalltalk.method({
selector: "emitOn:",
category: 'emiting',
fn: function (aStream) {
var self=this;
smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(smalltalk.send(self, "_value", []), "_asJavascript", [])]);
return self;},
args: ["aStream"],
source: "emitOn: aStream\x0a\x09aStream nextPutAll: self value asJavascript",
messageSends: ["nextPutAll:", "asJavascript", "value"],
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
"_emitOn_",
smalltalk.method({
selector: "emitOn:",
category: 'emiting',
fn: function (aStream) {
var self=this;
smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(smalltalk.send(self, "_variable", []), "_alias", [])]);
return self;},
args: ["aStream"],
source: "emitOn: aStream\x0a\x09aStream nextPutAll: self variable alias",
messageSends: ["nextPutAll:", "alias", "variable"],
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
"_emitOn_",
smalltalk.method({
selector: "emitOn:",
category: 'emiting',
fn: function (aStream) {
var self=this;
smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(smalltalk.send(self, "_source", []), "__comma", [";"])]);
return self;},
args: ["aStream"],
source: "emitOn: aStream\x0a\x09aStream nextPutAll: self source, ';'",
messageSends: ["nextPutAll:", ",", "source"],
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
"_nextPutAssignment_to_",
smalltalk.method({
selector: "nextPutAssignment:to:",
category: 'streaming',
fn: function (varInstruction, valueInstruction) {
var self=this;
smalltalk.send(varInstruction, "_emitOn_", [self]);
smalltalk.send(self['@stream'], "_nextPutAll_", ["="]);
smalltalk.send(valueInstruction, "_emitOn_", [self]);
return self;},
args: ["varInstruction", "valueInstruction"],
source: "nextPutAssignment: varInstruction to: valueInstruction\x0a\x09varInstruction emitOn: self.\x0a\x09stream nextPutAll: '='.\x0a\x09valueInstruction emitOn: self",
messageSends: ["emitOn:", "nextPutAll:"],
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
smalltalk.send(self, "_nextPutVar_", ["$return"]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", ["var self=this;"]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
smalltalk.send(aBlock, "_value", []);
smalltalk.send(self['@stream'], "_nextPutAll_", ["return $return || self;}"]);
return self;},
args: ["aBlock", "anArray"],
source: "nextPutFunctionWith: aBlock arguments: anArray\x0a\x09stream nextPutAll: 'fn: function('.\x0a\x09anArray \x0a\x09\x09do: [ :each | stream nextPutAll: each asVariableName ]\x0a\x09\x09separatedBy: [ stream nextPut: ',' ].\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09self nextPutVar: '$return'.\x0a\x09stream nextPutAll: 'var self=this;'; lf.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: 'return $return || self;}'",
messageSends: ["nextPutAll:", "do:separatedBy:", "asVariableName", "nextPut:", "lf", "nextPutVar:", "value"],
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
smalltalk.send(self['@stream'], "_nextPutAll_", ["(function(){throw $early=["]);
smalltalk.send(aBlock, "_value", []);
smalltalk.send(self['@stream'], "_nextPutAll_", ["]})()"]);
return self;},
args: ["aBlock"],
source: "nextPutNonLocalReturnWith: aBlock\x0a\x09stream nextPutAll: '(function(){throw $early=['.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: ']})()'",
messageSends: ["nextPutAll:", "value"],
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
smalltalk.send(self['@stream'], "_nextPutAll_", ["$return="]);
smalltalk.send(aBlock, "_value", []);
return self;},
args: ["aBlock"],
source: "nextPutReturnWith: aBlock\x0a\x09stream nextPutAll: '$return='.\x0a\x09aBlock value",
messageSends: ["nextPutAll:", "value"],
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
smalltalk.send(aBlock, "_value", []);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [";"]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
return self;},
args: ["anInteger", "aBlock"],
source: "nextPutStatement: anInteger with: aBlock\x0a\x09\x22stream \x0a\x09\x09nextPutAll: 'case ', anInteger asString, ':'; lf.\x22\x0a\x09aBlock value.\x0a\x09stream \x0a\x09\x09nextPutAll: ';'; lf\x22;\x0a\x09\x09nextPutAll: 'smalltalk.thisContext.pc=', (anInteger + 1) asString, ';'; lf\x22",
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
smalltalk.send(anIRInstruction, "_appendBlock_", [self]);
return self;},
args: ["anIRInstruction"],
source: "appendToInstruction: anIRInstruction\x0a    anIRInstruction appendBlock: self",
messageSends: ["appendBlock:"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_appendToInstruction_",
smalltalk.method({
selector: "appendToInstruction:",
category: '*Compiler-IR',
fn: function (anInstruction) {
var self=this;
smalltalk.send(anInstruction, "_appendString_", [self]);
return self;},
args: ["anInstruction"],
source: "appendToInstruction: anInstruction\x0a\x09anInstruction appendString: self",
messageSends: ["appendString:"],
referencedClasses: []
}),
smalltalk.String);

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

smalltalk.addMethod(
"_emitOn_",
smalltalk.method({
selector: "emitOn:",
category: '*Compiler-IR',
fn: function (aStream) {
var self=this;
smalltalk.send(aStream, "_nextPutAll_", [self]);
return self;},
args: ["aStream"],
source: "emitOn: aStream\x0a\x09aStream nextPutAll: self",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.String);

