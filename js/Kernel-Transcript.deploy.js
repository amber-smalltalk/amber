smalltalk.addPackage('Kernel-Transcript');
smalltalk.addClass('ConsoleTranscript', smalltalk.Object, ['textarea'], 'Kernel-Transcript');
smalltalk.addMethod(
"_clear",
smalltalk.method({
selector: "clear",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.ConsoleTranscript)})},
messageSends: []}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
"_cr",
smalltalk.method({
selector: "cr",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"cr",{},smalltalk.ConsoleTranscript)})},
messageSends: []}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.ConsoleTranscript)})},
messageSends: []}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
"_show_",
smalltalk.method({
selector: "show:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { console.log(String(string._asString()));
return self}, function($ctx1) {$ctx1.fill(self,"show:",{anObject:anObject},smalltalk.ConsoleTranscript)})},
messageSends: []}),
smalltalk.ConsoleTranscript);


smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((smalltalk.Transcript || Transcript))._register_(_st(self)._new());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ConsoleTranscript.klass)})},
messageSends: ["register:", "new"]}),
smalltalk.ConsoleTranscript.klass);


smalltalk.addClass('Transcript', smalltalk.Object, ['textarea'], 'Kernel-Transcript');

smalltalk.Transcript.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_clear",
smalltalk.method({
selector: "clear",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._current())._clear();
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.Transcript.klass)})},
messageSends: ["clear", "current"]}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_cr",
smalltalk.method({
selector: "cr",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._current())._show_(_st((smalltalk.String || String))._cr());
return self}, function($ctx1) {$ctx1.fill(self,"cr",{},smalltalk.Transcript.klass)})},
messageSends: ["show:", "cr", "current"]}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@current"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.Transcript.klass)})},
messageSends: []}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.Transcript.klass)})},
messageSends: ["shouldNotImplement"]}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._current())._open();
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.Transcript.klass)})},
messageSends: ["open", "current"]}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_register_",
smalltalk.method({
selector: "register:",
fn: function (aTranscript){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@current"]=aTranscript;
return self}, function($ctx1) {$ctx1.fill(self,"register:",{aTranscript:aTranscript},smalltalk.Transcript.klass)})},
messageSends: []}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_show_",
smalltalk.method({
selector: "show:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._current())._show_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"show:",{anObject:anObject},smalltalk.Transcript.klass)})},
messageSends: ["show:", "current"]}),
smalltalk.Transcript.klass);


