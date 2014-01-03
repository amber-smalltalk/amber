define("amber_core/Kernel-Exceptions", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st){
smalltalk.addPackage('Kernel-Exceptions');
smalltalk.packages["Kernel-Exceptions"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('Error', smalltalk.Object, ['messageText'], 'Kernel-Exceptions');
smalltalk.Error.comment="From the ANSI standard:\x0a\x0aThis protocol describes the behavior of instances of class `Error`.\x0aThese are used to represent error conditions that prevent the normal continuation of processing.\x0aActual error exceptions used by an application may be subclasses of this class.\x0aAs `Error` is explicitly specified to be subclassable, conforming implementations must implement its behavior in a non-fragile manner.";
smalltalk.addMethod(
smalltalk.method({
selector: "context",
protocol: 'accessing',
fn: function (){
var self=this;
return self.context;
return self},
args: [],
source: "context\x0a\x09<return self.context>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._messageText_("Errorclass: ".__comma(_st(self._class())._name()));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Error)})},
args: [],
source: "initialize\x0a\x09self messageText: 'Errorclass: ', (self class name).",
messageSends: ["messageText:", ",", "name", "class"],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
smalltalk.method({
selector: "isSmalltalkError",
protocol: 'testing',
fn: function (){
var self=this;
return self.smalltalkError === true;
return self},
args: [],
source: "isSmalltalkError\x0a\x09<return self.smalltalkError === true>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
smalltalk.method({
selector: "jsStack",
protocol: 'accessing',
fn: function (){
var self=this;
return self.stack;
return self},
args: [],
source: "jsStack\x0a\x09<return self.stack>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
smalltalk.method({
selector: "messageText",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@messageText"];
return $1;
},
args: [],
source: "messageText\x0a\x09^ messageText",
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
smalltalk.method({
selector: "messageText:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@messageText"]=aString;
return self},
args: ["aString"],
source: "messageText: aString\x0a\x09messageText := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
smalltalk.method({
selector: "resignal",
protocol: 'signaling',
fn: function (){
var self=this;
throw(self);
return self},
args: [],
source: "resignal\x0a\x09\x22Resignal the receiver without changing its exception context\x22\x0a\x09\x0a\x09<throw(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
smalltalk.method({
selector: "signal",
protocol: 'signaling',
fn: function (){
var self=this;
self.context = smalltalk.getThisContext(); self.smalltalkError = true; throw(self);
return self},
args: [],
source: "signal\x0a\x09<self.context = smalltalk.getThisContext(); self.smalltalkError = true; throw(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
smalltalk.method({
selector: "signal:",
protocol: 'signaling',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._messageText_(aString);
self._signal();
return self}, function($ctx1) {$ctx1.fill(self,"signal:",{aString:aString},smalltalk.Error)})},
args: ["aString"],
source: "signal: aString\x0a\x09self messageText: aString.\x0a\x09self signal",
messageSends: ["messageText:", "signal"],
referencedClasses: []
}),
smalltalk.Error);


smalltalk.addMethod(
smalltalk.method({
selector: "heliosClass",
protocol: 'helios',
fn: function (){
var self=this;
return "exception";
},
args: [],
source: "heliosClass\x0a\x09^ 'exception'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Error.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "signal",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._signal();
return $1;
}, function($ctx1) {$ctx1.fill(self,"signal",{},smalltalk.Error.klass)})},
args: [],
source: "signal\x0a\x09^ self new signal",
messageSends: ["signal", "new"],
referencedClasses: []
}),
smalltalk.Error.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "signal:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._signal_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"signal:",{aString:aString},smalltalk.Error.klass)})},
args: ["aString"],
source: "signal: aString\x0a\x09^ self new\x0a\x09\x09signal: aString",
messageSends: ["signal:", "new"],
referencedClasses: []
}),
smalltalk.Error.klass);


smalltalk.addClass('JavaScriptException', smalltalk.Error, ['exception'], 'Kernel-Exceptions');
smalltalk.JavaScriptException.comment="A JavaScriptException is thrown when a non-Smalltalk exception occurs while in the Smalltalk stack.\x0aSee `boot.js` `inContext()` and `BlockClosure >> on:do:`";
smalltalk.addMethod(
smalltalk.method({
selector: "context:",
protocol: 'accessing',
fn: function (aMethodContext){
var self=this;
self.context = aMethodContext;
return self},
args: ["aMethodContext"],
source: "context: aMethodContext\x0a\x09\x22Set the context from the outside.\x0a\x09See boot.js `inContext()` exception handling\x22\x0a\x09\x0a\x09<self.context = aMethodContext>",
messageSends: [],
referencedClasses: []
}),
smalltalk.JavaScriptException);

smalltalk.addMethod(
smalltalk.method({
selector: "exception",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@exception"];
return $1;
},
args: [],
source: "exception\x0a\x09^ exception",
messageSends: [],
referencedClasses: []
}),
smalltalk.JavaScriptException);

smalltalk.addMethod(
smalltalk.method({
selector: "exception:",
protocol: 'accessing',
fn: function (anException){
var self=this;
self["@exception"]=anException;
return self},
args: ["anException"],
source: "exception: anException\x0a\x09exception := anException",
messageSends: [],
referencedClasses: []
}),
smalltalk.JavaScriptException);

smalltalk.addMethod(
smalltalk.method({
selector: "messageText",
protocol: 'accessing',
fn: function (){
var self=this;
return 'JavaScript exception: ' + self["@exception"].toString();
return self},
args: [],
source: "messageText\x0a\x09<return 'JavaScript exception: ' + self[\x22@exception\x22].toString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.JavaScriptException);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'instance creation',
fn: function (anException){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._exception_(anException);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anException:anException},smalltalk.JavaScriptException.klass)})},
args: ["anException"],
source: "on: anException\x0a\x09^ self new\x0a\x09\x09exception: anException;\x0a\x09\x09yourself",
messageSends: ["exception:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.JavaScriptException.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:context:",
protocol: 'instance creation',
fn: function (anException,aMethodContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._exception_(anException);
_st($2)._context_(aMethodContext);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:context:",{anException:anException,aMethodContext:aMethodContext},smalltalk.JavaScriptException.klass)})},
args: ["anException", "aMethodContext"],
source: "on: anException context: aMethodContext\x0a\x09^ self new\x0a\x09\x09exception: anException;\x0a\x09\x09context: aMethodContext;\x0a\x09\x09yourself",
messageSends: ["exception:", "new", "context:", "yourself"],
referencedClasses: []
}),
smalltalk.JavaScriptException.klass);


smalltalk.addClass('MessageNotUnderstood', smalltalk.Error, ['message', 'receiver'], 'Kernel-Exceptions');
smalltalk.MessageNotUnderstood.comment="This exception is provided to support `Object>>doesNotUnderstand:`.";
smalltalk.addMethod(
smalltalk.method({
selector: "message",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@message"];
return $1;
},
args: [],
source: "message\x0a\x09^ message",
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
smalltalk.method({
selector: "message:",
protocol: 'accessing',
fn: function (aMessage){
var self=this;
self["@message"]=aMessage;
return self},
args: ["aMessage"],
source: "message: aMessage\x0a\x09message := aMessage",
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
smalltalk.method({
selector: "messageText",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self._receiver())._asString()).__comma(" does not understand #")).__comma(_st(self._message())._selector());
$ctx1.sendIdx[","]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageText",{},smalltalk.MessageNotUnderstood)})},
args: [],
source: "messageText\x0a\x09^ self receiver asString, ' does not understand #', self message selector",
messageSends: [",", "asString", "receiver", "selector", "message"],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@receiver"];
return $1;
},
args: [],
source: "receiver\x0a\x09^ receiver",
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@receiver"]=anObject;
return self},
args: ["anObject"],
source: "receiver: anObject\x0a\x09receiver := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);



smalltalk.addClass('NonBooleanReceiver', smalltalk.Error, ['object'], 'Kernel-Exceptions');
smalltalk.NonBooleanReceiver.comment="NonBooleanReceiver exceptions may be thrown when executing inlined methods such as `#ifTrue:` with a non boolean receiver.";
smalltalk.addMethod(
smalltalk.method({
selector: "object",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@object"];
return $1;
},
args: [],
source: "object\x0a\x09^ object",
messageSends: [],
referencedClasses: []
}),
smalltalk.NonBooleanReceiver);

smalltalk.addMethod(
smalltalk.method({
selector: "object:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@object"]=anObject;
return self},
args: ["anObject"],
source: "object: anObject\x0a\x09object := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.NonBooleanReceiver);


});
