smalltalk.addPackage('Kernel-Methods');
smalltalk.addClass('BlockClosure', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.addMethod(
smalltalk.method({
selector: "applyTo:arguments:",
fn: function (anObject,aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.apply(anObject, aCollection);
return self}, function($ctx1) {$ctx1.fill(self,"applyTo:arguments:",{anObject:anObject,aCollection:aCollection},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "asCompiledMethod:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.method({selector:aString, fn:self});;
return self}, function($ctx1) {$ctx1.fill(self,"asCompiledMethod:",{aString:aString},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "compiledSource",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.toString();
return self}, function($ctx1) {$ctx1.fill(self,"compiledSource",{},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "currySelf",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		return function () {
			var args = [ this ];
			args.push.apply(args, arguments);
			return self.apply(null, args);
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"currySelf",{},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "ensure:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
try{return self._value()}finally{aBlock._value()};
return self}, function($ctx1) {$ctx1.fill(self,"ensure:",{aBlock:aBlock},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "fork",
fn: function (){
var self=this;
function $ForkPool(){return smalltalk.ForkPool||(typeof ForkPool=="undefined"?nil:ForkPool)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($ForkPool())._default())._fork_(self);
return self}, function($ctx1) {$ctx1.fill(self,"fork",{},smalltalk.BlockClosure)})},
messageSends: ["fork:", "default"]}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new self();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "newValue:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._newWithValues_([anObject]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newValue:",{anObject:anObject},smalltalk.BlockClosure)})},
messageSends: ["newWithValues:"]}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "newValue:value:",
fn: function (anObject,anObject2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._newWithValues_([anObject,anObject2]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newValue:value:",{anObject:anObject,anObject2:anObject2},smalltalk.BlockClosure)})},
messageSends: ["newWithValues:"]}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "newValue:value:value:",
fn: function (anObject,anObject2,anObject3){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._newWithValues_([anObject,anObject2,anObject3]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newValue:value:value:",{anObject:anObject,anObject2:anObject2,anObject3:anObject3},smalltalk.BlockClosure)})},
messageSends: ["newWithValues:"]}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "newWithValues:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 

	var constructor = function() {};
	constructor.prototype = self.prototype;
	var object = new constructor;
	var result = self.apply(object, aCollection);
	return typeof result === "object" ? result : object;;
return self}, function($ctx1) {$ctx1.fill(self,"newWithValues:",{aCollection:aCollection},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "numArgs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.length;
return self}, function($ctx1) {$ctx1.fill(self,"numArgs",{},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "on:do:",
fn: function (anErrorClass,aBlock){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=self._try_catch_(self,(function(error){
var smalltalkError;
return smalltalk.withContext(function($ctx2) {
smalltalkError=_st(_st($Smalltalk())._current())._asSmalltalkException_(error);
smalltalkError;
$2=_st(smalltalkError)._isKindOf_(anErrorClass);
if(smalltalk.assert($2)){
return _st(aBlock)._value_(smalltalkError);
} else {
return _st(smalltalkError)._resignal();
};
}, function($ctx2) {$ctx2.fillBlock({error:error,smalltalkError:smalltalkError},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:do:",{anErrorClass:anErrorClass,aBlock:aBlock},smalltalk.BlockClosure)})},
messageSends: ["try:catch:", "asSmalltalkException:", "current", "ifTrue:ifFalse:", "value:", "resignal", "isKindOf:"]}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return nil;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "timeToRun",
fn: function (){
var self=this;
function $Date(){return smalltalk.Date||(typeof Date=="undefined"?nil:Date)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Date())._millisecondsToRun_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"timeToRun",{},smalltalk.BlockClosure)})},
messageSends: ["millisecondsToRun:"]}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self();;
return self}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
fn: function (anArg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self(anArg);;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{anArg:anArg},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "value:value:",
fn: function (firstArg,secondArg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self(firstArg, secondArg);;
return self}, function($ctx1) {$ctx1.fill(self,"value:value:",{firstArg:firstArg,secondArg:secondArg},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "value:value:value:",
fn: function (firstArg,secondArg,thirdArg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self(firstArg, secondArg, thirdArg);;
return self}, function($ctx1) {$ctx1.fill(self,"value:value:value:",{firstArg:firstArg,secondArg:secondArg,thirdArg:thirdArg},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "valueWithInterval:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var interval = setInterval(self, aNumber);
		return smalltalk.Timeout._on_(interval);
	;
return self}, function($ctx1) {$ctx1.fill(self,"valueWithInterval:",{aNumber:aNumber},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "valueWithPossibleArguments:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.apply(null, aCollection);;
return self}, function($ctx1) {$ctx1.fill(self,"valueWithPossibleArguments:",{aCollection:aCollection},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "valueWithTimeout:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var timeout = setTimeout(self, aNumber);
		return smalltalk.Timeout._on_(timeout);
	;
return self}, function($ctx1) {$ctx1.fill(self,"valueWithTimeout:",{aNumber:aNumber},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "whileFalse",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"whileFalse",{},smalltalk.BlockClosure)})},
messageSends: ["whileFalse:"]}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "whileFalse:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
while(!smalltalk.assert(self._value())) {aBlock._value()};
return self}, function($ctx1) {$ctx1.fill(self,"whileFalse:",{aBlock:aBlock},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "whileTrue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"whileTrue",{},smalltalk.BlockClosure)})},
messageSends: ["whileTrue:"]}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "whileTrue:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
while(smalltalk.assert(self._value())) {aBlock._value()};
return self}, function($ctx1) {$ctx1.fill(self,"whileTrue:",{aBlock:aBlock},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);



smalltalk.addClass('CompiledMethod', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.addMethod(
smalltalk.method({
selector: "arguments",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.args || [];
return self}, function($ctx1) {$ctx1.fill(self,"arguments",{},smalltalk.CompiledMethod)})},
messageSends: []}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "category",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._basicAt_("category");
if(($receiver = $2) == nil || $receiver == undefined){
$1=self._defaultCategory();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"category",{},smalltalk.CompiledMethod)})},
messageSends: ["ifNil:", "defaultCategory", "basicAt:"]}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "category:",
fn: function (aString){
var self=this;
var oldProtocol;
function $MethodMoved(){return smalltalk.MethodMoved||(typeof MethodMoved=="undefined"?nil:MethodMoved)}
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
oldProtocol=self._protocol();
self._basicAt_put_("category",aString);
$1=_st($MethodMoved())._new();
_st($1)._method_(self);
_st($1)._oldProtocol_(oldProtocol);
$2=_st($1)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($2);
$3=self._methodClass();
if(($receiver = $3) == nil || $receiver == undefined){
$3;
} else {
_st(_st(self._methodClass())._organization())._addElement_(aString);
_st(_st(_st(self._methodClass())._methods())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._protocol()).__eq(oldProtocol);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self._methodClass())._organization())._removeElement_(oldProtocol);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"category:",{aString:aString,oldProtocol:oldProtocol},smalltalk.CompiledMethod)})},
messageSends: ["protocol", "basicAt:put:", "announce:", "method:", "new", "oldProtocol:", "yourself", "current", "ifNotNil:", "addElement:", "organization", "methodClass", "ifEmpty:", "removeElement:", "select:", "=", "methods"]}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultCategory",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "as yet unclassified";
}, function($ctx1) {$ctx1.fill(self,"defaultCategory",{},smalltalk.CompiledMethod)})},
messageSends: []}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "fn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicAt_("fn");
return $1;
}, function($ctx1) {$ctx1.fill(self,"fn",{},smalltalk.CompiledMethod)})},
messageSends: ["basicAt:"]}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "fn:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._basicAt_put_("fn",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"fn:",{aBlock:aBlock},smalltalk.CompiledMethod)})},
messageSends: ["basicAt:put:"]}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "isCompiledMethod",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isCompiledMethod",{},smalltalk.CompiledMethod)})},
messageSends: []}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "isOverridden",
fn: function (){
var self=this;
var selector;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
selector=self._selector();
_st(self._methodClass())._allSubclassesDo_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(each)._includesSelector_(selector);
if(smalltalk.assert($1)){
throw $early=[true];
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return false;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"isOverridden",{selector:selector},smalltalk.CompiledMethod)})},
messageSends: ["selector", "allSubclassesDo:", "ifTrue:", "includesSelector:", "methodClass"]}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "isOverride",
fn: function (){
var self=this;
var superclass;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
superclass=_st(self._methodClass())._superclass();
$1=superclass;
if(($receiver = $1) == nil || $receiver == undefined){
return false;
} else {
$1;
};
$2=_st(_st(_st(self._methodClass())._superclass())._lookupSelector_(self._selector()))._notNil();
return $2;
}, function($ctx1) {$ctx1.fill(self,"isOverride",{superclass:superclass},smalltalk.CompiledMethod)})},
messageSends: ["superclass", "methodClass", "ifNil:", "notNil", "lookupSelector:", "selector"]}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "messageSends",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicAt_("messageSends");
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageSends",{},smalltalk.CompiledMethod)})},
messageSends: ["basicAt:"]}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "methodClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicAt_("methodClass");
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodClass",{},smalltalk.CompiledMethod)})},
messageSends: ["basicAt:"]}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "protocol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._category();
return $1;
}, function($ctx1) {$ctx1.fill(self,"protocol",{},smalltalk.CompiledMethod)})},
messageSends: ["category"]}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "protocol:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._category_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"protocol:",{aString:aString},smalltalk.CompiledMethod)})},
messageSends: ["category:"]}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "referencedClasses",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicAt_("referencedClasses");
return $1;
}, function($ctx1) {$ctx1.fill(self,"referencedClasses",{},smalltalk.CompiledMethod)})},
messageSends: ["basicAt:"]}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicAt_("selector");
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.CompiledMethod)})},
messageSends: ["basicAt:"]}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "selector:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._basicAt_put_("selector",aString);
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aString:aString},smalltalk.CompiledMethod)})},
messageSends: ["basicAt:put:"]}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "source",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._basicAt_("source");
if(($receiver = $2) == nil || $receiver == undefined){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"source",{},smalltalk.CompiledMethod)})},
messageSends: ["ifNil:", "basicAt:"]}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "source:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._basicAt_put_("source",aString);
return self}, function($ctx1) {$ctx1.fill(self,"source:",{aString:aString},smalltalk.CompiledMethod)})},
messageSends: ["basicAt:put:"]}),
smalltalk.CompiledMethod);



smalltalk.addClass('ForkPool', smalltalk.Object, ['poolSize', 'maxPoolSize', 'queue', 'worker'], 'Kernel-Methods');
smalltalk.addMethod(
smalltalk.method({
selector: "addWorker",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@worker"])._valueWithTimeout_((0));
self["@poolSize"]=_st(self["@poolSize"]).__plus((1));
return self}, function($ctx1) {$ctx1.fill(self,"addWorker",{},smalltalk.ForkPool)})},
messageSends: ["valueWithTimeout:", "+"]}),
smalltalk.ForkPool);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultMaxPoolSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._defaultMaxPoolSize();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultMaxPoolSize",{},smalltalk.ForkPool)})},
messageSends: ["defaultMaxPoolSize", "class"]}),
smalltalk.ForkPool);

smalltalk.addMethod(
smalltalk.method({
selector: "fork:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@poolSize"]).__lt(self._maxPoolSize());
if(smalltalk.assert($1)){
self._addWorker();
};
_st(self["@queue"])._nextPut_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"fork:",{aBlock:aBlock},smalltalk.ForkPool)})},
messageSends: ["ifTrue:", "addWorker", "<", "maxPoolSize", "nextPut:"]}),
smalltalk.ForkPool);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Queue(){return smalltalk.Queue||(typeof Queue=="undefined"?nil:Queue)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ForkPool.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@poolSize"]=(0);
self["@queue"]=_st($Queue())._new();
self["@worker"]=self._makeWorker();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ForkPool)})},
messageSends: ["initialize", "new", "makeWorker"]}),
smalltalk.ForkPool);

smalltalk.addMethod(
smalltalk.method({
selector: "makeWorker",
fn: function (){
var self=this;
var sentinel;
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
sentinel=_st($Object())._new();
$1=(function(){
var block;
return smalltalk.withContext(function($ctx2) {
self["@poolSize"]=_st(self["@poolSize"]).__minus((1));
self["@poolSize"];
block=_st(self["@queue"])._nextIfAbsent_((function(){
return smalltalk.withContext(function($ctx3) {
return sentinel;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
block;
$2=_st(block).__eq_eq(sentinel);
if(! smalltalk.assert($2)){
return _st((function(){
return smalltalk.withContext(function($ctx3) {
return _st(block)._value();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx3) {
return self._addWorker();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
};
}, function($ctx2) {$ctx2.fillBlock({block:block},$ctx1)})});
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeWorker",{sentinel:sentinel},smalltalk.ForkPool)})},
messageSends: ["new", "-", "nextIfAbsent:", "ifFalse:", "ensure:", "addWorker", "value", "=="]}),
smalltalk.ForkPool);

smalltalk.addMethod(
smalltalk.method({
selector: "maxPoolSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@maxPoolSize"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=self._defaultMaxPoolSize();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"maxPoolSize",{},smalltalk.ForkPool)})},
messageSends: ["ifNil:", "defaultMaxPoolSize"]}),
smalltalk.ForkPool);

smalltalk.addMethod(
smalltalk.method({
selector: "maxPoolSize:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@maxPoolSize"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"maxPoolSize:",{anInteger:anInteger},smalltalk.ForkPool)})},
messageSends: []}),
smalltalk.ForkPool);


smalltalk.ForkPool.klass.iVarNames = ['default'];
smalltalk.addMethod(
smalltalk.method({
selector: "default",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@default"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@default"]=self._new();
$1=self["@default"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.ForkPool.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.ForkPool.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultMaxPoolSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (100);
}, function($ctx1) {$ctx1.fill(self,"defaultMaxPoolSize",{},smalltalk.ForkPool.klass)})},
messageSends: []}),
smalltalk.ForkPool.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "resetDefault",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@default"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"resetDefault",{},smalltalk.ForkPool.klass)})},
messageSends: []}),
smalltalk.ForkPool.klass);


smalltalk.addClass('Message', smalltalk.Object, ['selector', 'arguments'], 'Kernel-Methods');
smalltalk.addMethod(
smalltalk.method({
selector: "arguments",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@arguments"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"arguments",{},smalltalk.Message)})},
messageSends: []}),
smalltalk.Message);

smalltalk.addMethod(
smalltalk.method({
selector: "arguments:",
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@arguments"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"arguments:",{anArray:anArray},smalltalk.Message)})},
messageSends: []}),
smalltalk.Message);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.Message.superclass.fn.prototype._printOn_.apply(_st(self), [aStream]);
$1=aStream;
_st($1)._nextPutAll_("(");
_st($1)._nextPutAll_(self._selector());
$2=_st($1)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Message)})},
messageSends: ["printOn:", "nextPutAll:", "selector"]}),
smalltalk.Message);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.Message)})},
messageSends: []}),
smalltalk.Message);

smalltalk.addMethod(
smalltalk.method({
selector: "selector:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selector"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aString:aString},smalltalk.Message)})},
messageSends: []}),
smalltalk.Message);

smalltalk.addMethod(
smalltalk.method({
selector: "sendTo:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._perform_withArguments_(self._selector(),self._arguments());
return $1;
}, function($ctx1) {$ctx1.fill(self,"sendTo:",{anObject:anObject},smalltalk.Message)})},
messageSends: ["perform:withArguments:", "selector", "arguments"]}),
smalltalk.Message);


smalltalk.addMethod(
smalltalk.method({
selector: "selector:arguments:",
fn: function (aString,anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._selector_(aString);
_st($2)._arguments_(anArray);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector:arguments:",{aString:aString,anArray:anArray},smalltalk.Message.klass)})},
messageSends: ["selector:", "new", "arguments:", "yourself"]}),
smalltalk.Message.klass);


smalltalk.addClass('MessageSend', smalltalk.Object, ['receiver', 'message'], 'Kernel-Methods');
smalltalk.addMethod(
smalltalk.method({
selector: "arguments",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@message"])._arguments();
return $1;
}, function($ctx1) {$ctx1.fill(self,"arguments",{},smalltalk.MessageSend)})},
messageSends: ["arguments"]}),
smalltalk.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "arguments:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@message"])._arguments_(aCollection);
return self}, function($ctx1) {$ctx1.fill(self,"arguments:",{aCollection:aCollection},smalltalk.MessageSend)})},
messageSends: ["arguments:"]}),
smalltalk.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Message(){return smalltalk.Message||(typeof Message=="undefined"?nil:Message)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.MessageSend.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@message"]=_st($Message())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.MessageSend)})},
messageSends: ["initialize", "new"]}),
smalltalk.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.MessageSend.superclass.fn.prototype._printOn_.apply(_st(self), [aStream]);
$1=aStream;
_st($1)._nextPutAll_("(");
_st($1)._nextPutAll_(self._receiver());
_st($1)._nextPutAll_(" >> ");
_st($1)._nextPutAll_(self._selector());
$2=_st($1)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.MessageSend)})},
messageSends: ["printOn:", "nextPutAll:", "receiver", "selector"]}),
smalltalk.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@receiver"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},smalltalk.MessageSend)})},
messageSends: []}),
smalltalk.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@receiver"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{anObject:anObject},smalltalk.MessageSend)})},
messageSends: []}),
smalltalk.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@message"])._selector();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.MessageSend)})},
messageSends: ["selector"]}),
smalltalk.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "selector:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@message"])._selector_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aString:aString},smalltalk.MessageSend)})},
messageSends: ["selector:"]}),
smalltalk.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@message"])._sendTo_(self._receiver());
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.MessageSend)})},
messageSends: ["sendTo:", "receiver"]}),
smalltalk.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self["@message"];
_st($2)._arguments_([anObject]);
$3=_st($2)._sendTo_(self._receiver());
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"value:",{anObject:anObject},smalltalk.MessageSend)})},
messageSends: ["arguments:", "sendTo:", "receiver"]}),
smalltalk.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "value:value:",
fn: function (firstArgument,secondArgument){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self["@message"];
_st($2)._arguments_([firstArgument,secondArgument]);
$3=_st($2)._sendTo_(self._receiver());
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"value:value:",{firstArgument:firstArgument,secondArgument:secondArgument},smalltalk.MessageSend)})},
messageSends: ["arguments:", "sendTo:", "receiver"]}),
smalltalk.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "value:value:value:",
fn: function (firstArgument,secondArgument,thirdArgument){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self["@message"];
_st($2)._arguments_([firstArgument,secondArgument,thirdArgument]);
$3=_st($2)._sendTo_(self._receiver());
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"value:value:value:",{firstArgument:firstArgument,secondArgument:secondArgument,thirdArgument:thirdArgument},smalltalk.MessageSend)})},
messageSends: ["arguments:", "sendTo:", "receiver"]}),
smalltalk.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "valueWithPossibleArguments:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._arguments_(aCollection);
$1=self._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"valueWithPossibleArguments:",{aCollection:aCollection},smalltalk.MessageSend)})},
messageSends: ["arguments:", "value"]}),
smalltalk.MessageSend);



smalltalk.addClass('MethodContext', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.addMethod(
smalltalk.method({
selector: "asString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._isBlockContext();
if(smalltalk.assert($2)){
$1=_st("a block (in ".__comma(_st(self._methodContext())._asString())).__comma(")");
} else {
$1=_st(_st(_st(_st(self._receiver())._class())._name()).__comma(" >> ")).__comma(self._selector());
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.MethodContext)})},
messageSends: ["ifTrue:ifFalse:", ",", "asString", "methodContext", "selector", "name", "class", "receiver", "isBlockContext"]}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "home",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.homeContext;
return self}, function($ctx1) {$ctx1.fill(self,"home",{},smalltalk.MethodContext)})},
messageSends: []}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "isBlockContext",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._selector())._isNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isBlockContext",{},smalltalk.MethodContext)})},
messageSends: ["isNil", "selector"]}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "locals",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.locals || {};
return self}, function($ctx1) {$ctx1.fill(self,"locals",{},smalltalk.MethodContext)})},
messageSends: []}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "method",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._methodContext();
if(($receiver = $2) == nil || $receiver == undefined){
$1=$2;
} else {
$1=_st(_st(_st(self._methodContext())._receiver())._class())._lookupSelector_(_st(self._methodContext())._selector());
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"method",{},smalltalk.MethodContext)})},
messageSends: ["ifNotNil:", "lookupSelector:", "selector", "methodContext", "class", "receiver"]}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "methodContext",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3;
$1=self._isBlockContext();
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
$4=self._home();
if(($receiver = $4) == nil || $receiver == undefined){
$3=$4;
} else {
var home;
home=$receiver;
$3=_st(home)._methodContext();
};
return $3;
}, function($ctx1) {$ctx1.fill(self,"methodContext",{},smalltalk.MethodContext)})},
messageSends: ["ifFalse:", "isBlockContext", "ifNotNil:", "methodContext", "home"]}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "outerContext",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.outerContext || self.homeContext;
return self}, function($ctx1) {$ctx1.fill(self,"outerContext",{},smalltalk.MethodContext)})},
messageSends: []}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "pc",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.pc;
return self}, function($ctx1) {$ctx1.fill(self,"pc",{},smalltalk.MethodContext)})},
messageSends: []}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.MethodContext.superclass.fn.prototype._printOn_.apply(_st(self), [aStream]);
$1=aStream;
_st($1)._nextPutAll_("(");
_st($1)._nextPutAll_(self._asString());
$2=_st($1)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.MethodContext)})},
messageSends: ["printOn:", "nextPutAll:", "asString"]}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.receiver;
return self}, function($ctx1) {$ctx1.fill(self,"receiver",{},smalltalk.MethodContext)})},
messageSends: []}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		if(self.selector) {
			return smalltalk.convertSelector(self.selector);
		} else {
			return nil;
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.MethodContext)})},
messageSends: []}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "temps",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._deprecatedAPI();
$1=self._locals();
return $1;
}, function($ctx1) {$ctx1.fill(self,"temps",{},smalltalk.MethodContext)})},
messageSends: ["deprecatedAPI", "locals"]}),
smalltalk.MethodContext);



smalltalk.addClass('NativeFunction', smalltalk.Object, [], 'Kernel-Methods');

smalltalk.addMethod(
smalltalk.method({
selector: "constructor:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var native=eval(aString);
		return new native();
	;
return self}, function($ctx1) {$ctx1.fill(self,"constructor:",{aString:aString},smalltalk.NativeFunction.klass)})},
messageSends: []}),
smalltalk.NativeFunction.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "constructor:value:",
fn: function (aString,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var native=eval(aString);
		return new native(anObject);
	;
return self}, function($ctx1) {$ctx1.fill(self,"constructor:value:",{aString:aString,anObject:anObject},smalltalk.NativeFunction.klass)})},
messageSends: []}),
smalltalk.NativeFunction.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "constructor:value:value:",
fn: function (aString,anObject,anObject2){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var native=eval(aString);
		return new native(anObject,anObject2);
	;
return self}, function($ctx1) {$ctx1.fill(self,"constructor:value:value:",{aString:aString,anObject:anObject,anObject2:anObject2},smalltalk.NativeFunction.klass)})},
messageSends: []}),
smalltalk.NativeFunction.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "constructor:value:value:value:",
fn: function (aString,anObject,anObject2,anObject3){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var native=eval(aString);
		return new native(anObject,anObject2, anObject3);
	;
return self}, function($ctx1) {$ctx1.fill(self,"constructor:value:value:value:",{aString:aString,anObject:anObject,anObject2:anObject2,anObject3:anObject3},smalltalk.NativeFunction.klass)})},
messageSends: []}),
smalltalk.NativeFunction.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "exists:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		if(aString in window) {
			return true
		} else {
			return false
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"exists:",{aString:aString},smalltalk.NativeFunction.klass)})},
messageSends: []}),
smalltalk.NativeFunction.klass);


