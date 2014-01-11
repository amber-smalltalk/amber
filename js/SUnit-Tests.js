define("amber_core/SUnit-Tests", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/SUnit"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('SUnit-Tests');
smalltalk.packages["SUnit-Tests"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('ExampleSetTest', globals.TestCase, ['empty', 'full'], 'SUnit-Tests');
globals.ExampleSetTest.comment="ExampleSetTest is taken from Pharo 1.4.\x0a\x0aTHe purpose of this class is to demonstrate a simple use case of the test framework.";
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
protocol: 'running',
fn: function (){
var self=this;
function $Set(){return globals.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
self["@empty"]=_st($Set())._new();
self["@full"]=_st($Set())._with_with_((5),"abc");
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},globals.ExampleSetTest)})},
args: [],
source: "setUp\x0a\x09empty := Set new.\x0a\x09full := Set with: 5 with: #abc",
messageSends: ["new", "with:with:"],
referencedClasses: ["Set"]
}),
globals.ExampleSetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAdd",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@empty"])._add_((5));
self._assert_(_st(self["@empty"])._includes_((5)));
return self}, function($ctx1) {$ctx1.fill(self,"testAdd",{},globals.ExampleSetTest)})},
args: [],
source: "testAdd\x0a\x09empty add: 5.\x0a\x09self assert: (empty includes: 5)",
messageSends: ["add:", "assert:", "includes:"],
referencedClasses: []
}),
globals.ExampleSetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testGrow",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@empty"])._addAll_((1)._to_((100)));
self._assert_equals_(_st(self["@empty"])._size(),(100));
return self}, function($ctx1) {$ctx1.fill(self,"testGrow",{},globals.ExampleSetTest)})},
args: [],
source: "testGrow\x0a\x09empty addAll: (1 to: 100).\x0a\x09self assert: empty size equals: 100",
messageSends: ["addAll:", "to:", "assert:equals:", "size"],
referencedClasses: []
}),
globals.ExampleSetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIllegal",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@empty"])._at_((5));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$Error());
$ctx1.sendIdx["should:raise:"]=1;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@empty"])._at_put_((5),"abc");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testIllegal",{},globals.ExampleSetTest)})},
args: [],
source: "testIllegal\x0a\x09self\x0a\x09\x09should: [ empty at: 5 ]\x0a\x09\x09raise: Error.\x0a\x09self\x0a\x09\x09should: [ empty at: 5 put: #abc ]\x0a\x09\x09raise: Error",
messageSends: ["should:raise:", "at:", "at:put:"],
referencedClasses: ["Error"]
}),
globals.ExampleSetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIncludes",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@full"])._includes_((5));
$ctx1.sendIdx["includes:"]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
self._assert_(_st(self["@full"])._includes_("abc"));
return self}, function($ctx1) {$ctx1.fill(self,"testIncludes",{},globals.ExampleSetTest)})},
args: [],
source: "testIncludes\x0a\x09self assert: (full includes: 5).\x0a\x09self assert: (full includes: #abc)",
messageSends: ["assert:", "includes:"],
referencedClasses: []
}),
globals.ExampleSetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testOccurrences",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@empty"])._occurrencesOf_((0));
$ctx1.sendIdx["occurrencesOf:"]=1;
self._assert_equals_($1,(0));
$ctx1.sendIdx["assert:equals:"]=1;
$2=_st(self["@full"])._occurrencesOf_((5));
$ctx1.sendIdx["occurrencesOf:"]=2;
self._assert_equals_($2,(1));
$ctx1.sendIdx["assert:equals:"]=2;
_st(self["@full"])._add_((5));
self._assert_equals_(_st(self["@full"])._occurrencesOf_((5)),(1));
return self}, function($ctx1) {$ctx1.fill(self,"testOccurrences",{},globals.ExampleSetTest)})},
args: [],
source: "testOccurrences\x0a\x09self assert: (empty occurrencesOf: 0) equals: 0.\x0a\x09self assert: (full occurrencesOf: 5) equals: 1.\x0a\x09full add: 5.\x0a\x09self assert: (full occurrencesOf: 5) equals: 1",
messageSends: ["assert:equals:", "occurrencesOf:", "add:"],
referencedClasses: []
}),
globals.ExampleSetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRemove",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@full"])._remove_((5));
$1=_st(self["@full"])._includes_("abc");
$ctx1.sendIdx["includes:"]=1;
self._assert_($1);
self._deny_(_st(self["@full"])._includes_((5)));
return self}, function($ctx1) {$ctx1.fill(self,"testRemove",{},globals.ExampleSetTest)})},
args: [],
source: "testRemove\x0a\x09full remove: 5.\x0a\x09self assert: (full includes: #abc).\x0a\x09self deny: (full includes: 5)",
messageSends: ["remove:", "assert:", "includes:", "deny:"],
referencedClasses: []
}),
globals.ExampleSetTest);



smalltalk.addClass('SUnitAsyncTest', globals.TestCase, ['flag'], 'SUnit-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "fakeError",
protocol: 'helpers',
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})})))._valueWithTimeout_((20));
return self}, function($ctx1) {$ctx1.fill(self,"fakeError",{},globals.SUnitAsyncTest)})},
args: [],
source: "fakeError\x0a\x09flag := 'bad'.\x0a\x09self timeout: 30.\x0a\x09flag := (self async: [ flag := 'ok'. self error: 'Intentional' ]) valueWithTimeout: 20",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "error:"],
referencedClasses: []
}),
globals.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "fakeErrorFailingInTearDown",
protocol: 'helpers',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@flag"]="bad";
self._timeout_((30));
self["@flag"]=_st(self._async_((function(){
return smalltalk.withContext(function($ctx2) {
return self._error_("Intentional");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})})))._valueWithTimeout_((20));
return self}, function($ctx1) {$ctx1.fill(self,"fakeErrorFailingInTearDown",{},globals.SUnitAsyncTest)})},
args: [],
source: "fakeErrorFailingInTearDown\x0a\x09flag := 'bad'.\x0a\x09self timeout: 30.\x0a\x09flag := (self async: [ self error: 'Intentional' ]) valueWithTimeout: 20",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "error:"],
referencedClasses: []
}),
globals.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "fakeFailure",
protocol: 'helpers',
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})})))._valueWithTimeout_((20));
return self}, function($ctx1) {$ctx1.fill(self,"fakeFailure",{},globals.SUnitAsyncTest)})},
args: [],
source: "fakeFailure\x0a\x09flag := 'bad'.\x0a\x09self timeout: 30.\x0a\x09flag := (self async: [ flag := 'ok'. self assert: false ]) valueWithTimeout: 20",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "assert:"],
referencedClasses: []
}),
globals.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "fakeMultipleTimeoutFailing",
protocol: 'helpers',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._timeout_((100));
$ctx1.sendIdx["timeout:"]=1;
$1=self._async_((function(){
return smalltalk.withContext(function($ctx2) {
self._timeout_((20));
return _st(self._async_((function(){
return smalltalk.withContext(function($ctx3) {
return self._finished();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})})))._valueWithTimeout_((30));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["async:"]=1;
_st($1)._valueWithTimeout_((20));
$ctx1.sendIdx["valueWithTimeout:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"fakeMultipleTimeoutFailing",{},globals.SUnitAsyncTest)})},
args: [],
source: "fakeMultipleTimeoutFailing\x0a\x09self timeout: 100.\x0a\x09(self async: [ \x0a\x09\x09self timeout: 20.\x0a\x09\x09(self async: [ self finished ]) valueWithTimeout: 30\x0a\x09]) valueWithTimeout: 20",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "finished"],
referencedClasses: []
}),
globals.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "fakeMultipleTimeoutPassing",
protocol: 'helpers',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._timeout_((20));
$ctx1.sendIdx["timeout:"]=1;
$1=self._async_((function(){
return smalltalk.withContext(function($ctx2) {
self._timeout_((40));
return _st(self._async_((function(){
return smalltalk.withContext(function($ctx3) {
return self._finished();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})})))._valueWithTimeout_((20));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["async:"]=1;
_st($1)._valueWithTimeout_((10));
$ctx1.sendIdx["valueWithTimeout:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"fakeMultipleTimeoutPassing",{},globals.SUnitAsyncTest)})},
args: [],
source: "fakeMultipleTimeoutPassing\x0a\x09self timeout: 20.\x0a\x09(self async: [\x0a\x09\x09self timeout: 40.\x0a\x09\x09(self async: [ self finished ]) valueWithTimeout: 20\x0a\x09]) valueWithTimeout: 10",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "finished"],
referencedClasses: []
}),
globals.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "fakeTimeout",
protocol: 'helpers',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._timeout_((10));
_st(self._async_((function(){
return smalltalk.withContext(function($ctx2) {
return self._finished();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})})))._valueWithTimeout_((20));
return self}, function($ctx1) {$ctx1.fill(self,"fakeTimeout",{},globals.SUnitAsyncTest)})},
args: [],
source: "fakeTimeout\x0a\x09self timeout: 10.\x0a\x09(self async: [ self finished ]) valueWithTimeout: 20",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "finished"],
referencedClasses: []
}),
globals.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "selectorSetOf:",
protocol: 'private',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aCollection)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._selector();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})))._asSet();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectorSetOf:",{aCollection:aCollection},globals.SUnitAsyncTest)})},
args: ["aCollection"],
source: "selectorSetOf: aCollection\x0a\x09^ (aCollection collect: [ :each | each selector ]) asSet",
messageSends: ["asSet", "collect:", "selector"],
referencedClasses: []
}),
globals.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
protocol: 'running',
fn: function (){
var self=this;
self["@flag"]="ok";
return self},
args: [],
source: "setUp\x0a\x09flag := 'ok'",
messageSends: [],
referencedClasses: []
}),
globals.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "tearDown",
protocol: 'running',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_("ok",self["@flag"]);
return self}, function($ctx1) {$ctx1.fill(self,"tearDown",{},globals.SUnitAsyncTest)})},
args: [],
source: "tearDown\x0a\x09self assert: 'ok' equals: flag",
messageSends: ["assert:equals:"],
referencedClasses: []
}),
globals.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAsyncErrorsAndFailures",
protocol: 'tests',
fn: function (){
var self=this;
var suite,runner,result,assertBlock;
function $TestSuiteRunner(){return globals.TestSuiteRunner||(typeof TestSuiteRunner=="undefined"?nil:TestSuiteRunner)}
function $ResultAnnouncement(){return globals.ResultAnnouncement||(typeof ResultAnnouncement=="undefined"?nil:ResultAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
suite=["fakeError", "fakeErrorFailingInTearDown", "fakeFailure", "testPass"]._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self._class())._selector_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
runner=_st($TestSuiteRunner())._on_(suite);
self._timeout_((200));
result=_st(runner)._result();
$ctx1.sendIdx["result"]=1;
assertBlock=self._async_((function(){
return smalltalk.withContext(function($ctx2) {
$1=self._selectorSetOf_(_st(result)._errors());
$ctx2.sendIdx["selectorSetOf:"]=1;
$2=["fakeError"]._asSet();
$ctx2.sendIdx["asSet"]=1;
self._assert_equals_($1,$2);
$ctx2.sendIdx["assert:equals:"]=1;
self._assert_equals_(self._selectorSetOf_(_st(result)._failures()),["fakeErrorFailingInTearDown", "fakeFailure"]._asSet());
return self._finished();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
_st(_st(runner)._announcer())._on_do_($ResultAnnouncement(),(function(ann){
return smalltalk.withContext(function($ctx2) {
$3=_st(_st(ann)._result()).__eq_eq(result);
if(smalltalk.assert($3)){
$4=_st(_st(result)._runs()).__eq(_st(result)._total());
return _st($4)._ifTrue_(assertBlock);
};
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1,3)})}));
_st(runner)._run();
return self}, function($ctx1) {$ctx1.fill(self,"testAsyncErrorsAndFailures",{suite:suite,runner:runner,result:result,assertBlock:assertBlock},globals.SUnitAsyncTest)})},
args: [],
source: "testAsyncErrorsAndFailures\x0a\x09| suite runner result assertBlock |\x0a\x09suite := #('fakeError' 'fakeErrorFailingInTearDown' 'fakeFailure' 'testPass') collect: [ :each | self class selector: each ].\x0a\x09runner := TestSuiteRunner on: suite.\x0a\x09self timeout: 200.\x0a\x09result := runner result.\x0a\x09assertBlock := self async: [\x0a\x09\x09self assert: (self selectorSetOf: result errors) equals: #('fakeError') asSet.\x0a\x09\x09self assert: (self selectorSetOf: result failures) equals: #('fakeErrorFailingInTearDown' 'fakeFailure') asSet.\x0a\x09\x09self finished\x0a\x09].\x0a\x09runner announcer on: ResultAnnouncement do: [ :ann |\x0a\x09\x09ann result == result ifTrue: [ result runs = result total ifTrue: assertBlock ] ].\x0a\x09runner run",
messageSends: ["collect:", "selector:", "class", "on:", "timeout:", "result", "async:", "assert:equals:", "selectorSetOf:", "errors", "asSet", "failures", "finished", "on:do:", "announcer", "ifTrue:", "==", "=", "runs", "total", "run"],
referencedClasses: ["TestSuiteRunner", "ResultAnnouncement"]
}),
globals.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAsyncNeedsTimeout",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return self._async_((function(){
}));
$ctx2.sendIdx["async:"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$Error());
self._timeout_((0));
self._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return self._async_((function(){
}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}),$Error());
self._finished();
return self}, function($ctx1) {$ctx1.fill(self,"testAsyncNeedsTimeout",{},globals.SUnitAsyncTest)})},
args: [],
source: "testAsyncNeedsTimeout\x0a\x09self should: [ self async: [ ] ] raise: Error.\x0a\x09self timeout: 0.\x0a\x09self shouldnt: [ self async: [ ] ] raise: Error.\x0a\x09self finished",
messageSends: ["should:raise:", "async:", "timeout:", "shouldnt:raise:", "finished"],
referencedClasses: ["Error"]
}),
globals.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testFinishedNeedsTimeout",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return self._finished();
$ctx2.sendIdx["finished"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$Error());
self._timeout_((0));
self._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return self._finished();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testFinishedNeedsTimeout",{},globals.SUnitAsyncTest)})},
args: [],
source: "testFinishedNeedsTimeout\x0a\x09self should: [ self finished ] raise: Error.\x0a\x09self timeout: 0.\x0a\x09self shouldnt: [ self finished ] raise: Error.",
messageSends: ["should:raise:", "finished", "timeout:", "shouldnt:raise:"],
referencedClasses: ["Error"]
}),
globals.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIsAsyncReturnsCorrectValues",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._isAsync();
$ctx1.sendIdx["isAsync"]=1;
self._deny_($1);
$ctx1.sendIdx["deny:"]=1;
self._timeout_((0));
$2=self._isAsync();
$ctx1.sendIdx["isAsync"]=2;
self._assert_($2);
self._finished();
self._deny_(self._isAsync());
return self}, function($ctx1) {$ctx1.fill(self,"testIsAsyncReturnsCorrectValues",{},globals.SUnitAsyncTest)})},
args: [],
source: "testIsAsyncReturnsCorrectValues\x0a\x09self deny: self isAsync.\x0a\x09self timeout: 0.\x0a\x09self assert: self isAsync.\x0a\x09self finished.\x0a\x09self deny: self isAsync",
messageSends: ["deny:", "isAsync", "timeout:", "assert:", "finished"],
referencedClasses: []
}),
globals.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPass",
protocol: 'tests',
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})})))._valueWithTimeout_((5));
return self}, function($ctx1) {$ctx1.fill(self,"testPass",{},globals.SUnitAsyncTest)})},
args: [],
source: "testPass\x0a\x09flag := 'bad'.\x0a\x09self timeout: 10.\x0a\x09flag := (self async: [ self assert: true. self finished. flag := 'ok' ]) valueWithTimeout: 5",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "assert:", "finished"],
referencedClasses: []
}),
globals.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTimeouts",
protocol: 'tests',
fn: function (){
var self=this;
var suite,runner,result,assertBlock;
function $TestSuiteRunner(){return globals.TestSuiteRunner||(typeof TestSuiteRunner=="undefined"?nil:TestSuiteRunner)}
function $Set(){return globals.Set||(typeof Set=="undefined"?nil:Set)}
function $ResultAnnouncement(){return globals.ResultAnnouncement||(typeof ResultAnnouncement=="undefined"?nil:ResultAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
suite=["fakeTimeout", "fakeMultipleTimeoutFailing", "fakeMultipleTimeoutPassing", "testPass"]._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self._class())._selector_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
runner=_st($TestSuiteRunner())._on_(suite);
self._timeout_((200));
result=_st(runner)._result();
$ctx1.sendIdx["result"]=1;
assertBlock=self._async_((function(){
return smalltalk.withContext(function($ctx2) {
$1=self._selectorSetOf_(_st(result)._errors());
$ctx2.sendIdx["selectorSetOf:"]=1;
self._assert_equals_($1,_st($Set())._new());
$ctx2.sendIdx["assert:equals:"]=1;
self._assert_equals_(self._selectorSetOf_(_st(result)._failures()),["fakeMultipleTimeoutFailing", "fakeTimeout"]._asSet());
return self._finished();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
_st(_st(runner)._announcer())._on_do_($ResultAnnouncement(),(function(ann){
return smalltalk.withContext(function($ctx2) {
$2=_st(_st(ann)._result()).__eq_eq(result);
if(smalltalk.assert($2)){
$3=_st(_st(result)._runs()).__eq(_st(result)._total());
return _st($3)._ifTrue_(assertBlock);
};
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1,3)})}));
_st(runner)._run();
return self}, function($ctx1) {$ctx1.fill(self,"testTimeouts",{suite:suite,runner:runner,result:result,assertBlock:assertBlock},globals.SUnitAsyncTest)})},
args: [],
source: "testTimeouts\x0a\x09| suite runner result assertBlock |\x0a\x09suite := #('fakeTimeout' 'fakeMultipleTimeoutFailing' 'fakeMultipleTimeoutPassing' 'testPass') collect: [ :each | self class selector: each ].\x0a\x09runner := TestSuiteRunner on: suite.\x0a\x09self timeout: 200.\x0a\x09result := runner result.\x0a\x09assertBlock := self async: [\x0a\x09\x09self assert: (self selectorSetOf: result errors) equals: Set new.\x0a\x09\x09self assert: (self selectorSetOf: result failures) equals: #('fakeMultipleTimeoutFailing' 'fakeTimeout') asSet.\x0a\x09\x09self finished\x0a\x09].\x0a\x09runner announcer on: ResultAnnouncement do: [ :ann |\x0a\x09\x09ann result == result ifTrue: [ result runs = result total ifTrue: assertBlock ] ].\x0a\x09runner run",
messageSends: ["collect:", "selector:", "class", "on:", "timeout:", "result", "async:", "assert:equals:", "selectorSetOf:", "errors", "new", "failures", "asSet", "finished", "on:do:", "announcer", "ifTrue:", "==", "=", "runs", "total", "run"],
referencedClasses: ["TestSuiteRunner", "Set", "ResultAnnouncement"]
}),
globals.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTwoAsyncPassesWithFinishedOnlyOneIsRun",
protocol: 'tests',
fn: function (){
var self=this;
var x;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@flag"]="bad";
self._timeout_((10));
x=(0);
$1=self._async_((function(){
return smalltalk.withContext(function($ctx2) {
self._finished();
$ctx2.sendIdx["finished"]=1;
self["@flag"]="ok";
self["@flag"];
x=_st(x).__plus((1));
$ctx2.sendIdx["+"]=1;
x;
return self._assert_equals_(x,(1));
$ctx2.sendIdx["assert:equals:"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["async:"]=1;
self["@flag"]=_st($1)._valueWithTimeout_((0));
$ctx1.sendIdx["valueWithTimeout:"]=1;
self["@flag"]=_st(self._async_((function(){
return smalltalk.withContext(function($ctx2) {
self._finished();
self["@flag"]="ok";
self["@flag"];
x=_st(x).__plus((1));
x;
return self._assert_equals_(x,(1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})})))._valueWithTimeout_((0));
return self}, function($ctx1) {$ctx1.fill(self,"testTwoAsyncPassesWithFinishedOnlyOneIsRun",{x:x},globals.SUnitAsyncTest)})},
args: [],
source: "testTwoAsyncPassesWithFinishedOnlyOneIsRun\x0a\x09| x |\x0a\x09flag := 'bad'.\x0a\x09self timeout: 10.\x0a\x09x := 0.\x0a\x09flag := (self async: [ self finished. flag := 'ok'. x := x+1. self assert: x equals: 1 ]) valueWithTimeout: 0.\x0a\x09flag := (self async: [ self finished. flag := 'ok'. x := x+1. self assert: x equals: 1 ]) valueWithTimeout: 0.",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "finished", "+", "assert:equals:"],
referencedClasses: []
}),
globals.SUnitAsyncTest);


});
