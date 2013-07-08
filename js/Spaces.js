smalltalk.addPackage('Spaces');
smalltalk.addClass('ObjectSpace', smalltalk.Object, ['frame'], 'Spaces');
smalltalk.ObjectSpace.comment="I am a connection to another Smalltalk environment.\x0aThe implementation creates an iframe on the same location as the window, and connect to the Amber environment.\x0a\x0a\x0a\x0a## Usage example:\x0a\x0a\x09| space |\x0a\x09\x0a\x09space := ObjectSpace new.\x0a\x09space do: [ smalltalk ] \x22Answers aSmalltalk\x22\x0a\x09(space do: [ smalltalk ]) == smalltalk \x22Answers false\x22\x0a\x09\x0a\x09space release \x22Remove the object space environment\x22";
smalltalk.addMethod(
smalltalk.method({
selector: "connectTo:",
category: 'initialization',
fn: function (aFrame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._release();
self["@frame"]=aFrame;
return self}, function($ctx1) {$ctx1.fill(self,"connectTo:",{aFrame:aFrame},smalltalk.ObjectSpace)})},
args: ["aFrame"],
source: "connectTo: aFrame\x0a\x09self release.\x0a\x09frame := aFrame",
messageSends: ["release"],
referencedClasses: []
}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
smalltalk.method({
selector: "create",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(window)._jQuery_("body"))._append_("<iframe style=\x22display: none;\x22></iframe>");
self["@frame"]=_st(_st(_st(window)._jQuery_("iframe"))._get())._last();
_st(_st(self["@frame"])._contentWindow())._location_(_st(window)._location());
return self}, function($ctx1) {$ctx1.fill(self,"create",{},smalltalk.ObjectSpace)})},
args: [],
source: "create\x0a\x09(window jQuery: 'body') append: '<iframe style=\x22display: none;\x22></iframe>'.\x0a\x09frame := (window jQuery: 'iframe') get last.\x0a\x09frame contentWindow location: window location",
messageSends: ["append:", "jQuery:", "last", "get", "location:", "location", "contentWindow"],
referencedClasses: []
}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
smalltalk.method({
selector: "destroy",
category: 'releasing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@frame"];
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
_st(_st(window)._jQuery_(self["@frame"]))._remove();
self._release();
return self}, function($ctx1) {$ctx1.fill(self,"destroy",{},smalltalk.ObjectSpace)})},
args: [],
source: "destroy\x0a\x09frame ifNil: [ ^ self ].\x0a\x09(window jQuery: frame) remove.\x0a\x0a\x09self release",
messageSends: ["ifNil:", "remove", "jQuery:", "release"],
referencedClasses: []
}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
category: 'evaluating',
fn: function (aBlock){
var self=this;
function $ObjectSpaceConnectionError(){return smalltalk.ObjectSpaceConnectionError||(typeof ObjectSpaceConnectionError=="undefined"?nil:ObjectSpaceConnectionError)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._isConnected();
if(! smalltalk.assert($1)){
$2=_st($ObjectSpaceConnectionError())._signal();
return $2;
};
$3=_st(_st(self["@frame"])._contentWindow())._eval_(_st("(".__comma(_st(aBlock)._compiledSource())).__comma(")()"));
return $3;
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.ObjectSpace)})},
args: ["aBlock"],
source: "do: aBlock\x0a\x09self isConnected ifFalse: [ ^ ObjectSpaceConnectionError signal ].\x0a\x09^ frame contentWindow eval: '(', aBlock compiledSource, ')()'",
messageSends: ["ifFalse:", "signal", "isConnected", "eval:", ",", "compiledSource", "contentWindow"],
referencedClasses: ["ObjectSpaceConnectionError"]
}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
smalltalk.method({
selector: "frame",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@frame"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"frame",{},smalltalk.ObjectSpace)})},
args: [],
source: "frame\x0a\x09^ frame",
messageSends: [],
referencedClasses: []
}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ObjectSpace.superclass.fn.prototype._initialize.apply(_st(self), []);
self._create();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ObjectSpace)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self create",
messageSends: ["initialize", "create"],
referencedClasses: []
}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
smalltalk.method({
selector: "isConnected",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._frame())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isConnected",{},smalltalk.ObjectSpace)})},
args: [],
source: "isConnected\x0a\x09^ self frame notNil",
messageSends: ["notNil", "frame"],
referencedClasses: []
}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
smalltalk.method({
selector: "release",
category: 'releasing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@frame"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"release",{},smalltalk.ObjectSpace)})},
args: [],
source: "release\x0a\x09frame := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
smalltalk.method({
selector: "whenReadyDo:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(window)._jQuery_(self["@frame"]))._bind_do_("load",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"whenReadyDo:",{aBlock:aBlock},smalltalk.ObjectSpace)})},
args: ["aBlock"],
source: "whenReadyDo: aBlock\x0a\x09(window jQuery: frame)\x0a\x09\x09bind: 'load'\x0a\x09\x09do: aBlock",
messageSends: ["bind:do:", "jQuery:"],
referencedClasses: []
}),
smalltalk.ObjectSpace);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aFrame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._basicNew();
_st($2)._connectTo_(aFrame);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aFrame:aFrame},smalltalk.ObjectSpace.klass)})},
args: ["aFrame"],
source: "on: aFrame\x0a\x09^ self basicNew\x0a\x09\x09connectTo: aFrame;\x0a\x09\x09yourself",
messageSends: ["connectTo:", "basicNew", "yourself"],
referencedClasses: []
}),
smalltalk.ObjectSpace.klass);


smalltalk.addClass('ObjectSpaceConnectionError', smalltalk.Error, [], 'Spaces');
smalltalk.addMethod(
smalltalk.method({
selector: "messageText",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "The ObjectSpace is not connected";
}, function($ctx1) {$ctx1.fill(self,"messageText",{},smalltalk.ObjectSpaceConnectionError)})},
args: [],
source: "messageText\x0a\x09^ 'The ObjectSpace is not connected'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ObjectSpaceConnectionError);



smalltalk.addClass('ObjectSpaceTest', smalltalk.TestCase, ['space'], 'Spaces');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
category: 'initialization',
fn: function (){
var self=this;
function $ObjectSpace(){return smalltalk.ObjectSpace||(typeof ObjectSpace=="undefined"?nil:ObjectSpace)}
return smalltalk.withContext(function($ctx1) { 
self["@space"]=_st($ObjectSpace())._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.ObjectSpaceTest)})},
args: [],
source: "setUp\x0a\x09space := ObjectSpace new",
messageSends: ["new"],
referencedClasses: ["ObjectSpace"]
}),
smalltalk.ObjectSpaceTest);

smalltalk.addMethod(
smalltalk.method({
selector: "tearDown",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@space"])._destroy();
return self}, function($ctx1) {$ctx1.fill(self,"tearDown",{},smalltalk.ObjectSpaceTest)})},
args: [],
source: "tearDown\x0a\x09space destroy",
messageSends: ["destroy"],
referencedClasses: []
}),
smalltalk.ObjectSpaceTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testConnection",
category: 'tests',
fn: function (){
var self=this;
function $ObjectSpaceConnectionError(){return smalltalk.ObjectSpaceConnectionError||(typeof ObjectSpaceConnectionError=="undefined"?nil:ObjectSpaceConnectionError)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@space"])._destroy();
self._deny_(_st(self["@space"])._isConnected());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@space"])._do_((function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$ObjectSpaceConnectionError());
return self}, function($ctx1) {$ctx1.fill(self,"testConnection",{},smalltalk.ObjectSpaceTest)})},
args: [],
source: "testConnection\x0a\x09space destroy.\x0a\x09self deny: space isConnected.\x0a\x09self should: [ space do: [] ] raise: ObjectSpaceConnectionError",
messageSends: ["destroy", "deny:", "isConnected", "should:raise:", "do:"],
referencedClasses: ["ObjectSpaceConnectionError"]
}),
smalltalk.ObjectSpaceTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCreate",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(self["@space"])._frame())._notNil());
self._assert_(_st(self["@space"])._isConnected());
return self}, function($ctx1) {$ctx1.fill(self,"testCreate",{},smalltalk.ObjectSpaceTest)})},
args: [],
source: "testCreate\x0a\x0a\x09self assert: space frame notNil.\x0a\x09self assert: space isConnected",
messageSends: ["assert:", "notNil", "frame", "isConnected"],
referencedClasses: []
}),
smalltalk.ObjectSpaceTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testEvaluation",
category: 'tests',
fn: function (){
var self=this;
var result;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@space"])._whenReadyDo_((function(){
return smalltalk.withContext(function($ctx2) {
result=_st(self["@space"])._do_((function(){
return smalltalk.withContext(function($ctx3) {
return smalltalk;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
result;
self._assert_equals_(_st(_st(result)._class())._name(),"Smalltalk");
self._deny_(_st(_st(result)._class()).__eq($Smalltalk()));
return self._deny_(_st(result).__eq_eq(smalltalk));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testEvaluation",{result:result},smalltalk.ObjectSpaceTest)})},
args: [],
source: "testEvaluation\x0a\x09| result |\x0a\x0a\x09space whenReadyDo: [\x0a\x09\x09result := space do: [ smalltalk ].\x0a\x0a\x09\x09self assert: result class name equals: 'Smalltalk'.\x0a\x09\x09self deny: result class = Smalltalk.\x0a\x09\x09self deny: result == smalltalk ]",
messageSends: ["whenReadyDo:", "do:", "assert:equals:", "name", "class", "deny:", "=", "=="],
referencedClasses: ["Smalltalk"]
}),
smalltalk.ObjectSpaceTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRelease",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._deny_(_st(_st(self["@space"])._frame())._isNil());
_st(self["@space"])._release();
self._assert_(_st(_st(self["@space"])._frame())._isNil());
return self}, function($ctx1) {$ctx1.fill(self,"testRelease",{},smalltalk.ObjectSpaceTest)})},
args: [],
source: "testRelease\x0a\x0a\x09self deny: space frame isNil.\x0a\x0a\x09space release.\x0a\x09\x0a\x09self assert: space frame isNil",
messageSends: ["deny:", "isNil", "frame", "release", "assert:"],
referencedClasses: []
}),
smalltalk.ObjectSpaceTest);



