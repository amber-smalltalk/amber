smalltalk.addPackage('Compiler-Inlining', {});
smalltalk.addClass('IRInlinedAssignment', smalltalk.IRAssignment, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.send(aVisitor, "_visitIRInlinedAssignment_", [self]);
return self;}
}),
smalltalk.IRInlinedAssignment);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.IRInlinedAssignment);



smalltalk.addClass('IRInlinedClosure', smalltalk.IRClosure, ['assignTo'], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRInlinedClosure_", [self]);
return self;}
}),
smalltalk.IRInlinedClosure);

smalltalk.addMethod(
"_assignTo",
smalltalk.method({
selector: "assignTo",
fn: function () {
var self=this;
return self['@assignTo'];
return self;}
}),
smalltalk.IRInlinedClosure);

smalltalk.addMethod(
"_assignTo_",
smalltalk.method({
selector: "assignTo:",
fn: function (aScopeVar){
var self=this;
(self['@assignTo']=aScopeVar);
return self;}
}),
smalltalk.IRInlinedClosure);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.IRInlinedClosure);



smalltalk.addClass('IRInlinedNonLocalReturn', smalltalk.IRReturn, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.send(aVisitor, "_visitIRInlinedNonLocalReturn_", [self]);
return self;}
}),
smalltalk.IRInlinedNonLocalReturn);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.IRInlinedNonLocalReturn);



smalltalk.addClass('IRInlinedSend', smalltalk.IRSend, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitInlinedSend_", [self]);
return self;}
}),
smalltalk.IRInlinedSend);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.IRInlinedSend);



smalltalk.addClass('IRInlinedIfFalse', smalltalk.IRInlinedSend, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitIRInlinedIfFalse_", [self]);
return self;}
}),
smalltalk.IRInlinedIfFalse);



smalltalk.addClass('IRInlinedIfTrue', smalltalk.IRInlinedSend, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRInlinedIfTrue_", [self]);
return self;}
}),
smalltalk.IRInlinedIfTrue);



smalltalk.addClass('IRInliner', smalltalk.IRVisitor, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_assignmentInliner",
smalltalk.method({
selector: "assignmentInliner",
fn: function () {
var self=this;
return (function($rec){smalltalk.send($rec, "_translator_", [self]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.IRAssignmentInliner || IRAssignmentInliner), "_new", []));
return self;}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_sendInliner",
smalltalk.method({
selector: "sendInliner",
fn: function () {
var self=this;
return (function($rec){smalltalk.send($rec, "_translator_", [self]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.IRSendInliner || IRSendInliner), "_new", []));
return self;}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_shouldInlineAssignment_",
smalltalk.method({
selector: "shouldInlineAssignment:",
fn: function (anIRAssignment){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(anIRAssignment, "_isInlined", []), "_not", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(anIRAssignment, "_instructions", []), "_last", []), "_isSend", []), "_and_", [(function(){return smalltalk.send(self, "_shouldInlineSend_", [smalltalk.send(smalltalk.send(anIRAssignment, "_instructions", []), "_last", [])]);})]);})]);
return self;}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_shouldInlineSend_",
smalltalk.method({
selector: "shouldInlineSend:",
fn: function (anIRSend){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(anIRSend, "_isInlined", []), "_not", []), "_and_", [(function(){return smalltalk.send(smalltalk.send((smalltalk.IRSendInliner || IRSendInliner), "_inlinedSelectors", []), "_includes_", [smalltalk.send(anIRSend, "_selector", [])]);})]);
return self;}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRAssignment_",
smalltalk.method({
selector: "visitIRAssignment:",
fn: function (anIRAssignment){
var self=this;
((($receiver = smalltalk.send(self, "_shouldInlineAssignment_", [anIRAssignment])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_assignmentInliner", []), "_inlineAssignment_", [anIRAssignment]);})() : (function(){return smalltalk.send(self, "_visitIRAssignment_", [anIRAssignment], smalltalk.IRInliner.superclass || nil);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_assignmentInliner", []), "_inlineAssignment_", [anIRAssignment]);}), (function(){return smalltalk.send(self, "_visitIRAssignment_", [anIRAssignment], smalltalk.IRInliner.superclass || nil);})]));
return self;}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRNonLocalReturn_",
smalltalk.method({
selector: "visitIRNonLocalReturn:",
fn: function (anIRNonLocalReturn){
var self=this;
var localReturn=nil;
((($receiver = smalltalk.send(smalltalk.send(anIRNonLocalReturn, "_scope", []), "_canInlineNonLocalReturns", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(smalltalk.send(smalltalk.send(anIRNonLocalReturn, "_scope", []), "_methodScope", []), "_removeNonLocalReturn_", [smalltalk.send(anIRNonLocalReturn, "_scope", [])]);(localReturn=(function($rec){smalltalk.send($rec, "_scope_", [smalltalk.send(anIRNonLocalReturn, "_scope", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.IRInlinedNonLocalReturn || IRInlinedNonLocalReturn), "_new", [])));smalltalk.send(smalltalk.send(anIRNonLocalReturn, "_instructions", []), "_do_", [(function(each){return smalltalk.send(localReturn, "_add_", [each]);})]);return smalltalk.send(anIRNonLocalReturn, "_replaceWith_", [localReturn]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(smalltalk.send(smalltalk.send(anIRNonLocalReturn, "_scope", []), "_methodScope", []), "_removeNonLocalReturn_", [smalltalk.send(anIRNonLocalReturn, "_scope", [])]);(localReturn=(function($rec){smalltalk.send($rec, "_scope_", [smalltalk.send(anIRNonLocalReturn, "_scope", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.IRInlinedNonLocalReturn || IRInlinedNonLocalReturn), "_new", [])));smalltalk.send(smalltalk.send(anIRNonLocalReturn, "_instructions", []), "_do_", [(function(each){return smalltalk.send(localReturn, "_add_", [each]);})]);return smalltalk.send(anIRNonLocalReturn, "_replaceWith_", [localReturn]);})]));
smalltalk.send(self, "_visitIRNonLocalReturn_", [anIRNonLocalReturn], smalltalk.IRInliner.superclass || nil);
return self;}
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRSend_",
smalltalk.method({
selector: "visitIRSend:",
fn: function (anIRSend){
var self=this;
((($receiver = smalltalk.send(self, "_shouldInlineSend_", [anIRSend])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_sendInliner", []), "_inlineSend_", [anIRSend]);})() : (function(){return smalltalk.send(self, "_visitIRSend_", [anIRSend], smalltalk.IRInliner.superclass || nil);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_sendInliner", []), "_inlineSend_", [anIRSend]);}), (function(){return smalltalk.send(self, "_visitIRSend_", [anIRSend], smalltalk.IRInliner.superclass || nil);})]));
return self;}
}),
smalltalk.IRInliner);



smalltalk.addClass('IRInliningJSTranslator', smalltalk.IRJSTranslator, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_visitIRInlinedAssignment_",
smalltalk.method({
selector: "visitIRInlinedAssignment:",
fn: function (anIRInlinedAssignment){
var self=this;
smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRInlinedAssignment, "_instructions", []), "_last", [])]);
return self;}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedClosure_",
smalltalk.method({
selector: "visitIRInlinedClosure:",
fn: function (anIRInlinedClosure){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(anIRInlinedClosure, "_instructions", []), "_allButLast", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_", [each]);})]);
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(anIRInlinedClosure, "_assignTo", []), "_notNil", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(anIRInlinedClosure, "_instructions", []), "_last", []), "_canBeAssigned", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(anIRInlinedClosure, "_assignTo", []), "_variable", []), "_alias", [])]);return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAssignment", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(anIRInlinedClosure, "_assignTo", []), "_variable", []), "_alias", [])]);return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAssignment", []);})]));
smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRInlinedClosure, "_instructions", []), "_last", [])]);
return self;}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfFalse_",
smalltalk.method({
selector: "visitIRInlinedIfFalse:",
fn: function (anIRInlinedIfFalse){
var self=this;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutIf_with_", [(function(){smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", ["!"]);return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRInlinedIfFalse, "_instructions", []), "_first", [])]);}), (function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRInlinedIfFalse, "_instructions", []), "_last", [])]);})]);
return self;}
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfTrue_",
smalltalk.method({
selector: "visitIRInlinedIfTrue:",
fn: function (anIRInlinedIfTrue){
var self=this;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutIf_with_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRInlinedIfTrue, "_instructions", []), "_first", [])]);}), (function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRInlinedIfTrue, "_instructions", []), "_last", [])]);})]);
return self;}
}),
smalltalk.IRInliningJSTranslator);



smalltalk.addClass('IRSendInliner', smalltalk.Object, ['send', 'translator'], 'Compiler-Inlining');
smalltalk.addMethod(
"_ifFalse_",
smalltalk.method({
selector: "ifFalse:",
fn: function (anIRInstruction){
var self=this;
var inlinedSend=nil;
var inlinedClosure=nil;
((($receiver = smalltalk.send(anIRInstruction, "_isClosure", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_inliningError_", ["Message argument should be a block"]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_inliningError_", ["Message argument should be a block"]);})]));
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(anIRInstruction, "_arguments", []), "_size", []), "__eq", [(0)])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_inliningError_", ["Inlined block should have zero argument"]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_inliningError_", ["Inlined block should have zero argument"]);})]));
(inlinedClosure=smalltalk.send(self, "_inlineClosure_", [anIRInstruction]));
(inlinedSend=smalltalk.send((smalltalk.IRInlinedIfFalse || IRInlinedIfFalse), "_new", []));
(function($rec){smalltalk.send($rec, "_add_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_send", []), "_instructions", []), "_first", [])]);return smalltalk.send($rec, "_add_", [inlinedClosure]);})(inlinedSend);
smalltalk.send(smalltalk.send(self, "_send", []), "_replaceWith_", [inlinedSend]);
return inlinedSend;
return self;}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifTrue_",
smalltalk.method({
selector: "ifTrue:",
fn: function (anIRInstruction){
var self=this;
var inlinedSend=nil;
var inlinedClosure=nil;
((($receiver = smalltalk.send(anIRInstruction, "_isClosure", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_inliningError_", ["Message argument should be a block"]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_inliningError_", ["Message argument should be a block"]);})]));
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(anIRInstruction, "_arguments", []), "_size", []), "__eq", [(0)])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_inliningError_", ["Inlined block should have zero argument"]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_inliningError_", ["Inlined block should have zero argument"]);})]));
(inlinedClosure=smalltalk.send(self, "_inlineClosure_", [anIRInstruction]));
(inlinedSend=smalltalk.send((smalltalk.IRInlinedIfTrue || IRInlinedIfTrue), "_new", []));
(function($rec){smalltalk.send($rec, "_add_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_send", []), "_instructions", []), "_first", [])]);return smalltalk.send($rec, "_add_", [inlinedClosure]);})(inlinedSend);
smalltalk.send(smalltalk.send(self, "_send", []), "_replaceWith_", [inlinedSend]);
return inlinedSend;
return self;}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlineClosure_",
smalltalk.method({
selector: "inlineClosure:",
fn: function (anIRClosure){
var self=this;
var inlinedClosure=nil;
(inlinedClosure=smalltalk.send(self, "_inlinedClosure", []));
smalltalk.send(inlinedClosure, "_scope_", [smalltalk.send(anIRClosure, "_scope", [])]);
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(anIRClosure, "_instructions", []), "_first", []), "_instructions", []), "_do_", [(function(each){return smalltalk.send(inlinedClosure, "_add_", [smalltalk.send(smalltalk.send(self, "_translator", []), "_visit_", [each])]);})]);
return inlinedClosure;
return self;}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlineSend_",
smalltalk.method({
selector: "inlineSend:",
fn: function (anIRSend){
var self=this;
smalltalk.send(self, "_send_", [anIRSend]);
smalltalk.send(self, "_perform_withArguments_", [smalltalk.send(smalltalk.send(self, "_send", []), "_selector", []), smalltalk.send(smalltalk.send(smalltalk.send(self, "_send", []), "_instructions", []), "_allButFirst", [])]);
return self;}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedClosure",
smalltalk.method({
selector: "inlinedClosure",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.IRInlinedClosure || IRInlinedClosure), "_new", []);
return self;}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inliningError_",
smalltalk.method({
selector: "inliningError:",
fn: function (aString) {
var self=this;
smalltalk.send((smalltalk.InliningError || InliningError), "_signal_", [aString]);
return self;}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_send",
smalltalk.method({
selector: "send",
fn: function () {
var self=this;
return self['@send'];
return self;}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_send_",
smalltalk.method({
selector: "send:",
fn: function (anIRSend) {
var self=this;
(self['@send']=anIRSend);
return self;}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_translator",
smalltalk.method({
selector: "translator",
fn: function () {
var self=this;
return self['@translator'];
return self;}
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_translator_",
smalltalk.method({
selector: "translator:",
fn: function (anASTTranslator) {
var self=this;
(self['@translator']=anASTTranslator);
return self;}
}),
smalltalk.IRSendInliner);


smalltalk.addMethod(
"_inlinedSelectors",
smalltalk.method({
selector: "inlinedSelectors",
fn: function (){
var self=this;
return ["ifTrue:", "ifFalse:"];
return self;}
}),
smalltalk.IRSendInliner.klass);


smalltalk.addClass('IRAssignmentInliner', smalltalk.IRSendInliner, ['assignment'], 'Compiler-Inlining');
smalltalk.addMethod(
"_assignment",
smalltalk.method({
selector: "assignment",
fn: function () {
var self=this;
return self['@assignment'];
return self;}
}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
"_assignment_",
smalltalk.method({
selector: "assignment:",
fn: function (aNode) {
var self=this;
(self['@assignment']=aNode);
return self;}
}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
"_inlineAssignment_",
smalltalk.method({
selector: "inlineAssignment:",
fn: function (anIRAssignment){
var self=this;
var inlinedAssignment=nil;
smalltalk.send(self, "_assignment_", [anIRAssignment]);
(inlinedAssignment=smalltalk.send((smalltalk.IRInlinedAssignment || IRInlinedAssignment), "_new", []));
smalltalk.send(smalltalk.send(anIRAssignment, "_instructions", []), "_do_", [(function(each){return smalltalk.send(inlinedAssignment, "_add_", [each]);})]);
smalltalk.send(anIRAssignment, "_replaceWith_", [inlinedAssignment]);
smalltalk.send(self, "_inlineSend_", [smalltalk.send(smalltalk.send(inlinedAssignment, "_instructions", []), "_last", [])]);
return inlinedAssignment;
return self;}
}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
"_inlinedClosure",
smalltalk.method({
selector: "inlinedClosure",
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_assignTo_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_assignment", []), "_instructions", []), "_first", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_inlinedClosure", [], smalltalk.IRAssignmentInliner.superclass || nil));
return self;}
}),
smalltalk.IRAssignmentInliner);



smalltalk.addClass('InliningCodeGenerator', smalltalk.CodeGenerator, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
fn: function (aNode){
var self=this;
var ir=nil;
var stream=nil;
smalltalk.send(smalltalk.send(self, "_semanticAnalyzer", []), "_visit_", [aNode]);
(ir=smalltalk.send(smalltalk.send(self, "_translator", []), "_visit_", [aNode]));
smalltalk.send(smalltalk.send(self, "_inliner", []), "_visit_", [ir]);
return (function($rec){smalltalk.send($rec, "_visit_", [ir]);return smalltalk.send($rec, "_contents", []);})(smalltalk.send(self, "_irTranslator", []));
return self;}
}),
smalltalk.InliningCodeGenerator);

smalltalk.addMethod(
"_inliner",
smalltalk.method({
selector: "inliner",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.IRInliner || IRInliner), "_new", []);
return self;}
}),
smalltalk.InliningCodeGenerator);

smalltalk.addMethod(
"_irTranslator",
smalltalk.method({
selector: "irTranslator",
fn: function () {
var self=this;
return smalltalk.send((smalltalk.IRInliningJSTranslator || IRInliningJSTranslator), "_new", []);
return self;}
}),
smalltalk.InliningCodeGenerator);



