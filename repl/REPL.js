smalltalk.addPackage('REPL', {});
smalltalk.addClass('Repl', smalltalk.Object, ['readline', 'interface', 'util'], 'REPL');
smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(process)._stdin())._destroy();
return self}, function($ctx1) {$ctx1.fill(self,"close",{}, smalltalk.Repl)})},
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
return smalltalk.withContext(function($ctx1) { self["@interface"]=_st(self["@readline"])._createInterface_stdout_(_st(process)._stdin(),_st(process)._stdout());
_st(self["@interface"])._on_do_("line",(function(buffer){
return smalltalk.withContext(function($ctx2) {return _st(self)._eval_(buffer);
}, function($ctx2) {$ctx2.fillBlock({buffer:buffer},$ctx1)})}));
_st(self["@interface"])._on_do_("close",(function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._close();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self)._setPrompt();
_st(self["@interface"])._prompt();
return self}, function($ctx1) {$ctx1.fill(self,"createInterface",{}, smalltalk.Repl)})},
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
var result;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(buffer)._isEmpty();
if(! smalltalk.assert($1)){
_st(self)._try_catch_((function(){
return smalltalk.withContext(function($ctx2) {result=_st(_st((smalltalk.Compiler || Compiler))._new())._evaluateExpression_(buffer);
result;
return _st((smalltalk.Transcript || Transcript))._show_(result);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(e){
return smalltalk.withContext(function($ctx2) {$2=_st(e)._isSmalltalkError();
if(smalltalk.assert($2)){
return _st(_st((smalltalk.ErrorHandler || ErrorHandler))._new())._handleError_(e);
} else {
return _st(_st(process)._stdout())._write_(_st(e)._jsStack());
};
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
};
_st(self["@interface"])._prompt();
return self}, function($ctx1) {$ctx1.fill(self,"eval:",{buffer:buffer,result:result}, smalltalk.Repl)})},
args: ["buffer"],
source: "eval: buffer\x0a\x09| result |\x0a\x09buffer isEmpty ifFalse: [\x0a\x09\x09self try: [\x0a\x09\x09\x09result := Compiler new evaluateExpression: buffer.\x0a\x09\x09\x09Transcript show: result]\x0a\x09\x09catch: [:e |\x0a\x09\x09\x09e isSmalltalkError\x0a\x09\x09\x09    ifTrue: [ErrorHandler new handleError: e]\x0a\x09\x09\x09    ifFalse: [process stdout write: e jsStack]]].\x0a\x09interface prompt",
messageSends: ["ifFalse:", "try:catch:", "evaluateExpression:", "new", "show:", "ifTrue:ifFalse:", "handleError:", "write:", "jsStack", "stdout", "isSmalltalkError", "isEmpty", "prompt"],
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
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@readline"]=_st(require)._value_("readline");
self["@util"]=_st(require)._value_("util");
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.Repl)})},
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
return smalltalk.withContext(function($ctx1) { return "amber >> ";
}, function($ctx1) {$ctx1.fill(self,"prompt",{}, smalltalk.Repl)})},
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
return smalltalk.withContext(function($ctx1) { _st(self["@interface"])._setPrompt_(_st(self)._prompt());
return self}, function($ctx1) {$ctx1.fill(self,"setPrompt",{}, smalltalk.Repl)})},
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
return smalltalk.withContext(function($ctx1) { _st(_st(self)._new())._createInterface();
return self}, function($ctx1) {$ctx1.fill(self,"main",{}, smalltalk.Repl.klass)})},
args: [],
source: "main\x0a\x09self new createInterface",
messageSends: ["createInterface", "new"],
referencedClasses: []
}),
smalltalk.Repl.klass);


