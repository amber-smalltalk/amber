define("amber_core/Kernel-Classes", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Kernel-Classes');
smalltalk.packages["Kernel-Classes"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('Behavior', globals.Object, [], 'Kernel-Classes');
globals.Behavior.comment="I am the superclass of all class objects.\x0a\x0aI define the protocol for creating instances of a class with `#basicNew` and `#new` (see `boot.js` for class constructors details).\x0a\x0aMy instances know about the subclass/superclass relationships between classes, contain the description that instances are created from,\x0aand hold the method dictionary that's associated with each class.\x0a\x0aI also provides methods for compiling methods, examining the method dictionary, and iterating over the class hierarchy.";
smalltalk.addMethod(
smalltalk.method({
selector: ">>",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._methodAt_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,">>",{aString:aString},globals.Behavior)})},
args: ["aString"],
source: ">> aString\x0a\x09^ self methodAt: aString",
messageSends: ["methodAt:"],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "addCompiledMethod:",
protocol: 'compiling',
fn: function (aMethod){
var self=this;
var oldMethod,announcement;
function $MethodAdded(){return globals.MethodAdded||(typeof MethodAdded=="undefined"?nil:MethodAdded)}
function $MethodModified(){return globals.MethodModified||(typeof MethodModified=="undefined"?nil:MethodModified)}
function $SystemAnnouncer(){return globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1,$4,$5,$6,$7,$8,$9,$10,$11,$receiver;
oldMethod=_st(self._methodDictionary())._at_ifAbsent_(_st(aMethod)._selector(),(function(){
return nil;
}));
$2=self._protocols();
$3=_st(aMethod)._protocol();
$ctx1.sendIdx["protocol"]=1;
$1=_st($2)._includes_($3);
if(! smalltalk.assert($1)){
$4=self._organization();
$5=_st(aMethod)._protocol();
$ctx1.sendIdx["protocol"]=2;
_st($4)._addElement_($5);
};
self._basicAddCompiledMethod_(aMethod);
$6=oldMethod;
if(($receiver = $6) == null || $receiver.isNil){
$6;
} else {
self._removeProtocolIfEmpty_(_st(oldMethod)._protocol());
};
$7=oldMethod;
if(($receiver = $7) == null || $receiver.isNil){
$8=_st($MethodAdded())._new();
$ctx1.sendIdx["new"]=1;
_st($8)._method_(aMethod);
$ctx1.sendIdx["method:"]=1;
$9=_st($8)._yourself();
$ctx1.sendIdx["yourself"]=1;
announcement=$9;
} else {
$10=_st($MethodModified())._new();
_st($10)._oldMethod_(oldMethod);
_st($10)._method_(aMethod);
$11=_st($10)._yourself();
announcement=$11;
};
_st(_st($SystemAnnouncer())._current())._announce_(announcement);
return self}, function($ctx1) {$ctx1.fill(self,"addCompiledMethod:",{aMethod:aMethod,oldMethod:oldMethod,announcement:announcement},globals.Behavior)})},
args: ["aMethod"],
source: "addCompiledMethod: aMethod\x0a\x09| oldMethod announcement |\x0a\x09\x0a\x09oldMethod := self methodDictionary\x0a\x09\x09at: aMethod selector\x0a\x09\x09ifAbsent: [ nil ].\x0a\x09\x0a\x09(self protocols includes: aMethod protocol)\x0a\x09\x09ifFalse: [ self organization addElement: aMethod protocol ].\x0a\x0a\x09self basicAddCompiledMethod: aMethod.\x0a\x09\x0a\x09oldMethod ifNotNil: [\x0a\x09\x09self removeProtocolIfEmpty: oldMethod protocol ].\x0a\x09\x0a\x09announcement := oldMethod\x0a\x09\x09ifNil: [\x0a\x09\x09\x09MethodAdded new\x0a\x09\x09\x09\x09\x09method: aMethod;\x0a\x09\x09\x09\x09\x09yourself ]\x0a\x09\x09ifNotNil: [\x0a\x09\x09\x09MethodModified new\x0a\x09\x09\x09\x09\x09oldMethod: oldMethod;\x0a\x09\x09\x09\x09\x09method: aMethod;\x0a\x09\x09\x09\x09\x09yourself ].\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09\x09\x09announce: announcement",
messageSends: ["at:ifAbsent:", "methodDictionary", "selector", "ifFalse:", "includes:", "protocols", "protocol", "addElement:", "organization", "basicAddCompiledMethod:", "ifNotNil:", "removeProtocolIfEmpty:", "ifNil:ifNotNil:", "method:", "new", "yourself", "oldMethod:", "announce:", "current"],
referencedClasses: ["MethodAdded", "MethodModified", "SystemAnnouncer"]
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "allInstanceVariableNames",
protocol: 'accessing',
fn: function (){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
result=_st(self._instanceVariableNames())._copy();
$1=self._superclass();
$ctx1.sendIdx["superclass"]=1;
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
_st(result)._addAll_(_st(self._superclass())._allInstanceVariableNames());
};
$2=result;
return $2;
}, function($ctx1) {$ctx1.fill(self,"allInstanceVariableNames",{result:result},globals.Behavior)})},
args: [],
source: "allInstanceVariableNames\x0a\x09| result |\x0a\x09result := self instanceVariableNames copy.\x0a\x09self superclass ifNotNil: [\x0a\x09\x09result addAll: self superclass allInstanceVariableNames ].\x0a\x09^ result",
messageSends: ["copy", "instanceVariableNames", "ifNotNil:", "superclass", "addAll:", "allInstanceVariableNames"],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "allSelectors",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=self._allSuperclasses();
$3=self._selectors();
$ctx1.sendIdx["selectors"]=1;
$1=_st($2)._inject_into_($3,(function(acc,each){
return smalltalk.withContext(function($ctx2) {
_st(acc)._addAll_(_st(each)._selectors());
$4=_st(acc)._yourself();
return $4;
}, function($ctx2) {$ctx2.fillBlock({acc:acc,each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"allSelectors",{},globals.Behavior)})},
args: [],
source: "allSelectors\x0a\x09^ self allSuperclasses\x0a\x09\x09inject: self selectors\x0a\x09\x09into: [ :acc :each | acc addAll: each selectors; yourself ]",
messageSends: ["inject:into:", "allSuperclasses", "selectors", "addAll:", "yourself"],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "allSubclasses",
protocol: 'accessing',
fn: function (){
var self=this;
var subclasses,index;
return smalltalk.withContext(function($ctx1) { 
var $1;
subclasses=self._subclasses();
$ctx1.sendIdx["subclasses"]=1;
index=(1);
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(index).__gt(_st(subclasses)._size());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
_st(subclasses)._addAll_(_st(_st(subclasses)._at_(index))._subclasses());
index=_st(index).__plus((1));
return index;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$1=subclasses;
return $1;
}, function($ctx1) {$ctx1.fill(self,"allSubclasses",{subclasses:subclasses,index:index},globals.Behavior)})},
args: [],
source: "allSubclasses\x0a\x09\x22Answer an collection of the receiver's and the receiver's descendent's subclasses. \x22\x0a\x0a\x09| subclasses index |\x0a\x09\x0a\x09subclasses := self subclasses.\x0a\x09index := 1.\x0a\x09[ index > subclasses size ]\x0a\x09\x09whileFalse: [ subclasses addAll: (subclasses at: index) subclasses.\x0a\x09\x09\x09index := index + 1 ].\x0a\x0a\x09^ subclasses",
messageSends: ["subclasses", "whileFalse:", ">", "size", "addAll:", "at:", "+"],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "allSubclassesDo:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._allSubclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"allSubclassesDo:",{aBlock:aBlock},globals.Behavior)})},
args: ["aBlock"],
source: "allSubclassesDo: aBlock\x0a\x09\x22Evaluate the argument, aBlock, for each of the receiver's subclasses.\x22\x0a\x0a\x09self allSubclasses do: [ :each |\x0a    \x09aBlock value: each ]",
messageSends: ["do:", "allSubclasses", "value:"],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "allSuperclasses",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$5,$4,$6,$3,$receiver;
$1=self._superclass();
$ctx1.sendIdx["superclass"]=1;
if(($receiver = $1) == null || $receiver.isNil){
$2=[];
return $2;
} else {
$1;
};
$5=self._superclass();
$ctx1.sendIdx["superclass"]=2;
$4=_st($OrderedCollection())._with_($5);
_st($4)._addAll_(_st(self._superclass())._allSuperclasses());
$6=_st($4)._yourself();
$3=$6;
return $3;
}, function($ctx1) {$ctx1.fill(self,"allSuperclasses",{},globals.Behavior)})},
args: [],
source: "allSuperclasses\x0a\x09\x0a\x09self superclass ifNil: [ ^ #() ].\x0a\x09\x0a\x09^ (OrderedCollection with: self superclass)\x0a\x09\x09addAll: self superclass allSuperclasses;\x0a\x09\x09yourself",
messageSends: ["ifNil:", "superclass", "addAll:", "with:", "allSuperclasses", "yourself"],
referencedClasses: ["OrderedCollection"]
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "basicAddCompiledMethod:",
protocol: 'private',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.addMethod(aMethod, self);
return self}, function($ctx1) {$ctx1.fill(self,"basicAddCompiledMethod:",{aMethod:aMethod},globals.Behavior)})},
args: ["aMethod"],
source: "basicAddCompiledMethod: aMethod\x0a\x09<smalltalk.addMethod(aMethod, self)>",
messageSends: [],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "basicNew",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new self.fn();
return self}, function($ctx1) {$ctx1.fill(self,"basicNew",{},globals.Behavior)})},
args: [],
source: "basicNew\x0a\x09<return new self.fn()>",
messageSends: [],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "basicRemoveCompiledMethod:",
protocol: 'private',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.removeMethod(aMethod,self);
return self}, function($ctx1) {$ctx1.fill(self,"basicRemoveCompiledMethod:",{aMethod:aMethod},globals.Behavior)})},
args: ["aMethod"],
source: "basicRemoveCompiledMethod: aMethod\x0a\x09<smalltalk.removeMethod(aMethod,self)>",
messageSends: [],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "canUnderstand:",
protocol: 'testing',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$1=_st(self._includesSelector_(_st(aSelector)._asString()))._or_((function(){
return smalltalk.withContext(function($ctx2) {
$3=self._superclass();
$ctx2.sendIdx["superclass"]=1;
$2=_st($3)._notNil();
return _st($2)._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self._superclass())._canUnderstand_(aSelector);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"canUnderstand:",{aSelector:aSelector},globals.Behavior)})},
args: ["aSelector"],
source: "canUnderstand: aSelector\x0a\x09^ (self includesSelector: aSelector asString) or: [\x0a\x09\x09self superclass notNil and: [ self superclass canUnderstand: aSelector ]]",
messageSends: ["or:", "includesSelector:", "asString", "and:", "notNil", "superclass", "canUnderstand:"],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "comment",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self._basicAt_("comment");
if(($receiver = $2) == null || $receiver.isNil){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"comment",{},globals.Behavior)})},
args: [],
source: "comment\x0a\x09^ (self basicAt: 'comment') ifNil: [ '' ]",
messageSends: ["ifNil:", "basicAt:"],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "comment:",
protocol: 'accessing',
fn: function (aString){
var self=this;
function $SystemAnnouncer(){return globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $ClassCommentChanged(){return globals.ClassCommentChanged||(typeof ClassCommentChanged=="undefined"?nil:ClassCommentChanged)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._basicAt_put_("comment",aString);
$1=_st($ClassCommentChanged())._new();
_st($1)._theClass_(self);
$2=_st($1)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"comment:",{aString:aString},globals.Behavior)})},
args: ["aString"],
source: "comment: aString\x0a\x09self basicAt: 'comment' put: aString.\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassCommentChanged new\x0a\x09\x09\x09theClass: self;\x0a\x09\x09\x09yourself)",
messageSends: ["basicAt:put:", "announce:", "current", "theClass:", "new", "yourself"],
referencedClasses: ["SystemAnnouncer", "ClassCommentChanged"]
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "commentStamp",
protocol: 'accessing',
fn: function (){
var self=this;
function $ClassCommentReader(){return globals.ClassCommentReader||(typeof ClassCommentReader=="undefined"?nil:ClassCommentReader)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($ClassCommentReader())._new();
_st($2)._class_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"commentStamp",{},globals.Behavior)})},
args: [],
source: "commentStamp\x0a\x09^ ClassCommentReader new\x0a\x09class: self;\x0a\x09yourself",
messageSends: ["class:", "new", "yourself"],
referencedClasses: ["ClassCommentReader"]
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "commentStamp:prior:",
protocol: 'accessing',
fn: function (aStamp,prior){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._commentStamp();
return $1;
}, function($ctx1) {$ctx1.fill(self,"commentStamp:prior:",{aStamp:aStamp,prior:prior},globals.Behavior)})},
args: ["aStamp", "prior"],
source: "commentStamp: aStamp prior: prior\x0a\x09\x09^ self commentStamp",
messageSends: ["commentStamp"],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "compile:",
protocol: 'compiling',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._compile_protocol_(aString,"");
return $1;
}, function($ctx1) {$ctx1.fill(self,"compile:",{aString:aString},globals.Behavior)})},
args: ["aString"],
source: "compile: aString\x0a\x09^ self compile: aString protocol: ''",
messageSends: ["compile:protocol:"],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "compile:protocol:",
protocol: 'compiling',
fn: function (aString,anotherString){
var self=this;
function $Compiler(){return globals.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Compiler())._new())._install_forClass_protocol_(aString,self,anotherString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"compile:protocol:",{aString:aString,anotherString:anotherString},globals.Behavior)})},
args: ["aString", "anotherString"],
source: "compile: aString protocol: anotherString\x0a\x09^ Compiler new\x0a\x09\x09install: aString\x0a\x09\x09forClass: self\x0a\x09\x09protocol: anotherString",
messageSends: ["install:forClass:protocol:", "new"],
referencedClasses: ["Compiler"]
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "definition",
protocol: 'accessing',
fn: function (){
var self=this;
return "";
},
args: [],
source: "definition\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "includesBehavior:",
protocol: 'testing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self.__eq_eq(aClass))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return self._inheritsFrom_(aClass);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"includesBehavior:",{aClass:aClass},globals.Behavior)})},
args: ["aClass"],
source: "includesBehavior: aClass\x0a\x09^ self == aClass or: [\x0a\x09\x09\x09self inheritsFrom: aClass ]",
messageSends: ["or:", "==", "inheritsFrom:"],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "includesSelector:",
protocol: 'testing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._methodDictionary())._includesKey_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"includesSelector:",{aString:aString},globals.Behavior)})},
args: ["aString"],
source: "includesSelector: aString\x0a\x09^ self methodDictionary includesKey: aString",
messageSends: ["includesKey:", "methodDictionary"],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "inheritsFrom:",
protocol: 'testing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$2,$receiver;
$1=self._superclass();
$ctx1.sendIdx["superclass"]=1;
if(($receiver = $1) == null || $receiver.isNil){
return false;
} else {
$1;
};
$4=self._superclass();
$ctx1.sendIdx["superclass"]=2;
$3=_st(aClass).__eq_eq($4);
$2=_st($3)._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._superclass())._inheritsFrom_(aClass);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return $2;
}, function($ctx1) {$ctx1.fill(self,"inheritsFrom:",{aClass:aClass},globals.Behavior)})},
args: ["aClass"],
source: "inheritsFrom: aClass\x0a\x09self superclass ifNil: [ ^ false ].\x0a\x0a\x09^ aClass == self superclass or: [ \x0a\x09\x09self superclass inheritsFrom: aClass ]",
messageSends: ["ifNil:", "superclass", "or:", "==", "inheritsFrom:"],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "instanceVariableNames",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.iVarNames;
return self}, function($ctx1) {$ctx1.fill(self,"instanceVariableNames",{},globals.Behavior)})},
args: [],
source: "instanceVariableNames\x0a\x09<return self.iVarNames>",
messageSends: [],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "isBehavior",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isBehavior\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "javascriptConstructor",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.fn;
return self}, function($ctx1) {$ctx1.fill(self,"javascriptConstructor",{},globals.Behavior)})},
args: [],
source: "javascriptConstructor\x0a\x09\x22Answer the JS constructor used to instantiate. See boot.js\x22\x0a\x09\x0a\x09<return self.fn>",
messageSends: [],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "javascriptConstructor:",
protocol: 'accessing',
fn: function (aJavaScriptFunction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.setClassConstructor(self, aJavaScriptFunction);;
return self}, function($ctx1) {$ctx1.fill(self,"javascriptConstructor:",{aJavaScriptFunction:aJavaScriptFunction},globals.Behavior)})},
args: ["aJavaScriptFunction"],
source: "javascriptConstructor: aJavaScriptFunction\x0a\x09\x22Set the JS constructor used to instantiate.\x0a\x09See the JS counter-part in boot.js `smalltalk.setClassConstructor'\x22\x0a\x09\x0a\x09<smalltalk.setClassConstructor(self, aJavaScriptFunction);>",
messageSends: [],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "lookupSelector:",
protocol: 'accessing',
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(lookupClass)._includesSelector_(selector);
if(smalltalk.assert($1)){
$2=_st(lookupClass)._methodAt_(selector);
throw $early=[$2];
};
lookupClass=_st(lookupClass)._superclass();
return lookupClass;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return nil;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"lookupSelector:",{selector:selector,lookupClass:lookupClass},globals.Behavior)})},
args: ["selector"],
source: "lookupSelector: selector\x0a\x09\x22Look up the given selector in my methodDictionary.\x0a\x09Return the corresponding method if found.\x0a\x09Otherwise chase the superclass chain and try again.\x0a\x09Return nil if no method is found.\x22\x0a\x09\x0a\x09| lookupClass |\x0a\x09\x0a\x09lookupClass := self.\x0a\x09[ lookupClass = nil ] whileFalse: [\x0a\x09\x09(lookupClass includesSelector: selector)\x0a\x09\x09\x09\x09ifTrue: [ ^ lookupClass methodAt: selector ].\x0a\x09\x09\x09lookupClass := lookupClass superclass ].\x0a\x09^ nil",
messageSends: ["whileFalse:", "=", "ifTrue:", "includesSelector:", "methodAt:", "superclass"],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "methodAt:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._methodDictionary())._at_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodAt:",{aString:aString},globals.Behavior)})},
args: ["aString"],
source: "methodAt: aString\x0a\x09^ self methodDictionary at: aString",
messageSends: ["at:", "methodDictionary"],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "methodDictionary",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var dict = globals.HashedCollection._new();
	var methods = self.methods;
	Object.keys(methods).forEach(function(i) {
		if(methods[i].selector) {
			dict._at_put_(methods[i].selector, methods[i]);
		}
	});
	return dict;
return self}, function($ctx1) {$ctx1.fill(self,"methodDictionary",{},globals.Behavior)})},
args: [],
source: "methodDictionary\x0a\x09<var dict = globals.HashedCollection._new();\x0a\x09var methods = self.methods;\x0a\x09Object.keys(methods).forEach(function(i) {\x0a\x09\x09if(methods[i].selector) {\x0a\x09\x09\x09dict._at_put_(methods[i].selector, methods[i]);\x0a\x09\x09}\x0a\x09});\x0a\x09return dict>",
messageSends: [],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "methodTemplate",
protocol: 'accessing',
fn: function (){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $3,$4,$2,$7,$8,$6,$9,$5,$10,$1;
$1=_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
_st(stream)._nextPutAll_("messageSelectorAndArgumentNames");
$ctx2.sendIdx["nextPutAll:"]=1;
$3=_st($String())._lf();
$ctx2.sendIdx["lf"]=1;
$4=_st($String())._tab();
$ctx2.sendIdx["tab"]=1;
$2=_st($3).__comma($4);
$ctx2.sendIdx[","]=1;
_st(stream)._nextPutAll_($2);
$ctx2.sendIdx["nextPutAll:"]=2;
_st(stream)._nextPutAll_("\x22comment stating purpose of message\x22");
$ctx2.sendIdx["nextPutAll:"]=3;
$7=_st($String())._lf();
$ctx2.sendIdx["lf"]=2;
$8=_st($String())._lf();
$ctx2.sendIdx["lf"]=3;
$6=_st($7).__comma($8);
$ctx2.sendIdx[","]=3;
$9=_st($String())._tab();
$ctx2.sendIdx["tab"]=2;
$5=_st($6).__comma($9);
$ctx2.sendIdx[","]=2;
_st(stream)._nextPutAll_($5);
$ctx2.sendIdx["nextPutAll:"]=4;
_st(stream)._nextPutAll_("| temporary variable names |");
$ctx2.sendIdx["nextPutAll:"]=5;
_st(stream)._nextPutAll_(_st(_st($String())._lf()).__comma(_st($String())._tab()));
$ctx2.sendIdx["nextPutAll:"]=6;
$10=_st(stream)._nextPutAll_("statements");
return $10;
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodTemplate",{},globals.Behavior)})},
args: [],
source: "methodTemplate\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09stream \x0a\x09\x09\x09nextPutAll: 'messageSelectorAndArgumentNames';\x0a\x09\x09\x09nextPutAll: String lf, String tab;\x0a\x09\x09\x09nextPutAll: '\x22comment stating purpose of message\x22';\x0a\x09\x09\x09nextPutAll: String lf, String lf, String tab;\x0a\x09\x09\x09nextPutAll: '| temporary variable names |';\x0a\x09\x09\x09nextPutAll: String lf, String tab;\x0a\x09\x09\x09nextPutAll: 'statements' ]",
messageSends: ["streamContents:", "nextPutAll:", ",", "lf", "tab"],
referencedClasses: ["String"]
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "methods",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._methodDictionary())._values();
return $1;
}, function($ctx1) {$ctx1.fill(self,"methods",{},globals.Behavior)})},
args: [],
source: "methods\x0a\x09^ self methodDictionary values",
messageSends: ["values", "methodDictionary"],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "methodsFor:",
protocol: 'accessing',
fn: function (aString){
var self=this;
function $ClassCategoryReader(){return globals.ClassCategoryReader||(typeof ClassCategoryReader=="undefined"?nil:ClassCategoryReader)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($ClassCategoryReader())._new();
_st($2)._class_category_(self,aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodsFor:",{aString:aString},globals.Behavior)})},
args: ["aString"],
source: "methodsFor: aString\x0a\x09^ ClassCategoryReader new\x0a\x09\x09class: self category: aString;\x0a\x09\x09yourself",
messageSends: ["class:category:", "new", "yourself"],
referencedClasses: ["ClassCategoryReader"]
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "methodsFor:stamp:",
protocol: 'accessing',
fn: function (aString,aStamp){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._methodsFor_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodsFor:stamp:",{aString:aString,aStamp:aStamp},globals.Behavior)})},
args: ["aString", "aStamp"],
source: "methodsFor: aString stamp: aStamp\x0a\x09\x22Added for compatibility, right now ignores stamp.\x22\x0a\x09^ self methodsFor: aString",
messageSends: ["methodsFor:"],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "methodsInProtocol:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._methods())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._protocol()).__eq(aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodsInProtocol:",{aString:aString},globals.Behavior)})},
args: ["aString"],
source: "methodsInProtocol: aString\x0a\x09^ self methods select: [ :each | each protocol = aString ]",
messageSends: ["select:", "methods", "=", "protocol"],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "name",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.className || nil;
return self}, function($ctx1) {$ctx1.fill(self,"name",{},globals.Behavior)})},
args: [],
source: "name\x0a\x09<return self.className || nil>",
messageSends: [],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._basicNew())._initialize();
return $1;
}, function($ctx1) {$ctx1.fill(self,"new",{},globals.Behavior)})},
args: [],
source: "new\x0a\x09^ self basicNew initialize",
messageSends: ["initialize", "basicNew"],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "organization",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicAt_("organization");
return $1;
}, function($ctx1) {$ctx1.fill(self,"organization",{},globals.Behavior)})},
args: [],
source: "organization\x0a\x09^ self basicAt: 'organization'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "ownMethods",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=_st(_st(self._ownProtocols())._inject_into_(_st($OrderedCollection())._new(),(function(acc,each){
return smalltalk.withContext(function($ctx2) {
return _st(acc).__comma(self._methodsInProtocol_(each));
}, function($ctx2) {$ctx2.fillBlock({acc:acc,each:each},$ctx1,1)})})))._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) {
$2=_st(a)._selector();
$ctx2.sendIdx["selector"]=1;
return _st($2).__lt_eq(_st(b)._selector());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,2)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ownMethods",{},globals.Behavior)})},
args: [],
source: "ownMethods\x0a\x09\x22Answer the methods of the receiver that are not package extensions\x22\x0a\x0a\x09^ (self ownProtocols \x0a\x09\x09inject: OrderedCollection new\x0a\x09\x09into: [ :acc :each | acc, (self methodsInProtocol: each) ])\x0a\x09\x09\x09sorted: [ :a :b | a selector <= b selector ]",
messageSends: ["sorted:", "inject:into:", "ownProtocols", "new", ",", "methodsInProtocol:", "<=", "selector"],
referencedClasses: ["OrderedCollection"]
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "ownProtocols",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._protocols())._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._match_("^\x5c*");
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ownProtocols",{},globals.Behavior)})},
args: [],
source: "ownProtocols\x0a\x09\x22Answer the protocols of the receiver that are not package extensions\x22\x0a\x0a\x09^ self protocols reject: [ :each |\x0a\x09\x09each match: '^\x5c*' ]",
messageSends: ["reject:", "protocols", "match:"],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "protocols",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._organization())._elements())._sorted();
return $1;
}, function($ctx1) {$ctx1.fill(self,"protocols",{},globals.Behavior)})},
args: [],
source: "protocols\x0a\x09^ self organization elements sorted",
messageSends: ["sorted", "elements", "organization"],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "protocolsDo:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
var methodsByProtocol;
function $HashedCollection(){return globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
methodsByProtocol=_st($HashedCollection())._new();
$ctx1.sendIdx["new"]=1;
_st(self._methodDictionary())._valuesDo_((function(m){
return smalltalk.withContext(function($ctx2) {
return _st(_st(methodsByProtocol)._at_ifAbsentPut_(_st(m)._protocol(),(function(){
return smalltalk.withContext(function($ctx3) {
return _st($Array())._new();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})})))._add_(m);
}, function($ctx2) {$ctx2.fillBlock({m:m},$ctx1,1)})}));
_st(self._protocols())._do_((function(protocol){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_value_(protocol,_st(methodsByProtocol)._at_(protocol));
}, function($ctx2) {$ctx2.fillBlock({protocol:protocol},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"protocolsDo:",{aBlock:aBlock,methodsByProtocol:methodsByProtocol},globals.Behavior)})},
args: ["aBlock"],
source: "protocolsDo: aBlock\x0a\x09\x22Execute aBlock for each method protocol with\x0a\x09its collection of methods in the sort order of protocol name.\x22\x0a\x0a\x09| methodsByProtocol |\x0a\x09methodsByProtocol := HashedCollection new.\x0a\x09self methodDictionary valuesDo: [ :m |\x0a\x09\x09(methodsByProtocol at: m protocol ifAbsentPut: [ Array new ])\x0a\x09\x09\x09add: m ].\x0a\x09self protocols do: [ :protocol |\x0a\x09\x09aBlock value: protocol value: (methodsByProtocol at: protocol) ]",
messageSends: ["new", "valuesDo:", "methodDictionary", "add:", "at:ifAbsentPut:", "protocol", "do:", "protocols", "value:value:", "at:"],
referencedClasses: ["HashedCollection", "Array"]
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "prototype",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.fn.prototype;
return self}, function($ctx1) {$ctx1.fill(self,"prototype",{},globals.Behavior)})},
args: [],
source: "prototype\x0a\x09<return self.fn.prototype>",
messageSends: [],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "recompile",
protocol: 'compiling',
fn: function (){
var self=this;
function $Compiler(){return globals.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Compiler())._new())._recompile_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"recompile",{},globals.Behavior)})},
args: [],
source: "recompile\x0a\x09^ Compiler new recompile: self",
messageSends: ["recompile:", "new"],
referencedClasses: ["Compiler"]
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "removeCompiledMethod:",
protocol: 'compiling',
fn: function (aMethod){
var self=this;
function $SystemAnnouncer(){return globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $MethodRemoved(){return globals.MethodRemoved||(typeof MethodRemoved=="undefined"?nil:MethodRemoved)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._basicRemoveCompiledMethod_(aMethod);
self._removeProtocolIfEmpty_(_st(aMethod)._protocol());
$1=_st($MethodRemoved())._new();
_st($1)._method_(aMethod);
$2=_st($1)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"removeCompiledMethod:",{aMethod:aMethod},globals.Behavior)})},
args: ["aMethod"],
source: "removeCompiledMethod: aMethod\x0a\x09self basicRemoveCompiledMethod: aMethod.\x0a\x09\x0a\x09self removeProtocolIfEmpty: aMethod protocol.\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (MethodRemoved new\x0a\x09\x09\x09method: aMethod;\x0a\x09\x09\x09yourself)",
messageSends: ["basicRemoveCompiledMethod:", "removeProtocolIfEmpty:", "protocol", "announce:", "current", "method:", "new", "yourself"],
referencedClasses: ["SystemAnnouncer", "MethodRemoved"]
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "removeProtocolIfEmpty:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._methods())._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._protocol()).__eq(aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._organization())._removeElement_(aString);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeProtocolIfEmpty:",{aString:aString},globals.Behavior)})},
args: ["aString"],
source: "removeProtocolIfEmpty: aString\x0a\x09self methods\x0a\x09\x09detect: [ :each | each protocol = aString ]\x0a\x09\x09ifNone: [ self organization removeElement: aString ]",
messageSends: ["detect:ifNone:", "methods", "=", "protocol", "removeElement:", "organization"],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "selectors",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._methodDictionary())._keys();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectors",{},globals.Behavior)})},
args: [],
source: "selectors\x0a\x09^ self methodDictionary keys",
messageSends: ["keys", "methodDictionary"],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "subclasses",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"subclasses",{},globals.Behavior)})},
args: [],
source: "subclasses\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "superclass",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.superclass || nil;
return self}, function($ctx1) {$ctx1.fill(self,"superclass",{},globals.Behavior)})},
args: [],
source: "superclass\x0a\x09<return self.superclass || nil>",
messageSends: [],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "theMetaClass",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._class();
return $1;
}, function($ctx1) {$ctx1.fill(self,"theMetaClass",{},globals.Behavior)})},
args: [],
source: "theMetaClass\x0a\x09^ self class",
messageSends: ["class"],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "theNonMetaClass",
protocol: 'accessing',
fn: function (){
var self=this;
return self;
},
args: [],
source: "theNonMetaClass\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
globals.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "withAllSubclasses",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Array())._with_(self);
_st($2)._addAll_(self._allSubclasses());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withAllSubclasses",{},globals.Behavior)})},
args: [],
source: "withAllSubclasses\x0a\x09^ (Array with: self) addAll: self allSubclasses; yourself",
messageSends: ["addAll:", "with:", "allSubclasses", "yourself"],
referencedClasses: ["Array"]
}),
globals.Behavior);



smalltalk.addClass('Class', globals.Behavior, [], 'Kernel-Classes');
globals.Class.comment="I am __the__ class object.\x0a\x0aMy instances are the classes of the system.\x0aClass creation is done throught a `ClassBuilder` instance.";
smalltalk.addMethod(
smalltalk.method({
selector: "asJavascript",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1="globals.".__comma(self._name());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJavascript",{},globals.Class)})},
args: [],
source: "asJavascript\x0a\x09^ 'globals.', self name",
messageSends: [",", "name"],
referencedClasses: []
}),
globals.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "browse",
protocol: 'browsing',
fn: function (){
var self=this;
function $Finder(){return globals.Finder||(typeof Finder=="undefined"?nil:Finder)}
return smalltalk.withContext(function($ctx1) { 
_st($Finder())._findClass_(self);
return self}, function($ctx1) {$ctx1.fill(self,"browse",{},globals.Class)})},
args: [],
source: "browse\x0a\x09Finder findClass: self",
messageSends: ["findClass:"],
referencedClasses: ["Finder"]
}),
globals.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "category",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self._package();
$ctx1.sendIdx["package"]=1;
if(($receiver = $2) == null || $receiver.isNil){
$1="Unclassified";
} else {
$1=_st(self._package())._name();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"category",{},globals.Class)})},
args: [],
source: "category\x0a\x09^ self package ifNil: [ 'Unclassified' ] ifNotNil: [ self package name ]",
messageSends: ["ifNil:ifNotNil:", "package", "name"],
referencedClasses: []
}),
globals.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "definition",
protocol: 'accessing',
fn: function (){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $3,$4,$2,$5,$6,$7,$1;
$1=_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
_st(stream)._nextPutAll_(_st(self._superclass())._asString());
$ctx2.sendIdx["nextPutAll:"]=1;
_st(stream)._nextPutAll_(" subclass: #");
$ctx2.sendIdx["nextPutAll:"]=2;
_st(stream)._nextPutAll_(self._name());
$ctx2.sendIdx["nextPutAll:"]=3;
$3=_st($String())._lf();
$ctx2.sendIdx["lf"]=1;
$4=_st($String())._tab();
$ctx2.sendIdx["tab"]=1;
$2=_st($3).__comma($4);
$ctx2.sendIdx[","]=1;
_st(stream)._nextPutAll_($2);
$ctx2.sendIdx["nextPutAll:"]=4;
$5=_st(stream)._nextPutAll_("instanceVariableNames: '");
$ctx2.sendIdx["nextPutAll:"]=5;
$5;
_st(self._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(stream)._nextPutAll_(each);
$ctx3.sendIdx["nextPutAll:"]=6;
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(stream)._nextPutAll_(" ");
$ctx3.sendIdx["nextPutAll:"]=7;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$6=_st("'".__comma(_st($String())._lf())).__comma(_st($String())._tab());
$ctx2.sendIdx[","]=2;
_st(stream)._nextPutAll_($6);
$ctx2.sendIdx["nextPutAll:"]=8;
_st(stream)._nextPutAll_("package: '");
$ctx2.sendIdx["nextPutAll:"]=9;
_st(stream)._nextPutAll_(self._category());
$ctx2.sendIdx["nextPutAll:"]=10;
$7=_st(stream)._nextPutAll_("'");
return $7;
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"definition",{},globals.Class)})},
args: [],
source: "definition\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09stream\x0a\x09\x09\x09nextPutAll: self superclass asString;\x0a\x09\x09\x09nextPutAll: ' subclass: #';\x0a\x09\x09\x09nextPutAll: self name;\x0a\x09\x09\x09nextPutAll: String lf, String tab;\x0a\x09\x09\x09nextPutAll: 'instanceVariableNames: '''.\x0a\x09\x09self instanceVariableNames\x0a\x09\x09\x09do: [ :each | stream nextPutAll: each ]\x0a\x09\x09\x09separatedBy: [ stream nextPutAll: ' ' ].\x0a\x09\x09stream\x0a\x09\x09\x09nextPutAll: '''', String lf, String tab;\x0a\x09\x09\x09nextPutAll: 'package: ''';\x0a\x09\x09\x09nextPutAll: self category;\x0a\x09\x09\x09nextPutAll: '''' ]",
messageSends: ["streamContents:", "nextPutAll:", "asString", "superclass", "name", ",", "lf", "tab", "do:separatedBy:", "instanceVariableNames", "category"],
referencedClasses: ["String"]
}),
globals.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "isClass",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isClass\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "package",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicAt_("pkg");
return $1;
}, function($ctx1) {$ctx1.fill(self,"package",{},globals.Class)})},
args: [],
source: "package\x0a\x09^ self basicAt: 'pkg'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
globals.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "package:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
var oldPackage;
function $SystemAnnouncer(){return globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $ClassMoved(){return globals.ClassMoved||(typeof ClassMoved=="undefined"?nil:ClassMoved)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$4,$5;
$2=self._package();
$ctx1.sendIdx["package"]=1;
$1=_st($2).__eq(aPackage);
if(smalltalk.assert($1)){
return self;
};
oldPackage=self._package();
self._basicAt_put_("pkg",aPackage);
$3=_st(oldPackage)._organization();
$ctx1.sendIdx["organization"]=1;
_st($3)._removeElement_(self);
_st(_st(aPackage)._organization())._addElement_(self);
$4=_st($ClassMoved())._new();
_st($4)._theClass_(self);
_st($4)._oldPackage_(oldPackage);
$5=_st($4)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($5);
return self}, function($ctx1) {$ctx1.fill(self,"package:",{aPackage:aPackage,oldPackage:oldPackage},globals.Class)})},
args: ["aPackage"],
source: "package: aPackage\x0a\x09| oldPackage |\x0a\x09\x0a\x09self package = aPackage ifTrue: [ ^ self ].\x0a\x09\x0a\x09oldPackage := self package.\x0a\x09\x0a\x09self basicAt: 'pkg' put: aPackage.\x0a\x09oldPackage organization removeElement: self.\x0a\x09aPackage organization addElement: self.\x0a\x0a\x09SystemAnnouncer current announce: (ClassMoved new\x0a\x09\x09theClass: self;\x0a\x09\x09oldPackage: oldPackage;\x0a\x09\x09yourself)",
messageSends: ["ifTrue:", "=", "package", "basicAt:put:", "removeElement:", "organization", "addElement:", "announce:", "current", "theClass:", "new", "oldPackage:", "yourself"],
referencedClasses: ["SystemAnnouncer", "ClassMoved"]
}),
globals.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_(self._name());
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},globals.Class)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: self name",
messageSends: ["nextPutAll:", "name"],
referencedClasses: []
}),
globals.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "rename:",
protocol: 'accessing',
fn: function (aString){
var self=this;
function $ClassBuilder(){return globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($ClassBuilder())._new())._renameClass_to_(self,aString);
return self}, function($ctx1) {$ctx1.fill(self,"rename:",{aString:aString},globals.Class)})},
args: ["aString"],
source: "rename: aString\x0a\x09ClassBuilder new renameClass: self to: aString",
messageSends: ["renameClass:to:", "new"],
referencedClasses: ["ClassBuilder"]
}),
globals.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "subclass:instanceVariableNames:",
protocol: 'class creation',
fn: function (aString,anotherString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclass_instanceVariableNames_package_(aString,anotherString,nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:",{aString:aString,anotherString:anotherString},globals.Class)})},
args: ["aString", "anotherString"],
source: "subclass: aString instanceVariableNames: anotherString\x0a\x09\x22Kept for compatibility.\x22\x0a\x09^ self subclass: aString instanceVariableNames: anotherString package: nil",
messageSends: ["subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
globals.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "subclass:instanceVariableNames:category:",
protocol: 'class creation',
fn: function (aString,aString2,aString3){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._deprecatedAPI();
$1=self._subclass_instanceVariableNames_package_(aString,aString2,aString3);
return $1;
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:category:",{aString:aString,aString2:aString2,aString3:aString3},globals.Class)})},
args: ["aString", "aString2", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 category: aString3\x0a\x09\x22Kept for compatibility.\x22\x0a\x09self deprecatedAPI.\x0a\x09^ self subclass: aString instanceVariableNames: aString2 package: aString3",
messageSends: ["deprecatedAPI", "subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
globals.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "subclass:instanceVariableNames:classVariableNames:poolDictionaries:category:",
protocol: 'class creation',
fn: function (aString,aString2,classVars,pools,aString3){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclass_instanceVariableNames_package_(aString,aString2,aString3);
return $1;
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:classVariableNames:poolDictionaries:category:",{aString:aString,aString2:aString2,classVars:classVars,pools:pools,aString3:aString3},globals.Class)})},
args: ["aString", "aString2", "classVars", "pools", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 classVariableNames: classVars poolDictionaries: pools category: aString3\x0a\x09\x22Just ignore class variables and pools. Added for compatibility.\x22\x0a\x09^ self subclass: aString instanceVariableNames: aString2 package: aString3",
messageSends: ["subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
globals.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "subclass:instanceVariableNames:package:",
protocol: 'class creation',
fn: function (aString,aString2,aString3){
var self=this;
function $ClassBuilder(){return globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($ClassBuilder())._new())._superclass_subclass_instanceVariableNames_package_(self,_st(aString)._asString(),aString2,aString3);
return $1;
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:package:",{aString:aString,aString2:aString2,aString3:aString3},globals.Class)})},
args: ["aString", "aString2", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 package: aString3\x0a\x09^ ClassBuilder new\x0a\x09\x09superclass: self subclass: aString asString instanceVariableNames: aString2 package: aString3",
messageSends: ["superclass:subclass:instanceVariableNames:package:", "new", "asString"],
referencedClasses: ["ClassBuilder"]
}),
globals.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "subclasses",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.subclasses._copy();
return self}, function($ctx1) {$ctx1.fill(self,"subclasses",{},globals.Class)})},
args: [],
source: "subclasses\x0a\x09<return self.subclasses._copy()>",
messageSends: [],
referencedClasses: []
}),
globals.Class);



smalltalk.addClass('Metaclass', globals.Behavior, [], 'Kernel-Classes');
globals.Metaclass.comment="I am the root of the class hierarchy.\x0a\x0aMy instances are metaclasses, one for each real class, and have a single instance, which they hold onto: the class that they are the metaclass of.";
smalltalk.addMethod(
smalltalk.method({
selector: "asJavascript",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("globals.".__comma(_st(self._instanceClass())._name())).__comma(".klass");
$ctx1.sendIdx[","]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJavascript",{},globals.Metaclass)})},
args: [],
source: "asJavascript\x0a\x09^ 'globals.', self instanceClass name, '.klass'",
messageSends: [",", "name", "instanceClass"],
referencedClasses: []
}),
globals.Metaclass);

smalltalk.addMethod(
smalltalk.method({
selector: "definition",
protocol: 'accessing',
fn: function (){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
_st(stream)._nextPutAll_(self._asString());
$ctx2.sendIdx["nextPutAll:"]=1;
$2=_st(stream)._nextPutAll_(" instanceVariableNames: '");
$ctx2.sendIdx["nextPutAll:"]=2;
$2;
_st(self._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(stream)._nextPutAll_(each);
$ctx3.sendIdx["nextPutAll:"]=3;
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(stream)._nextPutAll_(" ");
$ctx3.sendIdx["nextPutAll:"]=4;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
return _st(stream)._nextPutAll_("'");
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"definition",{},globals.Metaclass)})},
args: [],
source: "definition\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09stream\x0a\x09\x09\x09nextPutAll: self asString;\x0a\x09\x09\x09nextPutAll: ' instanceVariableNames: '''.\x0a\x09\x09self instanceVariableNames\x0a\x09\x09\x09do: [ :each | stream nextPutAll: each ]\x0a\x09\x09\x09separatedBy: [ stream nextPutAll: ' ' ].\x0a\x09\x09stream nextPutAll: '''' ]",
messageSends: ["streamContents:", "nextPutAll:", "asString", "do:separatedBy:", "instanceVariableNames"],
referencedClasses: ["String"]
}),
globals.Metaclass);

smalltalk.addMethod(
smalltalk.method({
selector: "instanceClass",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.instanceClass;
return self}, function($ctx1) {$ctx1.fill(self,"instanceClass",{},globals.Metaclass)})},
args: [],
source: "instanceClass\x0a\x09<return self.instanceClass>",
messageSends: [],
referencedClasses: []
}),
globals.Metaclass);

smalltalk.addMethod(
smalltalk.method({
selector: "instanceVariableNames:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
function $ClassBuilder(){return globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($ClassBuilder())._new())._class_instanceVariableNames_(self,aCollection);
return self}, function($ctx1) {$ctx1.fill(self,"instanceVariableNames:",{aCollection:aCollection},globals.Metaclass)})},
args: ["aCollection"],
source: "instanceVariableNames: aCollection\x0a\x09ClassBuilder new\x0a\x09\x09class: self instanceVariableNames: aCollection",
messageSends: ["class:instanceVariableNames:", "new"],
referencedClasses: ["ClassBuilder"]
}),
globals.Metaclass);

smalltalk.addMethod(
smalltalk.method({
selector: "isMetaclass",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isMetaclass\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.Metaclass);

smalltalk.addMethod(
smalltalk.method({
selector: "package",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._instanceClass())._package();
return $1;
}, function($ctx1) {$ctx1.fill(self,"package",{},globals.Metaclass)})},
args: [],
source: "package\x0a\x09^ self instanceClass package",
messageSends: ["package", "instanceClass"],
referencedClasses: []
}),
globals.Metaclass);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aStream)._nextPutAll_(_st(self._instanceClass())._name());
$ctx1.sendIdx["nextPutAll:"]=1;
$1=_st(aStream)._nextPutAll_(" class");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},globals.Metaclass)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: self instanceClass name;\x0a\x09\x09nextPutAll: ' class'",
messageSends: ["nextPutAll:", "name", "instanceClass"],
referencedClasses: []
}),
globals.Metaclass);

smalltalk.addMethod(
smalltalk.method({
selector: "subclasses",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self._instanceClass())._subclasses())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._isMetaclass())._not();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})))._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._theMetaClass();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"subclasses",{},globals.Metaclass)})},
args: [],
source: "subclasses\x0a\x09^ (self instanceClass subclasses \x0a\x09\x09select: [ :each | each isMetaclass not ])\x0a\x09\x09collect: [ :each | each theMetaClass ]",
messageSends: ["collect:", "select:", "subclasses", "instanceClass", "not", "isMetaclass", "theMetaClass"],
referencedClasses: []
}),
globals.Metaclass);

smalltalk.addMethod(
smalltalk.method({
selector: "theMetaClass",
protocol: 'accessing',
fn: function (){
var self=this;
return self;
},
args: [],
source: "theMetaClass\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
globals.Metaclass);

smalltalk.addMethod(
smalltalk.method({
selector: "theNonMetaClass",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._instanceClass();
return $1;
}, function($ctx1) {$ctx1.fill(self,"theNonMetaClass",{},globals.Metaclass)})},
args: [],
source: "theNonMetaClass\x0a\x09^ self instanceClass",
messageSends: ["instanceClass"],
referencedClasses: []
}),
globals.Metaclass);



smalltalk.addClass('ClassBuilder', globals.Object, [], 'Kernel-Classes');
globals.ClassBuilder.comment="I am responsible for compiling new classes or modifying existing classes in the system.\x0a\x0aRather than using me directly to compile a class, use `Class >> subclass:instanceVariableNames:package:`.";
smalltalk.addMethod(
smalltalk.method({
selector: "addSubclassOf:named:instanceVariableNames:package:",
protocol: 'class definition',
fn: function (aClass,className,aCollection,packageName){
var self=this;
var theClass,thePackage;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $Package(){return globals.Package||(typeof Package=="undefined"?nil:Package)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$receiver;
theClass=_st(_st($Smalltalk())._globals())._at_(className);
thePackage=_st($Package())._named_(packageName);
$1=theClass;
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
_st(theClass)._package_(thePackage);
$2=_st(_st(theClass)._superclass()).__eq_eq(aClass);
if(! smalltalk.assert($2)){
$3=self._migrateClassNamed_superclass_instanceVariableNames_package_(className,aClass,aCollection,packageName);
return $3;
};
};
$4=self._basicAddSubclassOf_named_instanceVariableNames_package_(aClass,className,aCollection,packageName);
return $4;
}, function($ctx1) {$ctx1.fill(self,"addSubclassOf:named:instanceVariableNames:package:",{aClass:aClass,className:className,aCollection:aCollection,packageName:packageName,theClass:theClass,thePackage:thePackage},globals.ClassBuilder)})},
args: ["aClass", "className", "aCollection", "packageName"],
source: "addSubclassOf: aClass named: className instanceVariableNames: aCollection package: packageName\x0a\x09| theClass thePackage |\x0a\x09\x0a\x09theClass := Smalltalk globals at: className.\x0a\x09thePackage := Package named: packageName.\x0a\x09\x0a\x09theClass ifNotNil: [\x0a\x09\x09theClass package: thePackage.\x0a\x09\x09theClass superclass == aClass ifFalse: [\x0a\x09\x09\x09^ self\x0a\x09\x09\x09\x09migrateClassNamed: className\x0a\x09\x09\x09\x09superclass: aClass\x0a\x09\x09\x09\x09instanceVariableNames: aCollection\x0a\x09\x09\x09\x09package: packageName ] ].\x0a\x09\x09\x0a\x09^ self\x0a\x09\x09basicAddSubclassOf: aClass\x0a\x09\x09named: className\x0a\x09\x09instanceVariableNames: aCollection\x0a\x09\x09package: packageName",
messageSends: ["at:", "globals", "named:", "ifNotNil:", "package:", "ifFalse:", "==", "superclass", "migrateClassNamed:superclass:instanceVariableNames:package:", "basicAddSubclassOf:named:instanceVariableNames:package:"],
referencedClasses: ["Smalltalk", "Package"]
}),
globals.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "basicAddSubclassOf:named:instanceVariableNames:package:",
protocol: 'private',
fn: function (aClass,aString,aCollection,packageName){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		smalltalk.addClass(aString, aClass, aCollection, packageName);
		return globals[aString]
	;
return self}, function($ctx1) {$ctx1.fill(self,"basicAddSubclassOf:named:instanceVariableNames:package:",{aClass:aClass,aString:aString,aCollection:aCollection,packageName:packageName},globals.ClassBuilder)})},
args: ["aClass", "aString", "aCollection", "packageName"],
source: "basicAddSubclassOf: aClass named: aString instanceVariableNames: aCollection package: packageName\x0a\x09<\x0a\x09\x09smalltalk.addClass(aString, aClass, aCollection, packageName);\x0a\x09\x09return globals[aString]\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "basicClass:instanceVariableNames:",
protocol: 'private',
fn: function (aClass,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._basicClass_instanceVariables_(aClass,self._instanceVariableNamesFor_(aString));
return self}, function($ctx1) {$ctx1.fill(self,"basicClass:instanceVariableNames:",{aClass:aClass,aString:aString},globals.ClassBuilder)})},
args: ["aClass", "aString"],
source: "basicClass: aClass instanceVariableNames: aString\x0a\x09self basicClass: aClass instanceVariables: (self instanceVariableNamesFor: aString)",
messageSends: ["basicClass:instanceVariables:", "instanceVariableNamesFor:"],
referencedClasses: []
}),
globals.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "basicClass:instanceVariables:",
protocol: 'private',
fn: function (aClass,aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aClass)._isMetaclass();
if(! smalltalk.assert($1)){
self._error_(_st(_st(aClass)._name()).__comma(" is not a metaclass"));
};
_st(aClass)._basicAt_put_("iVarNames",aCollection);
return self}, function($ctx1) {$ctx1.fill(self,"basicClass:instanceVariables:",{aClass:aClass,aCollection:aCollection},globals.ClassBuilder)})},
args: ["aClass", "aCollection"],
source: "basicClass: aClass instanceVariables: aCollection\x0a\x0a\x09aClass isMetaclass ifFalse: [ self error: aClass name, ' is not a metaclass' ].\x0a\x09aClass basicAt: 'iVarNames' put: aCollection",
messageSends: ["ifFalse:", "isMetaclass", "error:", ",", "name", "basicAt:put:"],
referencedClasses: []
}),
globals.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "basicRemoveClass:",
protocol: 'private',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.removeClass(aClass);
return self}, function($ctx1) {$ctx1.fill(self,"basicRemoveClass:",{aClass:aClass},globals.ClassBuilder)})},
args: ["aClass"],
source: "basicRemoveClass: aClass\x0a\x09<smalltalk.removeClass(aClass)>",
messageSends: [],
referencedClasses: []
}),
globals.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "basicRenameClass:to:",
protocol: 'private',
fn: function (aClass,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		globals[aString] = aClass;
		delete globals[aClass.className];
		aClass.className = aString;
	;
return self}, function($ctx1) {$ctx1.fill(self,"basicRenameClass:to:",{aClass:aClass,aString:aString},globals.ClassBuilder)})},
args: ["aClass", "aString"],
source: "basicRenameClass: aClass to: aString\x0a\x09<\x0a\x09\x09globals[aString] = aClass;\x0a\x09\x09delete globals[aClass.className];\x0a\x09\x09aClass.className = aString;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "basicSwapClassNames:with:",
protocol: 'private',
fn: function (aClass,anotherClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var tmp = aClass.className;
		aClass.className = anotherClass.className;
		anotherClass.className = tmp;
	;
return self}, function($ctx1) {$ctx1.fill(self,"basicSwapClassNames:with:",{aClass:aClass,anotherClass:anotherClass},globals.ClassBuilder)})},
args: ["aClass", "anotherClass"],
source: "basicSwapClassNames: aClass with: anotherClass\x0a\x09<\x0a\x09\x09var tmp = aClass.className;\x0a\x09\x09aClass.className = anotherClass.className;\x0a\x09\x09anotherClass.className = tmp;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "class:instanceVariableNames:",
protocol: 'class definition',
fn: function (aClass,ivarNames){
var self=this;
function $SystemAnnouncer(){return globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $ClassDefinitionChanged(){return globals.ClassDefinitionChanged||(typeof ClassDefinitionChanged=="undefined"?nil:ClassDefinitionChanged)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._basicClass_instanceVariableNames_(aClass,ivarNames);
self._setupClass_(aClass);
$1=_st($ClassDefinitionChanged())._new();
_st($1)._theClass_(aClass);
$2=_st($1)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"class:instanceVariableNames:",{aClass:aClass,ivarNames:ivarNames},globals.ClassBuilder)})},
args: ["aClass", "ivarNames"],
source: "class: aClass instanceVariableNames: ivarNames\x0a\x09self basicClass: aClass instanceVariableNames: ivarNames.\x0a\x09self setupClass: aClass.\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassDefinitionChanged new\x0a\x09\x09\x09theClass: aClass;\x0a\x09\x09\x09yourself)",
messageSends: ["basicClass:instanceVariableNames:", "setupClass:", "announce:", "current", "theClass:", "new", "yourself"],
referencedClasses: ["SystemAnnouncer", "ClassDefinitionChanged"]
}),
globals.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "copyClass:named:",
protocol: 'copying',
fn: function (aClass,className){
var self=this;
var newClass;
function $SystemAnnouncer(){return globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $ClassAdded(){return globals.ClassAdded||(typeof ClassAdded=="undefined"?nil:ClassAdded)}
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
}, function($ctx1) {$ctx1.fill(self,"copyClass:named:",{aClass:aClass,className:className,newClass:newClass},globals.ClassBuilder)})},
args: ["aClass", "className"],
source: "copyClass: aClass named: className\x0a\x09| newClass |\x0a\x0a\x09newClass := self\x0a\x09\x09addSubclassOf: aClass superclass\x0a\x09\x09named: className\x0a\x09\x09instanceVariableNames: aClass instanceVariableNames\x0a\x09\x09package: aClass package name.\x0a\x0a\x09self copyClass: aClass to: newClass.\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassAdded new\x0a\x09\x09\x09theClass: newClass;\x0a\x09\x09\x09yourself).\x0a\x09\x0a\x09^ newClass",
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "superclass", "instanceVariableNames", "name", "package", "copyClass:to:", "announce:", "current", "theClass:", "new", "yourself"],
referencedClasses: ["SystemAnnouncer", "ClassAdded"]
}),
globals.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "copyClass:to:",
protocol: 'copying',
fn: function (aClass,anotherClass){
var self=this;
function $Compiler(){return globals.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$7,$6,$9,$8;
_st(anotherClass)._comment_(_st(aClass)._comment());
$1=_st(aClass)._methodDictionary();
$ctx1.sendIdx["methodDictionary"]=1;
_st($1)._valuesDo_((function(each){
return smalltalk.withContext(function($ctx2) {
$2=_st($Compiler())._new();
$ctx2.sendIdx["new"]=1;
$3=_st(each)._source();
$ctx2.sendIdx["source"]=1;
$4=_st(each)._protocol();
$ctx2.sendIdx["protocol"]=1;
return _st($2)._install_forClass_protocol_($3,anotherClass,$4);
$ctx2.sendIdx["install:forClass:protocol:"]=1;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$ctx1.sendIdx["valuesDo:"]=1;
$5=_st(anotherClass)._class();
$ctx1.sendIdx["class"]=1;
$7=_st(aClass)._class();
$ctx1.sendIdx["class"]=2;
$6=_st($7)._instanceVariableNames();
self._basicClass_instanceVariables_($5,$6);
$9=_st(aClass)._class();
$ctx1.sendIdx["class"]=3;
$8=_st($9)._methodDictionary();
_st($8)._valuesDo_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st($Compiler())._new())._install_forClass_protocol_(_st(each)._source(),_st(anotherClass)._class(),_st(each)._protocol());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
self._setupClass_(anotherClass);
return self}, function($ctx1) {$ctx1.fill(self,"copyClass:to:",{aClass:aClass,anotherClass:anotherClass},globals.ClassBuilder)})},
args: ["aClass", "anotherClass"],
source: "copyClass: aClass to: anotherClass\x0a\x0a\x09anotherClass comment: aClass comment.\x0a\x0a\x09aClass methodDictionary valuesDo: [ :each |\x0a\x09\x09Compiler new install: each source forClass: anotherClass protocol: each protocol ].\x0a\x0a\x09self basicClass: anotherClass class instanceVariables: aClass class instanceVariableNames.\x0a\x0a\x09aClass class methodDictionary valuesDo: [ :each |\x0a\x09\x09Compiler new install: each source forClass: anotherClass class protocol: each protocol ].\x0a\x0a\x09self setupClass: anotherClass",
messageSends: ["comment:", "comment", "valuesDo:", "methodDictionary", "install:forClass:protocol:", "new", "source", "protocol", "basicClass:instanceVariables:", "class", "instanceVariableNames", "setupClass:"],
referencedClasses: ["Compiler"]
}),
globals.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "installMethod:forClass:protocol:",
protocol: 'method definition',
fn: function (aCompiledMethod,aBehavior,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCompiledMethod)._protocol_(aString);
_st(aBehavior)._addCompiledMethod_(aCompiledMethod);
self._setupClass_(aBehavior);
return aCompiledMethod;
}, function($ctx1) {$ctx1.fill(self,"installMethod:forClass:protocol:",{aCompiledMethod:aCompiledMethod,aBehavior:aBehavior,aString:aString},globals.ClassBuilder)})},
args: ["aCompiledMethod", "aBehavior", "aString"],
source: "installMethod: aCompiledMethod forClass: aBehavior protocol: aString\x0a\x09aCompiledMethod protocol: aString.\x0a\x09aBehavior addCompiledMethod: aCompiledMethod.\x0a\x09self setupClass: aBehavior.\x0a\x09^ aCompiledMethod",
messageSends: ["protocol:", "addCompiledMethod:", "setupClass:"],
referencedClasses: []
}),
globals.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "instanceVariableNamesFor:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aString)._tokenize_(" "))._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._isEmpty();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"instanceVariableNamesFor:",{aString:aString},globals.ClassBuilder)})},
args: ["aString"],
source: "instanceVariableNamesFor: aString\x0a\x09^ (aString tokenize: ' ') reject: [ :each | each isEmpty ]",
messageSends: ["reject:", "tokenize:", "isEmpty"],
referencedClasses: []
}),
globals.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "migrateClass:superclass:",
protocol: 'class migration',
fn: function (aClass,anotherClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(aClass)._name();
$ctx1.sendIdx["name"]=1;
$1=self._migrateClassNamed_superclass_instanceVariableNames_package_($2,anotherClass,_st(aClass)._instanceVariableNames(),_st(_st(aClass)._package())._name());
return $1;
}, function($ctx1) {$ctx1.fill(self,"migrateClass:superclass:",{aClass:aClass,anotherClass:anotherClass},globals.ClassBuilder)})},
args: ["aClass", "anotherClass"],
source: "migrateClass: aClass superclass: anotherClass\x0a\x09^ self\x0a\x09\x09migrateClassNamed: aClass name\x0a\x09\x09superclass: anotherClass\x0a\x09\x09instanceVariableNames: aClass instanceVariableNames\x0a\x09\x09package: aClass package name",
messageSends: ["migrateClassNamed:superclass:instanceVariableNames:package:", "name", "instanceVariableNames", "package"],
referencedClasses: []
}),
globals.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "migrateClassNamed:superclass:instanceVariableNames:package:",
protocol: 'class migration',
fn: function (className,aClass,aCollection,packageName){
var self=this;
var oldClass,newClass,tmp;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
function $SystemAnnouncer(){return globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $ClassMigrated(){return globals.ClassMigrated||(typeof ClassMigrated=="undefined"?nil:ClassMigrated)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
tmp="new*".__comma(className);
$ctx1.sendIdx[","]=1;
oldClass=_st(_st($Smalltalk())._globals())._at_(className);
newClass=self._addSubclassOf_named_instanceVariableNames_package_(aClass,tmp,aCollection,packageName);
self._basicSwapClassNames_with_(oldClass,newClass);
$ctx1.sendIdx["basicSwapClassNames:with:"]=1;
_st((function(){
return smalltalk.withContext(function($ctx2) {
return self._copyClass_to_(oldClass,newClass);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._on_do_($Error(),(function(exception){
return smalltalk.withContext(function($ctx2) {
self._basicSwapClassNames_with_(oldClass,newClass);
$1=self._basicRemoveClass_(newClass);
$ctx2.sendIdx["basicRemoveClass:"]=1;
$1;
return _st(exception)._signal();
}, function($ctx2) {$ctx2.fillBlock({exception:exception},$ctx1,2)})}));
self._rawRenameClass_to_(oldClass,tmp);
$ctx1.sendIdx["rawRenameClass:to:"]=1;
$2=self._rawRenameClass_to_(newClass,className);
$3=_st(oldClass)._subclasses();
$4=(function(each){
return smalltalk.withContext(function($ctx2) {
return self._migrateClass_superclass_(each,newClass);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)})});
$5=_st("Recompiling ".__comma(_st(newClass)._name())).__comma("...");
$ctx1.sendIdx[","]=2;
_st($3)._do_displayingProgress_($4,$5);
self._basicRemoveClass_(oldClass);
$6=_st($ClassMigrated())._new();
_st($6)._theClass_(newClass);
_st($6)._oldClass_(oldClass);
$7=_st($6)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($7);
$8=newClass;
return $8;
}, function($ctx1) {$ctx1.fill(self,"migrateClassNamed:superclass:instanceVariableNames:package:",{className:className,aClass:aClass,aCollection:aCollection,packageName:packageName,oldClass:oldClass,newClass:newClass,tmp:tmp},globals.ClassBuilder)})},
args: ["className", "aClass", "aCollection", "packageName"],
source: "migrateClassNamed: className superclass: aClass instanceVariableNames: aCollection package: packageName\x0a\x09| oldClass newClass tmp |\x0a\x09\x0a\x09tmp := 'new*', className.\x0a\x09oldClass := Smalltalk globals at: className.\x0a\x09\x0a\x09newClass := self\x0a\x09\x09addSubclassOf: aClass\x0a\x09\x09named: tmp\x0a\x09\x09instanceVariableNames: aCollection\x0a\x09\x09package: packageName.\x0a\x0a\x09self basicSwapClassNames: oldClass with: newClass.\x0a\x0a\x09[ self copyClass: oldClass to: newClass ]\x0a\x09\x09on: Error\x0a\x09\x09do: [ :exception |\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09basicSwapClassNames: oldClass with: newClass;\x0a\x09\x09\x09\x09basicRemoveClass: newClass.\x0a\x09\x09\x09exception signal ].\x0a\x0a\x09self\x0a\x09\x09rawRenameClass: oldClass to: tmp;\x0a\x09\x09rawRenameClass: newClass to: className.\x0a\x0a\x09oldClass subclasses \x0a\x09\x09do: [ :each | self migrateClass: each superclass: newClass ]\x0a\x09\x09displayingProgress: 'Recompiling ', newClass name, '...'.\x0a\x0a\x09self basicRemoveClass: oldClass.\x0a\x09\x0a\x09SystemAnnouncer current announce: (ClassMigrated new\x0a\x09\x09theClass: newClass;\x0a\x09\x09oldClass: oldClass;\x0a\x09\x09yourself).\x0a\x09\x0a\x09^ newClass",
messageSends: [",", "at:", "globals", "addSubclassOf:named:instanceVariableNames:package:", "basicSwapClassNames:with:", "on:do:", "copyClass:to:", "basicRemoveClass:", "signal", "rawRenameClass:to:", "do:displayingProgress:", "subclasses", "migrateClass:superclass:", "name", "announce:", "current", "theClass:", "new", "oldClass:", "yourself"],
referencedClasses: ["Smalltalk", "Error", "SystemAnnouncer", "ClassMigrated"]
}),
globals.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "rawRenameClass:to:",
protocol: 'private',
fn: function (aClass,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		globals[aString] = aClass;
	;
return self}, function($ctx1) {$ctx1.fill(self,"rawRenameClass:to:",{aClass:aClass,aString:aString},globals.ClassBuilder)})},
args: ["aClass", "aString"],
source: "rawRenameClass: aClass to: aString\x0a\x09<\x0a\x09\x09globals[aString] = aClass;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "renameClass:to:",
protocol: 'class migration',
fn: function (aClass,className){
var self=this;
function $SystemAnnouncer(){return globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $ClassRenamed(){return globals.ClassRenamed||(typeof ClassRenamed=="undefined"?nil:ClassRenamed)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._basicRenameClass_to_(aClass,className);
_st(aClass)._recompile();
$1=_st($ClassRenamed())._new();
_st($1)._theClass_(aClass);
$2=_st($1)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"renameClass:to:",{aClass:aClass,className:className},globals.ClassBuilder)})},
args: ["aClass", "className"],
source: "renameClass: aClass to: className\x0a\x09self basicRenameClass: aClass to: className.\x0a\x09\x0a\x09\x22Recompile the class to fix potential issues with super sends\x22\x0a\x09aClass recompile.\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassRenamed new\x0a\x09\x09\x09theClass: aClass;\x0a\x09\x09\x09yourself)",
messageSends: ["basicRenameClass:to:", "recompile", "announce:", "current", "theClass:", "new", "yourself"],
referencedClasses: ["SystemAnnouncer", "ClassRenamed"]
}),
globals.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "setupClass:",
protocol: 'public',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.init(aClass);;
return self}, function($ctx1) {$ctx1.fill(self,"setupClass:",{aClass:aClass},globals.ClassBuilder)})},
args: ["aClass"],
source: "setupClass: aClass\x0a\x09<smalltalk.init(aClass);>",
messageSends: [],
referencedClasses: []
}),
globals.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "superclass:subclass:",
protocol: 'class definition',
fn: function (aClass,className){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._superclass_subclass_instanceVariableNames_package_(aClass,className,"",nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"superclass:subclass:",{aClass:aClass,className:className},globals.ClassBuilder)})},
args: ["aClass", "className"],
source: "superclass: aClass subclass: className\x0a\x09^ self superclass: aClass subclass: className instanceVariableNames: '' package: nil",
messageSends: ["superclass:subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
globals.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "superclass:subclass:instanceVariableNames:package:",
protocol: 'class definition',
fn: function (aClass,className,ivarNames,packageName){
var self=this;
var newClass;
function $SystemAnnouncer(){return globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $ClassAdded(){return globals.ClassAdded||(typeof ClassAdded=="undefined"?nil:ClassAdded)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$receiver;
$1=self._instanceVariableNamesFor_(ivarNames);
if(($receiver = packageName) == null || $receiver.isNil){
$2="unclassified";
} else {
$2=packageName;
};
newClass=self._addSubclassOf_named_instanceVariableNames_package_(aClass,className,$1,$2);
self._setupClass_(newClass);
$3=_st($ClassAdded())._new();
_st($3)._theClass_(newClass);
$4=_st($3)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($4);
$5=newClass;
return $5;
}, function($ctx1) {$ctx1.fill(self,"superclass:subclass:instanceVariableNames:package:",{aClass:aClass,className:className,ivarNames:ivarNames,packageName:packageName,newClass:newClass},globals.ClassBuilder)})},
args: ["aClass", "className", "ivarNames", "packageName"],
source: "superclass: aClass subclass: className instanceVariableNames: ivarNames package: packageName\x0a\x09| newClass |\x0a\x09\x0a\x09newClass := self addSubclassOf: aClass\x0a\x09\x09named: className instanceVariableNames: (self instanceVariableNamesFor: ivarNames)\x0a\x09\x09package: (packageName ifNil: [ 'unclassified' ]).\x0a\x09self setupClass: newClass.\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassAdded new\x0a\x09\x09\x09theClass: newClass;\x0a\x09\x09\x09yourself).\x0a\x09\x0a\x09^ newClass",
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "instanceVariableNamesFor:", "ifNil:", "setupClass:", "announce:", "current", "theClass:", "new", "yourself"],
referencedClasses: ["SystemAnnouncer", "ClassAdded"]
}),
globals.ClassBuilder);



smalltalk.addClass('ClassCategoryReader', globals.Object, ['class', 'category'], 'Kernel-Classes');
globals.ClassCategoryReader.comment="I provide a mechanism for retrieving class descriptions stored on a file in the Smalltalk chunk format.";
smalltalk.addMethod(
smalltalk.method({
selector: "class:category:",
protocol: 'accessing',
fn: function (aClass,aString){
var self=this;
self["@class"]=aClass;
self["@category"]=aString;
return self},
args: ["aClass", "aString"],
source: "class: aClass category: aString\x0a\x09class := aClass.\x0a\x09category := aString",
messageSends: [],
referencedClasses: []
}),
globals.ClassCategoryReader);

smalltalk.addMethod(
smalltalk.method({
selector: "compileMethod:",
protocol: 'private',
fn: function (aString){
var self=this;
function $Compiler(){return globals.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($Compiler())._new())._install_forClass_protocol_(aString,self["@class"],self["@category"]);
return self}, function($ctx1) {$ctx1.fill(self,"compileMethod:",{aString:aString},globals.ClassCategoryReader)})},
args: ["aString"],
source: "compileMethod: aString\x0a\x09Compiler new install: aString forClass: class protocol: category",
messageSends: ["install:forClass:protocol:", "new"],
referencedClasses: ["Compiler"]
}),
globals.ClassCategoryReader);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.ClassCategoryReader.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.ClassCategoryReader)})},
args: [],
source: "initialize\x0a\x09super initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.ClassCategoryReader);

smalltalk.addMethod(
smalltalk.method({
selector: "scanFrom:",
protocol: 'fileIn',
fn: function (aChunkParser){
var self=this;
var chunk;
function $ClassBuilder(){return globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
_st((function(){
return smalltalk.withContext(function($ctx2) {
chunk=_st(aChunkParser)._nextChunk();
chunk;
return _st(chunk)._isEmpty();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
return self._compileMethod_(chunk);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
_st(_st($ClassBuilder())._new())._setupClass_(self["@class"]);
return self}, function($ctx1) {$ctx1.fill(self,"scanFrom:",{aChunkParser:aChunkParser,chunk:chunk},globals.ClassCategoryReader)})},
args: ["aChunkParser"],
source: "scanFrom: aChunkParser\x0a\x09| chunk |\x0a\x09[ chunk := aChunkParser nextChunk.\x0a\x09chunk isEmpty ] whileFalse: [\x0a\x09\x09self compileMethod: chunk ].\x0a\x09ClassBuilder new setupClass: class",
messageSends: ["whileFalse:", "nextChunk", "isEmpty", "compileMethod:", "setupClass:", "new"],
referencedClasses: ["ClassBuilder"]
}),
globals.ClassCategoryReader);



smalltalk.addClass('ClassCommentReader', globals.Object, ['class'], 'Kernel-Classes');
globals.ClassCommentReader.comment="I provide a mechanism for retrieving class comments stored on a file.\x0a\x0aSee also `ClassCategoryReader`.";
smalltalk.addMethod(
smalltalk.method({
selector: "class:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@class"]=aClass;
return self},
args: ["aClass"],
source: "class: aClass\x0a\x09class := aClass",
messageSends: [],
referencedClasses: []
}),
globals.ClassCommentReader);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.ClassCommentReader.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.ClassCommentReader)})},
args: [],
source: "initialize\x0a\x09super initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.ClassCommentReader);

smalltalk.addMethod(
smalltalk.method({
selector: "scanFrom:",
protocol: 'fileIn',
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
return self}, function($ctx1) {$ctx1.fill(self,"scanFrom:",{aChunkParser:aChunkParser,chunk:chunk},globals.ClassCommentReader)})},
args: ["aChunkParser"],
source: "scanFrom: aChunkParser\x0a\x09| chunk |\x0a\x09chunk := aChunkParser nextChunk.\x0a\x09chunk isEmpty ifFalse: [\x0a\x09\x09self setComment: chunk ].",
messageSends: ["nextChunk", "ifFalse:", "isEmpty", "setComment:"],
referencedClasses: []
}),
globals.ClassCommentReader);

smalltalk.addMethod(
smalltalk.method({
selector: "setComment:",
protocol: 'private',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@class"])._comment_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"setComment:",{aString:aString},globals.ClassCommentReader)})},
args: ["aString"],
source: "setComment: aString\x0a\x09class comment: aString",
messageSends: ["comment:"],
referencedClasses: []
}),
globals.ClassCommentReader);



smalltalk.addClass('ClassSorterNode', globals.Object, ['theClass', 'level', 'nodes'], 'Kernel-Classes');
globals.ClassSorterNode.comment="I provide an algorithm for sorting classes alphabetically.\x0a\x0aSee [Issue #143](https://github.com/amber-smalltalk/amber/issues/143) on GitHub.";
smalltalk.addMethod(
smalltalk.method({
selector: "getNodesFrom:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
var children,others;
function $ClassSorterNode(){return globals.ClassSorterNode||(typeof ClassSorterNode=="undefined"?nil:ClassSorterNode)}
return smalltalk.withContext(function($ctx1) { 
var $1;
children=[];
others=[];
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(each)._superclass()).__eq(self._theClass());
if(smalltalk.assert($1)){
return _st(children)._add_(each);
$ctx2.sendIdx["add:"]=1;
} else {
return _st(others)._add_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
self["@nodes"]=_st(children)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st($ClassSorterNode())._on_classes_level_(each,others,_st(self._level()).__plus((1)));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)})}));
return self}, function($ctx1) {$ctx1.fill(self,"getNodesFrom:",{aCollection:aCollection,children:children,others:others},globals.ClassSorterNode)})},
args: ["aCollection"],
source: "getNodesFrom: aCollection\x0a\x09| children others |\x0a\x09children := #().\x0a\x09others := #().\x0a\x09aCollection do: [ :each |\x0a\x09\x09(each superclass = self theClass)\x0a\x09\x09\x09ifTrue: [ children add: each ]\x0a\x09\x09\x09ifFalse: [ others add: each ]].\x0a\x09nodes:= children collect: [ :each |\x0a\x09\x09ClassSorterNode on: each classes: others level: self level + 1 ]",
messageSends: ["do:", "ifTrue:ifFalse:", "=", "superclass", "theClass", "add:", "collect:", "on:classes:level:", "+", "level"],
referencedClasses: ["ClassSorterNode"]
}),
globals.ClassSorterNode);

smalltalk.addMethod(
smalltalk.method({
selector: "level",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@level"];
return $1;
},
args: [],
source: "level\x0a\x09^ level",
messageSends: [],
referencedClasses: []
}),
globals.ClassSorterNode);

smalltalk.addMethod(
smalltalk.method({
selector: "level:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@level"]=anInteger;
return self},
args: ["anInteger"],
source: "level: anInteger\x0a\x09level := anInteger",
messageSends: [],
referencedClasses: []
}),
globals.ClassSorterNode);

smalltalk.addMethod(
smalltalk.method({
selector: "nodes",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@nodes"];
return $1;
},
args: [],
source: "nodes\x0a\x09^ nodes",
messageSends: [],
referencedClasses: []
}),
globals.ClassSorterNode);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@theClass"];
return $1;
},
args: [],
source: "theClass\x0a\x09^ theClass",
messageSends: [],
referencedClasses: []
}),
globals.ClassSorterNode);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@theClass"]=aClass;
return self},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
globals.ClassSorterNode);

smalltalk.addMethod(
smalltalk.method({
selector: "traverseClassesWith:",
protocol: 'visiting',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
$1=self._theClass();
$ctx1.sendIdx["theClass"]=1;
_st(aCollection)._add_($1);
_st(_st(self._nodes())._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) {
$3=_st(a)._theClass();
$ctx2.sendIdx["theClass"]=2;
$2=_st($3)._name();
$ctx2.sendIdx["name"]=1;
return _st($2).__lt_eq(_st(_st(b)._theClass())._name());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)})})))._do_((function(aNode){
return smalltalk.withContext(function($ctx2) {
return _st(aNode)._traverseClassesWith_(aCollection);
}, function($ctx2) {$ctx2.fillBlock({aNode:aNode},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"traverseClassesWith:",{aCollection:aCollection},globals.ClassSorterNode)})},
args: ["aCollection"],
source: "traverseClassesWith: aCollection\x0a\x09\x22sort classes alphabetically Issue #143\x22\x0a\x0a\x09aCollection add: self theClass.\x0a\x09(self nodes sorted: [ :a :b | a theClass name <= b theClass name ]) do: [ :aNode |\x0a\x09\x09aNode traverseClassesWith: aCollection ].",
messageSends: ["add:", "theClass", "do:", "sorted:", "nodes", "<=", "name", "traverseClassesWith:"],
referencedClasses: []
}),
globals.ClassSorterNode);


smalltalk.addMethod(
smalltalk.method({
selector: "on:classes:level:",
protocol: 'instance creation',
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
}, function($ctx1) {$ctx1.fill(self,"on:classes:level:",{aClass:aClass,aCollection:aCollection,anInteger:anInteger},globals.ClassSorterNode.klass)})},
args: ["aClass", "aCollection", "anInteger"],
source: "on: aClass classes: aCollection level: anInteger\x0a\x09^ self new\x0a\x09\x09theClass: aClass;\x0a\x09\x09level: anInteger;\x0a\x09\x09getNodesFrom: aCollection;\x0a\x09\x09yourself",
messageSends: ["theClass:", "new", "level:", "getNodesFrom:", "yourself"],
referencedClasses: []
}),
globals.ClassSorterNode.klass);

});
