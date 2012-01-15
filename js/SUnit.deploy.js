smalltalk.addPackage('SUnit', {});
smalltalk.addClass('TestCase', smalltalk.Object, ['testSelector'], 'SUnit');
smalltalk.addMethod(
unescape('_setTestSelector_'),
smalltalk.method({
selector: unescape('setTestSelector%3A'),
fn: function (aSelector){
var self=this;
(self['@testSelector']=aSelector);
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
unescape('_selector'),
smalltalk.method({
selector: unescape('selector'),
fn: function (){
var self=this;
return self['@testSelector'];
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
unescape('_signalFailure_'),
smalltalk.method({
selector: unescape('signalFailure%3A'),
fn: function (aString){
var self=this;
(function($rec){smalltalk.send($rec, "_messageText_", [aString]);return smalltalk.send($rec, "_signal", []);})(smalltalk.send((smalltalk.TestFailure || TestFailure), "_new", []));
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
unescape('_setUp'),
smalltalk.method({
selector: unescape('setUp'),
fn: function (){
var self=this;

return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
unescape('_tearDown'),
smalltalk.method({
selector: unescape('tearDown'),
fn: function (){
var self=this;

return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
unescape('_runCaseFor_'),
smalltalk.method({
selector: unescape('runCaseFor%3A'),
fn: function (aTestResult){
var self=this;
smalltalk.send(self, "_setUp", []);
smalltalk.send(aTestResult, "_increaseRuns", []);
smalltalk.send(self, "_performTestFor_", [aTestResult]);
smalltalk.send(self, "_tearDown", []);
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
unescape('_performTestFor_'),
smalltalk.method({
selector: unescape('performTestFor%3A'),
fn: function (aResult){
var self=this;
smalltalk.send((function(){return smalltalk.send((function(){return smalltalk.send(self, "_perform_", [smalltalk.send(self, "_selector", [])]);}), "_on_do_", [(smalltalk.TestFailure || TestFailure), (function(ex){return smalltalk.send(aResult, "_addFailure_", [self]);})]);}), "_on_do_", [(smalltalk.Error || Error), (function(ex){return smalltalk.send(aResult, "_addError_", [self]);})]);
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
unescape('_assert_'),
smalltalk.method({
selector: unescape('assert%3A'),
fn: function (aBoolean){
var self=this;
smalltalk.send(self, "_assert_description_", [aBoolean, "Assertion failed"]);
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
unescape('_deny_'),
smalltalk.method({
selector: unescape('deny%3A'),
fn: function (aBoolean){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(aBoolean, "_not", [])]);
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
unescape('_assert_equals_'),
smalltalk.method({
selector: unescape('assert%3Aequals%3A'),
fn: function (expected, actual){
var self=this;
return smalltalk.send(self, "_assert_description_", [smalltalk.send(expected, "__eq", [actual]), smalltalk.send(smalltalk.send(smalltalk.send("Expected: ", "__comma", [smalltalk.send(expected, "_asString", [])]), "__comma", [" but was: "]), "__comma", [smalltalk.send(actual, "_asString", [])])]);
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
unescape('_assert_description_'),
smalltalk.method({
selector: unescape('assert%3Adescription%3A'),
fn: function (aBoolean, aString){
var self=this;
((($receiver = aBoolean).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_signalFailure_", [aString]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_signalFailure_", [aString]);})]));
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
unescape('_should_'),
smalltalk.method({
selector: unescape('should%3A'),
fn: function (aBlock){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(aBlock, "_value", [])]);
return self;}
}),
smalltalk.TestCase);

smalltalk.addMethod(
unescape('_should_raise_'),
smalltalk.method({
selector: unescape('should%3Araise%3A'),
fn: function (aBlock, anExceptionClass){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send((function(){smalltalk.send(aBlock, "_value", []);return false;}), "_on_do_", [anExceptionClass, (function(ex){return true;})])]);
return self;}
}),
smalltalk.TestCase);


smalltalk.addMethod(
unescape('_testSelectors'),
smalltalk.method({
selector: unescape('testSelectors'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_methodDictionary", []), "_keys", []), "_select_", [(function(each){return smalltalk.send(each, "_match_", [unescape("%5Etest")]);})]);
return self;}
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
unescape('_selector_'),
smalltalk.method({
selector: unescape('selector%3A'),
fn: function (aSelector){
var self=this;
return (function($rec){smalltalk.send($rec, "_setTestSelector_", [aSelector]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
unescape('_lookupHierarchyRoot'),
smalltalk.method({
selector: unescape('lookupHierarchyRoot'),
fn: function (){
var self=this;
return (smalltalk.TestCase || TestCase);
return self;}
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
unescape('_allTestSelectors'),
smalltalk.method({
selector: unescape('allTestSelectors'),
fn: function (){
var self=this;
var selectors=nil;
(selectors=smalltalk.send(self, "_testSelectors", []));
((($receiver = smalltalk.send(self, "_shouldInheritSelectors", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(selectors, "_addAll_", [smalltalk.send(smalltalk.send(self, "_superclass", []), "_allTestSelectors", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(selectors, "_addAll_", [smalltalk.send(smalltalk.send(self, "_superclass", []), "_allTestSelectors", [])]);})]));
return selectors;
return self;}
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
unescape('_buildSuite'),
smalltalk.method({
selector: unescape('buildSuite'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_allTestSelectors", []), "_collect_", [(function(each){return smalltalk.send(self, "_selector_", [each]);})]);
return self;}
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
unescape('_shouldInheritSelectors'),
smalltalk.method({
selector: unescape('shouldInheritSelectors'),
fn: function (){
var self=this;
return smalltalk.send(self, "_~_eq", [smalltalk.send(self, "_lookupHierarchyRoot", [])]);
return self;}
}),
smalltalk.TestCase.klass);


smalltalk.addClass('TestFailure', smalltalk.Error, [], 'SUnit');


smalltalk.addClass('TestResult', smalltalk.Object, ['timestamp', 'runs', 'errors', 'failures', 'total'], 'SUnit');
smalltalk.addMethod(
unescape('_timestamp'),
smalltalk.method({
selector: unescape('timestamp'),
fn: function (){
var self=this;
return self['@timestamp'];
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
unescape('_errors'),
smalltalk.method({
selector: unescape('errors'),
fn: function (){
var self=this;
return self['@errors'];
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
unescape('_failures'),
smalltalk.method({
selector: unescape('failures'),
fn: function (){
var self=this;
return self['@failures'];
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
unescape('_total'),
smalltalk.method({
selector: unescape('total'),
fn: function (){
var self=this;
return self['@total'];
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
unescape('_total_'),
smalltalk.method({
selector: unescape('total%3A'),
fn: function (aNumber){
var self=this;
(self['@total']=aNumber);
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
unescape('_addError_'),
smalltalk.method({
selector: unescape('addError%3A'),
fn: function (anError){
var self=this;
smalltalk.send(smalltalk.send(self, "_errors", []), "_add_", [anError]);
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
unescape('_addFailure_'),
smalltalk.method({
selector: unescape('addFailure%3A'),
fn: function (aFailure){
var self=this;
smalltalk.send(smalltalk.send(self, "_failures", []), "_add_", [aFailure]);
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
unescape('_runs'),
smalltalk.method({
selector: unescape('runs'),
fn: function (){
var self=this;
return self['@runs'];
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
unescape('_increaseRuns'),
smalltalk.method({
selector: unescape('increaseRuns'),
fn: function (){
var self=this;
(self['@runs']=((($receiver = self['@runs']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
unescape('_status'),
smalltalk.method({
selector: unescape('status'),
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(smalltalk.send(self, "_errors", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_failures", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "success";})() : (function(){return "failure";})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "success";}), (function(){return "failure";})]));})() : (function(){return "error";})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_failures", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "success";})() : (function(){return "failure";})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "success";}), (function(){return "failure";})]));}), (function(){return "error";})]));
return self;}
}),
smalltalk.TestResult);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
(self['@timestamp']=smalltalk.send((smalltalk.Date || Date), "_now", []));
(self['@runs']=(0));
(self['@errors']=smalltalk.send((smalltalk.Array || Array), "_new", []));
(self['@failures']=smalltalk.send((smalltalk.Array || Array), "_new", []));
(self['@total']=(0));
return self;}
}),
smalltalk.TestResult);



