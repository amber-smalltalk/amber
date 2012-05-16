smalltalk.addPackage('SUnit', {});
smalltalk.addClass('TestCase', smalltalk.Object, ['testSelector'], 'SUnit');
smalltalk.addMethod(
"_assert_",
smalltalk.method({
selector: "assert:",
fn: function TestCase_assert_(aBoolean){
var self=this;
smalltalk.send(self, "_assert_description_", [aBoolean, "Assertion failed"]);
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_assert_description_",
smalltalk.method({
selector: "assert:description:",
fn: function TestCase_assert_description_(aBoolean, aString){
var self=this;
((($receiver = aBoolean).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_signalFailure_", [aString]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_signalFailure_", [aString]);})]));
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_assert_equals_",
smalltalk.method({
selector: "assert:equals:",
fn: function TestCase_assert_equals_(expected, actual){
var self=this;
return smalltalk.send(self, "_assert_description_", [smalltalk.send(expected, "__eq", [actual]), smalltalk.send(smalltalk.send(smalltalk.send("Expected: ", "__comma", [smalltalk.send(expected, "_asString", [])]), "__comma", [" but was: "]), "__comma", [smalltalk.send(actual, "_asString", [])])]);
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_deny_",
smalltalk.method({
selector: "deny:",
fn: function TestCase_deny_(aBoolean){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(aBoolean, "_not", [])]);
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_performTestFor_",
smalltalk.method({
selector: "performTestFor:",
fn: function TestCase_performTestFor_(aResult){
var self=this;
smalltalk.send((function(){return smalltalk.send((function(){return smalltalk.send(self, "_perform_", [smalltalk.send(self, "_selector", [])]);}), "_on_do_", [(smalltalk.TestFailure || TestFailure), (function(ex){return smalltalk.send(aResult, "_addFailure_", [self]);})]);}), "_on_do_", [(smalltalk.Error || Error), (function(ex){return smalltalk.send(aResult, "_addError_", [self]);})]);
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_runCaseFor_",
smalltalk.method({
selector: "runCaseFor:",
fn: function TestCase_runCaseFor_(aTestResult){
var self=this;
smalltalk.send(self, "_setUp", []);
smalltalk.send(aTestResult, "_increaseRuns", []);
smalltalk.send(self, "_performTestFor_", [aTestResult]);
smalltalk.send(self, "_tearDown", []);
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function TestCase_selector(){
var self=this;
return self['@testSelector'];
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_setTestSelector_",
smalltalk.method({
selector: "setTestSelector:",
fn: function TestCase_setTestSelector_(aSelector){
var self=this;
(self['@testSelector']=aSelector);
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function TestCase_setUp(){
var self=this;

return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_should_",
smalltalk.method({
selector: "should:",
fn: function TestCase_should_(aBlock){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(aBlock, "_value", [])]);
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_should_raise_",
smalltalk.method({
selector: "should:raise:",
fn: function TestCase_should_raise_(aBlock, anExceptionClass){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send((function(){smalltalk.send(aBlock, "_value", []);return false;}), "_on_do_", [anExceptionClass, (function(ex){return true;})])]);
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_signalFailure_",
smalltalk.method({
selector: "signalFailure:",
fn: function TestCase_signalFailure_(aString){
var self=this;
(function($rec){smalltalk.send($rec, "_messageText_", [aString]);return smalltalk.send($rec, "_signal", []);})(smalltalk.send((smalltalk.TestFailure || TestFailure), "_new", []));
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
fn: function TestCase_tearDown(){
var self=this;

return self;}
}),
smalltalk.TestCase);


smalltalk.addMethod(
"_allTestSelectors",
smalltalk.method({
selector: "allTestSelectors",
fn: function TestCase_class_allTestSelectors(){
var self=this;
var selectors=nil;
(selectors=smalltalk.send(self, "_testSelectors", []));
((($receiver = smalltalk.send(self, "_shouldInheritSelectors", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(selectors, "_addAll_", [smalltalk.send(smalltalk.send(self, "_superclass", []), "_allTestSelectors", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(selectors, "_addAll_", [smalltalk.send(smalltalk.send(self, "_superclass", []), "_allTestSelectors", [])]);})]));
return selectors;
return self;}
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_buildSuite",
smalltalk.method({
selector: "buildSuite",
fn: function TestCase_class_buildSuite(){
var self=this;
return smalltalk.send(smalltalk.send(self, "_allTestSelectors", []), "_collect_", [(function(each){return smalltalk.send(self, "_selector_", [each]);})]);
return self;}
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_lookupHierarchyRoot",
smalltalk.method({
selector: "lookupHierarchyRoot",
fn: function TestCase_class_lookupHierarchyRoot(){
var self=this;
return (smalltalk.TestCase || TestCase);
return self;}
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function TestCase_class_selector_(aSelector){
var self=this;
return (function($rec){smalltalk.send($rec, "_setTestSelector_", [aSelector]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_shouldInheritSelectors",
smalltalk.method({
selector: "shouldInheritSelectors",
fn: function TestCase_class_shouldInheritSelectors(){
var self=this;
return smalltalk.send(self, "_~_eq", [smalltalk.send(self, "_lookupHierarchyRoot", [])]);
return self;}
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_testSelectors",
smalltalk.method({
selector: "testSelectors",
fn: function TestCase_class_testSelectors(){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_methodDictionary", []), "_keys", []), "_select_", [(function(each){return smalltalk.send(each, "_match_", ["^test"]);})]);
return self;}
}),
smalltalk.TestCase.klass);


smalltalk.addClass('TestFailure', smalltalk.Error, [], 'SUnit');


smalltalk.addClass('TestResult', smalltalk.Object, ['timestamp', 'runs', 'errors', 'failures', 'total'], 'SUnit');
smalltalk.addMethod(
"_addError_",
smalltalk.method({
selector: "addError:",
fn: function TestResult_addError_(anError){
var self=this;
smalltalk.send(smalltalk.send(self, "_errors", []), "_add_", [anError]);
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_addFailure_",
smalltalk.method({
selector: "addFailure:",
fn: function TestResult_addFailure_(aFailure){
var self=this;
smalltalk.send(smalltalk.send(self, "_failures", []), "_add_", [aFailure]);
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_errors",
smalltalk.method({
selector: "errors",
fn: function TestResult_errors(){
var self=this;
return self['@errors'];
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_failures",
smalltalk.method({
selector: "failures",
fn: function TestResult_failures(){
var self=this;
return self['@failures'];
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_increaseRuns",
smalltalk.method({
selector: "increaseRuns",
fn: function TestResult_increaseRuns(){
var self=this;
(self['@runs']=((($receiver = self['@runs']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function TestResult_initialize(){
var self=this;
smalltalk.send(self, "_initialize", [], TestResult_initialize.method.methodClass.superclass || nil);
(self['@timestamp']=smalltalk.send((smalltalk.Date || Date), "_now", []));
(self['@runs']=(0));
(self['@errors']=smalltalk.send((smalltalk.Array || Array), "_new", []));
(self['@failures']=smalltalk.send((smalltalk.Array || Array), "_new", []));
(self['@total']=(0));
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_runs",
smalltalk.method({
selector: "runs",
fn: function TestResult_runs(){
var self=this;
return self['@runs'];
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_status",
smalltalk.method({
selector: "status",
fn: function TestResult_status(){
var self=this;
return ((($receiver = smalltalk.send(smalltalk.send(self, "_errors", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_failures", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "success";})() : (function(){return "failure";})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "success";}), (function(){return "failure";})]));})() : (function(){return "error";})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_failures", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "success";})() : (function(){return "failure";})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "success";}), (function(){return "failure";})]));}), (function(){return "error";})]));
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_timestamp",
smalltalk.method({
selector: "timestamp",
fn: function TestResult_timestamp(){
var self=this;
return self['@timestamp'];
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_total",
smalltalk.method({
selector: "total",
fn: function TestResult_total(){
var self=this;
return self['@total'];
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_total_",
smalltalk.method({
selector: "total:",
fn: function TestResult_total_(aNumber){
var self=this;
(self['@total']=aNumber);
return self;}
}),
smalltalk.TestResult);



