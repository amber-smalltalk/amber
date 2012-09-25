smalltalk.addPackage('Kernel-Methods', {});
smalltalk.addClass('BlockClosure', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.BlockClosure.comment="A BlockClosure is a lexical closure.\x0aThe JavaScript representation is a function.\x0a\x0aA BlockClosure is evaluated with the `#value*` methods in the 'evaluating' protocol."
smalltalk.addMethod(
"_applyTo_arguments_",
smalltalk.method({
selector: "applyTo:arguments:",
category: 'evaluating',
fn: function (anObject,aCollection){
var self=this;
return self.apply(anObject, aCollection);
;
return self},
args: ["anObject", "aCollection"],
source: "applyTo: anObject arguments: aCollection\x0a\x09<return self.apply(anObject, aCollection)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_compiledSource",
smalltalk.method({
selector: "compiledSource",
category: 'accessing',
fn: function (){
var self=this;
return self.toString();
;
return self},
args: [],
source: "compiledSource\x0a\x09<return self.toString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_ensure_",
smalltalk.method({
selector: "ensure:",
category: 'evaluating',
fn: function (aBlock){
var self=this;
var $1;
var success;
success=false;
$1=smalltalk.send((function(){
smalltalk.send(self,"_value",[]);
success=true;
success;
return smalltalk.send(aBlock,"_value",[]);
}),"_on_do_",[(smalltalk.Error || Error),(function(ex){
if(! smalltalk.assert(success)){
smalltalk.send(aBlock,"_value",[]);
};
return smalltalk.send(ex,"_signal",[]);
})]);
return $1;
},
args: ["aBlock"],
source: "ensure: aBlock\x0a\x09| success |\x0a\x09success := false.\x0a\x09^[self value. success := true. aBlock value]\x0a\x09\x09on: Error\x0a\x09\x09do: [:ex |\x0a\x09\x09\x09success ifFalse: [aBlock value].\x0a\x09\x09\x09ex signal]",
messageSends: ["on:do:", "ifFalse:", "value", "signal"],
referencedClasses: ["Error"]
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'evaluating',
fn: function (){
var self=this;
return new self();
;
return self},
args: [],
source: "new\x0a\x09\x22Use the receiver as a JS constructor. \x0a\x09*Do not* use this method to instanciate Smalltalk objects!\x22\x0a\x09<return new self()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_newValue_",
smalltalk.method({
selector: "newValue:",
category: 'evaluating',
fn: function (anObject){
var self=this;
return new self(anObject);
;
return self},
args: ["anObject"],
source: "newValue: anObject\x0a\x09\x22Use the receiver as a JS constructor. \x0a\x09*Do not* use this method to instanciate Smalltalk objects!\x22\x0a\x09<return new self(anObject)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_newValue_value_",
smalltalk.method({
selector: "newValue:value:",
category: 'evaluating',
fn: function (anObject,anObject2){
var self=this;
return new self(anObject, anObject2);
;
return self},
args: ["anObject", "anObject2"],
source: "newValue:  anObject value: anObject2\x0a\x09\x22Use the receiver as a JS constructor. \x0a\x09*Do not* use this method to instanciate Smalltalk objects!\x22\x0a\x09<return new self(anObject, anObject2)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_newValue_value_value_",
smalltalk.method({
selector: "newValue:value:value:",
category: 'evaluating',
fn: function (anObject,anObject2,anObject3){
var self=this;
return new self(anObject, anObject2);
;
return self},
args: ["anObject", "anObject2", "anObject3"],
source: "newValue:  anObject value: anObject2 value: anObject3\x0a\x09\x22Use the receiver as a JS constructor. \x0a\x09*Do not* use this method to instanciate Smalltalk objects!\x22\x0a\x09<return new self(anObject, anObject2)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_numArgs",
smalltalk.method({
selector: "numArgs",
category: 'accessing',
fn: function (){
var self=this;
return self.length;
;
return self},
args: [],
source: "numArgs\x0a\x09<return self.length>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_on_do_",
smalltalk.method({
selector: "on:do:",
category: 'error handling',
fn: function (anErrorClass,aBlock){
var self=this;
var $2,$1;
$1=smalltalk.send(self,"_try_catch_",[self,(function(error){
$2=smalltalk.send(error,"_isKindOf_",[anErrorClass]);
if(smalltalk.assert($2)){
return smalltalk.send(aBlock,"_value_",[error]);
} else {
return smalltalk.send(error,"_signal",[]);
};
})]);
return $1;
},
args: ["anErrorClass", "aBlock"],
source: "on: anErrorClass do: aBlock\x0a\x09^self try: self catch: [:error |\x0a\x09    (error isKindOf: anErrorClass) \x0a\x09     ifTrue: [aBlock value: error]\x0a\x09     ifFalse: [error signal]]",
messageSends: ["try:catch:", "ifTrue:ifFalse:", "value:", "signal", "isKindOf:"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_timeToRun",
smalltalk.method({
selector: "timeToRun",
category: 'evaluating',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.Date || Date),"_millisecondsToRun_",[self]);
return $1;
},
args: [],
source: "timeToRun\x0a\x09\x22Answer the number of milliseconds taken to execute this block.\x22\x0a\x0a\x09^ Date millisecondsToRun: self",
messageSends: ["millisecondsToRun:"],
referencedClasses: ["Date"]
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
category: 'evaluating',
fn: function (){
var self=this;
return self();;
;
return self},
args: [],
source: "value\x0a\x09\x22inlined in the Compiler\x22\x0a\x09<return self();>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
category: 'evaluating',
fn: function (anArg){
var self=this;
return self(anArg);;
;
return self},
args: ["anArg"],
source: "value: anArg\x0a\x09\x22inlined in the Compiler\x22\x0a\x09<return self(anArg);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_value_value_",
smalltalk.method({
selector: "value:value:",
category: 'evaluating',
fn: function (firstArg,secondArg){
var self=this;
return self(firstArg, secondArg);;
;
return self},
args: ["firstArg", "secondArg"],
source: "value: firstArg value: secondArg\x0a\x09\x22inlined in the Compiler\x22\x0a\x09<return self(firstArg, secondArg);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_value_value_value_",
smalltalk.method({
selector: "value:value:value:",
category: 'evaluating',
fn: function (firstArg,secondArg,thirdArg){
var self=this;
return self(firstArg, secondArg, thirdArg);;
;
return self},
args: ["firstArg", "secondArg", "thirdArg"],
source: "value: firstArg value: secondArg value: thirdArg\x0a\x09\x22inlined in the Compiler\x22\x0a\x09<return self(firstArg, secondArg, thirdArg);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_valueWithInterval_",
smalltalk.method({
selector: "valueWithInterval:",
category: 'timeout/interval',
fn: function (aNumber){
var self=this;
return setInterval(self, aNumber);
;
return self},
args: ["aNumber"],
source: "valueWithInterval: aNumber\x0a\x09<return setInterval(self, aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_valueWithPossibleArguments_",
smalltalk.method({
selector: "valueWithPossibleArguments:",
category: 'evaluating',
fn: function (aCollection){
var self=this;
return self.apply(null, aCollection);;
;
return self},
args: ["aCollection"],
source: "valueWithPossibleArguments: aCollection\x0a\x09<return self.apply(null, aCollection);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_valueWithTimeout_",
smalltalk.method({
selector: "valueWithTimeout:",
category: 'timeout/interval',
fn: function (aNumber){
var self=this;
return setTimeout(self, aNumber);
;
return self},
args: ["aNumber"],
source: "valueWithTimeout: aNumber\x0a\x09<return setTimeout(self, aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_whileFalse",
smalltalk.method({
selector: "whileFalse",
category: 'controlling',
fn: function (){
var self=this;
smalltalk.send(self,"_whileFalse_",[(function(){
})]);
return self},
args: [],
source: "whileFalse\x0a\x09\x22inlined in the Compiler\x22\x0a\x09self whileFalse: []",
messageSends: ["whileFalse:"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_whileFalse_",
smalltalk.method({
selector: "whileFalse:",
category: 'controlling',
fn: function (aBlock){
var self=this;
while(!self()) {aBlock()};
;
return self},
args: ["aBlock"],
source: "whileFalse: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09<while(!self()) {aBlock()}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_whileTrue",
smalltalk.method({
selector: "whileTrue",
category: 'controlling',
fn: function (){
var self=this;
smalltalk.send(self,"_whileTrue_",[(function(){
})]);
return self},
args: [],
source: "whileTrue\x0a\x09\x22inlined in the Compiler\x22\x0a\x09self whileTrue: []",
messageSends: ["whileTrue:"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_whileTrue_",
smalltalk.method({
selector: "whileTrue:",
category: 'controlling',
fn: function (aBlock){
var self=this;
while(self()) {aBlock()};
;
return self},
args: ["aBlock"],
source: "whileTrue: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09<while(self()) {aBlock()}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);



smalltalk.addClass('CompiledMethod', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.CompiledMethod.comment="CompiledMethod hold the source and compiled code of a class method.\x0a\x0aYou can get a CompiledMethod using `Behavior>>methodAt:`\x0a\x0a\x09String methodAt: 'lines'\x0a\x0aand read the source code\x0a\x0a\x09(String methodAt: 'lines') source\x0a\x0aSee referenced classes:\x0a\x0a\x09(String methodAt: 'lines') referencedClasses\x0a\x0aor messages sent from this method:\x0a\x09\x0a\x09(String methodAt: 'lines')  messageSends"
smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
category: 'accessing',
fn: function (){
var self=this;
return self.args || [];
;
return self},
args: [],
source: "arguments\x0a\x09<return self.args || []>",
messageSends: [],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_category",
smalltalk.method({
selector: "category",
category: 'accessing',
fn: function (){
var self=this;
var $2,$1;
$2=smalltalk.send(self,"_basicAt_",["category"]);
if(($receiver = $2) == nil || $receiver == undefined){
$1="";
} else {
$1=$2;
};
return $1;
},
args: [],
source: "category\x0a\x09^(self basicAt: 'category') ifNil: ['']",
messageSends: ["ifNil:", "basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_category_",
smalltalk.method({
selector: "category:",
category: 'accessing',
fn: function (aString){
var self=this;
smalltalk.send(self,"_basicAt_put_",["category",aString]);
return self},
args: ["aString"],
source: "category: aString\x0a\x09self basicAt: 'category' put: aString",
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_fn",
smalltalk.method({
selector: "fn",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_basicAt_",["fn"]);
return $1;
},
args: [],
source: "fn\x0a\x09^self basicAt: 'fn'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_fn_",
smalltalk.method({
selector: "fn:",
category: 'accessing',
fn: function (aBlock){
var self=this;
smalltalk.send(self,"_basicAt_put_",["fn",aBlock]);
return self},
args: ["aBlock"],
source: "fn: aBlock\x0a\x09self basicAt: 'fn' put: aBlock",
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_messageSends",
smalltalk.method({
selector: "messageSends",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_basicAt_",["messageSends"]);
return $1;
},
args: [],
source: "messageSends\x0a\x09^self basicAt: 'messageSends'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_methodClass",
smalltalk.method({
selector: "methodClass",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_basicAt_",["methodClass"]);
return $1;
},
args: [],
source: "methodClass\x0a\x09^self basicAt: 'methodClass'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_referencedClasses",
smalltalk.method({
selector: "referencedClasses",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_basicAt_",["referencedClasses"]);
return $1;
},
args: [],
source: "referencedClasses\x0a\x09^self basicAt: 'referencedClasses'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_basicAt_",["selector"]);
return $1;
},
args: [],
source: "selector\x0a\x09^self basicAt: 'selector'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
category: 'accessing',
fn: function (aString){
var self=this;
smalltalk.send(self,"_basicAt_put_",["selector",aString]);
return self},
args: ["aString"],
source: "selector: aString\x0a\x09self basicAt: 'selector' put: aString",
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
category: 'accessing',
fn: function (){
var self=this;
var $2,$1;
$2=smalltalk.send(self,"_basicAt_",["source"]);
if(($receiver = $2) == nil || $receiver == undefined){
$1="";
} else {
$1=$2;
};
return $1;
},
args: [],
source: "source\x0a\x09^(self basicAt: 'source') ifNil: ['']",
messageSends: ["ifNil:", "basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
category: 'accessing',
fn: function (aString){
var self=this;
smalltalk.send(self,"_basicAt_put_",["source",aString]);
return self},
args: ["aString"],
source: "source: aString\x0a\x09self basicAt: 'source' put: aString",
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);



smalltalk.addClass('Message', smalltalk.Object, ['selector', 'arguments'], 'Kernel-Methods');
smalltalk.Message.comment="Generally, the system does not use instances of Message for efficiency reasons.\x0aHowever, when a message is not understood by its receiver, the interpreter will make up an instance of it in order to capture the information involved in an actual message transmission. \x0aThis instance is sent it as an argument with the message `doesNotUnderstand:` to the receiver.\x0a\x0aSee boot.js, `messageNotUnderstood`  and its counterpart `Object>>doesNotUnderstand:`"
smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
category: 'accessing',
fn: function (){
var self=this;
return self["@arguments"];
},
args: [],
source: "arguments\x0a\x09^arguments",
messageSends: [],
referencedClasses: []
}),
smalltalk.Message);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
category: 'accessing',
fn: function (anArray){
var self=this;
self["@arguments"]=anArray;
return self},
args: ["anArray"],
source: "arguments: anArray\x0a\x09arguments := anArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.Message);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function (){
var self=this;
var $2,$1;
$1=smalltalk.send((smalltalk.String || String),"_streamContents_",[(function(aStream){
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(self,"_printString",[],smalltalk.Object)]);
smalltalk.send(aStream,"_nextPutAll_",["("]);
smalltalk.send(aStream,"_nextPutAll_",[self["@selector"]]);
$2=smalltalk.send(aStream,"_nextPutAll_",[")"]);
return $2;
})]);
return $1;
},
args: [],
source: "printString\x0a\x09^ String streamContents: [:aStream|  \x0a                                  \x09\x09\x09\x09aStream \x0a                                  \x09\x09\x09\x09\x09nextPutAll: super printString;\x0a                                  \x09\x09\x09\x09\x09nextPutAll: '(';\x0a                                  \x09\x09\x09\x09\x09nextPutAll: selector;\x0a                                  \x09\x09\x09\x09\x09nextPutAll: ')' \x09\x09\x09\x09]",
messageSends: ["streamContents:", "nextPutAll:", "printString"],
referencedClasses: ["String"]
}),
smalltalk.Message);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function (){
var self=this;
return self["@selector"];
},
args: [],
source: "selector\x0a\x09^selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.Message);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
category: 'accessing',
fn: function (aString){
var self=this;
self["@selector"]=aString;
return self},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.Message);

smalltalk.addMethod(
"_sendTo_",
smalltalk.method({
selector: "sendTo:",
category: 'printing',
fn: function (anObject){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk),"_current",[]),"_send_to_arguments_",[smalltalk.send(self,"_selector",[]),anObject,smalltalk.send(self,"_arguments",[])]);
return $1;
},
args: ["anObject"],
source: "sendTo: anObject\x0a\x09^ Smalltalk current send: self selector to: anObject arguments: self arguments",
messageSends: ["send:to:arguments:", "selector", "arguments", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Message);


smalltalk.addMethod(
"_selector_arguments_",
smalltalk.method({
selector: "selector:arguments:",
category: 'instance creation',
fn: function (aString,anArray){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_selector_",[aString]);
smalltalk.send($2,"_arguments_",[anArray]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aString", "anArray"],
source: "selector: aString arguments: anArray\x0a\x09^self new\x0a\x09\x09selector: aString;\x0a\x09\x09arguments: anArray;\x0a\x09\x09yourself",
messageSends: ["selector:", "new", "arguments:", "yourself"],
referencedClasses: []
}),
smalltalk.Message.klass);


smalltalk.addClass('MethodContext', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.MethodContext.comment="MethodContext holds all the dynamic state associated with the execution of either a method activation resulting from a message send. That is used to build the call stack while debugging.\x0a  \x0aMethodContext instances are JavaScript `SmalltalkMethodContext` objects defined in boot.js \x0a\x0aCurrent limitation: MethodContext instances are not created on Block evaluation. That means it's actually impossible to debug inside a Block."
smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_receiver",[]),"_class",[]),"_printString",[]),"__comma",[" >> "]),"__comma",[smalltalk.send(self,"_selector",[])]);
return $1;
},
args: [],
source: "asString\x0a\x09^self receiver class printString, ' >> ', self selector",
messageSends: [",", "selector", "printString", "class", "receiver"],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_home",
smalltalk.method({
selector: "home",
category: 'accessing',
fn: function (){
var self=this;
return self.homeContext;
;
return self},
args: [],
source: "home\x0a\x09<return self.homeContext>",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_pc",
smalltalk.method({
selector: "pc",
category: 'accessing',
fn: function (){
var self=this;
return self.pc;
;
return self},
args: [],
source: "pc\x0a\x09<return self.pc>",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_printString",[],smalltalk.Object),"__comma",["("]),"__comma",[smalltalk.send(self,"_asString",[])]),"__comma",[")"]);
return $1;
},
args: [],
source: "printString\x0a\x09^super printString, '(', self asString, ')'",
messageSends: [",", "asString", "printString"],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
category: 'accessing',
fn: function (){
var self=this;
return self.receiver;
;
return self},
args: [],
source: "receiver\x0a\x09<return self.receiver>",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.convertSelector(self.selector);
;
return self},
args: [],
source: "selector\x0a\x09<return smalltalk.convertSelector(self.selector)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_temps",
smalltalk.method({
selector: "temps",
category: 'accessing',
fn: function (){
var self=this;
return self.temps;
;
return self},
args: [],
source: "temps\x0a\x09<return self.temps>",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);



