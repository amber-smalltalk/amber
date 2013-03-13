smalltalk.addPackage('Compiler-Inlining');
smalltalk.addClass('IRInlinedAssignment', smalltalk.IRAssignment, [], 'Compiler-Inlining');
smalltalk.IRInlinedAssignment.comment="I represent an inlined assignment instruction."
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
"_isInlined",
smalltalk.method({
selector: "isInlined",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isInlined",{},smalltalk.IRInlinedAssignment)})},
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
return smalltalk.withContext(function($ctx1) { _st(aVisitor)._visitIRInlinedClosure_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedClosure)})},
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
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isInlined",{},smalltalk.IRInlinedClosure)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
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
"_isInlined",
smalltalk.method({
selector: "isInlined",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isInlined",{},smalltalk.IRInlinedReturn)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRInlinedNonLocalReturn_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedNonLocalReturn)})},
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
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isInlined",{},smalltalk.IRInlinedNonLocalReturn)})},
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
return smalltalk.withContext(function($ctx1) { _st(aVisitor)._visitInlinedSend_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedSend)})},
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
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isInlined",{},smalltalk.IRInlinedSend)})},
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
return smalltalk.withContext(function($ctx1) { _st(aVisitor)._visitIRInlinedIfFalse_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedIfFalse)})},
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
return smalltalk.withContext(function($ctx1) { _st(aVisitor)._visitIRInlinedIfNilIfNotNil_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedIfNilIfNotNil)})},
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
return smalltalk.withContext(function($ctx1) { _st(aVisitor)._visitIRInlinedIfTrue_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedIfTrue)})},
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
return smalltalk.withContext(function($ctx1) { _st(aVisitor)._visitIRInlinedIfTrueIfFalse_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedIfTrueIfFalse)})},
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
return smalltalk.withContext(function($ctx1) { _st(aVisitor)._visitIRInlinedSequence_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedSequence)})},
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
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isInlined",{},smalltalk.IRInlinedSequence)})},
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
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.IRAssignmentInliner || IRAssignmentInliner))._new();
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
"_nonLocalReturnInliner",
smalltalk.method({
selector: "nonLocalReturnInliner",
category: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.IRNonLocalReturnInliner || IRNonLocalReturnInliner))._new();
_st($2)._translator_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"nonLocalReturnInliner",{},smalltalk.IRInliner)})},
args: [],
source: "nonLocalReturnInliner\x0a\x09^ IRNonLocalReturnInliner new\x0a\x09\x09translator: self;\x0a\x09\x09yourself",
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
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.IRReturnInliner || IRReturnInliner))._new();
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
"_sendInliner",
smalltalk.method({
selector: "sendInliner",
category: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.IRSendInliner || IRSendInliner))._new();
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
"_shouldInlineAssignment_",
smalltalk.method({
selector: "shouldInlineAssignment:",
category: 'testing',
fn: function (anIRAssignment){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(anIRAssignment)._isInlined())._not())._and_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(_st(anIRAssignment)._instructions())._last())._isSend())._and_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._shouldInlineSend_(_st(_st(anIRAssignment)._instructions())._last());
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldInlineAssignment:",{anIRAssignment:anIRAssignment},smalltalk.IRInliner)})},
args: ["anIRAssignment"],
source: "shouldInlineAssignment: anIRAssignment\x0a\x09^ anIRAssignment isInlined not and: [\x0a\x09\x09anIRAssignment instructions last isSend and: [\x0a\x09\x09\x09self shouldInlineSend: (anIRAssignment instructions last) ]]",
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(anIRReturn)._isInlined())._not())._and_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(_st(anIRReturn)._instructions())._first())._isSend())._and_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._shouldInlineSend_(_st(_st(anIRReturn)._instructions())._first());
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldInlineReturn:",{anIRReturn:anIRReturn},smalltalk.IRInliner)})},
args: ["anIRReturn"],
source: "shouldInlineReturn: anIRReturn\x0a\x09^ anIRReturn isInlined not and: [\x0a\x09\x09anIRReturn instructions first isSend and: [\x0a\x09\x09\x09self shouldInlineSend: (anIRReturn instructions first) ]]",
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(anIRSend)._isInlined())._not())._and_((function(){
return smalltalk.withContext(function($ctx2) {return _st((smalltalk.IRSendInliner || IRSendInliner))._shouldInline_(anIRSend);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldInlineSend:",{anIRSend:anIRSend},smalltalk.IRInliner)})},
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
var localReturn;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5;
$1=_st(_st(anIRNonLocalReturn)._scope())._canInlineNonLocalReturns();
if(smalltalk.assert($1)){
_st(_st(_st(anIRNonLocalReturn)._scope())._methodScope())._removeNonLocalReturn_(_st(anIRNonLocalReturn)._scope());
$2=_st((smalltalk.IRReturn || IRReturn))._new();
_st($2)._scope_(_st(anIRNonLocalReturn)._scope());
$3=_st($2)._yourself();
localReturn=$3;
localReturn;
_st(_st(anIRNonLocalReturn)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(localReturn)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(anIRNonLocalReturn)._replaceWith_(localReturn);
$4=localReturn;
return $4;
};
$5=smalltalk.IRVisitor.fn.prototype._visitIRNonLocalReturn_.apply(_st(self), [anIRNonLocalReturn]);
return $5;
}, function($ctx1) {$ctx1.fill(self,"transformNonLocalReturn:",{anIRNonLocalReturn:anIRNonLocalReturn,localReturn:localReturn},smalltalk.IRInliner)})},
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
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._shouldInlineAssignment_(anIRAssignment);
if(smalltalk.assert($2)){
$1=_st(_st(self)._assignmentInliner())._inlineAssignment_(anIRAssignment);
} else {
$1=smalltalk.IRVisitor.fn.prototype._visitIRAssignment_.apply(_st(self), [anIRAssignment]);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRAssignment:",{anIRAssignment:anIRAssignment},smalltalk.IRInliner)})},
args: ["anIRAssignment"],
source: "visitIRAssignment: anIRAssignment\x0a\x09^ (self shouldInlineAssignment: anIRAssignment)\x0a\x09\x09ifTrue: [ self assignmentInliner inlineAssignment: anIRAssignment ]\x0a\x09\x09ifFalse: [ super visitIRAssignment: anIRAssignment ]",
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
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._shouldInlineReturn_(anIRNonLocalReturn);
if(smalltalk.assert($2)){
$1=_st(_st(self)._nonLocalReturnInliner())._inlineReturn_(anIRNonLocalReturn);
} else {
$1=_st(self)._transformNonLocalReturn_(anIRNonLocalReturn);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRNonLocalReturn:",{anIRNonLocalReturn:anIRNonLocalReturn},smalltalk.IRInliner)})},
args: ["anIRNonLocalReturn"],
source: "visitIRNonLocalReturn: anIRNonLocalReturn\x0a\x09^ (self shouldInlineReturn: anIRNonLocalReturn)\x0a\x09\x09ifTrue: [ self nonLocalReturnInliner inlineReturn: anIRNonLocalReturn ]\x0a\x09\x09ifFalse: [ self transformNonLocalReturn: anIRNonLocalReturn ]",
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
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._shouldInlineReturn_(anIRReturn);
if(smalltalk.assert($2)){
$1=_st(_st(self)._returnInliner())._inlineReturn_(anIRReturn);
} else {
$1=smalltalk.IRVisitor.fn.prototype._visitIRReturn_.apply(_st(self), [anIRReturn]);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRReturn:",{anIRReturn:anIRReturn},smalltalk.IRInliner)})},
args: ["anIRReturn"],
source: "visitIRReturn: anIRReturn\x0a\x09^ (self shouldInlineReturn: anIRReturn)\x0a\x09\x09ifTrue: [ self returnInliner inlineReturn: anIRReturn ]\x0a\x09\x09ifFalse: [ super visitIRReturn: anIRReturn ]",
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
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._shouldInlineSend_(anIRSend);
if(smalltalk.assert($2)){
$1=_st(_st(self)._sendInliner())._inlineSend_(anIRSend);
} else {
$1=smalltalk.IRVisitor.fn.prototype._visitIRSend_.apply(_st(self), [anIRSend]);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRSend:",{anIRSend:anIRSend},smalltalk.IRInliner)})},
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
return smalltalk.withContext(function($ctx1) { _st(self)._visit_(_st(_st(anIRInlinedAssignment)._instructions())._last());
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedAssignment:",{anIRInlinedAssignment:anIRInlinedAssignment},smalltalk.IRInliningJSTranslator)})},
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
return smalltalk.withContext(function($ctx1) { _st(_st(anIRInlinedClosure)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self)._visit_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedClosure:",{anIRInlinedClosure:anIRInlinedClosure},smalltalk.IRInliningJSTranslator)})},
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
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutIf_with_((function(){
return smalltalk.withContext(function($ctx2) {_st(_st(self)._stream())._nextPutAll_("! smalltalk.assert(");
_st(self)._visit_(_st(_st(anIRInlinedIfFalse)._instructions())._first());
return _st(_st(self)._stream())._nextPutAll_(")");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._visit_(_st(_st(anIRInlinedIfFalse)._instructions())._last());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedIfFalse:",{anIRInlinedIfFalse:anIRInlinedIfFalse},smalltalk.IRInliningJSTranslator)})},
args: ["anIRInlinedIfFalse"],
source: "visitIRInlinedIfFalse: anIRInlinedIfFalse\x0a\x09self stream nextPutIf: [\x0a\x09\x09self stream nextPutAll: '! smalltalk.assert('.\x0a\x09\x09self visit: anIRInlinedIfFalse instructions first.\x0a\x09\x09self stream nextPutAll: ')' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfFalse instructions last ]",
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
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutIf_with_((function(){
return smalltalk.withContext(function($ctx2) {_st(_st(self)._stream())._nextPutAll_("($receiver = ");
_st(self)._visit_(_st(_st(anIRInlinedIfNil)._instructions())._first());
return _st(_st(self)._stream())._nextPutAll_(") == nil || $receiver == undefined");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._visit_(_st(_st(anIRInlinedIfNil)._instructions())._last());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedIfNil:",{anIRInlinedIfNil:anIRInlinedIfNil},smalltalk.IRInliningJSTranslator)})},
args: ["anIRInlinedIfNil"],
source: "visitIRInlinedIfNil: anIRInlinedIfNil\x0a\x09self stream nextPutIf: [\x0a\x09\x09self stream nextPutAll: '($receiver = '.\x0a\x09\x09self visit: anIRInlinedIfNil instructions first.\x0a\x09\x09self stream nextPutAll: ') == nil || $receiver == undefined' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfNil instructions last ]",
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
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutIfElse_with_with_((function(){
return smalltalk.withContext(function($ctx2) {_st(_st(self)._stream())._nextPutAll_("($receiver = ");
_st(self)._visit_(_st(_st(anIRInlinedIfNilIfNotNil)._instructions())._first());
return _st(_st(self)._stream())._nextPutAll_(") == nil || $receiver == undefined");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._visit_(_st(_st(anIRInlinedIfNilIfNotNil)._instructions())._second());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._visit_(_st(_st(anIRInlinedIfNilIfNotNil)._instructions())._third());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedIfNilIfNotNil:",{anIRInlinedIfNilIfNotNil:anIRInlinedIfNilIfNotNil},smalltalk.IRInliningJSTranslator)})},
args: ["anIRInlinedIfNilIfNotNil"],
source: "visitIRInlinedIfNilIfNotNil: anIRInlinedIfNilIfNotNil\x0a\x09self stream\x0a\x09\x09nextPutIfElse: [\x0a\x09\x09\x09self stream nextPutAll: '($receiver = '.\x0a\x09\x09\x09self visit: anIRInlinedIfNilIfNotNil instructions first.\x0a\x09\x09\x09self stream nextPutAll: ') == nil || $receiver == undefined' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfNilIfNotNil instructions second ]\x0a\x09\x09with: [ self visit: anIRInlinedIfNilIfNotNil instructions third ]",
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
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutIf_with_((function(){
return smalltalk.withContext(function($ctx2) {_st(_st(self)._stream())._nextPutAll_("smalltalk.assert(");
_st(self)._visit_(_st(_st(anIRInlinedIfTrue)._instructions())._first());
return _st(_st(self)._stream())._nextPutAll_(")");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._visit_(_st(_st(anIRInlinedIfTrue)._instructions())._last());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedIfTrue:",{anIRInlinedIfTrue:anIRInlinedIfTrue},smalltalk.IRInliningJSTranslator)})},
args: ["anIRInlinedIfTrue"],
source: "visitIRInlinedIfTrue: anIRInlinedIfTrue\x0a\x09self stream nextPutIf: [\x0a\x09\x09self stream nextPutAll: 'smalltalk.assert('.\x0a\x09\x09self visit: anIRInlinedIfTrue instructions first.\x0a\x09\x09self stream nextPutAll: ')' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfTrue instructions last ]",
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
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutIfElse_with_with_((function(){
return smalltalk.withContext(function($ctx2) {_st(_st(self)._stream())._nextPutAll_("smalltalk.assert(");
_st(self)._visit_(_st(_st(anIRInlinedIfTrueIfFalse)._instructions())._first());
return _st(_st(self)._stream())._nextPutAll_(")");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._visit_(_st(_st(anIRInlinedIfTrueIfFalse)._instructions())._second());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._visit_(_st(_st(anIRInlinedIfTrueIfFalse)._instructions())._third());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedIfTrueIfFalse:",{anIRInlinedIfTrueIfFalse:anIRInlinedIfTrueIfFalse},smalltalk.IRInliningJSTranslator)})},
args: ["anIRInlinedIfTrueIfFalse"],
source: "visitIRInlinedIfTrueIfFalse: anIRInlinedIfTrueIfFalse\x0a\x09self stream\x0a\x09\x09nextPutIfElse: [\x0a\x09\x09\x09self stream nextPutAll: 'smalltalk.assert('.\x0a\x09\x09\x09self visit: anIRInlinedIfTrueIfFalse instructions first.\x0a\x09\x09\x09self stream nextPutAll: ')' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfTrueIfFalse instructions second ]\x0a\x09\x09with: [ self visit: anIRInlinedIfTrueIfFalse instructions third ]",
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
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutStatementWith_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._visit_(_st(_st(anIRInlinedReturn)._instructions())._last());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(self)._stream())._nextPutNonLocalReturnWith_((function(){
return smalltalk.withContext(function($ctx2) {}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedNonLocalReturn:",{anIRInlinedReturn:anIRInlinedReturn},smalltalk.IRInliningJSTranslator)})},
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
return smalltalk.withContext(function($ctx1) { _st(self)._visit_(_st(_st(anIRInlinedReturn)._instructions())._last());
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedReturn:",{anIRInlinedReturn:anIRInlinedReturn},smalltalk.IRInliningJSTranslator)})},
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
return smalltalk.withContext(function($ctx1) { _st(_st(anIRInlinedSequence)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._stream())._nextPutStatementWith_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._visit_(each);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedSequence:",{anIRInlinedSequence:anIRInlinedSequence},smalltalk.IRInliningJSTranslator)})},
args: ["anIRInlinedSequence"],
source: "visitIRInlinedSequence: anIRInlinedSequence\x0a\x09anIRInlinedSequence instructions do: [ :each |\x0a\x09\x09self stream nextPutStatementWith: [ self visit: each ]]",
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._inlinedSend_with_(_st((smalltalk.IRInlinedIfFalse || IRInlinedIfFalse))._new(),anIRInstruction);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifFalse:",{anIRInstruction:anIRInstruction},smalltalk.IRSendInliner)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._perform_withArguments_(smalltalk.symbolFor("ifTrue:ifFalse:"),[anotherIRInstruction,anIRInstruction]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifFalse:ifTrue:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},smalltalk.IRSendInliner)})},
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
return smalltalk.withContext(function($ctx1) { var $2,$3,$4,$5,$1;
$2=_st((smalltalk.IRClosure || IRClosure))._new();
_st($2)._scope_(_st(_st(anIRInstruction)._scope())._copy());
$3=_st((smalltalk.IRBlockSequence || IRBlockSequence))._new();
_st($3)._add_(_st(_st(_st(self)._send())._instructions())._first());
$4=_st($3)._yourself();
_st($2)._add_($4);
$5=_st($2)._yourself();
$1=_st(self)._inlinedSend_with_with_(_st((smalltalk.IRInlinedIfNilIfNotNil || IRInlinedIfNilIfNotNil))._new(),anIRInstruction,$5);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNil:",{anIRInstruction:anIRInstruction},smalltalk.IRSendInliner)})},
args: ["anIRInstruction"],
source: "ifNil: anIRInstruction\x0a\x09^ self\x0a\x09\x09inlinedSend: IRInlinedIfNilIfNotNil new\x0a\x09\x09with: anIRInstruction\x0a\x09\x09with: (IRClosure new\x0a\x09\x09\x09scope: anIRInstruction scope copy;\x0a\x09\x09\x09add: (IRBlockSequence new\x0a\x09\x09\x09\x09add: self send instructions first;\x0a\x09\x09\x09\x09yourself);\x0a\x09\x09\x09yourself)",
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._inlinedSend_with_with_(_st((smalltalk.IRInlinedIfNilIfNotNil || IRInlinedIfNilIfNotNil))._new(),anIRInstruction,anotherIRInstruction);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNil:ifNotNil:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},smalltalk.IRSendInliner)})},
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
return smalltalk.withContext(function($ctx1) { var $2,$3,$4,$5,$1;
$2=_st((smalltalk.IRClosure || IRClosure))._new();
_st($2)._scope_(_st(_st(anIRInstruction)._scope())._copy());
$3=_st((smalltalk.IRBlockSequence || IRBlockSequence))._new();
_st($3)._add_(_st(_st(_st(self)._send())._instructions())._first());
$4=_st($3)._yourself();
_st($2)._add_($4);
$5=_st($2)._yourself();
$1=_st(self)._inlinedSend_with_with_(_st((smalltalk.IRInlinedIfNilIfNotNil || IRInlinedIfNilIfNotNil))._new(),$5,anIRInstruction);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:",{anIRInstruction:anIRInstruction},smalltalk.IRSendInliner)})},
args: ["anIRInstruction"],
source: "ifNotNil: anIRInstruction\x0a\x09^ self\x0a\x09\x09inlinedSend: IRInlinedIfNilIfNotNil new\x0a\x09\x09with: (IRClosure new\x0a\x09\x09\x09scope: anIRInstruction scope copy;\x0a\x09\x09\x09add: (IRBlockSequence new\x0a\x09\x09\x09\x09add: self send instructions first;\x0a\x09\x09\x09\x09yourself);\x0a\x09\x09\x09yourself)\x0a\x09\x09with: anIRInstruction",
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._inlinedSend_with_with_(_st((smalltalk.IRInlinedIfNilIfNotNil || IRInlinedIfNilIfNotNil))._new(),anotherIRInstruction,anIRInstruction);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:ifNil:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},smalltalk.IRSendInliner)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._inlinedSend_with_(_st((smalltalk.IRInlinedIfTrue || IRInlinedIfTrue))._new(),anIRInstruction);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifTrue:",{anIRInstruction:anIRInstruction},smalltalk.IRSendInliner)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._inlinedSend_with_with_(_st((smalltalk.IRInlinedIfTrueIfFalse || IRInlinedIfTrueIfFalse))._new(),anIRInstruction,anotherIRInstruction);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifTrue:ifFalse:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},smalltalk.IRSendInliner)})},
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
var inlinedClosure,sequence,statements;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
inlinedClosure=_st(self)._inlinedClosure();
_st(inlinedClosure)._scope_(_st(anIRClosure)._scope());
_st(_st(anIRClosure)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx2) {$1=_st(each)._isSequence();
if(! smalltalk.assert($1)){
return _st(inlinedClosure)._add_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
sequence=_st(self)._inlinedSequence();
_st(inlinedClosure)._add_(sequence);
statements=_st(_st(_st(anIRClosure)._instructions())._last())._instructions();
_st(statements)._ifNotEmpty_((function(){
return smalltalk.withContext(function($ctx2) {_st(_st(statements)._allButLast())._do_((function(each){
return smalltalk.withContext(function($ctx3) {return _st(sequence)._add_(each);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
$2=_st(_st(_st(statements)._last())._isReturn())._and_((function(){
return smalltalk.withContext(function($ctx3) {return _st(_st(statements)._last())._isBlockReturn();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
if(smalltalk.assert($2)){
return _st(sequence)._add_(_st(_st(_st(statements)._last())._instructions())._first());
} else {
return _st(sequence)._add_(_st(statements)._last());
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=inlinedClosure;
return $3;
}, function($ctx1) {$ctx1.fill(self,"inlineClosure:",{anIRClosure:anIRClosure,inlinedClosure:inlinedClosure,sequence:sequence,statements:statements},smalltalk.IRSendInliner)})},
args: ["anIRClosure"],
source: "inlineClosure: anIRClosure\x0a\x09| inlinedClosure sequence statements |\x0a\x0a\x09inlinedClosure := self inlinedClosure.\x0a\x09inlinedClosure scope: anIRClosure scope.\x0a\x0a\x09\x22Add the possible temp declarations\x22\x0a\x09anIRClosure instructions do: [ :each |\x0a\x09\x09each isSequence ifFalse: [\x0a\x09\x09\x09inlinedClosure add: each ]].\x0a\x0a\x09\x22Add a block sequence\x22\x0a\x09sequence := self inlinedSequence.\x0a\x09inlinedClosure add: sequence.\x0a\x0a\x09\x22Get all the statements\x22\x0a\x09statements := anIRClosure instructions last instructions.\x0a\x09\x0a\x09statements ifNotEmpty: [\x0a\x09\x09statements allButLast do: [ :each | sequence add: each ].\x0a\x0a\x09\x09\x22Inlined closures don't have implicit local returns\x22\x0a\x09\x09(statements last isReturn and: [ statements last isBlockReturn ])\x0a\x09\x09\x09ifTrue: [ sequence add: statements last instructions first ]\x0a\x09\x09\x09ifFalse: [ sequence add: statements last ] ].\x0a\x0a\x09^ inlinedClosure",
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
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._send_(anIRSend);
$1=_st(self)._perform_withArguments_(_st(_st(self)._send())._selector(),_st(_st(_st(self)._send())._instructions())._allButFirst());
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlineSend:",{anIRSend:anIRSend},smalltalk.IRSendInliner)})},
args: ["anIRSend"],
source: "inlineSend: anIRSend\x0a\x09self send: anIRSend.\x0a\x09^ self\x0a\x09\x09perform: self send selector\x0a\x09\x09withArguments: self send instructions allButFirst",
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.IRInlinedClosure || IRInlinedClosure))._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlinedClosure",{},smalltalk.IRSendInliner)})},
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
var inlinedClosure;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5;
$1=_st(anIRInstruction)._isClosure();
if(! smalltalk.assert($1)){
_st(self)._inliningError_("Message argument should be a block");
};
$2=_st(_st(_st(anIRInstruction)._arguments())._size()).__eq((0));
if(! smalltalk.assert($2)){
_st(self)._inliningError_("Inlined block should have zero argument");
};
inlinedClosure=_st(_st(self)._translator())._visit_(_st(self)._inlineClosure_(anIRInstruction));
$3=inlinedSend;
_st($3)._add_(_st(_st(_st(self)._send())._instructions())._first());
$4=_st($3)._add_(inlinedClosure);
_st(_st(self)._send())._replaceWith_(inlinedSend);
$5=inlinedSend;
return $5;
}, function($ctx1) {$ctx1.fill(self,"inlinedSend:with:",{inlinedSend:inlinedSend,anIRInstruction:anIRInstruction,inlinedClosure:inlinedClosure},smalltalk.IRSendInliner)})},
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
var inlinedClosure1,inlinedClosure2;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7;
$1=_st(anIRInstruction)._isClosure();
if(! smalltalk.assert($1)){
_st(self)._inliningError_("Message argument should be a block");
};
$2=_st(_st(_st(anIRInstruction)._arguments())._size()).__eq((0));
if(! smalltalk.assert($2)){
_st(self)._inliningError_("Inlined block should have zero argument");
};
$3=_st(anotherIRInstruction)._isClosure();
if(! smalltalk.assert($3)){
_st(self)._inliningError_("Message argument should be a block");
};
$4=_st(_st(_st(anotherIRInstruction)._arguments())._size()).__eq((0));
if(! smalltalk.assert($4)){
_st(self)._inliningError_("Inlined block should have zero argument");
};
inlinedClosure1=_st(_st(self)._translator())._visit_(_st(self)._inlineClosure_(anIRInstruction));
inlinedClosure2=_st(_st(self)._translator())._visit_(_st(self)._inlineClosure_(anotherIRInstruction));
$5=inlinedSend;
_st($5)._add_(_st(_st(_st(self)._send())._instructions())._first());
_st($5)._add_(inlinedClosure1);
$6=_st($5)._add_(inlinedClosure2);
_st(_st(self)._send())._replaceWith_(inlinedSend);
$7=inlinedSend;
return $7;
}, function($ctx1) {$ctx1.fill(self,"inlinedSend:with:with:",{inlinedSend:inlinedSend,anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction,inlinedClosure1:inlinedClosure1,inlinedClosure2:inlinedClosure2},smalltalk.IRSendInliner)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.IRInlinedSequence || IRInlinedSequence))._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlinedSequence",{},smalltalk.IRSendInliner)})},
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
return smalltalk.withContext(function($ctx1) { _st((smalltalk.InliningError || InliningError))._signal_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"inliningError:",{aString:aString},smalltalk.IRSendInliner)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
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
"_send_",
smalltalk.method({
selector: "send:",
category: 'accessing',
fn: function (anIRSend){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@send"]=anIRSend;
return self}, function($ctx1) {$ctx1.fill(self,"send:",{anIRSend:anIRSend},smalltalk.IRSendInliner)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
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
"_translator_",
smalltalk.method({
selector: "translator:",
category: 'accessing',
fn: function (anASTTranslator){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@translator"]=anASTTranslator;
return self}, function($ctx1) {$ctx1.fill(self,"translator:",{anASTTranslator:anASTTranslator},smalltalk.IRSendInliner)})},
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
return smalltalk.withContext(function($ctx1) { return ["ifTrue:", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:", "ifNil:", "ifNotNil:", "ifNil:ifNotNil:", "ifNotNil:ifNil"];
}, function($ctx1) {$ctx1.fill(self,"inlinedSelectors",{},smalltalk.IRSendInliner.klass)})},
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
return smalltalk.withContext(function($ctx1) { var $1,$2;
var $early={};
try {
$1=_st(_st(self)._inlinedSelectors())._includes_(_st(anIRInstruction)._selector());
if(! smalltalk.assert($1)){
return false;
};
_st(_st(_st(anIRInstruction)._instructions())._allButFirst())._do_((function(each){
return smalltalk.withContext(function($ctx2) {$2=_st(each)._isClosure();
if(! smalltalk.assert($2)){
throw $early=[false];
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"shouldInline:",{anIRInstruction:anIRInstruction},smalltalk.IRSendInliner.klass)})},
args: ["anIRInstruction"],
source: "shouldInline: anIRInstruction\x0a\x09(self inlinedSelectors includes: anIRInstruction selector) ifFalse: [ ^ false ].\x0a\x09anIRInstruction instructions allButFirst do: [ :each |\x0a\x09\x09each isClosure ifFalse: [ ^ false ]].\x0a\x09^ true",
messageSends: ["ifFalse:", "includes:", "selector", "inlinedSelectors", "do:", "isClosure", "allButFirst", "instructions"],
referencedClasses: []
}),
smalltalk.IRSendInliner.klass);


smalltalk.addClass('IRAssignmentInliner', smalltalk.IRSendInliner, ['assignment'], 'Compiler-Inlining');
smalltalk.IRAssignmentInliner.comment="I inline message sends together with assignments by moving them around into the inline closure instructions.\x0a\x0a##Example\x0a\x0a\x09foo\x0a\x09\x09| a |\x0a\x09\x09a := true ifTrue: [ 1 ]\x0a\x0aWill produce:\x0a\x0a\x09if(smalltalk.assert(true) {\x0a\x09\x09a = 1;\x0a\x09};"
smalltalk.addMethod(
"_assignment",
smalltalk.method({
selector: "assignment",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
"_assignment_",
smalltalk.method({
selector: "assignment:",
category: 'accessing',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@assignment"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"assignment:",{aNode:aNode},smalltalk.IRAssignmentInliner)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._assignment_(anIRAssignment);
inlinedAssignment=_st((smalltalk.IRInlinedAssignment || IRInlinedAssignment))._new();
_st(_st(anIRAssignment)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(inlinedAssignment)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(anIRAssignment)._replaceWith_(inlinedAssignment);
_st(self)._inlineSend_(_st(_st(inlinedAssignment)._instructions())._last());
$1=inlinedAssignment;
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlineAssignment:",{anIRAssignment:anIRAssignment,inlinedAssignment:inlinedAssignment},smalltalk.IRAssignmentInliner)})},
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
var inlinedClosure,statements;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
inlinedClosure=smalltalk.IRSendInliner.fn.prototype._inlineClosure_.apply(_st(self), [anIRClosure]);
statements=_st(_st(_st(inlinedClosure)._instructions())._last())._instructions();
_st(statements)._ifNotEmpty_((function(){
return smalltalk.withContext(function($ctx2) {$1=_st(_st(statements)._last())._canBeAssigned();
if(smalltalk.assert($1)){
$2=_st((smalltalk.IRAssignment || IRAssignment))._new();
_st($2)._add_(_st(_st(_st(self)._assignment())._instructions())._first());
_st($2)._add_(_st(_st(statements)._last())._copy());
$3=_st($2)._yourself();
return _st(_st(statements)._last())._replaceWith_($3);
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$4=inlinedClosure;
return $4;
}, function($ctx1) {$ctx1.fill(self,"inlineClosure:",{anIRClosure:anIRClosure,inlinedClosure:inlinedClosure,statements:statements},smalltalk.IRAssignmentInliner)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=smalltalk.IRSendInliner.fn.prototype._inlineCLosure_.apply(_st(self), [anIRClosure]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlineClosure:",{anIRClosure:anIRClosure},smalltalk.IRNonLocalReturnInliner)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.IRInlinedNonLocalReturn || IRInlinedNonLocalReturn))._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlinedReturn",{},smalltalk.IRNonLocalReturnInliner)})},
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
var closure,statements;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
closure=smalltalk.IRSendInliner.fn.prototype._inlineClosure_.apply(_st(self), [anIRClosure]);
statements=_st(_st(_st(closure)._instructions())._last())._instructions();
_st(statements)._ifNotEmpty_((function(){
return smalltalk.withContext(function($ctx2) {$1=_st(_st(statements)._last())._isReturn();
if(! smalltalk.assert($1)){
$2=_st((smalltalk.IRReturn || IRReturn))._new();
_st($2)._add_(_st(_st(statements)._last())._copy());
$3=_st($2)._yourself();
return _st(_st(statements)._last())._replaceWith_($3);
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$4=closure;
return $4;
}, function($ctx1) {$ctx1.fill(self,"inlineClosure:",{anIRClosure:anIRClosure,closure:closure,statements:statements},smalltalk.IRReturnInliner)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
return_=_st(self)._inlinedReturn();
_st(_st(anIRReturn)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(return_)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(anIRReturn)._replaceWith_(return_);
_st(self)._inlineSend_(_st(_st(return_)._instructions())._last());
$1=return_;
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlineReturn:",{anIRReturn:anIRReturn,return_:return_},smalltalk.IRReturnInliner)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.IRInlinedReturn || IRInlinedReturn))._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlinedReturn",{},smalltalk.IRReturnInliner)})},
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
var ir,stream;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
_st(_st(self)._semanticAnalyzer())._visit_(aNode);
ir=_st(_st(self)._translator())._visit_(aNode);
_st(_st(self)._inliner())._visit_(ir);
$2=_st(self)._irTranslator();
_st($2)._visit_(ir);
$3=_st($2)._contents();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"compileNode:",{aNode:aNode,ir:ir,stream:stream},smalltalk.InliningCodeGenerator)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.IRInliner || IRInliner))._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inliner",{},smalltalk.InliningCodeGenerator)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.IRInliningJSTranslator || IRInliningJSTranslator))._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"irTranslator",{},smalltalk.InliningCodeGenerator)})},
args: [],
source: "irTranslator\x0a\x09^ IRInliningJSTranslator new",
messageSends: ["new"],
referencedClasses: ["IRInliningJSTranslator"]
}),
smalltalk.InliningCodeGenerator);



