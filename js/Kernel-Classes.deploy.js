smalltalk.addPackage('Kernel-Classes');
smalltalk.addClass('Behavior', smalltalk.Object, [], 'Kernel-Classes');
smalltalk.addMethod(
smalltalk.method({
selector: "addCompiledMethod:",
fn: function (aMethod){
var self=this;
var oldMethod,announcement;
function $MethodAdded(){return smalltalk.MethodAdded||(typeof MethodAdded=="undefined"?nil:MethodAdded)}
function $MethodModified(){return smalltalk.MethodModified||(typeof MethodModified=="undefined"?nil:MethodModified)}
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
oldMethod=_st(_st(self)._methodDictionary())._at_ifAbsent_(_st(aMethod)._selector(),(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=_st(_st(self)._protocols())._includes_(_st(aMethod)._protocol());
if(! smalltalk.assert($1)){
_st(_st(self)._organization())._addElement_(_st(aMethod)._protocol());
};
_st(self)._basicAddCompiledMethod_(aMethod);
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
messageSends: ["at:ifAbsent:", "selector", "methodDictionary", "ifFalse:", "addElement:", "protocol", "organization", "includes:", "protocols", "basicAddCompiledMethod:", "ifNil:ifNotNil:", "method:", "new", "yourself", "oldMethod:", "announce:", "current"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "allInstanceVariableNames",
fn: function (){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
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
messageSends: ["copy", "instanceVariableNames", "ifNotNil:", "addAll:", "allInstanceVariableNames", "superclass"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "allSelectors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$1=_st(_st(self)._allSuperclasses())._inject_into_(_st(self)._selectors(),(function(soFar,aBehavior){
return smalltalk.withContext(function($ctx2) {
$2=soFar;
_st($2)._addAll_(_st(aBehavior)._selectors());
$3=_st($2)._yourself();
return $3;
}, function($ctx2) {$ctx2.fillBlock({soFar:soFar,aBehavior:aBehavior},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"allSelectors",{},smalltalk.Behavior)})},
messageSends: ["inject:into:", "selectors", "addAll:", "yourself", "allSuperclasses"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "allSubclasses",
fn: function (){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
var $1;
result=_st(self)._subclasses();
_st(_st(self)._subclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(result)._addAll_(_st(each)._allSubclasses());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=result;
return $1;
}, function($ctx1) {$ctx1.fill(self,"allSubclasses",{result:result},smalltalk.Behavior)})},
messageSends: ["subclasses", "do:", "addAll:", "allSubclasses"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "allSuperclasses",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3;
$1=_st(self)._superclass();
if(($receiver = $1) == nil || $receiver == undefined){
$2=[];
return $2;
} else {
$1;
};
$4=_st($OrderedCollection())._with_(_st(self)._superclass());
_st($4)._addAll_(_st(_st(self)._superclass())._allSuperclasses());
$5=_st($4)._yourself();
$3=$5;
return $3;
}, function($ctx1) {$ctx1.fill(self,"allSuperclasses",{},smalltalk.Behavior)})},
messageSends: ["ifNil:", "superclass", "addAll:", "allSuperclasses", "with:", "yourself"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "basicAddCompiledMethod:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.addMethod(aMethod, self);
return self}, function($ctx1) {$ctx1.fill(self,"basicAddCompiledMethod:",{aMethod:aMethod},smalltalk.Behavior)})},
messageSends: []}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "basicNew",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new self.fn();
return self}, function($ctx1) {$ctx1.fill(self,"basicNew",{},smalltalk.Behavior)})},
messageSends: []}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "basicRemoveCompiledMethod:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		smalltalk.removeMethod(aMethod)
		smalltalk.init(self);
	;
return self}, function($ctx1) {$ctx1.fill(self,"basicRemoveCompiledMethod:",{aMethod:aMethod},smalltalk.Behavior)})},
messageSends: []}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "canUnderstand:",
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(self)._methodDictionary())._keys())._includes_(_st(aSelector)._asString()))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(self)._superclass())._notNil())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(self)._superclass())._canUnderstand_(aSelector);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"canUnderstand:",{aSelector:aSelector},smalltalk.Behavior)})},
messageSends: ["or:", "and:", "canUnderstand:", "superclass", "notNil", "includes:", "asString", "keys", "methodDictionary"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "comment",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self)._basicAt_("comment");
if(($receiver = $2) == nil || $receiver == undefined){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"comment",{},smalltalk.Behavior)})},
messageSends: ["ifNil:", "basicAt:"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "comment:",
fn: function (aString){
var self=this;
function $ClassCommentChanged(){return smalltalk.ClassCommentChanged||(typeof ClassCommentChanged=="undefined"?nil:ClassCommentChanged)}
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self)._basicAt_put_("comment",aString);
$1=_st($ClassCommentChanged())._new();
_st($1)._theClass_(self);
$2=_st($1)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"comment:",{aString:aString},smalltalk.Behavior)})},
messageSends: ["basicAt:put:", "announce:", "theClass:", "new", "yourself", "current"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "commentStamp",
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
messageSends: ["class:", "new", "yourself"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "commentStamp:prior:",
fn: function (aStamp,prior){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._commentStamp();
return $1;
}, function($ctx1) {$ctx1.fill(self,"commentStamp:prior:",{aStamp:aStamp,prior:prior},smalltalk.Behavior)})},
messageSends: ["commentStamp"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "compile:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._compile_category_(aString,"");
return self}, function($ctx1) {$ctx1.fill(self,"compile:",{aString:aString},smalltalk.Behavior)})},
messageSends: ["compile:category:"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "compile:category:",
fn: function (aString,anotherString){
var self=this;
function $Compiler(){return smalltalk.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($Compiler())._new())._install_forClass_category_(aString,self,anotherString);
return self}, function($ctx1) {$ctx1.fill(self,"compile:category:",{aString:aString,anotherString:anotherString},smalltalk.Behavior)})},
messageSends: ["install:forClass:category:", "new"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "definition",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "";
}, function($ctx1) {$ctx1.fill(self,"definition",{},smalltalk.Behavior)})},
messageSends: []}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "includesSelector:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._methodDictionary())._includesKey_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"includesSelector:",{aString:aString},smalltalk.Behavior)})},
messageSends: ["includesKey:", "methodDictionary"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "inheritsFrom:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aClass)._allSubclasses())._includes_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"inheritsFrom:",{aClass:aClass},smalltalk.Behavior)})},
messageSends: ["includes:", "allSubclasses"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "instanceVariableNames",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.iVarNames;
return self}, function($ctx1) {$ctx1.fill(self,"instanceVariableNames",{},smalltalk.Behavior)})},
messageSends: []}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "lookupSelector:",
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
messageSends: ["whileFalse:", "ifTrue:", "methodAt:", "includesSelector:", "superclass", "="]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "methodAt:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._methodDictionary())._at_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodAt:",{aString:aString},smalltalk.Behavior)})},
messageSends: ["at:", "methodDictionary"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "methodDictionary",
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
messageSends: []}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "methods",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._methodDictionary())._values();
return $1;
}, function($ctx1) {$ctx1.fill(self,"methods",{},smalltalk.Behavior)})},
messageSends: ["values", "methodDictionary"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "methodsFor:",
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
messageSends: ["class:category:", "new", "yourself"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "methodsFor:stamp:",
fn: function (aString,aStamp){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._methodsFor_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodsFor:stamp:",{aString:aString,aStamp:aStamp},smalltalk.Behavior)})},
messageSends: ["methodsFor:"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "methodsInProtocol:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._methodDictionary())._values())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._protocol()).__eq(aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodsInProtocol:",{aString:aString},smalltalk.Behavior)})},
messageSends: ["select:", "=", "protocol", "values", "methodDictionary"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "name",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.className || nil;
return self}, function($ctx1) {$ctx1.fill(self,"name",{},smalltalk.Behavior)})},
messageSends: []}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._basicNew())._initialize();
return $1;
}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.Behavior)})},
messageSends: ["initialize", "basicNew"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "organization",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._basicAt_("organization");
return $1;
}, function($ctx1) {$ctx1.fill(self,"organization",{},smalltalk.Behavior)})},
messageSends: ["basicAt:"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "protocols",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._organization())._elements())._sorted();
return $1;
}, function($ctx1) {$ctx1.fill(self,"protocols",{},smalltalk.Behavior)})},
messageSends: ["sorted", "elements", "organization"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "protocolsDo:",
fn: function (aBlock){
var self=this;
var methodsByCategory;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
methodsByCategory=_st($HashedCollection())._new();
_st(_st(_st(self)._methodDictionary())._values())._do_((function(m){
return smalltalk.withContext(function($ctx2) {
return _st(_st(methodsByCategory)._at_ifAbsentPut_(_st(m)._category(),(function(){
return smalltalk.withContext(function($ctx3) {
return _st($Array())._new();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})})))._add_(m);
}, function($ctx2) {$ctx2.fillBlock({m:m},$ctx1)})}));
_st(_st(self)._protocols())._do_((function(category){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_value_(category,_st(methodsByCategory)._at_(category));
}, function($ctx2) {$ctx2.fillBlock({category:category},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"protocolsDo:",{aBlock:aBlock,methodsByCategory:methodsByCategory},smalltalk.Behavior)})},
messageSends: ["new", "do:", "add:", "at:ifAbsentPut:", "category", "values", "methodDictionary", "value:value:", "at:", "protocols"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "prototype",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.fn.prototype;
return self}, function($ctx1) {$ctx1.fill(self,"prototype",{},smalltalk.Behavior)})},
messageSends: []}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "removeCompiledMethod:",
fn: function (aMethod){
var self=this;
function $MethodRemoved(){return smalltalk.MethodRemoved||(typeof MethodRemoved=="undefined"?nil:MethodRemoved)}
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self)._basicRemoveCompiledMethod_(aMethod);
_st(_st(self)._methods())._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._protocol()).__eq(_st(aMethod)._protocol());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._organization())._removeElement_(_st(aMethod)._protocol());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=_st($MethodRemoved())._new();
_st($1)._method_(aMethod);
$2=_st($1)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"removeCompiledMethod:",{aMethod:aMethod},smalltalk.Behavior)})},
messageSends: ["basicRemoveCompiledMethod:", "detect:ifNone:", "=", "protocol", "removeElement:", "organization", "methods", "announce:", "method:", "new", "yourself", "current"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "selectors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._methodDictionary())._keys();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectors",{},smalltalk.Behavior)})},
messageSends: ["keys", "methodDictionary"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "subclasses",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.subclasses(self);
return self}, function($ctx1) {$ctx1.fill(self,"subclasses",{},smalltalk.Behavior)})},
messageSends: []}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "superclass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.superclass || nil;
return self}, function($ctx1) {$ctx1.fill(self,"superclass",{},smalltalk.Behavior)})},
messageSends: []}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "theMetaClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._class();
return $1;
}, function($ctx1) {$ctx1.fill(self,"theMetaClass",{},smalltalk.Behavior)})},
messageSends: ["class"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "theNonMetaClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"theNonMetaClass",{},smalltalk.Behavior)})},
messageSends: []}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "withAllSubclasses",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Array())._with_(self);
_st($2)._addAll_(_st(self)._allSubclasses());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withAllSubclasses",{},smalltalk.Behavior)})},
messageSends: ["addAll:", "allSubclasses", "with:", "yourself"]}),
smalltalk.Behavior);



smalltalk.addClass('Class', smalltalk.Behavior, [], 'Kernel-Classes');
smalltalk.addMethod(
smalltalk.method({
selector: "asJavascript",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("smalltalk.").__comma(_st(self)._name());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJavascript",{},smalltalk.Class)})},
messageSends: [",", "name"]}),
smalltalk.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "category",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self)._package();
if(($receiver = $2) == nil || $receiver == undefined){
$1="Unclassified";
} else {
$1=_st(_st(self)._package())._name();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"category",{},smalltalk.Class)})},
messageSends: ["ifNil:ifNotNil:", "name", "package"]}),
smalltalk.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "definition",
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$1;
$1=_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
$2=stream;
_st($2)._nextPutAll_(_st(_st(self)._superclass())._asString());
_st($2)._nextPutAll_(" subclass: #");
_st($2)._nextPutAll_(_st(self)._name());
_st($2)._nextPutAll_(_st(_st($String())._lf()).__comma(_st($String())._tab()));
$3=_st($2)._nextPutAll_("instanceVariableNames: '");
$3;
_st(_st(self)._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(stream)._nextPutAll_(each);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(stream)._nextPutAll_(" ");
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$4=stream;
_st($4)._nextPutAll_(_st(_st("'").__comma(_st($String())._lf())).__comma(_st($String())._tab()));
_st($4)._nextPutAll_("package: '");
_st($4)._nextPutAll_(_st(self)._category());
$5=_st($4)._nextPutAll_("'");
return $5;
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"definition",{},smalltalk.Class)})},
messageSends: ["streamContents:", "nextPutAll:", "asString", "superclass", "name", ",", "tab", "lf", "do:separatedBy:", "instanceVariableNames", "category"]}),
smalltalk.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "isClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isClass",{},smalltalk.Class)})},
messageSends: []}),
smalltalk.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "package",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.pkg;
return self}, function($ctx1) {$ctx1.fill(self,"package",{},smalltalk.Class)})},
messageSends: []}),
smalltalk.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "package:",
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.pkg = aPackage;
return self}, function($ctx1) {$ctx1.fill(self,"package:",{aPackage:aPackage},smalltalk.Class)})},
messageSends: []}),
smalltalk.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_(_st(self)._name());
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Class)})},
messageSends: ["nextPutAll:", "name"]}),
smalltalk.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "rename:",
fn: function (aString){
var self=this;
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($ClassBuilder())._new())._renameClass_to_(self,aString);
return self}, function($ctx1) {$ctx1.fill(self,"rename:",{aString:aString},smalltalk.Class)})},
messageSends: ["renameClass:to:", "new"]}),
smalltalk.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "subclass:instanceVariableNames:",
fn: function (aString,anotherString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._subclass_instanceVariableNames_package_(aString,anotherString,nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:",{aString:aString,anotherString:anotherString},smalltalk.Class)})},
messageSends: ["subclass:instanceVariableNames:package:"]}),
smalltalk.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "subclass:instanceVariableNames:category:",
fn: function (aString,aString2,aString3){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self)._deprecatedAPI();
$1=_st(self)._subclass_instanceVariableNames_package_(aString,aString2,aString3);
return $1;
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:category:",{aString:aString,aString2:aString2,aString3:aString3},smalltalk.Class)})},
messageSends: ["deprecatedAPI", "subclass:instanceVariableNames:package:"]}),
smalltalk.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "subclass:instanceVariableNames:classVariableNames:poolDictionaries:category:",
fn: function (aString,aString2,classVars,pools,aString3){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._subclass_instanceVariableNames_package_(aString,aString2,aString3);
return $1;
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:classVariableNames:poolDictionaries:category:",{aString:aString,aString2:aString2,classVars:classVars,pools:pools,aString3:aString3},smalltalk.Class)})},
messageSends: ["subclass:instanceVariableNames:package:"]}),
smalltalk.Class);

smalltalk.addMethod(
smalltalk.method({
selector: "subclass:instanceVariableNames:package:",
fn: function (aString,aString2,aString3){
var self=this;
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($ClassBuilder())._new())._superclass_subclass_instanceVariableNames_package_(self,_st(aString)._asString(),aString2,aString3);
return $1;
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:package:",{aString:aString,aString2:aString2,aString3:aString3},smalltalk.Class)})},
messageSends: ["superclass:subclass:instanceVariableNames:package:", "asString", "new"]}),
smalltalk.Class);



smalltalk.addClass('Metaclass', smalltalk.Behavior, [], 'Kernel-Classes');
smalltalk.addMethod(
smalltalk.method({
selector: "asJavascript",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st("smalltalk.").__comma(_st(_st(self)._instanceClass())._name())).__comma(".klass");
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJavascript",{},smalltalk.Metaclass)})},
messageSends: [",", "name", "instanceClass"]}),
smalltalk.Metaclass);

smalltalk.addMethod(
smalltalk.method({
selector: "definition",
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$1=_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
$2=stream;
_st($2)._nextPutAll_(_st(self)._asString());
$3=_st($2)._nextPutAll_(" instanceVariableNames: '");
$3;
_st(_st(self)._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(stream)._nextPutAll_(each);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(stream)._nextPutAll_(" ");
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return _st(stream)._nextPutAll_("'");
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"definition",{},smalltalk.Metaclass)})},
messageSends: ["streamContents:", "nextPutAll:", "asString", "do:separatedBy:", "instanceVariableNames"]}),
smalltalk.Metaclass);

smalltalk.addMethod(
smalltalk.method({
selector: "instanceClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.instanceClass;
return self}, function($ctx1) {$ctx1.fill(self,"instanceClass",{},smalltalk.Metaclass)})},
messageSends: []}),
smalltalk.Metaclass);

smalltalk.addMethod(
smalltalk.method({
selector: "instanceVariableNames:",
fn: function (aCollection){
var self=this;
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($ClassBuilder())._new())._class_instanceVariableNames_(self,aCollection);
return self}, function($ctx1) {$ctx1.fill(self,"instanceVariableNames:",{aCollection:aCollection},smalltalk.Metaclass)})},
messageSends: ["class:instanceVariableNames:", "new"]}),
smalltalk.Metaclass);

smalltalk.addMethod(
smalltalk.method({
selector: "isMetaclass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isMetaclass",{},smalltalk.Metaclass)})},
messageSends: []}),
smalltalk.Metaclass);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_(_st(_st(self)._instanceClass())._name());
$2=_st($1)._nextPutAll_(" class");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Metaclass)})},
messageSends: ["nextPutAll:", "name", "instanceClass"]}),
smalltalk.Metaclass);

smalltalk.addMethod(
smalltalk.method({
selector: "theMetaClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"theMetaClass",{},smalltalk.Metaclass)})},
messageSends: []}),
smalltalk.Metaclass);

smalltalk.addMethod(
smalltalk.method({
selector: "theNonMetaClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._instanceClass();
return $1;
}, function($ctx1) {$ctx1.fill(self,"theNonMetaClass",{},smalltalk.Metaclass)})},
messageSends: ["instanceClass"]}),
smalltalk.Metaclass);



smalltalk.addClass('ClassBuilder', smalltalk.Object, [], 'Kernel-Classes');
smalltalk.addMethod(
smalltalk.method({
selector: "addSubclassOf:named:instanceVariableNames:package:",
fn: function (aClass,aString,aCollection,packageName){
var self=this;
var theClass;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
theClass=_st(_st($Smalltalk())._current())._at_(aString);
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
messageSends: ["at:", "current", "ifNotNil:", "ifFalse:", "migrateClassNamed:superclass:instanceVariableNames:package:", "==", "superclass", "basicAddSubclassOf:named:instanceVariableNames:package:"]}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "basicAddSubclassOf:named:instanceVariableNames:package:",
fn: function (aClass,aString,aCollection,packageName){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		smalltalk.addClass(aString, aClass, aCollection, packageName);
		return smalltalk[aString]
	;
return self}, function($ctx1) {$ctx1.fill(self,"basicAddSubclassOf:named:instanceVariableNames:package:",{aClass:aClass,aString:aString,aCollection:aCollection,packageName:packageName},smalltalk.ClassBuilder)})},
messageSends: []}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "basicClass:instanceVariableNames:",
fn: function (aClass,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._basicClass_instanceVariables_(aClass,_st(self)._instanceVariableNamesFor_(aString));
return self}, function($ctx1) {$ctx1.fill(self,"basicClass:instanceVariableNames:",{aClass:aClass,aString:aString},smalltalk.ClassBuilder)})},
messageSends: ["basicClass:instanceVariables:", "instanceVariableNamesFor:"]}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "basicClass:instanceVariables:",
fn: function (aClass,aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aClass)._isMetaclass();
if(! smalltalk.assert($1)){
_st(self)._error_(_st(_st(aClass)._name()).__comma(" is not a metaclass"));
};
_st(aClass)._basicAt_put_("iVarNames",aCollection);
return self}, function($ctx1) {$ctx1.fill(self,"basicClass:instanceVariables:",{aClass:aClass,aCollection:aCollection},smalltalk.ClassBuilder)})},
messageSends: ["ifFalse:", "error:", ",", "name", "isMetaclass", "basicAt:put:"]}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "basicRemoveClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.removeClass(aClass);
return self}, function($ctx1) {$ctx1.fill(self,"basicRemoveClass:",{aClass:aClass},smalltalk.ClassBuilder)})},
messageSends: []}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "basicRenameClass:to:",
fn: function (aClass,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		smalltalk[aString] = aClass;
		delete smalltalk[aClass.className];
		aClass.className = aString;
	;
return self}, function($ctx1) {$ctx1.fill(self,"basicRenameClass:to:",{aClass:aClass,aString:aString},smalltalk.ClassBuilder)})},
messageSends: []}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "basicSwapClassNames:with:",
fn: function (aClass,anotherClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var tmp = aClass.className;
		aClass.className = anotherClass.className;
		anotherClass.className = tmp;
	;
return self}, function($ctx1) {$ctx1.fill(self,"basicSwapClassNames:with:",{aClass:aClass,anotherClass:anotherClass},smalltalk.ClassBuilder)})},
messageSends: []}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "class:instanceVariableNames:",
fn: function (aClass,aString){
var self=this;
function $ClassDefinitionChanged(){return smalltalk.ClassDefinitionChanged||(typeof ClassDefinitionChanged=="undefined"?nil:ClassDefinitionChanged)}
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self)._basicClass_instanceVariableNames_(aClass,aString);
_st(self)._setupClass_(aClass);
$1=_st($ClassDefinitionChanged())._new();
_st($1)._theClass_(aClass);
$2=_st($1)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"class:instanceVariableNames:",{aClass:aClass,aString:aString},smalltalk.ClassBuilder)})},
messageSends: ["basicClass:instanceVariableNames:", "setupClass:", "announce:", "theClass:", "new", "yourself", "current"]}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "copyClass:named:",
fn: function (aClass,aString){
var self=this;
var newClass;
return smalltalk.withContext(function($ctx1) { 
var $1;
newClass=_st(self)._addSubclassOf_named_instanceVariableNames_package_(_st(aClass)._superclass(),aString,_st(aClass)._instanceVariableNames(),_st(_st(aClass)._package())._name());
_st(self)._copyClass_to_(aClass,newClass);
$1=newClass;
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyClass:named:",{aClass:aClass,aString:aString,newClass:newClass},smalltalk.ClassBuilder)})},
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "superclass", "instanceVariableNames", "name", "package", "copyClass:to:"]}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "copyClass:to:",
fn: function (aClass,anotherClass){
var self=this;
function $Compiler(){return smalltalk.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
return smalltalk.withContext(function($ctx1) { 
_st(anotherClass)._comment_(_st(aClass)._comment());
_st(_st(_st(aClass)._methodDictionary())._values())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st($Compiler())._new())._install_forClass_category_(_st(each)._source(),anotherClass,_st(each)._category());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(self)._basicClass_instanceVariables_(_st(anotherClass)._class(),_st(_st(aClass)._class())._instanceVariableNames());
_st(_st(_st(_st(aClass)._class())._methodDictionary())._values())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st($Compiler())._new())._install_forClass_category_(_st(each)._source(),_st(anotherClass)._class(),_st(each)._category());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(self)._setupClass_(anotherClass);
return self}, function($ctx1) {$ctx1.fill(self,"copyClass:to:",{aClass:aClass,anotherClass:anotherClass},smalltalk.ClassBuilder)})},
messageSends: ["comment:", "comment", "do:", "install:forClass:category:", "source", "category", "new", "values", "methodDictionary", "basicClass:instanceVariables:", "class", "instanceVariableNames", "setupClass:"]}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "installMethod:forClass:category:",
fn: function (aCompiledMethod,aBehavior,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aCompiledMethod)._category_(aString);
_st(aBehavior)._addCompiledMethod_(aCompiledMethod);
_st(self)._setupClass_(aBehavior);
$1=aCompiledMethod;
return $1;
}, function($ctx1) {$ctx1.fill(self,"installMethod:forClass:category:",{aCompiledMethod:aCompiledMethod,aBehavior:aBehavior,aString:aString},smalltalk.ClassBuilder)})},
messageSends: ["category:", "addCompiledMethod:", "setupClass:"]}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "instanceVariableNamesFor:",
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
messageSends: ["reject:", "isEmpty", "tokenize:"]}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "migrateClass:superclass:",
fn: function (aClass,anotherClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(console)._log_(_st(aClass)._name());
_st(self)._migrateClassNamed_superclass_instanceVariableNames_package_(_st(aClass)._name(),anotherClass,_st(aClass)._instanceVariableNames(),_st(_st(aClass)._package())._name());
return self}, function($ctx1) {$ctx1.fill(self,"migrateClass:superclass:",{aClass:aClass,anotherClass:anotherClass},smalltalk.ClassBuilder)})},
messageSends: ["log:", "name", "migrateClassNamed:superclass:instanceVariableNames:package:", "instanceVariableNames", "package"]}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "migrateClassNamed:superclass:instanceVariableNames:package:",
fn: function (aString,aClass,aCollection,packageName){
var self=this;
var oldClass,newClass,tmp;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
tmp=_st("new*").__comma(aString);
oldClass=_st(_st($Smalltalk())._current())._at_(aString);
newClass=_st(self)._addSubclassOf_named_instanceVariableNames_package_(aClass,tmp,aCollection,packageName);
_st(self)._basicSwapClassNames_with_(oldClass,newClass);
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._copyClass_to_(oldClass,newClass);
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
$4=_st($3)._rawRenameClass_to_(newClass,aString);
_st(_st(oldClass)._subclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self)._migrateClass_superclass_(each,newClass);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(self)._basicRemoveClass_(oldClass);
$5=newClass;
return $5;
}, function($ctx1) {$ctx1.fill(self,"migrateClassNamed:superclass:instanceVariableNames:package:",{aString:aString,aClass:aClass,aCollection:aCollection,packageName:packageName,oldClass:oldClass,newClass:newClass,tmp:tmp},smalltalk.ClassBuilder)})},
messageSends: [",", "at:", "current", "addSubclassOf:named:instanceVariableNames:package:", "basicSwapClassNames:with:", "on:do:", "basicRemoveClass:", "signal", "copyClass:to:", "rawRenameClass:to:", "do:", "migrateClass:superclass:", "subclasses"]}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "rawRenameClass:to:",
fn: function (aClass,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		smalltalk[aString] = aClass;
	;
return self}, function($ctx1) {$ctx1.fill(self,"rawRenameClass:to:",{aClass:aClass,aString:aString},smalltalk.ClassBuilder)})},
messageSends: []}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "renameClass:to:",
fn: function (aClass,aString){
var self=this;
function $ClassRenamed(){return smalltalk.ClassRenamed||(typeof ClassRenamed=="undefined"?nil:ClassRenamed)}
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self)._basicRenameClass_to_(aClass,aString);
$1=_st($ClassRenamed())._new();
_st($1)._theClass_(aClass);
$2=_st($1)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"renameClass:to:",{aClass:aClass,aString:aString},smalltalk.ClassBuilder)})},
messageSends: ["basicRenameClass:to:", "announce:", "theClass:", "new", "yourself", "current"]}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "setupClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.init(aClass);;
return self}, function($ctx1) {$ctx1.fill(self,"setupClass:",{aClass:aClass},smalltalk.ClassBuilder)})},
messageSends: []}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "superclass:subclass:",
fn: function (aClass,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._superclass_subclass_instanceVariableNames_package_(aClass,aString,"",nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"superclass:subclass:",{aClass:aClass,aString:aString},smalltalk.ClassBuilder)})},
messageSends: ["superclass:subclass:instanceVariableNames:package:"]}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "superclass:subclass:instanceVariableNames:package:",
fn: function (aClass,aString,aString2,aString3){
var self=this;
var newClass;
function $ClassAdded(){return smalltalk.ClassAdded||(typeof ClassAdded=="undefined"?nil:ClassAdded)}
function $SystemAnnouncer(){return smalltalk.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$6,$5,$7,$8,$9;
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
$7=_st($ClassAdded())._new();
_st($7)._theClass_(newClass);
$8=_st($7)._yourself();
_st(_st($SystemAnnouncer())._current())._announce_($8);
$9=newClass;
return $9;
}, function($ctx1) {$ctx1.fill(self,"superclass:subclass:instanceVariableNames:package:",{aClass:aClass,aString:aString,aString2:aString2,aString3:aString3,newClass:newClass},smalltalk.ClassBuilder)})},
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "instanceVariableNamesFor:", "ifNil:", "setupClass:", "announce:", "theClass:", "new", "yourself", "current"]}),
smalltalk.ClassBuilder);



smalltalk.addClass('ClassCategoryReader', smalltalk.Object, ['class', 'category'], 'Kernel-Classes');
smalltalk.addMethod(
smalltalk.method({
selector: "class:category:",
fn: function (aClass,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@class"]=aClass;
self["@category"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"class:category:",{aClass:aClass,aString:aString},smalltalk.ClassCategoryReader)})},
messageSends: []}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
smalltalk.method({
selector: "compileMethod:",
fn: function (aString){
var self=this;
function $Compiler(){return smalltalk.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($Compiler())._new())._install_forClass_category_(aString,self["@class"],self["@category"]);
return self}, function($ctx1) {$ctx1.fill(self,"compileMethod:",{aString:aString},smalltalk.ClassCategoryReader)})},
messageSends: ["install:forClass:category:", "new"]}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ClassCategoryReader)})},
messageSends: ["initialize"]}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
smalltalk.method({
selector: "scanFrom:",
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
return _st(self)._compileMethod_(chunk);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st($ClassBuilder())._new())._setupClass_(self["@class"]);
return self}, function($ctx1) {$ctx1.fill(self,"scanFrom:",{aChunkParser:aChunkParser,chunk:chunk},smalltalk.ClassCategoryReader)})},
messageSends: ["whileFalse:", "compileMethod:", "nextChunk", "isEmpty", "setupClass:", "new"]}),
smalltalk.ClassCategoryReader);



smalltalk.addClass('ClassCommentReader', smalltalk.Object, ['class'], 'Kernel-Classes');
smalltalk.addMethod(
smalltalk.method({
selector: "class:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@class"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"class:",{aClass:aClass},smalltalk.ClassCommentReader)})},
messageSends: []}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ClassCommentReader)})},
messageSends: ["initialize"]}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
smalltalk.method({
selector: "scanFrom:",
fn: function (aChunkParser){
var self=this;
var chunk;
return smalltalk.withContext(function($ctx1) { 
var $1;
chunk=_st(aChunkParser)._nextChunk();
$1=_st(chunk)._isEmpty();
if(! smalltalk.assert($1)){
_st(self)._setComment_(chunk);
};
return self}, function($ctx1) {$ctx1.fill(self,"scanFrom:",{aChunkParser:aChunkParser,chunk:chunk},smalltalk.ClassCommentReader)})},
messageSends: ["nextChunk", "ifFalse:", "setComment:", "isEmpty"]}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
smalltalk.method({
selector: "setComment:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@class"])._comment_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"setComment:",{aString:aString},smalltalk.ClassCommentReader)})},
messageSends: ["comment:"]}),
smalltalk.ClassCommentReader);



smalltalk.addClass('ClassSorterNode', smalltalk.Object, ['theClass', 'level', 'nodes'], 'Kernel-Classes');
smalltalk.addMethod(
smalltalk.method({
selector: "getNodesFrom:",
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
$1=_st(_st(each)._superclass()).__eq(_st(self)._theClass());
if(smalltalk.assert($1)){
return _st(children)._add_(each);
} else {
return _st(others)._add_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
self["@nodes"]=_st(children)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st($ClassSorterNode())._on_classes_level_(each,others,_st(_st(self)._level()).__plus((1)));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"getNodesFrom:",{aCollection:aCollection,children:children,others:others},smalltalk.ClassSorterNode)})},
messageSends: ["do:", "ifTrue:ifFalse:", "add:", "=", "theClass", "superclass", "collect:", "on:classes:level:", "+", "level"]}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
smalltalk.method({
selector: "level",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@level"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"level",{},smalltalk.ClassSorterNode)})},
messageSends: []}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
smalltalk.method({
selector: "level:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@level"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"level:",{anInteger:anInteger},smalltalk.ClassSorterNode)})},
messageSends: []}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
smalltalk.method({
selector: "nodes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@nodes"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"nodes",{},smalltalk.ClassSorterNode)})},
messageSends: []}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@theClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.ClassSorterNode)})},
messageSends: []}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass},smalltalk.ClassSorterNode)})},
messageSends: []}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
smalltalk.method({
selector: "traverseClassesWith:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCollection)._add_(_st(self)._theClass());
_st(_st(_st(self)._nodes())._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(a)._theClass())._name()).__lt_eq(_st(_st(b)._theClass())._name());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})})))._do_((function(aNode){
return smalltalk.withContext(function($ctx2) {
return _st(aNode)._traverseClassesWith_(aCollection);
}, function($ctx2) {$ctx2.fillBlock({aNode:aNode},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"traverseClassesWith:",{aCollection:aCollection},smalltalk.ClassSorterNode)})},
messageSends: ["add:", "theClass", "do:", "traverseClassesWith:", "sorted:", "<=", "name", "nodes"]}),
smalltalk.ClassSorterNode);


smalltalk.addMethod(
smalltalk.method({
selector: "on:classes:level:",
fn: function (aClass,aCollection,anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._theClass_(aClass);
_st($2)._level_(anInteger);
_st($2)._getNodesFrom_(aCollection);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:classes:level:",{aClass:aClass,aCollection:aCollection,anInteger:anInteger},smalltalk.ClassSorterNode.klass)})},
messageSends: ["theClass:", "new", "level:", "getNodesFrom:", "yourself"]}),
smalltalk.ClassSorterNode.klass);


