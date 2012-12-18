smalltalk.addPackage('Importer-Exporter', {});
smalltalk.addClass('ChunkParser', smalltalk.Object, ['stream'], 'Importer-Exporter');
smalltalk.addMethod(
"_nextChunk",
smalltalk.method({
selector: "nextChunk",
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
}, self, "nextChunk", [], smalltalk.ChunkParser)}
}),
smalltalk.ChunkParser);

smalltalk.addMethod(
"_stream_",
smalltalk.method({
selector: "stream:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx) { self["@stream"]=aStream;
return self}, self, "stream:", [aStream], smalltalk.ChunkParser)}
}),
smalltalk.ChunkParser);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._new())._stream_(aStream);
return $1;
}, self, "on:", [aStream], smalltalk.ChunkParser.klass)}
}),
smalltalk.ChunkParser.klass);


smalltalk.addClass('Exporter', smalltalk.Object, [], 'Importer-Exporter');
smalltalk.addMethod(
"_classNameFor_",
smalltalk.method({
selector: "classNameFor:",
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
}, self, "classNameFor:", [aClass], smalltalk.Exporter)}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportAll",
smalltalk.method({
selector: "exportAll",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st((smalltalk.String || String))._streamContents_((function(stream){
return _st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._packages())._do_((function(pkg){
return _st(stream)._nextPutAll_(_st(self)._exportPackage_(_st(pkg)._name()));
}));
}));
return $1;
}, self, "exportAll", [], smalltalk.Exporter)}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportClass_",
smalltalk.method({
selector: "exportClass:",
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
}, self, "exportClass:", [aClass], smalltalk.Exporter)}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportDefinitionOf_on_",
smalltalk.method({
selector: "exportDefinitionOf:on:",
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
return self}, self, "exportDefinitionOf:on:", [aClass,aStream], smalltalk.Exporter)}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportMetaDefinitionOf_on_",
smalltalk.method({
selector: "exportMetaDefinitionOf:on:",
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
return self}, self, "exportMetaDefinitionOf:on:", [aClass,aStream], smalltalk.Exporter)}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportMethod_of_on_",
smalltalk.method({
selector: "exportMethod:of:on:",
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
return self}, self, "exportMethod:of:on:", [aMethod,aClass,aStream], smalltalk.Exporter)}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportMethodsOf_on_",
smalltalk.method({
selector: "exportMethodsOf:on:",
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
return self}, self, "exportMethodsOf:on:", [aClass,aStream], smalltalk.Exporter)}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportPackage_",
smalltalk.method({
selector: "exportPackage:",
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
}, self, "exportPackage:", [packageName], smalltalk.Exporter)}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportPackageDefinitionOf_on_",
smalltalk.method({
selector: "exportPackageDefinitionOf:on:",
fn: function (package,aStream){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
_st(aStream)._nextPutAll_("smalltalk.addPackage(");
$1=_st(aStream)._nextPutAll_(_st(_st(_st(_st("'").__comma(_st(package)._name())).__comma("', ")).__comma(_st(package)._propertiesAsJSON())).__comma(");"));
_st(aStream)._lf();
return self}, self, "exportPackageDefinitionOf:on:", [package,aStream], smalltalk.Exporter)}
}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportPackageExtensionsOf_on_",
smalltalk.method({
selector: "exportPackageExtensionsOf:on:",
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
return self}, self, "exportPackageExtensionsOf:on:", [package,aStream], smalltalk.Exporter)}
}),
smalltalk.Exporter);



smalltalk.addClass('ChunkExporter', smalltalk.Exporter, [], 'Importer-Exporter');
smalltalk.addMethod(
"_chunkEscape_",
smalltalk.method({
selector: "chunkEscape:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(aString)._replace_with_("!","!!"))._trimBoth();
return $1;
}, self, "chunkEscape:", [aString], smalltalk.ChunkExporter)}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_classNameFor_",
smalltalk.method({
selector: "classNameFor:",
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
}, self, "classNameFor:", [aClass], smalltalk.ChunkExporter)}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportDefinitionOf_on_",
smalltalk.method({
selector: "exportDefinitionOf:on:",
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
return self}, self, "exportDefinitionOf:on:", [aClass,aStream], smalltalk.ChunkExporter)}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportMetaDefinitionOf_on_",
smalltalk.method({
selector: "exportMetaDefinitionOf:on:",
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
return self}, self, "exportMetaDefinitionOf:on:", [aClass,aStream], smalltalk.ChunkExporter)}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportMethod_of_on_",
smalltalk.method({
selector: "exportMethod:of:on:",
fn: function (aMethod,aClass,aStream){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
_st(aStream)._lf();
_st(aStream)._lf();
_st(aStream)._nextPutAll_(_st(self)._chunkEscape_(_st(aMethod)._source()));
_st(aStream)._lf();
$1=_st(aStream)._nextPutAll_("!");
return self}, self, "exportMethod:of:on:", [aMethod,aClass,aStream], smalltalk.ChunkExporter)}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportMethods_category_of_on_",
smalltalk.method({
selector: "exportMethods:category:of:on:",
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
return self}, self, "exportMethods:category:of:on:", [methods,category,aClass,aStream], smalltalk.ChunkExporter)}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportMethodsOf_on_",
smalltalk.method({
selector: "exportMethodsOf:on:",
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
return self}, self, "exportMethodsOf:on:", [aClass,aStream], smalltalk.ChunkExporter)}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportPackageDefinitionOf_on_",
smalltalk.method({
selector: "exportPackageDefinitionOf:on:",
fn: function (package,aStream){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
_st(aStream)._nextPutAll_(_st(_st(_st(_st("Smalltalk current createPackage: '").__comma(_st(package)._name())).__comma("' properties: ")).__comma(_st(_st(package)._properties())._storeString())).__comma("!"));
$1=_st(aStream)._lf();
return self}, self, "exportPackageDefinitionOf:on:", [package,aStream], smalltalk.ChunkExporter)}
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportPackageExtensionsOf_on_",
smalltalk.method({
selector: "exportPackageExtensionsOf:on:",
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
return self}, self, "exportPackageExtensionsOf:on:", [package,aStream], smalltalk.ChunkExporter)}
}),
smalltalk.ChunkExporter);



smalltalk.addClass('StrippedExporter', smalltalk.Exporter, [], 'Importer-Exporter');
smalltalk.addMethod(
"_exportDefinitionOf_on_",
smalltalk.method({
selector: "exportDefinitionOf:on:",
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
return self}, self, "exportDefinitionOf:on:", [aClass,aStream], smalltalk.StrippedExporter)}
}),
smalltalk.StrippedExporter);

smalltalk.addMethod(
"_exportMethod_of_on_",
smalltalk.method({
selector: "exportMethod:of:on:",
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
return self}, self, "exportMethod:of:on:", [aMethod,aClass,aStream], smalltalk.StrippedExporter)}
}),
smalltalk.StrippedExporter);



smalltalk.addClass('Importer', smalltalk.Object, [], 'Importer-Exporter');
smalltalk.addMethod(
"_import_",
smalltalk.method({
selector: "import:",
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
return self}, self, "import:", [aStream], smalltalk.Importer)}
}),
smalltalk.Importer);



smalltalk.addClass('PackageLoader', smalltalk.Object, [], 'Importer-Exporter');
smalltalk.addMethod(
"_initializePackageNamed_prefix_",
smalltalk.method({
selector: "initializePackageNamed:prefix:",
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
return self}, self, "initializePackageNamed:prefix:", [packageName,aString], smalltalk.PackageLoader)}
}),
smalltalk.PackageLoader);

smalltalk.addMethod(
"_loadPackage_prefix_",
smalltalk.method({
selector: "loadPackage:prefix:",
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
return self}, self, "loadPackage:prefix:", [packageName,aString], smalltalk.PackageLoader)}
}),
smalltalk.PackageLoader);

smalltalk.addMethod(
"_loadPackages_prefix_",
smalltalk.method({
selector: "loadPackages:prefix:",
fn: function (aCollection,aString){
var self=this;
return smalltalk.withContext(function($ctx) { _st(aCollection)._do_((function(each){
return _st(self)._loadPackage_prefix_(each,aString);
}));
return self}, self, "loadPackages:prefix:", [aCollection,aString], smalltalk.PackageLoader)}
}),
smalltalk.PackageLoader);


smalltalk.addMethod(
"_loadPackages_prefix_",
smalltalk.method({
selector: "loadPackages:prefix:",
fn: function (aCollection,aString){
var self=this;
return smalltalk.withContext(function($ctx) { var $1;
$1=_st(_st(self)._new())._loadPackages_prefix_(aCollection,aString);
return $1;
}, self, "loadPackages:prefix:", [aCollection,aString], smalltalk.PackageLoader.klass)}
}),
smalltalk.PackageLoader.klass);


