define("amber_core/Platform-ImportExport", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Kernel-Exceptions", "amber_core/Platform-Services", "amber_core/Kernel-Infrastructure", "amber_core/Kernel-Classes"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Platform-ImportExport');
$core.packages["Platform-ImportExport"].innerEval = function (expr) { return eval(expr); };
$core.packages["Platform-ImportExport"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass('AbstractExporter', $globals.Object, [], 'Platform-ImportExport');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AbstractExporter.comment="I am an abstract exporter for Amber source code.\x0a\x0a## API\x0a\x0aUse `#exportPackage:on:` to export a given package on a Stream.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "classNameFor:",
protocol: 'convenience',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$4,$1;
$2=$recv(aClass)._isMetaclass();
if($core.assert($2)){
$3=$recv($recv(aClass)._instanceClass())._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name"]=1;
//>>excludeEnd("ctx");
$1=$recv($3).__comma(" class");
} else {
$4=$recv(aClass)._isNil();
if($core.assert($4)){
$1="nil";
} else {
$1=$recv(aClass)._name();
};
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classNameFor:",{aClass:aClass},$globals.AbstractExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "classNameFor: aClass\x0a\x09^ aClass isMetaclass\x0a\x09\x09ifTrue: [ aClass instanceClass name, ' class' ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09aClass isNil\x0a\x09\x09\x09\x09ifTrue: [ 'nil' ]\x0a\x09\x09\x09\x09ifFalse: [ aClass name ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isMetaclass", ",", "name", "instanceClass", "isNil"]
}),
$globals.AbstractExporter);

$core.addMethod(
$core.method({
selector: "exportPackage:on:",
protocol: 'output',
fn: function (aPackage,aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackage:on:",{aPackage:aPackage,aStream:aStream},$globals.AbstractExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackage: aPackage on: aStream\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AbstractExporter);

$core.addMethod(
$core.method({
selector: "extensionMethodsOfPackage:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
var result;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
result=$recv($OrderedCollection())._new();
$recv(self._extensionProtocolsOfPackage_(aPackage))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(result)._addAll_($recv(each)._methods());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=result;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"extensionMethodsOfPackage:",{aPackage:aPackage,result:result},$globals.AbstractExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "extensionMethodsOfPackage: aPackage\x0a\x09| result |\x0a\x09\x0a\x09result := OrderedCollection new.\x0a\x09\x0a\x09(self extensionProtocolsOfPackage: aPackage) do: [ :each |\x0a\x09\x09result addAll: each methods ].\x0a\x09\x09\x0a\x09^ result",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["new", "do:", "extensionProtocolsOfPackage:", "addAll:", "methods"]
}),
$globals.AbstractExporter);

$core.addMethod(
$core.method({
selector: "extensionProtocolsOfPackage:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
var extensionName,result;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $ExportMethodProtocol(){return $globals.ExportMethodProtocol||(typeof ExportMethodProtocol=="undefined"?nil:ExportMethodProtocol)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=$recv(aPackage)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name"]=1;
//>>excludeEnd("ctx");
extensionName="*".__comma($1);
result=$recv($OrderedCollection())._new();
$recv($recv($recv($recv($Smalltalk())._classes())._asArray())._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(a)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["name"]=2;
//>>excludeEnd("ctx");
return $recv($2).__lt($recv(b)._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)});
//>>excludeEnd("ctx");
})))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv([each,$recv(each)._class()])._do_((function(behavior){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$3=$recv($recv(behavior)._protocols())._includes_(extensionName);
if($core.assert($3)){
return $recv(result)._add_($recv($ExportMethodProtocol())._name_theClass_(extensionName,behavior));
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({behavior:behavior},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
$4=result;
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"extensionProtocolsOfPackage:",{aPackage:aPackage,extensionName:extensionName,result:result},$globals.AbstractExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "extensionProtocolsOfPackage: aPackage\x0a\x09| extensionName result |\x0a\x09\x0a\x09extensionName := '*', aPackage name.\x0a\x09result := OrderedCollection new.\x0a\x09\x0a\x09\x22The classes must be loaded since it is extensions only.\x0a\x09Therefore topological sorting (dependency resolution) does not matter here.\x0a\x09Not sorting topologically improves the speed by a number of magnitude.\x0a\x09\x0a\x09Not to shuffle diffs, classes are sorted by their name.\x22\x0a\x09\x0a\x09(Smalltalk classes asArray sorted: [ :a :b | a name < b name ]) do: [ :each |\x0a\x09\x09{each. each class} do: [ :behavior |\x0a\x09\x09\x09(behavior protocols includes: extensionName) ifTrue: [\x0a\x09\x09\x09\x09result add: (ExportMethodProtocol name: extensionName theClass: behavior) ] ] ].\x0a\x0a\x09^ result",
referencedClasses: ["OrderedCollection", "Smalltalk", "ExportMethodProtocol"],
//>>excludeEnd("ide");
messageSends: [",", "name", "new", "do:", "sorted:", "asArray", "classes", "<", "class", "ifTrue:", "includes:", "protocols", "add:", "name:theClass:"]
}),
$globals.AbstractExporter);



$core.addClass('ChunkExporter', $globals.AbstractExporter, [], 'Platform-ImportExport');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ChunkExporter.comment="I am an exporter dedicated to outputting Amber source code in the classic Smalltalk chunk format.\x0a\x0aI do not output any compiled code.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "chunkEscape:",
protocol: 'convenience',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(aString)._replace_with_("!","!!"))._trimBoth();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"chunkEscape:",{aString:aString},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "chunkEscape: aString\x0a\x09\x22Replace all occurrences of ! with !! and trim at both ends.\x22\x0a\x0a\x09^ (aString replace: '!' with: '!!') trimBoth",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["trimBoth", "replace:with:"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportCategoryEpilogueOf:on:",
protocol: 'output',
fn: function (aCategory,aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(aStream)._nextPutAll_(" !");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$1=$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportCategoryEpilogueOf:on:",{aCategory:aCategory,aStream:aStream},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCategory", "aStream"],
source: "exportCategoryEpilogueOf: aCategory on: aStream\x0a\x09aStream nextPutAll: ' !'; lf; lf",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "lf"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportCategoryPrologueOf:on:",
protocol: 'output',
fn: function (aCategory,aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
$1="!".__comma(self._classNameFor_($recv(aCategory)._theClass()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$3=$recv(" methodsFor: '".__comma($recv(aCategory)._name())).__comma("'!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$2=$recv(aStream)._nextPutAll_($3);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportCategoryPrologueOf:on:",{aCategory:aCategory,aStream:aStream},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCategory", "aStream"],
source: "exportCategoryPrologueOf: aCategory on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: '!', (self classNameFor: aCategory theClass);\x0a\x09\x09nextPutAll: ' methodsFor: ''', aCategory name, '''!'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", ",", "classNameFor:", "theClass", "name"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportDefinitionOf:on:",
protocol: 'output',
fn: function (aClass,aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$6,$5,$7,$9,$8,$11,$10,$12;
$1=self._classNameFor_($recv(aClass)._superclass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["classNameFor:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$3=self._classNameFor_(aClass);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["classNameFor:"]=2;
//>>excludeEnd("ctx");
$2=" subclass: #".__comma($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._tab();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tab"]=1;
//>>excludeEnd("ctx");
$4=$recv(aStream)._nextPutAll_("instanceVariableNames: '");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$recv($recv(aClass)._instanceVariableNames())._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aStream)._nextPutAll_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aStream)._nextPutAll_(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=5;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(aStream)._nextPutAll_("'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=6;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._tab();
$6="package: '".__comma($recv(aClass)._category());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$5=$recv($6).__comma("'!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=7;
//>>excludeEnd("ctx");
$7=$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=3;
//>>excludeEnd("ctx");
$9=$recv(aClass)._comment();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["comment"]=1;
//>>excludeEnd("ctx");
$8=$recv($9)._notEmpty();
if($core.assert($8)){
$11="!".__comma(self._classNameFor_(aClass));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=5;
//>>excludeEnd("ctx");
$10=$recv($11).__comma(" commentStamp!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=8;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=4;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($recv(self._chunkEscape_($recv(aClass)._comment())).__comma("!"));
$12=$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=5;
//>>excludeEnd("ctx");
$12;
};
$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportDefinitionOf:on:",{aClass:aClass,aStream:aStream},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aStream"],
source: "exportDefinitionOf: aClass on: aStream\x0a\x09\x22Chunk format.\x22\x0a\x0a\x09aStream\x0a\x09\x09nextPutAll: (self classNameFor: aClass superclass);\x0a\x09\x09nextPutAll: ' subclass: #', (self classNameFor: aClass); lf;\x0a\x09\x09tab; nextPutAll: 'instanceVariableNames: '''.\x0a\x09aClass instanceVariableNames\x0a\x09\x09do: [ :each | aStream nextPutAll: each ]\x0a\x09\x09separatedBy: [ aStream nextPutAll: ' ' ].\x0a\x09aStream\x0a\x09\x09nextPutAll: ''''; lf;\x0a\x09\x09tab; nextPutAll: 'package: ''', aClass category, '''!'; lf.\x0a\x09aClass comment notEmpty ifTrue: [\x0a\x09\x09aStream\x0a\x09\x09nextPutAll: '!', (self classNameFor: aClass), ' commentStamp!';lf;\x0a\x09\x09nextPutAll: (self chunkEscape: aClass comment), '!';lf ].\x0a\x09aStream lf",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "classNameFor:", "superclass", ",", "lf", "tab", "do:separatedBy:", "instanceVariableNames", "category", "ifTrue:", "notEmpty", "comment", "chunkEscape:"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportMetaDefinitionOf:on:",
protocol: 'output',
fn: function (aClass,aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$5,$4,$6,$7;
$3=$recv(aClass)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._instanceVariableNames();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["instanceVariableNames"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._isEmpty();
if(!$core.assert($1)){
$5=$recv(aClass)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=2;
//>>excludeEnd("ctx");
$4=self._classNameFor_($5);
$recv(aStream)._nextPutAll_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$6=$recv(aStream)._nextPutAll_(" instanceVariableNames: '");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$6;
$recv($recv($recv(aClass)._class())._instanceVariableNames())._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aStream)._nextPutAll_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aStream)._nextPutAll_(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$recv(aStream)._nextPutAll_("'!");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$7=$recv(aStream)._lf();
$7;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportMetaDefinitionOf:on:",{aClass:aClass,aStream:aStream},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aStream"],
source: "exportMetaDefinitionOf: aClass on: aStream\x0a\x0a\x09aClass class instanceVariableNames isEmpty ifFalse: [\x0a\x09\x09aStream\x0a\x09\x09\x09nextPutAll: (self classNameFor: aClass class);\x0a\x09\x09\x09nextPutAll: ' instanceVariableNames: '''.\x0a\x09\x09aClass class instanceVariableNames\x0a\x09\x09\x09do: [ :each | aStream nextPutAll: each ]\x0a\x09\x09\x09separatedBy: [ aStream nextPutAll: ' ' ].\x0a\x09\x09aStream\x0a\x09\x09\x09nextPutAll: '''!'; lf; lf ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "isEmpty", "instanceVariableNames", "class", "nextPutAll:", "classNameFor:", "do:separatedBy:", "lf"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportMethod:on:",
protocol: 'output',
fn: function (aMethod,aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(self._chunkEscape_($recv(aMethod)._source()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
$1=$recv(aStream)._nextPutAll_("!");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportMethod:on:",{aMethod:aMethod,aStream:aStream},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod", "aStream"],
source: "exportMethod: aMethod on: aStream\x0a\x09aStream\x0a\x09\x09lf; lf; nextPutAll: (self chunkEscape: aMethod source); lf;\x0a\x09\x09nextPutAll: '!'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["lf", "nextPutAll:", "chunkEscape:", "source"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportPackage:on:",
protocol: 'output',
fn: function (aPackage,aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
self._exportPackageDefinitionOf_on_(aPackage,aStream);
$1=self._exportPackageImportsOf_on_(aPackage,aStream);
$recv($recv(aPackage)._sortedClasses())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._exportDefinitionOf_on_(each,aStream);
$2=self._ownMethodProtocolsOfClass_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["ownMethodProtocolsOfClass:"]=1;
//>>excludeEnd("ctx");
self._exportProtocols_on_($2,aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["exportProtocols:on:"]=1;
//>>excludeEnd("ctx");
self._exportMetaDefinitionOf_on_(each,aStream);
return self._exportProtocols_on_(self._ownMethodProtocolsOfClass_($recv(each)._class()),aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["exportProtocols:on:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._exportProtocols_on_(self._extensionProtocolsOfPackage_(aPackage),aStream);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackage:on:",{aPackage:aPackage,aStream:aStream},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackage: aPackage on: aStream\x0a\x0a\x09self\x0a\x09\x09exportPackageDefinitionOf: aPackage on: aStream;\x0a\x09\x09exportPackageImportsOf: aPackage on: aStream.\x0a\x09\x0a\x09aPackage sortedClasses do: [ :each |\x0a\x09\x09self exportDefinitionOf: each on: aStream.\x0a\x09\x09\x0a\x09\x09self \x0a\x09\x09\x09exportProtocols: (self ownMethodProtocolsOfClass: each)\x0a\x09\x09\x09on: aStream.\x0a\x09\x09\x09\x0a\x09\x09self exportMetaDefinitionOf: each on: aStream.\x0a\x09\x09\x0a\x09\x09self \x0a\x09\x09\x09exportProtocols: (self ownMethodProtocolsOfClass: each class)\x0a\x09\x09\x09on: aStream ].\x0a\x09\x09\x09\x0a\x09self \x0a\x09\x09exportProtocols: (self extensionProtocolsOfPackage: aPackage)\x0a\x09\x09on: aStream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["exportPackageDefinitionOf:on:", "exportPackageImportsOf:on:", "do:", "sortedClasses", "exportDefinitionOf:on:", "exportProtocols:on:", "ownMethodProtocolsOfClass:", "exportMetaDefinitionOf:on:", "class", "extensionProtocolsOfPackage:"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportPackageDefinitionOf:on:",
protocol: 'output',
fn: function (aPackage,aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv("Smalltalk createPackage: '".__comma($recv(aPackage)._name())).__comma("'!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($1);
$2=$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageDefinitionOf:on:",{aPackage:aPackage,aStream:aStream},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageDefinitionOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: 'Smalltalk createPackage: ''', aPackage name, '''!';\x0a\x09\x09lf",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", ",", "name", "lf"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportPackageImportsOf:on:",
protocol: 'output',
fn: function (aPackage,aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv($recv(aPackage)._imports())._ifNotEmpty_((function(imports){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_("(Smalltalk packageAt: '");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($recv(aPackage)._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_("') imports: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(self._chunkEscape_($recv(aPackage)._importsDefinition()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_("!");
$1=$recv(aStream)._lf();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({imports:imports},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageImportsOf:on:",{aPackage:aPackage,aStream:aStream},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageImportsOf: aPackage on: aStream\x0a\x09aPackage imports ifNotEmpty: [ :imports |\x0a\x09\x09aStream\x0a\x09\x09\x09nextPutAll: '(Smalltalk packageAt: ''';\x0a\x09\x09\x09nextPutAll: aPackage name;\x0a\x09\x09\x09nextPutAll: ''') imports: ';\x0a\x09\x09\x09nextPutAll: (self chunkEscape: aPackage importsDefinition);\x0a\x09\x09\x09nextPutAll: '!';\x0a\x09\x09\x09lf ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotEmpty:", "imports", "nextPutAll:", "name", "chunkEscape:", "importsDefinition", "lf"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportProtocol:on:",
protocol: 'output',
fn: function (aProtocol,aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._exportProtocolPrologueOf_on_(aProtocol,aStream);
$recv($recv(aProtocol)._methods())._do_((function(method){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._exportMethod_on_(method,aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({method:method},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._exportProtocolEpilogueOf_on_(aProtocol,aStream);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportProtocol:on:",{aProtocol:aProtocol,aStream:aStream},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProtocol", "aStream"],
source: "exportProtocol: aProtocol on: aStream\x0a\x09self exportProtocolPrologueOf: aProtocol on: aStream.\x0a\x09aProtocol methods do: [ :method | \x0a\x09\x09self exportMethod: method on: aStream ].\x0a\x09self exportProtocolEpilogueOf: aProtocol on: aStream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["exportProtocolPrologueOf:on:", "do:", "methods", "exportMethod:on:", "exportProtocolEpilogueOf:on:"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportProtocolEpilogueOf:on:",
protocol: 'output',
fn: function (aProtocol,aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(aStream)._nextPutAll_(" !");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$1=$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportProtocolEpilogueOf:on:",{aProtocol:aProtocol,aStream:aStream},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProtocol", "aStream"],
source: "exportProtocolEpilogueOf: aProtocol on: aStream\x0a\x09aStream nextPutAll: ' !'; lf; lf",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "lf"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportProtocolPrologueOf:on:",
protocol: 'output',
fn: function (aProtocol,aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
$1="!".__comma(self._classNameFor_($recv(aProtocol)._theClass()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$3=$recv(" methodsFor: '".__comma($recv(aProtocol)._name())).__comma("'!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$2=$recv(aStream)._nextPutAll_($3);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportProtocolPrologueOf:on:",{aProtocol:aProtocol,aStream:aStream},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProtocol", "aStream"],
source: "exportProtocolPrologueOf: aProtocol on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: '!', (self classNameFor: aProtocol theClass);\x0a\x09\x09nextPutAll: ' methodsFor: ''', aProtocol name, '''!'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", ",", "classNameFor:", "theClass", "name"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportProtocols:on:",
protocol: 'output',
fn: function (aCollection,aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aCollection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._exportProtocol_on_(each,aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportProtocols:on:",{aCollection:aCollection,aStream:aStream},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection", "aStream"],
source: "exportProtocols: aCollection on: aStream\x0a\x09aCollection do: [ :each |\x0a\x09\x09self exportProtocol: each on: aStream ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "exportProtocol:on:"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "extensionCategoriesOfPackage:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
var name,map,result;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $Package(){return $globals.Package||(typeof Package=="undefined"?nil:Package)}
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $MethodCategory(){return $globals.MethodCategory||(typeof MethodCategory=="undefined"?nil:MethodCategory)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
name=$recv(aPackage)._name();
result=$recv($OrderedCollection())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($recv($Package())._sortedClasses_($recv($Smalltalk())._classes()))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv([each,$recv(each)._class()])._do_((function(aClass){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
map=$recv($Dictionary())._new();
map;
$recv(aClass)._protocolsDo_((function(category,methods){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$1=$recv(category).__eq("*".__comma(name));
if($core.assert($1)){
return $recv(map)._at_put_(category,methods);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({category:category,methods:methods},$ctx3,3)});
//>>excludeEnd("ctx");
}));
return $recv(result)._addAll_($recv($recv($recv(map)._keys())._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(a).__lt_eq(b);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({a:a,b:b},$ctx3,5)});
//>>excludeEnd("ctx");
})))._collect_((function(category){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv($MethodCategory())._name_theClass_methods_(category,aClass,$recv(map)._at_(category));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({category:category},$ctx3,6)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({aClass:aClass},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
$2=result;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"extensionCategoriesOfPackage:",{aPackage:aPackage,name:name,map:map,result:result},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "extensionCategoriesOfPackage: aPackage\x0a\x09\x22Issue #143: sort protocol alphabetically\x22\x0a\x0a\x09| name map result |\x0a\x09name := aPackage name.\x0a\x09result := OrderedCollection new.\x0a\x09(Package sortedClasses: Smalltalk classes) do: [ :each |\x0a\x09\x09{each. each class} do: [ :aClass |\x0a\x09\x09\x09map := Dictionary new.\x0a\x09\x09\x09aClass protocolsDo: [ :category :methods |\x0a\x09\x09\x09\x09category = ('*', name) ifTrue: [ map at: category put: methods ] ].\x0a\x09\x09\x09result addAll: ((map keys sorted: [ :a :b | a <= b ]) collect: [ :category |\x0a\x09\x09\x09\x09MethodCategory name: category theClass: aClass methods: (map at: category) ]) ] ].\x0a\x09^ result",
referencedClasses: ["OrderedCollection", "Package", "Smalltalk", "Dictionary", "MethodCategory"],
//>>excludeEnd("ide");
messageSends: ["name", "new", "do:", "sortedClasses:", "classes", "class", "protocolsDo:", "ifTrue:", "=", ",", "at:put:", "addAll:", "collect:", "sorted:", "keys", "<=", "name:theClass:methods:", "at:"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "ownCategoriesOfClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
var map;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $MethodCategory(){return $globals.MethodCategory||(typeof MethodCategory=="undefined"?nil:MethodCategory)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
map=$recv($Dictionary())._new();
$recv(aClass)._protocolsDo_((function(each,methods){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(each)._match_("^\x5c*");
if(!$core.assert($1)){
return $recv(map)._at_put_(each,methods);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,methods:methods},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=$recv($recv($recv(map)._keys())._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(a).__lt_eq(b);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,3)});
//>>excludeEnd("ctx");
})))._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($MethodCategory())._name_theClass_methods_(each,aClass,$recv(map)._at_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ownCategoriesOfClass:",{aClass:aClass,map:map},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "ownCategoriesOfClass: aClass\x0a\x09\x22Answer the protocols of aClass that are not package extensions\x22\x0a\x09\x0a\x09\x22Issue #143: sort protocol alphabetically\x22\x0a\x0a\x09| map |\x0a\x09map := Dictionary new.\x0a\x09aClass protocolsDo: [ :each :methods |\x0a\x09\x09(each match: '^\x5c*') ifFalse: [ map at: each put: methods ] ].\x0a\x09^ (map keys sorted: [ :a :b | a <= b ]) collect: [ :each |\x0a\x09\x09MethodCategory name: each theClass: aClass methods: (map at: each) ]",
referencedClasses: ["Dictionary", "MethodCategory"],
//>>excludeEnd("ide");
messageSends: ["new", "protocolsDo:", "ifFalse:", "match:", "at:put:", "collect:", "sorted:", "keys", "<=", "name:theClass:methods:", "at:"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "ownCategoriesOfMetaClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._ownCategoriesOfClass_($recv(aClass)._class());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ownCategoriesOfMetaClass:",{aClass:aClass},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "ownCategoriesOfMetaClass: aClass\x0a\x09\x22Issue #143: sort protocol alphabetically\x22\x0a\x0a\x09^ self ownCategoriesOfClass: aClass class",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ownCategoriesOfClass:", "class"]
}),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "ownMethodProtocolsOfClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
function $ExportMethodProtocol(){return $globals.ExportMethodProtocol||(typeof ExportMethodProtocol=="undefined"?nil:ExportMethodProtocol)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(aClass)._ownProtocols())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($ExportMethodProtocol())._name_theClass_(each,aClass);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ownMethodProtocolsOfClass:",{aClass:aClass},$globals.ChunkExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "ownMethodProtocolsOfClass: aClass\x0a\x09\x22Answer a collection of ExportMethodProtocol object of aClass that are not package extensions\x22\x0a\x09\x0a\x09^ aClass ownProtocols collect: [ :each |\x0a\x09\x09ExportMethodProtocol name: each theClass: aClass ]",
referencedClasses: ["ExportMethodProtocol"],
//>>excludeEnd("ide");
messageSends: ["collect:", "ownProtocols", "name:theClass:"]
}),
$globals.ChunkExporter);



$core.addClass('Exporter', $globals.AbstractExporter, [], 'Platform-ImportExport');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Exporter.comment="I am responsible for outputting Amber code into a JavaScript string.\x0a\x0aThe generated output is enough to reconstruct the exported data, including Smalltalk source code and other metadata.\x0a\x0a## Use case\x0a\x0aI am typically used to save code outside of the Amber runtime (committing to disk, etc.).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "exportDefinitionOf:on:",
protocol: 'output',
fn: function (aClass,aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$4,$6,$5,$7,$9,$8,$10;
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_("$core.addClass(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$2="'".__comma(self._classNameFor_(aClass));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma("', ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$3=self._jsClassNameFor_($recv(aClass)._superclass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["jsClassNameFor:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$4=$recv(aStream)._nextPutAll_(", [");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
$recv($recv(aClass)._instanceVariableNames())._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6="'".__comma(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=4;
//>>excludeEnd("ctx");
$5=$recv($6).__comma("'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=3;
//>>excludeEnd("ctx");
return $recv(aStream)._nextPutAll_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=5;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aStream)._nextPutAll_(", ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=6;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(aStream)._nextPutAll_("], '");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=7;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($recv($recv(aClass)._category()).__comma("'"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=8;
//>>excludeEnd("ctx");
$7=$recv(aStream)._nextPutAll_(");");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=9;
//>>excludeEnd("ctx");
$9=$recv(aClass)._comment();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["comment"]=1;
//>>excludeEnd("ctx");
$8=$recv($9)._notEmpty();
if($core.assert($8)){
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_("//>>excludeStart(\x22ide\x22, pragmas.excludeIdeData);");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=10;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=3;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(self._jsClassNameFor_(aClass));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=11;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(".comment=");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=12;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($recv($recv($recv(aClass)._comment())._crlfSanitized())._asJavascript());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=13;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(";");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=14;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=4;
//>>excludeEnd("ctx");
$10=$recv(aStream)._nextPutAll_("//>>excludeEnd(\x22ide\x22);");
$10;
};
$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportDefinitionOf:on:",{aClass:aClass,aStream:aStream},$globals.Exporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aStream"],
source: "exportDefinitionOf: aClass on: aStream\x0a\x09aStream\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: '$core.addClass(';\x0a\x09\x09nextPutAll: '''', (self classNameFor: aClass), ''', ';\x0a\x09\x09nextPutAll: (self jsClassNameFor: aClass superclass);\x0a\x09\x09nextPutAll: ', ['.\x0a\x09aClass instanceVariableNames\x0a\x09\x09do: [ :each | aStream nextPutAll: '''', each, '''' ]\x0a\x09\x09separatedBy: [ aStream nextPutAll: ', ' ].\x0a\x09aStream\x0a\x09\x09nextPutAll: '], ''';\x0a\x09\x09nextPutAll: aClass category, '''';\x0a\x09\x09nextPutAll: ');'.\x0a\x09aClass comment notEmpty ifTrue: [\x0a\x09\x09aStream\x0a\x09\x09\x09lf;\x0a\x09\x09\x09nextPutAll: '//>>excludeStart(\x22ide\x22, pragmas.excludeIdeData);';\x0a\x09\x09\x09lf;\x0a\x09\x09\x09nextPutAll: (self jsClassNameFor: aClass);\x0a\x09\x09\x09nextPutAll: '.comment=';\x0a\x09\x09\x09nextPutAll: aClass comment crlfSanitized asJavascript;\x0a\x09\x09\x09nextPutAll: ';';\x0a\x09\x09\x09lf;\x0a\x09\x09\x09nextPutAll: '//>>excludeEnd(\x22ide\x22);' ].\x0a\x09aStream lf",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["lf", "nextPutAll:", ",", "classNameFor:", "jsClassNameFor:", "superclass", "do:separatedBy:", "instanceVariableNames", "category", "ifTrue:", "notEmpty", "comment", "asJavascript", "crlfSanitized"]
}),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportMetaDefinitionOf:on:",
protocol: 'output',
fn: function (aClass,aStream){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$5,$4,$6,$8,$7;
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$3=$recv(aClass)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._instanceVariableNames();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["instanceVariableNames"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._isEmpty();
if(!$core.assert($1)){
$5=$recv(aClass)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=2;
//>>excludeEnd("ctx");
$4=self._jsClassNameFor_($5);
$recv(aStream)._nextPutAll_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$6=$recv(aStream)._nextPutAll_(".iVarNames = [");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$6;
$recv($recv($recv(aClass)._class())._instanceVariableNames())._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$8="'".__comma(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$7=$recv($8).__comma("'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $recv(aStream)._nextPutAll_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aStream)._nextPutAll_(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$recv(aStream)._nextPutAll_("];".__comma($recv($String())._lf()));
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportMetaDefinitionOf:on:",{aClass:aClass,aStream:aStream},$globals.Exporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aStream"],
source: "exportMetaDefinitionOf: aClass on: aStream\x0a\x09aStream lf.\x0a\x09aClass class instanceVariableNames isEmpty ifFalse: [\x0a\x09\x09aStream\x0a\x09\x09nextPutAll: (self jsClassNameFor: aClass class);\x0a\x09\x09nextPutAll: '.iVarNames = ['.\x0a\x09\x09aClass class instanceVariableNames\x0a\x09\x09do: [ :each | aStream nextPutAll: '''', each, '''' ]\x0a\x09\x09separatedBy: [ aStream nextPutAll: ',' ].\x0a\x09\x09aStream nextPutAll: '];', String lf ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["lf", "ifFalse:", "isEmpty", "instanceVariableNames", "class", "nextPutAll:", "jsClassNameFor:", "do:separatedBy:", ","]
}),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportMethod:on:",
protocol: 'output',
fn: function (aMethod,aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$5,$4,$7,$6,$10,$9,$8,$13,$12,$11,$16,$15,$14,$17;
$recv(aStream)._nextPutAll_("$core.addMethod(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_("$core.method({");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=2;
//>>excludeEnd("ctx");
$3=$recv($recv(aMethod)._selector())._asJavascript();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJavascript"]=1;
//>>excludeEnd("ctx");
$2="selector: ".__comma($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=3;
//>>excludeEnd("ctx");
$5="protocol: '".__comma($recv(aMethod)._protocol());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$4=$recv($5).__comma("',");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=4;
//>>excludeEnd("ctx");
$7="fn: ".__comma($recv($recv(aMethod)._fn())._compiledSource());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=6;
//>>excludeEnd("ctx");
$6=$recv($7).__comma(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=5;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=5;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=5;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_("//>>excludeStart(\x22ide\x22, pragmas.excludeIdeData);");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=6;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=6;
//>>excludeEnd("ctx");
$10=$recv($recv(aMethod)._arguments())._asJavascript();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJavascript"]=2;
//>>excludeEnd("ctx");
$9="args: ".__comma($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=8;
//>>excludeEnd("ctx");
$8=$recv($9).__comma(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=7;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=7;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=7;
//>>excludeEnd("ctx");
$13=$recv($recv(aMethod)._source())._asJavascript();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJavascript"]=3;
//>>excludeEnd("ctx");
$12="source: ".__comma($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=10;
//>>excludeEnd("ctx");
$11=$recv($12).__comma(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=9;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=8;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=8;
//>>excludeEnd("ctx");
$16=$recv($recv(aMethod)._referencedClasses())._asJavascript();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJavascript"]=4;
//>>excludeEnd("ctx");
$15="referencedClasses: ".__comma($16);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=12;
//>>excludeEnd("ctx");
$14=$recv($15).__comma(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=11;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=9;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=9;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_("//>>excludeEnd(\x22ide\x22);");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=10;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=10;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_("messageSends: ".__comma($recv($recv(aMethod)._messageSends())._asJavascript()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=11;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=11;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_("}),");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=12;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=12;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(self._jsClassNameFor_($recv(aMethod)._methodClass()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=13;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(");");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=13;
//>>excludeEnd("ctx");
$17=$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportMethod:on:",{aMethod:aMethod,aStream:aStream},$globals.Exporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod", "aStream"],
source: "exportMethod: aMethod on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: '$core.addMethod(';lf;\x0a\x09\x09nextPutAll: '$core.method({';lf;\x0a\x09\x09nextPutAll: 'selector: ', aMethod selector asJavascript, ',';lf;\x0a\x09\x09nextPutAll: 'protocol: ''', aMethod protocol, ''',';lf;\x0a\x09\x09nextPutAll: 'fn: ', aMethod fn compiledSource, ',';lf;\x0a\x09\x09nextPutAll: '//>>excludeStart(\x22ide\x22, pragmas.excludeIdeData);';lf;\x0a\x09\x09nextPutAll: 'args: ', aMethod arguments asJavascript, ','; lf;\x0a\x09\x09nextPutAll: 'source: ', aMethod source asJavascript, ',';lf;\x0a\x09\x09nextPutAll: 'referencedClasses: ', aMethod referencedClasses asJavascript, ',';lf;\x0a\x09\x09nextPutAll: '//>>excludeEnd(\x22ide\x22);';lf;\x0a\x09\x09nextPutAll: 'messageSends: ', aMethod messageSends asJavascript;lf;\x0a\x09\x09nextPutAll: '}),';lf;\x0a\x09\x09nextPutAll: (self jsClassNameFor: aMethod methodClass);\x0a\x09\x09nextPutAll: ');';lf;lf",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "lf", ",", "asJavascript", "selector", "protocol", "compiledSource", "fn", "arguments", "source", "referencedClasses", "messageSends", "jsClassNameFor:", "methodClass"]
}),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportPackage:on:",
protocol: 'output',
fn: function (aPackage,aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
self._exportPackagePrologueOf_on_(aPackage,aStream);
self._exportPackageDefinitionOf_on_(aPackage,aStream);
self._exportPackageContextOf_on_(aPackage,aStream);
self._exportPackageImportsOf_on_(aPackage,aStream);
$1=self._exportPackageTransportOf_on_(aPackage,aStream);
$recv($recv(aPackage)._sortedClasses())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._exportDefinitionOf_on_(each,aStream);
$2=$recv(each)._ownMethods();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["ownMethods"]=1;
//>>excludeEnd("ctx");
$recv($2)._do_((function(method){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._exportMethod_on_(method,aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["exportMethod:on:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({method:method},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["do:"]=2;
//>>excludeEnd("ctx");
self._exportMetaDefinitionOf_on_(each,aStream);
return $recv($recv($recv(each)._class())._ownMethods())._do_((function(method){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._exportMethod_on_(method,aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["exportMethod:on:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({method:method},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["do:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
$recv(self._extensionMethodsOfPackage_(aPackage))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._exportMethod_on_(each,aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)});
//>>excludeEnd("ctx");
}));
self._exportPackageEpilogueOf_on_(aPackage,aStream);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackage:on:",{aPackage:aPackage,aStream:aStream},$globals.Exporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackage: aPackage on: aStream\x0a\x09\x0a\x09self \x0a\x09\x09exportPackagePrologueOf: aPackage on: aStream;\x0a\x09\x09exportPackageDefinitionOf: aPackage on: aStream;\x0a\x09\x09exportPackageContextOf: aPackage on: aStream;\x0a\x09\x09exportPackageImportsOf: aPackage on: aStream;\x0a\x09\x09exportPackageTransportOf: aPackage on: aStream.\x0a\x09\x0a\x09aPackage sortedClasses do: [ :each |\x0a\x09\x09self exportDefinitionOf: each on: aStream.\x0a\x09\x09each ownMethods do: [ :method |\x0a\x09\x09\x09self exportMethod: method on: aStream ].\x0a\x09\x09\x09\x0a\x09\x09self exportMetaDefinitionOf: each on: aStream.\x0a\x09\x09each class ownMethods do: [ :method |\x0a\x09\x09\x09self exportMethod: method on: aStream ] ].\x0a\x09\x09\x09\x0a\x09(self extensionMethodsOfPackage: aPackage) do: [ :each |\x0a\x09\x09self exportMethod: each on: aStream ].\x0a\x09\x09\x0a\x09self exportPackageEpilogueOf: aPackage on: aStream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["exportPackagePrologueOf:on:", "exportPackageDefinitionOf:on:", "exportPackageContextOf:on:", "exportPackageImportsOf:on:", "exportPackageTransportOf:on:", "do:", "sortedClasses", "exportDefinitionOf:on:", "ownMethods", "exportMethod:on:", "exportMetaDefinitionOf:on:", "class", "extensionMethodsOfPackage:", "exportPackageEpilogueOf:on:"]
}),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportPackageContextOf:on:",
protocol: 'output',
fn: function (aPackage,aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(aStream)._nextPutAll_("$core.packages[");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($recv($recv(aPackage)._name())._asJavascript());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_("].innerEval = ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_("function (expr) { return eval(expr); }");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(";");
$1=$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageContextOf:on:",{aPackage:aPackage,aStream:aStream},$globals.Exporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageContextOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: '$core.packages[';\x0a\x09\x09nextPutAll: aPackage name asJavascript;\x0a\x09\x09nextPutAll: '].innerEval = ';\x0a\x09\x09nextPutAll: 'function (expr) { return eval(expr); }';\x0a\x09\x09nextPutAll: ';';\x0a\x09\x09lf",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "asJavascript", "name", "lf"]
}),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportPackageDefinitionOf:on:",
protocol: 'output',
fn: function (aPackage,aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$recv(aStream)._nextPutAll_("$core.addPackage(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$1=$recv("'".__comma($recv(aPackage)._name())).__comma("');");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($1);
$2=$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageDefinitionOf:on:",{aPackage:aPackage,aStream:aStream},$globals.Exporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageDefinitionOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: '$core.addPackage(';\x0a\x09\x09nextPutAll: '''', aPackage name, ''');';\x0a\x09\x09lf",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", ",", "name", "lf"]
}),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportPackageEpilogueOf:on:",
protocol: 'output',
fn: function (aPackage,aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageEpilogueOf:on:",{aPackage:aPackage,aStream:aStream},$globals.Exporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageEpilogueOf: aPackage on: aStream\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportPackageImportsOf:on:",
protocol: 'output',
fn: function (aPackage,aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$recv($recv(aPackage)._importsAsJson())._ifNotEmpty_((function(imports){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_("$core.packages[");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$1=$recv($recv(aPackage)._name())._asJavascript();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJavascript"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_("].imports = ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($recv(imports)._asJavascript());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(";");
$2=$recv(aStream)._lf();
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({imports:imports},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageImportsOf:on:",{aPackage:aPackage,aStream:aStream},$globals.Exporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageImportsOf: aPackage on: aStream\x0a\x09aPackage importsAsJson ifNotEmpty: [ :imports |\x0a\x09\x09aStream\x0a\x09\x09\x09nextPutAll: '$core.packages[';\x0a\x09\x09\x09nextPutAll: aPackage name asJavascript;\x0a\x09\x09\x09nextPutAll: '].imports = ';\x0a\x09\x09\x09nextPutAll: imports asJavascript;\x0a\x09\x09\x09nextPutAll: ';';\x0a\x09\x09\x09lf ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotEmpty:", "importsAsJson", "nextPutAll:", "asJavascript", "name", "lf"]
}),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportPackagePrologueOf:on:",
protocol: 'output',
fn: function (aPackage,aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackagePrologueOf:on:",{aPackage:aPackage,aStream:aStream},$globals.Exporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackagePrologueOf: aPackage on: aStream\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportPackageTransportOf:on:",
protocol: 'output',
fn: function (aPackage,aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(aStream)._nextPutAll_("$core.packages[");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($recv($recv(aPackage)._name())._asJavascript());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_("].transport = ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($recv($recv(aPackage)._transport())._asJSONString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(";");
$1=$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageTransportOf:on:",{aPackage:aPackage,aStream:aStream},$globals.Exporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageTransportOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: '$core.packages[';\x0a\x09\x09nextPutAll: aPackage name asJavascript;\x0a\x09\x09nextPutAll: '].transport = ';\x0a\x09\x09nextPutAll: aPackage transport asJSONString;\x0a\x09\x09nextPutAll: ';';\x0a\x09\x09lf",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "asJavascript", "name", "asJSONString", "transport", "lf"]
}),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "jsClassNameFor:",
protocol: 'convenience',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=$recv(aClass)._isMetaclass();
if($core.assert($2)){
$1=$recv(self._jsClassNameFor_($recv(aClass)._instanceClass())).__comma(".klass");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
} else {
if(($receiver = aClass) == null || $receiver.isNil){
$1="null";
} else {
$1="$globals.".__comma($recv(aClass)._name());
};
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"jsClassNameFor:",{aClass:aClass},$globals.Exporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "jsClassNameFor: aClass\x0a\x09^ aClass isMetaclass\x0a\x09\x09ifTrue: [ (self jsClassNameFor: aClass instanceClass), '.klass' ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09aClass\x0a\x09\x09\x09\x09ifNil: [ 'null' ]\x0a\x09\x09\x09\x09ifNotNil: [ '$globals.', aClass name ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isMetaclass", ",", "jsClassNameFor:", "instanceClass", "ifNil:ifNotNil:", "name"]
}),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "ownMethodsOfClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$1=$recv($recv($recv($recv(aClass)._methodDictionary())._values())._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(a)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
return $recv($2).__lt_eq($recv(b)._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)});
//>>excludeEnd("ctx");
})))._reject_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._protocol())._match_("^\x5c*");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ownMethodsOfClass:",{aClass:aClass},$globals.Exporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "ownMethodsOfClass: aClass\x0a\x09\x22Issue #143: sort methods alphabetically\x22\x0a\x0a\x09^ ((aClass methodDictionary values) sorted: [ :a :b | a selector <= b selector ])\x0a\x09\x09reject: [ :each | (each protocol match: '^\x5c*') ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["reject:", "sorted:", "values", "methodDictionary", "<=", "selector", "match:", "protocol"]
}),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "ownMethodsOfMetaClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._ownMethodsOfClass_($recv(aClass)._class());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ownMethodsOfMetaClass:",{aClass:aClass},$globals.Exporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "ownMethodsOfMetaClass: aClass\x0a\x09\x22Issue #143: sort methods alphabetically\x22\x0a\x0a\x09^ self ownMethodsOfClass: aClass class",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ownMethodsOfClass:", "class"]
}),
$globals.Exporter);



$core.addClass('AmdExporter', $globals.Exporter, ['namespace'], 'Platform-ImportExport');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AmdExporter.comment="I am used to export Packages in an AMD (Asynchronous Module Definition) JavaScript format.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "amdNamesOfPackages:",
protocol: 'private',
fn: function (anArray){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$1=$recv($recv(anArray)._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=self._amdNamespaceOfPackage_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["amdNamespaceOfPackage:"]=1;
//>>excludeEnd("ctx");
return $recv($2)._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})))._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(self._amdNamespaceOfPackage_(each)).__comma("/")).__comma($recv(each)._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"amdNamesOfPackages:",{anArray:anArray},$globals.AmdExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "amdNamesOfPackages: anArray\x0a\x09^ (anArray\x0a\x09\x09select: [ :each | (self amdNamespaceOfPackage: each) notNil ])\x0a\x09\x09collect: [ :each | (self amdNamespaceOfPackage: each), '/', each name ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "select:", "notNil", "amdNamespaceOfPackage:", ",", "name"]
}),
$globals.AmdExporter);

$core.addMethod(
$core.method({
selector: "amdNamespaceOfPackage:",
protocol: 'private',
fn: function (aPackage){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$2,$1;
$4=$recv(aPackage)._transport();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["transport"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._type();
$2=$recv($3).__eq("amd");
if($core.assert($2)){
$1=$recv($recv(aPackage)._transport())._namespace();
} else {
$1=nil;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"amdNamespaceOfPackage:",{aPackage:aPackage},$globals.AmdExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "amdNamespaceOfPackage: aPackage\x0a\x09^ (aPackage transport type = 'amd')\x0a\x09\x09ifTrue: [ aPackage transport namespace ]\x0a\x09\x09ifFalse: [ nil ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "=", "type", "transport", "namespace"]
}),
$globals.AmdExporter);

$core.addMethod(
$core.method({
selector: "exportPackageEpilogueOf:on:",
protocol: 'output',
fn: function (aPackage,aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(aStream)._nextPutAll_("});");
$1=$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageEpilogueOf:on:",{aPackage:aPackage,aStream:aStream},$globals.AmdExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageEpilogueOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: '});';\x0a\x09\x09lf",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "lf"]
}),
$globals.AmdExporter);

$core.addMethod(
$core.method({
selector: "exportPackagePrologueOf:on:",
protocol: 'output',
fn: function (aPackage,aStream){
var self=this;
var importsForOutput,loadDependencies,pragmaStart,pragmaEnd;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$6,$5,$7,$13,$12,$11,$10,$9,$8,$17,$16,$15,$14,$18;
pragmaStart="";
pragmaEnd="";
importsForOutput=self._importsForOutput_(aPackage);
loadDependencies=self._amdNamesOfPackages_($recv(aPackage)._loadDependencies());
$1=$recv(importsForOutput)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=1;
//>>excludeEnd("ctx");
$recv($1)._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv($String())._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__comma("//>>excludeStart(\x22imports\x22, pragmas.excludeImports);");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$4=$recv($String())._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lf"]=2;
//>>excludeEnd("ctx");
pragmaStart=$recv($2).__comma($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
pragmaStart;
$6=$recv($String())._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lf"]=3;
//>>excludeEnd("ctx");
$5=$recv($6).__comma("//>>excludeEnd(\x22imports\x22);");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=4;
//>>excludeEnd("ctx");
$7=$recv($String())._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lf"]=4;
//>>excludeEnd("ctx");
pragmaEnd=$recv($5).__comma($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=3;
//>>excludeEnd("ctx");
return pragmaEnd;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(aStream)._nextPutAll_("define(\x22");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(self._amdNamespaceOfPackage_(aPackage));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_("/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($recv(aPackage)._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_("\x22, ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=5;
//>>excludeEnd("ctx");
$13=["amber/boot", ":1:"].__comma($recv(importsForOutput)._value());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=7;
//>>excludeEnd("ctx");
$12=$recv($13).__comma([":2:"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=6;
//>>excludeEnd("ctx");
$11=$recv($12).__comma(loadDependencies);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=5;
//>>excludeEnd("ctx");
$10=$recv($11)._asJavascript();
$9=$recv($10)._replace_with_(",\x5cs*[\x22']:1:[\x22']",pragmaStart);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["replace:with:"]=2;
//>>excludeEnd("ctx");
$8=$recv($9)._replace_with_(",\x5cs*[\x22']:2:[\x22']",pragmaEnd);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["replace:with:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=6;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(", function(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=7;
//>>excludeEnd("ctx");
$17=$recv(["$boot", ":1:"].__comma($recv(importsForOutput)._key())).__comma([":2:"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=8;
//>>excludeEnd("ctx");
$16=$recv($17)._join_(",");
$15=$recv($16)._replace_with_(",\x5cs*:1:",pragmaStart);
$14=$recv($15)._replace_with_(",\x5cs*:2:",pragmaEnd);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["replace:with:"]=3;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=8;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_("){");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=9;
//>>excludeEnd("ctx");
$recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=5;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_("var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;");
$18=$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackagePrologueOf:on:",{aPackage:aPackage,aStream:aStream,importsForOutput:importsForOutput,loadDependencies:loadDependencies,pragmaStart:pragmaStart,pragmaEnd:pragmaEnd},$globals.AmdExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackagePrologueOf: aPackage on: aStream\x0a\x09| importsForOutput loadDependencies pragmaStart pragmaEnd |\x0a\x09pragmaStart := ''.\x0a\x09pragmaEnd := ''.\x0a\x09importsForOutput := self importsForOutput: aPackage.\x0a\x09loadDependencies := self amdNamesOfPackages: aPackage loadDependencies.\x0a\x09importsForOutput value ifNotEmpty: [\x0a\x09\x09pragmaStart := String lf, '//>>excludeStart(\x22imports\x22, pragmas.excludeImports);', String lf.\x0a\x09\x09pragmaEnd := String lf, '//>>excludeEnd(\x22imports\x22);', String lf ].\x0a\x09aStream\x0a\x09\x09nextPutAll: 'define(\x22';\x0a\x09\x09nextPutAll: (self amdNamespaceOfPackage: aPackage);\x0a\x09\x09nextPutAll: '/'; \x0a\x09\x09nextPutAll: aPackage name;\x0a\x09\x09nextPutAll: '\x22, ';\x0a\x09\x09nextPutAll: (((\x0a\x09\x09\x09(#('amber/boot' ':1:'), importsForOutput value, #(':2:'), loadDependencies) asJavascript)\x0a\x09\x09\x09replace: ',\x5cs*[\x22'']:1:[\x22'']' with: pragmaStart) replace: ',\x5cs*[\x22'']:2:[\x22'']' with: pragmaEnd);\x0a\x09\x09nextPutAll: ', function(';\x0a\x09\x09nextPutAll: (((\x0a\x09\x09\x09(#('$boot' ':1:'), importsForOutput key, #(':2:')) join: ',')\x0a\x09\x09\x09replace: ',\x5cs*:1:' with: pragmaStart) replace: ',\x5cs*:2:' with: pragmaEnd);\x0a\x09\x09nextPutAll: '){';\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: 'var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;';\x0a\x09\x09lf",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["importsForOutput:", "amdNamesOfPackages:", "loadDependencies", "ifNotEmpty:", "value", ",", "lf", "nextPutAll:", "amdNamespaceOfPackage:", "name", "replace:with:", "asJavascript", "join:", "key"]
}),
$globals.AmdExporter);

$core.addMethod(
$core.method({
selector: "importsForOutput:",
protocol: 'private',
fn: function (aPackage){
var self=this;
var namedImports,anonImports,importVarNames;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
namedImports=[];
anonImports=[];
importVarNames=[];
$recv($recv(aPackage)._imports())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(each)._isString();
if($core.assert($1)){
return $recv(anonImports)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
} else {
$recv(namedImports)._add_($recv(each)._value());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
return $recv(importVarNames)._add_($recv(each)._key());
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=$recv(importVarNames).__minus_gt($recv(namedImports).__comma(anonImports));
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"importsForOutput:",{aPackage:aPackage,namedImports:namedImports,anonImports:anonImports,importVarNames:importVarNames},$globals.AmdExporter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "importsForOutput: aPackage\x0a\x09\x22Returns an association where key is list of import variables\x0a\x09and value is list of external dependencies, with ones imported as variables\x0a\x09put at the beginning with same order as is in key.\x0a\x09\x0a\x09For example imports:{'jQuery'->'jquery'. 'bootstrap'} would yield\x0a\x09#('jQuery') -> #('jquery' 'bootstrap')\x22\x0a\x09| namedImports anonImports importVarNames |\x0a\x09namedImports := #().\x0a\x09anonImports := #().\x0a\x09importVarNames := #().\x0a\x09aPackage imports do: [ :each | each isString\x0a\x09\x09ifTrue: [ anonImports add: each ]\x0a\x09\x09ifFalse: [ namedImports add: each value.\x0a\x09\x09\x09importVarNames add: each key ]].\x0a\x09^ importVarNames -> (namedImports, anonImports)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "imports", "ifTrue:ifFalse:", "isString", "add:", "value", "key", "->", ","]
}),
$globals.AmdExporter);



$core.addClass('ChunkParser', $globals.Object, ['stream', 'last'], 'Platform-ImportExport');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ChunkParser.comment="I am responsible for parsing aStream contents in the chunk format.\x0a\x0a## API\x0a\x0a    ChunkParser new\x0a        stream: aStream;\x0a        nextChunk";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "last",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@last"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "last\x0a\x09^ last",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ChunkParser);

$core.addMethod(
$core.method({
selector: "nextChunk",
protocol: 'reading',
fn: function (){
var self=this;
var char,result,chunk;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
var $early={};
try {
result=""._writeStream();
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
char=$recv(self["@stream"])._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["next"]=1;
//>>excludeEnd("ctx");
char;
return $recv(char)._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(char).__eq("!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
$2=$recv($recv(self["@stream"])._peek()).__eq("!");
if($core.assert($2)){
$recv(self["@stream"])._next();
} else {
self["@last"]=$recv($recv(result)._contents())._trimBoth();
$3=self["@last"];
throw $early=[$3];
};
};
return $recv(result)._nextPut_(char);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
self["@last"]=nil;
$4=self["@last"];
return $4;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextChunk",{char:char,result:result,chunk:chunk},$globals.ChunkParser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextChunk\x0a\x09\x22The chunk format (Smalltalk Interchange Format or Fileout format)\x0a\x09is a trivial format but can be a bit tricky to understand:\x0a\x09\x09- Uses the exclamation mark as delimiter of chunks.\x0a\x09\x09- Inside a chunk a normal exclamation mark must be doubled.\x0a\x09\x09- A non empty chunk must be a valid Smalltalk expression.\x0a\x09\x09- A chunk on top level with a preceding empty chunk is an instruction chunk:\x0a\x09\x09\x09- The object created by the expression then takes over reading chunks.\x0a\x0a\x09This method returns next chunk as a String (trimmed), empty String (all whitespace) or nil.\x22\x0a\x0a\x09| char result chunk |\x0a\x09result := '' writeStream.\x0a\x09\x09[ char := stream next.\x0a\x09\x09char notNil ] whileTrue: [\x0a\x09\x09\x09\x09char = '!' ifTrue: [\x0a\x09\x09\x09\x09\x09\x09stream peek = '!'\x0a\x09\x09\x09\x09\x09\x09\x09\x09ifTrue: [ stream next \x22skipping the escape double\x22 ]\x0a\x09\x09\x09\x09\x09\x09\x09\x09ifFalse: [ ^ last := result contents trimBoth \x22chunk end marker found\x22 ]].\x0a\x09\x09\x09\x09result nextPut: char ].\x0a\x09^ last := nil \x22a chunk needs to end with !\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeStream", "whileTrue:", "next", "notNil", "ifTrue:", "=", "ifTrue:ifFalse:", "peek", "trimBoth", "contents", "nextPut:"]
}),
$globals.ChunkParser);

$core.addMethod(
$core.method({
selector: "stream:",
protocol: 'accessing',
fn: function (aStream){
var self=this;
self["@stream"]=aStream;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "stream: aStream\x0a\x09stream := aStream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ChunkParser);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._new())._stream_(aStream);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aStream:aStream},$globals.ChunkParser.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "on: aStream\x0a\x09^ self new stream: aStream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["stream:", "new"]
}),
$globals.ChunkParser.klass);


$core.addClass('ClassCommentReader', $globals.Object, ['class'], 'Platform-ImportExport');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassCommentReader.comment="I provide a mechanism for retrieving class comments stored on a file.\x0a\x0aSee also `ClassCategoryReader`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "class:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@class"]=aClass;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "class: aClass\x0a\x09class := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassCommentReader);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.ClassCommentReader.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ClassCommentReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.ClassCommentReader);

$core.addMethod(
$core.method({
selector: "scanFrom:",
protocol: 'fileIn',
fn: function (aChunkParser){
var self=this;
var chunk;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
chunk=$recv(aChunkParser)._nextChunk();
$1=$recv(chunk)._isEmpty();
if(!$core.assert($1)){
self._setComment_(chunk);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scanFrom:",{aChunkParser:aChunkParser,chunk:chunk},$globals.ClassCommentReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aChunkParser"],
source: "scanFrom: aChunkParser\x0a\x09| chunk |\x0a\x09chunk := aChunkParser nextChunk.\x0a\x09chunk isEmpty ifFalse: [\x0a\x09\x09self setComment: chunk ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextChunk", "ifFalse:", "isEmpty", "setComment:"]
}),
$globals.ClassCommentReader);

$core.addMethod(
$core.method({
selector: "setComment:",
protocol: 'private',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@class"])._comment_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setComment:",{aString:aString},$globals.ClassCommentReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "setComment: aString\x0a\x09class comment: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["comment:"]
}),
$globals.ClassCommentReader);



$core.addClass('ClassProtocolReader', $globals.Object, ['class', 'category'], 'Platform-ImportExport');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassProtocolReader.comment="I provide a mechanism for retrieving class descriptions stored on a file in the Smalltalk chunk format.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "class:category:",
protocol: 'accessing',
fn: function (aClass,aString){
var self=this;
self["@class"]=aClass;
self["@category"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aString"],
source: "class: aClass category: aString\x0a\x09class := aClass.\x0a\x09category := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassProtocolReader);

$core.addMethod(
$core.method({
selector: "compileMethod:",
protocol: 'private',
fn: function (aString){
var self=this;
function $Compiler(){return $globals.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($Compiler())._new())._install_forClass_protocol_(aString,self["@class"],self["@category"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compileMethod:",{aString:aString},$globals.ClassProtocolReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "compileMethod: aString\x0a\x09Compiler new install: aString forClass: class protocol: category",
referencedClasses: ["Compiler"],
//>>excludeEnd("ide");
messageSends: ["install:forClass:protocol:", "new"]
}),
$globals.ClassProtocolReader);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.ClassProtocolReader.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ClassProtocolReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.ClassProtocolReader);

$core.addMethod(
$core.method({
selector: "scanFrom:",
protocol: 'fileIn',
fn: function (aChunkParser){
var self=this;
var chunk;
function $ClassBuilder(){return $globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
chunk=$recv(aChunkParser)._nextChunk();
chunk;
return $recv(chunk)._isEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._compileMethod_(chunk);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv($recv($ClassBuilder())._new())._setupClass_(self["@class"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scanFrom:",{aChunkParser:aChunkParser,chunk:chunk},$globals.ClassProtocolReader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aChunkParser"],
source: "scanFrom: aChunkParser\x0a\x09| chunk |\x0a\x09[ chunk := aChunkParser nextChunk.\x0a\x09chunk isEmpty ] whileFalse: [\x0a\x09\x09self compileMethod: chunk ].\x0a\x09ClassBuilder new setupClass: class",
referencedClasses: ["ClassBuilder"],
//>>excludeEnd("ide");
messageSends: ["whileFalse:", "nextChunk", "isEmpty", "compileMethod:", "setupClass:", "new"]
}),
$globals.ClassProtocolReader);



$core.addClass('ExportMethodProtocol', $globals.Object, ['name', 'theClass'], 'Platform-ImportExport');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ExportMethodProtocol.comment="I am an abstraction for a method protocol in a class / metaclass.\x0a\x0aI know of my class, name and methods.\x0aI am used when exporting a package.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "methods",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$1=$recv($recv(self._theClass())._methodsInProtocol_(self._name()))._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(a)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
return $recv($2).__lt_eq($recv(b)._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methods",{},$globals.ExportMethodProtocol)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "methods\x0a\x09^ (self theClass methodsInProtocol: self name)\x0a\x09\x09sorted: [ :a :b | a selector <= b selector ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sorted:", "methodsInProtocol:", "theClass", "name", "<=", "selector"]
}),
$globals.ExportMethodProtocol);

$core.addMethod(
$core.method({
selector: "name",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@name"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "name\x0a\x09^ name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ExportMethodProtocol);

$core.addMethod(
$core.method({
selector: "name:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@name"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "name: aString\x0a\x09name := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ExportMethodProtocol);

$core.addMethod(
$core.method({
selector: "theClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@theClass"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theClass\x0a\x09^ theClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ExportMethodProtocol);

$core.addMethod(
$core.method({
selector: "theClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@theClass"]=aClass;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ExportMethodProtocol);


$core.addMethod(
$core.method({
selector: "name:theClass:",
protocol: 'instance creation',
fn: function (aString,aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._name_(aString);
$recv($2)._theClass_(aClass);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"name:theClass:",{aString:aString,aClass:aClass},$globals.ExportMethodProtocol.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass"],
source: "name: aString theClass: aClass\x0a\x09^ self new\x0a\x09\x09name: aString;\x0a\x09\x09theClass: aClass;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["name:", "new", "theClass:", "yourself"]
}),
$globals.ExportMethodProtocol.klass);


$core.addClass('Importer', $globals.Object, ['lastSection', 'lastChunk'], 'Platform-ImportExport');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Importer.comment="I can import Amber code from a string in the chunk format.\x0a\x0a## API\x0a\x0a    Importer new import: aString";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "import:",
protocol: 'fileIn',
fn: function (aStream){
var self=this;
var chunk,result,parser,lastEmpty;
function $ChunkParser(){return $globals.ChunkParser||(typeof ChunkParser=="undefined"?nil:ChunkParser)}
function $Compiler(){return $globals.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
parser=$recv($ChunkParser())._on_(aStream);
lastEmpty=false;
self["@lastSection"]="n/a, not started";
self["@lastChunk"]=nil;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
chunk=$recv(parser)._nextChunk();
chunk;
return $recv(chunk)._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=$recv(chunk)._isEmpty();
if($core.assert($1)){
lastEmpty=true;
return lastEmpty;
} else {
self["@lastSection"]=chunk;
self["@lastSection"];
result=$recv($recv($Compiler())._new())._evaluateExpression_(chunk);
result;
$2=lastEmpty;
if($core.assert($2)){
lastEmpty=false;
lastEmpty;
return $recv(result)._scanFrom_(parser);
};
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
self["@lastSection"]="n/a, finished";
return self["@lastSection"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self["@lastChunk"]=$recv(parser)._last();
self["@lastChunk"];
return $recv(e)._resignal();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,7)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"import:",{aStream:aStream,chunk:chunk,result:result,parser:parser,lastEmpty:lastEmpty},$globals.Importer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "import: aStream\x0a\x09| chunk result parser lastEmpty |\x0a\x09parser := ChunkParser on: aStream.\x0a\x09lastEmpty := false.\x0a\x09lastSection := 'n/a, not started'.\x0a\x09lastChunk := nil.\x0a\x09[\x0a\x09[ chunk := parser nextChunk.\x0a\x09chunk isNil ] whileFalse: [\x0a\x09\x09chunk isEmpty\x0a\x09\x09\x09ifTrue: [ lastEmpty := true ]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09lastSection := chunk.\x0a\x09\x09\x09\x09result := Compiler new evaluateExpression: chunk.\x0a\x09\x09\x09\x09lastEmpty\x0a\x09\x09\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09lastEmpty := false.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09result scanFrom: parser ]] ].\x0a\x09lastSection := 'n/a, finished'\x0a\x09] on: Error do: [:e | lastChunk := parser last. e resignal ].",
referencedClasses: ["ChunkParser", "Compiler", "Error"],
//>>excludeEnd("ide");
messageSends: ["on:", "on:do:", "whileFalse:", "nextChunk", "isNil", "ifTrue:ifFalse:", "isEmpty", "evaluateExpression:", "new", "ifTrue:", "scanFrom:", "last", "resignal"]
}),
$globals.Importer);

$core.addMethod(
$core.method({
selector: "lastChunk",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@lastChunk"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastChunk\x0a\x09^ lastChunk",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Importer);

$core.addMethod(
$core.method({
selector: "lastSection",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@lastSection"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastSection\x0a\x09^ lastSection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Importer);



$core.addClass('PackageCommitError', $globals.Error, [], 'Platform-ImportExport');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.PackageCommitError.comment="I get signaled when an attempt to commit a package has failed.";
//>>excludeEnd("ide");


$core.addClass('PackageHandler', $globals.InterfacingObject, [], 'Platform-ImportExport');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.PackageHandler.comment="I am responsible for handling package loading and committing.\x0a\x0aI should not be used directly. Instead, use the corresponding `Package` methods.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "ajaxPutAt:data:onSuccess:onError:",
protocol: 'private',
fn: function (aURL,aString,aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._ajax_($globals.HashedCollection._newFromPairs_(["url",aURL,"type","PUT","data",aString,"contentType","text/plain;charset=UTF-8","success",aBlock,"error",anotherBlock]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ajaxPutAt:data:onSuccess:onError:",{aURL:aURL,aString:aString,aBlock:aBlock,anotherBlock:anotherBlock},$globals.PackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aURL", "aString", "aBlock", "anotherBlock"],
source: "ajaxPutAt: aURL data: aString onSuccess: aBlock onError: anotherBlock\x0a\x09self\x0a\x09\x09ajax: #{\x0a\x09\x09\x09'url' -> aURL.\x0a\x09\x09\x09'type' -> 'PUT'.\x0a\x09\x09\x09'data' -> aString.\x0a\x09\x09\x09'contentType' -> 'text/plain;charset=UTF-8'.\x0a\x09\x09\x09'success' -> aBlock.\x0a\x09\x09\x09'error' -> anotherBlock\x0a\x09\x09}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ajax:"]
}),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "chunkContentsFor:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($String())._streamContents_((function(str){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._chunkExporter())._exportPackage_on_(aPackage,str);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"chunkContentsFor:",{aPackage:aPackage},$globals.PackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "chunkContentsFor: aPackage\x0a\x09^ String streamContents: [ :str |\x0a\x09\x09self chunkExporter exportPackage: aPackage on: str ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "exportPackage:on:", "chunkExporter"]
}),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "chunkExporter",
protocol: 'factory',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._chunkExporterClass())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"chunkExporter",{},$globals.PackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "chunkExporter\x0a\x09^ self chunkExporterClass new",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "chunkExporterClass"]
}),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "chunkExporterClass",
protocol: 'accessing',
fn: function (){
var self=this;
function $ChunkExporter(){return $globals.ChunkExporter||(typeof ChunkExporter=="undefined"?nil:ChunkExporter)}
return $ChunkExporter();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "chunkExporterClass\x0a\x09^ ChunkExporter",
referencedClasses: ["ChunkExporter"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "commit:",
protocol: 'committing',
fn: function (aPackage){
var self=this;
function $PackageCommitError(){return $globals.PackageCommitError||(typeof PackageCommitError=="undefined"?nil:PackageCommitError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
self._commit_onSuccess_onError_(aPackage,(function(){

}),(function(error){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($PackageCommitError())._new();
$2=$1;
$3=$recv("Commiting failed with reason: \x22".__comma($recv(error)._responseText())).__comma("\x22");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($2)._messageText_($3);
$4=$recv($1)._signal();
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commit:",{aPackage:aPackage},$globals.PackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "commit: aPackage\x0a\x09self \x0a\x09\x09commit: aPackage\x0a\x09\x09onSuccess: []\x0a\x09\x09onError: [ :error |\x0a\x09\x09\x09PackageCommitError new\x0a\x09\x09\x09\x09messageText: 'Commiting failed with reason: \x22' , (error responseText) , '\x22';\x0a\x09\x09\x09\x09signal ]",
referencedClasses: ["PackageCommitError"],
//>>excludeEnd("ide");
messageSends: ["commit:onSuccess:onError:", "messageText:", "new", ",", "responseText", "signal"]
}),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "commit:onSuccess:onError:",
protocol: 'committing',
fn: function (aPackage,aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._commitJsFileFor_onSuccess_onError_(aPackage,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._commitStFileFor_onSuccess_onError_(aPackage,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(aPackage)._beClean();
return $recv(aBlock)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}),anotherBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),anotherBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commit:onSuccess:onError:",{aPackage:aPackage,aBlock:aBlock,anotherBlock:anotherBlock},$globals.PackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aBlock", "anotherBlock"],
source: "commit: aPackage onSuccess: aBlock onError: anotherBlock\x0a\x09self \x0a\x09\x09commitJsFileFor: aPackage \x0a\x09\x09onSuccess: [\x0a\x09\x09\x09self \x0a\x09\x09\x09\x09commitStFileFor: aPackage \x0a\x09\x09\x09\x09onSuccess: [ aPackage beClean. aBlock value ]\x0a\x09\x09\x09\x09onError: anotherBlock ] \x0a\x09\x09onError: anotherBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["commitJsFileFor:onSuccess:onError:", "commitStFileFor:onSuccess:onError:", "beClean", "value"]
}),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "commitJsFileFor:onSuccess:onError:",
protocol: 'committing',
fn: function (aPackage,aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv($recv(self._commitPathJsFor_(aPackage)).__comma("/")).__comma($recv(aPackage)._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma(".js");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
self._ajaxPutAt_data_onSuccess_onError_($1,self._contentsFor_(aPackage),aBlock,anotherBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitJsFileFor:onSuccess:onError:",{aPackage:aPackage,aBlock:aBlock,anotherBlock:anotherBlock},$globals.PackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aBlock", "anotherBlock"],
source: "commitJsFileFor: aPackage onSuccess: aBlock onError: anotherBlock\x0a\x09self \x0a\x09\x09ajaxPutAt: (self commitPathJsFor: aPackage), '/', aPackage name, '.js'\x0a\x09\x09data: (self contentsFor: aPackage)\x0a\x09\x09onSuccess: aBlock\x0a\x09\x09onError: anotherBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ajaxPutAt:data:onSuccess:onError:", ",", "commitPathJsFor:", "name", "contentsFor:"]
}),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "commitPathJsFor:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitPathJsFor:",{aPackage:aPackage},$globals.PackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "commitPathJsFor: aPackage\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "commitPathStFor:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitPathStFor:",{aPackage:aPackage},$globals.PackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "commitPathStFor: aPackage\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "commitStFileFor:onSuccess:onError:",
protocol: 'committing',
fn: function (aPackage,aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv($recv(self._commitPathStFor_(aPackage)).__comma("/")).__comma($recv(aPackage)._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma(".st");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
self._ajaxPutAt_data_onSuccess_onError_($1,self._chunkContentsFor_(aPackage),aBlock,anotherBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitStFileFor:onSuccess:onError:",{aPackage:aPackage,aBlock:aBlock,anotherBlock:anotherBlock},$globals.PackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aBlock", "anotherBlock"],
source: "commitStFileFor: aPackage onSuccess: aBlock onError: anotherBlock\x0a\x09self \x0a\x09\x09ajaxPutAt: (self commitPathStFor: aPackage), '/', aPackage name, '.st'\x0a\x09\x09data: (self chunkContentsFor: aPackage)\x0a\x09\x09onSuccess: aBlock\x0a\x09\x09onError: anotherBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ajaxPutAt:data:onSuccess:onError:", ",", "commitPathStFor:", "name", "chunkContentsFor:"]
}),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "contentsFor:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($String())._streamContents_((function(str){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._exporter())._exportPackage_on_(aPackage,str);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"contentsFor:",{aPackage:aPackage},$globals.PackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "contentsFor: aPackage\x0a\x09^ String streamContents: [ :str |\x0a\x09\x09self exporter exportPackage: aPackage on: str ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "exportPackage:on:", "exporter"]
}),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "exporter",
protocol: 'factory',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._exporterClass())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exporter",{},$globals.PackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "exporter\x0a\x09^ self exporterClass new",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "exporterClass"]
}),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "exporterClass",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exporterClass",{},$globals.PackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "exporterClass\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "load:",
protocol: 'loading',
fn: function (aPackage){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"load:",{aPackage:aPackage},$globals.PackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "load: aPackage\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "onCommitError:",
protocol: 'error handling',
fn: function (anError){
var self=this;
function $PackageCommitError(){return $globals.PackageCommitError||(typeof PackageCommitError=="undefined"?nil:PackageCommitError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=$recv($PackageCommitError())._new();
$2=$1;
$3=$recv("Commiting failed with reason: \x22".__comma($recv(anError)._responseText())).__comma("\x22");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($2)._messageText_($3);
$4=$recv($1)._signal();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onCommitError:",{anError:anError},$globals.PackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "onCommitError: anError\x0a\x09PackageCommitError new\x0a\x09\x09messageText: 'Commiting failed with reason: \x22' , (anError responseText) , '\x22';\x0a\x09\x09signal",
referencedClasses: ["PackageCommitError"],
//>>excludeEnd("ide");
messageSends: ["messageText:", "new", ",", "responseText", "signal"]
}),
$globals.PackageHandler);



$core.addClass('AmdPackageHandler', $globals.PackageHandler, [], 'Platform-ImportExport');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AmdPackageHandler.comment="I am responsible for handling package loading and committing.\x0a\x0aI should not be used directly. Instead, use the corresponding `Package` methods.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "commitPathJsFor:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._toUrl_(self._namespaceFor_(aPackage));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitPathJsFor:",{aPackage:aPackage},$globals.AmdPackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "commitPathJsFor: aPackage\x0a\x09^ self toUrl: (self namespaceFor: aPackage)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["toUrl:", "namespaceFor:"]
}),
$globals.AmdPackageHandler);

$core.addMethod(
$core.method({
selector: "commitPathStFor:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
var path,pathWithout;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
$1=$recv(self._namespaceFor_(aPackage)).__comma("/_source");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
path=self._toUrl_($1);
pathWithout=self._commitPathJsFor_(aPackage);
$3=$recv(path).__eq($recv(pathWithout).__comma("/_source"));
if($core.assert($3)){
$2=pathWithout;
} else {
$2=path;
};
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitPathStFor:",{aPackage:aPackage,path:path,pathWithout:pathWithout},$globals.AmdPackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "commitPathStFor: aPackage\x0a\x09\x22If _source is not mapped, .st will be committed to .js path.\x0a\x09It is recommended not to use _source as it can be deprecated.\x22\x0a\x09\x0a\x09| path pathWithout |\x0a\x09path := self toUrl: (self namespaceFor: aPackage), '/_source'.\x0a\x09pathWithout := self commitPathJsFor: aPackage.\x0a\x09^ path = (pathWithout, '/_source') ifTrue: [ pathWithout ] ifFalse: [ path ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["toUrl:", ",", "namespaceFor:", "commitPathJsFor:", "ifTrue:ifFalse:", "="]
}),
$globals.AmdPackageHandler);

$core.addMethod(
$core.method({
selector: "exporterClass",
protocol: 'accessing',
fn: function (){
var self=this;
function $AmdExporter(){return $globals.AmdExporter||(typeof AmdExporter=="undefined"?nil:AmdExporter)}
return $AmdExporter();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "exporterClass\x0a\x09^ AmdExporter",
referencedClasses: ["AmdExporter"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AmdPackageHandler);

$core.addMethod(
$core.method({
selector: "load:",
protocol: 'loading',
fn: function (aPackage){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$receiver;
$1=$recv($Smalltalk())._amdRequire();
if(($receiver = $1) == null || $receiver.isNil){
self._error_("AMD loader not present");
} else {
var require;
require=$receiver;
$3=$recv($recv(self._namespaceFor_(aPackage)).__comma("/")).__comma($recv(aPackage)._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$2=$recv($Array())._with_($3);
$recv(require)._value_($2);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"load:",{aPackage:aPackage},$globals.AmdPackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "load: aPackage\x0a\x09Smalltalk amdRequire\x0a\x09\x09ifNil: [ self error: 'AMD loader not present' ]\x0a\x09\x09ifNotNil: [ :require |\x0a\x09\x09\x09require value: (Array with: (self namespaceFor: aPackage), '/', aPackage name ) ]",
referencedClasses: ["Smalltalk", "Array"],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "amdRequire", "error:", "value:", "with:", ",", "namespaceFor:", "name"]
}),
$globals.AmdPackageHandler);

$core.addMethod(
$core.method({
selector: "namespaceFor:",
protocol: 'committing',
fn: function (aPackage){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(aPackage)._transport())._namespace();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"namespaceFor:",{aPackage:aPackage},$globals.AmdPackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "namespaceFor: aPackage\x0a\x09^ aPackage transport namespace",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["namespace", "transport"]
}),
$globals.AmdPackageHandler);

$core.addMethod(
$core.method({
selector: "toUrl:",
protocol: 'private',
fn: function (aString){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=$recv($Smalltalk())._amdRequire();
if(($receiver = $2) == null || $receiver.isNil){
$1=self._error_("AMD loader not present");
} else {
var require;
require=$receiver;
$1=$recv($recv(require)._basicAt_("toUrl"))._value_(aString);
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toUrl:",{aString:aString},$globals.AmdPackageHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "toUrl: aString\x0a\x09^ Smalltalk amdRequire\x0a\x09\x09ifNil: [ self error: 'AMD loader not present' ]\x0a\x09\x09ifNotNil: [ :require | (require basicAt: 'toUrl') value: aString ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "amdRequire", "error:", "value:", "basicAt:"]
}),
$globals.AmdPackageHandler);


$core.addMethod(
$core.method({
selector: "defaultNamespace",
protocol: 'commit paths',
fn: function (){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($Smalltalk())._defaultAmdNamespace();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultNamespace",{},$globals.AmdPackageHandler.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultNamespace\x0a\x09^ Smalltalk defaultAmdNamespace",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["defaultAmdNamespace"]
}),
$globals.AmdPackageHandler.klass);

$core.addMethod(
$core.method({
selector: "defaultNamespace:",
protocol: 'commit paths',
fn: function (aString){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($Smalltalk())._defaultAmdNamespace_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultNamespace:",{aString:aString},$globals.AmdPackageHandler.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "defaultNamespace: aString\x0a\x09Smalltalk defaultAmdNamespace: aString",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["defaultAmdNamespace:"]
}),
$globals.AmdPackageHandler.klass);


$core.addClass('PackageTransport', $globals.Object, ['package'], 'Platform-ImportExport');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.PackageTransport.comment="I represent the transport mechanism used to commit a package.\x0a\x0aMy concrete subclasses have a `#handler` to which committing is delegated.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "asJSON",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$globals.HashedCollection._newFromPairs_(["type",self._type()]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},$globals.PackageTransport)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJSON\x0a\x09^ #{ 'type' -> self type }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["type"]
}),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "commit",
protocol: 'committing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._commitHandler())._commit_(self._package());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commit",{},$globals.PackageTransport)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commit\x0a\x09self commitHandler commit: self package",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["commit:", "commitHandler", "package"]
}),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "commitHandler",
protocol: 'factory',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._commitHandlerClass())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitHandler",{},$globals.PackageTransport)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commitHandler\x0a\x09^ self commitHandlerClass new",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "commitHandlerClass"]
}),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "commitHandlerClass",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitHandlerClass",{},$globals.PackageTransport)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commitHandlerClass\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "commitOnSuccess:onError:",
protocol: 'committing',
fn: function (aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._commitHandler())._commit_onSuccess_onError_(self._package(),aBlock,anotherBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitOnSuccess:onError:",{aBlock:aBlock,anotherBlock:anotherBlock},$globals.PackageTransport)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "commitOnSuccess: aBlock onError: anotherBlock\x0a\x09self commitHandler \x0a\x09\x09commit: self package\x0a\x09\x09onSuccess: aBlock\x0a\x09\x09onError: anotherBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["commit:onSuccess:onError:", "commitHandler", "package"]
}),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "definition",
protocol: 'accessing',
fn: function (){
var self=this;
return "";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "definition\x0a\x09^ ''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "load",
protocol: 'loading',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._commitHandler())._load_(self._package());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"load",{},$globals.PackageTransport)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "load\x0a\x09self commitHandler load: self package",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["load:", "commitHandler", "package"]
}),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "package",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@package"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "package\x0a\x09^ package",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "package:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
self["@package"]=aPackage;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "package: aPackage\x0a\x09package := aPackage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "setupFromJson:",
protocol: 'initialization',
fn: function (anObject){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "setupFromJson: anObject\x0a\x09\x22no op. override if needed in subclasses\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "type",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class())._type();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"type",{},$globals.PackageTransport)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "type\x0a\x09^ self class type",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["type", "class"]
}),
$globals.PackageTransport);


$globals.PackageTransport.klass.iVarNames = ['registry'];
$core.addMethod(
$core.method({
selector: "classRegisteredFor:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@registry"])._at_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classRegisteredFor:",{aString:aString},$globals.PackageTransport.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "classRegisteredFor: aString\x0a\x09^ registry at: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.PackageTransport.klass);

$core.addMethod(
$core.method({
selector: "defaultType",
protocol: 'accessing',
fn: function (){
var self=this;
function $AmdPackageTransport(){return $globals.AmdPackageTransport||(typeof AmdPackageTransport=="undefined"?nil:AmdPackageTransport)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($AmdPackageTransport())._type();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultType",{},$globals.PackageTransport.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultType\x0a\x09^ AmdPackageTransport type",
referencedClasses: ["AmdPackageTransport"],
//>>excludeEnd("ide");
messageSends: ["type"]
}),
$globals.PackageTransport.klass);

$core.addMethod(
$core.method({
selector: "for:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._classRegisteredFor_(aString))._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"for:",{aString:aString},$globals.PackageTransport.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "for: aString\x0a\x09^ (self classRegisteredFor: aString) new",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "classRegisteredFor:"]
}),
$globals.PackageTransport.klass);

$core.addMethod(
$core.method({
selector: "fromJson:",
protocol: 'instance creation',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$2,$receiver;
if(($receiver = anObject) == null || $receiver.isNil){
$1=self._for_(self._defaultType());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["for:"]=1;
//>>excludeEnd("ctx");
return $1;
} else {
anObject;
};
$3=self._for_($recv(anObject)._type());
$recv($3)._setupFromJson_(anObject);
$4=$recv($3)._yourself();
$2=$4;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromJson:",{anObject:anObject},$globals.PackageTransport.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "fromJson: anObject\x0a\x09anObject ifNil: [ ^ self for: self defaultType ].\x0a\x09\x0a\x09^ (self for: anObject type)\x0a\x09\x09setupFromJson: anObject;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "for:", "defaultType", "setupFromJson:", "type", "yourself"]
}),
$globals.PackageTransport.klass);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $PackageTransport(){return $globals.PackageTransport||(typeof PackageTransport=="undefined"?nil:PackageTransport)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.PackageTransport.klass.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=self.__eq_eq($PackageTransport());
if($core.assert($1)){
self["@registry"]=$globals.HashedCollection._newFromPairs_([]);
self["@registry"];
} else {
self._register();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.PackageTransport.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self == PackageTransport\x0a\x09\x09ifTrue: [ registry := #{} ]\x0a\x09\x09ifFalse: [ self register ]",
referencedClasses: ["PackageTransport"],
//>>excludeEnd("ide");
messageSends: ["initialize", "ifTrue:ifFalse:", "==", "register"]
}),
$globals.PackageTransport.klass);

$core.addMethod(
$core.method({
selector: "register",
protocol: 'registration',
fn: function (){
var self=this;
function $PackageTransport(){return $globals.PackageTransport||(typeof PackageTransport=="undefined"?nil:PackageTransport)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($PackageTransport())._register_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"register",{},$globals.PackageTransport.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "register\x0a\x09PackageTransport register: self",
referencedClasses: ["PackageTransport"],
//>>excludeEnd("ide");
messageSends: ["register:"]
}),
$globals.PackageTransport.klass);

$core.addMethod(
$core.method({
selector: "register:",
protocol: 'registration',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$recv(aClass)._type();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["type"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv(self["@registry"])._at_put_($recv(aClass)._type(),aClass);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"register:",{aClass:aClass},$globals.PackageTransport.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "register: aClass\x0a\x09aClass type ifNotNil: [\x0a\x09\x09registry at: aClass type put: aClass ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "type", "at:put:"]
}),
$globals.PackageTransport.klass);

$core.addMethod(
$core.method({
selector: "type",
protocol: 'accessing',
fn: function (){
var self=this;
return nil;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "type\x0a\x09\x22Override in subclasses\x22\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PackageTransport.klass);


$core.addClass('AmdPackageTransport', $globals.PackageTransport, ['namespace'], 'Platform-ImportExport');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AmdPackageTransport.comment="I am the default transport for committing packages.\x0a\x0aSee `AmdExporter` and `AmdPackageHandler`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "asJSON",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.AmdPackageTransport.superclass.fn.prototype._asJSON.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv($2)._at_put_("amdNamespace",self._namespace());
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},$globals.AmdPackageTransport)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJSON\x0a\x09^ super asJSON\x0a\x09\x09at: 'amdNamespace' put: self namespace;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "asJSON", "namespace", "yourself"]
}),
$globals.AmdPackageTransport);

$core.addMethod(
$core.method({
selector: "commitHandlerClass",
protocol: 'accessing',
fn: function (){
var self=this;
function $AmdPackageHandler(){return $globals.AmdPackageHandler||(typeof AmdPackageHandler=="undefined"?nil:AmdPackageHandler)}
return $AmdPackageHandler();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commitHandlerClass\x0a\x09^ AmdPackageHandler",
referencedClasses: ["AmdPackageHandler"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AmdPackageTransport);

$core.addMethod(
$core.method({
selector: "defaultNamespace",
protocol: 'defaults',
fn: function (){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($Smalltalk())._defaultAmdNamespace();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultNamespace",{},$globals.AmdPackageTransport)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultNamespace\x0a\x09^ Smalltalk defaultAmdNamespace",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["defaultAmdNamespace"]
}),
$globals.AmdPackageTransport);

$core.addMethod(
$core.method({
selector: "definition",
protocol: 'accessing',
fn: function (){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$1=$recv($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_($recv(self._class())._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_(" namespace: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$3=$recv("'".__comma(self._namespace())).__comma("'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
$2=$recv(stream)._nextPutAll_($3);
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"definition",{},$globals.AmdPackageTransport)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "definition\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09stream \x0a\x09\x09\x09nextPutAll: self class name;\x0a\x09\x09\x09nextPutAll: ' namespace: ';\x0a\x09\x09\x09nextPutAll: '''', self namespace, '''' ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "nextPutAll:", "name", "class", ",", "namespace"]
}),
$globals.AmdPackageTransport);

$core.addMethod(
$core.method({
selector: "namespace",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@namespace"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._defaultNamespace();
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"namespace",{},$globals.AmdPackageTransport)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "namespace\x0a\x09^ namespace ifNil: [ self defaultNamespace ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "defaultNamespace"]
}),
$globals.AmdPackageTransport);

$core.addMethod(
$core.method({
selector: "namespace:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@namespace"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "namespace: aString\x0a\x09namespace := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AmdPackageTransport);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.AmdPackageTransport.superclass.fn.prototype._printOn_.apply($recv(self), [aStream]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(aStream)._nextPutAll_(" (AMD Namespace: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(self._namespace());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$1=$recv(aStream)._nextPutAll_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.AmdPackageTransport)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09aStream\x0a\x09\x09nextPutAll: ' (AMD Namespace: ';\x0a\x09\x09nextPutAll: self namespace;\x0a\x09\x09nextPutAll: ')'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printOn:", "nextPutAll:", "namespace"]
}),
$globals.AmdPackageTransport);

$core.addMethod(
$core.method({
selector: "setPath:",
protocol: 'actions',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(require)._basicAt_("config"))._value_($globals.HashedCollection._newFromPairs_(["paths",$globals.HashedCollection._newFromPairs_([self._namespace(),aString])]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setPath:",{aString:aString},$globals.AmdPackageTransport)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "setPath: aString\x0a\x09\x22Set the path the the receiver's `namespace`\x22\x0a\x09\x0a\x09(require basicAt: 'config') value: #{\x0a\x09\x09'paths' -> #{\x0a\x09\x09\x09self namespace -> aString\x0a\x09\x09}\x0a\x09}.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "basicAt:", "namespace"]
}),
$globals.AmdPackageTransport);

$core.addMethod(
$core.method({
selector: "setupFromJson:",
protocol: 'initialization',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._namespace_($recv(anObject)._at_("amdNamespace"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupFromJson:",{anObject:anObject},$globals.AmdPackageTransport)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "setupFromJson: anObject\x0a\x09self namespace: (anObject at: 'amdNamespace')",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["namespace:", "at:"]
}),
$globals.AmdPackageTransport);


$core.addMethod(
$core.method({
selector: "namespace:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._namespace_(aString);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"namespace:",{aString:aString},$globals.AmdPackageTransport.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "namespace: aString\x0a\x09^ self new\x0a\x09\x09namespace: aString;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["namespace:", "new", "yourself"]
}),
$globals.AmdPackageTransport.klass);

$core.addMethod(
$core.method({
selector: "type",
protocol: 'accessing',
fn: function (){
var self=this;
return "amd";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "type\x0a\x09^ 'amd'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AmdPackageTransport.klass);

$core.addMethod(
$core.method({
selector: "commentStamp",
protocol: '*Platform-ImportExport',
fn: function (){
var self=this;
function $ClassCommentReader(){return $globals.ClassCommentReader||(typeof ClassCommentReader=="undefined"?nil:ClassCommentReader)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($ClassCommentReader())._new();
$recv($2)._class_(self);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commentStamp",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commentStamp\x0a\x09^ ClassCommentReader new\x0a\x09class: self;\x0a\x09yourself",
referencedClasses: ["ClassCommentReader"],
//>>excludeEnd("ide");
messageSends: ["class:", "new", "yourself"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "commentStamp:prior:",
protocol: '*Platform-ImportExport',
fn: function (aStamp,prior){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._commentStamp();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commentStamp:prior:",{aStamp:aStamp,prior:prior},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStamp", "prior"],
source: "commentStamp: aStamp prior: prior\x0a\x09\x09^ self commentStamp",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["commentStamp"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "methodsFor:",
protocol: '*Platform-ImportExport',
fn: function (aString){
var self=this;
function $ClassProtocolReader(){return $globals.ClassProtocolReader||(typeof ClassProtocolReader=="undefined"?nil:ClassProtocolReader)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($ClassProtocolReader())._new();
$recv($2)._class_category_(self,aString);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodsFor:",{aString:aString},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "methodsFor: aString\x0a\x09^ ClassProtocolReader new\x0a\x09\x09class: self category: aString;\x0a\x09\x09yourself",
referencedClasses: ["ClassProtocolReader"],
//>>excludeEnd("ide");
messageSends: ["class:category:", "new", "yourself"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "methodsFor:stamp:",
protocol: '*Platform-ImportExport',
fn: function (aString,aStamp){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._methodsFor_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodsFor:stamp:",{aString:aString,aStamp:aStamp},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aStamp"],
source: "methodsFor: aString stamp: aStamp\x0a\x09\x22Added for file-in compatibility, ignores stamp.\x22\x0a\x09^ self methodsFor: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["methodsFor:"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "commit",
protocol: '*Platform-ImportExport',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._transport())._commit();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commit",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commit\x0a\x09^ self transport commit",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["commit", "transport"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "load",
protocol: '*Platform-ImportExport',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._transport())._load();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"load",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "load\x0a\x09^ self transport load",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["load", "transport"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "loadFromNamespace:",
protocol: '*Platform-ImportExport',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._transport();
$recv($2)._namespace_(aString);
$3=$recv($2)._load();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loadFromNamespace:",{aString:aString},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "loadFromNamespace: aString\x0a\x09^ self transport\x0a\x09\x09namespace: aString;\x0a\x09\x09load",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["namespace:", "transport", "load"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "load:",
protocol: '*Platform-ImportExport',
fn: function (aPackageName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._named_(aPackageName))._load();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"load:",{aPackageName:aPackageName},$globals.Package.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackageName"],
source: "load: aPackageName\x0a\x09(self named: aPackageName) load",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["load", "named:"]
}),
$globals.Package.klass);

$core.addMethod(
$core.method({
selector: "load:fromNamespace:",
protocol: '*Platform-ImportExport',
fn: function (aPackageName,aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._named_(aPackageName))._loadFromNamespace_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"load:fromNamespace:",{aPackageName:aPackageName,aString:aString},$globals.Package.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackageName", "aString"],
source: "load: aPackageName fromNamespace: aString\x0a\x09(self named: aPackageName) loadFromNamespace: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["loadFromNamespace:", "named:"]
}),
$globals.Package.klass);

});
