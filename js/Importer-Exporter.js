define("amber_core/Importer-Exporter", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects", "amber_core/Kernel-Infrastructure"], function(smalltalk,nil,_st){
smalltalk.addPackage('Importer-Exporter');
smalltalk.packages["Importer-Exporter"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('AbstractExporter', smalltalk.Object, [], 'Importer-Exporter');
smalltalk.AbstractExporter.comment="I am an abstract exporter for Amber source code.\x0a\x0a## API\x0a\x0aUse `#exportPackage:on:` to export a given package on a Stream.";
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
source: "chunkEscape: aString\x0a\x09\x22Replace all occurrences of ! with !! and trim at both ends.\x22\x0a\x0a\x09^ (aString replace: '!' with: '!!') trimBoth",
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
var $2,$3,$4,$1;
$2=_st(aClass)._isMetaclass();
if(smalltalk.assert($2)){
$3=_st(_st(aClass)._instanceClass())._name();
$ctx1.sendIdx["name"]=1;
$1=_st($3).__comma(" class");
} else {
$4=_st(aClass)._isNil();
if(smalltalk.assert($4)){
$1="nil";
} else {
$1=_st(aClass)._name();
};
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"classNameFor:",{aClass:aClass},smalltalk.AbstractExporter)})},
args: ["aClass"],
source: "classNameFor: aClass\x0a\x09^ aClass isMetaclass\x0a\x09\x09ifTrue: [ aClass instanceClass name, ' class' ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09aClass isNil\x0a\x09\x09\x09\x09ifTrue: [ 'nil' ]\x0a\x09\x09\x09\x09ifFalse: [ aClass name ] ]",
messageSends: ["ifTrue:ifFalse:", "isMetaclass", ",", "name", "instanceClass", "isNil"],
referencedClasses: []
}),
smalltalk.AbstractExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackage:on:",
category: 'output',
fn: function (aPackage,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"exportPackage:on:",{aPackage:aPackage,aStream:aStream},smalltalk.AbstractExporter)})},
args: ["aPackage", "aStream"],
source: "exportPackage: aPackage on: aStream\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AbstractExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "extensionMethodsOfPackage:",
category: 'accessing',
fn: function (aPackage){
var self=this;
var result;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
result=_st($OrderedCollection())._new();
_st(self._extensionProtocolsOfPackage_(aPackage))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(result)._addAll_(_st(each)._methods());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$1=result;
return $1;
}, function($ctx1) {$ctx1.fill(self,"extensionMethodsOfPackage:",{aPackage:aPackage,result:result},smalltalk.AbstractExporter)})},
args: ["aPackage"],
source: "extensionMethodsOfPackage: aPackage\x0a\x09| result |\x0a\x09\x0a\x09result := OrderedCollection new.\x0a\x09\x0a\x09(self extensionProtocolsOfPackage: aPackage) do: [ :each |\x0a\x09\x09result addAll: each methods ].\x0a\x09\x09\x0a\x09^ result",
messageSends: ["new", "do:", "extensionProtocolsOfPackage:", "addAll:", "methods"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.AbstractExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "extensionProtocolsOfPackage:",
category: 'accessing',
fn: function (aPackage){
var self=this;
var extensionName,result;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $ExportMethodProtocol(){return smalltalk.ExportMethodProtocol||(typeof ExportMethodProtocol=="undefined"?nil:ExportMethodProtocol)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
extensionName="*".__comma(_st(aPackage)._name());
result=_st($OrderedCollection())._new();
_st(_st(_st($Smalltalk())._current())._classes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st([each,_st(each)._class()])._do_((function(behavior){
return smalltalk.withContext(function($ctx3) {
$1=_st(_st(behavior)._protocols())._includes_(extensionName);
if(smalltalk.assert($1)){
return _st(result)._add_(_st($ExportMethodProtocol())._name_theClass_(extensionName,behavior));
};
}, function($ctx3) {$ctx3.fillBlock({behavior:behavior},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$ctx1.sendIdx["do:"]=1;
$2=result;
return $2;
}, function($ctx1) {$ctx1.fill(self,"extensionProtocolsOfPackage:",{aPackage:aPackage,extensionName:extensionName,result:result},smalltalk.AbstractExporter)})},
args: ["aPackage"],
source: "extensionProtocolsOfPackage: aPackage\x0a\x09| extensionName result |\x0a\x09\x0a\x09extensionName := '*', aPackage name.\x0a\x09result := OrderedCollection new.\x0a\x09\x0a\x09\x22The classes must be loaded since it is extensions only.\x0a\x09Therefore sorting (dependency resolution) does not matter here.\x0a\x09Not sorting improves the speed by a number of magnitude.\x22\x0a\x09\x0a\x09Smalltalk current classes do: [ :each |\x0a\x09\x09{each. each class} do: [ :behavior |\x0a\x09\x09\x09(behavior protocols includes: extensionName) ifTrue: [\x0a\x09\x09\x09\x09result add: (ExportMethodProtocol name: extensionName theClass: behavior) ] ] ].\x0a\x0a\x09^ result",
messageSends: [",", "name", "new", "do:", "classes", "current", "class", "ifTrue:", "includes:", "protocols", "add:", "name:theClass:"],
referencedClasses: ["OrderedCollection", "Smalltalk", "ExportMethodProtocol"]
}),
smalltalk.AbstractExporter);



smalltalk.addClass('ChunkExporter', smalltalk.AbstractExporter, [], 'Importer-Exporter');
smalltalk.ChunkExporter.comment="I am an exporter dedicated to outputting Amber source code in the classic Smalltalk chunk format.\x0a\x0aI do not output any compiled code.";
smalltalk.addMethod(
smalltalk.method({
selector: "exportCategoryEpilogueOf:on:",
category: 'output',
fn: function (aCategory,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aStream)._nextPutAll_(" !");
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=1;
$1=_st(aStream)._lf();
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
var $1,$3,$2;
$1="!".__comma(self._classNameFor_(_st(aCategory)._theClass()));
$ctx1.sendIdx[","]=1;
_st(aStream)._nextPutAll_($1);
$ctx1.sendIdx["nextPutAll:"]=1;
$3=_st(" methodsFor: '".__comma(_st(aCategory)._name())).__comma("'!");
$ctx1.sendIdx[","]=2;
$2=_st(aStream)._nextPutAll_($3);
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
var $1,$3,$2,$4,$6,$5,$7,$9,$8,$11,$10,$12;
$1=self._classNameFor_(_st(aClass)._superclass());
$ctx1.sendIdx["classNameFor:"]=1;
_st(aStream)._nextPutAll_($1);
$ctx1.sendIdx["nextPutAll:"]=1;
$3=self._classNameFor_(aClass);
$ctx1.sendIdx["classNameFor:"]=2;
$2=" subclass: #".__comma($3);
$ctx1.sendIdx[","]=1;
_st(aStream)._nextPutAll_($2);
$ctx1.sendIdx["nextPutAll:"]=2;
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=1;
_st(aStream)._tab();
$ctx1.sendIdx["tab"]=1;
$4=_st(aStream)._nextPutAll_("instanceVariableNames: '");
$ctx1.sendIdx["nextPutAll:"]=3;
_st(_st(aClass)._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._nextPutAll_(each);
$ctx2.sendIdx["nextPutAll:"]=4;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._nextPutAll_(" ");
$ctx2.sendIdx["nextPutAll:"]=5;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
_st(aStream)._nextPutAll_("'");
$ctx1.sendIdx["nextPutAll:"]=6;
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=2;
_st(aStream)._tab();
$6="package: '".__comma(_st(aClass)._category());
$ctx1.sendIdx[","]=3;
$5=_st($6).__comma("'!");
$ctx1.sendIdx[","]=2;
_st(aStream)._nextPutAll_($5);
$ctx1.sendIdx["nextPutAll:"]=7;
$7=_st(aStream)._lf();
$ctx1.sendIdx["lf"]=3;
$9=_st(aClass)._comment();
$ctx1.sendIdx["comment"]=1;
$8=_st($9)._notEmpty();
if(smalltalk.assert($8)){
$11="!".__comma(self._classNameFor_(aClass));
$ctx1.sendIdx[","]=5;
$10=_st($11).__comma(" commentStamp!");
$ctx1.sendIdx[","]=4;
_st(aStream)._nextPutAll_($10);
$ctx1.sendIdx["nextPutAll:"]=8;
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=4;
_st(aStream)._nextPutAll_(_st(self._chunkEscape_(_st(aClass)._comment())).__comma("!"));
$12=_st(aStream)._lf();
$ctx1.sendIdx["lf"]=5;
$12;
};
_st(aStream)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportDefinitionOf:on:",{aClass:aClass,aStream:aStream},smalltalk.ChunkExporter)})},
args: ["aClass", "aStream"],
source: "exportDefinitionOf: aClass on: aStream\x0a\x09\x22Chunk format.\x22\x0a\x0a\x09aStream\x0a\x09\x09nextPutAll: (self classNameFor: aClass superclass);\x0a\x09\x09nextPutAll: ' subclass: #', (self classNameFor: aClass); lf;\x0a\x09\x09tab; nextPutAll: 'instanceVariableNames: '''.\x0a\x09aClass instanceVariableNames\x0a\x09\x09do: [ :each | aStream nextPutAll: each ]\x0a\x09\x09separatedBy: [ aStream nextPutAll: ' ' ].\x0a\x09aStream\x0a\x09\x09nextPutAll: ''''; lf;\x0a\x09\x09tab; nextPutAll: 'package: ''', aClass category, '''!'; lf.\x0a\x09aClass comment notEmpty ifTrue: [\x0a\x09\x09aStream\x0a\x09\x09nextPutAll: '!', (self classNameFor: aClass), ' commentStamp!';lf;\x0a\x09\x09nextPutAll: (self chunkEscape: aClass comment), '!';lf ].\x0a\x09aStream lf",
messageSends: ["nextPutAll:", "classNameFor:", "superclass", ",", "lf", "tab", "do:separatedBy:", "instanceVariableNames", "category", "ifTrue:", "notEmpty", "comment", "chunkEscape:"],
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
var $3,$2,$1,$5,$4,$6,$7;
$3=_st(aClass)._class();
$ctx1.sendIdx["class"]=1;
$2=_st($3)._instanceVariableNames();
$ctx1.sendIdx["instanceVariableNames"]=1;
$1=_st($2)._isEmpty();
if(! smalltalk.assert($1)){
$5=_st(aClass)._class();
$ctx1.sendIdx["class"]=2;
$4=self._classNameFor_($5);
_st(aStream)._nextPutAll_($4);
$ctx1.sendIdx["nextPutAll:"]=1;
$6=_st(aStream)._nextPutAll_(" instanceVariableNames: '");
$ctx1.sendIdx["nextPutAll:"]=2;
$6;
_st(_st(_st(aClass)._class())._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._nextPutAll_(each);
$ctx2.sendIdx["nextPutAll:"]=3;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._nextPutAll_(" ");
$ctx2.sendIdx["nextPutAll:"]=4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
_st(aStream)._nextPutAll_("'!");
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=1;
$7=_st(aStream)._lf();
$7;
};
return self}, function($ctx1) {$ctx1.fill(self,"exportMetaDefinitionOf:on:",{aClass:aClass,aStream:aStream},smalltalk.ChunkExporter)})},
args: ["aClass", "aStream"],
source: "exportMetaDefinitionOf: aClass on: aStream\x0a\x0a\x09aClass class instanceVariableNames isEmpty ifFalse: [\x0a\x09\x09aStream\x0a\x09\x09\x09nextPutAll: (self classNameFor: aClass class);\x0a\x09\x09\x09nextPutAll: ' instanceVariableNames: '''.\x0a\x09\x09aClass class instanceVariableNames\x0a\x09\x09\x09do: [ :each | aStream nextPutAll: each ]\x0a\x09\x09\x09separatedBy: [ aStream nextPutAll: ' ' ].\x0a\x09\x09aStream\x0a\x09\x09\x09nextPutAll: '''!'; lf; lf ]",
messageSends: ["ifFalse:", "isEmpty", "instanceVariableNames", "class", "nextPutAll:", "classNameFor:", "do:separatedBy:", "lf"],
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
var $1;
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=1;
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=2;
_st(aStream)._nextPutAll_(self._chunkEscape_(_st(aMethod)._source()));
$ctx1.sendIdx["nextPutAll:"]=1;
_st(aStream)._lf();
$1=_st(aStream)._nextPutAll_("!");
return self}, function($ctx1) {$ctx1.fill(self,"exportMethod:on:",{aMethod:aMethod,aStream:aStream},smalltalk.ChunkExporter)})},
args: ["aMethod", "aStream"],
source: "exportMethod: aMethod on: aStream\x0a\x09aStream\x0a\x09\x09lf; lf; nextPutAll: (self chunkEscape: aMethod source); lf;\x0a\x09\x09nextPutAll: '!'",
messageSends: ["lf", "nextPutAll:", "chunkEscape:", "source"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackage:on:",
category: 'output',
fn: function (aPackage,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._exportPackageDefinitionOf_on_(aPackage,aStream);
_st(_st(aPackage)._sortedClasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
self._exportDefinitionOf_on_(each,aStream);
$1=self._ownMethodProtocolsOfClass_(each);
$ctx2.sendIdx["ownMethodProtocolsOfClass:"]=1;
self._exportProtocols_on_($1,aStream);
$ctx2.sendIdx["exportProtocols:on:"]=1;
self._exportMetaDefinitionOf_on_(each,aStream);
return self._exportProtocols_on_(self._ownMethodProtocolsOfClass_(_st(each)._class()),aStream);
$ctx2.sendIdx["exportProtocols:on:"]=2;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
self._exportProtocols_on_(self._extensionProtocolsOfPackage_(aPackage),aStream);
return self}, function($ctx1) {$ctx1.fill(self,"exportPackage:on:",{aPackage:aPackage,aStream:aStream},smalltalk.ChunkExporter)})},
args: ["aPackage", "aStream"],
source: "exportPackage: aPackage on: aStream\x0a\x0a\x09self exportPackageDefinitionOf: aPackage on: aStream.\x0a\x09\x0a\x09aPackage sortedClasses do: [ :each |\x0a\x09\x09self exportDefinitionOf: each on: aStream.\x0a\x09\x09\x0a\x09\x09self \x0a\x09\x09\x09exportProtocols: (self ownMethodProtocolsOfClass: each)\x0a\x09\x09\x09on: aStream.\x0a\x09\x09\x09\x0a\x09\x09self exportMetaDefinitionOf: each on: aStream.\x0a\x09\x09\x0a\x09\x09self \x0a\x09\x09\x09exportProtocols: (self ownMethodProtocolsOfClass: each class)\x0a\x09\x09\x09on: aStream ].\x0a\x09\x09\x09\x0a\x09self \x0a\x09\x09exportProtocols: (self extensionProtocolsOfPackage: aPackage)\x0a\x09\x09on: aStream",
messageSends: ["exportPackageDefinitionOf:on:", "do:", "sortedClasses", "exportDefinitionOf:on:", "exportProtocols:on:", "ownMethodProtocolsOfClass:", "exportMetaDefinitionOf:on:", "class", "extensionProtocolsOfPackage:"],
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
$1=_st("Smalltalk current createPackage: '".__comma(_st(aPackage)._name())).__comma("'!");
$ctx1.sendIdx[","]=1;
_st(aStream)._nextPutAll_($1);
$2=_st(aStream)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportPackageDefinitionOf:on:",{aPackage:aPackage,aStream:aStream},smalltalk.ChunkExporter)})},
args: ["aPackage", "aStream"],
source: "exportPackageDefinitionOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: 'Smalltalk current createPackage: ''', aPackage name, '''!';\x0a\x09\x09lf",
messageSends: ["nextPutAll:", ",", "name", "lf"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportProtocol:on:",
category: 'output',
fn: function (aProtocol,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._exportProtocolPrologueOf_on_(aProtocol,aStream);
_st(_st(aProtocol)._methods())._do_((function(method){
return smalltalk.withContext(function($ctx2) {
return self._exportMethod_on_(method,aStream);
}, function($ctx2) {$ctx2.fillBlock({method:method},$ctx1,1)})}));
self._exportProtocolEpilogueOf_on_(aProtocol,aStream);
return self}, function($ctx1) {$ctx1.fill(self,"exportProtocol:on:",{aProtocol:aProtocol,aStream:aStream},smalltalk.ChunkExporter)})},
args: ["aProtocol", "aStream"],
source: "exportProtocol: aProtocol on: aStream\x0a\x09self exportProtocolPrologueOf: aProtocol on: aStream.\x0a\x09aProtocol methods do: [ :method | \x0a\x09\x09self exportMethod: method on: aStream ].\x0a\x09self exportProtocolEpilogueOf: aProtocol on: aStream",
messageSends: ["exportProtocolPrologueOf:on:", "do:", "methods", "exportMethod:on:", "exportProtocolEpilogueOf:on:"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportProtocolEpilogueOf:on:",
category: 'output',
fn: function (aProtocol,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aStream)._nextPutAll_(" !");
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=1;
$1=_st(aStream)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportProtocolEpilogueOf:on:",{aProtocol:aProtocol,aStream:aStream},smalltalk.ChunkExporter)})},
args: ["aProtocol", "aStream"],
source: "exportProtocolEpilogueOf: aProtocol on: aStream\x0a\x09aStream nextPutAll: ' !'; lf; lf",
messageSends: ["nextPutAll:", "lf"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportProtocolPrologueOf:on:",
category: 'output',
fn: function (aProtocol,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
$1="!".__comma(self._classNameFor_(_st(aProtocol)._theClass()));
$ctx1.sendIdx[","]=1;
_st(aStream)._nextPutAll_($1);
$ctx1.sendIdx["nextPutAll:"]=1;
$3=_st(" methodsFor: '".__comma(_st(aProtocol)._name())).__comma("'!");
$ctx1.sendIdx[","]=2;
$2=_st(aStream)._nextPutAll_($3);
return self}, function($ctx1) {$ctx1.fill(self,"exportProtocolPrologueOf:on:",{aProtocol:aProtocol,aStream:aStream},smalltalk.ChunkExporter)})},
args: ["aProtocol", "aStream"],
source: "exportProtocolPrologueOf: aProtocol on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: '!', (self classNameFor: aProtocol theClass);\x0a\x09\x09nextPutAll: ' methodsFor: ''', aProtocol name, '''!'",
messageSends: ["nextPutAll:", ",", "classNameFor:", "theClass", "name"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportProtocols:on:",
category: 'output',
fn: function (aCollection,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._exportProtocol_on_(each,aStream);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"exportProtocols:on:",{aCollection:aCollection,aStream:aStream},smalltalk.ChunkExporter)})},
args: ["aCollection", "aStream"],
source: "exportProtocols: aCollection on: aStream\x0a\x09aCollection do: [ :each |\x0a\x09\x09self exportProtocol: each on: aStream ]",
messageSends: ["do:", "exportProtocol:on:"],
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
function $Package(){return smalltalk.Package||(typeof Package=="undefined"?nil:Package)}
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $MethodCategory(){return smalltalk.MethodCategory||(typeof MethodCategory=="undefined"?nil:MethodCategory)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
name=_st(aPackage)._name();
result=_st($OrderedCollection())._new();
$ctx1.sendIdx["new"]=1;
_st(_st($Package())._sortedClasses_(_st(_st($Smalltalk())._current())._classes()))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st([each,_st(each)._class()])._do_((function(aClass){
return smalltalk.withContext(function($ctx3) {
map=_st($Dictionary())._new();
map;
_st(aClass)._protocolsDo_((function(category,methods){
return smalltalk.withContext(function($ctx4) {
$1=_st(category).__eq("*".__comma(name));
if(smalltalk.assert($1)){
return _st(map)._at_put_(category,methods);
};
}, function($ctx4) {$ctx4.fillBlock({category:category,methods:methods},$ctx3,3)})}));
return _st(result)._addAll_(_st(_st(_st(map)._keys())._sorted_((function(a,b){
return smalltalk.withContext(function($ctx4) {
return _st(a).__lt_eq(b);
}, function($ctx4) {$ctx4.fillBlock({a:a,b:b},$ctx3,5)})})))._collect_((function(category){
return smalltalk.withContext(function($ctx4) {
return _st($MethodCategory())._name_theClass_methods_(category,aClass,_st(map)._at_(category));
}, function($ctx4) {$ctx4.fillBlock({category:category},$ctx3,6)})})));
}, function($ctx3) {$ctx3.fillBlock({aClass:aClass},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$ctx1.sendIdx["do:"]=1;
$2=result;
return $2;
}, function($ctx1) {$ctx1.fill(self,"extensionCategoriesOfPackage:",{aPackage:aPackage,name:name,map:map,result:result},smalltalk.ChunkExporter)})},
args: ["aPackage"],
source: "extensionCategoriesOfPackage: aPackage\x0a\x09\x22Issue #143: sort protocol alphabetically\x22\x0a\x0a\x09| name map result |\x0a\x09name := aPackage name.\x0a\x09result := OrderedCollection new.\x0a\x09(Package sortedClasses: Smalltalk current classes) do: [ :each |\x0a\x09\x09{each. each class} do: [ :aClass |\x0a\x09\x09\x09map := Dictionary new.\x0a\x09\x09\x09aClass protocolsDo: [ :category :methods |\x0a\x09\x09\x09\x09category = ('*', name) ifTrue: [ map at: category put: methods ] ].\x0a\x09\x09\x09result addAll: ((map keys sorted: [ :a :b | a <= b ]) collect: [ :category |\x0a\x09\x09\x09\x09MethodCategory name: category theClass: aClass methods: (map at: category) ]) ] ].\x0a\x09^ result",
messageSends: ["name", "new", "do:", "sortedClasses:", "classes", "current", "class", "protocolsDo:", "ifTrue:", "=", ",", "at:put:", "addAll:", "collect:", "sorted:", "keys", "<=", "name:theClass:methods:", "at:"],
referencedClasses: ["OrderedCollection", "Package", "Smalltalk", "Dictionary", "MethodCategory"]
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
_st(aClass)._protocolsDo_((function(each,methods){
return smalltalk.withContext(function($ctx2) {
$1=_st(each)._match_("^\x5c*");
if(! smalltalk.assert($1)){
return _st(map)._at_put_(each,methods);
};
}, function($ctx2) {$ctx2.fillBlock({each:each,methods:methods},$ctx1,1)})}));
$2=_st(_st(_st(map)._keys())._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(a).__lt_eq(b);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,3)})})))._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st($MethodCategory())._name_theClass_methods_(each,aClass,_st(map)._at_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)})}));
return $2;
}, function($ctx1) {$ctx1.fill(self,"ownCategoriesOfClass:",{aClass:aClass,map:map},smalltalk.ChunkExporter)})},
args: ["aClass"],
source: "ownCategoriesOfClass: aClass\x0a\x09\x22Answer the protocols of aClass that are not package extensions\x22\x0a\x09\x0a\x09\x22Issue #143: sort protocol alphabetically\x22\x0a\x0a\x09| map |\x0a\x09map := Dictionary new.\x0a\x09aClass protocolsDo: [ :each :methods |\x0a\x09\x09(each match: '^\x5c*') ifFalse: [ map at: each put: methods ] ].\x0a\x09^ (map keys sorted: [ :a :b | a <= b ]) collect: [ :each |\x0a\x09\x09MethodCategory name: each theClass: aClass methods: (map at: each) ]",
messageSends: ["new", "protocolsDo:", "ifFalse:", "match:", "at:put:", "collect:", "sorted:", "keys", "<=", "name:theClass:methods:", "at:"],
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
source: "ownCategoriesOfMetaClass: aClass\x0a\x09\x22Issue #143: sort protocol alphabetically\x22\x0a\x0a\x09^ self ownCategoriesOfClass: aClass class",
messageSends: ["ownCategoriesOfClass:", "class"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "ownMethodProtocolsOfClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
function $ExportMethodProtocol(){return smalltalk.ExportMethodProtocol||(typeof ExportMethodProtocol=="undefined"?nil:ExportMethodProtocol)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aClass)._ownProtocols())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st($ExportMethodProtocol())._name_theClass_(each,aClass);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ownMethodProtocolsOfClass:",{aClass:aClass},smalltalk.ChunkExporter)})},
args: ["aClass"],
source: "ownMethodProtocolsOfClass: aClass\x0a\x09\x22Answer a collection of ExportMethodProtocol object of aClass that are not package extensions\x22\x0a\x09\x0a\x09^ aClass ownProtocols collect: [ :each |\x0a\x09\x09ExportMethodProtocol name: each theClass: aClass ]",
messageSends: ["collect:", "ownProtocols", "name:theClass:"],
referencedClasses: ["ExportMethodProtocol"]
}),
smalltalk.ChunkExporter);



smalltalk.addClass('Exporter', smalltalk.AbstractExporter, [], 'Importer-Exporter');
smalltalk.Exporter.comment="I am responsible for outputting Amber code into a JavaScript string.\x0a\x0aThe generated output is enough to reconstruct the exported data, including Smalltalk source code and other metadata.\x0a\x0a## Use case\x0a\x0aI am typically used to save code outside of the Amber runtime (committing to disk, etc.).";
smalltalk.addMethod(
smalltalk.method({
selector: "classNameFor:",
category: 'convenience',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=_st(aClass)._isMetaclass();
if(smalltalk.assert($2)){
$3=_st(_st(aClass)._instanceClass())._name();
$ctx1.sendIdx["name"]=1;
$1=_st($3).__comma(".klass");
} else {
$4=_st(aClass)._isNil();
if(smalltalk.assert($4)){
$1="nil";
} else {
$1=_st(aClass)._name();
};
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"classNameFor:",{aClass:aClass},smalltalk.Exporter)})},
args: ["aClass"],
source: "classNameFor: aClass\x0a\x09^ aClass isMetaclass\x0a\x09\x09ifTrue: [ aClass instanceClass name, '.klass' ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09aClass isNil\x0a\x09\x09\x09\x09ifTrue: [ 'nil' ]\x0a\x09\x09\x09\x09ifFalse: [ aClass name ] ]",
messageSends: ["ifTrue:ifFalse:", "isMetaclass", ",", "name", "instanceClass", "isNil"],
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
var $3,$2,$1,$5,$4,$6,$8,$7,$9,$11,$10,$12;
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=1;
_st(aStream)._nextPutAll_("smalltalk.addClass(");
$ctx1.sendIdx["nextPutAll:"]=1;
$3=self._classNameFor_(aClass);
$ctx1.sendIdx["classNameFor:"]=1;
$2="'".__comma($3);
$ctx1.sendIdx[","]=2;
$1=_st($2).__comma("', ");
$ctx1.sendIdx[","]=1;
_st(aStream)._nextPutAll_($1);
$ctx1.sendIdx["nextPutAll:"]=2;
$5=self._classNameFor_(_st(aClass)._superclass());
$ctx1.sendIdx["classNameFor:"]=2;
$4="smalltalk.".__comma($5);
$ctx1.sendIdx[","]=3;
_st(aStream)._nextPutAll_($4);
$ctx1.sendIdx["nextPutAll:"]=3;
$6=_st(aStream)._nextPutAll_(", [");
$ctx1.sendIdx["nextPutAll:"]=4;
_st(_st(aClass)._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
$8="'".__comma(each);
$ctx2.sendIdx[","]=5;
$7=_st($8).__comma("'");
$ctx2.sendIdx[","]=4;
return _st(aStream)._nextPutAll_($7);
$ctx2.sendIdx["nextPutAll:"]=5;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._nextPutAll_(", ");
$ctx2.sendIdx["nextPutAll:"]=6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
_st(aStream)._nextPutAll_("], '");
$ctx1.sendIdx["nextPutAll:"]=7;
_st(aStream)._nextPutAll_(_st(_st(aClass)._category()).__comma("'"));
$ctx1.sendIdx["nextPutAll:"]=8;
$9=_st(aStream)._nextPutAll_(");");
$ctx1.sendIdx["nextPutAll:"]=9;
$11=_st(aClass)._comment();
$ctx1.sendIdx["comment"]=1;
$10=_st($11)._notEmpty();
if(smalltalk.assert($10)){
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=2;
_st(aStream)._nextPutAll_("smalltalk.");
$ctx1.sendIdx["nextPutAll:"]=10;
_st(aStream)._nextPutAll_(self._classNameFor_(aClass));
$ctx1.sendIdx["nextPutAll:"]=11;
_st(aStream)._nextPutAll_(".comment=");
$ctx1.sendIdx["nextPutAll:"]=12;
_st(aStream)._nextPutAll_(_st(_st(aClass)._comment())._asJavascript());
$ctx1.sendIdx["nextPutAll:"]=13;
$12=_st(aStream)._nextPutAll_(";");
$12;
};
_st(aStream)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportDefinitionOf:on:",{aClass:aClass,aStream:aStream},smalltalk.Exporter)})},
args: ["aClass", "aStream"],
source: "exportDefinitionOf: aClass on: aStream\x0a\x09aStream\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: 'smalltalk.addClass(';\x0a\x09\x09nextPutAll: '''', (self classNameFor: aClass), ''', ';\x0a\x09\x09nextPutAll: 'smalltalk.', (self classNameFor: aClass superclass);\x0a\x09\x09nextPutAll: ', ['.\x0a\x09aClass instanceVariableNames\x0a\x09\x09do: [ :each | aStream nextPutAll: '''', each, '''' ]\x0a\x09\x09separatedBy: [ aStream nextPutAll: ', ' ].\x0a\x09aStream\x0a\x09\x09nextPutAll: '], ''';\x0a\x09\x09nextPutAll: aClass category, '''';\x0a\x09\x09nextPutAll: ');'.\x0a\x09aClass comment notEmpty ifTrue: [\x0a\x09\x09aStream\x0a\x09\x09\x09lf;\x0a\x09\x09nextPutAll: 'smalltalk.';\x0a\x09\x09nextPutAll: (self classNameFor: aClass);\x0a\x09\x09nextPutAll: '.comment=';\x0a\x09\x09nextPutAll: aClass comment asJavascript;\x0a\x09\x09nextPutAll: ';' ].\x0a\x09aStream lf",
messageSends: ["lf", "nextPutAll:", ",", "classNameFor:", "superclass", "do:separatedBy:", "instanceVariableNames", "category", "ifTrue:", "notEmpty", "comment", "asJavascript"],
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
var $3,$2,$1,$6,$5,$4,$7,$9,$8;
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=1;
$3=_st(aClass)._class();
$ctx1.sendIdx["class"]=1;
$2=_st($3)._instanceVariableNames();
$ctx1.sendIdx["instanceVariableNames"]=1;
$1=_st($2)._isEmpty();
if(! smalltalk.assert($1)){
$6=_st(aClass)._class();
$ctx1.sendIdx["class"]=2;
$5=self._classNameFor_($6);
$4="smalltalk.".__comma($5);
$ctx1.sendIdx[","]=1;
_st(aStream)._nextPutAll_($4);
$ctx1.sendIdx["nextPutAll:"]=1;
$7=_st(aStream)._nextPutAll_(".iVarNames = [");
$ctx1.sendIdx["nextPutAll:"]=2;
$7;
_st(_st(_st(aClass)._class())._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
$9="'".__comma(each);
$ctx2.sendIdx[","]=3;
$8=_st($9).__comma("'");
$ctx2.sendIdx[","]=2;
return _st(aStream)._nextPutAll_($8);
$ctx2.sendIdx["nextPutAll:"]=3;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._nextPutAll_(",");
$ctx2.sendIdx["nextPutAll:"]=4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
_st(aStream)._nextPutAll_("];".__comma(_st($String())._lf()));
};
return self}, function($ctx1) {$ctx1.fill(self,"exportMetaDefinitionOf:on:",{aClass:aClass,aStream:aStream},smalltalk.Exporter)})},
args: ["aClass", "aStream"],
source: "exportMetaDefinitionOf: aClass on: aStream\x0a\x09aStream lf.\x0a\x09aClass class instanceVariableNames isEmpty ifFalse: [\x0a\x09\x09aStream\x0a\x09\x09nextPutAll: 'smalltalk.', (self classNameFor: aClass class);\x0a\x09\x09nextPutAll: '.iVarNames = ['.\x0a\x09\x09aClass class instanceVariableNames\x0a\x09\x09do: [ :each | aStream nextPutAll: '''', each, '''' ]\x0a\x09\x09separatedBy: [ aStream nextPutAll: ',' ].\x0a\x09\x09aStream nextPutAll: '];', String lf ]",
messageSends: ["lf", "ifFalse:", "isEmpty", "instanceVariableNames", "class", "nextPutAll:", ",", "classNameFor:", "do:separatedBy:"],
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
var $3,$2,$1,$5,$4,$7,$6,$10,$9,$8,$13,$12,$11,$16,$15,$14,$18,$17,$19;
_st(aStream)._nextPutAll_("smalltalk.addMethod(");
$ctx1.sendIdx["nextPutAll:"]=1;
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=1;
_st(aStream)._nextPutAll_("smalltalk.method({");
$ctx1.sendIdx["nextPutAll:"]=2;
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=2;
$3=_st(_st(aMethod)._selector())._asJavascript();
$ctx1.sendIdx["asJavascript"]=1;
$2="selector: ".__comma($3);
$ctx1.sendIdx[","]=2;
$1=_st($2).__comma(",");
$ctx1.sendIdx[","]=1;
_st(aStream)._nextPutAll_($1);
$ctx1.sendIdx["nextPutAll:"]=3;
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=3;
$5="category: '".__comma(_st(aMethod)._category());
$ctx1.sendIdx[","]=4;
$4=_st($5).__comma("',");
$ctx1.sendIdx[","]=3;
_st(aStream)._nextPutAll_($4);
$ctx1.sendIdx["nextPutAll:"]=4;
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=4;
$7="fn: ".__comma(_st(_st(aMethod)._fn())._compiledSource());
$ctx1.sendIdx[","]=6;
$6=_st($7).__comma(",");
$ctx1.sendIdx[","]=5;
_st(aStream)._nextPutAll_($6);
$ctx1.sendIdx["nextPutAll:"]=5;
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=5;
$10=_st(_st(aMethod)._arguments())._asJavascript();
$ctx1.sendIdx["asJavascript"]=2;
$9="args: ".__comma($10);
$ctx1.sendIdx[","]=8;
$8=_st($9).__comma(",");
$ctx1.sendIdx[","]=7;
_st(aStream)._nextPutAll_($8);
$ctx1.sendIdx["nextPutAll:"]=6;
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=6;
$13=_st(_st(aMethod)._source())._asJavascript();
$ctx1.sendIdx["asJavascript"]=3;
$12="source: ".__comma($13);
$ctx1.sendIdx[","]=10;
$11=_st($12).__comma(",");
$ctx1.sendIdx[","]=9;
_st(aStream)._nextPutAll_($11);
$ctx1.sendIdx["nextPutAll:"]=7;
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=7;
$16=_st(_st(aMethod)._messageSends())._asJavascript();
$ctx1.sendIdx["asJavascript"]=4;
$15="messageSends: ".__comma($16);
$ctx1.sendIdx[","]=12;
$14=_st($15).__comma(",");
$ctx1.sendIdx[","]=11;
_st(aStream)._nextPutAll_($14);
$ctx1.sendIdx["nextPutAll:"]=8;
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=8;
$18="referencedClasses: ".__comma(_st(_st(aMethod)._referencedClasses())._asJavascript());
$ctx1.sendIdx[","]=13;
$17=_st(aStream)._nextPutAll_($18);
$ctx1.sendIdx["nextPutAll:"]=9;
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=9;
_st(aStream)._nextPutAll_("}),");
$ctx1.sendIdx["nextPutAll:"]=10;
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=10;
_st(aStream)._nextPutAll_("smalltalk.".__comma(self._classNameFor_(_st(aMethod)._methodClass())));
$ctx1.sendIdx["nextPutAll:"]=11;
_st(aStream)._nextPutAll_(");");
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=11;
$19=_st(aStream)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportMethod:on:",{aMethod:aMethod,aStream:aStream},smalltalk.Exporter)})},
args: ["aMethod", "aStream"],
source: "exportMethod: aMethod on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: 'smalltalk.addMethod(';lf;\x0a\x09\x09\x22nextPutAll: aMethod selector asSelector asJavascript, ',';lf;\x22\x0a\x09\x09nextPutAll: 'smalltalk.method({';lf;\x0a\x09\x09nextPutAll: 'selector: ', aMethod selector asJavascript, ',';lf;\x0a\x09\x09nextPutAll: 'category: ''', aMethod category, ''',';lf;\x0a\x09\x09nextPutAll: 'fn: ', aMethod fn compiledSource, ',';lf;\x0a\x09\x09nextPutAll: 'args: ', aMethod arguments asJavascript, ','; lf;\x0a\x09\x09nextPutAll: 'source: ', aMethod source asJavascript, ',';lf;\x0a\x09\x09nextPutAll: 'messageSends: ', aMethod messageSends asJavascript, ',';lf;\x0a\x09\x09nextPutAll: 'referencedClasses: ', aMethod referencedClasses asJavascript.\x0a\x09aStream\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: '}),';lf;\x0a\x09\x09nextPutAll: 'smalltalk.', (self classNameFor: aMethod methodClass);\x0a\x09\x09nextPutAll: ');';lf;lf",
messageSends: ["nextPutAll:", "lf", ",", "asJavascript", "selector", "category", "compiledSource", "fn", "arguments", "source", "messageSends", "referencedClasses", "classNameFor:", "methodClass"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackage:on:",
category: 'output',
fn: function (aPackage,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._exportPackagePrologueOf_on_(aPackage,aStream);
self._exportPackageDefinitionOf_on_(aPackage,aStream);
$1=self._exportPackageTransportOf_on_(aPackage,aStream);
_st(_st(aPackage)._sortedClasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
self._exportDefinitionOf_on_(each,aStream);
$2=_st(each)._ownMethods();
$ctx2.sendIdx["ownMethods"]=1;
_st($2)._do_((function(method){
return smalltalk.withContext(function($ctx3) {
return self._exportMethod_on_(method,aStream);
$ctx3.sendIdx["exportMethod:on:"]=1;
}, function($ctx3) {$ctx3.fillBlock({method:method},$ctx2,2)})}));
$ctx2.sendIdx["do:"]=2;
self._exportMetaDefinitionOf_on_(each,aStream);
return _st(_st(_st(each)._class())._ownMethods())._do_((function(method){
return smalltalk.withContext(function($ctx3) {
return self._exportMethod_on_(method,aStream);
$ctx3.sendIdx["exportMethod:on:"]=2;
}, function($ctx3) {$ctx3.fillBlock({method:method},$ctx2,3)})}));
$ctx2.sendIdx["do:"]=3;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$ctx1.sendIdx["do:"]=1;
_st(self._extensionMethodsOfPackage_(aPackage))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._exportMethod_on_(each,aStream);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)})}));
self._exportPackageEpilogueOf_on_(aPackage,aStream);
return self}, function($ctx1) {$ctx1.fill(self,"exportPackage:on:",{aPackage:aPackage,aStream:aStream},smalltalk.Exporter)})},
args: ["aPackage", "aStream"],
source: "exportPackage: aPackage on: aStream\x0a\x09\x0a\x09self \x0a\x09\x09exportPackagePrologueOf: aPackage on: aStream;\x0a\x09\x09exportPackageDefinitionOf: aPackage on: aStream;\x0a\x09\x09exportPackageTransportOf: aPackage on: aStream.\x0a\x09\x0a\x09aPackage sortedClasses do: [ :each |\x0a\x09\x09self exportDefinitionOf: each on: aStream.\x0a\x09\x09each ownMethods do: [ :method |\x0a\x09\x09\x09self exportMethod: method on: aStream ].\x0a\x09\x09\x09\x0a\x09\x09self exportMetaDefinitionOf: each on: aStream.\x0a\x09\x09each class ownMethods do: [ :method |\x0a\x09\x09\x09self exportMethod: method on: aStream ] ].\x0a\x09\x09\x09\x0a\x09(self extensionMethodsOfPackage: aPackage) do: [ :each |\x0a\x09\x09self exportMethod: each on: aStream ].\x0a\x09\x09\x0a\x09self exportPackageEpilogueOf: aPackage on: aStream",
messageSends: ["exportPackagePrologueOf:on:", "exportPackageDefinitionOf:on:", "exportPackageTransportOf:on:", "do:", "sortedClasses", "exportDefinitionOf:on:", "ownMethods", "exportMethod:on:", "exportMetaDefinitionOf:on:", "class", "extensionMethodsOfPackage:", "exportPackageEpilogueOf:on:"],
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
_st(aStream)._nextPutAll_("smalltalk.addPackage(");
$ctx1.sendIdx["nextPutAll:"]=1;
$1=_st("'".__comma(_st(aPackage)._name())).__comma("');");
$ctx1.sendIdx[","]=1;
_st(aStream)._nextPutAll_($1);
$2=_st(aStream)._lf();
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
var $1;
_st(aStream)._nextPutAll_("})(global_smalltalk,global_nil,global__st);");
$1=_st(aStream)._lf();
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
var $1;
_st(aStream)._nextPutAll_("(function(smalltalk,nil,_st){");
$1=_st(aStream)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportPackagePrologueOf:on:",{aPackage:aPackage,aStream:aStream},smalltalk.Exporter)})},
args: ["aPackage", "aStream"],
source: "exportPackagePrologueOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: '(function(smalltalk,nil,_st){';\x0a\x09\x09lf",
messageSends: ["nextPutAll:", "lf"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackageTransportOf:on:",
category: 'output',
fn: function (aPackage,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aStream)._nextPutAll_("smalltalk.packages[");
$ctx1.sendIdx["nextPutAll:"]=1;
_st(aStream)._nextPutAll_(_st(_st(aPackage)._name())._asJavascript());
$ctx1.sendIdx["nextPutAll:"]=2;
_st(aStream)._nextPutAll_("].transport = ");
$ctx1.sendIdx["nextPutAll:"]=3;
_st(aStream)._nextPutAll_(_st(_st(aPackage)._transport())._asJSONString());
$ctx1.sendIdx["nextPutAll:"]=4;
_st(aStream)._nextPutAll_(";");
$1=_st(aStream)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportPackageTransportOf:on:",{aPackage:aPackage,aStream:aStream},smalltalk.Exporter)})},
args: ["aPackage", "aStream"],
source: "exportPackageTransportOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: 'smalltalk.packages[';\x0a\x09\x09nextPutAll: aPackage name asJavascript;\x0a\x09\x09nextPutAll: '].transport = ';\x0a\x09\x09nextPutAll: aPackage transport asJSONString;\x0a\x09\x09nextPutAll: ';';\x0a\x09\x09lf",
messageSends: ["nextPutAll:", "asJavascript", "name", "asJSONString", "transport", "lf"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "ownMethodsOfClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=_st(_st(_st(_st(aClass)._methodDictionary())._values())._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) {
$2=_st(a)._selector();
$ctx2.sendIdx["selector"]=1;
return _st($2).__lt_eq(_st(b)._selector());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)})})))._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._category())._match_("^\x5c*");
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ownMethodsOfClass:",{aClass:aClass},smalltalk.Exporter)})},
args: ["aClass"],
source: "ownMethodsOfClass: aClass\x0a\x09\x22Issue #143: sort methods alphabetically\x22\x0a\x0a\x09^ ((aClass methodDictionary values) sorted: [ :a :b | a selector <= b selector ])\x0a\x09\x09reject: [ :each | (each category match: '^\x5c*') ]",
messageSends: ["reject:", "sorted:", "values", "methodDictionary", "<=", "selector", "match:", "category"],
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
source: "ownMethodsOfMetaClass: aClass\x0a\x09\x22Issue #143: sort methods alphabetically\x22\x0a\x0a\x09^ self ownMethodsOfClass: aClass class",
messageSends: ["ownMethodsOfClass:", "class"],
referencedClasses: []
}),
smalltalk.Exporter);



smalltalk.addClass('AmdExporter', smalltalk.Exporter, ['namespace'], 'Importer-Exporter');
smalltalk.AmdExporter.comment="I am used to export Packages in an AMD (Asynchronous Module Definition) JavaScript format.";
smalltalk.addMethod(
smalltalk.method({
selector: "amdNamesOfPackages:",
category: 'private',
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=_st(_st(anArray)._select_((function(each){
return smalltalk.withContext(function($ctx2) {
$2=self._amdNamespaceOfPackage_(each);
$ctx2.sendIdx["amdNamespaceOfPackage:"]=1;
return _st($2)._notNil();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})))._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self._amdNamespaceOfPackage_(each)).__comma("/")).__comma(_st(each)._name());
$ctx2.sendIdx[","]=1;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"amdNamesOfPackages:",{anArray:anArray},smalltalk.AmdExporter)})},
args: ["anArray"],
source: "amdNamesOfPackages: anArray\x0a\x09^ (anArray\x0a\x09\x09select: [ :each | (self amdNamespaceOfPackage: each) notNil ])\x0a\x09\x09collect: [ :each | (self amdNamespaceOfPackage: each), '/', each name ]",
messageSends: ["collect:", "select:", "notNil", "amdNamespaceOfPackage:", ",", "name"],
referencedClasses: []
}),
smalltalk.AmdExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "amdNamespaceOfPackage:",
category: 'private',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$1;
$4=_st(aPackage)._transport();
$ctx1.sendIdx["transport"]=1;
$3=_st($4)._type();
$2=_st($3).__eq("amd");
if(smalltalk.assert($2)){
$1=_st(_st(aPackage)._transport())._namespace();
} else {
$1=nil;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"amdNamespaceOfPackage:",{aPackage:aPackage},smalltalk.AmdExporter)})},
args: ["aPackage"],
source: "amdNamespaceOfPackage: aPackage\x0a\x09^ (aPackage transport type = 'amd')\x0a\x09\x09ifTrue: [ aPackage transport namespace ]\x0a\x09\x09ifFalse: [ nil ]",
messageSends: ["ifTrue:ifFalse:", "=", "type", "transport", "namespace"],
referencedClasses: []
}),
smalltalk.AmdExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackageEpilogueOf:on:",
category: 'output',
fn: function (aPackage,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aStream)._nextPutAll_("});");
$1=_st(aStream)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportPackageEpilogueOf:on:",{aPackage:aPackage,aStream:aStream},smalltalk.AmdExporter)})},
args: ["aPackage", "aStream"],
source: "exportPackageEpilogueOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: '});';\x0a\x09\x09lf",
messageSends: ["nextPutAll:", "lf"],
referencedClasses: []
}),
smalltalk.AmdExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackagePrologueOf:on:",
category: 'output',
fn: function (aPackage,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aStream)._nextPutAll_("define(\x22");
$ctx1.sendIdx["nextPutAll:"]=1;
_st(aStream)._nextPutAll_(self._amdNamespaceOfPackage_(aPackage));
$ctx1.sendIdx["nextPutAll:"]=2;
_st(aStream)._nextPutAll_("/");
$ctx1.sendIdx["nextPutAll:"]=3;
_st(aStream)._nextPutAll_(_st(aPackage)._name());
$ctx1.sendIdx["nextPutAll:"]=4;
_st(aStream)._nextPutAll_("\x22, ");
$ctx1.sendIdx["nextPutAll:"]=5;
_st(aStream)._nextPutAll_(_st(["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st"].__comma(self._amdNamesOfPackages_(_st(aPackage)._loadDependencies())))._asJavascript());
$ctx1.sendIdx["nextPutAll:"]=6;
_st(aStream)._nextPutAll_(", function(smalltalk,nil,_st){");
$1=_st(aStream)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportPackagePrologueOf:on:",{aPackage:aPackage,aStream:aStream},smalltalk.AmdExporter)})},
args: ["aPackage", "aStream"],
source: "exportPackagePrologueOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: 'define(\x22';\x0a\x09\x09nextPutAll: (self amdNamespaceOfPackage: aPackage);\x0a\x09\x09nextPutAll: '/';\x0a\x09\x09nextPutAll: aPackage name;\x0a\x09\x09nextPutAll: '\x22, ';\x0a\x09\x09nextPutAll: (#('amber_vm/smalltalk' 'amber_vm/nil' 'amber_vm/_st'), (self amdNamesOfPackages: aPackage loadDependencies)) asJavascript;\x0a\x09\x09nextPutAll: ', function(smalltalk,nil,_st){';\x0a\x09\x09lf",
messageSends: ["nextPutAll:", "amdNamespaceOfPackage:", "name", "asJavascript", ",", "amdNamesOfPackages:", "loadDependencies", "lf"],
referencedClasses: []
}),
smalltalk.AmdExporter);



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
$ctx2.sendIdx["next"]=1;
char;
return _st(char)._notNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(char).__eq("!");
$ctx2.sendIdx["="]=1;
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return nil;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"nextChunk",{char:char,result:result,chunk:chunk},smalltalk.ChunkParser)})},
args: [],
source: "nextChunk\x0a\x09\x22The chunk format (Smalltalk Interchange Format or Fileout format)\x0a\x09is a trivial format but can be a bit tricky to understand:\x0a\x09\x09- Uses the exclamation mark as delimiter of chunks.\x0a\x09\x09- Inside a chunk a normal exclamation mark must be doubled.\x0a\x09\x09- A non empty chunk must be a valid Smalltalk expression.\x0a\x09\x09- A chunk on top level with a preceding empty chunk is an instruction chunk:\x0a\x09\x09\x09- The object created by the expression then takes over reading chunks.\x0a\x0a\x09This method returns next chunk as a String (trimmed), empty String (all whitespace) or nil.\x22\x0a\x0a\x09| char result chunk |\x0a\x09result := '' writeStream.\x0a\x09\x09[ char := stream next.\x0a\x09\x09char notNil ] whileTrue: [\x0a\x09\x09\x09\x09char = '!' ifTrue: [\x0a\x09\x09\x09\x09\x09\x09stream peek = '!'\x0a\x09\x09\x09\x09\x09\x09\x09\x09ifTrue: [ stream next \x22skipping the escape double\x22 ]\x0a\x09\x09\x09\x09\x09\x09\x09\x09ifFalse: [ ^ result contents trimBoth \x22chunk end marker found\x22 ]].\x0a\x09\x09\x09\x09result nextPut: char ].\x0a\x09^ nil \x22a chunk needs to end with !\x22",
messageSends: ["writeStream", "whileTrue:", "next", "notNil", "ifTrue:", "=", "ifTrue:ifFalse:", "peek", "trimBoth", "contents", "nextPut:"],
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
category: 'instance creation',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._stream_(aStream);
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aStream:aStream},smalltalk.ChunkParser.klass)})},
args: ["aStream"],
source: "on: aStream\x0a\x09^ self new stream: aStream",
messageSends: ["stream:", "new"],
referencedClasses: []
}),
smalltalk.ChunkParser.klass);


smalltalk.addClass('ExportMethodProtocol', smalltalk.Object, ['name', 'theClass'], 'Importer-Exporter');
smalltalk.ExportMethodProtocol.comment="I am an abstraction for a method protocol in a class / metaclass.\x0a\x0aI know of my class, name and methods.\x0aI am used when exporting a package.";
smalltalk.addMethod(
smalltalk.method({
selector: "methods",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=_st(_st(self._theClass())._methodsInProtocol_(self._name()))._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) {
$2=_st(a)._selector();
$ctx2.sendIdx["selector"]=1;
return _st($2).__lt_eq(_st(b)._selector());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"methods",{},smalltalk.ExportMethodProtocol)})},
args: [],
source: "methods\x0a\x09^ (self theClass methodsInProtocol: self name)\x0a\x09\x09sorted: [ :a :b | a selector <= b selector ]",
messageSends: ["sorted:", "methodsInProtocol:", "theClass", "name", "<=", "selector"],
referencedClasses: []
}),
smalltalk.ExportMethodProtocol);

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
}, function($ctx1) {$ctx1.fill(self,"name",{},smalltalk.ExportMethodProtocol)})},
args: [],
source: "name\x0a\x09^ name",
messageSends: [],
referencedClasses: []
}),
smalltalk.ExportMethodProtocol);

smalltalk.addMethod(
smalltalk.method({
selector: "name:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@name"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"name:",{aString:aString},smalltalk.ExportMethodProtocol)})},
args: ["aString"],
source: "name: aString\x0a\x09name := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.ExportMethodProtocol);

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
}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.ExportMethodProtocol)})},
args: [],
source: "theClass\x0a\x09^ theClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.ExportMethodProtocol);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass},smalltalk.ExportMethodProtocol)})},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.ExportMethodProtocol);


smalltalk.addMethod(
smalltalk.method({
selector: "name:theClass:",
category: 'instance creation',
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._name_(aString);
_st($2)._theClass_(aClass);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"name:theClass:",{aString:aString,aClass:aClass},smalltalk.ExportMethodProtocol.klass)})},
args: ["aString", "aClass"],
source: "name: aString theClass: aClass\x0a\x09^ self new\x0a\x09\x09name: aString;\x0a\x09\x09theClass: aClass;\x0a\x09\x09yourself",
messageSends: ["name:", "new", "theClass:", "yourself"],
referencedClasses: []
}),
smalltalk.ExportMethodProtocol.klass);


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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._whileFalse_((function(){
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"import:",{aStream:aStream,chunk:chunk,result:result,parser:parser,lastEmpty:lastEmpty},smalltalk.Importer)})},
args: ["aStream"],
source: "import: aStream\x0a\x09| chunk result parser lastEmpty |\x0a\x09parser := ChunkParser on: aStream.\x0a\x09lastEmpty := false.\x0a\x09[ chunk := parser nextChunk.\x0a\x09chunk isNil ] whileFalse: [\x0a\x09\x09chunk isEmpty\x0a\x09\x09\x09ifTrue: [ lastEmpty := true ]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09result := Compiler new evaluateExpression: chunk.\x0a\x09\x09\x09\x09lastEmpty\x0a\x09\x09\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09lastEmpty := false.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09result scanFrom: parser ]] ]",
messageSends: ["on:", "whileFalse:", "nextChunk", "isNil", "ifTrue:ifFalse:", "isEmpty", "evaluateExpression:", "new", "ifTrue:", "scanFrom:"],
referencedClasses: ["ChunkParser", "Compiler"]
}),
smalltalk.Importer);



smalltalk.addClass('PackageHandler', smalltalk.InterfacingObject, [], 'Importer-Exporter');
smalltalk.PackageHandler.comment="I am responsible for handling package loading and committing.\x0a\x0aI should not be used directly. Instead, use the corresponding `Package` methods.";
smalltalk.addMethod(
smalltalk.method({
selector: "ajaxPutAt:data:",
category: 'private',
fn: function (aURL,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$8,$7,$6,$1;
$2="url".__minus_gt(aURL);
$ctx1.sendIdx["->"]=1;
$3="type".__minus_gt("PUT");
$ctx1.sendIdx["->"]=2;
$4="data".__minus_gt(aString);
$ctx1.sendIdx["->"]=3;
$5="contentType".__minus_gt("text/plain;charset=UTF-8");
$ctx1.sendIdx["->"]=4;
$1=smalltalk.HashedCollection._from_([$2,$3,$4,$5,"error".__minus_gt((function(xhr){
return smalltalk.withContext(function($ctx2) {
$8=_st("Commiting ".__comma(aURL)).__comma(" failed with reason: \x22");
$ctx2.sendIdx[","]=3;
$7=_st($8).__comma(_st(xhr)._responseText());
$ctx2.sendIdx[","]=2;
$6=_st($7).__comma("\x22");
$ctx2.sendIdx[","]=1;
return self._alert_($6);
}, function($ctx2) {$ctx2.fillBlock({xhr:xhr},$ctx1,1)})}))]);
self._ajax_($1);
return self}, function($ctx1) {$ctx1.fill(self,"ajaxPutAt:data:",{aURL:aURL,aString:aString},smalltalk.PackageHandler)})},
args: ["aURL", "aString"],
source: "ajaxPutAt: aURL data: aString\x0a\x09self\x0a\x09\x09ajax: #{\x0a\x09\x09\x09'url' -> aURL.\x0a\x09\x09\x09'type' -> 'PUT'.\x0a\x09\x09\x09'data' -> aString.\x0a\x09\x09\x09'contentType' -> 'text/plain;charset=UTF-8'.\x0a\x09\x09\x09'error' -> [ :xhr | self alert: 'Commiting ' , aURL , ' failed with reason: \x22' , (xhr responseText) , '\x22' ] }",
messageSends: ["ajax:", "->", "alert:", ",", "responseText"],
referencedClasses: []
}),
smalltalk.PackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "chunkContentsFor:",
category: 'accessing',
fn: function (aPackage){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($String())._streamContents_((function(str){
return smalltalk.withContext(function($ctx2) {
return _st(self._chunkExporter())._exportPackage_on_(aPackage,str);
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"chunkContentsFor:",{aPackage:aPackage},smalltalk.PackageHandler)})},
args: ["aPackage"],
source: "chunkContentsFor: aPackage\x0a\x09^ String streamContents: [ :str |\x0a\x09\x09self chunkExporter exportPackage: aPackage on: str ]",
messageSends: ["streamContents:", "exportPackage:on:", "chunkExporter"],
referencedClasses: ["String"]
}),
smalltalk.PackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "chunkExporter",
category: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._chunkExporterClass())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"chunkExporter",{},smalltalk.PackageHandler)})},
args: [],
source: "chunkExporter\x0a\x09^ self chunkExporterClass new",
messageSends: ["new", "chunkExporterClass"],
referencedClasses: []
}),
smalltalk.PackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "chunkExporterClass",
category: 'accessing',
fn: function (){
var self=this;
function $ChunkExporter(){return smalltalk.ChunkExporter||(typeof ChunkExporter=="undefined"?nil:ChunkExporter)}
return smalltalk.withContext(function($ctx1) { 
return $ChunkExporter();
}, function($ctx1) {$ctx1.fill(self,"chunkExporterClass",{},smalltalk.PackageHandler)})},
args: [],
source: "chunkExporterClass\x0a\x09^ ChunkExporter",
messageSends: [],
referencedClasses: ["ChunkExporter"]
}),
smalltalk.PackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "commit:",
category: 'committing',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st([(function(){
return smalltalk.withContext(function($ctx2) {
return self._commitStFileFor_(aPackage);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return self._commitJsFileFor_(aPackage);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})})])._do_displayingProgress_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._value();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)})}),"Committing package ".__comma(_st(aPackage)._name()));
return self}, function($ctx1) {$ctx1.fill(self,"commit:",{aPackage:aPackage},smalltalk.PackageHandler)})},
args: ["aPackage"],
source: "commit: aPackage\x0a\x09{\x0a\x09\x09[ self commitStFileFor: aPackage ].\x0a\x09\x09[ self commitJsFileFor: aPackage ]\x0a\x09}\x0a\x09\x09do: [ :each | each value ]\x0a\x09\x09displayingProgress: 'Committing package ', aPackage name",
messageSends: ["do:displayingProgress:", "commitStFileFor:", "commitJsFileFor:", "value", ",", "name"],
referencedClasses: []
}),
smalltalk.PackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "commitJsFileFor:",
category: 'committing',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(self._commitPathJsFor_(aPackage)).__comma("/")).__comma(_st(aPackage)._name());
$ctx1.sendIdx[","]=2;
$1=_st($2).__comma(".js");
$ctx1.sendIdx[","]=1;
self._ajaxPutAt_data_($1,self._contentsFor_(aPackage));
return self}, function($ctx1) {$ctx1.fill(self,"commitJsFileFor:",{aPackage:aPackage},smalltalk.PackageHandler)})},
args: ["aPackage"],
source: "commitJsFileFor: aPackage\x0a\x09self \x0a\x09\x09ajaxPutAt: (self commitPathJsFor: aPackage), '/', aPackage name, '.js'\x0a\x09\x09data: (self contentsFor: aPackage)",
messageSends: ["ajaxPutAt:data:", ",", "commitPathJsFor:", "name", "contentsFor:"],
referencedClasses: []
}),
smalltalk.PackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPathJsFor:",
category: 'accessing',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"commitPathJsFor:",{aPackage:aPackage},smalltalk.PackageHandler)})},
args: ["aPackage"],
source: "commitPathJsFor: aPackage\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.PackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPathStFor:",
category: 'accessing',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"commitPathStFor:",{aPackage:aPackage},smalltalk.PackageHandler)})},
args: ["aPackage"],
source: "commitPathStFor: aPackage\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.PackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "commitStFileFor:",
category: 'committing',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(self._commitPathStFor_(aPackage)).__comma("/")).__comma(_st(aPackage)._name());
$ctx1.sendIdx[","]=2;
$1=_st($2).__comma(".st");
$ctx1.sendIdx[","]=1;
self._ajaxPutAt_data_($1,self._chunkContentsFor_(aPackage));
return self}, function($ctx1) {$ctx1.fill(self,"commitStFileFor:",{aPackage:aPackage},smalltalk.PackageHandler)})},
args: ["aPackage"],
source: "commitStFileFor: aPackage\x0a\x09self \x0a\x09\x09ajaxPutAt: (self commitPathStFor: aPackage), '/', aPackage name, '.st'\x0a\x09\x09data: (self chunkContentsFor: aPackage)",
messageSends: ["ajaxPutAt:data:", ",", "commitPathStFor:", "name", "chunkContentsFor:"],
referencedClasses: []
}),
smalltalk.PackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "contentsFor:",
category: 'accessing',
fn: function (aPackage){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($String())._streamContents_((function(str){
return smalltalk.withContext(function($ctx2) {
return _st(self._exporter())._exportPackage_on_(aPackage,str);
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"contentsFor:",{aPackage:aPackage},smalltalk.PackageHandler)})},
args: ["aPackage"],
source: "contentsFor: aPackage\x0a\x09^ String streamContents: [ :str |\x0a\x09\x09self exporter exportPackage: aPackage on: str ]",
messageSends: ["streamContents:", "exportPackage:on:", "exporter"],
referencedClasses: ["String"]
}),
smalltalk.PackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "exporter",
category: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._exporterClass())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"exporter",{},smalltalk.PackageHandler)})},
args: [],
source: "exporter\x0a\x09^ self exporterClass new",
messageSends: ["new", "exporterClass"],
referencedClasses: []
}),
smalltalk.PackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "exporterClass",
category: 'accessing',
fn: function (){
var self=this;
function $Exporter(){return smalltalk.Exporter||(typeof Exporter=="undefined"?nil:Exporter)}
return smalltalk.withContext(function($ctx1) { 
return $Exporter();
}, function($ctx1) {$ctx1.fill(self,"exporterClass",{},smalltalk.PackageHandler)})},
args: [],
source: "exporterClass\x0a\x09^ Exporter",
messageSends: [],
referencedClasses: ["Exporter"]
}),
smalltalk.PackageHandler);



smalltalk.addClass('AmdPackageHandler', smalltalk.PackageHandler, [], 'Importer-Exporter');
smalltalk.AmdPackageHandler.comment="I am responsible for handling package loading and committing.\x0a\x0aI should not be used directly. Instead, use the corresponding `Package` methods.";
smalltalk.addMethod(
smalltalk.method({
selector: "commitPathJsFor:",
category: 'accessing',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._toUrl_(self._namespaceFor_(aPackage));
return $1;
}, function($ctx1) {$ctx1.fill(self,"commitPathJsFor:",{aPackage:aPackage},smalltalk.AmdPackageHandler)})},
args: ["aPackage"],
source: "commitPathJsFor: aPackage\x0a\x09^ self toUrl: (self namespaceFor: aPackage)",
messageSends: ["toUrl:", "namespaceFor:"],
referencedClasses: []
}),
smalltalk.AmdPackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPathStFor:",
category: 'accessing',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._toUrl_(_st(self._namespaceFor_(aPackage)).__comma("/_source"));
return $1;
}, function($ctx1) {$ctx1.fill(self,"commitPathStFor:",{aPackage:aPackage},smalltalk.AmdPackageHandler)})},
args: ["aPackage"],
source: "commitPathStFor: aPackage\x0a\x09\x22if _source is not mapped, .st commit will likely fail\x22\x0a\x09^ self toUrl: (self namespaceFor: aPackage), '/_source'.",
messageSends: ["toUrl:", ",", "namespaceFor:"],
referencedClasses: []
}),
smalltalk.AmdPackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "exporterClass",
category: 'accessing',
fn: function (){
var self=this;
function $AmdExporter(){return smalltalk.AmdExporter||(typeof AmdExporter=="undefined"?nil:AmdExporter)}
return smalltalk.withContext(function($ctx1) { 
return $AmdExporter();
}, function($ctx1) {$ctx1.fill(self,"exporterClass",{},smalltalk.AmdPackageHandler)})},
args: [],
source: "exporterClass\x0a\x09^ AmdExporter",
messageSends: [],
referencedClasses: ["AmdExporter"]
}),
smalltalk.AmdPackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "namespaceFor:",
category: 'committing',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aPackage)._transport())._namespace();
return $1;
}, function($ctx1) {$ctx1.fill(self,"namespaceFor:",{aPackage:aPackage},smalltalk.AmdPackageHandler)})},
args: ["aPackage"],
source: "namespaceFor: aPackage\x0a\x09^ aPackage transport namespace",
messageSends: ["namespace", "transport"],
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
var $2,$1;
$2=_st(_st($Smalltalk())._current())._amdRequire();
if(($receiver = $2) == nil || $receiver == null){
$1=self._error_("AMD loader not present");
} else {
var require;
require=$receiver;
$1=_st(_st(require)._basicAt_("toUrl"))._value_(aString);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"toUrl:",{aString:aString},smalltalk.AmdPackageHandler)})},
args: ["aString"],
source: "toUrl: aString\x0a\x09^ Smalltalk current amdRequire\x0a\x09\x09ifNil: [ self error: 'AMD loader not present' ]\x0a\x09\x09ifNotNil: [ :require | (require basicAt: 'toUrl') value: aString ]",
messageSends: ["ifNil:ifNotNil:", "amdRequire", "current", "error:", "value:", "basicAt:"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.AmdPackageHandler);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultNamespace",
category: 'commit paths',
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Smalltalk())._current())._defaultAmdNamespace();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultNamespace",{},smalltalk.AmdPackageHandler.klass)})},
args: [],
source: "defaultNamespace\x0a\x09^ Smalltalk current defaultAmdNamespace",
messageSends: ["defaultAmdNamespace", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.AmdPackageHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultNamespace:",
category: 'commit paths',
fn: function (aString){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($Smalltalk())._current())._defaultAmdNamespace_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"defaultNamespace:",{aString:aString},smalltalk.AmdPackageHandler.klass)})},
args: ["aString"],
source: "defaultNamespace: aString\x0a\x09Smalltalk current defaultAmdNamespace: aString",
messageSends: ["defaultAmdNamespace:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.AmdPackageHandler.klass);


smalltalk.addClass('PackageTransport', smalltalk.Object, ['package'], 'Importer-Exporter');
smalltalk.PackageTransport.comment="I represent the transport mechanism used to commit a package.\x0a\x0aMy concrete subclasses have a `#handler` to which committing is delegated.";
smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["type".__minus_gt(self._type())]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},smalltalk.PackageTransport)})},
args: [],
source: "asJSON\x0a\x09^ #{ 'type' -> self type }",
messageSends: ["->", "type"],
referencedClasses: []
}),
smalltalk.PackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "commit",
category: 'committing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._commitHandler())._commit_(self._package());
return self}, function($ctx1) {$ctx1.fill(self,"commit",{},smalltalk.PackageTransport)})},
args: [],
source: "commit\x0a\x09self commitHandler commit: self package",
messageSends: ["commit:", "commitHandler", "package"],
referencedClasses: []
}),
smalltalk.PackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "commitHandler",
category: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._commitHandlerClass())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"commitHandler",{},smalltalk.PackageTransport)})},
args: [],
source: "commitHandler\x0a\x09^ self commitHandlerClass new",
messageSends: ["new", "commitHandlerClass"],
referencedClasses: []
}),
smalltalk.PackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "commitHandlerClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"commitHandlerClass",{},smalltalk.PackageTransport)})},
args: [],
source: "commitHandlerClass\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.PackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "definition",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "";
}, function($ctx1) {$ctx1.fill(self,"definition",{},smalltalk.PackageTransport)})},
args: [],
source: "definition\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
smalltalk.PackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "package",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@package"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"package",{},smalltalk.PackageTransport)})},
args: [],
source: "package\x0a\x09^ package",
messageSends: [],
referencedClasses: []
}),
smalltalk.PackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "package:",
category: 'accessing',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@package"]=aPackage;
return self}, function($ctx1) {$ctx1.fill(self,"package:",{aPackage:aPackage},smalltalk.PackageTransport)})},
args: ["aPackage"],
source: "package: aPackage\x0a\x09package := aPackage",
messageSends: [],
referencedClasses: []
}),
smalltalk.PackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "setupFromJson:",
category: 'initialization',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"setupFromJson:",{anObject:anObject},smalltalk.PackageTransport)})},
args: ["anObject"],
source: "setupFromJson: anObject\x0a\x09\x22no op. override if needed in subclasses\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.PackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "type",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._type();
return $1;
}, function($ctx1) {$ctx1.fill(self,"type",{},smalltalk.PackageTransport)})},
args: [],
source: "type\x0a\x09^ self class type",
messageSends: ["type", "class"],
referencedClasses: []
}),
smalltalk.PackageTransport);


smalltalk.PackageTransport.klass.iVarNames = ['registry'];
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
}, function($ctx1) {$ctx1.fill(self,"classRegisteredFor:",{aString:aString},smalltalk.PackageTransport.klass)})},
args: ["aString"],
source: "classRegisteredFor: aString\x0a\x09^ registry at: aString",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.PackageTransport.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultType",
category: 'accessing',
fn: function (){
var self=this;
function $AmdPackageTransport(){return smalltalk.AmdPackageTransport||(typeof AmdPackageTransport=="undefined"?nil:AmdPackageTransport)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($AmdPackageTransport())._type();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultType",{},smalltalk.PackageTransport.klass)})},
args: [],
source: "defaultType\x0a\x09^ AmdPackageTransport type",
messageSends: ["type"],
referencedClasses: ["AmdPackageTransport"]
}),
smalltalk.PackageTransport.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "for:",
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._classRegisteredFor_(aString))._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"for:",{aString:aString},smalltalk.PackageTransport.klass)})},
args: ["aString"],
source: "for: aString\x0a\x09^ (self classRegisteredFor: aString) new",
messageSends: ["new", "classRegisteredFor:"],
referencedClasses: []
}),
smalltalk.PackageTransport.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromJson:",
category: 'instance creation',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
if(($receiver = anObject) == nil || $receiver == null){
$1=self._for_(self._defaultType());
$ctx1.sendIdx["for:"]=1;
return $1;
} else {
anObject;
};
$3=self._for_(_st(anObject)._type());
_st($3)._setupFromJson_(anObject);
$4=_st($3)._yourself();
$2=$4;
return $2;
}, function($ctx1) {$ctx1.fill(self,"fromJson:",{anObject:anObject},smalltalk.PackageTransport.klass)})},
args: ["anObject"],
source: "fromJson: anObject\x0a\x09anObject ifNil: [ ^ self for: self defaultType ].\x0a\x09\x0a\x09^ (self for: anObject type)\x0a\x09\x09setupFromJson: anObject;\x0a\x09\x09yourself",
messageSends: ["ifNil:", "for:", "defaultType", "setupFromJson:", "type", "yourself"],
referencedClasses: []
}),
smalltalk.PackageTransport.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.PackageTransport.klass.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@registry"]=smalltalk.HashedCollection._from_([]);
self._register();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.PackageTransport.klass)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09registry := #{}.\x0a\x09self register",
messageSends: ["initialize", "register"],
referencedClasses: []
}),
smalltalk.PackageTransport.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "register",
category: 'registration',
fn: function (){
var self=this;
function $PackageTransport(){return smalltalk.PackageTransport||(typeof PackageTransport=="undefined"?nil:PackageTransport)}
return smalltalk.withContext(function($ctx1) { 
_st($PackageTransport())._register_(self);
return self}, function($ctx1) {$ctx1.fill(self,"register",{},smalltalk.PackageTransport.klass)})},
args: [],
source: "register\x0a\x09PackageTransport register: self",
messageSends: ["register:"],
referencedClasses: ["PackageTransport"]
}),
smalltalk.PackageTransport.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "register:",
category: 'registration',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aClass)._type();
$ctx1.sendIdx["type"]=1;
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
_st(self["@registry"])._at_put_(_st(aClass)._type(),aClass);
};
return self}, function($ctx1) {$ctx1.fill(self,"register:",{aClass:aClass},smalltalk.PackageTransport.klass)})},
args: ["aClass"],
source: "register: aClass\x0a\x09aClass type ifNotNil: [\x0a\x09\x09registry at: aClass type put: aClass ]",
messageSends: ["ifNotNil:", "type", "at:put:"],
referencedClasses: []
}),
smalltalk.PackageTransport.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "type",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return nil;
}, function($ctx1) {$ctx1.fill(self,"type",{},smalltalk.PackageTransport.klass)})},
args: [],
source: "type\x0a\x09\x22Override in subclasses\x22\x0a\x09^ nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.PackageTransport.klass);


smalltalk.addClass('AmdPackageTransport', smalltalk.PackageTransport, ['namespace'], 'Importer-Exporter');
smalltalk.AmdPackageTransport.comment="I am the default transport for committing packages.\x0a\x0aSee `AmdExporter` and `AmdPackageHandler`.";
smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=smalltalk.AmdPackageTransport.superclass.fn.prototype._asJSON.apply(_st(self), []);
_st($2)._at_put_("amdNamespace",self._namespace());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},smalltalk.AmdPackageTransport)})},
args: [],
source: "asJSON\x0a\x09^ super asJSON\x0a\x09\x09at: 'amdNamespace' put: self namespace;\x0a\x09\x09yourself",
messageSends: ["at:put:", "asJSON", "namespace", "yourself"],
referencedClasses: []
}),
smalltalk.AmdPackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "commitHandlerClass",
category: 'accessing',
fn: function (){
var self=this;
function $AmdPackageHandler(){return smalltalk.AmdPackageHandler||(typeof AmdPackageHandler=="undefined"?nil:AmdPackageHandler)}
return smalltalk.withContext(function($ctx1) { 
return $AmdPackageHandler();
}, function($ctx1) {$ctx1.fill(self,"commitHandlerClass",{},smalltalk.AmdPackageTransport)})},
args: [],
source: "commitHandlerClass\x0a\x09^ AmdPackageHandler",
messageSends: [],
referencedClasses: ["AmdPackageHandler"]
}),
smalltalk.AmdPackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultNamespace",
category: 'defaults',
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Smalltalk())._current())._defaultAmdNamespace();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultNamespace",{},smalltalk.AmdPackageTransport)})},
args: [],
source: "defaultNamespace\x0a\x09^ Smalltalk current defaultAmdNamespace",
messageSends: ["defaultAmdNamespace", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.AmdPackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "definition",
category: 'accessing',
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$1=_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
_st(stream)._nextPutAll_(_st(self._class())._name());
$ctx2.sendIdx["nextPutAll:"]=1;
_st(stream)._nextPutAll_(" namespace: ");
$ctx2.sendIdx["nextPutAll:"]=2;
$3=_st("'".__comma(self._namespace())).__comma("'");
$ctx2.sendIdx[","]=1;
$2=_st(stream)._nextPutAll_($3);
return $2;
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"definition",{},smalltalk.AmdPackageTransport)})},
args: [],
source: "definition\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09stream \x0a\x09\x09\x09nextPutAll: self class name;\x0a\x09\x09\x09nextPutAll: ' namespace: ';\x0a\x09\x09\x09nextPutAll: '''', self namespace, '''' ]",
messageSends: ["streamContents:", "nextPutAll:", "name", "class", ",", "namespace"],
referencedClasses: ["String"]
}),
smalltalk.AmdPackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "namespace",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@namespace"];
if(($receiver = $2) == nil || $receiver == null){
$1=self._defaultNamespace();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"namespace",{},smalltalk.AmdPackageTransport)})},
args: [],
source: "namespace\x0a\x09^ namespace ifNil: [ self defaultNamespace ]",
messageSends: ["ifNil:", "defaultNamespace"],
referencedClasses: []
}),
smalltalk.AmdPackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "namespace:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@namespace"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"namespace:",{aString:aString},smalltalk.AmdPackageTransport)})},
args: ["aString"],
source: "namespace: aString\x0a\x09namespace := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.AmdPackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.AmdPackageTransport.superclass.fn.prototype._printOn_.apply(_st(self), [aStream]);
_st(aStream)._nextPutAll_(" (AMD Namespace: ");
$ctx1.sendIdx["nextPutAll:"]=1;
_st(aStream)._nextPutAll_(self._namespace());
$ctx1.sendIdx["nextPutAll:"]=2;
$1=_st(aStream)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.AmdPackageTransport)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09aStream\x0a\x09\x09nextPutAll: ' (AMD Namespace: ';\x0a\x09\x09nextPutAll: self namespace;\x0a\x09\x09nextPutAll: ')'",
messageSends: ["printOn:", "nextPutAll:", "namespace"],
referencedClasses: []
}),
smalltalk.AmdPackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "setupFromJson:",
category: 'initialization',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._namespace_(_st(anObject)._at_("amdNamespace"));
return self}, function($ctx1) {$ctx1.fill(self,"setupFromJson:",{anObject:anObject},smalltalk.AmdPackageTransport)})},
args: ["anObject"],
source: "setupFromJson: anObject\x0a\x09self namespace: (anObject at: 'amdNamespace')",
messageSends: ["namespace:", "at:"],
referencedClasses: []
}),
smalltalk.AmdPackageTransport);


smalltalk.addMethod(
smalltalk.method({
selector: "namespace:",
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._namespace_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"namespace:",{aString:aString},smalltalk.AmdPackageTransport.klass)})},
args: ["aString"],
source: "namespace: aString\x0a\x09^ self new\x0a\x09\x09namespace: aString;\x0a\x09\x09yourself",
messageSends: ["namespace:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.AmdPackageTransport.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "type",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "amd";
}, function($ctx1) {$ctx1.fill(self,"type",{},smalltalk.AmdPackageTransport.klass)})},
args: [],
source: "type\x0a\x09^ 'amd'",
messageSends: [],
referencedClasses: []
}),
smalltalk.AmdPackageTransport.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "commit",
category: '*Importer-Exporter',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._transport())._commit();
return $1;
}, function($ctx1) {$ctx1.fill(self,"commit",{},smalltalk.Package)})},
args: [],
source: "commit\x0a\x09^ self transport commit",
messageSends: ["commit", "transport"],
referencedClasses: []
}),
smalltalk.Package);

});
