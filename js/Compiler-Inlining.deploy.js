smalltalk.addPackage('Compiler-Inlining');
smalltalk.addClass('IRInlinedAssignment', smalltalk.IRAssignment, [], 'Compiler-Inlining');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRInlinedAssignment_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedAssignment)})},
messageSends: ["visitIRInlinedAssignment:"]}),
smalltalk.IRInlinedAssignment);

smalltalk.addMethod(
smalltalk.method({
selector: "isInlined",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInlined",{},smalltalk.IRInlinedAssignment)})},
messageSends: []}),
smalltalk.IRInlinedAssignment);



smalltalk.addClass('IRInlinedClosure', smalltalk.IRClosure, [], 'Compiler-Inlining');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aVisitor)._visitIRInlinedClosure_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedClosure)})},
messageSends: ["visitIRInlinedClosure:"]}),
smalltalk.IRInlinedClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "isInlined",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInlined",{},smalltalk.IRInlinedClosure)})},
messageSends: []}),
smalltalk.IRInlinedClosure);



smalltalk.addClass('IRInlinedReturn', smalltalk.IRReturn, [], 'Compiler-Inlining');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitIRInlinedReturn_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedReturn)})},
messageSends: ["visitIRInlinedReturn:"]}),
smalltalk.IRInlinedReturn);

smalltalk.addMethod(
smalltalk.method({
selector: "isInlined",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInlined",{},smalltalk.IRInlinedReturn)})},
messageSends: []}),
smalltalk.IRInlinedReturn);



smalltalk.addClass('IRInlinedSend', smalltalk.IRSend, [], 'Compiler-Inlining');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aVisitor)._visitInlinedSend_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedSend)})},
messageSends: ["visitInlinedSend:"]}),
smalltalk.IRInlinedSend);

smalltalk.addMethod(
smalltalk.method({
selector: "isInlined",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInlined",{},smalltalk.IRInlinedSend)})},
messageSends: []}),
smalltalk.IRInlinedSend);



smalltalk.addClass('IRInlinedIfFalse', smalltalk.IRInlinedSend, [], 'Compiler-Inlining');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aVisitor)._visitIRInlinedIfFalse_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedIfFalse)})},
messageSends: ["visitIRInlinedIfFalse:"]}),
smalltalk.IRInlinedIfFalse);



smalltalk.addClass('IRInlinedIfNilIfNotNil', smalltalk.IRInlinedSend, [], 'Compiler-Inlining');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aVisitor)._visitIRInlinedIfNilIfNotNil_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedIfNilIfNotNil)})},
messageSends: ["visitIRInlinedIfNilIfNotNil:"]}),
smalltalk.IRInlinedIfNilIfNotNil);



smalltalk.addClass('IRInlinedIfTrue', smalltalk.IRInlinedSend, [], 'Compiler-Inlining');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aVisitor)._visitIRInlinedIfTrue_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedIfTrue)})},
messageSends: ["visitIRInlinedIfTrue:"]}),
smalltalk.IRInlinedIfTrue);



smalltalk.addClass('IRInlinedIfTrueIfFalse', smalltalk.IRInlinedSend, [], 'Compiler-Inlining');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aVisitor)._visitIRInlinedIfTrueIfFalse_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedIfTrueIfFalse)})},
messageSends: ["visitIRInlinedIfTrueIfFalse:"]}),
smalltalk.IRInlinedIfTrueIfFalse);



smalltalk.addClass('IRInlinedSequence', smalltalk.IRBlockSequence, [], 'Compiler-Inlining');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aVisitor)._visitIRInlinedSequence_(self);
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.IRInlinedSequence)})},
messageSends: ["visitIRInlinedSequence:"]}),
smalltalk.IRInlinedSequence);

smalltalk.addMethod(
smalltalk.method({
selector: "isInlined",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInlined",{},smalltalk.IRInlinedSequence)})},
messageSends: []}),
smalltalk.IRInlinedSequence);



smalltalk.addClass('IRInliner', smalltalk.IRVisitor, [], 'Compiler-Inlining');
smalltalk.addMethod(
smalltalk.method({
selector: "assignmentInliner",
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
messageSends: ["translator:", "new", "yourself"]}),
smalltalk.IRInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "returnInliner",
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
messageSends: ["translator:", "new", "yourself"]}),
smalltalk.IRInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "sendInliner",
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
messageSends: ["translator:", "new", "yourself"]}),
smalltalk.IRInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldInlineAssignment:",
fn: function (anIRAssignment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(anIRAssignment)._isInlined())._not())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(_st(anIRAssignment)._instructions())._last())._isSend())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return self._shouldInlineSend_(_st(_st(anIRAssignment)._instructions())._last());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldInlineAssignment:",{anIRAssignment:anIRAssignment},smalltalk.IRInliner)})},
messageSends: ["and:", "shouldInlineSend:", "last", "instructions", "isSend", "not", "isInlined"]}),
smalltalk.IRInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldInlineReturn:",
fn: function (anIRReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(anIRReturn)._isInlined())._not())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(_st(anIRReturn)._instructions())._first())._isSend())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return self._shouldInlineSend_(_st(_st(anIRReturn)._instructions())._first());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldInlineReturn:",{anIRReturn:anIRReturn},smalltalk.IRInliner)})},
messageSends: ["and:", "shouldInlineSend:", "first", "instructions", "isSend", "not", "isInlined"]}),
smalltalk.IRInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldInlineSend:",
fn: function (anIRSend){
var self=this;
function $IRSendInliner(){return smalltalk.IRSendInliner||(typeof IRSendInliner=="undefined"?nil:IRSendInliner)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(anIRSend)._isInlined())._not())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st($IRSendInliner())._shouldInline_(anIRSend);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldInlineSend:",{anIRSend:anIRSend},smalltalk.IRInliner)})},
messageSends: ["and:", "shouldInline:", "not", "isInlined"]}),
smalltalk.IRInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "transformNonLocalReturn:",
fn: function (anIRNonLocalReturn){
var self=this;
var localReturn;
function $IRReturn(){return smalltalk.IRReturn||(typeof IRReturn=="undefined"?nil:IRReturn)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=_st(_st(anIRNonLocalReturn)._scope())._canInlineNonLocalReturns();
if(smalltalk.assert($1)){
_st(_st(_st(anIRNonLocalReturn)._scope())._methodScope())._removeNonLocalReturn_(_st(anIRNonLocalReturn)._scope());
$2=_st($IRReturn())._new();
_st($2)._scope_(_st(anIRNonLocalReturn)._scope());
$3=_st($2)._yourself();
localReturn=$3;
localReturn;
_st(_st(anIRNonLocalReturn)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(localReturn)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(anIRNonLocalReturn)._replaceWith_(localReturn);
$4=localReturn;
return $4;
};
$5=smalltalk.IRInliner.superclass.fn.prototype._visitIRNonLocalReturn_.apply(_st(self), [anIRNonLocalReturn]);
return $5;
}, function($ctx1) {$ctx1.fill(self,"transformNonLocalReturn:",{anIRNonLocalReturn:anIRNonLocalReturn,localReturn:localReturn},smalltalk.IRInliner)})},
messageSends: ["ifTrue:", "removeNonLocalReturn:", "scope", "methodScope", "scope:", "new", "yourself", "do:", "add:", "instructions", "replaceWith:", "canInlineNonLocalReturns", "visitIRNonLocalReturn:"]}),
smalltalk.IRInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRAssignment:",
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
messageSends: ["ifTrue:ifFalse:", "inlineAssignment:", "assignmentInliner", "visitIRAssignment:", "shouldInlineAssignment:"]}),
smalltalk.IRInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRNonLocalReturn:",
fn: function (anIRNonLocalReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._transformNonLocalReturn_(anIRNonLocalReturn);
return $1;
}, function($ctx1) {$ctx1.fill(self,"visitIRNonLocalReturn:",{anIRNonLocalReturn:anIRNonLocalReturn},smalltalk.IRInliner)})},
messageSends: ["transformNonLocalReturn:"]}),
smalltalk.IRInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRReturn:",
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
messageSends: ["ifTrue:ifFalse:", "inlineReturn:", "returnInliner", "visitIRReturn:", "shouldInlineReturn:"]}),
smalltalk.IRInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRSend:",
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
messageSends: ["ifTrue:ifFalse:", "inlineSend:", "sendInliner", "visitIRSend:", "shouldInlineSend:"]}),
smalltalk.IRInliner);



smalltalk.addClass('IRInliningJSTranslator', smalltalk.IRJSTranslator, [], 'Compiler-Inlining');
smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedAssignment:",
fn: function (anIRInlinedAssignment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._visit_(_st(_st(anIRInlinedAssignment)._instructions())._last());
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedAssignment:",{anIRInlinedAssignment:anIRInlinedAssignment},smalltalk.IRInliningJSTranslator)})},
messageSends: ["visit:", "last", "instructions"]}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedClosure:",
fn: function (anIRInlinedClosure){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._stream())._nextPutVars_(_st(_st(anIRInlinedClosure)._tempDeclarations())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._name())._asVariableName();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})));
_st(_st(anIRInlinedClosure)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._visit_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedClosure:",{anIRInlinedClosure:anIRInlinedClosure},smalltalk.IRInliningJSTranslator)})},
messageSends: ["nextPutVars:", "collect:", "asVariableName", "name", "tempDeclarations", "stream", "do:", "visit:", "instructions"]}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedIfFalse:",
fn: function (anIRInlinedIfFalse){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._stream())._nextPutIf_with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(self._stream())._nextPutAll_("! smalltalk.assert(");
self._visit_(_st(_st(anIRInlinedIfFalse)._instructions())._first());
return _st(self._stream())._nextPutAll_(")");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return self._visit_(_st(_st(anIRInlinedIfFalse)._instructions())._last());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedIfFalse:",{anIRInlinedIfFalse:anIRInlinedIfFalse},smalltalk.IRInliningJSTranslator)})},
messageSends: ["nextPutIf:with:", "nextPutAll:", "stream", "visit:", "first", "instructions", "last"]}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedIfNil:",
fn: function (anIRInlinedIfNil){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._stream())._nextPutIf_with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(self._stream())._nextPutAll_("($receiver = ");
self._visit_(_st(_st(anIRInlinedIfNil)._instructions())._first());
return _st(self._stream())._nextPutAll_(") == nil || $receiver == undefined");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return self._visit_(_st(_st(anIRInlinedIfNil)._instructions())._last());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedIfNil:",{anIRInlinedIfNil:anIRInlinedIfNil},smalltalk.IRInliningJSTranslator)})},
messageSends: ["nextPutIf:with:", "nextPutAll:", "stream", "visit:", "first", "instructions", "last"]}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedIfNilIfNotNil:",
fn: function (anIRInlinedIfNilIfNotNil){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._stream())._nextPutIfElse_with_with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(self._stream())._nextPutAll_("($receiver = ");
self._visit_(_st(_st(anIRInlinedIfNilIfNotNil)._instructions())._first());
return _st(self._stream())._nextPutAll_(") == nil || $receiver == undefined");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return self._visit_(_st(_st(anIRInlinedIfNilIfNotNil)._instructions())._second());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return self._visit_(_st(_st(anIRInlinedIfNilIfNotNil)._instructions())._third());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedIfNilIfNotNil:",{anIRInlinedIfNilIfNotNil:anIRInlinedIfNilIfNotNil},smalltalk.IRInliningJSTranslator)})},
messageSends: ["nextPutIfElse:with:with:", "nextPutAll:", "stream", "visit:", "first", "instructions", "second", "third"]}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedIfTrue:",
fn: function (anIRInlinedIfTrue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._stream())._nextPutIf_with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(self._stream())._nextPutAll_("smalltalk.assert(");
self._visit_(_st(_st(anIRInlinedIfTrue)._instructions())._first());
return _st(self._stream())._nextPutAll_(")");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return self._visit_(_st(_st(anIRInlinedIfTrue)._instructions())._last());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedIfTrue:",{anIRInlinedIfTrue:anIRInlinedIfTrue},smalltalk.IRInliningJSTranslator)})},
messageSends: ["nextPutIf:with:", "nextPutAll:", "stream", "visit:", "first", "instructions", "last"]}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedIfTrueIfFalse:",
fn: function (anIRInlinedIfTrueIfFalse){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._stream())._nextPutIfElse_with_with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(self._stream())._nextPutAll_("smalltalk.assert(");
self._visit_(_st(_st(anIRInlinedIfTrueIfFalse)._instructions())._first());
return _st(self._stream())._nextPutAll_(")");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return self._visit_(_st(_st(anIRInlinedIfTrueIfFalse)._instructions())._second());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return self._visit_(_st(_st(anIRInlinedIfTrueIfFalse)._instructions())._third());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedIfTrueIfFalse:",{anIRInlinedIfTrueIfFalse:anIRInlinedIfTrueIfFalse},smalltalk.IRInliningJSTranslator)})},
messageSends: ["nextPutIfElse:with:with:", "nextPutAll:", "stream", "visit:", "first", "instructions", "second", "third"]}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedNonLocalReturn:",
fn: function (anIRInlinedReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._stream())._nextPutStatementWith_((function(){
return smalltalk.withContext(function($ctx2) {
return self._visit_(_st(_st(anIRInlinedReturn)._instructions())._last());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self._stream())._nextPutNonLocalReturnWith_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedNonLocalReturn:",{anIRInlinedReturn:anIRInlinedReturn},smalltalk.IRInliningJSTranslator)})},
messageSends: ["nextPutStatementWith:", "visit:", "last", "instructions", "stream", "nextPutNonLocalReturnWith:"]}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedReturn:",
fn: function (anIRInlinedReturn){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._visit_(_st(_st(anIRInlinedReturn)._instructions())._last());
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedReturn:",{anIRInlinedReturn:anIRInlinedReturn},smalltalk.IRInliningJSTranslator)})},
messageSends: ["visit:", "last", "instructions"]}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "visitIRInlinedSequence:",
fn: function (anIRInlinedSequence){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(anIRInlinedSequence)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self._stream())._nextPutStatementWith_((function(){
return smalltalk.withContext(function($ctx3) {
return self._visit_(each);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedSequence:",{anIRInlinedSequence:anIRInlinedSequence},smalltalk.IRInliningJSTranslator)})},
messageSends: ["do:", "nextPutStatementWith:", "visit:", "stream", "instructions"]}),
smalltalk.IRInliningJSTranslator);



smalltalk.addClass('IRSendInliner', smalltalk.Object, ['send', 'translator'], 'Compiler-Inlining');
smalltalk.addMethod(
smalltalk.method({
selector: "ifFalse:",
fn: function (anIRInstruction){
var self=this;
function $IRInlinedIfFalse(){return smalltalk.IRInlinedIfFalse||(typeof IRInlinedIfFalse=="undefined"?nil:IRInlinedIfFalse)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._inlinedSend_with_(_st($IRInlinedIfFalse())._new(),anIRInstruction);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifFalse:",{anIRInstruction:anIRInstruction},smalltalk.IRSendInliner)})},
messageSends: ["inlinedSend:with:", "new"]}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "ifFalse:ifTrue:",
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._perform_withArguments_("ifTrue:ifFalse:",[anotherIRInstruction,anIRInstruction]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifFalse:ifTrue:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},smalltalk.IRSendInliner)})},
messageSends: ["perform:withArguments:"]}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNil:",
fn: function (anIRInstruction){
var self=this;
function $IRInlinedIfNilIfNotNil(){return smalltalk.IRInlinedIfNilIfNotNil||(typeof IRInlinedIfNilIfNotNil=="undefined"?nil:IRInlinedIfNilIfNotNil)}
function $IRClosure(){return smalltalk.IRClosure||(typeof IRClosure=="undefined"?nil:IRClosure)}
function $IRBlockSequence(){return smalltalk.IRBlockSequence||(typeof IRBlockSequence=="undefined"?nil:IRBlockSequence)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$1;
$2=_st($IRClosure())._new();
_st($2)._scope_(_st(_st(anIRInstruction)._scope())._copy());
$3=_st($IRBlockSequence())._new();
_st($3)._add_(_st(_st(self._send())._instructions())._first());
$4=_st($3)._yourself();
_st($2)._add_($4);
$5=_st($2)._yourself();
$1=self._inlinedSend_with_with_(_st($IRInlinedIfNilIfNotNil())._new(),anIRInstruction,$5);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNil:",{anIRInstruction:anIRInstruction},smalltalk.IRSendInliner)})},
messageSends: ["inlinedSend:with:with:", "new", "scope:", "copy", "scope", "add:", "first", "instructions", "send", "yourself"]}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNil:ifNotNil:",
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
function $IRInlinedIfNilIfNotNil(){return smalltalk.IRInlinedIfNilIfNotNil||(typeof IRInlinedIfNilIfNotNil=="undefined"?nil:IRInlinedIfNilIfNotNil)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._inlinedSend_with_with_(_st($IRInlinedIfNilIfNotNil())._new(),anIRInstruction,anotherIRInstruction);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNil:ifNotNil:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},smalltalk.IRSendInliner)})},
messageSends: ["inlinedSend:with:with:", "new"]}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNotNil:",
fn: function (anIRInstruction){
var self=this;
function $IRInlinedIfNilIfNotNil(){return smalltalk.IRInlinedIfNilIfNotNil||(typeof IRInlinedIfNilIfNotNil=="undefined"?nil:IRInlinedIfNilIfNotNil)}
function $IRClosure(){return smalltalk.IRClosure||(typeof IRClosure=="undefined"?nil:IRClosure)}
function $IRBlockSequence(){return smalltalk.IRBlockSequence||(typeof IRBlockSequence=="undefined"?nil:IRBlockSequence)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$1;
$2=_st($IRClosure())._new();
_st($2)._scope_(_st(_st(anIRInstruction)._scope())._copy());
$3=_st($IRBlockSequence())._new();
_st($3)._add_(_st(_st(self._send())._instructions())._first());
$4=_st($3)._yourself();
_st($2)._add_($4);
$5=_st($2)._yourself();
$1=self._inlinedSend_with_with_(_st($IRInlinedIfNilIfNotNil())._new(),$5,anIRInstruction);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:",{anIRInstruction:anIRInstruction},smalltalk.IRSendInliner)})},
messageSends: ["inlinedSend:with:with:", "new", "scope:", "copy", "scope", "add:", "first", "instructions", "send", "yourself"]}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNotNil:ifNil:",
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
function $IRInlinedIfNilIfNotNil(){return smalltalk.IRInlinedIfNilIfNotNil||(typeof IRInlinedIfNilIfNotNil=="undefined"?nil:IRInlinedIfNilIfNotNil)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._inlinedSend_with_with_(_st($IRInlinedIfNilIfNotNil())._new(),anotherIRInstruction,anIRInstruction);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:ifNil:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},smalltalk.IRSendInliner)})},
messageSends: ["inlinedSend:with:with:", "new"]}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "ifTrue:",
fn: function (anIRInstruction){
var self=this;
function $IRInlinedIfTrue(){return smalltalk.IRInlinedIfTrue||(typeof IRInlinedIfTrue=="undefined"?nil:IRInlinedIfTrue)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._inlinedSend_with_(_st($IRInlinedIfTrue())._new(),anIRInstruction);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifTrue:",{anIRInstruction:anIRInstruction},smalltalk.IRSendInliner)})},
messageSends: ["inlinedSend:with:", "new"]}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "ifTrue:ifFalse:",
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
function $IRInlinedIfTrueIfFalse(){return smalltalk.IRInlinedIfTrueIfFalse||(typeof IRInlinedIfTrueIfFalse=="undefined"?nil:IRInlinedIfTrueIfFalse)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._inlinedSend_with_with_(_st($IRInlinedIfTrueIfFalse())._new(),anIRInstruction,anotherIRInstruction);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifTrue:ifFalse:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},smalltalk.IRSendInliner)})},
messageSends: ["inlinedSend:with:with:", "new"]}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineClosure:",
fn: function (anIRClosure){
var self=this;
var inlinedClosure,sequence,statements;
function $IRTempDeclaration(){return smalltalk.IRTempDeclaration||(typeof IRTempDeclaration=="undefined"?nil:IRTempDeclaration)}
function $AliasVar(){return smalltalk.AliasVar||(typeof AliasVar=="undefined"?nil:AliasVar)}
function $IRVariable(){return smalltalk.IRVariable||(typeof IRVariable=="undefined"?nil:IRVariable)}
function $IRAssignment(){return smalltalk.IRAssignment||(typeof IRAssignment=="undefined"?nil:IRAssignment)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10;
inlinedClosure=self._inlinedClosure();
_st(inlinedClosure)._scope_(_st(anIRClosure)._scope());
_st(_st(anIRClosure)._tempDeclarations())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(inlinedClosure)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
sequence=self._inlinedSequence();
_st(_st(anIRClosure)._arguments())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st($IRTempDeclaration())._new();
_st($1)._name_(each);
$2=_st($1)._yourself();
_st(inlinedClosure)._add_($2);
$3=_st($IRAssignment())._new();
$4=_st($AliasVar())._new();
_st($4)._scope_(_st(inlinedClosure)._scope());
_st($4)._name_(each);
$5=_st($4)._yourself();
_st($3)._add_(_st(_st($IRVariable())._new())._variable_($5));
$6=_st($AliasVar())._new();
_st($6)._scope_(_st(inlinedClosure)._scope());
_st($6)._name_("$receiver");
$7=_st($6)._yourself();
_st($3)._add_(_st(_st($IRVariable())._new())._variable_($7));
$8=_st($3)._yourself();
return _st(sequence)._add_($8);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(inlinedClosure)._add_(sequence);
statements=_st(_st(_st(anIRClosure)._instructions())._last())._instructions();
_st(statements)._ifNotEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(statements)._allButLast())._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(sequence)._add_(each);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2)})}));
$9=_st(_st(_st(statements)._last())._isReturn())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(statements)._last())._isBlockReturn();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
if(smalltalk.assert($9)){
return _st(sequence)._add_(_st(_st(_st(statements)._last())._instructions())._first());
} else {
return _st(sequence)._add_(_st(statements)._last());
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$10=inlinedClosure;
return $10;
}, function($ctx1) {$ctx1.fill(self,"inlineClosure:",{anIRClosure:anIRClosure,inlinedClosure:inlinedClosure,sequence:sequence,statements:statements},smalltalk.IRSendInliner)})},
messageSends: ["inlinedClosure", "scope:", "scope", "do:", "add:", "tempDeclarations", "inlinedSequence", "name:", "new", "yourself", "variable:", "arguments", "instructions", "last", "ifNotEmpty:", "allButLast", "ifTrue:ifFalse:", "first", "and:", "isBlockReturn", "isReturn"]}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineSend:",
fn: function (anIRSend){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._send_(anIRSend);
$1=self._perform_withArguments_(_st(self._send())._selector(),_st(_st(self._send())._instructions())._allButFirst());
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlineSend:",{anIRSend:anIRSend},smalltalk.IRSendInliner)})},
messageSends: ["send:", "perform:withArguments:", "selector", "send", "allButFirst", "instructions"]}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inlinedClosure",
fn: function (){
var self=this;
function $IRInlinedClosure(){return smalltalk.IRInlinedClosure||(typeof IRInlinedClosure=="undefined"?nil:IRInlinedClosure)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($IRInlinedClosure())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlinedClosure",{},smalltalk.IRSendInliner)})},
messageSends: ["new"]}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inlinedSend:with:",
fn: function (inlinedSend,anIRInstruction){
var self=this;
var inlinedClosure;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=_st(anIRInstruction)._isClosure();
if(! smalltalk.assert($1)){
self._inliningError_("Message argument should be a block");
};
$2=_st(_st(_st(anIRInstruction)._arguments())._size()).__eq((0));
if(! smalltalk.assert($2)){
self._inliningError_("Inlined block should have zero argument");
};
inlinedClosure=_st(self._translator())._visit_(self._inlineClosure_(anIRInstruction));
$3=inlinedSend;
_st($3)._add_(_st(_st(self._send())._instructions())._first());
$4=_st($3)._add_(inlinedClosure);
_st(self._send())._replaceWith_(inlinedSend);
$5=inlinedSend;
return $5;
}, function($ctx1) {$ctx1.fill(self,"inlinedSend:with:",{inlinedSend:inlinedSend,anIRInstruction:anIRInstruction,inlinedClosure:inlinedClosure},smalltalk.IRSendInliner)})},
messageSends: ["ifFalse:", "inliningError:", "isClosure", "=", "size", "arguments", "visit:", "inlineClosure:", "translator", "add:", "first", "instructions", "send", "replaceWith:"]}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inlinedSend:with:with:",
fn: function (inlinedSend,anIRInstruction,anotherIRInstruction){
var self=this;
var inlinedClosure1,inlinedClosure2;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=_st(anIRInstruction)._isClosure();
if(! smalltalk.assert($1)){
self._inliningError_("Message argument should be a block");
};
$2=_st(anotherIRInstruction)._isClosure();
if(! smalltalk.assert($2)){
self._inliningError_("Message argument should be a block");
};
inlinedClosure1=_st(self._translator())._visit_(self._inlineClosure_(anIRInstruction));
inlinedClosure2=_st(self._translator())._visit_(self._inlineClosure_(anotherIRInstruction));
$3=inlinedSend;
_st($3)._add_(_st(_st(self._send())._instructions())._first());
_st($3)._add_(inlinedClosure1);
$4=_st($3)._add_(inlinedClosure2);
_st(self._send())._replaceWith_(inlinedSend);
$5=inlinedSend;
return $5;
}, function($ctx1) {$ctx1.fill(self,"inlinedSend:with:with:",{inlinedSend:inlinedSend,anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction,inlinedClosure1:inlinedClosure1,inlinedClosure2:inlinedClosure2},smalltalk.IRSendInliner)})},
messageSends: ["ifFalse:", "inliningError:", "isClosure", "visit:", "inlineClosure:", "translator", "add:", "first", "instructions", "send", "replaceWith:"]}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inlinedSequence",
fn: function (){
var self=this;
function $IRInlinedSequence(){return smalltalk.IRInlinedSequence||(typeof IRInlinedSequence=="undefined"?nil:IRInlinedSequence)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($IRInlinedSequence())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlinedSequence",{},smalltalk.IRSendInliner)})},
messageSends: ["new"]}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inliningError:",
fn: function (aString){
var self=this;
function $InliningError(){return smalltalk.InliningError||(typeof InliningError=="undefined"?nil:InliningError)}
return smalltalk.withContext(function($ctx1) { 
_st($InliningError())._signal_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"inliningError:",{aString:aString},smalltalk.IRSendInliner)})},
messageSends: ["signal:"]}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "send",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@send"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"send",{},smalltalk.IRSendInliner)})},
messageSends: []}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "send:",
fn: function (anIRSend){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@send"]=anIRSend;
return self}, function($ctx1) {$ctx1.fill(self,"send:",{anIRSend:anIRSend},smalltalk.IRSendInliner)})},
messageSends: []}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "translator",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@translator"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"translator",{},smalltalk.IRSendInliner)})},
messageSends: []}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "translator:",
fn: function (anASTTranslator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@translator"]=anASTTranslator;
return self}, function($ctx1) {$ctx1.fill(self,"translator:",{anASTTranslator:anASTTranslator},smalltalk.IRSendInliner)})},
messageSends: []}),
smalltalk.IRSendInliner);


smalltalk.addMethod(
smalltalk.method({
selector: "inlinedSelectors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["ifTrue:", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:", "ifNil:", "ifNotNil:", "ifNil:ifNotNil:", "ifNotNil:ifNil:"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlinedSelectors",{},smalltalk.IRSendInliner.klass)})},
messageSends: []}),
smalltalk.IRSendInliner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldInline:",
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
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"shouldInline:",{anIRInstruction:anIRInstruction},smalltalk.IRSendInliner.klass)})},
messageSends: ["ifFalse:", "includes:", "selector", "inlinedSelectors", "do:", "isClosure", "allButFirst", "instructions"]}),
smalltalk.IRSendInliner.klass);


smalltalk.addClass('IRAssignmentInliner', smalltalk.IRSendInliner, ['assignment'], 'Compiler-Inlining');
smalltalk.addMethod(
smalltalk.method({
selector: "assignment",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@assignment"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"assignment",{},smalltalk.IRAssignmentInliner)})},
messageSends: []}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "assignment:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@assignment"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"assignment:",{aNode:aNode},smalltalk.IRAssignmentInliner)})},
messageSends: []}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineAssignment:",
fn: function (anIRAssignment){
var self=this;
var inlinedAssignment;
function $IRInlinedAssignment(){return smalltalk.IRInlinedAssignment||(typeof IRInlinedAssignment=="undefined"?nil:IRInlinedAssignment)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self._assignment_(anIRAssignment);
inlinedAssignment=_st($IRInlinedAssignment())._new();
_st(_st(anIRAssignment)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(inlinedAssignment)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(anIRAssignment)._replaceWith_(inlinedAssignment);
self._inlineSend_(_st(_st(inlinedAssignment)._instructions())._last());
$1=inlinedAssignment;
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlineAssignment:",{anIRAssignment:anIRAssignment,inlinedAssignment:inlinedAssignment},smalltalk.IRAssignmentInliner)})},
messageSends: ["assignment:", "new", "do:", "add:", "instructions", "replaceWith:", "inlineSend:", "last"]}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineClosure:",
fn: function (anIRClosure){
var self=this;
var inlinedClosure,statements;
function $IRAssignment(){return smalltalk.IRAssignment||(typeof IRAssignment=="undefined"?nil:IRAssignment)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
inlinedClosure=smalltalk.IRAssignmentInliner.superclass.fn.prototype._inlineClosure_.apply(_st(self), [anIRClosure]);
statements=_st(_st(_st(inlinedClosure)._instructions())._last())._instructions();
_st(statements)._ifNotEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(statements)._last())._canBeAssigned();
if(smalltalk.assert($1)){
$2=_st($IRAssignment())._new();
_st($2)._add_(_st(_st(self._assignment())._instructions())._first());
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



smalltalk.addClass('IRReturnInliner', smalltalk.IRSendInliner, [], 'Compiler-Inlining');
smalltalk.addMethod(
smalltalk.method({
selector: "inlineClosure:",
fn: function (anIRClosure){
var self=this;
var closure,statements;
function $IRReturn(){return smalltalk.IRReturn||(typeof IRReturn=="undefined"?nil:IRReturn)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
closure=smalltalk.IRReturnInliner.superclass.fn.prototype._inlineClosure_.apply(_st(self), [anIRClosure]);
statements=_st(_st(_st(closure)._instructions())._last())._instructions();
_st(statements)._ifNotEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(statements)._last())._isReturn();
if(! smalltalk.assert($1)){
$2=_st($IRReturn())._new();
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
smalltalk.method({
selector: "inlineReturn:",
fn: function (anIRReturn){
var self=this;
var return_;
return smalltalk.withContext(function($ctx1) { 
var $1;
return_=self._inlinedReturn();
_st(_st(anIRReturn)._instructions())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(return_)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(anIRReturn)._replaceWith_(return_);
self._inlineSend_(_st(_st(return_)._instructions())._last());
$1=return_;
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlineReturn:",{anIRReturn:anIRReturn,return_:return_},smalltalk.IRReturnInliner)})},
messageSends: ["inlinedReturn", "do:", "add:", "instructions", "replaceWith:", "inlineSend:", "last"]}),
smalltalk.IRReturnInliner);

smalltalk.addMethod(
smalltalk.method({
selector: "inlinedReturn",
fn: function (){
var self=this;
function $IRInlinedReturn(){return smalltalk.IRInlinedReturn||(typeof IRInlinedReturn=="undefined"?nil:IRInlinedReturn)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($IRInlinedReturn())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlinedReturn",{},smalltalk.IRReturnInliner)})},
messageSends: ["new"]}),
smalltalk.IRReturnInliner);



smalltalk.addClass('InliningCodeGenerator', smalltalk.CodeGenerator, [], 'Compiler-Inlining');
smalltalk.addMethod(
smalltalk.method({
selector: "compileNode:",
fn: function (aNode){
var self=this;
var ir,stream;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
_st(self._semanticAnalyzer())._visit_(aNode);
ir=_st(self._translator())._visit_(aNode);
_st(self._inliner())._visit_(ir);
$2=self._irTranslator();
_st($2)._currentClass_(self._currentClass());
_st($2)._visit_(ir);
$3=_st($2)._contents();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"compileNode:",{aNode:aNode,ir:ir,stream:stream},smalltalk.InliningCodeGenerator)})},
messageSends: ["visit:", "semanticAnalyzer", "translator", "inliner", "currentClass:", "currentClass", "irTranslator", "contents"]}),
smalltalk.InliningCodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "inliner",
fn: function (){
var self=this;
function $IRInliner(){return smalltalk.IRInliner||(typeof IRInliner=="undefined"?nil:IRInliner)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($IRInliner())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inliner",{},smalltalk.InliningCodeGenerator)})},
messageSends: ["new"]}),
smalltalk.InliningCodeGenerator);

smalltalk.addMethod(
smalltalk.method({
selector: "irTranslator",
fn: function (){
var self=this;
function $IRInliningJSTranslator(){return smalltalk.IRInliningJSTranslator||(typeof IRInliningJSTranslator=="undefined"?nil:IRInliningJSTranslator)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($IRInliningJSTranslator())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"irTranslator",{},smalltalk.InliningCodeGenerator)})},
messageSends: ["new"]}),
smalltalk.InliningCodeGenerator);



