smalltalk.addPackage('SUnit-Tests');
smalltalk.addClass('ExampleSetTest', smalltalk.TestCase, ['empty', 'full'], 'SUnit-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
self["@empty"]=_st($Set())._new();
self["@full"]=_st($Set())._with_with_((5),"abc");
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.ExampleSetTest)})},
messageSends: ["new", "with:with:"]}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAdd",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@empty"])._add_((5));
self._assert_(_st(self["@empty"])._includes_((5)));
return self}, function($ctx1) {$ctx1.fill(self,"testAdd",{},smalltalk.ExampleSetTest)})},
messageSends: ["add:", "assert:", "includes:"]}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testGrow",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@empty"])._addAll_((1)._to_((100)));
self._assert_equals_(_st(self["@empty"])._size(),(100));
return self}, function($ctx1) {$ctx1.fill(self,"testGrow",{},smalltalk.ExampleSetTest)})},
messageSends: ["addAll:", "to:", "assert:equals:", "size"]}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIllegal",
fn: function (){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@empty"])._at_((5));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@empty"])._at_put_((5),"abc");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testIllegal",{},smalltalk.ExampleSetTest)})},
messageSends: ["should:raise:", "at:", "at:put:"]}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIncludes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(self["@full"])._includes_((5)));
self._assert_(_st(self["@full"])._includes_("abc"));
return self}, function($ctx1) {$ctx1.fill(self,"testIncludes",{},smalltalk.ExampleSetTest)})},
messageSends: ["assert:", "includes:"]}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testOccurrences",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self["@empty"])._occurrencesOf_((0)),(0));
self._assert_equals_(_st(self["@full"])._occurrencesOf_((5)),(1));
_st(self["@full"])._add_((5));
self._assert_equals_(_st(self["@full"])._occurrencesOf_((5)),(1));
return self}, function($ctx1) {$ctx1.fill(self,"testOccurrences",{},smalltalk.ExampleSetTest)})},
messageSends: ["assert:equals:", "occurrencesOf:", "add:"]}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRemove",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@full"])._remove_((5));
self._assert_(_st(self["@full"])._includes_("abc"));
self._deny_(_st(self["@full"])._includes_((5)));
return self}, function($ctx1) {$ctx1.fill(self,"testRemove",{},smalltalk.ExampleSetTest)})},
messageSends: ["remove:", "assert:", "includes:", "deny:"]}),
smalltalk.ExampleSetTest);



smalltalk.addClass('SUnitAsyncTest', smalltalk.TestCase, ['flag'], 'SUnit-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "fakeError",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@flag"]="bad";
self._timeout_((30));
self["@flag"]=_st(self._async_((function(){
return smalltalk.withContext(function($ctx2) {
self["@flag"]="ok";
self["@flag"];
return self._error_("Intentional");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_((20));
return self}, function($ctx1) {$ctx1.fill(self,"fakeError",{},smalltalk.SUnitAsyncTest)})},
messageSends: ["timeout:", "valueWithTimeout:", "async:", "error:"]}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "fakeErrorFailingInTearDown",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@flag"]="bad";
self._timeout_((30));
self["@flag"]=_st(self._async_((function(){
return smalltalk.withContext(function($ctx2) {
return self._error_("Intentional");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_((20));
return self}, function($ctx1) {$ctx1.fill(self,"fakeErrorFailingInTearDown",{},smalltalk.SUnitAsyncTest)})},
messageSends: ["timeout:", "valueWithTimeout:", "async:", "error:"]}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "fakeFailure",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@flag"]="bad";
self._timeout_((30));
self["@flag"]=_st(self._async_((function(){
return smalltalk.withContext(function($ctx2) {
self["@flag"]="ok";
self["@flag"];
return self._assert_(false);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_((20));
return self}, function($ctx1) {$ctx1.fill(self,"fakeFailure",{},smalltalk.SUnitAsyncTest)})},
messageSends: ["timeout:", "valueWithTimeout:", "async:", "assert:"]}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "fakeMultipleTimeoutFailing",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._timeout_((100));
_st(self._async_((function(){
return smalltalk.withContext(function($ctx2) {
self._timeout_((20));
return _st(self._async_((function(){
return smalltalk.withContext(function($ctx3) {
return self._finished();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})})))._valueWithTimeout_((30));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_((20));
return self}, function($ctx1) {$ctx1.fill(self,"fakeMultipleTimeoutFailing",{},smalltalk.SUnitAsyncTest)})},
messageSends: ["timeout:", "valueWithTimeout:", "async:", "finished"]}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "fakeMultipleTimeoutPassing",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._timeout_((20));
_st(self._async_((function(){
return smalltalk.withContext(function($ctx2) {
self._timeout_((40));
return _st(self._async_((function(){
return smalltalk.withContext(function($ctx3) {
return self._finished();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})})))._valueWithTimeout_((20));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_((10));
return self}, function($ctx1) {$ctx1.fill(self,"fakeMultipleTimeoutPassing",{},smalltalk.SUnitAsyncTest)})},
messageSends: ["timeout:", "valueWithTimeout:", "async:", "finished"]}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "fakeTimeout",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._timeout_((10));
_st(self._async_((function(){
return smalltalk.withContext(function($ctx2) {
return self._finished();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_((20));
return self}, function($ctx1) {$ctx1.fill(self,"fakeTimeout",{},smalltalk.SUnitAsyncTest)})},
messageSends: ["timeout:", "valueWithTimeout:", "async:", "finished"]}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "selectorSetOf:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aCollection)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._selector();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._asSet();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectorSetOf:",{aCollection:aCollection},smalltalk.SUnitAsyncTest)})},
messageSends: ["asSet", "collect:", "selector"]}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@flag"]="ok";
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.SUnitAsyncTest)})},
messageSends: []}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "tearDown",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_("ok",self["@flag"]);
return self}, function($ctx1) {$ctx1.fill(self,"tearDown",{},smalltalk.SUnitAsyncTest)})},
messageSends: ["assert:equals:"]}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAsyncErrorsAndFailures",
fn: function (){
var self=this;
var suite,runner,result,assertBlock;
function $TestSuiteRunner(){return smalltalk.TestSuiteRunner||(typeof TestSuiteRunner=="undefined"?nil:TestSuiteRunner)}
function $ResultAnnouncement(){return smalltalk.ResultAnnouncement||(typeof ResultAnnouncement=="undefined"?nil:ResultAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
suite=["fakeError", "fakeErrorFailingInTearDown", "fakeFailure", "testPass"]._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self._class())._selector_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
runner=_st($TestSuiteRunner())._on_(suite);
self._timeout_((200));
result=_st(runner)._result();
assertBlock=self._async_((function(){
return smalltalk.withContext(function($ctx2) {
self._assert_equals_(self._selectorSetOf_(_st(result)._errors()),["fakeError"]._asSet());
self._assert_equals_(self._selectorSetOf_(_st(result)._failures()),["fakeErrorFailingInTearDown", "fakeFailure"]._asSet());
return self._finished();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(runner)._announcer())._on_do_($ResultAnnouncement(),(function(ann){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(ann)._result()).__eq_eq(result);
if(smalltalk.assert($1)){
$2=_st(_st(result)._runs()).__eq(_st(result)._total());
return _st($2)._ifTrue_(assertBlock);
};
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st(runner)._run();
return self}, function($ctx1) {$ctx1.fill(self,"testAsyncErrorsAndFailures",{suite:suite,runner:runner,result:result,assertBlock:assertBlock},smalltalk.SUnitAsyncTest)})},
messageSends: ["collect:", "selector:", "class", "on:", "timeout:", "result", "async:", "assert:equals:", "selectorSetOf:", "errors", "asSet", "failures", "finished", "on:do:", "ifTrue:", "=", "total", "runs", "==", "announcer", "run"]}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAsyncNeedsTimeout",
fn: function (){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return self._async_((function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
self._timeout_((0));
self._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return self._async_((function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
self._finished();
return self}, function($ctx1) {$ctx1.fill(self,"testAsyncNeedsTimeout",{},smalltalk.SUnitAsyncTest)})},
messageSends: ["should:raise:", "async:", "timeout:", "shouldnt:raise:", "finished"]}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testFinishedNeedsTimeout",
fn: function (){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return self._finished();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
self._timeout_((0));
self._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return self._finished();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testFinishedNeedsTimeout",{},smalltalk.SUnitAsyncTest)})},
messageSends: ["should:raise:", "finished", "timeout:", "shouldnt:raise:"]}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIsAsyncReturnsCorrectValues",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._deny_(self._isAsync());
self._timeout_((0));
self._assert_(self._isAsync());
self._finished();
self._deny_(self._isAsync());
return self}, function($ctx1) {$ctx1.fill(self,"testIsAsyncReturnsCorrectValues",{},smalltalk.SUnitAsyncTest)})},
messageSends: ["deny:", "isAsync", "timeout:", "assert:", "finished"]}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@flag"]="bad";
self._timeout_((10));
self["@flag"]=_st(self._async_((function(){
return smalltalk.withContext(function($ctx2) {
self._assert_(true);
self._finished();
self["@flag"]="ok";
return self["@flag"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_((5));
return self}, function($ctx1) {$ctx1.fill(self,"testPass",{},smalltalk.SUnitAsyncTest)})},
messageSends: ["timeout:", "valueWithTimeout:", "async:", "assert:", "finished"]}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTimeouts",
fn: function (){
var self=this;
var suite,runner,result,assertBlock;
function $TestSuiteRunner(){return smalltalk.TestSuiteRunner||(typeof TestSuiteRunner=="undefined"?nil:TestSuiteRunner)}
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
function $ResultAnnouncement(){return smalltalk.ResultAnnouncement||(typeof ResultAnnouncement=="undefined"?nil:ResultAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
suite=["fakeTimeout", "fakeMultipleTimeoutFailing", "fakeMultipleTimeoutPassing", "testPass"]._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self._class())._selector_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
runner=_st($TestSuiteRunner())._on_(suite);
self._timeout_((200));
result=_st(runner)._result();
assertBlock=self._async_((function(){
return smalltalk.withContext(function($ctx2) {
self._assert_equals_(self._selectorSetOf_(_st(result)._errors()),_st($Set())._new());
self._assert_equals_(self._selectorSetOf_(_st(result)._failures()),["fakeMultipleTimeoutFailing", "fakeTimeout"]._asSet());
return self._finished();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(runner)._announcer())._on_do_($ResultAnnouncement(),(function(ann){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(ann)._result()).__eq_eq(result);
if(smalltalk.assert($1)){
$2=_st(_st(result)._runs()).__eq(_st(result)._total());
return _st($2)._ifTrue_(assertBlock);
};
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st(runner)._run();
return self}, function($ctx1) {$ctx1.fill(self,"testTimeouts",{suite:suite,runner:runner,result:result,assertBlock:assertBlock},smalltalk.SUnitAsyncTest)})},
messageSends: ["collect:", "selector:", "class", "on:", "timeout:", "result", "async:", "assert:equals:", "selectorSetOf:", "errors", "new", "failures", "asSet", "finished", "on:do:", "ifTrue:", "=", "total", "runs", "==", "announcer", "run"]}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTwoAsyncPassesWithFinishedOnlyOneIsRun",
fn: function (){
var self=this;
var x;
return smalltalk.withContext(function($ctx1) { 
self["@flag"]="bad";
self._timeout_((10));
x=(0);
self["@flag"]=_st(self._async_((function(){
return smalltalk.withContext(function($ctx2) {
self._finished();
self["@flag"]="ok";
self["@flag"];
x=_st(x).__plus((1));
x;
return self._assert_equals_(x,(1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_((0));
self["@flag"]=_st(self._async_((function(){
return smalltalk.withContext(function($ctx2) {
self._finished();
self["@flag"]="ok";
self["@flag"];
x=_st(x).__plus((1));
x;
return self._assert_equals_(x,(1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_((0));
return self}, function($ctx1) {$ctx1.fill(self,"testTwoAsyncPassesWithFinishedOnlyOneIsRun",{x:x},smalltalk.SUnitAsyncTest)})},
messageSends: ["timeout:", "valueWithTimeout:", "async:", "finished", "+", "assert:equals:"]}),
smalltalk.SUnitAsyncTest);



