smalltalk.addPackage('Kernel-Exceptions', {});
smalltalk.addClass('Error', smalltalk.Object, ['messageText'], 'Kernel-Exceptions');
smalltalk.addMethod(
unescape('_messageText'),
smalltalk.method({
selector: unescape('messageText'),
category: 'accessing',
fn: function (){
var self=this;
return self['@messageText'];
return self;},
args: [],
source: unescape('messageText%0D%0A%09%5EmessageText'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
unescape('_messageText_'),
smalltalk.method({
selector: unescape('messageText%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
(self['@messageText']=aString);
return self;},
args: ["aString"],
source: unescape('messageText%3A%20aString%0D%0A%09messageText%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
unescape('_signal'),
smalltalk.method({
selector: unescape('signal'),
category: 'signaling',
fn: function (){
var self=this;
self.context = smalltalk.getThisContext(); self.smalltalkError = true; throw(self);
return self;},
args: [],
source: unescape('signal%0D%0A%09%3Cself.context%20%3D%20smalltalk.getThisContext%28%29%3B%20self.smalltalkError%20%3D%20true%3B%20throw%28self%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
unescape('_context'),
smalltalk.method({
selector: unescape('context'),
category: 'accessing',
fn: function (){
var self=this;
return self.context;
return self;},
args: [],
source: unescape('context%0D%0A%09%3Creturn%20self.context%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
unescape('_jsStack'),
smalltalk.method({
selector: unescape('jsStack'),
category: 'accessing',
fn: function (){
var self=this;
return self.stack;
return self;},
args: [],
source: unescape('jsStack%0D%0A%09%3Creturn%20self.stack%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
unescape('_isSmalltalkError'),
smalltalk.method({
selector: unescape('isSmalltalkError'),
category: 'testing',
fn: function (){
var self=this;
return self.smalltalkError === true;
return self;},
args: [],
source: unescape('isSmalltalkError%0D%0A%09%3Creturn%20self.smalltalkError%20%3D%3D%3D%20true%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);


smalltalk.addMethod(
unescape('_signal_'),
smalltalk.method({
selector: unescape('signal%3A'),
category: 'instance creation',
fn: function (aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_messageText_", [aString]);return smalltalk.send($rec, "_signal", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aString"],
source: unescape('signal%3A%20aString%0D%0A%09%20%20%20%20%5Eself%20new%0D%0A%09%09messageText%3A%20aString%3B%0D%0A%09%09signal'),
messageSends: ["messageText:", "signal", "new"],
referencedClasses: []
}),
smalltalk.Error.klass);


smalltalk.addClass('MessageNotUnderstood', smalltalk.Error, ['message', 'receiver'], 'Kernel-Exceptions');
smalltalk.addMethod(
unescape('_message'),
smalltalk.method({
selector: unescape('message'),
category: 'accessing',
fn: function (){
var self=this;
return self['@message'];
return self;},
args: [],
source: unescape('message%0D%0A%09%5Emessage'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
unescape('_message_'),
smalltalk.method({
selector: unescape('message%3A'),
category: 'accessing',
fn: function (aMessage){
var self=this;
(self['@message']=aMessage);
return self;},
args: ["aMessage"],
source: unescape('message%3A%20aMessage%0D%0A%09message%20%3A%3D%20aMessage'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
unescape('_receiver'),
smalltalk.method({
selector: unescape('receiver'),
category: 'accessing',
fn: function (){
var self=this;
return self['@receiver'];
return self;},
args: [],
source: unescape('receiver%0D%0A%09%5Ereceiver'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
unescape('_receiver_'),
smalltalk.method({
selector: unescape('receiver%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
(self['@receiver']=anObject);
return self;},
args: ["anObject"],
source: unescape('receiver%3A%20anObject%0D%0A%09receiver%20%3A%3D%20anObject'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
unescape('_messageText'),
smalltalk.method({
selector: unescape('messageText'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_receiver", []), "_asString", []), "__comma", [unescape("%20does%20not%20understand%20%23")]), "__comma", [smalltalk.send(smalltalk.send(self, "_message", []), "_selector", [])]);
return self;},
args: [],
source: unescape('messageText%0D%0A%09%5Eself%20receiver%20asString%2C%20%27%20does%20not%20understand%20%23%27%2C%20self%20message%20selector'),
messageSends: [unescape("%2C"), "asString", "receiver", "selector", "message"],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);



smalltalk.addClass('ErrorHandler', smalltalk.Object, [], 'Kernel-Exceptions');
smalltalk.addMethod(
unescape('_handleError_'),
smalltalk.method({
selector: unescape('handleError%3A'),
category: 'error handling',
fn: function (anError){
var self=this;
(($receiver = smalltalk.send(anError, "_context", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_logErrorContext_", [smalltalk.send(anError, "_context", [])]);})() : nil;
smalltalk.send(self, "_logError_", [anError]);
return self;},
args: ["anError"],
source: unescape('handleError%3A%20anError%0D%0A%09anError%20context%20ifNotNil%3A%20%5Bself%20logErrorContext%3A%20anError%20context%5D.%0D%0A%09self%20logError%3A%20anError'),
messageSends: ["ifNotNil:", "context", "logErrorContext:", "logError:"],
referencedClasses: []
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
unescape('_logContext_'),
smalltalk.method({
selector: unescape('logContext%3A'),
category: 'private',
fn: function (aContext){
var self=this;
(($receiver = smalltalk.send(aContext, "_home", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_logContext_", [smalltalk.send(aContext, "_home", [])]);})() : nil;
smalltalk.send(self, "_log_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aContext, "_receiver", []), "_asString", []), "__comma", [unescape("%3E%3E")]), "__comma", [smalltalk.send(aContext, "_selector", [])])]);
return self;},
args: ["aContext"],
source: unescape('logContext%3A%20aContext%0D%0A%09aContext%20home%20ifNotNil%3A%20%5B%0D%0A%09%09self%20logContext%3A%20aContext%20home%5D.%0D%0A%09self%20log%3A%20aContext%20receiver%20asString%2C%20%27%3E%3E%27%2C%20aContext%20selector'),
messageSends: ["ifNotNil:", "home", "logContext:", "log:", unescape("%2C"), "asString", "receiver", "selector"],
referencedClasses: []
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
unescape('_logErrorContext_'),
smalltalk.method({
selector: unescape('logErrorContext%3A'),
category: 'private',
fn: function (aContext){
var self=this;
(($receiver = aContext) != nil && $receiver != undefined) ? (function(){return (($receiver = smalltalk.send(aContext, "_home", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_logContext_", [smalltalk.send(aContext, "_home", [])]);})() : nil;})() : nil;
return self;},
args: ["aContext"],
source: unescape('logErrorContext%3A%20aContext%0D%0A%09aContext%20ifNotNil%3A%20%5B%0D%0A%09%09aContext%20home%20ifNotNil%3A%20%5B%0D%0A%09%09%09self%20logContext%3A%20aContext%20home%5D%5D'),
messageSends: ["ifNotNil:", "home", "logContext:"],
referencedClasses: []
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
unescape('_logError_'),
smalltalk.method({
selector: unescape('logError%3A'),
category: 'private',
fn: function (anError){
var self=this;
smalltalk.send(self, "_log_", [smalltalk.send(anError, "_messageText", [])]);
return self;},
args: ["anError"],
source: unescape('logError%3A%20anError%0D%0A%09self%20log%3A%20anError%20messageText'),
messageSends: ["log:", "messageText"],
referencedClasses: []
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
unescape('_log_'),
smalltalk.method({
selector: unescape('log%3A'),
category: 'private',
fn: function (aString){
var self=this;
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [aString]);
return self;},
args: ["aString"],
source: unescape('log%3A%20aString%0D%0A%09console%20log%3A%20aString'),
messageSends: ["log:"],
referencedClasses: []
}),
smalltalk.ErrorHandler);


smalltalk.ErrorHandler.klass.iVarNames = ['current'];
smalltalk.addMethod(
unescape('_current'),
smalltalk.method({
selector: unescape('current'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@current']) == nil || $receiver == undefined) ? (function(){return (self['@current']=smalltalk.send(self, "_new", []));})() : $receiver;
return self;},
args: [],
source: unescape('current%0D%0A%09%5Ecurrent%20ifNil%3A%20%5Bcurrent%20%3A%3D%20self%20new%5D'),
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_register", []);
return self;},
args: [],
source: unescape('initialize%0D%0A%09self%20register'),
messageSends: ["register"],
referencedClasses: []
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
unescape('_register'),
smalltalk.method({
selector: unescape('register'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send((smalltalk.ErrorHandler || ErrorHandler), "_setCurrent_", [smalltalk.send(self, "_new", [])]);
return self;},
args: [],
source: unescape('register%0D%0A%09ErrorHandler%20setCurrent%3A%20self%20new'),
messageSends: ["setCurrent:", "new"],
referencedClasses: ["ErrorHandler"]
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
unescape('_setCurrent_'),
smalltalk.method({
selector: unescape('setCurrent%3A'),
category: 'accessing',
fn: function (anHandler){
var self=this;
(self['@current']=anHandler);
return self;},
args: ["anHandler"],
source: unescape('setCurrent%3A%20anHandler%0D%0A%09current%20%3A%3D%20anHandler'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ErrorHandler.klass);


