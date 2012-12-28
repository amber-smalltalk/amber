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
"_testAsyncErrorsAndFailuresWork",
smalltalk.method({
selector: "testAsyncErrorsAndFailuresWork",
fn: function (){
var self=this;
var $1,$2;
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
smalltalk.send(smalltalk.send(runner,"_announcer",[]),"_on_do_",[(smalltalk.ResultAnnouncement || ResultAnnouncement),(function(ann){
$1=smalltalk.send(smalltalk.send(ann,"_result",[]),"__eq_eq",[result]);
if(smalltalk.assert($1)){
$2=smalltalk.send(smalltalk.send(result,"_runs",[]),"__eq",[smalltalk.send(result,"_total",[])]);
return smalltalk.send($2,"_ifTrue_",[assertBlock]);
};
})]);
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



