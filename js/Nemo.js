smalltalk.addPackage('Nemo', {});
smalltalk.addClass('NemoConnection', smalltalk.Object, ['socket'], 'Nemo');
smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self['@socket'], "_close", []);
(self['@socket']=nil);
return self;},
args: [],
source: "close\x0a\x09socket close.\x0a\x09socket := nil",
messageSends: ["close"],
referencedClasses: []
}),
smalltalk.NemoConnection);

smalltalk.addMethod(
"_createDefaultSocket",
smalltalk.method({
selector: "createDefaultSocket",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_createSocketOn_", [smalltalk.send(self, "_defaultURL", [])]);
return self;},
args: [],
source: "createDefaultSocket\x0a\x09\x0a\x09self createSocketOn: self defaultURL.",
messageSends: ["createSocketOn:", "defaultURL"],
referencedClasses: []
}),
smalltalk.NemoConnection);

smalltalk.addMethod(
"_createLocalSocketOn_",
smalltalk.method({
selector: "createLocalSocketOn:",
category: 'not yet classified',
fn: function (aPort){
var self=this;
return smalltalk.send(self, "_createSocketOn_", [smalltalk.send(smalltalk.send("ws://localhost:", "__comma", [smalltalk.send(aPort, "_asString", [])]), "__comma", ["/nemo"])]);
return self;},
args: ["aPort"],
source: "createLocalSocketOn: aPort\x0a\x0a\x09^ self createSocketOn: 'ws://localhost:', aPort asString, '/nemo'",
messageSends: ["createSocketOn:", ",", "asString"],
referencedClasses: []
}),
smalltalk.NemoConnection);

smalltalk.addMethod(
"_createSocketOn_",
smalltalk.method({
selector: "createSocketOn:",
category: 'not yet classified',
fn: function (uri){
var self=this;
(self['@socket']=new WebSocket(uri));
smalltalk.send(self['@socket'], "_at_put_", ["onmessage", (function(message){return smalltalk.send(self, "_handleMessage_", [message]);})]);
smalltalk.send(self['@socket'], "_at_put_", ["onerror", (function(err){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [err]);})]);
return self;},
args: ["uri"],
source: "createSocketOn: uri\x0a\x09socket := <new WebSocket(uri)>.\x0a\x09socket at: 'onmessage' put: [ :message | self handleMessage: message ].\x0a\x09socket at: 'onerror' put: [ :err | console log: err ]",
messageSends: ["at:put:", "handleMessage:", "log:"],
referencedClasses: []
}),
smalltalk.NemoConnection);

smalltalk.addMethod(
"_defaultURL",
smalltalk.method({
selector: "defaultURL",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_defaultURL", []);
return self;},
args: [],
source: "defaultURL\x0a\x0a\x09^ self class defaultURL",
messageSends: ["defaultURL", "class"],
referencedClasses: []
}),
smalltalk.NemoConnection);

smalltalk.addMethod(
"_handleMessage_",
smalltalk.method({
selector: "handleMessage:",
category: 'not yet classified',
fn: function (aMessage){
var self=this;
var $early={};
try{var string=nil;
var result=nil;
(string=smalltalk.send(aMessage, "_data", []));
((($receiver = smalltalk.send(string, "_isString", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw $early=[self]})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw $early=[self]})();})]));
smalltalk.send((function(){return (result=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_evaluateExpression_", [string]));}), "_on_do_", [(smalltalk.Error || Error), (function(ex){return (function(){throw $early=[smalltalk.send(self['@socket'], "_send_", [smalltalk.send(ex, "_asNemoString", [])])]})();})]);
smalltalk.send(self['@socket'], "_send_", [smalltalk.send(result, "_asNemoString", [])]);
return self;
} catch(e) {if(e===$early)return e[0]; throw e}},
args: ["aMessage"],
source: "handleMessage: aMessage\x0a\x09| string result |\x0a\x0a\x09string := aMessage data.\x0a\x09string isString ifFalse: [ ^ self ].\x0a\x0a\x09[ result := Compiler new evaluateExpression: string ]\x0a\x09\x09on: Error\x0a\x09\x09do: [ :ex | ^ socket send: ex asNemoString ].\x0a\x09socket send: result asNemoString",
messageSends: ["data", "ifFalse:", "isString", "on:do:", "evaluateExpression:", "new", "send:", "asNemoString"],
referencedClasses: ["Compiler", "Error"]
}),
smalltalk.NemoConnection);

smalltalk.addMethod(
"_send_",
smalltalk.method({
selector: "send:",
category: 'not yet classified',
fn: function (aString){
var self=this;
smalltalk.send(self['@socket'], "_send_", [aString]);
return self;},
args: ["aString"],
source: "send: aString\x0a\x09socket send: aString",
messageSends: ["send:"],
referencedClasses: []
}),
smalltalk.NemoConnection);


smalltalk.NemoConnection.klass.iVarNames = ['default'];
smalltalk.addMethod(
"_default",
smalltalk.method({
selector: "default",
category: 'not yet classified',
fn: function (){
var self=this;
return (($receiver = self['@default']) == nil || $receiver == undefined) ? (function(){return (self['@default']=smalltalk.send(self, "_new", []));})() : $receiver;
return self;},
args: [],
source: "default\x0a\x09^ default ifNil: [ default := self new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.NemoConnection.klass);

smalltalk.addMethod(
"_defaultURL",
smalltalk.method({
selector: "defaultURL",
category: 'not yet classified',
fn: function (){
var self=this;
return "ws://localhost:8010/nemo";
return self;},
args: [],
source: "defaultURL\x0a\x0a\x09^ 'ws://localhost:8010/nemo'",
messageSends: [],
referencedClasses: []
}),
smalltalk.NemoConnection.klass);


smalltalk.addMethod(
"_asNemo",
smalltalk.method({
selector: "asNemo",
category: '*Nemo',
fn: function (){
var self=this;
return smalltalk.send(self, "_asJSON", []);
return self;},
args: [],
source: "asNemo\x0a\x09^ self asJSON",
messageSends: ["asJSON"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_asNemoString",
smalltalk.method({
selector: "asNemoString",
category: '*Nemo',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.JSON || JSON), "_stringify_", [smalltalk.send(self, "_asNemo", [])]);
return self;},
args: [],
source: "asNemoString\x0a\x09^JSON stringify: self asNemo",
messageSends: ["stringify:", "asNemo"],
referencedClasses: ["JSON"]
}),
smalltalk.Object);

smalltalk.addMethod(
"_asNemo",
smalltalk.method({
selector: "asNemo",
category: '*Nemo',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", ["name", smalltalk.send(self, "_name", [])]);smalltalk.send($rec, "_at_put_", ["superclass", (($receiver = smalltalk.send(self, "_superclass", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(self, "_superclass", []), "_name", []);})() : nil]);smalltalk.send($rec, "_at_put_", ["classComment", smalltalk.send(self, "_comment", [])]);smalltalk.send($rec, "_at_put_", ["definition", smalltalk.send(self, "_definition", [])]);smalltalk.send($rec, "_at_put_", ["package", smalltalk.send(self, "_category", [])]);smalltalk.send($rec, "_at_put_", ["instVarNames", smalltalk.send(self, "_instanceVariableNames", [])]);return smalltalk.send($rec, "_asNemo", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;},
args: [],
source: "asNemo\x0a\x09^ Dictionary new\x0a\x09\x09at: 'name' put: self name;\x0a\x09\x09at: 'superclass' put: (self superclass ifNotNil: [ self superclass name ]);\x0a\x09\x09at: 'classComment' put: self comment;\x0a\x09\x09at: 'definition' put: self definition;\x0a\x09\x09at: 'package' put: self category;\x0a\x09\x09at: 'instVarNames' put: self instanceVariableNames;\x0a\x09\x09asNemo",
messageSends: ["at:put:", "name", "ifNotNil:", "superclass", "comment", "definition", "category", "instanceVariableNames", "asNemo", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.Class);

smalltalk.addMethod(
"_asNemo",
smalltalk.method({
selector: "asNemo",
category: '*Nemo',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", ["definition", smalltalk.send(self, "_definition", [])]);smalltalk.send($rec, "_at_put_", ["instVarNames", smalltalk.send(self, "_instanceVariableNames", [])]);return smalltalk.send($rec, "_asNemo", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;},
args: [],
source: "asNemo\x0a\x09^ Dictionary new\x0a\x09\x09at: 'definition' put: self definition;\x0a\x09\x09at: 'instVarNames' put: self instanceVariableNames;\x0a\x09\x09asNemo",
messageSends: ["at:put:", "definition", "instanceVariableNames", "asNemo", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.Metaclass);

smalltalk.addMethod(
"_asNemo",
smalltalk.method({
selector: "asNemo",
category: '*Nemo',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_asArray", []), "_collect_", [(function(each){return smalltalk.send(each, "_asNemo", []);})]);
return self;},
args: [],
source: "asNemo\x0a\x09^self asArray collect: [:each | each asNemo]",
messageSends: ["collect:", "asArray", "asNemo"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_asNemo",
smalltalk.method({
selector: "asNemo",
category: '*Nemo',
fn: function (){
var self=this;
var c=nil;
(c=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []));
smalltalk.send(self, "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(c, "_at_put_", [key, smalltalk.send(value, "_asNemo", [])]);})]);
return c;
return self;},
args: [],
source: "asNemo\x0a\x09| c |\x0a\x09c := self class new.\x0a\x09self keysAndValuesDo: [:key :value |\x0a\x09\x09c at: key put: value asNemo].\x0a\x09^c",
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:", "asNemo"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_asNemo",
smalltalk.method({
selector: "asNemo",
category: '*Nemo',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_asHashedCollection", []), "_asNemo", []);
return self;},
args: [],
source: "asNemo\x0a\x09^self asHashedCollection asNemo",
messageSends: ["asNemo", "asHashedCollection"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_asNemo",
smalltalk.method({
selector: "asNemo",
category: '*Nemo',
fn: function (){
var self=this;
return self;
return self;},
args: [],
source: "asNemo\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_asNemo",
smalltalk.method({
selector: "asNemo",
category: '*Nemo',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", ["name", smalltalk.send(self, "_selector", [])]);smalltalk.send($rec, "_at_put_", ["protocol", smalltalk.send(self, "_category", [])]);smalltalk.send($rec, "_at_put_", ["sourceCode", smalltalk.send(self, "_source", [])]);smalltalk.send($rec, "_at_put_", ["compiledSource", smalltalk.send(smalltalk.send(self, "_fn", []), "_compiledSource", [])]);smalltalk.send($rec, "_at_put_", ["messageSends", smalltalk.send(self, "_messageSends", [])]);return smalltalk.send($rec, "_asNemo", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;},
args: [],
source: "asNemo\x0a\x09^ Dictionary new\x0a\x09\x09at: 'name' put: self selector;\x0a\x09\x09at: 'protocol' put: self category;\x0a\x09\x09at: 'sourceCode' put: self source;\x0a\x09\x09at: 'compiledSource' put: self fn compiledSource;\x0a\x09\x09at: 'messageSends' put: self messageSends;\x0a\x09\x09asNemo",
messageSends: ["at:put:", "selector", "category", "source", "compiledSource", "fn", "messageSends", "asNemo", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_asNemo",
smalltalk.method({
selector: "asNemo",
category: '*Nemo',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", ["error", smalltalk.send(self, "_messageText", [])]);return smalltalk.send($rec, "_asNemo", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;},
args: [],
source: "asNemo\x0a\x09^ Dictionary new\x0a\x09\x09at: 'error' put: self messageText;\x0a\x09\x09asNemo",
messageSends: ["at:put:", "messageText", "asNemo", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.Error);

smalltalk.addMethod(
"_asNemo",
smalltalk.method({
selector: "asNemo",
category: '*Nemo',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", ["name", smalltalk.send(self, "_name", [])]);return smalltalk.send($rec, "_asNemo", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;},
args: [],
source: "asNemo\x0a\x09^ Dictionary new\x0a\x09\x09at: 'name' put: self name;\x0a\x09\x09asNemo",
messageSends: ["at:put:", "name", "asNemo", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.Package);

