smalltalk.addPackage('Kernel-Exceptions');
smalltalk.addClass('Error', smalltalk.Object, ['messageText'], 'Kernel-Exceptions');
smalltalk.Error.comment="From the ANSI standard:\x0a\x0aThis protocol describes the behavior of instances of class `Error`.\x0aThese are used to represent error conditions that prevent the normal continuation of processing.\x0aActual error exceptions used by an application may be subclasses of this class.\x0aAs `Error` is explicitly specified to be subclassable, conforming implementations must implement its behavior in a non-fragile manner.";
smalltalk.addMethod(
smalltalk.method({
selector: "context",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.context;
return self}, function($ctx1) {$ctx1.fill(self,"context",{},smalltalk.Error)})},
args: [],
source: "context\x0a\x09<return self.context>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
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
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.smalltalkError === true;
return self}, function($ctx1) {$ctx1.fill(self,"isSmalltalkError",{},smalltalk.Error)})},
args: [],
source: "isSmalltalkError\x0a\x09<return self.smalltalkError === true>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
smalltalk.method({
selector: "jsStack",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.stack;
return self}, function($ctx1) {$ctx1.fill(self,"jsStack",{},smalltalk.Error)})},
args: [],
source: "jsStack\x0a\x09<return self.stack>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
smalltalk.method({
selector: "messageText",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@messageText"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageText",{},smalltalk.Error)})},
args: [],
source: "messageText\x0a\x09^messageText",
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
smalltalk.method({
selector: "messageText:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@messageText"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"messageText:",{aString:aString},smalltalk.Error)})},
args: ["aString"],
source: "messageText: aString\x0a\x09messageText := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
smalltalk.method({
selector: "resignal",
category: 'signaling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
throw(self);
return self}, function($ctx1) {$ctx1.fill(self,"resignal",{},smalltalk.Error)})},
args: [],
source: "resignal\x0a\x09\x22Resignal the receiver without changing its exception context\x22\x0a\x09\x0a\x09<throw(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
smalltalk.method({
selector: "signal",
category: 'signaling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.context = smalltalk.getThisContext(); self.smalltalkError = true; throw(self);
return self}, function($ctx1) {$ctx1.fill(self,"signal",{},smalltalk.Error)})},
args: [],
source: "signal\x0a\x09<self.context = smalltalk.getThisContext(); self.smalltalkError = true; throw(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
smalltalk.method({
selector: "signal:",
category: 'signaling',
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
category: 'helios',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "exception";
}, function($ctx1) {$ctx1.fill(self,"heliosClass",{},smalltalk.Error.klass)})},
args: [],
source: "heliosClass\x0a\x09^ 'exception'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Error.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "signal",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._signal();
return $1;
}, function($ctx1) {$ctx1.fill(self,"signal",{},smalltalk.Error.klass)})},
args: [],
source: "signal\x0a\x09^self new signal",
messageSends: ["signal", "new"],
referencedClasses: []
}),
smalltalk.Error.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "signal:",
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._signal_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"signal:",{aString:aString},smalltalk.Error.klass)})},
args: ["aString"],
source: "signal: aString\x0a\x09\x09^self new\x0a\x09\x09signal: aString",
messageSends: ["signal:", "new"],
referencedClasses: []
}),
smalltalk.Error.klass);


smalltalk.addClass('JavaScriptException', smalltalk.Error, ['exception'], 'Kernel-Exceptions');
smalltalk.JavaScriptException.comment="A JavaScriptException is thrown when a non-Smalltalk exception occurs while in the Smalltalk stack.\x0aSee `boot.js` `inContext()` and `BlockClosure >> on:do:`";
smalltalk.addMethod(
smalltalk.method({
selector: "context:",
category: 'accessing',
fn: function (aMethodContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.context = aMethodContext;
return self}, function($ctx1) {$ctx1.fill(self,"context:",{aMethodContext:aMethodContext},smalltalk.JavaScriptException)})},
args: ["aMethodContext"],
source: "context: aMethodContext\x0a\x09\x22Set the context from the outside.\x0a\x09See boot.js `inContext()` exception handling\x22\x0a\x09\x0a\x09<self.context = aMethodContext>",
messageSends: [],
referencedClasses: []
}),
smalltalk.JavaScriptException);

smalltalk.addMethod(
smalltalk.method({
selector: "exception",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@exception"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"exception",{},smalltalk.JavaScriptException)})},
args: [],
source: "exception\x0a\x09^ exception",
messageSends: [],
referencedClasses: []
}),
smalltalk.JavaScriptException);

smalltalk.addMethod(
smalltalk.method({
selector: "exception:",
category: 'accessing',
fn: function (anException){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@exception"]=anException;
return self}, function($ctx1) {$ctx1.fill(self,"exception:",{anException:anException},smalltalk.JavaScriptException)})},
args: ["anException"],
source: "exception: anException\x0a\x09exception := anException",
messageSends: [],
referencedClasses: []
}),
smalltalk.JavaScriptException);

smalltalk.addMethod(
smalltalk.method({
selector: "messageText",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return 'JavaScript exception: ' + self["@exception"].toString();
return self}, function($ctx1) {$ctx1.fill(self,"messageText",{},smalltalk.JavaScriptException)})},
args: [],
source: "messageText\x0a\x09<return 'JavaScript exception: ' + self[\x22@exception\x22].toString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.JavaScriptException);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
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
category: 'instance creation',
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
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@message"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"message",{},smalltalk.MessageNotUnderstood)})},
args: [],
source: "message\x0a\x09^message",
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
smalltalk.method({
selector: "message:",
category: 'accessing',
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@message"]=aMessage;
return self}, function($ctx1) {$ctx1.fill(self,"message:",{aMessage:aMessage},smalltalk.MessageNotUnderstood)})},
args: ["aMessage"],
source: "message: aMessage\x0a\x09message := aMessage",
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
smalltalk.method({
selector: "messageText",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self._receiver())._asString()).__comma(" does not understand #")).__comma(_st(self._message())._selector());
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageText",{},smalltalk.MessageNotUnderstood)})},
args: [],
source: "messageText\x0a\x09^self receiver asString, ' does not understand #', self message selector",
messageSends: [",", "selector", "message", "asString", "receiver"],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@receiver"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},smalltalk.MessageNotUnderstood)})},
args: [],
source: "receiver\x0a\x09^receiver",
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@receiver"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{anObject:anObject},smalltalk.MessageNotUnderstood)})},
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
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@object"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"object",{},smalltalk.NonBooleanReceiver)})},
args: [],
source: "object\x0a\x09^ object",
messageSends: [],
referencedClasses: []
}),
smalltalk.NonBooleanReceiver);

smalltalk.addMethod(
smalltalk.method({
selector: "object:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@object"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"object:",{anObject:anObject},smalltalk.NonBooleanReceiver)})},
args: ["anObject"],
source: "object: anObject\x0a\x09object := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.NonBooleanReceiver);



smalltalk.addClass('ErrorHandler', smalltalk.Object, [], 'Kernel-Exceptions');
smalltalk.ErrorHandler.comment="I am used to manage Smalltalk errors.\x0aSee `boot.js` `handleError()` function.\x0a\x0aSubclasses can register themselves as the current handler with\x0a`ErrorHandler class >> register`.\x0a\x0aSubclasses may override `#handleError:` to perform an action on the thrown exception.\x0aThe default behavior is to log the error and the context stack to the JavaScript console.";
smalltalk.addMethod(
smalltalk.method({
selector: "handleError:",
category: 'error handling',
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anError)._context();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
self._logErrorContext_(_st(anError)._context());
};
self._logError_(anError);
return self}, function($ctx1) {$ctx1.fill(self,"handleError:",{anError:anError},smalltalk.ErrorHandler)})},
args: ["anError"],
source: "handleError: anError\x0a\x09anError context ifNotNil: [self logErrorContext: anError context].\x0a\x09self logError: anError",
messageSends: ["ifNotNil:", "logErrorContext:", "context", "logError:"],
referencedClasses: []
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "log:",
category: 'private',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(console)._log_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"log:",{aString:aString},smalltalk.ErrorHandler)})},
args: ["aString"],
source: "log: aString\x0a\x09console log: aString",
messageSends: ["log:"],
referencedClasses: []
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "logContext:",
category: 'private',
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aContext)._home();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
self._logContext_(_st(aContext)._home());
};
self._log_(_st(aContext)._asString());
return self}, function($ctx1) {$ctx1.fill(self,"logContext:",{aContext:aContext},smalltalk.ErrorHandler)})},
args: ["aContext"],
source: "logContext: aContext\x0a\x09aContext home ifNotNil: [\x0a\x09\x09self logContext: aContext home].\x0a\x09self log: aContext asString",
messageSends: ["ifNotNil:", "logContext:", "home", "log:", "asString"],
referencedClasses: []
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "logError:",
category: 'private',
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._log_(_st(anError)._messageText());
return self}, function($ctx1) {$ctx1.fill(self,"logError:",{anError:anError},smalltalk.ErrorHandler)})},
args: ["anError"],
source: "logError: anError\x0a\x09self log: anError messageText",
messageSends: ["log:", "messageText"],
referencedClasses: []
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "logErrorContext:",
category: 'private',
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aContext;
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
$2=_st(aContext)._home();
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
self._logContext_(_st(aContext)._home());
};
};
return self}, function($ctx1) {$ctx1.fill(self,"logErrorContext:",{aContext:aContext},smalltalk.ErrorHandler)})},
args: ["aContext"],
source: "logErrorContext: aContext\x0a\x09aContext ifNotNil: [\x0a\x09\x09aContext home ifNotNil: [\x0a\x09\x09\x09self logContext: aContext home]]",
messageSends: ["ifNotNil:", "logContext:", "home"],
referencedClasses: []
}),
smalltalk.ErrorHandler);


smalltalk.ErrorHandler.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@current"]=self._new();
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.ErrorHandler.klass)})},
args: [],
source: "current\x0a\x09^current ifNil: [current := self new]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._register();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ErrorHandler.klass)})},
args: [],
source: "initialize\x0a\x09self register",
messageSends: ["register"],
referencedClasses: []
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "register",
category: 'initialization',
fn: function (){
var self=this;
function $ErrorHandler(){return smalltalk.ErrorHandler||(typeof ErrorHandler=="undefined"?nil:ErrorHandler)}
return smalltalk.withContext(function($ctx1) { 
_st($ErrorHandler())._setCurrent_(self._new());
return self}, function($ctx1) {$ctx1.fill(self,"register",{},smalltalk.ErrorHandler.klass)})},
args: [],
source: "register\x0a\x09ErrorHandler setCurrent: self new",
messageSends: ["setCurrent:", "new"],
referencedClasses: ["ErrorHandler"]
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "setCurrent:",
category: 'accessing',
fn: function (anHandler){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@current"]=anHandler;
return self}, function($ctx1) {$ctx1.fill(self,"setCurrent:",{anHandler:anHandler},smalltalk.ErrorHandler.klass)})},
args: ["anHandler"],
source: "setCurrent: anHandler\x0a\x09current := anHandler",
messageSends: [],
referencedClasses: []
}),
smalltalk.ErrorHandler.klass);


