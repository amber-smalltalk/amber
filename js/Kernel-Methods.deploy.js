smalltalk.addPackage('Kernel-Methods');
smalltalk.addClass('BlockClosure', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.addMethod(
"_applyTo_arguments_",
smalltalk.method({
selector: "applyTo:arguments:",
fn: function (anObject,aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.apply(anObject, aCollection);
return self}, function($ctx1) {$ctx1.fill(self,"applyTo:arguments:",{anObject:anObject,aCollection:aCollection},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_asCompiledMethod_",
smalltalk.method({
selector: "asCompiledMethod:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { return smalltalk.method({selector:aString, fn:self});;
return self}, function($ctx1) {$ctx1.fill(self,"asCompiledMethod:",{aString:aString},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_compiledSource",
smalltalk.method({
selector: "compiledSource",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.toString();
return self}, function($ctx1) {$ctx1.fill(self,"compiledSource",{},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_currySelf",
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
"_ensure_",
smalltalk.method({
selector: "ensure:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { try{return self()}finally{aBlock._value()};
return self}, function($ctx1) {$ctx1.fill(self,"ensure:",{aBlock:aBlock},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_fork",
smalltalk.method({
selector: "fork",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.ForkPool || ForkPool))._default())._fork_(self);
return self}, function($ctx1) {$ctx1.fill(self,"fork",{},smalltalk.BlockClosure)})},
messageSends: ["fork:", "default"]}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return new self();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_newValue_",
smalltalk.method({
selector: "newValue:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { return new self(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"newValue:",{anObject:anObject},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_newValue_value_",
smalltalk.method({
selector: "newValue:value:",
fn: function (anObject,anObject2){
var self=this;
return smalltalk.withContext(function($ctx1) { return new self(anObject, anObject2);
return self}, function($ctx1) {$ctx1.fill(self,"newValue:value:",{anObject:anObject,anObject2:anObject2},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_newValue_value_value_",
smalltalk.method({
selector: "newValue:value:value:",
fn: function (anObject,anObject2,anObject3){
var self=this;
return smalltalk.withContext(function($ctx1) { return new self(anObject, anObject2,anObject3);
return self}, function($ctx1) {$ctx1.fill(self,"newValue:value:value:",{anObject:anObject,anObject2:anObject2,anObject3:anObject3},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_numArgs",
smalltalk.method({
selector: "numArgs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.length;
return self}, function($ctx1) {$ctx1.fill(self,"numArgs",{},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_on_do_",
smalltalk.method({
selector: "on:do:",
fn: function (anErrorClass,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$1=_st(self)._try_catch_(self,(function(error){
var smalltalkError;
return smalltalk.withContext(function($ctx2) {smalltalkError=_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._asSmalltalkException_(error);
smalltalkError;
$2=_st(smalltalkError)._isKindOf_(anErrorClass);
if(smalltalk.assert($2)){
return _st(aBlock)._value_(smalltalkError);
} else {
return _st(smalltalkError)._signal();
};
}, function($ctx2) {$ctx2.fillBlock({error:error,smalltalkError:smalltalkError},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:do:",{anErrorClass:anErrorClass,aBlock:aBlock},smalltalk.BlockClosure)})},
messageSends: ["try:catch:", "asSmalltalkException:", "current", "ifTrue:ifFalse:", "value:", "signal", "isKindOf:"]}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_timeToRun",
smalltalk.method({
selector: "timeToRun",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.Date || Date))._millisecondsToRun_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"timeToRun",{},smalltalk.BlockClosure)})},
messageSends: ["millisecondsToRun:"]}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self();;
return self}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
fn: function (anArg){
var self=this;
return smalltalk.withContext(function($ctx1) { return self(anArg);;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{anArg:anArg},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_value_value_",
smalltalk.method({
selector: "value:value:",
fn: function (firstArg,secondArg){
var self=this;
return smalltalk.withContext(function($ctx1) { return self(firstArg, secondArg);;
return self}, function($ctx1) {$ctx1.fill(self,"value:value:",{firstArg:firstArg,secondArg:secondArg},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_value_value_value_",
smalltalk.method({
selector: "value:value:value:",
fn: function (firstArg,secondArg,thirdArg){
var self=this;
return smalltalk.withContext(function($ctx1) { return self(firstArg, secondArg, thirdArg);;
return self}, function($ctx1) {$ctx1.fill(self,"value:value:value:",{firstArg:firstArg,secondArg:secondArg,thirdArg:thirdArg},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_valueWithInterval_",
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
"_valueWithPossibleArguments_",
smalltalk.method({
selector: "valueWithPossibleArguments:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.apply(null, aCollection);;
return self}, function($ctx1) {$ctx1.fill(self,"valueWithPossibleArguments:",{aCollection:aCollection},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_valueWithTimeout_",
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
"_whileFalse",
smalltalk.method({
selector: "whileFalse",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"whileFalse",{},smalltalk.BlockClosure)})},
messageSends: ["whileFalse:"]}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_whileFalse_",
smalltalk.method({
selector: "whileFalse:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { while(!self()) {aBlock()};
return self}, function($ctx1) {$ctx1.fill(self,"whileFalse:",{aBlock:aBlock},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_whileTrue",
smalltalk.method({
selector: "whileTrue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"whileTrue",{},smalltalk.BlockClosure)})},
messageSends: ["whileTrue:"]}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_whileTrue_",
smalltalk.method({
selector: "whileTrue:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { while(self()) {aBlock()};
return self}, function($ctx1) {$ctx1.fill(self,"whileTrue:",{aBlock:aBlock},smalltalk.BlockClosure)})},
messageSends: []}),
smalltalk.BlockClosure);



smalltalk.addClass('CompiledMethod', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.args || [];
return self}, function($ctx1) {$ctx1.fill(self,"arguments",{},smalltalk.CompiledMethod)})},
messageSends: []}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_category",
smalltalk.method({
selector: "category",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._basicAt_("category");
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self)._defaultCategory();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"category",{},smalltalk.CompiledMethod)})},
messageSends: ["ifNil:", "defaultCategory", "basicAt:"]}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_category_",
smalltalk.method({
selector: "category:",
fn: function (aString){
var self=this;
var oldCategory;
return smalltalk.withContext(function($ctx1) { var $1;
oldCategory=_st(self)._category();
_st(self)._basicAt_put_("category",aString);
$1=_st(self)._methodClass();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(_st(_st(self)._methodClass())._organization())._addElement_(aString);
_st(_st(_st(_st(self)._methodClass())._methods())._select_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(each)._category()).__eq(oldCategory);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(self)._methodClass())._organization())._removeElement_(oldCategory);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"category:",{aString:aString,oldCategory:oldCategory},smalltalk.CompiledMethod)})},
messageSends: ["category", "basicAt:put:", "ifNotNil:", "addElement:", "organization", "methodClass", "ifEmpty:", "removeElement:", "select:", "=", "methods"]}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_defaultCategory",
smalltalk.method({
selector: "defaultCategory",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "as yet unclassified";
}, function($ctx1) {$ctx1.fill(self,"defaultCategory",{},smalltalk.CompiledMethod)})},
messageSends: []}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_fn",
smalltalk.method({
selector: "fn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._basicAt_("fn");
return $1;
}, function($ctx1) {$ctx1.fill(self,"fn",{},smalltalk.CompiledMethod)})},
messageSends: ["basicAt:"]}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_fn_",
smalltalk.method({
selector: "fn:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._basicAt_put_("fn",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"fn:",{aBlock:aBlock},smalltalk.CompiledMethod)})},
messageSends: ["basicAt:put:"]}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_messageSends",
smalltalk.method({
selector: "messageSends",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._basicAt_("messageSends");
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageSends",{},smalltalk.CompiledMethod)})},
messageSends: ["basicAt:"]}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_methodClass",
smalltalk.method({
selector: "methodClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._basicAt_("methodClass");
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodClass",{},smalltalk.CompiledMethod)})},
messageSends: ["basicAt:"]}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_protocol",
smalltalk.method({
selector: "protocol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._category();
return $1;
}, function($ctx1) {$ctx1.fill(self,"protocol",{},smalltalk.CompiledMethod)})},
messageSends: ["category"]}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_referencedClasses",
smalltalk.method({
selector: "referencedClasses",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._basicAt_("referencedClasses");
return $1;
}, function($ctx1) {$ctx1.fill(self,"referencedClasses",{},smalltalk.CompiledMethod)})},
messageSends: ["basicAt:"]}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._basicAt_("selector");
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.CompiledMethod)})},
messageSends: ["basicAt:"]}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._basicAt_put_("selector",aString);
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aString:aString},smalltalk.CompiledMethod)})},
messageSends: ["basicAt:put:"]}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._basicAt_("source");
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
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._basicAt_put_("source",aString);
return self}, function($ctx1) {$ctx1.fill(self,"source:",{aString:aString},smalltalk.CompiledMethod)})},
messageSends: ["basicAt:put:"]}),
smalltalk.CompiledMethod);



smalltalk.addClass('ForkPool', smalltalk.Object, ['poolSize', 'maxPoolSize', 'queue', 'worker'], 'Kernel-Methods');
smalltalk.addMethod(
"_addWorker",
smalltalk.method({
selector: "addWorker",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@worker"])._valueWithTimeout_((0));
self["@poolSize"]=_st(self["@poolSize"]).__plus((1));
return self}, function($ctx1) {$ctx1.fill(self,"addWorker",{},smalltalk.ForkPool)})},
messageSends: ["valueWithTimeout:", "+"]}),
smalltalk.ForkPool);

smalltalk.addMethod(
"_defaultMaxPoolSize",
smalltalk.method({
selector: "defaultMaxPoolSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._class())._defaultMaxPoolSize();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultMaxPoolSize",{},smalltalk.ForkPool)})},
messageSends: ["defaultMaxPoolSize", "class"]}),
smalltalk.ForkPool);

smalltalk.addMethod(
"_fork_",
smalltalk.method({
selector: "fork:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@poolSize"]).__lt(_st(self)._maxPoolSize());
if(smalltalk.assert($1)){
_st(self)._addWorker();
};
_st(self["@queue"])._back_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"fork:",{aBlock:aBlock},smalltalk.ForkPool)})},
messageSends: ["ifTrue:", "addWorker", "<", "maxPoolSize", "back:"]}),
smalltalk.ForkPool);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@poolSize"]=(0);
self["@queue"]=_st((smalltalk.Queue || Queue))._new();
self["@worker"]=_st(self)._makeWorker();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ForkPool)})},
messageSends: ["initialize", "new", "makeWorker"]}),
smalltalk.ForkPool);

smalltalk.addMethod(
"_makeWorker",
smalltalk.method({
selector: "makeWorker",
fn: function (){
var self=this;
var sentinel;
return smalltalk.withContext(function($ctx1) { var $2,$1;
sentinel=_st((smalltalk.Object || Object))._new();
$1=(function(){
var block;
return smalltalk.withContext(function($ctx2) {self["@poolSize"]=_st(self["@poolSize"]).__minus((1));
self["@poolSize"];
block=_st(self["@queue"])._frontIfAbsent_((function(){
return smalltalk.withContext(function($ctx3) {return sentinel;
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
block;
$2=_st(block).__eq_eq(sentinel);
if(! smalltalk.assert($2)){
return _st((function(){
return smalltalk.withContext(function($ctx3) {return _st(block)._value();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._addWorker();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
};
}, function($ctx2) {$ctx2.fillBlock({block:block},$ctx1)})});
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeWorker",{sentinel:sentinel},smalltalk.ForkPool)})},
messageSends: ["new", "-", "frontIfAbsent:", "ifFalse:", "ensure:", "addWorker", "value", "=="]}),
smalltalk.ForkPool);

smalltalk.addMethod(
"_maxPoolSize",
smalltalk.method({
selector: "maxPoolSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@maxPoolSize"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self)._defaultMaxPoolSize();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"maxPoolSize",{},smalltalk.ForkPool)})},
messageSends: ["ifNil:", "defaultMaxPoolSize"]}),
smalltalk.ForkPool);

smalltalk.addMethod(
"_maxPoolSize_",
smalltalk.method({
selector: "maxPoolSize:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@maxPoolSize"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"maxPoolSize:",{anInteger:anInteger},smalltalk.ForkPool)})},
messageSends: []}),
smalltalk.ForkPool);


smalltalk.ForkPool.klass.iVarNames = ['default'];
smalltalk.addMethod(
"_default",
smalltalk.method({
selector: "default",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@default"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@default"]=_st(self)._new();
$1=self["@default"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.ForkPool.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.ForkPool.klass);

smalltalk.addMethod(
"_defaultMaxPoolSize",
smalltalk.method({
selector: "defaultMaxPoolSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (100);
}, function($ctx1) {$ctx1.fill(self,"defaultMaxPoolSize",{},smalltalk.ForkPool.klass)})},
messageSends: []}),
smalltalk.ForkPool.klass);

smalltalk.addMethod(
"_resetDefault",
smalltalk.method({
selector: "resetDefault",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@default"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"resetDefault",{},smalltalk.ForkPool.klass)})},
messageSends: []}),
smalltalk.ForkPool.klass);


smalltalk.addClass('Message', smalltalk.Object, ['selector', 'arguments'], 'Kernel-Methods');
smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@arguments"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"arguments",{},smalltalk.Message)})},
messageSends: []}),
smalltalk.Message);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@arguments"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"arguments:",{anArray:anArray},smalltalk.Message)})},
messageSends: []}),
smalltalk.Message);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$1=_st((smalltalk.String || String))._streamContents_((function(aStream){
return smalltalk.withContext(function($ctx2) {$2=aStream;
_st($2)._nextPutAll_(smalltalk.Object.fn.prototype._printString.apply(_st(self), []));
_st($2)._nextPutAll_("(");
_st($2)._nextPutAll_(self["@selector"]);
$3=_st($2)._nextPutAll_(")");
return $3;
}, function($ctx2) {$ctx2.fillBlock({aStream:aStream},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{},smalltalk.Message)})},
messageSends: ["streamContents:", "nextPutAll:", "printString"]}),
smalltalk.Message);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.Message)})},
messageSends: []}),
smalltalk.Message);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@selector"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aString:aString},smalltalk.Message)})},
messageSends: []}),
smalltalk.Message);

smalltalk.addMethod(
"_sendTo_",
smalltalk.method({
selector: "sendTo:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anObject)._perform_withArguments_(_st(self)._selector(),_st(self)._arguments());
return $1;
}, function($ctx1) {$ctx1.fill(self,"sendTo:",{anObject:anObject},smalltalk.Message)})},
messageSends: ["perform:withArguments:", "selector", "arguments"]}),
smalltalk.Message);


smalltalk.addMethod(
"_selector_arguments_",
smalltalk.method({
selector: "selector:arguments:",
fn: function (aString,anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._selector_(aString);
_st($2)._arguments_(anArray);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector:arguments:",{aString:aString,anArray:anArray},smalltalk.Message.klass)})},
messageSends: ["selector:", "new", "arguments:", "yourself"]}),
smalltalk.Message.klass);


smalltalk.addClass('MethodContext', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._isBlockContext();
if(smalltalk.assert($2)){
$1=_st(_st("a block (in ").__comma(_st(_st(_st(_st(self)._methodContext())._receiver())._class())._printString())).__comma(")");
} else {
$1=_st(_st(_st(_st(_st(self)._receiver())._class())._printString()).__comma(" >> ")).__comma(_st(self)._selector());
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.MethodContext)})},
messageSends: ["ifTrue:ifFalse:", ",", "printString", "class", "receiver", "methodContext", "selector", "isBlockContext"]}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_home",
smalltalk.method({
selector: "home",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.methodContext || self.homeContext;
return self}, function($ctx1) {$ctx1.fill(self,"home",{},smalltalk.MethodContext)})},
messageSends: []}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_isBlockContext",
smalltalk.method({
selector: "isBlockContext",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._selector())._isNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isBlockContext",{},smalltalk.MethodContext)})},
messageSends: ["isNil", "selector"]}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_locals",
smalltalk.method({
selector: "locals",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.locals;
return self}, function($ctx1) {$ctx1.fill(self,"locals",{},smalltalk.MethodContext)})},
messageSends: []}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_method",
smalltalk.method({
selector: "method",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(self)._methodContext())._receiver())._class())._lookupSelector_(_st(_st(self)._methodContext())._selector());
return $1;
}, function($ctx1) {$ctx1.fill(self,"method",{},smalltalk.MethodContext)})},
messageSends: ["lookupSelector:", "selector", "methodContext", "class", "receiver"]}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_methodContext",
smalltalk.method({
selector: "methodContext",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=_st(self)._isBlockContext();
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st(self)._home();
return $3;
}, function($ctx1) {$ctx1.fill(self,"methodContext",{},smalltalk.MethodContext)})},
messageSends: ["ifFalse:", "isBlockContext", "home"]}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_outerContext",
smalltalk.method({
selector: "outerContext",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.homeContext;
return self}, function($ctx1) {$ctx1.fill(self,"outerContext",{},smalltalk.MethodContext)})},
messageSends: []}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_pc",
smalltalk.method({
selector: "pc",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.pc;
return self}, function($ctx1) {$ctx1.fill(self,"pc",{},smalltalk.MethodContext)})},
messageSends: []}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(smalltalk.Object.fn.prototype._printString.apply(_st(self), [])).__comma("(")).__comma(_st(self)._asString())).__comma(")");
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{},smalltalk.MethodContext)})},
messageSends: [",", "asString", "printString"]}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.receiver;
return self}, function($ctx1) {$ctx1.fill(self,"receiver",{},smalltalk.MethodContext)})},
messageSends: []}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_selector",
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
"_temps",
smalltalk.method({
selector: "temps",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._deprecatedAPI();
$1=_st(self)._locals();
return $1;
}, function($ctx1) {$ctx1.fill(self,"temps",{},smalltalk.MethodContext)})},
messageSends: ["deprecatedAPI", "locals"]}),
smalltalk.MethodContext);



smalltalk.addClass('NativeFunction', smalltalk.Object, [], 'Kernel-Methods');

smalltalk.addMethod(
"_constructor_",
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
"_constructor_value_",
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
"_constructor_value_value_",
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
"_constructor_value_value_value_",
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
"_exists_",
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


