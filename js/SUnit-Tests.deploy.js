smalltalk.addPackage('SUnit-Tests', {});
smalltalk.addClass('SUnitAsyncTest', smalltalk.TestCase, ['flag'], 'SUnit-Tests');
smalltalk.addMethod(
"_fakeError",
smalltalk.method({
selector: "fakeError",
fn: function (){
var self=this;
self["@flag"]="bad";
smalltalk.send(self,"_graceTime_",[(10)]);
self["@flag"]=smalltalk.send(smalltalk.send(self,"_async_",[(function(){
self["@flag"]="ok";
self["@flag"];
return smalltalk.send(self,"_error_",["Intentional"]);
})]),"_valueWithTimeout_",[(5)]);
return self}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_fakeErrorFailingInTearDown",
smalltalk.method({
selector: "fakeErrorFailingInTearDown",
fn: function (){
var self=this;
self["@flag"]="bad";
smalltalk.send(self,"_graceTime_",[(10)]);
self["@flag"]=smalltalk.send(smalltalk.send(self,"_async_",[(function(){
return smalltalk.send(self,"_error_",["Intentional"]);
})]),"_valueWithTimeout_",[(5)]);
return self}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_fakeFailure",
smalltalk.method({
selector: "fakeFailure",
fn: function (){
var self=this;
self["@flag"]="bad";
smalltalk.send(self,"_graceTime_",[(10)]);
self["@flag"]=smalltalk.send(smalltalk.send(self,"_async_",[(function(){
self["@flag"]="ok";
self["@flag"];
return smalltalk.send(self,"_assert_",[false]);
})]),"_valueWithTimeout_",[(5)]);
return self}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_fakeMultipleGraceTimeFailing",
smalltalk.method({
selector: "fakeMultipleGraceTimeFailing",
fn: function (){
var self=this;
smalltalk.send(self,"_graceTime_",[(100)]);
smalltalk.send(smalltalk.send(self,"_async_",[(function(){
smalltalk.send(self,"_graceTime_",[(5)]);
return smalltalk.send(smalltalk.send(self,"_async_",[(function(){
return smalltalk.send(self,"_finished",[]);
})]),"_valueWithTimeout_",[(10)]);
})]),"_valueWithTimeout_",[(5)]);
return self}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_fakeMultipleGraceTimePassing",
smalltalk.method({
selector: "fakeMultipleGraceTimePassing",
fn: function (){
var self=this;
smalltalk.send(self,"_graceTime_",[(10)]);
smalltalk.send(smalltalk.send(self,"_async_",[(function(){
smalltalk.send(self,"_graceTime_",[(20)]);
return smalltalk.send(smalltalk.send(self,"_async_",[(function(){
return smalltalk.send(self,"_finished",[]);
})]),"_valueWithTimeout_",[(10)]);
})]),"_valueWithTimeout_",[(5)]);
return self}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_fakeTimeout",
smalltalk.method({
selector: "fakeTimeout",
fn: function (){
var self=this;
smalltalk.send(self,"_graceTime_",[(4)]);
smalltalk.send(smalltalk.send(self,"_async_",[(function(){
return smalltalk.send(self,"_finished",[]);
})]),"_valueWithTimeout_",[(5)]);
return self}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
self["@flag"]="ok";
return self}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_sortedSelectors_",
smalltalk.method({
selector: "sortedSelectors:",
fn: function (aCollection){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(aCollection,"_collect_",[(function(each){
return smalltalk.send(each,"_selector",[]);
})]),"_sorted",[]);
return $1;
}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
fn: function (){
var self=this;
smalltalk.send(self,"_assert_equals_",["ok",self["@flag"]]);
return self}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testAsyncErrorsAndFailures",
smalltalk.method({
selector: "testAsyncErrorsAndFailures",
fn: function (){
var self=this;
var $1,$2,$4,$6,$5,$3;
var suite;
var runner;
var result;
var assertBlock;
suite=smalltalk.send(["fakeError", "fakeErrorFailingInTearDown", "fakeFailure", "testPass"],"_collect_",[(function(each){
return smalltalk.send(smalltalk.send(self,"_class",[]),"_selector_",[each]);
})]);
runner=smalltalk.send((smalltalk.TestSuiteRunner || TestSuiteRunner),"_on_",[suite]);
smalltalk.send(self,"_graceTime_",[(200)]);
result=smalltalk.send(runner,"_result",[]);
assertBlock=smalltalk.send(self,"_async_",[(function(){
smalltalk.send(self,"_assert_equals_",[["fakeError"],smalltalk.send(self,"_sortedSelectors_",[smalltalk.send(result,"_errors",[])])]);
smalltalk.send(self,"_assert_equals_",[["fakeErrorFailingInTearDown", "fakeFailure"],smalltalk.send(self,"_sortedSelectors_",[smalltalk.send(result,"_failures",[])])]);
return smalltalk.send(self,"_finished",[]);
})]);
$1=smalltalk.send(runner,"_announcer",[]);
$2=(smalltalk.ResultAnnouncement || ResultAnnouncement);
$3=(function(ann){
$4=smalltalk.send(smalltalk.send(ann,"_result",[]),"__eq_eq",[result]);
$5=(function(){
$6=smalltalk.send(smalltalk.send(result,"_runs",[]),"__eq",[smalltalk.send(result,"_total",[])]);
return smalltalk.send($6,"_ifTrue_",[assertBlock]);
});
return smalltalk.send($4,"_ifTrue_",[$5]);
});
smalltalk.send($1,"_on_do_",[$2,$3]);
smalltalk.send(runner,"_run",[]);
return self}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testAsyncNeedsGraceTime",
smalltalk.method({
selector: "testAsyncNeedsGraceTime",
fn: function (){
var self=this;
smalltalk.send(self,"_should_raise_",[(function(){
return smalltalk.send(self,"_async_",[(function(){
})]);
}),(smalltalk.Error || Error)]);
smalltalk.send(self,"_graceTime_",[(0)]);
smalltalk.send(self,"_shouldnt_raise_",[(function(){
return smalltalk.send(self,"_async_",[(function(){
})]);
}),(smalltalk.Error || Error)]);
smalltalk.send(self,"_finished",[]);
return self}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testFinishedNeedsGraceTime",
smalltalk.method({
selector: "testFinishedNeedsGraceTime",
fn: function (){
var self=this;
smalltalk.send(self,"_should_raise_",[(function(){
return smalltalk.send(self,"_finished",[]);
}),(smalltalk.Error || Error)]);
smalltalk.send(self,"_graceTime_",[(0)]);
smalltalk.send(self,"_shouldnt_raise_",[(function(){
return smalltalk.send(self,"_finished",[]);
}),(smalltalk.Error || Error)]);
return self}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testIsAsyncReturnsCorrectValues",
smalltalk.method({
selector: "testIsAsyncReturnsCorrectValues",
fn: function (){
var self=this;
smalltalk.send(self,"_deny_",[smalltalk.send(self,"_isAsync",[])]);
smalltalk.send(self,"_graceTime_",[(0)]);
smalltalk.send(self,"_assert_",[smalltalk.send(self,"_isAsync",[])]);
smalltalk.send(self,"_finished",[]);
smalltalk.send(self,"_deny_",[smalltalk.send(self,"_isAsync",[])]);
return self}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testPass",
smalltalk.method({
selector: "testPass",
fn: function (){
var self=this;
self["@flag"]="bad";
smalltalk.send(self,"_graceTime_",[(10)]);
self["@flag"]=smalltalk.send(smalltalk.send(self,"_async_",[(function(){
smalltalk.send(self,"_assert_",[true]);
smalltalk.send(self,"_finished",[]);
self["@flag"]="ok";
return self["@flag"];
})]),"_valueWithTimeout_",[(5)]);
return self}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testTimeouts",
smalltalk.method({
selector: "testTimeouts",
fn: function (){
var self=this;
var $1,$2,$4,$6,$5,$3;
var suite;
var runner;
var result;
var assertBlock;
suite=smalltalk.send(["fakeTimeout", "fakeMultipleGraceTimeFailing", "fakeMultipleGraceTimePassing", "testPass"],"_collect_",[(function(each){
return smalltalk.send(smalltalk.send(self,"_class",[]),"_selector_",[each]);
})]);
runner=smalltalk.send((smalltalk.TestSuiteRunner || TestSuiteRunner),"_on_",[suite]);
smalltalk.send(self,"_graceTime_",[(200)]);
result=smalltalk.send(runner,"_result",[]);
assertBlock=smalltalk.send(self,"_async_",[(function(){
smalltalk.send(self,"_assert_",[smalltalk.send(smalltalk.send(result,"_errors",[]),"_isEmpty",[])]);
smalltalk.send(self,"_assert_equals_",[["fakeMultipleGraceTimeFailing", "fakeTimeout"],smalltalk.send(self,"_sortedSelectors_",[smalltalk.send(result,"_failures",[])])]);
return smalltalk.send(self,"_finished",[]);
})]);
$1=smalltalk.send(runner,"_announcer",[]);
$2=(smalltalk.ResultAnnouncement || ResultAnnouncement);
$3=(function(ann){
$4=smalltalk.send(smalltalk.send(ann,"_result",[]),"__eq_eq",[result]);
$5=(function(){
$6=smalltalk.send(smalltalk.send(result,"_runs",[]),"__eq",[smalltalk.send(result,"_total",[])]);
return smalltalk.send($6,"_ifTrue_",[assertBlock]);
});
return smalltalk.send($4,"_ifTrue_",[$5]);
});
smalltalk.send($1,"_on_do_",[$2,$3]);
smalltalk.send(runner,"_run",[]);
return self}
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testTwoAsyncPassesWithFinishedOnlyOneIsRun",
smalltalk.method({
selector: "testTwoAsyncPassesWithFinishedOnlyOneIsRun",
fn: function (){
var self=this;
var x;
self["@flag"]="bad";
smalltalk.send(self,"_graceTime_",[(10)]);
x=(0);
self["@flag"]=smalltalk.send(smalltalk.send(self,"_async_",[(function(){
smalltalk.send(self,"_finished",[]);
self["@flag"]="ok";
self["@flag"];
x=smalltalk.send(x,"__plus",[(1)]);
x;
return smalltalk.send(self,"_assert_equals_",[(1),x]);
})]),"_valueWithTimeout_",[(0)]);
self["@flag"]=smalltalk.send(smalltalk.send(self,"_async_",[(function(){
smalltalk.send(self,"_finished",[]);
self["@flag"]="ok";
self["@flag"];
x=smalltalk.send(x,"__plus",[(1)]);
x;
return smalltalk.send(self,"_assert_equals_",[(1),x]);
})]),"_valueWithTimeout_",[(0)]);
return self}
}),
smalltalk.SUnitAsyncTest);



