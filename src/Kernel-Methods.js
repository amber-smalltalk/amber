define("amber_core/Kernel-Methods", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Kernel-Methods');
$core.packages["Kernel-Methods"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass('BlockClosure', $globals.Object, [], 'Kernel-Methods');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.BlockClosure.comment="I represent a lexical closure.\x0aI am is directly mapped to JavaScript Function.\x0a\x0a## API\x0a\x0a1. Evaluation\x0a\x0a    My instances get evaluated with the `#value*` methods in the 'evaluating' protocol.\x0a\x0a    Example: ` [ :x | x + 1 ] value: 3 \x22Answers 4\x22 `\x0a\x0a2. Control structures\x0a\x0a    Blocks are used (together with `Boolean`) for control structures (methods in the `controlling` protocol).\x0a\x0a    Example: `aBlock whileTrue: [ ... ]`\x0a\x0a3. Error handling\x0a\x0a    I provide the `#on:do:` method for handling exceptions.\x0a\x0a    Example: ` aBlock on: MessageNotUnderstood do: [ :ex | ... ] `";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "applyTo:arguments:",
protocol: 'evaluating',
fn: function (anObject,aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.apply(anObject, aCollection);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"applyTo:arguments:",{anObject:anObject,aCollection:aCollection},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aCollection"],
source: "applyTo: anObject arguments: aCollection\x0a\x09<return self.apply(anObject, aCollection)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "asCompiledMethod:",
protocol: 'converting',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return $core.method({selector:aString, fn:self});;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asCompiledMethod:",{aString:aString},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "asCompiledMethod: aString\x0a\x09<return $core.method({selector:aString, fn:self});>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "compiledSource",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.toString();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compiledSource",{},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "compiledSource\x0a\x09<return self.toString()>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "currySelf",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		return function () {
			var args = [ this ];
			args.push.apply(args, arguments);
			return self.apply(null, args);
		}
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"currySelf",{},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currySelf\x0a\x09\x22Transforms [ :selfarg :x :y | stcode ] block\x0a\x09which represents JS function (selfarg, x, y, ...) {jscode}\x0a\x09into function (x, y, ...) {jscode} that takes selfarg from 'this'.\x0a\x09IOW, it is usable as JS method and first arg takes the receiver.\x22\x0a\x09\x0a\x09<\x0a\x09\x09return function () {\x0a\x09\x09\x09var args = [ this ];\x0a\x09\x09\x09args.push.apply(args, arguments);\x0a\x09\x09\x09return self.apply(null, args);\x0a\x09\x09}\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "ensure:",
protocol: 'evaluating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
try{return self._value()}finally{aBlock._value()};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ensure:",{aBlock:aBlock},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "ensure: aBlock\x0a\x09<try{return self._value()}finally{aBlock._value()}>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "fork",
protocol: 'timeout/interval',
fn: function (){
var self=this;
function $ForkPool(){return $globals.ForkPool||(typeof ForkPool=="undefined"?nil:ForkPool)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv($ForkPool())._default())._fork_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fork",{},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fork\x0a\x09ForkPool default fork: self",
referencedClasses: ["ForkPool"],
//>>excludeEnd("ide");
messageSends: ["fork:", "default"]
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "new",
protocol: 'evaluating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return new self();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09\x22Use the receiver as a JS constructor.\x0a\x09*Do not* use this method to instanciate Smalltalk objects!\x22\x0a\x09<return new self()>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "newValue:",
protocol: 'evaluating',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._newWithValues_([anObject]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newValue:",{anObject:anObject},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "newValue: anObject\x0a\x09^ self newWithValues: { anObject }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newWithValues:"]
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "newValue:value:",
protocol: 'evaluating',
fn: function (anObject,anObject2){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._newWithValues_([anObject,anObject2]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newValue:value:",{anObject:anObject,anObject2:anObject2},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "anObject2"],
source: "newValue: anObject value: anObject2\x0a\x09^ self newWithValues: { anObject. anObject2 }.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newWithValues:"]
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "newValue:value:value:",
protocol: 'evaluating',
fn: function (anObject,anObject2,anObject3){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._newWithValues_([anObject,anObject2,anObject3]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newValue:value:value:",{anObject:anObject,anObject2:anObject2,anObject3:anObject3},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "anObject2", "anObject3"],
source: "newValue: anObject value: anObject2 value: anObject3\x0a\x09^ self newWithValues: { anObject. anObject2. anObject3 }.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newWithValues:"]
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "newWithValues:",
protocol: 'evaluating',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		var object = Object.create(self.prototype);
		var result = self.apply(object, aCollection);
		return typeof result === "object" ? result : object;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newWithValues:",{aCollection:aCollection},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "newWithValues: aCollection\x0a\x09\x22Simulates JS new operator by combination of Object.create and .apply\x22\x0a\x09<\x0a\x09\x09var object = Object.create(self.prototype);\x0a\x09\x09var result = self.apply(object, aCollection);\x0a\x09\x09return typeof result === \x22object\x22 ? result : object;\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "numArgs",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.length;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"numArgs",{},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "numArgs\x0a\x09<return self.length>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "on:do:",
protocol: 'error handling',
fn: function (anErrorClass,aBlock){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$1=self._tryCatch_((function(error){
var smalltalkError;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
smalltalkError=$recv($Smalltalk())._asSmalltalkException_(error);
smalltalkError;
$2=$recv(smalltalkError)._isKindOf_(anErrorClass);
if($core.assert($2)){
return $recv(aBlock)._value_(smalltalkError);
} else {
return $recv(smalltalkError)._resignal();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({error:error,smalltalkError:smalltalkError},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:do:",{anErrorClass:anErrorClass,aBlock:aBlock},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anErrorClass", "aBlock"],
source: "on: anErrorClass do: aBlock\x0a\x09\x22All exceptions thrown in the Smalltalk stack are cought.\x0a\x09Convert all JS exceptions to JavaScriptException instances.\x22\x0a\x09\x0a\x09^ self tryCatch: [ :error | | smalltalkError |\x0a\x09\x09smalltalkError := Smalltalk asSmalltalkException: error.\x0a\x09\x09(smalltalkError isKindOf: anErrorClass)\x0a\x09\x09ifTrue: [ aBlock value: smalltalkError ]\x0a\x09\x09ifFalse: [ smalltalkError resignal ] ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["tryCatch:", "asSmalltalkException:", "ifTrue:ifFalse:", "isKindOf:", "value:", "resignal"]
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "receiver",
protocol: 'accessing',
fn: function (){
var self=this;
return nil;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "receiver\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "timeToRun",
protocol: 'evaluating',
fn: function (){
var self=this;
function $Date(){return $globals.Date||(typeof Date=="undefined"?nil:Date)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Date())._millisecondsToRun_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"timeToRun",{},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "timeToRun\x0a\x09\x22Answer the number of milliseconds taken to execute this block.\x22\x0a\x0a\x09^ Date millisecondsToRun: self",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
messageSends: ["millisecondsToRun:"]
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "tryCatch:",
protocol: 'error handling',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		try {
			return self._value();
		} catch(error) {
			return aBlock._value_(error);
		}
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tryCatch:",{aBlock:aBlock},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "tryCatch: aBlock\x0a\x09<\x0a\x09\x09try {\x0a\x09\x09\x09return self._value();\x0a\x09\x09} catch(error) {\x0a\x09\x09\x09return aBlock._value_(error);\x0a\x09\x09}\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "value",
protocol: 'evaluating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self();;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value",{},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "value\x0a\x09<return self();>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "value:",
protocol: 'evaluating',
fn: function (anArg){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self(anArg);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:",{anArg:anArg},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArg"],
source: "value: anArg\x0a\x09<return self(anArg);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "value:value:",
protocol: 'evaluating',
fn: function (firstArg,secondArg){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self(firstArg, secondArg);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:value:",{firstArg:firstArg,secondArg:secondArg},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["firstArg", "secondArg"],
source: "value: firstArg value: secondArg\x0a\x09<return self(firstArg, secondArg);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "value:value:value:",
protocol: 'evaluating',
fn: function (firstArg,secondArg,thirdArg){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self(firstArg, secondArg, thirdArg);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:value:value:",{firstArg:firstArg,secondArg:secondArg,thirdArg:thirdArg},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["firstArg", "secondArg", "thirdArg"],
source: "value: firstArg value: secondArg value: thirdArg\x0a\x09<return self(firstArg, secondArg, thirdArg);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "valueWithInterval:",
protocol: 'timeout/interval',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		var interval = setInterval(self, aNumber);
		return $globals.Timeout._on_(interval);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"valueWithInterval:",{aNumber:aNumber},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "valueWithInterval: aNumber\x0a\x09<\x0a\x09\x09var interval = setInterval(self, aNumber);\x0a\x09\x09return $globals.Timeout._on_(interval);\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "valueWithPossibleArguments:",
protocol: 'evaluating',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.apply(null, aCollection);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"valueWithPossibleArguments:",{aCollection:aCollection},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "valueWithPossibleArguments: aCollection\x0a\x09<return self.apply(null, aCollection);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "valueWithTimeout:",
protocol: 'timeout/interval',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		var timeout = setTimeout(self, aNumber);
		return $globals.Timeout._on_(timeout);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"valueWithTimeout:",{aNumber:aNumber},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "valueWithTimeout: aNumber\x0a\x09<\x0a\x09\x09var timeout = setTimeout(self, aNumber);\x0a\x09\x09return $globals.Timeout._on_(timeout);\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "whileFalse",
protocol: 'controlling',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._whileFalse_((function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"whileFalse",{},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "whileFalse\x0a\x09self whileFalse: []",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["whileFalse:"]
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "whileFalse:",
protocol: 'controlling',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
while(!$core.assert(self._value())) {aBlock._value()};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"whileFalse:",{aBlock:aBlock},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "whileFalse: aBlock\x0a\x09<while(!$core.assert(self._value())) {aBlock._value()}>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "whileTrue",
protocol: 'controlling',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._whileTrue_((function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"whileTrue",{},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "whileTrue\x0a\x09self whileTrue: []",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["whileTrue:"]
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "whileTrue:",
protocol: 'controlling',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
while($core.assert(self._value())) {aBlock._value()};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"whileTrue:",{aBlock:aBlock},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "whileTrue: aBlock\x0a\x09<while($core.assert(self._value())) {aBlock._value()}>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockClosure);



$core.addClass('CompiledMethod', $globals.Object, [], 'Kernel-Methods');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CompiledMethod.comment="I represent a class method of the system. I hold the source and compiled code of a class method.\x0a\x0a## API\x0aMy instances can be accessed using `Behavior >> #methodAt:`\x0a\x0a    Object methodAt: 'asString'\x0a\x0aSource code access:\x0a\x0a\x09(String methodAt: 'lines') source\x0a\x0aReferenced classes:\x0a\x0a\x09(String methodAt: 'lines') referencedClasses\x0a\x0aMessages sent from an instance:\x0a\x09\x0a\x09(String methodAt: 'lines') messageSends";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "arguments",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.args || [];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arguments",{},$globals.CompiledMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "arguments\x0a\x09<return self.args || []>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "browse",
protocol: 'browsing',
fn: function (){
var self=this;
function $Finder(){return $globals.Finder||(typeof Finder=="undefined"?nil:Finder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($Finder())._findMethod_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"browse",{},$globals.CompiledMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "browse\x0a\x09Finder findMethod: self",
referencedClasses: ["Finder"],
//>>excludeEnd("ide");
messageSends: ["findMethod:"]
}),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "category",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._protocol();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"category",{},$globals.CompiledMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "category\x0a\x09^ self protocol",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["protocol"]
}),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "defaultProtocol",
protocol: 'defaults',
fn: function (){
var self=this;
return "as yet unclassified";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultProtocol\x0a\x09^ 'as yet unclassified'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "fn",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._basicAt_("fn");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fn",{},$globals.CompiledMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fn\x0a\x09^ self basicAt: 'fn'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:"]
}),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "fn:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._basicAt_put_("fn",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fn:",{aBlock:aBlock},$globals.CompiledMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "fn: aBlock\x0a\x09self basicAt: 'fn' put: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:put:"]
}),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "isCompiledMethod",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isCompiledMethod\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "isOverridden",
protocol: 'testing',
fn: function (){
var self=this;
var selector;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
selector=self._selector();
$recv(self._methodClass())._allSubclassesDo_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(each)._includesSelector_(selector);
if($core.assert($1)){
throw $early=[true];
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return false;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isOverridden",{selector:selector},$globals.CompiledMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isOverridden\x0a\x09| selector |\x0a    \x0a    selector := self selector.\x0a    self methodClass allSubclassesDo: [ :each |\x0a\x09    (each includesSelector: selector)\x0a        \x09ifTrue: [ ^ true ] ].\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selector", "allSubclassesDo:", "methodClass", "ifTrue:", "includesSelector:"]
}),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "isOverride",
protocol: 'testing',
fn: function (){
var self=this;
var superclass;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
$1=self._methodClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["methodClass"]=1;
//>>excludeEnd("ctx");
superclass=$recv($1)._superclass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["superclass"]=1;
//>>excludeEnd("ctx");
$2=superclass;
if(($receiver = $2) == null || $receiver.isNil){
return false;
} else {
$2;
};
$3=$recv($recv($recv(self._methodClass())._superclass())._lookupSelector_(self._selector()))._notNil();
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isOverride",{superclass:superclass},$globals.CompiledMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isOverride\x0a\x09| superclass |\x0a    \x0a    superclass := self methodClass superclass.\x0a\x09superclass ifNil: [ ^ false ].\x0a\x09\x0a    ^ (self methodClass superclass lookupSelector: self selector) notNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["superclass", "methodClass", "ifNil:", "notNil", "lookupSelector:", "selector"]
}),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "messageSends",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._basicAt_("messageSends");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageSends",{},$globals.CompiledMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "messageSends\x0a\x09^ self basicAt: 'messageSends'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:"]
}),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "methodClass",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._basicAt_("methodClass");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodClass",{},$globals.CompiledMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "methodClass\x0a\x09^ self basicAt: 'methodClass'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:"]
}),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "package",
protocol: 'accessing',
fn: function (){
var self=this;
function $Package(){return $globals.Package||(typeof Package=="undefined"?nil:Package)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$5,$receiver;
$1=self._methodClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["methodClass"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
return nil;
} else {
$1;
};
$3=self._protocol();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["protocol"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._beginsWith_("*");
if(!$core.assert($2)){
$4=$recv(self._methodClass())._package();
return $4;
};
$5=$recv($Package())._named_ifAbsent_($recv(self._protocol())._allButFirst(),(function(){
return nil;

}));
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"package",{},$globals.CompiledMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "package\x0a\x09\x22Answer the package the receiver belongs to:\x0a\x09- if it is an extension method, answer the corresponding package\x0a\x09- else answer the `methodClass` package\x22\x0a\x09\x0a\x09self methodClass ifNil: [ ^ nil ].\x0a\x09\x0a\x09(self protocol beginsWith: '*') ifFalse: [\x0a\x09\x09^ self methodClass package ].\x0a\x09\x09\x0a\x09^ Package \x0a\x09\x09named: self protocol allButFirst\x0a\x09\x09ifAbsent: [ nil ]",
referencedClasses: ["Package"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "methodClass", "ifFalse:", "beginsWith:", "protocol", "package", "named:ifAbsent:", "allButFirst"]
}),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "protocol",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self._basicAt_("protocol");
if(($receiver = $2) == null || $receiver.isNil){
$1=self._defaultProtocol();
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"protocol",{},$globals.CompiledMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "protocol\x0a\x09^ (self basicAt: 'protocol') ifNil: [ self defaultProtocol ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "basicAt:", "defaultProtocol"]
}),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "protocol:",
protocol: 'accessing',
fn: function (aString){
var self=this;
var oldProtocol;
function $SystemAnnouncer(){return $globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $MethodMoved(){return $globals.MethodMoved||(typeof MethodMoved=="undefined"?nil:MethodMoved)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
oldProtocol=self._protocol();
self._basicAt_put_("protocol",aString);
$1=$recv($MethodMoved())._new();
$recv($1)._method_(self);
$recv($1)._oldProtocol_(oldProtocol);
$2=$recv($1)._yourself();
$recv($recv($SystemAnnouncer())._current())._announce_($2);
$3=self._methodClass();
if(($receiver = $3) == null || $receiver.isNil){
$3;
} else {
var methodClass;
methodClass=$receiver;
$recv($recv(methodClass)._organization())._addElement_(aString);
$recv(methodClass)._removeProtocolIfEmpty_(oldProtocol);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"protocol:",{aString:aString,oldProtocol:oldProtocol},$globals.CompiledMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "protocol: aString\x0a\x09| oldProtocol |\x0a\x09oldProtocol := self protocol.\x0a\x09self basicAt: 'protocol' put: aString.\x0a\x0a\x09SystemAnnouncer current announce: (MethodMoved new\x0a\x09\x09method: self;\x0a\x09\x09oldProtocol: oldProtocol;\x0a\x09\x09yourself).\x0a\x0a\x09self methodClass ifNotNil: [ :methodClass |\x0a\x09\x09methodClass organization addElement: aString.\x0a\x09\x09methodClass removeProtocolIfEmpty: oldProtocol ]",
referencedClasses: ["SystemAnnouncer", "MethodMoved"],
//>>excludeEnd("ide");
messageSends: ["protocol", "basicAt:put:", "announce:", "current", "method:", "new", "oldProtocol:", "yourself", "ifNotNil:", "methodClass", "addElement:", "organization", "removeProtocolIfEmpty:"]
}),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "referencedClasses",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._basicAt_("referencedClasses");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"referencedClasses",{},$globals.CompiledMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "referencedClasses\x0a\x09^ self basicAt: 'referencedClasses'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:"]
}),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "selector",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._basicAt_("selector");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selector",{},$globals.CompiledMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selector\x0a\x09^ self basicAt: 'selector'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:"]
}),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "selector:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._basicAt_put_("selector",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selector:",{aString:aString},$globals.CompiledMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "selector: aString\x0a\x09self basicAt: 'selector' put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:put:"]
}),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "sendTo:arguments:",
protocol: 'evaluating',
fn: function (anObject,aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._fn())._applyTo_arguments_(anObject,aCollection);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendTo:arguments:",{anObject:anObject,aCollection:aCollection},$globals.CompiledMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aCollection"],
source: "sendTo: anObject arguments: aCollection\x0a\x09^ self fn applyTo: anObject arguments: aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["applyTo:arguments:", "fn"]
}),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "source",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self._basicAt_("source");
if(($receiver = $2) == null || $receiver.isNil){
$1="";
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"source",{},$globals.CompiledMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "source\x0a\x09^ (self basicAt: 'source') ifNil: [ '' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "basicAt:"]
}),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "source:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._basicAt_put_("source",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"source:",{aString:aString},$globals.CompiledMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "source: aString\x0a\x09self basicAt: 'source' put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:put:"]
}),
$globals.CompiledMethod);



$core.addClass('ForkPool', $globals.Object, ['poolSize', 'maxPoolSize', 'queue', 'worker'], 'Kernel-Methods');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ForkPool.comment="I am responsible for handling forked blocks.\x0aThe pool size sets the maximum concurrent forked blocks.\x0a\x0a## API\x0a\x0aThe default instance is accessed with `#default`.\x0aThe maximum concurrent forked blocks can be set with `#maxPoolSize:`.\x0a\x0aForking is done via `BlockClosure >> #fork`";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addWorker",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@worker"])._valueWithTimeout_((0));
self["@poolSize"]=$recv(self["@poolSize"]).__plus((1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addWorker",{},$globals.ForkPool)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addWorker\x0a\x09worker valueWithTimeout: 0.\x0a\x09poolSize := poolSize + 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["valueWithTimeout:", "+"]
}),
$globals.ForkPool);

$core.addMethod(
$core.method({
selector: "defaultMaxPoolSize",
protocol: 'defaults',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class())._defaultMaxPoolSize();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultMaxPoolSize",{},$globals.ForkPool)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultMaxPoolSize\x0a\x09^ self class defaultMaxPoolSize",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["defaultMaxPoolSize", "class"]
}),
$globals.ForkPool);

$core.addMethod(
$core.method({
selector: "fork:",
protocol: 'actions',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@poolSize"]).__lt(self._maxPoolSize());
if($core.assert($1)){
self._addWorker();
};
$recv(self["@queue"])._nextPut_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fork:",{aBlock:aBlock},$globals.ForkPool)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "fork: aBlock\x0a\x09poolSize < self maxPoolSize ifTrue: [ self addWorker ].\x0a\x09queue nextPut: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "<", "maxPoolSize", "addWorker", "nextPut:"]
}),
$globals.ForkPool);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $Queue(){return $globals.Queue||(typeof Queue=="undefined"?nil:Queue)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.ForkPool.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@poolSize"]=(0);
self["@queue"]=$recv($Queue())._new();
self["@worker"]=self._makeWorker();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ForkPool)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x0a\x09poolSize := 0.\x0a\x09queue := Queue new.\x0a\x09worker := self makeWorker",
referencedClasses: ["Queue"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new", "makeWorker"]
}),
$globals.ForkPool);

$core.addMethod(
$core.method({
selector: "makeWorker",
protocol: 'initialization',
fn: function (){
var self=this;
var sentinel;
function $Object(){return $globals.Object||(typeof Object=="undefined"?nil:Object)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
sentinel=$recv($Object())._new();
$1=(function(){
var block;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self["@poolSize"]=$recv(self["@poolSize"]).__minus((1));
self["@poolSize"];
block=$recv(self["@queue"])._nextIfAbsent_((function(){
return sentinel;

}));
block;
$2=$recv(block).__eq_eq(sentinel);
if(!$core.assert($2)){
return $recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(block)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}))._ensure_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._addWorker();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)});
//>>excludeEnd("ctx");
}));
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({block:block},$ctx1,1)});
//>>excludeEnd("ctx");
});
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"makeWorker",{sentinel:sentinel},$globals.ForkPool)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makeWorker\x0a\x09| sentinel |\x0a\x09sentinel := Object new.\x0a\x09^ [ | block |\x0a\x09\x09poolSize := poolSize - 1.\x0a\x09\x09block := queue nextIfAbsent: [ sentinel ].\x0a\x09\x09block == sentinel ifFalse: [\x0a\x09\x09\x09[ block value ] ensure: [ self addWorker ] ]]",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
messageSends: ["new", "-", "nextIfAbsent:", "ifFalse:", "==", "ensure:", "value", "addWorker"]
}),
$globals.ForkPool);

$core.addMethod(
$core.method({
selector: "maxPoolSize",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@maxPoolSize"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._defaultMaxPoolSize();
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"maxPoolSize",{},$globals.ForkPool)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "maxPoolSize\x0a\x09^ maxPoolSize ifNil: [ self defaultMaxPoolSize ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "defaultMaxPoolSize"]
}),
$globals.ForkPool);

$core.addMethod(
$core.method({
selector: "maxPoolSize:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@maxPoolSize"]=anInteger;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "maxPoolSize: anInteger\x0a\x09maxPoolSize := anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ForkPool);


$globals.ForkPool.klass.iVarNames = ['default'];
$core.addMethod(
$core.method({
selector: "default",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@default"];
if(($receiver = $2) == null || $receiver.isNil){
self["@default"]=self._new();
$1=self["@default"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"default",{},$globals.ForkPool.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "default\x0a\x09^ default ifNil: [ default := self new ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.ForkPool.klass);

$core.addMethod(
$core.method({
selector: "defaultMaxPoolSize",
protocol: 'accessing',
fn: function (){
var self=this;
return (100);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultMaxPoolSize\x0a\x09^ 100",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ForkPool.klass);

$core.addMethod(
$core.method({
selector: "resetDefault",
protocol: 'accessing',
fn: function (){
var self=this;
self["@default"]=nil;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resetDefault\x0a\x09default := nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ForkPool.klass);


$core.addClass('Message', $globals.Object, ['selector', 'arguments'], 'Kernel-Methods');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Message.comment="In general, the system does not use instances of me for efficiency reasons.\x0aHowever, when a message is not understood by its receiver, the interpreter will make up an instance of it in order to capture the information involved in an actual message transmission.\x0aThis instance is sent it as an argument with the message `#doesNotUnderstand:` to the receiver.\x0a\x0aSee boot.js, `messageNotUnderstood` and its counterpart `Object >> #doesNotUnderstand:`\x0a\x0a## API\x0a\x0aBesides accessing methods, `#sendTo:` provides a convenient way to send a message to an object.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "arguments",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@arguments"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "arguments\x0a\x09^ arguments",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Message);

$core.addMethod(
$core.method({
selector: "arguments:",
protocol: 'accessing',
fn: function (anArray){
var self=this;
self["@arguments"]=anArray;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "arguments: anArray\x0a\x09arguments := anArray",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Message);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Message.superclass.fn.prototype._printOn_.apply($recv(self), [aStream]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(aStream)._nextPutAll_("(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(self._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$1=$recv(aStream)._nextPutAll_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.Message)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09aStream\x0a\x09\x09nextPutAll: '(';\x0a\x09\x09nextPutAll: self selector;\x0a\x09\x09nextPutAll: ')'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printOn:", "nextPutAll:", "selector"]
}),
$globals.Message);

$core.addMethod(
$core.method({
selector: "selector",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selector"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selector\x0a\x09^ selector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Message);

$core.addMethod(
$core.method({
selector: "selector:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@selector"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Message);

$core.addMethod(
$core.method({
selector: "sendTo:",
protocol: 'actions',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(anObject)._perform_withArguments_(self._selector(),self._arguments());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendTo:",{anObject:anObject},$globals.Message)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "sendTo: anObject\x0a\x09^ anObject perform: self selector withArguments: self arguments",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["perform:withArguments:", "selector", "arguments"]
}),
$globals.Message);


$core.addMethod(
$core.method({
selector: "selector:arguments:",
protocol: 'instance creation',
fn: function (aString,anArray){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._selector_(aString);
$recv($2)._arguments_(anArray);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selector:arguments:",{aString:aString,anArray:anArray},$globals.Message.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anArray"],
source: "selector: aString arguments: anArray\x0a\x09^ self new\x0a\x09\x09selector: aString;\x0a\x09\x09arguments: anArray;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selector:", "new", "arguments:", "yourself"]
}),
$globals.Message.klass);


$core.addClass('MessageSend', $globals.Object, ['receiver', 'message'], 'Kernel-Methods');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.MessageSend.comment="I encapsulate message sends to objects. Arguments can be either predefined or supplied when the message send is performed. \x0a\x0a## API\x0a\x0aUse `#value` to perform a message send with its predefined arguments and `#value:*` if additonal arguments have to supplied.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "arguments",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@message"])._arguments();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arguments",{},$globals.MessageSend)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "arguments\x0a\x09^ message arguments",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["arguments"]
}),
$globals.MessageSend);

$core.addMethod(
$core.method({
selector: "arguments:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@message"])._arguments_(aCollection);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arguments:",{aCollection:aCollection},$globals.MessageSend)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "arguments: aCollection\x0a\x09message arguments: aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["arguments:"]
}),
$globals.MessageSend);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $Message(){return $globals.Message||(typeof Message=="undefined"?nil:Message)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.MessageSend.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@message"]=$recv($Message())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.MessageSend)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09message := Message new",
referencedClasses: ["Message"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.MessageSend);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.MessageSend.superclass.fn.prototype._printOn_.apply($recv(self), [aStream]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(aStream)._nextPutAll_("(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(self._receiver());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(" >> ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(self._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
$1=$recv(aStream)._nextPutAll_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.MessageSend)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09aStream\x0a\x09\x09nextPutAll: '(';\x0a\x09\x09nextPutAll: self receiver;\x0a\x09\x09nextPutAll: ' >> ';\x0a\x09\x09nextPutAll: self selector;\x0a\x09\x09nextPutAll: ')'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printOn:", "nextPutAll:", "receiver", "selector"]
}),
$globals.MessageSend);

$core.addMethod(
$core.method({
selector: "receiver",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@receiver"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "receiver\x0a\x09^ receiver",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MessageSend);

$core.addMethod(
$core.method({
selector: "receiver:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@receiver"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "receiver: anObject\x0a\x09receiver := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MessageSend);

$core.addMethod(
$core.method({
selector: "selector",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@message"])._selector();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selector",{},$globals.MessageSend)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selector\x0a\x09^ message selector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selector"]
}),
$globals.MessageSend);

$core.addMethod(
$core.method({
selector: "selector:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@message"])._selector_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selector:",{aString:aString},$globals.MessageSend)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "selector: aString\x0a\x09message selector: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selector:"]
}),
$globals.MessageSend);

$core.addMethod(
$core.method({
selector: "value",
protocol: 'evaluating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@message"])._sendTo_(self._receiver());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value",{},$globals.MessageSend)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "value\x0a\x09^ message sendTo: self receiver",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sendTo:", "receiver"]
}),
$globals.MessageSend);

$core.addMethod(
$core.method({
selector: "value:",
protocol: 'evaluating',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self["@message"];
$recv($2)._arguments_([anObject]);
$3=$recv($2)._sendTo_(self._receiver());
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:",{anObject:anObject},$globals.MessageSend)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "value: anObject\x0a\x09^ message \x0a\x09\x09arguments: { anObject };\x0a\x09\x09sendTo: self receiver",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["arguments:", "sendTo:", "receiver"]
}),
$globals.MessageSend);

$core.addMethod(
$core.method({
selector: "value:value:",
protocol: 'evaluating',
fn: function (firstArgument,secondArgument){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self["@message"];
$recv($2)._arguments_([firstArgument,secondArgument]);
$3=$recv($2)._sendTo_(self._receiver());
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:value:",{firstArgument:firstArgument,secondArgument:secondArgument},$globals.MessageSend)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["firstArgument", "secondArgument"],
source: "value: firstArgument value: secondArgument\x0a\x09^ message \x0a\x09\x09arguments: { firstArgument. secondArgument };\x0a\x09\x09sendTo: self receiver",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["arguments:", "sendTo:", "receiver"]
}),
$globals.MessageSend);

$core.addMethod(
$core.method({
selector: "value:value:value:",
protocol: 'evaluating',
fn: function (firstArgument,secondArgument,thirdArgument){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self["@message"];
$recv($2)._arguments_([firstArgument,secondArgument,thirdArgument]);
$3=$recv($2)._sendTo_(self._receiver());
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:value:value:",{firstArgument:firstArgument,secondArgument:secondArgument,thirdArgument:thirdArgument},$globals.MessageSend)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["firstArgument", "secondArgument", "thirdArgument"],
source: "value: firstArgument value: secondArgument value: thirdArgument\x0a\x09^ message \x0a\x09\x09arguments: { firstArgument. secondArgument. thirdArgument };\x0a\x09\x09sendTo: self receiver",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["arguments:", "sendTo:", "receiver"]
}),
$globals.MessageSend);

$core.addMethod(
$core.method({
selector: "valueWithPossibleArguments:",
protocol: 'evaluating',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._arguments_(aCollection);
$1=self._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"valueWithPossibleArguments:",{aCollection:aCollection},$globals.MessageSend)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "valueWithPossibleArguments: aCollection\x0a\x09self arguments: aCollection.\x0a\x09^ self value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["arguments:", "value"]
}),
$globals.MessageSend);



$core.addClass('MethodContext', $globals.Object, [], 'Kernel-Methods');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.MethodContext.comment="I hold all the dynamic state associated with the execution of either a method activation resulting from a message send. I am used to build the call stack while debugging.\x0a\x0aMy instances are JavaScript `SmalltalkMethodContext` objects defined in `boot.js`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "asString",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$5,$7,$6,$4,$11,$10,$9,$8,$12,$16,$15,$14,$13,$1;
$2=self._isBlockContext();
if($core.assert($2)){
$3="a block (in ".__comma($recv(self._methodContext())._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($3).__comma(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
} else {
var methodClass;
methodClass=$recv(self._method())._methodClass();
methodClass;
$5=methodClass;
$7=self._receiver();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["receiver"]=1;
//>>excludeEnd("ctx");
$6=$recv($7)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__eq($6);
if($core.assert($4)){
$11=self._receiver();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["receiver"]=2;
//>>excludeEnd("ctx");
$10=$recv($11)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=2;
//>>excludeEnd("ctx");
$9=$recv($10)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name"]=1;
//>>excludeEnd("ctx");
$8=$recv($9).__comma(" >> ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$12=self._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
$1=$recv($8).__comma($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
} else {
$16=$recv($recv(self._receiver())._class())._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name"]=2;
//>>excludeEnd("ctx");
$15=$recv($16).__comma("(");
$14=$recv($15).__comma($recv(methodClass)._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=7;
//>>excludeEnd("ctx");
$13=$recv($14).__comma(") >> ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=6;
//>>excludeEnd("ctx");
$1=$recv($13).__comma(self._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=5;
//>>excludeEnd("ctx");
};
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asString",{},$globals.MethodContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asString\x0a\x09^ self isBlockContext\x0a\x09\x09ifTrue: [ 'a block (in ', self methodContext asString, ')' ]\x0a\x09\x09ifFalse: [ \x0a\x09\x09\x09| methodClass |\x0a\x09\x09\x09methodClass := self method methodClass.\x0a\x09\x09\x09methodClass = self receiver class \x0a\x09\x09\x09\x09ifTrue: [ self receiver class name, ' >> ', self selector ]\x0a\x09\x09\x09\x09ifFalse: [ self receiver class name, '(', methodClass name, ') >> ', self selector ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isBlockContext", ",", "asString", "methodContext", "methodClass", "method", "=", "class", "receiver", "name", "selector"]
}),
$globals.MethodContext);

$core.addMethod(
$core.method({
selector: "basicReceiver",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.receiver;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicReceiver",{},$globals.MethodContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "basicReceiver\x0a\x09<return self.receiver>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodContext);

$core.addMethod(
$core.method({
selector: "evaluatedSelector",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.evaluatedSelector;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluatedSelector",{},$globals.MethodContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "evaluatedSelector\x0a\x09<return self.evaluatedSelector>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodContext);

$core.addMethod(
$core.method({
selector: "findContextSuchThat:",
protocol: 'accessing',
fn: function (testBlock){
var self=this;
var context;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
var $early={};
try {
context=self;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(context)._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(testBlock)._value_(context);
if($core.assert($1)){
$2=context;
throw $early=[$2];
};
context=$recv(context)._outerContext();
return context;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return nil;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"findContextSuchThat:",{testBlock:testBlock,context:context},$globals.MethodContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["testBlock"],
source: "findContextSuchThat: testBlock\x0a\x09\x22Search self and my sender chain for first one that satisfies `testBlock`.  \x0a\x09Answer `nil` if none satisfy\x22\x0a\x0a\x09| context |\x0a\x09\x0a\x09context := self.\x0a\x09[ context isNil] whileFalse: [\x0a\x09\x09(testBlock value: context) \x0a\x09\x09\x09ifTrue: [ ^ context ].\x0a\x09\x09context := context outerContext ].\x0a\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["whileFalse:", "isNil", "ifTrue:", "value:", "outerContext"]
}),
$globals.MethodContext);

$core.addMethod(
$core.method({
selector: "home",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.homeContext;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"home",{},$globals.MethodContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "home\x0a\x09<return self.homeContext>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodContext);

$core.addMethod(
$core.method({
selector: "index",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.index || 0;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"index",{},$globals.MethodContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "index\x0a\x09<return self.index || 0>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodContext);

$core.addMethod(
$core.method({
selector: "isBlockContext",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._selector())._isNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isBlockContext",{},$globals.MethodContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBlockContext\x0a\x09\x22Block context do not have selectors.\x22\x0a\x09\x0a\x09^ self selector isNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isNil", "selector"]
}),
$globals.MethodContext);

$core.addMethod(
$core.method({
selector: "locals",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.locals || {};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"locals",{},$globals.MethodContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "locals\x0a\x09<return self.locals || {}>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodContext);

$core.addMethod(
$core.method({
selector: "method",
protocol: 'accessing',
fn: function (){
var self=this;
var method,lookupClass,receiverClass,supercall;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$6,$5,$7,$9,$8,$receiver;
$1=self._methodContext();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["methodContext"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
return nil;
} else {
$1;
};
$3=self._methodContext();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["methodContext"]=2;
//>>excludeEnd("ctx");
$2=$recv($3)._receiver();
receiverClass=$recv($2)._class();
$4=receiverClass;
$6=self._methodContext();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["methodContext"]=3;
//>>excludeEnd("ctx");
$5=$recv($6)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
method=$recv($4)._lookupSelector_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lookupSelector:"]=1;
//>>excludeEnd("ctx");
$7=self._outerContext();
if(($receiver = $7) == null || $receiver.isNil){
supercall=false;
} else {
var outer;
outer=$receiver;
supercall=$recv(outer)._supercall();
};
$9=supercall;
if($core.assert($9)){
$8=$recv($recv($recv(method)._methodClass())._superclass())._lookupSelector_($recv(self._methodContext())._selector());
} else {
$8=method;
};
return $8;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"method",{method:method,lookupClass:lookupClass,receiverClass:receiverClass,supercall:supercall},$globals.MethodContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "method\x0a\x09| method lookupClass receiverClass supercall |\x0a\x09\x0a\x09self methodContext ifNil: [ ^ nil ].\x0a\x0a\x09receiverClass := self methodContext receiver class.\x0a\x09method := receiverClass lookupSelector: self methodContext selector.\x0a\x09supercall := self outerContext \x0a\x09\x09ifNil: [ false ]\x0a\x09\x09ifNotNil: [ :outer | outer supercall ].\x0a\x0a\x09^ supercall\x0a\x09\x09ifFalse: [ method ]\x0a\x09\x09ifTrue: [ method methodClass superclass lookupSelector: self methodContext selector ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "methodContext", "class", "receiver", "lookupSelector:", "selector", "ifNil:ifNotNil:", "outerContext", "supercall", "ifFalse:ifTrue:", "superclass", "methodClass"]
}),
$globals.MethodContext);

$core.addMethod(
$core.method({
selector: "methodContext",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2,$receiver;
$1=self._isBlockContext();
if(!$core.assert($1)){
return self;
};
$3=self._outerContext();
if(($receiver = $3) == null || $receiver.isNil){
$2=$3;
} else {
var outer;
outer=$receiver;
$2=$recv(outer)._methodContext();
};
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodContext",{},$globals.MethodContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "methodContext\x0a\x09self isBlockContext ifFalse: [ ^ self ].\x0a\x09\x0a\x09^ self outerContext ifNotNil: [ :outer |\x0a\x09\x09outer methodContext ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "isBlockContext", "ifNotNil:", "outerContext", "methodContext"]
}),
$globals.MethodContext);

$core.addMethod(
$core.method({
selector: "outerContext",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.outerContext || self.homeContext;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"outerContext",{},$globals.MethodContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "outerContext\x0a\x09<return self.outerContext || self.homeContext>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodContext);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.MethodContext.superclass.fn.prototype._printOn_.apply($recv(self), [aStream]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(aStream)._nextPutAll_("(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(self._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$1=$recv(aStream)._nextPutAll_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.MethodContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09aStream \x0a\x09\x09nextPutAll: '(';\x0a\x09\x09nextPutAll: self asString;\x0a\x09\x09nextPutAll: ')'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printOn:", "nextPutAll:", "asString"]
}),
$globals.MethodContext);

$core.addMethod(
$core.method({
selector: "receiver",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1;
$2=$recv(self._isBlockContext())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=self._outerContext();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["outerContext"]=1;
//>>excludeEnd("ctx");
return $recv($3)._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($2)){
$1=$recv(self._outerContext())._receiver();
} else {
$1=self._basicReceiver();
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"receiver",{},$globals.MethodContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "receiver\x0a\x09^ (self isBlockContext and: [ self outerContext notNil ])\x0a\x09\x09ifTrue: [ self outerContext receiver ]\x0a\x09\x09ifFalse: [ self basicReceiver ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "and:", "isBlockContext", "notNil", "outerContext", "receiver", "basicReceiver"]
}),
$globals.MethodContext);

$core.addMethod(
$core.method({
selector: "selector",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		if(self.selector) {
			return $core.js2st(self.selector);
		} else {
			return nil;
		}
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selector",{},$globals.MethodContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selector\x0a\x09<\x0a\x09\x09if(self.selector) {\x0a\x09\x09\x09return $core.js2st(self.selector);\x0a\x09\x09} else {\x0a\x09\x09\x09return nil;\x0a\x09\x09}\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodContext);

$core.addMethod(
$core.method({
selector: "sendIndexAt:",
protocol: 'accessing',
fn: function (aSelector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.sendIdx[aSelector] || 0;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendIndexAt:",{aSelector:aSelector},$globals.MethodContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "sendIndexAt: aSelector\x0a\x09<return self.sendIdx[aSelector] || 0>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodContext);

$core.addMethod(
$core.method({
selector: "sendIndexes",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.sendIdx;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendIndexes",{},$globals.MethodContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sendIndexes\x0a\x09<return self.sendIdx>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodContext);

$core.addMethod(
$core.method({
selector: "supercall",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.supercall == true;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"supercall",{},$globals.MethodContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "supercall\x0a\x09<return self.supercall == true>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodContext);

$core.addMethod(
$core.method({
selector: "temps",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._deprecatedAPI();
$1=self._locals();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"temps",{},$globals.MethodContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "temps\x0a\x09self deprecatedAPI.\x0a\x09\x0a\x09^ self locals",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["deprecatedAPI", "locals"]
}),
$globals.MethodContext);



$core.addClass('NativeFunction', $globals.Object, [], 'Kernel-Methods');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.NativeFunction.comment="I am a wrapper around native functions, such as `WebSocket`.\x0aFor 'normal' functions (whose constructor is the JavaScript `Function` object), use `BlockClosure`.\x0a\x0a## API\x0a\x0aSee the class-side `instance creation` methods for instance creation.\x0a\x0aCreated instances will most probably be instance of `JSObjectProxy`.\x0a\x0a## Usage example:\x0a\x0a\x09| ws |\x0a\x09ws := NativeFunction constructor: 'WebSocket' value: 'ws://localhost'.\x0a\x09ws at: 'onopen' put: [ ws send: 'hey there from Amber' ]";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "constructor:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		var nativeFunc=eval(aString);
		return new nativeFunc();
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"constructor:",{aString:aString},$globals.NativeFunction.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "constructor: aString\x0a\x09<\x0a\x09\x09var nativeFunc=eval(aString);\x0a\x09\x09return new nativeFunc();\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.NativeFunction.klass);

$core.addMethod(
$core.method({
selector: "constructor:value:",
protocol: 'instance creation',
fn: function (aString,anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		var nativeFunc=eval(aString);
		return new nativeFunc(anObject);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"constructor:value:",{aString:aString,anObject:anObject},$globals.NativeFunction.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "constructor: aString value:anObject\x0a\x09<\x0a\x09\x09var nativeFunc=eval(aString);\x0a\x09\x09return new nativeFunc(anObject);\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.NativeFunction.klass);

$core.addMethod(
$core.method({
selector: "constructor:value:value:",
protocol: 'instance creation',
fn: function (aString,anObject,anObject2){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		var nativeFunc=eval(aString);
		return new nativeFunc(anObject,anObject2);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"constructor:value:value:",{aString:aString,anObject:anObject,anObject2:anObject2},$globals.NativeFunction.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject", "anObject2"],
source: "constructor: aString value:anObject value: anObject2\x0a\x09<\x0a\x09\x09var nativeFunc=eval(aString);\x0a\x09\x09return new nativeFunc(anObject,anObject2);\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.NativeFunction.klass);

$core.addMethod(
$core.method({
selector: "constructor:value:value:value:",
protocol: 'instance creation',
fn: function (aString,anObject,anObject2,anObject3){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		var nativeFunc=eval(aString);
		return new nativeFunc(anObject,anObject2, anObject3);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"constructor:value:value:value:",{aString:aString,anObject:anObject,anObject2:anObject2,anObject3:anObject3},$globals.NativeFunction.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject", "anObject2", "anObject3"],
source: "constructor: aString value:anObject value: anObject2 value:anObject3\x0a\x09<\x0a\x09\x09var nativeFunc=eval(aString);\x0a\x09\x09return new nativeFunc(anObject,anObject2, anObject3);\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.NativeFunction.klass);

$core.addMethod(
$core.method({
selector: "exists:",
protocol: 'testing',
fn: function (aString){
var self=this;
function $PlatformInterface(){return $globals.PlatformInterface||(typeof PlatformInterface=="undefined"?nil:PlatformInterface)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($PlatformInterface())._existsGlobal_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exists:",{aString:aString},$globals.NativeFunction.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "exists: aString\x0a\x09^ PlatformInterface existsGlobal: aString",
referencedClasses: ["PlatformInterface"],
//>>excludeEnd("ide");
messageSends: ["existsGlobal:"]
}),
$globals.NativeFunction.klass);


$core.addClass('Timeout', $globals.Object, ['rawTimeout'], 'Kernel-Methods');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Timeout.comment="I am wrapping the returns from `set{Timeout,Interval}`.\x0a\x0a## Motivation\x0a\x0aNumber suffices in browsers, but node.js returns an object.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "clearInterval",
protocol: 'timeout/interval',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		var interval = self["@rawTimeout"];
		clearInterval(interval);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clearInterval",{},$globals.Timeout)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clearInterval\x0a\x09<\x0a\x09\x09var interval = self[\x22@rawTimeout\x22];\x0a\x09\x09clearInterval(interval);\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Timeout);

$core.addMethod(
$core.method({
selector: "clearTimeout",
protocol: 'timeout/interval',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		var timeout = self["@rawTimeout"];
		clearTimeout(timeout);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clearTimeout",{},$globals.Timeout)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clearTimeout\x0a\x09<\x0a\x09\x09var timeout = self[\x22@rawTimeout\x22];\x0a\x09\x09clearTimeout(timeout);\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Timeout);

$core.addMethod(
$core.method({
selector: "rawTimeout:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@rawTimeout"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "rawTimeout: anObject\x0a\x09rawTimeout := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Timeout);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._rawTimeout_(anObject);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{anObject:anObject},$globals.Timeout.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "on: anObject\x0a\x09^ self new rawTimeout: anObject; yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["rawTimeout:", "new", "yourself"]
}),
$globals.Timeout.klass);

});
