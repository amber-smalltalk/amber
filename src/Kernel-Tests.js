define("amber_core/Kernel-Tests", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/SUnit", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Kernel-Tests');
smalltalk.packages["Kernel-Tests"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('AnnouncementSubscriptionTest', globals.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testHandlesAnnouncement",
protocol: 'tests',
fn: function (){
var self=this;
var subscription,announcementClass1,announcementClass2,classBuilder;
function $ClassBuilder(){return globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
function $SystemAnnouncement(){return globals.SystemAnnouncement||(typeof SystemAnnouncement=="undefined"?nil:SystemAnnouncement)}
function $AnnouncementSubscription(){return globals.AnnouncementSubscription||(typeof AnnouncementSubscription=="undefined"?nil:AnnouncementSubscription)}
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
classBuilder=_st($ClassBuilder())._new();
$ctx1.sendIdx["new"]=1;
announcementClass1=_st(classBuilder)._basicAddSubclassOf_named_instanceVariableNames_package_($SystemAnnouncement(),"TestAnnouncement1",[],"Kernel-Tests");
subscription=_st(_st($AnnouncementSubscription())._new())._announcementClass_($SystemAnnouncement());
$1=_st(subscription)._handlesAnnouncement_($SystemAnnouncement());
$ctx1.sendIdx["handlesAnnouncement:"]=1;
self._assert_equals_($1,true);
$ctx1.sendIdx["assert:equals:"]=1;
$2=_st(subscription)._handlesAnnouncement_(announcementClass1);
$ctx1.sendIdx["handlesAnnouncement:"]=2;
self._assert_equals_($2,true);
$ctx1.sendIdx["assert:equals:"]=2;
self._assert_equals_(_st(subscription)._handlesAnnouncement_($Object()),false);
_st(classBuilder)._basicRemoveClass_(announcementClass1);
return self}, function($ctx1) {$ctx1.fill(self,"testHandlesAnnouncement",{subscription:subscription,announcementClass1:announcementClass1,announcementClass2:announcementClass2,classBuilder:classBuilder},globals.AnnouncementSubscriptionTest)})},
args: [],
source: "testHandlesAnnouncement\x0a\x09| subscription announcementClass1 announcementClass2 classBuilder |\x0a\x09\x0a\x09classBuilder := ClassBuilder new.\x0a\x09announcementClass1 := classBuilder basicAddSubclassOf: SystemAnnouncement named: 'TestAnnouncement1' instanceVariableNames: #() package: 'Kernel-Tests'.\x0a\x09\x0a\x09subscription := AnnouncementSubscription new announcementClass: SystemAnnouncement.\x0a\x09\x22Test whether the same class triggers the announcement\x22\x0a\x09self assert: (subscription handlesAnnouncement: SystemAnnouncement) equals: true.\x0a\x09\x22Test whether a subclass triggers the announcement\x22\x0a\x09self assert: (subscription handlesAnnouncement: announcementClass1) equals: true.\x0a\x09\x22Test whether an unrelated class does not trigger the announcement\x22\x0a\x09self assert: (subscription handlesAnnouncement: Object) equals: false.\x0a\x09\x0a\x09classBuilder basicRemoveClass: announcementClass1.",
messageSends: ["new", "basicAddSubclassOf:named:instanceVariableNames:package:", "announcementClass:", "assert:equals:", "handlesAnnouncement:", "basicRemoveClass:"],
referencedClasses: ["ClassBuilder", "SystemAnnouncement", "AnnouncementSubscription", "Object"]
}),
globals.AnnouncementSubscriptionTest);



smalltalk.addClass('AnnouncerTest', globals.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testOnDo",
protocol: 'tests',
fn: function (){
var self=this;
var counter,announcer;
function $Announcer(){return globals.Announcer||(typeof Announcer=="undefined"?nil:Announcer)}
function $SystemAnnouncement(){return globals.SystemAnnouncement||(typeof SystemAnnouncement=="undefined"?nil:SystemAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
counter=(0);
announcer=_st($Announcer())._new();
$ctx1.sendIdx["new"]=1;
_st(announcer)._on_do_($SystemAnnouncement(),(function(){
return smalltalk.withContext(function($ctx2) {
counter=_st(counter).__plus((1));
return counter;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$1=announcer;
$2=_st($SystemAnnouncement())._new();
$ctx1.sendIdx["new"]=2;
_st($1)._announce_($2);
$ctx1.sendIdx["announce:"]=1;
self._assert_equals_(counter,(1));
$ctx1.sendIdx["assert:equals:"]=1;
_st(announcer)._announce_(_st($SystemAnnouncement())._new());
self._assert_equals_(counter,(2));
return self}, function($ctx1) {$ctx1.fill(self,"testOnDo",{counter:counter,announcer:announcer},globals.AnnouncerTest)})},
args: [],
source: "testOnDo\x0a\x09| counter announcer |\x0a\x09\x0a\x09counter := 0.\x0a\x09announcer := Announcer new.\x0a\x09announcer on: SystemAnnouncement do: [ counter := counter + 1 ].\x0a\x0a\x09announcer announce: (SystemAnnouncement new).\x0a\x09self assert: counter equals: 1.\x0a\x0a\x09announcer announce: (SystemAnnouncement new).\x0a\x09self assert: counter equals: 2.",
messageSends: ["new", "on:do:", "+", "announce:", "assert:equals:"],
referencedClasses: ["Announcer", "SystemAnnouncement"]
}),
globals.AnnouncerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testOnDoFor",
protocol: 'tests',
fn: function (){
var self=this;
var counter,announcer;
function $Announcer(){return globals.Announcer||(typeof Announcer=="undefined"?nil:Announcer)}
function $SystemAnnouncement(){return globals.SystemAnnouncement||(typeof SystemAnnouncement=="undefined"?nil:SystemAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
counter=(0);
announcer=_st($Announcer())._new();
$ctx1.sendIdx["new"]=1;
_st(announcer)._on_do_for_($SystemAnnouncement(),(function(){
return smalltalk.withContext(function($ctx2) {
counter=_st(counter).__plus((1));
return counter;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),self);
$1=announcer;
$2=_st($SystemAnnouncement())._new();
$ctx1.sendIdx["new"]=2;
_st($1)._announce_($2);
$ctx1.sendIdx["announce:"]=1;
self._assert_equals_(counter,(1));
$ctx1.sendIdx["assert:equals:"]=1;
$3=announcer;
$4=_st($SystemAnnouncement())._new();
$ctx1.sendIdx["new"]=3;
_st($3)._announce_($4);
$ctx1.sendIdx["announce:"]=2;
self._assert_equals_(counter,(2));
$ctx1.sendIdx["assert:equals:"]=2;
_st(announcer)._unsubscribe_(self);
_st(announcer)._announce_(_st($SystemAnnouncement())._new());
self._assert_equals_(counter,(2));
return self}, function($ctx1) {$ctx1.fill(self,"testOnDoFor",{counter:counter,announcer:announcer},globals.AnnouncerTest)})},
args: [],
source: "testOnDoFor\x0a\x09| counter announcer |\x0a\x09\x0a\x09counter := 0.\x0a\x09announcer := Announcer new.\x0a\x09announcer on: SystemAnnouncement do: [ counter := counter + 1 ] for: self.\x0a\x0a\x09announcer announce: (SystemAnnouncement new).\x0a\x09self assert: counter equals: 1.\x0a\x0a\x09announcer announce: (SystemAnnouncement new).\x0a\x09self assert: counter equals: 2.\x0a\x09\x0a\x09announcer unsubscribe: self.\x0a\x09\x0a\x09announcer announce: (SystemAnnouncement new).\x0a\x09self assert: counter equals: 2.",
messageSends: ["new", "on:do:for:", "+", "announce:", "assert:equals:", "unsubscribe:"],
referencedClasses: ["Announcer", "SystemAnnouncement"]
}),
globals.AnnouncerTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testOnDoOnce",
protocol: 'tests',
fn: function (){
var self=this;
var counter,announcer;
function $Announcer(){return globals.Announcer||(typeof Announcer=="undefined"?nil:Announcer)}
function $SystemAnnouncement(){return globals.SystemAnnouncement||(typeof SystemAnnouncement=="undefined"?nil:SystemAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
counter=(0);
announcer=_st($Announcer())._new();
$ctx1.sendIdx["new"]=1;
_st(announcer)._on_doOnce_($SystemAnnouncement(),(function(){
return smalltalk.withContext(function($ctx2) {
counter=_st(counter).__plus((1));
return counter;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$1=announcer;
$2=_st($SystemAnnouncement())._new();
$ctx1.sendIdx["new"]=2;
_st($1)._announce_($2);
$ctx1.sendIdx["announce:"]=1;
self._assert_equals_(counter,(1));
$ctx1.sendIdx["assert:equals:"]=1;
_st(announcer)._announce_(_st($SystemAnnouncement())._new());
self._assert_equals_(counter,(1));
return self}, function($ctx1) {$ctx1.fill(self,"testOnDoOnce",{counter:counter,announcer:announcer},globals.AnnouncerTest)})},
args: [],
source: "testOnDoOnce\x0a\x09| counter announcer |\x0a\x09\x0a\x09counter := 0.\x0a\x09announcer := Announcer new.\x0a\x09announcer on: SystemAnnouncement doOnce: [ counter := counter + 1 ].\x0a\x0a\x09announcer announce: (SystemAnnouncement new).\x0a\x09self assert: counter equals: 1.\x0a\x0a\x09announcer announce: (SystemAnnouncement new).\x0a\x09self assert: counter equals: 1.",
messageSends: ["new", "on:doOnce:", "+", "announce:", "assert:equals:"],
referencedClasses: ["Announcer", "SystemAnnouncement"]
}),
globals.AnnouncerTest);



smalltalk.addClass('BlockClosureTest', globals.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testCanClearInterval",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st($Error())._new())._signal();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}))._valueWithInterval_((0)))._clearInterval();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testCanClearInterval",{},globals.BlockClosureTest)})},
args: [],
source: "testCanClearInterval\x0a\x09self shouldnt: [ ([ Error new signal ] valueWithInterval: 0) clearInterval ] raise: Error",
messageSends: ["shouldnt:raise:", "clearInterval", "valueWithInterval:", "signal", "new"],
referencedClasses: ["Error"]
}),
globals.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCanClearTimeout",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st($Error())._new())._signal();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}))._valueWithTimeout_((0)))._clearTimeout();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testCanClearTimeout",{},globals.BlockClosureTest)})},
args: [],
source: "testCanClearTimeout\x0a\x09self shouldnt: [ ([ Error new signal ] valueWithTimeout: 0) clearTimeout ] raise: Error",
messageSends: ["shouldnt:raise:", "clearTimeout", "valueWithTimeout:", "signal", "new"],
referencedClasses: ["Error"]
}),
globals.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCompiledSource",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st((function(){
return smalltalk.withContext(function($ctx2) {
return (1).__plus((1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._compiledSource())._includesSubString_("function"));
return self}, function($ctx1) {$ctx1.fill(self,"testCompiledSource",{},globals.BlockClosureTest)})},
args: [],
source: "testCompiledSource\x0a\x09self assert: ([ 1+1 ] compiledSource includesSubString: 'function')",
messageSends: ["assert:", "includesSubString:", "compiledSource", "+"],
referencedClasses: []
}),
globals.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCurrySelf",
protocol: 'tests',
fn: function (){
var self=this;
var curriedMethod,array;
function $ClassBuilder(){return globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
curriedMethod=_st(_st((function(selfarg,x){
return smalltalk.withContext(function($ctx2) {
return _st(selfarg)._at_(x);
}, function($ctx2) {$ctx2.fillBlock({selfarg:selfarg,x:x},$ctx1,1)})}))._currySelf())._asCompiledMethod_("foo:");
array=[(3), (1), (4)];
_st(_st($ClassBuilder())._new())._installMethod_forClass_protocol_(curriedMethod,$Array(),"**test helper");
_st((function(){
return smalltalk.withContext(function($ctx2) {
return self._assert_equals_(_st(array)._foo_((2)),(1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
return _st($Array())._removeCompiledMethod_(curriedMethod);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testCurrySelf",{curriedMethod:curriedMethod,array:array},globals.BlockClosureTest)})},
args: [],
source: "testCurrySelf\x0a\x09| curriedMethod array |\x0a\x09curriedMethod := [ :selfarg :x | selfarg at: x ] currySelf asCompiledMethod: 'foo:'.\x0a\x09array := #(3 1 4).\x0a\x09ClassBuilder new installMethod: curriedMethod forClass: Array protocol: '**test helper'.\x0a\x09[ self assert: (array foo: 2) equals: 1 ]\x0a\x09ensure: [ Array removeCompiledMethod: curriedMethod ]",
messageSends: ["asCompiledMethod:", "currySelf", "at:", "installMethod:forClass:protocol:", "new", "ensure:", "assert:equals:", "foo:", "removeCompiledMethod:"],
referencedClasses: ["ClassBuilder", "Array"]
}),
globals.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testEnsure",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st((function(){
return (3);
}))._ensure_((function(){
return (4);
})),(3));
return self}, function($ctx1) {$ctx1.fill(self,"testEnsure",{},globals.BlockClosureTest)})},
args: [],
source: "testEnsure\x0a\x09self assert: ([ 3 ] ensure: [ 4 ]) equals: 3",
messageSends: ["assert:equals:", "ensure:"],
referencedClasses: []
}),
globals.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testEnsureRaises",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st($Error())._new())._signal();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}))._ensure_((function(){
return true;
}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testEnsureRaises",{},globals.BlockClosureTest)})},
args: [],
source: "testEnsureRaises\x0a\x09self should: [ [Error new signal ] ensure: [ true ]] raise: Error",
messageSends: ["should:raise:", "ensure:", "signal", "new"],
referencedClasses: ["Error"]
}),
globals.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testExceptionSemantics",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._timeout_((100));
_st(self._async_((function(){
return smalltalk.withContext(function($ctx2) {
return _st((function(){
return smalltalk.withContext(function($ctx3) {
self._assert_(true);
_st($Error())._signal();
self._deny_(true);
return self._finished();
$ctx3.sendIdx["finished"]=1;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}))._on_do_($Error(),(function(ex){
return smalltalk.withContext(function($ctx3) {
return self._finished();
}, function($ctx3) {$ctx3.fillBlock({ex:ex},$ctx2,3)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})})))._valueWithTimeout_((0));
return self}, function($ctx1) {$ctx1.fill(self,"testExceptionSemantics",{},globals.BlockClosureTest)})},
args: [],
source: "testExceptionSemantics\x0a\x09\x22See https://github.com/NicolasPetton/amber/issues/314\x22\x0a\x09self timeout: 100.\x0a\x09\x0a\x09(self async: [\x0a\x09\x09[\x0a\x09\x09\x09self assert: true.\x0a\x09\x09\x09Error signal.\x0a\x09\x09\x09\x22The following should *not* be run\x22\x0a\x09\x09\x09self deny: true.\x0a\x09\x09\x09self finished.\x0a\x09\x09] on: Error do: [ :ex | self finished ]\x0a\x09]) valueWithTimeout: 0",
messageSends: ["timeout:", "valueWithTimeout:", "async:", "on:do:", "assert:", "signal", "deny:", "finished"],
referencedClasses: ["Error"]
}),
globals.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNewWithValues",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

	function TestConstructor(arg1, arg2, arg3) {}
	TestConstructor.prototype.name = 'theTestPrototype';

	var wrappedConstructor = _st(TestConstructor);
	var result = wrappedConstructor._newWithValues_([1, 2, 3 ]);
	self._assert_(result instanceof TestConstructor);
	self._assert_equals_(result.name, 'theTestPrototype');

	"newWithValues: cannot help if the argument list is wrong, and should warn that a mistake was made."
	self._should_raise_(function () {wrappedConstructor._newWithValues_('single argument');}, globals.Error);;
return self}, function($ctx1) {$ctx1.fill(self,"testNewWithValues",{},globals.BlockClosureTest)})},
args: [],
source: "testNewWithValues\x0a<\x0a\x09function TestConstructor(arg1, arg2, arg3) {}\x0a\x09TestConstructor.prototype.name = 'theTestPrototype';\x0a\x0a\x09var wrappedConstructor = _st(TestConstructor);\x0a\x09var result = wrappedConstructor._newWithValues_([1, 2, 3 ]);\x0a\x09self._assert_(result instanceof TestConstructor);\x0a\x09self._assert_equals_(result.name, 'theTestPrototype');\x0a\x0a\x09\x22newWithValues: cannot help if the argument list is wrong, and should warn that a mistake was made.\x22\x0a\x09self._should_raise_(function () {wrappedConstructor._newWithValues_('single argument');}, globals.Error);\x0a>",
messageSends: [],
referencedClasses: []
}),
globals.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNumArgs",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((function(){
}))._numArgs();
$ctx1.sendIdx["numArgs"]=1;
self._assert_equals_($1,(0));
$ctx1.sendIdx["assert:equals:"]=1;
self._assert_equals_(_st((function(a,b){
}))._numArgs(),(2));
return self}, function($ctx1) {$ctx1.fill(self,"testNumArgs",{},globals.BlockClosureTest)})},
args: [],
source: "testNumArgs\x0a\x09self assert: [] numArgs equals: 0.\x0a\x09self assert: [ :a :b | ] numArgs equals: 2",
messageSends: ["assert:equals:", "numArgs"],
referencedClasses: []
}),
globals.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testOnDo",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st($Error())._new())._signal();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._on_do_($Error(),(function(ex){
return true;
})));
return self}, function($ctx1) {$ctx1.fill(self,"testOnDo",{},globals.BlockClosureTest)})},
args: [],
source: "testOnDo\x0a\x09self assert: ([ Error new signal ] on: Error do: [ :ex | true ])",
messageSends: ["assert:", "on:do:", "signal", "new"],
referencedClasses: ["Error"]
}),
globals.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testValue",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((function(){
return smalltalk.withContext(function($ctx2) {
return (1).__plus((1));
$ctx2.sendIdx["+"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._value();
$ctx1.sendIdx["value"]=1;
self._assert_equals_($1,(2));
$ctx1.sendIdx["assert:equals:"]=1;
self._assert_equals_(_st((function(x){
return smalltalk.withContext(function($ctx2) {
return _st(x).__plus((1));
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,2)})}))._value_((2)),(3));
$ctx1.sendIdx["assert:equals:"]=2;
self._assert_equals_(_st((function(x,y){
return smalltalk.withContext(function($ctx2) {
return _st(x).__star(y);
}, function($ctx2) {$ctx2.fillBlock({x:x,y:y},$ctx1,3)})}))._value_value_((2),(4)),(8));
$ctx1.sendIdx["assert:equals:"]=3;
self._assert_equals_(_st((function(a,b,c){
return (1);
}))._value(),(1));
return self}, function($ctx1) {$ctx1.fill(self,"testValue",{},globals.BlockClosureTest)})},
args: [],
source: "testValue\x0a\x09self assert: ([ 1+1 ] value) equals: 2.\x0a\x09self assert: ([ :x | x +1 ] value: 2) equals: 3.\x0a\x09self assert: ([ :x :y | x*y ] value: 2 value: 4) equals: 8.\x0a\x0a\x09\x22Arguments are optional in Amber. This isn't ANSI compliant.\x22\x0a\x0a\x09self assert: ([ :a :b :c | 1 ] value) equals: 1",
messageSends: ["assert:equals:", "value", "+", "value:", "value:value:", "*"],
referencedClasses: []
}),
globals.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testValueWithPossibleArguments",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st((function(){
return (1);
}))._valueWithPossibleArguments_([(3), (4)]);
$ctx1.sendIdx["valueWithPossibleArguments:"]=1;
self._assert_equals_($1,(1));
$ctx1.sendIdx["assert:equals:"]=1;
$2=_st((function(a){
return smalltalk.withContext(function($ctx2) {
return _st(a).__plus((4));
$ctx2.sendIdx["+"]=1;
}, function($ctx2) {$ctx2.fillBlock({a:a},$ctx1,2)})}))._valueWithPossibleArguments_([(3), (4)]);
$ctx1.sendIdx["valueWithPossibleArguments:"]=2;
self._assert_equals_($2,(7));
$ctx1.sendIdx["assert:equals:"]=2;
self._assert_equals_(_st((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(a).__plus(b);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,3)})}))._valueWithPossibleArguments_([(3), (4), (5)]),(7));
return self}, function($ctx1) {$ctx1.fill(self,"testValueWithPossibleArguments",{},globals.BlockClosureTest)})},
args: [],
source: "testValueWithPossibleArguments\x0a\x09self assert: ([ 1 ] valueWithPossibleArguments: #(3 4)) equals: 1.\x0a\x09self assert: ([ :a | a + 4 ] valueWithPossibleArguments: #(3 4)) equals: 7.\x0a\x09self assert: ([ :a :b | a + b ] valueWithPossibleArguments: #(3 4 5)) equals: 7.",
messageSends: ["assert:equals:", "valueWithPossibleArguments:", "+"],
referencedClasses: []
}),
globals.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testWhileFalse",
protocol: 'tests',
fn: function (){
var self=this;
var i;
return smalltalk.withContext(function($ctx1) { 
i=(0);
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(i).__gt((5));
$ctx2.sendIdx[">"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
i=_st(i).__plus((1));
$ctx2.sendIdx["+"]=1;
return i;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
self._assert_equals_(i,(6));
$ctx1.sendIdx["assert:equals:"]=1;
i=(0);
_st((function(){
return smalltalk.withContext(function($ctx2) {
i=_st(i).__plus((1));
i;
return _st(i).__gt((5));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}))._whileFalse();
self._assert_equals_(i,(6));
return self}, function($ctx1) {$ctx1.fill(self,"testWhileFalse",{i:i},globals.BlockClosureTest)})},
args: [],
source: "testWhileFalse\x0a\x09| i |\x0a\x09i := 0.\x0a\x09[ i > 5 ] whileFalse: [ i := i + 1 ].\x0a\x09self assert: i equals: 6.\x0a\x0a\x09i := 0.\x0a\x09[ i := i + 1. i > 5 ] whileFalse.\x0a\x09self assert: i equals: 6",
messageSends: ["whileFalse:", ">", "+", "assert:equals:", "whileFalse"],
referencedClasses: []
}),
globals.BlockClosureTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testWhileTrue",
protocol: 'tests',
fn: function (){
var self=this;
var i;
return smalltalk.withContext(function($ctx1) { 
i=(0);
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(i).__lt((5));
$ctx2.sendIdx["<"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
i=_st(i).__plus((1));
$ctx2.sendIdx["+"]=1;
return i;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
self._assert_equals_(i,(5));
$ctx1.sendIdx["assert:equals:"]=1;
i=(0);
_st((function(){
return smalltalk.withContext(function($ctx2) {
i=_st(i).__plus((1));
i;
return _st(i).__lt((5));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}))._whileTrue();
self._assert_equals_(i,(5));
return self}, function($ctx1) {$ctx1.fill(self,"testWhileTrue",{i:i},globals.BlockClosureTest)})},
args: [],
source: "testWhileTrue\x0a\x09| i |\x0a\x09i := 0.\x0a\x09[ i < 5 ] whileTrue: [ i := i + 1 ].\x0a\x09self assert: i equals: 5.\x0a\x0a\x09i := 0.\x0a\x09[ i := i + 1. i < 5 ] whileTrue.\x0a\x09self assert: i equals: 5",
messageSends: ["whileTrue:", "<", "+", "assert:equals:", "whileTrue"],
referencedClasses: []
}),
globals.BlockClosureTest);



smalltalk.addClass('BooleanTest', globals.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testEquality",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$10,$9,$12,$11;
$1=(0).__eq(false);
$ctx1.sendIdx["="]=1;
self._deny_($1);
$ctx1.sendIdx["deny:"]=1;
$2=false.__eq((0));
$ctx1.sendIdx["="]=2;
self._deny_($2);
$ctx1.sendIdx["deny:"]=2;
$3="".__eq(false);
$ctx1.sendIdx["="]=3;
self._deny_($3);
$ctx1.sendIdx["deny:"]=3;
$4=false.__eq("");
$ctx1.sendIdx["="]=4;
self._deny_($4);
$ctx1.sendIdx["deny:"]=4;
$5=true.__eq(true);
$ctx1.sendIdx["="]=5;
self._assert_($5);
$ctx1.sendIdx["assert:"]=1;
$6=false.__eq(true);
$ctx1.sendIdx["="]=6;
self._deny_($6);
$ctx1.sendIdx["deny:"]=5;
$7=true.__eq(false);
$ctx1.sendIdx["="]=7;
self._deny_($7);
$8=false.__eq(false);
$ctx1.sendIdx["="]=8;
self._assert_($8);
$ctx1.sendIdx["assert:"]=2;
$10=true._yourself();
$ctx1.sendIdx["yourself"]=1;
$9=_st($10).__eq(true);
$ctx1.sendIdx["="]=9;
self._assert_($9);
$ctx1.sendIdx["assert:"]=3;
$12=true._yourself();
$ctx1.sendIdx["yourself"]=2;
$11=_st($12).__eq(true._yourself());
self._assert_($11);
return self}, function($ctx1) {$ctx1.fill(self,"testEquality",{},globals.BooleanTest)})},
args: [],
source: "testEquality\x0a\x09\x22We're on top of JS...just be sure to check the basics!\x22\x0a\x0a\x09self deny: 0 = false.\x0a\x09self deny: false = 0.\x0a\x09self deny: '' = false.\x0a\x09self deny: false = ''.\x0a\x0a\x09self assert: (true = true).\x0a\x09self deny: false = true.\x0a\x09self deny: true = false.\x0a\x09self assert: (false = false).\x0a\x0a\x09\x22JS may do some type coercing after sending a message\x22\x0a\x09self assert: (true yourself = true).\x0a\x09self assert: (true yourself = true yourself)",
messageSends: ["deny:", "=", "assert:", "yourself"],
referencedClasses: []
}),
globals.BooleanTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIdentity",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$10,$9,$12,$11;
$1=(0).__eq_eq(false);
$ctx1.sendIdx["=="]=1;
self._deny_($1);
$ctx1.sendIdx["deny:"]=1;
$2=false.__eq_eq((0));
$ctx1.sendIdx["=="]=2;
self._deny_($2);
$ctx1.sendIdx["deny:"]=2;
$3="".__eq_eq(false);
$ctx1.sendIdx["=="]=3;
self._deny_($3);
$ctx1.sendIdx["deny:"]=3;
$4=false.__eq_eq("");
$ctx1.sendIdx["=="]=4;
self._deny_($4);
$ctx1.sendIdx["deny:"]=4;
$5=true.__eq_eq(true);
$ctx1.sendIdx["=="]=5;
self._assert_($5);
$ctx1.sendIdx["assert:"]=1;
$6=false.__eq_eq(true);
$ctx1.sendIdx["=="]=6;
self._deny_($6);
$ctx1.sendIdx["deny:"]=5;
$7=true.__eq_eq(false);
$ctx1.sendIdx["=="]=7;
self._deny_($7);
$8=false.__eq_eq(false);
$ctx1.sendIdx["=="]=8;
self._assert_($8);
$ctx1.sendIdx["assert:"]=2;
$10=true._yourself();
$ctx1.sendIdx["yourself"]=1;
$9=_st($10).__eq_eq(true);
$ctx1.sendIdx["=="]=9;
self._assert_($9);
$ctx1.sendIdx["assert:"]=3;
$12=true._yourself();
$ctx1.sendIdx["yourself"]=2;
$11=_st($12).__eq_eq(true._yourself());
self._assert_($11);
return self}, function($ctx1) {$ctx1.fill(self,"testIdentity",{},globals.BooleanTest)})},
args: [],
source: "testIdentity\x0a\x09\x22We're on top of JS...just be sure to check the basics!\x22\x0a\x0a\x09self deny: 0 == false.\x0a\x09self deny: false == 0.\x0a\x09self deny: '' == false.\x0a\x09self deny: false == ''.\x0a\x0a\x09self assert: true == true.\x0a\x09self deny: false == true.\x0a\x09self deny: true == false.\x0a\x09self assert: false == false.\x0a\x0a\x09\x22JS may do some type coercing after sending a message\x22\x0a\x09self assert: true yourself == true.\x0a\x09self assert: true yourself == true yourself",
messageSends: ["deny:", "==", "assert:", "yourself"],
referencedClasses: []
}),
globals.BooleanTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIfTrueIfFalse",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
if(smalltalk.assert(true)){
$1="alternative block";
};
self._assert_equals_($1,"alternative block");
$ctx1.sendIdx["assert:equals:"]=1;
if(! smalltalk.assert(true)){
$2="alternative block";
};
self._assert_equals_($2,nil);
$ctx1.sendIdx["assert:equals:"]=2;
if(smalltalk.assert(false)){
$3="alternative block";
};
self._assert_equals_($3,nil);
$ctx1.sendIdx["assert:equals:"]=3;
if(! smalltalk.assert(false)){
$4="alternative block";
};
self._assert_equals_($4,"alternative block");
$ctx1.sendIdx["assert:equals:"]=4;
if(smalltalk.assert(false)){
$5="alternative block";
} else {
$5="alternative block2";
};
self._assert_equals_($5,"alternative block2");
$ctx1.sendIdx["assert:equals:"]=5;
if(smalltalk.assert(false)){
$6="alternative block2";
} else {
$6="alternative block";
};
self._assert_equals_($6,"alternative block");
$ctx1.sendIdx["assert:equals:"]=6;
if(smalltalk.assert(true)){
$7="alternative block";
} else {
$7="alternative block2";
};
self._assert_equals_($7,"alternative block");
$ctx1.sendIdx["assert:equals:"]=7;
if(smalltalk.assert(true)){
$8="alternative block2";
} else {
$8="alternative block";
};
self._assert_equals_($8,"alternative block2");
return self}, function($ctx1) {$ctx1.fill(self,"testIfTrueIfFalse",{},globals.BooleanTest)})},
args: [],
source: "testIfTrueIfFalse\x0a\x0a\x09self assert: (true ifTrue: [ 'alternative block' ]) equals: 'alternative block'.\x0a\x09self assert: (true ifFalse: [ 'alternative block' ]) equals: nil.\x0a\x0a\x09self assert: (false ifTrue: [ 'alternative block' ]) equals: nil.\x0a\x09self assert: (false ifFalse: [ 'alternative block' ]) equals: 'alternative block'.\x0a\x0a\x09self assert: (false ifTrue: [ 'alternative block' ] ifFalse: [ 'alternative block2' ]) equals: 'alternative block2'.\x0a\x09self assert: (false ifFalse: [ 'alternative block' ] ifTrue: [ 'alternative block2' ]) equals: 'alternative block'.\x0a\x0a\x09self assert: (true ifTrue: [ 'alternative block' ] ifFalse: [ 'alternative block2' ]) equals: 'alternative block'.\x0a\x09self assert: (true ifFalse: [ 'alternative block' ] ifTrue: [ 'alternative block2' ]) equals: 'alternative block2'.",
messageSends: ["assert:equals:", "ifTrue:", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:"],
referencedClasses: []
}),
globals.BooleanTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIfTrueIfFalseWithBoxing",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$6,$5,$8,$7,$10,$9,$12,$11,$14,$13,$16,$15;
$2=true._yourself();
$ctx1.sendIdx["yourself"]=1;
if(smalltalk.assert($2)){
$1="alternative block";
};
self._assert_equals_($1,"alternative block");
$ctx1.sendIdx["assert:equals:"]=1;
$4=true._yourself();
$ctx1.sendIdx["yourself"]=2;
if(! smalltalk.assert($4)){
$3="alternative block";
};
self._assert_equals_($3,nil);
$ctx1.sendIdx["assert:equals:"]=2;
$6=false._yourself();
$ctx1.sendIdx["yourself"]=3;
if(smalltalk.assert($6)){
$5="alternative block";
};
self._assert_equals_($5,nil);
$ctx1.sendIdx["assert:equals:"]=3;
$8=false._yourself();
$ctx1.sendIdx["yourself"]=4;
if(! smalltalk.assert($8)){
$7="alternative block";
};
self._assert_equals_($7,"alternative block");
$ctx1.sendIdx["assert:equals:"]=4;
$10=false._yourself();
$ctx1.sendIdx["yourself"]=5;
if(smalltalk.assert($10)){
$9="alternative block";
} else {
$9="alternative block2";
};
self._assert_equals_($9,"alternative block2");
$ctx1.sendIdx["assert:equals:"]=5;
$12=false._yourself();
$ctx1.sendIdx["yourself"]=6;
if(smalltalk.assert($12)){
$11="alternative block2";
} else {
$11="alternative block";
};
self._assert_equals_($11,"alternative block");
$ctx1.sendIdx["assert:equals:"]=6;
$14=true._yourself();
$ctx1.sendIdx["yourself"]=7;
if(smalltalk.assert($14)){
$13="alternative block";
} else {
$13="alternative block2";
};
self._assert_equals_($13,"alternative block");
$ctx1.sendIdx["assert:equals:"]=7;
$16=true._yourself();
if(smalltalk.assert($16)){
$15="alternative block2";
} else {
$15="alternative block";
};
self._assert_equals_($15,"alternative block2");
return self}, function($ctx1) {$ctx1.fill(self,"testIfTrueIfFalseWithBoxing",{},globals.BooleanTest)})},
args: [],
source: "testIfTrueIfFalseWithBoxing\x0a\x0a\x09self assert: (true yourself ifTrue: [ 'alternative block' ]) equals: 'alternative block'.\x0a\x09self assert: (true yourself ifFalse: [ 'alternative block' ]) equals: nil.\x0a\x0a\x09self assert: (false yourself ifTrue: [ 'alternative block' ]) equals: nil.\x0a\x09self assert: (false yourself ifFalse: [ 'alternative block' ]) equals: 'alternative block'.\x0a\x0a\x09self assert: (false yourself ifTrue: [ 'alternative block' ] ifFalse: [ 'alternative block2' ]) equals: 'alternative block2'.\x0a\x09self assert: (false yourself ifFalse: [ 'alternative block' ] ifTrue: [ 'alternative block2' ]) equals: 'alternative block'.\x0a\x0a\x09self assert: (true yourself ifTrue: [ 'alternative block' ] ifFalse: [ 'alternative block2' ]) equals: 'alternative block'.\x0a\x09self assert: (true yourself ifFalse: [ 'alternative block' ] ifTrue: [ 'alternative block2' ]) equals: 'alternative block2'.",
messageSends: ["assert:equals:", "ifTrue:", "yourself", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:"],
referencedClasses: []
}),
globals.BooleanTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLogic",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$4,$6,$7,$8,$10,$9,$12,$11,$14,$13,$17,$18,$16,$15,$20,$19,$22,$21,$25,$24,$23;
$1=true.__and(true);
$ctx1.sendIdx["&"]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
$2=true.__and(false);
$ctx1.sendIdx["&"]=2;
self._deny_($2);
$ctx1.sendIdx["deny:"]=1;
$3=false.__and(true);
$ctx1.sendIdx["&"]=3;
self._deny_($3);
$ctx1.sendIdx["deny:"]=2;
$5=false.__and(false);
$ctx1.sendIdx["&"]=4;
$4=self._deny_($5);
$ctx1.sendIdx["deny:"]=3;
$6=true.__or(true);
$ctx1.sendIdx["|"]=1;
self._assert_($6);
$ctx1.sendIdx["assert:"]=2;
$7=true.__or(false);
$ctx1.sendIdx["|"]=2;
self._assert_($7);
$ctx1.sendIdx["assert:"]=3;
$8=false.__or(true);
$ctx1.sendIdx["|"]=3;
self._assert_($8);
$ctx1.sendIdx["assert:"]=4;
$10=false.__or(false);
$ctx1.sendIdx["|"]=4;
$9=self._deny_($10);
$ctx1.sendIdx["deny:"]=4;
$12=(1).__gt((0));
$ctx1.sendIdx[">"]=1;
$11=true.__and($12);
$ctx1.sendIdx["&"]=5;
self._assert_($11);
$ctx1.sendIdx["assert:"]=5;
$14=(1).__gt((0));
$ctx1.sendIdx[">"]=2;
$13=_st($14).__and(false);
$ctx1.sendIdx["&"]=6;
self._deny_($13);
$ctx1.sendIdx["deny:"]=5;
$17=(1).__gt((0));
$ctx1.sendIdx[">"]=3;
$18=(1).__gt((2));
$ctx1.sendIdx[">"]=4;
$16=_st($17).__and($18);
$15=self._deny_($16);
$20=(1).__gt((0));
$ctx1.sendIdx[">"]=5;
$19=false.__or($20);
$ctx1.sendIdx["|"]=5;
self._assert_($19);
$ctx1.sendIdx["assert:"]=6;
$22=(1).__gt((0));
$ctx1.sendIdx[">"]=6;
$21=_st($22).__or(false);
$ctx1.sendIdx["|"]=6;
self._assert_($21);
$ctx1.sendIdx["assert:"]=7;
$25=(1).__gt((0));
$ctx1.sendIdx[">"]=7;
$24=_st($25).__or((1).__gt((2)));
$23=self._assert_($24);
return self}, function($ctx1) {$ctx1.fill(self,"testLogic",{},globals.BooleanTest)})},
args: [],
source: "testLogic\x0a\x09\x22Trivial logic table\x22\x0a\x09self assert: (true & true);\x0a\x09\x09deny: (true & false);\x0a\x09\x09deny: (false & true);\x0a\x09\x09deny: (false & false).\x0a\x09self assert: (true | true);\x0a\x09\x09assert: (true | false);\x0a\x09\x09assert: (false | true);\x0a\x09\x09deny: (false | false).\x0a\x09\x22Checking that expressions work fine too\x22\x0a\x09self assert: (true & (1 > 0));\x0a\x09\x09deny: ((1 > 0) & false);\x0a\x09\x09deny: ((1 > 0) & (1 > 2)).\x0a\x09self assert: (false | (1 > 0));\x0a\x09\x09assert: ((1 > 0) | false);\x0a\x09\x09assert: ((1 > 0) | (1 > 2))",
messageSends: ["assert:", "&", "deny:", "|", ">"],
referencedClasses: []
}),
globals.BooleanTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLogicKeywords",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$4,$6,$7,$8,$10,$9,$11,$13,$12,$16,$15,$14,$17,$19,$18,$22,$21,$20;
$1=true._and_((function(){
return true;
}));
$ctx1.sendIdx["and:"]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
$2=true._and_((function(){
return false;
}));
$ctx1.sendIdx["and:"]=2;
self._deny_($2);
$ctx1.sendIdx["deny:"]=1;
$3=false._and_((function(){
return true;
}));
$ctx1.sendIdx["and:"]=3;
self._deny_($3);
$ctx1.sendIdx["deny:"]=2;
$5=false._and_((function(){
return false;
}));
$ctx1.sendIdx["and:"]=4;
$4=self._deny_($5);
$ctx1.sendIdx["deny:"]=3;
$6=true._or_((function(){
return true;
}));
$ctx1.sendIdx["or:"]=1;
self._assert_($6);
$ctx1.sendIdx["assert:"]=2;
$7=true._or_((function(){
return false;
}));
$ctx1.sendIdx["or:"]=2;
self._assert_($7);
$ctx1.sendIdx["assert:"]=3;
$8=false._or_((function(){
return true;
}));
$ctx1.sendIdx["or:"]=3;
self._assert_($8);
$ctx1.sendIdx["assert:"]=4;
$10=false._or_((function(){
return false;
}));
$ctx1.sendIdx["or:"]=4;
$9=self._deny_($10);
$ctx1.sendIdx["deny:"]=4;
$11=true._and_((function(){
return smalltalk.withContext(function($ctx2) {
return (1).__gt((0));
$ctx2.sendIdx[">"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,9)})}));
$ctx1.sendIdx["and:"]=5;
self._assert_($11);
$ctx1.sendIdx["assert:"]=5;
$13=(1).__gt((0));
$ctx1.sendIdx[">"]=2;
$12=_st($13)._and_((function(){
return false;
}));
$ctx1.sendIdx["and:"]=6;
self._deny_($12);
$ctx1.sendIdx["deny:"]=5;
$16=(1).__gt((0));
$ctx1.sendIdx[">"]=3;
$15=_st($16)._and_((function(){
return smalltalk.withContext(function($ctx2) {
return (1).__gt((2));
$ctx2.sendIdx[">"]=4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,11)})}));
$14=self._deny_($15);
$17=false._or_((function(){
return smalltalk.withContext(function($ctx2) {
return (1).__gt((0));
$ctx2.sendIdx[">"]=5;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,12)})}));
$ctx1.sendIdx["or:"]=5;
self._assert_($17);
$ctx1.sendIdx["assert:"]=6;
$19=(1).__gt((0));
$ctx1.sendIdx[">"]=6;
$18=_st($19)._or_((function(){
return false;
}));
$ctx1.sendIdx["or:"]=6;
self._assert_($18);
$ctx1.sendIdx["assert:"]=7;
$22=(1).__gt((0));
$ctx1.sendIdx[">"]=7;
$21=_st($22)._or_((function(){
return smalltalk.withContext(function($ctx2) {
return (1).__gt((2));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,14)})}));
$20=self._assert_($21);
return self}, function($ctx1) {$ctx1.fill(self,"testLogicKeywords",{},globals.BooleanTest)})},
args: [],
source: "testLogicKeywords\x0a\x09\x22Trivial logic table\x22\x0a\x09self\x0a\x09\x09assert: (true and: [ true ]);\x0a\x09\x09deny: (true and: [ false ]);\x0a\x09\x09deny: (false and: [ true ]);\x0a\x09\x09deny: (false and: [ false ]).\x0a\x09self\x0a\x09\x09assert: (true or: [ true ]);\x0a\x09\x09assert: (true or: [ false ]);\x0a\x09\x09assert: (false or: [ true ]);\x0a\x09\x09deny: (false or: [ false ]).\x0a\x09\x09\x0a\x09\x22Checking that expressions work fine too\x22\x0a\x09self\x0a\x09\x09assert: (true and: [ 1 > 0 ]);\x0a\x09\x09deny: ((1 > 0) and: [ false ]);\x0a\x09\x09deny: ((1 > 0) and: [ 1 > 2 ]).\x0a\x09self\x0a\x09\x09assert: (false or: [ 1 > 0 ]);\x0a\x09\x09assert: ((1 > 0) or: [ false ]);\x0a\x09\x09assert: ((1 > 0) or: [ 1 > 2 ])",
messageSends: ["assert:", "and:", "deny:", "or:", ">"],
referencedClasses: []
}),
globals.BooleanTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNonBooleanError",
protocol: 'tests',
fn: function (){
var self=this;
function $NonBooleanReceiver(){return globals.NonBooleanReceiver||(typeof NonBooleanReceiver=="undefined"?nil:NonBooleanReceiver)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
if(smalltalk.assert("")){
} else {
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$NonBooleanReceiver());
return self}, function($ctx1) {$ctx1.fill(self,"testNonBooleanError",{},globals.BooleanTest)})},
args: [],
source: "testNonBooleanError\x0a\x09self should: [ '' ifTrue: [] ifFalse: [] ] raise: NonBooleanReceiver",
messageSends: ["should:raise:", "ifTrue:ifFalse:"],
referencedClasses: ["NonBooleanReceiver"]
}),
globals.BooleanTest);



smalltalk.addClass('ClassBuilderTest', globals.TestCase, ['builder', 'theClass'], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
protocol: 'running',
fn: function (){
var self=this;
function $ClassBuilder(){return globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
self["@builder"]=_st($ClassBuilder())._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},globals.ClassBuilderTest)})},
args: [],
source: "setUp\x0a\x09builder := ClassBuilder new",
messageSends: ["new"],
referencedClasses: ["ClassBuilder"]
}),
globals.ClassBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "tearDown",
protocol: 'running',
fn: function (){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
$1=self["@theClass"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
_st($Smalltalk())._removeClass_(self["@theClass"]);
self["@theClass"]=nil;
self["@theClass"];
};
return self}, function($ctx1) {$ctx1.fill(self,"tearDown",{},globals.ClassBuilderTest)})},
args: [],
source: "tearDown\x0a\x09theClass ifNotNil: [ Smalltalk removeClass: theClass. theClass := nil ]",
messageSends: ["ifNotNil:", "removeClass:"],
referencedClasses: ["Smalltalk"]
}),
globals.ClassBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testClassCopy",
protocol: 'tests',
fn: function (){
var self=this;
function $ObjectMock(){return globals.ObjectMock||(typeof ObjectMock=="undefined"?nil:ObjectMock)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$6,$5,$8,$7;
self["@theClass"]=_st(self["@builder"])._copyClass_named_($ObjectMock(),"ObjectMock2");
$2=_st(self["@theClass"])._superclass();
$ctx1.sendIdx["superclass"]=1;
$1=_st($2).__eq_eq(_st($ObjectMock())._superclass());
$ctx1.sendIdx["=="]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
$4=_st(self["@theClass"])._instanceVariableNames();
$ctx1.sendIdx["instanceVariableNames"]=1;
$3=_st($4).__eq_eq(_st($ObjectMock())._instanceVariableNames());
$ctx1.sendIdx["=="]=2;
self._assert_($3);
$ctx1.sendIdx["assert:"]=2;
self._assert_equals_(_st(self["@theClass"])._name(),"ObjectMock2");
$ctx1.sendIdx["assert:equals:"]=1;
$6=_st(self["@theClass"])._package();
$ctx1.sendIdx["package"]=1;
$5=_st($6).__eq_eq(_st($ObjectMock())._package());
self._assert_($5);
$8=_st(self["@theClass"])._methodDictionary();
$ctx1.sendIdx["methodDictionary"]=1;
$7=_st($8)._keys();
$ctx1.sendIdx["keys"]=1;
self._assert_equals_($7,_st(_st($ObjectMock())._methodDictionary())._keys());
return self}, function($ctx1) {$ctx1.fill(self,"testClassCopy",{},globals.ClassBuilderTest)})},
args: [],
source: "testClassCopy\x0a\x09theClass := builder copyClass: ObjectMock named: 'ObjectMock2'.\x0a\x09self assert: theClass superclass == ObjectMock superclass.\x0a\x09self assert: theClass instanceVariableNames == ObjectMock instanceVariableNames.\x0a\x09self assert: theClass name equals: 'ObjectMock2'.\x0a\x09self assert: theClass package == ObjectMock package.\x0a\x09self assert: theClass methodDictionary keys equals: ObjectMock methodDictionary keys",
messageSends: ["copyClass:named:", "assert:", "==", "superclass", "instanceVariableNames", "assert:equals:", "name", "package", "keys", "methodDictionary"],
referencedClasses: ["ObjectMock"]
}),
globals.ClassBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testClassMigration",
protocol: 'tests',
fn: function (){
var self=this;
var instance,oldClass;
function $ObjectMock(){return globals.ObjectMock||(typeof ObjectMock=="undefined"?nil:ObjectMock)}
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $ObjectMock2(){return globals.ObjectMock2||(typeof ObjectMock2=="undefined"?nil:ObjectMock2)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$5,$6,$7,$8,$9,$11,$10;
oldClass=_st(self["@builder"])._copyClass_named_($ObjectMock(),"ObjectMock2");
$2=_st($Smalltalk())._globals();
$ctx1.sendIdx["globals"]=1;
$1=_st($2)._at_("ObjectMock2");
$ctx1.sendIdx["at:"]=1;
instance=_st($1)._new();
$4=_st($Smalltalk())._globals();
$ctx1.sendIdx["globals"]=2;
$3=_st($4)._at_("ObjectMock2");
$ctx1.sendIdx["at:"]=2;
_st($ObjectMock())._subclass_instanceVariableNames_package_($3,"","Kernel-Tests");
$5=_st(oldClass).__eq_eq($ObjectMock2());
$ctx1.sendIdx["=="]=1;
self._deny_($5);
$ctx1.sendIdx["deny:"]=1;
$6=_st(_st($ObjectMock2())._superclass()).__eq_eq($ObjectMock());
$ctx1.sendIdx["=="]=2;
self._assert_($6);
$ctx1.sendIdx["assert:"]=1;
self._assert_(_st(_st($ObjectMock2())._instanceVariableNames())._isEmpty());
$ctx1.sendIdx["assert:"]=2;
$7=_st($ObjectMock2())._selectors();
$ctx1.sendIdx["selectors"]=1;
self._assert_equals_($7,_st(oldClass)._selectors());
$ctx1.sendIdx["assert:equals:"]=1;
$8=_st($ObjectMock2())._comment();
$ctx1.sendIdx["comment"]=1;
self._assert_equals_($8,_st(oldClass)._comment());
$ctx1.sendIdx["assert:equals:"]=2;
$9=_st(_st($ObjectMock2())._package())._name();
$ctx1.sendIdx["name"]=1;
self._assert_equals_($9,"Kernel-Tests");
$11=_st(instance)._class();
$ctx1.sendIdx["class"]=1;
$10=_st($11).__eq_eq($ObjectMock2());
self._deny_($10);
self._assert_(_st(_st(_st($Smalltalk())._globals())._at_(_st(_st(instance)._class())._name()))._isNil());
_st($Smalltalk())._removeClass_($ObjectMock2());
return self}, function($ctx1) {$ctx1.fill(self,"testClassMigration",{instance:instance,oldClass:oldClass},globals.ClassBuilderTest)})},
args: [],
source: "testClassMigration\x0a\x09| instance oldClass |\x0a\x09\x0a\x09oldClass := builder copyClass: ObjectMock named: 'ObjectMock2'.\x0a\x09instance := (Smalltalk globals at: 'ObjectMock2') new.\x0a\x09\x0a\x09\x22Change the superclass of ObjectMock2\x22\x0a\x09ObjectMock subclass: (Smalltalk globals at: 'ObjectMock2')\x0a\x09\x09instanceVariableNames: ''\x0a\x09\x09package: 'Kernel-Tests'.\x0a\x09\x0a\x09self deny: oldClass == ObjectMock2.\x0a\x09\x0a\x09self assert: ObjectMock2 superclass == ObjectMock.\x0a\x09self assert: ObjectMock2 instanceVariableNames isEmpty.\x0a\x09self assert: ObjectMock2 selectors equals: oldClass selectors.\x0a\x09self assert: ObjectMock2 comment equals: oldClass comment.\x0a\x09self assert: ObjectMock2 package name equals: 'Kernel-Tests'.\x0a\x09\x0a\x09self deny: instance class == ObjectMock2.\x0a\x09\x22Commeting this out. Tests implementation detail.\x22\x0a\x09\x22self assert: instance class name equals: 'OldObjectMock2'.\x22\x0a\x09\x0a\x09self assert: (Smalltalk globals at: instance class name) isNil.\x0a\x09\x0a\x09Smalltalk removeClass: ObjectMock2",
messageSends: ["copyClass:named:", "new", "at:", "globals", "subclass:instanceVariableNames:package:", "deny:", "==", "assert:", "superclass", "isEmpty", "instanceVariableNames", "assert:equals:", "selectors", "comment", "name", "package", "class", "isNil", "removeClass:"],
referencedClasses: ["ObjectMock", "Smalltalk", "ObjectMock2"]
}),
globals.ClassBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testClassMigrationWithClassInstanceVariables",
protocol: 'tests',
fn: function (){
var self=this;
function $ObjectMock(){return globals.ObjectMock||(typeof ObjectMock=="undefined"?nil:ObjectMock)}
function $ObjectMock2(){return globals.ObjectMock2||(typeof ObjectMock2=="undefined"?nil:ObjectMock2)}
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@builder"])._copyClass_named_($ObjectMock(),"ObjectMock2");
$1=_st($ObjectMock2())._class();
$ctx1.sendIdx["class"]=1;
_st($1)._instanceVariableNames_("foo bar");
_st($ObjectMock())._subclass_instanceVariableNames_package_(_st(_st($Smalltalk())._globals())._at_("ObjectMock2"),"","Kernel-Tests");
self._assert_equals_(_st(_st($ObjectMock2())._class())._instanceVariableNames(),["foo", "bar"]);
_st($Smalltalk())._removeClass_($ObjectMock2());
return self}, function($ctx1) {$ctx1.fill(self,"testClassMigrationWithClassInstanceVariables",{},globals.ClassBuilderTest)})},
args: [],
source: "testClassMigrationWithClassInstanceVariables\x0a\x09\x0a\x09builder copyClass: ObjectMock named: 'ObjectMock2'.\x0a\x09ObjectMock2 class instanceVariableNames: 'foo bar'.\x0a\x09\x0a\x09\x22Change the superclass of ObjectMock2\x22\x0a\x09ObjectMock subclass: (Smalltalk globals at: 'ObjectMock2')\x0a\x09\x09instanceVariableNames: ''\x0a\x09\x09package: 'Kernel-Tests'.\x0a\x09\x0a\x09self assert: ObjectMock2 class instanceVariableNames equals: #('foo' 'bar').\x0a\x09\x0a\x09Smalltalk removeClass: ObjectMock2",
messageSends: ["copyClass:named:", "instanceVariableNames:", "class", "subclass:instanceVariableNames:package:", "at:", "globals", "assert:equals:", "instanceVariableNames", "removeClass:"],
referencedClasses: ["ObjectMock", "ObjectMock2", "Smalltalk"]
}),
globals.ClassBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testClassMigrationWithSubclasses",
protocol: 'tests',
fn: function (){
var self=this;
function $ObjectMock(){return globals.ObjectMock||(typeof ObjectMock=="undefined"?nil:ObjectMock)}
function $ObjectMock2(){return globals.ObjectMock2||(typeof ObjectMock2=="undefined"?nil:ObjectMock2)}
function $ObjectMock3(){return globals.ObjectMock3||(typeof ObjectMock3=="undefined"?nil:ObjectMock3)}
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $ObjectMock4(){return globals.ObjectMock4||(typeof ObjectMock4=="undefined"?nil:ObjectMock4)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3;
_st(self["@builder"])._copyClass_named_($ObjectMock(),"ObjectMock2");
_st($ObjectMock2())._subclass_instanceVariableNames_package_("ObjectMock3","","Kernel-Tests");
$ctx1.sendIdx["subclass:instanceVariableNames:package:"]=1;
_st($ObjectMock3())._subclass_instanceVariableNames_package_("ObjectMock4","","Kernel-Tests");
$ctx1.sendIdx["subclass:instanceVariableNames:package:"]=2;
_st($ObjectMock())._subclass_instanceVariableNames_package_(_st(_st($Smalltalk())._globals())._at_("ObjectMock2"),"","Kernel-Tests");
$2=_st($ObjectMock())._subclasses();
$ctx1.sendIdx["subclasses"]=1;
$1=_st($2)._includes_($ObjectMock2());
$ctx1.sendIdx["includes:"]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
$4=_st($ObjectMock2())._subclasses();
$ctx1.sendIdx["subclasses"]=2;
$3=_st($4)._includes_($ObjectMock3());
$ctx1.sendIdx["includes:"]=2;
self._assert_($3);
$ctx1.sendIdx["assert:"]=2;
self._assert_(_st(_st($ObjectMock3())._subclasses())._includes_($ObjectMock4()));
_st(_st($ObjectMock())._allSubclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st($Smalltalk())._removeClass_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testClassMigrationWithSubclasses",{},globals.ClassBuilderTest)})},
args: [],
source: "testClassMigrationWithSubclasses\x0a\x09\x0a\x09builder copyClass: ObjectMock named: 'ObjectMock2'.\x0a\x09ObjectMock2 subclass: 'ObjectMock3' instanceVariableNames: '' package: 'Kernel-Tests'.\x0a\x09ObjectMock3 subclass: 'ObjectMock4' instanceVariableNames: '' package: 'Kernel-Tests'.\x0a\x09\x0a\x09\x22Change the superclass of ObjectMock2\x22\x0a\x09ObjectMock subclass: (Smalltalk globals at: 'ObjectMock2')\x0a\x09\x09instanceVariableNames: ''\x0a\x09\x09package: 'Kernel-Tests'.\x0a\x09\x0a\x09self assert: (ObjectMock subclasses includes: ObjectMock2).\x0a\x09self assert: (ObjectMock2 subclasses includes: ObjectMock3).\x0a\x09self assert: (ObjectMock3 subclasses includes: ObjectMock4).\x0a\x09\x0a\x09ObjectMock allSubclasses do: [ :each | Smalltalk removeClass: each ]",
messageSends: ["copyClass:named:", "subclass:instanceVariableNames:package:", "at:", "globals", "assert:", "includes:", "subclasses", "do:", "allSubclasses", "removeClass:"],
referencedClasses: ["ObjectMock", "ObjectMock2", "ObjectMock3", "Smalltalk", "ObjectMock4"]
}),
globals.ClassBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInstanceVariableNames",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self["@builder"])._instanceVariableNamesFor_("  hello   world   "),["hello", "world"]);
return self}, function($ctx1) {$ctx1.fill(self,"testInstanceVariableNames",{},globals.ClassBuilderTest)})},
args: [],
source: "testInstanceVariableNames\x0a\x09self assert: (builder instanceVariableNamesFor: '  hello   world   ') equals: #('hello' 'world')",
messageSends: ["assert:equals:", "instanceVariableNamesFor:"],
referencedClasses: []
}),
globals.ClassBuilderTest);



smalltalk.addClass('CollectionTest', globals.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "assertSameContents:as:",
protocol: 'convenience',
fn: function (aCollection,anotherCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3;
$2=_st(aCollection)._size();
$ctx1.sendIdx["size"]=1;
$1=_st($2).__eq(_st(anotherCollection)._size());
$ctx1.sendIdx["="]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$4=_st(aCollection)._occurrencesOf_(each);
$ctx2.sendIdx["occurrencesOf:"]=1;
$3=_st($4).__eq(_st(anotherCollection)._occurrencesOf_(each));
return self._assert_($3);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"assertSameContents:as:",{aCollection:aCollection,anotherCollection:anotherCollection},globals.CollectionTest)})},
args: ["aCollection", "anotherCollection"],
source: "assertSameContents: aCollection as: anotherCollection\x0a\x09self assert: (aCollection size = anotherCollection size).\x0a\x09aCollection do: [ :each |\x0a\x09\x09self assert: ((aCollection occurrencesOf: each) = (anotherCollection occurrencesOf: each)) ]",
messageSends: ["assert:", "=", "size", "do:", "occurrencesOf:"],
referencedClasses: []
}),
globals.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collection",
protocol: 'fixture',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"collection",{},globals.CollectionTest)})},
args: [],
source: "collection\x0a\x09\x22Answers pre-filled collection of type tested.\x22\x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionClass",
protocol: 'fixture',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._collectionClass();
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{},globals.CollectionTest)})},
args: [],
source: "collectionClass\x0a\x09\x22Answers class of collection type tested\x22\x0a\x0a\x09^ self class collectionClass",
messageSends: ["collectionClass", "class"],
referencedClasses: []
}),
globals.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionOfPrintStrings",
protocol: 'fixture',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"collectionOfPrintStrings",{},globals.CollectionTest)})},
args: [],
source: "collectionOfPrintStrings\x0a\x09\x22Answers self collection but with values\x0a\x09changed to their printStrings\x22\x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionSize",
protocol: 'fixture',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"collectionSize",{},globals.CollectionTest)})},
args: [],
source: "collectionSize\x0a\x09\x22Answers size of self collection.\x22\x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionWithDuplicates",
protocol: 'fixture',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"collectionWithDuplicates",{},globals.CollectionTest)})},
args: [],
source: "collectionWithDuplicates\x0a\x09\x22Answers pre-filled collection of type tested,\x0a\x09with exactly five distinct elements,\x0a\x09some of them appearing multiple times, if possible.\x22\x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionWithNewValue",
protocol: 'fixture',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"collectionWithNewValue",{},globals.CollectionTest)})},
args: [],
source: "collectionWithNewValue\x0a\x09\x22Answers a collection which shows how\x0a\x09self collection would look after adding\x0a\x09self sampleNewValue\x22\x0a\x09\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "isCollectionReadOnly",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isCollectionReadOnly\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "sampleNewValue",
protocol: 'fixture',
fn: function (){
var self=this;
return "N";
},
args: [],
source: "sampleNewValue\x0a\x09\x22Answers a value that is not yet there\x0a\x09and can be put into a tested collection\x22\x0a\x09\x0a\x09^ 'N'",
messageSends: [],
referencedClasses: []
}),
globals.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "sampleNewValueAsCollection",
protocol: 'fixture',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._collectionClass())._with_(self._sampleNewValue());
return $1;
}, function($ctx1) {$ctx1.fill(self,"sampleNewValueAsCollection",{},globals.CollectionTest)})},
args: [],
source: "sampleNewValueAsCollection\x0a\x09\x22Answers self sampleNewValue\x0a\x09wrapped in single element collection\x0a\x09of tested type\x22\x0a\x09\x0a\x09^ self collectionClass with: self sampleNewValue",
messageSends: ["with:", "collectionClass", "sampleNewValue"],
referencedClasses: []
}),
globals.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAddAll",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$5,$4,$6,$1,$7,$10,$9,$11,$12,$13,$8,$14,$17,$16,$18,$20,$19,$21,$15,$23,$24,$25,$26,$22,$27,$28,$29;
$2=self._collection();
$ctx1.sendIdx["collection"]=1;
$3=$2;
$5=self._collectionClass();
$ctx1.sendIdx["collectionClass"]=1;
$4=_st($5)._new();
$ctx1.sendIdx["new"]=1;
_st($3)._addAll_($4);
$ctx1.sendIdx["addAll:"]=1;
$6=_st($2)._yourself();
$ctx1.sendIdx["yourself"]=1;
$1=$6;
$7=self._collection();
$ctx1.sendIdx["collection"]=2;
self._assert_equals_($1,$7);
$ctx1.sendIdx["assert:equals:"]=1;
$10=self._collectionClass();
$ctx1.sendIdx["collectionClass"]=2;
$9=_st($10)._new();
$ctx1.sendIdx["new"]=2;
$11=$9;
$12=self._collection();
$ctx1.sendIdx["collection"]=3;
_st($11)._addAll_($12);
$ctx1.sendIdx["addAll:"]=2;
$13=_st($9)._yourself();
$ctx1.sendIdx["yourself"]=2;
$8=$13;
$14=self._collection();
$ctx1.sendIdx["collection"]=4;
self._assert_equals_($8,$14);
$ctx1.sendIdx["assert:equals:"]=2;
$17=self._collectionClass();
$ctx1.sendIdx["collectionClass"]=3;
$16=_st($17)._new();
$ctx1.sendIdx["new"]=3;
$18=$16;
$20=self._collectionClass();
$ctx1.sendIdx["collectionClass"]=4;
$19=_st($20)._new();
$ctx1.sendIdx["new"]=4;
_st($18)._addAll_($19);
$ctx1.sendIdx["addAll:"]=3;
$21=_st($16)._yourself();
$ctx1.sendIdx["yourself"]=3;
$15=$21;
self._assert_equals_($15,_st(self._collectionClass())._new());
$ctx1.sendIdx["assert:equals:"]=3;
$23=self._collection();
$ctx1.sendIdx["collection"]=5;
$24=$23;
$25=self._sampleNewValueAsCollection();
$ctx1.sendIdx["sampleNewValueAsCollection"]=1;
_st($24)._addAll_($25);
$ctx1.sendIdx["addAll:"]=4;
$26=_st($23)._yourself();
$ctx1.sendIdx["yourself"]=4;
$22=$26;
$27=self._collectionWithNewValue();
$ctx1.sendIdx["collectionWithNewValue"]=1;
self._assert_equals_($22,$27);
$28=self._sampleNewValueAsCollection();
_st($28)._addAll_(self._collection());
$29=_st($28)._yourself();
self._assertSameContents_as_($29,self._collectionWithNewValue());
return self}, function($ctx1) {$ctx1.fill(self,"testAddAll",{},globals.CollectionTest)})},
args: [],
source: "testAddAll\x0a\x09self assert: (self collection addAll: self collectionClass new; yourself) equals: self collection.\x0a\x09self assert: (self collectionClass new addAll: self collection; yourself) equals: self collection.\x0a\x09self assert: (self collectionClass new addAll: self collectionClass new; yourself) equals: self collectionClass new.\x0a\x09self assert: (self collection addAll: self sampleNewValueAsCollection; yourself) equals: self collectionWithNewValue.\x0a\x09self assertSameContents: (self sampleNewValueAsCollection addAll: self collection; yourself) as: self collectionWithNewValue",
messageSends: ["assert:equals:", "addAll:", "collection", "new", "collectionClass", "yourself", "sampleNewValueAsCollection", "collectionWithNewValue", "assertSameContents:as:"],
referencedClasses: []
}),
globals.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAllSatisfy",
protocol: 'tests',
fn: function (){
var self=this;
var collection,anyOne;
return smalltalk.withContext(function($ctx1) { 
var $1;
collection=self._collection();
anyOne=_st(collection)._anyOne();
$1=_st(collection)._allSatisfy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(collection)._includes_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$ctx1.sendIdx["allSatisfy:"]=1;
self._assert_($1);
self._deny_(_st(collection)._allSatisfy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__tild_eq(anyOne);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})})));
return self}, function($ctx1) {$ctx1.fill(self,"testAllSatisfy",{collection:collection,anyOne:anyOne},globals.CollectionTest)})},
args: [],
source: "testAllSatisfy\x0a\x09| collection anyOne |\x0a\x09collection := self collection.\x0a\x09anyOne := collection anyOne.\x0a\x09self assert: (collection allSatisfy: [ :each | collection includes: each ]).\x0a\x09self deny: (collection allSatisfy: [ :each | each ~= anyOne ])",
messageSends: ["collection", "anyOne", "assert:", "allSatisfy:", "includes:", "deny:", "~="],
referencedClasses: []
}),
globals.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAnyOne",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self._collectionClass())._new())._anyOne();
$ctx2.sendIdx["anyOne"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$Error());
$2=self._collection();
$ctx1.sendIdx["collection"]=1;
$1=_st($2)._includes_(_st(self._collection())._anyOne());
self._assert_($1);
return self}, function($ctx1) {$ctx1.fill(self,"testAnyOne",{},globals.CollectionTest)})},
args: [],
source: "testAnyOne\x0a\x09self should: [ self collectionClass new anyOne ] raise: Error.\x0a\x09self assert: (self collection includes: self collection anyOne)",
messageSends: ["should:raise:", "anyOne", "new", "collectionClass", "assert:", "includes:", "collection"],
referencedClasses: ["Error"]
}),
globals.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAnySatisfy",
protocol: 'tests',
fn: function (){
var self=this;
var anyOne;
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
$1=self._collection();
$ctx1.sendIdx["collection"]=1;
anyOne=_st($1)._anyOne();
$3=self._collection();
$ctx1.sendIdx["collection"]=2;
$2=_st($3)._anySatisfy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq(anyOne);
$ctx2.sendIdx["="]=1;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$ctx1.sendIdx["anySatisfy:"]=1;
self._assert_($2);
self._deny_(_st(self._collection())._anySatisfy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq(_st($Object())._new());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})})));
return self}, function($ctx1) {$ctx1.fill(self,"testAnySatisfy",{anyOne:anyOne},globals.CollectionTest)})},
args: [],
source: "testAnySatisfy\x0a\x09| anyOne |\x0a\x09anyOne := self collection anyOne.\x0a\x09self assert: (self collection anySatisfy: [ :each | each = anyOne ]).\x0a\x09self deny: (self collection anySatisfy: [ :each | each = Object new ])",
messageSends: ["anyOne", "collection", "assert:", "anySatisfy:", "=", "deny:", "new"],
referencedClasses: ["Object"]
}),
globals.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAsArray",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._collection();
$ctx1.sendIdx["collection"]=1;
self._assertSameContents_as_($1,_st(self._collection())._asArray());
return self}, function($ctx1) {$ctx1.fill(self,"testAsArray",{},globals.CollectionTest)})},
args: [],
source: "testAsArray\x0a\x09self\x0a\x09\x09assertSameContents: self collection\x0a\x09\x09as: self collection asArray",
messageSends: ["assertSameContents:as:", "collection", "asArray"],
referencedClasses: []
}),
globals.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAsOrderedCollection",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._collection();
$ctx1.sendIdx["collection"]=1;
self._assertSameContents_as_($1,_st(self._collection())._asOrderedCollection());
return self}, function($ctx1) {$ctx1.fill(self,"testAsOrderedCollection",{},globals.CollectionTest)})},
args: [],
source: "testAsOrderedCollection\x0a\x09self\x0a\x09\x09assertSameContents: self collection\x0a\x09\x09as: self collection asOrderedCollection",
messageSends: ["assertSameContents:as:", "collection", "asOrderedCollection"],
referencedClasses: []
}),
globals.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAsSet",
protocol: 'tests',
fn: function (){
var self=this;
var c,set;
return smalltalk.withContext(function($ctx1) { 
c=self._collectionWithDuplicates();
set=_st(c)._asSet();
self._assert_equals_(_st(set)._size(),(5));
_st(c)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._assert_(_st(set)._includes_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testAsSet",{c:c,set:set},globals.CollectionTest)})},
args: [],
source: "testAsSet\x0a\x09| c set |\x0a\x09c := self collectionWithDuplicates.\x0a\x09set := c asSet.\x0a\x09self assert: set size equals: 5.\x0a\x09c do: [ :each |\x0a\x09\x09self assert: (set includes: each) ]",
messageSends: ["collectionWithDuplicates", "asSet", "assert:equals:", "size", "do:", "assert:", "includes:"],
referencedClasses: []
}),
globals.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCollect",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$5,$4,$8,$7,$6,$11,$10,$9;
$2=self._collection();
$ctx1.sendIdx["collection"]=1;
$1=_st($2)._collect_((function(each){
return each;
}));
$ctx1.sendIdx["collect:"]=1;
$3=self._collection();
$ctx1.sendIdx["collection"]=2;
self._assert_equals_($1,$3);
$ctx1.sendIdx["assert:equals:"]=1;
$5=self._collectionWithNewValue();
$ctx1.sendIdx["collectionWithNewValue"]=1;
$4=_st($5)._collect_((function(each){
return each;
}));
$ctx1.sendIdx["collect:"]=2;
self._assert_equals_($4,self._collectionWithNewValue());
$ctx1.sendIdx["assert:equals:"]=2;
$8=self._collectionClass();
$ctx1.sendIdx["collectionClass"]=1;
$7=_st($8)._new();
$ctx1.sendIdx["new"]=1;
$6=_st($7)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._printString();
$ctx2.sendIdx["printString"]=1;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)})}));
$ctx1.sendIdx["collect:"]=3;
self._assert_equals_($6,_st(self._collectionClass())._new());
$ctx1.sendIdx["assert:equals:"]=3;
$11=self._collection();
$ctx1.sendIdx["collection"]=3;
$10=_st($11)._collect_((function(){
return smalltalk.withContext(function($ctx2) {
return self._sampleNewValue();
$ctx2.sendIdx["sampleNewValue"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}));
$ctx1.sendIdx["collect:"]=4;
$9=_st($10)._detect_((function(){
return true;
}));
self._assert_equals_($9,self._sampleNewValue());
$ctx1.sendIdx["assert:equals:"]=4;
self._assert_equals_(_st(self._collection())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._printString();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,6)})})),self._collectionOfPrintStrings());
return self}, function($ctx1) {$ctx1.fill(self,"testCollect",{},globals.CollectionTest)})},
args: [],
source: "testCollect\x0a\x09self assert: (self collection collect: [ :each | each ]) equals: self collection.\x0a\x09self assert: (self collectionWithNewValue collect: [ :each | each ]) equals: self collectionWithNewValue.\x0a\x09self assert: (self collectionClass new collect: [ :each | each printString ]) equals: self collectionClass new.\x0a\x09self assert: ((self collection collect: [ self sampleNewValue ]) detect: [ true ]) equals: self sampleNewValue.\x0a\x09self assert: (self collection collect: [ :each | each printString ]) equals: self collectionOfPrintStrings",
messageSends: ["assert:equals:", "collect:", "collection", "collectionWithNewValue", "new", "collectionClass", "printString", "detect:", "sampleNewValue", "collectionOfPrintStrings"],
referencedClasses: []
}),
globals.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testComma",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$4,$3,$1,$5,$8,$7,$9,$6,$10,$13,$12,$15,$14,$11,$17,$18,$16,$19;
$2=self._collection();
$ctx1.sendIdx["collection"]=1;
$4=self._collectionClass();
$ctx1.sendIdx["collectionClass"]=1;
$3=_st($4)._new();
$ctx1.sendIdx["new"]=1;
$1=_st($2).__comma($3);
$ctx1.sendIdx[","]=1;
$5=self._collection();
$ctx1.sendIdx["collection"]=2;
self._assert_equals_($1,$5);
$ctx1.sendIdx["assert:equals:"]=1;
$8=self._collectionClass();
$ctx1.sendIdx["collectionClass"]=2;
$7=_st($8)._new();
$ctx1.sendIdx["new"]=2;
$9=self._collection();
$ctx1.sendIdx["collection"]=3;
$6=_st($7).__comma($9);
$ctx1.sendIdx[","]=2;
$10=self._collection();
$ctx1.sendIdx["collection"]=4;
self._assert_equals_($6,$10);
$ctx1.sendIdx["assert:equals:"]=2;
$13=self._collectionClass();
$ctx1.sendIdx["collectionClass"]=3;
$12=_st($13)._new();
$ctx1.sendIdx["new"]=3;
$15=self._collectionClass();
$ctx1.sendIdx["collectionClass"]=4;
$14=_st($15)._new();
$ctx1.sendIdx["new"]=4;
$11=_st($12).__comma($14);
$ctx1.sendIdx[","]=3;
self._assert_equals_($11,_st(self._collectionClass())._new());
$ctx1.sendIdx["assert:equals:"]=3;
$17=self._collection();
$ctx1.sendIdx["collection"]=5;
$18=self._sampleNewValueAsCollection();
$ctx1.sendIdx["sampleNewValueAsCollection"]=1;
$16=_st($17).__comma($18);
$ctx1.sendIdx[","]=4;
$19=self._collectionWithNewValue();
$ctx1.sendIdx["collectionWithNewValue"]=1;
self._assert_equals_($16,$19);
self._assertSameContents_as_(_st(self._sampleNewValueAsCollection()).__comma(self._collection()),self._collectionWithNewValue());
return self}, function($ctx1) {$ctx1.fill(self,"testComma",{},globals.CollectionTest)})},
args: [],
source: "testComma\x0a\x09self assert: self collection, self collectionClass new equals: self collection.\x0a\x09self assert: self collectionClass new, self collection equals: self collection.\x0a\x09self assert: self collectionClass new, self collectionClass new equals: self collectionClass new.\x0a\x09self assert: self collection, self sampleNewValueAsCollection equals: self collectionWithNewValue.\x0a\x09self assertSameContents: self sampleNewValueAsCollection, self collection as: self collectionWithNewValue",
messageSends: ["assert:equals:", ",", "collection", "new", "collectionClass", "sampleNewValueAsCollection", "collectionWithNewValue", "assertSameContents:as:"],
referencedClasses: []
}),
globals.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDetect",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$6,$5,$7;
self._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {
$1=self._collection();
$ctx2.sendIdx["collection"]=1;
return _st($1)._detect_((function(){
return true;
}));
$ctx2.sendIdx["detect:"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$Error());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
$2=self._collection();
$ctx2.sendIdx["collection"]=2;
return _st($2)._detect_((function(){
return false;
}));
$ctx2.sendIdx["detect:"]=2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}),$Error());
$ctx1.sendIdx["should:raise:"]=1;
$3=_st(self._sampleNewValueAsCollection())._detect_((function(){
return true;
}));
$ctx1.sendIdx["detect:"]=3;
$4=self._sampleNewValue();
$ctx1.sendIdx["sampleNewValue"]=1;
self._assert_equals_($3,$4);
$ctx1.sendIdx["assert:equals:"]=1;
$5=_st(self._collectionWithNewValue())._detect_((function(each){
return smalltalk.withContext(function($ctx2) {
$6=self._sampleNewValue();
$ctx2.sendIdx["sampleNewValue"]=2;
return _st(each).__eq($6);
$ctx2.sendIdx["="]=1;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,6)})}));
$ctx1.sendIdx["detect:"]=4;
$7=self._sampleNewValue();
$ctx1.sendIdx["sampleNewValue"]=3;
self._assert_equals_($5,$7);
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._collection())._detect_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(each).__eq(self._sampleNewValue());
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,8)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,7)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testDetect",{},globals.CollectionTest)})},
args: [],
source: "testDetect\x0a\x09self\x0a\x09\x09shouldnt: [ self collection detect: [ true ] ]\x0a\x09\x09raise: Error.\x0a\x09self\x0a\x09\x09should: [ self collection detect: [ false ] ]\x0a\x09\x09raise: Error.\x0a\x09self assert: (self sampleNewValueAsCollection detect: [ true ]) equals: self sampleNewValue.\x0a\x09self assert: (self collectionWithNewValue detect: [ :each | each = self sampleNewValue ]) equals: self sampleNewValue.\x0a\x09self\x0a\x09\x09should: [ self collection detect: [ :each | each = self sampleNewValue ] ]\x0a\x09\x09raise: Error",
messageSends: ["shouldnt:raise:", "detect:", "collection", "should:raise:", "assert:equals:", "sampleNewValueAsCollection", "sampleNewValue", "collectionWithNewValue", "="],
referencedClasses: ["Error"]
}),
globals.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDetectIfNone",
protocol: 'tests',
fn: function (){
var self=this;
var sentinel;
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1,$5,$4,$6,$7,$9,$8,$10;
sentinel=_st($Object())._new();
$3=self._collection();
$ctx1.sendIdx["collection"]=1;
$2=_st($3)._detect_ifNone_((function(){
return true;
}),(function(){
return sentinel;
}));
$ctx1.sendIdx["detect:ifNone:"]=1;
$1=_st($2).__tild_eq(sentinel);
self._assert_($1);
$5=self._collection();
$ctx1.sendIdx["collection"]=2;
$4=_st($5)._detect_ifNone_((function(){
return false;
}),(function(){
return sentinel;
}));
$ctx1.sendIdx["detect:ifNone:"]=2;
self._assert_equals_($4,sentinel);
$ctx1.sendIdx["assert:equals:"]=1;
$6=_st(self._sampleNewValueAsCollection())._detect_ifNone_((function(){
return true;
}),(function(){
return sentinel;
}));
$ctx1.sendIdx["detect:ifNone:"]=3;
$7=self._sampleNewValue();
$ctx1.sendIdx["sampleNewValue"]=1;
self._assert_equals_($6,$7);
$ctx1.sendIdx["assert:equals:"]=2;
$8=_st(self._collectionWithNewValue())._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
$9=self._sampleNewValue();
$ctx2.sendIdx["sampleNewValue"]=2;
return _st(each).__eq($9);
$ctx2.sendIdx["="]=1;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,7)})}),(function(){
return sentinel;
}));
$ctx1.sendIdx["detect:ifNone:"]=4;
$10=self._sampleNewValue();
$ctx1.sendIdx["sampleNewValue"]=3;
self._assert_equals_($8,$10);
$ctx1.sendIdx["assert:equals:"]=3;
self._assert_equals_(_st(self._collection())._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq(self._sampleNewValue());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,9)})}),(function(){
return sentinel;
})),sentinel);
return self}, function($ctx1) {$ctx1.fill(self,"testDetectIfNone",{sentinel:sentinel},globals.CollectionTest)})},
args: [],
source: "testDetectIfNone\x0a\x09| sentinel |\x0a\x09sentinel := Object new.\x0a\x09self assert: (self collection detect: [ true ] ifNone: [ sentinel ]) ~= sentinel.\x0a\x09self assert: (self collection detect: [ false ] ifNone: [ sentinel ]) equals: sentinel.\x0a\x09self assert: (self sampleNewValueAsCollection detect: [ true ] ifNone: [ sentinel ]) equals: self sampleNewValue.\x0a\x09self assert: (self collectionWithNewValue detect: [ :each | each = self sampleNewValue ] ifNone: [ sentinel ]) equals: self sampleNewValue.\x0a\x09self assert: (self collection detect: [ :each | each = self sampleNewValue ] ifNone: [ sentinel ]) equals: sentinel",
messageSends: ["new", "assert:", "~=", "detect:ifNone:", "collection", "assert:equals:", "sampleNewValueAsCollection", "sampleNewValue", "collectionWithNewValue", "="],
referencedClasses: ["Object"]
}),
globals.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDo",
protocol: 'tests',
fn: function (){
var self=this;
var newCollection;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
newCollection=_st($OrderedCollection())._new();
$ctx1.sendIdx["new"]=1;
$1=self._collection();
$ctx1.sendIdx["collection"]=1;
_st($1)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(newCollection)._add_(each);
$ctx2.sendIdx["add:"]=1;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$ctx1.sendIdx["do:"]=1;
self._assertSameContents_as_(self._collection(),newCollection);
$ctx1.sendIdx["assertSameContents:as:"]=1;
newCollection=_st($OrderedCollection())._new();
$2=self._collectionWithDuplicates();
$ctx1.sendIdx["collectionWithDuplicates"]=1;
_st($2)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(newCollection)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
self._assertSameContents_as_(self._collectionWithDuplicates(),newCollection);
return self}, function($ctx1) {$ctx1.fill(self,"testDo",{newCollection:newCollection},globals.CollectionTest)})},
args: [],
source: "testDo\x0a\x09| newCollection |\x0a\x09newCollection := OrderedCollection new.\x0a\x09self collection do: [ :each |\x0a\x09\x09newCollection add: each ].\x0a\x09self\x0a\x09\x09assertSameContents: self collection\x0a\x09\x09as: newCollection.\x0a\x09newCollection := OrderedCollection new.\x0a\x09self collectionWithDuplicates do: [ :each |\x0a\x09\x09newCollection add: each ].\x0a\x09self\x0a\x09\x09assertSameContents: self collectionWithDuplicates\x0a\x09\x09as: newCollection",
messageSends: ["new", "do:", "collection", "add:", "assertSameContents:as:", "collectionWithDuplicates"],
referencedClasses: ["OrderedCollection"]
}),
globals.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIfEmptyFamily",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1,$5,$4,$6,$9,$8,$7,$11,$10,$13,$12,$16,$15,$14,$18,$17,$19;
$3=self._collectionClass();
$ctx1.sendIdx["collectionClass"]=1;
$2=_st($3)._new();
$ctx1.sendIdx["new"]=1;
$1=_st($2)._ifEmpty_((function(){
return (42);
}));
$ctx1.sendIdx["ifEmpty:"]=1;
self._assert_equals_($1,(42));
$ctx1.sendIdx["assert:equals:"]=1;
$5=self._collection();
$ctx1.sendIdx["collection"]=1;
$4=_st($5)._ifEmpty_((function(){
return (42);
}));
$6=self._collection();
$ctx1.sendIdx["collection"]=2;
self._assert_equals_($4,$6);
$ctx1.sendIdx["assert:equals:"]=2;
$9=self._collectionClass();
$ctx1.sendIdx["collectionClass"]=2;
$8=_st($9)._new();
$ctx1.sendIdx["new"]=2;
$7=_st($8)._ifNotEmpty_((function(){
return (42);
}));
$ctx1.sendIdx["ifNotEmpty:"]=1;
$11=self._collectionClass();
$ctx1.sendIdx["collectionClass"]=3;
$10=_st($11)._new();
$ctx1.sendIdx["new"]=3;
self._assert_equals_($7,$10);
$ctx1.sendIdx["assert:equals:"]=3;
$13=self._collection();
$ctx1.sendIdx["collection"]=3;
$12=_st($13)._ifNotEmpty_((function(){
return (42);
}));
self._assert_equals_($12,(42));
$ctx1.sendIdx["assert:equals:"]=4;
$16=self._collectionClass();
$ctx1.sendIdx["collectionClass"]=4;
$15=_st($16)._new();
$ctx1.sendIdx["new"]=4;
$14=_st($15)._ifEmpty_ifNotEmpty_((function(){
return (42);
}),(function(){
return (999);
}));
$ctx1.sendIdx["ifEmpty:ifNotEmpty:"]=1;
self._assert_equals_($14,(42));
$ctx1.sendIdx["assert:equals:"]=5;
$18=self._collection();
$ctx1.sendIdx["collection"]=4;
$17=_st($18)._ifEmpty_ifNotEmpty_((function(){
return (42);
}),(function(){
return (999);
}));
self._assert_equals_($17,(999));
$ctx1.sendIdx["assert:equals:"]=6;
$19=_st(_st(self._collectionClass())._new())._ifNotEmpty_ifEmpty_((function(){
return (42);
}),(function(){
return (999);
}));
$ctx1.sendIdx["ifNotEmpty:ifEmpty:"]=1;
self._assert_equals_($19,(999));
$ctx1.sendIdx["assert:equals:"]=7;
self._assert_equals_(_st(self._collection())._ifNotEmpty_ifEmpty_((function(){
return (42);
}),(function(){
return (999);
})),(42));
return self}, function($ctx1) {$ctx1.fill(self,"testIfEmptyFamily",{},globals.CollectionTest)})},
args: [],
source: "testIfEmptyFamily\x0a\x09self assert: (self collectionClass new ifEmpty: [ 42 ]) equals: 42.\x0a\x09self assert: (self collection ifEmpty: [ 42 ]) equals: self collection.\x0a\x0a\x09self assert: (self collectionClass new ifNotEmpty: [ 42 ]) equals: self collectionClass new.\x0a\x09self assert: (self collection ifNotEmpty: [ 42 ]) equals: 42.\x0a\x09\x0a\x09self assert: (self collectionClass new ifEmpty: [ 42 ] ifNotEmpty: [ 999 ]) equals: 42.\x0a\x09self assert: (self collection ifEmpty: [ 42 ] ifNotEmpty: [ 999 ]) equals: 999.\x0a\x0a\x09self assert: (self collectionClass new ifNotEmpty: [ 42 ] ifEmpty: [ 999 ]) equals: 999.\x0a\x09self assert: (self collection ifNotEmpty: [ 42 ] ifEmpty: [ 999 ]) equals: 42",
messageSends: ["assert:equals:", "ifEmpty:", "new", "collectionClass", "collection", "ifNotEmpty:", "ifEmpty:ifNotEmpty:", "ifNotEmpty:ifEmpty:"],
referencedClasses: []
}),
globals.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIsEmpty",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._collectionClass())._new())._isEmpty();
$ctx1.sendIdx["isEmpty"]=1;
self._assert_($1);
self._deny_(_st(self._collection())._isEmpty());
return self}, function($ctx1) {$ctx1.fill(self,"testIsEmpty",{},globals.CollectionTest)})},
args: [],
source: "testIsEmpty\x0a\x09self assert: self collectionClass new isEmpty.\x0a\x09self deny: self collection isEmpty",
messageSends: ["assert:", "isEmpty", "new", "collectionClass", "deny:", "collection"],
referencedClasses: []
}),
globals.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNoneSatisfy",
protocol: 'tests',
fn: function (){
var self=this;
var anyOne;
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
$1=self._collection();
$ctx1.sendIdx["collection"]=1;
anyOne=_st($1)._anyOne();
$3=self._collection();
$ctx1.sendIdx["collection"]=2;
$2=_st($3)._noneSatisfy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq(anyOne);
$ctx2.sendIdx["="]=1;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$ctx1.sendIdx["noneSatisfy:"]=1;
self._deny_($2);
self._assert_(_st(self._collection())._noneSatisfy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq(_st($Object())._new());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})})));
return self}, function($ctx1) {$ctx1.fill(self,"testNoneSatisfy",{anyOne:anyOne},globals.CollectionTest)})},
args: [],
source: "testNoneSatisfy\x0a\x09| anyOne |\x0a\x09anyOne := self collection anyOne.\x0a\x09self deny: (self collection noneSatisfy: [ :each | each = anyOne ]).\x0a\x09self assert: (self collection noneSatisfy: [ :each | each = Object new ])",
messageSends: ["anyOne", "collection", "deny:", "noneSatisfy:", "=", "assert:", "new"],
referencedClasses: ["Object"]
}),
globals.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRemoveAll",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._collection();
_st($1)._removeAll();
$2=_st($1)._yourself();
self._assert_equals_($2,_st(self._collectionClass())._new());
return self}, function($ctx1) {$ctx1.fill(self,"testRemoveAll",{},globals.CollectionTest)})},
args: [],
source: "testRemoveAll\x0a\x09self assert: (self collection removeAll; yourself) equals: self collectionClass new",
messageSends: ["assert:equals:", "removeAll", "collection", "yourself", "new", "collectionClass"],
referencedClasses: []
}),
globals.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSelect",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$6,$5,$7,$9,$10,$8,$12,$13,$11,$14,$16,$17,$15;
$2=self._collection();
$ctx1.sendIdx["collection"]=1;
$1=_st($2)._select_((function(){
return false;
}));
$ctx1.sendIdx["select:"]=1;
$4=self._collectionClass();
$ctx1.sendIdx["collectionClass"]=1;
$3=_st($4)._new();
$ctx1.sendIdx["new"]=1;
self._assert_equals_($1,$3);
$ctx1.sendIdx["assert:equals:"]=1;
$6=self._collection();
$ctx1.sendIdx["collection"]=2;
$5=_st($6)._select_((function(){
return true;
}));
$ctx1.sendIdx["select:"]=2;
$7=self._collection();
$ctx1.sendIdx["collection"]=3;
self._assert_equals_($5,$7);
$ctx1.sendIdx["assert:equals:"]=2;
$9=self._collectionWithNewValue();
$ctx1.sendIdx["collectionWithNewValue"]=1;
$8=_st($9)._select_((function(each){
return smalltalk.withContext(function($ctx2) {
$10=self._sampleNewValue();
$ctx2.sendIdx["sampleNewValue"]=1;
return _st(each).__eq($10);
$ctx2.sendIdx["="]=1;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)})}));
$ctx1.sendIdx["select:"]=3;
self._assert_equals_($8,self._sampleNewValueAsCollection());
$ctx1.sendIdx["assert:equals:"]=3;
$12=self._collectionWithNewValue();
$ctx1.sendIdx["collectionWithNewValue"]=2;
$11=_st($12)._select_((function(each){
return smalltalk.withContext(function($ctx2) {
$13=self._sampleNewValue();
$ctx2.sendIdx["sampleNewValue"]=2;
return _st(each).__tild_eq($13);
$ctx2.sendIdx["~="]=1;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)})}));
$ctx1.sendIdx["select:"]=4;
$14=self._collection();
$ctx1.sendIdx["collection"]=4;
self._assert_equals_($11,$14);
$ctx1.sendIdx["assert:equals:"]=4;
$16=self._collection();
$ctx1.sendIdx["collection"]=5;
$15=_st($16)._select_((function(each){
return smalltalk.withContext(function($ctx2) {
$17=self._sampleNewValue();
$ctx2.sendIdx["sampleNewValue"]=3;
return _st(each).__eq($17);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,5)})}));
$ctx1.sendIdx["select:"]=5;
self._assert_equals_($15,_st(self._collectionClass())._new());
$ctx1.sendIdx["assert:equals:"]=5;
self._assert_equals_(_st(self._collectionWithNewValue())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__tild_eq(self._sampleNewValue());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,6)})})),self._collection());
return self}, function($ctx1) {$ctx1.fill(self,"testSelect",{},globals.CollectionTest)})},
args: [],
source: "testSelect\x0a\x09self assert: (self collection select: [ false ]) equals: self collectionClass new.\x0a\x09self assert: (self collection select: [ true ]) equals: self collection.\x0a\x09self assert: (self collectionWithNewValue select: [ :each | each = self sampleNewValue ]) equals: self sampleNewValueAsCollection.\x0a\x09self assert: (self collectionWithNewValue select: [ :each | each ~= self sampleNewValue ]) equals: self collection.\x0a\x09self assert: (self collection select: [ :each | each = self sampleNewValue ]) equals: self collectionClass new.\x0a\x09self assert: (self collectionWithNewValue select: [ :each | each ~= self sampleNewValue ]) equals: self collection",
messageSends: ["assert:equals:", "select:", "collection", "new", "collectionClass", "collectionWithNewValue", "=", "sampleNewValue", "sampleNewValueAsCollection", "~="],
referencedClasses: []
}),
globals.CollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSize",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self._collectionClass())._new())._size();
$ctx1.sendIdx["size"]=1;
self._assert_equals_($1,(0));
$ctx1.sendIdx["assert:equals:"]=1;
$2=_st(self._sampleNewValueAsCollection())._size();
$ctx1.sendIdx["size"]=2;
self._assert_equals_($2,(1));
$ctx1.sendIdx["assert:equals:"]=2;
self._assert_equals_(_st(self._collection())._size(),self._collectionSize());
return self}, function($ctx1) {$ctx1.fill(self,"testSize",{},globals.CollectionTest)})},
args: [],
source: "testSize\x0a\x09self assert: self collectionClass new size equals: 0.\x0a\x09self assert: self sampleNewValueAsCollection size equals: 1.\x0a\x09self assert: self collection size equals: self collectionSize",
messageSends: ["assert:equals:", "size", "new", "collectionClass", "sampleNewValueAsCollection", "collection", "collectionSize"],
referencedClasses: []
}),
globals.CollectionTest);


smalltalk.addMethod(
smalltalk.method({
selector: "collectionClass",
protocol: 'fixture',
fn: function (){
var self=this;
return nil;
},
args: [],
source: "collectionClass\x0a\x09\x22Answers class of collection type tested,\x0a\x09or nil if test is abstract\x22\x0a\x0a\x09^ nil",
messageSends: [],
referencedClasses: []
}),
globals.CollectionTest.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._collectionClass())._isNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},globals.CollectionTest.klass)})},
args: [],
source: "isAbstract\x0a\x09^ self collectionClass isNil",
messageSends: ["isNil", "collectionClass"],
referencedClasses: []
}),
globals.CollectionTest.klass);


smalltalk.addClass('IndexableCollectionTest', globals.CollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "collectionWithNewValue",
protocol: 'fixture',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"collectionWithNewValue",{},globals.IndexableCollectionTest)})},
args: [],
source: "collectionWithNewValue\x0a\x09\x22Answers a collection which shows how\x0a\x09self collection would look after adding\x0a\x09self sampleNewValue at self sampleNewIndex\x22\x0a\x09\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.IndexableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "sampleNewIndex",
protocol: 'fixture',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"sampleNewIndex",{},globals.IndexableCollectionTest)})},
args: [],
source: "sampleNewIndex\x0a\x09\x22Answers a value that can be used as index in at:put: or at:ifAbsentPut:\x22\x0a\x09\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.IndexableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "sampleNonIndexesDo:",
protocol: 'fixture',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"sampleNonIndexesDo:",{aBlock:aBlock},globals.IndexableCollectionTest)})},
args: ["aBlock"],
source: "sampleNonIndexesDo: aBlock\x0a\x09\x22Executes block a few times,\x0a\x09each time passing value that is known\x0a\x09not to be an index, as the first parameter\x22\x0a\x09\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.IndexableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "samplesDo:",
protocol: 'fixture',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"samplesDo:",{aBlock:aBlock},globals.IndexableCollectionTest)})},
args: ["aBlock"],
source: "samplesDo: aBlock\x0a\x09\x22Executes block a few times,\x0a\x09each time passing known index and value stored\x0a\x09under that index as the parameters\x22\x0a\x09\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.IndexableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAt",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self._nonIndexesDo_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._should_raise_((function(){
return smalltalk.withContext(function($ctx3) {
$1=self._collection();
$ctx3.sendIdx["collection"]=1;
return _st($1)._at_(each);
$ctx3.sendIdx["at:"]=1;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}),$Error());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
self._samplesDo_((function(index,value){
return smalltalk.withContext(function($ctx2) {
return self._assert_equals_(_st(self._collection())._at_(index),value);
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testAt",{},globals.IndexableCollectionTest)})},
args: [],
source: "testAt\x0a\x09self nonIndexesDo: [ :each |\x0a\x09\x09self should: [ self collection at: each ] raise: Error ].\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09self assert: (self collection at: index) equals: value ]",
messageSends: ["nonIndexesDo:", "should:raise:", "at:", "collection", "samplesDo:", "assert:equals:"],
referencedClasses: ["Error"]
}),
globals.IndexableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAtIfAbsent",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3;
self._nonIndexesDo_((function(each){
return smalltalk.withContext(function($ctx2) {
$2=self._collection();
$ctx2.sendIdx["collection"]=1;
$1=_st($2)._at_ifAbsent_(each,(function(){
return smalltalk.withContext(function($ctx3) {
return self._sampleNewValue();
$ctx3.sendIdx["sampleNewValue"]=1;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["at:ifAbsent:"]=1;
$3=self._sampleNewValue();
$ctx2.sendIdx["sampleNewValue"]=2;
return self._assert_equals_($1,$3);
$ctx2.sendIdx["assert:equals:"]=1;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
self._samplesDo_((function(index,value){
return smalltalk.withContext(function($ctx2) {
return self._assert_equals_(_st(self._collection())._at_ifAbsent_(index,(function(){
return smalltalk.withContext(function($ctx3) {
return self._sampleNewValue();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})})),value);
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testAtIfAbsent",{},globals.IndexableCollectionTest)})},
args: [],
source: "testAtIfAbsent\x0a\x09self nonIndexesDo: [ :each |\x0a\x09\x09self assert: (self collection at: each ifAbsent: [ self sampleNewValue ]) equals: self sampleNewValue ].\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09self assert: (self collection at: index ifAbsent: [ self sampleNewValue ]) equals: value ].",
messageSends: ["nonIndexesDo:", "assert:equals:", "at:ifAbsent:", "collection", "sampleNewValue", "samplesDo:"],
referencedClasses: []
}),
globals.IndexableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAtIfAbsentPut",
protocol: 'tests',
fn: function (){
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { 
var $1;
newCollection=self._collection();
$ctx1.sendIdx["collection"]=1;
self._samplesDo_((function(index,value){
return smalltalk.withContext(function($ctx2) {
$1=_st(newCollection)._at_ifAbsentPut_(index,(function(){
return smalltalk.withContext(function($ctx3) {
return self._sampleNewValue();
$ctx3.sendIdx["sampleNewValue"]=1;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["at:ifAbsentPut:"]=1;
return self._assert_equals_($1,value);
$ctx2.sendIdx["assert:equals:"]=1;
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value},$ctx1,1)})}));
self._assert_equals_(newCollection,self._collection());
$ctx1.sendIdx["assert:equals:"]=2;
self._assert_equals_(_st(newCollection)._at_ifAbsentPut_(self._sampleNewIndex(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._sampleNewValue();
$ctx2.sendIdx["sampleNewValue"]=2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})})),self._sampleNewValue());
$ctx1.sendIdx["assert:equals:"]=3;
self._assert_equals_(newCollection,self._collectionWithNewValue());
return self}, function($ctx1) {$ctx1.fill(self,"testAtIfAbsentPut",{newCollection:newCollection},globals.IndexableCollectionTest)})},
args: [],
source: "testAtIfAbsentPut\x0a\x09| newCollection |\x0a\x09newCollection := self collection.\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09self assert: (newCollection at: index ifAbsentPut: [ self sampleNewValue ]) equals: value ].\x0a\x09self assert: newCollection equals: self collection.\x0a\x09self assert: (newCollection at: self sampleNewIndex ifAbsentPut: [ self sampleNewValue ]) equals: self sampleNewValue.\x0a\x09self assert: newCollection equals: self collectionWithNewValue",
messageSends: ["collection", "samplesDo:", "assert:equals:", "at:ifAbsentPut:", "sampleNewValue", "sampleNewIndex", "collectionWithNewValue"],
referencedClasses: []
}),
globals.IndexableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAtIfPresent",
protocol: 'tests',
fn: function (){
var self=this;
var visited,sentinel;
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3;
sentinel=_st($Object())._new();
self._nonIndexesDo_((function(each){
return smalltalk.withContext(function($ctx2) {
visited=nil;
visited;
$2=self._collection();
$ctx2.sendIdx["collection"]=1;
$1=_st($2)._at_ifPresent_(each,(function(value1){
visited=value1;
visited;
return sentinel;
}));
$ctx2.sendIdx["at:ifPresent:"]=1;
self._assert_equals_($1,nil);
$ctx2.sendIdx["assert:equals:"]=1;
return self._assert_(_st(visited)._isNil());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
self._samplesDo_((function(index,value){
return smalltalk.withContext(function($ctx2) {
visited=nil;
visited;
$4=self._collection();
$ctx2.sendIdx["collection"]=2;
$3=_st($4)._at_ifPresent_(index,(function(value2){
visited=value2;
visited;
return sentinel;
}));
self._assert_equals_($3,sentinel);
$ctx2.sendIdx["assert:equals:"]=2;
return self._assert_equals_(visited,_st(self._collection())._at_(index));
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testAtIfPresent",{visited:visited,sentinel:sentinel},globals.IndexableCollectionTest)})},
args: [],
source: "testAtIfPresent\x0a\x09| visited sentinel |\x0a\x09sentinel := Object new.\x0a\x09self nonIndexesDo: [ :each |\x0a\x09\x09visited := nil.\x0a\x09\x09self assert: (self collection at: each ifPresent: [ :value1 | visited := value1. sentinel ]) equals: nil.\x0a\x09\x09self assert: visited isNil ].\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09visited := nil.\x0a\x09\x09self assert: (self collection at: index ifPresent: [ :value2 | visited := value2. sentinel ]) equals: sentinel.\x0a\x09\x09self assert: visited equals: (self collection at: index) ]",
messageSends: ["new", "nonIndexesDo:", "assert:equals:", "at:ifPresent:", "collection", "assert:", "isNil", "samplesDo:", "at:"],
referencedClasses: ["Object"]
}),
globals.IndexableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAtIfPresentIfAbsent",
protocol: 'tests',
fn: function (){
var self=this;
var visited,sentinel;
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$5,$4;
sentinel=_st($Object())._new();
self._nonIndexesDo_((function(each){
return smalltalk.withContext(function($ctx2) {
visited=nil;
visited;
$2=self._collection();
$ctx2.sendIdx["collection"]=1;
$1=_st($2)._at_ifPresent_ifAbsent_(each,(function(value1){
visited=value1;
visited;
return sentinel;
}),(function(){
return smalltalk.withContext(function($ctx3) {
return self._sampleNewValue();
$ctx3.sendIdx["sampleNewValue"]=1;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$ctx2.sendIdx["at:ifPresent:ifAbsent:"]=1;
$3=self._sampleNewValue();
$ctx2.sendIdx["sampleNewValue"]=2;
self._assert_equals_($1,$3);
$ctx2.sendIdx["assert:equals:"]=1;
return self._assert_(_st(visited)._isNil());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
self._samplesDo_((function(index,value){
return smalltalk.withContext(function($ctx2) {
visited=nil;
visited;
$5=self._collection();
$ctx2.sendIdx["collection"]=2;
$4=_st($5)._at_ifPresent_ifAbsent_(index,(function(value2){
visited=value2;
visited;
return sentinel;
}),(function(){
return smalltalk.withContext(function($ctx3) {
return self._sampleNewValue();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,6)})}));
self._assert_equals_($4,sentinel);
$ctx2.sendIdx["assert:equals:"]=2;
return self._assert_equals_(visited,_st(self._collection())._at_(index));
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value},$ctx1,4)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testAtIfPresentIfAbsent",{visited:visited,sentinel:sentinel},globals.IndexableCollectionTest)})},
args: [],
source: "testAtIfPresentIfAbsent\x0a\x09| visited sentinel |\x0a\x09sentinel := Object new.\x0a\x09self nonIndexesDo: [ :each |\x0a\x09\x09visited := nil.\x0a\x09\x09self assert: (self collection at: each ifPresent: [ :value1 | visited := value1. sentinel ] ifAbsent: [ self sampleNewValue ] ) equals: self sampleNewValue.\x0a\x09\x09self assert: visited isNil ].\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09visited := nil.\x0a\x09\x09self assert: (self collection at: index ifPresent: [ :value2 | visited := value2. sentinel ] ifAbsent: [ self sampleNewValue ]) equals: sentinel.\x0a\x09\x09self assert: visited equals: (self collection at: index) ]",
messageSends: ["new", "nonIndexesDo:", "assert:equals:", "at:ifPresent:ifAbsent:", "collection", "sampleNewValue", "assert:", "isNil", "samplesDo:", "at:"],
referencedClasses: ["Object"]
}),
globals.IndexableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAtPut",
protocol: 'tests',
fn: function (){
var self=this;
var newCollection;
return smalltalk.withContext(function($ctx1) { 
newCollection=self._collection();
$ctx1.sendIdx["collection"]=1;
self._samplesDo_((function(index,value){
return smalltalk.withContext(function($ctx2) {
return _st(newCollection)._at_put_(index,value);
$ctx2.sendIdx["at:put:"]=1;
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value},$ctx1,1)})}));
self._assert_equals_(newCollection,self._collection());
$ctx1.sendIdx["assert:equals:"]=1;
_st(newCollection)._at_put_(self._sampleNewIndex(),self._sampleNewValue());
self._assert_equals_(newCollection,self._collectionWithNewValue());
return self}, function($ctx1) {$ctx1.fill(self,"testAtPut",{newCollection:newCollection},globals.IndexableCollectionTest)})},
args: [],
source: "testAtPut\x0a\x09| newCollection |\x0a\x09newCollection := self collection.\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09newCollection at: index put: value ].\x0a\x09self assert: newCollection equals: self collection.\x0a\x09newCollection at: self sampleNewIndex put: self sampleNewValue.\x0a\x09self assert: newCollection equals: self collectionWithNewValue",
messageSends: ["collection", "samplesDo:", "at:put:", "assert:equals:", "sampleNewIndex", "sampleNewValue", "collectionWithNewValue"],
referencedClasses: []
}),
globals.IndexableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testEquality",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$5,$6,$7,$10,$9,$11,$8;
$2=self._collectionClass();
$ctx1.sendIdx["collectionClass"]=1;
$1=_st($2)._new();
$ctx1.sendIdx["new"]=1;
$4=self._collectionClass();
$ctx1.sendIdx["collectionClass"]=2;
$3=_st($4)._new();
$ctx1.sendIdx["new"]=2;
self._assert_equals_($1,$3);
$ctx1.sendIdx["assert:equals:"]=1;
$5=self._collection();
$ctx1.sendIdx["collection"]=1;
$6=self._collection();
$ctx1.sendIdx["collection"]=2;
self._assert_equals_($5,$6);
$ctx1.sendIdx["assert:equals:"]=2;
$7=self._collectionWithNewValue();
$ctx1.sendIdx["collectionWithNewValue"]=1;
self._assert_equals_($7,self._collectionWithNewValue());
$10=self._collectionClass();
$ctx1.sendIdx["collectionClass"]=3;
$9=_st($10)._new();
$ctx1.sendIdx["new"]=3;
$11=self._collection();
$ctx1.sendIdx["collection"]=3;
$8=_st($9).__eq($11);
$ctx1.sendIdx["="]=1;
self._deny_($8);
$ctx1.sendIdx["deny:"]=1;
self._deny_(_st(self._collection()).__eq(_st(self._collectionClass())._new()));
return self}, function($ctx1) {$ctx1.fill(self,"testEquality",{},globals.IndexableCollectionTest)})},
args: [],
source: "testEquality\x0a\x09self assert: self collectionClass new equals: self collectionClass new.\x0a\x09self assert: self collection equals: self collection.\x0a\x09self assert: self collectionWithNewValue equals: self collectionWithNewValue.\x0a\x09\x0a\x09self deny: self collectionClass new = self collection.\x0a\x09self deny: self collection = self collectionClass new",
messageSends: ["assert:equals:", "new", "collectionClass", "collection", "collectionWithNewValue", "deny:", "="],
referencedClasses: []
}),
globals.IndexableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIndexOf",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
$1=self._collection();
$ctx2.sendIdx["collection"]=1;
return _st($1)._indexOf_(self._sampleNewValue());
$ctx2.sendIdx["indexOf:"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$Error());
self._samplesDo_((function(index,value){
return smalltalk.withContext(function($ctx2) {
return self._assert_equals_(_st(self._collection())._indexOf_(value),index);
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testIndexOf",{},globals.IndexableCollectionTest)})},
args: [],
source: "testIndexOf\x0a\x09self should: [ self collection indexOf: self sampleNewValue ] raise: Error.\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09self assert: (self collection indexOf: value) equals: index ]",
messageSends: ["should:raise:", "indexOf:", "collection", "sampleNewValue", "samplesDo:", "assert:equals:"],
referencedClasses: ["Error"]
}),
globals.IndexableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIndexOfWithNull",
protocol: 'tests',
fn: function (){
var self=this;
var jsNull;
function $JSON(){return globals.JSON||(typeof JSON=="undefined"?nil:JSON)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
jsNull=_st($JSON())._parse_("null");
self._samplesDo_((function(index,value){
return smalltalk.withContext(function($ctx2) {
$1=self._collection();
_st($1)._at_put_(index,jsNull);
$2=_st($1)._indexOf_(jsNull);
return self._assert_equals_($2,index);
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testIndexOfWithNull",{jsNull:jsNull},globals.IndexableCollectionTest)})},
args: [],
source: "testIndexOfWithNull\x0a\x09| jsNull |\x0a\x09jsNull := JSON parse: 'null'.\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09self assert: (self collection at: index put: jsNull; indexOf: jsNull) equals: index ]",
messageSends: ["parse:", "samplesDo:", "assert:equals:", "at:put:", "collection", "indexOf:"],
referencedClasses: ["JSON"]
}),
globals.IndexableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testWithIndexDo",
protocol: 'tests',
fn: function (){
var self=this;
var collection;
return smalltalk.withContext(function($ctx1) { 
collection=self._collection();
$ctx1.sendIdx["collection"]=1;
_st(self._collection())._withIndexDo_((function(each,index){
return smalltalk.withContext(function($ctx2) {
return self._assert_equals_(_st(collection)._at_(index),each);
}, function($ctx2) {$ctx2.fillBlock({each:each,index:index},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testWithIndexDo",{collection:collection},globals.IndexableCollectionTest)})},
args: [],
source: "testWithIndexDo\x0a\x09| collection |\x0a\x09collection := self collection.\x0a\x09\x0a\x09self collection withIndexDo: [ :each :index |\x0a\x09\x09self assert: (collection at: index) equals: each ]",
messageSends: ["collection", "withIndexDo:", "assert:equals:", "at:"],
referencedClasses: []
}),
globals.IndexableCollectionTest);



smalltalk.addClass('AssociativeCollectionTest', globals.IndexableCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "collectionKeys",
protocol: 'fixture',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"collectionKeys",{},globals.AssociativeCollectionTest)})},
args: [],
source: "collectionKeys\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.AssociativeCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionValues",
protocol: 'fixture',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"collectionValues",{},globals.AssociativeCollectionTest)})},
args: [],
source: "collectionValues\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.AssociativeCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "nonIndexesDo:",
protocol: 'fixture',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aBlock)._value_((5));
$ctx1.sendIdx["value:"]=1;
_st(aBlock)._value_("z");
return self}, function($ctx1) {$ctx1.fill(self,"nonIndexesDo:",{aBlock:aBlock},globals.AssociativeCollectionTest)})},
args: ["aBlock"],
source: "nonIndexesDo: aBlock\x0a\x09aBlock value: 5.\x0a\x09aBlock value: 'z'",
messageSends: ["value:"],
referencedClasses: []
}),
globals.AssociativeCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "sampleNewIndex",
protocol: 'fixture',
fn: function (){
var self=this;
return "new";
},
args: [],
source: "sampleNewIndex\x0a\x09^ 'new'",
messageSends: [],
referencedClasses: []
}),
globals.AssociativeCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "samplesDo:",
protocol: 'fixture',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aBlock)._value_value_("a",(2));
return self}, function($ctx1) {$ctx1.fill(self,"samplesDo:",{aBlock:aBlock},globals.AssociativeCollectionTest)})},
args: ["aBlock"],
source: "samplesDo: aBlock\x0a\x09aBlock value: 'a' value: 2",
messageSends: ["value:value:"],
referencedClasses: []
}),
globals.AssociativeCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAddAll",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$1,$6,$8,$9,$10,$11,$7,$12,$14,$15,$13;
($ctx1.supercall = true, globals.AssociativeCollectionTest.superclass.fn.prototype._testAddAll.apply(_st(self), []));
$ctx1.supercall = false;
$2=self._collection();
$ctx1.sendIdx["collection"]=1;
$3=$2;
$4=self._collection();
$ctx1.sendIdx["collection"]=2;
_st($3)._addAll_($4);
$ctx1.sendIdx["addAll:"]=1;
$5=_st($2)._yourself();
$ctx1.sendIdx["yourself"]=1;
$1=$5;
$6=self._collection();
$ctx1.sendIdx["collection"]=3;
self._assert_equals_($1,$6);
$ctx1.sendIdx["assert:equals:"]=1;
$8=self._collection();
$ctx1.sendIdx["collection"]=4;
$9=$8;
$10=self._collectionWithNewValue();
$ctx1.sendIdx["collectionWithNewValue"]=1;
_st($9)._addAll_($10);
$ctx1.sendIdx["addAll:"]=2;
$11=_st($8)._yourself();
$ctx1.sendIdx["yourself"]=2;
$7=$11;
$12=self._collectionWithNewValue();
$ctx1.sendIdx["collectionWithNewValue"]=2;
self._assert_equals_($7,$12);
$ctx1.sendIdx["assert:equals:"]=2;
$14=self._collectionWithNewValue();
$ctx1.sendIdx["collectionWithNewValue"]=3;
_st($14)._addAll_(self._collection());
$15=_st($14)._yourself();
$13=$15;
self._assert_equals_($13,self._collectionWithNewValue());
return self}, function($ctx1) {$ctx1.fill(self,"testAddAll",{},globals.AssociativeCollectionTest)})},
args: [],
source: "testAddAll\x0a\x09super testAddAll.\x0a\x09self assert: (self collection addAll: self collection; yourself) equals: self collection.\x0a\x09self assert: (self collection addAll: self collectionWithNewValue; yourself) equals: self collectionWithNewValue.\x0a\x09self assert: (self collectionWithNewValue addAll: self collection; yourself) equals: self collectionWithNewValue",
messageSends: ["testAddAll", "assert:equals:", "addAll:", "collection", "yourself", "collectionWithNewValue"],
referencedClasses: []
}),
globals.AssociativeCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAsDictionary",
protocol: 'tests',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(_st(self._collectionClass())._new())._asDictionary())._isMemberOf_($Dictionary()));
return self}, function($ctx1) {$ctx1.fill(self,"testAsDictionary",{},globals.AssociativeCollectionTest)})},
args: [],
source: "testAsDictionary\x0aself assert: ( self collectionClass new asDictionary isMemberOf: Dictionary ).",
messageSends: ["assert:", "isMemberOf:", "asDictionary", "new", "collectionClass"],
referencedClasses: ["Dictionary"]
}),
globals.AssociativeCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAsHashedCollection",
protocol: 'tests',
fn: function (){
var self=this;
function $HashedCollection(){return globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(_st(self._collectionClass())._new())._asHashedCollection())._isMemberOf_($HashedCollection()));
return self}, function($ctx1) {$ctx1.fill(self,"testAsHashedCollection",{},globals.AssociativeCollectionTest)})},
args: [],
source: "testAsHashedCollection\x0aself assert: ( self collectionClass new asHashedCollection isMemberOf: HashedCollection ).",
messageSends: ["assert:", "isMemberOf:", "asHashedCollection", "new", "collectionClass"],
referencedClasses: ["HashedCollection"]
}),
globals.AssociativeCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testComma",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1,$4,$6,$7,$5,$8,$10,$9;
($ctx1.supercall = true, globals.AssociativeCollectionTest.superclass.fn.prototype._testComma.apply(_st(self), []));
$ctx1.supercall = false;
$2=self._collection();
$ctx1.sendIdx["collection"]=1;
$3=self._collection();
$ctx1.sendIdx["collection"]=2;
$1=_st($2).__comma($3);
$ctx1.sendIdx[","]=1;
$4=self._collection();
$ctx1.sendIdx["collection"]=3;
self._assert_equals_($1,$4);
$ctx1.sendIdx["assert:equals:"]=1;
$6=self._collection();
$ctx1.sendIdx["collection"]=4;
$7=self._collectionWithNewValue();
$ctx1.sendIdx["collectionWithNewValue"]=1;
$5=_st($6).__comma($7);
$ctx1.sendIdx[","]=2;
$8=self._collectionWithNewValue();
$ctx1.sendIdx["collectionWithNewValue"]=2;
self._assert_equals_($5,$8);
$ctx1.sendIdx["assert:equals:"]=2;
$10=self._collectionWithNewValue();
$ctx1.sendIdx["collectionWithNewValue"]=3;
$9=_st($10).__comma(self._collection());
self._assert_equals_($9,self._collectionWithNewValue());
return self}, function($ctx1) {$ctx1.fill(self,"testComma",{},globals.AssociativeCollectionTest)})},
args: [],
source: "testComma\x0a\x09super testComma.\x0a\x09self assert: self collection, self collection equals: self collection.\x0a\x09self assert: self collection, self collectionWithNewValue equals: self collectionWithNewValue.\x0a\x09self assert: self collectionWithNewValue, self collection equals: self collectionWithNewValue",
messageSends: ["testComma", "assert:equals:", ",", "collection", "collectionWithNewValue"],
referencedClasses: []
}),
globals.AssociativeCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testFrom",
protocol: 'tests',
fn: function (){
var self=this;
var associations;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1="a".__minus_gt((1));
$ctx1.sendIdx["->"]=1;
associations=[$1,"b".__minus_gt((2))];
self._assertSameContents_as_(_st(_st(self._class())._collectionClass())._from_(associations),globals.HashedCollection._newFromPairs_(["a",(1),"b",(2)]));
return self}, function($ctx1) {$ctx1.fill(self,"testFrom",{associations:associations},globals.AssociativeCollectionTest)})},
args: [],
source: "testFrom\x0a\x22Accept a collection of associations.\x22\x0a| associations |\x0aassociations := { 'a' -> 1. 'b' -> 2 }.\x0aself assertSameContents: ( self class collectionClass from: associations ) as: #{ 'a' -> 1. 'b' -> 2 }.",
messageSends: ["->", "assertSameContents:as:", "from:", "collectionClass", "class"],
referencedClasses: []
}),
globals.AssociativeCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testKeys",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$4;
$2=_st(_st(self._collectionClass())._new())._keys();
$ctx1.sendIdx["keys"]=1;
$1=_st($2)._isEmpty();
self._assert_($1);
$3=_st(self._collection())._keys();
$ctx1.sendIdx["keys"]=2;
$4=self._collectionKeys();
$ctx1.sendIdx["collectionKeys"]=1;
self._assertSameContents_as_($3,$4);
$ctx1.sendIdx["assertSameContents:as:"]=1;
self._assertSameContents_as_(_st(self._collectionWithNewValue())._keys(),_st(self._collectionKeys()).__comma([self._sampleNewIndex()]));
return self}, function($ctx1) {$ctx1.fill(self,"testKeys",{},globals.AssociativeCollectionTest)})},
args: [],
source: "testKeys\x0a\x09self assert:self collectionClass new keys isEmpty.\x0a\x09self assertSameContents:self collection keys as: self collectionKeys.\x0a\x09self assertSameContents:self collectionWithNewValue keys as: self collectionKeys, { self sampleNewIndex }",
messageSends: ["assert:", "isEmpty", "keys", "new", "collectionClass", "assertSameContents:as:", "collection", "collectionKeys", "collectionWithNewValue", ",", "sampleNewIndex"],
referencedClasses: []
}),
globals.AssociativeCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNewFromPairs",
protocol: 'tests',
fn: function (){
var self=this;
var flattenedAssociations;
return smalltalk.withContext(function($ctx1) { 
flattenedAssociations=["a",(1),"b",(2)];
self._assertSameContents_as_(_st(_st(self._class())._collectionClass())._newFromPairs_(flattenedAssociations),globals.HashedCollection._newFromPairs_(["a",(1),"b",(2)]));
return self}, function($ctx1) {$ctx1.fill(self,"testNewFromPairs",{flattenedAssociations:flattenedAssociations},globals.AssociativeCollectionTest)})},
args: [],
source: "testNewFromPairs\x0a\x22Accept an array in which all odd indexes are keys and evens are values.\x22\x0a| flattenedAssociations |\x0aflattenedAssociations := { 'a'. 1. 'b'. 2 }.\x0aself assertSameContents: ( self class collectionClass newFromPairs: flattenedAssociations ) as: #{ 'a' -> 1. 'b' -> 2 }.",
messageSends: ["assertSameContents:as:", "newFromPairs:", "collectionClass", "class"],
referencedClasses: []
}),
globals.AssociativeCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPrintString",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$4,$1,$5;
$3=self._collectionClass();
$ctx1.sendIdx["collectionClass"]=1;
$2=_st($3)._new();
_st($2)._at_put_("firstname","James");
$ctx1.sendIdx["at:put:"]=1;
_st($2)._at_put_("lastname","Bond");
$4=_st($2)._printString();
$1=$4;
$5=_st("a ".__comma(_st(self._collectionClass())._name())).__comma(" ('firstname' -> 'James' , 'lastname' -> 'Bond')");
$ctx1.sendIdx[","]=1;
self._assert_equals_($1,$5);
return self}, function($ctx1) {$ctx1.fill(self,"testPrintString",{},globals.AssociativeCollectionTest)})},
args: [],
source: "testPrintString\x0a\x09self\x0a\x09\x09assert: (self collectionClass new\x0a\x09\x09\x09\x09\x09\x09\x09at:'firstname' put: 'James';\x0a\x09\x09\x09\x09\x09\x09\x09at:'lastname' put: 'Bond';\x0a\x09\x09\x09\x09\x09\x09\x09printString)\x0a\x09\x09equals: 'a ', self collectionClass name, ' (''firstname'' -> ''James'' , ''lastname'' -> ''Bond'')'",
messageSends: ["assert:equals:", "at:put:", "new", "collectionClass", "printString", ",", "name"],
referencedClasses: []
}),
globals.AssociativeCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRemoveKey",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$6,$4,$7,$8;
self._nonIndexesDo_((function(each){
var collection;
return smalltalk.withContext(function($ctx2) {
collection=self._collection();
$ctx2.sendIdx["collection"]=1;
collection;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(collection)._removeKey_(each);
$ctx3.sendIdx["removeKey:"]=1;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}),$Error());
$1=collection;
$2=self._collection();
$ctx2.sendIdx["collection"]=2;
return self._assert_equals_($1,$2);
$ctx2.sendIdx["assert:equals:"]=1;
}, function($ctx2) {$ctx2.fillBlock({each:each,collection:collection},$ctx1,1)})}));
self._samplesDo_((function(index,value){
var collection;
return smalltalk.withContext(function($ctx2) {
collection=self._collection();
$ctx2.sendIdx["collection"]=3;
collection;
$3=_st(collection)._removeKey_(index);
$ctx2.sendIdx["removeKey:"]=2;
self._assert_equals_($3,value);
$ctx2.sendIdx["assert:equals:"]=2;
$5=collection;
$6=self._collection();
$ctx2.sendIdx["collection"]=4;
$4=_st($5).__eq($6);
return self._deny_($4);
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value,collection:collection},$ctx1,3)})}));
$7=self._collectionWithNewValue();
_st($7)._removeKey_(self._sampleNewIndex());
$8=_st($7)._yourself();
self._assert_equals_($8,self._collection());
return self}, function($ctx1) {$ctx1.fill(self,"testRemoveKey",{},globals.AssociativeCollectionTest)})},
args: [],
source: "testRemoveKey\x0a\x09self nonIndexesDo: [ :each |\x0a\x09\x09| collection |\x0a\x09\x09collection := self collection.\x0a\x09\x09self should: [ collection removeKey: each ] raise: Error.\x0a\x09\x09self assert: collection equals: self collection ].\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09| collection |\x0a\x09\x09collection := self collection.\x0a\x09\x09self assert: (collection removeKey: index) equals: value.\x0a\x09\x09self deny: collection = self collection ].\x0a\x09self\x0a\x09\x09assert: (self collectionWithNewValue removeKey: self sampleNewIndex; yourself)\x0a\x09\x09equals: self collection",
messageSends: ["nonIndexesDo:", "collection", "should:raise:", "removeKey:", "assert:equals:", "samplesDo:", "deny:", "=", "collectionWithNewValue", "sampleNewIndex", "yourself"],
referencedClasses: ["Error"]
}),
globals.AssociativeCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRemoveKeyIfAbsent",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$7,$8,$6,$9,$10;
self._nonIndexesDo_((function(each){
var collection;
return smalltalk.withContext(function($ctx2) {
collection=self._collection();
$ctx2.sendIdx["collection"]=1;
collection;
$1=_st(collection)._removeKey_ifAbsent_(each,(function(){
return smalltalk.withContext(function($ctx3) {
return self._sampleNewValue();
$ctx3.sendIdx["sampleNewValue"]=1;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["removeKey:ifAbsent:"]=1;
$2=self._sampleNewValue();
$ctx2.sendIdx["sampleNewValue"]=2;
self._assert_equals_($1,$2);
$ctx2.sendIdx["assert:equals:"]=1;
$3=collection;
$4=self._collection();
$ctx2.sendIdx["collection"]=2;
return self._assert_equals_($3,$4);
$ctx2.sendIdx["assert:equals:"]=2;
}, function($ctx2) {$ctx2.fillBlock({each:each,collection:collection},$ctx1,1)})}));
self._samplesDo_((function(index,value){
var collection;
return smalltalk.withContext(function($ctx2) {
collection=self._collection();
$ctx2.sendIdx["collection"]=3;
collection;
$5=_st(collection)._removeKey_ifAbsent_(index,(function(){
return smalltalk.withContext(function($ctx3) {
return self._sampleNewValue();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
$ctx2.sendIdx["removeKey:ifAbsent:"]=2;
self._assert_equals_($5,value);
$ctx2.sendIdx["assert:equals:"]=3;
$7=collection;
$8=self._collection();
$ctx2.sendIdx["collection"]=4;
$6=_st($7).__eq($8);
return self._deny_($6);
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value,collection:collection},$ctx1,3)})}));
$9=self._collectionWithNewValue();
_st($9)._removeKey_ifAbsent_(self._sampleNewIndex(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._assert_(false);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)})}));
$10=_st($9)._yourself();
self._assert_equals_($10,self._collection());
return self}, function($ctx1) {$ctx1.fill(self,"testRemoveKeyIfAbsent",{},globals.AssociativeCollectionTest)})},
args: [],
source: "testRemoveKeyIfAbsent\x0a\x09self nonIndexesDo: [ :each |\x0a\x09\x09| collection |\x0a\x09\x09collection := self collection.\x0a\x09\x09self assert: (collection removeKey: each ifAbsent: [ self sampleNewValue ]) equals: self sampleNewValue.\x0a\x09\x09self assert: collection equals: self collection ].\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09| collection |\x0a\x09\x09collection := self collection.\x0a\x09\x09self assert: (collection removeKey: index ifAbsent: [ self sampleNewValue ]) equals: value.\x0a\x09\x09self deny: collection = self collection ].\x0a\x09self\x0a\x09\x09assert: (self collectionWithNewValue removeKey: self sampleNewIndex ifAbsent: [ self assert: false ]; yourself)\x0a\x09\x09equals: self collection",
messageSends: ["nonIndexesDo:", "collection", "assert:equals:", "removeKey:ifAbsent:", "sampleNewValue", "samplesDo:", "deny:", "=", "collectionWithNewValue", "sampleNewIndex", "assert:", "yourself"],
referencedClasses: []
}),
globals.AssociativeCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testValues",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$4;
$2=_st(_st(self._collectionClass())._new())._values();
$ctx1.sendIdx["values"]=1;
$1=_st($2)._isEmpty();
self._assert_($1);
$3=_st(self._collection())._values();
$ctx1.sendIdx["values"]=2;
$4=self._collectionValues();
$ctx1.sendIdx["collectionValues"]=1;
self._assertSameContents_as_($3,$4);
$ctx1.sendIdx["assertSameContents:as:"]=1;
self._assertSameContents_as_(_st(self._collectionWithNewValue())._values(),_st(self._collectionValues()).__comma([self._sampleNewValue()]));
return self}, function($ctx1) {$ctx1.fill(self,"testValues",{},globals.AssociativeCollectionTest)})},
args: [],
source: "testValues\x0a\x09self assert:self collectionClass new values isEmpty.\x0a\x09self assertSameContents:self collection values as: self collectionValues.\x0a\x09self assertSameContents:self collectionWithNewValue values as: self collectionValues, { self sampleNewValue }",
messageSends: ["assert:", "isEmpty", "values", "new", "collectionClass", "assertSameContents:as:", "collection", "collectionValues", "collectionWithNewValue", ",", "sampleNewValue"],
referencedClasses: []
}),
globals.AssociativeCollectionTest);



smalltalk.addClass('DictionaryTest', globals.AssociativeCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "collection",
protocol: 'fixture',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Dictionary())._new();
_st($2)._at_put_((1),(1));
$ctx1.sendIdx["at:put:"]=1;
_st($2)._at_put_("a",(2));
$ctx1.sendIdx["at:put:"]=2;
_st($2)._at_put_(true,(3));
$ctx1.sendIdx["at:put:"]=3;
_st($2)._at_put_((1).__at((3)),(-4));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"collection",{},globals.DictionaryTest)})},
args: [],
source: "collection\x0a\x09^ Dictionary new\x0a\x09\x09at: 1 put: 1;\x0a\x09\x09at: 'a' put: 2;\x0a\x09\x09at: true put: 3;\x0a\x09\x09at: 1@3 put: -4;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new", "@", "yourself"],
referencedClasses: ["Dictionary"]
}),
globals.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionKeys",
protocol: 'fixture',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[(1),"a",true,(1).__at((3))];
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionKeys",{},globals.DictionaryTest)})},
args: [],
source: "collectionKeys\x0a\x09^ {1. 'a'. true. 1@3}",
messageSends: ["@"],
referencedClasses: []
}),
globals.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionOfPrintStrings",
protocol: 'fixture',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Dictionary())._new();
_st($2)._at_put_((1),"1");
$ctx1.sendIdx["at:put:"]=1;
_st($2)._at_put_("a","2");
$ctx1.sendIdx["at:put:"]=2;
_st($2)._at_put_(true,"3");
$ctx1.sendIdx["at:put:"]=3;
_st($2)._at_put_((1).__at((3)),"-4");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionOfPrintStrings",{},globals.DictionaryTest)})},
args: [],
source: "collectionOfPrintStrings\x0a\x09^ Dictionary new\x0a\x09\x09at: 1 put: '1';\x0a\x09\x09at: 'a' put: '2';\x0a\x09\x09at: true put: '3';\x0a\x09\x09at: 1@3 put: '-4';\x0a\x09\x09yourself",
messageSends: ["at:put:", "new", "@", "yourself"],
referencedClasses: ["Dictionary"]
}),
globals.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionSize",
protocol: 'fixture',
fn: function (){
var self=this;
return (4);
},
args: [],
source: "collectionSize\x0a\x09^ 4",
messageSends: [],
referencedClasses: []
}),
globals.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionValues",
protocol: 'fixture',
fn: function (){
var self=this;
var $1;
$1=[(1),(2),(3),(-4)];
return $1;
},
args: [],
source: "collectionValues\x0a\x09^ {1. 2. 3. -4}",
messageSends: [],
referencedClasses: []
}),
globals.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionWithDuplicates",
protocol: 'fixture',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Dictionary())._new();
_st($2)._at_put_((1),(1));
$ctx1.sendIdx["at:put:"]=1;
_st($2)._at_put_("a",(2));
$ctx1.sendIdx["at:put:"]=2;
_st($2)._at_put_(true,(3));
$ctx1.sendIdx["at:put:"]=3;
_st($2)._at_put_((4),(-4));
$ctx1.sendIdx["at:put:"]=4;
_st($2)._at_put_("b",(1));
$ctx1.sendIdx["at:put:"]=5;
_st($2)._at_put_((3),(3));
$ctx1.sendIdx["at:put:"]=6;
_st($2)._at_put_(false,(12));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionWithDuplicates",{},globals.DictionaryTest)})},
args: [],
source: "collectionWithDuplicates\x0a\x09^ Dictionary new\x0a\x09\x09at: 1 put: 1;\x0a\x09\x09at: 'a' put: 2;\x0a\x09\x09at: true put: 3;\x0a\x09\x09at: 4 put: -4;\x0a\x09\x09at: 'b' put: 1;\x0a\x09\x09at: 3 put: 3;\x0a\x09\x09at: false put: 12;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new", "yourself"],
referencedClasses: ["Dictionary"]
}),
globals.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionWithNewValue",
protocol: 'fixture',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Dictionary())._new();
_st($2)._at_put_((1),(1));
$ctx1.sendIdx["at:put:"]=1;
_st($2)._at_put_("a",(2));
$ctx1.sendIdx["at:put:"]=2;
_st($2)._at_put_(true,(3));
$ctx1.sendIdx["at:put:"]=3;
_st($2)._at_put_((1).__at((3)),(-4));
$ctx1.sendIdx["at:put:"]=4;
_st($2)._at_put_("new","N");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionWithNewValue",{},globals.DictionaryTest)})},
args: [],
source: "collectionWithNewValue\x0a\x09^ Dictionary new\x0a\x09\x09at: 1 put: 1;\x0a\x09\x09at: 'a' put: 2;\x0a\x09\x09at: true put: 3;\x0a\x09\x09at: 1@3 put: -4;\x0a\x09\x09at: 'new' put: 'N';\x0a\x09\x09yourself",
messageSends: ["at:put:", "new", "@", "yourself"],
referencedClasses: ["Dictionary"]
}),
globals.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "sampleNewValueAsCollection",
protocol: 'fixture',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Dictionary())._new();
_st($2)._at_put_("new","N");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"sampleNewValueAsCollection",{},globals.DictionaryTest)})},
args: [],
source: "sampleNewValueAsCollection\x0a\x09^ Dictionary new\x0a\x09\x09at: 'new' put: 'N';\x0a\x09\x09yourself",
messageSends: ["at:put:", "new", "yourself"],
referencedClasses: ["Dictionary"]
}),
globals.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "samplesDo:",
protocol: 'fixture',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.DictionaryTest.superclass.fn.prototype._samplesDo_.apply(_st(self), [aBlock]));
$ctx1.supercall = false;
_st(aBlock)._value_value_(true,(3));
$ctx1.sendIdx["value:value:"]=1;
_st(aBlock)._value_value_((1).__at((3)),(-4));
return self}, function($ctx1) {$ctx1.fill(self,"samplesDo:",{aBlock:aBlock},globals.DictionaryTest)})},
args: ["aBlock"],
source: "samplesDo: aBlock\x0a\x09super samplesDo: aBlock.\x0a\x09aBlock value: true value: 3.\x0a\x09aBlock value: 1@3 value: -4",
messageSends: ["samplesDo:", "value:value:", "@"],
referencedClasses: []
}),
globals.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAccessing",
protocol: 'tests',
fn: function (){
var self=this;
var d;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$9,$10,$8,$12,$13,$11;
d=_st($Dictionary())._new();
_st(d)._at_put_("hello","world");
$ctx1.sendIdx["at:put:"]=1;
$1=_st(d)._at_("hello");
$ctx1.sendIdx["at:"]=1;
self._assert_equals_($1,"world");
$ctx1.sendIdx["assert:equals:"]=1;
$2=_st(d)._at_ifAbsent_("hello",(function(){
return nil;
}));
$ctx1.sendIdx["at:ifAbsent:"]=1;
self._assert_equals_($2,"world");
$ctx1.sendIdx["assert:equals:"]=2;
self._deny_(_st(_st(d)._at_ifAbsent_("foo",(function(){
return nil;
}))).__eq("world"));
$ctx1.sendIdx["deny:"]=1;
$3=_st(d)._includesKey_("hello");
$ctx1.sendIdx["includesKey:"]=1;
self._assert_($3);
$ctx1.sendIdx["assert:"]=1;
$4=_st(d)._includesKey_("foo");
$ctx1.sendIdx["includesKey:"]=2;
self._deny_($4);
$ctx1.sendIdx["deny:"]=2;
_st(d)._at_put_((1),(2));
$ctx1.sendIdx["at:put:"]=2;
$5=_st(d)._at_((1));
$ctx1.sendIdx["at:"]=2;
self._assert_equals_($5,(2));
$ctx1.sendIdx["assert:equals:"]=3;
$6=d;
$7=(1).__at((3));
$ctx1.sendIdx["@"]=1;
_st($6)._at_put_($7,(3));
$9=d;
$10=(1).__at((3));
$ctx1.sendIdx["@"]=2;
$8=_st($9)._at_($10);
self._assert_equals_($8,(3));
$12=d;
$13=(1).__at((3));
$ctx1.sendIdx["@"]=3;
$11=_st($12)._includesKey_($13);
$ctx1.sendIdx["includesKey:"]=3;
self._assert_($11);
self._deny_(_st(d)._includesKey_((3).__at((1))));
return self}, function($ctx1) {$ctx1.fill(self,"testAccessing",{d:d},globals.DictionaryTest)})},
args: [],
source: "testAccessing\x0a\x09| d |\x0a\x0a\x09d := Dictionary new.\x0a\x0a\x09d at: 'hello' put: 'world'.\x0a\x09self assert: (d at: 'hello') equals: 'world'.\x0a\x09self assert: (d at: 'hello' ifAbsent: [ nil ]) equals: 'world'.\x0a\x09self deny: (d at: 'foo' ifAbsent: [ nil ]) = 'world'.\x0a\x0a\x09self assert: (d includesKey: 'hello').\x0a\x09self deny: (d includesKey: 'foo').\x0a\x0a\x09d at: 1 put: 2.\x0a\x09self assert: (d at: 1) equals: 2.\x0a\x0a\x09d at: 1@3 put: 3.\x0a\x09self assert: (d at: 1@3) equals: 3.\x0a\x0a\x09self assert: (d includesKey: 1@3).\x0a\x09self deny: (d includesKey: 3@1)",
messageSends: ["new", "at:put:", "assert:equals:", "at:", "at:ifAbsent:", "deny:", "=", "assert:", "includesKey:", "@"],
referencedClasses: ["Dictionary"]
}),
globals.DictionaryTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDynamicDictionaries",
protocol: 'tests',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(globals.HashedCollection._newFromPairs_(["hello",(1)]))._asDictionary(),_st($Dictionary())._with_("hello".__minus_gt((1))));
return self}, function($ctx1) {$ctx1.fill(self,"testDynamicDictionaries",{},globals.DictionaryTest)})},
args: [],
source: "testDynamicDictionaries\x0a\x09self assert: #{'hello' -> 1} asDictionary equals: (Dictionary with: 'hello' -> 1)",
messageSends: ["assert:equals:", "asDictionary", "with:", "->"],
referencedClasses: ["Dictionary"]
}),
globals.DictionaryTest);


smalltalk.addMethod(
smalltalk.method({
selector: "collectionClass",
protocol: 'fixture',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return $Dictionary();
},
args: [],
source: "collectionClass\x0a\x09^ Dictionary",
messageSends: [],
referencedClasses: ["Dictionary"]
}),
globals.DictionaryTest.klass);


smalltalk.addClass('HashedCollectionTest', globals.AssociativeCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "collection",
protocol: 'fixture',
fn: function (){
var self=this;
var $1;
$1=globals.HashedCollection._newFromPairs_(["b",(1),"a",(2),"c",(3),"d",(-4)]);
return $1;
},
args: [],
source: "collection\x0a\x09^ #{ 'b' -> 1. 'a' -> 2. 'c' -> 3. 'd' -> -4 }",
messageSends: [],
referencedClasses: []
}),
globals.HashedCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionKeys",
protocol: 'fixture',
fn: function (){
var self=this;
var $1;
$1=["b","a","c","d"];
return $1;
},
args: [],
source: "collectionKeys\x0a\x09^ { 'b'. 'a'. 'c'. 'd' }",
messageSends: [],
referencedClasses: []
}),
globals.HashedCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionOfPrintStrings",
protocol: 'fixture',
fn: function (){
var self=this;
var $1;
$1=globals.HashedCollection._newFromPairs_(["b","1","a","2","c","3","d","-4"]);
return $1;
},
args: [],
source: "collectionOfPrintStrings\x0a\x09^ #{ 'b' -> '1'. 'a' -> '2'. 'c' -> '3'. 'd' -> '-4' }",
messageSends: [],
referencedClasses: []
}),
globals.HashedCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionSize",
protocol: 'fixture',
fn: function (){
var self=this;
return (4);
},
args: [],
source: "collectionSize\x0a\x09^ 4",
messageSends: [],
referencedClasses: []
}),
globals.HashedCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionValues",
protocol: 'fixture',
fn: function (){
var self=this;
var $1;
$1=[(1),(2),(3),(-4)];
return $1;
},
args: [],
source: "collectionValues\x0a\x09^ { 1. 2. 3. -4 }",
messageSends: [],
referencedClasses: []
}),
globals.HashedCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionWithDuplicates",
protocol: 'fixture',
fn: function (){
var self=this;
var $1;
$1=globals.HashedCollection._newFromPairs_(["b",(1),"a",(2),"c",(3),"d",(-4),"e",(1),"f",(2),"g",(10)]);
return $1;
},
args: [],
source: "collectionWithDuplicates\x0a\x09^ #{ 'b' -> 1. 'a' -> 2. 'c' -> 3. 'd' -> -4. 'e' -> 1. 'f' -> 2. 'g' -> 10 }",
messageSends: [],
referencedClasses: []
}),
globals.HashedCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionWithNewValue",
protocol: 'fixture',
fn: function (){
var self=this;
var $1;
$1=globals.HashedCollection._newFromPairs_(["b",(1),"a",(2),"c",(3),"d",(-4),"new","N"]);
return $1;
},
args: [],
source: "collectionWithNewValue\x0a\x09^ #{ 'b' -> 1. 'a' -> 2. 'c' -> 3. 'd' -> -4. 'new' -> 'N' }",
messageSends: [],
referencedClasses: []
}),
globals.HashedCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "sampleNewValueAsCollection",
protocol: 'fixture',
fn: function (){
var self=this;
var $1;
$1=globals.HashedCollection._newFromPairs_(["new","N"]);
return $1;
},
args: [],
source: "sampleNewValueAsCollection\x0a\x09^ #{ 'new' -> 'N' }",
messageSends: [],
referencedClasses: []
}),
globals.HashedCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDynamicDictionaries",
protocol: 'tests',
fn: function (){
var self=this;
function $HashedCollection(){return globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(globals.HashedCollection._newFromPairs_(["hello",(1)]))._asHashedCollection(),_st($HashedCollection())._with_("hello".__minus_gt((1))));
return self}, function($ctx1) {$ctx1.fill(self,"testDynamicDictionaries",{},globals.HashedCollectionTest)})},
args: [],
source: "testDynamicDictionaries\x0a\x09self assert: #{'hello' -> 1} asHashedCollection equals: (HashedCollection with: 'hello' -> 1)",
messageSends: ["assert:equals:", "asHashedCollection", "with:", "->"],
referencedClasses: ["HashedCollection"]
}),
globals.HashedCollectionTest);


smalltalk.addMethod(
smalltalk.method({
selector: "collectionClass",
protocol: 'fixture',
fn: function (){
var self=this;
function $HashedCollection(){return globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return $HashedCollection();
},
args: [],
source: "collectionClass\x0a\x09^ HashedCollection",
messageSends: [],
referencedClasses: ["HashedCollection"]
}),
globals.HashedCollectionTest.klass);


smalltalk.addClass('SequenceableCollectionTest', globals.IndexableCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "collectionFirst",
protocol: 'fixture',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"collectionFirst",{},globals.SequenceableCollectionTest)})},
args: [],
source: "collectionFirst\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.SequenceableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionFirstTwo",
protocol: 'fixture',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"collectionFirstTwo",{},globals.SequenceableCollectionTest)})},
args: [],
source: "collectionFirstTwo\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.SequenceableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionLast",
protocol: 'fixture',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"collectionLast",{},globals.SequenceableCollectionTest)})},
args: [],
source: "collectionLast\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.SequenceableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionLastTwo",
protocol: 'fixture',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"collectionLastTwo",{},globals.SequenceableCollectionTest)})},
args: [],
source: "collectionLastTwo\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.SequenceableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "nonIndexesDo:",
protocol: 'fixture',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aBlock)._value_((0));
$ctx1.sendIdx["value:"]=1;
_st(aBlock)._value_(_st(self._collectionSize()).__plus((1)));
$ctx1.sendIdx["value:"]=2;
_st(aBlock)._value_("z");
return self}, function($ctx1) {$ctx1.fill(self,"nonIndexesDo:",{aBlock:aBlock},globals.SequenceableCollectionTest)})},
args: ["aBlock"],
source: "nonIndexesDo: aBlock\x0a\x09aBlock value: 0.\x0a\x09aBlock value: self collectionSize + 1.\x0a\x09aBlock value: 'z'",
messageSends: ["value:", "+", "collectionSize"],
referencedClasses: []
}),
globals.SequenceableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "samplesDo:",
protocol: 'fixture',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aBlock)._value_value_((1),self._collectionFirst());
$ctx1.sendIdx["value:value:"]=1;
_st(aBlock)._value_value_(self._collectionSize(),self._collectionLast());
return self}, function($ctx1) {$ctx1.fill(self,"samplesDo:",{aBlock:aBlock},globals.SequenceableCollectionTest)})},
args: ["aBlock"],
source: "samplesDo: aBlock\x0a\x09aBlock value: 1 value: self collectionFirst.\x0a\x09aBlock value: self collectionSize value: self collectionLast",
messageSends: ["value:value:", "collectionFirst", "collectionSize", "collectionLast"],
referencedClasses: []
}),
globals.SequenceableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBeginsWith",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$5,$3,$7,$6;
$2=self._collection();
$ctx1.sendIdx["collection"]=1;
$1=_st($2)._beginsWith_(_st(self._collectionClass())._new());
$ctx1.sendIdx["beginsWith:"]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
$4=self._collection();
$ctx1.sendIdx["collection"]=2;
$5=self._collection();
$ctx1.sendIdx["collection"]=3;
$3=_st($4)._beginsWith_($5);
$ctx1.sendIdx["beginsWith:"]=2;
self._assert_($3);
$ctx1.sendIdx["assert:"]=2;
$7=self._collection();
$ctx1.sendIdx["collection"]=4;
$6=_st($7)._beginsWith_(self._collectionFirstTwo());
$ctx1.sendIdx["beginsWith:"]=3;
self._assert_($6);
self._deny_(_st(self._collection())._beginsWith_(self._collectionLastTwo()));
return self}, function($ctx1) {$ctx1.fill(self,"testBeginsWith",{},globals.SequenceableCollectionTest)})},
args: [],
source: "testBeginsWith\x0a\x09self assert: (self collection beginsWith: self collectionClass new).\x0a\x09self assert: (self collection beginsWith: self collection).\x0a\x09self assert: (self collection beginsWith: self collectionFirstTwo).\x0a\x09self deny: (self collection beginsWith: self collectionLastTwo)",
messageSends: ["assert:", "beginsWith:", "collection", "new", "collectionClass", "collectionFirstTwo", "deny:", "collectionLastTwo"],
referencedClasses: []
}),
globals.SequenceableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testEndsWith",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$5,$3,$7,$6;
$2=self._collection();
$ctx1.sendIdx["collection"]=1;
$1=_st($2)._endsWith_(_st(self._collectionClass())._new());
$ctx1.sendIdx["endsWith:"]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
$4=self._collection();
$ctx1.sendIdx["collection"]=2;
$5=self._collection();
$ctx1.sendIdx["collection"]=3;
$3=_st($4)._endsWith_($5);
$ctx1.sendIdx["endsWith:"]=2;
self._assert_($3);
$ctx1.sendIdx["assert:"]=2;
$7=self._collection();
$ctx1.sendIdx["collection"]=4;
$6=_st($7)._endsWith_(self._collectionLastTwo());
$ctx1.sendIdx["endsWith:"]=3;
self._assert_($6);
self._deny_(_st(self._collection())._endsWith_(self._collectionFirstTwo()));
return self}, function($ctx1) {$ctx1.fill(self,"testEndsWith",{},globals.SequenceableCollectionTest)})},
args: [],
source: "testEndsWith\x0a\x09self assert: (self collection endsWith: self collectionClass new).\x0a\x09self assert: (self collection endsWith: self collection).\x0a\x09self assert: (self collection endsWith: self collectionLastTwo).\x0a\x09self deny: (self collection endsWith: self collectionFirstTwo)",
messageSends: ["assert:", "endsWith:", "collection", "new", "collectionClass", "collectionLastTwo", "deny:", "collectionFirstTwo"],
referencedClasses: []
}),
globals.SequenceableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testFirst",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self._collection())._first(),self._collectionFirst());
return self}, function($ctx1) {$ctx1.fill(self,"testFirst",{},globals.SequenceableCollectionTest)})},
args: [],
source: "testFirst\x0a\x09self assert: self collection first equals: self collectionFirst",
messageSends: ["assert:equals:", "first", "collection", "collectionFirst"],
referencedClasses: []
}),
globals.SequenceableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testFirstN",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$6,$5,$7;
$2=self._collection();
$ctx1.sendIdx["collection"]=1;
$1=_st($2)._first_((2));
$ctx1.sendIdx["first:"]=1;
self._assert_equals_($1,self._collectionFirstTwo());
$ctx1.sendIdx["assert:equals:"]=1;
$4=self._collection();
$ctx1.sendIdx["collection"]=2;
$3=_st($4)._first_((0));
$ctx1.sendIdx["first:"]=2;
self._assert_equals_($3,_st(self._collectionClass())._new());
$ctx1.sendIdx["assert:equals:"]=2;
$6=self._collection();
$ctx1.sendIdx["collection"]=3;
$5=_st($6)._first_(self._collectionSize());
$ctx1.sendIdx["first:"]=3;
$7=self._collection();
$ctx1.sendIdx["collection"]=4;
self._assert_equals_($5,$7);
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._collection())._first_((33));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testFirstN",{},globals.SequenceableCollectionTest)})},
args: [],
source: "testFirstN\x0a\x09self \x0a\x09\x09assert: (self collection first: 2)\x0a\x09\x09equals: self collectionFirstTwo.\x0a\x09\x09\x0a\x09self\x0a\x09\x09assert: (self collection first: 0)\x0a\x09\x09equals: self collectionClass new.\x0a\x09\x09\x0a\x09self\x0a\x09\x09assert: (self collection first: self collectionSize)\x0a\x09\x09equals: self collection.\x0a\x09\x09\x0a\x09self should: [ self collection first: 33 ] raise: Error",
messageSends: ["assert:equals:", "first:", "collection", "collectionFirstTwo", "new", "collectionClass", "collectionSize", "should:raise:"],
referencedClasses: ["Error"]
}),
globals.SequenceableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testFourth",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._collection();
$ctx1.sendIdx["collection"]=1;
$1=_st($2)._fourth();
self._assert_equals_($1,_st(self._collection())._at_((4)));
return self}, function($ctx1) {$ctx1.fill(self,"testFourth",{},globals.SequenceableCollectionTest)})},
args: [],
source: "testFourth\x0a\x09self assert: (self collection fourth) equals: (self collection at: 4)",
messageSends: ["assert:equals:", "fourth", "collection", "at:"],
referencedClasses: []
}),
globals.SequenceableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIndexOfStartingAt",
protocol: 'tests',
fn: function (){
var self=this;
var jsNull;
function $JSON(){return globals.JSON||(typeof JSON=="undefined"?nil:JSON)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3;
jsNull=_st($JSON())._parse_("null");
self._samplesDo_((function(index,value){
return smalltalk.withContext(function($ctx2) {
$2=self._collection();
$ctx2.sendIdx["collection"]=1;
$1=_st($2)._indexOf_startingAt_(value,(1));
$ctx2.sendIdx["indexOf:startingAt:"]=1;
self._assert_equals_($1,index);
$ctx2.sendIdx["assert:equals:"]=1;
$4=self._collection();
$ctx2.sendIdx["collection"]=2;
$3=_st($4)._indexOf_startingAt_(value,index);
$ctx2.sendIdx["indexOf:startingAt:"]=2;
self._assert_equals_($3,index);
$ctx2.sendIdx["assert:equals:"]=2;
return self._assert_equals_(_st(self._collection())._indexOf_startingAt_(value,_st(index).__plus((1))),(0));
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testIndexOfStartingAt",{jsNull:jsNull},globals.SequenceableCollectionTest)})},
args: [],
source: "testIndexOfStartingAt\x0a\x09| jsNull |\x0a\x09jsNull := JSON parse: 'null'.\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09self assert: (self collection indexOf: value startingAt: 1) equals: index.\x0a\x09\x09self assert: (self collection indexOf: value startingAt: index) equals: index.\x0a\x09\x09self assert: (self collection indexOf: value startingAt: index+1) equals: 0 ]",
messageSends: ["parse:", "samplesDo:", "assert:equals:", "indexOf:startingAt:", "collection", "+"],
referencedClasses: ["JSON"]
}),
globals.SequenceableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIndexOfStartingAtWithNull",
protocol: 'tests',
fn: function (){
var self=this;
var jsNull;
function $JSON(){return globals.JSON||(typeof JSON=="undefined"?nil:JSON)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
jsNull=_st($JSON())._parse_("null");
self._samplesDo_((function(index,value){
var collection;
return smalltalk.withContext(function($ctx2) {
collection=self._collection();
collection;
_st(collection)._at_put_(index,jsNull);
$1=_st(collection)._indexOf_startingAt_(jsNull,(1));
$ctx2.sendIdx["indexOf:startingAt:"]=1;
self._assert_equals_($1,index);
$ctx2.sendIdx["assert:equals:"]=1;
$2=_st(collection)._indexOf_startingAt_(jsNull,index);
$ctx2.sendIdx["indexOf:startingAt:"]=2;
self._assert_equals_($2,index);
$ctx2.sendIdx["assert:equals:"]=2;
return self._assert_equals_(_st(collection)._indexOf_startingAt_(jsNull,_st(index).__plus((1))),(0));
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value,collection:collection},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testIndexOfStartingAtWithNull",{jsNull:jsNull},globals.SequenceableCollectionTest)})},
args: [],
source: "testIndexOfStartingAtWithNull\x0a\x09| jsNull |\x0a\x09jsNull := JSON parse: 'null'.\x0a\x09self samplesDo: [ :index :value | | collection |\x0a\x09\x09collection := self collection.\x0a\x09\x09collection at: index put: jsNull.\x0a\x09\x09self assert: (collection indexOf: jsNull startingAt: 1) equals: index.\x0a\x09\x09self assert: (collection indexOf: jsNull startingAt: index) equals: index.\x0a\x09\x09self assert: (collection indexOf: jsNull startingAt: index+1) equals: 0 ]",
messageSends: ["parse:", "samplesDo:", "collection", "at:put:", "assert:equals:", "indexOf:startingAt:", "+"],
referencedClasses: ["JSON"]
}),
globals.SequenceableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLast",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self._collection())._last(),self._collectionLast());
return self}, function($ctx1) {$ctx1.fill(self,"testLast",{},globals.SequenceableCollectionTest)})},
args: [],
source: "testLast\x0a\x09self assert: self collection last equals: self collectionLast",
messageSends: ["assert:equals:", "last", "collection", "collectionLast"],
referencedClasses: []
}),
globals.SequenceableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLastN",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$6,$5,$7;
$2=self._collection();
$ctx1.sendIdx["collection"]=1;
$1=_st($2)._last_((2));
$ctx1.sendIdx["last:"]=1;
self._assert_equals_($1,self._collectionLastTwo());
$ctx1.sendIdx["assert:equals:"]=1;
$4=self._collection();
$ctx1.sendIdx["collection"]=2;
$3=_st($4)._last_((0));
$ctx1.sendIdx["last:"]=2;
self._assert_equals_($3,_st(self._collectionClass())._new());
$ctx1.sendIdx["assert:equals:"]=2;
$6=self._collection();
$ctx1.sendIdx["collection"]=3;
$5=_st($6)._last_(self._collectionSize());
$ctx1.sendIdx["last:"]=3;
$7=self._collection();
$ctx1.sendIdx["collection"]=4;
self._assert_equals_($5,$7);
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._collection())._last_((33));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testLastN",{},globals.SequenceableCollectionTest)})},
args: [],
source: "testLastN\x0a\x09self \x0a\x09\x09assert: (self collection last: 2) \x0a\x09\x09equals: self collectionLastTwo.\x0a\x09\x09\x0a\x09self\x0a\x09\x09assert: (self collection last: 0)\x0a\x09\x09equals: self collectionClass new.\x0a\x0a\x09self\x0a\x09\x09assert: (self collection last: self collectionSize)\x0a\x09\x09equals: self collection.\x0a\x0a\x09self should: [ self collection last: 33 ] raise: Error",
messageSends: ["assert:equals:", "last:", "collection", "collectionLastTwo", "new", "collectionClass", "collectionSize", "should:raise:"],
referencedClasses: ["Error"]
}),
globals.SequenceableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSecond",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._collection();
$ctx1.sendIdx["collection"]=1;
$1=_st($2)._second();
self._assert_equals_($1,_st(self._collection())._at_((2)));
return self}, function($ctx1) {$ctx1.fill(self,"testSecond",{},globals.SequenceableCollectionTest)})},
args: [],
source: "testSecond\x0a\x09self assert: (self collection second) equals: (self collection at: 2)",
messageSends: ["assert:equals:", "second", "collection", "at:"],
referencedClasses: []
}),
globals.SequenceableCollectionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testThird",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._collection();
$ctx1.sendIdx["collection"]=1;
$1=_st($2)._third();
self._assert_equals_($1,_st(self._collection())._at_((3)));
return self}, function($ctx1) {$ctx1.fill(self,"testThird",{},globals.SequenceableCollectionTest)})},
args: [],
source: "testThird\x0a\x09self assert: (self collection third) equals: (self collection at: 3)",
messageSends: ["assert:equals:", "third", "collection", "at:"],
referencedClasses: []
}),
globals.SequenceableCollectionTest);



smalltalk.addClass('ArrayTest', globals.SequenceableCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "collection",
protocol: 'fixture',
fn: function (){
var self=this;
var $1;
$1=[(1), (2), (3), (-4)];
return $1;
},
args: [],
source: "collection\x0a\x09^ #(1 2 3 -4)",
messageSends: [],
referencedClasses: []
}),
globals.ArrayTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionFirst",
protocol: 'fixture',
fn: function (){
var self=this;
return (1);
},
args: [],
source: "collectionFirst\x0a\x09^ 1",
messageSends: [],
referencedClasses: []
}),
globals.ArrayTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionFirstTwo",
protocol: 'fixture',
fn: function (){
var self=this;
var $1;
$1=[(1), (2)];
return $1;
},
args: [],
source: "collectionFirstTwo\x0a\x09^ #(1 2)",
messageSends: [],
referencedClasses: []
}),
globals.ArrayTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionLast",
protocol: 'fixture',
fn: function (){
var self=this;
return (-4);
},
args: [],
source: "collectionLast\x0a\x09^ -4",
messageSends: [],
referencedClasses: []
}),
globals.ArrayTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionLastTwo",
protocol: 'fixture',
fn: function (){
var self=this;
var $1;
$1=[(3), (-4)];
return $1;
},
args: [],
source: "collectionLastTwo\x0a\x09^ #(3 -4)",
messageSends: [],
referencedClasses: []
}),
globals.ArrayTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionOfPrintStrings",
protocol: 'fixture',
fn: function (){
var self=this;
var $1;
$1=["1", "2", "3", "-4"];
return $1;
},
args: [],
source: "collectionOfPrintStrings\x0a\x09^ #('1' '2' '3' '-4')",
messageSends: [],
referencedClasses: []
}),
globals.ArrayTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionSize",
protocol: 'fixture',
fn: function (){
var self=this;
return (4);
},
args: [],
source: "collectionSize\x0a\x09^ 4",
messageSends: [],
referencedClasses: []
}),
globals.ArrayTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionWithDuplicates",
protocol: 'fixture',
fn: function (){
var self=this;
var $1;
$1=["a", "b", "c", (1), (2), (1), "a"];
return $1;
},
args: [],
source: "collectionWithDuplicates\x0a\x09^ #('a' 'b' 'c' 1 2 1 'a')",
messageSends: [],
referencedClasses: []
}),
globals.ArrayTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionWithNewValue",
protocol: 'fixture',
fn: function (){
var self=this;
var $1;
$1=[(1), (2), (3), (-4), "N"];
return $1;
},
args: [],
source: "collectionWithNewValue\x0a\x09^ #(1 2 3 -4 'N')",
messageSends: [],
referencedClasses: []
}),
globals.ArrayTest);

smalltalk.addMethod(
smalltalk.method({
selector: "sampleNewIndex",
protocol: 'fixture',
fn: function (){
var self=this;
return (5);
},
args: [],
source: "sampleNewIndex\x0a\x09^ 5",
messageSends: [],
referencedClasses: []
}),
globals.ArrayTest);

smalltalk.addMethod(
smalltalk.method({
selector: "samplesDo:",
protocol: 'fixture',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.ArrayTest.superclass.fn.prototype._samplesDo_.apply(_st(self), [aBlock]));
$ctx1.supercall = false;
_st(aBlock)._value_value_((3),(3));
return self}, function($ctx1) {$ctx1.fill(self,"samplesDo:",{aBlock:aBlock},globals.ArrayTest)})},
args: ["aBlock"],
source: "samplesDo: aBlock\x0a\x09super samplesDo: aBlock.\x0a\x09aBlock value: 3 value: 3.",
messageSends: ["samplesDo:", "value:value:"],
referencedClasses: []
}),
globals.ArrayTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAdd",
protocol: 'tests',
fn: function (){
var self=this;
var array;
return smalltalk.withContext(function($ctx1) { 
array=self._collection();
_st(array)._add_((6));
self._assert_equals_(_st(array)._last(),(6));
return self}, function($ctx1) {$ctx1.fill(self,"testAdd",{array:array},globals.ArrayTest)})},
args: [],
source: "testAdd \x0a\x09| array | \x0a\x09array := self collection. \x0a\x09array add: 6.\x0a\x09\x0a\x09self assert: array last equals: 6",
messageSends: ["collection", "add:", "assert:equals:", "last"],
referencedClasses: []
}),
globals.ArrayTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAddFirst",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._collection();
_st($1)._addFirst_((0));
$2=_st($1)._yourself();
self._assert_equals_(_st($2)._first(),(0));
return self}, function($ctx1) {$ctx1.fill(self,"testAddFirst",{},globals.ArrayTest)})},
args: [],
source: "testAddFirst\x0a\x09self assert: (self collection addFirst: 0; yourself) first equals: 0",
messageSends: ["assert:equals:", "first", "addFirst:", "collection", "yourself"],
referencedClasses: []
}),
globals.ArrayTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPrintString",
protocol: 'tests',
fn: function (){
var self=this;
var array;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9;
array=_st($Array())._new();
$1=_st(array)._printString();
$ctx1.sendIdx["printString"]=1;
self._assert_equals_($1,"an Array ()");
$ctx1.sendIdx["assert:equals:"]=1;
$2=array;
_st($2)._add_((1));
$ctx1.sendIdx["add:"]=1;
$3=_st($2)._add_((3));
$ctx1.sendIdx["add:"]=2;
$4=_st(array)._printString();
$ctx1.sendIdx["printString"]=2;
self._assert_equals_($4,"an Array (1 3)");
$ctx1.sendIdx["assert:equals:"]=2;
_st(array)._add_("foo");
$5=_st(array)._printString();
$ctx1.sendIdx["printString"]=3;
self._assert_equals_($5,"an Array (1 3 'foo')");
$ctx1.sendIdx["assert:equals:"]=3;
$6=array;
_st($6)._remove_((1));
$ctx1.sendIdx["remove:"]=1;
$7=_st($6)._remove_((3));
$8=_st(array)._printString();
$ctx1.sendIdx["printString"]=4;
self._assert_equals_($8,"an Array ('foo')");
$ctx1.sendIdx["assert:equals:"]=4;
_st(array)._addLast_((3));
$ctx1.sendIdx["addLast:"]=1;
$9=_st(array)._printString();
$ctx1.sendIdx["printString"]=5;
self._assert_equals_($9,"an Array ('foo' 3)");
$ctx1.sendIdx["assert:equals:"]=5;
_st(array)._addLast_((3));
self._assert_equals_(_st(array)._printString(),"an Array ('foo' 3 3)");
return self}, function($ctx1) {$ctx1.fill(self,"testPrintString",{array:array},globals.ArrayTest)})},
args: [],
source: "testPrintString\x0a\x09| array |\x0a\x09array := Array new.\x0a\x09self assert: array printString equals: 'an Array ()'.\x0a\x09array add: 1; add: 3.\x0a\x09self assert: array printString equals: 'an Array (1 3)'.\x0a\x09array add: 'foo'.\x0a\x09self assert: array printString equals: 'an Array (1 3 ''foo'')'.\x0a\x09array remove: 1; remove: 3.\x0a\x09self assert: array printString equals: 'an Array (''foo'')'.\x0a\x09array addLast: 3.\x0a\x09self assert: array printString equals: 'an Array (''foo'' 3)'.\x0a\x09array addLast: 3.\x0a\x09self assert: array printString equals: 'an Array (''foo'' 3 3)'.",
messageSends: ["new", "assert:equals:", "printString", "add:", "remove:", "addLast:"],
referencedClasses: ["Array"]
}),
globals.ArrayTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRemove",
protocol: 'tests',
fn: function (){
var self=this;
var array;
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
array=[(1), (2), (3), (4), (5)];
_st(array)._remove_((3));
$ctx1.sendIdx["remove:"]=1;
self._assert_equals_(array,[(1), (2), (4), (5)]);
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(array)._remove_((3));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testRemove",{array:array},globals.ArrayTest)})},
args: [],
source: "testRemove \x0a\x09| array |\x0a\x09array := #(1 2 3 4 5). \x0a\x09array remove: 3.\x0a\x0a\x09self assert: array equals: #(1 2 4 5).\x0a\x09self should: [ array remove: 3 ] raise: Error",
messageSends: ["remove:", "assert:equals:", "should:raise:"],
referencedClasses: ["Error"]
}),
globals.ArrayTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRemoveFromTo",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=[(1), (2), (3), (4)]._removeFrom_to_((1),(3));
$ctx1.sendIdx["removeFrom:to:"]=1;
self._assert_equals_($1,[(4)]);
$ctx1.sendIdx["assert:equals:"]=1;
$2=[(1), (2), (3), (4)]._removeFrom_to_((2),(3));
$ctx1.sendIdx["removeFrom:to:"]=2;
self._assert_equals_($2,[(1), (4)]);
$ctx1.sendIdx["assert:equals:"]=2;
self._assert_equals_([(1), (2), (3), (4)]._removeFrom_to_((2),(4)),[(1)]);
return self}, function($ctx1) {$ctx1.fill(self,"testRemoveFromTo",{},globals.ArrayTest)})},
args: [],
source: "testRemoveFromTo\x0a\x09\x0a\x09self assert: (#(1 2 3 4) removeFrom: 1 to: 3) equals: #(4).\x0a\x09self assert: (#(1 2 3 4) removeFrom: 2 to: 3) equals: #(1 4).\x0a\x09self assert: (#(1 2 3 4) removeFrom: 2 to: 4) equals: #(1)",
messageSends: ["assert:equals:", "removeFrom:to:"],
referencedClasses: []
}),
globals.ArrayTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRemoveIndex",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=[(1), (2), (3), (4)]._removeIndex_((2));
$ctx1.sendIdx["removeIndex:"]=1;
self._assert_equals_($1,[(1), (3), (4)]);
$ctx1.sendIdx["assert:equals:"]=1;
$2=[(1), (2), (3), (4)]._removeIndex_((1));
$ctx1.sendIdx["removeIndex:"]=2;
self._assert_equals_($2,[(2), (3), (4)]);
$ctx1.sendIdx["assert:equals:"]=2;
self._assert_equals_(["hello"]._removeIndex_((1)),[]);
return self}, function($ctx1) {$ctx1.fill(self,"testRemoveIndex",{},globals.ArrayTest)})},
args: [],
source: "testRemoveIndex\x0a\x09\x0a\x09self assert: (#(1 2 3 4) removeIndex: 2) equals: #(1 3 4).\x0a\x09self assert: (#(1 2 3 4) removeIndex: 1) equals: #(2 3 4).\x0a\x09self assert: (#('hello') removeIndex: 1) equals: #()",
messageSends: ["assert:equals:", "removeIndex:"],
referencedClasses: []
}),
globals.ArrayTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRemoveLast",
protocol: 'tests',
fn: function (){
var self=this;
var array;
return smalltalk.withContext(function($ctx1) { 
array=[(1), (2)];
_st(array)._removeLast();
self._assert_equals_(_st(array)._last(),(1));
return self}, function($ctx1) {$ctx1.fill(self,"testRemoveLast",{array:array},globals.ArrayTest)})},
args: [],
source: "testRemoveLast \x0a\x09| array |\x0a\x09array := #(1 2). \x0a\x09array removeLast.\x0a\x09\x0a\x09self assert: array last equals: 1",
messageSends: ["removeLast", "assert:equals:", "last"],
referencedClasses: []
}),
globals.ArrayTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testReversed",
protocol: 'tests',
fn: function (){
var self=this;
var array;
return smalltalk.withContext(function($ctx1) { 
array=[(5), (4), (3), (2), (1)];
self._assert_equals_(_st(array)._reversed(),[(1), (2), (3), (4), (5)]);
return self}, function($ctx1) {$ctx1.fill(self,"testReversed",{array:array},globals.ArrayTest)})},
args: [],
source: "testReversed\x0a\x09|array|\x0a\x09array := #(5 4 3 2 1). \x0a\x09self assert: (array reversed) equals: #(1 2 3 4 5)",
messageSends: ["assert:equals:", "reversed"],
referencedClasses: []
}),
globals.ArrayTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSort",
protocol: 'tests',
fn: function (){
var self=this;
var array;
return smalltalk.withContext(function($ctx1) { 
array=[(10), (1), (5)];
_st(array)._sort();
self._assert_equals_(array,[(1), (5), (10)]);
return self}, function($ctx1) {$ctx1.fill(self,"testSort",{array:array},globals.ArrayTest)})},
args: [],
source: "testSort\x0a\x09| array |\x0a\x09array := #(10 1 5). \x0a\x09array sort.\x0a\x09self assert: array equals: #(1 5 10)",
messageSends: ["sort", "assert:equals:"],
referencedClasses: []
}),
globals.ArrayTest);


smalltalk.addMethod(
smalltalk.method({
selector: "collectionClass",
protocol: 'fixture',
fn: function (){
var self=this;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return $Array();
},
args: [],
source: "collectionClass\x0a\x09^ Array",
messageSends: [],
referencedClasses: ["Array"]
}),
globals.ArrayTest.klass);


smalltalk.addClass('StringTest', globals.SequenceableCollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "collection",
protocol: 'fixture',
fn: function (){
var self=this;
return "helLo";
},
args: [],
source: "collection\x0a\x09^ 'helLo'",
messageSends: [],
referencedClasses: []
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionFirst",
protocol: 'fixture',
fn: function (){
var self=this;
return "h";
},
args: [],
source: "collectionFirst\x0a\x09^ 'h'",
messageSends: [],
referencedClasses: []
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionFirstTwo",
protocol: 'fixture',
fn: function (){
var self=this;
return "he";
},
args: [],
source: "collectionFirstTwo\x0a\x09^ 'he'",
messageSends: [],
referencedClasses: []
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionLast",
protocol: 'fixture',
fn: function (){
var self=this;
return "o";
},
args: [],
source: "collectionLast\x0a\x09^ 'o'",
messageSends: [],
referencedClasses: []
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionLastTwo",
protocol: 'fixture',
fn: function (){
var self=this;
return "Lo";
},
args: [],
source: "collectionLastTwo\x0a\x09^ 'Lo'",
messageSends: [],
referencedClasses: []
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionOfPrintStrings",
protocol: 'fixture',
fn: function (){
var self=this;
return "'h''e''l''L''o'";
},
args: [],
source: "collectionOfPrintStrings\x0a\x09^ '''h''''e''''l''''L''''o'''",
messageSends: [],
referencedClasses: []
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionSize",
protocol: 'fixture',
fn: function (){
var self=this;
return (5);
},
args: [],
source: "collectionSize\x0a\x09^ 5",
messageSends: [],
referencedClasses: []
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionWithDuplicates",
protocol: 'fixture',
fn: function (){
var self=this;
return "abbaerte";
},
args: [],
source: "collectionWithDuplicates\x0a\x09^ 'abbaerte'",
messageSends: [],
referencedClasses: []
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionWithNewValue",
protocol: 'fixture',
fn: function (){
var self=this;
return "helLoN";
},
args: [],
source: "collectionWithNewValue\x0a\x09^ 'helLoN'",
messageSends: [],
referencedClasses: []
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "sampleNewValueAsCollection",
protocol: 'fixture',
fn: function (){
var self=this;
return "N";
},
args: [],
source: "sampleNewValueAsCollection\x0a\x09^ 'N'",
messageSends: [],
referencedClasses: []
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "samplesDo:",
protocol: 'fixture',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.StringTest.superclass.fn.prototype._samplesDo_.apply(_st(self), [aBlock]));
$ctx1.supercall = false;
_st(aBlock)._value_value_((3),"l");
return self}, function($ctx1) {$ctx1.fill(self,"samplesDo:",{aBlock:aBlock},globals.StringTest)})},
args: ["aBlock"],
source: "samplesDo: aBlock\x0a\x09super samplesDo: aBlock.\x0a\x09aBlock value: 3 value: 'l'",
messageSends: ["samplesDo:", "value:value:"],
referencedClasses: []
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAddAll",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
$1=self._collection();
$ctx2.sendIdx["collection"]=1;
return _st($1)._addAll_(self._collection());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testAddAll",{},globals.StringTest)})},
args: [],
source: "testAddAll\x0a\x09\x22String instances are read-only\x22\x0a\x09self should: [ self collection addAll: self collection ] raise: Error",
messageSends: ["should:raise:", "addAll:", "collection"],
referencedClasses: ["Error"]
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAddRemove",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return "hello"._add_("a");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$Error());
$ctx1.sendIdx["should:raise:"]=1;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return "hello"._remove_("h");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testAddRemove",{},globals.StringTest)})},
args: [],
source: "testAddRemove\x0a\x09self should: [ 'hello' add: 'a' ] raise: Error.\x0a\x09self should: [ 'hello' remove: 'h' ] raise: Error",
messageSends: ["should:raise:", "add:", "remove:"],
referencedClasses: ["Error"]
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAsArray",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_("hello"._asArray(),["h", "e", "l", "l", "o"]);
return self}, function($ctx1) {$ctx1.fill(self,"testAsArray",{},globals.StringTest)})},
args: [],
source: "testAsArray\x0a\x09self assert: 'hello' asArray equals: #('h' 'e' 'l' 'l' 'o').",
messageSends: ["assert:equals:", "asArray"],
referencedClasses: []
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAsLowerCase",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_("JACKIE"._asLowercase(),"jackie");
return self}, function($ctx1) {$ctx1.fill(self,"testAsLowerCase",{},globals.StringTest)})},
args: [],
source: "testAsLowerCase\x0a\x09self assert: 'JACKIE' asLowercase equals: 'jackie'.",
messageSends: ["assert:equals:", "asLowercase"],
referencedClasses: []
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAsNumber",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1="3"._asNumber();
$ctx1.sendIdx["asNumber"]=1;
self._assert_equals_($1,(3));
$ctx1.sendIdx["assert:equals:"]=1;
$2="-3"._asNumber();
$ctx1.sendIdx["asNumber"]=2;
self._assert_equals_($2,(-3));
$ctx1.sendIdx["assert:equals:"]=2;
self._assert_equals_("-1.5"._asNumber(),(-1.5));
return self}, function($ctx1) {$ctx1.fill(self,"testAsNumber",{},globals.StringTest)})},
args: [],
source: "testAsNumber\x0a\x09self assert: '3' asNumber equals: 3.\x0a\x09self assert: '-3' asNumber equals: -3.\x0a\x09self assert: '-1.5' asNumber equals: -1.5.",
messageSends: ["assert:equals:", "asNumber"],
referencedClasses: []
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAsUpperCase",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_("jackie"._asUppercase(),"JACKIE");
return self}, function($ctx1) {$ctx1.fill(self,"testAsUpperCase",{},globals.StringTest)})},
args: [],
source: "testAsUpperCase\x0a\x09self assert: 'jackie' asUppercase equals: 'JACKIE'.",
messageSends: ["assert:equals:", "asUppercase"],
referencedClasses: []
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAsciiValue",
protocol: 'tests',
fn: function (){
var self=this;
var characterA,characterU;
return smalltalk.withContext(function($ctx1) { 
var $1;
characterA="A";
characterU="U";
$1=_st(characterA)._asciiValue();
$ctx1.sendIdx["asciiValue"]=1;
self._assert_equals_($1,(65));
$ctx1.sendIdx["assert:equals:"]=1;
self._assert_equals_(_st(characterU)._asciiValue(),(85));
return self}, function($ctx1) {$ctx1.fill(self,"testAsciiValue",{characterA:characterA,characterU:characterU},globals.StringTest)})},
args: [],
source: "testAsciiValue\x0a    | characterA characterU |\x0a    characterA := 'A'.\x0a    characterU := 'U'.\x0a    self assert: (characterA asciiValue) equals:65.\x0a    self assert: (characterU asciiValue) equals:85",
messageSends: ["assert:equals:", "asciiValue"],
referencedClasses: []
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAtIfAbsentPut",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return "hello"._at_ifAbsentPut_((6),(function(){
return "a";
}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testAtIfAbsentPut",{},globals.StringTest)})},
args: [],
source: "testAtIfAbsentPut\x0a\x09\x22String instances are read-only\x22\x0a\x09self should: [ 'hello' at: 6 ifAbsentPut: [ 'a' ] ] raise: Error",
messageSends: ["should:raise:", "at:ifAbsentPut:"],
referencedClasses: ["Error"]
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAtPut",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return "hello"._at_put_((1),"a");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testAtPut",{},globals.StringTest)})},
args: [],
source: "testAtPut\x0a\x09\x22String instances are read-only\x22\x0a\x09self should: [ 'hello' at: 1 put: 'a' ] raise: Error",
messageSends: ["should:raise:", "at:put:"],
referencedClasses: ["Error"]
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCapitalized",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1="test"._capitalized();
$ctx1.sendIdx["capitalized"]=1;
self._assert_equals_($1,"Test");
$ctx1.sendIdx["assert:equals:"]=1;
$2="Test"._capitalized();
$ctx1.sendIdx["capitalized"]=2;
self._assert_equals_($2,"Test");
$ctx1.sendIdx["assert:equals:"]=2;
self._assert_equals_(""._capitalized(),"");
$ctx1.sendIdx["assert:equals:"]=3;
$3="Test"._isCapitalized();
$ctx1.sendIdx["isCapitalized"]=1;
self._assert_equals_($3,true);
$ctx1.sendIdx["assert:equals:"]=4;
self._assert_equals_("test"._isCapitalized(),false);
return self}, function($ctx1) {$ctx1.fill(self,"testCapitalized",{},globals.StringTest)})},
args: [],
source: "testCapitalized\x0a\x09self assert: 'test' capitalized equals: 'Test'.\x0a\x09self assert: 'Test' capitalized equals: 'Test'.\x0a\x09self assert: '' capitalized equals: ''.\x0a\x09self assert: 'Test' isCapitalized equals: true.\x0a\x09self assert: 'test' isCapitalized equals: false.",
messageSends: ["assert:equals:", "capitalized", "isCapitalized"],
referencedClasses: []
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCharCodeAt",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1="jackie"._charCodeAt_((1));
$ctx1.sendIdx["charCodeAt:"]=1;
self._assert_equals_($1,(106));
$ctx1.sendIdx["assert:equals:"]=1;
$2="jackie"._charCodeAt_((2));
$ctx1.sendIdx["charCodeAt:"]=2;
self._assert_equals_($2,(97));
$ctx1.sendIdx["assert:equals:"]=2;
$3="jackie"._charCodeAt_((3));
$ctx1.sendIdx["charCodeAt:"]=3;
self._assert_equals_($3,(99));
$ctx1.sendIdx["assert:equals:"]=3;
$4="jackie"._charCodeAt_((4));
$ctx1.sendIdx["charCodeAt:"]=4;
self._assert_equals_($4,(107));
$ctx1.sendIdx["assert:equals:"]=4;
$5="jackie"._charCodeAt_((5));
$ctx1.sendIdx["charCodeAt:"]=5;
self._assert_equals_($5,(105));
$ctx1.sendIdx["assert:equals:"]=5;
self._assert_equals_("jackie"._charCodeAt_((6)),(101));
return self}, function($ctx1) {$ctx1.fill(self,"testCharCodeAt",{},globals.StringTest)})},
args: [],
source: "testCharCodeAt\x0a\x09self assert: ('jackie' charCodeAt:1) equals: 106.\x0a\x09self assert: ('jackie' charCodeAt:2) equals: 97.\x0a\x09self assert: ('jackie' charCodeAt:3) equals: 99.\x0a\x09self assert: ('jackie' charCodeAt:4) equals: 107.\x0a\x09self assert: ('jackie' charCodeAt:5) equals: 105.\x0a\x09self assert: ('jackie' charCodeAt:6) equals: 101",
messageSends: ["assert:equals:", "charCodeAt:"],
referencedClasses: []
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCopyFromTo",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1="jackie"._copyFrom_to_((1),(3));
$ctx1.sendIdx["copyFrom:to:"]=1;
self._assert_equals_($1,"jac");
$ctx1.sendIdx["assert:equals:"]=1;
self._assert_equals_("jackie"._copyFrom_to_((4),(6)),"kie");
return self}, function($ctx1) {$ctx1.fill(self,"testCopyFromTo",{},globals.StringTest)})},
args: [],
source: "testCopyFromTo\x0a\x09self assert: ('jackie' copyFrom: 1 to: 3) equals: 'jac'.\x0a\x09self assert: ('jackie' copyFrom: 4 to: 6) equals: 'kie'.",
messageSends: ["assert:equals:", "copyFrom:to:"],
referencedClasses: []
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCopyWithoutAll",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_("*hello* *world*"._copyWithoutAll_("*"),"hello world");
return self}, function($ctx1) {$ctx1.fill(self,"testCopyWithoutAll",{},globals.StringTest)})},
args: [],
source: "testCopyWithoutAll\x0a\x09self\x0a\x09\x09assert: ('*hello* *world*' copyWithoutAll: '*')\x0a\x09\x09equals: 'hello world'",
messageSends: ["assert:equals:", "copyWithoutAll:"],
referencedClasses: []
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testEquality",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
self._assert_equals_("hello","hello");
$ctx1.sendIdx["assert:equals:"]=1;
$1="hello".__eq("world");
$ctx1.sendIdx["="]=1;
self._deny_($1);
$ctx1.sendIdx["deny:"]=1;
$2="hello".__eq([]._at_ifAbsent_((1),(function(){
})));
$ctx1.sendIdx["="]=2;
self._deny_($2);
$ctx1.sendIdx["deny:"]=2;
$3="hello"._yourself();
$ctx1.sendIdx["yourself"]=1;
self._assert_equals_("hello",$3);
$ctx1.sendIdx["assert:equals:"]=2;
self._assert_equals_("hello"._yourself(),"hello");
self._deny_("".__eq((0)));
return self}, function($ctx1) {$ctx1.fill(self,"testEquality",{},globals.StringTest)})},
args: [],
source: "testEquality\x0a\x09self assert: 'hello' equals: 'hello'.\x0a\x09self deny: 'hello' = 'world'.\x0a\x09\x0a\x09\x22Test for issue 459\x22\x0a\x09self deny: 'hello' = (#() at: 1 ifAbsent: [ ]).\x0a\x0a\x09self assert: 'hello' equals: 'hello' yourself.\x0a\x09self assert: 'hello' yourself equals: 'hello'.\x0a\x0a\x09\x22test JS falsy value\x22\x0a\x09self deny: '' = 0",
messageSends: ["assert:equals:", "deny:", "=", "at:ifAbsent:", "yourself"],
referencedClasses: []
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIdentity",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$5;
$1="hello".__eq_eq("hello");
$ctx1.sendIdx["=="]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
$2="hello".__eq_eq("world");
$ctx1.sendIdx["=="]=2;
self._deny_($2);
$ctx1.sendIdx["deny:"]=1;
$4="hello"._yourself();
$ctx1.sendIdx["yourself"]=1;
$3="hello".__eq_eq($4);
$ctx1.sendIdx["=="]=3;
self._assert_($3);
$ctx1.sendIdx["assert:"]=2;
$5=_st("hello"._yourself()).__eq_eq("hello");
$ctx1.sendIdx["=="]=4;
self._assert_($5);
self._deny_("".__eq_eq((0)));
return self}, function($ctx1) {$ctx1.fill(self,"testIdentity",{},globals.StringTest)})},
args: [],
source: "testIdentity\x0a\x09self assert: 'hello' == 'hello'.\x0a\x09self deny: 'hello' == 'world'.\x0a\x0a\x09self assert: 'hello' == 'hello' yourself.\x0a\x09self assert: 'hello' yourself == 'hello'.\x0a\x0a\x09\x22test JS falsy value\x22\x0a\x09self deny: '' == 0",
messageSends: ["assert:", "==", "deny:", "yourself"],
referencedClasses: []
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIdentityHash",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3;
$1="foo"._identityHash();
$ctx1.sendIdx["identityHash"]=1;
$2="foo"._identityHash();
$ctx1.sendIdx["identityHash"]=2;
self._assert_equals_($1,$2);
$4="foo"._identityHash();
$ctx1.sendIdx["identityHash"]=3;
$3=_st($4).__eq("bar"._identityHash());
self._deny_($3);
return self}, function($ctx1) {$ctx1.fill(self,"testIdentityHash",{},globals.StringTest)})},
args: [],
source: "testIdentityHash\x0a\x09self assert: 'foo' identityHash equals: 'foo' identityHash.\x0a\x09self deny: ('foo' identityHash = 'bar' identityHash)",
messageSends: ["assert:equals:", "identityHash", "deny:", "="],
referencedClasses: []
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIncludesSubString",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1="amber"._includesSubString_("ber");
$ctx1.sendIdx["includesSubString:"]=1;
self._assert_($1);
self._deny_("amber"._includesSubString_("zork"));
return self}, function($ctx1) {$ctx1.fill(self,"testIncludesSubString",{},globals.StringTest)})},
args: [],
source: "testIncludesSubString\x0a\x09self assert: ('amber' includesSubString: 'ber').\x0a\x09self deny: ('amber' includesSubString: 'zork').",
messageSends: ["assert:", "includesSubString:", "deny:"],
referencedClasses: []
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIndexOfStartingAtWithNull",
protocol: 'tests',
fn: function (){
var self=this;
return self},
args: [],
source: "testIndexOfStartingAtWithNull\x0a\x09\x22String cannot hold JS null\x22",
messageSends: [],
referencedClasses: []
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIndexOfWithNull",
protocol: 'tests',
fn: function (){
var self=this;
return self},
args: [],
source: "testIndexOfWithNull\x0a\x09\x22String cannot hold JS null\x22",
messageSends: [],
referencedClasses: []
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIsVowel",
protocol: 'tests',
fn: function (){
var self=this;
var vowel,consonant;
return smalltalk.withContext(function($ctx1) { 
var $1;
vowel="u";
consonant="z";
$1=_st(vowel)._isVowel();
$ctx1.sendIdx["isVowel"]=1;
self._assert_equals_($1,true);
$ctx1.sendIdx["assert:equals:"]=1;
self._assert_equals_(_st(consonant)._isVowel(),false);
return self}, function($ctx1) {$ctx1.fill(self,"testIsVowel",{vowel:vowel,consonant:consonant},globals.StringTest)})},
args: [],
source: "testIsVowel\x0a    |vowel consonant|\x0a    vowel := 'u'.\x0a    consonant := 'z'.\x0a    self assert: vowel isVowel equals: true.\x0a    self assert: consonant isVowel equals: false",
messageSends: ["assert:equals:", "isVowel"],
referencedClasses: []
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testJoin",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(","._join_(["hello", "world"]),"hello,world");
return self}, function($ctx1) {$ctx1.fill(self,"testJoin",{},globals.StringTest)})},
args: [],
source: "testJoin\x0a\x09self assert: (',' join: #('hello' 'world')) equals: 'hello,world'",
messageSends: ["assert:equals:", "join:"],
referencedClasses: []
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRemoveAll",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._collection())._removeAll();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testRemoveAll",{},globals.StringTest)})},
args: [],
source: "testRemoveAll\x0a\x09self should: [ self collection removeAll ] raise: Error",
messageSends: ["should:raise:", "removeAll", "collection"],
referencedClasses: ["Error"]
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testReversed",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_("jackiechan"._reversed(),"nahceikcaj");
return self}, function($ctx1) {$ctx1.fill(self,"testReversed",{},globals.StringTest)})},
args: [],
source: "testReversed\x0a\x09self assert: 'jackiechan' reversed equals: 'nahceikcaj'.",
messageSends: ["assert:equals:", "reversed"],
referencedClasses: []
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testStreamContents",
protocol: 'tests',
fn: function (){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self._assert_equals_(_st($String())._streamContents_((function(aStream){
return smalltalk.withContext(function($ctx2) {
_st(aStream)._nextPutAll_("hello");
$ctx2.sendIdx["nextPutAll:"]=1;
_st(aStream)._space();
$1=_st(aStream)._nextPutAll_("world");
return $1;
}, function($ctx2) {$ctx2.fillBlock({aStream:aStream},$ctx1,1)})})),"hello world");
return self}, function($ctx1) {$ctx1.fill(self,"testStreamContents",{},globals.StringTest)})},
args: [],
source: "testStreamContents\x0a\x09self\x0a\x09\x09assert: (String streamContents: [ :aStream |\x0a\x09\x09\x09aStream\x0a\x09\x09\x09\x09nextPutAll: 'hello'; space;\x0a\x09\x09\x09\x09nextPutAll: 'world' ])\x0a\x09\x09equals: 'hello world'",
messageSends: ["assert:equals:", "streamContents:", "nextPutAll:", "space"],
referencedClasses: ["String"]
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSubStrings",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_("jackiechan"._subStrings_("ie"),["jack", "chan"]);
return self}, function($ctx1) {$ctx1.fill(self,"testSubStrings",{},globals.StringTest)})},
args: [],
source: "testSubStrings\x0a\x09self assert: ('jackiechan' subStrings: 'ie') equals: #( 'jack' 'chan' ).",
messageSends: ["assert:equals:", "subStrings:"],
referencedClasses: []
}),
globals.StringTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTrim",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_("       jackie"._trimLeft(),"jackie");
$ctx1.sendIdx["assert:equals:"]=1;
self._assert_equals_("jackie               "._trimRight(),"jackie");
return self}, function($ctx1) {$ctx1.fill(self,"testTrim",{},globals.StringTest)})},
args: [],
source: "testTrim\x0a\x09self assert: '       jackie' trimLeft equals: 'jackie'.\x0a\x09self assert: 'jackie               ' trimRight equals: 'jackie'.",
messageSends: ["assert:equals:", "trimLeft", "trimRight"],
referencedClasses: []
}),
globals.StringTest);


smalltalk.addMethod(
smalltalk.method({
selector: "collectionClass",
protocol: 'fixture',
fn: function (){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
return $String();
},
args: [],
source: "collectionClass\x0a\x09^ String",
messageSends: [],
referencedClasses: ["String"]
}),
globals.StringTest.klass);


smalltalk.addClass('SetTest', globals.CollectionTest, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "collection",
protocol: 'fixture',
fn: function (){
var self=this;
function $Set(){return globals.Set||(typeof Set=="undefined"?nil:Set)}
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Set())._new();
_st($2)._add_($Smalltalk());
$ctx1.sendIdx["add:"]=1;
_st($2)._add_(nil);
$ctx1.sendIdx["add:"]=2;
_st($2)._add_((3).__at((3)));
$ctx1.sendIdx["add:"]=3;
_st($2)._add_(false);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"collection",{},globals.SetTest)})},
args: [],
source: "collection\x0a\x09^ Set new\x0a\x09\x09add: Smalltalk;\x0a\x09\x09add: nil;\x0a\x09\x09add: 3@3;\x0a\x09\x09add: false;\x0a\x09\x09yourself",
messageSends: ["add:", "new", "@", "yourself"],
referencedClasses: ["Set", "Smalltalk"]
}),
globals.SetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionOfPrintStrings",
protocol: 'fixture',
fn: function (){
var self=this;
function $Set(){return globals.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Set())._new();
_st($2)._add_("a SmalltalkImage");
$ctx1.sendIdx["add:"]=1;
_st($2)._add_("nil");
$ctx1.sendIdx["add:"]=2;
_st($2)._add_("3@3");
$ctx1.sendIdx["add:"]=3;
_st($2)._add_("false");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionOfPrintStrings",{},globals.SetTest)})},
args: [],
source: "collectionOfPrintStrings\x0a\x09^ Set new\x0a\x09\x09add: 'a SmalltalkImage';\x0a\x09\x09add: 'nil';\x0a\x09\x09add: '3@3';\x0a\x09\x09add: 'false';\x0a\x09\x09yourself",
messageSends: ["add:", "new", "yourself"],
referencedClasses: ["Set"]
}),
globals.SetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionSize",
protocol: 'fixture',
fn: function (){
var self=this;
return (4);
},
args: [],
source: "collectionSize\x0a\x09^ 4",
messageSends: [],
referencedClasses: []
}),
globals.SetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionWithDuplicates",
protocol: 'fixture',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._collection();
_st($2)._add_((0));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionWithDuplicates",{},globals.SetTest)})},
args: [],
source: "collectionWithDuplicates\x0a\x09\x22Set has no duplicates\x22\x0a\x09^ self collection add: 0; yourself",
messageSends: ["add:", "collection", "yourself"],
referencedClasses: []
}),
globals.SetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionWithNewValue",
protocol: 'fixture',
fn: function (){
var self=this;
function $Set(){return globals.Set||(typeof Set=="undefined"?nil:Set)}
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Set())._new();
_st($2)._add_($Smalltalk());
$ctx1.sendIdx["add:"]=1;
_st($2)._add_(nil);
$ctx1.sendIdx["add:"]=2;
_st($2)._add_((3).__at((3)));
$ctx1.sendIdx["add:"]=3;
_st($2)._add_("N");
$ctx1.sendIdx["add:"]=4;
_st($2)._add_(false);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionWithNewValue",{},globals.SetTest)})},
args: [],
source: "collectionWithNewValue\x0a\x09^ Set new\x0a\x09\x09add: Smalltalk;\x0a\x09\x09add: nil;\x0a\x09\x09add: 3@3;\x0a\x09\x09add: 'N';\x0a\x09\x09add: false;\x0a\x09\x09yourself",
messageSends: ["add:", "new", "@", "yourself"],
referencedClasses: ["Set", "Smalltalk"]
}),
globals.SetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAddAll",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$1,$6,$8,$9,$10,$11,$7,$12,$14,$15,$13;
($ctx1.supercall = true, globals.SetTest.superclass.fn.prototype._testAddAll.apply(_st(self), []));
$ctx1.supercall = false;
$2=self._collection();
$ctx1.sendIdx["collection"]=1;
$3=$2;
$4=self._collection();
$ctx1.sendIdx["collection"]=2;
_st($3)._addAll_($4);
$ctx1.sendIdx["addAll:"]=1;
$5=_st($2)._yourself();
$ctx1.sendIdx["yourself"]=1;
$1=$5;
$6=self._collection();
$ctx1.sendIdx["collection"]=3;
self._assert_equals_($1,$6);
$ctx1.sendIdx["assert:equals:"]=1;
$8=self._collection();
$ctx1.sendIdx["collection"]=4;
$9=$8;
$10=self._collectionWithNewValue();
$ctx1.sendIdx["collectionWithNewValue"]=1;
_st($9)._addAll_($10);
$ctx1.sendIdx["addAll:"]=2;
$11=_st($8)._yourself();
$ctx1.sendIdx["yourself"]=2;
$7=$11;
$12=self._collectionWithNewValue();
$ctx1.sendIdx["collectionWithNewValue"]=2;
self._assert_equals_($7,$12);
$ctx1.sendIdx["assert:equals:"]=2;
$14=self._collectionWithNewValue();
$ctx1.sendIdx["collectionWithNewValue"]=3;
_st($14)._addAll_(self._collection());
$15=_st($14)._yourself();
$13=$15;
self._assert_equals_($13,self._collectionWithNewValue());
return self}, function($ctx1) {$ctx1.fill(self,"testAddAll",{},globals.SetTest)})},
args: [],
source: "testAddAll\x0a\x09super testAddAll.\x0a\x09self assert: (self collection addAll: self collection; yourself) equals: self collection.\x0a\x09self assert: (self collection addAll: self collectionWithNewValue; yourself) equals: self collectionWithNewValue.\x0a\x09self assert: (self collectionWithNewValue addAll: self collection; yourself) equals: self collectionWithNewValue",
messageSends: ["testAddAll", "assert:equals:", "addAll:", "collection", "yourself", "collectionWithNewValue"],
referencedClasses: []
}),
globals.SetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAddRemove",
protocol: 'tests',
fn: function (){
var self=this;
var set;
function $Set(){return globals.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
set=_st($Set())._new();
self._assert_(_st(set)._isEmpty());
$ctx1.sendIdx["assert:"]=1;
_st(set)._add_((3));
$ctx1.sendIdx["add:"]=1;
$1=_st(set)._includes_((3));
$ctx1.sendIdx["includes:"]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=2;
_st(set)._add_((5));
$2=_st(set)._includes_((5));
$ctx1.sendIdx["includes:"]=2;
self._assert_($2);
_st(set)._remove_((3));
self._deny_(_st(set)._includes_((3)));
return self}, function($ctx1) {$ctx1.fill(self,"testAddRemove",{set:set},globals.SetTest)})},
args: [],
source: "testAddRemove\x0a\x09| set |\x0a\x09set := Set new.\x0a\x09\x0a\x09self assert: set isEmpty.\x0a\x0a\x09set add: 3.\x0a\x09self assert: (set includes: 3).\x0a\x0a\x09set add: 5.\x0a\x09self assert: (set includes: 5).\x0a\x0a\x09set remove: 3.\x0a\x09self deny: (set includes: 3)",
messageSends: ["new", "assert:", "isEmpty", "add:", "includes:", "remove:", "deny:"],
referencedClasses: ["Set"]
}),
globals.SetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAt",
protocol: 'tests',
fn: function (){
var self=this;
function $Set(){return globals.Set||(typeof Set=="undefined"?nil:Set)}
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st($Set())._new())._at_put_((1),(2));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testAt",{},globals.SetTest)})},
args: [],
source: "testAt\x0a\x09self should: [ Set new at: 1 put: 2 ] raise: Error",
messageSends: ["should:raise:", "at:put:", "new"],
referencedClasses: ["Set", "Error"]
}),
globals.SetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCollect",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
($ctx1.supercall = true, globals.SetTest.superclass.fn.prototype._testCollect.apply(_st(self), []));
$ctx1.supercall = false;
$2=[(5), (6), (8)]._asSet();
$ctx1.sendIdx["asSet"]=1;
$1=_st($2)._collect_((function(x){
return smalltalk.withContext(function($ctx2) {
return _st(x).__backslash_backslash((3));
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)})}));
self._assert_equals_($1,[(0), (2)]._asSet());
return self}, function($ctx1) {$ctx1.fill(self,"testCollect",{},globals.SetTest)})},
args: [],
source: "testCollect\x0a\x09super testCollect.\x0a\x09self assert: (#(5 6 8) asSet collect: [ :x | x \x5c\x5c 3 ]) equals: #(0 2) asSet",
messageSends: ["testCollect", "assert:equals:", "collect:", "asSet", "\x5c\x5c"],
referencedClasses: []
}),
globals.SetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testComma",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1,$4,$6,$7,$5,$8,$10,$9;
($ctx1.supercall = true, globals.SetTest.superclass.fn.prototype._testComma.apply(_st(self), []));
$ctx1.supercall = false;
$2=self._collection();
$ctx1.sendIdx["collection"]=1;
$3=self._collection();
$ctx1.sendIdx["collection"]=2;
$1=_st($2).__comma($3);
$ctx1.sendIdx[","]=1;
$4=self._collection();
$ctx1.sendIdx["collection"]=3;
self._assert_equals_($1,$4);
$ctx1.sendIdx["assert:equals:"]=1;
$6=self._collection();
$ctx1.sendIdx["collection"]=4;
$7=self._collectionWithNewValue();
$ctx1.sendIdx["collectionWithNewValue"]=1;
$5=_st($6).__comma($7);
$ctx1.sendIdx[","]=2;
$8=self._collectionWithNewValue();
$ctx1.sendIdx["collectionWithNewValue"]=2;
self._assert_equals_($5,$8);
$ctx1.sendIdx["assert:equals:"]=2;
$10=self._collectionWithNewValue();
$ctx1.sendIdx["collectionWithNewValue"]=3;
$9=_st($10).__comma(self._collection());
self._assert_equals_($9,self._collectionWithNewValue());
return self}, function($ctx1) {$ctx1.fill(self,"testComma",{},globals.SetTest)})},
args: [],
source: "testComma\x0a\x09super testComma.\x0a\x09self assert: self collection, self collection equals: self collection.\x0a\x09self assert: self collection, self collectionWithNewValue equals: self collectionWithNewValue.\x0a\x09self assert: self collectionWithNewValue, self collection equals: self collectionWithNewValue",
messageSends: ["testComma", "assert:equals:", ",", "collection", "collectionWithNewValue"],
referencedClasses: []
}),
globals.SetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testComparing",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$6,$7,$5,$9,$8;
$1=[(0), (2)]._asSet();
$ctx1.sendIdx["asSet"]=1;
$2=[(0), (2)]._asSet();
$ctx1.sendIdx["asSet"]=2;
self._assert_equals_($1,$2);
$ctx1.sendIdx["assert:equals:"]=1;
$3=[(2), (0)]._asSet();
$ctx1.sendIdx["asSet"]=3;
$4=[(0), (2)]._asSet();
$ctx1.sendIdx["asSet"]=4;
self._assert_equals_($3,$4);
$6=[(0), (2), (3)]._asSet();
$ctx1.sendIdx["asSet"]=5;
$7=[(0), (2)]._asSet();
$ctx1.sendIdx["asSet"]=6;
$5=_st($6).__eq($7);
$ctx1.sendIdx["="]=1;
self._deny_($5);
$ctx1.sendIdx["deny:"]=1;
$9=[(1), (2)]._asSet();
$ctx1.sendIdx["asSet"]=7;
$8=_st($9).__eq([(0), (2)]._asSet());
self._deny_($8);
return self}, function($ctx1) {$ctx1.fill(self,"testComparing",{},globals.SetTest)})},
args: [],
source: "testComparing\x0a\x09self assert: #(0 2) asSet equals: #(0 2) asSet.\x0a\x09self assert: #(2 0) asSet equals: #(0 2) asSet.\x0a\x09self deny: #(0 2 3) asSet = #(0 2) asSet.\x0a\x09self deny: #(1 2) asSet = #(0 2) asSet",
messageSends: ["assert:equals:", "asSet", "deny:", "="],
referencedClasses: []
}),
globals.SetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPrintString",
protocol: 'tests',
fn: function (){
var self=this;
var set;
function $Set(){return globals.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9;
set=_st($Set())._new();
$1=_st(set)._printString();
$ctx1.sendIdx["printString"]=1;
self._assert_equals_($1,"a Set ()");
$ctx1.sendIdx["assert:equals:"]=1;
$2=set;
_st($2)._add_((1));
$ctx1.sendIdx["add:"]=1;
$3=_st($2)._add_((3));
$ctx1.sendIdx["add:"]=2;
$4=_st(set)._printString();
$ctx1.sendIdx["printString"]=2;
self._assert_equals_($4,"a Set (1 3)");
$ctx1.sendIdx["assert:equals:"]=2;
_st(set)._add_("foo");
$ctx1.sendIdx["add:"]=3;
$5=_st(set)._printString();
$ctx1.sendIdx["printString"]=3;
self._assert_equals_($5,"a Set (1 3 'foo')");
$ctx1.sendIdx["assert:equals:"]=3;
$6=set;
_st($6)._remove_((1));
$ctx1.sendIdx["remove:"]=1;
$7=_st($6)._remove_((3));
$8=_st(set)._printString();
$ctx1.sendIdx["printString"]=4;
self._assert_equals_($8,"a Set ('foo')");
$ctx1.sendIdx["assert:equals:"]=4;
_st(set)._add_((3));
$ctx1.sendIdx["add:"]=4;
$9=_st(set)._printString();
$ctx1.sendIdx["printString"]=5;
self._assert_equals_($9,"a Set (3 'foo')");
$ctx1.sendIdx["assert:equals:"]=5;
_st(set)._add_((3));
self._assert_equals_(_st(set)._printString(),"a Set (3 'foo')");
return self}, function($ctx1) {$ctx1.fill(self,"testPrintString",{set:set},globals.SetTest)})},
args: [],
source: "testPrintString\x0a\x09| set |\x0a\x09set := Set new.\x0a\x09self assert: set printString equals: 'a Set ()'.\x0a\x09set add: 1; add: 3.\x0a\x09self assert: set printString equals: 'a Set (1 3)'.\x0a\x09set add: 'foo'.\x0a\x09self assert: set printString equals: 'a Set (1 3 ''foo'')'.\x0a\x09set remove: 1; remove: 3.\x0a\x09self assert: set printString equals: 'a Set (''foo'')'.\x0a\x09set add: 3.\x0a\x09self assert: set printString equals: 'a Set (3 ''foo'')'.\x0a\x09set add: 3.\x0a\x09self assert: set printString equals: 'a Set (3 ''foo'')'",
messageSends: ["new", "assert:equals:", "printString", "add:", "remove:"],
referencedClasses: ["Set"]
}),
globals.SetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testUnboxedObjects",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$1;
$4="foo"._yourself();
$ctx1.sendIdx["yourself"]=1;
$3=[$4,"foo"._yourself()];
$2=_st($3)._asSet();
$1=_st($2)._asArray();
self._assert_equals_($1,["foo"]);
return self}, function($ctx1) {$ctx1.fill(self,"testUnboxedObjects",{},globals.SetTest)})},
args: [],
source: "testUnboxedObjects\x0a\x09self assert: {'foo' yourself. 'foo' yourself} asSet asArray equals: #('foo')",
messageSends: ["assert:equals:", "asArray", "asSet", "yourself"],
referencedClasses: []
}),
globals.SetTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testUnicity",
protocol: 'tests',
fn: function (){
var self=this;
var set;
function $Set(){return globals.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $1;
set=_st($Set())._new();
_st(set)._add_((21));
$ctx1.sendIdx["add:"]=1;
_st(set)._add_("hello");
$ctx1.sendIdx["add:"]=2;
_st(set)._add_((21));
$ctx1.sendIdx["add:"]=3;
$1=_st(set)._size();
$ctx1.sendIdx["size"]=1;
self._assert_equals_($1,(2));
$ctx1.sendIdx["assert:equals:"]=1;
_st(set)._add_("hello");
self._assert_equals_(_st(set)._size(),(2));
$ctx1.sendIdx["assert:equals:"]=2;
self._assert_equals_(_st(set)._asArray(),[(21), "hello"]);
return self}, function($ctx1) {$ctx1.fill(self,"testUnicity",{set:set},globals.SetTest)})},
args: [],
source: "testUnicity\x0a\x09| set |\x0a\x09set := Set new.\x0a\x09set add: 21.\x0a\x09set add: 'hello'.\x0a\x0a\x09set add: 21.\x0a\x09self assert: set size equals: 2.\x0a\x09\x0a\x09set add: 'hello'.\x0a\x09self assert: set size equals: 2.\x0a\x0a\x09self assert: set asArray equals: #(21 'hello')",
messageSends: ["new", "add:", "assert:equals:", "size", "asArray"],
referencedClasses: ["Set"]
}),
globals.SetTest);


smalltalk.addMethod(
smalltalk.method({
selector: "collectionClass",
protocol: 'fixture',
fn: function (){
var self=this;
function $Set(){return globals.Set||(typeof Set=="undefined"?nil:Set)}
return $Set();
},
args: [],
source: "collectionClass\x0a\x09^ Set",
messageSends: [],
referencedClasses: ["Set"]
}),
globals.SetTest.klass);


smalltalk.addClass('ConsoleTranscriptTest', globals.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testShow",
protocol: 'tests',
fn: function (){
var self=this;
var originalTranscript;
function $Transcript(){return globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $ConsoleTranscript(){return globals.ConsoleTranscript||(typeof ConsoleTranscript=="undefined"?nil:ConsoleTranscript)}
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
originalTranscript=_st($Transcript())._current();
_st($Transcript())._register_(_st($ConsoleTranscript())._new());
$ctx1.sendIdx["register:"]=1;
self._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st($Transcript())._show_("Hello console!");
$ctx2.sendIdx["show:"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$Error());
$ctx1.sendIdx["shouldnt:raise:"]=1;
self._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st($Transcript())._show_(console);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}),$Error());
_st($Transcript())._register_(originalTranscript);
return self}, function($ctx1) {$ctx1.fill(self,"testShow",{originalTranscript:originalTranscript},globals.ConsoleTranscriptTest)})},
args: [],
source: "testShow\x0a| originalTranscript |\x0aoriginalTranscript := Transcript current.\x0aTranscript register: ConsoleTranscript new.\x0a\x0aself shouldnt: [ Transcript show: 'Hello console!' ] raise: Error.\x0aself shouldnt: [ Transcript show: console ] raise: Error.\x0a\x0aTranscript register: originalTranscript.",
messageSends: ["current", "register:", "new", "shouldnt:raise:", "show:"],
referencedClasses: ["Transcript", "ConsoleTranscript", "Error"]
}),
globals.ConsoleTranscriptTest);



smalltalk.addClass('JSObjectProxyTest', globals.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "jsObject",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return jsObject = {a: 1, b: function() {return 2;}, c: function(object) {return object;}, d: '', 'e': null, 'f': void 0};
return self}, function($ctx1) {$ctx1.fill(self,"jsObject",{},globals.JSObjectProxyTest)})},
args: [],
source: "jsObject\x0a\x09<return jsObject = {a: 1, b: function() {return 2;}, c: function(object) {return object;}, d: '', 'e': null, 'f': void 0}>",
messageSends: [],
referencedClasses: []
}),
globals.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAtIfAbsent",
protocol: 'tests',
fn: function (){
var self=this;
var testObject;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
testObject=self._jsObject();
$1=_st(testObject)._at_ifAbsent_("abc",(function(){
return "Property does not exist";
}));
$ctx1.sendIdx["at:ifAbsent:"]=1;
self._assert_equals_($1,"Property does not exist");
$ctx1.sendIdx["assert:equals:"]=1;
$2=_st(testObject)._at_ifAbsent_("e",(function(){
return "Property does not exist";
}));
$ctx1.sendIdx["at:ifAbsent:"]=2;
self._assert_equals_($2,nil);
$ctx1.sendIdx["assert:equals:"]=2;
$3=_st(testObject)._at_ifAbsent_("a",(function(){
return "Property does not exist";
}));
$ctx1.sendIdx["at:ifAbsent:"]=3;
self._assert_equals_($3,(1));
$ctx1.sendIdx["assert:equals:"]=3;
self._assert_equals_(_st(testObject)._at_ifAbsent_("f",(function(){
return "Property does not exist";
})),nil);
return self}, function($ctx1) {$ctx1.fill(self,"testAtIfAbsent",{testObject:testObject},globals.JSObjectProxyTest)})},
args: [],
source: "testAtIfAbsent\x0a\x09| testObject |\x0a\x09testObject := self jsObject.\x0a\x09self assert: (testObject at: 'abc' ifAbsent: [ 'Property does not exist' ]) equals: 'Property does not exist'.\x0a\x09self assert: (testObject at: 'e' ifAbsent: [ 'Property does not exist' ]) equals: nil.\x0a\x09self assert: (testObject at: 'a' ifAbsent: [ 'Property does not exist' ]) equals: 1.\x0a\x09self assert: (testObject at: 'f' ifAbsent: [ 'Property does not exist' ]) equals: nil.",
messageSends: ["jsObject", "assert:equals:", "at:ifAbsent:"],
referencedClasses: []
}),
globals.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAtIfPresent",
protocol: 'tests',
fn: function (){
var self=this;
var testObject;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$6,$5;
testObject=self._jsObject();
$1=_st(testObject)._at_ifPresent_("abc",(function(x){
return smalltalk.withContext(function($ctx2) {
$2=_st(x)._asString();
$ctx2.sendIdx["asString"]=1;
return "hello ".__comma($2);
$ctx2.sendIdx[","]=1;
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)})}));
$ctx1.sendIdx["at:ifPresent:"]=1;
self._assert_equals_($1,nil);
$ctx1.sendIdx["assert:equals:"]=1;
$3=_st(testObject)._at_ifPresent_("e",(function(x){
return smalltalk.withContext(function($ctx2) {
$4=_st(x)._asString();
$ctx2.sendIdx["asString"]=2;
return "hello ".__comma($4);
$ctx2.sendIdx[","]=2;
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,2)})}));
$ctx1.sendIdx["at:ifPresent:"]=2;
self._assert_equals_($3,"hello nil");
$ctx1.sendIdx["assert:equals:"]=2;
$5=_st(testObject)._at_ifPresent_("a",(function(x){
return smalltalk.withContext(function($ctx2) {
$6=_st(x)._asString();
$ctx2.sendIdx["asString"]=3;
return "hello ".__comma($6);
$ctx2.sendIdx[","]=3;
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,3)})}));
$ctx1.sendIdx["at:ifPresent:"]=3;
self._assert_equals_($5,"hello 1");
$ctx1.sendIdx["assert:equals:"]=3;
self._assert_equals_(_st(testObject)._at_ifPresent_("f",(function(x){
return smalltalk.withContext(function($ctx2) {
return "hello ".__comma(_st(x)._asString());
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,4)})})),"hello nil");
return self}, function($ctx1) {$ctx1.fill(self,"testAtIfPresent",{testObject:testObject},globals.JSObjectProxyTest)})},
args: [],
source: "testAtIfPresent\x0a\x09| testObject |\x0a\x09\x0a\x09testObject := self jsObject.\x0a\x09\x0a\x09self assert: (testObject at: 'abc' ifPresent: [ :x | 'hello ',x asString ]) equals: nil.\x0a\x09self assert: (testObject at: 'e' ifPresent: [ :x | 'hello ',x asString ]) equals: 'hello nil'.\x0a\x09self assert: (testObject at: 'a' ifPresent: [ :x | 'hello ',x asString ]) equals: 'hello 1'.\x0a\x09self assert: (testObject at: 'f' ifPresent: [ :x | 'hello ',x asString ]) equals: 'hello nil'.",
messageSends: ["jsObject", "assert:equals:", "at:ifPresent:", ",", "asString"],
referencedClasses: []
}),
globals.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAtIfPresentIfAbsent",
protocol: 'tests',
fn: function (){
var self=this;
var testObject;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$6,$5;
testObject=self._jsObject();
$1=_st(testObject)._at_ifPresent_ifAbsent_("abc",(function(x){
return smalltalk.withContext(function($ctx2) {
$2=_st(x)._asString();
$ctx2.sendIdx["asString"]=1;
return "hello ".__comma($2);
$ctx2.sendIdx[","]=1;
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)})}),(function(){
return "not present";
}));
$ctx1.sendIdx["at:ifPresent:ifAbsent:"]=1;
self._assert_equals_($1,"not present");
$ctx1.sendIdx["assert:equals:"]=1;
$3=_st(testObject)._at_ifPresent_ifAbsent_("e",(function(x){
return smalltalk.withContext(function($ctx2) {
$4=_st(x)._asString();
$ctx2.sendIdx["asString"]=2;
return "hello ".__comma($4);
$ctx2.sendIdx[","]=2;
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,3)})}),(function(){
return "not present";
}));
$ctx1.sendIdx["at:ifPresent:ifAbsent:"]=2;
self._assert_equals_($3,"hello nil");
$ctx1.sendIdx["assert:equals:"]=2;
$5=_st(testObject)._at_ifPresent_ifAbsent_("a",(function(x){
return smalltalk.withContext(function($ctx2) {
$6=_st(x)._asString();
$ctx2.sendIdx["asString"]=3;
return "hello ".__comma($6);
$ctx2.sendIdx[","]=3;
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,5)})}),(function(){
return "not present";
}));
$ctx1.sendIdx["at:ifPresent:ifAbsent:"]=3;
self._assert_equals_($5,"hello 1");
$ctx1.sendIdx["assert:equals:"]=3;
self._assert_equals_(_st(testObject)._at_ifPresent_ifAbsent_("f",(function(x){
return smalltalk.withContext(function($ctx2) {
return "hello ".__comma(_st(x)._asString());
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,7)})}),(function(){
return "not present";
})),"hello nil");
return self}, function($ctx1) {$ctx1.fill(self,"testAtIfPresentIfAbsent",{testObject:testObject},globals.JSObjectProxyTest)})},
args: [],
source: "testAtIfPresentIfAbsent\x0a\x09| testObject |\x0a\x09testObject := self jsObject.\x0a\x09self assert: (testObject at: 'abc' ifPresent: [ :x|'hello ',x asString ] ifAbsent: [ 'not present' ]) equals: 'not present'.\x0a\x09self assert: (testObject at: 'e' ifPresent: [ :x|'hello ',x asString ] ifAbsent: [ 'not present' ]) equals: 'hello nil'.\x0a\x09self assert: (testObject at: 'a' ifPresent: [ :x|'hello ',x asString ] ifAbsent: [ 'not present' ]) equals: 'hello 1'.\x0a\x09self assert: (testObject at: 'f' ifPresent: [ :x|'hello ',x asString ] ifAbsent: [ 'not present' ]) equals: 'hello nil'.",
messageSends: ["jsObject", "assert:equals:", "at:ifPresent:ifAbsent:", ",", "asString"],
referencedClasses: []
}),
globals.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAtPut",
protocol: 'tests',
fn: function (){
var self=this;
var testObject;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
testObject=self._jsObject();
$2=_st(testObject)._at_("abc");
$ctx1.sendIdx["at:"]=1;
$1=_st($2).__tild_eq("xyz");
self._assert_($1);
self._assert_equals_(_st(testObject)._at_put_("abc","xyz"),"xyz");
$ctx1.sendIdx["assert:equals:"]=1;
self._assert_equals_(_st(testObject)._at_("abc"),"xyz");
return self}, function($ctx1) {$ctx1.fill(self,"testAtPut",{testObject:testObject},globals.JSObjectProxyTest)})},
args: [],
source: "testAtPut\x0a\x09| testObject |\x0a\x09testObject := self jsObject.\x0a\x09\x0a\x09self assert: (testObject at: 'abc') ~= 'xyz'.\x0a\x09self assert: (testObject at: 'abc' put: 'xyz') equals: 'xyz'.\x0a\x09self assert: (testObject at: 'abc') equals: 'xyz'",
messageSends: ["jsObject", "assert:", "~=", "at:", "assert:equals:", "at:put:"],
referencedClasses: []
}),
globals.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testComparison",
protocol: 'tests',
fn: function (){
var self=this;
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._assert_equals_(_st([console,(2)])._indexOf_(console),(1));
$1=_st(console).__eq(console);
$ctx1.sendIdx["="]=1;
self._assert_($1);
$2=_st(console).__eq(_st($Object())._new());
$ctx1.sendIdx["="]=2;
self._deny_($2);
$ctx1.sendIdx["deny:"]=1;
self._deny_(_st(console).__eq(self._jsObject()));
return self}, function($ctx1) {$ctx1.fill(self,"testComparison",{},globals.JSObjectProxyTest)})},
args: [],
source: "testComparison\x0a\x09self assert: ({ console. 2 } indexOf: console) equals: 1.\x0a\x09self assert: console = console.\x0a\x09self deny: console = Object new.\x0a\x09self deny: console = self jsObject",
messageSends: ["assert:equals:", "indexOf:", "assert:", "=", "deny:", "new", "jsObject"],
referencedClasses: ["Object"]
}),
globals.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDNU",
protocol: 'tests',
fn: function (){
var self=this;
function $MessageNotUnderstood(){return globals.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._jsObject())._foo();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$MessageNotUnderstood());
return self}, function($ctx1) {$ctx1.fill(self,"testDNU",{},globals.JSObjectProxyTest)})},
args: [],
source: "testDNU\x0a\x09self should: [ self jsObject foo ] raise: MessageNotUnderstood",
messageSends: ["should:raise:", "foo", "jsObject"],
referencedClasses: ["MessageNotUnderstood"]
}),
globals.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMessageSend",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3;
$2=self._jsObject();
$ctx1.sendIdx["jsObject"]=1;
$1=_st($2)._a();
self._assert_equals_($1,(1));
$ctx1.sendIdx["assert:equals:"]=1;
$4=self._jsObject();
$ctx1.sendIdx["jsObject"]=2;
$3=_st($4)._b();
self._assert_equals_($3,(2));
$ctx1.sendIdx["assert:equals:"]=2;
self._assert_equals_(_st(self._jsObject())._c_((3)),(3));
return self}, function($ctx1) {$ctx1.fill(self,"testMessageSend",{},globals.JSObjectProxyTest)})},
args: [],
source: "testMessageSend\x0a\x0a\x09self assert: self jsObject a equals: 1.\x0a\x09self assert: self jsObject b equals: 2.\x0a\x09self assert: (self jsObject c: 3) equals: 3",
messageSends: ["assert:equals:", "a", "jsObject", "b", "c:"],
referencedClasses: []
}),
globals.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMethodWithArguments",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self._jsObject())._c_((1)),(1));
return self}, function($ctx1) {$ctx1.fill(self,"testMethodWithArguments",{},globals.JSObjectProxyTest)})},
args: [],
source: "testMethodWithArguments\x0a\x09self assert: (self jsObject c: 1) equals: 1",
messageSends: ["assert:equals:", "c:", "jsObject"],
referencedClasses: []
}),
globals.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPrinting",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self._jsObject())._printString(),"[object Object]");
return self}, function($ctx1) {$ctx1.fill(self,"testPrinting",{},globals.JSObjectProxyTest)})},
args: [],
source: "testPrinting\x0a\x09self assert: self jsObject printString equals: '[object Object]'",
messageSends: ["assert:equals:", "printString", "jsObject"],
referencedClasses: []
}),
globals.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPropertyThatReturnsEmptyString",
protocol: 'tests',
fn: function (){
var self=this;
var object;
return smalltalk.withContext(function($ctx1) { 
var $1;
object=self._jsObject();
$1=_st(object)._d();
$ctx1.sendIdx["d"]=1;
self._assert_equals_($1,"");
$ctx1.sendIdx["assert:equals:"]=1;
_st(object)._d_("hello");
self._assert_equals_(_st(object)._d(),"hello");
return self}, function($ctx1) {$ctx1.fill(self,"testPropertyThatReturnsEmptyString",{object:object},globals.JSObjectProxyTest)})},
args: [],
source: "testPropertyThatReturnsEmptyString\x0a\x09| object |\x0a\x0a\x09object := self jsObject.\x0a\x09self assert: object d equals: ''.\x0a\x0a\x09object d: 'hello'.\x0a\x09self assert: object d equals: 'hello'",
messageSends: ["jsObject", "assert:equals:", "d", "d:"],
referencedClasses: []
}),
globals.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPropertyThatReturnsUndefined",
protocol: 'tests',
fn: function (){
var self=this;
var object;
function $MessageNotUnderstood(){return globals.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
return smalltalk.withContext(function($ctx1) { 
object=self._jsObject();
self._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(object)._e();
$ctx2.sendIdx["e"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$MessageNotUnderstood());
self._assert_(_st(_st(object)._e())._isNil());
return self}, function($ctx1) {$ctx1.fill(self,"testPropertyThatReturnsUndefined",{object:object},globals.JSObjectProxyTest)})},
args: [],
source: "testPropertyThatReturnsUndefined\x0a\x09| object |\x0a\x0a\x09object := self jsObject.\x0a\x09self shouldnt: [ object e ] raise: MessageNotUnderstood.\x0a\x09self assert: object e isNil",
messageSends: ["jsObject", "shouldnt:raise:", "e", "assert:", "isNil"],
referencedClasses: ["MessageNotUnderstood"]
}),
globals.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testValue",
protocol: 'tests',
fn: function (){
var self=this;
var testObject;
return smalltalk.withContext(function($ctx1) { 
testObject=self._jsObject();
_st(testObject)._at_put_("value","aValue");
self._assert_equals_(_st(testObject)._value(),"aValue");
return self}, function($ctx1) {$ctx1.fill(self,"testValue",{testObject:testObject},globals.JSObjectProxyTest)})},
args: [],
source: "testValue\x0a\x09| testObject |\x0a\x09testObject := self jsObject.\x0a\x09testObject at: 'value' put: 'aValue'.\x0a\x09self assert: testObject value equals: 'aValue'",
messageSends: ["jsObject", "at:put:", "assert:equals:", "value"],
referencedClasses: []
}),
globals.JSObjectProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testYourself",
protocol: 'tests',
fn: function (){
var self=this;
var object;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._jsObject();
_st($1)._d_("test");
$2=_st($1)._yourself();
object=$2;
self._assert_equals_(_st(object)._d(),"test");
return self}, function($ctx1) {$ctx1.fill(self,"testYourself",{object:object},globals.JSObjectProxyTest)})},
args: [],
source: "testYourself\x0a\x09| object |\x0a\x09object := self jsObject\x0a\x09\x09d: 'test';\x0a\x09\x09yourself.\x0a\x0a\x09self assert: object d equals: 'test'",
messageSends: ["d:", "jsObject", "yourself", "assert:equals:", "d"],
referencedClasses: []
}),
globals.JSObjectProxyTest);



smalltalk.addClass('JavaScriptExceptionTest', globals.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testCatchingException",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
_st((function(){
return smalltalk.withContext(function($ctx2) {
return self._throwException();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._on_do_($Error(),(function(error){
return smalltalk.withContext(function($ctx2) {
return self._assert_(_st(_st(error)._exception()).__eq("test"));
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testCatchingException",{},globals.JavaScriptExceptionTest)})},
args: [],
source: "testCatchingException\x0a\x09[ self throwException ]\x0a\x09\x09on: Error\x0a\x09\x09do: [ :error |\x0a\x09\x09\x09self assert: error exception = 'test' ]",
messageSends: ["on:do:", "throwException", "assert:", "=", "exception"],
referencedClasses: ["Error"]
}),
globals.JavaScriptExceptionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRaisingException",
protocol: 'tests',
fn: function (){
var self=this;
function $JavaScriptException(){return globals.JavaScriptException||(typeof JavaScriptException=="undefined"?nil:JavaScriptException)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return self._throwException();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$JavaScriptException());
return self}, function($ctx1) {$ctx1.fill(self,"testRaisingException",{},globals.JavaScriptExceptionTest)})},
args: [],
source: "testRaisingException\x0a\x09self should: [ self throwException ] raise: JavaScriptException",
messageSends: ["should:raise:", "throwException"],
referencedClasses: ["JavaScriptException"]
}),
globals.JavaScriptExceptionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "throwException",
protocol: 'helpers',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
throw 'test';
return self}, function($ctx1) {$ctx1.fill(self,"throwException",{},globals.JavaScriptExceptionTest)})},
args: [],
source: "throwException\x0a\x09<throw 'test'>",
messageSends: [],
referencedClasses: []
}),
globals.JavaScriptExceptionTest);



smalltalk.addClass('MessageSendTest', globals.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testValue",
protocol: 'tests',
fn: function (){
var self=this;
var messageSend;
function $MessageSend(){return globals.MessageSend||(typeof MessageSend=="undefined"?nil:MessageSend)}
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($MessageSend())._new();
$ctx1.sendIdx["new"]=1;
_st($1)._receiver_(_st($Object())._new());
_st($1)._selector_("asString");
$2=_st($1)._yourself();
messageSend=$2;
self._assert_equals_(_st(messageSend)._value(),"an Object");
return self}, function($ctx1) {$ctx1.fill(self,"testValue",{messageSend:messageSend},globals.MessageSendTest)})},
args: [],
source: "testValue\x0a\x09| messageSend |\x0a\x09\x0a\x09messageSend := MessageSend new\x0a\x09\x09receiver: Object new;\x0a\x09\x09selector: #asString;\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09self assert: messageSend value equals: 'an Object'",
messageSends: ["receiver:", "new", "selector:", "yourself", "assert:equals:", "value"],
referencedClasses: ["MessageSend", "Object"]
}),
globals.MessageSendTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testValueWithArguments",
protocol: 'tests',
fn: function (){
var self=this;
var messageSend;
function $MessageSend(){return globals.MessageSend||(typeof MessageSend=="undefined"?nil:MessageSend)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($MessageSend())._new();
_st($1)._receiver_((2));
_st($1)._selector_("+");
$2=_st($1)._yourself();
messageSend=$2;
self._assert_equals_(_st(messageSend)._value_((3)),(5));
$ctx1.sendIdx["assert:equals:"]=1;
self._assert_equals_(_st(messageSend)._valueWithPossibleArguments_([(4)]),(6));
return self}, function($ctx1) {$ctx1.fill(self,"testValueWithArguments",{messageSend:messageSend},globals.MessageSendTest)})},
args: [],
source: "testValueWithArguments\x0a\x09| messageSend |\x0a\x09\x0a\x09messageSend := MessageSend new\x0a\x09\x09receiver: 2;\x0a\x09\x09selector: '+';\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09self assert: (messageSend value: 3) equals: 5.\x0a\x09\x0a\x09self assert: (messageSend valueWithPossibleArguments: #(4)) equals: 6",
messageSends: ["receiver:", "new", "selector:", "yourself", "assert:equals:", "value:", "valueWithPossibleArguments:"],
referencedClasses: ["MessageSend"]
}),
globals.MessageSendTest);



smalltalk.addClass('MethodInheritanceTest', globals.TestCase, ['receiverTop', 'receiverMiddle', 'receiverBottom', 'method', 'performBlock'], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "codeGeneratorClass",
protocol: 'accessing',
fn: function (){
var self=this;
function $CodeGenerator(){return globals.CodeGenerator||(typeof CodeGenerator=="undefined"?nil:CodeGenerator)}
return $CodeGenerator();
},
args: [],
source: "codeGeneratorClass\x0a\x09^ CodeGenerator",
messageSends: [],
referencedClasses: ["CodeGenerator"]
}),
globals.MethodInheritanceTest);

smalltalk.addMethod(
smalltalk.method({
selector: "compiler",
protocol: 'factory',
fn: function (){
var self=this;
function $Compiler(){return globals.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Compiler())._new();
_st($2)._codeGeneratorClass_(self._codeGeneratorClass());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"compiler",{},globals.MethodInheritanceTest)})},
args: [],
source: "compiler\x0a\x09^ Compiler new\x0a\x09\x09codeGeneratorClass: self codeGeneratorClass;\x0a\x09\x09yourself",
messageSends: ["codeGeneratorClass:", "new", "codeGeneratorClass", "yourself"],
referencedClasses: ["Compiler"]
}),
globals.MethodInheritanceTest);

smalltalk.addMethod(
smalltalk.method({
selector: "deinstallBottom",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._targetClassBottom())._removeCompiledMethod_(self["@method"]);
return self}, function($ctx1) {$ctx1.fill(self,"deinstallBottom",{},globals.MethodInheritanceTest)})},
args: [],
source: "deinstallBottom\x0a\x09self targetClassBottom removeCompiledMethod: method",
messageSends: ["removeCompiledMethod:", "targetClassBottom"],
referencedClasses: []
}),
globals.MethodInheritanceTest);

smalltalk.addMethod(
smalltalk.method({
selector: "deinstallMiddle",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._targetClassMiddle())._removeCompiledMethod_(self["@method"]);
return self}, function($ctx1) {$ctx1.fill(self,"deinstallMiddle",{},globals.MethodInheritanceTest)})},
args: [],
source: "deinstallMiddle\x0a\x09self targetClassMiddle removeCompiledMethod: method",
messageSends: ["removeCompiledMethod:", "targetClassMiddle"],
referencedClasses: []
}),
globals.MethodInheritanceTest);

smalltalk.addMethod(
smalltalk.method({
selector: "deinstallTop",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._targetClassTop())._removeCompiledMethod_(self["@method"]);
return self}, function($ctx1) {$ctx1.fill(self,"deinstallTop",{},globals.MethodInheritanceTest)})},
args: [],
source: "deinstallTop\x0a\x09self targetClassTop removeCompiledMethod: method",
messageSends: ["removeCompiledMethod:", "targetClassTop"],
referencedClasses: []
}),
globals.MethodInheritanceTest);

smalltalk.addMethod(
smalltalk.method({
selector: "installBottom:",
protocol: 'testing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@method"]=_st(self._compiler())._install_forClass_protocol_(aString,self._targetClassBottom(),"tests");
return self}, function($ctx1) {$ctx1.fill(self,"installBottom:",{aString:aString},globals.MethodInheritanceTest)})},
args: ["aString"],
source: "installBottom: aString\x0a\x09method := self compiler install: aString forClass: self targetClassBottom protocol: 'tests'",
messageSends: ["install:forClass:protocol:", "compiler", "targetClassBottom"],
referencedClasses: []
}),
globals.MethodInheritanceTest);

smalltalk.addMethod(
smalltalk.method({
selector: "installMiddle:",
protocol: 'testing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@method"]=_st(self._compiler())._install_forClass_protocol_(aString,self._targetClassMiddle(),"tests");
return self}, function($ctx1) {$ctx1.fill(self,"installMiddle:",{aString:aString},globals.MethodInheritanceTest)})},
args: ["aString"],
source: "installMiddle: aString\x0a\x09method := self compiler install: aString forClass: self targetClassMiddle protocol: 'tests'",
messageSends: ["install:forClass:protocol:", "compiler", "targetClassMiddle"],
referencedClasses: []
}),
globals.MethodInheritanceTest);

smalltalk.addMethod(
smalltalk.method({
selector: "installTop:",
protocol: 'testing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@method"]=_st(self._compiler())._install_forClass_protocol_(aString,self._targetClassTop(),"tests");
return self}, function($ctx1) {$ctx1.fill(self,"installTop:",{aString:aString},globals.MethodInheritanceTest)})},
args: ["aString"],
source: "installTop: aString\x0a\x09method := self compiler install: aString forClass: self targetClassTop protocol: 'tests'",
messageSends: ["install:forClass:protocol:", "compiler", "targetClassTop"],
referencedClasses: []
}),
globals.MethodInheritanceTest);

smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@receiverTop"]=_st(self._targetClassTop())._new();
$ctx1.sendIdx["new"]=1;
self["@receiverMiddle"]=_st(self._targetClassMiddle())._new();
$ctx1.sendIdx["new"]=2;
self["@receiverBottom"]=_st(self._targetClassBottom())._new();
self["@method"]=nil;
self["@performBlock"]=(function(){
return smalltalk.withContext(function($ctx2) {
return self._error_("performBlock not initialized");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})});
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},globals.MethodInheritanceTest)})},
args: [],
source: "setUp\x0a\x09receiverTop := self targetClassTop new.\x0a\x09receiverMiddle := self targetClassMiddle new.\x0a\x09receiverBottom := self targetClassBottom new.\x0a\x09method := nil.\x0a\x09performBlock := [ self error: 'performBlock not initialized' ]",
messageSends: ["new", "targetClassTop", "targetClassMiddle", "targetClassBottom", "error:"],
referencedClasses: []
}),
globals.MethodInheritanceTest);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldMNU",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldMNUTop();
self._shouldMNUMiddle();
self._shouldMNUBottom();
return self}, function($ctx1) {$ctx1.fill(self,"shouldMNU",{},globals.MethodInheritanceTest)})},
args: [],
source: "shouldMNU\x0a\x09self shouldMNUTop.\x0a\x09self shouldMNUMiddle.\x0a\x09self shouldMNUBottom",
messageSends: ["shouldMNUTop", "shouldMNUMiddle", "shouldMNUBottom"],
referencedClasses: []
}),
globals.MethodInheritanceTest);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldMNUBottom",
protocol: 'testing',
fn: function (){
var self=this;
function $MessageNotUnderstood(){return globals.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@performBlock"])._value_(self["@receiverBottom"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$MessageNotUnderstood());
return self}, function($ctx1) {$ctx1.fill(self,"shouldMNUBottom",{},globals.MethodInheritanceTest)})},
args: [],
source: "shouldMNUBottom\x0a\x09self should: [ performBlock value: receiverBottom ] raise: MessageNotUnderstood",
messageSends: ["should:raise:", "value:"],
referencedClasses: ["MessageNotUnderstood"]
}),
globals.MethodInheritanceTest);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldMNUMiddle",
protocol: 'testing',
fn: function (){
var self=this;
function $MessageNotUnderstood(){return globals.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@performBlock"])._value_(self["@receiverMiddle"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$MessageNotUnderstood());
return self}, function($ctx1) {$ctx1.fill(self,"shouldMNUMiddle",{},globals.MethodInheritanceTest)})},
args: [],
source: "shouldMNUMiddle\x0a\x09self should: [ performBlock value: receiverMiddle ] raise: MessageNotUnderstood",
messageSends: ["should:raise:", "value:"],
referencedClasses: ["MessageNotUnderstood"]
}),
globals.MethodInheritanceTest);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldMNUTop",
protocol: 'testing',
fn: function (){
var self=this;
function $MessageNotUnderstood(){return globals.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@performBlock"])._value_(self["@receiverTop"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$MessageNotUnderstood());
return self}, function($ctx1) {$ctx1.fill(self,"shouldMNUTop",{},globals.MethodInheritanceTest)})},
args: [],
source: "shouldMNUTop\x0a\x09self should: [ performBlock value: receiverTop ] raise: MessageNotUnderstood",
messageSends: ["should:raise:", "value:"],
referencedClasses: ["MessageNotUnderstood"]
}),
globals.MethodInheritanceTest);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldReturn:",
protocol: 'testing',
fn: function (anObject){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
result=_st(self["@performBlock"])._value_(self["@receiverTop"]);
$ctx1.sendIdx["value:"]=1;
self._assert_equals_(["top",anObject],["top",result]);
$ctx1.sendIdx["assert:equals:"]=1;
result=_st(self["@performBlock"])._value_(self["@receiverMiddle"]);
$ctx1.sendIdx["value:"]=2;
self._assert_equals_(["middle",anObject],["middle",result]);
$ctx1.sendIdx["assert:equals:"]=2;
result=_st(self["@performBlock"])._value_(self["@receiverBottom"]);
self._assert_equals_(["bottom",anObject],["bottom",result]);
return self}, function($ctx1) {$ctx1.fill(self,"shouldReturn:",{anObject:anObject,result:result},globals.MethodInheritanceTest)})},
args: ["anObject"],
source: "shouldReturn: anObject\x0a\x09| result |\x0a\x0a\x09result := performBlock value: receiverTop.\x0a\x09self assert: { 'top'. anObject } equals: { 'top'. result }.\x0a\x09result := performBlock value: receiverMiddle.\x0a\x09self assert: { 'middle'. anObject } equals: { 'middle'. result }.\x0a\x09result := performBlock value: receiverBottom.\x0a\x09self assert: { 'bottom'. anObject } equals: { 'bottom'. result }",
messageSends: ["value:", "assert:equals:"],
referencedClasses: []
}),
globals.MethodInheritanceTest);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldReturn:and:and:",
protocol: 'testing',
fn: function (anObject,anObject2,anObject3){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
result=_st(self["@performBlock"])._value_(self["@receiverTop"]);
$ctx1.sendIdx["value:"]=1;
self._assert_equals_(["top",anObject],["top",result]);
$ctx1.sendIdx["assert:equals:"]=1;
result=_st(self["@performBlock"])._value_(self["@receiverMiddle"]);
$ctx1.sendIdx["value:"]=2;
self._assert_equals_(["middle",anObject2],["middle",result]);
$ctx1.sendIdx["assert:equals:"]=2;
result=_st(self["@performBlock"])._value_(self["@receiverBottom"]);
self._assert_equals_(["bottom",anObject3],["bottom",result]);
return self}, function($ctx1) {$ctx1.fill(self,"shouldReturn:and:and:",{anObject:anObject,anObject2:anObject2,anObject3:anObject3,result:result},globals.MethodInheritanceTest)})},
args: ["anObject", "anObject2", "anObject3"],
source: "shouldReturn: anObject and: anObject2 and: anObject3\x0a\x09| result |\x0a\x0a\x09result := performBlock value: receiverTop.\x0a\x09self assert: { 'top'. anObject } equals: { 'top'. result }.\x0a\x09result := performBlock value: receiverMiddle.\x0a\x09self assert: { 'middle'. anObject2 } equals: { 'middle'. result }.\x0a\x09result := performBlock value: receiverBottom.\x0a\x09self assert: { 'bottom'. anObject3 } equals: { 'bottom'. result }",
messageSends: ["value:", "assert:equals:"],
referencedClasses: []
}),
globals.MethodInheritanceTest);

smalltalk.addMethod(
smalltalk.method({
selector: "targetClassBottom",
protocol: 'accessing',
fn: function (){
var self=this;
function $JavaScriptException(){return globals.JavaScriptException||(typeof JavaScriptException=="undefined"?nil:JavaScriptException)}
return $JavaScriptException();
},
args: [],
source: "targetClassBottom\x0a\x09^ JavaScriptException",
messageSends: [],
referencedClasses: ["JavaScriptException"]
}),
globals.MethodInheritanceTest);

smalltalk.addMethod(
smalltalk.method({
selector: "targetClassMiddle",
protocol: 'accessing',
fn: function (){
var self=this;
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return $Error();
},
args: [],
source: "targetClassMiddle\x0a\x09^ Error",
messageSends: [],
referencedClasses: ["Error"]
}),
globals.MethodInheritanceTest);

smalltalk.addMethod(
smalltalk.method({
selector: "targetClassTop",
protocol: 'accessing',
fn: function (){
var self=this;
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
return $Object();
},
args: [],
source: "targetClassTop\x0a\x09^ Object",
messageSends: [],
referencedClasses: ["Object"]
}),
globals.MethodInheritanceTest);

smalltalk.addMethod(
smalltalk.method({
selector: "tearDown",
protocol: 'initialization',
fn: function (){
var self=this;
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
_st((function(){
return smalltalk.withContext(function($ctx2) {
return self._deinstallTop();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._on_do_($Error(),(function(){
}));
$ctx1.sendIdx["on:do:"]=1;
_st((function(){
return smalltalk.withContext(function($ctx2) {
return self._deinstallMiddle();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}))._on_do_($Error(),(function(){
}));
$ctx1.sendIdx["on:do:"]=2;
_st((function(){
return smalltalk.withContext(function($ctx2) {
return self._deinstallBottom();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)})}))._on_do_($Error(),(function(){
}));
return self}, function($ctx1) {$ctx1.fill(self,"tearDown",{},globals.MethodInheritanceTest)})},
args: [],
source: "tearDown\x0a\x09[ self deinstallTop ] on: Error do: [ ].\x0a\x09[ self deinstallMiddle ] on: Error do: [ ].\x0a\x09[ self deinstallBottom ] on: Error do: [ ]",
messageSends: ["on:do:", "deinstallTop", "deinstallMiddle", "deinstallBottom"],
referencedClasses: ["Error"]
}),
globals.MethodInheritanceTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMNU11",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@performBlock"]=(function(x){
return smalltalk.withContext(function($ctx2) {
return _st(x)._foo();
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)})});
self._shouldMNU();
$ctx1.sendIdx["shouldMNU"]=1;
self._installTop_("foo ^ false");
$ctx1.sendIdx["installTop:"]=1;
self._installTop_("foo ^ true");
self._deinstallTop();
self._shouldMNU();
return self}, function($ctx1) {$ctx1.fill(self,"testMNU11",{},globals.MethodInheritanceTest)})},
args: [],
source: "testMNU11\x0a\x09performBlock := [ :x | x foo ].\x0a\x09self shouldMNU.\x0a\x09self installTop: 'foo ^ false'.\x0a\x09self installTop: 'foo ^ true'.\x0a\x09self deinstallTop.\x0a\x09self shouldMNU",
messageSends: ["foo", "shouldMNU", "installTop:", "deinstallTop"],
referencedClasses: []
}),
globals.MethodInheritanceTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMNU22",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@performBlock"]=(function(x){
return smalltalk.withContext(function($ctx2) {
return _st(x)._foo();
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)})});
self._shouldMNU();
$ctx1.sendIdx["shouldMNU"]=1;
self._installMiddle_("foo ^ false");
$ctx1.sendIdx["installMiddle:"]=1;
self._installMiddle_("foo ^ true");
self._deinstallMiddle();
self._shouldMNU();
return self}, function($ctx1) {$ctx1.fill(self,"testMNU22",{},globals.MethodInheritanceTest)})},
args: [],
source: "testMNU22\x0a\x09performBlock := [ :x | x foo ].\x0a\x09self shouldMNU.\x0a\x09self installMiddle: 'foo ^ false'.\x0a\x09self installMiddle: 'foo ^ true'.\x0a\x09self deinstallMiddle.\x0a\x09self shouldMNU",
messageSends: ["foo", "shouldMNU", "installMiddle:", "deinstallMiddle"],
referencedClasses: []
}),
globals.MethodInheritanceTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testReturns1",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@performBlock"]=(function(x){
return smalltalk.withContext(function($ctx2) {
return _st(x)._foo();
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)})});
self._installTop_("foo ^ false");
$ctx1.sendIdx["installTop:"]=1;
self._shouldReturn_(false);
$ctx1.sendIdx["shouldReturn:"]=1;
self._installTop_("foo ^ true");
self._shouldReturn_(true);
return self}, function($ctx1) {$ctx1.fill(self,"testReturns1",{},globals.MethodInheritanceTest)})},
args: [],
source: "testReturns1\x0a\x09performBlock := [ :x | x foo ].\x0a\x09self installTop: 'foo ^ false'.\x0a\x09self shouldReturn: false.\x0a\x09self installTop: 'foo ^ true'.\x0a\x09self shouldReturn: true",
messageSends: ["foo", "installTop:", "shouldReturn:"],
referencedClasses: []
}),
globals.MethodInheritanceTest);



smalltalk.addClass('NumberTest', globals.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testAbs",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(4)._abs();
$ctx1.sendIdx["abs"]=1;
self._assert_equals_($1,(4));
$ctx1.sendIdx["assert:equals:"]=1;
self._assert_equals_((-4)._abs(),(4));
return self}, function($ctx1) {$ctx1.fill(self,"testAbs",{},globals.NumberTest)})},
args: [],
source: "testAbs\x0a\x09self assert: 4 abs equals: 4.\x0a\x09self assert: -4 abs equals: 4",
messageSends: ["assert:equals:", "abs"],
referencedClasses: []
}),
globals.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testArithmetic",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$4;
$1=(1.5).__plus((1));
$ctx1.sendIdx["+"]=1;
self._assert_equals_($1,(2.5));
$ctx1.sendIdx["assert:equals:"]=1;
$2=(2).__minus((1));
$ctx1.sendIdx["-"]=1;
self._assert_equals_($2,(1));
$ctx1.sendIdx["assert:equals:"]=2;
self._assert_equals_((-2).__minus((1)),(-3));
$ctx1.sendIdx["assert:equals:"]=3;
self._assert_equals_((12).__slash((2)),(6));
$ctx1.sendIdx["assert:equals:"]=4;
$3=(3).__star((4));
$ctx1.sendIdx["*"]=1;
self._assert_equals_($3,(12));
$ctx1.sendIdx["assert:equals:"]=5;
self._assert_equals_((7).__slash_slash((2)),(3));
$ctx1.sendIdx["assert:equals:"]=6;
self._assert_equals_((7).__backslash_backslash((2)),(1));
$ctx1.sendIdx["assert:equals:"]=7;
$5=(1).__plus((2));
$ctx1.sendIdx["+"]=2;
$4=_st($5).__star((3));
$ctx1.sendIdx["*"]=2;
self._assert_equals_($4,(9));
$ctx1.sendIdx["assert:equals:"]=8;
self._assert_equals_((1).__plus((2).__star((3))),(7));
return self}, function($ctx1) {$ctx1.fill(self,"testArithmetic",{},globals.NumberTest)})},
args: [],
source: "testArithmetic\x0a\x09\x0a\x09\x22We rely on JS here, so we won't test complex behavior, just check if\x0a\x09message sends are corrects\x22\x0a\x0a\x09self assert: 1.5 + 1 equals: 2.5.\x0a\x09self assert: 2 - 1 equals: 1.\x0a\x09self assert: -2 - 1 equals: -3.\x0a\x09self assert: 12 / 2 equals: 6.\x0a\x09self assert: 3 * 4 equals: 12.\x0a\x09self assert: 7 // 2 equals: 3.\x0a\x09self assert: 7 \x5c\x5c 2 equals: 1.\x0a\x0a\x09\x22Simple parenthesis and execution order\x22\x0a\x09self assert: 1 + 2 * 3 equals: 9.\x0a\x09self assert: 1 + (2 * 3) equals: 7",
messageSends: ["assert:equals:", "+", "-", "/", "*", "//", "\x5c\x5c"],
referencedClasses: []
}),
globals.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAsNumber",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_((3)._asNumber(),(3));
return self}, function($ctx1) {$ctx1.fill(self,"testAsNumber",{},globals.NumberTest)})},
args: [],
source: "testAsNumber\x0a\x09self assert: 3 asNumber equals: 3.",
messageSends: ["assert:equals:", "asNumber"],
referencedClasses: []
}),
globals.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCeiling",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=(1.2)._ceiling();
$ctx1.sendIdx["ceiling"]=1;
self._assert_equals_($1,(2));
$ctx1.sendIdx["assert:equals:"]=1;
$2=(-1.2)._ceiling();
$ctx1.sendIdx["ceiling"]=2;
self._assert_equals_($2,(-1));
$ctx1.sendIdx["assert:equals:"]=2;
self._assert_equals_((1)._ceiling(),(1));
return self}, function($ctx1) {$ctx1.fill(self,"testCeiling",{},globals.NumberTest)})},
args: [],
source: "testCeiling\x0a\x09self assert: 1.2 ceiling equals: 2.\x0a\x09self assert: -1.2 ceiling equals: -1.\x0a\x09self assert: 1.0 ceiling equals: 1.",
messageSends: ["assert:equals:", "ceiling"],
referencedClasses: []
}),
globals.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testComparison",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=(3).__gt((2));
$ctx1.sendIdx[">"]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
$2=(2).__lt((3));
$ctx1.sendIdx["<"]=1;
self._assert_($2);
$ctx1.sendIdx["assert:"]=2;
self._deny_((3).__lt((2)));
$ctx1.sendIdx["deny:"]=1;
self._deny_((2).__gt((3)));
$3=(3).__gt_eq((3));
$ctx1.sendIdx[">="]=1;
self._assert_($3);
$ctx1.sendIdx["assert:"]=3;
self._assert_((3.1).__gt_eq((3)));
$ctx1.sendIdx["assert:"]=4;
$4=(3).__lt_eq((3));
$ctx1.sendIdx["<="]=1;
self._assert_($4);
$ctx1.sendIdx["assert:"]=5;
self._assert_((3).__lt_eq((3.1)));
return self}, function($ctx1) {$ctx1.fill(self,"testComparison",{},globals.NumberTest)})},
args: [],
source: "testComparison\x0a\x0a\x09self assert: 3 > 2.\x0a\x09self assert: 2 < 3.\x0a\x09\x0a\x09self deny: 3 < 2.\x0a\x09self deny: 2 > 3.\x0a\x0a\x09self assert: 3 >= 3.\x0a\x09self assert: 3.1 >= 3.\x0a\x09self assert: 3 <= 3.\x0a\x09self assert: 3 <= 3.1",
messageSends: ["assert:", ">", "<", "deny:", ">=", "<="],
referencedClasses: []
}),
globals.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCopying",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((1)._copy()).__eq_eq((1));
$ctx1.sendIdx["=="]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
self._assert_(_st((1)._deepCopy()).__eq_eq((1)));
return self}, function($ctx1) {$ctx1.fill(self,"testCopying",{},globals.NumberTest)})},
args: [],
source: "testCopying\x0a\x09self assert: 1 copy == 1.\x0a\x09self assert: 1 deepCopy == 1",
messageSends: ["assert:", "==", "copy", "deepCopy"],
referencedClasses: []
}),
globals.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testEquality",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$4,$7,$6,$9,$8,$10,$11,$12;
$1=(1).__eq((1));
$ctx1.sendIdx["="]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
$2=(0).__eq((0));
$ctx1.sendIdx["="]=2;
self._assert_($2);
$ctx1.sendIdx["assert:"]=2;
$3=(1).__eq((0));
$ctx1.sendIdx["="]=3;
self._deny_($3);
$ctx1.sendIdx["deny:"]=1;
$5=(1)._yourself();
$ctx1.sendIdx["yourself"]=1;
$4=_st($5).__eq((1));
$ctx1.sendIdx["="]=4;
self._assert_($4);
$ctx1.sendIdx["assert:"]=3;
$7=(1)._yourself();
$ctx1.sendIdx["yourself"]=2;
$6=(1).__eq($7);
$ctx1.sendIdx["="]=5;
self._assert_($6);
$ctx1.sendIdx["assert:"]=4;
$9=(1)._yourself();
$ctx1.sendIdx["yourself"]=3;
$8=_st($9).__eq((1)._yourself());
$ctx1.sendIdx["="]=6;
self._assert_($8);
$10=(0).__eq(false);
$ctx1.sendIdx["="]=7;
self._deny_($10);
$ctx1.sendIdx["deny:"]=2;
$11=false.__eq((0));
$ctx1.sendIdx["="]=8;
self._deny_($11);
$ctx1.sendIdx["deny:"]=3;
$12="".__eq((0));
$ctx1.sendIdx["="]=9;
self._deny_($12);
$ctx1.sendIdx["deny:"]=4;
self._deny_((0).__eq(""));
return self}, function($ctx1) {$ctx1.fill(self,"testEquality",{},globals.NumberTest)})},
args: [],
source: "testEquality\x0a\x09self assert: (1 = 1).\x0a\x09self assert: (0 = 0).\x0a\x09self deny: (1 = 0).\x0a\x0a\x09self assert: (1 yourself = 1).\x0a\x09self assert: (1 = 1 yourself).\x0a\x09self assert: (1 yourself = 1 yourself).\x0a\x09\x0a\x09self deny: 0 = false.\x0a\x09self deny: false = 0.\x0a\x09self deny: '' = 0.\x0a\x09self deny: 0 = ''",
messageSends: ["assert:", "=", "deny:", "yourself"],
referencedClasses: []
}),
globals.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testFloor",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=(1.2)._floor();
$ctx1.sendIdx["floor"]=1;
self._assert_equals_($1,(1));
$ctx1.sendIdx["assert:equals:"]=1;
$2=(-1.2)._floor();
$ctx1.sendIdx["floor"]=2;
self._assert_equals_($2,(-2));
$ctx1.sendIdx["assert:equals:"]=2;
self._assert_equals_((1)._floor(),(1));
return self}, function($ctx1) {$ctx1.fill(self,"testFloor",{},globals.NumberTest)})},
args: [],
source: "testFloor\x0a\x09self assert: 1.2 floor equals: 1.\x0a\x09self assert: -1.2 floor equals: -2.\x0a\x09self assert: 1.0 floor equals: 1.",
messageSends: ["assert:equals:", "floor"],
referencedClasses: []
}),
globals.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testHexNumbers",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
self._assert_equals_((9),(9));
$ctx1.sendIdx["assert:equals:"]=1;
$1=(10)._truncated();
$ctx1.sendIdx["truncated"]=1;
self._assert_equals_($1,(10));
$ctx1.sendIdx["assert:equals:"]=2;
$2=(11)._truncated();
$ctx1.sendIdx["truncated"]=2;
self._assert_equals_($2,(11));
$ctx1.sendIdx["assert:equals:"]=3;
$3=(12)._truncated();
$ctx1.sendIdx["truncated"]=3;
self._assert_equals_($3,(12));
$ctx1.sendIdx["assert:equals:"]=4;
$4=(13)._truncated();
$ctx1.sendIdx["truncated"]=4;
self._assert_equals_($4,(13));
$ctx1.sendIdx["assert:equals:"]=5;
$5=(14)._truncated();
$ctx1.sendIdx["truncated"]=5;
self._assert_equals_($5,(14));
$ctx1.sendIdx["assert:equals:"]=6;
self._assert_equals_((15)._truncated(),(15));
return self}, function($ctx1) {$ctx1.fill(self,"testHexNumbers",{},globals.NumberTest)})},
args: [],
source: "testHexNumbers\x0a\x0a\x09self assert: 16r9 equals: 9.\x0a\x09self assert: 16rA truncated equals: 10.\x0a\x09self assert: 16rB truncated equals: 11.\x0a\x09self assert: 16rC truncated equals: 12.\x0a\x09self assert: 16rD truncated equals: 13.\x0a\x09self assert: 16rE truncated equals: 14.\x0a\x09self assert: 16rF truncated equals: 15",
messageSends: ["assert:equals:", "truncated"],
referencedClasses: []
}),
globals.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIdentity",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$4,$7,$6,$9,$8;
$1=(1).__eq_eq((1));
$ctx1.sendIdx["=="]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
$2=(0).__eq_eq((0));
$ctx1.sendIdx["=="]=2;
self._assert_($2);
$ctx1.sendIdx["assert:"]=2;
$3=(1).__eq_eq((0));
$ctx1.sendIdx["=="]=3;
self._deny_($3);
$ctx1.sendIdx["deny:"]=1;
$5=(1)._yourself();
$ctx1.sendIdx["yourself"]=1;
$4=_st($5).__eq_eq((1));
$ctx1.sendIdx["=="]=4;
self._assert_($4);
$ctx1.sendIdx["assert:"]=3;
$7=(1)._yourself();
$ctx1.sendIdx["yourself"]=2;
$6=(1).__eq_eq($7);
$ctx1.sendIdx["=="]=5;
self._assert_($6);
$ctx1.sendIdx["assert:"]=4;
$9=(1)._yourself();
$ctx1.sendIdx["yourself"]=3;
$8=_st($9).__eq_eq((1)._yourself());
$ctx1.sendIdx["=="]=6;
self._assert_($8);
self._deny_((1).__eq_eq((2)));
return self}, function($ctx1) {$ctx1.fill(self,"testIdentity",{},globals.NumberTest)})},
args: [],
source: "testIdentity\x0a\x09self assert: 1 == 1.\x0a\x09self assert: 0 == 0.\x0a\x09self deny: 1 == 0.\x0a\x0a\x09self assert: 1 yourself == 1.\x0a\x09self assert: 1 == 1 yourself.\x0a\x09self assert: 1 yourself == 1 yourself.\x0a\x09\x0a\x09self deny: 1 == 2",
messageSends: ["assert:", "==", "deny:", "yourself"],
referencedClasses: []
}),
globals.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInvalidHexNumbers",
protocol: 'tests',
fn: function (){
var self=this;
function $MessageNotUnderstood(){return globals.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rG();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=1;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rg();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=2;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rH();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=3;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rh();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=4;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rI();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=5;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._ri();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=6;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rJ();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,7)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=7;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rj();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,8)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=8;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rK();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,9)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=9;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rk();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,10)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=10;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rL();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,11)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=11;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rl();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,12)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=12;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rM();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,13)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=13;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rm();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,14)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=14;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rN();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,15)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=15;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rn();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,16)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=16;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rO();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,17)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=17;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._ro();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,18)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=18;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rP();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,19)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=19;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rp();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,20)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=20;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rQ();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,21)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=21;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rq();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,22)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=22;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rR();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,23)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=23;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rr();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,24)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=24;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rS();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,25)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=25;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rs();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,26)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=26;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rT();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,27)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=27;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,28)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=28;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rU();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,29)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=29;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._ru();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,30)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=30;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rV();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,31)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=31;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rv();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,32)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=32;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rW();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,33)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=33;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rw();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,34)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=34;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rX();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,35)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=35;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rx();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,36)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=36;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rY();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,37)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=37;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._ry();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,38)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=38;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rZ();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,39)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=39;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (16)._rz();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,40)})}),$MessageNotUnderstood());
$ctx1.sendIdx["should:raise:"]=40;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (11259375)._Z();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,41)})}),$MessageNotUnderstood());
return self}, function($ctx1) {$ctx1.fill(self,"testInvalidHexNumbers",{},globals.NumberTest)})},
args: [],
source: "testInvalidHexNumbers\x0a\x0a\x09self should: [ 16rG ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rg ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rH ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rh ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rI ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16ri ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rJ ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rj ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rK ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rk ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rL ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rl ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rM ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rm ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rN ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rn ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rO ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16ro ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rP ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rp ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rQ ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rq ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rR ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rr ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rS ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rs ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rT ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rt ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rU ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16ru ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rV ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rv ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rW ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rw ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rX ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rx ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rY ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16ry ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rZ ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rz ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rABcdEfZ ] raise: MessageNotUnderstood.",
messageSends: ["should:raise:", "rG", "rg", "rH", "rh", "rI", "ri", "rJ", "rj", "rK", "rk", "rL", "rl", "rM", "rm", "rN", "rn", "rO", "ro", "rP", "rp", "rQ", "rq", "rR", "rr", "rS", "rs", "rT", "rt", "rU", "ru", "rV", "rv", "rW", "rw", "rX", "rx", "rY", "ry", "rZ", "rz", "Z"],
referencedClasses: ["MessageNotUnderstood"]
}),
globals.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLog",
protocol: 'tests',
fn: function (){
var self=this;
function $Number(){return globals.Number||(typeof Number=="undefined"?nil:Number)}
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_((10000)._log(),(4));
$ctx1.sendIdx["assert:equals:"]=1;
self._assert_equals_((512)._log_((2)),(9));
$ctx1.sendIdx["assert:equals:"]=2;
self._assert_equals_(_st(_st($Number())._e())._ln(),(1));
return self}, function($ctx1) {$ctx1.fill(self,"testLog",{},globals.NumberTest)})},
args: [],
source: "testLog\x0a\x09self assert: 10000 log equals: 4.\x0a\x09self assert: (512 log: 2) equals: 9.\x0a\x09self assert: Number e ln equals: 1.",
messageSends: ["assert:equals:", "log", "log:", "ln", "e"],
referencedClasses: ["Number"]
}),
globals.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMinMax",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_((2)._max_((5)),(5));
$ctx1.sendIdx["assert:equals:"]=1;
self._assert_equals_((2)._min_((5)),(2));
return self}, function($ctx1) {$ctx1.fill(self,"testMinMax",{},globals.NumberTest)})},
args: [],
source: "testMinMax\x0a\x09\x0a\x09self assert: (2 max: 5) equals: 5.\x0a\x09self assert: (2 min: 5) equals: 2",
messageSends: ["assert:equals:", "max:", "min:"],
referencedClasses: []
}),
globals.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNegated",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(3)._negated();
$ctx1.sendIdx["negated"]=1;
self._assert_equals_($1,(-3));
$ctx1.sendIdx["assert:equals:"]=1;
self._assert_equals_((-3)._negated(),(3));
return self}, function($ctx1) {$ctx1.fill(self,"testNegated",{},globals.NumberTest)})},
args: [],
source: "testNegated\x0a\x09self assert: 3 negated equals: -3.\x0a\x09self assert: -3 negated equals: 3",
messageSends: ["assert:equals:", "negated"],
referencedClasses: []
}),
globals.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPrintShowingDecimalPlaces",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$5,$6,$8,$7,$10,$9,$11,$12,$13,$14,$15;
$1=(23)._printShowingDecimalPlaces_((2));
$ctx1.sendIdx["printShowingDecimalPlaces:"]=1;
self._assert_equals_($1,"23.00");
$ctx1.sendIdx["assert:equals:"]=1;
$2=(23.5698)._printShowingDecimalPlaces_((2));
$ctx1.sendIdx["printShowingDecimalPlaces:"]=2;
self._assert_equals_($2,"23.57");
$ctx1.sendIdx["assert:equals:"]=2;
$4=(234.567)._negated();
$ctx1.sendIdx["negated"]=1;
$3=_st($4)._printShowingDecimalPlaces_((5));
$ctx1.sendIdx["printShowingDecimalPlaces:"]=3;
self._assert_equals_($3,"-234.56700");
$ctx1.sendIdx["assert:equals:"]=3;
$5=(23.4567)._printShowingDecimalPlaces_((0));
$ctx1.sendIdx["printShowingDecimalPlaces:"]=4;
self._assert_equals_($5,"23");
$ctx1.sendIdx["assert:equals:"]=4;
$6=(23.5567)._printShowingDecimalPlaces_((0));
$ctx1.sendIdx["printShowingDecimalPlaces:"]=5;
self._assert_equals_($6,"24");
$ctx1.sendIdx["assert:equals:"]=5;
$8=(23.4567)._negated();
$ctx1.sendIdx["negated"]=2;
$7=_st($8)._printShowingDecimalPlaces_((0));
$ctx1.sendIdx["printShowingDecimalPlaces:"]=6;
self._assert_equals_($7,"-23");
$ctx1.sendIdx["assert:equals:"]=6;
$10=(23.5567)._negated();
$ctx1.sendIdx["negated"]=3;
$9=_st($10)._printShowingDecimalPlaces_((0));
$ctx1.sendIdx["printShowingDecimalPlaces:"]=7;
self._assert_equals_($9,"-24");
$ctx1.sendIdx["assert:equals:"]=7;
$11=(100000000)._printShowingDecimalPlaces_((1));
$ctx1.sendIdx["printShowingDecimalPlaces:"]=8;
self._assert_equals_($11,"100000000.0");
$ctx1.sendIdx["assert:equals:"]=8;
$12=(0.98)._printShowingDecimalPlaces_((5));
$ctx1.sendIdx["printShowingDecimalPlaces:"]=9;
self._assert_equals_($12,"0.98000");
$ctx1.sendIdx["assert:equals:"]=9;
$13=_st((0.98)._negated())._printShowingDecimalPlaces_((2));
$ctx1.sendIdx["printShowingDecimalPlaces:"]=10;
self._assert_equals_($13,"-0.98");
$ctx1.sendIdx["assert:equals:"]=10;
$14=(2.567)._printShowingDecimalPlaces_((2));
$ctx1.sendIdx["printShowingDecimalPlaces:"]=11;
self._assert_equals_($14,"2.57");
$ctx1.sendIdx["assert:equals:"]=11;
$15=(-2.567)._printShowingDecimalPlaces_((2));
$ctx1.sendIdx["printShowingDecimalPlaces:"]=12;
self._assert_equals_($15,"-2.57");
$ctx1.sendIdx["assert:equals:"]=12;
self._assert_equals_((0)._printShowingDecimalPlaces_((2)),"0.00");
return self}, function($ctx1) {$ctx1.fill(self,"testPrintShowingDecimalPlaces",{},globals.NumberTest)})},
args: [],
source: "testPrintShowingDecimalPlaces\x0a\x09self assert: (23 printShowingDecimalPlaces: 2) equals: '23.00'.\x0a\x09self assert: (23.5698 printShowingDecimalPlaces: 2) equals: '23.57'.\x0a\x09self assert: (234.567 negated printShowingDecimalPlaces: 5) equals: '-234.56700'.\x0a\x09self assert: (23.4567 printShowingDecimalPlaces: 0) equals: '23'.\x0a\x09self assert: (23.5567 printShowingDecimalPlaces: 0) equals: '24'.\x0a\x09self assert: (23.4567 negated printShowingDecimalPlaces: 0) equals: '-23'.\x0a\x09self assert: (23.5567 negated printShowingDecimalPlaces: 0) equals: '-24'.\x0a\x09self assert: (100000000 printShowingDecimalPlaces: 1) equals: '100000000.0'.\x0a\x09self assert: (0.98 printShowingDecimalPlaces: 5) equals: '0.98000'.\x0a\x09self assert: (0.98 negated printShowingDecimalPlaces: 2) equals: '-0.98'.\x0a\x09self assert: (2.567 printShowingDecimalPlaces: 2) equals: '2.57'.\x0a\x09self assert: (-2.567 printShowingDecimalPlaces: 2) equals: '-2.57'.\x0a\x09self assert: (0 printShowingDecimalPlaces: 2) equals: '0.00'.",
messageSends: ["assert:equals:", "printShowingDecimalPlaces:", "negated"],
referencedClasses: []
}),
globals.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRaisedTo",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=(2)._raisedTo_((4));
$ctx1.sendIdx["raisedTo:"]=1;
self._assert_equals_($1,(16));
$ctx1.sendIdx["assert:equals:"]=1;
$2=(2)._raisedTo_((0));
$ctx1.sendIdx["raisedTo:"]=2;
self._assert_equals_($2,(1));
$ctx1.sendIdx["assert:equals:"]=2;
$3=(2)._raisedTo_((-3));
$ctx1.sendIdx["raisedTo:"]=3;
self._assert_equals_($3,(0.125));
$ctx1.sendIdx["assert:equals:"]=3;
self._assert_equals_((4)._raisedTo_((0.5)),(2));
$ctx1.sendIdx["assert:equals:"]=4;
self._assert_equals_((2).__star_star((4)),(16));
return self}, function($ctx1) {$ctx1.fill(self,"testRaisedTo",{},globals.NumberTest)})},
args: [],
source: "testRaisedTo\x0a\x09self assert: (2 raisedTo: 4) equals: 16.\x0a\x09self assert: (2 raisedTo: 0) equals: 1.\x0a\x09self assert: (2 raisedTo: -3) equals: 0.125.\x0a\x09self assert: (4 raisedTo: 0.5) equals: 2.\x0a\x09\x0a\x09self assert: 2 ** 4 equals: 16.",
messageSends: ["assert:equals:", "raisedTo:", "**"],
referencedClasses: []
}),
globals.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRounded",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=(3)._rounded();
$ctx1.sendIdx["rounded"]=1;
self._assert_equals_($1,(3));
$ctx1.sendIdx["assert:equals:"]=1;
$2=(3.212)._rounded();
$ctx1.sendIdx["rounded"]=2;
self._assert_equals_($2,(3));
$ctx1.sendIdx["assert:equals:"]=2;
self._assert_equals_((3.51)._rounded(),(4));
return self}, function($ctx1) {$ctx1.fill(self,"testRounded",{},globals.NumberTest)})},
args: [],
source: "testRounded\x0a\x09\x0a\x09self assert: 3 rounded equals: 3.\x0a\x09self assert: 3.212 rounded equals: 3.\x0a\x09self assert: 3.51 rounded equals: 4",
messageSends: ["assert:equals:", "rounded"],
referencedClasses: []
}),
globals.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSign",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=(5)._sign();
$ctx1.sendIdx["sign"]=1;
self._assert_equals_($1,(1));
$ctx1.sendIdx["assert:equals:"]=1;
$2=(0)._sign();
$ctx1.sendIdx["sign"]=2;
self._assert_equals_($2,(0));
$ctx1.sendIdx["assert:equals:"]=2;
self._assert_equals_((-1.4)._sign(),(-1));
return self}, function($ctx1) {$ctx1.fill(self,"testSign",{},globals.NumberTest)})},
args: [],
source: "testSign\x0a\x09self assert: 5 sign equals: 1.\x0a\x09self assert: 0 sign equals: 0.\x0a\x09self assert: -1.4 sign equals: -1.",
messageSends: ["assert:equals:", "sign"],
referencedClasses: []
}),
globals.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSqrt",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(4)._sqrt();
$ctx1.sendIdx["sqrt"]=1;
self._assert_equals_($1,(2));
$ctx1.sendIdx["assert:equals:"]=1;
self._assert_equals_((16)._sqrt(),(4));
return self}, function($ctx1) {$ctx1.fill(self,"testSqrt",{},globals.NumberTest)})},
args: [],
source: "testSqrt\x0a\x09\x0a\x09self assert: 4 sqrt equals: 2.\x0a\x09self assert: 16 sqrt equals: 4",
messageSends: ["assert:equals:", "sqrt"],
referencedClasses: []
}),
globals.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSquared",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_((4)._squared(),(16));
return self}, function($ctx1) {$ctx1.fill(self,"testSquared",{},globals.NumberTest)})},
args: [],
source: "testSquared\x0a\x09\x0a\x09self assert: 4 squared equals: 16",
messageSends: ["assert:equals:", "squared"],
referencedClasses: []
}),
globals.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTimesRepeat",
protocol: 'tests',
fn: function (){
var self=this;
var i;
return smalltalk.withContext(function($ctx1) { 
i=(0);
(0)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
i=_st(i).__plus((1));
$ctx2.sendIdx["+"]=1;
return i;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["timesRepeat:"]=1;
self._assert_equals_(i,(0));
$ctx1.sendIdx["assert:equals:"]=1;
(5)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
i=_st(i).__plus((1));
return i;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
self._assert_equals_(i,(5));
return self}, function($ctx1) {$ctx1.fill(self,"testTimesRepeat",{i:i},globals.NumberTest)})},
args: [],
source: "testTimesRepeat\x0a\x09| i |\x0a\x0a\x09i := 0.\x0a\x090 timesRepeat: [ i := i + 1 ].\x0a\x09self assert: i equals: 0.\x0a\x0a\x095 timesRepeat: [ i := i + 1 ].\x0a\x09self assert: i equals: 5",
messageSends: ["timesRepeat:", "+", "assert:equals:"],
referencedClasses: []
}),
globals.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTo",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_((1)._to_((5)),[(1), (2), (3), (4), (5)]);
return self}, function($ctx1) {$ctx1.fill(self,"testTo",{},globals.NumberTest)})},
args: [],
source: "testTo\x0a\x09self assert: (1 to: 5) equals: #(1 2 3 4 5)",
messageSends: ["assert:equals:", "to:"],
referencedClasses: []
}),
globals.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testToBy",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0)._to_by_((6),(2));
$ctx1.sendIdx["to:by:"]=1;
self._assert_equals_($1,[(0), (2), (4), (6)]);
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return (1)._to_by_((4),(0));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testToBy",{},globals.NumberTest)})},
args: [],
source: "testToBy\x0a\x09self assert: (0 to: 6 by: 2) equals: #(0 2 4 6).\x0a\x0a\x09self should: [ 1 to: 4 by: 0 ] raise: Error",
messageSends: ["assert:equals:", "to:by:", "should:raise:"],
referencedClasses: ["Error"]
}),
globals.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTrigonometry",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_((0)._cos(),(1));
$ctx1.sendIdx["assert:equals:"]=1;
self._assert_equals_((0)._sin(),(0));
$ctx1.sendIdx["assert:equals:"]=2;
self._assert_equals_((0)._tan(),(0));
$ctx1.sendIdx["assert:equals:"]=3;
self._assert_equals_((1)._arcCos(),(0));
$ctx1.sendIdx["assert:equals:"]=4;
self._assert_equals_((0)._arcSin(),(0));
$ctx1.sendIdx["assert:equals:"]=5;
self._assert_equals_((0)._arcTan(),(0));
return self}, function($ctx1) {$ctx1.fill(self,"testTrigonometry",{},globals.NumberTest)})},
args: [],
source: "testTrigonometry\x0a\x09self assert: 0 cos equals: 1.\x0a\x09self assert: 0 sin equals: 0.\x0a\x09self assert: 0 tan equals: 0.\x0a\x09self assert: 1 arcCos equals: 0.\x0a\x09self assert: 0 arcSin equals: 0.\x0a\x09self assert: 0 arcTan equals: 0.",
messageSends: ["assert:equals:", "cos", "sin", "tan", "arcCos", "arcSin", "arcTan"],
referencedClasses: []
}),
globals.NumberTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTruncated",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=(3)._truncated();
$ctx1.sendIdx["truncated"]=1;
self._assert_equals_($1,(3));
$ctx1.sendIdx["assert:equals:"]=1;
$2=(3.212)._truncated();
$ctx1.sendIdx["truncated"]=2;
self._assert_equals_($2,(3));
$ctx1.sendIdx["assert:equals:"]=2;
self._assert_equals_((3.51)._truncated(),(3));
return self}, function($ctx1) {$ctx1.fill(self,"testTruncated",{},globals.NumberTest)})},
args: [],
source: "testTruncated\x0a\x09\x0a\x09self assert: 3 truncated equals: 3.\x0a\x09self assert: 3.212 truncated equals: 3.\x0a\x09self assert: 3.51 truncated equals: 3",
messageSends: ["assert:equals:", "truncated"],
referencedClasses: []
}),
globals.NumberTest);



smalltalk.addClass('ObjectMock', globals.Object, ['foo', 'bar'], 'Kernel-Tests');
globals.ObjectMock.comment="ObjectMock is there only to perform tests on classes.";
smalltalk.addMethod(
smalltalk.method({
selector: "foo",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@foo"];
return $1;
},
args: [],
source: "foo\x0a\x09^ foo",
messageSends: [],
referencedClasses: []
}),
globals.ObjectMock);

smalltalk.addMethod(
smalltalk.method({
selector: "foo:",
protocol: 'not yet classified',
fn: function (anObject){
var self=this;
self["@foo"]=anObject;
return self},
args: ["anObject"],
source: "foo: anObject\x0a\x09foo := anObject",
messageSends: [],
referencedClasses: []
}),
globals.ObjectMock);



smalltalk.addClass('ObjectTest', globals.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "notDefined",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return void 0;;
return self}, function($ctx1) {$ctx1.fill(self,"notDefined",{},globals.ObjectTest)})},
args: [],
source: "notDefined\x0a\x09<return void 0;>",
messageSends: [],
referencedClasses: []
}),
globals.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBasicAccess",
protocol: 'tests',
fn: function (){
var self=this;
var o;
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $1;
o=_st($Object())._new();
_st(o)._basicAt_put_("a",(1));
$1=_st(o)._basicAt_("a");
$ctx1.sendIdx["basicAt:"]=1;
self._assert_equals_($1,(1));
$ctx1.sendIdx["assert:equals:"]=1;
self._assert_equals_(_st(o)._basicAt_("b"),nil);
return self}, function($ctx1) {$ctx1.fill(self,"testBasicAccess",{o:o},globals.ObjectTest)})},
args: [],
source: "testBasicAccess\x0a\x09| o |\x0a\x09o := Object new.\x0a\x09o basicAt: 'a' put: 1.\x0a\x09self assert: (o basicAt: 'a') equals: 1.\x0a\x09self assert: (o basicAt: 'b') equals: nil",
messageSends: ["new", "basicAt:put:", "assert:equals:", "basicAt:"],
referencedClasses: ["Object"]
}),
globals.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBasicPerform",
protocol: 'tests',
fn: function (){
var self=this;
var o;
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
o=_st($Object())._new();
_st(o)._basicAt_put_("func",(function(){
return "hello";
}));
$ctx1.sendIdx["basicAt:put:"]=1;
_st(o)._basicAt_put_("func2",(function(a){
return smalltalk.withContext(function($ctx2) {
return _st(a).__plus((1));
}, function($ctx2) {$ctx2.fillBlock({a:a},$ctx1,2)})}));
self._assert_equals_(_st(o)._basicPerform_("func"),"hello");
$ctx1.sendIdx["assert:equals:"]=1;
self._assert_equals_(_st(o)._basicPerform_withArguments_("func2",[(3)]),(4));
return self}, function($ctx1) {$ctx1.fill(self,"testBasicPerform",{o:o},globals.ObjectTest)})},
args: [],
source: "testBasicPerform\x0a\x09| o |\x0a\x09o := Object new.\x0a\x09o basicAt: 'func' put: [ 'hello' ].\x0a\x09o basicAt: 'func2' put: [ :a | a + 1 ].\x0a\x0a\x09self assert: (o basicPerform: 'func') equals: 'hello'.\x0a\x09self assert: (o basicPerform: 'func2' withArguments: #(3)) equals: 4",
messageSends: ["new", "basicAt:put:", "+", "assert:equals:", "basicPerform:", "basicPerform:withArguments:"],
referencedClasses: ["Object"]
}),
globals.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDNU",
protocol: 'tests',
fn: function (){
var self=this;
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
function $MessageNotUnderstood(){return globals.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st($Object())._new())._foo();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$MessageNotUnderstood());
return self}, function($ctx1) {$ctx1.fill(self,"testDNU",{},globals.ObjectTest)})},
args: [],
source: "testDNU\x0a\x09self should: [ Object new foo ] raise: MessageNotUnderstood",
messageSends: ["should:raise:", "foo", "new"],
referencedClasses: ["Object", "MessageNotUnderstood"]
}),
globals.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testEquality",
protocol: 'tests',
fn: function (){
var self=this;
var o;
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3;
o=_st($Object())._new();
$ctx1.sendIdx["new"]=1;
$1=_st(o).__eq(_st($Object())._new());
$ctx1.sendIdx["="]=1;
self._deny_($1);
$2=_st(o).__eq(o);
$ctx1.sendIdx["="]=2;
self._assert_($2);
$ctx1.sendIdx["assert:"]=1;
$4=_st(o)._yourself();
$ctx1.sendIdx["yourself"]=1;
$3=_st($4).__eq(o);
$ctx1.sendIdx["="]=3;
self._assert_($3);
$ctx1.sendIdx["assert:"]=2;
self._assert_(_st(o).__eq(_st(o)._yourself()));
return self}, function($ctx1) {$ctx1.fill(self,"testEquality",{o:o},globals.ObjectTest)})},
args: [],
source: "testEquality\x0a\x09| o |\x0a\x09o := Object new.\x0a\x09self deny: o = Object new.\x0a\x09self assert: (o = o).\x0a\x09self assert: (o yourself = o).\x0a\x09self assert: (o = o yourself)",
messageSends: ["new", "deny:", "=", "assert:", "yourself"],
referencedClasses: ["Object"]
}),
globals.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testHalt",
protocol: 'tests',
fn: function (){
var self=this;
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st($Object())._new())._halt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testHalt",{},globals.ObjectTest)})},
args: [],
source: "testHalt\x0a\x09self should: [ Object new halt ] raise: Error",
messageSends: ["should:raise:", "halt", "new"],
referencedClasses: ["Object", "Error"]
}),
globals.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIdentity",
protocol: 'tests',
fn: function (){
var self=this;
var o;
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3;
o=_st($Object())._new();
$ctx1.sendIdx["new"]=1;
$1=_st(o).__eq_eq(_st($Object())._new());
$ctx1.sendIdx["=="]=1;
self._deny_($1);
$2=_st(o).__eq_eq(o);
$ctx1.sendIdx["=="]=2;
self._assert_($2);
$ctx1.sendIdx["assert:"]=1;
$4=_st(o)._yourself();
$ctx1.sendIdx["yourself"]=1;
$3=_st($4).__eq_eq(o);
$ctx1.sendIdx["=="]=3;
self._assert_($3);
$ctx1.sendIdx["assert:"]=2;
self._assert_(_st(o).__eq_eq(_st(o)._yourself()));
return self}, function($ctx1) {$ctx1.fill(self,"testIdentity",{o:o},globals.ObjectTest)})},
args: [],
source: "testIdentity\x0a\x09| o |\x0a\x09o := Object new.\x0a\x09self deny: o == Object new.\x0a\x09self assert: o == o.\x0a\x09self assert: o yourself == o.\x0a\x09self assert: o == o yourself",
messageSends: ["new", "deny:", "==", "assert:", "yourself"],
referencedClasses: ["Object"]
}),
globals.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIfNil",
protocol: 'tests',
fn: function (){
var self=this;
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$5,$4,$3,$7,$6,$9,$8,$11,$10,$receiver;
$2=_st($Object())._new();
$ctx1.sendIdx["new"]=1;
$1=_st($2)._isNil();
self._deny_($1);
$ctx1.sendIdx["deny:"]=1;
$5=_st($Object())._new();
$ctx1.sendIdx["new"]=2;
if(($receiver = $5) == null || $receiver.isNil){
$4=true;
} else {
$4=$5;
};
$3=_st($4).__eq(true);
self._deny_($3);
$7=_st($Object())._new();
$ctx1.sendIdx["new"]=3;
if(($receiver = $7) == null || $receiver.isNil){
$6=$7;
} else {
$6=true;
};
self._assert_equals_($6,true);
$ctx1.sendIdx["assert:equals:"]=1;
$9=_st($Object())._new();
$ctx1.sendIdx["new"]=4;
if(($receiver = $9) == null || $receiver.isNil){
$8=false;
} else {
$8=true;
};
self._assert_equals_($8,true);
$ctx1.sendIdx["assert:equals:"]=2;
$11=_st($Object())._new();
if(($receiver = $11) == null || $receiver.isNil){
$10=false;
} else {
$10=true;
};
self._assert_equals_($10,true);
return self}, function($ctx1) {$ctx1.fill(self,"testIfNil",{},globals.ObjectTest)})},
args: [],
source: "testIfNil\x0a\x09self deny: Object new isNil.\x0a\x09self deny: (Object new ifNil: [ true ]) = true.\x0a\x09self assert: (Object new ifNotNil: [ true ]) equals: true.\x0a\x0a\x09self assert: (Object new ifNil: [ false ] ifNotNil: [ true ]) equals: true.\x0a\x09self assert: (Object new ifNotNil: [ true ] ifNil: [ false ]) equals: true",
messageSends: ["deny:", "isNil", "new", "=", "ifNil:", "assert:equals:", "ifNotNil:", "ifNil:ifNotNil:", "ifNotNil:ifNil:"],
referencedClasses: ["Object"]
}),
globals.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInstVars",
protocol: 'tests',
fn: function (){
var self=this;
var o;
function $ObjectMock(){return globals.ObjectMock||(typeof ObjectMock=="undefined"?nil:ObjectMock)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
o=_st($ObjectMock())._new();
$1=_st(o)._instVarAt_("foo");
$ctx1.sendIdx["instVarAt:"]=1;
self._assert_equals_($1,nil);
$ctx1.sendIdx["assert:equals:"]=1;
_st(o)._instVarAt_put_("foo",(1));
$2=_st(o)._instVarAt_("foo");
$ctx1.sendIdx["instVarAt:"]=2;
self._assert_equals_($2,(1));
$ctx1.sendIdx["assert:equals:"]=2;
self._assert_equals_(_st(o)._instVarAt_("foo"),(1));
return self}, function($ctx1) {$ctx1.fill(self,"testInstVars",{o:o},globals.ObjectTest)})},
args: [],
source: "testInstVars\x0a\x09| o |\x0a\x09o := ObjectMock new.\x0a\x09self assert: (o instVarAt: #foo) equals: nil.\x0a\x0a\x09o instVarAt: #foo put: 1.\x0a\x09self assert: (o instVarAt: #foo) equals: 1.\x0a\x09self assert: (o instVarAt: 'foo') equals: 1",
messageSends: ["new", "assert:equals:", "instVarAt:", "instVarAt:put:"],
referencedClasses: ["ObjectMock"]
}),
globals.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNilUndefined",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(self._notDefined(),nil);
return self}, function($ctx1) {$ctx1.fill(self,"testNilUndefined",{},globals.ObjectTest)})},
args: [],
source: "testNilUndefined\x0a\x09\x22nil in Smalltalk is the undefined object in JS\x22\x0a\x0a\x09self assert: self notDefined equals: nil",
messageSends: ["assert:equals:", "notDefined"],
referencedClasses: []
}),
globals.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testYourself",
protocol: 'tests',
fn: function (){
var self=this;
var o;
function $ObjectMock(){return globals.ObjectMock||(typeof ObjectMock=="undefined"?nil:ObjectMock)}
return smalltalk.withContext(function($ctx1) { 
o=_st($ObjectMock())._new();
self._assert_(_st(_st(o)._yourself()).__eq_eq(o));
return self}, function($ctx1) {$ctx1.fill(self,"testYourself",{o:o},globals.ObjectTest)})},
args: [],
source: "testYourself\x0a\x09| o |\x0a\x09o := ObjectMock new.\x0a\x09self assert: o yourself == o",
messageSends: ["new", "assert:", "==", "yourself"],
referencedClasses: ["ObjectMock"]
}),
globals.ObjectTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testidentityHash",
protocol: 'tests',
fn: function (){
var self=this;
var o1,o2;
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1,$5,$4;
o1=_st($Object())._new();
$ctx1.sendIdx["new"]=1;
o2=_st($Object())._new();
$2=_st(o1)._identityHash();
$ctx1.sendIdx["identityHash"]=1;
$3=_st(o1)._identityHash();
$ctx1.sendIdx["identityHash"]=2;
$1=_st($2).__eq_eq($3);
$ctx1.sendIdx["=="]=1;
self._assert_($1);
$5=_st(o1)._identityHash();
$ctx1.sendIdx["identityHash"]=3;
$4=_st($5).__eq_eq(_st(o2)._identityHash());
self._deny_($4);
return self}, function($ctx1) {$ctx1.fill(self,"testidentityHash",{o1:o1,o2:o2},globals.ObjectTest)})},
args: [],
source: "testidentityHash\x0a\x09| o1 o2 |\x0a\x09\x0a\x09o1 := Object new.\x0a\x09o2 := Object new.\x0a\x0a\x09self assert: o1 identityHash == o1 identityHash.\x0a\x09self deny: o1 identityHash == o2 identityHash",
messageSends: ["new", "assert:", "==", "identityHash", "deny:"],
referencedClasses: ["Object"]
}),
globals.ObjectTest);



smalltalk.addClass('PointTest', globals.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testAccessing",
protocol: 'tests',
fn: function (){
var self=this;
function $Point(){return globals.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$6,$5,$4;
$2=_st($Point())._x_y_((3),(4));
$ctx1.sendIdx["x:y:"]=1;
$1=_st($2)._x();
$ctx1.sendIdx["x"]=1;
self._assert_equals_($1,(3));
$ctx1.sendIdx["assert:equals:"]=1;
$3=_st(_st($Point())._x_y_((3),(4)))._y();
$ctx1.sendIdx["y"]=1;
self._assert_equals_($3,(4));
$ctx1.sendIdx["assert:equals:"]=2;
$6=_st($Point())._new();
$ctx1.sendIdx["new"]=1;
$5=_st($6)._x_((3));
$4=_st($5)._x();
self._assert_equals_($4,(3));
$ctx1.sendIdx["assert:equals:"]=3;
self._assert_equals_(_st(_st(_st($Point())._new())._y_((4)))._y(),(4));
return self}, function($ctx1) {$ctx1.fill(self,"testAccessing",{},globals.PointTest)})},
args: [],
source: "testAccessing\x0a\x09self assert: (Point x: 3 y: 4) x equals: 3.\x0a\x09self assert: (Point x: 3 y: 4) y equals: 4.\x0a\x09self assert: (Point new x: 3) x equals: 3.\x0a\x09self assert: (Point new y: 4) y equals: 4",
messageSends: ["assert:equals:", "x", "x:y:", "y", "x:", "new", "y:"],
referencedClasses: ["Point"]
}),
globals.PointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testArithmetic",
protocol: 'tests',
fn: function (){
var self=this;
function $Point(){return globals.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1,$4,$6,$7,$5,$8,$10,$11,$9,$12,$14,$13;
$2=(3).__at((4));
$ctx1.sendIdx["@"]=1;
$3=(3).__at((4));
$ctx1.sendIdx["@"]=2;
$1=_st($2).__star($3);
$4=_st($Point())._x_y_((9),(16));
$ctx1.sendIdx["x:y:"]=1;
self._assert_equals_($1,$4);
$ctx1.sendIdx["assert:equals:"]=1;
$6=(3).__at((4));
$ctx1.sendIdx["@"]=3;
$7=(3).__at((4));
$ctx1.sendIdx["@"]=4;
$5=_st($6).__plus($7);
$8=_st($Point())._x_y_((6),(8));
$ctx1.sendIdx["x:y:"]=2;
self._assert_equals_($5,$8);
$ctx1.sendIdx["assert:equals:"]=2;
$10=(3).__at((4));
$ctx1.sendIdx["@"]=5;
$11=(3).__at((4));
$ctx1.sendIdx["@"]=6;
$9=_st($10).__minus($11);
$12=_st($Point())._x_y_((0),(0));
$ctx1.sendIdx["x:y:"]=3;
self._assert_equals_($9,$12);
$ctx1.sendIdx["assert:equals:"]=3;
$14=(6).__at((8));
$ctx1.sendIdx["@"]=7;
$13=_st($14).__slash((3).__at((4)));
self._assert_equals_($13,_st($Point())._x_y_((2),(2)));
return self}, function($ctx1) {$ctx1.fill(self,"testArithmetic",{},globals.PointTest)})},
args: [],
source: "testArithmetic\x0a\x09self assert: 3@4 * (3@4 ) equals: (Point x: 9 y: 16).\x0a\x09self assert: 3@4 + (3@4 ) equals: (Point x: 6 y: 8).\x0a\x09self assert: 3@4 - (3@4 ) equals: (Point x: 0 y: 0).\x0a\x09self assert: 6@8 / (3@4 ) equals: (Point x: 2 y: 2)",
messageSends: ["assert:equals:", "*", "@", "x:y:", "+", "-", "/"],
referencedClasses: ["Point"]
}),
globals.PointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAt",
protocol: 'tests',
fn: function (){
var self=this;
function $Point(){return globals.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_((3).__at((4)),_st($Point())._x_y_((3),(4)));
return self}, function($ctx1) {$ctx1.fill(self,"testAt",{},globals.PointTest)})},
args: [],
source: "testAt\x0a\x09self assert: 3@4 equals: (Point x: 3 y: 4)",
messageSends: ["assert:equals:", "@", "x:y:"],
referencedClasses: ["Point"]
}),
globals.PointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testComparison",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1,$5,$6,$4,$8,$9,$7,$11,$12,$10,$14,$15,$13,$17,$18,$16,$20,$21,$19,$23,$22;
$2=(3).__at((4));
$ctx1.sendIdx["@"]=1;
$3=(4).__at((5));
$ctx1.sendIdx["@"]=2;
$1=_st($2).__lt($3);
$ctx1.sendIdx["<"]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
$5=(3).__at((4));
$ctx1.sendIdx["@"]=3;
$6=(4).__at((4));
$ctx1.sendIdx["@"]=4;
$4=_st($5).__lt($6);
self._deny_($4);
$ctx1.sendIdx["deny:"]=1;
$8=(4).__at((5));
$ctx1.sendIdx["@"]=5;
$9=(4).__at((5));
$ctx1.sendIdx["@"]=6;
$7=_st($8).__lt_eq($9);
$ctx1.sendIdx["<="]=1;
self._assert_($7);
$ctx1.sendIdx["assert:"]=2;
$11=(4).__at((5));
$ctx1.sendIdx["@"]=7;
$12=(3).__at((5));
$ctx1.sendIdx["@"]=8;
$10=_st($11).__lt_eq($12);
self._deny_($10);
$ctx1.sendIdx["deny:"]=2;
$14=(5).__at((6));
$ctx1.sendIdx["@"]=9;
$15=(4).__at((5));
$ctx1.sendIdx["@"]=10;
$13=_st($14).__gt($15);
$ctx1.sendIdx[">"]=1;
self._assert_($13);
$ctx1.sendIdx["assert:"]=3;
$17=(5).__at((6));
$ctx1.sendIdx["@"]=11;
$18=(6).__at((6));
$ctx1.sendIdx["@"]=12;
$16=_st($17).__gt($18);
self._deny_($16);
$ctx1.sendIdx["deny:"]=3;
$20=(4).__at((5));
$ctx1.sendIdx["@"]=13;
$21=(4).__at((5));
$ctx1.sendIdx["@"]=14;
$19=_st($20).__gt_eq($21);
$ctx1.sendIdx[">="]=1;
self._assert_($19);
$23=(4).__at((5));
$ctx1.sendIdx["@"]=15;
$22=_st($23).__gt_eq((5).__at((5)));
self._deny_($22);
return self}, function($ctx1) {$ctx1.fill(self,"testComparison",{},globals.PointTest)})},
args: [],
source: "testComparison\x0a\x09self assert: 3@4 < (4@5).\x0a\x09self deny: 3@4 < (4@4).\x0a\x09\x0a\x09self assert: 4@5 <= (4@5).\x0a\x09self deny: 4@5 <= (3@5).\x0a\x09\x0a\x09self assert: 5@6 > (4@5).\x0a\x09self deny: 5@6 > (6@6).\x0a\x09\x0a\x09self assert: 4@5 >= (4@5).\x0a\x09self deny: 4@5 >= (5@5)",
messageSends: ["assert:", "<", "@", "deny:", "<=", ">", ">="],
referencedClasses: []
}),
globals.PointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testEgality",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1,$5,$4;
$2=(3).__at((4));
$ctx1.sendIdx["@"]=1;
$3=(3).__at((4));
$ctx1.sendIdx["@"]=2;
$1=_st($2).__eq($3);
$ctx1.sendIdx["="]=1;
self._assert_($1);
$5=(3).__at((5));
$ctx1.sendIdx["@"]=3;
$4=_st($5).__eq((3).__at((6)));
self._deny_($4);
return self}, function($ctx1) {$ctx1.fill(self,"testEgality",{},globals.PointTest)})},
args: [],
source: "testEgality\x0a\x09self assert: (3@4 = (3@4)).\x0a\x09self deny: 3@5 = (3@6)",
messageSends: ["assert:", "=", "@", "deny:"],
referencedClasses: []
}),
globals.PointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNew",
protocol: 'tests',
fn: function (){
var self=this;
function $Point(){return globals.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1,$7,$6,$5,$4,$10,$9,$8;
$3=_st($Point())._new();
$ctx1.sendIdx["new"]=1;
$2=_st($3)._x_((3));
$ctx1.sendIdx["x:"]=1;
$1=_st($2)._y();
$ctx1.sendIdx["y"]=1;
self._assert_equals_($1,nil);
$ctx1.sendIdx["assert:equals:"]=1;
$7=_st($Point())._new();
$ctx1.sendIdx["new"]=2;
$6=_st($7)._x_((3));
$5=_st($6)._x();
$ctx1.sendIdx["x"]=1;
$4=_st($5).__eq((0));
$ctx1.sendIdx["="]=1;
self._deny_($4);
$ctx1.sendIdx["deny:"]=1;
$10=_st($Point())._new();
$ctx1.sendIdx["new"]=3;
$9=_st($10)._y_((4));
$ctx1.sendIdx["y:"]=1;
$8=_st($9)._x();
self._assert_equals_($8,nil);
self._deny_(_st(_st(_st(_st($Point())._new())._y_((4)))._y()).__eq((0)));
return self}, function($ctx1) {$ctx1.fill(self,"testNew",{},globals.PointTest)})},
args: [],
source: "testNew\x0a\x0a\x09self assert: (Point new x: 3) y equals: nil.\x0a\x09self deny: (Point new x: 3) x = 0.\x0a\x09self assert: (Point new y: 4) x equals: nil.\x0a\x09self deny: (Point new y: 4) y = 0",
messageSends: ["assert:equals:", "y", "x:", "new", "deny:", "=", "x", "y:"],
referencedClasses: ["Point"]
}),
globals.PointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTranslateBy",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1,$4,$6,$8,$7,$5,$9,$11,$12,$10,$13,$15,$16,$14;
$2=(3).__at((3));
$ctx1.sendIdx["@"]=1;
$3=(0).__at((1));
$ctx1.sendIdx["@"]=2;
$1=_st($2)._translateBy_($3);
$ctx1.sendIdx["translateBy:"]=1;
$4=(3).__at((4));
$ctx1.sendIdx["@"]=3;
self._assert_equals_($1,$4);
$ctx1.sendIdx["assert:equals:"]=1;
$6=(3).__at((3));
$ctx1.sendIdx["@"]=4;
$8=(1)._negated();
$ctx1.sendIdx["negated"]=1;
$7=(0).__at($8);
$ctx1.sendIdx["@"]=5;
$5=_st($6)._translateBy_($7);
$ctx1.sendIdx["translateBy:"]=2;
$9=(3).__at((2));
$ctx1.sendIdx["@"]=6;
self._assert_equals_($5,$9);
$ctx1.sendIdx["assert:equals:"]=2;
$11=(3).__at((3));
$ctx1.sendIdx["@"]=7;
$12=(2).__at((3));
$ctx1.sendIdx["@"]=8;
$10=_st($11)._translateBy_($12);
$ctx1.sendIdx["translateBy:"]=3;
$13=(5).__at((6));
$ctx1.sendIdx["@"]=9;
self._assert_equals_($10,$13);
$ctx1.sendIdx["assert:equals:"]=3;
$15=(3).__at((3));
$ctx1.sendIdx["@"]=10;
$16=_st((3)._negated()).__at((0));
$ctx1.sendIdx["@"]=11;
$14=_st($15)._translateBy_($16);
self._assert_equals_($14,(0).__at((3)));
return self}, function($ctx1) {$ctx1.fill(self,"testTranslateBy",{},globals.PointTest)})},
args: [],
source: "testTranslateBy\x0a\x09self assert: (3@3 translateBy: 0@1) equals: 3@4.\x0a\x09self assert: (3@3 translateBy: 0@1 negated) equals: 3@2.\x0a\x09self assert: (3@3 translateBy: 2@3) equals: 5@6.\x0a\x09self assert: (3@3 translateBy: 3 negated @0) equals: 0@3.",
messageSends: ["assert:equals:", "translateBy:", "@", "negated"],
referencedClasses: []
}),
globals.PointTest);



smalltalk.addClass('QueueTest', globals.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testNextIfAbsent",
protocol: 'tests',
fn: function (){
var self=this;
var queue;
function $Queue(){return globals.Queue||(typeof Queue=="undefined"?nil:Queue)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
queue=_st($Queue())._new();
_st(queue)._nextPut_("index1");
$2=_st(queue)._nextIfAbsent_("empty");
$ctx1.sendIdx["nextIfAbsent:"]=1;
$1=_st($2).__eq("index1");
$ctx1.sendIdx["="]=1;
self._assert_($1);
self._deny_(_st(_st(queue)._nextIfAbsent_("empty")).__eq("index1"));
return self}, function($ctx1) {$ctx1.fill(self,"testNextIfAbsent",{queue:queue},globals.QueueTest)})},
args: [],
source: "testNextIfAbsent\x0a\x09| queue |\x0a\x09queue := Queue new.\x0a\x09queue nextPut: 'index1'. \x0a\x0a\x09self assert: (queue  nextIfAbsent: 'empty') = 'index1'.\x0a\x09self deny: (queue  nextIfAbsent: 'empty') = 'index1'",
messageSends: ["new", "nextPut:", "assert:", "=", "nextIfAbsent:", "deny:"],
referencedClasses: ["Queue"]
}),
globals.QueueTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testQueueNext",
protocol: 'tests',
fn: function (){
var self=this;
var queue;
function $Queue(){return globals.Queue||(typeof Queue=="undefined"?nil:Queue)}
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$6,$5;
queue=_st($Queue())._new();
$1=queue;
_st($1)._nextPut_("index1");
$ctx1.sendIdx["nextPut:"]=1;
$2=_st($1)._nextPut_("index2");
$4=_st(queue)._next();
$ctx1.sendIdx["next"]=1;
$3=_st($4).__eq("index1");
$ctx1.sendIdx["="]=1;
self._assert_($3);
$6=_st(queue)._next();
$ctx1.sendIdx["next"]=2;
$5=_st($6).__eq("index");
self._deny_($5);
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(queue)._next();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testQueueNext",{queue:queue},globals.QueueTest)})},
args: [],
source: "testQueueNext\x0a\x09| queue |               \x0a\x09queue := Queue new.\x0a\x09queue \x0a\x09\x09nextPut: 'index1';\x0a\x09\x09nextPut: 'index2'.\x0a\x0a\x09self assert: queue next = 'index1'.\x0a\x09self deny: queue next = 'index'.\x0a\x09self should: [ queue next ] raise: Error",
messageSends: ["new", "nextPut:", "assert:", "=", "next", "deny:", "should:raise:"],
referencedClasses: ["Queue", "Error"]
}),
globals.QueueTest);



smalltalk.addClass('RandomTest', globals.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testAtRandomNumber",
protocol: 'tests',
fn: function (){
var self=this;
var val;
return smalltalk.withContext(function($ctx1) { 
(100)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
val=(10)._atRandom();
val;
self._assert_(_st(val).__gt((0)));
$ctx2.sendIdx["assert:"]=1;
return self._assert_(_st(val).__lt((11)));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testAtRandomNumber",{val:val},globals.RandomTest)})},
args: [],
source: "testAtRandomNumber\x0a\x09|val|\x09\x0a\x0a\x09100 timesRepeat: [\x0a\x09\x09val := 10 atRandom.\x09\x0a\x09\x09self assert: (val > 0).\x0a\x09\x09self assert: (val <11)\x0a\x09]",
messageSends: ["timesRepeat:", "atRandom", "assert:", ">", "<"],
referencedClasses: []
}),
globals.RandomTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAtRandomSequenceableCollection",
protocol: 'tests',
fn: function (){
var self=this;
var val;
return smalltalk.withContext(function($ctx1) { 
var $3,$4,$2,$1;
(100)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
val="abc"._atRandom();
val;
$3=_st(val).__eq("a");
$ctx2.sendIdx["="]=1;
$4=_st(val).__eq("b");
$ctx2.sendIdx["="]=2;
$2=_st($3).__or($4);
$1=_st($2).__or(_st(val).__eq("c"));
$ctx2.sendIdx["|"]=1;
return self._assert_($1);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testAtRandomSequenceableCollection",{val:val},globals.RandomTest)})},
args: [],
source: "testAtRandomSequenceableCollection\x0a\x09|val|\x0a\x09\x0a\x09100 timesRepeat: [\x0a\x09\x09val := 'abc' atRandom.\x0a\x09\x09self assert: ((val = 'a') | (val = 'b') | (val = 'c' )).\x0a\x09].",
messageSends: ["timesRepeat:", "atRandom", "assert:", "|", "="],
referencedClasses: []
}),
globals.RandomTest);

smalltalk.addMethod(
smalltalk.method({
selector: "textNext",
protocol: 'tests',
fn: function (){
var self=this;
function $Random(){return globals.Random||(typeof Random=="undefined"?nil:Random)}
return smalltalk.withContext(function($ctx1) { 
var $1;
(10000)._timesRepeat_((function(){
var current,next;
return smalltalk.withContext(function($ctx2) {
next=_st(_st($Random())._new())._next();
next;
self._assert_(_st(next).__gt_eq((0)));
$ctx2.sendIdx["assert:"]=1;
self._assert_(_st(next).__lt((1)));
$1=_st(current).__eq(next);
$ctx2.sendIdx["="]=1;
self._deny_($1);
return _st(next).__eq(current);
}, function($ctx2) {$ctx2.fillBlock({current:current,next:next},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"textNext",{},globals.RandomTest)})},
args: [],
source: "textNext\x0a\x0a\x0910000 timesRepeat: [\x0a\x09\x09\x09| current next |\x0a\x09\x09\x09next := Random new next.\x0a\x09\x09\x09self assert: (next >= 0).\x0a\x09\x09\x09self assert: (next < 1).\x0a\x09\x09\x09self deny: current = next.\x0a\x09\x09\x09next = current ]",
messageSends: ["timesRepeat:", "next", "new", "assert:", ">=", "<", "deny:", "="],
referencedClasses: ["Random"]
}),
globals.RandomTest);



smalltalk.addClass('StreamTest', globals.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "collectionClass",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._collectionClass();
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{},globals.StreamTest)})},
args: [],
source: "collectionClass\x0a\x09^ self class collectionClass",
messageSends: ["collectionClass", "class"],
referencedClasses: []
}),
globals.StreamTest);

smalltalk.addMethod(
smalltalk.method({
selector: "newCollection",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._collectionClass())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"newCollection",{},globals.StreamTest)})},
args: [],
source: "newCollection\x0a\x09^ self collectionClass new",
messageSends: ["new", "collectionClass"],
referencedClasses: []
}),
globals.StreamTest);

smalltalk.addMethod(
smalltalk.method({
selector: "newStream",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._collectionClass())._new())._stream();
return $1;
}, function($ctx1) {$ctx1.fill(self,"newStream",{},globals.StreamTest)})},
args: [],
source: "newStream\x0a\x09^ self collectionClass new stream",
messageSends: ["stream", "new", "collectionClass"],
referencedClasses: []
}),
globals.StreamTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAtStartAtEnd",
protocol: 'tests',
fn: function (){
var self=this;
var stream;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
stream=self._newStream();
$1=_st(stream)._atStart();
$ctx1.sendIdx["atStart"]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
$2=_st(stream)._atEnd();
$ctx1.sendIdx["atEnd"]=1;
self._assert_($2);
$ctx1.sendIdx["assert:"]=2;
_st(stream)._nextPutAll_(self._newCollection());
$3=_st(stream)._atEnd();
$ctx1.sendIdx["atEnd"]=2;
self._assert_($3);
$4=_st(stream)._atStart();
$ctx1.sendIdx["atStart"]=2;
self._deny_($4);
$ctx1.sendIdx["deny:"]=1;
_st(stream)._position_((1));
self._deny_(_st(stream)._atEnd());
$ctx1.sendIdx["deny:"]=2;
self._deny_(_st(stream)._atStart());
return self}, function($ctx1) {$ctx1.fill(self,"testAtStartAtEnd",{stream:stream},globals.StreamTest)})},
args: [],
source: "testAtStartAtEnd\x0a\x09| stream |\x0a\x09\x0a\x09stream := self newStream.\x0a\x09self assert: stream atStart.\x0a\x09self assert: stream atEnd.\x0a\x09\x0a\x09stream nextPutAll: self newCollection.\x0a\x09self assert: stream atEnd.\x0a\x09self deny: stream atStart.\x0a\x09\x0a\x09stream position: 1.\x0a\x09self deny: stream atEnd.\x0a\x09self deny: stream atStart",
messageSends: ["newStream", "assert:", "atStart", "atEnd", "nextPutAll:", "newCollection", "deny:", "position:"],
referencedClasses: []
}),
globals.StreamTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testContents",
protocol: 'tests',
fn: function (){
var self=this;
var stream;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
stream=self._newStream();
$1=stream;
$2=self._newCollection();
$ctx1.sendIdx["newCollection"]=1;
_st($1)._nextPutAll_($2);
self._assert_equals_(_st(stream)._contents(),self._newCollection());
return self}, function($ctx1) {$ctx1.fill(self,"testContents",{stream:stream},globals.StreamTest)})},
args: [],
source: "testContents\x0a\x09| stream |\x0a\x09\x0a\x09stream := self newStream.\x0a\x09stream nextPutAll: self newCollection.\x0a\x09\x0a\x09self assert: stream contents equals: self newCollection",
messageSends: ["newStream", "nextPutAll:", "newCollection", "assert:equals:", "contents"],
referencedClasses: []
}),
globals.StreamTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIsEmpty",
protocol: 'tests',
fn: function (){
var self=this;
var stream;
return smalltalk.withContext(function($ctx1) { 
var $1;
stream=self._newStream();
$1=_st(stream)._isEmpty();
$ctx1.sendIdx["isEmpty"]=1;
self._assert_($1);
_st(stream)._nextPutAll_(self._newCollection());
self._deny_(_st(stream)._isEmpty());
return self}, function($ctx1) {$ctx1.fill(self,"testIsEmpty",{stream:stream},globals.StreamTest)})},
args: [],
source: "testIsEmpty\x0a\x09| stream |\x0a\x09\x0a\x09stream := self newStream.\x0a\x09self assert: stream isEmpty.\x0a\x09\x0a\x09stream nextPutAll: self newCollection.\x0a\x09self deny: stream isEmpty",
messageSends: ["newStream", "assert:", "isEmpty", "nextPutAll:", "newCollection", "deny:"],
referencedClasses: []
}),
globals.StreamTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPosition",
protocol: 'tests',
fn: function (){
var self=this;
var collection,stream;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
collection=self._newCollection();
stream=self._newStream();
_st(stream)._nextPutAll_(collection);
$1=_st(stream)._position();
$ctx1.sendIdx["position"]=1;
self._assert_equals_($1,_st(collection)._size());
$ctx1.sendIdx["assert:equals:"]=1;
_st(stream)._position_((0));
$2=_st(stream)._position();
$ctx1.sendIdx["position"]=2;
self._assert_equals_($2,(0));
$ctx1.sendIdx["assert:equals:"]=2;
_st(stream)._next();
$ctx1.sendIdx["next"]=1;
$3=_st(stream)._position();
$ctx1.sendIdx["position"]=3;
self._assert_equals_($3,(1));
$ctx1.sendIdx["assert:equals:"]=3;
_st(stream)._next();
self._assert_equals_(_st(stream)._position(),(2));
return self}, function($ctx1) {$ctx1.fill(self,"testPosition",{collection:collection,stream:stream},globals.StreamTest)})},
args: [],
source: "testPosition\x0a\x09| collection stream |\x0a\x09\x0a\x09collection := self newCollection.\x0a\x09stream := self newStream.\x0a\x09\x0a\x09stream nextPutAll: collection.\x0a\x09self assert: stream position equals: collection size.\x0a\x09\x0a\x09stream position: 0.\x0a\x09self assert: stream position equals: 0.\x0a\x09\x0a\x09stream next.\x0a\x09self assert: stream position equals: 1.\x0a\x09\x0a\x09stream next.\x0a\x09self assert: stream position equals: 2",
messageSends: ["newCollection", "newStream", "nextPutAll:", "assert:equals:", "position", "size", "position:", "next"],
referencedClasses: []
}),
globals.StreamTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testReading",
protocol: 'tests',
fn: function (){
var self=this;
var stream,collection;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
collection=self._newCollection();
stream=self._newStream();
$1=stream;
_st($1)._nextPutAll_(collection);
$2=_st($1)._position_((0));
_st(collection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$3=_st(stream)._next();
$ctx2.sendIdx["next"]=1;
return self._assert_equals_($3,each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
self._assert_(_st(_st(stream)._next())._isNil());
return self}, function($ctx1) {$ctx1.fill(self,"testReading",{stream:stream,collection:collection},globals.StreamTest)})},
args: [],
source: "testReading\x0a\x09| stream collection |\x0a\x09\x0a\x09collection := self newCollection.\x0a\x09stream := self newStream.\x0a\x09\x0a\x09stream \x0a\x09\x09nextPutAll: collection;\x0a\x09\x09position: 0.\x0a\x09\x0a\x09collection do: [ :each |\x0a\x09\x09self assert: stream next equals: each ].\x0a\x09\x09\x0a\x09self assert: stream next isNil",
messageSends: ["newCollection", "newStream", "nextPutAll:", "position:", "do:", "assert:equals:", "next", "assert:", "isNil"],
referencedClasses: []
}),
globals.StreamTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testStreamContents",
protocol: 'tests',
fn: function (){
var self=this;
return self},
args: [],
source: "testStreamContents",
messageSends: [],
referencedClasses: []
}),
globals.StreamTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testWrite",
protocol: 'tests',
fn: function (){
var self=this;
var stream,collection;
return smalltalk.withContext(function($ctx1) { 
collection=self._newCollection();
stream=self._newStream();
_st(collection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(stream).__lt_lt(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
self._assert_equals_(_st(stream)._contents(),collection);
return self}, function($ctx1) {$ctx1.fill(self,"testWrite",{stream:stream,collection:collection},globals.StreamTest)})},
args: [],
source: "testWrite\x0a\x09| stream collection |\x0a\x09\x0a\x09collection := self newCollection.\x0a\x09stream := self newStream.\x0a\x09\x0a\x09collection do: [ :each | stream << each ].\x0a\x09self assert: stream contents equals: collection",
messageSends: ["newCollection", "newStream", "do:", "<<", "assert:equals:", "contents"],
referencedClasses: []
}),
globals.StreamTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testWriting",
protocol: 'tests',
fn: function (){
var self=this;
var stream,collection;
return smalltalk.withContext(function($ctx1) { 
var $1;
collection=self._newCollection();
stream=self._newStream();
$ctx1.sendIdx["newStream"]=1;
_st(collection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(stream)._nextPut_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$1=_st(stream)._contents();
$ctx1.sendIdx["contents"]=1;
self._assert_equals_($1,collection);
$ctx1.sendIdx["assert:equals:"]=1;
stream=self._newStream();
_st(stream)._nextPutAll_(collection);
self._assert_equals_(_st(stream)._contents(),collection);
return self}, function($ctx1) {$ctx1.fill(self,"testWriting",{stream:stream,collection:collection},globals.StreamTest)})},
args: [],
source: "testWriting\x0a\x09| stream collection |\x0a\x09\x0a\x09collection := self newCollection.\x0a\x09stream := self newStream.\x0a\x09\x0a\x09collection do: [ :each | stream nextPut: each ].\x0a\x09self assert: stream contents equals: collection.\x0a\x09\x0a\x09stream := self newStream.\x0a\x09stream nextPutAll: collection.\x0a\x09self assert: stream contents equals: collection",
messageSends: ["newCollection", "newStream", "do:", "nextPut:", "assert:equals:", "contents", "nextPutAll:"],
referencedClasses: []
}),
globals.StreamTest);


smalltalk.addMethod(
smalltalk.method({
selector: "collectionClass",
protocol: 'accessing',
fn: function (){
var self=this;
return nil;
},
args: [],
source: "collectionClass\x0a\x09^ nil",
messageSends: [],
referencedClasses: []
}),
globals.StreamTest.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._collectionClass())._isNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},globals.StreamTest.klass)})},
args: [],
source: "isAbstract\x0a\x09^ self collectionClass isNil",
messageSends: ["isNil", "collectionClass"],
referencedClasses: []
}),
globals.StreamTest.klass);


smalltalk.addClass('ArrayStreamTest', globals.StreamTest, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "newCollection",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[true,(1),(3).__at((4)),"foo"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"newCollection",{},globals.ArrayStreamTest)})},
args: [],
source: "newCollection\x0a\x09^ { true. 1. 3@4. 'foo' }",
messageSends: ["@"],
referencedClasses: []
}),
globals.ArrayStreamTest);


smalltalk.addMethod(
smalltalk.method({
selector: "collectionClass",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return $Array();
},
args: [],
source: "collectionClass\x0a\x09^ Array",
messageSends: [],
referencedClasses: ["Array"]
}),
globals.ArrayStreamTest.klass);


smalltalk.addClass('StringStreamTest', globals.StreamTest, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "newCollection",
protocol: 'accessing',
fn: function (){
var self=this;
return "hello world";
},
args: [],
source: "newCollection\x0a\x09^ 'hello world'",
messageSends: [],
referencedClasses: []
}),
globals.StringStreamTest);


smalltalk.addMethod(
smalltalk.method({
selector: "collectionClass",
protocol: 'accessing',
fn: function (){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
return $String();
},
args: [],
source: "collectionClass\x0a\x09^ String",
messageSends: [],
referencedClasses: ["String"]
}),
globals.StringStreamTest.klass);


smalltalk.addClass('UndefinedTest', globals.TestCase, [], 'Kernel-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testCopying",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(nil._copy(),nil);
return self}, function($ctx1) {$ctx1.fill(self,"testCopying",{},globals.UndefinedTest)})},
args: [],
source: "testCopying\x0a\x09self assert: nil copy equals: nil",
messageSends: ["assert:equals:", "copy"],
referencedClasses: []
}),
globals.UndefinedTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDeepCopy",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(nil._deepCopy()).__eq(nil));
return self}, function($ctx1) {$ctx1.fill(self,"testDeepCopy",{},globals.UndefinedTest)})},
args: [],
source: "testDeepCopy\x0a\x09self assert: nil deepCopy = nil",
messageSends: ["assert:", "=", "deepCopy"],
referencedClasses: []
}),
globals.UndefinedTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIfNil",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$6,$5,$receiver;
if(($receiver = nil) == null || $receiver.isNil){
$1=true;
} else {
$1=nil;
};
self._assert_equals_($1,true);
$ctx1.sendIdx["assert:equals:"]=1;
if(($receiver = nil) == null || $receiver.isNil){
$3=nil;
} else {
$3=true;
};
$2=_st($3).__eq(true);
$ctx1.sendIdx["="]=1;
self._deny_($2);
$ctx1.sendIdx["deny:"]=1;
if(($receiver = nil) == null || $receiver.isNil){
$4=true;
} else {
$4=false;
};
self._assert_equals_($4,true);
if(($receiver = nil) == null || $receiver.isNil){
$6=false;
} else {
$6=true;
};
$5=_st($6).__eq(true);
self._deny_($5);
return self}, function($ctx1) {$ctx1.fill(self,"testIfNil",{},globals.UndefinedTest)})},
args: [],
source: "testIfNil\x0a\x09self assert: (nil ifNil: [ true ]) equals: true.\x0a\x09self deny: (nil ifNotNil: [ true ]) = true.\x0a\x09self assert: (nil ifNil: [ true ] ifNotNil: [ false ]) equals: true.\x0a\x09self deny: (nil ifNotNil: [ true ] ifNil: [ false ]) = true",
messageSends: ["assert:equals:", "ifNil:", "deny:", "=", "ifNotNil:", "ifNil:ifNotNil:", "ifNotNil:ifNil:"],
referencedClasses: []
}),
globals.UndefinedTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIsNil",
protocol: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(nil._isNil());
self._deny_(nil._notNil());
return self}, function($ctx1) {$ctx1.fill(self,"testIsNil",{},globals.UndefinedTest)})},
args: [],
source: "testIsNil\x0a\x09self assert: nil isNil.\x0a\x09self deny: nil notNil.",
messageSends: ["assert:", "isNil", "deny:", "notNil"],
referencedClasses: []
}),
globals.UndefinedTest);


});
