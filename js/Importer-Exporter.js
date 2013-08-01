define("amber/Importer-Exporter", ["amber_vm/smalltalk","amber_vm/nil","amber_vm/_st"], function(smalltalk,nil,_st){
smalltalk.addPackage('Importer-Exporter');
smalltalk.packages["Importer-Exporter"].transport = {"type":"amd","amdNamespace":"amber"};


smalltalk.addClass('AmdExporter', smalltalk.Object, [], 'Importer-Exporter');

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackageEpilogueOf:on:",
category: 'exporting-output',
fn: function (aPackage,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_("});");
$2=_st($1)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportPackageEpilogueOf:on:",{aPackage:aPackage,aStream:aStream},smalltalk.AmdExporter.klass)})},
args: ["aPackage", "aStream"],
source: "exportPackageEpilogueOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: '});';\x0a\x09\x09lf",
messageSends: ["nextPutAll:", "lf"],
referencedClasses: []
}),
smalltalk.AmdExporter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackagePrologueOf:on:",
category: 'exporting-output',
fn: function (aPackage,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$5;
$1=aStream;
_st($1)._nextPutAll_("define(\x22");
$2=$1;
$4=_st(aPackage)._amdNamespace();
if(($receiver = $4) == nil || $receiver == undefined){
$3="amber";
} else {
$3=$4;
};
_st($2)._nextPutAll_($3);
_st($1)._nextPutAll_("/");
_st($1)._nextPutAll_(_st(aPackage)._name());
_st($1)._nextPutAll_("\x22, [\x22amber_vm/smalltalk\x22,\x22amber_vm/nil\x22,\x22amber_vm/_st\x22], function(smalltalk,nil,_st){");
$5=_st($1)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportPackagePrologueOf:on:",{aPackage:aPackage,aStream:aStream},smalltalk.AmdExporter.klass)})},
args: ["aPackage", "aStream"],
source: "exportPackagePrologueOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: 'define(\x22';\x0a\x09\x09nextPutAll: (aPackage amdNamespace ifNil: [ 'amber' ]); \x22ifNil: only for LegacyPH, it should not happen with AmdPH\x22\x0a\x09\x09nextPutAll: '/';\x0a\x09\x09nextPutAll: aPackage name;\x0a\x09\x09nextPutAll: '\x22, [\x22amber_vm/smalltalk\x22,\x22amber_vm/nil\x22,\x22amber_vm/_st\x22], function(smalltalk,nil,_st){';\x0a\x09\x09lf",
messageSends: ["nextPutAll:", "ifNil:", "amdNamespace", "name", "lf"],
referencedClasses: []
}),
smalltalk.AmdExporter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackageTransportOf:on:",
category: 'exporting-output',
fn: function (aPackage,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_("smalltalk.packages[");
_st($1)._nextPutAll_(_st(_st(aPackage)._name())._asJavascript());
_st($1)._nextPutAll_("].transport = ");
_st($1)._nextPutAll_(_st(aPackage)._transportJson());
_st($1)._nextPutAll_(";");
$2=_st($1)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportPackageTransportOf:on:",{aPackage:aPackage,aStream:aStream},smalltalk.AmdExporter.klass)})},
args: ["aPackage", "aStream"],
source: "exportPackageTransportOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: 'smalltalk.packages[';\x0a\x09\x09nextPutAll: aPackage name asJavascript;\x0a\x09\x09nextPutAll: '].transport = ';\x0a\x09\x09nextPutAll: aPackage transportJson;\x0a\x09\x09nextPutAll: ';';\x0a\x09\x09lf",
messageSends: ["nextPutAll:", "asJavascript", "name", "transportJson", "lf"],
referencedClasses: []
}),
smalltalk.AmdExporter.klass);


smalltalk.addClass('ChunkExporter', smalltalk.Object, [], 'Importer-Exporter');
smalltalk.ChunkExporter.comment="I am an exporter dedicated to outputting Amber source code in the classic Smalltalk chunk format.\x0a\x0aI do not output any compiled code.";

smalltalk.addMethod(
smalltalk.method({
selector: "chunkEscape:",
category: 'private',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aString)._replace_with_("!","!!"))._trimBoth();
return $1;
}, function($ctx1) {$ctx1.fill(self,"chunkEscape:",{aString:aString},smalltalk.ChunkExporter.klass)})},
args: ["aString"],
source: "chunkEscape: aString\x0a\x09\x22Replace all occurrences of ! with !! and trim at both ends.\x22\x0a\x0a\x09^(aString replace: '!' with: '!!') trimBoth",
messageSends: ["trimBoth", "replace:with:"],
referencedClasses: []
}),
smalltalk.ChunkExporter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "classNameFor:",
category: 'private',
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
}, function($ctx1) {$ctx1.fill(self,"classNameFor:",{aClass:aClass},smalltalk.ChunkExporter.klass)})},
args: ["aClass"],
source: "classNameFor: aClass\x0a\x09^aClass isMetaclass\x0a\x09\x09ifTrue: [aClass instanceClass name, ' class']\x0a\x09\x09ifFalse: [\x0a\x09\x09aClass isNil\x0a\x09\x09\x09ifTrue: ['nil']\x0a\x09\x09\x09ifFalse: [aClass name]]",
messageSends: ["ifTrue:ifFalse:", ",", "name", "instanceClass", "isNil", "isMetaclass"],
referencedClasses: []
}),
smalltalk.ChunkExporter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "exportCategoryEpilogueOf:on:",
category: 'exporting-output',
fn: function (category,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_(" !");
_st($1)._lf();
$2=_st($1)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportCategoryEpilogueOf:on:",{category:category,aStream:aStream},smalltalk.ChunkExporter.klass)})},
args: ["category", "aStream"],
source: "exportCategoryEpilogueOf: category on: aStream\x0a\x09aStream nextPutAll: ' !'; lf; lf",
messageSends: ["nextPutAll:", "lf"],
referencedClasses: []
}),
smalltalk.ChunkExporter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "exportCategoryPrologueOf:on:",
category: 'exporting-output',
fn: function (category,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_("!".__comma(self._classNameFor_(_st(category)._at_("class"))));
$2=_st($1)._nextPutAll_(_st(" methodsFor: '".__comma(_st(category)._at_("name"))).__comma("'!"));
return self}, function($ctx1) {$ctx1.fill(self,"exportCategoryPrologueOf:on:",{category:category,aStream:aStream},smalltalk.ChunkExporter.klass)})},
args: ["category", "aStream"],
source: "exportCategoryPrologueOf: category on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: '!', (self classNameFor: (category at: #class));\x0a\x09\x09nextPutAll: ' methodsFor: ''', (category at: #name), '''!'",
messageSends: ["nextPutAll:", ",", "classNameFor:", "at:"],
referencedClasses: []
}),
smalltalk.ChunkExporter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "exportDefinitionOf:on:",
category: 'exporting-output',
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
return self}, function($ctx1) {$ctx1.fill(self,"exportDefinitionOf:on:",{aClass:aClass,aStream:aStream},smalltalk.ChunkExporter.klass)})},
args: ["aClass", "aStream"],
source: "exportDefinitionOf: aClass on: aStream\x0a\x09\x22Chunk format.\x22\x0a\x0a\x09aStream\x0a\x09\x09nextPutAll: (self classNameFor: aClass superclass);\x0a\x09\x09nextPutAll: ' subclass: #', (self classNameFor: aClass); lf;\x0a\x09\x09tab; nextPutAll: 'instanceVariableNames: '''.\x0a\x09aClass instanceVariableNames\x0a\x09\x09do: [:each | aStream nextPutAll: each]\x0a\x09\x09separatedBy: [aStream nextPutAll: ' '].\x0a\x09aStream\x0a\x09\x09nextPutAll: ''''; lf;\x0a\x09\x09tab; nextPutAll: 'package: ''', aClass category, '''!'; lf.\x0a\x09aClass comment notEmpty ifTrue: [\x0a\x09\x09aStream\x0a\x09\x09nextPutAll: '!', (self classNameFor: aClass), ' commentStamp!';lf;\x0a\x09\x09nextPutAll: (self chunkEscape: aClass comment), '!';lf].\x0a\x09aStream lf",
messageSends: ["nextPutAll:", "classNameFor:", "superclass", ",", "lf", "tab", "do:separatedBy:", "instanceVariableNames", "category", "ifTrue:", "chunkEscape:", "comment", "notEmpty"],
referencedClasses: []
}),
smalltalk.ChunkExporter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "exportMetaDefinitionOf:on:",
category: 'exporting-output',
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
return self}, function($ctx1) {$ctx1.fill(self,"exportMetaDefinitionOf:on:",{aClass:aClass,aStream:aStream},smalltalk.ChunkExporter.klass)})},
args: ["aClass", "aStream"],
source: "exportMetaDefinitionOf: aClass on: aStream\x0a\x0a\x09aClass class instanceVariableNames isEmpty ifFalse: [\x0a\x09\x09aStream\x0a\x09\x09\x09nextPutAll: (self classNameFor: aClass class);\x0a\x09\x09\x09nextPutAll: ' instanceVariableNames: '''.\x0a\x09\x09aClass class instanceVariableNames\x0a\x09\x09\x09do: [:each | aStream nextPutAll: each]\x0a\x09\x09\x09separatedBy: [aStream nextPutAll: ' '].\x0a\x09\x09aStream\x0a\x09\x09\x09nextPutAll: '''!'; lf; lf]",
messageSends: ["ifFalse:", "nextPutAll:", "classNameFor:", "class", "do:separatedBy:", "instanceVariableNames", "lf", "isEmpty"],
referencedClasses: []
}),
smalltalk.ChunkExporter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "exportMethod:on:",
category: 'exporting-output',
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
return self}, function($ctx1) {$ctx1.fill(self,"exportMethod:on:",{aMethod:aMethod,aStream:aStream},smalltalk.ChunkExporter.klass)})},
args: ["aMethod", "aStream"],
source: "exportMethod: aMethod on: aStream\x0a\x09aStream\x0a\x09\x09lf; lf; nextPutAll: (self chunkEscape: aMethod source); lf;\x0a\x09\x09nextPutAll: '!'",
messageSends: ["lf", "nextPutAll:", "chunkEscape:", "source"],
referencedClasses: []
}),
smalltalk.ChunkExporter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackageDefinitionOf:on:",
category: 'exporting-output',
fn: function (package_,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_(_st("Smalltalk current createPackage: '".__comma(_st(package_)._name())).__comma("'!"));
$2=_st($1)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportPackageDefinitionOf:on:",{package_:package_,aStream:aStream},smalltalk.ChunkExporter.klass)})},
args: ["package", "aStream"],
source: "exportPackageDefinitionOf: package on: aStream\x0a\x09\x22Chunk format.\x22\x0a\x0a\x09aStream\x0a\x09\x09nextPutAll: 'Smalltalk current createPackage: ''', package name, '''!';\x0a\x09\x09lf",
messageSends: ["nextPutAll:", ",", "name", "lf"],
referencedClasses: []
}),
smalltalk.ChunkExporter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "extensionCategoriesOfPackage:",
category: 'exporting-accessing',
fn: function (package_){
var self=this;
var name,map,result;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $Package(){return smalltalk.Package||(typeof Package=="undefined"?nil:Package)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
name=_st(package_)._name();
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
return smalltalk.HashedCollection._from_(["methods".__minus_gt(_st(map)._at_(category)),"name".__minus_gt(category),"class".__minus_gt(aClass)]);
}, function($ctx4) {$ctx4.fillBlock({category:category},$ctx3)})})));
}, function($ctx3) {$ctx3.fillBlock({aClass:aClass},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=result;
return $2;
}, function($ctx1) {$ctx1.fill(self,"extensionCategoriesOfPackage:",{package_:package_,name:name,map:map,result:result},smalltalk.ChunkExporter.klass)})},
args: ["package"],
source: "extensionCategoriesOfPackage: package\x0a\x09\x22Issue #143: sort protocol alphabetically\x22\x0a\x0a\x09| name map result |\x0a\x09name := package name.\x0a\x09result := OrderedCollection new.\x0a\x09(Package sortedClasses: Smalltalk current classes) do: [:each |\x0a\x09\x09{each. each class} do: [:aClass |\x0a\x09\x09\x09map := Dictionary new.\x0a\x09\x09\x09aClass protocolsDo: [:category :methods |\x0a\x09\x09\x09\x09(category match: '^\x5c*', name) ifTrue: [ map at: category put: methods ]].\x0a\x09\x09\x09result addAll: ((map keys sorted: [:a :b | a <= b ]) collect: [:category |\x0a\x09\x09\x09\x09#{ 'methods'->(map at: category). 'name'->category. 'class'->aClass}]) ]].\x0a\x09^result",
messageSends: ["name", "new", "do:", "protocolsDo:", "ifTrue:", "at:put:", "match:", ",", "addAll:", "collect:", "->", "at:", "sorted:", "<=", "keys", "class", "sortedClasses:", "classes", "current"],
referencedClasses: ["OrderedCollection", "Dictionary", "Smalltalk", "Package"]
}),
smalltalk.ChunkExporter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "methodsOfCategory:",
category: 'exporting-accessing',
fn: function (category){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(category)._at_("methods"))._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(a)._selector()).__lt_eq(_st(b)._selector());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodsOfCategory:",{category:category},smalltalk.ChunkExporter.klass)})},
args: ["category"],
source: "methodsOfCategory: category\x0a\x09\x22Issue #143: sort methods alphabetically\x22\x0a\x0a\x09^(category at: #methods) sorted: [:a :b | a selector <= b selector]",
messageSends: ["sorted:", "<=", "selector", "at:"],
referencedClasses: []
}),
smalltalk.ChunkExporter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "ownCategoriesOfClass:",
category: 'exporting-accessing',
fn: function (aClass){
var self=this;
var map;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
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
return smalltalk.HashedCollection._from_(["methods".__minus_gt(_st(map)._at_(category)),"name".__minus_gt(category),"class".__minus_gt(aClass)]);
}, function($ctx2) {$ctx2.fillBlock({category:category},$ctx1)})}));
return $2;
}, function($ctx1) {$ctx1.fill(self,"ownCategoriesOfClass:",{aClass:aClass,map:map},smalltalk.ChunkExporter.klass)})},
args: ["aClass"],
source: "ownCategoriesOfClass: aClass\x0a\x09\x22Issue #143: sort protocol alphabetically\x22\x0a\x0a\x09| map |\x0a\x09map := Dictionary new.\x0a\x09aClass protocolsDo: [:category :methods |\x0a\x09\x09(category match: '^\x5c*') ifFalse: [ map at: category put: methods ]].\x0a\x09^(map keys sorted: [:a :b | a <= b ]) collect: [:category |\x0a\x09\x09#{\x0a\x09\x09\x09'methods'->(map at: category).\x0a\x09\x09\x09'name'->category.\x0a\x09\x09\x09'class'->aClass }]",
messageSends: ["new", "protocolsDo:", "ifFalse:", "at:put:", "match:", "collect:", "->", "at:", "sorted:", "<=", "keys"],
referencedClasses: ["Dictionary"]
}),
smalltalk.ChunkExporter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "ownCategoriesOfMetaClass:",
category: 'exporting-accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._ownCategoriesOfClass_(_st(aClass)._class());
return $1;
}, function($ctx1) {$ctx1.fill(self,"ownCategoriesOfMetaClass:",{aClass:aClass},smalltalk.ChunkExporter.klass)})},
args: ["aClass"],
source: "ownCategoriesOfMetaClass: aClass\x0a\x09\x22Issue #143: sort protocol alphabetically\x22\x0a\x0a\x09^self ownCategoriesOfClass: aClass class",
messageSends: ["ownCategoriesOfClass:", "class"],
referencedClasses: []
}),
smalltalk.ChunkExporter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "recipe",
category: 'fileOut',
fn: function (){
var self=this;
var exportCategoryRecipe;
function $PluggableExporter(){return smalltalk.PluggableExporter||(typeof PluggableExporter=="undefined"?nil:PluggableExporter)}
return smalltalk.withContext(function($ctx1) { 
var $1;
exportCategoryRecipe=[self.__minus_gt("exportCategoryPrologueOf:on:"),[self.__minus_gt("methodsOfCategory:"),self.__minus_gt("exportMethod:on:")],self.__minus_gt("exportCategoryEpilogueOf:on:")];
$1=[self.__minus_gt("exportPackageDefinitionOf:on:"),[_st($PluggableExporter()).__minus_gt("ownClassesOfPackage:"),self.__minus_gt("exportDefinitionOf:on:"),_st([self.__minus_gt("ownCategoriesOfClass:")]).__comma(exportCategoryRecipe),self.__minus_gt("exportMetaDefinitionOf:on:"),_st([self.__minus_gt("ownCategoriesOfMetaClass:")]).__comma(exportCategoryRecipe)],_st([self.__minus_gt("extensionCategoriesOfPackage:")]).__comma(exportCategoryRecipe)];
return $1;
}, function($ctx1) {$ctx1.fill(self,"recipe",{exportCategoryRecipe:exportCategoryRecipe},smalltalk.ChunkExporter.klass)})},
args: [],
source: "recipe\x0a\x09\x22Export a given package.\x22\x0a\x0a\x09| exportCategoryRecipe |\x0a\x09exportCategoryRecipe := {\x0a\x09\x09self -> #exportCategoryPrologueOf:on:.\x0a\x09\x09{\x0a\x09\x09\x09self -> #methodsOfCategory:.\x0a\x09\x09\x09self -> #exportMethod:on: }.\x0a\x09\x09self -> #exportCategoryEpilogueOf:on: }.\x0a\x0a\x09^{\x0a\x09\x09self -> #exportPackageDefinitionOf:on:.\x0a\x09\x09{\x0a\x09\x09\x09PluggableExporter -> #ownClassesOfPackage:.\x0a\x09\x09\x09self -> #exportDefinitionOf:on:.\x0a\x09\x09\x09{ self -> #ownCategoriesOfClass: }, exportCategoryRecipe.\x0a\x09\x09\x09self -> #exportMetaDefinitionOf:on:.\x0a\x09\x09\x09{ self -> #ownCategoriesOfMetaClass: }, exportCategoryRecipe }.\x0a\x09\x09{ self -> #extensionCategoriesOfPackage: }, exportCategoryRecipe\x0a\x09}",
messageSends: ["->", ","],
referencedClasses: ["PluggableExporter"]
}),
smalltalk.ChunkExporter.klass);


smalltalk.addClass('ChunkParser', smalltalk.Object, ['stream'], 'Importer-Exporter');
smalltalk.ChunkParser.comment="I am responsible for parsing aStream contents in the chunk format.\x0a\x0a## API\x0a\x0a    ChunkParser new\x0a        stream: aStream;\x0a        nextChunk";
smalltalk.addMethod(
smalltalk.method({
selector: "nextChunk",
category: 'reading',
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
args: [],
source: "nextChunk\x0a\x09\x22The chunk format (Smalltalk Interchange Format or Fileout format)\x0a\x09is a trivial format but can be a bit tricky to understand:\x0a\x09\x09- Uses the exclamation mark as delimiter of chunks.\x0a\x09\x09- Inside a chunk a normal exclamation mark must be doubled.\x0a\x09\x09- A non empty chunk must be a valid Smalltalk expression.\x0a\x09\x09- A chunk on top level with a preceding empty chunk is an instruction chunk:\x0a\x09\x09\x09- The object created by the expression then takes over reading chunks.\x0a\x0a\x09This metod returns next chunk as a String (trimmed), empty String (all whitespace) or nil.\x22\x0a\x0a\x09| char result chunk |\x0a\x09result := '' writeStream.\x0a\x09\x09[char := stream next.\x0a\x09\x09char notNil] whileTrue: [\x0a\x09\x09\x09\x09char = '!' ifTrue: [\x0a\x09\x09\x09\x09\x09\x09stream peek = '!'\x0a\x09\x09\x09\x09\x09\x09\x09\x09ifTrue: [stream next \x22skipping the escape double\x22]\x0a\x09\x09\x09\x09\x09\x09\x09\x09ifFalse: [^result contents trimBoth \x22chunk end marker found\x22]].\x0a\x09\x09\x09\x09result nextPut: char].\x0a\x09^nil \x22a chunk needs to end with !\x22",
messageSends: ["writeStream", "whileTrue:", "ifTrue:", "ifTrue:ifFalse:", "next", "trimBoth", "contents", "=", "peek", "nextPut:", "notNil"],
referencedClasses: []
}),
smalltalk.ChunkParser);

smalltalk.addMethod(
smalltalk.method({
selector: "stream:",
category: 'accessing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@stream"]=aStream;
return self}, function($ctx1) {$ctx1.fill(self,"stream:",{aStream:aStream},smalltalk.ChunkParser)})},
args: ["aStream"],
source: "stream: aStream\x0a\x09stream := aStream",
messageSends: [],
referencedClasses: []
}),
smalltalk.ChunkParser);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'not yet classified',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._stream_(aStream);
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aStream:aStream},smalltalk.ChunkParser.klass)})},
args: ["aStream"],
source: "on: aStream\x0a\x09^self new stream: aStream",
messageSends: ["stream:", "new"],
referencedClasses: []
}),
smalltalk.ChunkParser.klass);


smalltalk.addClass('Exporter', smalltalk.Object, [], 'Importer-Exporter');
smalltalk.Exporter.comment="I am responsible for outputting Amber code into a JavaScript string.\x0a\x0aThe generated output is enough to reconstruct the exported data, including Smalltalk source code and other metadata.\x0a\x0a## Use case\x0a\x0aI am typically used to save code outside of the Amber runtime (committing to disk, etc.).\x0a\x0a## API\x0a\x0aUse `#exportAll`, `#exportClass:` or `#exportPackage:` methods.";

smalltalk.addMethod(
smalltalk.method({
selector: "amdRecipe",
category: 'fileOut',
fn: function (){
var self=this;
var legacy;
function $AmdExporter(){return smalltalk.AmdExporter||(typeof AmdExporter=="undefined"?nil:AmdExporter)}
return smalltalk.withContext(function($ctx1) { 
var $1;
legacy=self._recipe();
$1=_st(_st(_st(legacy)._copyFrom_to_((1),(2))).__comma([_st($AmdExporter()).__minus_gt("exportPackageTransportOf:on:")])).__comma(_st(legacy)._copyFrom_to_((3),_st(legacy)._size()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"amdRecipe",{legacy:legacy},smalltalk.Exporter.klass)})},
args: [],
source: "amdRecipe\x0a\x09\x22Export a given package with amd transport type.\x22\x0a\x0a\x09| legacy |\x0a\x09legacy := self recipe.\x0a\x09^(legacy copyFrom: 1 to: 2),\x0a\x09{ AmdExporter -> #exportPackageTransportOf:on: },\x0a\x09(legacy copyFrom: 3 to: legacy size)",
messageSends: ["recipe", ",", "copyFrom:to:", "size", "->"],
referencedClasses: ["AmdExporter"]
}),
smalltalk.Exporter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "classNameFor:",
category: 'private',
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
}, function($ctx1) {$ctx1.fill(self,"classNameFor:",{aClass:aClass},smalltalk.Exporter.klass)})},
args: ["aClass"],
source: "classNameFor: aClass\x0a\x09^aClass isMetaclass\x0a\x09\x09ifTrue: [aClass instanceClass name, '.klass']\x0a\x09\x09ifFalse: [\x0a\x09\x09aClass isNil\x0a\x09\x09\x09ifTrue: ['nil']\x0a\x09\x09\x09ifFalse: [aClass name]]",
messageSends: ["ifTrue:ifFalse:", ",", "name", "instanceClass", "isNil", "isMetaclass"],
referencedClasses: []
}),
smalltalk.Exporter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "exportDefinitionOf:on:",
category: 'exporting-output',
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
return self}, function($ctx1) {$ctx1.fill(self,"exportDefinitionOf:on:",{aClass:aClass,aStream:aStream},smalltalk.Exporter.klass)})},
args: ["aClass", "aStream"],
source: "exportDefinitionOf: aClass on: aStream\x0a\x09aStream\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: 'smalltalk.addClass(';\x0a\x09\x09nextPutAll: '''', (self classNameFor: aClass), ''', ';\x0a\x09\x09nextPutAll: 'smalltalk.', (self classNameFor: aClass superclass);\x0a\x09\x09nextPutAll: ', ['.\x0a\x09aClass instanceVariableNames\x0a\x09\x09do: [:each | aStream nextPutAll: '''', each, '''']\x0a\x09\x09separatedBy: [aStream nextPutAll: ', '].\x0a\x09aStream\x0a\x09\x09nextPutAll: '], ''';\x0a\x09\x09nextPutAll: aClass category, '''';\x0a\x09\x09nextPutAll: ');'.\x0a\x09aClass comment notEmpty ifTrue: [\x0a\x09\x09aStream\x0a\x09\x09\x09lf;\x0a\x09\x09nextPutAll: 'smalltalk.';\x0a\x09\x09nextPutAll: (self classNameFor: aClass);\x0a\x09\x09nextPutAll: '.comment=';\x0a\x09\x09nextPutAll: aClass comment asJavascript;\x0a\x09\x09nextPutAll: ';'].\x0a\x09aStream lf",
messageSends: ["lf", "nextPutAll:", ",", "classNameFor:", "superclass", "do:separatedBy:", "instanceVariableNames", "category", "ifTrue:", "asJavascript", "comment", "notEmpty"],
referencedClasses: []
}),
smalltalk.Exporter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "exportMetaDefinitionOf:on:",
category: 'exporting-output',
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
return self}, function($ctx1) {$ctx1.fill(self,"exportMetaDefinitionOf:on:",{aClass:aClass,aStream:aStream},smalltalk.Exporter.klass)})},
args: ["aClass", "aStream"],
source: "exportMetaDefinitionOf: aClass on: aStream\x0a\x09aStream lf.\x0a\x09aClass class instanceVariableNames isEmpty ifFalse: [\x0a\x09\x09aStream\x0a\x09\x09nextPutAll: 'smalltalk.', (self classNameFor: aClass class);\x0a\x09\x09nextPutAll: '.iVarNames = ['.\x0a\x09\x09aClass class instanceVariableNames\x0a\x09\x09do: [:each | aStream nextPutAll: '''', each, '''']\x0a\x09\x09separatedBy: [aStream nextPutAll: ','].\x0a\x09\x09aStream nextPutAll: '];', String lf]",
messageSends: ["lf", "ifFalse:", "nextPutAll:", ",", "classNameFor:", "class", "do:separatedBy:", "instanceVariableNames", "isEmpty"],
referencedClasses: ["String"]
}),
smalltalk.Exporter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "exportMethod:on:",
category: 'exporting-output',
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
return self}, function($ctx1) {$ctx1.fill(self,"exportMethod:on:",{aMethod:aMethod,aStream:aStream},smalltalk.Exporter.klass)})},
args: ["aMethod", "aStream"],
source: "exportMethod: aMethod on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: 'smalltalk.addMethod(';lf;\x0a\x09\x09\x22nextPutAll: aMethod selector asSelector asJavascript, ',';lf;\x22\x0a\x09\x09nextPutAll: 'smalltalk.method({';lf;\x0a\x09\x09nextPutAll: 'selector: ', aMethod selector asJavascript, ',';lf;\x0a\x09\x09nextPutAll: 'category: ''', aMethod category, ''',';lf;\x0a\x09\x09nextPutAll: 'fn: ', aMethod fn compiledSource, ',';lf;\x0a\x09\x09nextPutAll: 'args: ', aMethod arguments asJavascript, ','; lf;\x0a\x09\x09nextPutAll: 'source: ', aMethod source asJavascript, ',';lf;\x0a\x09\x09nextPutAll: 'messageSends: ', aMethod messageSends asJavascript, ',';lf;\x0a\x09\x09nextPutAll: 'referencedClasses: ', aMethod referencedClasses asJavascript.\x0a\x09aStream\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: '}),';lf;\x0a\x09\x09nextPutAll: 'smalltalk.', (self classNameFor: aMethod methodClass);\x0a\x09\x09nextPutAll: ');';lf;lf",
messageSends: ["nextPutAll:", "lf", ",", "asJavascript", "selector", "category", "compiledSource", "fn", "arguments", "source", "messageSends", "referencedClasses", "classNameFor:", "methodClass"],
referencedClasses: []
}),
smalltalk.Exporter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackageDefinitionOf:on:",
category: 'exporting-output',
fn: function (package_,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_("smalltalk.addPackage(");
_st($1)._nextPutAll_(_st("'".__comma(_st(package_)._name())).__comma("');"));
$2=_st($1)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportPackageDefinitionOf:on:",{package_:package_,aStream:aStream},smalltalk.Exporter.klass)})},
args: ["package", "aStream"],
source: "exportPackageDefinitionOf: package on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: 'smalltalk.addPackage(';\x0a\x09\x09nextPutAll: '''', package name, ''');';\x0a\x09\x09lf",
messageSends: ["nextPutAll:", ",", "name", "lf"],
referencedClasses: []
}),
smalltalk.Exporter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackageEpilogueOf:on:",
category: 'exporting-output',
fn: function (aPackage,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_("})(global_smalltalk,global_nil,global__st);");
$2=_st($1)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportPackageEpilogueOf:on:",{aPackage:aPackage,aStream:aStream},smalltalk.Exporter.klass)})},
args: ["aPackage", "aStream"],
source: "exportPackageEpilogueOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: '})(global_smalltalk,global_nil,global__st);';\x0a\x09\x09lf",
messageSends: ["nextPutAll:", "lf"],
referencedClasses: []
}),
smalltalk.Exporter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackagePrologueOf:on:",
category: 'exporting-output',
fn: function (aPackage,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_("(function(smalltalk,nil,_st){");
$2=_st($1)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportPackagePrologueOf:on:",{aPackage:aPackage,aStream:aStream},smalltalk.Exporter.klass)})},
args: ["aPackage", "aStream"],
source: "exportPackagePrologueOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: '(function(smalltalk,nil,_st){';\x0a\x09\x09lf",
messageSends: ["nextPutAll:", "lf"],
referencedClasses: []
}),
smalltalk.Exporter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "extensionMethodsOfPackage:",
category: 'exporting-accessing',
fn: function (package_){
var self=this;
var name,result;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $Package(){return smalltalk.Package||(typeof Package=="undefined"?nil:Package)}
return smalltalk.withContext(function($ctx1) { 
var $1;
name=_st(package_)._name();
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
}, function($ctx1) {$ctx1.fill(self,"extensionMethodsOfPackage:",{package_:package_,name:name,result:result},smalltalk.Exporter.klass)})},
args: ["package"],
source: "extensionMethodsOfPackage: package\x0a\x09\x22Issue #143: sort classes and methods alphabetically\x22\x0a\x0a\x09| name result |\x0a\x09name := package name.\x0a\x09result := OrderedCollection new.\x0a\x09(Package sortedClasses: Smalltalk current classes) do: [:each |\x0a\x09\x09{each. each class} do: [:aClass |\x0a\x09\x09\x09result addAll: (((aClass methodDictionary values)\x0a\x09\x09\x09\x09sorted: [:a :b | a selector <= b selector])\x0a\x09\x09\x09\x09select: [:method | method category match: '^\x5c*', name]) ]].\x0a\x09^result",
messageSends: ["name", "new", "do:", "addAll:", "select:", "match:", ",", "category", "sorted:", "<=", "selector", "values", "methodDictionary", "class", "sortedClasses:", "classes", "current"],
referencedClasses: ["OrderedCollection", "Smalltalk", "Package"]
}),
smalltalk.Exporter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "ownMethodsOfClass:",
category: 'exporting-accessing',
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
}, function($ctx1) {$ctx1.fill(self,"ownMethodsOfClass:",{aClass:aClass},smalltalk.Exporter.klass)})},
args: ["aClass"],
source: "ownMethodsOfClass: aClass\x0a\x09\x22Issue #143: sort methods alphabetically\x22\x0a\x0a\x09^((aClass methodDictionary values) sorted: [:a :b | a selector <= b selector])\x0a\x09\x09reject: [:each | (each category match: '^\x5c*')]",
messageSends: ["reject:", "match:", "category", "sorted:", "<=", "selector", "values", "methodDictionary"],
referencedClasses: []
}),
smalltalk.Exporter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "ownMethodsOfMetaClass:",
category: 'exporting-accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._ownMethodsOfClass_(_st(aClass)._class());
return $1;
}, function($ctx1) {$ctx1.fill(self,"ownMethodsOfMetaClass:",{aClass:aClass},smalltalk.Exporter.klass)})},
args: ["aClass"],
source: "ownMethodsOfMetaClass: aClass\x0a\x09\x22Issue #143: sort methods alphabetically\x22\x0a\x0a\x09^self ownMethodsOfClass: aClass class",
messageSends: ["ownMethodsOfClass:", "class"],
referencedClasses: []
}),
smalltalk.Exporter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "recipe",
category: 'fileOut',
fn: function (){
var self=this;
function $AmdExporter(){return smalltalk.AmdExporter||(typeof AmdExporter=="undefined"?nil:AmdExporter)}
function $PluggableExporter(){return smalltalk.PluggableExporter||(typeof PluggableExporter=="undefined"?nil:PluggableExporter)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[_st($AmdExporter()).__minus_gt("exportPackagePrologueOf:on:"),self.__minus_gt("exportPackageDefinitionOf:on:"),[_st($PluggableExporter()).__minus_gt("ownClassesOfPackage:"),self.__minus_gt("exportDefinitionOf:on:"),[self.__minus_gt("ownMethodsOfClass:"),self.__minus_gt("exportMethod:on:")],self.__minus_gt("exportMetaDefinitionOf:on:"),[self.__minus_gt("ownMethodsOfMetaClass:"),self.__minus_gt("exportMethod:on:")]],[self.__minus_gt("extensionMethodsOfPackage:"),self.__minus_gt("exportMethod:on:")],_st($AmdExporter()).__minus_gt("exportPackageEpilogueOf:on:")];
return $1;
}, function($ctx1) {$ctx1.fill(self,"recipe",{},smalltalk.Exporter.klass)})},
args: [],
source: "recipe\x0a\x09\x22Export a given package.\x22\x0a\x0a\x09^{\x0a\x09\x09AmdExporter -> #exportPackagePrologueOf:on:.\x0a\x09\x09self -> #exportPackageDefinitionOf:on:.\x0a\x09\x09{\x0a\x09\x09\x09PluggableExporter -> #ownClassesOfPackage:.\x0a\x09\x09\x09self -> #exportDefinitionOf:on:.\x0a\x09\x09\x09{\x0a\x09\x09\x09\x09self -> #ownMethodsOfClass:.\x0a\x09\x09\x09\x09self -> #exportMethod:on: }.\x0a\x09\x09\x09self -> #exportMetaDefinitionOf:on:.\x0a\x09\x09\x09{\x0a\x09\x09\x09\x09self -> #ownMethodsOfMetaClass:.\x0a\x09\x09\x09\x09self -> #exportMethod:on: } }.\x0a\x09\x09{\x0a\x09\x09\x09self -> #extensionMethodsOfPackage:.\x0a\x09\x09\x09self -> #exportMethod:on: }.\x0a\x09\x09AmdExporter -> #exportPackageEpilogueOf:on:\x0a\x09}",
messageSends: ["->"],
referencedClasses: ["AmdExporter", "PluggableExporter"]
}),
smalltalk.Exporter.klass);


smalltalk.addClass('StrippedExporter', smalltalk.Exporter, [], 'Importer-Exporter');
smalltalk.StrippedExporter.comment="I export Amber code into a JavaScript string, but without any optional associated data like the Amber source code.";

smalltalk.addMethod(
smalltalk.method({
selector: "exportDefinitionOf:on:",
category: 'exporting-output',
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
return self}, function($ctx1) {$ctx1.fill(self,"exportDefinitionOf:on:",{aClass:aClass,aStream:aStream},smalltalk.StrippedExporter.klass)})},
args: ["aClass", "aStream"],
source: "exportDefinitionOf: aClass on: aStream\x0a\x09aStream\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: 'smalltalk.addClass(';\x0a\x09\x09nextPutAll: '''', (self classNameFor: aClass), ''', ';\x0a\x09\x09nextPutAll: 'smalltalk.', (self classNameFor: aClass superclass);\x0a\x09\x09nextPutAll: ', ['.\x0a\x09aClass instanceVariableNames\x0a\x09\x09do: [:each | aStream nextPutAll: '''', each, '''']\x0a\x09\x09separatedBy: [aStream nextPutAll: ', '].\x0a\x09aStream\x0a\x09\x09nextPutAll: '], ''';\x0a\x09\x09nextPutAll: aClass category, '''';\x0a\x09\x09nextPutAll: ');'.\x0a\x09aStream lf",
messageSends: ["lf", "nextPutAll:", ",", "classNameFor:", "superclass", "do:separatedBy:", "instanceVariableNames", "category"],
referencedClasses: []
}),
smalltalk.StrippedExporter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "exportMethod:on:",
category: 'exporting-output',
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
return self}, function($ctx1) {$ctx1.fill(self,"exportMethod:on:",{aMethod:aMethod,aStream:aStream},smalltalk.StrippedExporter.klass)})},
args: ["aMethod", "aStream"],
source: "exportMethod: aMethod on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: 'smalltalk.addMethod(';lf;\x0a\x09\x09\x22nextPutAll: aMethod selector asSelector asJavascript, ',';lf;\x22\x0a\x09\x09nextPutAll: 'smalltalk.method({';lf;\x0a\x09\x09nextPutAll: 'selector: ', aMethod selector asJavascript, ',';lf;\x0a\x09\x09nextPutAll: 'fn: ', aMethod fn compiledSource, ',';lf;\x0a\x09\x09nextPutAll: 'messageSends: ', aMethod messageSends asJavascript;\x0a\x09\x09nextPutAll: '}),';lf;\x0a\x09\x09nextPutAll: 'smalltalk.', (self classNameFor: aMethod methodClass);\x0a\x09\x09nextPutAll: ');';lf;lf",
messageSends: ["nextPutAll:", "lf", ",", "asJavascript", "selector", "compiledSource", "fn", "messageSends", "classNameFor:", "methodClass"],
referencedClasses: []
}),
smalltalk.StrippedExporter.klass);


smalltalk.addClass('Importer', smalltalk.Object, [], 'Importer-Exporter');
smalltalk.Importer.comment="I can import Amber code from a string in the chunk format.\x0a\x0a## API\x0a\x0a    Importer new import: aString";
smalltalk.addMethod(
smalltalk.method({
selector: "import:",
category: 'fileIn',
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
args: ["aStream"],
source: "import: aStream\x0a\x09| chunk result parser lastEmpty |\x0a\x09parser := ChunkParser on: aStream.\x0a\x09lastEmpty := false.\x0a\x09[chunk := parser nextChunk.\x0a\x09chunk isNil] whileFalse: [\x0a\x09\x09chunk isEmpty\x0a\x09\x09\x09ifTrue: [lastEmpty := true]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09result := Compiler new evaluateExpression: chunk.\x0a\x09\x09\x09\x09lastEmpty\x0a\x09\x09\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09lastEmpty := false.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09result scanFrom: parser]]]",
messageSends: ["on:", "whileFalse:", "ifTrue:ifFalse:", "evaluateExpression:", "new", "ifTrue:", "scanFrom:", "isEmpty", "nextChunk", "isNil"],
referencedClasses: ["ChunkParser", "Compiler"]
}),
smalltalk.Importer);



smalltalk.addClass('PackageHandler', smalltalk.Object, [], 'Importer-Exporter');
smalltalk.PackageHandler.comment="I am responsible for handling package loading and committing.\x0a\x0aI should not be used directly. Instead, use the corresponding `Package` methods.";
smalltalk.addMethod(
smalltalk.method({
selector: "ajaxPutAt:data:",
category: 'private',
fn: function (aURL,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(jQuery)._ajax_options_(aURL,smalltalk.HashedCollection._from_(["type".__minus_gt("PUT"),"data".__minus_gt(aString),"contentType".__minus_gt("text/plain;charset=UTF-8"),"error".__minus_gt((function(xhr){
return smalltalk.withContext(function($ctx2) {
return self._error_(_st(_st(_st("Commiting ".__comma(aURL)).__comma(" failed with reason: \x22")).__comma(_st(xhr)._responseText())).__comma("\x22"));
}, function($ctx2) {$ctx2.fillBlock({xhr:xhr},$ctx1)})}))]));
return self}, function($ctx1) {$ctx1.fill(self,"ajaxPutAt:data:",{aURL:aURL,aString:aString},smalltalk.PackageHandler)})},
args: ["aURL", "aString"],
source: "ajaxPutAt: aURL data: aString\x0a\x09jQuery\x0a\x09\x09ajax: aURL \x0a\x09\x09options: #{ \x0a\x09\x09\x09'type' -> 'PUT'.\x0a\x09\x09\x09'data' -> aString.\x0a\x09\x09\x09'contentType' -> 'text/plain;charset=UTF-8'.\x0a\x09\x09\x09'error' -> [ :xhr | self error: 'Commiting ' , aURL , ' failed with reason: \x22' , (xhr responseText) , '\x22'] }",
messageSends: ["ajax:options:", "->", "error:", ",", "responseText"],
referencedClasses: []
}),
smalltalk.PackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "commit:",
category: 'committing',
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
return _st(_st($PluggableExporter())._newUsing_(_st(commitStrategy)._key()))._exportPackage_on_(aPackage,stream);
}, function($ctx3) {$ctx3.fillBlock({stream:stream},$ctx2)})}));
fileContents;
return self._ajaxPutAt_data_(_st(commitStrategy)._value(),fileContents);
}, function($ctx2) {$ctx2.fillBlock({commitStrategyFactory:commitStrategyFactory,fileContents:fileContents,commitStrategy:commitStrategy},$ctx1)})}),"Committing package ".__comma(_st(aPackage)._name()));
return self}, function($ctx1) {$ctx1.fill(self,"commit:",{aPackage:aPackage},smalltalk.PackageHandler)})},
args: ["aPackage"],
source: "commit: aPackage\x0a\x09self commitChannels\x0a\x09\x09do: [ :commitStrategyFactory || fileContents commitStrategy |\x0a\x09\x09\x09commitStrategy := commitStrategyFactory value: aPackage.\x0a\x09\x09\x09fileContents := String streamContents: [ :stream |\x0a\x09\x09\x09\x09(PluggableExporter newUsing: commitStrategy key) exportPackage: aPackage on: stream ].\x0a\x09\x09\x09self ajaxPutAt: commitStrategy value data: fileContents ]\x0a\x09\x09displayingProgress: 'Committing package ', aPackage name",
messageSends: ["do:displayingProgress:", "value:", "streamContents:", "exportPackage:on:", "newUsing:", "key", "ajaxPutAt:data:", "value", ",", "name", "commitChannels"],
referencedClasses: ["PluggableExporter", "String"]
}),
smalltalk.PackageHandler);


smalltalk.PackageHandler.klass.iVarNames = ['registry'];
smalltalk.addMethod(
smalltalk.method({
selector: "classRegisteredFor:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@registry"])._at_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"classRegisteredFor:",{aString:aString},smalltalk.PackageHandler.klass)})},
args: ["aString"],
source: "classRegisteredFor: aString\x0a\x09^registry at: aString",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.PackageHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "for:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._classRegisteredFor_(aString))._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"for:",{aString:aString},smalltalk.PackageHandler.klass)})},
args: ["aString"],
source: "for: aString\x0a\x09^(self classRegisteredFor: aString) new",
messageSends: ["new", "classRegisteredFor:"],
referencedClasses: []
}),
smalltalk.PackageHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.PackageHandler.klass.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@registry"]=smalltalk.HashedCollection._from_([]);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.PackageHandler.klass)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09registry := #{}",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.PackageHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "register:for:",
category: 'registry',
fn: function (aClass,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@registry"])._at_put_(aString,aClass);
return self}, function($ctx1) {$ctx1.fill(self,"register:for:",{aClass:aClass,aString:aString},smalltalk.PackageHandler.klass)})},
args: ["aClass", "aString"],
source: "register: aClass for: aString\x0a\x09registry at: aString put: aClass",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.PackageHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "registerFor:",
category: 'registry',
fn: function (aString){
var self=this;
function $PackageHandler(){return smalltalk.PackageHandler||(typeof PackageHandler=="undefined"?nil:PackageHandler)}
return smalltalk.withContext(function($ctx1) { 
_st($PackageHandler())._register_for_(self,aString);
return self}, function($ctx1) {$ctx1.fill(self,"registerFor:",{aString:aString},smalltalk.PackageHandler.klass)})},
args: ["aString"],
source: "registerFor: aString\x0a\x09PackageHandler register: self for: aString",
messageSends: ["register:for:"],
referencedClasses: ["PackageHandler"]
}),
smalltalk.PackageHandler.klass);


smalltalk.addClass('AmdPackageHandler', smalltalk.PackageHandler, [], 'Importer-Exporter');
smalltalk.AmdPackageHandler.comment="I am responsible for handling package loading and committing.\x0d\x0a\x0d\x0aI should not be used directly. Instead, use the corresponding `Package` methods.";
smalltalk.addMethod(
smalltalk.method({
selector: "commitChannels",
category: 'committing',
fn: function (){
var self=this;
function $Exporter(){return smalltalk.Exporter||(typeof Exporter=="undefined"?nil:Exporter)}
function $StrippedExporter(){return smalltalk.StrippedExporter||(typeof StrippedExporter=="undefined"?nil:StrippedExporter)}
function $ChunkExporter(){return smalltalk.ChunkExporter||(typeof ChunkExporter=="undefined"?nil:ChunkExporter)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[(function(pkg){
return smalltalk.withContext(function($ctx2) {
return _st(_st($Exporter())._amdRecipe()).__minus_gt(_st(_st(_st(_st(pkg)._commitPathJs()).__comma("/")).__comma(_st(pkg)._name())).__comma(".js"));
}, function($ctx2) {$ctx2.fillBlock({pkg:pkg},$ctx1)})}),(function(pkg){
return smalltalk.withContext(function($ctx2) {
return _st(_st($StrippedExporter())._amdRecipe()).__minus_gt(_st(_st(_st(_st(pkg)._commitPathJs()).__comma("/")).__comma(_st(pkg)._name())).__comma(".deploy.js"));
}, function($ctx2) {$ctx2.fillBlock({pkg:pkg},$ctx1)})}),(function(pkg){
return smalltalk.withContext(function($ctx2) {
return _st(_st($ChunkExporter())._recipe()).__minus_gt(_st(_st(_st(_st(pkg)._commitPathSt()).__comma("/")).__comma(_st(pkg)._name())).__comma(".st"));
}, function($ctx2) {$ctx2.fillBlock({pkg:pkg},$ctx1)})})];
return $1;
}, function($ctx1) {$ctx1.fill(self,"commitChannels",{},smalltalk.AmdPackageHandler)})},
args: [],
source: "commitChannels\x0a\x09^{ \x0a\x09\x09[ :pkg | Exporter amdRecipe -> (pkg commitPathJs, '/', pkg name, '.js') ].\x0a\x09\x09[ :pkg | StrippedExporter amdRecipe -> (pkg commitPathJs, '/', pkg name, '.deploy.js') ].\x0a\x09\x09[ :pkg | ChunkExporter recipe -> (pkg commitPathSt, '/', pkg name, '.st') ]\x0a\x09}",
messageSends: ["->", ",", "name", "commitPathJs", "amdRecipe", "commitPathSt", "recipe"],
referencedClasses: ["Exporter", "StrippedExporter", "ChunkExporter"]
}),
smalltalk.AmdPackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPathJsFor:",
category: 'committing',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._toUrl_(self._namespaceFor_(aPackage));
return $1;
}, function($ctx1) {$ctx1.fill(self,"commitPathJsFor:",{aPackage:aPackage},smalltalk.AmdPackageHandler)})},
args: ["aPackage"],
source: "commitPathJsFor: aPackage\x0a\x09^self toUrl: (self namespaceFor: aPackage)",
messageSends: ["toUrl:", "namespaceFor:"],
referencedClasses: []
}),
smalltalk.AmdPackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPathStFor:",
category: 'committing',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._toUrl_(_st(self._namespaceFor_(aPackage)).__comma("/_source"));
return $1;
}, function($ctx1) {$ctx1.fill(self,"commitPathStFor:",{aPackage:aPackage},smalltalk.AmdPackageHandler)})},
args: ["aPackage"],
source: "commitPathStFor: aPackage\x0a\x09\x22if _source is not mapped, .st commit will likely fail\x22\x0a\x09^self toUrl: (self namespaceFor: aPackage), '/_source'.",
messageSends: ["toUrl:", ",", "namespaceFor:"],
referencedClasses: []
}),
smalltalk.AmdPackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "namespaceFor:",
category: 'committing',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=_st(aPackage)._amdNamespace();
if(($receiver = $2) == nil || $receiver == undefined){
$3=aPackage;
_st($3)._amdNamespace_(_st(self._class())._defaultNamespace());
$4=_st($3)._amdNamespace();
$1=$4;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"namespaceFor:",{aPackage:aPackage},smalltalk.AmdPackageHandler)})},
args: ["aPackage"],
source: "namespaceFor: aPackage\x0a\x09^aPackage amdNamespace\x0a\x09\x09ifNil: [ aPackage amdNamespace: self class defaultNamespace; amdNamespace ]",
messageSends: ["ifNil:", "amdNamespace:", "defaultNamespace", "class", "amdNamespace"],
referencedClasses: []
}),
smalltalk.AmdPackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "toUrl:",
category: 'private',
fn: function (aString){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st($Smalltalk())._current())._at_("_amd_require");
if(($receiver = $1) == nil || $receiver == undefined){
self._error_("AMD loader not present");
} else {
var require;
require=$receiver;
$2=_st(_st(require)._basicAt_("toUrl"))._value_(aString);
return $2;
};
return self}, function($ctx1) {$ctx1.fill(self,"toUrl:",{aString:aString},smalltalk.AmdPackageHandler)})},
args: ["aString"],
source: "toUrl: aString\x0a\x09(Smalltalk current at: '_amd_require')\x0a\x09\x09ifNil: [ self error: 'AMD loader not present' ]\x0a\x09\x09ifNotNil: [ :require | ^(require basicAt: 'toUrl') value: aString ]",
messageSends: ["ifNil:ifNotNil:", "error:", "value:", "basicAt:", "at:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.AmdPackageHandler);


smalltalk.AmdPackageHandler.klass.iVarNames = ['defaultNamespace'];
smalltalk.addMethod(
smalltalk.method({
selector: "commitPathsFromLoader",
category: 'commit paths',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"commitPathsFromLoader",{},smalltalk.AmdPackageHandler.klass)})},
args: [],
source: "commitPathsFromLoader\x0a\x09\x22TODO\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.AmdPackageHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultNamespace",
category: 'commit paths',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@defaultNamespace"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=self._error_("AMD default namespace not set.");
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultNamespace",{},smalltalk.AmdPackageHandler.klass)})},
args: [],
source: "defaultNamespace\x0a\x09^ defaultNamespace ifNil: [ self error: 'AMD default namespace not set.' ]",
messageSends: ["ifNil:", "error:"],
referencedClasses: []
}),
smalltalk.AmdPackageHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultNamespace:",
category: 'commit paths',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@defaultNamespace"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"defaultNamespace:",{aString:aString},smalltalk.AmdPackageHandler.klass)})},
args: ["aString"],
source: "defaultNamespace: aString\x0a\x09defaultNamespace := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.AmdPackageHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AmdPackageHandler.klass.superclass.fn.prototype._initialize.apply(_st(self), []);
self._registerFor_("amd");
self._commitPathsFromLoader();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AmdPackageHandler.klass)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self registerFor: 'amd'.\x0a\x09self commitPathsFromLoader",
messageSends: ["initialize", "registerFor:", "commitPathsFromLoader"],
referencedClasses: []
}),
smalltalk.AmdPackageHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "resetCommitPaths",
category: 'commit paths',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@defaultNamespace"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"resetCommitPaths",{},smalltalk.AmdPackageHandler.klass)})},
args: [],
source: "resetCommitPaths\x0a\x09defaultNamespace := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.AmdPackageHandler.klass);


smalltalk.addClass('LegacyPackageHandler', smalltalk.PackageHandler, [], 'Importer-Exporter');
smalltalk.LegacyPackageHandler.comment="I am responsible for handling package loading and committing.\x0d\x0a\x0d\x0aI should not be used directly. Instead, use the corresponding `Package` methods.";
smalltalk.addMethod(
smalltalk.method({
selector: "commitChannels",
category: 'committing',
fn: function (){
var self=this;
function $Exporter(){return smalltalk.Exporter||(typeof Exporter=="undefined"?nil:Exporter)}
function $StrippedExporter(){return smalltalk.StrippedExporter||(typeof StrippedExporter=="undefined"?nil:StrippedExporter)}
function $ChunkExporter(){return smalltalk.ChunkExporter||(typeof ChunkExporter=="undefined"?nil:ChunkExporter)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[(function(pkg){
return smalltalk.withContext(function($ctx2) {
return _st(_st($Exporter())._recipe()).__minus_gt(_st(_st(_st(_st(pkg)._commitPathJs()).__comma("/")).__comma(_st(pkg)._name())).__comma(".js"));
}, function($ctx2) {$ctx2.fillBlock({pkg:pkg},$ctx1)})}),(function(pkg){
return smalltalk.withContext(function($ctx2) {
return _st(_st($StrippedExporter())._recipe()).__minus_gt(_st(_st(_st(_st(pkg)._commitPathJs()).__comma("/")).__comma(_st(pkg)._name())).__comma(".deploy.js"));
}, function($ctx2) {$ctx2.fillBlock({pkg:pkg},$ctx1)})}),(function(pkg){
return smalltalk.withContext(function($ctx2) {
return _st(_st($ChunkExporter())._recipe()).__minus_gt(_st(_st(_st(_st(pkg)._commitPathSt()).__comma("/")).__comma(_st(pkg)._name())).__comma(".st"));
}, function($ctx2) {$ctx2.fillBlock({pkg:pkg},$ctx1)})})];
return $1;
}, function($ctx1) {$ctx1.fill(self,"commitChannels",{},smalltalk.LegacyPackageHandler)})},
args: [],
source: "commitChannels\x0a\x09^{ \x0a\x09\x09[ :pkg | Exporter recipe -> (pkg commitPathJs, '/', pkg name, '.js') ].\x0a\x09\x09[ :pkg | StrippedExporter recipe -> (pkg commitPathJs, '/', pkg name, '.deploy.js') ].\x0a\x09\x09[ :pkg | ChunkExporter recipe -> (pkg commitPathSt, '/', pkg name, '.st') ]\x0a\x09}",
messageSends: ["->", ",", "name", "commitPathJs", "recipe", "commitPathSt"],
referencedClasses: ["Exporter", "StrippedExporter", "ChunkExporter"]
}),
smalltalk.LegacyPackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPathJsFor:",
category: 'committing',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._defaultCommitPathJs();
return $1;
}, function($ctx1) {$ctx1.fill(self,"commitPathJsFor:",{aPackage:aPackage},smalltalk.LegacyPackageHandler)})},
args: ["aPackage"],
source: "commitPathJsFor: aPackage\x0a\x09^self class defaultCommitPathJs",
messageSends: ["defaultCommitPathJs", "class"],
referencedClasses: []
}),
smalltalk.LegacyPackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPathStFor:",
category: 'committing',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._defaultCommitPathSt();
return $1;
}, function($ctx1) {$ctx1.fill(self,"commitPathStFor:",{aPackage:aPackage},smalltalk.LegacyPackageHandler)})},
args: ["aPackage"],
source: "commitPathStFor: aPackage\x0a\x09^self class defaultCommitPathSt",
messageSends: ["defaultCommitPathSt", "class"],
referencedClasses: []
}),
smalltalk.LegacyPackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "loadPackage:prefix:",
category: 'loading',
fn: function (packageName,aString){
var self=this;
var url;
return smalltalk.withContext(function($ctx1) { 
var $1;
url=_st(_st(_st("/".__comma(aString)).__comma("/js/")).__comma(packageName)).__comma(".js");
_st(jQuery)._ajax_options_(url,smalltalk.HashedCollection._from_(["type".__minus_gt("GET"),"dataType".__minus_gt("script"),"complete".__minus_gt((function(jqXHR,textStatus){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(jqXHR)._readyState()).__eq((4));
if(smalltalk.assert($1)){
return self._setupPackageNamed_prefix_(packageName,aString);
};
}, function($ctx2) {$ctx2.fillBlock({jqXHR:jqXHR,textStatus:textStatus},$ctx1)})})),"error".__minus_gt((function(){
return smalltalk.withContext(function($ctx2) {
return _st(window)._alert_("Could not load package at: ".__comma(url));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))]));
return self}, function($ctx1) {$ctx1.fill(self,"loadPackage:prefix:",{packageName:packageName,aString:aString,url:url},smalltalk.LegacyPackageHandler)})},
args: ["packageName", "aString"],
source: "loadPackage: packageName prefix: aString\x0a\x09| url |\x0a\x09url := '/', aString, '/js/', packageName, '.js'.\x0a\x09jQuery\x0a\x09\x09ajax: url\x0a\x09\x09options: #{\x0a\x09\x09\x09'type' -> 'GET'.\x0a\x09\x09\x09'dataType' -> 'script'.\x0a\x09\x09\x09'complete' -> [ :jqXHR :textStatus |\x0a\x09\x09\x09\x09jqXHR readyState = 4\x0a\x09\x09\x09\x09\x09ifTrue: [ self setupPackageNamed: packageName prefix: aString ] ].\x0a\x09\x09\x09'error' -> [ window alert: 'Could not load package at: ', url ]\x0a\x09\x09}",
messageSends: [",", "ajax:options:", "->", "ifTrue:", "setupPackageNamed:prefix:", "=", "readyState", "alert:"],
referencedClasses: []
}),
smalltalk.LegacyPackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "loadPackages:prefix:",
category: 'loading',
fn: function (aCollection,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._loadPackage_prefix_(each,aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"loadPackages:prefix:",{aCollection:aCollection,aString:aString},smalltalk.LegacyPackageHandler)})},
args: ["aCollection", "aString"],
source: "loadPackages: aCollection prefix: aString\x0a\x09aCollection do: [ :each |\x0a\x09\x09self loadPackage: each prefix: aString ]",
messageSends: ["do:", "loadPackage:prefix:"],
referencedClasses: []
}),
smalltalk.LegacyPackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "setupPackageNamed:prefix:",
category: 'private',
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
args: ["packageName", "aString"],
source: "setupPackageNamed: packageName prefix: aString\x0a\x0a\x09(Package named: packageName)\x0a\x09\x09setupClasses;\x0a\x09\x09commitPathJs: '/', aString, '/js';\x0a\x09\x09commitPathSt: '/', aString, '/st'",
messageSends: ["setupClasses", "named:", "commitPathJs:", ",", "commitPathSt:"],
referencedClasses: ["Package"]
}),
smalltalk.LegacyPackageHandler);


smalltalk.LegacyPackageHandler.klass.iVarNames = ['defaultCommitPathJs','defaultCommitPathSt'];
smalltalk.addMethod(
smalltalk.method({
selector: "commitPathsFromLoader",
category: 'commit paths',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 

		var commitPath = typeof amber !== 'undefined' && amber.commitPath;
		if (!commitPath) return;
		if (commitPath.js) self._defaultCommitPathJs_(commitPath.js);
		if (commitPath.st) self._defaultCommitPathSt_(commitPath.st);
	;
return self}, function($ctx1) {$ctx1.fill(self,"commitPathsFromLoader",{},smalltalk.LegacyPackageHandler.klass)})},
args: [],
source: "commitPathsFromLoader\x0a\x09<\x0a\x09\x09var commitPath = typeof amber !== 'undefined' && amber.commitPath;\x0a\x09\x09if (!commitPath) return;\x0a\x09\x09if (commitPath.js) self._defaultCommitPathJs_(commitPath.js);\x0a\x09\x09if (commitPath.st) self._defaultCommitPathSt_(commitPath.st);\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.LegacyPackageHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultCommitPathJs",
category: 'commit paths',
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
args: [],
source: "defaultCommitPathJs\x0a\x09^ defaultCommitPathJs ifNil: [ defaultCommitPathJs := 'js']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.LegacyPackageHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultCommitPathJs:",
category: 'commit paths',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@defaultCommitPathJs"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"defaultCommitPathJs:",{aString:aString},smalltalk.LegacyPackageHandler.klass)})},
args: ["aString"],
source: "defaultCommitPathJs: aString\x0a\x09defaultCommitPathJs := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.LegacyPackageHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultCommitPathSt",
category: 'commit paths',
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
args: [],
source: "defaultCommitPathSt\x0a\x09^ defaultCommitPathSt ifNil: [ defaultCommitPathSt := 'st']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.LegacyPackageHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultCommitPathSt:",
category: 'commit paths',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@defaultCommitPathSt"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"defaultCommitPathSt:",{aString:aString},smalltalk.LegacyPackageHandler.klass)})},
args: ["aString"],
source: "defaultCommitPathSt: aString\x0a\x09defaultCommitPathSt := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.LegacyPackageHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.LegacyPackageHandler.klass.superclass.fn.prototype._initialize.apply(_st(self), []);
self._registerFor_("unknown");
self._commitPathsFromLoader();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.LegacyPackageHandler.klass)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self registerFor: 'unknown'.\x0a\x09self commitPathsFromLoader",
messageSends: ["initialize", "registerFor:", "commitPathsFromLoader"],
referencedClasses: []
}),
smalltalk.LegacyPackageHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "loadPackages:prefix:",
category: 'loading',
fn: function (aCollection,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._loadPackages_prefix_(aCollection,aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"loadPackages:prefix:",{aCollection:aCollection,aString:aString},smalltalk.LegacyPackageHandler.klass)})},
args: ["aCollection", "aString"],
source: "loadPackages: aCollection prefix: aString\x0a\x09^ self new loadPackages: aCollection prefix: aString",
messageSends: ["loadPackages:prefix:", "new"],
referencedClasses: []
}),
smalltalk.LegacyPackageHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "resetCommitPaths",
category: 'commit paths',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@defaultCommitPathJs"]=nil;
self["@defaultCommitPathSt"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"resetCommitPaths",{},smalltalk.LegacyPackageHandler.klass)})},
args: [],
source: "resetCommitPaths\x0a\x09defaultCommitPathJs := nil.\x0a\x09defaultCommitPathSt := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.LegacyPackageHandler.klass);


smalltalk.addClass('PluggableExporter', smalltalk.Object, ['recipe'], 'Importer-Exporter');
smalltalk.addMethod(
smalltalk.method({
selector: "export:usingRecipe:on:",
category: 'fileOut',
fn: function (anObject,anArray,aStream){
var self=this;
var args;
return smalltalk.withContext(function($ctx1) { 
var $1;
args=[anObject,aStream];
_st(anArray)._do_((function(each){
var val;
return smalltalk.withContext(function($ctx2) {
val=_st(each)._value();
val;
$1=_st(val).__eq_eq(each);
if(smalltalk.assert($1)){
var selection;
selection=_st(_st(_st(each)._first())._key())._perform_withArguments_(_st(_st(each)._first())._value(),[anObject]);
selection;
return _st(selection)._do_((function(eachPart){
return smalltalk.withContext(function($ctx3) {
return self._export_usingRecipe_on_(eachPart,_st(each)._allButFirst(),aStream);
}, function($ctx3) {$ctx3.fillBlock({eachPart:eachPart},$ctx2)})}));
} else {
return _st(_st(each)._key())._perform_withArguments_(val,args);
};
}, function($ctx2) {$ctx2.fillBlock({each:each,val:val},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"export:usingRecipe:on:",{anObject:anObject,anArray:anArray,aStream:aStream,args:args},smalltalk.PluggableExporter)})},
args: ["anObject", "anArray", "aStream"],
source: "export: anObject usingRecipe: anArray on: aStream\x0a\x09| args |\x0a\x09args := { anObject. aStream }.\x0a\x09anArray do: [ :each | | val |\x0a\x09\x09val := each value.\x0a\x09\x09val == each\x0a\x09\x09\x09ifFalse: [ \x22association\x22\x0a\x09\x09\x09\x09each key perform: val withArguments: args ]\x0a\x09\x09\x09ifTrue: [ \x22sub-array\x22\x0a\x09\x09\x09\x09| selection |\x0a\x09\x09\x09\x09selection := each first key perform: each first value withArguments: { anObject }.\x0a\x09\x09\x09\x09selection do: [ :eachPart |\x09self export: eachPart usingRecipe: each allButFirst on: aStream ]]]",
messageSends: ["do:", "value", "ifFalse:ifTrue:", "perform:withArguments:", "key", "first", "export:usingRecipe:on:", "allButFirst", "=="],
referencedClasses: []
}),
smalltalk.PluggableExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportAll",
category: 'fileOut',
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
}, function($ctx1) {$ctx1.fill(self,"exportAll",{},smalltalk.PluggableExporter)})},
args: [],
source: "exportAll\x0a\x09\x22Export all packages in the system.\x22\x0a\x0a\x09^String streamContents: [:stream |\x0a\x09\x09Smalltalk current packages do: [:pkg |\x0a\x09\x09self exportPackage: pkg on: stream]]",
messageSends: ["streamContents:", "do:", "exportPackage:on:", "packages", "current"],
referencedClasses: ["Smalltalk", "String"]
}),
smalltalk.PluggableExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackage:on:",
category: 'fileOut',
fn: function (aPackage,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._export_usingRecipe_on_(aPackage,self._recipe(),aStream);
return self}, function($ctx1) {$ctx1.fill(self,"exportPackage:on:",{aPackage:aPackage,aStream:aStream},smalltalk.PluggableExporter)})},
args: ["aPackage", "aStream"],
source: "exportPackage: aPackage on: aStream\x0a\x09self export: aPackage usingRecipe: self recipe on: aStream",
messageSends: ["export:usingRecipe:on:", "recipe"],
referencedClasses: []
}),
smalltalk.PluggableExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "recipe",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@recipe"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"recipe",{},smalltalk.PluggableExporter)})},
args: [],
source: "recipe\x0a\x09^recipe",
messageSends: [],
referencedClasses: []
}),
smalltalk.PluggableExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "recipe:",
category: 'accessing',
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@recipe"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"recipe:",{anArray:anArray},smalltalk.PluggableExporter)})},
args: ["anArray"],
source: "recipe: anArray\x0a\x09recipe := anArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.PluggableExporter);


smalltalk.addMethod(
smalltalk.method({
selector: "newUsing:",
category: 'exporting-accessing',
fn: function (recipe){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._recipe_(recipe);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newUsing:",{recipe:recipe},smalltalk.PluggableExporter.klass)})},
args: ["recipe"],
source: "newUsing: recipe\x0a\x09^self new recipe: recipe; yourself",
messageSends: ["recipe:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.PluggableExporter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "ownClassesOfPackage:",
category: 'exporting-accessing',
fn: function (package_){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(package_)._sortedClasses())._asSet();
return $1;
}, function($ctx1) {$ctx1.fill(self,"ownClassesOfPackage:",{package_:package_},smalltalk.PluggableExporter.klass)})},
args: ["package"],
source: "ownClassesOfPackage: package\x0a\x09\x22Export classes in dependency order.\x0a\x09Update (issue #171): Remove duplicates for export\x22\x0a\x09^package sortedClasses asSet",
messageSends: ["asSet", "sortedClasses"],
referencedClasses: []
}),
smalltalk.PluggableExporter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "amdNamespace",
category: '*Importer-Exporter',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (self.transport && self.transport.amdNamespace) || nil;
return self}, function($ctx1) {$ctx1.fill(self,"amdNamespace",{},smalltalk.Package)})},
args: [],
source: "amdNamespace\x0a<return (self.transport && self.transport.amdNamespace) || nil>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "amdNamespace:",
category: '*Importer-Exporter',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 

	if (!self.transport) { self.transport = { type: 'amd' }; }
	if (self.transport.type !== 'amd') { throw new Error('Package '+self._name()+' has transport type '+self.transport.type+', not "amd".'); }
	self.transport.amdNamespace = aString;;
return self}, function($ctx1) {$ctx1.fill(self,"amdNamespace:",{aString:aString},smalltalk.Package)})},
args: ["aString"],
source: "amdNamespace: aString\x0a<\x0a\x09if (!self.transport) { self.transport = { type: 'amd' }; }\x0a\x09if (self.transport.type !== 'amd') { throw new Error('Package '+self._name()+' has transport type '+self.transport.type+', not \x22amd\x22.'); }\x0a\x09self.transport.amdNamespace = aString;\x0a>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "commit",
category: '*Importer-Exporter',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._transport())._commit_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"commit",{},smalltalk.Package)})},
args: [],
source: "commit\x0a\x09^ self transport commit: self",
messageSends: ["commit:", "transport"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPathJs",
category: '*Importer-Exporter',
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
$1=_st($2)._at_ifAbsent_("commitPathJs",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._transport())._commitPathJsFor_(self);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"commitPathJs",{},smalltalk.Package)})},
args: [],
source: "commitPathJs\x0a\x09^ (extension ifNil: [ extension := #{} ]) at: #commitPathJs ifAbsent: [self transport commitPathJsFor: self]",
messageSends: ["at:ifAbsent:", "commitPathJsFor:", "transport", "ifNil:"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPathJs:",
category: '*Importer-Exporter',
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
args: ["aString"],
source: "commitPathJs: aString\x0a\x09^ (extension ifNil: [ extension := #{} ]) at: #commitPathJs put: aString",
messageSends: ["at:put:", "ifNil:"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPathSt",
category: '*Importer-Exporter',
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
$1=_st($2)._at_ifAbsent_("commitPathSt",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._transport())._commitPathStFor_(self);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"commitPathSt",{},smalltalk.Package)})},
args: [],
source: "commitPathSt\x0a\x09^ (extension ifNil: [ extension := #{} ]) at: #commitPathSt ifAbsent: [self transport commitPathStFor: self]",
messageSends: ["at:ifAbsent:", "commitPathStFor:", "transport", "ifNil:"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPathSt:",
category: '*Importer-Exporter',
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
args: ["aString"],
source: "commitPathSt: aString\x0a\x09^ (extension ifNil: [ extension := #{} ]) at: #commitPathSt put: aString",
messageSends: ["at:put:", "ifNil:"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "transport",
category: '*Importer-Exporter',
fn: function (){
var self=this;
function $PackageHandler(){return smalltalk.PackageHandler||(typeof PackageHandler=="undefined"?nil:PackageHandler)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($PackageHandler())._for_(self._transportType());
return $1;
}, function($ctx1) {$ctx1.fill(self,"transport",{},smalltalk.Package)})},
args: [],
source: "transport\x0a\x09^ PackageHandler for: self transportType",
messageSends: ["for:", "transportType"],
referencedClasses: ["PackageHandler"]
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "transportJson",
category: '*Importer-Exporter',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return JSON.stringify(self.transport || null);;
return self}, function($ctx1) {$ctx1.fill(self,"transportJson",{},smalltalk.Package)})},
args: [],
source: "transportJson\x0a\x09<return JSON.stringify(self.transport || null);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "transportType",
category: '*Importer-Exporter',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (self.transport && self.transport.type) || 'unknown';;
return self}, function($ctx1) {$ctx1.fill(self,"transportType",{},smalltalk.Package)})},
args: [],
source: "transportType\x0a\x09<return (self.transport && self.transport.type) || 'unknown';>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

});
