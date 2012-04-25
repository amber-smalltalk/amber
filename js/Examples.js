smalltalk.addPackage('Examples', {});
smalltalk.addClass('Counter', smalltalk.Widget, ['count', 'header'], 'Examples');
smalltalk.Counter.comment=unescape('This%20is%20a%20trivial%20Widget%20example%20mimicking%20the%20classic%20Counter%20example%20in%20Seaside.%20%0AIn%20order%20to%20play%20with%20it%2C%20just%20select%20the%20doit%20below%20and%20press%20the%20Do%20it%20button%20in%20the%20far%20right%20corner.%0AThen%20take%20a%20look%20in%20the%20HTML%20document%20above%20the%20IDE.%0A%0A%20%20%20%20%20%20%20%20Counter%20new%20appendToJQuery%3A%20%27body%27%20asJQuery')
smalltalk.addMethod(
unescape('_decrease'),
smalltalk.method({
selector: unescape('decrease'),
category: 'actions',
fn: function (){
var self=this;
(self['@count']=((($receiver = self['@count']).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])));
smalltalk.send(self['@header'], "_contents_", [(function(html){return smalltalk.send(html, "_with_", [smalltalk.send(self['@count'], "_asString", [])]);})]);
return self;},
args: [],
source: unescape('decrease%0A%20%20%20%20count%20%3A%3D%20count%20-%201.%0A%20%20%20%20header%20contents%3A%20%5B%3Ahtml%20%7C%20html%20with%3A%20count%20asString%5D'),
messageSends: [unescape("-"), "contents:", "with:", "asString"],
referencedClasses: []
}),
smalltalk.Counter);

smalltalk.addMethod(
unescape('_increase'),
smalltalk.method({
selector: unescape('increase'),
category: 'actions',
fn: function (){
var self=this;
(self['@count']=((($receiver = self['@count']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));
smalltalk.send(self['@header'], "_contents_", [(function(html){return smalltalk.send(html, "_with_", [smalltalk.send(self['@count'], "_asString", [])]);})]);
return self;},
args: [],
source: unescape('increase%0A%20%20%20%20count%20%3A%3D%20count%20+%201.%0A%20%20%20%20header%20contents%3A%20%5B%3Ahtml%20%7C%20html%20with%3A%20count%20asString%5D'),
messageSends: [unescape("+"), "contents:", "with:", "asString"],
referencedClasses: []
}),
smalltalk.Counter);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
(self['@count']=(0));
return self;},
args: [],
source: unescape('initialize%0A%20%20%20%20super%20initialize.%0A%20%20%20%20count%20%3A%3D%200'),
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Counter);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(self['@header']=(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(self['@count'], "_asString", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_h1", [])));
(function($rec){smalltalk.send($rec, "_with_", [unescape("++")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_increase", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", [unescape("--")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_decrease", []);})]);})(smalltalk.send(html, "_button", []));
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%20%20%20%20header%20%3A%3D%20html%20h1%20%0A%09with%3A%20count%20asString%3B%0A%09yourself.%0A%20%20%20%20html%20button%0A%09with%3A%20%27++%27%3B%0A%09onClick%3A%20%5Bself%20increase%5D.%0A%20%20%20%20html%20button%0A%09with%3A%20%27--%27%3B%0A%09onClick%3A%20%5Bself%20decrease%5D'),
messageSends: ["with:", "asString", "yourself", "h1", "onClick:", "increase", "button", "decrease"],
referencedClasses: []
}),
smalltalk.Counter);


smalltalk.addMethod(
unescape('_tryExample'),
smalltalk.method({
selector: unescape('tryExample'),
category: 'example',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_new", []), "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;},
args: [],
source: unescape('tryExample%0A%09%22In%20order%20to%20play%20with%20the%20Counter%2C%20just%20select%20the%0A%09doit%20below%20and%20press%20the%20Do%20it%20button.%20Then%20take%20a%0A%09look%20in%20the%20HTML%20document%20above%20the%20IDE.%22%0A%0A%09%22Counter%20tryExample%22%0A%20%20%20%20%20%20%20%20self%20new%20appendToJQuery%3A%20%27body%27%20asJQuery%20'),
messageSends: ["appendToJQuery:", "new", "asJQuery"],
referencedClasses: []
}),
smalltalk.Counter.klass);


