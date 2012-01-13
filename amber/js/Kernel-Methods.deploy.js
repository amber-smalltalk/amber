smalltalk.addPackage('Kernel-Methods', {});
smalltalk.addClass('CompiledMethod', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.addMethod(
'_source',
smalltalk.method({
selector: 'source',
fn: function (){
var self=this;
return (($receiver = smalltalk.send(self, "_basicAt_", ["source"])) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver;
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_source_',
smalltalk.method({
selector: 'source:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_basicAt_put_", ["source", aString]);
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_category',
smalltalk.method({
selector: 'category',
fn: function (){
var self=this;
return (($receiver = smalltalk.send(self, "_basicAt_", ["category"])) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver;
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_category_',
smalltalk.method({
selector: 'category:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_basicAt_put_", ["category", aString]);
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_selector',
smalltalk.method({
selector: 'selector',
fn: function (){
var self=this;
return smalltalk.send(self, "_basicAt_", ["selector"]);
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_selector_',
smalltalk.method({
selector: 'selector:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_basicAt_put_", ["selector", aString]);
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_fn',
smalltalk.method({
selector: 'fn',
fn: function (){
var self=this;
return smalltalk.send(self, "_basicAt_", ["fn"]);
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_fn_',
smalltalk.method({
selector: 'fn:',
fn: function (aBlock){
var self=this;
smalltalk.send(self, "_basicAt_put_", ["fn", aBlock]);
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_messageSends',
smalltalk.method({
selector: 'messageSends',
fn: function (){
var self=this;
return smalltalk.send(self, "_basicAt_", ["messageSends"]);
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_methodClass',
smalltalk.method({
selector: 'methodClass',
fn: function (){
var self=this;
return smalltalk.send(self, "_basicAt_", ["methodClass"]);
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_referencedClasses',
smalltalk.method({
selector: 'referencedClasses',
fn: function (){
var self=this;
return smalltalk.send(self, "_basicAt_", ["referencedClasses"]);
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_arguments',
smalltalk.method({
selector: 'arguments',
fn: function (){
var self=this;
return self.args || [];
return self;}
}),
smalltalk.CompiledMethod);



smalltalk.addClass('BlockClosure', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.addMethod(
'_compiledSource',
smalltalk.method({
selector: 'compiledSource',
fn: function (){
var self=this;
return self.toString();
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_whileTrue_',
smalltalk.method({
selector: 'whileTrue:',
fn: function (aBlock){
var self=this;
while(self()) {aBlock()};
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_whileFalse_',
smalltalk.method({
selector: 'whileFalse:',
fn: function (aBlock){
var self=this;
while(!self()) {aBlock()};
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_value',
smalltalk.method({
selector: 'value',
fn: function (){
var self=this;
return self();;
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_value_',
smalltalk.method({
selector: 'value:',
fn: function (anArg){
var self=this;
return self(anArg);;
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_value_value_',
smalltalk.method({
selector: 'value:value:',
fn: function (firstArg, secondArg){
var self=this;
return self(firstArg, secondArg);;
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_value_value_value_',
smalltalk.method({
selector: 'value:value:value:',
fn: function (firstArg, secondArg, thirdArg){
var self=this;
return self(firstArg, secondArg, thirdArg);;
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_valueWithPossibleArguments_',
smalltalk.method({
selector: 'valueWithPossibleArguments:',
fn: function (aCollection){
var self=this;
return self.apply(null, aCollection);;
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_on_do_',
smalltalk.method({
selector: 'on:do:',
fn: function (anErrorClass, aBlock){
var self=this;
return smalltalk.send(self, "_try_catch_", [self, (function(error){return ((($receiver = smalltalk.send(error, "_isKindOf_", [anErrorClass])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(aBlock, "_value_", [error]);})() : (function(){return smalltalk.send(error, "_signal", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(aBlock, "_value_", [error]);}), (function(){return smalltalk.send(error, "_signal", []);})]));})]);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_valueWithTimeout_',
smalltalk.method({
selector: 'valueWithTimeout:',
fn: function (aNumber){
var self=this;
return setTimeout(self, aNumber);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_valueWithInterval_',
smalltalk.method({
selector: 'valueWithInterval:',
fn: function (aNumber){
var self=this;
return setInterval(self, aNumber);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_whileFalse',
smalltalk.method({
selector: 'whileFalse',
fn: function (){
var self=this;
smalltalk.send(self, "_whileFalse_", [(function(){return nil;})]);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_whileTrue',
smalltalk.method({
selector: 'whileTrue',
fn: function (){
var self=this;
smalltalk.send(self, "_whileTrue_", [(function(){return nil;})]);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_new',
smalltalk.method({
selector: 'new',
fn: function (){
var self=this;
return new self();
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_applyTo_arguments_',
smalltalk.method({
selector: 'applyTo:arguments:',
fn: function (anObject, aCollection){
var self=this;
return self.apply(anObject, aCollection);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_timeToRun',
smalltalk.method({
selector: 'timeToRun',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Date || Date), "_millisecondsToRun_", [self]);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_numArgs',
smalltalk.method({
selector: 'numArgs',
fn: function (){
var self=this;
return self.length;
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_ensure_',
smalltalk.method({
selector: 'ensure:',
fn: function (aBlock){
var self=this;
var success=nil;
(success=false);
return smalltalk.send((function(){smalltalk.send(self, "_value", []);(success=true);return smalltalk.send(aBlock, "_value", []);}), "_on_do_", [(smalltalk.Error || Error), (function(ex){((($receiver = success).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(aBlock, "_value", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(aBlock, "_value", []);})]));return smalltalk.send(ex, "_signal", []);})]);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_newValue_',
smalltalk.method({
selector: 'newValue:',
fn: function (anObject){
var self=this;
return new self(anObject);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_newValue_value_',
smalltalk.method({
selector: 'newValue:value:',
fn: function (anObject, anObject2){
var self=this;
return new self(anObject, anObject2);
return self;}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_newValue_value_value_',
smalltalk.method({
selector: 'newValue:value:value:',
fn: function (anObject, anObject2, anObject3){
var self=this;
return new self(anObject, anObject2);
return self;}
}),
smalltalk.BlockClosure);



smalltalk.addClass('MethodContext', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.addMethod(
'_receiver',
smalltalk.method({
selector: 'receiver',
fn: function (){
var self=this;
return self.receiver;
return self;}
}),
smalltalk.MethodContext);

smalltalk.addMethod(
'_selector',
smalltalk.method({
selector: 'selector',
fn: function (){
var self=this;
return smalltalk.convertSelector(self.selector);
return self;}
}),
smalltalk.MethodContext);

smalltalk.addMethod(
'_home',
smalltalk.method({
selector: 'home',
fn: function (){
var self=this;
return self.homeContext;
return self;}
}),
smalltalk.MethodContext);

smalltalk.addMethod(
'_temps',
smalltalk.method({
selector: 'temps',
fn: function (){
var self=this;
return self.temps;
return self;}
}),
smalltalk.MethodContext);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_printString", [], smalltalk.Object), "__comma", [unescape("%28")]), "__comma", [smalltalk.send(self, "_asString", [])]), "__comma", [unescape("%29")]);
return self;}
}),
smalltalk.MethodContext);

smalltalk.addMethod(
'_asString',
smalltalk.method({
selector: 'asString',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_receiver", []), "_class", []), "_printString", []), "__comma", [unescape("%20%3E%3E%20")]), "__comma", [smalltalk.send(self, "_selector", [])]);
return self;}
}),
smalltalk.MethodContext);



smalltalk.addClass('Message', smalltalk.Object, ['selector', 'arguments'], 'Kernel-Methods');
smalltalk.addMethod(
'_selector',
smalltalk.method({
selector: 'selector',
fn: function (){
var self=this;
return self['@selector'];
return self;}
}),
smalltalk.Message);

smalltalk.addMethod(
'_selector_',
smalltalk.method({
selector: 'selector:',
fn: function (aString){
var self=this;
(self['@selector']=aString);
return self;}
}),
smalltalk.Message);

smalltalk.addMethod(
'_arguments_',
smalltalk.method({
selector: 'arguments:',
fn: function (anArray){
var self=this;
(self['@arguments']=anArray);
return self;}
}),
smalltalk.Message);

smalltalk.addMethod(
'_arguments',
smalltalk.method({
selector: 'arguments',
fn: function (){
var self=this;
return self['@arguments'];
return self;}
}),
smalltalk.Message);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(aStream){return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_printString", [], smalltalk.Object)]);smalltalk.send($rec, "_nextPutAll_", [unescape("%28")]);smalltalk.send($rec, "_nextPutAll_", [self['@selector']]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%29")]);})(aStream);})]);
return self;}
}),
smalltalk.Message);


smalltalk.addMethod(
'_selector_arguments_',
smalltalk.method({
selector: 'selector:arguments:',
fn: function (aString, anArray){
var self=this;
return (function($rec){smalltalk.send($rec, "_selector_", [aString]);smalltalk.send($rec, "_arguments_", [anArray]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Message.klass);


