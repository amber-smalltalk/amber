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
self["@flag"]="ok";
self["@flag"];
return smalltalk.send(self,"_error_",["Intentional"]);
})]),"_valueWithTimeout_",[(5)]);
return self},
args: [],
source: "fakeError\x0a\x09flag := 'bad'.\x0a\x09self graceTime: 10.\x0a    flag := (self async: [ flag := 'ok'. self error: 'Intentional' ]) valueWithTimeout: 5\x0a",
messageSends: ["graceTime:", "valueWithTimeout:", "async:", "error:"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_fakeErrorFailingInTearDown",
smalltalk.method({
selector: "fakeErrorFailingInTearDown",
category: 'tests',
fn: function (){
var self=this;
self["@flag"]="bad";
smalltalk.send(self,"_graceTime_",[(10)]);
self["@flag"]=smalltalk.send(smalltalk.send(self,"_async_",[(function(){
return smalltalk.send(self,"_error_",["Intentional"]);
})]),"_valueWithTimeout_",[(5)]);
return self},
args: [],
source: "fakeErrorFailingInTearDown\x0a\x09flag := 'bad'.\x0a\x09self graceTime: 10.\x0a    flag := (self async: [ self error: 'Intentional' ]) valueWithTimeout: 5\x0a",
messageSends: ["graceTime:", "valueWithTimeout:", "async:", "error:"],
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
self["@flag"]="ok";
self["@flag"];
return smalltalk.send(self,"_assert_",[false]);
})]),"_valueWithTimeout_",[(5)]);
return self},
args: [],
source: "fakeFailure\x0a\x09flag := 'bad'.\x0a\x09self graceTime: 10.\x0a    flag := (self async: [ flag := 'ok'. self assert: false ]) valueWithTimeout: 5\x0a",
messageSends: ["graceTime:", "valueWithTimeout:", "async:", "assert:"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_fakeMultipleGraceTimeFailing",
smalltalk.method({
selector: "fakeMultipleGraceTimeFailing",
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self,"_graceTime_",[(100)]);
smalltalk.send(smalltalk.send(self,"_async_",[(function(){
smalltalk.send(self,"_graceTime_",[(5)]);
return smalltalk.send(smalltalk.send(self,"_async_",[(function(){
return smalltalk.send(self,"_finished",[]);
})]),"_valueWithTimeout_",[(10)]);
})]),"_valueWithTimeout_",[(5)]);
return self},
args: [],
source: "fakeMultipleGraceTimeFailing\x0a\x09self graceTime: 100.\x0a    (self async: [\x0a\x09\x09self graceTime: 5.\x0a        (self async: [ self finished ]) valueWithTimeout: 10\x0a\x09]) valueWithTimeout: 5\x0a",
messageSends: ["graceTime:", "valueWithTimeout:", "async:", "finished"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_fakeMultipleGraceTimePassing",
smalltalk.method({
selector: "fakeMultipleGraceTimePassing",
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self,"_graceTime_",[(10)]);
smalltalk.send(smalltalk.send(self,"_async_",[(function(){
smalltalk.send(self,"_graceTime_",[(20)]);
return smalltalk.send(smalltalk.send(self,"_async_",[(function(){
return smalltalk.send(self,"_finished",[]);
})]),"_valueWithTimeout_",[(10)]);
})]),"_valueWithTimeout_",[(5)]);
return self},
args: [],
source: "fakeMultipleGraceTimePassing\x0a\x09self graceTime: 10.\x0a    (self async: [\x0a\x09\x09self graceTime: 20.\x0a        (self async: [ self finished ]) valueWithTimeout: 10\x0a\x09]) valueWithTimeout: 5\x0a",
messageSends: ["graceTime:", "valueWithTimeout:", "async:", "finished"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_fakeTimeout",
smalltalk.method({
selector: "fakeTimeout",
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self,"_graceTime_",[(4)]);
smalltalk.send(smalltalk.send(self,"_async_",[(function(){
return smalltalk.send(self,"_finished",[]);
})]),"_valueWithTimeout_",[(5)]);
return self},
args: [],
source: "fakeTimeout\x0a\x09self graceTime: 4.\x0a    (self async: [ self finished ]) valueWithTimeout: 5\x0a",
messageSends: ["graceTime:", "valueWithTimeout:", "async:", "finished"],
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
"_sortedSelectors_",
smalltalk.method({
selector: "sortedSelectors:",
category: 'private',
fn: function (aCollection){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(aCollection,"_collect_",[(function(each){
return smalltalk.send(each,"_selector",[]);
})]),"_sorted",[]);
return $1;
},
args: ["aCollection"],
source: "sortedSelectors: aCollection\x0a\x09^(aCollection collect: [:each | each selector]) sorted",
messageSends: ["sorted", "collect:", "selector"],
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
"_testAsyncErrorsAndFailures",
smalltalk.method({
selector: "testAsyncErrorsAndFailures",
category: 'tests',
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
return self},
args: [],
source: "testAsyncErrorsAndFailures\x0a\x09| suite runner result assertBlock |\x0a\x09suite := #('fakeError' 'fakeErrorFailingInTearDown' 'fakeFailure' 'testPass') collect: [ :each | self class selector: each ].\x0a    runner := TestSuiteRunner on: suite.\x0a    self graceTime: 200.\x0a\x09result := runner result.\x0a    assertBlock := self async: [\x0a\x09\x09self assert: #('fakeError') equals: (self sortedSelectors: result errors).\x0a\x09\x09self assert: #('fakeErrorFailingInTearDown' 'fakeFailure') equals: (self sortedSelectors: result failures).\x0a\x09\x09self finished\x0a  \x09].\x0a    runner announcer on: ResultAnnouncement do: [:ann |\x0a    \x09ann result == result  ifTrue: [ result runs = result total ifTrue: assertBlock ]].\x0a\x09runner run",
messageSends: ["collect:", "selector:", "class", "on:", "graceTime:", "result", "async:", "assert:equals:", "sortedSelectors:", "errors", "failures", "finished", "on:do:", "ifTrue:", "=", "total", "runs", "==", "announcer", "run"],
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

smalltalk.addMethod(
"_testTimeouts",
smalltalk.method({
selector: "testTimeouts",
category: 'tests',
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
return self},
args: [],
source: "testTimeouts\x0a\x09| suite runner result assertBlock |\x0a\x09suite := #('fakeTimeout' 'fakeMultipleGraceTimeFailing' 'fakeMultipleGraceTimePassing' 'testPass') collect: [ :each | self class selector: each ].\x0a    runner := TestSuiteRunner on: suite.\x0a    self graceTime: 200.\x0a\x09result := runner result.\x0a    assertBlock := self async: [\x0a\x09\x09self assert: result errors isEmpty.\x0a\x09\x09self assert: #('fakeMultipleGraceTimeFailing' 'fakeTimeout') equals: (self sortedSelectors: result failures).\x0a\x09\x09self finished\x0a  \x09].\x0a    runner announcer on: ResultAnnouncement do: [:ann |\x0a    \x09ann result == result  ifTrue: [ result runs = result total ifTrue: assertBlock ]].\x0a\x09runner run",
messageSends: ["collect:", "selector:", "class", "on:", "graceTime:", "result", "async:", "assert:", "isEmpty", "errors", "assert:equals:", "sortedSelectors:", "failures", "finished", "on:do:", "ifTrue:", "=", "total", "runs", "==", "announcer", "run"],
referencedClasses: ["TestSuiteRunner", "ResultAnnouncement"]
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testTwoAsyncPassesWithFinishedOnlyOneIsRun",
smalltalk.method({
selector: "testTwoAsyncPassesWithFinishedOnlyOneIsRun",
category: 'tests',
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
return self},
args: [],
source: "testTwoAsyncPassesWithFinishedOnlyOneIsRun\x0a\x09| x |\x0a\x09flag := 'bad'.\x0a\x09self graceTime: 10.\x0a    x := 0.\x0a    flag := (self async: [ self finished. flag := 'ok'. x := x+1. self assert: 1 equals: x ]) valueWithTimeout: 0.\x0a    flag := (self async: [ self finished. flag := 'ok'. x := x+1. self assert: 1 equals: x ]) valueWithTimeout: 0.\x0a",
messageSends: ["graceTime:", "valueWithTimeout:", "async:", "finished", "+", "assert:equals:"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);



