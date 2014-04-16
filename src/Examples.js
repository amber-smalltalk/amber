define("amber_core/Examples", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Web"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Examples');
smalltalk.packages["Examples"].transport = {"type":"amd","amdNamespace":"amber_core"};

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
