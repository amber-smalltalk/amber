smalltalk.addPackage('Kernel-Exceptions', {});
smalltalk.addClass('Error', smalltalk.Object, ['messageText'], 'Kernel-Exceptions');
smalltalk.addMethod(
"_context",
smalltalk.method({
selector: "context",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.context;
return self}, function($ctx1) {$ctx1.fill(self,"context",{}, smalltalk.Error)})}
}),
smalltalk.Error);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._messageText_(_st("Errorclass: ").__comma(_st(_st(self)._class())._name()));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.Error)})}
}),
smalltalk.Error);

smalltalk.addMethod(
"_isSmalltalkError",
smalltalk.method({
selector: "isSmalltalkError",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.smalltalkError === true;
return self}, function($ctx1) {$ctx1.fill(self,"isSmalltalkError",{}, smalltalk.Error)})}
}),
smalltalk.Error);

smalltalk.addMethod(
"_jsStack",
smalltalk.method({
selector: "jsStack",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.stack;
return self}, function($ctx1) {$ctx1.fill(self,"jsStack",{}, smalltalk.Error)})}
}),
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
}, function($ctx1) {$ctx1.fill(self,"messageText",{}, smalltalk.Error)})}
}),
smalltalk.Error);

smalltalk.addMethod(
"_messageText_",
smalltalk.method({
selector: "messageText:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@messageText"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"messageText:",{aString:aString}, smalltalk.Error)})}
}),
smalltalk.Error);

smalltalk.addMethod(
"_signal",
smalltalk.method({
selector: "signal",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self.context = smalltalk.getThisContext(); self.smalltalkError = true; throw(self);
return self}, function($ctx1) {$ctx1.fill(self,"signal",{}, smalltalk.Error)})}
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
return self}, function($ctx1) {$ctx1.fill(self,"signal:",{aString:aString}, smalltalk.Error)})}
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
}, function($ctx1) {$ctx1.fill(self,"signal",{}, smalltalk.Error.klass)})}
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
}, function($ctx1) {$ctx1.fill(self,"signal:",{aString:aString}, smalltalk.Error.klass)})}
}),
smalltalk.Error.klass);


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
}, function($ctx1) {$ctx1.fill(self,"message",{}, smalltalk.MessageNotUnderstood)})}
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
"_message_",
smalltalk.method({
selector: "message:",
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@message"]=aMessage;
return self}, function($ctx1) {$ctx1.fill(self,"message:",{aMessage:aMessage}, smalltalk.MessageNotUnderstood)})}
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
}, function($ctx1) {$ctx1.fill(self,"messageText",{}, smalltalk.MessageNotUnderstood)})}
}),
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
}, function($ctx1) {$ctx1.fill(self,"receiver",{}, smalltalk.MessageNotUnderstood)})}
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@receiver"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{anObject:anObject}, smalltalk.MessageNotUnderstood)})}
}),
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
}, function($ctx1) {$ctx1.fill(self,"object",{}, smalltalk.NonBooleanReceiver)})}
}),
smalltalk.NonBooleanReceiver);

smalltalk.addMethod(
"_object_",
smalltalk.method({
selector: "object:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@object"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"object:",{anObject:anObject}, smalltalk.NonBooleanReceiver)})}
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
return self}, function($ctx1) {$ctx1.fill(self,"handleError:",{anError:anError}, smalltalk.ErrorHandler)})}
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
"_log_",
smalltalk.method({
selector: "log:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(console)._log_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"log:",{aString:aString}, smalltalk.ErrorHandler)})}
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
return self}, function($ctx1) {$ctx1.fill(self,"logContext:",{aContext:aContext}, smalltalk.ErrorHandler)})}
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
"_logError_",
smalltalk.method({
selector: "logError:",
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._log_(_st(anError)._messageText());
return self}, function($ctx1) {$ctx1.fill(self,"logError:",{anError:anError}, smalltalk.ErrorHandler)})}
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
"_logErrorContext_",
smalltalk.method({
selector: "logErrorContext:",
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$2;
$1=aContext;
$2=(function(){
return smalltalk.withContext(function($ctx2) {$3=_st(aContext)._home();
if(($receiver = $3) == nil || $receiver == undefined){
return $3;
} else {
return _st(self)._logContext_(_st(aContext)._home());
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
_st($1)._ifNotNil_($2);
return self}, function($ctx1) {$ctx1.fill(self,"logErrorContext:",{aContext:aContext}, smalltalk.ErrorHandler)})}
}),
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
}, function($ctx1) {$ctx1.fill(self,"current",{}, smalltalk.ErrorHandler.klass)})}
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._register();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.ErrorHandler.klass)})}
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
"_register",
smalltalk.method({
selector: "register",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((smalltalk.ErrorHandler || ErrorHandler))._setCurrent_(_st(self)._new());
return self}, function($ctx1) {$ctx1.fill(self,"register",{}, smalltalk.ErrorHandler.klass)})}
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
"_setCurrent_",
smalltalk.method({
selector: "setCurrent:",
fn: function (anHandler){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@current"]=anHandler;
return self}, function($ctx1) {$ctx1.fill(self,"setCurrent:",{anHandler:anHandler}, smalltalk.ErrorHandler.klass)})}
}),
smalltalk.ErrorHandler.klass);


