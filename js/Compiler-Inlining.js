smalltalk.addPackage('Compiler-Inlining', {});
smalltalk.addClass('IRInlinedAssignment', smalltalk.IRAssignment, [], 'Compiler-Inlining');
smalltalk.IRInlinedAssignment.comment="I represent an inlined assignment instruction."
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRInlinedAssignment_",[self]);
return $1;
},
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
},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedAssignment);



smalltalk.addClass('IRInlinedClosure', smalltalk.IRClosure, [], 'Compiler-Inlining');
smalltalk.IRInlinedClosure.comment="I represent an inlined closure instruction."
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor,"_visitIRInlinedClosure_",[self]);
return self},
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
fn: function (){
var self=this;
return true;
},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedClosure);



smalltalk.addClass('IRInlinedReturn', smalltalk.IRReturn, [], 'Compiler-Inlining');
smalltalk.IRInlinedReturn.comment="I represent an inlined local return instruction."
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRInlinedReturn_",[self]);
return $1;
},
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
fn: function (){
var self=this;
return true;
},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedReturn);



smalltalk.addClass('IRInlinedNonLocalReturn', smalltalk.IRInlinedReturn, [], 'Compiler-Inlining');
smalltalk.IRInlinedNonLocalReturn.comment="I represent an inlined non local return instruction."
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRInlinedNonLocalReturn_",[self]);
return $1;
},
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
},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedNonLocalReturn);



smalltalk.addClass('IRInlinedSend', smalltalk.IRSend, [], 'Compiler-Inlining');
smalltalk.IRInlinedSend.comment="I am the abstract super class of inlined message send instructions."
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor,"_visitInlinedSend_",[self]);
return self},
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
},
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
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor,"_visitIRInlinedIfFalse_",[self]);
return self},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedIfFalse: self",
messageSends: ["visitIRInlinedIfFalse:"],
referencedClasses: []
}),
smalltalk.IRInlinedIfFalse);



smalltalk.addClass('IRInlinedIfNilIfNotNil', smalltalk.IRInlinedSend, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor,"_visitIRInlinedIfNilIfNotNil_",[self]);
return self},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedIfNilIfNotNil: self",
messageSends: ["visitIRInlinedIfNilIfNotNil:"],
referencedClasses: []
}),
smalltalk.IRInlinedIfNilIfNotNil);



smalltalk.addClass('IRInlinedIfTrue', smalltalk.IRInlinedSend, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor,"_visitIRInlinedIfTrue_",[self]);
return self},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedIfTrue: self",
messageSends: ["visitIRInlinedIfTrue:"],
referencedClasses: []
}),
smalltalk.IRInlinedIfTrue);



smalltalk.addClass('IRInlinedIfTrueIfFalse', smalltalk.IRInlinedSend, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor,"_visitIRInlinedIfTrueIfFalse_",[self]);
return self},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedIfTrueIfFalse: self",
messageSends: ["visitIRInlinedIfTrueIfFalse:"],
referencedClasses: []
}),
smalltalk.IRInlinedIfTrueIfFalse);



smalltalk.addClass('IRInlinedSequence', smalltalk.IRBlockSequence, [], 'Compiler-Inlining');
smalltalk.IRInlinedSequence.comment="I represent a (block) sequence inside an inlined closure instruction (instance of `IRInlinedClosure`)."
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor,"_visitIRInlinedSequence_",[self]);
return self},
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
fn: function (){
var self=this;
return true;
},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedSequence);



smalltalk.addClass('IRInliner', smalltalk.IRVisitor, [], 'Compiler-Inlining');
smalltalk.IRInliner.comment="I visit an IR tree, inlining message sends and block closures.\x0a\x0aMessage selectors that can be inlined are answered by `IRSendInliner >> #inlinedSelectors`"
smalltalk.addMethod(
"_assignmentInliner",
smalltalk.method({
selector: "assignmentInliner",
category: 'factory',
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.IRAssignmentInliner || IRAssignmentInliner),"_new",[]);
smalltalk.send($2,"_translator_",[self]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: [],
source: "assignmentInliner\x0a\x09^ IRAssignmentInliner new \x0a\x09\x09translator: self;\x0a\x09\x09yourself",
messageSends: ["translator:", "new", "yourself"],
referencedClasses: ["IRAssignmentInliner"]
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_nonLocalReturnInliner",
smalltalk.method({
selector: "nonLocalReturnInliner",
category: 'factory',
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.IRNonLocalReturnInliner || IRNonLocalReturnInliner),"_new",[]);
smalltalk.send($2,"_translator_",[self]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: [],
source: "nonLocalReturnInliner\x0a\x09^ IRNonLocalReturnInliner new \x0a\x09\x09translator: self;\x0a\x09\x09yourself",
messageSends: ["translator:", "new", "yourself"],
referencedClasses: ["IRNonLocalReturnInliner"]
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_returnInliner",
smalltalk.method({
selector: "returnInliner",
category: 'factory',
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.IRReturnInliner || IRReturnInliner),"_new",[]);
smalltalk.send($2,"_translator_",[self]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: [],
source: "returnInliner\x0a\x09^ IRReturnInliner new \x0a\x09\x09translator: self;\x0a\x09\x09yourself",
messageSends: ["translator:", "new", "yourself"],
referencedClasses: ["IRReturnInliner"]
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_sendInliner",
smalltalk.method({
selector: "sendInliner",
category: 'factory',
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.IRSendInliner || IRSendInliner),"_new",[]);
smalltalk.send($2,"_translator_",[self]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: [],
source: "sendInliner\x0a\x09^ IRSendInliner new \x0a\x09\x09translator: self;\x0a\x09\x09yourself",
messageSends: ["translator:", "new", "yourself"],
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
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(anIRAssignment,"_isInlined",[]),"_not",[]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(anIRAssignment,"_instructions",[]),"_last",[]),"_isSend",[]),"_and_",[(function(){
return smalltalk.send(self,"_shouldInlineSend_",[smalltalk.send(smalltalk.send(anIRAssignment,"_instructions",[]),"_last",[])]);
})]);
})]);
return $1;
},
args: ["anIRAssignment"],
source: "shouldInlineAssignment: anIRAssignment\x0a\x09^ anIRAssignment isInlined not and: [ \x0a\x09\x09anIRAssignment instructions last isSend and: [\x09\x0a\x09\x09\x09self shouldInlineSend: (anIRAssignment instructions last) ]]",
messageSends: ["and:", "shouldInlineSend:", "last", "instructions", "isSend", "not", "isInlined"],
referencedClasses: []
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_shouldInlineReturn_",
smalltalk.method({
selector: "shouldInlineReturn:",
category: 'testing',
fn: function (anIRReturn){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(anIRReturn,"_isInlined",[]),"_not",[]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(anIRReturn,"_instructions",[]),"_first",[]),"_isSend",[]),"_and_",[(function(){
return smalltalk.send(self,"_shouldInlineSend_",[smalltalk.send(smalltalk.send(anIRReturn,"_instructions",[]),"_first",[])]);
})]);
})]);
return $1;
},
args: ["anIRReturn"],
source: "shouldInlineReturn: anIRReturn\x0a\x09^ anIRReturn isInlined not and: [ \x0a\x09\x09anIRReturn instructions first isSend and: [\x09\x0a\x09\x09\x09self shouldInlineSend: (anIRReturn instructions first) ]]",
messageSends: ["and:", "shouldInlineSend:", "first", "instructions", "isSend", "not", "isInlined"],
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
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(anIRSend,"_isInlined",[]),"_not",[]),"_and_",[(function(){
return smalltalk.send((smalltalk.IRSendInliner || IRSendInliner),"_shouldInline_",[anIRSend]);
})]);
return $1;
},
args: ["anIRSend"],
source: "shouldInlineSend: anIRSend\x0a\x09^ anIRSend isInlined not and: [\x0a\x09\x09IRSendInliner shouldInline: anIRSend ]",
messageSends: ["and:", "shouldInline:", "not", "isInlined"],
referencedClasses: ["IRSendInliner"]
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_transformNonLocalReturn_",
smalltalk.method({
selector: "transformNonLocalReturn:",
category: 'visiting',
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
},
args: ["anIRNonLocalReturn"],
source: "transformNonLocalReturn: anIRNonLocalReturn\x0a\x09\x22Replace a non local return into a local return\x22\x0a\x0a\x09| localReturn |\x0a\x09anIRNonLocalReturn scope canInlineNonLocalReturns ifTrue: [\x0a\x09\x09anIRNonLocalReturn scope methodScope removeNonLocalReturn: anIRNonLocalReturn scope.\x0a\x09\x09localReturn := IRReturn new\x0a\x09\x09\x09scope: anIRNonLocalReturn scope;\x0a\x09\x09\x09yourself.\x0a\x09\x09anIRNonLocalReturn instructions do: [ :each |\x0a\x09\x09\x09localReturn add: each ].\x0a\x09\x09anIRNonLocalReturn replaceWith: localReturn.\x0a\x09\x09^ localReturn ].\x0a\x09^ super visitIRNonLocalReturn: anIRNonLocalReturn",
messageSends: ["ifTrue:", "removeNonLocalReturn:", "scope", "methodScope", "scope:", "new", "yourself", "do:", "add:", "instructions", "replaceWith:", "canInlineNonLocalReturns", "visitIRNonLocalReturn:"],
referencedClasses: ["IRReturn"]
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRAssignment_",
smalltalk.method({
selector: "visitIRAssignment:",
category: 'visiting',
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
},
args: ["anIRAssignment"],
source: "visitIRAssignment: anIRAssignment\x0a\x09^ (self shouldInlineAssignment: anIRAssignment) \x0a\x09\x09ifTrue: [ self assignmentInliner inlineAssignment: anIRAssignment ]\x0a\x09\x09ifFalse: [ super visitIRAssignment: anIRAssignment ]",
messageSends: ["ifTrue:ifFalse:", "inlineAssignment:", "assignmentInliner", "visitIRAssignment:", "shouldInlineAssignment:"],
referencedClasses: []
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRNonLocalReturn_",
smalltalk.method({
selector: "visitIRNonLocalReturn:",
category: 'visiting',
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
},
args: ["anIRNonLocalReturn"],
source: "visitIRNonLocalReturn: anIRNonLocalReturn\x0a\x09^ (self shouldInlineReturn: anIRNonLocalReturn) \x0a\x09\x09ifTrue: [ self nonLocalReturnInliner inlineReturn: anIRNonLocalReturn ]\x0a\x09\x09ifFalse: [ self transformNonLocalReturn: anIRNonLocalReturn ]",
messageSends: ["ifTrue:ifFalse:", "inlineReturn:", "nonLocalReturnInliner", "transformNonLocalReturn:", "shouldInlineReturn:"],
referencedClasses: []
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRReturn_",
smalltalk.method({
selector: "visitIRReturn:",
category: 'visiting',
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
},
args: ["anIRReturn"],
source: "visitIRReturn: anIRReturn\x0a\x09^ (self shouldInlineReturn: anIRReturn) \x0a\x09\x09ifTrue: [ self returnInliner inlineReturn: anIRReturn ]\x0a\x09\x09ifFalse: [ super visitIRReturn: anIRReturn ]",
messageSends: ["ifTrue:ifFalse:", "inlineReturn:", "returnInliner", "visitIRReturn:", "shouldInlineReturn:"],
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
var $2,$1;
$2=smalltalk.send(self,"_shouldInlineSend_",[anIRSend]);
if(smalltalk.assert($2)){
$1=smalltalk.send(smalltalk.send(self,"_sendInliner",[]),"_inlineSend_",[anIRSend]);
} else {
$1=smalltalk.send(self,"_visitIRSend_",[anIRSend],smalltalk.IRVisitor);
};
return $1;
},
args: ["anIRSend"],
source: "visitIRSend: anIRSend\x0a\x09^ (self shouldInlineSend: anIRSend)\x0a\x09\x09ifTrue: [ self sendInliner inlineSend: anIRSend ]\x0a\x09\x09ifFalse: [ super visitIRSend: anIRSend ]",
messageSends: ["ifTrue:ifFalse:", "inlineSend:", "sendInliner", "visitIRSend:", "shouldInlineSend:"],
referencedClasses: []
}),
smalltalk.IRInliner);



smalltalk.addClass('IRInliningJSTranslator', smalltalk.IRJSTranslator, [], 'Compiler-Inlining');
smalltalk.IRInliningJSTranslator.comment="I am a specialized JavaScript translator able to write inlined IR instructions to JavaScript stream (`JSStream` instance)."
smalltalk.addMethod(
"_visitIRInlinedAssignment_",
smalltalk.method({
selector: "visitIRInlinedAssignment:",
category: 'visiting',
fn: function (anIRInlinedAssignment){
var self=this;
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedAssignment,"_instructions",[]),"_last",[])]);
return self},
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
smalltalk.send(smalltalk.send(anIRInlinedClosure,"_instructions",[]),"_do_",[(function(each){
return smalltalk.send(self,"_visit_",[each]);
})]);
return self},
args: ["anIRInlinedClosure"],
source: "visitIRInlinedClosure: anIRInlinedClosure\x0a\x09anIRInlinedClosure instructions do: [ :each |\x0a\x09\x09self visit: each ]",
messageSends: ["do:", "visit:", "instructions"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfFalse_",
smalltalk.method({
selector: "visitIRInlinedIfFalse:",
category: 'visiting',
fn: function (anIRInlinedIfFalse){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutIf_with_",[(function(){
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["! smalltalk.assert("]);
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfFalse,"_instructions",[]),"_first",[])]);
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[")"]);
}),(function(){
return smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfFalse,"_instructions",[]),"_last",[])]);
})]);
return self},
args: ["anIRInlinedIfFalse"],
source: "visitIRInlinedIfFalse: anIRInlinedIfFalse\x0a\x09self stream nextPutIf: [ \x0a\x09\x09self stream nextPutAll: '! smalltalk.assert('.\x0a\x09\x09self visit: anIRInlinedIfFalse instructions first.\x0a\x09\x09self stream nextPutAll: ')' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfFalse instructions last ]",
messageSends: ["nextPutIf:with:", "nextPutAll:", "stream", "visit:", "first", "instructions", "last"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfNil_",
smalltalk.method({
selector: "visitIRInlinedIfNil:",
category: 'visiting',
fn: function (anIRInlinedIfNil){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutIf_with_",[(function(){
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["($receiver = "]);
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfNil,"_instructions",[]),"_first",[])]);
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[") == nil || $receiver == undefined"]);
}),(function(){
return smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfNil,"_instructions",[]),"_last",[])]);
})]);
return self},
args: ["anIRInlinedIfNil"],
source: "visitIRInlinedIfNil: anIRInlinedIfNil\x0a\x09self stream nextPutIf: [ \x0a\x09\x09self stream nextPutAll: '($receiver = '. \x0a\x09\x09self visit: anIRInlinedIfNil instructions first.\x0a\x09\x09self stream nextPutAll: ') == nil || $receiver == undefined' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfNil instructions last ]",
messageSends: ["nextPutIf:with:", "nextPutAll:", "stream", "visit:", "first", "instructions", "last"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfNilIfNotNil_",
smalltalk.method({
selector: "visitIRInlinedIfNilIfNotNil:",
category: 'visiting',
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
return self},
args: ["anIRInlinedIfNilIfNotNil"],
source: "visitIRInlinedIfNilIfNotNil: anIRInlinedIfNilIfNotNil\x0a\x09self stream \x0a\x09\x09nextPutIfElse: [ \x0a\x09\x09\x09self stream nextPutAll: '($receiver = '. \x0a\x09\x09\x09self visit: anIRInlinedIfNilIfNotNil instructions first.\x0a\x09\x09\x09self stream nextPutAll: ') == nil || $receiver == undefined' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfNilIfNotNil instructions second ]\x0a\x09\x09with: [ self visit: anIRInlinedIfNilIfNotNil instructions third ]",
messageSends: ["nextPutIfElse:with:with:", "nextPutAll:", "stream", "visit:", "first", "instructions", "second", "third"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfTrue_",
smalltalk.method({
selector: "visitIRInlinedIfTrue:",
category: 'visiting',
fn: function (anIRInlinedIfTrue){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutIf_with_",[(function(){
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["smalltalk.assert("]);
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfTrue,"_instructions",[]),"_first",[])]);
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[")"]);
}),(function(){
return smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfTrue,"_instructions",[]),"_last",[])]);
})]);
return self},
args: ["anIRInlinedIfTrue"],
source: "visitIRInlinedIfTrue: anIRInlinedIfTrue\x0a\x09self stream nextPutIf: [ \x0a\x09\x09self stream nextPutAll: 'smalltalk.assert('. \x0a\x09\x09self visit: anIRInlinedIfTrue instructions first.\x0a\x09\x09self stream nextPutAll: ')' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfTrue instructions last ]",
messageSends: ["nextPutIf:with:", "nextPutAll:", "stream", "visit:", "first", "instructions", "last"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfTrueIfFalse_",
smalltalk.method({
selector: "visitIRInlinedIfTrueIfFalse:",
category: 'visiting',
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
return self},
args: ["anIRInlinedIfTrueIfFalse"],
source: "visitIRInlinedIfTrueIfFalse: anIRInlinedIfTrueIfFalse\x0a\x09self stream \x0a\x09\x09nextPutIfElse: [ \x0a\x09\x09\x09self stream nextPutAll: 'smalltalk.assert('. \x0a\x09\x09\x09self visit: anIRInlinedIfTrueIfFalse instructions first.\x0a\x09\x09\x09self stream nextPutAll: ')' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfTrueIfFalse instructions second ]\x0a\x09\x09with: [ self visit: anIRInlinedIfTrueIfFalse instructions third ]",
messageSends: ["nextPutIfElse:with:with:", "nextPutAll:", "stream", "visit:", "first", "instructions", "second", "third"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedNonLocalReturn_",
smalltalk.method({
selector: "visitIRInlinedNonLocalReturn:",
category: 'visiting',
fn: function (anIRInlinedReturn){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutStatementWith_",[(function(){
return smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedReturn,"_instructions",[]),"_last",[])]);
})]);
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutNonLocalReturnWith_",[(function(){
})]);
return self},
args: ["anIRInlinedReturn"],
source: "visitIRInlinedNonLocalReturn: anIRInlinedReturn\x0a\x09self stream nextPutStatementWith: [\x0a\x09\x09self visit: anIRInlinedReturn instructions last ].\x0a\x09self stream nextPutNonLocalReturnWith: [ ]",
messageSends: ["nextPutStatementWith:", "visit:", "last", "instructions", "stream", "nextPutNonLocalReturnWith:"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedReturn_",
smalltalk.method({
selector: "visitIRInlinedReturn:",
category: 'visiting',
fn: function (anIRInlinedReturn){
var self=this;
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedReturn,"_instructions",[]),"_last",[])]);
return self},
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
fn: function (anIRInlinedSequence){
var self=this;
smalltalk.send(smalltalk.send(anIRInlinedSequence,"_instructions",[]),"_do_",[(function(each){
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutStatementWith_",[(function(){
return smalltalk.send(self,"_visit_",[each]);
})]);
})]);
return self},
args: ["anIRInlinedSequence"],
source: "visitIRInlinedSequence: anIRInlinedSequence\x0a\x09anIRInlinedSequence instructions do: [ :each | \x0a\x09\x09self stream nextPutStatementWith: [ self visit: each ]]",
messageSends: ["do:", "nextPutStatementWith:", "visit:", "stream", "instructions"],
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
fn: function (anIRInstruction){
var self=this;
var $1;
$1=smalltalk.send(self,"_inlinedSend_with_",[smalltalk.send((smalltalk.IRInlinedIfFalse || IRInlinedIfFalse),"_new",[]),anIRInstruction]);
return $1;
},
args: ["anIRInstruction"],
source: "ifFalse: anIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfFalse new with: anIRInstruction",
messageSends: ["inlinedSend:with:", "new"],
referencedClasses: ["IRInlinedIfFalse"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifFalse_ifTrue_",
smalltalk.method({
selector: "ifFalse:ifTrue:",
category: 'inlining',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
var $1;
$1=smalltalk.send(self,"_perform_withArguments_",[smalltalk.symbolFor("ifTrue:ifFalse:"),[anotherIRInstruction,anIRInstruction]]);
return $1;
},
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifFalse: anIRInstruction ifTrue: anotherIRInstruction\x0a\x09^ self perform: #ifTrue:ifFalse: withArguments: { anotherIRInstruction. anIRInstruction }",
messageSends: ["perform:withArguments:"],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifNil_",
smalltalk.method({
selector: "ifNil:",
category: 'inlining',
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
},
args: ["anIRInstruction"],
source: "ifNil: anIRInstruction\x0a\x09^ self \x0a\x09\x09inlinedSend: IRInlinedIfNilIfNotNil new \x0a\x09\x09with: anIRInstruction\x0a\x09\x09with: (IRClosure new\x0a\x09\x09\x09scope: anIRInstruction scope copy;\x0a\x09\x09\x09add: (IRBlockSequence new\x0a\x09\x09\x09\x09add: self send instructions first;\x0a\x09\x09\x09\x09yourself);\x0a\x09\x09\x09yourself)",
messageSends: ["inlinedSend:with:with:", "new", "scope:", "copy", "scope", "add:", "first", "instructions", "send", "yourself"],
referencedClasses: ["IRInlinedIfNilIfNotNil", "IRClosure", "IRBlockSequence"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifNil_ifNotNil_",
smalltalk.method({
selector: "ifNil:ifNotNil:",
category: 'inlining',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
var $1;
$1=smalltalk.send(self,"_inlinedSend_with_with_",[smalltalk.send((smalltalk.IRInlinedIfNilIfNotNil || IRInlinedIfNilIfNotNil),"_new",[]),anIRInstruction,anotherIRInstruction]);
return $1;
},
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifNil: anIRInstruction ifNotNil: anotherIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfNilIfNotNil new with: anIRInstruction with: anotherIRInstruction",
messageSends: ["inlinedSend:with:with:", "new"],
referencedClasses: ["IRInlinedIfNilIfNotNil"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifNotNil_",
smalltalk.method({
selector: "ifNotNil:",
category: 'inlining',
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
},
args: ["anIRInstruction"],
source: "ifNotNil: anIRInstruction\x0a\x09^ self \x0a\x09\x09inlinedSend: IRInlinedIfNilIfNotNil new\x0a\x09\x09with: (IRClosure new\x0a\x09\x09\x09scope: anIRInstruction scope copy;\x0a\x09\x09\x09add: (IRBlockSequence new\x0a\x09\x09\x09\x09add: self send instructions first;\x0a\x09\x09\x09\x09yourself);\x0a\x09\x09\x09yourself)\x0a\x09\x09with: anIRInstruction",
messageSends: ["inlinedSend:with:with:", "new", "scope:", "copy", "scope", "add:", "first", "instructions", "send", "yourself"],
referencedClasses: ["IRInlinedIfNilIfNotNil", "IRClosure", "IRBlockSequence"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifNotNil_ifNil_",
smalltalk.method({
selector: "ifNotNil:ifNil:",
category: 'inlining',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
var $1;
$1=smalltalk.send(self,"_inlinedSend_with_with_",[smalltalk.send((smalltalk.IRInlinedIfNilIfNotNil || IRInlinedIfNilIfNotNil),"_new",[]),anotherIRInstruction,anIRInstruction]);
return $1;
},
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifNotNil: anIRInstruction ifNil: anotherIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfNilIfNotNil new with: anotherIRInstruction with: anIRInstruction",
messageSends: ["inlinedSend:with:with:", "new"],
referencedClasses: ["IRInlinedIfNilIfNotNil"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifTrue_",
smalltalk.method({
selector: "ifTrue:",
category: 'inlining',
fn: function (anIRInstruction){
var self=this;
var $1;
$1=smalltalk.send(self,"_inlinedSend_with_",[smalltalk.send((smalltalk.IRInlinedIfTrue || IRInlinedIfTrue),"_new",[]),anIRInstruction]);
return $1;
},
args: ["anIRInstruction"],
source: "ifTrue: anIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfTrue new with: anIRInstruction",
messageSends: ["inlinedSend:with:", "new"],
referencedClasses: ["IRInlinedIfTrue"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifTrue_ifFalse_",
smalltalk.method({
selector: "ifTrue:ifFalse:",
category: 'inlining',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
var $1;
$1=smalltalk.send(self,"_inlinedSend_with_with_",[smalltalk.send((smalltalk.IRInlinedIfTrueIfFalse || IRInlinedIfTrueIfFalse),"_new",[]),anIRInstruction,anotherIRInstruction]);
return $1;
},
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifTrue: anIRInstruction ifFalse: anotherIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfTrueIfFalse new with: anIRInstruction with: anotherIRInstruction",
messageSends: ["inlinedSend:with:with:", "new"],
referencedClasses: ["IRInlinedIfTrueIfFalse"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlineClosure_",
smalltalk.method({
selector: "inlineClosure:",
category: 'inlining',
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
},
args: ["anIRClosure"],
source: "inlineClosure: anIRClosure\x0a\x09| inlinedClosure sequence statements |\x0a\x0a\x09inlinedClosure := self inlinedClosure.\x0a\x09inlinedClosure scope: anIRClosure scope.\x0a\x0a\x09\x22Add the possible temp declarations\x22\x0a\x09anIRClosure instructions do: [ :each | \x0a\x09\x09each isSequence ifFalse: [\x0a\x09\x09\x09inlinedClosure add: each ]].\x0a\x0a\x09\x22Add a block sequence\x22\x0a\x09sequence := self inlinedSequence.\x0a\x09inlinedClosure add: sequence.\x0a\x0a\x09\x22Get all the statements\x22\x0a\x09statements := anIRClosure instructions last instructions.\x0a\x09\x0a\x09statements ifNotEmpty: [\x0a\x09\x09statements allButLast do: [ :each | sequence add: each ].\x0a\x0a\x09\x09\x22Inlined closures don't have implicit local returns\x22\x0a\x09\x09(statements last isReturn and: [ statements last isBlockReturn ])\x0a\x09\x09\x09ifTrue: [ sequence add: statements last instructions first ]\x0a\x09\x09\x09ifFalse: [ sequence add: statements last ] ].\x0a\x0a\x09^ inlinedClosure",
messageSends: ["inlinedClosure", "scope:", "scope", "do:", "ifFalse:", "add:", "isSequence", "instructions", "inlinedSequence", "last", "ifNotEmpty:", "allButLast", "ifTrue:ifFalse:", "first", "and:", "isBlockReturn", "isReturn"],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlineSend_",
smalltalk.method({
selector: "inlineSend:",
category: 'inlining',
fn: function (anIRSend){
var self=this;
var $1;
smalltalk.send(self,"_send_",[anIRSend]);
$1=smalltalk.send(self,"_perform_withArguments_",[smalltalk.send(smalltalk.send(self,"_send",[]),"_selector",[]),smalltalk.send(smalltalk.send(smalltalk.send(self,"_send",[]),"_instructions",[]),"_allButFirst",[])]);
return $1;
},
args: ["anIRSend"],
source: "inlineSend: anIRSend\x0a\x09self send: anIRSend.\x0a\x09^ self \x0a\x09\x09perform: self send selector \x0a\x09\x09withArguments: self send instructions allButFirst",
messageSends: ["send:", "perform:withArguments:", "selector", "send", "allButFirst", "instructions"],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedClosure",
smalltalk.method({
selector: "inlinedClosure",
category: 'factory',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.IRInlinedClosure || IRInlinedClosure),"_new",[]);
return $1;
},
args: [],
source: "inlinedClosure\x0a\x09^ IRInlinedClosure new",
messageSends: ["new"],
referencedClasses: ["IRInlinedClosure"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedSend_with_",
smalltalk.method({
selector: "inlinedSend:with:",
category: 'inlining',
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
},
args: ["inlinedSend", "anIRInstruction"],
source: "inlinedSend: inlinedSend with: anIRInstruction\x0a\x09| inlinedClosure |\x0a\x0a\x09anIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].\x0a\x09anIRInstruction arguments size = 0 ifFalse: [ self inliningError: 'Inlined block should have zero argument' ].\x0a\x0a\x09inlinedClosure := self translator visit: (self inlineClosure: anIRInstruction).\x0a\x0a\x09inlinedSend\x0a\x09\x09add: self send instructions first;\x0a\x09\x09add: inlinedClosure.\x0a\x0a\x09self send replaceWith: inlinedSend.\x0a\x0a\x09^ inlinedSend",
messageSends: ["ifFalse:", "inliningError:", "isClosure", "=", "size", "arguments", "visit:", "inlineClosure:", "translator", "add:", "first", "instructions", "send", "replaceWith:"],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedSend_with_with_",
smalltalk.method({
selector: "inlinedSend:with:with:",
category: 'inlining',
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
},
args: ["inlinedSend", "anIRInstruction", "anotherIRInstruction"],
source: "inlinedSend: inlinedSend with: anIRInstruction with: anotherIRInstruction\x0a\x09| inlinedClosure1 inlinedClosure2 |\x0a\x0a\x09anIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].\x0a\x09anIRInstruction arguments size = 0 ifFalse: [ self inliningError: 'Inlined block should have zero argument' ].\x0a\x0a\x09anotherIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].\x0a\x09anotherIRInstruction arguments size = 0 ifFalse: [ self inliningError: 'Inlined block should have zero argument' ].\x0a\x0a\x09inlinedClosure1 := self translator visit: (self inlineClosure: anIRInstruction).\x0a\x09inlinedClosure2 := self translator visit: (self inlineClosure: anotherIRInstruction).\x0a\x0a\x0a\x09inlinedSend\x0a\x09\x09add: self send instructions first;\x0a\x09\x09add: inlinedClosure1;\x0a\x09\x09add: inlinedClosure2.\x0a\x0a\x09self send replaceWith: inlinedSend.\x0a\x09^ inlinedSend",
messageSends: ["ifFalse:", "inliningError:", "isClosure", "=", "size", "arguments", "visit:", "inlineClosure:", "translator", "add:", "first", "instructions", "send", "replaceWith:"],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedSequence",
smalltalk.method({
selector: "inlinedSequence",
category: 'factory',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.IRInlinedSequence || IRInlinedSequence),"_new",[]);
return $1;
},
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
fn: function (aString){
var self=this;
smalltalk.send((smalltalk.InliningError || InliningError),"_signal_",[aString]);
return self},
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
fn: function (){
var self=this;
return self["@send"];
},
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
fn: function (anIRSend){
var self=this;
self["@send"]=anIRSend;
return self},
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
fn: function (){
var self=this;
return self["@translator"];
},
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
fn: function (anASTTranslator){
var self=this;
self["@translator"]=anASTTranslator;
return self},
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
fn: function (){
var self=this;
return ["ifTrue:", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:", "ifNil:", "ifNotNil:", "ifNil:ifNotNil:", "ifNotNil:ifNil"];
},
args: [],
source: "inlinedSelectors\x0a\x09^ #('ifTrue:' 'ifFalse:' 'ifTrue:ifFalse:' 'ifFalse:ifTrue:' 'ifNil:' 'ifNotNil:' 'ifNil:ifNotNil:' 'ifNotNil:ifNil')",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSendInliner.klass);

smalltalk.addMethod(
"_shouldInline_",
smalltalk.method({
selector: "shouldInline:",
category: 'accessing',
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
},
args: ["anIRInstruction"],
source: "shouldInline: anIRInstruction\x0a\x09(self inlinedSelectors includes: anIRInstruction selector) ifFalse: [ ^ false ].\x0a\x09anIRInstruction instructions allButFirst do: [ :each |\x0a\x09\x09each isClosure ifFalse: [ ^ false ]].\x0a\x09^ true",
messageSends: ["ifFalse:", "includes:", "selector", "inlinedSelectors", "do:", "isClosure", "allButFirst", "instructions"],
referencedClasses: []
}),
smalltalk.IRSendInliner.klass);


smalltalk.addClass('IRAssignmentInliner', smalltalk.IRSendInliner, ['assignment'], 'Compiler-Inlining');
smalltalk.IRAssignmentInliner.comment="I inline message sends together with assignments by moving them around into the inline closure instructions. \x0a\x0a##Example\x0a\x0a\x09foo\x0a\x09\x09| a |\x0a\x09\x09a := true ifTrue: [ 1 ]\x0a\x0aWill produce:\x0a\x0a\x09if(smalltalk.assert(true) {\x0a\x09\x09a = 1;\x0a\x09};"
smalltalk.addMethod(
"_assignment",
smalltalk.method({
selector: "assignment",
category: 'accessing',
fn: function (){
var self=this;
return self["@assignment"];
},
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
fn: function (aNode){
var self=this;
self["@assignment"]=aNode;
return self},
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
var inlinedAssignment;
smalltalk.send(self,"_assignment_",[anIRAssignment]);
inlinedAssignment=smalltalk.send((smalltalk.IRInlinedAssignment || IRInlinedAssignment),"_new",[]);
smalltalk.send(smalltalk.send(anIRAssignment,"_instructions",[]),"_do_",[(function(each){
return smalltalk.send(inlinedAssignment,"_add_",[each]);
})]);
smalltalk.send(anIRAssignment,"_replaceWith_",[inlinedAssignment]);
smalltalk.send(self,"_inlineSend_",[smalltalk.send(smalltalk.send(inlinedAssignment,"_instructions",[]),"_last",[])]);
return inlinedAssignment;
},
args: ["anIRAssignment"],
source: "inlineAssignment: anIRAssignment\x0a\x09| inlinedAssignment |\x0a\x09self assignment: anIRAssignment.\x0a\x09inlinedAssignment := IRInlinedAssignment new.\x0a\x09anIRAssignment instructions do: [ :each |\x0a\x09\x09inlinedAssignment add: each ].\x0a\x09anIRAssignment replaceWith: inlinedAssignment.\x0a\x09self inlineSend: inlinedAssignment instructions last.\x0a\x09^ inlinedAssignment",
messageSends: ["assignment:", "new", "do:", "add:", "instructions", "replaceWith:", "inlineSend:", "last"],
referencedClasses: ["IRInlinedAssignment"]
}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
"_inlineClosure_",
smalltalk.method({
selector: "inlineClosure:",
category: 'inlining',
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
},
args: ["anIRClosure"],
source: "inlineClosure: anIRClosure\x0a\x09| inlinedClosure statements |\x0a\x0a\x09inlinedClosure := super inlineClosure: anIRClosure.\x0a\x09statements := inlinedClosure instructions last instructions.\x0a\x09\x0a\x09statements ifNotEmpty: [\x0a\x09\x09statements last canBeAssigned ifTrue: [\x0a\x09\x09\x09statements last replaceWith: (IRAssignment new\x0a\x09\x09\x09\x09add: self assignment instructions first;\x0a\x09\x09\x09\x09add: statements last copy;\x0a\x09\x09\x09\x09yourself) ] ].\x0a\x0a\x09^ inlinedClosure",
messageSends: ["inlineClosure:", "instructions", "last", "ifNotEmpty:", "ifTrue:", "replaceWith:", "add:", "first", "assignment", "new", "copy", "yourself", "canBeAssigned"],
referencedClasses: ["IRAssignment"]
}),
smalltalk.IRAssignmentInliner);



smalltalk.addClass('IRNonLocalReturnInliner', smalltalk.IRSendInliner, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_inlineClosure_",
smalltalk.method({
selector: "inlineClosure:",
category: 'inlining',
fn: function (anIRClosure){
var self=this;
var $1;
$1=smalltalk.send(self,"_inlineCLosure_",[anIRClosure],smalltalk.IRSendInliner);
return $1;
},
args: ["anIRClosure"],
source: "inlineClosure: anIRClosure\x0a\x09\x22| inlinedClosure statements |\x0a\x0a\x09inlinedClosure := super inlineClosure: anIRClosure.\x0a\x09statements := inlinedClosure instructions last instructions.\x0a\x09\x0a\x09statements ifNotEmpty: [\x0a\x09\x09statements last replaceWith: (IRNonLocalReturn new\x0a\x09\x09\x09add: statements last copy;\x0a\x09\x09\x09yourself) ].\x0a\x0a\x09^ inlinedClosure\x22\x0a\x0a\x09^ super inlineCLosure: anIRClosure",
messageSends: ["inlineCLosure:"],
referencedClasses: []
}),
smalltalk.IRNonLocalReturnInliner);

smalltalk.addMethod(
"_inlinedReturn",
smalltalk.method({
selector: "inlinedReturn",
category: 'factory',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.IRInlinedNonLocalReturn || IRInlinedNonLocalReturn),"_new",[]);
return $1;
},
args: [],
source: "inlinedReturn\x0a\x09^ IRInlinedNonLocalReturn new",
messageSends: ["new"],
referencedClasses: ["IRInlinedNonLocalReturn"]
}),
smalltalk.IRNonLocalReturnInliner);



smalltalk.addClass('IRReturnInliner', smalltalk.IRSendInliner, [], 'Compiler-Inlining');
smalltalk.IRReturnInliner.comment="I inline message sends with inlined closure together with a return instruction."
smalltalk.addMethod(
"_inlineClosure_",
smalltalk.method({
selector: "inlineClosure:",
category: 'inlining',
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
},
args: ["anIRClosure"],
source: "inlineClosure: anIRClosure\x0a\x09| closure statements |\x0a\x0a\x09closure := super inlineClosure: anIRClosure.\x0a\x09statements := closure instructions last instructions.\x0a\x09\x0a\x09statements ifNotEmpty: [\x0a\x09\x09statements last isReturn\x0a\x09\x09\x09ifFalse: [ statements last replaceWith: (IRReturn new\x0a\x09\x09\x09\x09add: statements last copy;\x0a\x09\x09\x09\x09yourself)] ].\x0a\x0a\x09^ closure",
messageSends: ["inlineClosure:", "instructions", "last", "ifNotEmpty:", "ifFalse:", "replaceWith:", "add:", "copy", "new", "yourself", "isReturn"],
referencedClasses: ["IRReturn"]
}),
smalltalk.IRReturnInliner);

smalltalk.addMethod(
"_inlineReturn_",
smalltalk.method({
selector: "inlineReturn:",
category: 'inlining',
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
},
args: ["anIRReturn"],
source: "inlineReturn: anIRReturn\x0a\x09| return |\x0a\x09return := self inlinedReturn.\x0a\x09anIRReturn instructions do: [ :each |\x0a\x09\x09return add: each ].\x0a\x09anIRReturn replaceWith: return.\x0a\x09self inlineSend: return instructions last.\x0a\x09^ return",
messageSends: ["inlinedReturn", "do:", "add:", "instructions", "replaceWith:", "inlineSend:", "last"],
referencedClasses: []
}),
smalltalk.IRReturnInliner);

smalltalk.addMethod(
"_inlinedReturn",
smalltalk.method({
selector: "inlinedReturn",
category: 'factory',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.IRInlinedReturn || IRInlinedReturn),"_new",[]);
return $1;
},
args: [],
source: "inlinedReturn\x0a\x09^ IRInlinedReturn new",
messageSends: ["new"],
referencedClasses: ["IRInlinedReturn"]
}),
smalltalk.IRReturnInliner);



smalltalk.addClass('InliningCodeGenerator', smalltalk.CodeGenerator, [], 'Compiler-Inlining');
smalltalk.InliningCodeGenerator.comment="I am a specialized code generator that uses inlining to produce more optimized JavaScript output"
smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
category: 'compiling',
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
},
args: ["aNode"],
source: "compileNode: aNode\x0a\x09| ir stream |\x0a\x0a\x09self semanticAnalyzer visit: aNode.\x0a\x09ir := self translator visit: aNode.\x0a\x09self inliner visit: ir.\x0a\x0a\x09^ self irTranslator\x0a\x09\x09visit: ir;\x0a\x09\x09contents",
messageSends: ["visit:", "semanticAnalyzer", "translator", "inliner", "irTranslator", "contents"],
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
var $1;
$1=smalltalk.send((smalltalk.IRInliner || IRInliner),"_new",[]);
return $1;
},
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
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.IRInliningJSTranslator || IRInliningJSTranslator),"_new",[]);
return $1;
},
args: [],
source: "irTranslator\x0a\x09^ IRInliningJSTranslator new",
messageSends: ["new"],
referencedClasses: ["IRInliningJSTranslator"]
}),
smalltalk.InliningCodeGenerator);



