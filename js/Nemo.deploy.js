smalltalk.addPackage('Nemo', {});
smalltalk.addClass('NemoConnection', smalltalk.Object, ['socket'], 'Nemo');
smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
fn: function (){
var self=this;
smalltalk.send(self['@socket'], "_close", []);
(self['@socket']=nil);
return self;}
}),
smalltalk.NemoConnection);

smalltalk.addMethod(
"_createDefaultSocket",
smalltalk.method({
selector: "createDefaultSocket",
fn: function (){
var self=this;
smalltalk.send(self, "_createSocketOn_", [smalltalk.send(self, "_defaultURL", [])]);
return self;}
}),
smalltalk.NemoConnection);

smalltalk.addMethod(
"_createLocalSocketOn_",
smalltalk.method({
selector: "createLocalSocketOn:",
fn: function (aPort){
var self=this;
return smalltalk.send(self, "_createSocketOn_", [smalltalk.send(smalltalk.send("ws://localhost:", "__comma", [smalltalk.send(aPort, "_asString", [])]), "__comma", ["/nemo"])]);
return self;}
}),
smalltalk.NemoConnection);

smalltalk.addMethod(
"_createSocketOn_",
smalltalk.method({
selector: "createSocketOn:",
fn: function (uri){
var self=this;
(self['@socket']=new WebSocket(uri));
smalltalk.send(self['@socket'], "_at_put_", ["onmessage", (function(message){return smalltalk.send(self, "_handleMessage_", [message]);})]);
smalltalk.send(self['@socket'], "_at_put_", ["onerror", (function(err){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [err]);})]);
return self;}
}),
smalltalk.NemoConnection);

smalltalk.addMethod(
"_defaultURL",
smalltalk.method({
selector: "defaultURL",
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_defaultURL", []);
return self;}
}),
smalltalk.NemoConnection);

smalltalk.addMethod(
"_handleMessage_",
smalltalk.method({
selector: "handleMessage:",
fn: function (aMessage){
var self=this;
var $early={};
try{var string=nil;
var result=nil;
(string=smalltalk.send(aMessage, "_data", []));
((($receiver = smalltalk.send(string, "_isString", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw $early=[self]})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw $early=[self]})();})]));
smalltalk.send((smalltalk.Transcript || Transcript), "_show_", [string]);
(result=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_evaluateExpression_", [string]));
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [result]);
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send(result, "_asNemoString", [])]);
smalltalk.send(self['@socket'], "_send_", [smalltalk.send(result, "_asNemoString", [])]);
return self;
} catch(e) {if(e===$early)return e[0]; throw e}}
}),
smalltalk.NemoConnection);

smalltalk.addMethod(
"_send_",
smalltalk.method({
selector: "send:",
fn: function (aString){
var self=this;
smalltalk.send(self['@socket'], "_send_", [aString]);
return self;}
}),
smalltalk.NemoConnection);


smalltalk.NemoConnection.klass.iVarNames = ['default'];
smalltalk.addMethod(
"_default",
smalltalk.method({
selector: "default",
fn: function (){
var self=this;
return (($receiver = self['@default']) == nil || $receiver == undefined) ? (function(){return (self['@default']=smalltalk.send(self, "_new", []));})() : $receiver;
return self;}
}),
smalltalk.NemoConnection.klass);

smalltalk.addMethod(
"_defaultURL",
smalltalk.method({
selector: "defaultURL",
fn: function (){
var self=this;
return "ws://localhost:8010/nemo";
return self;}
}),
smalltalk.NemoConnection.klass);


smalltalk.addMethod(
"_asNemo",
smalltalk.method({
selector: "asNemo",
fn: function (){
var self=this;
return smalltalk.send(self, "_asJSON", []);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_asNemoString",
smalltalk.method({
selector: "asNemoString",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.JSON || JSON), "_stringify_", [smalltalk.send(self, "_asNemo", [])]);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_asNemo",
smalltalk.method({
selector: "asNemo",
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", ["name", smalltalk.send(self, "_name", [])]);smalltalk.send($rec, "_at_put_", ["superclass", (($receiver = smalltalk.send(self, "_superclass", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(self, "_superclass", []), "_name", []);})() : nil]);smalltalk.send($rec, "_at_put_", ["classComment", smalltalk.send(self, "_comment", [])]);smalltalk.send($rec, "_at_put_", ["definition", smalltalk.send(self, "_definition", [])]);smalltalk.send($rec, "_at_put_", ["package", smalltalk.send(self, "_category", [])]);return smalltalk.send($rec, "_asNemo", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;}
}),
smalltalk.Class);

smalltalk.addMethod(
"_asNemo",
smalltalk.method({
selector: "asNemo",
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_asArray", []), "_collect_", [(function(each){return smalltalk.send(each, "_asNemo", []);})]);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_asNemo",
smalltalk.method({
selector: "asNemo",
fn: function (){
var self=this;
var c=nil;
(c=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []));
smalltalk.send(self, "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(c, "_at_put_", [key, smalltalk.send(value, "_asNemo", [])]);})]);
return c;
return self;}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_asNemo",
smalltalk.method({
selector: "asNemo",
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_asHashedCollection", []), "_asNemo", []);
return self;}
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_asNemo",
smalltalk.method({
selector: "asNemo",
fn: function (){
var self=this;
return self;
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
"_asNemo",
smalltalk.method({
selector: "asNemo",
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", ["name", smalltalk.send(self, "_name", [])]);return smalltalk.send($rec, "_asNemo", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;}
}),
smalltalk.Package);

