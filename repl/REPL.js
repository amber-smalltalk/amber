smalltalk.addPackage('REPL', {});
smalltalk.addClass('Repl', smalltalk.Object, ['readline', 'interface', 'util'], 'REPL');
smalltalk.addMethod(
unescape('_prompt'),
smalltalk.method({
selector: unescape('prompt'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("amber%20%3E%3E%20");
return self;},
args: [],
source: unescape('prompt%0A%09%5E%27amber%20%3E%3E%20%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
unescape('_createInterface'),
smalltalk.method({
selector: unescape('createInterface'),
category: 'actions',
fn: function (){
var self=this;
self['@interface']=smalltalk.send(self['@readline'], "_createInterface_stdout_", [smalltalk.send((typeof process == 'undefined' ? nil : process), "_stdin", []), smalltalk.send((typeof process == 'undefined' ? nil : process), "_stdout", [])]);
smalltalk.send(self['@interface'], "_on_do_", ["line", (function(buffer){return smalltalk.send(self, "_eval_", [buffer]);})]);
smalltalk.send(self['@interface'], "_on_do_", ["close", (function(){return smalltalk.send(self, "_close", []);})]);
smalltalk.send(self, "_setPrompt", []);
smalltalk.send(self['@interface'], "_prompt", []);
return self;},
args: [],
source: unescape('createInterface%0A%09%22No%20completion%20for%20now%22%0A%09interface%20%3A%3D%20readline%20createInterface%3A%20process%20stdin%20stdout%3A%20process%20stdout.%0A%09interface%20on%3A%20%27line%27%20do%3A%20%5B%3Abuffer%20%20%7C%20self%20eval%3A%20buffer%5D.%0A%09interface%20on%3A%20%27close%27%20do%3A%20%5Bself%20close%5D.%0A%09self%20setPrompt.%0A%09interface%20prompt'),
messageSends: ["createInterface:stdout:", "stdin", "stdout", "on:do:", "eval:", "close", "setPrompt", "prompt"],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
unescape('_setPrompt'),
smalltalk.method({
selector: unescape('setPrompt'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self['@interface'], "_setPrompt_", [smalltalk.send(self, "_prompt", [])]);
return self;},
args: [],
source: unescape('setPrompt%0A%09interface%20setPrompt%3A%20self%20prompt'),
messageSends: ["setPrompt:", "prompt"],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
unescape('_close'),
smalltalk.method({
selector: unescape('close'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((typeof process == 'undefined' ? nil : process), "_stdin", []), "_destroy", []);
return self;},
args: [],
source: unescape('close%0A%09process%20stdin%20destroy'),
messageSends: ["destroy", "stdin"],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
unescape('_eval_'),
smalltalk.method({
selector: unescape('eval%3A'),
category: 'actions',
fn: function (buffer){
var self=this;
var result=nil;
((($receiver = smalltalk.send(buffer, "_isEmpty", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_try_catch_", [(function(){result=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_loadExpression_", [buffer]);return smalltalk.send((smalltalk.Transcript || Transcript), "_show_", [result]);}), (function(e){return ((($receiver = smalltalk.send(e, "_isSmalltalkError", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send((smalltalk.ErrorHandler || ErrorHandler), "_new", []), "_handleError_", [e]);})() : (function(){return smalltalk.send(smalltalk.send((typeof process == 'undefined' ? nil : process), "_stdout", []), "_write_", [smalltalk.send(e, "_jsStack", [])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send((smalltalk.ErrorHandler || ErrorHandler), "_new", []), "_handleError_", [e]);}), (function(){return smalltalk.send(smalltalk.send((typeof process == 'undefined' ? nil : process), "_stdout", []), "_write_", [smalltalk.send(e, "_jsStack", [])]);})]));})]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_try_catch_", [(function(){result=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_loadExpression_", [buffer]);return smalltalk.send((smalltalk.Transcript || Transcript), "_show_", [result]);}), (function(e){return ((($receiver = smalltalk.send(e, "_isSmalltalkError", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send((smalltalk.ErrorHandler || ErrorHandler), "_new", []), "_handleError_", [e]);})() : (function(){return smalltalk.send(smalltalk.send((typeof process == 'undefined' ? nil : process), "_stdout", []), "_write_", [smalltalk.send(e, "_jsStack", [])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send((smalltalk.ErrorHandler || ErrorHandler), "_new", []), "_handleError_", [e]);}), (function(){return smalltalk.send(smalltalk.send((typeof process == 'undefined' ? nil : process), "_stdout", []), "_write_", [smalltalk.send(e, "_jsStack", [])]);})]));})]);})]));
smalltalk.send(self['@interface'], "_prompt", []);
return self;},
args: ["buffer"],
source: unescape('eval%3A%20buffer%0A%09%7C%20result%20%7C%0A%09buffer%20isEmpty%20ifFalse%3A%20%5B%0A%09%09self%20try%3A%20%5B%0A%09%09%09result%20%3A%3D%20Compiler%20new%20loadExpression%3A%20buffer.%0A%09%09%09Transcript%20show%3A%20result%5D%0A%09%09catch%3A%20%5B%3Ae%20%7C%0A%09%09%09e%20isSmalltalkError%0A%09%09%09%20%20%20%20ifTrue%3A%20%5BErrorHandler%20new%20handleError%3A%20e%5D%0A%09%09%09%20%20%20%20ifFalse%3A%20%5Bprocess%20stdout%20write%3A%20e%20jsStack%5D%5D%5D.%0A%09interface%20prompt'),
messageSends: ["ifFalse:", "isEmpty", "try:catch:", "loadExpression:", "new", "show:", "ifTrue:ifFalse:", "isSmalltalkError", "handleError:", "write:", "stdout", "jsStack", "prompt"],
referencedClasses: ["Compiler", "Transcript", "ErrorHandler"]
}),
smalltalk.Repl);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
self['@readline']=smalltalk.send((typeof require == 'undefined' ? nil : require), "_value_", ["readline"]);
self['@util']=smalltalk.send((typeof require == 'undefined' ? nil : require), "_value_", ["util"]);
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09readline%20%3A%3D%20require%20value%3A%20%27readline%27.%0A%09util%20%3A%3D%20require%20value%3A%20%27util%27'),
messageSends: ["initialize", "value:"],
referencedClasses: []
}),
smalltalk.Repl);


smalltalk.addMethod(
unescape('_main'),
smalltalk.method({
selector: unescape('main'),
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_new", []), "_createInterface", []);
return self;},
args: [],
source: unescape('main%0A%09self%20new%20createInterface'),
messageSends: ["createInterface", "new"],
referencedClasses: []
}),
smalltalk.Repl.klass);


