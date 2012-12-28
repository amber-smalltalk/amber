smalltalk.addPackage('Kernel-Methods', {});
smalltalk.addClass('BlockClosure', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.addMethod(
"_applyTo_arguments_",
smalltalk.method({
selector: "applyTo:arguments:",
fn: function (anObject, aCollection) {
    var self = this;
    return self.apply(anObject, aCollection);
    return self;
}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_compiledSource",
smalltalk.method({
selector: "compiledSource",
fn: function () {
    var self = this;
    return self.toString();
    return self;
}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_ensure_",
smalltalk.method({
selector: "ensure:",
fn: function (aBlock){
var self=this;
try{return self()}finally{aBlock._value()};
;
return self}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_fork",
smalltalk.method({
selector: "fork",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.ForkPool || ForkPool),"_default",[]),"_fork_",[self]);
return self}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function () {
    var self = this;
    return new self;
    return self;
}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_newValue_",
smalltalk.method({
selector: "newValue:",
fn: function (anObject) {
    var self = this;
    return new self(anObject);
    return self;
}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_newValue_value_",
smalltalk.method({
selector: "newValue:value:",
fn: function (anObject, anObject2) {
    var self = this;
    return new self(anObject, anObject2);
    return self;
}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_newValue_value_value_",
smalltalk.method({
selector: "newValue:value:value:",
fn: function (anObject, anObject2, anObject3) {
    var self = this;
    return new self(anObject, anObject2);
    return self;
}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_numArgs",
smalltalk.method({
selector: "numArgs",
fn: function () {
    var self = this;
    return self.length;
    return self;
}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_on_do_",
smalltalk.method({
selector: "on:do:",
fn: function (anErrorClass, aBlock) {
    var self = this;
    var $2, $1;
    $1 = smalltalk.send(self, "_try_catch_", [self, function (error) {$2 = smalltalk.send(error, "_isKindOf_", [anErrorClass]);if (smalltalk.assert($2)) {return smalltalk.send(aBlock, "_value_", [error]);} else {return smalltalk.send(error, "_signal", []);}}]);
    return $1;
}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_timeToRun",
smalltalk.method({
selector: "timeToRun",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.Date || Date, "_millisecondsToRun_", [self]);
    return $1;
}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
fn: function () {
    var self = this;
    return self();
    return self;
}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
fn: function (anArg) {
    var self = this;
    return self(anArg);
    return self;
}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_value_value_",
smalltalk.method({
selector: "value:value:",
fn: function (firstArg, secondArg) {
    var self = this;
    return self(firstArg, secondArg);
    return self;
}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_value_value_value_",
smalltalk.method({
selector: "value:value:value:",
fn: function (firstArg, secondArg, thirdArg) {
    var self = this;
    return self(firstArg, secondArg, thirdArg);
    return self;
}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_valueWithInterval_",
smalltalk.method({
selector: "valueWithInterval:",
fn: function (aNumber) {
    var self = this;
    return setInterval(self, aNumber);
    return self;
}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_valueWithPossibleArguments_",
smalltalk.method({
selector: "valueWithPossibleArguments:",
fn: function (aCollection) {
    var self = this;
    return self.apply(null, aCollection);
    return self;
}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_valueWithTimeout_",
smalltalk.method({
selector: "valueWithTimeout:",
fn: function (aNumber) {
    var self = this;
    return setTimeout(self, aNumber);
    return self;
}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_whileFalse",
smalltalk.method({
selector: "whileFalse",
fn: function () {
    var self = this;
    smalltalk.send(self, "_whileFalse_", [function () {}]);
    return self;
}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_whileFalse_",
smalltalk.method({
selector: "whileFalse:",
fn: function (aBlock) {
    var self = this;
    while (!self()) {
        aBlock();
    }
    return self;
}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_whileTrue",
smalltalk.method({
selector: "whileTrue",
fn: function () {
    var self = this;
    smalltalk.send(self, "_whileTrue_", [function () {}]);
    return self;
}
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_whileTrue_",
smalltalk.method({
selector: "whileTrue:",
fn: function (aBlock) {
    var self = this;
    while (self()) {
        aBlock();
    }
    return self;
}
}),
smalltalk.BlockClosure);



smalltalk.addClass('CompiledMethod', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
fn: function () {
    var self = this;
    return self.args || [];
    return self;
}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_category",
smalltalk.method({
selector: "category",
fn: function () {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(self, "_basicAt_", ["category"]);
    if (($receiver = $2) == nil || $receiver == undefined) {
        $1 = "";
    } else {
        $1 = $2;
    }
    return $1;
}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_category_",
smalltalk.method({
selector: "category:",
fn: function (aString){
var self=this;
var $1;
var oldCategory;
oldCategory=smalltalk.send(self,"_category",[]);
smalltalk.send(self,"_basicAt_put_",["category",aString]);
$1=smalltalk.send(self,"_methodClass",[]);
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
smalltalk.send(smalltalk.send(smalltalk.send(self,"_methodClass",[]),"_organization",[]),"_addElement_",[aString]);
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_methodClass",[]),"_methods",[]),"_select_",[(function(each){
return smalltalk.send(smalltalk.send(each,"_category",[]),"__eq",[oldCategory]);
})]),"_ifEmpty_",[(function(){
return smalltalk.send(smalltalk.send(smalltalk.send(self,"_methodClass",[]),"_organization",[]),"_removeElement_",[oldCategory]);
})]);
};
return self}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_fn",
smalltalk.method({
selector: "fn",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_basicAt_", ["fn"]);
    return $1;
}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_fn_",
smalltalk.method({
selector: "fn:",
fn: function (aBlock) {
    var self = this;
    smalltalk.send(self, "_basicAt_put_", ["fn", aBlock]);
    return self;
}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_messageSends",
smalltalk.method({
selector: "messageSends",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_basicAt_", ["messageSends"]);
    return $1;
}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_methodClass",
smalltalk.method({
selector: "methodClass",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_basicAt_", ["methodClass"]);
    return $1;
}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_protocol",
smalltalk.method({
selector: "protocol",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_category", []);
    return $1;
}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_referencedClasses",
smalltalk.method({
selector: "referencedClasses",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_basicAt_", ["referencedClasses"]);
    return $1;
}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_basicAt_", ["selector"]);
    return $1;
}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aString) {
    var self = this;
    smalltalk.send(self, "_basicAt_put_", ["selector", aString]);
    return self;
}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function () {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(self, "_basicAt_", ["source"]);
    if (($receiver = $2) == nil || $receiver == undefined) {
        $1 = "";
    } else {
        $1 = $2;
    }
    return $1;
}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
fn: function (aString) {
    var self = this;
    smalltalk.send(self, "_basicAt_put_", ["source", aString]);
    return self;
}
}),
smalltalk.CompiledMethod);



smalltalk.addClass('ForkPool', smalltalk.Object, ['poolSize', 'maxPoolSize', 'queue', 'worker'], 'Kernel-Methods');
smalltalk.addMethod(
"_addWorker",
smalltalk.method({
selector: "addWorker",
fn: function (){
var self=this;
smalltalk.send(self["@worker"],"_valueWithTimeout_",[(0)]);
self["@poolSize"]=smalltalk.send(self["@poolSize"],"__plus",[(1)]);
return self}
}),
smalltalk.ForkPool);

smalltalk.addMethod(
"_fork_",
smalltalk.method({
selector: "fork:",
fn: function (aBlock){
var self=this;
var $1;
$1=smalltalk.send(self["@poolSize"],"__lt",[self["@maxPoolSize"]]);
if(smalltalk.assert($1)){
smalltalk.send(self,"_addWorker",[]);
};
smalltalk.send(self["@queue"],"_back_",[aBlock]);
return self}
}),
smalltalk.ForkPool);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
var $1;
var sentinel;
self["@poolSize"]=(0);
self["@maxPoolSize"]=smalltalk.send(smalltalk.send(self,"_class",[]),"_defaultMaxPoolSize",[]);
self["@queue"]=smalltalk.send((smalltalk.Queue || Queue),"_new",[]);
sentinel=smalltalk.send((smalltalk.Object || Object),"_new",[]);
self["@worker"]=(function(){
var block;
self["@poolSize"]=smalltalk.send(self["@poolSize"],"__minus",[(1)]);
self["@poolSize"];
block=smalltalk.send(self["@queue"],"_frontIfAbsent_",[(function(){
return sentinel;
})]);
block;
$1=smalltalk.send(block,"__eq_eq",[sentinel]);
if(! smalltalk.assert($1)){
return smalltalk.send((function(){
return smalltalk.send(block,"_value",[]);
}),"_ensure_",[(function(){
return smalltalk.send(self,"_addWorker",[]);
})]);
};
});
return self}
}),
smalltalk.ForkPool);


smalltalk.ForkPool.klass.iVarNames = ['default'];
smalltalk.addMethod(
"_default",
smalltalk.method({
selector: "default",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@default"]) == nil || $receiver == undefined){
self["@default"]=smalltalk.send(self,"_new",[]);
$1=self["@default"];
} else {
$1=self["@default"];
};
return $1;
}
}),
smalltalk.ForkPool.klass);

smalltalk.addMethod(
"_defaultMaxPoolSize",
smalltalk.method({
selector: "defaultMaxPoolSize",
fn: function (){
var self=this;
return (100);
}
}),
smalltalk.ForkPool.klass);

smalltalk.addMethod(
"_resetDefault",
smalltalk.method({
selector: "resetDefault",
fn: function (){
var self=this;
self["@default"]=nil;
return self}
}),
smalltalk.ForkPool.klass);


smalltalk.addClass('Message', smalltalk.Object, ['selector', 'arguments'], 'Kernel-Methods');
smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
fn: function () {
    var self = this;
    return self['@arguments'];
}
}),
smalltalk.Message);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
fn: function (anArray) {
    var self = this;
    self['@arguments'] = anArray;
    return self;
}
}),
smalltalk.Message);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function () {
    var self = this;
    var $2, $1;
    $1 = smalltalk.send(smalltalk.String || String, "_streamContents_", [function (aStream) {smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(self, "_printString", [], smalltalk.Object)]);smalltalk.send(aStream, "_nextPutAll_", ["("]);smalltalk.send(aStream, "_nextPutAll_", [self['@selector']]);$2 = smalltalk.send(aStream, "_nextPutAll_", [")"]);return $2;}]);
    return $1;
}
}),
smalltalk.Message);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function () {
    var self = this;
    return self['@selector'];
}
}),
smalltalk.Message);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aString) {
    var self = this;
    self['@selector'] = aString;
    return self;
}
}),
smalltalk.Message);

smalltalk.addMethod(
"_sendTo_",
smalltalk.method({
selector: "sendTo:",
fn: function (anObject) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_send_to_arguments_", [smalltalk.send(self, "_selector", []), anObject, smalltalk.send(self, "_arguments", [])]);
    return $1;
}
}),
smalltalk.Message);


smalltalk.addMethod(
"_selector_arguments_",
smalltalk.method({
selector: "selector:arguments:",
fn: function (aString, anArray) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_selector_", [aString]);
    smalltalk.send($2, "_arguments_", [anArray]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
}
}),
smalltalk.Message.klass);


smalltalk.addClass('MethodContext', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_receiver", []), "_class", []), "_printString", []), "__comma", [" >> "]), "__comma", [smalltalk.send(self, "_selector", [])]);
    return $1;
}
}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_home",
smalltalk.method({
selector: "home",
fn: function () {
    var self = this;
    return self.homeContext;
    return self;
}
}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_pc",
smalltalk.method({
selector: "pc",
fn: function () {
    var self = this;
    return self.pc;
    return self;
}
}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_printString", [], smalltalk.Object), "__comma", ["("]), "__comma", [smalltalk.send(self, "_asString", [])]), "__comma", [")"]);
    return $1;
}
}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
fn: function () {
    var self = this;
    return self.receiver;
    return self;
}
}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function () {
    var self = this;
    return smalltalk.convertSelector(self.selector);
    return self;
}
}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_temps",
smalltalk.method({
selector: "temps",
fn: function () {
    var self = this;
    return self.temps;
    return self;
}
}),
smalltalk.MethodContext);



