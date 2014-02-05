define("amber_core/Helios-Workspace-Tests", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/SUnit"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Helios-Workspace-Tests');
smalltalk.packages["Helios-Workspace-Tests"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('HLCodeModelTest', globals.TestCase, ['model'], 'Helios-Workspace-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
protocol: 'setup / teardown',
fn: function (){
var self=this;
function $HLCodeModel(){return globals.HLCodeModel||(typeof HLCodeModel=="undefined"?nil:HLCodeModel)}
function $DoIt(){return globals.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($HLCodeModel())._new();
$ctx1.sendIdx["new"]=1;
_st($1)._receiver_(_st($DoIt())._new());
$2=_st($1)._yourself();
self["@model"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},globals.HLCodeModelTest)})},
args: [],
source: "setUp\x0a\x09model := HLCodeModel new\x0a\x09\x09receiver: DoIt new;\x0a\x09\x09yourself.",
messageSends: ["receiver:", "new", "yourself"],
referencedClasses: ["HLCodeModel", "DoIt"]
}),
globals.HLCodeModelTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDoItDangerously",
protocol: 'testing',
fn: function (){
var self=this;
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@model"])._doItDangerously_("nothing");
$ctx2.sendIdx["doItDangerously:"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$Error());
self._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@model"])._doItDangerously_("4 + 3");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testDoItDangerously",{},globals.HLCodeModelTest)})},
args: [],
source: "testDoItDangerously\x0a\x09self should: [ model doItDangerously: 'nothing' ] raise: Error.\x0a\x09self shouldnt: [ model doItDangerously: '4 + 3' ] raise: Error.",
messageSends: ["should:raise:", "doItDangerously:", "shouldnt:raise:"],
referencedClasses: ["Error"]
}),
globals.HLCodeModelTest);



smalltalk.addClass('HLCodeWidgetTest', globals.TestCase, [], 'Helios-Workspace-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testKeyMap",
protocol: 'tests',
fn: function (){
var self=this;
function $HLCodeWidget(){return globals.HLCodeWidget||(typeof HLCodeWidget=="undefined"?nil:HLCodeWidget)}
function $HashedCollection(){return globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($HLCodeWidget())._pcKeyMap())._isKindOf_($HashedCollection());
$ctx1.sendIdx["isKindOf:"]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
self._assert_(_st(_st($HLCodeWidget())._macKeyMap())._isKindOf_($HashedCollection()));
return self}, function($ctx1) {$ctx1.fill(self,"testKeyMap",{},globals.HLCodeWidgetTest)})},
args: [],
source: "testKeyMap\x0a\x09\x22Key maps are a collection of associations.\x22\x0a\x09self assert: (HLCodeWidget pcKeyMap isKindOf: HashedCollection).\x0a\x09self assert: (HLCodeWidget macKeyMap isKindOf: HashedCollection)",
messageSends: ["assert:", "isKindOf:", "pcKeyMap", "macKeyMap"],
referencedClasses: ["HLCodeWidget", "HashedCollection"]
}),
globals.HLCodeWidgetTest);


});
