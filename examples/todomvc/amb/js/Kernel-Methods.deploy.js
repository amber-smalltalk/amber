smalltalk.addPackage('Kernel-Methods', {});
smalltalk.addClass('CompiledMethod', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.addMethod(
unescape('_source'),
smalltalk.method({
selector: unescape('source'),
fn: function (){
var self=this;
return (($receiver = smalltalk.send(self, "_basicAt_", ["source"])) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver;
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_source_'),
smalltalk.method({
selector: unescape('source%3A'),
fn: function (aString){
var self=this;
smalltalk.send(self, "_basicAt_put_", ["source", aString]);
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_category'),
smalltalk.method({
selector: unescape('category'),
fn: function (){
var self=this;
return (($receiver = smalltalk.send(self, "_basicAt_", ["category"])) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver;
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_category_'),
smalltalk.method({
selector: unescape('category%3A'),
fn: function (aString){
var self=this;
smalltalk.send(self, "_basicAt_put_", ["category", aString]);
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_selector'),
smalltalk.method({
selector: unescape('selector'),
fn: function (){
var self=this;
return smalltalk.send(self, "_basicAt_", ["selector"]);
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_selector_'),
smalltalk.method({
selector: unescape('selector%3A'),
fn: function (aString){
var self=this;
smalltalk.send(self, "_basicAt_put_", ["selector", aString]);
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_fn'),
smalltalk.method({
selector: unescape('fn'),
fn: function (){
var self=this;
return smalltalk.send(self, "_basicAt_", ["fn"]);
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_fn_'),
smalltalk.method({
selector: unescape('fn%3A'),
fn: function (aBlock){
var self=this;
smalltalk.send(self, "_basicAt_put_", ["fn", aBlock]);
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_messageSends'),
smalltalk.method({
selector: unescape('messageSends'),
fn: function (){
var self=this;
return smalltalk.send(self, "_basicAt_", ["messageSends"]);
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_methodClass'),
smalltalk.method({
selector: unescape('methodClass'),
fn: function (){
var self=this;
return smalltalk.send(self, "_basicAt_", ["methodClass"]);
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_referencedClasses'),
smalltalk.method({
selector: unescape('referencedClasses'),
fn: function (){
var self=this;
return smalltalk.send(self, "_basicAt_", ["referencedClasses"]);
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_arguments'),
smalltalk.method({
selector: unescape('arguments'),
fn: function (){
var self=this;
return self.args || [];
return self;}
}),
smalltalk.CompiledMethod);



smalltalk.addClass('BlockClosure', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.addMethod(
unescape('_compiledSource'),
smalltalk.method({
selector: unescape('compiledSource'),
fn: function (){
var self=this;
return self.toString();
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_whileTrue_'),
smalltalk.method({
selector: unescape('whileTrue%3A'),
fn: function (aBlock){
var self=this;
while(self()) {aBlock()};
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_whileFalse_'),
smalltalk.method({
selector: unescape('whileFalse%3A'),
fn: function (aBlock){
var self=this;
while(!self()) {aBlock()};
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_value'),
smalltalk.method({
selector: unescape('value'),
fn: function (){
var self=this;
return self();;
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_value_'),
smalltalk.method({
selector: unescape('value%3A'),
fn: function (anArg){
var self=this;
return self(anArg);;
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_value_value_'),
smalltalk.method({
selector: unescape('value%3Avalue%3A'),
fn: function (firstArg, secondArg){
var self=this;
return self(firstArg, secondArg);;
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_value_value_value_'),
smalltalk.method({
selector: unescape('value%3Avalue%3Avalue%3A'),
fn: function (firstArg, secondArg, thirdArg){
var self=this;
return self(firstArg, secondArg, thirdArg);;
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_valueWithPossibleArguments_'),
smalltalk.method({
selector: unescape('valueWithPossibleArguments%3A'),
fn: function (aCollection){
var self=this;
return self.apply(null, aCollection);;
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_on_do_'),
smalltalk.method({
selector: unescape('on%3Ado%3A'),
fn: function (anErrorClass, aBlock){
var self=this;
return smalltalk.send(self, "_try_catch_", [self, (function(error){return ((($receiver = smalltalk.send(error, "_isKindOf_", [anErrorClass])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(aBlock, "_value_", [error]);})() : (function(){return smalltalk.send(error, "_signal", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(aBlock, "_value_", [error]);}), (function(){return smalltalk.send(error, "_signal", []);})]));})]);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_valueWithTimeout_'),
smalltalk.method({
selector: unescape('valueWithTimeout%3A'),
fn: function (aNumber){
var self=this;
return setTimeout(self, aNumber);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_valueWithInterval_'),
smalltalk.method({
selector: unescape('valueWithInterval%3A'),
fn: function (aNumber){
var self=this;
return setInterval(self, aNumber);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_whileFalse'),
smalltalk.method({
selector: unescape('whileFalse'),
fn: function (){
var self=this;
smalltalk.send(self, "_whileFalse_", [(function(){return nil;})]);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_whileTrue'),
smalltalk.method({
selector: unescape('whileTrue'),
fn: function (){
var self=this;
smalltalk.send(self, "_whileTrue_", [(function(){return nil;})]);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_new'),
smalltalk.method({
selector: unescape('new'),
fn: function (){
var self=this;
return new self();
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_applyTo_arguments_'),
smalltalk.method({
selector: unescape('applyTo%3Aarguments%3A'),
fn: function (anObject, aCollection){
var self=this;
return self.apply(anObject, aCollection);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_timeToRun'),
smalltalk.method({
selector: unescape('timeToRun'),
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Date || Date), "_millisecondsToRun_", [self]);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_numArgs'),
smalltalk.method({
selector: unescape('numArgs'),
fn: function (){
var self=this;
return self.length;
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_ensure_'),
smalltalk.method({
selector: unescape('ensure%3A'),
fn: function (aBlock){
var self=this;
var success=nil;
(success=false);
return smalltalk.send((function(){smalltalk.send(self, "_value", []);(success=true);return smalltalk.send(aBlock, "_value", []);}), "_on_do_", [(smalltalk.Error || Error), (function(ex){((($receiver = success).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(aBlock, "_value", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(aBlock, "_value", []);})]));return smalltalk.send(ex, "_signal", []);})]);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_newValue_'),
smalltalk.method({
selector: unescape('newValue%3A'),
fn: function (anObject){
var self=this;
return new self(anObject);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_newValue_value_'),
smalltalk.method({
selector: unescape('newValue%3Avalue%3A'),
fn: function (anObject, anObject2){
var self=this;
return new self(anObject, anObject2);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_newValue_value_value_'),
smalltalk.method({
selector: unescape('newValue%3Avalue%3Avalue%3A'),
fn: function (anObject, anObject2, anObject3){
var self=this;
return new self(anObject, anObject2);
return self;}
}),
smalltalk.BlockClosure);



smalltalk.addClass('MethodContext', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.addMethod(
unescape('_receiver'),
smalltalk.method({
selector: unescape('receiver'),
fn: function (){
var self=this;
return self.receiver;
return self;}
}),
smalltalk.MethodContext);

smalltalk.addMethod(
unescape('_selector'),
smalltalk.method({
selector: unescape('selector'),
fn: function (){
var self=this;
return smalltalk.convertSelector(self.selector);
return self;}
}),
smalltalk.MethodContext);

smalltalk.addMethod(
unescape('_home'),
smalltalk.method({
selector: unescape('home'),
fn: function (){
var self=this;
return self.homeContext;
return self;}
}),
smalltalk.MethodContext);

smalltalk.addMethod(
unescape('_temps'),
smalltalk.method({
selector: unescape('temps'),
fn: function (){
var self=this;
return self.temps;
return self;}
}),
smalltalk.MethodContext);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_printString", [], smalltalk.Object), "__comma", [unescape("%28")]), "__comma", [smalltalk.send(self, "_asString", [])]), "__comma", [unescape("%29")]);
return self;}
}),
smalltalk.MethodContext);

smalltalk.addMethod(
unescape('_asString'),
smalltalk.method({
selector: unescape('asString'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_receiver", []), "_class", []), "_printString", []), "__comma", [unescape("%20%3E%3E%20")]), "__comma", [smalltalk.send(self, "_selector", [])]);
return self;}
}),
smalltalk.MethodContext);



smalltalk.addClass('Message', smalltalk.Object, ['selector', 'arguments'], 'Kernel-Methods');
smalltalk.addMethod(
unescape('_selector'),
smalltalk.method({
selector: unescape('selector'),
fn: function (){
var self=this;
return self['@selector'];
return self;}
}),
smalltalk.Message);

smalltalk.addMethod(
unescape('_selector_'),
smalltalk.method({
selector: unescape('selector%3A'),
fn: function (aString){
var self=this;
(self['@selector']=aString);
return self;}
}),
smalltalk.Message);

smalltalk.addMethod(
unescape('_arguments_'),
smalltalk.method({
selector: unescape('arguments%3A'),
fn: function (anArray){
var self=this;
(self['@arguments']=anArray);
return self;}
}),
smalltalk.Message);

smalltalk.addMethod(
unescape('_arguments'),
smalltalk.method({
selector: unescape('arguments'),
fn: function (){
var self=this;
return self['@arguments'];
return self;}
}),
smalltalk.Message);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
fn: function (){
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(aStream){return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_printString", [], smalltalk.Object)]);smalltalk.send($rec, "_nextPutAll_", [unescape("%28")]);smalltalk.send($rec, "_nextPutAll_", [self['@selector']]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%29")]);})(aStream);})]);
return self;}
}),
smalltalk.Message);


smalltalk.addMethod(
unescape('_selector_arguments_'),
smalltalk.method({
selector: unescape('selector%3Aarguments%3A'),
fn: function (aString, anArray){
var self=this;
return (function($rec){smalltalk.send($rec, "_selector_", [aString]);smalltalk.send($rec, "_arguments_", [anArray]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Message.klass);


