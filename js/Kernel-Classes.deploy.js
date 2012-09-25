smalltalk.addPackage('Kernel-Classes', {});
smalltalk.addClass('Behavior', smalltalk.Object, [], 'Kernel-Classes');
smalltalk.addMethod(
"_addCompiledMethod_",
smalltalk.method({
selector: "addCompiledMethod:",
fn: function (aMethod){
var self=this;
smalltalk.addMethod(aMethod.selector._asSelector(), aMethod, self);
;
return self}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_allInstanceVariableNames",
smalltalk.method({
selector: "allInstanceVariableNames",
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
}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_allSubclasses",
smalltalk.method({
selector: "allSubclasses",
fn: function (){
var self=this;
var result;
result=smalltalk.send(self,"_subclasses",[]);
smalltalk.send(smalltalk.send(self,"_subclasses",[]),"_do_",[(function(each){
return smalltalk.send(result,"_addAll_",[smalltalk.send(each,"_allSubclasses",[])]);
})]);
return result;
}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_basicNew",
smalltalk.method({
selector: "basicNew",
fn: function (){
var self=this;
return new self.fn();
;
return self}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_canUnderstand_",
smalltalk.method({
selector: "canUnderstand:",
fn: function (aSelector){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_methodDictionary",[]),"_keys",[]),"_includes_",[smalltalk.send(aSelector,"_asString",[])]),"_or_",[(function(){
return smalltalk.send(smalltalk.send(smalltalk.send(self,"_superclass",[]),"_notNil",[]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(self,"_superclass",[]),"_canUnderstand_",[aSelector]);
})]);
})]);
return $1;
}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_comment",
smalltalk.method({
selector: "comment",
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
}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_comment_",
smalltalk.method({
selector: "comment:",
fn: function (aString){
var self=this;
smalltalk.send(self,"_basicAt_put_",["comment",aString]);
return self}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_commentStamp",
smalltalk.method({
selector: "commentStamp",
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.ClassCommentReader || ClassCommentReader),"_new",[]);
smalltalk.send($2,"_class_",[self]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_commentStamp_prior_",
smalltalk.method({
selector: "commentStamp:prior:",
fn: function (aStamp,prior){
var self=this;
var $1;
$1=smalltalk.send(self,"_commentStamp",[]);
return $1;
}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_compile_",
smalltalk.method({
selector: "compile:",
fn: function (aString){
var self=this;
smalltalk.send(self,"_compile_category_",[aString,""]);
return self}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_compile_category_",
smalltalk.method({
selector: "compile:category:",
fn: function (aString,anotherString){
var self=this;
var $1,$2;
$1=smalltalk.send((smalltalk.Compiler || Compiler),"_new",[]);
smalltalk.send($1,"_install_forClass_category_",[aString,self,anotherString]);
$2=smalltalk.send($1,"_setupClass_",[self]);
return self}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_inheritsFrom_",
smalltalk.method({
selector: "inheritsFrom:",
fn: function (aClass){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(aClass,"_allSubclasses",[]),"_includes_",[self]);
return $1;
}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_instanceVariableNames",
smalltalk.method({
selector: "instanceVariableNames",
fn: function (){
var self=this;
return self.iVarNames;
;
return self}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_methodAt_",
smalltalk.method({
selector: "methodAt:",
fn: function (aString){
var self=this;
return smalltalk.methods(self)[aString];
;
return self}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_methodDictionary",
smalltalk.method({
selector: "methodDictionary",
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
return self}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_methodsFor_",
smalltalk.method({
selector: "methodsFor:",
fn: function (aString){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.ClassCategoryReader || ClassCategoryReader),"_new",[]);
smalltalk.send($2,"_class_category_",[self,aString]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_methodsFor_stamp_",
smalltalk.method({
selector: "methodsFor:stamp:",
fn: function (aString,aStamp){
var self=this;
var $1;
$1=smalltalk.send(self,"_methodsFor_",[aString]);
return $1;
}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function (){
var self=this;
return self.className || nil;
;
return self}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_basicNew",[]),"_initialize",[]);
return $1;
}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_protocols",
smalltalk.method({
selector: "protocols",
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
}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_protocolsDo_",
smalltalk.method({
selector: "protocolsDo:",
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
return self}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_prototype",
smalltalk.method({
selector: "prototype",
fn: function (){
var self=this;
return self.fn.prototype;
;
return self}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_removeCompiledMethod_",
smalltalk.method({
selector: "removeCompiledMethod:",
fn: function (aMethod){
var self=this;
delete self.fn.prototype[aMethod.selector._asSelector()];
	delete self.fn.prototype.methods[aMethod.selector];
	smalltalk.init(self);;
;
return self}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_subclasses",
smalltalk.method({
selector: "subclasses",
fn: function (){
var self=this;
return smalltalk.subclasses(self);
;
return self}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_superclass",
smalltalk.method({
selector: "superclass",
fn: function (){
var self=this;
return self.superclass || nil;
;
return self}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_withAllSubclasses",
smalltalk.method({
selector: "withAllSubclasses",
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.Array || Array),"_with_",[self]);
smalltalk.send($2,"_addAll_",[smalltalk.send(self,"_allSubclasses",[])]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.Behavior);



smalltalk.addClass('Class', smalltalk.Behavior, [], 'Kernel-Classes');
smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send("smalltalk.","__comma",[smalltalk.send(self,"_name",[])]);
return $1;
}
}),
smalltalk.Class);

smalltalk.addMethod(
"_category",
smalltalk.method({
selector: "category",
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
}
}),
smalltalk.Class);

smalltalk.addMethod(
"_isClass",
smalltalk.method({
selector: "isClass",
fn: function (){
var self=this;
return true;
}
}),
smalltalk.Class);

smalltalk.addMethod(
"_package",
smalltalk.method({
selector: "package",
fn: function (){
var self=this;
return self.pkg;
;
return self}
}),
smalltalk.Class);

smalltalk.addMethod(
"_package_",
smalltalk.method({
selector: "package:",
fn: function (aPackage){
var self=this;
self.pkg = aPackage;
;
return self}
}),
smalltalk.Class);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_name",[]);
return $1;
}
}),
smalltalk.Class);

smalltalk.addMethod(
"_rename_",
smalltalk.method({
selector: "rename:",
fn: function (aString){
var self=this;

		smalltalk[aString] = self;
		delete smalltalk[self.className];
		self.className = aString;
	;
;
return self}
}),
smalltalk.Class);

smalltalk.addMethod(
"_subclass_instanceVariableNames_",
smalltalk.method({
selector: "subclass:instanceVariableNames:",
fn: function (aString,anotherString){
var self=this;
var $1;
$1=smalltalk.send(self,"_subclass_instanceVariableNames_package_",[aString,anotherString,nil]);
return $1;
}
}),
smalltalk.Class);

smalltalk.addMethod(
"_subclass_instanceVariableNames_category_",
smalltalk.method({
selector: "subclass:instanceVariableNames:category:",
fn: function (aString,aString2,aString3){
var self=this;
var $1;
smalltalk.send(self,"_deprecatedAPI",[]);
$1=smalltalk.send(self,"_subclass_instanceVariableNames_package_",[aString,aString2,aString3]);
return $1;
}
}),
smalltalk.Class);

smalltalk.addMethod(
"_subclass_instanceVariableNames_classVariableNames_poolDictionaries_category_",
smalltalk.method({
selector: "subclass:instanceVariableNames:classVariableNames:poolDictionaries:category:",
fn: function (aString,aString2,classVars,pools,aString3){
var self=this;
var $1;
$1=smalltalk.send(self,"_subclass_instanceVariableNames_package_",[aString,aString2,aString3]);
return $1;
}
}),
smalltalk.Class);

smalltalk.addMethod(
"_subclass_instanceVariableNames_package_",
smalltalk.method({
selector: "subclass:instanceVariableNames:package:",
fn: function (aString,aString2,aString3){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send((smalltalk.ClassBuilder || ClassBuilder),"_new",[]),"_superclass_subclass_instanceVariableNames_package_",[self,smalltalk.send(aString,"_asString",[]),aString2,aString3]);
return $1;
}
}),
smalltalk.Class);



smalltalk.addClass('Metaclass', smalltalk.Behavior, [], 'Kernel-Classes');
smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send("smalltalk.","__comma",[smalltalk.send(smalltalk.send(self,"_instanceClass",[]),"_name",[])]),"__comma",[".klass"]);
return $1;
}
}),
smalltalk.Metaclass);

smalltalk.addMethod(
"_instanceClass",
smalltalk.method({
selector: "instanceClass",
fn: function (){
var self=this;
return self.instanceClass;
;
return self}
}),
smalltalk.Metaclass);

smalltalk.addMethod(
"_instanceVariableNames_",
smalltalk.method({
selector: "instanceVariableNames:",
fn: function (aCollection){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.ClassBuilder || ClassBuilder),"_new",[]),"_class_instanceVariableNames_",[self,aCollection]);
return self}
}),
smalltalk.Metaclass);

smalltalk.addMethod(
"_isMetaclass",
smalltalk.method({
selector: "isMetaclass",
fn: function (){
var self=this;
return true;
}
}),
smalltalk.Metaclass);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_instanceClass",[]),"_name",[]),"__comma",[" class"]);
return $1;
}
}),
smalltalk.Metaclass);



smalltalk.addClass('ClassBuilder', smalltalk.Object, [], 'Kernel-Classes');
smalltalk.addMethod(
"_addSubclassOf_named_instanceVariableNames_",
smalltalk.method({
selector: "addSubclassOf:named:instanceVariableNames:",
fn: function (aClass,aString,aCollection){
var self=this;
smalltalk.addClass(aString, aClass, aCollection);
	    return smalltalk[aString];
;
return self}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_addSubclassOf_named_instanceVariableNames_package_",
smalltalk.method({
selector: "addSubclassOf:named:instanceVariableNames:package:",
fn: function (aClass,aString,aCollection,packageName){
var self=this;
smalltalk.addClass(aString, aClass, aCollection, packageName);
	    return smalltalk[aString];
;
return self}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_class_instanceVariableNames_",
smalltalk.method({
selector: "class:instanceVariableNames:",
fn: function (aClass,aString){
var self=this;
var $1;
$1=smalltalk.send(aClass,"_isMetaclass",[]);
if(! smalltalk.assert($1)){
smalltalk.send(self,"_error_",[smalltalk.send(smalltalk.send(aClass,"_name",[]),"__comma",[" is not a metaclass"])]);
};
smalltalk.send(aClass,"_basicAt_put_",["iVarNames",smalltalk.send(self,"_instanceVariableNamesFor_",[aString])]);
smalltalk.send(self,"_setupClass_",[aClass]);
return self}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_copyClass_named_",
smalltalk.method({
selector: "copyClass:named:",
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
}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_instanceVariableNamesFor_",
smalltalk.method({
selector: "instanceVariableNamesFor:",
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(aString,"_tokenize_",[" "]),"_reject_",[(function(each){
return smalltalk.send(each,"_isEmpty",[]);
})]);
return $1;
}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_setupClass_",
smalltalk.method({
selector: "setupClass:",
fn: function (aClass){
var self=this;
smalltalk.init(aClass);;
;
return self}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_superclass_subclass_",
smalltalk.method({
selector: "superclass:subclass:",
fn: function (aClass,aString){
var self=this;
var $1;
$1=smalltalk.send(self,"_superclass_subclass_instanceVariableNames_package_",[aClass,aString,"",nil]);
return $1;
}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_superclass_subclass_instanceVariableNames_package_",
smalltalk.method({
selector: "superclass:subclass:instanceVariableNames:package:",
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
}
}),
smalltalk.ClassBuilder);



smalltalk.addClass('ClassCategoryReader', smalltalk.Object, ['class', 'category', 'chunkParser'], 'Kernel-Classes');
smalltalk.addMethod(
"_class_category_",
smalltalk.method({
selector: "class:category:",
fn: function (aClass,aString){
var self=this;
self["@class"]=aClass;
self["@category"]=aString;
return self}
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
"_compileMethod_",
smalltalk.method({
selector: "compileMethod:",
fn: function (aString){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler),"_new",[]),"_install_forClass_category_",[aString,self["@class"],self["@category"]]);
return self}
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.Object);
self["@chunkParser"]=smalltalk.send((smalltalk.ChunkParser || ChunkParser),"_new",[]);
return self}
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
"_scanFrom_",
smalltalk.method({
selector: "scanFrom:",
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
return self}
}),
smalltalk.ClassCategoryReader);



smalltalk.addClass('ClassCommentReader', smalltalk.Object, ['class', 'chunkParser'], 'Kernel-Classes');
smalltalk.addMethod(
"_class_",
smalltalk.method({
selector: "class:",
fn: function (aClass){
var self=this;
self["@class"]=aClass;
return self}
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.Object);
self["@chunkParser"]=smalltalk.send((smalltalk.ChunkParser || ChunkParser),"_new",[]);
return self}
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
"_scanFrom_",
smalltalk.method({
selector: "scanFrom:",
fn: function (aChunkParser){
var self=this;
var $1;
var chunk;
chunk=smalltalk.send(aChunkParser,"_nextChunk",[]);
$1=smalltalk.send(chunk,"_isEmpty",[]);
if(! smalltalk.assert($1)){
smalltalk.send(self,"_setComment_",[chunk]);
};
return self}
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
"_setComment_",
smalltalk.method({
selector: "setComment:",
fn: function (aString){
var self=this;
smalltalk.send(self["@class"],"_comment_",[aString]);
return self}
}),
smalltalk.ClassCommentReader);



smalltalk.addClass('ClassSorterNode', smalltalk.Object, ['theClass', 'level', 'nodes'], 'Kernel-Classes');
smalltalk.addMethod(
"_getNodesFrom_",
smalltalk.method({
selector: "getNodesFrom:",
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
return self}
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
"_level",
smalltalk.method({
selector: "level",
fn: function (){
var self=this;
return self["@level"];
}
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
"_level_",
smalltalk.method({
selector: "level:",
fn: function (anInteger){
var self=this;
self["@level"]=anInteger;
return self}
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
fn: function (){
var self=this;
return self["@nodes"];
}
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
fn: function (){
var self=this;
return self["@theClass"];
}
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
fn: function (aClass){
var self=this;
self["@theClass"]=aClass;
return self}
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
"_traverseClassesWith_",
smalltalk.method({
selector: "traverseClassesWith:",
fn: function (aCollection){
var self=this;
smalltalk.send(aCollection,"_add_",[smalltalk.send(self,"_theClass",[])]);
smalltalk.send(smalltalk.send(smalltalk.send(self,"_nodes",[]),"_sorted_",[(function(a,b){
return smalltalk.send(smalltalk.send(smalltalk.send(a,"_theClass",[]),"_name",[]),"__lt_eq",[smalltalk.send(smalltalk.send(b,"_theClass",[]),"_name",[])]);
})]),"_do_",[(function(aNode){
return smalltalk.send(aNode,"_traverseClassesWith_",[aCollection]);
})]);
return self}
}),
smalltalk.ClassSorterNode);


smalltalk.addMethod(
"_on_classes_level_",
smalltalk.method({
selector: "on:classes:level:",
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
}
}),
smalltalk.ClassSorterNode.klass);


