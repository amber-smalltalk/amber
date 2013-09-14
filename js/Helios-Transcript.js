smalltalk.addPackage('Helios-Transcript');
smalltalk.addClass('HLTranscript', smalltalk.HLWidget, ['textarea'], 'Helios-Transcript');
smalltalk.HLTranscript.comment="I am a widget responsible for displaying transcript contents.\x0a\x0a## Transcript API\x0a\x0a    Transcript \x0a        show: 'hello world';\x0a        cr;\x0a        show: anObject.\x0a\x0a    Transcript clear.\x0a\x0aSee the `Transcript` class.";
smalltalk.addMethod(
smalltalk.method({
selector: "clear",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@textarea"])._asJQuery())._text_("");
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.HLTranscript)})},
args: [],
source: "clear\x0a\x09textarea asJQuery text: ''",
messageSends: ["text:", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLTranscript);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLTranscript.superclass.fn.prototype._initialize.apply(_st(self), []);
self._register();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.HLTranscript)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self register",
messageSends: ["initialize", "register"],
referencedClasses: []
}),
smalltalk.HLTranscript);

smalltalk.addMethod(
smalltalk.method({
selector: "register",
category: 'registration',
fn: function (){
var self=this;
function $HLTranscriptHandler(){return smalltalk.HLTranscriptHandler||(typeof HLTranscriptHandler=="undefined"?nil:HLTranscriptHandler)}
return smalltalk.withContext(function($ctx1) { 
_st($HLTranscriptHandler())._register_(self);
return self}, function($ctx1) {$ctx1.fill(self,"register",{},smalltalk.HLTranscript)})},
args: [],
source: "register\x0a\x09HLTranscriptHandler register: self",
messageSends: ["register:"],
referencedClasses: ["HLTranscriptHandler"]
}),
smalltalk.HLTranscript);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.HLTranscript)})},
args: ["html"],
source: "renderOn: html\x0a\x09html div\x0a\x09\x09class: 'transcript';\x0a\x09\x09with: [ textarea := html textarea ]",
messageSends: ["class:", "div", "with:", "textarea"],
referencedClasses: []
}),
smalltalk.HLTranscript);

smalltalk.addMethod(
smalltalk.method({
selector: "show:",
category: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@textarea"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(_st(self["@textarea"])._asJQuery())._append_(_st(aString)._asString());
};
return self}, function($ctx1) {$ctx1.fill(self,"show:",{aString:aString},smalltalk.HLTranscript)})},
args: ["aString"],
source: "show: aString\x0a\x09textarea ifNotNil: [\x0a \x09\x09textarea asJQuery append: aString asString ]",
messageSends: ["ifNotNil:", "append:", "asString", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLTranscript);

smalltalk.addMethod(
smalltalk.method({
selector: "unregister",
category: 'registration',
fn: function (){
var self=this;
function $HLTranscriptHandler(){return smalltalk.HLTranscriptHandler||(typeof HLTranscriptHandler=="undefined"?nil:HLTranscriptHandler)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLTranscript.superclass.fn.prototype._unregister.apply(_st(self), []);
_st($HLTranscriptHandler())._unregister_(self);
return self}, function($ctx1) {$ctx1.fill(self,"unregister",{},smalltalk.HLTranscript)})},
args: [],
source: "unregister\x0a\x09super unregister.\x0a\x09HLTranscriptHandler unregister: self",
messageSends: ["unregister", "unregister:"],
referencedClasses: ["HLTranscriptHandler"]
}),
smalltalk.HLTranscript);



smalltalk.addClass('HLTranscriptHandler', smalltalk.Object, [], 'Helios-Transcript');
smalltalk.HLTranscriptHandler.comment="I handle transcript events, dispatching them to all instances of `HLTranscript`.\x0a\x0a## API\x0a\x0aOn class initialization I am automatically registered as the current transcript.";

smalltalk.HLTranscriptHandler.klass.iVarNames = ['transcripts'];
smalltalk.addMethod(
smalltalk.method({
selector: "clear",
category: 'registration',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._transcripts())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._clear();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.HLTranscriptHandler.klass)})},
args: [],
source: "clear\x0a\x09self transcripts do: [ :each |\x0a\x09\x09each clear ]",
messageSends: ["do:", "clear", "transcripts"],
referencedClasses: []
}),
smalltalk.HLTranscriptHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
_st($Transcript())._register_(self);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.HLTranscriptHandler.klass)})},
args: [],
source: "initialize\x0a\x09Transcript register: self",
messageSends: ["register:"],
referencedClasses: ["Transcript"]
}),
smalltalk.HLTranscriptHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "register:",
category: 'registration',
fn: function (aTranscript){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._transcripts())._add_(aTranscript);
return self}, function($ctx1) {$ctx1.fill(self,"register:",{aTranscript:aTranscript},smalltalk.HLTranscriptHandler.klass)})},
args: ["aTranscript"],
source: "register: aTranscript\x0a\x09self transcripts add: aTranscript",
messageSends: ["add:", "transcripts"],
referencedClasses: []
}),
smalltalk.HLTranscriptHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "show:",
category: 'registration',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._transcripts())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._show_(aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"show:",{aString:aString},smalltalk.HLTranscriptHandler.klass)})},
args: ["aString"],
source: "show: aString\x0a\x09self transcripts do: [ :each |\x0a\x09\x09each show: aString ]",
messageSends: ["do:", "show:", "transcripts"],
referencedClasses: []
}),
smalltalk.HLTranscriptHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "transcripts",
category: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@transcripts"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@transcripts"]=_st($OrderedCollection())._new();
$1=self["@transcripts"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"transcripts",{},smalltalk.HLTranscriptHandler.klass)})},
args: [],
source: "transcripts\x0a\x09^ transcripts ifNil: [ transcripts := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.HLTranscriptHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "unregister:",
category: 'registration',
fn: function (aTranscript){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._transcripts())._remove_(aTranscript);
return self}, function($ctx1) {$ctx1.fill(self,"unregister:",{aTranscript:aTranscript},smalltalk.HLTranscriptHandler.klass)})},
args: ["aTranscript"],
source: "unregister: aTranscript\x0a\x09self transcripts remove: aTranscript",
messageSends: ["remove:", "transcripts"],
referencedClasses: []
}),
smalltalk.HLTranscriptHandler.klass);


