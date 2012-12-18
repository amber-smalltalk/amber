smalltalk.addPackage('Importer-Exporter', {});
smalltalk.addClass('ChunkParser', smalltalk.Object, ['stream'], 'Importer-Exporter');
smalltalk.addMethod(
"_nextChunk",
smalltalk.method({
selector: "nextChunk",
category: 'reading',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1,$2,$3;
var $early={};
try {
var char_;
var result;
var chunk;
result=_st("")._writeStream();
_st((function(){
char_=_st(self["@stream"])._next();
char_;
return _st(char_)._notNil();
}))._whileTrue_((function(){
$1=_st(char_).__eq("!");
if(smalltalk.assert($1)){
$2=_st(_st(self["@stream"])._peek()).__eq("!");
if(smalltalk.assert($2)){
_st(self["@stream"])._next();
} else {
$3=_st(_st(result)._contents())._trimBoth();
throw $early=[$3];
};
};
return _st(result)._nextPut_(char_);
}));
return nil;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, self, "nextChunk", [], smalltalk.ChunkParser)},
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
return smalltalk.withContext(function($ctx) { self["@stream"]=aStream;
return self}, self, "stream:", [aStream], smalltalk.ChunkParser)},
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
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._new())._stream_(aStream);
return $1;
}, self, "on:", [aStream], smalltalk.ChunkParser.klass)},
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
return smalltalk.withContext(function($ctx) { var $2,$3,$1;
$2=_st(aClass)._isMetaclass();
if(smalltalk.assert($2)){
$1=_st(_st(_st(aClass)._instanceClass())._name()).__comma(".klass");
} else {
$3=_st(aClass)._isNil();
if(smalltalk.assert($3)){
$1="nil";
} else {
$1=_st(aClass)._name();
};
};
return $1;
}, self, "classNameFor:", [aClass], smalltalk.Exporter)},
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
return smalltalk.withContext(function($ctx) { var $1;
$1=_st((smalltalk.String || String))._streamContents_((function(stream){
return _st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._packages())._do_((function(pkg){
return _st(stream)._nextPutAll_(_st(self)._exportPackage_(_st(pkg)._name()));
}));
}));
return $1;
}, self, "exportAll", [], smalltalk.Exporter)},
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
return smalltalk.withContext(function($ctx) { var $1;
$1=_st((smalltalk.String || String))._streamContents_((function(stream){
_st(self)._exportDefinitionOf_on_(aClass,stream);
_st(self)._exportMethodsOf_on_(aClass,stream);
_st(self)._exportMetaDefinitionOf_on_(aClass,stream);
return _st(self)._exportMethodsOf_on_(_st(aClass)._class(),stream);
}));
return $1;
}, self, "exportClass:", [aClass], smalltalk.Exporter)},
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
return smalltalk.withContext(function($ctx) { var $1,$2,$3,$4;
_st(aStream)._nextPutAll_("smalltalk.addClass(");
_st(aStream)._nextPutAll_(_st(_st("'").__comma(_st(self)._classNameFor_(aClass))).__comma("', "));
_st(aStream)._nextPutAll_(_st("smalltalk.").__comma(_st(self)._classNameFor_(_st(aClass)._superclass())));
$1=_st(aStream)._nextPutAll_(", [");
_st(_st(aClass)._instanceVariableNames())._do_separatedBy_((function(each){
return _st(aStream)._nextPutAll_(_st(_st("'").__comma(each)).__comma("'"));
}),(function(){
return _st(aStream)._nextPutAll_(", ");
}));
_st(aStream)._nextPutAll_("], '");
_st(aStream)._nextPutAll_(_st(_st(aClass)._category()).__comma("'"));
$2=_st(aStream)._nextPutAll_(");");
$3=_st(_st(aClass)._comment())._notEmpty();
if(smalltalk.assert($3)){
_st(aStream)._lf();
_st(aStream)._nextPutAll_("smalltalk.");
_st(aStream)._nextPutAll_(_st(self)._classNameFor_(aClass));
_st(aStream)._nextPutAll_(".comment=");
$4=_st(aStream)._nextPutAll_(_st(_st(aClass)._comment())._asJavascript());
$4;
};
_st(aStream)._lf();
return self}, self, "exportDefinitionOf:on:", [aClass,aStream], smalltalk.Exporter)},
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
return smalltalk.withContext(function($ctx) { var $1,$2;
$1=_st(_st(_st(aClass)._class())._instanceVariableNames())._isEmpty();
if(! smalltalk.assert($1)){
_st(aStream)._nextPutAll_(_st("smalltalk.").__comma(_st(self)._classNameFor_(_st(aClass)._class())));
$2=_st(aStream)._nextPutAll_(".iVarNames = [");
$2;
_st(_st(_st(aClass)._class())._instanceVariableNames())._do_separatedBy_((function(each){
return _st(aStream)._nextPutAll_(_st(_st("'").__comma(each)).__comma("'"));
}),(function(){
return _st(aStream)._nextPutAll_(",");
}));
_st(aStream)._nextPutAll_(_st("];").__comma(_st((smalltalk.String || String))._lf()));
};
return self}, self, "exportMetaDefinitionOf:on:", [aClass,aStream], smalltalk.Exporter)},
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
return smalltalk.withContext(function($ctx) { var $1,$2;
_st(aStream)._nextPutAll_("smalltalk.addMethod(");
_st(aStream)._lf();
_st(aStream)._nextPutAll_(_st(_st(_st(_st(aMethod)._selector())._asSelector())._asJavascript()).__comma(","));
_st(aStream)._lf();
_st(aStream)._nextPutAll_("smalltalk.method({");
_st(aStream)._lf();
_st(aStream)._nextPutAll_(_st(_st("selector: ").__comma(_st(_st(aMethod)._selector())._asJavascript())).__comma(","));
_st(aStream)._lf();
_st(aStream)._nextPutAll_(_st(_st("category: '").__comma(_st(aMethod)._category())).__comma("',"));
_st(aStream)._lf();
_st(aStream)._nextPutAll_(_st(_st("fn: ").__comma(_st(_st(aMethod)._fn())._compiledSource())).__comma(","));
_st(aStream)._lf();
_st(aStream)._nextPutAll_(_st(_st("args: ").__comma(_st(_st(aMethod)._arguments())._asJavascript())).__comma(","));
_st(aStream)._lf();
_st(aStream)._nextPutAll_(_st(_st("source: ").__comma(_st(_st(aMethod)._source())._asJavascript())).__comma(","));
_st(aStream)._lf();
_st(aStream)._nextPutAll_(_st(_st("messageSends: ").__comma(_st(_st(aMethod)._messageSends())._asJavascript())).__comma(","));
_st(aStream)._lf();
$1=_st(aStream)._nextPutAll_(_st("referencedClasses: ").__comma(_st(_st(aMethod)._referencedClasses())._asJavascript()));
_st(aStream)._lf();
_st(aStream)._nextPutAll_("}),");
_st(aStream)._lf();
_st(aStream)._nextPutAll_(_st("smalltalk.").__comma(_st(self)._classNameFor_(aClass)));
_st(aStream)._nextPutAll_(");");
_st(aStream)._lf();
$2=_st(aStream)._lf();
return self}, self, "exportMethod:of:on:", [aMethod,aClass,aStream], smalltalk.Exporter)},
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
return smalltalk.withContext(function($ctx) { var $1;
_st(_st(_st(_st(aClass)._methodDictionary())._values())._sorted_((function(a,b){
return _st(_st(a)._selector()).__lt_eq(_st(b)._selector());
})))._do_((function(each){
$1=_st(_st(each)._category())._match_("^\x5c*");
if(! smalltalk.assert($1)){
return _st(self)._exportMethod_of_on_(each,aClass,aStream);
};
}));
_st(aStream)._lf();
return self}, self, "exportMethodsOf:on:", [aClass,aStream], smalltalk.Exporter)},
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
return smalltalk.withContext(function($ctx) { var $1;
var package;
$1=_st((smalltalk.String || String))._streamContents_((function(stream){
package=_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._packageAt_(packageName);
package;
_st(self)._exportPackageDefinitionOf_on_(package,stream);
_st(_st(_st(package)._sortedClasses())._asSet())._do_((function(each){
return _st(stream)._nextPutAll_(_st(self)._exportClass_(each));
}));
return _st(self)._exportPackageExtensionsOf_on_(package,stream);
}));
return $1;
}, self, "exportPackage:", [packageName], smalltalk.Exporter)},
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
return smalltalk.withContext(function($ctx) { var $1;
_st(aStream)._nextPutAll_("smalltalk.addPackage(");
$1=_st(aStream)._nextPutAll_(_st(_st(_st(_st("'").__comma(_st(package)._name())).__comma("', ")).__comma(_st(package)._propertiesAsJSON())).__comma(");"));
_st(aStream)._lf();
return self}, self, "exportPackageDefinitionOf:on:", [package,aStream], smalltalk.Exporter)},
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
return smalltalk.withContext(function($ctx) { var $1;
var name;
name=_st(package)._name();
_st(_st((smalltalk.Package || Package))._sortedClasses_(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._classes()))._do_((function(each){
return _st([each,_st(each)._class()])._do_((function(aClass){
return _st(_st(_st(_st(aClass)._methodDictionary())._values())._sorted_((function(a,b){
return _st(_st(a)._selector()).__lt_eq(_st(b)._selector());
})))._do_((function(method){
$1=_st(_st(method)._category())._match_(_st("^\x5c*").__comma(name));
if(smalltalk.assert($1)){
return _st(self)._exportMethod_of_on_(method,aClass,aStream);
};
}));
}));
}));
return self}, self, "exportPackageExtensionsOf:on:", [package,aStream], smalltalk.Exporter)},
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
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(aString)._replace_with_("!","!!"))._trimBoth();
return $1;
}, self, "chunkEscape:", [aString], smalltalk.ChunkExporter)},
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
return smalltalk.withContext(function($ctx) { var $2,$3,$1;
$2=_st(aClass)._isMetaclass();
if(smalltalk.assert($2)){
$1=_st(_st(_st(aClass)._instanceClass())._name()).__comma(" class");
} else {
$3=_st(aClass)._isNil();
if(smalltalk.assert($3)){
$1="nil";
} else {
$1=_st(aClass)._name();
};
};
return $1;
}, self, "classNameFor:", [aClass], smalltalk.ChunkExporter)},
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
return smalltalk.withContext(function($ctx) { var $1,$2,$3,$4;
_st(aStream)._nextPutAll_(_st(self)._classNameFor_(_st(aClass)._superclass()));
_st(aStream)._nextPutAll_(_st(" subclass: #").__comma(_st(self)._classNameFor_(aClass)));
_st(aStream)._lf();
$1=_st(aStream)._nextPutAll_("\x09instanceVariableNames: '");
_st(_st(aClass)._instanceVariableNames())._do_separatedBy_((function(each){
return _st(aStream)._nextPutAll_(each);
}),(function(){
return _st(aStream)._nextPutAll_(" ");
}));
_st(aStream)._nextPutAll_("'");
_st(aStream)._lf();
_st(aStream)._nextPutAll_(_st(_st("\x09package: '").__comma(_st(aClass)._category())).__comma("'!"));
$2=_st(aStream)._lf();
$3=_st(_st(aClass)._comment())._notEmpty();
if(smalltalk.assert($3)){
_st(aStream)._nextPutAll_(_st(_st("!").__comma(_st(self)._classNameFor_(aClass))).__comma(" commentStamp!"));
_st(aStream)._lf();
_st(aStream)._nextPutAll_(_st(_st(self)._chunkEscape_(_st(aClass)._comment())).__comma("!"));
$4=_st(aStream)._lf();
$4;
};
_st(aStream)._lf();
return self}, self, "exportDefinitionOf:on:", [aClass,aStream], smalltalk.ChunkExporter)},
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
return smalltalk.withContext(function($ctx) { var $1,$2,$3;
$1=_st(_st(_st(aClass)._class())._instanceVariableNames())._isEmpty();
if(! smalltalk.assert($1)){
_st(aStream)._nextPutAll_(_st(self)._classNameFor_(_st(aClass)._class()));
$2=_st(aStream)._nextPutAll_(" instanceVariableNames: '");
$2;
_st(_st(_st(aClass)._class())._instanceVariableNames())._do_separatedBy_((function(each){
return _st(aStream)._nextPutAll_(each);
}),(function(){
return _st(aStream)._nextPutAll_(" ");
}));
_st(aStream)._nextPutAll_("'!");
_st(aStream)._lf();
$3=_st(aStream)._lf();
$3;
};
return self}, self, "exportMetaDefinitionOf:on:", [aClass,aStream], smalltalk.ChunkExporter)},
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
return smalltalk.withContext(function($ctx) { var $1;
_st(aStream)._lf();
_st(aStream)._lf();
_st(aStream)._nextPutAll_(_st(self)._chunkEscape_(_st(aMethod)._source()));
_st(aStream)._lf();
$1=_st(aStream)._nextPutAll_("!");
return self}, self, "exportMethod:of:on:", [aMethod,aClass,aStream], smalltalk.ChunkExporter)},
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
return smalltalk.withContext(function($ctx) { var $1,$2;
_st(aStream)._nextPutAll_(_st("!").__comma(_st(self)._classNameFor_(aClass)));
$1=_st(aStream)._nextPutAll_(_st(_st(" methodsFor: '").__comma(category)).__comma("'!"));
_st(_st(methods)._sorted_((function(a,b){
return _st(_st(a)._selector()).__lt_eq(_st(b)._selector());
})))._do_((function(each){
return _st(self)._exportMethod_of_on_(each,aClass,aStream);
}));
_st(aStream)._nextPutAll_(" !");
_st(aStream)._lf();
$2=_st(aStream)._lf();
return self}, self, "exportMethods:category:of:on:", [methods,category,aClass,aStream], smalltalk.ChunkExporter)},
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
return smalltalk.withContext(function($ctx) { var $1;
var map;
map=_st((smalltalk.Dictionary || Dictionary))._new();
_st(aClass)._protocolsDo_((function(category,methods){
$1=_st(category)._match_("^\x5c*");
if(! smalltalk.assert($1)){
return _st(map)._at_put_(category,methods);
};
}));
_st(_st(_st(map)._keys())._sorted_((function(a,b){
return _st(a).__lt_eq(b);
})))._do_((function(category){
var methods;
methods=_st(map)._at_(category);
methods;
return _st(self)._exportMethods_category_of_on_(methods,category,aClass,aStream);
}));
return self}, self, "exportMethodsOf:on:", [aClass,aStream], smalltalk.ChunkExporter)},
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
return smalltalk.withContext(function($ctx) { var $1;
_st(aStream)._nextPutAll_(_st(_st(_st(_st("Smalltalk current createPackage: '").__comma(_st(package)._name())).__comma("' properties: ")).__comma(_st(_st(package)._properties())._storeString())).__comma("!"));
$1=_st(aStream)._lf();
return self}, self, "exportPackageDefinitionOf:on:", [package,aStream], smalltalk.ChunkExporter)},
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
return smalltalk.withContext(function($ctx) { var $1;
var name;
var map;
name=_st(package)._name();
_st(_st((smalltalk.Package || Package))._sortedClasses_(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._classes()))._do_((function(each){
return _st([each,_st(each)._class()])._do_((function(aClass){
map=_st((smalltalk.Dictionary || Dictionary))._new();
map;
_st(aClass)._protocolsDo_((function(category,methods){
$1=_st(category)._match_(_st("^\x5c*").__comma(name));
if(smalltalk.assert($1)){
return _st(map)._at_put_(category,methods);
};
}));
return _st(_st(_st(map)._keys())._sorted_((function(a,b){
return _st(a).__lt_eq(b);
})))._do_((function(category){
var methods;
methods=_st(map)._at_(category);
methods;
return _st(self)._exportMethods_category_of_on_(methods,category,aClass,aStream);
}));
}));
}));
return self}, self, "exportPackageExtensionsOf:on:", [package,aStream], smalltalk.ChunkExporter)},
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
return smalltalk.withContext(function($ctx) { var $1,$2;
_st(aStream)._nextPutAll_("smalltalk.addClass(");
_st(aStream)._nextPutAll_(_st(_st("'").__comma(_st(self)._classNameFor_(aClass))).__comma("', "));
_st(aStream)._nextPutAll_(_st("smalltalk.").__comma(_st(self)._classNameFor_(_st(aClass)._superclass())));
$1=_st(aStream)._nextPutAll_(", [");
_st(_st(aClass)._instanceVariableNames())._do_separatedBy_((function(each){
return _st(aStream)._nextPutAll_(_st(_st("'").__comma(each)).__comma("'"));
}),(function(){
return _st(aStream)._nextPutAll_(", ");
}));
_st(aStream)._nextPutAll_("], '");
_st(aStream)._nextPutAll_(_st(_st(aClass)._category()).__comma("'"));
$2=_st(aStream)._nextPutAll_(");");
_st(aStream)._lf();
return self}, self, "exportDefinitionOf:on:", [aClass,aStream], smalltalk.StrippedExporter)},
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
return smalltalk.withContext(function($ctx) { var $1;
_st(aStream)._nextPutAll_("smalltalk.addMethod(");
_st(aStream)._lf();
_st(aStream)._nextPutAll_(_st(_st(_st(_st(aMethod)._selector())._asSelector())._asJavascript()).__comma(","));
_st(aStream)._lf();
_st(aStream)._nextPutAll_("smalltalk.method({");
_st(aStream)._lf();
_st(aStream)._nextPutAll_(_st(_st("selector: ").__comma(_st(_st(aMethod)._selector())._asJavascript())).__comma(","));
_st(aStream)._lf();
_st(aStream)._nextPutAll_(_st("fn: ").__comma(_st(_st(aMethod)._fn())._compiledSource()));
_st(aStream)._lf();
_st(aStream)._nextPutAll_("}),");
_st(aStream)._lf();
_st(aStream)._nextPutAll_(_st("smalltalk.").__comma(_st(self)._classNameFor_(aClass)));
_st(aStream)._nextPutAll_(");");
_st(aStream)._lf();
$1=_st(aStream)._lf();
return self}, self, "exportMethod:of:on:", [aMethod,aClass,aStream], smalltalk.StrippedExporter)},
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
return smalltalk.withContext(function($ctx) { var $1;
var chunk;
var result;
var parser;
var lastEmpty;
parser=_st((smalltalk.ChunkParser || ChunkParser))._on_(aStream);
lastEmpty=false;
_st((function(){
chunk=_st(parser)._nextChunk();
chunk;
return _st(chunk)._isNil();
}))._whileFalse_((function(){
$1=_st(chunk)._isEmpty();
if(smalltalk.assert($1)){
lastEmpty=true;
return lastEmpty;
} else {
result=_st(_st((smalltalk.Compiler || Compiler))._new())._evaluateExpression_(chunk);
result;
if(smalltalk.assert(lastEmpty)){
lastEmpty=false;
lastEmpty;
return _st(result)._scanFrom_(parser);
};
};
}));
return self}, self, "import:", [aStream], smalltalk.Importer)},
args: ["aStream"],
source: "import: aStream\x0a    | chunk result parser lastEmpty |\x0a    parser := ChunkParser on: aStream.\x0a    lastEmpty := false.\x0a    [chunk := parser nextChunk.\x0a     chunk isNil] whileFalse: [\x0a        chunk isEmpty\x0a       \x09\x09ifTrue: [lastEmpty := true]\x0a       \x09\x09ifFalse: [\x0a        \x09\x09result := Compiler new evaluateExpression: chunk.\x0a        \x09\x09lastEmpty \x0a            \x09\x09\x09ifTrue: [\x0a                                  \x09lastEmpty := false.\x0a                                  \x09result scanFrom: parser]]]",
messageSends: ["on:", "whileFalse:", "ifTrue:ifFalse:", "evaluateExpression:", "new", "ifTrue:", "scanFrom:", "isEmpty", "nextChunk", "isNil"],
referencedClasses: ["ChunkParser", "Compiler"]
}),
smalltalk.Importer);



smalltalk.addClass('PackageLoader', smalltalk.Object, [], 'Importer-Exporter');
smalltalk.addMethod(
"_initializePackageNamed_prefix_",
smalltalk.method({
selector: "initializePackageNamed:prefix:",
category: 'not yet classified',
fn: function (packageName,aString){
var self=this;
return smalltalk.withContext(function($ctx) { var $1,$2;
_st(_st(_st((smalltalk.Package || Package))._named_(packageName))._classes())._do_((function(each){
smalltalk.init(each);
;
return _st(each)._initialize();
}));
$1=_st((smalltalk.Package || Package))._named_(packageName);
_st($1)._commitPathJs_(_st(_st("/").__comma(aString)).__comma("/js"));
$2=_st($1)._commitPathSt_(_st(_st("/").__comma(aString)).__comma("/st"));
return self}, self, "initializePackageNamed:prefix:", [packageName,aString], smalltalk.PackageLoader)},
args: ["packageName", "aString"],
source: "initializePackageNamed: packageName prefix: aString\x0a\x0a\x09(Package named: packageName) classes do: [ :each |\x0a    \x09<smalltalk.init(each)>.\x0a        each initialize. ].\x0a        \x0a    (Package named: packageName) \x0a    \x09commitPathJs: '/', aString, '/js';\x0a        commitPathSt: '/', aString, '/st'",
messageSends: ["do:", "initialize", "classes", "named:", "commitPathJs:", ",", "commitPathSt:"],
referencedClasses: ["Package"]
}),
smalltalk.PackageLoader);

smalltalk.addMethod(
"_loadPackage_prefix_",
smalltalk.method({
selector: "loadPackage:prefix:",
category: 'not yet classified',
fn: function (packageName,aString){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
var url;
url=_st(_st(_st(_st("/").__comma(aString)).__comma("/js/")).__comma(packageName)).__comma(".js");
_st(jQuery)._ajax_options_(url,smalltalk.HashedCollection._fromPairs_([_st("type").__minus_gt("GET"),_st("dataType").__minus_gt("script"),_st("complete").__minus_gt((function(jqXHR,textStatus){
$1=_st(_st(jqXHR)._readyState()).__eq((4));
if(smalltalk.assert($1)){
return _st(self)._initializePackageNamed_prefix_(packageName,aString);
};
})),_st("error").__minus_gt((function(){
return _st(window)._alert_(_st("Could not load package at:  ").__comma(url));
}))]));
return self}, self, "loadPackage:prefix:", [packageName,aString], smalltalk.PackageLoader)},
args: ["packageName", "aString"],
source: "loadPackage: packageName prefix: aString\x09\x0a\x09| url |\x0a    url := '/', aString, '/js/', packageName, '.js'.\x0a\x09jQuery \x0a\x09\x09ajax: url\x0a        options: #{\x0a\x09\x09\x09'type' -> 'GET'.\x0a\x09\x09\x09'dataType' -> 'script'.\x0a    \x09\x09'complete' -> [ :jqXHR :textStatus | \x0a\x09\x09\x09\x09jqXHR readyState = 4 \x0a                \x09ifTrue: [ self initializePackageNamed: packageName prefix: aString ] ].\x0a\x09\x09\x09'error' -> [ window alert: 'Could not load package at:  ', url ]\x0a\x09\x09}",
messageSends: [",", "ajax:options:", "->", "ifTrue:", "initializePackageNamed:prefix:", "=", "readyState", "alert:"],
referencedClasses: []
}),
smalltalk.PackageLoader);

smalltalk.addMethod(
"_loadPackages_prefix_",
smalltalk.method({
selector: "loadPackages:prefix:",
category: 'not yet classified',
fn: function (aCollection,aString){
var self=this;
return smalltalk.withContext(function($ctx) { _st(aCollection)._do_((function(each){
return _st(self)._loadPackage_prefix_(each,aString);
}));
return self}, self, "loadPackages:prefix:", [aCollection,aString], smalltalk.PackageLoader)},
args: ["aCollection", "aString"],
source: "loadPackages: aCollection prefix: aString\x0a\x09aCollection do: [ :each |\x0a    \x09self loadPackage: each prefix: aString ]",
messageSends: ["do:", "loadPackage:prefix:"],
referencedClasses: []
}),
smalltalk.PackageLoader);


smalltalk.addMethod(
"_loadPackages_prefix_",
smalltalk.method({
selector: "loadPackages:prefix:",
category: 'not yet classified',
fn: function (aCollection,aString){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._new())._loadPackages_prefix_(aCollection,aString);
return $1;
}, self, "loadPackages:prefix:", [aCollection,aString], smalltalk.PackageLoader.klass)},
args: ["aCollection", "aString"],
source: "loadPackages: aCollection prefix: aString\x0a\x09^ self new loadPackages: aCollection prefix: aString",
messageSends: ["loadPackages:prefix:", "new"],
referencedClasses: []
}),
smalltalk.PackageLoader.klass);


