smalltalk.addPackage('SUnit');
smalltalk.addClass('ResultAnnouncement', smalltalk.Object, ['result'], 'SUnit');
smalltalk.ResultAnnouncement.comment="I get signaled when a `TestCase` has been run.\x0a\x0aMy instances hold the result (instance of `TestResult`) of the test run.";
smalltalk.addMethod(
smalltalk.method({
selector: "result",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@result"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"result",{},smalltalk.ResultAnnouncement)})},
args: [],
source: "result\x0a\x09^result",
messageSends: [],
referencedClasses: []
}),
smalltalk.ResultAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "result:",
category: 'accessing',
fn: function (aTestResult){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@result"]=aTestResult;
return self}, function($ctx1) {$ctx1.fill(self,"result:",{aTestResult:aTestResult},smalltalk.ResultAnnouncement)})},
args: ["aTestResult"],
source: "result: aTestResult\x0a\x09result := aTestResult",
messageSends: [],
referencedClasses: []
}),
smalltalk.ResultAnnouncement);



smalltalk.addClass('TestCase', smalltalk.Object, ['testSelector', 'asyncTimeout', 'context'], 'SUnit');
smalltalk.TestCase.comment="I am an implementation of the command pattern to run a test.\x0a\x0a## API\x0a\x0aMy instances are created with the class method `#selector:`,\x0apassing the symbol that names the method to be executed when the test case runs.\x0a\x0aWhen you discover a new fixture, subclass `TestCase` and create a `#test...` method for the first test.\x0aAs that method develops and more `#test...` methods are added, you will find yourself refactoring temps\x0ainto instance variables for the objects in the fixture and overriding `#setUp` to initialize these variables.\x0aAs required, override `#tearDown` to nil references, release objects and deallocate.";
smalltalk.addMethod(
smalltalk.method({
selector: "assert:",
category: 'testing',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_description_(aBoolean,"Assertion failed");
return self}, function($ctx1) {$ctx1.fill(self,"assert:",{aBoolean:aBoolean},smalltalk.TestCase)})},
args: ["aBoolean"],
source: "assert: aBoolean\x0a\x09self assert: aBoolean description: 'Assertion failed'",
messageSends: ["assert:description:"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
smalltalk.method({
selector: "assert:description:",
category: 'testing',
fn: function (aBoolean,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=aBoolean;
if(! smalltalk.assert($1)){
self._signalFailure_(aString);
};
return self}, function($ctx1) {$ctx1.fill(self,"assert:description:",{aBoolean:aBoolean,aString:aString},smalltalk.TestCase)})},
args: ["aBoolean", "aString"],
source: "assert: aBoolean description: aString\x0a\x09aBoolean ifFalse: [self signalFailure: aString]",
messageSends: ["ifFalse:", "signalFailure:"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
smalltalk.method({
selector: "assert:equals:",
category: 'testing',
fn: function (actual,expected){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._assert_description_(_st(actual).__eq(expected),_st(_st("Expected: ".__comma(_st(expected)._printString())).__comma(" but was: ")).__comma(_st(actual)._printString()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"assert:equals:",{actual:actual,expected:expected},smalltalk.TestCase)})},
args: ["actual", "expected"],
source: "assert: actual equals: expected\x0a\x09^ self assert: (actual = expected) description: 'Expected: ', expected printString, ' but was: ', actual printString",
messageSends: ["assert:description:", "=", ",", "printString"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
smalltalk.method({
selector: "async:",
category: 'async',
fn: function (aBlock){
var self=this;
var c;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
self._errorIfNotAsync_("#async");
c=self["@context"];
$1=(function(){
return smalltalk.withContext(function($ctx2) {
$2=self._isAsync();
if(smalltalk.assert($2)){
return _st(c)._execute_(aBlock);
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
return $1;
}, function($ctx1) {$ctx1.fill(self,"async:",{aBlock:aBlock,c:c},smalltalk.TestCase)})},
args: ["aBlock"],
source: "async: aBlock\x0a\x09| c |\x0a\x09self errorIfNotAsync: '#async'.\x0a\x09c := context.\x0a\x09^ [ self isAsync ifTrue: [ c execute: aBlock ] ]",
messageSends: ["errorIfNotAsync:", "ifTrue:", "execute:", "isAsync"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
smalltalk.method({
selector: "context:",
category: 'accessing',
fn: function (aRunningTestContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@context"]=aRunningTestContext;
return self}, function($ctx1) {$ctx1.fill(self,"context:",{aRunningTestContext:aRunningTestContext},smalltalk.TestCase)})},
args: ["aRunningTestContext"],
source: "context: aRunningTestContext\x0a\x09context := aRunningTestContext",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
smalltalk.method({
selector: "deny:",
category: 'testing',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(aBoolean)._not());
return self}, function($ctx1) {$ctx1.fill(self,"deny:",{aBoolean:aBoolean},smalltalk.TestCase)})},
args: ["aBoolean"],
source: "deny: aBoolean\x0a\x09self assert: aBoolean not",
messageSends: ["assert:", "not"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
smalltalk.method({
selector: "errorIfNotAsync:",
category: 'error handling',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isAsync();
if(! smalltalk.assert($1)){
self._error_(_st(aString).__comma(" used without prior #timeout:"));
};
return self}, function($ctx1) {$ctx1.fill(self,"errorIfNotAsync:",{aString:aString},smalltalk.TestCase)})},
args: ["aString"],
source: "errorIfNotAsync: aString\x0a\x09self isAsync ifFalse: [\x0a\x09\x09self error: aString, ' used without prior #timeout:' ]",
messageSends: ["ifFalse:", "error:", ",", "isAsync"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
smalltalk.method({
selector: "finished",
category: 'async',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._errorIfNotAsync_("#finished");
self["@asyncTimeout"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"finished",{},smalltalk.TestCase)})},
args: [],
source: "finished\x0a\x09self errorIfNotAsync: '#finished'.\x0a\x09asyncTimeout := nil",
messageSends: ["errorIfNotAsync:"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
smalltalk.method({
selector: "isAsync",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@asyncTimeout"])._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAsync",{},smalltalk.TestCase)})},
args: [],
source: "isAsync\x0a\x09^asyncTimeout notNil",
messageSends: ["notNil"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
smalltalk.method({
selector: "performTest",
category: 'running',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@asyncTimeout"]=nil;
self._perform_(self._selector());
return self}, function($ctx1) {$ctx1.fill(self,"performTest",{},smalltalk.TestCase)})},
args: [],
source: "performTest\x0a\x09asyncTimeout := nil.\x0a\x09self perform: self selector",
messageSends: ["perform:", "selector"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
smalltalk.method({
selector: "runCase",
category: 'running',
fn: function (){
var self=this;
function $TestContext(){return smalltalk.TestContext||(typeof TestContext=="undefined"?nil:TestContext)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($TestContext())._testCase_(self))._start();
return self}, function($ctx1) {$ctx1.fill(self,"runCase",{},smalltalk.TestCase)})},
args: [],
source: "runCase\x0a\x09\x22Runs a test case in isolated context, leaking all errors.\x22\x0a\x0a\x09(TestContext testCase: self) start",
messageSends: ["start", "testCase:"],
referencedClasses: ["TestContext"]
}),
smalltalk.TestCase);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@testSelector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.TestCase)})},
args: [],
source: "selector\x0a\x09^testSelector",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
smalltalk.method({
selector: "setTestSelector:",
category: 'accessing',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@testSelector"]=aSelector;
return self}, function($ctx1) {$ctx1.fill(self,"setTestSelector:",{aSelector:aSelector},smalltalk.TestCase)})},
args: ["aSelector"],
source: "setTestSelector: aSelector\x0a\x09testSelector := aSelector",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.TestCase)})},
args: [],
source: "setUp",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
smalltalk.method({
selector: "should:",
category: 'testing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(aBlock)._value());
return self}, function($ctx1) {$ctx1.fill(self,"should:",{aBlock:aBlock},smalltalk.TestCase)})},
args: ["aBlock"],
source: "should: aBlock\x0a\x09self assert: aBlock value",
messageSends: ["assert:", "value"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
smalltalk.method({
selector: "should:raise:",
category: 'testing',
fn: function (aBlock,anExceptionClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st((function(){
return smalltalk.withContext(function($ctx2) {
_st(aBlock)._value();
return false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_(anExceptionClass,(function(ex){
return smalltalk.withContext(function($ctx2) {
return true;
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"should:raise:",{aBlock:aBlock,anExceptionClass:anExceptionClass},smalltalk.TestCase)})},
args: ["aBlock", "anExceptionClass"],
source: "should: aBlock raise: anExceptionClass\x0a\x09self assert: ([aBlock value. false]\x0a\x09\x09on: anExceptionClass\x0a\x09\x09do: [:ex | true])",
messageSends: ["assert:", "on:do:", "value"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldnt:raise:",
category: 'testing',
fn: function (aBlock,anExceptionClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st((function(){
return smalltalk.withContext(function($ctx2) {
_st(aBlock)._value();
return true;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_(anExceptionClass,(function(ex){
return smalltalk.withContext(function($ctx2) {
return false;
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"shouldnt:raise:",{aBlock:aBlock,anExceptionClass:anExceptionClass},smalltalk.TestCase)})},
args: ["aBlock", "anExceptionClass"],
source: "shouldnt: aBlock raise: anExceptionClass\x0a\x09self assert: ([aBlock value. true]\x0a\x09\x09on: anExceptionClass\x0a\x09\x09do: [:ex | false])",
messageSends: ["assert:", "on:do:", "value"],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
smalltalk.method({
selector: "signalFailure:",
category: 'private',
fn: function (aString){
var self=this;
function $TestFailure(){return smalltalk.TestFailure||(typeof TestFailure=="undefined"?nil:TestFailure)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($TestFailure())._new();
_st($1)._messageText_(aString);
$2=_st($1)._signal();
return self}, function($ctx1) {$ctx1.fill(self,"signalFailure:",{aString:aString},smalltalk.TestCase)})},
args: ["aString"],
source: "signalFailure: aString\x0a\x09TestFailure new\x0a\x09\x09messageText: aString;\x0a\x09\x09signal",
messageSends: ["messageText:", "new", "signal"],
referencedClasses: ["TestFailure"]
}),
smalltalk.TestCase);

smalltalk.addMethod(
smalltalk.method({
selector: "tearDown",
category: 'running',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"tearDown",{},smalltalk.TestCase)})},
args: [],
source: "tearDown",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestCase);

smalltalk.addMethod(
smalltalk.method({
selector: "timeout:",
category: 'async',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@asyncTimeout"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self["@asyncTimeout"])._clearTimeout();
};
self["@asyncTimeout"]=(0);
self["@asyncTimeout"]=_st(self._async_((function(){
return smalltalk.withContext(function($ctx2) {
return self._assert_description_(false,"SUnit grace time exhausted");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"timeout:",{aNumber:aNumber},smalltalk.TestCase)})},
args: ["aNumber"],
source: "timeout: aNumber\x0a\x09\x22Set a grace time timeout in milliseconds to run the test asynchronously\x22\x0a\x09\x0a\x09asyncTimeout ifNotNil: [ asyncTimeout clearTimeout ].\x0a\x09\x0a\x09\x22to allow #async: message send without throwing an error\x22\x0a\x09asyncTimeout := 0.\x0a\x09\x0a\x09asyncTimeout := (self async: [\x0a\x09\x09self assert: false description: 'SUnit grace time exhausted' ])\x0a\x09\x09\x09valueWithTimeout: aNumber",
messageSends: ["ifNotNil:", "clearTimeout", "valueWithTimeout:", "async:", "assert:description:"],
referencedClasses: []
}),
smalltalk.TestCase);


smalltalk.addMethod(
smalltalk.method({
selector: "allTestSelectors",
category: 'accessing',
fn: function (){
var self=this;
var selectors;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
selectors=self._testSelectors();
$1=self._shouldInheritSelectors();
if(smalltalk.assert($1)){
_st(selectors)._addAll_(_st(self._superclass())._allTestSelectors());
};
$2=selectors;
return $2;
}, function($ctx1) {$ctx1.fill(self,"allTestSelectors",{selectors:selectors},smalltalk.TestCase.klass)})},
args: [],
source: "allTestSelectors\x0a\x09| selectors |\x0a\x09selectors := self testSelectors.\x0a\x09self shouldInheritSelectors ifTrue: [\x0a\x09\x09selectors addAll: self superclass allTestSelectors].\x0a\x09^selectors",
messageSends: ["testSelectors", "ifTrue:", "addAll:", "allTestSelectors", "superclass", "shouldInheritSelectors"],
referencedClasses: []
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildSuite",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._allTestSelectors())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._selector_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildSuite",{},smalltalk.TestCase.klass)})},
args: [],
source: "buildSuite\x0a\x09^self allTestSelectors collect: [:each | self selector: each]",
messageSends: ["collect:", "selector:", "allTestSelectors"],
referencedClasses: []
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "heliosClass",
category: 'helios',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "test";
}, function($ctx1) {$ctx1.fill(self,"heliosClass",{},smalltalk.TestCase.klass)})},
args: [],
source: "heliosClass\x0a\x09^ 'test'",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._name()).__eq("TestCase");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},smalltalk.TestCase.klass)})},
args: [],
source: "isAbstract\x0a\x09^ self name = 'TestCase'",
messageSends: ["=", "name"],
referencedClasses: []
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lookupHierarchyRoot",
category: 'accessing',
fn: function (){
var self=this;
function $TestCase(){return smalltalk.TestCase||(typeof TestCase=="undefined"?nil:TestCase)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$TestCase();
return $1;
}, function($ctx1) {$ctx1.fill(self,"lookupHierarchyRoot",{},smalltalk.TestCase.klass)})},
args: [],
source: "lookupHierarchyRoot\x0a\x09^TestCase",
messageSends: [],
referencedClasses: ["TestCase"]
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "selector:",
category: 'accessing',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._setTestSelector_(aSelector);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector:",{aSelector:aSelector},smalltalk.TestCase.klass)})},
args: ["aSelector"],
source: "selector: aSelector\x0a\x09^self new\x0a\x09\x09setTestSelector: aSelector;\x0a\x09\x09yourself",
messageSends: ["setTestSelector:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldInheritSelectors",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__tild_eq(self._lookupHierarchyRoot());
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldInheritSelectors",{},smalltalk.TestCase.klass)})},
args: [],
source: "shouldInheritSelectors\x0a\x09^self ~= self lookupHierarchyRoot",
messageSends: ["~=", "lookupHierarchyRoot"],
referencedClasses: []
}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "testSelectors",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._methodDictionary())._keys())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._match_("^test");
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"testSelectors",{},smalltalk.TestCase.klass)})},
args: [],
source: "testSelectors\x0a\x09^self methodDictionary keys select: [:each | each match: '^test']",
messageSends: ["select:", "match:", "keys", "methodDictionary"],
referencedClasses: []
}),
smalltalk.TestCase.klass);


smalltalk.addClass('TestContext', smalltalk.Object, ['testCase'], 'SUnit');
smalltalk.TestContext.comment="I govern running a particular test case.\x0a\x0aMy main added value is `#execute:` method which runs a block as a part of test case (restores context, nilling it afterwards, cleaning/calling `#tearDown` as appropriate for sync/async scenario).";
smalltalk.addMethod(
smalltalk.method({
selector: "execute:",
category: 'running',
fn: function (aBlock){
var self=this;
var failed;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self["@testCase"])._context_(self);
_st((function(){
return smalltalk.withContext(function($ctx2) {
failed=true;
failed;
_st(aBlock)._value();
failed=false;
return failed;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
_st(self["@testCase"])._context_(nil);
$1=_st(failed)._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self["@testCase"])._isAsync();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
if(smalltalk.assert($1)){
_st(self["@testCase"])._finished();
};
$2=_st(self["@testCase"])._isAsync();
if(! smalltalk.assert($2)){
return _st(self["@testCase"])._tearDown();
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"execute:",{aBlock:aBlock,failed:failed},smalltalk.TestContext)})},
args: ["aBlock"],
source: "execute: aBlock\x0a\x09| failed |\x0a\x09\x0a\x09testCase context: self.\x0a\x09[\x0a\x09\x09failed := true.\x0a\x09\x09aBlock value.\x0a\x09\x09failed := false\x0a\x09]\x0a\x09\x09ensure: [\x0a\x09\x09\x09testCase context: nil.\x0a\x09\x09\x09\x0a\x09\x09\x09(failed and: [ testCase isAsync ]) ifTrue: [\x0a\x09\x09\x09\x09testCase finished ].\x0a\x09\x09\x09testCase isAsync ifFalse: [\x0a\x09\x09\x09\x09testCase tearDown ] ]",
messageSends: ["context:", "ensure:", "ifTrue:", "finished", "and:", "isAsync", "ifFalse:", "tearDown", "value"],
referencedClasses: []
}),
smalltalk.TestContext);

smalltalk.addMethod(
smalltalk.method({
selector: "start",
category: 'running',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._execute_((function(){
return smalltalk.withContext(function($ctx2) {
_st(self["@testCase"])._setUp();
return _st(self["@testCase"])._performTest();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"start",{},smalltalk.TestContext)})},
args: [],
source: "start\x0a\x09self execute: [\x0a\x09\x09testCase setUp.\x0a\x09\x09testCase performTest ]",
messageSends: ["execute:", "setUp", "performTest"],
referencedClasses: []
}),
smalltalk.TestContext);

smalltalk.addMethod(
smalltalk.method({
selector: "testCase:",
category: 'accessing',
fn: function (aTestCase){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@testCase"]=aTestCase;
return self}, function($ctx1) {$ctx1.fill(self,"testCase:",{aTestCase:aTestCase},smalltalk.TestContext)})},
args: ["aTestCase"],
source: "testCase: aTestCase\x0a\x09testCase := aTestCase",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestContext);


smalltalk.addMethod(
smalltalk.method({
selector: "testCase:",
category: 'instance creation',
fn: function (aTestCase){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._testCase_(aTestCase);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"testCase:",{aTestCase:aTestCase},smalltalk.TestContext.klass)})},
args: ["aTestCase"],
source: "testCase: aTestCase\x0a\x09^self new\x0a\x09\x09testCase: aTestCase;\x0a\x09\x09yourself",
messageSends: ["testCase:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.TestContext.klass);


smalltalk.addClass('ReportingTestContext', smalltalk.TestContext, ['finished', 'result'], 'SUnit');
smalltalk.ReportingTestContext.comment="I add `TestResult` reporting to `TestContext`.\x0a\x0aErrors are caught and save into a `TestResult`,\x0aWhen test case is finished (which can be later for async tests), a callback block is executed; this is used by a `TestSuiteRunner`.";
smalltalk.addMethod(
smalltalk.method({
selector: "execute:",
category: 'running',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st((function(){
return smalltalk.withContext(function($ctx2) {
return self._withErrorReporting_((function(){
return smalltalk.withContext(function($ctx3) {
return smalltalk.ReportingTestContext.superclass.fn.prototype._execute_.apply(_st(self), [aBlock]);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(self["@testCase"])._isAsync();
if(! smalltalk.assert($1)){
_st(self["@result"])._increaseRuns();
return _st(self["@finished"])._value();
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"execute:",{aBlock:aBlock},smalltalk.ReportingTestContext)})},
args: ["aBlock"],
source: "execute: aBlock\x0a\x09[\x0a\x09\x09self withErrorReporting: [ super execute: aBlock ]\x0a\x09]\x0a\x09\x09ensure: [\x0a\x09\x09\x09testCase isAsync ifFalse: [\x0a\x09\x09\x09\x09result increaseRuns. finished value ] ]",
messageSends: ["ensure:", "ifFalse:", "increaseRuns", "value", "isAsync", "withErrorReporting:", "execute:"],
referencedClasses: []
}),
smalltalk.ReportingTestContext);

smalltalk.addMethod(
smalltalk.method({
selector: "finished:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@finished"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"finished:",{aBlock:aBlock},smalltalk.ReportingTestContext)})},
args: ["aBlock"],
source: "finished: aBlock\x0a\x09finished := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.ReportingTestContext);

smalltalk.addMethod(
smalltalk.method({
selector: "result:",
category: 'accessing',
fn: function (aTestResult){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@result"]=aTestResult;
return self}, function($ctx1) {$ctx1.fill(self,"result:",{aTestResult:aTestResult},smalltalk.ReportingTestContext)})},
args: ["aTestResult"],
source: "result: aTestResult\x0a\x09result := aTestResult",
messageSends: [],
referencedClasses: []
}),
smalltalk.ReportingTestContext);

smalltalk.addMethod(
smalltalk.method({
selector: "withErrorReporting:",
category: 'private',
fn: function (aBlock){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
function $TestFailure(){return smalltalk.TestFailure||(typeof TestFailure=="undefined"?nil:TestFailure)}
return smalltalk.withContext(function($ctx1) { 
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._on_do_($TestFailure(),(function(ex){
return smalltalk.withContext(function($ctx3) {
return _st(self["@result"])._addFailure_(self["@testCase"]);
}, function($ctx3) {$ctx3.fillBlock({ex:ex},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_($Error(),(function(ex){
return smalltalk.withContext(function($ctx2) {
return _st(self["@result"])._addError_(self["@testCase"]);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"withErrorReporting:",{aBlock:aBlock},smalltalk.ReportingTestContext)})},
args: ["aBlock"],
source: "withErrorReporting: aBlock\x0a\x09[ aBlock\x0a\x09\x09on: TestFailure\x0a\x09\x09do: [ :ex | result addFailure: testCase ]\x0a\x09]\x0a\x09\x09on: Error\x0a\x09\x09do: [ :ex | result addError: testCase ]",
messageSends: ["on:do:", "addError:", "addFailure:"],
referencedClasses: ["Error", "TestFailure"]
}),
smalltalk.ReportingTestContext);


smalltalk.addMethod(
smalltalk.method({
selector: "testCase:result:finished:",
category: 'instance creation',
fn: function (aTestCase,aTestResult,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=smalltalk.ReportingTestContext.klass.superclass.fn.prototype._testCase_.apply(_st(self), [aTestCase]);
_st($2)._result_(aTestResult);
_st($2)._finished_(aBlock);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"testCase:result:finished:",{aTestCase:aTestCase,aTestResult:aTestResult,aBlock:aBlock},smalltalk.ReportingTestContext.klass)})},
args: ["aTestCase", "aTestResult", "aBlock"],
source: "testCase: aTestCase result: aTestResult finished: aBlock\x0a\x09^(super testCase: aTestCase)\x0a\x09\x09result: aTestResult;\x0a\x09\x09finished: aBlock;\x0a\x09\x09yourself",
messageSends: ["result:", "testCase:", "finished:", "yourself"],
referencedClasses: []
}),
smalltalk.ReportingTestContext.klass);


smalltalk.addClass('TestFailure', smalltalk.Error, [], 'SUnit');
smalltalk.TestFailure.comment="I am raised when the boolean parameter of an #`assert:` or `#deny:` call is the opposite of what the assertion claims.\x0a\x0aThe test framework distinguishes between failures and errors.\x0aA failure is an event whose possibiity is explicitly anticipated and checked for in an assertion,\x0awhereas an error is an unanticipated problem like a division by 0 or an index out of bounds.";


smalltalk.addClass('TestResult', smalltalk.Object, ['timestamp', 'runs', 'errors', 'failures', 'total'], 'SUnit');
smalltalk.TestResult.comment="I implement the collecting parameter pattern for running a bunch of tests.\x0a\x0aMy instances hold tests that have run, sorted into the result categories of passed, failures and errors.\x0a\x0a`TestResult` is an interesting object to subclass or substitute. `#runCase:` is the external protocol you need to reproduce";
smalltalk.addMethod(
smalltalk.method({
selector: "addError:",
category: 'accessing',
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._errors())._add_(anError);
return self}, function($ctx1) {$ctx1.fill(self,"addError:",{anError:anError},smalltalk.TestResult)})},
args: ["anError"],
source: "addError: anError\x0a\x09self errors add: anError",
messageSends: ["add:", "errors"],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
smalltalk.method({
selector: "addFailure:",
category: 'accessing',
fn: function (aFailure){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._failures())._add_(aFailure);
return self}, function($ctx1) {$ctx1.fill(self,"addFailure:",{aFailure:aFailure},smalltalk.TestResult)})},
args: ["aFailure"],
source: "addFailure: aFailure\x0a\x09self failures add: aFailure",
messageSends: ["add:", "failures"],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
smalltalk.method({
selector: "errors",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@errors"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"errors",{},smalltalk.TestResult)})},
args: [],
source: "errors\x0a\x09^errors",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
smalltalk.method({
selector: "failures",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@failures"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"failures",{},smalltalk.TestResult)})},
args: [],
source: "failures\x0a\x09^failures",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
smalltalk.method({
selector: "increaseRuns",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@runs"]=_st(self["@runs"]).__plus((1));
return self}, function($ctx1) {$ctx1.fill(self,"increaseRuns",{},smalltalk.TestResult)})},
args: [],
source: "increaseRuns\x0a\x09runs := runs + 1",
messageSends: ["+"],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $Date(){return smalltalk.Date||(typeof Date=="undefined"?nil:Date)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.TestResult.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@timestamp"]=_st($Date())._now();
self["@runs"]=(0);
self["@errors"]=_st($Array())._new();
self["@failures"]=_st($Array())._new();
self["@total"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TestResult)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09timestamp := Date now.\x0a\x09runs := 0.\x0a\x09errors := Array new.\x0a\x09failures := Array new.\x0a\x09total := 0",
messageSends: ["initialize", "now", "new"],
referencedClasses: ["Date", "Array"]
}),
smalltalk.TestResult);

smalltalk.addMethod(
smalltalk.method({
selector: "nextRunDo:",
category: 'running',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self._runs()).__eq_eq(self._total());
if(! smalltalk.assert($2)){
$1=_st(aBlock)._value_(_st(self._runs()).__plus((1)));
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextRunDo:",{aBlock:aBlock},smalltalk.TestResult)})},
args: ["aBlock"],
source: "nextRunDo: aBlock\x0a\x22Runs aBlock with index of next run\x0aor does nothing if no more runs\x22\x0a^self runs == self total\x0a\x09ifFalse: [ aBlock value: self runs + 1 ]",
messageSends: ["ifFalse:", "value:", "+", "runs", "==", "total"],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
smalltalk.method({
selector: "runCase:",
category: 'running',
fn: function (aTestCase){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
function $TestFailure(){return smalltalk.TestFailure||(typeof TestFailure=="undefined"?nil:TestFailure)}
return smalltalk.withContext(function($ctx1) { 
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st((function(){
return smalltalk.withContext(function($ctx3) {
self._increaseRuns();
return _st(aTestCase)._runCase();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}))._on_do_($TestFailure(),(function(ex){
return smalltalk.withContext(function($ctx3) {
return self._addFailure_(aTestCase);
}, function($ctx3) {$ctx3.fillBlock({ex:ex},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_($Error(),(function(ex){
return smalltalk.withContext(function($ctx2) {
return self._addError_(aTestCase);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"runCase:",{aTestCase:aTestCase},smalltalk.TestResult)})},
args: ["aTestCase"],
source: "runCase: aTestCase\x0a\x09[[ self increaseRuns.\x0a\x09\x09aTestCase runCase]\x0a\x09on: TestFailure do: [:ex | self addFailure: aTestCase]]\x0a\x09on: Error do: [:ex | self addError: aTestCase]",
messageSends: ["on:do:", "addError:", "addFailure:", "increaseRuns", "runCase"],
referencedClasses: ["Error", "TestFailure"]
}),
smalltalk.TestResult);

smalltalk.addMethod(
smalltalk.method({
selector: "runs",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@runs"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"runs",{},smalltalk.TestResult)})},
args: [],
source: "runs\x0a\x09^runs",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
smalltalk.method({
selector: "status",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self._errors())._isEmpty();
if(smalltalk.assert($2)){
$3=_st(self._failures())._isEmpty();
if(smalltalk.assert($3)){
$1="success";
} else {
$1="failure";
};
} else {
$1="error";
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"status",{},smalltalk.TestResult)})},
args: [],
source: "status\x0a\x09^self errors isEmpty\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09self failures isEmpty\x0a\x09\x09\x09\x09ifTrue: ['success']\x0a\x09\x09\x09\x09ifFalse: ['failure']]\x0a\x09\x09ifFalse: ['error']",
messageSends: ["ifTrue:ifFalse:", "isEmpty", "failures", "errors"],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
smalltalk.method({
selector: "timestamp",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@timestamp"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"timestamp",{},smalltalk.TestResult)})},
args: [],
source: "timestamp\x0a\x09^timestamp",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
smalltalk.method({
selector: "total",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@total"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"total",{},smalltalk.TestResult)})},
args: [],
source: "total\x0a\x09^total",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);

smalltalk.addMethod(
smalltalk.method({
selector: "total:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@total"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"total:",{aNumber:aNumber},smalltalk.TestResult)})},
args: ["aNumber"],
source: "total: aNumber\x0a\x09total := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestResult);



smalltalk.addClass('TestSuiteRunner', smalltalk.Object, ['suite', 'result', 'announcer', 'runNextTest'], 'SUnit');
smalltalk.TestSuiteRunner.comment="I am responsible for running a collection (`suite`) of tests.\x0a\x0a## API\x0a\x0aInstances should be created using the class-side `#on:` method, taking a collection of tests to run as parameter.\x0aTo run the test suite, use `#run`.";
smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@announcer"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.TestSuiteRunner)})},
args: [],
source: "announcer\x0a\x09^announcer",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "contextOf:",
category: 'private',
fn: function (anInteger){
var self=this;
function $ReportingTestContext(){return smalltalk.ReportingTestContext||(typeof ReportingTestContext=="undefined"?nil:ReportingTestContext)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($ReportingTestContext())._testCase_result_finished_(_st(self["@suite"])._at_(anInteger),self["@result"],(function(){
return smalltalk.withContext(function($ctx2) {
return self._resume();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"contextOf:",{anInteger:anInteger},smalltalk.TestSuiteRunner)})},
args: ["anInteger"],
source: "contextOf: anInteger\x0a\x09^ReportingTestContext testCase: (suite at: anInteger) result: result finished: [ self resume ]",
messageSends: ["testCase:result:finished:", "at:", "resume"],
referencedClasses: ["ReportingTestContext"]
}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $Announcer(){return smalltalk.Announcer||(typeof Announcer=="undefined"?nil:Announcer)}
function $TestResult(){return smalltalk.TestResult||(typeof TestResult=="undefined"?nil:TestResult)}
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.TestSuiteRunner.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@announcer"]=_st($Announcer())._new();
self["@result"]=_st($TestResult())._new();
self["@runNextTest"]=(function(){
var runs;
return smalltalk.withContext(function($ctx2) {
runs=_st(self["@result"])._runs();
runs;
$1=_st(runs).__lt(_st(self["@result"])._total());
if(smalltalk.assert($1)){
return _st(self._contextOf_(_st(runs).__plus((1))))._start();
};
}, function($ctx2) {$ctx2.fillBlock({runs:runs},$ctx1)})});
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TestSuiteRunner)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09announcer := Announcer new.\x0a\x09result := TestResult new.\x0a\x09runNextTest := [ | runs | runs := result runs. runs < result total ifTrue: [ (self contextOf: runs + 1) start ]].",
messageSends: ["initialize", "new", "runs", "ifTrue:", "start", "contextOf:", "+", "<", "total"],
referencedClasses: ["Announcer", "TestResult"]
}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "result",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@result"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"result",{},smalltalk.TestSuiteRunner)})},
args: [],
source: "result\x0a\x09^result",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "resume",
category: 'actions',
fn: function (){
var self=this;
function $ResultAnnouncement(){return smalltalk.ResultAnnouncement||(typeof ResultAnnouncement=="undefined"?nil:ResultAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@runNextTest"])._fork();
_st(self["@announcer"])._announce_(_st(_st($ResultAnnouncement())._new())._result_(self["@result"]));
return self}, function($ctx1) {$ctx1.fill(self,"resume",{},smalltalk.TestSuiteRunner)})},
args: [],
source: "resume\x0a\x09runNextTest fork.\x0a\x09announcer announce: (ResultAnnouncement new result: result)",
messageSends: ["fork", "announce:", "result:", "new"],
referencedClasses: ["ResultAnnouncement"]
}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "run",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@result"])._total_(_st(self["@suite"])._size());
self._resume();
return self}, function($ctx1) {$ctx1.fill(self,"run",{},smalltalk.TestSuiteRunner)})},
args: [],
source: "run\x0a\x09result total: suite size.\x0a\x09self resume",
messageSends: ["total:", "size", "resume"],
referencedClasses: []
}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "suite:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@suite"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"suite:",{aCollection:aCollection},smalltalk.TestSuiteRunner)})},
args: ["aCollection"],
source: "suite: aCollection\x0a\x09suite := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestSuiteRunner);


smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.TestSuiteRunner.klass)})},
args: [],
source: "new\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.TestSuiteRunner.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.TestSuiteRunner.klass.superclass.fn.prototype._new.apply(_st(self), []))._suite_(aCollection);
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aCollection:aCollection},smalltalk.TestSuiteRunner.klass)})},
args: ["aCollection"],
source: "on: aCollection\x0a\x09^super new suite: aCollection",
messageSends: ["suite:", "new"],
referencedClasses: []
}),
smalltalk.TestSuiteRunner.klass);


