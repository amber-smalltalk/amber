(function(smalltalk,nil,_st){
smalltalk.addPackage('Importer-Exporter');

smalltalk.addClass('AbstractExporter', smalltalk.Object, [], 'Importer-Exporter');
smalltalk.AbstractExporter.comment="I am an abstract exporter for Amber source code.";
smalltalk.addMethod(
smalltalk.method({
selector: "chunkEscape:",
category: 'convenience',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aString)._replace_with_("!","!!"))._trimBoth();
return $1;
}, function($ctx1) {$ctx1.fill(self,"chunkEscape:",{aString:aString},smalltalk.AbstractExporter)})},
args: ["aString"],
source: "chunkEscape: aString\x0a\x09\x22Replace all occurrences of ! with !! and trim at both ends.\x22\x0a\x0a\x09^(aString replace: '!' with: '!!') trimBoth",
messageSends: ["trimBoth", "replace:with:"],
referencedClasses: []
}),
smalltalk.AbstractExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "classNameFor:",
category: 'convenience',
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
args: ["aClass"],
source: "classNameFor: aClass\x0a\x09^aClass isMetaclass\x0a\x09\x09ifTrue: [ aClass instanceClass name, ' class' ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09aClass isNil\x0a\x09\x09\x09\x09ifTrue: [ 'nil' ]\x0a\x09\x09\x09\x09ifFalse: [ aClass name ] ]",
messageSends: ["ifTrue:ifFalse:", ",", "name", "instanceClass", "isNil", "isMetaclass"],
referencedClasses: []
}),
smalltalk.AbstractExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "recipe",
category: 'fileOut',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"recipe",{},smalltalk.AbstractExporter)})},
args: [],
source: "recipe\x0a\x09\x22Recipe to export a given package.\x22\x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AbstractExporter);


smalltalk.AbstractExporter.klass.iVarNames = ['default'];
smalltalk.addMethod(
smalltalk.method({
selector: "default",
category: 'instance creation',
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
args: [],
source: "default\x0a\x09^ default ifNil: [ default := self new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.AbstractExporter.klass);


smalltalk.addClass('ChunkExporter', smalltalk.AbstractExporter, [], 'Importer-Exporter');
smalltalk.ChunkExporter.comment="I am an exporter dedicated to outputting Amber source code in the classic Smalltalk chunk format.\x0a\x0aI do not output any compiled code.";
smalltalk.addMethod(
smalltalk.method({
selector: "exportCategoryEpilogueOf:on:",
category: 'output',
fn: function (aCategory,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_(" !");
_st($1)._lf();
$2=_st($1)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportCategoryEpilogueOf:on:",{aCategory:aCategory,aStream:aStream},smalltalk.ChunkExporter)})},
args: ["aCategory", "aStream"],
source: "exportCategoryEpilogueOf: aCategory on: aStream\x0a\x09aStream nextPutAll: ' !'; lf; lf",
messageSends: ["nextPutAll:", "lf"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportCategoryPrologueOf:on:",
category: 'output',
fn: function (aCategory,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_("!".__comma(self._classNameFor_(_st(aCategory)._theClass())));
$2=_st($1)._nextPutAll_(_st(" methodsFor: '".__comma(_st(aCategory)._name())).__comma("'!"));
return self}, function($ctx1) {$ctx1.fill(self,"exportCategoryPrologueOf:on:",{aCategory:aCategory,aStream:aStream},smalltalk.ChunkExporter)})},
args: ["aCategory", "aStream"],
source: "exportCategoryPrologueOf: aCategory on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: '!', (self classNameFor: aCategory theClass);\x0a\x09\x09nextPutAll: ' methodsFor: ''', aCategory name, '''!'",
messageSends: ["nextPutAll:", ",", "classNameFor:", "theClass", "name"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportDefinitionOf:on:",
category: 'output',
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
args: ["aClass", "aStream"],
source: "exportDefinitionOf: aClass on: aStream\x0a\x09\x22Chunk format.\x22\x0a\x0a\x09aStream\x0a\x09\x09nextPutAll: (self classNameFor: aClass superclass);\x0a\x09\x09nextPutAll: ' subclass: #', (self classNameFor: aClass); lf;\x0a\x09\x09tab; nextPutAll: 'instanceVariableNames: '''.\x0a\x09aClass instanceVariableNames\x0a\x09\x09do: [:each | aStream nextPutAll: each]\x0a\x09\x09separatedBy: [aStream nextPutAll: ' '].\x0a\x09aStream\x0a\x09\x09nextPutAll: ''''; lf;\x0a\x09\x09tab; nextPutAll: 'package: ''', aClass category, '''!'; lf.\x0a\x09aClass comment notEmpty ifTrue: [\x0a\x09\x09aStream\x0a\x09\x09nextPutAll: '!', (self classNameFor: aClass), ' commentStamp!';lf;\x0a\x09\x09nextPutAll: (self chunkEscape: aClass comment), '!';lf].\x0a\x09aStream lf",
messageSends: ["nextPutAll:", "classNameFor:", "superclass", ",", "lf", "tab", "do:separatedBy:", "instanceVariableNames", "category", "ifTrue:", "chunkEscape:", "comment", "notEmpty"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportMetaDefinitionOf:on:",
category: 'output',
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
args: ["aClass", "aStream"],
source: "exportMetaDefinitionOf: aClass on: aStream\x0a\x0a\x09aClass class instanceVariableNames isEmpty ifFalse: [\x0a\x09\x09aStream\x0a\x09\x09\x09nextPutAll: (self classNameFor: aClass class);\x0a\x09\x09\x09nextPutAll: ' instanceVariableNames: '''.\x0a\x09\x09aClass class instanceVariableNames\x0a\x09\x09\x09do: [:each | aStream nextPutAll: each]\x0a\x09\x09\x09separatedBy: [aStream nextPutAll: ' '].\x0a\x09\x09aStream\x0a\x09\x09\x09nextPutAll: '''!'; lf; lf]",
messageSends: ["ifFalse:", "nextPutAll:", "classNameFor:", "class", "do:separatedBy:", "instanceVariableNames", "lf", "isEmpty"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportMethod:on:",
category: 'output',
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
args: ["aMethod", "aStream"],
source: "exportMethod: aMethod on: aStream\x0a\x09aStream\x0a\x09\x09lf; lf; nextPutAll: (self chunkEscape: aMethod source); lf;\x0a\x09\x09nextPutAll: '!'",
messageSends: ["lf", "nextPutAll:", "chunkEscape:", "source"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackageDefinitionOf:on:",
category: 'output',
fn: function (aPackage,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_(_st("Smalltalk current createPackage: '".__comma(_st(aPackage)._name())).__comma("'!"));
$2=_st($1)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportPackageDefinitionOf:on:",{aPackage:aPackage,aStream:aStream},smalltalk.ChunkExporter)})},
args: ["aPackage", "aStream"],
source: "exportPackageDefinitionOf: aPackage on: aStream\x0a\x09\x22Chunk format.\x22\x0a\x0a\x09aStream\x0a\x09\x09nextPutAll: 'Smalltalk current createPackage: ''', aPackage name, '''!';\x0a\x09\x09lf",
messageSends: ["nextPutAll:", ",", "name", "lf"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "extensionCategoriesOfPackage:",
category: 'accessing',
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
args: ["aPackage"],
source: "extensionCategoriesOfPackage: aPackage\x0a\x09\x22Issue #143: sort protocol alphabetically\x22\x0a\x0a\x09| name map result |\x0a\x09name := aPackage name.\x0a\x09result := OrderedCollection new.\x0a\x09(Package sortedClasses: Smalltalk current classes) do: [:each |\x0a\x09\x09{each. each class} do: [:aClass |\x0a\x09\x09\x09map := Dictionary new.\x0a\x09\x09\x09aClass protocolsDo: [:category :methods |\x0a\x09\x09\x09\x09(category match: '^\x5c*', name) ifTrue: [ map at: category put: methods ]].\x0a\x09\x09\x09result addAll: ((map keys sorted: [:a :b | a <= b ]) collect: [:category |\x0a\x09\x09\x09\x09MethodCategory name: category theClass: aClass methods: (map at: category)]) ]].\x0a\x09^result",
messageSends: ["name", "new", "do:", "protocolsDo:", "ifTrue:", "at:put:", "match:", ",", "addAll:", "collect:", "name:theClass:methods:", "at:", "sorted:", "<=", "keys", "class", "sortedClasses:", "classes", "current"],
referencedClasses: ["OrderedCollection", "Dictionary", "MethodCategory", "Smalltalk", "Package"]
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "methodsOfCategory:",
category: 'accessing',
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
args: ["aCategory"],
source: "methodsOfCategory: aCategory\x0a\x09\x22Issue #143: sort methods alphabetically\x22\x0a\x0a\x09^(aCategory methods) sorted: [:a :b | a selector <= b selector]",
messageSends: ["sorted:", "<=", "selector", "methods"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "ownCategoriesOfClass:",
category: 'accessing',
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
args: ["aClass"],
source: "ownCategoriesOfClass: aClass\x0a\x09\x22Answer the protocols of aClassthat are not package extensions\x22\x0a\x09\x0a\x09\x22Issue #143: sort protocol alphabetically\x22\x0a\x0a\x09| map |\x0a\x09map := Dictionary new.\x0a\x09aClass protocolsDo: [:category :methods |\x0a\x09\x09(category match: '^\x5c*') ifFalse: [ map at: category put: methods ]].\x0a\x09^(map keys sorted: [:a :b | a <= b ]) collect: [:category |\x0a\x09\x09MethodCategory name: category theClass: aClass methods: (map at: category) ]",
messageSends: ["new", "protocolsDo:", "ifFalse:", "at:put:", "match:", "collect:", "name:theClass:methods:", "at:", "sorted:", "<=", "keys"],
referencedClasses: ["Dictionary", "MethodCategory"]
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "ownCategoriesOfMetaClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._ownCategoriesOfClass_(_st(aClass)._class());
return $1;
}, function($ctx1) {$ctx1.fill(self,"ownCategoriesOfMetaClass:",{aClass:aClass},smalltalk.ChunkExporter)})},
args: ["aClass"],
source: "ownCategoriesOfMetaClass: aClass\x0a\x09\x22Issue #143: sort protocol alphabetically\x22\x0a\x0a\x09^self ownCategoriesOfClass: aClass class",
messageSends: ["ownCategoriesOfClass:", "class"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

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
}, function($ctx1) {$ctx1.fill(self,"recipe",{exportCategoryRecipe:exportCategoryRecipe},smalltalk.ChunkExporter)})},
args: [],
source: "recipe\x0a\x09\x22Export a given package.\x22\x0a\x0a\x09| exportCategoryRecipe |\x0a\x09exportCategoryRecipe := {\x0a\x09\x09self -> #exportCategoryPrologueOf:on:.\x0a\x09\x09{\x0a\x09\x09\x09self -> #methodsOfCategory:.\x0a\x09\x09\x09self -> #exportMethod:on: }.\x0a\x09\x09self -> #exportCategoryEpilogueOf:on: }.\x0a\x0a\x09^{\x0a\x09\x09self -> #exportPackageDefinitionOf:on:.\x0a\x09\x09{\x0a\x09\x09\x09PluggableExporter -> #ownClassesOfPackage:.\x0a\x09\x09\x09self -> #exportDefinitionOf:on:.\x0a\x09\x09\x09{ self -> #ownCategoriesOfClass: }, exportCategoryRecipe.\x0a\x09\x09\x09self -> #exportMetaDefinitionOf:on:.\x0a\x09\x09\x09{ self -> #ownCategoriesOfMetaClass: }, exportCategoryRecipe }.\x0a\x09\x09{ self -> #extensionCategoriesOfPackage: }, exportCategoryRecipe\x0a\x09}",
messageSends: ["->", ","],
referencedClasses: ["PluggableExporter"]
}),
smalltalk.ChunkExporter);



smalltalk.addClass('Exporter', smalltalk.AbstractExporter, [], 'Importer-Exporter');
smalltalk.Exporter.comment="I am responsible for outputting Amber code into a JavaScript string.\x0a\x0aThe generated output is enough to reconstruct the exported data, including Smalltalk source code and other metadata.\x0a\x0a## Use case\x0a\x0aI am typically used to save code outside of the Amber runtime (committing to disk, etc.).\x0a\x0a## API\x0a\x0aUse `#exportAll`, `#exportClass:` or `#exportPackage:` methods.";
smalltalk.addMethod(
smalltalk.method({
selector: "classNameFor:",
category: 'convenience',
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
args: ["aClass"],
source: "classNameFor: aClass\x0a\x09^aClass isMetaclass\x0a\x09\x09ifTrue: [ aClass instanceClass name, '.klass' ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09aClass isNil\x0a\x09\x09\x09\x09ifTrue: [ 'nil' ]\x0a\x09\x09\x09\x09ifFalse: [ aClass name ] ]",
messageSends: ["ifTrue:ifFalse:", ",", "name", "instanceClass", "isNil", "isMetaclass"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportDefinitionOf:on:",
category: 'output',
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
args: ["aClass", "aStream"],
source: "exportDefinitionOf: aClass on: aStream\x0a\x09aStream\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: 'smalltalk.addClass(';\x0a\x09\x09nextPutAll: '''', (self classNameFor: aClass), ''', ';\x0a\x09\x09nextPutAll: 'smalltalk.', (self classNameFor: aClass superclass);\x0a\x09\x09nextPutAll: ', ['.\x0a\x09aClass instanceVariableNames\x0a\x09\x09do: [:each | aStream nextPutAll: '''', each, '''']\x0a\x09\x09separatedBy: [aStream nextPutAll: ', '].\x0a\x09aStream\x0a\x09\x09nextPutAll: '], ''';\x0a\x09\x09nextPutAll: aClass category, '''';\x0a\x09\x09nextPutAll: ');'.\x0a\x09aClass comment notEmpty ifTrue: [\x0a\x09\x09aStream\x0a\x09\x09\x09lf;\x0a\x09\x09nextPutAll: 'smalltalk.';\x0a\x09\x09nextPutAll: (self classNameFor: aClass);\x0a\x09\x09nextPutAll: '.comment=';\x0a\x09\x09nextPutAll: aClass comment asJavascript;\x0a\x09\x09nextPutAll: ';'].\x0a\x09aStream lf",
messageSends: ["lf", "nextPutAll:", ",", "classNameFor:", "superclass", "do:separatedBy:", "instanceVariableNames", "category", "ifTrue:", "asJavascript", "comment", "notEmpty"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportMetaDefinitionOf:on:",
category: 'output',
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
args: ["aClass", "aStream"],
source: "exportMetaDefinitionOf: aClass on: aStream\x0a\x09aStream lf.\x0a\x09aClass class instanceVariableNames isEmpty ifFalse: [\x0a\x09\x09aStream\x0a\x09\x09nextPutAll: 'smalltalk.', (self classNameFor: aClass class);\x0a\x09\x09nextPutAll: '.iVarNames = ['.\x0a\x09\x09aClass class instanceVariableNames\x0a\x09\x09do: [:each | aStream nextPutAll: '''', each, '''']\x0a\x09\x09separatedBy: [aStream nextPutAll: ','].\x0a\x09\x09aStream nextPutAll: '];', String lf]",
messageSends: ["lf", "ifFalse:", "nextPutAll:", ",", "classNameFor:", "class", "do:separatedBy:", "instanceVariableNames", "isEmpty"],
referencedClasses: ["String"]
}),
smalltalk.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportMethod:on:",
category: 'output',
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
args: ["aMethod", "aStream"],
source: "exportMethod: aMethod on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: 'smalltalk.addMethod(';lf;\x0a\x09\x09\x22nextPutAll: aMethod selector asSelector asJavascript, ',';lf;\x22\x0a\x09\x09nextPutAll: 'smalltalk.method({';lf;\x0a\x09\x09nextPutAll: 'selector: ', aMethod selector asJavascript, ',';lf;\x0a\x09\x09nextPutAll: 'category: ''', aMethod category, ''',';lf;\x0a\x09\x09nextPutAll: 'fn: ', aMethod fn compiledSource, ',';lf;\x0a\x09\x09nextPutAll: 'args: ', aMethod arguments asJavascript, ','; lf;\x0a\x09\x09nextPutAll: 'source: ', aMethod source asJavascript, ',';lf;\x0a\x09\x09nextPutAll: 'messageSends: ', aMethod messageSends asJavascript, ',';lf;\x0a\x09\x09nextPutAll: 'referencedClasses: ', aMethod referencedClasses asJavascript.\x0a\x09aStream\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: '}),';lf;\x0a\x09\x09nextPutAll: 'smalltalk.', (self classNameFor: aMethod methodClass);\x0a\x09\x09nextPutAll: ');';lf;lf",
messageSends: ["nextPutAll:", "lf", ",", "asJavascript", "selector", "category", "compiledSource", "fn", "arguments", "source", "messageSends", "referencedClasses", "classNameFor:", "methodClass"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackageDefinitionOf:on:",
category: 'output',
fn: function (aPackage,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_("smalltalk.addPackage(");
_st($1)._nextPutAll_(_st("'".__comma(_st(aPackage)._name())).__comma("');"));
$2=_st($1)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportPackageDefinitionOf:on:",{aPackage:aPackage,aStream:aStream},smalltalk.Exporter)})},
args: ["aPackage", "aStream"],
source: "exportPackageDefinitionOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: 'smalltalk.addPackage(';\x0a\x09\x09nextPutAll: '''', aPackage name, ''');';\x0a\x09\x09lf",
messageSends: ["nextPutAll:", ",", "name", "lf"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackageEpilogueOf:on:",
category: 'output',
fn: function (aPackage,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_("})(global_smalltalk,global_nil,global__st);");
$2=_st($1)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportPackageEpilogueOf:on:",{aPackage:aPackage,aStream:aStream},smalltalk.Exporter)})},
args: ["aPackage", "aStream"],
source: "exportPackageEpilogueOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: '})(global_smalltalk,global_nil,global__st);';\x0a\x09\x09lf",
messageSends: ["nextPutAll:", "lf"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackagePrologueOf:on:",
category: 'output',
fn: function (aPackage,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_("(function(smalltalk,nil,_st){");
$2=_st($1)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportPackagePrologueOf:on:",{aPackage:aPackage,aStream:aStream},smalltalk.Exporter)})},
args: ["aPackage", "aStream"],
source: "exportPackagePrologueOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: '(function(smalltalk,nil,_st){';\x0a\x09\x09lf",
messageSends: ["nextPutAll:", "lf"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "extensionMethodsOfPackage:",
category: 'accessing',
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
args: ["aPackage"],
source: "extensionMethodsOfPackage: aPackage\x0a\x09\x22Issue #143: sort classes and methods alphabetically\x22\x0a\x0a\x09| name result |\x0a\x09name := aPackage name.\x0a\x09result := OrderedCollection new.\x0a\x09(Package sortedClasses: Smalltalk current classes) do: [:each |\x0a\x09\x09{each. each class} do: [:aClass |\x0a\x09\x09\x09result addAll: (((aClass methodDictionary values)\x0a\x09\x09\x09\x09sorted: [:a :b | a selector <= b selector])\x0a\x09\x09\x09\x09select: [:method | method category match: '^\x5c*', name]) ]].\x0a\x09^result",
messageSends: ["name", "new", "do:", "addAll:", "select:", "match:", ",", "category", "sorted:", "<=", "selector", "values", "methodDictionary", "class", "sortedClasses:", "classes", "current"],
referencedClasses: ["OrderedCollection", "Smalltalk", "Package"]
}),
smalltalk.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "ownMethodsOfClass:",
category: 'accessing',
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
args: ["aClass"],
source: "ownMethodsOfClass: aClass\x0a\x09\x22Issue #143: sort methods alphabetically\x22\x0a\x0a\x09^((aClass methodDictionary values) sorted: [:a :b | a selector <= b selector])\x0a\x09\x09reject: [:each | (each category match: '^\x5c*')]",
messageSends: ["reject:", "match:", "category", "sorted:", "<=", "selector", "values", "methodDictionary"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "ownMethodsOfMetaClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._ownMethodsOfClass_(_st(aClass)._class());
return $1;
}, function($ctx1) {$ctx1.fill(self,"ownMethodsOfMetaClass:",{aClass:aClass},smalltalk.Exporter)})},
args: ["aClass"],
source: "ownMethodsOfMetaClass: aClass\x0a\x09\x22Issue #143: sort methods alphabetically\x22\x0a\x0a\x09^self ownMethodsOfClass: aClass class",
messageSends: ["ownMethodsOfClass:", "class"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "recipe",
category: 'fileOut',
fn: function (){
var self=this;
function $PluggableExporter(){return smalltalk.PluggableExporter||(typeof PluggableExporter=="undefined"?nil:PluggableExporter)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[self.__minus_gt("exportPackagePrologueOf:on:"),self.__minus_gt("exportPackageDefinitionOf:on:"),[_st($PluggableExporter()).__minus_gt("ownClassesOfPackage:"),self.__minus_gt("exportDefinitionOf:on:"),[self.__minus_gt("ownMethodsOfClass:"),self.__minus_gt("exportMethod:on:")],self.__minus_gt("exportMetaDefinitionOf:on:"),[self.__minus_gt("ownMethodsOfMetaClass:"),self.__minus_gt("exportMethod:on:")]],[self.__minus_gt("extensionMethodsOfPackage:"),self.__minus_gt("exportMethod:on:")],self.__minus_gt("exportPackageEpilogueOf:on:")];
return $1;
}, function($ctx1) {$ctx1.fill(self,"recipe",{},smalltalk.Exporter)})},
args: [],
source: "recipe\x0a\x09\x22Export a given package.\x22\x0a\x0a\x09^{\x0a\x09\x09self -> #exportPackagePrologueOf:on:.\x0a\x09\x09self -> #exportPackageDefinitionOf:on:.\x0a\x09\x09{\x0a\x09\x09\x09PluggableExporter -> #ownClassesOfPackage:.\x0a\x09\x09\x09self -> #exportDefinitionOf:on:.\x0a\x09\x09\x09{\x0a\x09\x09\x09\x09self -> #ownMethodsOfClass:.\x0a\x09\x09\x09\x09self -> #exportMethod:on: }.\x0a\x09\x09\x09self -> #exportMetaDefinitionOf:on:.\x0a\x09\x09\x09{\x0a\x09\x09\x09\x09self -> #ownMethodsOfMetaClass:.\x0a\x09\x09\x09\x09self -> #exportMethod:on: } }.\x0a\x09\x09{\x0a\x09\x09\x09self -> #extensionMethodsOfPackage:.\x0a\x09\x09\x09self -> #exportMethod:on: }.\x0a\x09\x09self -> #exportPackageEpilogueOf:on:\x0a\x09}",
messageSends: ["->"],
referencedClasses: ["PluggableExporter"]
}),
smalltalk.Exporter);



smalltalk.addClass('StrippedExporter', smalltalk.Exporter, [], 'Importer-Exporter');
smalltalk.StrippedExporter.comment="I export Amber code into a JavaScript string, but without any optional associated data like the Amber source code.";
smalltalk.addMethod(
smalltalk.method({
selector: "exportDefinitionOf:on:",
category: 'output',
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
args: ["aClass", "aStream"],
source: "exportDefinitionOf: aClass on: aStream\x0a\x09aStream\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: 'smalltalk.addClass(';\x0a\x09\x09nextPutAll: '''', (self classNameFor: aClass), ''', ';\x0a\x09\x09nextPutAll: 'smalltalk.', (self classNameFor: aClass superclass);\x0a\x09\x09nextPutAll: ', ['.\x0a\x09aClass instanceVariableNames\x0a\x09\x09do: [:each | aStream nextPutAll: '''', each, '''']\x0a\x09\x09separatedBy: [aStream nextPutAll: ', '].\x0a\x09aStream\x0a\x09\x09nextPutAll: '], ''';\x0a\x09\x09nextPutAll: aClass category, '''';\x0a\x09\x09nextPutAll: ');'.\x0a\x09aStream lf",
messageSends: ["lf", "nextPutAll:", ",", "classNameFor:", "superclass", "do:separatedBy:", "instanceVariableNames", "category"],
referencedClasses: []
}),
smalltalk.StrippedExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportMethod:on:",
category: 'output',
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
args: ["aMethod", "aStream"],
source: "exportMethod: aMethod on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: 'smalltalk.addMethod(';lf;\x0a\x09\x09\x22nextPutAll: aMethod selector asSelector asJavascript, ',';lf;\x22\x0a\x09\x09nextPutAll: 'smalltalk.method({';lf;\x0a\x09\x09nextPutAll: 'selector: ', aMethod selector asJavascript, ',';lf;\x0a\x09\x09nextPutAll: 'fn: ', aMethod fn compiledSource, ',';lf;\x0a\x09\x09nextPutAll: 'messageSends: ', aMethod messageSends asJavascript;\x0a\x09\x09nextPutAll: '}),';lf;\x0a\x09\x09nextPutAll: 'smalltalk.', (self classNameFor: aMethod methodClass);\x0a\x09\x09nextPutAll: ');';lf;lf",
messageSends: ["nextPutAll:", "lf", ",", "asJavascript", "selector", "compiledSource", "fn", "messageSends", "classNameFor:", "methodClass"],
referencedClasses: []
}),
smalltalk.StrippedExporter);



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


smalltalk.addClass('ExportRecipeInterpreter', smalltalk.Object, [], 'Importer-Exporter');
smalltalk.ExportRecipeInterpreter.comment="I am an interpreter for export recipes.\x0a\x0a## Recipe format\x0a\x0aRecipe is an array, which can contain two kinds of elements:\x0a\x0a - an assocation where the key is the receiver and the value is a two-arguments selector\x0a    In this case, `receiver perform: selector withArguments: { data. stream }` is called.\x0a\x09This essentially defines one step of export process.\x0a\x09The key (eg. receiver) is presumed to be some kind of 'repository' of the exporting methods\x0a\x09that just format appropriate aspect of data into a stream; like a class or a singleton,\x0a\x09so that the recipe itself can be decoupled from data.\x0a\x0a - a subarray, where first element is special and the rest is recursive recipe.\x0a\x0a    `subarray first` must be an association similar to one above,\x0a\x09with key being the 'repository' receiver, but value is one-arg selector.\x0a\x09In this case, `receiver perform: selector withArguments: { data }` should create a collection.\x0a\x09Then, the sub-recipe (`subarray allButFirst`) is applied to every element of a collection, eg.\x0a\x09  collection do: [ :each | self export: each using: sa allButFirst on: stream ]";
smalltalk.addMethod(
smalltalk.method({
selector: "interpret:for:on:",
category: 'interpreting',
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
args: ["aRecipe", "anObject", "aStream"],
source: "interpret: aRecipe for: anObject on: aStream\x0a\x09| recipeStream |\x0a\x09\x0a\x09recipeStream := aRecipe readStream.\x0a\x09\x0a\x09[ recipeStream atEnd ] whileFalse: [\x0a\x09\x09self \x0a\x09\x09\x09interpretStep: recipeStream next\x0a\x09\x09\x09for: anObject\x0a\x09\x09\x09on: aStream ]",
messageSends: ["readStream", "whileFalse:", "interpretStep:for:on:", "next", "atEnd"],
referencedClasses: []
}),
smalltalk.ExportRecipeInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretStep:for:on:",
category: 'interpreting',
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
args: ["aRecipeStep", "anObject", "aStream"],
source: "interpretStep: aRecipeStep for: anObject on: aStream\x0a\x09aRecipeStep value == aRecipeStep ifTrue: [ \x0a\x09\x09^ self interpretSubRecipe: aRecipeStep for: anObject on: aStream ].\x0a\x09\x09\x09\x0a\x09aRecipeStep key perform: aRecipeStep value withArguments: { anObject. aStream }",
messageSends: ["ifTrue:", "interpretSubRecipe:for:on:", "==", "value", "perform:withArguments:", "key"],
referencedClasses: []
}),
smalltalk.ExportRecipeInterpreter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpretSubRecipe:for:on:",
category: 'interpreting',
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
args: ["aRecipe", "anObject", "aStream"],
source: "interpretSubRecipe: aRecipe for: anObject on: aStream\x0a\x09| selection |\x0a\x09selection := aRecipe first key \x0a\x09\x09perform: aRecipe first value \x0a\x09\x09withArguments: { anObject }.\x0a\x09selection do: [ :each |\x09\x0a\x09\x09self interpret: aRecipe allButFirst for: each on: aStream ]",
messageSends: ["perform:withArguments:", "value", "first", "key", "do:", "interpret:for:on:", "allButFirst"],
referencedClasses: []
}),
smalltalk.ExportRecipeInterpreter);



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



smalltalk.addClass('MethodCategory', smalltalk.Object, ['methods', 'name', 'theClass'], 'Importer-Exporter');
smalltalk.MethodCategory.comment="I am an abstraction for a method category in a class / metaclass.\x0a\x0aI know of my class, name and methods.\x0aI am used when exporting a package.";
smalltalk.addMethod(
smalltalk.method({
selector: "methods",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@methods"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"methods",{},smalltalk.MethodCategory)})},
args: [],
source: "methods\x0a\x09^methods",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodCategory);

smalltalk.addMethod(
smalltalk.method({
selector: "methods:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@methods"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"methods:",{aCollection:aCollection},smalltalk.MethodCategory)})},
args: ["aCollection"],
source: "methods: aCollection\x0a\x09methods := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodCategory);

smalltalk.addMethod(
smalltalk.method({
selector: "name",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@name"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"name",{},smalltalk.MethodCategory)})},
args: [],
source: "name\x0a\x09^name",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodCategory);

smalltalk.addMethod(
smalltalk.method({
selector: "name:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@name"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"name:",{aString:aString},smalltalk.MethodCategory)})},
args: ["aString"],
source: "name: aString\x0a\x09name := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodCategory);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@theClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.MethodCategory)})},
args: [],
source: "theClass\x0a\x09^theClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodCategory);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass},smalltalk.MethodCategory)})},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodCategory);


smalltalk.addMethod(
smalltalk.method({
selector: "name:theClass:methods:",
category: 'not yet classified',
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
args: ["aString", "aClass", "anArray"],
source: "name: aString theClass: aClass methods: anArray\x0a\x09^self new\x0a\x09\x09name: aString;\x0a\x09\x09theClass: aClass;\x0a\x09\x09methods: anArray;\x0a\x09\x09yourself",
messageSends: ["name:", "new", "theClass:", "methods:", "yourself"],
referencedClasses: []
}),
smalltalk.MethodCategory.klass);


smalltalk.addClass('PackageHandler', smalltalk.InterfacingObject, [], 'Importer-Exporter');
smalltalk.PackageHandler.comment="I am responsible for handling package loading and committing.\x0a\x0aI should not be used directly. Instead, use the corresponding `Package` methods.";
smalltalk.addMethod(
smalltalk.method({
selector: "ajaxPutAt:data:",
category: 'private',
fn: function (aURL,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._ajax_(smalltalk.HashedCollection._from_(["url".__minus_gt(aURL),"type".__minus_gt("PUT"),"data".__minus_gt(aString),"contentType".__minus_gt("text/plain;charset=UTF-8"),"error".__minus_gt((function(xhr){
return smalltalk.withContext(function($ctx2) {
return self._error_(_st(_st(_st("Commiting ".__comma(aURL)).__comma(" failed with reason: \x22")).__comma(_st(xhr)._responseText())).__comma("\x22"));
}, function($ctx2) {$ctx2.fillBlock({xhr:xhr},$ctx1)})}))]));
return self}, function($ctx1) {$ctx1.fill(self,"ajaxPutAt:data:",{aURL:aURL,aString:aString},smalltalk.PackageHandler)})},
args: ["aURL", "aString"],
source: "ajaxPutAt: aURL data: aString\x0a\x09self\x0a\x09\x09ajax: #{\x0a\x09\x09\x09'url' -> aURL.\x0a\x09\x09\x09'type' -> 'PUT'.\x0a\x09\x09\x09'data' -> aString.\x0a\x09\x09\x09'contentType' -> 'text/plain;charset=UTF-8'.\x0a\x09\x09\x09'error' -> [ :xhr | self error: 'Commiting ' , aURL , ' failed with reason: \x22' , (xhr responseText) , '\x22'] }",
messageSends: ["ajax:", "->", "error:", ",", "responseText"],
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
return _st(_st($PluggableExporter())._forRecipe_(_st(commitStrategy)._key()))._exportPackage_on_(aPackage,stream);
}, function($ctx3) {$ctx3.fillBlock({stream:stream},$ctx2)})}));
fileContents;
return self._ajaxPutAt_data_(_st(commitStrategy)._value(),fileContents);
}, function($ctx2) {$ctx2.fillBlock({commitStrategyFactory:commitStrategyFactory,fileContents:fileContents,commitStrategy:commitStrategy},$ctx1)})}),"Committing package ".__comma(_st(aPackage)._name()));
return self}, function($ctx1) {$ctx1.fill(self,"commit:",{aPackage:aPackage},smalltalk.PackageHandler)})},
args: ["aPackage"],
source: "commit: aPackage\x0a\x09self commitChannels\x0a\x09\x09do: [ :commitStrategyFactory || fileContents commitStrategy |\x0a\x09\x09\x09commitStrategy := commitStrategyFactory value: aPackage.\x0a\x09\x09\x09fileContents := String streamContents: [ :stream |\x0a\x09\x09\x09\x09(PluggableExporter forRecipe: commitStrategy key) exportPackage: aPackage on: stream ].\x0a\x09\x09\x09self ajaxPutAt: commitStrategy value data: fileContents ]\x0a\x09\x09displayingProgress: 'Committing package ', aPackage name",
messageSends: ["do:displayingProgress:", "value:", "streamContents:", "exportPackage:on:", "forRecipe:", "key", "ajaxPutAt:data:", "value", ",", "name", "commitChannels"],
referencedClasses: ["PluggableExporter", "String"]
}),
smalltalk.PackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "commitChannels",
category: 'committing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"commitChannels",{},smalltalk.PackageHandler)})},
args: [],
source: "commitChannels\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
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
args: [],
source: "commitChannels\x0a\x09^{ \x0a\x09\x09[ :pkg | Exporter default recipe -> (pkg commitPathJs, '/', pkg name, '.js') ].\x0a\x09\x09[ :pkg | StrippedExporter default recipe -> (pkg commitPathJs, '/', pkg name, '.deploy.js') ].\x0a\x09\x09[ :pkg | ChunkExporter default recipe -> (pkg commitPathSt, '/', pkg name, '.st') ]\x0a\x09}",
messageSends: ["->", ",", "name", "commitPathJs", "recipe", "default", "commitPathSt"],
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
args: ["packageName", "aString"],
source: "loadPackage: packageName prefix: aString\x0a\x09| url |\x0a\x09url := '/', aString, '/js/', packageName, '.js'.\x0a\x09self\x0a\x09\x09ajax: #{\x0a\x09\x09\x09'url' -> url.\x0a\x09\x09\x09'type' -> 'GET'.\x0a\x09\x09\x09'dataType' -> 'script'.\x0a\x09\x09\x09'complete' -> [ :jqXHR :textStatus |\x0a\x09\x09\x09\x09jqXHR readyState = 4\x0a\x09\x09\x09\x09\x09ifTrue: [ self setupPackageNamed: packageName prefix: aString ] ].\x0a\x09\x09\x09'error' -> [ self alert: 'Could not load package at: ', url ]\x0a\x09\x09}",
messageSends: [",", "ajax:", "->", "ifTrue:", "setupPackageNamed:prefix:", "=", "readyState", "alert:"],
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
smalltalk.PluggableExporter.comment="I am an engine for exporting structured data on a Stream.\x0a\x0aMy instances are created using\x0a  PluggableExporter newUsing: recipe,\x0awhere recipe is structured description of the exporting algorithm.\x0a\x0aThe actual exporting is done by interpreting the recipe using a `RecipeInterpreter`.\x0a\x0a\x0aI am used to export amber packages, so I have a convenience method\x0a`exportPackage: aPackage on: aStream`\x0awhich exports `aPackage` using the `recipe`\x0a(it is otherwise no special, so it may be renamed to export:on:)";
smalltalk.addMethod(
smalltalk.method({
selector: "exportAllPackages",
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
}, function($ctx1) {$ctx1.fill(self,"exportAllPackages",{},smalltalk.PluggableExporter)})},
args: [],
source: "exportAllPackages\x0a\x09\x22Export all packages in the system.\x22\x0a\x0a\x09^String streamContents: [:stream |\x0a\x09\x09Smalltalk current packages do: [:pkg |\x0a\x09\x09self exportPackage: pkg on: stream]]",
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
_st(self._interpreter())._interpret_for_on_(self._recipe(),aPackage,aStream);
return self}, function($ctx1) {$ctx1.fill(self,"exportPackage:on:",{aPackage:aPackage,aStream:aStream},smalltalk.PluggableExporter)})},
args: ["aPackage", "aStream"],
source: "exportPackage: aPackage on: aStream\x0a\x09self interpreter interpret: self recipe for: aPackage on: aStream",
messageSends: ["interpret:for:on:", "recipe", "interpreter"],
referencedClasses: []
}),
smalltalk.PluggableExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "interpreter",
category: 'accessing',
fn: function (){
var self=this;
function $ExportRecipeInterpreter(){return smalltalk.ExportRecipeInterpreter||(typeof ExportRecipeInterpreter=="undefined"?nil:ExportRecipeInterpreter)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($ExportRecipeInterpreter())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpreter",{},smalltalk.PluggableExporter)})},
args: [],
source: "interpreter\x0a\x09^ ExportRecipeInterpreter new",
messageSends: ["new"],
referencedClasses: ["ExportRecipeInterpreter"]
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
selector: "forRecipe:",
category: 'instance creation',
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
args: ["aRecipe"],
source: "forRecipe: aRecipe\x0a\x09^self new recipe: aRecipe; yourself",
messageSends: ["recipe:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.PluggableExporter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "ownClassesOfPackage:",
category: 'convenience',
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
$1=_st($2)._at_ifAbsentPut_("commitPathJs",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._transport())._commitPathJsFor_(self);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"commitPathJs",{},smalltalk.Package)})},
args: [],
source: "commitPathJs\x0a\x09^ (extension ifNil: [ extension := #{} ]) at: #commitPathJs ifAbsentPut: [self transport commitPathJsFor: self]",
messageSends: ["at:ifAbsentPut:", "commitPathJsFor:", "transport", "ifNil:"],
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
$1=_st($2)._at_ifAbsentPut_("commitPathSt",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._transport())._commitPathStFor_(self);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"commitPathSt",{},smalltalk.Package)})},
args: [],
source: "commitPathSt\x0a\x09^ (extension ifNil: [ extension := #{} ]) at: #commitPathSt ifAbsentPut: [self transport commitPathStFor: self]",
messageSends: ["at:ifAbsentPut:", "commitPathStFor:", "transport", "ifNil:"],
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

})(global_smalltalk,global_nil,global__st);
