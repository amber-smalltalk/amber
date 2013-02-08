smalltalk.addPackage('SUnit', {});
smalltalk.addClass('ResultAnnouncement', smalltalk.Object, ['result'], 'SUnit');
smalltalk.addMethod(
"_result",
smalltalk.method({
selector: "result",
fn: function (){
var self=this;
var $1;
$1=self["@result"];
return $1;
}
}),
smalltalk.ResultAnnouncement);

smalltalk.addMethod(
"_result_",
smalltalk.method({
selector: "result:",
fn: function (aTestResult){
var self=this;
self["@result"]=aTestResult;
return self}
}),
smalltalk.ResultAnnouncement);



smalltalk.addClass('TestCase', smalltalk.Object, ['testSelector', 'asyncTimeout', 'context'], 'SUnit');
smalltalk.addMethod(
"_assert_",
smalltalk.method({
selector: "assert:",
fn: function (aBoolean){
var self=this;
smalltalk.send(self,"_assert_description_",[aBoolean,"Assertion failed"]);
return self}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_assert_description_",
smalltalk.method({
selector: "assert:description:",
fn: function (aBoolean,aString){
var self=this;
var $1;
$1=aBoolean;
if(! smalltalk.assert($1)){
smalltalk.send(self,"_signalFailure_",[aString]);
};
return self}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_assert_equals_",
smalltalk.method({
selector: "assert:equals:",
fn: function (expected,actual){
var self=this;
var $1;
$1=smalltalk.send(self,"_assert_description_",[smalltalk.send(expected,"__eq",[actual]),smalltalk.send(smalltalk.send(smalltalk.send("Expected: ","__comma",[smalltalk.send(expected,"_asString",[])]),"__comma",[" but was: "]),"__comma",[smalltalk.send(actual,"_asString",[])])]);
return $1;
}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_async_",
smalltalk.method({
selector: "async:",
fn: function (aBlock){
var self=this;
var $2,$1;
var c;
smalltalk.send(self,"_errorIfNotAsync_",["#async"]);
c=self["@context"];
$1=(function(){
$2=smalltalk.send(self,"_isAsync",[]);
if(smalltalk.assert($2)){
return smalltalk.send(c,"_execute_",[aBlock]);
};
});
return $1;
}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_context_",
smalltalk.method({
selector: "context:",
fn: function (aRunningTestContext){
var self=this;
self["@context"]=aRunningTestContext;
return self}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_deny_",
smalltalk.method({
selector: "deny:",
fn: function (aBoolean){
var self=this;
smalltalk.send(self,"_assert_",[smalltalk.send(aBoolean,"_not",[])]);
return self}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_errorIfNotAsync_",
smalltalk.method({
selector: "errorIfNotAsync:",
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(self,"_isAsync",[]);
if(! smalltalk.assert($1)){
smalltalk.send(self,"_error_",[smalltalk.send(aString,"__comma",[" used without prior #graceTime:"])]);
};
return self}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_finished",
smalltalk.method({
selector: "finished",
fn: function (){
var self=this;
smalltalk.send(self,"_errorIfNotAsync_",["#finished"]);
self["@asyncTimeout"]=nil;
return self}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_graceTime_",
smalltalk.method({
selector: "graceTime:",
fn: function (millis){
var self=this;
var $1;
$1=self["@asyncTimeout"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
smalltalk.send(self["@asyncTimeout"],"_clearTimeout",[]);
};
self["@asyncTimeout"]=true;
self["@asyncTimeout"]=smalltalk.send(smalltalk.send(self,"_async_",[(function(){
return smalltalk.send(self,"_assert_description_",[false,"SUnit grace time exhausted"]);
})]),"_valueWithTimeout_",[millis]);
return self}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_isAsync",
smalltalk.method({
selector: "isAsync",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@asyncTimeout"],"_notNil",[]);
return $1;
}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_performTest",
smalltalk.method({
selector: "performTest",
fn: function (){
var self=this;
self["@asyncTimeout"]=nil;
smalltalk.send(self,"_perform_",[smalltalk.send(self,"_selector",[])]);
return self}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_runCase",
smalltalk.method({
selector: "runCase",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.TestContext || TestContext),"_testCase_",[self]),"_start",[]);
return self}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
var $1;
$1=self["@testSelector"];
return $1;
}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_setTestSelector_",
smalltalk.method({
selector: "setTestSelector:",
fn: function (aSelector){
var self=this;
self["@testSelector"]=aSelector;
return self}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
return self}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_should_",
smalltalk.method({
selector: "should:",
fn: function (aBlock){
var self=this;
smalltalk.send(self,"_assert_",[smalltalk.send(aBlock,"_value",[])]);
return self}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_should_raise_",
smalltalk.method({
selector: "should:raise:",
fn: function (aBlock,anExceptionClass){
var self=this;
smalltalk.send(self,"_assert_",[smalltalk.send((function(){
smalltalk.send(aBlock,"_value",[]);
return false;
}),"_on_do_",[anExceptionClass,(function(ex){
return true;
})])]);
return self}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_shouldnt_raise_",
smalltalk.method({
selector: "shouldnt:raise:",
fn: function (aBlock,anExceptionClass){
var self=this;
smalltalk.send(self,"_assert_",[smalltalk.send((function(){
smalltalk.send(aBlock,"_value",[]);
return true;
}),"_on_do_",[anExceptionClass,(function(ex){
return false;
})])]);
return self}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_signalFailure_",
smalltalk.method({
selector: "signalFailure:",
fn: function (aString){
var self=this;
var $1,$2;
$1=smalltalk.send((smalltalk.TestFailure || TestFailure),"_new",[]);
smalltalk.send($1,"_messageText_",[aString]);
$2=smalltalk.send($1,"_signal",[]);
return self}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
fn: function (){
var self=this;
return self}
}),
smalltalk.TestCase);


smalltalk.addMethod(
"_allTestSelectors",
smalltalk.method({
selector: "allTestSelectors",
fn: function (){
var self=this;
var $1,$2;
var selectors;
selectors=smalltalk.send(self,"_testSelectors",[]);
$1=smalltalk.send(self,"_shouldInheritSelectors",[]);
if(smalltalk.assert($1)){
smalltalk.send(selectors,"_addAll_",[smalltalk.send(smalltalk.send(self,"_superclass",[]),"_allTestSelectors",[])]);
};
$2=selectors;
return $2;
}
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_buildSuite",
smalltalk.method({
selector: "buildSuite",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_allTestSelectors",[]),"_collect_",[(function(each){
return smalltalk.send(self,"_selector_",[each]);
})]);
return $1;
}
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_isAbstract",
smalltalk.method({
selector: "isAbstract",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_name",[]),"__eq",["TestCase"]);
return $1;
}
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_lookupHierarchyRoot",
smalltalk.method({
selector: "lookupHierarchyRoot",
fn: function (){
var self=this;
var $1;
$1=(smalltalk.TestCase || TestCase);
return $1;
}
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aSelector){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_setTestSelector_",[aSelector]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_shouldInheritSelectors",
smalltalk.method({
selector: "shouldInheritSelectors",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_~_eq",[smalltalk.send(self,"_lookupHierarchyRoot",[])]);
return $1;
}
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_testSelectors",
smalltalk.method({
selector: "testSelectors",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_methodDictionary",[]),"_keys",[]),"_select_",[(function(each){
return smalltalk.send(each,"_match_",["^test"]);
})]);
return $1;
}
}),
smalltalk.TestCase.klass);


smalltalk.addClass('TestContext', smalltalk.Object, ['testCase'], 'SUnit');
smalltalk.addMethod(
"_execute_",
smalltalk.method({
selector: "execute:",
fn: function (aBlock){
var self=this;
var $1,$3,$4,$2;
var failed;
smalltalk.send(self["@testCase"],"_context_",[self]);
$1=(function(){
failed=true;
failed;
smalltalk.send(aBlock,"_value",[]);
failed=false;
return failed;
});
$2=(function(){
smalltalk.send(self["@testCase"],"_context_",[nil]);
$3=smalltalk.send(failed,"_and_",[(function(){
return smalltalk.send(self["@testCase"],"_isAsync",[]);
})]);
if(smalltalk.assert($3)){
smalltalk.send(self["@testCase"],"_finished",[]);
};
$4=smalltalk.send(self["@testCase"],"_isAsync",[]);
if(! smalltalk.assert($4)){
return smalltalk.send(self["@testCase"],"_tearDown",[]);
};
});
smalltalk.send($1,"_ensure_",[$2]);
return self}
}),
smalltalk.TestContext);

smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
fn: function (){
var self=this;
smalltalk.send(self,"_execute_",[(function(){
smalltalk.send(self["@testCase"],"_setUp",[]);
return smalltalk.send(self["@testCase"],"_performTest",[]);
})]);
return self}
}),
smalltalk.TestContext);

smalltalk.addMethod(
"_testCase_",
smalltalk.method({
selector: "testCase:",
fn: function (aTestCase){
var self=this;
self["@testCase"]=aTestCase;
return self}
}),
smalltalk.TestContext);


smalltalk.addMethod(
"_testCase_",
smalltalk.method({
selector: "testCase:",
fn: function (aTestCase){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_testCase_",[aTestCase]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.TestContext.klass);


smalltalk.addClass('ReportingTestContext', smalltalk.TestContext, ['finished', 'result'], 'SUnit');
smalltalk.addMethod(
"_execute_",
smalltalk.method({
selector: "execute:",
fn: function (aBlock){
var self=this;
var $1,$3,$2;
$1=(function(){
return smalltalk.send(self,"_withErrorReporting_",[(function(){
return smalltalk.send(self,"_execute_",[aBlock],smalltalk.TestContext);
})]);
});
$2=(function(){
$3=smalltalk.send(self["@testCase"],"_isAsync",[]);
if(! smalltalk.assert($3)){
smalltalk.send(self["@result"],"_increaseRuns",[]);
return smalltalk.send(self["@finished"],"_value",[]);
};
});
smalltalk.send($1,"_ensure_",[$2]);
return self}
}),
smalltalk.ReportingTestContext);

smalltalk.addMethod(
"_finished_",
smalltalk.method({
selector: "finished:",
fn: function (aBlock){
var self=this;
self["@finished"]=aBlock;
return self}
}),
smalltalk.ReportingTestContext);

smalltalk.addMethod(
"_result_",
smalltalk.method({
selector: "result:",
fn: function (aTestResult){
var self=this;
self["@result"]=aTestResult;
return self}
}),
smalltalk.ReportingTestContext);

smalltalk.addMethod(
"_withErrorReporting_",
smalltalk.method({
selector: "withErrorReporting:",
fn: function (aBlock){
var self=this;
smalltalk.send((function(){
return smalltalk.send(aBlock,"_on_do_",[(smalltalk.TestFailure || TestFailure),(function(ex){
return smalltalk.send(self["@result"],"_addFailure_",[self["@testCase"]]);
})]);
}),"_on_do_",[(smalltalk.Error || Error),(function(ex){
return smalltalk.send(self["@result"],"_addError_",[self["@testCase"]]);
})]);
return self}
}),
smalltalk.ReportingTestContext);


smalltalk.addMethod(
"_testCase_result_finished_",
smalltalk.method({
selector: "testCase:result:finished:",
fn: function (aTestCase,aTestResult,aBlock){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_testCase_",[aTestCase],smalltalk.TestContext.klass);
smalltalk.send($2,"_result_",[aTestResult]);
smalltalk.send($2,"_finished_",[aBlock]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
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
smalltalk.send(smalltalk.send(self,"_errors",[]),"_add_",[anError]);
return self}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_addFailure_",
smalltalk.method({
selector: "addFailure:",
fn: function (aFailure){
var self=this;
smalltalk.send(smalltalk.send(self,"_failures",[]),"_add_",[aFailure]);
return self}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_errors",
smalltalk.method({
selector: "errors",
fn: function (){
var self=this;
var $1;
$1=self["@errors"];
return $1;
}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_failures",
smalltalk.method({
selector: "failures",
fn: function (){
var self=this;
var $1;
$1=self["@failures"];
return $1;
}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_increaseRuns",
smalltalk.method({
selector: "increaseRuns",
fn: function (){
var self=this;
self["@runs"]=smalltalk.send(self["@runs"],"__plus",[(1)]);
return self}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.Object);
self["@timestamp"]=smalltalk.send((smalltalk.Date || Date),"_now",[]);
self["@runs"]=(0);
self["@errors"]=smalltalk.send((smalltalk.Array || Array),"_new",[]);
self["@failures"]=smalltalk.send((smalltalk.Array || Array),"_new",[]);
self["@total"]=(0);
return self}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_runs",
smalltalk.method({
selector: "runs",
fn: function (){
var self=this;
var $1;
$1=self["@runs"];
return $1;
}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_status",
smalltalk.method({
selector: "status",
fn: function (){
var self=this;
var $2,$4,$3,$1;
$2=smalltalk.send(smalltalk.send(self,"_errors",[]),"_isEmpty",[]);
$3=(function(){
$4=smalltalk.send(smalltalk.send(self,"_failures",[]),"_isEmpty",[]);
if(smalltalk.assert($4)){
return "success";
} else {
return "failure";
};
});
$1=smalltalk.send($2,"_ifTrue_ifFalse_",[$3,(function(){
return "error";
})]);
return $1;
}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_timestamp",
smalltalk.method({
selector: "timestamp",
fn: function (){
var self=this;
var $1;
$1=self["@timestamp"];
return $1;
}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_total",
smalltalk.method({
selector: "total",
fn: function (){
var self=this;
var $1;
$1=self["@total"];
return $1;
}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_total_",
smalltalk.method({
selector: "total:",
fn: function (aNumber){
var self=this;
self["@total"]=aNumber;
return self}
}),
smalltalk.TestResult);



smalltalk.addClass('TestSuiteRunner', smalltalk.Object, ['suite', 'result', 'announcer', 'runNextTest'], 'SUnit');
smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
var $1;
$1=self["@announcer"];
return $1;
}
}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
"_contextOf_",
smalltalk.method({
selector: "contextOf:",
fn: function (anInteger){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.ReportingTestContext || ReportingTestContext),"_testCase_result_finished_",[smalltalk.send(self["@suite"],"_at_",[anInteger]),self["@result"],(function(){
return smalltalk.send(self,"_resume",[]);
})]);
return $1;
}
}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
var $1;
smalltalk.send(self,"_initialize",[],smalltalk.Object);
self["@announcer"]=smalltalk.send((smalltalk.Announcer || Announcer),"_new",[]);
self["@result"]=smalltalk.send((smalltalk.TestResult || TestResult),"_new",[]);
self["@runNextTest"]=(function(){
var runs;
runs=smalltalk.send(self["@result"],"_runs",[]);
runs;
$1=smalltalk.send(runs,"__lt",[smalltalk.send(self["@result"],"_total",[])]);
if(smalltalk.assert($1)){
return smalltalk.send(smalltalk.send(self,"_contextOf_",[smalltalk.send(runs,"__plus",[(1)])]),"_start",[]);
};
});
return self}
}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
"_result",
smalltalk.method({
selector: "result",
fn: function (){
var self=this;
var $1;
$1=self["@result"];
return $1;
}
}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
"_resume",
smalltalk.method({
selector: "resume",
fn: function (){
var self=this;
smalltalk.send(self["@runNextTest"],"_fork",[]);
smalltalk.send(self["@announcer"],"_announce_",[smalltalk.send(smalltalk.send((smalltalk.ResultAnnouncement || ResultAnnouncement),"_new",[]),"_result_",[self["@result"]])]);
return self}
}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
"_run",
smalltalk.method({
selector: "run",
fn: function (){
var self=this;
smalltalk.send(self["@result"],"_total_",[smalltalk.send(self["@suite"],"_size",[])]);
smalltalk.send(self,"_resume",[]);
return self}
}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
"_suite_",
smalltalk.method({
selector: "suite:",
fn: function (aCollection){
var self=this;
self["@suite"]=aCollection;
return self}
}),
smalltalk.TestSuiteRunner);


smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
smalltalk.send(self,"_shouldNotImplement",[]);
return self}
}),
smalltalk.TestSuiteRunner.klass);

smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aCollection){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_new",[],smalltalk.Object.klass),"_suite_",[aCollection]);
return $1;
}
}),
smalltalk.TestSuiteRunner.klass);


