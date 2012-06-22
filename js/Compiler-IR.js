smalltalk.addPackage('Compiler-IR', {});
smalltalk.addClass('IRASTTranslator', smalltalk.NodeVisitor, ['builder', 'source', 'theClass'], 'Compiler-IR');
smalltalk.IRASTTranslator.comment="I am the AST (abstract syntax tree) visitor responsible for building the intermediate representation graph.\x0aI rely on a builder object, instance of IRBuilder."
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
(function($rec){smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_scope", []), "_temps", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_builder", []), "_tempDeclaration", []), "_name_", [smalltalk.send(each, "_name", [])]);})]);return smalltalk.send(self, "_visitBlockNode_", [aNode], smalltalk.IRASTTranslator.superclass || nil);})]);return smalltalk.send($rec, "_arguments_", [smalltalk.send(aNode, "_parameters", [])]);})(smalltalk.send(smalltalk.send(self, "_builder", []), "_closure", []));
return self;},
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09self builder closure \x0a\x09\x09with: [ \x0a\x09\x09\x09aNode scope temps do: [ :each |\x0a\x09\x09\x09\x09self builder tempDeclaration name: each name ].\x0a\x09\x09\x09super visitBlockNode: aNode ];\x0a\x09\x09arguments: aNode parameters",
messageSends: ["with:", "do:", "temps", "scope", "name:", "tempDeclaration", "builder", "name", "visitBlockNode:", "arguments:", "parameters", "closure"],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitBlockSequenceNode_",
smalltalk.method({
selector: "visitBlockSequenceNode:",
category: 'visiting',
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
return self;},
args: ["aNode"],
source: "visitBlockSequenceNode: aNode\x0a\x09self builder blockSequence with: [\x0a\x09\x09aNode nodes do: [ :each | self visit: each ]]",
messageSends: ["with:", "do:", "visit:", "nodes", "blockSequence", "builder"],
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
((($receiver = smalltalk.send(aNode, "_hasLocalReturn", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_builder", []), "_return", []), "_with_", [(function(){return smalltalk.send(smalltalk.send(self, "_builder", []), "_variable_", [smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_scope", []), "_pseudoVars", []), "_at_", ["self"])]);})]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_builder", []), "_return", []), "_with_", [(function(){return smalltalk.send(smalltalk.send(self, "_builder", []), "_variable_", [smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_scope", []), "_pseudoVars", []), "_at_", ["self"])]);})]);})]));
return self;},
args: ["aNode"],
source: "visitMethodNode: aNode\x0a\x09self builder method \x0a\x09\x09source: self source;\x0a\x09\x09arguments: aNode arguments;\x0a\x09\x09selector: aNode selector;\x0a\x09\x09messageSends: aNode messageSends;\x0a\x09\x09classReferences: aNode classReferences.\x0a\x0a\x09aNode scope temps do: [ :each |\x0a\x09\x09self builder tempDeclaration name: each name ].\x0a\x09aNode hasNonLocalReturn \x0a\x09\x09ifTrue: [ self builder nonLocalReturnHandling with: [\x0a\x09\x09\x09super visitMethodNode: aNode ]]\x0a\x09\x09ifFalse: [ super visitMethodNode: aNode ].\x0a\x0a\x09aNode hasLocalReturn ifFalse: [\x0a\x09\x09self builder return with: [\x0a\x09\x09\x09self builder variable: (aNode scope pseudoVars at: 'self') ]]",
messageSends: ["source:", "source", "arguments:", "arguments", "selector:", "selector", "messageSends:", "messageSends", "classReferences:", "classReferences", "method", "builder", "do:", "temps", "scope", "name:", "tempDeclaration", "name", "ifTrue:ifFalse:", "hasNonLocalReturn", "with:", "nonLocalReturnHandling", "visitMethodNode:", "ifFalse:", "hasLocalReturn", "return", "variable:", "at:", "pseudoVars"],
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
var send=nil;
(send=smalltalk.send(smalltalk.send(self, "_builder", []), "_send", []));
smalltalk.send(send, "_selector_", [smalltalk.send(aNode, "_selector", [])]);
((($receiver = smalltalk.send(aNode, "_superSend", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(send, "_classSend_", [smalltalk.send(smalltalk.send(self, "_theClass", []), "_superclass", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(send, "_classSend_", [smalltalk.send(smalltalk.send(self, "_theClass", []), "_superclass", [])]);})]));
smalltalk.send(send, "_with_", [(function(){smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_receiver", [])]);return smalltalk.send(smalltalk.send(aNode, "_arguments", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_", [each]);})]);})]);
return self;},
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09| send |\x0a\x09send := self builder send.\x0a\x09send selector: aNode selector.\x0a\x09aNode superSend ifTrue: [ send classSend: self theClass superclass ].\x0a\x09send with: [\x0a\x09\x09self visit: aNode receiver.\x0a\x09\x09(aNode arguments do: [ :each | self visit: each ]) ]",
messageSends: ["send", "builder", "selector:", "selector", "ifTrue:", "superSend", "classSend:", "superclass", "theClass", "with:", "visit:", "receiver", "do:", "arguments"],
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
(alias=smalltalk.send(self, "_nextAlias", []));smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_builder", []), "_method", []), "_internalVariables", []), "_add_", [alias]);(function($rec){smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(self, "_builder", []), "_variable_", [(function($rec){smalltalk.send($rec, "_name_", [alias]);smalltalk.send($rec, "_node_", [aNode]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.AliasVar || AliasVar), "_new", []))]);})]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_visit_resolving_", [aNode, false]);})]);})(smalltalk.send(smalltalk.send(self, "_builder", []), "_alias", []));return smalltalk.send(aNode, "_alias_", [alias]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var alias=nil;
(alias=smalltalk.send(self, "_nextAlias", []));smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_builder", []), "_method", []), "_internalVariables", []), "_add_", [alias]);(function($rec){smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(self, "_builder", []), "_variable_", [(function($rec){smalltalk.send($rec, "_name_", [alias]);smalltalk.send($rec, "_node_", [aNode]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.AliasVar || AliasVar), "_new", []))]);})]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_visit_resolving_", [aNode, false]);})]);})(smalltalk.send(smalltalk.send(self, "_builder", []), "_alias", []));return smalltalk.send(aNode, "_alias_", [alias]);})]));
return self;},
args: ["aNode"],
source: "resolve: aNode\x0a\x09aNode isBlockSequenceNode ifFalse: [\x0a\x09\x09aNode nodes do: [ :each | self resolve: each ]].\x0a\x09aNode shouldBeAliased ifTrue: [\x0a\x09\x09\x09| alias |\x0a\x09\x09\x09alias := self nextAlias.\x0a\x09\x09\x09self builder method internalVariables add: alias.\x0a\x09\x09\x09self builder alias\x0a\x09\x09\x09\x09with: [ self builder variable: (AliasVar new \x0a\x09\x09\x09\x09\x09name: alias;\x0a\x09\x09\x09\x09\x09node: aNode;\x0a\x09\x09\x09\x09\x09yourself) ];\x0a\x09\x09\x09\x09with: [ self visit: aNode resolving: false ].\x0a\x09\x09\x09\x09aNode alias: alias ]",
messageSends: ["ifFalse:", "isBlockSequenceNode", "do:", "nodes", "resolve:", "ifTrue:", "shouldBeAliased", "nextAlias", "add:", "internalVariables", "method", "builder", "with:", "variable:", "name:", "node:", "yourself", "new", "visit:resolving:", "alias", "alias:"],
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
return smalltalk.send(smalltalk.send(self, "_builder", []), "_variable_", [(function($rec){smalltalk.send($rec, "_name_", [smalltalk.send(aNode, "_alias", [])]);smalltalk.send($rec, "_node_", [aNode]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.AliasVar || AliasVar), "_new", []))]);
return self;},
args: ["aNode"],
source: "visitAliased: aNode\x0a\x09^ self builder variable: (AliasVar new \x0a\x09\x09name: aNode alias;\x0a\x09\x09node: aNode;\x0a\x09\x09yourself)",
messageSends: ["variable:", "builder", "name:", "alias", "node:", "yourself", "new"],
referencedClasses: ["AliasVar"]
}),
smalltalk.IRASTResolver);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_allButLast", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_resolving_", [each, false]);})]);
smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_last", [])]);
return self;},
args: ["aNode"],
source: "visitCascadeNode: aNode\x0a\x09\x22Special care must be taken for cascade nodes.\x0a\x09Only the last node should be aliased if any\x22\x0a\x0a\x09aNode nodes allButLast do: [ :each |\x0a\x09\x09self visit: each resolving: false ].\x0a\x09self visit: aNode nodes last ",
messageSends: ["do:", "allButLast", "nodes", "visit:resolving:", "visit:", "last"],
referencedClasses: []
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
"_alias",
smalltalk.method({
selector: "alias",
category: 'building',
fn: function () {
var self=this;
return smalltalk.send(self, "_add_", [(smalltalk.IRAlias || IRAlias)]);
return self;},
args: [],
source: "alias\x0a\x09^ self add: IRAlias",
messageSends: ["add:"],
referencedClasses: ["IRAlias"]
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
"_blockSequence",
smalltalk.method({
selector: "blockSequence",
category: 'building',
fn: function () {
var self=this;
return smalltalk.send(self, "_add_", [(smalltalk.IRBlockSequence || IRBlockSequence)]);
return self;},
args: [],
source: "blockSequence\x0a\x09^ self add: IRBlockSequence",
messageSends: ["add:"],
referencedClasses: ["IRBlockSequence"]
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
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRInstruction_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInstruction: self",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRInstruction);

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
"_isReturn",
smalltalk.method({
selector: "isReturn",
category: 'testing',
fn: function (){
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


smalltalk.addClass('IRAssignment', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRAssignment_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRAssignment: self",
messageSends: ["visitIRAssignment:"],
referencedClasses: []
}),
smalltalk.IRAssignment);



smalltalk.addClass('IRAlias', smalltalk.IRAssignment, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRAlias_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRAlias: self",
messageSends: ["visitIRAlias:"],
referencedClasses: []
}),
smalltalk.IRAlias);



smalltalk.addClass('IRClosure', smalltalk.IRInstruction, ['arguments'], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRClosure_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRClosure: self",
messageSends: ["visitIRClosure:"],
referencedClasses: []
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
category: 'accessing',
fn: function (){
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



smalltalk.addClass('IRMethod', smalltalk.IRInstruction, ['source', 'selector', 'classReferences', 'messageSends', 'arguments', 'internalVariables'], 'Compiler-IR');
smalltalk.IRMethod.comment="I am a method instruction"
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRMethod_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRMethod: self",
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



smalltalk.addClass('IRNonLocalReturnHandling', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.IRNonLocalReturnHandling.comment="I represent a non local return handling instruction.\x0aNon local returns are handled with a try/catch statement"
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRNonLocalReturnHandling_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRNonLocalReturnHandling: self",
messageSends: ["visitIRNonLocalReturnHandling:"],
referencedClasses: []
}),
smalltalk.IRNonLocalReturnHandling);



smalltalk.addClass('IRReturn', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.IRReturn.comment="I am a local return instruction."
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRReturn_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRReturn: self",
messageSends: ["visitIRReturn:"],
referencedClasses: []
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_isReturn",
smalltalk.method({
selector: "isReturn",
category: 'testing',
fn: function (){
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
smalltalk.send(aVisitor, "_visitIRNonLocalReturn_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRNonLocalReturn: self",
messageSends: ["visitIRNonLocalReturn:"],
referencedClasses: []
}),
smalltalk.IRNonLocalReturn);



smalltalk.addClass('IRSend', smalltalk.IRInstruction, ['selector', 'classSend'], 'Compiler-IR');
smalltalk.IRSend.comment="I am a message send instruction. "
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRSend_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRSend: self",
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
smalltalk.send(aVisitor, "_visitIRSequence_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRSequence: self",
messageSends: ["visitIRSequence:"],
referencedClasses: []
}),
smalltalk.IRSequence);

smalltalk.addMethod(
"_appendInstruction_",
smalltalk.method({
selector: "appendInstruction:",
category: 'adding',
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



smalltalk.addClass('IRBlockSequence', smalltalk.IRSequence, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRBlockSequence_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRBlockSequence: self",
messageSends: ["visitIRBlockSequence:"],
referencedClasses: []
}),
smalltalk.IRBlockSequence);



smalltalk.addClass('IRStatement', smalltalk.IRInstruction, ['pc'], 'Compiler-IR');
smalltalk.IRStatement.comment="I am a statement instruction. \x0aStatements can be used to control the PC count, among other things."
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRStatement_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRStatement: self",
messageSends: ["visitIRStatement:"],
referencedClasses: []
}),
smalltalk.IRStatement);

smalltalk.addMethod(
"_isReturn",
smalltalk.method({
selector: "isReturn",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_instructions", []), "_first", []), "_isReturn", []);
return self;},
args: [],
source: "isReturn\x0a\x09^ self instructions first isReturn",
messageSends: ["isReturn", "first", "instructions"],
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
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRTempDeclaration_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRTempDeclaration: self",
messageSends: ["visitIRTempDeclaration:"],
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
smalltalk.send(aVisitor, "_visitIRValue_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRValue: self",
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
smalltalk.send(aVisitor, "_visitIRVariable_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRVariable: self",
messageSends: ["visitIRVariable:"],
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
smalltalk.send(aVisitor, "_visitIRVerbatim_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRVerbatim: self",
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
smalltalk.send(anIRInstruction, "_accept_", [self]);
return self;},
args: ["anIRInstruction"],
source: "visit: anIRInstruction\x0a\x09anIRInstruction accept: self",
messageSends: ["accept:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRAlias_",
smalltalk.method({
selector: "visitIRAlias:",
category: 'visiting',
fn: function (anIRAlias) {
var self=this;
smalltalk.send(self, "_visitIRAssignment_", [anIRAlias]);
return self;},
args: ["anIRAlias"],
source: "visitIRAlias: anIRAlias\x0a\x09self visitIRAssignment: anIRAlias",
messageSends: ["visitIRAssignment:"],
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
smalltalk.send(self, "_visitIRInstruction_", [anIRAssignment]);
return self;},
args: ["anIRAssignment"],
source: "visitIRAssignment: anIRAssignment\x0a\x09self visitIRInstruction: anIRAssignment",
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
smalltalk.send(self, "_visitIRSequence_", [anIRBlockSequence]);
return self;},
args: ["anIRBlockSequence"],
source: "visitIRBlockSequence: anIRBlockSequence\x0a\x09self visitIRSequence: anIRBlockSequence",
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
smalltalk.send(self, "_visitIRInstruction_", [anIRClosure]);
return self;},
args: ["anIRClosure"],
source: "visitIRClosure: anIRClosure\x0a\x09self visitIRInstruction: anIRClosure",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRInlinedClosure_",
smalltalk.method({
selector: "visitIRInlinedClosure:",
category: 'visiting',
fn: function (anIRClosure){
var self=this;
smalltalk.send(self, "_visitIRClosure_", [anIRClosure]);
return self;},
args: ["anIRClosure"],
source: "visitIRInlinedClosure: anIRClosure\x0a\x09self visitIRClosure: anIRClosure",
messageSends: ["visitIRClosure:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRInlinedIfTrue_",
smalltalk.method({
selector: "visitIRInlinedIfTrue:",
category: 'visiting',
fn: function (anIRInlinedIfTrue) {
var self=this;
smalltalk.send(self, "_visitIRInlinedSend_", [anIRInlinedIfTrue]);
return self;},
args: ["anIRInlinedIfTrue"],
source: "visitIRInlinedIfTrue: anIRInlinedIfTrue\x0a\x09self visitIRInlinedSend: anIRInlinedIfTrue",
messageSends: ["visitIRInlinedSend:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRInlinedSend_",
smalltalk.method({
selector: "visitIRInlinedSend:",
category: 'visiting',
fn: function (anIRInlinedSend) {
var self=this;
smalltalk.send(self, "_visitIRSend_", [anIRInlinedSend]);
return self;},
args: ["anIRInlinedSend"],
source: "visitIRInlinedSend: anIRInlinedSend\x0a\x09self visitIRSend: anIRInlinedSend",
messageSends: ["visitIRSend:"],
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
return self;},
args: ["anIRInstruction"],
source: "visitIRInstruction: anIRInstruction\x0a\x09anIRInstruction instructions do: [ :each | self visit: each ]",
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
smalltalk.send(self, "_visitIRInstruction_", [anIRMethod]);
return self;},
args: ["anIRMethod"],
source: "visitIRMethod: anIRMethod\x0a\x09self visitIRInstruction: anIRMethod",
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
smalltalk.send(self, "_visitIRInstruction_", [anIRNonLocalReturn]);
return self;},
args: ["anIRNonLocalReturn"],
source: "visitIRNonLocalReturn: anIRNonLocalReturn\x0a\x09self visitIRInstruction: anIRNonLocalReturn",
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
smalltalk.send(self, "_visitIRInstruction_", [anIRNonLocalReturnHandling]);
return self;},
args: ["anIRNonLocalReturnHandling"],
source: "visitIRNonLocalReturnHandling: anIRNonLocalReturnHandling\x0a\x09self visitIRInstruction: anIRNonLocalReturnHandling",
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
smalltalk.send(self, "_visitIRInstruction_", [anIRReturn]);
return self;},
args: ["anIRReturn"],
source: "visitIRReturn: anIRReturn\x0a\x09self visitIRInstruction: anIRReturn",
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
smalltalk.send(self, "_visitIRInstruction_", [anIRSend]);
return self;},
args: ["anIRSend"],
source: "visitIRSend: anIRSend\x0a\x09self visitIRInstruction: anIRSend",
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
smalltalk.send(self, "_visitIRInstruction_", [anIRSequence]);
return self;},
args: ["anIRSequence"],
source: "visitIRSequence: anIRSequence\x0a\x09self visitIRInstruction: anIRSequence",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRStatement_",
smalltalk.method({
selector: "visitIRStatement:",
category: 'visiting',
fn: function (anIRStatement) {
var self=this;
smalltalk.send(self, "_visitIRInstruction_", [anIRStatement]);
return self;},
args: ["anIRStatement"],
source: "visitIRStatement: anIRStatement\x0a\x09self visitIRInstruction: anIRStatement",
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
smalltalk.send(self, "_visitIRInstruction_", [anIRTempDeclaration]);
return self;},
args: ["anIRTempDeclaration"],
source: "visitIRTempDeclaration: anIRTempDeclaration\x0a\x09self visitIRInstruction: anIRTempDeclaration",
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
smalltalk.send(self, "_visitIRInstruction_", [anIRValue]);
return self;},
args: ["anIRValue"],
source: "visitIRValue: anIRValue\x0a\x09self visitIRInstruction: anIRValue",
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
smalltalk.send(self, "_visitIRInstruction_", [anIRVariable]);
return self;},
args: ["anIRVariable"],
source: "visitIRVariable: anIRVariable\x0a\x09self visitIRInstruction: anIRVariable",
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
smalltalk.send(self, "_visitIRInstruction_", [anIRVerbatim]);
return self;},
args: ["anIRVerbatim"],
source: "visitIRVerbatim: anIRVerbatim\x0a\x09self visitIRInstruction: anIRVerbatim",
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
"_visitIRBlockSequence_",
smalltalk.method({
selector: "visitIRBlockSequence:",
category: 'visiting',
fn: function (anIRBlockSequence){
var self=this;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutSequenceWith_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(anIRBlockSequence, "_instructions", []), "_notEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(smalltalk.send(smalltalk.send(anIRBlockSequence, "_instructions", []), "_allButLast", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_", [each]);})]);((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(anIRBlockSequence, "_instructions", []), "_last", []), "_isReturn", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutReturn", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutReturn", []);})]));return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRBlockSequence, "_instructions", []), "_last", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(smalltalk.send(smalltalk.send(anIRBlockSequence, "_instructions", []), "_allButLast", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_", [each]);})]);((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(anIRBlockSequence, "_instructions", []), "_last", []), "_isReturn", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutReturn", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutReturn", []);})]));return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRBlockSequence, "_instructions", []), "_last", [])]);})]));})]);
return self;},
args: ["anIRBlockSequence"],
source: "visitIRBlockSequence: anIRBlockSequence\x0a\x09self stream nextPutSequenceWith: [\x0a\x09\x09anIRBlockSequence instructions notEmpty ifTrue: [\x0a\x09\x09\x09anIRBlockSequence instructions allButLast do: [ :each | \x0a\x09\x09\x09\x09self visit: each ].\x0a\x09\x09\x09anIRBlockSequence instructions last isReturn ifFalse: [\x0a\x09\x09\x09\x09self stream nextPutReturn ].\x0a\x09\x09\x09self visit: anIRBlockSequence instructions last ]]",
messageSends: ["nextPutSequenceWith:", "stream", "ifTrue:", "notEmpty", "instructions", "do:", "allButLast", "visit:", "ifFalse:", "isReturn", "last", "nextPutReturn"],
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
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutMethodDeclaration_with_", [anIRMethod, (function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutFunctionWith_arguments_", [(function(){((($receiver = smalltalk.send(smalltalk.send(anIRMethod, "_internalVariables", []), "_notEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutVars_", [smalltalk.send(anIRMethod, "_internalVariables", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutVars_", [smalltalk.send(anIRMethod, "_internalVariables", [])]);})]));return smalltalk.send(self, "_visitIRMethod_", [anIRMethod], smalltalk.IRJSTranslator.superclass || nil);}), smalltalk.send(anIRMethod, "_arguments", [])]);})]);
return self;},
args: ["anIRMethod"],
source: "visitIRMethod: anIRMethod\x0a\x09self stream\x0a\x09\x09nextPutMethodDeclaration: anIRMethod \x0a\x09\x09with: [ self stream \x0a\x09\x09\x09nextPutFunctionWith: [ \x0a\x09\x09\x09\x09anIRMethod internalVariables notEmpty ifTrue: [\x0a\x09\x09\x09\x09\x09self stream nextPutVars: anIRMethod internalVariables ].\x0a\x09\x09\x09\x09super visitIRMethod: anIRMethod ]\x0a\x09\x09\x09arguments: anIRMethod arguments ]",
messageSends: ["nextPutMethodDeclaration:with:", "stream", "nextPutFunctionWith:arguments:", "ifTrue:", "notEmpty", "internalVariables", "nextPutVars:", "visitIRMethod:", "arguments"],
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
"_visitIRNonLocalReturnHandling_",
smalltalk.method({
selector: "visitIRNonLocalReturnHandling:",
category: 'visiting',
fn: function (anIRNonLocalReturnHandling) {
var self=this;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutNonLocalReturnHandlingWith_", [(function(){return smalltalk.send(self, "_visitIRNonLocalReturnHandling_", [anIRNonLocalReturnHandling], smalltalk.IRJSTranslator.superclass || nil);})]);
return self;},
args: ["anIRNonLocalReturnHandling"],
source: "visitIRNonLocalReturnHandling: anIRNonLocalReturnHandling\x0a\x09self stream nextPutNonLocalReturnHandlingWith: [\x0a\x09\x09super visitIRNonLocalReturnHandling: anIRNonLocalReturnHandling ]",
messageSends: ["nextPutNonLocalReturnHandlingWith:", "stream", "visitIRNonLocalReturnHandling:"],
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
(($receiver = smalltalk.send(anIRSend, "_classSend", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", [smalltalk.send(",", "__comma", [smalltalk.send(smalltalk.send(anIRSend, "_classSend", []), "_asJavascript", [])])]);})() : nil;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", [")"]);
return self;},
args: ["anIRSend"],
source: "visitIRSend: anIRSend\x0a\x09self stream nextPutAll: 'smalltalk.send('.\x0a\x09self visit: anIRSend instructions first.\x0a\x09self stream nextPutAll:  ',\x22', anIRSend selector asSelector, '\x22,['.\x0a\x09anIRSend instructions allButFirst\x0a\x09\x09do: [ :each | self visit: each ]\x0a\x09\x09separatedBy: [ self stream nextPutAll: ',' ].\x0a\x09self stream nextPutAll: ']'.\x0a\x09anIRSend classSend ifNotNil: [  \x0a\x09\x09self stream nextPutAll: ',', anIRSend classSend asJavascript ].\x0a\x09self stream nextPutAll: ')'",
messageSends: ["nextPutAll:", "stream", "visit:", "first", "instructions", ",", "asSelector", "selector", "do:separatedBy:", "allButFirst", "ifNotNil:", "classSend", "asJavascript"],
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
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutSequenceWith_", [(function(){return smalltalk.send(self, "_visitIRSequence_", [anIRSequence], smalltalk.IRJSTranslator.superclass || nil);})]);
return self;},
args: ["anIRSequence"],
source: "visitIRSequence: anIRSequence\x0a\x09self stream nextPutSequenceWith: [\x0a\x09\x09\x22self instructions do: [ :each |\x0a\x09\x09\x09((IRStatement on: self builder)\x0a\x09\x09\x09\x09pc: self builder nextPc;\x0a\x09\x09\x09\x09with: each;\x0a\x09\x09\x09\x09yourself) emitOn: aStream ]\x22\x0a\x09\x09super visitIRSequence: anIRSequence ]",
messageSends: ["nextPutSequenceWith:", "stream", "visitIRSequence:"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRStatement_",
smalltalk.method({
selector: "visitIRStatement:",
category: 'visiting',
fn: function (anIRStatement) {
var self=this;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutStatementWith_", [(function(){return smalltalk.send(self, "_visitIRStatement_", [anIRStatement], smalltalk.IRJSTranslator.superclass || nil);})]);
return self;},
args: ["anIRStatement"],
source: "visitIRStatement: anIRStatement\x0a\x09self stream nextPutStatementWith: [\x0a\x09\x09super visitIRStatement: anIRStatement ] ",
messageSends: ["nextPutStatementWith:", "stream", "visitIRStatement:"],
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
fn: function (aBlock, anotherBlock){
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
fn: function (aBlock){
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

