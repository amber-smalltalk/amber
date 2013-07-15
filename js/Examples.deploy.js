smalltalk.addPackage('Examples');
smalltalk.addClass('Counter', smalltalk.Widget, ['count', 'header'], 'Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "decrease",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@count"]=_st(self["@count"]).__minus((1));
_st(self["@header"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(html)._with_(_st(self["@count"])._asString());
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"decrease",{},smalltalk.Counter)})},
messageSends: ["-", "contents:", "with:", "asString"]}),
smalltalk.Counter);

smalltalk.addMethod(
smalltalk.method({
selector: "increase",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@count"]=_st(self["@count"]).__plus((1));
_st(self["@header"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(html)._with_(_st(self["@count"])._asString());
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"increase",{},smalltalk.Counter)})},
messageSends: ["+", "contents:", "with:", "asString"]}),
smalltalk.Counter);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Counter.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@count"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Counter)})},
messageSends: ["initialize"]}),
smalltalk.Counter);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
$1=_st(html)._h1();
_st($1)._with_(_st(self["@count"])._asString());
$2=_st($1)._yourself();
self["@header"]=$2;
$3=_st(html)._button();
_st($3)._with_("++");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._increase();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$5=_st(html)._button();
_st($5)._with_("--");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._decrease();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.Counter)})},
messageSends: ["with:", "asString", "h1", "yourself", "button", "onClick:", "increase", "decrease"]}),
smalltalk.Counter);


smalltalk.addMethod(
smalltalk.method({
selector: "tryExample",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._new())._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"tryExample",{},smalltalk.Counter.klass)})},
messageSends: ["appendToJQuery:", "asJQuery", "new"]}),
smalltalk.Counter.klass);


