smalltalk.addPackage('Compiler-Interpreter', {});
smalltalk.addClass('ASTBlockClosure', smalltalk.BlockClosure, ['astNode'], 'Compiler-Interpreter');
smalltalk.addMethod(
"_astNode",
smalltalk.method({
selector: "astNode",
fn: function (){
var self=this;
return self["@astNode"];
}
}),
smalltalk.ASTBlockClosure);

smalltalk.addMethod(
"_astNode_",
smalltalk.method({
selector: "astNode:",
fn: function (aNode){
var self=this;
self["@astNode"]=aNode;
return self}
}),
smalltalk.ASTBlockClosure);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send((smalltalk.ASTInterpreter || ASTInterpreter),"_current",[]),"_blockValue_",[self]);
return $1;
}
}),
smalltalk.ASTBlockClosure);



smalltalk.addClass('ASTInterpreter', smalltalk.NodeVisitor, ['currentNode', 'context', 'shouldReturn'], 'Compiler-Interpreter');
smalltalk.addMethod(
"_blockValue_",
smalltalk.method({
selector: "blockValue:",
fn: function (anASTBlockClosure){
var self=this;
var $1;
$1=smalltalk.send(self,"_interpret_",[smalltalk.send(smalltalk.send(smalltalk.send(anASTBlockClosure,"_astNode",[]),"_nodes",[]),"_first",[])]);
return $1;
}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_context",
smalltalk.method({
selector: "context",
fn: function (){
var self=this;
return self["@context"];
}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_context_",
smalltalk.method({
selector: "context:",
fn: function (aMethodContext){
var self=this;
self["@context"]=aMethodContext;
return self}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.NodeVisitor);
self["@shouldReturn"]=false;
return self}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpret_",
smalltalk.method({
selector: "interpret:",
fn: function (aNode){
var self=this;
var $1;
self["@shouldReturn"]=false;
$1=smalltalk.send(self,"_interpretNode_",[aNode]);
return $1;
}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretNode_",
smalltalk.method({
selector: "interpretNode:",
fn: function (aNode){
var self=this;
var $1;
self["@currentNode"]=aNode;
$1=smalltalk.send(self,"_visit_",[aNode]);
return $1;
}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_send_to_arguments_",
smalltalk.method({
selector: "send:to:arguments:",
fn: function (aSelector,anObject,aCollection){
var self=this;
var $1;
$1=smalltalk.send(anObject,"_perform_withArguments_",[aSelector,aCollection]);
return $1;
}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
fn: function (aNode){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.ASTBlockClosure || ASTBlockClosure),"_new",[]);
smalltalk.send($2,"_astNode_",[aNode]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
fn: function (aNode){
var self=this;
var $1;
self["@shouldReturn"]=true;
$1=smalltalk.send(self,"_interpret_",[smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_first",[])]);
return $1;
}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
fn: function (aNode){
var self=this;
var $1;
var receiver;
var arguments;
receiver=smalltalk.send(self,"_interpret_",[smalltalk.send(aNode,"_receiver",[])]);
arguments=smalltalk.send(smalltalk.send(aNode,"_arguments",[]),"_collect_",[(function(each){
return smalltalk.send(self,"_interpret_",[each]);
})]);
$1=smalltalk.send(self,"_send_to_arguments_",[smalltalk.send(aNode,"_selector",[]),receiver,arguments]);
return $1;
}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
fn: function (aNode){
var self=this;
var $1;
var $early={};
try {
smalltalk.send(smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_allButLast",[]),"_do_",[(function(each){
var value;
value=smalltalk.send(self,"_interpret_",[each]);
value;
if(smalltalk.assert(self["@shouldReturn"])){
throw $early=[value];
};
})]);
$1=smalltalk.send(self,"_interpret_",[smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_last",[])]);
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitValueNode_",
smalltalk.method({
selector: "visitValueNode:",
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(aNode,"_value",[]);
return $1;
}
}),
smalltalk.ASTInterpreter);


smalltalk.ASTInterpreter.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@current"]) == nil || $receiver == undefined){
self["@current"]=smalltalk.send(self,"_new",[],smalltalk.NodeVisitor.klass);
$1=self["@current"];
} else {
$1=self["@current"];
};
return $1;
}
}),
smalltalk.ASTInterpreter.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
smalltalk.send(self,"_shouldNotImplement",[]);
return self}
}),
smalltalk.ASTInterpreter.klass);


