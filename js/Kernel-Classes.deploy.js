smalltalk.addPackage('Kernel-Classes', {});
smalltalk.addClass('Behavior', smalltalk.Object, [], 'Kernel-Classes');
smalltalk.addMethod(
"_addCompiledMethod_",
smalltalk.method({
selector: "addCompiledMethod:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self)._basicAddCompiledMethod_(aMethod);
$1=_st((smalltalk.MethodAdded || MethodAdded))._new();
_st($1)._theClass_(self);
_st($1)._method_(aMethod);
$2=_st($1)._yourself();
_st(_st((smalltalk.SystemAnnouncer || SystemAnnouncer))._current())._announce_($2);
return self}, self, "addCompiledMethod:", [aMethod], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_allInstanceVariableNames",
smalltalk.method({
selector: "allInstanceVariableNames",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.result=nil;
$ctx1.locals.result=_st(_st(self)._instanceVariableNames())._copy();
$1=_st(self)._superclass();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st($ctx1.locals.result)._addAll_(_st(_st(self)._superclass())._allInstanceVariableNames());
};
return $ctx1.locals.result;
}, self, "allInstanceVariableNames", [], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_allSubclasses",
smalltalk.method({
selector: "allSubclasses",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { $ctx1.result=nil;
$ctx1.locals.result=_st(self)._subclasses();
_st(_st(self)._subclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.result)._addAll_(_st(each)._allSubclasses());
})}));
return $ctx1.locals.result;
}, self, "allSubclasses", [], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_allSuperclasses",
smalltalk.method({
selector: "allSuperclasses",
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
}, self, "allSuperclasses", [], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_basicAddCompiledMethod_",
smalltalk.method({
selector: "basicAddCompiledMethod:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.addMethod(aMethod.selector._asSelector(), aMethod, self);
return self}, self, "basicAddCompiledMethod:", [aMethod], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_basicNew",
smalltalk.method({
selector: "basicNew",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return new self.fn();
;
return self}, self, "basicNew", [], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_basicRemoveCompiledMethod_",
smalltalk.method({
selector: "basicRemoveCompiledMethod:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
    	smalltalk.removeMethod(aMethod)
		smalltalk.init(self);
    ;
return self}, self, "basicRemoveCompiledMethod:", [aMethod], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_canUnderstand_",
smalltalk.method({
selector: "canUnderstand:",
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(self)._methodDictionary())._keys())._includes_(_st(aSelector)._asString()))._or_((function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(_st(self)._superclass())._notNil())._and_((function(){
return smalltalk.withContext(function($ctx3) { return _st(_st(self)._superclass())._canUnderstand_(aSelector);
})}));
})}));
return $1;
}, self, "canUnderstand:", [aSelector], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_comment",
smalltalk.method({
selector: "comment",
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
}, self, "comment", [], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_comment_",
smalltalk.method({
selector: "comment:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self)._basicAt_put_("comment",aString);
$1=_st((smalltalk.ClassCommentChanged || ClassCommentChanged))._new();
_st($1)._theClass_(self);
$2=_st($1)._yourself();
_st(_st((smalltalk.SystemAnnouncer || SystemAnnouncer))._current())._announce_($2);
return self}, self, "comment:", [aString], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_commentStamp",
smalltalk.method({
selector: "commentStamp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.ClassCommentReader || ClassCommentReader))._new();
_st($2)._class_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "commentStamp", [], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_commentStamp_prior_",
smalltalk.method({
selector: "commentStamp:prior:",
fn: function (aStamp,prior){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._commentStamp();
return $1;
}, self, "commentStamp:prior:", [aStamp,prior], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_compile_",
smalltalk.method({
selector: "compile:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._compile_category_(aString,"");
return self}, self, "compile:", [aString], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_compile_category_",
smalltalk.method({
selector: "compile:category:",
fn: function (aString,anotherString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.Compiler || Compiler))._new())._install_forClass_category_(aString,self,anotherString);
return self}, self, "compile:category:", [aString,anotherString], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_definition",
smalltalk.method({
selector: "definition",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "";
}, self, "definition", [], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_includesSelector_",
smalltalk.method({
selector: "includesSelector:",
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._methodDictionary())._includesKey_(_st(aSymbol)._asString());
return $1;
}, self, "includesSelector:", [aSymbol], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_inheritsFrom_",
smalltalk.method({
selector: "inheritsFrom:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(aClass)._allSubclasses())._includes_(self);
return $1;
}, self, "inheritsFrom:", [aClass], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_instanceVariableNames",
smalltalk.method({
selector: "instanceVariableNames",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.iVarNames;
;
return self}, self, "instanceVariableNames", [], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_lookupSelector_",
smalltalk.method({
selector: "lookupSelector:",
fn: function (selector){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
var $early={};
try {
$ctx1.locals.lookupClass=nil;
$ctx1.locals.lookupClass=self;
_st((function(){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.lookupClass).__eq(nil);
})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) { $1=_st($ctx1.locals.lookupClass)._includesSelector_(selector);
if(smalltalk.assert($1)){
$2=_st($ctx1.locals.lookupClass)._methodAt_(selector);
throw $early=[$2];
};
$ctx1.locals.lookupClass=_st($ctx1.locals.lookupClass)._superclass();
return $ctx1.locals.lookupClass;
})}));
return nil;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, self, "lookupSelector:", [selector], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_methodAt_",
smalltalk.method({
selector: "methodAt:",
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._methodDictionary())._at_(_st(aSymbol)._asString());
return $1;
}, self, "methodAt:", [aSymbol], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_methodDictionary",
smalltalk.method({
selector: "methodDictionary",
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
;
return self}, self, "methodDictionary", [], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_methods",
smalltalk.method({
selector: "methods",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._methodDictionary())._values();
return $1;
}, self, "methods", [], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_methodsFor_",
smalltalk.method({
selector: "methodsFor:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.ClassCategoryReader || ClassCategoryReader))._new();
_st($2)._class_category_(self,aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "methodsFor:", [aString], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_methodsFor_stamp_",
smalltalk.method({
selector: "methodsFor:stamp:",
fn: function (aString,aStamp){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._methodsFor_(aString);
return $1;
}, self, "methodsFor:stamp:", [aString,aStamp], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_methodsInProtocol_",
smalltalk.method({
selector: "methodsInProtocol:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._methodDictionary())._values())._select_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(_st(each)._protocol()).__eq(aString);
})}));
return $1;
}, self, "methodsInProtocol:", [aString], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.className || nil;
;
return self}, self, "name", [], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._basicNew())._initialize();
return $1;
}, self, "new", [], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_organization",
smalltalk.method({
selector: "organization",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._basicAt_("organization");
return $1;
}, self, "organization", [], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_protocols",
smalltalk.method({
selector: "protocols",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._organization())._elements())._sorted();
return $1;
}, self, "protocols", [], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_protocolsDo_",
smalltalk.method({
selector: "protocolsDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { $ctx1.methodsByCategory=nil;
$ctx1.locals.methodsByCategory=_st((smalltalk.HashedCollection || HashedCollection))._new();
_st(_st(_st(self)._methodDictionary())._values())._do_((function(m){
return smalltalk.withContext(function($ctx2) { return _st(_st($ctx1.locals.methodsByCategory)._at_ifAbsentPut_(_st(m)._category(),(function(){
return smalltalk.withContext(function($ctx3) { return _st((smalltalk.Array || Array))._new();
})})))._add_(m);
})}));
_st(_st(self)._protocols())._do_((function(category){
return smalltalk.withContext(function($ctx2) { return _st(aBlock)._value_value_(category,_st($ctx1.locals.methodsByCategory)._at_(category));
})}));
return self}, self, "protocolsDo:", [aBlock], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_prototype",
smalltalk.method({
selector: "prototype",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.fn.prototype;
;
return self}, self, "prototype", [], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_removeCompiledMethod_",
smalltalk.method({
selector: "removeCompiledMethod:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self)._basicRemoveCompiledMethod_(aMethod);
$1=_st((smalltalk.MethodRemoved || MethodRemoved))._new();
_st($1)._theClass_(self);
_st($1)._method_(aMethod);
$2=_st($1)._yourself();
_st(_st((smalltalk.SystemAnnouncer || SystemAnnouncer))._current())._announce_($2);
return self}, self, "removeCompiledMethod:", [aMethod], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_selectors",
smalltalk.method({
selector: "selectors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._methodDictionary())._keys();
return $1;
}, self, "selectors", [], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_subclasses",
smalltalk.method({
selector: "subclasses",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return smalltalk.subclasses(self);
;
return self}, self, "subclasses", [], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_superclass",
smalltalk.method({
selector: "superclass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.superclass || nil;
;
return self}, self, "superclass", [], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_theMetaClass",
smalltalk.method({
selector: "theMetaClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._class();
return $1;
}, self, "theMetaClass", [], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_theNonMetaClass",
smalltalk.method({
selector: "theNonMetaClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self;
}, self, "theNonMetaClass", [], smalltalk.Behavior)}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_withAllSubclasses",
smalltalk.method({
selector: "withAllSubclasses",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.Array || Array))._with_(self);
_st($2)._addAll_(_st(self)._allSubclasses());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "withAllSubclasses", [], smalltalk.Behavior)}
}),
smalltalk.Behavior);



smalltalk.addClass('Class', smalltalk.Behavior, [], 'Kernel-Classes');
smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st("smalltalk.").__comma(_st(self)._name());
return $1;
}, self, "asJavascript", [], smalltalk.Class)}
}),
smalltalk.Class);

smalltalk.addMethod(
"_category",
smalltalk.method({
selector: "category",
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
}, self, "category", [], smalltalk.Class)}
}),
smalltalk.Class);

smalltalk.addMethod(
"_definition",
smalltalk.method({
selector: "definition",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$1=_st((smalltalk.String || String))._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) { _st(stream)._nextPutAll_(_st(_st(self)._superclass())._asString());
_st(stream)._nextPutAll_(" subclass: #");
_st(stream)._nextPutAll_(_st(self)._name());
_st(stream)._nextPutAll_(_st(_st((smalltalk.String || String))._lf()).__comma(_st((smalltalk.String || String))._tab()));
$2=_st(stream)._nextPutAll_("instanceVariableNames: '");
$2;
_st(_st(self)._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx3) { return _st(stream)._nextPutAll_(each);
})}),(function(){
return smalltalk.withContext(function($ctx3) { return _st(stream)._nextPutAll_(" ");
})}));
_st(stream)._nextPutAll_(_st(_st("'").__comma(_st((smalltalk.String || String))._lf())).__comma(_st((smalltalk.String || String))._tab()));
_st(stream)._nextPutAll_("package: '");
_st(stream)._nextPutAll_(_st(self)._category());
$3=_st(stream)._nextPutAll_("'");
return $3;
})}));
return $1;
}, self, "definition", [], smalltalk.Class)}
}),
smalltalk.Class);

smalltalk.addMethod(
"_isClass",
smalltalk.method({
selector: "isClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isClass", [], smalltalk.Class)}
}),
smalltalk.Class);

smalltalk.addMethod(
"_package",
smalltalk.method({
selector: "package",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.pkg;
;
return self}, self, "package", [], smalltalk.Class)}
}),
smalltalk.Class);

smalltalk.addMethod(
"_package_",
smalltalk.method({
selector: "package:",
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { self.pkg = aPackage;
;
return self}, self, "package:", [aPackage], smalltalk.Class)}
}),
smalltalk.Class);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._name();
return $1;
}, self, "printString", [], smalltalk.Class)}
}),
smalltalk.Class);

smalltalk.addMethod(
"_rename_",
smalltalk.method({
selector: "rename:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.ClassBuilder || ClassBuilder))._new())._renameClass_to_(self,aString);
return self}, self, "rename:", [aString], smalltalk.Class)}
}),
smalltalk.Class);

smalltalk.addMethod(
"_subclass_instanceVariableNames_",
smalltalk.method({
selector: "subclass:instanceVariableNames:",
fn: function (aString,anotherString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._subclass_instanceVariableNames_package_(aString,anotherString,nil);
return $1;
}, self, "subclass:instanceVariableNames:", [aString,anotherString], smalltalk.Class)}
}),
smalltalk.Class);

smalltalk.addMethod(
"_subclass_instanceVariableNames_category_",
smalltalk.method({
selector: "subclass:instanceVariableNames:category:",
fn: function (aString,aString2,aString3){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._deprecatedAPI();
$1=_st(self)._subclass_instanceVariableNames_package_(aString,aString2,aString3);
return $1;
}, self, "subclass:instanceVariableNames:category:", [aString,aString2,aString3], smalltalk.Class)}
}),
smalltalk.Class);

smalltalk.addMethod(
"_subclass_instanceVariableNames_classVariableNames_poolDictionaries_category_",
smalltalk.method({
selector: "subclass:instanceVariableNames:classVariableNames:poolDictionaries:category:",
fn: function (aString,aString2,classVars,pools,aString3){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._subclass_instanceVariableNames_package_(aString,aString2,aString3);
return $1;
}, self, "subclass:instanceVariableNames:classVariableNames:poolDictionaries:category:", [aString,aString2,classVars,pools,aString3], smalltalk.Class)}
}),
smalltalk.Class);

smalltalk.addMethod(
"_subclass_instanceVariableNames_package_",
smalltalk.method({
selector: "subclass:instanceVariableNames:package:",
fn: function (aString,aString2,aString3){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st((smalltalk.ClassBuilder || ClassBuilder))._new())._superclass_subclass_instanceVariableNames_package_(self,_st(aString)._asString(),aString2,aString3);
return $1;
}, self, "subclass:instanceVariableNames:package:", [aString,aString2,aString3], smalltalk.Class)}
}),
smalltalk.Class);



smalltalk.addClass('Metaclass', smalltalk.Behavior, [], 'Kernel-Classes');
smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st("smalltalk.").__comma(_st(_st(self)._instanceClass())._name())).__comma(".klass");
return $1;
}, self, "asJavascript", [], smalltalk.Metaclass)}
}),
smalltalk.Metaclass);

smalltalk.addMethod(
"_definition",
smalltalk.method({
selector: "definition",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$1=_st((smalltalk.String || String))._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) { _st(stream)._nextPutAll_(_st(self)._asString());
_st(stream)._nextPutAll_(" class ");
$2=_st(stream)._nextPutAll_("instanceVariableNames: '");
$2;
_st(_st(self)._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx3) { return _st(stream)._nextPutAll_(each);
})}),(function(){
return smalltalk.withContext(function($ctx3) { return _st(stream)._nextPutAll_(" ");
})}));
return _st(stream)._nextPutAll_("'");
})}));
return $1;
}, self, "definition", [], smalltalk.Metaclass)}
}),
smalltalk.Metaclass);

smalltalk.addMethod(
"_instanceClass",
smalltalk.method({
selector: "instanceClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self.instanceClass;
;
return self}, self, "instanceClass", [], smalltalk.Metaclass)}
}),
smalltalk.Metaclass);

smalltalk.addMethod(
"_instanceVariableNames_",
smalltalk.method({
selector: "instanceVariableNames:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.ClassBuilder || ClassBuilder))._new())._class_instanceVariableNames_(self,aCollection);
return self}, self, "instanceVariableNames:", [aCollection], smalltalk.Metaclass)}
}),
smalltalk.Metaclass);

smalltalk.addMethod(
"_isMetaclass",
smalltalk.method({
selector: "isMetaclass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "isMetaclass", [], smalltalk.Metaclass)}
}),
smalltalk.Metaclass);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._instanceClass())._name()).__comma(" class");
return $1;
}, self, "printString", [], smalltalk.Metaclass)}
}),
smalltalk.Metaclass);

smalltalk.addMethod(
"_theMetaClass",
smalltalk.method({
selector: "theMetaClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self;
}, self, "theMetaClass", [], smalltalk.Metaclass)}
}),
smalltalk.Metaclass);

smalltalk.addMethod(
"_theNonMetaClass",
smalltalk.method({
selector: "theNonMetaClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._instanceClass();
return $1;
}, self, "theNonMetaClass", [], smalltalk.Metaclass)}
}),
smalltalk.Metaclass);



smalltalk.addClass('ClassBuilder', smalltalk.Object, [], 'Kernel-Classes');
smalltalk.addMethod(
"_addSubclassOf_named_instanceVariableNames_",
smalltalk.method({
selector: "addSubclassOf:named:instanceVariableNames:",
fn: function (aClass,aString,aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.addClass(aString, aClass, aCollection);
	    return smalltalk[aString];
;
return self}, self, "addSubclassOf:named:instanceVariableNames:", [aClass,aString,aCollection], smalltalk.ClassBuilder)}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_addSubclassOf_named_instanceVariableNames_package_",
smalltalk.method({
selector: "addSubclassOf:named:instanceVariableNames:package:",
fn: function (aClass,aString,aCollection,packageName){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.addClass(aString, aClass, aCollection, packageName);
	    return smalltalk[aString];
;
return self}, self, "addSubclassOf:named:instanceVariableNames:package:", [aClass,aString,aCollection,packageName], smalltalk.ClassBuilder)}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_basicClass_instanceVariableNames_",
smalltalk.method({
selector: "basicClass:instanceVariableNames:",
fn: function (aClass,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aClass)._isMetaclass();
if(! smalltalk.assert($1)){
_st(self)._error_(_st(_st(aClass)._name()).__comma(" is not a metaclass"));
};
_st(aClass)._basicAt_put_("iVarNames",_st(self)._instanceVariableNamesFor_(aString));
_st(self)._setupClass_(aClass);
return self}, self, "basicClass:instanceVariableNames:", [aClass,aString], smalltalk.ClassBuilder)}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_basicRenameClass_to_",
smalltalk.method({
selector: "basicRenameClass:to:",
fn: function (aClass,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
		smalltalk[aString] = aClass;
		delete smalltalk[aClass.className];
		aClass.className = aString;
	;
return self}, self, "basicRenameClass:to:", [aClass,aString], smalltalk.ClassBuilder)}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_class_instanceVariableNames_",
smalltalk.method({
selector: "class:instanceVariableNames:",
fn: function (aClass,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self)._basicClass_instanceVariableNames_(aClass,aString);
$1=_st((smalltalk.ClassDefinitionChanged || ClassDefinitionChanged))._new();
_st($1)._theClass_(aClass);
$2=_st($1)._yourself();
_st(_st((smalltalk.SystemAnnouncer || SystemAnnouncer))._current())._announce_($2);
return self}, self, "class:instanceVariableNames:", [aClass,aString], smalltalk.ClassBuilder)}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_copyClass_named_",
smalltalk.method({
selector: "copyClass:named:",
fn: function (aClass,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { $ctx1.newClass=nil;
$ctx1.locals.newClass=_st(self)._addSubclassOf_named_instanceVariableNames_package_(_st(aClass)._superclass(),aString,_st(aClass)._instanceVariableNames(),_st(_st(aClass)._package())._name());
_st(self)._setupClass_($ctx1.locals.newClass);
_st(_st(_st(aClass)._methodDictionary())._values())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(_st((smalltalk.Compiler || Compiler))._new())._install_forClass_category_(_st(each)._source(),$ctx1.locals.newClass,_st(each)._category());
})}));
_st(_st(_st(_st(aClass)._class())._methodDictionary())._values())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(_st((smalltalk.Compiler || Compiler))._new())._install_forClass_category_(_st(each)._source(),_st($ctx1.locals.newClass)._class(),_st(each)._category());
})}));
_st(self)._setupClass_($ctx1.locals.newClass);
return $ctx1.locals.newClass;
}, self, "copyClass:named:", [aClass,aString], smalltalk.ClassBuilder)}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_instanceVariableNamesFor_",
smalltalk.method({
selector: "instanceVariableNamesFor:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(aString)._tokenize_(" "))._reject_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(each)._isEmpty();
})}));
return $1;
}, self, "instanceVariableNamesFor:", [aString], smalltalk.ClassBuilder)}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_renameClass_to_",
smalltalk.method({
selector: "renameClass:to:",
fn: function (aClass,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self)._basicRenameClass_to_(aClass,aString);
$1=_st((smalltalk.ClassRenamed || ClassRenamed))._new();
_st($1)._theClass_(aClass);
$2=_st($1)._yourself();
_st(_st((smalltalk.SystemAnnouncer || SystemAnnouncer))._current())._announce_($2);
return self}, self, "renameClass:to:", [aClass,aString], smalltalk.ClassBuilder)}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_setupClass_",
smalltalk.method({
selector: "setupClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.init(aClass);;
;
return self}, self, "setupClass:", [aClass], smalltalk.ClassBuilder)}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_superclass_subclass_",
smalltalk.method({
selector: "superclass:subclass:",
fn: function (aClass,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._superclass_subclass_instanceVariableNames_package_(aClass,aString,"",nil);
return $1;
}, self, "superclass:subclass:", [aClass,aString], smalltalk.ClassBuilder)}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_superclass_subclass_instanceVariableNames_package_",
smalltalk.method({
selector: "superclass:subclass:instanceVariableNames:package:",
fn: function (aClass,aString,aString2,aString3){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$ctx1.newClass=nil;
if(($receiver = aString3) == nil || $receiver == undefined){
$1="unclassified";
} else {
$1=aString3;
};
$ctx1.locals.newClass=_st(self)._addSubclassOf_named_instanceVariableNames_package_(aClass,aString,_st(self)._instanceVariableNamesFor_(aString2),$1);
_st(self)._setupClass_($ctx1.locals.newClass);
$2=_st((smalltalk.ClassAdded || ClassAdded))._new();
_st($2)._theClass_($ctx1.locals.newClass);
$3=_st($2)._yourself();
_st(_st((smalltalk.SystemAnnouncer || SystemAnnouncer))._current())._announce_($3);
return $ctx1.locals.newClass;
}, self, "superclass:subclass:instanceVariableNames:package:", [aClass,aString,aString2,aString3], smalltalk.ClassBuilder)}
}),
smalltalk.ClassBuilder);



smalltalk.addClass('ClassCategoryReader', smalltalk.Object, ['class', 'category', 'chunkParser'], 'Kernel-Classes');
smalltalk.addMethod(
"_class_category_",
smalltalk.method({
selector: "class:category:",
fn: function (aClass,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@class"]=aClass;
self["@category"]=aString;
return self}, self, "class:category:", [aClass,aString], smalltalk.ClassCategoryReader)}
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
"_compileMethod_",
smalltalk.method({
selector: "compileMethod:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.Compiler || Compiler))._new())._install_forClass_category_(aString,self["@class"],self["@category"]);
return self}, self, "compileMethod:", [aString], smalltalk.ClassCategoryReader)}
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@chunkParser"]=_st((smalltalk.ChunkParser || ChunkParser))._new();
return self}, self, "initialize", [], smalltalk.ClassCategoryReader)}
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
"_scanFrom_",
smalltalk.method({
selector: "scanFrom:",
fn: function (aChunkParser){
var self=this;
return smalltalk.withContext(function($ctx1) { $ctx1.chunk=nil;
_st((function(){
return smalltalk.withContext(function($ctx2) { $ctx1.locals.chunk=_st(aChunkParser)._nextChunk();
$ctx1.locals.chunk;
return _st($ctx1.locals.chunk)._isEmpty();
})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._compileMethod_($ctx1.locals.chunk);
})}));
_st(_st((smalltalk.Compiler || Compiler))._new())._setupClass_(self["@class"]);
return self}, self, "scanFrom:", [aChunkParser], smalltalk.ClassCategoryReader)}
}),
smalltalk.ClassCategoryReader);



smalltalk.addClass('ClassCommentReader', smalltalk.Object, ['class', 'chunkParser'], 'Kernel-Classes');
smalltalk.addMethod(
"_class_",
smalltalk.method({
selector: "class:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@class"]=aClass;
return self}, self, "class:", [aClass], smalltalk.ClassCommentReader)}
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@chunkParser"]=_st((smalltalk.ChunkParser || ChunkParser))._new();
return self}, self, "initialize", [], smalltalk.ClassCommentReader)}
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
"_scanFrom_",
smalltalk.method({
selector: "scanFrom:",
fn: function (aChunkParser){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.chunk=nil;
$ctx1.locals.chunk=_st(aChunkParser)._nextChunk();
$1=_st($ctx1.locals.chunk)._isEmpty();
if(! smalltalk.assert($1)){
_st(self)._setComment_($ctx1.locals.chunk);
};
return self}, self, "scanFrom:", [aChunkParser], smalltalk.ClassCommentReader)}
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
"_setComment_",
smalltalk.method({
selector: "setComment:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@class"])._comment_(aString);
return self}, self, "setComment:", [aString], smalltalk.ClassCommentReader)}
}),
smalltalk.ClassCommentReader);



smalltalk.addClass('ClassSorterNode', smalltalk.Object, ['theClass', 'level', 'nodes'], 'Kernel-Classes');
smalltalk.addMethod(
"_getNodesFrom_",
smalltalk.method({
selector: "getNodesFrom:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.children=nil;
$ctx1.others=nil;
$ctx1.locals.children=[];
$ctx1.locals.others=[];
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) { $1=_st(_st(each)._superclass()).__eq(_st(self)._theClass());
if(smalltalk.assert($1)){
return _st($ctx1.locals.children)._add_(each);
} else {
return _st($ctx1.locals.others)._add_(each);
};
})}));
self["@nodes"]=_st($ctx1.locals.children)._collect_((function(each){
return smalltalk.withContext(function($ctx2) { return _st((smalltalk.ClassSorterNode || ClassSorterNode))._on_classes_level_(each,$ctx1.locals.others,_st(_st(self)._level()).__plus((1)));
})}));
return self}, self, "getNodesFrom:", [aCollection], smalltalk.ClassSorterNode)}
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
"_level",
smalltalk.method({
selector: "level",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@level"];
}, self, "level", [], smalltalk.ClassSorterNode)}
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
"_level_",
smalltalk.method({
selector: "level:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@level"]=anInteger;
return self}, self, "level:", [anInteger], smalltalk.ClassSorterNode)}
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@nodes"];
}, self, "nodes", [], smalltalk.ClassSorterNode)}
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@theClass"];
}, self, "theClass", [], smalltalk.ClassSorterNode)}
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@theClass"]=aClass;
return self}, self, "theClass:", [aClass], smalltalk.ClassSorterNode)}
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
"_traverseClassesWith_",
smalltalk.method({
selector: "traverseClassesWith:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aCollection)._add_(_st(self)._theClass());
_st(_st(_st(self)._nodes())._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) { return _st(_st(_st(a)._theClass())._name()).__lt_eq(_st(_st(b)._theClass())._name());
})})))._do_((function(aNode){
return smalltalk.withContext(function($ctx2) { return _st(aNode)._traverseClassesWith_(aCollection);
})}));
return self}, self, "traverseClassesWith:", [aCollection], smalltalk.ClassSorterNode)}
}),
smalltalk.ClassSorterNode);


smalltalk.addMethod(
"_on_classes_level_",
smalltalk.method({
selector: "on:classes:level:",
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
}, self, "on:classes:level:", [aClass,aCollection,anInteger], smalltalk.ClassSorterNode.klass)}
}),
smalltalk.ClassSorterNode.klass);


