smalltalk.addPackage('SUnit-Tests', {});
smalltalk.addClass('SUnitAsyncTest', smalltalk.TestCase, ['flag'], 'SUnit-Tests');
smalltalk.addMethod(
"_fakeError",
smalltalk.method({
selector: "fakeError",
category: 'tests',
fn: function (){
var self=this;
self["@flag"]="bad";
smalltalk.send(self,"_graceTime_",[(10)]);
self["@flag"]=smalltalk.send(smalltalk.send(self,"_async_",[(function(){
smalltalk.send(self,"_error_",["Intentional"]);
smalltalk.send(self,"_finished",[]);
self["@flag"]="ok";
return self["@flag"];
})]),"_valueWithTimeout_",[(5)]);
return self},
args: [],
source: "fakeError\x0a\x09flag := 'bad'.\x0a\x09self graceTime: 10.\x0a    flag := (self async: [ self error: 'Intentional'. self finished. flag := 'ok' ]) valueWithTimeout: 5\x0a",
messageSends: ["graceTime:", "valueWithTimeout:", "async:", "error:", "finished"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_fakeFailure",
smalltalk.method({
selector: "fakeFailure",
category: 'tests',
fn: function (){
var self=this;
self["@flag"]="bad";
smalltalk.send(self,"_graceTime_",[(10)]);
self["@flag"]=smalltalk.send(smalltalk.send(self,"_async_",[(function(){
smalltalk.send(self,"_assert_",[false]);
smalltalk.send(self,"_finished",[]);
self["@flag"]="ok";
return self["@flag"];
})]),"_valueWithTimeout_",[(5)]);
return self},
args: [],
source: "fakeFailure\x0a\x09flag := 'bad'.\x0a\x09self graceTime: 10.\x0a    flag := (self async: [ self assert: false. self finished. flag := 'ok' ]) valueWithTimeout: 5\x0a",
messageSends: ["graceTime:", "valueWithTimeout:", "async:", "assert:", "finished"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function (){
var self=this;
self["@flag"]="ok";
return self},
args: [],
source: "setUp\x0a\x09flag := 'ok'\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
category: 'running',
fn: function (){
var self=this;
smalltalk.send(self,"_assert_equals_",["ok",self["@flag"]]);
return self},
args: [],
source: "tearDown\x0a\x09self assert: 'ok' equals: flag\x0a",
messageSends: ["assert:equals:"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testAsyncErrorsAndFailuresWork",
smalltalk.method({
selector: "testAsyncErrorsAndFailuresWork",
category: 'tests',
fn: function (){
var self=this;
var $1,$2;
var suite;
var runner;
var result;
var assertBlock;
suite=[smalltalk.send(smalltalk.send(self,"_class",[]),"_selector_",["fakeError"]),smalltalk.send(smalltalk.send(self,"_class",[]),"_selector_",["fakeFailure"]),smalltalk.send(smalltalk.send(self,"_class",[]),"_selector_",["testPass"])];
runner=smalltalk.send((smalltalk.TestSuiteRunner || TestSuiteRunner),"_on_",[suite]);
smalltalk.send(self,"_graceTime_",[(200)]);
result=smalltalk.send(runner,"_result",[]);
assertBlock=smalltalk.send(self,"_async_",[(function(){
smalltalk.send(self,"_assert_equals_",[(1),smalltalk.send(smalltalk.send(result,"_errors",[]),"_size",[])]);
smalltalk.send(self,"_assert_equals_",["fakeError",smalltalk.send(smalltalk.send(smalltalk.send(result,"_errors",[]),"_first",[]),"_selector",[])]);
smalltalk.send(self,"_assert_equals_",[(1),smalltalk.send(smalltalk.send(result,"_failures",[]),"_size",[])]);
smalltalk.send(self,"_assert_equals_",["fakeFailure",smalltalk.send(smalltalk.send(smalltalk.send(result,"_failures",[]),"_first",[]),"_selector",[])]);
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
return self},
args: [],
source: "testAsyncErrorsAndFailuresWork\x0a\x09| suite runner result assertBlock |\x0a\x09suite := { self class selector: 'fakeError'. self class selector: 'fakeFailure'. self class selector: 'testPass' }.\x0a    runner := TestSuiteRunner on: suite.\x0a    self graceTime: 200.\x0a\x09result := runner result.\x0a    assertBlock := self async: [\x0a\x09\x09self assert: 1 equals: result errors size.\x0a\x09\x09self assert: 'fakeError' equals: result errors first selector.\x0a\x09\x09self assert: 1 equals: result failures size.\x0a\x09\x09self assert: 'fakeFailure' equals: result failures first selector.\x0a\x09\x09self finished\x0a  \x09].\x0a    runner announcer on: ResultAnnouncement do: [:ann |\x0a    \x09ann result == result  ifTrue: [ result runs = result total ifTrue: assertBlock ]].\x0a\x09runner run",
messageSends: ["selector:", "class", "on:", "graceTime:", "result", "async:", "assert:equals:", "size", "errors", "selector", "first", "failures", "finished", "on:do:", "ifTrue:", "=", "total", "runs", "==", "announcer", "run"],
referencedClasses: ["TestSuiteRunner", "ResultAnnouncement"]
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testAsyncNeedsGraceTime",
smalltalk.method({
selector: "testAsyncNeedsGraceTime",
category: 'tests',
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
return self},
args: [],
source: "testAsyncNeedsGraceTime\x0a    self should: [ self async: [ ] ] raise: Error.\x0a    self graceTime: 0.\x0a    self shouldnt: [ self async: [ ] ] raise: Error.\x0a    self finished\x0a",
messageSends: ["should:raise:", "async:", "graceTime:", "shouldnt:raise:", "finished"],
referencedClasses: ["Error"]
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testFinishedNeedsGraceTime",
smalltalk.method({
selector: "testFinishedNeedsGraceTime",
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self,"_should_raise_",[(function(){
return smalltalk.send(self,"_finished",[]);
}),(smalltalk.Error || Error)]);
smalltalk.send(self,"_graceTime_",[(0)]);
smalltalk.send(self,"_shouldnt_raise_",[(function(){
return smalltalk.send(self,"_finished",[]);
}),(smalltalk.Error || Error)]);
return self},
args: [],
source: "testFinishedNeedsGraceTime\x0a    self should: [ self finished ] raise: Error.\x0a    self graceTime: 0.\x0a    self shouldnt: [ self finished ] raise: Error.\x0a",
messageSends: ["should:raise:", "finished", "graceTime:", "shouldnt:raise:"],
referencedClasses: ["Error"]
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testIsAsyncReturnsCorrectValues",
smalltalk.method({
selector: "testIsAsyncReturnsCorrectValues",
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self,"_deny_",[smalltalk.send(self,"_isAsync",[])]);
smalltalk.send(self,"_graceTime_",[(0)]);
smalltalk.send(self,"_assert_",[smalltalk.send(self,"_isAsync",[])]);
smalltalk.send(self,"_finished",[]);
smalltalk.send(self,"_deny_",[smalltalk.send(self,"_isAsync",[])]);
return self},
args: [],
source: "testIsAsyncReturnsCorrectValues\x0a    self deny: self isAsync.\x0a    self graceTime: 0.\x0a    self assert: self isAsync.\x0a    self finished.\x0a    self deny: self isAsync\x0a",
messageSends: ["deny:", "isAsync", "graceTime:", "assert:", "finished"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testPass",
smalltalk.method({
selector: "testPass",
category: 'tests',
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
return self},
args: [],
source: "testPass\x0a\x09flag := 'bad'.\x0a\x09self graceTime: 10.\x0a    flag := (self async: [ self assert: true. self finished. flag := 'ok' ]) valueWithTimeout: 5\x0a",
messageSends: ["graceTime:", "valueWithTimeout:", "async:", "assert:", "finished"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);



