smalltalk.addPackage('Kernel-Methods', {});
smalltalk.addClass('BlockClosure', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.addMethod(
"_applyTo_arguments_",
smalltalk.method({
selector: "applyTo:arguments:",
fn: function (anObject,aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.apply(anObject, aCollection);
;
return self}, self, "applyTo:arguments:", [anObject,aCollection], smalltalk.BlockClosure)}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_compiledSource",
smalltalk.method({
selector: "compiledSource",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.toString();
;
return self}, self, "compiledSource", [], smalltalk.BlockClosure)}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_ensure_",
smalltalk.method({
selector: "ensure:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { try{return self()}finally{aBlock._value()};
;
return self}, self, "ensure:", [aBlock], smalltalk.BlockClosure)}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_fork",
smalltalk.method({
selector: "fork",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.ForkPool || ForkPool))._default())._fork_(self);
return self}, self, "fork", [], smalltalk.BlockClosure)}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return new self();
;
return self}, self, "new", [], smalltalk.BlockClosure)}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_newValue_",
smalltalk.method({
selector: "newValue:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { return new self(anObject);
;
return self}, self, "newValue:", [anObject], smalltalk.BlockClosure)}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_newValue_value_",
smalltalk.method({
selector: "newValue:value:",
fn: function (anObject,anObject2){
var self=this;
return smalltalk.withContext(function($ctx1) { return new self(anObject, anObject2);
;
return self}, self, "newValue:value:", [anObject,anObject2], smalltalk.BlockClosure)}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_newValue_value_value_",
smalltalk.method({
selector: "newValue:value:value:",
fn: function (anObject,anObject2,anObject3){
var self=this;
return smalltalk.withContext(function($ctx1) { return new self(anObject, anObject2);
;
return self}, self, "newValue:value:value:", [anObject,anObject2,anObject3], smalltalk.BlockClosure)}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_numArgs",
smalltalk.method({
selector: "numArgs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.length;
;
return self}, self, "numArgs", [], smalltalk.BlockClosure)}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_on_do_",
smalltalk.method({
selector: "on:do:",
fn: function (anErrorClass,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$1=_st(self)._try_catch_(self,(function(error){
return smalltalk.withContext(function($ctx2) { $2=_st(error)._isKindOf_(anErrorClass);
if(smalltalk.assert($2)){
return _st(aBlock)._value_(error);
} else {
return _st(error)._signal();
};
})}));
return $1;
}, self, "on:do:", [anErrorClass,aBlock], smalltalk.BlockClosure)}
}),
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
}, self, "timeToRun", [], smalltalk.BlockClosure)}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self();;
;
return self}, self, "value", [], smalltalk.BlockClosure)}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
fn: function (anArg){
var self=this;
return smalltalk.withContext(function($ctx1) { return self(anArg);;
;
return self}, self, "value:", [anArg], smalltalk.BlockClosure)}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_value_value_",
smalltalk.method({
selector: "value:value:",
fn: function (firstArg,secondArg){
var self=this;
return smalltalk.withContext(function($ctx1) { return self(firstArg, secondArg);;
;
return self}, self, "value:value:", [firstArg,secondArg], smalltalk.BlockClosure)}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_value_value_value_",
smalltalk.method({
selector: "value:value:value:",
fn: function (firstArg,secondArg,thirdArg){
var self=this;
return smalltalk.withContext(function($ctx1) { return self(firstArg, secondArg, thirdArg);;
;
return self}, self, "value:value:value:", [firstArg,secondArg,thirdArg], smalltalk.BlockClosure)}
}),
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
return self}, self, "valueWithInterval:", [aNumber], smalltalk.BlockClosure)}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_valueWithPossibleArguments_",
smalltalk.method({
selector: "valueWithPossibleArguments:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.apply(null, aCollection);;
;
return self}, self, "valueWithPossibleArguments:", [aCollection], smalltalk.BlockClosure)}
}),
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
return self}, self, "valueWithTimeout:", [aNumber], smalltalk.BlockClosure)}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_whileFalse",
smalltalk.method({
selector: "whileFalse",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) { })}));
return self}, self, "whileFalse", [], smalltalk.BlockClosure)}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_whileFalse_",
smalltalk.method({
selector: "whileFalse:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { while(!self()) {aBlock()};
;
return self}, self, "whileFalse:", [aBlock], smalltalk.BlockClosure)}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_whileTrue",
smalltalk.method({
selector: "whileTrue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) { })}));
return self}, self, "whileTrue", [], smalltalk.BlockClosure)}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_whileTrue_",
smalltalk.method({
selector: "whileTrue:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { while(self()) {aBlock()};
;
return self}, self, "whileTrue:", [aBlock], smalltalk.BlockClosure)}
}),
smalltalk.BlockClosure);



smalltalk.addClass('CompiledMethod', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.args || [];
;
return self}, self, "arguments", [], smalltalk.CompiledMethod)}
}),
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
$1="";
} else {
$1=$2;
};
return $1;
}, self, "category", [], smalltalk.CompiledMethod)}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_category_",
smalltalk.method({
selector: "category:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.locals.oldCategory=nil;
$ctx1.locals.oldCategory=_st(self)._category();
_st(self)._basicAt_put_("category",aString);
$1=_st(self)._methodClass();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(_st(_st(self)._methodClass())._organization())._addElement_(aString);
_st(_st(_st(_st(self)._methodClass())._methods())._select_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(_st(each)._category()).__eq($ctx1.locals.oldCategory);
})})))._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(_st(self)._methodClass())._organization())._removeElement_($ctx1.locals.oldCategory);
})}));
};
return self}, self, "category:", [aString], smalltalk.CompiledMethod)}
}),
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
}, self, "fn", [], smalltalk.CompiledMethod)}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_fn_",
smalltalk.method({
selector: "fn:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._basicAt_put_("fn",aBlock);
return self}, self, "fn:", [aBlock], smalltalk.CompiledMethod)}
}),
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
}, self, "messageSends", [], smalltalk.CompiledMethod)}
}),
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
}, self, "methodClass", [], smalltalk.CompiledMethod)}
}),
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
}, self, "protocol", [], smalltalk.CompiledMethod)}
}),
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
}, self, "referencedClasses", [], smalltalk.CompiledMethod)}
}),
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
}, self, "selector", [], smalltalk.CompiledMethod)}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._basicAt_put_("selector",aString);
return self}, self, "selector:", [aString], smalltalk.CompiledMethod)}
}),
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
}, self, "source", [], smalltalk.CompiledMethod)}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._basicAt_put_("source",aString);
return self}, self, "source:", [aString], smalltalk.CompiledMethod)}
}),
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
return self}, self, "addWorker", [], smalltalk.ForkPool)}
}),
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
}, self, "defaultMaxPoolSize", [], smalltalk.ForkPool)}
}),
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
return self}, self, "fork:", [aBlock], smalltalk.ForkPool)}
}),
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
return self}, self, "initialize", [], smalltalk.ForkPool)}
}),
smalltalk.ForkPool);

smalltalk.addMethod(
"_makeWorker",
smalltalk.method({
selector: "makeWorker",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$ctx1.locals.sentinel=nil;
$ctx1.locals.sentinel=_st((smalltalk.Object || Object))._new();
$1=(function(){
return smalltalk.withContext(function($ctx2) { $ctx2.locals.block=nil;
self["@poolSize"]=_st(self["@poolSize"]).__minus((1));
self["@poolSize"];
$ctx2.locals.block=_st(self["@queue"])._frontIfAbsent_((function(){
return smalltalk.withContext(function($ctx3) { return $ctx1.locals.sentinel;
})}));
$ctx2.locals.block;
$2=_st($ctx2.locals.block).__eq_eq($ctx1.locals.sentinel);
if(! smalltalk.assert($2)){
return _st((function(){
return smalltalk.withContext(function($ctx3) { return _st($ctx2.locals.block)._value();
})}))._ensure_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._addWorker();
})}));
};
})});
return $1;
}, self, "makeWorker", [], smalltalk.ForkPool)}
}),
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
}, self, "maxPoolSize", [], smalltalk.ForkPool)}
}),
smalltalk.ForkPool);

smalltalk.addMethod(
"_maxPoolSize_",
smalltalk.method({
selector: "maxPoolSize:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@maxPoolSize"]=anInteger;
return self}, self, "maxPoolSize:", [anInteger], smalltalk.ForkPool)}
}),
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
}, self, "default", [], smalltalk.ForkPool.klass)}
}),
smalltalk.ForkPool.klass);

smalltalk.addMethod(
"_defaultMaxPoolSize",
smalltalk.method({
selector: "defaultMaxPoolSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (100);
}, self, "defaultMaxPoolSize", [], smalltalk.ForkPool.klass)}
}),
smalltalk.ForkPool.klass);

smalltalk.addMethod(
"_resetDefault",
smalltalk.method({
selector: "resetDefault",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@default"]=nil;
return self}, self, "resetDefault", [], smalltalk.ForkPool.klass)}
}),
smalltalk.ForkPool.klass);


smalltalk.addClass('Message', smalltalk.Object, ['selector', 'arguments'], 'Kernel-Methods');
smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@arguments"];
}, self, "arguments", [], smalltalk.Message)}
}),
smalltalk.Message);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@arguments"]=anArray;
return self}, self, "arguments:", [anArray], smalltalk.Message)}
}),
smalltalk.Message);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$1=_st((smalltalk.String || String))._streamContents_((function(aStream){
return smalltalk.withContext(function($ctx2) { _st(aStream)._nextPutAll_(smalltalk.Object.fn.prototype._printString.apply(_st(self), []));
_st(aStream)._nextPutAll_("(");
_st(aStream)._nextPutAll_(self["@selector"]);
$2=_st(aStream)._nextPutAll_(")");
return $2;
})}));
return $1;
}, self, "printString", [], smalltalk.Message)}
}),
smalltalk.Message);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@selector"];
}, self, "selector", [], smalltalk.Message)}
}),
smalltalk.Message);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@selector"]=aString;
return self}, self, "selector:", [aString], smalltalk.Message)}
}),
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
}, self, "sendTo:", [anObject], smalltalk.Message)}
}),
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
}, self, "selector:arguments:", [aString,anArray], smalltalk.Message.klass)}
}),
smalltalk.Message.klass);


smalltalk.addClass('MethodContext', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(_st(self)._receiver())._class())._printString()).__comma(" >> ")).__comma(_st(self)._selector());
return $1;
}, self, "asString", [], smalltalk.MethodContext)}
}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_home",
smalltalk.method({
selector: "home",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.homeContext;
;
return self}, self, "home", [], smalltalk.MethodContext)}
}),
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
}, self, "isBlockContext", [], smalltalk.MethodContext)}
}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_locals",
smalltalk.method({
selector: "locals",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.locals;
;
return self}, self, "locals", [], smalltalk.MethodContext)}
}),
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
$3=_st(self)._outerContext();
return $3;
}, self, "methodContext", [], smalltalk.MethodContext)}
}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_outerContext",
smalltalk.method({
selector: "outerContext",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._home();
return $1;
}, self, "outerContext", [], smalltalk.MethodContext)}
}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_pc",
smalltalk.method({
selector: "pc",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.pc;
;
return self}, self, "pc", [], smalltalk.MethodContext)}
}),
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
}, self, "printString", [], smalltalk.MethodContext)}
}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.receiver;
;
return self}, self, "receiver", [], smalltalk.MethodContext)}
}),
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
;
return self}, self, "selector", [], smalltalk.MethodContext)}
}),
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
}, self, "temps", [], smalltalk.MethodContext)}
}),
smalltalk.MethodContext);



