smalltalk.addPackage('Kernel-Transcript', {});
smalltalk.addClass('ConsoleTranscript', smalltalk.Object, ['textarea'], 'Kernel-Transcript');
smalltalk.addMethod(
"_clear",
smalltalk.method({
selector: "clear",
fn: function ConsoleTranscript_clear(){
var self=this;

return self;}
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
"_cr",
smalltalk.method({
selector: "cr",
fn: function ConsoleTranscript_cr(){
var self=this;

return self;}
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function ConsoleTranscript_open(){
var self=this;

return self;}
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
"_show_",
smalltalk.method({
selector: "show:",
fn: function ConsoleTranscript_show_(anObject){
var self=this;
var string=nil;
(string=smalltalk.send(anObject, "_asString", []));
console.log(String(string));
return self;}
}),
smalltalk.ConsoleTranscript);


smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function ConsoleTranscript_class_initialize(){
var self=this;
smalltalk.send((smalltalk.Transcript || Transcript), "_register_", [smalltalk.send(self, "_new", [])]);
return self;}
}),
smalltalk.ConsoleTranscript.klass);


smalltalk.addClass('Transcript', smalltalk.Object, ['textarea'], 'Kernel-Transcript');

smalltalk.Transcript.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_clear",
smalltalk.method({
selector: "clear",
fn: function Transcript_class_clear(){
var self=this;
smalltalk.send(smalltalk.send(self, "_current", []), "_clear", []);
return self;}
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_cr",
smalltalk.method({
selector: "cr",
fn: function Transcript_class_cr(){
var self=this;
smalltalk.send(smalltalk.send(self, "_current", []), "_show_", [smalltalk.send((smalltalk.String || String), "_cr", [])]);
return self;}
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
fn: function Transcript_class_current(){
var self=this;
return self['@current'];
return self;}
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function Transcript_class_new(){
var self=this;
smalltalk.send(self, "_shouldNotImplement", []);
return self;}
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function Transcript_class_open(){
var self=this;
smalltalk.send(smalltalk.send(self, "_current", []), "_open", []);
return self;}
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_register_",
smalltalk.method({
selector: "register:",
fn: function Transcript_class_register_(aTranscript){
var self=this;
(self['@current']=aTranscript);
return self;}
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_show_",
smalltalk.method({
selector: "show:",
fn: function Transcript_class_show_(anObject){
var self=this;
smalltalk.send(smalltalk.send(self, "_current", []), "_show_", [anObject]);
return self;}
}),
smalltalk.Transcript.klass);


