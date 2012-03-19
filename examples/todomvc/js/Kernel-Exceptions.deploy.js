smalltalk.addPackage('Kernel-Exceptions', {});
smalltalk.addClass('Error', smalltalk.Object, ['messageText'], 'Kernel-Exceptions');
smalltalk.addMethod(
'_messageText',
smalltalk.method({
selector: 'messageText',
fn: function (){
var self=this;
return self['@messageText'];
return self;}
}),
smalltalk.Error);

smalltalk.addMethod(
'_messageText_',
smalltalk.method({
selector: 'messageText:',
fn: function (aString){
var self=this;
(self['@messageText']=aString);
return self;}
}),
smalltalk.Error);

smalltalk.addMethod(
'_signal',
smalltalk.method({
selector: 'signal',
fn: function (){
var self=this;
self.context = smalltalk.getThisContext(); self.smalltalkError = true; throw(self);
return self;}
}),
smalltalk.Error);

smalltalk.addMethod(
'_context',
smalltalk.method({
selector: 'context',
fn: function (){
var self=this;
return self.context;
return self;}
}),
smalltalk.Error);

smalltalk.addMethod(
'_jsStack',
smalltalk.method({
selector: 'jsStack',
fn: function (){
var self=this;
return self.stack;
return self;}
}),
smalltalk.Error);

smalltalk.addMethod(
'_isSmalltalkError',
smalltalk.method({
selector: 'isSmalltalkError',
fn: function (){
var self=this;
return self.smalltalkError === true;
return self;}
}),
smalltalk.Error);


smalltalk.addMethod(
'_signal_',
smalltalk.method({
selector: 'signal:',
fn: function (aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_messageText_", [aString]);return smalltalk.send($rec, "_signal", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Error.klass);


smalltalk.addClass('MessageNotUnderstood', smalltalk.Error, ['message', 'receiver'], 'Kernel-Exceptions');
smalltalk.addMethod(
'_message',
smalltalk.method({
selector: 'message',
fn: function (){
var self=this;
return self['@message'];
return self;}
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
'_message_',
smalltalk.method({
selector: 'message:',
fn: function (aMessage){
var self=this;
(self['@message']=aMessage);
return self;}
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
'_receiver',
smalltalk.method({
selector: 'receiver',
fn: function (){
var self=this;
return self['@receiver'];
return self;}
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
'_receiver_',
smalltalk.method({
selector: 'receiver:',
fn: function (anObject){
var self=this;
(self['@receiver']=anObject);
return self;}
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
'_messageText',
smalltalk.method({
selector: 'messageText',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_receiver", []), "_asString", []), "__comma", [unescape("%20does%20not%20understand%20%23")]), "__comma", [smalltalk.send(smalltalk.send(self, "_message", []), "_selector", [])]);
return self;}
}),
smalltalk.MessageNotUnderstood);



smalltalk.addClass('ErrorHandler', smalltalk.Object, [], 'Kernel-Exceptions');
smalltalk.addMethod(
'_handleError_',
smalltalk.method({
selector: 'handleError:',
fn: function (anError){
var self=this;
(($receiver = smalltalk.send(anError, "_context", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_logErrorContext_", [smalltalk.send(anError, "_context", [])]);})() : nil;
smalltalk.send(self, "_logError_", [anError]);
return self;}
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
'_logContext_',
smalltalk.method({
selector: 'logContext:',
fn: function (aContext){
var self=this;
(($receiver = smalltalk.send(aContext, "_home", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_logContext_", [smalltalk.send(aContext, "_home", [])]);})() : nil;
smalltalk.send(self, "_log_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aContext, "_receiver", []), "_asString", []), "__comma", [unescape("%3E%3E")]), "__comma", [smalltalk.send(aContext, "_selector", [])])]);
return self;}
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
'_logErrorContext_',
smalltalk.method({
selector: 'logErrorContext:',
fn: function (aContext){
var self=this;
(($receiver = aContext) != nil && $receiver != undefined) ? (function(){return (($receiver = smalltalk.send(aContext, "_home", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_logContext_", [smalltalk.send(aContext, "_home", [])]);})() : nil;})() : nil;
return self;}
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
'_logError_',
smalltalk.method({
selector: 'logError:',
fn: function (anError){
var self=this;
smalltalk.send(self, "_log_", [smalltalk.send(anError, "_messageText", [])]);
return self;}
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
'_log_',
smalltalk.method({
selector: 'log:',
fn: function (aString){
var self=this;
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [aString]);
return self;}
}),
smalltalk.ErrorHandler);


smalltalk.ErrorHandler.klass.iVarNames = ['current'];
smalltalk.addMethod(
'_current',
smalltalk.method({
selector: 'current',
fn: function (){
var self=this;
return (($receiver = self['@current']) == nil || $receiver == undefined) ? (function(){return (self['@current']=smalltalk.send(self, "_new", []));})() : $receiver;
return self;}
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_register", []);
return self;}
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
'_register',
smalltalk.method({
selector: 'register',
fn: function (){
var self=this;
smalltalk.send((smalltalk.ErrorHandler || ErrorHandler), "_setCurrent_", [smalltalk.send(self, "_new", [])]);
return self;}
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
'_setCurrent_',
smalltalk.method({
selector: 'setCurrent:',
fn: function (anHandler){
var self=this;
(self['@current']=anHandler);
return self;}
}),
smalltalk.ErrorHandler.klass);


