smalltalk.addPackage('Kernel-Classes');
smalltalk.addClass('Behavior', smalltalk.Object, [], 'Kernel-Classes');
smalltalk.Behavior.comment="Behavior is the superclass of all class objects.\x0a\x0aIt defines the protocol for creating instances of a class with `#basicNew` and `#new` (see `boot.js` for class constructors details).\x0aInstances know about the subclass/superclass relationships between classes, contain the description that instances are created from,\x0aand hold the method dictionary that's associated with each class.\x0a\x0aBehavior also provides methods for compiling methods, examining the method dictionary, and iterating over the class hierarchy."
smalltalk.addMethod(
"_addCompiledMethod_",
smalltalk.method({
selector: "addCompiledMethod:",
category: 'compiling',
fn: function (aMethod){
var self=this;
var oldMethod,announcement;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6;
oldMethod=_st(_st(self)._methodDictionary())._at_ifAbsent_(_st(aMethod)._selector(),(function(){
return smalltalk.withContext(function($ctx2) {return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=_st(_st(self)._protocols())._includes_(_st(aMethod)._protocol());
if(! smalltalk.assert($1)){
_st(_st(self)._organization())._addElement_(_st(aMethod)._protocol());
};
_st(self)._basicAddCompiledMethod_(aMethod);
$2=oldMethod;
if(($receiver = $2) == nil || $receiver == undefined){
$3=_st((smalltalk.MethodAdded || MethodAdded))._new();
_st($3)._method_(aMethod);
$4=_st($3)._yourself();
announcement=$4;
} else {
$5=_st((smalltalk.MethodModified || MethodModified))._new();
_st($5)._oldMethod_(oldMethod);
_st($5)._method_(aMethod);
$6=_st($5)._yourself();
announcement=$6;
};
_st(_st((smalltalk.SystemAnnouncer || SystemAnnouncer))._current())._announce_(announcement);
return self}, function($ctx1) {$ctx1.fill(self,"addCompiledMethod:",{aMethod:aMethod,oldMethod:oldMethod,announcement:announcement},smalltalk.Behavior)})},
args: ["aMethod"],
source: "addCompiledMethod: aMethod\x0a\x09| oldMethod announcement |\x0a\x09\x0a\x09oldMethod := self methodDictionary\x0a\x09\x09at: aMethod selector\x0a\x09\x09ifAbsent: [ nil ].\x0a\x09\x0a\x09(self protocols includes: aMethod protocol)\x0a\x09\x09ifFalse: [ self organization addElement: aMethod protocol ].\x0a\x0a\x09self basicAddCompiledMethod: aMethod.\x0a\x09\x0a\x09announcement := oldMethod\x0a\x09\x09ifNil: [\x0a\x09\x09\x09MethodAdded new\x0a\x09\x09\x09\x09\x09method: aMethod;\x0a\x09\x09\x09\x09\x09yourself ]\x0a\x09\x09ifNotNil: [\x0a\x09\x09\x09MethodModified new\x0a\x09\x09\x09\x09\x09oldMethod: oldMethod;\x0a\x09\x09\x09\x09\x09method: aMethod;\x0a\x09\x09\x09\x09\x09yourself ].\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09\x09\x09announce: announcement",
messageSends: ["at:ifAbsent:", "selector", "methodDictionary", "ifFalse:", "addElement:", "protocol", "organization", "includes:", "protocols", "basicAddCompiledMethod:", "ifNil:ifNotNil:", "method:", "new", "yourself", "oldMethod:", "announce:", "current"],
referencedClasses: ["MethodAdded", "MethodModified", "SystemAnnouncer"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_allInstanceVariableNames",
smalltalk.method({
selector: "allInstanceVariableNames",
category: 'accessing',
fn: function (){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { var $1,$2;
result=_st(_st(self)._instanceVariableNames())._copy();
$1=_st(self)._superclass();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(result)._addAll_(_st(_st(self)._superclass())._allInstanceVariableNames());
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
"_allSelectors",
smalltalk.method({
selector: "allSelectors",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$1=_st(_st(self)._allSuperclasses())._inject_into_(_st(self)._selectors(),(function(soFar,aBehavior){
return smalltalk.withContext(function($ctx2) {$2=soFar;
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
"_allSubclasses",
smalltalk.method({
selector: "allSubclasses",
category: 'accessing',
fn: function (){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { var $1;
result=_st(self)._subclasses();
_st(_st(self)._subclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(result)._addAll_(_st(each)._allSubclasses());
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
"_allSuperclasses",
smalltalk.method({
selector: "allSuperclasses",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$2;
$1=_st(self)._superclass();
if(($receiver = $1) == nil || $receiver == undefined){
return [];
} else {
$1;
};
$3=_st((smalltalk.OrderedCollection || OrderedCollection))._with_(_st(self)._superclass());
_st($3)._addAll_(_st(_st(self)._superclass())._allSuperclasses());
$4=_st($3)._yourself();
$2=$4;
return $2;
}, function($ctx1) {$ctx1.fill(self,"allSuperclasses",{},smalltalk.Behavior)})},
args: [],
source: "allSuperclasses\x0a\x09\x0a\x09self superclass ifNil: [ ^ #() ].\x0a\x09\x0a\x09^ (OrderedCollection with: self superclass)\x0a\x09\x09addAll: self superclass allSuperclasses;\x0a\x09\x09yourself",
messageSends: ["ifNil:", "superclass", "addAll:", "allSuperclasses", "with:", "yourself"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_basicAddCompiledMethod_",
smalltalk.method({
selector: "basicAddCompiledMethod:",
category: 'private',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.addMethod(aMethod.selector._asSelector(), aMethod, self);
return self}, function($ctx1) {$ctx1.fill(self,"basicAddCompiledMethod:",{aMethod:aMethod},smalltalk.Behavior)})},
args: ["aMethod"],
source: "basicAddCompiledMethod: aMethod\x0a\x09<smalltalk.addMethod(aMethod.selector._asSelector(), aMethod, self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_basicNew",
smalltalk.method({
selector: "basicNew",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return new self.fn();
return self}, function($ctx1) {$ctx1.fill(self,"basicNew",{},smalltalk.Behavior)})},
args: [],
source: "basicNew\x0a\x09<return new self.fn()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_basicRemoveCompiledMethod_",
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
"_canUnderstand_",
smalltalk.method({
selector: "canUnderstand:",
category: 'testing',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(self)._methodDictionary())._keys())._includes_(_st(aSelector)._asString()))._or_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(self)._superclass())._notNil())._and_((function(){
return smalltalk.withContext(function($ctx3) {return _st(_st(self)._superclass())._canUnderstand_(aSelector);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
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
"_comment",
smalltalk.method({
selector: "comment",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._basicAt_("comment");
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
"_comment_",
smalltalk.method({
selector: "comment:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self)._basicAt_put_("comment",aString);
$1=_st((smalltalk.ClassCommentChanged || ClassCommentChanged))._new();
_st($1)._theClass_(self);
$2=_st($1)._yourself();
_st(_st((smalltalk.SystemAnnouncer || SystemAnnouncer))._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"comment:",{aString:aString},smalltalk.Behavior)})},
args: ["aString"],
source: "comment: aString\x0a\x09self basicAt: 'comment' put: aString.\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassCommentChanged new\x0a\x09\x09\x09theClass: self;\x0a\x09\x09\x09yourself)",
messageSends: ["basicAt:put:", "announce:", "theClass:", "new", "yourself", "current"],
referencedClasses: ["ClassCommentChanged", "SystemAnnouncer"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_commentStamp",
smalltalk.method({
selector: "commentStamp",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.ClassCommentReader || ClassCommentReader))._new();
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
"_commentStamp_prior_",
smalltalk.method({
selector: "commentStamp:prior:",
category: 'accessing',
fn: function (aStamp,prior){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._commentStamp();
return $1;
}, function($ctx1) {$ctx1.fill(self,"commentStamp:prior:",{aStamp:aStamp,prior:prior},smalltalk.Behavior)})},
args: ["aStamp", "prior"],
source: "commentStamp: aStamp prior: prior\x0a\x09\x09^self commentStamp",
messageSends: ["commentStamp"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_compile_",
smalltalk.method({
selector: "compile:",
category: 'compiling',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._compile_category_(aString,"");
return self}, function($ctx1) {$ctx1.fill(self,"compile:",{aString:aString},smalltalk.Behavior)})},
args: ["aString"],
source: "compile: aString\x0a\x09self compile: aString category: ''",
messageSends: ["compile:category:"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_compile_category_",
smalltalk.method({
selector: "compile:category:",
category: 'compiling',
fn: function (aString,anotherString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.Compiler || Compiler))._new())._install_forClass_category_(aString,self,anotherString);
return self}, function($ctx1) {$ctx1.fill(self,"compile:category:",{aString:aString,anotherString:anotherString},smalltalk.Behavior)})},
args: ["aString", "anotherString"],
source: "compile: aString category: anotherString\x0a\x09Compiler new\x0a\x09\x09install: aString\x0a\x09\x09forClass: self\x0a\x09\x09category: anotherString",
messageSends: ["install:forClass:category:", "new"],
referencedClasses: ["Compiler"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_definition",
smalltalk.method({
selector: "definition",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "";
}, function($ctx1) {$ctx1.fill(self,"definition",{},smalltalk.Behavior)})},
args: [],
source: "definition\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_includesSelector_",
smalltalk.method({
selector: "includesSelector:",
category: 'testing',
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._methodDictionary())._includesKey_(_st(aSymbol)._asString());
return $1;
}, function($ctx1) {$ctx1.fill(self,"includesSelector:",{aSymbol:aSymbol},smalltalk.Behavior)})},
args: ["aSymbol"],
source: "includesSelector: aSymbol\x0a\x09^ self methodDictionary includesKey: aSymbol asString",
messageSends: ["includesKey:", "asString", "methodDictionary"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_inheritsFrom_",
smalltalk.method({
selector: "inheritsFrom:",
category: 'testing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(aClass)._allSubclasses())._includes_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"inheritsFrom:",{aClass:aClass},smalltalk.Behavior)})},
args: ["aClass"],
source: "inheritsFrom: aClass\x0a\x09^aClass allSubclasses includes: self",
messageSends: ["includes:", "allSubclasses"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_instanceVariableNames",
smalltalk.method({
selector: "instanceVariableNames",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.iVarNames;
return self}, function($ctx1) {$ctx1.fill(self,"instanceVariableNames",{},smalltalk.Behavior)})},
args: [],
source: "instanceVariableNames\x0a\x09<return self.iVarNames>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_lookupSelector_",
smalltalk.method({
selector: "lookupSelector:",
category: 'accessing',
fn: function (selector){
var self=this;
var lookupClass;
return smalltalk.withContext(function($ctx1) { var $1,$2;
var $early={};
try {
lookupClass=self;
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(lookupClass).__eq(nil);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {$1=_st(lookupClass)._includesSelector_(selector);
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
"_methodAt_",
smalltalk.method({
selector: "methodAt:",
category: 'accessing',
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._methodDictionary())._at_(_st(aSymbol)._asString());
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodAt:",{aSymbol:aSymbol},smalltalk.Behavior)})},
args: ["aSymbol"],
source: "methodAt: aSymbol\x0a\x09^ self methodDictionary at: aSymbol asString",
messageSends: ["at:", "asString", "methodDictionary"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_methodDictionary",
smalltalk.method({
selector: "methodDictionary",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var dict = smalltalk.HashedCollection._new();
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
"_methods",
smalltalk.method({
selector: "methods",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._methodDictionary())._values();
return $1;
}, function($ctx1) {$ctx1.fill(self,"methods",{},smalltalk.Behavior)})},
args: [],
source: "methods\x0a\x09^ self methodDictionary values",
messageSends: ["values", "methodDictionary"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_methodsFor_",
smalltalk.method({
selector: "methodsFor:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.ClassCategoryReader || ClassCategoryReader))._new();
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
"_methodsFor_stamp_",
smalltalk.method({
selector: "methodsFor:stamp:",
category: 'accessing',
fn: function (aString,aStamp){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._methodsFor_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodsFor:stamp:",{aString:aString,aStamp:aStamp},smalltalk.Behavior)})},
args: ["aString", "aStamp"],
source: "methodsFor: aString stamp: aStamp\x0a\x09\x22Added for compatibility, right now ignores stamp.\x22\x0a\x09^self methodsFor: aString",
messageSends: ["methodsFor:"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_methodsInProtocol_",
smalltalk.method({
selector: "methodsInProtocol:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._methodDictionary())._values())._select_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(each)._protocol()).__eq(aString);
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
"_name",
smalltalk.method({
selector: "name",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.className || nil;
return self}, function($ctx1) {$ctx1.fill(self,"name",{},smalltalk.Behavior)})},
args: [],
source: "name\x0a\x09<return self.className || nil>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._basicNew())._initialize();
return $1;
}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.Behavior)})},
args: [],
source: "new\x0a\x09^self basicNew initialize",
messageSends: ["initialize", "basicNew"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_organization",
smalltalk.method({
selector: "organization",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._basicAt_("organization");
return $1;
}, function($ctx1) {$ctx1.fill(self,"organization",{},smalltalk.Behavior)})},
args: [],
source: "organization\x0a\x09^ self basicAt: 'organization'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_protocols",
smalltalk.method({
selector: "protocols",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._organization())._elements())._sorted();
return $1;
}, function($ctx1) {$ctx1.fill(self,"protocols",{},smalltalk.Behavior)})},
args: [],
source: "protocols\x0a\x09^ self organization elements sorted",
messageSends: ["sorted", "elements", "organization"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_protocolsDo_",
smalltalk.method({
selector: "protocolsDo:",
category: 'accessing',
fn: function (aBlock){
var self=this;
var methodsByCategory;
return smalltalk.withContext(function($ctx1) { methodsByCategory=_st((smalltalk.HashedCollection || HashedCollection))._new();
_st(_st(_st(self)._methodDictionary())._values())._do_((function(m){
return smalltalk.withContext(function($ctx2) {return _st(_st(methodsByCategory)._at_ifAbsentPut_(_st(m)._category(),(function(){
return smalltalk.withContext(function($ctx3) {return _st((smalltalk.Array || Array))._new();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})})))._add_(m);
}, function($ctx2) {$ctx2.fillBlock({m:m},$ctx1)})}));
_st(_st(self)._protocols())._do_((function(category){
return smalltalk.withContext(function($ctx2) {return _st(aBlock)._value_value_(category,_st(methodsByCategory)._at_(category));
}, function($ctx2) {$ctx2.fillBlock({category:category},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"protocolsDo:",{aBlock:aBlock,methodsByCategory:methodsByCategory},smalltalk.Behavior)})},
args: ["aBlock"],
source: "protocolsDo: aBlock\x0a\x09\x22Execute aBlock for each method category with\x0a\x09its collection of methods in the sort order of category name.\x22\x0a\x0a\x09| methodsByCategory |\x0a\x09methodsByCategory := HashedCollection new.\x0a\x09self methodDictionary values do: [:m |\x0a\x09\x09(methodsByCategory at: m category ifAbsentPut: [Array new])\x0a\x09\x09\x09add: m].\x0a\x09self protocols do: [:category |\x0a\x09\x09aBlock value: category value: (methodsByCategory at: category)]",
messageSends: ["new", "do:", "add:", "at:ifAbsentPut:", "category", "values", "methodDictionary", "value:value:", "at:", "protocols"],
referencedClasses: ["HashedCollection", "Array"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_prototype",
smalltalk.method({
selector: "prototype",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.fn.prototype;
return self}, function($ctx1) {$ctx1.fill(self,"prototype",{},smalltalk.Behavior)})},
args: [],
source: "prototype\x0a\x09<return self.fn.prototype>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_removeCompiledMethod_",
smalltalk.method({
selector: "removeCompiledMethod:",
category: 'compiling',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self)._basicRemoveCompiledMethod_(aMethod);
_st(_st(self)._methods())._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(each)._protocol()).__eq(_st(aMethod)._protocol());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._organization())._removeElement_(_st(aMethod)._protocol());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=_st((smalltalk.MethodRemoved || MethodRemoved))._new();
_st($1)._method_(aMethod);
$2=_st($1)._yourself();
_st(_st((smalltalk.SystemAnnouncer || SystemAnnouncer))._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"removeCompiledMethod:",{aMethod:aMethod},smalltalk.Behavior)})},
args: ["aMethod"],
source: "removeCompiledMethod: aMethod\x0a\x09self basicRemoveCompiledMethod: aMethod.\x0a\x09\x0a\x09self methods\x0a\x09\x09detect: [ :each | each protocol = aMethod protocol ]\x0a\x09\x09ifNone: [ self organization removeElement: aMethod protocol ].\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (MethodRemoved new\x0a\x09\x09\x09method: aMethod;\x0a\x09\x09\x09yourself)",
messageSends: ["basicRemoveCompiledMethod:", "detect:ifNone:", "=", "protocol", "removeElement:", "organization", "methods", "announce:", "method:", "new", "yourself", "current"],
referencedClasses: ["MethodRemoved", "SystemAnnouncer"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_selectors",
smalltalk.method({
selector: "selectors",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._methodDictionary())._keys();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectors",{},smalltalk.Behavior)})},
args: [],
source: "selectors\x0a\x09^ self methodDictionary keys",
messageSends: ["keys", "methodDictionary"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_subclasses",
smalltalk.method({
selector: "subclasses",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return smalltalk.subclasses(self);
return self}, function($ctx1) {$ctx1.fill(self,"subclasses",{},smalltalk.Behavior)})},
args: [],
source: "subclasses\x0a\x09<return smalltalk.subclasses(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_superclass",
smalltalk.method({
selector: "superclass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.superclass || nil;
return self}, function($ctx1) {$ctx1.fill(self,"superclass",{},smalltalk.Behavior)})},
args: [],
source: "superclass\x0a\x09<return self.superclass || nil>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_theMetaClass",
smalltalk.method({
selector: "theMetaClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._class();
return $1;
}, function($ctx1) {$ctx1.fill(self,"theMetaClass",{},smalltalk.Behavior)})},
args: [],
source: "theMetaClass\x0a\x09^ self class",
messageSends: ["class"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_theNonMetaClass",
smalltalk.method({
selector: "theNonMetaClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
"_withAllSubclasses",
smalltalk.method({
selector: "withAllSubclasses",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.Array || Array))._with_(self);
_st($2)._addAll_(_st(self)._allSubclasses());
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
smalltalk.Class.comment="Class is __the__ class object.\x0a\x0aInstances are the classes of the system.\x0aClass creation is done throught a `ClassBuilder`"
smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st("smalltalk.").__comma(_st(self)._name());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJavascript",{},smalltalk.Class)})},
args: [],
source: "asJavascript\x0a\x09^ 'smalltalk.', self name",
messageSends: [",", "name"],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
"_category",
smalltalk.method({
selector: "category",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._package();
if(($receiver = $2) == nil || $receiver == undefined){
$1="Unclassified";
} else {
$1=_st(_st(self)._package())._name();
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
"_definition",
smalltalk.method({
selector: "definition",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$4,$5,$1;
$1=_st((smalltalk.String || String))._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {$2=stream;
_st($2)._nextPutAll_(_st(_st(self)._superclass())._asString());
_st($2)._nextPutAll_(" subclass: #");
_st($2)._nextPutAll_(_st(self)._name());
_st($2)._nextPutAll_(_st(_st((smalltalk.String || String))._lf()).__comma(_st((smalltalk.String || String))._tab()));
$3=_st($2)._nextPutAll_("instanceVariableNames: '");
$3;
_st(_st(self)._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx3) {return _st(stream)._nextPutAll_(each);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {return _st(stream)._nextPutAll_(" ");
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$4=stream;
_st($4)._nextPutAll_(_st(_st("'").__comma(_st((smalltalk.String || String))._lf())).__comma(_st((smalltalk.String || String))._tab()));
_st($4)._nextPutAll_("package: '");
_st($4)._nextPutAll_(_st(self)._category());
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
"_isClass",
smalltalk.method({
selector: "isClass",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isClass",{},smalltalk.Class)})},
args: [],
source: "isClass\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
"_package",
smalltalk.method({
selector: "package",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.pkg;
return self}, function($ctx1) {$ctx1.fill(self,"package",{},smalltalk.Class)})},
args: [],
source: "package\x0a\x09<return self.pkg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
"_package_",
smalltalk.method({
selector: "package:",
category: 'accessing',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { self.pkg = aPackage;
return self}, function($ctx1) {$ctx1.fill(self,"package:",{aPackage:aPackage},smalltalk.Class)})},
args: ["aPackage"],
source: "package: aPackage\x0a\x09<self.pkg = aPackage>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._name();
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{},smalltalk.Class)})},
args: [],
source: "printString\x0a\x09^self name",
messageSends: ["name"],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
"_rename_",
smalltalk.method({
selector: "rename:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.ClassBuilder || ClassBuilder))._new())._renameClass_to_(self,aString);
return self}, function($ctx1) {$ctx1.fill(self,"rename:",{aString:aString},smalltalk.Class)})},
args: ["aString"],
source: "rename: aString\x0a\x09ClassBuilder new renameClass: self to: aString",
messageSends: ["renameClass:to:", "new"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.Class);

smalltalk.addMethod(
"_subclass_instanceVariableNames_",
smalltalk.method({
selector: "subclass:instanceVariableNames:",
category: 'class creation',
fn: function (aString,anotherString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._subclass_instanceVariableNames_package_(aString,anotherString,nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:",{aString:aString,anotherString:anotherString},smalltalk.Class)})},
args: ["aString", "anotherString"],
source: "subclass: aString instanceVariableNames: anotherString\x0a\x09\x22Kept for compatibility.\x22\x0a\x09^self subclass: aString instanceVariableNames: anotherString package: nil",
messageSends: ["subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
"_subclass_instanceVariableNames_category_",
smalltalk.method({
selector: "subclass:instanceVariableNames:category:",
category: 'class creation',
fn: function (aString,aString2,aString3){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._deprecatedAPI();
$1=_st(self)._subclass_instanceVariableNames_package_(aString,aString2,aString3);
return $1;
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:category:",{aString:aString,aString2:aString2,aString3:aString3},smalltalk.Class)})},
args: ["aString", "aString2", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 category: aString3\x0a\x09\x22Kept for compatibility.\x22\x0a\x09self deprecatedAPI.\x0a\x09^self subclass: aString instanceVariableNames: aString2 package: aString3",
messageSends: ["deprecatedAPI", "subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
"_subclass_instanceVariableNames_classVariableNames_poolDictionaries_category_",
smalltalk.method({
selector: "subclass:instanceVariableNames:classVariableNames:poolDictionaries:category:",
category: 'class creation',
fn: function (aString,aString2,classVars,pools,aString3){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._subclass_instanceVariableNames_package_(aString,aString2,aString3);
return $1;
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:classVariableNames:poolDictionaries:category:",{aString:aString,aString2:aString2,classVars:classVars,pools:pools,aString3:aString3},smalltalk.Class)})},
args: ["aString", "aString2", "classVars", "pools", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 classVariableNames: classVars poolDictionaries: pools category: aString3\x0a\x09\x22Just ignore class variables and pools. Added for compatibility.\x22\x0a\x09^self subclass: aString instanceVariableNames: aString2 package: aString3",
messageSends: ["subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
"_subclass_instanceVariableNames_package_",
smalltalk.method({
selector: "subclass:instanceVariableNames:package:",
category: 'class creation',
fn: function (aString,aString2,aString3){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st((smalltalk.ClassBuilder || ClassBuilder))._new())._superclass_subclass_instanceVariableNames_package_(self,_st(aString)._asString(),aString2,aString3);
return $1;
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:package:",{aString:aString,aString2:aString2,aString3:aString3},smalltalk.Class)})},
args: ["aString", "aString2", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 package: aString3\x0a\x09^ClassBuilder new\x0a\x09\x09superclass: self subclass: aString asString instanceVariableNames: aString2 package: aString3",
messageSends: ["superclass:subclass:instanceVariableNames:package:", "asString", "new"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.Class);



smalltalk.addClass('Metaclass', smalltalk.Behavior, [], 'Kernel-Classes');
smalltalk.Metaclass.comment="Metaclass is the root of the class hierarchy.\x0a\x0aMetaclass instances are metaclasses, one for each real class.\x0aMetaclass instances have a single instance, which they hold onto, which is the class that they are the metaclass of."
smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st("smalltalk.").__comma(_st(_st(self)._instanceClass())._name())).__comma(".klass");
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJavascript",{},smalltalk.Metaclass)})},
args: [],
source: "asJavascript\x0a\x09^ 'smalltalk.', self instanceClass name, '.klass'",
messageSends: [",", "name", "instanceClass"],
referencedClasses: []
}),
smalltalk.Metaclass);

smalltalk.addMethod(
"_definition",
smalltalk.method({
selector: "definition",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$1=_st((smalltalk.String || String))._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {$2=stream;
_st($2)._nextPutAll_(_st(self)._asString());
_st($2)._nextPutAll_(" class ");
$3=_st($2)._nextPutAll_("instanceVariableNames: '");
$3;
_st(_st(self)._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx3) {return _st(stream)._nextPutAll_(each);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {return _st(stream)._nextPutAll_(" ");
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return _st(stream)._nextPutAll_("'");
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"definition",{},smalltalk.Metaclass)})},
args: [],
source: "definition\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09stream\x0a\x09\x09\x09nextPutAll: self asString;\x0a\x09\x09\x09nextPutAll: ' class ';\x0a\x09\x09\x09nextPutAll: 'instanceVariableNames: '''.\x0a\x09\x09self instanceVariableNames\x0a\x09\x09\x09do: [ :each | stream nextPutAll: each ]\x0a\x09\x09\x09separatedBy: [ stream nextPutAll: ' ' ].\x0a\x09\x09stream nextPutAll: '''' ]",
messageSends: ["streamContents:", "nextPutAll:", "asString", "do:separatedBy:", "instanceVariableNames"],
referencedClasses: ["String"]
}),
smalltalk.Metaclass);

smalltalk.addMethod(
"_instanceClass",
smalltalk.method({
selector: "instanceClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.instanceClass;
return self}, function($ctx1) {$ctx1.fill(self,"instanceClass",{},smalltalk.Metaclass)})},
args: [],
source: "instanceClass\x0a\x09<return self.instanceClass>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Metaclass);

smalltalk.addMethod(
"_instanceVariableNames_",
smalltalk.method({
selector: "instanceVariableNames:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.ClassBuilder || ClassBuilder))._new())._class_instanceVariableNames_(self,aCollection);
return self}, function($ctx1) {$ctx1.fill(self,"instanceVariableNames:",{aCollection:aCollection},smalltalk.Metaclass)})},
args: ["aCollection"],
source: "instanceVariableNames: aCollection\x0a\x09ClassBuilder new\x0a\x09\x09class: self instanceVariableNames: aCollection",
messageSends: ["class:instanceVariableNames:", "new"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.Metaclass);

smalltalk.addMethod(
"_isMetaclass",
smalltalk.method({
selector: "isMetaclass",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"isMetaclass",{},smalltalk.Metaclass)})},
args: [],
source: "isMetaclass\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Metaclass);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._instanceClass())._name()).__comma(" class");
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{},smalltalk.Metaclass)})},
args: [],
source: "printString\x0a\x09^self instanceClass name, ' class'",
messageSends: [",", "name", "instanceClass"],
referencedClasses: []
}),
smalltalk.Metaclass);

smalltalk.addMethod(
"_theMetaClass",
smalltalk.method({
selector: "theMetaClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
"_theNonMetaClass",
smalltalk.method({
selector: "theNonMetaClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._instanceClass();
return $1;
}, function($ctx1) {$ctx1.fill(self,"theNonMetaClass",{},smalltalk.Metaclass)})},
args: [],
source: "theNonMetaClass\x0a\x09^ self instanceClass",
messageSends: ["instanceClass"],
referencedClasses: []
}),
smalltalk.Metaclass);



smalltalk.addClass('ClassBuilder', smalltalk.Object, [], 'Kernel-Classes');
smalltalk.ClassBuilder.comment="ClassBuilder is responsible for compiling new classes or modifying existing classes in the system.\x0a\x0aRather than using ClassBuilder directly to compile a class, use `Class >> subclass:instanceVariableNames:package:`."
smalltalk.addMethod(
"_addSubclassOf_named_instanceVariableNames_package_",
smalltalk.method({
selector: "addSubclassOf:named:instanceVariableNames:package:",
category: 'class definition',
fn: function (aClass,aString,aCollection,packageName){
var self=this;
var theClass;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
theClass=_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._at_(aString);
$1=theClass;
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
$2=_st(_st(theClass)._superclass()).__eq_eq(aClass);
if(! smalltalk.assert($2)){
$3=_st(self)._migrateClassNamed_superclass_instanceVariableNames_package_(aString,aClass,aCollection,packageName);
return $3;
};
};
$4=_st(self)._basicAddSubclassOf_named_instanceVariableNames_package_(aClass,aString,aCollection,packageName);
return $4;
}, function($ctx1) {$ctx1.fill(self,"addSubclassOf:named:instanceVariableNames:package:",{aClass:aClass,aString:aString,aCollection:aCollection,packageName:packageName,theClass:theClass},smalltalk.ClassBuilder)})},
args: ["aClass", "aString", "aCollection", "packageName"],
source: "addSubclassOf: aClass named: aString instanceVariableNames: aCollection package: packageName\x0a\x09| theClass |\x0a\x09\x0a\x09theClass := Smalltalk current at: aString.\x0a\x09\x0a\x09theClass ifNotNil: [\x0a\x09\x09theClass superclass == aClass ifFalse: [\x0a\x09\x09\x09^ self\x0a\x09\x09\x09\x09migrateClassNamed: aString\x0a\x09\x09\x09\x09superclass: aClass\x0a\x09\x09\x09\x09instanceVariableNames: aCollection\x0a\x09\x09\x09\x09package: packageName ] ].\x0a\x0a\x09^ self\x0a\x09\x09basicAddSubclassOf: aClass\x0a\x09\x09named: aString\x0a\x09\x09instanceVariableNames: aCollection\x0a\x09\x09package: packageName",
messageSends: ["at:", "current", "ifNotNil:", "ifFalse:", "migrateClassNamed:superclass:instanceVariableNames:package:", "==", "superclass", "basicAddSubclassOf:named:instanceVariableNames:package:"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_basicAddSubclassOf_named_instanceVariableNames_package_",
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
"_basicClass_instanceVariableNames_",
smalltalk.method({
selector: "basicClass:instanceVariableNames:",
category: 'private',
fn: function (aClass,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._basicClass_instanceVariables_(aClass,_st(self)._instanceVariableNamesFor_(aString));
return self}, function($ctx1) {$ctx1.fill(self,"basicClass:instanceVariableNames:",{aClass:aClass,aString:aString},smalltalk.ClassBuilder)})},
args: ["aClass", "aString"],
source: "basicClass: aClass instanceVariableNames: aString\x0a\x09self basicClass: aClass instanceVariables: (self instanceVariableNamesFor: aString)",
messageSends: ["basicClass:instanceVariables:", "instanceVariableNamesFor:"],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_basicClass_instanceVariables_",
smalltalk.method({
selector: "basicClass:instanceVariables:",
category: 'private',
fn: function (aClass,aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aClass)._isMetaclass();
if(! smalltalk.assert($1)){
_st(self)._error_(_st(_st(aClass)._name()).__comma(" is not a metaclass"));
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
"_basicRemoveClass_",
smalltalk.method({
selector: "basicRemoveClass:",
category: 'private',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.removeClass(aClass);
return self}, function($ctx1) {$ctx1.fill(self,"basicRemoveClass:",{aClass:aClass},smalltalk.ClassBuilder)})},
args: ["aClass"],
source: "basicRemoveClass: aClass\x0a\x09<smalltalk.removeClass(aClass)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_basicRenameClass_to_",
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
"_basicSwapClassNames_with_",
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
"_class_instanceVariableNames_",
smalltalk.method({
selector: "class:instanceVariableNames:",
category: 'class definition',
fn: function (aClass,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self)._basicClass_instanceVariableNames_(aClass,aString);
_st(self)._setupClass_(aClass);
$1=_st((smalltalk.ClassDefinitionChanged || ClassDefinitionChanged))._new();
_st($1)._theClass_(aClass);
$2=_st($1)._yourself();
_st(_st((smalltalk.SystemAnnouncer || SystemAnnouncer))._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"class:instanceVariableNames:",{aClass:aClass,aString:aString},smalltalk.ClassBuilder)})},
args: ["aClass", "aString"],
source: "class: aClass instanceVariableNames: aString\x0a\x09self basicClass: aClass instanceVariableNames: aString.\x0a\x09self setupClass: aClass.\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassDefinitionChanged new\x0a\x09\x09\x09theClass: aClass;\x0a\x09\x09\x09yourself)",
messageSends: ["basicClass:instanceVariableNames:", "setupClass:", "announce:", "theClass:", "new", "yourself", "current"],
referencedClasses: ["ClassDefinitionChanged", "SystemAnnouncer"]
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_copyClass_named_",
smalltalk.method({
selector: "copyClass:named:",
category: 'copying',
fn: function (aClass,aString){
var self=this;
var newClass;
return smalltalk.withContext(function($ctx1) { var $1;
newClass=_st(self)._addSubclassOf_named_instanceVariableNames_package_(_st(aClass)._superclass(),aString,_st(aClass)._instanceVariableNames(),_st(_st(aClass)._package())._name());
_st(self)._copyClass_to_(aClass,newClass);
$1=newClass;
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyClass:named:",{aClass:aClass,aString:aString,newClass:newClass},smalltalk.ClassBuilder)})},
args: ["aClass", "aString"],
source: "copyClass: aClass named: aString\x0a\x09| newClass |\x0a\x0a\x09newClass := self\x0a\x09\x09addSubclassOf: aClass superclass\x0a\x09\x09named: aString\x0a\x09\x09instanceVariableNames: aClass instanceVariableNames\x0a\x09\x09package: aClass package name.\x0a\x0a\x09self copyClass: aClass to: newClass.\x0a\x09\x0a\x09^newClass",
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "superclass", "instanceVariableNames", "name", "package", "copyClass:to:"],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_copyClass_to_",
smalltalk.method({
selector: "copyClass:to:",
category: 'copying',
fn: function (aClass,anotherClass){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(anotherClass)._comment_(_st(aClass)._comment());
_st(_st(_st(aClass)._methodDictionary())._values())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st((smalltalk.Compiler || Compiler))._new())._install_forClass_category_(_st(each)._source(),anotherClass,_st(each)._category());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(self)._basicClass_instanceVariables_(_st(anotherClass)._class(),_st(_st(aClass)._class())._instanceVariableNames());
_st(_st(_st(_st(aClass)._class())._methodDictionary())._values())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st((smalltalk.Compiler || Compiler))._new())._install_forClass_category_(_st(each)._source(),_st(anotherClass)._class(),_st(each)._category());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(self)._setupClass_(anotherClass);
return self}, function($ctx1) {$ctx1.fill(self,"copyClass:to:",{aClass:aClass,anotherClass:anotherClass},smalltalk.ClassBuilder)})},
args: ["aClass", "anotherClass"],
source: "copyClass: aClass to: anotherClass\x0a\x0a\x09anotherClass comment: aClass comment.\x0a\x0a\x09aClass methodDictionary values do: [ :each |\x0a\x09\x09Compiler new install: each source forClass: anotherClass category: each category ].\x0a\x0a\x09self basicClass: anotherClass class instanceVariables: aClass class instanceVariableNames.\x0a\x0a\x09aClass class methodDictionary values do: [ :each |\x0a\x09\x09Compiler new install: each source forClass: anotherClass class category: each category ].\x0a\x0a\x09self setupClass: anotherClass",
messageSends: ["comment:", "comment", "do:", "install:forClass:category:", "source", "category", "new", "values", "methodDictionary", "basicClass:instanceVariables:", "class", "instanceVariableNames", "setupClass:"],
referencedClasses: ["Compiler"]
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_installMethod_forClass_category_",
smalltalk.method({
selector: "installMethod:forClass:category:",
category: 'method definition',
fn: function (aCompiledMethod,aBehavior,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(aCompiledMethod)._category_(aString);
_st(aBehavior)._addCompiledMethod_(aCompiledMethod);
_st(self)._setupClass_(aBehavior);
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
"_instanceVariableNamesFor_",
smalltalk.method({
selector: "instanceVariableNamesFor:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(aString)._tokenize_(" "))._reject_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._isEmpty();
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
"_migrateClass_superclass_",
smalltalk.method({
selector: "migrateClass:superclass:",
category: 'class migration',
fn: function (aClass,anotherClass){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(console)._log_(_st(aClass)._name());
_st(self)._migrateClassNamed_superclass_instanceVariableNames_package_(_st(aClass)._name(),anotherClass,_st(aClass)._instanceVariableNames(),_st(_st(aClass)._package())._name());
return self}, function($ctx1) {$ctx1.fill(self,"migrateClass:superclass:",{aClass:aClass,anotherClass:anotherClass},smalltalk.ClassBuilder)})},
args: ["aClass", "anotherClass"],
source: "migrateClass: aClass superclass: anotherClass\x0a\x09console log: aClass name.\x0a\x09self\x0a\x09\x09migrateClassNamed: aClass name\x0a\x09\x09superclass: anotherClass\x0a\x09\x09instanceVariableNames: aClass instanceVariableNames\x0a\x09\x09package: aClass package name",
messageSends: ["log:", "name", "migrateClassNamed:superclass:instanceVariableNames:package:", "instanceVariableNames", "package"],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_migrateClassNamed_superclass_instanceVariableNames_package_",
smalltalk.method({
selector: "migrateClassNamed:superclass:instanceVariableNames:package:",
category: 'class migration',
fn: function (aString,aClass,aCollection,packageName){
var self=this;
var oldClass,newClass,tmp;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5;
tmp=_st("new*").__comma(aString);
oldClass=_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._at_(aString);
newClass=_st(self)._addSubclassOf_named_instanceVariableNames_package_(aClass,tmp,aCollection,packageName);
_st(self)._basicSwapClassNames_with_(oldClass,newClass);
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._copyClass_to_(oldClass,newClass);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_((smalltalk.Error || Error),(function(exception){
return smalltalk.withContext(function($ctx2) {$1=self;
_st($1)._basicSwapClassNames_with_(oldClass,newClass);
$2=_st($1)._basicRemoveClass_(newClass);
$2;
return _st(exception)._signal();
}, function($ctx2) {$ctx2.fillBlock({exception:exception},$ctx1)})}));
$3=self;
_st($3)._rawRenameClass_to_(oldClass,tmp);
$4=_st($3)._rawRenameClass_to_(newClass,aString);
_st(_st(oldClass)._subclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self)._migrateClass_superclass_(each,newClass);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(self)._basicRemoveClass_(oldClass);
$5=newClass;
return $5;
}, function($ctx1) {$ctx1.fill(self,"migrateClassNamed:superclass:instanceVariableNames:package:",{aString:aString,aClass:aClass,aCollection:aCollection,packageName:packageName,oldClass:oldClass,newClass:newClass,tmp:tmp},smalltalk.ClassBuilder)})},
args: ["aString", "aClass", "aCollection", "packageName"],
source: "migrateClassNamed: aString superclass: aClass instanceVariableNames: aCollection package: packageName\x0a\x09| oldClass newClass tmp |\x0a\x09\x0a\x09tmp := 'new*', aString.\x0a\x09oldClass := Smalltalk current at: aString.\x0a\x09\x0a\x09newClass := self\x0a\x09\x09addSubclassOf: aClass\x0a\x09\x09named: tmp\x0a\x09\x09instanceVariableNames: aCollection\x0a\x09\x09package: packageName.\x0a\x0a\x09self basicSwapClassNames: oldClass with: newClass.\x0a\x0a\x09[ self copyClass: oldClass to: newClass ]\x0a\x09\x09on: Error\x0a\x09\x09do: [ :exception |\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09basicSwapClassNames: oldClass with: newClass;\x0a\x09\x09\x09\x09basicRemoveClass: newClass.\x0a\x09\x09\x09exception signal ].\x0a\x0a\x09self\x0a\x09\x09rawRenameClass: oldClass to: tmp;\x0a\x09\x09rawRenameClass: newClass to: aString.\x0a\x0a\x09oldClass subclasses do: [ :each |\x0a\x09\x09self migrateClass: each superclass: newClass ].\x0a\x0a\x09self basicRemoveClass: oldClass.\x0a\x09^newClass",
messageSends: [",", "at:", "current", "addSubclassOf:named:instanceVariableNames:package:", "basicSwapClassNames:with:", "on:do:", "basicRemoveClass:", "signal", "copyClass:to:", "rawRenameClass:to:", "do:", "migrateClass:superclass:", "subclasses"],
referencedClasses: ["Smalltalk", "Error"]
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_rawRenameClass_to_",
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
"_renameClass_to_",
smalltalk.method({
selector: "renameClass:to:",
category: 'class migration',
fn: function (aClass,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self)._basicRenameClass_to_(aClass,aString);
$1=_st((smalltalk.ClassRenamed || ClassRenamed))._new();
_st($1)._theClass_(aClass);
$2=_st($1)._yourself();
_st(_st((smalltalk.SystemAnnouncer || SystemAnnouncer))._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"renameClass:to:",{aClass:aClass,aString:aString},smalltalk.ClassBuilder)})},
args: ["aClass", "aString"],
source: "renameClass: aClass to: aString\x0a\x09self basicRenameClass: aClass to: aString.\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassRenamed new\x0a\x09\x09\x09theClass: aClass;\x0a\x09\x09\x09yourself)",
messageSends: ["basicRenameClass:to:", "announce:", "theClass:", "new", "yourself", "current"],
referencedClasses: ["ClassRenamed", "SystemAnnouncer"]
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_setupClass_",
smalltalk.method({
selector: "setupClass:",
category: 'public',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.init(aClass);;
return self}, function($ctx1) {$ctx1.fill(self,"setupClass:",{aClass:aClass},smalltalk.ClassBuilder)})},
args: ["aClass"],
source: "setupClass: aClass\x0a\x09<smalltalk.init(aClass);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_superclass_subclass_",
smalltalk.method({
selector: "superclass:subclass:",
category: 'class definition',
fn: function (aClass,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._superclass_subclass_instanceVariableNames_package_(aClass,aString,"",nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"superclass:subclass:",{aClass:aClass,aString:aString},smalltalk.ClassBuilder)})},
args: ["aClass", "aString"],
source: "superclass: aClass subclass: aString\x0a\x09^self superclass: aClass subclass: aString instanceVariableNames: '' package: nil",
messageSends: ["superclass:subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_superclass_subclass_instanceVariableNames_package_",
smalltalk.method({
selector: "superclass:subclass:instanceVariableNames:package:",
category: 'class definition',
fn: function (aClass,aString,aString2,aString3){
var self=this;
var newClass;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$6,$5,$7,$8,$9;
$1=self;
$2=aClass;
$3=aString;
$4=_st(self)._instanceVariableNamesFor_(aString2);
$6=aString3;
if(($receiver = $6) == nil || $receiver == undefined){
$5="unclassified";
} else {
$5=$6;
};
newClass=_st($1)._addSubclassOf_named_instanceVariableNames_package_($2,$3,$4,$5);
_st(self)._setupClass_(newClass);
$7=_st((smalltalk.ClassAdded || ClassAdded))._new();
_st($7)._theClass_(newClass);
$8=_st($7)._yourself();
_st(_st((smalltalk.SystemAnnouncer || SystemAnnouncer))._current())._announce_($8);
$9=newClass;
return $9;
}, function($ctx1) {$ctx1.fill(self,"superclass:subclass:instanceVariableNames:package:",{aClass:aClass,aString:aString,aString2:aString2,aString3:aString3,newClass:newClass},smalltalk.ClassBuilder)})},
args: ["aClass", "aString", "aString2", "aString3"],
source: "superclass: aClass subclass: aString instanceVariableNames: aString2 package: aString3\x0a\x09| newClass |\x0a\x09\x0a\x09newClass := self addSubclassOf: aClass\x0a\x09\x09named: aString instanceVariableNames: (self instanceVariableNamesFor: aString2)\x0a\x09\x09package: (aString3 ifNil: ['unclassified']).\x0a\x09self setupClass: newClass.\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassAdded new\x0a\x09\x09\x09theClass: newClass;\x0a\x09\x09\x09yourself).\x0a\x09\x0a\x09^newClass",
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "instanceVariableNamesFor:", "ifNil:", "setupClass:", "announce:", "theClass:", "new", "yourself", "current"],
referencedClasses: ["ClassAdded", "SystemAnnouncer"]
}),
smalltalk.ClassBuilder);



smalltalk.addClass('ClassCategoryReader', smalltalk.Object, ['class', 'category'], 'Kernel-Classes');
smalltalk.ClassCategoryReader.comment="ClassCategoryReader represents a mechanism for retrieving class descriptions stored on a file."
smalltalk.addMethod(
"_class_category_",
smalltalk.method({
selector: "class:category:",
category: 'accessing',
fn: function (aClass,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@class"]=aClass;
self["@category"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"class:category:",{aClass:aClass,aString:aString},smalltalk.ClassCategoryReader)})},
args: ["aClass", "aString"],
source: "class: aClass category: aString\x0a\x09class := aClass.\x0a\x09category := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
"_compileMethod_",
smalltalk.method({
selector: "compileMethod:",
category: 'private',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.Compiler || Compiler))._new())._install_forClass_category_(aString,self["@class"],self["@category"]);
return self}, function($ctx1) {$ctx1.fill(self,"compileMethod:",{aString:aString},smalltalk.ClassCategoryReader)})},
args: ["aString"],
source: "compileMethod: aString\x0a\x09Compiler new install: aString forClass: class category: category",
messageSends: ["install:forClass:category:", "new"],
referencedClasses: ["Compiler"]
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ClassCategoryReader)})},
args: [],
source: "initialize\x0a\x09super initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
"_scanFrom_",
smalltalk.method({
selector: "scanFrom:",
category: 'fileIn',
fn: function (aChunkParser){
var self=this;
var chunk;
return smalltalk.withContext(function($ctx1) { _st((function(){
return smalltalk.withContext(function($ctx2) {chunk=_st(aChunkParser)._nextChunk();
chunk;
return _st(chunk)._isEmpty();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._compileMethod_(chunk);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st((smalltalk.ClassBuilder || ClassBuilder))._new())._setupClass_(self["@class"]);
return self}, function($ctx1) {$ctx1.fill(self,"scanFrom:",{aChunkParser:aChunkParser,chunk:chunk},smalltalk.ClassCategoryReader)})},
args: ["aChunkParser"],
source: "scanFrom: aChunkParser\x0a\x09| chunk |\x0a\x09[chunk := aChunkParser nextChunk.\x0a\x09chunk isEmpty] whileFalse: [\x0a\x09\x09self compileMethod: chunk].\x0a\x09ClassBuilder new setupClass: class",
messageSends: ["whileFalse:", "compileMethod:", "nextChunk", "isEmpty", "setupClass:", "new"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.ClassCategoryReader);



smalltalk.addClass('ClassCommentReader', smalltalk.Object, ['class'], 'Kernel-Classes');
smalltalk.ClassCommentReader.comment="ClassCommentReader represents a mechanism for retrieving class comments stored on a file.\x0aSee `ClassCategoryReader` too."
smalltalk.addMethod(
"_class_",
smalltalk.method({
selector: "class:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@class"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"class:",{aClass:aClass},smalltalk.ClassCommentReader)})},
args: ["aClass"],
source: "class: aClass\x0a\x09class := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ClassCommentReader)})},
args: [],
source: "initialize\x0a\x09super initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
"_scanFrom_",
smalltalk.method({
selector: "scanFrom:",
category: 'fileIn',
fn: function (aChunkParser){
var self=this;
var chunk;
return smalltalk.withContext(function($ctx1) { var $1;
chunk=_st(aChunkParser)._nextChunk();
$1=_st(chunk)._isEmpty();
if(! smalltalk.assert($1)){
_st(self)._setComment_(chunk);
};
return self}, function($ctx1) {$ctx1.fill(self,"scanFrom:",{aChunkParser:aChunkParser,chunk:chunk},smalltalk.ClassCommentReader)})},
args: ["aChunkParser"],
source: "scanFrom: aChunkParser\x0a\x09| chunk |\x0a\x09chunk := aChunkParser nextChunk.\x0a\x09chunk isEmpty ifFalse: [\x0a\x09\x09self setComment: chunk].",
messageSends: ["nextChunk", "ifFalse:", "setComment:", "isEmpty"],
referencedClasses: []
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
"_setComment_",
smalltalk.method({
selector: "setComment:",
category: 'private',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@class"])._comment_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"setComment:",{aString:aString},smalltalk.ClassCommentReader)})},
args: ["aString"],
source: "setComment: aString\x0a\x09class comment: aString",
messageSends: ["comment:"],
referencedClasses: []
}),
smalltalk.ClassCommentReader);



smalltalk.addClass('ClassSorterNode', smalltalk.Object, ['theClass', 'level', 'nodes'], 'Kernel-Classes');
smalltalk.addMethod(
"_getNodesFrom_",
smalltalk.method({
selector: "getNodesFrom:",
category: 'accessing',
fn: function (aCollection){
var self=this;
var children,others;
return smalltalk.withContext(function($ctx1) { var $1;
children=[];
others=[];
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {$1=_st(_st(each)._superclass()).__eq(_st(self)._theClass());
if(smalltalk.assert($1)){
return _st(children)._add_(each);
} else {
return _st(others)._add_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
self["@nodes"]=_st(children)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st((smalltalk.ClassSorterNode || ClassSorterNode))._on_classes_level_(each,others,_st(_st(self)._level()).__plus((1)));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"getNodesFrom:",{aCollection:aCollection,children:children,others:others},smalltalk.ClassSorterNode)})},
args: ["aCollection"],
source: "getNodesFrom: aCollection\x0a\x09| children others |\x0a\x09children := #().\x0a\x09others := #().\x0a\x09aCollection do: [:each |\x0a\x09\x09(each superclass = self theClass)\x0a\x09\x09\x09ifTrue: [children add: each]\x0a\x09\x09\x09ifFalse: [others add: each]].\x0a\x09nodes:= children collect: [:each |\x0a\x09\x09ClassSorterNode on: each classes: others level: self level + 1]",
messageSends: ["do:", "ifTrue:ifFalse:", "add:", "=", "theClass", "superclass", "collect:", "on:classes:level:", "+", "level"],
referencedClasses: ["ClassSorterNode"]
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
"_level",
smalltalk.method({
selector: "level",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
"_level_",
smalltalk.method({
selector: "level:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@level"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"level:",{anInteger:anInteger},smalltalk.ClassSorterNode)})},
args: ["anInteger"],
source: "level: anInteger\x0a\x09level := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
"_theClass",
smalltalk.method({
selector: "theClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
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
"_theClass_",
smalltalk.method({
selector: "theClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass},smalltalk.ClassSorterNode)})},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
"_traverseClassesWith_",
smalltalk.method({
selector: "traverseClassesWith:",
category: 'visiting',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aCollection)._add_(_st(self)._theClass());
_st(_st(_st(self)._nodes())._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(a)._theClass())._name()).__lt_eq(_st(_st(b)._theClass())._name());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})})))._do_((function(aNode){
return smalltalk.withContext(function($ctx2) {return _st(aNode)._traverseClassesWith_(aCollection);
}, function($ctx2) {$ctx2.fillBlock({aNode:aNode},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"traverseClassesWith:",{aCollection:aCollection},smalltalk.ClassSorterNode)})},
args: ["aCollection"],
source: "traverseClassesWith: aCollection\x0a\x09\x22sort classes alphabetically Issue #143\x22\x0a\x0a\x09aCollection add: self theClass.\x0a\x09(self nodes sorted: [:a :b | a theClass name <= b theClass name ]) do: [:aNode |\x0a\x09\x09aNode traverseClassesWith: aCollection ].",
messageSends: ["add:", "theClass", "do:", "traverseClassesWith:", "sorted:", "<=", "name", "nodes"],
referencedClasses: []
}),
smalltalk.ClassSorterNode);


smalltalk.addMethod(
"_on_classes_level_",
smalltalk.method({
selector: "on:classes:level:",
category: 'instance creation',
fn: function (aClass,aCollection,anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
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


