smalltalk.addPackage('Kernel-Transcript');
smalltalk.addClass('ConsoleTranscript', smalltalk.Object, ['textarea'], 'Kernel-Transcript');
smalltalk.addMethod(
"_clear",
smalltalk.method({
selector: "clear",
category: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.ConsoleTranscript)})},
args: [],
source: "clear\x0a\x09\x22no op\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
"_cr",
smalltalk.method({
selector: "cr",
category: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"cr",{},smalltalk.ConsoleTranscript)})},
args: [],
source: "cr\x0a\x09\x22no op\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.ConsoleTranscript)})},
args: [],
source: "open",
messageSends: [],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
"_show_",
smalltalk.method({
selector: "show:",
category: 'printing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { console.log(String(string._asString()));
return self}, function($ctx1) {$ctx1.fill(self,"show:",{anObject:anObject},smalltalk.ConsoleTranscript)})},
args: ["anObject"],
source: "show: anObject\x0a\x09<console.log(String(string._asString()))>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);


smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((smalltalk.Transcript || Transcript))._register_(_st(self)._new());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ConsoleTranscript.klass)})},
args: [],
source: "initialize\x0a\x09Transcript register: self new",
messageSends: ["register:", "new"],
referencedClasses: ["Transcript"]
}),
smalltalk.ConsoleTranscript.klass);


smalltalk.addClass('Transcript', smalltalk.Object, ['textarea'], 'Kernel-Transcript');

smalltalk.Transcript.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_clear",
smalltalk.method({
selector: "clear",
category: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._current())._clear();
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.Transcript.klass)})},
args: [],
source: "clear\x0a\x09self current clear",
messageSends: ["clear", "current"],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_cr",
smalltalk.method({
selector: "cr",
category: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._current())._show_(_st((smalltalk.String || String))._cr());
return self}, function($ctx1) {$ctx1.fill(self,"cr",{},smalltalk.Transcript.klass)})},
args: [],
source: "cr\x0a\x09self current show: String cr",
messageSends: ["show:", "cr", "current"],
referencedClasses: ["String"]
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@current"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.Transcript.klass)})},
args: [],
source: "current\x0a\x09^current",
messageSends: [],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.Transcript.klass)})},
args: [],
source: "new\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._current())._open();
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.Transcript.klass)})},
args: [],
source: "open\x0a\x09self current open",
messageSends: ["open", "current"],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_register_",
smalltalk.method({
selector: "register:",
category: 'instance creation',
fn: function (aTranscript){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@current"]=aTranscript;
return self}, function($ctx1) {$ctx1.fill(self,"register:",{aTranscript:aTranscript},smalltalk.Transcript.klass)})},
args: ["aTranscript"],
source: "register: aTranscript\x0a\x09current := aTranscript",
messageSends: [],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_show_",
smalltalk.method({
selector: "show:",
category: 'printing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._current())._show_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"show:",{anObject:anObject},smalltalk.Transcript.klass)})},
args: ["anObject"],
source: "show: anObject\x0a\x09self current show: anObject",
messageSends: ["show:", "current"],
referencedClasses: []
}),
smalltalk.Transcript.klass);


