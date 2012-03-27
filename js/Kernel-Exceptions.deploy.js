smalltalk.addPackage('Kernel-Exceptions', {});
smalltalk.addClass('Error', smalltalk.Object, ['messageText'], 'Kernel-Exceptions');
smalltalk.addMethod(
unescape('_context'),
smalltalk.method({
selector: unescape('context'),
fn: function (){
var self=this;
return self.context;
return self;}
}),
smalltalk.Error);

smalltalk.addMethod(
unescape('_isSmalltalkError'),
smalltalk.method({
selector: unescape('isSmalltalkError'),
fn: function (){
var self=this;
return self.smalltalkError === true;
return self;}
}),
smalltalk.Error);

smalltalk.addMethod(
unescape('_jsStack'),
smalltalk.method({
selector: unescape('jsStack'),
fn: function (){
var self=this;
return self.stack;
return self;}
}),
smalltalk.Error);

smalltalk.addMethod(
unescape('_messageText'),
smalltalk.method({
selector: unescape('messageText'),
fn: function (){
var self=this;
return self['@messageText'];
return self;}
}),
smalltalk.Error);

smalltalk.addMethod(
unescape('_messageText_'),
smalltalk.method({
selector: unescape('messageText%3A'),
fn: function (aString){
var self=this;
(self['@messageText']=aString);
return self;}
}),
smalltalk.Error);

smalltalk.addMethod(
unescape('_signal'),
smalltalk.method({
selector: unescape('signal'),
fn: function (){
var self=this;
self.context = smalltalk.getThisContext(); self.smalltalkError = true; throw(self);
return self;}
}),
smalltalk.Error);


smalltalk.addMethod(
unescape('_signal_'),
smalltalk.method({
selector: unescape('signal%3A'),
fn: function (aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_messageText_", [aString]);return smalltalk.send($rec, "_signal", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Error.klass);


smalltalk.addClass('MessageNotUnderstood', smalltalk.Error, ['message', 'receiver'], 'Kernel-Exceptions');
smalltalk.addMethod(
unescape('_message'),
smalltalk.method({
selector: unescape('message'),
fn: function (){
var self=this;
return self['@message'];
return self;}
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
unescape('_message_'),
smalltalk.method({
selector: unescape('message%3A'),
fn: function (aMessage){
var self=this;
(self['@message']=aMessage);
return self;}
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
unescape('_messageText'),
smalltalk.method({
selector: unescape('messageText'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_receiver", []), "_asString", []), "__comma", [unescape("%20does%20not%20understand%20%23")]), "__comma", [smalltalk.send(smalltalk.send(self, "_message", []), "_selector", [])]);
return self;}
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
unescape('_receiver'),
smalltalk.method({
selector: unescape('receiver'),
fn: function (){
var self=this;
return self['@receiver'];
return self;}
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
unescape('_receiver_'),
smalltalk.method({
selector: unescape('receiver%3A'),
fn: function (anObject){
var self=this;
(self['@receiver']=anObject);
return self;}
}),
smalltalk.MessageNotUnderstood);



smalltalk.addClass('ErrorHandler', smalltalk.Object, [], 'Kernel-Exceptions');
smalltalk.addMethod(
unescape('_handleError_'),
smalltalk.method({
selector: unescape('handleError%3A'),
fn: function (anError){
var self=this;
(($receiver = smalltalk.send(anError, "_context", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_logErrorContext_", [smalltalk.send(anError, "_context", [])]);})() : nil;
smalltalk.send(self, "_logError_", [anError]);
return self;}
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
unescape('_log_'),
smalltalk.method({
selector: unescape('log%3A'),
fn: function (aString){
var self=this;
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [aString]);
return self;}
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
unescape('_logContext_'),
smalltalk.method({
selector: unescape('logContext%3A'),
fn: function (aContext){
var self=this;
(($receiver = smalltalk.send(aContext, "_home", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_logContext_", [smalltalk.send(aContext, "_home", [])]);})() : nil;
smalltalk.send(self, "_log_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aContext, "_receiver", []), "_asString", []), "__comma", [unescape("%3E%3E")]), "__comma", [smalltalk.send(aContext, "_selector", [])])]);
return self;}
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
unescape('_logError_'),
smalltalk.method({
selector: unescape('logError%3A'),
fn: function (anError){
var self=this;
smalltalk.send(self, "_log_", [smalltalk.send(anError, "_messageText", [])]);
return self;}
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
unescape('_logErrorContext_'),
smalltalk.method({
selector: unescape('logErrorContext%3A'),
fn: function (aContext){
var self=this;
(($receiver = aContext) != nil && $receiver != undefined) ? (function(){return (($receiver = smalltalk.send(aContext, "_home", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_logContext_", [smalltalk.send(aContext, "_home", [])]);})() : nil;})() : nil;
return self;}
}),
smalltalk.ErrorHandler);


smalltalk.ErrorHandler.klass.iVarNames = ['current'];
smalltalk.addMethod(
unescape('_current'),
smalltalk.method({
selector: unescape('current'),
fn: function (){
var self=this;
return (($receiver = self['@current']) == nil || $receiver == undefined) ? (function(){return (self['@current']=smalltalk.send(self, "_new", []));})() : $receiver;
return self;}
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_register", []);
return self;}
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
unescape('_register'),
smalltalk.method({
selector: unescape('register'),
fn: function (){
var self=this;
smalltalk.send((smalltalk.ErrorHandler || ErrorHandler), "_setCurrent_", [smalltalk.send(self, "_new", [])]);
return self;}
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
unescape('_setCurrent_'),
smalltalk.method({
selector: unescape('setCurrent%3A'),
fn: function (anHandler){
var self=this;
(self['@current']=anHandler);
return self;}
}),
smalltalk.ErrorHandler.klass);


