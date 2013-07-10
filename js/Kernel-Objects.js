smalltalk.addPackage('Kernel-Objects');
smalltalk.addClass('Object', smalltalk.nil, [], 'Kernel-Objects');
smalltalk.Object.comment="**I am the root of the Smalltalk class system**. All classes in the system are subclasses of me.\x0a\x0aI provide default behavior common to all normal objects, such as:\x0a\x0a- accessing\x0a- copying\x0a- comparison\x0a- error handling\x0a- message sending\x0a- reflection\x0a\x0aAlso utility messages that all objects should respond to are defined here.\x0a\x0aI have no instance variable.\x0a\x0a##Access\x0a\x0aInstance variables can be accessed with `#instVarAt:` and `#instVarAt:put:`. `#instanceVariableNames` answers a collection of all instance variable names.\x0aAccessing JavaScript properties of an object is done through `#basicAt:`, `#basicAt:put:` and `basicDelete:`.\x0a\x0a##Copying\x0a\x0aCopying an object is handled by `#copy` and `#deepCopy`. The first one performs a shallow copy of the receiver, while the second one performs a deep copy.\x0aThe hook method `#postCopy` can be overriden in subclasses to copy fields as necessary to complete the full copy. It will be sent by the copy of the receiver.\x0a\x0a##Comparison\x0a\x0aI understand equality `#=` and identity `#==` comparison.\x0a\x0a##Error handling\x0a\x0a- `#halt` is the typical message to use for inserting breakpoints during debugging.\x0a- `#error:` throws a generic error exception\x0a- `#doesNotUnderstand:` handles the fact that there was an attempt to send the given message to the receiver but the receiver does not understand this message.\x0a\x09Overriding this message can be useful to implement proxies for example.";
smalltalk.addMethod(
smalltalk.method({
selector: "->",
category: 'converting',
fn: function (anObject){
var self=this;
function $Association(){return smalltalk.Association||(typeof Association=="undefined"?nil:Association)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Association())._key_value_(self,anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"->",{anObject:anObject},smalltalk.Object)})},
args: ["anObject"],
source: "-> anObject\x0a\x09^Association key: self value: anObject",
messageSends: ["key:value:"],
referencedClasses: ["Association"]
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__eq_eq(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"=",{anObject:anObject},smalltalk.Object)})},
args: ["anObject"],
source: "= anObject\x0a\x09^self == anObject",
messageSends: ["=="],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "==",
category: 'comparing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._identityHash()).__eq(_st(anObject)._identityHash());
return $1;
}, function($ctx1) {$ctx1.fill(self,"==",{anObject:anObject},smalltalk.Object)})},
args: ["anObject"],
source: "== anObject\x0a\x09^self identityHash = anObject identityHash",
messageSends: ["=", "identityHash"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function (){
var self=this;
var variables;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
variables=_st($HashedCollection())._new();
_st(_st(self._class())._allInstanceVariableNames())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(variables)._at_put_(each,_st(self._instVarAt_(each))._asJSON());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=variables;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{variables:variables},smalltalk.Object)})},
args: [],
source: "asJSON\x0a\x09| variables |\x0a\x09variables := HashedCollection new.\x0a\x09self class allInstanceVariableNames do: [:each |\x0a\x09\x09variables at: each put: (self instVarAt: each) asJSON].\x0a\x09^variables",
messageSends: ["new", "do:", "at:put:", "asJSON", "instVarAt:", "allInstanceVariableNames", "class"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSONString",
category: 'converting',
fn: function (){
var self=this;
function $JSON(){return smalltalk.JSON||(typeof JSON=="undefined"?nil:JSON)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($JSON())._stringify_(self._asJSON());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSONString",{},smalltalk.Object)})},
args: [],
source: "asJSONString\x0a\x09^JSON stringify: self asJSON",
messageSends: ["stringify:", "asJSON"],
referencedClasses: ["JSON"]
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "asJavascript",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJavascript",{},smalltalk.Object)})},
args: [],
source: "asJavascript\x0a\x09^self asString",
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "asString",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._printString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.Object)})},
args: [],
source: "asString\x0a\x09^self printString",
messageSends: ["printString"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "basicAt:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self[aString];
return self}, function($ctx1) {$ctx1.fill(self,"basicAt:",{aString:aString},smalltalk.Object)})},
args: ["aString"],
source: "basicAt: aString\x0a\x09<return self[aString]>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "basicAt:put:",
category: 'accessing',
fn: function (aString,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self[aString] = anObject;
return self}, function($ctx1) {$ctx1.fill(self,"basicAt:put:",{aString:aString,anObject:anObject},smalltalk.Object)})},
args: ["aString", "anObject"],
source: "basicAt: aString put: anObject\x0a\x09<return self[aString] = anObject>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "basicDelete:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
delete self[aString]; return aString;
return self}, function($ctx1) {$ctx1.fill(self,"basicDelete:",{aString:aString},smalltalk.Object)})},
args: ["aString"],
source: "basicDelete: aString\x0a\x09<delete self[aString]; return aString>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "basicPerform:",
category: 'message handling',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicPerform_withArguments_(aString,[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicPerform:",{aString:aString},smalltalk.Object)})},
args: ["aString"],
source: "basicPerform: aString\x0a\x09^self basicPerform: aString withArguments: #()",
messageSends: ["basicPerform:withArguments:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "basicPerform:withArguments:",
category: 'message handling',
fn: function (aString,aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self[aString].apply(self, aCollection);;
return self}, function($ctx1) {$ctx1.fill(self,"basicPerform:withArguments:",{aString:aString,aCollection:aCollection},smalltalk.Object)})},
args: ["aString", "aCollection"],
source: "basicPerform: aString withArguments: aCollection\x0a\x09<return self[aString].apply(self, aCollection);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "class",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.klass;
return self}, function($ctx1) {$ctx1.fill(self,"class",{},smalltalk.Object)})},
args: [],
source: "class\x0a\x09<return self.klass>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "copy",
category: 'copying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._shallowCopy())._postCopy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"copy",{},smalltalk.Object)})},
args: [],
source: "copy\x0a\x09^self shallowCopy postCopy",
messageSends: ["postCopy", "shallowCopy"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "deepCopy",
category: 'copying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var copy = self.klass._new();
		for(var i in self) {
		if(/^@.+/.test(i)) {
			copy[i] = self[i]._deepCopy();
		}
		}
		return copy;
	;
return self}, function($ctx1) {$ctx1.fill(self,"deepCopy",{},smalltalk.Object)})},
args: [],
source: "deepCopy\x0a\x09<\x0a\x09\x09var copy = self.klass._new();\x0a\x09\x09for(var i in self) {\x0a\x09\x09if(/^@.+/.test(i)) {\x0a\x09\x09\x09copy[i] = self[i]._deepCopy();\x0a\x09\x09}\x0a\x09\x09}\x0a\x09\x09return copy;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "deprecatedAPI",
category: 'error handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(console)._warn_(_st(_st(_st(_st(smalltalk.getThisContext()._home())._asString()).__comma(" is deprecated! (in ")).__comma(_st(_st(smalltalk.getThisContext()._home())._home())._asString())).__comma(")"));
return self}, function($ctx1) {$ctx1.fill(self,"deprecatedAPI",{},smalltalk.Object)})},
args: [],
source: "deprecatedAPI\x0a\x09\x22Just a simple way to deprecate methods.\x0a\x09#deprecatedAPI is in the 'error handling' protocol even if it doesn't throw an error,\x0a\x09but it could in the future.\x22\x0a\x09console warn: thisContext home asString, ' is deprecated! (in ', thisContext home home asString, ')'",
messageSends: ["warn:", ",", "asString", "home"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "doesNotUnderstand:",
category: 'error handling',
fn: function (aMessage){
var self=this;
function $MessageNotUnderstood(){return smalltalk.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($MessageNotUnderstood())._new();
_st($1)._receiver_(self);
_st($1)._message_(aMessage);
$2=_st($1)._signal();
return self}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},smalltalk.Object)})},
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09MessageNotUnderstood new\x0a\x09\x09receiver: self;\x0a\x09\x09message: aMessage;\x0a\x09\x09signal",
messageSends: ["receiver:", "new", "message:", "signal"],
referencedClasses: ["MessageNotUnderstood"]
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "error:",
category: 'error handling',
fn: function (aString){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
_st($Error())._signal_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"error:",{aString:aString},smalltalk.Object)})},
args: ["aString"],
source: "error: aString\x0a\x09Error signal: aString",
messageSends: ["signal:"],
referencedClasses: ["Error"]
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "halt",
category: 'error handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("Halt encountered");
return self}, function($ctx1) {$ctx1.fill(self,"halt",{},smalltalk.Object)})},
args: [],
source: "halt\x0a\x09self error: 'Halt encountered'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "identityHash",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

	var hash=self.identityHash;
	if (hash) return hash;
	hash=smalltalk.nextId();
	Object.defineProperty(self, 'identityHash', {value:hash});
	return hash;
	;
return self}, function($ctx1) {$ctx1.fill(self,"identityHash",{},smalltalk.Object)})},
args: [],
source: "identityHash\x0a\x09<\x0a\x09var hash=self.identityHash;\x0a\x09if (hash) return hash;\x0a\x09hash=smalltalk.nextId();\x0a\x09Object.defineProperty(self, 'identityHash', {value:hash});\x0a\x09return hash;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNil:",
category: 'testing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNil:",{aBlock:aBlock},smalltalk.Object)})},
args: ["aBlock"],
source: "ifNil: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNil:ifNotNil:",
category: 'testing',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anotherBlock)._value_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNil:ifNotNil:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.Object)})},
args: ["aBlock", "anotherBlock"],
source: "ifNil: aBlock ifNotNil: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^anotherBlock value: self",
messageSends: ["value:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNotNil:",
category: 'testing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aBlock)._value_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:",{aBlock:aBlock},smalltalk.Object)})},
args: ["aBlock"],
source: "ifNotNil: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^aBlock value: self",
messageSends: ["value:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNotNil:ifNil:",
category: 'testing',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aBlock)._value_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:ifNil:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.Object)})},
args: ["aBlock", "anotherBlock"],
source: "ifNotNil: aBlock ifNil: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^aBlock value: self",
messageSends: ["value:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Object)})},
args: [],
source: "initialize",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "inspect",
category: 'inspecting',
fn: function (){
var self=this;
function $InspectorHandler(){return smalltalk.InspectorHandler||(typeof InspectorHandler=="undefined"?nil:InspectorHandler)}
return smalltalk.withContext(function($ctx1) { 
_st($InspectorHandler())._inspect_(self);
return self}, function($ctx1) {$ctx1.fill(self,"inspect",{},smalltalk.Object)})},
args: [],
source: "inspect\x0a\x09InspectorHandler inspect: self",
messageSends: ["inspect:"],
referencedClasses: ["InspectorHandler"]
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectOn:",
category: 'inspecting',
fn: function (anInspector){
var self=this;
var variables;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
variables=_st($Dictionary())._new();
_st(variables)._at_put_("#self",self);
_st(_st(self._class())._allInstanceVariableNames())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(variables)._at_put_(each,self._instVarAt_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=anInspector;
_st($1)._setLabel_(self._printString());
$2=_st($1)._setVariables_(variables);
return self}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},smalltalk.Object)})},
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self.\x0a\x09self class allInstanceVariableNames do: [:each |\x0a\x09\x09variables at: each put: (self instVarAt: each)].\x0a\x09anInspector\x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: variables",
messageSends: ["new", "at:put:", "do:", "instVarAt:", "allInstanceVariableNames", "class", "setLabel:", "printString", "setVariables:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "instVarAt:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self['@'+aString] ;
return self}, function($ctx1) {$ctx1.fill(self,"instVarAt:",{aString:aString},smalltalk.Object)})},
args: ["aString"],
source: "instVarAt: aString\x0a\x09< return self['@'+aString] >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "instVarAt:put:",
category: 'accessing',
fn: function (aString,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@' + aString] = anObject ;
return self}, function($ctx1) {$ctx1.fill(self,"instVarAt:put:",{aString:aString,anObject:anObject},smalltalk.Object)})},
args: ["aString", "anObject"],
source: "instVarAt: aString put: anObject\x0a\x09< self['@' + aString] = anObject >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isBehavior",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isBehavior",{},smalltalk.Object)})},
args: [],
source: "isBehavior\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isBoolean",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isBoolean",{},smalltalk.Object)})},
args: [],
source: "isBoolean\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isClass",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isClass",{},smalltalk.Object)})},
args: [],
source: "isClass\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isCompiledMethod",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isCompiledMethod",{},smalltalk.Object)})},
args: [],
source: "isCompiledMethod\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isImmutable",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isImmutable",{},smalltalk.Object)})},
args: [],
source: "isImmutable\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isKindOf:",
category: 'testing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._isMemberOf_(aClass);
if(smalltalk.assert($2)){
$1=true;
} else {
$1=_st(self._class())._inheritsFrom_(aClass);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"isKindOf:",{aClass:aClass},smalltalk.Object)})},
args: ["aClass"],
source: "isKindOf: aClass\x0a\x09^(self isMemberOf: aClass)\x0a\x09\x09ifTrue: [true]\x0a\x09\x09ifFalse: [self class inheritsFrom: aClass]",
messageSends: ["ifTrue:ifFalse:", "inheritsFrom:", "class", "isMemberOf:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isMemberOf:",
category: 'testing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class()).__eq(aClass);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isMemberOf:",{aClass:aClass},smalltalk.Object)})},
args: ["aClass"],
source: "isMemberOf: aClass\x0a\x09^self class = aClass",
messageSends: ["=", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isMetaclass",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isMetaclass",{},smalltalk.Object)})},
args: [],
source: "isMetaclass\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isNil",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isNil",{},smalltalk.Object)})},
args: [],
source: "isNil\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isNumber",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isNumber",{},smalltalk.Object)})},
args: [],
source: "isNumber\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isPackage",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isPackage",{},smalltalk.Object)})},
args: [],
source: "isPackage\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isParseFailure",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isParseFailure",{},smalltalk.Object)})},
args: [],
source: "isParseFailure\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isString",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isString",{},smalltalk.Object)})},
args: [],
source: "isString\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isSymbol",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isSymbol",{},smalltalk.Object)})},
args: [],
source: "isSymbol\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "notNil",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._isNil())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"notNil",{},smalltalk.Object)})},
args: [],
source: "notNil\x0a\x09^self isNil not",
messageSends: ["not", "isNil"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "perform:",
category: 'message handling',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._perform_withArguments_(aString,[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"perform:",{aString:aString},smalltalk.Object)})},
args: ["aString"],
source: "perform: aString\x0a\x09^self perform: aString withArguments: #()",
messageSends: ["perform:withArguments:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "perform:withArguments:",
category: 'message handling',
fn: function (aString,aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.send(self, aString._asSelector(), aCollection);
return self}, function($ctx1) {$ctx1.fill(self,"perform:withArguments:",{aString:aString,aCollection:aCollection},smalltalk.Object)})},
args: ["aString", "aCollection"],
source: "perform: aString withArguments: aCollection\x0a\x09<return smalltalk.send(self, aString._asSelector(), aCollection)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "postCopy",
category: 'copying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"postCopy",{},smalltalk.Object)})},
args: [],
source: "postCopy",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
$1=aStream;
$3=_st(_st(_st(self._class())._name())._first())._isVowel();
if(smalltalk.assert($3)){
$2="an ";
} else {
$2="a ";
};
_st($1)._nextPutAll_($2);
_st(aStream)._nextPutAll_(_st(self._class())._name());
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Object)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09\x22Append to the aStream, a string representing the receiver.\x22\x0a\x09\x0a\x09aStream nextPutAll: (self class name first isVowel\x0a\x09\x09ifTrue: [ 'an ' ]\x0a\x09\x09ifFalse: [ 'a ' ]).\x0a\x09aStream nextPutAll: self class name",
messageSends: ["nextPutAll:", "ifTrue:ifFalse:", "isVowel", "first", "name", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
return self._printOn_(stream);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{},smalltalk.Object)})},
args: [],
source: "printString\x0a\x09\x22Answer a String representation of the receiver.\x22\x0a\x0a\x09^ String streamContents: [ :stream | self printOn: stream ]",
messageSends: ["streamContents:", "printOn:"],
referencedClasses: ["String"]
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "putOn:",
category: 'streaming',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPut_(self);
return self}, function($ctx1) {$ctx1.fill(self,"putOn:",{aStream:aStream},smalltalk.Object)})},
args: ["aStream"],
source: "putOn: aStream\x0a\x09aStream nextPut: self",
messageSends: ["nextPut:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "respondsTo:",
category: 'testing',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._canUnderstand_(aSelector);
return $1;
}, function($ctx1) {$ctx1.fill(self,"respondsTo:",{aSelector:aSelector},smalltalk.Object)})},
args: ["aSelector"],
source: "respondsTo: aSelector\x0a\x09^self class canUnderstand: aSelector",
messageSends: ["canUnderstand:", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "shallowCopy",
category: 'copying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var copy = self.klass._new();
		for(var i in self) {
		if(/^@.+/.test(i)) {
			copy[i] = self[i];
		}
		}
		return copy;
	;
return self}, function($ctx1) {$ctx1.fill(self,"shallowCopy",{},smalltalk.Object)})},
args: [],
source: "shallowCopy\x0a\x09<\x0a\x09\x09var copy = self.klass._new();\x0a\x09\x09for(var i in self) {\x0a\x09\x09if(/^@.+/.test(i)) {\x0a\x09\x09\x09copy[i] = self[i];\x0a\x09\x09}\x0a\x09\x09}\x0a\x09\x09return copy;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldNotImplement",
category: 'error handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("This method should not be implemented in ".__comma(_st(self._class())._name()));
return self}, function($ctx1) {$ctx1.fill(self,"shouldNotImplement",{},smalltalk.Object)})},
args: [],
source: "shouldNotImplement\x0a\x09self error: 'This method should not be implemented in ', self class name",
messageSends: ["error:", ",", "name", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("Object not indexable");
return self}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.Object)})},
args: [],
source: "size\x0a\x09self error: 'Object not indexable'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "subclassResponsibility",
category: 'error handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("This method is a responsibility of a subclass");
return self}, function($ctx1) {$ctx1.fill(self,"subclassResponsibility",{},smalltalk.Object)})},
args: [],
source: "subclassResponsibility\x0a\x09self error: 'This method is a responsibility of a subclass'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "test",
category: 'converting',
fn: function (){
var self=this;
var a;
return smalltalk.withContext(function($ctx1) { 
a=(1);
self._halt();
return self}, function($ctx1) {$ctx1.fill(self,"test",{a:a},smalltalk.Object)})},
args: [],
source: "test\x0a\x09| a |\x0a\x09a := 1.\x0a\x09self halt",
messageSends: ["halt"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "throw:",
category: 'error handling',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 throw anObject ;
return self}, function($ctx1) {$ctx1.fill(self,"throw:",{anObject:anObject},smalltalk.Object)})},
args: ["anObject"],
source: "throw: anObject\x0a\x09< throw anObject >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "try:catch:",
category: 'error handling',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
try{return aBlock._value()} catch(e) {return anotherBlock._value_(e)};
return self}, function($ctx1) {$ctx1.fill(self,"try:catch:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.Object)})},
args: ["aBlock", "anotherBlock"],
source: "try: aBlock catch: anotherBlock\x0a\x09<try{return aBlock._value()} catch(e) {return anotherBlock._value_(e)}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.valueOf();
return self}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.Object)})},
args: [],
source: "value\x0a\x09<return self.valueOf()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "yourself",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"yourself",{},smalltalk.Object)})},
args: [],
source: "yourself\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "~=",
category: 'comparing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self.__eq(anObject)).__eq(false);
return $1;
}, function($ctx1) {$ctx1.fill(self,"~=",{anObject:anObject},smalltalk.Object)})},
args: ["anObject"],
source: "~= anObject\x0a\x09^(self = anObject) = false",
messageSends: ["="],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "~~",
category: 'comparing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self.__eq_eq(anObject)).__eq(false);
return $1;
}, function($ctx1) {$ctx1.fill(self,"~~",{anObject:anObject},smalltalk.Object)})},
args: ["anObject"],
source: "~~ anObject\x0a\x09^(self == anObject) = false",
messageSends: ["=", "=="],
referencedClasses: []
}),
smalltalk.Object);


smalltalk.addMethod(
smalltalk.method({
selector: "heliosClass",
category: 'helios',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "class";
}, function($ctx1) {$ctx1.fill(self,"heliosClass",{},smalltalk.Object.klass)})},
args: [],
source: "heliosClass\x0a\x09\x22Should be an Helios extension. Unfortunately, since helios can browse remote\x0a\x09environments, we can't extend base classes\x22\x0a\x09\x0a\x09^ 'class'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Object.klass)})},
args: [],
source: "initialize\x0a\x09\x22no op\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object.klass);


smalltalk.addClass('Boolean', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.Boolean.comment="I define the protocol for logic testing operations and conditional control structures for the logical values (see the `controlling` protocol).\x0a\x0aI have two instances, `true` and `false`.\x0a\x0aI am directly mapped to JavaScript Boolean. The `true` and `false` objects are the JavaScript boolean objects.\x0a\x0a## Usage Example:\x0a\x0a    aBoolean not ifTrue: [ ... ] ifFalse: [ ... ]";
smalltalk.addMethod(
smalltalk.method({
selector: "&",
category: 'controlling',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		if(self == true) {
		return aBoolean;
		} else {
		return false;
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"&",{aBoolean:aBoolean},smalltalk.Boolean)})},
args: ["aBoolean"],
source: "& aBoolean\x0a\x09<\x0a\x09\x09if(self == true) {\x0a\x09\x09return aBoolean;\x0a\x09\x09} else {\x0a\x09\x09return false;\x0a\x09\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		if(! aBoolean._isBoolean || ! aBoolean._isBoolean()) {
			return false;
		}
		return Boolean(self == true) == aBoolean
	;
return self}, function($ctx1) {$ctx1.fill(self,"=",{aBoolean:aBoolean},smalltalk.Boolean)})},
args: ["aBoolean"],
source: "= aBoolean\x0a\x09<\x0a\x09\x09if(! aBoolean._isBoolean || ! aBoolean._isBoolean()) {\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09\x09return Boolean(self == true) == aBoolean\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "==",
category: 'comparing',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__eq(aBoolean);
return $1;
}, function($ctx1) {$ctx1.fill(self,"==",{aBoolean:aBoolean},smalltalk.Boolean)})},
args: ["aBoolean"],
source: "== aBoolean\x0a\x09^self = aBoolean",
messageSends: ["="],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "and:",
category: 'controlling',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self.__eq(true);
$1=_st($2)._ifTrue_ifFalse_(aBlock,(function(){
return smalltalk.withContext(function($ctx2) {
return false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"and:",{aBlock:aBlock},smalltalk.Boolean)})},
args: ["aBlock"],
source: "and: aBlock\x0a\x09^self = true\x0a\x09\x09ifTrue: aBlock\x0a\x09\x09ifFalse: [false]",
messageSends: ["ifTrue:ifFalse:", "="],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "asBit",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self;
if(smalltalk.assert($2)){
$1=(1);
} else {
$1=(0);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"asBit",{},smalltalk.Boolean)})},
args: [],
source: "asBit\x0a\x09^ self ifTrue: [ 1 ] ifFalse: [ 0 ]",
messageSends: ["ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},smalltalk.Boolean)})},
args: [],
source: "asJSON\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "asString",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self.toString() ;
return self}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.Boolean)})},
args: [],
source: "asString\x0a\x09< return self.toString() >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "deepCopy",
category: 'copying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{},smalltalk.Boolean)})},
args: [],
source: "deepCopy\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "ifFalse:",
category: 'controlling',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self;
$1=_st($2)._ifTrue_ifFalse_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifFalse:",{aBlock:aBlock},smalltalk.Boolean)})},
args: ["aBlock"],
source: "ifFalse: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^self ifTrue: [] ifFalse: aBlock",
messageSends: ["ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "ifFalse:ifTrue:",
category: 'controlling',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self;
$1=_st($2)._ifTrue_ifFalse_(anotherBlock,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifFalse:ifTrue:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.Boolean)})},
args: ["aBlock", "anotherBlock"],
source: "ifFalse: aBlock ifTrue: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^self ifTrue: anotherBlock ifFalse: aBlock",
messageSends: ["ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "ifTrue:",
category: 'controlling',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self;
$1=_st($2)._ifTrue_ifFalse_(aBlock,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifTrue:",{aBlock:aBlock},smalltalk.Boolean)})},
args: ["aBlock"],
source: "ifTrue: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^self ifTrue: aBlock ifFalse: []",
messageSends: ["ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "ifTrue:ifFalse:",
category: 'controlling',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		if(self == true) {
		return aBlock._value();
		} else {
		return anotherBlock._value();
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"ifTrue:ifFalse:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.Boolean)})},
args: ["aBlock", "anotherBlock"],
source: "ifTrue: aBlock ifFalse: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09<\x0a\x09\x09if(self == true) {\x0a\x09\x09return aBlock._value();\x0a\x09\x09} else {\x0a\x09\x09return anotherBlock._value();\x0a\x09\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "isBoolean",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isBoolean",{},smalltalk.Boolean)})},
args: [],
source: "isBoolean\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "isImmutable",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isImmutable",{},smalltalk.Boolean)})},
args: [],
source: "isImmutable\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "not",
category: 'controlling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__eq(false);
return $1;
}, function($ctx1) {$ctx1.fill(self,"not",{},smalltalk.Boolean)})},
args: [],
source: "not\x0a\x09^self = false",
messageSends: ["="],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "or:",
category: 'controlling',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self.__eq(true);
$1=_st($2)._ifTrue_ifFalse_((function(){
return smalltalk.withContext(function($ctx2) {
return true;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"or:",{aBlock:aBlock},smalltalk.Boolean)})},
args: ["aBlock"],
source: "or: aBlock\x0a\x09^self = true\x0a\x09\x09ifTrue: [true]\x0a\x09\x09ifFalse: aBlock",
messageSends: ["ifTrue:ifFalse:", "="],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_(self._asString());
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Boolean)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: self asString",
messageSends: ["nextPutAll:", "asString"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "shallowCopy",
category: 'copying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"shallowCopy",{},smalltalk.Boolean)})},
args: [],
source: "shallowCopy\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "|",
category: 'controlling',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		if(self == true) {
		return true;
		} else {
		return aBoolean;
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"|",{aBoolean:aBoolean},smalltalk.Boolean)})},
args: ["aBoolean"],
source: "| aBoolean\x0a\x09<\x0a\x09\x09if(self == true) {\x0a\x09\x09return true;\x0a\x09\x09} else {\x0a\x09\x09return aBoolean;\x0a\x09\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);



smalltalk.addClass('Date', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.Date.comment="I am used to work with both dates and times. Therefore `Date today` and `Date now` are both valid in\x0aAmber and answer the same date object.\x0a\x0aDate directly maps to the `Date()` JavaScript constructor, and Amber date objects are JavaScript date objects.\x0a\x0a## API\x0a\x0aThe class-side `instance creation` protocol contains some convenience methods for creating date/time objects such as `#fromSeconds:`.\x0a\x0aArithmetic and comparison is supported (see the `comparing` and `arithmetic` protocols).\x0a\x0aThe `converting` protocol provides convenience methods for various convertions (to numbers, strings, etc.).";
smalltalk.addMethod(
smalltalk.method({
selector: "+",
category: 'arithmetic',
fn: function (aDate){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self + aDate;
return self}, function($ctx1) {$ctx1.fill(self,"+",{aDate:aDate},smalltalk.Date)})},
args: ["aDate"],
source: "+ aDate\x0a\x09<return self + aDate>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "-",
category: 'arithmetic',
fn: function (aDate){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self - aDate;
return self}, function($ctx1) {$ctx1.fill(self,"-",{aDate:aDate},smalltalk.Date)})},
args: ["aDate"],
source: "- aDate\x0a\x09<return self - aDate>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "<",
category: 'comparing',
fn: function (aDate){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self < aDate;
return self}, function($ctx1) {$ctx1.fill(self,"<",{aDate:aDate},smalltalk.Date)})},
args: ["aDate"],
source: "< aDate\x0a\x09<return self < aDate>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "<=",
category: 'comparing',
fn: function (aDate){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self <= aDate;
return self}, function($ctx1) {$ctx1.fill(self,"<=",{aDate:aDate},smalltalk.Date)})},
args: ["aDate"],
source: "<= aDate\x0a\x09<return self <= aDate>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: ">",
category: 'comparing',
fn: function (aDate){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self > aDate;
return self}, function($ctx1) {$ctx1.fill(self,">",{aDate:aDate},smalltalk.Date)})},
args: ["aDate"],
source: "> aDate\x0a\x09<return self >> aDate>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: ">=",
category: 'comparing',
fn: function (aDate){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self >= aDate;
return self}, function($ctx1) {$ctx1.fill(self,">=",{aDate:aDate},smalltalk.Date)})},
args: ["aDate"],
source: ">= aDate\x0a\x09<return self >>= aDate>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "asDateString",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.toDateString();
return self}, function($ctx1) {$ctx1.fill(self,"asDateString",{},smalltalk.Date)})},
args: [],
source: "asDateString\x0a\x09<return self.toDateString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "asLocaleString",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.toLocaleString();
return self}, function($ctx1) {$ctx1.fill(self,"asLocaleString",{},smalltalk.Date)})},
args: [],
source: "asLocaleString\x0a\x09<return self.toLocaleString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "asMilliseconds",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._time();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asMilliseconds",{},smalltalk.Date)})},
args: [],
source: "asMilliseconds\x0a\x09^self time",
messageSends: ["time"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "asNumber",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._asMilliseconds();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asNumber",{},smalltalk.Date)})},
args: [],
source: "asNumber\x0a\x09^self asMilliseconds",
messageSends: ["asMilliseconds"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "asString",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.toString();
return self}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.Date)})},
args: [],
source: "asString\x0a\x09<return self.toString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "asTimeString",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.toTimeString();
return self}, function($ctx1) {$ctx1.fill(self,"asTimeString",{},smalltalk.Date)})},
args: [],
source: "asTimeString\x0a\x09<return self.toTimeString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "day",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._dayOfWeek();
return $1;
}, function($ctx1) {$ctx1.fill(self,"day",{},smalltalk.Date)})},
args: [],
source: "day\x0a\x09^self dayOfWeek",
messageSends: ["dayOfWeek"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "day:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._dayOfWeek_(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"day:",{aNumber:aNumber},smalltalk.Date)})},
args: ["aNumber"],
source: "day: aNumber\x0a\x09self dayOfWeek: aNumber",
messageSends: ["dayOfWeek:"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "dayOfMonth",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.getDate();
return self}, function($ctx1) {$ctx1.fill(self,"dayOfMonth",{},smalltalk.Date)})},
args: [],
source: "dayOfMonth\x0a\x09<return self.getDate()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "dayOfMonth:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.setDate(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"dayOfMonth:",{aNumber:aNumber},smalltalk.Date)})},
args: ["aNumber"],
source: "dayOfMonth: aNumber\x0a\x09<self.setDate(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "dayOfWeek",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.getDay() + 1;
return self}, function($ctx1) {$ctx1.fill(self,"dayOfWeek",{},smalltalk.Date)})},
args: [],
source: "dayOfWeek\x0a\x09<return self.getDay() + 1>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "dayOfWeek:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.setDay(aNumber - 1);
return self}, function($ctx1) {$ctx1.fill(self,"dayOfWeek:",{aNumber:aNumber},smalltalk.Date)})},
args: ["aNumber"],
source: "dayOfWeek: aNumber\x0a\x09<return self.setDay(aNumber - 1)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "hours",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.getHours();
return self}, function($ctx1) {$ctx1.fill(self,"hours",{},smalltalk.Date)})},
args: [],
source: "hours\x0a\x09<return self.getHours()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "hours:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.setHours(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"hours:",{aNumber:aNumber},smalltalk.Date)})},
args: ["aNumber"],
source: "hours: aNumber\x0a\x09<self.setHours(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "milliseconds",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.getMilliseconds();
return self}, function($ctx1) {$ctx1.fill(self,"milliseconds",{},smalltalk.Date)})},
args: [],
source: "milliseconds\x0a\x09<return self.getMilliseconds()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "milliseconds:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.setMilliseconds(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"milliseconds:",{aNumber:aNumber},smalltalk.Date)})},
args: ["aNumber"],
source: "milliseconds: aNumber\x0a\x09<self.setMilliseconds(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "minutes",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.getMinutes();
return self}, function($ctx1) {$ctx1.fill(self,"minutes",{},smalltalk.Date)})},
args: [],
source: "minutes\x0a\x09<return self.getMinutes()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "minutes:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.setMinutes(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"minutes:",{aNumber:aNumber},smalltalk.Date)})},
args: ["aNumber"],
source: "minutes: aNumber\x0a\x09<self.setMinutes(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "month",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.getMonth() + 1;
return self}, function($ctx1) {$ctx1.fill(self,"month",{},smalltalk.Date)})},
args: [],
source: "month\x0a\x09<return self.getMonth() + 1>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "month:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.setMonth(aNumber - 1);
return self}, function($ctx1) {$ctx1.fill(self,"month:",{aNumber:aNumber},smalltalk.Date)})},
args: ["aNumber"],
source: "month: aNumber\x0a\x09<self.setMonth(aNumber - 1)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_(self._asString());
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Date)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: self asString",
messageSends: ["nextPutAll:", "asString"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "seconds",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.getSeconds();
return self}, function($ctx1) {$ctx1.fill(self,"seconds",{},smalltalk.Date)})},
args: [],
source: "seconds\x0a\x09<return self.getSeconds()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "seconds:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.setSeconds(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"seconds:",{aNumber:aNumber},smalltalk.Date)})},
args: ["aNumber"],
source: "seconds: aNumber\x0a\x09<self.setSeconds(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "time",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.getTime();
return self}, function($ctx1) {$ctx1.fill(self,"time",{},smalltalk.Date)})},
args: [],
source: "time\x0a\x09<return self.getTime()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "time:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.setTime(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"time:",{aNumber:aNumber},smalltalk.Date)})},
args: ["aNumber"],
source: "time: aNumber\x0a\x09<self.setTime(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "year",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.getFullYear();
return self}, function($ctx1) {$ctx1.fill(self,"year",{},smalltalk.Date)})},
args: [],
source: "year\x0a\x09<return self.getFullYear()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "year:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.setFullYear(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"year:",{aNumber:aNumber},smalltalk.Date)})},
args: ["aNumber"],
source: "year: aNumber\x0a\x09<self.setFullYear(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);


smalltalk.addMethod(
smalltalk.method({
selector: "fromMilliseconds:",
category: 'instance creation',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._new_(aNumber);
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromMilliseconds:",{aNumber:aNumber},smalltalk.Date.klass)})},
args: ["aNumber"],
source: "fromMilliseconds: aNumber\x0a\x09^self new: aNumber",
messageSends: ["new:"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromSeconds:",
category: 'instance creation',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._fromMilliseconds_(_st(aNumber).__star((1000)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromSeconds:",{aNumber:aNumber},smalltalk.Date.klass)})},
args: ["aNumber"],
source: "fromSeconds: aNumber\x0a\x09^self fromMilliseconds: aNumber * 1000",
messageSends: ["fromMilliseconds:", "*"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromString:",
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._new_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString},smalltalk.Date.klass)})},
args: ["aString"],
source: "fromString: aString\x0a\x09\x22Example: Date fromString('2011/04/15 00:00:00')\x22\x0a\x09^self new: aString",
messageSends: ["new:"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "heliosClass",
category: 'helios',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "magnitude";
}, function($ctx1) {$ctx1.fill(self,"heliosClass",{},smalltalk.Date.klass)})},
args: [],
source: "heliosClass\x0a\x09^ 'magnitude'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "millisecondsToRun:",
category: 'instance creation',
fn: function (aBlock){
var self=this;
var t;
function $Date(){return smalltalk.Date||(typeof Date=="undefined"?nil:Date)}
return smalltalk.withContext(function($ctx1) { 
var $1;
t=_st($Date())._now();
_st(aBlock)._value();
$1=_st(_st($Date())._now()).__minus(t);
return $1;
}, function($ctx1) {$ctx1.fill(self,"millisecondsToRun:",{aBlock:aBlock,t:t},smalltalk.Date.klass)})},
args: ["aBlock"],
source: "millisecondsToRun: aBlock\x0a\x09| t |\x0a\x09t := Date now.\x0a\x09aBlock value.\x0a\x09^Date now - t",
messageSends: ["now", "value", "-"],
referencedClasses: ["Date"]
}),
smalltalk.Date.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new:",
category: 'instance creation',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new Date(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"new:",{anObject:anObject},smalltalk.Date.klass)})},
args: ["anObject"],
source: "new: anObject\x0a\x09<return new Date(anObject)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "now",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._today();
return $1;
}, function($ctx1) {$ctx1.fill(self,"now",{},smalltalk.Date.klass)})},
args: [],
source: "now\x0a\x09^self today",
messageSends: ["today"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "today",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"today",{},smalltalk.Date.klass)})},
args: [],
source: "today\x0a\x09^self new",
messageSends: ["new"],
referencedClasses: []
}),
smalltalk.Date.klass);


smalltalk.addClass('Environment', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.Environment.comment="I provide an unified entry point to manipulate Amber packages, classes and methods.\x0a\x0aTypical use cases include IDEs, remote access and restricting browsing.";
smalltalk.addMethod(
smalltalk.method({
selector: "addInstVarNamed:to:",
category: 'compiling',
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(aClass)._instanceVariableNames())._copy();
_st($1)._add_(aString);
$2=_st($1)._yourself();
_st(self._classBuilder())._addSubclassOf_named_instanceVariableNames_package_(_st(aClass)._superclass(),_st(aClass)._name(),$2,_st(_st(aClass)._package())._name());
return self}, function($ctx1) {$ctx1.fill(self,"addInstVarNamed:to:",{aString:aString,aClass:aClass},smalltalk.Environment)})},
args: ["aString", "aClass"],
source: "addInstVarNamed: aString to: aClass\x0a\x09self classBuilder\x0a\x09\x09addSubclassOf: aClass superclass \x0a\x09\x09named: aClass name \x0a\x09\x09instanceVariableNames: (aClass instanceVariableNames copy add: aString; yourself)\x0a\x09\x09package: aClass package name",
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "superclass", "name", "add:", "copy", "instanceVariableNames", "yourself", "package", "classBuilder"],
referencedClasses: []
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "allSelectors",
category: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st($Smalltalk())._current())._at_("allSelectors"))._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"allSelectors",{},smalltalk.Environment)})},
args: [],
source: "allSelectors\x0a\x09^ (Smalltalk current at: 'allSelectors') value",
messageSends: ["value", "at:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "availableClassNames",
category: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st($Smalltalk())._current())._classes())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._name();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"availableClassNames",{},smalltalk.Environment)})},
args: [],
source: "availableClassNames\x0a\x09^ Smalltalk current classes \x0a\x09\x09collect: [ :each | each name ]",
messageSends: ["collect:", "name", "classes", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "availablePackageNames",
category: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st($Smalltalk())._current())._packages())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._name();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"availablePackageNames",{},smalltalk.Environment)})},
args: [],
source: "availablePackageNames\x0a\x09^ Smalltalk current packages \x0a\x09\x09collect: [ :each | each name ]",
messageSends: ["collect:", "name", "packages", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "availableProtocolsFor:",
category: 'accessing',
fn: function (aClass){
var self=this;
var protocols;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
protocols=_st(aClass)._protocols();
$1=_st(aClass)._superclass();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(protocols)._addAll_(self._availableProtocolsFor_(_st(aClass)._superclass()));
};
$2=_st(_st(protocols)._asSet())._asArray();
return $2;
}, function($ctx1) {$ctx1.fill(self,"availableProtocolsFor:",{aClass:aClass,protocols:protocols},smalltalk.Environment)})},
args: ["aClass"],
source: "availableProtocolsFor: aClass\x0a\x09| protocols |\x0a\x09\x0a\x09protocols := aClass protocols.\x0a\x09aClass superclass ifNotNil: [ protocols addAll: (self availableProtocolsFor: aClass superclass) ].\x0a\x09^ protocols asSet asArray",
messageSends: ["protocols", "ifNotNil:", "addAll:", "availableProtocolsFor:", "superclass", "asArray", "asSet"],
referencedClasses: []
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "classBuilder",
category: 'accessing',
fn: function (){
var self=this;
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($ClassBuilder())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"classBuilder",{},smalltalk.Environment)})},
args: [],
source: "classBuilder\x0a\x09^ ClassBuilder new",
messageSends: ["new"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "classNamed:",
category: 'accessing',
fn: function (aString){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st($Smalltalk())._current())._at_(_st(aString)._asSymbol());
if(($receiver = $2) == nil || $receiver == undefined){
$1=self._error_("Invalid class name");
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"classNamed:",{aString:aString},smalltalk.Environment)})},
args: ["aString"],
source: "classNamed: aString\x0a\x09^ (Smalltalk current at: aString asSymbol)\x0a\x09\x09ifNil: [ self error: 'Invalid class name' ]",
messageSends: ["ifNil:", "error:", "at:", "asSymbol", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "classes",
category: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Smalltalk())._current())._classes();
return $1;
}, function($ctx1) {$ctx1.fill(self,"classes",{},smalltalk.Environment)})},
args: [],
source: "classes\x0a\x09^ Smalltalk current classes",
messageSends: ["classes", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPackage:",
category: 'actions',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aPackage)._commit();
return self}, function($ctx1) {$ctx1.fill(self,"commitPackage:",{aPackage:aPackage},smalltalk.Environment)})},
args: ["aPackage"],
source: "commitPackage: aPackage\x0a\x09aPackage commit",
messageSends: ["commit"],
referencedClasses: []
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "compileClassComment:for:",
category: 'compiling',
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aClass)._comment_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"compileClassComment:for:",{aString:aString,aClass:aClass},smalltalk.Environment)})},
args: ["aString", "aClass"],
source: "compileClassComment: aString for: aClass\x0a\x09aClass comment: aString",
messageSends: ["comment:"],
referencedClasses: []
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "compileClassDefinition:",
category: 'compiling',
fn: function (aString){
var self=this;
function $DoIt(){return smalltalk.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
return smalltalk.withContext(function($ctx1) { 
self._eval_on_(aString,_st($DoIt())._new());
return self}, function($ctx1) {$ctx1.fill(self,"compileClassDefinition:",{aString:aString},smalltalk.Environment)})},
args: ["aString"],
source: "compileClassDefinition: aString\x0a\x09self eval: aString on: DoIt new",
messageSends: ["eval:on:", "new"],
referencedClasses: ["DoIt"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "compileMethod:for:protocol:",
category: 'compiling',
fn: function (sourceCode,class_,protocol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(class_)._compile_category_(sourceCode,protocol);
return $1;
}, function($ctx1) {$ctx1.fill(self,"compileMethod:for:protocol:",{sourceCode:sourceCode,class_:class_,protocol:protocol},smalltalk.Environment)})},
args: ["sourceCode", "class", "protocol"],
source: "compileMethod: sourceCode for: class protocol: protocol\x0a\x09^ class\x0a\x09\x09compile: sourceCode\x0a\x09\x09category: protocol",
messageSends: ["compile:category:"],
referencedClasses: []
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "copyClass:to:",
category: 'actions',
fn: function (aClass,aClassName){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Smalltalk())._current())._at_(aClassName);
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
self._error_(_st("A class named ".__comma(aClassName)).__comma(" already exists"));
};
_st(_st($ClassBuilder())._new())._copyClass_named_(aClass,aClassName);
return self}, function($ctx1) {$ctx1.fill(self,"copyClass:to:",{aClass:aClass,aClassName:aClassName},smalltalk.Environment)})},
args: ["aClass", "aClassName"],
source: "copyClass: aClass to: aClassName\x0a\x09(Smalltalk current at: aClassName)\x0a\x09\x09ifNotNil: [ self error: 'A class named ', aClassName, ' already exists' ].\x0a\x09\x09\x0a\x09ClassBuilder new copyClass: aClass named: aClassName",
messageSends: ["ifNotNil:", "error:", ",", "at:", "current", "copyClass:named:", "new"],
referencedClasses: ["Smalltalk", "ClassBuilder"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "eval:on:",
category: 'actions',
fn: function (aString,aReceiver){
var self=this;
var compiler;
function $Compiler(){return smalltalk.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
compiler=_st($Compiler())._new();
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(compiler)._parseExpression_(aString);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_($Error(),(function(ex){
return smalltalk.withContext(function($ctx2) {
$1=_st(window)._alert_(_st(ex)._messageText());
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})}));
$2=_st(compiler)._evaluateExpression_on_(aString,aReceiver);
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"eval:on:",{aString:aString,aReceiver:aReceiver,compiler:compiler},smalltalk.Environment)})},
args: ["aString", "aReceiver"],
source: "eval: aString on: aReceiver\x0a\x09| compiler |\x0a\x09compiler := Compiler new.\x0a\x09[ compiler parseExpression: aString ] on: Error do: [ :ex |\x0a\x09\x09^ window alert: ex messageText ].\x0a\x09^ compiler evaluateExpression: aString on: aReceiver",
messageSends: ["new", "on:do:", "alert:", "messageText", "parseExpression:", "evaluateExpression:on:"],
referencedClasses: ["Compiler", "Error"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluate:on:do:",
category: 'error handling',
fn: function (aBlock,anErrorClass,exceptionBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._try_catch_(aBlock,(function(exception){
return smalltalk.withContext(function($ctx2) {
$1=_st(exception)._isKindOf_(self._classNamed_(_st(anErrorClass)._name()));
if(smalltalk.assert($1)){
return _st(exceptionBlock)._value_(exception);
} else {
return _st(exception)._signal();
};
}, function($ctx2) {$ctx2.fillBlock({exception:exception},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"evaluate:on:do:",{aBlock:aBlock,anErrorClass:anErrorClass,exceptionBlock:exceptionBlock},smalltalk.Environment)})},
args: ["aBlock", "anErrorClass", "exceptionBlock"],
source: "evaluate: aBlock on: anErrorClass do: exceptionBlock\x0a\x09\x22Evaluate a block and catch exceptions happening on the environment stack\x22\x0a\x09\x0a\x09self try: aBlock catch: [ :exception | \x0a\x09\x09(exception isKindOf: (self classNamed: anErrorClass name))\x0a\x09\x09\x09ifTrue: [ exceptionBlock value: exception ]\x0a \x09\x09\x09ifFalse: [ exception signal ] ]",
messageSends: ["try:catch:", "ifTrue:ifFalse:", "value:", "signal", "isKindOf:", "classNamed:", "name"],
referencedClasses: []
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "inspect:",
category: 'actions',
fn: function (anObject){
var self=this;
function $InspectorHandler(){return smalltalk.InspectorHandler||(typeof InspectorHandler=="undefined"?nil:InspectorHandler)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($InspectorHandler())._inspector())._inspect_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},smalltalk.Environment)})},
args: ["anObject"],
source: "inspect: anObject\x0a\x09InspectorHandler inspector inspect: anObject",
messageSends: ["inspect:", "inspector"],
referencedClasses: ["InspectorHandler"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "moveClass:toPackage:",
category: 'actions',
fn: function (aClass,aPackageName){
var self=this;
var package_;
function $Package(){return smalltalk.Package||(typeof Package=="undefined"?nil:Package)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
package_=_st($Package())._named_(aPackageName);
$1=package_;
if(($receiver = $1) == nil || $receiver == undefined){
self._error_("Invalid package name");
} else {
$1;
};
$2=_st(package_).__eq_eq(_st(aClass)._package());
if(smalltalk.assert($2)){
$3=self;
return $3;
};
_st(aClass)._package_(package_);
return self}, function($ctx1) {$ctx1.fill(self,"moveClass:toPackage:",{aClass:aClass,aPackageName:aPackageName,package_:package_},smalltalk.Environment)})},
args: ["aClass", "aPackageName"],
source: "moveClass: aClass toPackage: aPackageName\x0a\x09| package |\x0a\x09\x0a\x09package := Package named: aPackageName.\x0a\x09package ifNil: [ self error: 'Invalid package name' ].\x0a\x09package == aClass package ifTrue: [ ^ self ].\x0a\x09\x0a\x09aClass package: package",
messageSends: ["named:", "ifNil:", "error:", "ifTrue:", "==", "package", "package:"],
referencedClasses: ["Package"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "moveMethod:toClass:",
category: 'actions',
fn: function (aMethod,aClassName){
var self=this;
var destinationClass;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
destinationClass=_st(_st($Smalltalk())._current())._at_(_st(aClassName)._asSymbol());
$1=destinationClass;
if(($receiver = $1) == nil || $receiver == undefined){
self._error_("Invalid class name");
} else {
$1;
};
$2=_st(destinationClass).__eq_eq(_st(aMethod)._methodClass());
if(smalltalk.assert($2)){
$3=self;
return $3;
};
_st(destinationClass)._compile_category_(_st(aMethod)._source(),_st(aMethod)._protocol());
_st(_st(aMethod)._methodClass())._removeCompiledMethod_(aMethod);
return self}, function($ctx1) {$ctx1.fill(self,"moveMethod:toClass:",{aMethod:aMethod,aClassName:aClassName,destinationClass:destinationClass},smalltalk.Environment)})},
args: ["aMethod", "aClassName"],
source: "moveMethod: aMethod toClass: aClassName\x0a\x09| destinationClass |\x0a\x09\x0a\x09destinationClass := Smalltalk current at: aClassName asSymbol.\x0a\x09destinationClass ifNil: [ self error: 'Invalid class name' ].\x0a\x09destinationClass == aMethod methodClass ifTrue: [ ^ self ].\x0a\x09\x0a\x09destinationClass \x0a\x09\x09compile: aMethod source\x0a\x09\x09category: aMethod protocol.\x0a\x09aMethod methodClass \x0a\x09\x09removeCompiledMethod: aMethod",
messageSends: ["at:", "asSymbol", "current", "ifNil:", "error:", "ifTrue:", "==", "methodClass", "compile:category:", "source", "protocol", "removeCompiledMethod:"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "moveMethod:toProtocol:",
category: 'actions',
fn: function (aMethod,aProtocol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aMethod)._category_(aProtocol);
return self}, function($ctx1) {$ctx1.fill(self,"moveMethod:toProtocol:",{aMethod:aMethod,aProtocol:aProtocol},smalltalk.Environment)})},
args: ["aMethod", "aProtocol"],
source: "moveMethod: aMethod toProtocol: aProtocol\x0a\x09aMethod category: aProtocol",
messageSends: ["category:"],
referencedClasses: []
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "packages",
category: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Smalltalk())._current())._packages();
return $1;
}, function($ctx1) {$ctx1.fill(self,"packages",{},smalltalk.Environment)})},
args: [],
source: "packages\x0a\x09^ Smalltalk current packages",
messageSends: ["packages", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "registerErrorHandler:",
category: 'actions',
fn: function (anErrorHandler){
var self=this;
function $ErrorHandler(){return smalltalk.ErrorHandler||(typeof ErrorHandler=="undefined"?nil:ErrorHandler)}
return smalltalk.withContext(function($ctx1) { 
_st($ErrorHandler())._setCurrent_(anErrorHandler);
return self}, function($ctx1) {$ctx1.fill(self,"registerErrorHandler:",{anErrorHandler:anErrorHandler},smalltalk.Environment)})},
args: ["anErrorHandler"],
source: "registerErrorHandler: anErrorHandler\x0a\x09ErrorHandler setCurrent: anErrorHandler",
messageSends: ["setCurrent:"],
referencedClasses: ["ErrorHandler"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "registerInspector:",
category: 'actions',
fn: function (anInspector){
var self=this;
function $InspectorHandler(){return smalltalk.InspectorHandler||(typeof InspectorHandler=="undefined"?nil:InspectorHandler)}
return smalltalk.withContext(function($ctx1) { 
_st($InspectorHandler())._register_(anInspector);
return self}, function($ctx1) {$ctx1.fill(self,"registerInspector:",{anInspector:anInspector},smalltalk.Environment)})},
args: ["anInspector"],
source: "registerInspector: anInspector\x0a\x09InspectorHandler register: anInspector",
messageSends: ["register:"],
referencedClasses: ["InspectorHandler"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "registerProgressHandler:",
category: 'actions',
fn: function (aProgressHandler){
var self=this;
function $ProgressHandler(){return smalltalk.ProgressHandler||(typeof ProgressHandler=="undefined"?nil:ProgressHandler)}
return smalltalk.withContext(function($ctx1) { 
_st($ProgressHandler())._setCurrent_(aProgressHandler);
return self}, function($ctx1) {$ctx1.fill(self,"registerProgressHandler:",{aProgressHandler:aProgressHandler},smalltalk.Environment)})},
args: ["aProgressHandler"],
source: "registerProgressHandler: aProgressHandler\x0a\x09ProgressHandler setCurrent: aProgressHandler",
messageSends: ["setCurrent:"],
referencedClasses: ["ProgressHandler"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "removeClass:",
category: 'actions',
fn: function (aClass){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($Smalltalk())._current())._removeClass_(aClass);
return self}, function($ctx1) {$ctx1.fill(self,"removeClass:",{aClass:aClass},smalltalk.Environment)})},
args: ["aClass"],
source: "removeClass: aClass\x0a\x09Smalltalk current removeClass: aClass",
messageSends: ["removeClass:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMethod:",
category: 'actions',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aMethod)._methodClass())._removeCompiledMethod_(aMethod);
return self}, function($ctx1) {$ctx1.fill(self,"removeMethod:",{aMethod:aMethod},smalltalk.Environment)})},
args: ["aMethod"],
source: "removeMethod: aMethod\x0a\x09aMethod methodClass removeCompiledMethod: aMethod",
messageSends: ["removeCompiledMethod:", "methodClass"],
referencedClasses: []
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "removeProtocol:from:",
category: 'actions',
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(aClass)._methods())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._protocol()).__eq(aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(aClass)._removeCompiledMethod_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeProtocol:from:",{aString:aString,aClass:aClass},smalltalk.Environment)})},
args: ["aString", "aClass"],
source: "removeProtocol: aString from: aClass\x0a\x09(aClass methods\x0a\x09\x09select: [ :each | each protocol = aString ])\x0a\x09\x09do: [ :each | aClass removeCompiledMethod: each ]",
messageSends: ["do:", "removeCompiledMethod:", "select:", "=", "protocol", "methods"],
referencedClasses: []
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "renameClass:to:",
category: 'actions',
fn: function (aClass,aClassName){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Smalltalk())._current())._at_(aClassName);
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
self._error_(_st("A class named ".__comma(aClassName)).__comma(" already exists"));
};
_st(_st($ClassBuilder())._new())._renameClass_to_(aClass,aClassName);
return self}, function($ctx1) {$ctx1.fill(self,"renameClass:to:",{aClass:aClass,aClassName:aClassName},smalltalk.Environment)})},
args: ["aClass", "aClassName"],
source: "renameClass: aClass to: aClassName\x0a\x09(Smalltalk current at: aClassName)\x0a\x09\x09ifNotNil: [ self error: 'A class named ', aClassName, ' already exists' ].\x0a\x09\x09\x0a\x09ClassBuilder new renameClass: aClass to: aClassName",
messageSends: ["ifNotNil:", "error:", ",", "at:", "current", "renameClass:to:", "new"],
referencedClasses: ["Smalltalk", "ClassBuilder"]
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "renameProtocol:to:in:",
category: 'actions',
fn: function (aString,anotherString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(aClass)._methods())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._protocol()).__eq(aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._protocol_(anotherString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renameProtocol:to:in:",{aString:aString,anotherString:anotherString,aClass:aClass},smalltalk.Environment)})},
args: ["aString", "anotherString", "aClass"],
source: "renameProtocol: aString to: anotherString in: aClass\x0a\x09(aClass methods\x0a\x09\x09select: [ :each | each protocol = aString ])\x0a\x09\x09do: [ :each | each protocol: anotherString ]",
messageSends: ["do:", "protocol:", "select:", "=", "protocol", "methods"],
referencedClasses: []
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "setClassCommentOf:to:",
category: 'actions',
fn: function (aClass,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aClass)._comment_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"setClassCommentOf:to:",{aClass:aClass,aString:aString},smalltalk.Environment)})},
args: ["aClass", "aString"],
source: "setClassCommentOf: aClass to: aString\x0a\x09aClass comment: aString",
messageSends: ["comment:"],
referencedClasses: []
}),
smalltalk.Environment);

smalltalk.addMethod(
smalltalk.method({
selector: "systemAnnouncer",
category: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st($Smalltalk())._current())._at_("SystemAnnouncer"))._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"systemAnnouncer",{},smalltalk.Environment)})},
args: [],
source: "systemAnnouncer\x0a\x09^ (Smalltalk current at: #SystemAnnouncer) current",
messageSends: ["current", "at:"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Environment);



smalltalk.addClass('InspectorHandler', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.InspectorHandler.comment="I am responsible for inspecting object.\x0a\x0aMy class-side `inspector` inst var holds the current inspector I'm delegating object inspection to.\x0a\x0aThe default inspector object is the transcript.";

smalltalk.InspectorHandler.klass.iVarNames = ['inspector'];
smalltalk.addMethod(
smalltalk.method({
selector: "inspect:",
category: 'registration',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._inspector())._inspect_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},smalltalk.InspectorHandler.klass)})},
args: ["anObject"],
source: "inspect: anObject\x0a\x09^ self inspector inspect: anObject",
messageSends: ["inspect:", "inspector"],
referencedClasses: []
}),
smalltalk.InspectorHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inspector",
category: 'accessing',
fn: function (){
var self=this;
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@inspector"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@inspector"]=$Transcript();
$1=self["@inspector"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"inspector",{},smalltalk.InspectorHandler.klass)})},
args: [],
source: "inspector\x0a\x09^ inspector ifNil: [ inspector := Transcript ]",
messageSends: ["ifNil:"],
referencedClasses: ["Transcript"]
}),
smalltalk.InspectorHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "register:",
category: 'registration',
fn: function (anInspector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@inspector"]=anInspector;
return self}, function($ctx1) {$ctx1.fill(self,"register:",{anInspector:anInspector},smalltalk.InspectorHandler.klass)})},
args: ["anInspector"],
source: "register: anInspector\x0a\x09inspector := anInspector",
messageSends: [],
referencedClasses: []
}),
smalltalk.InspectorHandler.klass);


smalltalk.addClass('JSObjectProxy', smalltalk.Object, ['jsObject'], 'Kernel-Objects');
smalltalk.JSObjectProxy.comment="I handle sending messages to JavaScript objects, making  JavaScript object accessing from Amber fully transparent.\x0aMy instances make intensive use of `#doesNotUnderstand:`.\x0a\x0aMy instances are automatically created by Amber whenever a message is sent to a JavaScript object.\x0a\x0a## Usage examples\x0a\x0aJSObjectProxy objects are instanciated by Amber when a Smalltalk message is sent to a JavaScript object.\x0a\x0a\x09window alert: 'hello world'.\x0a\x09window inspect.\x0a\x09(window jQuery: 'body') append: 'hello world'\x0a\x0aAmber messages sends are converted to JavaScript function calls or object property access _(in this order)_. If n one of them match, a `MessageNotUnderstood` error will be thrown.\x0a\x0a## Message conversion rules\x0a\x0a- `someUser name` becomes `someUser.name`\x0a- `someUser name: 'John'` becomes `someUser name = \x22John\x22`\x0a- `console log: 'hello world'` becomes `console.log('hello world')`\x0a- `(window jQuery: 'foo') css: 'background' color: 'red'` becomes `window.jQuery('foo').css('background', 'red')`\x0a\x0a__Note:__ For keyword-based messages, only the first keyword is kept: `window foo: 1 bar: 2` is equivalent to `window foo: 1 baz: 2`.";
smalltalk.addMethod(
smalltalk.method({
selector: "addObjectVariablesTo:",
category: 'proxy',
fn: function (aDictionary){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		for(var i in self['@jsObject']) {
			aDictionary._at_put_(i, self['@jsObject'][i]);
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"addObjectVariablesTo:",{aDictionary:aDictionary},smalltalk.JSObjectProxy)})},
args: ["aDictionary"],
source: "addObjectVariablesTo: aDictionary\x0a\x09<\x0a\x09\x09for(var i in self['@jsObject']) {\x0a\x09\x09\x09aDictionary._at_put_(i, self['@jsObject'][i]);\x0a\x09\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "at:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self['@jsObject'][aString];
return self}, function($ctx1) {$ctx1.fill(self,"at:",{aString:aString},smalltalk.JSObjectProxy)})},
args: ["aString"],
source: "at: aString\x0a\x09<return self['@jsObject'][aString]>",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsent:",
category: 'accessing',
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var obj = self['@jsObject'];
		return aString in obj ? obj[aString] : aBlock._value();
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aString:aString,aBlock:aBlock},smalltalk.JSObjectProxy)})},
args: ["aString", "aBlock"],
source: "at: aString ifAbsent: aBlock\x0a\x09\x22return the aString property or evaluate aBlock if the property is not defined on the object\x22\x0a\x09<\x0a\x09\x09var obj = self['@jsObject'];\x0a\x09\x09return aString in obj ? obj[aString] : aBlock._value();\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:",
category: 'accessing',
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var obj = self['@jsObject'];
		return aString in obj ? aBlock._value_(obj[aString]) : nil;
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:",{aString:aString,aBlock:aBlock},smalltalk.JSObjectProxy)})},
args: ["aString", "aBlock"],
source: "at: aString ifPresent: aBlock\x0a\x09\x22return the evaluation of aBlock with the value if the property is defined or return nil\x22\x0a\x09<\x0a\x09\x09var obj = self['@jsObject'];\x0a\x09\x09return aString in obj ? aBlock._value_(obj[aString]) : nil;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:ifAbsent:",
category: 'accessing',
fn: function (aString,aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var obj = self['@jsObject'];
		return aString in obj ? aBlock._value_(obj[aString]) : anotherBlock._value();
	;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{aString:aString,aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.JSObjectProxy)})},
args: ["aString", "aBlock", "anotherBlock"],
source: "at: aString ifPresent: aBlock ifAbsent: anotherBlock\x0a\x09\x22return the evaluation of aBlock with the value if the property is defined\x0a\x09or return value of anotherBlock\x22\x0a\x09<\x0a\x09\x09var obj = self['@jsObject'];\x0a\x09\x09return aString in obj ? aBlock._value_(obj[aString]) : anotherBlock._value();\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
category: 'accessing',
fn: function (aString,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self['@jsObject'][aString] = anObject;
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{aString:aString,anObject:anObject},smalltalk.JSObjectProxy)})},
args: ["aString", "anObject"],
source: "at: aString put: anObject\x0a\x09<self['@jsObject'][aString] = anObject>",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "doesNotUnderstand:",
category: 'proxy',
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._lookupProperty_(_st(_st(aMessage)._selector())._asJavaScriptSelector());
if(($receiver = $2) == nil || $receiver == undefined){
$1=smalltalk.Object.fn.prototype._doesNotUnderstand_.apply(_st(self), [aMessage]);
} else {
var jsSelector;
jsSelector=$receiver;
$1=self._forwardMessage_withArguments_(jsSelector,_st(aMessage)._arguments());
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},smalltalk.JSObjectProxy)})},
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09^ (self lookupProperty: aMessage selector asJavaScriptSelector)\x0a\x09\x09ifNil: [ super doesNotUnderstand: aMessage ]\x0a\x09\x09ifNotNil: [ :jsSelector | \x0a\x09\x09\x09self \x0a\x09\x09\x09\x09forwardMessage: jsSelector \x0a\x09\x09\x09\x09withArguments: aMessage arguments ]",
messageSends: ["ifNil:ifNotNil:", "doesNotUnderstand:", "forwardMessage:withArguments:", "arguments", "lookupProperty:", "asJavaScriptSelector", "selector"],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "forwardMessage:withArguments:",
category: 'proxy',
fn: function (aString,anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		return smalltalk.send(self._jsObject(), aString, anArray);
	;
return self}, function($ctx1) {$ctx1.fill(self,"forwardMessage:withArguments:",{aString:aString,anArray:anArray},smalltalk.JSObjectProxy)})},
args: ["aString", "anArray"],
source: "forwardMessage: aString withArguments: anArray\x0a\x09<\x0a\x09\x09return smalltalk.send(self._jsObject(), aString, anArray);\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectOn:",
category: 'proxy',
fn: function (anInspector){
var self=this;
var variables;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
variables=_st($Dictionary())._new();
_st(variables)._at_put_("#self",self._jsObject());
_st(anInspector)._setLabel_(self._printString());
self._addObjectVariablesTo_(variables);
_st(anInspector)._setVariables_(variables);
return self}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},smalltalk.JSObjectProxy)})},
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self jsObject.\x0a\x09anInspector setLabel: self printString.\x0a\x09self addObjectVariablesTo: variables.\x0a\x09anInspector setVariables: variables",
messageSends: ["new", "at:put:", "jsObject", "setLabel:", "printString", "addObjectVariablesTo:", "setVariables:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "jsObject",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@jsObject"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"jsObject",{},smalltalk.JSObjectProxy)})},
args: [],
source: "jsObject\x0a\x09^jsObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "jsObject:",
category: 'accessing',
fn: function (aJSObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@jsObject"]=aJSObject;
return self}, function($ctx1) {$ctx1.fill(self,"jsObject:",{aJSObject:aJSObject},smalltalk.JSObjectProxy)})},
args: ["aJSObject"],
source: "jsObject: aJSObject\x0a\x09jsObject := aJSObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "keysAndValuesDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var o = self['@jsObject'];
		for(var i in o) {
			aBlock._value_value_(i, o[i]);
		}
	;
return self}, function($ctx1) {$ctx1.fill(self,"keysAndValuesDo:",{aBlock:aBlock},smalltalk.JSObjectProxy)})},
args: ["aBlock"],
source: "keysAndValuesDo: aBlock\x0a\x09<\x0a\x09\x09var o = self['@jsObject'];\x0a\x09\x09for(var i in o) {\x0a\x09\x09\x09aBlock._value_value_(i, o[i]);\x0a\x09\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "lookupProperty:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return aString in self._jsObject() ? aString : nil;
return self}, function($ctx1) {$ctx1.fill(self,"lookupProperty:",{aString:aString},smalltalk.JSObjectProxy)})},
args: ["aString"],
source: "lookupProperty: aString\x0a\x09\x22Looks up a property in JS object.\x0a\x09Answer the property if it is present, or nil if it is not present.\x22\x0a\x09\x0a\x09<return aString in self._jsObject() ? aString : nil>",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_(_st(self._jsObject())._toString());
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.JSObjectProxy)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: self jsObject toString",
messageSends: ["nextPutAll:", "toString", "jsObject"],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_ifAbsent_("value",(function(){
return smalltalk.withContext(function($ctx2) {
return smalltalk.Object.fn.prototype._value.apply(_st(self), []);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.JSObjectProxy)})},
args: [],
source: "value\x0a\x09\x22if attribute 'value' exists on the JS object return it,\x0a\x09otherwise return the result of Object>>value.\x22\x0a\x09\x0a\x09^ self \x0a\x09\x09at: 'value' \x0a\x09\x09ifAbsent: [ super value ]",
messageSends: ["at:ifAbsent:", "value"],
referencedClasses: []
}),
smalltalk.JSObjectProxy);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aJSObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._jsObject_(aJSObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aJSObject:aJSObject},smalltalk.JSObjectProxy.klass)})},
args: ["aJSObject"],
source: "on: aJSObject\x0a\x09^self new\x0a\x09\x09jsObject: aJSObject;\x0a\x09\x09yourself",
messageSends: ["jsObject:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.JSObjectProxy.klass);


smalltalk.addClass('Number', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.Number.comment="I am the Amber representation for all numbers.\x0aI am directly mapped to JavaScript Number.\x0a\x0a## API\x0a\x0aI provide all necessary methods for arithmetic operations, comparison, conversion and so on with numbers.\x0a\x0aMy instances can also be used to evaluate a block a fixed number of times:\x0a\x0a\x095 timesRepeat: [Transcript show: 'This will be printed 5 times'; cr].\x0a\x09\x0a\x091 to: 5 do: [:aNumber| Transcript show: aNumber asString; cr].\x0a\x09\x0a\x091 to: 10 by: 2 do: [:aNumber| Transcript show: aNumber asString; cr].";
smalltalk.addMethod(
smalltalk.method({
selector: "&",
category: 'converting',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self & aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"&",{aNumber:aNumber},smalltalk.Number)})},
args: ["aNumber"],
source: "& aNumber\x0a\x09<return self & aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "*",
category: 'arithmetic',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self * aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"*",{aNumber:aNumber},smalltalk.Number)})},
args: ["aNumber"],
source: "* aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self * aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "+",
category: 'arithmetic',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self + aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"+",{aNumber:aNumber},smalltalk.Number)})},
args: ["aNumber"],
source: "+ aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self + aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "-",
category: 'arithmetic',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self - aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"-",{aNumber:aNumber},smalltalk.Number)})},
args: ["aNumber"],
source: "- aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self - aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "/",
category: 'arithmetic',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self / aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"/",{aNumber:aNumber},smalltalk.Number)})},
args: ["aNumber"],
source: "/ aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self / aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "<",
category: 'comparing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self < aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"<",{aNumber:aNumber},smalltalk.Number)})},
args: ["aNumber"],
source: "< aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self < aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "<=",
category: 'comparing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self <= aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"<=",{aNumber:aNumber},smalltalk.Number)})},
args: ["aNumber"],
source: "<= aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self <= aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		if(! aNumber._isNumber || ! aNumber._isNumber()) {
			return false;
		}
		return Number(self) == aNumber
	;
return self}, function($ctx1) {$ctx1.fill(self,"=",{aNumber:aNumber},smalltalk.Number)})},
args: ["aNumber"],
source: "= aNumber\x0a\x09<\x0a\x09\x09if(! aNumber._isNumber || ! aNumber._isNumber()) {\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09\x09return Number(self) == aNumber\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: ">",
category: 'comparing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self > aNumber;
return self}, function($ctx1) {$ctx1.fill(self,">",{aNumber:aNumber},smalltalk.Number)})},
args: ["aNumber"],
source: "> aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self >> aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: ">=",
category: 'comparing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self >= aNumber;
return self}, function($ctx1) {$ctx1.fill(self,">=",{aNumber:aNumber},smalltalk.Number)})},
args: ["aNumber"],
source: ">= aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self >>= aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "@",
category: 'converting',
fn: function (aNumber){
var self=this;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Point())._x_y_(self,aNumber);
return $1;
}, function($ctx1) {$ctx1.fill(self,"@",{aNumber:aNumber},smalltalk.Number)})},
args: ["aNumber"],
source: "@ aNumber\x0a\x09^Point x: self y: aNumber",
messageSends: ["x:y:"],
referencedClasses: ["Point"]
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "\x5c\x5c",
category: 'arithmetic',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self % aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"\x5c\x5c",{aNumber:aNumber},smalltalk.Number)})},
args: ["aNumber"],
source: "\x5c\x5c aNumber\x0a\x09<return self % aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "abs",
category: 'arithmetic',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.abs(self);;
return self}, function($ctx1) {$ctx1.fill(self,"abs",{},smalltalk.Number)})},
args: [],
source: "abs\x0a\x09<return Math.abs(self);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},smalltalk.Number)})},
args: [],
source: "asJSON\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "asJavascript",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("(".__comma(self._printString())).__comma(")");
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJavascript",{},smalltalk.Number)})},
args: [],
source: "asJavascript\x0a\x09^'(', self printString, ')'",
messageSends: [",", "printString"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "asPoint",
category: 'converting',
fn: function (){
var self=this;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Point())._x_y_(self,self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asPoint",{},smalltalk.Number)})},
args: [],
source: "asPoint\x0a\x09^Point x: self y: self",
messageSends: ["x:y:"],
referencedClasses: ["Point"]
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "asString",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return String(self) ;
return self}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.Number)})},
args: [],
source: "asString\x0a\x09< return String(self) >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "atRandom",
category: 'converting',
fn: function (){
var self=this;
function $Random(){return smalltalk.Random||(typeof Random=="undefined"?nil:Random)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(_st($Random())._new())._next()).__star(self))._truncated()).__plus((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"atRandom",{},smalltalk.Number)})},
args: [],
source: "atRandom\x0a\x09^(Random new next * self) truncated + 1",
messageSends: ["+", "truncated", "*", "next", "new"],
referencedClasses: ["Random"]
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "copy",
category: 'copying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"copy",{},smalltalk.Number)})},
args: [],
source: "copy\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "deepCopy",
category: 'copying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{},smalltalk.Number)})},
args: [],
source: "deepCopy\x0a\x09^self copy",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "even",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0).__eq(self.__backslash_backslash((2)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"even",{},smalltalk.Number)})},
args: [],
source: "even\x0a\x09^ 0 = (self \x5c\x5c 2)",
messageSends: ["=", "\x5c\x5c"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "identityHash",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._asString()).__comma("n");
return $1;
}, function($ctx1) {$ctx1.fill(self,"identityHash",{},smalltalk.Number)})},
args: [],
source: "identityHash\x0a\x09^self asString, 'n'",
messageSends: [",", "asString"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "isImmutable",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isImmutable",{},smalltalk.Number)})},
args: [],
source: "isImmutable\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "isNumber",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isNumber",{},smalltalk.Number)})},
args: [],
source: "isNumber\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "isZero",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isZero",{},smalltalk.Number)})},
args: [],
source: "isZero\x0a\x09^self = 0",
messageSends: ["="],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "max:",
category: 'arithmetic',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.max(self, aNumber);;
return self}, function($ctx1) {$ctx1.fill(self,"max:",{aNumber:aNumber},smalltalk.Number)})},
args: ["aNumber"],
source: "max: aNumber\x0a\x09<return Math.max(self, aNumber);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "min:",
category: 'arithmetic',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.min(self, aNumber);;
return self}, function($ctx1) {$ctx1.fill(self,"min:",{aNumber:aNumber},smalltalk.Number)})},
args: ["aNumber"],
source: "min: aNumber\x0a\x09<return Math.min(self, aNumber);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "negated",
category: 'arithmetic',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0).__minus(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"negated",{},smalltalk.Number)})},
args: [],
source: "negated\x0a\x09^0 - self",
messageSends: ["-"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "negative",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__lt((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"negative",{},smalltalk.Number)})},
args: [],
source: "negative\x0a\x09\x22Answer whether the receiver is mathematically negative.\x22\x0a\x0a\x09^ self < 0",
messageSends: ["<"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "odd",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._even())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"odd",{},smalltalk.Number)})},
args: [],
source: "odd\x0a\x09^ self even not",
messageSends: ["not", "even"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "positive",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__gt_eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"positive",{},smalltalk.Number)})},
args: [],
source: "positive\x0a\x09\x22Answer whether the receiver is positive or equal to 0. (ST-80 protocol).\x22\x0a\x0a\x09^ self >= 0",
messageSends: [">="],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_(self._asString());
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Number)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: self asString",
messageSends: ["nextPutAll:", "asString"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "printShowingDecimalPlaces:",
category: 'printing',
fn: function (placesDesired){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.toFixed(placesDesired);
return self}, function($ctx1) {$ctx1.fill(self,"printShowingDecimalPlaces:",{placesDesired:placesDesired},smalltalk.Number)})},
args: ["placesDesired"],
source: "printShowingDecimalPlaces: placesDesired\x0a\x09<return self.toFixed(placesDesired)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "rounded",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.round(self);;
return self}, function($ctx1) {$ctx1.fill(self,"rounded",{},smalltalk.Number)})},
args: [],
source: "rounded\x0a\x09<return Math.round(self);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "sqrt",
category: 'arithmetic',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.sqrt(self);
return self}, function($ctx1) {$ctx1.fill(self,"sqrt",{},smalltalk.Number)})},
args: [],
source: "sqrt\x0a\x09<return Math.sqrt(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "squared",
category: 'arithmetic',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__star(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"squared",{},smalltalk.Number)})},
args: [],
source: "squared\x0a\x09^self * self",
messageSends: ["*"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "timesRepeat:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var count;
return smalltalk.withContext(function($ctx1) { 
count=(1);
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(count).__gt(self);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
_st(aBlock)._value();
count=_st(count).__plus((1));
return count;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"timesRepeat:",{aBlock:aBlock,count:count},smalltalk.Number)})},
args: ["aBlock"],
source: "timesRepeat: aBlock\x0a\x09| count |\x0a\x09count := 1.\x0a\x09[count > self] whileFalse: [\x0a\x09\x09aBlock value.\x0a\x09\x09count := count + 1]",
messageSends: ["whileFalse:", "value", "+", ">"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "to:",
category: 'converting',
fn: function (aNumber){
var self=this;
var array,first,last,count;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
first=self._truncated();
last=_st(_st(aNumber)._truncated()).__plus((1));
count=(1);
array=_st($Array())._new();
_st(_st(last).__minus(first))._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
_st(array)._at_put_(count,first);
count=_st(count).__plus((1));
count;
first=_st(first).__plus((1));
return first;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=array;
return $1;
}, function($ctx1) {$ctx1.fill(self,"to:",{aNumber:aNumber,array:array,first:first,last:last,count:count},smalltalk.Number)})},
args: ["aNumber"],
source: "to: aNumber\x0a\x09| array first last count |\x0a\x09first := self truncated.\x0a\x09last := aNumber truncated + 1.\x0a\x09count := 1.\x0a\x09array := Array new.\x0a\x09(last - first) timesRepeat: [\x0a\x09\x09array at: count put: first.\x0a\x09\x09count := count + 1.\x0a\x09\x09first := first + 1].\x0a\x09^array",
messageSends: ["truncated", "+", "new", "timesRepeat:", "at:put:", "-"],
referencedClasses: ["Array"]
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "to:by:",
category: 'converting',
fn: function (stop,step){
var self=this;
var array,value,pos;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
value=self;
array=_st($Array())._new();
pos=(1);
$1=_st(step).__eq((0));
if(smalltalk.assert($1)){
self._error_("step must be non-zero");
};
$2=_st(step).__lt((0));
if(smalltalk.assert($2)){
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(value).__gt_eq(stop);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
_st(array)._at_put_(pos,value);
pos=_st(pos).__plus((1));
pos;
value=_st(value).__plus(step);
return value;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
} else {
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(value).__lt_eq(stop);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
_st(array)._at_put_(pos,value);
pos=_st(pos).__plus((1));
pos;
value=_st(value).__plus(step);
return value;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
$3=array;
return $3;
}, function($ctx1) {$ctx1.fill(self,"to:by:",{stop:stop,step:step,array:array,value:value,pos:pos},smalltalk.Number)})},
args: ["stop", "step"],
source: "to: stop by: step\x0a\x09| array value pos |\x0a\x09value := self.\x0a\x09array := Array new.\x0a\x09pos := 1.\x0a\x09step = 0 ifTrue: [self error: 'step must be non-zero'].\x0a\x09step < 0\x0a\x09\x09ifTrue: [[ value >= stop ] whileTrue: [\x0a\x09\x09\x09\x09\x09array at: pos put: value.\x0a\x09\x09\x09\x09\x09pos := pos + 1.\x0a\x09\x09\x09\x09\x09value := value + step]]\x0a\x09\x09ifFalse: [[ value <= stop ] whileTrue: [\x0a\x09\x09\x09\x09\x09array at: pos put: value.\x0a\x09\x09\x09\x09pos := pos + 1.\x0a\x09\x09\x09\x09\x09value := value + step]].\x0a\x09^array",
messageSends: ["new", "ifTrue:", "error:", "=", "ifTrue:ifFalse:", "whileTrue:", "at:put:", "+", ">=", "<=", "<"],
referencedClasses: ["Array"]
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "to:by:do:",
category: 'enumerating',
fn: function (stop,step,aBlock){
var self=this;
var value;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
value=self;
$1=_st(step).__eq((0));
if(smalltalk.assert($1)){
self._error_("step must be non-zero");
};
$2=_st(step).__lt((0));
if(smalltalk.assert($2)){
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(value).__gt_eq(stop);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
_st(aBlock)._value_(value);
value=_st(value).__plus(step);
return value;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
} else {
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(value).__lt_eq(stop);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
_st(aBlock)._value_(value);
value=_st(value).__plus(step);
return value;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"to:by:do:",{stop:stop,step:step,aBlock:aBlock,value:value},smalltalk.Number)})},
args: ["stop", "step", "aBlock"],
source: "to: stop by: step do: aBlock\x0a\x09| value |\x0a\x09value := self.\x0a\x09step = 0 ifTrue: [self error: 'step must be non-zero'].\x0a\x09step < 0\x0a\x09\x09ifTrue: [[ value >= stop ] whileTrue: [\x0a\x09\x09\x09\x09\x09aBlock value: value.\x0a\x09\x09\x09\x09\x09value := value + step]]\x0a\x09\x09ifFalse: [[ value <= stop ] whileTrue: [\x0a\x09\x09\x09\x09\x09aBlock value: value.\x0a\x09\x09\x09\x09\x09value := value + step]]",
messageSends: ["ifTrue:", "error:", "=", "ifTrue:ifFalse:", "whileTrue:", "value:", "+", ">=", "<=", "<"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "to:do:",
category: 'enumerating',
fn: function (stop,aBlock){
var self=this;
var nextValue;
return smalltalk.withContext(function($ctx1) { 
nextValue=self;
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(nextValue).__lt_eq(stop);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
_st(aBlock)._value_(nextValue);
nextValue=_st(nextValue).__plus((1));
return nextValue;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"to:do:",{stop:stop,aBlock:aBlock,nextValue:nextValue},smalltalk.Number)})},
args: ["stop", "aBlock"],
source: "to: stop do: aBlock\x0a\x09\x22Evaluate aBlock for each number from self to aNumber.\x22\x0a\x09| nextValue |\x0a\x09nextValue := self.\x0a\x09[nextValue <= stop]\x0a\x09\x09whileTrue:\x0a\x09\x09\x09[aBlock value: nextValue.\x0a\x09\x09\x09nextValue := nextValue + 1]",
messageSends: ["whileTrue:", "value:", "+", "<="],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "truncated",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		if(self >= 0) {
			return Math.floor(self);
		} else {
			return Math.floor(self * (-1)) * (-1);
		};
	;
return self}, function($ctx1) {$ctx1.fill(self,"truncated",{},smalltalk.Number)})},
args: [],
source: "truncated\x0a\x09<\x0a\x09\x09if(self >>= 0) {\x0a\x09\x09\x09return Math.floor(self);\x0a\x09\x09} else {\x0a\x09\x09\x09return Math.floor(self * (-1)) * (-1);\x0a\x09\x09};\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "|",
category: 'converting',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self | aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"|",{aNumber:aNumber},smalltalk.Number)})},
args: ["aNumber"],
source: "| aNumber\x0a\x09<return self | aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);


smalltalk.addMethod(
smalltalk.method({
selector: "heliosClass",
category: 'helios',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "magnitude";
}, function($ctx1) {$ctx1.fill(self,"heliosClass",{},smalltalk.Number.klass)})},
args: [],
source: "heliosClass\x0a\x09^ 'magnitude'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "pi",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.PI;
return self}, function($ctx1) {$ctx1.fill(self,"pi",{},smalltalk.Number.klass)})},
args: [],
source: "pi\x0a\x09<return Math.PI>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number.klass);


smalltalk.addClass('Organizer', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.Organizer.comment="I represent categorization information. \x0a\x0a## API\x0a\x0aUse `#addElement:` and `#removeElement:` to manipulate instances.";
smalltalk.addMethod(
smalltalk.method({
selector: "addElement:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.elements.addElement(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"addElement:",{anObject:anObject},smalltalk.Organizer)})},
args: ["anObject"],
source: "addElement: anObject\x0a\x09<self.elements.addElement(anObject)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Organizer);

smalltalk.addMethod(
smalltalk.method({
selector: "elements",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._basicAt_("elements"))._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"elements",{},smalltalk.Organizer)})},
args: [],
source: "elements\x0a\x09^ (self basicAt: 'elements') copy",
messageSends: ["copy", "basicAt:"],
referencedClasses: []
}),
smalltalk.Organizer);

smalltalk.addMethod(
smalltalk.method({
selector: "removeElement:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.elements.removeElement(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"removeElement:",{anObject:anObject},smalltalk.Organizer)})},
args: ["anObject"],
source: "removeElement: anObject\x0a\x09<self.elements.removeElement(anObject)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Organizer);



smalltalk.addClass('ClassOrganizer', smalltalk.Organizer, [], 'Kernel-Objects');
smalltalk.ClassOrganizer.comment="I am an organizer specific to classes. I hold method categorization information for classes.";
smalltalk.addMethod(
smalltalk.method({
selector: "addElement:",
category: 'accessing',
fn: function (aString){
var self=this;
function $ProtocolAdded(){return smalltalk.ProtocolAdded||(typeof ProtocolAdded=="undefined"?nil:ProtocolAdded)}
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.Organizer.fn.prototype._addElement_.apply(_st(self), [aString]);
$1=_st($ProtocolAdded())._new();
_st($1)._protocol_(aString);
_st($1)._theClass_(self._theClass());
$2=_st($1)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"addElement:",{aString:aString},smalltalk.ClassOrganizer)})},
args: ["aString"],
source: "addElement: aString\x0a\x09super addElement: aString.\x0a\x0a\x09SystemAnnouncer current announce: (ProtocolAdded new\x0a\x09\x09protocol: aString;\x0a\x09\x09theClass: self theClass;\x0a\x09\x09yourself)",
messageSends: ["addElement:", "announce:", "protocol:", "new", "theClass:", "theClass", "yourself", "current"],
referencedClasses: ["ProtocolAdded", "SystemAnnouncer"]
}),
smalltalk.ClassOrganizer);

smalltalk.addMethod(
smalltalk.method({
selector: "removeElement:",
category: 'accessing',
fn: function (aString){
var self=this;
function $ProtocolRemoved(){return smalltalk.ProtocolRemoved||(typeof ProtocolRemoved=="undefined"?nil:ProtocolRemoved)}
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.Organizer.fn.prototype._removeElement_.apply(_st(self), [aString]);
$1=_st($ProtocolRemoved())._new();
_st($1)._protocol_(aString);
_st($1)._theClass_(self._theClass());
$2=_st($1)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"removeElement:",{aString:aString},smalltalk.ClassOrganizer)})},
args: ["aString"],
source: "removeElement: aString\x0a\x09super removeElement: aString.\x0a\x0a\x09SystemAnnouncer current announce: (ProtocolRemoved new\x0a\x09\x09protocol: aString;\x0a\x09\x09theClass: self theClass;\x0a\x09\x09yourself)",
messageSends: ["removeElement:", "announce:", "protocol:", "new", "theClass:", "theClass", "yourself", "current"],
referencedClasses: ["ProtocolRemoved", "SystemAnnouncer"]
}),
smalltalk.ClassOrganizer);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return self.theClass ;
return self}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.ClassOrganizer)})},
args: [],
source: "theClass\x0a\x09< return self.theClass >",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassOrganizer);



smalltalk.addClass('PackageOrganizer', smalltalk.Organizer, [], 'Kernel-Objects');
smalltalk.PackageOrganizer.comment="I am an organizer specific to packages. I hold classes categorization information.";


smalltalk.addClass('Package', smalltalk.Object, ['commitPathJs', 'commitPathSt'], 'Kernel-Objects');
smalltalk.Package.comment="I am similar to a \x22class category\x22 typically found in other Smalltalks like Pharo or Squeak. Amber does not have class categories anymore, it had in the beginning but now each class in the system knows which package it belongs to.\x0a\x0aEach package has a name and can be queried for its classes, but it will then resort to a reverse scan of all classes to find them.\x0a\x0a## API\x0a\x0aPackages are manipulated through \x22Smalltalk current\x22, like for example finding one based on a name or with `Package class >> #name` directly:\x0a\x0a    Smalltalk current packageAt: 'Kernel'\x0a    Package named: 'Kernel'\x0a\x0aA package differs slightly from a Monticello package which can span multiple class categories using a naming convention based on hyphenation. But just as in Monticello a package supports \x22class extensions\x22 so a package can define behaviors in foreign classes using a naming convention for method categories where the category starts with an asterisk and then the name of the owning package follows.\x0a\x0aYou can fetch a package from the server:\x0a\x0a\x09Package load: 'Additional-Examples'";
smalltalk.addMethod(
smalltalk.method({
selector: "classes",
category: 'classes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._organization())._elements();
return $1;
}, function($ctx1) {$ctx1.fill(self,"classes",{},smalltalk.Package)})},
args: [],
source: "classes\x0a\x09^ self organization elements",
messageSends: ["elements", "organization"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPathJs",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@commitPathJs"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self._class())._defaultCommitPathJs();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"commitPathJs",{},smalltalk.Package)})},
args: [],
source: "commitPathJs\x0a\x09^ commitPathJs ifNil: [self class defaultCommitPathJs]",
messageSends: ["ifNil:", "defaultCommitPathJs", "class"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPathJs:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@commitPathJs"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"commitPathJs:",{aString:aString},smalltalk.Package)})},
args: ["aString"],
source: "commitPathJs: aString\x0a\x09commitPathJs := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPathSt",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@commitPathSt"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self._class())._defaultCommitPathSt();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"commitPathSt",{},smalltalk.Package)})},
args: [],
source: "commitPathSt\x0a\x09^ commitPathSt ifNil: [self class defaultCommitPathSt]",
messageSends: ["ifNil:", "defaultCommitPathSt", "class"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPathSt:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@commitPathSt"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"commitPathSt:",{aString:aString},smalltalk.Package)})},
args: ["aString"],
source: "commitPathSt: aString\x0a\x09commitPathSt := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "isPackage",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isPackage",{},smalltalk.Package)})},
args: [],
source: "isPackage\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "name",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.pkgName;
return self}, function($ctx1) {$ctx1.fill(self,"name",{},smalltalk.Package)})},
args: [],
source: "name\x0a\x09<return self.pkgName>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "name:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.pkgName = aString;
return self}, function($ctx1) {$ctx1.fill(self,"name:",{aString:aString},smalltalk.Package)})},
args: ["aString"],
source: "name: aString\x0a\x09<self.pkgName = aString>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "organization",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicAt_("organization");
return $1;
}, function($ctx1) {$ctx1.fill(self,"organization",{},smalltalk.Package)})},
args: [],
source: "organization\x0a\x09^ self basicAt: 'organization'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.Object.fn.prototype._printOn_.apply(_st(self), [aStream]);
$1=aStream;
_st($1)._nextPutAll_(" (");
_st($1)._nextPutAll_(self._name());
$2=_st($1)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Package)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09aStream \x0a\x09\x09nextPutAll: ' (';\x0a\x09\x09nextPutAll: self name;\x0a\x09\x09nextPutAll: ')'",
messageSends: ["printOn:", "nextPutAll:", "name"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "setupClasses",
category: 'classes',
fn: function (){
var self=this;
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._classes();
_st($1)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st($ClassBuilder())._new())._setupClass_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=_st($1)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._initialize();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupClasses",{},smalltalk.Package)})},
args: [],
source: "setupClasses\x0a\x09self classes\x0a\x09\x09do: [ :each | ClassBuilder new setupClass: each ];\x0a\x09\x09do: [ :each | each initialize ]",
messageSends: ["do:", "setupClass:", "new", "classes", "initialize"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "sortedClasses",
category: 'classes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._sortedClasses_(self._classes());
return $1;
}, function($ctx1) {$ctx1.fill(self,"sortedClasses",{},smalltalk.Package)})},
args: [],
source: "sortedClasses\x0a\x09\x22Answer all classes in the receiver, sorted by superclass/subclasses and by class name for common subclasses (Issue #143).\x22\x0a\x0a\x09^self class sortedClasses: self classes",
messageSends: ["sortedClasses:", "classes", "class"],
referencedClasses: []
}),
smalltalk.Package);


smalltalk.Package.klass.iVarNames = ['defaultCommitPathJs','defaultCommitPathSt'];
smalltalk.addMethod(
smalltalk.method({
selector: "commitPathsFromLoader",
category: 'commit paths',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var commitPath = typeof amber !== 'undefined' && amber.commitPath;
		if (!commitPath) return;
		if (commitPath.js) self._defaultCommitPathJs_(commitPath.js);
		if (commitPath.st) self._defaultCommitPathSt_(commitPath.st);
	;
return self}, function($ctx1) {$ctx1.fill(self,"commitPathsFromLoader",{},smalltalk.Package.klass)})},
args: [],
source: "commitPathsFromLoader\x0a\x09<\x0a\x09\x09var commitPath = typeof amber !== 'undefined' && amber.commitPath;\x0a\x09\x09if (!commitPath) return;\x0a\x09\x09if (commitPath.js) self._defaultCommitPathJs_(commitPath.js);\x0a\x09\x09if (commitPath.st) self._defaultCommitPathSt_(commitPath.st);\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultCommitPathJs",
category: 'commit paths',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@defaultCommitPathJs"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@defaultCommitPathJs"]="js";
$1=self["@defaultCommitPathJs"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultCommitPathJs",{},smalltalk.Package.klass)})},
args: [],
source: "defaultCommitPathJs\x0a\x09^ defaultCommitPathJs ifNil: [ defaultCommitPathJs := 'js']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Package.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultCommitPathJs:",
category: 'commit paths',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@defaultCommitPathJs"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"defaultCommitPathJs:",{aString:aString},smalltalk.Package.klass)})},
args: ["aString"],
source: "defaultCommitPathJs: aString\x0a\x09defaultCommitPathJs := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultCommitPathSt",
category: 'commit paths',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@defaultCommitPathSt"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@defaultCommitPathSt"]="st";
$1=self["@defaultCommitPathSt"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultCommitPathSt",{},smalltalk.Package.klass)})},
args: [],
source: "defaultCommitPathSt\x0a\x09^ defaultCommitPathSt ifNil: [ defaultCommitPathSt := 'st']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Package.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultCommitPathSt:",
category: 'commit paths',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@defaultCommitPathSt"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"defaultCommitPathSt:",{aString:aString},smalltalk.Package.klass)})},
args: ["aString"],
source: "defaultCommitPathSt: aString\x0a\x09defaultCommitPathSt := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.klass.fn.prototype._initialize.apply(_st(self), []);
self._commitPathsFromLoader();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Package.klass)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self commitPathsFromLoader",
messageSends: ["initialize", "commitPathsFromLoader"],
referencedClasses: []
}),
smalltalk.Package.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "load:",
category: 'loading-storing',
fn: function (aPackageName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._load_prefix_(aPackageName,_st(self._defaultCommitPathJs()).__comma("/"));
return self}, function($ctx1) {$ctx1.fill(self,"load:",{aPackageName:aPackageName},smalltalk.Package.klass)})},
args: ["aPackageName"],
source: "load: aPackageName\x0a\x09self load: aPackageName prefix: self defaultCommitPathJs, '/'",
messageSends: ["load:prefix:", ",", "defaultCommitPathJs"],
referencedClasses: []
}),
smalltalk.Package.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "load:prefix:",
category: 'loading-storing',
fn: function (aPackageName,aPrefix){
var self=this;
function $Package(){return smalltalk.Package||(typeof Package=="undefined"?nil:Package)}
return smalltalk.withContext(function($ctx1) { 
_st(jQuery)._getScript_onSuccess_(_st(_st(aPrefix).__comma(aPackageName)).__comma(".js"),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st($Package())._named_(aPackageName))._setupClasses();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"load:prefix:",{aPackageName:aPackageName,aPrefix:aPrefix},smalltalk.Package.klass)})},
args: ["aPackageName", "aPrefix"],
source: "load: aPackageName prefix: aPrefix\x0a\x09jQuery\x0a\x09\x09getScript: (aPrefix , aPackageName , '.js')\x0a\x09\x09onSuccess: [\x0a\x09\x09\x09(Package named: aPackageName) setupClasses ]",
messageSends: ["getScript:onSuccess:", ",", "setupClasses", "named:"],
referencedClasses: ["Package"]
}),
smalltalk.Package.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "named:",
category: 'accessing',
fn: function (aPackageName){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Smalltalk())._current())._packageAt_(aPackageName);
return $1;
}, function($ctx1) {$ctx1.fill(self,"named:",{aPackageName:aPackageName},smalltalk.Package.klass)})},
args: ["aPackageName"],
source: "named: aPackageName\x0a\x0a\x09^Smalltalk current packageAt: aPackageName",
messageSends: ["packageAt:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Package.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "named:ifAbsent:",
category: 'accessing',
fn: function (aPackageName,aBlock){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Smalltalk())._current())._packageAt_ifAbsent_(aPackageName,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"named:ifAbsent:",{aPackageName:aPackageName,aBlock:aBlock},smalltalk.Package.klass)})},
args: ["aPackageName", "aBlock"],
source: "named: aPackageName ifAbsent: aBlock\x0a\x0a\x09^Smalltalk current packageAt: aPackageName ifAbsent: aBlock",
messageSends: ["packageAt:ifAbsent:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Package.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "resetCommitPaths",
category: 'commit paths',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@defaultCommitPathJs"]=nil;
self["@defaultCommitPathSt"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"resetCommitPaths",{},smalltalk.Package.klass)})},
args: [],
source: "resetCommitPaths\x0a\x09\x09defaultCommitPathJs := nil.\x0a\x09\x09defaultCommitPathSt := nil.",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "sortedClasses:",
category: 'sorting',
fn: function (classes){
var self=this;
var children,others,nodes,expandedClasses;
function $ClassSorterNode(){return smalltalk.ClassSorterNode||(typeof ClassSorterNode=="undefined"?nil:ClassSorterNode)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
children=[];
others=[];
_st(classes)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(classes)._includes_(_st(each)._superclass());
if(smalltalk.assert($1)){
return _st(others)._add_(each);
} else {
return _st(children)._add_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
nodes=_st(children)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st($ClassSorterNode())._on_classes_level_(each,others,(0));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
nodes=_st(nodes)._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(a)._theClass())._name()).__lt_eq(_st(_st(b)._theClass())._name());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}));
expandedClasses=_st($Array())._new();
_st(nodes)._do_((function(aNode){
return smalltalk.withContext(function($ctx2) {
return _st(aNode)._traverseClassesWith_(expandedClasses);
}, function($ctx2) {$ctx2.fillBlock({aNode:aNode},$ctx1)})}));
$2=expandedClasses;
return $2;
}, function($ctx1) {$ctx1.fill(self,"sortedClasses:",{classes:classes,children:children,others:others,nodes:nodes,expandedClasses:expandedClasses},smalltalk.Package.klass)})},
args: ["classes"],
source: "sortedClasses: classes\x0a\x09\x22Answer classes, sorted by superclass/subclasses and by class name for common subclasses (Issue #143)\x22\x0a\x0a\x09| children others nodes expandedClasses |\x0a\x09children := #().\x0a\x09others := #().\x0a\x09classes do: [:each |\x0a\x09\x09(classes includes: each superclass)\x0a\x09\x09\x09ifFalse: [children add: each]\x0a\x09\x09\x09ifTrue: [others add: each]].\x0a\x09nodes := children collect: [:each |\x0a\x09\x09ClassSorterNode on: each classes: others level: 0].\x0a\x09nodes := nodes sorted: [:a :b | a theClass name <= b theClass name ].\x0a\x09expandedClasses := Array new.\x0a\x09nodes do: [:aNode |\x0a\x09\x09aNode traverseClassesWith: expandedClasses].\x0a\x09^expandedClasses",
messageSends: ["do:", "ifFalse:ifTrue:", "add:", "includes:", "superclass", "collect:", "on:classes:level:", "sorted:", "<=", "name", "theClass", "new", "traverseClassesWith:"],
referencedClasses: ["ClassSorterNode", "Array"]
}),
smalltalk.Package.klass);


smalltalk.addClass('Point', smalltalk.Object, ['x', 'y'], 'Kernel-Objects');
smalltalk.Point.comment="I represent an x-y pair of numbers usually designating a geometric coordinate.\x0a\x0a## API\x0a\x0aInstances are traditionally created using the binary `#@` message to a number:\x0a\x0a\x09100@120\x0a\x0aPoints can then be arithmetically manipulated:\x0a\x0a\x09100@100 + (10@10)\x0a\x0a...or for example:\x0a\x0a\x09(100@100) * 2\x0a\x0a**NOTE:** Creating a point with a negative y-value will need a space after `@` in order to avoid a parsing error:\x0a\x0a\x09100@ -100 \x22but 100@-100 would not parse\x22";
smalltalk.addMethod(
smalltalk.method({
selector: "*",
category: 'arithmetic',
fn: function (aPoint){
var self=this;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Point())._x_y_(_st(self._x()).__star(_st(_st(aPoint)._asPoint())._x()),_st(self._y()).__star(_st(_st(aPoint)._asPoint())._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"*",{aPoint:aPoint},smalltalk.Point)})},
args: ["aPoint"],
source: "* aPoint\x0a\x09^Point x: self x * aPoint asPoint x y: self y * aPoint asPoint y",
messageSends: ["x:y:", "*", "x", "asPoint", "y"],
referencedClasses: ["Point"]
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "+",
category: 'arithmetic',
fn: function (aPoint){
var self=this;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Point())._x_y_(_st(self._x()).__plus(_st(_st(aPoint)._asPoint())._x()),_st(self._y()).__plus(_st(_st(aPoint)._asPoint())._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"+",{aPoint:aPoint},smalltalk.Point)})},
args: ["aPoint"],
source: "+ aPoint\x0a\x09^Point x: self x + aPoint asPoint x y: self y + aPoint asPoint y",
messageSends: ["x:y:", "+", "x", "asPoint", "y"],
referencedClasses: ["Point"]
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "-",
category: 'arithmetic',
fn: function (aPoint){
var self=this;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Point())._x_y_(_st(self._x()).__minus(_st(_st(aPoint)._asPoint())._x()),_st(self._y()).__minus(_st(_st(aPoint)._asPoint())._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"-",{aPoint:aPoint},smalltalk.Point)})},
args: ["aPoint"],
source: "- aPoint\x0a\x09^Point x: self x - aPoint asPoint x y: self y - aPoint asPoint y",
messageSends: ["x:y:", "-", "x", "asPoint", "y"],
referencedClasses: ["Point"]
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "/",
category: 'arithmetic',
fn: function (aPoint){
var self=this;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Point())._x_y_(_st(self._x()).__slash(_st(_st(aPoint)._asPoint())._x()),_st(self._y()).__slash(_st(_st(aPoint)._asPoint())._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"/",{aPoint:aPoint},smalltalk.Point)})},
args: ["aPoint"],
source: "/ aPoint\x0a\x09^Point x: self x / aPoint asPoint x y: self y / aPoint asPoint y",
messageSends: ["x:y:", "/", "x", "asPoint", "y"],
referencedClasses: ["Point"]
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "=",
category: 'arithmetic',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(aPoint)._class()).__eq(self._class()))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(aPoint)._x()).__eq(self._x())).__and(_st(_st(aPoint)._y()).__eq(self._y()));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"=",{aPoint:aPoint},smalltalk.Point)})},
args: ["aPoint"],
source: "= aPoint\x0a\x09^aPoint class = self class and: [\x0a\x09\x09(aPoint x = self x) & (aPoint y = self y)]",
messageSends: ["and:", "&", "=", "y", "x", "class"],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "asPoint",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asPoint",{},smalltalk.Point)})},
args: [],
source: "asPoint\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@x"])._printOn_(aStream);
_st(aStream)._nextPutAll_("@");
$1=_st(_st(self["@y"])._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@y"])._negative();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
_st(aStream)._space();
};
_st(self["@y"])._printOn_(aStream);
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Point)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09\x22Print receiver in classic x@y notation.\x22\x0a\x0a\x09x printOn: aStream.\x0a\x09\x0a\x09aStream nextPutAll: '@'.\x0a\x09(y notNil and: [y negative]) ifTrue: [\x0a\x09\x09\x09\x22Avoid ambiguous @- construct\x22\x0a\x09\x09\x09aStream space ].\x0a\x09\x0a\x09y printOn: aStream",
messageSends: ["printOn:", "nextPutAll:", "ifTrue:", "space", "and:", "negative", "notNil"],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
category: 'transforming',
fn: function (delta){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(delta)._x()).__plus(self["@x"])).__at(_st(_st(delta)._y()).__plus(self["@y"]));
return $1;
}, function($ctx1) {$ctx1.fill(self,"translateBy:",{delta:delta},smalltalk.Point)})},
args: ["delta"],
source: "translateBy: delta\x0a\x09\x22Answer a Point translated by delta (an instance of Point).\x22\x0a\x09^(delta x + x) @ (delta y + y)",
messageSends: ["@", "+", "y", "x"],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "x",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@x"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"x",{},smalltalk.Point)})},
args: [],
source: "x\x0a\x09^x",
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "x:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@x"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"x:",{aNumber:aNumber},smalltalk.Point)})},
args: ["aNumber"],
source: "x: aNumber\x0a\x09x := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "y",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@y"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"y",{},smalltalk.Point)})},
args: [],
source: "y\x0a\x09^y",
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "y:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@y"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"y:",{aNumber:aNumber},smalltalk.Point)})},
args: ["aNumber"],
source: "y: aNumber\x0a\x09y := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);


smalltalk.addMethod(
smalltalk.method({
selector: "heliosClass",
category: 'helios',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "magnitude";
}, function($ctx1) {$ctx1.fill(self,"heliosClass",{},smalltalk.Point.klass)})},
args: [],
source: "heliosClass\x0a\x09^ 'magnitude'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Point.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "x:y:",
category: 'instance creation',
fn: function (aNumber,anotherNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._x_(aNumber);
_st($2)._y_(anotherNumber);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"x:y:",{aNumber:aNumber,anotherNumber:anotherNumber},smalltalk.Point.klass)})},
args: ["aNumber", "anotherNumber"],
source: "x: aNumber y: anotherNumber\x0a\x09^self new\x0a\x09\x09x: aNumber;\x0a\x09\x09y: anotherNumber;\x0a\x09\x09yourself",
messageSends: ["x:", "new", "y:", "yourself"],
referencedClasses: []
}),
smalltalk.Point.klass);


smalltalk.addClass('ProgressHandler', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.ProgressHandler.comment="I am used to manage progress in collection iterations, see `SequenceableCollection >> #do:displayingProgress:`.\x0a\x0aSubclasses of can register themselves as the current handler with\x0a`ProgressHandler class >> register`.\x0a\x0aThe default behavior is to simply iterate over the collection.";
smalltalk.addMethod(
smalltalk.method({
selector: "do:on:displaying:",
category: 'progress handling',
fn: function (aBlock,aCollection,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCollection)._do_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"do:on:displaying:",{aBlock:aBlock,aCollection:aCollection,aString:aString},smalltalk.ProgressHandler)})},
args: ["aBlock", "aCollection", "aString"],
source: "do: aBlock on: aCollection displaying: aString\x0a\x09aCollection do: aBlock",
messageSends: ["do:"],
referencedClasses: []
}),
smalltalk.ProgressHandler);


smalltalk.ProgressHandler.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@current"]=self._new();
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.ProgressHandler.klass)})},
args: [],
source: "current\x0a\x09^current ifNil: [ current := self new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.ProgressHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._register();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ProgressHandler.klass)})},
args: [],
source: "initialize\x0a\x09self register",
messageSends: ["register"],
referencedClasses: []
}),
smalltalk.ProgressHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "register",
category: 'initialization',
fn: function (){
var self=this;
function $ProgressHandler(){return smalltalk.ProgressHandler||(typeof ProgressHandler=="undefined"?nil:ProgressHandler)}
return smalltalk.withContext(function($ctx1) { 
_st($ProgressHandler())._setCurrent_(self._new());
return self}, function($ctx1) {$ctx1.fill(self,"register",{},smalltalk.ProgressHandler.klass)})},
args: [],
source: "register\x0a\x09ProgressHandler setCurrent: self new",
messageSends: ["setCurrent:", "new"],
referencedClasses: ["ProgressHandler"]
}),
smalltalk.ProgressHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "setCurrent:",
category: 'accessing',
fn: function (anHandler){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@current"]=anHandler;
return self}, function($ctx1) {$ctx1.fill(self,"setCurrent:",{anHandler:anHandler},smalltalk.ProgressHandler.klass)})},
args: ["anHandler"],
source: "setCurrent: anHandler\x0a\x09current := anHandler",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProgressHandler.klass);


smalltalk.addClass('Random', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.Random.comment="I an used to generate a random number and I am implemented as a trivial wrapper around javascript `Math.random()`.\x0a\x0a## API\x0a\x0aThe typical use case it to use the `#next` method like the following:\x0a\x0a\x09Random new next\x0a\x0aThis will return a float x where x < 1 and x > 0. If you want a random integer from 1 to 10 you can use `#atRandom`\x0a\x0a\x0910 atRandom\x0a\x0aA random number in a specific interval can be obtained with the following:\x0a\x0a\x09(3 to: 7) atRandom\x0a\x0aBe aware that `#to:` does not create an Interval as in other Smalltalk implementations but in fact an `Array` of numbers, so it's better to use:\x0a\x0a\x095 atRandom + 2\x0a\x0aSince `#atRandom` is implemented in `SequencableCollection` you can easy pick an element at random:\x0a\x0a\x09#('a' 'b' 'c') atRandom\x0a\x0aAs well as letter from a `String`:\x0a\x0a\x09'abc' atRandom\x0a\x0aSince Amber does not have Characters this will return a `String` of length 1 like for example `'b'`.";
smalltalk.addMethod(
smalltalk.method({
selector: "next",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.random();
return self}, function($ctx1) {$ctx1.fill(self,"next",{},smalltalk.Random)})},
args: [],
source: "next\x0a\x09<return Math.random()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Random);

smalltalk.addMethod(
smalltalk.method({
selector: "next:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((1)._to_(anInteger))._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._next();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"next:",{anInteger:anInteger},smalltalk.Random)})},
args: ["anInteger"],
source: "next: anInteger\x0a\x09^(1 to: anInteger) collect: [:each | self next]",
messageSends: ["collect:", "next", "to:"],
referencedClasses: []
}),
smalltalk.Random);



smalltalk.addClass('Smalltalk', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.Smalltalk.comment="I represent the global JavaScript variable `smalltalk` declared in `js/boot.js`.\x0a\x0a## API\x0a\x0aI have only one instance, accessed with class-side method `#current`.\x0a\x0aThe `smalltalk` object holds all class and packages defined in the system.\x0a\x0a## Classes\x0a\x0aClasses can be accessed using the following methods:\x0a\x0a- `#classes` answers the full list of Smalltalk classes in the system\x0a- `#at:` answers a specific class or `nil`\x0a\x0a## Packages\x0a\x0aPackages can be accessed using the following methods:\x0a\x0a- `#packages` answers the full list of packages\x0a- `#packageAt:` answers a specific package or `nil`\x0a\x0a## Parsing\x0a\x0aThe `#parse:` method is used to parse Amber source code.\x0aIt requires the `Compiler` package and the `js/parser.js` parser file in order to work.";
smalltalk.addMethod(
smalltalk.method({
selector: "addGlobalJsVariable:",
category: 'globals',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._globalJsVariables())._add_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"addGlobalJsVariable:",{aString:aString},smalltalk.Smalltalk)})},
args: ["aString"],
source: "addGlobalJsVariable: aString\x0a\x09self globalJsVariables add: aString",
messageSends: ["add:", "globalJsVariables"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "asSmalltalkException:",
category: 'error handling',
fn: function (anObject){
var self=this;
function $JavaScriptException(){return smalltalk.JavaScriptException||(typeof JavaScriptException=="undefined"?nil:JavaScriptException)}
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self._isSmalltalkObject_(anObject))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(anObject)._isKindOf_($Error());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($2)){
$1=anObject;
} else {
$1=_st($JavaScriptException())._on_(anObject);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSmalltalkException:",{anObject:anObject},smalltalk.Smalltalk)})},
args: ["anObject"],
source: "asSmalltalkException: anObject\x0a\x09\x22A JavaScript exception may be thrown.\x0a\x09We then need to convert it back to a Smalltalk object\x22\x0a\x09\x0a\x09^ ((self isSmalltalkObject: anObject) and: [ anObject isKindOf: Error ])\x0a\x09\x09ifTrue: [ anObject ]\x0a\x09\x09ifFalse: [ JavaScriptException on: anObject ]",
messageSends: ["ifTrue:ifFalse:", "on:", "and:", "isKindOf:", "isSmalltalkObject:"],
referencedClasses: ["JavaScriptException", "Error"]
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "at:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self[aString];
return self}, function($ctx1) {$ctx1.fill(self,"at:",{aString:aString},smalltalk.Smalltalk)})},
args: ["aString"],
source: "at: aString\x0a\x09<return self[aString]>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "basicParse:",
category: 'private',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.parser.parse(aString);
return self}, function($ctx1) {$ctx1.fill(self,"basicParse:",{aString:aString},smalltalk.Smalltalk)})},
args: ["aString"],
source: "basicParse: aString\x0a\x09<return smalltalk.parser.parse(aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "classes",
category: 'classes',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.classes();
return self}, function($ctx1) {$ctx1.fill(self,"classes",{},smalltalk.Smalltalk)})},
args: [],
source: "classes\x0a\x09<return self.classes()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "createPackage:",
category: 'packages',
fn: function (packageName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.addPackage(packageName);
return self}, function($ctx1) {$ctx1.fill(self,"createPackage:",{packageName:packageName},smalltalk.Smalltalk)})},
args: ["packageName"],
source: "createPackage: packageName\x0a\x09\x22Create and bind a new package with given name and return it.\x22\x0a\x09<return smalltalk.addPackage(packageName)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "createPackage:properties:",
category: 'private',
fn: function (packageName,aDict){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._deprecatedAPI();
$1=_st(aDict)._isEmpty();
if(! smalltalk.assert($1)){
self._error_("createPackage:properties: called with nonempty properties");
};
$2=self._createPackage_(packageName);
return $2;
}, function($ctx1) {$ctx1.fill(self,"createPackage:properties:",{packageName:packageName,aDict:aDict},smalltalk.Smalltalk)})},
args: ["packageName", "aDict"],
source: "createPackage: packageName properties: aDict\x0a\x09\x22Needed to import .st files: they begin with this call.\x22\x0a\x09self deprecatedAPI.\x0a\x09\x0a\x09aDict isEmpty ifFalse: [ self error: 'createPackage:properties: called with nonempty properties' ].\x0a\x09^ self createPackage: packageName",
messageSends: ["deprecatedAPI", "ifFalse:", "error:", "isEmpty", "createPackage:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "deleteClass:",
category: 'classes',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.removeClass(aClass);
return self}, function($ctx1) {$ctx1.fill(self,"deleteClass:",{aClass:aClass},smalltalk.Smalltalk)})},
args: ["aClass"],
source: "deleteClass: aClass\x0a\x09\x22Deletes a class by deleting its binding only. Use #removeClass instead\x22\x0a\x09\x0a\x09<self.removeClass(aClass)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "deleteGlobalJsVariable:",
category: 'globals',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._globalJsVariables())._remove_ifAbsent_(aString,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"deleteGlobalJsVariable:",{aString:aString},smalltalk.Smalltalk)})},
args: ["aString"],
source: "deleteGlobalJsVariable: aString\x0a\x09self globalJsVariables remove: aString ifAbsent:[]",
messageSends: ["remove:ifAbsent:", "globalJsVariables"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "deletePackage:",
category: 'packages',
fn: function (packageName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
delete smalltalk.packages[packageName];
return self}, function($ctx1) {$ctx1.fill(self,"deletePackage:",{packageName:packageName},smalltalk.Smalltalk)})},
args: ["packageName"],
source: "deletePackage: packageName\x0a\x09\x22Deletes a package by deleting its binding, but does not check if it contains classes etc.\x0a\x09To remove a package, use #removePackage instead.\x22\x0a\x0a\x09<delete smalltalk.packages[packageName]>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "globalJsVariables",
category: 'globals',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.globalJsVariables;
return self}, function($ctx1) {$ctx1.fill(self,"globalJsVariables",{},smalltalk.Smalltalk)})},
args: [],
source: "globalJsVariables\x0a\x09\x22Array of global JavaScript variables\x22\x0a\x09<return self.globalJsVariables>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "isSmalltalkObject:",
category: 'testing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return typeof anObject.klass !== 'undefined';
return self}, function($ctx1) {$ctx1.fill(self,"isSmalltalkObject:",{anObject:anObject},smalltalk.Smalltalk)})},
args: ["anObject"],
source: "isSmalltalkObject: anObject\x0a\x09\x22Consider anObject a Smalltalk object if it has a 'klass' property.\x0a\x09Note that this may be unaccurate\x22\x0a\x09\x0a\x09<return typeof anObject.klass !== 'undefined'>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "packageAt:",
category: 'packages',
fn: function (packageName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.packages[packageName];
return self}, function($ctx1) {$ctx1.fill(self,"packageAt:",{packageName:packageName},smalltalk.Smalltalk)})},
args: ["packageName"],
source: "packageAt: packageName\x0a\x09<return self.packages[packageName]>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "packageAt:ifAbsent:",
category: 'packages',
fn: function (packageName,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._packageAt_(packageName);
$1=_st($2)._ifNil_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"packageAt:ifAbsent:",{packageName:packageName,aBlock:aBlock},smalltalk.Smalltalk)})},
args: ["packageName", "aBlock"],
source: "packageAt: packageName ifAbsent: aBlock\x0a\x09^(self packageAt: packageName) ifNil: aBlock",
messageSends: ["ifNil:", "packageAt:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "packages",
category: 'packages',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.packages.all();
return self}, function($ctx1) {$ctx1.fill(self,"packages",{},smalltalk.Smalltalk)})},
args: [],
source: "packages\x0a\x09\x22Return all Package instances in the system.\x22\x0a\x0a\x09<return self.packages.all()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "parse:",
category: 'accessing',
fn: function (aString){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
self._try_catch_((function(){
return smalltalk.withContext(function($ctx2) {
result=self._basicParse_(aString);
return result;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(ex){
return smalltalk.withContext(function($ctx2) {
return _st(self._parseError_parsing_(ex,aString))._signal();
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})}));
$2=result;
_st($2)._source_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"parse:",{aString:aString,result:result},smalltalk.Smalltalk)})},
args: ["aString"],
source: "parse: aString\x0a\x09| result |\x0a\x09\x0a\x09self \x0a\x09\x09try: [result := self basicParse: aString] \x0a\x09\x09catch: [:ex | (self parseError: ex parsing: aString) signal].\x0a\x09\x09\x0a\x09^ result\x0a\x09\x09source: aString;\x0a\x09\x09yourself",
messageSends: ["try:catch:", "basicParse:", "signal", "parseError:parsing:", "source:", "yourself"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "parseError:parsing:",
category: 'error handling',
fn: function (anException,aString){
var self=this;
function $ParseError(){return smalltalk.ParseError||(typeof ParseError=="undefined"?nil:ParseError)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($ParseError())._new())._messageText_(_st(_st(_st(_st("Parse error on line ".__comma(_st(anException)._basicAt_("line"))).__comma(" column ")).__comma(_st(anException)._basicAt_("column"))).__comma(" : Unexpected character ")).__comma(_st(anException)._basicAt_("found")));
return $1;
}, function($ctx1) {$ctx1.fill(self,"parseError:parsing:",{anException:anException,aString:aString},smalltalk.Smalltalk)})},
args: ["anException", "aString"],
source: "parseError: anException parsing: aString\x0a\x09^ ParseError new messageText: 'Parse error on line ', (anException basicAt: 'line') ,' column ' , (anException basicAt: 'column') ,' : Unexpected character ', (anException basicAt: 'found')",
messageSends: ["messageText:", ",", "basicAt:", "new"],
referencedClasses: ["ParseError"]
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "pseudoVariableNames",
category: 'packages',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["self", "super", "nil", "true", "false", "thisContext"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"pseudoVariableNames",{},smalltalk.Smalltalk)})},
args: [],
source: "pseudoVariableNames\x0a\x09^ #('self' 'super' 'nil' 'true' 'false' 'thisContext')",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "readJSObject:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.readJSObject(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"readJSObject:",{anObject:anObject},smalltalk.Smalltalk)})},
args: ["anObject"],
source: "readJSObject: anObject\x0a\x09<return self.readJSObject(anObject)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "removeClass:",
category: 'classes',
fn: function (aClass){
var self=this;
function $ClassRemoved(){return smalltalk.ClassRemoved||(typeof ClassRemoved=="undefined"?nil:ClassRemoved)}
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(aClass)._isMetaclass();
if(smalltalk.assert($1)){
self._error_(_st(_st(aClass)._asString()).__comma(" is a Metaclass and cannot be removed!"));
};
self._deleteClass_(aClass);
$2=_st($ClassRemoved())._new();
_st($2)._theClass_(aClass);
$3=_st($2)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($3);
return self}, function($ctx1) {$ctx1.fill(self,"removeClass:",{aClass:aClass},smalltalk.Smalltalk)})},
args: ["aClass"],
source: "removeClass: aClass\x0a\x09aClass isMetaclass ifTrue: [self error: aClass asString, ' is a Metaclass and cannot be removed!'].\x0a\x09\x0a\x09self deleteClass: aClass.\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassRemoved new\x0a\x09\x09\x09theClass: aClass;\x0a\x09\x09\x09yourself)",
messageSends: ["ifTrue:", "error:", ",", "asString", "isMetaclass", "deleteClass:", "announce:", "theClass:", "new", "yourself", "current"],
referencedClasses: ["ClassRemoved", "SystemAnnouncer"]
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "removePackage:",
category: 'packages',
fn: function (packageName){
var self=this;
var pkg;
return smalltalk.withContext(function($ctx1) { 
pkg=self._packageAt_ifAbsent_(packageName,(function(){
return smalltalk.withContext(function($ctx2) {
return self._error_("Missing package: ".__comma(packageName));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(pkg)._classes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._removeClass_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
self._deletePackage_(packageName);
return self}, function($ctx1) {$ctx1.fill(self,"removePackage:",{packageName:packageName,pkg:pkg},smalltalk.Smalltalk)})},
args: ["packageName"],
source: "removePackage: packageName\x0a\x09\x22Removes a package and all its classes.\x22\x0a\x0a\x09| pkg |\x0a\x09pkg := self packageAt: packageName ifAbsent: [self error: 'Missing package: ', packageName].\x0a\x09pkg classes do: [:each |\x0a\x09\x09\x09self removeClass: each].\x0a\x09self deletePackage: packageName",
messageSends: ["packageAt:ifAbsent:", "error:", ",", "do:", "removeClass:", "classes", "deletePackage:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "renamePackage:to:",
category: 'packages',
fn: function (packageName,newName){
var self=this;
var pkg;
return smalltalk.withContext(function($ctx1) { 
var $1;
pkg=self._packageAt_ifAbsent_(packageName,(function(){
return smalltalk.withContext(function($ctx2) {
return self._error_("Missing package: ".__comma(packageName));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=self._packageAt_(newName);
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
self._error_("Already exists a package called: ".__comma(newName));
};
_st(self._basicAt_("packages"))._at_put_(newName,pkg);
_st(pkg)._name_(newName);
self._deletePackage_(packageName);
return self}, function($ctx1) {$ctx1.fill(self,"renamePackage:to:",{packageName:packageName,newName:newName,pkg:pkg},smalltalk.Smalltalk)})},
args: ["packageName", "newName"],
source: "renamePackage: packageName to: newName\x0a\x09\x22Rename a package.\x22\x0a\x0a\x09| pkg |\x0a\x09pkg := self packageAt: packageName ifAbsent: [self error: 'Missing package: ', packageName].\x0a\x09(self packageAt: newName) ifNotNil: [self error: 'Already exists a package called: ', newName].\x0a\x09(self basicAt: 'packages') at: newName put: pkg.\x0a\x09pkg name: newName.\x0a\x09self deletePackage: packageName.",
messageSends: ["packageAt:ifAbsent:", "error:", ",", "ifNotNil:", "packageAt:", "at:put:", "basicAt:", "name:", "deletePackage:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "reservedWords",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.reservedWords;
return self}, function($ctx1) {$ctx1.fill(self,"reservedWords",{},smalltalk.Smalltalk)})},
args: [],
source: "reservedWords\x0a\x09\x22JavaScript reserved words\x22\x0a\x09<return self.reservedWords>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "version",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "0.11.0";
}, function($ctx1) {$ctx1.fill(self,"version",{},smalltalk.Smalltalk)})},
args: [],
source: "version\x0a\x09\x22Answer the version string of Amber\x22\x0a\x09\x0a\x09^ '0.11.0'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);


smalltalk.Smalltalk.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk;
return self}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.Smalltalk.klass)})},
args: [],
source: "current\x0a\x09<return smalltalk>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk.klass);


smalltalk.addClass('Timeout', smalltalk.Object, ['rawTimeout'], 'Kernel-Objects');
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
source: "on: anObject\x0a\x09^self new rawTimeout: anObject; yourself",
messageSends: ["rawTimeout:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Timeout.klass);


smalltalk.addClass('UndefinedObject', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.UndefinedObject.comment="I describe the behavior of my sole instance, `nil`. `nil` represents a prior value for variables that have not been initialized, or for results which are meaningless.\x0a\x0a`nil` is the Smalltalk equivalent of the `undefined` JavaScript object.\x0a\x0a__note:__ When sending messages to the `undefined` JavaScript object, it will be replaced by `nil`.";
smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=null;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},smalltalk.UndefinedObject)})},
args: [],
source: "asJSON\x0a\x09^null",
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "deepCopy",
category: 'copying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{},smalltalk.UndefinedObject)})},
args: [],
source: "deepCopy\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNil:",
category: 'testing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self;
$1=_st($2)._ifNil_ifNotNil_(aBlock,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNil:",{aBlock:aBlock},smalltalk.UndefinedObject)})},
args: ["aBlock"],
source: "ifNil: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^self ifNil: aBlock ifNotNil: []",
messageSends: ["ifNil:ifNotNil:"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNil:ifNotNil:",
category: 'testing',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aBlock)._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNil:ifNotNil:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.UndefinedObject)})},
args: ["aBlock", "anotherBlock"],
source: "ifNil: aBlock ifNotNil: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^aBlock value",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNotNil:",
category: 'testing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:",{aBlock:aBlock},smalltalk.UndefinedObject)})},
args: ["aBlock"],
source: "ifNotNil: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNotNil:ifNil:",
category: 'testing',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anotherBlock)._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:ifNil:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.UndefinedObject)})},
args: ["aBlock", "anotherBlock"],
source: "ifNotNil: aBlock ifNil: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^anotherBlock value",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "isImmutable",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isImmutable",{},smalltalk.UndefinedObject)})},
args: [],
source: "isImmutable\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "isNil",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isNil",{},smalltalk.UndefinedObject)})},
args: [],
source: "isNil\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "notNil",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"notNil",{},smalltalk.UndefinedObject)})},
args: [],
source: "notNil\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_("nil");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.UndefinedObject)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: 'nil'",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "shallowCopy",
category: 'copying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"shallowCopy",{},smalltalk.UndefinedObject)})},
args: [],
source: "shallowCopy\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "subclass:instanceVariableNames:",
category: 'class creation',
fn: function (aString,anotherString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclass_instanceVariableNames_package_(aString,anotherString,nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:",{aString:aString,anotherString:anotherString},smalltalk.UndefinedObject)})},
args: ["aString", "anotherString"],
source: "subclass: aString instanceVariableNames: anotherString\x0a\x09^self subclass: aString instanceVariableNames: anotherString package: nil",
messageSends: ["subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "subclass:instanceVariableNames:category:",
category: 'class creation',
fn: function (aString,aString2,aString3){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._deprecatedAPI();
$1=self._subclass_instanceVariableNames_package_(aString,aString2,aString3);
return $1;
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:category:",{aString:aString,aString2:aString2,aString3:aString3},smalltalk.UndefinedObject)})},
args: ["aString", "aString2", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 category: aString3\x0a\x09\x22Kept for compatibility.\x22\x0a\x09self deprecatedAPI.\x0a\x09^self subclass: aString instanceVariableNames: aString2 package: aString3",
messageSends: ["deprecatedAPI", "subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "subclass:instanceVariableNames:package:",
category: 'class creation',
fn: function (aString,aString2,aString3){
var self=this;
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($ClassBuilder())._new())._superclass_subclass_instanceVariableNames_package_(self,_st(aString)._asString(),aString2,aString3);
return $1;
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:package:",{aString:aString,aString2:aString2,aString3:aString3},smalltalk.UndefinedObject)})},
args: ["aString", "aString2", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 package: aString3\x0a\x09^ClassBuilder new\x0a\x09\x09superclass: self subclass: aString asString instanceVariableNames: aString2 package: aString3",
messageSends: ["superclass:subclass:instanceVariableNames:package:", "asString", "new"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.UndefinedObject);


smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("You cannot create new instances of UndefinedObject. Use nil");
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.UndefinedObject.klass)})},
args: [],
source: "new\x0a\x09\x09self error: 'You cannot create new instances of UndefinedObject. Use nil'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.UndefinedObject.klass);


smalltalk.addMethod(
smalltalk.method({
selector: "asJavaScriptSelector",
category: '*Kernel-Objects',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._replace_with_("^([a-zA-Z0-9]*).*$","$1");
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptSelector",{},smalltalk.String)})},
args: [],
source: "asJavaScriptSelector\x0a\x09\x22Return first keyword of the selector, without trailing colon.\x22\x0a\x09^self replace: '^([a-zA-Z0-9]*).*$' with: '$1'",
messageSends: ["replace:with:"],
referencedClasses: []
}),
smalltalk.String);

