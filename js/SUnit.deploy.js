smalltalk.addPackage('SUnit', {});
smalltalk.addClass('ResultAnnouncement', smalltalk.Object, ['result'], 'SUnit');
smalltalk.addMethod(
"_result",
smalltalk.method({
selector: "result",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@result"];
}, self, "result", [], smalltalk.ResultAnnouncement)}
}),
smalltalk.ResultAnnouncement);

smalltalk.addMethod(
"_result_",
smalltalk.method({
selector: "result:",
fn: function (aTestResult){
var self=this;
return smalltalk.withContext(function($ctx) { self["@result"]=aTestResult;
return self}, self, "result:", [aTestResult], smalltalk.ResultAnnouncement)}
}),
smalltalk.ResultAnnouncement);



smalltalk.addClass('TestCase', smalltalk.Object, ['testSelector'], 'SUnit');
smalltalk.addMethod(
"_assert_",
smalltalk.method({
selector: "assert:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_description_(aBoolean,"Assertion failed");
return self}, self, "assert:", [aBoolean], smalltalk.TestCase)}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_assert_description_",
smalltalk.method({
selector: "assert:description:",
fn: function (aBoolean,aString){
var self=this;
return smalltalk.withContext(function($ctx) { if(! smalltalk.assert(aBoolean)){
_st(self)._signalFailure_(aString);
};
return self}, self, "assert:description:", [aBoolean,aString], smalltalk.TestCase)}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_assert_equals_",
smalltalk.method({
selector: "assert:equals:",
fn: function (expected,actual){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._assert_description_(_st(expected).__eq(actual),_st(_st(_st("Expected: ").__comma(_st(expected)._asString())).__comma(" but was: ")).__comma(_st(actual)._asString()));
return $1;
}, self, "assert:equals:", [expected,actual], smalltalk.TestCase)}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_deny_",
smalltalk.method({
selector: "deny:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(aBoolean)._not());
return self}, self, "deny:", [aBoolean], smalltalk.TestCase)}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_performTest",
smalltalk.method({
selector: "performTest",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._perform_(_st(self)._selector());
return self}, self, "performTest", [], smalltalk.TestCase)}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_runCase",
smalltalk.method({
selector: "runCase",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st((function(){
_st(self)._setUp();
return _st(self)._performTest();
}))._ensure_((function(){
return _st(self)._tearDown();
}));
return self}, self, "runCase", [], smalltalk.TestCase)}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@testSelector"];
}, self, "selector", [], smalltalk.TestCase)}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_setTestSelector_",
smalltalk.method({
selector: "setTestSelector:",
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx) { self["@testSelector"]=aSelector;
return self}, self, "setTestSelector:", [aSelector], smalltalk.TestCase)}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self}, self, "setUp", [], smalltalk.TestCase)}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_should_",
smalltalk.method({
selector: "should:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(aBlock)._value());
return self}, self, "should:", [aBlock], smalltalk.TestCase)}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_should_raise_",
smalltalk.method({
selector: "should:raise:",
fn: function (aBlock,anExceptionClass){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st((function(){
_st(aBlock)._value();
return false;
}))._on_do_(anExceptionClass,(function(ex){
return true;
})));
return self}, self, "should:raise:", [aBlock,anExceptionClass], smalltalk.TestCase)}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_shouldnt_raise_",
smalltalk.method({
selector: "shouldnt:raise:",
fn: function (aBlock,anExceptionClass){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st((function(){
_st(aBlock)._value();
return true;
}))._on_do_(anExceptionClass,(function(ex){
return false;
})));
return self}, self, "shouldnt:raise:", [aBlock,anExceptionClass], smalltalk.TestCase)}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_signalFailure_",
smalltalk.method({
selector: "signalFailure:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx) { var $1,$2;
$1=_st((smalltalk.TestFailure || TestFailure))._new();
_st($1)._messageText_(aString);
$2=_st($1)._signal();
return self}, self, "signalFailure:", [aString], smalltalk.TestCase)}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self}, self, "tearDown", [], smalltalk.TestCase)}
}),
smalltalk.TestCase);


smalltalk.addMethod(
"_allTestSelectors",
smalltalk.method({
selector: "allTestSelectors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
var selectors;
selectors=_st(self)._testSelectors();
$1=_st(self)._shouldInheritSelectors();
if(smalltalk.assert($1)){
_st(selectors)._addAll_(_st(_st(self)._superclass())._allTestSelectors());
};
return selectors;
}, self, "allTestSelectors", [], smalltalk.TestCase.klass)}
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_buildSuite",
smalltalk.method({
selector: "buildSuite",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._allTestSelectors())._collect_((function(each){
return _st(self)._selector_(each);
}));
return $1;
}, self, "buildSuite", [], smalltalk.TestCase.klass)}
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_isAbstract",
smalltalk.method({
selector: "isAbstract",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._name()).__eq("TestCase");
return $1;
}, self, "isAbstract", [], smalltalk.TestCase.klass)}
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_lookupHierarchyRoot",
smalltalk.method({
selector: "lookupHierarchyRoot",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return (smalltalk.TestCase || TestCase);
}, self, "lookupHierarchyRoot", [], smalltalk.TestCase.klass)}
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._setTestSelector_(aSelector);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "selector:", [aSelector], smalltalk.TestCase.klass)}
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_shouldInheritSelectors",
smalltalk.method({
selector: "shouldInheritSelectors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self).__tild_eq(_st(self)._lookupHierarchyRoot());
return $1;
}, self, "shouldInheritSelectors", [], smalltalk.TestCase.klass)}
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_testSelectors",
smalltalk.method({
selector: "testSelectors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(_st(self)._methodDictionary())._keys())._select_((function(each){
return _st(each)._match_("^test");
}));
return $1;
}, self, "testSelectors", [], smalltalk.TestCase.klass)}
}),
smalltalk.TestCase.klass);


smalltalk.addClass('TestFailure', smalltalk.Error, [], 'SUnit');


smalltalk.addClass('TestResult', smalltalk.Object, ['timestamp', 'runs', 'errors', 'failures', 'total'], 'SUnit');
smalltalk.addMethod(
"_addError_",
smalltalk.method({
selector: "addError:",
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx) { _st(_st(self)._errors())._add_(anError);
return self}, self, "addError:", [anError], smalltalk.TestResult)}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_addFailure_",
smalltalk.method({
selector: "addFailure:",
fn: function (aFailure){
var self=this;
return smalltalk.withContext(function($ctx) { _st(_st(self)._failures())._add_(aFailure);
return self}, self, "addFailure:", [aFailure], smalltalk.TestResult)}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_errors",
smalltalk.method({
selector: "errors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@errors"];
}, self, "errors", [], smalltalk.TestResult)}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_failures",
smalltalk.method({
selector: "failures",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@failures"];
}, self, "failures", [], smalltalk.TestResult)}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_increaseRuns",
smalltalk.method({
selector: "increaseRuns",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { self["@runs"]=_st(self["@runs"]).__plus((1));
return self}, self, "increaseRuns", [], smalltalk.TestResult)}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@timestamp"]=_st((smalltalk.Date || Date))._now();
self["@runs"]=(0);
self["@errors"]=_st((smalltalk.Array || Array))._new();
self["@failures"]=_st((smalltalk.Array || Array))._new();
self["@total"]=(0);
return self}, self, "initialize", [], smalltalk.TestResult)}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_nextRunDo_",
smalltalk.method({
selector: "nextRunDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { var $2,$1;
$2=_st(_st(self)._runs()).__eq_eq(_st(self)._total());
if(! smalltalk.assert($2)){
$1=_st(aBlock)._value_(_st(_st(self)._runs()).__plus((1)));
};
return $1;
}, self, "nextRunDo:", [aBlock], smalltalk.TestResult)}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_runCase_",
smalltalk.method({
selector: "runCase:",
fn: function (aTestCase){
var self=this;
return smalltalk.withContext(function($ctx) { _st((function(){
return _st((function(){
_st(self)._increaseRuns();
return _st(aTestCase)._runCase();
}))._on_do_((smalltalk.TestFailure || TestFailure),(function(ex){
return _st(self)._addFailure_(aTestCase);
}));
}))._on_do_((smalltalk.Error || Error),(function(ex){
return _st(self)._addError_(aTestCase);
}));
return self}, self, "runCase:", [aTestCase], smalltalk.TestResult)}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_runs",
smalltalk.method({
selector: "runs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@runs"];
}, self, "runs", [], smalltalk.TestResult)}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_status",
smalltalk.method({
selector: "status",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $2,$3,$1;
$2=_st(_st(self)._errors())._isEmpty();
if(smalltalk.assert($2)){
$3=_st(_st(self)._failures())._isEmpty();
if(smalltalk.assert($3)){
$1="success";
} else {
$1="failure";
};
} else {
$1="error";
};
return $1;
}, self, "status", [], smalltalk.TestResult)}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_timestamp",
smalltalk.method({
selector: "timestamp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@timestamp"];
}, self, "timestamp", [], smalltalk.TestResult)}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_total",
smalltalk.method({
selector: "total",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@total"];
}, self, "total", [], smalltalk.TestResult)}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_total_",
smalltalk.method({
selector: "total:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx) { self["@total"]=aNumber;
return self}, self, "total:", [aNumber], smalltalk.TestResult)}
}),
smalltalk.TestResult);



smalltalk.addClass('TestSuiteRunner', smalltalk.Object, ['suite', 'result', 'announcer'], 'SUnit');
smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@announcer"];
}, self, "announcer", [], smalltalk.TestSuiteRunner)}
}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@announcer"]=_st((smalltalk.Announcer || Announcer))._new();
self["@result"]=_st((smalltalk.TestResult || TestResult))._new();
return self}, self, "initialize", [], smalltalk.TestSuiteRunner)}
}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
"_result",
smalltalk.method({
selector: "result",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@result"];
}, self, "result", [], smalltalk.TestSuiteRunner)}
}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
"_run",
smalltalk.method({
selector: "run",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var worker;
_st(self["@result"])._total_(_st(self["@suite"])._size());
_st(self["@announcer"])._announce_(_st(_st((smalltalk.ResultAnnouncement || ResultAnnouncement))._new())._result_(self["@result"]));
worker=(function(){
return _st(self["@result"])._nextRunDo_((function(index){
return _st((function(){
return _st(self["@result"])._runCase_(_st(self["@suite"])._at_(index));
}))._ensure_((function(){
_st(worker)._valueWithTimeout_((0));
return _st(self["@announcer"])._announce_(_st(_st((smalltalk.ResultAnnouncement || ResultAnnouncement))._new())._result_(self["@result"]));
}));
}));
});
_st(_st(_st(self["@suite"])._size())._min_((25)))._timesRepeat_((function(){
return _st(worker)._valueWithTimeout_((0));
}));
return self}, self, "run", [], smalltalk.TestSuiteRunner)}
}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
"_suite_",
smalltalk.method({
selector: "suite:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx) { self["@suite"]=aCollection;
return self}, self, "suite:", [aCollection], smalltalk.TestSuiteRunner)}
}),
smalltalk.TestSuiteRunner);


smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._shouldNotImplement();
return self}, self, "new", [], smalltalk.TestSuiteRunner.klass)}
}),
smalltalk.TestSuiteRunner.klass);

smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(smalltalk.Object.klass.fn.prototype._new.apply(_st(self), []))._suite_(aCollection);
return $1;
}, self, "on:", [aCollection], smalltalk.TestSuiteRunner.klass)}
}),
smalltalk.TestSuiteRunner.klass);


