smalltalk.addPackage('Kernel-Classes', {});
smalltalk.addClass('Behavior', smalltalk.Object, [], 'Kernel-Classes');
smalltalk.addMethod(
unescape('_addCompiledMethod_'),
smalltalk.method({
selector: unescape('addCompiledMethod%3A'),
fn: function (aMethod){
var self=this;
smalltalk.addMethod(aMethod.selector._asSelector(), aMethod, self);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_allInstanceVariableNames'),
smalltalk.method({
selector: unescape('allInstanceVariableNames'),
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(smalltalk.send(self, "_instanceVariableNames", []), "_copy", []));
(($receiver = smalltalk.send(self, "_superclass", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(result, "_addAll_", [smalltalk.send(smalltalk.send(self, "_superclass", []), "_allInstanceVariableNames", [])]);})() : nil;
return result;
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_allSubclasses'),
smalltalk.method({
selector: unescape('allSubclasses'),
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(self, "_subclasses", []));
smalltalk.send(smalltalk.send(self, "_subclasses", []), "_do_", [(function(each){return smalltalk.send(result, "_addAll_", [smalltalk.send(each, "_allSubclasses", [])]);})]);
return result;
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_basicNew'),
smalltalk.method({
selector: unescape('basicNew'),
fn: function (){
var self=this;
return new self.fn();
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_comment'),
smalltalk.method({
selector: unescape('comment'),
fn: function (){
var self=this;
return (($receiver = smalltalk.send(self, "_basicAt_", ["comment"])) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver;
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_comment_'),
smalltalk.method({
selector: unescape('comment%3A'),
fn: function (aString){
var self=this;
smalltalk.send(self, "_basicAt_put_", ["comment", aString]);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_commentStamp'),
smalltalk.method({
selector: unescape('commentStamp'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_class_", [self]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.ClassCommentReader || ClassCommentReader), "_new", []));
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_commentStamp_prior_'),
smalltalk.method({
selector: unescape('commentStamp%3Aprior%3A'),
fn: function (aStamp, prior){
var self=this;
return smalltalk.send(self, "_commentStamp", []);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_compile_'),
smalltalk.method({
selector: unescape('compile%3A'),
fn: function (aString){
var self=this;
smalltalk.send(self, "_compile_category_", [aString, ""]);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_compile_category_'),
smalltalk.method({
selector: unescape('compile%3Acategory%3A'),
fn: function (aString, anotherString){
var self=this;
var method=nil;
(method=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_load_forClass_", [aString, self]));
smalltalk.send(method, "_category_", [anotherString]);
smalltalk.send(self, "_addCompiledMethod_", [method]);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_inheritsFrom_'),
smalltalk.method({
selector: unescape('inheritsFrom%3A'),
fn: function (aClass){
var self=this;
return smalltalk.send(smalltalk.send(aClass, "_allSubclasses", []), "_includes_", [self]);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_instanceVariableNames'),
smalltalk.method({
selector: unescape('instanceVariableNames'),
fn: function (){
var self=this;
return self.iVarNames;
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_methodAt_'),
smalltalk.method({
selector: unescape('methodAt%3A'),
fn: function (aString){
var self=this;
return smalltalk.methods(self)[aString];
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_methodDictionary'),
smalltalk.method({
selector: unescape('methodDictionary'),
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
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_methodsFor_'),
smalltalk.method({
selector: unescape('methodsFor%3A'),
fn: function (aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_class_category_", [self, aString]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.ClassCategoryReader || ClassCategoryReader), "_new", []));
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_methodsFor_stamp_'),
smalltalk.method({
selector: unescape('methodsFor%3Astamp%3A'),
fn: function (aString, aStamp){
var self=this;
return smalltalk.send(self, "_methodsFor_", [aString]);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_name'),
smalltalk.method({
selector: unescape('name'),
fn: function (){
var self=this;
return self.className || nil;
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_new'),
smalltalk.method({
selector: unescape('new'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_basicNew", []), "_initialize", []);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_protocols'),
smalltalk.method({
selector: unescape('protocols'),
fn: function (){
var self=this;
var protocols=nil;
(protocols=smalltalk.send((smalltalk.Array || Array), "_new", []));
smalltalk.send(smalltalk.send(self, "_methodDictionary", []), "_do_", [(function(each){return ((($receiver = smalltalk.send(protocols, "_includes_", [smalltalk.send(each, "_category", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(protocols, "_add_", [smalltalk.send(each, "_category", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(protocols, "_add_", [smalltalk.send(each, "_category", [])]);})]));})]);
return smalltalk.send(protocols, "_sort", []);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_protocolsDo_'),
smalltalk.method({
selector: unescape('protocolsDo%3A'),
fn: function (aBlock){
var self=this;
var methodsByCategory=nil;
(methodsByCategory=smalltalk.send((smalltalk.HashedCollection || HashedCollection), "_new", []));
smalltalk.send(smalltalk.send(smalltalk.send(self, "_methodDictionary", []), "_values", []), "_do_", [(function(m){return smalltalk.send(smalltalk.send(methodsByCategory, "_at_ifAbsentPut_", [smalltalk.send(m, "_category", []), (function(){return smalltalk.send((smalltalk.Array || Array), "_new", []);})]), "_add_", [m]);})]);
smalltalk.send(smalltalk.send(self, "_protocols", []), "_do_", [(function(category){return smalltalk.send(aBlock, "_value_value_", [category, smalltalk.send(methodsByCategory, "_at_", [category])]);})]);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_prototype'),
smalltalk.method({
selector: unescape('prototype'),
fn: function (){
var self=this;
return self.fn.prototype;
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_removeCompiledMethod_'),
smalltalk.method({
selector: unescape('removeCompiledMethod%3A'),
fn: function (aMethod){
var self=this;
delete self.fn.prototype[aMethod.selector._asSelector()];
	delete self.fn.prototype.methods[aMethod.selector];
	smalltalk.init(self);;
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_subclasses'),
smalltalk.method({
selector: unescape('subclasses'),
fn: function (){
var self=this;
return smalltalk.subclasses(self);
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_superclass'),
smalltalk.method({
selector: unescape('superclass'),
fn: function (){
var self=this;
return self.superclass || nil;
return self;}
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_withAllSubclasses'),
smalltalk.method({
selector: unescape('withAllSubclasses'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [smalltalk.send(self, "_allSubclasses", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Array || Array), "_with_", [self]));
return self;}
}),
smalltalk.Behavior);



smalltalk.addClass('Class', smalltalk.Behavior, [], 'Kernel-Classes');
smalltalk.addMethod(
unescape('_category'),
smalltalk.method({
selector: unescape('category'),
fn: function (){
var self=this;
return (($receiver = smalltalk.send(self, "_package", [])) == nil || $receiver == undefined) ? (function(){return "Unclassified";})() : (function(){return smalltalk.send(smalltalk.send(self, "_package", []), "_name", []);})();
return self;}
}),
smalltalk.Class);

smalltalk.addMethod(
unescape('_isClass'),
smalltalk.method({
selector: unescape('isClass'),
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.Class);

smalltalk.addMethod(
unescape('_package'),
smalltalk.method({
selector: unescape('package'),
fn: function (){
var self=this;
return self.pkg;
return self;}
}),
smalltalk.Class);

smalltalk.addMethod(
unescape('_package_'),
smalltalk.method({
selector: unescape('package%3A'),
fn: function (aPackage){
var self=this;
self.pkg = aPackage;
return self;}
}),
smalltalk.Class);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
fn: function (){
var self=this;
return smalltalk.send(self, "_name", []);
return self;}
}),
smalltalk.Class);

smalltalk.addMethod(
unescape('_rename_'),
smalltalk.method({
selector: unescape('rename%3A'),
fn: function (aString){
var self=this;

		smalltalk[aString] = self;
		delete smalltalk[self.className];
		self.className = aString;
	;
return self;}
}),
smalltalk.Class);

smalltalk.addMethod(
unescape('_subclass_instanceVariableNames_'),
smalltalk.method({
selector: unescape('subclass%3AinstanceVariableNames%3A'),
fn: function (aString, anotherString){
var self=this;
return smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, anotherString, nil]);
return self;}
}),
smalltalk.Class);

smalltalk.addMethod(
unescape('_subclass_instanceVariableNames_category_'),
smalltalk.method({
selector: unescape('subclass%3AinstanceVariableNames%3Acategory%3A'),
fn: function (aString, aString2, aString3){
var self=this;
smalltalk.send(self, "_deprecatedAPI", []);
return smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, aString2, aString3]);
return self;}
}),
smalltalk.Class);

smalltalk.addMethod(
unescape('_subclass_instanceVariableNames_classVariableNames_poolDictionaries_category_'),
smalltalk.method({
selector: unescape('subclass%3AinstanceVariableNames%3AclassVariableNames%3ApoolDictionaries%3Acategory%3A'),
fn: function (aString, aString2, classVars, pools, aString3){
var self=this;
return smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, aString2, aString3]);
return self;}
}),
smalltalk.Class);

smalltalk.addMethod(
unescape('_subclass_instanceVariableNames_package_'),
smalltalk.method({
selector: unescape('subclass%3AinstanceVariableNames%3Apackage%3A'),
fn: function (aString, aString2, aString3){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.ClassBuilder || ClassBuilder), "_new", []), "_superclass_subclass_instanceVariableNames_package_", [self, smalltalk.send(aString, "_asString", []), aString2, aString3]);
return self;}
}),
smalltalk.Class);



smalltalk.addClass('Metaclass', smalltalk.Behavior, [], 'Kernel-Classes');
smalltalk.addMethod(
unescape('_instanceClass'),
smalltalk.method({
selector: unescape('instanceClass'),
fn: function (){
var self=this;
return self.instanceClass;
return self;}
}),
smalltalk.Metaclass);

smalltalk.addMethod(
unescape('_instanceVariableNames_'),
smalltalk.method({
selector: unescape('instanceVariableNames%3A'),
fn: function (aCollection){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.ClassBuilder || ClassBuilder), "_new", []), "_class_instanceVariableNames_", [self, aCollection]);
return self;}
}),
smalltalk.Metaclass);

smalltalk.addMethod(
unescape('_isMetaclass'),
smalltalk.method({
selector: unescape('isMetaclass'),
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.Metaclass);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_instanceClass", []), "_name", []), "__comma", [" class"]);
return self;}
}),
smalltalk.Metaclass);



smalltalk.addClass('ClassBuilder', smalltalk.Object, [], 'Kernel-Classes');
smalltalk.addMethod(
unescape('_addSubclassOf_named_instanceVariableNames_'),
smalltalk.method({
selector: unescape('addSubclassOf%3Anamed%3AinstanceVariableNames%3A'),
fn: function (aClass, aString, aCollection){
var self=this;
smalltalk.addClass(aString, aClass, aCollection);
	    return smalltalk[aString];
return self;}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
unescape('_addSubclassOf_named_instanceVariableNames_package_'),
smalltalk.method({
selector: unescape('addSubclassOf%3Anamed%3AinstanceVariableNames%3Apackage%3A'),
fn: function (aClass, aString, aCollection, packageName){
var self=this;
smalltalk.addClass(aString, aClass, aCollection, packageName);
	    return smalltalk[aString];
return self;}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
unescape('_class_instanceVariableNames_'),
smalltalk.method({
selector: unescape('class%3AinstanceVariableNames%3A'),
fn: function (aClass, aString){
var self=this;
((($receiver = smalltalk.send(aClass, "_isMetaclass", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_error_", [smalltalk.send(smalltalk.send(aClass, "_name", []), "__comma", [" is not a metaclass"])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_error_", [smalltalk.send(smalltalk.send(aClass, "_name", []), "__comma", [" is not a metaclass"])]);})]));
smalltalk.send(aClass, "_basicAt_put_", ["iVarNames", smalltalk.send(self, "_instanceVariableNamesFor_", [aString])]);
smalltalk.send(self, "_setupClass_", [aClass]);
return self;}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
unescape('_copyClass_named_'),
smalltalk.method({
selector: unescape('copyClass%3Anamed%3A'),
fn: function (aClass, aString){
var self=this;
var newClass=nil;
(newClass=smalltalk.send(self, "_addSubclassOf_named_instanceVariableNames_package_", [smalltalk.send(aClass, "_superclass", []), aString, smalltalk.send(aClass, "_instanceVariableNames", []), smalltalk.send(smalltalk.send(aClass, "_package", []), "_name", [])]));
smalltalk.send(self, "_setupClass_", [newClass]);
smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_methodDictionary", []), "_values", []), "_do_", [(function(each){smalltalk.send(newClass, "_addCompiledMethod_", [smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_load_forClass_", [smalltalk.send(each, "_source", []), newClass])]);return smalltalk.send(smalltalk.send(smalltalk.send(newClass, "_methodDictionary", []), "_at_", [smalltalk.send(each, "_selector", [])]), "_category_", [smalltalk.send(each, "_category", [])]);})]);
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_methodDictionary", []), "_values", []), "_do_", [(function(each){smalltalk.send(smalltalk.send(newClass, "_class", []), "_addCompiledMethod_", [smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_load_forClass_", [smalltalk.send(each, "_source", []), smalltalk.send(newClass, "_class", [])])]);return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(newClass, "_class", []), "_methodDictionary", []), "_at_", [smalltalk.send(each, "_selector", [])]), "_category_", [smalltalk.send(each, "_category", [])]);})]);
smalltalk.send(self, "_setupClass_", [newClass]);
return newClass;
return self;}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
unescape('_instanceVariableNamesFor_'),
smalltalk.method({
selector: unescape('instanceVariableNamesFor%3A'),
fn: function (aString){
var self=this;
return smalltalk.send(smalltalk.send(aString, "_tokenize_", [" "]), "_reject_", [(function(each){return smalltalk.send(each, "_isEmpty", []);})]);
return self;}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
unescape('_setupClass_'),
smalltalk.method({
selector: unescape('setupClass%3A'),
fn: function (aClass){
var self=this;
smalltalk.init(aClass);;
return self;}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
unescape('_superclass_subclass_'),
smalltalk.method({
selector: unescape('superclass%3Asubclass%3A'),
fn: function (aClass, aString){
var self=this;
return smalltalk.send(self, "_superclass_subclass_instanceVariableNames_package_", [aClass, aString, "", nil]);
return self;}
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
unescape('_superclass_subclass_instanceVariableNames_package_'),
smalltalk.method({
selector: unescape('superclass%3Asubclass%3AinstanceVariableNames%3Apackage%3A'),
fn: function (aClass, aString, aString2, aString3){
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
unescape('_class_category_'),
smalltalk.method({
selector: unescape('class%3Acategory%3A'),
fn: function (aClass, aString){
var self=this;
(self['@class']=aClass);
(self['@category']=aString);
return self;}
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
unescape('_compileMethod_'),
smalltalk.method({
selector: unescape('compileMethod%3A'),
fn: function (aString){
var self=this;
var method=nil;
var compiler=nil;
(method=smalltalk.send((compiler=smalltalk.send((smalltalk.Compiler || Compiler), "_new", [])), "_load_forClass_", [aString, self['@class']]));
smalltalk.send(method, "_category_", [self['@category']]);
smalltalk.send(self['@class'], "_addCompiledMethod_", [method]);
smalltalk.send(compiler, "_setupClass_", [self['@class']]);
return self;}
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
(self['@chunkParser']=smalltalk.send((smalltalk.ChunkParser || ChunkParser), "_new", []));
return self;}
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
unescape('_scanFrom_'),
smalltalk.method({
selector: unescape('scanFrom%3A'),
fn: function (aChunkParser){
var self=this;
var chunk=nil;
(function(){while(!(function(){(chunk=smalltalk.send(aChunkParser, "_nextChunk", []));return smalltalk.send(chunk, "_isEmpty", []);})()) {(function(){return smalltalk.send(self, "_compileMethod_", [chunk]);})()}})();
return self;}
}),
smalltalk.ClassCategoryReader);



smalltalk.addClass('ClassCommentReader', smalltalk.Object, ['class', 'chunkParser'], 'Kernel-Classes');
smalltalk.addMethod(
unescape('_class_'),
smalltalk.method({
selector: unescape('class%3A'),
fn: function (aClass){
var self=this;
(self['@class']=aClass);
return self;}
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
(self['@chunkParser']=smalltalk.send((smalltalk.ChunkParser || ChunkParser), "_new", []));
return self;}
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
unescape('_scanFrom_'),
smalltalk.method({
selector: unescape('scanFrom%3A'),
fn: function (aChunkParser){
var self=this;
var chunk=nil;
(chunk=smalltalk.send(aChunkParser, "_nextChunk", []));
((($receiver = smalltalk.send(chunk, "_isEmpty", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_setComment_", [chunk]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_setComment_", [chunk]);})]));
return self;}
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
unescape('_setComment_'),
smalltalk.method({
selector: unescape('setComment%3A'),
fn: function (aString){
var self=this;
smalltalk.send(self['@class'], "_comment_", [aString]);
return self;}
}),
smalltalk.ClassCommentReader);



smalltalk.addClass('ClassSorterNode', smalltalk.Object, ['theClass', 'level', 'nodes'], 'Kernel-Classes');
smalltalk.addMethod(
unescape('_getNodesFrom_'),
smalltalk.method({
selector: unescape('getNodesFrom%3A'),
fn: function (aCollection){
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
unescape('_level'),
smalltalk.method({
selector: unescape('level'),
fn: function (){
var self=this;
return self['@level'];
return self;}
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
unescape('_level_'),
smalltalk.method({
selector: unescape('level%3A'),
fn: function (anInteger){
var self=this;
(self['@level']=anInteger);
return self;}
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
unescape('_nodes'),
smalltalk.method({
selector: unescape('nodes'),
fn: function (){
var self=this;
return self['@nodes'];
return self;}
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
unescape('_theClass'),
smalltalk.method({
selector: unescape('theClass'),
fn: function (){
var self=this;
return self['@theClass'];
return self;}
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
unescape('_theClass_'),
smalltalk.method({
selector: unescape('theClass%3A'),
fn: function (aClass){
var self=this;
(self['@theClass']=aClass);
return self;}
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
unescape('_traverseClassesWith_'),
smalltalk.method({
selector: unescape('traverseClassesWith%3A'),
fn: function (aCollection){
var self=this;
smalltalk.send(aCollection, "_add_", [smalltalk.send(self, "_theClass", [])]);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_nodes", []), "_sorted_", [(function(a, b){return ((($receiver = smalltalk.send(smalltalk.send(a, "_theClass", []), "_name", [])).klass === smalltalk.Number) ? $receiver <=smalltalk.send(smalltalk.send(b, "_theClass", []), "_name", []) : smalltalk.send($receiver, "__lt_eq", [smalltalk.send(smalltalk.send(b, "_theClass", []), "_name", [])]));})]), "_do_", [(function(aNode){return smalltalk.send(aNode, "_traverseClassesWith_", [aCollection]);})]);
return self;}
}),
smalltalk.ClassSorterNode);


smalltalk.addMethod(
unescape('_on_classes_level_'),
smalltalk.method({
selector: unescape('on%3Aclasses%3Alevel%3A'),
fn: function (aClass, aCollection, anInteger){
var self=this;
return (function($rec){smalltalk.send($rec, "_theClass_", [aClass]);smalltalk.send($rec, "_level_", [anInteger]);smalltalk.send($rec, "_getNodesFrom_", [aCollection]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.ClassSorterNode.klass);


