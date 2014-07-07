define("amber_core/Examples", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Web"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('Examples');
smalltalk.packages["Examples"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('AH', globals.Object, [], 'Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "asyncBlockHalt",
protocol: 'async halting',
fn: function (){
var self=this;
var $thisMethod=arguments.callee.thisMethod;
return smalltalk.withContext(function($ctx1) { 
_st(self._createBlock())._valueWithTimeout_((200));
return self}, function($ctx1) {$ctx1.fill(self,"asyncBlockHalt",{},globals.AH,$thisMethod)})},
args: [],
source: "asyncBlockHalt\x0a\x09\x22\x22\x0a\x09self createBlock valueWithTimeout:200",
messageSends: ["valueWithTimeout:", "createBlock"],
referencedClasses: []
}),
globals.AH);

smalltalk.addMethod(
smalltalk.method({
selector: "create2LevelBlock",
protocol: 'async halting',
fn: function (){
var self=this;
var $thisMethod=arguments.callee.thisMethod;
var outerLocal;
return smalltalk.withContext(function($ctx1) { 
var $1;
outerLocal="I am not in your call stack but in your outer context.";
$1=(function(){
var c;
return smalltalk.withContext(function($ctx2) {
return _st((function(){
var cc;
return smalltalk.withContext(function($ctx3) {
c=(1);
c;
cc=_st(c).__star((2));
cc;
self._halt();
c=_st(c).__plus((5));
return c;
}, function($ctx3) {$ctx3.fillBlock({cc:cc},$ctx2,2)})}))._valueWithTimeout_((200));
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)})});
return $1;
}, function($ctx1) {$ctx1.fill(self,"create2LevelBlock",{outerLocal:outerLocal},globals.AH,$thisMethod)})},
args: [],
source: "create2LevelBlock\x0a\x09\x22\x22\x0a\x09|outerLocal|\x0a\x09outerLocal:='I am not in your call stack but in your outer context.'.\x0a\x09^[|c|\x0a\x09\x09[|cc|\x0a\x09\x09\x09c:=1.\x0a\x09\x09\x09cc:=c*2.\x0a\x09\x09\x09self halt.\x0a\x09\x09\x09c:=c+5.\x0a\x09\x09] valueWithTimeout:200\x0a\x09]",
messageSends: ["valueWithTimeout:", "*", "halt", "+"],
referencedClasses: []
}),
globals.AH);

smalltalk.addMethod(
smalltalk.method({
selector: "createBlock",
protocol: 'async halting',
fn: function (){
var self=this;
var $thisMethod=arguments.callee.thisMethod;
var outerLocal;
return smalltalk.withContext(function($ctx1) { 
var $1;
outerLocal="I am not in your call stack but in your outer context.";
$1=(function(){
var c;
return smalltalk.withContext(function($ctx2) {
c=(1);
c;
self._halt();
c=_st(c).__plus((5));
return c;
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)})});
return $1;
}, function($ctx1) {$ctx1.fill(self,"createBlock",{outerLocal:outerLocal},globals.AH,$thisMethod)})},
args: [],
source: "createBlock\x0a\x09\x22\x22\x0a\x09|outerLocal|\x0a\x09outerLocal:='I am not in your call stack but in your outer context.'.\x0a\x09^ [|c|\x0a\x09\x09c:=1.\x0a\x09\x09self halt.\x0a\x09\x09c:=c+5.\x0a\x09  ]",
messageSends: ["halt", "+"],
referencedClasses: []
}),
globals.AH);

smalltalk.addMethod(
smalltalk.method({
selector: "localAsyncBlockHalt",
protocol: 'async halting',
fn: function (){
var self=this;
var $thisMethod=arguments.callee.thisMethod;
var outerLocal;
return smalltalk.withContext(function($ctx1) { 
outerLocal="I am not in your call stack but in your outer context.";
_st((function(){
var c;
return smalltalk.withContext(function($ctx2) {
c=(1);
c;
self._halt();
c=_st(c).__plus((5));
return c;
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)})}))._valueWithTimeout_((200));
return self}, function($ctx1) {$ctx1.fill(self,"localAsyncBlockHalt",{outerLocal:outerLocal},globals.AH,$thisMethod)})},
args: [],
source: "localAsyncBlockHalt\x0a\x09\x22\x22\x0a\x09|outerLocal|\x0a\x09outerLocal:='I am not in your call stack but in your outer context.'.\x0a\x09[|c|\x0a\x09\x09c:=1.\x0a\x09\x09self halt.\x0a\x09\x09c:=c+5] valueWithTimeout:200",
messageSends: ["valueWithTimeout:", "halt", "+"],
referencedClasses: []
}),
globals.AH);

smalltalk.addMethod(
smalltalk.method({
selector: "localBlockHalt",
protocol: 'async halting',
fn: function (){
var self=this;
var $thisMethod=arguments.callee.thisMethod;
var theBlock;
return smalltalk.withContext(function($ctx1) { 
theBlock=self._createBlock();
_st(theBlock)._value();
return self}, function($ctx1) {$ctx1.fill(self,"localBlockHalt",{theBlock:theBlock},globals.AH,$thisMethod)})},
args: [],
source: "localBlockHalt\x0a\x09\x22\x22\x0a\x09|theBlock|\x0a\x0a\x09theBlock:=self createBlock.\x0a\x09\x0a\x09theBlock value",
messageSends: ["createBlock", "value"],
referencedClasses: []
}),
globals.AH);

smalltalk.addMethod(
smalltalk.method({
selector: "twoLevelAsyncBlockHalt",
protocol: 'async halting',
fn: function (){
var self=this;
var $thisMethod=arguments.callee.thisMethod;
return smalltalk.withContext(function($ctx1) { 
_st(self._create2LevelBlock())._valueWithTimeout_((200));
return self}, function($ctx1) {$ctx1.fill(self,"twoLevelAsyncBlockHalt",{},globals.AH,$thisMethod)})},
args: [],
source: "twoLevelAsyncBlockHalt\x0a\x09\x22\x22\x0a\x09self create2LevelBlock valueWithTimeout:200",
messageSends: ["valueWithTimeout:", "create2LevelBlock"],
referencedClasses: []
}),
globals.AH);



smalltalk.addClass('Counter', globals.Widget, ['count', 'header'], 'Examples');
globals.Counter.comment="This is a trivial Widget example mimicking the classic Counter example in Seaside.\x0aIn order to play with it, just evaluate the doit below in a workspace.\x0aThen take a look in the HTML document above the IDE.\x0a\x0a\x09\x09Counter tryExample";
smalltalk.addMethod(
smalltalk.method({
selector: "decrease",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@count"]=_st(self["@count"]).__minus((1));
_st(self["@header"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(html)._with_(_st(self["@count"])._asString());
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"decrease",{},globals.Counter)})},
args: [],
source: "decrease\x0a\x09count := count - 1.\x0a\x09header contents: [ :html | html with: count asString ]",
messageSends: ["-", "contents:", "with:", "asString"],
referencedClasses: []
}),
globals.Counter);

smalltalk.addMethod(
smalltalk.method({
selector: "increase",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@count"]=_st(self["@count"]).__plus((1));
_st(self["@header"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(html)._with_(_st(self["@count"])._asString());
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"increase",{},globals.Counter)})},
args: [],
source: "increase\x0a\x09count := count + 1.\x0a\x09header contents: [ :html | html with: count asString ]",
messageSends: ["+", "contents:", "with:", "asString"],
referencedClasses: []
}),
globals.Counter);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.Counter.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@count"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.Counter)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09count := 0",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.Counter);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
$1=_st(html)._h1();
_st($1)._with_(_st(self["@count"])._asString());
$ctx1.sendIdx["with:"]=1;
$2=_st($1)._yourself();
self["@header"]=$2;
$3=_st(html)._button();
$ctx1.sendIdx["button"]=1;
_st($3)._with_("++");
$ctx1.sendIdx["with:"]=2;
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._increase();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["onClick:"]=1;
$5=_st(html)._button();
_st($5)._with_("--");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._decrease();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.Counter)})},
args: ["html"],
source: "renderOn: html\x0a\x09header := html h1\x0a\x09\x09with: count asString;\x0a\x09\x09yourself.\x0a\x09html button\x0a\x09\x09with: '++';\x0a\x09\x09onClick: [ self increase ].\x0a\x09html button\x0a\x09\x09with: '--';\x0a\x09\x09onClick: [ self decrease ]",
messageSends: ["with:", "h1", "asString", "yourself", "button", "onClick:", "increase", "decrease"],
referencedClasses: []
}),
globals.Counter);


smalltalk.addMethod(
smalltalk.method({
selector: "tryExample",
protocol: 'example',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._new())._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"tryExample",{},globals.Counter.klass)})},
args: [],
source: "tryExample\x0a\x09\x22In order to play with the Counter, just select the\x0a\x09doit below and press the Do it button. Then take a\x0a\x09look in the HTML document above the IDE.\x22\x0a\x0a\x09\x22Counter tryExample\x22\x0a\x09\x09self new appendToJQuery: 'body' asJQuery",
messageSends: ["appendToJQuery:", "new", "asJQuery"],
referencedClasses: []
}),
globals.Counter.klass);

});
