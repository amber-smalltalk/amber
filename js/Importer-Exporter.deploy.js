smalltalk.addPackage('Importer-Exporter', {});
smalltalk.addClass('ChunkParser', smalltalk.Object, ['stream'], 'Importer-Exporter');
smalltalk.addMethod(
"_nextChunk",
smalltalk.method({
selector: "nextChunk",
fn: function (){
var self=this;
var $1,$2,$3;
var $early={};
try {
var char_;
var result;
var chunk;
result=smalltalk.send("","_writeStream",[]);
smalltalk.send((function(){
char_=smalltalk.send(self["@stream"],"_next",[]);
char_;
return smalltalk.send(char_,"_notNil",[]);
}),"_whileTrue_",[(function(){
$1=smalltalk.send(char_,"__eq",["!"]);
if(smalltalk.assert($1)){
$2=smalltalk.send(smalltalk.send(self["@stream"],"_peek",[]),"__eq",["!"]);
if(smalltalk.assert($2)){
smalltalk.send(self["@stream"],"_next",[]);
} else {
$3=smalltalk.send(smalltalk.send(result,"_contents",[]),"_trimBoth",[]);
throw $early=[$3];
};
};
return smalltalk.send(result,"_nextPut_",[char_]);
})]);
return nil;
}
catch(e) {if(e===$early)return e[0]; throw e}
}
}),
smalltalk.ChunkParser);

smalltalk.addMethod(
"_stream_",
smalltalk.method({
selector: "stream:",
fn: function (aStream){
var self=this;
self["@stream"]=aStream;
return self}
}),
smalltalk.ChunkParser);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aStream){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_new",[]),"_stream_",[aStream]);
return $1;
}
}),
smalltalk.ChunkParser.klass);


smalltalk.addClass('Exporter', smalltalk.Object, [], 'Importer-Exporter');
smalltalk.addMethod(
"_classNameFor_",
smalltalk.method({
selector: "classNameFor:",
fn: function (aClass){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(aClass,"_isMetaclass",[]);
if(smalltalk.assert($2)){
$1=smalltalk.send(smalltalk.send(smalltalk.send(aClass,"_instanceClass",[]),"_name",[]),"__comma",[".klass"]);
} else {
$3=smalltalk.send(aClass,"_isNil",[]);
if(smalltalk.assert($3)){
$1="nil";
} else {
$1=smalltalk.send(aClass,"_name",[]);
};
};
return $1;
}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportAll",
smalltalk.method({
selector: "exportAll",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.String || String),"_streamContents_",[(function(stream){
return smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk),"_current",[]),"_packages",[]),"_do_",[(function(pkg){
return smalltalk.send(stream,"_nextPutAll_",[smalltalk.send(self,"_exportPackage_",[smalltalk.send(pkg,"_name",[])])]);
})]);
})]);
return $1;
}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportClass_",
smalltalk.method({
selector: "exportClass:",
fn: function (aClass){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.String || String),"_streamContents_",[(function(stream){
smalltalk.send(self,"_exportDefinitionOf_on_",[aClass,stream]);
smalltalk.send(self,"_exportMethodsOf_on_",[aClass,stream]);
smalltalk.send(self,"_exportMetaDefinitionOf_on_",[aClass,stream]);
return smalltalk.send(self,"_exportMethodsOf_on_",[smalltalk.send(aClass,"_class",[]),stream]);
})]);
return $1;
}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportDefinitionOf_on_",
smalltalk.method({
selector: "exportDefinitionOf:on:",
fn: function (aClass,aStream){
var self=this;
var $1,$2,$3,$4;
smalltalk.send(aStream,"_nextPutAll_",["smalltalk.addClass("]);
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(smalltalk.send("'","__comma",[smalltalk.send(self,"_classNameFor_",[aClass])]),"__comma",["', "])]);
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send("smalltalk.","__comma",[smalltalk.send(self,"_classNameFor_",[smalltalk.send(aClass,"_superclass",[])])])]);
$1=smalltalk.send(aStream,"_nextPutAll_",[", ["]);
smalltalk.send(smalltalk.send(aClass,"_instanceVariableNames",[]),"_do_separatedBy_",[(function(each){
return smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(smalltalk.send("'","__comma",[each]),"__comma",["'"])]);
}),(function(){
return smalltalk.send(aStream,"_nextPutAll_",[", "]);
})]);
smalltalk.send(aStream,"_nextPutAll_",["], '"]);
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(smalltalk.send(aClass,"_category",[]),"__comma",["'"])]);
$2=smalltalk.send(aStream,"_nextPutAll_",[");"]);
$3=smalltalk.send(smalltalk.send(aClass,"_comment",[]),"_notEmpty",[]);
if(smalltalk.assert($3)){
smalltalk.send(aStream,"_lf",[]);
smalltalk.send(aStream,"_nextPutAll_",["smalltalk."]);
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(self,"_classNameFor_",[aClass])]);
smalltalk.send(aStream,"_nextPutAll_",[".comment="]);
$4=smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(smalltalk.send(aClass,"_comment",[]),"_asJavascript",[])]);
$4;
};
smalltalk.send(aStream,"_lf",[]);
return self}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportMetaDefinitionOf_on_",
smalltalk.method({
selector: "exportMetaDefinitionOf:on:",
fn: function (aClass,aStream){
var self=this;
var $1,$2;
$1=smalltalk.send(smalltalk.send(smalltalk.send(aClass,"_class",[]),"_instanceVariableNames",[]),"_isEmpty",[]);
if(! smalltalk.assert($1)){
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send("smalltalk.","__comma",[smalltalk.send(self,"_classNameFor_",[smalltalk.send(aClass,"_class",[])])])]);
$2=smalltalk.send(aStream,"_nextPutAll_",[".iVarNames = ["]);
$2;
smalltalk.send(smalltalk.send(smalltalk.send(aClass,"_class",[]),"_instanceVariableNames",[]),"_do_separatedBy_",[(function(each){
return smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(smalltalk.send("'","__comma",[each]),"__comma",["'"])]);
}),(function(){
return smalltalk.send(aStream,"_nextPutAll_",[","]);
})]);
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send("];","__comma",[smalltalk.send((smalltalk.String || String),"_lf",[])])]);
};
return self}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportMethod_of_on_",
smalltalk.method({
selector: "exportMethod:of:on:",
fn: function (aMethod,aClass,aStream){
var self=this;
var $1,$2;
smalltalk.send(aStream,"_nextPutAll_",["smalltalk.addMethod("]);
smalltalk.send(aStream,"_lf",[]);
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aMethod,"_selector",[]),"_asSelector",[]),"_asJavascript",[]),"__comma",[","])]);
smalltalk.send(aStream,"_lf",[]);
smalltalk.send(aStream,"_nextPutAll_",["smalltalk.method({"]);
smalltalk.send(aStream,"_lf",[]);
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(smalltalk.send("selector: ","__comma",[smalltalk.send(smalltalk.send(aMethod,"_selector",[]),"_asJavascript",[])]),"__comma",[","])]);
smalltalk.send(aStream,"_lf",[]);
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(smalltalk.send("category: '","__comma",[smalltalk.send(aMethod,"_category",[])]),"__comma",["',"])]);
smalltalk.send(aStream,"_lf",[]);
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(smalltalk.send("fn: ","__comma",[smalltalk.send(smalltalk.send(aMethod,"_fn",[]),"_compiledSource",[])]),"__comma",[","])]);
smalltalk.send(aStream,"_lf",[]);
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(smalltalk.send("args: ","__comma",[smalltalk.send(smalltalk.send(aMethod,"_arguments",[]),"_asJavascript",[])]),"__comma",[","])]);
smalltalk.send(aStream,"_lf",[]);
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(smalltalk.send("source: ","__comma",[smalltalk.send(smalltalk.send(aMethod,"_source",[]),"_asJavascript",[])]),"__comma",[","])]);
smalltalk.send(aStream,"_lf",[]);
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(smalltalk.send("messageSends: ","__comma",[smalltalk.send(smalltalk.send(aMethod,"_messageSends",[]),"_asJavascript",[])]),"__comma",[","])]);
smalltalk.send(aStream,"_lf",[]);
$1=smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send("referencedClasses: ","__comma",[smalltalk.send(smalltalk.send(aMethod,"_referencedClasses",[]),"_asJavascript",[])])]);
smalltalk.send(aStream,"_lf",[]);
smalltalk.send(aStream,"_nextPutAll_",["}),"]);
smalltalk.send(aStream,"_lf",[]);
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send("smalltalk.","__comma",[smalltalk.send(self,"_classNameFor_",[aClass])])]);
smalltalk.send(aStream,"_nextPutAll_",[");"]);
smalltalk.send(aStream,"_lf",[]);
$2=smalltalk.send(aStream,"_lf",[]);
return self}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportMethodsOf_on_",
smalltalk.method({
selector: "exportMethodsOf:on:",
fn: function (aClass,aStream){
var self=this;
var $1;
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aClass,"_methodDictionary",[]),"_values",[]),"_sorted_",[(function(a,b){
return smalltalk.send(smalltalk.send(a,"_selector",[]),"__lt_eq",[smalltalk.send(b,"_selector",[])]);
})]),"_do_",[(function(each){
$1=smalltalk.send(smalltalk.send(each,"_category",[]),"_match_",["^\x5c*"]);
if(! smalltalk.assert($1)){
return smalltalk.send(self,"_exportMethod_of_on_",[each,aClass,aStream]);
};
})]);
smalltalk.send(aStream,"_lf",[]);
return self}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportPackage_",
smalltalk.method({
selector: "exportPackage:",
fn: function (packageName){
var self=this;
var $1;
var package;
$1=smalltalk.send((smalltalk.String || String),"_streamContents_",[(function(stream){
package=smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk),"_current",[]),"_packageAt_",[packageName]);
package;
smalltalk.send(self,"_exportPackageDefinitionOf_on_",[package,stream]);
smalltalk.send(smalltalk.send(smalltalk.send(package,"_sortedClasses",[]),"_asSet",[]),"_do_",[(function(each){
return smalltalk.send(stream,"_nextPutAll_",[smalltalk.send(self,"_exportClass_",[each])]);
})]);
return smalltalk.send(self,"_exportPackageExtensionsOf_on_",[package,stream]);
})]);
return $1;
}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportPackageDefinitionOf_on_",
smalltalk.method({
selector: "exportPackageDefinitionOf:on:",
fn: function (package,aStream){
var self=this;
var $1;
smalltalk.send(aStream,"_nextPutAll_",["smalltalk.addPackage("]);
$1=smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("'","__comma",[smalltalk.send(package,"_name",[])]),"__comma",["', "]),"__comma",[smalltalk.send(package,"_propertiesAsJSON",[])]),"__comma",[");"])]);
smalltalk.send(aStream,"_lf",[]);
return self}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportPackageExtensionsOf_on_",
smalltalk.method({
selector: "exportPackageExtensionsOf:on:",
fn: function (package,aStream){
var self=this;
var $1;
var name;
name=smalltalk.send(package,"_name",[]);
smalltalk.send(smalltalk.send((smalltalk.Package || Package),"_sortedClasses_",[smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk),"_current",[]),"_classes",[])]),"_do_",[(function(each){
return smalltalk.send([each,smalltalk.send(each,"_class",[])],"_do_",[(function(aClass){
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aClass,"_methodDictionary",[]),"_values",[]),"_sorted_",[(function(a,b){
return smalltalk.send(smalltalk.send(a,"_selector",[]),"__lt_eq",[smalltalk.send(b,"_selector",[])]);
})]),"_do_",[(function(method){
$1=smalltalk.send(smalltalk.send(method,"_category",[]),"_match_",[smalltalk.send("^\x5c*","__comma",[name])]);
if(smalltalk.assert($1)){
return smalltalk.send(self,"_exportMethod_of_on_",[method,aClass,aStream]);
};
})]);
})]);
})]);
return self}
}),
smalltalk.Exporter);



smalltalk.addClass('ChunkExporter', smalltalk.Exporter, [], 'Importer-Exporter');
smalltalk.addMethod(
"_chunkEscape_",
smalltalk.method({
selector: "chunkEscape:",
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(aString,"_replace_with_",["!","!!"]),"_trimBoth",[]);
return $1;
}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_classNameFor_",
smalltalk.method({
selector: "classNameFor:",
fn: function (aClass){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(aClass,"_isMetaclass",[]);
if(smalltalk.assert($2)){
$1=smalltalk.send(smalltalk.send(smalltalk.send(aClass,"_instanceClass",[]),"_name",[]),"__comma",[" class"]);
} else {
$3=smalltalk.send(aClass,"_isNil",[]);
if(smalltalk.assert($3)){
$1="nil";
} else {
$1=smalltalk.send(aClass,"_name",[]);
};
};
return $1;
}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportDefinitionOf_on_",
smalltalk.method({
selector: "exportDefinitionOf:on:",
fn: function (aClass,aStream){
var self=this;
var $1,$2,$3,$4;
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(self,"_classNameFor_",[smalltalk.send(aClass,"_superclass",[])])]);
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(" subclass: #","__comma",[smalltalk.send(self,"_classNameFor_",[aClass])])]);
smalltalk.send(aStream,"_lf",[]);
$1=smalltalk.send(aStream,"_nextPutAll_",["\x09instanceVariableNames: '"]);
smalltalk.send(smalltalk.send(aClass,"_instanceVariableNames",[]),"_do_separatedBy_",[(function(each){
return smalltalk.send(aStream,"_nextPutAll_",[each]);
}),(function(){
return smalltalk.send(aStream,"_nextPutAll_",[" "]);
})]);
smalltalk.send(aStream,"_nextPutAll_",["'"]);
smalltalk.send(aStream,"_lf",[]);
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(smalltalk.send("\x09package: '","__comma",[smalltalk.send(aClass,"_category",[])]),"__comma",["'!"])]);
$2=smalltalk.send(aStream,"_lf",[]);
$3=smalltalk.send(smalltalk.send(aClass,"_comment",[]),"_notEmpty",[]);
if(smalltalk.assert($3)){
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(smalltalk.send("!","__comma",[smalltalk.send(self,"_classNameFor_",[aClass])]),"__comma",[" commentStamp!"])]);
smalltalk.send(aStream,"_lf",[]);
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(smalltalk.send(self,"_chunkEscape_",[smalltalk.send(aClass,"_comment",[])]),"__comma",["!"])]);
$4=smalltalk.send(aStream,"_lf",[]);
$4;
};
smalltalk.send(aStream,"_lf",[]);
return self}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportMetaDefinitionOf_on_",
smalltalk.method({
selector: "exportMetaDefinitionOf:on:",
fn: function (aClass,aStream){
var self=this;
var $1,$2,$3;
$1=smalltalk.send(smalltalk.send(smalltalk.send(aClass,"_class",[]),"_instanceVariableNames",[]),"_isEmpty",[]);
if(! smalltalk.assert($1)){
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(self,"_classNameFor_",[smalltalk.send(aClass,"_class",[])])]);
$2=smalltalk.send(aStream,"_nextPutAll_",[" instanceVariableNames: '"]);
$2;
smalltalk.send(smalltalk.send(smalltalk.send(aClass,"_class",[]),"_instanceVariableNames",[]),"_do_separatedBy_",[(function(each){
return smalltalk.send(aStream,"_nextPutAll_",[each]);
}),(function(){
return smalltalk.send(aStream,"_nextPutAll_",[" "]);
})]);
smalltalk.send(aStream,"_nextPutAll_",["'!"]);
smalltalk.send(aStream,"_lf",[]);
$3=smalltalk.send(aStream,"_lf",[]);
$3;
};
return self}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportMethod_of_on_",
smalltalk.method({
selector: "exportMethod:of:on:",
fn: function (aMethod,aClass,aStream){
var self=this;
var $1;
smalltalk.send(aStream,"_lf",[]);
smalltalk.send(aStream,"_lf",[]);
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(self,"_chunkEscape_",[smalltalk.send(aMethod,"_source",[])])]);
smalltalk.send(aStream,"_lf",[]);
$1=smalltalk.send(aStream,"_nextPutAll_",["!"]);
return self}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportMethods_category_of_on_",
smalltalk.method({
selector: "exportMethods:category:of:on:",
fn: function (methods,category,aClass,aStream){
var self=this;
var $1,$2;
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send("!","__comma",[smalltalk.send(self,"_classNameFor_",[aClass])])]);
$1=smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(smalltalk.send(" methodsFor: '","__comma",[category]),"__comma",["'!"])]);
smalltalk.send(smalltalk.send(methods,"_sorted_",[(function(a,b){
return smalltalk.send(smalltalk.send(a,"_selector",[]),"__lt_eq",[smalltalk.send(b,"_selector",[])]);
})]),"_do_",[(function(each){
return smalltalk.send(self,"_exportMethod_of_on_",[each,aClass,aStream]);
})]);
smalltalk.send(aStream,"_nextPutAll_",[" !"]);
smalltalk.send(aStream,"_lf",[]);
$2=smalltalk.send(aStream,"_lf",[]);
return self}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportMethodsOf_on_",
smalltalk.method({
selector: "exportMethodsOf:on:",
fn: function (aClass,aStream){
var self=this;
var $1;
var map;
map=smalltalk.send((smalltalk.Dictionary || Dictionary),"_new",[]);
smalltalk.send(aClass,"_protocolsDo_",[(function(category,methods){
$1=smalltalk.send(category,"_match_",["^\x5c*"]);
if(! smalltalk.assert($1)){
return smalltalk.send(map,"_at_put_",[category,methods]);
};
})]);
smalltalk.send(smalltalk.send(smalltalk.send(map,"_keys",[]),"_sorted_",[(function(a,b){
return smalltalk.send(a,"__lt_eq",[b]);
})]),"_do_",[(function(category){
var methods;
methods=smalltalk.send(map,"_at_",[category]);
methods;
return smalltalk.send(self,"_exportMethods_category_of_on_",[methods,category,aClass,aStream]);
})]);
return self}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportPackageDefinitionOf_on_",
smalltalk.method({
selector: "exportPackageDefinitionOf:on:",
fn: function (package,aStream){
var self=this;
var $1;
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("Smalltalk current createPackage: '","__comma",[smalltalk.send(package,"_name",[])]),"__comma",["' properties: "]),"__comma",[smalltalk.send(smalltalk.send(package,"_properties",[]),"_storeString",[])]),"__comma",["!"])]);
$1=smalltalk.send(aStream,"_lf",[]);
return self}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportPackageExtensionsOf_on_",
smalltalk.method({
selector: "exportPackageExtensionsOf:on:",
fn: function (package,aStream){
var self=this;
var $1;
var name;
var map;
name=smalltalk.send(package,"_name",[]);
smalltalk.send(smalltalk.send((smalltalk.Package || Package),"_sortedClasses_",[smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk),"_current",[]),"_classes",[])]),"_do_",[(function(each){
return smalltalk.send([each,smalltalk.send(each,"_class",[])],"_do_",[(function(aClass){
map=smalltalk.send((smalltalk.Dictionary || Dictionary),"_new",[]);
map;
smalltalk.send(aClass,"_protocolsDo_",[(function(category,methods){
$1=smalltalk.send(category,"_match_",[smalltalk.send("^\x5c*","__comma",[name])]);
if(smalltalk.assert($1)){
return smalltalk.send(map,"_at_put_",[category,methods]);
};
})]);
return smalltalk.send(smalltalk.send(smalltalk.send(map,"_keys",[]),"_sorted_",[(function(a,b){
return smalltalk.send(a,"__lt_eq",[b]);
})]),"_do_",[(function(category){
var methods;
methods=smalltalk.send(map,"_at_",[category]);
methods;
return smalltalk.send(self,"_exportMethods_category_of_on_",[methods,category,aClass,aStream]);
})]);
})]);
})]);
return self}
}),
smalltalk.ChunkExporter);



smalltalk.addClass('StrippedExporter', smalltalk.Exporter, [], 'Importer-Exporter');
smalltalk.addMethod(
"_exportDefinitionOf_on_",
smalltalk.method({
selector: "exportDefinitionOf:on:",
fn: function (aClass,aStream){
var self=this;
var $1,$2;
smalltalk.send(aStream,"_nextPutAll_",["smalltalk.addClass("]);
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(smalltalk.send("'","__comma",[smalltalk.send(self,"_classNameFor_",[aClass])]),"__comma",["', "])]);
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send("smalltalk.","__comma",[smalltalk.send(self,"_classNameFor_",[smalltalk.send(aClass,"_superclass",[])])])]);
$1=smalltalk.send(aStream,"_nextPutAll_",[", ["]);
smalltalk.send(smalltalk.send(aClass,"_instanceVariableNames",[]),"_do_separatedBy_",[(function(each){
return smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(smalltalk.send("'","__comma",[each]),"__comma",["'"])]);
}),(function(){
return smalltalk.send(aStream,"_nextPutAll_",[", "]);
})]);
smalltalk.send(aStream,"_nextPutAll_",["], '"]);
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(smalltalk.send(aClass,"_category",[]),"__comma",["'"])]);
$2=smalltalk.send(aStream,"_nextPutAll_",[");"]);
smalltalk.send(aStream,"_lf",[]);
return self}
}),
smalltalk.StrippedExporter);

smalltalk.addMethod(
"_exportMethod_of_on_",
smalltalk.method({
selector: "exportMethod:of:on:",
fn: function (aMethod,aClass,aStream){
var self=this;
var $1;
smalltalk.send(aStream,"_nextPutAll_",["smalltalk.addMethod("]);
smalltalk.send(aStream,"_lf",[]);
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aMethod,"_selector",[]),"_asSelector",[]),"_asJavascript",[]),"__comma",[","])]);
smalltalk.send(aStream,"_lf",[]);
smalltalk.send(aStream,"_nextPutAll_",["smalltalk.method({"]);
smalltalk.send(aStream,"_lf",[]);
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(smalltalk.send("selector: ","__comma",[smalltalk.send(smalltalk.send(aMethod,"_selector",[]),"_asJavascript",[])]),"__comma",[","])]);
smalltalk.send(aStream,"_lf",[]);
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send("fn: ","__comma",[smalltalk.send(smalltalk.send(aMethod,"_fn",[]),"_compiledSource",[])])]);
smalltalk.send(aStream,"_lf",[]);
smalltalk.send(aStream,"_nextPutAll_",["}),"]);
smalltalk.send(aStream,"_lf",[]);
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send("smalltalk.","__comma",[smalltalk.send(self,"_classNameFor_",[aClass])])]);
smalltalk.send(aStream,"_nextPutAll_",[");"]);
smalltalk.send(aStream,"_lf",[]);
$1=smalltalk.send(aStream,"_lf",[]);
return self}
}),
smalltalk.StrippedExporter);



smalltalk.addClass('Importer', smalltalk.Object, [], 'Importer-Exporter');
smalltalk.addMethod(
"_import_",
smalltalk.method({
selector: "import:",
fn: function (aStream){
var self=this;
var $1;
var chunk;
var result;
var parser;
var lastEmpty;
parser=smalltalk.send((smalltalk.ChunkParser || ChunkParser),"_on_",[aStream]);
lastEmpty=false;
smalltalk.send((function(){
chunk=smalltalk.send(parser,"_nextChunk",[]);
chunk;
return smalltalk.send(chunk,"_isNil",[]);
}),"_whileFalse_",[(function(){
$1=smalltalk.send(chunk,"_isEmpty",[]);
if(smalltalk.assert($1)){
lastEmpty=true;
return lastEmpty;
} else {
result=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler),"_new",[]),"_evaluateExpression_",[chunk]);
result;
if(smalltalk.assert(lastEmpty)){
lastEmpty=false;
lastEmpty;
return smalltalk.send(result,"_scanFrom_",[parser]);
};
};
})]);
return self}
}),
smalltalk.Importer);



