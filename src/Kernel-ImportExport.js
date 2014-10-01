define("amber_core/Kernel-ImportExport", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Kernel-Infrastructure"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('Kernel-ImportExport');
smalltalk.packages["Kernel-ImportExport"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('AbstractExporter', globals.Object, [], 'Kernel-ImportExport');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.AbstractExporter.comment="I am an abstract exporter for Amber source code.\x0a\x0a## API\x0a\x0aUse `#exportPackage:on:` to export a given package on a Stream.";
//>>excludeEnd("ide");
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
}, function($ctx1) {$ctx1.fill(self,"chunkEscape:",{aString:aString},globals.AbstractExporter)});
},
messageSends: ["trimBoth", "replace:with:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "chunkEscape: aString\x0a\x09\x22Replace all occurrences of ! with !! and trim at both ends.\x22\x0a\x0a\x09^ (aString replace: '!' with: '!!') trimBoth",
referencedClasses: []
//>>excludeEnd("ide");
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
}, function($ctx1) {$ctx1.fill(self,"classNameFor:",{aClass:aClass},globals.AbstractExporter)});
},
messageSends: ["ifTrue:ifFalse:", "isMetaclass", ",", "name", "instanceClass", "isNil"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "classNameFor: aClass\x0a\x09^ aClass isMetaclass\x0a\x09\x09ifTrue: [ aClass instanceClass name, ' class' ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09aClass isNil\x0a\x09\x09\x09\x09ifTrue: [ 'nil' ]\x0a\x09\x09\x09\x09ifFalse: [ aClass name ] ]",
referencedClasses: []
//>>excludeEnd("ide");
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
return self}, function($ctx1) {$ctx1.fill(self,"exportPackage:on:",{aPackage:aPackage,aStream:aStream},globals.AbstractExporter)});
},
messageSends: ["subclassResponsibility"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackage: aPackage on: aStream\x0a\x09self subclassResponsibility",
referencedClasses: []
//>>excludeEnd("ide");
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
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
}));
$1=result;
return $1;
}, function($ctx1) {$ctx1.fill(self,"extensionMethodsOfPackage:",{aPackage:aPackage,result:result},globals.AbstractExporter)});
},
messageSends: ["new", "do:", "extensionProtocolsOfPackage:", "addAll:", "methods"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "extensionMethodsOfPackage: aPackage\x0a\x09| result |\x0a\x09\x0a\x09result := OrderedCollection new.\x0a\x09\x0a\x09(self extensionProtocolsOfPackage: aPackage) do: [ :each |\x0a\x09\x09result addAll: each methods ].\x0a\x09\x09\x0a\x09^ result",
referencedClasses: ["OrderedCollection"]
//>>excludeEnd("ide");
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
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)});
})))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st([each,_st(each)._class()])._do_((function(behavior){
return smalltalk.withContext(function($ctx3) {
$3=_st(_st(behavior)._protocols())._includes_(extensionName);
if(smalltalk.assert($3)){
return _st(result)._add_(_st($ExportMethodProtocol())._name_theClass_(extensionName,behavior));
};
}, function($ctx3) {$ctx3.fillBlock({behavior:behavior},$ctx2,3)});
}));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
}));
$ctx1.sendIdx["do:"]=1;
$4=result;
return $4;
}, function($ctx1) {$ctx1.fill(self,"extensionProtocolsOfPackage:",{aPackage:aPackage,extensionName:extensionName,result:result},globals.AbstractExporter)});
},
messageSends: [",", "name", "new", "do:", "sorted:", "asArray", "classes", "<", "class", "ifTrue:", "includes:", "protocols", "add:", "name:theClass:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "extensionProtocolsOfPackage: aPackage\x0a\x09| extensionName result |\x0a\x09\x0a\x09extensionName := '*', aPackage name.\x0a\x09result := OrderedCollection new.\x0a\x09\x0a\x09\x22The classes must be loaded since it is extensions only.\x0a\x09Therefore topological sorting (dependency resolution) does not matter here.\x0a\x09Not sorting topologically improves the speed by a number of magnitude.\x0a\x09\x0a\x09Not to shuffle diffs, classes are sorted by their name.\x22\x0a\x09\x0a\x09(Smalltalk classes asArray sorted: [ :a :b | a name < b name ]) do: [ :each |\x0a\x09\x09{each. each class} do: [ :behavior |\x0a\x09\x09\x09(behavior protocols includes: extensionName) ifTrue: [\x0a\x09\x09\x09\x09result add: (ExportMethodProtocol name: extensionName theClass: behavior) ] ] ].\x0a\x0a\x09^ result",
referencedClasses: ["OrderedCollection", "Smalltalk", "ExportMethodProtocol"]
//>>excludeEnd("ide");
}),
globals.AbstractExporter);



smalltalk.addClass('ChunkExporter', globals.AbstractExporter, [], 'Kernel-ImportExport');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.ChunkExporter.comment="I am an exporter dedicated to outputting Amber source code in the classic Smalltalk chunk format.\x0a\x0aI do not output any compiled code.";
//>>excludeEnd("ide");
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
return self}, function($ctx1) {$ctx1.fill(self,"exportCategoryEpilogueOf:on:",{aCategory:aCategory,aStream:aStream},globals.ChunkExporter)});
},
messageSends: ["nextPutAll:", "lf"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCategory", "aStream"],
source: "exportCategoryEpilogueOf: aCategory on: aStream\x0a\x09aStream nextPutAll: ' !'; lf; lf",
referencedClasses: []
//>>excludeEnd("ide");
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
return self}, function($ctx1) {$ctx1.fill(self,"exportCategoryPrologueOf:on:",{aCategory:aCategory,aStream:aStream},globals.ChunkExporter)});
},
messageSends: ["nextPutAll:", ",", "classNameFor:", "theClass", "name"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCategory", "aStream"],
source: "exportCategoryPrologueOf: aCategory on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: '!', (self classNameFor: aCategory theClass);\x0a\x09\x09nextPutAll: ' methodsFor: ''', aCategory name, '''!'",
referencedClasses: []
//>>excludeEnd("ide");
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
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._nextPutAll_(" ");
$ctx2.sendIdx["nextPutAll:"]=5;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
}));
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
return self}, function($ctx1) {$ctx1.fill(self,"exportDefinitionOf:on:",{aClass:aClass,aStream:aStream},globals.ChunkExporter)});
},
messageSends: ["nextPutAll:", "classNameFor:", "superclass", ",", "lf", "tab", "do:separatedBy:", "instanceVariableNames", "category", "ifTrue:", "notEmpty", "comment", "chunkEscape:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aStream"],
source: "exportDefinitionOf: aClass on: aStream\x0a\x09\x22Chunk format.\x22\x0a\x0a\x09aStream\x0a\x09\x09nextPutAll: (self classNameFor: aClass superclass);\x0a\x09\x09nextPutAll: ' subclass: #', (self classNameFor: aClass); lf;\x0a\x09\x09tab; nextPutAll: 'instanceVariableNames: '''.\x0a\x09aClass instanceVariableNames\x0a\x09\x09do: [ :each | aStream nextPutAll: each ]\x0a\x09\x09separatedBy: [ aStream nextPutAll: ' ' ].\x0a\x09aStream\x0a\x09\x09nextPutAll: ''''; lf;\x0a\x09\x09tab; nextPutAll: 'package: ''', aClass category, '''!'; lf.\x0a\x09aClass comment notEmpty ifTrue: [\x0a\x09\x09aStream\x0a\x09\x09nextPutAll: '!', (self classNameFor: aClass), ' commentStamp!';lf;\x0a\x09\x09nextPutAll: (self chunkEscape: aClass comment), '!';lf ].\x0a\x09aStream lf",
referencedClasses: []
//>>excludeEnd("ide");
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
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._nextPutAll_(" ");
$ctx2.sendIdx["nextPutAll:"]=4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
}));
_st(aStream)._nextPutAll_("'!");
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=1;
$7=_st(aStream)._lf();
$7;
};
return self}, function($ctx1) {$ctx1.fill(self,"exportMetaDefinitionOf:on:",{aClass:aClass,aStream:aStream},globals.ChunkExporter)});
},
messageSends: ["ifFalse:", "isEmpty", "instanceVariableNames", "class", "nextPutAll:", "classNameFor:", "do:separatedBy:", "lf"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aStream"],
source: "exportMetaDefinitionOf: aClass on: aStream\x0a\x0a\x09aClass class instanceVariableNames isEmpty ifFalse: [\x0a\x09\x09aStream\x0a\x09\x09\x09nextPutAll: (self classNameFor: aClass class);\x0a\x09\x09\x09nextPutAll: ' instanceVariableNames: '''.\x0a\x09\x09aClass class instanceVariableNames\x0a\x09\x09\x09do: [ :each | aStream nextPutAll: each ]\x0a\x09\x09\x09separatedBy: [ aStream nextPutAll: ' ' ].\x0a\x09\x09aStream\x0a\x09\x09\x09nextPutAll: '''!'; lf; lf ]",
referencedClasses: []
//>>excludeEnd("ide");
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
return self}, function($ctx1) {$ctx1.fill(self,"exportMethod:on:",{aMethod:aMethod,aStream:aStream},globals.ChunkExporter)});
},
messageSends: ["lf", "nextPutAll:", "chunkEscape:", "source"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod", "aStream"],
source: "exportMethod: aMethod on: aStream\x0a\x09aStream\x0a\x09\x09lf; lf; nextPutAll: (self chunkEscape: aMethod source); lf;\x0a\x09\x09nextPutAll: '!'",
referencedClasses: []
//>>excludeEnd("ide");
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
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
}));
self._exportProtocols_on_(self._extensionProtocolsOfPackage_(aPackage),aStream);
return self}, function($ctx1) {$ctx1.fill(self,"exportPackage:on:",{aPackage:aPackage,aStream:aStream},globals.ChunkExporter)});
},
messageSends: ["exportPackageDefinitionOf:on:", "do:", "sortedClasses", "exportDefinitionOf:on:", "exportProtocols:on:", "ownMethodProtocolsOfClass:", "exportMetaDefinitionOf:on:", "class", "extensionProtocolsOfPackage:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackage: aPackage on: aStream\x0a\x0a\x09self exportPackageDefinitionOf: aPackage on: aStream.\x0a\x09\x0a\x09aPackage sortedClasses do: [ :each |\x0a\x09\x09self exportDefinitionOf: each on: aStream.\x0a\x09\x09\x0a\x09\x09self \x0a\x09\x09\x09exportProtocols: (self ownMethodProtocolsOfClass: each)\x0a\x09\x09\x09on: aStream.\x0a\x09\x09\x09\x0a\x09\x09self exportMetaDefinitionOf: each on: aStream.\x0a\x09\x09\x0a\x09\x09self \x0a\x09\x09\x09exportProtocols: (self ownMethodProtocolsOfClass: each class)\x0a\x09\x09\x09on: aStream ].\x0a\x09\x09\x09\x0a\x09self \x0a\x09\x09exportProtocols: (self extensionProtocolsOfPackage: aPackage)\x0a\x09\x09on: aStream",
referencedClasses: []
//>>excludeEnd("ide");
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
return self}, function($ctx1) {$ctx1.fill(self,"exportPackageDefinitionOf:on:",{aPackage:aPackage,aStream:aStream},globals.ChunkExporter)});
},
messageSends: ["nextPutAll:", ",", "name", "lf"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageDefinitionOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: 'Smalltalk createPackage: ''', aPackage name, '''!';\x0a\x09\x09lf",
referencedClasses: []
//>>excludeEnd("ide");
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
}, function($ctx2) {$ctx2.fillBlock({method:method},$ctx1,1)});
}));
self._exportProtocolEpilogueOf_on_(aProtocol,aStream);
return self}, function($ctx1) {$ctx1.fill(self,"exportProtocol:on:",{aProtocol:aProtocol,aStream:aStream},globals.ChunkExporter)});
},
messageSends: ["exportProtocolPrologueOf:on:", "do:", "methods", "exportMethod:on:", "exportProtocolEpilogueOf:on:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProtocol", "aStream"],
source: "exportProtocol: aProtocol on: aStream\x0a\x09self exportProtocolPrologueOf: aProtocol on: aStream.\x0a\x09aProtocol methods do: [ :method | \x0a\x09\x09self exportMethod: method on: aStream ].\x0a\x09self exportProtocolEpilogueOf: aProtocol on: aStream",
referencedClasses: []
//>>excludeEnd("ide");
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
return self}, function($ctx1) {$ctx1.fill(self,"exportProtocolEpilogueOf:on:",{aProtocol:aProtocol,aStream:aStream},globals.ChunkExporter)});
},
messageSends: ["nextPutAll:", "lf"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProtocol", "aStream"],
source: "exportProtocolEpilogueOf: aProtocol on: aStream\x0a\x09aStream nextPutAll: ' !'; lf; lf",
referencedClasses: []
//>>excludeEnd("ide");
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
return self}, function($ctx1) {$ctx1.fill(self,"exportProtocolPrologueOf:on:",{aProtocol:aProtocol,aStream:aStream},globals.ChunkExporter)});
},
messageSends: ["nextPutAll:", ",", "classNameFor:", "theClass", "name"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProtocol", "aStream"],
source: "exportProtocolPrologueOf: aProtocol on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: '!', (self classNameFor: aProtocol theClass);\x0a\x09\x09nextPutAll: ' methodsFor: ''', aProtocol name, '''!'",
referencedClasses: []
//>>excludeEnd("ide");
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
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
}));
return self}, function($ctx1) {$ctx1.fill(self,"exportProtocols:on:",{aCollection:aCollection,aStream:aStream},globals.ChunkExporter)});
},
messageSends: ["do:", "exportProtocol:on:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection", "aStream"],
source: "exportProtocols: aCollection on: aStream\x0a\x09aCollection do: [ :each |\x0a\x09\x09self exportProtocol: each on: aStream ]",
referencedClasses: []
//>>excludeEnd("ide");
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
}, function($ctx4) {$ctx4.fillBlock({category:category,methods:methods},$ctx3,3)});
}));
return _st(result)._addAll_(_st(_st(_st(map)._keys())._sorted_((function(a,b){
return smalltalk.withContext(function($ctx4) {
return _st(a).__lt_eq(b);
}, function($ctx4) {$ctx4.fillBlock({a:a,b:b},$ctx3,5)});
})))._collect_((function(category){
return smalltalk.withContext(function($ctx4) {
return _st($MethodCategory())._name_theClass_methods_(category,aClass,_st(map)._at_(category));
}, function($ctx4) {$ctx4.fillBlock({category:category},$ctx3,6)});
})));
}, function($ctx3) {$ctx3.fillBlock({aClass:aClass},$ctx2,2)});
}));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
}));
$ctx1.sendIdx["do:"]=1;
$2=result;
return $2;
}, function($ctx1) {$ctx1.fill(self,"extensionCategoriesOfPackage:",{aPackage:aPackage,name:name,map:map,result:result},globals.ChunkExporter)});
},
messageSends: ["name", "new", "do:", "sortedClasses:", "classes", "class", "protocolsDo:", "ifTrue:", "=", ",", "at:put:", "addAll:", "collect:", "sorted:", "keys", "<=", "name:theClass:methods:", "at:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "extensionCategoriesOfPackage: aPackage\x0a\x09\x22Issue #143: sort protocol alphabetically\x22\x0a\x0a\x09| name map result |\x0a\x09name := aPackage name.\x0a\x09result := OrderedCollection new.\x0a\x09(Package sortedClasses: Smalltalk classes) do: [ :each |\x0a\x09\x09{each. each class} do: [ :aClass |\x0a\x09\x09\x09map := Dictionary new.\x0a\x09\x09\x09aClass protocolsDo: [ :category :methods |\x0a\x09\x09\x09\x09category = ('*', name) ifTrue: [ map at: category put: methods ] ].\x0a\x09\x09\x09result addAll: ((map keys sorted: [ :a :b | a <= b ]) collect: [ :category |\x0a\x09\x09\x09\x09MethodCategory name: category theClass: aClass methods: (map at: category) ]) ] ].\x0a\x09^ result",
referencedClasses: ["OrderedCollection", "Package", "Smalltalk", "Dictionary", "MethodCategory"]
//>>excludeEnd("ide");
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
}, function($ctx2) {$ctx2.fillBlock({each:each,methods:methods},$ctx1,1)});
}));
$2=_st(_st(_st(map)._keys())._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(a).__lt_eq(b);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,3)});
})))._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st($MethodCategory())._name_theClass_methods_(each,aClass,_st(map)._at_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)});
}));
return $2;
}, function($ctx1) {$ctx1.fill(self,"ownCategoriesOfClass:",{aClass:aClass,map:map},globals.ChunkExporter)});
},
messageSends: ["new", "protocolsDo:", "ifFalse:", "match:", "at:put:", "collect:", "sorted:", "keys", "<=", "name:theClass:methods:", "at:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "ownCategoriesOfClass: aClass\x0a\x09\x22Answer the protocols of aClass that are not package extensions\x22\x0a\x09\x0a\x09\x22Issue #143: sort protocol alphabetically\x22\x0a\x0a\x09| map |\x0a\x09map := Dictionary new.\x0a\x09aClass protocolsDo: [ :each :methods |\x0a\x09\x09(each match: '^\x5c*') ifFalse: [ map at: each put: methods ] ].\x0a\x09^ (map keys sorted: [ :a :b | a <= b ]) collect: [ :each |\x0a\x09\x09MethodCategory name: each theClass: aClass methods: (map at: each) ]",
referencedClasses: ["Dictionary", "MethodCategory"]
//>>excludeEnd("ide");
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
}, function($ctx1) {$ctx1.fill(self,"ownCategoriesOfMetaClass:",{aClass:aClass},globals.ChunkExporter)});
},
messageSends: ["ownCategoriesOfClass:", "class"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "ownCategoriesOfMetaClass: aClass\x0a\x09\x22Issue #143: sort protocol alphabetically\x22\x0a\x0a\x09^ self ownCategoriesOfClass: aClass class",
referencedClasses: []
//>>excludeEnd("ide");
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
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ownMethodProtocolsOfClass:",{aClass:aClass},globals.ChunkExporter)});
},
messageSends: ["collect:", "ownProtocols", "name:theClass:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "ownMethodProtocolsOfClass: aClass\x0a\x09\x22Answer a collection of ExportMethodProtocol object of aClass that are not package extensions\x22\x0a\x09\x0a\x09^ aClass ownProtocols collect: [ :each |\x0a\x09\x09ExportMethodProtocol name: each theClass: aClass ]",
referencedClasses: ["ExportMethodProtocol"]
//>>excludeEnd("ide");
}),
globals.ChunkExporter);



smalltalk.addClass('Exporter', globals.AbstractExporter, [], 'Kernel-ImportExport');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.Exporter.comment="I am responsible for outputting Amber code into a JavaScript string.\x0a\x0aThe generated output is enough to reconstruct the exported data, including Smalltalk source code and other metadata.\x0a\x0a## Use case\x0a\x0aI am typically used to save code outside of the Amber runtime (committing to disk, etc.).";
//>>excludeEnd("ide");
smalltalk.addMethod(
smalltalk.method({
selector: "exportDefinitionOf:on:",
protocol: 'output',
fn: function (aClass,aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3,$4,$6,$5,$7,$9,$8,$10;
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=1;
_st(aStream)._nextPutAll_("smalltalk.addClass(");
$ctx1.sendIdx["nextPutAll:"]=1;
$2="'".__comma(self._classNameFor_(aClass));
$ctx1.sendIdx[","]=2;
$1=_st($2).__comma("', ");
$ctx1.sendIdx[","]=1;
_st(aStream)._nextPutAll_($1);
$ctx1.sendIdx["nextPutAll:"]=2;
$3=self._jsClassNameFor_(_st(aClass)._superclass());
$ctx1.sendIdx["jsClassNameFor:"]=1;
_st(aStream)._nextPutAll_($3);
$ctx1.sendIdx["nextPutAll:"]=3;
$4=_st(aStream)._nextPutAll_(", [");
$ctx1.sendIdx["nextPutAll:"]=4;
_st(_st(aClass)._instanceVariableNames())._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6="'".__comma(each);
$ctx2.sendIdx[","]=4;
$5=_st($6).__comma("'");
$ctx2.sendIdx[","]=3;
return _st(aStream)._nextPutAll_($5);
$ctx2.sendIdx["nextPutAll:"]=5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(aStream)._nextPutAll_(", ");
$ctx2.sendIdx["nextPutAll:"]=6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
_st(aStream)._nextPutAll_("], '");
$ctx1.sendIdx["nextPutAll:"]=7;
_st(aStream)._nextPutAll_(_st(_st(aClass)._category()).__comma("'"));
$ctx1.sendIdx["nextPutAll:"]=8;
$7=_st(aStream)._nextPutAll_(");");
$ctx1.sendIdx["nextPutAll:"]=9;
$9=_st(aClass)._comment();
$ctx1.sendIdx["comment"]=1;
$8=_st($9)._notEmpty();
if(smalltalk.assert($8)){
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=2;
_st(aStream)._nextPutAll_("//>>excludeStart(\x22ide\x22, pragmas.excludeIdeData);");
$ctx1.sendIdx["nextPutAll:"]=10;
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=3;
_st(aStream)._nextPutAll_(self._jsClassNameFor_(aClass));
$ctx1.sendIdx["nextPutAll:"]=11;
_st(aStream)._nextPutAll_(".comment=");
$ctx1.sendIdx["nextPutAll:"]=12;
_st(aStream)._nextPutAll_(_st(_st(aClass)._comment())._asJavascript());
$ctx1.sendIdx["nextPutAll:"]=13;
_st(aStream)._nextPutAll_(";");
$ctx1.sendIdx["nextPutAll:"]=14;
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=4;
$10=_st(aStream)._nextPutAll_("//>>excludeEnd(\x22ide\x22);");
$10;
};
_st(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportDefinitionOf:on:",{aClass:aClass,aStream:aStream},globals.Exporter)});
//>>excludeEnd("ctx");
},
messageSends: ["lf", "nextPutAll:", ",", "classNameFor:", "jsClassNameFor:", "superclass", "do:separatedBy:", "instanceVariableNames", "category", "ifTrue:", "notEmpty", "comment", "asJavascript"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aStream"],
source: "exportDefinitionOf: aClass on: aStream\x0a\x09aStream\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: 'smalltalk.addClass(';\x0a\x09\x09nextPutAll: '''', (self classNameFor: aClass), ''', ';\x0a\x09\x09nextPutAll: (self jsClassNameFor: aClass superclass);\x0a\x09\x09nextPutAll: ', ['.\x0a\x09aClass instanceVariableNames\x0a\x09\x09do: [ :each | aStream nextPutAll: '''', each, '''' ]\x0a\x09\x09separatedBy: [ aStream nextPutAll: ', ' ].\x0a\x09aStream\x0a\x09\x09nextPutAll: '], ''';\x0a\x09\x09nextPutAll: aClass category, '''';\x0a\x09\x09nextPutAll: ');'.\x0a\x09aClass comment notEmpty ifTrue: [\x0a\x09\x09aStream\x0a\x09\x09\x09lf;\x0a\x09\x09\x09nextPutAll: '//>>excludeStart(\x22ide\x22, pragmas.excludeIdeData);';\x0a\x09\x09\x09lf;\x0a\x09\x09\x09nextPutAll: (self jsClassNameFor: aClass);\x0a\x09\x09\x09nextPutAll: '.comment=';\x0a\x09\x09\x09nextPutAll: aClass comment asJavascript;\x0a\x09\x09\x09nextPutAll: ';';\x0a\x09\x09\x09lf;\x0a\x09\x09\x09nextPutAll: '//>>excludeEnd(\x22ide\x22);' ].\x0a\x09aStream lf",
referencedClasses: []
//>>excludeEnd("ide");
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
var $3,$2,$1,$5,$4,$6,$8,$7;
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=1;
$3=_st(aClass)._class();
$ctx1.sendIdx["class"]=1;
$2=_st($3)._instanceVariableNames();
$ctx1.sendIdx["instanceVariableNames"]=1;
$1=_st($2)._isEmpty();
if(! smalltalk.assert($1)){
$5=_st(aClass)._class();
$ctx1.sendIdx["class"]=2;
$4=self._jsClassNameFor_($5);
_st(aStream)._nextPutAll_($4);
$ctx1.sendIdx["nextPutAll:"]=1;
$6=_st(aStream)._nextPutAll_(".iVarNames = [");
$ctx1.sendIdx["nextPutAll:"]=2;
$6;
_st(_st(_st(aClass)._class())._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
$8="'".__comma(each);
$ctx2.sendIdx[","]=2;
$7=_st($8).__comma("'");
$ctx2.sendIdx[","]=1;
return _st(aStream)._nextPutAll_($7);
$ctx2.sendIdx["nextPutAll:"]=3;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aStream)._nextPutAll_(",");
$ctx2.sendIdx["nextPutAll:"]=4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
}));
_st(aStream)._nextPutAll_("];".__comma(_st($String())._lf()));
};
return self}, function($ctx1) {$ctx1.fill(self,"exportMetaDefinitionOf:on:",{aClass:aClass,aStream:aStream},globals.Exporter)});
},
messageSends: ["lf", "ifFalse:", "isEmpty", "instanceVariableNames", "class", "nextPutAll:", "jsClassNameFor:", "do:separatedBy:", ","],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aStream"],
source: "exportMetaDefinitionOf: aClass on: aStream\x0a\x09aStream lf.\x0a\x09aClass class instanceVariableNames isEmpty ifFalse: [\x0a\x09\x09aStream\x0a\x09\x09nextPutAll: (self jsClassNameFor: aClass class);\x0a\x09\x09nextPutAll: '.iVarNames = ['.\x0a\x09\x09aClass class instanceVariableNames\x0a\x09\x09do: [ :each | aStream nextPutAll: '''', each, '''' ]\x0a\x09\x09separatedBy: [ aStream nextPutAll: ',' ].\x0a\x09\x09aStream nextPutAll: '];', String lf ]",
referencedClasses: ["String"]
//>>excludeEnd("ide");
}),
globals.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportMethod:on:",
protocol: 'output',
fn: function (aMethod,aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return smalltalk.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1,$5,$4,$7,$6,$10,$9,$8,$13,$12,$11,$16,$15,$14,$17;
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
$10=_st(_st(aMethod)._messageSends())._asJavascript();
$ctx1.sendIdx["asJavascript"]=2;
$9="messageSends: ".__comma($10);
$ctx1.sendIdx[","]=8;
$8=_st($9).__comma(",");
$ctx1.sendIdx[","]=7;
_st(aStream)._nextPutAll_($8);
$ctx1.sendIdx["nextPutAll:"]=6;
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=6;
_st(aStream)._nextPutAll_("//>>excludeStart(\x22ide\x22, pragmas.excludeIdeData);");
$ctx1.sendIdx["nextPutAll:"]=7;
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=7;
$13=_st(_st(aMethod)._arguments())._asJavascript();
$ctx1.sendIdx["asJavascript"]=3;
$12="args: ".__comma($13);
$ctx1.sendIdx[","]=10;
$11=_st($12).__comma(",");
$ctx1.sendIdx[","]=9;
_st(aStream)._nextPutAll_($11);
$ctx1.sendIdx["nextPutAll:"]=8;
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=8;
$16=_st(_st(aMethod)._source())._asJavascript();
$ctx1.sendIdx["asJavascript"]=4;
$15="source: ".__comma($16);
$ctx1.sendIdx[","]=12;
$14=_st($15).__comma(",");
$ctx1.sendIdx[","]=11;
_st(aStream)._nextPutAll_($14);
$ctx1.sendIdx["nextPutAll:"]=9;
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=9;
_st(aStream)._nextPutAll_("referencedClasses: ".__comma(_st(_st(aMethod)._referencedClasses())._asJavascript()));
$ctx1.sendIdx["nextPutAll:"]=10;
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=10;
_st(aStream)._nextPutAll_("//>>excludeEnd(\x22ide\x22);");
$ctx1.sendIdx["nextPutAll:"]=11;
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=11;
_st(aStream)._nextPutAll_("}),");
$ctx1.sendIdx["nextPutAll:"]=12;
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=12;
_st(aStream)._nextPutAll_(self._jsClassNameFor_(_st(aMethod)._methodClass()));
$ctx1.sendIdx["nextPutAll:"]=13;
_st(aStream)._nextPutAll_(");");
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=13;
$17=_st(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportMethod:on:",{aMethod:aMethod,aStream:aStream},globals.Exporter)});
//>>excludeEnd("ctx");
},
messageSends: ["nextPutAll:", "lf", ",", "asJavascript", "selector", "protocol", "compiledSource", "fn", "messageSends", "arguments", "source", "referencedClasses", "jsClassNameFor:", "methodClass"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod", "aStream"],
source: "exportMethod: aMethod on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: 'smalltalk.addMethod(';lf;\x0a\x09\x09nextPutAll: 'smalltalk.method({';lf;\x0a\x09\x09nextPutAll: 'selector: ', aMethod selector asJavascript, ',';lf;\x0a\x09\x09nextPutAll: 'protocol: ''', aMethod protocol, ''',';lf;\x0a\x09\x09nextPutAll: 'fn: ', aMethod fn compiledSource, ',';lf;\x0a\x09\x09nextPutAll: 'messageSends: ', aMethod messageSends asJavascript, ',';lf;\x0a\x09\x09nextPutAll: '//>>excludeStart(\x22ide\x22, pragmas.excludeIdeData);';lf;\x0a\x09\x09nextPutAll: 'args: ', aMethod arguments asJavascript, ','; lf;\x0a\x09\x09nextPutAll: 'source: ', aMethod source asJavascript, ',';lf;\x0a\x09\x09nextPutAll: 'referencedClasses: ', aMethod referencedClasses asJavascript;lf;\x0a\x09\x09nextPutAll: '//>>excludeEnd(\x22ide\x22);';lf;\x0a\x09\x09nextPutAll: '}),';lf;\x0a\x09\x09nextPutAll: (self jsClassNameFor: aMethod methodClass);\x0a\x09\x09nextPutAll: ');';lf;lf",
referencedClasses: []
//>>excludeEnd("ide");
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
}, function($ctx3) {$ctx3.fillBlock({method:method},$ctx2,2)});
}));
$ctx2.sendIdx["do:"]=2;
self._exportMetaDefinitionOf_on_(each,aStream);
return _st(_st(_st(each)._class())._ownMethods())._do_((function(method){
return smalltalk.withContext(function($ctx3) {
return self._exportMethod_on_(method,aStream);
$ctx3.sendIdx["exportMethod:on:"]=2;
}, function($ctx3) {$ctx3.fillBlock({method:method},$ctx2,3)});
}));
$ctx2.sendIdx["do:"]=3;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
}));
$ctx1.sendIdx["do:"]=1;
_st(self._extensionMethodsOfPackage_(aPackage))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._exportMethod_on_(each,aStream);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)});
}));
self._exportPackageEpilogueOf_on_(aPackage,aStream);
return self}, function($ctx1) {$ctx1.fill(self,"exportPackage:on:",{aPackage:aPackage,aStream:aStream},globals.Exporter)});
},
messageSends: ["exportPackagePrologueOf:on:", "exportPackageDefinitionOf:on:", "exportPackageTransportOf:on:", "do:", "sortedClasses", "exportDefinitionOf:on:", "ownMethods", "exportMethod:on:", "exportMetaDefinitionOf:on:", "class", "extensionMethodsOfPackage:", "exportPackageEpilogueOf:on:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackage: aPackage on: aStream\x0a\x09\x0a\x09self \x0a\x09\x09exportPackagePrologueOf: aPackage on: aStream;\x0a\x09\x09exportPackageDefinitionOf: aPackage on: aStream;\x0a\x09\x09exportPackageTransportOf: aPackage on: aStream.\x0a\x09\x0a\x09aPackage sortedClasses do: [ :each |\x0a\x09\x09self exportDefinitionOf: each on: aStream.\x0a\x09\x09each ownMethods do: [ :method |\x0a\x09\x09\x09self exportMethod: method on: aStream ].\x0a\x09\x09\x09\x0a\x09\x09self exportMetaDefinitionOf: each on: aStream.\x0a\x09\x09each class ownMethods do: [ :method |\x0a\x09\x09\x09self exportMethod: method on: aStream ] ].\x0a\x09\x09\x09\x0a\x09(self extensionMethodsOfPackage: aPackage) do: [ :each |\x0a\x09\x09self exportMethod: each on: aStream ].\x0a\x09\x09\x0a\x09self exportPackageEpilogueOf: aPackage on: aStream",
referencedClasses: []
//>>excludeEnd("ide");
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
return self}, function($ctx1) {$ctx1.fill(self,"exportPackageDefinitionOf:on:",{aPackage:aPackage,aStream:aStream},globals.Exporter)});
},
messageSends: ["nextPutAll:", ",", "name", "lf"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageDefinitionOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: 'smalltalk.addPackage(';\x0a\x09\x09nextPutAll: '''', aPackage name, ''');';\x0a\x09\x09lf",
referencedClasses: []
//>>excludeEnd("ide");
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
return self}, function($ctx1) {$ctx1.fill(self,"exportPackageEpilogueOf:on:",{aPackage:aPackage,aStream:aStream},globals.Exporter)});
},
messageSends: ["nextPutAll:", "lf"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageEpilogueOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: '})(global_smalltalk,global_nil,global__st);';\x0a\x09\x09lf",
referencedClasses: []
//>>excludeEnd("ide");
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
return self}, function($ctx1) {$ctx1.fill(self,"exportPackagePrologueOf:on:",{aPackage:aPackage,aStream:aStream},globals.Exporter)});
},
messageSends: ["nextPutAll:", "lf"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackagePrologueOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: '(function(smalltalk,nil,_st){';\x0a\x09\x09lf",
referencedClasses: []
//>>excludeEnd("ide");
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
return self}, function($ctx1) {$ctx1.fill(self,"exportPackageTransportOf:on:",{aPackage:aPackage,aStream:aStream},globals.Exporter)});
},
messageSends: ["nextPutAll:", "asJavascript", "name", "asJSONString", "transport", "lf"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageTransportOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: 'smalltalk.packages[';\x0a\x09\x09nextPutAll: aPackage name asJavascript;\x0a\x09\x09nextPutAll: '].transport = ';\x0a\x09\x09nextPutAll: aPackage transport asJSONString;\x0a\x09\x09nextPutAll: ';';\x0a\x09\x09lf",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Exporter);

smalltalk.addMethod(
smalltalk.method({
selector: "jsClassNameFor:",
protocol: 'convenience',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=_st(aClass)._isMetaclass();
if(smalltalk.assert($2)){
$1=_st(self._jsClassNameFor_(_st(aClass)._instanceClass())).__comma(".klass");
$ctx1.sendIdx[","]=1;
} else {
if(($receiver = aClass) == null || $receiver.isNil){
$1="null";
} else {
$1="globals.".__comma(_st(aClass)._name());
};
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"jsClassNameFor:",{aClass:aClass},globals.Exporter)});
},
messageSends: ["ifTrue:ifFalse:", "isMetaclass", ",", "jsClassNameFor:", "instanceClass", "ifNil:ifNotNil:", "name"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "jsClassNameFor: aClass\x0a\x09^ aClass isMetaclass\x0a\x09\x09ifTrue: [ (self jsClassNameFor: aClass instanceClass), '.klass' ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09aClass\x0a\x09\x09\x09\x09ifNil: [ 'null' ]\x0a\x09\x09\x09\x09ifNotNil: [ 'globals.', aClass name ] ]",
referencedClasses: []
//>>excludeEnd("ide");
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
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)});
})))._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._protocol())._match_("^\x5c*");
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ownMethodsOfClass:",{aClass:aClass},globals.Exporter)});
},
messageSends: ["reject:", "sorted:", "values", "methodDictionary", "<=", "selector", "match:", "protocol"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "ownMethodsOfClass: aClass\x0a\x09\x22Issue #143: sort methods alphabetically\x22\x0a\x0a\x09^ ((aClass methodDictionary values) sorted: [ :a :b | a selector <= b selector ])\x0a\x09\x09reject: [ :each | (each protocol match: '^\x5c*') ]",
referencedClasses: []
//>>excludeEnd("ide");
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
}, function($ctx1) {$ctx1.fill(self,"ownMethodsOfMetaClass:",{aClass:aClass},globals.Exporter)});
},
messageSends: ["ownMethodsOfClass:", "class"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "ownMethodsOfMetaClass: aClass\x0a\x09\x22Issue #143: sort methods alphabetically\x22\x0a\x0a\x09^ self ownMethodsOfClass: aClass class",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Exporter);



smalltalk.addClass('AmdExporter', globals.Exporter, ['namespace'], 'Kernel-ImportExport');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.AmdExporter.comment="I am used to export Packages in an AMD (Asynchronous Module Definition) JavaScript format.";
//>>excludeEnd("ide");
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
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
})))._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self._amdNamespaceOfPackage_(each)).__comma("/")).__comma(_st(each)._name());
$ctx2.sendIdx[","]=1;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"amdNamesOfPackages:",{anArray:anArray},globals.AmdExporter)});
},
messageSends: ["collect:", "select:", "notNil", "amdNamespaceOfPackage:", ",", "name"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "amdNamesOfPackages: anArray\x0a\x09^ (anArray\x0a\x09\x09select: [ :each | (self amdNamespaceOfPackage: each) notNil ])\x0a\x09\x09collect: [ :each | (self amdNamespaceOfPackage: each), '/', each name ]",
referencedClasses: []
//>>excludeEnd("ide");
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
}, function($ctx1) {$ctx1.fill(self,"amdNamespaceOfPackage:",{aPackage:aPackage},globals.AmdExporter)});
},
messageSends: ["ifTrue:ifFalse:", "=", "type", "transport", "namespace"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "amdNamespaceOfPackage: aPackage\x0a\x09^ (aPackage transport type = 'amd')\x0a\x09\x09ifTrue: [ aPackage transport namespace ]\x0a\x09\x09ifFalse: [ nil ]",
referencedClasses: []
//>>excludeEnd("ide");
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
return self}, function($ctx1) {$ctx1.fill(self,"exportPackageEpilogueOf:on:",{aPackage:aPackage,aStream:aStream},globals.AmdExporter)});
},
messageSends: ["nextPutAll:", "lf"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageEpilogueOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: '});';\x0a\x09\x09lf",
referencedClasses: []
//>>excludeEnd("ide");
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
_st(aStream)._nextPutAll_(_st(["amber/boot"].__comma(self._amdNamesOfPackages_(_st(aPackage)._loadDependencies())))._asJavascript());
$ctx1.sendIdx["nextPutAll:"]=6;
_st(aStream)._nextPutAll_(", function($boot){");
$ctx1.sendIdx["nextPutAll:"]=7;
_st(aStream)._lf();
$ctx1.sendIdx["lf"]=1;
_st(aStream)._nextPutAll_("var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;");
$1=_st(aStream)._lf();
return self}, function($ctx1) {$ctx1.fill(self,"exportPackagePrologueOf:on:",{aPackage:aPackage,aStream:aStream},globals.AmdExporter)});
},
messageSends: ["nextPutAll:", "amdNamespaceOfPackage:", "name", "asJavascript", ",", "amdNamesOfPackages:", "loadDependencies", "lf"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackagePrologueOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: 'define(\x22';\x0a\x09\x09nextPutAll: (self amdNamespaceOfPackage: aPackage);\x0a\x09\x09nextPutAll: '/';\x0a\x09\x09nextPutAll: aPackage name;\x0a\x09\x09nextPutAll: '\x22, ';\x0a\x09\x09nextPutAll: (#('amber/boot'), (self amdNamesOfPackages: aPackage loadDependencies)) asJavascript;\x0a\x09\x09nextPutAll: ', function($boot){';\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: 'var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;';\x0a\x09\x09lf",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.AmdExporter);



smalltalk.addClass('ChunkParser', globals.Object, ['stream', 'last'], 'Kernel-ImportExport');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.ChunkParser.comment="I am responsible for parsing aStream contents in the chunk format.\x0a\x0a## API\x0a\x0a    ChunkParser new\x0a        stream: aStream;\x0a        nextChunk";
//>>excludeEnd("ide");
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
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "last\x0a\x09^ last",
referencedClasses: []
//>>excludeEnd("ide");
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
}))._whileTrue_((function(){
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
}));
self["@last"]=nil;
$4=self["@last"];
return $4;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"nextChunk",{char:char,result:result,chunk:chunk},globals.ChunkParser)});
},
messageSends: ["writeStream", "whileTrue:", "next", "notNil", "ifTrue:", "=", "ifTrue:ifFalse:", "peek", "trimBoth", "contents", "nextPut:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextChunk\x0a\x09\x22The chunk format (Smalltalk Interchange Format or Fileout format)\x0a\x09is a trivial format but can be a bit tricky to understand:\x0a\x09\x09- Uses the exclamation mark as delimiter of chunks.\x0a\x09\x09- Inside a chunk a normal exclamation mark must be doubled.\x0a\x09\x09- A non empty chunk must be a valid Smalltalk expression.\x0a\x09\x09- A chunk on top level with a preceding empty chunk is an instruction chunk:\x0a\x09\x09\x09- The object created by the expression then takes over reading chunks.\x0a\x0a\x09This method returns next chunk as a String (trimmed), empty String (all whitespace) or nil.\x22\x0a\x0a\x09| char result chunk |\x0a\x09result := '' writeStream.\x0a\x09\x09[ char := stream next.\x0a\x09\x09char notNil ] whileTrue: [\x0a\x09\x09\x09\x09char = '!' ifTrue: [\x0a\x09\x09\x09\x09\x09\x09stream peek = '!'\x0a\x09\x09\x09\x09\x09\x09\x09\x09ifTrue: [ stream next \x22skipping the escape double\x22 ]\x0a\x09\x09\x09\x09\x09\x09\x09\x09ifFalse: [ ^ last := result contents trimBoth \x22chunk end marker found\x22 ]].\x0a\x09\x09\x09\x09result nextPut: char ].\x0a\x09^ last := nil \x22a chunk needs to end with !\x22",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.ChunkParser);

smalltalk.addMethod(
smalltalk.method({
selector: "stream:",
protocol: 'accessing',
fn: function (aStream){
var self=this;
self["@stream"]=aStream;
return self
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "stream: aStream\x0a\x09stream := aStream",
referencedClasses: []
//>>excludeEnd("ide");
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
}, function($ctx1) {$ctx1.fill(self,"on:",{aStream:aStream},globals.ChunkParser.klass)});
},
messageSends: ["stream:", "new"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "on: aStream\x0a\x09^ self new stream: aStream",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.ChunkParser.klass);


smalltalk.addClass('ExportMethodProtocol', globals.Object, ['name', 'theClass'], 'Kernel-ImportExport');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.ExportMethodProtocol.comment="I am an abstraction for a method protocol in a class / metaclass.\x0a\x0aI know of my class, name and methods.\x0aI am used when exporting a package.";
//>>excludeEnd("ide");
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
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)});
}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"methods",{},globals.ExportMethodProtocol)});
},
messageSends: ["sorted:", "methodsInProtocol:", "theClass", "name", "<=", "selector"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "methods\x0a\x09^ (self theClass methodsInProtocol: self name)\x0a\x09\x09sorted: [ :a :b | a selector <= b selector ]",
referencedClasses: []
//>>excludeEnd("ide");
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
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "name\x0a\x09^ name",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.ExportMethodProtocol);

smalltalk.addMethod(
smalltalk.method({
selector: "name:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@name"]=aString;
return self
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "name: aString\x0a\x09name := aString",
referencedClasses: []
//>>excludeEnd("ide");
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
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theClass\x0a\x09^ theClass",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.ExportMethodProtocol);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@theClass"]=aClass;
return self
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
referencedClasses: []
//>>excludeEnd("ide");
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
}, function($ctx1) {$ctx1.fill(self,"name:theClass:",{aString:aString,aClass:aClass},globals.ExportMethodProtocol.klass)});
},
messageSends: ["name:", "new", "theClass:", "yourself"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass"],
source: "name: aString theClass: aClass\x0a\x09^ self new\x0a\x09\x09name: aString;\x0a\x09\x09theClass: aClass;\x0a\x09\x09yourself",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.ExportMethodProtocol.klass);


smalltalk.addClass('Importer', globals.Object, ['lastSection', 'lastChunk'], 'Kernel-ImportExport');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.Importer.comment="I can import Amber code from a string in the chunk format.\x0a\x0a## API\x0a\x0a    Importer new import: aString";
//>>excludeEnd("ide");
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
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
}))._whileFalse_((function(){
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
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
}));
self["@lastSection"]="n/a, finished";
return self["@lastSection"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
}))._on_do_($Error(),(function(e){
return smalltalk.withContext(function($ctx2) {
self["@lastChunk"]=_st(parser)._last();
self["@lastChunk"];
return _st(e)._signal();
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,7)});
}));
return self}, function($ctx1) {$ctx1.fill(self,"import:",{aStream:aStream,chunk:chunk,result:result,parser:parser,lastEmpty:lastEmpty},globals.Importer)});
},
messageSends: ["on:", "on:do:", "whileFalse:", "nextChunk", "isNil", "ifTrue:ifFalse:", "isEmpty", "evaluateExpression:", "new", "ifTrue:", "scanFrom:", "last", "signal"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "import: aStream\x0a\x09| chunk result parser lastEmpty |\x0a\x09parser := ChunkParser on: aStream.\x0a\x09lastEmpty := false.\x0a\x09lastSection := 'n/a, not started'.\x0a\x09lastChunk := nil.\x0a\x09[\x0a\x09[ chunk := parser nextChunk.\x0a\x09chunk isNil ] whileFalse: [\x0a\x09\x09chunk isEmpty\x0a\x09\x09\x09ifTrue: [ lastEmpty := true ]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09lastSection := chunk.\x0a\x09\x09\x09\x09result := Compiler new evaluateExpression: chunk.\x0a\x09\x09\x09\x09lastEmpty\x0a\x09\x09\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09lastEmpty := false.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09result scanFrom: parser ]] ].\x0a\x09lastSection := 'n/a, finished'\x0a\x09] on: Error do: [:e | lastChunk := parser last. e signal ].",
referencedClasses: ["ChunkParser", "Compiler", "Error"]
//>>excludeEnd("ide");
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
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastChunk\x0a\x09^ lastChunk",
referencedClasses: []
//>>excludeEnd("ide");
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
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastSection\x0a\x09^ lastSection",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Importer);



smalltalk.addClass('PackageHandler', globals.InterfacingObject, [], 'Kernel-ImportExport');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.PackageHandler.comment="I am responsible for handling package loading and committing.\x0a\x0aI should not be used directly. Instead, use the corresponding `Package` methods.";
//>>excludeEnd("ide");
smalltalk.addMethod(
smalltalk.method({
selector: "ajaxPutAt:data:onSuccess:onError:",
protocol: 'private',
fn: function (aURL,aString,aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._ajax_(globals.HashedCollection._newFromPairs_(["url",aURL,"type","PUT","data",aString,"contentType","text/plain;charset=UTF-8","success",aBlock,"error",anotherBlock]));
return self}, function($ctx1) {$ctx1.fill(self,"ajaxPutAt:data:onSuccess:onError:",{aURL:aURL,aString:aString,aBlock:aBlock,anotherBlock:anotherBlock},globals.PackageHandler)});
},
messageSends: ["ajax:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aURL", "aString", "aBlock", "anotherBlock"],
source: "ajaxPutAt: aURL data: aString onSuccess: aBlock onError: anotherBlock\x0a\x09self\x0a\x09\x09ajax: #{\x0a\x09\x09\x09'url' -> aURL.\x0a\x09\x09\x09'type' -> 'PUT'.\x0a\x09\x09\x09'data' -> aString.\x0a\x09\x09\x09'contentType' -> 'text/plain;charset=UTF-8'.\x0a\x09\x09\x09'success' -> aBlock.\x0a\x09\x09\x09'error' -> anotherBlock\x0a\x09\x09}",
referencedClasses: []
//>>excludeEnd("ide");
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
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1,1)});
}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"chunkContentsFor:",{aPackage:aPackage},globals.PackageHandler)});
},
messageSends: ["streamContents:", "exportPackage:on:", "chunkExporter"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "chunkContentsFor: aPackage\x0a\x09^ String streamContents: [ :str |\x0a\x09\x09self chunkExporter exportPackage: aPackage on: str ]",
referencedClasses: ["String"]
//>>excludeEnd("ide");
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
}, function($ctx1) {$ctx1.fill(self,"chunkExporter",{},globals.PackageHandler)});
},
messageSends: ["new", "chunkExporterClass"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "chunkExporter\x0a\x09^ self chunkExporterClass new",
referencedClasses: []
//>>excludeEnd("ide");
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
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "chunkExporterClass\x0a\x09^ ChunkExporter",
referencedClasses: ["ChunkExporter"]
//>>excludeEnd("ide");
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
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1,2)});
}));
return self}, function($ctx1) {$ctx1.fill(self,"commit:",{aPackage:aPackage},globals.PackageHandler)});
},
messageSends: ["commit:onSuccess:onError:", "messageText:", "new", ",", "responseText", "signal"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "commit: aPackage\x0a\x09self \x0a\x09\x09commit: aPackage\x0a\x09\x09onSuccess: []\x0a\x09\x09onError: [ :error |\x0a\x09\x09\x09PackageCommitError new\x0a\x09\x09\x09\x09messageText: 'Commiting failed with reason: \x22' , (error responseText) , '\x22';\x0a\x09\x09\x09\x09signal ]",
referencedClasses: ["PackageCommitError"]
//>>excludeEnd("ide");
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
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
}),anotherBlock);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
}),anotherBlock);
return self}, function($ctx1) {$ctx1.fill(self,"commit:onSuccess:onError:",{aPackage:aPackage,aBlock:aBlock,anotherBlock:anotherBlock},globals.PackageHandler)});
},
messageSends: ["commitJsFileFor:onSuccess:onError:", "commitStFileFor:onSuccess:onError:", "beClean", "value"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aBlock", "anotherBlock"],
source: "commit: aPackage onSuccess: aBlock onError: anotherBlock\x0a\x09self \x0a\x09\x09commitJsFileFor: aPackage \x0a\x09\x09onSuccess: [\x0a\x09\x09\x09self \x0a\x09\x09\x09\x09commitStFileFor: aPackage \x0a\x09\x09\x09\x09onSuccess: [ aPackage beClean. aBlock value ]\x0a\x09\x09\x09\x09onError: anotherBlock ] \x0a\x09\x09onError: anotherBlock",
referencedClasses: []
//>>excludeEnd("ide");
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
return self}, function($ctx1) {$ctx1.fill(self,"commitJsFileFor:onSuccess:onError:",{aPackage:aPackage,aBlock:aBlock,anotherBlock:anotherBlock},globals.PackageHandler)});
},
messageSends: ["ajaxPutAt:data:onSuccess:onError:", ",", "commitPathJsFor:", "name", "contentsFor:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aBlock", "anotherBlock"],
source: "commitJsFileFor: aPackage onSuccess: aBlock onError: anotherBlock\x0a\x09self \x0a\x09\x09ajaxPutAt: (self commitPathJsFor: aPackage), '/', aPackage name, '.js'\x0a\x09\x09data: (self contentsFor: aPackage)\x0a\x09\x09onSuccess: aBlock\x0a\x09\x09onError: anotherBlock",
referencedClasses: []
//>>excludeEnd("ide");
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
return self}, function($ctx1) {$ctx1.fill(self,"commitPathJsFor:",{aPackage:aPackage},globals.PackageHandler)});
},
messageSends: ["subclassResponsibility"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "commitPathJsFor: aPackage\x0a\x09self subclassResponsibility",
referencedClasses: []
//>>excludeEnd("ide");
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
return self}, function($ctx1) {$ctx1.fill(self,"commitPathStFor:",{aPackage:aPackage},globals.PackageHandler)});
},
messageSends: ["subclassResponsibility"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "commitPathStFor: aPackage\x0a\x09self subclassResponsibility",
referencedClasses: []
//>>excludeEnd("ide");
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
return self}, function($ctx1) {$ctx1.fill(self,"commitStFileFor:onSuccess:onError:",{aPackage:aPackage,aBlock:aBlock,anotherBlock:anotherBlock},globals.PackageHandler)});
},
messageSends: ["ajaxPutAt:data:onSuccess:onError:", ",", "commitPathStFor:", "name", "chunkContentsFor:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aBlock", "anotherBlock"],
source: "commitStFileFor: aPackage onSuccess: aBlock onError: anotherBlock\x0a\x09self \x0a\x09\x09ajaxPutAt: (self commitPathStFor: aPackage), '/', aPackage name, '.st'\x0a\x09\x09data: (self chunkContentsFor: aPackage)\x0a\x09\x09onSuccess: aBlock\x0a\x09\x09onError: anotherBlock",
referencedClasses: []
//>>excludeEnd("ide");
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
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1,1)});
}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"contentsFor:",{aPackage:aPackage},globals.PackageHandler)});
},
messageSends: ["streamContents:", "exportPackage:on:", "exporter"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "contentsFor: aPackage\x0a\x09^ String streamContents: [ :str |\x0a\x09\x09self exporter exportPackage: aPackage on: str ]",
referencedClasses: ["String"]
//>>excludeEnd("ide");
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
}, function($ctx1) {$ctx1.fill(self,"exporter",{},globals.PackageHandler)});
},
messageSends: ["new", "exporterClass"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "exporter\x0a\x09^ self exporterClass new",
referencedClasses: []
//>>excludeEnd("ide");
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
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "exporterClass\x0a\x09^ Exporter",
referencedClasses: ["Exporter"]
//>>excludeEnd("ide");
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
return self}, function($ctx1) {$ctx1.fill(self,"load:",{aPackage:aPackage},globals.PackageHandler)});
},
messageSends: ["subclassResponsibility"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "load: aPackage\x0a\x09self subclassResponsibility",
referencedClasses: []
//>>excludeEnd("ide");
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
return self}, function($ctx1) {$ctx1.fill(self,"onCommitError:",{anError:anError},globals.PackageHandler)});
},
messageSends: ["messageText:", "new", ",", "responseText", "signal"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "onCommitError: anError\x0a\x09PackageCommitError new\x0a\x09\x09messageText: 'Commiting failed with reason: \x22' , (anError responseText) , '\x22';\x0a\x09\x09signal",
referencedClasses: ["PackageCommitError"]
//>>excludeEnd("ide");
}),
globals.PackageHandler);



smalltalk.addClass('AmdPackageHandler', globals.PackageHandler, [], 'Kernel-ImportExport');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.AmdPackageHandler.comment="I am responsible for handling package loading and committing.\x0a\x0aI should not be used directly. Instead, use the corresponding `Package` methods.";
//>>excludeEnd("ide");
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
}, function($ctx1) {$ctx1.fill(self,"commitPathJsFor:",{aPackage:aPackage},globals.AmdPackageHandler)});
},
messageSends: ["toUrl:", "namespaceFor:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "commitPathJsFor: aPackage\x0a\x09^ self toUrl: (self namespaceFor: aPackage)",
referencedClasses: []
//>>excludeEnd("ide");
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
}, function($ctx1) {$ctx1.fill(self,"commitPathStFor:",{aPackage:aPackage,path:path,pathWithout:pathWithout},globals.AmdPackageHandler)});
},
messageSends: ["toUrl:", ",", "namespaceFor:", "commitPathJsFor:", "ifTrue:ifFalse:", "="],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "commitPathStFor: aPackage\x0a\x09\x22If _source is not mapped, .st will be committed to .js path.\x0a\x09It is recommended not to use _source as it can be deprecated.\x22\x0a\x09\x0a\x09| path pathWithout |\x0a\x09path := self toUrl: (self namespaceFor: aPackage), '/_source'.\x0a\x09pathWithout := self commitPathJsFor: aPackage.\x0a\x09^ path = (pathWithout, '/_source') ifTrue: [ pathWithout ] ifFalse: [ path ]",
referencedClasses: []
//>>excludeEnd("ide");
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
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "exporterClass\x0a\x09^ AmdExporter",
referencedClasses: ["AmdExporter"]
//>>excludeEnd("ide");
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
$2=_st($Array())._with_($3);
_st(require)._value_($2);
};
return self}, function($ctx1) {$ctx1.fill(self,"load:",{aPackage:aPackage},globals.AmdPackageHandler)});
},
messageSends: ["ifNil:ifNotNil:", "amdRequire", "error:", "value:", "with:", ",", "namespaceFor:", "name"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "load: aPackage\x0a\x09Smalltalk amdRequire\x0a\x09\x09ifNil: [ self error: 'AMD loader not present' ]\x0a\x09\x09ifNotNil: [ :require |\x0a\x09\x09\x09require value: (Array with: (self namespaceFor: aPackage), '/', aPackage name ) ]",
referencedClasses: ["Smalltalk", "Array"]
//>>excludeEnd("ide");
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
}, function($ctx1) {$ctx1.fill(self,"namespaceFor:",{aPackage:aPackage},globals.AmdPackageHandler)});
},
messageSends: ["namespace", "transport"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "namespaceFor: aPackage\x0a\x09^ aPackage transport namespace",
referencedClasses: []
//>>excludeEnd("ide");
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
}, function($ctx1) {$ctx1.fill(self,"toUrl:",{aString:aString},globals.AmdPackageHandler)});
},
messageSends: ["ifNil:ifNotNil:", "amdRequire", "error:", "value:", "basicAt:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "toUrl: aString\x0a\x09^ Smalltalk amdRequire\x0a\x09\x09ifNil: [ self error: 'AMD loader not present' ]\x0a\x09\x09ifNotNil: [ :require | (require basicAt: 'toUrl') value: aString ]",
referencedClasses: ["Smalltalk"]
//>>excludeEnd("ide");
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
}, function($ctx1) {$ctx1.fill(self,"defaultNamespace",{},globals.AmdPackageHandler.klass)});
},
messageSends: ["defaultAmdNamespace"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultNamespace\x0a\x09^ Smalltalk defaultAmdNamespace",
referencedClasses: ["Smalltalk"]
//>>excludeEnd("ide");
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
return self}, function($ctx1) {$ctx1.fill(self,"defaultNamespace:",{aString:aString},globals.AmdPackageHandler.klass)});
},
messageSends: ["defaultAmdNamespace:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "defaultNamespace: aString\x0a\x09Smalltalk defaultAmdNamespace: aString",
referencedClasses: ["Smalltalk"]
//>>excludeEnd("ide");
}),
globals.AmdPackageHandler.klass);


smalltalk.addClass('PackageTransport', globals.Object, ['package'], 'Kernel-ImportExport');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.PackageTransport.comment="I represent the transport mechanism used to commit a package.\x0a\x0aMy concrete subclasses have a `#handler` to which committing is delegated.";
//>>excludeEnd("ide");
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
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},globals.PackageTransport)});
},
messageSends: ["type"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJSON\x0a\x09^ #{ 'type' -> self type }",
referencedClasses: []
//>>excludeEnd("ide");
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
return self}, function($ctx1) {$ctx1.fill(self,"commit",{},globals.PackageTransport)});
},
messageSends: ["commit:", "commitHandler", "package"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commit\x0a\x09self commitHandler commit: self package",
referencedClasses: []
//>>excludeEnd("ide");
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
}, function($ctx1) {$ctx1.fill(self,"commitHandler",{},globals.PackageTransport)});
},
messageSends: ["new", "commitHandlerClass"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commitHandler\x0a\x09^ self commitHandlerClass new",
referencedClasses: []
//>>excludeEnd("ide");
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
return self}, function($ctx1) {$ctx1.fill(self,"commitHandlerClass",{},globals.PackageTransport)});
},
messageSends: ["subclassResponsibility"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commitHandlerClass\x0a\x09self subclassResponsibility",
referencedClasses: []
//>>excludeEnd("ide");
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
return self}, function($ctx1) {$ctx1.fill(self,"commitOnSuccess:onError:",{aBlock:aBlock,anotherBlock:anotherBlock},globals.PackageTransport)});
},
messageSends: ["commit:onSuccess:onError:", "commitHandler", "package"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "commitOnSuccess: aBlock onError: anotherBlock\x0a\x09self commitHandler \x0a\x09\x09commit: self package\x0a\x09\x09onSuccess: aBlock\x0a\x09\x09onError: anotherBlock",
referencedClasses: []
//>>excludeEnd("ide");
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
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "definition\x0a\x09^ ''",
referencedClasses: []
//>>excludeEnd("ide");
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
return self}, function($ctx1) {$ctx1.fill(self,"load",{},globals.PackageTransport)});
},
messageSends: ["load:", "commitHandler", "package"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "load\x0a\x09self commitHandler load: self package",
referencedClasses: []
//>>excludeEnd("ide");
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
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "package\x0a\x09^ package",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.PackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "package:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
self["@package"]=aPackage;
return self
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "package: aPackage\x0a\x09package := aPackage",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.PackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "setupFromJson:",
protocol: 'initialization',
fn: function (anObject){
var self=this;
return self
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "setupFromJson: anObject\x0a\x09\x22no op. override if needed in subclasses\x22",
referencedClasses: []
//>>excludeEnd("ide");
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
}, function($ctx1) {$ctx1.fill(self,"type",{},globals.PackageTransport)});
},
messageSends: ["type", "class"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "type\x0a\x09^ self class type",
referencedClasses: []
//>>excludeEnd("ide");
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
}, function($ctx1) {$ctx1.fill(self,"classRegisteredFor:",{aString:aString},globals.PackageTransport.klass)});
},
messageSends: ["at:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "classRegisteredFor: aString\x0a\x09^ registry at: aString",
referencedClasses: []
//>>excludeEnd("ide");
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
}, function($ctx1) {$ctx1.fill(self,"defaultType",{},globals.PackageTransport.klass)});
},
messageSends: ["type"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultType\x0a\x09^ AmdPackageTransport type",
referencedClasses: ["AmdPackageTransport"]
//>>excludeEnd("ide");
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
}, function($ctx1) {$ctx1.fill(self,"for:",{aString:aString},globals.PackageTransport.klass)});
},
messageSends: ["new", "classRegisteredFor:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "for: aString\x0a\x09^ (self classRegisteredFor: aString) new",
referencedClasses: []
//>>excludeEnd("ide");
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
}, function($ctx1) {$ctx1.fill(self,"fromJson:",{anObject:anObject},globals.PackageTransport.klass)});
},
messageSends: ["ifNil:", "for:", "defaultType", "setupFromJson:", "type", "yourself"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "fromJson: anObject\x0a\x09anObject ifNil: [ ^ self for: self defaultType ].\x0a\x09\x0a\x09^ (self for: anObject type)\x0a\x09\x09setupFromJson: anObject;\x0a\x09\x09yourself",
referencedClasses: []
//>>excludeEnd("ide");
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
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.PackageTransport.klass)});
},
messageSends: ["initialize", "register"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09registry := #{}.\x0a\x09self register",
referencedClasses: []
//>>excludeEnd("ide");
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
return self}, function($ctx1) {$ctx1.fill(self,"register",{},globals.PackageTransport.klass)});
},
messageSends: ["register:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "register\x0a\x09PackageTransport register: self",
referencedClasses: ["PackageTransport"]
//>>excludeEnd("ide");
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
return self}, function($ctx1) {$ctx1.fill(self,"register:",{aClass:aClass},globals.PackageTransport.klass)});
},
messageSends: ["ifNotNil:", "type", "at:put:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "register: aClass\x0a\x09aClass type ifNotNil: [\x0a\x09\x09registry at: aClass type put: aClass ]",
referencedClasses: []
//>>excludeEnd("ide");
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
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "type\x0a\x09\x22Override in subclasses\x22\x0a\x09^ nil",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.PackageTransport.klass);


smalltalk.addClass('AmdPackageTransport', globals.PackageTransport, ['namespace'], 'Kernel-ImportExport');
//>>excludeStart("ide", pragmas.excludeIdeData);
globals.AmdPackageTransport.comment="I am the default transport for committing packages.\x0a\x0aSee `AmdExporter` and `AmdPackageHandler`.";
//>>excludeEnd("ide");
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
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},globals.AmdPackageTransport)});
},
messageSends: ["at:put:", "asJSON", "namespace", "yourself"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJSON\x0a\x09^ super asJSON\x0a\x09\x09at: 'amdNamespace' put: self namespace;\x0a\x09\x09yourself",
referencedClasses: []
//>>excludeEnd("ide");
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
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commitHandlerClass\x0a\x09^ AmdPackageHandler",
referencedClasses: ["AmdPackageHandler"]
//>>excludeEnd("ide");
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
}, function($ctx1) {$ctx1.fill(self,"defaultNamespace",{},globals.AmdPackageTransport)});
},
messageSends: ["defaultAmdNamespace"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultNamespace\x0a\x09^ Smalltalk defaultAmdNamespace",
referencedClasses: ["Smalltalk"]
//>>excludeEnd("ide");
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
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"definition",{},globals.AmdPackageTransport)});
},
messageSends: ["streamContents:", "nextPutAll:", "name", "class", ",", "namespace"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "definition\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09stream \x0a\x09\x09\x09nextPutAll: self class name;\x0a\x09\x09\x09nextPutAll: ' namespace: ';\x0a\x09\x09\x09nextPutAll: '''', self namespace, '''' ]",
referencedClasses: ["String"]
//>>excludeEnd("ide");
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
}, function($ctx1) {$ctx1.fill(self,"namespace",{},globals.AmdPackageTransport)});
},
messageSends: ["ifNil:", "defaultNamespace"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "namespace\x0a\x09^ namespace ifNil: [ self defaultNamespace ]",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.AmdPackageTransport);

smalltalk.addMethod(
smalltalk.method({
selector: "namespace:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@namespace"]=aString;
return self
},
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "namespace: aString\x0a\x09namespace := aString",
referencedClasses: []
//>>excludeEnd("ide");
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
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},globals.AmdPackageTransport)});
},
messageSends: ["printOn:", "nextPutAll:", "namespace"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09aStream\x0a\x09\x09nextPutAll: ' (AMD Namespace: ';\x0a\x09\x09nextPutAll: self namespace;\x0a\x09\x09nextPutAll: ')'",
referencedClasses: []
//>>excludeEnd("ide");
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
return self}, function($ctx1) {$ctx1.fill(self,"setPath:",{aString:aString},globals.AmdPackageTransport)});
},
messageSends: ["value:", "basicAt:", "namespace"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "setPath: aString\x0a\x09\x22Set the path the the receiver's `namespace`\x22\x0a\x09\x0a\x09(require basicAt: 'config') value: #{\x0a\x09\x09'paths' -> #{\x0a\x09\x09\x09self namespace -> aString\x0a\x09\x09}\x0a\x09}.",
referencedClasses: []
//>>excludeEnd("ide");
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
return self}, function($ctx1) {$ctx1.fill(self,"setupFromJson:",{anObject:anObject},globals.AmdPackageTransport)});
},
messageSends: ["namespace:", "at:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "setupFromJson: anObject\x0a\x09self namespace: (anObject at: 'amdNamespace')",
referencedClasses: []
//>>excludeEnd("ide");
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
}, function($ctx1) {$ctx1.fill(self,"namespace:",{aString:aString},globals.AmdPackageTransport.klass)});
},
messageSends: ["namespace:", "new", "yourself"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "namespace: aString\x0a\x09^ self new\x0a\x09\x09namespace: aString;\x0a\x09\x09yourself",
referencedClasses: []
//>>excludeEnd("ide");
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
messageSends: [],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "type\x0a\x09^ 'amd'",
referencedClasses: []
//>>excludeEnd("ide");
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
}, function($ctx1) {$ctx1.fill(self,"commit",{},globals.Package)});
},
messageSends: ["commit", "transport"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commit\x0a\x09^ self transport commit",
referencedClasses: []
//>>excludeEnd("ide");
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
}, function($ctx1) {$ctx1.fill(self,"load",{},globals.Package)});
},
messageSends: ["load", "transport"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "load\x0a\x09^ self transport load",
referencedClasses: []
//>>excludeEnd("ide");
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
}, function($ctx1) {$ctx1.fill(self,"loadFromNamespace:",{aString:aString},globals.Package)});
},
messageSends: ["namespace:", "transport", "load"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "loadFromNamespace: aString\x0a\x09^ self transport\x0a\x09\x09namespace: aString;\x0a\x09\x09load",
referencedClasses: []
//>>excludeEnd("ide");
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
return self}, function($ctx1) {$ctx1.fill(self,"load:",{aPackageName:aPackageName},globals.Package.klass)});
},
messageSends: ["load", "named:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackageName"],
source: "load: aPackageName\x0a\x09(self named: aPackageName) load",
referencedClasses: []
//>>excludeEnd("ide");
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
return self}, function($ctx1) {$ctx1.fill(self,"load:fromNamespace:",{aPackageName:aPackageName,aString:aString},globals.Package.klass)});
},
messageSends: ["loadFromNamespace:", "named:"],
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackageName", "aString"],
source: "load: aPackageName fromNamespace: aString\x0a\x09(self named: aPackageName) loadFromNamespace: aString",
referencedClasses: []
//>>excludeEnd("ide");
}),
globals.Package.klass);

});
