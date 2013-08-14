(function(smalltalk,nil,_st){
smalltalk.addPackage('Importer-Exporter');

smalltalk.addClass('AbstractExporter', smalltalk.Object, [], 'Importer-Exporter');
smalltalk.addMethod(
smalltalk.method({
selector: "chunkEscape:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aString)._replace_with_("!","!!"))._trimBoth();
return $1;
}, function($ctx1) {$ctx1.fill(self,"chunkEscape:",{aString:aString},smalltalk.AbstractExporter)})},
messageSends: ["trimBoth", "replace:with:"]}),
smalltalk.AbstractExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "classNameFor:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
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
}, function($ctx1) {$ctx1.fill(self,"classNameFor:",{aClass:aClass},smalltalk.AbstractExporter)})},
messageSends: ["ifTrue:ifFalse:", ",", "name", "instanceClass", "isNil", "isMetaclass"]}),
smalltalk.AbstractExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "recipe",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"recipe",{},smalltalk.AbstractExporter)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.AbstractExporter);


smalltalk.AbstractExporter.klass.iVarNames = ['default'];
smalltalk.addMethod(
smalltalk.method({
selector: "default",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@default"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@default"]=self._new();
$1=self["@default"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.AbstractExporter.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.AbstractExporter.klass);


smalltalk.addClass('ChunkExporter', smalltalk.AbstractExporter, [], 'Importer-Exporter');
smalltalk.addMethod(
smalltalk.method({
selector: "exportCategoryEpilogueOf:on:",
fn: function (aCategory,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_(" !");
_st($1)._lf();
$2=_st($1)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportCategoryEpilogueOf:on:",{aCategory:aCategory,aStream:aStream},smalltalk.ChunkExporter)})},
messageSends: ["nextPutAll:", "lf"]}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportCategoryPrologueOf:on:",
fn: function (aCategory,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_("!".__comma(self._classNameFor_(_st(aCategory)._theClass())));
$2=_st($1)._nextPutAll_(_st(" methodsFor: '".__comma(_st(aCategory)._name())).__comma("'!"));
return self}, function($ctx1) {$ctx1.fill(self,"exportCategoryPrologueOf:on:",{aCategory:aCategory,aStream:aStream},smalltalk.ChunkExporter)})},
messageSends: ["nextPutAll:", ",", "classNameFor:", "theClass", "name"]}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportDefinitionOf:on:",
fn: function (aClass,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7;
$1=aStream;
_st($1)._nextPutAll_(self._classNameFor_(_st(aClass)._superclass()));
_st($1)._nextPutAll_(" subclass: #".__comma(self._classNameFor_(aClass)));
_st($1)._lf();
_st($1)._tab();
$2=_st($1)._nextPutAll_("instanceVariableNames: '");
_st(_st(aClass)._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._nextPutAll_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._nextPutAll_(" ");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=aStream;
_st($3)._nextPutAll_("'");
_st($3)._lf();
_st($3)._tab();
_st($3)._nextPutAll_(_st("package: '".__comma(_st(aClass)._category())).__comma("'!"));
$4=_st($3)._lf();
$5=_st(_st(aClass)._comment())._notEmpty();
if(smalltalk.assert($5)){
$6=aStream;
_st($6)._nextPutAll_(_st("!".__comma(self._classNameFor_(aClass))).__comma(" commentStamp!"));
_st($6)._lf();
_st($6)._nextPutAll_(_st(self._chunkEscape_(_st(aClass)._comment())).__comma("!"));
$7=_st($6)._lf();
$7;
};
_st(aStream)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportDefinitionOf:on:",{aClass:aClass,aStream:aStream},smalltalk.ChunkExporter)})},
messageSends: ["nextPutAll:", "classNameFor:", "superclass", ",", "lf", "tab", "do:separatedBy:", "instanceVariableNames", "category", "ifTrue:", "chunkEscape:", "comment", "notEmpty"]}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportMetaDefinitionOf:on:",
fn: function (aClass,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=_st(_st(_st(aClass)._class())._instanceVariableNames())._isEmpty();
if(! smalltalk.assert($1)){
$2=aStream;
_st($2)._nextPutAll_(self._classNameFor_(_st(aClass)._class()));
$3=_st($2)._nextPutAll_(" instanceVariableNames: '");
$3;
_st(_st(_st(aClass)._class())._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._nextPutAll_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._nextPutAll_(" ");
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
smalltalk.method({
selector: "exportMethod:on:",
fn: function (aMethod,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._lf();
_st($1)._lf();
_st($1)._nextPutAll_(self._chunkEscape_(_st(aMethod)._source()));
_st($1)._lf();
$2=_st($1)._nextPutAll_("!");
return self}, function($ctx1) {$ctx1.fill(self,"exportMethod:on:",{aMethod:aMethod,aStream:aStream},smalltalk.ChunkExporter)})},
messageSends: ["lf", "nextPutAll:", "chunkEscape:", "source"]}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackageDefinitionOf:on:",
fn: function (aPackage,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_(_st("Smalltalk current createPackage: '".__comma(_st(aPackage)._name())).__comma("'!"));
$2=_st($1)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportPackageDefinitionOf:on:",{aPackage:aPackage,aStream:aStream},smalltalk.ChunkExporter)})},
messageSends: ["nextPutAll:", ",", "name", "lf"]}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "extensionCategoriesOfPackage:",
fn: function (aPackage){
var self=this;
var name,map,result;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $MethodCategory(){return smalltalk.MethodCategory||(typeof MethodCategory=="undefined"?nil:MethodCategory)}
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $Package(){return smalltalk.Package||(typeof Package=="undefined"?nil:Package)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
name=_st(aPackage)._name();
result=_st($OrderedCollection())._new();
_st(_st($Package())._sortedClasses_(_st(_st($Smalltalk())._current())._classes()))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st([each,_st(each)._class()])._do_((function(aClass){
return smalltalk.withContext(function($ctx3) {
map=_st($Dictionary())._new();
map;
_st(aClass)._protocolsDo_((function(category,methods){
return smalltalk.withContext(function($ctx4) {
$1=_st(category)._match_("^\x5c*".__comma(name));
if(smalltalk.assert($1)){
return _st(map)._at_put_(category,methods);
};
}, function($ctx4) {$ctx4.fillBlock({category:category,methods:methods},$ctx3)})}));
return _st(result)._addAll_(_st(_st(_st(map)._keys())._sorted_((function(a,b){
return smalltalk.withContext(function($ctx4) {
return _st(a).__lt_eq(b);
}, function($ctx4) {$ctx4.fillBlock({a:a,b:b},$ctx3)})})))._collect_((function(category){
return smalltalk.withContext(function($ctx4) {
return _st($MethodCategory())._name_theClass_methods_(category,aClass,_st(map)._at_(category));
}, function($ctx4) {$ctx4.fillBlock({category:category},$ctx3)})})));
}, function($ctx3) {$ctx3.fillBlock({aClass:aClass},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=result;
return $2;
}, function($ctx1) {$ctx1.fill(self,"extensionCategoriesOfPackage:",{aPackage:aPackage,name:name,map:map,result:result},smalltalk.ChunkExporter)})},
messageSends: ["name", "new", "do:", "protocolsDo:", "ifTrue:", "at:put:", "match:", ",", "addAll:", "collect:", "name:theClass:methods:", "at:", "sorted:", "<=", "keys", "class", "sortedClasses:", "classes", "current"]}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "methodsOfCategory:",
fn: function (aCategory){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aCategory)._methods())._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(a)._selector()).__lt_eq(_st(b)._selector());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodsOfCategory:",{aCategory:aCategory},smalltalk.ChunkExporter)})},
messageSends: ["sorted:", "<=", "selector", "methods"]}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "ownCategoriesOfClass:",
fn: function (aClass){
var self=this;
var map;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $MethodCategory(){return smalltalk.MethodCategory||(typeof MethodCategory=="undefined"?nil:MethodCategory)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
map=_st($Dictionary())._new();
_st(aClass)._protocolsDo_((function(category,methods){
return smalltalk.withContext(function($ctx2) {
$1=_st(category)._match_("^\x5c*");
if(! smalltalk.assert($1)){
return _st(map)._at_put_(category,methods);
};
}, function($ctx2) {$ctx2.fillBlock({category:category,methods:methods},$ctx1)})}));
$2=_st(_st(_st(map)._keys())._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(a).__lt_eq(b);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})})))._collect_((function(category){
return smalltalk.withContext(function($ctx2) {
return _st($MethodCategory())._name_theClass_methods_(category,aClass,_st(map)._at_(category));
}, function($ctx2) {$ctx2.fillBlock({category:category},$ctx1)})}));
return $2;
}, function($ctx1) {$ctx1.fill(self,"ownCategoriesOfClass:",{aClass:aClass,map:map},smalltalk.ChunkExporter)})},
messageSends: ["new", "protocolsDo:", "ifFalse:", "at:put:", "match:", "collect:", "name:theClass:methods:", "at:", "sorted:", "<=", "keys"]}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "ownCategoriesOfMetaClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._ownCategoriesOfClass_(_st(aClass)._class());
return $1;
}, function($ctx1) {$ctx1.fill(self,"ownCategoriesOfMetaClass:",{aClass:aClass},smalltalk.ChunkExporter)})},
messageSends: ["ownCategoriesOfClass:", "class"]}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "recipe",
fn: function (){
var self=this;
var exportCategoryRecipe;
function $PluggableExporter(){return smalltalk.PluggableExporter||(typeof PluggableExporter=="undefined"?nil:PluggableExporter)}
return smalltalk.withContext(function($ctx1) { 
var $1;
exportCategoryRecipe=[self.__minus_gt("exportCategoryPrologueOf:on:"),[self.__minus_gt("methodsOfCategory:"),self.__minus_gt("exportMethod:on:")],self.__minus_gt("exportCategoryEpilogueOf:on:")];
$1=[self.__minus_gt("exportPackageDefinitionOf:on:"),[_st($PluggableExporter()).__minus_gt("ownClassesOfPackage:"),self.__minus_gt("exportDefinitionOf:on:"),_st([self.__minus_gt("ownCategoriesOfClass:")]).__comma(exportCategoryRecipe),self.__minus_gt("exportMetaDefinitionOf:on:"),_st([self.__minus_gt("ownCategoriesOfMetaClass:")]).__comma(exportCategoryRecipe)],_st([self.__minus_gt("extensionCategoriesOfPackage:")]).__comma(exportCategoryRecipe)];
return $1;
}, function($ctx1) {$ctx1.fill(self,"recipe",{exportCategoryRecipe:exportCategoryRecipe},smalltalk.ChunkExporter)})},
messageSends: ["->", ","]}),
smalltalk.ChunkExporter);



smalltalk.addClass('Exporter', smalltalk.AbstractExporter, [], 'Importer-Exporter');
smalltalk.addMethod(
smalltalk.method({
selector: "classNameFor:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
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
smalltalk.method({
selector: "exportDefinitionOf:on:",
fn: function (aClass,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7;
$1=aStream;
_st($1)._lf();
_st($1)._nextPutAll_("smalltalk.addClass(");
_st($1)._nextPutAll_(_st("'".__comma(self._classNameFor_(aClass))).__comma("', "));
_st($1)._nextPutAll_("smalltalk.".__comma(self._classNameFor_(_st(aClass)._superclass())));
$2=_st($1)._nextPutAll_(", [");
_st(_st(aClass)._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._nextPutAll_(_st("'".__comma(each)).__comma("'"));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._nextPutAll_(", ");
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
_st($6)._nextPutAll_(self._classNameFor_(aClass));
_st($6)._nextPutAll_(".comment=");
_st($6)._nextPutAll_(_st(_st(aClass)._comment())._asJavascript());
$7=_st($6)._nextPutAll_(";");
$7;
};
_st(aStream)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportDefinitionOf:on:",{aClass:aClass,aStream:aStream},smalltalk.Exporter)})},
messageSends: ["lf", "nextPutAll:", ",", "classNameFor:", "superclass", "do:separatedBy:", "instanceVariableNames", "category", "ifTrue:", "asJavascript", "comment", "notEmpty"]}),
smalltalk.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportMetaDefinitionOf:on:",
fn: function (aClass,aStream){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
_st(aStream)._lf();
$1=_st(_st(_st(aClass)._class())._instanceVariableNames())._isEmpty();
if(! smalltalk.assert($1)){
$2=aStream;
_st($2)._nextPutAll_("smalltalk.".__comma(self._classNameFor_(_st(aClass)._class())));
$3=_st($2)._nextPutAll_(".iVarNames = [");
$3;
_st(_st(_st(aClass)._class())._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._nextPutAll_(_st("'".__comma(each)).__comma("'"));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._nextPutAll_(",");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(aStream)._nextPutAll_("];".__comma(_st($String())._lf()));
};
return self}, function($ctx1) {$ctx1.fill(self,"exportMetaDefinitionOf:on:",{aClass:aClass,aStream:aStream},smalltalk.Exporter)})},
messageSends: ["lf", "ifFalse:", "nextPutAll:", ",", "classNameFor:", "class", "do:separatedBy:", "instanceVariableNames", "isEmpty"]}),
smalltalk.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportMethod:on:",
fn: function (aMethod,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=aStream;
_st($1)._nextPutAll_("smalltalk.addMethod(");
_st($1)._lf();
_st($1)._nextPutAll_("smalltalk.method({");
_st($1)._lf();
_st($1)._nextPutAll_(_st("selector: ".__comma(_st(_st(aMethod)._selector())._asJavascript())).__comma(","));
_st($1)._lf();
_st($1)._nextPutAll_(_st("category: '".__comma(_st(aMethod)._category())).__comma("',"));
_st($1)._lf();
_st($1)._nextPutAll_(_st("fn: ".__comma(_st(_st(aMethod)._fn())._compiledSource())).__comma(","));
_st($1)._lf();
_st($1)._nextPutAll_(_st("args: ".__comma(_st(_st(aMethod)._arguments())._asJavascript())).__comma(","));
_st($1)._lf();
_st($1)._nextPutAll_(_st("source: ".__comma(_st(_st(aMethod)._source())._asJavascript())).__comma(","));
_st($1)._lf();
_st($1)._nextPutAll_(_st("messageSends: ".__comma(_st(_st(aMethod)._messageSends())._asJavascript())).__comma(","));
_st($1)._lf();
$2=_st($1)._nextPutAll_("referencedClasses: ".__comma(_st(_st(aMethod)._referencedClasses())._asJavascript()));
$3=aStream;
_st($3)._lf();
_st($3)._nextPutAll_("}),");
_st($3)._lf();
_st($3)._nextPutAll_("smalltalk.".__comma(self._classNameFor_(_st(aMethod)._methodClass())));
_st($3)._nextPutAll_(");");
_st($3)._lf();
$4=_st($3)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportMethod:on:",{aMethod:aMethod,aStream:aStream},smalltalk.Exporter)})},
messageSends: ["nextPutAll:", "lf", ",", "asJavascript", "selector", "category", "compiledSource", "fn", "arguments", "source", "messageSends", "referencedClasses", "classNameFor:", "methodClass"]}),
smalltalk.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackageDefinitionOf:on:",
fn: function (aPackage,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_("smalltalk.addPackage(");
_st($1)._nextPutAll_(_st("'".__comma(_st(aPackage)._name())).__comma("');"));
$2=_st($1)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportPackageDefinitionOf:on:",{aPackage:aPackage,aStream:aStream},smalltalk.Exporter)})},
messageSends: ["nextPutAll:", ",", "name", "lf"]}),
smalltalk.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackageEpilogueOf:on:",
fn: function (aPackage,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_("})(global_smalltalk,global_nil,global__st);");
$2=_st($1)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportPackageEpilogueOf:on:",{aPackage:aPackage,aStream:aStream},smalltalk.Exporter)})},
messageSends: ["nextPutAll:", "lf"]}),
smalltalk.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackagePrologueOf:on:",
fn: function (aPackage,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_("(function(smalltalk,nil,_st){");
$2=_st($1)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportPackagePrologueOf:on:",{aPackage:aPackage,aStream:aStream},smalltalk.Exporter)})},
messageSends: ["nextPutAll:", "lf"]}),
smalltalk.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "extensionMethodsOfPackage:",
fn: function (aPackage){
var self=this;
var name,result;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $Package(){return smalltalk.Package||(typeof Package=="undefined"?nil:Package)}
return smalltalk.withContext(function($ctx1) { 
var $1;
name=_st(aPackage)._name();
result=_st($OrderedCollection())._new();
_st(_st($Package())._sortedClasses_(_st(_st($Smalltalk())._current())._classes()))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st([each,_st(each)._class()])._do_((function(aClass){
return smalltalk.withContext(function($ctx3) {
return _st(result)._addAll_(_st(_st(_st(_st(aClass)._methodDictionary())._values())._sorted_((function(a,b){
return smalltalk.withContext(function($ctx4) {
return _st(_st(a)._selector()).__lt_eq(_st(b)._selector());
}, function($ctx4) {$ctx4.fillBlock({a:a,b:b},$ctx3)})})))._select_((function(method){
return smalltalk.withContext(function($ctx4) {
return _st(_st(method)._category())._match_("^\x5c*".__comma(name));
}, function($ctx4) {$ctx4.fillBlock({method:method},$ctx3)})})));
}, function($ctx3) {$ctx3.fillBlock({aClass:aClass},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=result;
return $1;
}, function($ctx1) {$ctx1.fill(self,"extensionMethodsOfPackage:",{aPackage:aPackage,name:name,result:result},smalltalk.Exporter)})},
messageSends: ["name", "new", "do:", "addAll:", "select:", "match:", ",", "category", "sorted:", "<=", "selector", "values", "methodDictionary", "class", "sortedClasses:", "classes", "current"]}),
smalltalk.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "ownMethodsOfClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(aClass)._methodDictionary())._values())._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(a)._selector()).__lt_eq(_st(b)._selector());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})})))._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._category())._match_("^\x5c*");
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ownMethodsOfClass:",{aClass:aClass},smalltalk.Exporter)})},
messageSends: ["reject:", "match:", "category", "sorted:", "<=", "selector", "values", "methodDictionary"]}),
smalltalk.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "ownMethodsOfMetaClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._ownMethodsOfClass_(_st(aClass)._class());
return $1;
}, function($ctx1) {$ctx1.fill(self,"ownMethodsOfMetaClass:",{aClass:aClass},smalltalk.Exporter)})},
messageSends: ["ownMethodsOfClass:", "class"]}),
smalltalk.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "recipe",
fn: function (){
var self=this;
function $PluggableExporter(){return smalltalk.PluggableExporter||(typeof PluggableExporter=="undefined"?nil:PluggableExporter)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[self.__minus_gt("exportPackagePrologueOf:on:"),self.__minus_gt("exportPackageDefinitionOf:on:"),[_st($PluggableExporter()).__minus_gt("ownClassesOfPackage:"),self.__minus_gt("exportDefinitionOf:on:"),[self.__minus_gt("ownMethodsOfClass:"),self.__minus_gt("exportMethod:on:")],self.__minus_gt("exportMetaDefinitionOf:on:"),[self.__minus_gt("ownMethodsOfMetaClass:"),self.__minus_gt("exportMethod:on:")]],[self.__minus_gt("extensionMethodsOfPackage:"),self.__minus_gt("exportMethod:on:")],self.__minus_gt("exportPackageEpilogueOf:on:")];
return $1;
}, function($ctx1) {$ctx1.fill(self,"recipe",{},smalltalk.Exporter)})},
messageSends: ["->"]}),
smalltalk.Exporter);



smalltalk.addClass('StrippedExporter', smalltalk.Exporter, [], 'Importer-Exporter');
smalltalk.addMethod(
smalltalk.method({
selector: "exportDefinitionOf:on:",
fn: function (aClass,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=aStream;
_st($1)._lf();
_st($1)._nextPutAll_("smalltalk.addClass(");
_st($1)._nextPutAll_(_st("'".__comma(self._classNameFor_(aClass))).__comma("', "));
_st($1)._nextPutAll_("smalltalk.".__comma(self._classNameFor_(_st(aClass)._superclass())));
$2=_st($1)._nextPutAll_(", [");
_st(_st(aClass)._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._nextPutAll_(_st("'".__comma(each)).__comma("'"));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._nextPutAll_(", ");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=aStream;
_st($3)._nextPutAll_("], '");
_st($3)._nextPutAll_(_st(_st(aClass)._category()).__comma("'"));
$4=_st($3)._nextPutAll_(");");
_st(aStream)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportDefinitionOf:on:",{aClass:aClass,aStream:aStream},smalltalk.StrippedExporter)})},
messageSends: ["lf", "nextPutAll:", ",", "classNameFor:", "superclass", "do:separatedBy:", "instanceVariableNames", "category"]}),
smalltalk.StrippedExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportMethod:on:",
fn: function (aMethod,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_("smalltalk.addMethod(");
_st($1)._lf();
_st($1)._nextPutAll_("smalltalk.method({");
_st($1)._lf();
_st($1)._nextPutAll_(_st("selector: ".__comma(_st(_st(aMethod)._selector())._asJavascript())).__comma(","));
_st($1)._lf();
_st($1)._nextPutAll_(_st("fn: ".__comma(_st(_st(aMethod)._fn())._compiledSource())).__comma(","));
_st($1)._lf();
_st($1)._nextPutAll_("messageSends: ".__comma(_st(_st(aMethod)._messageSends())._asJavascript()));
_st($1)._nextPutAll_("}),");
_st($1)._lf();
_st($1)._nextPutAll_("smalltalk.".__comma(self._classNameFor_(_st(aMethod)._methodClass())));
_st($1)._nextPutAll_(");");
_st($1)._lf();
$2=_st($1)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportMethod:on:",{aMethod:aMethod,aStream:aStream},smalltalk.StrippedExporter)})},
messageSends: ["nextPutAll:", "lf", ",", "asJavascript", "selector", "compiledSource", "fn", "messageSends", "classNameFor:", "methodClass"]}),
smalltalk.StrippedExporter);



smalltalk.addClass('ChunkParser', smalltalk.Object, ['stream'], 'Importer-Exporter');
smalltalk.addMethod(
smalltalk.method({
selector: "nextChunk",
fn: function (){
var self=this;
var char,result,chunk;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
var $early={};
try {
result=""._writeStream();
_st((function(){
return smalltalk.withContext(function($ctx2) {
char=_st(self["@stream"])._next();
char;
return _st(char)._notNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(char).__eq("!");
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
smalltalk.method({
selector: "stream:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@stream"]=aStream;
return self}, function($ctx1) {$ctx1.fill(self,"stream:",{aStream:aStream},smalltalk.ChunkParser)})},
messageSends: []}),
smalltalk.ChunkParser);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._stream_(aStream);
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aStream:aStream},smalltalk.ChunkParser.klass)})},
messageSends: ["stream:", "new"]}),
smalltalk.ChunkParser.klass);


smalltalk.addClass('ExportRecipeInterpreter', smalltalk.Object, [], 'Importer-Exporter');
smalltalk.addMethod(
smalltalk.method({
selector: "interpret:for:on:",
fn: function (aRecipe,anObject,aStream){
var self=this;
var recipeStream;
return smalltalk.withContext(function($ctx1) { 
recipeStream=_st(aRecipe)._readStream();
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(recipeStream)._atEnd();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
return self._interpretStep_for_on_(_st(recipeStream)._next(),anObject,aStream);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpret:for:on:",{aRecipe:aRecipe,anObject:anObject,aStream:aStream,recipeStream:recipeStream},smalltalk.ExportRecipeInterpreter)})},
messageSends: ["readStream", "whileFalse:", "interpretStep:for:on:", "next", "atEnd"]}),
smalltalk.ExportRecipeInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretStep:for:on:",
fn: function (aRecipeStep,anObject,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(aRecipeStep)._value()).__eq_eq(aRecipeStep);
if(smalltalk.assert($1)){
$2=self._interpretSubRecipe_for_on_(aRecipeStep,anObject,aStream);
return $2;
};
_st(_st(aRecipeStep)._key())._perform_withArguments_(_st(aRecipeStep)._value(),[anObject,aStream]);
return self}, function($ctx1) {$ctx1.fill(self,"interpretStep:for:on:",{aRecipeStep:aRecipeStep,anObject:anObject,aStream:aStream},smalltalk.ExportRecipeInterpreter)})},
messageSends: ["ifTrue:", "interpretSubRecipe:for:on:", "==", "value", "perform:withArguments:", "key"]}),
smalltalk.ExportRecipeInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretSubRecipe:for:on:",
fn: function (aRecipe,anObject,aStream){
var self=this;
var selection;
return smalltalk.withContext(function($ctx1) { 
selection=_st(_st(_st(aRecipe)._first())._key())._perform_withArguments_(_st(_st(aRecipe)._first())._value(),[anObject]);
_st(selection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._interpret_for_on_(_st(aRecipe)._allButFirst(),each,aStream);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpretSubRecipe:for:on:",{aRecipe:aRecipe,anObject:anObject,aStream:aStream,selection:selection},smalltalk.ExportRecipeInterpreter)})},
messageSends: ["perform:withArguments:", "value", "first", "key", "do:", "interpret:for:on:", "allButFirst"]}),
smalltalk.ExportRecipeInterpreter);



smalltalk.addClass('Importer', smalltalk.Object, [], 'Importer-Exporter');
smalltalk.addMethod(
smalltalk.method({
selector: "import:",
fn: function (aStream){
var self=this;
var chunk,result,parser,lastEmpty;
function $ChunkParser(){return smalltalk.ChunkParser||(typeof ChunkParser=="undefined"?nil:ChunkParser)}
function $Compiler(){return smalltalk.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
parser=_st($ChunkParser())._on_(aStream);
lastEmpty=false;
_st((function(){
return smalltalk.withContext(function($ctx2) {
chunk=_st(parser)._nextChunk();
chunk;
return _st(chunk)._isNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(chunk)._isEmpty();
if(smalltalk.assert($1)){
lastEmpty=true;
return lastEmpty;
} else {
result=_st(_st($Compiler())._new())._evaluateExpression_(chunk);
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



smalltalk.addClass('MethodCategory', smalltalk.Object, ['methods', 'name', 'theClass'], 'Importer-Exporter');
smalltalk.addMethod(
smalltalk.method({
selector: "methods",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@methods"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"methods",{},smalltalk.MethodCategory)})},
messageSends: []}),
smalltalk.MethodCategory);

smalltalk.addMethod(
smalltalk.method({
selector: "methods:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@methods"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"methods:",{aCollection:aCollection},smalltalk.MethodCategory)})},
messageSends: []}),
smalltalk.MethodCategory);

smalltalk.addMethod(
smalltalk.method({
selector: "name",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@name"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"name",{},smalltalk.MethodCategory)})},
messageSends: []}),
smalltalk.MethodCategory);

smalltalk.addMethod(
smalltalk.method({
selector: "name:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@name"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"name:",{aString:aString},smalltalk.MethodCategory)})},
messageSends: []}),
smalltalk.MethodCategory);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@theClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.MethodCategory)})},
messageSends: []}),
smalltalk.MethodCategory);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass},smalltalk.MethodCategory)})},
messageSends: []}),
smalltalk.MethodCategory);


smalltalk.addMethod(
smalltalk.method({
selector: "name:theClass:methods:",
fn: function (aString,aClass,anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._name_(aString);
_st($2)._theClass_(aClass);
_st($2)._methods_(anArray);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"name:theClass:methods:",{aString:aString,aClass:aClass,anArray:anArray},smalltalk.MethodCategory.klass)})},
messageSends: ["name:", "new", "theClass:", "methods:", "yourself"]}),
smalltalk.MethodCategory.klass);


smalltalk.addClass('PackageHandler', smalltalk.InterfacingObject, [], 'Importer-Exporter');
smalltalk.addMethod(
smalltalk.method({
selector: "ajaxPutAt:data:",
fn: function (aURL,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._ajax_(smalltalk.HashedCollection._from_(["url".__minus_gt(aURL),"type".__minus_gt("PUT"),"data".__minus_gt(aString),"contentType".__minus_gt("text/plain;charset=UTF-8"),"error".__minus_gt((function(xhr){
return smalltalk.withContext(function($ctx2) {
return self._error_(_st(_st(_st("Commiting ".__comma(aURL)).__comma(" failed with reason: \x22")).__comma(_st(xhr)._responseText())).__comma("\x22"));
}, function($ctx2) {$ctx2.fillBlock({xhr:xhr},$ctx1)})}))]));
return self}, function($ctx1) {$ctx1.fill(self,"ajaxPutAt:data:",{aURL:aURL,aString:aString},smalltalk.PackageHandler)})},
messageSends: ["ajax:", "->", "error:", ",", "responseText"]}),
smalltalk.PackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "commit:",
fn: function (aPackage){
var self=this;
function $PluggableExporter(){return smalltalk.PluggableExporter||(typeof PluggableExporter=="undefined"?nil:PluggableExporter)}
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
_st(self._commitChannels())._do_displayingProgress_((function(commitStrategyFactory){
var fileContents,commitStrategy;
return smalltalk.withContext(function($ctx2) {
commitStrategy=_st(commitStrategyFactory)._value_(aPackage);
commitStrategy;
fileContents=_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx3) {
return _st(_st($PluggableExporter())._forRecipe_(_st(commitStrategy)._key()))._exportPackage_on_(aPackage,stream);
}, function($ctx3) {$ctx3.fillBlock({stream:stream},$ctx2)})}));
fileContents;
return self._ajaxPutAt_data_(_st(commitStrategy)._value(),fileContents);
}, function($ctx2) {$ctx2.fillBlock({commitStrategyFactory:commitStrategyFactory,fileContents:fileContents,commitStrategy:commitStrategy},$ctx1)})}),"Committing package ".__comma(_st(aPackage)._name()));
return self}, function($ctx1) {$ctx1.fill(self,"commit:",{aPackage:aPackage},smalltalk.PackageHandler)})},
messageSends: ["do:displayingProgress:", "value:", "streamContents:", "exportPackage:on:", "forRecipe:", "key", "ajaxPutAt:data:", "value", ",", "name", "commitChannels"]}),
smalltalk.PackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "commitChannels",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"commitChannels",{},smalltalk.PackageHandler)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.PackageHandler);


smalltalk.PackageHandler.klass.iVarNames = ['registry'];
smalltalk.addMethod(
smalltalk.method({
selector: "classRegisteredFor:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@registry"])._at_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"classRegisteredFor:",{aString:aString},smalltalk.PackageHandler.klass)})},
messageSends: ["at:"]}),
smalltalk.PackageHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "for:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._classRegisteredFor_(aString))._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"for:",{aString:aString},smalltalk.PackageHandler.klass)})},
messageSends: ["new", "classRegisteredFor:"]}),
smalltalk.PackageHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.PackageHandler.klass.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@registry"]=smalltalk.HashedCollection._from_([]);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.PackageHandler.klass)})},
messageSends: ["initialize"]}),
smalltalk.PackageHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "register:for:",
fn: function (aClass,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@registry"])._at_put_(aString,aClass);
return self}, function($ctx1) {$ctx1.fill(self,"register:for:",{aClass:aClass,aString:aString},smalltalk.PackageHandler.klass)})},
messageSends: ["at:put:"]}),
smalltalk.PackageHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "registerFor:",
fn: function (aString){
var self=this;
function $PackageHandler(){return smalltalk.PackageHandler||(typeof PackageHandler=="undefined"?nil:PackageHandler)}
return smalltalk.withContext(function($ctx1) { 
_st($PackageHandler())._register_for_(self,aString);
return self}, function($ctx1) {$ctx1.fill(self,"registerFor:",{aString:aString},smalltalk.PackageHandler.klass)})},
messageSends: ["register:for:"]}),
smalltalk.PackageHandler.klass);


smalltalk.addClass('LegacyPackageHandler', smalltalk.PackageHandler, [], 'Importer-Exporter');
smalltalk.addMethod(
smalltalk.method({
selector: "commitChannels",
fn: function (){
var self=this;
function $Exporter(){return smalltalk.Exporter||(typeof Exporter=="undefined"?nil:Exporter)}
function $StrippedExporter(){return smalltalk.StrippedExporter||(typeof StrippedExporter=="undefined"?nil:StrippedExporter)}
function $ChunkExporter(){return smalltalk.ChunkExporter||(typeof ChunkExporter=="undefined"?nil:ChunkExporter)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[(function(pkg){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st($Exporter())._default())._recipe()).__minus_gt(_st(_st(_st(_st(pkg)._commitPathJs()).__comma("/")).__comma(_st(pkg)._name())).__comma(".js"));
}, function($ctx2) {$ctx2.fillBlock({pkg:pkg},$ctx1)})}),(function(pkg){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st($StrippedExporter())._default())._recipe()).__minus_gt(_st(_st(_st(_st(pkg)._commitPathJs()).__comma("/")).__comma(_st(pkg)._name())).__comma(".deploy.js"));
}, function($ctx2) {$ctx2.fillBlock({pkg:pkg},$ctx1)})}),(function(pkg){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st($ChunkExporter())._default())._recipe()).__minus_gt(_st(_st(_st(_st(pkg)._commitPathSt()).__comma("/")).__comma(_st(pkg)._name())).__comma(".st"));
}, function($ctx2) {$ctx2.fillBlock({pkg:pkg},$ctx1)})})];
return $1;
}, function($ctx1) {$ctx1.fill(self,"commitChannels",{},smalltalk.LegacyPackageHandler)})},
messageSends: ["->", ",", "name", "commitPathJs", "recipe", "default", "commitPathSt"]}),
smalltalk.LegacyPackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPathJsFor:",
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._defaultCommitPathJs();
return $1;
}, function($ctx1) {$ctx1.fill(self,"commitPathJsFor:",{aPackage:aPackage},smalltalk.LegacyPackageHandler)})},
messageSends: ["defaultCommitPathJs", "class"]}),
smalltalk.LegacyPackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPathStFor:",
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._defaultCommitPathSt();
return $1;
}, function($ctx1) {$ctx1.fill(self,"commitPathStFor:",{aPackage:aPackage},smalltalk.LegacyPackageHandler)})},
messageSends: ["defaultCommitPathSt", "class"]}),
smalltalk.LegacyPackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "loadPackage:prefix:",
fn: function (packageName,aString){
var self=this;
var url;
return smalltalk.withContext(function($ctx1) { 
var $1;
url=_st(_st(_st("/".__comma(aString)).__comma("/js/")).__comma(packageName)).__comma(".js");
self._ajax_(smalltalk.HashedCollection._from_(["url".__minus_gt(url),"type".__minus_gt("GET"),"dataType".__minus_gt("script"),"complete".__minus_gt((function(jqXHR,textStatus){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(jqXHR)._readyState()).__eq((4));
if(smalltalk.assert($1)){
return self._setupPackageNamed_prefix_(packageName,aString);
};
}, function($ctx2) {$ctx2.fillBlock({jqXHR:jqXHR,textStatus:textStatus},$ctx1)})})),"error".__minus_gt((function(){
return smalltalk.withContext(function($ctx2) {
return self._alert_("Could not load package at: ".__comma(url));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))]));
return self}, function($ctx1) {$ctx1.fill(self,"loadPackage:prefix:",{packageName:packageName,aString:aString,url:url},smalltalk.LegacyPackageHandler)})},
messageSends: [",", "ajax:", "->", "ifTrue:", "setupPackageNamed:prefix:", "=", "readyState", "alert:"]}),
smalltalk.LegacyPackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "loadPackages:prefix:",
fn: function (aCollection,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._loadPackage_prefix_(each,aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"loadPackages:prefix:",{aCollection:aCollection,aString:aString},smalltalk.LegacyPackageHandler)})},
messageSends: ["do:", "loadPackage:prefix:"]}),
smalltalk.LegacyPackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "setupPackageNamed:prefix:",
fn: function (packageName,aString){
var self=this;
function $Package(){return smalltalk.Package||(typeof Package=="undefined"?nil:Package)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($Package())._named_(packageName);
_st($1)._setupClasses();
_st($1)._commitPathJs_(_st("/".__comma(aString)).__comma("/js"));
$2=_st($1)._commitPathSt_(_st("/".__comma(aString)).__comma("/st"));
return self}, function($ctx1) {$ctx1.fill(self,"setupPackageNamed:prefix:",{packageName:packageName,aString:aString},smalltalk.LegacyPackageHandler)})},
messageSends: ["setupClasses", "named:", "commitPathJs:", ",", "commitPathSt:"]}),
smalltalk.LegacyPackageHandler);


smalltalk.LegacyPackageHandler.klass.iVarNames = ['defaultCommitPathJs','defaultCommitPathSt'];
smalltalk.addMethod(
smalltalk.method({
selector: "commitPathsFromLoader",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var commitPath = typeof amber !== 'undefined' && amber.commitPath;
		if (!commitPath) return;
		if (commitPath.js) self._defaultCommitPathJs_(commitPath.js);
		if (commitPath.st) self._defaultCommitPathSt_(commitPath.st);
	;
return self}, function($ctx1) {$ctx1.fill(self,"commitPathsFromLoader",{},smalltalk.LegacyPackageHandler.klass)})},
messageSends: []}),
smalltalk.LegacyPackageHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultCommitPathJs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@defaultCommitPathJs"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@defaultCommitPathJs"]="js";
$1=self["@defaultCommitPathJs"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultCommitPathJs",{},smalltalk.LegacyPackageHandler.klass)})},
messageSends: ["ifNil:"]}),
smalltalk.LegacyPackageHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultCommitPathJs:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@defaultCommitPathJs"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"defaultCommitPathJs:",{aString:aString},smalltalk.LegacyPackageHandler.klass)})},
messageSends: []}),
smalltalk.LegacyPackageHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultCommitPathSt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@defaultCommitPathSt"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@defaultCommitPathSt"]="st";
$1=self["@defaultCommitPathSt"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultCommitPathSt",{},smalltalk.LegacyPackageHandler.klass)})},
messageSends: ["ifNil:"]}),
smalltalk.LegacyPackageHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultCommitPathSt:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@defaultCommitPathSt"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"defaultCommitPathSt:",{aString:aString},smalltalk.LegacyPackageHandler.klass)})},
messageSends: []}),
smalltalk.LegacyPackageHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.LegacyPackageHandler.klass.superclass.fn.prototype._initialize.apply(_st(self), []);
self._registerFor_("unknown");
self._commitPathsFromLoader();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.LegacyPackageHandler.klass)})},
messageSends: ["initialize", "registerFor:", "commitPathsFromLoader"]}),
smalltalk.LegacyPackageHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "loadPackages:prefix:",
fn: function (aCollection,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._loadPackages_prefix_(aCollection,aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"loadPackages:prefix:",{aCollection:aCollection,aString:aString},smalltalk.LegacyPackageHandler.klass)})},
messageSends: ["loadPackages:prefix:", "new"]}),
smalltalk.LegacyPackageHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "resetCommitPaths",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@defaultCommitPathJs"]=nil;
self["@defaultCommitPathSt"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"resetCommitPaths",{},smalltalk.LegacyPackageHandler.klass)})},
messageSends: []}),
smalltalk.LegacyPackageHandler.klass);


smalltalk.addClass('PluggableExporter', smalltalk.Object, ['recipe'], 'Importer-Exporter');
smalltalk.addMethod(
smalltalk.method({
selector: "exportAllPackages",
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st($Smalltalk())._current())._packages())._do_((function(pkg){
return smalltalk.withContext(function($ctx3) {
return self._exportPackage_on_(pkg,stream);
}, function($ctx3) {$ctx3.fillBlock({pkg:pkg},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"exportAllPackages",{},smalltalk.PluggableExporter)})},
messageSends: ["streamContents:", "do:", "exportPackage:on:", "packages", "current"]}),
smalltalk.PluggableExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackage:on:",
fn: function (aPackage,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._interpreter())._interpret_for_on_(self._recipe(),aPackage,aStream);
return self}, function($ctx1) {$ctx1.fill(self,"exportPackage:on:",{aPackage:aPackage,aStream:aStream},smalltalk.PluggableExporter)})},
messageSends: ["interpret:for:on:", "recipe", "interpreter"]}),
smalltalk.PluggableExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter",
fn: function (){
var self=this;
function $ExportRecipeInterpreter(){return smalltalk.ExportRecipeInterpreter||(typeof ExportRecipeInterpreter=="undefined"?nil:ExportRecipeInterpreter)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($ExportRecipeInterpreter())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter",{},smalltalk.PluggableExporter)})},
messageSends: ["new"]}),
smalltalk.PluggableExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "recipe",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@recipe"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"recipe",{},smalltalk.PluggableExporter)})},
messageSends: []}),
smalltalk.PluggableExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "recipe:",
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@recipe"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"recipe:",{anArray:anArray},smalltalk.PluggableExporter)})},
messageSends: []}),
smalltalk.PluggableExporter);


smalltalk.addMethod(
smalltalk.method({
selector: "forRecipe:",
fn: function (aRecipe){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._recipe_(aRecipe);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"forRecipe:",{aRecipe:aRecipe},smalltalk.PluggableExporter.klass)})},
messageSends: ["recipe:", "new", "yourself"]}),
smalltalk.PluggableExporter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "ownClassesOfPackage:",
fn: function (package_){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(package_)._sortedClasses())._asSet();
return $1;
}, function($ctx1) {$ctx1.fill(self,"ownClassesOfPackage:",{package_:package_},smalltalk.PluggableExporter.klass)})},
messageSends: ["asSet", "sortedClasses"]}),
smalltalk.PluggableExporter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "commit",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._transport())._commit_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"commit",{},smalltalk.Package)})},
messageSends: ["commit:", "transport"]}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPathJs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=self["@extension"];
if(($receiver = $3) == nil || $receiver == undefined){
self["@extension"]=smalltalk.HashedCollection._from_([]);
$2=self["@extension"];
} else {
$2=$3;
};
$1=_st($2)._at_ifAbsentPut_("commitPathJs",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._transport())._commitPathJsFor_(self);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"commitPathJs",{},smalltalk.Package)})},
messageSends: ["at:ifAbsentPut:", "commitPathJsFor:", "transport", "ifNil:"]}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPathJs:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=self["@extension"];
if(($receiver = $3) == nil || $receiver == undefined){
self["@extension"]=smalltalk.HashedCollection._from_([]);
$2=self["@extension"];
} else {
$2=$3;
};
$1=_st($2)._at_put_("commitPathJs",aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"commitPathJs:",{aString:aString},smalltalk.Package)})},
messageSends: ["at:put:", "ifNil:"]}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPathSt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=self["@extension"];
if(($receiver = $3) == nil || $receiver == undefined){
self["@extension"]=smalltalk.HashedCollection._from_([]);
$2=self["@extension"];
} else {
$2=$3;
};
$1=_st($2)._at_ifAbsentPut_("commitPathSt",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._transport())._commitPathStFor_(self);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"commitPathSt",{},smalltalk.Package)})},
messageSends: ["at:ifAbsentPut:", "commitPathStFor:", "transport", "ifNil:"]}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPathSt:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=self["@extension"];
if(($receiver = $3) == nil || $receiver == undefined){
self["@extension"]=smalltalk.HashedCollection._from_([]);
$2=self["@extension"];
} else {
$2=$3;
};
$1=_st($2)._at_put_("commitPathSt",aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"commitPathSt:",{aString:aString},smalltalk.Package)})},
messageSends: ["at:put:", "ifNil:"]}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "transport",
fn: function (){
var self=this;
function $PackageHandler(){return smalltalk.PackageHandler||(typeof PackageHandler=="undefined"?nil:PackageHandler)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($PackageHandler())._for_(self._transportType());
return $1;
}, function($ctx1) {$ctx1.fill(self,"transport",{},smalltalk.Package)})},
messageSends: ["for:", "transportType"]}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "transportType",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (self.transport && self.transport.type) || 'unknown';;
return self}, function($ctx1) {$ctx1.fill(self,"transportType",{},smalltalk.Package)})},
messageSends: []}),
smalltalk.Package);

})(global_smalltalk,global_nil,global__st);
