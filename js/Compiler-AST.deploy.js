smalltalk.addPackage('Compiler-AST', {});
smalltalk.addClass('Node', smalltalk.Object, ['nodes', 'shouldBeInlined', 'shouldBeAliased'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitNode_",[self]);
return $1;
}
}),
smalltalk.Node);

smalltalk.addMethod(
"_addNode_",
smalltalk.method({
selector: "addNode:",
fn: function (aNode){
var self=this;
smalltalk.send(smalltalk.send(self,"_nodes",[]),"_add_",[aNode]);
return self}
}),
smalltalk.Node);

smalltalk.addMethod(
"_isAssignmentNode",
smalltalk.method({
selector: "isAssignmentNode",
fn: function (){
var self=this;
return false;
}
}),
smalltalk.Node);

smalltalk.addMethod(
"_isBlockNode",
smalltalk.method({
selector: "isBlockNode",
fn: function (){
var self=this;
return false;
}
}),
smalltalk.Node);

smalltalk.addMethod(
"_isBlockSequenceNode",
smalltalk.method({
selector: "isBlockSequenceNode",
fn: function (){
var self=this;
return false;
}
}),
smalltalk.Node);

smalltalk.addMethod(
"_isReturnNode",
smalltalk.method({
selector: "isReturnNode",
fn: function (){
var self=this;
return false;
}
}),
smalltalk.Node);

smalltalk.addMethod(
"_isSendNode",
smalltalk.method({
selector: "isSendNode",
fn: function (){
var self=this;
return false;
}
}),
smalltalk.Node);

smalltalk.addMethod(
"_isValueNode",
smalltalk.method({
selector: "isValueNode",
fn: function (){
var self=this;
return false;
}
}),
smalltalk.Node);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@nodes"]) == nil || $receiver == undefined){
self["@nodes"]=smalltalk.send((smalltalk.Array || Array),"_new",[]);
$1=self["@nodes"];
} else {
$1=self["@nodes"];
};
return $1;
}
}),
smalltalk.Node);

smalltalk.addMethod(
"_nodes_",
smalltalk.method({
selector: "nodes:",
fn: function (aCollection){
var self=this;
self["@nodes"]=aCollection;
return self}
}),
smalltalk.Node);

smalltalk.addMethod(
"_shouldBeAliased",
smalltalk.method({
selector: "shouldBeAliased",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@shouldBeAliased"]) == nil || $receiver == undefined){
$1=false;
} else {
$1=self["@shouldBeAliased"];
};
return $1;
}
}),
smalltalk.Node);

smalltalk.addMethod(
"_shouldBeAliased_",
smalltalk.method({
selector: "shouldBeAliased:",
fn: function (aBoolean){
var self=this;
self["@shouldBeAliased"]=aBoolean;
return self}
}),
smalltalk.Node);

smalltalk.addMethod(
"_shouldBeInlined",
smalltalk.method({
selector: "shouldBeInlined",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@shouldBeInlined"]) == nil || $receiver == undefined){
$1=false;
} else {
$1=self["@shouldBeInlined"];
};
return $1;
}
}),
smalltalk.Node);

smalltalk.addMethod(
"_shouldBeInlined_",
smalltalk.method({
selector: "shouldBeInlined:",
fn: function (aBoolean){
var self=this;
self["@shouldBeInlined"]=aBoolean;
return self}
}),
smalltalk.Node);



smalltalk.addClass('AssignmentNode', smalltalk.Node, ['left', 'right'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitAssignmentNode_",[self]);
return $1;
}
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_isAssignmentNode",
smalltalk.method({
selector: "isAssignmentNode",
fn: function (){
var self=this;
return true;
}
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_left",
smalltalk.method({
selector: "left",
fn: function (){
var self=this;
return self["@left"];
}
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_left_",
smalltalk.method({
selector: "left:",
fn: function (aNode){
var self=this;
self["@left"]=aNode;
return self}
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.Array || Array),"_with_with_",[smalltalk.send(self,"_left",[]),smalltalk.send(self,"_right",[])]);
return $1;
}
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_right",
smalltalk.method({
selector: "right",
fn: function (){
var self=this;
return self["@right"];
}
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_right_",
smalltalk.method({
selector: "right:",
fn: function (aNode){
var self=this;
self["@right"]=aNode;
return self}
}),
smalltalk.AssignmentNode);



smalltalk.addClass('BlockNode', smalltalk.Node, ['parameters', 'scope'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitBlockNode_",[self]);
return $1;
}
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_isBlockNode",
smalltalk.method({
selector: "isBlockNode",
fn: function (){
var self=this;
return true;
}
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_parameters",
smalltalk.method({
selector: "parameters",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@parameters"]) == nil || $receiver == undefined){
self["@parameters"]=smalltalk.send((smalltalk.Array || Array),"_new",[]);
$1=self["@parameters"];
} else {
$1=self["@parameters"];
};
return $1;
}
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_parameters_",
smalltalk.method({
selector: "parameters:",
fn: function (aCollection){
var self=this;
self["@parameters"]=aCollection;
return self}
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
fn: function (){
var self=this;
return self["@scope"];
}
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
fn: function (aLexicalScope){
var self=this;
self["@scope"]=aLexicalScope;
return self}
}),
smalltalk.BlockNode);



smalltalk.addClass('CascadeNode', smalltalk.Node, ['receiver'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitCascadeNode_",[self]);
return $1;
}
}),
smalltalk.CascadeNode);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
fn: function (){
var self=this;
return self["@receiver"];
}
}),
smalltalk.CascadeNode);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
fn: function (aNode){
var self=this;
self["@receiver"]=aNode;
return self}
}),
smalltalk.CascadeNode);



smalltalk.addClass('DynamicArrayNode', smalltalk.Node, [], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitDynamicArrayNode_",[self]);
return $1;
}
}),
smalltalk.DynamicArrayNode);



smalltalk.addClass('DynamicDictionaryNode', smalltalk.Node, [], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitDynamicDictionaryNode_",[self]);
return $1;
}
}),
smalltalk.DynamicDictionaryNode);



smalltalk.addClass('JSStatementNode', smalltalk.Node, ['source'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitJSStatementNode_",[self]);
return $1;
}
}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@source"]) == nil || $receiver == undefined){
$1="";
} else {
$1=self["@source"];
};
return $1;
}
}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString){
var self=this;
self["@source"]=aString;
return self}
}),
smalltalk.JSStatementNode);



smalltalk.addClass('MethodNode', smalltalk.Node, ['selector', 'arguments', 'source', 'scope', 'classReferences', 'messageSends'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitMethodNode_",[self]);
return $1;
}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@arguments"]) == nil || $receiver == undefined){
$1=[];
} else {
$1=self["@arguments"];
};
return $1;
}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
fn: function (aCollection){
var self=this;
self["@arguments"]=aCollection;
return self}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_classReferences",
smalltalk.method({
selector: "classReferences",
fn: function (){
var self=this;
return self["@classReferences"];
}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_classReferences_",
smalltalk.method({
selector: "classReferences:",
fn: function (aCollection){
var self=this;
self["@classReferences"]=aCollection;
return self}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_messageSends",
smalltalk.method({
selector: "messageSends",
fn: function (){
var self=this;
return self["@messageSends"];
}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_messageSends_",
smalltalk.method({
selector: "messageSends:",
fn: function (aCollection){
var self=this;
self["@messageSends"]=aCollection;
return self}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
fn: function (){
var self=this;
return self["@scope"];
}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
fn: function (aMethodScope){
var self=this;
self["@scope"]=aMethodScope;
return self}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return self["@selector"];
}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aString){
var self=this;
self["@selector"]=aString;
return self}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function (){
var self=this;
return self["@source"];
}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString){
var self=this;
self["@source"]=aString;
return self}
}),
smalltalk.MethodNode);



smalltalk.addClass('ReturnNode', smalltalk.Node, ['scope'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitReturnNode_",[self]);
return $1;
}
}),
smalltalk.ReturnNode);

smalltalk.addMethod(
"_isReturnNode",
smalltalk.method({
selector: "isReturnNode",
fn: function (){
var self=this;
return true;
}
}),
smalltalk.ReturnNode);

smalltalk.addMethod(
"_nonLocalReturn",
smalltalk.method({
selector: "nonLocalReturn",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_scope",[]),"_isMethodScope",[]),"_not",[]);
return $1;
}
}),
smalltalk.ReturnNode);

smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
fn: function (){
var self=this;
return self["@scope"];
}
}),
smalltalk.ReturnNode);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
fn: function (aLexicalScope){
var self=this;
self["@scope"]=aLexicalScope;
return self}
}),
smalltalk.ReturnNode);



smalltalk.addClass('SendNode', smalltalk.Node, ['selector', 'arguments', 'receiver', 'superSend', 'index'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitSendNode_",[self]);
return $1;
}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@arguments"]) == nil || $receiver == undefined){
self["@arguments"]=[];
$1=self["@arguments"];
} else {
$1=self["@arguments"];
};
return $1;
}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
fn: function (aCollection){
var self=this;
self["@arguments"]=aCollection;
return self}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_cascadeNodeWithMessages_",
smalltalk.method({
selector: "cascadeNodeWithMessages:",
fn: function (aCollection){
var self=this;
var $1,$2,$4,$5,$3;
var first;
$1=smalltalk.send((smalltalk.SendNode || SendNode),"_new",[]);
smalltalk.send($1,"_selector_",[smalltalk.send(self,"_selector",[])]);
smalltalk.send($1,"_arguments_",[smalltalk.send(self,"_arguments",[])]);
$2=smalltalk.send($1,"_yourself",[]);
first=$2;
$4=smalltalk.send((smalltalk.CascadeNode || CascadeNode),"_new",[]);
smalltalk.send($4,"_receiver_",[smalltalk.send(self,"_receiver",[])]);
smalltalk.send($4,"_nodes_",[smalltalk.send(smalltalk.send((smalltalk.Array || Array),"_with_",[first]),"__comma",[aCollection])]);
$5=smalltalk.send($4,"_yourself",[]);
$3=$5;
return $3;
}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_index",
smalltalk.method({
selector: "index",
fn: function (){
var self=this;
return self["@index"];
}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_index_",
smalltalk.method({
selector: "index:",
fn: function (anInteger){
var self=this;
self["@index"]=anInteger;
return self}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_isSendNode",
smalltalk.method({
selector: "isSendNode",
fn: function (){
var self=this;
return true;
}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.Array || Array),"_withAll_",[smalltalk.send(self,"_arguments",[])]);
smalltalk.send($2,"_add_",[smalltalk.send(self,"_receiver",[])]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
fn: function (){
var self=this;
return self["@receiver"];
}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
fn: function (aNode){
var self=this;
self["@receiver"]=aNode;
return self}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return self["@selector"];
}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aString){
var self=this;
self["@selector"]=aString;
return self}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_superSend",
smalltalk.method({
selector: "superSend",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@superSend"]) == nil || $receiver == undefined){
$1=false;
} else {
$1=self["@superSend"];
};
return $1;
}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_superSend_",
smalltalk.method({
selector: "superSend:",
fn: function (aBoolean){
var self=this;
self["@superSend"]=aBoolean;
return self}
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_valueForReceiver_",
smalltalk.method({
selector: "valueForReceiver:",
fn: function (anObject){
var self=this;
var $2,$4,$3,$5,$1;
$2=smalltalk.send((smalltalk.SendNode || SendNode),"_new",[]);
$4=smalltalk.send(self,"_receiver",[]);
if(($receiver = $4) == nil || $receiver == undefined){
$3=anObject;
} else {
$3=smalltalk.send(smalltalk.send(self,"_receiver",[]),"_valueForReceiver_",[anObject]);
};
smalltalk.send($2,"_receiver_",[$3]);
smalltalk.send($2,"_selector_",[smalltalk.send(self,"_selector",[])]);
smalltalk.send($2,"_arguments_",[smalltalk.send(self,"_arguments",[])]);
$5=smalltalk.send($2,"_yourself",[]);
$1=$5;
return $1;
}
}),
smalltalk.SendNode);



smalltalk.addClass('SequenceNode', smalltalk.Node, ['temps', 'scope'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitSequenceNode_",[self]);
return $1;
}
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_asBlockSequenceNode",
smalltalk.method({
selector: "asBlockSequenceNode",
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.BlockSequenceNode || BlockSequenceNode),"_new",[]);
smalltalk.send($2,"_nodes_",[smalltalk.send(self,"_nodes",[])]);
smalltalk.send($2,"_temps_",[smalltalk.send(self,"_temps",[])]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
fn: function (){
var self=this;
return self["@scope"];
}
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
fn: function (aLexicalScope){
var self=this;
self["@scope"]=aLexicalScope;
return self}
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_temps",
smalltalk.method({
selector: "temps",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@temps"]) == nil || $receiver == undefined){
$1=[];
} else {
$1=self["@temps"];
};
return $1;
}
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_temps_",
smalltalk.method({
selector: "temps:",
fn: function (aCollection){
var self=this;
self["@temps"]=aCollection;
return self}
}),
smalltalk.SequenceNode);



smalltalk.addClass('BlockSequenceNode', smalltalk.SequenceNode, [], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitBlockSequenceNode_",[self]);
return $1;
}
}),
smalltalk.BlockSequenceNode);

smalltalk.addMethod(
"_isBlockSequenceNode",
smalltalk.method({
selector: "isBlockSequenceNode",
fn: function (){
var self=this;
return true;
}
}),
smalltalk.BlockSequenceNode);



smalltalk.addClass('ValueNode', smalltalk.Node, ['value'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitValueNode_",[self]);
return $1;
}
}),
smalltalk.ValueNode);

smalltalk.addMethod(
"_isValueNode",
smalltalk.method({
selector: "isValueNode",
fn: function (){
var self=this;
return true;
}
}),
smalltalk.ValueNode);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
fn: function (){
var self=this;
return self["@value"];
}
}),
smalltalk.ValueNode);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
fn: function (anObject){
var self=this;
self["@value"]=anObject;
return self}
}),
smalltalk.ValueNode);



smalltalk.addClass('VariableNode', smalltalk.ValueNode, ['assigned', 'binding'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitVariableNode_",[self]);
return $1;
}
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_binding",[]),"_alias",[]);
return $1;
}
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_assigned",
smalltalk.method({
selector: "assigned",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@assigned"]) == nil || $receiver == undefined){
$1=false;
} else {
$1=self["@assigned"];
};
return $1;
}
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_assigned_",
smalltalk.method({
selector: "assigned:",
fn: function (aBoolean){
var self=this;
self["@assigned"]=aBoolean;
return self}
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_beAssigned",
smalltalk.method({
selector: "beAssigned",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_binding",[]),"_validateAssignment",[]);
self["@assigned"]=true;
return self}
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_binding",
smalltalk.method({
selector: "binding",
fn: function (){
var self=this;
return self["@binding"];
}
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_binding_",
smalltalk.method({
selector: "binding:",
fn: function (aScopeVar){
var self=this;
self["@binding"]=aScopeVar;
return self}
}),
smalltalk.VariableNode);



smalltalk.addClass('ClassReferenceNode', smalltalk.VariableNode, [], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitClassReferenceNode_",[self]);
return $1;
}
}),
smalltalk.ClassReferenceNode);



