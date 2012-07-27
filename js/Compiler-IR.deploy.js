smalltalk.addPackage('Compiler-IR', {});
smalltalk.addClass('IRASTTranslator', smalltalk.NodeVisitor, ['source', 'theClass', 'method', 'sequence', 'nextAlias'], 'Compiler-IR');
smalltalk.addMethod(
"_alias_",
smalltalk.method({
selector: "alias:",
fn: function (aNode) {
var self=this;
var $1,$2,$3,$4;
var variable;
$1=smalltalk.send((smalltalk.IRVariable || IRVariable),"_new",[]);
smalltalk.send($1,"_variable_",[smalltalk.send(smalltalk.send((smalltalk.AliasVar || AliasVar),"_new",[]),"_name_",[smalltalk.send("$","__comma",[smalltalk.send(self,"_nextAlias",[])])])]);
$2=smalltalk.send($1,"_yourself",[]);
variable=$2;
$3=smalltalk.send((smalltalk.IRAssignment || IRAssignment),"_new",[]);
smalltalk.send($3,"_add_",[variable]);
smalltalk.send($3,"_add_",[smalltalk.send(self,"_visit_",[aNode])]);
$4=smalltalk.send($3,"_yourself",[]);
smalltalk.send(smalltalk.send(self,"_sequence",[]),"_add_",[$4]);
smalltalk.send(smalltalk.send(smalltalk.send(self,"_method",[]),"_internalVariables",[]),"_add_",[variable]);
return variable;
}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_method",
smalltalk.method({
selector: "method",
fn: function () {
var self=this;
return self["@method"];
}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_method_",
smalltalk.method({
selector: "method:",
fn: function (anIRMethod) {
var self=this;
self["@method"]=anIRMethod;
return self;}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_nextAlias",
smalltalk.method({
selector: "nextAlias",
fn: function () {
var self=this;
smalltalk.send(self["@nextAlias"],"_ifNil_",[(function(){
self["@nextAlias"]=(0);
return self["@nextAlias"];
})]);
self["@nextAlias"]=smalltalk.send(self["@nextAlias"],"__plus",[(1)]);
return smalltalk.send(self["@nextAlias"],"_asString",[]);
}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_sequence",
smalltalk.method({
selector: "sequence",
fn: function () {
var self=this;
return self["@sequence"];
}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_sequence_",
smalltalk.method({
selector: "sequence:",
fn: function (anIRSequence) {
var self=this;
self["@sequence"]=anIRSequence;
return self;}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function () {
var self=this;
return self["@source"];
}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString) {
var self=this;
self["@source"]=aString;
return self;}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
fn: function () {
var self=this;
return self["@theClass"];
}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
fn: function (aClass) {
var self=this;
self["@theClass"]=aClass;
return self;}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitAssignmentNode_",
smalltalk.method({
selector: "visitAssignmentNode:",
fn: function (aNode) {
var self=this;
var $1,$2;
var left;
var right;
var assignment;
right=smalltalk.send(self,"_visit_",[smalltalk.send(aNode,"_right",[])]);
left=smalltalk.send(self,"_visit_",[smalltalk.send(aNode,"_left",[])]);
$1=smalltalk.send((smalltalk.IRAssignment || IRAssignment),"_new",[]);
smalltalk.send($1,"_add_",[left]);
smalltalk.send($1,"_add_",[right]);
$2=smalltalk.send($1,"_yourself",[]);
smalltalk.send(smalltalk.send(self,"_sequence",[]),"_add_",[$2]);
return left;
}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
fn: function (aNode) {
var self=this;
var $1,$2,$3,$4;
var closure;
$1=smalltalk.send((smalltalk.IRClosure || IRClosure),"_new",[]);
smalltalk.send($1,"_arguments_",[smalltalk.send(aNode,"_parameters",[])]);
smalltalk.send($1,"_scope_",[smalltalk.send(aNode,"_scope",[])]);
$2=smalltalk.send($1,"_yourself",[]);
closure=$2;
smalltalk.send(smalltalk.send(smalltalk.send(aNode,"_scope",[]),"_temps",[]),"_do_",[(function(each){
$3=smalltalk.send((smalltalk.IRTempDeclaration || IRTempDeclaration),"_new",[]);
smalltalk.send($3,"_name_",[smalltalk.send(each,"_name",[])]);
$4=smalltalk.send($3,"_yourself",[]);
return smalltalk.send(closure,"_add_",[$4]);
})]);
smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_do_",[(function(each){
return smalltalk.send(closure,"_add_",[smalltalk.send(self,"_visit_",[each])]);
})]);
return closure;
}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitBlockSequenceNode_",
smalltalk.method({
selector: "visitBlockSequenceNode:",
fn: function (aNode) {
var self=this;
var $1,$2;
return smalltalk.send(self,"_withSequence_do_",[smalltalk.send((smalltalk.IRBlockSequence || IRBlockSequence),"_new",[]),(function(){
return smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_ifNotEmpty_",[(function(){
smalltalk.send(smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_allButLast",[]),"_do_",[(function(each){
return smalltalk.send(smalltalk.send(self,"_sequence",[]),"_add_",[smalltalk.send(self,"_visit_",[each])]);
})]);
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_last",[]),"_isReturnNode",[]),"_ifFalse_ifTrue_",[(function(){
$1=smalltalk.send((smalltalk.IRReturn || IRReturn),"_new",[]);
smalltalk.send($1,"_add_",[smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_last",[])])]);
$2=smalltalk.send($1,"_yourself",[]);
return smalltalk.send(smalltalk.send(self,"_sequence",[]),"_add_",[$2]);
}),(function(){
return smalltalk.send(smalltalk.send(self,"_sequence",[]),"_add_",[smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_last",[])])]);
})]);
})]);
})]);
}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
fn: function (aNode) {
var self=this;
var alias;
if(! smalltalk.assert(smalltalk.send(smalltalk.send(aNode,"_receiver",[]),"_isValueNode",[]))){
alias=smalltalk.send(self,"_alias_",[smalltalk.send(aNode,"_receiver",[])]);
alias;
smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_do_",[(function(each){
return smalltalk.send(each,"_receiver_",[smalltalk.send(smalltalk.send((smalltalk.VariableNode || VariableNode),"_new",[]),"_binding_",[smalltalk.send(alias,"_variable",[])])]);
})]);
};
smalltalk.send(smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_allButLast",[]),"_do_",[(function(each){
return smalltalk.send(smalltalk.send(self,"_sequence",[]),"_add_",[smalltalk.send(self,"_visit_",[each])]);
})]);
return smalltalk.send(self,"_alias_",[smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_last",[])]);
}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitDynamicArrayNode_",
smalltalk.method({
selector: "visitDynamicArrayNode:",
fn: function (aNode) {
var self=this;
var array;
array=smalltalk.send((smalltalk.IRDynamicArray || IRDynamicArray),"_new",[]);
smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_do_",[(function(each){
return smalltalk.send(array,"_add_",[smalltalk.send(self,"_visit_",[each])]);
})]);
return array;
}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitDynamicDictionaryNode_",
smalltalk.method({
selector: "visitDynamicDictionaryNode:",
fn: function (aNode) {
var self=this;
var dictionary;
dictionary=smalltalk.send((smalltalk.IRDynamicDictionary || IRDynamicDictionary),"_new",[]);
smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_do_",[(function(each){
return smalltalk.send(dictionary,"_add_",[smalltalk.send(self,"_visit_",[each])]);
})]);
return dictionary;
}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitJSStatementNode_",
smalltalk.method({
selector: "visitJSStatementNode:",
fn: function (aNode) {
var self=this;
var $1,$2;
$1=smalltalk.send((smalltalk.IRVerbatim || IRVerbatim),"_new",[]);
smalltalk.send($1,"_source_",[smalltalk.send(aNode,"_source",[])]);
$2=smalltalk.send($1,"_yourself",[]);
return $2;
}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitMethodNode_",
smalltalk.method({
selector: "visitMethodNode:",
fn: function (aNode) {
var self=this;
var $1,$2,$3,$4,$5,$6;
$1=smalltalk.send((smalltalk.IRMethod || IRMethod),"_new",[]);
smalltalk.send($1,"_source_",[smalltalk.send(self,"_source",[])]);
smalltalk.send($1,"_arguments_",[smalltalk.send(aNode,"_arguments",[])]);
smalltalk.send($1,"_selector_",[smalltalk.send(aNode,"_selector",[])]);
smalltalk.send($1,"_messageSends_",[smalltalk.send(aNode,"_messageSends",[])]);
smalltalk.send($1,"_classReferences_",[smalltalk.send(aNode,"_classReferences",[])]);
smalltalk.send($1,"_scope_",[smalltalk.send(aNode,"_scope",[])]);
$2=smalltalk.send($1,"_yourself",[]);
smalltalk.send(self,"_method_",[$2]);
smalltalk.send(smalltalk.send(smalltalk.send(aNode,"_scope",[]),"_temps",[]),"_do_",[(function(each){
$3=smalltalk.send((smalltalk.IRTempDeclaration || IRTempDeclaration),"_new",[]);
smalltalk.send($3,"_name_",[smalltalk.send(each,"_name",[])]);
$4=smalltalk.send($3,"_yourself",[]);
return smalltalk.send(smalltalk.send(self,"_method",[]),"_add_",[$4]);
})]);
smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_do_",[(function(each){
return smalltalk.send(smalltalk.send(self,"_method",[]),"_add_",[smalltalk.send(self,"_visit_",[each])]);
})]);
if(! smalltalk.assert(smalltalk.send(smalltalk.send(aNode,"_scope",[]),"_hasLocalReturn",[]))){
$5=smalltalk.send((smalltalk.IRVariable || IRVariable),"_new",[]);
smalltalk.send($5,"_variable_",[smalltalk.send(smalltalk.send(smalltalk.send(aNode,"_scope",[]),"_pseudoVars",[]),"_at_",["self"])]);
$6=smalltalk.send($5,"_yourself",[]);
smalltalk.send(smalltalk.send(smalltalk.send(self,"_method",[]),"_add_",[smalltalk.send((smalltalk.IRReturn || IRReturn),"_new",[])]),"_add_",[$6]);
};
return smalltalk.send(self,"_method",[]);
}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
fn: function (aNode) {
var self=this;
var return_;
return_=smalltalk.send(smalltalk.send(aNode,"_nonLocalReturn",[]),"_ifTrue_ifFalse_",[(function(){
return smalltalk.send((smalltalk.IRNonLocalReturn || IRNonLocalReturn),"_new",[]);
}),(function(){
return smalltalk.send((smalltalk.IRReturn || IRReturn),"_new",[]);
})]);
smalltalk.send(return_,"_scope_",[smalltalk.send(aNode,"_scope",[])]);
smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_do_",[(function(each){
return smalltalk.send(return_,"_add_",[smalltalk.send(self,"_visit_",[each])]);
})]);
return return_;
}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
fn: function (aNode) {
var self=this;
var $1;
var send;
var receiver;
var arguments;
send=smalltalk.send((smalltalk.IRSend || IRSend),"_new",[]);
smalltalk.send(send,"_selector_",[smalltalk.send(aNode,"_selector",[])]);
$1=smalltalk.send(send,"_index_",[smalltalk.send(aNode,"_index",[])]);
if(smalltalk.assert(smalltalk.send(aNode,"_superSend",[]))){
smalltalk.send(send,"_classSend_",[smalltalk.send(smalltalk.send(self,"_theClass",[]),"_superclass",[])]);
};
receiver=smalltalk.send(smalltalk.send(smalltalk.send(aNode,"_receiver",[]),"_shouldBeInlined",[]),"_ifTrue_ifFalse_",[(function(){
return smalltalk.send(self,"_alias_",[smalltalk.send(aNode,"_receiver",[])]);
}),(function(){
return smalltalk.send(self,"_visit_",[smalltalk.send(aNode,"_receiver",[])]);
})]);
arguments=smalltalk.send(smalltalk.send(aNode,"_arguments",[]),"_collect_",[(function(each){
return smalltalk.send(smalltalk.send(each,"_shouldBeInlined",[]),"_ifTrue_ifFalse_",[(function(){
return smalltalk.send(self,"_alias_",[each]);
}),(function(){
return smalltalk.send(self,"_visit_",[each]);
})]);
})]);
smalltalk.send(send,"_add_",[receiver]);
smalltalk.send(arguments,"_do_",[(function(each){
return smalltalk.send(send,"_add_",[each]);
})]);
return send;
}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
fn: function (aNode) {
var self=this;
return smalltalk.send(self,"_withSequence_do_",[smalltalk.send((smalltalk.IRSequence || IRSequence),"_new",[]),(function(){
return smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_do_",[(function(each){
var instruction;
instruction=smalltalk.send(self,"_visit_",[each]);
instruction;
if(! smalltalk.assert(smalltalk.send(instruction,"_isVariable",[]))){
return smalltalk.send(smalltalk.send(self,"_sequence",[]),"_add_",[instruction]);
};
})]);
})]);
}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitValueNode_",
smalltalk.method({
selector: "visitValueNode:",
fn: function (aNode) {
var self=this;
var $1,$2;
$1=smalltalk.send((smalltalk.IRValue || IRValue),"_new",[]);
smalltalk.send($1,"_value_",[smalltalk.send(aNode,"_value",[])]);
$2=smalltalk.send($1,"_yourself",[]);
return $2;
}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitVariableNode_",
smalltalk.method({
selector: "visitVariableNode:",
fn: function (aNode) {
var self=this;
var $1,$2;
$1=smalltalk.send((smalltalk.IRVariable || IRVariable),"_new",[]);
smalltalk.send($1,"_variable_",[smalltalk.send(aNode,"_binding",[])]);
$2=smalltalk.send($1,"_yourself",[]);
return $2;
}
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_withSequence_do_",
smalltalk.method({
selector: "withSequence:do:",
fn: function (aSequence, aBlock) {
var self=this;
var outerSequence;
outerSequence=smalltalk.send(self,"_sequence",[]);
smalltalk.send(self,"_sequence_",[aSequence]);
smalltalk.send(aBlock,"_value",[]);
smalltalk.send(self,"_sequence_",[outerSequence]);
return aSequence;
}
}),
smalltalk.IRASTTranslator);



smalltalk.addClass('IRInstruction', smalltalk.Object, ['parent', 'instructions'], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor,"_visitIRInstruction_",[self]);
}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function (anObject) {
var self=this;
smalltalk.send(anObject,"_parent_",[self]);
return smalltalk.send(smalltalk.send(self,"_instructions",[]),"_add_",[anObject]);
}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_canBeAssigned",
smalltalk.method({
selector: "canBeAssigned",
fn: function () {
var self=this;
return true;
}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_instructions",
smalltalk.method({
selector: "instructions",
fn: function () {
var self=this;
return smalltalk.send(self["@instructions"],"_ifNil_",[(function(){
self["@instructions"]=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection),"_new",[]);
return self["@instructions"];
})]);
}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isClosure",
smalltalk.method({
selector: "isClosure",
fn: function () {
var self=this;
return false;
}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function () {
var self=this;
return false;
}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isLocalReturn",
smalltalk.method({
selector: "isLocalReturn",
fn: function () {
var self=this;
return false;
}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isReturn",
smalltalk.method({
selector: "isReturn",
fn: function () {
var self=this;
return false;
}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isSend",
smalltalk.method({
selector: "isSend",
fn: function () {
var self=this;
return false;
}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isSequence",
smalltalk.method({
selector: "isSequence",
fn: function () {
var self=this;
return false;
}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isTempDeclaration",
smalltalk.method({
selector: "isTempDeclaration",
fn: function () {
var self=this;
return false;
}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isVariable",
smalltalk.method({
selector: "isVariable",
fn: function () {
var self=this;
return false;
}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_parent",
smalltalk.method({
selector: "parent",
fn: function () {
var self=this;
return self["@parent"];
}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_parent_",
smalltalk.method({
selector: "parent:",
fn: function (anIRInstruction) {
var self=this;
self["@parent"]=anIRInstruction;
return self;}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_remove",
smalltalk.method({
selector: "remove",
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(self,"_parent",[]),"_remove_",[self]);
return self;}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_remove_",
smalltalk.method({
selector: "remove:",
fn: function (anIRInstruction) {
var self=this;
smalltalk.send(smalltalk.send(self,"_instructions",[]),"_remove_",[anIRInstruction]);
return self;}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_replace_with_",
smalltalk.method({
selector: "replace:with:",
fn: function (anIRInstruction, anotherIRInstruction) {
var self=this;
smalltalk.send(anotherIRInstruction,"_parent_",[self]);
smalltalk.send(smalltalk.send(self,"_instructions",[]),"_at_put_",[smalltalk.send(smalltalk.send(self,"_instructions",[]),"_indexOf_",[anIRInstruction]),anotherIRInstruction]);
return self;}
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_replaceWith_",
smalltalk.method({
selector: "replaceWith:",
fn: function (anIRInstruction) {
var self=this;
smalltalk.send(smalltalk.send(self,"_parent",[]),"_replace_with_",[self,anIRInstruction]);
return self;}
}),
smalltalk.IRInstruction);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aBuilder) {
var self=this;
var $1,$2;
$1=smalltalk.send(self,"_new",[]);
smalltalk.send($1,"_builder_",[aBuilder]);
$2=smalltalk.send($1,"_yourself",[]);
return $2;
}
}),
smalltalk.IRInstruction.klass);


smalltalk.addClass('IRAssignment', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor,"_visitIRAssignment_",[self]);
}
}),
smalltalk.IRAssignment);



smalltalk.addClass('IRDynamicArray', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor,"_visitIRDynamicArray_",[self]);
}
}),
smalltalk.IRDynamicArray);



smalltalk.addClass('IRDynamicDictionary', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor,"_visitIRDynamicDictionary_",[self]);
}
}),
smalltalk.IRDynamicDictionary);



smalltalk.addClass('IRScopedInstruction', smalltalk.IRInstruction, ['scope'], 'Compiler-IR');
smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
fn: function () {
var self=this;
return self["@scope"];
}
}),
smalltalk.IRScopedInstruction);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
fn: function (aScope) {
var self=this;
self["@scope"]=aScope;
return self;}
}),
smalltalk.IRScopedInstruction);



smalltalk.addClass('IRClosure', smalltalk.IRScopedInstruction, ['arguments'], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor,"_visitIRClosure_",[self]);
}
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
fn: function () {
var self=this;
return smalltalk.send(self["@arguments"],"_ifNil_",[(function(){
return [];
})]);
}
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
fn: function (aCollection) {
var self=this;
self["@arguments"]=aCollection;
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
}
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
fn: function (aScope) {
var self=this;
smalltalk.send(self,"_scope_",[aScope],smalltalk.IRScopedInstruction);
smalltalk.send(aScope,"_instruction_",[self]);
return self;}
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_sequence",
smalltalk.method({
selector: "sequence",
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self,"_instructions",[]),"_last",[]);
}
}),
smalltalk.IRClosure);



smalltalk.addClass('IRMethod', smalltalk.IRScopedInstruction, ['source', 'selector', 'classReferences', 'messageSends', 'arguments', 'internalVariables'], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor,"_visitIRMethod_",[self]);
}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
fn: function () {
var self=this;
return self["@arguments"];
}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
fn: function (aCollection) {
var self=this;
self["@arguments"]=aCollection;
return self;}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_classReferences",
smalltalk.method({
selector: "classReferences",
fn: function () {
var self=this;
return self["@classReferences"];
}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_classReferences_",
smalltalk.method({
selector: "classReferences:",
fn: function (aCollection) {
var self=this;
self["@classReferences"]=aCollection;
return self;}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_internalVariables",
smalltalk.method({
selector: "internalVariables",
fn: function () {
var self=this;
return smalltalk.send(self["@internalVariables"],"_ifNil_",[(function(){
self["@internalVariables"]=smalltalk.send((smalltalk.Set || Set),"_new",[]);
return self["@internalVariables"];
})]);
}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_messageSends",
smalltalk.method({
selector: "messageSends",
fn: function () {
var self=this;
return self["@messageSends"];
}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_messageSends_",
smalltalk.method({
selector: "messageSends:",
fn: function (aCollection) {
var self=this;
self["@messageSends"]=aCollection;
return self;}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
fn: function (aScope) {
var self=this;
smalltalk.send(self,"_scope_",[aScope],smalltalk.IRScopedInstruction);
smalltalk.send(aScope,"_instruction_",[self]);
return self;}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function () {
var self=this;
return self["@selector"];
}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aString) {
var self=this;
self["@selector"]=aString;
return self;}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function () {
var self=this;
return self["@source"];
}
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString) {
var self=this;
self["@source"]=aString;
return self;}
}),
smalltalk.IRMethod);



smalltalk.addClass('IRReturn', smalltalk.IRScopedInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor,"_visitIRReturn_",[self]);
}
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_canBeAssigned",
smalltalk.method({
selector: "canBeAssigned",
fn: function () {
var self=this;
return false;
}
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_isLocalReturn",
smalltalk.method({
selector: "isLocalReturn",
fn: function () {
var self=this;
return smalltalk.send(self,"_isReturn",[]);
}
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_isNonLocalReturn",
smalltalk.method({
selector: "isNonLocalReturn",
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self,"_isLocalReturn",[]),"_not",[]);
}
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_isReturn",
smalltalk.method({
selector: "isReturn",
fn: function () {
var self=this;
return true;
}
}),
smalltalk.IRReturn);



smalltalk.addClass('IRNonLocalReturn', smalltalk.IRReturn, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor,"_visitIRNonLocalReturn_",[self]);
}
}),
smalltalk.IRNonLocalReturn);

smalltalk.addMethod(
"_isLocalReturn",
smalltalk.method({
selector: "isLocalReturn",
fn: function () {
var self=this;
return false;
}
}),
smalltalk.IRNonLocalReturn);



smalltalk.addClass('IRSend', smalltalk.IRInstruction, ['selector', 'classSend', 'index'], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor,"_visitIRSend_",[self]);
}
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_classSend",
smalltalk.method({
selector: "classSend",
fn: function () {
var self=this;
return self["@classSend"];
}
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_classSend_",
smalltalk.method({
selector: "classSend:",
fn: function (aClass) {
var self=this;
self["@classSend"]=aClass;
return self;}
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_index",
smalltalk.method({
selector: "index",
fn: function () {
var self=this;
return self["@index"];
}
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_index_",
smalltalk.method({
selector: "index:",
fn: function (anInteger) {
var self=this;
self["@index"]=anInteger;
return self;}
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_isSend",
smalltalk.method({
selector: "isSend",
fn: function () {
var self=this;
return true;
}
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function () {
var self=this;
return self["@selector"];
}
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aString) {
var self=this;
self["@selector"]=aString;
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
return smalltalk.send(aVisitor,"_visitIRSequence_",[self]);
}
}),
smalltalk.IRSequence);

smalltalk.addMethod(
"_isSequence",
smalltalk.method({
selector: "isSequence",
fn: function () {
var self=this;
return true;
}
}),
smalltalk.IRSequence);



smalltalk.addClass('IRBlockSequence', smalltalk.IRSequence, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor,"_visitIRBlockSequence_",[self]);
}
}),
smalltalk.IRBlockSequence);



smalltalk.addClass('IRTempDeclaration', smalltalk.IRInstruction, ['name'], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor,"_visitIRTempDeclaration_",[self]);
}
}),
smalltalk.IRTempDeclaration);

smalltalk.addMethod(
"_isTempDeclaration",
smalltalk.method({
selector: "isTempDeclaration",
fn: function () {
var self=this;
return true;
}
}),
smalltalk.IRTempDeclaration);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
var self=this;
return self["@name"];
}
}),
smalltalk.IRTempDeclaration);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
fn: function (aString) {
var self=this;
self["@name"]=aString;
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
return smalltalk.send(aVisitor,"_visitIRValue_",[self]);
}
}),
smalltalk.IRValue);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
fn: function () {
var self=this;
return self["@value"];
}
}),
smalltalk.IRValue);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
fn: function (aString) {
var self=this;
self["@value"]=aString;
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
return smalltalk.send(aVisitor,"_visitIRVariable_",[self]);
}
}),
smalltalk.IRVariable);

smalltalk.addMethod(
"_isVariable",
smalltalk.method({
selector: "isVariable",
fn: function () {
var self=this;
return true;
}
}),
smalltalk.IRVariable);

smalltalk.addMethod(
"_variable",
smalltalk.method({
selector: "variable",
fn: function () {
var self=this;
return self["@variable"];
}
}),
smalltalk.IRVariable);

smalltalk.addMethod(
"_variable_",
smalltalk.method({
selector: "variable:",
fn: function (aScopeVariable) {
var self=this;
self["@variable"]=aScopeVariable;
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
return smalltalk.send(aVisitor,"_visitIRVerbatim_",[self]);
}
}),
smalltalk.IRVerbatim);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function () {
var self=this;
return self["@source"];
}
}),
smalltalk.IRVerbatim);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString) {
var self=this;
self["@source"]=aString;
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
return smalltalk.send(anIRInstruction,"_accept_",[self]);
}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRAssignment_",
smalltalk.method({
selector: "visitIRAssignment:",
fn: function (anIRAssignment) {
var self=this;
return smalltalk.send(self,"_visitIRInstruction_",[anIRAssignment]);
}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRBlockSequence_",
smalltalk.method({
selector: "visitIRBlockSequence:",
fn: function (anIRBlockSequence) {
var self=this;
return smalltalk.send(self,"_visitIRSequence_",[anIRBlockSequence]);
}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRClosure_",
smalltalk.method({
selector: "visitIRClosure:",
fn: function (anIRClosure) {
var self=this;
return smalltalk.send(self,"_visitIRInstruction_",[anIRClosure]);
}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRDynamicArray_",
smalltalk.method({
selector: "visitIRDynamicArray:",
fn: function (anIRDynamicArray) {
var self=this;
return smalltalk.send(self,"_visitIRInstruction_",[anIRDynamicArray]);
}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRDynamicDictionary_",
smalltalk.method({
selector: "visitIRDynamicDictionary:",
fn: function (anIRDynamicDictionary) {
var self=this;
return smalltalk.send(self,"_visitIRInstruction_",[anIRDynamicDictionary]);
}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRInstruction_",
smalltalk.method({
selector: "visitIRInstruction:",
fn: function (anIRInstruction) {
var self=this;
smalltalk.send(smalltalk.send(anIRInstruction,"_instructions",[]),"_do_",[(function(each){
return smalltalk.send(self,"_visit_",[each]);
})]);
return anIRInstruction;
}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRMethod_",
smalltalk.method({
selector: "visitIRMethod:",
fn: function (anIRMethod) {
var self=this;
return smalltalk.send(self,"_visitIRInstruction_",[anIRMethod]);
}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRNonLocalReturn_",
smalltalk.method({
selector: "visitIRNonLocalReturn:",
fn: function (anIRNonLocalReturn) {
var self=this;
return smalltalk.send(self,"_visitIRInstruction_",[anIRNonLocalReturn]);
}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRNonLocalReturnHandling_",
smalltalk.method({
selector: "visitIRNonLocalReturnHandling:",
fn: function (anIRNonLocalReturnHandling) {
var self=this;
return smalltalk.send(self,"_visitIRInstruction_",[anIRNonLocalReturnHandling]);
}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRReturn_",
smalltalk.method({
selector: "visitIRReturn:",
fn: function (anIRReturn) {
var self=this;
return smalltalk.send(self,"_visitIRInstruction_",[anIRReturn]);
}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRSend_",
smalltalk.method({
selector: "visitIRSend:",
fn: function (anIRSend) {
var self=this;
return smalltalk.send(self,"_visitIRInstruction_",[anIRSend]);
}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRSequence_",
smalltalk.method({
selector: "visitIRSequence:",
fn: function (anIRSequence) {
var self=this;
return smalltalk.send(self,"_visitIRInstruction_",[anIRSequence]);
}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRTempDeclaration_",
smalltalk.method({
selector: "visitIRTempDeclaration:",
fn: function (anIRTempDeclaration) {
var self=this;
return smalltalk.send(self,"_visitIRInstruction_",[anIRTempDeclaration]);
}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRValue_",
smalltalk.method({
selector: "visitIRValue:",
fn: function (anIRValue) {
var self=this;
return smalltalk.send(self,"_visitIRInstruction_",[anIRValue]);
}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRVariable_",
smalltalk.method({
selector: "visitIRVariable:",
fn: function (anIRVariable) {
var self=this;
return smalltalk.send(self,"_visitIRInstruction_",[anIRVariable]);
}
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRVerbatim_",
smalltalk.method({
selector: "visitIRVerbatim:",
fn: function (anIRVerbatim) {
var self=this;
return smalltalk.send(self,"_visitIRInstruction_",[anIRVerbatim]);
}
}),
smalltalk.IRVisitor);



smalltalk.addClass('IRJSTranslator', smalltalk.IRVisitor, ['stream'], 'Compiler-IR');
smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_contents",[]);
}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.IRVisitor);
self["@stream"]=smalltalk.send((smalltalk.JSStream || JSStream),"_new",[]);
return self;}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_stream",
smalltalk.method({
selector: "stream",
fn: function () {
var self=this;
return self["@stream"];
}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_stream_",
smalltalk.method({
selector: "stream:",
fn: function (aStream) {
var self=this;
self["@stream"]=aStream;
return self;}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRAssignment_",
smalltalk.method({
selector: "visitIRAssignment:",
fn: function (anIRAssignment) {
var self=this;
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRAssignment,"_instructions",[]),"_first",[])]);
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAssignment",[]);
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRAssignment,"_instructions",[]),"_last",[])]);
return self;}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRClosure_",
smalltalk.method({
selector: "visitIRClosure:",
fn: function (anIRClosure) {
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutClosureWith_arguments_",[(function(){
return smalltalk.send(self,"_visitIRClosure_",[anIRClosure],smalltalk.IRVisitor);
}),smalltalk.send(anIRClosure,"_arguments",[])]);
return self;}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRDynamicArray_",
smalltalk.method({
selector: "visitIRDynamicArray:",
fn: function (anIRDynamicArray) {
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["["]);
smalltalk.send(smalltalk.send(anIRDynamicArray,"_instructions",[]),"_do_separatedBy_",[(function(each){
return smalltalk.send(self,"_visit_",[each]);
}),(function(){
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[","]);
})]);
smalltalk.send(self["@stream"],"_nextPutAll_",["]"]);
return self;}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRDynamicDictionary_",
smalltalk.method({
selector: "visitIRDynamicDictionary:",
fn: function (anIRDynamicDictionary) {
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["smalltalk.HashedCollection._fromPairs_(["]);
smalltalk.send(smalltalk.send(anIRDynamicDictionary,"_instructions",[]),"_do_separatedBy_",[(function(each){
return smalltalk.send(self,"_visit_",[each]);
}),(function(){
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[","]);
})]);
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["])"]);
return self;}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRMethod_",
smalltalk.method({
selector: "visitIRMethod:",
fn: function (anIRMethod) {
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutMethodDeclaration_with_",[anIRMethod,(function(){
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutFunctionWith_arguments_",[(function(){
if(smalltalk.assert(smalltalk.send(smalltalk.send(anIRMethod,"_internalVariables",[]),"_notEmpty",[]))){
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutVars_",[smalltalk.send(smalltalk.send(smalltalk.send(anIRMethod,"_internalVariables",[]),"_asArray",[]),"_collect_",[(function(each){
return smalltalk.send(smalltalk.send(each,"_variable",[]),"_alias",[]);
})])]);
};
return smalltalk.send(smalltalk.send(smalltalk.send(anIRMethod,"_scope",[]),"_hasNonLocalReturn",[]),"_ifTrue_ifFalse_",[(function(){
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutNonLocalReturnHandlingWith_",[(function(){
return smalltalk.send(self,"_visitIRMethod_",[anIRMethod],smalltalk.IRVisitor);
})]);
}),(function(){
return smalltalk.send(self,"_visitIRMethod_",[anIRMethod],smalltalk.IRVisitor);
})]);
}),smalltalk.send(anIRMethod,"_arguments",[])]);
})]);
return self;}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRNonLocalReturn_",
smalltalk.method({
selector: "visitIRNonLocalReturn:",
fn: function (anIRNonLocalReturn) {
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutNonLocalReturnWith_",[(function(){
return smalltalk.send(self,"_visitIRNonLocalReturn_",[anIRNonLocalReturn],smalltalk.IRVisitor);
})]);
return self;}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRReturn_",
smalltalk.method({
selector: "visitIRReturn:",
fn: function (anIRReturn) {
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutReturnWith_",[(function(){
return smalltalk.send(self,"_visitIRReturn_",[anIRReturn],smalltalk.IRVisitor);
})]);
return self;}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRSend_",
smalltalk.method({
selector: "visitIRSend:",
fn: function (anIRSend) {
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["smalltalk.send("]);
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRSend,"_instructions",[]),"_first",[])]);
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[smalltalk.send(smalltalk.send(",\x22","__comma",[smalltalk.send(smalltalk.send(anIRSend,"_selector",[]),"_asSelector",[])]),"__comma",["\x22,["])]);
smalltalk.send(smalltalk.send(smalltalk.send(anIRSend,"_instructions",[]),"_allButFirst",[]),"_do_separatedBy_",[(function(each){
return smalltalk.send(self,"_visit_",[each]);
}),(function(){
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[","]);
})]);
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["]"]);
smalltalk.send(smalltalk.send(anIRSend,"_classSend",[]),"_ifNotNil_",[(function(){
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[smalltalk.send(",","__comma",[smalltalk.send(smalltalk.send(anIRSend,"_classSend",[]),"_asJavascript",[])])]);
})]);
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[")"]);
return self;}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRSequence_",
smalltalk.method({
selector: "visitIRSequence:",
fn: function (anIRSequence) {
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutSequenceWith_",[(function(){
return smalltalk.send(smalltalk.send(anIRSequence,"_instructions",[]),"_do_",[(function(each){
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutStatementWith_",[smalltalk.send(self,"_visit_",[each])]);
})]);
})]);
return self;}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRTempDeclaration_",
smalltalk.method({
selector: "visitIRTempDeclaration:",
fn: function (anIRTempDeclaration) {
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutVar_",[smalltalk.send(smalltalk.send(anIRTempDeclaration,"_name",[]),"_asVariableName",[])]);
return self;}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRValue_",
smalltalk.method({
selector: "visitIRValue:",
fn: function (anIRValue) {
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[smalltalk.send(smalltalk.send(anIRValue,"_value",[]),"_asJavascript",[])]);
return self;}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRVariable_",
smalltalk.method({
selector: "visitIRVariable:",
fn: function (anIRVariable) {
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[smalltalk.send(smalltalk.send(anIRVariable,"_variable",[]),"_alias",[])]);
return self;}
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRVerbatim_",
smalltalk.method({
selector: "visitIRVerbatim:",
fn: function (anIRVerbatim) {
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutStatementWith_",[(function(){
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[smalltalk.send(anIRVerbatim,"_source",[])]);
})]);
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
return smalltalk.send(self["@stream"],"_contents",[]);
}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.Object);
self["@stream"]=smalltalk.send("","_writeStream",[]);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_lf",
smalltalk.method({
selector: "lf",
fn: function () {
var self=this;
smalltalk.send(self["@stream"],"_lf",[]);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPut_",
smalltalk.method({
selector: "nextPut:",
fn: function (aString) {
var self=this;
smalltalk.send(self["@stream"],"_nextPut_",[aString]);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutAll_",
smalltalk.method({
selector: "nextPutAll:",
fn: function (aString) {
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",[aString]);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutAssignment",
smalltalk.method({
selector: "nextPutAssignment",
fn: function () {
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",["="]);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutClosureWith_arguments_",
smalltalk.method({
selector: "nextPutClosureWith:arguments:",
fn: function (aBlock, anArray) {
var self=this;
var $1;
smalltalk.send(self["@stream"],"_nextPutAll_",["(function("]);
smalltalk.send(anArray,"_do_separatedBy_",[(function(each){
return smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(each,"_asVariableName",[])]);
}),(function(){
return smalltalk.send(self["@stream"],"_nextPut_",[","]);
})]);
smalltalk.send(self["@stream"],"_nextPutAll_",["){"]);
$1=smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(aBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["})"]);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutFunctionWith_arguments_",
smalltalk.method({
selector: "nextPutFunctionWith:arguments:",
fn: function (aBlock, anArray) {
var self=this;
var $1,$2;
smalltalk.send(self["@stream"],"_nextPutAll_",["fn: function("]);
smalltalk.send(anArray,"_do_separatedBy_",[(function(each){
return smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(each,"_asVariableName",[])]);
}),(function(){
return smalltalk.send(self["@stream"],"_nextPut_",[","]);
})]);
smalltalk.send(self["@stream"],"_nextPutAll_",["){"]);
$1=smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["var self=this;"]);
$2=smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(aBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["}"]);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutIf_with_",
smalltalk.method({
selector: "nextPutIf:with:",
fn: function (aBlock, anotherBlock) {
var self=this;
var $1;
smalltalk.send(self["@stream"],"_nextPutAll_",["if("]);
smalltalk.send(aBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["){"]);
$1=smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(anotherBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["}"]);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutIfElse_with_with_",
smalltalk.method({
selector: "nextPutIfElse:with:with:",
fn: function (aBlock, ifBlock, elseBlock) {
var self=this;
var $1,$2;
smalltalk.send(self["@stream"],"_nextPutAll_",["if("]);
smalltalk.send(aBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["){"]);
$1=smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(ifBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["} else {"]);
$2=smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(elseBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["}"]);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutMethodDeclaration_with_",
smalltalk.method({
selector: "nextPutMethodDeclaration:with:",
fn: function (aMethod, aBlock) {
var self=this;
var $1,$2,$3;
smalltalk.send(self["@stream"],"_nextPutAll_",["smalltalk.method({"]);
smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send("selector: \x22","__comma",[smalltalk.send(aMethod,"_selector",[])]),"__comma",["\x22,"])]);
smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send("source: ","__comma",[smalltalk.send(smalltalk.send(aMethod,"_source",[]),"_asJavascript",[])]),"__comma",[","])]);
$1=smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(aBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send(",","__comma",[smalltalk.send((smalltalk.String || String),"_lf",[])]),"__comma",["messageSends: "])]);
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aMethod,"_messageSends",[]),"_asArray",[]),"_asJavascript",[]),"__comma",[","])]);
smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send("args: ","__comma",[smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aMethod,"_arguments",[]),"_collect_",[(function(each){
return smalltalk.send(each,"_value",[]);
})]),"_asArray",[]),"_asJavascript",[])]),"__comma",[","])]);
smalltalk.send(self["@stream"],"_lf",[]);
$2=smalltalk.send(self["@stream"],"_nextPutAll_",["referencedClasses: ["]);
smalltalk.send(smalltalk.send(aMethod,"_classReferences",[]),"_do_separatedBy_",[(function(each){
return smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(each,"_asJavascript",[])]);
}),(function(){
return smalltalk.send(self["@stream"],"_nextPutAll_",[","]);
})]);
smalltalk.send(self["@stream"],"_nextPutAll_",["]"]);
$3=smalltalk.send(self["@stream"],"_nextPutAll_",["})"]);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutNonLocalReturnHandlingWith_",
smalltalk.method({
selector: "nextPutNonLocalReturnHandlingWith:",
fn: function (aBlock) {
var self=this;
var $1,$2;
smalltalk.send(self["@stream"],"_nextPutAll_",["var $early={};"]);
smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["try {"]);
$1=smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(aBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["}"]);
smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["catch(e) {if(e===$early)return e[0]; throw e}"]);
$2=smalltalk.send(self["@stream"],"_lf",[]);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutNonLocalReturnWith_",
smalltalk.method({
selector: "nextPutNonLocalReturnWith:",
fn: function (aBlock) {
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",["throw $early=["]);
smalltalk.send(aBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["]"]);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutReturn",
smalltalk.method({
selector: "nextPutReturn",
fn: function () {
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",["return "]);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutReturnWith_",
smalltalk.method({
selector: "nextPutReturnWith:",
fn: function (aBlock) {
var self=this;
smalltalk.send(self,"_nextPutReturn",[]);
smalltalk.send(aBlock,"_value",[]);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutSendTo_selector_arguments_",
smalltalk.method({
selector: "nextPutSendTo:selector:arguments:",
fn: function (receiver, selector, arguments) {
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",["smalltalk.send("]);
smalltalk.send(receiver,"_emitOn_",[self]);
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send(",\x22","__comma",[smalltalk.send(selector,"_asSelector",[])]),"__comma",["\x22,["])]);
smalltalk.send(arguments,"_do_separatedBy_",[(function(each){
return smalltalk.send(each,"_emitOn_",[self]);
}),(function(){
return smalltalk.send(self["@stream"],"_nextPutAll_",[","]);
})]);
smalltalk.send(self["@stream"],"_nextPutAll_",["])"]);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutSequenceWith_",
smalltalk.method({
selector: "nextPutSequenceWith:",
fn: function (aBlock) {
var self=this;
smalltalk.send(aBlock,"_value",[]);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutStatement_with_",
smalltalk.method({
selector: "nextPutStatement:with:",
fn: function (anInteger, aBlock) {
var self=this;
var $1,$2;
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send("case ","__comma",[smalltalk.send(anInteger,"_asString",[])]),"__comma",[":"])]);
$1=smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(self,"_nextPutStatementWith_",[aBlock]);
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send("smalltalk.thisContext.pc=","__comma",[smalltalk.send(smalltalk.send(anInteger,"__plus",[(1)]),"_asString",[])]),"__comma",[";"])]);
$2=smalltalk.send(self["@stream"],"_lf",[]);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutStatementWith_",
smalltalk.method({
selector: "nextPutStatementWith:",
fn: function (aBlock) {
var self=this;
var $1;
smalltalk.send(aBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",[";"]);
$1=smalltalk.send(self["@stream"],"_lf",[]);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutVar_",
smalltalk.method({
selector: "nextPutVar:",
fn: function (aString) {
var self=this;
var $1;
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send("var ","__comma",[aString]),"__comma",[";"])]);
$1=smalltalk.send(self["@stream"],"_lf",[]);
return self;}
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutVars_",
smalltalk.method({
selector: "nextPutVars:",
fn: function (aCollection) {
var self=this;
var $1;
smalltalk.send(self["@stream"],"_nextPutAll_",["var "]);
smalltalk.send(aCollection,"_do_separatedBy_",[(function(each){
return smalltalk.send(self["@stream"],"_nextPutAll_",[each]);
}),(function(){
return smalltalk.send(self["@stream"],"_nextPutAll_",[","]);
})]);
smalltalk.send(self["@stream"],"_nextPutAll_",[";"]);
$1=smalltalk.send(self["@stream"],"_lf",[]);
return self;}
}),
smalltalk.JSStream);



smalltalk.addMethod(
"_appendToInstruction_",
smalltalk.method({
selector: "appendToInstruction:",
fn: function (anIRInstruction) {
var self=this;
smalltalk.send(anIRInstruction,"_appendBlock_",[self]);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_asVariableName",
smalltalk.method({
selector: "asVariableName",
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk),"_current",[]),"_reservedWords",[]),"_includes_",[self]),"_ifTrue_ifFalse_",[(function(){
return smalltalk.send(self,"__comma",["_"]);
}),(function(){
return self;
})]);
}
}),
smalltalk.String);

