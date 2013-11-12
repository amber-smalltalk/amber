define("amber_core/Kernel-Methods", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st){
smalltalk.addPackage('Kernel-Methods');
smalltalk.packages["Kernel-Methods"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('BlockClosure', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.BlockClosure.comment="I represent a lexical closure.\x0aI am is directly mapped to JavaScript Function.\x0a\x0a## API\x0a\x0a1. Evaluation\x0a\x0a    My instances get evaluated with the `#value*` methods in the 'evaluating' protocol.\x0a\x0a    Example: ` [ :x | x + 1 ] value: 3 \x22Answers 4\x22 `\x0a\x0a2. Control structures\x0a\x0a    Blocks are used (together with `Boolean`) for control structures (methods in the `controlling` protocol).\x0a\x0a    Example: `aBlock whileTrue: [ ... ]`\x0a\x0a3. Error handling\x0a\x0a    I provide the `#on:do:` method for handling exceptions.\x0a\x0a    Example: ` aBlock on: MessageNotUnderstood do: [ :ex | ... ] `";
smalltalk.addMethod(
smalltalk.method({
selector: "applyTo:arguments:",
category: 'evaluating',
fn: function (anObject,aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.apply(anObject, aCollection);
return self}, function($ctx1) {$ctx1.fill(self,"applyTo:arguments:",{anObject:anObject,aCollection:aCollection},smalltalk.BlockClosure)})},
args: ["anObject", "aCollection"],
source: "applyTo: anObject arguments: aCollection\x0a\x09<return self.apply(anObject, aCollection)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "asCompiledMethod:",
category: 'converting',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.method({selector:aString, fn:self});;
return self}, function($ctx1) {$ctx1.fill(self,"asCompiledMethod:",{aString:aString},smalltalk.BlockClosure)})},
args: ["aString"],
source: "asCompiledMethod: aString\x0a\x09<return smalltalk.method({selector:aString, fn:self});>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "compiledSource",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.toString();
return self}, function($ctx1) {$ctx1.fill(self,"compiledSource",{},smalltalk.BlockClosure)})},
args: [],
source: "compiledSource\x0a\x09<return self.toString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "currySelf",
category: 'converting',
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
args: [],
source: "currySelf\x0a\x09\x22Transforms [ :selfarg :x :y | stcode ] block\x0a\x09which represents JS function (selfarg, x, y, ...) {jscode}\x0a\x09into function (x, y, ...) {jscode} that takes selfarg from 'this'.\x0a\x09IOW, it is usable as JS method and first arg takes the receiver.\x22\x0a\x09\x0a\x09<\x0a\x09\x09return function () {\x0a\x09\x09\x09var args = [ this ];\x0a\x09\x09\x09args.push.apply(args, arguments);\x0a\x09\x09\x09return self.apply(null, args);\x0a\x09\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "ensure:",
category: 'evaluating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
try{return self._value()}finally{aBlock._value()};
return self}, function($ctx1) {$ctx1.fill(self,"ensure:",{aBlock:aBlock},smalltalk.BlockClosure)})},
args: ["aBlock"],
source: "ensure: aBlock\x0a\x09<try{return self._value()}finally{aBlock._value()}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "fork",
category: 'timeout/interval',
fn: function (){
var self=this;
function $ForkPool(){return smalltalk.ForkPool||(typeof ForkPool=="undefined"?nil:ForkPool)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($ForkPool())._default())._fork_(self);
return self}, function($ctx1) {$ctx1.fill(self,"fork",{},smalltalk.BlockClosure)})},
args: [],
source: "fork\x0a\x09ForkPool default fork: self",
messageSends: ["fork:", "default"],
referencedClasses: ["ForkPool"]
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'evaluating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new self();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.BlockClosure)})},
args: [],
source: "new\x0a\x09\x22Use the receiver as a JS constructor.\x0a\x09*Do not* use this method to instanciate Smalltalk objects!\x22\x0a\x09<return new self()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "newValue:",
category: 'evaluating',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._newWithValues_([anObject]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newValue:",{anObject:anObject},smalltalk.BlockClosure)})},
args: ["anObject"],
source: "newValue: anObject\x0a\x09^ self newWithValues: { anObject }",
messageSends: ["newWithValues:"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "newValue:value:",
category: 'evaluating',
fn: function (anObject,anObject2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._newWithValues_([anObject,anObject2]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newValue:value:",{anObject:anObject,anObject2:anObject2},smalltalk.BlockClosure)})},
args: ["anObject", "anObject2"],
source: "newValue: anObject value: anObject2\x0a\x09^ self newWithValues: { anObject. anObject2 }.",
messageSends: ["newWithValues:"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "newValue:value:value:",
category: 'evaluating',
fn: function (anObject,anObject2,anObject3){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._newWithValues_([anObject,anObject2,anObject3]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newValue:value:value:",{anObject:anObject,anObject2:anObject2,anObject3:anObject3},smalltalk.BlockClosure)})},
args: ["anObject", "anObject2", "anObject3"],
source: "newValue: anObject value: anObject2 value: anObject3\x0a\x09^ self newWithValues: { anObject. anObject2. anObject3 }.",
messageSends: ["newWithValues:"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "newWithValues:",
category: 'evaluating',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var constructor = function() {};
		constructor.prototype = self.prototype;
		var object = new constructor;
		var result = self.apply(object, aCollection);
		return typeof result === "object" ? result : object;
	;
return self}, function($ctx1) {$ctx1.fill(self,"newWithValues:",{aCollection:aCollection},smalltalk.BlockClosure)})},
args: ["aCollection"],
source: "newWithValues: aCollection\x0a\x09\x22Use the receiver as a JavaScript constructor with a variable number of arguments.\x0a\x09Answer the object created using the operator `new`.\x0a\x0a\x09This algorithm was inspired by http://stackoverflow.com/a/6069331.\x0a\x0a\x09Here's a general breakdown of what's going on:\x0a\x091) Create a new, empty constructor function.\x0a\x092) Set it's prototype to the receiver's prototype. Because the receiver is a `BlockClosure`, it is also a JavaScript function.\x0a\x093) Instantiate a new object using the constructor function just created. \x0a\x09\x09This forces the interpreter to set the internal [[prototype]] property to what was set on the function before. \x0a   \x09\x09This has to be done, as we have no access to the [[prototype]] property externally.\x0a\x094) Apply `self` to the object I just instantiated.\x22\x0a\x0a\x09<\x0a\x09\x09var constructor = function() {};\x0a\x09\x09constructor.prototype = self.prototype;\x0a\x09\x09var object = new constructor;\x0a\x09\x09var result = self.apply(object, aCollection);\x0a\x09\x09return typeof result === \x22object\x22 ? result : object;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "numArgs",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.length;
return self}, function($ctx1) {$ctx1.fill(self,"numArgs",{},smalltalk.BlockClosure)})},
args: [],
source: "numArgs\x0a\x09<return self.length>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "on:do:",
category: 'error handling',
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
}, function($ctx2) {$ctx2.fillBlock({error:error,smalltalkError:smalltalkError},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:do:",{anErrorClass:anErrorClass,aBlock:aBlock},smalltalk.BlockClosure)})},
args: ["anErrorClass", "aBlock"],
source: "on: anErrorClass do: aBlock\x0a\x09\x22All exceptions thrown in the Smalltalk stack are cought.\x0a\x09Convert all JS exceptions to JavaScriptException instances.\x22\x0a\x09\x0a\x09^ self try: self catch: [ :error | | smalltalkError |\x0a\x09\x09smalltalkError := Smalltalk current asSmalltalkException: error.\x0a\x09\x09(smalltalkError isKindOf: anErrorClass)\x0a\x09\x09ifTrue: [ aBlock value: smalltalkError ]\x0a\x09\x09ifFalse: [ smalltalkError resignal ] ]",
messageSends: ["try:catch:", "asSmalltalkException:", "current", "ifTrue:ifFalse:", "isKindOf:", "value:", "resignal"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return nil;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},smalltalk.BlockClosure)})},
args: [],
source: "receiver\x0a\x09^ nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "timeToRun",
category: 'evaluating',
fn: function (){
var self=this;
function $Date(){return smalltalk.Date||(typeof Date=="undefined"?nil:Date)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Date())._millisecondsToRun_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"timeToRun",{},smalltalk.BlockClosure)})},
args: [],
source: "timeToRun\x0a\x09\x22Answer the number of milliseconds taken to execute this block.\x22\x0a\x0a\x09^ Date millisecondsToRun: self",
messageSends: ["millisecondsToRun:"],
referencedClasses: ["Date"]
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
category: 'evaluating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self();;
return self}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.BlockClosure)})},
args: [],
source: "value\x0a\x09<return self();>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
category: 'evaluating',
fn: function (anArg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self(anArg);;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{anArg:anArg},smalltalk.BlockClosure)})},
args: ["anArg"],
source: "value: anArg\x0a\x09<return self(anArg);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "value:value:",
category: 'evaluating',
fn: function (firstArg,secondArg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self(firstArg, secondArg);;
return self}, function($ctx1) {$ctx1.fill(self,"value:value:",{firstArg:firstArg,secondArg:secondArg},smalltalk.BlockClosure)})},
args: ["firstArg", "secondArg"],
source: "value: firstArg value: secondArg\x0a\x09<return self(firstArg, secondArg);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "value:value:value:",
category: 'evaluating',
fn: function (firstArg,secondArg,thirdArg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self(firstArg, secondArg, thirdArg);;
return self}, function($ctx1) {$ctx1.fill(self,"value:value:value:",{firstArg:firstArg,secondArg:secondArg,thirdArg:thirdArg},smalltalk.BlockClosure)})},
args: ["firstArg", "secondArg", "thirdArg"],
source: "value: firstArg value: secondArg value: thirdArg\x0a\x09<return self(firstArg, secondArg, thirdArg);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "valueWithInterval:",
category: 'timeout/interval',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var interval = setInterval(self, aNumber);
		return smalltalk.Timeout._on_(interval);
	;
return self}, function($ctx1) {$ctx1.fill(self,"valueWithInterval:",{aNumber:aNumber},smalltalk.BlockClosure)})},
args: ["aNumber"],
source: "valueWithInterval: aNumber\x0a\x09<\x0a\x09\x09var interval = setInterval(self, aNumber);\x0a\x09\x09return smalltalk.Timeout._on_(interval);\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "valueWithPossibleArguments:",
category: 'evaluating',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.apply(null, aCollection);;
return self}, function($ctx1) {$ctx1.fill(self,"valueWithPossibleArguments:",{aCollection:aCollection},smalltalk.BlockClosure)})},
args: ["aCollection"],
source: "valueWithPossibleArguments: aCollection\x0a\x09<return self.apply(null, aCollection);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "valueWithTimeout:",
category: 'timeout/interval',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var timeout = setTimeout(self, aNumber);
		return smalltalk.Timeout._on_(timeout);
	;
return self}, function($ctx1) {$ctx1.fill(self,"valueWithTimeout:",{aNumber:aNumber},smalltalk.BlockClosure)})},
args: ["aNumber"],
source: "valueWithTimeout: aNumber\x0a\x09<\x0a\x09\x09var timeout = setTimeout(self, aNumber);\x0a\x09\x09return smalltalk.Timeout._on_(timeout);\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "whileFalse",
category: 'controlling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"whileFalse",{},smalltalk.BlockClosure)})},
args: [],
source: "whileFalse\x0a\x09self whileFalse: []",
messageSends: ["whileFalse:"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "whileFalse:",
category: 'controlling',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
while(!smalltalk.assert(self._value())) {aBlock._value()};
return self}, function($ctx1) {$ctx1.fill(self,"whileFalse:",{aBlock:aBlock},smalltalk.BlockClosure)})},
args: ["aBlock"],
source: "whileFalse: aBlock\x0a\x09<while(!smalltalk.assert(self._value())) {aBlock._value()}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "whileTrue",
category: 'controlling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"whileTrue",{},smalltalk.BlockClosure)})},
args: [],
source: "whileTrue\x0a\x09self whileTrue: []",
messageSends: ["whileTrue:"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "whileTrue:",
category: 'controlling',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
while(smalltalk.assert(self._value())) {aBlock._value()};
return self}, function($ctx1) {$ctx1.fill(self,"whileTrue:",{aBlock:aBlock},smalltalk.BlockClosure)})},
args: ["aBlock"],
source: "whileTrue: aBlock\x0a\x09<while(smalltalk.assert(self._value())) {aBlock._value()}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);



smalltalk.addClass('CompiledMethod', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.CompiledMethod.comment="I represent a class method of the system. I hold the source and compiled code of a class method.\x0a\x0a## API\x0aMy instances can be accessed using `Behavior >> #methodAt:`\x0a\x0a    Object methodAt: 'asString'\x0a\x0aSource code access:\x0a\x0a\x09(String methodAt: 'lines') source\x0a\x0aReferenced classes:\x0a\x0a\x09(String methodAt: 'lines') referencedClasses\x0a\x0aMessages sent from an instance:\x0a\x09\x0a\x09(String methodAt: 'lines') messageSends";
smalltalk.addMethod(
smalltalk.method({
selector: "arguments",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.args || [];
return self}, function($ctx1) {$ctx1.fill(self,"arguments",{},smalltalk.CompiledMethod)})},
args: [],
source: "arguments\x0a\x09<return self.args || []>",
messageSends: [],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "category",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._basicAt_("category");
if(($receiver = $2) == nil || $receiver == null){
$1=self._defaultCategory();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"category",{},smalltalk.CompiledMethod)})},
args: [],
source: "category\x0a\x09^ (self basicAt: 'category') ifNil: [ self defaultCategory ]",
messageSends: ["ifNil:", "basicAt:", "defaultCategory"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "category:",
category: 'accessing',
fn: function (aString){
var self=this;
var oldProtocol;
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $MethodMoved(){return smalltalk.MethodMoved||(typeof MethodMoved=="undefined"?nil:MethodMoved)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$4,$8,$7,$6;
oldProtocol=self._protocol();
$ctx1.sendIdx["protocol"]=1;
self._basicAt_put_("category",aString);
$1=_st($MethodMoved())._new();
_st($1)._method_(self);
_st($1)._oldProtocol_(oldProtocol);
$2=_st($1)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($2);
$3=self._methodClass();
$ctx1.sendIdx["methodClass"]=1;
if(($receiver = $3) == nil || $receiver == null){
$3;
} else {
$5=self._methodClass();
$ctx1.sendIdx["methodClass"]=2;
$4=_st($5)._organization();
$ctx1.sendIdx["organization"]=1;
_st($4)._addElement_(aString);
$8=self._methodClass();
$ctx1.sendIdx["methodClass"]=3;
$7=_st($8)._methods();
$6=_st($7)._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._protocol()).__eq(oldProtocol);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
_st($6)._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self._methodClass())._organization())._removeElement_(oldProtocol);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"category:",{aString:aString,oldProtocol:oldProtocol},smalltalk.CompiledMethod)})},
args: ["aString"],
source: "category: aString\x0a\x09| oldProtocol |\x0a\x09oldProtocol := self protocol.\x0a\x09self basicAt: 'category' put: aString.\x0a\x0a\x09SystemAnnouncer current announce: (MethodMoved new\x0a\x09\x09method: self;\x0a\x09\x09oldProtocol: oldProtocol;\x0a\x09\x09yourself).\x0a\x0a\x09self methodClass ifNotNil: [\x0a\x09\x09self methodClass organization addElement: aString.\x0a\x09\x0a\x09\x09(self methodClass methods\x0a\x09\x09\x09select: [ :each | each protocol = oldProtocol ])\x0a\x09\x09\x09ifEmpty: [ self methodClass organization removeElement: oldProtocol ] ]",
messageSends: ["protocol", "basicAt:put:", "announce:", "current", "method:", "new", "oldProtocol:", "yourself", "ifNotNil:", "methodClass", "addElement:", "organization", "ifEmpty:", "select:", "methods", "=", "removeElement:"],
referencedClasses: ["SystemAnnouncer", "MethodMoved"]
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultCategory",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "as yet unclassified";
}, function($ctx1) {$ctx1.fill(self,"defaultCategory",{},smalltalk.CompiledMethod)})},
args: [],
source: "defaultCategory\x0a\x09^ 'as yet unclassified'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "fn",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicAt_("fn");
return $1;
}, function($ctx1) {$ctx1.fill(self,"fn",{},smalltalk.CompiledMethod)})},
args: [],
source: "fn\x0a\x09^ self basicAt: 'fn'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "fn:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._basicAt_put_("fn",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"fn:",{aBlock:aBlock},smalltalk.CompiledMethod)})},
args: ["aBlock"],
source: "fn: aBlock\x0a\x09self basicAt: 'fn' put: aBlock",
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "isCompiledMethod",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isCompiledMethod",{},smalltalk.CompiledMethod)})},
args: [],
source: "isCompiledMethod\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "isOverridden",
category: 'testing',
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
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return false;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"isOverridden",{selector:selector},smalltalk.CompiledMethod)})},
args: [],
source: "isOverridden\x0a\x09| selector |\x0a    \x0a    selector := self selector.\x0a    self methodClass allSubclassesDo: [ :each |\x0a\x09    (each includesSelector: selector)\x0a        \x09ifTrue: [ ^ true ] ].\x0a\x09^ false",
messageSends: ["selector", "allSubclassesDo:", "methodClass", "ifTrue:", "includesSelector:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "isOverride",
category: 'testing',
fn: function (){
var self=this;
var superclass;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._methodClass();
$ctx1.sendIdx["methodClass"]=1;
superclass=_st($1)._superclass();
$ctx1.sendIdx["superclass"]=1;
$2=superclass;
if(($receiver = $2) == nil || $receiver == null){
return false;
} else {
$2;
};
$3=_st(_st(_st(self._methodClass())._superclass())._lookupSelector_(self._selector()))._notNil();
return $3;
}, function($ctx1) {$ctx1.fill(self,"isOverride",{superclass:superclass},smalltalk.CompiledMethod)})},
args: [],
source: "isOverride\x0a\x09| superclass |\x0a    \x0a    superclass := self methodClass superclass.\x0a\x09superclass ifNil: [ ^ false ].\x0a\x09\x0a    ^ (self methodClass superclass lookupSelector: self selector) notNil",
messageSends: ["superclass", "methodClass", "ifNil:", "notNil", "lookupSelector:", "selector"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "messageSends",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicAt_("messageSends");
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageSends",{},smalltalk.CompiledMethod)})},
args: [],
source: "messageSends\x0a\x09^ self basicAt: 'messageSends'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "methodClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicAt_("methodClass");
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodClass",{},smalltalk.CompiledMethod)})},
args: [],
source: "methodClass\x0a\x09^ self basicAt: 'methodClass'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "protocol",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._category();
return $1;
}, function($ctx1) {$ctx1.fill(self,"protocol",{},smalltalk.CompiledMethod)})},
args: [],
source: "protocol\x0a\x09^ self category",
messageSends: ["category"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "protocol:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._category_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"protocol:",{aString:aString},smalltalk.CompiledMethod)})},
args: ["aString"],
source: "protocol: aString\x0a\x09self category: aString",
messageSends: ["category:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "referencedClasses",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicAt_("referencedClasses");
return $1;
}, function($ctx1) {$ctx1.fill(self,"referencedClasses",{},smalltalk.CompiledMethod)})},
args: [],
source: "referencedClasses\x0a\x09^ self basicAt: 'referencedClasses'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicAt_("selector");
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.CompiledMethod)})},
args: [],
source: "selector\x0a\x09^ self basicAt: 'selector'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "selector:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._basicAt_put_("selector",aString);
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aString:aString},smalltalk.CompiledMethod)})},
args: ["aString"],
source: "selector: aString\x0a\x09self basicAt: 'selector' put: aString",
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "sendTo:arguments:",
category: 'evaluating',
fn: function (anObject,aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._fn())._applyTo_arguments_(anObject,aCollection);
return $1;
}, function($ctx1) {$ctx1.fill(self,"sendTo:arguments:",{anObject:anObject,aCollection:aCollection},smalltalk.CompiledMethod)})},
args: ["anObject", "aCollection"],
source: "sendTo: anObject arguments: aCollection\x0a\x09^ self fn applyTo: anObject arguments: aCollection",
messageSends: ["applyTo:arguments:", "fn"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "source",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._basicAt_("source");
if(($receiver = $2) == nil || $receiver == null){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"source",{},smalltalk.CompiledMethod)})},
args: [],
source: "source\x0a\x09^ (self basicAt: 'source') ifNil: [ '' ]",
messageSends: ["ifNil:", "basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "source:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._basicAt_put_("source",aString);
return self}, function($ctx1) {$ctx1.fill(self,"source:",{aString:aString},smalltalk.CompiledMethod)})},
args: ["aString"],
source: "source: aString\x0a\x09self basicAt: 'source' put: aString",
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);



smalltalk.addClass('ForkPool', smalltalk.Object, ['poolSize', 'maxPoolSize', 'queue', 'worker'], 'Kernel-Methods');
smalltalk.ForkPool.comment="I am responsible for handling forked blocks.\x0aThe pool size sets the maximum concurrent forked blocks.\x0a\x0a## API\x0a\x0aThe default instance is accessed with `#default`.\x0aThe maximum concurrent forked blocks can be set with `#maxPoolSize:`.\x0a\x0aForking is done via `BlockClosure >> #fork`";
smalltalk.addMethod(
smalltalk.method({
selector: "addWorker",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@worker"])._valueWithTimeout_((0));
self["@poolSize"]=_st(self["@poolSize"]).__plus((1));
return self}, function($ctx1) {$ctx1.fill(self,"addWorker",{},smalltalk.ForkPool)})},
args: [],
source: "addWorker\x0a\x09worker valueWithTimeout: 0.\x0a\x09poolSize := poolSize + 1",
messageSends: ["valueWithTimeout:", "+"],
referencedClasses: []
}),
smalltalk.ForkPool);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultMaxPoolSize",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._defaultMaxPoolSize();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultMaxPoolSize",{},smalltalk.ForkPool)})},
args: [],
source: "defaultMaxPoolSize\x0a\x09^ self class defaultMaxPoolSize",
messageSends: ["defaultMaxPoolSize", "class"],
referencedClasses: []
}),
smalltalk.ForkPool);

smalltalk.addMethod(
smalltalk.method({
selector: "fork:",
category: 'actions',
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
args: ["aBlock"],
source: "fork: aBlock\x0a\x09poolSize < self maxPoolSize ifTrue: [ self addWorker ].\x0a\x09queue nextPut: aBlock",
messageSends: ["ifTrue:", "<", "maxPoolSize", "addWorker", "nextPut:"],
referencedClasses: []
}),
smalltalk.ForkPool);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $Queue(){return smalltalk.Queue||(typeof Queue=="undefined"?nil:Queue)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ForkPool.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@poolSize"]=(0);
self["@queue"]=_st($Queue())._new();
self["@worker"]=self._makeWorker();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ForkPool)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x0a\x09poolSize := 0.\x0a\x09queue := Queue new.\x0a\x09worker := self makeWorker",
messageSends: ["initialize", "new", "makeWorker"],
referencedClasses: ["Queue"]
}),
smalltalk.ForkPool);

smalltalk.addMethod(
smalltalk.method({
selector: "makeWorker",
category: 'initialization',
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
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
block;
$2=_st(block).__eq_eq(sentinel);
if(! smalltalk.assert($2)){
return _st((function(){
return smalltalk.withContext(function($ctx3) {
return _st(block)._value();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx3) {
return self._addWorker();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)})}));
};
}, function($ctx2) {$ctx2.fillBlock({block:block},$ctx1,1)})});
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeWorker",{sentinel:sentinel},smalltalk.ForkPool)})},
args: [],
source: "makeWorker\x0a\x09| sentinel |\x0a\x09sentinel := Object new.\x0a\x09^ [ | block |\x0a\x09\x09poolSize := poolSize - 1.\x0a\x09\x09block := queue nextIfAbsent: [ sentinel ].\x0a\x09\x09block == sentinel ifFalse: [\x0a\x09\x09\x09[ block value ] ensure: [ self addWorker ] ]]",
messageSends: ["new", "-", "nextIfAbsent:", "ifFalse:", "==", "ensure:", "value", "addWorker"],
referencedClasses: ["Object"]
}),
smalltalk.ForkPool);

smalltalk.addMethod(
smalltalk.method({
selector: "maxPoolSize",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@maxPoolSize"];
if(($receiver = $2) == nil || $receiver == null){
$1=self._defaultMaxPoolSize();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"maxPoolSize",{},smalltalk.ForkPool)})},
args: [],
source: "maxPoolSize\x0a\x09^ maxPoolSize ifNil: [ self defaultMaxPoolSize ]",
messageSends: ["ifNil:", "defaultMaxPoolSize"],
referencedClasses: []
}),
smalltalk.ForkPool);

smalltalk.addMethod(
smalltalk.method({
selector: "maxPoolSize:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@maxPoolSize"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"maxPoolSize:",{anInteger:anInteger},smalltalk.ForkPool)})},
args: ["anInteger"],
source: "maxPoolSize: anInteger\x0a\x09maxPoolSize := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.ForkPool);


smalltalk.ForkPool.klass.iVarNames = ['default'];
smalltalk.addMethod(
smalltalk.method({
selector: "default",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@default"];
if(($receiver = $2) == nil || $receiver == null){
self["@default"]=self._new();
$1=self["@default"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.ForkPool.klass)})},
args: [],
source: "default\x0a\x09^ default ifNil: [ default := self new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.ForkPool.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultMaxPoolSize",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (100);
}, function($ctx1) {$ctx1.fill(self,"defaultMaxPoolSize",{},smalltalk.ForkPool.klass)})},
args: [],
source: "defaultMaxPoolSize\x0a\x09^ 100",
messageSends: [],
referencedClasses: []
}),
smalltalk.ForkPool.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "resetDefault",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@default"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"resetDefault",{},smalltalk.ForkPool.klass)})},
args: [],
source: "resetDefault\x0a\x09default := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.ForkPool.klass);


smalltalk.addClass('Message', smalltalk.Object, ['selector', 'arguments'], 'Kernel-Methods');
smalltalk.Message.comment="In general, the system does not use instances of me for efficiency reasons.\x0aHowever, when a message is not understood by its receiver, the interpreter will make up an instance of it in order to capture the information involved in an actual message transmission.\x0aThis instance is sent it as an argument with the message `#doesNotUnderstand:` to the receiver.\x0a\x0aSee boot.js, `messageNotUnderstood` and its counterpart `Object >> #doesNotUnderstand:`\x0a\x0a## API\x0a\x0aBesides accessing methods, `#sendTo:` provides a convenient way to send a message to an object.";
smalltalk.addMethod(
smalltalk.method({
selector: "arguments",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@arguments"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"arguments",{},smalltalk.Message)})},
args: [],
source: "arguments\x0a\x09^ arguments",
messageSends: [],
referencedClasses: []
}),
smalltalk.Message);

smalltalk.addMethod(
smalltalk.method({
selector: "arguments:",
category: 'accessing',
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@arguments"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"arguments:",{anArray:anArray},smalltalk.Message)})},
args: ["anArray"],
source: "arguments: anArray\x0a\x09arguments := anArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.Message);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.Message.superclass.fn.prototype._printOn_.apply(_st(self), [aStream]);
_st(aStream)._nextPutAll_("(");
$ctx1.sendIdx["nextPutAll:"]=1;
_st(aStream)._nextPutAll_(self._selector());
$ctx1.sendIdx["nextPutAll:"]=2;
$1=_st(aStream)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Message)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09aStream\x0a\x09\x09nextPutAll: '(';\x0a\x09\x09nextPutAll: self selector;\x0a\x09\x09nextPutAll: ')'",
messageSends: ["printOn:", "nextPutAll:", "selector"],
referencedClasses: []
}),
smalltalk.Message);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.Message)})},
args: [],
source: "selector\x0a\x09^ selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.Message);

smalltalk.addMethod(
smalltalk.method({
selector: "selector:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selector"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aString:aString},smalltalk.Message)})},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.Message);

smalltalk.addMethod(
smalltalk.method({
selector: "sendTo:",
category: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._perform_withArguments_(self._selector(),self._arguments());
return $1;
}, function($ctx1) {$ctx1.fill(self,"sendTo:",{anObject:anObject},smalltalk.Message)})},
args: ["anObject"],
source: "sendTo: anObject\x0a\x09^ anObject perform: self selector withArguments: self arguments",
messageSends: ["perform:withArguments:", "selector", "arguments"],
referencedClasses: []
}),
smalltalk.Message);


smalltalk.addMethod(
smalltalk.method({
selector: "selector:arguments:",
category: 'instance creation',
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
args: ["aString", "anArray"],
source: "selector: aString arguments: anArray\x0a\x09^ self new\x0a\x09\x09selector: aString;\x0a\x09\x09arguments: anArray;\x0a\x09\x09yourself",
messageSends: ["selector:", "new", "arguments:", "yourself"],
referencedClasses: []
}),
smalltalk.Message.klass);


smalltalk.addClass('MessageSend', smalltalk.Object, ['receiver', 'message'], 'Kernel-Methods');
smalltalk.MessageSend.comment="I encapsulate message sends to objects. Arguments can be either predefined or supplied when the message send is performed. \x0a\x0a## API\x0a\x0aUse `#value` to perform a message send with its predefined arguments and `#value:*` if additonal arguments have to supplied.";
smalltalk.addMethod(
smalltalk.method({
selector: "arguments",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@message"])._arguments();
return $1;
}, function($ctx1) {$ctx1.fill(self,"arguments",{},smalltalk.MessageSend)})},
args: [],
source: "arguments\x0a\x09^ message arguments",
messageSends: ["arguments"],
referencedClasses: []
}),
smalltalk.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "arguments:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@message"])._arguments_(aCollection);
return self}, function($ctx1) {$ctx1.fill(self,"arguments:",{aCollection:aCollection},smalltalk.MessageSend)})},
args: ["aCollection"],
source: "arguments: aCollection\x0a\x09message arguments: aCollection",
messageSends: ["arguments:"],
referencedClasses: []
}),
smalltalk.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $Message(){return smalltalk.Message||(typeof Message=="undefined"?nil:Message)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.MessageSend.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@message"]=_st($Message())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.MessageSend)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09message := Message new",
messageSends: ["initialize", "new"],
referencedClasses: ["Message"]
}),
smalltalk.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.MessageSend.superclass.fn.prototype._printOn_.apply(_st(self), [aStream]);
_st(aStream)._nextPutAll_("(");
$ctx1.sendIdx["nextPutAll:"]=1;
_st(aStream)._nextPutAll_(self._receiver());
$ctx1.sendIdx["nextPutAll:"]=2;
_st(aStream)._nextPutAll_(" >> ");
$ctx1.sendIdx["nextPutAll:"]=3;
_st(aStream)._nextPutAll_(self._selector());
$ctx1.sendIdx["nextPutAll:"]=4;
$1=_st(aStream)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.MessageSend)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09aStream\x0a\x09\x09nextPutAll: '(';\x0a\x09\x09nextPutAll: self receiver;\x0a\x09\x09nextPutAll: ' >> ';\x0a\x09\x09nextPutAll: self selector;\x0a\x09\x09nextPutAll: ')'",
messageSends: ["printOn:", "nextPutAll:", "receiver", "selector"],
referencedClasses: []
}),
smalltalk.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@receiver"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},smalltalk.MessageSend)})},
args: [],
source: "receiver\x0a\x09^ receiver",
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@receiver"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{anObject:anObject},smalltalk.MessageSend)})},
args: ["anObject"],
source: "receiver: anObject\x0a\x09receiver := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@message"])._selector();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.MessageSend)})},
args: [],
source: "selector\x0a\x09^ message selector",
messageSends: ["selector"],
referencedClasses: []
}),
smalltalk.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "selector:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@message"])._selector_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aString:aString},smalltalk.MessageSend)})},
args: ["aString"],
source: "selector: aString\x0a\x09message selector: aString",
messageSends: ["selector:"],
referencedClasses: []
}),
smalltalk.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
category: 'evaluating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@message"])._sendTo_(self._receiver());
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.MessageSend)})},
args: [],
source: "value\x0a\x09^ message sendTo: self receiver",
messageSends: ["sendTo:", "receiver"],
referencedClasses: []
}),
smalltalk.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
category: 'evaluating',
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
args: ["anObject"],
source: "value: anObject\x0a\x09^ message \x0a\x09\x09arguments: { anObject };\x0a\x09\x09sendTo: self receiver",
messageSends: ["arguments:", "sendTo:", "receiver"],
referencedClasses: []
}),
smalltalk.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "value:value:",
category: 'evaluating',
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
args: ["firstArgument", "secondArgument"],
source: "value: firstArgument value: secondArgument\x0a\x09^ message \x0a\x09\x09arguments: { firstArgument. secondArgument };\x0a\x09\x09sendTo: self receiver",
messageSends: ["arguments:", "sendTo:", "receiver"],
referencedClasses: []
}),
smalltalk.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "value:value:value:",
category: 'evaluating',
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
args: ["firstArgument", "secondArgument", "thirdArgument"],
source: "value: firstArgument value: secondArgument value: thirdArgument\x0a\x09^ message \x0a\x09\x09arguments: { firstArgument. secondArgument. thirdArgument };\x0a\x09\x09sendTo: self receiver",
messageSends: ["arguments:", "sendTo:", "receiver"],
referencedClasses: []
}),
smalltalk.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "valueWithPossibleArguments:",
category: 'evaluating',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._arguments_(aCollection);
$1=self._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"valueWithPossibleArguments:",{aCollection:aCollection},smalltalk.MessageSend)})},
args: ["aCollection"],
source: "valueWithPossibleArguments: aCollection\x0a\x09self arguments: aCollection.\x0a\x09^ self value",
messageSends: ["arguments:", "value"],
referencedClasses: []
}),
smalltalk.MessageSend);



smalltalk.addClass('MethodContext', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.MethodContext.comment="I hold all the dynamic state associated with the execution of either a method activation resulting from a message send. I am used to build the call stack while debugging.\x0a\x0aMy instances are JavaScript `SmalltalkMethodContext` objects defined in `boot.js`.";
smalltalk.addMethod(
smalltalk.method({
selector: "asString",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._isBlockContext();
if(smalltalk.assert($2)){
$3="a block (in ".__comma(_st(self._methodContext())._asString());
$ctx1.sendIdx[","]=2;
$1=_st($3).__comma(")");
$ctx1.sendIdx[","]=1;
} else {
$1=_st(_st(_st(_st(self._receiver())._class())._name()).__comma(" >> ")).__comma(self._selector());
$ctx1.sendIdx[","]=3;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.MethodContext)})},
args: [],
source: "asString\x0a\x09^ self isBlockContext\x0a\x09\x09ifTrue: [ 'a block (in ', self methodContext asString, ')' ]\x0a\x09\x09ifFalse: [ self receiver class name, ' >> ', self selector ]",
messageSends: ["ifTrue:ifFalse:", "isBlockContext", ",", "asString", "methodContext", "name", "class", "receiver", "selector"],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluatedSelector",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.evaluatedSelector;
return self}, function($ctx1) {$ctx1.fill(self,"evaluatedSelector",{},smalltalk.MethodContext)})},
args: [],
source: "evaluatedSelector\x0a\x09<return self.evaluatedSelector>",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "home",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.homeContext;
return self}, function($ctx1) {$ctx1.fill(self,"home",{},smalltalk.MethodContext)})},
args: [],
source: "home\x0a\x09<return self.homeContext>",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "index",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.index || 0;
return self}, function($ctx1) {$ctx1.fill(self,"index",{},smalltalk.MethodContext)})},
args: [],
source: "index\x0a\x09<return self.index || 0>",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "isBlockContext",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._selector())._isNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isBlockContext",{},smalltalk.MethodContext)})},
args: [],
source: "isBlockContext\x0a\x09\x22Block context do not have selectors.\x22\x0a\x09\x0a\x09^ self selector isNil",
messageSends: ["isNil", "selector"],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "locals",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.locals || {};
return self}, function($ctx1) {$ctx1.fill(self,"locals",{},smalltalk.MethodContext)})},
args: [],
source: "locals\x0a\x09<return self.locals || {}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "method",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$5,$4,$3,$1;
$2=self._methodContext();
$ctx1.sendIdx["methodContext"]=1;
if(($receiver = $2) == nil || $receiver == null){
$1=$2;
} else {
$5=self._methodContext();
$ctx1.sendIdx["methodContext"]=2;
$4=_st($5)._receiver();
$3=_st($4)._class();
$1=_st($3)._lookupSelector_(_st(self._methodContext())._selector());
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"method",{},smalltalk.MethodContext)})},
args: [],
source: "method\x0a\x09^ self methodContext ifNotNil: [\x0a\x09\x09self methodContext receiver class lookupSelector: self methodContext selector ]",
messageSends: ["ifNotNil:", "methodContext", "lookupSelector:", "class", "receiver", "selector"],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "methodContext",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
$1=self._isBlockContext();
if(! smalltalk.assert($1)){
return self;
};
$3=self._outerContext();
if(($receiver = $3) == nil || $receiver == null){
$2=$3;
} else {
var outer;
outer=$receiver;
$2=_st(outer)._methodContext();
};
return $2;
}, function($ctx1) {$ctx1.fill(self,"methodContext",{},smalltalk.MethodContext)})},
args: [],
source: "methodContext\x0a\x09self isBlockContext ifFalse: [ ^ self ].\x0a\x09\x0a\x09^ self outerContext ifNotNil: [ :outer |\x0a\x09\x09outer methodContext ]",
messageSends: ["ifFalse:", "isBlockContext", "ifNotNil:", "outerContext", "methodContext"],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "outerContext",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.outerContext || self.homeContext;
return self}, function($ctx1) {$ctx1.fill(self,"outerContext",{},smalltalk.MethodContext)})},
args: [],
source: "outerContext\x0a\x09<return self.outerContext || self.homeContext>",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.MethodContext.superclass.fn.prototype._printOn_.apply(_st(self), [aStream]);
_st(aStream)._nextPutAll_("(");
$ctx1.sendIdx["nextPutAll:"]=1;
_st(aStream)._nextPutAll_(self._asString());
$ctx1.sendIdx["nextPutAll:"]=2;
$1=_st(aStream)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.MethodContext)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09aStream \x0a\x09\x09nextPutAll: '(';\x0a\x09\x09nextPutAll: self asString;\x0a\x09\x09nextPutAll: ')'",
messageSends: ["printOn:", "nextPutAll:", "asString"],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.receiver;
return self}, function($ctx1) {$ctx1.fill(self,"receiver",{},smalltalk.MethodContext)})},
args: [],
source: "receiver\x0a\x09<return self.receiver>",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
category: 'accessing',
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
args: [],
source: "selector\x0a\x09<\x0a\x09\x09if(self.selector) {\x0a\x09\x09\x09return smalltalk.convertSelector(self.selector);\x0a\x09\x09} else {\x0a\x09\x09\x09return nil;\x0a\x09\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "sendIndexAt:",
category: 'accessing',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.sendIdx[aSelector] || 0;
return self}, function($ctx1) {$ctx1.fill(self,"sendIndexAt:",{aSelector:aSelector},smalltalk.MethodContext)})},
args: ["aSelector"],
source: "sendIndexAt: aSelector\x0a\x09<return self.sendIdx[aSelector] || 0>",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "sendIndexes",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.sendIdx;
return self}, function($ctx1) {$ctx1.fill(self,"sendIndexes",{},smalltalk.MethodContext)})},
args: [],
source: "sendIndexes\x0a\x09<return self.sendIdx>",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "temps",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._deprecatedAPI();
$1=self._locals();
return $1;
}, function($ctx1) {$ctx1.fill(self,"temps",{},smalltalk.MethodContext)})},
args: [],
source: "temps\x0a\x09self deprecatedAPI.\x0a\x09\x0a\x09^ self locals",
messageSends: ["deprecatedAPI", "locals"],
referencedClasses: []
}),
smalltalk.MethodContext);



smalltalk.addClass('NativeFunction', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.NativeFunction.comment="I am a wrapper around native functions, such as `WebSocket`.\x0aFor 'normal' functions (whose constructor is the JavaScript `Function` object), use `BlockClosure`.\x0a\x0a## API\x0a\x0aSee the class-side `instance creation` methods for instance creation.\x0a\x0aCreated instances will most probably be instance of `JSObjectProxy`.\x0a\x0a## Usage example:\x0a\x0a\x09| ws |\x0a\x09ws := NativeFunction constructor: 'WebSocket' value: 'ws://localhost'.\x0a\x09ws at: 'onopen' put: [ ws send: 'hey there from Amber' ]";

smalltalk.addMethod(
smalltalk.method({
selector: "constructor:",
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var native=eval(aString);
		return new native();
	;
return self}, function($ctx1) {$ctx1.fill(self,"constructor:",{aString:aString},smalltalk.NativeFunction.klass)})},
args: ["aString"],
source: "constructor: aString\x0a\x09<\x0a\x09\x09var native=eval(aString);\x0a\x09\x09return new native();\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.NativeFunction.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "constructor:value:",
category: 'instance creation',
fn: function (aString,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var native=eval(aString);
		return new native(anObject);
	;
return self}, function($ctx1) {$ctx1.fill(self,"constructor:value:",{aString:aString,anObject:anObject},smalltalk.NativeFunction.klass)})},
args: ["aString", "anObject"],
source: "constructor: aString value:anObject\x0a\x09<\x0a\x09\x09var native=eval(aString);\x0a\x09\x09return new native(anObject);\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.NativeFunction.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "constructor:value:value:",
category: 'instance creation',
fn: function (aString,anObject,anObject2){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var native=eval(aString);
		return new native(anObject,anObject2);
	;
return self}, function($ctx1) {$ctx1.fill(self,"constructor:value:value:",{aString:aString,anObject:anObject,anObject2:anObject2},smalltalk.NativeFunction.klass)})},
args: ["aString", "anObject", "anObject2"],
source: "constructor: aString value:anObject value: anObject2\x0a\x09<\x0a\x09\x09var native=eval(aString);\x0a\x09\x09return new native(anObject,anObject2);\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.NativeFunction.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "constructor:value:value:value:",
category: 'instance creation',
fn: function (aString,anObject,anObject2,anObject3){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var native=eval(aString);
		return new native(anObject,anObject2, anObject3);
	;
return self}, function($ctx1) {$ctx1.fill(self,"constructor:value:value:value:",{aString:aString,anObject:anObject,anObject2:anObject2,anObject3:anObject3},smalltalk.NativeFunction.klass)})},
args: ["aString", "anObject", "anObject2", "anObject3"],
source: "constructor: aString value:anObject value: anObject2 value:anObject3\x0a\x09<\x0a\x09\x09var native=eval(aString);\x0a\x09\x09return new native(anObject,anObject2, anObject3);\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.NativeFunction.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "exists:",
category: 'testing',
fn: function (aString){
var self=this;
function $PlatformInterface(){return smalltalk.PlatformInterface||(typeof PlatformInterface=="undefined"?nil:PlatformInterface)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($PlatformInterface())._existsGlobal_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"exists:",{aString:aString},smalltalk.NativeFunction.klass)})},
args: ["aString"],
source: "exists: aString\x0a\x09^ PlatformInterface existsGlobal: aString",
messageSends: ["existsGlobal:"],
referencedClasses: ["PlatformInterface"]
}),
smalltalk.NativeFunction.klass);


smalltalk.addClass('Timeout', smalltalk.Object, ['rawTimeout'], 'Kernel-Methods');
smalltalk.Timeout.comment="I am wrapping the returns from `set{Timeout,Interval}`.\x0a\x0a## Motivation\x0a\x0aNumber suffices in browsers, but node.js returns an object.";
smalltalk.addMethod(
smalltalk.method({
selector: "clearInterval",
category: 'timeout/interval',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var interval = self["@rawTimeout"];
		clearInterval(interval);
	;
return self}, function($ctx1) {$ctx1.fill(self,"clearInterval",{},smalltalk.Timeout)})},
args: [],
source: "clearInterval\x0a\x09<\x0a\x09\x09var interval = self[\x22@rawTimeout\x22];\x0a\x09\x09clearInterval(interval);\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Timeout);

smalltalk.addMethod(
smalltalk.method({
selector: "clearTimeout",
category: 'timeout/interval',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var timeout = self["@rawTimeout"];
		clearTimeout(timeout);
	;
return self}, function($ctx1) {$ctx1.fill(self,"clearTimeout",{},smalltalk.Timeout)})},
args: [],
source: "clearTimeout\x0a\x09<\x0a\x09\x09var timeout = self[\x22@rawTimeout\x22];\x0a\x09\x09clearTimeout(timeout);\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Timeout);

smalltalk.addMethod(
smalltalk.method({
selector: "rawTimeout:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rawTimeout"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"rawTimeout:",{anObject:anObject},smalltalk.Timeout)})},
args: ["anObject"],
source: "rawTimeout: anObject\x0a\x09rawTimeout := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.Timeout);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._rawTimeout_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anObject:anObject},smalltalk.Timeout.klass)})},
args: ["anObject"],
source: "on: anObject\x0a\x09^ self new rawTimeout: anObject; yourself",
messageSends: ["rawTimeout:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Timeout.klass);

});
