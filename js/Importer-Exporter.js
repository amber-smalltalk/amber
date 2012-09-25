smalltalk.addPackage('Importer-Exporter', {});
smalltalk.addClass('ChunkParser', smalltalk.Object, ['stream'], 'Importer-Exporter');
smalltalk.addMethod(
"_nextChunk",
smalltalk.method({
selector: "nextChunk",
category: 'reading',
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
},
args: [],
source: "nextChunk\x0a\x09\x22The chunk format (Smalltalk Interchange Format or Fileout format)\x0a\x09is a trivial format but can be a bit tricky to understand:\x0a\x09\x09- Uses the exclamation mark as delimiter of chunks.\x0a\x09\x09- Inside a chunk a normal exclamation mark must be doubled.\x0a\x09\x09- A non empty chunk must be a valid Smalltalk expression.\x0a\x09\x09- A chunk on top level with a preceding empty chunk is an instruction chunk:\x0a\x09\x09\x09- The object created by the expression then takes over reading chunks.\x0a\x0a\x09This metod returns next chunk as a String (trimmed), empty String (all whitespace) or nil.\x22\x0a\x0a\x09| char result chunk |\x0a\x09result := '' writeStream.\x0a        [char := stream next.\x0a        char notNil] whileTrue: [\x0a                 char = '!' ifTrue: [\x0a                         stream peek = '!'\x0a                                ifTrue: [stream next \x22skipping the escape double\x22]\x0a                                ifFalse: [^result contents trimBoth  \x22chunk end marker found\x22]].\x0a                 result nextPut: char].\x0a\x09^nil \x22a chunk needs to end with !\x22",
messageSends: ["writeStream", "whileTrue:", "ifTrue:", "ifTrue:ifFalse:", "next", "trimBoth", "contents", "=", "peek", "nextPut:", "notNil"],
referencedClasses: []
}),
smalltalk.ChunkParser);

smalltalk.addMethod(
"_stream_",
smalltalk.method({
selector: "stream:",
category: 'accessing',
fn: function (aStream){
var self=this;
self["@stream"]=aStream;
return self},
args: ["aStream"],
source: "stream: aStream\x0a\x09stream := aStream",
messageSends: [],
referencedClasses: []
}),
smalltalk.ChunkParser);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'not yet classified',
fn: function (aStream){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_new",[]),"_stream_",[aStream]);
return $1;
},
args: ["aStream"],
source: "on: aStream\x0a\x09^self new stream: aStream",
messageSends: ["stream:", "new"],
referencedClasses: []
}),
smalltalk.ChunkParser.klass);


smalltalk.addClass('Exporter', smalltalk.Object, [], 'Importer-Exporter');
smalltalk.addMethod(
"_classNameFor_",
smalltalk.method({
selector: "classNameFor:",
category: 'private',
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
},
args: ["aClass"],
source: "classNameFor: aClass\x0a\x09^aClass isMetaclass\x0a\x09    ifTrue: [aClass instanceClass name, '.klass']\x0a\x09    ifFalse: [\x0a\x09\x09aClass isNil\x0a\x09\x09    ifTrue: ['nil']\x0a\x09\x09    ifFalse: [aClass name]]",
messageSends: ["ifTrue:ifFalse:", ",", "name", "instanceClass", "isNil", "isMetaclass"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportAll",
smalltalk.method({
selector: "exportAll",
category: 'fileOut',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.String || String),"_streamContents_",[(function(stream){
return smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk),"_current",[]),"_packages",[]),"_do_",[(function(pkg){
return smalltalk.send(stream,"_nextPutAll_",[smalltalk.send(self,"_exportPackage_",[smalltalk.send(pkg,"_name",[])])]);
})]);
})]);
return $1;
},
args: [],
source: "exportAll\x0a    \x22Export all packages in the system.\x22\x0a\x0a    ^String streamContents: [:stream |\x0a    \x09Smalltalk current packages do: [:pkg |\x0a\x09\x09stream nextPutAll: (self exportPackage: pkg name)]]",
messageSends: ["streamContents:", "do:", "nextPutAll:", "exportPackage:", "name", "packages", "current"],
referencedClasses: ["Smalltalk", "String"]
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportClass_",
smalltalk.method({
selector: "exportClass:",
category: 'fileOut',
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
},
args: ["aClass"],
source: "exportClass: aClass\x0a\x09\x22Export a single class. Subclasses override these methods.\x22\x0a\x0a\x09^String streamContents: [:stream |\x0a\x09\x09self exportDefinitionOf: aClass on: stream.\x0a\x09\x09self exportMethodsOf: aClass on: stream.\x0a\x09\x09self exportMetaDefinitionOf: aClass on: stream.\x0a\x09\x09self exportMethodsOf: aClass class on: stream]",
messageSends: ["streamContents:", "exportDefinitionOf:on:", "exportMethodsOf:on:", "exportMetaDefinitionOf:on:", "class"],
referencedClasses: ["String"]
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportDefinitionOf_on_",
smalltalk.method({
selector: "exportDefinitionOf:on:",
category: 'private',
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
return self},
args: ["aClass", "aStream"],
source: "exportDefinitionOf: aClass on: aStream\x0a\x09aStream \x0a\x09    nextPutAll: 'smalltalk.addClass(';\x0a\x09    nextPutAll: '''', (self classNameFor: aClass), ''', ';\x0a\x09    nextPutAll: 'smalltalk.', (self classNameFor: aClass superclass);\x0a\x09    nextPutAll: ', ['.\x0a\x09aClass instanceVariableNames \x0a\x09    do: [:each | aStream nextPutAll: '''', each, '''']\x0a\x09    separatedBy: [aStream nextPutAll: ', '].\x0a\x09aStream\x09\x0a\x09    nextPutAll: '], ''';\x0a\x09    nextPutAll: aClass category, '''';\x0a\x09    nextPutAll: ');'.\x0a\x09aClass comment notEmpty ifTrue: [\x0a\x09    aStream \x0a\x09    \x09lf;\x0a\x09\x09nextPutAll: 'smalltalk.';\x0a\x09\x09nextPutAll: (self classNameFor: aClass);\x0a\x09\x09nextPutAll: '.comment=';\x0a\x09\x09nextPutAll: aClass comment asJavascript].\x0a\x09aStream lf",
messageSends: ["nextPutAll:", ",", "classNameFor:", "superclass", "do:separatedBy:", "instanceVariableNames", "category", "ifTrue:", "lf", "asJavascript", "comment", "notEmpty"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportMetaDefinitionOf_on_",
smalltalk.method({
selector: "exportMetaDefinitionOf:on:",
category: 'private',
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
return self},
args: ["aClass", "aStream"],
source: "exportMetaDefinitionOf: aClass on: aStream\x0a\x09aClass class instanceVariableNames isEmpty ifFalse: [\x0a\x09    aStream \x0a\x09\x09nextPutAll: 'smalltalk.', (self classNameFor: aClass class);\x0a\x09\x09nextPutAll: '.iVarNames = ['.\x0a\x09    aClass class instanceVariableNames\x0a\x09\x09do: [:each | aStream nextPutAll: '''', each, '''']\x0a\x09\x09separatedBy: [aStream nextPutAll: ','].\x0a\x09    aStream nextPutAll: '];', String lf]",
messageSends: ["ifFalse:", "nextPutAll:", ",", "classNameFor:", "class", "do:separatedBy:", "instanceVariableNames", "lf", "isEmpty"],
referencedClasses: ["String"]
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportMethod_of_on_",
smalltalk.method({
selector: "exportMethod:of:on:",
category: 'private',
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
return self},
args: ["aMethod", "aClass", "aStream"],
source: "exportMethod: aMethod of: aClass on: aStream\x0a\x09aStream \x0a\x09\x09nextPutAll: 'smalltalk.addMethod(';lf;\x0a\x09\x09nextPutAll: aMethod selector asSelector asJavascript, ',';lf;\x0a\x09\x09nextPutAll: 'smalltalk.method({';lf;\x0a\x09\x09nextPutAll: 'selector: ', aMethod selector asJavascript, ',';lf;\x0a\x09\x09nextPutAll: 'category: ''', aMethod category, ''',';lf;\x0a\x09\x09nextPutAll: 'fn: ', aMethod fn compiledSource, ',';lf;\x0a\x09\x09nextPutAll: 'args: ', aMethod arguments asJavascript, ','; lf;\x0a\x09\x09nextPutAll: 'source: ', aMethod source asJavascript, ',';lf;\x0a\x09\x09nextPutAll: 'messageSends: ', aMethod messageSends asJavascript, ',';lf;\x0a\x09\x09nextPutAll: 'referencedClasses: ', aMethod referencedClasses asJavascript.\x0a\x09aStream\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: '}),';lf;\x0a\x09\x09nextPutAll: 'smalltalk.', (self classNameFor: aClass);\x0a\x09\x09nextPutAll: ');';lf;lf",
messageSends: ["nextPutAll:", "lf", ",", "asJavascript", "asSelector", "selector", "category", "compiledSource", "fn", "arguments", "source", "messageSends", "referencedClasses", "classNameFor:"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportMethodsOf_on_",
smalltalk.method({
selector: "exportMethodsOf:on:",
category: 'private',
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
return self},
args: ["aClass", "aStream"],
source: "exportMethodsOf: aClass on: aStream\x0a\x09\x22Issue #143: sort methods alphabetically\x22\x0a\x0a\x09((aClass methodDictionary values) sorted: [:a :b | a selector <= b selector]) do: [:each |\x0a\x09\x09(each category match: '^\x5c*') ifFalse: [\x0a\x09\x09\x09self exportMethod: each of: aClass on: aStream]].\x0a\x09aStream lf",
messageSends: ["do:", "ifFalse:", "exportMethod:of:on:", "match:", "category", "sorted:", "<=", "selector", "values", "methodDictionary", "lf"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportPackage_",
smalltalk.method({
selector: "exportPackage:",
category: 'fileOut',
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
},
args: ["packageName"],
source: "exportPackage: packageName\x0a\x09\x22Export a given package by name.\x22\x0a\x0a\x09| package |\x0a\x09^String streamContents: [:stream |\x0a                package := Smalltalk current packageAt: packageName.\x0a                self exportPackageDefinitionOf: package on: stream.\x0a\x0a\x09\x09\x22Export classes in dependency order.\x0a\x09\x09Update (issue #171): Remove duplicates for export\x22\x0a\x09    \x09package sortedClasses asSet do: [:each |\x0a                        stream nextPutAll: (self exportClass: each)].\x0a\x09\x09self exportPackageExtensionsOf: package on: stream]",
messageSends: ["streamContents:", "packageAt:", "current", "exportPackageDefinitionOf:on:", "do:", "nextPutAll:", "exportClass:", "asSet", "sortedClasses", "exportPackageExtensionsOf:on:"],
referencedClasses: ["Smalltalk", "String"]
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportPackageDefinitionOf_on_",
smalltalk.method({
selector: "exportPackageDefinitionOf:on:",
category: 'private',
fn: function (package,aStream){
var self=this;
var $1;
smalltalk.send(aStream,"_nextPutAll_",["smalltalk.addPackage("]);
$1=smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("'","__comma",[smalltalk.send(package,"_name",[])]),"__comma",["', "]),"__comma",[smalltalk.send(package,"_propertiesAsJSON",[])]),"__comma",[");"])]);
smalltalk.send(aStream,"_lf",[]);
return self},
args: ["package", "aStream"],
source: "exportPackageDefinitionOf: package on: aStream\x0a\x09aStream \x0a\x09    nextPutAll: 'smalltalk.addPackage(';\x0a\x09    nextPutAll: '''', package name, ''', ', package propertiesAsJSON , ');'.\x0a\x09aStream lf",
messageSends: ["nextPutAll:", ",", "propertiesAsJSON", "name", "lf"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportPackageExtensionsOf_on_",
smalltalk.method({
selector: "exportPackageExtensionsOf:on:",
category: 'private',
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
return self},
args: ["package", "aStream"],
source: "exportPackageExtensionsOf: package on: aStream\x0a\x09\x22Issue #143: sort classes and methods alphabetically\x22\x0a\x0a\x09| name |\x0a\x09name := package name.\x0a\x09(Package sortedClasses: Smalltalk current classes) do: [:each |\x0a\x09\x09{each. each class} do: [:aClass | \x0a\x09\x09\x09((aClass methodDictionary values) sorted: [:a :b | a selector <= b selector]) do: [:method |\x0a\x09\x09\x09\x09(method category match: '^\x5c*', name) ifTrue: [\x0a\x09\x09\x09\x09\x09self exportMethod: method of: aClass on: aStream ]]]]",
messageSends: ["name", "do:", "ifTrue:", "exportMethod:of:on:", "match:", ",", "category", "sorted:", "<=", "selector", "values", "methodDictionary", "class", "sortedClasses:", "classes", "current"],
referencedClasses: ["Smalltalk", "Package"]
}),
smalltalk.Exporter);



smalltalk.addClass('ChunkExporter', smalltalk.Exporter, [], 'Importer-Exporter');
smalltalk.addMethod(
"_chunkEscape_",
smalltalk.method({
selector: "chunkEscape:",
category: 'not yet classified',
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(aString,"_replace_with_",["!","!!"]),"_trimBoth",[]);
return $1;
},
args: ["aString"],
source: "chunkEscape: aString\x0a\x09\x22Replace all occurrences of ! with !! and trim at both ends.\x22\x0a\x0a\x09^(aString replace: '!' with: '!!') trimBoth",
messageSends: ["trimBoth", "replace:with:"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_classNameFor_",
smalltalk.method({
selector: "classNameFor:",
category: 'not yet classified',
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
},
args: ["aClass"],
source: "classNameFor: aClass\x0a\x09^aClass isMetaclass\x0a\x09    ifTrue: [aClass instanceClass name, ' class']\x0a\x09    ifFalse: [\x0a\x09\x09aClass isNil\x0a\x09\x09    ifTrue: ['nil']\x0a\x09\x09    ifFalse: [aClass name]]",
messageSends: ["ifTrue:ifFalse:", ",", "name", "instanceClass", "isNil", "isMetaclass"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportDefinitionOf_on_",
smalltalk.method({
selector: "exportDefinitionOf:on:",
category: 'not yet classified',
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
return self},
args: ["aClass", "aStream"],
source: "exportDefinitionOf: aClass on: aStream\x0a    \x22Chunk format.\x22\x0a\x0a    aStream \x0a        nextPutAll: (self classNameFor: aClass superclass);\x0a        nextPutAll: ' subclass: #', (self classNameFor: aClass); lf;\x0a        nextPutAll: '\x09instanceVariableNames: '''.\x0a    aClass instanceVariableNames \x0a        do: [:each | aStream nextPutAll: each]\x0a        separatedBy: [aStream nextPutAll: ' '].\x0a    aStream \x0a        nextPutAll: ''''; lf;\x0a        nextPutAll: '\x09package: ''', aClass category, '''!'; lf.\x0a    aClass comment notEmpty ifTrue: [\x0a        aStream \x0a        nextPutAll: '!', (self classNameFor: aClass), ' commentStamp!';lf;\x0a        nextPutAll: (self chunkEscape: aClass comment), '!';lf].\x0a    aStream lf",
messageSends: ["nextPutAll:", "classNameFor:", "superclass", ",", "lf", "do:separatedBy:", "instanceVariableNames", "category", "ifTrue:", "chunkEscape:", "comment", "notEmpty"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportMetaDefinitionOf_on_",
smalltalk.method({
selector: "exportMetaDefinitionOf:on:",
category: 'not yet classified',
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
return self},
args: ["aClass", "aStream"],
source: "exportMetaDefinitionOf: aClass on: aStream\x0a\x0a\x09aClass class instanceVariableNames isEmpty ifFalse: [\x0a\x09\x09aStream \x0a\x09\x09    nextPutAll: (self classNameFor: aClass class);\x0a\x09\x09    nextPutAll: ' instanceVariableNames: '''.\x0a\x09\x09aClass class instanceVariableNames \x0a\x09\x09    do: [:each | aStream nextPutAll: each]\x0a\x09\x09    separatedBy: [aStream nextPutAll: ' '].\x0a\x09\x09aStream\x09\x0a\x09\x09    nextPutAll: '''!'; lf; lf]",
messageSends: ["ifFalse:", "nextPutAll:", "classNameFor:", "class", "do:separatedBy:", "instanceVariableNames", "lf", "isEmpty"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportMethod_of_on_",
smalltalk.method({
selector: "exportMethod:of:on:",
category: 'not yet classified',
fn: function (aMethod,aClass,aStream){
var self=this;
var $1;
smalltalk.send(aStream,"_lf",[]);
smalltalk.send(aStream,"_lf",[]);
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(self,"_chunkEscape_",[smalltalk.send(aMethod,"_source",[])])]);
smalltalk.send(aStream,"_lf",[]);
$1=smalltalk.send(aStream,"_nextPutAll_",["!"]);
return self},
args: ["aMethod", "aClass", "aStream"],
source: "exportMethod: aMethod of: aClass on: aStream\x0a\x09aStream \x0a\x09\x09lf; lf; nextPutAll: (self chunkEscape: aMethod source); lf;\x0a\x09\x09nextPutAll: '!'",
messageSends: ["lf", "nextPutAll:", "chunkEscape:", "source"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportMethods_category_of_on_",
smalltalk.method({
selector: "exportMethods:category:of:on:",
category: 'not yet classified',
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
return self},
args: ["methods", "category", "aClass", "aStream"],
source: "exportMethods: methods category: category of: aClass on: aStream\x0a\x09\x22Issue #143: sort methods alphabetically\x22\x0a\x0a\x09aStream\x0a\x09\x09nextPutAll: '!', (self classNameFor: aClass);\x0a\x09\x09nextPutAll: ' methodsFor: ''', category, '''!'.\x0a\x09\x09(methods sorted: [:a :b | a selector <= b selector]) do: [:each |\x0a\x09\x09\x09\x09self exportMethod: each of: aClass on: aStream].\x0a\x09aStream nextPutAll: ' !'; lf; lf",
messageSends: ["nextPutAll:", ",", "classNameFor:", "do:", "exportMethod:of:on:", "sorted:", "<=", "selector", "lf"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportMethodsOf_on_",
smalltalk.method({
selector: "exportMethodsOf:on:",
category: 'not yet classified',
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
return self},
args: ["aClass", "aStream"],
source: "exportMethodsOf: aClass on: aStream\x0a\x09\x22Issue #143: sort protocol alphabetically\x22\x0a\x0a\x09| map |\x0a\x09map := Dictionary new.\x0a\x09aClass protocolsDo: [:category :methods | \x0a\x09\x09(category match: '^\x5c*') ifFalse: [ map at: category put: methods ]].\x0a\x09(map keys sorted: [:a :b | a <= b ]) do: [:category | | methods |\x0a\x09\x09methods := map at: category.\x0a\x09\x09self\x0a\x09\x09\x09exportMethods: methods\x0a\x09\x09\x09category: category\x0a\x09\x09\x09of: aClass\x0a\x09\x09\x09on: aStream ]",
messageSends: ["new", "protocolsDo:", "ifFalse:", "at:put:", "match:", "do:", "at:", "exportMethods:category:of:on:", "sorted:", "<=", "keys"],
referencedClasses: ["Dictionary"]
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportPackageDefinitionOf_on_",
smalltalk.method({
selector: "exportPackageDefinitionOf:on:",
category: 'not yet classified',
fn: function (package,aStream){
var self=this;
var $1;
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("Smalltalk current createPackage: '","__comma",[smalltalk.send(package,"_name",[])]),"__comma",["' properties: "]),"__comma",[smalltalk.send(smalltalk.send(package,"_properties",[]),"_storeString",[])]),"__comma",["!"])]);
$1=smalltalk.send(aStream,"_lf",[]);
return self},
args: ["package", "aStream"],
source: "exportPackageDefinitionOf: package on: aStream\x0a\x09\x22Chunk format.\x22\x0a\x0a\x09aStream \x0a\x09    nextPutAll: 'Smalltalk current createPackage: ''', package name,\x0a\x09\x09''' properties: ', package properties storeString, '!'; lf.",
messageSends: ["nextPutAll:", ",", "storeString", "properties", "name", "lf"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportPackageExtensionsOf_on_",
smalltalk.method({
selector: "exportPackageExtensionsOf:on:",
category: 'not yet classified',
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
return self},
args: ["package", "aStream"],
source: "exportPackageExtensionsOf: package on: aStream\x0a\x09\x22We need to override this one too since we need to group\x0a\x09all methods in a given protocol under a leading methodsFor: chunk\x0a\x09for that class.\x22\x0a\x0a\x09\x22Issue #143: sort protocol alphabetically\x22\x0a\x0a\x09| name map |\x0a\x09name := package name.\x0a\x09(Package sortedClasses: Smalltalk current classes) do: [:each |\x0a\x09\x09{each. each class} do: [:aClass |\x0a\x09\x09\x09map := Dictionary new.\x0a\x09\x09\x09aClass protocolsDo: [:category :methods | \x0a\x09\x09\x09\x09(category match: '^\x5c*', name) ifTrue: [ map at: category put: methods ]].\x0a\x09\x09\x09(map keys sorted: [:a :b | a <= b ]) do: [:category | | methods |\x0a\x09\x09\x09\x09methods := map at: category.\x09\x0a\x09\x09\x09\x09self exportMethods: methods category: category of: aClass on: aStream ]]]",
messageSends: ["name", "do:", "new", "protocolsDo:", "ifTrue:", "at:put:", "match:", ",", "at:", "exportMethods:category:of:on:", "sorted:", "<=", "keys", "class", "sortedClasses:", "classes", "current"],
referencedClasses: ["Dictionary", "Smalltalk", "Package"]
}),
smalltalk.ChunkExporter);



smalltalk.addClass('StrippedExporter', smalltalk.Exporter, [], 'Importer-Exporter');
smalltalk.addMethod(
"_exportDefinitionOf_on_",
smalltalk.method({
selector: "exportDefinitionOf:on:",
category: 'private',
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
return self},
args: ["aClass", "aStream"],
source: "exportDefinitionOf: aClass on: aStream\x0a\x09aStream \x0a\x09    nextPutAll: 'smalltalk.addClass(';\x0a\x09    nextPutAll: '''', (self classNameFor: aClass), ''', ';\x0a\x09    nextPutAll: 'smalltalk.', (self classNameFor: aClass superclass);\x0a\x09    nextPutAll: ', ['.\x0a\x09aClass instanceVariableNames \x0a\x09    do: [:each | aStream nextPutAll: '''', each, '''']\x0a\x09    separatedBy: [aStream nextPutAll: ', '].\x0a\x09aStream\x09\x0a\x09    nextPutAll: '], ''';\x0a\x09    nextPutAll: aClass category, '''';\x0a\x09    nextPutAll: ');'.\x0a\x09aStream lf",
messageSends: ["nextPutAll:", ",", "classNameFor:", "superclass", "do:separatedBy:", "instanceVariableNames", "category", "lf"],
referencedClasses: []
}),
smalltalk.StrippedExporter);

smalltalk.addMethod(
"_exportMethod_of_on_",
smalltalk.method({
selector: "exportMethod:of:on:",
category: 'private',
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
return self},
args: ["aMethod", "aClass", "aStream"],
source: "exportMethod: aMethod of: aClass on: aStream\x0a\x09aStream \x0a\x09\x09nextPutAll: 'smalltalk.addMethod(';lf;\x0a\x09\x09nextPutAll: aMethod selector asSelector asJavascript, ',';lf;\x0a\x09\x09nextPutAll: 'smalltalk.method({';lf;\x0a\x09\x09nextPutAll: 'selector: ', aMethod selector asJavascript, ',';lf;\x0a\x09\x09nextPutAll: 'fn: ', aMethod fn compiledSource;lf;\x0a\x09\x09nextPutAll: '}),';lf;\x0a\x09\x09nextPutAll: 'smalltalk.', (self classNameFor: aClass);\x0a\x09\x09nextPutAll: ');';lf;lf",
messageSends: ["nextPutAll:", "lf", ",", "asJavascript", "asSelector", "selector", "compiledSource", "fn", "classNameFor:"],
referencedClasses: []
}),
smalltalk.StrippedExporter);



smalltalk.addClass('Importer', smalltalk.Object, [], 'Importer-Exporter');
smalltalk.addMethod(
"_import_",
smalltalk.method({
selector: "import:",
category: 'fileIn',
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
return self},
args: ["aStream"],
source: "import: aStream\x0a    | chunk result parser lastEmpty |\x0a    parser := ChunkParser on: aStream.\x0a    lastEmpty := false.\x0a    [chunk := parser nextChunk.\x0a     chunk isNil] whileFalse: [\x0a        chunk isEmpty\x0a       \x09\x09ifTrue: [lastEmpty := true]\x0a       \x09\x09ifFalse: [\x0a        \x09\x09result := Compiler new evaluateExpression: chunk.\x0a        \x09\x09lastEmpty \x0a            \x09\x09\x09ifTrue: [\x0a                                  \x09lastEmpty := false.\x0a                                  \x09result scanFrom: parser]]]",
messageSends: ["on:", "whileFalse:", "ifTrue:ifFalse:", "evaluateExpression:", "new", "ifTrue:", "scanFrom:", "isEmpty", "nextChunk", "isNil"],
referencedClasses: ["ChunkParser", "Compiler"]
}),
smalltalk.Importer);



