smalltalk.addPackage('Kernel-Classes');
smalltalk.addClass('Behavior', smalltalk.Object, [], 'Kernel-Classes');
smalltalk.Behavior.comment="I am the superclass of all class objects.\x0a\x0aI define the protocol for creating instances of a class with `#basicNew` and `#new` (see `boot.js` for class constructors details).\x0a\x0aMy instances know about the subclass/superclass relationships between classes, contain the description that instances are created from,\x0aand hold the method dictionary that's associated with each class.\x0a\x0aI also provides methods for compiling methods, examining the method dictionary, and iterating over the class hierarchy.";
smalltalk.addMethod(
smalltalk.method({
selector: ">>",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._methodAt_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,">>",{aString:aString},smalltalk.Behavior)})},
args: ["aString"],
source: ">> aString\x0a\x09^ self methodAt: aString",
messageSends: ["methodAt:"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "addCompiledMethod:",
category: 'compiling',
fn: function (aMethod){
var self=this;
var oldMethod,announcement;
function $MethodAdded(){return smalltalk.MethodAdded||(typeof MethodAdded=="undefined"?nil:MethodAdded)}
function $MethodModified(){return smalltalk.MethodModified||(typeof MethodModified=="undefined"?nil:MethodModified)}
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
oldMethod=_st(self._methodDictionary())._at_ifAbsent_(_st(aMethod)._selector(),(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=_st(self._protocols())._includes_(_st(aMethod)._protocol());
if(! smalltalk.assert($1)){
_st(self._organization())._addElement_(_st(aMethod)._protocol());
};
self._basicAddCompiledMethod_(aMethod);
$2=oldMethod;
if(($receiver = $2) == nil || $receiver == undefined){
$3=_st($MethodAdded())._new();
_st($3)._method_(aMethod);
$4=_st($3)._yourself();
announcement=$4;
} else {
$5=_st($MethodModified())._new();
_st($5)._oldMethod_(oldMethod);
_st($5)._method_(aMethod);
$6=_st($5)._yourself();
announcement=$6;
};
_st(_st($SystemAnnouncer())._current())._announce_(announcement);
return self}, function($ctx1) {$ctx1.fill(self,"addCompiledMethod:",{aMethod:aMethod,oldMethod:oldMethod,announcement:announcement},smalltalk.Behavior)})},
args: ["aMethod"],
source: "addCompiledMethod: aMethod\x0a\x09| oldMethod announcement |\x0a\x09\x0a\x09oldMethod := self methodDictionary\x0a\x09\x09at: aMethod selector\x0a\x09\x09ifAbsent: [ nil ].\x0a\x09\x0a\x09(self protocols includes: aMethod protocol)\x0a\x09\x09ifFalse: [ self organization addElement: aMethod protocol ].\x0a\x0a\x09self basicAddCompiledMethod: aMethod.\x0a\x09\x0a\x09announcement := oldMethod\x0a\x09\x09ifNil: [\x0a\x09\x09\x09MethodAdded new\x0a\x09\x09\x09\x09\x09method: aMethod;\x0a\x09\x09\x09\x09\x09yourself ]\x0a\x09\x09ifNotNil: [\x0a\x09\x09\x09MethodModified new\x0a\x09\x09\x09\x09\x09oldMethod: oldMethod;\x0a\x09\x09\x09\x09\x09method: aMethod;\x0a\x09\x09\x09\x09\x09yourself ].\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09\x09\x09announce: announcement",
messageSends: ["at:ifAbsent:", "selector", "methodDictionary", "ifFalse:", "addElement:", "protocol", "organization", "includes:", "protocols", "basicAddCompiledMethod:", "ifNil:ifNotNil:", "method:", "new", "yourself", "oldMethod:", "announce:", "current"],
referencedClasses: ["MethodAdded", "MethodModified", "SystemAnnouncer"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "allInstanceVariableNames",
category: 'accessing',
fn: function (){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
result=_st(self._instanceVariableNames())._copy();
$1=self._superclass();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(result)._addAll_(_st(self._superclass())._allInstanceVariableNames());
};
$2=result;
return $2;
}, function($ctx1) {$ctx1.fill(self,"allInstanceVariableNames",{result:result},smalltalk.Behavior)})},
args: [],
source: "allInstanceVariableNames\x0a\x09| result |\x0a\x09result := self instanceVariableNames copy.\x0a\x09self superclass ifNotNil: [\x0a\x09\x09result addAll: self superclass allInstanceVariableNames].\x0a\x09^result",
messageSends: ["copy", "instanceVariableNames", "ifNotNil:", "addAll:", "allInstanceVariableNames", "superclass"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "allSelectors",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$1=_st(self._allSuperclasses())._inject_into_(self._selectors(),(function(soFar,aBehavior){
return smalltalk.withContext(function($ctx2) {
$2=soFar;
_st($2)._addAll_(_st(aBehavior)._selectors());
$3=_st($2)._yourself();
return $3;
}, function($ctx2) {$ctx2.fillBlock({soFar:soFar,aBehavior:aBehavior},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"allSelectors",{},smalltalk.Behavior)})},
args: [],
source: "allSelectors\x0a\x09^self allSuperclasses\x0a\x09\x09inject: self selectors\x0a\x09\x09into: [ :soFar :aBehavior | soFar addAll: aBehavior selectors; yourself ]",
messageSends: ["inject:into:", "selectors", "addAll:", "yourself", "allSuperclasses"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "allSubclasses",
category: 'accessing',
fn: function (){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
var $1;
result=self._subclasses();
_st(self._subclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(result)._addAll_(_st(each)._allSubclasses());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=result;
return $1;
}, function($ctx1) {$ctx1.fill(self,"allSubclasses",{result:result},smalltalk.Behavior)})},
args: [],
source: "allSubclasses\x0a\x09| result |\x0a\x09result := self subclasses.\x0a\x09self subclasses do: [:each |\x0a\x09\x09result addAll: each allSubclasses].\x0a\x09^result",
messageSends: ["subclasses", "do:", "addAll:", "allSubclasses"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "allSubclassesDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._subclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
_st(aBlock)._value_(each);
return _st(each)._allSubclassesDo_(aBlock);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"allSubclassesDo:",{aBlock:aBlock},smalltalk.Behavior)})},
args: ["aBlock"],
source: "allSubclassesDo: aBlock\x0a\x09\x22Evaluate the argument, aBlock, for each of the receiver's subclasses.\x22\x0a\x0a\x09self subclasses do: [ :each |\x0a    \x09aBlock value: each.\x0a        each allSubclassesDo: aBlock ].",
messageSends: ["do:", "value:", "allSubclassesDo:", "subclasses"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "allSuperclasses",
category: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3;
$1=self._superclass();
if(($receiver = $1) == nil || $receiver == undefined){
$2=[];
return $2;
} else {
$1;
};
$4=_st($OrderedCollection())._with_(self._superclass());
_st($4)._addAll_(_st(self._superclass())._allSuperclasses());
$5=_st($4)._yourself();
$3=$5;
return $3;
}, function($ctx1) {$ctx1.fill(self,"allSuperclasses",{},smalltalk.Behavior)})},
args: [],
source: "allSuperclasses\x0a\x09\x0a\x09self superclass ifNil: [ ^ #() ].\x0a\x09\x0a\x09^ (OrderedCollection with: self superclass)\x0a\x09\x09addAll: self superclass allSuperclasses;\x0a\x09\x09yourself",
messageSends: ["ifNil:", "superclass", "addAll:", "allSuperclasses", "with:", "yourself"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "basicAddCompiledMethod:",
category: 'private',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.addMethod(aMethod, self);
return self}, function($ctx1) {$ctx1.fill(self,"basicAddCompiledMethod:",{aMethod:aMethod},smalltalk.Behavior)})},
args: ["aMethod"],
source: "basicAddCompiledMethod: aMethod\x0a\x09<smalltalk.addMethod(aMethod, self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "basicNew",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new self.fn();
return self}, function($ctx1) {$ctx1.fill(self,"basicNew",{},smalltalk.Behavior)})},
args: [],
source: "basicNew\x0a\x09<return new self.fn()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "basicRemoveCompiledMethod:",
category: 'private',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		smalltalk.removeMethod(aMethod)
		smalltalk.init(self);
	;
return self}, function($ctx1) {$ctx1.fill(self,"basicRemoveCompiledMethod:",{aMethod:aMethod},smalltalk.Behavior)})},
args: ["aMethod"],
source: "basicRemoveCompiledMethod: aMethod\x0a\x09<\x0a\x09\x09smalltalk.removeMethod(aMethod)\x0a\x09\x09smalltalk.init(self);\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "canUnderstand:",
category: 'testing',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self._methodDictionary())._keys())._includes_(_st(aSelector)._asString()))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self._superclass())._notNil())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self._superclass())._canUnderstand_(aSelector);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"canUnderstand:",{aSelector:aSelector},smalltalk.Behavior)})},
args: ["aSelector"],
source: "canUnderstand: aSelector\x0a\x09^(self methodDictionary keys includes: aSelector asString) or: [\x0a\x09\x09self superclass notNil and: [self superclass canUnderstand: aSelector]]",
messageSends: ["or:", "and:", "canUnderstand:", "superclass", "notNil", "includes:", "asString", "keys", "methodDictionary"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "comment",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._basicAt_("comment");
if(($receiver = $2) == nil || $receiver == undefined){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"comment",{},smalltalk.Behavior)})},
args: [],
source: "comment\x0a\x09^(self basicAt: 'comment') ifNil: ['']",
messageSends: ["ifNil:", "basicAt:"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "comment:",
category: 'accessing',
fn: function (aString){
var self=this;
function $ClassCommentChanged(){return smalltalk.ClassCommentChanged||(typeof ClassCommentChanged=="undefined"?nil:ClassCommentChanged)}
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._basicAt_put_("comment",aString);
$1=_st($ClassCommentChanged())._new();
_st($1)._theClass_(self);
$2=_st($1)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"comment:",{aString:aString},smalltalk.Behavior)})},
args: ["aString"],
source: "comment: aString\x0a\x09self basicAt: 'comment' put: aString.\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassCommentChanged new\x0a\x09\x09\x09theClass: self;\x0a\x09\x09\x09yourself)",
messageSends: ["basicAt:put:", "announce:", "theClass:", "new", "yourself", "current"],
referencedClasses: ["ClassCommentChanged", "SystemAnnouncer"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "commentStamp",
category: 'accessing',
fn: function (){
var self=this;
function $ClassCommentReader(){return smalltalk.ClassCommentReader||(typeof ClassCommentReader=="undefined"?nil:ClassCommentReader)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($ClassCommentReader())._new();
_st($2)._class_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"commentStamp",{},smalltalk.Behavior)})},
args: [],
source: "commentStamp\x0a\x09^ClassCommentReader new\x0a\x09class: self;\x0a\x09yourself",
messageSends: ["class:", "new", "yourself"],
referencedClasses: ["ClassCommentReader"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "commentStamp:prior:",
category: 'accessing',
fn: function (aStamp,prior){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._commentStamp();
return $1;
}, function($ctx1) {$ctx1.fill(self,"commentStamp:prior:",{aStamp:aStamp,prior:prior},smalltalk.Behavior)})},
args: ["aStamp", "prior"],
source: "commentStamp: aStamp prior: prior\x0a\x09\x09^self commentStamp",
messageSends: ["commentStamp"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "compile:",
category: 'compiling',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._compile_category_(aString,"");
return $1;
}, function($ctx1) {$ctx1.fill(self,"compile:",{aString:aString},smalltalk.Behavior)})},
args: ["aString"],
source: "compile: aString\x0a\x09^ self compile: aString category: ''",
messageSends: ["compile:category:"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "compile:category:",
category: 'compiling',
fn: function (aString,anotherString){
var self=this;
function $Compiler(){return smalltalk.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Compiler())._new())._install_forClass_category_(aString,self,anotherString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"compile:category:",{aString:aString,anotherString:anotherString},smalltalk.Behavior)})},
args: ["aString", "anotherString"],
source: "compile: aString category: anotherString\x0a\x09^ Compiler new\x0a\x09\x09install: aString\x0a\x09\x09forClass: self\x0a\x09\x09category: anotherString",
messageSends: ["install:forClass:category:", "new"],
referencedClasses: ["Compiler"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "definition",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "";
}, function($ctx1) {$ctx1.fill(self,"definition",{},smalltalk.Behavior)})},
args: [],
source: "definition\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "includesBehavior:",
category: 'testing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self.__eq_eq(aClass))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return self._inheritsFrom_(aClass);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"includesBehavior:",{aClass:aClass},smalltalk.Behavior)})},
args: ["aClass"],
source: "includesBehavior: aClass\x0a\x09^ self == aClass or: [\x0a\x09\x09\x09self inheritsFrom: aClass ]",
messageSends: ["or:", "inheritsFrom:", "=="],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "includesSelector:",
category: 'testing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._methodDictionary())._includesKey_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"includesSelector:",{aString:aString},smalltalk.Behavior)})},
args: ["aString"],
source: "includesSelector: aString\x0a\x09^ self methodDictionary includesKey: aString",
messageSends: ["includesKey:", "methodDictionary"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "inheritsFrom:",
category: 'testing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._superclass();
if(($receiver = $1) == nil || $receiver == undefined){
return false;
} else {
$1;
};
$2=_st(_st(aClass).__eq_eq(self._superclass()))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._superclass())._inheritsFrom_(aClass);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $2;
}, function($ctx1) {$ctx1.fill(self,"inheritsFrom:",{aClass:aClass},smalltalk.Behavior)})},
args: ["aClass"],
source: "inheritsFrom: aClass\x0a\x09self superclass ifNil: [ ^ false ].\x0a\x0a\x09^ aClass == self superclass or: [ \x0a\x09\x09self superclass inheritsFrom: aClass ]",
messageSends: ["ifNil:", "superclass", "or:", "inheritsFrom:", "=="],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "instanceVariableNames",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.iVarNames;
return self}, function($ctx1) {$ctx1.fill(self,"instanceVariableNames",{},smalltalk.Behavior)})},
args: [],
source: "instanceVariableNames\x0a\x09<return self.iVarNames>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "isBehavior",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isBehavior",{},smalltalk.Behavior)})},
args: [],
source: "isBehavior\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "lookupSelector:",
category: 'accessing',
fn: function (selector){
var self=this;
var lookupClass;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
lookupClass=self;
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(lookupClass).__eq(nil);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(lookupClass)._includesSelector_(selector);
if(smalltalk.assert($1)){
$2=_st(lookupClass)._methodAt_(selector);
throw $early=[$2];
};
lookupClass=_st(lookupClass)._superclass();
return lookupClass;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return nil;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"lookupSelector:",{selector:selector,lookupClass:lookupClass},smalltalk.Behavior)})},
args: ["selector"],
source: "lookupSelector: selector\x0a\x09\x22Look up the given selector in my methodDictionary.\x0a\x09Return the corresponding method if found.\x0a\x09Otherwise chase the superclass chain and try again.\x0a\x09Return nil if no method is found.\x22\x0a\x09\x0a\x09| lookupClass |\x0a\x09\x0a\x09lookupClass := self.\x0a\x09[ lookupClass = nil ] whileFalse: [\x0a\x09\x09(lookupClass includesSelector: selector)\x0a\x09\x09\x09\x09ifTrue: [ ^ lookupClass methodAt: selector ].\x0a\x09\x09\x09lookupClass := lookupClass superclass ].\x0a\x09^ nil",
messageSends: ["whileFalse:", "ifTrue:", "methodAt:", "includesSelector:", "superclass", "="],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "methodAt:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._methodDictionary())._at_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodAt:",{aString:aString},smalltalk.Behavior)})},
args: ["aString"],
source: "methodAt: aString\x0a\x09^ self methodDictionary at: aString",
messageSends: ["at:", "methodDictionary"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "methodDictionary",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var dict = smalltalk.HashedCollection._new();
	var methods = self.methods;
	for(var i in methods) {
		if(methods[i].selector) {
			dict._at_put_(methods[i].selector, methods[i]);
		}
	};
	return dict;
return self}, function($ctx1) {$ctx1.fill(self,"methodDictionary",{},smalltalk.Behavior)})},
args: [],
source: "methodDictionary\x0a\x09<var dict = smalltalk.HashedCollection._new();\x0a\x09var methods = self.methods;\x0a\x09for(var i in methods) {\x0a\x09\x09if(methods[i].selector) {\x0a\x09\x09\x09dict._at_put_(methods[i].selector, methods[i]);\x0a\x09\x09}\x0a\x09};\x0a\x09return dict>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "methods",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._methodDictionary())._values();
return $1;
}, function($ctx1) {$ctx1.fill(self,"methods",{},smalltalk.Behavior)})},
args: [],
source: "methods\x0a\x09^ self methodDictionary values",
messageSends: ["values", "methodDictionary"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "methodsFor:",
category: 'accessing',
fn: function (aString){
var self=this;
function $ClassCategoryReader(){return smalltalk.ClassCategoryReader||(typeof ClassCategoryReader=="undefined"?nil:ClassCategoryReader)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($ClassCategoryReader())._new();
_st($2)._class_category_(self,aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodsFor:",{aString:aString},smalltalk.Behavior)})},
args: ["aString"],
source: "methodsFor: aString\x0a\x09^ClassCategoryReader new\x0a\x09\x09class: self category: aString;\x0a\x09\x09yourself",
messageSends: ["class:category:", "new", "yourself"],
referencedClasses: ["ClassCategoryReader"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "methodsFor:stamp:",
category: 'accessing',
fn: function (aString,aStamp){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._methodsFor_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodsFor:stamp:",{aString:aString,aStamp:aStamp},smalltalk.Behavior)})},
args: ["aString", "aStamp"],
source: "methodsFor: aString stamp: aStamp\x0a\x09\x22Added for compatibility, right now ignores stamp.\x22\x0a\x09^self methodsFor: aString",
messageSends: ["methodsFor:"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "methodsInProtocol:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._methodDictionary())._values())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._protocol()).__eq(aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodsInProtocol:",{aString:aString},smalltalk.Behavior)})},
args: ["aString"],
source: "methodsInProtocol: aString\x0a\x09^ self methodDictionary values select: [ :each | each protocol = aString ]",
messageSends: ["select:", "=", "protocol", "values", "methodDictionary"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "name",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.className || nil;
return self}, function($ctx1) {$ctx1.fill(self,"name",{},smalltalk.Behavior)})},
args: [],
source: "name\x0a\x09<return self.className || nil>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._basicNew())._initialize();
return $1;
}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.Behavior)})},
args: [],
source: "new\x0a\x09^self basicNew initialize",
messageSends: ["initialize", "basicNew"],
referencedClasses: []
}),
smalltalk.Behavior);

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
}, function($ctx1) {$ctx1.fill(self,"organization",{},smalltalk.Behavior)})},
args: [],
source: "organization\x0a\x09^ self basicAt: 'organization'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "protocols",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._organization())._elements())._sorted();
return $1;
}, function($ctx1) {$ctx1.fill(self,"protocols",{},smalltalk.Behavior)})},
args: [],
source: "protocols\x0a\x09^ self organization elements sorted",
messageSends: ["sorted", "elements", "organization"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "protocolsDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var methodsByCategory;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
methodsByCategory=_st($HashedCollection())._new();
_st(_st(self._methodDictionary())._values())._do_((function(m){
return smalltalk.withContext(function($ctx2) {
return _st(_st(methodsByCategory)._at_ifAbsentPut_(_st(m)._category(),(function(){
return smalltalk.withContext(function($ctx3) {
return _st($Array())._new();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})})))._add_(m);
}, function($ctx2) {$ctx2.fillBlock({m:m},$ctx1)})}));
_st(self._protocols())._do_((function(category){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_value_(category,_st(methodsByCategory)._at_(category));
}, function($ctx2) {$ctx2.fillBlock({category:category},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"protocolsDo:",{aBlock:aBlock,methodsByCategory:methodsByCategory},smalltalk.Behavior)})},
args: ["aBlock"],
source: "protocolsDo: aBlock\x0a\x09\x22Execute aBlock for each method category with\x0a\x09its collection of methods in the sort order of category name.\x22\x0a\x0a\x09| methodsByCategory |\x0a\x09methodsByCategory := HashedCollection new.\x0a\x09self methodDictionary values do: [:m |\x0a\x09\x09(methodsByCategory at: m category ifAbsentPut: [Array new])\x0a\x09\x09\x09add: m].\x0a\x09self protocols do: [:category |\x0a\x09\x09aBlock value: category value: (methodsByCategory at: category)]",
messageSends: ["new", "do:", "add:", "at:ifAbsentPut:", "category", "values", "methodDictionary", "value:value:", "at:", "protocols"],
referencedClasses: ["HashedCollection", "Array"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "prototype",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.fn.prototype;
return self}, function($ctx1) {$ctx1.fill(self,"prototype",{},smalltalk.Behavior)})},
args: [],
source: "prototype\x0a\x09<return self.fn.prototype>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "recompile",
category: 'compiling',
fn: function (){
var self=this;
function $Compiler(){return smalltalk.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Compiler())._new())._recompile_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"recompile",{},smalltalk.Behavior)})},
args: [],
source: "recompile\x0a\x09^ Compiler new recompile: self",
messageSends: ["recompile:", "new"],
referencedClasses: ["Compiler"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "removeCompiledMethod:",
category: 'compiling',
fn: function (aMethod){
var self=this;
function $MethodRemoved(){return smalltalk.MethodRemoved||(typeof MethodRemoved=="undefined"?nil:MethodRemoved)}
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._basicRemoveCompiledMethod_(aMethod);
_st(self._methods())._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._protocol()).__eq(_st(aMethod)._protocol());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._organization())._removeElement_(_st(aMethod)._protocol());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=_st($MethodRemoved())._new();
_st($1)._method_(aMethod);
$2=_st($1)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"removeCompiledMethod:",{aMethod:aMethod},smalltalk.Behavior)})},
args: ["aMethod"],
source: "removeCompiledMethod: aMethod\x0a\x09self basicRemoveCompiledMethod: aMethod.\x0a\x09\x0a\x09self methods\x0a\x09\x09detect: [ :each | each protocol = aMethod protocol ]\x0a\x09\x09ifNone: [ self organization removeElement: aMethod protocol ].\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (MethodRemoved new\x0a\x09\x09\x09method: aMethod;\x0a\x09\x09\x09yourself)",
messageSends: ["basicRemoveCompiledMethod:", "detect:ifNone:", "=", "protocol", "removeElement:", "organization", "methods", "announce:", "method:", "new", "yourself", "current"],
referencedClasses: ["MethodRemoved", "SystemAnnouncer"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "selectors",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._methodDictionary())._keys();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectors",{},smalltalk.Behavior)})},
args: [],
source: "selectors\x0a\x09^ self methodDictionary keys",
messageSends: ["keys", "methodDictionary"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "subclasses",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.subclasses(self);
return self}, function($ctx1) {$ctx1.fill(self,"subclasses",{},smalltalk.Behavior)})},
args: [],
source: "subclasses\x0a\x09<return smalltalk.subclasses(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "superclass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.superclass || nil;
return self}, function($ctx1) {$ctx1.fill(self,"superclass",{},smalltalk.Behavior)})},
args: [],
source: "superclass\x0a\x09<return self.superclass || nil>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "theMetaClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._class();
return $1;
}, function($ctx1) {$ctx1.fill(self,"theMetaClass",{},smalltalk.Behavior)})},
args: [],
source: "theMetaClass\x0a\x09^ self class",
messageSends: ["class"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "theNonMetaClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"theNonMetaClass",{},smalltalk.Behavior)})},
args: [],
source: "theNonMetaClass\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "withAllSubclasses",
category: 'accessing',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Array())._with_(self);
_st($2)._addAll_(self._allSubclasses());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withAllSubclasses",{},smalltalk.Behavior)})},
args: [],
source: "withAllSubclasses\x0a\x09^(Array with: self) addAll: self allSubclasses; yourself",
messageSends: ["addAll:", "allSubclasses", "with:", "yourself"],
referencedClasses: ["Array"]
}),
smalltalk.Behavior);



smalltalk.addClass('Class', smalltalk.Behavior, [], 'Kernel-Classes');
smalltalk.Class.comment="I am __the__ class object.\x0a\x0aMy instances are the classes of the system.\x0aClass creation is done throught a `ClassBuilder` instance.";
smalltalk.addMethod(
smalltalk.method({
selector: "asJavascript",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1="smalltalk.".__comma(self._name());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJavascript",{},smalltalk.Class)})},
args: [],
source: "asJavascript\x0a\x09^ 'smalltalk.', self name",
messageSends: [",", "name"],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "category",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._package();
if(($receiver = $2) == nil || $receiver == undefined){
$1="Unclassified";
} else {
$1=_st(self._package())._name();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"category",{},smalltalk.Class)})},
args: [],
source: "category\x0a\x09^self package ifNil: ['Unclassified'] ifNotNil: [self package name]",
messageSends: ["ifNil:ifNotNil:", "name", "package"],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "definition",
category: 'accessing',
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$1;
$1=_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
$2=stream;
_st($2)._nextPutAll_(_st(self._superclass())._asString());
_st($2)._nextPutAll_(" subclass: #");
_st($2)._nextPutAll_(self._name());
_st($2)._nextPutAll_(_st(_st($String())._lf()).__comma(_st($String())._tab()));
$3=_st($2)._nextPutAll_("instanceVariableNames: '");
$3;
_st(self._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(stream)._nextPutAll_(each);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(stream)._nextPutAll_(" ");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$4=stream;
_st($4)._nextPutAll_(_st("'".__comma(_st($String())._lf())).__comma(_st($String())._tab()));
_st($4)._nextPutAll_("package: '");
_st($4)._nextPutAll_(self._category());
$5=_st($4)._nextPutAll_("'");
return $5;
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"definition",{},smalltalk.Class)})},
args: [],
source: "definition\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09stream\x0a\x09\x09\x09nextPutAll: self superclass asString;\x0a\x09\x09\x09nextPutAll: ' subclass: #';\x0a\x09\x09\x09nextPutAll: self name;\x0a\x09\x09\x09nextPutAll: String lf, String tab;\x0a\x09\x09\x09nextPutAll: 'instanceVariableNames: '''.\x0a\x09\x09self instanceVariableNames\x0a\x09\x09\x09do: [ :each | stream nextPutAll: each ]\x0a\x09\x09\x09separatedBy: [ stream nextPutAll: ' ' ].\x0a\x09\x09stream\x0a\x09\x09\x09nextPutAll: '''', String lf, String tab;\x0a\x09\x09\x09nextPutAll: 'package: ''';\x0a\x09\x09\x09nextPutAll: self category;\x0a\x09\x09\x09nextPutAll: '''' ]",
messageSends: ["streamContents:", "nextPutAll:", "asString", "superclass", "name", ",", "tab", "lf", "do:separatedBy:", "instanceVariableNames", "category"],
referencedClasses: ["String"]
}),
smalltalk.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "isClass",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isClass",{},smalltalk.Class)})},
args: [],
source: "isClass\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "package",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicAt_("pkg");
return $1;
}, function($ctx1) {$ctx1.fill(self,"package",{},smalltalk.Class)})},
args: [],
source: "package\x0a\x09^ self basicAt: 'pkg'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "package:",
category: 'accessing',
fn: function (aPackage){
var self=this;
var oldPackage;
function $ClassMoved(){return smalltalk.ClassMoved||(typeof ClassMoved=="undefined"?nil:ClassMoved)}
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(self._package()).__eq(aPackage);
if(smalltalk.assert($1)){
$2=self;
return $2;
};
oldPackage=self._package();
self._basicAt_put_("pkg",aPackage);
_st(_st(oldPackage)._organization())._removeElement_(self);
_st(_st(aPackage)._organization())._addElement_(self);
$3=_st($ClassMoved())._new();
_st($3)._theClass_(self);
_st($3)._oldPackage_(oldPackage);
$4=_st($3)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($4);
return self}, function($ctx1) {$ctx1.fill(self,"package:",{aPackage:aPackage,oldPackage:oldPackage},smalltalk.Class)})},
args: ["aPackage"],
source: "package: aPackage\x0a\x09| oldPackage |\x0a\x09\x0a\x09self package = aPackage ifTrue: [ ^ self ].\x0a\x09\x0a\x09oldPackage := self package.\x0a\x09\x0a\x09self basicAt: 'pkg' put: aPackage.\x0a\x09oldPackage organization removeElement: self.\x0a\x09aPackage organization addElement: self.\x0a\x0a\x09SystemAnnouncer current announce: (ClassMoved new\x0a\x09\x09theClass: self;\x0a\x09\x09oldPackage: oldPackage;\x0a\x09\x09yourself)",
messageSends: ["ifTrue:", "=", "package", "basicAt:put:", "removeElement:", "organization", "addElement:", "announce:", "theClass:", "new", "oldPackage:", "yourself", "current"],
referencedClasses: ["ClassMoved", "SystemAnnouncer"]
}),
smalltalk.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_(self._name());
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Class)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: self name",
messageSends: ["nextPutAll:", "name"],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "rename:",
category: 'accessing',
fn: function (aString){
var self=this;
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($ClassBuilder())._new())._renameClass_to_(self,aString);
return self}, function($ctx1) {$ctx1.fill(self,"rename:",{aString:aString},smalltalk.Class)})},
args: ["aString"],
source: "rename: aString\x0a\x09ClassBuilder new renameClass: self to: aString",
messageSends: ["renameClass:to:", "new"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.Class);

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
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:",{aString:aString,anotherString:anotherString},smalltalk.Class)})},
args: ["aString", "anotherString"],
source: "subclass: aString instanceVariableNames: anotherString\x0a\x09\x22Kept for compatibility.\x22\x0a\x09^self subclass: aString instanceVariableNames: anotherString package: nil",
messageSends: ["subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.Class);

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
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:category:",{aString:aString,aString2:aString2,aString3:aString3},smalltalk.Class)})},
args: ["aString", "aString2", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 category: aString3\x0a\x09\x22Kept for compatibility.\x22\x0a\x09self deprecatedAPI.\x0a\x09^self subclass: aString instanceVariableNames: aString2 package: aString3",
messageSends: ["deprecatedAPI", "subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "subclass:instanceVariableNames:classVariableNames:poolDictionaries:category:",
category: 'class creation',
fn: function (aString,aString2,classVars,pools,aString3){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclass_instanceVariableNames_package_(aString,aString2,aString3);
return $1;
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:classVariableNames:poolDictionaries:category:",{aString:aString,aString2:aString2,classVars:classVars,pools:pools,aString3:aString3},smalltalk.Class)})},
args: ["aString", "aString2", "classVars", "pools", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 classVariableNames: classVars poolDictionaries: pools category: aString3\x0a\x09\x22Just ignore class variables and pools. Added for compatibility.\x22\x0a\x09^self subclass: aString instanceVariableNames: aString2 package: aString3",
messageSends: ["subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.Class);

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
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:package:",{aString:aString,aString2:aString2,aString3:aString3},smalltalk.Class)})},
args: ["aString", "aString2", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 package: aString3\x0a\x09^ClassBuilder new\x0a\x09\x09superclass: self subclass: aString asString instanceVariableNames: aString2 package: aString3",
messageSends: ["superclass:subclass:instanceVariableNames:package:", "asString", "new"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.Class);



smalltalk.addClass('Metaclass', smalltalk.Behavior, [], 'Kernel-Classes');
smalltalk.Metaclass.comment="I am the root of the class hierarchy.\x0a\x0aMy instances are metaclasses, one for each real class, and have a single instance, which they hold onto: the class that they are the metaclass of.";
smalltalk.addMethod(
smalltalk.method({
selector: "asJavascript",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("smalltalk.".__comma(_st(self._instanceClass())._name())).__comma(".klass");
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJavascript",{},smalltalk.Metaclass)})},
args: [],
source: "asJavascript\x0a\x09^ 'smalltalk.', self instanceClass name, '.klass'",
messageSends: [",", "name", "instanceClass"],
referencedClasses: []
}),
smalltalk.Metaclass);

smalltalk.addMethod(
smalltalk.method({
selector: "definition",
category: 'accessing',
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$1=_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
$2=stream;
_st($2)._nextPutAll_(self._asString());
$3=_st($2)._nextPutAll_(" instanceVariableNames: '");
$3;
_st(self._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(stream)._nextPutAll_(each);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(stream)._nextPutAll_(" ");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return _st(stream)._nextPutAll_("'");
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"definition",{},smalltalk.Metaclass)})},
args: [],
source: "definition\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09stream\x0a\x09\x09\x09nextPutAll: self asString;\x0a\x09\x09\x09nextPutAll: ' instanceVariableNames: '''.\x0a\x09\x09self instanceVariableNames\x0a\x09\x09\x09do: [ :each | stream nextPutAll: each ]\x0a\x09\x09\x09separatedBy: [ stream nextPutAll: ' ' ].\x0a\x09\x09stream nextPutAll: '''' ]",
messageSends: ["streamContents:", "nextPutAll:", "asString", "do:separatedBy:", "instanceVariableNames"],
referencedClasses: ["String"]
}),
smalltalk.Metaclass);

smalltalk.addMethod(
smalltalk.method({
selector: "instanceClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.instanceClass;
return self}, function($ctx1) {$ctx1.fill(self,"instanceClass",{},smalltalk.Metaclass)})},
args: [],
source: "instanceClass\x0a\x09<return self.instanceClass>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Metaclass);

smalltalk.addMethod(
smalltalk.method({
selector: "instanceVariableNames:",
category: 'accessing',
fn: function (aCollection){
var self=this;
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($ClassBuilder())._new())._class_instanceVariableNames_(self,aCollection);
return self}, function($ctx1) {$ctx1.fill(self,"instanceVariableNames:",{aCollection:aCollection},smalltalk.Metaclass)})},
args: ["aCollection"],
source: "instanceVariableNames: aCollection\x0a\x09ClassBuilder new\x0a\x09\x09class: self instanceVariableNames: aCollection",
messageSends: ["class:instanceVariableNames:", "new"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.Metaclass);

smalltalk.addMethod(
smalltalk.method({
selector: "isMetaclass",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isMetaclass",{},smalltalk.Metaclass)})},
args: [],
source: "isMetaclass\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Metaclass);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_(_st(self._instanceClass())._name());
$2=_st($1)._nextPutAll_(" class");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Metaclass)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: self instanceClass name;\x0a\x09\x09nextPutAll: ' class'",
messageSends: ["nextPutAll:", "name", "instanceClass"],
referencedClasses: []
}),
smalltalk.Metaclass);

smalltalk.addMethod(
smalltalk.method({
selector: "theMetaClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"theMetaClass",{},smalltalk.Metaclass)})},
args: [],
source: "theMetaClass\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Metaclass);

smalltalk.addMethod(
smalltalk.method({
selector: "theNonMetaClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._instanceClass();
return $1;
}, function($ctx1) {$ctx1.fill(self,"theNonMetaClass",{},smalltalk.Metaclass)})},
args: [],
source: "theNonMetaClass\x0a\x09^ self instanceClass",
messageSends: ["instanceClass"],
referencedClasses: []
}),
smalltalk.Metaclass);



smalltalk.addClass('ClassBuilder', smalltalk.Object, [], 'Kernel-Classes');
smalltalk.ClassBuilder.comment="I am responsible for compiling new classes or modifying existing classes in the system.\x0a\x0aRather than using me directly to compile a class, use `Class >> subclass:instanceVariableNames:package:`.";
smalltalk.addMethod(
smalltalk.method({
selector: "addSubclassOf:named:instanceVariableNames:package:",
category: 'class definition',
fn: function (aClass,className,aCollection,packageName){
var self=this;
var theClass;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
theClass=_st(_st($Smalltalk())._current())._at_(className);
$1=theClass;
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(theClass)._package_(self._createPackageNamed_(packageName));
$2=_st(_st(theClass)._superclass()).__eq_eq(aClass);
if(! smalltalk.assert($2)){
$3=self._migrateClassNamed_superclass_instanceVariableNames_package_(className,aClass,aCollection,packageName);
return $3;
};
};
$4=self._basicAddSubclassOf_named_instanceVariableNames_package_(aClass,className,aCollection,packageName);
return $4;
}, function($ctx1) {$ctx1.fill(self,"addSubclassOf:named:instanceVariableNames:package:",{aClass:aClass,className:className,aCollection:aCollection,packageName:packageName,theClass:theClass},smalltalk.ClassBuilder)})},
args: ["aClass", "className", "aCollection", "packageName"],
source: "addSubclassOf: aClass named: className instanceVariableNames: aCollection package: packageName\x0a\x09| theClass |\x0a\x09\x0a\x09theClass := Smalltalk current at: className.\x0a\x09\x0a\x09theClass ifNotNil: [\x0a\x09\x09theClass package: (self createPackageNamed: packageName).\x0a\x09\x09theClass superclass == aClass ifFalse: [\x0a\x09\x09\x09^ self\x0a\x09\x09\x09\x09migrateClassNamed: className\x0a\x09\x09\x09\x09superclass: aClass\x0a\x09\x09\x09\x09instanceVariableNames: aCollection\x0a\x09\x09\x09\x09package: packageName ] ].\x0a\x09\x09\x0a\x09\x09^ self\x0a\x09\x09\x09basicAddSubclassOf: aClass\x0a\x09\x09\x09named: className\x0a\x09\x09\x09instanceVariableNames: aCollection\x0a\x09\x09\x09package: packageName",
messageSends: ["at:", "current", "ifNotNil:", "package:", "createPackageNamed:", "ifFalse:", "migrateClassNamed:superclass:instanceVariableNames:package:", "==", "superclass", "basicAddSubclassOf:named:instanceVariableNames:package:"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "basicAddSubclassOf:named:instanceVariableNames:package:",
category: 'private',
fn: function (aClass,aString,aCollection,packageName){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		smalltalk.addClass(aString, aClass, aCollection, packageName);
		return smalltalk[aString]
	;
return self}, function($ctx1) {$ctx1.fill(self,"basicAddSubclassOf:named:instanceVariableNames:package:",{aClass:aClass,aString:aString,aCollection:aCollection,packageName:packageName},smalltalk.ClassBuilder)})},
args: ["aClass", "aString", "aCollection", "packageName"],
source: "basicAddSubclassOf: aClass named: aString instanceVariableNames: aCollection package: packageName\x0a\x09<\x0a\x09\x09smalltalk.addClass(aString, aClass, aCollection, packageName);\x0a\x09\x09return smalltalk[aString]\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "basicClass:instanceVariableNames:",
category: 'private',
fn: function (aClass,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._basicClass_instanceVariables_(aClass,self._instanceVariableNamesFor_(aString));
return self}, function($ctx1) {$ctx1.fill(self,"basicClass:instanceVariableNames:",{aClass:aClass,aString:aString},smalltalk.ClassBuilder)})},
args: ["aClass", "aString"],
source: "basicClass: aClass instanceVariableNames: aString\x0a\x09self basicClass: aClass instanceVariables: (self instanceVariableNamesFor: aString)",
messageSends: ["basicClass:instanceVariables:", "instanceVariableNamesFor:"],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "basicClass:instanceVariables:",
category: 'private',
fn: function (aClass,aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aClass)._isMetaclass();
if(! smalltalk.assert($1)){
self._error_(_st(_st(aClass)._name()).__comma(" is not a metaclass"));
};
_st(aClass)._basicAt_put_("iVarNames",aCollection);
return self}, function($ctx1) {$ctx1.fill(self,"basicClass:instanceVariables:",{aClass:aClass,aCollection:aCollection},smalltalk.ClassBuilder)})},
args: ["aClass", "aCollection"],
source: "basicClass: aClass instanceVariables: aCollection\x0a\x0a\x09aClass isMetaclass ifFalse: [self error: aClass name, ' is not a metaclass'].\x0a\x09aClass basicAt: 'iVarNames' put: aCollection",
messageSends: ["ifFalse:", "error:", ",", "name", "isMetaclass", "basicAt:put:"],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "basicRemoveClass:",
category: 'private',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.removeClass(aClass);
return self}, function($ctx1) {$ctx1.fill(self,"basicRemoveClass:",{aClass:aClass},smalltalk.ClassBuilder)})},
args: ["aClass"],
source: "basicRemoveClass: aClass\x0a\x09<smalltalk.removeClass(aClass)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "basicRenameClass:to:",
category: 'private',
fn: function (aClass,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		smalltalk[aString] = aClass;
		delete smalltalk[aClass.className];
		aClass.className = aString;
	;
return self}, function($ctx1) {$ctx1.fill(self,"basicRenameClass:to:",{aClass:aClass,aString:aString},smalltalk.ClassBuilder)})},
args: ["aClass", "aString"],
source: "basicRenameClass: aClass to: aString\x0a\x09<\x0a\x09\x09smalltalk[aString] = aClass;\x0a\x09\x09delete smalltalk[aClass.className];\x0a\x09\x09aClass.className = aString;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "basicSwapClassNames:with:",
category: 'private',
fn: function (aClass,anotherClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var tmp = aClass.className;
		aClass.className = anotherClass.className;
		anotherClass.className = tmp;
	;
return self}, function($ctx1) {$ctx1.fill(self,"basicSwapClassNames:with:",{aClass:aClass,anotherClass:anotherClass},smalltalk.ClassBuilder)})},
args: ["aClass", "anotherClass"],
source: "basicSwapClassNames: aClass with: anotherClass\x0a\x09<\x0a\x09\x09var tmp = aClass.className;\x0a\x09\x09aClass.className = anotherClass.className;\x0a\x09\x09anotherClass.className = tmp;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "class:instanceVariableNames:",
category: 'class definition',
fn: function (aClass,ivarNames){
var self=this;
function $ClassDefinitionChanged(){return smalltalk.ClassDefinitionChanged||(typeof ClassDefinitionChanged=="undefined"?nil:ClassDefinitionChanged)}
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._basicClass_instanceVariableNames_(aClass,ivarNames);
self._setupClass_(aClass);
$1=_st($ClassDefinitionChanged())._new();
_st($1)._theClass_(aClass);
$2=_st($1)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"class:instanceVariableNames:",{aClass:aClass,ivarNames:ivarNames},smalltalk.ClassBuilder)})},
args: ["aClass", "ivarNames"],
source: "class: aClass instanceVariableNames: ivarNames\x0a\x09self basicClass: aClass instanceVariableNames: ivarNames.\x0a\x09self setupClass: aClass.\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassDefinitionChanged new\x0a\x09\x09\x09theClass: aClass;\x0a\x09\x09\x09yourself)",
messageSends: ["basicClass:instanceVariableNames:", "setupClass:", "announce:", "theClass:", "new", "yourself", "current"],
referencedClasses: ["ClassDefinitionChanged", "SystemAnnouncer"]
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "copyClass:named:",
category: 'copying',
fn: function (aClass,className){
var self=this;
var newClass;
function $ClassAdded(){return smalltalk.ClassAdded||(typeof ClassAdded=="undefined"?nil:ClassAdded)}
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
newClass=self._addSubclassOf_named_instanceVariableNames_package_(_st(aClass)._superclass(),className,_st(aClass)._instanceVariableNames(),_st(_st(aClass)._package())._name());
self._copyClass_to_(aClass,newClass);
$1=_st($ClassAdded())._new();
_st($1)._theClass_(newClass);
$2=_st($1)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($2);
$3=newClass;
return $3;
}, function($ctx1) {$ctx1.fill(self,"copyClass:named:",{aClass:aClass,className:className,newClass:newClass},smalltalk.ClassBuilder)})},
args: ["aClass", "className"],
source: "copyClass: aClass named: className\x0a\x09| newClass |\x0a\x0a\x09newClass := self\x0a\x09\x09addSubclassOf: aClass superclass\x0a\x09\x09named: className\x0a\x09\x09instanceVariableNames: aClass instanceVariableNames\x0a\x09\x09package: aClass package name.\x0a\x0a\x09self copyClass: aClass to: newClass.\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassAdded new\x0a\x09\x09\x09theClass: newClass;\x0a\x09\x09\x09yourself).\x0a\x09\x0a\x09^newClass",
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "superclass", "instanceVariableNames", "name", "package", "copyClass:to:", "announce:", "theClass:", "new", "yourself", "current"],
referencedClasses: ["ClassAdded", "SystemAnnouncer"]
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "copyClass:to:",
category: 'copying',
fn: function (aClass,anotherClass){
var self=this;
function $Compiler(){return smalltalk.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
return smalltalk.withContext(function($ctx1) { 
_st(anotherClass)._comment_(_st(aClass)._comment());
_st(_st(_st(aClass)._methodDictionary())._values())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st($Compiler())._new())._install_forClass_category_(_st(each)._source(),anotherClass,_st(each)._category());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
self._basicClass_instanceVariables_(_st(anotherClass)._class(),_st(_st(aClass)._class())._instanceVariableNames());
_st(_st(_st(_st(aClass)._class())._methodDictionary())._values())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st($Compiler())._new())._install_forClass_category_(_st(each)._source(),_st(anotherClass)._class(),_st(each)._category());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
self._setupClass_(anotherClass);
return self}, function($ctx1) {$ctx1.fill(self,"copyClass:to:",{aClass:aClass,anotherClass:anotherClass},smalltalk.ClassBuilder)})},
args: ["aClass", "anotherClass"],
source: "copyClass: aClass to: anotherClass\x0a\x0a\x09anotherClass comment: aClass comment.\x0a\x0a\x09aClass methodDictionary values do: [ :each |\x0a\x09\x09Compiler new install: each source forClass: anotherClass category: each category ].\x0a\x0a\x09self basicClass: anotherClass class instanceVariables: aClass class instanceVariableNames.\x0a\x0a\x09aClass class methodDictionary values do: [ :each |\x0a\x09\x09Compiler new install: each source forClass: anotherClass class category: each category ].\x0a\x0a\x09self setupClass: anotherClass",
messageSends: ["comment:", "comment", "do:", "install:forClass:category:", "source", "category", "new", "values", "methodDictionary", "basicClass:instanceVariables:", "class", "instanceVariableNames", "setupClass:"],
referencedClasses: ["Compiler"]
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "createPackageNamed:",
category: 'private',
fn: function (aString){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $Package(){return smalltalk.Package||(typeof Package=="undefined"?nil:Package)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Package())._named_ifAbsent_(aString,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st($Smalltalk())._current())._createPackage_(aString);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"createPackageNamed:",{aString:aString},smalltalk.ClassBuilder)})},
args: ["aString"],
source: "createPackageNamed: aString\x0a\x09^ Package named: aString ifAbsent: [\x0a\x09\x09Smalltalk current createPackage: aString ]",
messageSends: ["named:ifAbsent:", "createPackage:", "current"],
referencedClasses: ["Smalltalk", "Package"]
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "installMethod:forClass:category:",
category: 'method definition',
fn: function (aCompiledMethod,aBehavior,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aCompiledMethod)._category_(aString);
_st(aBehavior)._addCompiledMethod_(aCompiledMethod);
self._setupClass_(aBehavior);
$1=aCompiledMethod;
return $1;
}, function($ctx1) {$ctx1.fill(self,"installMethod:forClass:category:",{aCompiledMethod:aCompiledMethod,aBehavior:aBehavior,aString:aString},smalltalk.ClassBuilder)})},
args: ["aCompiledMethod", "aBehavior", "aString"],
source: "installMethod: aCompiledMethod forClass: aBehavior category: aString\x0a\x09aCompiledMethod category: aString.\x0a\x09aBehavior addCompiledMethod: aCompiledMethod.\x0a\x09self setupClass: aBehavior.\x0a\x09^aCompiledMethod",
messageSends: ["category:", "addCompiledMethod:", "setupClass:"],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "instanceVariableNamesFor:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aString)._tokenize_(" "))._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._isEmpty();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"instanceVariableNamesFor:",{aString:aString},smalltalk.ClassBuilder)})},
args: ["aString"],
source: "instanceVariableNamesFor: aString\x0a\x09^(aString tokenize: ' ') reject: [ :each | each isEmpty ]",
messageSends: ["reject:", "isEmpty", "tokenize:"],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "migrateClass:superclass:",
category: 'class migration',
fn: function (aClass,anotherClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._migrateClassNamed_superclass_instanceVariableNames_package_(_st(aClass)._name(),anotherClass,_st(aClass)._instanceVariableNames(),_st(_st(aClass)._package())._name());
return $1;
}, function($ctx1) {$ctx1.fill(self,"migrateClass:superclass:",{aClass:aClass,anotherClass:anotherClass},smalltalk.ClassBuilder)})},
args: ["aClass", "anotherClass"],
source: "migrateClass: aClass superclass: anotherClass\x0a\x09^ self\x0a\x09\x09migrateClassNamed: aClass name\x0a\x09\x09superclass: anotherClass\x0a\x09\x09instanceVariableNames: aClass instanceVariableNames\x0a\x09\x09package: aClass package name",
messageSends: ["migrateClassNamed:superclass:instanceVariableNames:package:", "name", "instanceVariableNames", "package"],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "migrateClassNamed:superclass:instanceVariableNames:package:",
category: 'class migration',
fn: function (className,aClass,aCollection,packageName){
var self=this;
var oldClass,newClass,tmp;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
function $ClassMigrated(){return smalltalk.ClassMigrated||(typeof ClassMigrated=="undefined"?nil:ClassMigrated)}
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7;
tmp="new*".__comma(className);
oldClass=_st(_st($Smalltalk())._current())._at_(className);
newClass=self._addSubclassOf_named_instanceVariableNames_package_(aClass,tmp,aCollection,packageName);
self._basicSwapClassNames_with_(oldClass,newClass);
_st((function(){
return smalltalk.withContext(function($ctx2) {
return self._copyClass_to_(oldClass,newClass);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_($Error(),(function(exception){
return smalltalk.withContext(function($ctx2) {
$1=self;
_st($1)._basicSwapClassNames_with_(oldClass,newClass);
$2=_st($1)._basicRemoveClass_(newClass);
$2;
return _st(exception)._signal();
}, function($ctx2) {$ctx2.fillBlock({exception:exception},$ctx1)})}));
$3=self;
_st($3)._rawRenameClass_to_(oldClass,tmp);
$4=_st($3)._rawRenameClass_to_(newClass,className);
_st(_st(oldClass)._subclasses())._do_displayingProgress_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._migrateClass_superclass_(each,newClass);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),_st("Recompiling ".__comma(_st(newClass)._name())).__comma("..."));
self._basicRemoveClass_(oldClass);
$5=_st($ClassMigrated())._new();
_st($5)._theClass_(newClass);
_st($5)._oldClass_(oldClass);
$6=_st($5)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($6);
$7=newClass;
return $7;
}, function($ctx1) {$ctx1.fill(self,"migrateClassNamed:superclass:instanceVariableNames:package:",{className:className,aClass:aClass,aCollection:aCollection,packageName:packageName,oldClass:oldClass,newClass:newClass,tmp:tmp},smalltalk.ClassBuilder)})},
args: ["className", "aClass", "aCollection", "packageName"],
source: "migrateClassNamed: className superclass: aClass instanceVariableNames: aCollection package: packageName\x0a\x09| oldClass newClass tmp |\x0a\x09\x0a\x09tmp := 'new*', className.\x0a\x09oldClass := Smalltalk current at: className.\x0a\x09\x0a\x09newClass := self\x0a\x09\x09addSubclassOf: aClass\x0a\x09\x09named: tmp\x0a\x09\x09instanceVariableNames: aCollection\x0a\x09\x09package: packageName.\x0a\x0a\x09self basicSwapClassNames: oldClass with: newClass.\x0a\x0a\x09[ self copyClass: oldClass to: newClass ]\x0a\x09\x09on: Error\x0a\x09\x09do: [ :exception |\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09basicSwapClassNames: oldClass with: newClass;\x0a\x09\x09\x09\x09basicRemoveClass: newClass.\x0a\x09\x09\x09exception signal ].\x0a\x0a\x09self\x0a\x09\x09rawRenameClass: oldClass to: tmp;\x0a\x09\x09rawRenameClass: newClass to: className.\x0a\x0a\x09oldClass subclasses \x0a\x09\x09do: [ :each | self migrateClass: each superclass: newClass ]\x0a\x09\x09displayingProgress: 'Recompiling ', newClass name, '...'.\x0a\x0a\x09self basicRemoveClass: oldClass.\x0a\x09\x0a\x09SystemAnnouncer current announce: (ClassMigrated new\x0a\x09\x09theClass: newClass;\x0a\x09\x09oldClass: oldClass;\x0a\x09\x09yourself).\x0a\x09\x0a\x09^newClass",
messageSends: [",", "at:", "current", "addSubclassOf:named:instanceVariableNames:package:", "basicSwapClassNames:with:", "on:do:", "basicRemoveClass:", "signal", "copyClass:to:", "rawRenameClass:to:", "do:displayingProgress:", "migrateClass:superclass:", "name", "subclasses", "announce:", "theClass:", "new", "oldClass:", "yourself"],
referencedClasses: ["Smalltalk", "Error", "ClassMigrated", "SystemAnnouncer"]
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "rawRenameClass:to:",
category: 'private',
fn: function (aClass,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		smalltalk[aString] = aClass;
	;
return self}, function($ctx1) {$ctx1.fill(self,"rawRenameClass:to:",{aClass:aClass,aString:aString},smalltalk.ClassBuilder)})},
args: ["aClass", "aString"],
source: "rawRenameClass: aClass to: aString\x0a\x09<\x0a\x09\x09smalltalk[aString] = aClass;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "renameClass:to:",
category: 'class migration',
fn: function (aClass,className){
var self=this;
function $ClassRenamed(){return smalltalk.ClassRenamed||(typeof ClassRenamed=="undefined"?nil:ClassRenamed)}
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._basicRenameClass_to_(aClass,className);
_st(aClass)._recompile();
$1=_st($ClassRenamed())._new();
_st($1)._theClass_(aClass);
$2=_st($1)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"renameClass:to:",{aClass:aClass,className:className},smalltalk.ClassBuilder)})},
args: ["aClass", "className"],
source: "renameClass: aClass to: className\x0a\x09self basicRenameClass: aClass to: className.\x0a\x09\x0a\x09\x22Recompile the class to fix potential issues with super sends\x22\x0a\x09aClass recompile.\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassRenamed new\x0a\x09\x09\x09theClass: aClass;\x0a\x09\x09\x09yourself)",
messageSends: ["basicRenameClass:to:", "recompile", "announce:", "theClass:", "new", "yourself", "current"],
referencedClasses: ["ClassRenamed", "SystemAnnouncer"]
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "setupClass:",
category: 'public',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.init(aClass);;
return self}, function($ctx1) {$ctx1.fill(self,"setupClass:",{aClass:aClass},smalltalk.ClassBuilder)})},
args: ["aClass"],
source: "setupClass: aClass\x0a\x09<smalltalk.init(aClass);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "superclass:subclass:",
category: 'class definition',
fn: function (aClass,className){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._superclass_subclass_instanceVariableNames_package_(aClass,className,"",nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"superclass:subclass:",{aClass:aClass,className:className},smalltalk.ClassBuilder)})},
args: ["aClass", "className"],
source: "superclass: aClass subclass: className\x0a\x09^self superclass: aClass subclass: className instanceVariableNames: '' package: nil",
messageSends: ["superclass:subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "superclass:subclass:instanceVariableNames:package:",
category: 'class definition',
fn: function (aClass,className,ivarNames,packageName){
var self=this;
var newClass;
function $ClassAdded(){return smalltalk.ClassAdded||(typeof ClassAdded=="undefined"?nil:ClassAdded)}
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$6,$5,$7,$8,$9;
$1=self;
$2=aClass;
$3=className;
$4=self._instanceVariableNamesFor_(ivarNames);
$6=packageName;
if(($receiver = $6) == nil || $receiver == undefined){
$5="unclassified";
} else {
$5=$6;
};
newClass=_st($1)._addSubclassOf_named_instanceVariableNames_package_($2,$3,$4,$5);
self._setupClass_(newClass);
$7=_st($ClassAdded())._new();
_st($7)._theClass_(newClass);
$8=_st($7)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($8);
$9=newClass;
return $9;
}, function($ctx1) {$ctx1.fill(self,"superclass:subclass:instanceVariableNames:package:",{aClass:aClass,className:className,ivarNames:ivarNames,packageName:packageName,newClass:newClass},smalltalk.ClassBuilder)})},
args: ["aClass", "className", "ivarNames", "packageName"],
source: "superclass: aClass subclass: className instanceVariableNames: ivarNames package: packageName\x0a\x09| newClass |\x0a\x09\x0a\x09newClass := self addSubclassOf: aClass\x0a\x09\x09named: className instanceVariableNames: (self instanceVariableNamesFor: ivarNames)\x0a\x09\x09package: (packageName ifNil: ['unclassified']).\x0a\x09self setupClass: newClass.\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassAdded new\x0a\x09\x09\x09theClass: newClass;\x0a\x09\x09\x09yourself).\x0a\x09\x0a\x09^newClass",
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "instanceVariableNamesFor:", "ifNil:", "setupClass:", "announce:", "theClass:", "new", "yourself", "current"],
referencedClasses: ["ClassAdded", "SystemAnnouncer"]
}),
smalltalk.ClassBuilder);



smalltalk.addClass('ClassCategoryReader', smalltalk.Object, ['class', 'category'], 'Kernel-Classes');
smalltalk.ClassCategoryReader.comment="I provide a mechanism for retrieving class descriptions stored on a file in the Smalltalk chunk format.";
smalltalk.addMethod(
smalltalk.method({
selector: "class:category:",
category: 'accessing',
fn: function (aClass,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@class"]=aClass;
self["@category"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"class:category:",{aClass:aClass,aString:aString},smalltalk.ClassCategoryReader)})},
args: ["aClass", "aString"],
source: "class: aClass category: aString\x0a\x09class := aClass.\x0a\x09category := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
smalltalk.method({
selector: "compileMethod:",
category: 'private',
fn: function (aString){
var self=this;
function $Compiler(){return smalltalk.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($Compiler())._new())._install_forClass_category_(aString,self["@class"],self["@category"]);
return self}, function($ctx1) {$ctx1.fill(self,"compileMethod:",{aString:aString},smalltalk.ClassCategoryReader)})},
args: ["aString"],
source: "compileMethod: aString\x0a\x09Compiler new install: aString forClass: class category: category",
messageSends: ["install:forClass:category:", "new"],
referencedClasses: ["Compiler"]
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ClassCategoryReader.superclass.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ClassCategoryReader)})},
args: [],
source: "initialize\x0a\x09super initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
smalltalk.method({
selector: "scanFrom:",
category: 'fileIn',
fn: function (aChunkParser){
var self=this;
var chunk;
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
_st((function(){
return smalltalk.withContext(function($ctx2) {
chunk=_st(aChunkParser)._nextChunk();
chunk;
return _st(chunk)._isEmpty();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
return self._compileMethod_(chunk);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st($ClassBuilder())._new())._setupClass_(self["@class"]);
return self}, function($ctx1) {$ctx1.fill(self,"scanFrom:",{aChunkParser:aChunkParser,chunk:chunk},smalltalk.ClassCategoryReader)})},
args: ["aChunkParser"],
source: "scanFrom: aChunkParser\x0a\x09| chunk |\x0a\x09[chunk := aChunkParser nextChunk.\x0a\x09chunk isEmpty] whileFalse: [\x0a\x09\x09self compileMethod: chunk].\x0a\x09ClassBuilder new setupClass: class",
messageSends: ["whileFalse:", "compileMethod:", "nextChunk", "isEmpty", "setupClass:", "new"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.ClassCategoryReader);



smalltalk.addClass('ClassCommentReader', smalltalk.Object, ['class'], 'Kernel-Classes');
smalltalk.ClassCommentReader.comment="I provide a mechanism for retrieving class comments stored on a file.\x0a\x0aSee also `ClassCategoryReader`.";
smalltalk.addMethod(
smalltalk.method({
selector: "class:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@class"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"class:",{aClass:aClass},smalltalk.ClassCommentReader)})},
args: ["aClass"],
source: "class: aClass\x0a\x09class := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ClassCommentReader.superclass.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ClassCommentReader)})},
args: [],
source: "initialize\x0a\x09super initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
smalltalk.method({
selector: "scanFrom:",
category: 'fileIn',
fn: function (aChunkParser){
var self=this;
var chunk;
return smalltalk.withContext(function($ctx1) { 
var $1;
chunk=_st(aChunkParser)._nextChunk();
$1=_st(chunk)._isEmpty();
if(! smalltalk.assert($1)){
self._setComment_(chunk);
};
return self}, function($ctx1) {$ctx1.fill(self,"scanFrom:",{aChunkParser:aChunkParser,chunk:chunk},smalltalk.ClassCommentReader)})},
args: ["aChunkParser"],
source: "scanFrom: aChunkParser\x0a\x09| chunk |\x0a\x09chunk := aChunkParser nextChunk.\x0a\x09chunk isEmpty ifFalse: [\x0a\x09\x09self setComment: chunk].",
messageSends: ["nextChunk", "ifFalse:", "setComment:", "isEmpty"],
referencedClasses: []
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
smalltalk.method({
selector: "setComment:",
category: 'private',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@class"])._comment_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"setComment:",{aString:aString},smalltalk.ClassCommentReader)})},
args: ["aString"],
source: "setComment: aString\x0a\x09class comment: aString",
messageSends: ["comment:"],
referencedClasses: []
}),
smalltalk.ClassCommentReader);



smalltalk.addClass('ClassSorterNode', smalltalk.Object, ['theClass', 'level', 'nodes'], 'Kernel-Classes');
smalltalk.ClassSorterNode.comment="I provide an algorithm for sorting classes alphabetically.\x0a\x0aSee [Issue #143](https://github.com/amber-smalltalk/amber/issues/143) on GitHub.";
smalltalk.addMethod(
smalltalk.method({
selector: "getNodesFrom:",
category: 'accessing',
fn: function (aCollection){
var self=this;
var children,others;
function $ClassSorterNode(){return smalltalk.ClassSorterNode||(typeof ClassSorterNode=="undefined"?nil:ClassSorterNode)}
return smalltalk.withContext(function($ctx1) { 
var $1;
children=[];
others=[];
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(each)._superclass()).__eq(self._theClass());
if(smalltalk.assert($1)){
return _st(children)._add_(each);
} else {
return _st(others)._add_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
self["@nodes"]=_st(children)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st($ClassSorterNode())._on_classes_level_(each,others,_st(self._level()).__plus((1)));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"getNodesFrom:",{aCollection:aCollection,children:children,others:others},smalltalk.ClassSorterNode)})},
args: ["aCollection"],
source: "getNodesFrom: aCollection\x0a\x09| children others |\x0a\x09children := #().\x0a\x09others := #().\x0a\x09aCollection do: [:each |\x0a\x09\x09(each superclass = self theClass)\x0a\x09\x09\x09ifTrue: [children add: each]\x0a\x09\x09\x09ifFalse: [others add: each]].\x0a\x09nodes:= children collect: [:each |\x0a\x09\x09ClassSorterNode on: each classes: others level: self level + 1]",
messageSends: ["do:", "ifTrue:ifFalse:", "add:", "=", "theClass", "superclass", "collect:", "on:classes:level:", "+", "level"],
referencedClasses: ["ClassSorterNode"]
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
smalltalk.method({
selector: "level",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@level"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"level",{},smalltalk.ClassSorterNode)})},
args: [],
source: "level\x0a\x09^level",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
smalltalk.method({
selector: "level:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@level"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"level:",{anInteger:anInteger},smalltalk.ClassSorterNode)})},
args: ["anInteger"],
source: "level: anInteger\x0a\x09level := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
smalltalk.method({
selector: "nodes",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@nodes"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"nodes",{},smalltalk.ClassSorterNode)})},
args: [],
source: "nodes\x0a\x09^nodes",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@theClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.ClassSorterNode)})},
args: [],
source: "theClass\x0a\x09^theClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass},smalltalk.ClassSorterNode)})},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
smalltalk.method({
selector: "traverseClassesWith:",
category: 'visiting',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCollection)._add_(self._theClass());
_st(_st(self._nodes())._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(a)._theClass())._name()).__lt_eq(_st(_st(b)._theClass())._name());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})})))._do_((function(aNode){
return smalltalk.withContext(function($ctx2) {
return _st(aNode)._traverseClassesWith_(aCollection);
}, function($ctx2) {$ctx2.fillBlock({aNode:aNode},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"traverseClassesWith:",{aCollection:aCollection},smalltalk.ClassSorterNode)})},
args: ["aCollection"],
source: "traverseClassesWith: aCollection\x0a\x09\x22sort classes alphabetically Issue #143\x22\x0a\x0a\x09aCollection add: self theClass.\x0a\x09(self nodes sorted: [:a :b | a theClass name <= b theClass name ]) do: [:aNode |\x0a\x09\x09aNode traverseClassesWith: aCollection ].",
messageSends: ["add:", "theClass", "do:", "traverseClassesWith:", "sorted:", "<=", "name", "nodes"],
referencedClasses: []
}),
smalltalk.ClassSorterNode);


smalltalk.addMethod(
smalltalk.method({
selector: "on:classes:level:",
category: 'instance creation',
fn: function (aClass,aCollection,anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._theClass_(aClass);
_st($2)._level_(anInteger);
_st($2)._getNodesFrom_(aCollection);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:classes:level:",{aClass:aClass,aCollection:aCollection,anInteger:anInteger},smalltalk.ClassSorterNode.klass)})},
args: ["aClass", "aCollection", "anInteger"],
source: "on: aClass classes: aCollection level: anInteger\x0a\x09^self new\x0a\x09\x09theClass: aClass;\x0a\x09\x09level: anInteger;\x0a\x09\x09getNodesFrom: aCollection;\x0a\x09\x09yourself",
messageSends: ["theClass:", "new", "level:", "getNodesFrom:", "yourself"],
referencedClasses: []
}),
smalltalk.ClassSorterNode.klass);


