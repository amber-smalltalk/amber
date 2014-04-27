define("amber_core/Kernel-ImportExport", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects", "amber_core/Kernel-Infrastructure"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Kernel-ImportExport');
smalltalk.packages["Kernel-ImportExport"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('AbstractExporter', globals.Object, [], 'Kernel-ImportExport');
globals.AbstractExporter.comment="I am an abstract exporter for Amber source code.\x0a\x0a## API\x0a\x0aUse `#exportPackage:on:` to export a given package on a Stream.";
smalltalk.addMethod(
smalltalk.method({
selector: "chunkEscape:",
protocol: 'convenience',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aString)._replace_with_("!","!!"))._trimBoth();
return $1;
}, function($ctx1) {$ctx1.fill(self,"chunkEscape:",{aString:aString},globals.AbstractExporter)})},
args: ["aString"],
source: "chunkEscape: aString\x0a\x09\x22Replace all occurrences of ! with !! and trim at both ends.\x22\x0a\x0a\x09^ (aString replace: '!' with: '!!') trimBoth",
messageSends: ["trimBoth", "replace:with:"],
referencedClasses: []
}),
globals.AbstractExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "classNameFor:",
protocol: 'convenience',
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
}, function($ctx1) {$ctx1.fill(self,"classNameFor:",{aClass:aClass},globals.AbstractExporter)})},
args: ["aClass"],
source: "classNameFor: aClass\x0a\x09^ aClass isMetaclass\x0a\x09\x09ifTrue: [ aClass instanceClass name, ' class' ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09aClass isNil\x0a\x09\x09\x09\x09ifTrue: [ 'nil' ]\x0a\x09\x09\x09\x09ifFalse: [ aClass name ] ]",
messageSends: ["ifTrue:ifFalse:", "isMetaclass", ",", "name", "instanceClass", "isNil"],
referencedClasses: []
}),
globals.AbstractExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackage:on:",
protocol: 'output',
fn: function (aPackage,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"exportPackage:on:",{aPackage:aPackage,aStream:aStream},globals.AbstractExporter)})},
args: ["aPackage", "aStream"],
source: "exportPackage: aPackage on: aStream\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.AbstractExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "extensionMethodsOfPackage:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
var result;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
result=_st($OrderedCollection())._new();
_st(self._extensionProtocolsOfPackage_(aPackage))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(result)._addAll_(_st(each)._methods());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$1=result;
return $1;
}, function($ctx1) {$ctx1.fill(self,"extensionMethodsOfPackage:",{aPackage:aPackage,result:result},globals.AbstractExporter)})},
args: ["aPackage"],
source: "extensionMethodsOfPackage: aPackage\x0a\x09| result |\x0a\x09\x0a\x09result := OrderedCollection new.\x0a\x09\x0a\x09(self extensionProtocolsOfPackage: aPackage) do: [ :each |\x0a\x09\x09result addAll: each methods ].\x0a\x09\x09\x0a\x09^ result",
messageSends: ["new", "do:", "extensionProtocolsOfPackage:", "addAll:", "methods"],
referencedClasses: ["OrderedCollection"]
}),
globals.AbstractExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "extensionProtocolsOfPackage:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
var extensionName,result;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $ExportMethodProtocol(){return globals.ExportMethodProtocol||(typeof ExportMethodProtocol=="undefined"?nil:ExportMethodProtocol)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(aPackage)._name();
$ctx1.sendIdx["name"]=1;
extensionName="*".__comma($1);
result=_st($OrderedCollection())._new();
_st(_st(_st(_st($Smalltalk())._classes())._asArray())._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) {
$2=_st(a)._name();
$ctx2.sendIdx["name"]=2;
return _st($2).__lt(_st(b)._name());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)})})))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st([each,_st(each)._class()])._do_((function(behavior){
return smalltalk.withContext(function($ctx3) {
$3=_st(_st(behavior)._protocols())._includes_(extensionName);
if(smalltalk.assert($3)){
return _st(result)._add_(_st($ExportMethodProtocol())._name_theClass_(extensionName,behavior));
};
}, function($ctx3) {$ctx3.fillBlock({behavior:behavior},$ctx2,3)})}));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
$ctx1.sendIdx["do:"]=1;
$4=result;
return $4;
}, function($ctx1) {$ctx1.fill(self,"extensionProtocolsOfPackage:",{aPackage:aPackage,extensionName:extensionName,result:result},globals.AbstractExporter)})},
args: ["aPackage"],
source: "extensionProtocolsOfPackage: aPackage\x0a\x09| extensionName result |\x0a\x09\x0a\x09extensionName := '*', aPackage name.\x0a\x09result := OrderedCollection new.\x0a\x09\x0a\x09\x22The classes must be loaded since it is extensions only.\x0a\x09Therefore topological sorting (dependency resolution) does not matter here.\x0a\x09Not sorting topologically improves the speed by a number of magnitude.\x0a\x09\x0a\x09Not to shuffle diffs, classes are sorted by their name.\x22\x0a\x09\x0a\x09(Smalltalk classes asArray sorted: [ :a :b | a name < b name ]) do: [ :each |\x0a\x09\x09{each. each class} do: [ :behavior |\x0a\x09\x09\x09(behavior protocols includes: extensionName) ifTrue: [\x0a\x09\x09\x09\x09result add: (ExportMethodProtocol name: extensionName theClass: behavior) ] ] ].\x0a\x0a\x09^ result",
messageSends: [",", "name", "new", "do:", "sorted:", "asArray", "classes", "<", "class", "ifTrue:", "includes:", "protocols", "add:", "name:theClass:"],
referencedClasses: ["OrderedCollection", "Smalltalk", "ExportMethodProtocol"]
}),
globals.AbstractExporter);



smalltalk.addClass('ChunkExporter', globals.AbstractExporter, [], 'Kernel-ImportExport');
globals.ChunkExporter.comment="I am an exporter dedicated to outputting Amber source code in the classic Smalltalk chunk format.\x0a\x0aI do not output any compiled code.";
smalltalk.addMethod(
smalltalk.method({
selector: "exportCategoryEpilogueOf:on:",
protocol: 'output',
fn: function (aCategory,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aStream)._nextPutAll_(" !");
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=1;
$1=_st(aStream)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportCategoryEpilogueOf:on:",{aCategory:aCategory,aStream:aStream},globals.ChunkExporter)})},
args: ["aCategory", "aStream"],
source: "exportCategoryEpilogueOf: aCategory on: aStream\x0a\x09aStream nextPutAll: ' !'; lf; lf",
messageSends: ["nextPutAll:", "lf"],
referencedClasses: []
}),
globals.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportCategoryPrologueOf:on:",
protocol: 'output',
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
return self}, function($ctx1) {$ctx1.fill(self,"exportCategoryPrologueOf:on:",{aCategory:aCategory,aStream:aStream},globals.ChunkExporter)})},
args: ["aCategory", "aStream"],
source: "exportCategoryPrologueOf: aCategory on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: '!', (self classNameFor: aCategory theClass);\x0a\x09\x09nextPutAll: ' methodsFor: ''', aCategory name, '''!'",
messageSends: ["nextPutAll:", ",", "classNameFor:", "theClass", "name"],
referencedClasses: []
}),
globals.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportDefinitionOf:on:",
protocol: 'output',
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
return self}, function($ctx1) {$ctx1.fill(self,"exportDefinitionOf:on:",{aClass:aClass,aStream:aStream},globals.ChunkExporter)})},
args: ["aClass", "aStream"],
source: "exportDefinitionOf: aClass on: aStream\x0a\x09\x22Chunk format.\x22\x0a\x0a\x09aStream\x0a\x09\x09nextPutAll: (self classNameFor: aClass superclass);\x0a\x09\x09nextPutAll: ' subclass: #', (self classNameFor: aClass); lf;\x0a\x09\x09tab; nextPutAll: 'instanceVariableNames: '''.\x0a\x09aClass instanceVariableNames\x0a\x09\x09do: [ :each | aStream nextPutAll: each ]\x0a\x09\x09separatedBy: [ aStream nextPutAll: ' ' ].\x0a\x09aStream\x0a\x09\x09nextPutAll: ''''; lf;\x0a\x09\x09tab; nextPutAll: 'package: ''', aClass category, '''!'; lf.\x0a\x09aClass comment notEmpty ifTrue: [\x0a\x09\x09aStream\x0a\x09\x09nextPutAll: '!', (self classNameFor: aClass), ' commentStamp!';lf;\x0a\x09\x09nextPutAll: (self chunkEscape: aClass comment), '!';lf ].\x0a\x09aStream lf",
messageSends: ["nextPutAll:", "classNameFor:", "superclass", ",", "lf", "tab", "do:separatedBy:", "instanceVariableNames", "category", "ifTrue:", "notEmpty", "comment", "chunkEscape:"],
referencedClasses: []
}),
globals.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportMetaDefinitionOf:on:",
protocol: 'output',
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
return self}, function($ctx1) {$ctx1.fill(self,"exportMetaDefinitionOf:on:",{aClass:aClass,aStream:aStream},globals.ChunkExporter)})},
args: ["aClass", "aStream"],
source: "exportMetaDefinitionOf: aClass on: aStream\x0a\x0a\x09aClass class instanceVariableNames isEmpty ifFalse: [\x0a\x09\x09aStream\x0a\x09\x09\x09nextPutAll: (self classNameFor: aClass class);\x0a\x09\x09\x09nextPutAll: ' instanceVariableNames: '''.\x0a\x09\x09aClass class instanceVariableNames\x0a\x09\x09\x09do: [ :each | aStream nextPutAll: each ]\x0a\x09\x09\x09separatedBy: [ aStream nextPutAll: ' ' ].\x0a\x09\x09aStream\x0a\x09\x09\x09nextPutAll: '''!'; lf; lf ]",
messageSends: ["ifFalse:", "isEmpty", "instanceVariableNames", "class", "nextPutAll:", "classNameFor:", "do:separatedBy:", "lf"],
referencedClasses: []
}),
globals.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportMethod:on:",
protocol: 'output',
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
return self}, function($ctx1) {$ctx1.fill(self,"exportMethod:on:",{aMethod:aMethod,aStream:aStream},globals.ChunkExporter)})},
args: ["aMethod", "aStream"],
source: "exportMethod: aMethod on: aStream\x0a\x09aStream\x0a\x09\x09lf; lf; nextPutAll: (self chunkEscape: aMethod source); lf;\x0a\x09\x09nextPutAll: '!'",
messageSends: ["lf", "nextPutAll:", "chunkEscape:", "source"],
referencedClasses: []
}),
globals.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackage:on:",
protocol: 'output',
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
return self}, function($ctx1) {$ctx1.fill(self,"exportPackage:on:",{aPackage:aPackage,aStream:aStream},globals.ChunkExporter)})},
args: ["aPackage", "aStream"],
source: "exportPackage: aPackage on: aStream\x0a\x0a\x09self exportPackageDefinitionOf: aPackage on: aStream.\x0a\x09\x0a\x09aPackage sortedClasses do: [ :each |\x0a\x09\x09self exportDefinitionOf: each on: aStream.\x0a\x09\x09\x0a\x09\x09self \x0a\x09\x09\x09exportProtocols: (self ownMethodProtocolsOfClass: each)\x0a\x09\x09\x09on: aStream.\x0a\x09\x09\x09\x0a\x09\x09self exportMetaDefinitionOf: each on: aStream.\x0a\x09\x09\x0a\x09\x09self \x0a\x09\x09\x09exportProtocols: (self ownMethodProtocolsOfClass: each class)\x0a\x09\x09\x09on: aStream ].\x0a\x09\x09\x09\x0a\x09self \x0a\x09\x09exportProtocols: (self extensionProtocolsOfPackage: aPackage)\x0a\x09\x09on: aStream",
messageSends: ["exportPackageDefinitionOf:on:", "do:", "sortedClasses", "exportDefinitionOf:on:", "exportProtocols:on:", "ownMethodProtocolsOfClass:", "exportMetaDefinitionOf:on:", "class", "extensionProtocolsOfPackage:"],
referencedClasses: []
}),
globals.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackageDefinitionOf:on:",
protocol: 'output',
fn: function (aPackage,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st("Smalltalk createPackage: '".__comma(_st(aPackage)._name())).__comma("'!");
$ctx1.sendIdx[","]=1;
_st(aStream)._nextPutAll_($1);
$2=_st(aStream)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportPackageDefinitionOf:on:",{aPackage:aPackage,aStream:aStream},globals.ChunkExporter)})},
args: ["aPackage", "aStream"],
source: "exportPackageDefinitionOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: 'Smalltalk createPackage: ''', aPackage name, '''!';\x0a\x09\x09lf",
messageSends: ["nextPutAll:", ",", "name", "lf"],
referencedClasses: []
}),
globals.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportProtocol:on:",
protocol: 'output',
fn: function (aProtocol,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._exportProtocolPrologueOf_on_(aProtocol,aStream);
_st(_st(aProtocol)._methods())._do_((function(method){
return smalltalk.withContext(function($ctx2) {
return self._exportMethod_on_(method,aStream);
}, function($ctx2) {$ctx2.fillBlock({method:method},$ctx1,1)})}));
self._exportProtocolEpilogueOf_on_(aProtocol,aStream);
return self}, function($ctx1) {$ctx1.fill(self,"exportProtocol:on:",{aProtocol:aProtocol,aStream:aStream},globals.ChunkExporter)})},
args: ["aProtocol", "aStream"],
source: "exportProtocol: aProtocol on: aStream\x0a\x09self exportProtocolPrologueOf: aProtocol on: aStream.\x0a\x09aProtocol methods do: [ :method | \x0a\x09\x09self exportMethod: method on: aStream ].\x0a\x09self exportProtocolEpilogueOf: aProtocol on: aStream",
messageSends: ["exportProtocolPrologueOf:on:", "do:", "methods", "exportMethod:on:", "exportProtocolEpilogueOf:on:"],
referencedClasses: []
}),
globals.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportProtocolEpilogueOf:on:",
protocol: 'output',
fn: function (aProtocol,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aStream)._nextPutAll_(" !");
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=1;
$1=_st(aStream)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportProtocolEpilogueOf:on:",{aProtocol:aProtocol,aStream:aStream},globals.ChunkExporter)})},
args: ["aProtocol", "aStream"],
source: "exportProtocolEpilogueOf: aProtocol on: aStream\x0a\x09aStream nextPutAll: ' !'; lf; lf",
messageSends: ["nextPutAll:", "lf"],
referencedClasses: []
}),
globals.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportProtocolPrologueOf:on:",
protocol: 'output',
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
return self}, function($ctx1) {$ctx1.fill(self,"exportProtocolPrologueOf:on:",{aProtocol:aProtocol,aStream:aStream},globals.ChunkExporter)})},
args: ["aProtocol", "aStream"],
source: "exportProtocolPrologueOf: aProtocol on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: '!', (self classNameFor: aProtocol theClass);\x0a\x09\x09nextPutAll: ' methodsFor: ''', aProtocol name, '''!'",
messageSends: ["nextPutAll:", ",", "classNameFor:", "theClass", "name"],
referencedClasses: []
}),
globals.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportProtocols:on:",
protocol: 'output',
fn: function (aCollection,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._exportProtocol_on_(each,aStream);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"exportProtocols:on:",{aCollection:aCollection,aStream:aStream},globals.ChunkExporter)})},
args: ["aCollection", "aStream"],
source: "exportProtocols: aCollection on: aStream\x0a\x09aCollection do: [ :each |\x0a\x09\x09self exportProtocol: each on: aStream ]",
messageSends: ["do:", "exportProtocol:on:"],
referencedClasses: []
}),
globals.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "extensionCategoriesOfPackage:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
var name,map,result;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $Package(){return globals.Package||(typeof Package=="undefined"?nil:Package)}
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $MethodCategory(){return globals.MethodCategory||(typeof MethodCategory=="undefined"?nil:MethodCategory)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
name=_st(aPackage)._name();
result=_st($OrderedCollection())._new();
$ctx1.sendIdx["new"]=1;
_st(_st($Package())._sortedClasses_(_st($Smalltalk())._classes()))._do_((function(each){
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
}, function($ctx1) {$ctx1.fill(self,"extensionCategoriesOfPackage:",{aPackage:aPackage,name:name,map:map,result:result},globals.ChunkExporter)})},
args: ["aPackage"],
source: "extensionCategoriesOfPackage: aPackage\x0a\x09\x22Issue #143: sort protocol alphabetically\x22\x0a\x0a\x09| name map result |\x0a\x09name := aPackage name.\x0a\x09result := OrderedCollection new.\x0a\x09(Package sortedClasses: Smalltalk classes) do: [ :each |\x0a\x09\x09{each. each class} do: [ :aClass |\x0a\x09\x09\x09map := Dictionary new.\x0a\x09\x09\x09aClass protocolsDo: [ :category :methods |\x0a\x09\x09\x09\x09category = ('*', name) ifTrue: [ map at: category put: methods ] ].\x0a\x09\x09\x09result addAll: ((map keys sorted: [ :a :b | a <= b ]) collect: [ :category |\x0a\x09\x09\x09\x09MethodCategory name: category theClass: aClass methods: (map at: category) ]) ] ].\x0a\x09^ result",
messageSends: ["name", "new", "do:", "sortedClasses:", "classes", "class", "protocolsDo:", "ifTrue:", "=", ",", "at:put:", "addAll:", "collect:", "sorted:", "keys", "<=", "name:theClass:methods:", "at:"],
referencedClasses: ["OrderedCollection", "Package", "Smalltalk", "Dictionary", "MethodCategory"]
}),
globals.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "ownCategoriesOfClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
var map;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $MethodCategory(){return globals.MethodCategory||(typeof MethodCategory=="undefined"?nil:MethodCategory)}
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
}, function($ctx1) {$ctx1.fill(self,"ownCategoriesOfClass:",{aClass:aClass,map:map},globals.ChunkExporter)})},
args: ["aClass"],
source: "ownCategoriesOfClass: aClass\x0a\x09\x22Answer the protocols of aClass that are not package extensions\x22\x0a\x09\x0a\x09\x22Issue #143: sort protocol alphabetically\x22\x0a\x0a\x09| map |\x0a\x09map := Dictionary new.\x0a\x09aClass protocolsDo: [ :each :methods |\x0a\x09\x09(each match: '^\x5c*') ifFalse: [ map at: each put: methods ] ].\x0a\x09^ (map keys sorted: [ :a :b | a <= b ]) collect: [ :each |\x0a\x09\x09MethodCategory name: each theClass: aClass methods: (map at: each) ]",
messageSends: ["new", "protocolsDo:", "ifFalse:", "match:", "at:put:", "collect:", "sorted:", "keys", "<=", "name:theClass:methods:", "at:"],
referencedClasses: ["Dictionary", "MethodCategory"]
}),
globals.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "ownCategoriesOfMetaClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._ownCategoriesOfClass_(_st(aClass)._class());
return $1;
}, function($ctx1) {$ctx1.fill(self,"ownCategoriesOfMetaClass:",{aClass:aClass},globals.ChunkExporter)})},
args: ["aClass"],
source: "ownCategoriesOfMetaClass: aClass\x0a\x09\x22Issue #143: sort protocol alphabetically\x22\x0a\x0a\x09^ self ownCategoriesOfClass: aClass class",
messageSends: ["ownCategoriesOfClass:", "class"],
referencedClasses: []
}),
globals.ChunkExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "ownMethodProtocolsOfClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
function $ExportMethodProtocol(){return globals.ExportMethodProtocol||(typeof ExportMethodProtocol=="undefined"?nil:ExportMethodProtocol)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aClass)._ownProtocols())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st($ExportMethodProtocol())._name_theClass_(each,aClass);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ownMethodProtocolsOfClass:",{aClass:aClass},globals.ChunkExporter)})},
args: ["aClass"],
source: "ownMethodProtocolsOfClass: aClass\x0a\x09\x22Answer a collection of ExportMethodProtocol object of aClass that are not package extensions\x22\x0a\x09\x0a\x09^ aClass ownProtocols collect: [ :each |\x0a\x09\x09ExportMethodProtocol name: each theClass: aClass ]",
messageSends: ["collect:", "ownProtocols", "name:theClass:"],
referencedClasses: ["ExportMethodProtocol"]
}),
globals.ChunkExporter);



smalltalk.addClass('Exporter', globals.AbstractExporter, [], 'Kernel-ImportExport');
globals.Exporter.comment="I am responsible for outputting Amber code into a JavaScript string.\x0a\x0aThe generated output is enough to reconstruct the exported data, including Smalltalk source code and other metadata.\x0a\x0a## Use case\x0a\x0aI am typically used to save code outside of the Amber runtime (committing to disk, etc.).";
smalltalk.addMethod(
smalltalk.method({
selector: "classNameFor:",
protocol: 'convenience',
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
}, function($ctx1) {$ctx1.fill(self,"classNameFor:",{aClass:aClass},globals.Exporter)})},
args: ["aClass"],
source: "classNameFor: aClass\x0a\x09^ aClass isMetaclass\x0a\x09\x09ifTrue: [ aClass instanceClass name, '.klass' ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09aClass isNil\x0a\x09\x09\x09\x09ifTrue: [ 'nil' ]\x0a\x09\x09\x09\x09ifFalse: [ aClass name ] ]",
messageSends: ["ifTrue:ifFalse:", "isMetaclass", ",", "name", "instanceClass", "isNil"],
referencedClasses: []
}),
globals.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportDefinitionOf:on:",
protocol: 'output',
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
$4="globals.".__comma($5);
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
_st(aStream)._nextPutAll_("globals.");
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
return self}, function($ctx1) {$ctx1.fill(self,"exportDefinitionOf:on:",{aClass:aClass,aStream:aStream},globals.Exporter)})},
args: ["aClass", "aStream"],
source: "exportDefinitionOf: aClass on: aStream\x0a\x09aStream\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: 'smalltalk.addClass(';\x0a\x09\x09nextPutAll: '''', (self classNameFor: aClass), ''', ';\x0a\x09\x09nextPutAll: 'globals.', (self classNameFor: aClass superclass);\x0a\x09\x09nextPutAll: ', ['.\x0a\x09aClass instanceVariableNames\x0a\x09\x09do: [ :each | aStream nextPutAll: '''', each, '''' ]\x0a\x09\x09separatedBy: [ aStream nextPutAll: ', ' ].\x0a\x09aStream\x0a\x09\x09nextPutAll: '], ''';\x0a\x09\x09nextPutAll: aClass category, '''';\x0a\x09\x09nextPutAll: ');'.\x0a\x09aClass comment notEmpty ifTrue: [\x0a\x09\x09aStream\x0a\x09\x09\x09lf;\x0a\x09\x09nextPutAll: 'globals.';\x0a\x09\x09nextPutAll: (self classNameFor: aClass);\x0a\x09\x09nextPutAll: '.comment=';\x0a\x09\x09nextPutAll: aClass comment asJavascript;\x0a\x09\x09nextPutAll: ';' ].\x0a\x09aStream lf",
messageSends: ["lf", "nextPutAll:", ",", "classNameFor:", "superclass", "do:separatedBy:", "instanceVariableNames", "category", "ifTrue:", "notEmpty", "comment", "asJavascript"],
referencedClasses: []
}),
globals.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportMetaDefinitionOf:on:",
protocol: 'output',
fn: function (aClass,aStream){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
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
$4="globals.".__comma($5);
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
return self}, function($ctx1) {$ctx1.fill(self,"exportMetaDefinitionOf:on:",{aClass:aClass,aStream:aStream},globals.Exporter)})},
args: ["aClass", "aStream"],
source: "exportMetaDefinitionOf: aClass on: aStream\x0a\x09aStream lf.\x0a\x09aClass class instanceVariableNames isEmpty ifFalse: [\x0a\x09\x09aStream\x0a\x09\x09nextPutAll: 'globals.', (self classNameFor: aClass class);\x0a\x09\x09nextPutAll: '.iVarNames = ['.\x0a\x09\x09aClass class instanceVariableNames\x0a\x09\x09do: [ :each | aStream nextPutAll: '''', each, '''' ]\x0a\x09\x09separatedBy: [ aStream nextPutAll: ',' ].\x0a\x09\x09aStream nextPutAll: '];', String lf ]",
messageSends: ["lf", "ifFalse:", "isEmpty", "instanceVariableNames", "class", "nextPutAll:", ",", "classNameFor:", "do:separatedBy:"],
referencedClasses: ["String"]
}),
globals.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportMethod:on:",
protocol: 'output',
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
$5="protocol: '".__comma(_st(aMethod)._protocol());
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
_st(aStream)._nextPutAll_("globals.".__comma(self._classNameFor_(_st(aMethod)._methodClass())));
$ctx1.sendIdx["nextPutAll:"]=11;
_st(aStream)._nextPutAll_(");");
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=11;
$19=_st(aStream)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportMethod:on:",{aMethod:aMethod,aStream:aStream},globals.Exporter)})},
args: ["aMethod", "aStream"],
source: "exportMethod: aMethod on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: 'smalltalk.addMethod(';lf;\x0a\x09\x09\x22nextPutAll: aMethod selector asSelector asJavascript, ',';lf;\x22\x0a\x09\x09nextPutAll: 'smalltalk.method({';lf;\x0a\x09\x09nextPutAll: 'selector: ', aMethod selector asJavascript, ',';lf;\x0a\x09\x09nextPutAll: 'protocol: ''', aMethod protocol, ''',';lf;\x0a\x09\x09nextPutAll: 'fn: ', aMethod fn compiledSource, ',';lf;\x0a\x09\x09nextPutAll: 'args: ', aMethod arguments asJavascript, ','; lf;\x0a\x09\x09nextPutAll: 'source: ', aMethod source asJavascript, ',';lf;\x0a\x09\x09nextPutAll: 'messageSends: ', aMethod messageSends asJavascript, ',';lf;\x0a\x09\x09nextPutAll: 'referencedClasses: ', aMethod referencedClasses asJavascript.\x0a\x09aStream\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: '}),';lf;\x0a\x09\x09nextPutAll: 'globals.', (self classNameFor: aMethod methodClass);\x0a\x09\x09nextPutAll: ');';lf;lf",
messageSends: ["nextPutAll:", "lf", ",", "asJavascript", "selector", "protocol", "compiledSource", "fn", "arguments", "source", "messageSends", "referencedClasses", "classNameFor:", "methodClass"],
referencedClasses: []
}),
globals.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackage:on:",
protocol: 'output',
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
return self}, function($ctx1) {$ctx1.fill(self,"exportPackage:on:",{aPackage:aPackage,aStream:aStream},globals.Exporter)})},
args: ["aPackage", "aStream"],
source: "exportPackage: aPackage on: aStream\x0a\x09\x0a\x09self \x0a\x09\x09exportPackagePrologueOf: aPackage on: aStream;\x0a\x09\x09exportPackageDefinitionOf: aPackage on: aStream;\x0a\x09\x09exportPackageTransportOf: aPackage on: aStream.\x0a\x09\x0a\x09aPackage sortedClasses do: [ :each |\x0a\x09\x09self exportDefinitionOf: each on: aStream.\x0a\x09\x09each ownMethods do: [ :method |\x0a\x09\x09\x09self exportMethod: method on: aStream ].\x0a\x09\x09\x09\x0a\x09\x09self exportMetaDefinitionOf: each on: aStream.\x0a\x09\x09each class ownMethods do: [ :method |\x0a\x09\x09\x09self exportMethod: method on: aStream ] ].\x0a\x09\x09\x09\x0a\x09(self extensionMethodsOfPackage: aPackage) do: [ :each |\x0a\x09\x09self exportMethod: each on: aStream ].\x0a\x09\x09\x0a\x09self exportPackageEpilogueOf: aPackage on: aStream",
messageSends: ["exportPackagePrologueOf:on:", "exportPackageDefinitionOf:on:", "exportPackageTransportOf:on:", "do:", "sortedClasses", "exportDefinitionOf:on:", "ownMethods", "exportMethod:on:", "exportMetaDefinitionOf:on:", "class", "extensionMethodsOfPackage:", "exportPackageEpilogueOf:on:"],
referencedClasses: []
}),
globals.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackageDefinitionOf:on:",
protocol: 'output',
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
return self}, function($ctx1) {$ctx1.fill(self,"exportPackageDefinitionOf:on:",{aPackage:aPackage,aStream:aStream},globals.Exporter)})},
args: ["aPackage", "aStream"],
source: "exportPackageDefinitionOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: 'smalltalk.addPackage(';\x0a\x09\x09nextPutAll: '''', aPackage name, ''');';\x0a\x09\x09lf",
messageSends: ["nextPutAll:", ",", "name", "lf"],
referencedClasses: []
}),
globals.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackageEpilogueOf:on:",
protocol: 'output',
fn: function (aPackage,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aStream)._nextPutAll_("})(global_smalltalk,global_nil,global__st);");
$1=_st(aStream)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportPackageEpilogueOf:on:",{aPackage:aPackage,aStream:aStream},globals.Exporter)})},
args: ["aPackage", "aStream"],
source: "exportPackageEpilogueOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: '})(global_smalltalk,global_nil,global__st);';\x0a\x09\x09lf",
messageSends: ["nextPutAll:", "lf"],
referencedClasses: []
}),
globals.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackagePrologueOf:on:",
protocol: 'output',
fn: function (aPackage,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aStream)._nextPutAll_("(function(smalltalk,nil,_st){");
$1=_st(aStream)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportPackagePrologueOf:on:",{aPackage:aPackage,aStream:aStream},globals.Exporter)})},
args: ["aPackage", "aStream"],
source: "exportPackagePrologueOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: '(function(smalltalk,nil,_st){';\x0a\x09\x09lf",
messageSends: ["nextPutAll:", "lf"],
referencedClasses: []
}),
globals.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackageTransportOf:on:",
protocol: 'output',
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
return self}, function($ctx1) {$ctx1.fill(self,"exportPackageTransportOf:on:",{aPackage:aPackage,aStream:aStream},globals.Exporter)})},
args: ["aPackage", "aStream"],
source: "exportPackageTransportOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: 'smalltalk.packages[';\x0a\x09\x09nextPutAll: aPackage name asJavascript;\x0a\x09\x09nextPutAll: '].transport = ';\x0a\x09\x09nextPutAll: aPackage transport asJSONString;\x0a\x09\x09nextPutAll: ';';\x0a\x09\x09lf",
messageSends: ["nextPutAll:", "asJavascript", "name", "asJSONString", "transport", "lf"],
referencedClasses: []
}),
globals.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "ownMethodsOfClass:",
protocol: 'accessing',
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
return _st(_st(each)._protocol())._match_("^\x5c*");
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ownMethodsOfClass:",{aClass:aClass},globals.Exporter)})},
args: ["aClass"],
source: "ownMethodsOfClass: aClass\x0a\x09\x22Issue #143: sort methods alphabetically\x22\x0a\x0a\x09^ ((aClass methodDictionary values) sorted: [ :a :b | a selector <= b selector ])\x0a\x09\x09reject: [ :each | (each protocol match: '^\x5c*') ]",
messageSends: ["reject:", "sorted:", "values", "methodDictionary", "<=", "selector", "match:", "protocol"],
referencedClasses: []
}),
globals.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "ownMethodsOfMetaClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._ownMethodsOfClass_(_st(aClass)._class());
return $1;
}, function($ctx1) {$ctx1.fill(self,"ownMethodsOfMetaClass:",{aClass:aClass},globals.Exporter)})},
args: ["aClass"],
source: "ownMethodsOfMetaClass: aClass\x0a\x09\x22Issue #143: sort methods alphabetically\x22\x0a\x0a\x09^ self ownMethodsOfClass: aClass class",
messageSends: ["ownMethodsOfClass:", "class"],
referencedClasses: []
}),
globals.Exporter);



smalltalk.addClass('AmdExporter', globals.Exporter, ['namespace'], 'Kernel-ImportExport');
globals.AmdExporter.comment="I am used to export Packages in an AMD (Asynchronous Module Definition) JavaScript format.";
smalltalk.addMethod(
smalltalk.method({
selector: "amdNamesOfPackages:",
protocol: 'private',
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
}, function($ctx1) {$ctx1.fill(self,"amdNamesOfPackages:",{anArray:anArray},globals.AmdExporter)})},
args: ["anArray"],
source: "amdNamesOfPackages: anArray\x0a\x09^ (anArray\x0a\x09\x09select: [ :each | (self amdNamespaceOfPackage: each) notNil ])\x0a\x09\x09collect: [ :each | (self amdNamespaceOfPackage: each), '/', each name ]",
messageSends: ["collect:", "select:", "notNil", "amdNamespaceOfPackage:", ",", "name"],
referencedClasses: []
}),
globals.AmdExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "amdNamespaceOfPackage:",
protocol: 'private',
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
}, function($ctx1) {$ctx1.fill(self,"amdNamespaceOfPackage:",{aPackage:aPackage},globals.AmdExporter)})},
args: ["aPackage"],
source: "amdNamespaceOfPackage: aPackage\x0a\x09^ (aPackage transport type = 'amd')\x0a\x09\x09ifTrue: [ aPackage transport namespace ]\x0a\x09\x09ifFalse: [ nil ]",
messageSends: ["ifTrue:ifFalse:", "=", "type", "transport", "namespace"],
referencedClasses: []
}),
globals.AmdExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackageEpilogueOf:on:",
protocol: 'output',
fn: function (aPackage,aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aStream)._nextPutAll_("});");
$1=_st(aStream)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportPackageEpilogueOf:on:",{aPackage:aPackage,aStream:aStream},globals.AmdExporter)})},
args: ["aPackage", "aStream"],
source: "exportPackageEpilogueOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: '});';\x0a\x09\x09lf",
messageSends: ["nextPutAll:", "lf"],
referencedClasses: []
}),
globals.AmdExporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportPackagePrologueOf:on:",
protocol: 'output',
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
_st(aStream)._nextPutAll_(_st(["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals"].__comma(self._amdNamesOfPackages_(_st(aPackage)._loadDependencies())))._asJavascript());
$ctx1.sendIdx["nextPutAll:"]=6;
_st(aStream)._nextPutAll_(", function(smalltalk,nil,_st, globals){");
$1=_st(aStream)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportPackagePrologueOf:on:",{aPackage:aPackage,aStream:aStream},globals.AmdExporter)})},
args: ["aPackage", "aStream"],
source: "exportPackagePrologueOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: 'define(\x22';\x0a\x09\x09nextPutAll: (self amdNamespaceOfPackage: aPackage);\x0a\x09\x09nextPutAll: '/';\x0a\x09\x09nextPutAll: aPackage name;\x0a\x09\x09nextPutAll: '\x22, ';\x0a\x09\x09nextPutAll: (#('amber_vm/smalltalk' 'amber_vm/nil' 'amber_vm/_st' 'amber_vm/globals'), (self amdNamesOfPackages: aPackage loadDependencies)) asJavascript;\x0a\x09\x09nextPutAll: ', function(smalltalk,nil,_st, globals){';\x0a\x09\x09lf",
messageSends: ["nextPutAll:", "amdNamespaceOfPackage:", "name", "asJavascript", ",", "amdNamesOfPackages:", "loadDependencies", "lf"],
referencedClasses: []
}),
globals.AmdExporter);



smalltalk.addClass('ChunkParser', globals.Object, ['stream', 'last'], 'Kernel-ImportExport');
globals.ChunkParser.comment="I am responsible for parsing aStream contents in the chunk format.\x0a\x0a## API\x0a\x0a    ChunkParser new\x0a        stream: aStream;\x0a        nextChunk";
smalltalk.addMethod(
smalltalk.method({
selector: "last",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@last"];
return $1;
},
args: [],
source: "last\x0a\x09^ last",
messageSends: [],
referencedClasses: []
}),
globals.ChunkParser);

smalltalk.addMethod(
smalltalk.method({
selector: "nextChunk",
protocol: 'reading',
fn: function (){
var self=this;
var char,result,chunk;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
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
self["@last"]=_st(_st(result)._contents())._trimBoth();
$3=self["@last"];
throw $early=[$3];
};
};
return _st(result)._nextPut_(char);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
self["@last"]=nil;
$4=self["@last"];
return $4;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"nextChunk",{char:char,result:result,chunk:chunk},globals.ChunkParser)})},
args: [],
source: "nextChunk\x0a\x09\x22The chunk format (Smalltalk Interchange Format or Fileout format)\x0a\x09is a trivial format but can be a bit tricky to understand:\x0a\x09\x09- Uses the exclamation mark as delimiter of chunks.\x0a\x09\x09- Inside a chunk a normal exclamation mark must be doubled.\x0a\x09\x09- A non empty chunk must be a valid Smalltalk expression.\x0a\x09\x09- A chunk on top level with a preceding empty chunk is an instruction chunk:\x0a\x09\x09\x09- The object created by the expression then takes over reading chunks.\x0a\x0a\x09This method returns next chunk as a String (trimmed), empty String (all whitespace) or nil.\x22\x0a\x0a\x09| char result chunk |\x0a\x09result := '' writeStream.\x0a\x09\x09[ char := stream next.\x0a\x09\x09char notNil ] whileTrue: [\x0a\x09\x09\x09\x09char = '!' ifTrue: [\x0a\x09\x09\x09\x09\x09\x09stream peek = '!'\x0a\x09\x09\x09\x09\x09\x09\x09\x09ifTrue: [ stream next \x22skipping the escape double\x22 ]\x0a\x09\x09\x09\x09\x09\x09\x09\x09ifFalse: [ ^ last := result contents trimBoth \x22chunk end marker found\x22 ]].\x0a\x09\x09\x09\x09result nextPut: char ].\x0a\x09^ last := nil \x22a chunk needs to end with !\x22",
messageSends: ["writeStream", "whileTrue:", "next", "notNil", "ifTrue:", "=", "ifTrue:ifFalse:", "peek", "trimBoth", "contents", "nextPut:"],
referencedClasses: []
}),
globals.ChunkParser);

smalltalk.addMethod(
smalltalk.method({
selector: "stream:",
protocol: 'accessing',
fn: function (aStream){
var self=this;
self["@stream"]=aStream;
return self},
args: ["aStream"],
source: "stream: aStream\x0a\x09stream := aStream",
messageSends: [],
referencedClasses: []
}),
globals.ChunkParser);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._stream_(aStream);
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aStream:aStream},globals.ChunkParser.klass)})},
args: ["aStream"],
source: "on: aStream\x0a\x09^ self new stream: aStream",
messageSends: ["stream:", "new"],
referencedClasses: []
}),
globals.ChunkParser.klass);


smalltalk.addClass('ExportMethodProtocol', globals.Object, ['name', 'theClass'], 'Kernel-ImportExport');
globals.ExportMethodProtocol.comment="I am an abstraction for a method protocol in a class / metaclass.\x0a\x0aI know of my class, name and methods.\x0aI am used when exporting a package.";
smalltalk.addMethod(
smalltalk.method({
selector: "methods",
protocol: 'accessing',
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
}, function($ctx1) {$ctx1.fill(self,"methods",{},globals.ExportMethodProtocol)})},
args: [],
source: "methods\x0a\x09^ (self theClass methodsInProtocol: self name)\x0a\x09\x09sorted: [ :a :b | a selector <= b selector ]",
messageSends: ["sorted:", "methodsInProtocol:", "theClass", "name", "<=", "selector"],
referencedClasses: []
}),
globals.ExportMethodProtocol);

smalltalk.addMethod(
smalltalk.method({
selector: "name",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@name"];
return $1;
},
args: [],
source: "name\x0a\x09^ name",
messageSends: [],
referencedClasses: []
}),
globals.ExportMethodProtocol);

smalltalk.addMethod(
smalltalk.method({
selector: "name:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@name"]=aString;
return self},
args: ["aString"],
source: "name: aString\x0a\x09name := aString",
messageSends: [],
referencedClasses: []
}),
globals.ExportMethodProtocol);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@theClass"];
return $1;
},
args: [],
source: "theClass\x0a\x09^ theClass",
messageSends: [],
referencedClasses: []
}),
globals.ExportMethodProtocol);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@theClass"]=aClass;
return self},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
globals.ExportMethodProtocol);


smalltalk.addMethod(
smalltalk.method({
selector: "name:theClass:",
protocol: 'instance creation',
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
}, function($ctx1) {$ctx1.fill(self,"name:theClass:",{aString:aString,aClass:aClass},globals.ExportMethodProtocol.klass)})},
args: ["aString", "aClass"],
source: "name: aString theClass: aClass\x0a\x09^ self new\x0a\x09\x09name: aString;\x0a\x09\x09theClass: aClass;\x0a\x09\x09yourself",
messageSends: ["name:", "new", "theClass:", "yourself"],
referencedClasses: []
}),
globals.ExportMethodProtocol.klass);


smalltalk.addClass('Importer', globals.Object, ['lastSection', 'lastChunk'], 'Kernel-ImportExport');
globals.Importer.comment="I can import Amber code from a string in the chunk format.\x0a\x0a## API\x0a\x0a    Importer new import: aString";
smalltalk.addMethod(
smalltalk.method({
selector: "import:",
protocol: 'fileIn',
fn: function (aStream){
var self=this;
var chunk,result,parser,lastEmpty;
function $ChunkParser(){return globals.ChunkParser||(typeof ChunkParser=="undefined"?nil:ChunkParser)}
function $Compiler(){return globals.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
parser=_st($ChunkParser())._on_(aStream);
lastEmpty=false;
self["@lastSection"]="n/a, not started";
self["@lastChunk"]=nil;
_st((function(){
return smalltalk.withContext(function($ctx2) {
_st((function(){
return smalltalk.withContext(function($ctx3) {
chunk=_st(parser)._nextChunk();
chunk;
return _st(chunk)._isNil();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx3) {
$1=_st(chunk)._isEmpty();
if(smalltalk.assert($1)){
lastEmpty=true;
return lastEmpty;
} else {
self["@lastSection"]=chunk;
self["@lastSection"];
result=_st(_st($Compiler())._new())._evaluateExpression_(chunk);
result;
$2=lastEmpty;
if(smalltalk.assert($2)){
lastEmpty=false;
lastEmpty;
return _st(result)._scanFrom_(parser);
};
};
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
self["@lastSection"]="n/a, finished";
return self["@lastSection"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._on_do_($Error(),(function(e){
return smalltalk.withContext(function($ctx2) {
self["@lastChunk"]=_st(parser)._last();
self["@lastChunk"];
return _st(e)._signal();
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,7)})}));
return self}, function($ctx1) {$ctx1.fill(self,"import:",{aStream:aStream,chunk:chunk,result:result,parser:parser,lastEmpty:lastEmpty},globals.Importer)})},
args: ["aStream"],
source: "import: aStream\x0a\x09| chunk result parser lastEmpty |\x0a\x09parser := ChunkParser on: aStream.\x0a\x09lastEmpty := false.\x0a\x09lastSection := 'n/a, not started'.\x0a\x09lastChunk := nil.\x0a\x09[\x0a\x09[ chunk := parser nextChunk.\x0a\x09chunk isNil ] whileFalse: [\x0a\x09\x09chunk isEmpty\x0a\x09\x09\x09ifTrue: [ lastEmpty := true ]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09lastSection := chunk.\x0a\x09\x09\x09\x09result := Compiler new evaluateExpression: chunk.\x0a\x09\x09\x09\x09lastEmpty\x0a\x09\x09\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09lastEmpty := false.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09result scanFrom: parser ]] ].\x0a\x09lastSection := 'n/a, finished'\x0a\x09] on: Error do: [:e | lastChunk := parser last. e signal ].",
messageSends: ["on:", "on:do:", "whileFalse:", "nextChunk", "isNil", "ifTrue:ifFalse:", "isEmpty", "evaluateExpression:", "new", "ifTrue:", "scanFrom:", "last", "signal"],
referencedClasses: ["ChunkParser", "Compiler", "Error"]
}),
globals.Importer);

smalltalk.addMethod(
smalltalk.method({
selector: "lastChunk",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@lastChunk"];
return $1;
},
args: [],
source: "lastChunk\x0a\x09^ lastChunk",
messageSends: [],
referencedClasses: []
}),
globals.Importer);

smalltalk.addMethod(
smalltalk.method({
selector: "lastSection",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@lastSection"];
return $1;
},
args: [],
source: "lastSection\x0a\x09^ lastSection",
messageSends: [],
referencedClasses: []
}),
globals.Importer);



smalltalk.addClass('PackageHandler', globals.InterfacingObject, [], 'Kernel-ImportExport');
globals.PackageHandler.comment="I am responsible for handling package loading and committing.\x0a\x0aI should not be used directly. Instead, use the corresponding `Package` methods.";
smalltalk.addMethod(
smalltalk.method({
selector: "ajaxPutAt:data:onSuccess:onError:",
protocol: 'private',
fn: function (aURL,aString,aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._ajax_(globals.HashedCollection._newFromPairs_(["url",aURL,"type","PUT","data",aString,"contentType","text/plain;charset=UTF-8","success",aBlock,"error",anotherBlock]));
return self}, function($ctx1) {$ctx1.fill(self,"ajaxPutAt:data:onSuccess:onError:",{aURL:aURL,aString:aString,aBlock:aBlock,anotherBlock:anotherBlock},globals.PackageHandler)})},
args: ["aURL", "aString", "aBlock", "anotherBlock"],
source: "ajaxPutAt: aURL data: aString onSuccess: aBlock onError: anotherBlock\x0a\x09self\x0a\x09\x09ajax: #{\x0a\x09\x09\x09'url' -> aURL.\x0a\x09\x09\x09'type' -> 'PUT'.\x0a\x09\x09\x09'data' -> aString.\x0a\x09\x09\x09'contentType' -> 'text/plain;charset=UTF-8'.\x0a\x09\x09\x09'success' -> aBlock.\x0a\x09\x09\x09'error' -> anotherBlock\x0a\x09\x09}",
messageSends: ["ajax:"],
referencedClasses: []
}),
globals.PackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "chunkContentsFor:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($String())._streamContents_((function(str){
return smalltalk.withContext(function($ctx2) {
return _st(self._chunkExporter())._exportPackage_on_(aPackage,str);
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"chunkContentsFor:",{aPackage:aPackage},globals.PackageHandler)})},
args: ["aPackage"],
source: "chunkContentsFor: aPackage\x0a\x09^ String streamContents: [ :str |\x0a\x09\x09self chunkExporter exportPackage: aPackage on: str ]",
messageSends: ["streamContents:", "exportPackage:on:", "chunkExporter"],
referencedClasses: ["String"]
}),
globals.PackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "chunkExporter",
protocol: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._chunkExporterClass())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"chunkExporter",{},globals.PackageHandler)})},
args: [],
source: "chunkExporter\x0a\x09^ self chunkExporterClass new",
messageSends: ["new", "chunkExporterClass"],
referencedClasses: []
}),
globals.PackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "chunkExporterClass",
protocol: 'accessing',
fn: function (){
var self=this;
function $ChunkExporter(){return globals.ChunkExporter||(typeof ChunkExporter=="undefined"?nil:ChunkExporter)}
return $ChunkExporter();
},
args: [],
source: "chunkExporterClass\x0a\x09^ ChunkExporter",
messageSends: [],
referencedClasses: ["ChunkExporter"]
}),
globals.PackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "commit:",
protocol: 'committing',
fn: function (aPackage){
var self=this;
function $PackageCommitError(){return globals.PackageCommitError||(typeof PackageCommitError=="undefined"?nil:PackageCommitError)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
self._commit_onSuccess_onError_(aPackage,(function(){
}),(function(error){
return smalltalk.withContext(function($ctx2) {
$1=_st($PackageCommitError())._new();
$2=$1;
$3=_st("Commiting failed with reason: \x22".__comma(_st(error)._responseText())).__comma("\x22");
$ctx2.sendIdx[","]=1;
_st($2)._messageText_($3);
$4=_st($1)._signal();
return $4;
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"commit:",{aPackage:aPackage},globals.PackageHandler)})},
args: ["aPackage"],
source: "commit: aPackage\x0a\x09self \x0a\x09\x09commit: aPackage\x0a\x09\x09onSuccess: []\x0a\x09\x09onError: [ :error |\x0a\x09\x09\x09PackageCommitError new\x0a\x09\x09\x09\x09messageText: 'Commiting failed with reason: \x22' , (error responseText) , '\x22';\x0a\x09\x09\x09\x09signal ]",
messageSends: ["commit:onSuccess:onError:", "messageText:", "new", ",", "responseText", "signal"],
referencedClasses: ["PackageCommitError"]
}),
globals.PackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "commit:onSuccess:onError:",
protocol: 'committing',
fn: function (aPackage,aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._commitJsFileFor_onSuccess_onError_(aPackage,(function(){
return smalltalk.withContext(function($ctx2) {
return self._commitStFileFor_onSuccess_onError_(aPackage,(function(){
return smalltalk.withContext(function($ctx3) {
_st(aPackage)._beClean();
return _st(aBlock)._value();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}),anotherBlock);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),anotherBlock);
return self}, function($ctx1) {$ctx1.fill(self,"commit:onSuccess:onError:",{aPackage:aPackage,aBlock:aBlock,anotherBlock:anotherBlock},globals.PackageHandler)})},
args: ["aPackage", "aBlock", "anotherBlock"],
source: "commit: aPackage onSuccess: aBlock onError: anotherBlock\x0a\x09self \x0a\x09\x09commitJsFileFor: aPackage \x0a\x09\x09onSuccess: [\x0a\x09\x09\x09self \x0a\x09\x09\x09\x09commitStFileFor: aPackage \x0a\x09\x09\x09\x09onSuccess: [ aPackage beClean. aBlock value ]\x0a\x09\x09\x09\x09onError: anotherBlock ] \x0a\x09\x09onError: anotherBlock",
messageSends: ["commitJsFileFor:onSuccess:onError:", "commitStFileFor:onSuccess:onError:", "beClean", "value"],
referencedClasses: []
}),
globals.PackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "commitJsFileFor:onSuccess:onError:",
protocol: 'committing',
fn: function (aPackage,aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(self._commitPathJsFor_(aPackage)).__comma("/")).__comma(_st(aPackage)._name());
$ctx1.sendIdx[","]=2;
$1=_st($2).__comma(".js");
$ctx1.sendIdx[","]=1;
self._ajaxPutAt_data_onSuccess_onError_($1,self._contentsFor_(aPackage),aBlock,anotherBlock);
return self}, function($ctx1) {$ctx1.fill(self,"commitJsFileFor:onSuccess:onError:",{aPackage:aPackage,aBlock:aBlock,anotherBlock:anotherBlock},globals.PackageHandler)})},
args: ["aPackage", "aBlock", "anotherBlock"],
source: "commitJsFileFor: aPackage onSuccess: aBlock onError: anotherBlock\x0a\x09self \x0a\x09\x09ajaxPutAt: (self commitPathJsFor: aPackage), '/', aPackage name, '.js'\x0a\x09\x09data: (self contentsFor: aPackage)\x0a\x09\x09onSuccess: aBlock\x0a\x09\x09onError: anotherBlock",
messageSends: ["ajaxPutAt:data:onSuccess:onError:", ",", "commitPathJsFor:", "name", "contentsFor:"],
referencedClasses: []
}),
globals.PackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPathJsFor:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"commitPathJsFor:",{aPackage:aPackage},globals.PackageHandler)})},
args: ["aPackage"],
source: "commitPathJsFor: aPackage\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.PackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPathStFor:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"commitPathStFor:",{aPackage:aPackage},globals.PackageHandler)})},
args: ["aPackage"],
source: "commitPathStFor: aPackage\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.PackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "commitStFileFor:onSuccess:onError:",
protocol: 'committing',
fn: function (aPackage,aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(self._commitPathStFor_(aPackage)).__comma("/")).__comma(_st(aPackage)._name());
$ctx1.sendIdx[","]=2;
$1=_st($2).__comma(".st");
$ctx1.sendIdx[","]=1;
self._ajaxPutAt_data_onSuccess_onError_($1,self._chunkContentsFor_(aPackage),aBlock,anotherBlock);
return self}, function($ctx1) {$ctx1.fill(self,"commitStFileFor:onSuccess:onError:",{aPackage:aPackage,aBlock:aBlock,anotherBlock:anotherBlock},globals.PackageHandler)})},
args: ["aPackage", "aBlock", "anotherBlock"],
source: "commitStFileFor: aPackage onSuccess: aBlock onError: anotherBlock\x0a\x09self \x0a\x09\x09ajaxPutAt: (self commitPathStFor: aPackage), '/', aPackage name, '.st'\x0a\x09\x09data: (self chunkContentsFor: aPackage)\x0a\x09\x09onSuccess: aBlock\x0a\x09\x09onError: anotherBlock",
messageSends: ["ajaxPutAt:data:onSuccess:onError:", ",", "commitPathStFor:", "name", "chunkContentsFor:"],
referencedClasses: []
}),
globals.PackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "contentsFor:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($String())._streamContents_((function(str){
return smalltalk.withContext(function($ctx2) {
return _st(self._exporter())._exportPackage_on_(aPackage,str);
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"contentsFor:",{aPackage:aPackage},globals.PackageHandler)})},
args: ["aPackage"],
source: "contentsFor: aPackage\x0a\x09^ String streamContents: [ :str |\x0a\x09\x09self exporter exportPackage: aPackage on: str ]",
messageSends: ["streamContents:", "exportPackage:on:", "exporter"],
referencedClasses: ["String"]
}),
globals.PackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "exporter",
protocol: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._exporterClass())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"exporter",{},globals.PackageHandler)})},
args: [],
source: "exporter\x0a\x09^ self exporterClass new",
messageSends: ["new", "exporterClass"],
referencedClasses: []
}),
globals.PackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "exporterClass",
protocol: 'accessing',
fn: function (){
var self=this;
function $Exporter(){return globals.Exporter||(typeof Exporter=="undefined"?nil:Exporter)}
return $Exporter();
},
args: [],
source: "exporterClass\x0a\x09^ Exporter",
messageSends: [],
referencedClasses: ["Exporter"]
}),
globals.PackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "load:",
protocol: 'loading',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"load:",{aPackage:aPackage},globals.PackageHandler)})},
args: ["aPackage"],
source: "load: aPackage\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.PackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "onCommitError:",
protocol: 'error handling',
fn: function (anError){
var self=this;
function $PackageCommitError(){return globals.PackageCommitError||(typeof PackageCommitError=="undefined"?nil:PackageCommitError)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st($PackageCommitError())._new();
$2=$1;
$3=_st("Commiting failed with reason: \x22".__comma(_st(anError)._responseText())).__comma("\x22");
$ctx1.sendIdx[","]=1;
_st($2)._messageText_($3);
$4=_st($1)._signal();
return self}, function($ctx1) {$ctx1.fill(self,"onCommitError:",{anError:anError},globals.PackageHandler)})},
args: ["anError"],
source: "onCommitError: anError\x0a\x09PackageCommitError new\x0a\x09\x09messageText: 'Commiting failed with reason: \x22' , (anError responseText) , '\x22';\x0a\x09\x09signal",
messageSends: ["messageText:", "new", ",", "responseText", "signal"],
referencedClasses: ["PackageCommitError"]
}),
globals.PackageHandler);



smalltalk.addClass('AmdPackageHandler', globals.PackageHandler, [], 'Kernel-ImportExport');
globals.AmdPackageHandler.comment="I am responsible for handling package loading and committing.\x0a\x0aI should not be used directly. Instead, use the corresponding `Package` methods.";
smalltalk.addMethod(
smalltalk.method({
selector: "commitPathJsFor:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._toUrl_(self._namespaceFor_(aPackage));
return $1;
}, function($ctx1) {$ctx1.fill(self,"commitPathJsFor:",{aPackage:aPackage},globals.AmdPackageHandler)})},
args: ["aPackage"],
source: "commitPathJsFor: aPackage\x0a\x09^ self toUrl: (self namespaceFor: aPackage)",
messageSends: ["toUrl:", "namespaceFor:"],
referencedClasses: []
}),
globals.AmdPackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPathStFor:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
var path,pathWithout;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
$1=_st(self._namespaceFor_(aPackage)).__comma("/_source");
$ctx1.sendIdx[","]=1;
path=self._toUrl_($1);
pathWithout=self._commitPathJsFor_(aPackage);
$3=_st(path).__eq(_st(pathWithout).__comma("/_source"));
if(smalltalk.assert($3)){
$2=pathWithout;
} else {
$2=path;
};
return $2;
}, function($ctx1) {$ctx1.fill(self,"commitPathStFor:",{aPackage:aPackage,path:path,pathWithout:pathWithout},globals.AmdPackageHandler)})},
args: ["aPackage"],
source: "commitPathStFor: aPackage\x0a\x09\x22If _source is not mapped, .st will be committed to .js path.\x0a\x09It is recommended not to use _source as it can be deprecated.\x22\x0a\x09\x0a\x09| path pathWithout |\x0a\x09path := self toUrl: (self namespaceFor: aPackage), '/_source'.\x0a\x09pathWithout := self commitPathJsFor: aPackage.\x0a\x09^ path = (pathWithout, '/_source') ifTrue: [ pathWithout ] ifFalse: [ path ]",
messageSends: ["toUrl:", ",", "namespaceFor:", "commitPathJsFor:", "ifTrue:ifFalse:", "="],
referencedClasses: []
}),
globals.AmdPackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "exporterClass",
protocol: 'accessing',
fn: function (){
var self=this;
function $AmdExporter(){return globals.AmdExporter||(typeof AmdExporter=="undefined"?nil:AmdExporter)}
return $AmdExporter();
},
args: [],
source: "exporterClass\x0a\x09^ AmdExporter",
messageSends: [],
referencedClasses: ["AmdExporter"]
}),
globals.AmdPackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "load:",
protocol: 'loading',
fn: function (aPackage){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$receiver;
$1=_st($Smalltalk())._amdRequire();
if(($receiver = $1) == null || $receiver.isNil){
self._error_("AMD loader not present");
} else {
var require;
require=$receiver;
$3=_st(_st(self._namespaceFor_(aPackage)).__comma("/")).__comma(_st(aPackage)._name());
$ctx1.sendIdx[","]=1;
$2=_st($Array())._new_($3);
_st(require)._value_($2);
};
return self}, function($ctx1) {$ctx1.fill(self,"load:",{aPackage:aPackage},globals.AmdPackageHandler)})},
args: ["aPackage"],
source: "load: aPackage\x0a\x09Smalltalk amdRequire\x0a\x09\x09ifNil: [ self error: 'AMD loader not present' ]\x0a\x09\x09ifNotNil: [ :require |\x0a\x09\x09\x09require value: (Array new: (self namespaceFor: aPackage), '/', aPackage name ) ]",
messageSends: ["ifNil:ifNotNil:", "amdRequire", "error:", "value:", "new:", ",", "namespaceFor:", "name"],
referencedClasses: ["Smalltalk", "Array"]
}),
globals.AmdPackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "namespaceFor:",
protocol: 'committing',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aPackage)._transport())._namespace();
return $1;
}, function($ctx1) {$ctx1.fill(self,"namespaceFor:",{aPackage:aPackage},globals.AmdPackageHandler)})},
args: ["aPackage"],
source: "namespaceFor: aPackage\x0a\x09^ aPackage transport namespace",
messageSends: ["namespace", "transport"],
referencedClasses: []
}),
globals.AmdPackageHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "toUrl:",
protocol: 'private',
fn: function (aString){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=_st($Smalltalk())._amdRequire();
if(($receiver = $2) == null || $receiver.isNil){
$1=self._error_("AMD loader not present");
} else {
var require;
require=$receiver;
$1=_st(_st(require)._basicAt_("toUrl"))._value_(aString);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"toUrl:",{aString:aString},globals.AmdPackageHandler)})},
args: ["aString"],
source: "toUrl: aString\x0a\x09^ Smalltalk amdRequire\x0a\x09\x09ifNil: [ self error: 'AMD loader not present' ]\x0a\x09\x09ifNotNil: [ :require | (require basicAt: 'toUrl') value: aString ]",
messageSends: ["ifNil:ifNotNil:", "amdRequire", "error:", "value:", "basicAt:"],
referencedClasses: ["Smalltalk"]
}),
globals.AmdPackageHandler);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultNamespace",
protocol: 'commit paths',
fn: function (){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Smalltalk())._defaultAmdNamespace();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultNamespace",{},globals.AmdPackageHandler.klass)})},
args: [],
source: "defaultNamespace\x0a\x09^ Smalltalk defaultAmdNamespace",
messageSends: ["defaultAmdNamespace"],
referencedClasses: ["Smalltalk"]
}),
globals.AmdPackageHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultNamespace:",
protocol: 'commit paths',
fn: function (aString){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
_st($Smalltalk())._defaultAmdNamespace_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"defaultNamespace:",{aString:aString},globals.AmdPackageHandler.klass)})},
args: ["aString"],
source: "defaultNamespace: aString\x0a\x09Smalltalk defaultAmdNamespace: aString",
messageSends: ["defaultAmdNamespace:"],
referencedClasses: ["Smalltalk"]
}),
globals.AmdPackageHandler.klass);


smalltalk.addClass('PackageTransport', globals.Object, ['package'], 'Kernel-ImportExport');
globals.PackageTransport.comment="I represent the transport mechanism used to commit a package.\x0a\x0aMy concrete subclasses have a `#handler` to which committing is delegated.";
smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=globals.HashedCollection._newFromPairs_(["type",self._type()]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},globals.PackageTransport)})},
args: [],
source: "asJSON\x0a\x09^ #{ 'type' -> self type }",
messageSends: ["type"],
referencedClasses: []
}),
globals.PackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "commit",
protocol: 'committing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._commitHandler())._commit_(self._package());
return self}, function($ctx1) {$ctx1.fill(self,"commit",{},globals.PackageTransport)})},
args: [],
source: "commit\x0a\x09self commitHandler commit: self package",
messageSends: ["commit:", "commitHandler", "package"],
referencedClasses: []
}),
globals.PackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "commitHandler",
protocol: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._commitHandlerClass())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"commitHandler",{},globals.PackageTransport)})},
args: [],
source: "commitHandler\x0a\x09^ self commitHandlerClass new",
messageSends: ["new", "commitHandlerClass"],
referencedClasses: []
}),
globals.PackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "commitHandlerClass",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"commitHandlerClass",{},globals.PackageTransport)})},
args: [],
source: "commitHandlerClass\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.PackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "commitOnSuccess:onError:",
protocol: 'committing',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._commitHandler())._commit_onSuccess_onError_(self._package(),aBlock,anotherBlock);
return self}, function($ctx1) {$ctx1.fill(self,"commitOnSuccess:onError:",{aBlock:aBlock,anotherBlock:anotherBlock},globals.PackageTransport)})},
args: ["aBlock", "anotherBlock"],
source: "commitOnSuccess: aBlock onError: anotherBlock\x0a\x09self commitHandler \x0a\x09\x09commit: self package\x0a\x09\x09onSuccess: aBlock\x0a\x09\x09onError: anotherBlock",
messageSends: ["commit:onSuccess:onError:", "commitHandler", "package"],
referencedClasses: []
}),
globals.PackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "definition",
protocol: 'accessing',
fn: function (){
var self=this;
return "";
},
args: [],
source: "definition\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
globals.PackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "load",
protocol: 'loading',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._commitHandler())._load_(self._package());
return self}, function($ctx1) {$ctx1.fill(self,"load",{},globals.PackageTransport)})},
args: [],
source: "load\x0a\x09self commitHandler load: self package",
messageSends: ["load:", "commitHandler", "package"],
referencedClasses: []
}),
globals.PackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "package",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@package"];
return $1;
},
args: [],
source: "package\x0a\x09^ package",
messageSends: [],
referencedClasses: []
}),
globals.PackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "package:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
self["@package"]=aPackage;
return self},
args: ["aPackage"],
source: "package: aPackage\x0a\x09package := aPackage",
messageSends: [],
referencedClasses: []
}),
globals.PackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "setupFromJson:",
protocol: 'initialization',
fn: function (anObject){
var self=this;
return self},
args: ["anObject"],
source: "setupFromJson: anObject\x0a\x09\x22no op. override if needed in subclasses\x22",
messageSends: [],
referencedClasses: []
}),
globals.PackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "type",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._type();
return $1;
}, function($ctx1) {$ctx1.fill(self,"type",{},globals.PackageTransport)})},
args: [],
source: "type\x0a\x09^ self class type",
messageSends: ["type", "class"],
referencedClasses: []
}),
globals.PackageTransport);


globals.PackageTransport.klass.iVarNames = ['registry'];
smalltalk.addMethod(
smalltalk.method({
selector: "classRegisteredFor:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@registry"])._at_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"classRegisteredFor:",{aString:aString},globals.PackageTransport.klass)})},
args: ["aString"],
source: "classRegisteredFor: aString\x0a\x09^ registry at: aString",
messageSends: ["at:"],
referencedClasses: []
}),
globals.PackageTransport.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultType",
protocol: 'accessing',
fn: function (){
var self=this;
function $AmdPackageTransport(){return globals.AmdPackageTransport||(typeof AmdPackageTransport=="undefined"?nil:AmdPackageTransport)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($AmdPackageTransport())._type();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultType",{},globals.PackageTransport.klass)})},
args: [],
source: "defaultType\x0a\x09^ AmdPackageTransport type",
messageSends: ["type"],
referencedClasses: ["AmdPackageTransport"]
}),
globals.PackageTransport.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "for:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._classRegisteredFor_(aString))._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"for:",{aString:aString},globals.PackageTransport.klass)})},
args: ["aString"],
source: "for: aString\x0a\x09^ (self classRegisteredFor: aString) new",
messageSends: ["new", "classRegisteredFor:"],
referencedClasses: []
}),
globals.PackageTransport.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromJson:",
protocol: 'instance creation',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2,$receiver;
if(($receiver = anObject) == null || $receiver.isNil){
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
}, function($ctx1) {$ctx1.fill(self,"fromJson:",{anObject:anObject},globals.PackageTransport.klass)})},
args: ["anObject"],
source: "fromJson: anObject\x0a\x09anObject ifNil: [ ^ self for: self defaultType ].\x0a\x09\x0a\x09^ (self for: anObject type)\x0a\x09\x09setupFromJson: anObject;\x0a\x09\x09yourself",
messageSends: ["ifNil:", "for:", "defaultType", "setupFromJson:", "type", "yourself"],
referencedClasses: []
}),
globals.PackageTransport.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.PackageTransport.klass.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@registry"]=globals.HashedCollection._newFromPairs_([]);
self._register();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.PackageTransport.klass)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09registry := #{}.\x0a\x09self register",
messageSends: ["initialize", "register"],
referencedClasses: []
}),
globals.PackageTransport.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "register",
protocol: 'registration',
fn: function (){
var self=this;
function $PackageTransport(){return globals.PackageTransport||(typeof PackageTransport=="undefined"?nil:PackageTransport)}
return smalltalk.withContext(function($ctx1) { 
_st($PackageTransport())._register_(self);
return self}, function($ctx1) {$ctx1.fill(self,"register",{},globals.PackageTransport.klass)})},
args: [],
source: "register\x0a\x09PackageTransport register: self",
messageSends: ["register:"],
referencedClasses: ["PackageTransport"]
}),
globals.PackageTransport.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "register:",
protocol: 'registration',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
$1=_st(aClass)._type();
$ctx1.sendIdx["type"]=1;
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
_st(self["@registry"])._at_put_(_st(aClass)._type(),aClass);
};
return self}, function($ctx1) {$ctx1.fill(self,"register:",{aClass:aClass},globals.PackageTransport.klass)})},
args: ["aClass"],
source: "register: aClass\x0a\x09aClass type ifNotNil: [\x0a\x09\x09registry at: aClass type put: aClass ]",
messageSends: ["ifNotNil:", "type", "at:put:"],
referencedClasses: []
}),
globals.PackageTransport.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "type",
protocol: 'accessing',
fn: function (){
var self=this;
return nil;
},
args: [],
source: "type\x0a\x09\x22Override in subclasses\x22\x0a\x09^ nil",
messageSends: [],
referencedClasses: []
}),
globals.PackageTransport.klass);


smalltalk.addClass('AmdPackageTransport', globals.PackageTransport, ['namespace'], 'Kernel-ImportExport');
globals.AmdPackageTransport.comment="I am the default transport for committing packages.\x0a\x0aSee `AmdExporter` and `AmdPackageHandler`.";
smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=($ctx1.supercall = true, globals.AmdPackageTransport.superclass.fn.prototype._asJSON.apply(_st(self), []));
$ctx1.supercall = false;
_st($2)._at_put_("amdNamespace",self._namespace());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},globals.AmdPackageTransport)})},
args: [],
source: "asJSON\x0a\x09^ super asJSON\x0a\x09\x09at: 'amdNamespace' put: self namespace;\x0a\x09\x09yourself",
messageSends: ["at:put:", "asJSON", "namespace", "yourself"],
referencedClasses: []
}),
globals.AmdPackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "commitHandlerClass",
protocol: 'accessing',
fn: function (){
var self=this;
function $AmdPackageHandler(){return globals.AmdPackageHandler||(typeof AmdPackageHandler=="undefined"?nil:AmdPackageHandler)}
return $AmdPackageHandler();
},
args: [],
source: "commitHandlerClass\x0a\x09^ AmdPackageHandler",
messageSends: [],
referencedClasses: ["AmdPackageHandler"]
}),
globals.AmdPackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultNamespace",
protocol: 'defaults',
fn: function (){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Smalltalk())._defaultAmdNamespace();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultNamespace",{},globals.AmdPackageTransport)})},
args: [],
source: "defaultNamespace\x0a\x09^ Smalltalk defaultAmdNamespace",
messageSends: ["defaultAmdNamespace"],
referencedClasses: ["Smalltalk"]
}),
globals.AmdPackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "definition",
protocol: 'accessing',
fn: function (){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
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
}, function($ctx1) {$ctx1.fill(self,"definition",{},globals.AmdPackageTransport)})},
args: [],
source: "definition\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09stream \x0a\x09\x09\x09nextPutAll: self class name;\x0a\x09\x09\x09nextPutAll: ' namespace: ';\x0a\x09\x09\x09nextPutAll: '''', self namespace, '''' ]",
messageSends: ["streamContents:", "nextPutAll:", "name", "class", ",", "namespace"],
referencedClasses: ["String"]
}),
globals.AmdPackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "namespace",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@namespace"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._defaultNamespace();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"namespace",{},globals.AmdPackageTransport)})},
args: [],
source: "namespace\x0a\x09^ namespace ifNil: [ self defaultNamespace ]",
messageSends: ["ifNil:", "defaultNamespace"],
referencedClasses: []
}),
globals.AmdPackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "namespace:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@namespace"]=aString;
return self},
args: ["aString"],
source: "namespace: aString\x0a\x09namespace := aString",
messageSends: [],
referencedClasses: []
}),
globals.AmdPackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
($ctx1.supercall = true, globals.AmdPackageTransport.superclass.fn.prototype._printOn_.apply(_st(self), [aStream]));
$ctx1.supercall = false;
_st(aStream)._nextPutAll_(" (AMD Namespace: ");
$ctx1.sendIdx["nextPutAll:"]=1;
_st(aStream)._nextPutAll_(self._namespace());
$ctx1.sendIdx["nextPutAll:"]=2;
$1=_st(aStream)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},globals.AmdPackageTransport)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09aStream\x0a\x09\x09nextPutAll: ' (AMD Namespace: ';\x0a\x09\x09nextPutAll: self namespace;\x0a\x09\x09nextPutAll: ')'",
messageSends: ["printOn:", "nextPutAll:", "namespace"],
referencedClasses: []
}),
globals.AmdPackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "setPath:",
protocol: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(require)._basicAt_("config"))._value_(globals.HashedCollection._newFromPairs_(["paths",globals.HashedCollection._newFromPairs_([self._namespace(),aString])]));
return self}, function($ctx1) {$ctx1.fill(self,"setPath:",{aString:aString},globals.AmdPackageTransport)})},
args: ["aString"],
source: "setPath: aString\x0a\x09\x22Set the path the the receiver's `namespace`\x22\x0a\x09\x0a\x09(require basicAt: 'config') value: #{\x0a\x09\x09'paths' -> #{\x0a\x09\x09\x09self namespace -> aString\x0a\x09\x09}\x0a\x09}.",
messageSends: ["value:", "basicAt:", "namespace"],
referencedClasses: []
}),
globals.AmdPackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "setupFromJson:",
protocol: 'initialization',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._namespace_(_st(anObject)._at_("amdNamespace"));
return self}, function($ctx1) {$ctx1.fill(self,"setupFromJson:",{anObject:anObject},globals.AmdPackageTransport)})},
args: ["anObject"],
source: "setupFromJson: anObject\x0a\x09self namespace: (anObject at: 'amdNamespace')",
messageSends: ["namespace:", "at:"],
referencedClasses: []
}),
globals.AmdPackageTransport);


smalltalk.addMethod(
smalltalk.method({
selector: "namespace:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._namespace_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"namespace:",{aString:aString},globals.AmdPackageTransport.klass)})},
args: ["aString"],
source: "namespace: aString\x0a\x09^ self new\x0a\x09\x09namespace: aString;\x0a\x09\x09yourself",
messageSends: ["namespace:", "new", "yourself"],
referencedClasses: []
}),
globals.AmdPackageTransport.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "type",
protocol: 'accessing',
fn: function (){
var self=this;
return "amd";
},
args: [],
source: "type\x0a\x09^ 'amd'",
messageSends: [],
referencedClasses: []
}),
globals.AmdPackageTransport.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "commit",
protocol: '*Kernel-ImportExport',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._transport())._commit();
return $1;
}, function($ctx1) {$ctx1.fill(self,"commit",{},globals.Package)})},
args: [],
source: "commit\x0a\x09^ self transport commit",
messageSends: ["commit", "transport"],
referencedClasses: []
}),
globals.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "load",
protocol: '*Kernel-ImportExport',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._transport())._load();
return $1;
}, function($ctx1) {$ctx1.fill(self,"load",{},globals.Package)})},
args: [],
source: "load\x0a\x09^ self transport load",
messageSends: ["load", "transport"],
referencedClasses: []
}),
globals.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "loadFromNamespace:",
protocol: '*Kernel-ImportExport',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._transport();
_st($2)._namespace_(aString);
$3=_st($2)._load();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"loadFromNamespace:",{aString:aString},globals.Package)})},
args: ["aString"],
source: "loadFromNamespace: aString\x0a\x09^ self transport\x0a\x09\x09namespace: aString;\x0a\x09\x09load",
messageSends: ["namespace:", "transport", "load"],
referencedClasses: []
}),
globals.Package);

smalltalk.addMethod(
smalltalk.method({
selector: "load:",
protocol: '*Kernel-ImportExport',
fn: function (aPackageName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._named_(aPackageName))._load();
return self}, function($ctx1) {$ctx1.fill(self,"load:",{aPackageName:aPackageName},globals.Package.klass)})},
args: ["aPackageName"],
source: "load: aPackageName\x0a\x09(self named: aPackageName) load",
messageSends: ["load", "named:"],
referencedClasses: []
}),
globals.Package.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "load:fromNamespace:",
protocol: '*Kernel-ImportExport',
fn: function (aPackageName,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._named_(aPackageName))._loadFromNamespace_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"load:fromNamespace:",{aPackageName:aPackageName,aString:aString},globals.Package.klass)})},
args: ["aPackageName", "aString"],
source: "load: aPackageName fromNamespace: aString\x0a\x09(self named: aPackageName) loadFromNamespace: aString",
messageSends: ["loadFromNamespace:", "named:"],
referencedClasses: []
}),
globals.Package.klass);

});
