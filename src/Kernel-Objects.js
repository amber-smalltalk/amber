define("amber_core/Kernel-Objects", ["amber/boot"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Kernel-Objects');
$core.packages["Kernel-Objects"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass('ProtoObject', null, [], 'Kernel-Objects');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ProtoObject.comment="I implement the basic behavior required for any object in Amber.\x0a\x0aIn most cases, subclassing `ProtoObject` is wrong and `Object` should be used instead. However subclassing `ProtoObject` can be useful in some special cases like proxy implementations.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "=",
protocol: 'comparing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self.__eq_eq(anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{anObject:anObject},$globals.ProtoObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "= anObject\x0a\x09^ self == anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["=="]
}),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "==",
protocol: 'comparing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=self._identityHash();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["identityHash"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq($recv(anObject)._identityHash());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"==",{anObject:anObject},$globals.ProtoObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "== anObject\x0a\x09^ self identityHash = anObject identityHash",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["=", "identityHash"]
}),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "asString",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._printString();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asString",{},$globals.ProtoObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asString\x0a\x09^ self printString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printString"]
}),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "class",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.klass;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"class",{},$globals.ProtoObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "class\x0a\x09<return self.klass>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "doesNotUnderstand:",
protocol: 'error handling',
fn: function (aMessage){
var self=this;
function $MessageNotUnderstood(){return $globals.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($MessageNotUnderstood())._new();
$recv($1)._receiver_(self);
$recv($1)._message_(aMessage);
$2=$recv($1)._signal();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},$globals.ProtoObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09MessageNotUnderstood new\x0a\x09\x09receiver: self;\x0a\x09\x09message: aMessage;\x0a\x09\x09signal",
referencedClasses: ["MessageNotUnderstood"],
//>>excludeEnd("ide");
messageSends: ["receiver:", "new", "message:", "signal"]
}),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "evaluate:on:",
protocol: 'evaluating',
fn: function (aString,anEvaluator){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(anEvaluator)._evaluate_receiver_(aString,self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluate:on:",{aString:aString,anEvaluator:anEvaluator},$globals.ProtoObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anEvaluator"],
source: "evaluate: aString on: anEvaluator\x0a\x09^ anEvaluator evaluate: aString receiver: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["evaluate:receiver:"]
}),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "identityHash",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		var hash=self.identityHash;
		if (hash) return hash;
		hash=$core.nextId();
		Object.defineProperty(self, 'identityHash', {value:hash});
		return hash;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"identityHash",{},$globals.ProtoObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "identityHash\x0a\x09<\x0a\x09\x09var hash=self.identityHash;\x0a\x09\x09if (hash) return hash;\x0a\x09\x09hash=$core.nextId();\x0a\x09\x09Object.defineProperty(self, 'identityHash', {value:hash});\x0a\x09\x09return hash;\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "inspect",
protocol: 'inspecting',
fn: function (){
var self=this;
function $Inspector(){return $globals.Inspector||(typeof Inspector=="undefined"?nil:Inspector)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($Inspector())._inspect_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspect",{},$globals.ProtoObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inspect\x0a\x09Inspector inspect: self",
referencedClasses: ["Inspector"],
//>>excludeEnd("ide");
messageSends: ["inspect:"]
}),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "inspectOn:",
protocol: 'inspecting',
fn: function (anInspector){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "inspectOn: anInspector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "instVarAt:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 return self['@'+aString] ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"instVarAt:",{aString:aString},$globals.ProtoObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "instVarAt: aString\x0a\x09< return self['@'+aString] >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "instVarAt:put:",
protocol: 'accessing',
fn: function (aString,anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 self['@' + aString] = anObject ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"instVarAt:put:",{aString:aString,anObject:anObject},$globals.ProtoObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "instVarAt: aString put: anObject\x0a\x09< self['@' + aString] = anObject >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "isKindOf:",
protocol: 'testing',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=self._isMemberOf_(aClass);
if($core.assert($2)){
$1=true;
} else {
$1=$recv(self._class())._inheritsFrom_(aClass);
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isKindOf:",{aClass:aClass},$globals.ProtoObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "isKindOf: aClass\x0a\x09^ (self isMemberOf: aClass)\x0a\x09\x09ifTrue: [ true ]\x0a\x09\x09ifFalse: [ self class inheritsFrom: aClass ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isMemberOf:", "inheritsFrom:", "class"]
}),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "perform:",
protocol: 'message handling',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._perform_withArguments_(aString,[]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"perform:",{aString:aString},$globals.ProtoObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "perform: aString\x0a\x09^ self perform: aString withArguments: #()",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["perform:withArguments:"]
}),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "perform:withArguments:",
protocol: 'message handling',
fn: function (aString,aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return $core.send(self, aString._asJavaScriptMethodName(), aCollection);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"perform:withArguments:",{aString:aString,aCollection:aCollection},$globals.ProtoObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aCollection"],
source: "perform: aString withArguments: aCollection\x0a\x09<return $core.send(self, aString._asJavaScriptMethodName(), aCollection)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $5,$4,$3,$2,$1;
$5=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._first();
$2=$recv($3)._isVowel();
if($core.assert($2)){
$1="an ";
} else {
$1="a ";
};
$recv(aStream)._nextPutAll_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($recv(self._class())._name());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.ProtoObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: (self class name first isVowel\x0a\x09\x09ifTrue: [ 'an ' ]\x0a\x09\x09ifFalse: [ 'a ' ]).\x0a\x09aStream nextPutAll: self class name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "ifTrue:ifFalse:", "isVowel", "first", "name", "class"]
}),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "printString",
protocol: 'printing',
fn: function (){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($String())._streamContents_((function(str){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._printOn_(str);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printString",{},$globals.ProtoObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printString\x0a\x09^ String streamContents: [ :str | \x0a\x09\x09self printOn: str ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "printOn:"]
}),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "yourself",
protocol: 'accessing',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "yourself\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "~=",
protocol: 'comparing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self.__eq(anObject)).__eq(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"~=",{anObject:anObject},$globals.ProtoObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "~= anObject\x0a\x09^ (self = anObject) = false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["="]
}),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "~~",
protocol: 'comparing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self.__eq_eq(anObject)).__eq(false);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"~~",{anObject:anObject},$globals.ProtoObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "~~ anObject\x0a\x09^ (self == anObject) = false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["=", "=="]
}),
$globals.ProtoObject);


$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProtoObject.klass);


$core.addClass('Object', $globals.ProtoObject, [], 'Kernel-Objects');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Object.comment="**I am the root of the Smalltalk class system**. With the exception of unual subclasses of `ProtoObject`, all other classes in the system are subclasses of me.\x0a\x0aI provide default behavior common to all normal objects (some of it inherited from `ProtoObject`), such as:\x0a\x0a- accessing\x0a- copying\x0a- comparison\x0a- error handling\x0a- message sending\x0a- reflection\x0a\x0aAlso utility messages that all objects should respond to are defined here.\x0a\x0aI have no instance variable.\x0a\x0a##Access\x0a\x0aInstance variables can be accessed with `#instVarAt:` and `#instVarAt:put:`. `#instanceVariableNames` answers a collection of all instance variable names.\x0aAccessing JavaScript properties of an object is done through `#basicAt:`, `#basicAt:put:` and `basicDelete:`.\x0a\x0a##Copying\x0a\x0aCopying an object is handled by `#copy` and `#deepCopy`. The first one performs a shallow copy of the receiver, while the second one performs a deep copy.\x0aThe hook method `#postCopy` can be overriden in subclasses to copy fields as necessary to complete the full copy. It will be sent by the copy of the receiver.\x0a\x0a##Comparison\x0a\x0aI understand equality `#=` and identity `#==` comparison.\x0a\x0a##Error handling\x0a\x0a- `#halt` is the typical message to use for inserting breakpoints during debugging.\x0a- `#error:` throws a generic error exception\x0a- `#doesNotUnderstand:` handles the fact that there was an attempt to send the given message to the receiver but the receiver does not understand this message.\x0a\x09Overriding this message can be useful to implement proxies for example.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "->",
protocol: 'converting',
fn: function (anObject){
var self=this;
function $Association(){return $globals.Association||(typeof Association=="undefined"?nil:Association)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Association())._key_value_(self,anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"->",{anObject:anObject},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "-> anObject\x0a\x09^ Association key: self value: anObject",
referencedClasses: ["Association"],
//>>excludeEnd("ide");
messageSends: ["key:value:"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "asJSON",
protocol: 'converting',
fn: function (){
var self=this;
var variables;
function $HashedCollection(){return $globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
variables=$recv($HashedCollection())._new();
$recv($recv(self._class())._allInstanceVariableNames())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(variables)._at_put_(each,$recv(self._instVarAt_(each))._asJSON());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=variables;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJSON",{variables:variables},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJSON\x0a\x09| variables |\x0a\x09variables := HashedCollection new.\x0a\x09self class allInstanceVariableNames do: [ :each |\x0a\x09\x09variables at: each put: (self instVarAt: each) asJSON ].\x0a\x09^ variables",
referencedClasses: ["HashedCollection"],
//>>excludeEnd("ide");
messageSends: ["new", "do:", "allInstanceVariableNames", "class", "at:put:", "asJSON", "instVarAt:"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "asJSONString",
protocol: 'converting',
fn: function (){
var self=this;
function $JSON(){return $globals.JSON||(typeof JSON=="undefined"?nil:JSON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($JSON())._stringify_(self._asJSON());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJSONString",{},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJSONString\x0a\x09^ JSON stringify: self asJSON",
referencedClasses: ["JSON"],
//>>excludeEnd("ide");
messageSends: ["stringify:", "asJSON"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "asJavascript",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._asString();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavascript",{},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavascript\x0a\x09^ self asString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asString"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "basicAt:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self[aString];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicAt:",{aString:aString},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "basicAt: aString\x0a\x09<return self[aString]>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "basicAt:put:",
protocol: 'accessing',
fn: function (aString,anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self[aString] = anObject;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicAt:put:",{aString:aString,anObject:anObject},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "basicAt: aString put: anObject\x0a\x09<return self[aString] = anObject>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "basicDelete:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
delete self[aString]; return aString;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicDelete:",{aString:aString},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "basicDelete: aString\x0a\x09<delete self[aString]; return aString>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "basicPerform:",
protocol: 'message handling',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._basicPerform_withArguments_(aString,[]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicPerform:",{aString:aString},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "basicPerform: aString\x0a\x09^ self basicPerform: aString withArguments: #()",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicPerform:withArguments:"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "basicPerform:withArguments:",
protocol: 'message handling',
fn: function (aString,aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self[aString].apply(self, aCollection);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicPerform:withArguments:",{aString:aString,aCollection:aCollection},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aCollection"],
source: "basicPerform: aString withArguments: aCollection\x0a\x09<return self[aString].apply(self, aCollection);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

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
$recv($Finder())._findClass_(self._class());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"browse",{},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "browse\x0a\x09Finder findClass: self class",
referencedClasses: ["Finder"],
//>>excludeEnd("ide");
messageSends: ["findClass:", "class"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "copy",
protocol: 'copying',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._shallowCopy())._postCopy();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copy",{},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "copy\x0a\x09^ self shallowCopy postCopy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["postCopy", "shallowCopy"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "deepCopy",
protocol: 'copying',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		var copy = self.klass._new();
		Object.keys(self).forEach(function (i) {
		if(/^@.+/.test(i)) {
			copy[i] = self[i]._deepCopy();
		}
		});
		return copy;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deepCopy\x0a\x09<\x0a\x09\x09var copy = self.klass._new();\x0a\x09\x09Object.keys(self).forEach(function (i) {\x0a\x09\x09if(/^@.+/.test(i)) {\x0a\x09\x09\x09copy[i] = self[i]._deepCopy();\x0a\x09\x09}\x0a\x09\x09});\x0a\x09\x09return copy;\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "deprecatedAPI",
protocol: 'error handling',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$6,$5,$4,$8,$7,$3,$2;
$1=console;
$6=$core.getThisContext()._home();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["home"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__comma(" is deprecated! (in ");
$8=$recv($core.getThisContext()._home())._home();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["home"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._asString();
$3=$recv($4).__comma($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__comma(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($1)._warn_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deprecatedAPI",{},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deprecatedAPI\x0a\x09\x22Just a simple way to deprecate methods.\x0a\x09#deprecatedAPI is in the 'error handling' protocol even if it doesn't throw an error,\x0a\x09but it could in the future.\x22\x0a\x09console warn: thisContext home asString, ' is deprecated! (in ', thisContext home home asString, ')'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["warn:", ",", "asString", "home"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "deprecatedAPI:",
protocol: 'error handling',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$6,$5,$4,$8,$7,$3,$2;
$1=console;
$6=$core.getThisContext()._home();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["home"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__comma(" is deprecated! (in ");
$8=$recv($core.getThisContext()._home())._home();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["home"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._asString();
$3=$recv($4).__comma($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__comma(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($1)._warn_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["warn:"]=1;
//>>excludeEnd("ctx");
$recv(console)._warn_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deprecatedAPI:",{aString:aString},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "deprecatedAPI: aString\x0a\x09\x22Just a simple way to deprecate methods.\x0a\x09#deprecatedAPI is in the 'error handling' protocol even if it doesn't throw an error,\x0a\x09but it could in the future.\x22\x0a\x09console warn: thisContext home asString, ' is deprecated! (in ', thisContext home home asString, ')'.\x0a\x09console warn: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["warn:", ",", "asString", "home"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "error:",
protocol: 'error handling',
fn: function (aString){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($Error())._signal_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"error:",{aString:aString},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "error: aString\x0a\x09Error signal: aString",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["signal:"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "halt",
protocol: 'error handling',
fn: function (){
var self=this;
function $Halt(){return $globals.Halt||(typeof Halt=="undefined"?nil:Halt)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($Halt())._signal();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"halt",{},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "halt\x0a\x09Halt signal",
referencedClasses: ["Halt"],
//>>excludeEnd("ide");
messageSends: ["signal"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "ifNil:",
protocol: 'testing',
fn: function (aBlock){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "ifNil: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "ifNil:ifNotNil:",
protocol: 'testing',
fn: function (aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(anotherBlock)._value_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifNil:ifNotNil:",{aBlock:aBlock,anotherBlock:anotherBlock},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "ifNil: aBlock ifNotNil: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ anotherBlock value: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "ifNotNil:",
protocol: 'testing',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aBlock)._value_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:",{aBlock:aBlock},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "ifNotNil: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ aBlock value: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "ifNotNil:ifNil:",
protocol: 'testing',
fn: function (aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aBlock)._value_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:ifNil:",{aBlock:aBlock,anotherBlock:anotherBlock},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "ifNotNil: aBlock ifNil: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ aBlock value: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "inspectOn:",
protocol: 'inspecting',
fn: function (anInspector){
var self=this;
var variables;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
variables=$recv($Dictionary())._new();
$recv(variables)._at_put_("#self",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($recv(self._class())._allInstanceVariableNames())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(variables)._at_put_(each,self._instVarAt_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(anInspector)._setLabel_(self._printString());
$1=$recv(anInspector)._setVariables_(variables);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self.\x0a\x09self class allInstanceVariableNames do: [ :each |\x0a\x09\x09variables at: each put: (self instVarAt: each) ].\x0a\x09anInspector\x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: variables",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new", "at:put:", "do:", "allInstanceVariableNames", "class", "instVarAt:", "setLabel:", "printString", "setVariables:"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "isBehavior",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBehavior\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "isBoolean",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBoolean\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "isClass",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isClass\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "isCompiledMethod",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isCompiledMethod\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "isImmutable",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isImmutable\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "isMemberOf:",
protocol: 'testing',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class()).__eq(aClass);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isMemberOf:",{aClass:aClass},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "isMemberOf: aClass\x0a\x09^ self class = aClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["=", "class"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "isMetaclass",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isMetaclass\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "isNil",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isNil\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "isNumber",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isNumber\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "isPackage",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isPackage\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "isParseFailure",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isParseFailure\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "isString",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isString\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "isSymbol",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSymbol\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "notNil",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._isNil())._not();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"notNil",{},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "notNil\x0a\x09^ self isNil not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["not", "isNil"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "postCopy",
protocol: 'copying',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "postCopy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "putOn:",
protocol: 'streaming',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aStream)._nextPut_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"putOn:",{aStream:aStream},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "putOn: aStream\x0a\x09aStream nextPut: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPut:"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "respondsTo:",
protocol: 'testing',
fn: function (aSelector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class())._canUnderstand_(aSelector);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"respondsTo:",{aSelector:aSelector},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "respondsTo: aSelector\x0a\x09^ self class canUnderstand: aSelector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["canUnderstand:", "class"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "shallowCopy",
protocol: 'copying',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		var copy = self.klass._new();
		Object.keys(self).forEach(function(i) {
		if(/^@.+/.test(i)) {
			copy[i] = self[i];
		}
		});
		return copy;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shallowCopy",{},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shallowCopy\x0a\x09<\x0a\x09\x09var copy = self.klass._new();\x0a\x09\x09Object.keys(self).forEach(function(i) {\x0a\x09\x09if(/^@.+/.test(i)) {\x0a\x09\x09\x09copy[i] = self[i];\x0a\x09\x09}\x0a\x09\x09});\x0a\x09\x09return copy;\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "shouldNotImplement",
protocol: 'error handling',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("This method should not be implemented in ".__comma($recv(self._class())._name()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldNotImplement",{},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shouldNotImplement\x0a\x09self error: 'This method should not be implemented in ', self class name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:", ",", "name", "class"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "size",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("Object not indexable");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size",{},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09self error: 'Object not indexable'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "subclassResponsibility",
protocol: 'error handling',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("This method is a responsibility of a subclass");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclassResponsibility",{},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "subclassResponsibility\x0a\x09self error: 'This method is a responsibility of a subclass'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "throw:",
protocol: 'error handling',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 throw anObject ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"throw:",{anObject:anObject},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "throw: anObject\x0a\x09< throw anObject >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "try:catch:",
protocol: 'error handling',
fn: function (aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._deprecatedAPI();
$1=$recv(aBlock)._tryCatch_(anotherBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"try:catch:",{aBlock:aBlock,anotherBlock:anotherBlock},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "try: aBlock catch: anotherBlock\x0a\x09self deprecatedAPI.\x0a\x09\x0a\x09^ aBlock tryCatch: anotherBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["deprecatedAPI", "tryCatch:"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "value",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.valueOf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value",{},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "value\x0a\x09<return self.valueOf()>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);


$core.addMethod(
$core.method({
selector: "accessorProtocolWith:",
protocol: 'helios',
fn: function (aGenerator){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aGenerator)._accessorProtocolForObject();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accessorProtocolWith:",{aGenerator:aGenerator},$globals.Object.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aGenerator"],
source: "accessorProtocolWith: aGenerator\x0a\x09aGenerator accessorProtocolForObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["accessorProtocolForObject"]
}),
$globals.Object.klass);

$core.addMethod(
$core.method({
selector: "accessorsSourceCodesWith:",
protocol: 'helios',
fn: function (aGenerator){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aGenerator)._accessorsForObject();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accessorsSourceCodesWith:",{aGenerator:aGenerator},$globals.Object.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aGenerator"],
source: "accessorsSourceCodesWith: aGenerator\x0a\x09aGenerator accessorsForObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["accessorsForObject"]
}),
$globals.Object.klass);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09\x22no op\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object.klass);

$core.addMethod(
$core.method({
selector: "initializeProtocolWith:",
protocol: 'helios',
fn: function (aGenerator){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aGenerator)._initializeProtocolForObject();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeProtocolWith:",{aGenerator:aGenerator},$globals.Object.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aGenerator"],
source: "initializeProtocolWith: aGenerator\x0a\x09aGenerator initializeProtocolForObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeProtocolForObject"]
}),
$globals.Object.klass);

$core.addMethod(
$core.method({
selector: "initializeSourceCodesWith:",
protocol: 'helios',
fn: function (aGenerator){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aGenerator)._initializeForObject();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeSourceCodesWith:",{aGenerator:aGenerator},$globals.Object.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aGenerator"],
source: "initializeSourceCodesWith: aGenerator\x0a\x09aGenerator initializeForObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeForObject"]
}),
$globals.Object.klass);


$core.addClass('Boolean', $globals.Object, [], 'Kernel-Objects');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Boolean.comment="I define the protocol for logic testing operations and conditional control structures for the logical values (see the `controlling` protocol).\x0a\x0aI have two instances, `true` and `false`.\x0a\x0aI am directly mapped to JavaScript Boolean. The `true` and `false` objects are the JavaScript boolean objects.\x0a\x0a## Usage Example:\x0a\x0a    aBoolean not ifTrue: [ ... ] ifFalse: [ ... ]";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "&",
protocol: 'controlling',
fn: function (aBoolean){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		if(self == true) {
		return aBoolean;
		} else {
		return false;
		}
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"&",{aBoolean:aBoolean},$globals.Boolean)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "& aBoolean\x0a\x09<\x0a\x09\x09if(self == true) {\x0a\x09\x09return aBoolean;\x0a\x09\x09} else {\x0a\x09\x09return false;\x0a\x09\x09}\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "=",
protocol: 'comparing',
fn: function (aBoolean){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		return aBoolean != null &&
			typeof aBoolean._isBoolean === "function" &&
			aBoolean._isBoolean() &&
			Boolean(self == true) == aBoolean
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{aBoolean:aBoolean},$globals.Boolean)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "= aBoolean\x0a\x09<\x0a\x09\x09return aBoolean != null &&\x0a\x09\x09\x09typeof aBoolean._isBoolean === \x22function\x22 &&\x0a\x09\x09\x09aBoolean._isBoolean() &&\x0a\x09\x09\x09Boolean(self == true) == aBoolean\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "==",
protocol: 'comparing',
fn: function (aBoolean){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self.__eq(aBoolean);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"==",{aBoolean:aBoolean},$globals.Boolean)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "== aBoolean\x0a\x09^ self = aBoolean",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["="]
}),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "and:",
protocol: 'controlling',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=self.__eq(true);
$1=$recv($2)._ifTrue_ifFalse_(aBlock,(function(){
return false;

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"and:",{aBlock:aBlock},$globals.Boolean)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "and: aBlock\x0a\x09^ self = true\x0a\x09\x09ifTrue: aBlock\x0a\x09\x09ifFalse: [ false ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "="]
}),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "asBit",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
if($core.assert(self)){
$1=(1);
} else {
$1=(0);
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asBit",{},$globals.Boolean)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asBit\x0a\x09^ self ifTrue: [ 1 ] ifFalse: [ 0 ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:"]
}),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "asJSON",
protocol: 'converting',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJSON\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "asString",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 return self.toString() ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asString",{},$globals.Boolean)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asString\x0a\x09< return self.toString() >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "deepCopy",
protocol: 'copying',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deepCopy\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "ifFalse:",
protocol: 'controlling',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._ifTrue_ifFalse_((function(){

}),aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifFalse:",{aBlock:aBlock},$globals.Boolean)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "ifFalse: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ self ifTrue: [] ifFalse: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:"]
}),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "ifFalse:ifTrue:",
protocol: 'controlling',
fn: function (aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._ifTrue_ifFalse_(anotherBlock,aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifFalse:ifTrue:",{aBlock:aBlock,anotherBlock:anotherBlock},$globals.Boolean)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "ifFalse: aBlock ifTrue: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ self ifTrue: anotherBlock ifFalse: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:"]
}),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "ifTrue:",
protocol: 'controlling',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._ifTrue_ifFalse_(aBlock,(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifTrue:",{aBlock:aBlock},$globals.Boolean)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "ifTrue: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ self ifTrue: aBlock ifFalse: []",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:"]
}),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "ifTrue:ifFalse:",
protocol: 'controlling',
fn: function (aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		if(self == true) {
		return aBlock._value();
		} else {
		return anotherBlock._value();
		}
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifTrue:ifFalse:",{aBlock:aBlock,anotherBlock:anotherBlock},$globals.Boolean)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "ifTrue: aBlock ifFalse: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09<\x0a\x09\x09if(self == true) {\x0a\x09\x09return aBlock._value();\x0a\x09\x09} else {\x0a\x09\x09return anotherBlock._value();\x0a\x09\x09}\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "isBoolean",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBoolean\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "isImmutable",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isImmutable\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "not",
protocol: 'controlling',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self.__eq(false);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"not",{},$globals.Boolean)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "not\x0a\x09^ self = false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["="]
}),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "or:",
protocol: 'controlling',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=self.__eq(true);
$1=$recv($2)._ifTrue_ifFalse_((function(){
return true;

}),aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"or:",{aBlock:aBlock},$globals.Boolean)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "or: aBlock\x0a\x09^ self = true\x0a\x09\x09ifTrue: [ true ]\x0a\x09\x09ifFalse: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "="]
}),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(self._asString());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.Boolean)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: self asString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "asString"]
}),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "shallowCopy",
protocol: 'copying',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shallowCopy\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "|",
protocol: 'controlling',
fn: function (aBoolean){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		if(self == true) {
		return true;
		} else {
		return aBoolean;
		}
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"|",{aBoolean:aBoolean},$globals.Boolean)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "| aBoolean\x0a\x09<\x0a\x09\x09if(self == true) {\x0a\x09\x09return true;\x0a\x09\x09} else {\x0a\x09\x09return aBoolean;\x0a\x09\x09}\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Boolean);



$core.addClass('Date', $globals.Object, [], 'Kernel-Objects');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Date.comment="I am used to work with both dates and times. Therefore `Date today` and `Date now` are both valid in\x0aAmber and answer the same date object.\x0a\x0aDate directly maps to the `Date()` JavaScript constructor, and Amber date objects are JavaScript date objects.\x0a\x0a## API\x0a\x0aThe class-side `instance creation` protocol contains some convenience methods for creating date/time objects such as `#fromSeconds:`.\x0a\x0aArithmetic and comparison is supported (see the `comparing` and `arithmetic` protocols).\x0a\x0aThe `converting` protocol provides convenience methods for various convertions (to numbers, strings, etc.).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "+",
protocol: 'arithmetic',
fn: function (aDate){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self + aDate;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"+",{aDate:aDate},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDate"],
source: "+ aDate\x0a\x09<return self + aDate>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "-",
protocol: 'arithmetic',
fn: function (aDate){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self - aDate;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"-",{aDate:aDate},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDate"],
source: "- aDate\x0a\x09<return self - aDate>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "<",
protocol: 'comparing',
fn: function (aDate){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self < aDate;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"<",{aDate:aDate},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDate"],
source: "< aDate\x0a\x09<return self < aDate>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "<=",
protocol: 'comparing',
fn: function (aDate){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self <= aDate;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"<=",{aDate:aDate},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDate"],
source: "<= aDate\x0a\x09<return self <= aDate>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: ">",
protocol: 'comparing',
fn: function (aDate){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self > aDate;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,">",{aDate:aDate},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDate"],
source: "> aDate\x0a\x09<return self >> aDate>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: ">=",
protocol: 'comparing',
fn: function (aDate){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self >= aDate;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,">=",{aDate:aDate},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDate"],
source: ">= aDate\x0a\x09<return self >>= aDate>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "asDateString",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.toDateString();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asDateString",{},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asDateString\x0a\x09<return self.toDateString()>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "asLocaleString",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.toLocaleString();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asLocaleString",{},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asLocaleString\x0a\x09<return self.toLocaleString()>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "asMilliseconds",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._time();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asMilliseconds",{},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asMilliseconds\x0a\x09^ self time",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["time"]
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "asNumber",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._asMilliseconds();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asNumber",{},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asNumber\x0a\x09^ self asMilliseconds",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asMilliseconds"]
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "asString",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.toString();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asString",{},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asString\x0a\x09<return self.toString()>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "asTimeString",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.toTimeString();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asTimeString",{},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asTimeString\x0a\x09<return self.toTimeString()>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "day",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._dayOfWeek();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"day",{},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "day\x0a\x09^ self dayOfWeek",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["dayOfWeek"]
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "day:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._dayOfWeek_(aNumber);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"day:",{aNumber:aNumber},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "day: aNumber\x0a\x09self dayOfWeek: aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["dayOfWeek:"]
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "dayOfMonth",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.getDate();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dayOfMonth",{},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dayOfMonth\x0a\x09<return self.getDate()>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "dayOfMonth:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self.setDate(aNumber);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dayOfMonth:",{aNumber:aNumber},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "dayOfMonth: aNumber\x0a\x09<self.setDate(aNumber)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "dayOfWeek",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.getDay() + 1;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dayOfWeek",{},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dayOfWeek\x0a\x09<return self.getDay() + 1>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "dayOfWeek:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.setDay(aNumber - 1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dayOfWeek:",{aNumber:aNumber},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "dayOfWeek: aNumber\x0a\x09<return self.setDay(aNumber - 1)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "hours",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.getHours();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hours",{},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hours\x0a\x09<return self.getHours()>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "hours:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self.setHours(aNumber);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hours:",{aNumber:aNumber},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "hours: aNumber\x0a\x09<self.setHours(aNumber)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "milliseconds",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.getMilliseconds();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"milliseconds",{},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "milliseconds\x0a\x09<return self.getMilliseconds()>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "milliseconds:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self.setMilliseconds(aNumber);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"milliseconds:",{aNumber:aNumber},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "milliseconds: aNumber\x0a\x09<self.setMilliseconds(aNumber)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "minutes",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.getMinutes();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"minutes",{},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "minutes\x0a\x09<return self.getMinutes()>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "minutes:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self.setMinutes(aNumber);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"minutes:",{aNumber:aNumber},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "minutes: aNumber\x0a\x09<self.setMinutes(aNumber)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "month",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.getMonth() + 1;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"month",{},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "month\x0a\x09<return self.getMonth() + 1>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "month:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self.setMonth(aNumber - 1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"month:",{aNumber:aNumber},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "month: aNumber\x0a\x09<self.setMonth(aNumber - 1)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(self._asString());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: self asString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "asString"]
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "seconds",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.getSeconds();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"seconds",{},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "seconds\x0a\x09<return self.getSeconds()>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "seconds:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self.setSeconds(aNumber);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"seconds:",{aNumber:aNumber},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "seconds: aNumber\x0a\x09<self.setSeconds(aNumber)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "time",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.getTime();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"time",{},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "time\x0a\x09<return self.getTime()>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "time:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self.setTime(aNumber);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"time:",{aNumber:aNumber},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "time: aNumber\x0a\x09<self.setTime(aNumber)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "year",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.getFullYear();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"year",{},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "year\x0a\x09<return self.getFullYear()>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "year:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self.setFullYear(aNumber);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"year:",{aNumber:aNumber},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "year: aNumber\x0a\x09<self.setFullYear(aNumber)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date);


$core.addMethod(
$core.method({
selector: "fromMilliseconds:",
protocol: 'instance creation',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._new_(aNumber);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromMilliseconds:",{aNumber:aNumber},$globals.Date.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "fromMilliseconds: aNumber\x0a\x09^ self new: aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new:"]
}),
$globals.Date.klass);

$core.addMethod(
$core.method({
selector: "fromSeconds:",
protocol: 'instance creation',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._fromMilliseconds_($recv(aNumber).__star((1000)));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromSeconds:",{aNumber:aNumber},$globals.Date.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "fromSeconds: aNumber\x0a\x09^ self fromMilliseconds: aNumber * 1000",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fromMilliseconds:", "*"]
}),
$globals.Date.klass);

$core.addMethod(
$core.method({
selector: "fromString:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._new_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString},$globals.Date.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "fromString: aString\x0a\x09\x22Example: Date fromString('2011/04/15 00:00:00')\x22\x0a\x09^ self new: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new:"]
}),
$globals.Date.klass);

$core.addMethod(
$core.method({
selector: "heliosClass",
protocol: 'helios',
fn: function (){
var self=this;
return "magnitude";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "heliosClass\x0a\x09^ 'magnitude'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date.klass);

$core.addMethod(
$core.method({
selector: "millisecondsToRun:",
protocol: 'instance creation',
fn: function (aBlock){
var self=this;
var t;
function $Date(){return $globals.Date||(typeof Date=="undefined"?nil:Date)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
t=$recv($Date())._now();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["now"]=1;
//>>excludeEnd("ctx");
$recv(aBlock)._value();
$1=$recv($recv($Date())._now()).__minus(t);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"millisecondsToRun:",{aBlock:aBlock,t:t},$globals.Date.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "millisecondsToRun: aBlock\x0a\x09| t |\x0a\x09t := Date now.\x0a\x09aBlock value.\x0a\x09^ Date now - t",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
messageSends: ["now", "value", "-"]
}),
$globals.Date.klass);

$core.addMethod(
$core.method({
selector: "new:",
protocol: 'instance creation',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return new Date(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:",{anObject:anObject},$globals.Date.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "new: anObject\x0a\x09<return new Date(anObject)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date.klass);

$core.addMethod(
$core.method({
selector: "now",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._today();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"now",{},$globals.Date.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "now\x0a\x09^ self today",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["today"]
}),
$globals.Date.klass);

$core.addMethod(
$core.method({
selector: "today",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"today",{},$globals.Date.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "today\x0a\x09^ self new",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.Date.klass);


$core.addClass('Number', $globals.Object, [], 'Kernel-Objects');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Number.comment="I am the Amber representation for all numbers.\x0aI am directly mapped to JavaScript Number.\x0a\x0a## API\x0a\x0aI provide all necessary methods for arithmetic operations, comparison, conversion and so on with numbers.\x0a\x0aMy instances can also be used to evaluate a block a fixed number of times:\x0a\x0a\x095 timesRepeat: [ Transcript show: 'This will be printed 5 times'; cr ].\x0a\x09\x0a\x091 to: 5 do: [ :aNumber| Transcript show: aNumber asString; cr ].\x0a\x09\x0a\x091 to: 10 by: 2 do: [ :aNumber| Transcript show: aNumber asString; cr ].";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "&",
protocol: 'converting',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self & aNumber;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"&",{aNumber:aNumber},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "& aNumber\x0a\x09<return self & aNumber>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "*",
protocol: 'arithmetic',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self * aNumber;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"*",{aNumber:aNumber},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "* aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self * aNumber>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "**",
protocol: 'mathematical functions',
fn: function (exponent){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._raisedTo_(exponent);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"**",{exponent:exponent},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["exponent"],
source: "** exponent\x0a\x09^ self raisedTo: exponent",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["raisedTo:"]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "+",
protocol: 'arithmetic',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self + aNumber;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"+",{aNumber:aNumber},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "+ aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self + aNumber>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "-",
protocol: 'arithmetic',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self - aNumber;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"-",{aNumber:aNumber},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "- aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self - aNumber>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "/",
protocol: 'arithmetic',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self / aNumber;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"/",{aNumber:aNumber},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "/ aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self / aNumber>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "//",
protocol: 'arithmetic',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self.__slash(aNumber))._floor();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"//",{aNumber:aNumber},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "// aNumber\x0a\x09^ (self / aNumber) floor",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["floor", "/"]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "<",
protocol: 'comparing',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self < aNumber;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"<",{aNumber:aNumber},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "< aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self < aNumber>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "<=",
protocol: 'comparing',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self <= aNumber;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"<=",{aNumber:aNumber},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "<= aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self <= aNumber>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "=",
protocol: 'comparing',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		return aNumber != null &&
			typeof aNumber._isNumber === "function" &&
			aNumber._isNumber() &&
			Number(self) == aNumber
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{aNumber:aNumber},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "= aNumber\x0a\x09<\x0a\x09\x09return aNumber != null &&\x0a\x09\x09\x09typeof aNumber._isNumber === \x22function\x22 &&\x0a\x09\x09\x09aNumber._isNumber() &&\x0a\x09\x09\x09Number(self) == aNumber\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: ">",
protocol: 'comparing',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self > aNumber;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,">",{aNumber:aNumber},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "> aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self >> aNumber>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: ">=",
protocol: 'comparing',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self >= aNumber;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,">=",{aNumber:aNumber},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: ">= aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self >>= aNumber>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "@",
protocol: 'converting',
fn: function (aNumber){
var self=this;
function $Point(){return $globals.Point||(typeof Point=="undefined"?nil:Point)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Point())._x_y_(self,aNumber);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"@",{aNumber:aNumber},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "@ aNumber\x0a\x09^ Point x: self y: aNumber",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
messageSends: ["x:y:"]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "\x5c\x5c",
protocol: 'arithmetic',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self % aNumber;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"\x5c\x5c",{aNumber:aNumber},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "\x5c\x5c aNumber\x0a\x09<return self % aNumber>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "abs",
protocol: 'arithmetic',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return Math.abs(self);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"abs",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "abs\x0a\x09<return Math.abs(self);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "arcCos",
protocol: 'mathematical functions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return Math.acos(self);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arcCos",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "arcCos\x0a\x09<return Math.acos(self);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "arcSin",
protocol: 'mathematical functions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return Math.asin(self);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arcSin",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "arcSin\x0a\x09<return Math.asin(self);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "arcTan",
protocol: 'mathematical functions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return Math.atan(self);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arcTan",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "arcTan\x0a\x09<return Math.atan(self);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "asJSON",
protocol: 'converting',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJSON\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "asJavascript",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv("(".__comma(self._printString())).__comma(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavascript",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavascript\x0a\x09^ '(', self printString, ')'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "printString"]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "asNumber",
protocol: 'converting',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asNumber\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "asPoint",
protocol: 'converting',
fn: function (){
var self=this;
function $Point(){return $globals.Point||(typeof Point=="undefined"?nil:Point)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Point())._x_y_(self,self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asPoint",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asPoint\x0a\x09^ Point x: self y: self",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
messageSends: ["x:y:"]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "asString",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 return String(self) ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asString",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asString\x0a\x09< return String(self) >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "atRandom",
protocol: 'converting',
fn: function (){
var self=this;
function $Random(){return $globals.Random||(typeof Random=="undefined"?nil:Random)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv($recv($recv($Random())._new())._next()).__star(self))._truncated()).__plus((1));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atRandom",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "atRandom\x0a\x09^ (Random new next * self) truncated + 1",
referencedClasses: ["Random"],
//>>excludeEnd("ide");
messageSends: ["+", "truncated", "*", "next", "new"]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "ceiling",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return Math.ceil(self);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ceiling",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ceiling\x0a\x09<return Math.ceil(self);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "copy",
protocol: 'copying',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "copy\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "cos",
protocol: 'mathematical functions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return Math.cos(self);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cos",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cos\x0a\x09<return Math.cos(self);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "deepCopy",
protocol: 'copying',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._copy();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deepCopy\x0a\x09^ self copy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["copy"]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "even",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=(0).__eq(self.__backslash_backslash((2)));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"even",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "even\x0a\x09^ 0 = (self \x5c\x5c 2)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["=", "\x5c\x5c"]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "floor",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return Math.floor(self);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"floor",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "floor\x0a\x09<return Math.floor(self);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "identityHash",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._asString()).__comma("n");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"identityHash",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "identityHash\x0a\x09^ self asString, 'n'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "asString"]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "isImmutable",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isImmutable\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "isNumber",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isNumber\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "isZero",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self.__eq((0));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isZero",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isZero\x0a\x09^ self = 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["="]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "ln",
protocol: 'mathematical functions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return Math.log(self);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ln",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ln\x0a\x09<return Math.log(self);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "log",
protocol: 'mathematical functions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return Math.log(self) / Math.LN10;;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"log",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "log\x0a\x09<return Math.log(self) / Math.LN10;>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "log:",
protocol: 'mathematical functions',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return Math.log(self) / Math.log(aNumber);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"log:",{aNumber:aNumber},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "log: aNumber\x0a\x09<return Math.log(self) / Math.log(aNumber);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "max:",
protocol: 'arithmetic',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return Math.max(self, aNumber);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"max:",{aNumber:aNumber},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "max: aNumber\x0a\x09<return Math.max(self, aNumber);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "min:",
protocol: 'arithmetic',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return Math.min(self, aNumber);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"min:",{aNumber:aNumber},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "min: aNumber\x0a\x09<return Math.min(self, aNumber);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "negated",
protocol: 'arithmetic',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=(0).__minus(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"negated",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "negated\x0a\x09^ 0 - self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["-"]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "negative",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self.__lt((0));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"negative",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "negative\x0a\x09\x22Answer whether the receiver is mathematically negative.\x22\x0a\x0a\x09^ self < 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["<"]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "odd",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._even())._not();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"odd",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "odd\x0a\x09^ self even not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["not", "even"]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "positive",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self.__gt_eq((0));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"positive",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "positive\x0a\x09\x22Answer whether the receiver is positive or equal to 0. (ST-80 protocol).\x22\x0a\x0a\x09^ self >= 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [">="]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(self._asString());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: self asString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "asString"]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "printShowingDecimalPlaces:",
protocol: 'printing',
fn: function (placesDesired){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.toFixed(placesDesired);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printShowingDecimalPlaces:",{placesDesired:placesDesired},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["placesDesired"],
source: "printShowingDecimalPlaces: placesDesired\x0a\x09<return self.toFixed(placesDesired)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "raisedTo:",
protocol: 'mathematical functions',
fn: function (exponent){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return Math.pow(self, exponent);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"raisedTo:",{exponent:exponent},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["exponent"],
source: "raisedTo: exponent\x0a\x09<return Math.pow(self, exponent);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "rounded",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return Math.round(self);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rounded",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "rounded\x0a\x09<return Math.round(self);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "sign",
protocol: 'mathematical functions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._isZero();
if($core.assert($1)){
return (0);
};
$2=self._positive();
if($core.assert($2)){
return (1);
} else {
return (-1);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sign",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sign\x0a\x09self isZero \x0a\x09\x09ifTrue: [ ^ 0 ].\x0a\x09self positive\x0a\x09\x09ifTrue: [ ^ 1 ]\x0a\x09\x09ifFalse: [ ^ -1 ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isZero", "ifTrue:ifFalse:", "positive"]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "sin",
protocol: 'mathematical functions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return Math.sin(self);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sin",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sin\x0a\x09<return Math.sin(self);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "sqrt",
protocol: 'mathematical functions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return Math.sqrt(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sqrt",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sqrt\x0a\x09<return Math.sqrt(self)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "squared",
protocol: 'mathematical functions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self.__star(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"squared",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "squared\x0a\x09^ self * self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["*"]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "tan",
protocol: 'mathematical functions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return Math.tan(self);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tan",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tan\x0a\x09<return Math.tan(self);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "timesRepeat:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
var count;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
count=(1);
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(count).__gt(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(aBlock)._value();
count=$recv(count).__plus((1));
return count;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"timesRepeat:",{aBlock:aBlock,count:count},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "timesRepeat: aBlock\x0a\x09| count |\x0a\x09count := 1.\x0a\x09[ count > self ] whileFalse: [\x0a\x09\x09aBlock value.\x0a\x09\x09count := count + 1 ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["whileFalse:", ">", "value", "+"]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "to:",
protocol: 'converting',
fn: function (aNumber){
var self=this;
var array,first,last,count;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
first=self._truncated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["truncated"]=1;
//>>excludeEnd("ctx");
last=$recv($recv(aNumber)._truncated()).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
count=(1);
array=$recv($Array())._new();
$recv($recv(last).__minus(first))._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(array)._at_put_(count,first);
count=$recv(count).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=2;
//>>excludeEnd("ctx");
count;
first=$recv(first).__plus((1));
return first;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=array;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"to:",{aNumber:aNumber,array:array,first:first,last:last,count:count},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "to: aNumber\x0a\x09| array first last count |\x0a\x09first := self truncated.\x0a\x09last := aNumber truncated + 1.\x0a\x09count := 1.\x0a\x09array := Array new.\x0a\x09(last - first) timesRepeat: [\x0a\x09\x09array at: count put: first.\x0a\x09\x09count := count + 1.\x0a\x09\x09first := first + 1 ].\x0a\x09^ array",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["truncated", "+", "new", "timesRepeat:", "-", "at:put:"]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "to:by:",
protocol: 'converting',
fn: function (stop,step){
var self=this;
var array,value,pos;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
value=self;
array=$recv($Array())._new();
pos=(1);
$1=$recv(step).__eq((0));
if($core.assert($1)){
self._error_("step must be non-zero");
};
$2=$recv(step).__lt((0));
if($core.assert($2)){
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(value).__gt_eq(stop);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(array)._at_put_(pos,value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
pos=$recv(pos).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
pos;
value=$recv(value).__plus(step);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=2;
//>>excludeEnd("ctx");
return value;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whileTrue:"]=1;
//>>excludeEnd("ctx");
} else {
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(value).__lt_eq(stop);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(array)._at_put_(pos,value);
pos=$recv(pos).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=3;
//>>excludeEnd("ctx");
pos;
value=$recv(value).__plus(step);
return value;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,7)});
//>>excludeEnd("ctx");
}));
};
$3=array;
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"to:by:",{stop:stop,step:step,array:array,value:value,pos:pos},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stop", "step"],
source: "to: stop by: step\x0a\x09| array value pos |\x0a\x09value := self.\x0a\x09array := Array new.\x0a\x09pos := 1.\x0a\x09step = 0 ifTrue: [ self error: 'step must be non-zero' ].\x0a\x09step < 0\x0a\x09\x09ifTrue: [ [ value >= stop ] whileTrue: [\x0a\x09\x09\x09\x09\x09array at: pos put: value.\x0a\x09\x09\x09\x09\x09pos := pos + 1.\x0a\x09\x09\x09\x09\x09value := value + step ]]\x0a\x09\x09ifFalse: [ [ value <= stop ] whileTrue: [\x0a\x09\x09\x09\x09\x09array at: pos put: value.\x0a\x09\x09\x09\x09pos := pos + 1.\x0a\x09\x09\x09\x09\x09value := value + step ]].\x0a\x09^ array",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["new", "ifTrue:", "=", "error:", "ifTrue:ifFalse:", "<", "whileTrue:", ">=", "at:put:", "+", "<="]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "to:by:do:",
protocol: 'enumerating',
fn: function (stop,step,aBlock){
var self=this;
var value;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
value=self;
$1=$recv(step).__eq((0));
if($core.assert($1)){
self._error_("step must be non-zero");
};
$2=$recv(step).__lt((0));
if($core.assert($2)){
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(value).__gt_eq(stop);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(aBlock)._value_(value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
value=$recv(value).__plus(step);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
return value;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whileTrue:"]=1;
//>>excludeEnd("ctx");
} else {
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(value).__lt_eq(stop);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(aBlock)._value_(value);
value=$recv(value).__plus(step);
return value;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,7)});
//>>excludeEnd("ctx");
}));
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"to:by:do:",{stop:stop,step:step,aBlock:aBlock,value:value},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stop", "step", "aBlock"],
source: "to: stop by: step do: aBlock\x0a\x09| value |\x0a\x09value := self.\x0a\x09step = 0 ifTrue: [ self error: 'step must be non-zero' ].\x0a\x09step < 0\x0a\x09\x09ifTrue: [ [ value >= stop ] whileTrue: [\x0a\x09\x09\x09\x09\x09aBlock value: value.\x0a\x09\x09\x09\x09\x09value := value + step ]]\x0a\x09\x09ifFalse: [ [ value <= stop ] whileTrue: [\x0a\x09\x09\x09\x09\x09aBlock value: value.\x0a\x09\x09\x09\x09\x09value := value + step ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "error:", "ifTrue:ifFalse:", "<", "whileTrue:", ">=", "value:", "+", "<="]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "to:do:",
protocol: 'enumerating',
fn: function (stop,aBlock){
var self=this;
var nextValue;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
nextValue=self;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(nextValue).__lt_eq(stop);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(aBlock)._value_(nextValue);
nextValue=$recv(nextValue).__plus((1));
return nextValue;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"to:do:",{stop:stop,aBlock:aBlock,nextValue:nextValue},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stop", "aBlock"],
source: "to: stop do: aBlock\x0a\x09\x22Evaluate aBlock for each number from self to aNumber.\x22\x0a\x09| nextValue |\x0a\x09nextValue := self.\x0a\x09[ nextValue <= stop ]\x0a\x09\x09whileTrue:\x0a\x09\x09\x09[ aBlock value: nextValue.\x0a\x09\x09\x09nextValue := nextValue + 1 ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["whileTrue:", "<=", "value:", "+"]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "truncated",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		if(self >= 0) {
			return Math.floor(self);
		} else {
			return Math.floor(self * (-1)) * (-1);
		};
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"truncated",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "truncated\x0a\x09<\x0a\x09\x09if(self >>= 0) {\x0a\x09\x09\x09return Math.floor(self);\x0a\x09\x09} else {\x0a\x09\x09\x09return Math.floor(self * (-1)) * (-1);\x0a\x09\x09};\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "|",
protocol: 'converting',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self | aNumber;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"|",{aNumber:aNumber},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "| aNumber\x0a\x09<return self | aNumber>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);


$core.addMethod(
$core.method({
selector: "e",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return Math.E;;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"e",{},$globals.Number.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "e\x0a\x09<return Math.E;>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number.klass);

$core.addMethod(
$core.method({
selector: "heliosClass",
protocol: 'helios',
fn: function (){
var self=this;
return "magnitude";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "heliosClass\x0a\x09^ 'magnitude'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number.klass);

$core.addMethod(
$core.method({
selector: "pi",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return Math.PI;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pi",{},$globals.Number.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pi\x0a\x09<return Math.PI>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number.klass);


$core.addClass('Point', $globals.Object, ['x', 'y'], 'Kernel-Objects');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Point.comment="I represent an x-y pair of numbers usually designating a geometric coordinate.\x0a\x0a## API\x0a\x0aInstances are traditionally created using the binary `#@` message to a number:\x0a\x0a\x09100@120\x0a\x0aPoints can then be arithmetically manipulated:\x0a\x0a\x09100@100 + (10@10)\x0a\x0a...or for example:\x0a\x0a\x09(100@100) * 2\x0a\x0a**NOTE:** Creating a point with a negative y-value will need a space after `@` in order to avoid a parsing error:\x0a\x0a\x09100@ -100 \x22but 100@-100 would not parse\x22";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "*",
protocol: 'arithmetic',
fn: function (aPoint){
var self=this;
function $Point(){return $globals.Point||(typeof Point=="undefined"?nil:Point)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$5,$4,$2,$7,$6,$1;
$3=self._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$5=$recv(aPoint)._asPoint();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asPoint"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._x();
$2=$recv($3).__star($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$7=self._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$6=$recv($7).__star($recv($recv(aPoint)._asPoint())._y());
$1=$recv($Point())._x_y_($2,$6);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"*",{aPoint:aPoint},$globals.Point)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "* aPoint\x0a\x09^ Point x: self x * aPoint asPoint x y: self y * aPoint asPoint y",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
messageSends: ["x:y:", "*", "x", "asPoint", "y"]
}),
$globals.Point);

$core.addMethod(
$core.method({
selector: "+",
protocol: 'arithmetic',
fn: function (aPoint){
var self=this;
function $Point(){return $globals.Point||(typeof Point=="undefined"?nil:Point)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$5,$4,$2,$7,$6,$1;
$3=self._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$5=$recv(aPoint)._asPoint();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asPoint"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._x();
$2=$recv($3).__plus($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$7=self._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$6=$recv($7).__plus($recv($recv(aPoint)._asPoint())._y());
$1=$recv($Point())._x_y_($2,$6);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"+",{aPoint:aPoint},$globals.Point)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "+ aPoint\x0a\x09^ Point x: self x + aPoint asPoint x y: self y + aPoint asPoint y",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
messageSends: ["x:y:", "+", "x", "asPoint", "y"]
}),
$globals.Point);

$core.addMethod(
$core.method({
selector: "-",
protocol: 'arithmetic',
fn: function (aPoint){
var self=this;
function $Point(){return $globals.Point||(typeof Point=="undefined"?nil:Point)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$5,$4,$2,$7,$6,$1;
$3=self._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$5=$recv(aPoint)._asPoint();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asPoint"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._x();
$2=$recv($3).__minus($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$7=self._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$6=$recv($7).__minus($recv($recv(aPoint)._asPoint())._y());
$1=$recv($Point())._x_y_($2,$6);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"-",{aPoint:aPoint},$globals.Point)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "- aPoint\x0a\x09^ Point x: self x - aPoint asPoint x y: self y - aPoint asPoint y",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
messageSends: ["x:y:", "-", "x", "asPoint", "y"]
}),
$globals.Point);

$core.addMethod(
$core.method({
selector: "/",
protocol: 'arithmetic',
fn: function (aPoint){
var self=this;
function $Point(){return $globals.Point||(typeof Point=="undefined"?nil:Point)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$5,$4,$2,$7,$6,$1;
$3=self._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$5=$recv(aPoint)._asPoint();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asPoint"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._x();
$2=$recv($3).__slash($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
$7=self._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$6=$recv($7).__slash($recv($recv(aPoint)._asPoint())._y());
$1=$recv($Point())._x_y_($2,$6);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"/",{aPoint:aPoint},$globals.Point)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "/ aPoint\x0a\x09^ Point x: self x / aPoint asPoint x y: self y / aPoint asPoint y",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
messageSends: ["x:y:", "/", "x", "asPoint", "y"]
}),
$globals.Point);

$core.addMethod(
$core.method({
selector: "<",
protocol: 'comparing',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$4,$1;
$3=self._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__lt($recv(aPoint)._x());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=self._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["y"]=1;
//>>excludeEnd("ctx");
return $recv($4).__lt($recv(aPoint)._y());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"<",{aPoint:aPoint},$globals.Point)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "< aPoint\x0a\x09^ self x < aPoint x and: [\x0a\x09\x09self y < aPoint y ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "<", "x", "y"]
}),
$globals.Point);

$core.addMethod(
$core.method({
selector: "<=",
protocol: 'comparing',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$4,$1;
$3=self._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__lt_eq($recv(aPoint)._x());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<="]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=self._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["y"]=1;
//>>excludeEnd("ctx");
return $recv($4).__lt_eq($recv(aPoint)._y());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"<=",{aPoint:aPoint},$globals.Point)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "<= aPoint\x0a\x09^ self x <= aPoint x and: [\x0a\x09\x09self y <= aPoint y ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "<=", "x", "y"]
}),
$globals.Point);

$core.addMethod(
$core.method({
selector: "=",
protocol: 'comparing',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$5,$4,$7,$6,$1;
$3=$recv(aPoint)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__eq(self._class());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=$recv(aPoint)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__eq(self._x());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=2;
//>>excludeEnd("ctx");
$7=$recv(aPoint)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$6=$recv($7).__eq(self._y());
return $recv($4).__and($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{aPoint:aPoint},$globals.Point)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "= aPoint\x0a\x09^ aPoint class = self class and: [\x0a\x09\x09(aPoint x = self x) & (aPoint y = self y) ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "=", "class", "&", "x", "y"]
}),
$globals.Point);

$core.addMethod(
$core.method({
selector: ">",
protocol: 'comparing',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$4,$1;
$3=self._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__gt($recv(aPoint)._x());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=self._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["y"]=1;
//>>excludeEnd("ctx");
return $recv($4).__gt($recv(aPoint)._y());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,">",{aPoint:aPoint},$globals.Point)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "> aPoint\x0a\x09^ self x > aPoint x and: [\x0a\x09\x09self y > aPoint y ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", ">", "x", "y"]
}),
$globals.Point);

$core.addMethod(
$core.method({
selector: ">=",
protocol: 'comparing',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$4,$1;
$3=self._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__gt_eq($recv(aPoint)._x());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">="]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=self._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["y"]=1;
//>>excludeEnd("ctx");
return $recv($4).__gt_eq($recv(aPoint)._y());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,">=",{aPoint:aPoint},$globals.Point)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: ">= aPoint\x0a\x09^ self x >= aPoint x and: [\x0a\x09\x09self y >= aPoint y ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", ">=", "x", "y"]
}),
$globals.Point);

$core.addMethod(
$core.method({
selector: "asPoint",
protocol: 'converting',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asPoint\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Point);

$core.addMethod(
$core.method({
selector: "dist:",
protocol: 'transforming',
fn: function (aPoint){
var self=this;
var dx,dy;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1;
dx=$recv($recv(aPoint)._x()).__minus(self["@x"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
dy=$recv($recv(aPoint)._y()).__minus(self["@y"]);
$3=$recv(dx).__star(dx);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__plus($recv(dy).__star(dy));
$1=$recv($2)._sqrt();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dist:",{aPoint:aPoint,dx:dx,dy:dy},$globals.Point)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "dist: aPoint \x0a\x09\x22Answer the distance between aPoint and the receiver.\x22\x0a\x09| dx dy |\x0a\x09dx := aPoint x - x.\x0a\x09dy := aPoint y - y.\x0a\x09^ (dx * dx + (dy * dy)) sqrt",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["-", "x", "y", "sqrt", "+", "*"]
}),
$globals.Point);

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
$recv(self["@x"])._printOn_(aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printOn:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_("@");
$1=$recv($recv(self["@y"])._notNil())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@y"])._negative();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
$recv(aStream)._space();
};
$recv(self["@y"])._printOn_(aStream);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.Point)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09\x22Print receiver in classic x@y notation.\x22\x0a\x0a\x09x printOn: aStream.\x0a\x09\x0a\x09aStream nextPutAll: '@'.\x0a\x09(y notNil and: [ y negative ]) ifTrue: [\x0a\x09\x09\x09\x22Avoid ambiguous @- construct\x22\x0a\x09\x09\x09aStream space ].\x0a\x09\x0a\x09y printOn: aStream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printOn:", "nextPutAll:", "ifTrue:", "and:", "notNil", "negative", "space"]
}),
$globals.Point);

$core.addMethod(
$core.method({
selector: "translateBy:",
protocol: 'transforming',
fn: function (delta){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv($recv(delta)._x()).__plus(self["@x"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__at($recv($recv(delta)._y()).__plus(self["@y"]));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"translateBy:",{delta:delta},$globals.Point)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["delta"],
source: "translateBy: delta\x0a\x09\x22Answer a Point translated by delta (an instance of Point).\x22\x0a\x09^ (delta x + x) @ (delta y + y)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["@", "+", "x", "y"]
}),
$globals.Point);

$core.addMethod(
$core.method({
selector: "x",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@x"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "x\x0a\x09^ x",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Point);

$core.addMethod(
$core.method({
selector: "x:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
self["@x"]=aNumber;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "x: aNumber\x0a\x09x := aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Point);

$core.addMethod(
$core.method({
selector: "y",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@y"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "y\x0a\x09^ y",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Point);

$core.addMethod(
$core.method({
selector: "y:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
self["@y"]=aNumber;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "y: aNumber\x0a\x09y := aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Point);


$core.addMethod(
$core.method({
selector: "heliosClass",
protocol: 'helios',
fn: function (){
var self=this;
return "magnitude";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "heliosClass\x0a\x09^ 'magnitude'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Point.klass);

$core.addMethod(
$core.method({
selector: "x:y:",
protocol: 'instance creation',
fn: function (aNumber,anotherNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._x_(aNumber);
$recv($2)._y_(anotherNumber);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"x:y:",{aNumber:aNumber,anotherNumber:anotherNumber},$globals.Point.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber", "anotherNumber"],
source: "x: aNumber y: anotherNumber\x0a\x09^ self new\x0a\x09\x09x: aNumber;\x0a\x09\x09y: anotherNumber;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["x:", "new", "y:", "yourself"]
}),
$globals.Point.klass);


$core.addClass('Random', $globals.Object, [], 'Kernel-Objects');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Random.comment="I an used to generate a random number and I am implemented as a trivial wrapper around javascript `Math.random()`.\x0a\x0a## API\x0a\x0aThe typical use case it to use the `#next` method like the following:\x0a\x0a\x09Random new next\x0a\x0aThis will return a float x where x < 1 and x > 0. If you want a random integer from 1 to 10 you can use `#atRandom`\x0a\x0a\x0910 atRandom\x0a\x0aA random number in a specific interval can be obtained with the following:\x0a\x0a\x09(3 to: 7) atRandom\x0a\x0aBe aware that `#to:` does not create an Interval as in other Smalltalk implementations but in fact an `Array` of numbers, so it's better to use:\x0a\x0a\x095 atRandom + 2\x0a\x0aSince `#atRandom` is implemented in `SequencableCollection` you can easy pick an element at random:\x0a\x0a\x09#('a' 'b' 'c') atRandom\x0a\x0aAs well as letter from a `String`:\x0a\x0a\x09'abc' atRandom\x0a\x0aSince Amber does not have Characters this will return a `String` of length 1 like for example `'b'`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "next",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return Math.random();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"next",{},$globals.Random)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "next\x0a\x09<return Math.random()>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Random);

$core.addMethod(
$core.method({
selector: "next:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv((1)._to_(anInteger))._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"next:",{anInteger:anInteger},$globals.Random)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "next: anInteger\x0a\x09^ (1 to: anInteger) collect: [ :each | self next ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "to:", "next"]
}),
$globals.Random);



$core.addClass('UndefinedObject', $globals.Object, [], 'Kernel-Objects');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.UndefinedObject.comment="I describe the behavior of my sole instance, `nil`. `nil` represents a prior value for variables that have not been initialized, or for results which are meaningless.\x0a\x0a`nil` is the Smalltalk equivalent of the `undefined` JavaScript object.\x0a\x0a__note:__ When sending messages to the `undefined` JavaScript object, it will be replaced by `nil`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "asJSON",
protocol: 'converting',
fn: function (){
var self=this;
var $1;
$1=null;
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJSON\x0a\x09^ null",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.UndefinedObject);

$core.addMethod(
$core.method({
selector: "deepCopy",
protocol: 'copying',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deepCopy\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.UndefinedObject);

$core.addMethod(
$core.method({
selector: "ifNil:",
protocol: 'testing',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._ifNil_ifNotNil_(aBlock,(function(){

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifNil:",{aBlock:aBlock},$globals.UndefinedObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "ifNil: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ self ifNil: aBlock ifNotNil: []",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:"]
}),
$globals.UndefinedObject);

$core.addMethod(
$core.method({
selector: "ifNil:ifNotNil:",
protocol: 'testing',
fn: function (aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aBlock)._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifNil:ifNotNil:",{aBlock:aBlock,anotherBlock:anotherBlock},$globals.UndefinedObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "ifNil: aBlock ifNotNil: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ aBlock value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value"]
}),
$globals.UndefinedObject);

$core.addMethod(
$core.method({
selector: "ifNotNil:",
protocol: 'testing',
fn: function (aBlock){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "ifNotNil: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.UndefinedObject);

$core.addMethod(
$core.method({
selector: "ifNotNil:ifNil:",
protocol: 'testing',
fn: function (aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(anotherBlock)._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:ifNil:",{aBlock:aBlock,anotherBlock:anotherBlock},$globals.UndefinedObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "ifNotNil: aBlock ifNil: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ anotherBlock value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value"]
}),
$globals.UndefinedObject);

$core.addMethod(
$core.method({
selector: "isImmutable",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isImmutable\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.UndefinedObject);

$core.addMethod(
$core.method({
selector: "isNil",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isNil\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.UndefinedObject);

$core.addMethod(
$core.method({
selector: "notNil",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "notNil\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.UndefinedObject);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_("nil");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.UndefinedObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: 'nil'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:"]
}),
$globals.UndefinedObject);

$core.addMethod(
$core.method({
selector: "shallowCopy",
protocol: 'copying',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shallowCopy\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.UndefinedObject);

$core.addMethod(
$core.method({
selector: "subclass:instanceVariableNames:",
protocol: 'class creation',
fn: function (aString,anotherString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._subclass_instanceVariableNames_package_(aString,anotherString,nil);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:",{aString:aString,anotherString:anotherString},$globals.UndefinedObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anotherString"],
source: "subclass: aString instanceVariableNames: anotherString\x0a\x09\x22Kept for file-in compatibility.\x22\x0a\x09^ self subclass: aString instanceVariableNames: anotherString package: nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclass:instanceVariableNames:package:"]
}),
$globals.UndefinedObject);

$core.addMethod(
$core.method({
selector: "subclass:instanceVariableNames:category:",
protocol: 'class creation',
fn: function (aString,aString2,aString3){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._subclass_instanceVariableNames_package_(aString,aString2,aString3);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:category:",{aString:aString,aString2:aString2,aString3:aString3},$globals.UndefinedObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aString2", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 category: aString3\x0a\x09\x22Kept for file-in compatibility.\x22\x0a\x09^ self subclass: aString instanceVariableNames: aString2 package: aString3",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclass:instanceVariableNames:package:"]
}),
$globals.UndefinedObject);

$core.addMethod(
$core.method({
selector: "subclass:instanceVariableNames:classVariableNames:poolDictionaries:category:",
protocol: 'class creation',
fn: function (aString,aString2,classVars,pools,aString3){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._subclass_instanceVariableNames_package_(aString,aString2,aString3);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:classVariableNames:poolDictionaries:category:",{aString:aString,aString2:aString2,classVars:classVars,pools:pools,aString3:aString3},$globals.UndefinedObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aString2", "classVars", "pools", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 classVariableNames: classVars poolDictionaries: pools category: aString3\x0a\x09\x22Kept for file-in compatibility. ignores class variables and pools.\x22\x0a\x09^ self subclass: aString instanceVariableNames: aString2 package: aString3",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclass:instanceVariableNames:package:"]
}),
$globals.UndefinedObject);

$core.addMethod(
$core.method({
selector: "subclass:instanceVariableNames:package:",
protocol: 'class creation',
fn: function (aString,aString2,aString3){
var self=this;
function $ClassBuilder(){return $globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($ClassBuilder())._new())._superclass_subclass_instanceVariableNames_package_(self,$recv(aString)._asString(),aString2,aString3);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:package:",{aString:aString,aString2:aString2,aString3:aString3},$globals.UndefinedObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aString2", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 package: aString3\x0a\x09^ ClassBuilder new\x0a\x09\x09superclass: self subclass: aString asString instanceVariableNames: aString2 package: aString3",
referencedClasses: ["ClassBuilder"],
//>>excludeEnd("ide");
messageSends: ["superclass:subclass:instanceVariableNames:package:", "new", "asString"]
}),
$globals.UndefinedObject);


$core.addMethod(
$core.method({
selector: "new",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("You cannot create new instances of UndefinedObject. Use nil");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.UndefinedObject.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09\x09self error: 'You cannot create new instances of UndefinedObject. Use nil'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.UndefinedObject.klass);

});
