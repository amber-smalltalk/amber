smalltalk.addPackage('SUnit', {});
smalltalk.addClass('TestCase', smalltalk.Object, ['testSelector'], 'SUnit');
smalltalk.addMethod(
unescape('_setTestSelector_'),
smalltalk.method({
selector: unescape('setTestSelector%3A'),
category: 'accessing',
fn: function (aSelector){
var self=this;
self['@testSelector']=aSelector;
return self;},
args: ["aSelector"],
source: unescape('setTestSelector%3A%20aSelector%0A%09testSelector%20%3A%3D%20aSelector'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
unescape('_selector'),
smalltalk.method({
selector: unescape('selector'),
category: 'accessing',
fn: function (){
var self=this;
return self['@testSelector'];
return self;},
args: [],
source: unescape('selector%0A%09%5EtestSelector'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
unescape('_signalFailure_'),
smalltalk.method({
selector: unescape('signalFailure%3A'),
category: 'private',
fn: function (aString){
var self=this;
(function($rec){smalltalk.send($rec, "_messageText_", [aString]);return smalltalk.send($rec, "_signal", []);})(smalltalk.send((smalltalk.TestFailure || TestFailure), "_new", []));
return self;},
args: ["aString"],
source: unescape('signalFailure%3A%20aString%0A%09TestFailure%20new%0A%09%09messageText%3A%20aString%3B%0A%09%09signal'),
messageSends: ["messageText:", "signal", "new"],
referencedClasses: ["TestFailure"]
}),
smalltalk.TestCase);

smalltalk.addMethod(
unescape('_setUp'),
smalltalk.method({
selector: unescape('setUp'),
category: 'running',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('setUp'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
unescape('_tearDown'),
smalltalk.method({
selector: unescape('tearDown'),
category: 'running',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('tearDown'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
unescape('_runCaseFor_'),
smalltalk.method({
selector: unescape('runCaseFor%3A'),
category: 'running',
fn: function (aTestResult){
var self=this;
smalltalk.send(self, "_setUp", []);
smalltalk.send(aTestResult, "_increaseRuns", []);
smalltalk.send(self, "_performTestFor_", [aTestResult]);
smalltalk.send(self, "_tearDown", []);
return self;},
args: ["aTestResult"],
source: unescape('runCaseFor%3A%20aTestResult%0A%09self%20setUp.%0A%09aTestResult%20increaseRuns.%0A%09self%20performTestFor%3A%20aTestResult.%0A%09self%20tearDown'),
messageSends: ["setUp", "increaseRuns", "performTestFor:", "tearDown"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
unescape('_performTestFor_'),
smalltalk.method({
selector: unescape('performTestFor%3A'),
category: 'running',
fn: function (aResult){
var self=this;
smalltalk.send((function(){return smalltalk.send((function(){return smalltalk.send(self, "_perform_", [smalltalk.send(self, "_selector", [])]);}), "_on_do_", [(smalltalk.TestFailure || TestFailure), (function(ex){return smalltalk.send(aResult, "_addFailure_", [self]);})]);}), "_on_do_", [(smalltalk.Error || Error), (function(ex){return smalltalk.send(aResult, "_addError_", [self]);})]);
return self;},
args: ["aResult"],
source: unescape('performTestFor%3A%20aResult%0A%09%5B%5Bself%20perform%3A%20self%20selector%5D%0A%09%09on%3A%20TestFailure%20do%3A%20%5B%3Aex%20%7C%20aResult%20addFailure%3A%20self%5D%5D%0A%09%09on%3A%20Error%20do%3A%20%5B%3Aex%20%7C%20aResult%20addError%3A%20self%5D'),
messageSends: ["on:do:", "perform:", "selector", "addFailure:", "addError:"],
referencedClasses: ["TestFailure", "Error"]
}),
smalltalk.TestCase);

smalltalk.addMethod(
unescape('_assert_'),
smalltalk.method({
selector: unescape('assert%3A'),
category: 'testing',
fn: function (aBoolean){
var self=this;
smalltalk.send(self, "_assert_description_", [aBoolean, "Assertion failed"]);
return self;},
args: ["aBoolean"],
source: unescape('assert%3A%20aBoolean%0A%09self%20assert%3A%20aBoolean%20description%3A%20%27Assertion%20failed%27'),
messageSends: ["assert:description:"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
unescape('_deny_'),
smalltalk.method({
selector: unescape('deny%3A'),
category: 'testing',
fn: function (aBoolean){
var self=this;
smalltalk.send(self, "_assert_", [smalltalk.send(aBoolean, "_not", [])]);
return self;},
args: ["aBoolean"],
source: unescape('deny%3A%20aBoolean%0A%09self%20assert%3A%20aBoolean%20not'),
messageSends: ["assert:", "not"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
unescape('_assert_equals_'),
smalltalk.method({
selector: unescape('assert%3Aequals%3A'),
category: 'testing',
fn: function (expected, actual){
var self=this;
return smalltalk.send(self, "_assert_description_", [smalltalk.send(expected, "__eq", [actual]), smalltalk.send(smalltalk.send(smalltalk.send("Expected: ", "__comma", [smalltalk.send(expected, "_asString", [])]), "__comma", [" but was: "]), "__comma", [smalltalk.send(actual, "_asString", [])])]);
return self;},
args: ["expected", "actual"],
source: unescape('assert%3A%20expected%20equals%3A%20actual%0A%09%5E%20self%20assert%3A%20%28expected%20%3D%20actual%29%20description%3A%20%27Expected%3A%20%27%2C%20expected%20asString%2C%20%27%20but%20was%3A%20%27%2C%20actual%20asString'),
messageSends: ["assert:description:", unescape("%3D"), unescape("%2C"), "asString"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
unescape('_assert_description_'),
smalltalk.method({
selector: unescape('assert%3Adescription%3A'),
category: 'testing',
fn: function (aBoolean, aString){
var self=this;
((($receiver = aBoolean).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_signalFailure_", [aString]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_signalFailure_", [aString]);})]));
return self;},
args: ["aBoolean", "aString"],
source: unescape('assert%3A%20aBoolean%20description%3A%20aString%0A%09aBoolean%20ifFalse%3A%20%5Bself%20signalFailure%3A%20aString%5D'),
messageSends: ["ifFalse:", "signalFailure:"],
referencedClasses: []
}),
smalltalk.TestCase);


smalltalk.addMethod(
unescape('_testSelectors'),
smalltalk.method({
selector: unescape('testSelectors'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_methodDictionary", []), "_keys", []), "_select_", [(function(each){return smalltalk.send(each, "_match_", [unescape("%5Etest")]);})]);
return self;},
args: [],
source: unescape('testSelectors%0A%09%5Eself%20methodDictionary%20keys%20select%3A%20%5B%3Aeach%20%7C%20each%20match%3A%20%27%5Etest%27%5D'),
messageSends: ["select:", "keys", "methodDictionary", "match:"],
referencedClasses: []
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
unescape('_selector_'),
smalltalk.method({
selector: unescape('selector%3A'),
category: 'accessing',
fn: function (aSelector){
var self=this;
return (function($rec){smalltalk.send($rec, "_setTestSelector_", [aSelector]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aSelector"],
source: unescape('selector%3A%20aSelector%0A%09%5Eself%20new%0A%09%09setTestSelector%3A%20aSelector%3B%0A%09%09yourself'),
messageSends: ["setTestSelector:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
unescape('_lookupHierarchyRoot'),
smalltalk.method({
selector: unescape('lookupHierarchyRoot'),
category: 'accessing',
fn: function (){
var self=this;
return (smalltalk.TestCase || TestCase);
return self;},
args: [],
source: unescape('lookupHierarchyRoot%0A%09%5ETestCase'),
messageSends: [],
referencedClasses: ["TestCase"]
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
unescape('_allTestSelectors'),
smalltalk.method({
selector: unescape('allTestSelectors'),
category: 'accessing',
fn: function (){
var self=this;
var selectors=nil;
selectors=smalltalk.send(self, "_testSelectors", []);
((($receiver = smalltalk.send(self, "_shouldInheritSelectors", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(selectors, "_addAll_", [smalltalk.send(smalltalk.send(self, "_superclass", []), "_allTestSelectors", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(selectors, "_addAll_", [smalltalk.send(smalltalk.send(self, "_superclass", []), "_allTestSelectors", [])]);})]));
return selectors;
return self;},
args: [],
source: unescape('allTestSelectors%0A%09%7C%20selectors%20%7C%0A%09selectors%20%3A%3D%20self%20testSelectors.%0A%09self%20shouldInheritSelectors%20ifTrue%3A%20%5B%0A%09%09selectors%20addAll%3A%20self%20superclass%20allTestSelectors%5D.%0A%09%5Eselectors'),
messageSends: ["testSelectors", "ifTrue:", "shouldInheritSelectors", "addAll:", "allTestSelectors", "superclass"],
referencedClasses: []
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
unescape('_buildSuite'),
smalltalk.method({
selector: unescape('buildSuite'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_allTestSelectors", []), "_collect_", [(function(each){return smalltalk.send(self, "_selector_", [each]);})]);
return self;},
args: [],
source: unescape('buildSuite%0A%09%5Eself%20allTestSelectors%20collect%3A%20%5B%3Aeach%20%7C%20self%20selector%3A%20each%5D'),
messageSends: ["collect:", "allTestSelectors", "selector:"],
referencedClasses: []
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
unescape('_shouldInheritSelectors'),
smalltalk.method({
selector: unescape('shouldInheritSelectors'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(self, "_~_eq", [smalltalk.send(self, "_lookupHierarchyRoot", [])]);
return self;},
args: [],
source: unescape('shouldInheritSelectors%0A%09%5Eself%20%7E%3D%20self%20lookupHierarchyRoot'),
messageSends: [unescape("%7E%3D"), "lookupHierarchyRoot"],
referencedClasses: []
}),
smalltalk.TestCase.klass);


smalltalk.addClass('TestFailure', smalltalk.Error, [], 'SUnit');


smalltalk.addClass('TestResult', smalltalk.Object, ['timestamp', 'runs', 'errors', 'failures', 'total'], 'SUnit');
smalltalk.addMethod(
unescape('_timestamp'),
smalltalk.method({
selector: unescape('timestamp'),
category: 'accessing',
fn: function (){
var self=this;
return self['@timestamp'];
return self;},
args: [],
source: unescape('timestamp%0A%09%5Etimestamp'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
unescape('_errors'),
smalltalk.method({
selector: unescape('errors'),
category: 'accessing',
fn: function (){
var self=this;
return self['@errors'];
return self;},
args: [],
source: unescape('errors%0A%09%5Eerrors'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
unescape('_failures'),
smalltalk.method({
selector: unescape('failures'),
category: 'accessing',
fn: function (){
var self=this;
return self['@failures'];
return self;},
args: [],
source: unescape('failures%0A%09%5Efailures'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
unescape('_total'),
smalltalk.method({
selector: unescape('total'),
category: 'accessing',
fn: function (){
var self=this;
return self['@total'];
return self;},
args: [],
source: unescape('total%0A%09%5Etotal'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
unescape('_total_'),
smalltalk.method({
selector: unescape('total%3A'),
category: 'accessing',
fn: function (aNumber){
var self=this;
self['@total']=aNumber;
return self;},
args: ["aNumber"],
source: unescape('total%3A%20aNumber%0A%09total%20%3A%3D%20aNumber'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
unescape('_addError_'),
smalltalk.method({
selector: unescape('addError%3A'),
category: 'accessing',
fn: function (anError){
var self=this;
smalltalk.send(smalltalk.send(self, "_errors", []), "_add_", [anError]);
return self;},
args: ["anError"],
source: unescape('addError%3A%20anError%0A%09self%20errors%20add%3A%20anError'),
messageSends: ["add:", "errors"],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
unescape('_addFailure_'),
smalltalk.method({
selector: unescape('addFailure%3A'),
category: 'accessing',
fn: function (aFailure){
var self=this;
smalltalk.send(smalltalk.send(self, "_failures", []), "_add_", [aFailure]);
return self;},
args: ["aFailure"],
source: unescape('addFailure%3A%20aFailure%0A%09self%20failures%20add%3A%20aFailure'),
messageSends: ["add:", "failures"],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
unescape('_runs'),
smalltalk.method({
selector: unescape('runs'),
category: 'accessing',
fn: function (){
var self=this;
return self['@runs'];
return self;},
args: [],
source: unescape('runs%0A%09%5Eruns'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
unescape('_increaseRuns'),
smalltalk.method({
selector: unescape('increaseRuns'),
category: 'accessing',
fn: function (){
var self=this;
self['@runs']=((($receiver = self['@runs']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));
return self;},
args: [],
source: unescape('increaseRuns%0A%09runs%20%3A%3D%20runs%20+%201'),
messageSends: [unescape("+")],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
unescape('_status'),
smalltalk.method({
selector: unescape('status'),
category: 'accessing',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(smalltalk.send(self, "_errors", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_failures", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "success";})() : (function(){return "failure";})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "success";}), (function(){return "failure";})]));})() : (function(){return "error";})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_failures", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "success";})() : (function(){return "failure";})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "success";}), (function(){return "failure";})]));}), (function(){return "error";})]));
return self;},
args: [],
source: unescape('status%0A%09%5Eself%20errors%20isEmpty%20%0A%09%09ifTrue%3A%20%5B%0A%09%09%09self%20failures%20isEmpty%20%0A%09%09%09%09ifTrue%3A%20%5B%27success%27%5D%0A%09%09%09%09ifFalse%3A%20%5B%27failure%27%5D%5D%0A%09%09ifFalse%3A%20%5B%27error%27%5D'),
messageSends: ["ifTrue:ifFalse:", "isEmpty", "errors", "failures"],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
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
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09timestamp%20%3A%3D%20Date%20now.%0A%09runs%20%3A%3D%200.%0A%09errors%20%3A%3D%20Array%20new.%0A%09failures%20%3A%3D%20Array%20new.%0A%09total%20%3A%3D%200'),
messageSends: ["initialize", "now", "new"],
referencedClasses: ["Date", "Array"]
}),
smalltalk.TestResult);



