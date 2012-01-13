smalltalk.addPackage('Kernel-Transcript', {});
smalltalk.addClass('Transcript', smalltalk.Object, ['textarea'], 'Kernel-Transcript');

smalltalk.Transcript.klass.iVarNames = ['current'];
smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
category: 'instance creation',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_current", []), "_open", []);
return self;},
args: [],
source: unescape('open%0D%0A%20%20%20%20self%20current%20open'),
messageSends: ["open", "current"],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
unescape('_new'),
smalltalk.method({
selector: unescape('new'),
category: 'instance creation',
fn: function (){
var self=this;
smalltalk.send(self, "_shouldNotImplement", []);
return self;},
args: [],
source: unescape('new%0D%0A%20%20%20%20self%20shouldNotImplement'),
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
unescape('_current'),
smalltalk.method({
selector: unescape('current'),
category: 'instance creation',
fn: function (){
var self=this;
return self['@current'];
return self;},
args: [],
source: unescape('current%0D%0A%20%20%20%20%5Ecurrent'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
unescape('_show_'),
smalltalk.method({
selector: unescape('show%3A'),
category: 'printing',
fn: function (anObject){
var self=this;
smalltalk.send(smalltalk.send(self, "_current", []), "_show_", [anObject]);
return self;},
args: ["anObject"],
source: unescape('show%3A%20anObject%0D%0A%20%20%20%20self%20current%20show%3A%20anObject'),
messageSends: ["show:", "current"],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
unescape('_cr'),
smalltalk.method({
selector: unescape('cr'),
category: 'printing',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_current", []), "_show_", [smalltalk.send((smalltalk.String || String), "_cr", [])]);
return self;},
args: [],
source: unescape('cr%0D%0A%20%20%20%20self%20current%20show%3A%20String%20cr'),
messageSends: ["show:", "current", "cr"],
referencedClasses: ["String"]
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
unescape('_clear'),
smalltalk.method({
selector: unescape('clear'),
category: 'printing',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_current", []), "_clear", []);
return self;},
args: [],
source: unescape('clear%0D%0A%20%20%20%20self%20current%20clear'),
messageSends: ["clear", "current"],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
unescape('_register_'),
smalltalk.method({
selector: unescape('register%3A'),
category: 'instance creation',
fn: function (aTranscript){
var self=this;
(self['@current']=aTranscript);
return self;},
args: ["aTranscript"],
source: unescape('register%3A%20aTranscript%0D%0A%09current%20%3A%3D%20aTranscript'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Transcript.klass);


smalltalk.addClass('ConsoleTranscript', smalltalk.Object, ['textarea'], 'Kernel-Transcript');
smalltalk.addMethod(
unescape('_clear'),
smalltalk.method({
selector: unescape('clear'),
category: 'printing',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('clear%0D%0A%09%22no%20op%22'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
unescape('_cr'),
smalltalk.method({
selector: unescape('cr'),
category: 'printing',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('cr%0D%0A%09%22no%20op%22'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
unescape('_show_'),
smalltalk.method({
selector: unescape('show%3A'),
category: 'printing',
fn: function (anObject){
var self=this;
var string=nil;
(string=smalltalk.send(anObject, "_asString", []));
console.log(String(string));
return self;},
args: ["anObject"],
source: unescape('show%3A%20anObject%0D%0A%09%7C%20string%20%7C%0D%0A%09string%20%3A%3D%20anObject%20asString.%0D%0A%09%3Cconsole.log%28String%28string%29%29%3E'),
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
category: 'actions',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('open'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);


smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send((smalltalk.Transcript || Transcript), "_register_", [smalltalk.send(self, "_new", [])]);
return self;},
args: [],
source: unescape('initialize%0D%0A%09Transcript%20register%3A%20self%20new'),
messageSends: ["register:", "new"],
referencedClasses: ["Transcript"]
}),
smalltalk.ConsoleTranscript.klass);


