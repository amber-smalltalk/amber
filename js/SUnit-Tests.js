smalltalk.addPackage('SUnit-Tests');
smalltalk.addClass('ExampleSetTest', smalltalk.TestCase, ['empty', 'full'], 'SUnit-Tests');
smalltalk.ExampleSetTest.comment="ExampleSetTest is taken from Pharo 1.4.\x0a\x0aTHe purpose of this class is to demonstrate a simple use case of the test framework.";
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function (){
var self=this;
function $Set(){return smalltalk.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
self["@empty"]=_st($Set())._new();
self["@full"]=_st($Set())._with_with_((5),"abc");
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.ExampleSetTest)})},
args: [],
source: "setUp\x0a\x09empty := Set new.\x0a\x09full := Set with: 5 with: #abc",
messageSends: ["new", "with:with:"],
referencedClasses: ["Set"]
}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAdd",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@empty"])._add_((5));
self._assert_(_st(self["@empty"])._includes_((5)));
return self}, function($ctx1) {$ctx1.fill(self,"testAdd",{},smalltalk.ExampleSetTest)})},
args: [],
source: "testAdd\x0a\x09empty add: 5.\x0a\x09self assert: (empty includes: 5)",
messageSends: ["add:", "assert:", "includes:"],
referencedClasses: []
}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testGrow",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@empty"])._addAll_((1)._to_((100)));
self._assert_equals_(_st(self["@empty"])._size(),(100));
return self}, function($ctx1) {$ctx1.fill(self,"testGrow",{},smalltalk.ExampleSetTest)})},
args: [],
source: "testGrow\x0a\x09empty addAll: (1 to: 100).\x0a\x09self assert: empty size equals: 100",
messageSends: ["addAll:", "to:", "assert:equals:", "size"],
referencedClasses: []
}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIllegal",
category: 'tests',
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
args: [],
source: "testIllegal\x0a\x09self\x0a\x09\x09should: [empty at: 5]\x0a\x09\x09raise: Error.\x0a\x09self\x0a\x09\x09should: [empty at: 5 put: #abc]\x0a\x09\x09raise: Error",
messageSends: ["should:raise:", "at:", "at:put:"],
referencedClasses: ["Error"]
}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIncludes",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(self["@full"])._includes_((5)));
self._assert_(_st(self["@full"])._includes_("abc"));
return self}, function($ctx1) {$ctx1.fill(self,"testIncludes",{},smalltalk.ExampleSetTest)})},
args: [],
source: "testIncludes\x0a\x09self assert: (full includes: 5).\x0a\x09self assert: (full includes: #abc)",
messageSends: ["assert:", "includes:"],
referencedClasses: []
}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testOccurrences",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self["@empty"])._occurrencesOf_((0)),(0));
self._assert_equals_(_st(self["@full"])._occurrencesOf_((5)),(1));
_st(self["@full"])._add_((5));
self._assert_equals_(_st(self["@full"])._occurrencesOf_((5)),(1));
return self}, function($ctx1) {$ctx1.fill(self,"testOccurrences",{},smalltalk.ExampleSetTest)})},
args: [],
source: "testOccurrences\x0a\x09self assert: (empty occurrencesOf: 0) equals: 0.\x0a\x09self assert: (full occurrencesOf: 5) equals: 1.\x0a\x09full add: 5.\x0a\x09self assert: (full occurrencesOf: 5) equals: 1",
messageSends: ["assert:equals:", "occurrencesOf:", "add:"],
referencedClasses: []
}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRemove",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@full"])._remove_((5));
self._assert_(_st(self["@full"])._includes_("abc"));
self._deny_(_st(self["@full"])._includes_((5)));
return self}, function($ctx1) {$ctx1.fill(self,"testRemove",{},smalltalk.ExampleSetTest)})},
args: [],
source: "testRemove\x0a\x09full remove: 5.\x0a\x09self assert: (full includes: #abc).\x0a\x09self deny: (full includes: 5)",
messageSends: ["remove:", "assert:", "includes:", "deny:"],
referencedClasses: []
}),
smalltalk.ExampleSetTest);



smalltalk.addClass('SUnitAsyncTest', smalltalk.TestCase, ['flag'], 'SUnit-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "fakeError",
category: 'helpers',
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
args: [],
source: "fakeError\x0a\x09flag := 'bad'.\x0a\x09self timeout: 30.\x0a\x09flag := (self async: [ flag := 'ok'. self error: 'Intentional' ]) valueWithTimeout: 20",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "error:"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "fakeErrorFailingInTearDown",
category: 'helpers',
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
args: [],
source: "fakeErrorFailingInTearDown\x0a\x09flag := 'bad'.\x0a\x09self timeout: 30.\x0a\x09flag := (self async: [ self error: 'Intentional' ]) valueWithTimeout: 20",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "error:"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "fakeFailure",
category: 'helpers',
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
args: [],
source: "fakeFailure\x0a\x09flag := 'bad'.\x0a\x09self timeout: 30.\x0a\x09flag := (self async: [ flag := 'ok'. self assert: false ]) valueWithTimeout: 20",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "assert:"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "fakeMultipleTimeoutFailing",
category: 'helpers',
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
args: [],
source: "fakeMultipleTimeoutFailing\x0a\x09self timeout: 100.\x0a\x09(self async: [\x0a\x09\x09self timeout: 20.\x0a\x09\x09(self async: [ self finished ]) valueWithTimeout: 30\x0a\x09]) valueWithTimeout: 20",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "finished"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "fakeMultipleTimeoutPassing",
category: 'helpers',
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
args: [],
source: "fakeMultipleTimeoutPassing\x0a\x09self timeout: 20.\x0a\x09(self async: [\x0a\x09\x09self timeout: 40.\x0a\x09\x09(self async: [ self finished ]) valueWithTimeout: 20\x0a\x09]) valueWithTimeout: 10",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "finished"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "fakeTimeout",
category: 'helpers',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._timeout_((10));
_st(self._async_((function(){
return smalltalk.withContext(function($ctx2) {
return self._finished();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_((20));
return self}, function($ctx1) {$ctx1.fill(self,"fakeTimeout",{},smalltalk.SUnitAsyncTest)})},
args: [],
source: "fakeTimeout\x0a\x09self timeout: 10.\x0a\x09(self async: [ self finished ]) valueWithTimeout: 20",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "finished"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "selectorSetOf:",
category: 'private',
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
args: ["aCollection"],
source: "selectorSetOf: aCollection\x0a\x09^(aCollection collect: [:each | each selector]) asSet",
messageSends: ["asSet", "collect:", "selector"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@flag"]="ok";
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.SUnitAsyncTest)})},
args: [],
source: "setUp\x0a\x09flag := 'ok'",
messageSends: [],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "tearDown",
category: 'running',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_("ok",self["@flag"]);
return self}, function($ctx1) {$ctx1.fill(self,"tearDown",{},smalltalk.SUnitAsyncTest)})},
args: [],
source: "tearDown\x0a\x09self assert: 'ok' equals: flag",
messageSends: ["assert:equals:"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAsyncErrorsAndFailures",
category: 'tests',
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
args: [],
source: "testAsyncErrorsAndFailures\x0a\x09| suite runner result assertBlock |\x0a\x09suite := #('fakeError' 'fakeErrorFailingInTearDown' 'fakeFailure' 'testPass') collect: [ :each | self class selector: each ].\x0a\x09runner := TestSuiteRunner on: suite.\x0a\x09self timeout: 200.\x0a\x09result := runner result.\x0a\x09assertBlock := self async: [\x0a\x09\x09self assert: (self selectorSetOf: result errors) equals: #('fakeError') asSet.\x0a\x09\x09self assert: (self selectorSetOf: result failures) equals: #('fakeErrorFailingInTearDown' 'fakeFailure') asSet.\x0a\x09\x09self finished\x0a\x09].\x0a\x09runner announcer on: ResultAnnouncement do: [:ann |\x0a\x09\x09ann result == result ifTrue: [ result runs = result total ifTrue: assertBlock ]].\x0a\x09runner run",
messageSends: ["collect:", "selector:", "class", "on:", "timeout:", "result", "async:", "assert:equals:", "selectorSetOf:", "errors", "asSet", "failures", "finished", "on:do:", "ifTrue:", "=", "total", "runs", "==", "announcer", "run"],
referencedClasses: ["TestSuiteRunner", "ResultAnnouncement"]
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAsyncNeedsTimeout",
category: 'tests',
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
args: [],
source: "testAsyncNeedsTimeout\x0a\x09self should: [ self async: [ ] ] raise: Error.\x0a\x09self timeout: 0.\x0a\x09self shouldnt: [ self async: [ ] ] raise: Error.\x0a\x09self finished",
messageSends: ["should:raise:", "async:", "timeout:", "shouldnt:raise:", "finished"],
referencedClasses: ["Error"]
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testFinishedNeedsTimeout",
category: 'tests',
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
args: [],
source: "testFinishedNeedsTimeout\x0a\x09self should: [ self finished ] raise: Error.\x0a\x09self timeout: 0.\x0a\x09self shouldnt: [ self finished ] raise: Error.",
messageSends: ["should:raise:", "finished", "timeout:", "shouldnt:raise:"],
referencedClasses: ["Error"]
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIsAsyncReturnsCorrectValues",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._deny_(self._isAsync());
self._timeout_((0));
self._assert_(self._isAsync());
self._finished();
self._deny_(self._isAsync());
return self}, function($ctx1) {$ctx1.fill(self,"testIsAsyncReturnsCorrectValues",{},smalltalk.SUnitAsyncTest)})},
args: [],
source: "testIsAsyncReturnsCorrectValues\x0a\x09self deny: self isAsync.\x0a\x09self timeout: 0.\x0a\x09self assert: self isAsync.\x0a\x09self finished.\x0a\x09self deny: self isAsync",
messageSends: ["deny:", "isAsync", "timeout:", "assert:", "finished"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPass",
category: 'tests',
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
args: [],
source: "testPass\x0a\x09flag := 'bad'.\x0a\x09self timeout: 10.\x0a\x09flag := (self async: [ self assert: true. self finished. flag := 'ok' ]) valueWithTimeout: 5",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "assert:", "finished"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTimeouts",
category: 'tests',
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
args: [],
source: "testTimeouts\x0a\x09| suite runner result assertBlock |\x0a\x09suite := #('fakeTimeout' 'fakeMultipleTimeoutFailing' 'fakeMultipleTimeoutPassing' 'testPass') collect: [ :each | self class selector: each ].\x0a\x09runner := TestSuiteRunner on: suite.\x0a\x09self timeout: 200.\x0a\x09result := runner result.\x0a\x09assertBlock := self async: [\x0a\x09\x09self assert: (self selectorSetOf: result errors) equals: Set new.\x0a\x09\x09self assert: (self selectorSetOf: result failures) equals: #('fakeMultipleTimeoutFailing' 'fakeTimeout') asSet.\x0a\x09\x09self finished\x0a\x09].\x0a\x09runner announcer on: ResultAnnouncement do: [:ann |\x0a\x09\x09ann result == result ifTrue: [ result runs = result total ifTrue: assertBlock ]].\x0a\x09runner run",
messageSends: ["collect:", "selector:", "class", "on:", "timeout:", "result", "async:", "assert:equals:", "selectorSetOf:", "errors", "new", "failures", "asSet", "finished", "on:do:", "ifTrue:", "=", "total", "runs", "==", "announcer", "run"],
referencedClasses: ["TestSuiteRunner", "Set", "ResultAnnouncement"]
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTwoAsyncPassesWithFinishedOnlyOneIsRun",
category: 'tests',
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
args: [],
source: "testTwoAsyncPassesWithFinishedOnlyOneIsRun\x0a\x09| x |\x0a\x09flag := 'bad'.\x0a\x09self timeout: 10.\x0a\x09x := 0.\x0a\x09flag := (self async: [ self finished. flag := 'ok'. x := x+1. self assert: x equals: 1 ]) valueWithTimeout: 0.\x0a\x09flag := (self async: [ self finished. flag := 'ok'. x := x+1. self assert: x equals: 1 ]) valueWithTimeout: 0.",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "finished", "+", "assert:equals:"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);



