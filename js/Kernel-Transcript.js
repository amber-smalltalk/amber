define("amber_core/Kernel-Transcript", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st){
smalltalk.addPackage('Kernel-Transcript');
smalltalk.packages["Kernel-Transcript"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('ConsoleTranscript', smalltalk.Object, ['textarea'], 'Kernel-Transcript');
smalltalk.ConsoleTranscript.comment="I am a specific transcript emitting to the JavaScript console.\x0a\x0aIf no other transcript is registered, I am the default.";
smalltalk.addMethod(
smalltalk.method({
selector: "clear",
protocol: 'printing',
fn: function (){
var self=this;
return self},
args: [],
source: "clear\x0a\x09\x22no op\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
smalltalk.method({
selector: "cr",
protocol: 'printing',
fn: function (){
var self=this;
return self},
args: [],
source: "cr\x0a\x09\x22no op\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
protocol: 'actions',
fn: function (){
var self=this;
return self},
args: [],
source: "open",
messageSends: [],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
smalltalk.method({
selector: "show:",
protocol: 'printing',
fn: function (anObject){
var self=this;
console.log(String(_st(anObject)._asString()));
return self},
args: ["anObject"],
source: "show: anObject\x0a\x22Smalltalk objects should have no trouble displaying themselves on the Transcript; Javascript objects don't know how, so must be wrapped in a JSObectProxy.\x22\x0a<console.log(String(_st(anObject)._asString()))>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);


smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
_st($Transcript())._register_(self._new());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ConsoleTranscript.klass)})},
args: [],
source: "initialize\x0a\x09Transcript register: self new",
messageSends: ["register:", "new"],
referencedClasses: ["Transcript"]
}),
smalltalk.ConsoleTranscript.klass);


smalltalk.addClass('Transcript', smalltalk.Object, [], 'Kernel-Transcript');
smalltalk.Transcript.comment="I am a facade for Transcript actions.\x0a\x0aI delegate actions to the currently registered transcript.\x0a\x0a## API\x0a\x0a    Transcript \x0a        show: 'hello world';\x0a        cr;\x0a        show: anObject.";

smalltalk.Transcript.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "clear",
protocol: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._current())._clear();
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.Transcript.klass)})},
args: [],
source: "clear\x0a\x09self current clear",
messageSends: ["clear", "current"],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "cr",
protocol: 'printing',
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
_st(self._current())._show_(_st($String())._cr());
return self}, function($ctx1) {$ctx1.fill(self,"cr",{},smalltalk.Transcript.klass)})},
args: [],
source: "cr\x0a\x09self current show: String cr",
messageSends: ["show:", "current", "cr"],
referencedClasses: ["String"]
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "current",
protocol: 'instance creation',
fn: function (){
var self=this;
var $1;
$1=self["@current"];
return $1;
},
args: [],
source: "current\x0a\x09^ current",
messageSends: [],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inspect:",
protocol: 'printing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._show_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},smalltalk.Transcript.klass)})},
args: ["anObject"],
source: "inspect: anObject\x0a\x09self show: anObject",
messageSends: ["show:"],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.Transcript.klass)})},
args: [],
source: "new\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._current())._open();
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.Transcript.klass)})},
args: [],
source: "open\x0a\x09self current open",
messageSends: ["open", "current"],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "register:",
protocol: 'instance creation',
fn: function (aTranscript){
var self=this;
self["@current"]=aTranscript;
return self},
args: ["aTranscript"],
source: "register: aTranscript\x0a\x09current := aTranscript",
messageSends: [],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "show:",
protocol: 'printing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._current())._show_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"show:",{anObject:anObject},smalltalk.Transcript.klass)})},
args: ["anObject"],
source: "show: anObject\x0a\x09self current show: anObject",
messageSends: ["show:", "current"],
referencedClasses: []
}),
smalltalk.Transcript.klass);

});
