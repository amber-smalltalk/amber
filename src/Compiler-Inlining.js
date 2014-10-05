define("amber_core/Compiler-Inlining", ["amber/boot", "amber_core/Compiler-IR", "amber_core/Kernel-Objects", "amber_core/Compiler-Core"], function($boot){
var $vm=$boot.vm,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$vm,_st=$recv,globals=$globals;
$vm.addPackage('Compiler-Inlining');
$vm.packages["Compiler-Inlining"].transport = {"type":"amd","amdNamespace":"amber_core"};

$vm.addClass('IRInlinedAssignment', globals.IRAssignment, [], 'Compiler-Inlining');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.IRInlinedAssignment.comment="I represent an inlined assignment instruction.";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(aVisitor)._visitIRInlinedAssignment_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRInlinedAssignment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRInlinedAssignment: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRInlinedAssignment:"]
}),
globals.IRInlinedAssignment);

$vm.addMethod(
$vm.method({
selector: "isInlined",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInlined\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
globals.IRInlinedAssignment);



$vm.addClass('IRInlinedClosure', globals.IRClosure, [], 'Compiler-Inlining');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.IRInlinedClosure.comment="I represent an inlined closure instruction.";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(aVisitor)._visitIRInlinedClosure_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRInlinedClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedClosure: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRInlinedClosure:"]
}),
globals.IRInlinedClosure);

$vm.addMethod(
$vm.method({
selector: "isInlined",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInlined\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
globals.IRInlinedClosure);



$vm.addClass('IRInlinedReturn', globals.IRReturn, [], 'Compiler-Inlining');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.IRInlinedReturn.comment="I represent an inlined local return instruction.";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(aVisitor)._visitIRInlinedReturn_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRInlinedReturn)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRInlinedReturn: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRInlinedReturn:"]
}),
globals.IRInlinedReturn);

$vm.addMethod(
$vm.method({
selector: "isInlined",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInlined\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
globals.IRInlinedReturn);



$vm.addClass('IRInlinedSend', globals.IRSend, [], 'Compiler-Inlining');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.IRInlinedSend.comment="I am the abstract super class of inlined message send instructions.";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(aVisitor)._visitInlinedSend_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRInlinedSend)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitInlinedSend: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitInlinedSend:"]
}),
globals.IRInlinedSend);

$vm.addMethod(
$vm.method({
selector: "internalVariables",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=[];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "internalVariables\x0a\x09\x22Answer a collection of internal variables required \x0a\x09to perform the inlining\x22\x0a\x09\x0a\x09^ #()",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
globals.IRInlinedSend);

$vm.addMethod(
$vm.method({
selector: "isInlined",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInlined\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
globals.IRInlinedSend);



$vm.addClass('IRInlinedIfFalse', globals.IRInlinedSend, [], 'Compiler-Inlining');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.IRInlinedIfFalse.comment="I represent an inlined `#ifFalse:` message send instruction.";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(aVisitor)._visitIRInlinedIfFalse_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRInlinedIfFalse)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedIfFalse: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRInlinedIfFalse:"]
}),
globals.IRInlinedIfFalse);



$vm.addClass('IRInlinedIfNilIfNotNil', globals.IRInlinedSend, [], 'Compiler-Inlining');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.IRInlinedIfNilIfNotNil.comment="I represent an inlined `#ifNil:ifNotNil:` message send instruction.";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(aVisitor)._visitIRInlinedIfNilIfNotNil_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRInlinedIfNilIfNotNil)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedIfNilIfNotNil: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRInlinedIfNilIfNotNil:"]
}),
globals.IRInlinedIfNilIfNotNil);

$vm.addMethod(
$vm.method({
selector: "internalVariables",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st($Array())._with_(self._receiverInternalVariable());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"internalVariables",{},globals.IRInlinedIfNilIfNotNil)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "internalVariables\x0a\x09^ Array with: self receiverInternalVariable",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["with:", "receiverInternalVariable"]
}),
globals.IRInlinedIfNilIfNotNil);

$vm.addMethod(
$vm.method({
selector: "receiverInternalVariable",
protocol: 'accessing',
fn: function (){
var self=this;
function $IRVariable(){return globals.IRVariable||(typeof IRVariable=="undefined"?nil:IRVariable)}
function $AliasVar(){return globals.AliasVar||(typeof AliasVar=="undefined"?nil:AliasVar)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=_st($IRVariable())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
_st($2)._variable_(_st(_st($AliasVar())._new())._name_(self._receiverInternalVariableName()));
$3=_st($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"receiverInternalVariable",{},globals.IRInlinedIfNilIfNotNil)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "receiverInternalVariable\x0a\x09^ IRVariable new\x0a\x09\x09variable: (AliasVar new name: self receiverInternalVariableName);\x0a\x09\x09yourself.",
referencedClasses: ["IRVariable", "AliasVar"],
//>>excludeEnd("ide");
messageSends: ["variable:", "new", "name:", "receiverInternalVariableName", "yourself"]
}),
globals.IRInlinedIfNilIfNotNil);

$vm.addMethod(
$vm.method({
selector: "receiverInternalVariableName",
protocol: 'accessing',
fn: function (){
var self=this;
return "$receiver";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "receiverInternalVariableName\x0a\x09^ '$receiver'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
globals.IRInlinedIfNilIfNotNil);



$vm.addClass('IRInlinedIfTrue', globals.IRInlinedSend, [], 'Compiler-Inlining');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.IRInlinedIfTrue.comment="I represent an inlined `#ifTrue:` message send instruction.";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(aVisitor)._visitIRInlinedIfTrue_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRInlinedIfTrue)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedIfTrue: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRInlinedIfTrue:"]
}),
globals.IRInlinedIfTrue);



$vm.addClass('IRInlinedIfTrueIfFalse', globals.IRInlinedSend, [], 'Compiler-Inlining');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.IRInlinedIfTrueIfFalse.comment="I represent an inlined `#ifTrue:ifFalse:` message send instruction.";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(aVisitor)._visitIRInlinedIfTrueIfFalse_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRInlinedIfTrueIfFalse)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedIfTrueIfFalse: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRInlinedIfTrueIfFalse:"]
}),
globals.IRInlinedIfTrueIfFalse);



$vm.addClass('IRInlinedSequence', globals.IRBlockSequence, [], 'Compiler-Inlining');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.IRInlinedSequence.comment="I represent a (block) sequence inside an inlined closure instruction (instance of `IRInlinedClosure`).";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(aVisitor)._visitIRInlinedSequence_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},globals.IRInlinedSequence)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedSequence: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRInlinedSequence:"]
}),
globals.IRInlinedSequence);

$vm.addMethod(
$vm.method({
selector: "isInlined",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInlined\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
globals.IRInlinedSequence);



$vm.addClass('IRInliner', globals.IRVisitor, [], 'Compiler-Inlining');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.IRInliner.comment="I visit an IR tree, inlining message sends and block closures.\x0a\x0aMessage selectors that can be inlined are answered by `IRSendInliner >> #inlinedSelectors`";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "assignmentInliner",
protocol: 'factory',
fn: function (){
var self=this;
function $IRAssignmentInliner(){return globals.IRAssignmentInliner||(typeof IRAssignmentInliner=="undefined"?nil:IRAssignmentInliner)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=_st($IRAssignmentInliner())._new();
_st($2)._translator_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assignmentInliner",{},globals.IRInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "assignmentInliner\x0a\x09^ IRAssignmentInliner new\x0a\x09\x09translator: self;\x0a\x09\x09yourself",
referencedClasses: ["IRAssignmentInliner"],
//>>excludeEnd("ide");
messageSends: ["translator:", "new", "yourself"]
}),
globals.IRInliner);

$vm.addMethod(
$vm.method({
selector: "returnInliner",
protocol: 'factory',
fn: function (){
var self=this;
function $IRReturnInliner(){return globals.IRReturnInliner||(typeof IRReturnInliner=="undefined"?nil:IRReturnInliner)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=_st($IRReturnInliner())._new();
_st($2)._translator_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"returnInliner",{},globals.IRInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "returnInliner\x0a\x09^ IRReturnInliner new\x0a\x09\x09translator: self;\x0a\x09\x09yourself",
referencedClasses: ["IRReturnInliner"],
//>>excludeEnd("ide");
messageSends: ["translator:", "new", "yourself"]
}),
globals.IRInliner);

$vm.addMethod(
$vm.method({
selector: "sendInliner",
protocol: 'factory',
fn: function (){
var self=this;
function $IRSendInliner(){return globals.IRSendInliner||(typeof IRSendInliner=="undefined"?nil:IRSendInliner)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=_st($IRSendInliner())._new();
_st($2)._translator_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendInliner",{},globals.IRInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sendInliner\x0a\x09^ IRSendInliner new\x0a\x09\x09translator: self;\x0a\x09\x09yourself",
referencedClasses: ["IRSendInliner"],
//>>excludeEnd("ide");
messageSends: ["translator:", "new", "yourself"]
}),
globals.IRInliner);

$vm.addMethod(
$vm.method({
selector: "shouldInlineAssignment:",
protocol: 'testing',
fn: function (anIRAssignment){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $4,$3,$2,$1;
$1=_st(_st(_st(anIRAssignment)._isInlined())._not())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=_st(anIRAssignment)._instructions();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["instructions"]=1;
//>>excludeEnd("ctx");
$3=_st($4)._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["last"]=1;
//>>excludeEnd("ctx");
$2=_st($3)._isSend();
return _st($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._shouldInlineSend_(_st(_st(anIRAssignment)._instructions())._last());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldInlineAssignment:",{anIRAssignment:anIRAssignment},globals.IRInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRAssignment"],
source: "shouldInlineAssignment: anIRAssignment\x0a\x09^ anIRAssignment isInlined not and: [\x0a\x09\x09anIRAssignment instructions last isSend and: [\x0a\x09\x09\x09self shouldInlineSend: (anIRAssignment instructions last) ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "not", "isInlined", "isSend", "last", "instructions", "shouldInlineSend:"]
}),
globals.IRInliner);

$vm.addMethod(
$vm.method({
selector: "shouldInlineReturn:",
protocol: 'testing',
fn: function (anIRReturn){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $4,$3,$2,$1;
$1=_st(_st(_st(anIRReturn)._isInlined())._not())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=_st(anIRReturn)._instructions();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["instructions"]=1;
//>>excludeEnd("ctx");
$3=_st($4)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["first"]=1;
//>>excludeEnd("ctx");
$2=_st($3)._isSend();
return _st($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._shouldInlineSend_(_st(_st(anIRReturn)._instructions())._first());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldInlineReturn:",{anIRReturn:anIRReturn},globals.IRInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRReturn"],
source: "shouldInlineReturn: anIRReturn\x0a\x09^ anIRReturn isInlined not and: [\x0a\x09\x09anIRReturn instructions first isSend and: [\x0a\x09\x09\x09self shouldInlineSend: (anIRReturn instructions first) ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "not", "isInlined", "isSend", "first", "instructions", "shouldInlineSend:"]
}),
globals.IRInliner);

$vm.addMethod(
$vm.method({
selector: "shouldInlineSend:",
protocol: 'testing',
fn: function (anIRSend){
var self=this;
function $IRSendInliner(){return globals.IRSendInliner||(typeof IRSendInliner=="undefined"?nil:IRSendInliner)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(_st(_st(anIRSend)._isInlined())._not())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st($IRSendInliner())._shouldInline_(anIRSend);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldInlineSend:",{anIRSend:anIRSend},globals.IRInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSend"],
source: "shouldInlineSend: anIRSend\x0a\x09^ anIRSend isInlined not and: [\x0a\x09\x09IRSendInliner shouldInline: anIRSend ]",
referencedClasses: ["IRSendInliner"],
//>>excludeEnd("ide");
messageSends: ["and:", "not", "isInlined", "shouldInline:"]
}),
globals.IRInliner);

$vm.addMethod(
$vm.method({
selector: "transformNonLocalReturn:",
protocol: 'visiting',
fn: function (anIRNonLocalReturn){
var self=this;
var localReturn;
function $IRReturn(){return globals.IRReturn||(typeof IRReturn=="undefined"?nil:IRReturn)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$5,$6,$7,$8,$9;
$2=_st(anIRNonLocalReturn)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=1;
//>>excludeEnd("ctx");
$1=_st($2)._canInlineNonLocalReturns();
if($vm.assert($1)){
$4=_st(anIRNonLocalReturn)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=2;
//>>excludeEnd("ctx");
$3=_st($4)._methodScope();
$5=_st(anIRNonLocalReturn)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=3;
//>>excludeEnd("ctx");
_st($3)._removeNonLocalReturn_($5);
$6=_st($IRReturn())._new();
_st($6)._scope_(_st(anIRNonLocalReturn)._scope());
$7=_st($6)._yourself();
localReturn=$7;
localReturn;
_st(_st(anIRNonLocalReturn)._instructions())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(localReturn)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
_st(anIRNonLocalReturn)._replaceWith_(localReturn);
$8=localReturn;
return $8;
};
$9=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
globals.IRInliner.superclass.fn.prototype._visitIRNonLocalReturn_.apply(_st(self), [anIRNonLocalReturn]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return $9;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"transformNonLocalReturn:",{anIRNonLocalReturn:anIRNonLocalReturn,localReturn:localReturn},globals.IRInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRNonLocalReturn"],
source: "transformNonLocalReturn: anIRNonLocalReturn\x0a\x09\x22Replace a non local return into a local return\x22\x0a\x0a\x09| localReturn |\x0a\x09anIRNonLocalReturn scope canInlineNonLocalReturns ifTrue: [\x0a\x09\x09anIRNonLocalReturn scope methodScope removeNonLocalReturn: anIRNonLocalReturn scope.\x0a\x09\x09localReturn := IRReturn new\x0a\x09\x09\x09scope: anIRNonLocalReturn scope;\x0a\x09\x09\x09yourself.\x0a\x09\x09anIRNonLocalReturn instructions do: [ :each |\x0a\x09\x09\x09localReturn add: each ].\x0a\x09\x09anIRNonLocalReturn replaceWith: localReturn.\x0a\x09\x09^ localReturn ].\x0a\x09^ super visitIRNonLocalReturn: anIRNonLocalReturn",
referencedClasses: ["IRReturn"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "canInlineNonLocalReturns", "scope", "removeNonLocalReturn:", "methodScope", "scope:", "new", "yourself", "do:", "instructions", "add:", "replaceWith:", "visitIRNonLocalReturn:"]
}),
globals.IRInliner);

$vm.addMethod(
$vm.method({
selector: "visitIRAssignment:",
protocol: 'visiting',
fn: function (anIRAssignment){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=self._shouldInlineAssignment_(anIRAssignment);
if($vm.assert($2)){
$1=_st(self._assignmentInliner())._inlineAssignment_(anIRAssignment);
} else {
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
globals.IRInliner.superclass.fn.prototype._visitIRAssignment_.apply(_st(self), [anIRAssignment]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRAssignment:",{anIRAssignment:anIRAssignment},globals.IRInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRAssignment"],
source: "visitIRAssignment: anIRAssignment\x0a\x09^ (self shouldInlineAssignment: anIRAssignment)\x0a\x09\x09ifTrue: [ self assignmentInliner inlineAssignment: anIRAssignment ]\x0a\x09\x09ifFalse: [ super visitIRAssignment: anIRAssignment ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "shouldInlineAssignment:", "inlineAssignment:", "assignmentInliner", "visitIRAssignment:"]
}),
globals.IRInliner);

$vm.addMethod(
$vm.method({
selector: "visitIRNonLocalReturn:",
protocol: 'visiting',
fn: function (anIRNonLocalReturn){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._transformNonLocalReturn_(anIRNonLocalReturn);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRNonLocalReturn:",{anIRNonLocalReturn:anIRNonLocalReturn},globals.IRInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRNonLocalReturn"],
source: "visitIRNonLocalReturn: anIRNonLocalReturn\x0a\x09^ self transformNonLocalReturn: anIRNonLocalReturn",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["transformNonLocalReturn:"]
}),
globals.IRInliner);

$vm.addMethod(
$vm.method({
selector: "visitIRReturn:",
protocol: 'visiting',
fn: function (anIRReturn){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=self._shouldInlineReturn_(anIRReturn);
if($vm.assert($2)){
$1=_st(self._returnInliner())._inlineReturn_(anIRReturn);
} else {
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
globals.IRInliner.superclass.fn.prototype._visitIRReturn_.apply(_st(self), [anIRReturn]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRReturn:",{anIRReturn:anIRReturn},globals.IRInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRReturn"],
source: "visitIRReturn: anIRReturn\x0a\x09^ (self shouldInlineReturn: anIRReturn)\x0a\x09\x09ifTrue: [ self returnInliner inlineReturn: anIRReturn ]\x0a\x09\x09ifFalse: [ super visitIRReturn: anIRReturn ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "shouldInlineReturn:", "inlineReturn:", "returnInliner", "visitIRReturn:"]
}),
globals.IRInliner);

$vm.addMethod(
$vm.method({
selector: "visitIRSend:",
protocol: 'visiting',
fn: function (anIRSend){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=self._shouldInlineSend_(anIRSend);
if($vm.assert($2)){
$1=_st(self._sendInliner())._inlineSend_(anIRSend);
} else {
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
globals.IRInliner.superclass.fn.prototype._visitIRSend_.apply(_st(self), [anIRSend]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRSend:",{anIRSend:anIRSend},globals.IRInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSend"],
source: "visitIRSend: anIRSend\x0a\x09^ (self shouldInlineSend: anIRSend)\x0a\x09\x09ifTrue: [ self sendInliner inlineSend: anIRSend ]\x0a\x09\x09ifFalse: [ super visitIRSend: anIRSend ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "shouldInlineSend:", "inlineSend:", "sendInliner", "visitIRSend:"]
}),
globals.IRInliner);



$vm.addClass('IRInliningJSTranslator', globals.IRJSTranslator, [], 'Compiler-Inlining');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.IRInliningJSTranslator.comment="I am a specialized JavaScript translator able to write inlined IR instructions to JavaScript stream (`JSStream` instance).";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "visitIRInlinedAssignment:",
protocol: 'visiting',
fn: function (anIRInlinedAssignment){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._visit_(_st(_st(anIRInlinedAssignment)._instructions())._last());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedAssignment:",{anIRInlinedAssignment:anIRInlinedAssignment},globals.IRInliningJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInlinedAssignment"],
source: "visitIRInlinedAssignment: anIRInlinedAssignment\x0a\x09self visit: anIRInlinedAssignment instructions last",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visit:", "last", "instructions"]
}),
globals.IRInliningJSTranslator);

$vm.addMethod(
$vm.method({
selector: "visitIRInlinedClosure:",
protocol: 'visiting',
fn: function (anIRInlinedClosure){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(self._stream())._nextPutVars_(_st(_st(anIRInlinedClosure)._tempDeclarations())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(_st(each)._name())._asVariableName();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})));
_st(_st(anIRInlinedClosure)._instructions())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._visit_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedClosure:",{anIRInlinedClosure:anIRInlinedClosure},globals.IRInliningJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInlinedClosure"],
source: "visitIRInlinedClosure: anIRInlinedClosure\x0a\x09self stream nextPutVars: (anIRInlinedClosure tempDeclarations collect: [ :each |\x0a\x09\x09each name asVariableName ]).\x0a\x09anIRInlinedClosure instructions do: [ :each |\x0a\x09\x09self visit: each ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutVars:", "stream", "collect:", "tempDeclarations", "asVariableName", "name", "do:", "instructions", "visit:"]
}),
globals.IRInliningJSTranslator);

$vm.addMethod(
$vm.method({
selector: "visitIRInlinedIfFalse:",
protocol: 'visiting',
fn: function (anIRInlinedIfFalse){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$3;
$1=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["stream"]=1;
//>>excludeEnd("ctx");
_st($1)._nextPutIf_with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["stream"]=2;
//>>excludeEnd("ctx");
_st($2)._nextPutAll_("!$vm.assert(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$4=_st(anIRInlinedIfFalse)._instructions();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["instructions"]=1;
//>>excludeEnd("ctx");
$3=_st($4)._first();
self._visit_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["visit:"]=1;
//>>excludeEnd("ctx");
return _st(self._stream())._nextPutAll_(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._visit_(_st(_st(anIRInlinedIfFalse)._instructions())._last());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedIfFalse:",{anIRInlinedIfFalse:anIRInlinedIfFalse},globals.IRInliningJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInlinedIfFalse"],
source: "visitIRInlinedIfFalse: anIRInlinedIfFalse\x0a\x09self stream nextPutIf: [\x0a\x09\x09self stream nextPutAll: '!$vm.assert('.\x0a\x09\x09self visit: anIRInlinedIfFalse instructions first.\x0a\x09\x09self stream nextPutAll: ')' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfFalse instructions last ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutIf:with:", "stream", "nextPutAll:", "visit:", "first", "instructions", "last"]
}),
globals.IRInliningJSTranslator);

$vm.addMethod(
$vm.method({
selector: "visitIRInlinedIfNilIfNotNil:",
protocol: 'visiting',
fn: function (anIRInlinedIfNilIfNotNil){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4,$7,$6;
$1=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["stream"]=1;
//>>excludeEnd("ctx");
_st($1)._nextPutIfElse_with_with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["stream"]=2;
//>>excludeEnd("ctx");
$3=_st("(".__comma(_st(anIRInlinedIfNilIfNotNil)._receiverInternalVariableName())).__comma(" = ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
_st($2)._nextPutAll_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$5=_st(anIRInlinedIfNilIfNotNil)._instructions();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["instructions"]=1;
//>>excludeEnd("ctx");
$4=_st($5)._first();
self._visit_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["visit:"]=1;
//>>excludeEnd("ctx");
return _st(self._stream())._nextPutAll_(") == null || $receiver.isNil");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$7=_st(anIRInlinedIfNilIfNotNil)._instructions();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["instructions"]=2;
//>>excludeEnd("ctx");
$6=_st($7)._second();
return self._visit_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["visit:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._visit_(_st(_st(anIRInlinedIfNilIfNotNil)._instructions())._third());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedIfNilIfNotNil:",{anIRInlinedIfNilIfNotNil:anIRInlinedIfNilIfNotNil},globals.IRInliningJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInlinedIfNilIfNotNil"],
source: "visitIRInlinedIfNilIfNotNil: anIRInlinedIfNilIfNotNil\x0a\x09self stream\x0a\x09\x09nextPutIfElse: [\x0a\x09\x09\x09self stream nextPutAll: '(', anIRInlinedIfNilIfNotNil receiverInternalVariableName, ' = '.\x0a\x09\x09\x09self visit: anIRInlinedIfNilIfNotNil instructions first.\x0a\x09\x09\x09self stream nextPutAll: ') == null || $receiver.isNil' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfNilIfNotNil instructions second ]\x0a\x09\x09with: [ self visit: anIRInlinedIfNilIfNotNil instructions third ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutIfElse:with:with:", "stream", "nextPutAll:", ",", "receiverInternalVariableName", "visit:", "first", "instructions", "second", "third"]
}),
globals.IRInliningJSTranslator);

$vm.addMethod(
$vm.method({
selector: "visitIRInlinedIfTrue:",
protocol: 'visiting',
fn: function (anIRInlinedIfTrue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$3;
$1=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["stream"]=1;
//>>excludeEnd("ctx");
_st($1)._nextPutIf_with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["stream"]=2;
//>>excludeEnd("ctx");
_st($2)._nextPutAll_("$vm.assert(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$4=_st(anIRInlinedIfTrue)._instructions();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["instructions"]=1;
//>>excludeEnd("ctx");
$3=_st($4)._first();
self._visit_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["visit:"]=1;
//>>excludeEnd("ctx");
return _st(self._stream())._nextPutAll_(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._visit_(_st(_st(anIRInlinedIfTrue)._instructions())._last());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedIfTrue:",{anIRInlinedIfTrue:anIRInlinedIfTrue},globals.IRInliningJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInlinedIfTrue"],
source: "visitIRInlinedIfTrue: anIRInlinedIfTrue\x0a\x09self stream nextPutIf: [\x0a\x09\x09self stream nextPutAll: '$vm.assert('.\x0a\x09\x09self visit: anIRInlinedIfTrue instructions first.\x0a\x09\x09self stream nextPutAll: ')' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfTrue instructions last ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutIf:with:", "stream", "nextPutAll:", "visit:", "first", "instructions", "last"]
}),
globals.IRInliningJSTranslator);

$vm.addMethod(
$vm.method({
selector: "visitIRInlinedIfTrueIfFalse:",
protocol: 'visiting',
fn: function (anIRInlinedIfTrueIfFalse){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$6,$5;
$1=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["stream"]=1;
//>>excludeEnd("ctx");
_st($1)._nextPutIfElse_with_with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["stream"]=2;
//>>excludeEnd("ctx");
_st($2)._nextPutAll_("$vm.assert(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$4=_st(anIRInlinedIfTrueIfFalse)._instructions();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["instructions"]=1;
//>>excludeEnd("ctx");
$3=_st($4)._first();
self._visit_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["visit:"]=1;
//>>excludeEnd("ctx");
return _st(self._stream())._nextPutAll_(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=_st(anIRInlinedIfTrueIfFalse)._instructions();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["instructions"]=2;
//>>excludeEnd("ctx");
$5=_st($6)._second();
return self._visit_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["visit:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._visit_(_st(_st(anIRInlinedIfTrueIfFalse)._instructions())._third());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedIfTrueIfFalse:",{anIRInlinedIfTrueIfFalse:anIRInlinedIfTrueIfFalse},globals.IRInliningJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInlinedIfTrueIfFalse"],
source: "visitIRInlinedIfTrueIfFalse: anIRInlinedIfTrueIfFalse\x0a\x09self stream\x0a\x09\x09nextPutIfElse: [\x0a\x09\x09\x09self stream nextPutAll: '$vm.assert('.\x0a\x09\x09\x09self visit: anIRInlinedIfTrueIfFalse instructions first.\x0a\x09\x09\x09self stream nextPutAll: ')' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfTrueIfFalse instructions second ]\x0a\x09\x09with: [ self visit: anIRInlinedIfTrueIfFalse instructions third ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutIfElse:with:with:", "stream", "nextPutAll:", "visit:", "first", "instructions", "second", "third"]
}),
globals.IRInliningJSTranslator);

$vm.addMethod(
$vm.method({
selector: "visitIRInlinedNonLocalReturn:",
protocol: 'visiting',
fn: function (anIRInlinedReturn){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["stream"]=1;
//>>excludeEnd("ctx");
_st($1)._nextPutStatementWith_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._visit_(_st(_st(anIRInlinedReturn)._instructions())._last());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
_st(self._stream())._nextPutNonLocalReturnWith_((function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedNonLocalReturn:",{anIRInlinedReturn:anIRInlinedReturn},globals.IRInliningJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInlinedReturn"],
source: "visitIRInlinedNonLocalReturn: anIRInlinedReturn\x0a\x09self stream nextPutStatementWith: [\x0a\x09\x09self visit: anIRInlinedReturn instructions last ].\x0a\x09self stream nextPutNonLocalReturnWith: [ ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutStatementWith:", "stream", "visit:", "last", "instructions", "nextPutNonLocalReturnWith:"]
}),
globals.IRInliningJSTranslator);

$vm.addMethod(
$vm.method({
selector: "visitIRInlinedReturn:",
protocol: 'visiting',
fn: function (anIRInlinedReturn){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._visit_(_st(_st(anIRInlinedReturn)._instructions())._last());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedReturn:",{anIRInlinedReturn:anIRInlinedReturn},globals.IRInliningJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInlinedReturn"],
source: "visitIRInlinedReturn: anIRInlinedReturn\x0a\x09self visit: anIRInlinedReturn instructions last",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visit:", "last", "instructions"]
}),
globals.IRInliningJSTranslator);

$vm.addMethod(
$vm.method({
selector: "visitIRInlinedSequence:",
protocol: 'visiting',
fn: function (anIRInlinedSequence){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(_st(anIRInlinedSequence)._instructions())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(self._stream())._nextPutStatementWith_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._visit_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedSequence:",{anIRInlinedSequence:anIRInlinedSequence},globals.IRInliningJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInlinedSequence"],
source: "visitIRInlinedSequence: anIRInlinedSequence\x0a\x09anIRInlinedSequence instructions do: [ :each |\x0a\x09\x09self stream nextPutStatementWith: [ self visit: each ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "instructions", "nextPutStatementWith:", "stream", "visit:"]
}),
globals.IRInliningJSTranslator);



$vm.addClass('IRSendInliner', globals.Object, ['send', 'translator'], 'Compiler-Inlining');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.IRSendInliner.comment="I inline some message sends and block closure arguments. I heavily rely on #perform: to dispatch inlining methods.";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "ifFalse:",
protocol: 'inlining',
fn: function (anIRInstruction){
var self=this;
function $IRInlinedIfFalse(){return globals.IRInlinedIfFalse||(typeof IRInlinedIfFalse=="undefined"?nil:IRInlinedIfFalse)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._inlinedSend_with_(_st($IRInlinedIfFalse())._new(),anIRInstruction);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifFalse:",{anIRInstruction:anIRInstruction},globals.IRSendInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "ifFalse: anIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfFalse new with: anIRInstruction",
referencedClasses: ["IRInlinedIfFalse"],
//>>excludeEnd("ide");
messageSends: ["inlinedSend:with:", "new"]
}),
globals.IRSendInliner);

$vm.addMethod(
$vm.method({
selector: "ifFalse:ifTrue:",
protocol: 'inlining',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._perform_withArguments_("ifTrue:ifFalse:",[anotherIRInstruction,anIRInstruction]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifFalse:ifTrue:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},globals.IRSendInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifFalse: anIRInstruction ifTrue: anotherIRInstruction\x0a\x09^ self perform: #ifTrue:ifFalse: withArguments: { anotherIRInstruction. anIRInstruction }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["perform:withArguments:"]
}),
globals.IRSendInliner);

$vm.addMethod(
$vm.method({
selector: "ifNil:",
protocol: 'inlining',
fn: function (anIRInstruction){
var self=this;
function $IRInlinedIfNilIfNotNil(){return globals.IRInlinedIfNilIfNotNil||(typeof IRInlinedIfNilIfNotNil=="undefined"?nil:IRInlinedIfNilIfNotNil)}
function $IRClosure(){return globals.IRClosure||(typeof IRClosure=="undefined"?nil:IRClosure)}
function $IRBlockSequence(){return globals.IRBlockSequence||(typeof IRBlockSequence=="undefined"?nil:IRBlockSequence)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$4,$5,$7,$8,$6,$9,$3,$1;
$2=_st($IRInlinedIfNilIfNotNil())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$4=_st($IRClosure())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
_st($4)._scope_(_st(_st(anIRInstruction)._scope())._copy());
$5=$4;
$7=_st($IRBlockSequence())._new();
_st($7)._add_(_st(_st(self._send())._instructions())._first());
$8=_st($7)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$6=$8;
_st($5)._add_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$9=_st($4)._yourself();
$3=$9;
$1=self._inlinedSend_with_with_($2,anIRInstruction,$3);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifNil:",{anIRInstruction:anIRInstruction},globals.IRSendInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "ifNil: anIRInstruction\x0a\x09^ self\x0a\x09\x09inlinedSend: IRInlinedIfNilIfNotNil new\x0a\x09\x09with: anIRInstruction\x0a\x09\x09with: (IRClosure new\x0a\x09\x09\x09scope: anIRInstruction scope copy;\x0a\x09\x09\x09add: (IRBlockSequence new\x0a\x09\x09\x09\x09add: self send instructions first;\x0a\x09\x09\x09\x09yourself);\x0a\x09\x09\x09yourself)",
referencedClasses: ["IRInlinedIfNilIfNotNil", "IRClosure", "IRBlockSequence"],
//>>excludeEnd("ide");
messageSends: ["inlinedSend:with:with:", "new", "scope:", "copy", "scope", "add:", "first", "instructions", "send", "yourself"]
}),
globals.IRSendInliner);

$vm.addMethod(
$vm.method({
selector: "ifNil:ifNotNil:",
protocol: 'inlining',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
function $IRInlinedIfNilIfNotNil(){return globals.IRInlinedIfNilIfNotNil||(typeof IRInlinedIfNilIfNotNil=="undefined"?nil:IRInlinedIfNilIfNotNil)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._inlinedSend_with_with_(_st($IRInlinedIfNilIfNotNil())._new(),anIRInstruction,anotherIRInstruction);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifNil:ifNotNil:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},globals.IRSendInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifNil: anIRInstruction ifNotNil: anotherIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfNilIfNotNil new with: anIRInstruction with: anotherIRInstruction",
referencedClasses: ["IRInlinedIfNilIfNotNil"],
//>>excludeEnd("ide");
messageSends: ["inlinedSend:with:with:", "new"]
}),
globals.IRSendInliner);

$vm.addMethod(
$vm.method({
selector: "ifNotNil:",
protocol: 'inlining',
fn: function (anIRInstruction){
var self=this;
function $IRInlinedIfNilIfNotNil(){return globals.IRInlinedIfNilIfNotNil||(typeof IRInlinedIfNilIfNotNil=="undefined"?nil:IRInlinedIfNilIfNotNil)}
function $IRClosure(){return globals.IRClosure||(typeof IRClosure=="undefined"?nil:IRClosure)}
function $IRBlockSequence(){return globals.IRBlockSequence||(typeof IRBlockSequence=="undefined"?nil:IRBlockSequence)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$4,$5,$7,$8,$6,$9,$3,$1;
$2=_st($IRInlinedIfNilIfNotNil())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$4=_st($IRClosure())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
_st($4)._scope_(_st(_st(anIRInstruction)._scope())._copy());
$5=$4;
$7=_st($IRBlockSequence())._new();
_st($7)._add_(_st(_st(self._send())._instructions())._first());
$8=_st($7)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$6=$8;
_st($5)._add_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$9=_st($4)._yourself();
$3=$9;
$1=self._inlinedSend_with_with_($2,$3,anIRInstruction);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:",{anIRInstruction:anIRInstruction},globals.IRSendInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "ifNotNil: anIRInstruction\x0a\x09^ self\x0a\x09\x09inlinedSend: IRInlinedIfNilIfNotNil new\x0a\x09\x09with: (IRClosure new\x0a\x09\x09\x09scope: anIRInstruction scope copy;\x0a\x09\x09\x09add: (IRBlockSequence new\x0a\x09\x09\x09\x09add: self send instructions first;\x0a\x09\x09\x09\x09yourself);\x0a\x09\x09\x09yourself)\x0a\x09\x09with: anIRInstruction",
referencedClasses: ["IRInlinedIfNilIfNotNil", "IRClosure", "IRBlockSequence"],
//>>excludeEnd("ide");
messageSends: ["inlinedSend:with:with:", "new", "scope:", "copy", "scope", "add:", "first", "instructions", "send", "yourself"]
}),
globals.IRSendInliner);

$vm.addMethod(
$vm.method({
selector: "ifNotNil:ifNil:",
protocol: 'inlining',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
function $IRInlinedIfNilIfNotNil(){return globals.IRInlinedIfNilIfNotNil||(typeof IRInlinedIfNilIfNotNil=="undefined"?nil:IRInlinedIfNilIfNotNil)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._inlinedSend_with_with_(_st($IRInlinedIfNilIfNotNil())._new(),anotherIRInstruction,anIRInstruction);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:ifNil:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},globals.IRSendInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifNotNil: anIRInstruction ifNil: anotherIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfNilIfNotNil new with: anotherIRInstruction with: anIRInstruction",
referencedClasses: ["IRInlinedIfNilIfNotNil"],
//>>excludeEnd("ide");
messageSends: ["inlinedSend:with:with:", "new"]
}),
globals.IRSendInliner);

$vm.addMethod(
$vm.method({
selector: "ifTrue:",
protocol: 'inlining',
fn: function (anIRInstruction){
var self=this;
function $IRInlinedIfTrue(){return globals.IRInlinedIfTrue||(typeof IRInlinedIfTrue=="undefined"?nil:IRInlinedIfTrue)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._inlinedSend_with_(_st($IRInlinedIfTrue())._new(),anIRInstruction);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifTrue:",{anIRInstruction:anIRInstruction},globals.IRSendInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "ifTrue: anIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfTrue new with: anIRInstruction",
referencedClasses: ["IRInlinedIfTrue"],
//>>excludeEnd("ide");
messageSends: ["inlinedSend:with:", "new"]
}),
globals.IRSendInliner);

$vm.addMethod(
$vm.method({
selector: "ifTrue:ifFalse:",
protocol: 'inlining',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
function $IRInlinedIfTrueIfFalse(){return globals.IRInlinedIfTrueIfFalse||(typeof IRInlinedIfTrueIfFalse=="undefined"?nil:IRInlinedIfTrueIfFalse)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._inlinedSend_with_with_(_st($IRInlinedIfTrueIfFalse())._new(),anIRInstruction,anotherIRInstruction);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifTrue:ifFalse:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},globals.IRSendInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifTrue: anIRInstruction ifFalse: anotherIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfTrueIfFalse new with: anIRInstruction with: anotherIRInstruction",
referencedClasses: ["IRInlinedIfTrueIfFalse"],
//>>excludeEnd("ide");
messageSends: ["inlinedSend:with:with:", "new"]
}),
globals.IRSendInliner);

$vm.addMethod(
$vm.method({
selector: "inlineClosure:",
protocol: 'inlining',
fn: function (anIRClosure){
var self=this;
var inlinedClosure,sequence,statements;
function $IRTempDeclaration(){return globals.IRTempDeclaration||(typeof IRTempDeclaration=="undefined"?nil:IRTempDeclaration)}
function $IRAssignment(){return globals.IRAssignment||(typeof IRAssignment=="undefined"?nil:IRAssignment)}
function $IRVariable(){return globals.IRVariable||(typeof IRVariable=="undefined"?nil:IRVariable)}
function $AliasVar(){return globals.AliasVar||(typeof AliasVar=="undefined"?nil:AliasVar)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$7,$8,$6,$9,$11,$12,$14,$16,$17,$18,$19,$15,$13,$20,$22,$24,$25,$23,$21,$26,$10,$28,$27,$31,$30,$32,$29,$33,$36,$35,$34,$37;
inlinedClosure=self._inlinedClosure();
$1=inlinedClosure;
$2=$1;
$3=_st(anIRClosure)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=1;
//>>excludeEnd("ctx");
_st($2)._scope_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope:"]=1;
//>>excludeEnd("ctx");
$4=_st($1)._parent_(_st(anIRClosure)._parent());
_st(_st(anIRClosure)._tempDeclarations())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(inlinedClosure)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
sequence=self._inlinedSequence();
_st(_st(anIRClosure)._arguments())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=inlinedClosure;
$7=_st($IRTempDeclaration())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=1;
//>>excludeEnd("ctx");
_st($7)._name_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["name:"]=1;
//>>excludeEnd("ctx");
$8=_st($7)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$6=$8;
_st($5)._add_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
$9=sequence;
$11=_st($IRAssignment())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$12=$11;
$14=_st($IRVariable())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$16=_st($AliasVar())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=4;
//>>excludeEnd("ctx");
$17=$16;
$18=_st(inlinedClosure)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["scope"]=2;
//>>excludeEnd("ctx");
_st($17)._scope_($18);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["scope:"]=2;
//>>excludeEnd("ctx");
_st($16)._name_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["name:"]=2;
//>>excludeEnd("ctx");
$19=_st($16)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["yourself"]=2;
//>>excludeEnd("ctx");
$15=$19;
$13=_st($14)._variable_($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["variable:"]=1;
//>>excludeEnd("ctx");
_st($12)._add_($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=4;
//>>excludeEnd("ctx");
$20=$11;
$22=_st($IRVariable())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=5;
//>>excludeEnd("ctx");
$24=_st($AliasVar())._new();
_st($24)._scope_(_st(inlinedClosure)._scope());
_st($24)._name_("$receiver");
$25=_st($24)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["yourself"]=3;
//>>excludeEnd("ctx");
$23=$25;
$21=_st($22)._variable_($23);
_st($20)._add_($21);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=5;
//>>excludeEnd("ctx");
$26=_st($11)._yourself();
$10=$26;
return _st($9)._add_($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=2;
//>>excludeEnd("ctx");
_st(inlinedClosure)._add_(sequence);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=6;
//>>excludeEnd("ctx");
$28=_st(anIRClosure)._instructions();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["instructions"]=2;
//>>excludeEnd("ctx");
$27=_st($28)._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["last"]=1;
//>>excludeEnd("ctx");
statements=_st($27)._instructions();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["instructions"]=1;
//>>excludeEnd("ctx");
_st(statements)._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
_st(_st(statements)._allButLast())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return _st(sequence)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["add:"]=7;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,4)});
//>>excludeEnd("ctx");
}));
$31=_st(statements)._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["last"]=2;
//>>excludeEnd("ctx");
$30=_st($31)._isReturn();
$29=_st($30)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$32=_st(statements)._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["last"]=3;
//>>excludeEnd("ctx");
return _st($32)._isBlockReturn();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)});
//>>excludeEnd("ctx");
}));
if($vm.assert($29)){
$33=sequence;
$36=_st(statements)._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["last"]=4;
//>>excludeEnd("ctx");
$35=_st($36)._instructions();
$34=_st($35)._first();
return _st($33)._add_($34);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=8;
//>>excludeEnd("ctx");
} else {
return _st(sequence)._add_(_st(statements)._last());
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$37=inlinedClosure;
return $37;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlineClosure:",{anIRClosure:anIRClosure,inlinedClosure:inlinedClosure,sequence:sequence,statements:statements},globals.IRSendInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRClosure"],
source: "inlineClosure: anIRClosure\x0a\x09| inlinedClosure sequence statements |\x0a\x0a\x09inlinedClosure := self inlinedClosure.\x0a\x09inlinedClosure \x0a\x09\x09scope: anIRClosure scope;\x0a\x09\x09parent: anIRClosure parent.\x0a\x0a\x09\x22Add the possible temp declarations\x22\x0a\x09anIRClosure tempDeclarations do: [ :each |\x0a\x09\x09\x09inlinedClosure add: each ].\x0a\x0a\x09\x22Add a block sequence\x22\x0a\x09sequence := self inlinedSequence.\x0a\x0a\x09\x22Map the closure arguments to the receiver of the message send\x22\x0a\x09anIRClosure arguments do: [ :each |\x0a\x09\x09inlinedClosure add: (IRTempDeclaration new name: each; yourself).\x0a\x09\x09sequence add: (IRAssignment new\x0a\x09\x09\x09add: (IRVariable new variable: (AliasVar new scope: inlinedClosure scope; name: each; yourself));\x0a\x09\x09\x09add: (IRVariable new variable: (AliasVar new scope: inlinedClosure scope; name: '$receiver'; yourself));\x0a\x09\x09\x09yourself) ].\x0a\x09\x09\x09\x0a\x09\x22To ensure the correct order of the closure instructions: first the temps then the sequence\x22\x0a\x09inlinedClosure add: sequence.\x0a\x0a\x09\x22Get all the statements\x22\x0a\x09statements := anIRClosure instructions last instructions.\x0a\x09\x0a\x09statements ifNotEmpty: [\x0a\x09\x09statements allButLast do: [ :each | sequence add: each ].\x0a\x0a\x09\x09\x22Inlined closures don't have implicit local returns\x22\x0a\x09\x09(statements last isReturn and: [ statements last isBlockReturn ])\x0a\x09\x09\x09ifTrue: [ sequence add: statements last instructions first ]\x0a\x09\x09\x09ifFalse: [ sequence add: statements last ] ].\x0a\x0a\x09^ inlinedClosure",
referencedClasses: ["IRTempDeclaration", "IRAssignment", "IRVariable", "AliasVar"],
//>>excludeEnd("ide");
messageSends: ["inlinedClosure", "scope:", "scope", "parent:", "parent", "do:", "tempDeclarations", "add:", "inlinedSequence", "arguments", "name:", "new", "yourself", "variable:", "instructions", "last", "ifNotEmpty:", "allButLast", "ifTrue:ifFalse:", "and:", "isReturn", "isBlockReturn", "first"]
}),
globals.IRSendInliner);

$vm.addMethod(
$vm.method({
selector: "inlineSend:",
protocol: 'inlining',
fn: function (anIRSend){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1;
self._send_(anIRSend);
$3=self._send();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["send"]=1;
//>>excludeEnd("ctx");
$2=_st($3)._selector();
$1=self._perform_withArguments_($2,_st(_st(self._send())._instructions())._allButFirst());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlineSend:",{anIRSend:anIRSend},globals.IRSendInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSend"],
source: "inlineSend: anIRSend\x0a\x09self send: anIRSend.\x0a\x09^ self\x0a\x09\x09perform: self send selector\x0a\x09\x09withArguments: self send instructions allButFirst",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["send:", "perform:withArguments:", "selector", "send", "allButFirst", "instructions"]
}),
globals.IRSendInliner);

$vm.addMethod(
$vm.method({
selector: "inlinedClosure",
protocol: 'factory',
fn: function (){
var self=this;
function $IRInlinedClosure(){return globals.IRInlinedClosure||(typeof IRInlinedClosure=="undefined"?nil:IRInlinedClosure)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st($IRInlinedClosure())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlinedClosure",{},globals.IRSendInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inlinedClosure\x0a\x09^ IRInlinedClosure new",
referencedClasses: ["IRInlinedClosure"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
globals.IRSendInliner);

$vm.addMethod(
$vm.method({
selector: "inlinedSend:with:",
protocol: 'inlining',
fn: function (inlinedSend,anIRInstruction){
var self=this;
var inlinedClosure;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$5,$4,$3,$6,$7;
$1=_st(anIRInstruction)._isClosure();
if(!$vm.assert($1)){
self._inliningError_("Message argument should be a block");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["inliningError:"]=1;
//>>excludeEnd("ctx");
};
$2=_st(_st(_st(anIRInstruction)._arguments())._size()).__eq((0));
if(!$vm.assert($2)){
self._inliningError_("Inlined block should have zero argument");
};
inlinedClosure=_st(self._translator())._visit_(self._inlineClosure_(anIRInstruction));
$5=self._send();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["send"]=1;
//>>excludeEnd("ctx");
$4=_st($5)._instructions();
$3=_st($4)._first();
_st(inlinedSend)._add_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$6=_st(inlinedSend)._add_(inlinedClosure);
_st(self._send())._replaceWith_(inlinedSend);
$7=_st(_st(inlinedSend)._method())._internalVariables();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["internalVariables"]=1;
//>>excludeEnd("ctx");
_st($7)._addAll_(_st(inlinedSend)._internalVariables());
return inlinedSend;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlinedSend:with:",{inlinedSend:inlinedSend,anIRInstruction:anIRInstruction,inlinedClosure:inlinedClosure},globals.IRSendInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["inlinedSend", "anIRInstruction"],
source: "inlinedSend: inlinedSend with: anIRInstruction\x0a\x09| inlinedClosure |\x0a\x0a\x09anIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].\x0a\x09anIRInstruction arguments size = 0 ifFalse: [ self inliningError: 'Inlined block should have zero argument' ].\x0a\x0a\x09inlinedClosure := self translator visit: (self inlineClosure: anIRInstruction).\x0a\x0a\x09inlinedSend\x0a\x09\x09add: self send instructions first;\x0a\x09\x09add: inlinedClosure.\x0a\x0a\x09self send replaceWith: inlinedSend.\x0a\x09inlinedSend method internalVariables \x0a\x09\x09addAll: inlinedSend internalVariables.\x0a\x0a\x09^ inlinedSend",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "isClosure", "inliningError:", "=", "size", "arguments", "visit:", "translator", "inlineClosure:", "add:", "first", "instructions", "send", "replaceWith:", "addAll:", "internalVariables", "method"]
}),
globals.IRSendInliner);

$vm.addMethod(
$vm.method({
selector: "inlinedSend:with:with:",
protocol: 'inlining',
fn: function (inlinedSend,anIRInstruction,anotherIRInstruction){
var self=this;
var inlinedClosure1,inlinedClosure2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$7,$6,$5,$8,$9;
$1=_st(anIRInstruction)._isClosure();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isClosure"]=1;
//>>excludeEnd("ctx");
if(!$vm.assert($1)){
self._inliningError_("Message argument should be a block");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["inliningError:"]=1;
//>>excludeEnd("ctx");
};
$2=_st(anotherIRInstruction)._isClosure();
if(!$vm.assert($2)){
self._inliningError_("Message argument should be a block");
};
$3=self._translator();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["translator"]=1;
//>>excludeEnd("ctx");
$4=self._inlineClosure_(anIRInstruction);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["inlineClosure:"]=1;
//>>excludeEnd("ctx");
inlinedClosure1=_st($3)._visit_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["visit:"]=1;
//>>excludeEnd("ctx");
inlinedClosure2=_st(self._translator())._visit_(self._inlineClosure_(anotherIRInstruction));
$7=self._send();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["send"]=1;
//>>excludeEnd("ctx");
$6=_st($7)._instructions();
$5=_st($6)._first();
_st(inlinedSend)._add_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
_st(inlinedSend)._add_(inlinedClosure1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
$8=_st(inlinedSend)._add_(inlinedClosure2);
_st(self._send())._replaceWith_(inlinedSend);
$9=_st(_st(inlinedSend)._method())._internalVariables();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["internalVariables"]=1;
//>>excludeEnd("ctx");
_st($9)._addAll_(_st(inlinedSend)._internalVariables());
return inlinedSend;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlinedSend:with:with:",{inlinedSend:inlinedSend,anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction,inlinedClosure1:inlinedClosure1,inlinedClosure2:inlinedClosure2},globals.IRSendInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["inlinedSend", "anIRInstruction", "anotherIRInstruction"],
source: "inlinedSend: inlinedSend with: anIRInstruction with: anotherIRInstruction\x0a\x09| inlinedClosure1 inlinedClosure2 |\x0a\x0a\x09anIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].\x0a\x09anotherIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].\x0a\x0a\x09inlinedClosure1 := self translator visit: (self inlineClosure: anIRInstruction).\x0a\x09inlinedClosure2 := self translator visit: (self inlineClosure: anotherIRInstruction).\x0a\x0a\x09inlinedSend\x0a\x09\x09add: self send instructions first;\x0a\x09\x09add: inlinedClosure1;\x0a\x09\x09add: inlinedClosure2.\x0a\x0a\x09self send replaceWith: inlinedSend.\x0a\x09inlinedSend method internalVariables \x0a\x09\x09addAll: inlinedSend internalVariables.\x0a\x09\x09\x0a\x09^ inlinedSend",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "isClosure", "inliningError:", "visit:", "translator", "inlineClosure:", "add:", "first", "instructions", "send", "replaceWith:", "addAll:", "internalVariables", "method"]
}),
globals.IRSendInliner);

$vm.addMethod(
$vm.method({
selector: "inlinedSequence",
protocol: 'factory',
fn: function (){
var self=this;
function $IRInlinedSequence(){return globals.IRInlinedSequence||(typeof IRInlinedSequence=="undefined"?nil:IRInlinedSequence)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st($IRInlinedSequence())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlinedSequence",{},globals.IRSendInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inlinedSequence\x0a\x09^ IRInlinedSequence new",
referencedClasses: ["IRInlinedSequence"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
globals.IRSendInliner);

$vm.addMethod(
$vm.method({
selector: "inliningError:",
protocol: 'error handling',
fn: function (aString){
var self=this;
function $InliningError(){return globals.InliningError||(typeof InliningError=="undefined"?nil:InliningError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st($InliningError())._signal_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inliningError:",{aString:aString},globals.IRSendInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "inliningError: aString\x0a\x09InliningError signal: aString",
referencedClasses: ["InliningError"],
//>>excludeEnd("ide");
messageSends: ["signal:"]
}),
globals.IRSendInliner);

$vm.addMethod(
$vm.method({
selector: "send",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@send"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "send\x0a\x09^ send",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
globals.IRSendInliner);

$vm.addMethod(
$vm.method({
selector: "send:",
protocol: 'accessing',
fn: function (anIRSend){
var self=this;
self["@send"]=anIRSend;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSend"],
source: "send: anIRSend\x0a\x09send := anIRSend",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
globals.IRSendInliner);

$vm.addMethod(
$vm.method({
selector: "translator",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@translator"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "translator\x0a\x09^ translator",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
globals.IRSendInliner);

$vm.addMethod(
$vm.method({
selector: "translator:",
protocol: 'accessing',
fn: function (anASTTranslator){
var self=this;
self["@translator"]=anASTTranslator;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anASTTranslator"],
source: "translator: anASTTranslator\x0a\x09translator := anASTTranslator",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
globals.IRSendInliner);


$vm.addMethod(
$vm.method({
selector: "inlinedSelectors",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=["ifTrue:", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:", "ifNil:", "ifNotNil:", "ifNil:ifNotNil:", "ifNotNil:ifNil:"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inlinedSelectors\x0a\x09^ #('ifTrue:' 'ifFalse:' 'ifTrue:ifFalse:' 'ifFalse:ifTrue:' 'ifNil:' 'ifNotNil:' 'ifNil:ifNotNil:' 'ifNotNil:ifNil:')",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
globals.IRSendInliner.klass);

$vm.addMethod(
$vm.method({
selector: "shouldInline:",
protocol: 'accessing',
fn: function (anIRInstruction){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
var $early={};
try {
$1=_st(self._inlinedSelectors())._includes_(_st(anIRInstruction)._selector());
if(!$vm.assert($1)){
return false;
};
_st(_st(_st(anIRInstruction)._instructions())._allButFirst())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=_st(each)._isClosure();
if(!$vm.assert($2)){
throw $early=[false];
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldInline:",{anIRInstruction:anIRInstruction},globals.IRSendInliner.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "shouldInline: anIRInstruction\x0a\x09(self inlinedSelectors includes: anIRInstruction selector) ifFalse: [ ^ false ].\x0a\x09anIRInstruction instructions allButFirst do: [ :each |\x0a\x09\x09each isClosure ifFalse: [ ^ false ]].\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "includes:", "inlinedSelectors", "selector", "do:", "allButFirst", "instructions", "isClosure"]
}),
globals.IRSendInliner.klass);


$vm.addClass('IRAssignmentInliner', globals.IRSendInliner, ['assignment'], 'Compiler-Inlining');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.IRAssignmentInliner.comment="I inline message sends together with assignments by moving them around into the inline closure instructions.\x0a\x0a##Example\x0a\x0a\x09foo\x0a\x09\x09| a |\x0a\x09\x09a := true ifTrue: [ 1 ]\x0a\x0aWill produce:\x0a\x0a\x09if($vm.assert(true) {\x0a\x09\x09a = 1;\x0a\x09};";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "assignment",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@assignment"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "assignment\x0a\x09^ assignment",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
globals.IRAssignmentInliner);

$vm.addMethod(
$vm.method({
selector: "assignment:",
protocol: 'accessing',
fn: function (aNode){
var self=this;
self["@assignment"]=aNode;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "assignment: aNode\x0a\x09assignment := aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
globals.IRAssignmentInliner);

$vm.addMethod(
$vm.method({
selector: "inlineAssignment:",
protocol: 'inlining',
fn: function (anIRAssignment){
var self=this;
var inlinedAssignment;
function $IRInlinedAssignment(){return globals.IRInlinedAssignment||(typeof IRInlinedAssignment=="undefined"?nil:IRInlinedAssignment)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
self._assignment_(anIRAssignment);
inlinedAssignment=_st($IRInlinedAssignment())._new();
$1=_st(anIRAssignment)._instructions();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["instructions"]=1;
//>>excludeEnd("ctx");
_st($1)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(inlinedAssignment)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
_st(anIRAssignment)._replaceWith_(inlinedAssignment);
self._inlineSend_(_st(_st(inlinedAssignment)._instructions())._last());
$2=inlinedAssignment;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlineAssignment:",{anIRAssignment:anIRAssignment,inlinedAssignment:inlinedAssignment},globals.IRAssignmentInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRAssignment"],
source: "inlineAssignment: anIRAssignment\x0a\x09| inlinedAssignment |\x0a\x09self assignment: anIRAssignment.\x0a\x09inlinedAssignment := IRInlinedAssignment new.\x0a\x09anIRAssignment instructions do: [ :each |\x0a\x09\x09inlinedAssignment add: each ].\x0a\x09anIRAssignment replaceWith: inlinedAssignment.\x0a\x09self inlineSend: inlinedAssignment instructions last.\x0a\x09^ inlinedAssignment",
referencedClasses: ["IRInlinedAssignment"],
//>>excludeEnd("ide");
messageSends: ["assignment:", "new", "do:", "instructions", "add:", "replaceWith:", "inlineSend:", "last"]
}),
globals.IRAssignmentInliner);

$vm.addMethod(
$vm.method({
selector: "inlineClosure:",
protocol: 'inlining',
fn: function (anIRClosure){
var self=this;
var inlinedClosure,statements;
function $IRAssignment(){return globals.IRAssignment||(typeof IRAssignment=="undefined"?nil:IRAssignment)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$5,$7,$8,$6,$9;
inlinedClosure=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
globals.IRAssignmentInliner.superclass.fn.prototype._inlineClosure_.apply(_st(self), [anIRClosure]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$2=_st(inlinedClosure)._instructions();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["instructions"]=2;
//>>excludeEnd("ctx");
$1=_st($2)._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["last"]=1;
//>>excludeEnd("ctx");
statements=_st($1)._instructions();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["instructions"]=1;
//>>excludeEnd("ctx");
_st(statements)._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=_st(statements)._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["last"]=2;
//>>excludeEnd("ctx");
$3=_st($4)._canBeAssigned();
if($vm.assert($3)){
$5=_st(statements)._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["last"]=3;
//>>excludeEnd("ctx");
$7=_st($IRAssignment())._new();
_st($7)._add_(_st(_st(self._assignment())._instructions())._first());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
_st($7)._add_(_st(_st(statements)._last())._copy());
$8=_st($7)._yourself();
$6=$8;
return _st($5)._replaceWith_($6);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$9=inlinedClosure;
return $9;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlineClosure:",{anIRClosure:anIRClosure,inlinedClosure:inlinedClosure,statements:statements},globals.IRAssignmentInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRClosure"],
source: "inlineClosure: anIRClosure\x0a\x09| inlinedClosure statements |\x0a\x0a\x09inlinedClosure := super inlineClosure: anIRClosure.\x0a\x09statements := inlinedClosure instructions last instructions.\x0a\x09\x0a\x09statements ifNotEmpty: [\x0a\x09\x09statements last canBeAssigned ifTrue: [\x0a\x09\x09\x09statements last replaceWith: (IRAssignment new\x0a\x09\x09\x09\x09add: self assignment instructions first;\x0a\x09\x09\x09\x09add: statements last copy;\x0a\x09\x09\x09\x09yourself) ] ].\x0a\x0a\x09^ inlinedClosure",
referencedClasses: ["IRAssignment"],
//>>excludeEnd("ide");
messageSends: ["inlineClosure:", "instructions", "last", "ifNotEmpty:", "ifTrue:", "canBeAssigned", "replaceWith:", "add:", "new", "first", "assignment", "copy", "yourself"]
}),
globals.IRAssignmentInliner);



$vm.addClass('IRReturnInliner', globals.IRSendInliner, [], 'Compiler-Inlining');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.IRReturnInliner.comment="I inline message sends with inlined closure together with a return instruction.";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "inlineClosure:",
protocol: 'inlining',
fn: function (anIRClosure){
var self=this;
var closure,statements;
function $IRReturn(){return globals.IRReturn||(typeof IRReturn=="undefined"?nil:IRReturn)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$5,$6,$7;
closure=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
globals.IRReturnInliner.superclass.fn.prototype._inlineClosure_.apply(_st(self), [anIRClosure]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=_st(_st(closure)._instructions())._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["last"]=1;
//>>excludeEnd("ctx");
statements=_st($1)._instructions();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["instructions"]=1;
//>>excludeEnd("ctx");
_st(statements)._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=_st(statements)._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["last"]=2;
//>>excludeEnd("ctx");
$2=_st($3)._isReturn();
if(!$vm.assert($2)){
$4=_st(statements)._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["last"]=3;
//>>excludeEnd("ctx");
$5=_st($IRReturn())._new();
_st($5)._add_(_st(_st(statements)._last())._copy());
$6=_st($5)._yourself();
return _st($4)._replaceWith_($6);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$7=closure;
return $7;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlineClosure:",{anIRClosure:anIRClosure,closure:closure,statements:statements},globals.IRReturnInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRClosure"],
source: "inlineClosure: anIRClosure\x0a\x09| closure statements |\x0a\x0a\x09closure := super inlineClosure: anIRClosure.\x0a\x09statements := closure instructions last instructions.\x0a\x09\x0a\x09statements ifNotEmpty: [\x0a\x09\x09statements last isReturn\x0a\x09\x09\x09ifFalse: [ statements last replaceWith: (IRReturn new\x0a\x09\x09\x09\x09add: statements last copy;\x0a\x09\x09\x09\x09yourself)] ].\x0a\x0a\x09^ closure",
referencedClasses: ["IRReturn"],
//>>excludeEnd("ide");
messageSends: ["inlineClosure:", "instructions", "last", "ifNotEmpty:", "ifFalse:", "isReturn", "replaceWith:", "add:", "new", "copy", "yourself"]
}),
globals.IRReturnInliner);

$vm.addMethod(
$vm.method({
selector: "inlineReturn:",
protocol: 'inlining',
fn: function (anIRReturn){
var self=this;
var return_;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
return_=self._inlinedReturn();
$1=_st(anIRReturn)._instructions();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["instructions"]=1;
//>>excludeEnd("ctx");
_st($1)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(return_)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
_st(anIRReturn)._replaceWith_(return_);
self._inlineSend_(_st(_st(return_)._instructions())._last());
$2=return_;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlineReturn:",{anIRReturn:anIRReturn,return_:return_},globals.IRReturnInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRReturn"],
source: "inlineReturn: anIRReturn\x0a\x09| return |\x0a\x09return := self inlinedReturn.\x0a\x09anIRReturn instructions do: [ :each |\x0a\x09\x09return add: each ].\x0a\x09anIRReturn replaceWith: return.\x0a\x09self inlineSend: return instructions last.\x0a\x09^ return",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["inlinedReturn", "do:", "instructions", "add:", "replaceWith:", "inlineSend:", "last"]
}),
globals.IRReturnInliner);

$vm.addMethod(
$vm.method({
selector: "inlinedReturn",
protocol: 'factory',
fn: function (){
var self=this;
function $IRInlinedReturn(){return globals.IRInlinedReturn||(typeof IRInlinedReturn=="undefined"?nil:IRInlinedReturn)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st($IRInlinedReturn())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlinedReturn",{},globals.IRReturnInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inlinedReturn\x0a\x09^ IRInlinedReturn new",
referencedClasses: ["IRInlinedReturn"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
globals.IRReturnInliner);



$vm.addClass('InliningCodeGenerator', globals.CodeGenerator, [], 'Compiler-Inlining');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.InliningCodeGenerator.comment="I am a specialized code generator that uses inlining to produce more optimized JavaScript output";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "compileNode:",
protocol: 'compiling',
fn: function (aNode){
var self=this;
var ir,stream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
_st(self._semanticAnalyzer())._visit_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["visit:"]=1;
//>>excludeEnd("ctx");
ir=_st(self._translator())._visit_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["visit:"]=2;
//>>excludeEnd("ctx");
_st(self._inliner())._visit_(ir);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["visit:"]=3;
//>>excludeEnd("ctx");
$2=self._irTranslator();
_st($2)._currentClass_(self._currentClass());
_st($2)._visit_(ir);
$3=_st($2)._contents();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compileNode:",{aNode:aNode,ir:ir,stream:stream},globals.InliningCodeGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "compileNode: aNode\x0a\x09| ir stream |\x0a\x0a\x09self semanticAnalyzer visit: aNode.\x0a\x09ir := self translator visit: aNode.\x0a\x09self inliner visit: ir.\x0a\x0a\x09^ self irTranslator\x0a\x09\x09currentClass: self currentClass;\x0a\x09\x09visit: ir;\x0a\x09\x09contents",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visit:", "semanticAnalyzer", "translator", "inliner", "currentClass:", "irTranslator", "currentClass", "contents"]
}),
globals.InliningCodeGenerator);

$vm.addMethod(
$vm.method({
selector: "inliner",
protocol: 'compiling',
fn: function (){
var self=this;
function $IRInliner(){return globals.IRInliner||(typeof IRInliner=="undefined"?nil:IRInliner)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st($IRInliner())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inliner",{},globals.InliningCodeGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inliner\x0a\x09^ IRInliner new",
referencedClasses: ["IRInliner"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
globals.InliningCodeGenerator);

$vm.addMethod(
$vm.method({
selector: "irTranslator",
protocol: 'compiling',
fn: function (){
var self=this;
function $IRInliningJSTranslator(){return globals.IRInliningJSTranslator||(typeof IRInliningJSTranslator=="undefined"?nil:IRInliningJSTranslator)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st($IRInliningJSTranslator())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"irTranslator",{},globals.InliningCodeGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "irTranslator\x0a\x09^ IRInliningJSTranslator new",
referencedClasses: ["IRInliningJSTranslator"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
globals.InliningCodeGenerator);


});
