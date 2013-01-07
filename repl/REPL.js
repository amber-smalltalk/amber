smalltalk.addPackage('REPL', {});
smalltalk.addClass('Repl', smalltalk.Object, ['readline', 'interface', 'util'], 'REPL');
smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((typeof process == 'undefined' ? nil : process), "_stdin", []), "_destroy", []);
return self;},
args: [],
source: "close\x0a\x09process stdin destroy",
messageSends: ["destroy", "stdin"],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
"_createInterface",
smalltalk.method({
selector: "createInterface",
category: 'actions',
fn: function (){
var self=this;
(self['@interface']=smalltalk.send(self['@readline'], "_createInterface_stdout_", [smalltalk.send((typeof process == 'undefined' ? nil : process), "_stdin", []), smalltalk.send((typeof process == 'undefined' ? nil : process), "_stdout", [])]));
smalltalk.send(self['@interface'], "_on_do_", ["line", (function(buffer){return smalltalk.send(self, "_eval_", [buffer]);})]);
smalltalk.send(self['@interface'], "_on_do_", ["close", (function(){return smalltalk.send(self, "_close", []);})]);
smalltalk.send(self, "_setPrompt", []);
smalltalk.send(self['@interface'], "_prompt", []);
return self;},
args: [],
source: "createInterface\x0a\x09\x22No completion for now\x22\x0a\x09interface := readline createInterface: process stdin stdout: process stdout.\x0a\x09interface on: 'line' do: [:buffer  | self eval: buffer].\x0a\x09interface on: 'close' do: [self close].\x0a\x09self setPrompt.\x0a\x09interface prompt",
messageSends: ["createInterface:stdout:", "stdin", "stdout", "on:do:", "eval:", "close", "setPrompt", "prompt"],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
"_eval_",
smalltalk.method({
selector: "eval:",
category: 'actions',
fn: function (buffer){
var self=this;
var result=nil;
((($receiver = smalltalk.send(buffer, "_isEmpty", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_try_catch_", [(function(){(result=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_loadExpression_", [buffer]));return smalltalk.send((smalltalk.Transcript || Transcript), "_show_", [result]);}), (function(e){return ((($receiver = smalltalk.send(e, "_isSmalltalkError", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send((smalltalk.ErrorHandler || ErrorHandler), "_new", []), "_handleError_", [e]);})() : (function(){return smalltalk.send(smalltalk.send((typeof process == 'undefined' ? nil : process), "_stdout", []), "_write_", [smalltalk.send(e, "_jsStack", [])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send((smalltalk.ErrorHandler || ErrorHandler), "_new", []), "_handleError_", [e]);}), (function(){return smalltalk.send(smalltalk.send((typeof process == 'undefined' ? nil : process), "_stdout", []), "_write_", [smalltalk.send(e, "_jsStack", [])]);})]));})]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_try_catch_", [(function(){(result=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_loadExpression_", [buffer]));return smalltalk.send((smalltalk.Transcript || Transcript), "_show_", [result]);}), (function(e){return ((($receiver = smalltalk.send(e, "_isSmalltalkError", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send((smalltalk.ErrorHandler || ErrorHandler), "_new", []), "_handleError_", [e]);})() : (function(){return smalltalk.send(smalltalk.send((typeof process == 'undefined' ? nil : process), "_stdout", []), "_write_", [smalltalk.send(e, "_jsStack", [])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send((smalltalk.ErrorHandler || ErrorHandler), "_new", []), "_handleError_", [e]);}), (function(){return smalltalk.send(smalltalk.send((typeof process == 'undefined' ? nil : process), "_stdout", []), "_write_", [smalltalk.send(e, "_jsStack", [])]);})]));})]);})]));
smalltalk.send(self['@interface'], "_prompt", []);
return self;},
args: ["buffer"],
source: "eval: buffer\x0a\x09| result |\x0a\x09buffer isEmpty ifFalse: [\x0a\x09\x09self try: [\x0a\x09\x09\x09result := Compiler new loadExpression: buffer.\x0a\x09\x09\x09Transcript show: result]\x0a\x09\x09catch: [:e |\x0a\x09\x09\x09e isSmalltalkError\x0a\x09\x09\x09    ifTrue: [ErrorHandler new handleError: e]\x0a\x09\x09\x09    ifFalse: [process stdout write: e jsStack]]].\x0a\x09interface prompt",
messageSends: ["ifFalse:", "isEmpty", "try:catch:", "loadExpression:", "new", "show:", "ifTrue:ifFalse:", "isSmalltalkError", "handleError:", "write:", "stdout", "jsStack", "prompt"],
referencedClasses: ["Compiler", "Transcript", "ErrorHandler"]
}),
smalltalk.Repl);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Repl.superclass || nil);
(self['@readline']=smalltalk.send((typeof require == 'undefined' ? nil : require), "_value_", ["readline"]));
(self['@util']=smalltalk.send((typeof require == 'undefined' ? nil : require), "_value_", ["util"]));
return self;},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09readline := require value: 'readline'.\x0a\x09util := require value: 'util'",
messageSends: ["initialize", "value:"],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
"_prompt",
smalltalk.method({
selector: "prompt",
category: 'accessing',
fn: function (){
var self=this;
return "amber >> ";
return self;},
args: [],
source: "prompt\x0a\x09^'amber >> '",
messageSends: [],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
"_setPrompt",
smalltalk.method({
selector: "setPrompt",
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self['@interface'], "_setPrompt_", [smalltalk.send(self, "_prompt", [])]);
return self;},
args: [],
source: "setPrompt\x0a\x09interface setPrompt: self prompt",
messageSends: ["setPrompt:", "prompt"],
referencedClasses: []
}),
smalltalk.Repl);


smalltalk.addMethod(
"_main",
smalltalk.method({
selector: "main",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_new", []), "_createInterface", []);
return self;},
args: [],
source: "main\x0a\x09self new createInterface",
messageSends: ["createInterface", "new"],
referencedClasses: []
}),
smalltalk.Repl.klass);


