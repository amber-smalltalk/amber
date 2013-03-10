smalltalk.addPackage('Compiler-Inlining');
smalltalk.addClass('IRInlinedAssignment', smalltalk.IRAssignment, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRInlinedAssignment_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedAssignment)})},
messageSends: ["visitIRInlinedAssignment:"]}),
smalltalk.IRInlinedAssignment);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isInlined",{},smalltalk.IRInlinedAssignment)})},
messageSends: []}),
smalltalk.IRInlinedAssignment);



smalltalk.addClass('IRInlinedClosure', smalltalk.IRClosure, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aVisitor)._visitIRInlinedClosure_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedClosure)})},
messageSends: ["visitIRInlinedClosure:"]}),
smalltalk.IRInlinedClosure);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isInlined",{},smalltalk.IRInlinedClosure)})},
messageSends: []}),
smalltalk.IRInlinedClosure);



smalltalk.addClass('IRInlinedReturn', smalltalk.IRReturn, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRInlinedReturn_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedReturn)})},
messageSends: ["visitIRInlinedReturn:"]}),
smalltalk.IRInlinedReturn);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isInlined",{},smalltalk.IRInlinedReturn)})},
messageSends: []}),
smalltalk.IRInlinedReturn);



smalltalk.addClass('IRInlinedNonLocalReturn', smalltalk.IRInlinedReturn, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aVisitor)._visitIRInlinedNonLocalReturn_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedNonLocalReturn)})},
messageSends: ["visitIRInlinedNonLocalReturn:"]}),
smalltalk.IRInlinedNonLocalReturn);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isInlined",{},smalltalk.IRInlinedNonLocalReturn)})},
messageSends: []}),
smalltalk.IRInlinedNonLocalReturn);



smalltalk.addClass('IRInlinedSend', smalltalk.IRSend, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aVisitor)._visitInlinedSend_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedSend)})},
messageSends: ["visitInlinedSend:"]}),
smalltalk.IRInlinedSend);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isInlined",{},smalltalk.IRInlinedSend)})},
messageSends: []}),
smalltalk.IRInlinedSend);



smalltalk.addClass('IRInlinedIfFalse', smalltalk.IRInlinedSend, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aVisitor)._visitIRInlinedIfFalse_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedIfFalse)})},
messageSends: ["visitIRInlinedIfFalse:"]}),
smalltalk.IRInlinedIfFalse);



smalltalk.addClass('IRInlinedIfNilIfNotNil', smalltalk.IRInlinedSend, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aVisitor)._visitIRInlinedIfNilIfNotNil_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedIfNilIfNotNil)})},
messageSends: ["visitIRInlinedIfNilIfNotNil:"]}),
smalltalk.IRInlinedIfNilIfNotNil);



smalltalk.addClass('IRInlinedIfTrue', smalltalk.IRInlinedSend, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aVisitor)._visitIRInlinedIfTrue_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedIfTrue)})},
messageSends: ["visitIRInlinedIfTrue:"]}),
smalltalk.IRInlinedIfTrue);



smalltalk.addClass('IRInlinedIfTrueIfFalse', smalltalk.IRInlinedSend, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aVisitor)._visitIRInlinedIfTrueIfFalse_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedIfTrueIfFalse)})},
messageSends: ["visitIRInlinedIfTrueIfFalse:"]}),
smalltalk.IRInlinedIfTrueIfFalse);



smalltalk.addClass('IRInlinedSequence', smalltalk.IRBlockSequence, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aVisitor)._visitIRInlinedSequence_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedSequence)})},
messageSends: ["visitIRInlinedSequence:"]}),
smalltalk.IRInlinedSequence);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isInlined",{},smalltalk.IRInlinedSequence)})},
messageSends: []}),
smalltalk.IRInlinedSequence);



smalltalk.addClass('IRInliner', smalltalk.IRVisitor, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_assignmentInliner",
smalltalk.method({
selector: "assignmentInliner",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.IRAssignmentInliner || IRAssignmentInliner))._new();
_st($2)._translator_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"assignmentInliner",{},smalltalk.IRInliner)})},
messageSends: ["translator:", "new", "yourself"]}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_nonLocalReturnInliner",
smalltalk.method({
selector: "nonLocalReturnInliner",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.IRNonLocalReturnInliner || IRNonLocalReturnInliner))._new();
_st($2)._translator_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"nonLocalReturnInliner",{},smalltalk.IRInliner)})},
messageSends: ["translator:", "new", "yourself"]}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_returnInliner",
smalltalk.method({
selector: "returnInliner",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.IRReturnInliner || IRReturnInliner))._new();
_st($2)._translator_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"returnInliner",{},smalltalk.IRInliner)})},
messageSends: ["translator:", "new", "yourself"]}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_sendInliner",
smalltalk.method({
selector: "sendInliner",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.IRSendInliner || IRSendInliner))._new();
_st($2)._translator_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"sendInliner",{},smalltalk.IRInliner)})},
messageSends: ["translator:", "new", "yourself"]}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_shouldInlineAssignment_",
smalltalk.method({
selector: "shouldInlineAssignment:",
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
messageSends: ["and:", "shouldInlineSend:", "last", "instructions", "isSend", "not", "isInlined"]}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_shouldInlineReturn_",
smalltalk.method({
selector: "shouldInlineReturn:",
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
messageSends: ["and:", "shouldInlineSend:", "first", "instructions", "isSend", "not", "isInlined"]}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_shouldInlineSend_",
smalltalk.method({
selector: "shouldInlineSend:",
fn: function (anIRSend){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(anIRSend)._isInlined())._not())._and_((function(){
return smalltalk.withContext(function($ctx2) {return _st((smalltalk.IRSendInliner || IRSendInliner))._shouldInline_(anIRSend);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldInlineSend:",{anIRSend:anIRSend},smalltalk.IRInliner)})},
messageSends: ["and:", "shouldInline:", "not", "isInlined"]}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_transformNonLocalReturn_",
smalltalk.method({
selector: "transformNonLocalReturn:",
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
messageSends: ["ifTrue:", "removeNonLocalReturn:", "scope", "methodScope", "scope:", "new", "yourself", "do:", "add:", "instructions", "replaceWith:", "canInlineNonLocalReturns", "visitIRNonLocalReturn:"]}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRAssignment_",
smalltalk.method({
selector: "visitIRAssignment:",
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
messageSends: ["ifTrue:ifFalse:", "inlineAssignment:", "assignmentInliner", "visitIRAssignment:", "shouldInlineAssignment:"]}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRNonLocalReturn_",
smalltalk.method({
selector: "visitIRNonLocalReturn:",
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
messageSends: ["ifTrue:ifFalse:", "inlineReturn:", "nonLocalReturnInliner", "transformNonLocalReturn:", "shouldInlineReturn:"]}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRReturn_",
smalltalk.method({
selector: "visitIRReturn:",
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
messageSends: ["ifTrue:ifFalse:", "inlineReturn:", "returnInliner", "visitIRReturn:", "shouldInlineReturn:"]}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRSend_",
smalltalk.method({
selector: "visitIRSend:",
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
messageSends: ["ifTrue:ifFalse:", "inlineSend:", "sendInliner", "visitIRSend:", "shouldInlineSend:"]}),
smalltalk.IRInliner);



smalltalk.addClass('IRInliningJSTranslator', smalltalk.IRJSTranslator, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_visitIRInlinedAssignment_",
smalltalk.method({
selector: "visitIRInlinedAssignment:",
fn: function (anIRInlinedAssignment){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._visit_(_st(_st(anIRInlinedAssignment)._instructions())._last());
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedAssignment:",{anIRInlinedAssignment:anIRInlinedAssignment},smalltalk.IRInliningJSTranslator)})},
messageSends: ["visit:", "last", "instructions"]}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedClosure_",
smalltalk.method({
selector: "visitIRInlinedClosure:",
fn: function (anIRInlinedClosure){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(anIRInlinedClosure)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self)._visit_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedClosure:",{anIRInlinedClosure:anIRInlinedClosure},smalltalk.IRInliningJSTranslator)})},
messageSends: ["do:", "visit:", "instructions"]}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfFalse_",
smalltalk.method({
selector: "visitIRInlinedIfFalse:",
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
messageSends: ["nextPutIf:with:", "nextPutAll:", "stream", "visit:", "first", "instructions", "last"]}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfNil_",
smalltalk.method({
selector: "visitIRInlinedIfNil:",
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
messageSends: ["nextPutIf:with:", "nextPutAll:", "stream", "visit:", "first", "instructions", "last"]}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfNilIfNotNil_",
smalltalk.method({
selector: "visitIRInlinedIfNilIfNotNil:",
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
messageSends: ["nextPutIfElse:with:with:", "nextPutAll:", "stream", "visit:", "first", "instructions", "second", "third"]}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfTrue_",
smalltalk.method({
selector: "visitIRInlinedIfTrue:",
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
messageSends: ["nextPutIf:with:", "nextPutAll:", "stream", "visit:", "first", "instructions", "last"]}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfTrueIfFalse_",
smalltalk.method({
selector: "visitIRInlinedIfTrueIfFalse:",
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
messageSends: ["nextPutIfElse:with:with:", "nextPutAll:", "stream", "visit:", "first", "instructions", "second", "third"]}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedNonLocalReturn_",
smalltalk.method({
selector: "visitIRInlinedNonLocalReturn:",
fn: function (anIRInlinedReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._stream())._nextPutStatementWith_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._visit_(_st(_st(anIRInlinedReturn)._instructions())._last());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(self)._stream())._nextPutNonLocalReturnWith_((function(){
return smalltalk.withContext(function($ctx2) {}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedNonLocalReturn:",{anIRInlinedReturn:anIRInlinedReturn},smalltalk.IRInliningJSTranslator)})},
messageSends: ["nextPutStatementWith:", "visit:", "last", "instructions", "stream", "nextPutNonLocalReturnWith:"]}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedReturn_",
smalltalk.method({
selector: "visitIRInlinedReturn:",
fn: function (anIRInlinedReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._visit_(_st(_st(anIRInlinedReturn)._instructions())._last());
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedReturn:",{anIRInlinedReturn:anIRInlinedReturn},smalltalk.IRInliningJSTranslator)})},
messageSends: ["visit:", "last", "instructions"]}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedSequence_",
smalltalk.method({
selector: "visitIRInlinedSequence:",
fn: function (anIRInlinedSequence){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(anIRInlinedSequence)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._stream())._nextPutStatementWith_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._visit_(each);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedSequence:",{anIRInlinedSequence:anIRInlinedSequence},smalltalk.IRInliningJSTranslator)})},
messageSends: ["do:", "nextPutStatementWith:", "visit:", "stream", "instructions"]}),
smalltalk.IRInliningJSTranslator);



smalltalk.addClass('IRSendInliner', smalltalk.Object, ['send', 'translator'], 'Compiler-Inlining');
smalltalk.addMethod(
"_ifFalse_",
smalltalk.method({
selector: "ifFalse:",
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._inlinedSend_with_(_st((smalltalk.IRInlinedIfFalse || IRInlinedIfFalse))._new(),anIRInstruction);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifFalse:",{anIRInstruction:anIRInstruction},smalltalk.IRSendInliner)})},
messageSends: ["inlinedSend:with:", "new"]}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifFalse_ifTrue_",
smalltalk.method({
selector: "ifFalse:ifTrue:",
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._perform_withArguments_(smalltalk.symbolFor("ifTrue:ifFalse:"),[anotherIRInstruction,anIRInstruction]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifFalse:ifTrue:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},smalltalk.IRSendInliner)})},
messageSends: ["perform:withArguments:"]}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifNil_",
smalltalk.method({
selector: "ifNil:",
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
messageSends: ["inlinedSend:with:with:", "new", "scope:", "copy", "scope", "add:", "first", "instructions", "send", "yourself"]}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifNil_ifNotNil_",
smalltalk.method({
selector: "ifNil:ifNotNil:",
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._inlinedSend_with_with_(_st((smalltalk.IRInlinedIfNilIfNotNil || IRInlinedIfNilIfNotNil))._new(),anIRInstruction,anotherIRInstruction);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNil:ifNotNil:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},smalltalk.IRSendInliner)})},
messageSends: ["inlinedSend:with:with:", "new"]}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifNotNil_",
smalltalk.method({
selector: "ifNotNil:",
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
messageSends: ["inlinedSend:with:with:", "new", "scope:", "copy", "scope", "add:", "first", "instructions", "send", "yourself"]}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifNotNil_ifNil_",
smalltalk.method({
selector: "ifNotNil:ifNil:",
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._inlinedSend_with_with_(_st((smalltalk.IRInlinedIfNilIfNotNil || IRInlinedIfNilIfNotNil))._new(),anotherIRInstruction,anIRInstruction);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:ifNil:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},smalltalk.IRSendInliner)})},
messageSends: ["inlinedSend:with:with:", "new"]}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifTrue_",
smalltalk.method({
selector: "ifTrue:",
fn: function (anIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._inlinedSend_with_(_st((smalltalk.IRInlinedIfTrue || IRInlinedIfTrue))._new(),anIRInstruction);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifTrue:",{anIRInstruction:anIRInstruction},smalltalk.IRSendInliner)})},
messageSends: ["inlinedSend:with:", "new"]}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifTrue_ifFalse_",
smalltalk.method({
selector: "ifTrue:ifFalse:",
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._inlinedSend_with_with_(_st((smalltalk.IRInlinedIfTrueIfFalse || IRInlinedIfTrueIfFalse))._new(),anIRInstruction,anotherIRInstruction);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifTrue:ifFalse:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},smalltalk.IRSendInliner)})},
messageSends: ["inlinedSend:with:with:", "new"]}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlineClosure_",
smalltalk.method({
selector: "inlineClosure:",
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
messageSends: ["inlinedClosure", "scope:", "scope", "do:", "ifFalse:", "add:", "isSequence", "instructions", "inlinedSequence", "last", "ifNotEmpty:", "allButLast", "ifTrue:ifFalse:", "first", "and:", "isBlockReturn", "isReturn"]}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlineSend_",
smalltalk.method({
selector: "inlineSend:",
fn: function (anIRSend){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._send_(anIRSend);
$1=_st(self)._perform_withArguments_(_st(_st(self)._send())._selector(),_st(_st(_st(self)._send())._instructions())._allButFirst());
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlineSend:",{anIRSend:anIRSend},smalltalk.IRSendInliner)})},
messageSends: ["send:", "perform:withArguments:", "selector", "send", "allButFirst", "instructions"]}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedClosure",
smalltalk.method({
selector: "inlinedClosure",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.IRInlinedClosure || IRInlinedClosure))._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlinedClosure",{},smalltalk.IRSendInliner)})},
messageSends: ["new"]}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedSend_with_",
smalltalk.method({
selector: "inlinedSend:with:",
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
messageSends: ["ifFalse:", "inliningError:", "isClosure", "=", "size", "arguments", "visit:", "inlineClosure:", "translator", "add:", "first", "instructions", "send", "replaceWith:"]}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedSend_with_with_",
smalltalk.method({
selector: "inlinedSend:with:with:",
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
messageSends: ["ifFalse:", "inliningError:", "isClosure", "=", "size", "arguments", "visit:", "inlineClosure:", "translator", "add:", "first", "instructions", "send", "replaceWith:"]}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedSequence",
smalltalk.method({
selector: "inlinedSequence",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.IRInlinedSequence || IRInlinedSequence))._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlinedSequence",{},smalltalk.IRSendInliner)})},
messageSends: ["new"]}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inliningError_",
smalltalk.method({
selector: "inliningError:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((smalltalk.InliningError || InliningError))._signal_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"inliningError:",{aString:aString},smalltalk.IRSendInliner)})},
messageSends: ["signal:"]}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_send",
smalltalk.method({
selector: "send",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@send"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"send",{},smalltalk.IRSendInliner)})},
messageSends: []}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_send_",
smalltalk.method({
selector: "send:",
fn: function (anIRSend){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@send"]=anIRSend;
return self}, function($ctx1) {$ctx1.fill(self,"send:",{anIRSend:anIRSend},smalltalk.IRSendInliner)})},
messageSends: []}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_translator",
smalltalk.method({
selector: "translator",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@translator"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"translator",{},smalltalk.IRSendInliner)})},
messageSends: []}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_translator_",
smalltalk.method({
selector: "translator:",
fn: function (anASTTranslator){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@translator"]=anASTTranslator;
return self}, function($ctx1) {$ctx1.fill(self,"translator:",{anASTTranslator:anASTTranslator},smalltalk.IRSendInliner)})},
messageSends: []}),
smalltalk.IRSendInliner);


smalltalk.addMethod(
"_inlinedSelectors",
smalltalk.method({
selector: "inlinedSelectors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return ["ifTrue:", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:", "ifNil:", "ifNotNil:", "ifNil:ifNotNil:", "ifNotNil:ifNil"];
}, function($ctx1) {$ctx1.fill(self,"inlinedSelectors",{},smalltalk.IRSendInliner.klass)})},
messageSends: []}),
smalltalk.IRSendInliner.klass);

smalltalk.addMethod(
"_shouldInline_",
smalltalk.method({
selector: "shouldInline:",
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
messageSends: ["ifFalse:", "includes:", "selector", "inlinedSelectors", "do:", "isClosure", "allButFirst", "instructions"]}),
smalltalk.IRSendInliner.klass);


smalltalk.addClass('IRAssignmentInliner', smalltalk.IRSendInliner, ['assignment'], 'Compiler-Inlining');
smalltalk.addMethod(
"_assignment",
smalltalk.method({
selector: "assignment",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@assignment"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"assignment",{},smalltalk.IRAssignmentInliner)})},
messageSends: []}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
"_assignment_",
smalltalk.method({
selector: "assignment:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@assignment"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"assignment:",{aNode:aNode},smalltalk.IRAssignmentInliner)})},
messageSends: []}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
"_inlineAssignment_",
smalltalk.method({
selector: "inlineAssignment:",
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
messageSends: ["assignment:", "new", "do:", "add:", "instructions", "replaceWith:", "inlineSend:", "last"]}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
"_inlineClosure_",
smalltalk.method({
selector: "inlineClosure:",
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
messageSends: ["inlineClosure:", "instructions", "last", "ifNotEmpty:", "ifTrue:", "replaceWith:", "add:", "first", "assignment", "new", "copy", "yourself", "canBeAssigned"]}),
smalltalk.IRAssignmentInliner);



smalltalk.addClass('IRNonLocalReturnInliner', smalltalk.IRSendInliner, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_inlineClosure_",
smalltalk.method({
selector: "inlineClosure:",
fn: function (anIRClosure){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=smalltalk.IRSendInliner.fn.prototype._inlineCLosure_.apply(_st(self), [anIRClosure]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlineClosure:",{anIRClosure:anIRClosure},smalltalk.IRNonLocalReturnInliner)})},
messageSends: ["inlineCLosure:"]}),
smalltalk.IRNonLocalReturnInliner);

smalltalk.addMethod(
"_inlinedReturn",
smalltalk.method({
selector: "inlinedReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.IRInlinedNonLocalReturn || IRInlinedNonLocalReturn))._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlinedReturn",{},smalltalk.IRNonLocalReturnInliner)})},
messageSends: ["new"]}),
smalltalk.IRNonLocalReturnInliner);



smalltalk.addClass('IRReturnInliner', smalltalk.IRSendInliner, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_inlineClosure_",
smalltalk.method({
selector: "inlineClosure:",
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
messageSends: ["inlineClosure:", "instructions", "last", "ifNotEmpty:", "ifFalse:", "replaceWith:", "add:", "copy", "new", "yourself", "isReturn"]}),
smalltalk.IRReturnInliner);

smalltalk.addMethod(
"_inlineReturn_",
smalltalk.method({
selector: "inlineReturn:",
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
messageSends: ["inlinedReturn", "do:", "add:", "instructions", "replaceWith:", "inlineSend:", "last"]}),
smalltalk.IRReturnInliner);

smalltalk.addMethod(
"_inlinedReturn",
smalltalk.method({
selector: "inlinedReturn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.IRInlinedReturn || IRInlinedReturn))._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlinedReturn",{},smalltalk.IRReturnInliner)})},
messageSends: ["new"]}),
smalltalk.IRReturnInliner);



smalltalk.addClass('InliningCodeGenerator', smalltalk.CodeGenerator, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
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
messageSends: ["visit:", "semanticAnalyzer", "translator", "inliner", "irTranslator", "contents"]}),
smalltalk.InliningCodeGenerator);

smalltalk.addMethod(
"_inliner",
smalltalk.method({
selector: "inliner",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.IRInliner || IRInliner))._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inliner",{},smalltalk.InliningCodeGenerator)})},
messageSends: ["new"]}),
smalltalk.InliningCodeGenerator);

smalltalk.addMethod(
"_irTranslator",
smalltalk.method({
selector: "irTranslator",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.IRInliningJSTranslator || IRInliningJSTranslator))._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"irTranslator",{},smalltalk.InliningCodeGenerator)})},
messageSends: ["new"]}),
smalltalk.InliningCodeGenerator);



