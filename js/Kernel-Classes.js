smalltalk.addPackage('Kernel-Classes', {});
smalltalk.addClass('Behavior', smalltalk.Object, [], 'Kernel-Classes');
smalltalk.Behavior.comment="Behavior is the superclass of all class objects. \x0a\x0aIt defines the protocol for creating instances of a class with `#basicNew` and `#new` (see `boot.js` for class constructors details).\x0aInstances know about the subclass/superclass relationships between classes, contain the description that instances are created from, \x0aand hold the method dictionary that's associated with each class.\x0a\x0aBehavior also  provides methods for compiling methods, examining the method dictionary, and iterating over the class hierarchy."
smalltalk.addMethod(
"_addCompiledMethod_",
smalltalk.method({
selector: "addCompiledMethod:",
category: 'compiling',
fn: function (aMethod){
var self=this;
smalltalk.addMethod(aMethod.selector._asSelector(), aMethod, self);
;
return self},
args: ["aMethod"],
source: "addCompiledMethod: aMethod\x0a\x09<smalltalk.addMethod(aMethod.selector._asSelector(), aMethod, self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_allInstanceVariableNames",
smalltalk.method({
selector: "allInstanceVariableNames",
category: 'accessing',
fn: function (){
var self=this;
var $1;
var result;
result=smalltalk.send(smalltalk.send(self,"_instanceVariableNames",[]),"_copy",[]);
$1=smalltalk.send(self,"_superclass",[]);
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
smalltalk.send(result,"_addAll_",[smalltalk.send(smalltalk.send(self,"_superclass",[]),"_allInstanceVariableNames",[])]);
};
return result;
},
args: [],
source: "allInstanceVariableNames\x0a\x09| result |\x0a\x09result := self instanceVariableNames copy.\x0a\x09self superclass ifNotNil: [\x0a\x09    result addAll: self superclass allInstanceVariableNames].\x0a\x09^result",
messageSends: ["copy", "instanceVariableNames", "ifNotNil:", "addAll:", "allInstanceVariableNames", "superclass"],
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
result=smalltalk.send(self,"_subclasses",[]);
smalltalk.send(smalltalk.send(self,"_subclasses",[]),"_do_",[(function(each){
return smalltalk.send(result,"_addAll_",[smalltalk.send(each,"_allSubclasses",[])]);
})]);
return result;
},
args: [],
source: "allSubclasses\x0a\x09| result |\x0a\x09result := self subclasses.\x0a\x09self subclasses do: [:each |\x0a\x09    result addAll: each allSubclasses].\x0a\x09^result",
messageSends: ["subclasses", "do:", "addAll:", "allSubclasses"],
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
return new self.fn();
;
return self},
args: [],
source: "basicNew\x0a\x09<return new self.fn()>",
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
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_methodDictionary",[]),"_keys",[]),"_includes_",[smalltalk.send(aSelector,"_asString",[])]),"_or_",[(function(){
return smalltalk.send(smalltalk.send(smalltalk.send(self,"_superclass",[]),"_notNil",[]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(self,"_superclass",[]),"_canUnderstand_",[aSelector]);
})]);
})]);
return $1;
},
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
var $2,$1;
$2=smalltalk.send(self,"_basicAt_",["comment"]);
if(($receiver = $2) == nil || $receiver == undefined){
$1="";
} else {
$1=$2;
};
return $1;
},
args: [],
source: "comment\x0a    ^(self basicAt: 'comment') ifNil: ['']",
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
smalltalk.send(self,"_basicAt_put_",["comment",aString]);
return self},
args: ["aString"],
source: "comment: aString\x0a    self basicAt: 'comment' put: aString",
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_commentStamp",
smalltalk.method({
selector: "commentStamp",
category: 'accessing',
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.ClassCommentReader || ClassCommentReader),"_new",[]);
smalltalk.send($2,"_class_",[self]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: [],
source: "commentStamp\x0a    ^ClassCommentReader new\x0a\x09class: self;\x0a\x09yourself",
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
var $1;
$1=smalltalk.send(self,"_commentStamp",[]);
return $1;
},
args: ["aStamp", "prior"],
source: "commentStamp: aStamp prior: prior\x0a        ^self commentStamp",
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
smalltalk.send(self,"_compile_category_",[aString,""]);
return self},
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
var $1,$2;
$1=smalltalk.send((smalltalk.Compiler || Compiler),"_new",[]);
smalltalk.send($1,"_install_forClass_category_",[aString,self,anotherString]);
$2=smalltalk.send($1,"_setupClass_",[self]);
return self},
args: ["aString", "anotherString"],
source: "compile: aString category: anotherString\x0a\x09Compiler new\x0a\x09\x09install: aString forClass: self category: anotherString;\x0a\x09\x09setupClass: self",
messageSends: ["install:forClass:category:", "new", "setupClass:"],
referencedClasses: ["Compiler"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_inheritsFrom_",
smalltalk.method({
selector: "inheritsFrom:",
category: 'testing',
fn: function (aClass){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(aClass,"_allSubclasses",[]),"_includes_",[self]);
return $1;
},
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
return self.iVarNames;
;
return self},
args: [],
source: "instanceVariableNames\x0a\x09<return self.iVarNames>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_methodAt_",
smalltalk.method({
selector: "methodAt:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.methods(self)[aString];
;
return self},
args: ["aString"],
source: "methodAt: aString\x0a\x09<return smalltalk.methods(self)[aString]>",
messageSends: [],
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
var dict = smalltalk.HashedCollection._new();
	var methods = self.fn.prototype.methods;
	for(var i in methods) {
		if(methods[i].selector) {
			dict._at_put_(methods[i].selector, methods[i]);
		}
	};
	return dict;
;
return self},
args: [],
source: "methodDictionary\x0a\x09<var dict = smalltalk.HashedCollection._new();\x0a\x09var methods = self.fn.prototype.methods;\x0a\x09for(var i in methods) {\x0a\x09\x09if(methods[i].selector) {\x0a\x09\x09\x09dict._at_put_(methods[i].selector, methods[i]);\x0a\x09\x09}\x0a\x09};\x0a\x09return dict>",
messageSends: [],
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
var $2,$3,$1;
$2=smalltalk.send((smalltalk.ClassCategoryReader || ClassCategoryReader),"_new",[]);
smalltalk.send($2,"_class_category_",[self,aString]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aString"],
source: "methodsFor: aString\x0a\x09^ClassCategoryReader new\x0a\x09    class: self category: aString;\x0a\x09    yourself",
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
var $1;
$1=smalltalk.send(self,"_methodsFor_",[aString]);
return $1;
},
args: ["aString", "aStamp"],
source: "methodsFor: aString stamp: aStamp\x0a\x09\x22Added for compatibility, right now ignores stamp.\x22\x0a\x09^self methodsFor: aString",
messageSends: ["methodsFor:"],
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
return self.className || nil;
;
return self},
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
var $1;
$1=smalltalk.send(smalltalk.send(self,"_basicNew",[]),"_initialize",[]);
return $1;
},
args: [],
source: "new\x0a\x09^self basicNew initialize",
messageSends: ["initialize", "basicNew"],
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
var $1,$2;
var protocols;
protocols=smalltalk.send((smalltalk.Array || Array),"_new",[]);
smalltalk.send(smalltalk.send(self,"_methodDictionary",[]),"_do_",[(function(each){
$1=smalltalk.send(protocols,"_includes_",[smalltalk.send(each,"_category",[])]);
if(! smalltalk.assert($1)){
return smalltalk.send(protocols,"_add_",[smalltalk.send(each,"_category",[])]);
};
})]);
$2=smalltalk.send(protocols,"_sort",[]);
return $2;
},
args: [],
source: "protocols\x0a    | protocols |\x0a    protocols := Array new.\x0a    self methodDictionary do: [:each |\x0a\x09    (protocols includes: each category) ifFalse: [\x0a\x09\x09protocols add: each category]].\x0a    ^protocols sort",
messageSends: ["new", "do:", "ifFalse:", "add:", "category", "includes:", "methodDictionary", "sort"],
referencedClasses: ["Array"]
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
methodsByCategory=smalltalk.send((smalltalk.HashedCollection || HashedCollection),"_new",[]);
smalltalk.send(smalltalk.send(smalltalk.send(self,"_methodDictionary",[]),"_values",[]),"_do_",[(function(m){
return smalltalk.send(smalltalk.send(methodsByCategory,"_at_ifAbsentPut_",[smalltalk.send(m,"_category",[]),(function(){
return smalltalk.send((smalltalk.Array || Array),"_new",[]);
})]),"_add_",[m]);
})]);
smalltalk.send(smalltalk.send(self,"_protocols",[]),"_do_",[(function(category){
return smalltalk.send(aBlock,"_value_value_",[category,smalltalk.send(methodsByCategory,"_at_",[category])]);
})]);
return self},
args: ["aBlock"],
source: "protocolsDo: aBlock\x0a\x09\x22Execute aBlock for each method category with\x0a\x09its collection of methods in the sort order of category name.\x22\x0a\x0a\x09| methodsByCategory |\x0a\x09methodsByCategory := HashedCollection new.\x0a\x09self methodDictionary values do: [:m |\x0a\x09\x09(methodsByCategory at: m category ifAbsentPut: [Array new])\x0a \x09\x09\x09add: m]. \x0a\x09self protocols do: [:category |\x0a\x09\x09aBlock value: category value: (methodsByCategory at: category)]",
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
return self.fn.prototype;
;
return self},
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
delete self.fn.prototype[aMethod.selector._asSelector()];
	delete self.fn.prototype.methods[aMethod.selector];
	smalltalk.init(self);;
;
return self},
args: ["aMethod"],
source: "removeCompiledMethod: aMethod\x0a\x09<delete self.fn.prototype[aMethod.selector._asSelector()];\x0a\x09delete self.fn.prototype.methods[aMethod.selector];\x0a\x09smalltalk.init(self);>",
messageSends: [],
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
return smalltalk.subclasses(self);
;
return self},
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
return self.superclass || nil;
;
return self},
args: [],
source: "superclass\x0a\x09<return self.superclass || nil>",
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
var $2,$3,$1;
$2=smalltalk.send((smalltalk.Array || Array),"_with_",[self]);
smalltalk.send($2,"_addAll_",[smalltalk.send(self,"_allSubclasses",[])]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: [],
source: "withAllSubclasses\x0a\x09^(Array with: self) addAll: self allSubclasses; yourself",
messageSends: ["addAll:", "allSubclasses", "with:", "yourself"],
referencedClasses: ["Array"]
}),
smalltalk.Behavior);



smalltalk.addClass('Class', smalltalk.Behavior, [], 'Kernel-Classes');
smalltalk.Class.comment="Class is __the__ class object. \x0a\x0aInstances are the classes of the system.\x0aClass creation is done throught a `ClassBuilder`"
smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send("smalltalk.","__comma",[smalltalk.send(self,"_name",[])]);
return $1;
},
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
var $2,$1;
$2=smalltalk.send(self,"_package",[]);
if(($receiver = $2) == nil || $receiver == undefined){
$1="Unclassified";
} else {
$1=smalltalk.send(smalltalk.send(self,"_package",[]),"_name",[]);
};
return $1;
},
args: [],
source: "category\x0a\x09^self package ifNil: ['Unclassified'] ifNotNil: [self package name]",
messageSends: ["ifNil:ifNotNil:", "name", "package"],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
"_isClass",
smalltalk.method({
selector: "isClass",
category: 'testing',
fn: function (){
var self=this;
return true;
},
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
return self.pkg;
;
return self},
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
self.pkg = aPackage;
;
return self},
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
var $1;
$1=smalltalk.send(self,"_name",[]);
return $1;
},
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

		smalltalk[aString] = self;
		delete smalltalk[self.className];
		self.className = aString;
	;
;
return self},
args: ["aString"],
source: "rename: aString\x0a\x09<\x0a\x09\x09smalltalk[aString] = self;\x0a\x09\x09delete smalltalk[self.className];\x0a\x09\x09self.className = aString;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
"_subclass_instanceVariableNames_",
smalltalk.method({
selector: "subclass:instanceVariableNames:",
category: 'class creation',
fn: function (aString,anotherString){
var self=this;
var $1;
$1=smalltalk.send(self,"_subclass_instanceVariableNames_package_",[aString,anotherString,nil]);
return $1;
},
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
var $1;
smalltalk.send(self,"_deprecatedAPI",[]);
$1=smalltalk.send(self,"_subclass_instanceVariableNames_package_",[aString,aString2,aString3]);
return $1;
},
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
var $1;
$1=smalltalk.send(self,"_subclass_instanceVariableNames_package_",[aString,aString2,aString3]);
return $1;
},
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
var $1;
$1=smalltalk.send(smalltalk.send((smalltalk.ClassBuilder || ClassBuilder),"_new",[]),"_superclass_subclass_instanceVariableNames_package_",[self,smalltalk.send(aString,"_asString",[]),aString2,aString3]);
return $1;
},
args: ["aString", "aString2", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 package: aString3\x0a\x09^ClassBuilder new\x0a\x09    superclass: self subclass: aString asString instanceVariableNames: aString2 package: aString3",
messageSends: ["superclass:subclass:instanceVariableNames:package:", "asString", "new"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.Class);



smalltalk.addClass('Metaclass', smalltalk.Behavior, [], 'Kernel-Classes');
smalltalk.Metaclass.comment="Metaclass is the root of the class hierarchy.\x0a\x0aMetaclass instances are metaclasses, one for each real class. \x0aMetaclass instances have a single instance, which they hold onto, which is the class that they are the metaclass of."
smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send("smalltalk.","__comma",[smalltalk.send(smalltalk.send(self,"_instanceClass",[]),"_name",[])]),"__comma",[".klass"]);
return $1;
},
args: [],
source: "asJavascript\x0a\x09^ 'smalltalk.', self instanceClass name, '.klass'",
messageSends: [",", "name", "instanceClass"],
referencedClasses: []
}),
smalltalk.Metaclass);

smalltalk.addMethod(
"_instanceClass",
smalltalk.method({
selector: "instanceClass",
category: 'accessing',
fn: function (){
var self=this;
return self.instanceClass;
;
return self},
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
smalltalk.send(smalltalk.send((smalltalk.ClassBuilder || ClassBuilder),"_new",[]),"_class_instanceVariableNames_",[self,aCollection]);
return self},
args: ["aCollection"],
source: "instanceVariableNames: aCollection\x0a\x09ClassBuilder new\x0a\x09    class: self instanceVariableNames: aCollection",
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
return true;
},
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
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_instanceClass",[]),"_name",[]),"__comma",[" class"]);
return $1;
},
args: [],
source: "printString\x0a\x09^self instanceClass name, ' class'",
messageSends: [",", "name", "instanceClass"],
referencedClasses: []
}),
smalltalk.Metaclass);



smalltalk.addClass('ClassBuilder', smalltalk.Object, [], 'Kernel-Classes');
smalltalk.ClassBuilder.comment="ClassBuilder is responsible for compiling new classes or modifying existing classes in the system.\x0a\x0aRather than using ClassBuilder directly to compile a class, use `Class >> subclass:instanceVariableNames:package:`."
smalltalk.addMethod(
"_addSubclassOf_named_instanceVariableNames_",
smalltalk.method({
selector: "addSubclassOf:named:instanceVariableNames:",
category: 'private',
fn: function (aClass,aString,aCollection){
var self=this;
smalltalk.addClass(aString, aClass, aCollection);
	    return smalltalk[aString];
;
return self},
args: ["aClass", "aString", "aCollection"],
source: "addSubclassOf: aClass named: aString instanceVariableNames: aCollection\x0a\x09<smalltalk.addClass(aString, aClass, aCollection);\x0a\x09    return smalltalk[aString]>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_addSubclassOf_named_instanceVariableNames_package_",
smalltalk.method({
selector: "addSubclassOf:named:instanceVariableNames:package:",
category: 'private',
fn: function (aClass,aString,aCollection,packageName){
var self=this;
smalltalk.addClass(aString, aClass, aCollection, packageName);
	    return smalltalk[aString];
;
return self},
args: ["aClass", "aString", "aCollection", "packageName"],
source: "addSubclassOf: aClass named: aString instanceVariableNames: aCollection package: packageName\x0a\x09<smalltalk.addClass(aString, aClass, aCollection, packageName);\x0a\x09    return smalltalk[aString]>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_class_instanceVariableNames_",
smalltalk.method({
selector: "class:instanceVariableNames:",
category: 'class creation',
fn: function (aClass,aString){
var self=this;
var $1;
$1=smalltalk.send(aClass,"_isMetaclass",[]);
if(! smalltalk.assert($1)){
smalltalk.send(self,"_error_",[smalltalk.send(smalltalk.send(aClass,"_name",[]),"__comma",[" is not a metaclass"])]);
};
smalltalk.send(aClass,"_basicAt_put_",["iVarNames",smalltalk.send(self,"_instanceVariableNamesFor_",[aString])]);
smalltalk.send(self,"_setupClass_",[aClass]);
return self},
args: ["aClass", "aString"],
source: "class: aClass instanceVariableNames: aString\x0a\x09aClass isMetaclass ifFalse: [self error: aClass name, ' is not a metaclass'].\x0a\x09aClass basicAt: 'iVarNames' put: (self instanceVariableNamesFor: aString).\x0a\x09self setupClass: aClass",
messageSends: ["ifFalse:", "error:", ",", "name", "isMetaclass", "basicAt:put:", "instanceVariableNamesFor:", "setupClass:"],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_copyClass_named_",
smalltalk.method({
selector: "copyClass:named:",
category: 'private',
fn: function (aClass,aString){
var self=this;
var newClass;
newClass=smalltalk.send(self,"_addSubclassOf_named_instanceVariableNames_package_",[smalltalk.send(aClass,"_superclass",[]),aString,smalltalk.send(aClass,"_instanceVariableNames",[]),smalltalk.send(smalltalk.send(aClass,"_package",[]),"_name",[])]);
smalltalk.send(self,"_setupClass_",[newClass]);
smalltalk.send(smalltalk.send(smalltalk.send(aClass,"_methodDictionary",[]),"_values",[]),"_do_",[(function(each){
return smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler),"_new",[]),"_install_forClass_category_",[smalltalk.send(each,"_source",[]),newClass,smalltalk.send(each,"_category",[])]);
})]);
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aClass,"_class",[]),"_methodDictionary",[]),"_values",[]),"_do_",[(function(each){
return smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler),"_new",[]),"_install_forClass_category_",[smalltalk.send(each,"_source",[]),smalltalk.send(newClass,"_class",[]),smalltalk.send(each,"_category",[])]);
})]);
smalltalk.send(self,"_setupClass_",[newClass]);
return newClass;
},
args: ["aClass", "aString"],
source: "copyClass: aClass named: aString\x0a\x09| newClass |\x0a\x0a\x09newClass := self \x0a\x09\x09addSubclassOf: aClass superclass\x0a\x09\x09named: aString \x0a\x09\x09instanceVariableNames: aClass instanceVariableNames \x0a\x09\x09package: aClass package name.\x0a\x0a\x09self setupClass: newClass.\x0a\x0a\x09aClass methodDictionary values do: [:each |\x0a\x09\x09Compiler new install: each source forClass: newClass category: each category].\x0a\x0a\x09aClass class methodDictionary values do: [:each |\x0a\x09\x09Compiler new install: each source forClass: newClass class category: each category].\x0a\x0a\x09self setupClass: newClass.\x0a\x09^newClass",
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "superclass", "instanceVariableNames", "name", "package", "setupClass:", "do:", "install:forClass:category:", "source", "category", "new", "values", "methodDictionary", "class"],
referencedClasses: ["Compiler"]
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_instanceVariableNamesFor_",
smalltalk.method({
selector: "instanceVariableNamesFor:",
category: 'private',
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(aString,"_tokenize_",[" "]),"_reject_",[(function(each){
return smalltalk.send(each,"_isEmpty",[]);
})]);
return $1;
},
args: ["aString"],
source: "instanceVariableNamesFor: aString\x0a\x09^(aString tokenize: ' ') reject: [:each | each isEmpty]",
messageSends: ["reject:", "isEmpty", "tokenize:"],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_setupClass_",
smalltalk.method({
selector: "setupClass:",
category: 'private',
fn: function (aClass){
var self=this;
smalltalk.init(aClass);;
;
return self},
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
category: 'class creation',
fn: function (aClass,aString){
var self=this;
var $1;
$1=smalltalk.send(self,"_superclass_subclass_instanceVariableNames_package_",[aClass,aString,"",nil]);
return $1;
},
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
category: 'class creation',
fn: function (aClass,aString,aString2,aString3){
var self=this;
var $1;
var newClass;
if(($receiver = aString3) == nil || $receiver == undefined){
$1="unclassified";
} else {
$1=aString3;
};
newClass=smalltalk.send(self,"_addSubclassOf_named_instanceVariableNames_package_",[aClass,aString,smalltalk.send(self,"_instanceVariableNamesFor_",[aString2]),$1]);
smalltalk.send(self,"_setupClass_",[newClass]);
return newClass;
},
args: ["aClass", "aString", "aString2", "aString3"],
source: "superclass: aClass subclass: aString instanceVariableNames: aString2 package: aString3\x0a\x09| newClass |\x0a\x09newClass := self addSubclassOf: aClass\x0a\x09\x09\x09\x09named: aString instanceVariableNames: (self instanceVariableNamesFor: aString2)\x0a\x09\x09\x09\x09package: (aString3 ifNil: ['unclassified']).\x0a\x09self setupClass: newClass.\x0a\x09^newClass",
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "instanceVariableNamesFor:", "ifNil:", "setupClass:"],
referencedClasses: []
}),
smalltalk.ClassBuilder);



smalltalk.addClass('ClassCategoryReader', smalltalk.Object, ['class', 'category', 'chunkParser'], 'Kernel-Classes');
smalltalk.ClassCategoryReader.comment="ClassCategoryReader represents a mechanism for retrieving class descriptions stored on a file."
smalltalk.addMethod(
"_class_category_",
smalltalk.method({
selector: "class:category:",
category: 'accessing',
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
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
"_compileMethod_",
smalltalk.method({
selector: "compileMethod:",
category: 'private',
fn: function (aString){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler),"_new",[]),"_install_forClass_category_",[aString,self["@class"],self["@category"]]);
return self},
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
smalltalk.send(self,"_initialize",[],smalltalk.Object);
self["@chunkParser"]=smalltalk.send((smalltalk.ChunkParser || ChunkParser),"_new",[]);
return self},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09chunkParser := ChunkParser new.",
messageSends: ["initialize", "new"],
referencedClasses: ["ChunkParser"]
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
smalltalk.send((function(){
chunk=smalltalk.send(aChunkParser,"_nextChunk",[]);
chunk;
return smalltalk.send(chunk,"_isEmpty",[]);
}),"_whileFalse_",[(function(){
return smalltalk.send(self,"_compileMethod_",[chunk]);
})]);
smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler),"_new",[]),"_setupClass_",[self["@class"]]);
return self},
args: ["aChunkParser"],
source: "scanFrom: aChunkParser\x0a\x09| chunk |\x0a\x09[chunk := aChunkParser nextChunk.\x0a\x09chunk isEmpty] whileFalse: [\x0a\x09    self compileMethod: chunk].\x0a\x09Compiler new setupClass: class",
messageSends: ["whileFalse:", "compileMethod:", "nextChunk", "isEmpty", "setupClass:", "new"],
referencedClasses: ["Compiler"]
}),
smalltalk.ClassCategoryReader);



smalltalk.addClass('ClassCommentReader', smalltalk.Object, ['class', 'chunkParser'], 'Kernel-Classes');
smalltalk.ClassCommentReader.comment="ClassCommentReader represents a mechanism for retrieving class descriptions stored on a file.\x0aSee `ClassCategoryReader` too."
smalltalk.addMethod(
"_class_",
smalltalk.method({
selector: "class:",
category: 'accessing',
fn: function (aClass){
var self=this;
self["@class"]=aClass;
return self},
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
smalltalk.send(self,"_initialize",[],smalltalk.Object);
self["@chunkParser"]=smalltalk.send((smalltalk.ChunkParser || ChunkParser),"_new",[]);
return self},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09chunkParser := ChunkParser new.",
messageSends: ["initialize", "new"],
referencedClasses: ["ChunkParser"]
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
"_scanFrom_",
smalltalk.method({
selector: "scanFrom:",
category: 'fileIn',
fn: function (aChunkParser){
var self=this;
var $1;
var chunk;
chunk=smalltalk.send(aChunkParser,"_nextChunk",[]);
$1=smalltalk.send(chunk,"_isEmpty",[]);
if(! smalltalk.assert($1)){
smalltalk.send(self,"_setComment_",[chunk]);
};
return self},
args: ["aChunkParser"],
source: "scanFrom: aChunkParser\x0a\x09| chunk |\x0a\x09chunk := aChunkParser nextChunk.\x0a\x09chunk isEmpty ifFalse: [\x0a\x09    self setComment: chunk].",
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
smalltalk.send(self["@class"],"_comment_",[aString]);
return self},
args: ["aString"],
source: "setComment: aString\x0a    class comment: aString",
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
var $1;
var children;
var others;
children=[];
others=[];
smalltalk.send(aCollection,"_do_",[(function(each){
$1=smalltalk.send(smalltalk.send(each,"_superclass",[]),"__eq",[smalltalk.send(self,"_theClass",[])]);
if(smalltalk.assert($1)){
return smalltalk.send(children,"_add_",[each]);
} else {
return smalltalk.send(others,"_add_",[each]);
};
})]);
self["@nodes"]=smalltalk.send(children,"_collect_",[(function(each){
return smalltalk.send((smalltalk.ClassSorterNode || ClassSorterNode),"_on_classes_level_",[each,others,smalltalk.send(smalltalk.send(self,"_level",[]),"__plus",[(1)])]);
})]);
return self},
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
return self["@level"];
},
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
self["@level"]=anInteger;
return self},
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
return self["@nodes"];
},
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
return self["@theClass"];
},
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
self["@theClass"]=aClass;
return self},
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
smalltalk.send(aCollection,"_add_",[smalltalk.send(self,"_theClass",[])]);
smalltalk.send(smalltalk.send(smalltalk.send(self,"_nodes",[]),"_sorted_",[(function(a,b){
return smalltalk.send(smalltalk.send(smalltalk.send(a,"_theClass",[]),"_name",[]),"__lt_eq",[smalltalk.send(smalltalk.send(b,"_theClass",[]),"_name",[])]);
})]),"_do_",[(function(aNode){
return smalltalk.send(aNode,"_traverseClassesWith_",[aCollection]);
})]);
return self},
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
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_theClass_",[aClass]);
smalltalk.send($2,"_level_",[anInteger]);
smalltalk.send($2,"_getNodesFrom_",[aCollection]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aClass", "aCollection", "anInteger"],
source: "on: aClass classes: aCollection level: anInteger\x0a\x09^self new\x0a\x09\x09theClass: aClass;\x0a\x09\x09level: anInteger;\x0a\x09\x09getNodesFrom: aCollection;\x0a\x09\x09yourself",
messageSends: ["theClass:", "new", "level:", "getNodesFrom:", "yourself"],
referencedClasses: []
}),
smalltalk.ClassSorterNode.klass);


