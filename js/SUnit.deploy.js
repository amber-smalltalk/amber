smalltalk.addClass('TestCase', smalltalk.Object, ['testedClass'], 'SUnit');
smalltalk.addMethod(
'_testedClass',
smalltalk.method({
selector: 'testedClass',
fn: function (){
var self=this;
return self['@testedClass'];
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_testedClass_',
smalltalk.method({
selector: 'testedClass:',
fn: function (aClass){
var self=this;
self['@testedClass']=aClass;
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_cleanUpInstanceVariables',
smalltalk.method({
selector: 'cleanUpInstanceVariables',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_instanceVariableNames", []), "_do_", [(function(name){return (($receiver = smalltalk.send(name, "__eq", ["testSelector"])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_instVarAt_put_", [name, nil]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_instVarAt_put_", [name, nil]);})]);})]);
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_signalFailure_',
smalltalk.method({
selector: 'signalFailure:',
fn: function (aString){
var self=this;
(function($rec){smalltalk.send($rec, "_messageText_", [aString]);return smalltalk.send($rec, "_signal", []);})(smalltalk.send((smalltalk.TestFailure || TestFailure), "_new", []));
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_setUp',
smalltalk.method({
selector: 'setUp',
fn: function (){
var self=this;

return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_tearDown',
smalltalk.method({
selector: 'tearDown',
fn: function (){
var self=this;

return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_methods',
smalltalk.method({
selector: 'methods',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_methodDictionary", []), "_keys", []), "_select_", [(function(each){return smalltalk.send(each, "_match_", [unescape("%5Etest")]);})]);
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_runCaseFor_',
smalltalk.method({
selector: 'runCaseFor:',
fn: function (aTestResult){
var self=this;
smalltalk.send((function(){smalltalk.send(self, "_setUp", []);return smalltalk.send(self, "_performTestFor_", [aTestResult]);}), "_on_do_", [(smalltalk.Error || Error), (function(ex){smalltalk.send(self, "_tearDown", []);smalltalk.send(self, "_cleanUpInstanceVariables", []);return smalltalk.send(ex, "_signal", []);})]);
smalltalk.send(self, "_tearDown", []);
smalltalk.send(self, "_cleanUpInstanceVariables", []);
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_performTestFor_',
smalltalk.method({
selector: 'performTestFor:',
fn: function (aResult){
var self=this;
smalltalk.send(smalltalk.send(self, "_methods", []), "_do_", [(function(each){smalltalk.send((function(){return smalltalk.send((function(){return smalltalk.send(self, "_perform_", [each]);}), "_on_do_", [(smalltalk.TestFailure || TestFailure), (function(ex){return smalltalk.send(aResult, "_addFailure_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_name", []), "__comma", [unescape("%3E%3E")]), "__comma", [each]), "__comma", [": "]), "__comma", [smalltalk.send(ex, "_messageText", [])])]);})]);}), "_on_do_", [(smalltalk.Error || Error), (function(ex){return smalltalk.send(aResult, "_addError_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_name", []), "__comma", [unescape("%3E%3E")]), "__comma", [each]), "__comma", [": "]), "__comma", [smalltalk.send(ex, "_messageText", [])])]);})]);return smalltalk.send(aResult, "_increaseRuns", []);})]);
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_assert_',
smalltalk.method({
selector: 'assert:',
fn: function (aBoolean){
var self=this;
smalltalk.send(self, "_assert_description_", [aBoolean, "Assertion failed"]);
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_deny_',
smalltalk.method({
selector: 'deny:',
fn: function (aBoolean){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(aBoolean, "_not", [])]);
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_assert_equals_',
smalltalk.method({
selector: 'assert:equals:',
fn: function (expected, actual){
var self=this;
return smalltalk.send(self, "_assert_description_", [smalltalk.send(expected, "__eq", [actual]), smalltalk.send(smalltalk.send(smalltalk.send("Expected: ", "__comma", [smalltalk.send(expected, "_asString", [])]), "__comma", [" but was: "]), "__comma", [smalltalk.send(actual, "_asString", [])])]);
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
'_assert_description_',
smalltalk.method({
selector: 'assert:description:',
fn: function (aBoolean, aString){
var self=this;
(($receiver = aBoolean).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_signalFailure_", [aString]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_signalFailure_", [aString]);})]);
return self;}
}),
smalltalk.TestCase);



smalltalk.addClass('TestFailure', smalltalk.Error, [], 'SUnit');


smalltalk.addClass('TestResult', smalltalk.Object, ['timestamp', 'runs', 'errors', 'failures', 'total'], 'SUnit');
smalltalk.addMethod(
'_timestamp',
smalltalk.method({
selector: 'timestamp',
fn: function (){
var self=this;
return self['@timestamp'];
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_errors',
smalltalk.method({
selector: 'errors',
fn: function (){
var self=this;
return self['@errors'];
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_failures',
smalltalk.method({
selector: 'failures',
fn: function (){
var self=this;
return self['@failures'];
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_total',
smalltalk.method({
selector: 'total',
fn: function (){
var self=this;
return self['@total'];
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_total_',
smalltalk.method({
selector: 'total:',
fn: function (aNumber){
var self=this;
self['@total']=aNumber;
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_addError_',
smalltalk.method({
selector: 'addError:',
fn: function (anError){
var self=this;
smalltalk.send(smalltalk.send(self, "_errors", []), "_add_", [anError]);
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_addFailure_',
smalltalk.method({
selector: 'addFailure:',
fn: function (aFailure){
var self=this;
smalltalk.send(smalltalk.send(self, "_failures", []), "_add_", [aFailure]);
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_runs',
smalltalk.method({
selector: 'runs',
fn: function (){
var self=this;
return self['@runs'];
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_increaseRuns',
smalltalk.method({
selector: 'increaseRuns',
fn: function (){
var self=this;
self['@runs']=(($receiver = self['@runs']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]);
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_status',
smalltalk.method({
selector: 'status',
fn: function (){
var self=this;
return (($receiver = smalltalk.send(smalltalk.send(self, "_errors", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(smalltalk.send(self, "_failures", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "success";})() : (function(){return "failure";})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "success";}), (function(){return "failure";})]);})() : (function(){return "error";})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (($receiver = smalltalk.send(smalltalk.send(self, "_failures", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "success";})() : (function(){return "failure";})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "success";}), (function(){return "failure";})]);}), (function(){return "error";})]);
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
self['@timestamp']=smalltalk.send((smalltalk.Date || Date), "_now", []);
self['@runs']=(0);
self['@errors']=smalltalk.send((smalltalk.Array || Array), "_new", []);
self['@failures']=smalltalk.send((smalltalk.Array || Array), "_new", []);
self['@total']=(0);
return self;}
}),
smalltalk.TestResult);



