smalltalk.addPackage('SUnit', {});
smalltalk.addClass('BareTestContext', smalltalk.Object, ['testCase'], 'SUnit');
smalltalk.BareTestContext.comment="BareTestContext governs running a particular test case.\x0a\x0aIt's main added value is execute: method which runs a block\x0aas a part of test case (restores context, nilling it afterwards,\x0acleaning/calling tearDown as appropriate for sync/async scenario)."
smalltalk.addMethod(
"_execute_",
smalltalk.method({
selector: "execute:",
category: 'running',
fn: function (aBlock){
var self=this;
var $1,$3,$4,$2;
var failed;
smalltalk.send(self["@testCase"],"_context_",[self]);
$1=(function(){
failed=true;
failed;
smalltalk.send(aBlock,"_value",[]);
failed=false;
return failed;
});
$2=(function(){
smalltalk.send(self["@testCase"],"_context_",[nil]);
$3=smalltalk.send(failed,"_and_",[(function(){
return smalltalk.send(self["@testCase"],"_isAsync",[]);
})]);
if(smalltalk.assert($3)){
smalltalk.send(self["@testCase"],"_finished",[]);
};
$4=smalltalk.send(self["@testCase"],"_isAsync",[]);
if(! smalltalk.assert($4)){
return smalltalk.send(self["@testCase"],"_tearDown",[]);
};
});
smalltalk.send($1,"_ensure_",[$2]);
return self},
args: ["aBlock"],
source: "execute: aBlock\x0a\x09| failed |\x0a    testCase context: self.\x0a    [ failed := true. aBlock value. failed := false ] ensure: [\x0a        testCase context: nil.\x0a        (failed and: [testCase isAsync]) ifTrue: [ testCase finished ].\x0a        testCase isAsync ifFalse: [ testCase tearDown ]\x0a    ]\x0a",
messageSends: ["context:", "ensure:", "ifTrue:", "finished", "and:", "isAsync", "ifFalse:", "tearDown", "value"],
referencedClasses: []
}),
smalltalk.BareTestContext);

smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
category: 'running',
fn: function (){
var self=this;
smalltalk.send(self,"_execute_",[(function(){
smalltalk.send(self["@testCase"],"_setUp",[]);
return smalltalk.send(self["@testCase"],"_performTest",[]);
})]);
return self},
args: [],
source: "start\x0a\x09self execute: [ testCase setUp. testCase performTest ]",
messageSends: ["execute:", "setUp", "performTest"],
referencedClasses: []
}),
smalltalk.BareTestContext);

smalltalk.addMethod(
"_testCase_",
smalltalk.method({
selector: "testCase:",
category: 'accessing',
fn: function (aTestCase){
var self=this;
self["@testCase"]=aTestCase;
return self},
args: ["aTestCase"],
source: "testCase: aTestCase\x0a\x09testCase := aTestCase",
messageSends: [],
referencedClasses: []
}),
smalltalk.BareTestContext);


smalltalk.addMethod(
"_testCase_",
smalltalk.method({
selector: "testCase:",
category: 'instance creation',
fn: function (aTestCase){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_testCase_",[aTestCase]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aTestCase"],
source: "testCase: aTestCase\x0a\x09^self new\x0a        testCase: aTestCase;\x0a        yourself",
messageSends: ["testCase:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.BareTestContext.klass);


smalltalk.addClass('ReportingTestContext', smalltalk.BareTestContext, ['finished', 'result'], 'SUnit');
smalltalk.ReportingTestContext.comment="ReportingTestContext adds TestResult reporting\x0ato BareTestContext.\x0aErrors are caught and save into TestResult,\x0aWhen test case is finished (which can be later for async tests),\x0aa callback block is executed; this is used by TestSuiteRunner.\x0a"
smalltalk.addMethod(
"_execute_",
smalltalk.method({
selector: "execute:",
category: 'running',
fn: function (aBlock){
var self=this;
var $1,$3,$2;
$1=(function(){
return smalltalk.send((function(){
return smalltalk.send((function(){
return smalltalk.send(self,"_execute_",[aBlock],smalltalk.BareTestContext);
}),"_on_do_",[(smalltalk.TestFailure || TestFailure),(function(ex){
return smalltalk.send(self["@result"],"_addFailure_",[self["@testCase"]]);
})]);
}),"_on_do_",[(smalltalk.Error || Error),(function(ex){
return smalltalk.send(self["@result"],"_addError_",[self["@testCase"]]);
})]);
});
$2=(function(){
$3=smalltalk.send(self["@testCase"],"_isAsync",[]);
if(! smalltalk.assert($3)){
smalltalk.send(self["@result"],"_increaseRuns",[]);
return smalltalk.send(self["@finished"],"_value",[]);
};
});
smalltalk.send($1,"_ensure_",[$2]);
return self},
args: ["aBlock"],
source: "execute: aBlock\x0a    [[[ super execute: aBlock ]\x0a    on: TestFailure do: [:ex | result addFailure: testCase]]\x0a    on: Error do: [:ex | result addError: testCase]]\x0a    ensure: [ testCase isAsync ifFalse: [ result increaseRuns. finished value ]]",
messageSends: ["ensure:", "ifFalse:", "increaseRuns", "value", "isAsync", "on:do:", "addError:", "addFailure:", "execute:"],
referencedClasses: ["Error", "TestFailure"]
}),
smalltalk.ReportingTestContext);

smalltalk.addMethod(
"_finished_",
smalltalk.method({
selector: "finished:",
category: 'accessing',
fn: function (aBlock){
var self=this;
self["@finished"]=aBlock;
return self},
args: ["aBlock"],
source: "finished: aBlock\x0a\x09finished := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.ReportingTestContext);

smalltalk.addMethod(
"_result_",
smalltalk.method({
selector: "result:",
category: 'accessing',
fn: function (aTestResult){
var self=this;
self["@result"]=aTestResult;
return self},
args: ["aTestResult"],
source: "result: aTestResult\x0a\x09result := aTestResult",
messageSends: [],
referencedClasses: []
}),
smalltalk.ReportingTestContext);


smalltalk.addMethod(
"_testCase_result_finished_",
smalltalk.method({
selector: "testCase:result:finished:",
category: 'instance creation',
fn: function (aTestCase,aTestResult,aBlock){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_testCase_",[aTestCase],smalltalk.BareTestContext.klass);
smalltalk.send($2,"_result_",[aTestResult]);
smalltalk.send($2,"_finished_",[aBlock]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aTestCase", "aTestResult", "aBlock"],
source: "testCase: aTestCase result: aTestResult finished: aBlock\x0a\x09^(super testCase: aTestCase)\x0a        result: aTestResult;\x0a        finished: aBlock;\x0a        yourself",
messageSends: ["result:", "testCase:", "finished:", "yourself"],
referencedClasses: []
}),
smalltalk.ReportingTestContext.klass);


smalltalk.addClass('ResultAnnouncement', smalltalk.Object, ['result'], 'SUnit');
smalltalk.addMethod(
"_result",
smalltalk.method({
selector: "result",
category: 'accessing',
fn: function (){
var self=this;
return self["@result"];
},
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
self["@result"]=aTestResult;
return self},
args: ["aTestResult"],
source: "result: aTestResult\x0a\x09result := aTestResult",
messageSends: [],
referencedClasses: []
}),
smalltalk.ResultAnnouncement);



smalltalk.addClass('TestCase', smalltalk.Object, ['testSelector', 'asyncTimeout', 'context'], 'SUnit');
smalltalk.addMethod(
"_assert_",
smalltalk.method({
selector: "assert:",
category: 'testing',
fn: function (aBoolean) {
    var self = this;
    smalltalk.send(self, "_assert_description_", [aBoolean, "Assertion failed"]);
    return self;
},
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
fn: function (aBoolean, aString) {
    var self = this;
    if (!smalltalk.assert(aBoolean)) {
        smalltalk.send(self, "_signalFailure_", [aString]);
    }
    return self;
},
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
fn: function (expected, actual) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_assert_description_", [smalltalk.send(expected, "__eq", [actual]), smalltalk.send(smalltalk.send(smalltalk.send("Expected: ", "__comma", [smalltalk.send(expected, "_asString", [])]), "__comma", [" but was: "]), "__comma", [smalltalk.send(actual, "_asString", [])])]);
    return $1;
},
args: ["expected", "actual"],
source: "assert: expected equals: actual\x0a\x09^ self assert: (expected = actual) description: 'Expected: ', expected asString, ' but was: ', actual asString",
messageSends: ["assert:description:", "=", ",", "asString"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_async_",
smalltalk.method({
selector: "async:",
category: 'async',
fn: function (aBlock){
var self=this;
var $2,$1;
var c;
smalltalk.send(self,"_mustBeAsync_",["#async"]);
c=self["@context"];
$1=(function(){
$2=smalltalk.send(self,"_isAsync",[]);
if(smalltalk.assert($2)){
return smalltalk.send(c,"_execute_",[aBlock]);
};
});
return $1;
},
args: ["aBlock"],
source: "async: aBlock\x0a\x09| c |\x0a\x09self mustBeAsync: '#async'.\x0a    c := context.\x0a    ^[ self isAsync ifTrue: [ c execute: aBlock ]]",
messageSends: ["mustBeAsync:", "ifTrue:", "execute:", "isAsync"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_context_",
smalltalk.method({
selector: "context:",
category: 'accessing',
fn: function (aRunningTestContext){
var self=this;
self["@context"]=aRunningTestContext;
return self},
args: ["aRunningTestContext"],
source: "context: aRunningTestContext\x0a\x09context := aRunningTestContext",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_deny_",
smalltalk.method({
selector: "deny:",
category: 'testing',
fn: function (aBoolean) {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(aBoolean, "_not", [])]);
    return self;
},
args: ["aBoolean"],
source: "deny: aBoolean\x0a\x09self assert: aBoolean not",
messageSends: ["assert:", "not"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_finished",
smalltalk.method({
selector: "finished",
category: 'async',
fn: function (){
var self=this;
smalltalk.send(self,"_mustBeAsync_",["#finished"]);
self["@asyncTimeout"]=nil;
return self},
args: [],
source: "finished\x0a\x09self mustBeAsync: '#finished'.\x0a\x09asyncTimeout := nil",
messageSends: ["mustBeAsync:"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_graceTime_",
smalltalk.method({
selector: "graceTime:",
category: 'async',
fn: function (millis){
var self=this;
if(($receiver = self["@asyncTimeout"]) == nil || $receiver == undefined){
self["@asyncTimeout"];
} else {
smalltalk.send(self["@asyncTimeout"],"_clearTimeout",[]);
};
self["@asyncTimeout"]=true;
self["@asyncTimeout"]=smalltalk.send(smalltalk.send(self,"_async_",[(function(){
return smalltalk.send(self,"_assert_description_",[false,"SUnit grace time exhausted"]);
})]),"_valueWithTimeout_",[millis]);
return self},
args: ["millis"],
source: "graceTime: millis\x0a\x09asyncTimeout ifNotNil: [ asyncTimeout clearTimeout ].\x0a\x09asyncTimeout := true. \x22to allow async:\x22\x0a\x09asyncTimeout :=\x0a\x09\x09(self async: [ self assert: false description: 'SUnit grace time exhausted' ])\x0a        valueWithTimeout: millis",
messageSends: ["ifNotNil:", "clearTimeout", "valueWithTimeout:", "async:", "assert:description:"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_isAsync",
smalltalk.method({
selector: "isAsync",
category: 'async',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@asyncTimeout"],"_notNil",[]);
return $1;
},
args: [],
source: "isAsync\x0a\x09^asyncTimeout notNil",
messageSends: ["notNil"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_mustBeAsync_",
smalltalk.method({
selector: "mustBeAsync:",
category: 'async',
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(self,"_isAsync",[]);
if(! smalltalk.assert($1)){
smalltalk.send(self,"_error_",[smalltalk.send(aString,"__comma",[" used without prior #graceTime:"])]);
};
return self},
args: ["aString"],
source: "mustBeAsync: aString\x0a\x09self isAsync ifFalse: [ self error: aString, ' used without prior #graceTime:' ]",
messageSends: ["ifFalse:", "error:", ",", "isAsync"],
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
self["@asyncTimeout"]=nil;
smalltalk.send(self,"_perform_",[smalltalk.send(self,"_selector",[])]);
return self},
args: [],
source: "performTest\x0a\x09asyncTimeout := nil.\x0a\x09self perform: self selector\x0a",
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
smalltalk.send(smalltalk.send((smalltalk.BareTestContext || BareTestContext),"_testCase_",[self]),"_start",[]);
return self},
args: [],
source: "runCase\x0a\x09\x22Runs a test case in isolated context, leaking all errors.\x22\x0a\x0a\x09(BareTestContext testCase: self) start",
messageSends: ["start", "testCase:"],
referencedClasses: ["BareTestContext"]
}),
smalltalk.TestCase);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@testSelector'];
},
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
fn: function (aSelector) {
    var self = this;
    self['@testSelector'] = aSelector;
    return self;
},
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
fn: function () {
    var self = this;
    return self;
},
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
fn: function (aBlock) {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(aBlock, "_value", [])]);
    return self;
},
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
fn: function (aBlock, anExceptionClass) {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(function () {smalltalk.send(aBlock, "_value", []);return false;}, "_on_do_", [anExceptionClass, function (ex) {return true;}])]);
    return self;
},
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
fn: function (aBlock, anExceptionClass) {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(function () {smalltalk.send(aBlock, "_value", []);return true;}, "_on_do_", [anExceptionClass, function (ex) {return false;}])]);
    return self;
},
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
fn: function (aString) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(smalltalk.TestFailure || TestFailure, "_new", []);
    smalltalk.send($1, "_messageText_", [aString]);
    $2 = smalltalk.send($1, "_signal", []);
    return self;
},
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
fn: function () {
    var self = this;
    return self;
},
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
fn: function () {
    var self = this;
    var $1;
    var selectors;
    selectors = smalltalk.send(self, "_testSelectors", []);
    $1 = smalltalk.send(self, "_shouldInheritSelectors", []);
    if (smalltalk.assert($1)) {
        smalltalk.send(selectors, "_addAll_", [smalltalk.send(smalltalk.send(self, "_superclass", []), "_allTestSelectors", [])]);
    }
    return selectors;
},
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
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_allTestSelectors", []), "_collect_", [function (each) {return smalltalk.send(self, "_selector_", [each]);}]);
    return $1;
},
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
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_name", []), "__eq", ["TestCase"]);
    return $1;
},
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
fn: function () {
    var self = this;
    return smalltalk.TestCase || TestCase;
},
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
fn: function (aSelector) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_setTestSelector_", [aSelector]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
},
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
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_~_eq", [smalltalk.send(self, "_lookupHierarchyRoot", [])]);
    return $1;
},
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
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(self, "_methodDictionary", []), "_keys", []), "_select_", [function (each) {return smalltalk.send(each, "_match_", ["^test"]);}]);
    return $1;
},
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
fn: function (anError) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_errors", []), "_add_", [anError]);
    return self;
},
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
fn: function (aFailure) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_failures", []), "_add_", [aFailure]);
    return self;
},
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
fn: function () {
    var self = this;
    return self['@errors'];
},
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
fn: function () {
    var self = this;
    return self['@failures'];
},
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
fn: function () {
    var self = this;
    self['@runs'] = smalltalk.send(self['@runs'], "__plus", [1]);
    return self;
},
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
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.Object);
    self['@timestamp'] = smalltalk.send(smalltalk.Date || Date, "_now", []);
    self['@runs'] = 0;
    self['@errors'] = smalltalk.send(smalltalk.Array || Array, "_new", []);
    self['@failures'] = smalltalk.send(smalltalk.Array || Array, "_new", []);
    self['@total'] = 0;
    return self;
},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09timestamp := Date now.\x0a\x09runs := 0.\x0a\x09errors := Array new.\x0a\x09failures := Array new.\x0a\x09total := 0",
messageSends: ["initialize", "now", "new"],
referencedClasses: ["Date", "Array"]
}),
smalltalk.TestResult);

smalltalk.addMethod(
"_runs",
smalltalk.method({
selector: "runs",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@runs'];
},
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
fn: function () {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(smalltalk.send(self, "_errors", []), "_isEmpty", []);
    if (smalltalk.assert($2)) {
        $3 = smalltalk.send(smalltalk.send(self, "_failures", []), "_isEmpty", []);
        if (smalltalk.assert($3)) {
            $1 = "success";
        } else {
            $1 = "failure";
        }
    } else {
        $1 = "error";
    }
    return $1;
},
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
fn: function () {
    var self = this;
    return self['@timestamp'];
},
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
fn: function () {
    var self = this;
    return self['@total'];
},
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
fn: function (aNumber) {
    var self = this;
    self['@total'] = aNumber;
    return self;
},
args: ["aNumber"],
source: "total: aNumber\x0a\x09total := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);



smalltalk.addClass('TestSuiteRunner', smalltalk.Object, ['suite', 'result', 'announcer', 'runNextTest'], 'SUnit');
smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
category: 'accessing',
fn: function (){
var self=this;
return self["@announcer"];
},
args: [],
source: "announcer\x0a\x09^announcer",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
"_contextOf_",
smalltalk.method({
selector: "contextOf:",
category: 'private',
fn: function (anInteger){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.ReportingTestContext || ReportingTestContext),"_testCase_result_finished_",[smalltalk.send(self["@suite"],"_at_",[anInteger]),self["@result"],(function(){
return smalltalk.send(self,"_resume",[]);
})]);
return $1;
},
args: ["anInteger"],
source: "contextOf: anInteger\x0a   \x09^ReportingTestContext testCase: (suite at: anInteger) result: result finished: [ self resume ]\x0a",
messageSends: ["testCase:result:finished:", "at:", "resume"],
referencedClasses: ["ReportingTestContext"]
}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
var $1;
smalltalk.send(self,"_initialize",[],smalltalk.Object);
self["@announcer"]=smalltalk.send((smalltalk.Announcer || Announcer),"_new",[]);
self["@result"]=smalltalk.send((smalltalk.TestResult || TestResult),"_new",[]);
self["@runNextTest"]=(function(){
var runs;
runs=smalltalk.send(self["@result"],"_runs",[]);
runs;
$1=smalltalk.send(runs,"__lt",[smalltalk.send(self["@result"],"_total",[])]);
if(smalltalk.assert($1)){
return smalltalk.send(smalltalk.send(self,"_contextOf_",[smalltalk.send(runs,"__plus",[(1)])]),"_start",[]);
};
});
return self},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09announcer := Announcer new.\x0a    result := TestResult new.\x0a    runNextTest := [ | runs | runs := result runs. runs < result total ifTrue: [ (self contextOf: runs + 1) start ]].\x0a",
messageSends: ["initialize", "new", "runs", "ifTrue:", "start", "contextOf:", "+", "<", "total"],
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
return self["@result"];
},
args: [],
source: "result\x0a\x09^result",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
"_resume",
smalltalk.method({
selector: "resume",
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self["@runNextTest"],"_fork",[]);
smalltalk.send(self["@announcer"],"_announce_",[smalltalk.send(smalltalk.send((smalltalk.ResultAnnouncement || ResultAnnouncement),"_new",[]),"_result_",[self["@result"]])]);
return self},
args: [],
source: "resume\x0a\x09runNextTest fork.\x0a    announcer announce: (ResultAnnouncement new result: result)\x0a",
messageSends: ["fork", "announce:", "result:", "new"],
referencedClasses: ["ResultAnnouncement"]
}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
"_run",
smalltalk.method({
selector: "run",
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self["@result"],"_total_",[smalltalk.send(self["@suite"],"_size",[])]);
smalltalk.send(self,"_resume",[]);
return self},
args: [],
source: "run\x0a\x09result total: suite size.\x0a\x09self resume",
messageSends: ["total:", "size", "resume"],
referencedClasses: []
}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
"_suite_",
smalltalk.method({
selector: "suite:",
category: 'accessing',
fn: function (aCollection){
var self=this;
self["@suite"]=aCollection;
return self},
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
smalltalk.send(self,"_shouldNotImplement",[]);
return self},
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
var $1;
$1=smalltalk.send(smalltalk.send(self,"_new",[],smalltalk.Object.klass),"_suite_",[aCollection]);
return $1;
},
args: ["aCollection"],
source: "on: aCollection\x0a\x09^super new suite: aCollection",
messageSends: ["suite:", "new"],
referencedClasses: []
}),
smalltalk.TestSuiteRunner.klass);


