smalltalk.addPackage('Helios-Transcript');
smalltalk.addClass('HLTranscript', smalltalk.HLWidget, ['textarea'], 'Helios-Transcript');
smalltalk.addMethod(
smalltalk.method({
selector: "clear",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@textarea"])._asJQuery())._text_("");
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.HLTranscript)})},
messageSends: ["text:", "asJQuery"]}),
smalltalk.HLTranscript);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLTranscript.superclass.fn.prototype._initialize.apply(_st(self), []);
self._register();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.HLTranscript)})},
messageSends: ["initialize", "register"]}),
smalltalk.HLTranscript);

smalltalk.addMethod(
smalltalk.method({
selector: "register",
fn: function (){
var self=this;
function $HLTranscriptHandler(){return smalltalk.HLTranscriptHandler||(typeof HLTranscriptHandler=="undefined"?nil:HLTranscriptHandler)}
return smalltalk.withContext(function($ctx1) { 
_st($HLTranscriptHandler())._register_(self);
return self}, function($ctx1) {$ctx1.fill(self,"register",{},smalltalk.HLTranscript)})},
messageSends: ["register:"]}),
smalltalk.HLTranscript);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
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
messageSends: ["class:", "div", "with:", "textarea"]}),
smalltalk.HLTranscript);

smalltalk.addMethod(
smalltalk.method({
selector: "show:",
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
messageSends: ["ifNotNil:", "append:", "asString", "asJQuery"]}),
smalltalk.HLTranscript);

smalltalk.addMethod(
smalltalk.method({
selector: "unregister",
fn: function (){
var self=this;
function $HLTranscriptHandler(){return smalltalk.HLTranscriptHandler||(typeof HLTranscriptHandler=="undefined"?nil:HLTranscriptHandler)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLTranscript.superclass.fn.prototype._unregister.apply(_st(self), []);
_st($HLTranscriptHandler())._unregister_(self);
return self}, function($ctx1) {$ctx1.fill(self,"unregister",{},smalltalk.HLTranscript)})},
messageSends: ["unregister", "unregister:"]}),
smalltalk.HLTranscript);



smalltalk.addClass('HLTranscriptHandler', smalltalk.Object, [], 'Helios-Transcript');

smalltalk.HLTranscriptHandler.klass.iVarNames = ['transcripts'];
smalltalk.addMethod(
smalltalk.method({
selector: "clear",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._transcripts())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._clear();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.HLTranscriptHandler.klass)})},
messageSends: ["do:", "clear", "transcripts"]}),
smalltalk.HLTranscriptHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
_st($Transcript())._register_(self);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.HLTranscriptHandler.klass)})},
messageSends: ["register:"]}),
smalltalk.HLTranscriptHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "register:",
fn: function (aTranscript){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._transcripts())._add_(aTranscript);
return self}, function($ctx1) {$ctx1.fill(self,"register:",{aTranscript:aTranscript},smalltalk.HLTranscriptHandler.klass)})},
messageSends: ["add:", "transcripts"]}),
smalltalk.HLTranscriptHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "show:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._transcripts())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._show_(aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"show:",{aString:aString},smalltalk.HLTranscriptHandler.klass)})},
messageSends: ["do:", "show:", "transcripts"]}),
smalltalk.HLTranscriptHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "transcripts",
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
messageSends: ["ifNil:", "new"]}),
smalltalk.HLTranscriptHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "unregister:",
fn: function (aTranscript){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._transcripts())._remove_(aTranscript);
return self}, function($ctx1) {$ctx1.fill(self,"unregister:",{aTranscript:aTranscript},smalltalk.HLTranscriptHandler.klass)})},
messageSends: ["remove:", "transcripts"]}),
smalltalk.HLTranscriptHandler.klass);


