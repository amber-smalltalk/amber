smalltalk.addPackage('Compiler-Inlining', {});
smalltalk.addClass('IRInlinedAssignment', smalltalk.IRAssignment, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRInlinedAssignment_",[self]);
return $1;
}
}),
smalltalk.IRInlinedAssignment);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function (){
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
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor,"_visitIRInlinedClosure_",[self]);
return self}
}),
smalltalk.IRInlinedClosure);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function (){
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
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRInlinedReturn_",[self]);
return $1;
}
}),
smalltalk.IRInlinedReturn);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function (){
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
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRInlinedNonLocalReturn_",[self]);
return $1;
}
}),
smalltalk.IRInlinedNonLocalReturn);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function (){
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
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor,"_visitInlinedSend_",[self]);
return self}
}),
smalltalk.IRInlinedSend);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function (){
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
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor,"_visitIRInlinedIfFalse_",[self]);
return self}
}),
smalltalk.IRInlinedIfFalse);



smalltalk.addClass('IRInlinedIfNilIfNotNil', smalltalk.IRInlinedSend, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor,"_visitIRInlinedIfNilIfNotNil_",[self]);
return self}
}),
smalltalk.IRInlinedIfNilIfNotNil);



smalltalk.addClass('IRInlinedIfTrue', smalltalk.IRInlinedSend, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor,"_visitIRInlinedIfTrue_",[self]);
return self}
}),
smalltalk.IRInlinedIfTrue);



smalltalk.addClass('IRInlinedIfTrueIfFalse', smalltalk.IRInlinedSend, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor,"_visitIRInlinedIfTrueIfFalse_",[self]);
return self}
}),
smalltalk.IRInlinedIfTrueIfFalse);



smalltalk.addClass('IRInlinedSequence', smalltalk.IRBlockSequence, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor,"_visitIRInlinedSequence_",[self]);
return self}
}),
smalltalk.IRInlinedSequence);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function (){
var self=this;
return true;
}
}),
smalltalk.IRInlinedSequence);



smalltalk.addClass('IRInliner', smalltalk.IRVisitor, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_assignmentInliner",
smalltalk.method({
selector: "assignmentInliner",
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.IRAssignmentInliner || IRAssignmentInliner),"_new",[]);
smalltalk.send($2,"_translator_",[self]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_nonLocalReturnInliner",
smalltalk.method({
selector: "nonLocalReturnInliner",
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.IRNonLocalReturnInliner || IRNonLocalReturnInliner),"_new",[]);
smalltalk.send($2,"_translator_",[self]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_returnInliner",
smalltalk.method({
selector: "returnInliner",
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.IRReturnInliner || IRReturnInliner),"_new",[]);
smalltalk.send($2,"_translator_",[self]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_sendInliner",
smalltalk.method({
selector: "sendInliner",
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.IRSendInliner || IRSendInliner),"_new",[]);
smalltalk.send($2,"_translator_",[self]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_shouldInlineAssignment_",
smalltalk.method({
selector: "shouldInlineAssignment:",
fn: function (anIRAssignment){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(anIRAssignment,"_isInlined",[]),"_not",[]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(anIRAssignment,"_instructions",[]),"_last",[]),"_isSend",[]),"_and_",[(function(){
return smalltalk.send(self,"_shouldInlineSend_",[smalltalk.send(smalltalk.send(anIRAssignment,"_instructions",[]),"_last",[])]);
})]);
})]);
return $1;
}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_shouldInlineReturn_",
smalltalk.method({
selector: "shouldInlineReturn:",
fn: function (anIRReturn){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(anIRReturn,"_isInlined",[]),"_not",[]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(anIRReturn,"_instructions",[]),"_first",[]),"_isSend",[]),"_and_",[(function(){
return smalltalk.send(self,"_shouldInlineSend_",[smalltalk.send(smalltalk.send(anIRReturn,"_instructions",[]),"_first",[])]);
})]);
})]);
return $1;
}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_shouldInlineSend_",
smalltalk.method({
selector: "shouldInlineSend:",
fn: function (anIRSend){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(anIRSend,"_isInlined",[]),"_not",[]),"_and_",[(function(){
return smalltalk.send((smalltalk.IRSendInliner || IRSendInliner),"_shouldInline_",[anIRSend]);
})]);
return $1;
}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_transformNonLocalReturn_",
smalltalk.method({
selector: "transformNonLocalReturn:",
fn: function (anIRNonLocalReturn){
var self=this;
var $1,$2,$3,$4;
var localReturn;
$1=smalltalk.send(smalltalk.send(anIRNonLocalReturn,"_scope",[]),"_canInlineNonLocalReturns",[]);
if(smalltalk.assert($1)){
smalltalk.send(smalltalk.send(smalltalk.send(anIRNonLocalReturn,"_scope",[]),"_methodScope",[]),"_removeNonLocalReturn_",[smalltalk.send(anIRNonLocalReturn,"_scope",[])]);
$2=smalltalk.send((smalltalk.IRReturn || IRReturn),"_new",[]);
smalltalk.send($2,"_scope_",[smalltalk.send(anIRNonLocalReturn,"_scope",[])]);
$3=smalltalk.send($2,"_yourself",[]);
localReturn=$3;
localReturn;
smalltalk.send(smalltalk.send(anIRNonLocalReturn,"_instructions",[]),"_do_",[(function(each){
return smalltalk.send(localReturn,"_add_",[each]);
})]);
smalltalk.send(anIRNonLocalReturn,"_replaceWith_",[localReturn]);
return localReturn;
};
$4=smalltalk.send(self,"_visitIRNonLocalReturn_",[anIRNonLocalReturn],smalltalk.IRVisitor);
return $4;
}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRAssignment_",
smalltalk.method({
selector: "visitIRAssignment:",
fn: function (anIRAssignment){
var self=this;
var $2,$1;
$2=smalltalk.send(self,"_shouldInlineAssignment_",[anIRAssignment]);
if(smalltalk.assert($2)){
$1=smalltalk.send(smalltalk.send(self,"_assignmentInliner",[]),"_inlineAssignment_",[anIRAssignment]);
} else {
$1=smalltalk.send(self,"_visitIRAssignment_",[anIRAssignment],smalltalk.IRVisitor);
};
return $1;
}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRNonLocalReturn_",
smalltalk.method({
selector: "visitIRNonLocalReturn:",
fn: function (anIRNonLocalReturn){
var self=this;
var $2,$1;
$2=smalltalk.send(self,"_shouldInlineReturn_",[anIRNonLocalReturn]);
if(smalltalk.assert($2)){
$1=smalltalk.send(smalltalk.send(self,"_nonLocalReturnInliner",[]),"_inlineReturn_",[anIRNonLocalReturn]);
} else {
$1=smalltalk.send(self,"_transformNonLocalReturn_",[anIRNonLocalReturn]);
};
return $1;
}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRReturn_",
smalltalk.method({
selector: "visitIRReturn:",
fn: function (anIRReturn){
var self=this;
var $2,$1;
$2=smalltalk.send(self,"_shouldInlineReturn_",[anIRReturn]);
if(smalltalk.assert($2)){
$1=smalltalk.send(smalltalk.send(self,"_returnInliner",[]),"_inlineReturn_",[anIRReturn]);
} else {
$1=smalltalk.send(self,"_visitIRReturn_",[anIRReturn],smalltalk.IRVisitor);
};
return $1;
}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRSend_",
smalltalk.method({
selector: "visitIRSend:",
fn: function (anIRSend){
var self=this;
var $2,$1;
$2=smalltalk.send(self,"_shouldInlineSend_",[anIRSend]);
if(smalltalk.assert($2)){
$1=smalltalk.send(smalltalk.send(self,"_sendInliner",[]),"_inlineSend_",[anIRSend]);
} else {
$1=smalltalk.send(self,"_visitIRSend_",[anIRSend],smalltalk.IRVisitor);
};
return $1;
}
}),
smalltalk.IRInliner);



smalltalk.addClass('IRInliningJSTranslator', smalltalk.IRJSTranslator, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_visitIRInlinedAssignment_",
smalltalk.method({
selector: "visitIRInlinedAssignment:",
fn: function (anIRInlinedAssignment){
var self=this;
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedAssignment,"_instructions",[]),"_last",[])]);
return self}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedClosure_",
smalltalk.method({
selector: "visitIRInlinedClosure:",
fn: function (anIRInlinedClosure){
var self=this;
smalltalk.send(smalltalk.send(anIRInlinedClosure,"_instructions",[]),"_do_",[(function(each){
return smalltalk.send(self,"_visit_",[each]);
})]);
return self}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfFalse_",
smalltalk.method({
selector: "visitIRInlinedIfFalse:",
fn: function (anIRInlinedIfFalse){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutIf_with_",[(function(){
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["! smalltalk.assert("]);
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfFalse,"_instructions",[]),"_first",[])]);
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[")"]);
}),(function(){
return smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfFalse,"_instructions",[]),"_last",[])]);
})]);
return self}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfNil_",
smalltalk.method({
selector: "visitIRInlinedIfNil:",
fn: function (anIRInlinedIfNil){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutIf_with_",[(function(){
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["($receiver = "]);
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfNil,"_instructions",[]),"_first",[])]);
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[") == nil || $receiver == undefined"]);
}),(function(){
return smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfNil,"_instructions",[]),"_last",[])]);
})]);
return self}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfNilIfNotNil_",
smalltalk.method({
selector: "visitIRInlinedIfNilIfNotNil:",
fn: function (anIRInlinedIfNilIfNotNil){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutIfElse_with_with_",[(function(){
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["($receiver = "]);
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfNilIfNotNil,"_instructions",[]),"_first",[])]);
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[") == nil || $receiver == undefined"]);
}),(function(){
return smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfNilIfNotNil,"_instructions",[]),"_second",[])]);
}),(function(){
return smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfNilIfNotNil,"_instructions",[]),"_third",[])]);
})]);
return self}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfTrue_",
smalltalk.method({
selector: "visitIRInlinedIfTrue:",
fn: function (anIRInlinedIfTrue){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutIf_with_",[(function(){
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["smalltalk.assert("]);
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfTrue,"_instructions",[]),"_first",[])]);
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[")"]);
}),(function(){
return smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfTrue,"_instructions",[]),"_last",[])]);
})]);
return self}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfTrueIfFalse_",
smalltalk.method({
selector: "visitIRInlinedIfTrueIfFalse:",
fn: function (anIRInlinedIfTrueIfFalse){
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
return self}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedNonLocalReturn_",
smalltalk.method({
selector: "visitIRInlinedNonLocalReturn:",
fn: function (anIRInlinedReturn){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutStatementWith_",[(function(){
return smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedReturn,"_instructions",[]),"_last",[])]);
})]);
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutNonLocalReturnWith_",[(function(){
})]);
return self}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedReturn_",
smalltalk.method({
selector: "visitIRInlinedReturn:",
fn: function (anIRInlinedReturn){
var self=this;
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedReturn,"_instructions",[]),"_last",[])]);
return self}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedSequence_",
smalltalk.method({
selector: "visitIRInlinedSequence:",
fn: function (anIRInlinedSequence){
var self=this;
smalltalk.send(smalltalk.send(anIRInlinedSequence,"_instructions",[]),"_do_",[(function(each){
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutStatementWith_",[(function(){
return smalltalk.send(self,"_visit_",[each]);
})]);
})]);
return self}
}),
smalltalk.IRInliningJSTranslator);



smalltalk.addClass('IRSendInliner', smalltalk.Object, ['send', 'translator'], 'Compiler-Inlining');
smalltalk.addMethod(
"_ifFalse_",
smalltalk.method({
selector: "ifFalse:",
fn: function (anIRInstruction){
var self=this;
var $1;
$1=smalltalk.send(self,"_inlinedSend_with_",[smalltalk.send((smalltalk.IRInlinedIfFalse || IRInlinedIfFalse),"_new",[]),anIRInstruction]);
return $1;
}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifFalse_ifTrue_",
smalltalk.method({
selector: "ifFalse:ifTrue:",
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
var $1;
$1=smalltalk.send(self,"_perform_withArguments_",[smalltalk.symbolFor("ifTrue:ifFalse:"),[anotherIRInstruction,anIRInstruction]]);
return $1;
}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifNil_",
smalltalk.method({
selector: "ifNil:",
fn: function (anIRInstruction){
var self=this;
var $2,$3,$4,$5,$1;
$2=smalltalk.send((smalltalk.IRClosure || IRClosure),"_new",[]);
smalltalk.send($2,"_scope_",[smalltalk.send(smalltalk.send(anIRInstruction,"_scope",[]),"_copy",[])]);
$3=smalltalk.send((smalltalk.IRBlockSequence || IRBlockSequence),"_new",[]);
smalltalk.send($3,"_add_",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_send",[]),"_instructions",[]),"_first",[])]);
$4=smalltalk.send($3,"_yourself",[]);
smalltalk.send($2,"_add_",[$4]);
$5=smalltalk.send($2,"_yourself",[]);
$1=smalltalk.send(self,"_inlinedSend_with_with_",[smalltalk.send((smalltalk.IRInlinedIfNilIfNotNil || IRInlinedIfNilIfNotNil),"_new",[]),anIRInstruction,$5]);
return $1;
}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifNil_ifNotNil_",
smalltalk.method({
selector: "ifNil:ifNotNil:",
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
var $1;
$1=smalltalk.send(self,"_inlinedSend_with_with_",[smalltalk.send((smalltalk.IRInlinedIfNilIfNotNil || IRInlinedIfNilIfNotNil),"_new",[]),anIRInstruction,anotherIRInstruction]);
return $1;
}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifNotNil_",
smalltalk.method({
selector: "ifNotNil:",
fn: function (anIRInstruction){
var self=this;
var $2,$3,$4,$5,$1;
$2=smalltalk.send((smalltalk.IRClosure || IRClosure),"_new",[]);
smalltalk.send($2,"_scope_",[smalltalk.send(smalltalk.send(anIRInstruction,"_scope",[]),"_copy",[])]);
$3=smalltalk.send((smalltalk.IRBlockSequence || IRBlockSequence),"_new",[]);
smalltalk.send($3,"_add_",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_send",[]),"_instructions",[]),"_first",[])]);
$4=smalltalk.send($3,"_yourself",[]);
smalltalk.send($2,"_add_",[$4]);
$5=smalltalk.send($2,"_yourself",[]);
$1=smalltalk.send(self,"_inlinedSend_with_with_",[smalltalk.send((smalltalk.IRInlinedIfNilIfNotNil || IRInlinedIfNilIfNotNil),"_new",[]),$5,anIRInstruction]);
return $1;
}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifNotNil_ifNil_",
smalltalk.method({
selector: "ifNotNil:ifNil:",
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
var $1;
$1=smalltalk.send(self,"_inlinedSend_with_with_",[smalltalk.send((smalltalk.IRInlinedIfNilIfNotNil || IRInlinedIfNilIfNotNil),"_new",[]),anotherIRInstruction,anIRInstruction]);
return $1;
}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifTrue_",
smalltalk.method({
selector: "ifTrue:",
fn: function (anIRInstruction){
var self=this;
var $1;
$1=smalltalk.send(self,"_inlinedSend_with_",[smalltalk.send((smalltalk.IRInlinedIfTrue || IRInlinedIfTrue),"_new",[]),anIRInstruction]);
return $1;
}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifTrue_ifFalse_",
smalltalk.method({
selector: "ifTrue:ifFalse:",
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
var $1;
$1=smalltalk.send(self,"_inlinedSend_with_with_",[smalltalk.send((smalltalk.IRInlinedIfTrueIfFalse || IRInlinedIfTrueIfFalse),"_new",[]),anIRInstruction,anotherIRInstruction]);
return $1;
}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlineClosure_",
smalltalk.method({
selector: "inlineClosure:",
fn: function (anIRClosure){
var self=this;
var $1,$2;
var inlinedClosure;
var sequence;
var statements;
inlinedClosure=smalltalk.send(self,"_inlinedClosure",[]);
smalltalk.send(inlinedClosure,"_scope_",[smalltalk.send(anIRClosure,"_scope",[])]);
smalltalk.send(smalltalk.send(anIRClosure,"_instructions",[]),"_do_",[(function(each){
$1=smalltalk.send(each,"_isSequence",[]);
if(! smalltalk.assert($1)){
return smalltalk.send(inlinedClosure,"_add_",[each]);
};
})]);
sequence=smalltalk.send(self,"_inlinedSequence",[]);
smalltalk.send(inlinedClosure,"_add_",[sequence]);
statements=smalltalk.send(smalltalk.send(smalltalk.send(anIRClosure,"_instructions",[]),"_last",[]),"_instructions",[]);
smalltalk.send(statements,"_ifNotEmpty_",[(function(){
smalltalk.send(smalltalk.send(statements,"_allButLast",[]),"_do_",[(function(each){
return smalltalk.send(sequence,"_add_",[each]);
})]);
$2=smalltalk.send(smalltalk.send(smalltalk.send(statements,"_last",[]),"_isReturn",[]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(statements,"_last",[]),"_isBlockReturn",[]);
})]);
if(smalltalk.assert($2)){
return smalltalk.send(sequence,"_add_",[smalltalk.send(smalltalk.send(smalltalk.send(statements,"_last",[]),"_instructions",[]),"_first",[])]);
} else {
return smalltalk.send(sequence,"_add_",[smalltalk.send(statements,"_last",[])]);
};
})]);
return inlinedClosure;
}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlineSend_",
smalltalk.method({
selector: "inlineSend:",
fn: function (anIRSend){
var self=this;
var $1;
smalltalk.send(self,"_send_",[anIRSend]);
$1=smalltalk.send(self,"_perform_withArguments_",[smalltalk.send(smalltalk.send(self,"_send",[]),"_selector",[]),smalltalk.send(smalltalk.send(smalltalk.send(self,"_send",[]),"_instructions",[]),"_allButFirst",[])]);
return $1;
}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedClosure",
smalltalk.method({
selector: "inlinedClosure",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.IRInlinedClosure || IRInlinedClosure),"_new",[]);
return $1;
}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedSend_with_",
smalltalk.method({
selector: "inlinedSend:with:",
fn: function (inlinedSend,anIRInstruction){
var self=this;
var $1,$2,$3;
var inlinedClosure;
$1=smalltalk.send(anIRInstruction,"_isClosure",[]);
if(! smalltalk.assert($1)){
smalltalk.send(self,"_inliningError_",["Message argument should be a block"]);
};
$2=smalltalk.send(smalltalk.send(smalltalk.send(anIRInstruction,"_arguments",[]),"_size",[]),"__eq",[(0)]);
if(! smalltalk.assert($2)){
smalltalk.send(self,"_inliningError_",["Inlined block should have zero argument"]);
};
inlinedClosure=smalltalk.send(smalltalk.send(self,"_translator",[]),"_visit_",[smalltalk.send(self,"_inlineClosure_",[anIRInstruction])]);
smalltalk.send(inlinedSend,"_add_",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_send",[]),"_instructions",[]),"_first",[])]);
$3=smalltalk.send(inlinedSend,"_add_",[inlinedClosure]);
smalltalk.send(smalltalk.send(self,"_send",[]),"_replaceWith_",[inlinedSend]);
return inlinedSend;
}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedSend_with_with_",
smalltalk.method({
selector: "inlinedSend:with:with:",
fn: function (inlinedSend,anIRInstruction,anotherIRInstruction){
var self=this;
var $1,$2,$3,$4,$5;
var inlinedClosure1;
var inlinedClosure2;
$1=smalltalk.send(anIRInstruction,"_isClosure",[]);
if(! smalltalk.assert($1)){
smalltalk.send(self,"_inliningError_",["Message argument should be a block"]);
};
$2=smalltalk.send(smalltalk.send(smalltalk.send(anIRInstruction,"_arguments",[]),"_size",[]),"__eq",[(0)]);
if(! smalltalk.assert($2)){
smalltalk.send(self,"_inliningError_",["Inlined block should have zero argument"]);
};
$3=smalltalk.send(anotherIRInstruction,"_isClosure",[]);
if(! smalltalk.assert($3)){
smalltalk.send(self,"_inliningError_",["Message argument should be a block"]);
};
$4=smalltalk.send(smalltalk.send(smalltalk.send(anotherIRInstruction,"_arguments",[]),"_size",[]),"__eq",[(0)]);
if(! smalltalk.assert($4)){
smalltalk.send(self,"_inliningError_",["Inlined block should have zero argument"]);
};
inlinedClosure1=smalltalk.send(smalltalk.send(self,"_translator",[]),"_visit_",[smalltalk.send(self,"_inlineClosure_",[anIRInstruction])]);
inlinedClosure2=smalltalk.send(smalltalk.send(self,"_translator",[]),"_visit_",[smalltalk.send(self,"_inlineClosure_",[anotherIRInstruction])]);
smalltalk.send(inlinedSend,"_add_",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_send",[]),"_instructions",[]),"_first",[])]);
smalltalk.send(inlinedSend,"_add_",[inlinedClosure1]);
$5=smalltalk.send(inlinedSend,"_add_",[inlinedClosure2]);
smalltalk.send(smalltalk.send(self,"_send",[]),"_replaceWith_",[inlinedSend]);
return inlinedSend;
}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedSequence",
smalltalk.method({
selector: "inlinedSequence",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.IRInlinedSequence || IRInlinedSequence),"_new",[]);
return $1;
}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inliningError_",
smalltalk.method({
selector: "inliningError:",
fn: function (aString){
var self=this;
smalltalk.send((smalltalk.InliningError || InliningError),"_signal_",[aString]);
return self}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_send",
smalltalk.method({
selector: "send",
fn: function (){
var self=this;
return self["@send"];
}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_send_",
smalltalk.method({
selector: "send:",
fn: function (anIRSend){
var self=this;
self["@send"]=anIRSend;
return self}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_translator",
smalltalk.method({
selector: "translator",
fn: function (){
var self=this;
return self["@translator"];
}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_translator_",
smalltalk.method({
selector: "translator:",
fn: function (anASTTranslator){
var self=this;
self["@translator"]=anASTTranslator;
return self}
}),
smalltalk.IRSendInliner);


smalltalk.addMethod(
"_inlinedSelectors",
smalltalk.method({
selector: "inlinedSelectors",
fn: function (){
var self=this;
return ["ifTrue:", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:", "ifNil:", "ifNotNil:", "ifNil:ifNotNil:", "ifNotNil:ifNil"];
}
}),
smalltalk.IRSendInliner.klass);

smalltalk.addMethod(
"_shouldInline_",
smalltalk.method({
selector: "shouldInline:",
fn: function (anIRInstruction){
var self=this;
var $1,$2;
var $early={};
try {
$1=smalltalk.send(smalltalk.send(self,"_inlinedSelectors",[]),"_includes_",[smalltalk.send(anIRInstruction,"_selector",[])]);
if(! smalltalk.assert($1)){
return false;
};
smalltalk.send(smalltalk.send(smalltalk.send(anIRInstruction,"_instructions",[]),"_allButFirst",[]),"_do_",[(function(each){
$2=smalltalk.send(each,"_isClosure",[]);
if(! smalltalk.assert($2)){
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
fn: function (){
var self=this;
return self["@assignment"];
}
}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
"_assignment_",
smalltalk.method({
selector: "assignment:",
fn: function (aNode){
var self=this;
self["@assignment"]=aNode;
return self}
}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
"_inlineAssignment_",
smalltalk.method({
selector: "inlineAssignment:",
fn: function (anIRAssignment){
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
"_inlineClosure_",
smalltalk.method({
selector: "inlineClosure:",
fn: function (anIRClosure){
var self=this;
var $1,$2,$3;
var inlinedClosure;
var statements;
inlinedClosure=smalltalk.send(self,"_inlineClosure_",[anIRClosure],smalltalk.IRSendInliner);
statements=smalltalk.send(smalltalk.send(smalltalk.send(inlinedClosure,"_instructions",[]),"_last",[]),"_instructions",[]);
smalltalk.send(statements,"_ifNotEmpty_",[(function(){
$1=smalltalk.send(smalltalk.send(statements,"_last",[]),"_canBeAssigned",[]);
if(smalltalk.assert($1)){
$2=smalltalk.send((smalltalk.IRAssignment || IRAssignment),"_new",[]);
smalltalk.send($2,"_add_",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_assignment",[]),"_instructions",[]),"_first",[])]);
smalltalk.send($2,"_add_",[smalltalk.send(smalltalk.send(statements,"_last",[]),"_copy",[])]);
$3=smalltalk.send($2,"_yourself",[]);
return smalltalk.send(smalltalk.send(statements,"_last",[]),"_replaceWith_",[$3]);
};
})]);
return inlinedClosure;
}
}),
smalltalk.IRAssignmentInliner);



smalltalk.addClass('IRNonLocalReturnInliner', smalltalk.IRSendInliner, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_inlineClosure_",
smalltalk.method({
selector: "inlineClosure:",
fn: function (anIRClosure){
var self=this;
var $1;
$1=smalltalk.send(self,"_inlineCLosure_",[anIRClosure],smalltalk.IRSendInliner);
return $1;
}
}),
smalltalk.IRNonLocalReturnInliner);

smalltalk.addMethod(
"_inlinedReturn",
smalltalk.method({
selector: "inlinedReturn",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.IRInlinedNonLocalReturn || IRInlinedNonLocalReturn),"_new",[]);
return $1;
}
}),
smalltalk.IRNonLocalReturnInliner);



smalltalk.addClass('IRReturnInliner', smalltalk.IRSendInliner, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_inlineClosure_",
smalltalk.method({
selector: "inlineClosure:",
fn: function (anIRClosure){
var self=this;
var $1,$2,$3;
var closure;
var statements;
closure=smalltalk.send(self,"_inlineClosure_",[anIRClosure],smalltalk.IRSendInliner);
statements=smalltalk.send(smalltalk.send(smalltalk.send(closure,"_instructions",[]),"_last",[]),"_instructions",[]);
smalltalk.send(statements,"_ifNotEmpty_",[(function(){
$1=smalltalk.send(smalltalk.send(statements,"_last",[]),"_isReturn",[]);
if(! smalltalk.assert($1)){
$2=smalltalk.send((smalltalk.IRReturn || IRReturn),"_new",[]);
smalltalk.send($2,"_add_",[smalltalk.send(smalltalk.send(statements,"_last",[]),"_copy",[])]);
$3=smalltalk.send($2,"_yourself",[]);
return smalltalk.send(smalltalk.send(statements,"_last",[]),"_replaceWith_",[$3]);
};
})]);
return closure;
}
}),
smalltalk.IRReturnInliner);

smalltalk.addMethod(
"_inlineReturn_",
smalltalk.method({
selector: "inlineReturn:",
fn: function (anIRReturn){
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
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.IRInlinedReturn || IRInlinedReturn),"_new",[]);
return $1;
}
}),
smalltalk.IRReturnInliner);



smalltalk.addClass('InliningCodeGenerator', smalltalk.CodeGenerator, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
fn: function (aNode){
var self=this;
var $2,$3,$1;
var ir;
var stream;
smalltalk.send(smalltalk.send(self,"_semanticAnalyzer",[]),"_visit_",[aNode]);
ir=smalltalk.send(smalltalk.send(self,"_translator",[]),"_visit_",[aNode]);
smalltalk.send(smalltalk.send(self,"_inliner",[]),"_visit_",[ir]);
$2=smalltalk.send(self,"_irTranslator",[]);
smalltalk.send($2,"_visit_",[ir]);
$3=smalltalk.send($2,"_contents",[]);
$1=$3;
return $1;
}
}),
smalltalk.InliningCodeGenerator);

smalltalk.addMethod(
"_inliner",
smalltalk.method({
selector: "inliner",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.IRInliner || IRInliner),"_new",[]);
return $1;
}
}),
smalltalk.InliningCodeGenerator);

smalltalk.addMethod(
"_irTranslator",
smalltalk.method({
selector: "irTranslator",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.IRInliningJSTranslator || IRInliningJSTranslator),"_new",[]);
return $1;
}
}),
smalltalk.InliningCodeGenerator);



