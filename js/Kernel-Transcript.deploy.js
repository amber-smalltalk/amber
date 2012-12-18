smalltalk.addPackage('Kernel-Transcript', {});
smalltalk.addClass('ConsoleTranscript', smalltalk.Object, ['textarea'], 'Kernel-Transcript');
smalltalk.addMethod(
"_clear",
smalltalk.method({
selector: "clear",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self}, self, "clear", [], smalltalk.ConsoleTranscript)}
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
"_cr",
smalltalk.method({
selector: "cr",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self}, self, "cr", [], smalltalk.ConsoleTranscript)}
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self}, self, "open", [], smalltalk.ConsoleTranscript)}
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
"_show_",
smalltalk.method({
selector: "show:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx) { console.log(String(string._asString()));
;
return self}, self, "show:", [anObject], smalltalk.ConsoleTranscript)}
}),
smalltalk.ConsoleTranscript);


smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st((smalltalk.Transcript || Transcript))._register_(_st(self)._new());
return self}, self, "initialize", [], smalltalk.ConsoleTranscript.klass)}
}),
smalltalk.ConsoleTranscript.klass);


smalltalk.addClass('Transcript', smalltalk.Object, ['textarea'], 'Kernel-Transcript');

smalltalk.Transcript.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_clear",
smalltalk.method({
selector: "clear",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(_st(self)._current())._clear();
return self}, self, "clear", [], smalltalk.Transcript.klass)}
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_cr",
smalltalk.method({
selector: "cr",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(_st(self)._current())._show_(_st((smalltalk.String || String))._cr());
return self}, self, "cr", [], smalltalk.Transcript.klass)}
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { return self["@current"];
}, self, "current", [], smalltalk.Transcript.klass)}
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(self)._shouldNotImplement();
return self}, self, "new", [], smalltalk.Transcript.klass)}
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { _st(_st(self)._current())._open();
return self}, self, "open", [], smalltalk.Transcript.klass)}
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_register_",
smalltalk.method({
selector: "register:",
fn: function (aTranscript){
var self=this;
return smalltalk.withContext(function($ctx) { self["@current"]=aTranscript;
return self}, self, "register:", [aTranscript], smalltalk.Transcript.klass)}
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_show_",
smalltalk.method({
selector: "show:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx) { _st(_st(self)._current())._show_(anObject);
return self}, self, "show:", [anObject], smalltalk.Transcript.klass)}
}),
smalltalk.Transcript.klass);


