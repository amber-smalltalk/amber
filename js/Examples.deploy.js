smalltalk.addPackage('Examples', {});
smalltalk.addClass('Counter', smalltalk.Widget, ['count', 'header'], 'Examples');
smalltalk.addMethod(
"_decrease",
smalltalk.method({
selector: "decrease",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { self["@count"]=_st(self["@count"]).__minus((1));
_st(self["@header"])._contents_((function(html){
return _st(html)._with_(_st(self["@count"])._asString());
}));
return self}, self, "decrease", [], smalltalk.Counter)}
}),
smalltalk.Counter);

smalltalk.addMethod(
"_increase",
smalltalk.method({
selector: "increase",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { self["@count"]=_st(self["@count"]).__plus((1));
_st(self["@header"])._contents_((function(html){
return _st(html)._with_(_st(self["@count"])._asString());
}));
return self}, self, "increase", [], smalltalk.Counter)}
}),
smalltalk.Counter);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { smalltalk.Widget.fn.prototype._initialize.apply(_st(self), []);
self["@count"]=(0);
return self}, self, "initialize", [], smalltalk.Counter)}
}),
smalltalk.Counter);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx) { var $1,$2,$3,$4,$5,$6;
$1=_st(html)._h1();
_st($1)._with_(_st(self["@count"])._asString());
$2=_st($1)._yourself();
self["@header"]=$2;
$3=_st(html)._button();
_st($3)._with_("++");
$4=_st($3)._onClick_((function(){
return _st(self)._increase();
}));
$5=_st(html)._button();
_st($5)._with_("--");
$6=_st($5)._onClick_((function(){
return _st(self)._decrease();
}));
return self}, self, "renderOn:", [html], smalltalk.Counter)}
}),
smalltalk.Counter);


smalltalk.addMethod(
"_tryExample",
smalltalk.method({
selector: "tryExample",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(_st(self)._new())._appendToJQuery_(_st("body")._asJQuery());
return self}, self, "tryExample", [], smalltalk.Counter.klass)}
}),
smalltalk.Counter.klass);


