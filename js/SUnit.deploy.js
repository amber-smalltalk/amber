smalltalk.addPackage('SUnit', {});
smalltalk.addClass('ResultAnnouncement', smalltalk.Object, ['result'], 'SUnit');
smalltalk.addMethod(
"_result",
smalltalk.method({
selector: "result",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@result"];
return $1;
}, self, "result", [], smalltalk.ResultAnnouncement)}
}),
smalltalk.ResultAnnouncement);

smalltalk.addMethod(
"_result_",
smalltalk.method({
selector: "result:",
fn: function (aTestResult){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@result"]=aTestResult;
return self}, self, "result:", [aTestResult], smalltalk.ResultAnnouncement)}
}),
smalltalk.ResultAnnouncement);



smalltalk.addClass('TestCase', smalltalk.Object, ['testSelector', 'asyncTimeout', 'context'], 'SUnit');
smalltalk.addMethod(
"_assert_",
smalltalk.method({
selector: "assert:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_description_(aBoolean,"Assertion failed");
return self}, self, "assert:", [aBoolean], smalltalk.TestCase)}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_assert_description_",
smalltalk.method({
selector: "assert:description:",
fn: function (aBoolean,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=aBoolean;
if(! smalltalk.assert($1)){
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._assert_description_(_st(expected).__eq(actual),_st(_st(_st("Expected: ").__comma(_st(expected)._asString())).__comma(" but was: ")).__comma(_st(actual)._asString()));
return $1;
}, self, "assert:equals:", [expected,actual], smalltalk.TestCase)}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_async_",
smalltalk.method({
selector: "async:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$ctx1.locals.c=nil;
_st(self)._errorIfNotAsync_("#async");
$ctx1.locals.c=self["@context"];
$1=(function(){
return smalltalk.withContext(function($ctx2) { $2=_st(self)._isAsync();
if(smalltalk.assert($2)){
return _st($ctx1.locals.c)._execute_(aBlock);
};
})});
return $1;
}, self, "async:", [aBlock], smalltalk.TestCase)}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_context_",
smalltalk.method({
selector: "context:",
fn: function (aRunningTestContext){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@context"]=aRunningTestContext;
return self}, self, "context:", [aRunningTestContext], smalltalk.TestCase)}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_deny_",
smalltalk.method({
selector: "deny:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(aBoolean)._not());
return self}, self, "deny:", [aBoolean], smalltalk.TestCase)}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_errorIfNotAsync_",
smalltalk.method({
selector: "errorIfNotAsync:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._isAsync();
if(! smalltalk.assert($1)){
_st(self)._error_(_st(aString).__comma(" used without prior #timeout:"));
};
return self}, self, "errorIfNotAsync:", [aString], smalltalk.TestCase)}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_finished",
smalltalk.method({
selector: "finished",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._errorIfNotAsync_("#finished");
self["@asyncTimeout"]=nil;
return self}, self, "finished", [], smalltalk.TestCase)}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_isAsync",
smalltalk.method({
selector: "isAsync",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@asyncTimeout"])._notNil();
return $1;
}, self, "isAsync", [], smalltalk.TestCase)}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_performTest",
smalltalk.method({
selector: "performTest",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@asyncTimeout"]=nil;
_st(self)._perform_(_st(self)._selector());
return self}, self, "performTest", [], smalltalk.TestCase)}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_runCase",
smalltalk.method({
selector: "runCase",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.TestContext || TestContext))._testCase_(self))._start();
return self}, self, "runCase", [], smalltalk.TestCase)}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@testSelector"];
return $1;
}, self, "selector", [], smalltalk.TestCase)}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_setTestSelector_",
smalltalk.method({
selector: "setTestSelector:",
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@testSelector"]=aSelector;
return self}, self, "setTestSelector:", [aSelector], smalltalk.TestCase)}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, self, "setUp", [], smalltalk.TestCase)}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_should_",
smalltalk.method({
selector: "should:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(aBlock)._value());
return self}, self, "should:", [aBlock], smalltalk.TestCase)}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_should_raise_",
smalltalk.method({
selector: "should:raise:",
fn: function (aBlock,anExceptionClass){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st((function(){
return smalltalk.withContext(function($ctx2) { _st(aBlock)._value();
return false;
})}))._on_do_(anExceptionClass,(function(ex){
return smalltalk.withContext(function($ctx2) { return true;
})})));
return self}, self, "should:raise:", [aBlock,anExceptionClass], smalltalk.TestCase)}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_shouldnt_raise_",
smalltalk.method({
selector: "shouldnt:raise:",
fn: function (aBlock,anExceptionClass){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st((function(){
return smalltalk.withContext(function($ctx2) { _st(aBlock)._value();
return true;
})}))._on_do_(anExceptionClass,(function(ex){
return smalltalk.withContext(function($ctx2) { return false;
})})));
return self}, self, "shouldnt:raise:", [aBlock,anExceptionClass], smalltalk.TestCase)}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_signalFailure_",
smalltalk.method({
selector: "signalFailure:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
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
return smalltalk.withContext(function($ctx1) { return self}, self, "tearDown", [], smalltalk.TestCase)}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_timeout_",
smalltalk.method({
selector: "timeout:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@asyncTimeout"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self["@asyncTimeout"])._clearTimeout();
};
self["@asyncTimeout"]=(0);
self["@asyncTimeout"]=_st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._assert_description_(false,"SUnit grace time exhausted");
})})))._valueWithTimeout_(aNumber);
return self}, self, "timeout:", [aNumber], smalltalk.TestCase)}
}),
smalltalk.TestCase);


smalltalk.addMethod(
"_allTestSelectors",
smalltalk.method({
selector: "allTestSelectors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$ctx1.locals.selectors=nil;
$ctx1.locals.selectors=_st(self)._testSelectors();
$1=_st(self)._shouldInheritSelectors();
if(smalltalk.assert($1)){
_st($ctx1.locals.selectors)._addAll_(_st(_st(self)._superclass())._allTestSelectors());
};
$2=$ctx1.locals.selectors;
return $2;
}, self, "allTestSelectors", [], smalltalk.TestCase.klass)}
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_buildSuite",
smalltalk.method({
selector: "buildSuite",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._allTestSelectors())._collect_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(self)._selector_(each);
})}));
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
return smalltalk.withContext(function($ctx1) { var $1;
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=(smalltalk.TestCase || TestCase);
return $1;
}, self, "lookupHierarchyRoot", [], smalltalk.TestCase.klass)}
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
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
return smalltalk.withContext(function($ctx1) { var $1;
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._methodDictionary())._keys())._select_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(each)._match_("^test");
})}));
return $1;
}, self, "testSelectors", [], smalltalk.TestCase.klass)}
}),
smalltalk.TestCase.klass);


smalltalk.addClass('TestContext', smalltalk.Object, ['testCase'], 'SUnit');
smalltalk.addMethod(
"_execute_",
smalltalk.method({
selector: "execute:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$2;
$ctx1.locals.failed=nil;
_st(self["@testCase"])._context_(self);
$1=(function(){
return smalltalk.withContext(function($ctx2) { $ctx1.locals.failed=true;
$ctx1.locals.failed;
_st(aBlock)._value();
$ctx1.locals.failed=false;
return $ctx1.locals.failed;
})});
$2=(function(){
return smalltalk.withContext(function($ctx2) { _st(self["@testCase"])._context_(nil);
$3=_st($ctx1.locals.failed)._and_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self["@testCase"])._isAsync();
})}));
if(smalltalk.assert($3)){
_st(self["@testCase"])._finished();
};
$4=_st(self["@testCase"])._isAsync();
if(! smalltalk.assert($4)){
return _st(self["@testCase"])._tearDown();
};
})});
_st($1)._ensure_($2);
return self}, self, "execute:", [aBlock], smalltalk.TestContext)}
}),
smalltalk.TestContext);

smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._execute_((function(){
return smalltalk.withContext(function($ctx2) { _st(self["@testCase"])._setUp();
return _st(self["@testCase"])._performTest();
})}));
return self}, self, "start", [], smalltalk.TestContext)}
}),
smalltalk.TestContext);

smalltalk.addMethod(
"_testCase_",
smalltalk.method({
selector: "testCase:",
fn: function (aTestCase){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@testCase"]=aTestCase;
return self}, self, "testCase:", [aTestCase], smalltalk.TestContext)}
}),
smalltalk.TestContext);


smalltalk.addMethod(
"_testCase_",
smalltalk.method({
selector: "testCase:",
fn: function (aTestCase){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._testCase_(aTestCase);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "testCase:", [aTestCase], smalltalk.TestContext.klass)}
}),
smalltalk.TestContext.klass);


smalltalk.addClass('ReportingTestContext', smalltalk.TestContext, ['finished', 'result'], 'SUnit');
smalltalk.addMethod(
"_execute_",
smalltalk.method({
selector: "execute:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$2;
$1=(function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._withErrorReporting_((function(){
return smalltalk.withContext(function($ctx3) { return smalltalk.TestContext.fn.prototype._execute_.apply(_st(self), [aBlock]);
})}));
})});
$2=(function(){
return smalltalk.withContext(function($ctx2) { $3=_st(self["@testCase"])._isAsync();
if(! smalltalk.assert($3)){
_st(self["@result"])._increaseRuns();
return _st(self["@finished"])._value();
};
})});
_st($1)._ensure_($2);
return self}, self, "execute:", [aBlock], smalltalk.ReportingTestContext)}
}),
smalltalk.ReportingTestContext);

smalltalk.addMethod(
"_finished_",
smalltalk.method({
selector: "finished:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@finished"]=aBlock;
return self}, self, "finished:", [aBlock], smalltalk.ReportingTestContext)}
}),
smalltalk.ReportingTestContext);

smalltalk.addMethod(
"_result_",
smalltalk.method({
selector: "result:",
fn: function (aTestResult){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@result"]=aTestResult;
return self}, self, "result:", [aTestResult], smalltalk.ReportingTestContext)}
}),
smalltalk.ReportingTestContext);

smalltalk.addMethod(
"_withErrorReporting_",
smalltalk.method({
selector: "withErrorReporting:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((function(){
return smalltalk.withContext(function($ctx2) { return _st(aBlock)._on_do_((smalltalk.TestFailure || TestFailure),(function(ex){
return smalltalk.withContext(function($ctx3) { return _st(self["@result"])._addFailure_(self["@testCase"]);
})}));
})}))._on_do_((smalltalk.Error || Error),(function(ex){
return smalltalk.withContext(function($ctx2) { return _st(self["@result"])._addError_(self["@testCase"]);
})}));
return self}, self, "withErrorReporting:", [aBlock], smalltalk.ReportingTestContext)}
}),
smalltalk.ReportingTestContext);


smalltalk.addMethod(
"_testCase_result_finished_",
smalltalk.method({
selector: "testCase:result:finished:",
fn: function (aTestCase,aTestResult,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=smalltalk.TestContext.klass.fn.prototype._testCase_.apply(_st(self), [aTestCase]);
_st($2)._result_(aTestResult);
_st($2)._finished_(aBlock);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "testCase:result:finished:", [aTestCase,aTestResult,aBlock], smalltalk.ReportingTestContext.klass)}
}),
smalltalk.ReportingTestContext.klass);


smalltalk.addClass('TestFailure', smalltalk.Error, [], 'SUnit');


smalltalk.addClass('TestResult', smalltalk.Object, ['timestamp', 'runs', 'errors', 'failures', 'total'], 'SUnit');
smalltalk.addMethod(
"_addError_",
smalltalk.method({
selector: "addError:",
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._errors())._add_(anError);
return self}, self, "addError:", [anError], smalltalk.TestResult)}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_addFailure_",
smalltalk.method({
selector: "addFailure:",
fn: function (aFailure){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._failures())._add_(aFailure);
return self}, self, "addFailure:", [aFailure], smalltalk.TestResult)}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_errors",
smalltalk.method({
selector: "errors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@errors"];
return $1;
}, self, "errors", [], smalltalk.TestResult)}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_failures",
smalltalk.method({
selector: "failures",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@failures"];
return $1;
}, self, "failures", [], smalltalk.TestResult)}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_increaseRuns",
smalltalk.method({
selector: "increaseRuns",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@runs"]=_st(self["@runs"]).__plus((1));
return self}, self, "increaseRuns", [], smalltalk.TestResult)}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
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
return smalltalk.withContext(function($ctx1) { var $2,$1;
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
return smalltalk.withContext(function($ctx1) { _st((function(){
return smalltalk.withContext(function($ctx2) { return _st((function(){
return smalltalk.withContext(function($ctx3) { _st(self)._increaseRuns();
return _st(aTestCase)._runCase();
})}))._on_do_((smalltalk.TestFailure || TestFailure),(function(ex){
return smalltalk.withContext(function($ctx3) { return _st(self)._addFailure_(aTestCase);
})}));
})}))._on_do_((smalltalk.Error || Error),(function(ex){
return smalltalk.withContext(function($ctx2) { return _st(self)._addError_(aTestCase);
})}));
return self}, self, "runCase:", [aTestCase], smalltalk.TestResult)}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_runs",
smalltalk.method({
selector: "runs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@runs"];
return $1;
}, self, "runs", [], smalltalk.TestResult)}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_status",
smalltalk.method({
selector: "status",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$4,$3,$1;
$2=_st(_st(self)._errors())._isEmpty();
$3=(function(){
return smalltalk.withContext(function($ctx2) { $4=_st(_st(self)._failures())._isEmpty();
if(smalltalk.assert($4)){
return "success";
} else {
return "failure";
};
})});
$1=_st($2)._ifTrue_ifFalse_($3,(function(){
return smalltalk.withContext(function($ctx2) { return "error";
})}));
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@timestamp"];
return $1;
}, self, "timestamp", [], smalltalk.TestResult)}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_total",
smalltalk.method({
selector: "total",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@total"];
return $1;
}, self, "total", [], smalltalk.TestResult)}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_total_",
smalltalk.method({
selector: "total:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@total"]=aNumber;
return self}, self, "total:", [aNumber], smalltalk.TestResult)}
}),
smalltalk.TestResult);



smalltalk.addClass('TestSuiteRunner', smalltalk.Object, ['suite', 'result', 'announcer', 'runNextTest'], 'SUnit');
smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@announcer"];
return $1;
}, self, "announcer", [], smalltalk.TestSuiteRunner)}
}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
"_contextOf_",
smalltalk.method({
selector: "contextOf:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.ReportingTestContext || ReportingTestContext))._testCase_result_finished_(_st(self["@suite"])._at_(anInteger),self["@result"],(function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._resume();
})}));
return $1;
}, self, "contextOf:", [anInteger], smalltalk.TestSuiteRunner)}
}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@announcer"]=_st((smalltalk.Announcer || Announcer))._new();
self["@result"]=_st((smalltalk.TestResult || TestResult))._new();
self["@runNextTest"]=(function(){
return smalltalk.withContext(function($ctx2) { $ctx2.locals.runs=nil;
$ctx2.locals.runs=_st(self["@result"])._runs();
$ctx2.locals.runs;
$1=_st($ctx2.locals.runs).__lt(_st(self["@result"])._total());
if(smalltalk.assert($1)){
return _st(_st(self)._contextOf_(_st($ctx2.locals.runs).__plus((1))))._start();
};
})});
return self}, self, "initialize", [], smalltalk.TestSuiteRunner)}
}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
"_result",
smalltalk.method({
selector: "result",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@result"];
return $1;
}, self, "result", [], smalltalk.TestSuiteRunner)}
}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
"_resume",
smalltalk.method({
selector: "resume",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@runNextTest"])._fork();
_st(self["@announcer"])._announce_(_st(_st((smalltalk.ResultAnnouncement || ResultAnnouncement))._new())._result_(self["@result"]));
return self}, self, "resume", [], smalltalk.TestSuiteRunner)}
}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
"_run",
smalltalk.method({
selector: "run",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@result"])._total_(_st(self["@suite"])._size());
_st(self)._resume();
return self}, self, "run", [], smalltalk.TestSuiteRunner)}
}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
"_suite_",
smalltalk.method({
selector: "suite:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@suite"]=aCollection;
return self}, self, "suite:", [aCollection], smalltalk.TestSuiteRunner)}
}),
smalltalk.TestSuiteRunner);


smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._shouldNotImplement();
return self}, self, "new", [], smalltalk.TestSuiteRunner.klass)}
}),
smalltalk.TestSuiteRunner.klass);

smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(smalltalk.Object.klass.fn.prototype._new.apply(_st(self), []))._suite_(aCollection);
return $1;
}, self, "on:", [aCollection], smalltalk.TestSuiteRunner.klass)}
}),
smalltalk.TestSuiteRunner.klass);


