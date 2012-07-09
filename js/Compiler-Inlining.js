smalltalk.addPackage('Compiler-Inlining', {});
smalltalk.addClass('IRInlinedAssignment', smalltalk.IRAssignment, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor, "_visitIRInlinedAssignment_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRInlinedAssignment: self",
messageSends: ["visitIRInlinedAssignment:"],
referencedClasses: []
}),
smalltalk.IRInlinedAssignment);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
category: 'testing',
fn: function () {
var self=this;
return true;
return self;},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedAssignment);



smalltalk.addClass('IRInlinedClosure', smalltalk.IRClosure, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRInlinedClosure_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedClosure: self",
messageSends: ["visitIRInlinedClosure:"],
referencedClasses: []
}),
smalltalk.IRInlinedClosure);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
category: 'testing',
fn: function () {
var self=this;
return true;
return self;},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedClosure);



smalltalk.addClass('IRInlinedReturn', smalltalk.IRReturn, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor, "_visitIRInlinedReturn_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRInlinedReturn: self",
messageSends: ["visitIRInlinedReturn:"],
referencedClasses: []
}),
smalltalk.IRInlinedReturn);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
category: 'testing',
fn: function () {
var self=this;
return true;
return self;},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedReturn);



smalltalk.addClass('IRInlinedNonLocalReturn', smalltalk.IRInlinedReturn, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor, "_visitIRInlinedNonLocalReturn_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRInlinedNonLocalReturn: self",
messageSends: ["visitIRInlinedNonLocalReturn:"],
referencedClasses: []
}),
smalltalk.IRInlinedNonLocalReturn);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
category: 'testing',
fn: function () {
var self=this;
return true;
return self;},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedNonLocalReturn);



smalltalk.addClass('IRInlinedSend', smalltalk.IRSend, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitInlinedSend_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitInlinedSend: self",
messageSends: ["visitInlinedSend:"],
referencedClasses: []
}),
smalltalk.IRInlinedSend);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
category: 'testing',
fn: function () {
var self=this;
return true;
return self;},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedSend);



smalltalk.addClass('IRInlinedIfFalse', smalltalk.IRInlinedSend, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRInlinedIfFalse_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedIfFalse: self",
messageSends: ["visitIRInlinedIfFalse:"],
referencedClasses: []
}),
smalltalk.IRInlinedIfFalse);



smalltalk.addClass('IRInlinedIfTrue', smalltalk.IRInlinedSend, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRInlinedIfTrue_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedIfTrue: self",
messageSends: ["visitIRInlinedIfTrue:"],
referencedClasses: []
}),
smalltalk.IRInlinedIfTrue);



smalltalk.addClass('IRInlinedSequence', smalltalk.IRBlockSequence, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
smalltalk.send(aVisitor, "_visitIRInlinedSequence_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedSequence: self",
messageSends: ["visitIRInlinedSequence:"],
referencedClasses: []
}),
smalltalk.IRInlinedSequence);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
category: 'testing',
fn: function () {
var self=this;
return true;
return self;},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedSequence);



smalltalk.addClass('IRAssigningInlinedSequence', smalltalk.IRInlinedSequence, ['assignTo'], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'accessing',
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor, "_visitIRAssigningInlinedSequence_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRAssigningInlinedSequence: self",
messageSends: ["visitIRAssigningInlinedSequence:"],
referencedClasses: []
}),
smalltalk.IRAssigningInlinedSequence);

smalltalk.addMethod(
"_assignTo",
smalltalk.method({
selector: "assignTo",
category: 'accessing',
fn: function () {
var self=this;
return self['@assignTo'];
return self;},
args: [],
source: "assignTo\x0a\x09^ assignTo",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRAssigningInlinedSequence);

smalltalk.addMethod(
"_assignTo_",
smalltalk.method({
selector: "assignTo:",
category: 'accessing',
fn: function (anIRInstruction) {
var self=this;
(self['@assignTo']=anIRInstruction);
return self;},
args: ["anIRInstruction"],
source: "assignTo: anIRInstruction\x0a\x09assignTo := anIRInstruction",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRAssigningInlinedSequence);



smalltalk.addClass('IRReturningInlinedSequence', smalltalk.IRInlinedSequence, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor, "_visitIRReturningInlinedSequence_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRReturningInlinedSequence: self",
messageSends: ["visitIRReturningInlinedSequence:"],
referencedClasses: []
}),
smalltalk.IRReturningInlinedSequence);



smalltalk.addClass('IRNonLocalReturningInlinedSequence', smalltalk.IRReturningInlinedSequence, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor) {
var self=this;
return smalltalk.send(aVisitor, "_visitIRNonLocalReturningInlinedSequence_", [self]);
return self;},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRNonLocalReturningInlinedSequence: self",
messageSends: ["visitIRNonLocalReturningInlinedSequence:"],
referencedClasses: []
}),
smalltalk.IRNonLocalReturningInlinedSequence);



smalltalk.addClass('IRInliner', smalltalk.IRVisitor, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_assignmentInliner",
smalltalk.method({
selector: "assignmentInliner",
category: 'factory',
fn: function () {
var self=this;
return (function($rec){smalltalk.send($rec, "_translator_", [self]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.IRAssignmentInliner || IRAssignmentInliner), "_new", []));
return self;},
args: [],
source: "assignmentInliner\x0a\x09^ IRAssignmentInliner new \x0a\x09\x09translator: self;\x0a\x09\x09yourself",
messageSends: ["translator:", "yourself", "new"],
referencedClasses: ["IRAssignmentInliner"]
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_nonLocalReturnInliner",
smalltalk.method({
selector: "nonLocalReturnInliner",
category: 'factory',
fn: function () {
var self=this;
return (function($rec){smalltalk.send($rec, "_translator_", [self]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.IRNonLocalReturnInliner || IRNonLocalReturnInliner), "_new", []));
return self;},
args: [],
source: "nonLocalReturnInliner\x0a\x09^ IRNonLocalReturnInliner new \x0a\x09\x09translator: self;\x0a\x09\x09yourself",
messageSends: ["translator:", "yourself", "new"],
referencedClasses: ["IRNonLocalReturnInliner"]
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_returnInliner",
smalltalk.method({
selector: "returnInliner",
category: 'factory',
fn: function () {
var self=this;
return (function($rec){smalltalk.send($rec, "_translator_", [self]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.IRReturnInliner || IRReturnInliner), "_new", []));
return self;},
args: [],
source: "returnInliner\x0a\x09^ IRReturnInliner new \x0a\x09\x09translator: self;\x0a\x09\x09yourself",
messageSends: ["translator:", "yourself", "new"],
referencedClasses: ["IRReturnInliner"]
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_sendInliner",
smalltalk.method({
selector: "sendInliner",
category: 'factory',
fn: function () {
var self=this;
return (function($rec){smalltalk.send($rec, "_translator_", [self]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.IRSendInliner || IRSendInliner), "_new", []));
return self;},
args: [],
source: "sendInliner\x0a\x09^ IRSendInliner new \x0a\x09\x09translator: self;\x0a\x09\x09yourself",
messageSends: ["translator:", "yourself", "new"],
referencedClasses: ["IRSendInliner"]
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_shouldInlineAssignment_",
smalltalk.method({
selector: "shouldInlineAssignment:",
category: 'testing',
fn: function (anIRAssignment) {
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(anIRAssignment, "_isInlined", []), "_not", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(anIRAssignment, "_instructions", []), "_last", []), "_isSend", []), "_and_", [(function(){return smalltalk.send(self, "_shouldInlineSend_", [smalltalk.send(smalltalk.send(anIRAssignment, "_instructions", []), "_last", [])]);})]);})]);
return self;},
args: ["anIRAssignment"],
source: "shouldInlineAssignment: anIRAssignment\x0a\x09^ anIRAssignment isInlined not and: [ \x0a\x09\x09anIRAssignment instructions last isSend and: [\x09\x0a\x09\x09\x09self shouldInlineSend: (anIRAssignment instructions last) ]]",
messageSends: ["and:", "not", "isInlined", "isSend", "last", "instructions", "shouldInlineSend:"],
referencedClasses: []
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_shouldInlineReturn_",
smalltalk.method({
selector: "shouldInlineReturn:",
category: 'testing',
fn: function (anIRReturn) {
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(anIRReturn, "_isInlined", []), "_not", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(anIRReturn, "_instructions", []), "_first", []), "_isSend", []), "_and_", [(function(){return smalltalk.send(self, "_shouldInlineSend_", [smalltalk.send(smalltalk.send(anIRReturn, "_instructions", []), "_first", [])]);})]);})]);
return self;},
args: ["anIRReturn"],
source: "shouldInlineReturn: anIRReturn\x0a\x09^ anIRReturn isInlined not and: [ \x0a\x09\x09anIRReturn instructions first isSend and: [\x09\x0a\x09\x09\x09self shouldInlineSend: (anIRReturn instructions first) ]]",
messageSends: ["and:", "not", "isInlined", "isSend", "first", "instructions", "shouldInlineSend:"],
referencedClasses: []
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_shouldInlineSend_",
smalltalk.method({
selector: "shouldInlineSend:",
category: 'testing',
fn: function (anIRSend) {
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(anIRSend, "_isInlined", []), "_not", []), "_and_", [(function(){return smalltalk.send((smalltalk.IRSendInliner || IRSendInliner), "_shouldInline_", [anIRSend]);})]);
return self;},
args: ["anIRSend"],
source: "shouldInlineSend: anIRSend\x0a\x09^ anIRSend isInlined not and: [\x0a\x09\x09IRSendInliner shouldInline: anIRSend ]",
messageSends: ["and:", "not", "isInlined", "shouldInline:"],
referencedClasses: ["IRSendInliner"]
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_transformNonLocalReturn_",
smalltalk.method({
selector: "transformNonLocalReturn:",
category: 'visiting',
fn: function (anIRNonLocalReturn) {
var self=this;
var $early={};
try{var localReturn=nil;
((($receiver = smalltalk.send(smalltalk.send(anIRNonLocalReturn, "_scope", []), "_canInlineNonLocalReturns", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(smalltalk.send(smalltalk.send(anIRNonLocalReturn, "_scope", []), "_methodScope", []), "_removeNonLocalReturn_", [smalltalk.send(anIRNonLocalReturn, "_scope", [])]);(localReturn=(function($rec){smalltalk.send($rec, "_scope_", [smalltalk.send(anIRNonLocalReturn, "_scope", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.IRReturn || IRReturn), "_new", [])));smalltalk.send(smalltalk.send(anIRNonLocalReturn, "_instructions", []), "_do_", [(function(each){return smalltalk.send(localReturn, "_add_", [each]);})]);smalltalk.send(anIRNonLocalReturn, "_replaceWith_", [localReturn]);return (function(){throw $early=[localReturn]})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(smalltalk.send(smalltalk.send(anIRNonLocalReturn, "_scope", []), "_methodScope", []), "_removeNonLocalReturn_", [smalltalk.send(anIRNonLocalReturn, "_scope", [])]);(localReturn=(function($rec){smalltalk.send($rec, "_scope_", [smalltalk.send(anIRNonLocalReturn, "_scope", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.IRReturn || IRReturn), "_new", [])));smalltalk.send(smalltalk.send(anIRNonLocalReturn, "_instructions", []), "_do_", [(function(each){return smalltalk.send(localReturn, "_add_", [each]);})]);smalltalk.send(anIRNonLocalReturn, "_replaceWith_", [localReturn]);return (function(){throw $early=[localReturn]})();})]));
return smalltalk.send(self, "_visitIRNonLocalReturn_", [anIRNonLocalReturn], smalltalk.IRInliner.superclass || nil);
return self;
} catch(e) {if(e===$early)return e[0]; throw e}},
args: ["anIRNonLocalReturn"],
source: "transformNonLocalReturn: anIRNonLocalReturn\x0a\x09| localReturn |\x0a\x09anIRNonLocalReturn scope canInlineNonLocalReturns ifTrue: [\x0a\x09\x09anIRNonLocalReturn scope methodScope removeNonLocalReturn: anIRNonLocalReturn scope.\x0a\x09\x09localReturn := IRReturn new\x0a\x09\x09\x09scope: anIRNonLocalReturn scope;\x0a\x09\x09\x09yourself.\x0a\x09\x09anIRNonLocalReturn instructions do: [ :each |\x0a\x09\x09\x09localReturn add: each ].\x0a\x09\x09anIRNonLocalReturn replaceWith: localReturn.\x0a\x09\x09^ localReturn ].\x0a\x09^ super visitIRNonLocalReturn: anIRNonLocalReturn",
messageSends: ["ifTrue:", "canInlineNonLocalReturns", "scope", "removeNonLocalReturn:", "methodScope", "scope:", "yourself", "new", "do:", "instructions", "add:", "replaceWith:", "visitIRNonLocalReturn:"],
referencedClasses: ["IRReturn"]
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRAssignment_",
smalltalk.method({
selector: "visitIRAssignment:",
category: 'visiting',
fn: function (anIRAssignment) {
var self=this;
return ((($receiver = smalltalk.send(self, "_shouldInlineAssignment_", [anIRAssignment])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_assignmentInliner", []), "_inlineAssignment_", [anIRAssignment]);})() : (function(){return smalltalk.send(self, "_visitIRAssignment_", [anIRAssignment], smalltalk.IRInliner.superclass || nil);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_assignmentInliner", []), "_inlineAssignment_", [anIRAssignment]);}), (function(){return smalltalk.send(self, "_visitIRAssignment_", [anIRAssignment], smalltalk.IRInliner.superclass || nil);})]));
return self;},
args: ["anIRAssignment"],
source: "visitIRAssignment: anIRAssignment\x0a\x09^ (self shouldInlineAssignment: anIRAssignment) \x0a\x09\x09ifTrue: [ self assignmentInliner inlineAssignment: anIRAssignment ]\x0a\x09\x09ifFalse: [ super visitIRAssignment: anIRAssignment ]",
messageSends: ["ifTrue:ifFalse:", "shouldInlineAssignment:", "inlineAssignment:", "assignmentInliner", "visitIRAssignment:"],
referencedClasses: []
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRNonLocalReturn_",
smalltalk.method({
selector: "visitIRNonLocalReturn:",
category: 'visiting',
fn: function (anIRNonLocalReturn) {
var self=this;
return ((($receiver = smalltalk.send(self, "_shouldInlineReturn_", [anIRNonLocalReturn])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_nonLocalReturnInliner", []), "_inlineReturn_", [anIRNonLocalReturn]);})() : (function(){return smalltalk.send(self, "_transformNonLocalReturn_", [anIRNonLocalReturn]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_nonLocalReturnInliner", []), "_inlineReturn_", [anIRNonLocalReturn]);}), (function(){return smalltalk.send(self, "_transformNonLocalReturn_", [anIRNonLocalReturn]);})]));
return self;},
args: ["anIRNonLocalReturn"],
source: "visitIRNonLocalReturn: anIRNonLocalReturn\x0a\x09^ (self shouldInlineReturn: anIRNonLocalReturn) \x0a\x09\x09ifTrue: [ self nonLocalReturnInliner inlineReturn: anIRNonLocalReturn ]\x0a\x09\x09ifFalse: [ self transformNonLocalReturn: anIRNonLocalReturn ]",
messageSends: ["ifTrue:ifFalse:", "shouldInlineReturn:", "inlineReturn:", "nonLocalReturnInliner", "transformNonLocalReturn:"],
referencedClasses: []
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRReturn_",
smalltalk.method({
selector: "visitIRReturn:",
category: 'visiting',
fn: function (anIRReturn) {
var self=this;
return ((($receiver = smalltalk.send(self, "_shouldInlineReturn_", [anIRReturn])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_returnInliner", []), "_inlineReturn_", [anIRReturn]);})() : (function(){return smalltalk.send(self, "_visitIRReturn_", [anIRReturn], smalltalk.IRInliner.superclass || nil);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_returnInliner", []), "_inlineReturn_", [anIRReturn]);}), (function(){return smalltalk.send(self, "_visitIRReturn_", [anIRReturn], smalltalk.IRInliner.superclass || nil);})]));
return self;},
args: ["anIRReturn"],
source: "visitIRReturn: anIRReturn\x0a\x09^ (self shouldInlineReturn: anIRReturn) \x0a\x09\x09ifTrue: [ self returnInliner inlineReturn: anIRReturn ]\x0a\x09\x09ifFalse: [ super visitIRReturn: anIRReturn ]",
messageSends: ["ifTrue:ifFalse:", "shouldInlineReturn:", "inlineReturn:", "returnInliner", "visitIRReturn:"],
referencedClasses: []
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRSend_",
smalltalk.method({
selector: "visitIRSend:",
category: 'visiting',
fn: function (anIRSend) {
var self=this;
return ((($receiver = smalltalk.send(self, "_shouldInlineSend_", [anIRSend])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_sendInliner", []), "_inlineSend_", [anIRSend]);})() : (function(){return smalltalk.send(self, "_visitIRSend_", [anIRSend], smalltalk.IRInliner.superclass || nil);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_sendInliner", []), "_inlineSend_", [anIRSend]);}), (function(){return smalltalk.send(self, "_visitIRSend_", [anIRSend], smalltalk.IRInliner.superclass || nil);})]));
return self;},
args: ["anIRSend"],
source: "visitIRSend: anIRSend\x0a\x09^ (self shouldInlineSend: anIRSend)\x0a\x09\x09ifTrue: [ self sendInliner inlineSend: anIRSend ]\x0a\x09\x09ifFalse: [ super visitIRSend: anIRSend ]",
messageSends: ["ifTrue:ifFalse:", "shouldInlineSend:", "inlineSend:", "sendInliner", "visitIRSend:"],
referencedClasses: []
}),
smalltalk.IRInliner);



smalltalk.addClass('IRInliningJSTranslator', smalltalk.IRJSTranslator, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_visitIRAssigningInlinedSequence_",
smalltalk.method({
selector: "visitIRAssigningInlinedSequence:",
category: 'visiting',
fn: function (anIRInlinedSequence) {
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(anIRInlinedSequence, "_instructions", []), "_allButLast", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutStatementWith_", [(function(){return smalltalk.send(self, "_visit_", [each]);})]);})]);
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutStatementWith_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(anIRInlinedSequence, "_instructions", []), "_last", []), "_canBeAssigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(anIRInlinedSequence, "_assignTo", []), "_variable", []), "_alias", [])]);return smalltalk.send($rec, "_nextPutAssignment", []);})(smalltalk.send(self, "_stream", []));return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRInlinedSequence, "_instructions", []), "_last", [])]);})() : (function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRInlinedSequence, "_instructions", []), "_last", [])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(anIRInlinedSequence, "_assignTo", []), "_variable", []), "_alias", [])]);return smalltalk.send($rec, "_nextPutAssignment", []);})(smalltalk.send(self, "_stream", []));return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRInlinedSequence, "_instructions", []), "_last", [])]);}), (function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRInlinedSequence, "_instructions", []), "_last", [])]);})]));})]);
return self;},
args: ["anIRInlinedSequence"],
source: "visitIRAssigningInlinedSequence: anIRInlinedSequence\x0a\x0a\x09anIRInlinedSequence instructions allButLast do: [ :each | \x0a\x09\x09self stream nextPutStatementWith: [ self visit: each ]].\x0a\x0a\x09self stream nextPutStatementWith: [\x0a\x09\x09anIRInlinedSequence instructions last canBeAssigned \x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09self stream \x0a\x09\x09\x09\x09\x09nextPutAll: anIRInlinedSequence assignTo variable alias;\x0a                                \x09nextPutAssignment.\x0a\x09\x09\x09\x09self visit: anIRInlinedSequence instructions last ]\x0a\x09\x09\x09ifFalse: [ self visit: anIRInlinedSequence instructions last ]]",
messageSends: ["do:", "allButLast", "instructions", "nextPutStatementWith:", "stream", "visit:", "ifTrue:ifFalse:", "canBeAssigned", "last", "nextPutAll:", "alias", "variable", "assignTo", "nextPutAssignment"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedAssignment_",
smalltalk.method({
selector: "visitIRInlinedAssignment:",
category: 'visiting',
fn: function (anIRInlinedAssignment) {
var self=this;
smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRInlinedAssignment, "_instructions", []), "_last", [])]);
return self;},
args: ["anIRInlinedAssignment"],
source: "visitIRInlinedAssignment: anIRInlinedAssignment\x0a\x09self visit: anIRInlinedAssignment instructions last",
messageSends: ["visit:", "last", "instructions"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedClosure_",
smalltalk.method({
selector: "visitIRInlinedClosure:",
category: 'visiting',
fn: function (anIRInlinedClosure) {
var self=this;
smalltalk.send(smalltalk.send(anIRInlinedClosure, "_instructions", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_", [each]);})]);
return self;},
args: ["anIRInlinedClosure"],
source: "visitIRInlinedClosure: anIRInlinedClosure\x0a\x09anIRInlinedClosure instructions do: [ :each |\x0a\x09\x09self visit: each ]",
messageSends: ["do:", "instructions", "visit:"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfFalse_",
smalltalk.method({
selector: "visitIRInlinedIfFalse:",
category: 'visiting',
fn: function (anIRInlinedIfFalse) {
var self=this;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutIf_with_", [(function(){smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", ["! smalltalk.assert("]);smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRInlinedIfFalse, "_instructions", []), "_first", [])]);return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", [")"]);}), (function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRInlinedIfFalse, "_instructions", []), "_last", [])]);})]);
return self;},
args: ["anIRInlinedIfFalse"],
source: "visitIRInlinedIfFalse: anIRInlinedIfFalse\x0a\x09self stream nextPutIf: [ \x0a\x09\x09self stream nextPutAll: '! smalltalk.assert('.\x0a\x09\x09self visit: anIRInlinedIfFalse instructions first.\x0a\x09\x09self stream nextPutAll: ')' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfFalse instructions last ]",
messageSends: ["nextPutIf:with:", "stream", "nextPutAll:", "visit:", "first", "instructions", "last"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfTrue_",
smalltalk.method({
selector: "visitIRInlinedIfTrue:",
category: 'visiting',
fn: function (anIRInlinedIfTrue) {
var self=this;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutIf_with_", [(function(){smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", ["smalltalk.assert("]);smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRInlinedIfTrue, "_instructions", []), "_first", [])]);return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", [")"]);}), (function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRInlinedIfTrue, "_instructions", []), "_last", [])]);})]);
return self;},
args: ["anIRInlinedIfTrue"],
source: "visitIRInlinedIfTrue: anIRInlinedIfTrue\x0a\x09self stream nextPutIf: [ \x0a\x09\x09self stream nextPutAll: 'smalltalk.assert('. \x0a\x09\x09self visit: anIRInlinedIfTrue instructions first.\x0a\x09\x09self stream nextPutAll: ')' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfTrue instructions last ]",
messageSends: ["nextPutIf:with:", "stream", "nextPutAll:", "visit:", "first", "instructions", "last"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedNonLocalReturn_",
smalltalk.method({
selector: "visitIRInlinedNonLocalReturn:",
category: 'visiting',
fn: function (anIRInlinedReturn) {
var self=this;
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutStatementWith_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRInlinedReturn, "_instructions", []), "_last", [])]);})]);
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutNonLocalReturnWith_", [(function(){return nil;})]);
return self;},
args: ["anIRInlinedReturn"],
source: "visitIRInlinedNonLocalReturn: anIRInlinedReturn\x0a\x09self stream nextPutStatementWith: [\x0a\x09\x09self visit: anIRInlinedReturn instructions last ].\x0a\x09self stream nextPutNonLocalReturnWith: [ ]",
messageSends: ["nextPutStatementWith:", "stream", "visit:", "last", "instructions", "nextPutNonLocalReturnWith:"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedReturn_",
smalltalk.method({
selector: "visitIRInlinedReturn:",
category: 'visiting',
fn: function (anIRInlinedReturn) {
var self=this;
smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRInlinedReturn, "_instructions", []), "_last", [])]);
return self;},
args: ["anIRInlinedReturn"],
source: "visitIRInlinedReturn: anIRInlinedReturn\x0a\x09self visit: anIRInlinedReturn instructions last",
messageSends: ["visit:", "last", "instructions"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedSequence_",
smalltalk.method({
selector: "visitIRInlinedSequence:",
category: 'visiting',
fn: function (anIRInlinedSequence) {
var self=this;
smalltalk.send(smalltalk.send(anIRInlinedSequence, "_instructions", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutStatementWith_", [(function(){return smalltalk.send(self, "_visit_", [each]);})]);})]);
return self;},
args: ["anIRInlinedSequence"],
source: "visitIRInlinedSequence: anIRInlinedSequence\x0a\x09anIRInlinedSequence instructions do: [ :each | \x0a\x09\x09self stream nextPutStatementWith: [ self visit: each ]]",
messageSends: ["do:", "instructions", "nextPutStatementWith:", "stream", "visit:"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRNonLocalReturningInlinedSequence_",
smalltalk.method({
selector: "visitIRNonLocalReturningInlinedSequence:",
category: 'visiting',
fn: function (anIRInlinedSequence) {
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(anIRInlinedSequence, "_instructions", []), "_allButLast", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutStatementWith_", [(function(){return smalltalk.send(self, "_visit_", [each]);})]);})]);
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutStatementWith_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(anIRInlinedSequence, "_instructions", []), "_last", []), "_canBeAssigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutNonLocalReturnWith_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRInlinedSequence, "_instructions", []), "_last", [])]);})]);})() : (function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRInlinedSequence, "_instructions", []), "_last", [])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutNonLocalReturnWith_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRInlinedSequence, "_instructions", []), "_last", [])]);})]);}), (function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRInlinedSequence, "_instructions", []), "_last", [])]);})]));})]);
return self;},
args: ["anIRInlinedSequence"],
source: "visitIRNonLocalReturningInlinedSequence: anIRInlinedSequence\x0a\x0a\x09anIRInlinedSequence instructions allButLast do: [ :each | \x0a\x09\x09self stream nextPutStatementWith: [ self visit: each ]].\x0a\x0a\x09self stream nextPutStatementWith: [\x0a\x09\x09anIRInlinedSequence instructions last canBeAssigned \x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09self stream nextPutNonLocalReturnWith: [\x0a\x09\x09\x09\x09\x09self visit: anIRInlinedSequence instructions last ]]\x0a\x09\x09\x09ifFalse: [ self visit: anIRInlinedSequence instructions last ]]",
messageSends: ["do:", "allButLast", "instructions", "nextPutStatementWith:", "stream", "visit:", "ifTrue:ifFalse:", "canBeAssigned", "last", "nextPutNonLocalReturnWith:"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRReturningInlinedSequence_",
smalltalk.method({
selector: "visitIRReturningInlinedSequence:",
category: 'visiting',
fn: function (anIRInlinedSequence) {
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(anIRInlinedSequence, "_instructions", []), "_allButLast", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutStatementWith_", [(function(){return smalltalk.send(self, "_visit_", [each]);})]);})]);
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutStatementWith_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(anIRInlinedSequence, "_instructions", []), "_last", []), "_canBeAssigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutReturn", []);return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRInlinedSequence, "_instructions", []), "_last", [])]);})() : (function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRInlinedSequence, "_instructions", []), "_last", [])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutReturn", []);return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRInlinedSequence, "_instructions", []), "_last", [])]);}), (function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRInlinedSequence, "_instructions", []), "_last", [])]);})]));})]);
return self;},
args: ["anIRInlinedSequence"],
source: "visitIRReturningInlinedSequence: anIRInlinedSequence\x0a\x0a\x09anIRInlinedSequence instructions allButLast do: [ :each | \x0a\x09\x09self stream nextPutStatementWith: [ self visit: each ]].\x0a\x0a\x09self stream nextPutStatementWith: [\x0a\x09\x09anIRInlinedSequence instructions last canBeAssigned \x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09self stream nextPutReturn.\x0a\x09\x09\x09\x09self visit: anIRInlinedSequence instructions last ]\x0a\x09\x09\x09ifFalse: [ self visit: anIRInlinedSequence instructions last ]]",
messageSends: ["do:", "allButLast", "instructions", "nextPutStatementWith:", "stream", "visit:", "ifTrue:ifFalse:", "canBeAssigned", "last", "nextPutReturn"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);



smalltalk.addClass('IRSendInliner', smalltalk.Object, ['send', 'translator'], 'Compiler-Inlining');
smalltalk.IRSendInliner.comment="I inline some message sends and block closure arguments. I heavily rely on #perform: to dispatch inlining methods."
smalltalk.addMethod(
"_ifFalse_",
smalltalk.method({
selector: "ifFalse:",
category: 'inlining',
fn: function (anIRInstruction) {
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
return self;},
args: ["anIRInstruction"],
source: "ifFalse: anIRInstruction\x0a\x09| inlinedSend inlinedClosure |\x0a\x0a\x09anIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].\x0a\x09anIRInstruction arguments size = 0 ifFalse: [ self inliningError: 'Inlined block should have zero argument' ].\x0a\x0a\x09inlinedClosure := self inlineClosure: anIRInstruction.\x0a\x0a\x09inlinedSend := IRInlinedIfFalse new.\x0a\x09inlinedSend\x0a\x09\x09add: self send instructions first;\x0a\x09\x09add: inlinedClosure.\x0a\x0a\x09self send replaceWith: inlinedSend.\x0a\x09^ inlinedSend",
messageSends: ["ifFalse:", "isClosure", "inliningError:", "=", "size", "arguments", "inlineClosure:", "new", "add:", "first", "instructions", "send", "replaceWith:"],
referencedClasses: ["IRInlinedIfFalse"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifTrue_",
smalltalk.method({
selector: "ifTrue:",
category: 'inlining',
fn: function (anIRInstruction) {
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
return self;},
args: ["anIRInstruction"],
source: "ifTrue: anIRInstruction\x0a\x09| inlinedSend inlinedClosure |\x0a\x0a\x09anIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].\x0a\x09anIRInstruction arguments size = 0 ifFalse: [ self inliningError: 'Inlined block should have zero argument' ].\x0a\x0a\x09inlinedClosure := self inlineClosure: anIRInstruction.\x0a\x0a\x09inlinedSend := IRInlinedIfTrue new.\x0a\x09inlinedSend\x0a\x09\x09add: self send instructions first;\x0a\x09\x09add: inlinedClosure.\x0a\x0a\x09self send replaceWith: inlinedSend.\x0a\x09^ inlinedSend",
messageSends: ["ifFalse:", "isClosure", "inliningError:", "=", "size", "arguments", "inlineClosure:", "new", "add:", "first", "instructions", "send", "replaceWith:"],
referencedClasses: ["IRInlinedIfTrue"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlineClosure_",
smalltalk.method({
selector: "inlineClosure:",
category: 'inlining',
fn: function (anIRClosure) {
var self=this;
var inlinedClosure=nil;
var sequence=nil;
var statements=nil;
(inlinedClosure=smalltalk.send(self, "_inlinedClosure", []));
smalltalk.send(inlinedClosure, "_scope_", [smalltalk.send(anIRClosure, "_scope", [])]);
smalltalk.send(smalltalk.send(anIRClosure, "_instructions", []), "_do_", [(function(each){return ((($receiver = smalltalk.send(each, "_isSequence", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(inlinedClosure, "_add_", [each]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(inlinedClosure, "_add_", [each]);})]));})]);
(sequence=smalltalk.send(self, "_inlinedSequence", []));
smalltalk.send(inlinedClosure, "_add_", [sequence]);
(statements=smalltalk.send(smalltalk.send(smalltalk.send(anIRClosure, "_instructions", []), "_last", []), "_instructions", []));
smalltalk.send(statements, "_ifNotEmpty_", [(function(){smalltalk.send(smalltalk.send(statements, "_allButLast", []), "_do_", [(function(each){return smalltalk.send(sequence, "_add_", [smalltalk.send(smalltalk.send(self, "_translator", []), "_visit_", [each])]);})]);return ((($receiver = smalltalk.send(smalltalk.send(statements, "_last", []), "_isLocalReturn", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(sequence, "_add_", [smalltalk.send(smalltalk.send(self, "_translator", []), "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(statements, "_last", []), "_instructions", []), "_first", [])])]);})() : (function(){return smalltalk.send(sequence, "_add_", [smalltalk.send(smalltalk.send(self, "_translator", []), "_visit_", [smalltalk.send(statements, "_last", [])])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(sequence, "_add_", [smalltalk.send(smalltalk.send(self, "_translator", []), "_visit_", [smalltalk.send(smalltalk.send(smalltalk.send(statements, "_last", []), "_instructions", []), "_first", [])])]);}), (function(){return smalltalk.send(sequence, "_add_", [smalltalk.send(smalltalk.send(self, "_translator", []), "_visit_", [smalltalk.send(statements, "_last", [])])]);})]));})]);
return inlinedClosure;
return self;},
args: ["anIRClosure"],
source: "inlineClosure: anIRClosure\x0a\x09| inlinedClosure sequence statements |\x0a\x09inlinedClosure := self inlinedClosure.\x0a\x09inlinedClosure scope: anIRClosure scope.\x0a\x0a\x09\x22Add the possible temp declarations\x22\x0a\x09anIRClosure instructions do: [ :each | \x0a\x09\x09each isSequence ifFalse: [\x0a\x09\x09\x09inlinedClosure add: each ]].\x0a\x0a\x09\x22Add a block sequence\x22\x0a\x09sequence := self inlinedSequence.\x0a\x09inlinedClosure add: sequence.\x0a\x0a\x09\x22Get all the statements\x22\x0a\x09statements := anIRClosure instructions last instructions.\x0a\x09\x0a\x09statements ifNotEmpty: [\x0a\x09\x09statements allButLast do: [ :each | sequence add: (self translator visit: each) ].\x0a\x09\x09\x22Inlined closures don't have implicit local returns\x22\x0a\x09\x09statements last isLocalReturn \x0a\x09\x09\x09ifTrue: [ sequence add: (self translator visit: statements last instructions first) ]\x0a\x09\x09\x09ifFalse: [ sequence add: (self translator visit: statements last) ]].\x0a\x0a\x09^ inlinedClosure",
messageSends: ["inlinedClosure", "scope:", "scope", "do:", "instructions", "ifFalse:", "isSequence", "add:", "inlinedSequence", "last", "ifNotEmpty:", "allButLast", "visit:", "translator", "ifTrue:ifFalse:", "isLocalReturn", "first"],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlineSend_",
smalltalk.method({
selector: "inlineSend:",
category: 'inlining',
fn: function (anIRSend) {
var self=this;
smalltalk.send(self, "_send_", [anIRSend]);
smalltalk.send(self, "_perform_withArguments_", [smalltalk.send(smalltalk.send(self, "_send", []), "_selector", []), smalltalk.send(smalltalk.send(smalltalk.send(self, "_send", []), "_instructions", []), "_allButFirst", [])]);
return self;},
args: ["anIRSend"],
source: "inlineSend: anIRSend\x0a\x09self send: anIRSend.\x0a\x09self perform: self send selector withArguments: self send instructions allButFirst",
messageSends: ["send:", "perform:withArguments:", "selector", "send", "allButFirst", "instructions"],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedClosure",
smalltalk.method({
selector: "inlinedClosure",
category: 'factory',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.IRInlinedClosure || IRInlinedClosure), "_new", []);
return self;},
args: [],
source: "inlinedClosure\x0a\x09^ IRInlinedClosure new",
messageSends: ["new"],
referencedClasses: ["IRInlinedClosure"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedSequence",
smalltalk.method({
selector: "inlinedSequence",
category: 'factory',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.IRInlinedSequence || IRInlinedSequence), "_new", []);
return self;},
args: [],
source: "inlinedSequence\x0a\x09^ IRInlinedSequence new",
messageSends: ["new"],
referencedClasses: ["IRInlinedSequence"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inliningError_",
smalltalk.method({
selector: "inliningError:",
category: 'error handling',
fn: function (aString) {
var self=this;
smalltalk.send((smalltalk.InliningError || InliningError), "_signal_", [aString]);
return self;},
args: ["aString"],
source: "inliningError: aString\x0a\x09InliningError signal: aString",
messageSends: ["signal:"],
referencedClasses: ["InliningError"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_send",
smalltalk.method({
selector: "send",
category: 'accessing',
fn: function () {
var self=this;
return self['@send'];
return self;},
args: [],
source: "send\x0a\x09^ send",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_send_",
smalltalk.method({
selector: "send:",
category: 'accessing',
fn: function (anIRSend) {
var self=this;
(self['@send']=anIRSend);
return self;},
args: ["anIRSend"],
source: "send: anIRSend\x0a\x09send := anIRSend",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_translator",
smalltalk.method({
selector: "translator",
category: 'accessing',
fn: function () {
var self=this;
return self['@translator'];
return self;},
args: [],
source: "translator\x0a\x09^ translator",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_translator_",
smalltalk.method({
selector: "translator:",
category: 'accessing',
fn: function (anASTTranslator) {
var self=this;
(self['@translator']=anASTTranslator);
return self;},
args: ["anASTTranslator"],
source: "translator: anASTTranslator\x0a\x09translator := anASTTranslator",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSendInliner);


smalltalk.addMethod(
"_inlinedSelectors",
smalltalk.method({
selector: "inlinedSelectors",
category: 'accessing',
fn: function () {
var self=this;
return ["ifTrue:", "ifFalse:"];
return self;},
args: [],
source: "inlinedSelectors\x0a\x09^ #('ifTrue:' 'ifFalse:')",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSendInliner.klass);

smalltalk.addMethod(
"_shouldInline_",
smalltalk.method({
selector: "shouldInline:",
category: 'accessing',
fn: function (anIRInstruction) {
var self=this;
var $early={};
try{((($receiver = smalltalk.send(smalltalk.send(self, "_inlinedSelectors", []), "_includes_", [smalltalk.send(anIRInstruction, "_selector", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw $early=[false]})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw $early=[false]})();})]));
smalltalk.send(smalltalk.send(smalltalk.send(anIRInstruction, "_instructions", []), "_allButFirst", []), "_do_", [(function(each){return ((($receiver = smalltalk.send(each, "_isClosure", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw $early=[false]})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw $early=[false]})();})]));})]);
return true;
return self;
} catch(e) {if(e===$early)return e[0]; throw e}},
args: ["anIRInstruction"],
source: "shouldInline: anIRInstruction\x0a\x09(self inlinedSelectors includes: anIRInstruction selector) ifFalse: [ ^ false ].\x0a\x09anIRInstruction instructions allButFirst do: [ :each |\x0a\x09\x09each isClosure ifFalse: [ ^ false ]].\x0a\x09^ true",
messageSends: ["ifFalse:", "includes:", "inlinedSelectors", "selector", "do:", "allButFirst", "instructions", "isClosure"],
referencedClasses: []
}),
smalltalk.IRSendInliner.klass);


smalltalk.addClass('IRAssignmentInliner', smalltalk.IRSendInliner, ['assignment'], 'Compiler-Inlining');
smalltalk.addMethod(
"_assignment",
smalltalk.method({
selector: "assignment",
category: 'accessing',
fn: function () {
var self=this;
return self['@assignment'];
return self;},
args: [],
source: "assignment\x0a\x09^ assignment",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
"_assignment_",
smalltalk.method({
selector: "assignment:",
category: 'accessing',
fn: function (aNode) {
var self=this;
(self['@assignment']=aNode);
return self;},
args: ["aNode"],
source: "assignment: aNode\x0a\x09assignment := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
"_inlineAssignment_",
smalltalk.method({
selector: "inlineAssignment:",
category: 'inlining',
fn: function (anIRAssignment) {
var self=this;
var inlinedAssignment=nil;
smalltalk.send(self, "_assignment_", [anIRAssignment]);
(inlinedAssignment=smalltalk.send((smalltalk.IRInlinedAssignment || IRInlinedAssignment), "_new", []));
smalltalk.send(smalltalk.send(anIRAssignment, "_instructions", []), "_do_", [(function(each){return smalltalk.send(inlinedAssignment, "_add_", [each]);})]);
smalltalk.send(anIRAssignment, "_replaceWith_", [inlinedAssignment]);
smalltalk.send(self, "_inlineSend_", [smalltalk.send(smalltalk.send(inlinedAssignment, "_instructions", []), "_last", [])]);
return inlinedAssignment;
return self;},
args: ["anIRAssignment"],
source: "inlineAssignment: anIRAssignment\x0a\x09| inlinedAssignment |\x0a\x09self assignment: anIRAssignment.\x0a\x09inlinedAssignment := IRInlinedAssignment new.\x0a\x09anIRAssignment instructions do: [ :each |\x0a\x09\x09inlinedAssignment add: each ].\x0a\x09anIRAssignment replaceWith: inlinedAssignment.\x0a\x09self inlineSend: inlinedAssignment instructions last.\x0a\x09^ inlinedAssignment",
messageSends: ["assignment:", "new", "do:", "instructions", "add:", "replaceWith:", "inlineSend:", "last"],
referencedClasses: ["IRInlinedAssignment"]
}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
"_inlinedSequence",
smalltalk.method({
selector: "inlinedSequence",
category: 'factory',
fn: function () {
var self=this;
return (function($rec){smalltalk.send($rec, "_assignTo_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_assignment", []), "_instructions", []), "_first", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.IRAssigningInlinedSequence || IRAssigningInlinedSequence), "_new", []));
return self;},
args: [],
source: "inlinedSequence\x0a\x09^ IRAssigningInlinedSequence new\x0a\x09\x09assignTo: self assignment instructions first;\x0a\x09\x09yourself",
messageSends: ["assignTo:", "first", "instructions", "assignment", "yourself", "new"],
referencedClasses: ["IRAssigningInlinedSequence"]
}),
smalltalk.IRAssignmentInliner);



smalltalk.addClass('IRReturnInliner', smalltalk.IRSendInliner, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_inlineReturn_",
smalltalk.method({
selector: "inlineReturn:",
category: 'inlining',
fn: function (anIRReturn) {
var self=this;
var return_=nil;
(return_=smalltalk.send(self, "_inlinedReturn", []));
smalltalk.send(smalltalk.send(anIRReturn, "_instructions", []), "_do_", [(function(each){return smalltalk.send(return_, "_add_", [each]);})]);
smalltalk.send(anIRReturn, "_replaceWith_", [return_]);
smalltalk.send(self, "_inlineSend_", [smalltalk.send(smalltalk.send(return_, "_instructions", []), "_last", [])]);
return return_;
return self;},
args: ["anIRReturn"],
source: "inlineReturn: anIRReturn\x0a\x09| return |\x0a\x09return := self inlinedReturn.\x0a\x09anIRReturn instructions do: [ :each |\x0a\x09\x09return add: each ].\x0a\x09anIRReturn replaceWith: return.\x0a\x09self inlineSend: return instructions last.\x0a\x09^ return",
messageSends: ["inlinedReturn", "do:", "instructions", "add:", "replaceWith:", "inlineSend:", "last"],
referencedClasses: []
}),
smalltalk.IRReturnInliner);

smalltalk.addMethod(
"_inlinedReturn",
smalltalk.method({
selector: "inlinedReturn",
category: 'factory',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.IRInlinedReturn || IRInlinedReturn), "_new", []);
return self;},
args: [],
source: "inlinedReturn\x0a\x09^ IRInlinedReturn new",
messageSends: ["new"],
referencedClasses: ["IRInlinedReturn"]
}),
smalltalk.IRReturnInliner);

smalltalk.addMethod(
"_inlinedSequence",
smalltalk.method({
selector: "inlinedSequence",
category: 'factory',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.IRReturningInlinedSequence || IRReturningInlinedSequence), "_new", []);
return self;},
args: [],
source: "inlinedSequence\x0a\x09^ IRReturningInlinedSequence new",
messageSends: ["new"],
referencedClasses: ["IRReturningInlinedSequence"]
}),
smalltalk.IRReturnInliner);



smalltalk.addClass('IRNonLocalReturnInliner', smalltalk.IRReturnInliner, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_inlinedReturn",
smalltalk.method({
selector: "inlinedReturn",
category: 'factory',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.IRInlinedNonLocalReturn || IRInlinedNonLocalReturn), "_new", []);
return self;},
args: [],
source: "inlinedReturn\x0a\x09^ IRInlinedNonLocalReturn new",
messageSends: ["new"],
referencedClasses: ["IRInlinedNonLocalReturn"]
}),
smalltalk.IRNonLocalReturnInliner);

smalltalk.addMethod(
"_inlinedSequence",
smalltalk.method({
selector: "inlinedSequence",
category: 'factory',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.IRNonLocalReturningInlinedSequence || IRNonLocalReturningInlinedSequence), "_new", []);
return self;},
args: [],
source: "inlinedSequence\x0a\x09^ IRNonLocalReturningInlinedSequence new",
messageSends: ["new"],
referencedClasses: ["IRNonLocalReturningInlinedSequence"]
}),
smalltalk.IRNonLocalReturnInliner);



smalltalk.addClass('InliningCodeGenerator', smalltalk.CodeGenerator, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
category: 'compiling',
fn: function (aNode) {
var self=this;
var ir=nil;
var stream=nil;
smalltalk.send(smalltalk.send(self, "_semanticAnalyzer", []), "_visit_", [aNode]);
(ir=smalltalk.send(smalltalk.send(self, "_translator", []), "_visit_", [aNode]));
smalltalk.send(smalltalk.send(self, "_inliner", []), "_visit_", [ir]);
return (function($rec){smalltalk.send($rec, "_visit_", [ir]);return smalltalk.send($rec, "_contents", []);})(smalltalk.send(self, "_irTranslator", []));
return self;},
args: ["aNode"],
source: "compileNode: aNode\x0a\x09| ir stream |\x0a\x09self semanticAnalyzer visit: aNode.\x0a\x09ir := self translator visit: aNode.\x0a\x09self inliner visit: ir.\x0a\x09^ self irTranslator\x0a\x09\x09visit: ir;\x0a\x09\x09contents",
messageSends: ["visit:", "semanticAnalyzer", "translator", "inliner", "contents", "irTranslator"],
referencedClasses: []
}),
smalltalk.InliningCodeGenerator);

smalltalk.addMethod(
"_inliner",
smalltalk.method({
selector: "inliner",
category: 'compiling',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.IRInliner || IRInliner), "_new", []);
return self;},
args: [],
source: "inliner\x0a\x09^ IRInliner new",
messageSends: ["new"],
referencedClasses: ["IRInliner"]
}),
smalltalk.InliningCodeGenerator);

smalltalk.addMethod(
"_irTranslator",
smalltalk.method({
selector: "irTranslator",
category: 'compiling',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.IRInliningJSTranslator || IRInliningJSTranslator), "_new", []);
return self;},
args: [],
source: "irTranslator\x0a\x09^ IRInliningJSTranslator new",
messageSends: ["new"],
referencedClasses: ["IRInliningJSTranslator"]
}),
smalltalk.InliningCodeGenerator);



