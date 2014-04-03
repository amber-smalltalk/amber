define("amber_core/Kernel-Methods", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Kernel-Methods');
smalltalk.packages["Kernel-Methods"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('BlockClosure', globals.Object, [], 'Kernel-Methods');
globals.BlockClosure.comment="I represent a lexical closure.\x0aI am is directly mapped to JavaScript Function.\x0a\x0a## API\x0a\x0a1. Evaluation\x0a\x0a    My instances get evaluated with the `#value*` methods in the 'evaluating' protocol.\x0a\x0a    Example: ` [ :x | x + 1 ] value: 3 \x22Answers 4\x22 `\x0a\x0a2. Control structures\x0a\x0a    Blocks are used (together with `Boolean`) for control structures (methods in the `controlling` protocol).\x0a\x0a    Example: `aBlock whileTrue: [ ... ]`\x0a\x0a3. Error handling\x0a\x0a    I provide the `#on:do:` method for handling exceptions.\x0a\x0a    Example: ` aBlock on: MessageNotUnderstood do: [ :ex | ... ] `";
smalltalk.addMethod(
smalltalk.method({
selector: "applyTo:arguments:",
protocol: 'evaluating',
fn: function (anObject,aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.apply(anObject, aCollection);
return self}, function($ctx1) {$ctx1.fill(self,"applyTo:arguments:",{anObject:anObject,aCollection:aCollection},globals.BlockClosure)})},
args: ["anObject", "aCollection"],
source: "applyTo: anObject arguments: aCollection\x0a\x09<return self.apply(anObject, aCollection)>",
messageSends: [],
referencedClasses: []
}),
globals.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "asCompiledMethod:",
protocol: 'converting',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.method({selector:aString, fn:self});;
return self}, function($ctx1) {$ctx1.fill(self,"asCompiledMethod:",{aString:aString},globals.BlockClosure)})},
args: ["aString"],
source: "asCompiledMethod: aString\x0a\x09<return smalltalk.method({selector:aString, fn:self});>",
messageSends: [],
referencedClasses: []
}),
globals.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "compiledSource",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.toString();
return self}, function($ctx1) {$ctx1.fill(self,"compiledSource",{},globals.BlockClosure)})},
args: [],
source: "compiledSource\x0a\x09<return self.toString()>",
messageSends: [],
referencedClasses: []
}),
globals.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "currySelf",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		return function () {
			var args = [ this ];
			args.push.apply(args, arguments);
			return self.apply(null, args);
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"currySelf",{},globals.BlockClosure)})},
args: [],
source: "currySelf\x0a\x09\x22Transforms [ :selfarg :x :y | stcode ] block\x0a\x09which represents JS function (selfarg, x, y, ...) {jscode}\x0a\x09into function (x, y, ...) {jscode} that takes selfarg from 'this'.\x0a\x09IOW, it is usable as JS method and first arg takes the receiver.\x22\x0a\x09\x0a\x09<\x0a\x09\x09return function () {\x0a\x09\x09\x09var args = [ this ];\x0a\x09\x09\x09args.push.apply(args, arguments);\x0a\x09\x09\x09return self.apply(null, args);\x0a\x09\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "ensure:",
protocol: 'evaluating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
try{return self._value()}finally{aBlock._value()};
return self}, function($ctx1) {$ctx1.fill(self,"ensure:",{aBlock:aBlock},globals.BlockClosure)})},
args: ["aBlock"],
source: "ensure: aBlock\x0a\x09<try{return self._value()}finally{aBlock._value()}>",
messageSends: [],
referencedClasses: []
}),
globals.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "fork",
protocol: 'timeout/interval',
fn: function (){
var self=this;
function $ForkPool(){return globals.ForkPool||(typeof ForkPool=="undefined"?nil:ForkPool)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($ForkPool())._default())._fork_(self);
return self}, function($ctx1) {$ctx1.fill(self,"fork",{},globals.BlockClosure)})},
args: [],
source: "fork\x0a\x09ForkPool default fork: self",
messageSends: ["fork:", "default"],
referencedClasses: ["ForkPool"]
}),
globals.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
protocol: 'evaluating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new self();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},globals.BlockClosure)})},
args: [],
source: "new\x0a\x09\x22Use the receiver as a JS constructor.\x0a\x09*Do not* use this method to instanciate Smalltalk objects!\x22\x0a\x09<return new self()>",
messageSends: [],
referencedClasses: []
}),
globals.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "newValue:",
protocol: 'evaluating',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._newWithValues_([anObject]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newValue:",{anObject:anObject},globals.BlockClosure)})},
args: ["anObject"],
source: "newValue: anObject\x0a\x09^ self newWithValues: { anObject }",
messageSends: ["newWithValues:"],
referencedClasses: []
}),
globals.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "newValue:value:",
protocol: 'evaluating',
fn: function (anObject,anObject2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._newWithValues_([anObject,anObject2]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newValue:value:",{anObject:anObject,anObject2:anObject2},globals.BlockClosure)})},
args: ["anObject", "anObject2"],
source: "newValue: anObject value: anObject2\x0a\x09^ self newWithValues: { anObject. anObject2 }.",
messageSends: ["newWithValues:"],
referencedClasses: []
}),
globals.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "newValue:value:value:",
protocol: 'evaluating',
fn: function (anObject,anObject2,anObject3){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._newWithValues_([anObject,anObject2,anObject3]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newValue:value:value:",{anObject:anObject,anObject2:anObject2,anObject3:anObject3},globals.BlockClosure)})},
args: ["anObject", "anObject2", "anObject3"],
source: "newValue: anObject value: anObject2 value: anObject3\x0a\x09^ self newWithValues: { anObject. anObject2. anObject3 }.",
messageSends: ["newWithValues:"],
referencedClasses: []
}),
globals.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "newWithValues:",
protocol: 'evaluating',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var object = Object.create(self.prototype);
		var result = self.apply(object, aCollection);
		return typeof result === "object" ? result : object;
	;
return self}, function($ctx1) {$ctx1.fill(self,"newWithValues:",{aCollection:aCollection},globals.BlockClosure)})},
args: ["aCollection"],
source: "newWithValues: aCollection\x0a\x09\x22Simulates JS new operator by combination of Object.create and .apply\x22\x0a\x09<\x0a\x09\x09var object = Object.create(self.prototype);\x0a\x09\x09var result = self.apply(object, aCollection);\x0a\x09\x09return typeof result === \x22object\x22 ? result : object;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "numArgs",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.length;
return self}, function($ctx1) {$ctx1.fill(self,"numArgs",{},globals.BlockClosure)})},
args: [],
source: "numArgs\x0a\x09<return self.length>",
messageSends: [],
referencedClasses: []
}),
globals.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "on:do:",
protocol: 'error handling',
fn: function (anErrorClass,aBlock){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=self._tryCatch_((function(error){
var smalltalkError;
return smalltalk.withContext(function($ctx2) {
smalltalkError=_st($Smalltalk())._asSmalltalkException_(error);
smalltalkError;
$2=_st(smalltalkError)._isKindOf_(anErrorClass);
if(smalltalk.assert($2)){
return _st(aBlock)._value_(smalltalkError);
} else {
return _st(smalltalkError)._resignal();
};
}, function($ctx2) {$ctx2.fillBlock({error:error,smalltalkError:smalltalkError},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:do:",{anErrorClass:anErrorClass,aBlock:aBlock},globals.BlockClosure)})},
args: ["anErrorClass", "aBlock"],
source: "on: anErrorClass do: aBlock\x0a\x09\x22All exceptions thrown in the Smalltalk stack are cought.\x0a\x09Convert all JS exceptions to JavaScriptException instances.\x22\x0a\x09\x0a\x09^ self tryCatch: [ :error | | smalltalkError |\x0a\x09\x09smalltalkError := Smalltalk asSmalltalkException: error.\x0a\x09\x09(smalltalkError isKindOf: anErrorClass)\x0a\x09\x09ifTrue: [ aBlock value: smalltalkError ]\x0a\x09\x09ifFalse: [ smalltalkError resignal ] ]",
messageSends: ["tryCatch:", "asSmalltalkException:", "ifTrue:ifFalse:", "isKindOf:", "value:", "resignal"],
referencedClasses: ["Smalltalk"]
}),
globals.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
protocol: 'accessing',
fn: function (){
var self=this;
return nil;
},
args: [],
source: "receiver\x0a\x09^ nil",
messageSends: [],
referencedClasses: []
}),
globals.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "timeToRun",
protocol: 'evaluating',
fn: function (){
var self=this;
function $Date(){return globals.Date||(typeof Date=="undefined"?nil:Date)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Date())._millisecondsToRun_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"timeToRun",{},globals.BlockClosure)})},
args: [],
source: "timeToRun\x0a\x09\x22Answer the number of milliseconds taken to execute this block.\x22\x0a\x0a\x09^ Date millisecondsToRun: self",
messageSends: ["millisecondsToRun:"],
referencedClasses: ["Date"]
}),
globals.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "tryCatch:",
protocol: 'error handling',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		try {
			return self._value();
		} catch(error) {
			return aBlock._value_(error);
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"tryCatch:",{aBlock:aBlock},globals.BlockClosure)})},
args: ["aBlock"],
source: "tryCatch: aBlock\x0a\x09<\x0a\x09\x09try {\x0a\x09\x09\x09return self._value();\x0a\x09\x09} catch(error) {\x0a\x09\x09\x09return aBlock._value_(error);\x0a\x09\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
protocol: 'evaluating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self();;
return self}, function($ctx1) {$ctx1.fill(self,"value",{},globals.BlockClosure)})},
args: [],
source: "value\x0a\x09<return self();>",
messageSends: [],
referencedClasses: []
}),
globals.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
protocol: 'evaluating',
fn: function (anArg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self(anArg);;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{anArg:anArg},globals.BlockClosure)})},
args: ["anArg"],
source: "value: anArg\x0a\x09<return self(anArg);>",
messageSends: [],
referencedClasses: []
}),
globals.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "value:value:",
protocol: 'evaluating',
fn: function (firstArg,secondArg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self(firstArg, secondArg);;
return self}, function($ctx1) {$ctx1.fill(self,"value:value:",{firstArg:firstArg,secondArg:secondArg},globals.BlockClosure)})},
args: ["firstArg", "secondArg"],
source: "value: firstArg value: secondArg\x0a\x09<return self(firstArg, secondArg);>",
messageSends: [],
referencedClasses: []
}),
globals.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "value:value:value:",
protocol: 'evaluating',
fn: function (firstArg,secondArg,thirdArg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self(firstArg, secondArg, thirdArg);;
return self}, function($ctx1) {$ctx1.fill(self,"value:value:value:",{firstArg:firstArg,secondArg:secondArg,thirdArg:thirdArg},globals.BlockClosure)})},
args: ["firstArg", "secondArg", "thirdArg"],
source: "value: firstArg value: secondArg value: thirdArg\x0a\x09<return self(firstArg, secondArg, thirdArg);>",
messageSends: [],
referencedClasses: []
}),
globals.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "valueWithInterval:",
protocol: 'timeout/interval',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var interval = setInterval(self, aNumber);
		return globals.Timeout._on_(interval);
	;
return self}, function($ctx1) {$ctx1.fill(self,"valueWithInterval:",{aNumber:aNumber},globals.BlockClosure)})},
args: ["aNumber"],
source: "valueWithInterval: aNumber\x0a\x09<\x0a\x09\x09var interval = setInterval(self, aNumber);\x0a\x09\x09return globals.Timeout._on_(interval);\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "valueWithPossibleArguments:",
protocol: 'evaluating',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.apply(null, aCollection);;
return self}, function($ctx1) {$ctx1.fill(self,"valueWithPossibleArguments:",{aCollection:aCollection},globals.BlockClosure)})},
args: ["aCollection"],
source: "valueWithPossibleArguments: aCollection\x0a\x09<return self.apply(null, aCollection);>",
messageSends: [],
referencedClasses: []
}),
globals.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "valueWithTimeout:",
protocol: 'timeout/interval',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var timeout = setTimeout(self, aNumber);
		return globals.Timeout._on_(timeout);
	;
return self}, function($ctx1) {$ctx1.fill(self,"valueWithTimeout:",{aNumber:aNumber},globals.BlockClosure)})},
args: ["aNumber"],
source: "valueWithTimeout: aNumber\x0a\x09<\x0a\x09\x09var timeout = setTimeout(self, aNumber);\x0a\x09\x09return globals.Timeout._on_(timeout);\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "whileFalse",
protocol: 'controlling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._whileFalse_((function(){
}));
return self}, function($ctx1) {$ctx1.fill(self,"whileFalse",{},globals.BlockClosure)})},
args: [],
source: "whileFalse\x0a\x09self whileFalse: []",
messageSends: ["whileFalse:"],
referencedClasses: []
}),
globals.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "whileFalse:",
protocol: 'controlling',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
while(!smalltalk.assert(self._value())) {aBlock._value()};
return self}, function($ctx1) {$ctx1.fill(self,"whileFalse:",{aBlock:aBlock},globals.BlockClosure)})},
args: ["aBlock"],
source: "whileFalse: aBlock\x0a\x09<while(!smalltalk.assert(self._value())) {aBlock._value()}>",
messageSends: [],
referencedClasses: []
}),
globals.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "whileTrue",
protocol: 'controlling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._whileTrue_((function(){
}));
return self}, function($ctx1) {$ctx1.fill(self,"whileTrue",{},globals.BlockClosure)})},
args: [],
source: "whileTrue\x0a\x09self whileTrue: []",
messageSends: ["whileTrue:"],
referencedClasses: []
}),
globals.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "whileTrue:",
protocol: 'controlling',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
while(smalltalk.assert(self._value())) {aBlock._value()};
return self}, function($ctx1) {$ctx1.fill(self,"whileTrue:",{aBlock:aBlock},globals.BlockClosure)})},
args: ["aBlock"],
source: "whileTrue: aBlock\x0a\x09<while(smalltalk.assert(self._value())) {aBlock._value()}>",
messageSends: [],
referencedClasses: []
}),
globals.BlockClosure);



smalltalk.addClass('CompiledMethod', globals.Object, [], 'Kernel-Methods');
globals.CompiledMethod.comment="I represent a class method of the system. I hold the source and compiled code of a class method.\x0a\x0a## API\x0aMy instances can be accessed using `Behavior >> #methodAt:`\x0a\x0a    Object methodAt: 'asString'\x0a\x0aSource code access:\x0a\x0a\x09(String methodAt: 'lines') source\x0a\x0aReferenced classes:\x0a\x0a\x09(String methodAt: 'lines') referencedClasses\x0a\x0aMessages sent from an instance:\x0a\x09\x0a\x09(String methodAt: 'lines') messageSends";
smalltalk.addMethod(
smalltalk.method({
selector: "arguments",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.args || [];
return self}, function($ctx1) {$ctx1.fill(self,"arguments",{},globals.CompiledMethod)})},
args: [],
source: "arguments\x0a\x09<return self.args || []>",
messageSends: [],
referencedClasses: []
}),
globals.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "browse",
protocol: 'browsing',
fn: function (){
var self=this;
function $Finder(){return globals.Finder||(typeof Finder=="undefined"?nil:Finder)}
return smalltalk.withContext(function($ctx1) { 
_st($Finder())._findMethod_(self);
return self}, function($ctx1) {$ctx1.fill(self,"browse",{},globals.CompiledMethod)})},
args: [],
source: "browse\x0a\x09Finder findMethod: self",
messageSends: ["findMethod:"],
referencedClasses: ["Finder"]
}),
globals.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "category",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._protocol();
return $1;
}, function($ctx1) {$ctx1.fill(self,"category",{},globals.CompiledMethod)})},
args: [],
source: "category\x0a\x09^ self protocol",
messageSends: ["protocol"],
referencedClasses: []
}),
globals.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultProtocol",
protocol: 'defaults',
fn: function (){
var self=this;
return "as yet unclassified";
},
args: [],
source: "defaultProtocol\x0a\x09^ 'as yet unclassified'",
messageSends: [],
referencedClasses: []
}),
globals.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "fn",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicAt_("fn");
return $1;
}, function($ctx1) {$ctx1.fill(self,"fn",{},globals.CompiledMethod)})},
args: [],
source: "fn\x0a\x09^ self basicAt: 'fn'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
globals.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "fn:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._basicAt_put_("fn",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"fn:",{aBlock:aBlock},globals.CompiledMethod)})},
args: ["aBlock"],
source: "fn: aBlock\x0a\x09self basicAt: 'fn' put: aBlock",
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
globals.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "isCompiledMethod",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isCompiledMethod\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "isOverridden",
protocol: 'testing',
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
}, function($ctx1) {$ctx1.fill(self,"isOverridden",{selector:selector},globals.CompiledMethod)})},
args: [],
source: "isOverridden\x0a\x09| selector |\x0a    \x0a    selector := self selector.\x0a    self methodClass allSubclassesDo: [ :each |\x0a\x09    (each includesSelector: selector)\x0a        \x09ifTrue: [ ^ true ] ].\x0a\x09^ false",
messageSends: ["selector", "allSubclassesDo:", "methodClass", "ifTrue:", "includesSelector:"],
referencedClasses: []
}),
globals.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "isOverride",
protocol: 'testing',
fn: function (){
var self=this;
var superclass;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$receiver;
$1=self._methodClass();
$ctx1.sendIdx["methodClass"]=1;
superclass=_st($1)._superclass();
$ctx1.sendIdx["superclass"]=1;
$2=superclass;
if(($receiver = $2) == null || $receiver.isNil){
return false;
} else {
$2;
};
$3=_st(_st(_st(self._methodClass())._superclass())._lookupSelector_(self._selector()))._notNil();
return $3;
}, function($ctx1) {$ctx1.fill(self,"isOverride",{superclass:superclass},globals.CompiledMethod)})},
args: [],
source: "isOverride\x0a\x09| superclass |\x0a    \x0a    superclass := self methodClass superclass.\x0a\x09superclass ifNil: [ ^ false ].\x0a\x09\x0a    ^ (self methodClass superclass lookupSelector: self selector) notNil",
messageSends: ["superclass", "methodClass", "ifNil:", "notNil", "lookupSelector:", "selector"],
referencedClasses: []
}),
globals.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "messageSends",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicAt_("messageSends");
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageSends",{},globals.CompiledMethod)})},
args: [],
source: "messageSends\x0a\x09^ self basicAt: 'messageSends'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
globals.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "methodClass",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicAt_("methodClass");
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodClass",{},globals.CompiledMethod)})},
args: [],
source: "methodClass\x0a\x09^ self basicAt: 'methodClass'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
globals.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "package",
protocol: 'accessing',
fn: function (){
var self=this;
function $Package(){return globals.Package||(typeof Package=="undefined"?nil:Package)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$5,$4,$6,$receiver;
$1=self._methodClass();
$ctx1.sendIdx["methodClass"]=1;
if(($receiver = $1) == null || $receiver.isNil){
return nil;
} else {
$1;
};
$3=self._protocol();
$ctx1.sendIdx["protocol"]=1;
$2=_st($3)._beginsWith_("*");
if(! smalltalk.assert($2)){
$5=self._methodClass();
$ctx1.sendIdx["methodClass"]=2;
$4=_st($5)._package();
$ctx1.sendIdx["package"]=1;
return $4;
};
$6=_st($Package())._named_ifAbsent_(_st(self._protocol())._allButFirst(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._methodClass())._package();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
return $6;
}, function($ctx1) {$ctx1.fill(self,"package",{},globals.CompiledMethod)})},
args: [],
source: "package\x0a\x09\x22Answer the package the receiver belongs to:\x0a\x09- if it is an extension method, answer the corresponding package\x0a\x09- else answer the `methodClass` package\x22\x0a\x09\x0a\x09self methodClass ifNil: [ ^ nil ].\x0a\x09\x0a\x09(self protocol beginsWith: '*') ifFalse: [\x0a\x09\x09^ self methodClass package ].\x0a\x09\x09\x0a\x09^ Package \x0a\x09\x09named: self protocol allButFirst\x0a\x09\x09ifAbsent: [ self methodClass package ]",
messageSends: ["ifNil:", "methodClass", "ifFalse:", "beginsWith:", "protocol", "package", "named:ifAbsent:", "allButFirst"],
referencedClasses: ["Package"]
}),
globals.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "protocol",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self._basicAt_("protocol");
if(($receiver = $2) == null || $receiver.isNil){
$1=self._defaultProtocol();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"protocol",{},globals.CompiledMethod)})},
args: [],
source: "protocol\x0a\x09^ (self basicAt: 'protocol') ifNil: [ self defaultProtocol ]",
messageSends: ["ifNil:", "basicAt:", "defaultProtocol"],
referencedClasses: []
}),
globals.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "protocol:",
protocol: 'accessing',
fn: function (aString){
var self=this;
var oldProtocol;
function $SystemAnnouncer(){return globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $MethodMoved(){return globals.MethodMoved||(typeof MethodMoved=="undefined"?nil:MethodMoved)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$receiver;
oldProtocol=self._protocol();
self._basicAt_put_("protocol",aString);
$1=_st($MethodMoved())._new();
_st($1)._method_(self);
_st($1)._oldProtocol_(oldProtocol);
$2=_st($1)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($2);
$3=self._methodClass();
if(($receiver = $3) == null || $receiver.isNil){
$3;
} else {
var methodClass;
methodClass=$receiver;
_st(_st(methodClass)._organization())._addElement_(aString);
_st(methodClass)._removeProtocolIfEmpty_(oldProtocol);
};
return self}, function($ctx1) {$ctx1.fill(self,"protocol:",{aString:aString,oldProtocol:oldProtocol},globals.CompiledMethod)})},
args: ["aString"],
source: "protocol: aString\x0a\x09| oldProtocol |\x0a\x09oldProtocol := self protocol.\x0a\x09self basicAt: 'protocol' put: aString.\x0a\x0a\x09SystemAnnouncer current announce: (MethodMoved new\x0a\x09\x09method: self;\x0a\x09\x09oldProtocol: oldProtocol;\x0a\x09\x09yourself).\x0a\x0a\x09self methodClass ifNotNil: [ :methodClass |\x0a\x09\x09methodClass organization addElement: aString.\x0a\x09\x09methodClass removeProtocolIfEmpty: oldProtocol ]",
messageSends: ["protocol", "basicAt:put:", "announce:", "current", "method:", "new", "oldProtocol:", "yourself", "ifNotNil:", "methodClass", "addElement:", "organization", "removeProtocolIfEmpty:"],
referencedClasses: ["SystemAnnouncer", "MethodMoved"]
}),
globals.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "referencedClasses",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicAt_("referencedClasses");
return $1;
}, function($ctx1) {$ctx1.fill(self,"referencedClasses",{},globals.CompiledMethod)})},
args: [],
source: "referencedClasses\x0a\x09^ self basicAt: 'referencedClasses'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
globals.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicAt_("selector");
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},globals.CompiledMethod)})},
args: [],
source: "selector\x0a\x09^ self basicAt: 'selector'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
globals.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "selector:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._basicAt_put_("selector",aString);
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aString:aString},globals.CompiledMethod)})},
args: ["aString"],
source: "selector: aString\x0a\x09self basicAt: 'selector' put: aString",
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
globals.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "sendTo:arguments:",
protocol: 'evaluating',
fn: function (anObject,aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._fn())._applyTo_arguments_(anObject,aCollection);
return $1;
}, function($ctx1) {$ctx1.fill(self,"sendTo:arguments:",{anObject:anObject,aCollection:aCollection},globals.CompiledMethod)})},
args: ["anObject", "aCollection"],
source: "sendTo: anObject arguments: aCollection\x0a\x09^ self fn applyTo: anObject arguments: aCollection",
messageSends: ["applyTo:arguments:", "fn"],
referencedClasses: []
}),
globals.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "source",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self._basicAt_("source");
if(($receiver = $2) == null || $receiver.isNil){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"source",{},globals.CompiledMethod)})},
args: [],
source: "source\x0a\x09^ (self basicAt: 'source') ifNil: [ '' ]",
messageSends: ["ifNil:", "basicAt:"],
referencedClasses: []
}),
globals.CompiledMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "source:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._basicAt_put_("source",aString);
return self}, function($ctx1) {$ctx1.fill(self,"source:",{aString:aString},globals.CompiledMethod)})},
args: ["aString"],
source: "source: aString\x0a\x09self basicAt: 'source' put: aString",
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
globals.CompiledMethod);



smalltalk.addClass('ForkPool', globals.Object, ['poolSize', 'maxPoolSize', 'queue', 'worker'], 'Kernel-Methods');
globals.ForkPool.comment="I am responsible for handling forked blocks.\x0aThe pool size sets the maximum concurrent forked blocks.\x0a\x0a## API\x0a\x0aThe default instance is accessed with `#default`.\x0aThe maximum concurrent forked blocks can be set with `#maxPoolSize:`.\x0a\x0aForking is done via `BlockClosure >> #fork`";
smalltalk.addMethod(
smalltalk.method({
selector: "addWorker",
protocol: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@worker"])._valueWithTimeout_((0));
self["@poolSize"]=_st(self["@poolSize"]).__plus((1));
return self}, function($ctx1) {$ctx1.fill(self,"addWorker",{},globals.ForkPool)})},
args: [],
source: "addWorker\x0a\x09worker valueWithTimeout: 0.\x0a\x09poolSize := poolSize + 1",
messageSends: ["valueWithTimeout:", "+"],
referencedClasses: []
}),
globals.ForkPool);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultMaxPoolSize",
protocol: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._defaultMaxPoolSize();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultMaxPoolSize",{},globals.ForkPool)})},
args: [],
source: "defaultMaxPoolSize\x0a\x09^ self class defaultMaxPoolSize",
messageSends: ["defaultMaxPoolSize", "class"],
referencedClasses: []
}),
globals.ForkPool);

smalltalk.addMethod(
smalltalk.method({
selector: "fork:",
protocol: 'actions',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@poolSize"]).__lt(self._maxPoolSize());
if(smalltalk.assert($1)){
self._addWorker();
};
_st(self["@queue"])._nextPut_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"fork:",{aBlock:aBlock},globals.ForkPool)})},
args: ["aBlock"],
source: "fork: aBlock\x0a\x09poolSize < self maxPoolSize ifTrue: [ self addWorker ].\x0a\x09queue nextPut: aBlock",
messageSends: ["ifTrue:", "<", "maxPoolSize", "addWorker", "nextPut:"],
referencedClasses: []
}),
globals.ForkPool);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $Queue(){return globals.Queue||(typeof Queue=="undefined"?nil:Queue)}
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.ForkPool.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@poolSize"]=(0);
self["@queue"]=_st($Queue())._new();
self["@worker"]=self._makeWorker();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.ForkPool)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x0a\x09poolSize := 0.\x0a\x09queue := Queue new.\x0a\x09worker := self makeWorker",
messageSends: ["initialize", "new", "makeWorker"],
referencedClasses: ["Queue"]
}),
globals.ForkPool);

smalltalk.addMethod(
smalltalk.method({
selector: "makeWorker",
protocol: 'initialization',
fn: function (){
var self=this;
var sentinel;
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
sentinel=_st($Object())._new();
$1=(function(){
var block;
return smalltalk.withContext(function($ctx2) {
self["@poolSize"]=_st(self["@poolSize"]).__minus((1));
self["@poolSize"];
block=_st(self["@queue"])._nextIfAbsent_((function(){
return sentinel;
}));
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
}, function($ctx1) {$ctx1.fill(self,"makeWorker",{sentinel:sentinel},globals.ForkPool)})},
args: [],
source: "makeWorker\x0a\x09| sentinel |\x0a\x09sentinel := Object new.\x0a\x09^ [ | block |\x0a\x09\x09poolSize := poolSize - 1.\x0a\x09\x09block := queue nextIfAbsent: [ sentinel ].\x0a\x09\x09block == sentinel ifFalse: [\x0a\x09\x09\x09[ block value ] ensure: [ self addWorker ] ]]",
messageSends: ["new", "-", "nextIfAbsent:", "ifFalse:", "==", "ensure:", "value", "addWorker"],
referencedClasses: ["Object"]
}),
globals.ForkPool);

smalltalk.addMethod(
smalltalk.method({
selector: "maxPoolSize",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@maxPoolSize"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._defaultMaxPoolSize();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"maxPoolSize",{},globals.ForkPool)})},
args: [],
source: "maxPoolSize\x0a\x09^ maxPoolSize ifNil: [ self defaultMaxPoolSize ]",
messageSends: ["ifNil:", "defaultMaxPoolSize"],
referencedClasses: []
}),
globals.ForkPool);

smalltalk.addMethod(
smalltalk.method({
selector: "maxPoolSize:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@maxPoolSize"]=anInteger;
return self},
args: ["anInteger"],
source: "maxPoolSize: anInteger\x0a\x09maxPoolSize := anInteger",
messageSends: [],
referencedClasses: []
}),
globals.ForkPool);


globals.ForkPool.klass.iVarNames = ['default'];
smalltalk.addMethod(
smalltalk.method({
selector: "default",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@default"];
if(($receiver = $2) == null || $receiver.isNil){
self["@default"]=self._new();
$1=self["@default"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"default",{},globals.ForkPool.klass)})},
args: [],
source: "default\x0a\x09^ default ifNil: [ default := self new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
globals.ForkPool.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultMaxPoolSize",
protocol: 'accessing',
fn: function (){
var self=this;
return (100);
},
args: [],
source: "defaultMaxPoolSize\x0a\x09^ 100",
messageSends: [],
referencedClasses: []
}),
globals.ForkPool.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "resetDefault",
protocol: 'accessing',
fn: function (){
var self=this;
self["@default"]=nil;
return self},
args: [],
source: "resetDefault\x0a\x09default := nil",
messageSends: [],
referencedClasses: []
}),
globals.ForkPool.klass);


smalltalk.addClass('Message', globals.Object, ['selector', 'arguments'], 'Kernel-Methods');
globals.Message.comment="In general, the system does not use instances of me for efficiency reasons.\x0aHowever, when a message is not understood by its receiver, the interpreter will make up an instance of it in order to capture the information involved in an actual message transmission.\x0aThis instance is sent it as an argument with the message `#doesNotUnderstand:` to the receiver.\x0a\x0aSee boot.js, `messageNotUnderstood` and its counterpart `Object >> #doesNotUnderstand:`\x0a\x0a## API\x0a\x0aBesides accessing methods, `#sendTo:` provides a convenient way to send a message to an object.";
smalltalk.addMethod(
smalltalk.method({
selector: "arguments",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@arguments"];
return $1;
},
args: [],
source: "arguments\x0a\x09^ arguments",
messageSends: [],
referencedClasses: []
}),
globals.Message);

smalltalk.addMethod(
smalltalk.method({
selector: "arguments:",
protocol: 'accessing',
fn: function (anArray){
var self=this;
self["@arguments"]=anArray;
return self},
args: ["anArray"],
source: "arguments: anArray\x0a\x09arguments := anArray",
messageSends: [],
referencedClasses: []
}),
globals.Message);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
($ctx1.supercall = true, globals.Message.superclass.fn.prototype._printOn_.apply(_st(self), [aStream]));
$ctx1.supercall = false;
_st(aStream)._nextPutAll_("(");
$ctx1.sendIdx["nextPutAll:"]=1;
_st(aStream)._nextPutAll_(self._selector());
$ctx1.sendIdx["nextPutAll:"]=2;
$1=_st(aStream)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},globals.Message)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09aStream\x0a\x09\x09nextPutAll: '(';\x0a\x09\x09nextPutAll: self selector;\x0a\x09\x09nextPutAll: ')'",
messageSends: ["printOn:", "nextPutAll:", "selector"],
referencedClasses: []
}),
globals.Message);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selector"];
return $1;
},
args: [],
source: "selector\x0a\x09^ selector",
messageSends: [],
referencedClasses: []
}),
globals.Message);

smalltalk.addMethod(
smalltalk.method({
selector: "selector:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@selector"]=aString;
return self},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
messageSends: [],
referencedClasses: []
}),
globals.Message);

smalltalk.addMethod(
smalltalk.method({
selector: "sendTo:",
protocol: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._perform_withArguments_(self._selector(),self._arguments());
return $1;
}, function($ctx1) {$ctx1.fill(self,"sendTo:",{anObject:anObject},globals.Message)})},
args: ["anObject"],
source: "sendTo: anObject\x0a\x09^ anObject perform: self selector withArguments: self arguments",
messageSends: ["perform:withArguments:", "selector", "arguments"],
referencedClasses: []
}),
globals.Message);


smalltalk.addMethod(
smalltalk.method({
selector: "selector:arguments:",
protocol: 'instance creation',
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
}, function($ctx1) {$ctx1.fill(self,"selector:arguments:",{aString:aString,anArray:anArray},globals.Message.klass)})},
args: ["aString", "anArray"],
source: "selector: aString arguments: anArray\x0a\x09^ self new\x0a\x09\x09selector: aString;\x0a\x09\x09arguments: anArray;\x0a\x09\x09yourself",
messageSends: ["selector:", "new", "arguments:", "yourself"],
referencedClasses: []
}),
globals.Message.klass);


smalltalk.addClass('MessageSend', globals.Object, ['receiver', 'message'], 'Kernel-Methods');
globals.MessageSend.comment="I encapsulate message sends to objects. Arguments can be either predefined or supplied when the message send is performed. \x0a\x0a## API\x0a\x0aUse `#value` to perform a message send with its predefined arguments and `#value:*` if additonal arguments have to supplied.";
smalltalk.addMethod(
smalltalk.method({
selector: "arguments",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@message"])._arguments();
return $1;
}, function($ctx1) {$ctx1.fill(self,"arguments",{},globals.MessageSend)})},
args: [],
source: "arguments\x0a\x09^ message arguments",
messageSends: ["arguments"],
referencedClasses: []
}),
globals.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "arguments:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@message"])._arguments_(aCollection);
return self}, function($ctx1) {$ctx1.fill(self,"arguments:",{aCollection:aCollection},globals.MessageSend)})},
args: ["aCollection"],
source: "arguments: aCollection\x0a\x09message arguments: aCollection",
messageSends: ["arguments:"],
referencedClasses: []
}),
globals.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $Message(){return globals.Message||(typeof Message=="undefined"?nil:Message)}
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.MessageSend.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@message"]=_st($Message())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.MessageSend)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09message := Message new",
messageSends: ["initialize", "new"],
referencedClasses: ["Message"]
}),
globals.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
($ctx1.supercall = true, globals.MessageSend.superclass.fn.prototype._printOn_.apply(_st(self), [aStream]));
$ctx1.supercall = false;
_st(aStream)._nextPutAll_("(");
$ctx1.sendIdx["nextPutAll:"]=1;
_st(aStream)._nextPutAll_(self._receiver());
$ctx1.sendIdx["nextPutAll:"]=2;
_st(aStream)._nextPutAll_(" >> ");
$ctx1.sendIdx["nextPutAll:"]=3;
_st(aStream)._nextPutAll_(self._selector());
$ctx1.sendIdx["nextPutAll:"]=4;
$1=_st(aStream)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},globals.MessageSend)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09aStream\x0a\x09\x09nextPutAll: '(';\x0a\x09\x09nextPutAll: self receiver;\x0a\x09\x09nextPutAll: ' >> ';\x0a\x09\x09nextPutAll: self selector;\x0a\x09\x09nextPutAll: ')'",
messageSends: ["printOn:", "nextPutAll:", "receiver", "selector"],
referencedClasses: []
}),
globals.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@receiver"];
return $1;
},
args: [],
source: "receiver\x0a\x09^ receiver",
messageSends: [],
referencedClasses: []
}),
globals.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@receiver"]=anObject;
return self},
args: ["anObject"],
source: "receiver: anObject\x0a\x09receiver := anObject",
messageSends: [],
referencedClasses: []
}),
globals.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@message"])._selector();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},globals.MessageSend)})},
args: [],
source: "selector\x0a\x09^ message selector",
messageSends: ["selector"],
referencedClasses: []
}),
globals.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "selector:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@message"])._selector_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aString:aString},globals.MessageSend)})},
args: ["aString"],
source: "selector: aString\x0a\x09message selector: aString",
messageSends: ["selector:"],
referencedClasses: []
}),
globals.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
protocol: 'evaluating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@message"])._sendTo_(self._receiver());
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},globals.MessageSend)})},
args: [],
source: "value\x0a\x09^ message sendTo: self receiver",
messageSends: ["sendTo:", "receiver"],
referencedClasses: []
}),
globals.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
protocol: 'evaluating',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self["@message"];
_st($2)._arguments_([anObject]);
$3=_st($2)._sendTo_(self._receiver());
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"value:",{anObject:anObject},globals.MessageSend)})},
args: ["anObject"],
source: "value: anObject\x0a\x09^ message \x0a\x09\x09arguments: { anObject };\x0a\x09\x09sendTo: self receiver",
messageSends: ["arguments:", "sendTo:", "receiver"],
referencedClasses: []
}),
globals.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "value:value:",
protocol: 'evaluating',
fn: function (firstArgument,secondArgument){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self["@message"];
_st($2)._arguments_([firstArgument,secondArgument]);
$3=_st($2)._sendTo_(self._receiver());
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"value:value:",{firstArgument:firstArgument,secondArgument:secondArgument},globals.MessageSend)})},
args: ["firstArgument", "secondArgument"],
source: "value: firstArgument value: secondArgument\x0a\x09^ message \x0a\x09\x09arguments: { firstArgument. secondArgument };\x0a\x09\x09sendTo: self receiver",
messageSends: ["arguments:", "sendTo:", "receiver"],
referencedClasses: []
}),
globals.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "value:value:value:",
protocol: 'evaluating',
fn: function (firstArgument,secondArgument,thirdArgument){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self["@message"];
_st($2)._arguments_([firstArgument,secondArgument,thirdArgument]);
$3=_st($2)._sendTo_(self._receiver());
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"value:value:value:",{firstArgument:firstArgument,secondArgument:secondArgument,thirdArgument:thirdArgument},globals.MessageSend)})},
args: ["firstArgument", "secondArgument", "thirdArgument"],
source: "value: firstArgument value: secondArgument value: thirdArgument\x0a\x09^ message \x0a\x09\x09arguments: { firstArgument. secondArgument. thirdArgument };\x0a\x09\x09sendTo: self receiver",
messageSends: ["arguments:", "sendTo:", "receiver"],
referencedClasses: []
}),
globals.MessageSend);

smalltalk.addMethod(
smalltalk.method({
selector: "valueWithPossibleArguments:",
protocol: 'evaluating',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._arguments_(aCollection);
$1=self._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"valueWithPossibleArguments:",{aCollection:aCollection},globals.MessageSend)})},
args: ["aCollection"],
source: "valueWithPossibleArguments: aCollection\x0a\x09self arguments: aCollection.\x0a\x09^ self value",
messageSends: ["arguments:", "value"],
referencedClasses: []
}),
globals.MessageSend);



smalltalk.addClass('MethodContext', globals.Object, [], 'Kernel-Methods');
globals.MethodContext.comment="I hold all the dynamic state associated with the execution of either a method activation resulting from a message send. I am used to build the call stack while debugging.\x0a\x0aMy instances are JavaScript `SmalltalkMethodContext` objects defined in `boot.js`.";
smalltalk.addMethod(
smalltalk.method({
selector: "asString",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$5,$7,$6,$4,$11,$10,$9,$8,$12,$16,$15,$14,$13,$1;
$2=self._isBlockContext();
if(smalltalk.assert($2)){
$3="a block (in ".__comma(_st(self._methodContext())._asString());
$ctx1.sendIdx[","]=2;
$1=_st($3).__comma(")");
$ctx1.sendIdx[","]=1;
} else {
var methodClass;
methodClass=_st(self._method())._methodClass();
methodClass;
$5=methodClass;
$7=self._receiver();
$ctx1.sendIdx["receiver"]=1;
$6=_st($7)._class();
$ctx1.sendIdx["class"]=1;
$4=_st($5).__eq($6);
if(smalltalk.assert($4)){
$11=self._receiver();
$ctx1.sendIdx["receiver"]=2;
$10=_st($11)._class();
$ctx1.sendIdx["class"]=2;
$9=_st($10)._name();
$ctx1.sendIdx["name"]=1;
$8=_st($9).__comma(" >> ");
$ctx1.sendIdx[","]=4;
$12=self._selector();
$ctx1.sendIdx["selector"]=1;
$1=_st($8).__comma($12);
$ctx1.sendIdx[","]=3;
} else {
$16=_st(_st(self._receiver())._class())._name();
$ctx1.sendIdx["name"]=2;
$15=_st($16).__comma("(");
$14=_st($15).__comma(_st(methodClass)._name());
$ctx1.sendIdx[","]=7;
$13=_st($14).__comma(") >> ");
$ctx1.sendIdx[","]=6;
$1=_st($13).__comma(self._selector());
$ctx1.sendIdx[","]=5;
};
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{},globals.MethodContext)})},
args: [],
source: "asString\x0a\x09^ self isBlockContext\x0a\x09\x09ifTrue: [ 'a block (in ', self methodContext asString, ')' ]\x0a\x09\x09ifFalse: [ \x0a\x09\x09\x09| methodClass |\x0a\x09\x09\x09methodClass := self method methodClass.\x0a\x09\x09\x09methodClass = self receiver class \x0a\x09\x09\x09\x09ifTrue: [ self receiver class name, ' >> ', self selector ]\x0a\x09\x09\x09\x09ifFalse: [ self receiver class name, '(', methodClass name, ') >> ', self selector ] ]",
messageSends: ["ifTrue:ifFalse:", "isBlockContext", ",", "asString", "methodContext", "methodClass", "method", "=", "class", "receiver", "name", "selector"],
referencedClasses: []
}),
globals.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "basicReceiver",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.receiver;
return self}, function($ctx1) {$ctx1.fill(self,"basicReceiver",{},globals.MethodContext)})},
args: [],
source: "basicReceiver\x0a\x09<return self.receiver>",
messageSends: [],
referencedClasses: []
}),
globals.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluatedSelector",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.evaluatedSelector;
return self}, function($ctx1) {$ctx1.fill(self,"evaluatedSelector",{},globals.MethodContext)})},
args: [],
source: "evaluatedSelector\x0a\x09<return self.evaluatedSelector>",
messageSends: [],
referencedClasses: []
}),
globals.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "findContextSuchThat:",
protocol: 'accessing',
fn: function (testBlock){
var self=this;
var context;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
context=self;
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(context)._isNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(testBlock)._value_(context);
if(smalltalk.assert($1)){
$2=context;
throw $early=[$2];
};
context=_st(context)._outerContext();
return context;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return nil;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"findContextSuchThat:",{testBlock:testBlock,context:context},globals.MethodContext)})},
args: ["testBlock"],
source: "findContextSuchThat: testBlock\x0a\x09\x22Search self and my sender chain for first one that satisfies `testBlock`.  \x0a\x09Answer `nil` if none satisfy\x22\x0a\x0a\x09| context |\x0a\x09\x0a\x09context := self.\x0a\x09[ context isNil] whileFalse: [\x0a\x09\x09(testBlock value: context) \x0a\x09\x09\x09ifTrue: [ ^ context ].\x0a\x09\x09context := context outerContext ].\x0a\x0a\x09^ nil",
messageSends: ["whileFalse:", "isNil", "ifTrue:", "value:", "outerContext"],
referencedClasses: []
}),
globals.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "home",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.homeContext;
return self}, function($ctx1) {$ctx1.fill(self,"home",{},globals.MethodContext)})},
args: [],
source: "home\x0a\x09<return self.homeContext>",
messageSends: [],
referencedClasses: []
}),
globals.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "index",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.index || 0;
return self}, function($ctx1) {$ctx1.fill(self,"index",{},globals.MethodContext)})},
args: [],
source: "index\x0a\x09<return self.index || 0>",
messageSends: [],
referencedClasses: []
}),
globals.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "isBlockContext",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._selector())._isNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isBlockContext",{},globals.MethodContext)})},
args: [],
source: "isBlockContext\x0a\x09\x22Block context do not have selectors.\x22\x0a\x09\x0a\x09^ self selector isNil",
messageSends: ["isNil", "selector"],
referencedClasses: []
}),
globals.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "locals",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.locals || {};
return self}, function($ctx1) {$ctx1.fill(self,"locals",{},globals.MethodContext)})},
args: [],
source: "locals\x0a\x09<return self.locals || {}>",
messageSends: [],
referencedClasses: []
}),
globals.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "method",
protocol: 'accessing',
fn: function (){
var self=this;
var method,lookupClass,receiverClass,supercall;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$6,$5,$7,$9,$8,$receiver;
$1=self._methodContext();
$ctx1.sendIdx["methodContext"]=1;
if(($receiver = $1) == null || $receiver.isNil){
return nil;
} else {
$1;
};
$3=self._methodContext();
$ctx1.sendIdx["methodContext"]=2;
$2=_st($3)._receiver();
receiverClass=_st($2)._class();
$4=receiverClass;
$6=self._methodContext();
$ctx1.sendIdx["methodContext"]=3;
$5=_st($6)._selector();
$ctx1.sendIdx["selector"]=1;
method=_st($4)._lookupSelector_($5);
$ctx1.sendIdx["lookupSelector:"]=1;
$7=self._outerContext();
if(($receiver = $7) == null || $receiver.isNil){
supercall=false;
} else {
var outer;
outer=$receiver;
supercall=_st(outer)._supercall();
};
$9=supercall;
if(smalltalk.assert($9)){
$8=_st(_st(_st(method)._methodClass())._superclass())._lookupSelector_(_st(self._methodContext())._selector());
} else {
$8=method;
};
return $8;
}, function($ctx1) {$ctx1.fill(self,"method",{method:method,lookupClass:lookupClass,receiverClass:receiverClass,supercall:supercall},globals.MethodContext)})},
args: [],
source: "method\x0a\x09| method lookupClass receiverClass supercall |\x0a\x09\x0a\x09self methodContext ifNil: [ ^ nil ].\x0a\x0a\x09receiverClass := self methodContext receiver class.\x0a\x09method := receiverClass lookupSelector: self methodContext selector.\x0a\x09supercall := self outerContext \x0a\x09\x09ifNil: [ false ]\x0a\x09\x09ifNotNil: [ :outer | outer supercall ].\x0a\x0a\x09^ supercall\x0a\x09\x09ifFalse: [ method ]\x0a\x09\x09ifTrue: [ method methodClass superclass lookupSelector: self methodContext selector ]",
messageSends: ["ifNil:", "methodContext", "class", "receiver", "lookupSelector:", "selector", "ifNil:ifNotNil:", "outerContext", "supercall", "ifFalse:ifTrue:", "superclass", "methodClass"],
referencedClasses: []
}),
globals.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "methodContext",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$receiver;
$1=self._isBlockContext();
if(! smalltalk.assert($1)){
return self;
};
$3=self._outerContext();
if(($receiver = $3) == null || $receiver.isNil){
$2=$3;
} else {
var outer;
outer=$receiver;
$2=_st(outer)._methodContext();
};
return $2;
}, function($ctx1) {$ctx1.fill(self,"methodContext",{},globals.MethodContext)})},
args: [],
source: "methodContext\x0a\x09self isBlockContext ifFalse: [ ^ self ].\x0a\x09\x0a\x09^ self outerContext ifNotNil: [ :outer |\x0a\x09\x09outer methodContext ]",
messageSends: ["ifFalse:", "isBlockContext", "ifNotNil:", "outerContext", "methodContext"],
referencedClasses: []
}),
globals.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "outerContext",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.outerContext || self.homeContext;
return self}, function($ctx1) {$ctx1.fill(self,"outerContext",{},globals.MethodContext)})},
args: [],
source: "outerContext\x0a\x09<return self.outerContext || self.homeContext>",
messageSends: [],
referencedClasses: []
}),
globals.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
($ctx1.supercall = true, globals.MethodContext.superclass.fn.prototype._printOn_.apply(_st(self), [aStream]));
$ctx1.supercall = false;
_st(aStream)._nextPutAll_("(");
$ctx1.sendIdx["nextPutAll:"]=1;
_st(aStream)._nextPutAll_(self._asString());
$ctx1.sendIdx["nextPutAll:"]=2;
$1=_st(aStream)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},globals.MethodContext)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09aStream \x0a\x09\x09nextPutAll: '(';\x0a\x09\x09nextPutAll: self asString;\x0a\x09\x09nextPutAll: ')'",
messageSends: ["printOn:", "nextPutAll:", "asString"],
referencedClasses: []
}),
globals.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$2=_st(self._isBlockContext())._and_((function(){
return smalltalk.withContext(function($ctx2) {
$3=self._outerContext();
$ctx2.sendIdx["outerContext"]=1;
return _st($3)._notNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
if(smalltalk.assert($2)){
$1=_st(self._outerContext())._receiver();
} else {
$1=self._basicReceiver();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},globals.MethodContext)})},
args: [],
source: "receiver\x0a\x09^ (self isBlockContext and: [ self outerContext notNil ])\x0a\x09\x09ifTrue: [ self outerContext receiver ]\x0a\x09\x09ifFalse: [ self basicReceiver ]",
messageSends: ["ifTrue:ifFalse:", "and:", "isBlockContext", "notNil", "outerContext", "receiver", "basicReceiver"],
referencedClasses: []
}),
globals.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		if(self.selector) {
			return smalltalk.convertSelector(self.selector);
		} else {
			return nil;
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"selector",{},globals.MethodContext)})},
args: [],
source: "selector\x0a\x09<\x0a\x09\x09if(self.selector) {\x0a\x09\x09\x09return smalltalk.convertSelector(self.selector);\x0a\x09\x09} else {\x0a\x09\x09\x09return nil;\x0a\x09\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "sendIndexAt:",
protocol: 'accessing',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.sendIdx[aSelector] || 0;
return self}, function($ctx1) {$ctx1.fill(self,"sendIndexAt:",{aSelector:aSelector},globals.MethodContext)})},
args: ["aSelector"],
source: "sendIndexAt: aSelector\x0a\x09<return self.sendIdx[aSelector] || 0>",
messageSends: [],
referencedClasses: []
}),
globals.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "sendIndexes",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.sendIdx;
return self}, function($ctx1) {$ctx1.fill(self,"sendIndexes",{},globals.MethodContext)})},
args: [],
source: "sendIndexes\x0a\x09<return self.sendIdx>",
messageSends: [],
referencedClasses: []
}),
globals.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "supercall",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.supercall == true;
return self}, function($ctx1) {$ctx1.fill(self,"supercall",{},globals.MethodContext)})},
args: [],
source: "supercall\x0a\x09<return self.supercall == true>",
messageSends: [],
referencedClasses: []
}),
globals.MethodContext);

smalltalk.addMethod(
smalltalk.method({
selector: "temps",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._deprecatedAPI();
$1=self._locals();
return $1;
}, function($ctx1) {$ctx1.fill(self,"temps",{},globals.MethodContext)})},
args: [],
source: "temps\x0a\x09self deprecatedAPI.\x0a\x09\x0a\x09^ self locals",
messageSends: ["deprecatedAPI", "locals"],
referencedClasses: []
}),
globals.MethodContext);



smalltalk.addClass('NativeFunction', globals.Object, [], 'Kernel-Methods');
globals.NativeFunction.comment="I am a wrapper around native functions, such as `WebSocket`.\x0aFor 'normal' functions (whose constructor is the JavaScript `Function` object), use `BlockClosure`.\x0a\x0a## API\x0a\x0aSee the class-side `instance creation` methods for instance creation.\x0a\x0aCreated instances will most probably be instance of `JSObjectProxy`.\x0a\x0a## Usage example:\x0a\x0a\x09| ws |\x0a\x09ws := NativeFunction constructor: 'WebSocket' value: 'ws://localhost'.\x0a\x09ws at: 'onopen' put: [ ws send: 'hey there from Amber' ]";

smalltalk.addMethod(
smalltalk.method({
selector: "constructor:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var nativeFunc=eval(aString);
		return new nativeFunc();
	;
return self}, function($ctx1) {$ctx1.fill(self,"constructor:",{aString:aString},globals.NativeFunction.klass)})},
args: ["aString"],
source: "constructor: aString\x0a\x09<\x0a\x09\x09var nativeFunc=eval(aString);\x0a\x09\x09return new nativeFunc();\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.NativeFunction.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "constructor:value:",
protocol: 'instance creation',
fn: function (aString,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var nativeFunc=eval(aString);
		return new nativeFunc(anObject);
	;
return self}, function($ctx1) {$ctx1.fill(self,"constructor:value:",{aString:aString,anObject:anObject},globals.NativeFunction.klass)})},
args: ["aString", "anObject"],
source: "constructor: aString value:anObject\x0a\x09<\x0a\x09\x09var nativeFunc=eval(aString);\x0a\x09\x09return new nativeFunc(anObject);\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.NativeFunction.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "constructor:value:value:",
protocol: 'instance creation',
fn: function (aString,anObject,anObject2){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var nativeFunc=eval(aString);
		return new nativeFunc(anObject,anObject2);
	;
return self}, function($ctx1) {$ctx1.fill(self,"constructor:value:value:",{aString:aString,anObject:anObject,anObject2:anObject2},globals.NativeFunction.klass)})},
args: ["aString", "anObject", "anObject2"],
source: "constructor: aString value:anObject value: anObject2\x0a\x09<\x0a\x09\x09var nativeFunc=eval(aString);\x0a\x09\x09return new nativeFunc(anObject,anObject2);\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.NativeFunction.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "constructor:value:value:value:",
protocol: 'instance creation',
fn: function (aString,anObject,anObject2,anObject3){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var nativeFunc=eval(aString);
		return new nativeFunc(anObject,anObject2, anObject3);
	;
return self}, function($ctx1) {$ctx1.fill(self,"constructor:value:value:value:",{aString:aString,anObject:anObject,anObject2:anObject2,anObject3:anObject3},globals.NativeFunction.klass)})},
args: ["aString", "anObject", "anObject2", "anObject3"],
source: "constructor: aString value:anObject value: anObject2 value:anObject3\x0a\x09<\x0a\x09\x09var nativeFunc=eval(aString);\x0a\x09\x09return new nativeFunc(anObject,anObject2, anObject3);\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.NativeFunction.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "exists:",
protocol: 'testing',
fn: function (aString){
var self=this;
function $PlatformInterface(){return globals.PlatformInterface||(typeof PlatformInterface=="undefined"?nil:PlatformInterface)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($PlatformInterface())._existsGlobal_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"exists:",{aString:aString},globals.NativeFunction.klass)})},
args: ["aString"],
source: "exists: aString\x0a\x09^ PlatformInterface existsGlobal: aString",
messageSends: ["existsGlobal:"],
referencedClasses: ["PlatformInterface"]
}),
globals.NativeFunction.klass);


smalltalk.addClass('Timeout', globals.Object, ['rawTimeout'], 'Kernel-Methods');
globals.Timeout.comment="I am wrapping the returns from `set{Timeout,Interval}`.\x0a\x0a## Motivation\x0a\x0aNumber suffices in browsers, but node.js returns an object.";
smalltalk.addMethod(
smalltalk.method({
selector: "clearInterval",
protocol: 'timeout/interval',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var interval = self["@rawTimeout"];
		clearInterval(interval);
	;
return self}, function($ctx1) {$ctx1.fill(self,"clearInterval",{},globals.Timeout)})},
args: [],
source: "clearInterval\x0a\x09<\x0a\x09\x09var interval = self[\x22@rawTimeout\x22];\x0a\x09\x09clearInterval(interval);\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.Timeout);

smalltalk.addMethod(
smalltalk.method({
selector: "clearTimeout",
protocol: 'timeout/interval',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var timeout = self["@rawTimeout"];
		clearTimeout(timeout);
	;
return self}, function($ctx1) {$ctx1.fill(self,"clearTimeout",{},globals.Timeout)})},
args: [],
source: "clearTimeout\x0a\x09<\x0a\x09\x09var timeout = self[\x22@rawTimeout\x22];\x0a\x09\x09clearTimeout(timeout);\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.Timeout);

smalltalk.addMethod(
smalltalk.method({
selector: "rawTimeout:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@rawTimeout"]=anObject;
return self},
args: ["anObject"],
source: "rawTimeout: anObject\x0a\x09rawTimeout := anObject",
messageSends: [],
referencedClasses: []
}),
globals.Timeout);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'instance creation',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._rawTimeout_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anObject:anObject},globals.Timeout.klass)})},
args: ["anObject"],
source: "on: anObject\x0a\x09^ self new rawTimeout: anObject; yourself",
messageSends: ["rawTimeout:", "new", "yourself"],
referencedClasses: []
}),
globals.Timeout.klass);

});
