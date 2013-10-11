define("amber_core/Compiler-Inlining", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Compiler-IR", "amber_core/Kernel-Objects", "amber_core/Compiler-Core"], function(smalltalk,nil,_st){
smalltalk.addPackage('Compiler-Inlining');
smalltalk.packages["Compiler-Inlining"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('IRInlinedAssignment', smalltalk.IRAssignment, [], 'Compiler-Inlining');
smalltalk.IRInlinedAssignment.comment="I represent an inlined assignment instruction.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRInlinedAssignment_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedAssignment)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRInlinedAssignment: self",
messageSends: ["visitIRInlinedAssignment:"],
referencedClasses: []
}),
smalltalk.IRInlinedAssignment);

smalltalk.addMethod(
smalltalk.method({
selector: "isInlined",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInlined",{},smalltalk.IRInlinedAssignment)})},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedAssignment);



smalltalk.addClass('IRInlinedClosure', smalltalk.IRClosure, [], 'Compiler-Inlining');
smalltalk.IRInlinedClosure.comment="I represent an inlined closure instruction.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aVisitor)._visitIRInlinedClosure_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedClosure)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedClosure: self",
messageSends: ["visitIRInlinedClosure:"],
referencedClasses: []
}),
smalltalk.IRInlinedClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "isInlined",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInlined",{},smalltalk.IRInlinedClosure)})},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedClosure);



smalltalk.addClass('IRInlinedReturn', smalltalk.IRReturn, [], 'Compiler-Inlining');
smalltalk.IRInlinedReturn.comment="I represent an inlined local return instruction.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRInlinedReturn_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedReturn)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRInlinedReturn: self",
messageSends: ["visitIRInlinedReturn:"],
referencedClasses: []
}),
smalltalk.IRInlinedReturn);

smalltalk.addMethod(
smalltalk.method({
selector: "isInlined",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInlined",{},smalltalk.IRInlinedReturn)})},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedReturn);



smalltalk.addClass('IRInlinedSend', smalltalk.IRSend, [], 'Compiler-Inlining');
smalltalk.IRInlinedSend.comment="I am the abstract super class of inlined message send instructions.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aVisitor)._visitInlinedSend_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedSend)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitInlinedSend: self",
messageSends: ["visitInlinedSend:"],
referencedClasses: []
}),
smalltalk.IRInlinedSend);

smalltalk.addMethod(
smalltalk.method({
selector: "isInlined",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInlined",{},smalltalk.IRInlinedSend)})},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedSend);



smalltalk.addClass('IRInlinedIfFalse', smalltalk.IRInlinedSend, [], 'Compiler-Inlining');
smalltalk.IRInlinedIfFalse.comment="I represent an inlined `#ifFalse:` message send instruction.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aVisitor)._visitIRInlinedIfFalse_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedIfFalse)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedIfFalse: self",
messageSends: ["visitIRInlinedIfFalse:"],
referencedClasses: []
}),
smalltalk.IRInlinedIfFalse);



smalltalk.addClass('IRInlinedIfNilIfNotNil', smalltalk.IRInlinedSend, [], 'Compiler-Inlining');
smalltalk.IRInlinedIfNilIfNotNil.comment="I represent an inlined `#ifNil:ifNotNil:` message send instruction.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aVisitor)._visitIRInlinedIfNilIfNotNil_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedIfNilIfNotNil)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedIfNilIfNotNil: self",
messageSends: ["visitIRInlinedIfNilIfNotNil:"],
referencedClasses: []
}),
smalltalk.IRInlinedIfNilIfNotNil);



smalltalk.addClass('IRInlinedIfTrue', smalltalk.IRInlinedSend, [], 'Compiler-Inlining');
smalltalk.IRInlinedIfTrue.comment="I represent an inlined `#ifTrue:` message send instruction.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aVisitor)._visitIRInlinedIfTrue_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedIfTrue)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedIfTrue: self",
messageSends: ["visitIRInlinedIfTrue:"],
referencedClasses: []
}),
smalltalk.IRInlinedIfTrue);



smalltalk.addClass('IRInlinedIfTrueIfFalse', smalltalk.IRInlinedSend, [], 'Compiler-Inlining');
smalltalk.IRInlinedIfTrueIfFalse.comment="I represent an inlined `#ifTrue:ifFalse:` message send instruction.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aVisitor)._visitIRInlinedIfTrueIfFalse_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedIfTrueIfFalse)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedIfTrueIfFalse: self",
messageSends: ["visitIRInlinedIfTrueIfFalse:"],
referencedClasses: []
}),
smalltalk.IRInlinedIfTrueIfFalse);



smalltalk.addClass('IRInlinedSequence', smalltalk.IRBlockSequence, [], 'Compiler-Inlining');
smalltalk.IRInlinedSequence.comment="I represent a (block) sequence inside an inlined closure instruction (instance of `IRInlinedClosure`).";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aVisitor)._visitIRInlinedSequence_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedSequence)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedSequence: self",
messageSends: ["visitIRInlinedSequence:"],
referencedClasses: []
}),
smalltalk.IRInlinedSequence);

smalltalk.addMethod(
smalltalk.method({
selector: "isInlined",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInlined",{},smalltalk.IRInlinedSequence)})},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedSequence);



smalltalk.addClass('IRInliner', smalltalk.IRVisitor, [], 'Compiler-Inlining');
smalltalk.IRInliner.comment="I visit an IR tree, inlining message sends and block closures.\x0a\x0aMessage selectors that can be inlined are answered by `IRSendInliner >> #inlinedSelectors`";
smalltalk.addMethod(
smalltalk.method({
selector: "assignmentInliner",
category: 'factory',
fn: function (){
var self=this;
function $IRAssignmentInliner(){return smalltalk.IRAssignmentInliner||(typeof IRAssignmentInliner=="undefined"?nil:IRAssignmentInliner)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($IRAssignmentInliner())._new();
_st($2)._translator_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"assignmentInliner",{},smalltalk.IRInliner)})},
args: [],
source: "assignmentInliner\x0a\x09^ IRAssignmentInliner new\x0a\x09\x09translator: self;\x0a\x09\x09yourself",
messageSends: ["translator:", "new", "yourself"],
referencedClasses: ["IRAssignmentInliner"]
}),
smalltalk.IRInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "returnInliner",
category: 'factory',
fn: function (){
var self=this;
function $IRReturnInliner(){return smalltalk.IRReturnInliner||(typeof IRReturnInliner=="undefined"?nil:IRReturnInliner)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($IRReturnInliner())._new();
_st($2)._translator_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"returnInliner",{},smalltalk.IRInliner)})},
args: [],
source: "returnInliner\x0a\x09^ IRReturnInliner new\x0a\x09\x09translator: self;\x0a\x09\x09yourself",
messageSends: ["translator:", "new", "yourself"],
referencedClasses: ["IRReturnInliner"]
}),
smalltalk.IRInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "sendInliner",
category: 'factory',
fn: function (){
var self=this;
function $IRSendInliner(){return smalltalk.IRSendInliner||(typeof IRSendInliner=="undefined"?nil:IRSendInliner)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($IRSendInliner())._new();
_st($2)._translator_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"sendInliner",{},smalltalk.IRInliner)})},
args: [],
source: "sendInliner\x0a\x09^ IRSendInliner new\x0a\x09\x09translator: self;\x0a\x09\x09yourself",
messageSends: ["translator:", "new", "yourself"],
referencedClasses: ["IRSendInliner"]
}),
smalltalk.IRInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldInlineAssignment:",
category: 'testing',
fn: function (anIRAssignment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$6,$5,$1;
$1=_st(_st(_st(anIRAssignment)._isInlined())._not())._and_((function(){
return smalltalk.withContext(function($ctx2) {
$4=_st(anIRAssignment)._instructions();
$ctx2.sendIdx["instructions"]=1;
$3=_st($4)._last();
$ctx2.sendIdx["last"]=1;
$2=_st($3)._isSend();
return _st($2)._and_((function(){
return smalltalk.withContext(function($ctx3) {
$6=_st(anIRAssignment)._instructions();
$5=_st($6)._last();
return self._shouldInlineSend_($5);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["and:"]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldInlineAssignment:",{anIRAssignment:anIRAssignment},smalltalk.IRInliner)})},
args: ["anIRAssignment"],
source: "shouldInlineAssignment: anIRAssignment\x0a\x09^ anIRAssignment isInlined not and: [\x0a\x09\x09anIRAssignment instructions last isSend and: [\x0a\x09\x09\x09self shouldInlineSend: (anIRAssignment instructions last) ]]",
messageSends: ["and:", "not", "isInlined", "isSend", "last", "instructions", "shouldInlineSend:"],
referencedClasses: []
}),
smalltalk.IRInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldInlineReturn:",
category: 'testing',
fn: function (anIRReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$6,$5,$1;
$1=_st(_st(_st(anIRReturn)._isInlined())._not())._and_((function(){
return smalltalk.withContext(function($ctx2) {
$4=_st(anIRReturn)._instructions();
$ctx2.sendIdx["instructions"]=1;
$3=_st($4)._first();
$ctx2.sendIdx["first"]=1;
$2=_st($3)._isSend();
return _st($2)._and_((function(){
return smalltalk.withContext(function($ctx3) {
$6=_st(anIRReturn)._instructions();
$5=_st($6)._first();
return self._shouldInlineSend_($5);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["and:"]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldInlineReturn:",{anIRReturn:anIRReturn},smalltalk.IRInliner)})},
args: ["anIRReturn"],
source: "shouldInlineReturn: anIRReturn\x0a\x09^ anIRReturn isInlined not and: [\x0a\x09\x09anIRReturn instructions first isSend and: [\x0a\x09\x09\x09self shouldInlineSend: (anIRReturn instructions first) ]]",
messageSends: ["and:", "not", "isInlined", "isSend", "first", "instructions", "shouldInlineSend:"],
referencedClasses: []
}),
smalltalk.IRInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldInlineSend:",
category: 'testing',
fn: function (anIRSend){
var self=this;
function $IRSendInliner(){return smalltalk.IRSendInliner||(typeof IRSendInliner=="undefined"?nil:IRSendInliner)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(anIRSend)._isInlined())._not())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st($IRSendInliner())._shouldInline_(anIRSend);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldInlineSend:",{anIRSend:anIRSend},smalltalk.IRInliner)})},
args: ["anIRSend"],
source: "shouldInlineSend: anIRSend\x0a\x09^ anIRSend isInlined not and: [\x0a\x09\x09IRSendInliner shouldInline: anIRSend ]",
messageSends: ["and:", "not", "isInlined", "shouldInline:"],
referencedClasses: ["IRSendInliner"]
}),
smalltalk.IRInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "transformNonLocalReturn:",
category: 'visiting',
fn: function (anIRNonLocalReturn){
var self=this;
var localReturn;
function $IRReturn(){return smalltalk.IRReturn||(typeof IRReturn=="undefined"?nil:IRReturn)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$5,$6,$7,$8,$9,$10,$11;
$2=_st(anIRNonLocalReturn)._scope();
$ctx1.sendIdx["scope"]=1;
$1=_st($2)._canInlineNonLocalReturns();
if(smalltalk.assert($1)){
$4=_st(anIRNonLocalReturn)._scope();
$ctx1.sendIdx["scope"]=2;
$3=_st($4)._methodScope();
$5=_st(anIRNonLocalReturn)._scope();
$ctx1.sendIdx["scope"]=3;
_st($3)._removeNonLocalReturn_($5);
$6=_st($IRReturn())._new();
$7=$6;
$8=_st(anIRNonLocalReturn)._scope();
_st($7)._scope_($8);
$9=_st($6)._yourself();
localReturn=$9;
localReturn;
_st(_st(anIRNonLocalReturn)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(localReturn)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
_st(anIRNonLocalReturn)._replaceWith_(localReturn);
$10=localReturn;
return $10;
};
$11=smalltalk.IRInliner.superclass.fn.prototype._visitIRNonLocalReturn_.apply(_st(self), [anIRNonLocalReturn]);
return $11;
}, function($ctx1) {$ctx1.fill(self,"transformNonLocalReturn:",{anIRNonLocalReturn:anIRNonLocalReturn,localReturn:localReturn},smalltalk.IRInliner)})},
args: ["anIRNonLocalReturn"],
source: "transformNonLocalReturn: anIRNonLocalReturn\x0a\x09\x22Replace a non local return into a local return\x22\x0a\x0a\x09| localReturn |\x0a\x09anIRNonLocalReturn scope canInlineNonLocalReturns ifTrue: [\x0a\x09\x09anIRNonLocalReturn scope methodScope removeNonLocalReturn: anIRNonLocalReturn scope.\x0a\x09\x09localReturn := IRReturn new\x0a\x09\x09\x09scope: anIRNonLocalReturn scope;\x0a\x09\x09\x09yourself.\x0a\x09\x09anIRNonLocalReturn instructions do: [ :each |\x0a\x09\x09\x09localReturn add: each ].\x0a\x09\x09anIRNonLocalReturn replaceWith: localReturn.\x0a\x09\x09^ localReturn ].\x0a\x09^ super visitIRNonLocalReturn: anIRNonLocalReturn",
messageSends: ["ifTrue:", "canInlineNonLocalReturns", "scope", "removeNonLocalReturn:", "methodScope", "scope:", "new", "yourself", "do:", "instructions", "add:", "replaceWith:", "visitIRNonLocalReturn:"],
referencedClasses: ["IRReturn"]
}),
smalltalk.IRInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRAssignment:",
category: 'visiting',
fn: function (anIRAssignment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._shouldInlineAssignment_(anIRAssignment);
if(smalltalk.assert($2)){
$1=_st(self._assignmentInliner())._inlineAssignment_(anIRAssignment);
} else {
$1=smalltalk.IRInliner.superclass.fn.prototype._visitIRAssignment_.apply(_st(self), [anIRAssignment]);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRAssignment:",{anIRAssignment:anIRAssignment},smalltalk.IRInliner)})},
args: ["anIRAssignment"],
source: "visitIRAssignment: anIRAssignment\x0a\x09^ (self shouldInlineAssignment: anIRAssignment)\x0a\x09\x09ifTrue: [ self assignmentInliner inlineAssignment: anIRAssignment ]\x0a\x09\x09ifFalse: [ super visitIRAssignment: anIRAssignment ]",
messageSends: ["ifTrue:ifFalse:", "shouldInlineAssignment:", "inlineAssignment:", "assignmentInliner", "visitIRAssignment:"],
referencedClasses: []
}),
smalltalk.IRInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRNonLocalReturn:",
category: 'visiting',
fn: function (anIRNonLocalReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._transformNonLocalReturn_(anIRNonLocalReturn);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRNonLocalReturn:",{anIRNonLocalReturn:anIRNonLocalReturn},smalltalk.IRInliner)})},
args: ["anIRNonLocalReturn"],
source: "visitIRNonLocalReturn: anIRNonLocalReturn\x0a\x09^ self transformNonLocalReturn: anIRNonLocalReturn",
messageSends: ["transformNonLocalReturn:"],
referencedClasses: []
}),
smalltalk.IRInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRReturn:",
category: 'visiting',
fn: function (anIRReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._shouldInlineReturn_(anIRReturn);
if(smalltalk.assert($2)){
$1=_st(self._returnInliner())._inlineReturn_(anIRReturn);
} else {
$1=smalltalk.IRInliner.superclass.fn.prototype._visitIRReturn_.apply(_st(self), [anIRReturn]);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRReturn:",{anIRReturn:anIRReturn},smalltalk.IRInliner)})},
args: ["anIRReturn"],
source: "visitIRReturn: anIRReturn\x0a\x09^ (self shouldInlineReturn: anIRReturn)\x0a\x09\x09ifTrue: [ self returnInliner inlineReturn: anIRReturn ]\x0a\x09\x09ifFalse: [ super visitIRReturn: anIRReturn ]",
messageSends: ["ifTrue:ifFalse:", "shouldInlineReturn:", "inlineReturn:", "returnInliner", "visitIRReturn:"],
referencedClasses: []
}),
smalltalk.IRInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRSend:",
category: 'visiting',
fn: function (anIRSend){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._shouldInlineSend_(anIRSend);
if(smalltalk.assert($2)){
$1=_st(self._sendInliner())._inlineSend_(anIRSend);
} else {
$1=smalltalk.IRInliner.superclass.fn.prototype._visitIRSend_.apply(_st(self), [anIRSend]);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRSend:",{anIRSend:anIRSend},smalltalk.IRInliner)})},
args: ["anIRSend"],
source: "visitIRSend: anIRSend\x0a\x09^ (self shouldInlineSend: anIRSend)\x0a\x09\x09ifTrue: [ self sendInliner inlineSend: anIRSend ]\x0a\x09\x09ifFalse: [ super visitIRSend: anIRSend ]",
messageSends: ["ifTrue:ifFalse:", "shouldInlineSend:", "inlineSend:", "sendInliner", "visitIRSend:"],
referencedClasses: []
}),
smalltalk.IRInliner);



smalltalk.addClass('IRInliningJSTranslator', smalltalk.IRJSTranslator, [], 'Compiler-Inlining');
smalltalk.IRInliningJSTranslator.comment="I am a specialized JavaScript translator able to write inlined IR instructions to JavaScript stream (`JSStream` instance).";
smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedAssignment:",
category: 'visiting',
fn: function (anIRInlinedAssignment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._visit_(_st(_st(anIRInlinedAssignment)._instructions())._last());
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedAssignment:",{anIRInlinedAssignment:anIRInlinedAssignment},smalltalk.IRInliningJSTranslator)})},
args: ["anIRInlinedAssignment"],
source: "visitIRInlinedAssignment: anIRInlinedAssignment\x0a\x09self visit: anIRInlinedAssignment instructions last",
messageSends: ["visit:", "last", "instructions"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedClosure:",
category: 'visiting',
fn: function (anIRInlinedClosure){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._stream())._nextPutVars_(_st(_st(anIRInlinedClosure)._tempDeclarations())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._name())._asVariableName();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})));
_st(_st(anIRInlinedClosure)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._visit_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedClosure:",{anIRInlinedClosure:anIRInlinedClosure},smalltalk.IRInliningJSTranslator)})},
args: ["anIRInlinedClosure"],
source: "visitIRInlinedClosure: anIRInlinedClosure\x0a\x09self stream nextPutVars: (anIRInlinedClosure tempDeclarations collect: [ :each |\x0a\x09\x09each name asVariableName ]).\x0a\x09anIRInlinedClosure instructions do: [ :each |\x0a\x09\x09self visit: each ]",
messageSends: ["nextPutVars:", "stream", "collect:", "tempDeclarations", "asVariableName", "name", "do:", "instructions", "visit:"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedIfFalse:",
category: 'visiting',
fn: function (anIRInlinedIfFalse){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$5,$7,$6;
$1=self._stream();
$ctx1.sendIdx["stream"]=1;
_st($1)._nextPutIf_with_((function(){
return smalltalk.withContext(function($ctx2) {
$2=self._stream();
$ctx2.sendIdx["stream"]=2;
_st($2)._nextPutAll_("! smalltalk.assert(");
$ctx2.sendIdx["nextPutAll:"]=1;
$4=_st(anIRInlinedIfFalse)._instructions();
$ctx2.sendIdx["instructions"]=1;
$3=_st($4)._first();
self._visit_($3);
$ctx2.sendIdx["visit:"]=1;
$5=self._stream();
return _st($5)._nextPutAll_(")");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
$7=_st(anIRInlinedIfFalse)._instructions();
$6=_st($7)._last();
return self._visit_($6);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedIfFalse:",{anIRInlinedIfFalse:anIRInlinedIfFalse},smalltalk.IRInliningJSTranslator)})},
args: ["anIRInlinedIfFalse"],
source: "visitIRInlinedIfFalse: anIRInlinedIfFalse\x0a\x09self stream nextPutIf: [\x0a\x09\x09self stream nextPutAll: '! smalltalk.assert('.\x0a\x09\x09self visit: anIRInlinedIfFalse instructions first.\x0a\x09\x09self stream nextPutAll: ')' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfFalse instructions last ]",
messageSends: ["nextPutIf:with:", "stream", "nextPutAll:", "visit:", "first", "instructions", "last"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedIfNil:",
category: 'visiting',
fn: function (anIRInlinedIfNil){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$5,$7,$6;
$1=self._stream();
$ctx1.sendIdx["stream"]=1;
_st($1)._nextPutIf_with_((function(){
return smalltalk.withContext(function($ctx2) {
$2=self._stream();
$ctx2.sendIdx["stream"]=2;
_st($2)._nextPutAll_("($receiver = ");
$ctx2.sendIdx["nextPutAll:"]=1;
$4=_st(anIRInlinedIfNil)._instructions();
$ctx2.sendIdx["instructions"]=1;
$3=_st($4)._first();
self._visit_($3);
$ctx2.sendIdx["visit:"]=1;
$5=self._stream();
return _st($5)._nextPutAll_(") == nil || $receiver == null");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
$7=_st(anIRInlinedIfNil)._instructions();
$6=_st($7)._last();
return self._visit_($6);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedIfNil:",{anIRInlinedIfNil:anIRInlinedIfNil},smalltalk.IRInliningJSTranslator)})},
args: ["anIRInlinedIfNil"],
source: "visitIRInlinedIfNil: anIRInlinedIfNil\x0a\x09self stream nextPutIf: [\x0a\x09\x09self stream nextPutAll: '($receiver = '.\x0a\x09\x09self visit: anIRInlinedIfNil instructions first.\x0a\x09\x09self stream nextPutAll: ') == nil || $receiver == null' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfNil instructions last ]",
messageSends: ["nextPutIf:with:", "stream", "nextPutAll:", "visit:", "first", "instructions", "last"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedIfNilIfNotNil:",
category: 'visiting',
fn: function (anIRInlinedIfNilIfNotNil){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$5,$7,$6,$9,$8;
$1=self._stream();
$ctx1.sendIdx["stream"]=1;
_st($1)._nextPutIfElse_with_with_((function(){
return smalltalk.withContext(function($ctx2) {
$2=self._stream();
$ctx2.sendIdx["stream"]=2;
_st($2)._nextPutAll_("($receiver = ");
$ctx2.sendIdx["nextPutAll:"]=1;
$4=_st(anIRInlinedIfNilIfNotNil)._instructions();
$ctx2.sendIdx["instructions"]=1;
$3=_st($4)._first();
self._visit_($3);
$ctx2.sendIdx["visit:"]=1;
$5=self._stream();
return _st($5)._nextPutAll_(") == nil || $receiver == null");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
$7=_st(anIRInlinedIfNilIfNotNil)._instructions();
$ctx2.sendIdx["instructions"]=2;
$6=_st($7)._second();
return self._visit_($6);
$ctx2.sendIdx["visit:"]=2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}),(function(){
return smalltalk.withContext(function($ctx2) {
$9=_st(anIRInlinedIfNilIfNotNil)._instructions();
$8=_st($9)._third();
return self._visit_($8);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedIfNilIfNotNil:",{anIRInlinedIfNilIfNotNil:anIRInlinedIfNilIfNotNil},smalltalk.IRInliningJSTranslator)})},
args: ["anIRInlinedIfNilIfNotNil"],
source: "visitIRInlinedIfNilIfNotNil: anIRInlinedIfNilIfNotNil\x0a\x09self stream\x0a\x09\x09nextPutIfElse: [\x0a\x09\x09\x09self stream nextPutAll: '($receiver = '.\x0a\x09\x09\x09self visit: anIRInlinedIfNilIfNotNil instructions first.\x0a\x09\x09\x09self stream nextPutAll: ') == nil || $receiver == null' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfNilIfNotNil instructions second ]\x0a\x09\x09with: [ self visit: anIRInlinedIfNilIfNotNil instructions third ]",
messageSends: ["nextPutIfElse:with:with:", "stream", "nextPutAll:", "visit:", "first", "instructions", "second", "third"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedIfTrue:",
category: 'visiting',
fn: function (anIRInlinedIfTrue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$5,$7,$6;
$1=self._stream();
$ctx1.sendIdx["stream"]=1;
_st($1)._nextPutIf_with_((function(){
return smalltalk.withContext(function($ctx2) {
$2=self._stream();
$ctx2.sendIdx["stream"]=2;
_st($2)._nextPutAll_("smalltalk.assert(");
$ctx2.sendIdx["nextPutAll:"]=1;
$4=_st(anIRInlinedIfTrue)._instructions();
$ctx2.sendIdx["instructions"]=1;
$3=_st($4)._first();
self._visit_($3);
$ctx2.sendIdx["visit:"]=1;
$5=self._stream();
return _st($5)._nextPutAll_(")");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
$7=_st(anIRInlinedIfTrue)._instructions();
$6=_st($7)._last();
return self._visit_($6);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedIfTrue:",{anIRInlinedIfTrue:anIRInlinedIfTrue},smalltalk.IRInliningJSTranslator)})},
args: ["anIRInlinedIfTrue"],
source: "visitIRInlinedIfTrue: anIRInlinedIfTrue\x0a\x09self stream nextPutIf: [\x0a\x09\x09self stream nextPutAll: 'smalltalk.assert('.\x0a\x09\x09self visit: anIRInlinedIfTrue instructions first.\x0a\x09\x09self stream nextPutAll: ')' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfTrue instructions last ]",
messageSends: ["nextPutIf:with:", "stream", "nextPutAll:", "visit:", "first", "instructions", "last"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedIfTrueIfFalse:",
category: 'visiting',
fn: function (anIRInlinedIfTrueIfFalse){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$5,$7,$6,$9,$8;
$1=self._stream();
$ctx1.sendIdx["stream"]=1;
_st($1)._nextPutIfElse_with_with_((function(){
return smalltalk.withContext(function($ctx2) {
$2=self._stream();
$ctx2.sendIdx["stream"]=2;
_st($2)._nextPutAll_("smalltalk.assert(");
$ctx2.sendIdx["nextPutAll:"]=1;
$4=_st(anIRInlinedIfTrueIfFalse)._instructions();
$ctx2.sendIdx["instructions"]=1;
$3=_st($4)._first();
self._visit_($3);
$ctx2.sendIdx["visit:"]=1;
$5=self._stream();
return _st($5)._nextPutAll_(")");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
$7=_st(anIRInlinedIfTrueIfFalse)._instructions();
$ctx2.sendIdx["instructions"]=2;
$6=_st($7)._second();
return self._visit_($6);
$ctx2.sendIdx["visit:"]=2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}),(function(){
return smalltalk.withContext(function($ctx2) {
$9=_st(anIRInlinedIfTrueIfFalse)._instructions();
$8=_st($9)._third();
return self._visit_($8);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedIfTrueIfFalse:",{anIRInlinedIfTrueIfFalse:anIRInlinedIfTrueIfFalse},smalltalk.IRInliningJSTranslator)})},
args: ["anIRInlinedIfTrueIfFalse"],
source: "visitIRInlinedIfTrueIfFalse: anIRInlinedIfTrueIfFalse\x0a\x09self stream\x0a\x09\x09nextPutIfElse: [\x0a\x09\x09\x09self stream nextPutAll: 'smalltalk.assert('.\x0a\x09\x09\x09self visit: anIRInlinedIfTrueIfFalse instructions first.\x0a\x09\x09\x09self stream nextPutAll: ')' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfTrueIfFalse instructions second ]\x0a\x09\x09with: [ self visit: anIRInlinedIfTrueIfFalse instructions third ]",
messageSends: ["nextPutIfElse:with:with:", "stream", "nextPutAll:", "visit:", "first", "instructions", "second", "third"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedNonLocalReturn:",
category: 'visiting',
fn: function (anIRInlinedReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._stream();
$ctx1.sendIdx["stream"]=1;
_st($1)._nextPutStatementWith_((function(){
return smalltalk.withContext(function($ctx2) {
return self._visit_(_st(_st(anIRInlinedReturn)._instructions())._last());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$2=self._stream();
_st($2)._nextPutNonLocalReturnWith_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedNonLocalReturn:",{anIRInlinedReturn:anIRInlinedReturn},smalltalk.IRInliningJSTranslator)})},
args: ["anIRInlinedReturn"],
source: "visitIRInlinedNonLocalReturn: anIRInlinedReturn\x0a\x09self stream nextPutStatementWith: [\x0a\x09\x09self visit: anIRInlinedReturn instructions last ].\x0a\x09self stream nextPutNonLocalReturnWith: [ ]",
messageSends: ["nextPutStatementWith:", "stream", "visit:", "last", "instructions", "nextPutNonLocalReturnWith:"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedReturn:",
category: 'visiting',
fn: function (anIRInlinedReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._visit_(_st(_st(anIRInlinedReturn)._instructions())._last());
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedReturn:",{anIRInlinedReturn:anIRInlinedReturn},smalltalk.IRInliningJSTranslator)})},
args: ["anIRInlinedReturn"],
source: "visitIRInlinedReturn: anIRInlinedReturn\x0a\x09self visit: anIRInlinedReturn instructions last",
messageSends: ["visit:", "last", "instructions"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedSequence:",
category: 'visiting',
fn: function (anIRInlinedSequence){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(anIRInlinedSequence)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self._stream())._nextPutStatementWith_((function(){
return smalltalk.withContext(function($ctx3) {
return self._visit_(each);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedSequence:",{anIRInlinedSequence:anIRInlinedSequence},smalltalk.IRInliningJSTranslator)})},
args: ["anIRInlinedSequence"],
source: "visitIRInlinedSequence: anIRInlinedSequence\x0a\x09anIRInlinedSequence instructions do: [ :each |\x0a\x09\x09self stream nextPutStatementWith: [ self visit: each ]]",
messageSends: ["do:", "instructions", "nextPutStatementWith:", "stream", "visit:"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);



smalltalk.addClass('IRSendInliner', smalltalk.Object, ['send', 'translator'], 'Compiler-Inlining');
smalltalk.IRSendInliner.comment="I inline some message sends and block closure arguments. I heavily rely on #perform: to dispatch inlining methods.";
smalltalk.addMethod(
smalltalk.method({
selector: "ifFalse:",
category: 'inlining',
fn: function (anIRInstruction){
var self=this;
function $IRInlinedIfFalse(){return smalltalk.IRInlinedIfFalse||(typeof IRInlinedIfFalse=="undefined"?nil:IRInlinedIfFalse)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._inlinedSend_with_(_st($IRInlinedIfFalse())._new(),anIRInstruction);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifFalse:",{anIRInstruction:anIRInstruction},smalltalk.IRSendInliner)})},
args: ["anIRInstruction"],
source: "ifFalse: anIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfFalse new with: anIRInstruction",
messageSends: ["inlinedSend:with:", "new"],
referencedClasses: ["IRInlinedIfFalse"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "ifFalse:ifTrue:",
category: 'inlining',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._perform_withArguments_("ifTrue:ifFalse:",[anotherIRInstruction,anIRInstruction]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifFalse:ifTrue:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},smalltalk.IRSendInliner)})},
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifFalse: anIRInstruction ifTrue: anotherIRInstruction\x0a\x09^ self perform: #ifTrue:ifFalse: withArguments: { anotherIRInstruction. anIRInstruction }",
messageSends: ["perform:withArguments:"],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNil:",
category: 'inlining',
fn: function (anIRInstruction){
var self=this;
function $IRInlinedIfNilIfNotNil(){return smalltalk.IRInlinedIfNilIfNotNil||(typeof IRInlinedIfNilIfNotNil=="undefined"?nil:IRInlinedIfNilIfNotNil)}
function $IRClosure(){return smalltalk.IRClosure||(typeof IRClosure=="undefined"?nil:IRClosure)}
function $IRBlockSequence(){return smalltalk.IRBlockSequence||(typeof IRBlockSequence=="undefined"?nil:IRBlockSequence)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$5,$6,$8,$9,$7,$10,$4,$1;
$2=_st($IRInlinedIfNilIfNotNil())._new();
$ctx1.sendIdx["new"]=1;
$3=anIRInstruction;
$5=_st($IRClosure())._new();
$ctx1.sendIdx["new"]=2;
_st($5)._scope_(_st(_st(anIRInstruction)._scope())._copy());
$6=$5;
$8=_st($IRBlockSequence())._new();
_st($8)._add_(_st(_st(self._send())._instructions())._first());
$9=_st($8)._yourself();
$ctx1.sendIdx["yourself"]=1;
$7=$9;
_st($6)._add_($7);
$ctx1.sendIdx["add:"]=1;
$10=_st($5)._yourself();
$4=$10;
$1=self._inlinedSend_with_with_($2,$3,$4);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNil:",{anIRInstruction:anIRInstruction},smalltalk.IRSendInliner)})},
args: ["anIRInstruction"],
source: "ifNil: anIRInstruction\x0a\x09^ self\x0a\x09\x09inlinedSend: IRInlinedIfNilIfNotNil new\x0a\x09\x09with: anIRInstruction\x0a\x09\x09with: (IRClosure new\x0a\x09\x09\x09scope: anIRInstruction scope copy;\x0a\x09\x09\x09add: (IRBlockSequence new\x0a\x09\x09\x09\x09add: self send instructions first;\x0a\x09\x09\x09\x09yourself);\x0a\x09\x09\x09yourself)",
messageSends: ["inlinedSend:with:with:", "new", "scope:", "copy", "scope", "add:", "first", "instructions", "send", "yourself"],
referencedClasses: ["IRInlinedIfNilIfNotNil", "IRClosure", "IRBlockSequence"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNil:ifNotNil:",
category: 'inlining',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
function $IRInlinedIfNilIfNotNil(){return smalltalk.IRInlinedIfNilIfNotNil||(typeof IRInlinedIfNilIfNotNil=="undefined"?nil:IRInlinedIfNilIfNotNil)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._inlinedSend_with_with_(_st($IRInlinedIfNilIfNotNil())._new(),anIRInstruction,anotherIRInstruction);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNil:ifNotNil:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},smalltalk.IRSendInliner)})},
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifNil: anIRInstruction ifNotNil: anotherIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfNilIfNotNil new with: anIRInstruction with: anotherIRInstruction",
messageSends: ["inlinedSend:with:with:", "new"],
referencedClasses: ["IRInlinedIfNilIfNotNil"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNotNil:",
category: 'inlining',
fn: function (anIRInstruction){
var self=this;
function $IRInlinedIfNilIfNotNil(){return smalltalk.IRInlinedIfNilIfNotNil||(typeof IRInlinedIfNilIfNotNil=="undefined"?nil:IRInlinedIfNilIfNotNil)}
function $IRClosure(){return smalltalk.IRClosure||(typeof IRClosure=="undefined"?nil:IRClosure)}
function $IRBlockSequence(){return smalltalk.IRBlockSequence||(typeof IRBlockSequence=="undefined"?nil:IRBlockSequence)}
return smalltalk.withContext(function($ctx1) { 
var $2,$4,$5,$7,$8,$6,$9,$3,$1;
$2=_st($IRInlinedIfNilIfNotNil())._new();
$ctx1.sendIdx["new"]=1;
$4=_st($IRClosure())._new();
$ctx1.sendIdx["new"]=2;
_st($4)._scope_(_st(_st(anIRInstruction)._scope())._copy());
$5=$4;
$7=_st($IRBlockSequence())._new();
_st($7)._add_(_st(_st(self._send())._instructions())._first());
$8=_st($7)._yourself();
$ctx1.sendIdx["yourself"]=1;
$6=$8;
_st($5)._add_($6);
$ctx1.sendIdx["add:"]=1;
$9=_st($4)._yourself();
$3=$9;
$1=self._inlinedSend_with_with_($2,$3,anIRInstruction);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:",{anIRInstruction:anIRInstruction},smalltalk.IRSendInliner)})},
args: ["anIRInstruction"],
source: "ifNotNil: anIRInstruction\x0a\x09^ self\x0a\x09\x09inlinedSend: IRInlinedIfNilIfNotNil new\x0a\x09\x09with: (IRClosure new\x0a\x09\x09\x09scope: anIRInstruction scope copy;\x0a\x09\x09\x09add: (IRBlockSequence new\x0a\x09\x09\x09\x09add: self send instructions first;\x0a\x09\x09\x09\x09yourself);\x0a\x09\x09\x09yourself)\x0a\x09\x09with: anIRInstruction",
messageSends: ["inlinedSend:with:with:", "new", "scope:", "copy", "scope", "add:", "first", "instructions", "send", "yourself"],
referencedClasses: ["IRInlinedIfNilIfNotNil", "IRClosure", "IRBlockSequence"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNotNil:ifNil:",
category: 'inlining',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
function $IRInlinedIfNilIfNotNil(){return smalltalk.IRInlinedIfNilIfNotNil||(typeof IRInlinedIfNilIfNotNil=="undefined"?nil:IRInlinedIfNilIfNotNil)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._inlinedSend_with_with_(_st($IRInlinedIfNilIfNotNil())._new(),anotherIRInstruction,anIRInstruction);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:ifNil:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},smalltalk.IRSendInliner)})},
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifNotNil: anIRInstruction ifNil: anotherIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfNilIfNotNil new with: anotherIRInstruction with: anIRInstruction",
messageSends: ["inlinedSend:with:with:", "new"],
referencedClasses: ["IRInlinedIfNilIfNotNil"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "ifTrue:",
category: 'inlining',
fn: function (anIRInstruction){
var self=this;
function $IRInlinedIfTrue(){return smalltalk.IRInlinedIfTrue||(typeof IRInlinedIfTrue=="undefined"?nil:IRInlinedIfTrue)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._inlinedSend_with_(_st($IRInlinedIfTrue())._new(),anIRInstruction);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifTrue:",{anIRInstruction:anIRInstruction},smalltalk.IRSendInliner)})},
args: ["anIRInstruction"],
source: "ifTrue: anIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfTrue new with: anIRInstruction",
messageSends: ["inlinedSend:with:", "new"],
referencedClasses: ["IRInlinedIfTrue"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "ifTrue:ifFalse:",
category: 'inlining',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
function $IRInlinedIfTrueIfFalse(){return smalltalk.IRInlinedIfTrueIfFalse||(typeof IRInlinedIfTrueIfFalse=="undefined"?nil:IRInlinedIfTrueIfFalse)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._inlinedSend_with_with_(_st($IRInlinedIfTrueIfFalse())._new(),anIRInstruction,anotherIRInstruction);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifTrue:ifFalse:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},smalltalk.IRSendInliner)})},
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifTrue: anIRInstruction ifFalse: anotherIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfTrueIfFalse new with: anIRInstruction with: anotherIRInstruction",
messageSends: ["inlinedSend:with:with:", "new"],
referencedClasses: ["IRInlinedIfTrueIfFalse"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineClosure:",
category: 'inlining',
fn: function (anIRClosure){
var self=this;
var inlinedClosure,sequence,statements;
function $IRTempDeclaration(){return smalltalk.IRTempDeclaration||(typeof IRTempDeclaration=="undefined"?nil:IRTempDeclaration)}
function $IRAssignment(){return smalltalk.IRAssignment||(typeof IRAssignment=="undefined"?nil:IRAssignment)}
function $IRVariable(){return smalltalk.IRVariable||(typeof IRVariable=="undefined"?nil:IRVariable)}
function $AliasVar(){return smalltalk.AliasVar||(typeof AliasVar=="undefined"?nil:AliasVar)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1,$4,$6,$8,$9,$7,$10,$12,$13,$15,$17,$18,$19,$20,$16,$14,$21,$23,$25,$26,$27,$28,$24,$22,$29,$11,$5,$30,$32,$31,$35,$34,$36,$33,$37,$40,$39,$38,$41,$42,$43;
inlinedClosure=self._inlinedClosure();
$2=inlinedClosure;
$3=_st(anIRClosure)._scope();
$ctx1.sendIdx["scope"]=1;
$1=_st($2)._scope_($3);
$ctx1.sendIdx["scope:"]=1;
$4=_st(_st(anIRClosure)._tempDeclarations())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(inlinedClosure)._add_(each);
$ctx2.sendIdx["add:"]=1;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$ctx1.sendIdx["do:"]=1;
sequence=self._inlinedSequence();
$5=_st(_st(anIRClosure)._arguments())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$6=inlinedClosure;
$8=_st($IRTempDeclaration())._new();
$ctx2.sendIdx["new"]=1;
_st($8)._name_(each);
$ctx2.sendIdx["name:"]=1;
$9=_st($8)._yourself();
$ctx2.sendIdx["yourself"]=1;
$7=$9;
_st($6)._add_($7);
$ctx2.sendIdx["add:"]=2;
$10=sequence;
$12=_st($IRAssignment())._new();
$ctx2.sendIdx["new"]=2;
$13=$12;
$15=_st($IRVariable())._new();
$ctx2.sendIdx["new"]=3;
$17=_st($AliasVar())._new();
$ctx2.sendIdx["new"]=4;
$18=$17;
$19=_st(inlinedClosure)._scope();
$ctx2.sendIdx["scope"]=2;
_st($18)._scope_($19);
$ctx2.sendIdx["scope:"]=2;
_st($17)._name_(each);
$ctx2.sendIdx["name:"]=2;
$20=_st($17)._yourself();
$ctx2.sendIdx["yourself"]=2;
$16=$20;
$14=_st($15)._variable_($16);
$ctx2.sendIdx["variable:"]=1;
_st($13)._add_($14);
$ctx2.sendIdx["add:"]=4;
$21=$12;
$23=_st($IRVariable())._new();
$ctx2.sendIdx["new"]=5;
$25=_st($AliasVar())._new();
$26=$25;
$27=_st(inlinedClosure)._scope();
_st($26)._scope_($27);
_st($25)._name_("$receiver");
$28=_st($25)._yourself();
$ctx2.sendIdx["yourself"]=3;
$24=$28;
$22=_st($23)._variable_($24);
_st($21)._add_($22);
$ctx2.sendIdx["add:"]=5;
$29=_st($12)._yourself();
$11=$29;
return _st($10)._add_($11);
$ctx2.sendIdx["add:"]=3;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
$ctx1.sendIdx["do:"]=2;
$30=_st(inlinedClosure)._add_(sequence);
$ctx1.sendIdx["add:"]=6;
$32=_st(anIRClosure)._instructions();
$ctx1.sendIdx["instructions"]=2;
$31=_st($32)._last();
$ctx1.sendIdx["last"]=1;
statements=_st($31)._instructions();
$ctx1.sendIdx["instructions"]=1;
_st(statements)._ifNotEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(statements)._allButLast())._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(sequence)._add_(each);
$ctx3.sendIdx["add:"]=7;
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,4)})}));
$35=_st(statements)._last();
$ctx2.sendIdx["last"]=2;
$34=_st($35)._isReturn();
$33=_st($34)._and_((function(){
return smalltalk.withContext(function($ctx3) {
$36=_st(statements)._last();
$ctx3.sendIdx["last"]=3;
return _st($36)._isBlockReturn();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)})}));
if(smalltalk.assert($33)){
$37=sequence;
$40=_st(statements)._last();
$ctx2.sendIdx["last"]=4;
$39=_st($40)._instructions();
$38=_st($39)._first();
return _st($37)._add_($38);
$ctx2.sendIdx["add:"]=8;
} else {
$41=sequence;
$42=_st(statements)._last();
return _st($41)._add_($42);
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$43=inlinedClosure;
return $43;
}, function($ctx1) {$ctx1.fill(self,"inlineClosure:",{anIRClosure:anIRClosure,inlinedClosure:inlinedClosure,sequence:sequence,statements:statements},smalltalk.IRSendInliner)})},
args: ["anIRClosure"],
source: "inlineClosure: anIRClosure\x0a\x09| inlinedClosure sequence statements |\x0a\x0a\x09inlinedClosure := self inlinedClosure.\x0a\x09inlinedClosure scope: anIRClosure scope.\x0a\x0a\x09\x22Add the possible temp declarations\x22\x0a\x09anIRClosure tempDeclarations do: [ :each |\x0a\x09\x09\x09inlinedClosure add: each ].\x0a\x0a\x09\x22Add a block sequence\x22\x0a\x09sequence := self inlinedSequence.\x0a\x0a\x09\x22Map the closure arguments to the receiver of the message send\x22\x0a\x09anIRClosure arguments do: [ :each |\x0a\x09\x09inlinedClosure add: (IRTempDeclaration new name: each; yourself).\x0a\x09\x09sequence add: (IRAssignment new\x0a\x09\x09\x09add: (IRVariable new variable: (AliasVar new scope: inlinedClosure scope; name: each; yourself));\x0a\x09\x09\x09add: (IRVariable new variable: (AliasVar new scope: inlinedClosure scope; name: '$receiver'; yourself));\x0a\x09\x09\x09yourself) ].\x0a\x09\x09\x09\x0a\x09\x22To ensure the correct order of the closure instructions: first the temps then the sequence\x22\x0a\x09inlinedClosure add: sequence.\x0a\x0a\x09\x22Get all the statements\x22\x0a\x09statements := anIRClosure instructions last instructions.\x0a\x09\x0a\x09statements ifNotEmpty: [\x0a\x09\x09statements allButLast do: [ :each | sequence add: each ].\x0a\x0a\x09\x09\x22Inlined closures don't have implicit local returns\x22\x0a\x09\x09(statements last isReturn and: [ statements last isBlockReturn ])\x0a\x09\x09\x09ifTrue: [ sequence add: statements last instructions first ]\x0a\x09\x09\x09ifFalse: [ sequence add: statements last ] ].\x0a\x0a\x09^ inlinedClosure",
messageSends: ["inlinedClosure", "scope:", "scope", "do:", "tempDeclarations", "add:", "inlinedSequence", "arguments", "name:", "new", "yourself", "variable:", "instructions", "last", "ifNotEmpty:", "allButLast", "ifTrue:ifFalse:", "and:", "isReturn", "isBlockReturn", "first"],
referencedClasses: ["IRTempDeclaration", "IRAssignment", "IRVariable", "AliasVar"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineSend:",
category: 'inlining',
fn: function (anIRSend){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$6,$5,$4,$1;
self._send_(anIRSend);
$3=self._send();
$ctx1.sendIdx["send"]=1;
$2=_st($3)._selector();
$6=self._send();
$5=_st($6)._instructions();
$4=_st($5)._allButFirst();
$1=self._perform_withArguments_($2,$4);
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlineSend:",{anIRSend:anIRSend},smalltalk.IRSendInliner)})},
args: ["anIRSend"],
source: "inlineSend: anIRSend\x0a\x09self send: anIRSend.\x0a\x09^ self\x0a\x09\x09perform: self send selector\x0a\x09\x09withArguments: self send instructions allButFirst",
messageSends: ["send:", "perform:withArguments:", "selector", "send", "allButFirst", "instructions"],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inlinedClosure",
category: 'factory',
fn: function (){
var self=this;
function $IRInlinedClosure(){return smalltalk.IRInlinedClosure||(typeof IRInlinedClosure=="undefined"?nil:IRInlinedClosure)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($IRInlinedClosure())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlinedClosure",{},smalltalk.IRSendInliner)})},
args: [],
source: "inlinedClosure\x0a\x09^ IRInlinedClosure new",
messageSends: ["new"],
referencedClasses: ["IRInlinedClosure"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inlinedSend:with:",
category: 'inlining',
fn: function (inlinedSend,anIRInstruction){
var self=this;
var inlinedClosure;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$5,$6,$9,$8,$7,$10,$11,$12;
$2=_st(anIRInstruction)._isClosure();
if(! smalltalk.assert($2)){
$1=self._inliningError_("Message argument should be a block");
$ctx1.sendIdx["inliningError:"]=1;
};
$4=_st(_st(_st(anIRInstruction)._arguments())._size()).__eq((0));
if(! smalltalk.assert($4)){
$3=self._inliningError_("Inlined block should have zero argument");
};
inlinedClosure=_st(self._translator())._visit_(self._inlineClosure_(anIRInstruction));
$5=inlinedSend;
$6=$5;
$9=self._send();
$ctx1.sendIdx["send"]=1;
$8=_st($9)._instructions();
$7=_st($8)._first();
_st($6)._add_($7);
$ctx1.sendIdx["add:"]=1;
$10=_st($5)._add_(inlinedClosure);
$11=self._send();
_st($11)._replaceWith_(inlinedSend);
$12=inlinedSend;
return $12;
}, function($ctx1) {$ctx1.fill(self,"inlinedSend:with:",{inlinedSend:inlinedSend,anIRInstruction:anIRInstruction,inlinedClosure:inlinedClosure},smalltalk.IRSendInliner)})},
args: ["inlinedSend", "anIRInstruction"],
source: "inlinedSend: inlinedSend with: anIRInstruction\x0a\x09| inlinedClosure |\x0a\x0a\x09anIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].\x0a\x09anIRInstruction arguments size = 0 ifFalse: [ self inliningError: 'Inlined block should have zero argument' ].\x0a\x0a\x09inlinedClosure := self translator visit: (self inlineClosure: anIRInstruction).\x0a\x0a\x09inlinedSend\x0a\x09\x09add: self send instructions first;\x0a\x09\x09add: inlinedClosure.\x0a\x0a\x09self send replaceWith: inlinedSend.\x0a\x0a\x09^ inlinedSend",
messageSends: ["ifFalse:", "isClosure", "inliningError:", "=", "size", "arguments", "visit:", "translator", "inlineClosure:", "add:", "first", "instructions", "send", "replaceWith:"],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inlinedSend:with:with:",
category: 'inlining',
fn: function (inlinedSend,anIRInstruction,anotherIRInstruction){
var self=this;
var inlinedClosure1,inlinedClosure2;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$5,$6,$7,$8,$9,$10,$13,$12,$11,$14,$15,$16;
$2=_st(anIRInstruction)._isClosure();
$ctx1.sendIdx["isClosure"]=1;
if(! smalltalk.assert($2)){
$1=self._inliningError_("Message argument should be a block");
$ctx1.sendIdx["inliningError:"]=1;
};
$4=_st(anotherIRInstruction)._isClosure();
if(! smalltalk.assert($4)){
$3=self._inliningError_("Message argument should be a block");
};
$5=self._translator();
$ctx1.sendIdx["translator"]=1;
$6=self._inlineClosure_(anIRInstruction);
$ctx1.sendIdx["inlineClosure:"]=1;
inlinedClosure1=_st($5)._visit_($6);
$ctx1.sendIdx["visit:"]=1;
$7=self._translator();
$8=self._inlineClosure_(anotherIRInstruction);
inlinedClosure2=_st($7)._visit_($8);
$9=inlinedSend;
$10=$9;
$13=self._send();
$ctx1.sendIdx["send"]=1;
$12=_st($13)._instructions();
$11=_st($12)._first();
_st($10)._add_($11);
$ctx1.sendIdx["add:"]=1;
_st($9)._add_(inlinedClosure1);
$ctx1.sendIdx["add:"]=2;
$14=_st($9)._add_(inlinedClosure2);
$15=self._send();
_st($15)._replaceWith_(inlinedSend);
$16=inlinedSend;
return $16;
}, function($ctx1) {$ctx1.fill(self,"inlinedSend:with:with:",{inlinedSend:inlinedSend,anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction,inlinedClosure1:inlinedClosure1,inlinedClosure2:inlinedClosure2},smalltalk.IRSendInliner)})},
args: ["inlinedSend", "anIRInstruction", "anotherIRInstruction"],
source: "inlinedSend: inlinedSend with: anIRInstruction with: anotherIRInstruction\x0a\x09| inlinedClosure1 inlinedClosure2 |\x0a\x0a\x09anIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].\x0a\x09anotherIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].\x0a\x0a\x09inlinedClosure1 := self translator visit: (self inlineClosure: anIRInstruction).\x0a\x09inlinedClosure2 := self translator visit: (self inlineClosure: anotherIRInstruction).\x0a\x0a\x09inlinedSend\x0a\x09\x09add: self send instructions first;\x0a\x09\x09add: inlinedClosure1;\x0a\x09\x09add: inlinedClosure2.\x0a\x0a\x09self send replaceWith: inlinedSend.\x0a\x09^ inlinedSend",
messageSends: ["ifFalse:", "isClosure", "inliningError:", "visit:", "translator", "inlineClosure:", "add:", "first", "instructions", "send", "replaceWith:"],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inlinedSequence",
category: 'factory',
fn: function (){
var self=this;
function $IRInlinedSequence(){return smalltalk.IRInlinedSequence||(typeof IRInlinedSequence=="undefined"?nil:IRInlinedSequence)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($IRInlinedSequence())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlinedSequence",{},smalltalk.IRSendInliner)})},
args: [],
source: "inlinedSequence\x0a\x09^ IRInlinedSequence new",
messageSends: ["new"],
referencedClasses: ["IRInlinedSequence"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inliningError:",
category: 'error handling',
fn: function (aString){
var self=this;
function $InliningError(){return smalltalk.InliningError||(typeof InliningError=="undefined"?nil:InliningError)}
return smalltalk.withContext(function($ctx1) { 
_st($InliningError())._signal_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"inliningError:",{aString:aString},smalltalk.IRSendInliner)})},
args: ["aString"],
source: "inliningError: aString\x0a\x09InliningError signal: aString",
messageSends: ["signal:"],
referencedClasses: ["InliningError"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "send",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@send"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"send",{},smalltalk.IRSendInliner)})},
args: [],
source: "send\x0a\x09^ send",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "send:",
category: 'accessing',
fn: function (anIRSend){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@send"]=anIRSend;
return self}, function($ctx1) {$ctx1.fill(self,"send:",{anIRSend:anIRSend},smalltalk.IRSendInliner)})},
args: ["anIRSend"],
source: "send: anIRSend\x0a\x09send := anIRSend",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "translator",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@translator"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"translator",{},smalltalk.IRSendInliner)})},
args: [],
source: "translator\x0a\x09^ translator",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "translator:",
category: 'accessing',
fn: function (anASTTranslator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@translator"]=anASTTranslator;
return self}, function($ctx1) {$ctx1.fill(self,"translator:",{anASTTranslator:anASTTranslator},smalltalk.IRSendInliner)})},
args: ["anASTTranslator"],
source: "translator: anASTTranslator\x0a\x09translator := anASTTranslator",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSendInliner);


smalltalk.addMethod(
smalltalk.method({
selector: "inlinedSelectors",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["ifTrue:", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:", "ifNil:", "ifNotNil:", "ifNil:ifNotNil:", "ifNotNil:ifNil:"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlinedSelectors",{},smalltalk.IRSendInliner.klass)})},
args: [],
source: "inlinedSelectors\x0a\x09^ #('ifTrue:' 'ifFalse:' 'ifTrue:ifFalse:' 'ifFalse:ifTrue:' 'ifNil:' 'ifNotNil:' 'ifNil:ifNotNil:' 'ifNotNil:ifNil:')",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSendInliner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldInline:",
category: 'accessing',
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3;
var $early={};
try {
$2=_st(self._inlinedSelectors())._includes_(_st(anIRInstruction)._selector());
if(! smalltalk.assert($2)){
return false;
};
_st(_st(_st(anIRInstruction)._instructions())._allButFirst())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$3=_st(each)._isClosure();
if(! smalltalk.assert($3)){
throw $early=[false];
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"shouldInline:",{anIRInstruction:anIRInstruction},smalltalk.IRSendInliner.klass)})},
args: ["anIRInstruction"],
source: "shouldInline: anIRInstruction\x0a\x09(self inlinedSelectors includes: anIRInstruction selector) ifFalse: [ ^ false ].\x0a\x09anIRInstruction instructions allButFirst do: [ :each |\x0a\x09\x09each isClosure ifFalse: [ ^ false ]].\x0a\x09^ true",
messageSends: ["ifFalse:", "includes:", "inlinedSelectors", "selector", "do:", "allButFirst", "instructions", "isClosure"],
referencedClasses: []
}),
smalltalk.IRSendInliner.klass);


smalltalk.addClass('IRAssignmentInliner', smalltalk.IRSendInliner, ['assignment'], 'Compiler-Inlining');
smalltalk.IRAssignmentInliner.comment="I inline message sends together with assignments by moving them around into the inline closure instructions.\x0a\x0a##Example\x0a\x0a\x09foo\x0a\x09\x09| a |\x0a\x09\x09a := true ifTrue: [ 1 ]\x0a\x0aWill produce:\x0a\x0a\x09if(smalltalk.assert(true) {\x0a\x09\x09a = 1;\x0a\x09};";
smalltalk.addMethod(
smalltalk.method({
selector: "assignment",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@assignment"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"assignment",{},smalltalk.IRAssignmentInliner)})},
args: [],
source: "assignment\x0a\x09^ assignment",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "assignment:",
category: 'accessing',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@assignment"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"assignment:",{aNode:aNode},smalltalk.IRAssignmentInliner)})},
args: ["aNode"],
source: "assignment: aNode\x0a\x09assignment := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineAssignment:",
category: 'inlining',
fn: function (anIRAssignment){
var self=this;
var inlinedAssignment;
function $IRInlinedAssignment(){return smalltalk.IRInlinedAssignment||(typeof IRInlinedAssignment=="undefined"?nil:IRInlinedAssignment)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4;
self._assignment_(anIRAssignment);
inlinedAssignment=_st($IRInlinedAssignment())._new();
$1=_st(anIRAssignment)._instructions();
$ctx1.sendIdx["instructions"]=1;
_st($1)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(inlinedAssignment)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
_st(anIRAssignment)._replaceWith_(inlinedAssignment);
$3=_st(inlinedAssignment)._instructions();
$2=_st($3)._last();
self._inlineSend_($2);
$4=inlinedAssignment;
return $4;
}, function($ctx1) {$ctx1.fill(self,"inlineAssignment:",{anIRAssignment:anIRAssignment,inlinedAssignment:inlinedAssignment},smalltalk.IRAssignmentInliner)})},
args: ["anIRAssignment"],
source: "inlineAssignment: anIRAssignment\x0a\x09| inlinedAssignment |\x0a\x09self assignment: anIRAssignment.\x0a\x09inlinedAssignment := IRInlinedAssignment new.\x0a\x09anIRAssignment instructions do: [ :each |\x0a\x09\x09inlinedAssignment add: each ].\x0a\x09anIRAssignment replaceWith: inlinedAssignment.\x0a\x09self inlineSend: inlinedAssignment instructions last.\x0a\x09^ inlinedAssignment",
messageSends: ["assignment:", "new", "do:", "instructions", "add:", "replaceWith:", "inlineSend:", "last"],
referencedClasses: ["IRInlinedAssignment"]
}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineClosure:",
category: 'inlining',
fn: function (anIRClosure){
var self=this;
var inlinedClosure,statements;
function $IRAssignment(){return smalltalk.IRAssignment||(typeof IRAssignment=="undefined"?nil:IRAssignment)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$5,$7,$8,$10,$9,$11,$13,$12,$14,$6,$15;
inlinedClosure=smalltalk.IRAssignmentInliner.superclass.fn.prototype._inlineClosure_.apply(_st(self), [anIRClosure]);
$2=_st(inlinedClosure)._instructions();
$ctx1.sendIdx["instructions"]=2;
$1=_st($2)._last();
$ctx1.sendIdx["last"]=1;
statements=_st($1)._instructions();
$ctx1.sendIdx["instructions"]=1;
_st(statements)._ifNotEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
$4=_st(statements)._last();
$ctx2.sendIdx["last"]=2;
$3=_st($4)._canBeAssigned();
if(smalltalk.assert($3)){
$5=_st(statements)._last();
$ctx2.sendIdx["last"]=3;
$7=_st($IRAssignment())._new();
$8=$7;
$10=_st(self._assignment())._instructions();
$9=_st($10)._first();
_st($8)._add_($9);
$ctx2.sendIdx["add:"]=1;
$11=$7;
$13=_st(statements)._last();
$12=_st($13)._copy();
_st($11)._add_($12);
$14=_st($7)._yourself();
$6=$14;
return _st($5)._replaceWith_($6);
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$15=inlinedClosure;
return $15;
}, function($ctx1) {$ctx1.fill(self,"inlineClosure:",{anIRClosure:anIRClosure,inlinedClosure:inlinedClosure,statements:statements},smalltalk.IRAssignmentInliner)})},
args: ["anIRClosure"],
source: "inlineClosure: anIRClosure\x0a\x09| inlinedClosure statements |\x0a\x0a\x09inlinedClosure := super inlineClosure: anIRClosure.\x0a\x09statements := inlinedClosure instructions last instructions.\x0a\x09\x0a\x09statements ifNotEmpty: [\x0a\x09\x09statements last canBeAssigned ifTrue: [\x0a\x09\x09\x09statements last replaceWith: (IRAssignment new\x0a\x09\x09\x09\x09add: self assignment instructions first;\x0a\x09\x09\x09\x09add: statements last copy;\x0a\x09\x09\x09\x09yourself) ] ].\x0a\x0a\x09^ inlinedClosure",
messageSends: ["inlineClosure:", "instructions", "last", "ifNotEmpty:", "ifTrue:", "canBeAssigned", "replaceWith:", "add:", "new", "first", "assignment", "copy", "yourself"],
referencedClasses: ["IRAssignment"]
}),
smalltalk.IRAssignmentInliner);



smalltalk.addClass('IRReturnInliner', smalltalk.IRSendInliner, [], 'Compiler-Inlining');
smalltalk.IRReturnInliner.comment="I inline message sends with inlined closure together with a return instruction.";
smalltalk.addMethod(
smalltalk.method({
selector: "inlineClosure:",
category: 'inlining',
fn: function (anIRClosure){
var self=this;
var closure,statements;
function $IRReturn(){return smalltalk.IRReturn||(typeof IRReturn=="undefined"?nil:IRReturn)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$5,$7,$8,$10,$9,$11,$6,$12;
closure=smalltalk.IRReturnInliner.superclass.fn.prototype._inlineClosure_.apply(_st(self), [anIRClosure]);
$2=_st(closure)._instructions();
$1=_st($2)._last();
$ctx1.sendIdx["last"]=1;
statements=_st($1)._instructions();
$ctx1.sendIdx["instructions"]=1;
_st(statements)._ifNotEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
$4=_st(statements)._last();
$ctx2.sendIdx["last"]=2;
$3=_st($4)._isReturn();
if(! smalltalk.assert($3)){
$5=_st(statements)._last();
$ctx2.sendIdx["last"]=3;
$7=_st($IRReturn())._new();
$8=$7;
$10=_st(statements)._last();
$9=_st($10)._copy();
_st($8)._add_($9);
$11=_st($7)._yourself();
$6=$11;
return _st($5)._replaceWith_($6);
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$12=closure;
return $12;
}, function($ctx1) {$ctx1.fill(self,"inlineClosure:",{anIRClosure:anIRClosure,closure:closure,statements:statements},smalltalk.IRReturnInliner)})},
args: ["anIRClosure"],
source: "inlineClosure: anIRClosure\x0a\x09| closure statements |\x0a\x0a\x09closure := super inlineClosure: anIRClosure.\x0a\x09statements := closure instructions last instructions.\x0a\x09\x0a\x09statements ifNotEmpty: [\x0a\x09\x09statements last isReturn\x0a\x09\x09\x09ifFalse: [ statements last replaceWith: (IRReturn new\x0a\x09\x09\x09\x09add: statements last copy;\x0a\x09\x09\x09\x09yourself)] ].\x0a\x0a\x09^ closure",
messageSends: ["inlineClosure:", "instructions", "last", "ifNotEmpty:", "ifFalse:", "isReturn", "replaceWith:", "add:", "new", "copy", "yourself"],
referencedClasses: ["IRReturn"]
}),
smalltalk.IRReturnInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineReturn:",
category: 'inlining',
fn: function (anIRReturn){
var self=this;
var return_;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4;
return_=self._inlinedReturn();
$1=_st(anIRReturn)._instructions();
$ctx1.sendIdx["instructions"]=1;
_st($1)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(return_)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
_st(anIRReturn)._replaceWith_(return_);
$3=_st(return_)._instructions();
$2=_st($3)._last();
self._inlineSend_($2);
$4=return_;
return $4;
}, function($ctx1) {$ctx1.fill(self,"inlineReturn:",{anIRReturn:anIRReturn,return_:return_},smalltalk.IRReturnInliner)})},
args: ["anIRReturn"],
source: "inlineReturn: anIRReturn\x0a\x09| return |\x0a\x09return := self inlinedReturn.\x0a\x09anIRReturn instructions do: [ :each |\x0a\x09\x09return add: each ].\x0a\x09anIRReturn replaceWith: return.\x0a\x09self inlineSend: return instructions last.\x0a\x09^ return",
messageSends: ["inlinedReturn", "do:", "instructions", "add:", "replaceWith:", "inlineSend:", "last"],
referencedClasses: []
}),
smalltalk.IRReturnInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inlinedReturn",
category: 'factory',
fn: function (){
var self=this;
function $IRInlinedReturn(){return smalltalk.IRInlinedReturn||(typeof IRInlinedReturn=="undefined"?nil:IRInlinedReturn)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($IRInlinedReturn())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlinedReturn",{},smalltalk.IRReturnInliner)})},
args: [],
source: "inlinedReturn\x0a\x09^ IRInlinedReturn new",
messageSends: ["new"],
referencedClasses: ["IRInlinedReturn"]
}),
smalltalk.IRReturnInliner);



smalltalk.addClass('InliningCodeGenerator', smalltalk.CodeGenerator, [], 'Compiler-Inlining');
smalltalk.InliningCodeGenerator.comment="I am a specialized code generator that uses inlining to produce more optimized JavaScript output";
smalltalk.addMethod(
smalltalk.method({
selector: "compileNode:",
category: 'compiling',
fn: function (aNode){
var self=this;
var ir,stream;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3;
$1=_st(self._semanticAnalyzer())._visit_(aNode);
$ctx1.sendIdx["visit:"]=1;
ir=_st(self._translator())._visit_(aNode);
$ctx1.sendIdx["visit:"]=2;
$2=_st(self._inliner())._visit_(ir);
$ctx1.sendIdx["visit:"]=3;
$4=self._irTranslator();
_st($4)._currentClass_(self._currentClass());
_st($4)._visit_(ir);
$5=_st($4)._contents();
$3=$5;
return $3;
}, function($ctx1) {$ctx1.fill(self,"compileNode:",{aNode:aNode,ir:ir,stream:stream},smalltalk.InliningCodeGenerator)})},
args: ["aNode"],
source: "compileNode: aNode\x0a\x09| ir stream |\x0a\x0a\x09self semanticAnalyzer visit: aNode.\x0a\x09ir := self translator visit: aNode.\x0a\x09self inliner visit: ir.\x0a\x0a\x09^ self irTranslator\x0a\x09\x09currentClass: self currentClass;\x0a\x09\x09visit: ir;\x0a\x09\x09contents",
messageSends: ["visit:", "semanticAnalyzer", "translator", "inliner", "currentClass:", "irTranslator", "currentClass", "contents"],
referencedClasses: []
}),
smalltalk.InliningCodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "inliner",
category: 'compiling',
fn: function (){
var self=this;
function $IRInliner(){return smalltalk.IRInliner||(typeof IRInliner=="undefined"?nil:IRInliner)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($IRInliner())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inliner",{},smalltalk.InliningCodeGenerator)})},
args: [],
source: "inliner\x0a\x09^ IRInliner new",
messageSends: ["new"],
referencedClasses: ["IRInliner"]
}),
smalltalk.InliningCodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "irTranslator",
category: 'compiling',
fn: function (){
var self=this;
function $IRInliningJSTranslator(){return smalltalk.IRInliningJSTranslator||(typeof IRInliningJSTranslator=="undefined"?nil:IRInliningJSTranslator)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($IRInliningJSTranslator())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"irTranslator",{},smalltalk.InliningCodeGenerator)})},
args: [],
source: "irTranslator\x0a\x09^ IRInliningJSTranslator new",
messageSends: ["new"],
referencedClasses: ["IRInliningJSTranslator"]
}),
smalltalk.InliningCodeGenerator);


});
