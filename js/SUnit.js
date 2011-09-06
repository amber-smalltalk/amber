smalltalk.addClass('TestCase', smalltalk.Object, ['testedClass'], 'SUnit');
smalltalk.addMethod(
'_testedClass',
smalltalk.method({
selector: 'testedClass',
category: 'accessing',
fn: function (){
var self=this;
return self['@testedClass'];
return self;},
source: unescape('testedClass%0A%09%5EtestedClass'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_testedClass_',
smalltalk.method({
selector: 'testedClass:',
category: 'accessing',
fn: function (aClass){
var self=this;
self['@testedClass']=aClass;
return self;},
source: unescape('testedClass%3A%20aClass%0A%09testedClass%20%3A%3D%20aClass'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_cleanUpInstanceVariables',
smalltalk.method({
selector: 'cleanUpInstanceVariables',
category: 'private',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_instanceVariableNames", []), "_do_", [(function(name){return (($receiver = smalltalk.send(name, "__eq", ["testSelector"])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_instVarAt_put_", [name, nil]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_instVarAt_put_", [name, nil]);})]);})]);
return self;},
source: unescape('cleanUpInstanceVariables%0A%09self%20class%20instanceVariableNames%20do%3A%20%5B%20%3Aname%20%7C%0A%09%09name%20%3D%20%27testSelector%27%20ifFalse%3A%20%5B%0A%09%09%09self%20instVarAt%3A%20name%20put%3A%20nil%20%5D%5D'),
messageSends: ["do:", "instanceVariableNames", "class", "ifFalse:", unescape("%3D"), "instVarAt:put:"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_signalFailure_',
smalltalk.method({
selector: 'signalFailure:',
category: 'private',
fn: function (aString){
var self=this;
(function($rec){smalltalk.send($rec, "_messageText_", [aString]);return smalltalk.send($rec, "_signal", []);})(smalltalk.send((smalltalk.TestFailure || TestFailure), "_new", []));
return self;},
source: unescape('signalFailure%3A%20aString%0A%09TestFailure%20new%0A%09%09messageText%3A%20aString%3B%0A%09%09signal'),
messageSends: ["messageText:", "signal", "new"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_setUp',
smalltalk.method({
selector: 'setUp',
category: 'running',
fn: function (){
var self=this;

return self;},
source: unescape('setUp'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_tearDown',
smalltalk.method({
selector: 'tearDown',
category: 'running',
fn: function (){
var self=this;

return self;},
source: unescape('tearDown'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_methods',
smalltalk.method({
selector: 'methods',
category: 'running',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_methodDictionary", []), "_keys", []), "_select_", [(function(each){return smalltalk.send(each, "_match_", [unescape("%5Etest")]);})]);
return self;},
source: unescape('methods%0A%09%5Eself%20class%20methodDictionary%20keys%20select%3A%20%5B%3Aeach%20%7C%20each%20match%3A%20%27%5Etest%27%5D'),
messageSends: ["select:", "keys", "methodDictionary", "class", "match:"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_runCaseFor_',
smalltalk.method({
selector: 'runCaseFor:',
category: 'running',
fn: function (aTestResult){
var self=this;
smalltalk.send((function(){smalltalk.send(self, "_setUp", []);return smalltalk.send(self, "_performTestFor_", [aTestResult]);}), "_on_do_", [(smalltalk.Error || Error), (function(ex){smalltalk.send(self, "_tearDown", []);smalltalk.send(self, "_cleanUpInstanceVariables", []);return smalltalk.send(ex, "_signal", []);})]);
smalltalk.send(self, "_tearDown", []);
smalltalk.send(self, "_cleanUpInstanceVariables", []);
return self;},
source: unescape('runCaseFor%3A%20aTestResult%0A%09%5Bself%20setUp.%0A%09self%20performTestFor%3A%20aTestResult%5D%0A%09%09on%3A%20Error%0A%09%09do%3A%20%5B%3Aex%20%7C%0A%09%09%09self%20tearDown.%0A%09%09%09self%20cleanUpInstanceVariables.%0A%09%09%09ex%20signal%5D.%0A%09self%20tearDown.%0A%09self%20cleanUpInstanceVariables'),
messageSends: ["on:do:", "setUp", "performTestFor:", "tearDown", "cleanUpInstanceVariables", "signal"],
referencedClasses: [smalltalk.Error]
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_performTestFor_',
smalltalk.method({
selector: 'performTestFor:',
category: 'running',
fn: function (aResult){
var self=this;
smalltalk.send(smalltalk.send(self, "_methods", []), "_do_", [(function(each){smalltalk.send((function(){return smalltalk.send((function(){return smalltalk.send(self, "_perform_", [each]);}), "_on_do_", [(smalltalk.TestFailure || TestFailure), (function(ex){return smalltalk.send(aResult, "_addFailure_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_name", []), "__comma", [unescape("%3E%3E")]), "__comma", [each]), "__comma", [": "]), "__comma", [smalltalk.send(ex, "_messageText", [])])]);})]);}), "_on_do_", [(smalltalk.Error || Error), (function(ex){return smalltalk.send(aResult, "_addError_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_name", []), "__comma", [unescape("%3E%3E")]), "__comma", [each]), "__comma", [": "]), "__comma", [smalltalk.send(ex, "_messageText", [])])]);})]);return smalltalk.send(aResult, "_increaseRuns", []);})]);
return self;},
source: unescape('performTestFor%3A%20aResult%0A%09self%20methods%20do%3A%20%5B%3Aeach%20%7C%20%0A%09%09%5B%5Bself%20perform%3A%20each%5D%0A%09%09%09on%3A%20TestFailure%20do%3A%20%5B%3Aex%20%7C%20aResult%20addFailure%3A%20self%20class%20name%2C%20%27%3E%3E%27%2C%20each%2C%20%27%3A%20%27%2C%20ex%20messageText%5D%5D%0A%09%09%09on%3A%20Error%20do%3A%20%5B%3Aex%20%7C%20aResult%20addError%3A%20self%20class%20name%2C%20%27%3E%3E%27%2C%20each%2C%20%27%3A%20%27%2C%20ex%20messageText%5D.%0A%09%09aResult%20increaseRuns%5D'),
messageSends: ["do:", "methods", "on:do:", "perform:", "addFailure:", unescape("%2C"), "name", "class", "messageText", "addError:", "increaseRuns"],
referencedClasses: [smalltalk.Error]
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_assert_',
smalltalk.method({
selector: 'assert:',
category: 'testing',
fn: function (aBoolean){
var self=this;
smalltalk.send(self, "_assert_description_", [aBoolean, "Assertion failed"]);
return self;},
source: unescape('assert%3A%20aBoolean%0A%09self%20assert%3A%20aBoolean%20description%3A%20%27Assertion%20failed%27'),
messageSends: ["assert:description:"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_deny_',
smalltalk.method({
selector: 'deny:',
category: 'testing',
fn: function (aBoolean){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(aBoolean, "_not", [])]);
return self;},
source: unescape('deny%3A%20aBoolean%0A%09self%20assert%3A%20aBoolean%20not'),
messageSends: ["assert:", "not"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_assert_equals_',
smalltalk.method({
selector: 'assert:equals:',
category: 'testing',
fn: function (expected, actual){
var self=this;
return smalltalk.send(self, "_assert_description_", [smalltalk.send(expected, "__eq", [actual]), smalltalk.send(smalltalk.send(smalltalk.send("Expected: ", "__comma", [smalltalk.send(expected, "_asString", [])]), "__comma", [" but was: "]), "__comma", [smalltalk.send(actual, "_asString", [])])]);
return self;},
source: unescape('assert%3A%20expected%20equals%3A%20actual%0A%09%5E%20self%20assert%3A%20%28expected%20%3D%20actual%29%20description%3A%20%27Expected%3A%20%27%2C%20expected%20asString%2C%20%27%20but%20was%3A%20%27%2C%20actual%20asString'),
messageSends: ["assert:description:", unescape("%3D"), unescape("%2C"), "asString"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_assert_description_',
smalltalk.method({
selector: 'assert:description:',
category: 'testing',
fn: function (aBoolean, aString){
var self=this;
(($receiver = aBoolean).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_signalFailure_", [aString]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_signalFailure_", [aString]);})]);
return self;},
source: unescape('assert%3A%20aBoolean%20description%3A%20aString%0A%09aBoolean%20ifFalse%3A%20%5Bself%20signalFailure%3A%20aString%5D'),
messageSends: ["ifFalse:", "signalFailure:"],
referencedClasses: []
}),
smalltalk.TestCase);



smalltalk.addClass('TestFailure', smalltalk.Error, [], 'SUnit');


smalltalk.addClass('TestResult', smalltalk.Object, ['timestamp', 'runs', 'errors', 'failures', 'total'], 'SUnit');
smalltalk.addMethod(
'_timestamp',
smalltalk.method({
selector: 'timestamp',
category: 'accessing',
fn: function (){
var self=this;
return self['@timestamp'];
return self;},
source: unescape('timestamp%0A%09%5Etimestamp'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_errors',
smalltalk.method({
selector: 'errors',
category: 'accessing',
fn: function (){
var self=this;
return self['@errors'];
return self;},
source: unescape('errors%0A%09%5Eerrors'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_failures',
smalltalk.method({
selector: 'failures',
category: 'accessing',
fn: function (){
var self=this;
return self['@failures'];
return self;},
source: unescape('failures%0A%09%5Efailures'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_total',
smalltalk.method({
selector: 'total',
category: 'accessing',
fn: function (){
var self=this;
return self['@total'];
return self;},
source: unescape('total%0A%09%5Etotal'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_total_',
smalltalk.method({
selector: 'total:',
category: 'accessing',
fn: function (aNumber){
var self=this;
self['@total']=aNumber;
return self;},
source: unescape('total%3A%20aNumber%0A%09total%20%3A%3D%20aNumber'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_addError_',
smalltalk.method({
selector: 'addError:',
category: 'accessing',
fn: function (anError){
var self=this;
smalltalk.send(smalltalk.send(self, "_errors", []), "_add_", [anError]);
return self;},
source: unescape('addError%3A%20anError%0A%09self%20errors%20add%3A%20anError'),
messageSends: ["add:", "errors"],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_addFailure_',
smalltalk.method({
selector: 'addFailure:',
category: 'accessing',
fn: function (aFailure){
var self=this;
smalltalk.send(smalltalk.send(self, "_failures", []), "_add_", [aFailure]);
return self;},
source: unescape('addFailure%3A%20aFailure%0A%09self%20failures%20add%3A%20aFailure'),
messageSends: ["add:", "failures"],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_runs',
smalltalk.method({
selector: 'runs',
category: 'accessing',
fn: function (){
var self=this;
return self['@runs'];
return self;},
source: unescape('runs%0A%09%5Eruns'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_increaseRuns',
smalltalk.method({
selector: 'increaseRuns',
category: 'accessing',
fn: function (){
var self=this;
self['@runs']=(($receiver = self['@runs']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]);
return self;},
source: unescape('increaseRuns%0A%09runs%20%3A%3D%20runs%20+%201'),
messageSends: [unescape("+")],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_status',
smalltalk.method({
selector: 'status',
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = smalltalk.send(smalltalk.send(self, "_errors", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(smalltalk.send(self, "_failures", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "success";})() : (function(){return "failure";})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "success";}), (function(){return "failure";})]);})() : (function(){return "error";})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (($receiver = smalltalk.send(smalltalk.send(self, "_failures", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "success";})() : (function(){return "failure";})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "success";}), (function(){return "failure";})]);}), (function(){return "error";})]);
return self;},
source: unescape('status%0A%09%5Eself%20errors%20isEmpty%20%0A%09%09ifTrue%3A%20%5B%0A%09%09%09self%20failures%20isEmpty%20%0A%09%09%09%09ifTrue%3A%20%5B%27success%27%5D%0A%09%09%09%09ifFalse%3A%20%5B%27failure%27%5D%5D%0A%09%09ifFalse%3A%20%5B%27error%27%5D'),
messageSends: ["ifTrue:ifFalse:", "isEmpty", "errors", "failures"],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
self['@timestamp']=smalltalk.send((smalltalk.Date || Date), "_now", []);
self['@runs']=(0);
self['@errors']=smalltalk.send((smalltalk.Array || Array), "_new", []);
self['@failures']=smalltalk.send((smalltalk.Array || Array), "_new", []);
self['@total']=(0);
return self;},
source: unescape('initialize%0A%09super%20initialize.%0A%09timestamp%20%3A%3D%20Date%20now.%0A%09runs%20%3A%3D%200.%0A%09errors%20%3A%3D%20Array%20new.%0A%09failures%20%3A%3D%20Array%20new.%0A%09total%20%3A%3D%200'),
messageSends: ["initialize", "now", "new"],
referencedClasses: [smalltalk.Date,smalltalk.Array]
}),
smalltalk.TestResult);



