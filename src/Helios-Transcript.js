define("helios/Helios-Transcript", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "helios/Helios-Core", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Helios-Transcript');
smalltalk.packages["Helios-Transcript"].transport = {"type":"amd","amdNamespace":"helios"};

smalltalk.addClass('HLTranscript', globals.HLWidget, ['textarea'], 'Helios-Transcript');
globals.HLTranscript.comment="I am a widget responsible for displaying transcript contents.\x0a\x0a## Transcript API\x0a\x0a    Transcript \x0a        show: 'hello world';\x0a        cr;\x0a        show: anObject.\x0a\x0a    Transcript clear.\x0a\x0aSee the `Transcript` service class.";
smalltalk.addMethod(
smalltalk.method({
selector: "clear",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@textarea"])._asJQuery())._text_("");
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},globals.HLTranscript)})},
args: [],
source: "clear\x0a\x09textarea asJQuery text: ''",
messageSends: ["text:", "asJQuery"],
referencedClasses: []
}),
globals.HLTranscript);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.HLTranscript.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._register();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.HLTranscript)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self register",
messageSends: ["initialize", "register"],
referencedClasses: []
}),
globals.HLTranscript);

smalltalk.addMethod(
smalltalk.method({
selector: "register",
protocol: 'registration',
fn: function (){
var self=this;
function $HLTranscriptHandler(){return globals.HLTranscriptHandler||(typeof HLTranscriptHandler=="undefined"?nil:HLTranscriptHandler)}
return smalltalk.withContext(function($ctx1) { 
_st($HLTranscriptHandler())._register_(self);
return self}, function($ctx1) {$ctx1.fill(self,"register",{},globals.HLTranscript)})},
args: [],
source: "register\x0a\x09HLTranscriptHandler register: self",
messageSends: ["register:"],
referencedClasses: ["HLTranscriptHandler"]
}),
globals.HLTranscript);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("transcript");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self["@textarea"]=_st(html)._textarea();
return self["@textarea"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.HLTranscript)})},
args: ["html"],
source: "renderOn: html\x0a\x09html div\x0a\x09\x09class: 'transcript';\x0a\x09\x09with: [ textarea := html textarea ]",
messageSends: ["class:", "div", "with:", "textarea"],
referencedClasses: []
}),
globals.HLTranscript);

smalltalk.addMethod(
smalltalk.method({
selector: "show:",
protocol: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
$1=self["@textarea"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
_st(_st(self["@textarea"])._asJQuery())._append_(_st(aString)._asString());
};
return self}, function($ctx1) {$ctx1.fill(self,"show:",{aString:aString},globals.HLTranscript)})},
args: ["aString"],
source: "show: aString\x0a\x09textarea ifNotNil: [\x0a \x09\x09textarea asJQuery append: aString asString ]",
messageSends: ["ifNotNil:", "append:", "asJQuery", "asString"],
referencedClasses: []
}),
globals.HLTranscript);

smalltalk.addMethod(
smalltalk.method({
selector: "unregister",
protocol: 'registration',
fn: function (){
var self=this;
function $HLTranscriptHandler(){return globals.HLTranscriptHandler||(typeof HLTranscriptHandler=="undefined"?nil:HLTranscriptHandler)}
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.HLTranscript.superclass.fn.prototype._unregister.apply(_st(self), []));
$ctx1.supercall = false;
_st($HLTranscriptHandler())._unregister_(self);
return self}, function($ctx1) {$ctx1.fill(self,"unregister",{},globals.HLTranscript)})},
args: [],
source: "unregister\x0a\x09super unregister.\x0a\x09HLTranscriptHandler unregister: self",
messageSends: ["unregister", "unregister:"],
referencedClasses: ["HLTranscriptHandler"]
}),
globals.HLTranscript);



smalltalk.addClass('HLTranscriptHandler', globals.Object, [], 'Helios-Transcript');
globals.HLTranscriptHandler.comment="I handle transcript events, dispatching them to all instances of `HLTranscript`.\x0a\x0a## API\x0a\x0aUse the class-side method `#register:` to add transcript instances.";

globals.HLTranscriptHandler.klass.iVarNames = ['transcripts'];
smalltalk.addMethod(
smalltalk.method({
selector: "clear",
protocol: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._transcripts())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._clear();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},globals.HLTranscriptHandler.klass)})},
args: [],
source: "clear\x0a\x09self transcripts do: [ :each |\x0a\x09\x09each clear ]",
messageSends: ["do:", "transcripts", "clear"],
referencedClasses: []
}),
globals.HLTranscriptHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "cr",
protocol: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._transcripts())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._cr();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"cr",{},globals.HLTranscriptHandler.klass)})},
args: [],
source: "cr\x0a\x09self transcripts do: [ :each | each cr ]",
messageSends: ["do:", "transcripts", "cr"],
referencedClasses: []
}),
globals.HLTranscriptHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "register:",
protocol: 'registration',
fn: function (aTranscript){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._transcripts())._add_(aTranscript);
return self}, function($ctx1) {$ctx1.fill(self,"register:",{aTranscript:aTranscript},globals.HLTranscriptHandler.klass)})},
args: ["aTranscript"],
source: "register: aTranscript\x0a\x09self transcripts add: aTranscript",
messageSends: ["add:", "transcripts"],
referencedClasses: []
}),
globals.HLTranscriptHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "show:",
protocol: 'printing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._transcripts())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._show_(aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"show:",{aString:aString},globals.HLTranscriptHandler.klass)})},
args: ["aString"],
source: "show: aString\x0a\x09self transcripts do: [ :each |\x0a\x09\x09each show: aString ]",
messageSends: ["do:", "transcripts", "show:"],
referencedClasses: []
}),
globals.HLTranscriptHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "transcripts",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@transcripts"];
if(($receiver = $2) == null || $receiver.isNil){
self["@transcripts"]=_st($OrderedCollection())._new();
$1=self["@transcripts"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"transcripts",{},globals.HLTranscriptHandler.klass)})},
args: [],
source: "transcripts\x0a\x09^ transcripts ifNil: [ transcripts := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
globals.HLTranscriptHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "unregister:",
protocol: 'registration',
fn: function (aTranscript){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._transcripts())._remove_(aTranscript);
return self}, function($ctx1) {$ctx1.fill(self,"unregister:",{aTranscript:aTranscript},globals.HLTranscriptHandler.klass)})},
args: ["aTranscript"],
source: "unregister: aTranscript\x0a\x09self transcripts remove: aTranscript",
messageSends: ["remove:", "transcripts"],
referencedClasses: []
}),
globals.HLTranscriptHandler.klass);

});
