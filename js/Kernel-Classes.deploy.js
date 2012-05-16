smalltalk.addPackage('Kernel-Classes', {});
smalltalk.addClass('Behavior', smalltalk.Object, [], 'Kernel-Classes');
smalltalk.addMethod(
"_addCompiledMethod_",
smalltalk.method({
selector: "addCompiledMethod:",
fn: function Behavior_addCompiledMethod_(aMethod){
var self=this;
smalltalk.addMethod(aMethod.selector._asSelector(), aMethod, self);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_allInstanceVariableNames",
smalltalk.method({
selector: "allInstanceVariableNames",
fn: function Behavior_allInstanceVariableNames(){
var self=this;
var result=nil;
(result=smalltalk.send(smalltalk.send(self, "_instanceVariableNames", []), "_copy", []));
(($receiver = smalltalk.send(self, "_superclass", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(result, "_addAll_", [smalltalk.send(smalltalk.send(self, "_superclass", []), "_allInstanceVariableNames", [])]);})() : nil;
return result;
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_allSubclasses",
smalltalk.method({
selector: "allSubclasses",
fn: function Behavior_allSubclasses(){
var self=this;
var result=nil;
(result=smalltalk.send(self, "_subclasses", []));
smalltalk.send(smalltalk.send(self, "_subclasses", []), "_do_", [(function(each){return smalltalk.send(result, "_addAll_", [smalltalk.send(each, "_allSubclasses", [])]);})]);
return result;
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_basicNew",
smalltalk.method({
selector: "basicNew",
fn: function Behavior_basicNew(){
var self=this;
return new self.fn();
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_canUnderstand_",
smalltalk.method({
selector: "canUnderstand:",
fn: function Behavior_canUnderstand_(aSelector){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_methodDictionary", []), "_keys", []), "_includes_", [smalltalk.send(aSelector, "_asString", [])]), "_or_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_superclass", []), "_notNil", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(self, "_superclass", []), "_canUnderstand_", [aSelector]);})]);})]);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_comment",
smalltalk.method({
selector: "comment",
fn: function Behavior_comment(){
var self=this;
return (($receiver = smalltalk.send(self, "_basicAt_", ["comment"])) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver;
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_comment_",
smalltalk.method({
selector: "comment:",
fn: function Behavior_comment_(aString){
var self=this;
smalltalk.send(self, "_basicAt_put_", ["comment", aString]);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_commentStamp",
smalltalk.method({
selector: "commentStamp",
fn: function Behavior_commentStamp(){
var self=this;
return (function($rec){smalltalk.send($rec, "_class_", [self]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.ClassCommentReader || ClassCommentReader), "_new", []));
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_commentStamp_prior_",
smalltalk.method({
selector: "commentStamp:prior:",
fn: function Behavior_commentStamp_prior_(aStamp, prior){
var self=this;
return smalltalk.send(self, "_commentStamp", []);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_compile_",
smalltalk.method({
selector: "compile:",
fn: function Behavior_compile_(aString){
var self=this;
smalltalk.send(self, "_compile_category_", [aString, ""]);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_compile_category_",
smalltalk.method({
selector: "compile:category:",
fn: function Behavior_compile_category_(aString, anotherString){
var self=this;
(function($rec){smalltalk.send($rec, "_install_forClass_category_", [aString, self, anotherString]);return smalltalk.send($rec, "_setupClass_", [self]);})(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []));
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_inheritsFrom_",
smalltalk.method({
selector: "inheritsFrom:",
fn: function Behavior_inheritsFrom_(aClass){
var self=this;
return smalltalk.send(smalltalk.send(aClass, "_allSubclasses", []), "_includes_", [self]);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_instanceVariableNames",
smalltalk.method({
selector: "instanceVariableNames",
fn: function Behavior_instanceVariableNames(){
var self=this;
return self.iVarNames;
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_methodAt_",
smalltalk.method({
selector: "methodAt:",
fn: function Behavior_methodAt_(aString){
var self=this;
return smalltalk.methods(self)[aString];
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_methodDictionary",
smalltalk.method({
selector: "methodDictionary",
fn: function Behavior_methodDictionary(){
var self=this;
var dict = smalltalk.HashedCollection._new();
	var methods = self.fn.prototype.methods;
	for(var i in methods) {
		if(methods[i].selector) {
			dict._at_put_(methods[i].selector, methods[i]);
		}
	};
	return dict;
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_methodsFor_",
smalltalk.method({
selector: "methodsFor:",
fn: function Behavior_methodsFor_(aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_class_category_", [self, aString]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.ClassCategoryReader || ClassCategoryReader), "_new", []));
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_methodsFor_stamp_",
smalltalk.method({
selector: "methodsFor:stamp:",
fn: function Behavior_methodsFor_stamp_(aString, aStamp){
var self=this;
return smalltalk.send(self, "_methodsFor_", [aString]);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function Behavior_name(){
var self=this;
return self.className || nil;
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function Behavior_new(){
var self=this;
return smalltalk.send(smalltalk.send(self, "_basicNew", []), "_initialize", []);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_protocols",
smalltalk.method({
selector: "protocols",
fn: function Behavior_protocols(){
var self=this;
var protocols=nil;
(protocols=smalltalk.send((smalltalk.Array || Array), "_new", []));
smalltalk.send(smalltalk.send(self, "_methodDictionary", []), "_do_", [(function(each){return ((($receiver = smalltalk.send(protocols, "_includes_", [smalltalk.send(each, "_category", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(protocols, "_add_", [smalltalk.send(each, "_category", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(protocols, "_add_", [smalltalk.send(each, "_category", [])]);})]));})]);
return smalltalk.send(protocols, "_sort", []);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_protocolsDo_",
smalltalk.method({
selector: "protocolsDo:",
fn: function Behavior_protocolsDo_(aBlock){
var self=this;
var methodsByCategory=nil;
(methodsByCategory=smalltalk.send((smalltalk.HashedCollection || HashedCollection), "_new", []));
smalltalk.send(smalltalk.send(smalltalk.send(self, "_methodDictionary", []), "_values", []), "_do_", [(function(m){return smalltalk.send(smalltalk.send(methodsByCategory, "_at_ifAbsentPut_", [smalltalk.send(m, "_category", []), (function(){return smalltalk.send((smalltalk.Array || Array), "_new", []);})]), "_add_", [m]);})]);
smalltalk.send(smalltalk.send(self, "_protocols", []), "_do_", [(function(category){return smalltalk.send(aBlock, "_value_value_", [category, smalltalk.send(methodsByCategory, "_at_", [category])]);})]);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_prototype",
smalltalk.method({
selector: "prototype",
fn: function Behavior_prototype(){
var self=this;
return self.fn.prototype;
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_removeCompiledMethod_",
smalltalk.method({
selector: "removeCompiledMethod:",
fn: function Behavior_removeCompiledMethod_(aMethod){
var self=this;
delete self.fn.prototype[aMethod.selector._asSelector()];
	delete self.fn.prototype.methods[aMethod.selector];
	smalltalk.init(self);;
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_subclasses",
smalltalk.method({
selector: "subclasses",
fn: function Behavior_subclasses(){
var self=this;
return smalltalk.subclasses(self);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_superclass",
smalltalk.method({
selector: "superclass",
fn: function Behavior_superclass(){
var self=this;
return self.superclass || nil;
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_withAllSubclasses",
smalltalk.method({
selector: "withAllSubclasses",
fn: function Behavior_withAllSubclasses(){
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [smalltalk.send(self, "_allSubclasses", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Array || Array), "_with_", [self]));
return self;}
}),
smalltalk.Behavior);



smalltalk.addClass('Class', smalltalk.Behavior, [], 'Kernel-Classes');
smalltalk.addMethod(
"_category",
smalltalk.method({
selector: "category",
fn: function Class_category(){
var self=this;
return (($receiver = smalltalk.send(self, "_package", [])) == nil || $receiver == undefined) ? (function(){return "Unclassified";})() : (function(){return smalltalk.send(smalltalk.send(self, "_package", []), "_name", []);})();
return self;}
}),
smalltalk.Class);

smalltalk.addMethod(
"_isClass",
smalltalk.method({
selector: "isClass",
fn: function Class_isClass(){
var self=this;
return true;
return self;}
}),
smalltalk.Class);

smalltalk.addMethod(
"_package",
smalltalk.method({
selector: "package",
fn: function Class_package(){
var self=this;
return self.pkg;
return self;}
}),
smalltalk.Class);

smalltalk.addMethod(
"_package_",
smalltalk.method({
selector: "package:",
fn: function Class_package_(aPackage){
var self=this;
self.pkg = aPackage;
return self;}
}),
smalltalk.Class);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function Class_printString(){
var self=this;
return smalltalk.send(self, "_name", []);
return self;}
}),
smalltalk.Class);

smalltalk.addMethod(
"_rename_",
smalltalk.method({
selector: "rename:",
fn: function Class_rename_(aString){
var self=this;

		smalltalk[aString] = self;
		delete smalltalk[self.className];
		self.className = aString;
	;
return self;}
}),
smalltalk.Class);

smalltalk.addMethod(
"_subclass_instanceVariableNames_",
smalltalk.method({
selector: "subclass:instanceVariableNames:",
fn: function Class_subclass_instanceVariableNames_(aString, anotherString){
var self=this;
return smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, anotherString, nil]);
return self;}
}),
smalltalk.Class);

smalltalk.addMethod(
"_subclass_instanceVariableNames_category_",
smalltalk.method({
selector: "subclass:instanceVariableNames:category:",
fn: function Class_subclass_instanceVariableNames_category_(aString, aString2, aString3){
var self=this;
smalltalk.send(self, "_deprecatedAPI", []);
return smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, aString2, aString3]);
return self;}
}),
smalltalk.Class);

smalltalk.addMethod(
"_subclass_instanceVariableNames_classVariableNames_poolDictionaries_category_",
smalltalk.method({
selector: "subclass:instanceVariableNames:classVariableNames:poolDictionaries:category:",
fn: function Class_subclass_instanceVariableNames_classVariableNames_poolDictionaries_category_(aString, aString2, classVars, pools, aString3){
var self=this;
return smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, aString2, aString3]);
return self;}
}),
smalltalk.Class);

smalltalk.addMethod(
"_subclass_instanceVariableNames_package_",
smalltalk.method({
selector: "subclass:instanceVariableNames:package:",
fn: function Class_subclass_instanceVariableNames_package_(aString, aString2, aString3){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.ClassBuilder || ClassBuilder), "_new", []), "_superclass_subclass_instanceVariableNames_package_", [self, smalltalk.send(aString, "_asString", []), aString2, aString3]);
return self;}
}),
smalltalk.Class);



smalltalk.addClass('Metaclass', smalltalk.Behavior, [], 'Kernel-Classes');
smalltalk.addMethod(
"_instanceClass",
smalltalk.method({
selector: "instanceClass",
fn: function Metaclass_instanceClass(){
var self=this;
return self.instanceClass;
return self;}
}),
smalltalk.Metaclass);

smalltalk.addMethod(
"_instanceVariableNames_",
smalltalk.method({
selector: "instanceVariableNames:",
fn: function Metaclass_instanceVariableNames_(aCollection){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.ClassBuilder || ClassBuilder), "_new", []), "_class_instanceVariableNames_", [self, aCollection]);
return self;}
}),
smalltalk.Metaclass);

smalltalk.addMethod(
"_isMetaclass",
smalltalk.method({
selector: "isMetaclass",
fn: function Metaclass_isMetaclass(){
var self=this;
return true;
return self;}
}),
smalltalk.Metaclass);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function Metaclass_printString(){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_instanceClass", []), "_name", []), "__comma", [" class"]);
return self;}
}),
smalltalk.Metaclass);



smalltalk.addClass('ClassBuilder', smalltalk.Object, [], 'Kernel-Classes');
smalltalk.addMethod(
"_addSubclassOf_named_instanceVariableNames_",
smalltalk.method({
selector: "addSubclassOf:named:instanceVariableNames:",
fn: function ClassBuilder_addSubclassOf_named_instanceVariableNames_(aClass, aString, aCollection){
var self=this;
smalltalk.addClass(aString, aClass, aCollection);
	    return smalltalk[aString];
return self;}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_addSubclassOf_named_instanceVariableNames_package_",
smalltalk.method({
selector: "addSubclassOf:named:instanceVariableNames:package:",
fn: function ClassBuilder_addSubclassOf_named_instanceVariableNames_package_(aClass, aString, aCollection, packageName){
var self=this;
smalltalk.addClass(aString, aClass, aCollection, packageName);
	    return smalltalk[aString];
return self;}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_class_instanceVariableNames_",
smalltalk.method({
selector: "class:instanceVariableNames:",
fn: function ClassBuilder_class_instanceVariableNames_(aClass, aString){
var self=this;
((($receiver = smalltalk.send(aClass, "_isMetaclass", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_error_", [smalltalk.send(smalltalk.send(aClass, "_name", []), "__comma", [" is not a metaclass"])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_error_", [smalltalk.send(smalltalk.send(aClass, "_name", []), "__comma", [" is not a metaclass"])]);})]));
smalltalk.send(aClass, "_basicAt_put_", ["iVarNames", smalltalk.send(self, "_instanceVariableNamesFor_", [aString])]);
smalltalk.send(self, "_setupClass_", [aClass]);
return self;}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_copyClass_named_",
smalltalk.method({
selector: "copyClass:named:",
fn: function ClassBuilder_copyClass_named_(aClass, aString){
var self=this;
var newClass=nil;
(newClass=smalltalk.send(self, "_addSubclassOf_named_instanceVariableNames_package_", [smalltalk.send(aClass, "_superclass", []), aString, smalltalk.send(aClass, "_instanceVariableNames", []), smalltalk.send(smalltalk.send(aClass, "_package", []), "_name", [])]));
smalltalk.send(self, "_setupClass_", [newClass]);
smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_methodDictionary", []), "_values", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_install_forClass_category_", [smalltalk.send(each, "_source", []), newClass, smalltalk.send(each, "_category", [])]);})]);
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_methodDictionary", []), "_values", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_install_forClass_category_", [smalltalk.send(each, "_source", []), smalltalk.send(newClass, "_class", []), smalltalk.send(each, "_category", [])]);})]);
smalltalk.send(self, "_setupClass_", [newClass]);
return newClass;
return self;}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_instanceVariableNamesFor_",
smalltalk.method({
selector: "instanceVariableNamesFor:",
fn: function ClassBuilder_instanceVariableNamesFor_(aString){
var self=this;
return smalltalk.send(smalltalk.send(aString, "_tokenize_", [" "]), "_reject_", [(function(each){return smalltalk.send(each, "_isEmpty", []);})]);
return self;}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_setupClass_",
smalltalk.method({
selector: "setupClass:",
fn: function ClassBuilder_setupClass_(aClass){
var self=this;
smalltalk.init(aClass);;
return self;}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_superclass_subclass_",
smalltalk.method({
selector: "superclass:subclass:",
fn: function ClassBuilder_superclass_subclass_(aClass, aString){
var self=this;
return smalltalk.send(self, "_superclass_subclass_instanceVariableNames_package_", [aClass, aString, "", nil]);
return self;}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_superclass_subclass_instanceVariableNames_package_",
smalltalk.method({
selector: "superclass:subclass:instanceVariableNames:package:",
fn: function ClassBuilder_superclass_subclass_instanceVariableNames_package_(aClass, aString, aString2, aString3){
var self=this;
var newClass=nil;
(newClass=smalltalk.send(self, "_addSubclassOf_named_instanceVariableNames_package_", [aClass, aString, smalltalk.send(self, "_instanceVariableNamesFor_", [aString2]), (($receiver = aString3) == nil || $receiver == undefined) ? (function(){return "unclassified";})() : $receiver]));
smalltalk.send(self, "_setupClass_", [newClass]);
return newClass;
return self;}
}),
smalltalk.ClassBuilder);



smalltalk.addClass('ClassCategoryReader', smalltalk.Object, ['class', 'category', 'chunkParser'], 'Kernel-Classes');
smalltalk.addMethod(
"_class_category_",
smalltalk.method({
selector: "class:category:",
fn: function ClassCategoryReader_class_category_(aClass, aString){
var self=this;
(self['@class']=aClass);
(self['@category']=aString);
return self;}
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
"_compileMethod_",
smalltalk.method({
selector: "compileMethod:",
fn: function ClassCategoryReader_compileMethod_(aString){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_install_forClass_category_", [aString, self['@class'], self['@category']]);
return self;}
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function ClassCategoryReader_initialize(){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.ClassCategoryReader.superclass || nil);
(self['@chunkParser']=smalltalk.send((smalltalk.ChunkParser || ChunkParser), "_new", []));
return self;}
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
"_scanFrom_",
smalltalk.method({
selector: "scanFrom:",
fn: function ClassCategoryReader_scanFrom_(aChunkParser){
var self=this;
var chunk=nil;
(function(){while(!(function(){(chunk=smalltalk.send(aChunkParser, "_nextChunk", []));return smalltalk.send(chunk, "_isEmpty", []);})()) {(function(){return smalltalk.send(self, "_compileMethod_", [chunk]);})()}})();
smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_setupClass_", [self['@class']]);
return self;}
}),
smalltalk.ClassCategoryReader);



smalltalk.addClass('ClassCommentReader', smalltalk.Object, ['class', 'chunkParser'], 'Kernel-Classes');
smalltalk.addMethod(
"_class_",
smalltalk.method({
selector: "class:",
fn: function ClassCommentReader_class_(aClass){
var self=this;
(self['@class']=aClass);
return self;}
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function ClassCommentReader_initialize(){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.ClassCommentReader.superclass || nil);
(self['@chunkParser']=smalltalk.send((smalltalk.ChunkParser || ChunkParser), "_new", []));
return self;}
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
"_scanFrom_",
smalltalk.method({
selector: "scanFrom:",
fn: function ClassCommentReader_scanFrom_(aChunkParser){
var self=this;
var chunk=nil;
(chunk=smalltalk.send(aChunkParser, "_nextChunk", []));
((($receiver = smalltalk.send(chunk, "_isEmpty", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_setComment_", [chunk]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_setComment_", [chunk]);})]));
return self;}
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
"_setComment_",
smalltalk.method({
selector: "setComment:",
fn: function ClassCommentReader_setComment_(aString){
var self=this;
smalltalk.send(self['@class'], "_comment_", [aString]);
return self;}
}),
smalltalk.ClassCommentReader);



smalltalk.addClass('ClassSorterNode', smalltalk.Object, ['theClass', 'level', 'nodes'], 'Kernel-Classes');
smalltalk.addMethod(
"_getNodesFrom_",
smalltalk.method({
selector: "getNodesFrom:",
fn: function ClassSorterNode_getNodesFrom_(aCollection){
var self=this;
var children=nil;
var others=nil;
(children=[]);
(others=[]);
smalltalk.send(aCollection, "_do_", [(function(each){return ((($receiver = smalltalk.send(smalltalk.send(each, "_superclass", []), "__eq", [smalltalk.send(self, "_theClass", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(children, "_add_", [each]);})() : (function(){return smalltalk.send(others, "_add_", [each]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(children, "_add_", [each]);}), (function(){return smalltalk.send(others, "_add_", [each]);})]));})]);
(self['@nodes']=smalltalk.send(children, "_collect_", [(function(each){return smalltalk.send((smalltalk.ClassSorterNode || ClassSorterNode), "_on_classes_level_", [each, others, ((($receiver = smalltalk.send(self, "_level", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);})]));
return self;}
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
"_level",
smalltalk.method({
selector: "level",
fn: function ClassSorterNode_level(){
var self=this;
return self['@level'];
return self;}
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
"_level_",
smalltalk.method({
selector: "level:",
fn: function ClassSorterNode_level_(anInteger){
var self=this;
(self['@level']=anInteger);
return self;}
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
fn: function ClassSorterNode_nodes(){
var self=this;
return self['@nodes'];
return self;}
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
fn: function ClassSorterNode_theClass(){
var self=this;
return self['@theClass'];
return self;}
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
fn: function ClassSorterNode_theClass_(aClass){
var self=this;
(self['@theClass']=aClass);
return self;}
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
"_traverseClassesWith_",
smalltalk.method({
selector: "traverseClassesWith:",
fn: function ClassSorterNode_traverseClassesWith_(aCollection){
var self=this;
smalltalk.send(aCollection, "_add_", [smalltalk.send(self, "_theClass", [])]);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_nodes", []), "_sorted_", [(function(a, b){return ((($receiver = smalltalk.send(smalltalk.send(a, "_theClass", []), "_name", [])).klass === smalltalk.Number) ? $receiver <=smalltalk.send(smalltalk.send(b, "_theClass", []), "_name", []) : smalltalk.send($receiver, "__lt_eq", [smalltalk.send(smalltalk.send(b, "_theClass", []), "_name", [])]));})]), "_do_", [(function(aNode){return smalltalk.send(aNode, "_traverseClassesWith_", [aCollection]);})]);
return self;}
}),
smalltalk.ClassSorterNode);


smalltalk.addMethod(
"_on_classes_level_",
smalltalk.method({
selector: "on:classes:level:",
fn: function ClassSorterNode_class_on_classes_level_(aClass, aCollection, anInteger){
var self=this;
return (function($rec){smalltalk.send($rec, "_theClass_", [aClass]);smalltalk.send($rec, "_level_", [anInteger]);smalltalk.send($rec, "_getNodesFrom_", [aCollection]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.ClassSorterNode.klass);


