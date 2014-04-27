define("amber_core/Compiler-Inlining", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Compiler-IR", "amber_core/Kernel-Objects", "amber_core/Compiler-Core"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Compiler-Inlining');
smalltalk.packages["Compiler-Inlining"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('IRInlinedAssignment', globals.IRAssignment, [], 'Compiler-Inlining');
globals.IRInlinedAssignment.comment="I represent an inlined assignment instruction.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRInlinedAssignment_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRInlinedAssignment)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRInlinedAssignment: self",
messageSends: ["visitIRInlinedAssignment:"],
referencedClasses: []
}),
globals.IRInlinedAssignment);

smalltalk.addMethod(
smalltalk.method({
selector: "isInlined",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.IRInlinedAssignment);



smalltalk.addClass('IRInlinedClosure', globals.IRClosure, [], 'Compiler-Inlining');
globals.IRInlinedClosure.comment="I represent an inlined closure instruction.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aVisitor)._visitIRInlinedClosure_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRInlinedClosure)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedClosure: self",
messageSends: ["visitIRInlinedClosure:"],
referencedClasses: []
}),
globals.IRInlinedClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "isInlined",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.IRInlinedClosure);



smalltalk.addClass('IRInlinedReturn', globals.IRReturn, [], 'Compiler-Inlining');
globals.IRInlinedReturn.comment="I represent an inlined local return instruction.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRInlinedReturn_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRInlinedReturn)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRInlinedReturn: self",
messageSends: ["visitIRInlinedReturn:"],
referencedClasses: []
}),
globals.IRInlinedReturn);

smalltalk.addMethod(
smalltalk.method({
selector: "isInlined",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.IRInlinedReturn);



smalltalk.addClass('IRInlinedSend', globals.IRSend, [], 'Compiler-Inlining');
globals.IRInlinedSend.comment="I am the abstract super class of inlined message send instructions.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aVisitor)._visitInlinedSend_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRInlinedSend)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitInlinedSend: self",
messageSends: ["visitInlinedSend:"],
referencedClasses: []
}),
globals.IRInlinedSend);

smalltalk.addMethod(
smalltalk.method({
selector: "internalVariables",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=[];
return $1;
},
args: [],
source: "internalVariables\x0a\x09\x22Answer a collection of internal variables required \x0a\x09to perform the inlining\x22\x0a\x09\x0a\x09^ #()",
messageSends: [],
referencedClasses: []
}),
globals.IRInlinedSend);

smalltalk.addMethod(
smalltalk.method({
selector: "isInlined",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.IRInlinedSend);



smalltalk.addClass('IRInlinedIfFalse', globals.IRInlinedSend, [], 'Compiler-Inlining');
globals.IRInlinedIfFalse.comment="I represent an inlined `#ifFalse:` message send instruction.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aVisitor)._visitIRInlinedIfFalse_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRInlinedIfFalse)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedIfFalse: self",
messageSends: ["visitIRInlinedIfFalse:"],
referencedClasses: []
}),
globals.IRInlinedIfFalse);



smalltalk.addClass('IRInlinedIfNilIfNotNil', globals.IRInlinedSend, [], 'Compiler-Inlining');
globals.IRInlinedIfNilIfNotNil.comment="I represent an inlined `#ifNil:ifNotNil:` message send instruction.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aVisitor)._visitIRInlinedIfNilIfNotNil_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRInlinedIfNilIfNotNil)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedIfNilIfNotNil: self",
messageSends: ["visitIRInlinedIfNilIfNotNil:"],
referencedClasses: []
}),
globals.IRInlinedIfNilIfNotNil);

smalltalk.addMethod(
smalltalk.method({
selector: "internalVariables",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Array())._with_(self._receiverInternalVariable());
return $1;
}, function($ctx1) {$ctx1.fill(self,"internalVariables",{},globals.IRInlinedIfNilIfNotNil)})},
args: [],
source: "internalVariables\x0a\x09^ Array with: self receiverInternalVariable",
messageSends: ["with:", "receiverInternalVariable"],
referencedClasses: ["Array"]
}),
globals.IRInlinedIfNilIfNotNil);

smalltalk.addMethod(
smalltalk.method({
selector: "receiverInternalVariable",
protocol: 'accessing',
fn: function (){
var self=this;
function $IRVariable(){return globals.IRVariable||(typeof IRVariable=="undefined"?nil:IRVariable)}
function $AliasVar(){return globals.AliasVar||(typeof AliasVar=="undefined"?nil:AliasVar)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($IRVariable())._new();
$ctx1.sendIdx["new"]=1;
_st($2)._variable_(_st(_st($AliasVar())._new())._name_(self._receiverInternalVariableName()));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiverInternalVariable",{},globals.IRInlinedIfNilIfNotNil)})},
args: [],
source: "receiverInternalVariable\x0a\x09^ IRVariable new\x0a\x09\x09variable: (AliasVar new name: self receiverInternalVariableName);\x0a\x09\x09yourself.",
messageSends: ["variable:", "new", "name:", "receiverInternalVariableName", "yourself"],
referencedClasses: ["IRVariable", "AliasVar"]
}),
globals.IRInlinedIfNilIfNotNil);

smalltalk.addMethod(
smalltalk.method({
selector: "receiverInternalVariableName",
protocol: 'accessing',
fn: function (){
var self=this;
return "$receiver";
},
args: [],
source: "receiverInternalVariableName\x0a\x09^ '$receiver'",
messageSends: [],
referencedClasses: []
}),
globals.IRInlinedIfNilIfNotNil);



smalltalk.addClass('IRInlinedIfTrue', globals.IRInlinedSend, [], 'Compiler-Inlining');
globals.IRInlinedIfTrue.comment="I represent an inlined `#ifTrue:` message send instruction.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aVisitor)._visitIRInlinedIfTrue_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRInlinedIfTrue)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedIfTrue: self",
messageSends: ["visitIRInlinedIfTrue:"],
referencedClasses: []
}),
globals.IRInlinedIfTrue);



smalltalk.addClass('IRInlinedIfTrueIfFalse', globals.IRInlinedSend, [], 'Compiler-Inlining');
globals.IRInlinedIfTrueIfFalse.comment="I represent an inlined `#ifTrue:ifFalse:` message send instruction.";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aVisitor)._visitIRInlinedIfTrueIfFalse_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRInlinedIfTrueIfFalse)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedIfTrueIfFalse: self",
messageSends: ["visitIRInlinedIfTrueIfFalse:"],
referencedClasses: []
}),
globals.IRInlinedIfTrueIfFalse);



smalltalk.addClass('IRInlinedSequence', globals.IRBlockSequence, [], 'Compiler-Inlining');
globals.IRInlinedSequence.comment="I represent a (block) sequence inside an inlined closure instruction (instance of `IRInlinedClosure`).";
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aVisitor)._visitIRInlinedSequence_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRInlinedSequence)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedSequence: self",
messageSends: ["visitIRInlinedSequence:"],
referencedClasses: []
}),
globals.IRInlinedSequence);

smalltalk.addMethod(
smalltalk.method({
selector: "isInlined",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.IRInlinedSequence);



smalltalk.addClass('IRInliner', globals.IRVisitor, [], 'Compiler-Inlining');
globals.IRInliner.comment="I visit an IR tree, inlining message sends and block closures.\x0a\x0aMessage selectors that can be inlined are answered by `IRSendInliner >> #inlinedSelectors`";
smalltalk.addMethod(
smalltalk.method({
selector: "assignmentInliner",
protocol: 'factory',
fn: function (){
var self=this;
function $IRAssignmentInliner(){return globals.IRAssignmentInliner||(typeof IRAssignmentInliner=="undefined"?nil:IRAssignmentInliner)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($IRAssignmentInliner())._new();
_st($2)._translator_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"assignmentInliner",{},globals.IRInliner)})},
args: [],
source: "assignmentInliner\x0a\x09^ IRAssignmentInliner new\x0a\x09\x09translator: self;\x0a\x09\x09yourself",
messageSends: ["translator:", "new", "yourself"],
referencedClasses: ["IRAssignmentInliner"]
}),
globals.IRInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "returnInliner",
protocol: 'factory',
fn: function (){
var self=this;
function $IRReturnInliner(){return globals.IRReturnInliner||(typeof IRReturnInliner=="undefined"?nil:IRReturnInliner)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($IRReturnInliner())._new();
_st($2)._translator_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"returnInliner",{},globals.IRInliner)})},
args: [],
source: "returnInliner\x0a\x09^ IRReturnInliner new\x0a\x09\x09translator: self;\x0a\x09\x09yourself",
messageSends: ["translator:", "new", "yourself"],
referencedClasses: ["IRReturnInliner"]
}),
globals.IRInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "sendInliner",
protocol: 'factory',
fn: function (){
var self=this;
function $IRSendInliner(){return globals.IRSendInliner||(typeof IRSendInliner=="undefined"?nil:IRSendInliner)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($IRSendInliner())._new();
_st($2)._translator_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"sendInliner",{},globals.IRInliner)})},
args: [],
source: "sendInliner\x0a\x09^ IRSendInliner new\x0a\x09\x09translator: self;\x0a\x09\x09yourself",
messageSends: ["translator:", "new", "yourself"],
referencedClasses: ["IRSendInliner"]
}),
globals.IRInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldInlineAssignment:",
protocol: 'testing',
fn: function (anIRAssignment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$1;
$1=_st(_st(_st(anIRAssignment)._isInlined())._not())._and_((function(){
return smalltalk.withContext(function($ctx2) {
$4=_st(anIRAssignment)._instructions();
$ctx2.sendIdx["instructions"]=1;
$3=_st($4)._last();
$ctx2.sendIdx["last"]=1;
$2=_st($3)._isSend();
return _st($2)._and_((function(){
return smalltalk.withContext(function($ctx3) {
return self._shouldInlineSend_(_st(_st(anIRAssignment)._instructions())._last());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["and:"]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldInlineAssignment:",{anIRAssignment:anIRAssignment},globals.IRInliner)})},
args: ["anIRAssignment"],
source: "shouldInlineAssignment: anIRAssignment\x0a\x09^ anIRAssignment isInlined not and: [\x0a\x09\x09anIRAssignment instructions last isSend and: [\x0a\x09\x09\x09self shouldInlineSend: (anIRAssignment instructions last) ]]",
messageSends: ["and:", "not", "isInlined", "isSend", "last", "instructions", "shouldInlineSend:"],
referencedClasses: []
}),
globals.IRInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldInlineReturn:",
protocol: 'testing',
fn: function (anIRReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$1;
$1=_st(_st(_st(anIRReturn)._isInlined())._not())._and_((function(){
return smalltalk.withContext(function($ctx2) {
$4=_st(anIRReturn)._instructions();
$ctx2.sendIdx["instructions"]=1;
$3=_st($4)._first();
$ctx2.sendIdx["first"]=1;
$2=_st($3)._isSend();
return _st($2)._and_((function(){
return smalltalk.withContext(function($ctx3) {
return self._shouldInlineSend_(_st(_st(anIRReturn)._instructions())._first());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["and:"]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldInlineReturn:",{anIRReturn:anIRReturn},globals.IRInliner)})},
args: ["anIRReturn"],
source: "shouldInlineReturn: anIRReturn\x0a\x09^ anIRReturn isInlined not and: [\x0a\x09\x09anIRReturn instructions first isSend and: [\x0a\x09\x09\x09self shouldInlineSend: (anIRReturn instructions first) ]]",
messageSends: ["and:", "not", "isInlined", "isSend", "first", "instructions", "shouldInlineSend:"],
referencedClasses: []
}),
globals.IRInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldInlineSend:",
protocol: 'testing',
fn: function (anIRSend){
var self=this;
function $IRSendInliner(){return globals.IRSendInliner||(typeof IRSendInliner=="undefined"?nil:IRSendInliner)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(anIRSend)._isInlined())._not())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st($IRSendInliner())._shouldInline_(anIRSend);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldInlineSend:",{anIRSend:anIRSend},globals.IRInliner)})},
args: ["anIRSend"],
source: "shouldInlineSend: anIRSend\x0a\x09^ anIRSend isInlined not and: [\x0a\x09\x09IRSendInliner shouldInline: anIRSend ]",
messageSends: ["and:", "not", "isInlined", "shouldInline:"],
referencedClasses: ["IRSendInliner"]
}),
globals.IRInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "transformNonLocalReturn:",
protocol: 'visiting',
fn: function (anIRNonLocalReturn){
var self=this;
var localReturn;
function $IRReturn(){return globals.IRReturn||(typeof IRReturn=="undefined"?nil:IRReturn)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$5,$6,$7,$8,$9;
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
_st($6)._scope_(_st(anIRNonLocalReturn)._scope());
$7=_st($6)._yourself();
localReturn=$7;
localReturn;
_st(_st(anIRNonLocalReturn)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(localReturn)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
_st(anIRNonLocalReturn)._replaceWith_(localReturn);
$8=localReturn;
return $8;
};
$9=($ctx1.supercall = true, globals.IRInliner.superclass.fn.prototype._visitIRNonLocalReturn_.apply(_st(self), [anIRNonLocalReturn]));
$ctx1.supercall = false;
return $9;
}, function($ctx1) {$ctx1.fill(self,"transformNonLocalReturn:",{anIRNonLocalReturn:anIRNonLocalReturn,localReturn:localReturn},globals.IRInliner)})},
args: ["anIRNonLocalReturn"],
source: "transformNonLocalReturn: anIRNonLocalReturn\x0a\x09\x22Replace a non local return into a local return\x22\x0a\x0a\x09| localReturn |\x0a\x09anIRNonLocalReturn scope canInlineNonLocalReturns ifTrue: [\x0a\x09\x09anIRNonLocalReturn scope methodScope removeNonLocalReturn: anIRNonLocalReturn scope.\x0a\x09\x09localReturn := IRReturn new\x0a\x09\x09\x09scope: anIRNonLocalReturn scope;\x0a\x09\x09\x09yourself.\x0a\x09\x09anIRNonLocalReturn instructions do: [ :each |\x0a\x09\x09\x09localReturn add: each ].\x0a\x09\x09anIRNonLocalReturn replaceWith: localReturn.\x0a\x09\x09^ localReturn ].\x0a\x09^ super visitIRNonLocalReturn: anIRNonLocalReturn",
messageSends: ["ifTrue:", "canInlineNonLocalReturns", "scope", "removeNonLocalReturn:", "methodScope", "scope:", "new", "yourself", "do:", "instructions", "add:", "replaceWith:", "visitIRNonLocalReturn:"],
referencedClasses: ["IRReturn"]
}),
globals.IRInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRAssignment:",
protocol: 'visiting',
fn: function (anIRAssignment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._shouldInlineAssignment_(anIRAssignment);
if(smalltalk.assert($2)){
$1=_st(self._assignmentInliner())._inlineAssignment_(anIRAssignment);
} else {
$1=($ctx1.supercall = true, globals.IRInliner.superclass.fn.prototype._visitIRAssignment_.apply(_st(self), [anIRAssignment]));
$ctx1.supercall = false;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRAssignment:",{anIRAssignment:anIRAssignment},globals.IRInliner)})},
args: ["anIRAssignment"],
source: "visitIRAssignment: anIRAssignment\x0a\x09^ (self shouldInlineAssignment: anIRAssignment)\x0a\x09\x09ifTrue: [ self assignmentInliner inlineAssignment: anIRAssignment ]\x0a\x09\x09ifFalse: [ super visitIRAssignment: anIRAssignment ]",
messageSends: ["ifTrue:ifFalse:", "shouldInlineAssignment:", "inlineAssignment:", "assignmentInliner", "visitIRAssignment:"],
referencedClasses: []
}),
globals.IRInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRNonLocalReturn:",
protocol: 'visiting',
fn: function (anIRNonLocalReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._transformNonLocalReturn_(anIRNonLocalReturn);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRNonLocalReturn:",{anIRNonLocalReturn:anIRNonLocalReturn},globals.IRInliner)})},
args: ["anIRNonLocalReturn"],
source: "visitIRNonLocalReturn: anIRNonLocalReturn\x0a\x09^ self transformNonLocalReturn: anIRNonLocalReturn",
messageSends: ["transformNonLocalReturn:"],
referencedClasses: []
}),
globals.IRInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRReturn:",
protocol: 'visiting',
fn: function (anIRReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._shouldInlineReturn_(anIRReturn);
if(smalltalk.assert($2)){
$1=_st(self._returnInliner())._inlineReturn_(anIRReturn);
} else {
$1=($ctx1.supercall = true, globals.IRInliner.superclass.fn.prototype._visitIRReturn_.apply(_st(self), [anIRReturn]));
$ctx1.supercall = false;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRReturn:",{anIRReturn:anIRReturn},globals.IRInliner)})},
args: ["anIRReturn"],
source: "visitIRReturn: anIRReturn\x0a\x09^ (self shouldInlineReturn: anIRReturn)\x0a\x09\x09ifTrue: [ self returnInliner inlineReturn: anIRReturn ]\x0a\x09\x09ifFalse: [ super visitIRReturn: anIRReturn ]",
messageSends: ["ifTrue:ifFalse:", "shouldInlineReturn:", "inlineReturn:", "returnInliner", "visitIRReturn:"],
referencedClasses: []
}),
globals.IRInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRSend:",
protocol: 'visiting',
fn: function (anIRSend){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._shouldInlineSend_(anIRSend);
if(smalltalk.assert($2)){
$1=_st(self._sendInliner())._inlineSend_(anIRSend);
} else {
$1=($ctx1.supercall = true, globals.IRInliner.superclass.fn.prototype._visitIRSend_.apply(_st(self), [anIRSend]));
$ctx1.supercall = false;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRSend:",{anIRSend:anIRSend},globals.IRInliner)})},
args: ["anIRSend"],
source: "visitIRSend: anIRSend\x0a\x09^ (self shouldInlineSend: anIRSend)\x0a\x09\x09ifTrue: [ self sendInliner inlineSend: anIRSend ]\x0a\x09\x09ifFalse: [ super visitIRSend: anIRSend ]",
messageSends: ["ifTrue:ifFalse:", "shouldInlineSend:", "inlineSend:", "sendInliner", "visitIRSend:"],
referencedClasses: []
}),
globals.IRInliner);



smalltalk.addClass('IRInliningJSTranslator', globals.IRJSTranslator, [], 'Compiler-Inlining');
globals.IRInliningJSTranslator.comment="I am a specialized JavaScript translator able to write inlined IR instructions to JavaScript stream (`JSStream` instance).";
smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedAssignment:",
protocol: 'visiting',
fn: function (anIRInlinedAssignment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._visit_(_st(_st(anIRInlinedAssignment)._instructions())._last());
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedAssignment:",{anIRInlinedAssignment:anIRInlinedAssignment},globals.IRInliningJSTranslator)})},
args: ["anIRInlinedAssignment"],
source: "visitIRInlinedAssignment: anIRInlinedAssignment\x0a\x09self visit: anIRInlinedAssignment instructions last",
messageSends: ["visit:", "last", "instructions"],
referencedClasses: []
}),
globals.IRInliningJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedClosure:",
protocol: 'visiting',
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
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedClosure:",{anIRInlinedClosure:anIRInlinedClosure},globals.IRInliningJSTranslator)})},
args: ["anIRInlinedClosure"],
source: "visitIRInlinedClosure: anIRInlinedClosure\x0a\x09self stream nextPutVars: (anIRInlinedClosure tempDeclarations collect: [ :each |\x0a\x09\x09each name asVariableName ]).\x0a\x09anIRInlinedClosure instructions do: [ :each |\x0a\x09\x09self visit: each ]",
messageSends: ["nextPutVars:", "stream", "collect:", "tempDeclarations", "asVariableName", "name", "do:", "instructions", "visit:"],
referencedClasses: []
}),
globals.IRInliningJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedIfFalse:",
protocol: 'visiting',
fn: function (anIRInlinedIfFalse){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3;
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
return _st(self._stream())._nextPutAll_(")");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return self._visit_(_st(_st(anIRInlinedIfFalse)._instructions())._last());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedIfFalse:",{anIRInlinedIfFalse:anIRInlinedIfFalse},globals.IRInliningJSTranslator)})},
args: ["anIRInlinedIfFalse"],
source: "visitIRInlinedIfFalse: anIRInlinedIfFalse\x0a\x09self stream nextPutIf: [\x0a\x09\x09self stream nextPutAll: '! smalltalk.assert('.\x0a\x09\x09self visit: anIRInlinedIfFalse instructions first.\x0a\x09\x09self stream nextPutAll: ')' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfFalse instructions last ]",
messageSends: ["nextPutIf:with:", "stream", "nextPutAll:", "visit:", "first", "instructions", "last"],
referencedClasses: []
}),
globals.IRInliningJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedIfNilIfNotNil:",
protocol: 'visiting',
fn: function (anIRInlinedIfNilIfNotNil){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$4,$7,$6;
$1=self._stream();
$ctx1.sendIdx["stream"]=1;
_st($1)._nextPutIfElse_with_with_((function(){
return smalltalk.withContext(function($ctx2) {
$2=self._stream();
$ctx2.sendIdx["stream"]=2;
$3=_st("(".__comma(_st(anIRInlinedIfNilIfNotNil)._receiverInternalVariableName())).__comma(" = ");
$ctx2.sendIdx[","]=1;
_st($2)._nextPutAll_($3);
$ctx2.sendIdx["nextPutAll:"]=1;
$5=_st(anIRInlinedIfNilIfNotNil)._instructions();
$ctx2.sendIdx["instructions"]=1;
$4=_st($5)._first();
self._visit_($4);
$ctx2.sendIdx["visit:"]=1;
return _st(self._stream())._nextPutAll_(") == null || $receiver.isNil");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
$7=_st(anIRInlinedIfNilIfNotNil)._instructions();
$ctx2.sendIdx["instructions"]=2;
$6=_st($7)._second();
return self._visit_($6);
$ctx2.sendIdx["visit:"]=2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return self._visit_(_st(_st(anIRInlinedIfNilIfNotNil)._instructions())._third());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedIfNilIfNotNil:",{anIRInlinedIfNilIfNotNil:anIRInlinedIfNilIfNotNil},globals.IRInliningJSTranslator)})},
args: ["anIRInlinedIfNilIfNotNil"],
source: "visitIRInlinedIfNilIfNotNil: anIRInlinedIfNilIfNotNil\x0a\x09self stream\x0a\x09\x09nextPutIfElse: [\x0a\x09\x09\x09self stream nextPutAll: '(', anIRInlinedIfNilIfNotNil receiverInternalVariableName, ' = '.\x0a\x09\x09\x09self visit: anIRInlinedIfNilIfNotNil instructions first.\x0a\x09\x09\x09self stream nextPutAll: ') == null || $receiver.isNil' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfNilIfNotNil instructions second ]\x0a\x09\x09with: [ self visit: anIRInlinedIfNilIfNotNil instructions third ]",
messageSends: ["nextPutIfElse:with:with:", "stream", "nextPutAll:", ",", "receiverInternalVariableName", "visit:", "first", "instructions", "second", "third"],
referencedClasses: []
}),
globals.IRInliningJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedIfTrue:",
protocol: 'visiting',
fn: function (anIRInlinedIfTrue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3;
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
return _st(self._stream())._nextPutAll_(")");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return self._visit_(_st(_st(anIRInlinedIfTrue)._instructions())._last());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedIfTrue:",{anIRInlinedIfTrue:anIRInlinedIfTrue},globals.IRInliningJSTranslator)})},
args: ["anIRInlinedIfTrue"],
source: "visitIRInlinedIfTrue: anIRInlinedIfTrue\x0a\x09self stream nextPutIf: [\x0a\x09\x09self stream nextPutAll: 'smalltalk.assert('.\x0a\x09\x09self visit: anIRInlinedIfTrue instructions first.\x0a\x09\x09self stream nextPutAll: ')' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfTrue instructions last ]",
messageSends: ["nextPutIf:with:", "stream", "nextPutAll:", "visit:", "first", "instructions", "last"],
referencedClasses: []
}),
globals.IRInliningJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedIfTrueIfFalse:",
protocol: 'visiting',
fn: function (anIRInlinedIfTrueIfFalse){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$6,$5;
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
return _st(self._stream())._nextPutAll_(")");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
$6=_st(anIRInlinedIfTrueIfFalse)._instructions();
$ctx2.sendIdx["instructions"]=2;
$5=_st($6)._second();
return self._visit_($5);
$ctx2.sendIdx["visit:"]=2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return self._visit_(_st(_st(anIRInlinedIfTrueIfFalse)._instructions())._third());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedIfTrueIfFalse:",{anIRInlinedIfTrueIfFalse:anIRInlinedIfTrueIfFalse},globals.IRInliningJSTranslator)})},
args: ["anIRInlinedIfTrueIfFalse"],
source: "visitIRInlinedIfTrueIfFalse: anIRInlinedIfTrueIfFalse\x0a\x09self stream\x0a\x09\x09nextPutIfElse: [\x0a\x09\x09\x09self stream nextPutAll: 'smalltalk.assert('.\x0a\x09\x09\x09self visit: anIRInlinedIfTrueIfFalse instructions first.\x0a\x09\x09\x09self stream nextPutAll: ')' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfTrueIfFalse instructions second ]\x0a\x09\x09with: [ self visit: anIRInlinedIfTrueIfFalse instructions third ]",
messageSends: ["nextPutIfElse:with:with:", "stream", "nextPutAll:", "visit:", "first", "instructions", "second", "third"],
referencedClasses: []
}),
globals.IRInliningJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedNonLocalReturn:",
protocol: 'visiting',
fn: function (anIRInlinedReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._stream();
$ctx1.sendIdx["stream"]=1;
_st($1)._nextPutStatementWith_((function(){
return smalltalk.withContext(function($ctx2) {
return self._visit_(_st(_st(anIRInlinedReturn)._instructions())._last());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
_st(self._stream())._nextPutNonLocalReturnWith_((function(){
}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedNonLocalReturn:",{anIRInlinedReturn:anIRInlinedReturn},globals.IRInliningJSTranslator)})},
args: ["anIRInlinedReturn"],
source: "visitIRInlinedNonLocalReturn: anIRInlinedReturn\x0a\x09self stream nextPutStatementWith: [\x0a\x09\x09self visit: anIRInlinedReturn instructions last ].\x0a\x09self stream nextPutNonLocalReturnWith: [ ]",
messageSends: ["nextPutStatementWith:", "stream", "visit:", "last", "instructions", "nextPutNonLocalReturnWith:"],
referencedClasses: []
}),
globals.IRInliningJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedReturn:",
protocol: 'visiting',
fn: function (anIRInlinedReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._visit_(_st(_st(anIRInlinedReturn)._instructions())._last());
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedReturn:",{anIRInlinedReturn:anIRInlinedReturn},globals.IRInliningJSTranslator)})},
args: ["anIRInlinedReturn"],
source: "visitIRInlinedReturn: anIRInlinedReturn\x0a\x09self visit: anIRInlinedReturn instructions last",
messageSends: ["visit:", "last", "instructions"],
referencedClasses: []
}),
globals.IRInliningJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedSequence:",
protocol: 'visiting',
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
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedSequence:",{anIRInlinedSequence:anIRInlinedSequence},globals.IRInliningJSTranslator)})},
args: ["anIRInlinedSequence"],
source: "visitIRInlinedSequence: anIRInlinedSequence\x0a\x09anIRInlinedSequence instructions do: [ :each |\x0a\x09\x09self stream nextPutStatementWith: [ self visit: each ]]",
messageSends: ["do:", "instructions", "nextPutStatementWith:", "stream", "visit:"],
referencedClasses: []
}),
globals.IRInliningJSTranslator);



smalltalk.addClass('IRSendInliner', globals.Object, ['send', 'translator'], 'Compiler-Inlining');
globals.IRSendInliner.comment="I inline some message sends and block closure arguments. I heavily rely on #perform: to dispatch inlining methods.";
smalltalk.addMethod(
smalltalk.method({
selector: "ifFalse:",
protocol: 'inlining',
fn: function (anIRInstruction){
var self=this;
function $IRInlinedIfFalse(){return globals.IRInlinedIfFalse||(typeof IRInlinedIfFalse=="undefined"?nil:IRInlinedIfFalse)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._inlinedSend_with_(_st($IRInlinedIfFalse())._new(),anIRInstruction);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifFalse:",{anIRInstruction:anIRInstruction},globals.IRSendInliner)})},
args: ["anIRInstruction"],
source: "ifFalse: anIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfFalse new with: anIRInstruction",
messageSends: ["inlinedSend:with:", "new"],
referencedClasses: ["IRInlinedIfFalse"]
}),
globals.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "ifFalse:ifTrue:",
protocol: 'inlining',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._perform_withArguments_("ifTrue:ifFalse:",[anotherIRInstruction,anIRInstruction]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifFalse:ifTrue:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},globals.IRSendInliner)})},
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifFalse: anIRInstruction ifTrue: anotherIRInstruction\x0a\x09^ self perform: #ifTrue:ifFalse: withArguments: { anotherIRInstruction. anIRInstruction }",
messageSends: ["perform:withArguments:"],
referencedClasses: []
}),
globals.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNil:",
protocol: 'inlining',
fn: function (anIRInstruction){
var self=this;
function $IRInlinedIfNilIfNotNil(){return globals.IRInlinedIfNilIfNotNil||(typeof IRInlinedIfNilIfNotNil=="undefined"?nil:IRInlinedIfNilIfNotNil)}
function $IRClosure(){return globals.IRClosure||(typeof IRClosure=="undefined"?nil:IRClosure)}
function $IRBlockSequence(){return globals.IRBlockSequence||(typeof IRBlockSequence=="undefined"?nil:IRBlockSequence)}
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
$1=self._inlinedSend_with_with_($2,anIRInstruction,$3);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNil:",{anIRInstruction:anIRInstruction},globals.IRSendInliner)})},
args: ["anIRInstruction"],
source: "ifNil: anIRInstruction\x0a\x09^ self\x0a\x09\x09inlinedSend: IRInlinedIfNilIfNotNil new\x0a\x09\x09with: anIRInstruction\x0a\x09\x09with: (IRClosure new\x0a\x09\x09\x09scope: anIRInstruction scope copy;\x0a\x09\x09\x09add: (IRBlockSequence new\x0a\x09\x09\x09\x09add: self send instructions first;\x0a\x09\x09\x09\x09yourself);\x0a\x09\x09\x09yourself)",
messageSends: ["inlinedSend:with:with:", "new", "scope:", "copy", "scope", "add:", "first", "instructions", "send", "yourself"],
referencedClasses: ["IRInlinedIfNilIfNotNil", "IRClosure", "IRBlockSequence"]
}),
globals.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNil:ifNotNil:",
protocol: 'inlining',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
function $IRInlinedIfNilIfNotNil(){return globals.IRInlinedIfNilIfNotNil||(typeof IRInlinedIfNilIfNotNil=="undefined"?nil:IRInlinedIfNilIfNotNil)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._inlinedSend_with_with_(_st($IRInlinedIfNilIfNotNil())._new(),anIRInstruction,anotherIRInstruction);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNil:ifNotNil:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},globals.IRSendInliner)})},
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifNil: anIRInstruction ifNotNil: anotherIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfNilIfNotNil new with: anIRInstruction with: anotherIRInstruction",
messageSends: ["inlinedSend:with:with:", "new"],
referencedClasses: ["IRInlinedIfNilIfNotNil"]
}),
globals.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNotNil:",
protocol: 'inlining',
fn: function (anIRInstruction){
var self=this;
function $IRInlinedIfNilIfNotNil(){return globals.IRInlinedIfNilIfNotNil||(typeof IRInlinedIfNilIfNotNil=="undefined"?nil:IRInlinedIfNilIfNotNil)}
function $IRClosure(){return globals.IRClosure||(typeof IRClosure=="undefined"?nil:IRClosure)}
function $IRBlockSequence(){return globals.IRBlockSequence||(typeof IRBlockSequence=="undefined"?nil:IRBlockSequence)}
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
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:",{anIRInstruction:anIRInstruction},globals.IRSendInliner)})},
args: ["anIRInstruction"],
source: "ifNotNil: anIRInstruction\x0a\x09^ self\x0a\x09\x09inlinedSend: IRInlinedIfNilIfNotNil new\x0a\x09\x09with: (IRClosure new\x0a\x09\x09\x09scope: anIRInstruction scope copy;\x0a\x09\x09\x09add: (IRBlockSequence new\x0a\x09\x09\x09\x09add: self send instructions first;\x0a\x09\x09\x09\x09yourself);\x0a\x09\x09\x09yourself)\x0a\x09\x09with: anIRInstruction",
messageSends: ["inlinedSend:with:with:", "new", "scope:", "copy", "scope", "add:", "first", "instructions", "send", "yourself"],
referencedClasses: ["IRInlinedIfNilIfNotNil", "IRClosure", "IRBlockSequence"]
}),
globals.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNotNil:ifNil:",
protocol: 'inlining',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
function $IRInlinedIfNilIfNotNil(){return globals.IRInlinedIfNilIfNotNil||(typeof IRInlinedIfNilIfNotNil=="undefined"?nil:IRInlinedIfNilIfNotNil)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._inlinedSend_with_with_(_st($IRInlinedIfNilIfNotNil())._new(),anotherIRInstruction,anIRInstruction);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:ifNil:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},globals.IRSendInliner)})},
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifNotNil: anIRInstruction ifNil: anotherIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfNilIfNotNil new with: anotherIRInstruction with: anIRInstruction",
messageSends: ["inlinedSend:with:with:", "new"],
referencedClasses: ["IRInlinedIfNilIfNotNil"]
}),
globals.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "ifTrue:",
protocol: 'inlining',
fn: function (anIRInstruction){
var self=this;
function $IRInlinedIfTrue(){return globals.IRInlinedIfTrue||(typeof IRInlinedIfTrue=="undefined"?nil:IRInlinedIfTrue)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._inlinedSend_with_(_st($IRInlinedIfTrue())._new(),anIRInstruction);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifTrue:",{anIRInstruction:anIRInstruction},globals.IRSendInliner)})},
args: ["anIRInstruction"],
source: "ifTrue: anIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfTrue new with: anIRInstruction",
messageSends: ["inlinedSend:with:", "new"],
referencedClasses: ["IRInlinedIfTrue"]
}),
globals.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "ifTrue:ifFalse:",
protocol: 'inlining',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
function $IRInlinedIfTrueIfFalse(){return globals.IRInlinedIfTrueIfFalse||(typeof IRInlinedIfTrueIfFalse=="undefined"?nil:IRInlinedIfTrueIfFalse)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._inlinedSend_with_with_(_st($IRInlinedIfTrueIfFalse())._new(),anIRInstruction,anotherIRInstruction);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifTrue:ifFalse:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},globals.IRSendInliner)})},
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifTrue: anIRInstruction ifFalse: anotherIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfTrueIfFalse new with: anIRInstruction with: anotherIRInstruction",
messageSends: ["inlinedSend:with:with:", "new"],
referencedClasses: ["IRInlinedIfTrueIfFalse"]
}),
globals.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineClosure:",
protocol: 'inlining',
fn: function (anIRClosure){
var self=this;
var inlinedClosure,sequence,statements;
function $IRTempDeclaration(){return globals.IRTempDeclaration||(typeof IRTempDeclaration=="undefined"?nil:IRTempDeclaration)}
function $IRAssignment(){return globals.IRAssignment||(typeof IRAssignment=="undefined"?nil:IRAssignment)}
function $IRVariable(){return globals.IRVariable||(typeof IRVariable=="undefined"?nil:IRVariable)}
function $AliasVar(){return globals.AliasVar||(typeof AliasVar=="undefined"?nil:AliasVar)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$7,$8,$6,$9,$11,$12,$14,$16,$17,$18,$19,$15,$13,$20,$22,$24,$25,$23,$21,$26,$10,$28,$27,$31,$30,$32,$29,$33,$36,$35,$34,$37;
inlinedClosure=self._inlinedClosure();
$1=inlinedClosure;
$2=$1;
$3=_st(anIRClosure)._scope();
$ctx1.sendIdx["scope"]=1;
_st($2)._scope_($3);
$ctx1.sendIdx["scope:"]=1;
$4=_st($1)._parent_(_st(anIRClosure)._parent());
_st(_st(anIRClosure)._tempDeclarations())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(inlinedClosure)._add_(each);
$ctx2.sendIdx["add:"]=1;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$ctx1.sendIdx["do:"]=1;
sequence=self._inlinedSequence();
_st(_st(anIRClosure)._arguments())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$5=inlinedClosure;
$7=_st($IRTempDeclaration())._new();
$ctx2.sendIdx["new"]=1;
_st($7)._name_(each);
$ctx2.sendIdx["name:"]=1;
$8=_st($7)._yourself();
$ctx2.sendIdx["yourself"]=1;
$6=$8;
_st($5)._add_($6);
$ctx2.sendIdx["add:"]=2;
$9=sequence;
$11=_st($IRAssignment())._new();
$ctx2.sendIdx["new"]=2;
$12=$11;
$14=_st($IRVariable())._new();
$ctx2.sendIdx["new"]=3;
$16=_st($AliasVar())._new();
$ctx2.sendIdx["new"]=4;
$17=$16;
$18=_st(inlinedClosure)._scope();
$ctx2.sendIdx["scope"]=2;
_st($17)._scope_($18);
$ctx2.sendIdx["scope:"]=2;
_st($16)._name_(each);
$ctx2.sendIdx["name:"]=2;
$19=_st($16)._yourself();
$ctx2.sendIdx["yourself"]=2;
$15=$19;
$13=_st($14)._variable_($15);
$ctx2.sendIdx["variable:"]=1;
_st($12)._add_($13);
$ctx2.sendIdx["add:"]=4;
$20=$11;
$22=_st($IRVariable())._new();
$ctx2.sendIdx["new"]=5;
$24=_st($AliasVar())._new();
_st($24)._scope_(_st(inlinedClosure)._scope());
_st($24)._name_("$receiver");
$25=_st($24)._yourself();
$ctx2.sendIdx["yourself"]=3;
$23=$25;
$21=_st($22)._variable_($23);
_st($20)._add_($21);
$ctx2.sendIdx["add:"]=5;
$26=_st($11)._yourself();
$10=$26;
return _st($9)._add_($10);
$ctx2.sendIdx["add:"]=3;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
$ctx1.sendIdx["do:"]=2;
_st(inlinedClosure)._add_(sequence);
$ctx1.sendIdx["add:"]=6;
$28=_st(anIRClosure)._instructions();
$ctx1.sendIdx["instructions"]=2;
$27=_st($28)._last();
$ctx1.sendIdx["last"]=1;
statements=_st($27)._instructions();
$ctx1.sendIdx["instructions"]=1;
_st(statements)._ifNotEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(statements)._allButLast())._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(sequence)._add_(each);
$ctx3.sendIdx["add:"]=7;
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,4)})}));
$31=_st(statements)._last();
$ctx2.sendIdx["last"]=2;
$30=_st($31)._isReturn();
$29=_st($30)._and_((function(){
return smalltalk.withContext(function($ctx3) {
$32=_st(statements)._last();
$ctx3.sendIdx["last"]=3;
return _st($32)._isBlockReturn();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)})}));
if(smalltalk.assert($29)){
$33=sequence;
$36=_st(statements)._last();
$ctx2.sendIdx["last"]=4;
$35=_st($36)._instructions();
$34=_st($35)._first();
return _st($33)._add_($34);
$ctx2.sendIdx["add:"]=8;
} else {
return _st(sequence)._add_(_st(statements)._last());
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$37=inlinedClosure;
return $37;
}, function($ctx1) {$ctx1.fill(self,"inlineClosure:",{anIRClosure:anIRClosure,inlinedClosure:inlinedClosure,sequence:sequence,statements:statements},globals.IRSendInliner)})},
args: ["anIRClosure"],
source: "inlineClosure: anIRClosure\x0a\x09| inlinedClosure sequence statements |\x0a\x0a\x09inlinedClosure := self inlinedClosure.\x0a\x09inlinedClosure \x0a\x09\x09scope: anIRClosure scope;\x0a\x09\x09parent: anIRClosure parent.\x0a\x0a\x09\x22Add the possible temp declarations\x22\x0a\x09anIRClosure tempDeclarations do: [ :each |\x0a\x09\x09\x09inlinedClosure add: each ].\x0a\x0a\x09\x22Add a block sequence\x22\x0a\x09sequence := self inlinedSequence.\x0a\x0a\x09\x22Map the closure arguments to the receiver of the message send\x22\x0a\x09anIRClosure arguments do: [ :each |\x0a\x09\x09inlinedClosure add: (IRTempDeclaration new name: each; yourself).\x0a\x09\x09sequence add: (IRAssignment new\x0a\x09\x09\x09add: (IRVariable new variable: (AliasVar new scope: inlinedClosure scope; name: each; yourself));\x0a\x09\x09\x09add: (IRVariable new variable: (AliasVar new scope: inlinedClosure scope; name: '$receiver'; yourself));\x0a\x09\x09\x09yourself) ].\x0a\x09\x09\x09\x0a\x09\x22To ensure the correct order of the closure instructions: first the temps then the sequence\x22\x0a\x09inlinedClosure add: sequence.\x0a\x0a\x09\x22Get all the statements\x22\x0a\x09statements := anIRClosure instructions last instructions.\x0a\x09\x0a\x09statements ifNotEmpty: [\x0a\x09\x09statements allButLast do: [ :each | sequence add: each ].\x0a\x0a\x09\x09\x22Inlined closures don't have implicit local returns\x22\x0a\x09\x09(statements last isReturn and: [ statements last isBlockReturn ])\x0a\x09\x09\x09ifTrue: [ sequence add: statements last instructions first ]\x0a\x09\x09\x09ifFalse: [ sequence add: statements last ] ].\x0a\x0a\x09^ inlinedClosure",
messageSends: ["inlinedClosure", "scope:", "scope", "parent:", "parent", "do:", "tempDeclarations", "add:", "inlinedSequence", "arguments", "name:", "new", "yourself", "variable:", "instructions", "last", "ifNotEmpty:", "allButLast", "ifTrue:ifFalse:", "and:", "isReturn", "isBlockReturn", "first"],
referencedClasses: ["IRTempDeclaration", "IRAssignment", "IRVariable", "AliasVar"]
}),
globals.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineSend:",
protocol: 'inlining',
fn: function (anIRSend){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
self._send_(anIRSend);
$3=self._send();
$ctx1.sendIdx["send"]=1;
$2=_st($3)._selector();
$1=self._perform_withArguments_($2,_st(_st(self._send())._instructions())._allButFirst());
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlineSend:",{anIRSend:anIRSend},globals.IRSendInliner)})},
args: ["anIRSend"],
source: "inlineSend: anIRSend\x0a\x09self send: anIRSend.\x0a\x09^ self\x0a\x09\x09perform: self send selector\x0a\x09\x09withArguments: self send instructions allButFirst",
messageSends: ["send:", "perform:withArguments:", "selector", "send", "allButFirst", "instructions"],
referencedClasses: []
}),
globals.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inlinedClosure",
protocol: 'factory',
fn: function (){
var self=this;
function $IRInlinedClosure(){return globals.IRInlinedClosure||(typeof IRInlinedClosure=="undefined"?nil:IRInlinedClosure)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($IRInlinedClosure())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlinedClosure",{},globals.IRSendInliner)})},
args: [],
source: "inlinedClosure\x0a\x09^ IRInlinedClosure new",
messageSends: ["new"],
referencedClasses: ["IRInlinedClosure"]
}),
globals.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inlinedSend:with:",
protocol: 'inlining',
fn: function (inlinedSend,anIRInstruction){
var self=this;
var inlinedClosure;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$5,$4,$3,$6,$7;
$1=_st(anIRInstruction)._isClosure();
if(! smalltalk.assert($1)){
self._inliningError_("Message argument should be a block");
$ctx1.sendIdx["inliningError:"]=1;
};
$2=_st(_st(_st(anIRInstruction)._arguments())._size()).__eq((0));
if(! smalltalk.assert($2)){
self._inliningError_("Inlined block should have zero argument");
};
inlinedClosure=_st(self._translator())._visit_(self._inlineClosure_(anIRInstruction));
$5=self._send();
$ctx1.sendIdx["send"]=1;
$4=_st($5)._instructions();
$3=_st($4)._first();
_st(inlinedSend)._add_($3);
$ctx1.sendIdx["add:"]=1;
$6=_st(inlinedSend)._add_(inlinedClosure);
_st(self._send())._replaceWith_(inlinedSend);
$7=_st(_st(inlinedSend)._method())._internalVariables();
$ctx1.sendIdx["internalVariables"]=1;
_st($7)._addAll_(_st(inlinedSend)._internalVariables());
return inlinedSend;
}, function($ctx1) {$ctx1.fill(self,"inlinedSend:with:",{inlinedSend:inlinedSend,anIRInstruction:anIRInstruction,inlinedClosure:inlinedClosure},globals.IRSendInliner)})},
args: ["inlinedSend", "anIRInstruction"],
source: "inlinedSend: inlinedSend with: anIRInstruction\x0a\x09| inlinedClosure |\x0a\x0a\x09anIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].\x0a\x09anIRInstruction arguments size = 0 ifFalse: [ self inliningError: 'Inlined block should have zero argument' ].\x0a\x0a\x09inlinedClosure := self translator visit: (self inlineClosure: anIRInstruction).\x0a\x0a\x09inlinedSend\x0a\x09\x09add: self send instructions first;\x0a\x09\x09add: inlinedClosure.\x0a\x0a\x09self send replaceWith: inlinedSend.\x0a\x09inlinedSend method internalVariables \x0a\x09\x09addAll: inlinedSend internalVariables.\x0a\x0a\x09^ inlinedSend",
messageSends: ["ifFalse:", "isClosure", "inliningError:", "=", "size", "arguments", "visit:", "translator", "inlineClosure:", "add:", "first", "instructions", "send", "replaceWith:", "addAll:", "internalVariables", "method"],
referencedClasses: []
}),
globals.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inlinedSend:with:with:",
protocol: 'inlining',
fn: function (inlinedSend,anIRInstruction,anotherIRInstruction){
var self=this;
var inlinedClosure1,inlinedClosure2;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$7,$6,$5,$8,$9;
$1=_st(anIRInstruction)._isClosure();
$ctx1.sendIdx["isClosure"]=1;
if(! smalltalk.assert($1)){
self._inliningError_("Message argument should be a block");
$ctx1.sendIdx["inliningError:"]=1;
};
$2=_st(anotherIRInstruction)._isClosure();
if(! smalltalk.assert($2)){
self._inliningError_("Message argument should be a block");
};
$3=self._translator();
$ctx1.sendIdx["translator"]=1;
$4=self._inlineClosure_(anIRInstruction);
$ctx1.sendIdx["inlineClosure:"]=1;
inlinedClosure1=_st($3)._visit_($4);
$ctx1.sendIdx["visit:"]=1;
inlinedClosure2=_st(self._translator())._visit_(self._inlineClosure_(anotherIRInstruction));
$7=self._send();
$ctx1.sendIdx["send"]=1;
$6=_st($7)._instructions();
$5=_st($6)._first();
_st(inlinedSend)._add_($5);
$ctx1.sendIdx["add:"]=1;
_st(inlinedSend)._add_(inlinedClosure1);
$ctx1.sendIdx["add:"]=2;
$8=_st(inlinedSend)._add_(inlinedClosure2);
_st(self._send())._replaceWith_(inlinedSend);
$9=_st(_st(inlinedSend)._method())._internalVariables();
$ctx1.sendIdx["internalVariables"]=1;
_st($9)._addAll_(_st(inlinedSend)._internalVariables());
return inlinedSend;
}, function($ctx1) {$ctx1.fill(self,"inlinedSend:with:with:",{inlinedSend:inlinedSend,anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction,inlinedClosure1:inlinedClosure1,inlinedClosure2:inlinedClosure2},globals.IRSendInliner)})},
args: ["inlinedSend", "anIRInstruction", "anotherIRInstruction"],
source: "inlinedSend: inlinedSend with: anIRInstruction with: anotherIRInstruction\x0a\x09| inlinedClosure1 inlinedClosure2 |\x0a\x0a\x09anIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].\x0a\x09anotherIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].\x0a\x0a\x09inlinedClosure1 := self translator visit: (self inlineClosure: anIRInstruction).\x0a\x09inlinedClosure2 := self translator visit: (self inlineClosure: anotherIRInstruction).\x0a\x0a\x09inlinedSend\x0a\x09\x09add: self send instructions first;\x0a\x09\x09add: inlinedClosure1;\x0a\x09\x09add: inlinedClosure2.\x0a\x0a\x09self send replaceWith: inlinedSend.\x0a\x09inlinedSend method internalVariables \x0a\x09\x09addAll: inlinedSend internalVariables.\x0a\x09\x09\x0a\x09^ inlinedSend",
messageSends: ["ifFalse:", "isClosure", "inliningError:", "visit:", "translator", "inlineClosure:", "add:", "first", "instructions", "send", "replaceWith:", "addAll:", "internalVariables", "method"],
referencedClasses: []
}),
globals.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inlinedSequence",
protocol: 'factory',
fn: function (){
var self=this;
function $IRInlinedSequence(){return globals.IRInlinedSequence||(typeof IRInlinedSequence=="undefined"?nil:IRInlinedSequence)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($IRInlinedSequence())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlinedSequence",{},globals.IRSendInliner)})},
args: [],
source: "inlinedSequence\x0a\x09^ IRInlinedSequence new",
messageSends: ["new"],
referencedClasses: ["IRInlinedSequence"]
}),
globals.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inliningError:",
protocol: 'error handling',
fn: function (aString){
var self=this;
function $InliningError(){return globals.InliningError||(typeof InliningError=="undefined"?nil:InliningError)}
return smalltalk.withContext(function($ctx1) { 
_st($InliningError())._signal_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"inliningError:",{aString:aString},globals.IRSendInliner)})},
args: ["aString"],
source: "inliningError: aString\x0a\x09InliningError signal: aString",
messageSends: ["signal:"],
referencedClasses: ["InliningError"]
}),
globals.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "send",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@send"];
return $1;
},
args: [],
source: "send\x0a\x09^ send",
messageSends: [],
referencedClasses: []
}),
globals.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "send:",
protocol: 'accessing',
fn: function (anIRSend){
var self=this;
self["@send"]=anIRSend;
return self},
args: ["anIRSend"],
source: "send: anIRSend\x0a\x09send := anIRSend",
messageSends: [],
referencedClasses: []
}),
globals.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "translator",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@translator"];
return $1;
},
args: [],
source: "translator\x0a\x09^ translator",
messageSends: [],
referencedClasses: []
}),
globals.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "translator:",
protocol: 'accessing',
fn: function (anASTTranslator){
var self=this;
self["@translator"]=anASTTranslator;
return self},
args: ["anASTTranslator"],
source: "translator: anASTTranslator\x0a\x09translator := anASTTranslator",
messageSends: [],
referencedClasses: []
}),
globals.IRSendInliner);


smalltalk.addMethod(
smalltalk.method({
selector: "inlinedSelectors",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=["ifTrue:", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:", "ifNil:", "ifNotNil:", "ifNil:ifNotNil:", "ifNotNil:ifNil:"];
return $1;
},
args: [],
source: "inlinedSelectors\x0a\x09^ #('ifTrue:' 'ifFalse:' 'ifTrue:ifFalse:' 'ifFalse:ifTrue:' 'ifNil:' 'ifNotNil:' 'ifNil:ifNotNil:' 'ifNotNil:ifNil:')",
messageSends: [],
referencedClasses: []
}),
globals.IRSendInliner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldInline:",
protocol: 'accessing',
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
$1=_st(self._inlinedSelectors())._includes_(_st(anIRInstruction)._selector());
if(! smalltalk.assert($1)){
return false;
};
_st(_st(_st(anIRInstruction)._instructions())._allButFirst())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$2=_st(each)._isClosure();
if(! smalltalk.assert($2)){
throw $early=[false];
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"shouldInline:",{anIRInstruction:anIRInstruction},globals.IRSendInliner.klass)})},
args: ["anIRInstruction"],
source: "shouldInline: anIRInstruction\x0a\x09(self inlinedSelectors includes: anIRInstruction selector) ifFalse: [ ^ false ].\x0a\x09anIRInstruction instructions allButFirst do: [ :each |\x0a\x09\x09each isClosure ifFalse: [ ^ false ]].\x0a\x09^ true",
messageSends: ["ifFalse:", "includes:", "inlinedSelectors", "selector", "do:", "allButFirst", "instructions", "isClosure"],
referencedClasses: []
}),
globals.IRSendInliner.klass);


smalltalk.addClass('IRAssignmentInliner', globals.IRSendInliner, ['assignment'], 'Compiler-Inlining');
globals.IRAssignmentInliner.comment="I inline message sends together with assignments by moving them around into the inline closure instructions.\x0a\x0a##Example\x0a\x0a\x09foo\x0a\x09\x09| a |\x0a\x09\x09a := true ifTrue: [ 1 ]\x0a\x0aWill produce:\x0a\x0a\x09if(smalltalk.assert(true) {\x0a\x09\x09a = 1;\x0a\x09};";
smalltalk.addMethod(
smalltalk.method({
selector: "assignment",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@assignment"];
return $1;
},
args: [],
source: "assignment\x0a\x09^ assignment",
messageSends: [],
referencedClasses: []
}),
globals.IRAssignmentInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "assignment:",
protocol: 'accessing',
fn: function (aNode){
var self=this;
self["@assignment"]=aNode;
return self},
args: ["aNode"],
source: "assignment: aNode\x0a\x09assignment := aNode",
messageSends: [],
referencedClasses: []
}),
globals.IRAssignmentInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineAssignment:",
protocol: 'inlining',
fn: function (anIRAssignment){
var self=this;
var inlinedAssignment;
function $IRInlinedAssignment(){return globals.IRInlinedAssignment||(typeof IRInlinedAssignment=="undefined"?nil:IRInlinedAssignment)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._assignment_(anIRAssignment);
inlinedAssignment=_st($IRInlinedAssignment())._new();
$1=_st(anIRAssignment)._instructions();
$ctx1.sendIdx["instructions"]=1;
_st($1)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(inlinedAssignment)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
_st(anIRAssignment)._replaceWith_(inlinedAssignment);
self._inlineSend_(_st(_st(inlinedAssignment)._instructions())._last());
$2=inlinedAssignment;
return $2;
}, function($ctx1) {$ctx1.fill(self,"inlineAssignment:",{anIRAssignment:anIRAssignment,inlinedAssignment:inlinedAssignment},globals.IRAssignmentInliner)})},
args: ["anIRAssignment"],
source: "inlineAssignment: anIRAssignment\x0a\x09| inlinedAssignment |\x0a\x09self assignment: anIRAssignment.\x0a\x09inlinedAssignment := IRInlinedAssignment new.\x0a\x09anIRAssignment instructions do: [ :each |\x0a\x09\x09inlinedAssignment add: each ].\x0a\x09anIRAssignment replaceWith: inlinedAssignment.\x0a\x09self inlineSend: inlinedAssignment instructions last.\x0a\x09^ inlinedAssignment",
messageSends: ["assignment:", "new", "do:", "instructions", "add:", "replaceWith:", "inlineSend:", "last"],
referencedClasses: ["IRInlinedAssignment"]
}),
globals.IRAssignmentInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineClosure:",
protocol: 'inlining',
fn: function (anIRClosure){
var self=this;
var inlinedClosure,statements;
function $IRAssignment(){return globals.IRAssignment||(typeof IRAssignment=="undefined"?nil:IRAssignment)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$5,$7,$8,$6,$9;
inlinedClosure=($ctx1.supercall = true, globals.IRAssignmentInliner.superclass.fn.prototype._inlineClosure_.apply(_st(self), [anIRClosure]));
$ctx1.supercall = false;
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
_st($7)._add_(_st(_st(self._assignment())._instructions())._first());
$ctx2.sendIdx["add:"]=1;
_st($7)._add_(_st(_st(statements)._last())._copy());
$8=_st($7)._yourself();
$6=$8;
return _st($5)._replaceWith_($6);
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$9=inlinedClosure;
return $9;
}, function($ctx1) {$ctx1.fill(self,"inlineClosure:",{anIRClosure:anIRClosure,inlinedClosure:inlinedClosure,statements:statements},globals.IRAssignmentInliner)})},
args: ["anIRClosure"],
source: "inlineClosure: anIRClosure\x0a\x09| inlinedClosure statements |\x0a\x0a\x09inlinedClosure := super inlineClosure: anIRClosure.\x0a\x09statements := inlinedClosure instructions last instructions.\x0a\x09\x0a\x09statements ifNotEmpty: [\x0a\x09\x09statements last canBeAssigned ifTrue: [\x0a\x09\x09\x09statements last replaceWith: (IRAssignment new\x0a\x09\x09\x09\x09add: self assignment instructions first;\x0a\x09\x09\x09\x09add: statements last copy;\x0a\x09\x09\x09\x09yourself) ] ].\x0a\x0a\x09^ inlinedClosure",
messageSends: ["inlineClosure:", "instructions", "last", "ifNotEmpty:", "ifTrue:", "canBeAssigned", "replaceWith:", "add:", "new", "first", "assignment", "copy", "yourself"],
referencedClasses: ["IRAssignment"]
}),
globals.IRAssignmentInliner);



smalltalk.addClass('IRReturnInliner', globals.IRSendInliner, [], 'Compiler-Inlining');
globals.IRReturnInliner.comment="I inline message sends with inlined closure together with a return instruction.";
smalltalk.addMethod(
smalltalk.method({
selector: "inlineClosure:",
protocol: 'inlining',
fn: function (anIRClosure){
var self=this;
var closure,statements;
function $IRReturn(){return globals.IRReturn||(typeof IRReturn=="undefined"?nil:IRReturn)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$5,$6,$7;
closure=($ctx1.supercall = true, globals.IRReturnInliner.superclass.fn.prototype._inlineClosure_.apply(_st(self), [anIRClosure]));
$ctx1.supercall = false;
$1=_st(_st(closure)._instructions())._last();
$ctx1.sendIdx["last"]=1;
statements=_st($1)._instructions();
$ctx1.sendIdx["instructions"]=1;
_st(statements)._ifNotEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(statements)._last();
$ctx2.sendIdx["last"]=2;
$2=_st($3)._isReturn();
if(! smalltalk.assert($2)){
$4=_st(statements)._last();
$ctx2.sendIdx["last"]=3;
$5=_st($IRReturn())._new();
_st($5)._add_(_st(_st(statements)._last())._copy());
$6=_st($5)._yourself();
return _st($4)._replaceWith_($6);
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$7=closure;
return $7;
}, function($ctx1) {$ctx1.fill(self,"inlineClosure:",{anIRClosure:anIRClosure,closure:closure,statements:statements},globals.IRReturnInliner)})},
args: ["anIRClosure"],
source: "inlineClosure: anIRClosure\x0a\x09| closure statements |\x0a\x0a\x09closure := super inlineClosure: anIRClosure.\x0a\x09statements := closure instructions last instructions.\x0a\x09\x0a\x09statements ifNotEmpty: [\x0a\x09\x09statements last isReturn\x0a\x09\x09\x09ifFalse: [ statements last replaceWith: (IRReturn new\x0a\x09\x09\x09\x09add: statements last copy;\x0a\x09\x09\x09\x09yourself)] ].\x0a\x0a\x09^ closure",
messageSends: ["inlineClosure:", "instructions", "last", "ifNotEmpty:", "ifFalse:", "isReturn", "replaceWith:", "add:", "new", "copy", "yourself"],
referencedClasses: ["IRReturn"]
}),
globals.IRReturnInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineReturn:",
protocol: 'inlining',
fn: function (anIRReturn){
var self=this;
var return_;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
return_=self._inlinedReturn();
$1=_st(anIRReturn)._instructions();
$ctx1.sendIdx["instructions"]=1;
_st($1)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(return_)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
_st(anIRReturn)._replaceWith_(return_);
self._inlineSend_(_st(_st(return_)._instructions())._last());
$2=return_;
return $2;
}, function($ctx1) {$ctx1.fill(self,"inlineReturn:",{anIRReturn:anIRReturn,return_:return_},globals.IRReturnInliner)})},
args: ["anIRReturn"],
source: "inlineReturn: anIRReturn\x0a\x09| return |\x0a\x09return := self inlinedReturn.\x0a\x09anIRReturn instructions do: [ :each |\x0a\x09\x09return add: each ].\x0a\x09anIRReturn replaceWith: return.\x0a\x09self inlineSend: return instructions last.\x0a\x09^ return",
messageSends: ["inlinedReturn", "do:", "instructions", "add:", "replaceWith:", "inlineSend:", "last"],
referencedClasses: []
}),
globals.IRReturnInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inlinedReturn",
protocol: 'factory',
fn: function (){
var self=this;
function $IRInlinedReturn(){return globals.IRInlinedReturn||(typeof IRInlinedReturn=="undefined"?nil:IRInlinedReturn)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($IRInlinedReturn())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlinedReturn",{},globals.IRReturnInliner)})},
args: [],
source: "inlinedReturn\x0a\x09^ IRInlinedReturn new",
messageSends: ["new"],
referencedClasses: ["IRInlinedReturn"]
}),
globals.IRReturnInliner);



smalltalk.addClass('InliningCodeGenerator', globals.CodeGenerator, [], 'Compiler-Inlining');
globals.InliningCodeGenerator.comment="I am a specialized code generator that uses inlining to produce more optimized JavaScript output";
smalltalk.addMethod(
smalltalk.method({
selector: "compileNode:",
protocol: 'compiling',
fn: function (aNode){
var self=this;
var ir,stream;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
_st(self._semanticAnalyzer())._visit_(aNode);
$ctx1.sendIdx["visit:"]=1;
ir=_st(self._translator())._visit_(aNode);
$ctx1.sendIdx["visit:"]=2;
_st(self._inliner())._visit_(ir);
$ctx1.sendIdx["visit:"]=3;
$2=self._irTranslator();
_st($2)._currentClass_(self._currentClass());
_st($2)._visit_(ir);
$3=_st($2)._contents();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"compileNode:",{aNode:aNode,ir:ir,stream:stream},globals.InliningCodeGenerator)})},
args: ["aNode"],
source: "compileNode: aNode\x0a\x09| ir stream |\x0a\x0a\x09self semanticAnalyzer visit: aNode.\x0a\x09ir := self translator visit: aNode.\x0a\x09self inliner visit: ir.\x0a\x0a\x09^ self irTranslator\x0a\x09\x09currentClass: self currentClass;\x0a\x09\x09visit: ir;\x0a\x09\x09contents",
messageSends: ["visit:", "semanticAnalyzer", "translator", "inliner", "currentClass:", "irTranslator", "currentClass", "contents"],
referencedClasses: []
}),
globals.InliningCodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "inliner",
protocol: 'compiling',
fn: function (){
var self=this;
function $IRInliner(){return globals.IRInliner||(typeof IRInliner=="undefined"?nil:IRInliner)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($IRInliner())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inliner",{},globals.InliningCodeGenerator)})},
args: [],
source: "inliner\x0a\x09^ IRInliner new",
messageSends: ["new"],
referencedClasses: ["IRInliner"]
}),
globals.InliningCodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "irTranslator",
protocol: 'compiling',
fn: function (){
var self=this;
function $IRInliningJSTranslator(){return globals.IRInliningJSTranslator||(typeof IRInliningJSTranslator=="undefined"?nil:IRInliningJSTranslator)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($IRInliningJSTranslator())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"irTranslator",{},globals.InliningCodeGenerator)})},
args: [],
source: "irTranslator\x0a\x09^ IRInliningJSTranslator new",
messageSends: ["new"],
referencedClasses: ["IRInliningJSTranslator"]
}),
globals.InliningCodeGenerator);


});
