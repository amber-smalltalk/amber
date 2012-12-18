smalltalk.addPackage('Compiler-AST', {});
smalltalk.addClass('Node', smalltalk.Object, ['position', 'nodes', 'shouldBeInlined', 'shouldBeAliased'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(aVisitor)._visitNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_addNode_",
smalltalk.method({
selector: "addNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx) { _st(_st(self)._nodes())._add_(aNode);
return self}, self, "addNode:", [aNode], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_isAssignmentNode",
smalltalk.method({
selector: "isAssignmentNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return false;
}, self, "isAssignmentNode", [], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_isBlockNode",
smalltalk.method({
selector: "isBlockNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return false;
}, self, "isBlockNode", [], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_isBlockSequenceNode",
smalltalk.method({
selector: "isBlockSequenceNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return false;
}, self, "isBlockSequenceNode", [], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_isReturnNode",
smalltalk.method({
selector: "isReturnNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return false;
}, self, "isReturnNode", [], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_isSendNode",
smalltalk.method({
selector: "isSendNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return false;
}, self, "isSendNode", [], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_isValueNode",
smalltalk.method({
selector: "isValueNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return false;
}, self, "isValueNode", [], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
if(($receiver = self["@nodes"]) == nil || $receiver == undefined){
self["@nodes"]=_st((smalltalk.Array || Array))._new();
$1=self["@nodes"];
} else {
$1=self["@nodes"];
};
return $1;
}, self, "nodes", [], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_nodes_",
smalltalk.method({
selector: "nodes:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx) { self["@nodes"]=aCollection;
return self}, self, "nodes:", [aCollection], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_position",
smalltalk.method({
selector: "position",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
if(($receiver = self["@position"]) == nil || $receiver == undefined){
self["@position"]=_st((0)).__at((0));
$1=self["@position"];
} else {
$1=self["@position"];
};
return $1;
}, self, "position", [], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_position_",
smalltalk.method({
selector: "position:",
fn: function (aPosition){
var self=this;
return smalltalk.withContext(function($ctx) { self["@position"]=aPosition;
return self}, self, "position:", [aPosition], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_shouldBeAliased",
smalltalk.method({
selector: "shouldBeAliased",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
if(($receiver = self["@shouldBeAliased"]) == nil || $receiver == undefined){
$1=false;
} else {
$1=self["@shouldBeAliased"];
};
return $1;
}, self, "shouldBeAliased", [], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_shouldBeAliased_",
smalltalk.method({
selector: "shouldBeAliased:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx) { self["@shouldBeAliased"]=aBoolean;
return self}, self, "shouldBeAliased:", [aBoolean], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_shouldBeInlined",
smalltalk.method({
selector: "shouldBeInlined",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
if(($receiver = self["@shouldBeInlined"]) == nil || $receiver == undefined){
$1=false;
} else {
$1=self["@shouldBeInlined"];
};
return $1;
}, self, "shouldBeInlined", [], smalltalk.Node)}
}),
smalltalk.Node);

smalltalk.addMethod(
"_shouldBeInlined_",
smalltalk.method({
selector: "shouldBeInlined:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx) { self["@shouldBeInlined"]=aBoolean;
return self}, self, "shouldBeInlined:", [aBoolean], smalltalk.Node)}
}),
smalltalk.Node);



smalltalk.addClass('AssignmentNode', smalltalk.Node, ['left', 'right'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(aVisitor)._visitAssignmentNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.AssignmentNode)}
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_isAssignmentNode",
smalltalk.method({
selector: "isAssignmentNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return true;
}, self, "isAssignmentNode", [], smalltalk.AssignmentNode)}
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_left",
smalltalk.method({
selector: "left",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@left"];
}, self, "left", [], smalltalk.AssignmentNode)}
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_left_",
smalltalk.method({
selector: "left:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx) { self["@left"]=aNode;
return self}, self, "left:", [aNode], smalltalk.AssignmentNode)}
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st((smalltalk.Array || Array))._with_with_(_st(self)._left(),_st(self)._right());
return $1;
}, self, "nodes", [], smalltalk.AssignmentNode)}
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_right",
smalltalk.method({
selector: "right",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@right"];
}, self, "right", [], smalltalk.AssignmentNode)}
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_right_",
smalltalk.method({
selector: "right:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx) { self["@right"]=aNode;
return self}, self, "right:", [aNode], smalltalk.AssignmentNode)}
}),
smalltalk.AssignmentNode);



smalltalk.addClass('BlockNode', smalltalk.Node, ['parameters', 'scope'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(aVisitor)._visitBlockNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.BlockNode)}
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_isBlockNode",
smalltalk.method({
selector: "isBlockNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return true;
}, self, "isBlockNode", [], smalltalk.BlockNode)}
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_parameters",
smalltalk.method({
selector: "parameters",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
if(($receiver = self["@parameters"]) == nil || $receiver == undefined){
self["@parameters"]=_st((smalltalk.Array || Array))._new();
$1=self["@parameters"];
} else {
$1=self["@parameters"];
};
return $1;
}, self, "parameters", [], smalltalk.BlockNode)}
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_parameters_",
smalltalk.method({
selector: "parameters:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx) { self["@parameters"]=aCollection;
return self}, self, "parameters:", [aCollection], smalltalk.BlockNode)}
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@scope"];
}, self, "scope", [], smalltalk.BlockNode)}
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
fn: function (aLexicalScope){
var self=this;
return smalltalk.withContext(function($ctx) { self["@scope"]=aLexicalScope;
return self}, self, "scope:", [aLexicalScope], smalltalk.BlockNode)}
}),
smalltalk.BlockNode);



smalltalk.addClass('CascadeNode', smalltalk.Node, ['receiver'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(aVisitor)._visitCascadeNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.CascadeNode)}
}),
smalltalk.CascadeNode);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@receiver"];
}, self, "receiver", [], smalltalk.CascadeNode)}
}),
smalltalk.CascadeNode);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx) { self["@receiver"]=aNode;
return self}, self, "receiver:", [aNode], smalltalk.CascadeNode)}
}),
smalltalk.CascadeNode);



smalltalk.addClass('DynamicArrayNode', smalltalk.Node, [], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(aVisitor)._visitDynamicArrayNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.DynamicArrayNode)}
}),
smalltalk.DynamicArrayNode);



smalltalk.addClass('DynamicDictionaryNode', smalltalk.Node, [], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(aVisitor)._visitDynamicDictionaryNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.DynamicDictionaryNode)}
}),
smalltalk.DynamicDictionaryNode);



smalltalk.addClass('JSStatementNode', smalltalk.Node, ['source'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(aVisitor)._visitJSStatementNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.JSStatementNode)}
}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
if(($receiver = self["@source"]) == nil || $receiver == undefined){
$1="";
} else {
$1=self["@source"];
};
return $1;
}, self, "source", [], smalltalk.JSStatementNode)}
}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx) { self["@source"]=aString;
return self}, self, "source:", [aString], smalltalk.JSStatementNode)}
}),
smalltalk.JSStatementNode);



smalltalk.addClass('MethodNode', smalltalk.Node, ['selector', 'arguments', 'source', 'scope', 'classReferences', 'messageSends', 'superSends'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(aVisitor)._visitMethodNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.MethodNode)}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
if(($receiver = self["@arguments"]) == nil || $receiver == undefined){
$1=[];
} else {
$1=self["@arguments"];
};
return $1;
}, self, "arguments", [], smalltalk.MethodNode)}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx) { self["@arguments"]=aCollection;
return self}, self, "arguments:", [aCollection], smalltalk.MethodNode)}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_classReferences",
smalltalk.method({
selector: "classReferences",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@classReferences"];
}, self, "classReferences", [], smalltalk.MethodNode)}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_classReferences_",
smalltalk.method({
selector: "classReferences:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx) { self["@classReferences"]=aCollection;
return self}, self, "classReferences:", [aCollection], smalltalk.MethodNode)}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_messageSends",
smalltalk.method({
selector: "messageSends",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@messageSends"];
}, self, "messageSends", [], smalltalk.MethodNode)}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_messageSends_",
smalltalk.method({
selector: "messageSends:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx) { self["@messageSends"]=aCollection;
return self}, self, "messageSends:", [aCollection], smalltalk.MethodNode)}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@scope"];
}, self, "scope", [], smalltalk.MethodNode)}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
fn: function (aMethodScope){
var self=this;
return smalltalk.withContext(function($ctx) { self["@scope"]=aMethodScope;
return self}, self, "scope:", [aMethodScope], smalltalk.MethodNode)}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@selector"];
}, self, "selector", [], smalltalk.MethodNode)}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx) { self["@selector"]=aString;
return self}, self, "selector:", [aString], smalltalk.MethodNode)}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@source"];
}, self, "source", [], smalltalk.MethodNode)}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx) { self["@source"]=aString;
return self}, self, "source:", [aString], smalltalk.MethodNode)}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_superSends",
smalltalk.method({
selector: "superSends",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@superSends"];
}, self, "superSends", [], smalltalk.MethodNode)}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_superSends_",
smalltalk.method({
selector: "superSends:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx) { self["@superSends"]=aCollection;
return self}, self, "superSends:", [aCollection], smalltalk.MethodNode)}
}),
smalltalk.MethodNode);



smalltalk.addClass('ReturnNode', smalltalk.Node, ['scope'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(aVisitor)._visitReturnNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.ReturnNode)}
}),
smalltalk.ReturnNode);

smalltalk.addMethod(
"_isReturnNode",
smalltalk.method({
selector: "isReturnNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return true;
}, self, "isReturnNode", [], smalltalk.ReturnNode)}
}),
smalltalk.ReturnNode);

smalltalk.addMethod(
"_nonLocalReturn",
smalltalk.method({
selector: "nonLocalReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(_st(self)._scope())._isMethodScope())._not();
return $1;
}, self, "nonLocalReturn", [], smalltalk.ReturnNode)}
}),
smalltalk.ReturnNode);

smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@scope"];
}, self, "scope", [], smalltalk.ReturnNode)}
}),
smalltalk.ReturnNode);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
fn: function (aLexicalScope){
var self=this;
return smalltalk.withContext(function($ctx) { self["@scope"]=aLexicalScope;
return self}, self, "scope:", [aLexicalScope], smalltalk.ReturnNode)}
}),
smalltalk.ReturnNode);



smalltalk.addClass('SendNode', smalltalk.Node, ['selector', 'arguments', 'receiver', 'superSend', 'index'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(aVisitor)._visitSendNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.SendNode)}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
if(($receiver = self["@arguments"]) == nil || $receiver == undefined){
self["@arguments"]=[];
$1=self["@arguments"];
} else {
$1=self["@arguments"];
};
return $1;
}, self, "arguments", [], smalltalk.SendNode)}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx) { self["@arguments"]=aCollection;
return self}, self, "arguments:", [aCollection], smalltalk.SendNode)}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_cascadeNodeWithMessages_",
smalltalk.method({
selector: "cascadeNodeWithMessages:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx) { var $1,$2,$4,$5,$3;
var first;
$1=_st((smalltalk.SendNode || SendNode))._new();
_st($1)._selector_(_st(self)._selector());
_st($1)._arguments_(_st(self)._arguments());
$2=_st($1)._yourself();
first=$2;
$4=_st((smalltalk.CascadeNode || CascadeNode))._new();
_st($4)._receiver_(_st(self)._receiver());
_st($4)._nodes_(_st(_st((smalltalk.Array || Array))._with_(first)).__comma(aCollection));
$5=_st($4)._yourself();
$3=$5;
return $3;
}, self, "cascadeNodeWithMessages:", [aCollection], smalltalk.SendNode)}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_index",
smalltalk.method({
selector: "index",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@index"];
}, self, "index", [], smalltalk.SendNode)}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_index_",
smalltalk.method({
selector: "index:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx) { self["@index"]=anInteger;
return self}, self, "index:", [anInteger], smalltalk.SendNode)}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_isSendNode",
smalltalk.method({
selector: "isSendNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return true;
}, self, "isSendNode", [], smalltalk.SendNode)}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $2,$3,$1;
$2=_st((smalltalk.Array || Array))._withAll_(_st(self)._arguments());
_st($2)._add_(_st(self)._receiver());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "nodes", [], smalltalk.SendNode)}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@receiver"];
}, self, "receiver", [], smalltalk.SendNode)}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx) { self["@receiver"]=aNode;
return self}, self, "receiver:", [aNode], smalltalk.SendNode)}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@selector"];
}, self, "selector", [], smalltalk.SendNode)}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx) { self["@selector"]=aString;
return self}, self, "selector:", [aString], smalltalk.SendNode)}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_superSend",
smalltalk.method({
selector: "superSend",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
if(($receiver = self["@superSend"]) == nil || $receiver == undefined){
$1=false;
} else {
$1=self["@superSend"];
};
return $1;
}, self, "superSend", [], smalltalk.SendNode)}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_superSend_",
smalltalk.method({
selector: "superSend:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx) { self["@superSend"]=aBoolean;
return self}, self, "superSend:", [aBoolean], smalltalk.SendNode)}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_valueForReceiver_",
smalltalk.method({
selector: "valueForReceiver:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx) { var $2,$4,$3,$5,$1;
$2=_st((smalltalk.SendNode || SendNode))._new();
$4=_st(self)._receiver();
if(($receiver = $4) == nil || $receiver == undefined){
$3=anObject;
} else {
$3=_st(_st(self)._receiver())._valueForReceiver_(anObject);
};
_st($2)._receiver_($3);
_st($2)._selector_(_st(self)._selector());
_st($2)._arguments_(_st(self)._arguments());
$5=_st($2)._yourself();
$1=$5;
return $1;
}, self, "valueForReceiver:", [anObject], smalltalk.SendNode)}
}),
smalltalk.SendNode);



smalltalk.addClass('SequenceNode', smalltalk.Node, ['temps', 'scope'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(aVisitor)._visitSequenceNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.SequenceNode)}
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_asBlockSequenceNode",
smalltalk.method({
selector: "asBlockSequenceNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $2,$3,$1;
$2=_st((smalltalk.BlockSequenceNode || BlockSequenceNode))._new();
_st($2)._nodes_(_st(self)._nodes());
_st($2)._temps_(_st(self)._temps());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "asBlockSequenceNode", [], smalltalk.SequenceNode)}
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@scope"];
}, self, "scope", [], smalltalk.SequenceNode)}
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
fn: function (aLexicalScope){
var self=this;
return smalltalk.withContext(function($ctx) { self["@scope"]=aLexicalScope;
return self}, self, "scope:", [aLexicalScope], smalltalk.SequenceNode)}
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_temps",
smalltalk.method({
selector: "temps",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
if(($receiver = self["@temps"]) == nil || $receiver == undefined){
$1=[];
} else {
$1=self["@temps"];
};
return $1;
}, self, "temps", [], smalltalk.SequenceNode)}
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_temps_",
smalltalk.method({
selector: "temps:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx) { self["@temps"]=aCollection;
return self}, self, "temps:", [aCollection], smalltalk.SequenceNode)}
}),
smalltalk.SequenceNode);



smalltalk.addClass('BlockSequenceNode', smalltalk.SequenceNode, [], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(aVisitor)._visitBlockSequenceNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.BlockSequenceNode)}
}),
smalltalk.BlockSequenceNode);

smalltalk.addMethod(
"_isBlockSequenceNode",
smalltalk.method({
selector: "isBlockSequenceNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return true;
}, self, "isBlockSequenceNode", [], smalltalk.BlockSequenceNode)}
}),
smalltalk.BlockSequenceNode);



smalltalk.addClass('ValueNode', smalltalk.Node, ['value'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(aVisitor)._visitValueNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.ValueNode)}
}),
smalltalk.ValueNode);

smalltalk.addMethod(
"_isValueNode",
smalltalk.method({
selector: "isValueNode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return true;
}, self, "isValueNode", [], smalltalk.ValueNode)}
}),
smalltalk.ValueNode);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@value"];
}, self, "value", [], smalltalk.ValueNode)}
}),
smalltalk.ValueNode);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx) { self["@value"]=anObject;
return self}, self, "value:", [anObject], smalltalk.ValueNode)}
}),
smalltalk.ValueNode);



smalltalk.addClass('VariableNode', smalltalk.ValueNode, ['assigned', 'binding'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(aVisitor)._visitVariableNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.VariableNode)}
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._binding())._alias();
return $1;
}, self, "alias", [], smalltalk.VariableNode)}
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_assigned",
smalltalk.method({
selector: "assigned",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
if(($receiver = self["@assigned"]) == nil || $receiver == undefined){
$1=false;
} else {
$1=self["@assigned"];
};
return $1;
}, self, "assigned", [], smalltalk.VariableNode)}
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_assigned_",
smalltalk.method({
selector: "assigned:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx) { self["@assigned"]=aBoolean;
return self}, self, "assigned:", [aBoolean], smalltalk.VariableNode)}
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_beAssigned",
smalltalk.method({
selector: "beAssigned",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(_st(self)._binding())._validateAssignment();
self["@assigned"]=true;
return self}, self, "beAssigned", [], smalltalk.VariableNode)}
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_binding",
smalltalk.method({
selector: "binding",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@binding"];
}, self, "binding", [], smalltalk.VariableNode)}
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_binding_",
smalltalk.method({
selector: "binding:",
fn: function (aScopeVar){
var self=this;
return smalltalk.withContext(function($ctx) { self["@binding"]=aScopeVar;
return self}, self, "binding:", [aScopeVar], smalltalk.VariableNode)}
}),
smalltalk.VariableNode);



smalltalk.addClass('ClassReferenceNode', smalltalk.VariableNode, [], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(aVisitor)._visitClassReferenceNode_(self);
return $1;
}, self, "accept:", [aVisitor], smalltalk.ClassReferenceNode)}
}),
smalltalk.ClassReferenceNode);



