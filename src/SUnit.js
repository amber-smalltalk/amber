define("amber_core/SUnit", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Kernel-Exceptions", "amber_core/Kernel-Classes", "amber_core/Kernel-Infrastructure"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('SUnit');
$core.packages["SUnit"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass('ResultAnnouncement', $globals.Object, ['result'], 'SUnit');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ResultAnnouncement.comment="I get signaled when a `TestCase` has been run.\x0a\x0aMy instances hold the result (instance of `TestResult`) of the test run.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "result",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@result"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "result\x0a\x09^ result",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ResultAnnouncement);

$core.addMethod(
$core.method({
selector: "result:",
protocol: 'accessing',
fn: function (aTestResult){
var self=this;
self["@result"]=aTestResult;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTestResult"],
source: "result: aTestResult\x0a\x09result := aTestResult",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ResultAnnouncement);



$core.addClass('TestCase', $globals.Object, ['testSelector', 'asyncTimeout', 'context'], 'SUnit');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TestCase.comment="I am an implementation of the command pattern to run a test.\x0a\x0a## API\x0a\x0aMy instances are created with the class method `#selector:`,\x0apassing the symbol that names the method to be executed when the test case runs.\x0a\x0aWhen you discover a new fixture, subclass `TestCase` and create a `#test...` method for the first test.\x0aAs that method develops and more `#test...` methods are added, you will find yourself refactoring temps\x0ainto instance variables for the objects in the fixture and overriding `#setUp` to initialize these variables.\x0aAs required, override `#tearDown` to nil references, release objects and deallocate.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "assert:",
protocol: 'testing',
fn: function (aBoolean){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_description_(aBoolean,"Assertion failed");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assert:",{aBoolean:aBoolean},$globals.TestCase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "assert: aBoolean\x0a\x09self assert: aBoolean description: 'Assertion failed'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:description:"]
}),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "assert:description:",
protocol: 'testing',
fn: function (aBoolean,aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
if(!$core.assert(aBoolean)){
self._signalFailure_(aString);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assert:description:",{aBoolean:aBoolean,aString:aString},$globals.TestCase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean", "aString"],
source: "assert: aBoolean description: aString\x0a\x09aBoolean ifFalse: [ self signalFailure: aString ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "signalFailure:"]
}),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "assert:equals:",
protocol: 'testing',
fn: function (actual,expected){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$6,$5,$4,$3,$1;
$2=$recv(actual).__eq(expected);
$6=$recv(expected)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=1;
//>>excludeEnd("ctx");
$5="Expected: ".__comma($6);
$4=$recv($5).__comma(" but was: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__comma($recv(actual)._printString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$1=self._assert_description_($2,$3);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assert:equals:",{actual:actual,expected:expected},$globals.TestCase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["actual", "expected"],
source: "assert: actual equals: expected\x0a\x09^ self assert: (actual = expected) description: 'Expected: ', expected printString, ' but was: ', actual printString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:description:", "=", ",", "printString"]
}),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "async:",
protocol: 'async',
fn: function (aBlock){
var self=this;
var c;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
self._errorIfNotAsync_("#async");
c=self["@context"];
$1=(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=self._isAsync();
if($core.assert($2)){
return $recv(c)._execute_(aBlock);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
});
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"async:",{aBlock:aBlock,c:c},$globals.TestCase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "async: aBlock\x0a\x09| c |\x0a\x09self errorIfNotAsync: '#async'.\x0a\x09c := context.\x0a\x09^ [ self isAsync ifTrue: [ c execute: aBlock ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["errorIfNotAsync:", "ifTrue:", "isAsync", "execute:"]
}),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "context:",
protocol: 'accessing',
fn: function (aRunningTestContext){
var self=this;
self["@context"]=aRunningTestContext;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRunningTestContext"],
source: "context: aRunningTestContext\x0a\x09context := aRunningTestContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "deny:",
protocol: 'testing',
fn: function (aBoolean){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_($recv(aBoolean)._not());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deny:",{aBoolean:aBoolean},$globals.TestCase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "deny: aBoolean\x0a\x09self assert: aBoolean not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "not"]
}),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "errorIfNotAsync:",
protocol: 'error handling',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._isAsync();
if(!$core.assert($1)){
self._error_($recv(aString).__comma(" used without prior #timeout:"));
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"errorIfNotAsync:",{aString:aString},$globals.TestCase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "errorIfNotAsync: aString\x0a\x09self isAsync ifFalse: [\x0a\x09\x09self error: aString, ' used without prior #timeout:' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "isAsync", "error:", ","]
}),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "finished",
protocol: 'async',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._errorIfNotAsync_("#finished");
self["@asyncTimeout"]=nil;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"finished",{},$globals.TestCase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "finished\x0a\x09self errorIfNotAsync: '#finished'.\x0a\x09asyncTimeout := nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["errorIfNotAsync:"]
}),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "isAsync",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@asyncTimeout"])._notNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isAsync",{},$globals.TestCase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAsync\x0a\x09^ asyncTimeout notNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notNil"]
}),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "performTest",
protocol: 'running',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@asyncTimeout"]=nil;
self._perform_(self._selector());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"performTest",{},$globals.TestCase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "performTest\x0a\x09asyncTimeout := nil.\x0a\x09self perform: self selector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["perform:", "selector"]
}),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "runCase",
protocol: 'running',
fn: function (){
var self=this;
function $TestContext(){return $globals.TestContext||(typeof TestContext=="undefined"?nil:TestContext)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv($TestContext())._testCase_(self))._start();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"runCase",{},$globals.TestCase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "runCase\x0a\x09\x22Runs a test case in isolated context, leaking all errors.\x22\x0a\x0a\x09(TestContext testCase: self) start",
referencedClasses: ["TestContext"],
//>>excludeEnd("ide");
messageSends: ["start", "testCase:"]
}),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "selector",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@testSelector"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selector\x0a\x09^ testSelector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "setTestSelector:",
protocol: 'accessing',
fn: function (aSelector){
var self=this;
self["@testSelector"]=aSelector;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "setTestSelector: aSelector\x0a\x09testSelector := aSelector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "setUp",
protocol: 'running',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "should:",
protocol: 'testing',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_($recv(aBlock)._value());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"should:",{aBlock:aBlock},$globals.TestCase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "should: aBlock\x0a\x09self assert: aBlock value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "value"]
}),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "should:raise:",
protocol: 'testing',
fn: function (aBlock,anExceptionClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_($recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(aBlock)._value();
return false;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_(anExceptionClass,(function(ex){
return true;

})));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"should:raise:",{aBlock:aBlock,anExceptionClass:anExceptionClass},$globals.TestCase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anExceptionClass"],
source: "should: aBlock raise: anExceptionClass\x0a\x09self assert: ([ aBlock value. false ]\x0a\x09\x09on: anExceptionClass\x0a\x09\x09do: [ :ex | true ])",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "on:do:", "value"]
}),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "shouldnt:raise:",
protocol: 'testing',
fn: function (aBlock,anExceptionClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_($recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(aBlock)._value();
return true;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_(anExceptionClass,(function(ex){
return false;

})));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldnt:raise:",{aBlock:aBlock,anExceptionClass:anExceptionClass},$globals.TestCase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anExceptionClass"],
source: "shouldnt: aBlock raise: anExceptionClass\x0a\x09self assert: ([ aBlock value. true ]\x0a\x09\x09on: anExceptionClass\x0a\x09\x09do: [ :ex | false ])",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "on:do:", "value"]
}),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "signalFailure:",
protocol: 'private',
fn: function (aString){
var self=this;
function $TestFailure(){return $globals.TestFailure||(typeof TestFailure=="undefined"?nil:TestFailure)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($TestFailure())._new();
$recv($1)._messageText_(aString);
$2=$recv($1)._signal();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"signalFailure:",{aString:aString},$globals.TestCase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "signalFailure: aString\x0a\x09TestFailure new\x0a\x09\x09messageText: aString;\x0a\x09\x09signal",
referencedClasses: ["TestFailure"],
//>>excludeEnd("ide");
messageSends: ["messageText:", "new", "signal"]
}),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "tearDown",
protocol: 'running',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tearDown",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "timeout:",
protocol: 'async',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@asyncTimeout"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv(self["@asyncTimeout"])._clearTimeout();
};
self["@asyncTimeout"]=(0);
self["@asyncTimeout"]=$recv(self._async_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._assert_description_(false,"SUnit grace time exhausted");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
})))._valueWithTimeout_(aNumber);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"timeout:",{aNumber:aNumber},$globals.TestCase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "timeout: aNumber\x0a\x09\x22Set a grace time timeout in milliseconds to run the test asynchronously\x22\x0a\x09\x0a\x09asyncTimeout ifNotNil: [ asyncTimeout clearTimeout ].\x0a\x09\x0a\x09\x22to allow #async: message send without throwing an error\x22\x0a\x09asyncTimeout := 0.\x0a\x09\x0a\x09asyncTimeout := (self async: [\x0a\x09\x09self assert: false description: 'SUnit grace time exhausted' ])\x0a\x09\x09\x09valueWithTimeout: aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "clearTimeout", "valueWithTimeout:", "async:", "assert:description:"]
}),
$globals.TestCase);


$core.addMethod(
$core.method({
selector: "allTestSelectors",
protocol: 'accessing',
fn: function (){
var self=this;
var selectors;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
selectors=self._testSelectors();
$1=self._shouldInheritSelectors();
if($core.assert($1)){
$recv(selectors)._addAll_($recv(self._superclass())._allTestSelectors());
};
$2=selectors;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allTestSelectors",{selectors:selectors},$globals.TestCase.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allTestSelectors\x0a\x09| selectors |\x0a\x09selectors := self testSelectors.\x0a\x09self shouldInheritSelectors ifTrue: [\x0a\x09\x09selectors addAll: self superclass allTestSelectors ].\x0a\x09^ selectors",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["testSelectors", "ifTrue:", "shouldInheritSelectors", "addAll:", "allTestSelectors", "superclass"]
}),
$globals.TestCase.klass);

$core.addMethod(
$core.method({
selector: "buildSuite",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._allTestSelectors())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._selector_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"buildSuite",{},$globals.TestCase.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "buildSuite\x0a\x09^ self allTestSelectors collect: [ :each | self selector: each ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "allTestSelectors", "selector:"]
}),
$globals.TestCase.klass);

$core.addMethod(
$core.method({
selector: "heliosClass",
protocol: 'helios',
fn: function (){
var self=this;
return "test";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "heliosClass\x0a\x09^ 'test'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TestCase.klass);

$core.addMethod(
$core.method({
selector: "isAbstract",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._name()).__eq("TestCase");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},$globals.TestCase.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAbstract\x0a\x09^ self name = 'TestCase'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["=", "name"]
}),
$globals.TestCase.klass);

$core.addMethod(
$core.method({
selector: "lookupHierarchyRoot",
protocol: 'accessing',
fn: function (){
var self=this;
function $TestCase(){return $globals.TestCase||(typeof TestCase=="undefined"?nil:TestCase)}
return $TestCase();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lookupHierarchyRoot\x0a\x09^ TestCase",
referencedClasses: ["TestCase"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TestCase.klass);

$core.addMethod(
$core.method({
selector: "selector:",
protocol: 'accessing',
fn: function (aSelector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._setTestSelector_(aSelector);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selector:",{aSelector:aSelector},$globals.TestCase.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "selector: aSelector\x0a\x09^ self new\x0a\x09\x09setTestSelector: aSelector;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setTestSelector:", "new", "yourself"]
}),
$globals.TestCase.klass);

$core.addMethod(
$core.method({
selector: "shouldInheritSelectors",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self.__tild_eq(self._lookupHierarchyRoot());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldInheritSelectors",{},$globals.TestCase.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shouldInheritSelectors\x0a\x09^ self ~= self lookupHierarchyRoot",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["~=", "lookupHierarchyRoot"]
}),
$globals.TestCase.klass);

$core.addMethod(
$core.method({
selector: "testSelectors",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._methodDictionary())._keys())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._match_("^test");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSelectors",{},$globals.TestCase.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSelectors\x0a\x09^ self methodDictionary keys select: [ :each | each match: '^test' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["select:", "keys", "methodDictionary", "match:"]
}),
$globals.TestCase.klass);


$core.addClass('TestContext', $globals.Object, ['testCase'], 'SUnit');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TestContext.comment="I govern running a particular test case.\x0a\x0aMy main added value is `#execute:` method which runs a block as a part of test case (restores context, nilling it afterwards, cleaning/calling `#tearDown` as appropriate for sync/async scenario).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "execute:",
protocol: 'running',
fn: function (aBlock){
var self=this;
var failed;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$recv(self["@testCase"])._context_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["context:"]=1;
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
failed=true;
failed;
$recv(aBlock)._value();
failed=false;
return failed;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._ensure_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(self["@testCase"])._context_(nil);
$1=$recv(failed)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(self["@testCase"])._isAsync();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["isAsync"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
$recv(self["@testCase"])._finished();
};
$2=$recv(self["@testCase"])._isAsync();
if(!$core.assert($2)){
return $recv(self["@testCase"])._tearDown();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute:",{aBlock:aBlock,failed:failed},$globals.TestContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "execute: aBlock\x0a\x09| failed |\x0a\x09\x0a\x09testCase context: self.\x0a\x09[\x0a\x09\x09failed := true.\x0a\x09\x09aBlock value.\x0a\x09\x09failed := false\x0a\x09]\x0a\x09\x09ensure: [\x0a\x09\x09\x09testCase context: nil.\x0a\x09\x09\x09\x0a\x09\x09\x09(failed and: [ testCase isAsync ]) ifTrue: [\x0a\x09\x09\x09\x09testCase finished ].\x0a\x09\x09\x09testCase isAsync ifFalse: [\x0a\x09\x09\x09\x09testCase tearDown ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["context:", "ensure:", "value", "ifTrue:", "and:", "isAsync", "finished", "ifFalse:", "tearDown"]
}),
$globals.TestContext);

$core.addMethod(
$core.method({
selector: "start",
protocol: 'running',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._execute_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(self["@testCase"])._setUp();
return $recv(self["@testCase"])._performTest();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.TestContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self execute: [\x0a\x09\x09testCase setUp.\x0a\x09\x09testCase performTest ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["execute:", "setUp", "performTest"]
}),
$globals.TestContext);

$core.addMethod(
$core.method({
selector: "testCase:",
protocol: 'accessing',
fn: function (aTestCase){
var self=this;
self["@testCase"]=aTestCase;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTestCase"],
source: "testCase: aTestCase\x0a\x09testCase := aTestCase",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TestContext);


$core.addMethod(
$core.method({
selector: "testCase:",
protocol: 'instance creation',
fn: function (aTestCase){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._testCase_(aTestCase);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCase:",{aTestCase:aTestCase},$globals.TestContext.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTestCase"],
source: "testCase: aTestCase\x0a\x09^ self new\x0a\x09\x09testCase: aTestCase;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["testCase:", "new", "yourself"]
}),
$globals.TestContext.klass);


$core.addClass('ReportingTestContext', $globals.TestContext, ['finished', 'result'], 'SUnit');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ReportingTestContext.comment="I add `TestResult` reporting to `TestContext`.\x0a\x0aErrors are caught and save into a `TestResult`,\x0aWhen test case is finished (which can be later for async tests), a callback block is executed; this is used by a `TestSuiteRunner`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "execute:",
protocol: 'running',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._withErrorReporting_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return (
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.supercall = true, 
//>>excludeEnd("ctx");
$globals.ReportingTestContext.superclass.fn.prototype._execute_.apply($recv(self), [aBlock]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._ensure_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(self["@testCase"])._isAsync();
if(!$core.assert($1)){
$recv(self["@result"])._increaseRuns();
return $recv(self["@finished"])._value();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute:",{aBlock:aBlock},$globals.ReportingTestContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "execute: aBlock\x0a\x09[\x0a\x09\x09self withErrorReporting: [ super execute: aBlock ]\x0a\x09]\x0a\x09\x09ensure: [\x0a\x09\x09\x09testCase isAsync ifFalse: [\x0a\x09\x09\x09\x09result increaseRuns. finished value ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ensure:", "withErrorReporting:", "execute:", "ifFalse:", "isAsync", "increaseRuns", "value"]
}),
$globals.ReportingTestContext);

$core.addMethod(
$core.method({
selector: "finished:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@finished"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "finished: aBlock\x0a\x09finished := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ReportingTestContext);

$core.addMethod(
$core.method({
selector: "result:",
protocol: 'accessing',
fn: function (aTestResult){
var self=this;
self["@result"]=aTestResult;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTestResult"],
source: "result: aTestResult\x0a\x09result := aTestResult",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ReportingTestContext);

$core.addMethod(
$core.method({
selector: "withErrorReporting:",
protocol: 'private',
fn: function (aBlock){
var self=this;
function $TestFailure(){return $globals.TestFailure||(typeof TestFailure=="undefined"?nil:TestFailure)}
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlock)._on_do_($TestFailure(),(function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(self["@result"])._addFailure_(self["@testCase"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({ex:ex},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@result"])._addError_(self["@testCase"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withErrorReporting:",{aBlock:aBlock},$globals.ReportingTestContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "withErrorReporting: aBlock\x0a\x09[ aBlock\x0a\x09\x09on: TestFailure\x0a\x09\x09do: [ :ex | result addFailure: testCase ]\x0a\x09]\x0a\x09\x09on: Error\x0a\x09\x09do: [ :ex | result addError: testCase ]",
referencedClasses: ["TestFailure", "Error"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "addFailure:", "addError:"]
}),
$globals.ReportingTestContext);


$core.addMethod(
$core.method({
selector: "testCase:result:finished:",
protocol: 'instance creation',
fn: function (aTestCase,aTestResult,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.ReportingTestContext.klass.superclass.fn.prototype._testCase_.apply($recv(self), [aTestCase]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv($2)._result_(aTestResult);
$recv($2)._finished_(aBlock);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCase:result:finished:",{aTestCase:aTestCase,aTestResult:aTestResult,aBlock:aBlock},$globals.ReportingTestContext.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTestCase", "aTestResult", "aBlock"],
source: "testCase: aTestCase result: aTestResult finished: aBlock\x0a\x09^ (super testCase: aTestCase)\x0a\x09\x09result: aTestResult;\x0a\x09\x09finished: aBlock;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["result:", "testCase:", "finished:", "yourself"]
}),
$globals.ReportingTestContext.klass);


$core.addClass('TestFailure', $globals.Error, [], 'SUnit');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TestFailure.comment="I am raised when the boolean parameter of an #`assert:` or `#deny:` call is the opposite of what the assertion claims.\x0a\x0aThe test framework distinguishes between failures and errors.\x0aA failure is an event whose possibiity is explicitly anticipated and checked for in an assertion,\x0awhereas an error is an unanticipated problem like a division by 0 or an index out of bounds.";
//>>excludeEnd("ide");


$core.addClass('TestResult', $globals.Object, ['timestamp', 'runs', 'errors', 'failures', 'total'], 'SUnit');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TestResult.comment="I implement the collecting parameter pattern for running a bunch of tests.\x0a\x0aMy instances hold tests that have run, sorted into the result categories of passed, failures and errors.\x0a\x0a`TestResult` is an interesting object to subclass or substitute. `#runCase:` is the external protocol you need to reproduce";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addError:",
protocol: 'accessing',
fn: function (anError){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._errors())._add_(anError);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addError:",{anError:anError},$globals.TestResult)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "addError: anError\x0a\x09self errors add: anError",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "errors"]
}),
$globals.TestResult);

$core.addMethod(
$core.method({
selector: "addFailure:",
protocol: 'accessing',
fn: function (aFailure){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._failures())._add_(aFailure);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addFailure:",{aFailure:aFailure},$globals.TestResult)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFailure"],
source: "addFailure: aFailure\x0a\x09self failures add: aFailure",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "failures"]
}),
$globals.TestResult);

$core.addMethod(
$core.method({
selector: "errors",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@errors"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "errors\x0a\x09^ errors",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TestResult);

$core.addMethod(
$core.method({
selector: "failures",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@failures"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "failures\x0a\x09^ failures",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TestResult);

$core.addMethod(
$core.method({
selector: "increaseRuns",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@runs"]=$recv(self["@runs"]).__plus((1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"increaseRuns",{},$globals.TestResult)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "increaseRuns\x0a\x09runs := runs + 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+"]
}),
$globals.TestResult);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $Date(){return $globals.Date||(typeof Date=="undefined"?nil:Date)}
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.TestResult.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@timestamp"]=$recv($Date())._now();
self["@runs"]=(0);
self["@errors"]=$recv($Array())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self["@failures"]=$recv($Array())._new();
self["@total"]=(0);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.TestResult)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09timestamp := Date now.\x0a\x09runs := 0.\x0a\x09errors := Array new.\x0a\x09failures := Array new.\x0a\x09total := 0",
referencedClasses: ["Date", "Array"],
//>>excludeEnd("ide");
messageSends: ["initialize", "now", "new"]
}),
$globals.TestResult);

$core.addMethod(
$core.method({
selector: "nextRunDo:",
protocol: 'running',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=self._runs();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["runs"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__eq_eq(self._total());
if(!$core.assert($2)){
$1=$recv(aBlock)._value_($recv(self._runs()).__plus((1)));
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextRunDo:",{aBlock:aBlock},$globals.TestResult)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "nextRunDo: aBlock\x0a\x09\x22Runs aBlock with index of next run or does nothing if no more runs\x22\x0a\x09^ self runs == self total\x0a\x09\x09ifFalse: [ aBlock value: self runs + 1 ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "==", "runs", "total", "value:", "+"]
}),
$globals.TestResult);

$core.addMethod(
$core.method({
selector: "runCase:",
protocol: 'running',
fn: function (aTestCase){
var self=this;
function $TestFailure(){return $globals.TestFailure||(typeof TestFailure=="undefined"?nil:TestFailure)}
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
self._increaseRuns();
return $recv(aTestCase)._runCase();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}))._on_do_($TestFailure(),(function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._addFailure_(aTestCase);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({ex:ex},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._addError_(aTestCase);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"runCase:",{aTestCase:aTestCase},$globals.TestResult)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTestCase"],
source: "runCase: aTestCase\x0a\x09[ [ self increaseRuns.\x0a\x09\x09aTestCase runCase ]\x0a\x09on: TestFailure do: [ :ex | self addFailure: aTestCase ]]\x0a\x09on: Error do: [ :ex | self addError: aTestCase ]",
referencedClasses: ["TestFailure", "Error"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "increaseRuns", "runCase", "addFailure:", "addError:"]
}),
$globals.TestResult);

$core.addMethod(
$core.method({
selector: "runs",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@runs"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "runs\x0a\x09^ runs",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TestResult);

$core.addMethod(
$core.method({
selector: "status",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv(self._errors())._isEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isEmpty"]=1;
//>>excludeEnd("ctx");
if($core.assert($2)){
$3=$recv(self._failures())._isEmpty();
if($core.assert($3)){
$1="success";
} else {
$1="failure";
};
} else {
$1="error";
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"status",{},$globals.TestResult)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "status\x0a\x09^ self errors isEmpty\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09self failures isEmpty\x0a\x09\x09\x09\x09ifTrue: [ 'success' ]\x0a\x09\x09\x09\x09ifFalse: [ 'failure' ]]\x0a\x09\x09ifFalse: [ 'error' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isEmpty", "errors", "failures"]
}),
$globals.TestResult);

$core.addMethod(
$core.method({
selector: "timestamp",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@timestamp"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "timestamp\x0a\x09^ timestamp",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TestResult);

$core.addMethod(
$core.method({
selector: "total",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@total"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "total\x0a\x09^ total",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TestResult);

$core.addMethod(
$core.method({
selector: "total:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
self["@total"]=aNumber;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "total: aNumber\x0a\x09total := aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TestResult);



$core.addClass('TestSuiteRunner', $globals.Object, ['suite', 'result', 'announcer', 'runNextTest'], 'SUnit');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TestSuiteRunner.comment="I am responsible for running a collection (`suite`) of tests.\x0a\x0a## API\x0a\x0aInstances should be created using the class-side `#on:` method, taking a collection of tests to run as parameter.\x0aTo run the test suite, use `#run`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "announcer",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@announcer"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "announcer\x0a\x09^ announcer",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TestSuiteRunner);

$core.addMethod(
$core.method({
selector: "contextOf:",
protocol: 'private',
fn: function (anInteger){
var self=this;
function $ReportingTestContext(){return $globals.ReportingTestContext||(typeof ReportingTestContext=="undefined"?nil:ReportingTestContext)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($ReportingTestContext())._testCase_result_finished_($recv(self["@suite"])._at_(anInteger),self["@result"],(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._resume();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"contextOf:",{anInteger:anInteger},$globals.TestSuiteRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "contextOf: anInteger\x0a\x09^ ReportingTestContext testCase: (suite at: anInteger) result: result finished: [ self resume ]",
referencedClasses: ["ReportingTestContext"],
//>>excludeEnd("ide");
messageSends: ["testCase:result:finished:", "at:", "resume"]
}),
$globals.TestSuiteRunner);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $Announcer(){return $globals.Announcer||(typeof Announcer=="undefined"?nil:Announcer)}
function $TestResult(){return $globals.TestResult||(typeof TestResult=="undefined"?nil:TestResult)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.TestSuiteRunner.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@announcer"]=$recv($Announcer())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self["@result"]=$recv($TestResult())._new();
self["@runNextTest"]=(function(){
var runs;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
runs=$recv(self["@result"])._runs();
runs;
$1=$recv(runs).__lt($recv(self["@result"])._total());
if($core.assert($1)){
return $recv(self._contextOf_($recv(runs).__plus((1))))._start();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({runs:runs},$ctx1,1)});
//>>excludeEnd("ctx");
});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.TestSuiteRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09announcer := Announcer new.\x0a\x09result := TestResult new.\x0a\x09runNextTest := [ | runs | runs := result runs. runs < result total ifTrue: [ (self contextOf: runs + 1) start ] ].",
referencedClasses: ["Announcer", "TestResult"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new", "runs", "ifTrue:", "<", "total", "start", "contextOf:", "+"]
}),
$globals.TestSuiteRunner);

$core.addMethod(
$core.method({
selector: "result",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@result"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "result\x0a\x09^ result",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TestSuiteRunner);

$core.addMethod(
$core.method({
selector: "resume",
protocol: 'actions',
fn: function (){
var self=this;
function $ResultAnnouncement(){return $globals.ResultAnnouncement||(typeof ResultAnnouncement=="undefined"?nil:ResultAnnouncement)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@runNextTest"])._fork();
$recv(self["@announcer"])._announce_($recv($recv($ResultAnnouncement())._new())._result_(self["@result"]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resume",{},$globals.TestSuiteRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resume\x0a\x09runNextTest fork.\x0a\x09announcer announce: (ResultAnnouncement new result: result)",
referencedClasses: ["ResultAnnouncement"],
//>>excludeEnd("ide");
messageSends: ["fork", "announce:", "result:", "new"]
}),
$globals.TestSuiteRunner);

$core.addMethod(
$core.method({
selector: "run",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@result"])._total_($recv(self["@suite"])._size());
self._resume();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"run",{},$globals.TestSuiteRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "run\x0a\x09result total: suite size.\x0a\x09self resume",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["total:", "size", "resume"]
}),
$globals.TestSuiteRunner);

$core.addMethod(
$core.method({
selector: "suite:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@suite"]=aCollection;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "suite: aCollection\x0a\x09suite := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TestSuiteRunner);


$core.addMethod(
$core.method({
selector: "new",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._shouldNotImplement();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.TestSuiteRunner.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09self shouldNotImplement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldNotImplement"]
}),
$globals.TestSuiteRunner.klass);

$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.TestSuiteRunner.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv($2)._suite_(aCollection);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aCollection:aCollection},$globals.TestSuiteRunner.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "on: aCollection\x0a\x09^ super new suite: aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["suite:", "new"]
}),
$globals.TestSuiteRunner.klass);

$core.addMethod(
$core.method({
selector: "isTestClass",
protocol: '*SUnit',
fn: function (){
var self=this;
function $TestCase(){return $globals.TestCase||(typeof TestCase=="undefined"?nil:TestCase)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._includesBehavior_($TestCase()))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._isAbstract())._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isTestClass",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isTestClass\x0a\x09^(self includesBehavior: TestCase) and: [ \x0a\x09\x09\x09self isAbstract not ]",
referencedClasses: ["TestCase"],
//>>excludeEnd("ide");
messageSends: ["and:", "includesBehavior:", "not", "isAbstract"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "isTestPackage",
protocol: '*SUnit',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._classes())._anySatisfy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._isTestClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isTestPackage",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isTestPackage\x0a\x09^ self classes anySatisfy: [ :each | each isTestClass ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["anySatisfy:", "classes", "isTestClass"]
}),
$globals.Package);

});
