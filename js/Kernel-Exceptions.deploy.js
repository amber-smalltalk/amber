smalltalk.addPackage('Kernel-Exceptions', {});
smalltalk.addClass('Error', smalltalk.Object, ['messageText'], 'Kernel-Exceptions');
smalltalk.addMethod(
"_context",
smalltalk.method({
selector: "context",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.context;
;
return self}, self, "context", [], smalltalk.Error)}
}),
smalltalk.Error);

smalltalk.addMethod(
"_isSmalltalkError",
smalltalk.method({
selector: "isSmalltalkError",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.smalltalkError === true;
;
return self}, self, "isSmalltalkError", [], smalltalk.Error)}
}),
smalltalk.Error);

smalltalk.addMethod(
"_jsStack",
smalltalk.method({
selector: "jsStack",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.stack;
;
return self}, self, "jsStack", [], smalltalk.Error)}
}),
smalltalk.Error);

smalltalk.addMethod(
"_messageText",
smalltalk.method({
selector: "messageText",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@messageText"];
}, self, "messageText", [], smalltalk.Error)}
}),
smalltalk.Error);

smalltalk.addMethod(
"_messageText_",
smalltalk.method({
selector: "messageText:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@messageText"]=aString;
return self}, self, "messageText:", [aString], smalltalk.Error)}
}),
smalltalk.Error);

smalltalk.addMethod(
"_signal",
smalltalk.method({
selector: "signal",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self.context = smalltalk.getThisContext(); self.smalltalkError = true; throw(self);
;
return self}, self, "signal", [], smalltalk.Error)}
}),
smalltalk.Error);

smalltalk.addMethod(
"_signal_",
smalltalk.method({
selector: "signal:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._messageText_(aString);
_st(self)._signal();
return self}, self, "signal:", [aString], smalltalk.Error)}
}),
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
}, self, "signal", [], smalltalk.Error.klass)}
}),
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
}, self, "signal:", [aString], smalltalk.Error.klass)}
}),
smalltalk.Error.klass);


smalltalk.addClass('MessageNotUnderstood', smalltalk.Error, ['message', 'receiver'], 'Kernel-Exceptions');
smalltalk.addMethod(
"_message",
smalltalk.method({
selector: "message",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@message"];
}, self, "message", [], smalltalk.MessageNotUnderstood)}
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
"_message_",
smalltalk.method({
selector: "message:",
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@message"]=aMessage;
return self}, self, "message:", [aMessage], smalltalk.MessageNotUnderstood)}
}),
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
}, self, "messageText", [], smalltalk.MessageNotUnderstood)}
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@receiver"];
}, self, "receiver", [], smalltalk.MessageNotUnderstood)}
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@receiver"]=anObject;
return self}, self, "receiver:", [anObject], smalltalk.MessageNotUnderstood)}
}),
smalltalk.MessageNotUnderstood);



smalltalk.addClass('NonBooleanReceiver', smalltalk.Error, ['object'], 'Kernel-Exceptions');
smalltalk.addMethod(
"_object",
smalltalk.method({
selector: "object",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@object"];
}, self, "object", [], smalltalk.NonBooleanReceiver)}
}),
smalltalk.NonBooleanReceiver);

smalltalk.addMethod(
"_object_",
smalltalk.method({
selector: "object:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@object"]=anObject;
return self}, self, "object:", [anObject], smalltalk.NonBooleanReceiver)}
}),
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
return self}, self, "handleError:", [anError], smalltalk.ErrorHandler)}
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
"_log_",
smalltalk.method({
selector: "log:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(console)._log_(aString);
return self}, self, "log:", [aString], smalltalk.ErrorHandler)}
}),
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
return self}, self, "logContext:", [aContext], smalltalk.ErrorHandler)}
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
"_logError_",
smalltalk.method({
selector: "logError:",
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._log_(_st(anError)._messageText());
return self}, self, "logError:", [anError], smalltalk.ErrorHandler)}
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
"_logErrorContext_",
smalltalk.method({
selector: "logErrorContext:",
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = aContext) == nil || $receiver == undefined){
aContext;
} else {
$1=_st(aContext)._home();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self)._logContext_(_st(aContext)._home());
};
};
return self}, self, "logErrorContext:", [aContext], smalltalk.ErrorHandler)}
}),
smalltalk.ErrorHandler);


smalltalk.ErrorHandler.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@current"]) == nil || $receiver == undefined){
self["@current"]=_st(self)._new();
$1=self["@current"];
} else {
$1=self["@current"];
};
return $1;
}, self, "current", [], smalltalk.ErrorHandler.klass)}
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._register();
return self}, self, "initialize", [], smalltalk.ErrorHandler.klass)}
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
"_register",
smalltalk.method({
selector: "register",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((smalltalk.ErrorHandler || ErrorHandler))._setCurrent_(_st(self)._new());
return self}, self, "register", [], smalltalk.ErrorHandler.klass)}
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
"_setCurrent_",
smalltalk.method({
selector: "setCurrent:",
fn: function (anHandler){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@current"]=anHandler;
return self}, self, "setCurrent:", [anHandler], smalltalk.ErrorHandler.klass)}
}),
smalltalk.ErrorHandler.klass);


