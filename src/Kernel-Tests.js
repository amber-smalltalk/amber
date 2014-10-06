define("amber_core/Kernel-Tests", ["amber/boot", "amber_core/SUnit", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Kernel-Tests');
$core.packages["Kernel-Tests"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass('AnnouncementSubscriptionTest', $globals.TestCase, [], 'Kernel-Tests');
$core.addMethod(
$core.method({
selector: "testAddExtensionMethod",
protocol: 'tests',
fn: function (){
var self=this;
var method,dirty;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$5,$8,$7,$6,$9,$10;
$2=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._package();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["package"]=1;
//>>excludeEnd("ctx");
dirty=$recv($1)._isDirty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isDirty"]=1;
//>>excludeEnd("ctx");
$4=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._package();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["package"]=2;
//>>excludeEnd("ctx");
$recv($3)._beClean();
$5=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=3;
//>>excludeEnd("ctx");
method=$recv($5)._compile_protocol_("doNothing","**not-a-package");
$8=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=4;
//>>excludeEnd("ctx");
$7=$recv($8)._package();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["package"]=3;
//>>excludeEnd("ctx");
$6=$recv($7)._isDirty();
self._deny_($6);
$9=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=5;
//>>excludeEnd("ctx");
$recv($9)._removeCompiledMethod_(method);
$10=dirty;
if($core.assert($10)){
$recv($recv(self._class())._package())._beDirty();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAddExtensionMethod",{method:method,dirty:dirty},$globals.AnnouncementSubscriptionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAddExtensionMethod\x0a\x09| method dirty |\x0a\x09dirty := self class package isDirty.\x0a\x09self class package beClean.\x0a\x09method := self class compile: 'doNothing' protocol: '**not-a-package'.\x0a\x09self deny: self class package isDirty.\x0a\x09\x0a\x09self class removeCompiledMethod: method.\x0a\x09dirty ifTrue: [ self class package beDirty ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isDirty", "package", "class", "beClean", "compile:protocol:", "deny:", "removeCompiledMethod:", "ifTrue:", "beDirty"]
}),
$globals.AnnouncementSubscriptionTest);

$core.addMethod(
$core.method({
selector: "testHandlesAnnouncement",
protocol: 'tests',
fn: function (){
var self=this;
var subscription,announcementClass1,announcementClass2,classBuilder;
function $ClassBuilder(){return $globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
function $SystemAnnouncement(){return $globals.SystemAnnouncement||(typeof SystemAnnouncement=="undefined"?nil:SystemAnnouncement)}
function $AnnouncementSubscription(){return $globals.AnnouncementSubscription||(typeof AnnouncementSubscription=="undefined"?nil:AnnouncementSubscription)}
function $Object(){return $globals.Object||(typeof Object=="undefined"?nil:Object)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
classBuilder=$recv($ClassBuilder())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
announcementClass1=$recv(classBuilder)._basicAddSubclassOf_named_instanceVariableNames_package_($SystemAnnouncement(),"TestAnnouncement1",[],"Kernel-Tests");
subscription=$recv($recv($AnnouncementSubscription())._new())._announcementClass_($SystemAnnouncement());
$1=$recv(subscription)._handlesAnnouncement_($SystemAnnouncement());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["handlesAnnouncement:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=$recv(subscription)._handlesAnnouncement_(announcementClass1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["handlesAnnouncement:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($recv(subscription)._handlesAnnouncement_($Object()),false);
$recv(classBuilder)._basicRemoveClass_(announcementClass1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testHandlesAnnouncement",{subscription:subscription,announcementClass1:announcementClass1,announcementClass2:announcementClass2,classBuilder:classBuilder},$globals.AnnouncementSubscriptionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testHandlesAnnouncement\x0a\x09| subscription announcementClass1 announcementClass2 classBuilder |\x0a\x09\x0a\x09classBuilder := ClassBuilder new.\x0a\x09announcementClass1 := classBuilder basicAddSubclassOf: SystemAnnouncement named: 'TestAnnouncement1' instanceVariableNames: #() package: 'Kernel-Tests'.\x0a\x09\x0a\x09subscription := AnnouncementSubscription new announcementClass: SystemAnnouncement.\x0a\x09\x22Test whether the same class triggers the announcement\x22\x0a\x09self assert: (subscription handlesAnnouncement: SystemAnnouncement) equals: true.\x0a\x09\x22Test whether a subclass triggers the announcement\x22\x0a\x09self assert: (subscription handlesAnnouncement: announcementClass1) equals: true.\x0a\x09\x22Test whether an unrelated class does not trigger the announcement\x22\x0a\x09self assert: (subscription handlesAnnouncement: Object) equals: false.\x0a\x09\x0a\x09classBuilder basicRemoveClass: announcementClass1.",
referencedClasses: ["ClassBuilder", "SystemAnnouncement", "AnnouncementSubscription", "Object"],
//>>excludeEnd("ide");
messageSends: ["new", "basicAddSubclassOf:named:instanceVariableNames:package:", "announcementClass:", "assert:equals:", "handlesAnnouncement:", "basicRemoveClass:"]
}),
$globals.AnnouncementSubscriptionTest);



$core.addClass('AnnouncerTest', $globals.TestCase, [], 'Kernel-Tests');
$core.addMethod(
$core.method({
selector: "testOnDo",
protocol: 'tests',
fn: function (){
var self=this;
var counter,announcer;
function $Announcer(){return $globals.Announcer||(typeof Announcer=="undefined"?nil:Announcer)}
function $SystemAnnouncement(){return $globals.SystemAnnouncement||(typeof SystemAnnouncement=="undefined"?nil:SystemAnnouncement)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
counter=(0);
announcer=$recv($Announcer())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv(announcer)._on_do_($SystemAnnouncement(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
counter=$recv(counter).__plus((1));
return counter;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=announcer;
$2=$recv($SystemAnnouncement())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$recv($1)._announce_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["announce:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_(counter,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$recv(announcer)._announce_($recv($SystemAnnouncement())._new());
self._assert_equals_(counter,(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testOnDo",{counter:counter,announcer:announcer},$globals.AnnouncerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testOnDo\x0a\x09| counter announcer |\x0a\x09\x0a\x09counter := 0.\x0a\x09announcer := Announcer new.\x0a\x09announcer on: SystemAnnouncement do: [ counter := counter + 1 ].\x0a\x0a\x09announcer announce: (SystemAnnouncement new).\x0a\x09self assert: counter equals: 1.\x0a\x0a\x09announcer announce: (SystemAnnouncement new).\x0a\x09self assert: counter equals: 2.",
referencedClasses: ["Announcer", "SystemAnnouncement"],
//>>excludeEnd("ide");
messageSends: ["new", "on:do:", "+", "announce:", "assert:equals:"]
}),
$globals.AnnouncerTest);

$core.addMethod(
$core.method({
selector: "testOnDoFor",
protocol: 'tests',
fn: function (){
var self=this;
var counter,announcer;
function $Announcer(){return $globals.Announcer||(typeof Announcer=="undefined"?nil:Announcer)}
function $SystemAnnouncement(){return $globals.SystemAnnouncement||(typeof SystemAnnouncement=="undefined"?nil:SystemAnnouncement)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
counter=(0);
announcer=$recv($Announcer())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv(announcer)._on_do_for_($SystemAnnouncement(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
counter=$recv(counter).__plus((1));
return counter;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),self);
$1=announcer;
$2=$recv($SystemAnnouncement())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$recv($1)._announce_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["announce:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_(counter,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$3=announcer;
$4=$recv($SystemAnnouncement())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$recv($3)._announce_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["announce:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_(counter,(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$recv(announcer)._unsubscribe_(self);
$recv(announcer)._announce_($recv($SystemAnnouncement())._new());
self._assert_equals_(counter,(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testOnDoFor",{counter:counter,announcer:announcer},$globals.AnnouncerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testOnDoFor\x0a\x09| counter announcer |\x0a\x09\x0a\x09counter := 0.\x0a\x09announcer := Announcer new.\x0a\x09announcer on: SystemAnnouncement do: [ counter := counter + 1 ] for: self.\x0a\x0a\x09announcer announce: (SystemAnnouncement new).\x0a\x09self assert: counter equals: 1.\x0a\x0a\x09announcer announce: (SystemAnnouncement new).\x0a\x09self assert: counter equals: 2.\x0a\x09\x0a\x09announcer unsubscribe: self.\x0a\x09\x0a\x09announcer announce: (SystemAnnouncement new).\x0a\x09self assert: counter equals: 2.",
referencedClasses: ["Announcer", "SystemAnnouncement"],
//>>excludeEnd("ide");
messageSends: ["new", "on:do:for:", "+", "announce:", "assert:equals:", "unsubscribe:"]
}),
$globals.AnnouncerTest);

$core.addMethod(
$core.method({
selector: "testOnDoOnce",
protocol: 'tests',
fn: function (){
var self=this;
var counter,announcer;
function $Announcer(){return $globals.Announcer||(typeof Announcer=="undefined"?nil:Announcer)}
function $SystemAnnouncement(){return $globals.SystemAnnouncement||(typeof SystemAnnouncement=="undefined"?nil:SystemAnnouncement)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
counter=(0);
announcer=$recv($Announcer())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv(announcer)._on_doOnce_($SystemAnnouncement(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
counter=$recv(counter).__plus((1));
return counter;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=announcer;
$2=$recv($SystemAnnouncement())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$recv($1)._announce_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["announce:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_(counter,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$recv(announcer)._announce_($recv($SystemAnnouncement())._new());
self._assert_equals_(counter,(1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testOnDoOnce",{counter:counter,announcer:announcer},$globals.AnnouncerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testOnDoOnce\x0a\x09| counter announcer |\x0a\x09\x0a\x09counter := 0.\x0a\x09announcer := Announcer new.\x0a\x09announcer on: SystemAnnouncement doOnce: [ counter := counter + 1 ].\x0a\x0a\x09announcer announce: (SystemAnnouncement new).\x0a\x09self assert: counter equals: 1.\x0a\x0a\x09announcer announce: (SystemAnnouncement new).\x0a\x09self assert: counter equals: 1.",
referencedClasses: ["Announcer", "SystemAnnouncement"],
//>>excludeEnd("ide");
messageSends: ["new", "on:doOnce:", "+", "announce:", "assert:equals:"]
}),
$globals.AnnouncerTest);



$core.addClass('BlockClosureTest', $globals.TestCase, [], 'Kernel-Tests');
$core.addMethod(
$core.method({
selector: "testCanClearInterval",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv($Error())._new())._signal();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}))._valueWithInterval_((0)))._clearInterval();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCanClearInterval",{},$globals.BlockClosureTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCanClearInterval\x0a\x09self shouldnt: [ ([ Error new signal ] valueWithInterval: 0) clearInterval ] raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["shouldnt:raise:", "clearInterval", "valueWithInterval:", "signal", "new"]
}),
$globals.BlockClosureTest);

$core.addMethod(
$core.method({
selector: "testCanClearTimeout",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv($Error())._new())._signal();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_((0)))._clearTimeout();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCanClearTimeout",{},$globals.BlockClosureTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCanClearTimeout\x0a\x09self shouldnt: [ ([ Error new signal ] valueWithTimeout: 0) clearTimeout ] raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["shouldnt:raise:", "clearTimeout", "valueWithTimeout:", "signal", "new"]
}),
$globals.BlockClosureTest);

$core.addMethod(
$core.method({
selector: "testCompiledSource",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_($recv($recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (1).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._compiledSource())._includesSubString_("function"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCompiledSource",{},$globals.BlockClosureTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCompiledSource\x0a\x09self assert: ([ 1+1 ] compiledSource includesSubString: 'function')",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "includesSubString:", "compiledSource", "+"]
}),
$globals.BlockClosureTest);

$core.addMethod(
$core.method({
selector: "testCurrySelf",
protocol: 'tests',
fn: function (){
var self=this;
var curriedMethod,array;
function $ClassBuilder(){return $globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
curriedMethod=$recv($recv((function(selfarg,x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(selfarg)._at_(x);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({selfarg:selfarg,x:x},$ctx1,1)});
//>>excludeEnd("ctx");
}))._currySelf())._asCompiledMethod_("foo:");
array=[(3), (1), (4)];
$recv($recv($ClassBuilder())._new())._installMethod_forClass_protocol_(curriedMethod,$Array(),"**test helper");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._assert_equals_($recv(array)._foo_((2)),(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))._ensure_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Array())._removeCompiledMethod_(curriedMethod);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCurrySelf",{curriedMethod:curriedMethod,array:array},$globals.BlockClosureTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCurrySelf\x0a\x09| curriedMethod array |\x0a\x09curriedMethod := [ :selfarg :x | selfarg at: x ] currySelf asCompiledMethod: 'foo:'.\x0a\x09array := #(3 1 4).\x0a\x09ClassBuilder new installMethod: curriedMethod forClass: Array protocol: '**test helper'.\x0a\x09[ self assert: (array foo: 2) equals: 1 ]\x0a\x09ensure: [ Array removeCompiledMethod: curriedMethod ]",
referencedClasses: ["ClassBuilder", "Array"],
//>>excludeEnd("ide");
messageSends: ["asCompiledMethod:", "currySelf", "at:", "installMethod:forClass:protocol:", "new", "ensure:", "assert:equals:", "foo:", "removeCompiledMethod:"]
}),
$globals.BlockClosureTest);

$core.addMethod(
$core.method({
selector: "testEnsure",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_equals_($recv((function(){
return (3);

}))._ensure_((function(){
return (4);

})),(3));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testEnsure",{},$globals.BlockClosureTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testEnsure\x0a\x09self assert: ([ 3 ] ensure: [ 4 ]) equals: 3",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "ensure:"]
}),
$globals.BlockClosureTest);

$core.addMethod(
$core.method({
selector: "testEnsureRaises",
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
return $recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv($Error())._new())._signal();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}))._ensure_((function(){
return true;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testEnsureRaises",{},$globals.BlockClosureTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testEnsureRaises\x0a\x09self should: [ [Error new signal ] ensure: [ true ]] raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["should:raise:", "ensure:", "signal", "new"]
}),
$globals.BlockClosureTest);

$core.addMethod(
$core.method({
selector: "testExceptionSemantics",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._timeout_((100));
$recv(self._async_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
self._assert_(true);
$recv($Error())._signal();
self._deny_(true);
return self._finished();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["finished"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._finished();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({ex:ex},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
})))._valueWithTimeout_((0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testExceptionSemantics",{},$globals.BlockClosureTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testExceptionSemantics\x0a\x09\x22See https://github.com/NicolasPetton/amber/issues/314\x22\x0a\x09self timeout: 100.\x0a\x09\x0a\x09(self async: [\x0a\x09\x09[\x0a\x09\x09\x09self assert: true.\x0a\x09\x09\x09Error signal.\x0a\x09\x09\x09\x22The following should *not* be run\x22\x0a\x09\x09\x09self deny: true.\x0a\x09\x09\x09self finished.\x0a\x09\x09] on: Error do: [ :ex | self finished ]\x0a\x09]) valueWithTimeout: 0",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["timeout:", "valueWithTimeout:", "async:", "on:do:", "assert:", "signal", "deny:", "finished"]
}),
$globals.BlockClosureTest);

$core.addMethod(
$core.method({
selector: "testNewWithValues",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

	function TestConstructor(arg1, arg2, arg3) {}
	TestConstructor.prototype.name = 'theTestPrototype';

	var wrappedConstructor = $recv(TestConstructor);
	var result = wrappedConstructor._newWithValues_([1, 2, 3 ]);
	self._assert_(result instanceof TestConstructor);
	self._assert_equals_(result.name, 'theTestPrototype');

	"newWithValues: cannot help if the argument list is wrong, and should warn that a mistake was made."
	self._should_raise_(function () {wrappedConstructor._newWithValues_('single argument');}, $globals.Error);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNewWithValues",{},$globals.BlockClosureTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNewWithValues\x0a<\x0a\x09function TestConstructor(arg1, arg2, arg3) {}\x0a\x09TestConstructor.prototype.name = 'theTestPrototype';\x0a\x0a\x09var wrappedConstructor = $recv(TestConstructor);\x0a\x09var result = wrappedConstructor._newWithValues_([1, 2, 3 ]);\x0a\x09self._assert_(result instanceof TestConstructor);\x0a\x09self._assert_equals_(result.name, 'theTestPrototype');\x0a\x0a\x09\x22newWithValues: cannot help if the argument list is wrong, and should warn that a mistake was made.\x22\x0a\x09self._should_raise_(function () {wrappedConstructor._newWithValues_('single argument');}, $globals.Error);\x0a>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockClosureTest);

$core.addMethod(
$core.method({
selector: "testNumArgs",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv((function(){

}))._numArgs();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["numArgs"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($recv((function(a,b){

}))._numArgs(),(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNumArgs",{},$globals.BlockClosureTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNumArgs\x0a\x09self assert: [] numArgs equals: 0.\x0a\x09self assert: [ :a :b | ] numArgs equals: 2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "numArgs"]
}),
$globals.BlockClosureTest);

$core.addMethod(
$core.method({
selector: "testOnDo",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_($recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($Error())._new())._signal();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(ex){
return true;

})));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testOnDo",{},$globals.BlockClosureTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testOnDo\x0a\x09self assert: ([ Error new signal ] on: Error do: [ :ex | true ])",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["assert:", "on:do:", "signal", "new"]
}),
$globals.BlockClosureTest);

$core.addMethod(
$core.method({
selector: "testValue",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (1).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($recv((function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(x).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,2)});
//>>excludeEnd("ctx");
}))._value_((2)),(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($recv((function(x,y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(x).__star(y);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x,y:y},$ctx1,3)});
//>>excludeEnd("ctx");
}))._value_value_((2),(4)),(8));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($recv((function(a,b,c){
return (1);

}))._value(),(1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testValue",{},$globals.BlockClosureTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testValue\x0a\x09self assert: ([ 1+1 ] value) equals: 2.\x0a\x09self assert: ([ :x | x +1 ] value: 2) equals: 3.\x0a\x09self assert: ([ :x :y | x*y ] value: 2 value: 4) equals: 8.\x0a\x0a\x09\x22Arguments are optional in Amber. This isn't ANSI compliant.\x22\x0a\x0a\x09self assert: ([ :a :b :c | 1 ] value) equals: 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "value", "+", "value:", "value:value:", "*"]
}),
$globals.BlockClosureTest);

$core.addMethod(
$core.method({
selector: "testValueWithPossibleArguments",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv((function(){
return (1);

}))._valueWithPossibleArguments_([(3), (4)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["valueWithPossibleArguments:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=$recv((function(a){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(a).__plus((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a},$ctx1,2)});
//>>excludeEnd("ctx");
}))._valueWithPossibleArguments_([(3), (4)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["valueWithPossibleArguments:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,(7));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($recv((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(a).__plus(b);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,3)});
//>>excludeEnd("ctx");
}))._valueWithPossibleArguments_([(3), (4), (5)]),(7));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testValueWithPossibleArguments",{},$globals.BlockClosureTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testValueWithPossibleArguments\x0a\x09self assert: ([ 1 ] valueWithPossibleArguments: #(3 4)) equals: 1.\x0a\x09self assert: ([ :a | a + 4 ] valueWithPossibleArguments: #(3 4)) equals: 7.\x0a\x09self assert: ([ :a :b | a + b ] valueWithPossibleArguments: #(3 4 5)) equals: 7.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "valueWithPossibleArguments:", "+"]
}),
$globals.BlockClosureTest);

$core.addMethod(
$core.method({
selector: "testWhileFalse",
protocol: 'tests',
fn: function (){
var self=this;
var i;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
i=(0);
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(i).__gt((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[">"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
i=$recv(i).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
return i;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
self._assert_equals_(i,(6));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
i=(0);
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
i=$recv(i).__plus((1));
i;
return $recv(i).__gt((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}))._whileFalse();
self._assert_equals_(i,(6));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testWhileFalse",{i:i},$globals.BlockClosureTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testWhileFalse\x0a\x09| i |\x0a\x09i := 0.\x0a\x09[ i > 5 ] whileFalse: [ i := i + 1 ].\x0a\x09self assert: i equals: 6.\x0a\x0a\x09i := 0.\x0a\x09[ i := i + 1. i > 5 ] whileFalse.\x0a\x09self assert: i equals: 6",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["whileFalse:", ">", "+", "assert:equals:", "whileFalse"]
}),
$globals.BlockClosureTest);

$core.addMethod(
$core.method({
selector: "testWhileTrue",
protocol: 'tests',
fn: function (){
var self=this;
var i;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
i=(0);
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(i).__lt((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
i=$recv(i).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
return i;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
self._assert_equals_(i,(5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
i=(0);
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
i=$recv(i).__plus((1));
i;
return $recv(i).__lt((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}))._whileTrue();
self._assert_equals_(i,(5));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testWhileTrue",{i:i},$globals.BlockClosureTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testWhileTrue\x0a\x09| i |\x0a\x09i := 0.\x0a\x09[ i < 5 ] whileTrue: [ i := i + 1 ].\x0a\x09self assert: i equals: 5.\x0a\x0a\x09i := 0.\x0a\x09[ i := i + 1. i < 5 ] whileTrue.\x0a\x09self assert: i equals: 5",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["whileTrue:", "<", "+", "assert:equals:", "whileTrue"]
}),
$globals.BlockClosureTest);



$core.addClass('BooleanTest', $globals.TestCase, [], 'Kernel-Tests');
$core.addMethod(
$core.method({
selector: "testEquality",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$10,$9,$12,$11;
$1=(0).__eq(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._deny_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$2=false.__eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
self._deny_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=2;
//>>excludeEnd("ctx");
$3="".__eq(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=3;
//>>excludeEnd("ctx");
self._deny_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=3;
//>>excludeEnd("ctx");
$4=false.__eq("");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=4;
//>>excludeEnd("ctx");
self._deny_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=4;
//>>excludeEnd("ctx");
$5=true.__eq(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=5;
//>>excludeEnd("ctx");
self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$6=false.__eq(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=6;
//>>excludeEnd("ctx");
self._deny_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=5;
//>>excludeEnd("ctx");
$7=true.__eq(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=7;
//>>excludeEnd("ctx");
self._deny_($7);
$8=false.__eq(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=8;
//>>excludeEnd("ctx");
self._assert_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$10=true._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$9=$recv($10).__eq(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=9;
//>>excludeEnd("ctx");
self._assert_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$12=true._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=2;
//>>excludeEnd("ctx");
$11=$recv($12).__eq(true._yourself());
self._assert_($11);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testEquality",{},$globals.BooleanTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testEquality\x0a\x09\x22We're on top of JS...just be sure to check the basics!\x22\x0a\x0a\x09self deny: 0 = false.\x0a\x09self deny: false = 0.\x0a\x09self deny: '' = false.\x0a\x09self deny: false = ''.\x0a\x0a\x09self assert: (true = true).\x0a\x09self deny: false = true.\x0a\x09self deny: true = false.\x0a\x09self assert: (false = false).\x0a\x0a\x09\x22JS may do some type coercing after sending a message\x22\x0a\x09self assert: (true yourself = true).\x0a\x09self assert: (true yourself = true yourself)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["deny:", "=", "assert:", "yourself"]
}),
$globals.BooleanTest);

$core.addMethod(
$core.method({
selector: "testIdentity",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$10,$9,$12,$11;
$1=(0).__eq_eq(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=1;
//>>excludeEnd("ctx");
self._deny_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$2=false.__eq_eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=2;
//>>excludeEnd("ctx");
self._deny_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=2;
//>>excludeEnd("ctx");
$3="".__eq_eq(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=3;
//>>excludeEnd("ctx");
self._deny_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=3;
//>>excludeEnd("ctx");
$4=false.__eq_eq("");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=4;
//>>excludeEnd("ctx");
self._deny_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=4;
//>>excludeEnd("ctx");
$5=true.__eq_eq(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=5;
//>>excludeEnd("ctx");
self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$6=false.__eq_eq(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=6;
//>>excludeEnd("ctx");
self._deny_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=5;
//>>excludeEnd("ctx");
$7=true.__eq_eq(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=7;
//>>excludeEnd("ctx");
self._deny_($7);
$8=false.__eq_eq(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=8;
//>>excludeEnd("ctx");
self._assert_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$10=true._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$9=$recv($10).__eq_eq(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=9;
//>>excludeEnd("ctx");
self._assert_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$12=true._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=2;
//>>excludeEnd("ctx");
$11=$recv($12).__eq_eq(true._yourself());
self._assert_($11);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIdentity",{},$globals.BooleanTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIdentity\x0a\x09\x22We're on top of JS...just be sure to check the basics!\x22\x0a\x0a\x09self deny: 0 == false.\x0a\x09self deny: false == 0.\x0a\x09self deny: '' == false.\x0a\x09self deny: false == ''.\x0a\x0a\x09self assert: true == true.\x0a\x09self deny: false == true.\x0a\x09self deny: true == false.\x0a\x09self assert: false == false.\x0a\x0a\x09\x22JS may do some type coercing after sending a message\x22\x0a\x09self assert: true yourself == true.\x0a\x09self assert: true yourself == true yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["deny:", "==", "assert:", "yourself"]
}),
$globals.BooleanTest);

$core.addMethod(
$core.method({
selector: "testIfTrueIfFalse",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8;
if($core.assert(true)){
$1="alternative block";
};
self._assert_equals_($1,"alternative block");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
if(!$core.assert(true)){
$2="alternative block";
};
self._assert_equals_($2,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
if($core.assert(false)){
$3="alternative block";
};
self._assert_equals_($3,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
if(!$core.assert(false)){
$4="alternative block";
};
self._assert_equals_($4,"alternative block");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
if($core.assert(false)){
$5="alternative block";
} else {
$5="alternative block2";
};
self._assert_equals_($5,"alternative block2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
if($core.assert(false)){
$6="alternative block2";
} else {
$6="alternative block";
};
self._assert_equals_($6,"alternative block");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=6;
//>>excludeEnd("ctx");
if($core.assert(true)){
$7="alternative block";
} else {
$7="alternative block2";
};
self._assert_equals_($7,"alternative block");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=7;
//>>excludeEnd("ctx");
if($core.assert(true)){
$8="alternative block2";
} else {
$8="alternative block";
};
self._assert_equals_($8,"alternative block2");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIfTrueIfFalse",{},$globals.BooleanTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIfTrueIfFalse\x0a\x0a\x09self assert: (true ifTrue: [ 'alternative block' ]) equals: 'alternative block'.\x0a\x09self assert: (true ifFalse: [ 'alternative block' ]) equals: nil.\x0a\x0a\x09self assert: (false ifTrue: [ 'alternative block' ]) equals: nil.\x0a\x09self assert: (false ifFalse: [ 'alternative block' ]) equals: 'alternative block'.\x0a\x0a\x09self assert: (false ifTrue: [ 'alternative block' ] ifFalse: [ 'alternative block2' ]) equals: 'alternative block2'.\x0a\x09self assert: (false ifFalse: [ 'alternative block' ] ifTrue: [ 'alternative block2' ]) equals: 'alternative block'.\x0a\x0a\x09self assert: (true ifTrue: [ 'alternative block' ] ifFalse: [ 'alternative block2' ]) equals: 'alternative block'.\x0a\x09self assert: (true ifFalse: [ 'alternative block' ] ifTrue: [ 'alternative block2' ]) equals: 'alternative block2'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "ifTrue:", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:"]
}),
$globals.BooleanTest);

$core.addMethod(
$core.method({
selector: "testIfTrueIfFalseWithBoxing",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5,$8,$7,$10,$9,$12,$11,$14,$13,$16,$15;
$2=true._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
if($core.assert($2)){
$1="alternative block";
};
self._assert_equals_($1,"alternative block");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$4=true._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=2;
//>>excludeEnd("ctx");
if(!$core.assert($4)){
$3="alternative block";
};
self._assert_equals_($3,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$6=false._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=3;
//>>excludeEnd("ctx");
if($core.assert($6)){
$5="alternative block";
};
self._assert_equals_($5,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$8=false._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=4;
//>>excludeEnd("ctx");
if(!$core.assert($8)){
$7="alternative block";
};
self._assert_equals_($7,"alternative block");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$10=false._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=5;
//>>excludeEnd("ctx");
if($core.assert($10)){
$9="alternative block";
} else {
$9="alternative block2";
};
self._assert_equals_($9,"alternative block2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
$12=false._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=6;
//>>excludeEnd("ctx");
if($core.assert($12)){
$11="alternative block2";
} else {
$11="alternative block";
};
self._assert_equals_($11,"alternative block");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=6;
//>>excludeEnd("ctx");
$14=true._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=7;
//>>excludeEnd("ctx");
if($core.assert($14)){
$13="alternative block";
} else {
$13="alternative block2";
};
self._assert_equals_($13,"alternative block");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=7;
//>>excludeEnd("ctx");
$16=true._yourself();
if($core.assert($16)){
$15="alternative block2";
} else {
$15="alternative block";
};
self._assert_equals_($15,"alternative block2");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIfTrueIfFalseWithBoxing",{},$globals.BooleanTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIfTrueIfFalseWithBoxing\x0a\x0a\x09self assert: (true yourself ifTrue: [ 'alternative block' ]) equals: 'alternative block'.\x0a\x09self assert: (true yourself ifFalse: [ 'alternative block' ]) equals: nil.\x0a\x0a\x09self assert: (false yourself ifTrue: [ 'alternative block' ]) equals: nil.\x0a\x09self assert: (false yourself ifFalse: [ 'alternative block' ]) equals: 'alternative block'.\x0a\x0a\x09self assert: (false yourself ifTrue: [ 'alternative block' ] ifFalse: [ 'alternative block2' ]) equals: 'alternative block2'.\x0a\x09self assert: (false yourself ifFalse: [ 'alternative block' ] ifTrue: [ 'alternative block2' ]) equals: 'alternative block'.\x0a\x0a\x09self assert: (true yourself ifTrue: [ 'alternative block' ] ifFalse: [ 'alternative block2' ]) equals: 'alternative block'.\x0a\x09self assert: (true yourself ifFalse: [ 'alternative block' ] ifTrue: [ 'alternative block2' ]) equals: 'alternative block2'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "ifTrue:", "yourself", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:"]
}),
$globals.BooleanTest);

$core.addMethod(
$core.method({
selector: "testLogic",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4,$6,$7,$8,$10,$9,$12,$11,$14,$13,$17,$18,$16,$15,$20,$19,$22,$21,$25,$24,$23;
$1=true.__and(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["&"]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$2=true.__and(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["&"]=2;
//>>excludeEnd("ctx");
self._deny_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$3=false.__and(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["&"]=3;
//>>excludeEnd("ctx");
self._deny_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=2;
//>>excludeEnd("ctx");
$5=false.__and(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["&"]=4;
//>>excludeEnd("ctx");
$4=self._deny_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=3;
//>>excludeEnd("ctx");
$6=true.__or(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["|"]=1;
//>>excludeEnd("ctx");
self._assert_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$7=true.__or(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["|"]=2;
//>>excludeEnd("ctx");
self._assert_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$8=false.__or(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["|"]=3;
//>>excludeEnd("ctx");
self._assert_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
$10=false.__or(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["|"]=4;
//>>excludeEnd("ctx");
$9=self._deny_($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=4;
//>>excludeEnd("ctx");
$12=(1).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=1;
//>>excludeEnd("ctx");
$11=true.__and($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["&"]=5;
//>>excludeEnd("ctx");
self._assert_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=5;
//>>excludeEnd("ctx");
$14=(1).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=2;
//>>excludeEnd("ctx");
$13=$recv($14).__and(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["&"]=6;
//>>excludeEnd("ctx");
self._deny_($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=5;
//>>excludeEnd("ctx");
$17=(1).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=3;
//>>excludeEnd("ctx");
$18=(1).__gt((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=4;
//>>excludeEnd("ctx");
$16=$recv($17).__and($18);
$15=self._deny_($16);
$20=(1).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=5;
//>>excludeEnd("ctx");
$19=false.__or($20);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["|"]=5;
//>>excludeEnd("ctx");
self._assert_($19);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=6;
//>>excludeEnd("ctx");
$22=(1).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=6;
//>>excludeEnd("ctx");
$21=$recv($22).__or(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["|"]=6;
//>>excludeEnd("ctx");
self._assert_($21);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=7;
//>>excludeEnd("ctx");
$25=(1).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=7;
//>>excludeEnd("ctx");
$24=$recv($25).__or((1).__gt((2)));
$23=self._assert_($24);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testLogic",{},$globals.BooleanTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testLogic\x0a\x09\x22Trivial logic table\x22\x0a\x09self assert: (true & true);\x0a\x09\x09deny: (true & false);\x0a\x09\x09deny: (false & true);\x0a\x09\x09deny: (false & false).\x0a\x09self assert: (true | true);\x0a\x09\x09assert: (true | false);\x0a\x09\x09assert: (false | true);\x0a\x09\x09deny: (false | false).\x0a\x09\x22Checking that expressions work fine too\x22\x0a\x09self assert: (true & (1 > 0));\x0a\x09\x09deny: ((1 > 0) & false);\x0a\x09\x09deny: ((1 > 0) & (1 > 2)).\x0a\x09self assert: (false | (1 > 0));\x0a\x09\x09assert: ((1 > 0) | false);\x0a\x09\x09assert: ((1 > 0) | (1 > 2))",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "&", "deny:", "|", ">"]
}),
$globals.BooleanTest);

$core.addMethod(
$core.method({
selector: "testLogicKeywords",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4,$6,$7,$8,$10,$9,$11,$13,$12,$16,$15,$14,$17,$19,$18,$22,$21,$20;
$1=true._and_((function(){
return true;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$2=true._and_((function(){
return false;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=2;
//>>excludeEnd("ctx");
self._deny_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$3=false._and_((function(){
return true;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=3;
//>>excludeEnd("ctx");
self._deny_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=2;
//>>excludeEnd("ctx");
$5=false._and_((function(){
return false;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=4;
//>>excludeEnd("ctx");
$4=self._deny_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=3;
//>>excludeEnd("ctx");
$6=true._or_((function(){
return true;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["or:"]=1;
//>>excludeEnd("ctx");
self._assert_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$7=true._or_((function(){
return false;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["or:"]=2;
//>>excludeEnd("ctx");
self._assert_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$8=false._or_((function(){
return true;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["or:"]=3;
//>>excludeEnd("ctx");
self._assert_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
$10=false._or_((function(){
return false;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["or:"]=4;
//>>excludeEnd("ctx");
$9=self._deny_($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=4;
//>>excludeEnd("ctx");
$11=true._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (1).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[">"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,9)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=5;
//>>excludeEnd("ctx");
self._assert_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=5;
//>>excludeEnd("ctx");
$13=(1).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=2;
//>>excludeEnd("ctx");
$12=$recv($13)._and_((function(){
return false;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=6;
//>>excludeEnd("ctx");
self._deny_($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=5;
//>>excludeEnd("ctx");
$16=(1).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=3;
//>>excludeEnd("ctx");
$15=$recv($16)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (1).__gt((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[">"]=4;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,11)});
//>>excludeEnd("ctx");
}));
$14=self._deny_($15);
$17=false._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (1).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[">"]=5;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,12)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["or:"]=5;
//>>excludeEnd("ctx");
self._assert_($17);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=6;
//>>excludeEnd("ctx");
$19=(1).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=6;
//>>excludeEnd("ctx");
$18=$recv($19)._or_((function(){
return false;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["or:"]=6;
//>>excludeEnd("ctx");
self._assert_($18);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=7;
//>>excludeEnd("ctx");
$22=(1).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=7;
//>>excludeEnd("ctx");
$21=$recv($22)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (1).__gt((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,14)});
//>>excludeEnd("ctx");
}));
$20=self._assert_($21);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testLogicKeywords",{},$globals.BooleanTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testLogicKeywords\x0a\x09\x22Trivial logic table\x22\x0a\x09self\x0a\x09\x09assert: (true and: [ true ]);\x0a\x09\x09deny: (true and: [ false ]);\x0a\x09\x09deny: (false and: [ true ]);\x0a\x09\x09deny: (false and: [ false ]).\x0a\x09self\x0a\x09\x09assert: (true or: [ true ]);\x0a\x09\x09assert: (true or: [ false ]);\x0a\x09\x09assert: (false or: [ true ]);\x0a\x09\x09deny: (false or: [ false ]).\x0a\x09\x09\x0a\x09\x22Checking that expressions work fine too\x22\x0a\x09self\x0a\x09\x09assert: (true and: [ 1 > 0 ]);\x0a\x09\x09deny: ((1 > 0) and: [ false ]);\x0a\x09\x09deny: ((1 > 0) and: [ 1 > 2 ]).\x0a\x09self\x0a\x09\x09assert: (false or: [ 1 > 0 ]);\x0a\x09\x09assert: ((1 > 0) or: [ false ]);\x0a\x09\x09assert: ((1 > 0) or: [ 1 > 2 ])",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "and:", "deny:", "or:", ">"]
}),
$globals.BooleanTest);

$core.addMethod(
$core.method({
selector: "testNonBooleanError",
protocol: 'tests',
fn: function (){
var self=this;
function $NonBooleanReceiver(){return $globals.NonBooleanReceiver||(typeof NonBooleanReceiver=="undefined"?nil:NonBooleanReceiver)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert("")){
} else {
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$NonBooleanReceiver());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNonBooleanError",{},$globals.BooleanTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNonBooleanError\x0a\x09self should: [ '' ifTrue: [] ifFalse: [] ] raise: NonBooleanReceiver",
referencedClasses: ["NonBooleanReceiver"],
//>>excludeEnd("ide");
messageSends: ["should:raise:", "ifTrue:ifFalse:"]
}),
$globals.BooleanTest);



$core.addClass('ClassBuilderTest', $globals.TestCase, ['builder', 'theClass'], 'Kernel-Tests');
$core.addMethod(
$core.method({
selector: "setUp",
protocol: 'running',
fn: function (){
var self=this;
function $ClassBuilder(){return $globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@builder"]=$recv($ClassBuilder())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{},$globals.ClassBuilderTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09builder := ClassBuilder new",
referencedClasses: ["ClassBuilder"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.ClassBuilderTest);

$core.addMethod(
$core.method({
selector: "tearDown",
protocol: 'running',
fn: function (){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@theClass"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv($Smalltalk())._removeClass_(self["@theClass"]);
self["@theClass"]=nil;
self["@theClass"];
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tearDown",{},$globals.ClassBuilderTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tearDown\x0a\x09theClass ifNotNil: [ Smalltalk removeClass: theClass. theClass := nil ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "removeClass:"]
}),
$globals.ClassBuilderTest);

$core.addMethod(
$core.method({
selector: "testClassCopy",
protocol: 'tests',
fn: function (){
var self=this;
function $ObjectMock(){return $globals.ObjectMock||(typeof ObjectMock=="undefined"?nil:ObjectMock)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5,$8,$7;
self["@theClass"]=$recv(self["@builder"])._copyClass_named_($ObjectMock(),"ObjectMock2");
$2=$recv(self["@theClass"])._superclass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["superclass"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq_eq($recv($ObjectMock())._superclass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$4=$recv(self["@theClass"])._instanceVariableNames();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["instanceVariableNames"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__eq_eq($recv($ObjectMock())._instanceVariableNames());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=2;
//>>excludeEnd("ctx");
self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($recv(self["@theClass"])._name(),"ObjectMock2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$6=$recv(self["@theClass"])._package();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["package"]=1;
//>>excludeEnd("ctx");
$5=$recv($6).__eq_eq($recv($ObjectMock())._package());
self._assert_($5);
$8=$recv(self["@theClass"])._methodDictionary();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["methodDictionary"]=1;
//>>excludeEnd("ctx");
$7=$recv($8)._keys();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["keys"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($7,$recv($recv($ObjectMock())._methodDictionary())._keys());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testClassCopy",{},$globals.ClassBuilderTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testClassCopy\x0a\x09theClass := builder copyClass: ObjectMock named: 'ObjectMock2'.\x0a\x09self assert: theClass superclass == ObjectMock superclass.\x0a\x09self assert: theClass instanceVariableNames == ObjectMock instanceVariableNames.\x0a\x09self assert: theClass name equals: 'ObjectMock2'.\x0a\x09self assert: theClass package == ObjectMock package.\x0a\x09self assert: theClass methodDictionary keys equals: ObjectMock methodDictionary keys",
referencedClasses: ["ObjectMock"],
//>>excludeEnd("ide");
messageSends: ["copyClass:named:", "assert:", "==", "superclass", "instanceVariableNames", "assert:equals:", "name", "package", "keys", "methodDictionary"]
}),
$globals.ClassBuilderTest);

$core.addMethod(
$core.method({
selector: "testClassMigration",
protocol: 'tests',
fn: function (){
var self=this;
var instance,oldClass;
function $ObjectMock(){return $globals.ObjectMock||(typeof ObjectMock=="undefined"?nil:ObjectMock)}
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $ObjectMock2(){return $globals.ObjectMock2||(typeof ObjectMock2=="undefined"?nil:ObjectMock2)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$5,$6,$7,$8,$9,$11,$10;
oldClass=$recv(self["@builder"])._copyClass_named_($ObjectMock(),"ObjectMock2");
$2=$recv($Smalltalk())._globals();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["globals"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._at_("ObjectMock2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
instance=$recv($1)._new();
$4=$recv($Smalltalk())._globals();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["globals"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._at_("ObjectMock2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
$recv($ObjectMock())._subclass_instanceVariableNames_package_($3,"","Kernel-Tests");
$5=$recv(oldClass).__eq_eq($ObjectMock2());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=1;
//>>excludeEnd("ctx");
self._deny_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$6=$recv($recv($ObjectMock2())._superclass()).__eq_eq($ObjectMock());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=2;
//>>excludeEnd("ctx");
self._assert_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._assert_($recv($recv($ObjectMock2())._instanceVariableNames())._isEmpty());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$7=$recv($ObjectMock2())._selectors();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectors"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($7,$recv(oldClass)._selectors());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$8=$recv($ObjectMock2())._comment();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["comment"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($8,$recv(oldClass)._comment());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$9=$recv($recv($ObjectMock2())._package())._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($9,"Kernel-Tests");
$11=$recv(instance)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$10=$recv($11).__eq_eq($ObjectMock2());
self._deny_($10);
self._assert_($recv($recv($recv($Smalltalk())._globals())._at_($recv($recv(instance)._class())._name()))._isNil());
$recv($Smalltalk())._removeClass_($ObjectMock2());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testClassMigration",{instance:instance,oldClass:oldClass},$globals.ClassBuilderTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testClassMigration\x0a\x09| instance oldClass |\x0a\x09\x0a\x09oldClass := builder copyClass: ObjectMock named: 'ObjectMock2'.\x0a\x09instance := (Smalltalk globals at: 'ObjectMock2') new.\x0a\x09\x0a\x09\x22Change the superclass of ObjectMock2\x22\x0a\x09ObjectMock subclass: (Smalltalk globals at: 'ObjectMock2')\x0a\x09\x09instanceVariableNames: ''\x0a\x09\x09package: 'Kernel-Tests'.\x0a\x09\x0a\x09self deny: oldClass == ObjectMock2.\x0a\x09\x0a\x09self assert: ObjectMock2 superclass == ObjectMock.\x0a\x09self assert: ObjectMock2 instanceVariableNames isEmpty.\x0a\x09self assert: ObjectMock2 selectors equals: oldClass selectors.\x0a\x09self assert: ObjectMock2 comment equals: oldClass comment.\x0a\x09self assert: ObjectMock2 package name equals: 'Kernel-Tests'.\x0a\x09\x0a\x09self deny: instance class == ObjectMock2.\x0a\x09\x22Commeting this out. Tests implementation detail.\x22\x0a\x09\x22self assert: instance class name equals: 'OldObjectMock2'.\x22\x0a\x09\x0a\x09self assert: (Smalltalk globals at: instance class name) isNil.\x0a\x09\x0a\x09Smalltalk removeClass: ObjectMock2",
referencedClasses: ["ObjectMock", "Smalltalk", "ObjectMock2"],
//>>excludeEnd("ide");
messageSends: ["copyClass:named:", "new", "at:", "globals", "subclass:instanceVariableNames:package:", "deny:", "==", "assert:", "superclass", "isEmpty", "instanceVariableNames", "assert:equals:", "selectors", "comment", "name", "package", "class", "isNil", "removeClass:"]
}),
$globals.ClassBuilderTest);

$core.addMethod(
$core.method({
selector: "testClassMigrationWithClassInstanceVariables",
protocol: 'tests',
fn: function (){
var self=this;
function $ObjectMock(){return $globals.ObjectMock||(typeof ObjectMock=="undefined"?nil:ObjectMock)}
function $ObjectMock2(){return $globals.ObjectMock2||(typeof ObjectMock2=="undefined"?nil:ObjectMock2)}
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$recv(self["@builder"])._copyClass_named_($ObjectMock(),"ObjectMock2");
$1=$recv($ObjectMock2())._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$recv($1)._instanceVariableNames_("foo bar");
$recv($ObjectMock())._subclass_instanceVariableNames_package_($recv($recv($Smalltalk())._globals())._at_("ObjectMock2"),"","Kernel-Tests");
self._assert_equals_($recv($recv($ObjectMock2())._class())._instanceVariableNames(),["foo", "bar"]);
$recv($Smalltalk())._removeClass_($ObjectMock2());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testClassMigrationWithClassInstanceVariables",{},$globals.ClassBuilderTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testClassMigrationWithClassInstanceVariables\x0a\x09\x0a\x09builder copyClass: ObjectMock named: 'ObjectMock2'.\x0a\x09ObjectMock2 class instanceVariableNames: 'foo bar'.\x0a\x09\x0a\x09\x22Change the superclass of ObjectMock2\x22\x0a\x09ObjectMock subclass: (Smalltalk globals at: 'ObjectMock2')\x0a\x09\x09instanceVariableNames: ''\x0a\x09\x09package: 'Kernel-Tests'.\x0a\x09\x0a\x09self assert: ObjectMock2 class instanceVariableNames equals: #('foo' 'bar').\x0a\x09\x0a\x09Smalltalk removeClass: ObjectMock2",
referencedClasses: ["ObjectMock", "ObjectMock2", "Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["copyClass:named:", "instanceVariableNames:", "class", "subclass:instanceVariableNames:package:", "at:", "globals", "assert:equals:", "instanceVariableNames", "removeClass:"]
}),
$globals.ClassBuilderTest);

$core.addMethod(
$core.method({
selector: "testClassMigrationWithSubclasses",
protocol: 'tests',
fn: function (){
var self=this;
function $ObjectMock(){return $globals.ObjectMock||(typeof ObjectMock=="undefined"?nil:ObjectMock)}
function $ObjectMock2(){return $globals.ObjectMock2||(typeof ObjectMock2=="undefined"?nil:ObjectMock2)}
function $ObjectMock3(){return $globals.ObjectMock3||(typeof ObjectMock3=="undefined"?nil:ObjectMock3)}
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $ObjectMock4(){return $globals.ObjectMock4||(typeof ObjectMock4=="undefined"?nil:ObjectMock4)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$3;
$recv(self["@builder"])._copyClass_named_($ObjectMock(),"ObjectMock2");
$recv($ObjectMock2())._subclass_instanceVariableNames_package_("ObjectMock3","","Kernel-Tests");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["subclass:instanceVariableNames:package:"]=1;
//>>excludeEnd("ctx");
$recv($ObjectMock3())._subclass_instanceVariableNames_package_("ObjectMock4","","Kernel-Tests");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["subclass:instanceVariableNames:package:"]=2;
//>>excludeEnd("ctx");
$recv($ObjectMock())._subclass_instanceVariableNames_package_($recv($recv($Smalltalk())._globals())._at_("ObjectMock2"),"","Kernel-Tests");
$2=$recv($ObjectMock())._subclasses();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["subclasses"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._includes_($ObjectMock2());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["includes:"]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$4=$recv($ObjectMock2())._subclasses();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["subclasses"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._includes_($ObjectMock3());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["includes:"]=2;
//>>excludeEnd("ctx");
self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
self._assert_($recv($recv($ObjectMock3())._subclasses())._includes_($ObjectMock4()));
$recv($recv($ObjectMock())._allSubclasses())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Smalltalk())._removeClass_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testClassMigrationWithSubclasses",{},$globals.ClassBuilderTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testClassMigrationWithSubclasses\x0a\x09\x0a\x09builder copyClass: ObjectMock named: 'ObjectMock2'.\x0a\x09ObjectMock2 subclass: 'ObjectMock3' instanceVariableNames: '' package: 'Kernel-Tests'.\x0a\x09ObjectMock3 subclass: 'ObjectMock4' instanceVariableNames: '' package: 'Kernel-Tests'.\x0a\x09\x0a\x09\x22Change the superclass of ObjectMock2\x22\x0a\x09ObjectMock subclass: (Smalltalk globals at: 'ObjectMock2')\x0a\x09\x09instanceVariableNames: ''\x0a\x09\x09package: 'Kernel-Tests'.\x0a\x09\x0a\x09self assert: (ObjectMock subclasses includes: ObjectMock2).\x0a\x09self assert: (ObjectMock2 subclasses includes: ObjectMock3).\x0a\x09self assert: (ObjectMock3 subclasses includes: ObjectMock4).\x0a\x09\x0a\x09ObjectMock allSubclasses do: [ :each | Smalltalk removeClass: each ]",
referencedClasses: ["ObjectMock", "ObjectMock2", "ObjectMock3", "Smalltalk", "ObjectMock4"],
//>>excludeEnd("ide");
messageSends: ["copyClass:named:", "subclass:instanceVariableNames:package:", "at:", "globals", "assert:", "includes:", "subclasses", "do:", "allSubclasses", "removeClass:"]
}),
$globals.ClassBuilderTest);

$core.addMethod(
$core.method({
selector: "testInstanceVariableNames",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_equals_($recv(self["@builder"])._instanceVariableNamesFor_("  hello   world   "),["hello", "world"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testInstanceVariableNames",{},$globals.ClassBuilderTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testInstanceVariableNames\x0a\x09self assert: (builder instanceVariableNamesFor: '  hello   world   ') equals: #('hello' 'world')",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "instanceVariableNamesFor:"]
}),
$globals.ClassBuilderTest);



$core.addClass('CollectionTest', $globals.TestCase, [], 'Kernel-Tests');
$core.addMethod(
$core.method({
selector: "assertSameContents:as:",
protocol: 'convenience',
fn: function (aCollection,anotherCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$3;
$2=$recv(aCollection)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq($recv(anotherCollection)._size());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$recv(aCollection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(aCollection)._occurrencesOf_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["occurrencesOf:"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__eq($recv(anotherCollection)._occurrencesOf_(each));
return self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assertSameContents:as:",{aCollection:aCollection,anotherCollection:anotherCollection},$globals.CollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection", "anotherCollection"],
source: "assertSameContents: aCollection as: anotherCollection\x0a\x09self assert: (aCollection size = anotherCollection size).\x0a\x09aCollection do: [ :each |\x0a\x09\x09self assert: ((aCollection occurrencesOf: each) = (anotherCollection occurrencesOf: each)) ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "size", "do:", "occurrencesOf:"]
}),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "collection",
protocol: 'fixture',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collection",{},$globals.CollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collection\x0a\x09\x22Answers pre-filled collection of type tested.\x22\x0a\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "collectionClass",
protocol: 'fixture',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class())._collectionClass();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{},$globals.CollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionClass\x0a\x09\x22Answers class of collection type tested\x22\x0a\x0a\x09^ self class collectionClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collectionClass", "class"]
}),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "collectionOfPrintStrings",
protocol: 'fixture',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionOfPrintStrings",{},$globals.CollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionOfPrintStrings\x0a\x09\x22Answers self collection but with values\x0a\x09changed to their printStrings\x22\x0a\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "collectionSize",
protocol: 'fixture',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionSize",{},$globals.CollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionSize\x0a\x09\x22Answers size of self collection.\x22\x0a\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "collectionWithDuplicates",
protocol: 'fixture',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionWithDuplicates",{},$globals.CollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionWithDuplicates\x0a\x09\x22Answers pre-filled collection of type tested,\x0a\x09with exactly five distinct elements,\x0a\x09some of them appearing multiple times, if possible.\x22\x0a\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "collectionWithNewValue",
protocol: 'fixture',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionWithNewValue",{},$globals.CollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionWithNewValue\x0a\x09\x22Answers a collection which shows how\x0a\x09self collection would look after adding\x0a\x09self sampleNewValue\x22\x0a\x09\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "isCollectionReadOnly",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isCollectionReadOnly\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "sampleNewValue",
protocol: 'fixture',
fn: function (){
var self=this;
return "N";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sampleNewValue\x0a\x09\x22Answers a value that is not yet there\x0a\x09and can be put into a tested collection\x22\x0a\x09\x0a\x09^ 'N'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "sampleNewValueAsCollection",
protocol: 'fixture',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._collectionClass())._with_(self._sampleNewValue());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sampleNewValueAsCollection",{},$globals.CollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sampleNewValueAsCollection\x0a\x09\x22Answers self sampleNewValue\x0a\x09wrapped in single element collection\x0a\x09of tested type\x22\x0a\x09\x0a\x09^ self collectionClass with: self sampleNewValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "collectionClass", "sampleNewValue"]
}),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testAddAll",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$5,$4,$6,$1,$7,$10,$9,$11,$12,$13,$8,$14,$17,$16,$18,$20,$19,$21,$15,$23,$24,$25,$26,$22,$27,$28,$29;
$2=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$3=$2;
$5=self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($3)._addAll_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addAll:"]=1;
//>>excludeEnd("ctx");
$6=$recv($2)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$1=$6;
$7=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($1,$7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$10=self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=2;
//>>excludeEnd("ctx");
$9=$recv($10)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$11=$9;
$12=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
$recv($11)._addAll_($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addAll:"]=2;
//>>excludeEnd("ctx");
$13=$recv($9)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=2;
//>>excludeEnd("ctx");
$8=$13;
$14=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($8,$14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$17=self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=3;
//>>excludeEnd("ctx");
$16=$recv($17)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$18=$16;
$20=self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=4;
//>>excludeEnd("ctx");
$19=$recv($20)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=4;
//>>excludeEnd("ctx");
$recv($18)._addAll_($19);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addAll:"]=3;
//>>excludeEnd("ctx");
$21=$recv($16)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=3;
//>>excludeEnd("ctx");
$15=$21;
self._assert_equals_($15,$recv(self._collectionClass())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$23=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=5;
//>>excludeEnd("ctx");
$24=$23;
$25=self._sampleNewValueAsCollection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["sampleNewValueAsCollection"]=1;
//>>excludeEnd("ctx");
$recv($24)._addAll_($25);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addAll:"]=4;
//>>excludeEnd("ctx");
$26=$recv($23)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=4;
//>>excludeEnd("ctx");
$22=$26;
$27=self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($22,$27);
$28=self._sampleNewValueAsCollection();
$recv($28)._addAll_(self._collection());
$29=$recv($28)._yourself();
self._assertSameContents_as_($29,self._collectionWithNewValue());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAddAll",{},$globals.CollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAddAll\x0a\x09self assert: (self collection addAll: self collectionClass new; yourself) equals: self collection.\x0a\x09self assert: (self collectionClass new addAll: self collection; yourself) equals: self collection.\x0a\x09self assert: (self collectionClass new addAll: self collectionClass new; yourself) equals: self collectionClass new.\x0a\x09self assert: (self collection addAll: self sampleNewValueAsCollection; yourself) equals: self collectionWithNewValue.\x0a\x09self assertSameContents: (self sampleNewValueAsCollection addAll: self collection; yourself) as: self collectionWithNewValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "addAll:", "collection", "new", "collectionClass", "yourself", "sampleNewValueAsCollection", "collectionWithNewValue", "assertSameContents:as:"]
}),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testAllSatisfy",
protocol: 'tests',
fn: function (){
var self=this;
var collection,anyOne;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
collection=self._collection();
anyOne=$recv(collection)._anyOne();
$1=$recv(collection)._allSatisfy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(collection)._includes_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["allSatisfy:"]=1;
//>>excludeEnd("ctx");
self._assert_($1);
self._deny_($recv(collection)._allSatisfy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each).__tild_eq(anyOne);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
})));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAllSatisfy",{collection:collection,anyOne:anyOne},$globals.CollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAllSatisfy\x0a\x09| collection anyOne |\x0a\x09collection := self collection.\x0a\x09anyOne := collection anyOne.\x0a\x09self assert: (collection allSatisfy: [ :each | collection includes: each ]).\x0a\x09self deny: (collection allSatisfy: [ :each | each ~= anyOne ])",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collection", "anyOne", "assert:", "allSatisfy:", "includes:", "deny:", "~="]
}),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testAnyOne",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(self._collectionClass())._new())._anyOne();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["anyOne"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
$2=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._includes_($recv(self._collection())._anyOne());
self._assert_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAnyOne",{},$globals.CollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAnyOne\x0a\x09self should: [ self collectionClass new anyOne ] raise: Error.\x0a\x09self assert: (self collection includes: self collection anyOne)",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["should:raise:", "anyOne", "new", "collectionClass", "assert:", "includes:", "collection"]
}),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testAnySatisfy",
protocol: 'tests',
fn: function (){
var self=this;
var anyOne;
function $Object(){return $globals.Object||(typeof Object=="undefined"?nil:Object)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2;
$1=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
anyOne=$recv($1)._anyOne();
$3=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$2=$recv($3)._anySatisfy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each).__eq(anyOne);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["anySatisfy:"]=1;
//>>excludeEnd("ctx");
self._assert_($2);
self._deny_($recv(self._collection())._anySatisfy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each).__eq($recv($Object())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
})));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAnySatisfy",{anyOne:anyOne},$globals.CollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAnySatisfy\x0a\x09| anyOne |\x0a\x09anyOne := self collection anyOne.\x0a\x09self assert: (self collection anySatisfy: [ :each | each = anyOne ]).\x0a\x09self deny: (self collection anySatisfy: [ :each | each = Object new ])",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
messageSends: ["anyOne", "collection", "assert:", "anySatisfy:", "=", "deny:", "new"]
}),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testAsArray",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
self._assertSameContents_as_($1,$recv(self._collection())._asArray());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAsArray",{},$globals.CollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAsArray\x0a\x09self\x0a\x09\x09assertSameContents: self collection\x0a\x09\x09as: self collection asArray",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assertSameContents:as:", "collection", "asArray"]
}),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testAsOrderedCollection",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
self._assertSameContents_as_($1,$recv(self._collection())._asOrderedCollection());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAsOrderedCollection",{},$globals.CollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAsOrderedCollection\x0a\x09self\x0a\x09\x09assertSameContents: self collection\x0a\x09\x09as: self collection asOrderedCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assertSameContents:as:", "collection", "asOrderedCollection"]
}),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testAsSet",
protocol: 'tests',
fn: function (){
var self=this;
var c,set;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
c=self._collectionWithDuplicates();
set=$recv(c)._asSet();
self._assert_equals_($recv(set)._size(),(5));
$recv(c)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._assert_($recv(set)._includes_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAsSet",{c:c,set:set},$globals.CollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAsSet\x0a\x09| c set |\x0a\x09c := self collectionWithDuplicates.\x0a\x09set := c asSet.\x0a\x09self assert: set size equals: 5.\x0a\x09c do: [ :each |\x0a\x09\x09self assert: (set includes: each) ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collectionWithDuplicates", "asSet", "assert:equals:", "size", "do:", "assert:", "includes:"]
}),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testCollect",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3,$5,$4,$8,$7,$6,$11,$10,$9;
$2=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._collect_((function(each){
return each;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collect:"]=1;
//>>excludeEnd("ctx");
$3=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($1,$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$5=self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._collect_((function(each){
return each;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collect:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($4,self._collectionWithNewValue());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$8=self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=1;
//>>excludeEnd("ctx");
$7=$recv($8)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$6=$recv($7)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["printString"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collect:"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($6,$recv(self._collectionClass())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$11=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
$10=$recv($11)._collect_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["sampleNewValue"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collect:"]=4;
//>>excludeEnd("ctx");
$9=$recv($10)._detect_((function(){
return true;

}));
self._assert_equals_($9,self._sampleNewValue());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($recv(self._collection())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,6)});
//>>excludeEnd("ctx");
})),self._collectionOfPrintStrings());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCollect",{},$globals.CollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCollect\x0a\x09self assert: (self collection collect: [ :each | each ]) equals: self collection.\x0a\x09self assert: (self collectionWithNewValue collect: [ :each | each ]) equals: self collectionWithNewValue.\x0a\x09self assert: (self collectionClass new collect: [ :each | each printString ]) equals: self collectionClass new.\x0a\x09self assert: ((self collection collect: [ self sampleNewValue ]) detect: [ true ]) equals: self sampleNewValue.\x0a\x09self assert: (self collection collect: [ :each | each printString ]) equals: self collectionOfPrintStrings",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "collect:", "collection", "collectionWithNewValue", "new", "collectionClass", "printString", "detect:", "sampleNewValue", "collectionOfPrintStrings"]
}),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testComma",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$4,$3,$1,$5,$8,$7,$9,$6,$10,$13,$12,$15,$14,$11,$17,$18,$16,$19;
$2=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$4=self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$5=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($1,$5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$8=self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$9=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
$6=$recv($7).__comma($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$10=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($6,$10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$13=self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=3;
//>>excludeEnd("ctx");
$12=$recv($13)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$15=self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=4;
//>>excludeEnd("ctx");
$14=$recv($15)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=4;
//>>excludeEnd("ctx");
$11=$recv($12).__comma($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
self._assert_equals_($11,$recv(self._collectionClass())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$17=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=5;
//>>excludeEnd("ctx");
$18=self._sampleNewValueAsCollection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["sampleNewValueAsCollection"]=1;
//>>excludeEnd("ctx");
$16=$recv($17).__comma($18);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$19=self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($16,$19);
self._assertSameContents_as_($recv(self._sampleNewValueAsCollection()).__comma(self._collection()),self._collectionWithNewValue());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testComma",{},$globals.CollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testComma\x0a\x09self assert: self collection, self collectionClass new equals: self collection.\x0a\x09self assert: self collectionClass new, self collection equals: self collection.\x0a\x09self assert: self collectionClass new, self collectionClass new equals: self collectionClass new.\x0a\x09self assert: self collection, self sampleNewValueAsCollection equals: self collectionWithNewValue.\x0a\x09self assertSameContents: self sampleNewValueAsCollection, self collection as: self collectionWithNewValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", ",", "collection", "new", "collectionClass", "sampleNewValueAsCollection", "collectionWithNewValue", "assertSameContents:as:"]
}),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testDetect",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$6,$5,$7;
self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
return $recv($1)._detect_((function(){
return true;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["detect:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
return $recv($2)._detect_((function(){
return false;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["detect:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}),$Error());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=1;
//>>excludeEnd("ctx");
$3=$recv(self._sampleNewValueAsCollection())._detect_((function(){
return true;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["detect:"]=3;
//>>excludeEnd("ctx");
$4=self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["sampleNewValue"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($3,$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$5=$recv(self._collectionWithNewValue())._detect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["sampleNewValue"]=2;
//>>excludeEnd("ctx");
return $recv(each).__eq($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["detect:"]=4;
//>>excludeEnd("ctx");
$7=self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["sampleNewValue"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($5,$7);
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._collection())._detect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(each).__eq(self._sampleNewValue());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,8)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,7)});
//>>excludeEnd("ctx");
}),$Error());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDetect",{},$globals.CollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDetect\x0a\x09self\x0a\x09\x09shouldnt: [ self collection detect: [ true ] ]\x0a\x09\x09raise: Error.\x0a\x09self\x0a\x09\x09should: [ self collection detect: [ false ] ]\x0a\x09\x09raise: Error.\x0a\x09self assert: (self sampleNewValueAsCollection detect: [ true ]) equals: self sampleNewValue.\x0a\x09self assert: (self collectionWithNewValue detect: [ :each | each = self sampleNewValue ]) equals: self sampleNewValue.\x0a\x09self\x0a\x09\x09should: [ self collection detect: [ :each | each = self sampleNewValue ] ]\x0a\x09\x09raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["shouldnt:raise:", "detect:", "collection", "should:raise:", "assert:equals:", "sampleNewValueAsCollection", "sampleNewValue", "collectionWithNewValue", "="]
}),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testDetectIfNone",
protocol: 'tests',
fn: function (){
var self=this;
var sentinel;
function $Object(){return $globals.Object||(typeof Object=="undefined"?nil:Object)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1,$5,$4,$6,$7,$9,$8,$10;
sentinel=$recv($Object())._new();
$3=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._detect_ifNone_((function(){
return true;

}),(function(){
return sentinel;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["detect:ifNone:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__tild_eq(sentinel);
self._assert_($1);
$5=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._detect_ifNone_((function(){
return false;

}),(function(){
return sentinel;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["detect:ifNone:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($4,sentinel);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$6=$recv(self._sampleNewValueAsCollection())._detect_ifNone_((function(){
return true;

}),(function(){
return sentinel;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["detect:ifNone:"]=3;
//>>excludeEnd("ctx");
$7=self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["sampleNewValue"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($6,$7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$8=$recv(self._collectionWithNewValue())._detect_ifNone_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$9=self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["sampleNewValue"]=2;
//>>excludeEnd("ctx");
return $recv(each).__eq($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,7)});
//>>excludeEnd("ctx");
}),(function(){
return sentinel;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["detect:ifNone:"]=4;
//>>excludeEnd("ctx");
$10=self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["sampleNewValue"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($8,$10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($recv(self._collection())._detect_ifNone_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each).__eq(self._sampleNewValue());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,9)});
//>>excludeEnd("ctx");
}),(function(){
return sentinel;

})),sentinel);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDetectIfNone",{sentinel:sentinel},$globals.CollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDetectIfNone\x0a\x09| sentinel |\x0a\x09sentinel := Object new.\x0a\x09self assert: (self collection detect: [ true ] ifNone: [ sentinel ]) ~= sentinel.\x0a\x09self assert: (self collection detect: [ false ] ifNone: [ sentinel ]) equals: sentinel.\x0a\x09self assert: (self sampleNewValueAsCollection detect: [ true ] ifNone: [ sentinel ]) equals: self sampleNewValue.\x0a\x09self assert: (self collectionWithNewValue detect: [ :each | each = self sampleNewValue ] ifNone: [ sentinel ]) equals: self sampleNewValue.\x0a\x09self assert: (self collection detect: [ :each | each = self sampleNewValue ] ifNone: [ sentinel ]) equals: sentinel",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
messageSends: ["new", "assert:", "~=", "detect:ifNone:", "collection", "assert:equals:", "sampleNewValueAsCollection", "sampleNewValue", "collectionWithNewValue", "="]
}),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testDo",
protocol: 'tests',
fn: function (){
var self=this;
var newCollection;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
newCollection=$recv($OrderedCollection())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$1=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$recv($1)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(newCollection)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
self._assertSameContents_as_(self._collection(),newCollection);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assertSameContents:as:"]=1;
//>>excludeEnd("ctx");
newCollection=$recv($OrderedCollection())._new();
$2=self._collectionWithDuplicates();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithDuplicates"]=1;
//>>excludeEnd("ctx");
$recv($2)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(newCollection)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
self._assertSameContents_as_(self._collectionWithDuplicates(),newCollection);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDo",{newCollection:newCollection},$globals.CollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDo\x0a\x09| newCollection |\x0a\x09newCollection := OrderedCollection new.\x0a\x09self collection do: [ :each |\x0a\x09\x09newCollection add: each ].\x0a\x09self\x0a\x09\x09assertSameContents: self collection\x0a\x09\x09as: newCollection.\x0a\x09newCollection := OrderedCollection new.\x0a\x09self collectionWithDuplicates do: [ :each |\x0a\x09\x09newCollection add: each ].\x0a\x09self\x0a\x09\x09assertSameContents: self collectionWithDuplicates\x0a\x09\x09as: newCollection",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["new", "do:", "collection", "add:", "assertSameContents:as:", "collectionWithDuplicates"]
}),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testIfEmptyFamily",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1,$5,$4,$6,$9,$8,$7,$11,$10,$13,$12,$15,$14,$16,$19,$18,$17,$21,$20,$23,$22,$24,$25,$27,$26,$29,$28;
$3=self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._ifEmpty_((function(){
return (42);

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ifEmpty:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,(42));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$5=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._ifEmpty_((function(){
return (42);

}));
$6=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($4,$6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$9=self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=2;
//>>excludeEnd("ctx");
$8=$recv($9)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._ifNotEmpty_((function(){
return (42);

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ifNotEmpty:"]=1;
//>>excludeEnd("ctx");
$11=self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=3;
//>>excludeEnd("ctx");
$10=$recv($11)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($7,$10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$13=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
$12=$recv($13)._ifNotEmpty_((function(){
return (42);

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ifNotEmpty:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($12,(42));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$15=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=4;
//>>excludeEnd("ctx");
$14=$recv($15)._ifNotEmpty_((function(col){
return col;

}));
$16=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($14,$16);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
$19=self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=4;
//>>excludeEnd("ctx");
$18=$recv($19)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=4;
//>>excludeEnd("ctx");
$17=$recv($18)._ifEmpty_ifNotEmpty_((function(){
return (42);

}),(function(){
return (999);

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ifEmpty:ifNotEmpty:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($17,(42));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=6;
//>>excludeEnd("ctx");
$21=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=6;
//>>excludeEnd("ctx");
$20=$recv($21)._ifEmpty_ifNotEmpty_((function(){
return (42);

}),(function(){
return (999);

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ifEmpty:ifNotEmpty:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($20,(999));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=7;
//>>excludeEnd("ctx");
$23=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=7;
//>>excludeEnd("ctx");
$22=$recv($23)._ifEmpty_ifNotEmpty_((function(){
return (42);

}),(function(col){
return col;

}));
$24=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=8;
//>>excludeEnd("ctx");
self._assert_equals_($22,$24);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=8;
//>>excludeEnd("ctx");
$25=$recv($recv(self._collectionClass())._new())._ifNotEmpty_ifEmpty_((function(){
return (42);

}),(function(){
return (999);

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ifNotEmpty:ifEmpty:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($25,(999));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=9;
//>>excludeEnd("ctx");
$27=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=9;
//>>excludeEnd("ctx");
$26=$recv($27)._ifNotEmpty_ifEmpty_((function(){
return (42);

}),(function(){
return (999);

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ifNotEmpty:ifEmpty:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($26,(42));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=10;
//>>excludeEnd("ctx");
$29=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=10;
//>>excludeEnd("ctx");
$28=$recv($29)._ifNotEmpty_ifEmpty_((function(col){
return col;

}),(function(){
return (999);

}));
self._assert_equals_($28,self._collection());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIfEmptyFamily",{},$globals.CollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIfEmptyFamily\x0a\x09self assert: (self collectionClass new ifEmpty: [ 42 ]) equals: 42.\x0a\x09self assert: (self collection ifEmpty: [ 42 ]) equals: self collection.\x0a\x0a\x09self assert: (self collectionClass new ifNotEmpty: [ 42 ]) equals: self collectionClass new.\x0a\x09self assert: (self collection ifNotEmpty: [ 42 ]) equals: 42.\x0a\x09self assert: (self collection ifNotEmpty: [ :col | col ]) equals: self collection.\x0a\x09\x0a\x09self assert: (self collectionClass new ifEmpty: [ 42 ] ifNotEmpty: [ 999 ]) equals: 42.\x0a\x09self assert: (self collection ifEmpty: [ 42 ] ifNotEmpty: [ 999 ]) equals: 999.\x0a\x09self assert: (self collection ifEmpty: [ 42 ] ifNotEmpty: [ :col | col ]) equals: self collection.\x0a\x0a\x09self assert: (self collectionClass new ifNotEmpty: [ 42 ] ifEmpty: [ 999 ]) equals: 999.\x0a\x09self assert: (self collection ifNotEmpty: [ 42 ] ifEmpty: [ 999 ]) equals: 42.\x0a\x09self assert: (self collection ifNotEmpty: [ :col | col ] ifEmpty: [ 999 ]) equals: self collection.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "ifEmpty:", "new", "collectionClass", "collection", "ifNotEmpty:", "ifEmpty:ifNotEmpty:", "ifNotEmpty:ifEmpty:"]
}),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testIsEmpty",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._collectionClass())._new())._isEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isEmpty"]=1;
//>>excludeEnd("ctx");
self._assert_($1);
self._deny_($recv(self._collection())._isEmpty());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIsEmpty",{},$globals.CollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIsEmpty\x0a\x09self assert: self collectionClass new isEmpty.\x0a\x09self deny: self collection isEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "isEmpty", "new", "collectionClass", "deny:", "collection"]
}),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testNoneSatisfy",
protocol: 'tests',
fn: function (){
var self=this;
var anyOne;
function $Object(){return $globals.Object||(typeof Object=="undefined"?nil:Object)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2;
$1=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
anyOne=$recv($1)._anyOne();
$3=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$2=$recv($3)._noneSatisfy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each).__eq(anyOne);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["noneSatisfy:"]=1;
//>>excludeEnd("ctx");
self._deny_($2);
self._assert_($recv(self._collection())._noneSatisfy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each).__eq($recv($Object())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
})));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNoneSatisfy",{anyOne:anyOne},$globals.CollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNoneSatisfy\x0a\x09| anyOne |\x0a\x09anyOne := self collection anyOne.\x0a\x09self deny: (self collection noneSatisfy: [ :each | each = anyOne ]).\x0a\x09self assert: (self collection noneSatisfy: [ :each | each = Object new ])",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
messageSends: ["anyOne", "collection", "deny:", "noneSatisfy:", "=", "assert:", "new"]
}),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testRemoveAll",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._collection();
$recv($1)._removeAll();
$2=$recv($1)._yourself();
self._assert_equals_($2,$recv(self._collectionClass())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRemoveAll",{},$globals.CollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRemoveAll\x0a\x09self assert: (self collection removeAll; yourself) equals: self collectionClass new",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "removeAll", "collection", "yourself", "new", "collectionClass"]
}),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testSelect",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5,$7,$9,$10,$8,$12,$13,$11,$14,$16,$17,$15;
$2=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._select_((function(){
return false;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["select:"]=1;
//>>excludeEnd("ctx");
$4=self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$6=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._select_((function(){
return true;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["select:"]=2;
//>>excludeEnd("ctx");
$7=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($5,$7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$9=self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=1;
//>>excludeEnd("ctx");
$8=$recv($9)._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$10=self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["sampleNewValue"]=1;
//>>excludeEnd("ctx");
return $recv(each).__eq($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["select:"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($8,self._sampleNewValueAsCollection());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$12=self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=2;
//>>excludeEnd("ctx");
$11=$recv($12)._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$13=self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["sampleNewValue"]=2;
//>>excludeEnd("ctx");
return $recv(each).__tild_eq($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["~="]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["select:"]=4;
//>>excludeEnd("ctx");
$14=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($11,$14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$16=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=5;
//>>excludeEnd("ctx");
$15=$recv($16)._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$17=self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["sampleNewValue"]=3;
//>>excludeEnd("ctx");
return $recv(each).__eq($17);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["select:"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($15,$recv(self._collectionClass())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($recv(self._collectionWithNewValue())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each).__tild_eq(self._sampleNewValue());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,6)});
//>>excludeEnd("ctx");
})),self._collection());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSelect",{},$globals.CollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSelect\x0a\x09self assert: (self collection select: [ false ]) equals: self collectionClass new.\x0a\x09self assert: (self collection select: [ true ]) equals: self collection.\x0a\x09self assert: (self collectionWithNewValue select: [ :each | each = self sampleNewValue ]) equals: self sampleNewValueAsCollection.\x0a\x09self assert: (self collectionWithNewValue select: [ :each | each ~= self sampleNewValue ]) equals: self collection.\x0a\x09self assert: (self collection select: [ :each | each = self sampleNewValue ]) equals: self collectionClass new.\x0a\x09self assert: (self collectionWithNewValue select: [ :each | each ~= self sampleNewValue ]) equals: self collection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "select:", "collection", "new", "collectionClass", "collectionWithNewValue", "=", "sampleNewValue", "sampleNewValueAsCollection", "~="]
}),
$globals.CollectionTest);

$core.addMethod(
$core.method({
selector: "testSize",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($recv(self._collectionClass())._new())._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=$recv(self._sampleNewValueAsCollection())._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($recv(self._collection())._size(),self._collectionSize());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSize",{},$globals.CollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSize\x0a\x09self assert: self collectionClass new size equals: 0.\x0a\x09self assert: self sampleNewValueAsCollection size equals: 1.\x0a\x09self assert: self collection size equals: self collectionSize",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "size", "new", "collectionClass", "sampleNewValueAsCollection", "collection", "collectionSize"]
}),
$globals.CollectionTest);


$core.addMethod(
$core.method({
selector: "collectionClass",
protocol: 'fixture',
fn: function (){
var self=this;
return nil;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionClass\x0a\x09\x22Answers class of collection type tested,\x0a\x09or nil if test is abstract\x22\x0a\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CollectionTest.klass);

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
$1=$recv(self._collectionClass())._isNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},$globals.CollectionTest.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAbstract\x0a\x09^ self collectionClass isNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isNil", "collectionClass"]
}),
$globals.CollectionTest.klass);


$core.addClass('IndexableCollectionTest', $globals.CollectionTest, [], 'Kernel-Tests');
$core.addMethod(
$core.method({
selector: "collectionWithNewValue",
protocol: 'fixture',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionWithNewValue",{},$globals.IndexableCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionWithNewValue\x0a\x09\x22Answers a collection which shows how\x0a\x09self collection would look after adding\x0a\x09self sampleNewValue at self sampleNewIndex\x22\x0a\x09\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.IndexableCollectionTest);

$core.addMethod(
$core.method({
selector: "sampleNewIndex",
protocol: 'fixture',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sampleNewIndex",{},$globals.IndexableCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sampleNewIndex\x0a\x09\x22Answers a value that can be used as index in at:put: or at:ifAbsentPut:\x22\x0a\x09\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.IndexableCollectionTest);

$core.addMethod(
$core.method({
selector: "sampleNonIndexesDo:",
protocol: 'fixture',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sampleNonIndexesDo:",{aBlock:aBlock},$globals.IndexableCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "sampleNonIndexesDo: aBlock\x0a\x09\x22Executes block a few times,\x0a\x09each time passing value that is known\x0a\x09not to be an index, as the first parameter\x22\x0a\x09\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.IndexableCollectionTest);

$core.addMethod(
$core.method({
selector: "samplesDo:",
protocol: 'fixture',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"samplesDo:",{aBlock:aBlock},$globals.IndexableCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "samplesDo: aBlock\x0a\x09\x22Executes block a few times,\x0a\x09each time passing known index and value stored\x0a\x09under that index as the parameters\x22\x0a\x09\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.IndexableCollectionTest);

$core.addMethod(
$core.method({
selector: "testAt",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._nonIndexesDo_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
return $recv($1)._at_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}),$Error());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._samplesDo_((function(index,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._assert_equals_($recv(self._collection())._at_(index),value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAt",{},$globals.IndexableCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAt\x0a\x09self nonIndexesDo: [ :each |\x0a\x09\x09self should: [ self collection at: each ] raise: Error ].\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09self assert: (self collection at: index) equals: value ]",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["nonIndexesDo:", "should:raise:", "at:", "collection", "samplesDo:", "assert:equals:"]
}),
$globals.IndexableCollectionTest);

$core.addMethod(
$core.method({
selector: "testAtIfAbsent",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3;
self._nonIndexesDo_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._at_ifAbsent_(each,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["sampleNewValue"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:ifAbsent:"]=1;
//>>excludeEnd("ctx");
$3=self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["sampleNewValue"]=2;
//>>excludeEnd("ctx");
return self._assert_equals_($1,$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._samplesDo_((function(index,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._assert_equals_($recv(self._collection())._at_ifAbsent_(index,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
})),value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAtIfAbsent",{},$globals.IndexableCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAtIfAbsent\x0a\x09self nonIndexesDo: [ :each |\x0a\x09\x09self assert: (self collection at: each ifAbsent: [ self sampleNewValue ]) equals: self sampleNewValue ].\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09self assert: (self collection at: index ifAbsent: [ self sampleNewValue ]) equals: value ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nonIndexesDo:", "assert:equals:", "at:ifAbsent:", "collection", "sampleNewValue", "samplesDo:"]
}),
$globals.IndexableCollectionTest);

$core.addMethod(
$core.method({
selector: "testAtIfAbsentPut",
protocol: 'tests',
fn: function (){
var self=this;
var newCollection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
newCollection=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
self._samplesDo_((function(index,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(newCollection)._at_ifAbsentPut_(index,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["sampleNewValue"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:ifAbsentPut:"]=1;
//>>excludeEnd("ctx");
return self._assert_equals_($1,value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._assert_equals_(newCollection,self._collection());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($recv(newCollection)._at_ifAbsentPut_(self._sampleNewIndex(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["sampleNewValue"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
})),self._sampleNewValue());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
self._assert_equals_(newCollection,self._collectionWithNewValue());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAtIfAbsentPut",{newCollection:newCollection},$globals.IndexableCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAtIfAbsentPut\x0a\x09| newCollection |\x0a\x09newCollection := self collection.\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09self assert: (newCollection at: index ifAbsentPut: [ self sampleNewValue ]) equals: value ].\x0a\x09self assert: newCollection equals: self collection.\x0a\x09self assert: (newCollection at: self sampleNewIndex ifAbsentPut: [ self sampleNewValue ]) equals: self sampleNewValue.\x0a\x09self assert: newCollection equals: self collectionWithNewValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collection", "samplesDo:", "assert:equals:", "at:ifAbsentPut:", "sampleNewValue", "sampleNewIndex", "collectionWithNewValue"]
}),
$globals.IndexableCollectionTest);

$core.addMethod(
$core.method({
selector: "testAtIfPresent",
protocol: 'tests',
fn: function (){
var self=this;
var visited,sentinel;
function $Object(){return $globals.Object||(typeof Object=="undefined"?nil:Object)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$3;
sentinel=$recv($Object())._new();
self._nonIndexesDo_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
visited=nil;
visited;
$2=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._at_ifPresent_(each,(function(value1){
visited=value1;
visited;
return sentinel;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:ifPresent:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
return self._assert_($recv(visited)._isNil());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._samplesDo_((function(index,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
visited=nil;
visited;
$4=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._at_ifPresent_(index,(function(value2){
visited=value2;
visited;
return sentinel;

}));
self._assert_equals_($3,sentinel);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
return self._assert_equals_(visited,$recv(self._collection())._at_(index));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAtIfPresent",{visited:visited,sentinel:sentinel},$globals.IndexableCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAtIfPresent\x0a\x09| visited sentinel |\x0a\x09sentinel := Object new.\x0a\x09self nonIndexesDo: [ :each |\x0a\x09\x09visited := nil.\x0a\x09\x09self assert: (self collection at: each ifPresent: [ :value1 | visited := value1. sentinel ]) equals: nil.\x0a\x09\x09self assert: visited isNil ].\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09visited := nil.\x0a\x09\x09self assert: (self collection at: index ifPresent: [ :value2 | visited := value2. sentinel ]) equals: sentinel.\x0a\x09\x09self assert: visited equals: (self collection at: index) ]",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
messageSends: ["new", "nonIndexesDo:", "assert:equals:", "at:ifPresent:", "collection", "assert:", "isNil", "samplesDo:", "at:"]
}),
$globals.IndexableCollectionTest);

$core.addMethod(
$core.method({
selector: "testAtIfPresentIfAbsent",
protocol: 'tests',
fn: function (){
var self=this;
var visited,sentinel;
function $Object(){return $globals.Object||(typeof Object=="undefined"?nil:Object)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3,$5,$4;
sentinel=$recv($Object())._new();
self._nonIndexesDo_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
visited=nil;
visited;
$2=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._at_ifPresent_ifAbsent_(each,(function(value1){
visited=value1;
visited;
return sentinel;

}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["sampleNewValue"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:ifPresent:ifAbsent:"]=1;
//>>excludeEnd("ctx");
$3=self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["sampleNewValue"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($1,$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
return self._assert_($recv(visited)._isNil());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._samplesDo_((function(index,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
visited=nil;
visited;
$5=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._at_ifPresent_ifAbsent_(index,(function(value2){
visited=value2;
visited;
return sentinel;

}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,6)});
//>>excludeEnd("ctx");
}));
self._assert_equals_($4,sentinel);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
return self._assert_equals_(visited,$recv(self._collection())._at_(index));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAtIfPresentIfAbsent",{visited:visited,sentinel:sentinel},$globals.IndexableCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAtIfPresentIfAbsent\x0a\x09| visited sentinel |\x0a\x09sentinel := Object new.\x0a\x09self nonIndexesDo: [ :each |\x0a\x09\x09visited := nil.\x0a\x09\x09self assert: (self collection at: each ifPresent: [ :value1 | visited := value1. sentinel ] ifAbsent: [ self sampleNewValue ] ) equals: self sampleNewValue.\x0a\x09\x09self assert: visited isNil ].\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09visited := nil.\x0a\x09\x09self assert: (self collection at: index ifPresent: [ :value2 | visited := value2. sentinel ] ifAbsent: [ self sampleNewValue ]) equals: sentinel.\x0a\x09\x09self assert: visited equals: (self collection at: index) ]",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
messageSends: ["new", "nonIndexesDo:", "assert:equals:", "at:ifPresent:ifAbsent:", "collection", "sampleNewValue", "assert:", "isNil", "samplesDo:", "at:"]
}),
$globals.IndexableCollectionTest);

$core.addMethod(
$core.method({
selector: "testAtPut",
protocol: 'tests',
fn: function (){
var self=this;
var newCollection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
newCollection=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
self._samplesDo_((function(index,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(newCollection)._at_put_(index,value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._assert_equals_(newCollection,self._collection());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$recv(newCollection)._at_put_(self._sampleNewIndex(),self._sampleNewValue());
self._assert_equals_(newCollection,self._collectionWithNewValue());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAtPut",{newCollection:newCollection},$globals.IndexableCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAtPut\x0a\x09| newCollection |\x0a\x09newCollection := self collection.\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09newCollection at: index put: value ].\x0a\x09self assert: newCollection equals: self collection.\x0a\x09newCollection at: self sampleNewIndex put: self sampleNewValue.\x0a\x09self assert: newCollection equals: self collectionWithNewValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collection", "samplesDo:", "at:put:", "assert:equals:", "sampleNewIndex", "sampleNewValue", "collectionWithNewValue"]
}),
$globals.IndexableCollectionTest);

$core.addMethod(
$core.method({
selector: "testEquality",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$5,$6,$7,$10,$9,$11,$8;
$2=self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$4=self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($1,$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$5=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$6=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($5,$6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$7=self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($7,self._collectionWithNewValue());
$10=self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=3;
//>>excludeEnd("ctx");
$9=$recv($10)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$11=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
$8=$recv($9).__eq($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._deny_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
self._deny_($recv(self._collection()).__eq($recv(self._collectionClass())._new()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testEquality",{},$globals.IndexableCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testEquality\x0a\x09self assert: self collectionClass new equals: self collectionClass new.\x0a\x09self assert: self collection equals: self collection.\x0a\x09self assert: self collectionWithNewValue equals: self collectionWithNewValue.\x0a\x09\x0a\x09self deny: self collectionClass new = self collection.\x0a\x09self deny: self collection = self collectionClass new",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "new", "collectionClass", "collection", "collectionWithNewValue", "deny:", "="]
}),
$globals.IndexableCollectionTest);

$core.addMethod(
$core.method({
selector: "testIndexOf",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
return $recv($1)._indexOf_(self._sampleNewValue());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["indexOf:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
self._samplesDo_((function(index,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._assert_equals_($recv(self._collection())._indexOf_(value),index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIndexOf",{},$globals.IndexableCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIndexOf\x0a\x09self should: [ self collection indexOf: self sampleNewValue ] raise: Error.\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09self assert: (self collection indexOf: value) equals: index ]",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["should:raise:", "indexOf:", "collection", "sampleNewValue", "samplesDo:", "assert:equals:"]
}),
$globals.IndexableCollectionTest);

$core.addMethod(
$core.method({
selector: "testIndexOfWithNull",
protocol: 'tests',
fn: function (){
var self=this;
var jsNull;
function $JSON(){return $globals.JSON||(typeof JSON=="undefined"?nil:JSON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
jsNull=$recv($JSON())._parse_("null");
self._samplesDo_((function(index,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=self._collection();
$recv($1)._at_put_(index,jsNull);
$2=$recv($1)._indexOf_(jsNull);
return self._assert_equals_($2,index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIndexOfWithNull",{jsNull:jsNull},$globals.IndexableCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIndexOfWithNull\x0a\x09| jsNull |\x0a\x09jsNull := JSON parse: 'null'.\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09self assert: (self collection at: index put: jsNull; indexOf: jsNull) equals: index ]",
referencedClasses: ["JSON"],
//>>excludeEnd("ide");
messageSends: ["parse:", "samplesDo:", "assert:equals:", "at:put:", "collection", "indexOf:"]
}),
$globals.IndexableCollectionTest);

$core.addMethod(
$core.method({
selector: "testWithIndexDo",
protocol: 'tests',
fn: function (){
var self=this;
var collection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
collection=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$recv(self._collection())._withIndexDo_((function(each,index){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._assert_equals_($recv(collection)._at_(index),each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,index:index},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testWithIndexDo",{collection:collection},$globals.IndexableCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testWithIndexDo\x0a\x09| collection |\x0a\x09collection := self collection.\x0a\x09\x0a\x09self collection withIndexDo: [ :each :index |\x0a\x09\x09self assert: (collection at: index) equals: each ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collection", "withIndexDo:", "assert:equals:", "at:"]
}),
$globals.IndexableCollectionTest);



$core.addClass('AssociativeCollectionTest', $globals.IndexableCollectionTest, [], 'Kernel-Tests');
$core.addMethod(
$core.method({
selector: "collectionKeys",
protocol: 'fixture',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionKeys",{},$globals.AssociativeCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionKeys\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AssociativeCollectionTest);

$core.addMethod(
$core.method({
selector: "collectionValues",
protocol: 'fixture',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionValues",{},$globals.AssociativeCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionValues\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AssociativeCollectionTest);

$core.addMethod(
$core.method({
selector: "nonIndexesDo:",
protocol: 'fixture',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aBlock)._value_((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
$recv(aBlock)._value_("z");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nonIndexesDo:",{aBlock:aBlock},$globals.AssociativeCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "nonIndexesDo: aBlock\x0a\x09aBlock value: 5.\x0a\x09aBlock value: 'z'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:"]
}),
$globals.AssociativeCollectionTest);

$core.addMethod(
$core.method({
selector: "sampleNewIndex",
protocol: 'fixture',
fn: function (){
var self=this;
return "new";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sampleNewIndex\x0a\x09^ 'new'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AssociativeCollectionTest);

$core.addMethod(
$core.method({
selector: "samplesDo:",
protocol: 'fixture',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aBlock)._value_value_("a",(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"samplesDo:",{aBlock:aBlock},$globals.AssociativeCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "samplesDo: aBlock\x0a\x09aBlock value: 'a' value: 2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:value:"]
}),
$globals.AssociativeCollectionTest);

$core.addMethod(
$core.method({
selector: "testAddAll",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$4,$5,$1,$6,$8,$9,$10,$11,$7,$12,$14,$15,$13;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.AssociativeCollectionTest.superclass.fn.prototype._testAddAll.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$2=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$3=$2;
$4=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$recv($3)._addAll_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addAll:"]=1;
//>>excludeEnd("ctx");
$5=$recv($2)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$1=$5;
$6=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($1,$6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$8=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=4;
//>>excludeEnd("ctx");
$9=$8;
$10=self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=1;
//>>excludeEnd("ctx");
$recv($9)._addAll_($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addAll:"]=2;
//>>excludeEnd("ctx");
$11=$recv($8)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=2;
//>>excludeEnd("ctx");
$7=$11;
$12=self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($7,$12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$14=self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=3;
//>>excludeEnd("ctx");
$recv($14)._addAll_(self._collection());
$15=$recv($14)._yourself();
$13=$15;
self._assert_equals_($13,self._collectionWithNewValue());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAddAll",{},$globals.AssociativeCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAddAll\x0a\x09super testAddAll.\x0a\x09self assert: (self collection addAll: self collection; yourself) equals: self collection.\x0a\x09self assert: (self collection addAll: self collectionWithNewValue; yourself) equals: self collectionWithNewValue.\x0a\x09self assert: (self collectionWithNewValue addAll: self collection; yourself) equals: self collectionWithNewValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["testAddAll", "assert:equals:", "addAll:", "collection", "yourself", "collectionWithNewValue"]
}),
$globals.AssociativeCollectionTest);

$core.addMethod(
$core.method({
selector: "testAsDictionary",
protocol: 'tests',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_($recv($recv($recv(self._collectionClass())._new())._asDictionary())._isMemberOf_($Dictionary()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAsDictionary",{},$globals.AssociativeCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAsDictionary\x0aself assert: ( self collectionClass new asDictionary isMemberOf: Dictionary ).",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["assert:", "isMemberOf:", "asDictionary", "new", "collectionClass"]
}),
$globals.AssociativeCollectionTest);

$core.addMethod(
$core.method({
selector: "testAsHashedCollection",
protocol: 'tests',
fn: function (){
var self=this;
function $HashedCollection(){return $globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_($recv($recv($recv(self._collectionClass())._new())._asHashedCollection())._isMemberOf_($HashedCollection()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAsHashedCollection",{},$globals.AssociativeCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAsHashedCollection\x0aself assert: ( self collectionClass new asHashedCollection isMemberOf: HashedCollection ).",
referencedClasses: ["HashedCollection"],
//>>excludeEnd("ide");
messageSends: ["assert:", "isMemberOf:", "asHashedCollection", "new", "collectionClass"]
}),
$globals.AssociativeCollectionTest);

$core.addMethod(
$core.method({
selector: "testComma",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1,$4,$6,$7,$5,$8,$10,$9;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.AssociativeCollectionTest.superclass.fn.prototype._testComma.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$2=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$3=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$4=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($1,$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$6=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=4;
//>>excludeEnd("ctx");
$7=self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=1;
//>>excludeEnd("ctx");
$5=$recv($6).__comma($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$8=self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($5,$8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$10=self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=3;
//>>excludeEnd("ctx");
$9=$recv($10).__comma(self._collection());
self._assert_equals_($9,self._collectionWithNewValue());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testComma",{},$globals.AssociativeCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testComma\x0a\x09super testComma.\x0a\x09self assert: self collection, self collection equals: self collection.\x0a\x09self assert: self collection, self collectionWithNewValue equals: self collectionWithNewValue.\x0a\x09self assert: self collectionWithNewValue, self collection equals: self collectionWithNewValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["testComma", "assert:equals:", ",", "collection", "collectionWithNewValue"]
}),
$globals.AssociativeCollectionTest);

$core.addMethod(
$core.method({
selector: "testFrom",
protocol: 'tests',
fn: function (){
var self=this;
var associations;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1="a".__minus_gt((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
associations=[$1,"b".__minus_gt((2))];
self._assertSameContents_as_($recv($recv(self._class())._collectionClass())._from_(associations),$globals.HashedCollection._newFromPairs_(["a",(1),"b",(2)]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testFrom",{associations:associations},$globals.AssociativeCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testFrom\x0a\x22Accept a collection of associations.\x22\x0a| associations |\x0aassociations := { 'a' -> 1. 'b' -> 2 }.\x0aself assertSameContents: ( self class collectionClass from: associations ) as: #{ 'a' -> 1. 'b' -> 2 }.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["->", "assertSameContents:as:", "from:", "collectionClass", "class"]
}),
$globals.AssociativeCollectionTest);

$core.addMethod(
$core.method({
selector: "testKeys",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3,$4;
$2=$recv($recv(self._collectionClass())._new())._keys();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["keys"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._isEmpty();
self._assert_($1);
$3=$recv(self._collection())._keys();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["keys"]=2;
//>>excludeEnd("ctx");
$4=self._collectionKeys();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionKeys"]=1;
//>>excludeEnd("ctx");
self._assertSameContents_as_($3,$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assertSameContents:as:"]=1;
//>>excludeEnd("ctx");
self._assertSameContents_as_($recv(self._collectionWithNewValue())._keys(),$recv(self._collectionKeys()).__comma([self._sampleNewIndex()]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testKeys",{},$globals.AssociativeCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testKeys\x0a\x09self assert:self collectionClass new keys isEmpty.\x0a\x09self assertSameContents:self collection keys as: self collectionKeys.\x0a\x09self assertSameContents:self collectionWithNewValue keys as: self collectionKeys, { self sampleNewIndex }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "isEmpty", "keys", "new", "collectionClass", "assertSameContents:as:", "collection", "collectionKeys", "collectionWithNewValue", ",", "sampleNewIndex"]
}),
$globals.AssociativeCollectionTest);

$core.addMethod(
$core.method({
selector: "testNewFromPairs",
protocol: 'tests',
fn: function (){
var self=this;
var flattenedAssociations;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
flattenedAssociations=["a",(1),"b",(2)];
self._assertSameContents_as_($recv($recv(self._class())._collectionClass())._newFromPairs_(flattenedAssociations),$globals.HashedCollection._newFromPairs_(["a",(1),"b",(2)]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNewFromPairs",{flattenedAssociations:flattenedAssociations},$globals.AssociativeCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNewFromPairs\x0a\x22Accept an array in which all odd indexes are keys and evens are values.\x22\x0a| flattenedAssociations |\x0aflattenedAssociations := { 'a'. 1. 'b'. 2 }.\x0aself assertSameContents: ( self class collectionClass newFromPairs: flattenedAssociations ) as: #{ 'a' -> 1. 'b' -> 2 }.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assertSameContents:as:", "newFromPairs:", "collectionClass", "class"]
}),
$globals.AssociativeCollectionTest);

$core.addMethod(
$core.method({
selector: "testPrintString",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$4,$1,$5;
$3=self._collectionClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionClass"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._new();
$recv($2)._at_put_("firstname","James");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($2)._at_put_("lastname","Bond");
$4=$recv($2)._printString();
$1=$4;
$5=$recv("a ".__comma($recv(self._collectionClass())._name())).__comma(" ('firstname' -> 'James' , 'lastname' -> 'Bond')");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,$5);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPrintString",{},$globals.AssociativeCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPrintString\x0a\x09self\x0a\x09\x09assert: (self collectionClass new\x0a\x09\x09\x09\x09\x09\x09\x09at:'firstname' put: 'James';\x0a\x09\x09\x09\x09\x09\x09\x09at:'lastname' put: 'Bond';\x0a\x09\x09\x09\x09\x09\x09\x09printString)\x0a\x09\x09equals: 'a ', self collectionClass name, ' (''firstname'' -> ''James'' , ''lastname'' -> ''Bond'')'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "at:put:", "new", "collectionClass", "printString", ",", "name"]
}),
$globals.AssociativeCollectionTest);

$core.addMethod(
$core.method({
selector: "testRemoveKey",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$6,$4,$7,$8;
self._nonIndexesDo_((function(each){
var collection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
collection=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
collection;
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(collection)._removeKey_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["removeKey:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}),$Error());
$1=collection;
$2=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
return self._assert_equals_($1,$2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,collection:collection},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._samplesDo_((function(index,value){
var collection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
collection=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
collection;
$3=$recv(collection)._removeKey_(index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["removeKey:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($3,value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$5=collection;
$6=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=4;
//>>excludeEnd("ctx");
$4=$recv($5).__eq($6);
return self._deny_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value,collection:collection},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$7=self._collectionWithNewValue();
$recv($7)._removeKey_(self._sampleNewIndex());
$8=$recv($7)._yourself();
self._assert_equals_($8,self._collection());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRemoveKey",{},$globals.AssociativeCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRemoveKey\x0a\x09self nonIndexesDo: [ :each |\x0a\x09\x09| collection |\x0a\x09\x09collection := self collection.\x0a\x09\x09self should: [ collection removeKey: each ] raise: Error.\x0a\x09\x09self assert: collection equals: self collection ].\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09| collection |\x0a\x09\x09collection := self collection.\x0a\x09\x09self assert: (collection removeKey: index) equals: value.\x0a\x09\x09self deny: collection = self collection ].\x0a\x09self\x0a\x09\x09assert: (self collectionWithNewValue removeKey: self sampleNewIndex; yourself)\x0a\x09\x09equals: self collection",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["nonIndexesDo:", "collection", "should:raise:", "removeKey:", "assert:equals:", "samplesDo:", "deny:", "=", "collectionWithNewValue", "sampleNewIndex", "yourself"]
}),
$globals.AssociativeCollectionTest);

$core.addMethod(
$core.method({
selector: "testRemoveKeyIfAbsent",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$7,$8,$6,$9,$10;
self._nonIndexesDo_((function(each){
var collection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
collection=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
collection;
$1=$recv(collection)._removeKey_ifAbsent_(each,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["sampleNewValue"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["removeKey:ifAbsent:"]=1;
//>>excludeEnd("ctx");
$2=self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["sampleNewValue"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($1,$2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$3=collection;
$4=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
return self._assert_equals_($3,$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,collection:collection},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._samplesDo_((function(index,value){
var collection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
collection=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
collection;
$5=$recv(collection)._removeKey_ifAbsent_(index,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._sampleNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["removeKey:ifAbsent:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($5,value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$7=collection;
$8=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=4;
//>>excludeEnd("ctx");
$6=$recv($7).__eq($8);
return self._deny_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value,collection:collection},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$9=self._collectionWithNewValue();
$recv($9)._removeKey_ifAbsent_(self._sampleNewIndex(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._assert_(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
}));
$10=$recv($9)._yourself();
self._assert_equals_($10,self._collection());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRemoveKeyIfAbsent",{},$globals.AssociativeCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRemoveKeyIfAbsent\x0a\x09self nonIndexesDo: [ :each |\x0a\x09\x09| collection |\x0a\x09\x09collection := self collection.\x0a\x09\x09self assert: (collection removeKey: each ifAbsent: [ self sampleNewValue ]) equals: self sampleNewValue.\x0a\x09\x09self assert: collection equals: self collection ].\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09| collection |\x0a\x09\x09collection := self collection.\x0a\x09\x09self assert: (collection removeKey: index ifAbsent: [ self sampleNewValue ]) equals: value.\x0a\x09\x09self deny: collection = self collection ].\x0a\x09self\x0a\x09\x09assert: (self collectionWithNewValue removeKey: self sampleNewIndex ifAbsent: [ self assert: false ]; yourself)\x0a\x09\x09equals: self collection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nonIndexesDo:", "collection", "assert:equals:", "removeKey:ifAbsent:", "sampleNewValue", "samplesDo:", "deny:", "=", "collectionWithNewValue", "sampleNewIndex", "assert:", "yourself"]
}),
$globals.AssociativeCollectionTest);

$core.addMethod(
$core.method({
selector: "testValues",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3,$4;
$2=$recv($recv(self._collectionClass())._new())._values();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["values"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._isEmpty();
self._assert_($1);
$3=$recv(self._collection())._values();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["values"]=2;
//>>excludeEnd("ctx");
$4=self._collectionValues();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionValues"]=1;
//>>excludeEnd("ctx");
self._assertSameContents_as_($3,$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assertSameContents:as:"]=1;
//>>excludeEnd("ctx");
self._assertSameContents_as_($recv(self._collectionWithNewValue())._values(),$recv(self._collectionValues()).__comma([self._sampleNewValue()]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testValues",{},$globals.AssociativeCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testValues\x0a\x09self assert:self collectionClass new values isEmpty.\x0a\x09self assertSameContents:self collection values as: self collectionValues.\x0a\x09self assertSameContents:self collectionWithNewValue values as: self collectionValues, { self sampleNewValue }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "isEmpty", "values", "new", "collectionClass", "assertSameContents:as:", "collection", "collectionValues", "collectionWithNewValue", ",", "sampleNewValue"]
}),
$globals.AssociativeCollectionTest);



$core.addClass('DictionaryTest', $globals.AssociativeCollectionTest, [], 'Kernel-Tests');
$core.addMethod(
$core.method({
selector: "collection",
protocol: 'fixture',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($Dictionary())._new();
$recv($2)._at_put_((1),(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($2)._at_put_("a",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv($2)._at_put_(true,(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$recv($2)._at_put_((1).__at((3)),(-4));
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collection",{},$globals.DictionaryTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collection\x0a\x09^ Dictionary new\x0a\x09\x09at: 1 put: 1;\x0a\x09\x09at: 'a' put: 2;\x0a\x09\x09at: true put: 3;\x0a\x09\x09at: 1@3 put: -4;\x0a\x09\x09yourself",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "new", "@", "yourself"]
}),
$globals.DictionaryTest);

$core.addMethod(
$core.method({
selector: "collectionKeys",
protocol: 'fixture',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=[(1),"a",true,(1).__at((3))];
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionKeys",{},$globals.DictionaryTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionKeys\x0a\x09^ {1. 'a'. true. 1@3}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["@"]
}),
$globals.DictionaryTest);

$core.addMethod(
$core.method({
selector: "collectionOfPrintStrings",
protocol: 'fixture',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($Dictionary())._new();
$recv($2)._at_put_((1),"1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($2)._at_put_("a","2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv($2)._at_put_(true,"3");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$recv($2)._at_put_((1).__at((3)),"-4");
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionOfPrintStrings",{},$globals.DictionaryTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionOfPrintStrings\x0a\x09^ Dictionary new\x0a\x09\x09at: 1 put: '1';\x0a\x09\x09at: 'a' put: '2';\x0a\x09\x09at: true put: '3';\x0a\x09\x09at: 1@3 put: '-4';\x0a\x09\x09yourself",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "new", "@", "yourself"]
}),
$globals.DictionaryTest);

$core.addMethod(
$core.method({
selector: "collectionSize",
protocol: 'fixture',
fn: function (){
var self=this;
return (4);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionSize\x0a\x09^ 4",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.DictionaryTest);

$core.addMethod(
$core.method({
selector: "collectionValues",
protocol: 'fixture',
fn: function (){
var self=this;
var $1;
$1=[(1),(2),(3),(-4)];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionValues\x0a\x09^ {1. 2. 3. -4}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.DictionaryTest);

$core.addMethod(
$core.method({
selector: "collectionWithDuplicates",
protocol: 'fixture',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($Dictionary())._new();
$recv($2)._at_put_((1),(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($2)._at_put_("a",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv($2)._at_put_(true,(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$recv($2)._at_put_((4),(-4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
$recv($2)._at_put_("b",(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=5;
//>>excludeEnd("ctx");
$recv($2)._at_put_((3),(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=6;
//>>excludeEnd("ctx");
$recv($2)._at_put_(false,(12));
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionWithDuplicates",{},$globals.DictionaryTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionWithDuplicates\x0a\x09^ Dictionary new\x0a\x09\x09at: 1 put: 1;\x0a\x09\x09at: 'a' put: 2;\x0a\x09\x09at: true put: 3;\x0a\x09\x09at: 4 put: -4;\x0a\x09\x09at: 'b' put: 1;\x0a\x09\x09at: 3 put: 3;\x0a\x09\x09at: false put: 12;\x0a\x09\x09yourself",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "new", "yourself"]
}),
$globals.DictionaryTest);

$core.addMethod(
$core.method({
selector: "collectionWithNewValue",
protocol: 'fixture',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($Dictionary())._new();
$recv($2)._at_put_((1),(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($2)._at_put_("a",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv($2)._at_put_(true,(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$recv($2)._at_put_((1).__at((3)),(-4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
$recv($2)._at_put_("new","N");
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionWithNewValue",{},$globals.DictionaryTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionWithNewValue\x0a\x09^ Dictionary new\x0a\x09\x09at: 1 put: 1;\x0a\x09\x09at: 'a' put: 2;\x0a\x09\x09at: true put: 3;\x0a\x09\x09at: 1@3 put: -4;\x0a\x09\x09at: 'new' put: 'N';\x0a\x09\x09yourself",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "new", "@", "yourself"]
}),
$globals.DictionaryTest);

$core.addMethod(
$core.method({
selector: "sampleNewValueAsCollection",
protocol: 'fixture',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($Dictionary())._new();
$recv($2)._at_put_("new","N");
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sampleNewValueAsCollection",{},$globals.DictionaryTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sampleNewValueAsCollection\x0a\x09^ Dictionary new\x0a\x09\x09at: 'new' put: 'N';\x0a\x09\x09yourself",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "new", "yourself"]
}),
$globals.DictionaryTest);

$core.addMethod(
$core.method({
selector: "samplesDo:",
protocol: 'fixture',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.DictionaryTest.superclass.fn.prototype._samplesDo_.apply($recv(self), [aBlock]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(aBlock)._value_value_(true,(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:value:"]=1;
//>>excludeEnd("ctx");
$recv(aBlock)._value_value_((1).__at((3)),(-4));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"samplesDo:",{aBlock:aBlock},$globals.DictionaryTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "samplesDo: aBlock\x0a\x09super samplesDo: aBlock.\x0a\x09aBlock value: true value: 3.\x0a\x09aBlock value: 1@3 value: -4",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["samplesDo:", "value:value:", "@"]
}),
$globals.DictionaryTest);

$core.addMethod(
$core.method({
selector: "testAccessing",
protocol: 'tests',
fn: function (){
var self=this;
var d;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$9,$10,$8,$12,$13,$11;
d=$recv($Dictionary())._new();
$recv(d)._at_put_("hello","world");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$1=$recv(d)._at_("hello");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,"world");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=$recv(d)._at_ifAbsent_("hello",(function(){
return nil;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifAbsent:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($2,"world");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
self._deny_($recv($recv(d)._at_ifAbsent_("foo",(function(){
return nil;

}))).__eq("world"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$3=$recv(d)._includesKey_("hello");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["includesKey:"]=1;
//>>excludeEnd("ctx");
self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$4=$recv(d)._includesKey_("foo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["includesKey:"]=2;
//>>excludeEnd("ctx");
self._deny_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=2;
//>>excludeEnd("ctx");
$recv(d)._at_put_((1),(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$5=$recv(d)._at_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($5,(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$6=d;
$7=(1).__at((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$recv($6)._at_put_($7,(3));
$9=d;
$10=(1).__at((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$8=$recv($9)._at_($10);
self._assert_equals_($8,(3));
$12=d;
$13=(1).__at((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=3;
//>>excludeEnd("ctx");
$11=$recv($12)._includesKey_($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["includesKey:"]=3;
//>>excludeEnd("ctx");
self._assert_($11);
self._deny_($recv(d)._includesKey_((3).__at((1))));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAccessing",{d:d},$globals.DictionaryTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAccessing\x0a\x09| d |\x0a\x0a\x09d := Dictionary new.\x0a\x0a\x09d at: 'hello' put: 'world'.\x0a\x09self assert: (d at: 'hello') equals: 'world'.\x0a\x09self assert: (d at: 'hello' ifAbsent: [ nil ]) equals: 'world'.\x0a\x09self deny: (d at: 'foo' ifAbsent: [ nil ]) = 'world'.\x0a\x0a\x09self assert: (d includesKey: 'hello').\x0a\x09self deny: (d includesKey: 'foo').\x0a\x0a\x09d at: 1 put: 2.\x0a\x09self assert: (d at: 1) equals: 2.\x0a\x0a\x09d at: 1@3 put: 3.\x0a\x09self assert: (d at: 1@3) equals: 3.\x0a\x0a\x09self assert: (d includesKey: 1@3).\x0a\x09self deny: (d includesKey: 3@1)",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new", "at:put:", "assert:equals:", "at:", "at:ifAbsent:", "deny:", "=", "assert:", "includesKey:", "@"]
}),
$globals.DictionaryTest);

$core.addMethod(
$core.method({
selector: "testDynamicDictionaries",
protocol: 'tests',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_equals_($recv($globals.HashedCollection._newFromPairs_(["hello",(1)]))._asDictionary(),$recv($Dictionary())._with_("hello".__minus_gt((1))));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDynamicDictionaries",{},$globals.DictionaryTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDynamicDictionaries\x0a\x09self assert: #{'hello' -> 1} asDictionary equals: (Dictionary with: 'hello' -> 1)",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "asDictionary", "with:", "->"]
}),
$globals.DictionaryTest);


$core.addMethod(
$core.method({
selector: "collectionClass",
protocol: 'fixture',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return $Dictionary();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionClass\x0a\x09^ Dictionary",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.DictionaryTest.klass);


$core.addClass('HashedCollectionTest', $globals.AssociativeCollectionTest, [], 'Kernel-Tests');
$core.addMethod(
$core.method({
selector: "collection",
protocol: 'fixture',
fn: function (){
var self=this;
var $1;
$1=$globals.HashedCollection._newFromPairs_(["b",(1),"a",(2),"c",(3),"d",(-4)]);
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collection\x0a\x09^ #{ 'b' -> 1. 'a' -> 2. 'c' -> 3. 'd' -> -4 }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HashedCollectionTest);

$core.addMethod(
$core.method({
selector: "collectionKeys",
protocol: 'fixture',
fn: function (){
var self=this;
var $1;
$1=["b","a","c","d"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionKeys\x0a\x09^ { 'b'. 'a'. 'c'. 'd' }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HashedCollectionTest);

$core.addMethod(
$core.method({
selector: "collectionOfPrintStrings",
protocol: 'fixture',
fn: function (){
var self=this;
var $1;
$1=$globals.HashedCollection._newFromPairs_(["b","1","a","2","c","3","d","-4"]);
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionOfPrintStrings\x0a\x09^ #{ 'b' -> '1'. 'a' -> '2'. 'c' -> '3'. 'd' -> '-4' }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HashedCollectionTest);

$core.addMethod(
$core.method({
selector: "collectionSize",
protocol: 'fixture',
fn: function (){
var self=this;
return (4);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionSize\x0a\x09^ 4",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HashedCollectionTest);

$core.addMethod(
$core.method({
selector: "collectionValues",
protocol: 'fixture',
fn: function (){
var self=this;
var $1;
$1=[(1),(2),(3),(-4)];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionValues\x0a\x09^ { 1. 2. 3. -4 }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HashedCollectionTest);

$core.addMethod(
$core.method({
selector: "collectionWithDuplicates",
protocol: 'fixture',
fn: function (){
var self=this;
var $1;
$1=$globals.HashedCollection._newFromPairs_(["b",(1),"a",(2),"c",(3),"d",(-4),"e",(1),"f",(2),"g",(10)]);
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionWithDuplicates\x0a\x09^ #{ 'b' -> 1. 'a' -> 2. 'c' -> 3. 'd' -> -4. 'e' -> 1. 'f' -> 2. 'g' -> 10 }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HashedCollectionTest);

$core.addMethod(
$core.method({
selector: "collectionWithNewValue",
protocol: 'fixture',
fn: function (){
var self=this;
var $1;
$1=$globals.HashedCollection._newFromPairs_(["b",(1),"a",(2),"c",(3),"d",(-4),"new","N"]);
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionWithNewValue\x0a\x09^ #{ 'b' -> 1. 'a' -> 2. 'c' -> 3. 'd' -> -4. 'new' -> 'N' }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HashedCollectionTest);

$core.addMethod(
$core.method({
selector: "sampleNewValueAsCollection",
protocol: 'fixture',
fn: function (){
var self=this;
var $1;
$1=$globals.HashedCollection._newFromPairs_(["new","N"]);
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sampleNewValueAsCollection\x0a\x09^ #{ 'new' -> 'N' }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HashedCollectionTest);

$core.addMethod(
$core.method({
selector: "testDynamicDictionaries",
protocol: 'tests',
fn: function (){
var self=this;
function $HashedCollection(){return $globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_equals_($recv($globals.HashedCollection._newFromPairs_(["hello",(1)]))._asHashedCollection(),$recv($HashedCollection())._with_("hello".__minus_gt((1))));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDynamicDictionaries",{},$globals.HashedCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDynamicDictionaries\x0a\x09self assert: #{'hello' -> 1} asHashedCollection equals: (HashedCollection with: 'hello' -> 1)",
referencedClasses: ["HashedCollection"],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "asHashedCollection", "with:", "->"]
}),
$globals.HashedCollectionTest);


$core.addMethod(
$core.method({
selector: "collectionClass",
protocol: 'fixture',
fn: function (){
var self=this;
function $HashedCollection(){return $globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return $HashedCollection();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionClass\x0a\x09^ HashedCollection",
referencedClasses: ["HashedCollection"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HashedCollectionTest.klass);


$core.addClass('SequenceableCollectionTest', $globals.IndexableCollectionTest, [], 'Kernel-Tests');
$core.addMethod(
$core.method({
selector: "collectionFirst",
protocol: 'fixture',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionFirst",{},$globals.SequenceableCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionFirst\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "collectionFirstTwo",
protocol: 'fixture',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionFirstTwo",{},$globals.SequenceableCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionFirstTwo\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "collectionLast",
protocol: 'fixture',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionLast",{},$globals.SequenceableCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionLast\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "collectionLastTwo",
protocol: 'fixture',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionLastTwo",{},$globals.SequenceableCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionLastTwo\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "nonIndexesDo:",
protocol: 'fixture',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aBlock)._value_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
$recv(aBlock)._value_($recv(self._collectionSize()).__plus((1)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:"]=2;
//>>excludeEnd("ctx");
$recv(aBlock)._value_("z");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nonIndexesDo:",{aBlock:aBlock},$globals.SequenceableCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "nonIndexesDo: aBlock\x0a\x09aBlock value: 0.\x0a\x09aBlock value: self collectionSize + 1.\x0a\x09aBlock value: 'z'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "+", "collectionSize"]
}),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "samplesDo:",
protocol: 'fixture',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aBlock)._value_value_((1),self._collectionFirst());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:value:"]=1;
//>>excludeEnd("ctx");
$recv(aBlock)._value_value_(self._collectionSize(),self._collectionLast());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"samplesDo:",{aBlock:aBlock},$globals.SequenceableCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "samplesDo: aBlock\x0a\x09aBlock value: 1 value: self collectionFirst.\x0a\x09aBlock value: self collectionSize value: self collectionLast",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:value:", "collectionFirst", "collectionSize", "collectionLast"]
}),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "testBeginsWith",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$5,$3,$7,$6;
$2=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._beginsWith_($recv(self._collectionClass())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["beginsWith:"]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$4=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$5=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
$3=$recv($4)._beginsWith_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["beginsWith:"]=2;
//>>excludeEnd("ctx");
self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$7=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=4;
//>>excludeEnd("ctx");
$6=$recv($7)._beginsWith_(self._collectionFirstTwo());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["beginsWith:"]=3;
//>>excludeEnd("ctx");
self._assert_($6);
self._deny_($recv(self._collection())._beginsWith_(self._collectionLastTwo()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testBeginsWith",{},$globals.SequenceableCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testBeginsWith\x0a\x09self assert: (self collection beginsWith: self collectionClass new).\x0a\x09self assert: (self collection beginsWith: self collection).\x0a\x09self assert: (self collection beginsWith: self collectionFirstTwo).\x0a\x09self deny: (self collection beginsWith: self collectionLastTwo)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "beginsWith:", "collection", "new", "collectionClass", "collectionFirstTwo", "deny:", "collectionLastTwo"]
}),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "testEndsWith",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$5,$3,$7,$6;
$2=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._endsWith_($recv(self._collectionClass())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["endsWith:"]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$4=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$5=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
$3=$recv($4)._endsWith_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["endsWith:"]=2;
//>>excludeEnd("ctx");
self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$7=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=4;
//>>excludeEnd("ctx");
$6=$recv($7)._endsWith_(self._collectionLastTwo());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["endsWith:"]=3;
//>>excludeEnd("ctx");
self._assert_($6);
self._deny_($recv(self._collection())._endsWith_(self._collectionFirstTwo()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testEndsWith",{},$globals.SequenceableCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testEndsWith\x0a\x09self assert: (self collection endsWith: self collectionClass new).\x0a\x09self assert: (self collection endsWith: self collection).\x0a\x09self assert: (self collection endsWith: self collectionLastTwo).\x0a\x09self deny: (self collection endsWith: self collectionFirstTwo)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "endsWith:", "collection", "new", "collectionClass", "collectionLastTwo", "deny:", "collectionFirstTwo"]
}),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "testFirst",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_equals_($recv(self._collection())._first(),self._collectionFirst());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testFirst",{},$globals.SequenceableCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testFirst\x0a\x09self assert: self collection first equals: self collectionFirst",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "first", "collection", "collectionFirst"]
}),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "testFirstN",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5,$7;
$2=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._first_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,self._collectionFirstTwo());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$4=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._first_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($3,$recv(self._collectionClass())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$6=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
$5=$recv($6)._first_(self._collectionSize());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first:"]=3;
//>>excludeEnd("ctx");
$7=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($5,$7);
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._collection())._first_((33));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testFirstN",{},$globals.SequenceableCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testFirstN\x0a\x09self \x0a\x09\x09assert: (self collection first: 2)\x0a\x09\x09equals: self collectionFirstTwo.\x0a\x09\x09\x0a\x09self\x0a\x09\x09assert: (self collection first: 0)\x0a\x09\x09equals: self collectionClass new.\x0a\x09\x09\x0a\x09self\x0a\x09\x09assert: (self collection first: self collectionSize)\x0a\x09\x09equals: self collection.\x0a\x09\x09\x0a\x09self should: [ self collection first: 33 ] raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "first:", "collection", "collectionFirstTwo", "new", "collectionClass", "collectionSize", "should:raise:"]
}),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "testFourth",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._fourth();
self._assert_equals_($1,$recv(self._collection())._at_((4)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testFourth",{},$globals.SequenceableCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testFourth\x0a\x09self assert: (self collection fourth) equals: (self collection at: 4)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "fourth", "collection", "at:"]
}),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "testIndexOfStartingAt",
protocol: 'tests',
fn: function (){
var self=this;
var jsNull;
function $JSON(){return $globals.JSON||(typeof JSON=="undefined"?nil:JSON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$3;
jsNull=$recv($JSON())._parse_("null");
self._samplesDo_((function(index,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._indexOf_startingAt_(value,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["indexOf:startingAt:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$4=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._indexOf_startingAt_(value,index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["indexOf:startingAt:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($3,index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
return self._assert_equals_($recv(self._collection())._indexOf_startingAt_(value,$recv(index).__plus((1))),(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIndexOfStartingAt",{jsNull:jsNull},$globals.SequenceableCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIndexOfStartingAt\x0a\x09| jsNull |\x0a\x09jsNull := JSON parse: 'null'.\x0a\x09self samplesDo: [ :index :value |\x0a\x09\x09self assert: (self collection indexOf: value startingAt: 1) equals: index.\x0a\x09\x09self assert: (self collection indexOf: value startingAt: index) equals: index.\x0a\x09\x09self assert: (self collection indexOf: value startingAt: index+1) equals: 0 ]",
referencedClasses: ["JSON"],
//>>excludeEnd("ide");
messageSends: ["parse:", "samplesDo:", "assert:equals:", "indexOf:startingAt:", "collection", "+"]
}),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "testIndexOfStartingAtWithNull",
protocol: 'tests',
fn: function (){
var self=this;
var jsNull;
function $JSON(){return $globals.JSON||(typeof JSON=="undefined"?nil:JSON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
jsNull=$recv($JSON())._parse_("null");
self._samplesDo_((function(index,value){
var collection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
collection=self._collection();
collection;
$recv(collection)._at_put_(index,jsNull);
$1=$recv(collection)._indexOf_startingAt_(jsNull,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["indexOf:startingAt:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=$recv(collection)._indexOf_startingAt_(jsNull,index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["indexOf:startingAt:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
return self._assert_equals_($recv(collection)._indexOf_startingAt_(jsNull,$recv(index).__plus((1))),(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value,collection:collection},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIndexOfStartingAtWithNull",{jsNull:jsNull},$globals.SequenceableCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIndexOfStartingAtWithNull\x0a\x09| jsNull |\x0a\x09jsNull := JSON parse: 'null'.\x0a\x09self samplesDo: [ :index :value | | collection |\x0a\x09\x09collection := self collection.\x0a\x09\x09collection at: index put: jsNull.\x0a\x09\x09self assert: (collection indexOf: jsNull startingAt: 1) equals: index.\x0a\x09\x09self assert: (collection indexOf: jsNull startingAt: index) equals: index.\x0a\x09\x09self assert: (collection indexOf: jsNull startingAt: index+1) equals: 0 ]",
referencedClasses: ["JSON"],
//>>excludeEnd("ide");
messageSends: ["parse:", "samplesDo:", "collection", "at:put:", "assert:equals:", "indexOf:startingAt:", "+"]
}),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "testLast",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_equals_($recv(self._collection())._last(),self._collectionLast());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testLast",{},$globals.SequenceableCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testLast\x0a\x09self assert: self collection last equals: self collectionLast",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "last", "collection", "collectionLast"]
}),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "testLastN",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5,$7;
$2=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._last_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["last:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,self._collectionLastTwo());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$4=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._last_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["last:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($3,$recv(self._collectionClass())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$6=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
$5=$recv($6)._last_(self._collectionSize());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["last:"]=3;
//>>excludeEnd("ctx");
$7=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($5,$7);
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._collection())._last_((33));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testLastN",{},$globals.SequenceableCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testLastN\x0a\x09self \x0a\x09\x09assert: (self collection last: 2) \x0a\x09\x09equals: self collectionLastTwo.\x0a\x09\x09\x0a\x09self\x0a\x09\x09assert: (self collection last: 0)\x0a\x09\x09equals: self collectionClass new.\x0a\x0a\x09self\x0a\x09\x09assert: (self collection last: self collectionSize)\x0a\x09\x09equals: self collection.\x0a\x0a\x09self should: [ self collection last: 33 ] raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "last:", "collection", "collectionLastTwo", "new", "collectionClass", "collectionSize", "should:raise:"]
}),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "testSecond",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._second();
self._assert_equals_($1,$recv(self._collection())._at_((2)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSecond",{},$globals.SequenceableCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSecond\x0a\x09self assert: (self collection second) equals: (self collection at: 2)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "second", "collection", "at:"]
}),
$globals.SequenceableCollectionTest);

$core.addMethod(
$core.method({
selector: "testThird",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._third();
self._assert_equals_($1,$recv(self._collection())._at_((3)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testThird",{},$globals.SequenceableCollectionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testThird\x0a\x09self assert: (self collection third) equals: (self collection at: 3)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "third", "collection", "at:"]
}),
$globals.SequenceableCollectionTest);



$core.addClass('ArrayTest', $globals.SequenceableCollectionTest, [], 'Kernel-Tests');
$core.addMethod(
$core.method({
selector: "collection",
protocol: 'fixture',
fn: function (){
var self=this;
var $1;
$1=[(1), (2), (3), (-4)];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collection\x0a\x09^ #(1 2 3 -4)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "collectionFirst",
protocol: 'fixture',
fn: function (){
var self=this;
return (1);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionFirst\x0a\x09^ 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "collectionFirstTwo",
protocol: 'fixture',
fn: function (){
var self=this;
var $1;
$1=[(1), (2)];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionFirstTwo\x0a\x09^ #(1 2)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "collectionLast",
protocol: 'fixture',
fn: function (){
var self=this;
return (-4);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionLast\x0a\x09^ -4",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "collectionLastTwo",
protocol: 'fixture',
fn: function (){
var self=this;
var $1;
$1=[(3), (-4)];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionLastTwo\x0a\x09^ #(3 -4)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "collectionOfPrintStrings",
protocol: 'fixture',
fn: function (){
var self=this;
var $1;
$1=["1", "2", "3", "-4"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionOfPrintStrings\x0a\x09^ #('1' '2' '3' '-4')",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "collectionSize",
protocol: 'fixture',
fn: function (){
var self=this;
return (4);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionSize\x0a\x09^ 4",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "collectionWithDuplicates",
protocol: 'fixture',
fn: function (){
var self=this;
var $1;
$1=["a", "b", "c", (1), (2), (1), "a"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionWithDuplicates\x0a\x09^ #('a' 'b' 'c' 1 2 1 'a')",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "collectionWithNewValue",
protocol: 'fixture',
fn: function (){
var self=this;
var $1;
$1=[(1), (2), (3), (-4), "N"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionWithNewValue\x0a\x09^ #(1 2 3 -4 'N')",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "sampleNewIndex",
protocol: 'fixture',
fn: function (){
var self=this;
return (5);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sampleNewIndex\x0a\x09^ 5",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "samplesDo:",
protocol: 'fixture',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.ArrayTest.superclass.fn.prototype._samplesDo_.apply($recv(self), [aBlock]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(aBlock)._value_value_((3),(3));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"samplesDo:",{aBlock:aBlock},$globals.ArrayTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "samplesDo: aBlock\x0a\x09super samplesDo: aBlock.\x0a\x09aBlock value: 3 value: 3.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["samplesDo:", "value:value:"]
}),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "testAdd",
protocol: 'tests',
fn: function (){
var self=this;
var array;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
array=self._collection();
$recv(array)._add_((6));
self._assert_equals_($recv(array)._last(),(6));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAdd",{array:array},$globals.ArrayTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAdd \x0a\x09| array | \x0a\x09array := self collection. \x0a\x09array add: 6.\x0a\x09\x0a\x09self assert: array last equals: 6",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collection", "add:", "assert:equals:", "last"]
}),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "testAddFirst",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._collection();
$recv($1)._addFirst_((0));
$2=$recv($1)._yourself();
self._assert_equals_($recv($2)._first(),(0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAddFirst",{},$globals.ArrayTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAddFirst\x0a\x09self assert: (self collection addFirst: 0; yourself) first equals: 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "first", "addFirst:", "collection", "yourself"]
}),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "testPrintString",
protocol: 'tests',
fn: function (){
var self=this;
var array;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$9;
array=$recv($Array())._new();
$1=$recv(array)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,"an Array ()");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=array;
$recv($2)._add_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$3=$recv($2)._add_((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
$4=$recv(array)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($4,"an Array (1 3)");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$recv(array)._add_("foo");
$5=$recv(array)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($5,"an Array (1 3 'foo')");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$6=array;
$recv($6)._remove_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["remove:"]=1;
//>>excludeEnd("ctx");
$7=$recv($6)._remove_((3));
$8=$recv(array)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($8,"an Array ('foo')");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$recv(array)._addLast_((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addLast:"]=1;
//>>excludeEnd("ctx");
$9=$recv(array)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($9,"an Array ('foo' 3)");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
$recv(array)._addLast_((3));
self._assert_equals_($recv(array)._printString(),"an Array ('foo' 3 3)");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPrintString",{array:array},$globals.ArrayTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPrintString\x0a\x09| array |\x0a\x09array := Array new.\x0a\x09self assert: array printString equals: 'an Array ()'.\x0a\x09array add: 1; add: 3.\x0a\x09self assert: array printString equals: 'an Array (1 3)'.\x0a\x09array add: 'foo'.\x0a\x09self assert: array printString equals: 'an Array (1 3 ''foo'')'.\x0a\x09array remove: 1; remove: 3.\x0a\x09self assert: array printString equals: 'an Array (''foo'')'.\x0a\x09array addLast: 3.\x0a\x09self assert: array printString equals: 'an Array (''foo'' 3)'.\x0a\x09array addLast: 3.\x0a\x09self assert: array printString equals: 'an Array (''foo'' 3 3)'.",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["new", "assert:equals:", "printString", "add:", "remove:", "addLast:"]
}),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "testRemove",
protocol: 'tests',
fn: function (){
var self=this;
var array;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
array=[(1), (2), (3), (4), (5)];
$recv(array)._remove_((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["remove:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_(array,[(1), (2), (4), (5)]);
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(array)._remove_((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRemove",{array:array},$globals.ArrayTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRemove \x0a\x09| array |\x0a\x09array := #(1 2 3 4 5). \x0a\x09array remove: 3.\x0a\x0a\x09self assert: array equals: #(1 2 4 5).\x0a\x09self should: [ array remove: 3 ] raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["remove:", "assert:equals:", "should:raise:"]
}),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "testRemoveFromTo",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=[(1), (2), (3), (4)]._removeFrom_to_((1),(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["removeFrom:to:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,[(4)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=[(1), (2), (3), (4)]._removeFrom_to_((2),(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["removeFrom:to:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,[(1), (4)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_([(1), (2), (3), (4)]._removeFrom_to_((2),(4)),[(1)]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRemoveFromTo",{},$globals.ArrayTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRemoveFromTo\x0a\x09\x0a\x09self assert: (#(1 2 3 4) removeFrom: 1 to: 3) equals: #(4).\x0a\x09self assert: (#(1 2 3 4) removeFrom: 2 to: 3) equals: #(1 4).\x0a\x09self assert: (#(1 2 3 4) removeFrom: 2 to: 4) equals: #(1)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "removeFrom:to:"]
}),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "testRemoveIndex",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=[(1), (2), (3), (4)]._removeIndex_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["removeIndex:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,[(1), (3), (4)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=[(1), (2), (3), (4)]._removeIndex_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["removeIndex:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,[(2), (3), (4)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_(["hello"]._removeIndex_((1)),[]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRemoveIndex",{},$globals.ArrayTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRemoveIndex\x0a\x09\x0a\x09self assert: (#(1 2 3 4) removeIndex: 2) equals: #(1 3 4).\x0a\x09self assert: (#(1 2 3 4) removeIndex: 1) equals: #(2 3 4).\x0a\x09self assert: (#('hello') removeIndex: 1) equals: #()",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "removeIndex:"]
}),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "testRemoveLast",
protocol: 'tests',
fn: function (){
var self=this;
var array;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
array=[(1), (2)];
$recv(array)._removeLast();
self._assert_equals_($recv(array)._last(),(1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRemoveLast",{array:array},$globals.ArrayTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRemoveLast \x0a\x09| array |\x0a\x09array := #(1 2). \x0a\x09array removeLast.\x0a\x09\x0a\x09self assert: array last equals: 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeLast", "assert:equals:", "last"]
}),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "testReversed",
protocol: 'tests',
fn: function (){
var self=this;
var array;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
array=[(5), (4), (3), (2), (1)];
self._assert_equals_($recv(array)._reversed(),[(1), (2), (3), (4), (5)]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testReversed",{array:array},$globals.ArrayTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testReversed\x0a\x09|array|\x0a\x09array := #(5 4 3 2 1). \x0a\x09self assert: (array reversed) equals: #(1 2 3 4 5)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "reversed"]
}),
$globals.ArrayTest);

$core.addMethod(
$core.method({
selector: "testSort",
protocol: 'tests',
fn: function (){
var self=this;
var array;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
array=[(10), (1), (5)];
$recv(array)._sort();
self._assert_equals_(array,[(1), (5), (10)]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSort",{array:array},$globals.ArrayTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSort\x0a\x09| array |\x0a\x09array := #(10 1 5). \x0a\x09array sort.\x0a\x09self assert: array equals: #(1 5 10)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sort", "assert:equals:"]
}),
$globals.ArrayTest);


$core.addMethod(
$core.method({
selector: "collectionClass",
protocol: 'fixture',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
return $Array();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionClass\x0a\x09^ Array",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ArrayTest.klass);


$core.addClass('StringTest', $globals.SequenceableCollectionTest, [], 'Kernel-Tests');
$core.addMethod(
$core.method({
selector: "collection",
protocol: 'fixture',
fn: function (){
var self=this;
return "helLo";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collection\x0a\x09^ 'helLo'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "collectionFirst",
protocol: 'fixture',
fn: function (){
var self=this;
return "h";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionFirst\x0a\x09^ 'h'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "collectionFirstTwo",
protocol: 'fixture',
fn: function (){
var self=this;
return "he";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionFirstTwo\x0a\x09^ 'he'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "collectionLast",
protocol: 'fixture',
fn: function (){
var self=this;
return "o";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionLast\x0a\x09^ 'o'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "collectionLastTwo",
protocol: 'fixture',
fn: function (){
var self=this;
return "Lo";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionLastTwo\x0a\x09^ 'Lo'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "collectionOfPrintStrings",
protocol: 'fixture',
fn: function (){
var self=this;
return "'h''e''l''L''o'";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionOfPrintStrings\x0a\x09^ '''h''''e''''l''''L''''o'''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "collectionSize",
protocol: 'fixture',
fn: function (){
var self=this;
return (5);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionSize\x0a\x09^ 5",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "collectionWithDuplicates",
protocol: 'fixture',
fn: function (){
var self=this;
return "abbaerte";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionWithDuplicates\x0a\x09^ 'abbaerte'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "collectionWithNewValue",
protocol: 'fixture',
fn: function (){
var self=this;
return "helLoN";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionWithNewValue\x0a\x09^ 'helLoN'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "sampleNewValueAsCollection",
protocol: 'fixture',
fn: function (){
var self=this;
return "N";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sampleNewValueAsCollection\x0a\x09^ 'N'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "samplesDo:",
protocol: 'fixture',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.StringTest.superclass.fn.prototype._samplesDo_.apply($recv(self), [aBlock]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(aBlock)._value_value_((3),"l");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"samplesDo:",{aBlock:aBlock},$globals.StringTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "samplesDo: aBlock\x0a\x09super samplesDo: aBlock.\x0a\x09aBlock value: 3 value: 'l'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["samplesDo:", "value:value:"]
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testAddAll",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
return $recv($1)._addAll_(self._collection());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAddAll",{},$globals.StringTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAddAll\x0a\x09\x22String instances are read-only\x22\x0a\x09self should: [ self collection addAll: self collection ] raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["should:raise:", "addAll:", "collection"]
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testAddRemove",
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
return "hello"._add_("a");
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
return "hello"._remove_("h");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}),$Error());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAddRemove",{},$globals.StringTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAddRemove\x0a\x09self should: [ 'hello' add: 'a' ] raise: Error.\x0a\x09self should: [ 'hello' remove: 'h' ] raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["should:raise:", "add:", "remove:"]
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testAsArray",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_equals_("hello"._asArray(),["h", "e", "l", "l", "o"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAsArray",{},$globals.StringTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAsArray\x0a\x09self assert: 'hello' asArray equals: #('h' 'e' 'l' 'l' 'o').",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "asArray"]
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testAsLowerCase",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_equals_("JACKIE"._asLowercase(),"jackie");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAsLowerCase",{},$globals.StringTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAsLowerCase\x0a\x09self assert: 'JACKIE' asLowercase equals: 'jackie'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "asLowercase"]
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testAsNumber",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1="3"._asNumber();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asNumber"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2="-3"._asNumber();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asNumber"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,(-3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_("-1.5"._asNumber(),(-1.5));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAsNumber",{},$globals.StringTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAsNumber\x0a\x09self assert: '3' asNumber equals: 3.\x0a\x09self assert: '-3' asNumber equals: -3.\x0a\x09self assert: '-1.5' asNumber equals: -1.5.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "asNumber"]
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testAsUpperCase",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_equals_("jackie"._asUppercase(),"JACKIE");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAsUpperCase",{},$globals.StringTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAsUpperCase\x0a\x09self assert: 'jackie' asUppercase equals: 'JACKIE'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "asUppercase"]
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testAsciiValue",
protocol: 'tests',
fn: function (){
var self=this;
var characterA,characterU;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
characterA="A";
characterU="U";
$1=$recv(characterA)._asciiValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asciiValue"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,(65));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($recv(characterU)._asciiValue(),(85));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAsciiValue",{characterA:characterA,characterU:characterU},$globals.StringTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAsciiValue\x0a    | characterA characterU |\x0a    characterA := 'A'.\x0a    characterU := 'U'.\x0a    self assert: (characterA asciiValue) equals:65.\x0a    self assert: (characterU asciiValue) equals:85",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "asciiValue"]
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testAtIfAbsentPut",
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
return "hello"._at_ifAbsentPut_((6),(function(){
return "a";

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAtIfAbsentPut",{},$globals.StringTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAtIfAbsentPut\x0a\x09\x22String instances are read-only\x22\x0a\x09self should: [ 'hello' at: 6 ifAbsentPut: [ 'a' ] ] raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["should:raise:", "at:ifAbsentPut:"]
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testAtPut",
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
return "hello"._at_put_((1),"a");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAtPut",{},$globals.StringTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAtPut\x0a\x09\x22String instances are read-only\x22\x0a\x09self should: [ 'hello' at: 1 put: 'a' ] raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["should:raise:", "at:put:"]
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testCapitalized",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
$1="test"._capitalized();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["capitalized"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,"Test");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2="Test"._capitalized();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["capitalized"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,"Test");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_(""._capitalized(),"");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$3="Test"._isCapitalized();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isCapitalized"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($3,true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
self._assert_equals_("test"._isCapitalized(),false);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCapitalized",{},$globals.StringTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCapitalized\x0a\x09self assert: 'test' capitalized equals: 'Test'.\x0a\x09self assert: 'Test' capitalized equals: 'Test'.\x0a\x09self assert: '' capitalized equals: ''.\x0a\x09self assert: 'Test' isCapitalized equals: true.\x0a\x09self assert: 'test' isCapitalized equals: false.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "capitalized", "isCapitalized"]
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testCharCodeAt",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$1="jackie"._charCodeAt_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["charCodeAt:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,(106));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2="jackie"._charCodeAt_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["charCodeAt:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,(97));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$3="jackie"._charCodeAt_((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["charCodeAt:"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($3,(99));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$4="jackie"._charCodeAt_((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["charCodeAt:"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($4,(107));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$5="jackie"._charCodeAt_((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["charCodeAt:"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($5,(105));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
self._assert_equals_("jackie"._charCodeAt_((6)),(101));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCharCodeAt",{},$globals.StringTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCharCodeAt\x0a\x09self assert: ('jackie' charCodeAt:1) equals: 106.\x0a\x09self assert: ('jackie' charCodeAt:2) equals: 97.\x0a\x09self assert: ('jackie' charCodeAt:3) equals: 99.\x0a\x09self assert: ('jackie' charCodeAt:4) equals: 107.\x0a\x09self assert: ('jackie' charCodeAt:5) equals: 105.\x0a\x09self assert: ('jackie' charCodeAt:6) equals: 101",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "charCodeAt:"]
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testCopyFromTo",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1="jackie"._copyFrom_to_((1),(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["copyFrom:to:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,"jac");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_("jackie"._copyFrom_to_((4),(6)),"kie");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCopyFromTo",{},$globals.StringTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCopyFromTo\x0a\x09self assert: ('jackie' copyFrom: 1 to: 3) equals: 'jac'.\x0a\x09self assert: ('jackie' copyFrom: 4 to: 6) equals: 'kie'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "copyFrom:to:"]
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testCopyWithoutAll",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_equals_("*hello* *world*"._copyWithoutAll_("*"),"hello world");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCopyWithoutAll",{},$globals.StringTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCopyWithoutAll\x0a\x09self\x0a\x09\x09assert: ('*hello* *world*' copyWithoutAll: '*')\x0a\x09\x09equals: 'hello world'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "copyWithoutAll:"]
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testEquality",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
self._assert_equals_("hello","hello");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$1="hello".__eq("world");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._deny_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$2="hello".__eq([]._at_ifAbsent_((1),(function(){

})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
self._deny_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=2;
//>>excludeEnd("ctx");
$3="hello"._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
self._assert_equals_("hello",$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_("hello"._yourself(),"hello");
self._deny_("".__eq((0)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testEquality",{},$globals.StringTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testEquality\x0a\x09self assert: 'hello' equals: 'hello'.\x0a\x09self deny: 'hello' = 'world'.\x0a\x09\x0a\x09\x22Test for issue 459\x22\x0a\x09self deny: 'hello' = (#() at: 1 ifAbsent: [ ]).\x0a\x0a\x09self assert: 'hello' equals: 'hello' yourself.\x0a\x09self assert: 'hello' yourself equals: 'hello'.\x0a\x0a\x09\x22test JS falsy value\x22\x0a\x09self deny: '' = 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "deny:", "=", "at:ifAbsent:", "yourself"]
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testIdentity",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5;
$1="hello".__eq_eq("hello");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$2="hello".__eq_eq("world");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=2;
//>>excludeEnd("ctx");
self._deny_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$4="hello"._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$3="hello".__eq_eq($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=3;
//>>excludeEnd("ctx");
self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$5=$recv("hello"._yourself()).__eq_eq("hello");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=4;
//>>excludeEnd("ctx");
self._assert_($5);
self._deny_("".__eq_eq((0)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIdentity",{},$globals.StringTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIdentity\x0a\x09self assert: 'hello' == 'hello'.\x0a\x09self deny: 'hello' == 'world'.\x0a\x0a\x09self assert: 'hello' == 'hello' yourself.\x0a\x09self assert: 'hello' yourself == 'hello'.\x0a\x0a\x09\x22test JS falsy value\x22\x0a\x09self deny: '' == 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "==", "deny:", "yourself"]
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testIdentityHash",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$3;
$1="foo"._identityHash();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["identityHash"]=1;
//>>excludeEnd("ctx");
$2="foo"._identityHash();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["identityHash"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($1,$2);
$4="foo"._identityHash();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["identityHash"]=3;
//>>excludeEnd("ctx");
$3=$recv($4).__eq("bar"._identityHash());
self._deny_($3);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIdentityHash",{},$globals.StringTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIdentityHash\x0a\x09self assert: 'foo' identityHash equals: 'foo' identityHash.\x0a\x09self deny: ('foo' identityHash = 'bar' identityHash)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "identityHash", "deny:", "="]
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testIncludesSubString",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1="amber"._includesSubString_("ber");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["includesSubString:"]=1;
//>>excludeEnd("ctx");
self._assert_($1);
self._deny_("amber"._includesSubString_("zork"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIncludesSubString",{},$globals.StringTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIncludesSubString\x0a\x09self assert: ('amber' includesSubString: 'ber').\x0a\x09self deny: ('amber' includesSubString: 'zork').",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "includesSubString:", "deny:"]
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testIndexOfStartingAtWithNull",
protocol: 'tests',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIndexOfStartingAtWithNull\x0a\x09\x22String cannot hold JS null\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testIndexOfWithNull",
protocol: 'tests',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIndexOfWithNull\x0a\x09\x22String cannot hold JS null\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testIsVowel",
protocol: 'tests',
fn: function (){
var self=this;
var vowel,consonant;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
vowel="u";
consonant="z";
$1=$recv(vowel)._isVowel();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isVowel"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($recv(consonant)._isVowel(),false);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIsVowel",{vowel:vowel,consonant:consonant},$globals.StringTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIsVowel\x0a    |vowel consonant|\x0a    vowel := 'u'.\x0a    consonant := 'z'.\x0a    self assert: vowel isVowel equals: true.\x0a    self assert: consonant isVowel equals: false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "isVowel"]
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testJoin",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_equals_(","._join_(["hello", "world"]),"hello,world");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testJoin",{},$globals.StringTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testJoin\x0a\x09self assert: (',' join: #('hello' 'world')) equals: 'hello,world'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "join:"]
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testRemoveAll",
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
return $recv(self._collection())._removeAll();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRemoveAll",{},$globals.StringTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRemoveAll\x0a\x09self should: [ self collection removeAll ] raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["should:raise:", "removeAll", "collection"]
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testReversed",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_equals_("jackiechan"._reversed(),"nahceikcaj");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testReversed",{},$globals.StringTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testReversed\x0a\x09self assert: 'jackiechan' reversed equals: 'nahceikcaj'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "reversed"]
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testStreamContents",
protocol: 'tests',
fn: function (){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._assert_equals_($recv($String())._streamContents_((function(aStream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_("hello");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._space();
$1=$recv(aStream)._nextPutAll_("world");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aStream:aStream},$ctx1,1)});
//>>excludeEnd("ctx");
})),"hello world");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testStreamContents",{},$globals.StringTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testStreamContents\x0a\x09self\x0a\x09\x09assert: (String streamContents: [ :aStream |\x0a\x09\x09\x09aStream\x0a\x09\x09\x09\x09nextPutAll: 'hello'; space;\x0a\x09\x09\x09\x09nextPutAll: 'world' ])\x0a\x09\x09equals: 'hello world'",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "streamContents:", "nextPutAll:", "space"]
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testSubStrings",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_equals_("jackiechan"._subStrings_("ie"),["jack", "chan"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSubStrings",{},$globals.StringTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSubStrings\x0a\x09self assert: ('jackiechan' subStrings: 'ie') equals: #( 'jack' 'chan' ).",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "subStrings:"]
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testTrim",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_equals_("       jackie"._trimLeft(),"jackie");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_("jackie               "._trimRight(),"jackie");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTrim",{},$globals.StringTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTrim\x0a\x09self assert: '       jackie' trimLeft equals: 'jackie'.\x0a\x09self assert: 'jackie               ' trimRight equals: 'jackie'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "trimLeft", "trimRight"]
}),
$globals.StringTest);

$core.addMethod(
$core.method({
selector: "testValue",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_equals_("asString"._value_((1)),"1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_([(1), (2), (3)]._collect_("asString"),["1", "2", "3"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testValue",{},$globals.StringTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testValue\x0a\x0a\x09self assert: (#asString value: 1) equals: '1'.\x0a\x0a\x09\x22Which (since String and BlockClosure are now polymorphic) enables the nice idiom...\x22\x0a\x09self assert: (#(1 2 3) collect: #asString) equals: #('1' '2' '3')",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "value:", "collect:"]
}),
$globals.StringTest);


$core.addMethod(
$core.method({
selector: "collectionClass",
protocol: 'fixture',
fn: function (){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
return $String();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionClass\x0a\x09^ String",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StringTest.klass);


$core.addClass('SetTest', $globals.CollectionTest, [], 'Kernel-Tests');
$core.addMethod(
$core.method({
selector: "collection",
protocol: 'fixture',
fn: function (){
var self=this;
function $Set(){return $globals.Set||(typeof Set=="undefined"?nil:Set)}
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($Set())._new();
$recv($2)._add_($Smalltalk());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv($2)._add_(nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
$recv($2)._add_((3).__at((3)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=3;
//>>excludeEnd("ctx");
$recv($2)._add_(false);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collection",{},$globals.SetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collection\x0a\x09^ Set new\x0a\x09\x09add: Smalltalk;\x0a\x09\x09add: nil;\x0a\x09\x09add: 3@3;\x0a\x09\x09add: false;\x0a\x09\x09yourself",
referencedClasses: ["Set", "Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["add:", "new", "@", "yourself"]
}),
$globals.SetTest);

$core.addMethod(
$core.method({
selector: "collectionOfPrintStrings",
protocol: 'fixture',
fn: function (){
var self=this;
function $Set(){return $globals.Set||(typeof Set=="undefined"?nil:Set)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($Set())._new();
$recv($2)._add_("a SmalltalkImage");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv($2)._add_("nil");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
$recv($2)._add_("3@3");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=3;
//>>excludeEnd("ctx");
$recv($2)._add_("false");
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionOfPrintStrings",{},$globals.SetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionOfPrintStrings\x0a\x09^ Set new\x0a\x09\x09add: 'a SmalltalkImage';\x0a\x09\x09add: 'nil';\x0a\x09\x09add: '3@3';\x0a\x09\x09add: 'false';\x0a\x09\x09yourself",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
messageSends: ["add:", "new", "yourself"]
}),
$globals.SetTest);

$core.addMethod(
$core.method({
selector: "collectionSize",
protocol: 'fixture',
fn: function (){
var self=this;
return (4);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionSize\x0a\x09^ 4",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SetTest);

$core.addMethod(
$core.method({
selector: "collectionWithDuplicates",
protocol: 'fixture',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._collection();
$recv($2)._add_((0));
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionWithDuplicates",{},$globals.SetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionWithDuplicates\x0a\x09\x22Set has no duplicates\x22\x0a\x09^ self collection add: 0; yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "collection", "yourself"]
}),
$globals.SetTest);

$core.addMethod(
$core.method({
selector: "collectionWithNewValue",
protocol: 'fixture',
fn: function (){
var self=this;
function $Set(){return $globals.Set||(typeof Set=="undefined"?nil:Set)}
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($Set())._new();
$recv($2)._add_($Smalltalk());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv($2)._add_(nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
$recv($2)._add_((3).__at((3)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=3;
//>>excludeEnd("ctx");
$recv($2)._add_("N");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=4;
//>>excludeEnd("ctx");
$recv($2)._add_(false);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionWithNewValue",{},$globals.SetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionWithNewValue\x0a\x09^ Set new\x0a\x09\x09add: Smalltalk;\x0a\x09\x09add: nil;\x0a\x09\x09add: 3@3;\x0a\x09\x09add: 'N';\x0a\x09\x09add: false;\x0a\x09\x09yourself",
referencedClasses: ["Set", "Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["add:", "new", "@", "yourself"]
}),
$globals.SetTest);

$core.addMethod(
$core.method({
selector: "testAddAll",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$4,$5,$1,$6,$8,$9,$10,$11,$7,$12,$14,$15,$13;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SetTest.superclass.fn.prototype._testAddAll.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$2=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$3=$2;
$4=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$recv($3)._addAll_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addAll:"]=1;
//>>excludeEnd("ctx");
$5=$recv($2)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$1=$5;
$6=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($1,$6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$8=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=4;
//>>excludeEnd("ctx");
$9=$8;
$10=self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=1;
//>>excludeEnd("ctx");
$recv($9)._addAll_($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addAll:"]=2;
//>>excludeEnd("ctx");
$11=$recv($8)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=2;
//>>excludeEnd("ctx");
$7=$11;
$12=self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($7,$12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$14=self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=3;
//>>excludeEnd("ctx");
$recv($14)._addAll_(self._collection());
$15=$recv($14)._yourself();
$13=$15;
self._assert_equals_($13,self._collectionWithNewValue());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAddAll",{},$globals.SetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAddAll\x0a\x09super testAddAll.\x0a\x09self assert: (self collection addAll: self collection; yourself) equals: self collection.\x0a\x09self assert: (self collection addAll: self collectionWithNewValue; yourself) equals: self collectionWithNewValue.\x0a\x09self assert: (self collectionWithNewValue addAll: self collection; yourself) equals: self collectionWithNewValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["testAddAll", "assert:equals:", "addAll:", "collection", "yourself", "collectionWithNewValue"]
}),
$globals.SetTest);

$core.addMethod(
$core.method({
selector: "testAddRemove",
protocol: 'tests',
fn: function (){
var self=this;
var set;
function $Set(){return $globals.Set||(typeof Set=="undefined"?nil:Set)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
set=$recv($Set())._new();
self._assert_($recv(set)._isEmpty());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$recv(set)._add_((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$1=$recv(set)._includes_((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["includes:"]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$recv(set)._add_((5));
$2=$recv(set)._includes_((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["includes:"]=2;
//>>excludeEnd("ctx");
self._assert_($2);
$recv(set)._remove_((3));
self._deny_($recv(set)._includes_((3)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAddRemove",{set:set},$globals.SetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAddRemove\x0a\x09| set |\x0a\x09set := Set new.\x0a\x09\x0a\x09self assert: set isEmpty.\x0a\x0a\x09set add: 3.\x0a\x09self assert: (set includes: 3).\x0a\x0a\x09set add: 5.\x0a\x09self assert: (set includes: 5).\x0a\x0a\x09set remove: 3.\x0a\x09self deny: (set includes: 3)",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
messageSends: ["new", "assert:", "isEmpty", "add:", "includes:", "remove:", "deny:"]
}),
$globals.SetTest);

$core.addMethod(
$core.method({
selector: "testAt",
protocol: 'tests',
fn: function (){
var self=this;
function $Set(){return $globals.Set||(typeof Set=="undefined"?nil:Set)}
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($Set())._new())._at_put_((1),(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAt",{},$globals.SetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAt\x0a\x09self should: [ Set new at: 1 put: 2 ] raise: Error",
referencedClasses: ["Set", "Error"],
//>>excludeEnd("ide");
messageSends: ["should:raise:", "at:put:", "new"]
}),
$globals.SetTest);

$core.addMethod(
$core.method({
selector: "testCollect",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SetTest.superclass.fn.prototype._testCollect.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$2=[(5), (6), (8)]._asSet();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asSet"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._collect_((function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(x).__backslash_backslash((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._assert_equals_($1,[(0), (2)]._asSet());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCollect",{},$globals.SetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCollect\x0a\x09super testCollect.\x0a\x09self assert: (#(5 6 8) asSet collect: [ :x | x \x5c\x5c 3 ]) equals: #(0 2) asSet",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["testCollect", "assert:equals:", "collect:", "asSet", "\x5c\x5c"]
}),
$globals.SetTest);

$core.addMethod(
$core.method({
selector: "testComma",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1,$4,$6,$7,$5,$8,$10,$9;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SetTest.superclass.fn.prototype._testComma.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$2=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$3=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$4=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($1,$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$6=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=4;
//>>excludeEnd("ctx");
$7=self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=1;
//>>excludeEnd("ctx");
$5=$recv($6).__comma($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$8=self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($5,$8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$10=self._collectionWithNewValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collectionWithNewValue"]=3;
//>>excludeEnd("ctx");
$9=$recv($10).__comma(self._collection());
self._assert_equals_($9,self._collectionWithNewValue());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testComma",{},$globals.SetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testComma\x0a\x09super testComma.\x0a\x09self assert: self collection, self collection equals: self collection.\x0a\x09self assert: self collection, self collectionWithNewValue equals: self collectionWithNewValue.\x0a\x09self assert: self collectionWithNewValue, self collection equals: self collectionWithNewValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["testComma", "assert:equals:", ",", "collection", "collectionWithNewValue"]
}),
$globals.SetTest);

$core.addMethod(
$core.method({
selector: "testComparing",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$6,$7,$5,$9,$8;
$1=[(0), (2)]._asSet();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asSet"]=1;
//>>excludeEnd("ctx");
$2=[(0), (2)]._asSet();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asSet"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($1,$2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$3=[(2), (0)]._asSet();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asSet"]=3;
//>>excludeEnd("ctx");
$4=[(0), (2)]._asSet();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asSet"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($3,$4);
$6=[(0), (2), (3)]._asSet();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asSet"]=5;
//>>excludeEnd("ctx");
$7=[(0), (2)]._asSet();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asSet"]=6;
//>>excludeEnd("ctx");
$5=$recv($6).__eq($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._deny_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$9=[(1), (2)]._asSet();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asSet"]=7;
//>>excludeEnd("ctx");
$8=$recv($9).__eq([(0), (2)]._asSet());
self._deny_($8);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testComparing",{},$globals.SetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testComparing\x0a\x09self assert: #(0 2) asSet equals: #(0 2) asSet.\x0a\x09self assert: #(2 0) asSet equals: #(0 2) asSet.\x0a\x09self deny: #(0 2 3) asSet = #(0 2) asSet.\x0a\x09self deny: #(1 2) asSet = #(0 2) asSet",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "asSet", "deny:", "="]
}),
$globals.SetTest);

$core.addMethod(
$core.method({
selector: "testPrintString",
protocol: 'tests',
fn: function (){
var self=this;
var set;
function $Set(){return $globals.Set||(typeof Set=="undefined"?nil:Set)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$9;
set=$recv($Set())._new();
$1=$recv(set)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,"a Set ()");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=set;
$recv($2)._add_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$3=$recv($2)._add_((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
$4=$recv(set)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($4,"a Set (1 3)");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$recv(set)._add_("foo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=3;
//>>excludeEnd("ctx");
$5=$recv(set)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($5,"a Set (1 3 'foo')");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$6=set;
$recv($6)._remove_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["remove:"]=1;
//>>excludeEnd("ctx");
$7=$recv($6)._remove_((3));
$8=$recv(set)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($8,"a Set ('foo')");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$recv(set)._add_((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=4;
//>>excludeEnd("ctx");
$9=$recv(set)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($9,"a Set (3 'foo')");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
$recv(set)._add_((3));
self._assert_equals_($recv(set)._printString(),"a Set (3 'foo')");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPrintString",{set:set},$globals.SetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPrintString\x0a\x09| set |\x0a\x09set := Set new.\x0a\x09self assert: set printString equals: 'a Set ()'.\x0a\x09set add: 1; add: 3.\x0a\x09self assert: set printString equals: 'a Set (1 3)'.\x0a\x09set add: 'foo'.\x0a\x09self assert: set printString equals: 'a Set (1 3 ''foo'')'.\x0a\x09set remove: 1; remove: 3.\x0a\x09self assert: set printString equals: 'a Set (''foo'')'.\x0a\x09set add: 3.\x0a\x09self assert: set printString equals: 'a Set (3 ''foo'')'.\x0a\x09set add: 3.\x0a\x09self assert: set printString equals: 'a Set (3 ''foo'')'",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
messageSends: ["new", "assert:equals:", "printString", "add:", "remove:"]
}),
$globals.SetTest);

$core.addMethod(
$core.method({
selector: "testUnboxedObjects",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $4,$3,$2,$1;
$4="foo"._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$3=[$4,"foo"._yourself()];
$2=$recv($3)._asSet();
$1=$recv($2)._asArray();
self._assert_equals_($1,["foo"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testUnboxedObjects",{},$globals.SetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testUnboxedObjects\x0a\x09self assert: {'foo' yourself. 'foo' yourself} asSet asArray equals: #('foo')",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "asArray", "asSet", "yourself"]
}),
$globals.SetTest);

$core.addMethod(
$core.method({
selector: "testUnicity",
protocol: 'tests',
fn: function (){
var self=this;
var set;
function $Set(){return $globals.Set||(typeof Set=="undefined"?nil:Set)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
set=$recv($Set())._new();
$recv(set)._add_((21));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv(set)._add_("hello");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
$recv(set)._add_((21));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=3;
//>>excludeEnd("ctx");
$1=$recv(set)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$recv(set)._add_("hello");
self._assert_equals_($recv(set)._size(),(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($recv(set)._asArray(),[(21), "hello"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testUnicity",{set:set},$globals.SetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testUnicity\x0a\x09| set |\x0a\x09set := Set new.\x0a\x09set add: 21.\x0a\x09set add: 'hello'.\x0a\x0a\x09set add: 21.\x0a\x09self assert: set size equals: 2.\x0a\x09\x0a\x09set add: 'hello'.\x0a\x09self assert: set size equals: 2.\x0a\x0a\x09self assert: set asArray equals: #(21 'hello')",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
messageSends: ["new", "add:", "assert:equals:", "size", "asArray"]
}),
$globals.SetTest);


$core.addMethod(
$core.method({
selector: "collectionClass",
protocol: 'fixture',
fn: function (){
var self=this;
function $Set(){return $globals.Set||(typeof Set=="undefined"?nil:Set)}
return $Set();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionClass\x0a\x09^ Set",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SetTest.klass);


$core.addClass('ConsoleTranscriptTest', $globals.TestCase, [], 'Kernel-Tests');
$core.addMethod(
$core.method({
selector: "testShow",
protocol: 'tests',
fn: function (){
var self=this;
var originalTranscript;
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $ConsoleTranscript(){return $globals.ConsoleTranscript||(typeof ConsoleTranscript=="undefined"?nil:ConsoleTranscript)}
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
originalTranscript=$recv($Transcript())._current();
$recv($Transcript())._register_($recv($ConsoleTranscript())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["register:"]=1;
//>>excludeEnd("ctx");
self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Transcript())._show_("Hello console!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["show:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["shouldnt:raise:"]=1;
//>>excludeEnd("ctx");
self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Transcript())._show_(console);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}),$Error());
$recv($Transcript())._register_(originalTranscript);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testShow",{originalTranscript:originalTranscript},$globals.ConsoleTranscriptTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testShow\x0a| originalTranscript |\x0aoriginalTranscript := Transcript current.\x0aTranscript register: ConsoleTranscript new.\x0a\x0aself shouldnt: [ Transcript show: 'Hello console!' ] raise: Error.\x0aself shouldnt: [ Transcript show: console ] raise: Error.\x0a\x0aTranscript register: originalTranscript.",
referencedClasses: ["Transcript", "ConsoleTranscript", "Error"],
//>>excludeEnd("ide");
messageSends: ["current", "register:", "new", "shouldnt:raise:", "show:"]
}),
$globals.ConsoleTranscriptTest);



$core.addClass('JSObjectProxyTest', $globals.TestCase, [], 'Kernel-Tests');
$core.addMethod(
$core.method({
selector: "jsNull",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return null;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"jsNull",{},$globals.JSObjectProxyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "jsNull\x0a\x09<return null>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "jsObject",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return {a: 1, b: function() {return 2;}, c: function(object) {return object;}, d: '', 'e': null, 'f': void 0};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"jsObject",{},$globals.JSObjectProxyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "jsObject\x0a\x09<return {a: 1, b: function() {return 2;}, c: function(object) {return object;}, d: '', 'e': null, 'f': void 0}>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "jsUndefined",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"jsUndefined",{},$globals.JSObjectProxyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "jsUndefined\x0a\x09<return>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testAtIfAbsent",
protocol: 'tests',
fn: function (){
var self=this;
var testObject;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
testObject=self._jsObject();
$1=$recv(testObject)._at_ifAbsent_("abc",(function(){
return "Property does not exist";

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifAbsent:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,"Property does not exist");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=$recv(testObject)._at_ifAbsent_("e",(function(){
return "Property does not exist";

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifAbsent:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$3=$recv(testObject)._at_ifAbsent_("a",(function(){
return "Property does not exist";

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifAbsent:"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($3,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($recv(testObject)._at_ifAbsent_("f",(function(){
return "Property does not exist";

})),nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAtIfAbsent",{testObject:testObject},$globals.JSObjectProxyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAtIfAbsent\x0a\x09| testObject |\x0a\x09testObject := self jsObject.\x0a\x09self assert: (testObject at: 'abc' ifAbsent: [ 'Property does not exist' ]) equals: 'Property does not exist'.\x0a\x09self assert: (testObject at: 'e' ifAbsent: [ 'Property does not exist' ]) equals: nil.\x0a\x09self assert: (testObject at: 'a' ifAbsent: [ 'Property does not exist' ]) equals: 1.\x0a\x09self assert: (testObject at: 'f' ifAbsent: [ 'Property does not exist' ]) equals: nil.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["jsObject", "assert:equals:", "at:ifAbsent:"]
}),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testAtIfPresent",
protocol: 'tests',
fn: function (){
var self=this;
var testObject;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5;
testObject=self._jsObject();
$1=$recv(testObject)._at_ifPresent_("abc",(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(x)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
return "hello ".__comma($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifPresent:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$3=$recv(testObject)._at_ifPresent_("e",(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(x)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=2;
//>>excludeEnd("ctx");
return "hello ".__comma($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifPresent:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($3,"hello nil");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$5=$recv(testObject)._at_ifPresent_("a",(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=$recv(x)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=3;
//>>excludeEnd("ctx");
return "hello ".__comma($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifPresent:"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($5,"hello 1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($recv(testObject)._at_ifPresent_("f",(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return "hello ".__comma($recv(x)._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,4)});
//>>excludeEnd("ctx");
})),"hello nil");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAtIfPresent",{testObject:testObject},$globals.JSObjectProxyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAtIfPresent\x0a\x09| testObject |\x0a\x09\x0a\x09testObject := self jsObject.\x0a\x09\x0a\x09self assert: (testObject at: 'abc' ifPresent: [ :x | 'hello ',x asString ]) equals: nil.\x0a\x09self assert: (testObject at: 'e' ifPresent: [ :x | 'hello ',x asString ]) equals: 'hello nil'.\x0a\x09self assert: (testObject at: 'a' ifPresent: [ :x | 'hello ',x asString ]) equals: 'hello 1'.\x0a\x09self assert: (testObject at: 'f' ifPresent: [ :x | 'hello ',x asString ]) equals: 'hello nil'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["jsObject", "assert:equals:", "at:ifPresent:", ",", "asString"]
}),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testAtIfPresentIfAbsent",
protocol: 'tests',
fn: function (){
var self=this;
var testObject;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5;
testObject=self._jsObject();
$1=$recv(testObject)._at_ifPresent_ifAbsent_("abc",(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(x)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
return "hello ".__comma($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
return "not present";

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifPresent:ifAbsent:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,"not present");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$3=$recv(testObject)._at_ifPresent_ifAbsent_("e",(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(x)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=2;
//>>excludeEnd("ctx");
return "hello ".__comma($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,3)});
//>>excludeEnd("ctx");
}),(function(){
return "not present";

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifPresent:ifAbsent:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($3,"hello nil");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$5=$recv(testObject)._at_ifPresent_ifAbsent_("a",(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=$recv(x)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=3;
//>>excludeEnd("ctx");
return "hello ".__comma($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,5)});
//>>excludeEnd("ctx");
}),(function(){
return "not present";

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifPresent:ifAbsent:"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($5,"hello 1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($recv(testObject)._at_ifPresent_ifAbsent_("f",(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return "hello ".__comma($recv(x)._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,7)});
//>>excludeEnd("ctx");
}),(function(){
return "not present";

})),"hello nil");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAtIfPresentIfAbsent",{testObject:testObject},$globals.JSObjectProxyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAtIfPresentIfAbsent\x0a\x09| testObject |\x0a\x09testObject := self jsObject.\x0a\x09self assert: (testObject at: 'abc' ifPresent: [ :x|'hello ',x asString ] ifAbsent: [ 'not present' ]) equals: 'not present'.\x0a\x09self assert: (testObject at: 'e' ifPresent: [ :x|'hello ',x asString ] ifAbsent: [ 'not present' ]) equals: 'hello nil'.\x0a\x09self assert: (testObject at: 'a' ifPresent: [ :x|'hello ',x asString ] ifAbsent: [ 'not present' ]) equals: 'hello 1'.\x0a\x09self assert: (testObject at: 'f' ifPresent: [ :x|'hello ',x asString ] ifAbsent: [ 'not present' ]) equals: 'hello nil'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["jsObject", "assert:equals:", "at:ifPresent:ifAbsent:", ",", "asString"]
}),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testAtPut",
protocol: 'tests',
fn: function (){
var self=this;
var testObject;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
testObject=self._jsObject();
$2=$recv(testObject)._at_("abc");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__tild_eq("xyz");
self._assert_($1);
self._assert_equals_($recv(testObject)._at_put_("abc","xyz"),"xyz");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($recv(testObject)._at_("abc"),"xyz");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAtPut",{testObject:testObject},$globals.JSObjectProxyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAtPut\x0a\x09| testObject |\x0a\x09testObject := self jsObject.\x0a\x09\x0a\x09self assert: (testObject at: 'abc') ~= 'xyz'.\x0a\x09self assert: (testObject at: 'abc' put: 'xyz') equals: 'xyz'.\x0a\x09self assert: (testObject at: 'abc') equals: 'xyz'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["jsObject", "assert:", "~=", "at:", "assert:equals:", "at:put:"]
}),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testComparison",
protocol: 'tests',
fn: function (){
var self=this;
function $Object(){return $globals.Object||(typeof Object=="undefined"?nil:Object)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
self._assert_equals_($recv([console,(2)])._indexOf_(console),(1));
$1=$recv(console).__eq(console);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
$2=$recv(console).__eq($recv($Object())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
self._deny_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
self._deny_($recv(console).__eq(self._jsObject()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testComparison",{},$globals.JSObjectProxyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testComparison\x0a\x09self assert: ({ console. 2 } indexOf: console) equals: 1.\x0a\x09self assert: console = console.\x0a\x09self deny: console = Object new.\x0a\x09self deny: console = self jsObject",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "indexOf:", "assert:", "=", "deny:", "new", "jsObject"]
}),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testDNU",
protocol: 'tests',
fn: function (){
var self=this;
function $MessageNotUnderstood(){return $globals.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._jsObject())._foo();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDNU",{},$globals.JSObjectProxyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDNU\x0a\x09self should: [ self jsObject foo ] raise: MessageNotUnderstood",
referencedClasses: ["MessageNotUnderstood"],
//>>excludeEnd("ide");
messageSends: ["should:raise:", "foo", "jsObject"]
}),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testDNURegression1057",
protocol: 'tests',
fn: function (){
var self=this;
var jsObject;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
jsObject=[];
$recv(jsObject)._basicAt_put_("allowJavaScriptCalls",true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["basicAt:put:"]=1;
//>>excludeEnd("ctx");
$recv(jsObject)._basicAt_put_("foo",(3));
self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(jsObject)._foo();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["foo"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["shouldnt:raise:"]=1;
//>>excludeEnd("ctx");
$1=$recv(jsObject)._foo();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["foo"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($1,(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(jsObject)._foo_((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}),$Error());
self._assert_equals_($recv(jsObject)._foo(),(4));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDNURegression1057",{jsObject:jsObject},$globals.JSObjectProxyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDNURegression1057\x0a\x09| jsObject |\x0a\x09jsObject := #().\x0a\x09jsObject basicAt: 'allowJavaScriptCalls' put: true.\x0a\x09jsObject basicAt: 'foo' put: 3.\x0a\x09self shouldnt: [ jsObject foo ] raise: Error.\x0a\x09self assert: jsObject foo equals: 3.\x0a\x09self shouldnt: [ jsObject foo: 4 ] raise: Error.\x0a\x09self assert: jsObject foo equals: 4",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["basicAt:put:", "shouldnt:raise:", "foo", "assert:equals:", "foo:"]
}),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testDNURegression1059",
protocol: 'tests',
fn: function (){
var self=this;
var jsObject;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
jsObject=[];
$recv(jsObject)._basicAt_put_("allowJavaScriptCalls",true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["basicAt:put:"]=1;
//>>excludeEnd("ctx");
$recv(jsObject)._basicAt_put_("x",(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["basicAt:put:"]=2;
//>>excludeEnd("ctx");
$recv(jsObject)._basicAt_put_("x:",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._error();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(jsObject)._x_((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}),$Error());
self._assert_equals_($recv(jsObject)._x(),(4));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDNURegression1059",{jsObject:jsObject},$globals.JSObjectProxyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDNURegression1059\x0a\x09| jsObject |\x0a\x09jsObject := #().\x0a\x09jsObject basicAt: 'allowJavaScriptCalls' put: true.\x0a\x09jsObject basicAt: 'x' put: 3.\x0a\x09jsObject basicAt: 'x:' put: [ self error ].\x0a\x09self shouldnt: [ jsObject x: 4 ] raise: Error.\x0a\x09self assert: jsObject x equals: 4",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["basicAt:put:", "error", "shouldnt:raise:", "x:", "assert:equals:", "x"]
}),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testDNURegression1062",
protocol: 'tests',
fn: function (){
var self=this;
var jsObject,stored;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
jsObject=[];
$recv(jsObject)._basicAt_put_("allowJavaScriptCalls",true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["basicAt:put:"]=1;
//>>excludeEnd("ctx");
$recv(jsObject)._basicAt_put_("x",(function(v){
stored=v;
return stored;

}));
self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(jsObject)._x_((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}),$Error());
self._assert_equals_(stored,(4));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDNURegression1062",{jsObject:jsObject,stored:stored},$globals.JSObjectProxyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDNURegression1062\x0a\x09| jsObject stored |\x0a\x09jsObject := #().\x0a\x09jsObject basicAt: 'allowJavaScriptCalls' put: true.\x0a\x09jsObject basicAt: 'x' put: [ :v | stored := v ].\x0a\x09self shouldnt: [ jsObject x: 4 ] raise: Error.\x0a\x09self assert: stored equals: 4",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["basicAt:put:", "shouldnt:raise:", "x:", "assert:equals:"]
}),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testMessageSend",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$3;
$2=self._jsObject();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["jsObject"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._a();
self._assert_equals_($1,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$4=self._jsObject();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["jsObject"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._b();
self._assert_equals_($3,(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($recv(self._jsObject())._c_((3)),(3));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMessageSend",{},$globals.JSObjectProxyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMessageSend\x0a\x0a\x09self assert: self jsObject a equals: 1.\x0a\x09self assert: self jsObject b equals: 2.\x0a\x09self assert: (self jsObject c: 3) equals: 3",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "a", "jsObject", "b", "c:"]
}),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testMethodWithArguments",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_equals_($recv(self._jsObject())._c_((1)),(1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMethodWithArguments",{},$globals.JSObjectProxyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMethodWithArguments\x0a\x09self assert: (self jsObject c: 1) equals: 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "c:", "jsObject"]
}),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testPrinting",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_equals_($recv(self._jsObject())._printString(),"[object Object]");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPrinting",{},$globals.JSObjectProxyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPrinting\x0a\x09self assert: self jsObject printString equals: '[object Object]'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "printString", "jsObject"]
}),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testPropertyThatReturnsEmptyString",
protocol: 'tests',
fn: function (){
var self=this;
var object;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
object=self._jsObject();
$1=$recv(object)._d();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["d"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,"");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$recv(object)._d_("hello");
self._assert_equals_($recv(object)._d(),"hello");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPropertyThatReturnsEmptyString",{object:object},$globals.JSObjectProxyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPropertyThatReturnsEmptyString\x0a\x09| object |\x0a\x0a\x09object := self jsObject.\x0a\x09self assert: object d equals: ''.\x0a\x0a\x09object d: 'hello'.\x0a\x09self assert: object d equals: 'hello'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["jsObject", "assert:equals:", "d", "d:"]
}),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testPropertyThatReturnsUndefined",
protocol: 'tests',
fn: function (){
var self=this;
var object;
function $MessageNotUnderstood(){return $globals.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
object=self._jsObject();
self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(object)._e();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["e"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
self._assert_($recv($recv(object)._e())._isNil());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPropertyThatReturnsUndefined",{object:object},$globals.JSObjectProxyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPropertyThatReturnsUndefined\x0a\x09| object |\x0a\x0a\x09object := self jsObject.\x0a\x09self shouldnt: [ object e ] raise: MessageNotUnderstood.\x0a\x09self assert: object e isNil",
referencedClasses: ["MessageNotUnderstood"],
//>>excludeEnd("ide");
messageSends: ["jsObject", "shouldnt:raise:", "e", "assert:", "isNil"]
}),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testSetPropertyWithFalsyValue",
protocol: 'tests',
fn: function (){
var self=this;
var jsObject;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
jsObject=self._jsObject();
$1=$recv(jsObject)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["a"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$recv(jsObject)._a_(self._jsNull());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["a:"]=1;
//>>excludeEnd("ctx");
$2=$recv(jsObject)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["a"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$recv(jsObject)._a_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["a:"]=2;
//>>excludeEnd("ctx");
$3=$recv(jsObject)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["a"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($3,(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$recv(jsObject)._a_(self._jsUndefined());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["a:"]=3;
//>>excludeEnd("ctx");
$4=$recv(jsObject)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["a"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($4,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$recv(jsObject)._a_("");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["a:"]=4;
//>>excludeEnd("ctx");
$5=$recv(jsObject)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["a"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($5,"");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
$recv(jsObject)._a_(false);
self._assert_equals_($recv(jsObject)._a(),false);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSetPropertyWithFalsyValue",{jsObject:jsObject},$globals.JSObjectProxyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSetPropertyWithFalsyValue\x0a\x09| jsObject |\x0a\x09jsObject := self jsObject.\x0a\x09self assert: (jsObject a) equals: 1.\x0a\x0a\x09jsObject a: self jsNull.\x0a\x09self assert: (jsObject a) equals: nil.\x0a\x09jsObject a: 0.\x0a\x09self assert: (jsObject a) equals: 0.\x0a\x09jsObject a: self jsUndefined.\x0a\x09self assert: (jsObject a) equals: nil.\x0a\x09jsObject a: ''.\x0a\x09self assert: (jsObject a) equals: ''.\x0a\x09jsObject a: false.\x0a\x09self assert: (jsObject a) equals: false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["jsObject", "assert:equals:", "a", "a:", "jsNull", "jsUndefined"]
}),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testValue",
protocol: 'tests',
fn: function (){
var self=this;
var testObject;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
testObject=self._jsObject();
$recv(testObject)._at_put_("value","aValue");
self._assert_equals_($recv(testObject)._value(),"aValue");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testValue",{testObject:testObject},$globals.JSObjectProxyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testValue\x0a\x09| testObject |\x0a\x09testObject := self jsObject.\x0a\x09testObject at: 'value' put: 'aValue'.\x0a\x09self assert: testObject value equals: 'aValue'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["jsObject", "at:put:", "assert:equals:", "value"]
}),
$globals.JSObjectProxyTest);

$core.addMethod(
$core.method({
selector: "testYourself",
protocol: 'tests',
fn: function (){
var self=this;
var object;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._jsObject();
$recv($1)._d_("test");
$2=$recv($1)._yourself();
object=$2;
self._assert_equals_($recv(object)._d(),"test");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testYourself",{object:object},$globals.JSObjectProxyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testYourself\x0a\x09| object |\x0a\x09object := self jsObject\x0a\x09\x09d: 'test';\x0a\x09\x09yourself.\x0a\x0a\x09self assert: object d equals: 'test'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["d:", "jsObject", "yourself", "assert:equals:", "d"]
}),
$globals.JSObjectProxyTest);



$core.addClass('JavaScriptExceptionTest', $globals.TestCase, [], 'Kernel-Tests');
$core.addMethod(
$core.method({
selector: "testCatchingException",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._throwException();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(error){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._assert_($recv($recv(error)._exception()).__eq("test"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCatchingException",{},$globals.JavaScriptExceptionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCatchingException\x0a\x09[ self throwException ]\x0a\x09\x09on: Error\x0a\x09\x09do: [ :error |\x0a\x09\x09\x09self assert: error exception = 'test' ]",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "throwException", "assert:", "=", "exception"]
}),
$globals.JavaScriptExceptionTest);

$core.addMethod(
$core.method({
selector: "testRaisingException",
protocol: 'tests',
fn: function (){
var self=this;
function $JavaScriptException(){return $globals.JavaScriptException||(typeof JavaScriptException=="undefined"?nil:JavaScriptException)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._throwException();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$JavaScriptException());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRaisingException",{},$globals.JavaScriptExceptionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRaisingException\x0a\x09self should: [ self throwException ] raise: JavaScriptException",
referencedClasses: ["JavaScriptException"],
//>>excludeEnd("ide");
messageSends: ["should:raise:", "throwException"]
}),
$globals.JavaScriptExceptionTest);

$core.addMethod(
$core.method({
selector: "throwException",
protocol: 'helpers',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
throw 'test';
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"throwException",{},$globals.JavaScriptExceptionTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "throwException\x0a\x09<throw 'test'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JavaScriptExceptionTest);



$core.addClass('MessageSendTest', $globals.TestCase, [], 'Kernel-Tests');
$core.addMethod(
$core.method({
selector: "testValue",
protocol: 'tests',
fn: function (){
var self=this;
var messageSend;
function $MessageSend(){return $globals.MessageSend||(typeof MessageSend=="undefined"?nil:MessageSend)}
function $Object(){return $globals.Object||(typeof Object=="undefined"?nil:Object)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($MessageSend())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($1)._receiver_($recv($Object())._new());
$recv($1)._selector_("asString");
$2=$recv($1)._yourself();
messageSend=$2;
self._assert_equals_($recv(messageSend)._value(),"an Object");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testValue",{messageSend:messageSend},$globals.MessageSendTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testValue\x0a\x09| messageSend |\x0a\x09\x0a\x09messageSend := MessageSend new\x0a\x09\x09receiver: Object new;\x0a\x09\x09selector: #asString;\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09self assert: messageSend value equals: 'an Object'",
referencedClasses: ["MessageSend", "Object"],
//>>excludeEnd("ide");
messageSends: ["receiver:", "new", "selector:", "yourself", "assert:equals:", "value"]
}),
$globals.MessageSendTest);

$core.addMethod(
$core.method({
selector: "testValueWithArguments",
protocol: 'tests',
fn: function (){
var self=this;
var messageSend;
function $MessageSend(){return $globals.MessageSend||(typeof MessageSend=="undefined"?nil:MessageSend)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($MessageSend())._new();
$recv($1)._receiver_((2));
$recv($1)._selector_("+");
$2=$recv($1)._yourself();
messageSend=$2;
self._assert_equals_($recv(messageSend)._value_((3)),(5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($recv(messageSend)._valueWithPossibleArguments_([(4)]),(6));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testValueWithArguments",{messageSend:messageSend},$globals.MessageSendTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testValueWithArguments\x0a\x09| messageSend |\x0a\x09\x0a\x09messageSend := MessageSend new\x0a\x09\x09receiver: 2;\x0a\x09\x09selector: '+';\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09self assert: (messageSend value: 3) equals: 5.\x0a\x09\x0a\x09self assert: (messageSend valueWithPossibleArguments: #(4)) equals: 6",
referencedClasses: ["MessageSend"],
//>>excludeEnd("ide");
messageSends: ["receiver:", "new", "selector:", "yourself", "assert:equals:", "value:", "valueWithPossibleArguments:"]
}),
$globals.MessageSendTest);



$core.addClass('MethodInheritanceTest', $globals.TestCase, ['receiverTop', 'receiverMiddle', 'receiverBottom', 'method', 'performBlock'], 'Kernel-Tests');
$core.addMethod(
$core.method({
selector: "codeGeneratorClass",
protocol: 'accessing',
fn: function (){
var self=this;
function $CodeGenerator(){return $globals.CodeGenerator||(typeof CodeGenerator=="undefined"?nil:CodeGenerator)}
return $CodeGenerator();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "codeGeneratorClass\x0a\x09^ CodeGenerator",
referencedClasses: ["CodeGenerator"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "compiler",
protocol: 'factory',
fn: function (){
var self=this;
function $Compiler(){return $globals.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($Compiler())._new();
$recv($2)._codeGeneratorClass_(self._codeGeneratorClass());
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compiler",{},$globals.MethodInheritanceTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "compiler\x0a\x09^ Compiler new\x0a\x09\x09codeGeneratorClass: self codeGeneratorClass;\x0a\x09\x09yourself",
referencedClasses: ["Compiler"],
//>>excludeEnd("ide");
messageSends: ["codeGeneratorClass:", "new", "codeGeneratorClass", "yourself"]
}),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "deinstallBottom",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._targetClassBottom())._removeCompiledMethod_(self["@method"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deinstallBottom",{},$globals.MethodInheritanceTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deinstallBottom\x0a\x09self targetClassBottom removeCompiledMethod: method",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeCompiledMethod:", "targetClassBottom"]
}),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "deinstallMiddle",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._targetClassMiddle())._removeCompiledMethod_(self["@method"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deinstallMiddle",{},$globals.MethodInheritanceTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deinstallMiddle\x0a\x09self targetClassMiddle removeCompiledMethod: method",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeCompiledMethod:", "targetClassMiddle"]
}),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "deinstallTop",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._targetClassTop())._removeCompiledMethod_(self["@method"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deinstallTop",{},$globals.MethodInheritanceTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deinstallTop\x0a\x09self targetClassTop removeCompiledMethod: method",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeCompiledMethod:", "targetClassTop"]
}),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "installBottom:",
protocol: 'testing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@method"]=$recv(self._compiler())._install_forClass_protocol_(aString,self._targetClassBottom(),"tests");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"installBottom:",{aString:aString},$globals.MethodInheritanceTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "installBottom: aString\x0a\x09method := self compiler install: aString forClass: self targetClassBottom protocol: 'tests'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["install:forClass:protocol:", "compiler", "targetClassBottom"]
}),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "installMiddle:",
protocol: 'testing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@method"]=$recv(self._compiler())._install_forClass_protocol_(aString,self._targetClassMiddle(),"tests");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"installMiddle:",{aString:aString},$globals.MethodInheritanceTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "installMiddle: aString\x0a\x09method := self compiler install: aString forClass: self targetClassMiddle protocol: 'tests'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["install:forClass:protocol:", "compiler", "targetClassMiddle"]
}),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "installTop:",
protocol: 'testing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@method"]=$recv(self._compiler())._install_forClass_protocol_(aString,self._targetClassTop(),"tests");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"installTop:",{aString:aString},$globals.MethodInheritanceTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "installTop: aString\x0a\x09method := self compiler install: aString forClass: self targetClassTop protocol: 'tests'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["install:forClass:protocol:", "compiler", "targetClassTop"]
}),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "setUp",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@receiverTop"]=$recv(self._targetClassTop())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self["@receiverMiddle"]=$recv(self._targetClassMiddle())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
self["@receiverBottom"]=$recv(self._targetClassBottom())._new();
self["@method"]=nil;
self["@performBlock"]=(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._error_("performBlock not initialized");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{},$globals.MethodInheritanceTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09receiverTop := self targetClassTop new.\x0a\x09receiverMiddle := self targetClassMiddle new.\x0a\x09receiverBottom := self targetClassBottom new.\x0a\x09method := nil.\x0a\x09performBlock := [ self error: 'performBlock not initialized' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "targetClassTop", "targetClassMiddle", "targetClassBottom", "error:"]
}),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "shouldMNU",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._shouldMNUTop();
self._shouldMNUMiddle();
self._shouldMNUBottom();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldMNU",{},$globals.MethodInheritanceTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shouldMNU\x0a\x09self shouldMNUTop.\x0a\x09self shouldMNUMiddle.\x0a\x09self shouldMNUBottom",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldMNUTop", "shouldMNUMiddle", "shouldMNUBottom"]
}),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "shouldMNUBottom",
protocol: 'testing',
fn: function (){
var self=this;
function $MessageNotUnderstood(){return $globals.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@performBlock"])._value_(self["@receiverBottom"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldMNUBottom",{},$globals.MethodInheritanceTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shouldMNUBottom\x0a\x09self should: [ performBlock value: receiverBottom ] raise: MessageNotUnderstood",
referencedClasses: ["MessageNotUnderstood"],
//>>excludeEnd("ide");
messageSends: ["should:raise:", "value:"]
}),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "shouldMNUMiddle",
protocol: 'testing',
fn: function (){
var self=this;
function $MessageNotUnderstood(){return $globals.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@performBlock"])._value_(self["@receiverMiddle"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldMNUMiddle",{},$globals.MethodInheritanceTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shouldMNUMiddle\x0a\x09self should: [ performBlock value: receiverMiddle ] raise: MessageNotUnderstood",
referencedClasses: ["MessageNotUnderstood"],
//>>excludeEnd("ide");
messageSends: ["should:raise:", "value:"]
}),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "shouldMNUTop",
protocol: 'testing',
fn: function (){
var self=this;
function $MessageNotUnderstood(){return $globals.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@performBlock"])._value_(self["@receiverTop"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldMNUTop",{},$globals.MethodInheritanceTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shouldMNUTop\x0a\x09self should: [ performBlock value: receiverTop ] raise: MessageNotUnderstood",
referencedClasses: ["MessageNotUnderstood"],
//>>excludeEnd("ide");
messageSends: ["should:raise:", "value:"]
}),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "shouldReturn:",
protocol: 'testing',
fn: function (anObject){
var self=this;
var result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
result=$recv(self["@performBlock"])._value_(self["@receiverTop"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_(["top",anObject],["top",result]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
result=$recv(self["@performBlock"])._value_(self["@receiverMiddle"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_(["middle",anObject],["middle",result]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
result=$recv(self["@performBlock"])._value_(self["@receiverBottom"]);
self._assert_equals_(["bottom",anObject],["bottom",result]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldReturn:",{anObject:anObject,result:result},$globals.MethodInheritanceTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "shouldReturn: anObject\x0a\x09| result |\x0a\x0a\x09result := performBlock value: receiverTop.\x0a\x09self assert: { 'top'. anObject } equals: { 'top'. result }.\x0a\x09result := performBlock value: receiverMiddle.\x0a\x09self assert: { 'middle'. anObject } equals: { 'middle'. result }.\x0a\x09result := performBlock value: receiverBottom.\x0a\x09self assert: { 'bottom'. anObject } equals: { 'bottom'. result }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "assert:equals:"]
}),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "shouldReturn:and:and:",
protocol: 'testing',
fn: function (anObject,anObject2,anObject3){
var self=this;
var result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
result=$recv(self["@performBlock"])._value_(self["@receiverTop"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_(["top",anObject],["top",result]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
result=$recv(self["@performBlock"])._value_(self["@receiverMiddle"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_(["middle",anObject2],["middle",result]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
result=$recv(self["@performBlock"])._value_(self["@receiverBottom"]);
self._assert_equals_(["bottom",anObject3],["bottom",result]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldReturn:and:and:",{anObject:anObject,anObject2:anObject2,anObject3:anObject3,result:result},$globals.MethodInheritanceTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "anObject2", "anObject3"],
source: "shouldReturn: anObject and: anObject2 and: anObject3\x0a\x09| result |\x0a\x0a\x09result := performBlock value: receiverTop.\x0a\x09self assert: { 'top'. anObject } equals: { 'top'. result }.\x0a\x09result := performBlock value: receiverMiddle.\x0a\x09self assert: { 'middle'. anObject2 } equals: { 'middle'. result }.\x0a\x09result := performBlock value: receiverBottom.\x0a\x09self assert: { 'bottom'. anObject3 } equals: { 'bottom'. result }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "assert:equals:"]
}),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "targetClassBottom",
protocol: 'accessing',
fn: function (){
var self=this;
function $JavaScriptException(){return $globals.JavaScriptException||(typeof JavaScriptException=="undefined"?nil:JavaScriptException)}
return $JavaScriptException();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "targetClassBottom\x0a\x09^ JavaScriptException",
referencedClasses: ["JavaScriptException"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "targetClassMiddle",
protocol: 'accessing',
fn: function (){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
return $Error();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "targetClassMiddle\x0a\x09^ Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "targetClassTop",
protocol: 'accessing',
fn: function (){
var self=this;
function $Object(){return $globals.Object||(typeof Object=="undefined"?nil:Object)}
return $Object();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "targetClassTop\x0a\x09^ Object",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "tearDown",
protocol: 'initialization',
fn: function (){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._deinstallTop();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=1;
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._deinstallMiddle();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=2;
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._deinstallBottom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tearDown",{},$globals.MethodInheritanceTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tearDown\x0a\x09[ self deinstallTop ] on: Error do: [ ].\x0a\x09[ self deinstallMiddle ] on: Error do: [ ].\x0a\x09[ self deinstallBottom ] on: Error do: [ ]",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "deinstallTop", "deinstallMiddle", "deinstallBottom"]
}),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "testMNU11",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@performBlock"]=(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(x)._foo();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)});
//>>excludeEnd("ctx");
});
self._shouldMNU();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["shouldMNU"]=1;
//>>excludeEnd("ctx");
self._installTop_("foo ^ false");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["installTop:"]=1;
//>>excludeEnd("ctx");
self._installTop_("foo ^ true");
self._deinstallTop();
self._shouldMNU();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMNU11",{},$globals.MethodInheritanceTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMNU11\x0a\x09performBlock := [ :x | x foo ].\x0a\x09self shouldMNU.\x0a\x09self installTop: 'foo ^ false'.\x0a\x09self installTop: 'foo ^ true'.\x0a\x09self deinstallTop.\x0a\x09self shouldMNU",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["foo", "shouldMNU", "installTop:", "deinstallTop"]
}),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "testMNU22",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@performBlock"]=(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(x)._foo();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)});
//>>excludeEnd("ctx");
});
self._shouldMNU();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["shouldMNU"]=1;
//>>excludeEnd("ctx");
self._installMiddle_("foo ^ false");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["installMiddle:"]=1;
//>>excludeEnd("ctx");
self._installMiddle_("foo ^ true");
self._deinstallMiddle();
self._shouldMNU();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMNU22",{},$globals.MethodInheritanceTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMNU22\x0a\x09performBlock := [ :x | x foo ].\x0a\x09self shouldMNU.\x0a\x09self installMiddle: 'foo ^ false'.\x0a\x09self installMiddle: 'foo ^ true'.\x0a\x09self deinstallMiddle.\x0a\x09self shouldMNU",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["foo", "shouldMNU", "installMiddle:", "deinstallMiddle"]
}),
$globals.MethodInheritanceTest);

$core.addMethod(
$core.method({
selector: "testReturns1",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@performBlock"]=(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(x)._foo();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)});
//>>excludeEnd("ctx");
});
self._installTop_("foo ^ false");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["installTop:"]=1;
//>>excludeEnd("ctx");
self._shouldReturn_(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["shouldReturn:"]=1;
//>>excludeEnd("ctx");
self._installTop_("foo ^ true");
self._shouldReturn_(true);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testReturns1",{},$globals.MethodInheritanceTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testReturns1\x0a\x09performBlock := [ :x | x foo ].\x0a\x09self installTop: 'foo ^ false'.\x0a\x09self shouldReturn: false.\x0a\x09self installTop: 'foo ^ true'.\x0a\x09self shouldReturn: true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["foo", "installTop:", "shouldReturn:"]
}),
$globals.MethodInheritanceTest);



$core.addClass('NumberTest', $globals.TestCase, [], 'Kernel-Tests');
$core.addMethod(
$core.method({
selector: "testAbs",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=(4)._abs();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["abs"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,(4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_((-4)._abs(),(4));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAbs",{},$globals.NumberTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAbs\x0a\x09self assert: 4 abs equals: 4.\x0a\x09self assert: -4 abs equals: 4",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "abs"]
}),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testArithmetic",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4;
$1=(1.5).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,(2.5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=(2).__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($2,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_((-2).__minus((1)),(-3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
self._assert_equals_((12).__slash((2)),(6));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$3=(3).__star((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($3,(12));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
self._assert_equals_((7).__slash_slash((2)),(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=6;
//>>excludeEnd("ctx");
self._assert_equals_((7).__backslash_backslash((2)),(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=7;
//>>excludeEnd("ctx");
$5=(1).__plus((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=2;
//>>excludeEnd("ctx");
$4=$recv($5).__star((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($4,(9));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=8;
//>>excludeEnd("ctx");
self._assert_equals_((1).__plus((2).__star((3))),(7));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testArithmetic",{},$globals.NumberTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testArithmetic\x0a\x09\x0a\x09\x22We rely on JS here, so we won't test complex behavior, just check if\x0a\x09message sends are corrects\x22\x0a\x0a\x09self assert: 1.5 + 1 equals: 2.5.\x0a\x09self assert: 2 - 1 equals: 1.\x0a\x09self assert: -2 - 1 equals: -3.\x0a\x09self assert: 12 / 2 equals: 6.\x0a\x09self assert: 3 * 4 equals: 12.\x0a\x09self assert: 7 // 2 equals: 3.\x0a\x09self assert: 7 \x5c\x5c 2 equals: 1.\x0a\x0a\x09\x22Simple parenthesis and execution order\x22\x0a\x09self assert: 1 + 2 * 3 equals: 9.\x0a\x09self assert: 1 + (2 * 3) equals: 7",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "+", "-", "/", "*", "//", "\x5c\x5c"]
}),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testAsNumber",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_equals_((3)._asNumber(),(3));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAsNumber",{},$globals.NumberTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAsNumber\x0a\x09self assert: 3 asNumber equals: 3.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "asNumber"]
}),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testCeiling",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=(1.2)._ceiling();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ceiling"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=(-1.2)._ceiling();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ceiling"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,(-1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_((1)._ceiling(),(1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCeiling",{},$globals.NumberTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCeiling\x0a\x09self assert: 1.2 ceiling equals: 2.\x0a\x09self assert: -1.2 ceiling equals: -1.\x0a\x09self assert: 1.0 ceiling equals: 1.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "ceiling"]
}),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testComparison",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=(3).__gt((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$2=(2).__lt((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<"]=1;
//>>excludeEnd("ctx");
self._assert_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
self._deny_((3).__lt((2)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
self._deny_((2).__gt((3)));
$3=(3).__gt_eq((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">="]=1;
//>>excludeEnd("ctx");
self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
self._assert_((3.1).__gt_eq((3)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
$4=(3).__lt_eq((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<="]=1;
//>>excludeEnd("ctx");
self._assert_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=5;
//>>excludeEnd("ctx");
self._assert_((3).__lt_eq((3.1)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testComparison",{},$globals.NumberTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testComparison\x0a\x0a\x09self assert: 3 > 2.\x0a\x09self assert: 2 < 3.\x0a\x09\x0a\x09self deny: 3 < 2.\x0a\x09self deny: 2 > 3.\x0a\x0a\x09self assert: 3 >= 3.\x0a\x09self assert: 3.1 >= 3.\x0a\x09self assert: 3 <= 3.\x0a\x09self assert: 3 <= 3.1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", ">", "<", "deny:", ">=", "<="]
}),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testCopying",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv((1)._copy()).__eq_eq((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._assert_($recv((1)._deepCopy()).__eq_eq((1)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCopying",{},$globals.NumberTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCopying\x0a\x09self assert: 1 copy == 1.\x0a\x09self assert: 1 deepCopy == 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "==", "copy", "deepCopy"]
}),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testEquality",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4,$7,$6,$9,$8,$10,$11,$12;
$1=(1).__eq((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$2=(0).__eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
self._assert_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$3=(1).__eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=3;
//>>excludeEnd("ctx");
self._deny_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$5=(1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__eq((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=4;
//>>excludeEnd("ctx");
self._assert_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$7=(1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=2;
//>>excludeEnd("ctx");
$6=(1).__eq($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=5;
//>>excludeEnd("ctx");
self._assert_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
$9=(1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=3;
//>>excludeEnd("ctx");
$8=$recv($9).__eq((1)._yourself());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=6;
//>>excludeEnd("ctx");
self._assert_($8);
$10=(0).__eq(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=7;
//>>excludeEnd("ctx");
self._deny_($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=2;
//>>excludeEnd("ctx");
$11=false.__eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=8;
//>>excludeEnd("ctx");
self._deny_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=3;
//>>excludeEnd("ctx");
$12="".__eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=9;
//>>excludeEnd("ctx");
self._deny_($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=4;
//>>excludeEnd("ctx");
self._deny_((0).__eq(""));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testEquality",{},$globals.NumberTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testEquality\x0a\x09self assert: (1 = 1).\x0a\x09self assert: (0 = 0).\x0a\x09self deny: (1 = 0).\x0a\x0a\x09self assert: (1 yourself = 1).\x0a\x09self assert: (1 = 1 yourself).\x0a\x09self assert: (1 yourself = 1 yourself).\x0a\x09\x0a\x09self deny: 0 = false.\x0a\x09self deny: false = 0.\x0a\x09self deny: '' = 0.\x0a\x09self deny: 0 = ''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "deny:", "yourself"]
}),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testFloor",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=(1.2)._floor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["floor"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=(-1.2)._floor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["floor"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,(-2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_((1)._floor(),(1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testFloor",{},$globals.NumberTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testFloor\x0a\x09self assert: 1.2 floor equals: 1.\x0a\x09self assert: -1.2 floor equals: -2.\x0a\x09self assert: 1.0 floor equals: 1.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "floor"]
}),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testHexNumbers",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
self._assert_equals_((9),(9));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$1=(10)._truncated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["truncated"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,(10));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$2=(11)._truncated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["truncated"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,(11));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$3=(12)._truncated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["truncated"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($3,(12));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$4=(13)._truncated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["truncated"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($4,(13));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
$5=(14)._truncated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["truncated"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($5,(14));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=6;
//>>excludeEnd("ctx");
self._assert_equals_((15)._truncated(),(15));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testHexNumbers",{},$globals.NumberTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testHexNumbers\x0a\x0a\x09self assert: 16r9 equals: 9.\x0a\x09self assert: 16rA truncated equals: 10.\x0a\x09self assert: 16rB truncated equals: 11.\x0a\x09self assert: 16rC truncated equals: 12.\x0a\x09self assert: 16rD truncated equals: 13.\x0a\x09self assert: 16rE truncated equals: 14.\x0a\x09self assert: 16rF truncated equals: 15",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "truncated"]
}),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testIdentity",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4,$7,$6,$9,$8;
$1=(1).__eq_eq((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$2=(0).__eq_eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=2;
//>>excludeEnd("ctx");
self._assert_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$3=(1).__eq_eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=3;
//>>excludeEnd("ctx");
self._deny_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$5=(1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__eq_eq((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=4;
//>>excludeEnd("ctx");
self._assert_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$7=(1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=2;
//>>excludeEnd("ctx");
$6=(1).__eq_eq($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=5;
//>>excludeEnd("ctx");
self._assert_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
$9=(1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=3;
//>>excludeEnd("ctx");
$8=$recv($9).__eq_eq((1)._yourself());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=6;
//>>excludeEnd("ctx");
self._assert_($8);
self._deny_((1).__eq_eq((2)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIdentity",{},$globals.NumberTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIdentity\x0a\x09self assert: 1 == 1.\x0a\x09self assert: 0 == 0.\x0a\x09self deny: 1 == 0.\x0a\x0a\x09self assert: 1 yourself == 1.\x0a\x09self assert: 1 == 1 yourself.\x0a\x09self assert: 1 yourself == 1 yourself.\x0a\x09\x0a\x09self deny: 1 == 2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "==", "deny:", "yourself"]
}),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testInvalidHexNumbers",
protocol: 'tests',
fn: function (){
var self=this;
function $MessageNotUnderstood(){return $globals.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rG();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=1;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rg();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=2;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rH();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=3;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rh();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=4;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rI();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=5;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._ri();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=6;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rJ();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,7)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=7;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rj();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,8)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=8;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rK();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,9)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=9;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rk();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,10)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=10;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rL();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,11)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=11;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rl();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,12)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=12;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rM();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,13)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=13;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rm();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,14)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=14;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rN();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,15)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=15;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rn();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,16)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=16;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rO();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,17)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=17;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._ro();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,18)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=18;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rP();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,19)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=19;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rp();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,20)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=20;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rQ();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,21)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=21;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rq();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,22)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=22;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rR();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,23)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=23;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,24)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=24;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rS();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,25)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=25;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rs();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,26)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=26;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rT();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,27)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=27;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,28)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=28;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rU();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,29)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=29;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._ru();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,30)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=30;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rV();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,31)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=31;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rv();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,32)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=32;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rW();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,33)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=33;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rw();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,34)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=34;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rX();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,35)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=35;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rx();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,36)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=36;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rY();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,37)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=37;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._ry();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,38)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=38;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rZ();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,39)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=39;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (16)._rz();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,40)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=40;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (11259375)._Z();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,41)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testInvalidHexNumbers",{},$globals.NumberTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testInvalidHexNumbers\x0a\x0a\x09self should: [ 16rG ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rg ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rH ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rh ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rI ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16ri ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rJ ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rj ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rK ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rk ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rL ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rl ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rM ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rm ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rN ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rn ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rO ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16ro ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rP ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rp ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rQ ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rq ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rR ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rr ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rS ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rs ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rT ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rt ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rU ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16ru ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rV ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rv ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rW ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rw ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rX ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rx ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rY ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16ry ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rZ ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rz ] raise: MessageNotUnderstood.\x0a\x09self should: [ 16rABcdEfZ ] raise: MessageNotUnderstood.",
referencedClasses: ["MessageNotUnderstood"],
//>>excludeEnd("ide");
messageSends: ["should:raise:", "rG", "rg", "rH", "rh", "rI", "ri", "rJ", "rj", "rK", "rk", "rL", "rl", "rM", "rm", "rN", "rn", "rO", "ro", "rP", "rp", "rQ", "rq", "rR", "rr", "rS", "rs", "rT", "rt", "rU", "ru", "rV", "rv", "rW", "rw", "rX", "rx", "rY", "ry", "rZ", "rz", "Z"]
}),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testLog",
protocol: 'tests',
fn: function (){
var self=this;
function $Number(){return $globals.Number||(typeof Number=="undefined"?nil:Number)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_equals_((10000)._log(),(4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_((512)._log_((2)),(9));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($recv($recv($Number())._e())._ln(),(1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testLog",{},$globals.NumberTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testLog\x0a\x09self assert: 10000 log equals: 4.\x0a\x09self assert: (512 log: 2) equals: 9.\x0a\x09self assert: Number e ln equals: 1.",
referencedClasses: ["Number"],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "log", "log:", "ln", "e"]
}),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testMinMax",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_equals_((2)._max_((5)),(5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_((2)._min_((5)),(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMinMax",{},$globals.NumberTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMinMax\x0a\x09\x0a\x09self assert: (2 max: 5) equals: 5.\x0a\x09self assert: (2 min: 5) equals: 2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "max:", "min:"]
}),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testNegated",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=(3)._negated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["negated"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,(-3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_((-3)._negated(),(3));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNegated",{},$globals.NumberTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNegated\x0a\x09self assert: 3 negated equals: -3.\x0a\x09self assert: -3 negated equals: 3",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "negated"]
}),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testPrintShowingDecimalPlaces",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5,$6,$8,$7,$10,$9,$11,$12,$13,$14,$15;
$1=(23)._printShowingDecimalPlaces_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printShowingDecimalPlaces:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,"23.00");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=(23.5698)._printShowingDecimalPlaces_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printShowingDecimalPlaces:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,"23.57");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$4=(234.567)._negated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["negated"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._printShowingDecimalPlaces_((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printShowingDecimalPlaces:"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($3,"-234.56700");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$5=(23.4567)._printShowingDecimalPlaces_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printShowingDecimalPlaces:"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($5,"23");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
$6=(23.5567)._printShowingDecimalPlaces_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printShowingDecimalPlaces:"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($6,"24");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
$8=(23.4567)._negated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["negated"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._printShowingDecimalPlaces_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printShowingDecimalPlaces:"]=6;
//>>excludeEnd("ctx");
self._assert_equals_($7,"-23");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=6;
//>>excludeEnd("ctx");
$10=(23.5567)._negated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["negated"]=3;
//>>excludeEnd("ctx");
$9=$recv($10)._printShowingDecimalPlaces_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printShowingDecimalPlaces:"]=7;
//>>excludeEnd("ctx");
self._assert_equals_($9,"-24");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=7;
//>>excludeEnd("ctx");
$11=(100000000)._printShowingDecimalPlaces_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printShowingDecimalPlaces:"]=8;
//>>excludeEnd("ctx");
self._assert_equals_($11,"100000000.0");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=8;
//>>excludeEnd("ctx");
$12=(0.98)._printShowingDecimalPlaces_((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printShowingDecimalPlaces:"]=9;
//>>excludeEnd("ctx");
self._assert_equals_($12,"0.98000");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=9;
//>>excludeEnd("ctx");
$13=$recv((0.98)._negated())._printShowingDecimalPlaces_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printShowingDecimalPlaces:"]=10;
//>>excludeEnd("ctx");
self._assert_equals_($13,"-0.98");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=10;
//>>excludeEnd("ctx");
$14=(2.567)._printShowingDecimalPlaces_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printShowingDecimalPlaces:"]=11;
//>>excludeEnd("ctx");
self._assert_equals_($14,"2.57");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=11;
//>>excludeEnd("ctx");
$15=(-2.567)._printShowingDecimalPlaces_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printShowingDecimalPlaces:"]=12;
//>>excludeEnd("ctx");
self._assert_equals_($15,"-2.57");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=12;
//>>excludeEnd("ctx");
self._assert_equals_((0)._printShowingDecimalPlaces_((2)),"0.00");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPrintShowingDecimalPlaces",{},$globals.NumberTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPrintShowingDecimalPlaces\x0a\x09self assert: (23 printShowingDecimalPlaces: 2) equals: '23.00'.\x0a\x09self assert: (23.5698 printShowingDecimalPlaces: 2) equals: '23.57'.\x0a\x09self assert: (234.567 negated printShowingDecimalPlaces: 5) equals: '-234.56700'.\x0a\x09self assert: (23.4567 printShowingDecimalPlaces: 0) equals: '23'.\x0a\x09self assert: (23.5567 printShowingDecimalPlaces: 0) equals: '24'.\x0a\x09self assert: (23.4567 negated printShowingDecimalPlaces: 0) equals: '-23'.\x0a\x09self assert: (23.5567 negated printShowingDecimalPlaces: 0) equals: '-24'.\x0a\x09self assert: (100000000 printShowingDecimalPlaces: 1) equals: '100000000.0'.\x0a\x09self assert: (0.98 printShowingDecimalPlaces: 5) equals: '0.98000'.\x0a\x09self assert: (0.98 negated printShowingDecimalPlaces: 2) equals: '-0.98'.\x0a\x09self assert: (2.567 printShowingDecimalPlaces: 2) equals: '2.57'.\x0a\x09self assert: (-2.567 printShowingDecimalPlaces: 2) equals: '-2.57'.\x0a\x09self assert: (0 printShowingDecimalPlaces: 2) equals: '0.00'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "printShowingDecimalPlaces:", "negated"]
}),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testRaisedTo",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=(2)._raisedTo_((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["raisedTo:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,(16));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=(2)._raisedTo_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["raisedTo:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$3=(2)._raisedTo_((-3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["raisedTo:"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($3,(0.125));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
self._assert_equals_((4)._raisedTo_((0.5)),(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
self._assert_equals_((2).__star_star((4)),(16));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRaisedTo",{},$globals.NumberTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRaisedTo\x0a\x09self assert: (2 raisedTo: 4) equals: 16.\x0a\x09self assert: (2 raisedTo: 0) equals: 1.\x0a\x09self assert: (2 raisedTo: -3) equals: 0.125.\x0a\x09self assert: (4 raisedTo: 0.5) equals: 2.\x0a\x09\x0a\x09self assert: 2 ** 4 equals: 16.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "raisedTo:", "**"]
}),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testRounded",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=(3)._rounded();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["rounded"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=(3.212)._rounded();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["rounded"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_((3.51)._rounded(),(4));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRounded",{},$globals.NumberTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRounded\x0a\x09\x0a\x09self assert: 3 rounded equals: 3.\x0a\x09self assert: 3.212 rounded equals: 3.\x0a\x09self assert: 3.51 rounded equals: 4",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "rounded"]
}),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testSign",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=(5)._sign();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["sign"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=(0)._sign();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["sign"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_((-1.4)._sign(),(-1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSign",{},$globals.NumberTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSign\x0a\x09self assert: 5 sign equals: 1.\x0a\x09self assert: 0 sign equals: 0.\x0a\x09self assert: -1.4 sign equals: -1.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "sign"]
}),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testSqrt",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=(4)._sqrt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["sqrt"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_((16)._sqrt(),(4));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSqrt",{},$globals.NumberTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSqrt\x0a\x09\x0a\x09self assert: 4 sqrt equals: 2.\x0a\x09self assert: 16 sqrt equals: 4",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "sqrt"]
}),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testSquared",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_equals_((4)._squared(),(16));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSquared",{},$globals.NumberTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSquared\x0a\x09\x0a\x09self assert: 4 squared equals: 16",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "squared"]
}),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testTimesRepeat",
protocol: 'tests',
fn: function (){
var self=this;
var i;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
i=(0);
(0)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
i=$recv(i).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
return i;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["timesRepeat:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_(i,(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
(5)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
i=$recv(i).__plus((1));
return i;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
self._assert_equals_(i,(5));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTimesRepeat",{i:i},$globals.NumberTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTimesRepeat\x0a\x09| i |\x0a\x0a\x09i := 0.\x0a\x090 timesRepeat: [ i := i + 1 ].\x0a\x09self assert: i equals: 0.\x0a\x0a\x095 timesRepeat: [ i := i + 1 ].\x0a\x09self assert: i equals: 5",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["timesRepeat:", "+", "assert:equals:"]
}),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testTo",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_equals_((1)._to_((5)),[(1), (2), (3), (4), (5)]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTo",{},$globals.NumberTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTo\x0a\x09self assert: (1 to: 5) equals: #(1 2 3 4 5)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "to:"]
}),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testToBy",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=(0)._to_by_((6),(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["to:by:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,[(0), (2), (4), (6)]);
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (1)._to_by_((4),(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testToBy",{},$globals.NumberTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testToBy\x0a\x09self assert: (0 to: 6 by: 2) equals: #(0 2 4 6).\x0a\x0a\x09self should: [ 1 to: 4 by: 0 ] raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "to:by:", "should:raise:"]
}),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testTrigonometry",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_equals_((0)._cos(),(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_((0)._sin(),(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_((0)._tan(),(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
self._assert_equals_((1)._arcCos(),(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
self._assert_equals_((0)._arcSin(),(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
self._assert_equals_((0)._arcTan(),(0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTrigonometry",{},$globals.NumberTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTrigonometry\x0a\x09self assert: 0 cos equals: 1.\x0a\x09self assert: 0 sin equals: 0.\x0a\x09self assert: 0 tan equals: 0.\x0a\x09self assert: 1 arcCos equals: 0.\x0a\x09self assert: 0 arcSin equals: 0.\x0a\x09self assert: 0 arcTan equals: 0.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "cos", "sin", "tan", "arcCos", "arcSin", "arcTan"]
}),
$globals.NumberTest);

$core.addMethod(
$core.method({
selector: "testTruncated",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=(3)._truncated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["truncated"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=(3.212)._truncated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["truncated"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_((3.51)._truncated(),(3));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTruncated",{},$globals.NumberTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTruncated\x0a\x09\x0a\x09self assert: 3 truncated equals: 3.\x0a\x09self assert: 3.212 truncated equals: 3.\x0a\x09self assert: 3.51 truncated equals: 3",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "truncated"]
}),
$globals.NumberTest);



$core.addClass('ObjectMock', $globals.Object, ['foo', 'bar'], 'Kernel-Tests');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ObjectMock.comment="ObjectMock is there only to perform tests on classes.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "foo",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@foo"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "foo\x0a\x09^ foo",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ObjectMock);

$core.addMethod(
$core.method({
selector: "foo:",
protocol: 'not yet classified',
fn: function (anObject){
var self=this;
self["@foo"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "foo: anObject\x0a\x09foo := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ObjectMock);



$core.addClass('ObjectTest', $globals.TestCase, [], 'Kernel-Tests');
$core.addMethod(
$core.method({
selector: "notDefined",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return void 0;;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"notDefined",{},$globals.ObjectTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "notDefined\x0a\x09<return void 0;>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ObjectTest);

$core.addMethod(
$core.method({
selector: "testBasicAccess",
protocol: 'tests',
fn: function (){
var self=this;
var o;
function $Object(){return $globals.Object||(typeof Object=="undefined"?nil:Object)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
o=$recv($Object())._new();
$recv(o)._basicAt_put_("a",(1));
$1=$recv(o)._basicAt_("a");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["basicAt:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($recv(o)._basicAt_("b"),nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testBasicAccess",{o:o},$globals.ObjectTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testBasicAccess\x0a\x09| o |\x0a\x09o := Object new.\x0a\x09o basicAt: 'a' put: 1.\x0a\x09self assert: (o basicAt: 'a') equals: 1.\x0a\x09self assert: (o basicAt: 'b') equals: nil",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
messageSends: ["new", "basicAt:put:", "assert:equals:", "basicAt:"]
}),
$globals.ObjectTest);

$core.addMethod(
$core.method({
selector: "testBasicPerform",
protocol: 'tests',
fn: function (){
var self=this;
var o;
function $Object(){return $globals.Object||(typeof Object=="undefined"?nil:Object)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
o=$recv($Object())._new();
$recv(o)._basicAt_put_("func",(function(){
return "hello";

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["basicAt:put:"]=1;
//>>excludeEnd("ctx");
$recv(o)._basicAt_put_("func2",(function(a){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(a).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a},$ctx1,2)});
//>>excludeEnd("ctx");
}));
self._assert_equals_($recv(o)._basicPerform_("func"),"hello");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($recv(o)._basicPerform_withArguments_("func2",[(3)]),(4));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testBasicPerform",{o:o},$globals.ObjectTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testBasicPerform\x0a\x09| o |\x0a\x09o := Object new.\x0a\x09o basicAt: 'func' put: [ 'hello' ].\x0a\x09o basicAt: 'func2' put: [ :a | a + 1 ].\x0a\x0a\x09self assert: (o basicPerform: 'func') equals: 'hello'.\x0a\x09self assert: (o basicPerform: 'func2' withArguments: #(3)) equals: 4",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
messageSends: ["new", "basicAt:put:", "+", "assert:equals:", "basicPerform:", "basicPerform:withArguments:"]
}),
$globals.ObjectTest);

$core.addMethod(
$core.method({
selector: "testDNU",
protocol: 'tests',
fn: function (){
var self=this;
function $Object(){return $globals.Object||(typeof Object=="undefined"?nil:Object)}
function $MessageNotUnderstood(){return $globals.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($Object())._new())._foo();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDNU",{},$globals.ObjectTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDNU\x0a\x09self should: [ Object new foo ] raise: MessageNotUnderstood",
referencedClasses: ["Object", "MessageNotUnderstood"],
//>>excludeEnd("ide");
messageSends: ["should:raise:", "foo", "new"]
}),
$globals.ObjectTest);

$core.addMethod(
$core.method({
selector: "testEquality",
protocol: 'tests',
fn: function (){
var self=this;
var o;
function $Object(){return $globals.Object||(typeof Object=="undefined"?nil:Object)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$3;
o=$recv($Object())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$1=$recv(o).__eq($recv($Object())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._deny_($1);
$2=$recv(o).__eq(o);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
self._assert_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$4=$recv(o)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__eq(o);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=3;
//>>excludeEnd("ctx");
self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
self._assert_($recv(o).__eq($recv(o)._yourself()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testEquality",{o:o},$globals.ObjectTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testEquality\x0a\x09| o |\x0a\x09o := Object new.\x0a\x09self deny: o = Object new.\x0a\x09self assert: (o = o).\x0a\x09self assert: (o yourself = o).\x0a\x09self assert: (o = o yourself)",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
messageSends: ["new", "deny:", "=", "assert:", "yourself"]
}),
$globals.ObjectTest);

$core.addMethod(
$core.method({
selector: "testHalt",
protocol: 'tests',
fn: function (){
var self=this;
function $Object(){return $globals.Object||(typeof Object=="undefined"?nil:Object)}
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($Object())._new())._halt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testHalt",{},$globals.ObjectTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testHalt\x0a\x09self should: [ Object new halt ] raise: Error",
referencedClasses: ["Object", "Error"],
//>>excludeEnd("ide");
messageSends: ["should:raise:", "halt", "new"]
}),
$globals.ObjectTest);

$core.addMethod(
$core.method({
selector: "testIdentity",
protocol: 'tests',
fn: function (){
var self=this;
var o;
function $Object(){return $globals.Object||(typeof Object=="undefined"?nil:Object)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$3;
o=$recv($Object())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$1=$recv(o).__eq_eq($recv($Object())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=1;
//>>excludeEnd("ctx");
self._deny_($1);
$2=$recv(o).__eq_eq(o);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=2;
//>>excludeEnd("ctx");
self._assert_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$4=$recv(o)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__eq_eq(o);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=3;
//>>excludeEnd("ctx");
self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
self._assert_($recv(o).__eq_eq($recv(o)._yourself()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIdentity",{o:o},$globals.ObjectTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIdentity\x0a\x09| o |\x0a\x09o := Object new.\x0a\x09self deny: o == Object new.\x0a\x09self assert: o == o.\x0a\x09self assert: o yourself == o.\x0a\x09self assert: o == o yourself",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
messageSends: ["new", "deny:", "==", "assert:", "yourself"]
}),
$globals.ObjectTest);

$core.addMethod(
$core.method({
selector: "testIfNil",
protocol: 'tests',
fn: function (){
var self=this;
function $Object(){return $globals.Object||(typeof Object=="undefined"?nil:Object)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$5,$4,$3,$7,$6,$9,$8,$11,$10,$receiver;
$2=$recv($Object())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._isNil();
self._deny_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$5=$recv($Object())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
if(($receiver = $5) == null || $receiver.isNil){
$4=true;
} else {
$4=$5;
};
$3=$recv($4).__eq(true);
self._deny_($3);
$7=$recv($Object())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
if(($receiver = $7) == null || $receiver.isNil){
$6=$7;
} else {
$6=true;
};
self._assert_equals_($6,true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$9=$recv($Object())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=4;
//>>excludeEnd("ctx");
if(($receiver = $9) == null || $receiver.isNil){
$8=false;
} else {
$8=true;
};
self._assert_equals_($8,true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$11=$recv($Object())._new();
if(($receiver = $11) == null || $receiver.isNil){
$10=false;
} else {
$10=true;
};
self._assert_equals_($10,true);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIfNil",{},$globals.ObjectTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIfNil\x0a\x09self deny: Object new isNil.\x0a\x09self deny: (Object new ifNil: [ true ]) = true.\x0a\x09self assert: (Object new ifNotNil: [ true ]) equals: true.\x0a\x0a\x09self assert: (Object new ifNil: [ false ] ifNotNil: [ true ]) equals: true.\x0a\x09self assert: (Object new ifNotNil: [ true ] ifNil: [ false ]) equals: true",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
messageSends: ["deny:", "isNil", "new", "=", "ifNil:", "assert:equals:", "ifNotNil:", "ifNil:ifNotNil:", "ifNotNil:ifNil:"]
}),
$globals.ObjectTest);

$core.addMethod(
$core.method({
selector: "testInstVars",
protocol: 'tests',
fn: function (){
var self=this;
var o;
function $ObjectMock(){return $globals.ObjectMock||(typeof ObjectMock=="undefined"?nil:ObjectMock)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
o=$recv($ObjectMock())._new();
$1=$recv(o)._instVarAt_("foo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["instVarAt:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$recv(o)._instVarAt_put_("foo",(1));
$2=$recv(o)._instVarAt_("foo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["instVarAt:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($recv(o)._instVarAt_("foo"),(1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testInstVars",{o:o},$globals.ObjectTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testInstVars\x0a\x09| o |\x0a\x09o := ObjectMock new.\x0a\x09self assert: (o instVarAt: #foo) equals: nil.\x0a\x0a\x09o instVarAt: #foo put: 1.\x0a\x09self assert: (o instVarAt: #foo) equals: 1.\x0a\x09self assert: (o instVarAt: 'foo') equals: 1",
referencedClasses: ["ObjectMock"],
//>>excludeEnd("ide");
messageSends: ["new", "assert:equals:", "instVarAt:", "instVarAt:put:"]
}),
$globals.ObjectTest);

$core.addMethod(
$core.method({
selector: "testNilUndefined",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_equals_(self._notDefined(),nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNilUndefined",{},$globals.ObjectTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNilUndefined\x0a\x09\x22nil in Smalltalk is the undefined object in JS\x22\x0a\x0a\x09self assert: self notDefined equals: nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "notDefined"]
}),
$globals.ObjectTest);

$core.addMethod(
$core.method({
selector: "testYourself",
protocol: 'tests',
fn: function (){
var self=this;
var o;
function $ObjectMock(){return $globals.ObjectMock||(typeof ObjectMock=="undefined"?nil:ObjectMock)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
o=$recv($ObjectMock())._new();
self._assert_($recv($recv(o)._yourself()).__eq_eq(o));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testYourself",{o:o},$globals.ObjectTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testYourself\x0a\x09| o |\x0a\x09o := ObjectMock new.\x0a\x09self assert: o yourself == o",
referencedClasses: ["ObjectMock"],
//>>excludeEnd("ide");
messageSends: ["new", "assert:", "==", "yourself"]
}),
$globals.ObjectTest);

$core.addMethod(
$core.method({
selector: "testidentityHash",
protocol: 'tests',
fn: function (){
var self=this;
var o1,o2;
function $Object(){return $globals.Object||(typeof Object=="undefined"?nil:Object)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1,$5,$4;
o1=$recv($Object())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
o2=$recv($Object())._new();
$2=$recv(o1)._identityHash();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["identityHash"]=1;
//>>excludeEnd("ctx");
$3=$recv(o1)._identityHash();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["identityHash"]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__eq_eq($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
$5=$recv(o1)._identityHash();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["identityHash"]=3;
//>>excludeEnd("ctx");
$4=$recv($5).__eq_eq($recv(o2)._identityHash());
self._deny_($4);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testidentityHash",{o1:o1,o2:o2},$globals.ObjectTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testidentityHash\x0a\x09| o1 o2 |\x0a\x09\x0a\x09o1 := Object new.\x0a\x09o2 := Object new.\x0a\x0a\x09self assert: o1 identityHash == o1 identityHash.\x0a\x09self deny: o1 identityHash == o2 identityHash",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
messageSends: ["new", "assert:", "==", "identityHash", "deny:"]
}),
$globals.ObjectTest);



$core.addClass('PointTest', $globals.TestCase, [], 'Kernel-Tests');
$core.addMethod(
$core.method({
selector: "testAccessing",
protocol: 'tests',
fn: function (){
var self=this;
function $Point(){return $globals.Point||(typeof Point=="undefined"?nil:Point)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3,$6,$5,$4;
$2=$recv($Point())._x_y_((3),(4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x:y:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$3=$recv($recv($Point())._x_y_((3),(4)))._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($3,(4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$6=$recv($Point())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._x_((3));
$4=$recv($5)._x();
self._assert_equals_($4,(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($recv($recv($recv($Point())._new())._y_((4)))._y(),(4));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAccessing",{},$globals.PointTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAccessing\x0a\x09self assert: (Point x: 3 y: 4) x equals: 3.\x0a\x09self assert: (Point x: 3 y: 4) y equals: 4.\x0a\x09self assert: (Point new x: 3) x equals: 3.\x0a\x09self assert: (Point new y: 4) y equals: 4",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "x", "x:y:", "y", "x:", "new", "y:"]
}),
$globals.PointTest);

$core.addMethod(
$core.method({
selector: "testArithmetic",
protocol: 'tests',
fn: function (){
var self=this;
function $Point(){return $globals.Point||(typeof Point=="undefined"?nil:Point)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1,$4,$6,$7,$5,$8,$10,$11,$9,$12,$14,$13;
$2=(3).__at((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$3=(3).__at((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__star($3);
$4=$recv($Point())._x_y_((9),(16));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x:y:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$6=(3).__at((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=3;
//>>excludeEnd("ctx");
$7=(3).__at((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=4;
//>>excludeEnd("ctx");
$5=$recv($6).__plus($7);
$8=$recv($Point())._x_y_((6),(8));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x:y:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($5,$8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$10=(3).__at((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=5;
//>>excludeEnd("ctx");
$11=(3).__at((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=6;
//>>excludeEnd("ctx");
$9=$recv($10).__minus($11);
$12=$recv($Point())._x_y_((0),(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x:y:"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($9,$12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$14=(6).__at((8));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=7;
//>>excludeEnd("ctx");
$13=$recv($14).__slash((3).__at((4)));
self._assert_equals_($13,$recv($Point())._x_y_((2),(2)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testArithmetic",{},$globals.PointTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testArithmetic\x0a\x09self assert: 3@4 * (3@4 ) equals: (Point x: 9 y: 16).\x0a\x09self assert: 3@4 + (3@4 ) equals: (Point x: 6 y: 8).\x0a\x09self assert: 3@4 - (3@4 ) equals: (Point x: 0 y: 0).\x0a\x09self assert: 6@8 / (3@4 ) equals: (Point x: 2 y: 2)",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "*", "@", "x:y:", "+", "-", "/"]
}),
$globals.PointTest);

$core.addMethod(
$core.method({
selector: "testAt",
protocol: 'tests',
fn: function (){
var self=this;
function $Point(){return $globals.Point||(typeof Point=="undefined"?nil:Point)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_equals_((3).__at((4)),$recv($Point())._x_y_((3),(4)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAt",{},$globals.PointTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAt\x0a\x09self assert: 3@4 equals: (Point x: 3 y: 4)",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "@", "x:y:"]
}),
$globals.PointTest);

$core.addMethod(
$core.method({
selector: "testComparison",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1,$5,$6,$4,$8,$9,$7,$11,$12,$10,$14,$15,$13,$17,$18,$16,$20,$21,$19,$23,$22;
$2=(3).__at((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$3=(4).__at((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__lt($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<"]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$5=(3).__at((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=3;
//>>excludeEnd("ctx");
$6=(4).__at((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=4;
//>>excludeEnd("ctx");
$4=$recv($5).__lt($6);
self._deny_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$8=(4).__at((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=5;
//>>excludeEnd("ctx");
$9=(4).__at((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=6;
//>>excludeEnd("ctx");
$7=$recv($8).__lt_eq($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<="]=1;
//>>excludeEnd("ctx");
self._assert_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$11=(4).__at((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=7;
//>>excludeEnd("ctx");
$12=(3).__at((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=8;
//>>excludeEnd("ctx");
$10=$recv($11).__lt_eq($12);
self._deny_($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=2;
//>>excludeEnd("ctx");
$14=(5).__at((6));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=9;
//>>excludeEnd("ctx");
$15=(4).__at((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=10;
//>>excludeEnd("ctx");
$13=$recv($14).__gt($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=1;
//>>excludeEnd("ctx");
self._assert_($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$17=(5).__at((6));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=11;
//>>excludeEnd("ctx");
$18=(6).__at((6));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=12;
//>>excludeEnd("ctx");
$16=$recv($17).__gt($18);
self._deny_($16);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=3;
//>>excludeEnd("ctx");
$20=(4).__at((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=13;
//>>excludeEnd("ctx");
$21=(4).__at((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=14;
//>>excludeEnd("ctx");
$19=$recv($20).__gt_eq($21);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">="]=1;
//>>excludeEnd("ctx");
self._assert_($19);
$23=(4).__at((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=15;
//>>excludeEnd("ctx");
$22=$recv($23).__gt_eq((5).__at((5)));
self._deny_($22);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testComparison",{},$globals.PointTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testComparison\x0a\x09self assert: 3@4 < (4@5).\x0a\x09self deny: 3@4 < (4@4).\x0a\x09\x0a\x09self assert: 4@5 <= (4@5).\x0a\x09self deny: 4@5 <= (3@5).\x0a\x09\x0a\x09self assert: 5@6 > (4@5).\x0a\x09self deny: 5@6 > (6@6).\x0a\x09\x0a\x09self assert: 4@5 >= (4@5).\x0a\x09self deny: 4@5 >= (5@5)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "<", "@", "deny:", "<=", ">", ">="]
}),
$globals.PointTest);

$core.addMethod(
$core.method({
selector: "testEgality",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1,$5,$4;
$2=(3).__at((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$3=(3).__at((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__eq($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
$5=(3).__at((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=3;
//>>excludeEnd("ctx");
$4=$recv($5).__eq((3).__at((6)));
self._deny_($4);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testEgality",{},$globals.PointTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testEgality\x0a\x09self assert: (3@4 = (3@4)).\x0a\x09self deny: 3@5 = (3@6)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "@", "deny:"]
}),
$globals.PointTest);

$core.addMethod(
$core.method({
selector: "testNew",
protocol: 'tests',
fn: function (){
var self=this;
function $Point(){return $globals.Point||(typeof Point=="undefined"?nil:Point)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1,$7,$6,$5,$4,$10,$9,$8;
$3=$recv($Point())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._x_((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$7=$recv($Point())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$6=$recv($7)._x_((3));
$5=$recv($6)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._deny_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$10=$recv($Point())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$9=$recv($10)._y_((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y:"]=1;
//>>excludeEnd("ctx");
$8=$recv($9)._x();
self._assert_equals_($8,nil);
self._deny_($recv($recv($recv($recv($Point())._new())._y_((4)))._y()).__eq((0)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNew",{},$globals.PointTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNew\x0a\x0a\x09self assert: (Point new x: 3) y equals: nil.\x0a\x09self deny: (Point new x: 3) x = 0.\x0a\x09self assert: (Point new y: 4) x equals: nil.\x0a\x09self deny: (Point new y: 4) y = 0",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "y", "x:", "new", "deny:", "=", "x", "y:"]
}),
$globals.PointTest);

$core.addMethod(
$core.method({
selector: "testTranslateBy",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1,$4,$6,$8,$7,$5,$9,$11,$12,$10,$13,$15,$16,$14;
$2=(3).__at((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$3=(0).__at((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$1=$recv($2)._translateBy_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["translateBy:"]=1;
//>>excludeEnd("ctx");
$4=(3).__at((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($1,$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$6=(3).__at((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=4;
//>>excludeEnd("ctx");
$8=(1)._negated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["negated"]=1;
//>>excludeEnd("ctx");
$7=(0).__at($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=5;
//>>excludeEnd("ctx");
$5=$recv($6)._translateBy_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["translateBy:"]=2;
//>>excludeEnd("ctx");
$9=(3).__at((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=6;
//>>excludeEnd("ctx");
self._assert_equals_($5,$9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$11=(3).__at((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=7;
//>>excludeEnd("ctx");
$12=(2).__at((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=8;
//>>excludeEnd("ctx");
$10=$recv($11)._translateBy_($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["translateBy:"]=3;
//>>excludeEnd("ctx");
$13=(5).__at((6));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=9;
//>>excludeEnd("ctx");
self._assert_equals_($10,$13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$15=(3).__at((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=10;
//>>excludeEnd("ctx");
$16=$recv((3)._negated()).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=11;
//>>excludeEnd("ctx");
$14=$recv($15)._translateBy_($16);
self._assert_equals_($14,(0).__at((3)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTranslateBy",{},$globals.PointTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTranslateBy\x0a\x09self assert: (3@3 translateBy: 0@1) equals: 3@4.\x0a\x09self assert: (3@3 translateBy: 0@1 negated) equals: 3@2.\x0a\x09self assert: (3@3 translateBy: 2@3) equals: 5@6.\x0a\x09self assert: (3@3 translateBy: 3 negated @0) equals: 0@3.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "translateBy:", "@", "negated"]
}),
$globals.PointTest);



$core.addClass('QueueTest', $globals.TestCase, [], 'Kernel-Tests');
$core.addMethod(
$core.method({
selector: "testNextIfAbsent",
protocol: 'tests',
fn: function (){
var self=this;
var queue;
function $Queue(){return $globals.Queue||(typeof Queue=="undefined"?nil:Queue)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
queue=$recv($Queue())._new();
$recv(queue)._nextPut_("index1");
$2=$recv(queue)._nextIfAbsent_("empty");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextIfAbsent:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq("index1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
self._deny_($recv($recv(queue)._nextIfAbsent_("empty")).__eq("index1"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNextIfAbsent",{queue:queue},$globals.QueueTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNextIfAbsent\x0a\x09| queue |\x0a\x09queue := Queue new.\x0a\x09queue nextPut: 'index1'. \x0a\x0a\x09self assert: (queue  nextIfAbsent: 'empty') = 'index1'.\x0a\x09self deny: (queue  nextIfAbsent: 'empty') = 'index1'",
referencedClasses: ["Queue"],
//>>excludeEnd("ide");
messageSends: ["new", "nextPut:", "assert:", "=", "nextIfAbsent:", "deny:"]
}),
$globals.QueueTest);

$core.addMethod(
$core.method({
selector: "testQueueNext",
protocol: 'tests',
fn: function (){
var self=this;
var queue;
function $Queue(){return $globals.Queue||(typeof Queue=="undefined"?nil:Queue)}
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$6,$5;
queue=$recv($Queue())._new();
$1=queue;
$recv($1)._nextPut_("index1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPut:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._nextPut_("index2");
$4=$recv(queue)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["next"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__eq("index1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($3);
$6=$recv(queue)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["next"]=2;
//>>excludeEnd("ctx");
$5=$recv($6).__eq("index");
self._deny_($5);
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(queue)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testQueueNext",{queue:queue},$globals.QueueTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testQueueNext\x0a\x09| queue |               \x0a\x09queue := Queue new.\x0a\x09queue \x0a\x09\x09nextPut: 'index1';\x0a\x09\x09nextPut: 'index2'.\x0a\x0a\x09self assert: queue next = 'index1'.\x0a\x09self deny: queue next = 'index'.\x0a\x09self should: [ queue next ] raise: Error",
referencedClasses: ["Queue", "Error"],
//>>excludeEnd("ide");
messageSends: ["new", "nextPut:", "assert:", "=", "next", "deny:", "should:raise:"]
}),
$globals.QueueTest);



$core.addClass('RandomTest', $globals.TestCase, [], 'Kernel-Tests');
$core.addMethod(
$core.method({
selector: "testAtRandomNumber",
protocol: 'tests',
fn: function (){
var self=this;
var val;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(100)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
val=(10)._atRandom();
val;
self._assert_($recv(val).__gt((0)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
return self._assert_($recv(val).__lt((11)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAtRandomNumber",{val:val},$globals.RandomTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAtRandomNumber\x0a\x09|val|\x09\x0a\x0a\x09100 timesRepeat: [\x0a\x09\x09val := 10 atRandom.\x09\x0a\x09\x09self assert: (val > 0).\x0a\x09\x09self assert: (val <11)\x0a\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["timesRepeat:", "atRandom", "assert:", ">", "<"]
}),
$globals.RandomTest);

$core.addMethod(
$core.method({
selector: "testAtRandomSequenceableCollection",
protocol: 'tests',
fn: function (){
var self=this;
var val;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$4,$2,$1;
(100)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
val="abc"._atRandom();
val;
$3=$recv(val).__eq("a");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
$4=$recv(val).__eq("b");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__or($4);
$1=$recv($2).__or($recv(val).__eq("c"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["|"]=1;
//>>excludeEnd("ctx");
return self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAtRandomSequenceableCollection",{val:val},$globals.RandomTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAtRandomSequenceableCollection\x0a\x09|val|\x0a\x09\x0a\x09100 timesRepeat: [\x0a\x09\x09val := 'abc' atRandom.\x0a\x09\x09self assert: ((val = 'a') | (val = 'b') | (val = 'c' )).\x0a\x09].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["timesRepeat:", "atRandom", "assert:", "|", "="]
}),
$globals.RandomTest);

$core.addMethod(
$core.method({
selector: "textNext",
protocol: 'tests',
fn: function (){
var self=this;
function $Random(){return $globals.Random||(typeof Random=="undefined"?nil:Random)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
(10000)._timesRepeat_((function(){
var current,next;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
next=$recv($recv($Random())._new())._next();
next;
self._assert_($recv(next).__gt_eq((0)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._assert_($recv(next).__lt((1)));
$1=$recv(current).__eq(next);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._deny_($1);
return $recv(next).__eq(current);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({current:current,next:next},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"textNext",{},$globals.RandomTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "textNext\x0a\x0a\x0910000 timesRepeat: [\x0a\x09\x09\x09| current next |\x0a\x09\x09\x09next := Random new next.\x0a\x09\x09\x09self assert: (next >= 0).\x0a\x09\x09\x09self assert: (next < 1).\x0a\x09\x09\x09self deny: current = next.\x0a\x09\x09\x09next = current ]",
referencedClasses: ["Random"],
//>>excludeEnd("ide");
messageSends: ["timesRepeat:", "next", "new", "assert:", ">=", "<", "deny:", "="]
}),
$globals.RandomTest);



$core.addClass('StreamTest', $globals.TestCase, [], 'Kernel-Tests');
$core.addMethod(
$core.method({
selector: "collectionClass",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class())._collectionClass();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectionClass",{},$globals.StreamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionClass\x0a\x09^ self class collectionClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collectionClass", "class"]
}),
$globals.StreamTest);

$core.addMethod(
$core.method({
selector: "newCollection",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._collectionClass())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newCollection",{},$globals.StreamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newCollection\x0a\x09^ self collectionClass new",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "collectionClass"]
}),
$globals.StreamTest);

$core.addMethod(
$core.method({
selector: "newStream",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._collectionClass())._new())._stream();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newStream",{},$globals.StreamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newStream\x0a\x09^ self collectionClass new stream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["stream", "new", "collectionClass"]
}),
$globals.StreamTest);

$core.addMethod(
$core.method({
selector: "testAtStartAtEnd",
protocol: 'tests',
fn: function (){
var self=this;
var stream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
stream=self._newStream();
$1=$recv(stream)._atStart();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atStart"]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$2=$recv(stream)._atEnd();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atEnd"]=1;
//>>excludeEnd("ctx");
self._assert_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_(self._newCollection());
$3=$recv(stream)._atEnd();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atEnd"]=2;
//>>excludeEnd("ctx");
self._assert_($3);
$4=$recv(stream)._atStart();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atStart"]=2;
//>>excludeEnd("ctx");
self._deny_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$recv(stream)._position_((1));
self._deny_($recv(stream)._atEnd());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=2;
//>>excludeEnd("ctx");
self._deny_($recv(stream)._atStart());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAtStartAtEnd",{stream:stream},$globals.StreamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAtStartAtEnd\x0a\x09| stream |\x0a\x09\x0a\x09stream := self newStream.\x0a\x09self assert: stream atStart.\x0a\x09self assert: stream atEnd.\x0a\x09\x0a\x09stream nextPutAll: self newCollection.\x0a\x09self assert: stream atEnd.\x0a\x09self deny: stream atStart.\x0a\x09\x0a\x09stream position: 1.\x0a\x09self deny: stream atEnd.\x0a\x09self deny: stream atStart",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newStream", "assert:", "atStart", "atEnd", "nextPutAll:", "newCollection", "deny:", "position:"]
}),
$globals.StreamTest);

$core.addMethod(
$core.method({
selector: "testContents",
protocol: 'tests',
fn: function (){
var self=this;
var stream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
stream=self._newStream();
$1=stream;
$2=self._newCollection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newCollection"]=1;
//>>excludeEnd("ctx");
$recv($1)._nextPutAll_($2);
self._assert_equals_($recv(stream)._contents(),self._newCollection());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testContents",{stream:stream},$globals.StreamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testContents\x0a\x09| stream |\x0a\x09\x0a\x09stream := self newStream.\x0a\x09stream nextPutAll: self newCollection.\x0a\x09\x0a\x09self assert: stream contents equals: self newCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newStream", "nextPutAll:", "newCollection", "assert:equals:", "contents"]
}),
$globals.StreamTest);

$core.addMethod(
$core.method({
selector: "testIsEmpty",
protocol: 'tests',
fn: function (){
var self=this;
var stream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
stream=self._newStream();
$1=$recv(stream)._isEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isEmpty"]=1;
//>>excludeEnd("ctx");
self._assert_($1);
$recv(stream)._nextPutAll_(self._newCollection());
self._deny_($recv(stream)._isEmpty());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIsEmpty",{stream:stream},$globals.StreamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIsEmpty\x0a\x09| stream |\x0a\x09\x0a\x09stream := self newStream.\x0a\x09self assert: stream isEmpty.\x0a\x09\x0a\x09stream nextPutAll: self newCollection.\x0a\x09self deny: stream isEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newStream", "assert:", "isEmpty", "nextPutAll:", "newCollection", "deny:"]
}),
$globals.StreamTest);

$core.addMethod(
$core.method({
selector: "testPosition",
protocol: 'tests',
fn: function (){
var self=this;
var collection,stream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
collection=self._newCollection();
stream=self._newStream();
$recv(stream)._nextPutAll_(collection);
$1=$recv(stream)._position();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["position"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,$recv(collection)._size());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$recv(stream)._position_((0));
$2=$recv(stream)._position();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["position"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$recv(stream)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["next"]=1;
//>>excludeEnd("ctx");
$3=$recv(stream)._position();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["position"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($3,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$recv(stream)._next();
self._assert_equals_($recv(stream)._position(),(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPosition",{collection:collection,stream:stream},$globals.StreamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPosition\x0a\x09| collection stream |\x0a\x09\x0a\x09collection := self newCollection.\x0a\x09stream := self newStream.\x0a\x09\x0a\x09stream nextPutAll: collection.\x0a\x09self assert: stream position equals: collection size.\x0a\x09\x0a\x09stream position: 0.\x0a\x09self assert: stream position equals: 0.\x0a\x09\x0a\x09stream next.\x0a\x09self assert: stream position equals: 1.\x0a\x09\x0a\x09stream next.\x0a\x09self assert: stream position equals: 2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newCollection", "newStream", "nextPutAll:", "assert:equals:", "position", "size", "position:", "next"]
}),
$globals.StreamTest);

$core.addMethod(
$core.method({
selector: "testReading",
protocol: 'tests',
fn: function (){
var self=this;
var stream,collection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
collection=self._newCollection();
stream=self._newStream();
$1=stream;
$recv($1)._nextPutAll_(collection);
$2=$recv($1)._position_((0));
$recv(collection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(stream)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["next"]=1;
//>>excludeEnd("ctx");
return self._assert_equals_($3,each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._assert_($recv($recv(stream)._next())._isNil());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testReading",{stream:stream,collection:collection},$globals.StreamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testReading\x0a\x09| stream collection |\x0a\x09\x0a\x09collection := self newCollection.\x0a\x09stream := self newStream.\x0a\x09\x0a\x09stream \x0a\x09\x09nextPutAll: collection;\x0a\x09\x09position: 0.\x0a\x09\x0a\x09collection do: [ :each |\x0a\x09\x09self assert: stream next equals: each ].\x0a\x09\x09\x0a\x09self assert: stream next isNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newCollection", "newStream", "nextPutAll:", "position:", "do:", "assert:equals:", "next", "assert:", "isNil"]
}),
$globals.StreamTest);

$core.addMethod(
$core.method({
selector: "testStreamContents",
protocol: 'tests',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testStreamContents",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StreamTest);

$core.addMethod(
$core.method({
selector: "testWrite",
protocol: 'tests',
fn: function (){
var self=this;
var stream,collection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
collection=self._newCollection();
stream=self._newStream();
$recv(collection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(stream).__lt_lt(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._assert_equals_($recv(stream)._contents(),collection);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testWrite",{stream:stream,collection:collection},$globals.StreamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testWrite\x0a\x09| stream collection |\x0a\x09\x0a\x09collection := self newCollection.\x0a\x09stream := self newStream.\x0a\x09\x0a\x09collection do: [ :each | stream << each ].\x0a\x09self assert: stream contents equals: collection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newCollection", "newStream", "do:", "<<", "assert:equals:", "contents"]
}),
$globals.StreamTest);

$core.addMethod(
$core.method({
selector: "testWriting",
protocol: 'tests',
fn: function (){
var self=this;
var stream,collection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
collection=self._newCollection();
stream=self._newStream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newStream"]=1;
//>>excludeEnd("ctx");
$recv(collection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPut_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=$recv(stream)._contents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["contents"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,collection);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
stream=self._newStream();
$recv(stream)._nextPutAll_(collection);
self._assert_equals_($recv(stream)._contents(),collection);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testWriting",{stream:stream,collection:collection},$globals.StreamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testWriting\x0a\x09| stream collection |\x0a\x09\x0a\x09collection := self newCollection.\x0a\x09stream := self newStream.\x0a\x09\x0a\x09collection do: [ :each | stream nextPut: each ].\x0a\x09self assert: stream contents equals: collection.\x0a\x09\x0a\x09stream := self newStream.\x0a\x09stream nextPutAll: collection.\x0a\x09self assert: stream contents equals: collection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newCollection", "newStream", "do:", "nextPut:", "assert:equals:", "contents", "nextPutAll:"]
}),
$globals.StreamTest);


$core.addMethod(
$core.method({
selector: "collectionClass",
protocol: 'accessing',
fn: function (){
var self=this;
return nil;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionClass\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StreamTest.klass);

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
$1=$recv(self._collectionClass())._isNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},$globals.StreamTest.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAbstract\x0a\x09^ self collectionClass isNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isNil", "collectionClass"]
}),
$globals.StreamTest.klass);


$core.addClass('ArrayStreamTest', $globals.StreamTest, [], 'Kernel-Tests');
$core.addMethod(
$core.method({
selector: "newCollection",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=[true,(1),(3).__at((4)),"foo"];
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newCollection",{},$globals.ArrayStreamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newCollection\x0a\x09^ { true. 1. 3@4. 'foo' }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["@"]
}),
$globals.ArrayStreamTest);


$core.addMethod(
$core.method({
selector: "collectionClass",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
return $Array();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionClass\x0a\x09^ Array",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ArrayStreamTest.klass);


$core.addClass('StringStreamTest', $globals.StreamTest, [], 'Kernel-Tests');
$core.addMethod(
$core.method({
selector: "newCollection",
protocol: 'accessing',
fn: function (){
var self=this;
return "hello world";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newCollection\x0a\x09^ 'hello world'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StringStreamTest);


$core.addMethod(
$core.method({
selector: "collectionClass",
protocol: 'accessing',
fn: function (){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
return $String();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectionClass\x0a\x09^ String",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StringStreamTest.klass);


$core.addClass('UndefinedTest', $globals.TestCase, [], 'Kernel-Tests');
$core.addMethod(
$core.method({
selector: "testCopying",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_equals_(nil._copy(),nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCopying",{},$globals.UndefinedTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCopying\x0a\x09self assert: nil copy equals: nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "copy"]
}),
$globals.UndefinedTest);

$core.addMethod(
$core.method({
selector: "testDeepCopy",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_($recv(nil._deepCopy()).__eq(nil));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDeepCopy",{},$globals.UndefinedTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDeepCopy\x0a\x09self assert: nil deepCopy = nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "deepCopy"]
}),
$globals.UndefinedTest);

$core.addMethod(
$core.method({
selector: "testIfNil",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$6,$5,$receiver;
if(($receiver = nil) == null || $receiver.isNil){
$1=true;
} else {
$1=nil;
};
self._assert_equals_($1,true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
if(($receiver = nil) == null || $receiver.isNil){
$3=nil;
} else {
$3=true;
};
$2=$recv($3).__eq(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._deny_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
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
$5=$recv($6).__eq(true);
self._deny_($5);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIfNil",{},$globals.UndefinedTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIfNil\x0a\x09self assert: (nil ifNil: [ true ]) equals: true.\x0a\x09self deny: (nil ifNotNil: [ true ]) = true.\x0a\x09self assert: (nil ifNil: [ true ] ifNotNil: [ false ]) equals: true.\x0a\x09self deny: (nil ifNotNil: [ true ] ifNil: [ false ]) = true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "ifNil:", "deny:", "=", "ifNotNil:", "ifNil:ifNotNil:", "ifNotNil:ifNil:"]
}),
$globals.UndefinedTest);

$core.addMethod(
$core.method({
selector: "testIsNil",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_(nil._isNil());
self._deny_(nil._notNil());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIsNil",{},$globals.UndefinedTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIsNil\x0a\x09self assert: nil isNil.\x0a\x09self deny: nil notNil.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "isNil", "deny:", "notNil"]
}),
$globals.UndefinedTest);


});
