smalltalk.addPackage('Kernel-Exceptions');
smalltalk.addClass('Error', smalltalk.Object, ['messageText'], 'Kernel-Exceptions');
smalltalk.addMethod(
"_context",
smalltalk.method({
selector: "context",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.context;
return self}, function($ctx1) {$ctx1.fill(self,"context",{},smalltalk.Error)})},
messageSends: []}),
smalltalk.Error);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._messageText_(_st("Errorclass: ").__comma(_st(_st(self)._class())._name()));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Error)})},
messageSends: ["messageText:", ",", "name", "class"]}),
smalltalk.Error);

smalltalk.addMethod(
"_isSmalltalkError",
smalltalk.method({
selector: "isSmalltalkError",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.smalltalkError === true;
return self}, function($ctx1) {$ctx1.fill(self,"isSmalltalkError",{},smalltalk.Error)})},
messageSends: []}),
smalltalk.Error);

smalltalk.addMethod(
"_jsStack",
smalltalk.method({
selector: "jsStack",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.stack;
return self}, function($ctx1) {$ctx1.fill(self,"jsStack",{},smalltalk.Error)})},
messageSends: []}),
smalltalk.Error);

smalltalk.addMethod(
"_messageText",
smalltalk.method({
selector: "messageText",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@messageText"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageText",{},smalltalk.Error)})},
messageSends: []}),
smalltalk.Error);

smalltalk.addMethod(
"_messageText_",
smalltalk.method({
selector: "messageText:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@messageText"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"messageText:",{aString:aString},smalltalk.Error)})},
messageSends: []}),
smalltalk.Error);

smalltalk.addMethod(
"_signal",
smalltalk.method({
selector: "signal",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self.context = smalltalk.getThisContext(); self.smalltalkError = true; throw(self);
return self}, function($ctx1) {$ctx1.fill(self,"signal",{},smalltalk.Error)})},
messageSends: []}),
smalltalk.Error);

smalltalk.addMethod(
"_signal_",
smalltalk.method({
selector: "signal:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._messageText_(aString);
_st(self)._signal();
return self}, function($ctx1) {$ctx1.fill(self,"signal:",{aString:aString},smalltalk.Error)})},
messageSends: ["messageText:", "signal"]}),
smalltalk.Error);


smalltalk.addMethod(
"_signal",
smalltalk.method({
selector: "signal",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._signal();
return $1;
}, function($ctx1) {$ctx1.fill(self,"signal",{},smalltalk.Error.klass)})},
messageSends: ["signal", "new"]}),
smalltalk.Error.klass);

smalltalk.addMethod(
"_signal_",
smalltalk.method({
selector: "signal:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._signal_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"signal:",{aString:aString},smalltalk.Error.klass)})},
messageSends: ["signal:", "new"]}),
smalltalk.Error.klass);


smalltalk.addClass('JavaScriptException', smalltalk.Error, ['exception'], 'Kernel-Exceptions');
smalltalk.addMethod(
"_context_",
smalltalk.method({
selector: "context:",
fn: function (aMethodContext){
var self=this;
return smalltalk.withContext(function($ctx1) { self.context = aMethodContext;
return self}, function($ctx1) {$ctx1.fill(self,"context:",{aMethodContext:aMethodContext},smalltalk.JavaScriptException)})},
messageSends: []}),
smalltalk.JavaScriptException);

smalltalk.addMethod(
"_exception",
smalltalk.method({
selector: "exception",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@exception"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"exception",{},smalltalk.JavaScriptException)})},
messageSends: []}),
smalltalk.JavaScriptException);

smalltalk.addMethod(
"_exception_",
smalltalk.method({
selector: "exception:",
fn: function (anException){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@exception"]=anException;
return self}, function($ctx1) {$ctx1.fill(self,"exception:",{anException:anException},smalltalk.JavaScriptException)})},
messageSends: []}),
smalltalk.JavaScriptException);

smalltalk.addMethod(
"_messageText",
smalltalk.method({
selector: "messageText",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return 'JavaScript exception: ' + self["@exception"].toString();
return self}, function($ctx1) {$ctx1.fill(self,"messageText",{},smalltalk.JavaScriptException)})},
messageSends: []}),
smalltalk.JavaScriptException);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (anException){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._exception_(anException);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anException:anException},smalltalk.JavaScriptException.klass)})},
messageSends: ["exception:", "new", "yourself"]}),
smalltalk.JavaScriptException.klass);

smalltalk.addMethod(
"_on_context_",
smalltalk.method({
selector: "on:context:",
fn: function (anException,aMethodContext){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._exception_(anException);
_st($2)._context_(aMethodContext);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:context:",{anException:anException,aMethodContext:aMethodContext},smalltalk.JavaScriptException.klass)})},
messageSends: ["exception:", "new", "context:", "yourself"]}),
smalltalk.JavaScriptException.klass);


smalltalk.addClass('MessageNotUnderstood', smalltalk.Error, ['message', 'receiver'], 'Kernel-Exceptions');
smalltalk.addMethod(
"_message",
smalltalk.method({
selector: "message",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@message"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"message",{},smalltalk.MessageNotUnderstood)})},
messageSends: []}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
"_message_",
smalltalk.method({
selector: "message:",
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@message"]=aMessage;
return self}, function($ctx1) {$ctx1.fill(self,"message:",{aMessage:aMessage},smalltalk.MessageNotUnderstood)})},
messageSends: []}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
"_messageText",
smalltalk.method({
selector: "messageText",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(self)._receiver())._asString()).__comma(" does not understand #")).__comma(_st(_st(self)._message())._selector());
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageText",{},smalltalk.MessageNotUnderstood)})},
messageSends: [",", "selector", "message", "asString", "receiver"]}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@receiver"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},smalltalk.MessageNotUnderstood)})},
messageSends: []}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@receiver"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{anObject:anObject},smalltalk.MessageNotUnderstood)})},
messageSends: []}),
smalltalk.MessageNotUnderstood);



smalltalk.addClass('NonBooleanReceiver', smalltalk.Error, ['object'], 'Kernel-Exceptions');
smalltalk.addMethod(
"_object",
smalltalk.method({
selector: "object",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@object"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"object",{},smalltalk.NonBooleanReceiver)})},
messageSends: []}),
smalltalk.NonBooleanReceiver);

smalltalk.addMethod(
"_object_",
smalltalk.method({
selector: "object:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@object"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"object:",{anObject:anObject},smalltalk.NonBooleanReceiver)})},
messageSends: []}),
smalltalk.NonBooleanReceiver);



smalltalk.addClass('ErrorHandler', smalltalk.Object, [], 'Kernel-Exceptions');
smalltalk.addMethod(
"_handleError_",
smalltalk.method({
selector: "handleError:",
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anError)._context();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self)._logErrorContext_(_st(anError)._context());
};
_st(self)._logError_(anError);
return self}, function($ctx1) {$ctx1.fill(self,"handleError:",{anError:anError},smalltalk.ErrorHandler)})},
messageSends: ["ifNotNil:", "logErrorContext:", "context", "logError:"]}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
"_log_",
smalltalk.method({
selector: "log:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(console)._log_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"log:",{aString:aString},smalltalk.ErrorHandler)})},
messageSends: ["log:"]}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
"_logContext_",
smalltalk.method({
selector: "logContext:",
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aContext)._home();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self)._logContext_(_st(aContext)._home());
};
_st(self)._log_(_st(_st(_st(_st(aContext)._receiver())._asString()).__comma(">>")).__comma(_st(_st(aContext)._selector())._asString()));
return self}, function($ctx1) {$ctx1.fill(self,"logContext:",{aContext:aContext},smalltalk.ErrorHandler)})},
messageSends: ["ifNotNil:", "logContext:", "home", "log:", ",", "asString", "selector", "receiver"]}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
"_logError_",
smalltalk.method({
selector: "logError:",
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._log_(_st(anError)._messageText());
return self}, function($ctx1) {$ctx1.fill(self,"logError:",{anError:anError},smalltalk.ErrorHandler)})},
messageSends: ["log:", "messageText"]}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
"_logErrorContext_",
smalltalk.method({
selector: "logErrorContext:",
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=aContext;
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
$2=_st(aContext)._home();
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
_st(self)._logContext_(_st(aContext)._home());
};
};
return self}, function($ctx1) {$ctx1.fill(self,"logErrorContext:",{aContext:aContext},smalltalk.ErrorHandler)})},
messageSends: ["ifNotNil:", "logContext:", "home"]}),
smalltalk.ErrorHandler);


smalltalk.ErrorHandler.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@current"]=_st(self)._new();
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.ErrorHandler.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._register();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ErrorHandler.klass)})},
messageSends: ["register"]}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
"_register",
smalltalk.method({
selector: "register",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((smalltalk.ErrorHandler || ErrorHandler))._setCurrent_(_st(self)._new());
return self}, function($ctx1) {$ctx1.fill(self,"register",{},smalltalk.ErrorHandler.klass)})},
messageSends: ["setCurrent:", "new"]}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
"_setCurrent_",
smalltalk.method({
selector: "setCurrent:",
fn: function (anHandler){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@current"]=anHandler;
return self}, function($ctx1) {$ctx1.fill(self,"setCurrent:",{anHandler:anHandler},smalltalk.ErrorHandler.klass)})},
messageSends: []}),
smalltalk.ErrorHandler.klass);


