smalltalk.addPackage('Spaces');
smalltalk.addClass('ObjectSpace', smalltalk.Object, ['frame'], 'Spaces');
smalltalk.addMethod(
"_connectTo_",
smalltalk.method({
selector: "connectTo:",
fn: function (aFrame){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._release();
self["@frame"]=aFrame;
return self}, function($ctx1) {$ctx1.fill(self,"connectTo:",{aFrame:aFrame},smalltalk.ObjectSpace)})},
messageSends: ["release"]}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
"_create",
smalltalk.method({
selector: "create",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(window)._jQuery_("body"))._append_("<iframe style=\x22display: none;\x22></iframe>");
self["@frame"]=_st(_st(_st(window)._jQuery_("iframe"))._get())._last();
_st(_st(self["@frame"])._contentWindow())._location_(_st(window)._location());
return self}, function($ctx1) {$ctx1.fill(self,"create",{},smalltalk.ObjectSpace)})},
messageSends: ["append:", "jQuery:", "last", "get", "location:", "location", "contentWindow"]}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
"_destroy",
smalltalk.method({
selector: "destroy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self["@frame"];
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
_st(_st(window)._jQuery_(self["@frame"]))._remove();
_st(self)._release();
return self}, function($ctx1) {$ctx1.fill(self,"destroy",{},smalltalk.ObjectSpace)})},
messageSends: ["ifNil:", "remove", "jQuery:", "release"]}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=_st(self)._isConnected();
if(! smalltalk.assert($1)){
$2=_st((smalltalk.ObjectSpaceConnectionError || ObjectSpaceConnectionError))._signal();
return $2;
};
$3=_st(_st(self["@frame"])._contentWindow())._eval_(_st(_st("(").__comma(_st(aBlock)._compiledSource())).__comma(")()"));
return $3;
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.ObjectSpace)})},
messageSends: ["ifFalse:", "signal", "isConnected", "eval:", ",", "compiledSource", "contentWindow"]}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
"_frame",
smalltalk.method({
selector: "frame",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@frame"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"frame",{},smalltalk.ObjectSpace)})},
messageSends: []}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
_st(self)._create();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ObjectSpace)})},
messageSends: ["initialize", "create"]}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
"_isConnected",
smalltalk.method({
selector: "isConnected",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._frame())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isConnected",{},smalltalk.ObjectSpace)})},
messageSends: ["notNil", "frame"]}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
"_release",
smalltalk.method({
selector: "release",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@frame"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"release",{},smalltalk.ObjectSpace)})},
messageSends: []}),
smalltalk.ObjectSpace);

smalltalk.addMethod(
"_whenReadyDo_",
smalltalk.method({
selector: "whenReadyDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(window)._jQuery_(self["@frame"]))._bind_do_("load",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"whenReadyDo:",{aBlock:aBlock},smalltalk.ObjectSpace)})},
messageSends: ["bind:do:", "jQuery:"]}),
smalltalk.ObjectSpace);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aFrame){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._basicNew();
_st($2)._connectTo_(aFrame);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aFrame:aFrame},smalltalk.ObjectSpace.klass)})},
messageSends: ["connectTo:", "basicNew", "yourself"]}),
smalltalk.ObjectSpace.klass);


smalltalk.addClass('ObjectSpaceConnectionError', smalltalk.Error, [], 'Spaces');
smalltalk.addMethod(
"_messageText",
smalltalk.method({
selector: "messageText",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "The ObjectSpace is not connected";
}, function($ctx1) {$ctx1.fill(self,"messageText",{},smalltalk.ObjectSpaceConnectionError)})},
messageSends: []}),
smalltalk.ObjectSpaceConnectionError);



smalltalk.addClass('ObjectSpaceTest', smalltalk.TestCase, ['space'], 'Spaces');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@space"]=_st((smalltalk.ObjectSpace || ObjectSpace))._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.ObjectSpaceTest)})},
messageSends: ["new"]}),
smalltalk.ObjectSpaceTest);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@space"])._destroy();
return self}, function($ctx1) {$ctx1.fill(self,"tearDown",{},smalltalk.ObjectSpaceTest)})},
messageSends: ["destroy"]}),
smalltalk.ObjectSpaceTest);

smalltalk.addMethod(
"_testConnection",
smalltalk.method({
selector: "testConnection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@space"])._destroy();
_st(self)._deny_(_st(self["@space"])._isConnected());
_st(self)._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self["@space"])._do_((function(){
return smalltalk.withContext(function($ctx3) {}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(smalltalk.ObjectSpaceConnectionError || ObjectSpaceConnectionError));
return self}, function($ctx1) {$ctx1.fill(self,"testConnection",{},smalltalk.ObjectSpaceTest)})},
messageSends: ["destroy", "deny:", "isConnected", "should:raise:", "do:"]}),
smalltalk.ObjectSpaceTest);

smalltalk.addMethod(
"_testCreate",
smalltalk.method({
selector: "testCreate",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_(_st(_st(self["@space"])._frame())._notNil());
_st(self)._assert_(_st(self["@space"])._isConnected());
return self}, function($ctx1) {$ctx1.fill(self,"testCreate",{},smalltalk.ObjectSpaceTest)})},
messageSends: ["assert:", "notNil", "frame", "isConnected"]}),
smalltalk.ObjectSpaceTest);

smalltalk.addMethod(
"_testEvaluation",
smalltalk.method({
selector: "testEvaluation",
fn: function (){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { _st(self["@space"])._whenReadyDo_((function(){
return smalltalk.withContext(function($ctx2) {result=_st(self["@space"])._do_((function(){
return smalltalk.withContext(function($ctx3) {return smalltalk;
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
result;
_st(self)._assert_equals_(_st(_st(result)._class())._name(),"Smalltalk");
_st(self)._deny_(_st(_st(result)._class()).__eq((smalltalk.Smalltalk || Smalltalk)));
return _st(self)._deny_(_st(result).__eq_eq(smalltalk));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testEvaluation",{result:result},smalltalk.ObjectSpaceTest)})},
messageSends: ["whenReadyDo:", "do:", "assert:equals:", "name", "class", "deny:", "=", "=="]}),
smalltalk.ObjectSpaceTest);

smalltalk.addMethod(
"_testRelease",
smalltalk.method({
selector: "testRelease",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._deny_(_st(_st(self["@space"])._frame())._isNil());
_st(self["@space"])._release();
_st(self)._assert_(_st(_st(self["@space"])._frame())._isNil());
return self}, function($ctx1) {$ctx1.fill(self,"testRelease",{},smalltalk.ObjectSpaceTest)})},
messageSends: ["deny:", "isNil", "frame", "release", "assert:"]}),
smalltalk.ObjectSpaceTest);



