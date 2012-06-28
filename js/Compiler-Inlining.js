smalltalk.addPackage('Compiler-Inlining', {});
smalltalk.addClass('IRInlinedAssignment', smalltalk.IRAssignment, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
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
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedAssignment);



smalltalk.addClass('IRInlinedClosure', smalltalk.IRClosure, ['assignTo'], 'Compiler-Inlining');
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
smalltalk.IRInlinedClosure);

smalltalk.addMethod(
"_assignTo_",
smalltalk.method({
selector: "assignTo:",
category: 'accessing',
fn: function (aScopeVar){
var self=this;
(self['@assignTo']=aScopeVar);
return self;},
args: ["aScopeVar"],
source: "assignTo: aScopeVar\x0a\x09assignTo := aScopeVar",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedClosure);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedClosure);



smalltalk.addClass('IRInlinedNonLocalReturn', smalltalk.IRNonLocalReturn, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
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
fn: function (){
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
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedSend);



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



smalltalk.addClass('IRInliner', smalltalk.IRVisitor, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_assignmentInliner",
smalltalk.method({
selector: "assignmentInliner",
category: 'visiting',
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
"_sendInliner",
smalltalk.method({
selector: "sendInliner",
category: 'visiting',
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
fn: function (anIRAssignment){
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
"_shouldInlineSend_",
smalltalk.method({
selector: "shouldInlineSend:",
category: 'testing',
fn: function (anIRSend){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(anIRSend, "_isInlined", []), "_not", []), "_and_", [(function(){return smalltalk.send(smalltalk.send((smalltalk.IRSendInliner || IRSendInliner), "_inlinedSelectors", []), "_includes_", [smalltalk.send(anIRSend, "_selector", [])]);})]);
return self;},
args: ["anIRSend"],
source: "shouldInlineSend: anIRSend\x0a\x09^ anIRSend isInlined not and: [\x0a\x09\x09IRSendInliner inlinedSelectors includes: anIRSend selector ]",
messageSends: ["and:", "not", "isInlined", "includes:", "inlinedSelectors", "selector"],
referencedClasses: ["IRSendInliner"]
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRAssignment_",
smalltalk.method({
selector: "visitIRAssignment:",
category: 'visiting',
fn: function (anIRAssignment){
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
"_visitIRSend_",
smalltalk.method({
selector: "visitIRSend:",
category: 'visiting',
fn: function (anIRSend){
var self=this;
return ((($receiver = smalltalk.send(self, "_shouldInlineSend_", [anIRSend])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_sendInliner", []), "_inlineSend_", [anIRSend]);})() : (function(){return smalltalk.send(self, "_visitIRSend_", [anIRSend], smalltalk.IRInliner.superclass || nil);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_sendInliner", []), "_inlineSend_", [anIRSend]);}), (function(){return smalltalk.send(self, "_visitIRSend_", [anIRSend], smalltalk.IRInliner.superclass || nil);})]));
return self;},
args: ["anIRSend"],
source: "visitIRSend: anIRSend\x0a\x09^ (self shouldInlineSend: anIRSend)\x0a\x09\x09ifTrue: [ self sendInliner inlineSend: anIRSend ]\x0a\x09\x09ifFalse: [ super visitIRSend: anIRSend ]",
messageSends: ["ifTrue:ifFalse:", "shouldInlineSend:", "inlineSend:", "sendInliner", "visitIRSend:"],
referencedClasses: []
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
((($receiver = smalltalk.send(aNode, "_canBeInlined", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_sendInliner", []), "_inlineSend_", [aNode]);})() : (function(){return smalltalk.send(self, "_visitSendNode_", [aNode], smalltalk.IRInliningASTResolver.superclass || nil);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_sendInliner", []), "_inlineSend_", [aNode]);}), (function(){return smalltalk.send(self, "_visitSendNode_", [aNode], smalltalk.IRInliningASTResolver.superclass || nil);})]));
return self;},
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09aNode canBeInlined\x0a\x09\x09ifTrue: [ self sendInliner inlineSend: aNode ]\x0a\x09\x09ifFalse: [ super visitSendNode: aNode ]",
messageSends: ["ifTrue:ifFalse:", "canBeInlined", "inlineSend:", "sendInliner", "visitSendNode:"],
referencedClasses: []
}),
smalltalk.IRInliner);



smalltalk.addClass('IRInliningJSTranslator', smalltalk.IRJSTranslator, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_visitIRInlinedAssignment_",
smalltalk.method({
selector: "visitIRInlinedAssignment:",
category: 'visiting',
fn: function (anIRInlinedAssignment){
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
fn: function (anIRInlinedClosure){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(anIRInlinedClosure, "_instructions", []), "_allButLast", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_", [each]);})]);
(($receiver = smalltalk.send(anIRInlinedClosure, "_assignTo", [])) != nil && $receiver != undefined) ? (function(){smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(anIRInlinedClosure, "_assignTo", []), "_variable", []), "_alias", [])]);return smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutAssignment", []);})() : nil;
smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRInlinedClosure, "_instructions", []), "_last", [])]);
return self;},
args: ["anIRInlinedClosure"],
source: "visitIRInlinedClosure: anIRInlinedClosure\x0a\x09anIRInlinedClosure instructions allButLast do: [ :each | self visit: each ].\x0a\x09anIRInlinedClosure assignTo ifNotNil: [\x0a\x09\x09self stream nextPutAll: anIRInlinedClosure assignTo variable alias.\x0a\x09\x09self stream nextPutAssignment ].\x0a\x09self visit: anIRInlinedClosure instructions last",
messageSends: ["do:", "allButLast", "instructions", "visit:", "ifNotNil:", "assignTo", "nextPutAll:", "stream", "alias", "variable", "nextPutAssignment", "last"],
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
smalltalk.send(smalltalk.send(self, "_stream", []), "_nextPutIf_with_", [(function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRInlinedIfTrue, "_instructions", []), "_first", [])]);}), (function(){return smalltalk.send(self, "_visit_", [smalltalk.send(smalltalk.send(anIRInlinedIfTrue, "_instructions", []), "_last", [])]);})]);
return self;},
args: ["anIRInlinedIfTrue"],
source: "visitIRInlinedIfTrue: anIRInlinedIfTrue\x0a\x09self stream \x0a\x09\x09nextPutIf: [ self visit: anIRInlinedIfTrue instructions first ]\x0a\x09\x09with: [ self visit: anIRInlinedIfTrue instructions last ]",
messageSends: ["nextPutIf:with:", "stream", "visit:", "first", "instructions", "last"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);



smalltalk.addClass('IRSendInliner', smalltalk.Object, ['send', 'translator'], 'Compiler-Inlining');
smalltalk.IRSendInliner.comment="I inline some message sends and block closure arguments. I heavily rely on #perform: to dispatch inlining methods."
smalltalk.addMethod(
"_ifTrue_",
smalltalk.method({
selector: "ifTrue:",
category: 'inlining',
fn: function (anIRInstruction){
var self=this;
var inlinedSend=nil;
var inlinedClosure=nil;
((($receiver = smalltalk.send(anIRInstruction, "_isClosure", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_inliningError_", ["Message argument should be a block"]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_inliningError_", ["Message argument should be a block"]);})]));
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(anIRInstruction, "_arguments", []), "_size", []), "__eq", [(0)])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_inliningError_", ["Inlined block should have zero argument"]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_inliningError_", ["Inlined block should have zero argument"]);})]));
(inlinedClosure=smalltalk.send(self, "_inlinedClosure", []));
smalltalk.send(smalltalk.send(anIRInstruction, "_instructions", []), "_do_", [(function(each){(instruction=smalltalk.send(smalltalk.send(smalltalk.send(self, "_translator", []), "_visit_", [each]), "_first", []));return smalltalk.send(inlinedClosure, "_add_", [(typeof instruction == 'undefined' ? nil : instruction)]);})]);
(inlinedSend=smalltalk.send((smalltalk.IRInlinedIfTrue || IRInlinedIfTrue), "_new", []));
(function($rec){smalltalk.send($rec, "_add_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_send", []), "_instructions", []), "_first", [])]);return smalltalk.send($rec, "_add_", [inlinedClosure]);})(inlinedSend);
smalltalk.send(smalltalk.send(self, "_send", []), "_replaceWith_", [inlinedSend]);
return inlinedSend;
return self;},
args: ["anIRInstruction"],
source: "ifTrue: anIRInstruction\x0a\x09| inlinedSend inlinedClosure |\x0a\x0a\x09anIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].\x0a\x09anIRInstruction arguments size = 0 ifFalse: [ self inliningError: 'Inlined block should have zero argument' ].\x0a\x0a\x09inlinedClosure := self inlinedClosure.\x0a\x09anIRInstruction instructions do: [ :each |\x0a\x09\x09instruction := (self translator visit: each) first.\x0a\x09\x09inlinedClosure add: instruction ].\x0a\x0a\x09inlinedSend := IRInlinedIfTrue new.\x0a\x09inlinedSend\x0a\x09\x09add: self send instructions first;\x0a\x09\x09add: inlinedClosure.\x0a\x0a\x09self send replaceWith: inlinedSend.\x0a\x09^ inlinedSend",
messageSends: ["ifFalse:", "isClosure", "inliningError:", "=", "size", "arguments", "inlinedClosure", "do:", "instructions", "first", "visit:", "translator", "add:", "new", "send", "replaceWith:"],
referencedClasses: ["IRInlinedIfTrue"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlineSend_",
smalltalk.method({
selector: "inlineSend:",
category: 'inlining',
fn: function (anIRSend){
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
category: 'accessing',
fn: function (){
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
return ["ifTrue:"];
return self;},
args: [],
source: "inlinedSelectors\x0a\x09^ #('ifTrue:')",
messageSends: [],
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
fn: function (anIRAssignment){
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
"_inlinedClosure",
smalltalk.method({
selector: "inlinedClosure",
category: 'accessing',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_assignTo_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_assignment", []), "_instructions", []), "_first", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_inlinedClosure", [], smalltalk.IRAssignmentInliner.superclass || nil));
return self;},
args: [],
source: "inlinedClosure\x0a\x09^ super inlinedClosure\x0a\x09\x09assignTo: self assignment instructions first;\x0a\x09\x09yourself",
messageSends: ["assignTo:", "first", "instructions", "assignment", "yourself", "inlinedClosure"],
referencedClasses: []
}),
smalltalk.IRAssignmentInliner);



smalltalk.addClass('InliningCodeGenerator', smalltalk.CodeGenerator, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
category: 'compiling',
fn: function (aNode){
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
fn: function (){
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



