smalltalk.addPackage('Examples', {});
smalltalk.addClass('Counter', smalltalk.Widget, ['count', 'header'], 'Examples');
smalltalk.Counter.comment="This is a trivial Widget example mimicking the classic Counter example in Seaside. \x0aIn order to play with it, just select the doit below and press the Do it button in the far right corner.\x0aThen take a look in the HTML document above the IDE.\x0a\x0a        Counter new appendToJQuery: 'body' asJQuery"
smalltalk.addMethod(
"_decrease",
smalltalk.method({
selector: "decrease",
category: 'actions',
fn: function Counter_decrease(){
var self=this;
(self['@count']=((($receiver = self['@count']).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])));
smalltalk.send(self['@header'], "_contents_", [(function(html){return smalltalk.send(html, "_with_", [smalltalk.send(self['@count'], "_asString", [])]);})]);
return self;},
args: [],
source: "decrease\x0a    count := count - 1.\x0a    header contents: [:html | html with: count asString]",
messageSends: ["-", "contents:", "with:", "asString"],
referencedClasses: []
}),
smalltalk.Counter);

smalltalk.addMethod(
"_increase",
smalltalk.method({
selector: "increase",
category: 'actions',
fn: function Counter_increase(){
var self=this;
(self['@count']=((($receiver = self['@count']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));
smalltalk.send(self['@header'], "_contents_", [(function(html){return smalltalk.send(html, "_with_", [smalltalk.send(self['@count'], "_asString", [])]);})]);
return self;},
args: [],
source: "increase\x0a    count := count + 1.\x0a    header contents: [:html | html with: count asString]",
messageSends: ["+", "contents:", "with:", "asString"],
referencedClasses: []
}),
smalltalk.Counter);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function Counter_initialize(){
var self=this;
smalltalk.send(self, "_initialize", [], Counter_initialize.method.methodClass.superclass || nil);
(self['@count']=(0));
return self;},
args: [],
source: "initialize\x0a    super initialize.\x0a    count := 0",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Counter);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function Counter_renderOn_(html){
var self=this;
(self['@header']=(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(self['@count'], "_asString", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_h1", [])));
(function($rec){smalltalk.send($rec, "_with_", ["++"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_increase", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["--"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_decrease", []);})]);})(smalltalk.send(html, "_button", []));
return self;},
args: ["html"],
source: "renderOn: html\x0a    header := html h1 \x0a\x09with: count asString;\x0a\x09yourself.\x0a    html button\x0a\x09with: '++';\x0a\x09onClick: [self increase].\x0a    html button\x0a\x09with: '--';\x0a\x09onClick: [self decrease]",
messageSends: ["with:", "asString", "yourself", "h1", "onClick:", "increase", "button", "decrease"],
referencedClasses: []
}),
smalltalk.Counter);


smalltalk.addMethod(
"_tryExample",
smalltalk.method({
selector: "tryExample",
category: 'example',
fn: function Counter_class_tryExample(){
var self=this;
smalltalk.send(smalltalk.send(self, "_new", []), "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;},
args: [],
source: "tryExample\x0a\x09\x22In order to play with the Counter, just select the\x0a\x09doit below and press the Do it button. Then take a\x0a\x09look in the HTML document above the IDE.\x22\x0a\x0a\x09\x22Counter tryExample\x22\x0a        self new appendToJQuery: 'body' asJQuery",
messageSends: ["appendToJQuery:", "new", "asJQuery"],
referencedClasses: []
}),
smalltalk.Counter.klass);


