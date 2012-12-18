smalltalk.addPackage('SUnit', {});
smalltalk.addClass('ResultAnnouncement', smalltalk.Object, ['result'], 'SUnit');
smalltalk.addMethod(
"_result",
smalltalk.method({
selector: "result",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@result"];
}, self, "result", [], smalltalk.ResultAnnouncement)},
args: [],
source: "result\x0a\x09^result",
messageSends: [],
referencedClasses: []
}),
smalltalk.ResultAnnouncement);

smalltalk.addMethod(
"_result_",
smalltalk.method({
selector: "result:",
category: 'accessing',
fn: function (aTestResult){
var self=this;
return smalltalk.withContext(function($ctx) { self["@result"]=aTestResult;
return self}, self, "result:", [aTestResult], smalltalk.ResultAnnouncement)},
args: ["aTestResult"],
source: "result: aTestResult\x0a\x09result := aTestResult",
messageSends: [],
referencedClasses: []
}),
smalltalk.ResultAnnouncement);



smalltalk.addClass('TestCase', smalltalk.Object, ['testSelector'], 'SUnit');
smalltalk.addMethod(
"_assert_",
smalltalk.method({
selector: "assert:",
category: 'testing',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_description_(aBoolean,"Assertion failed");
return self}, self, "assert:", [aBoolean], smalltalk.TestCase)},
args: ["aBoolean"],
source: "assert: aBoolean\x0a\x09self assert: aBoolean description: 'Assertion failed'",
messageSends: ["assert:description:"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_assert_description_",
smalltalk.method({
selector: "assert:description:",
category: 'testing',
fn: function (aBoolean,aString){
var self=this;
return smalltalk.withContext(function($ctx) { if(! smalltalk.assert(aBoolean)){
_st(self)._signalFailure_(aString);
};
return self}, self, "assert:description:", [aBoolean,aString], smalltalk.TestCase)},
args: ["aBoolean", "aString"],
source: "assert: aBoolean description: aString\x0a\x09aBoolean ifFalse: [self signalFailure: aString]",
messageSends: ["ifFalse:", "signalFailure:"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_assert_equals_",
smalltalk.method({
selector: "assert:equals:",
category: 'testing',
fn: function (expected,actual){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self)._assert_description_(_st(expected).__eq(actual),_st(_st(_st("Expected: ").__comma(_st(expected)._asString())).__comma(" but was: ")).__comma(_st(actual)._asString()));
return $1;
}, self, "assert:equals:", [expected,actual], smalltalk.TestCase)},
args: ["expected", "actual"],
source: "assert: expected equals: actual\x0a\x09^ self assert: (expected = actual) description: 'Expected: ', expected asString, ' but was: ', actual asString",
messageSends: ["assert:description:", "=", ",", "asString"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_deny_",
smalltalk.method({
selector: "deny:",
category: 'testing',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(aBoolean)._not());
return self}, self, "deny:", [aBoolean], smalltalk.TestCase)},
args: ["aBoolean"],
source: "deny: aBoolean\x0a\x09self assert: aBoolean not",
messageSends: ["assert:", "not"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_performTest",
smalltalk.method({
selector: "performTest",
category: 'running',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._perform_(_st(self)._selector());
return self}, self, "performTest", [], smalltalk.TestCase)},
args: [],
source: "performTest\x0a\x09self perform: self selector\x0a",
messageSends: ["perform:", "selector"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_runCase",
smalltalk.method({
selector: "runCase",
category: 'running',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st((function(){
_st(self)._setUp();
return _st(self)._performTest();
}))._ensure_((function(){
return _st(self)._tearDown();
}));
return self}, self, "runCase", [], smalltalk.TestCase)},
args: [],
source: "runCase\x0a\x09[\x09self setUp.\x0a\x09\x09self performTest ] ensure: [\x0a\x09\x09self tearDown.\x0a\x09\x09\x22self cleanUpInstanceVariables\x22 ]\x0a",
messageSends: ["ensure:", "tearDown", "setUp", "performTest"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@testSelector"];
}, self, "selector", [], smalltalk.TestCase)},
args: [],
source: "selector\x0a\x09^testSelector",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_setTestSelector_",
smalltalk.method({
selector: "setTestSelector:",
category: 'accessing',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx) { self["@testSelector"]=aSelector;
return self}, self, "setTestSelector:", [aSelector], smalltalk.TestCase)},
args: ["aSelector"],
source: "setTestSelector: aSelector\x0a\x09testSelector := aSelector",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self}, self, "setUp", [], smalltalk.TestCase)},
args: [],
source: "setUp",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_should_",
smalltalk.method({
selector: "should:",
category: 'testing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st(aBlock)._value());
return self}, self, "should:", [aBlock], smalltalk.TestCase)},
args: ["aBlock"],
source: "should: aBlock\x0a\x09self assert: aBlock value",
messageSends: ["assert:", "value"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_should_raise_",
smalltalk.method({
selector: "should:raise:",
category: 'testing',
fn: function (aBlock,anExceptionClass){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st((function(){
_st(aBlock)._value();
return false;
}))._on_do_(anExceptionClass,(function(ex){
return true;
})));
return self}, self, "should:raise:", [aBlock,anExceptionClass], smalltalk.TestCase)},
args: ["aBlock", "anExceptionClass"],
source: "should: aBlock raise: anExceptionClass\x0a\x09self assert: ([aBlock value. false] \x0a\x09\x09on: anExceptionClass \x0a\x09\x09do: [:ex | true])",
messageSends: ["assert:", "on:do:", "value"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_shouldnt_raise_",
smalltalk.method({
selector: "shouldnt:raise:",
category: 'testing',
fn: function (aBlock,anExceptionClass){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._assert_(_st((function(){
_st(aBlock)._value();
return true;
}))._on_do_(anExceptionClass,(function(ex){
return false;
})));
return self}, self, "shouldnt:raise:", [aBlock,anExceptionClass], smalltalk.TestCase)},
args: ["aBlock", "anExceptionClass"],
source: "shouldnt: aBlock raise: anExceptionClass\x0a\x09self assert: ([aBlock value. true] \x0a\x09\x09on: anExceptionClass \x0a\x09\x09do: [:ex | false])",
messageSends: ["assert:", "on:do:", "value"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_signalFailure_",
smalltalk.method({
selector: "signalFailure:",
category: 'private',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx) { var $1,$2;
$1=_st((smalltalk.TestFailure || TestFailure))._new();
_st($1)._messageText_(aString);
$2=_st($1)._signal();
return self}, self, "signalFailure:", [aString], smalltalk.TestCase)},
args: ["aString"],
source: "signalFailure: aString\x0a\x09TestFailure new\x0a\x09\x09messageText: aString;\x0a\x09\x09signal",
messageSends: ["messageText:", "new", "signal"],
referencedClasses: ["TestFailure"]
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
category: 'running',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self}, self, "tearDown", [], smalltalk.TestCase)},
args: [],
source: "tearDown",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestCase);


smalltalk.addMethod(
"_allTestSelectors",
smalltalk.method({
selector: "allTestSelectors",
category: 'accessing',
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
}, self, "allTestSelectors", [], smalltalk.TestCase.klass)},
args: [],
source: "allTestSelectors\x0a\x09| selectors |\x0a\x09selectors := self testSelectors.\x0a\x09self shouldInheritSelectors ifTrue: [\x0a\x09\x09selectors addAll: self superclass allTestSelectors].\x0a\x09^selectors",
messageSends: ["testSelectors", "ifTrue:", "addAll:", "allTestSelectors", "superclass", "shouldInheritSelectors"],
referencedClasses: []
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_buildSuite",
smalltalk.method({
selector: "buildSuite",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._allTestSelectors())._collect_((function(each){
return _st(self)._selector_(each);
}));
return $1;
}, self, "buildSuite", [], smalltalk.TestCase.klass)},
args: [],
source: "buildSuite\x0a\x09^self allTestSelectors collect: [:each | self selector: each]",
messageSends: ["collect:", "selector:", "allTestSelectors"],
referencedClasses: []
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_isAbstract",
smalltalk.method({
selector: "isAbstract",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._name()).__eq("TestCase");
return $1;
}, self, "isAbstract", [], smalltalk.TestCase.klass)},
args: [],
source: "isAbstract\x0a\x09^ self name = 'TestCase'",
messageSends: ["=", "name"],
referencedClasses: []
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_lookupHierarchyRoot",
smalltalk.method({
selector: "lookupHierarchyRoot",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return (smalltalk.TestCase || TestCase);
}, self, "lookupHierarchyRoot", [], smalltalk.TestCase.klass)},
args: [],
source: "lookupHierarchyRoot\x0a\x09^TestCase",
messageSends: [],
referencedClasses: ["TestCase"]
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
category: 'accessing',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._setTestSelector_(aSelector);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "selector:", [aSelector], smalltalk.TestCase.klass)},
args: ["aSelector"],
source: "selector: aSelector\x0a\x09^self new\x0a\x09\x09setTestSelector: aSelector;\x0a\x09\x09yourself",
messageSends: ["setTestSelector:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_shouldInheritSelectors",
smalltalk.method({
selector: "shouldInheritSelectors",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(self).__tild_eq(_st(self)._lookupHierarchyRoot());
return $1;
}, self, "shouldInheritSelectors", [], smalltalk.TestCase.klass)},
args: [],
source: "shouldInheritSelectors\x0a\x09^self ~= self lookupHierarchyRoot",
messageSends: ["~=", "lookupHierarchyRoot"],
referencedClasses: []
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_testSelectors",
smalltalk.method({
selector: "testSelectors",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(_st(self)._methodDictionary())._keys())._select_((function(each){
return _st(each)._match_("^test");
}));
return $1;
}, self, "testSelectors", [], smalltalk.TestCase.klass)},
args: [],
source: "testSelectors\x0a\x09^self methodDictionary keys select: [:each | each match: '^test']",
messageSends: ["select:", "match:", "keys", "methodDictionary"],
referencedClasses: []
}),
smalltalk.TestCase.klass);


smalltalk.addClass('TestFailure', smalltalk.Error, [], 'SUnit');


smalltalk.addClass('TestResult', smalltalk.Object, ['timestamp', 'runs', 'errors', 'failures', 'total'], 'SUnit');
smalltalk.addMethod(
"_addError_",
smalltalk.method({
selector: "addError:",
category: 'accessing',
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx) { _st(_st(self)._errors())._add_(anError);
return self}, self, "addError:", [anError], smalltalk.TestResult)},
args: ["anError"],
source: "addError: anError\x0a\x09self errors add: anError",
messageSends: ["add:", "errors"],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_addFailure_",
smalltalk.method({
selector: "addFailure:",
category: 'accessing',
fn: function (aFailure){
var self=this;
return smalltalk.withContext(function($ctx) { _st(_st(self)._failures())._add_(aFailure);
return self}, self, "addFailure:", [aFailure], smalltalk.TestResult)},
args: ["aFailure"],
source: "addFailure: aFailure\x0a\x09self failures add: aFailure",
messageSends: ["add:", "failures"],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_errors",
smalltalk.method({
selector: "errors",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@errors"];
}, self, "errors", [], smalltalk.TestResult)},
args: [],
source: "errors\x0a\x09^errors",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_failures",
smalltalk.method({
selector: "failures",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@failures"];
}, self, "failures", [], smalltalk.TestResult)},
args: [],
source: "failures\x0a\x09^failures",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_increaseRuns",
smalltalk.method({
selector: "increaseRuns",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { self["@runs"]=_st(self["@runs"]).__plus((1));
return self}, self, "increaseRuns", [], smalltalk.TestResult)},
args: [],
source: "increaseRuns\x0a\x09runs := runs + 1",
messageSends: ["+"],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@timestamp"]=_st((smalltalk.Date || Date))._now();
self["@runs"]=(0);
self["@errors"]=_st((smalltalk.Array || Array))._new();
self["@failures"]=_st((smalltalk.Array || Array))._new();
self["@total"]=(0);
return self}, self, "initialize", [], smalltalk.TestResult)},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09timestamp := Date now.\x0a\x09runs := 0.\x0a\x09errors := Array new.\x0a\x09failures := Array new.\x0a\x09total := 0",
messageSends: ["initialize", "now", "new"],
referencedClasses: ["Date", "Array"]
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_nextRunDo_",
smalltalk.method({
selector: "nextRunDo:",
category: 'running',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx) { var $2,$1;
$2=_st(_st(self)._runs()).__eq_eq(_st(self)._total());
if(! smalltalk.assert($2)){
$1=_st(aBlock)._value_(_st(_st(self)._runs()).__plus((1)));
};
return $1;
}, self, "nextRunDo:", [aBlock], smalltalk.TestResult)},
args: ["aBlock"],
source: "nextRunDo: aBlock\x0a\x22Runs aBlock with index of next run\x0aor does nothing if no more runs\x22\x0a^self runs == self total\x0a\x09ifFalse: [ aBlock value: self runs + 1 ]",
messageSends: ["ifFalse:", "value:", "+", "runs", "==", "total"],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_runCase_",
smalltalk.method({
selector: "runCase:",
category: 'running',
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
return self}, self, "runCase:", [aTestCase], smalltalk.TestResult)},
args: ["aTestCase"],
source: "runCase: aTestCase\x0a\x09[[\x09self increaseRuns.\x0a    \x09aTestCase runCase]\x0a\x09on: TestFailure do: [:ex | self addFailure: aTestCase]]\x0a\x09on: Error do: [:ex | self addError: aTestCase]\x0a",
messageSends: ["on:do:", "addError:", "addFailure:", "increaseRuns", "runCase"],
referencedClasses: ["Error", "TestFailure"]
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_runs",
smalltalk.method({
selector: "runs",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@runs"];
}, self, "runs", [], smalltalk.TestResult)},
args: [],
source: "runs\x0a\x09^runs",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_status",
smalltalk.method({
selector: "status",
category: 'accessing',
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
}, self, "status", [], smalltalk.TestResult)},
args: [],
source: "status\x0a\x09^self errors isEmpty \x0a\x09\x09ifTrue: [\x0a\x09\x09\x09self failures isEmpty \x0a\x09\x09\x09\x09ifTrue: ['success']\x0a\x09\x09\x09\x09ifFalse: ['failure']]\x0a\x09\x09ifFalse: ['error']",
messageSends: ["ifTrue:ifFalse:", "isEmpty", "failures", "errors"],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_timestamp",
smalltalk.method({
selector: "timestamp",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@timestamp"];
}, self, "timestamp", [], smalltalk.TestResult)},
args: [],
source: "timestamp\x0a\x09^timestamp",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_total",
smalltalk.method({
selector: "total",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@total"];
}, self, "total", [], smalltalk.TestResult)},
args: [],
source: "total\x0a\x09^total",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_total_",
smalltalk.method({
selector: "total:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx) { self["@total"]=aNumber;
return self}, self, "total:", [aNumber], smalltalk.TestResult)},
args: ["aNumber"],
source: "total: aNumber\x0a\x09total := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);



smalltalk.addClass('TestSuiteRunner', smalltalk.Object, ['suite', 'result', 'announcer'], 'SUnit');
smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@announcer"];
}, self, "announcer", [], smalltalk.TestSuiteRunner)},
args: [],
source: "announcer\x0a\x09^announcer",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@announcer"]=_st((smalltalk.Announcer || Announcer))._new();
self["@result"]=_st((smalltalk.TestResult || TestResult))._new();
return self}, self, "initialize", [], smalltalk.TestSuiteRunner)},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09announcer := Announcer new.\x0a    result := TestResult new",
messageSends: ["initialize", "new"],
referencedClasses: ["Announcer", "TestResult"]
}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
"_result",
smalltalk.method({
selector: "result",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@result"];
}, self, "result", [], smalltalk.TestSuiteRunner)},
args: [],
source: "result\x0a\x09^result",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
"_run",
smalltalk.method({
selector: "run",
category: 'actions',
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
return self}, self, "run", [], smalltalk.TestSuiteRunner)},
args: [],
source: "run\x0a\x09| worker |\x0a\x09result total: suite size.\x0a    announcer announce: (ResultAnnouncement new result: result).\x0a    worker := [ result nextRunDo: [ :index |\x0a\x09\x09[ result runCase: (suite at: index) ]\x0a\x09\x09ensure: [ worker valueWithTimeout: 0.\x0a        \x09announcer announce: (ResultAnnouncement new result: result) ]]].\x0a\x09(suite size min: 25) timesRepeat: [ worker valueWithTimeout: 0 ]",
messageSends: ["total:", "size", "announce:", "result:", "new", "nextRunDo:", "ensure:", "valueWithTimeout:", "runCase:", "at:", "timesRepeat:", "min:"],
referencedClasses: ["ResultAnnouncement"]
}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
"_suite_",
smalltalk.method({
selector: "suite:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx) { self["@suite"]=aCollection;
return self}, self, "suite:", [aCollection], smalltalk.TestSuiteRunner)},
args: ["aCollection"],
source: "suite: aCollection\x0a\x09suite := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestSuiteRunner);


smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._shouldNotImplement();
return self}, self, "new", [], smalltalk.TestSuiteRunner.klass)},
args: [],
source: "new\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.TestSuiteRunner.klass);

smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(smalltalk.Object.klass.fn.prototype._new.apply(_st(self), []))._suite_(aCollection);
return $1;
}, self, "on:", [aCollection], smalltalk.TestSuiteRunner.klass)},
args: ["aCollection"],
source: "on: aCollection\x0a\x09^super new suite: aCollection",
messageSends: ["suite:", "new"],
referencedClasses: []
}),
smalltalk.TestSuiteRunner.klass);


