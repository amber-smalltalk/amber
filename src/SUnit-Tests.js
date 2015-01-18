define("amber_core/SUnit-Tests", ["amber/boot", "amber_core/SUnit"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('SUnit-Tests');
$core.packages["SUnit-Tests"].innerEval = function (expr) { return eval(expr); };
$core.packages["SUnit-Tests"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass('ExampleSetTest', $globals.TestCase, ['empty', 'full'], 'SUnit-Tests');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ExampleSetTest.comment="ExampleSetTest is taken from Pharo 1.4.\x0a\x0aTHe purpose of this class is to demonstrate a simple use case of the test framework.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "setUp",
protocol: 'running',
fn: function (){
var self=this;
function $Set(){return $globals.Set||(typeof Set=="undefined"?nil:Set)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@empty"]=$recv($Set())._new();
self["@full"]=$recv($Set())._with_with_((5),"abc");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{},$globals.ExampleSetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09empty := Set new.\x0a\x09full := Set with: 5 with: #abc",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
messageSends: ["new", "with:with:"]
}),
$globals.ExampleSetTest);

$core.addMethod(
$core.method({
selector: "testAdd",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@empty"])._add_((5));
self._assert_($recv(self["@empty"])._includes_((5)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAdd",{},$globals.ExampleSetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAdd\x0a\x09empty add: 5.\x0a\x09self assert: (empty includes: 5)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "assert:", "includes:"]
}),
$globals.ExampleSetTest);

$core.addMethod(
$core.method({
selector: "testGrow",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@empty"])._addAll_((1)._to_((100)));
self._assert_equals_($recv(self["@empty"])._size(),(100));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testGrow",{},$globals.ExampleSetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testGrow\x0a\x09empty addAll: (1 to: 100).\x0a\x09self assert: empty size equals: 100",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addAll:", "to:", "assert:equals:", "size"]
}),
$globals.ExampleSetTest);

$core.addMethod(
$core.method({
selector: "testIllegal",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@empty"])._at_((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=1;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@empty"])._at_put_((5),"abc");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}),$Error());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIllegal",{},$globals.ExampleSetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIllegal\x0a\x09self\x0a\x09\x09should: [ empty at: 5 ]\x0a\x09\x09raise: Error.\x0a\x09self\x0a\x09\x09should: [ empty at: 5 put: #abc ]\x0a\x09\x09raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["should:raise:", "at:", "at:put:"]
}),
$globals.ExampleSetTest);

$core.addMethod(
$core.method({
selector: "testIncludes",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@full"])._includes_((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["includes:"]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._assert_($recv(self["@full"])._includes_("abc"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIncludes",{},$globals.ExampleSetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIncludes\x0a\x09self assert: (full includes: 5).\x0a\x09self assert: (full includes: #abc)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "includes:"]
}),
$globals.ExampleSetTest);

$core.addMethod(
$core.method({
selector: "testOccurrences",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self["@empty"])._occurrencesOf_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["occurrencesOf:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=$recv(self["@full"])._occurrencesOf_((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["occurrencesOf:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$recv(self["@full"])._add_((5));
self._assert_equals_($recv(self["@full"])._occurrencesOf_((5)),(1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testOccurrences",{},$globals.ExampleSetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testOccurrences\x0a\x09self assert: (empty occurrencesOf: 0) equals: 0.\x0a\x09self assert: (full occurrencesOf: 5) equals: 1.\x0a\x09full add: 5.\x0a\x09self assert: (full occurrencesOf: 5) equals: 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "occurrencesOf:", "add:"]
}),
$globals.ExampleSetTest);

$core.addMethod(
$core.method({
selector: "testRemove",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(self["@full"])._remove_((5));
$1=$recv(self["@full"])._includes_("abc");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["includes:"]=1;
//>>excludeEnd("ctx");
self._assert_($1);
self._deny_($recv(self["@full"])._includes_((5)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRemove",{},$globals.ExampleSetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRemove\x0a\x09full remove: 5.\x0a\x09self assert: (full includes: #abc).\x0a\x09self deny: (full includes: 5)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:", "assert:", "includes:", "deny:"]
}),
$globals.ExampleSetTest);



$core.addClass('SUnitAsyncTest', $globals.TestCase, ['flag'], 'SUnit-Tests');
$core.addMethod(
$core.method({
selector: "fakeError",
protocol: 'helpers',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@flag"]="bad";
self._timeout_((30));
self["@flag"]=$recv(self._async_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self["@flag"]="ok";
self["@flag"];
return self._error_("Intentional");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
})))._valueWithTimeout_((20));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fakeError",{},$globals.SUnitAsyncTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fakeError\x0a\x09flag := 'bad'.\x0a\x09self timeout: 30.\x0a\x09flag := (self async: [ flag := 'ok'. self error: 'Intentional' ]) valueWithTimeout: 20",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["timeout:", "valueWithTimeout:", "async:", "error:"]
}),
$globals.SUnitAsyncTest);

$core.addMethod(
$core.method({
selector: "fakeErrorFailingInTearDown",
protocol: 'helpers',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@flag"]="bad";
self._timeout_((30));
self["@flag"]=$recv(self._async_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._error_("Intentional");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
})))._valueWithTimeout_((20));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fakeErrorFailingInTearDown",{},$globals.SUnitAsyncTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fakeErrorFailingInTearDown\x0a\x09flag := 'bad'.\x0a\x09self timeout: 30.\x0a\x09flag := (self async: [ self error: 'Intentional' ]) valueWithTimeout: 20",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["timeout:", "valueWithTimeout:", "async:", "error:"]
}),
$globals.SUnitAsyncTest);

$core.addMethod(
$core.method({
selector: "fakeFailure",
protocol: 'helpers',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@flag"]="bad";
self._timeout_((30));
self["@flag"]=$recv(self._async_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self["@flag"]="ok";
self["@flag"];
return self._assert_(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
})))._valueWithTimeout_((20));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fakeFailure",{},$globals.SUnitAsyncTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fakeFailure\x0a\x09flag := 'bad'.\x0a\x09self timeout: 30.\x0a\x09flag := (self async: [ flag := 'ok'. self assert: false ]) valueWithTimeout: 20",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["timeout:", "valueWithTimeout:", "async:", "assert:"]
}),
$globals.SUnitAsyncTest);

$core.addMethod(
$core.method({
selector: "fakeMultipleTimeoutFailing",
protocol: 'helpers',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self._timeout_((100));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["timeout:"]=1;
//>>excludeEnd("ctx");
$1=self._async_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._timeout_((20));
return $recv(self._async_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._finished();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
})))._valueWithTimeout_((30));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["async:"]=1;
//>>excludeEnd("ctx");
$recv($1)._valueWithTimeout_((20));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["valueWithTimeout:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fakeMultipleTimeoutFailing",{},$globals.SUnitAsyncTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fakeMultipleTimeoutFailing\x0a\x09self timeout: 100.\x0a\x09(self async: [ \x0a\x09\x09self timeout: 20.\x0a\x09\x09(self async: [ self finished ]) valueWithTimeout: 30\x0a\x09]) valueWithTimeout: 20",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["timeout:", "valueWithTimeout:", "async:", "finished"]
}),
$globals.SUnitAsyncTest);

$core.addMethod(
$core.method({
selector: "fakeMultipleTimeoutPassing",
protocol: 'helpers',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self._timeout_((20));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["timeout:"]=1;
//>>excludeEnd("ctx");
$1=self._async_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._timeout_((40));
return $recv(self._async_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._finished();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
})))._valueWithTimeout_((20));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["async:"]=1;
//>>excludeEnd("ctx");
$recv($1)._valueWithTimeout_((10));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["valueWithTimeout:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fakeMultipleTimeoutPassing",{},$globals.SUnitAsyncTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fakeMultipleTimeoutPassing\x0a\x09self timeout: 20.\x0a\x09(self async: [\x0a\x09\x09self timeout: 40.\x0a\x09\x09(self async: [ self finished ]) valueWithTimeout: 20\x0a\x09]) valueWithTimeout: 10",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["timeout:", "valueWithTimeout:", "async:", "finished"]
}),
$globals.SUnitAsyncTest);

$core.addMethod(
$core.method({
selector: "fakeTimeout",
protocol: 'helpers',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._timeout_((10));
$recv(self._async_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._finished();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
})))._valueWithTimeout_((20));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fakeTimeout",{},$globals.SUnitAsyncTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fakeTimeout\x0a\x09self timeout: 10.\x0a\x09(self async: [ self finished ]) valueWithTimeout: 20",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["timeout:", "valueWithTimeout:", "async:", "finished"]
}),
$globals.SUnitAsyncTest);

$core.addMethod(
$core.method({
selector: "selectorSetOf:",
protocol: 'private',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(aCollection)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})))._asSet();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectorSetOf:",{aCollection:aCollection},$globals.SUnitAsyncTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "selectorSetOf: aCollection\x0a\x09^ (aCollection collect: [ :each | each selector ]) asSet",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asSet", "collect:", "selector"]
}),
$globals.SUnitAsyncTest);

$core.addMethod(
$core.method({
selector: "setUp",
protocol: 'running',
fn: function (){
var self=this;
self["@flag"]="ok";
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09flag := 'ok'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SUnitAsyncTest);

$core.addMethod(
$core.method({
selector: "tearDown",
protocol: 'running',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._assert_equals_("ok",self["@flag"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tearDown",{},$globals.SUnitAsyncTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tearDown\x0a\x09self assert: 'ok' equals: flag",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:"]
}),
$globals.SUnitAsyncTest);

$core.addMethod(
$core.method({
selector: "testAsyncErrorsAndFailures",
protocol: 'tests',
fn: function (){
var self=this;
var suite,runner,result,assertBlock;
function $TestSuiteRunner(){return $globals.TestSuiteRunner||(typeof TestSuiteRunner=="undefined"?nil:TestSuiteRunner)}
function $ResultAnnouncement(){return $globals.ResultAnnouncement||(typeof ResultAnnouncement=="undefined"?nil:ResultAnnouncement)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
suite=["fakeError", "fakeErrorFailingInTearDown", "fakeFailure", "testPass"]._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._class())._selector_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
runner=$recv($TestSuiteRunner())._on_(suite);
self._timeout_((200));
result=$recv(runner)._result();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["result"]=1;
//>>excludeEnd("ctx");
assertBlock=self._async_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=self._selectorSetOf_($recv(result)._errors());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["selectorSetOf:"]=1;
//>>excludeEnd("ctx");
$2=["fakeError"]._asSet();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asSet"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,$2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_(self._selectorSetOf_($recv(result)._failures()),["fakeErrorFailingInTearDown", "fakeFailure"]._asSet());
return self._finished();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv($recv(runner)._announcer())._on_do_($ResultAnnouncement(),(function(ann){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv($recv(ann)._result()).__eq_eq(result);
if($core.assert($3)){
$4=$recv($recv(result)._runs()).__eq($recv(result)._total());
return $recv($4)._ifTrue_(assertBlock);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$recv(runner)._run();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAsyncErrorsAndFailures",{suite:suite,runner:runner,result:result,assertBlock:assertBlock},$globals.SUnitAsyncTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAsyncErrorsAndFailures\x0a\x09| suite runner result assertBlock |\x0a\x09suite := #('fakeError' 'fakeErrorFailingInTearDown' 'fakeFailure' 'testPass') collect: [ :each | self class selector: each ].\x0a\x09runner := TestSuiteRunner on: suite.\x0a\x09self timeout: 200.\x0a\x09result := runner result.\x0a\x09assertBlock := self async: [\x0a\x09\x09self assert: (self selectorSetOf: result errors) equals: #('fakeError') asSet.\x0a\x09\x09self assert: (self selectorSetOf: result failures) equals: #('fakeErrorFailingInTearDown' 'fakeFailure') asSet.\x0a\x09\x09self finished\x0a\x09].\x0a\x09runner announcer on: ResultAnnouncement do: [ :ann |\x0a\x09\x09ann result == result ifTrue: [ result runs = result total ifTrue: assertBlock ] ].\x0a\x09runner run",
referencedClasses: ["TestSuiteRunner", "ResultAnnouncement"],
//>>excludeEnd("ide");
messageSends: ["collect:", "selector:", "class", "on:", "timeout:", "result", "async:", "assert:equals:", "selectorSetOf:", "errors", "asSet", "failures", "finished", "on:do:", "announcer", "ifTrue:", "==", "=", "runs", "total", "run"]
}),
$globals.SUnitAsyncTest);

$core.addMethod(
$core.method({
selector: "testAsyncNeedsTimeout",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._async_((function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["async:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
self._timeout_((0));
self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._async_((function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}),$Error());
self._finished();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAsyncNeedsTimeout",{},$globals.SUnitAsyncTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAsyncNeedsTimeout\x0a\x09self should: [ self async: [ ] ] raise: Error.\x0a\x09self timeout: 0.\x0a\x09self shouldnt: [ self async: [ ] ] raise: Error.\x0a\x09self finished",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["should:raise:", "async:", "timeout:", "shouldnt:raise:", "finished"]
}),
$globals.SUnitAsyncTest);

$core.addMethod(
$core.method({
selector: "testFinishedNeedsTimeout",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._finished();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["finished"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
self._timeout_((0));
self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._finished();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}),$Error());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testFinishedNeedsTimeout",{},$globals.SUnitAsyncTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testFinishedNeedsTimeout\x0a\x09self should: [ self finished ] raise: Error.\x0a\x09self timeout: 0.\x0a\x09self shouldnt: [ self finished ] raise: Error.",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["should:raise:", "finished", "timeout:", "shouldnt:raise:"]
}),
$globals.SUnitAsyncTest);

$core.addMethod(
$core.method({
selector: "testIsAsyncReturnsCorrectValues",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=self._isAsync();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isAsync"]=1;
//>>excludeEnd("ctx");
self._deny_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
self._timeout_((0));
$2=self._isAsync();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isAsync"]=2;
//>>excludeEnd("ctx");
self._assert_($2);
self._finished();
self._deny_(self._isAsync());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIsAsyncReturnsCorrectValues",{},$globals.SUnitAsyncTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIsAsyncReturnsCorrectValues\x0a\x09self deny: self isAsync.\x0a\x09self timeout: 0.\x0a\x09self assert: self isAsync.\x0a\x09self finished.\x0a\x09self deny: self isAsync",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["deny:", "isAsync", "timeout:", "assert:", "finished"]
}),
$globals.SUnitAsyncTest);

$core.addMethod(
$core.method({
selector: "testPass",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@flag"]="bad";
self._timeout_((10));
self["@flag"]=$recv(self._async_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._assert_(true);
self._finished();
self["@flag"]="ok";
return self["@flag"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
})))._valueWithTimeout_((5));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPass",{},$globals.SUnitAsyncTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPass\x0a\x09flag := 'bad'.\x0a\x09self timeout: 10.\x0a\x09flag := (self async: [ self assert: true. self finished. flag := 'ok' ]) valueWithTimeout: 5",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["timeout:", "valueWithTimeout:", "async:", "assert:", "finished"]
}),
$globals.SUnitAsyncTest);

$core.addMethod(
$core.method({
selector: "testTimeouts",
protocol: 'tests',
fn: function (){
var self=this;
var suite,runner,result,assertBlock;
function $TestSuiteRunner(){return $globals.TestSuiteRunner||(typeof TestSuiteRunner=="undefined"?nil:TestSuiteRunner)}
function $Set(){return $globals.Set||(typeof Set=="undefined"?nil:Set)}
function $ResultAnnouncement(){return $globals.ResultAnnouncement||(typeof ResultAnnouncement=="undefined"?nil:ResultAnnouncement)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
suite=["fakeTimeout", "fakeMultipleTimeoutFailing", "fakeMultipleTimeoutPassing", "testPass"]._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._class())._selector_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
runner=$recv($TestSuiteRunner())._on_(suite);
self._timeout_((200));
result=$recv(runner)._result();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["result"]=1;
//>>excludeEnd("ctx");
assertBlock=self._async_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=self._selectorSetOf_($recv(result)._errors());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["selectorSetOf:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,$recv($Set())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_(self._selectorSetOf_($recv(result)._failures()),["fakeMultipleTimeoutFailing", "fakeTimeout"]._asSet());
return self._finished();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv($recv(runner)._announcer())._on_do_($ResultAnnouncement(),(function(ann){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($recv(ann)._result()).__eq_eq(result);
if($core.assert($2)){
$3=$recv($recv(result)._runs()).__eq($recv(result)._total());
return $recv($3)._ifTrue_(assertBlock);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$recv(runner)._run();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTimeouts",{suite:suite,runner:runner,result:result,assertBlock:assertBlock},$globals.SUnitAsyncTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTimeouts\x0a\x09| suite runner result assertBlock |\x0a\x09suite := #('fakeTimeout' 'fakeMultipleTimeoutFailing' 'fakeMultipleTimeoutPassing' 'testPass') collect: [ :each | self class selector: each ].\x0a\x09runner := TestSuiteRunner on: suite.\x0a\x09self timeout: 200.\x0a\x09result := runner result.\x0a\x09assertBlock := self async: [\x0a\x09\x09self assert: (self selectorSetOf: result errors) equals: Set new.\x0a\x09\x09self assert: (self selectorSetOf: result failures) equals: #('fakeMultipleTimeoutFailing' 'fakeTimeout') asSet.\x0a\x09\x09self finished\x0a\x09].\x0a\x09runner announcer on: ResultAnnouncement do: [ :ann |\x0a\x09\x09ann result == result ifTrue: [ result runs = result total ifTrue: assertBlock ] ].\x0a\x09runner run",
referencedClasses: ["TestSuiteRunner", "Set", "ResultAnnouncement"],
//>>excludeEnd("ide");
messageSends: ["collect:", "selector:", "class", "on:", "timeout:", "result", "async:", "assert:equals:", "selectorSetOf:", "errors", "new", "failures", "asSet", "finished", "on:do:", "announcer", "ifTrue:", "==", "=", "runs", "total", "run"]
}),
$globals.SUnitAsyncTest);

$core.addMethod(
$core.method({
selector: "testTwoAsyncPassesWithFinishedOnlyOneIsRun",
protocol: 'tests',
fn: function (){
var self=this;
var x;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self["@flag"]="bad";
self._timeout_((10));
x=(0);
$1=self._async_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._finished();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["finished"]=1;
//>>excludeEnd("ctx");
self["@flag"]="ok";
self["@flag"];
x=$recv(x).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
x;
return self._assert_equals_(x,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["async:"]=1;
//>>excludeEnd("ctx");
self["@flag"]=$recv($1)._valueWithTimeout_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["valueWithTimeout:"]=1;
//>>excludeEnd("ctx");
self["@flag"]=$recv(self._async_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._finished();
self["@flag"]="ok";
self["@flag"];
x=$recv(x).__plus((1));
x;
return self._assert_equals_(x,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
})))._valueWithTimeout_((0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTwoAsyncPassesWithFinishedOnlyOneIsRun",{x:x},$globals.SUnitAsyncTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTwoAsyncPassesWithFinishedOnlyOneIsRun\x0a\x09| x |\x0a\x09flag := 'bad'.\x0a\x09self timeout: 10.\x0a\x09x := 0.\x0a\x09flag := (self async: [ self finished. flag := 'ok'. x := x+1. self assert: x equals: 1 ]) valueWithTimeout: 0.\x0a\x09flag := (self async: [ self finished. flag := 'ok'. x := x+1. self assert: x equals: 1 ]) valueWithTimeout: 0.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["timeout:", "valueWithTimeout:", "async:", "finished", "+", "assert:equals:"]
}),
$globals.SUnitAsyncTest);


});
