define("amber_core/IDE-Tests", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/SUnit"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('IDE-Tests');
smalltalk.packages["IDE-Tests"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('IDEBrowserTest', globals.TestCase, ['originalBrowser'], 'IDE-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
protocol: 'tests',
fn: function (){
var self=this;
function $Browser(){return globals.Browser||(typeof Browser=="undefined"?nil:Browser)}
function $IDEBrowser(){return globals.IDEBrowser||(typeof IDEBrowser=="undefined"?nil:IDEBrowser)}
return smalltalk.withContext(function($ctx1) { 
self["@originalBrowser"]=_st($Browser())._current();
_st($Browser())._register_($IDEBrowser());
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},globals.IDEBrowserTest)})},
args: [],
source: "setUp\x0a\x09originalBrowser := Browser current.\x0a\x09Browser register: IDEBrowser.",
messageSends: ["current", "register:"],
referencedClasses: ["Browser", "IDEBrowser"]
}),
globals.IDEBrowserTest);

smalltalk.addMethod(
smalltalk.method({
selector: "tearDown",
protocol: 'tests',
fn: function (){
var self=this;
function $Browser(){return globals.Browser||(typeof Browser=="undefined"?nil:Browser)}
return smalltalk.withContext(function($ctx1) { 
_st($Browser())._register_(self["@originalBrowser"]);
return self}, function($ctx1) {$ctx1.fill(self,"tearDown",{},globals.IDEBrowserTest)})},
args: [],
source: "tearDown\x0a\x09Browser register: originalBrowser",
messageSends: ["register:"],
referencedClasses: ["Browser"]
}),
globals.IDEBrowserTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testOpenOn",
protocol: 'tests',
fn: function (){
var self=this;
function $Browser(){return globals.Browser||(typeof Browser=="undefined"?nil:Browser)}
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
function $Number(){return globals.Number||(typeof Number=="undefined"?nil:Number)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st($Browser())._openOn_((3));
$ctx2.sendIdx["openOn:"]=1;
return _st($1)._close();
$ctx2.sendIdx["close"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$Error());
$ctx1.sendIdx["shouldnt:raise:"]=1;
self._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st($Browser())._openOn_($Number()))._close();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testOpenOn",{},globals.IDEBrowserTest)})},
args: [],
source: "testOpenOn\x0a\x09\x22IDEBrowser should accept an instance or class.\x0a\x09When accepting an instance, IDEBrowser should browse its class.\x0a\x09When accepting a class, IDEBrowser should inspect it.\x22\x0a\x09self shouldnt: [ (Browser openOn: 3) close ] raise: Error.\x0a\x09self shouldnt: [ (Browser openOn: Number) close ] raise: Error.",
messageSends: ["shouldnt:raise:", "close", "openOn:"],
referencedClasses: ["Browser", "Error", "Number"]
}),
globals.IDEBrowserTest);


});
