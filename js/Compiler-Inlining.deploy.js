smalltalk.addPackage('Compiler-Inlining', {});
smalltalk.addClass('IRInlinedAssignment', smalltalk.IRAssignment, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor,"_visitIRInlinedAssignment_",[self]);
}
}),
smalltalk.IRInlinedAssignment);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function () {
var self=this;
return true;
}
}),
smalltalk.IRInlinedAssignment);



smalltalk.addClass('IRInlinedClosure', smalltalk.IRClosure, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor,"_visitIRInlinedClosure_",[self]);
return self;}
}),
smalltalk.IRInlinedClosure);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function () {
var self=this;
return true;
}
}),
smalltalk.IRInlinedClosure);



smalltalk.addClass('IRInlinedReturn', smalltalk.IRReturn, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor,"_visitIRInlinedReturn_",[self]);
}
}),
smalltalk.IRInlinedReturn);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function () {
var self=this;
return true;
}
}),
smalltalk.IRInlinedReturn);



smalltalk.addClass('IRInlinedNonLocalReturn', smalltalk.IRInlinedReturn, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor,"_visitIRInlinedNonLocalReturn_",[self]);
}
}),
smalltalk.IRInlinedNonLocalReturn);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function () {
var self=this;
return true;
}
}),
smalltalk.IRInlinedNonLocalReturn);



smalltalk.addClass('IRInlinedSend', smalltalk.IRSend, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor,"_visitInlinedSend_",[self]);
return self;}
}),
smalltalk.IRInlinedSend);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function () {
var self=this;
return true;
}
}),
smalltalk.IRInlinedSend);



smalltalk.addClass('IRInlinedIfFalse', smalltalk.IRInlinedSend, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor,"_visitIRInlinedIfFalse_",[self]);
return self;}
}),
smalltalk.IRInlinedIfFalse);



smalltalk.addClass('IRInlinedIfNil', smalltalk.IRInlinedSend, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor,"_visitIRInlinedIfNil_",[self]);
return self;}
}),
smalltalk.IRInlinedIfNil);



smalltalk.addClass('IRInlinedIfTrue', smalltalk.IRInlinedSend, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor,"_visitIRInlinedIfTrue_",[self]);
return self;}
}),
smalltalk.IRInlinedIfTrue);



smalltalk.addClass('IRInlinedIfTrueIfFalse', smalltalk.IRInlinedSend, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor,"_visitIRInlinedIfTrueIfFalse_",[self]);
return self;}
}),
smalltalk.IRInlinedIfTrueIfFalse);



smalltalk.addClass('IRInlinedSequence', smalltalk.IRBlockSequence, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor,"_visitIRInlinedSequence_",[self]);
return self;}
}),
smalltalk.IRInlinedSequence);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function () {
var self=this;
return true;
}
}),
smalltalk.IRInlinedSequence);



smalltalk.addClass('IRAssigningInlinedSequence', smalltalk.IRInlinedSequence, ['assignTo'], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor,"_visitIRAssigningInlinedSequence_",[self]);
}
}),
smalltalk.IRAssigningInlinedSequence);

smalltalk.addMethod(
"_assignTo",
smalltalk.method({
selector: "assignTo",
fn: function () {
var self=this;
return self["@assignTo"];
}
}),
smalltalk.IRAssigningInlinedSequence);

smalltalk.addMethod(
"_assignTo_",
smalltalk.method({
selector: "assignTo:",
fn: function (anIRInstruction) {
var self=this;
self["@assignTo"]=anIRInstruction;
return self;}
}),
smalltalk.IRAssigningInlinedSequence);



smalltalk.addClass('IRReturningInlinedSequence', smalltalk.IRInlinedSequence, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor,"_visitIRReturningInlinedSequence_",[self]);
}
}),
smalltalk.IRReturningInlinedSequence);



smalltalk.addClass('IRNonLocalReturningInlinedSequence', smalltalk.IRReturningInlinedSequence, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor,"_visitIRNonLocalReturningInlinedSequence_",[self]);
}
}),
smalltalk.IRNonLocalReturningInlinedSequence);



smalltalk.addClass('IRInliner', smalltalk.IRVisitor, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_assignmentInliner",
smalltalk.method({
selector: "assignmentInliner",
fn: function () {
var self=this;
var $1,$2;
$1=smalltalk.send((smalltalk.IRAssignmentInliner || IRAssignmentInliner),"_new",[]);
smalltalk.send($1,"_translator_",[self]);
$2=smalltalk.send($1,"_yourself",[]);
return $2;
}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_nonLocalReturnInliner",
smalltalk.method({
selector: "nonLocalReturnInliner",
fn: function () {
var self=this;
var $1,$2;
$1=smalltalk.send((smalltalk.IRNonLocalReturnInliner || IRNonLocalReturnInliner),"_new",[]);
smalltalk.send($1,"_translator_",[self]);
$2=smalltalk.send($1,"_yourself",[]);
return $2;
}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_returnInliner",
smalltalk.method({
selector: "returnInliner",
fn: function () {
var self=this;
var $1,$2;
$1=smalltalk.send((smalltalk.IRReturnInliner || IRReturnInliner),"_new",[]);
smalltalk.send($1,"_translator_",[self]);
$2=smalltalk.send($1,"_yourself",[]);
return $2;
}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_sendInliner",
smalltalk.method({
selector: "sendInliner",
fn: function () {
var self=this;
var $1,$2;
$1=smalltalk.send((smalltalk.IRSendInliner || IRSendInliner),"_new",[]);
smalltalk.send($1,"_translator_",[self]);
$2=smalltalk.send($1,"_yourself",[]);
return $2;
}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_shouldInlineAssignment_",
smalltalk.method({
selector: "shouldInlineAssignment:",
fn: function (anIRAssignment) {
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(anIRAssignment,"_isInlined",[]),"_not",[]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(anIRAssignment,"_instructions",[]),"_last",[]),"_isSend",[]),"_and_",[(function(){
return smalltalk.send(self,"_shouldInlineSend_",[smalltalk.send(smalltalk.send(anIRAssignment,"_instructions",[]),"_last",[])]);
})]);
})]);
}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_shouldInlineReturn_",
smalltalk.method({
selector: "shouldInlineReturn:",
fn: function (anIRReturn) {
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(anIRReturn,"_isInlined",[]),"_not",[]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(anIRReturn,"_instructions",[]),"_first",[]),"_isSend",[]),"_and_",[(function(){
return smalltalk.send(self,"_shouldInlineSend_",[smalltalk.send(smalltalk.send(anIRReturn,"_instructions",[]),"_first",[])]);
})]);
})]);
}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_shouldInlineSend_",
smalltalk.method({
selector: "shouldInlineSend:",
fn: function (anIRSend) {
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(anIRSend,"_isInlined",[]),"_not",[]),"_and_",[(function(){
return smalltalk.send((smalltalk.IRSendInliner || IRSendInliner),"_shouldInline_",[anIRSend]);
})]);
}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_transformNonLocalReturn_",
smalltalk.method({
selector: "transformNonLocalReturn:",
fn: function (anIRNonLocalReturn) {
var self=this;
var $1,$2;
var localReturn;
if(smalltalk.assert(smalltalk.send(smalltalk.send(anIRNonLocalReturn,"_scope",[]),"_canInlineNonLocalReturns",[]))){
smalltalk.send(smalltalk.send(smalltalk.send(anIRNonLocalReturn,"_scope",[]),"_methodScope",[]),"_removeNonLocalReturn_",[smalltalk.send(anIRNonLocalReturn,"_scope",[])]);
$1=smalltalk.send((smalltalk.IRReturn || IRReturn),"_new",[]);
smalltalk.send($1,"_scope_",[smalltalk.send(anIRNonLocalReturn,"_scope",[])]);
$2=smalltalk.send($1,"_yourself",[]);
localReturn=$2;
localReturn;
smalltalk.send(smalltalk.send(anIRNonLocalReturn,"_instructions",[]),"_do_",[(function(each){
return smalltalk.send(localReturn,"_add_",[each]);
})]);
smalltalk.send(anIRNonLocalReturn,"_replaceWith_",[localReturn]);
return localReturn;
};
return smalltalk.send(self,"_visitIRNonLocalReturn_",[anIRNonLocalReturn],smalltalk.IRVisitor);
}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRAssignment_",
smalltalk.method({
selector: "visitIRAssignment:",
fn: function (anIRAssignment) {
var self=this;
return smalltalk.send(smalltalk.send(self,"_shouldInlineAssignment_",[anIRAssignment]),"_ifTrue_ifFalse_",[(function(){
return smalltalk.send(smalltalk.send(self,"_assignmentInliner",[]),"_inlineAssignment_",[anIRAssignment]);
}),(function(){
return smalltalk.send(self,"_visitIRAssignment_",[anIRAssignment],smalltalk.IRVisitor);
})]);
}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRNonLocalReturn_",
smalltalk.method({
selector: "visitIRNonLocalReturn:",
fn: function (anIRNonLocalReturn) {
var self=this;
return smalltalk.send(smalltalk.send(self,"_shouldInlineReturn_",[anIRNonLocalReturn]),"_ifTrue_ifFalse_",[(function(){
return smalltalk.send(smalltalk.send(self,"_nonLocalReturnInliner",[]),"_inlineReturn_",[anIRNonLocalReturn]);
}),(function(){
return smalltalk.send(self,"_transformNonLocalReturn_",[anIRNonLocalReturn]);
})]);
}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRReturn_",
smalltalk.method({
selector: "visitIRReturn:",
fn: function (anIRReturn) {
var self=this;
return smalltalk.send(smalltalk.send(self,"_shouldInlineReturn_",[anIRReturn]),"_ifTrue_ifFalse_",[(function(){
return smalltalk.send(smalltalk.send(self,"_returnInliner",[]),"_inlineReturn_",[anIRReturn]);
}),(function(){
return smalltalk.send(self,"_visitIRReturn_",[anIRReturn],smalltalk.IRVisitor);
})]);
}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRSend_",
smalltalk.method({
selector: "visitIRSend:",
fn: function (anIRSend) {
var self=this;
return smalltalk.send(smalltalk.send(self,"_shouldInlineSend_",[anIRSend]),"_ifTrue_ifFalse_",[(function(){
return smalltalk.send(smalltalk.send(self,"_sendInliner",[]),"_inlineSend_",[anIRSend]);
}),(function(){
return smalltalk.send(self,"_visitIRSend_",[anIRSend],smalltalk.IRVisitor);
})]);
}
}),
smalltalk.IRInliner);



smalltalk.addClass('IRInliningJSTranslator', smalltalk.IRJSTranslator, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_visitIRAssigningInlinedSequence_",
smalltalk.method({
selector: "visitIRAssigningInlinedSequence:",
fn: function (anIRInlinedSequence) {
var self=this;
var $1,$2;
smalltalk.send(smalltalk.send(smalltalk.send(anIRInlinedSequence,"_instructions",[]),"_allButLast",[]),"_do_",[(function(each){
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutStatementWith_",[(function(){
return smalltalk.send(self,"_visit_",[each]);
})]);
})]);
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutStatementWith_",[(function(){
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(anIRInlinedSequence,"_instructions",[]),"_last",[]),"_canBeAssigned",[]),"_ifTrue_ifFalse_",[(function(){
$1=smalltalk.send(self,"_stream",[]);
smalltalk.send($1,"_nextPutAll_",[smalltalk.send(smalltalk.send(smalltalk.send(anIRInlinedSequence,"_assignTo",[]),"_variable",[]),"_alias",[])]);
$2=smalltalk.send($1,"_nextPutAssignment",[]);
$2;
return smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedSequence,"_instructions",[]),"_last",[])]);
}),(function(){
return smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedSequence,"_instructions",[]),"_last",[])]);
})]);
})]);
return self;}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedAssignment_",
smalltalk.method({
selector: "visitIRInlinedAssignment:",
fn: function (anIRInlinedAssignment) {
var self=this;
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedAssignment,"_instructions",[]),"_last",[])]);
return self;}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedClosure_",
smalltalk.method({
selector: "visitIRInlinedClosure:",
fn: function (anIRInlinedClosure) {
var self=this;
smalltalk.send(smalltalk.send(anIRInlinedClosure,"_instructions",[]),"_do_",[(function(each){
return smalltalk.send(self,"_visit_",[each]);
})]);
return self;}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfFalse_",
smalltalk.method({
selector: "visitIRInlinedIfFalse:",
fn: function (anIRInlinedIfFalse) {
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutIf_with_",[(function(){
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["! smalltalk.assert("]);
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfFalse,"_instructions",[]),"_first",[])]);
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[")"]);
}),(function(){
return smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfFalse,"_instructions",[]),"_last",[])]);
})]);
return self;}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfNil_",
smalltalk.method({
selector: "visitIRInlinedIfNil:",
fn: function (anIRInlinedIfNil) {
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutIf_with_",[(function(){
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["($receiver = "]);
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfNil,"_instructions",[]),"_first",[])]);
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[") == nil || $receiver == undefined"]);
}),(function(){
return smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfNil,"_instructions",[]),"_last",[])]);
})]);
return self;}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfTrue_",
smalltalk.method({
selector: "visitIRInlinedIfTrue:",
fn: function (anIRInlinedIfTrue) {
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutIf_with_",[(function(){
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["smalltalk.assert("]);
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfTrue,"_instructions",[]),"_first",[])]);
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[")"]);
}),(function(){
return smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfTrue,"_instructions",[]),"_last",[])]);
})]);
return self;}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfTrueIfFalse_",
smalltalk.method({
selector: "visitIRInlinedIfTrueIfFalse:",
fn: function (anIRInlinedIfTrueIfFalse) {
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutIfElse_with_with_",[(function(){
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["smalltalk.assert("]);
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfTrueIfFalse,"_instructions",[]),"_first",[])]);
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[")"]);
}),(function(){
return smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfTrueIfFalse,"_instructions",[]),"_second",[])]);
}),(function(){
return smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfTrueIfFalse,"_instructions",[]),"_third",[])]);
})]);
return self;}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedNonLocalReturn_",
smalltalk.method({
selector: "visitIRInlinedNonLocalReturn:",
fn: function (anIRInlinedReturn) {
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutStatementWith_",[(function(){
return smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedReturn,"_instructions",[]),"_last",[])]);
})]);
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutNonLocalReturnWith_",[(function(){
})]);
return self;}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedReturn_",
smalltalk.method({
selector: "visitIRInlinedReturn:",
fn: function (anIRInlinedReturn) {
var self=this;
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedReturn,"_instructions",[]),"_last",[])]);
return self;}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedSequence_",
smalltalk.method({
selector: "visitIRInlinedSequence:",
fn: function (anIRInlinedSequence) {
var self=this;
smalltalk.send(smalltalk.send(anIRInlinedSequence,"_instructions",[]),"_do_",[(function(each){
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutStatementWith_",[(function(){
return smalltalk.send(self,"_visit_",[each]);
})]);
})]);
return self;}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRNonLocalReturningInlinedSequence_",
smalltalk.method({
selector: "visitIRNonLocalReturningInlinedSequence:",
fn: function (anIRInlinedSequence) {
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(anIRInlinedSequence,"_instructions",[]),"_allButLast",[]),"_do_",[(function(each){
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutStatementWith_",[(function(){
return smalltalk.send(self,"_visit_",[each]);
})]);
})]);
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutStatementWith_",[(function(){
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(anIRInlinedSequence,"_instructions",[]),"_last",[]),"_canBeAssigned",[]),"_ifTrue_ifFalse_",[(function(){
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutNonLocalReturnWith_",[(function(){
return smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedSequence,"_instructions",[]),"_last",[])]);
})]);
}),(function(){
return smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedSequence,"_instructions",[]),"_last",[])]);
})]);
})]);
return self;}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRReturningInlinedSequence_",
smalltalk.method({
selector: "visitIRReturningInlinedSequence:",
fn: function (anIRInlinedSequence) {
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(anIRInlinedSequence,"_instructions",[]),"_allButLast",[]),"_do_",[(function(each){
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutStatementWith_",[(function(){
return smalltalk.send(self,"_visit_",[each]);
})]);
})]);
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutStatementWith_",[(function(){
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(anIRInlinedSequence,"_instructions",[]),"_last",[]),"_canBeAssigned",[]),"_ifTrue_ifFalse_",[(function(){
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutReturn",[]);
return smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedSequence,"_instructions",[]),"_last",[])]);
}),(function(){
return smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedSequence,"_instructions",[]),"_last",[])]);
})]);
})]);
return self;}
}),
smalltalk.IRInliningJSTranslator);



smalltalk.addClass('IRSendInliner', smalltalk.Object, ['send', 'translator'], 'Compiler-Inlining');
smalltalk.addMethod(
"_ifFalse_",
smalltalk.method({
selector: "ifFalse:",
fn: function (anIRInstruction) {
var self=this;
return smalltalk.send(self,"_inlinedSend_with_",[smalltalk.send((smalltalk.IRInlinedIfFalse || IRInlinedIfFalse),"_new",[]),anIRInstruction]);
}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifFalse_ifTrue_",
smalltalk.method({
selector: "ifFalse:ifTrue:",
fn: function (anIRInstruction, anotherIRInstruction) {
var self=this;
return smalltalk.send(self,"_perform_withArguments_",[smalltalk.symbolFor("ifTrue:ifFalse:"),[anotherIRInstruction,anIRInstruction]]);
}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifNil_",
smalltalk.method({
selector: "ifNil:",
fn: function (anIRInstruction) {
var self=this;
return smalltalk.send(self,"_inlinedSend_with_",[smalltalk.send((smalltalk.IRInlinedIfNil || IRInlinedIfNil),"_new",[]),anIRInstruction]);
}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifTrue_",
smalltalk.method({
selector: "ifTrue:",
fn: function (anIRInstruction) {
var self=this;
return smalltalk.send(self,"_inlinedSend_with_",[smalltalk.send((smalltalk.IRInlinedIfTrue || IRInlinedIfTrue),"_new",[]),anIRInstruction]);
}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifTrue_ifFalse_",
smalltalk.method({
selector: "ifTrue:ifFalse:",
fn: function (anIRInstruction, anotherIRInstruction) {
var self=this;
return smalltalk.send(self,"_inlinedSend_with_with_",[smalltalk.send((smalltalk.IRInlinedIfTrueIfFalse || IRInlinedIfTrueIfFalse),"_new",[]),anIRInstruction,anotherIRInstruction]);
}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlineClosure_",
smalltalk.method({
selector: "inlineClosure:",
fn: function (anIRClosure) {
var self=this;
var inlinedClosure;
var sequence;
var statements;
inlinedClosure=smalltalk.send(self,"_inlinedClosure",[]);
smalltalk.send(inlinedClosure,"_scope_",[smalltalk.send(anIRClosure,"_scope",[])]);
smalltalk.send(smalltalk.send(anIRClosure,"_instructions",[]),"_do_",[(function(each){
if(! smalltalk.assert(smalltalk.send(each,"_isSequence",[]))){
return smalltalk.send(inlinedClosure,"_add_",[each]);
};
})]);
sequence=smalltalk.send(self,"_inlinedSequence",[]);
smalltalk.send(inlinedClosure,"_add_",[sequence]);
statements=smalltalk.send(smalltalk.send(smalltalk.send(anIRClosure,"_instructions",[]),"_last",[]),"_instructions",[]);
smalltalk.send(statements,"_ifNotEmpty_",[(function(){
smalltalk.send(smalltalk.send(statements,"_allButLast",[]),"_do_",[(function(each){
return smalltalk.send(sequence,"_add_",[smalltalk.send(smalltalk.send(self,"_translator",[]),"_visit_",[each])]);
})]);
return smalltalk.send(smalltalk.send(smalltalk.send(statements,"_last",[]),"_isLocalReturn",[]),"_ifTrue_ifFalse_",[(function(){
return smalltalk.send(sequence,"_add_",[smalltalk.send(smalltalk.send(self,"_translator",[]),"_visit_",[smalltalk.send(smalltalk.send(smalltalk.send(statements,"_last",[]),"_instructions",[]),"_first",[])])]);
}),(function(){
return smalltalk.send(sequence,"_add_",[smalltalk.send(smalltalk.send(self,"_translator",[]),"_visit_",[smalltalk.send(statements,"_last",[])])]);
})]);
})]);
return inlinedClosure;
}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlineMessageBlock_with_",
smalltalk.method({
selector: "inlineMessageBlock:with:",
fn: function (anIRInstruction, anotherIRInstruction) {
var self=this;
var $1;
var inlinedSend;
var inlinedClosure;
if(! smalltalk.assert(smalltalk.send(anIRInstruction,"_isClosure",[]))){
smalltalk.send(self,"_inliningError_",["Message argument should be a block"]);
};
if(! smalltalk.assert(smalltalk.send(smalltalk.send(smalltalk.send(anIRInstruction,"_arguments",[]),"_size",[]),"__eq",[(0)]))){
smalltalk.send(self,"_inliningError_",["Inlined block should have zero argument"]);
};
inlinedClosure=smalltalk.send(self,"_inlineClosure_",[anIRInstruction]);
inlinedSend=anotherIRInstruction;
smalltalk.send(inlinedSend,"_add_",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_send",[]),"_instructions",[]),"_first",[])]);
$1=smalltalk.send(inlinedSend,"_add_",[inlinedClosure]);
smalltalk.send(smalltalk.send(self,"_send",[]),"_replaceWith_",[inlinedSend]);
return inlinedSend;
}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlineSend_",
smalltalk.method({
selector: "inlineSend:",
fn: function (anIRSend) {
var self=this;
smalltalk.send(self,"_send_",[anIRSend]);
return smalltalk.send(self,"_perform_withArguments_",[smalltalk.send(smalltalk.send(self,"_send",[]),"_selector",[]),smalltalk.send(smalltalk.send(smalltalk.send(self,"_send",[]),"_instructions",[]),"_allButFirst",[])]);
}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedClosure",
smalltalk.method({
selector: "inlinedClosure",
fn: function () {
var self=this;
return smalltalk.send((smalltalk.IRInlinedClosure || IRInlinedClosure),"_new",[]);
}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedSend_with_",
smalltalk.method({
selector: "inlinedSend:with:",
fn: function (inlinedSend, anIRInstruction) {
var self=this;
var $1;
var inlinedClosure;
if(! smalltalk.assert(smalltalk.send(anIRInstruction,"_isClosure",[]))){
smalltalk.send(self,"_inliningError_",["Message argument should be a block"]);
};
if(! smalltalk.assert(smalltalk.send(smalltalk.send(smalltalk.send(anIRInstruction,"_arguments",[]),"_size",[]),"__eq",[(0)]))){
smalltalk.send(self,"_inliningError_",["Inlined block should have zero argument"]);
};
inlinedClosure=smalltalk.send(self,"_inlineClosure_",[anIRInstruction]);
smalltalk.send(inlinedSend,"_add_",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_send",[]),"_instructions",[]),"_first",[])]);
$1=smalltalk.send(inlinedSend,"_add_",[inlinedClosure]);
smalltalk.send(smalltalk.send(self,"_send",[]),"_replaceWith_",[inlinedSend]);
return inlinedSend;
}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedSend_with_with_",
smalltalk.method({
selector: "inlinedSend:with:with:",
fn: function (inlinedSend, anIRInstruction, anotherIRInstruction) {
var self=this;
var $1;
var inlinedClosure1;
var inclinedClosure2;
if(! smalltalk.assert(smalltalk.send(anIRInstruction,"_isClosure",[]))){
smalltalk.send(self,"_inliningError_",["Message argument should be a block"]);
};
if(! smalltalk.assert(smalltalk.send(smalltalk.send(smalltalk.send(anIRInstruction,"_arguments",[]),"_size",[]),"__eq",[(0)]))){
smalltalk.send(self,"_inliningError_",["Inlined block should have zero argument"]);
};
if(! smalltalk.assert(smalltalk.send(anotherIRInstruction,"_isClosure",[]))){
smalltalk.send(self,"_inliningError_",["Message argument should be a block"]);
};
if(! smalltalk.assert(smalltalk.send(smalltalk.send(smalltalk.send(anotherIRInstruction,"_arguments",[]),"_size",[]),"__eq",[(0)]))){
smalltalk.send(self,"_inliningError_",["Inlined block should have zero argument"]);
};
inlinedClosure=smalltalk.send(self,"_inlineClosure_",[anIRInstruction]);
inlinedClosure2=smalltalk.send(self,"_inlineClosure_",[anotherIRInstruction]);
smalltalk.send(inlinedSend,"_add_",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_send",[]),"_instructions",[]),"_first",[])]);
smalltalk.send(inlinedSend,"_add_",[inlinedClosure]);
$1=smalltalk.send(inlinedSend,"_add_",[inlinedClosure2]);
smalltalk.send(smalltalk.send(self,"_send",[]),"_replaceWith_",[inlinedSend]);
return inlinedSend;
}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedSequence",
smalltalk.method({
selector: "inlinedSequence",
fn: function () {
var self=this;
return smalltalk.send((smalltalk.IRInlinedSequence || IRInlinedSequence),"_new",[]);
}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inliningError_",
smalltalk.method({
selector: "inliningError:",
fn: function (aString) {
var self=this;
smalltalk.send((smalltalk.InliningError || InliningError),"_signal_",[aString]);
return self;}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_send",
smalltalk.method({
selector: "send",
fn: function () {
var self=this;
return self["@send"];
}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_send_",
smalltalk.method({
selector: "send:",
fn: function (anIRSend) {
var self=this;
self["@send"]=anIRSend;
return self;}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_translator",
smalltalk.method({
selector: "translator",
fn: function () {
var self=this;
return self["@translator"];
}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_translator_",
smalltalk.method({
selector: "translator:",
fn: function (anASTTranslator) {
var self=this;
self["@translator"]=anASTTranslator;
return self;}
}),
smalltalk.IRSendInliner);


smalltalk.addMethod(
"_inlinedSelectors",
smalltalk.method({
selector: "inlinedSelectors",
fn: function () {
var self=this;
return ["ifTrue:", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:", "ifNil:"];
}
}),
smalltalk.IRSendInliner.klass);

smalltalk.addMethod(
"_shouldInline_",
smalltalk.method({
selector: "shouldInline:",
fn: function (anIRInstruction) {
var self=this;
var $early={};
try {
if(! smalltalk.assert(smalltalk.send(smalltalk.send(self,"_inlinedSelectors",[]),"_includes_",[smalltalk.send(anIRInstruction,"_selector",[])]))){
return false;
};
smalltalk.send(smalltalk.send(smalltalk.send(anIRInstruction,"_instructions",[]),"_allButFirst",[]),"_do_",[(function(each){
if(! smalltalk.assert(smalltalk.send(each,"_isClosure",[]))){
throw $early=[false];
};
})]);
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
}
}),
smalltalk.IRSendInliner.klass);


smalltalk.addClass('IRAssignmentInliner', smalltalk.IRSendInliner, ['assignment'], 'Compiler-Inlining');
smalltalk.addMethod(
"_assignment",
smalltalk.method({
selector: "assignment",
fn: function () {
var self=this;
return self["@assignment"];
}
}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
"_assignment_",
smalltalk.method({
selector: "assignment:",
fn: function (aNode) {
var self=this;
self["@assignment"]=aNode;
return self;}
}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
"_inlineAssignment_",
smalltalk.method({
selector: "inlineAssignment:",
fn: function (anIRAssignment) {
var self=this;
var inlinedAssignment;
smalltalk.send(self,"_assignment_",[anIRAssignment]);
inlinedAssignment=smalltalk.send((smalltalk.IRInlinedAssignment || IRInlinedAssignment),"_new",[]);
smalltalk.send(smalltalk.send(anIRAssignment,"_instructions",[]),"_do_",[(function(each){
return smalltalk.send(inlinedAssignment,"_add_",[each]);
})]);
smalltalk.send(anIRAssignment,"_replaceWith_",[inlinedAssignment]);
smalltalk.send(self,"_inlineSend_",[smalltalk.send(smalltalk.send(inlinedAssignment,"_instructions",[]),"_last",[])]);
return inlinedAssignment;
}
}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
"_inlinedSequence",
smalltalk.method({
selector: "inlinedSequence",
fn: function () {
var self=this;
var $1,$2;
$1=smalltalk.send((smalltalk.IRAssigningInlinedSequence || IRAssigningInlinedSequence),"_new",[]);
smalltalk.send($1,"_assignTo_",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_assignment",[]),"_instructions",[]),"_first",[])]);
$2=smalltalk.send($1,"_yourself",[]);
return $2;
}
}),
smalltalk.IRAssignmentInliner);



smalltalk.addClass('IRReturnInliner', smalltalk.IRSendInliner, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_inlineReturn_",
smalltalk.method({
selector: "inlineReturn:",
fn: function (anIRReturn) {
var self=this;
var return_;
return_=smalltalk.send(self,"_inlinedReturn",[]);
smalltalk.send(smalltalk.send(anIRReturn,"_instructions",[]),"_do_",[(function(each){
return smalltalk.send(return_,"_add_",[each]);
})]);
smalltalk.send(anIRReturn,"_replaceWith_",[return_]);
smalltalk.send(self,"_inlineSend_",[smalltalk.send(smalltalk.send(return_,"_instructions",[]),"_last",[])]);
return return_;
}
}),
smalltalk.IRReturnInliner);

smalltalk.addMethod(
"_inlinedReturn",
smalltalk.method({
selector: "inlinedReturn",
fn: function () {
var self=this;
return smalltalk.send((smalltalk.IRInlinedReturn || IRInlinedReturn),"_new",[]);
}
}),
smalltalk.IRReturnInliner);

smalltalk.addMethod(
"_inlinedSequence",
smalltalk.method({
selector: "inlinedSequence",
fn: function () {
var self=this;
return smalltalk.send((smalltalk.IRReturningInlinedSequence || IRReturningInlinedSequence),"_new",[]);
}
}),
smalltalk.IRReturnInliner);



smalltalk.addClass('IRNonLocalReturnInliner', smalltalk.IRReturnInliner, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_inlinedReturn",
smalltalk.method({
selector: "inlinedReturn",
fn: function () {
var self=this;
return smalltalk.send((smalltalk.IRInlinedNonLocalReturn || IRInlinedNonLocalReturn),"_new",[]);
}
}),
smalltalk.IRNonLocalReturnInliner);

smalltalk.addMethod(
"_inlinedSequence",
smalltalk.method({
selector: "inlinedSequence",
fn: function () {
var self=this;
return smalltalk.send((smalltalk.IRNonLocalReturningInlinedSequence || IRNonLocalReturningInlinedSequence),"_new",[]);
}
}),
smalltalk.IRNonLocalReturnInliner);



smalltalk.addClass('InliningCodeGenerator', smalltalk.CodeGenerator, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
fn: function (aNode) {
var self=this;
var $1,$2;
var ir;
var stream;
smalltalk.send(smalltalk.send(self,"_semanticAnalyzer",[]),"_visit_",[aNode]);
ir=smalltalk.send(smalltalk.send(self,"_translator",[]),"_visit_",[aNode]);
smalltalk.send(smalltalk.send(self,"_inliner",[]),"_visit_",[ir]);
$1=smalltalk.send(self,"_irTranslator",[]);
smalltalk.send($1,"_visit_",[ir]);
$2=smalltalk.send($1,"_contents",[]);
return $2;
}
}),
smalltalk.InliningCodeGenerator);

smalltalk.addMethod(
"_inliner",
smalltalk.method({
selector: "inliner",
fn: function () {
var self=this;
return smalltalk.send((smalltalk.IRInliner || IRInliner),"_new",[]);
}
}),
smalltalk.InliningCodeGenerator);

smalltalk.addMethod(
"_irTranslator",
smalltalk.method({
selector: "irTranslator",
fn: function () {
var self=this;
return smalltalk.send((smalltalk.IRInliningJSTranslator || IRInliningJSTranslator),"_new",[]);
}
}),
smalltalk.InliningCodeGenerator);



