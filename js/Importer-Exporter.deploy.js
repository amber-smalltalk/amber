smalltalk.addPackage('Importer-Exporter');
smalltalk.addClass('ChunkParser', smalltalk.Object, ['stream'], 'Importer-Exporter');
smalltalk.addMethod(
"_nextChunk",
smalltalk.method({
selector: "nextChunk",
fn: function (){
var self=this;
var char,result,chunk;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
var $early={};
try {
result=_st("")._writeStream();
_st((function(){
return smalltalk.withContext(function($ctx2) {char=_st(self["@stream"])._next();
char;
return _st(char)._notNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {$1=_st(char).__eq("!");
if(smalltalk.assert($1)){
$2=_st(_st(self["@stream"])._peek()).__eq("!");
if(smalltalk.assert($2)){
_st(self["@stream"])._next();
} else {
$3=_st(_st(result)._contents())._trimBoth();
throw $early=[$3];
};
};
return _st(result)._nextPut_(char);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return nil;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"nextChunk",{char:char,result:result,chunk:chunk},smalltalk.ChunkParser)})},
messageSends: ["writeStream", "whileTrue:", "ifTrue:", "ifTrue:ifFalse:", "next", "trimBoth", "contents", "=", "peek", "nextPut:", "notNil"]}),
smalltalk.ChunkParser);

smalltalk.addMethod(
"_stream_",
smalltalk.method({
selector: "stream:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@stream"]=aStream;
return self}, function($ctx1) {$ctx1.fill(self,"stream:",{aStream:aStream},smalltalk.ChunkParser)})},
messageSends: []}),
smalltalk.ChunkParser);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._stream_(aStream);
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aStream:aStream},smalltalk.ChunkParser.klass)})},
messageSends: ["stream:", "new"]}),
smalltalk.ChunkParser.klass);


smalltalk.addClass('Exporter', smalltalk.Object, [], 'Importer-Exporter');
smalltalk.addMethod(
"_classNameFor_",
smalltalk.method({
selector: "classNameFor:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
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
}, function($ctx1) {$ctx1.fill(self,"classNameFor:",{aClass:aClass},smalltalk.Exporter)})},
messageSends: ["ifTrue:ifFalse:", ",", "name", "instanceClass", "isNil", "isMetaclass"]}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportAll",
smalltalk.method({
selector: "exportAll",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.String || String))._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._packages())._do_((function(pkg){
return smalltalk.withContext(function($ctx3) {return _st(stream)._nextPutAll_(_st(self)._exportPackage_(_st(pkg)._name()));
}, function($ctx3) {$ctx3.fillBlock({pkg:pkg},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"exportAll",{},smalltalk.Exporter)})},
messageSends: ["streamContents:", "do:", "nextPutAll:", "exportPackage:", "name", "packages", "current"]}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportClass_",
smalltalk.method({
selector: "exportClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.String || String))._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {_st(self)._exportDefinitionOf_on_(aClass,stream);
_st(self)._exportMethodsOf_on_(aClass,stream);
_st(self)._exportMetaDefinitionOf_on_(aClass,stream);
return _st(self)._exportMethodsOf_on_(_st(aClass)._class(),stream);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"exportClass:",{aClass:aClass},smalltalk.Exporter)})},
messageSends: ["streamContents:", "exportDefinitionOf:on:", "exportMethodsOf:on:", "exportMetaDefinitionOf:on:", "class"]}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportDefinitionOf_on_",
smalltalk.method({
selector: "exportDefinitionOf:on:",
fn: function (aClass,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7;
$1=aStream;
_st($1)._nextPutAll_("smalltalk.addClass(");
_st($1)._nextPutAll_(_st(_st("'").__comma(_st(self)._classNameFor_(aClass))).__comma("', "));
_st($1)._nextPutAll_(_st("smalltalk.").__comma(_st(self)._classNameFor_(_st(aClass)._superclass())));
$2=_st($1)._nextPutAll_(", [");
_st(_st(aClass)._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(aStream)._nextPutAll_(_st(_st("'").__comma(each)).__comma("'"));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return _st(aStream)._nextPutAll_(", ");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=aStream;
_st($3)._nextPutAll_("], '");
_st($3)._nextPutAll_(_st(_st(aClass)._category()).__comma("'"));
$4=_st($3)._nextPutAll_(");");
$5=_st(_st(aClass)._comment())._notEmpty();
if(smalltalk.assert($5)){
$6=aStream;
_st($6)._lf();
_st($6)._nextPutAll_("smalltalk.");
_st($6)._nextPutAll_(_st(self)._classNameFor_(aClass));
_st($6)._nextPutAll_(".comment=");
$7=_st($6)._nextPutAll_(_st(_st(aClass)._comment())._asJavascript());
$7;
};
_st(aStream)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportDefinitionOf:on:",{aClass:aClass,aStream:aStream},smalltalk.Exporter)})},
messageSends: ["nextPutAll:", ",", "classNameFor:", "superclass", "do:separatedBy:", "instanceVariableNames", "category", "ifTrue:", "lf", "asJavascript", "comment", "notEmpty"]}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportMetaDefinitionOf_on_",
smalltalk.method({
selector: "exportMetaDefinitionOf:on:",
fn: function (aClass,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=_st(_st(_st(aClass)._class())._instanceVariableNames())._isEmpty();
if(! smalltalk.assert($1)){
$2=aStream;
_st($2)._nextPutAll_(_st("smalltalk.").__comma(_st(self)._classNameFor_(_st(aClass)._class())));
$3=_st($2)._nextPutAll_(".iVarNames = [");
$3;
_st(_st(_st(aClass)._class())._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(aStream)._nextPutAll_(_st(_st("'").__comma(each)).__comma("'"));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return _st(aStream)._nextPutAll_(",");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(aStream)._nextPutAll_(_st("];").__comma(_st((smalltalk.String || String))._lf()));
};
return self}, function($ctx1) {$ctx1.fill(self,"exportMetaDefinitionOf:on:",{aClass:aClass,aStream:aStream},smalltalk.Exporter)})},
messageSends: ["ifFalse:", "nextPutAll:", ",", "classNameFor:", "class", "do:separatedBy:", "instanceVariableNames", "lf", "isEmpty"]}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportMethod_of_on_",
smalltalk.method({
selector: "exportMethod:of:on:",
fn: function (aMethod,aClass,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
$1=aStream;
_st($1)._nextPutAll_("smalltalk.addMethod(");
_st($1)._lf();
_st($1)._nextPutAll_(_st(_st(_st(_st(aMethod)._selector())._asSelector())._asJavascript()).__comma(","));
_st($1)._lf();
_st($1)._nextPutAll_("smalltalk.method({");
_st($1)._lf();
_st($1)._nextPutAll_(_st(_st("selector: ").__comma(_st(_st(aMethod)._selector())._asJavascript())).__comma(","));
_st($1)._lf();
_st($1)._nextPutAll_(_st(_st("category: '").__comma(_st(aMethod)._category())).__comma("',"));
_st($1)._lf();
_st($1)._nextPutAll_(_st(_st("fn: ").__comma(_st(_st(aMethod)._fn())._compiledSource())).__comma(","));
_st($1)._lf();
_st($1)._nextPutAll_(_st(_st("args: ").__comma(_st(_st(aMethod)._arguments())._asJavascript())).__comma(","));
_st($1)._lf();
_st($1)._nextPutAll_(_st(_st("source: ").__comma(_st(_st(aMethod)._source())._asJavascript())).__comma(","));
_st($1)._lf();
_st($1)._nextPutAll_(_st(_st("messageSends: ").__comma(_st(_st(aMethod)._messageSends())._asJavascript())).__comma(","));
_st($1)._lf();
$2=_st($1)._nextPutAll_(_st("referencedClasses: ").__comma(_st(_st(aMethod)._referencedClasses())._asJavascript()));
$3=aStream;
_st($3)._lf();
_st($3)._nextPutAll_("}),");
_st($3)._lf();
_st($3)._nextPutAll_(_st("smalltalk.").__comma(_st(self)._classNameFor_(aClass)));
_st($3)._nextPutAll_(");");
_st($3)._lf();
$4=_st($3)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportMethod:of:on:",{aMethod:aMethod,aClass:aClass,aStream:aStream},smalltalk.Exporter)})},
messageSends: ["nextPutAll:", "lf", ",", "asJavascript", "asSelector", "selector", "category", "compiledSource", "fn", "arguments", "source", "messageSends", "referencedClasses", "classNameFor:"]}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportMethodsOf_on_",
smalltalk.method({
selector: "exportMethodsOf:on:",
fn: function (aClass,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(_st(_st(_st(aClass)._methodDictionary())._values())._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) {return _st(_st(a)._selector()).__lt_eq(_st(b)._selector());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})})))._do_((function(each){
return smalltalk.withContext(function($ctx2) {$1=_st(_st(each)._category())._match_("^\x5c*");
if(! smalltalk.assert($1)){
return _st(self)._exportMethod_of_on_(each,aClass,aStream);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(aStream)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportMethodsOf:on:",{aClass:aClass,aStream:aStream},smalltalk.Exporter)})},
messageSends: ["do:", "ifFalse:", "exportMethod:of:on:", "match:", "category", "sorted:", "<=", "selector", "values", "methodDictionary", "lf"]}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportPackage_",
smalltalk.method({
selector: "exportPackage:",
fn: function (packageName){
var self=this;
var package_;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.String || String))._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {package_=_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._packageAt_(packageName);
package_;
_st(self)._exportPackageDefinitionOf_on_(package_,stream);
_st(_st(_st(package_)._sortedClasses())._asSet())._do_((function(each){
return smalltalk.withContext(function($ctx3) {return _st(stream)._nextPutAll_(_st(self)._exportClass_(each));
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
return _st(self)._exportPackageExtensionsOf_on_(package_,stream);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"exportPackage:",{packageName:packageName,package_:package_},smalltalk.Exporter)})},
messageSends: ["streamContents:", "packageAt:", "current", "exportPackageDefinitionOf:on:", "do:", "nextPutAll:", "exportClass:", "asSet", "sortedClasses", "exportPackageExtensionsOf:on:"]}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportPackageDefinitionOf_on_",
smalltalk.method({
selector: "exportPackageDefinitionOf:on:",
fn: function (package_,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=aStream;
_st($1)._nextPutAll_("smalltalk.addPackage(");
_st($1)._nextPutAll_(_st(_st("'").__comma(_st(package_)._name())).__comma("');"));
$2=_st($1)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportPackageDefinitionOf:on:",{package_:package_,aStream:aStream},smalltalk.Exporter)})},
messageSends: ["nextPutAll:", ",", "name", "lf"]}),
smalltalk.Exporter);

smalltalk.addMethod(
"_exportPackageExtensionsOf_on_",
smalltalk.method({
selector: "exportPackageExtensionsOf:on:",
fn: function (package_,aStream){
var self=this;
var name;
return smalltalk.withContext(function($ctx1) { var $1;
name=_st(package_)._name();
_st(_st((smalltalk.Package || Package))._sortedClasses_(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._classes()))._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st([each,_st(each)._class()])._do_((function(aClass){
return smalltalk.withContext(function($ctx3) {return _st(_st(_st(_st(aClass)._methodDictionary())._values())._sorted_((function(a,b){
return smalltalk.withContext(function($ctx4) {return _st(_st(a)._selector()).__lt_eq(_st(b)._selector());
}, function($ctx4) {$ctx4.fillBlock({a:a,b:b},$ctx1)})})))._do_((function(method){
return smalltalk.withContext(function($ctx4) {$1=_st(_st(method)._category())._match_(_st("^\x5c*").__comma(name));
if(smalltalk.assert($1)){
return _st(self)._exportMethod_of_on_(method,aClass,aStream);
};
}, function($ctx4) {$ctx4.fillBlock({method:method},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({aClass:aClass},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"exportPackageExtensionsOf:on:",{package_:package_,aStream:aStream,name:name},smalltalk.Exporter)})},
messageSends: ["name", "do:", "ifTrue:", "exportMethod:of:on:", "match:", ",", "category", "sorted:", "<=", "selector", "values", "methodDictionary", "class", "sortedClasses:", "classes", "current"]}),
smalltalk.Exporter);



smalltalk.addClass('ChunkExporter', smalltalk.Exporter, [], 'Importer-Exporter');
smalltalk.addMethod(
"_chunkEscape_",
smalltalk.method({
selector: "chunkEscape:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(aString)._replace_with_("!","!!"))._trimBoth();
return $1;
}, function($ctx1) {$ctx1.fill(self,"chunkEscape:",{aString:aString},smalltalk.ChunkExporter)})},
messageSends: ["trimBoth", "replace:with:"]}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_classNameFor_",
smalltalk.method({
selector: "classNameFor:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
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
}, function($ctx1) {$ctx1.fill(self,"classNameFor:",{aClass:aClass},smalltalk.ChunkExporter)})},
messageSends: ["ifTrue:ifFalse:", ",", "name", "instanceClass", "isNil", "isMetaclass"]}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportDefinitionOf_on_",
smalltalk.method({
selector: "exportDefinitionOf:on:",
fn: function (aClass,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7;
$1=aStream;
_st($1)._nextPutAll_(_st(self)._classNameFor_(_st(aClass)._superclass()));
_st($1)._nextPutAll_(_st(" subclass: #").__comma(_st(self)._classNameFor_(aClass)));
_st($1)._lf();
_st($1)._tab();
$2=_st($1)._nextPutAll_("instanceVariableNames: '");
_st(_st(aClass)._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(aStream)._nextPutAll_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return _st(aStream)._nextPutAll_(" ");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=aStream;
_st($3)._nextPutAll_("'");
_st($3)._lf();
_st($3)._tab();
_st($3)._nextPutAll_(_st(_st("package: '").__comma(_st(aClass)._category())).__comma("'!"));
$4=_st($3)._lf();
$5=_st(_st(aClass)._comment())._notEmpty();
if(smalltalk.assert($5)){
$6=aStream;
_st($6)._nextPutAll_(_st(_st("!").__comma(_st(self)._classNameFor_(aClass))).__comma(" commentStamp!"));
_st($6)._lf();
_st($6)._nextPutAll_(_st(_st(self)._chunkEscape_(_st(aClass)._comment())).__comma("!"));
$7=_st($6)._lf();
$7;
};
_st(aStream)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportDefinitionOf:on:",{aClass:aClass,aStream:aStream},smalltalk.ChunkExporter)})},
messageSends: ["nextPutAll:", "classNameFor:", "superclass", ",", "lf", "tab", "do:separatedBy:", "instanceVariableNames", "category", "ifTrue:", "chunkEscape:", "comment", "notEmpty"]}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportMetaDefinitionOf_on_",
smalltalk.method({
selector: "exportMetaDefinitionOf:on:",
fn: function (aClass,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5;
$1=_st(_st(_st(aClass)._class())._instanceVariableNames())._isEmpty();
if(! smalltalk.assert($1)){
$2=aStream;
_st($2)._nextPutAll_(_st(self)._classNameFor_(_st(aClass)._class()));
$3=_st($2)._nextPutAll_(" instanceVariableNames: '");
$3;
_st(_st(_st(aClass)._class())._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(aStream)._nextPutAll_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return _st(aStream)._nextPutAll_(" ");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$4=aStream;
_st($4)._nextPutAll_("'!");
_st($4)._lf();
$5=_st($4)._lf();
$5;
};
return self}, function($ctx1) {$ctx1.fill(self,"exportMetaDefinitionOf:on:",{aClass:aClass,aStream:aStream},smalltalk.ChunkExporter)})},
messageSends: ["ifFalse:", "nextPutAll:", "classNameFor:", "class", "do:separatedBy:", "instanceVariableNames", "lf", "isEmpty"]}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportMethod_of_on_",
smalltalk.method({
selector: "exportMethod:of:on:",
fn: function (aMethod,aClass,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=aStream;
_st($1)._lf();
_st($1)._lf();
_st($1)._nextPutAll_(_st(self)._chunkEscape_(_st(aMethod)._source()));
_st($1)._lf();
$2=_st($1)._nextPutAll_("!");
return self}, function($ctx1) {$ctx1.fill(self,"exportMethod:of:on:",{aMethod:aMethod,aClass:aClass,aStream:aStream},smalltalk.ChunkExporter)})},
messageSends: ["lf", "nextPutAll:", "chunkEscape:", "source"]}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportMethods_category_of_on_",
smalltalk.method({
selector: "exportMethods:category:of:on:",
fn: function (methods,category,aClass,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
$1=aStream;
_st($1)._nextPutAll_(_st("!").__comma(_st(self)._classNameFor_(aClass)));
$2=_st($1)._nextPutAll_(_st(_st(" methodsFor: '").__comma(category)).__comma("'!"));
_st(_st(methods)._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) {return _st(_st(a)._selector()).__lt_eq(_st(b)._selector());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})})))._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self)._exportMethod_of_on_(each,aClass,aStream);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$3=aStream;
_st($3)._nextPutAll_(" !");
_st($3)._lf();
$4=_st($3)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportMethods:category:of:on:",{methods:methods,category:category,aClass:aClass,aStream:aStream},smalltalk.ChunkExporter)})},
messageSends: ["nextPutAll:", ",", "classNameFor:", "do:", "exportMethod:of:on:", "sorted:", "<=", "selector", "lf"]}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportMethodsOf_on_",
smalltalk.method({
selector: "exportMethodsOf:on:",
fn: function (aClass,aStream){
var self=this;
var map;
return smalltalk.withContext(function($ctx1) { var $1;
map=_st((smalltalk.Dictionary || Dictionary))._new();
_st(aClass)._protocolsDo_((function(category,methods){
return smalltalk.withContext(function($ctx2) {$1=_st(category)._match_("^\x5c*");
if(! smalltalk.assert($1)){
return _st(map)._at_put_(category,methods);
};
}, function($ctx2) {$ctx2.fillBlock({category:category,methods:methods},$ctx1)})}));
_st(_st(_st(map)._keys())._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) {return _st(a).__lt_eq(b);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})})))._do_((function(category){
var methods;
return smalltalk.withContext(function($ctx2) {methods=_st(map)._at_(category);
methods;
return _st(self)._exportMethods_category_of_on_(methods,category,aClass,aStream);
}, function($ctx2) {$ctx2.fillBlock({category:category,methods:methods},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"exportMethodsOf:on:",{aClass:aClass,aStream:aStream,map:map},smalltalk.ChunkExporter)})},
messageSends: ["new", "protocolsDo:", "ifFalse:", "at:put:", "match:", "do:", "at:", "exportMethods:category:of:on:", "sorted:", "<=", "keys"]}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportPackageDefinitionOf_on_",
smalltalk.method({
selector: "exportPackageDefinitionOf:on:",
fn: function (package_,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=aStream;
_st($1)._nextPutAll_(_st(_st("Smalltalk current createPackage: '").__comma(_st(package_)._name())).__comma("'!"));
$2=_st($1)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportPackageDefinitionOf:on:",{package_:package_,aStream:aStream},smalltalk.ChunkExporter)})},
messageSends: ["nextPutAll:", ",", "name", "lf"]}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
"_exportPackageExtensionsOf_on_",
smalltalk.method({
selector: "exportPackageExtensionsOf:on:",
fn: function (package_,aStream){
var self=this;
var name,map;
return smalltalk.withContext(function($ctx1) { var $1;
name=_st(package_)._name();
_st(_st((smalltalk.Package || Package))._sortedClasses_(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._classes()))._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st([each,_st(each)._class()])._do_((function(aClass){
return smalltalk.withContext(function($ctx3) {map=_st((smalltalk.Dictionary || Dictionary))._new();
map;
_st(aClass)._protocolsDo_((function(category,methods){
return smalltalk.withContext(function($ctx4) {$1=_st(category)._match_(_st("^\x5c*").__comma(name));
if(smalltalk.assert($1)){
return _st(map)._at_put_(category,methods);
};
}, function($ctx4) {$ctx4.fillBlock({category:category,methods:methods},$ctx1)})}));
return _st(_st(_st(map)._keys())._sorted_((function(a,b){
return smalltalk.withContext(function($ctx4) {return _st(a).__lt_eq(b);
}, function($ctx4) {$ctx4.fillBlock({a:a,b:b},$ctx1)})})))._do_((function(category){
var methods;
return smalltalk.withContext(function($ctx4) {methods=_st(map)._at_(category);
methods;
return _st(self)._exportMethods_category_of_on_(methods,category,aClass,aStream);
}, function($ctx4) {$ctx4.fillBlock({category:category,methods:methods},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({aClass:aClass},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"exportPackageExtensionsOf:on:",{package_:package_,aStream:aStream,name:name,map:map},smalltalk.ChunkExporter)})},
messageSends: ["name", "do:", "new", "protocolsDo:", "ifTrue:", "at:put:", "match:", ",", "at:", "exportMethods:category:of:on:", "sorted:", "<=", "keys", "class", "sortedClasses:", "classes", "current"]}),
smalltalk.ChunkExporter);



smalltalk.addClass('StrippedExporter', smalltalk.Exporter, [], 'Importer-Exporter');
smalltalk.addMethod(
"_exportDefinitionOf_on_",
smalltalk.method({
selector: "exportDefinitionOf:on:",
fn: function (aClass,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
$1=aStream;
_st($1)._nextPutAll_("smalltalk.addClass(");
_st($1)._nextPutAll_(_st(_st("'").__comma(_st(self)._classNameFor_(aClass))).__comma("', "));
_st($1)._nextPutAll_(_st("smalltalk.").__comma(_st(self)._classNameFor_(_st(aClass)._superclass())));
$2=_st($1)._nextPutAll_(", [");
_st(_st(aClass)._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(aStream)._nextPutAll_(_st(_st("'").__comma(each)).__comma("'"));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return _st(aStream)._nextPutAll_(", ");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=aStream;
_st($3)._nextPutAll_("], '");
_st($3)._nextPutAll_(_st(_st(aClass)._category()).__comma("'"));
$4=_st($3)._nextPutAll_(");");
_st(aStream)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportDefinitionOf:on:",{aClass:aClass,aStream:aStream},smalltalk.StrippedExporter)})},
messageSends: ["nextPutAll:", ",", "classNameFor:", "superclass", "do:separatedBy:", "instanceVariableNames", "category", "lf"]}),
smalltalk.StrippedExporter);

smalltalk.addMethod(
"_exportMethod_of_on_",
smalltalk.method({
selector: "exportMethod:of:on:",
fn: function (aMethod,aClass,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=aStream;
_st($1)._nextPutAll_("smalltalk.addMethod(");
_st($1)._lf();
_st($1)._nextPutAll_(_st(_st(_st(_st(aMethod)._selector())._asSelector())._asJavascript()).__comma(","));
_st($1)._lf();
_st($1)._nextPutAll_("smalltalk.method({");
_st($1)._lf();
_st($1)._nextPutAll_(_st(_st("selector: ").__comma(_st(_st(aMethod)._selector())._asJavascript())).__comma(","));
_st($1)._lf();
_st($1)._nextPutAll_(_st(_st("fn: ").__comma(_st(_st(aMethod)._fn())._compiledSource())).__comma(","));
_st($1)._lf();
_st($1)._nextPutAll_(_st("messageSends: ").__comma(_st(_st(aMethod)._messageSends())._asJavascript()));
_st($1)._nextPutAll_("}),");
_st($1)._lf();
_st($1)._nextPutAll_(_st("smalltalk.").__comma(_st(self)._classNameFor_(aClass)));
_st($1)._nextPutAll_(");");
_st($1)._lf();
$2=_st($1)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportMethod:of:on:",{aMethod:aMethod,aClass:aClass,aStream:aStream},smalltalk.StrippedExporter)})},
messageSends: ["nextPutAll:", "lf", ",", "asJavascript", "asSelector", "selector", "compiledSource", "fn", "messageSends", "classNameFor:"]}),
smalltalk.StrippedExporter);



smalltalk.addClass('Importer', smalltalk.Object, [], 'Importer-Exporter');
smalltalk.addMethod(
"_import_",
smalltalk.method({
selector: "import:",
fn: function (aStream){
var self=this;
var chunk,result,parser,lastEmpty;
return smalltalk.withContext(function($ctx1) { var $1,$2;
parser=_st((smalltalk.ChunkParser || ChunkParser))._on_(aStream);
lastEmpty=false;
_st((function(){
return smalltalk.withContext(function($ctx2) {chunk=_st(parser)._nextChunk();
chunk;
return _st(chunk)._isNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {$1=_st(chunk)._isEmpty();
if(smalltalk.assert($1)){
lastEmpty=true;
return lastEmpty;
} else {
result=_st(_st((smalltalk.Compiler || Compiler))._new())._evaluateExpression_(chunk);
result;
$2=lastEmpty;
if(smalltalk.assert($2)){
lastEmpty=false;
lastEmpty;
return _st(result)._scanFrom_(parser);
};
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"import:",{aStream:aStream,chunk:chunk,result:result,parser:parser,lastEmpty:lastEmpty},smalltalk.Importer)})},
messageSends: ["on:", "whileFalse:", "ifTrue:ifFalse:", "evaluateExpression:", "new", "ifTrue:", "scanFrom:", "isEmpty", "nextChunk", "isNil"]}),
smalltalk.Importer);



smalltalk.addClass('PackageLoader', smalltalk.Object, [], 'Importer-Exporter');
smalltalk.addMethod(
"_initializePackageNamed_prefix_",
smalltalk.method({
selector: "initializePackageNamed:prefix:",
fn: function (packageName,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.Package || Package))._named_(packageName);
_st($1)._setupClasses();
_st($1)._commitPathJs_(_st(_st("/").__comma(aString)).__comma("/js"));
$2=_st($1)._commitPathSt_(_st(_st("/").__comma(aString)).__comma("/st"));
return self}, function($ctx1) {$ctx1.fill(self,"initializePackageNamed:prefix:",{packageName:packageName,aString:aString},smalltalk.PackageLoader)})},
messageSends: ["setupClasses", "named:", "commitPathJs:", ",", "commitPathSt:"]}),
smalltalk.PackageLoader);

smalltalk.addMethod(
"_loadPackage_prefix_",
smalltalk.method({
selector: "loadPackage:prefix:",
fn: function (packageName,aString){
var self=this;
var url;
return smalltalk.withContext(function($ctx1) { var $1;
url=_st(_st(_st(_st("/").__comma(aString)).__comma("/js/")).__comma(packageName)).__comma(".js");
_st(jQuery)._ajax_options_(url,smalltalk.HashedCollection._fromPairs_([_st("type").__minus_gt("GET"),_st("dataType").__minus_gt("script"),_st("complete").__minus_gt((function(jqXHR,textStatus){
return smalltalk.withContext(function($ctx2) {$1=_st(_st(jqXHR)._readyState()).__eq((4));
if(smalltalk.assert($1)){
return _st(self)._initializePackageNamed_prefix_(packageName,aString);
};
}, function($ctx2) {$ctx2.fillBlock({jqXHR:jqXHR,textStatus:textStatus},$ctx1)})})),_st("error").__minus_gt((function(){
return smalltalk.withContext(function($ctx2) {return _st(window)._alert_(_st("Could not load package at: ").__comma(url));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))]));
return self}, function($ctx1) {$ctx1.fill(self,"loadPackage:prefix:",{packageName:packageName,aString:aString,url:url},smalltalk.PackageLoader)})},
messageSends: [",", "ajax:options:", "->", "ifTrue:", "initializePackageNamed:prefix:", "=", "readyState", "alert:"]}),
smalltalk.PackageLoader);

smalltalk.addMethod(
"_loadPackages_prefix_",
smalltalk.method({
selector: "loadPackages:prefix:",
fn: function (aCollection,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self)._loadPackage_prefix_(each,aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"loadPackages:prefix:",{aCollection:aCollection,aString:aString},smalltalk.PackageLoader)})},
messageSends: ["do:", "loadPackage:prefix:"]}),
smalltalk.PackageLoader);


smalltalk.addMethod(
"_loadPackages_prefix_",
smalltalk.method({
selector: "loadPackages:prefix:",
fn: function (aCollection,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._loadPackages_prefix_(aCollection,aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"loadPackages:prefix:",{aCollection:aCollection,aString:aString},smalltalk.PackageLoader.klass)})},
messageSends: ["loadPackages:prefix:", "new"]}),
smalltalk.PackageLoader.klass);


