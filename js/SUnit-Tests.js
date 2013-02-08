smalltalk.addPackage('SUnit-Tests', {});
smalltalk.addClass('ExampleSetTest', smalltalk.TestCase, ['empty', 'full'], 'SUnit-Tests');
smalltalk.ExampleSetTest.comment="ExampleSetTest is taken from Pharo 1.4.\x0a\x0aTHe purpose of this class is to demonstrate a simple use case of the test framework."
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function (){
var self=this;
self["@empty"]=smalltalk.send((smalltalk.Set || Set),"_new",[]);
self["@full"]=smalltalk.send((smalltalk.Set || Set),"_with_with_",[(5),smalltalk.symbolFor("abc")]);
return self},
args: [],
source: "setUp\x0a\x09empty := Set new.\x0a\x09full := Set with: 5 with: #abc",
messageSends: ["new", "with:with:"],
referencedClasses: ["Set"]
}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
"_testAdd",
smalltalk.method({
selector: "testAdd",
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self["@empty"],"_add_",[(5)]);
smalltalk.send(self,"_assert_",[smalltalk.send(self["@empty"],"_includes_",[(5)])]);
return self},
args: [],
source: "testAdd\x0a\x09empty add: 5.\x0a\x09self assert: (empty includes: 5)",
messageSends: ["add:", "assert:", "includes:"],
referencedClasses: []
}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
"_testGrow",
smalltalk.method({
selector: "testGrow",
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self["@empty"],"_addAll_",[smalltalk.send((1),"_to_",[(100)])]);
smalltalk.send(self,"_assert_",[smalltalk.send(smalltalk.send(self["@empty"],"_size",[]),"__eq",[(100)])]);
return self},
args: [],
source: "testGrow\x0a\x09empty addAll: (1 to: 100).\x0a\x09self assert: empty size = 100",
messageSends: ["addAll:", "to:", "assert:", "=", "size"],
referencedClasses: []
}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
"_testIllegal",
smalltalk.method({
selector: "testIllegal",
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self,"_should_raise_",[(function(){
return smalltalk.send(self["@empty"],"_at_",[(5)]);
}),(smalltalk.Error || Error)]);
smalltalk.send(self,"_should_raise_",[(function(){
return smalltalk.send(self["@empty"],"_at_put_",[(5),smalltalk.symbolFor("abc")]);
}),(smalltalk.Error || Error)]);
return self},
args: [],
source: "testIllegal\x0a\x09self \x0a\x09\x09should: [empty at: 5] \x0a\x09\x09raise: Error.\x0a\x09self \x0a\x09\x09should: [empty at: 5 put: #abc] \x0a\x09\x09raise: Error",
messageSends: ["should:raise:", "at:", "at:put:"],
referencedClasses: ["Error"]
}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
"_testIncludes",
smalltalk.method({
selector: "testIncludes",
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self,"_assert_",[smalltalk.send(self["@full"],"_includes_",[(5)])]);
smalltalk.send(self,"_assert_",[smalltalk.send(self["@full"],"_includes_",[smalltalk.symbolFor("abc")])]);
return self},
args: [],
source: "testIncludes\x0a\x09self assert: (full includes: 5).\x0a\x09self assert: (full includes: #abc)",
messageSends: ["assert:", "includes:"],
referencedClasses: []
}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
"_testOccurrences",
smalltalk.method({
selector: "testOccurrences",
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self,"_assert_",[smalltalk.send(smalltalk.send(self["@empty"],"_occurrencesOf_",[(0)]),"__eq",[(0)])]);
smalltalk.send(self,"_assert_",[smalltalk.send(smalltalk.send(self["@full"],"_occurrencesOf_",[(5)]),"__eq",[(1)])]);
smalltalk.send(self["@full"],"_add_",[(5)]);
smalltalk.send(self,"_assert_",[smalltalk.send(smalltalk.send(self["@full"],"_occurrencesOf_",[(5)]),"__eq",[(1)])]);
return self},
args: [],
source: "testOccurrences\x0a\x09self assert: (empty occurrencesOf: 0) = 0.\x0a\x09self assert: (full occurrencesOf: 5) = 1.\x0a\x09full add: 5.\x0a\x09self assert: (full occurrencesOf: 5) = 1",
messageSends: ["assert:", "=", "occurrencesOf:", "add:"],
referencedClasses: []
}),
smalltalk.ExampleSetTest);

smalltalk.addMethod(
"_testRemove",
smalltalk.method({
selector: "testRemove",
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self["@full"],"_remove_",[(5)]);
smalltalk.send(self,"_assert_",[smalltalk.send(self["@full"],"_includes_",[smalltalk.symbolFor("abc")])]);
smalltalk.send(self,"_deny_",[smalltalk.send(self["@full"],"_includes_",[(5)])]);
return self},
args: [],
source: "testRemove\x0a\x09full remove: 5.\x0a\x09self assert: (full includes: #abc).\x0a\x09self deny: (full includes: 5)",
messageSends: ["remove:", "assert:", "includes:", "deny:"],
referencedClasses: []
}),
smalltalk.ExampleSetTest);



smalltalk.addClass('SUnitAsyncTest', smalltalk.TestCase, ['flag'], 'SUnit-Tests');
smalltalk.addMethod(
"_fakeError",
smalltalk.method({
selector: "fakeError",
category: 'helpers',
fn: function (){
var self=this;
self["@flag"]="bad";
smalltalk.send(self,"_timeout_",[(10)]);
self["@flag"]=smalltalk.send(smalltalk.send(self,"_async_",[(function(){
self["@flag"]="ok";
self["@flag"];
return smalltalk.send(self,"_error_",["Intentional"]);
})]),"_valueWithTimeout_",[(5)]);
return self},
args: [],
source: "fakeError\x0a\x09flag := 'bad'.\x0a\x09self timeout: 10.\x0a    flag := (self async: [ flag := 'ok'. self error: 'Intentional' ]) valueWithTimeout: 5\x0a",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "error:"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_fakeErrorFailingInTearDown",
smalltalk.method({
selector: "fakeErrorFailingInTearDown",
category: 'helpers',
fn: function (){
var self=this;
self["@flag"]="bad";
smalltalk.send(self,"_timeout_",[(10)]);
self["@flag"]=smalltalk.send(smalltalk.send(self,"_async_",[(function(){
return smalltalk.send(self,"_error_",["Intentional"]);
})]),"_valueWithTimeout_",[(5)]);
return self},
args: [],
source: "fakeErrorFailingInTearDown\x0a\x09flag := 'bad'.\x0a\x09self timeout: 10.\x0a    flag := (self async: [ self error: 'Intentional' ]) valueWithTimeout: 5\x0a",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "error:"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_fakeFailure",
smalltalk.method({
selector: "fakeFailure",
category: 'helpers',
fn: function (){
var self=this;
self["@flag"]="bad";
smalltalk.send(self,"_timeout_",[(10)]);
self["@flag"]=smalltalk.send(smalltalk.send(self,"_async_",[(function(){
self["@flag"]="ok";
self["@flag"];
return smalltalk.send(self,"_assert_",[false]);
})]),"_valueWithTimeout_",[(5)]);
return self},
args: [],
source: "fakeFailure\x0a\x09flag := 'bad'.\x0a\x09self timeout: 10.\x0a    flag := (self async: [ flag := 'ok'. self assert: false ]) valueWithTimeout: 5\x0a",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "assert:"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_fakeTimeout",
smalltalk.method({
selector: "fakeTimeout",
category: 'helpers',
fn: function (){
var self=this;
smalltalk.send(self,"_timeout_",[(4)]);
smalltalk.send(smalltalk.send(self,"_async_",[(function(){
return smalltalk.send(self,"_finished",[]);
})]),"_valueWithTimeout_",[(5)]);
return self},
args: [],
source: "fakeTimeout\x0a\x09self timeout: 4.\x0a    (self async: [ self finished ]) valueWithTimeout: 5\x0a",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "finished"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_fakeTimeoutFailing",
smalltalk.method({
selector: "fakeTimeoutFailing",
category: 'helpers',
fn: function (){
var self=this;
smalltalk.send(self,"_timeout_",[(100)]);
smalltalk.send(smalltalk.send(self,"_async_",[(function(){
smalltalk.send(self,"_timeout_",[(5)]);
return smalltalk.send(smalltalk.send(self,"_async_",[(function(){
return smalltalk.send(self,"_finished",[]);
})]),"_valueWithTimeout_",[(10)]);
})]),"_valueWithTimeout_",[(5)]);
return self},
args: [],
source: "fakeTimeoutFailing\x0a\x09self timeout: 100.\x0a    (self async: [\x0a\x09\x09self timeout: 5.\x0a        (self async: [ self finished ]) valueWithTimeout: 10\x0a\x09]) valueWithTimeout: 5\x0a",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "finished"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_fakeTimeoutPassing",
smalltalk.method({
selector: "fakeTimeoutPassing",
category: 'helpers',
fn: function (){
var self=this;
smalltalk.send(self,"_timeout_",[(10)]);
smalltalk.send(smalltalk.send(self,"_async_",[(function(){
smalltalk.send(self,"_timeout_",[(20)]);
return smalltalk.send(smalltalk.send(self,"_async_",[(function(){
return smalltalk.send(self,"_finished",[]);
})]),"_valueWithTimeout_",[(10)]);
})]),"_valueWithTimeout_",[(5)]);
return self},
args: [],
source: "fakeTimeoutPassing\x0a\x09self timeout: 10.\x0a    (self async: [\x0a\x09\x09self timeout: 20.\x0a        (self async: [ self finished ]) valueWithTimeout: 10\x0a\x09]) valueWithTimeout: 5\x0a",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "finished"],
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
smalltalk.send(self,"_timeout_",[(200)]);
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
source: "testAsyncErrorsAndFailures\x0a\x09| suite runner result assertBlock |\x0a\x09suite := #('fakeError' 'fakeErrorFailingInTearDown' 'fakeFailure' 'testPass') collect: [ :each | self class selector: each ].\x0a    runner := TestSuiteRunner on: suite.\x0a    self timeout: 200.\x0a\x09result := runner result.\x0a    assertBlock := self async: [\x0a\x09\x09self assert: #('fakeError') equals: (self sortedSelectors: result errors).\x0a\x09\x09self assert: #('fakeErrorFailingInTearDown' 'fakeFailure') equals: (self sortedSelectors: result failures).\x0a\x09\x09self finished\x0a  \x09].\x0a    runner announcer on: ResultAnnouncement do: [:ann |\x0a    \x09ann result == result  ifTrue: [ result runs = result total ifTrue: assertBlock ]].\x0a\x09runner run",
messageSends: ["collect:", "selector:", "class", "on:", "timeout:", "result", "async:", "assert:equals:", "sortedSelectors:", "errors", "failures", "finished", "on:do:", "ifTrue:", "=", "total", "runs", "==", "announcer", "run"],
referencedClasses: ["TestSuiteRunner", "ResultAnnouncement"]
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testAsyncNeedsTimeout",
smalltalk.method({
selector: "testAsyncNeedsTimeout",
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self,"_should_raise_",[(function(){
return smalltalk.send(self,"_async_",[(function(){
})]);
}),(smalltalk.Error || Error)]);
smalltalk.send(self,"_timeout_",[(0)]);
smalltalk.send(self,"_shouldnt_raise_",[(function(){
return smalltalk.send(self,"_async_",[(function(){
})]);
}),(smalltalk.Error || Error)]);
smalltalk.send(self,"_finished",[]);
return self},
args: [],
source: "testAsyncNeedsTimeout\x0a    self should: [ self async: [ ] ] raise: Error.\x0a    self timeout: 0.\x0a    self shouldnt: [ self async: [ ] ] raise: Error.\x0a    self finished\x0a",
messageSends: ["should:raise:", "async:", "timeout:", "shouldnt:raise:", "finished"],
referencedClasses: ["Error"]
}),
smalltalk.SUnitAsyncTest);

smalltalk.addMethod(
"_testFinishedNeedsTimeout",
smalltalk.method({
selector: "testFinishedNeedsTimeout",
category: 'tests',
fn: function (){
var self=this;
smalltalk.send(self,"_should_raise_",[(function(){
return smalltalk.send(self,"_finished",[]);
}),(smalltalk.Error || Error)]);
smalltalk.send(self,"_timeout_",[(0)]);
smalltalk.send(self,"_shouldnt_raise_",[(function(){
return smalltalk.send(self,"_finished",[]);
}),(smalltalk.Error || Error)]);
return self},
args: [],
source: "testFinishedNeedsTimeout\x0a    self should: [ self finished ] raise: Error.\x0a    self timeout: 0.\x0a    self shouldnt: [ self finished ] raise: Error.\x0a",
messageSends: ["should:raise:", "finished", "timeout:", "shouldnt:raise:"],
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
smalltalk.send(self,"_timeout_",[(0)]);
smalltalk.send(self,"_assert_",[smalltalk.send(self,"_isAsync",[])]);
smalltalk.send(self,"_finished",[]);
smalltalk.send(self,"_deny_",[smalltalk.send(self,"_isAsync",[])]);
return self},
args: [],
source: "testIsAsyncReturnsCorrectValues\x0a    self deny: self isAsync.\x0a    self timeout: 0.\x0a    self assert: self isAsync.\x0a    self finished.\x0a    self deny: self isAsync\x0a",
messageSends: ["deny:", "isAsync", "timeout:", "assert:", "finished"],
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
smalltalk.send(self,"_timeout_",[(10)]);
self["@flag"]=smalltalk.send(smalltalk.send(self,"_async_",[(function(){
smalltalk.send(self,"_assert_",[true]);
smalltalk.send(self,"_finished",[]);
self["@flag"]="ok";
return self["@flag"];
})]),"_valueWithTimeout_",[(5)]);
return self},
args: [],
source: "testPass\x0a\x09flag := 'bad'.\x0a\x09self timeout: 10.\x0a    flag := (self async: [ self assert: true. self finished. flag := 'ok' ]) valueWithTimeout: 5\x0a",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "assert:", "finished"],
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
suite=smalltalk.send(["fakeTimeout", "fakeMultipleTimeoutFailing", "fakeMultipleTimeoutPassing", "testPass"],"_collect_",[(function(each){
return smalltalk.send(smalltalk.send(self,"_class",[]),"_selector_",[each]);
})]);
runner=smalltalk.send((smalltalk.TestSuiteRunner || TestSuiteRunner),"_on_",[suite]);
smalltalk.send(self,"_timeout_",[(200)]);
result=smalltalk.send(runner,"_result",[]);
assertBlock=smalltalk.send(self,"_async_",[(function(){
smalltalk.send(self,"_assert_",[smalltalk.send(smalltalk.send(result,"_errors",[]),"_isEmpty",[])]);
smalltalk.send(self,"_assert_equals_",[["fakeMultipleTimeoutFailing", "fakeTimeout"],smalltalk.send(self,"_sortedSelectors_",[smalltalk.send(result,"_failures",[])])]);
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
source: "testTimeouts\x0a\x09| suite runner result assertBlock |\x0a\x09suite := #('fakeTimeout' 'fakeMultipleTimeoutFailing' 'fakeMultipleTimeoutPassing' 'testPass') collect: [ :each | self class selector: each ].\x0a    runner := TestSuiteRunner on: suite.\x0a    self timeout: 200.\x0a\x09result := runner result.\x0a    assertBlock := self async: [\x0a\x09\x09self assert: result errors isEmpty.\x0a\x09\x09self assert: #('fakeMultipleTimeoutFailing' 'fakeTimeout') equals: (self sortedSelectors: result failures).\x0a\x09\x09self finished\x0a  \x09].\x0a    runner announcer on: ResultAnnouncement do: [:ann |\x0a    \x09ann result == result  ifTrue: [ result runs = result total ifTrue: assertBlock ]].\x0a\x09runner run",
messageSends: ["collect:", "selector:", "class", "on:", "timeout:", "result", "async:", "assert:", "isEmpty", "errors", "assert:equals:", "sortedSelectors:", "failures", "finished", "on:do:", "ifTrue:", "=", "total", "runs", "==", "announcer", "run"],
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
smalltalk.send(self,"_timeout_",[(10)]);
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
source: "testTwoAsyncPassesWithFinishedOnlyOneIsRun\x0a\x09| x |\x0a\x09flag := 'bad'.\x0a\x09self timeout: 10.\x0a    x := 0.\x0a    flag := (self async: [ self finished. flag := 'ok'. x := x+1. self assert: 1 equals: x ]) valueWithTimeout: 0.\x0a    flag := (self async: [ self finished. flag := 'ok'. x := x+1. self assert: 1 equals: x ]) valueWithTimeout: 0.\x0a",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "finished", "+", "assert:equals:"],
referencedClasses: []
}),
smalltalk.SUnitAsyncTest);



