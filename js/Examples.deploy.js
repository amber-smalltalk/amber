smalltalk.addPackage('Examples', {});
smalltalk.addClass('Counter', smalltalk.Widget, ['count', 'header'], 'Examples');
smalltalk.addMethod(
unescape('_decrease'),
smalltalk.method({
selector: unescape('decrease'),
fn: function (){
var self=this;
(self['@count']=((($receiver = self['@count']).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])));
smalltalk.send(self['@header'], "_contents_", [(function(html){return smalltalk.send(html, "_with_", [smalltalk.send(self['@count'], "_asString", [])]);})]);
return self;}
}),
smalltalk.Counter);

smalltalk.addMethod(
unescape('_increase'),
smalltalk.method({
selector: unescape('increase'),
fn: function (){
var self=this;
(self['@count']=((($receiver = self['@count']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));
smalltalk.send(self['@header'], "_contents_", [(function(html){return smalltalk.send(html, "_with_", [smalltalk.send(self['@count'], "_asString", [])]);})]);
return self;}
}),
smalltalk.Counter);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
(self['@count']=(0));
return self;}
}),
smalltalk.Counter);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(self['@header']=(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(self['@count'], "_asString", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_h1", [])));
(function($rec){smalltalk.send($rec, "_with_", [unescape("++")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_increase", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", [unescape("--")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_decrease", []);})]);})(smalltalk.send(html, "_button", []));
return self;}
}),
smalltalk.Counter);



