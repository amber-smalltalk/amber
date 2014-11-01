define("amber_core/IDE", ["amber/boot", "amber_core/Web", "amber_core/Kernel-Objects", "amber_core/Kernel-Collections", "amber_core/Kernel-Methods"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('IDE');
$core.packages["IDE"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass('ClassesList', $globals.Widget, ['browser', 'ul', 'nodes'], 'IDE');
$core.addMethod(
$core.method({
selector: "browser",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@browser"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "browser\x0a\x09^ browser",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassesList);

$core.addMethod(
$core.method({
selector: "browser:",
protocol: 'accessing',
fn: function (aBrowser){
var self=this;
self["@browser"]=aBrowser;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBrowser"],
source: "browser: aBrowser\x0a\x09browser := aBrowser",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassesList);

$core.addMethod(
$core.method({
selector: "category",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._browser())._selectedPackage();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"category",{},$globals.ClassesList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "category\x0a\x09^ self browser selectedPackage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectedPackage", "browser"]
}),
$globals.ClassesList);

$core.addMethod(
$core.method({
selector: "getNodes",
protocol: 'accessing',
fn: function (){
var self=this;
var classes,children,others;
function $ClassesListNode(){return $globals.ClassesListNode||(typeof ClassesListNode=="undefined"?nil:ClassesListNode)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=self._browser();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["browser"]=1;
//>>excludeEnd("ctx");
classes=$recv($1)._classes();
children=[];
others=[];
$recv(classes)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(classes)._includes_($recv(each)._superclass());
if($core.assert($2)){
return $recv(others)._add_(each);
} else {
return $recv(children)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$3=$recv(children)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($ClassesListNode())._on_browser_classes_level_(each,self._browser(),others,(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getNodes",{classes:classes,children:children,others:others},$globals.ClassesList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getNodes\x0a\x09| classes children others |\x0a\x09classes := self browser classes.\x0a\x09children := #().\x0a\x09others := #().\x0a\x09classes do: [ :each |\x0a\x09\x09(classes includes: each superclass)\x0a\x09\x09\x09ifFalse: [ children add: each ]\x0a\x09\x09\x09ifTrue: [ others add: each ]].\x0a\x09^ children collect: [ :each |\x0a\x09\x09ClassesListNode on: each browser: self browser classes: others level: 0 ]",
referencedClasses: ["ClassesListNode"],
//>>excludeEnd("ide");
messageSends: ["classes", "browser", "do:", "ifFalse:ifTrue:", "includes:", "superclass", "add:", "collect:", "on:browser:classes:level:"]
}),
$globals.ClassesList);

$core.addMethod(
$core.method({
selector: "nodes",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self["@nodes"];
if(($receiver = $1) == null || $receiver.isNil){
self["@nodes"]=self._getNodes();
self["@nodes"];
} else {
$1;
};
$2=self["@nodes"];
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nodes",{},$globals.ClassesList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nodes\x0a\x09nodes ifNil: [ nodes := self getNodes ].\x0a\x09^ nodes",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "getNodes"]
}),
$globals.ClassesList);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._ul();
$recv($1)._class_("amber_column browser classes");
$2=$recv($1)._yourself();
self["@ul"]=$2;
self._updateNodes();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.ClassesList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09ul := html ul\x0a\x09\x09class: 'amber_column browser classes';\x0a\x09\x09yourself.\x0a\x09self updateNodes",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "ul", "yourself", "updateNodes"]
}),
$globals.ClassesList);

$core.addMethod(
$core.method({
selector: "resetNodes",
protocol: 'accessing',
fn: function (){
var self=this;
self["@nodes"]=nil;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resetNodes\x0a\x09nodes := nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassesList);

$core.addMethod(
$core.method({
selector: "updateNodes",
protocol: 'rendering',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@ul"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._nodes())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(each)._renderOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateNodes",{},$globals.ClassesList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateNodes\x0a\x09ul contents: [ :html |\x0a\x09\x09self nodes do: [ :each |\x0a\x09\x09\x09each renderOn: html ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "do:", "nodes", "renderOn:"]
}),
$globals.ClassesList);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aBrowser){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._browser_(aBrowser);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aBrowser:aBrowser},$globals.ClassesList.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBrowser"],
source: "on: aBrowser\x0a\x09^ self new\x0a\x09\x09browser: aBrowser;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["browser:", "new", "yourself"]
}),
$globals.ClassesList.klass);


$core.addClass('ClassesListNode', $globals.Widget, ['browser', 'theClass', 'level', 'nodes'], 'IDE');
$core.addMethod(
$core.method({
selector: "browser",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@browser"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "browser\x0a\x09^ browser",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassesListNode);

$core.addMethod(
$core.method({
selector: "browser:",
protocol: 'accessing',
fn: function (aBrowser){
var self=this;
self["@browser"]=aBrowser;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBrowser"],
source: "browser: aBrowser\x0a\x09browser := aBrowser",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassesListNode);

$core.addMethod(
$core.method({
selector: "getNodesFrom:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
var children,others;
function $ClassesListNode(){return $globals.ClassesListNode||(typeof ClassesListNode=="undefined"?nil:ClassesListNode)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
children=[];
others=[];
$recv(aCollection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($recv(each)._superclass()).__eq(self._theClass());
if($core.assert($1)){
return $recv(children)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
} else {
return $recv(others)._add_(each);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self["@nodes"]=$recv(children)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($ClassesListNode())._on_browser_classes_level_(each,self._browser(),others,$recv(self._level()).__plus((1)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getNodesFrom:",{aCollection:aCollection,children:children,others:others},$globals.ClassesListNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "getNodesFrom: aCollection\x0a\x09| children others |\x0a\x09children := #().\x0a\x09others := #().\x0a\x09aCollection do: [ :each |\x0a\x09\x09(each superclass = self theClass)\x0a\x09\x09\x09ifTrue: [ children add: each ]\x0a\x09\x09\x09ifFalse: [ others add: each ]].\x0a\x09nodes:= children collect: [ :each |\x0a\x09\x09ClassesListNode on: each browser: self browser classes: others level: self level + 1 ]",
referencedClasses: ["ClassesListNode"],
//>>excludeEnd("ide");
messageSends: ["do:", "ifTrue:ifFalse:", "=", "superclass", "theClass", "add:", "collect:", "on:browser:classes:level:", "browser", "+", "level"]
}),
$globals.ClassesListNode);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
var str;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
str=$recv($recv($String())._new())._writeStream();
$recv(self._level())._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(str)._nextPutAll_("&nbsp;&nbsp;&nbsp;&nbsp;");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(str)._nextPutAll_($recv(self._theClass())._name());
$1=$recv(str)._contents();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"label",{str:str},$globals.ClassesListNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09| str |\x0a\x09str := String new writeStream.\x0a\x09self level timesRepeat: [\x0a\x09\x09str nextPutAll: '&nbsp;&nbsp;&nbsp;&nbsp;' ].\x0a\x09str nextPutAll: self theClass name.\x0a\x09^ str contents",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["writeStream", "new", "timesRepeat:", "level", "nextPutAll:", "name", "theClass", "contents"]
}),
$globals.ClassesListNode);

$core.addMethod(
$core.method({
selector: "level",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@level"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "level\x0a\x09^ level",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassesListNode);

$core.addMethod(
$core.method({
selector: "level:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@level"]=anInteger;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "level: anInteger\x0a\x09level := anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassesListNode);

$core.addMethod(
$core.method({
selector: "nodes",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@nodes"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nodes\x0a\x09^ nodes",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassesListNode);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var li,cssClass;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$5,$3,$6;
cssClass="";
li=$recv($recv(html)._li())._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=self._browser();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["browser"]=1;
//>>excludeEnd("ctx");
$2=self._theClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["theClass"]=1;
//>>excludeEnd("ctx");
return $recv($1)._selectClass_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($recv(li)._asJQuery())._html_(self._label());
$4=$recv(self._browser())._selectedClass();
$5=self._theClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["theClass"]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__eq($5);
if($core.assert($3)){
cssClass=$recv(cssClass).__comma(" selected");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
cssClass;
};
$6=$recv($recv(self._theClass())._comment())._isEmpty();
if(!$core.assert($6)){
cssClass=$recv(cssClass).__comma(" commented");
cssClass;
};
$recv(li)._class_(cssClass);
$recv(self._nodes())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._renderOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,li:li,cssClass:cssClass},$globals.ClassesListNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09| li cssClass |\x0a\x09cssClass := ''.\x0a\x09li := html li\x0a\x09\x09onClick: [ self browser selectClass: self theClass ].\x0a\x09li asJQuery html: self label.\x0a\x0a\x09self browser selectedClass = self theClass ifTrue: [\x0a\x09\x09cssClass := cssClass, ' selected' ].\x0a\x0a\x09self theClass comment isEmpty ifFalse: [\x0a\x09\x09cssClass := cssClass, ' commented' ].\x0a\x0a\x09li class: cssClass.\x0a\x0a\x09self nodes do: [ :each |\x0a\x09\x09each renderOn: html ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["onClick:", "li", "selectClass:", "browser", "theClass", "html:", "asJQuery", "label", "ifTrue:", "=", "selectedClass", ",", "ifFalse:", "isEmpty", "comment", "class:", "do:", "nodes", "renderOn:"]
}),
$globals.ClassesListNode);

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
$globals.ClassesListNode);

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
$globals.ClassesListNode);


$core.addMethod(
$core.method({
selector: "on:browser:classes:level:",
protocol: 'instance creation',
fn: function (aClass,aBrowser,aCollection,anInteger){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._theClass_(aClass);
$recv($2)._browser_(aBrowser);
$recv($2)._level_(anInteger);
$recv($2)._getNodesFrom_(aCollection);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:browser:classes:level:",{aClass:aClass,aBrowser:aBrowser,aCollection:aCollection,anInteger:anInteger},$globals.ClassesListNode.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aBrowser", "aCollection", "anInteger"],
source: "on: aClass browser: aBrowser classes: aCollection level: anInteger\x0a\x09^ self new\x0a\x09\x09theClass: aClass;\x0a\x09\x09browser: aBrowser;\x0a\x09\x09level: anInteger;\x0a\x09\x09getNodesFrom: aCollection;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["theClass:", "new", "browser:", "level:", "getNodesFrom:", "yourself"]
}),
$globals.ClassesListNode.klass);


$core.addClass('DebugErrorHandler', $globals.Object, [], 'IDE');
$core.addMethod(
$core.method({
selector: "handleError:",
protocol: 'error handling',
fn: function (anError){
var self=this;
function $Debugger(){return $globals.Debugger||(typeof Debugger=="undefined"?nil:Debugger)}
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
function $ConsoleErrorHandler(){return $globals.ConsoleErrorHandler||(typeof ConsoleErrorHandler=="undefined"?nil:ConsoleErrorHandler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($Debugger())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($1)._error_(anError);
$2=$recv($1)._open();
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(error){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($ConsoleErrorHandler())._new())._handleError_(error);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleError:",{anError:anError},$globals.DebugErrorHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "handleError: anError\x0a\x09[ Debugger new\x0a\x09\x09error: anError;\x0a\x09\x09open ] on: Error do: [ :error |\x0a\x09\x09\x09ConsoleErrorHandler new handleError: error ]",
referencedClasses: ["Debugger", "Error", "ConsoleErrorHandler"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "error:", "new", "open", "handleError:"]
}),
$globals.DebugErrorHandler);


$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $ErrorHandler(){return $globals.ErrorHandler||(typeof ErrorHandler=="undefined"?nil:ErrorHandler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($ErrorHandler())._register_(self._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.DebugErrorHandler.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09ErrorHandler register: self new",
referencedClasses: ["ErrorHandler"],
//>>excludeEnd("ide");
messageSends: ["register:", "new"]
}),
$globals.DebugErrorHandler.klass);


$core.addClass('SourceArea', $globals.Widget, ['editor', 'div', 'receiver', 'onDoIt'], 'IDE');
$core.addMethod(
$core.method({
selector: "clear",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._val_("");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clear",{},$globals.SourceArea)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clear\x0a\x09self val: ''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["val:"]
}),
$globals.SourceArea);

$core.addMethod(
$core.method({
selector: "currentLine",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@editor"])._getLine_($recv($recv(self["@editor"])._getCursor())._line());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"currentLine",{},$globals.SourceArea)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentLine\x0a\x09^ editor getLine: (editor getCursor line)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["getLine:", "line", "getCursor"]
}),
$globals.SourceArea);

$core.addMethod(
$core.method({
selector: "currentLineOrSelection",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(self["@editor"])._somethingSelected();
if($core.assert($2)){
$1=self._selection();
} else {
$1=self._currentLine();
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"currentLineOrSelection",{},$globals.SourceArea)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentLineOrSelection\x0a\x09^ editor somethingSelected\x0a\x09ifFalse: [ self currentLine ]\x0a\x09ifTrue: [ self selection ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:ifTrue:", "somethingSelected", "currentLine", "selection"]
}),
$globals.SourceArea);

$core.addMethod(
$core.method({
selector: "doIt",
protocol: 'actions',
fn: function (){
var self=this;
var result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
result=self._eval_(self._currentLineOrSelection());
$1=self._onDoIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onDoIt"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv(self._onDoIt())._value();
};
$2=result;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doIt",{result:result},$globals.SourceArea)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doIt\x0a\x09| result |\x0a\x09result := self eval: self currentLineOrSelection.\x0a\x09self onDoIt ifNotNil: [ self onDoIt value ].\x0a\x09^ result",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["eval:", "currentLineOrSelection", "ifNotNil:", "onDoIt", "value"]
}),
$globals.SourceArea);

$core.addMethod(
$core.method({
selector: "editor",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@editor"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "editor\x0a\x09^ editor",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SourceArea);

$core.addMethod(
$core.method({
selector: "eval:",
protocol: 'actions',
fn: function (aString){
var self=this;
var compiler;
function $Compiler(){return $globals.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
var $early={};
try {
compiler=$recv($Compiler())._new();
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(compiler)._parseExpression_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=self._alert_($recv(ex)._messageText());
throw $early=[$1];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$2=$recv(compiler)._evaluateExpression_on_(aString,self._receiver());
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"eval:",{aString:aString,compiler:compiler},$globals.SourceArea)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "eval: aString\x0a\x09| compiler |\x0a\x09compiler := Compiler new.\x0a\x09[ compiler parseExpression: aString ] on: Error do: [ :ex |\x0a\x09\x09^ self alert: ex messageText ].\x0a\x09^ compiler evaluateExpression: aString on: self receiver",
referencedClasses: ["Compiler", "Error"],
//>>excludeEnd("ide");
messageSends: ["new", "on:do:", "parseExpression:", "alert:", "messageText", "evaluateExpression:on:", "receiver"]
}),
$globals.SourceArea);

$core.addMethod(
$core.method({
selector: "fileIn",
protocol: 'actions',
fn: function (){
var self=this;
function $Importer(){return $globals.Importer||(typeof Importer=="undefined"?nil:Importer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv($Importer())._new())._import_($recv(self._currentLineOrSelection())._readStream());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fileIn",{},$globals.SourceArea)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fileIn\x0a\x09Importer new import: self currentLineOrSelection readStream",
referencedClasses: ["Importer"],
//>>excludeEnd("ide");
messageSends: ["import:", "new", "readStream", "currentLineOrSelection"]
}),
$globals.SourceArea);

$core.addMethod(
$core.method({
selector: "focus",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._editor())._focus();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"focus",{},$globals.SourceArea)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "focus\x0a\x09self editor focus.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["focus", "editor"]
}),
$globals.SourceArea);

$core.addMethod(
$core.method({
selector: "handleKeyDown:",
protocol: 'actions',
fn: function (anEvent){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
if(anEvent.ctrlKey) {
		if(anEvent.keyCode === 80) { //ctrl+p
			self._printIt();
			anEvent.preventDefault();
			return false;
		}
		if(anEvent.keyCode === 68) { //ctrl+d
			self._doIt();
			anEvent.preventDefault();
			return false;
		}
		if(anEvent.keyCode === 73) { //ctrl+i
			self._inspectIt();
			anEvent.preventDefault();
			return false;
		}
	};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleKeyDown:",{anEvent:anEvent},$globals.SourceArea)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEvent"],
source: "handleKeyDown: anEvent\x0a\x09<if(anEvent.ctrlKey) {\x0a\x09\x09if(anEvent.keyCode === 80) { //ctrl+p\x0a\x09\x09\x09self._printIt();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09\x09if(anEvent.keyCode === 68) { //ctrl+d\x0a\x09\x09\x09self._doIt();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09\x09if(anEvent.keyCode === 73) { //ctrl+i\x0a\x09\x09\x09self._inspectIt();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09}>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SourceArea);

$core.addMethod(
$core.method({
selector: "inspectIt",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._doIt())._inspect();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectIt",{},$globals.SourceArea)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inspectIt\x0a\x09self doIt inspect",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["inspect", "doIt"]
}),
$globals.SourceArea);

$core.addMethod(
$core.method({
selector: "onDoIt",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@onDoIt"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onDoIt\x0a\x09^ onDoIt",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SourceArea);

$core.addMethod(
$core.method({
selector: "onDoIt:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@onDoIt"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onDoIt: aBlock\x0a\x09onDoIt := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SourceArea);

$core.addMethod(
$core.method({
selector: "onKeyDown:",
protocol: 'events',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@div"])._onKeyDown_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onKeyDown:",{aBlock:aBlock},$globals.SourceArea)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onKeyDown: aBlock\x0a\x09div onKeyDown: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["onKeyDown:"]
}),
$globals.SourceArea);

$core.addMethod(
$core.method({
selector: "onKeyUp:",
protocol: 'events',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@div"])._onKeyUp_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onKeyUp:",{aBlock:aBlock},$globals.SourceArea)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onKeyUp: aBlock\x0a\x09div onKeyUp: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["onKeyUp:"]
}),
$globals.SourceArea);

$core.addMethod(
$core.method({
selector: "print:",
protocol: 'actions',
fn: function (aString){
var self=this;
var start,stop,currentLine;
function $HashedCollection(){return $globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5,$6,$7,$8,$9,$10,$12,$11;
$1=$recv(self["@editor"])._getCursor_(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["getCursor:"]=1;
//>>excludeEnd("ctx");
currentLine=$recv($1)._line();
start=$recv($HashedCollection())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv(start)._at_put_("line",currentLine);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$2=start;
$4=$recv(self["@editor"])._getCursor_(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["getCursor:"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._ch();
$recv($2)._at_put_("ch",$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$5=$recv(self["@editor"])._getSelection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["getSelection"]=1;
//>>excludeEnd("ctx");
$recv($5)._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=start;
$7=$recv($recv(self["@editor"])._getLine_(currentLine))._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$recv($6)._at_put_("ch",$7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
return $recv(self["@editor"])._setSelection_end_($globals.HashedCollection._newFromPairs_(["line",currentLine,"ch",(0)]),start);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["setSelection:end:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
stop=$recv($HashedCollection())._new();
$recv(stop)._at_put_("line",currentLine);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
$8=stop;
$9=$recv($recv($recv(start)._at_("ch")).__plus($recv(aString)._size())).__plus((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$recv($8)._at_put_("ch",$9);
$10=self["@editor"];
$12=$recv($recv($recv(self["@editor"])._getSelection()).__comma(" ")).__comma(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$11=$recv($12).__comma(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($10)._replaceSelection_($11);
$recv(self["@editor"])._setCursor_($recv(self["@editor"])._getCursor_(true));
$recv(self["@editor"])._setSelection_end_(stop,start);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"print:",{aString:aString,start:start,stop:stop,currentLine:currentLine},$globals.SourceArea)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "print: aString\x0a\x09| start stop currentLine |\x0a\x09currentLine := (editor getCursor: false) line.\x0a\x09start := HashedCollection new.\x0a\x09start at: 'line' put: currentLine.\x0a\x09start at: 'ch' put: (editor getCursor: false) ch.\x0a\x09(editor getSelection) ifEmpty: [\x0a\x09\x09\x22select current line if selection is empty\x22\x0a\x09\x09start at: 'ch' put: (editor getLine: currentLine) size.\x0a\x09\x09editor setSelection: #{'line' -> currentLine. 'ch' -> 0} end: start.\x0a\x09].\x0a\x09stop := HashedCollection new.\x0a\x09stop at: 'line' put: currentLine.\x0a\x09stop at: 'ch' put: ((start at: 'ch') + aString size + 2).\x0a\x0a\x09editor replaceSelection: (editor getSelection, ' ', aString, ' ').\x0a\x09editor setCursor: (editor getCursor: true).\x0a\x09editor setSelection: stop end: start",
referencedClasses: ["HashedCollection"],
//>>excludeEnd("ide");
messageSends: ["line", "getCursor:", "new", "at:put:", "ch", "ifEmpty:", "getSelection", "size", "getLine:", "setSelection:end:", "+", "at:", "replaceSelection:", ",", "setCursor:"]
}),
$globals.SourceArea);

$core.addMethod(
$core.method({
selector: "printIt",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._print_($recv(self._doIt())._printString());
self._focus();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printIt",{},$globals.SourceArea)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printIt\x0a\x09self print: self doIt printString.\x0a\x09self focus.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["print:", "printString", "doIt", "focus"]
}),
$globals.SourceArea);

$core.addMethod(
$core.method({
selector: "receiver",
protocol: 'accessing',
fn: function (){
var self=this;
function $DoIt(){return $globals.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@receiver"];
if(($receiver = $2) == null || $receiver.isNil){
$1=$recv($DoIt())._new();
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"receiver",{},$globals.SourceArea)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "receiver\x0a\x09^ receiver ifNil: [ DoIt new ]",
referencedClasses: ["DoIt"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.SourceArea);

$core.addMethod(
$core.method({
selector: "receiver:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@receiver"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "receiver: anObject\x0a\x09receiver := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SourceArea);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var textarea;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@div"]=$recv($recv(html)._div())._class_("source");
$recv(self["@div"])._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
textarea=$recv(html)._textarea();
return textarea;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._setEditorOn_($recv(textarea)._element());
$recv(self["@div"])._onKeyDown_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._handleKeyDown_(e);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,textarea:textarea},$globals.SourceArea)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09| textarea |\x0a\x09div := html div class: 'source'.\x0a\x09div with: [ textarea := html textarea ].\x0a\x09self setEditorOn: textarea element.\x0a\x09div onKeyDown: [ :e | self handleKeyDown: e ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "textarea", "setEditorOn:", "element", "onKeyDown:", "handleKeyDown:"]
}),
$globals.SourceArea);

$core.addMethod(
$core.method({
selector: "selection",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@editor"])._getSelection();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selection",{},$globals.SourceArea)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selection\x0a\x09^ editor getSelection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["getSelection"]
}),
$globals.SourceArea);

$core.addMethod(
$core.method({
selector: "setEditorOn:",
protocol: 'accessing',
fn: function (aTextarea){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self['@editor'] = self._class()._codeMirror().fromTextArea(aTextarea, {
		theme: 'ide.codeMirrorTheme'._settingValueIfAbsent_('default'),
		mode: 'text/x-stsrc',
		lineNumbers: true,
		enterMode: 'flat',
		indentWithTabs: true,
		indentUnit: 4,
		matchBrackets: true,
		electricChars: false
	});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setEditorOn:",{aTextarea:aTextarea},$globals.SourceArea)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTextarea"],
source: "setEditorOn: aTextarea\x0a\x09<self['@editor'] = self._class()._codeMirror().fromTextArea(aTextarea, {\x0a\x09\x09theme: 'ide.codeMirrorTheme'._settingValueIfAbsent_('default'),\x0a\x09\x09mode: 'text/x-stsrc',\x0a\x09\x09lineNumbers: true,\x0a\x09\x09enterMode: 'flat',\x0a\x09\x09indentWithTabs: true,\x0a\x09\x09indentUnit: 4,\x0a\x09\x09matchBrackets: true,\x0a\x09\x09electricChars: false\x0a\x09})>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SourceArea);

$core.addMethod(
$core.method({
selector: "val",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@editor"])._getValue();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"val",{},$globals.SourceArea)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "val\x0a\x09^ editor getValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["getValue"]
}),
$globals.SourceArea);

$core.addMethod(
$core.method({
selector: "val:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@editor"])._setValue_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"val:",{aString:aString},$globals.SourceArea)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "val: aString\x0a\x09editor setValue: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setValue:"]
}),
$globals.SourceArea);


$core.addMethod(
$core.method({
selector: "codeMirror",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(require)._value_("codemirror/lib/codemirror");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"codeMirror",{},$globals.SourceArea.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "codeMirror\x0a\x09^ require value: 'codemirror/lib/codemirror'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:"]
}),
$globals.SourceArea.klass);

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
$globals.SourceArea.klass.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._setupCodeMirror();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SourceArea.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self setupCodeMirror",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "setupCodeMirror"]
}),
$globals.SourceArea.klass);

$core.addMethod(
$core.method({
selector: "setupCodeMirror",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 self._codeMirror().keyMap["default"].fallthrough = ["basic"] ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupCodeMirror",{},$globals.SourceArea.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupCodeMirror\x0a\x09< self._codeMirror().keyMap[\x22default\x22].fallthrough = [\x22basic\x22] >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SourceArea.klass);


$core.addClass('TabManager', $globals.Widget, ['selectedTab', 'tabs', 'opened', 'ul', 'input'], 'IDE');
$core.addMethod(
$core.method({
selector: "addTab:",
protocol: 'adding/Removing',
fn: function (aWidget){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._tabs())._add_(aWidget);
$recv(aWidget)._appendToJQuery_("#amber"._asJQuery());
$recv(aWidget)._hide();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addTab:",{aWidget:aWidget},$globals.TabManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidget"],
source: "addTab: aWidget\x0a\x09self tabs add: aWidget.\x0a\x09aWidget appendToJQuery: '#amber' asJQuery.\x0a\x09aWidget hide",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "tabs", "appendToJQuery:", "asJQuery", "hide"]
}),
$globals.TabManager);

$core.addMethod(
$core.method({
selector: "close",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=self["@opened"];
if($core.assert($1)){
$2="#amber"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($2)._hide();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hide"]=1;
//>>excludeEnd("ctx");
$3=$recv(self["@ul"])._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
$recv($3)._hide();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hide"]=2;
//>>excludeEnd("ctx");
$recv(self["@selectedTab"])._hide();
self._removeBodyMargin();
$recv("body"._asJQuery())._removeClass_("amberBody");
self["@opened"]=false;
self["@opened"];
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"close",{},$globals.TabManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "close\x0a\x09opened ifTrue: [\x0a\x09'#amber' asJQuery hide.\x0a\x09ul asJQuery hide.\x0a\x09selectedTab hide.\x0a\x09self removeBodyMargin.\x0a\x09'body' asJQuery removeClass: 'amberBody'.\x0a\x09opened := false ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "hide", "asJQuery", "removeBodyMargin", "removeClass:"]
}),
$globals.TabManager);

$core.addMethod(
$core.method({
selector: "closeTab:",
protocol: 'actions',
fn: function (aWidget){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._removeTab_(aWidget);
self._selectTab_($recv(self._tabs())._last());
$recv(aWidget)._remove();
self._update();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"closeTab:",{aWidget:aWidget},$globals.TabManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidget"],
source: "closeTab: aWidget\x0a\x09self removeTab: aWidget.\x0a\x09self selectTab: self tabs last.\x0a\x09aWidget remove.\x0a\x09self update",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeTab:", "selectTab:", "last", "tabs", "remove", "update"]
}),
$globals.TabManager);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $Inspector(){return $globals.Inspector||(typeof Inspector=="undefined"?nil:Inspector)}
function $IDEInspector(){return $globals.IDEInspector||(typeof IDEInspector=="undefined"?nil:IDEInspector)}
function $IDETranscript(){return $globals.IDETranscript||(typeof IDETranscript=="undefined"?nil:IDETranscript)}
function $Workspace(){return $globals.Workspace||(typeof Workspace=="undefined"?nil:Workspace)}
function $TestRunner(){return $globals.TestRunner||(typeof TestRunner=="undefined"?nil:TestRunner)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.TabManager.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv($Inspector())._register_($IDEInspector());
self["@opened"]=true;
$1=(function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._div())._id_("amber");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
});
$2="body"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._appendToJQuery_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["appendToJQuery:"]=1;
//>>excludeEnd("ctx");
$3="body"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
$recv($3)._addClass_("amberBody");
self._appendToJQuery_("#amber"._asJQuery());
self._addTab_($recv($IDETranscript())._current());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addTab:"]=1;
//>>excludeEnd("ctx");
$4=$recv($Workspace())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self._addTab_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addTab:"]=2;
//>>excludeEnd("ctx");
$5=self._addTab_($recv($TestRunner())._new());
self._selectTab_($recv(self._tabs())._last());
self._onResize_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._updateBodyMargin();
$6=self._updatePosition();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["updatePosition"]=1;
//>>excludeEnd("ctx");
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$7=self._onWindowResize_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._updatePosition();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.TabManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09Inspector register: IDEInspector.\x0a\x09opened := true.\x0a\x09[ :html | html div id: 'amber' ] appendToJQuery: 'body' asJQuery.\x0a\x09'body' asJQuery\x0a\x09addClass: 'amberBody'.\x0a\x09self appendToJQuery: '#amber' asJQuery.\x0a\x09self\x0a\x09addTab: IDETranscript current;\x0a\x09addTab: Workspace new;\x0a\x09addTab: TestRunner new.\x0a\x09self selectTab: self tabs last.\x0a\x09self\x0a\x09onResize: [ self updateBodyMargin; updatePosition ];\x0a\x09onWindowResize: [ self updatePosition ]",
referencedClasses: ["Inspector", "IDEInspector", "IDETranscript", "Workspace", "TestRunner"],
//>>excludeEnd("ide");
messageSends: ["initialize", "register:", "appendToJQuery:", "id:", "div", "asJQuery", "addClass:", "addTab:", "current", "new", "selectTab:", "last", "tabs", "onResize:", "updateBodyMargin", "updatePosition", "onWindowResize:"]
}),
$globals.TabManager);

$core.addMethod(
$core.method({
selector: "labelFor:",
protocol: 'accessing',
fn: function (aWidget){
var self=this;
var label,maxSize;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$4,$3,$2,$5,$6;
maxSize=(15);
$1=$recv(aWidget)._label();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["label"]=1;
//>>excludeEnd("ctx");
$4=$recv(aWidget)._label();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["label"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._min_(maxSize);
label=$recv($1)._copyFrom_to_((0),$2);
$5=$recv($recv($recv(aWidget)._label())._size()).__gt(maxSize);
if($core.assert($5)){
label=$recv(label).__comma("...");
label;
};
$6=label;
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"labelFor:",{aWidget:aWidget,label:label,maxSize:maxSize},$globals.TabManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidget"],
source: "labelFor: aWidget\x0a\x09| label maxSize |\x0a\x09maxSize := 15.\x0a\x09label := aWidget label copyFrom: 0 to: (aWidget label size min: maxSize).\x0a\x09aWidget label size > maxSize ifTrue: [\x0a\x09\x09label := label, '...' ].\x0a\x09^ label",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["copyFrom:to:", "label", "min:", "size", "ifTrue:", ">", ","]
}),
$globals.TabManager);

$core.addMethod(
$core.method({
selector: "newBrowserTab",
protocol: 'actions',
fn: function (){
var self=this;
function $Browser(){return $globals.Browser||(typeof Browser=="undefined"?nil:Browser)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($Browser())._open();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newBrowserTab",{},$globals.TabManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newBrowserTab\x0a\x09Browser open",
referencedClasses: ["Browser"],
//>>excludeEnd("ide");
messageSends: ["open"]
}),
$globals.TabManager);

$core.addMethod(
$core.method({
selector: "onResize:",
protocol: 'actions',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv("#amber"._asJQuery())._resizable_($globals.HashedCollection._newFromPairs_(["handles","n","resize",aBlock,"minHeight",(230)]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onResize:",{aBlock:aBlock},$globals.TabManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onResize: aBlock\x0a\x09'#amber' asJQuery resizable: #{\x0a\x09\x09'handles' -> 'n'.\x0a\x09\x09'resize' -> aBlock.\x0a\x09\x09'minHeight' -> 230\x0a\x09}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["resizable:", "asJQuery"]
}),
$globals.TabManager);

$core.addMethod(
$core.method({
selector: "onWindowResize:",
protocol: 'actions',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(window)._asJQuery())._resize_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onWindowResize:",{aBlock:aBlock},$globals.TabManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onWindowResize: aBlock\x0a\x09window asJQuery resize: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["resize:", "asJQuery"]
}),
$globals.TabManager);

$core.addMethod(
$core.method({
selector: "open",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=self["@opened"];
if(!$core.assert($1)){
$2="body"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($2)._addClass_("amberBody");
$3="#amber"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
$recv($3)._show();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["show"]=1;
//>>excludeEnd("ctx");
$recv($recv(self["@ul"])._asJQuery())._show();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["show"]=2;
//>>excludeEnd("ctx");
self._updateBodyMargin();
$recv(self["@selectedTab"])._show();
self["@opened"]=true;
self["@opened"];
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"open",{},$globals.TabManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "open\x0a\x09opened ifFalse: [\x0a\x09'body' asJQuery addClass: 'amberBody'.\x0a\x09'#amber' asJQuery show.\x0a\x09ul asJQuery show.\x0a\x09self updateBodyMargin.\x0a\x09selectedTab show.\x0a\x09opened := true ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "addClass:", "asJQuery", "show", "updateBodyMargin"]
}),
$globals.TabManager);

$core.addMethod(
$core.method({
selector: "removeBodyMargin",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._setBodyMargin_((0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeBodyMargin",{},$globals.TabManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeBodyMargin\x0a\x09self setBodyMargin: 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setBodyMargin:"]
}),
$globals.TabManager);

$core.addMethod(
$core.method({
selector: "removeTab:",
protocol: 'adding/Removing',
fn: function (aWidget){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._tabs())._remove_(aWidget);
self._update();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeTab:",{aWidget:aWidget},$globals.TabManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidget"],
source: "removeTab: aWidget\x0a\x09self tabs remove: aWidget.\x0a\x09self update",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:", "tabs", "update"]
}),
$globals.TabManager);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$recv($recv(html)._div())._id_("logo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["id:"]=1;
//>>excludeEnd("ctx");
self._renderToolbarOn_(html);
$1=$recv(html)._ul();
$recv($1)._id_("amberTabs");
$2=$recv($1)._yourself();
self["@ul"]=$2;
self._renderTabs();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.TabManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09html div id: 'logo'.\x0a\x09self renderToolbarOn: html.\x0a\x09ul := html ul\x0a\x09\x09id: 'amberTabs';\x0a\x09\x09yourself.\x0a\x09self renderTabs",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["id:", "div", "renderToolbarOn:", "ul", "yourself", "renderTabs"]
}),
$globals.TabManager);

$core.addMethod(
$core.method({
selector: "renderTabFor:on:",
protocol: 'rendering',
fn: function (aWidget,html){
var self=this;
var li;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$6,$7,$8,$9,$5,$10;
li=$recv(html)._li();
$1=$recv(self["@selectedTab"]).__eq(aWidget);
if($core.assert($1)){
$recv(li)._class_("selected");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
};
$2=li;
$recv($2)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._span();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["span"]=1;
//>>excludeEnd("ctx");
$recv($3)._class_("ltab");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$4=$recv(html)._span();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["span"]=2;
//>>excludeEnd("ctx");
$recv($4)._class_("mtab");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=3;
//>>excludeEnd("ctx");
$5=$recv($4)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$6=$recv(aWidget)._canBeClosed();
if($core.assert($6)){
$7=$recv(html)._span();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["span"]=3;
//>>excludeEnd("ctx");
$recv($7)._class_("close");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class:"]=4;
//>>excludeEnd("ctx");
$recv($7)._with_("x");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$8=$recv($7)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._closeTab_(aWidget);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$8;
};
$9=$recv(html)._span();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["span"]=4;
//>>excludeEnd("ctx");
return $recv($9)._with_(self._labelFor_(aWidget));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$5;
return $recv($recv(html)._span())._class_("rtab");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$10=$recv($2)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._selectTab_(aWidget);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderTabFor:on:",{aWidget:aWidget,html:html,li:li},$globals.TabManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidget", "html"],
source: "renderTabFor: aWidget on: html\x0a\x09| li |\x0a\x09li := html li.\x0a\x09selectedTab = aWidget ifTrue: [\x0a\x09li class: 'selected' ].\x0a\x09li with: [\x0a\x09\x09html span class: 'ltab'.\x0a\x09\x09html span\x0a\x09\x09\x09class: 'mtab';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09aWidget canBeClosed ifTrue: [\x0a\x09\x09\x09\x09\x09html span\x0a\x09\x09\x09\x09\x09\x09class: 'close';\x0a\x09\x09\x09\x09\x09\x09with: 'x';\x0a\x09\x09\x09\x09\x09onClick: [ self closeTab: aWidget ]].\x0a\x09\x09\x09html span with: (self labelFor: aWidget) ].\x0a\x09\x09html span class: 'rtab' ];\x0a\x09onClick: [ self selectTab: aWidget ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["li", "ifTrue:", "=", "class:", "with:", "span", "canBeClosed", "onClick:", "closeTab:", "labelFor:", "selectTab:"]
}),
$globals.TabManager);

$core.addMethod(
$core.method({
selector: "renderTabs",
protocol: 'rendering',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$recv(self["@ul"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(self._tabs())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._renderTabFor_on_(each,html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}));
$1=$recv(html)._li();
$recv($1)._class_("newtab");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$2=$recv(html)._span();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["span"]=1;
//>>excludeEnd("ctx");
$recv($2)._class_("ltab");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$3=$recv(html)._span();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["span"]=2;
//>>excludeEnd("ctx");
$recv($3)._class_("mtab");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class:"]=3;
//>>excludeEnd("ctx");
$4=$recv($3)._with_(" + ");
$4;
return $recv($recv(html)._span())._class_("rtab");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$5=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._newBrowserTab();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderTabs",{},$globals.TabManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "renderTabs\x0a\x09ul contents: [ :html |\x0a\x09\x09self tabs do: [ :each |\x0a\x09\x09self renderTabFor: each on: html ].\x0a\x09\x09html li\x0a\x09\x09class: 'newtab';\x0a\x09\x09with: [\x0a\x09\x09\x09html span class: 'ltab'.\x0a\x09\x09\x09html span class: 'mtab'; with: ' + '.\x0a\x09\x09\x09html span class: 'rtab' ];\x0a\x09\x09onClick: [ self newBrowserTab ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "do:", "tabs", "renderTabFor:on:", "class:", "li", "with:", "span", "onClick:", "newBrowserTab"]
}),
$globals.TabManager);

$core.addMethod(
$core.method({
selector: "renderToolbarOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$6,$7,$2;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._id_("amber_toolbar");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["id:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._input();
$recv($3)._class_("implementors");
$4=$recv($3)._yourself();
self["@input"]=$4;
self["@input"];
$recv(self["@input"])._onKeyPress_((function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$5=$recv($recv(event)._keyCode()).__eq((13));
if($core.assert($5)){
return self._search_($recv($recv(self["@input"])._asJQuery())._val());
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({event:event},$ctx2,2)});
//>>excludeEnd("ctx");
}));
$6=$recv(html)._div();
$recv($6)._id_("amber_close");
$7=$recv($6)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._close();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
return $7;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderToolbarOn:",{html:html},$globals.TabManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderToolbarOn: html\x0a\x09html div\x0a\x09\x09id: 'amber_toolbar';\x0a\x09\x09with: [\x0a\x09\x09\x09input := html input\x0a\x09\x09\x09\x09class: 'implementors';\x0a\x09\x09\x09\x09yourself.\x0a\x09\x09\x09input onKeyPress: [ :event |\x0a\x09\x09\x09\x09event keyCode = 13 ifTrue: [\x0a\x09\x09\x09\x09self search: input asJQuery val ]].\x0a\x09\x09\x09html div id: 'amber_close'; onClick: [ self close ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["id:", "div", "with:", "class:", "input", "yourself", "onKeyPress:", "ifTrue:", "=", "keyCode", "search:", "val", "asJQuery", "onClick:", "close"]
}),
$globals.TabManager);

$core.addMethod(
$core.method({
selector: "search:",
protocol: 'actions',
fn: function (aString){
var self=this;
var searchedClass;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $Browser(){return $globals.Browser||(typeof Browser=="undefined"?nil:Browser)}
function $ReferencesBrowser(){return $globals.ReferencesBrowser||(typeof ReferencesBrowser=="undefined"?nil:ReferencesBrowser)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
searchedClass=$recv($recv($Smalltalk())._globals())._at_(aString);
$1=$recv(searchedClass)._isClass();
if($core.assert($1)){
$recv($Browser())._openOn_(searchedClass);
} else {
$recv($ReferencesBrowser())._search_(aString);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"search:",{aString:aString,searchedClass:searchedClass},$globals.TabManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "search: aString\x0a\x09| searchedClass |\x0a\x09searchedClass := Smalltalk globals at: aString.\x0a\x09\x09searchedClass isClass\x0a\x09\x09\x09ifTrue: [ Browser openOn: searchedClass ]\x0a\x09\x09\x09ifFalse: [ ReferencesBrowser search: aString ]",
referencedClasses: ["Smalltalk", "Browser", "ReferencesBrowser"],
//>>excludeEnd("ide");
messageSends: ["at:", "globals", "ifTrue:ifFalse:", "isClass", "openOn:", "search:"]
}),
$globals.TabManager);

$core.addMethod(
$core.method({
selector: "selectTab:",
protocol: 'actions',
fn: function (aWidget){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._open();
self["@selectedTab"]=aWidget;
$recv(self._tabs())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._hide();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(aWidget)._show();
self._update();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectTab:",{aWidget:aWidget},$globals.TabManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidget"],
source: "selectTab: aWidget\x0a\x09self open.\x0a\x09selectedTab := aWidget.\x0a\x09self tabs do: [ :each |\x0a\x09each hide ].\x0a\x09aWidget show.\x0a\x09\x0a\x09self update",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["open", "do:", "tabs", "hide", "show", "update"]
}),
$globals.TabManager);

$core.addMethod(
$core.method({
selector: "setBodyMargin:",
protocol: 'actions',
fn: function (anInteger){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(".amberBody"._asJQuery())._css_put_("margin-bottom",$recv($recv(anInteger)._asString()).__comma("px"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setBodyMargin:",{anInteger:anInteger},$globals.TabManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "setBodyMargin: anInteger\x0a\x09'.amberBody' asJQuery css: 'margin-bottom' put: anInteger asString, 'px'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["css:put:", "asJQuery", ",", "asString"]
}),
$globals.TabManager);

$core.addMethod(
$core.method({
selector: "tabs",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@tabs"];
if(($receiver = $2) == null || $receiver.isNil){
self["@tabs"]=$recv($Array())._new();
$1=self["@tabs"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tabs",{},$globals.TabManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tabs\x0a\x09^ tabs ifNil: [ tabs := Array new ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.TabManager);

$core.addMethod(
$core.method({
selector: "update",
protocol: 'updating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._renderTabs();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"update",{},$globals.TabManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "update\x0a\x09self renderTabs",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderTabs"]
}),
$globals.TabManager);

$core.addMethod(
$core.method({
selector: "updateBodyMargin",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._setBodyMargin_($recv("#amber"._asJQuery())._height());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateBodyMargin",{},$globals.TabManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateBodyMargin\x0a\x09self setBodyMargin: '#amber' asJQuery height",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setBodyMargin:", "height", "asJQuery"]
}),
$globals.TabManager);

$core.addMethod(
$core.method({
selector: "updatePosition",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1="#amber"._asJQuery();
$recv($1)._css_put_("top","");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["css:put:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._css_put_("bottom","0px");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updatePosition",{},$globals.TabManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updatePosition\x0a\x09'#amber' asJQuery\x0a\x09\x09css: 'top' put: '';\x0a\x09\x09css: 'bottom' put: '0px'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["css:put:", "asJQuery"]
}),
$globals.TabManager);


$globals.TabManager.klass.iVarNames = ['current'];
$core.addMethod(
$core.method({
selector: "current",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@current"];
if(($receiver = $2) == null || $receiver.isNil){
self["@current"]=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.TabManager.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=self["@current"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"current",{},$globals.TabManager.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x09^ current ifNil: [ current := super new ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.TabManager.klass);

$core.addMethod(
$core.method({
selector: "new",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._shouldNotImplement();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.TabManager.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09self shouldNotImplement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldNotImplement"]
}),
$globals.TabManager.klass);

$core.addMethod(
$core.method({
selector: "toggleAmberIDE",
protocol: 'actions',
fn: function (){
var self=this;
function $Browser(){return $globals.Browser||(typeof Browser=="undefined"?nil:Browser)}
function $TabManager(){return $globals.TabManager||(typeof TabManager=="undefined"?nil:TabManager)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1,$4,$5;
$3="#amber"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._length();
$1=$recv($2).__eq((0));
if($core.assert($1)){
$recv($Browser())._open();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["open"]=1;
//>>excludeEnd("ctx");
} else {
$4=$recv("#amber"._asJQuery())._is_(":visible");
if($core.assert($4)){
$5=$recv($TabManager())._current();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["current"]=1;
//>>excludeEnd("ctx");
$recv($5)._close();
} else {
$recv($recv($TabManager())._current())._open();
};
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toggleAmberIDE",{},$globals.TabManager.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toggleAmberIDE\x0a\x09'#amber' asJQuery length = 0\x0a\x09\x09ifTrue: [ Browser open ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09('#amber' asJQuery is: ':visible')\x0a\x09\x09\x09\x09ifTrue: [ TabManager current close ]\x0a\x09\x09\x09\x09ifFalse: [ TabManager current open ] ]",
referencedClasses: ["Browser", "TabManager"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "=", "length", "asJQuery", "open", "is:", "close", "current"]
}),
$globals.TabManager.klass);


$core.addClass('TabWidget', $globals.Widget, ['div'], 'IDE');
$core.addMethod(
$core.method({
selector: "canBeClosed",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "canBeClosed\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TabWidget);

$core.addMethod(
$core.method({
selector: "close",
protocol: 'actions',
fn: function (){
var self=this;
function $TabManager(){return $globals.TabManager||(typeof TabManager=="undefined"?nil:TabManager)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv($TabManager())._current())._closeTab_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"close",{},$globals.TabWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "close\x0a\x09TabManager current closeTab: self",
referencedClasses: ["TabManager"],
//>>excludeEnd("ide");
messageSends: ["closeTab:", "current"]
}),
$globals.TabWidget);

$core.addMethod(
$core.method({
selector: "hide",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self["@div"])._asJQuery())._hide();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hide",{},$globals.TabWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hide\x0a\x09div asJQuery hide",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["hide", "asJQuery"]
}),
$globals.TabWidget);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"label",{},$globals.TabWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.TabWidget);

$core.addMethod(
$core.method({
selector: "open",
protocol: 'actions',
fn: function (){
var self=this;
function $TabManager(){return $globals.TabManager||(typeof TabManager=="undefined"?nil:TabManager)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($TabManager())._current();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["current"]=1;
//>>excludeEnd("ctx");
$recv($1)._addTab_(self);
$recv($recv($TabManager())._current())._selectTab_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"open",{},$globals.TabWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "open\x0a\x09TabManager current addTab: self.\x0a\x09TabManager current selectTab: self",
referencedClasses: ["TabManager"],
//>>excludeEnd("ide");
messageSends: ["addTab:", "current", "selectTab:"]
}),
$globals.TabWidget);

$core.addMethod(
$core.method({
selector: "remove",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self["@div"])._asJQuery())._remove();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove",{},$globals.TabWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "remove\x0a\x09div asJQuery remove",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove", "asJQuery"]
}),
$globals.TabWidget);

$core.addMethod(
$core.method({
selector: "renderBoxOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderBoxOn: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TabWidget);

$core.addMethod(
$core.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderButtonsOn: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TabWidget);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
$recv($1)._class_("amberTool");
$2=$recv($1)._yourself();
self["@div"]=$2;
self._renderTab();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.TabWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09div := html div\x0a\x09\x09class: 'amberTool';\x0a\x09\x09yourself.\x0a\x09self renderTab",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "yourself", "renderTab"]
}),
$globals.TabWidget);

$core.addMethod(
$core.method({
selector: "renderTab",
protocol: 'rendering',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$recv(self["@div"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("amber_box");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._renderBoxOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$2;
$3=$recv(html)._div();
$recv($3)._class_("amber_buttons");
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._renderButtonsOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderTab",{},$globals.TabWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "renderTab\x0a\x09div contents: [ :html |\x0a\x09\x09html div\x0a\x09\x09class: 'amber_box';\x0a\x09\x09with: [ self renderBoxOn: html ].\x0a\x09\x09html div\x0a\x09\x09class: 'amber_buttons';\x0a\x09\x09with: [ self renderButtonsOn: html ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "class:", "div", "with:", "renderBoxOn:", "renderButtonsOn:"]
}),
$globals.TabWidget);

$core.addMethod(
$core.method({
selector: "show",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self["@div"])._asJQuery())._show();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show",{},$globals.TabWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "show\x0a\x09div asJQuery show",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["show", "asJQuery"]
}),
$globals.TabWidget);

$core.addMethod(
$core.method({
selector: "update",
protocol: 'rendering',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._renderTab();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"update",{},$globals.TabWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "update\x0a\x09self renderTab",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderTab"]
}),
$globals.TabWidget);


$core.addMethod(
$core.method({
selector: "open",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._new())._open();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"open",{},$globals.TabWidget.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "open\x0a\x09^ self new open",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["open", "new"]
}),
$globals.TabWidget.klass);


$core.addClass('Browser', $globals.TabWidget, ['selectedPackage', 'selectedClass', 'selectedProtocol', 'selectedMethod', 'packagesList', 'classesList', 'protocolsList', 'methodsList', 'sourceArea', 'tabsList', 'selectedTab', 'saveButton', 'classButtons', 'methodButtons', 'unsavedChanges'], 'IDE');
$core.addMethod(
$core.method({
selector: "addInstanceVariableNamed:toClass:",
protocol: 'actions',
fn: function (aString,aClass){
var self=this;
function $ClassBuilder(){return $globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$1=$recv($ClassBuilder())._new();
$2=$recv(aClass)._superclass();
$3=$recv(aClass)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name"]=1;
//>>excludeEnd("ctx");
$4=$recv($recv(aClass)._instanceVariableNames())._copy();
$recv($4)._add_(aString);
$5=$recv($4)._yourself();
$recv($1)._addSubclassOf_named_instanceVariableNames_package_($2,$3,$5,$recv($recv(aClass)._package())._name());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addInstanceVariableNamed:toClass:",{aString:aString,aClass:aClass},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass"],
source: "addInstanceVariableNamed: aString toClass: aClass\x0a\x09ClassBuilder new\x0a\x09\x09addSubclassOf: aClass superclass\x0a\x09\x09named: aClass name\x0a\x09\x09instanceVariableNames: (aClass instanceVariableNames copy add: aString; yourself)\x0a\x09\x09package: aClass package name",
referencedClasses: ["ClassBuilder"],
//>>excludeEnd("ide");
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "new", "superclass", "name", "add:", "copy", "instanceVariableNames", "yourself", "package"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "addNewClass",
protocol: 'actions',
fn: function (){
var self=this;
var className;
function $Object(){return $globals.Object||(typeof Object=="undefined"?nil:Object)}
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
className=self._prompt_("New class");
$1=$recv($recv(className)._notNil())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(className)._notEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
$recv($Object())._subclass_instanceVariableNames_package_(className,"",self._selectedPackage());
self._resetClassesList();
$2=self._updateClassesList();
$2;
self._selectClass_($recv($recv($Smalltalk())._globals())._at_(className));
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addNewClass",{className:className},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addNewClass\x0a\x09| className |\x0a\x09className := self prompt: 'New class'.\x0a\x09(className notNil and: [ className notEmpty ]) ifTrue: [\x0a\x09\x09Object subclass: className instanceVariableNames: '' package: self selectedPackage.\x0a\x09\x09\x09self\x0a\x09\x09\x09resetClassesList;\x0a\x09\x09\x09updateClassesList.\x0a\x09\x09self selectClass: (Smalltalk globals at: className) ]",
referencedClasses: ["Object", "Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["prompt:", "ifTrue:", "and:", "notNil", "notEmpty", "subclass:instanceVariableNames:package:", "selectedPackage", "resetClassesList", "updateClassesList", "selectClass:", "at:", "globals"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "addNewProtocol",
protocol: 'actions',
fn: function (){
var self=this;
var newProtocol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
newProtocol=self._prompt_("New method protocol");
$1=$recv($recv(newProtocol)._notNil())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(newProtocol)._notEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
$recv(self["@selectedMethod"])._protocol_(newProtocol);
self._setMethodProtocol_(newProtocol);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addNewProtocol",{newProtocol:newProtocol},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addNewProtocol\x0a\x09| newProtocol |\x0a\x09\x0a\x09newProtocol := self prompt: 'New method protocol'.\x0a\x09\x0a\x09(newProtocol notNil and: [ newProtocol notEmpty ]) ifTrue: [\x0a\x09\x09selectedMethod protocol: newProtocol.\x0a\x09\x09self setMethodProtocol: newProtocol ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["prompt:", "ifTrue:", "and:", "notNil", "notEmpty", "protocol:", "setMethodProtocol:"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "canBeClosed",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "canBeClosed\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "cancelChanges",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=self["@unsavedChanges"];
if($core.assert($2)){
$1=self._confirm_("Cancel changes?");
} else {
$1=true;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cancelChanges",{},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cancelChanges\x0a\x09^ unsavedChanges\x0a\x09ifTrue: [ self confirm: 'Cancel changes?' ]\x0a\x09ifFalse: [ true ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "confirm:"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "classCommentSource",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@selectedClass"])._comment();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classCommentSource",{},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classCommentSource\x0a\x09^ selectedClass comment",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["comment"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "classDeclarationSource",
protocol: 'accessing',
fn: function (){
var self=this;
var stream;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$6,$7,$5,$8,$9,$10,$11,$12,$13,$receiver;
stream=""._writeStream();
$1=self["@selectedClass"];
if(($receiver = $1) == null || $receiver.isNil){
$2=self._classDeclarationTemplate();
return $2;
} else {
$1;
};
$3=stream;
$recv($3)._nextPutAll_($recv($recv(self["@selectedClass"])._superclass())._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv($3)._nextPutAll_(" subclass: #");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$recv($3)._nextPutAll_($recv(self["@selectedClass"])._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$4=$3;
$6=$recv($String())._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$7=$recv($String())._tab();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tab"]=1;
//>>excludeEnd("ctx");
$5=$recv($6).__comma($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($4)._nextPutAll_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
$8=$recv($3)._nextPutAll_("instanceVariableNames: '");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=5;
//>>excludeEnd("ctx");
$recv($recv(self["@selectedClass"])._instanceVariableNames())._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPutAll_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=6;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPutAll_(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=7;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$9=stream;
$10=$9;
$11=$recv("'".__comma($recv($String())._lf())).__comma($recv($String())._tab());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$recv($10)._nextPutAll_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=8;
//>>excludeEnd("ctx");
$recv($9)._nextPutAll_("package: '");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=9;
//>>excludeEnd("ctx");
$recv($9)._nextPutAll_($recv(self["@selectedClass"])._category());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=10;
//>>excludeEnd("ctx");
$12=$recv($9)._nextPutAll_("'");
$13=$recv(stream)._contents();
return $13;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classDeclarationSource",{stream:stream},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classDeclarationSource\x0a\x09| stream |\x0a\x09stream := '' writeStream.\x0a\x09selectedClass ifNil: [ ^ self classDeclarationTemplate ].\x0a\x09stream\x0a\x09\x09nextPutAll: selectedClass superclass asString;\x0a\x09\x09nextPutAll: ' subclass: #';\x0a\x09\x09nextPutAll: selectedClass name;\x0a\x09\x09nextPutAll: String lf, String tab;\x0a\x09\x09nextPutAll: 'instanceVariableNames: '''.\x0a\x09selectedClass instanceVariableNames\x0a\x09\x09do: [ :each | stream nextPutAll: each ]\x0a\x09\x09separatedBy: [ stream nextPutAll: ' ' ].\x0a\x09stream\x0a\x09\x09nextPutAll: '''', String lf, String tab;\x0a\x09\x09nextPutAll: 'package: ''';\x0a\x09\x09nextPutAll: selectedClass category;\x0a\x09\x09nextPutAll: ''''.\x0a\x09^ stream contents",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["writeStream", "ifNil:", "classDeclarationTemplate", "nextPutAll:", "asString", "superclass", "name", ",", "lf", "tab", "do:separatedBy:", "instanceVariableNames", "category", "contents"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "classDeclarationTemplate",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv("Object subclass: #NameOfSubclass\x0a\x09instanceVariableNames: ''\x0a\x09package: '".__comma(self._selectedPackage())).__comma("'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classDeclarationTemplate",{},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classDeclarationTemplate\x0a\x09^ 'Object subclass: #NameOfSubclass\x0a\x09instanceVariableNames: ''''\x0a\x09package: ''', self selectedPackage, ''''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "selectedPackage"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "classes",
protocol: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$1=$recv($recv($recv($recv($Smalltalk())._classes())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._category()).__eq(self["@selectedPackage"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})))._sort_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(a)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["name"]=1;
//>>excludeEnd("ctx");
return $recv($2).__lt($recv(b)._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,2)});
//>>excludeEnd("ctx");
})))._asSet();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classes",{},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classes\x0a\x09^ ((Smalltalk classes\x0a\x09select: [ :each | each category = selectedPackage ])\x0a\x09sort: [ :a :b | a name < b name ]) asSet",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["asSet", "sort:", "select:", "classes", "=", "category", "<", "name"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "commitPackage",
protocol: 'actions',
fn: function (){
var self=this;
function $Package(){return $globals.Package||(typeof Package=="undefined"?nil:Package)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@selectedPackage"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv($recv($Package())._named_(self["@selectedPackage"]))._commit();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitPackage",{},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commitPackage\x0a\x09selectedPackage ifNotNil: [\x0a\x09\x09(Package named: selectedPackage) commit ]",
referencedClasses: ["Package"],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "commit", "named:"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "compile",
protocol: 'actions',
fn: function (){
var self=this;
var currentEditLine;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4,$receiver;
self._disableSaveButton();
$1=$recv(self["@sourceArea"])._editor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["editor"]=1;
//>>excludeEnd("ctx");
currentEditLine=$recv($1)._getCursor();
$2=$recv(self["@selectedTab"]).__eq("comment");
if($core.assert($2)){
$3=self["@selectedClass"];
if(($receiver = $3) == null || $receiver.isNil){
$3;
} else {
self._compileClassComment();
};
} else {
$5=$recv(self["@selectedProtocol"])._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["notNil"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@selectedMethod"])._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
if($core.assert($4)){
self._compileMethodDefinition();
} else {
self._compileDefinition();
};
};
$recv($recv(self["@sourceArea"])._editor())._setCursor_(currentEditLine);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compile",{currentEditLine:currentEditLine},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "compile\x0a\x09| currentEditLine |\x0a\x09self disableSaveButton.\x0a\x09currentEditLine := sourceArea editor getCursor.\x0a\x09selectedTab = #comment\x0a\x09ifTrue: [\x0a\x09\x09\x09selectedClass ifNotNil: [\x0a\x09\x09\x09\x09self compileClassComment ]]\x0a\x09ifFalse: [\x0a\x09\x09\x09(selectedProtocol notNil or: [ selectedMethod notNil ])\x0a\x09\x09\x09\x09ifFalse: [ self compileDefinition ]\x0a\x09\x09\x09\x09ifTrue: [ self compileMethodDefinition ]].\x0a\x09sourceArea editor setCursor: currentEditLine.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["disableSaveButton", "getCursor", "editor", "ifTrue:ifFalse:", "=", "ifNotNil:", "compileClassComment", "ifFalse:ifTrue:", "or:", "notNil", "compileDefinition", "compileMethodDefinition", "setCursor:"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "compileClassComment",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@selectedClass"])._comment_($recv(self["@sourceArea"])._val());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compileClassComment",{},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "compileClassComment\x0a\x09selectedClass comment: sourceArea val",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["comment:", "val"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "compileDefinition",
protocol: 'actions',
fn: function (){
var self=this;
var newClass;
function $Compiler(){return $globals.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
newClass=$recv($recv($Compiler())._new())._evaluateExpression_($recv(self["@sourceArea"])._val());
self._resetClassesList();
self._updateCategoriesList();
$1=self._updateClassesList();
self._selectClass_(newClass);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compileDefinition",{newClass:newClass},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "compileDefinition\x0a\x09| newClass |\x0a\x09newClass := Compiler new evaluateExpression: sourceArea val.\x0a\x09self\x0a\x09resetClassesList;\x0a\x09updateCategoriesList;\x0a\x09updateClassesList.\x0a\x09self selectClass: newClass",
referencedClasses: ["Compiler"],
//>>excludeEnd("ide");
messageSends: ["evaluateExpression:", "new", "val", "resetClassesList", "updateCategoriesList", "updateClassesList", "selectClass:"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "compileMethodDefinition",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@selectedTab"]).__eq("instance");
if($core.assert($1)){
self._compileMethodDefinitionFor_(self["@selectedClass"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["compileMethodDefinitionFor:"]=1;
//>>excludeEnd("ctx");
} else {
self._compileMethodDefinitionFor_($recv(self["@selectedClass"])._class());
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compileMethodDefinition",{},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "compileMethodDefinition\x0a\x09selectedTab = #instance\x0a\x09ifTrue: [ self compileMethodDefinitionFor: selectedClass ]\x0a\x09ifFalse: [ self compileMethodDefinitionFor: selectedClass class ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "=", "compileMethodDefinitionFor:", "class"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "compileMethodDefinitionFor:",
protocol: 'actions',
fn: function (aClass){
var self=this;
var compiler,method,source,node;
function $Compiler(){return $globals.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
function $PlatformInterface(){return $globals.PlatformInterface||(typeof PlatformInterface=="undefined"?nil:PlatformInterface)}
function $ClassBuilder(){return $globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$6,$5,$4,$3,$7,$9,$8,$10,$receiver;
var $early={};
try {
source=$recv(self["@sourceArea"])._val();
$1=self["@selectedProtocol"];
if(($receiver = $1) == null || $receiver.isNil){
self["@selectedProtocol"]=$recv(self["@selectedMethod"])._protocol();
self["@selectedProtocol"];
} else {
$1;
};
compiler=$recv($Compiler())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv(compiler)._source_(source);
node=$recv(compiler)._parse_(source);
$2=$recv(node)._isParseFailure();
if($core.assert($2)){
$6="PARSE ERROR: ".__comma($recv(node)._reason());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$5=$recv($6).__comma(", position: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$4=$recv($5).__comma($recv($recv(node)._position())._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$3=self._alert_($4);
return $3;
};
$recv(compiler)._currentClass_(aClass);
method=$recv(compiler)._eval_($recv(compiler)._compileNode_(node));
$recv($recv(compiler)._unknownVariables())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$7=$recv($PlatformInterface())._existsGlobal_(each);
if(!$core.assert($7)){
$9=$recv("Declare '".__comma(each)).__comma("' as instance variable?");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=4;
//>>excludeEnd("ctx");
$8=self._confirm_($9);
if($core.assert($8)){
self._addInstanceVariableNamed_toClass_(each,aClass);
$10=self._compileMethodDefinitionFor_(aClass);
throw $early=[$10];
};
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$recv($recv($ClassBuilder())._new())._installMethod_forClass_protocol_(method,aClass,self["@selectedProtocol"]);
self._updateMethodsList();
self._selectMethod_(method);
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compileMethodDefinitionFor:",{aClass:aClass,compiler:compiler,method:method,source:source,node:node},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "compileMethodDefinitionFor: aClass\x0a\x09| compiler method source node |\x0a\x09source := sourceArea val.\x0a\x09selectedProtocol ifNil: [ selectedProtocol := selectedMethod protocol ].\x0a\x09compiler := Compiler new.\x0a\x09compiler source: source.\x0a\x09node := compiler parse: source.\x0a\x09node isParseFailure ifTrue: [\x0a\x09^ self alert: 'PARSE ERROR: ', node reason, ', position: ', node position asString ].\x0a\x09compiler currentClass: aClass.\x0a\x09method := compiler eval: (compiler compileNode: node).\x0a\x09compiler unknownVariables do: [ :each |\x0a\x09\x09\x22Do not try to redeclare javascript's objects\x22\x0a\x09\x09(PlatformInterface existsGlobal: each) ifFalse: [\x0a\x09\x09(self confirm: 'Declare ''', each, ''' as instance variable?') ifTrue: [\x0a\x09\x09\x09self addInstanceVariableNamed: each toClass: aClass.\x0a\x09\x09\x09^ self compileMethodDefinitionFor: aClass ]] ].\x0a\x09ClassBuilder new installMethod: method forClass: aClass protocol: selectedProtocol.\x0a\x09self updateMethodsList.\x0a\x09self selectMethod: method",
referencedClasses: ["Compiler", "PlatformInterface", "ClassBuilder"],
//>>excludeEnd("ide");
messageSends: ["val", "ifNil:", "protocol", "new", "source:", "parse:", "ifTrue:", "isParseFailure", "alert:", ",", "reason", "asString", "position", "currentClass:", "eval:", "compileNode:", "do:", "unknownVariables", "ifFalse:", "existsGlobal:", "confirm:", "addInstanceVariableNamed:toClass:", "compileMethodDefinitionFor:", "installMethod:forClass:protocol:", "updateMethodsList", "selectMethod:"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "copyClass",
protocol: 'actions',
fn: function (){
var self=this;
var className;
function $ClassBuilder(){return $globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
className=self._prompt_("Copy class");
$1=$recv($recv(className)._notNil())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(className)._notEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
$recv($recv($ClassBuilder())._new())._copyClass_named_(self._selectedClass(),className);
self._resetClassesList();
$2=self._updateClassesList();
$2;
self._selectClass_($recv($recv($Smalltalk())._globals())._at_(className));
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyClass",{className:className},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "copyClass\x0a\x09| className |\x0a\x09className := self prompt: 'Copy class'.\x0a\x09(className notNil and: [ className notEmpty ]) ifTrue: [\x0a\x09\x09ClassBuilder new copyClass: self selectedClass named: className.\x0a\x09\x09\x09self\x0a\x09\x09\x09resetClassesList;\x0a\x09\x09\x09updateClassesList.\x0a\x09\x09self selectClass: (Smalltalk globals at: className) ]",
referencedClasses: ["ClassBuilder", "Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["prompt:", "ifTrue:", "and:", "notNil", "notEmpty", "copyClass:named:", "new", "selectedClass", "resetClassesList", "updateClassesList", "selectClass:", "at:", "globals"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "declarationSource",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(self["@selectedTab"]).__eq("instance");
if($core.assert($2)){
$1=self._classDeclarationSource();
} else {
$1=self._metaclassDeclarationSource();
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"declarationSource",{},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "declarationSource\x0a\x09^ selectedTab = #instance\x0a\x09ifTrue: [ self classDeclarationSource ]\x0a\x09ifFalse: [ self metaclassDeclarationSource ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "=", "classDeclarationSource", "metaclassDeclarationSource"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "disableSaveButton",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@saveButton"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv(self["@saveButton"])._at_put_("disabled",true);
};
self["@unsavedChanges"]=false;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"disableSaveButton",{},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "disableSaveButton\x0a\x09saveButton ifNotNil: [\x0a\x09saveButton at: 'disabled' put: true ].\x0a\x09unsavedChanges := false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "at:put:"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "dummyMethodSource",
protocol: 'accessing',
fn: function (){
var self=this;
return "messageSelectorAndArgumentNames\x0a\x09\x22comment stating purpose of message\x22\x0a\x0a\x09| temporary variable names |\x0a\x09statements";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dummyMethodSource\x0a\x09^ 'messageSelectorAndArgumentNames\x0a\x09\x22comment stating purpose of message\x22\x0a\x0a\x09| temporary variable names |\x0a\x09statements'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "handleSourceAreaKeyDown:",
protocol: 'actions',
fn: function (anEvent){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
if(anEvent.ctrlKey) {
		if(anEvent.keyCode === 83) { //ctrl+s
			self._compile();
			anEvent.preventDefault();
			return false;
		}
	}
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleSourceAreaKeyDown:",{anEvent:anEvent},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEvent"],
source: "handleSourceAreaKeyDown: anEvent\x0a\x09<if(anEvent.ctrlKey) {\x0a\x09\x09if(anEvent.keyCode === 83) { //ctrl+s\x0a\x09\x09\x09self._compile();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09}\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "hideClassButtons",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self["@classButtons"])._asJQuery())._hide();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hideClassButtons",{},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hideClassButtons\x0a\x09classButtons asJQuery hide",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["hide", "asJQuery"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "hideMethodButtons",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self["@methodButtons"])._asJQuery())._hide();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hideMethodButtons",{},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hideMethodButtons\x0a\x09methodButtons asJQuery hide",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["hide", "asJQuery"]
}),
$globals.Browser);

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
$globals.Browser.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@selectedTab"]="instance";
self["@selectedPackage"]=$recv(self._packages())._first();
self["@unsavedChanges"]=false;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09selectedTab := #instance.\x0a\x09selectedPackage := self packages first.\x0a\x09unsavedChanges := false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "first", "packages"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@selectedClass"];
if(($receiver = $2) == null || $receiver.isNil){
$1="Browser (nil)";
} else {
$1="Browser: ".__comma($recv(self["@selectedClass"])._name());
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"label",{},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ selectedClass\x0a\x09ifNil: [ 'Browser (nil)' ]\x0a\x09ifNotNil: [ 'Browser: ', selectedClass name ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", ",", "name"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "metaclassDeclarationSource",
protocol: 'accessing',
fn: function (){
var self=this;
var stream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$receiver;
stream=""._writeStream();
$1=self["@selectedClass"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$2=stream;
$recv($2)._nextPutAll_($recv(self["@selectedClass"])._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv($2)._nextPutAll_(" class ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$3=$recv($2)._nextPutAll_("instanceVariableNames: '");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$3;
$recv($recv($recv(self["@selectedClass"])._class())._instanceVariableNames())._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPutAll_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPutAll_(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=5;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$recv(stream)._nextPutAll_("'");
};
$4=$recv(stream)._contents();
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"metaclassDeclarationSource",{stream:stream},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "metaclassDeclarationSource\x0a\x09| stream |\x0a\x09stream := '' writeStream.\x0a\x09selectedClass ifNotNil: [\x0a\x09stream\x0a\x09\x09nextPutAll: selectedClass asString;\x0a\x09\x09nextPutAll: ' class ';\x0a\x09\x09nextPutAll: 'instanceVariableNames: '''.\x0a\x09selectedClass class instanceVariableNames\x0a\x09\x09do: [ :each | stream nextPutAll: each ]\x0a\x09\x09separatedBy: [ stream nextPutAll: ' ' ].\x0a\x09stream nextPutAll: '''' ].\x0a\x09^ stream contents",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeStream", "ifNotNil:", "nextPutAll:", "asString", "do:separatedBy:", "instanceVariableNames", "class", "contents"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "methodSource",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@selectedMethod"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._dummyMethodSource();
} else {
$1=$recv(self["@selectedMethod"])._source();
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodSource",{},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "methodSource\x0a\x09^ selectedMethod\x0a\x09ifNil: [ self dummyMethodSource ]\x0a\x09ifNotNil: [ selectedMethod source ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "dummyMethodSource", "source"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "methods",
protocol: 'accessing',
fn: function (){
var self=this;
var klass;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$7,$8,$6,$9,$5,$receiver;
$1=$recv(self["@selectedTab"]).__eq("comment");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
$2=[];
return $2;
};
$3=self["@selectedClass"];
if(($receiver = $3) == null || $receiver.isNil){
$3;
} else {
$4=$recv(self["@selectedTab"]).__eq("instance");
if($core.assert($4)){
klass=self["@selectedClass"];
} else {
klass=$recv(self["@selectedClass"])._class();
};
klass;
};
$7=self["@selectedProtocol"];
if(($receiver = $7) == null || $receiver.isNil){
$8=klass;
if(($receiver = $8) == null || $receiver.isNil){
$6=[];
} else {
$6=$recv($recv(klass)._methodDictionary())._values();
};
} else {
$6=$recv(klass)._methodsInProtocol_(self["@selectedProtocol"]);
};
$5=$recv($6)._sort_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$9=$recv(a)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
return $recv($9).__lt($recv(b)._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,9)});
//>>excludeEnd("ctx");
}));
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methods",{klass:klass},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "methods\x0a\x09| klass |\x0a\x09selectedTab = #comment ifTrue: [ ^ #() ].\x0a\x09selectedClass ifNotNil: [\x0a\x09klass := selectedTab = #instance\x0a\x09\x09ifTrue: [ selectedClass ]\x0a\x09\x09ifFalse: [ selectedClass class ]].\x0a\x09^ (selectedProtocol\x0a\x09ifNil: [\x0a\x09\x09klass\x0a\x09\x09ifNil: [ #() ]\x0a\x09\x09ifNotNil: [ klass methodDictionary values ]]\x0a\x09ifNotNil: [\x0a\x09\x09klass methodsInProtocol: selectedProtocol ]) \x0a\x09\x09\x09\x09sort: [ :a :b | a selector < b selector ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "ifNotNil:", "ifTrue:ifFalse:", "class", "sort:", "ifNil:ifNotNil:", "values", "methodDictionary", "methodsInProtocol:", "<", "selector"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "packages",
protocol: 'accessing',
fn: function (){
var self=this;
var packages;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1,$4;
packages=$recv($Array())._new();
$recv($recv($Smalltalk())._classes())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=packages;
$3=$recv(each)._category();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["category"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._includes_($3);
if(!$core.assert($1)){
return $recv(packages)._add_($recv(each)._category());
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$4=$recv(packages)._sort();
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"packages",{packages:packages},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "packages\x0a\x09| packages |\x0a\x09packages := Array new.\x0a\x09Smalltalk classes do: [ :each |\x0a\x09(packages includes: each category) ifFalse: [\x0a\x09\x09packages add: each category ]].\x0a\x09^ packages sort",
referencedClasses: ["Array", "Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["new", "do:", "classes", "ifFalse:", "includes:", "category", "add:", "sort"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "protocols",
protocol: 'accessing',
fn: function (){
var self=this;
var klass;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$receiver;
$1=self["@selectedClass"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$2=$recv(self["@selectedTab"]).__eq("comment");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if($core.assert($2)){
$3=[];
return $3;
};
$4=$recv(self["@selectedTab"]).__eq("instance");
if($core.assert($4)){
klass=self["@selectedClass"];
} else {
klass=$recv(self["@selectedClass"])._class();
};
klass;
$5=$recv($recv(klass)._methodDictionary())._isEmpty();
if($core.assert($5)){
$6=$recv($Array())._with_("not yet classified");
return $6;
};
$7=$recv(klass)._protocols();
return $7;
};
$8=$recv($Array())._new();
return $8;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"protocols",{klass:klass},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "protocols\x0a\x09| klass |\x0a\x09selectedClass ifNotNil: [\x0a\x09selectedTab = #comment ifTrue: [ ^ #() ].\x0a\x09klass := selectedTab = #instance\x0a\x09\x09ifTrue: [ selectedClass ]\x0a\x09\x09ifFalse: [ selectedClass class ].\x0a\x09klass methodDictionary isEmpty ifTrue: [\x0a\x09\x09^ Array with: 'not yet classified' ].\x0a\x09^ klass protocols ].\x0a\x09^ Array new",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "ifTrue:", "=", "ifTrue:ifFalse:", "class", "isEmpty", "methodDictionary", "with:", "protocols", "new"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "removeClass",
protocol: 'actions',
fn: function (){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv("Do you really want to remove ".__comma($recv(self["@selectedClass"])._name())).__comma("?");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$1=self._confirm_($2);
if($core.assert($1)){
$recv($Smalltalk())._removeClass_(self["@selectedClass"]);
self._resetClassesList();
self._selectClass_(nil);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeClass",{},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeClass\x0a\x09(self confirm: 'Do you really want to remove ', selectedClass name, '?')\x0a\x09ifTrue: [\x0a\x09\x09Smalltalk removeClass: selectedClass.\x0a\x09\x09self resetClassesList.\x0a\x09\x09self selectClass: nil ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "confirm:", ",", "name", "removeClass:", "resetClassesList", "selectClass:"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "removeMethod",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2,$4;
$1=self._cancelChanges();
if($core.assert($1)){
$3=$recv("Do you really want to remove #".__comma($recv(self["@selectedMethod"])._selector())).__comma("?");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$2=self._confirm_($3);
if($core.assert($2)){
$4=$recv(self["@selectedTab"]).__eq("instance");
if($core.assert($4)){
$recv(self["@selectedClass"])._removeCompiledMethod_(self["@selectedMethod"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["removeCompiledMethod:"]=1;
//>>excludeEnd("ctx");
} else {
$recv($recv(self["@selectedClass"])._class())._removeCompiledMethod_(self["@selectedMethod"]);
};
self._selectMethod_(nil);
};
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeMethod",{},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeMethod\x0a\x09self cancelChanges ifTrue: [\x0a\x09(self confirm: 'Do you really want to remove #', selectedMethod selector, '?')\x0a\x09\x09ifTrue: [\x0a\x09\x09selectedTab = #instance\x0a\x09\x09\x09ifTrue: [ selectedClass removeCompiledMethod: selectedMethod ]\x0a\x09\x09\x09ifFalse: [ selectedClass class removeCompiledMethod: selectedMethod ].\x0a\x09\x09self selectMethod: nil ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "cancelChanges", "confirm:", ",", "selector", "ifTrue:ifFalse:", "=", "removeCompiledMethod:", "class", "selectMethod:"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "removePackage",
protocol: 'actions',
fn: function (){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv("Do you really want to remove the whole package ".__comma(self["@selectedPackage"])).__comma(" with all its classes?");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$1=self._confirm_($2);
if($core.assert($1)){
$recv($Smalltalk())._removePackage_(self["@selectedPackage"]);
self._updateCategoriesList();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removePackage",{},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removePackage\x0a\x0a\x09(self confirm: 'Do you really want to remove the whole package ', selectedPackage, ' with all its classes?')\x0a\x09ifTrue: [\x0a\x09\x09Smalltalk removePackage: selectedPackage.\x0a\x09\x09self updateCategoriesList ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "confirm:", ",", "removePackage:", "updateCategoriesList"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "renameClass",
protocol: 'actions',
fn: function (){
var self=this;
var newName;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
newName=self._prompt_("Rename class ".__comma($recv(self["@selectedClass"])._name()));
$1=$recv($recv(newName)._notNil())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(newName)._notEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
$recv(self["@selectedClass"])._rename_(newName);
self._updateClassesList();
$2=self._updateSourceAndButtons();
$2;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renameClass",{newName:newName},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "renameClass\x0a\x09| newName |\x0a\x09newName := self prompt: 'Rename class ', selectedClass name.\x0a\x09(newName notNil and: [ newName notEmpty ]) ifTrue: [\x0a\x09selectedClass rename: newName.\x0a\x09self\x0a\x09\x09updateClassesList;\x0a\x09\x09updateSourceAndButtons ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["prompt:", ",", "name", "ifTrue:", "and:", "notNil", "notEmpty", "rename:", "updateClassesList", "updateSourceAndButtons"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "renamePackage",
protocol: 'actions',
fn: function (){
var self=this;
var newName;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
newName=self._prompt_("Rename package ".__comma(self["@selectedPackage"]));
$1=newName;
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$2=$recv(newName)._notEmpty();
if($core.assert($2)){
$recv($Smalltalk())._renamePackage_to_(self["@selectedPackage"],newName);
self._updateCategoriesList();
};
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renamePackage",{newName:newName},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "renamePackage\x0a\x0a\x09| newName |\x0a\x09newName := self prompt: 'Rename package ', selectedPackage.\x0a\x09newName ifNotNil: [\x0a\x09newName notEmpty ifTrue: [\x0a\x09Smalltalk renamePackage: selectedPackage to: newName.\x0a\x09self updateCategoriesList ]]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["prompt:", ",", "ifNotNil:", "ifTrue:", "notEmpty", "renamePackage:to:", "updateCategoriesList"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "renderBottomPanelOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $SourceArea(){return $globals.SourceArea||(typeof SourceArea=="undefined"?nil:SourceArea)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
$recv($1)._class_("amber_sourceCode");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self["@sourceArea"]=$recv($SourceArea())._new();
self["@sourceArea"];
$recv(self["@sourceArea"])._renderOn_(html);
$recv(self["@sourceArea"])._onKeyDown_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._handleSourceAreaKeyDown_(e);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({e:e},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $recv(self["@sourceArea"])._onKeyUp_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._updateStatus();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderBottomPanelOn:",{html:html},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderBottomPanelOn: html\x0a\x09html div\x0a\x09class: 'amber_sourceCode';\x0a\x09with: [\x0a\x09\x09sourceArea := SourceArea new.\x0a\x09\x09sourceArea renderOn: html.\x0a\x09\x09\x09sourceArea onKeyDown: [ :e |\x0a\x09\x09\x09\x09self handleSourceAreaKeyDown: e ].\x0a\x09\x09sourceArea onKeyUp: [ self updateStatus ]]",
referencedClasses: ["SourceArea"],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "new", "renderOn:", "onKeyDown:", "handleSourceAreaKeyDown:", "onKeyUp:", "updateStatus"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "renderBoxOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._renderTopPanelOn_(html);
self._renderTabsOn_(html);
$1=self._renderBottomPanelOn_(html);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderBoxOn:",{html:html},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderBoxOn: html\x0a\x09self\x0a\x09renderTopPanelOn: html;\x0a\x09renderTabsOn: html;\x0a\x09renderBottomPanelOn: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderTopPanelOn:", "renderTabsOn:", "renderBottomPanelOn:"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$6,$7,$8,$9,$10,$4;
self["@saveButton"]=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["button"]=1;
//>>excludeEnd("ctx");
$1=self["@saveButton"];
$recv($1)._with_("Save");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._compile();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
self["@methodButtons"]=$recv(html)._span();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["span"]=1;
//>>excludeEnd("ctx");
self["@classButtons"]=$recv(html)._span();
$3=$recv(html)._div();
$recv($3)._class_("right");
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["button"]=2;
//>>excludeEnd("ctx");
$recv($5)._with_("DoIt");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$6=$recv($5)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(self["@sourceArea"])._doIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=2;
//>>excludeEnd("ctx");
$6;
$7=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["button"]=3;
//>>excludeEnd("ctx");
$recv($7)._with_("PrintIt");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$8=$recv($7)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(self["@sourceArea"])._printIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=3;
//>>excludeEnd("ctx");
$8;
$9=$recv(html)._button();
$recv($9)._with_("InspectIt");
$10=$recv($9)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(self["@sourceArea"])._inspectIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)});
//>>excludeEnd("ctx");
}));
return $10;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
self._updateSourceAndButtons();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderButtonsOn: html\x0a\x09saveButton := html button.\x0a\x09saveButton\x0a\x09with: 'Save';\x0a\x09onClick: [ self compile ].\x0a\x09methodButtons := html span.\x0a\x09classButtons := html span.\x0a\x09html div\x0a\x09class: 'right';\x0a\x09with: [\x0a\x09\x09html button\x0a\x09\x09\x09with: 'DoIt';\x0a\x09\x09\x09onClick: [ sourceArea doIt ].\x0a\x09\x09html button\x0a\x09\x09\x09with: 'PrintIt';\x0a\x09\x09\x09onClick: [ sourceArea printIt ].\x0a\x09\x09html button with: 'InspectIt';\x0a\x09\x09\x09onClick: [ sourceArea inspectIt ]].\x0a\x09self updateSourceAndButtons",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["button", "with:", "onClick:", "compile", "span", "class:", "div", "doIt", "printIt", "inspectIt", "updateSourceAndButtons"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "renderTabsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@tabsList"]=$recv($recv(html)._ul())._class_("amber_tabs amber_browser");
self._updateTabsList();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderTabsOn:",{html:html},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderTabsOn: html\x0a\x09tabsList := html ul class: 'amber_tabs amber_browser'.\x0a\x09self updateTabsList.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "ul", "updateTabsList"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "renderTopPanelOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $ClassesList(){return $globals.ClassesList||(typeof ClassesList=="undefined"?nil:ClassesList)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$6,$7,$8,$9,$10,$11,$5,$12,$13,$2;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("top");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._ul();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["ul"]=1;
//>>excludeEnd("ctx");
self["@packagesList"]=$recv($3)._class_("amber_column browser packages");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
self["@packagesList"];
$4=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div"]=2;
//>>excludeEnd("ctx");
$recv($4)._class_("amber_packagesButtons");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=3;
//>>excludeEnd("ctx");
$5=$recv($4)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$6=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["button"]=1;
//>>excludeEnd("ctx");
$recv($6)._title_("Commit classes in this package to disk");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["title:"]=1;
//>>excludeEnd("ctx");
$recv($6)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._commitPackage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$7=$recv($6)._with_("Commit");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$7;
$8=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["button"]=2;
//>>excludeEnd("ctx");
$recv($8)._title_("Rename package");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["title:"]=2;
//>>excludeEnd("ctx");
$recv($8)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._renamePackage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["onClick:"]=2;
//>>excludeEnd("ctx");
$9=$recv($8)._with_("Rename");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$9;
$10=$recv(html)._button();
$recv($10)._title_("Remove this package from the system");
$recv($10)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._removePackage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)});
//>>excludeEnd("ctx");
}));
$11=$recv($10)._with_("Remove");
return $11;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$5;
self["@classesList"]=$recv($ClassesList())._on_(self);
self["@classesList"];
$recv(self["@classesList"])._renderOn_(html);
$12=$recv(html)._ul();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["ul"]=2;
//>>excludeEnd("ctx");
self["@protocolsList"]=$recv($12)._class_("amber_column browser protocols");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=4;
//>>excludeEnd("ctx");
self["@protocolsList"];
self["@methodsList"]=$recv($recv(html)._ul())._class_("amber_column browser methods");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=5;
//>>excludeEnd("ctx");
self["@methodsList"];
self._updateCategoriesList();
self._updateClassesList();
self._updateProtocolsList();
$13=self._updateMethodsList();
$13;
return $recv($recv(html)._div())._class_("amber_clear");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderTopPanelOn:",{html:html},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderTopPanelOn: html\x0a\x09html div\x0a\x09\x09class: 'top';\x0a\x09\x09with: [\x0a\x09\x09\x09packagesList := html ul class: 'amber_column browser packages'.\x0a\x09\x09\x09\x09html div class: 'amber_packagesButtons'; with: [\x0a\x09\x09\x09\x09html button\x0a\x09\x09\x09\x09\x09title: 'Commit classes in this package to disk';\x0a\x09\x09\x09\x09\x09onClick: [ self commitPackage ];\x0a\x09\x09\x09\x09\x09with: 'Commit'.\x0a\x09\x09\x09\x09\x09html button\x0a\x09\x09\x09\x09\x09title: 'Rename package';\x0a\x09\x09\x09\x09\x09onClick: [ self renamePackage ];\x0a\x09\x09\x09\x09\x09with: 'Rename'.\x0a\x09\x09\x09\x09\x09html button\x0a\x09\x09\x09\x09\x09title: 'Remove this package from the system';\x0a\x09\x09\x09\x09\x09onClick: [ self removePackage ];\x0a\x09\x09\x09\x09\x09with: 'Remove' ].\x0a\x09\x09\x09classesList := ClassesList on: self.\x0a\x09\x09\x09classesList renderOn: html.\x0a\x09\x09\x09protocolsList := html ul class: 'amber_column browser protocols'.\x0a\x09\x09\x09methodsList := html ul class: 'amber_column browser methods'.\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09updateCategoriesList;\x0a\x09\x09\x09\x09updateClassesList;\x0a\x09\x09\x09\x09updateProtocolsList;\x0a\x09\x09\x09\x09updateMethodsList.\x0a\x09\x09\x09html div class: 'amber_clear' ]",
referencedClasses: ["ClassesList"],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "ul", "title:", "button", "onClick:", "commitPackage", "renamePackage", "removePackage", "on:", "renderOn:", "updateCategoriesList", "updateClassesList", "updateProtocolsList", "updateMethodsList"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "resetClassesList",
protocol: 'updating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@classesList"])._resetNodes();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resetClassesList",{},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resetClassesList\x0a\x09classesList resetNodes",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["resetNodes"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "search:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._cancelChanges();
if($core.assert($1)){
var searchedClass;
searchedClass=$recv($recv($Smalltalk())._globals())._at_(aString);
searchedClass;
$2=$recv(searchedClass)._isClass();
if($core.assert($2)){
$recv(self._class())._openOn_(searchedClass);
} else {
self._searchReferencesOf_(aString);
};
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"search:",{aString:aString},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "search: aString\x0a\x09self cancelChanges ifTrue: [ | searchedClass |\x0a\x09\x09searchedClass := Smalltalk globals at: aString.\x0a\x09\x09searchedClass isClass\x0a\x09\x09\x09ifTrue: [ self class openOn: searchedClass ]\x0a\x09\x09\x09ifFalse: [ self searchReferencesOf: aString ]]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "cancelChanges", "at:", "globals", "ifTrue:ifFalse:", "isClass", "openOn:", "class", "searchReferencesOf:"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "searchClassReferences",
protocol: 'actions',
fn: function (){
var self=this;
function $ReferencesBrowser(){return $globals.ReferencesBrowser||(typeof ReferencesBrowser=="undefined"?nil:ReferencesBrowser)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($ReferencesBrowser())._search_($recv(self["@selectedClass"])._name());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"searchClassReferences",{},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "searchClassReferences\x0a\x09ReferencesBrowser search: selectedClass name",
referencedClasses: ["ReferencesBrowser"],
//>>excludeEnd("ide");
messageSends: ["search:", "name"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "searchReferencesOf:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $ReferencesBrowser(){return $globals.ReferencesBrowser||(typeof ReferencesBrowser=="undefined"?nil:ReferencesBrowser)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($ReferencesBrowser())._search_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"searchReferencesOf:",{aString:aString},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "searchReferencesOf: aString\x0a\x09ReferencesBrowser search: aString",
referencedClasses: ["ReferencesBrowser"],
//>>excludeEnd("ide");
messageSends: ["search:"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "selectCategory:",
protocol: 'actions',
fn: function (aCategory){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._cancelChanges();
if($core.assert($1)){
self["@selectedPackage"]=aCategory;
self["@selectedPackage"];
self["@selectedMethod"]=nil;
self["@selectedProtocol"]=self["@selectedMethod"];
self["@selectedClass"]=self["@selectedProtocol"];
self["@selectedClass"];
self._resetClassesList();
self._updateCategoriesList();
self._updateClassesList();
self._updateProtocolsList();
self._updateMethodsList();
$2=self._updateSourceAndButtons();
$2;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectCategory:",{aCategory:aCategory},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCategory"],
source: "selectCategory: aCategory\x0a\x09self cancelChanges ifTrue: [\x0a\x09selectedPackage := aCategory.\x0a\x09selectedClass := selectedProtocol := selectedMethod := nil.\x0a\x09self resetClassesList.\x0a\x09self\x0a\x09\x09updateCategoriesList;\x0a\x09\x09updateClassesList;\x0a\x09\x09updateProtocolsList;\x0a\x09\x09updateMethodsList;\x0a\x09\x09updateSourceAndButtons ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "cancelChanges", "resetClassesList", "updateCategoriesList", "updateClassesList", "updateProtocolsList", "updateMethodsList", "updateSourceAndButtons"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "selectClass:",
protocol: 'actions',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._cancelChanges();
if($core.assert($1)){
self["@selectedClass"]=aClass;
self["@selectedClass"];
self["@selectedMethod"]=nil;
self["@selectedProtocol"]=self["@selectedMethod"];
self["@selectedProtocol"];
self._updateClassesList();
self._updateProtocolsList();
self._updateMethodsList();
$2=self._updateSourceAndButtons();
$2;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectClass:",{aClass:aClass},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "selectClass: aClass\x0a\x09self cancelChanges ifTrue: [\x0a\x09selectedClass := aClass.\x0a\x09selectedProtocol := selectedMethod := nil.\x0a\x09self\x0a\x09\x09updateClassesList;\x0a\x09\x09updateProtocolsList;\x0a\x09\x09updateMethodsList;\x0a\x09\x09updateSourceAndButtons ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "cancelChanges", "updateClassesList", "updateProtocolsList", "updateMethodsList", "updateSourceAndButtons"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "selectMethod:",
protocol: 'actions',
fn: function (aMethod){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._cancelChanges();
if($core.assert($1)){
self["@selectedMethod"]=aMethod;
self["@selectedMethod"];
self._updateProtocolsList();
self._updateMethodsList();
$2=self._updateSourceAndButtons();
$2;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectMethod:",{aMethod:aMethod},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod"],
source: "selectMethod: aMethod\x0a\x09self cancelChanges ifTrue: [\x0a\x09selectedMethod := aMethod.\x0a\x09self\x0a\x09\x09updateProtocolsList;\x0a\x09\x09updateMethodsList;\x0a\x09\x09updateSourceAndButtons ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "cancelChanges", "updateProtocolsList", "updateMethodsList", "updateSourceAndButtons"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "selectProtocol:",
protocol: 'actions',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._cancelChanges();
if($core.assert($1)){
self["@selectedProtocol"]=aString;
self["@selectedProtocol"];
self["@selectedMethod"]=nil;
self["@selectedMethod"];
self._updateProtocolsList();
self._updateMethodsList();
$2=self._updateSourceAndButtons();
$2;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectProtocol:",{aString:aString},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "selectProtocol: aString\x0a\x09self cancelChanges ifTrue: [\x0a\x09selectedProtocol := aString.\x0a\x09selectedMethod := nil.\x0a\x09self\x0a\x09\x09updateProtocolsList;\x0a\x09\x09updateMethodsList;\x0a\x09\x09updateSourceAndButtons ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "cancelChanges", "updateProtocolsList", "updateMethodsList", "updateSourceAndButtons"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "selectTab:",
protocol: 'actions',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._cancelChanges();
if($core.assert($1)){
self["@selectedTab"]=aString;
self["@selectedTab"];
self._selectProtocol_(nil);
self._updateTabsList();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectTab:",{aString:aString},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "selectTab: aString\x0a\x09self cancelChanges ifTrue: [\x0a\x09selectedTab := aString.\x0a\x09self selectProtocol: nil.\x0a\x09self updateTabsList ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "cancelChanges", "selectProtocol:", "updateTabsList"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "selectedClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selectedClass"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectedClass\x0a\x09^ selectedClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "selectedPackage",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selectedPackage"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectedPackage\x0a\x09^ selectedPackage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "setMethodProtocol:",
protocol: 'actions',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=self._cancelChanges();
if($core.assert($1)){
$2=$recv(self._protocols())._includes_(aString);
if($core.assert($2)){
$recv(self["@selectedMethod"])._protocol_(aString);
self["@selectedProtocol"]=aString;
self["@selectedProtocol"];
self["@selectedMethod"]=self["@selectedMethod"];
self["@selectedMethod"];
self._updateProtocolsList();
self._updateMethodsList();
$3=self._updateSourceAndButtons();
$3;
} else {
self._addNewProtocol();
};
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setMethodProtocol:",{aString:aString},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "setMethodProtocol: aString\x0a\x09self cancelChanges ifTrue: [\x0a\x09(self protocols includes: aString)\x0a\x09\x09ifFalse: [ self addNewProtocol ]\x0a\x09\x09ifTrue: [\x0a\x09\x09selectedMethod protocol: aString.\x0a\x09\x09selectedProtocol := aString.\x0a\x09\x09selectedMethod := selectedMethod.\x0a\x09\x09self\x0a\x09\x09\x09updateProtocolsList;\x0a\x09\x09\x09updateMethodsList;\x0a\x09\x09\x09updateSourceAndButtons ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "cancelChanges", "ifFalse:ifTrue:", "includes:", "protocols", "addNewProtocol", "protocol:", "updateProtocolsList", "updateMethodsList", "updateSourceAndButtons"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "showClassButtons",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self["@classButtons"])._asJQuery())._show();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showClassButtons",{},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showClassButtons\x0a\x09classButtons asJQuery show",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["show", "asJQuery"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "showMethodButtons",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self["@methodButtons"])._asJQuery())._show();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showMethodButtons",{},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showMethodButtons\x0a\x09methodButtons asJQuery show",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["show", "asJQuery"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "source",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$4,$3,$2,$6,$5,$receiver;
$1=$recv(self["@selectedTab"]).__eq("comment");
if(!$core.assert($1)){
$4=$recv(self["@selectedProtocol"])._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["notNil"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@selectedMethod"])._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
if($core.assert($3)){
$2=self._methodSource();
} else {
$2=self._declarationSource();
};
return $2;
};
$6=self["@selectedClass"];
if(($receiver = $6) == null || $receiver.isNil){
$5="";
} else {
$5=self._classCommentSource();
};
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"source",{},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "source\x0a\x09selectedTab = #comment ifFalse: [\x0a\x09^ (selectedProtocol notNil or: [ selectedMethod notNil ])\x0a\x09\x09ifFalse: [ self declarationSource ]\x0a\x09\x09ifTrue: [ self methodSource ]].\x0a\x09^ selectedClass\x0a\x09ifNil: [ '' ]\x0a\x09ifNotNil: [ self classCommentSource ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "=", "ifFalse:ifTrue:", "or:", "notNil", "declarationSource", "methodSource", "ifNil:ifNotNil:", "classCommentSource"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "updateCategoriesList",
protocol: 'updating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$recv(self["@packagesList"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._packages())._do_((function(each){
var li,label;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=$recv(each)._isEmpty();
if($core.assert($1)){
label="Unclassified";
label;
} else {
label=each;
label;
};
li=$recv(html)._li();
li;
$2=$recv(self["@selectedPackage"]).__eq(each);
if($core.assert($2)){
$recv(li)._class_("selected");
};
$3=li;
$recv($3)._with_(label);
$4=$recv($3)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._selectCategory_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,6)});
//>>excludeEnd("ctx");
}));
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each,li:li,label:label},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateCategoriesList",{},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateCategoriesList\x0a\x09packagesList contents: [ :html |\x0a\x09self packages do: [ :each || li label |\x0a\x09\x09each isEmpty\x0a\x09\x09ifTrue: [ label := 'Unclassified' ]\x0a\x09\x09ifFalse: [ label := each ].\x0a\x09\x09li := html li.\x0a\x09\x09selectedPackage = each ifTrue: [\x0a\x09\x09li class: 'selected' ].\x0a\x09\x09li\x0a\x09\x09with: label;\x0a\x09\x09onClick: [ self selectCategory: each ]] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "do:", "packages", "ifTrue:ifFalse:", "isEmpty", "li", "ifTrue:", "=", "class:", "with:", "onClick:", "selectCategory:"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "updateClassesList",
protocol: 'updating',
fn: function (){
var self=this;
function $TabManager(){return $globals.TabManager||(typeof TabManager=="undefined"?nil:TabManager)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv($TabManager())._current())._update();
$recv(self["@classesList"])._updateNodes();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateClassesList",{},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateClassesList\x0a\x09TabManager current update.\x0a\x09classesList updateNodes",
referencedClasses: ["TabManager"],
//>>excludeEnd("ide");
messageSends: ["update", "current", "updateNodes"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "updateMethodsList",
protocol: 'updating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
$recv(self["@methodsList"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._methods())._do_((function(each){
var li;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
li=$recv(html)._li();
li;
$1=$recv(self["@selectedMethod"]).__eq(each);
if($core.assert($1)){
$recv(li)._class_("selected");
};
$2=li;
$recv($2)._with_($recv(each)._selector());
$3=$recv($2)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._selectMethod_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}));
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each,li:li},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateMethodsList",{},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateMethodsList\x0a\x09methodsList contents: [ :html |\x0a\x09self methods do: [ :each || li |\x0a\x09\x09li := html li.\x0a\x09\x09selectedMethod = each ifTrue: [\x0a\x09\x09li class: 'selected' ].\x0a\x09\x09li\x0a\x09\x09with: each selector;\x0a\x09\x09onClick: [ self selectMethod: each ]] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "do:", "methods", "li", "ifTrue:", "=", "class:", "with:", "selector", "onClick:", "selectMethod:"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "updateProtocolsList",
protocol: 'updating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
$recv(self["@protocolsList"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._protocols())._do_((function(each){
var li;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
li=$recv(html)._li();
li;
$1=$recv(self["@selectedProtocol"]).__eq(each);
if($core.assert($1)){
$recv(li)._class_("selected");
};
$2=li;
$recv($2)._with_(each);
$3=$recv($2)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._selectProtocol_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}));
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each,li:li},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateProtocolsList",{},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateProtocolsList\x0a\x09protocolsList contents: [ :html |\x0a\x09self protocols do: [ :each || li |\x0a\x09\x09li := html li.\x0a\x09\x09selectedProtocol = each ifTrue: [\x0a\x09\x09li class: 'selected' ].\x0a\x09\x09li\x0a\x09\x09with: each;\x0a\x09\x09onClick: [ self selectProtocol: each ]] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "do:", "protocols", "li", "ifTrue:", "=", "class:", "with:", "onClick:", "selectProtocol:"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "updateSourceAndButtons",
protocol: 'updating',
fn: function (){
var self=this;
var currentProtocol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$15,$14,$17,$18,$19,$20,$22,$21,$23,$24,$16,$25,$26,$28,$29,$30,$31,$27,$32,$33;
self._disableSaveButton();
$recv(self["@classButtons"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["button"]=1;
//>>excludeEnd("ctx");
$recv($1)._title_("Create a new class");
$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._addNewClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_("New class");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$2;
$3=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["button"]=2;
//>>excludeEnd("ctx");
$recv($3)._with_("Rename class");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$4=$recv($3)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._renameClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=2;
//>>excludeEnd("ctx");
$4;
$5=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["button"]=3;
//>>excludeEnd("ctx");
$recv($5)._with_("Copy class");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$6=$recv($5)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._copyClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=3;
//>>excludeEnd("ctx");
$6;
$7=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["button"]=4;
//>>excludeEnd("ctx");
$recv($7)._with_("Remove class");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$8=$recv($7)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._removeClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=4;
//>>excludeEnd("ctx");
$8;
$9=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["button"]=5;
//>>excludeEnd("ctx");
$recv($9)._with_("References");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
$10=$recv($9)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._searchClassReferences();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=5;
//>>excludeEnd("ctx");
return $10;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["contents:"]=1;
//>>excludeEnd("ctx");
$recv(self["@methodButtons"])._contents_((function(html){
var protocolSelect,referencesSelect;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$11=$recv(html)._button();
$recv($11)._with_("Remove method");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=6;
//>>excludeEnd("ctx");
$12=$recv($11)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._removeMethod();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,8)});
//>>excludeEnd("ctx");
}));
$12;
protocolSelect=$recv(html)._select();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["select"]=1;
//>>excludeEnd("ctx");
protocolSelect;
$13=protocolSelect;
$recv($13)._onChange_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$15=$recv(protocolSelect)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$14=$recv($15)._val();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["val"]=1;
//>>excludeEnd("ctx");
return self._setMethodProtocol_($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,9)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onChange:"]=1;
//>>excludeEnd("ctx");
$16=$recv($13)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$17=$recv(html)._option();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["option"]=1;
//>>excludeEnd("ctx");
$recv($17)._with_("Method protocol");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=8;
//>>excludeEnd("ctx");
$18=$recv($17)._at_put_("disabled","disabled");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$18;
$19=$recv(html)._option();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["option"]=2;
//>>excludeEnd("ctx");
$recv($19)._class_("important");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$20=$recv($19)._with_("New...");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=9;
//>>excludeEnd("ctx");
$20;
currentProtocol=self["@selectedProtocol"];
currentProtocol;
$22=$recv(currentProtocol)._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["isNil"]=1;
//>>excludeEnd("ctx");
$21=$recv($22)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(self["@selectedMethod"])._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["notNil"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,11)});
//>>excludeEnd("ctx");
}));
if($core.assert($21)){
currentProtocol=$recv(self["@selectedMethod"])._category();
currentProtocol;
};
return $recv(self._protocols())._do_((function(each){
var option;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$23=$recv(html)._option();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["option"]=3;
//>>excludeEnd("ctx");
option=$recv($23)._with_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=10;
//>>excludeEnd("ctx");
option;
$24=$recv(currentProtocol).__eq(each);
if($core.assert($24)){
return $recv(option)._at_put_("selected","selected");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({each:each,option:option},$ctx3,13)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,10)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=7;
//>>excludeEnd("ctx");
$16;
$25=$recv(self["@selectedMethod"])._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["isNil"]=2;
//>>excludeEnd("ctx");
if(!$core.assert($25)){
referencesSelect=$recv(html)._select();
referencesSelect;
$26=referencesSelect;
$recv($26)._onChange_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._searchReferencesOf_($recv($recv(referencesSelect)._asJQuery())._val());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,16)});
//>>excludeEnd("ctx");
}));
$27=$recv($26)._with_((function(){
var option;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$28=$recv(html)._option();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["option"]=4;
//>>excludeEnd("ctx");
$recv($28)._with_("References");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=12;
//>>excludeEnd("ctx");
$recv($28)._at_put_("disabled","disabled");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$29=$recv($28)._at_put_("selected","selected");
$29;
$30=$recv(html)._option();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["option"]=5;
//>>excludeEnd("ctx");
$recv($30)._class_("important");
$31=$recv($30)._with_($recv(self["@selectedMethod"])._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=13;
//>>excludeEnd("ctx");
$31;
return $recv($recv($recv(self["@selectedMethod"])._messageSends())._sorted())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv($recv(html)._option())._with_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3,18)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({option:option},$ctx2,17)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=11;
//>>excludeEnd("ctx");
return $27;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html,protocolSelect:protocolSelect,referencesSelect:referencesSelect},$ctx1,7)});
//>>excludeEnd("ctx");
}));
$32=$recv(self["@selectedMethod"])._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isNil"]=3;
//>>excludeEnd("ctx");
if($core.assert($32)){
self._hideMethodButtons();
$33=$recv($recv(self["@selectedClass"])._isNil())._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@selectedProtocol"])._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,20)});
//>>excludeEnd("ctx");
}));
if($core.assert($33)){
self._hideClassButtons();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hideClassButtons"]=1;
//>>excludeEnd("ctx");
} else {
self._showClassButtons();
};
} else {
self._hideClassButtons();
self._showMethodButtons();
};
$recv(self["@sourceArea"])._val_(self._source());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateSourceAndButtons",{currentProtocol:currentProtocol},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateSourceAndButtons\x0a\x09| currentProtocol |\x0a\x0a\x09self disableSaveButton.\x0a\x09classButtons contents: [ :html |\x0a\x09\x09html button\x0a\x09\x09\x09title: 'Create a new class';\x0a\x09\x09\x09onClick: [ self addNewClass ];\x0a\x09\x09\x09with: 'New class'.\x0a\x09\x09html button\x0a\x09\x09\x09with: 'Rename class';\x0a\x09\x09\x09onClick: [ self renameClass ].\x0a\x09\x09html button\x0a\x09\x09\x09with: 'Copy class';\x0a\x09\x09\x09onClick: [ self copyClass ].\x0a\x09\x09html button\x0a\x09\x09\x09with: 'Remove class';\x0a\x09\x09\x09onClick: [ self removeClass ].\x0a\x09\x09html button\x0a\x09\x09\x09with: 'References';\x0a\x09\x09\x09onClick: [ self searchClassReferences ]].\x0a\x09methodButtons contents: [ :html | | protocolSelect referencesSelect |\x0a\x09\x09html button\x0a\x09\x09\x09with: 'Remove method';\x0a\x09\x09\x09onClick: [ self removeMethod ].\x0a\x09\x09protocolSelect := html select.\x0a\x09\x09\x09\x09protocolSelect\x0a\x09\x09\x09onChange: [ self setMethodProtocol: protocolSelect asJQuery val ];\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html option\x0a\x09\x09\x09\x09\x09with: 'Method protocol';\x0a\x09\x09\x09\x09\x09at: 'disabled' put: 'disabled'.\x0a\x09\x09\x09\x09html option\x0a\x09\x09\x09\x09\x09class: 'important';\x0a\x09\x09\x09\x09\x09with: 'New...'.\x0a\x09\x09\x09\x09currentProtocol := selectedProtocol.\x0a\x09\x09\x09\x09(currentProtocol isNil and: [ selectedMethod notNil ])\x0a\x09\x09\x09\x09\x09ifTrue: [ currentProtocol := selectedMethod category ].\x0a\x09\x09\x09\x09self protocols do: [ :each | | option |\x0a\x09\x09\x09\x09\x09option := html option with: each.\x0a\x09\x09\x09\x09\x09currentProtocol = each ifTrue: [ option at: 'selected' put: 'selected' ] ] ].\x0a\x09\x09selectedMethod isNil ifFalse: [\x0a\x09\x09\x09referencesSelect := html select.\x0a\x09\x09\x09\x09\x09\x09referencesSelect\x0a\x09\x09\x09\x09onChange: [ self searchReferencesOf: referencesSelect asJQuery val ];\x0a\x09\x09\x09\x09with: [ |option|\x0a\x09\x09\x09\x09\x09html option\x0a\x09\x09\x09\x09\x09\x09with: 'References';\x0a\x09\x09\x09\x09\x09\x09at: 'disabled' put: 'disabled';\x0a\x09\x09\x09\x09\x09\x09at: 'selected' put: 'selected'.\x0a\x09\x09\x09\x09\x09html option\x0a\x09\x09\x09\x09\x09\x09class: 'important';\x0a\x09\x09\x09\x09\x09\x09with: selectedMethod selector.\x0a\x09\x09\x09\x09\x09selectedMethod messageSends sorted do: [ :each |\x0a\x09\x09\x09\x09\x09\x09html option with: each ]] ]].\x0a\x09selectedMethod isNil\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09self hideMethodButtons.\x0a\x09\x09\x09\x09(selectedClass isNil or: [ selectedProtocol notNil ])\x0a\x09\x09\x09\x09\x09ifTrue: [ self hideClassButtons ]\x0a\x09\x09\x09\x09\x09ifFalse: [ self showClassButtons ]]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09self hideClassButtons.\x0a\x09\x09\x09self showMethodButtons ].\x0a\x09sourceArea val: self source",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["disableSaveButton", "contents:", "title:", "button", "onClick:", "addNewClass", "with:", "renameClass", "copyClass", "removeClass", "searchClassReferences", "removeMethod", "select", "onChange:", "setMethodProtocol:", "val", "asJQuery", "option", "at:put:", "class:", "ifTrue:", "and:", "isNil", "notNil", "category", "do:", "protocols", "=", "ifFalse:", "searchReferencesOf:", "selector", "sorted", "messageSends", "ifTrue:ifFalse:", "hideMethodButtons", "or:", "hideClassButtons", "showClassButtons", "showMethodButtons", "val:", "source"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "updateStatus",
protocol: 'updating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
$1=$recv($recv(self["@sourceArea"])._val()).__eq(self._source());
if($core.assert($1)){
$2=self["@saveButton"];
if(($receiver = $2) == null || $receiver.isNil){
$2;
} else {
$recv(self["@saveButton"])._at_put_("disabled",true);
};
self["@unsavedChanges"]=false;
self["@unsavedChanges"];
} else {
$3=self["@saveButton"];
if(($receiver = $3) == null || $receiver.isNil){
$3;
} else {
$recv(self["@saveButton"])._removeAt_("disabled");
};
self["@unsavedChanges"]=true;
self["@unsavedChanges"];
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateStatus",{},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateStatus\x0a\x09sourceArea val = self source\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09saveButton ifNotNil: [\x0a\x09\x09\x09\x09saveButton at: 'disabled' put: true ].\x0a\x09\x09\x09\x09unsavedChanges := false ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09saveButton ifNotNil: [\x0a\x09\x09\x09\x09saveButton removeAt: 'disabled' ].\x0a\x09\x09\x09unsavedChanges := true ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "=", "val", "source", "ifNotNil:", "at:put:", "removeAt:"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "updateTabsList",
protocol: 'updating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20;
$recv(self["@tabsList"])._contents_((function(html){
var li;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
li=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=1;
//>>excludeEnd("ctx");
li;
$1=$recv(self["@selectedTab"]).__eq("instance");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
$recv(li)._class_("selected");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
};
$2=li;
$recv($2)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$3=$recv(html)._span();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["span"]=1;
//>>excludeEnd("ctx");
$recv($3)._class_("ltab");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$4=$recv(html)._span();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["span"]=2;
//>>excludeEnd("ctx");
$recv($4)._class_("mtab");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class:"]=3;
//>>excludeEnd("ctx");
$5=$recv($4)._with_("Instance");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$5;
$6=$recv(html)._span();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["span"]=3;
//>>excludeEnd("ctx");
return $recv($6)._class_("rtab");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class:"]=4;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$7=$recv($2)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._selectTab_("instance");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["selectTab:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$7;
li=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=2;
//>>excludeEnd("ctx");
li;
$8=$recv(self["@selectedTab"]).__eq("class");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=2;
//>>excludeEnd("ctx");
if($core.assert($8)){
$recv(li)._class_("selected");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=5;
//>>excludeEnd("ctx");
};
$9=li;
$recv($9)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$10=$recv(html)._span();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["span"]=4;
//>>excludeEnd("ctx");
$recv($10)._class_("ltab");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class:"]=6;
//>>excludeEnd("ctx");
$11=$recv(html)._span();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["span"]=5;
//>>excludeEnd("ctx");
$recv($11)._class_("mtab");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class:"]=7;
//>>excludeEnd("ctx");
$12=$recv($11)._with_("Class");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$12;
$13=$recv(html)._span();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["span"]=6;
//>>excludeEnd("ctx");
return $recv($13)._class_("rtab");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class:"]=8;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$14=$recv($9)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._selectTab_("class");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["selectTab:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,7)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=2;
//>>excludeEnd("ctx");
$14;
li=$recv(html)._li();
li;
$15=$recv(self["@selectedTab"]).__eq("comment");
if($core.assert($15)){
$recv(li)._class_("selected");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=9;
//>>excludeEnd("ctx");
};
$16=li;
$recv($16)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$17=$recv(html)._span();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["span"]=7;
//>>excludeEnd("ctx");
$recv($17)._class_("ltab");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class:"]=10;
//>>excludeEnd("ctx");
$18=$recv(html)._span();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["span"]=8;
//>>excludeEnd("ctx");
$recv($18)._class_("mtab");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class:"]=11;
//>>excludeEnd("ctx");
$19=$recv($18)._with_("Comment");
$19;
return $recv($recv(html)._span())._class_("rtab");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,9)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
$20=$recv($16)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._selectTab_("comment");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,10)});
//>>excludeEnd("ctx");
}));
return $20;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html,li:li},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateTabsList",{},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateTabsList\x0a\x09tabsList contents: [ :html || li |\x0a\x09li := html li.\x0a\x09selectedTab = #instance ifTrue: [ li class: 'selected' ].\x0a\x09li\x0a\x09\x09with: [\x0a\x09\x09html span class: 'ltab'.\x0a\x09\x09html span class: 'mtab'; with: 'Instance'.\x0a\x09\x09html span class: 'rtab' ];\x0a\x09\x09onClick: [ self selectTab: #instance ].\x0a\x09li := html li.\x0a\x09selectedTab = #class ifTrue: [ li class: 'selected' ].\x0a\x09li\x0a\x09\x09with: [\x0a\x09\x09html span class: 'ltab'.\x0a\x09\x09html span class: 'mtab'; with: 'Class'.\x0a\x09\x09html span class: 'rtab' ];\x0a\x09\x09onClick: [ self selectTab: #class ].\x0a\x09li := html li.\x0a\x09selectedTab = #comment ifTrue: [ li class: 'selected' ].\x0a\x09li\x0a\x09\x09with: [\x0a\x09\x09html span class: 'ltab'.\x0a\x09\x09html span class: 'mtab'; with: 'Comment'.\x0a\x09\x09html span class: 'rtab' ];\x0a\x09\x09onClick: [ self selectTab: #comment ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "li", "ifTrue:", "=", "class:", "with:", "span", "onClick:", "selectTab:"]
}),
$globals.Browser);


$core.addMethod(
$core.method({
selector: "open",
protocol: 'convenience',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._new())._open();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"open",{},$globals.Browser.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "open\x0a\x09self new open",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["open", "new"]
}),
$globals.Browser.klass);

$core.addMethod(
$core.method({
selector: "openOn:",
protocol: 'convenience',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._open();
$recv($2)._selectCategory_($recv(aClass)._category());
$3=$recv($2)._selectClass_(aClass);
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"openOn:",{aClass:aClass},$globals.Browser.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "openOn: aClass\x0a\x09^ self new\x0a\x09open;\x0a\x09selectCategory: aClass category;\x0a\x09selectClass: aClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["open", "new", "selectCategory:", "category", "selectClass:"]
}),
$globals.Browser.klass);


$core.addClass('Debugger', $globals.TabWidget, ['error', 'selectedContext', 'sourceArea', 'ul', 'ul2', 'inspector', 'saveButton', 'unsavedChanges', 'selectedVariable', 'selectedVariableName', 'inspectButton'], 'IDE');
$core.addMethod(
$core.method({
selector: "allVariables",
protocol: 'accessing',
fn: function (){
var self=this;
var all;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1,$4;
all=$recv($Dictionary())._new();
$3=self._receiver();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["receiver"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._class();
$1=$recv($2)._allInstanceVariableNames();
$recv($1)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(all)._at_put_(each,$recv(self._receiver())._instVarAt_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($recv(self["@selectedContext"])._locals())._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(all)._at_put_(key,value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$4=all;
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allVariables",{all:all},$globals.Debugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allVariables\x0a\x09| all |\x0a\x09all := Dictionary new.\x0a\x0a\x09self receiver class allInstanceVariableNames do: [ :each |\x0a\x09\x09all at: each put: (self receiver instVarAt: each) ].\x0a\x09\x0a\x09selectedContext locals keysAndValuesDo: [ :key :value |\x0a\x09\x09all at: key put: value ].\x0a\x09\x0a\x09^ all",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new", "do:", "allInstanceVariableNames", "class", "receiver", "at:put:", "instVarAt:", "keysAndValuesDo:", "locals"]
}),
$globals.Debugger);

$core.addMethod(
$core.method({
selector: "canBeClosed",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "canBeClosed\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Debugger);

$core.addMethod(
$core.method({
selector: "error",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@error"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "error\x0a\x09^ error",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Debugger);

$core.addMethod(
$core.method({
selector: "error:",
protocol: 'accessing',
fn: function (anError){
var self=this;
self["@error"]=anError;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "error: anError\x0a\x09error := anError",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Debugger);

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
$globals.Debugger.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(self["@unsavedChanges"]).__eq(false);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Debugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09unsavedChanges = false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "="]
}),
$globals.Debugger);

$core.addMethod(
$core.method({
selector: "inspectSelectedVariable",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@selectedVariable"])._inspect();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectSelectedVariable",{},$globals.Debugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inspectSelectedVariable\x0a\x09selectedVariable inspect",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["inspect"]
}),
$globals.Debugger);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "[ Debugger ]";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ '[ Debugger ]'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Debugger);

$core.addMethod(
$core.method({
selector: "method",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@selectedContext"])._method();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"method",{},$globals.Debugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "method\x0a\x09^ selectedContext method",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["method"]
}),
$globals.Debugger);

$core.addMethod(
$core.method({
selector: "proceed",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._close();
$recv($recv(self["@selectedContext"])._receiver())._perform_withArguments_($recv(self["@selectedContext"])._selector(),$recv(self["@selectedContext"])._locals());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"proceed",{},$globals.Debugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "proceed\x0a\x09self close.\x0a\x09selectedContext receiver perform: selectedContext selector withArguments: selectedContext locals",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["close", "perform:withArguments:", "receiver", "selector", "locals"]
}),
$globals.Debugger);

$core.addMethod(
$core.method({
selector: "receiver",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@selectedContext"])._receiver();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"receiver",{},$globals.Debugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "receiver\x0a\x09^ selectedContext receiver",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["receiver"]
}),
$globals.Debugger);

$core.addMethod(
$core.method({
selector: "renderBottomPanelOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $SourceArea(){return $globals.SourceArea||(typeof SourceArea=="undefined"?nil:SourceArea)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("amber_sourceCode debugger");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self["@sourceArea"]=$recv($SourceArea())._new();
self["@sourceArea"];
return $recv(self["@sourceArea"])._renderOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self["@ul2"]=$recv($recv(html)._ul())._class_("amber_column debugger variables");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
self["@inspector"]=$recv($recv(html)._div())._class_("amber_column debugger inspector");
$recv(self["@sourceArea"])._onKeyUp_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._updateStatus();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderBottomPanelOn:",{html:html},$globals.Debugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderBottomPanelOn: html\x0a\x09html div\x0a\x09\x09class: 'amber_sourceCode debugger';\x0a\x09\x09with: [\x0a\x09\x09\x09sourceArea := SourceArea new.\x0a\x09\x09\x09sourceArea renderOn: html ].\x0a\x09ul2 := html ul class: 'amber_column debugger variables'.\x0a\x09inspector := html div class: 'amber_column debugger inspector'.\x0a\x09sourceArea\x0a\x09\x09onKeyUp: [ self updateStatus ]",
referencedClasses: ["SourceArea"],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "new", "renderOn:", "ul", "onKeyUp:", "updateStatus"]
}),
$globals.Debugger);

$core.addMethod(
$core.method({
selector: "renderBoxOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._renderTopPanelOn_(html);
$1=self._renderBottomPanelOn_(html);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderBoxOn:",{html:html},$globals.Debugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderBoxOn: html\x0a\x09self\x0a\x09\x09renderTopPanelOn: html;\x0a\x09\x09renderBottomPanelOn: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderTopPanelOn:", "renderBottomPanelOn:"]
}),
$globals.Debugger);

$core.addMethod(
$core.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15;
$1=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["button"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_("Save");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._save();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
self["@saveButton"]=$2;
$3=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["button"]=2;
//>>excludeEnd("ctx");
$recv($3)._with_("DoIt");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$4=$recv($3)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@sourceArea"])._doIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onClick:"]=2;
//>>excludeEnd("ctx");
$5=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["button"]=3;
//>>excludeEnd("ctx");
$recv($5)._with_("PrintIt");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$6=$recv($5)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@sourceArea"])._printIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onClick:"]=3;
//>>excludeEnd("ctx");
$7=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["button"]=4;
//>>excludeEnd("ctx");
$recv($7)._with_("InspectIt");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$8=$recv($7)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@sourceArea"])._inspectIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onClick:"]=4;
//>>excludeEnd("ctx");
$9=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["button"]=5;
//>>excludeEnd("ctx");
$recv($9)._with_("Proceed");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
$10=$recv($9)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._proceed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onClick:"]=5;
//>>excludeEnd("ctx");
$11=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["button"]=6;
//>>excludeEnd("ctx");
$recv($11)._with_("Abandon");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=6;
//>>excludeEnd("ctx");
$12=$recv($11)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._close();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onClick:"]=6;
//>>excludeEnd("ctx");
$13=$recv(html)._button();
$recv($13)._class_("amber_button debugger inspect");
$recv($13)._with_("Inspect");
$14=$recv($13)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._inspectSelectedVariable();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,7)});
//>>excludeEnd("ctx");
}));
self["@inspectButton"]=$14;
self._updateSourceArea();
self._updateStatus();
self._updateVariablesList();
$15=self._updateInspector();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},$globals.Debugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderButtonsOn: html\x0a\x09saveButton := html button\x0a\x09\x09with: 'Save';\x0a\x09\x09onClick: [ self save ].\x0a\x09html button\x0a\x09\x09with: 'DoIt';\x0a\x09\x09onClick: [ sourceArea doIt ].\x0a\x09html button\x0a\x09\x09with: 'PrintIt';\x0a\x09\x09onClick: [ sourceArea printIt ].\x0a\x09html button\x0a\x09\x09with: 'InspectIt';\x0a\x09\x09onClick: [ sourceArea inspectIt ].\x0a\x09html button\x0a\x09\x09with: 'Proceed';\x0a\x09\x09onClick: [ self proceed ].\x0a\x09html button\x0a\x09\x09with: 'Abandon';\x0a\x09\x09onClick: [ self close ].\x0a\x09inspectButton := html button\x0a\x09\x09class: 'amber_button debugger inspect';\x0a\x09\x09with: 'Inspect';\x0a\x09\x09onClick: [ self inspectSelectedVariable ].\x0a\x09self\x0a\x09\x09updateSourceArea;\x0a\x09\x09updateStatus;\x0a\x09\x09updateVariablesList;\x0a\x09\x09updateInspector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "button", "onClick:", "save", "doIt", "printIt", "inspectIt", "proceed", "close", "class:", "inspectSelectedVariable", "updateSourceArea", "updateStatus", "updateVariablesList", "updateInspector"]
}),
$globals.Debugger);

$core.addMethod(
$core.method({
selector: "renderContext:on:",
protocol: 'rendering',
fn: function (aContext,html){
var self=this;
var li;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$receiver;
li=$recv(html)._li();
$1=$recv(self["@selectedContext"]).__eq(aContext);
if($core.assert($1)){
$recv(li)._class_("selected");
};
$2=li;
$recv($2)._with_($recv(aContext)._asString());
$3=$recv($2)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._selectContext_(aContext);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$4=$recv(aContext)._outerContext();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["outerContext"]=1;
//>>excludeEnd("ctx");
if(($receiver = $4) == null || $receiver.isNil){
$4;
} else {
self._renderContext_on_($recv(aContext)._outerContext(),html);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContext:on:",{aContext:aContext,html:html,li:li},$globals.Debugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext", "html"],
source: "renderContext: aContext on: html\x0a\x09| li |\x0a\x09li := html li.\x0a\x09selectedContext = aContext ifTrue: [\x0a\x09\x09li class: 'selected' ].\x0a\x09li\x0a\x09\x09with: aContext asString;\x0a\x09\x09onClick: [ self selectContext: aContext ].\x0a\x09aContext outerContext ifNotNil: [ self renderContext: aContext outerContext on: html ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["li", "ifTrue:", "=", "class:", "with:", "asString", "onClick:", "selectContext:", "ifNotNil:", "outerContext", "renderContext:on:"]
}),
$globals.Debugger);

$core.addMethod(
$core.method({
selector: "renderTopPanelOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$6,$8,$7,$5,$9,$10,$3;
$1=self._error();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["error"]=1;
//>>excludeEnd("ctx");
self["@selectedContext"]=$recv($1)._context();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["context"]=1;
//>>excludeEnd("ctx");
$2=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($2)._class_("top");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$3=$recv($2)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(html)._div();
$recv($4)._class_("label");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$6=$4;
$8=self._error();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["error"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._messageText();
$5=$recv($6)._with_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$5;
$9=$recv(html)._ul();
$recv($9)._class_("amber_column debugger contexts");
$10=$recv($9)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._renderContext_on_($recv(self._error())._context(),html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
self["@ul"]=$10;
return self["@ul"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderTopPanelOn:",{html:html},$globals.Debugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderTopPanelOn: html\x0a\x09selectedContext := self error context.\x0a\x09html div\x0a\x09\x09class: 'top';\x0a\x09\x09with: [\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'label';\x0a\x09\x09\x09\x09with: self error messageText.\x0a\x09\x09\x09ul := html ul\x0a\x09\x09\x09\x09class: 'amber_column debugger contexts';\x0a\x09\x09\x09\x09with: [ self renderContext: self error context on: html ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["context", "error", "class:", "div", "with:", "messageText", "ul", "renderContext:on:"]
}),
$globals.Debugger);

$core.addMethod(
$core.method({
selector: "save",
protocol: 'actions',
fn: function (){
var self=this;
var protocol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $4,$3,$2,$1;
$4=$recv(self["@selectedContext"])._receiver();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["receiver"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._methodDictionary();
$1=$recv($2)._at_($recv(self["@selectedContext"])._selector());
protocol=$recv($1)._category();
$recv($recv($recv(self["@selectedContext"])._receiver())._class())._compile_protocol_($recv(self["@sourceArea"])._val(),protocol);
self._updateStatus();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"save",{protocol:protocol},$globals.Debugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "save\x0a\x09| protocol |\x0a\x09protocol := (selectedContext receiver class methodDictionary at: selectedContext selector) category.\x0a\x09selectedContext receiver class compile: sourceArea val protocol: protocol.\x0a\x09self updateStatus",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["category", "at:", "methodDictionary", "class", "receiver", "selector", "compile:protocol:", "val", "updateStatus"]
}),
$globals.Debugger);

$core.addMethod(
$core.method({
selector: "selectContext:",
protocol: 'actions',
fn: function (aContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self["@selectedContext"]=aContext;
self["@selectedVariable"]=nil;
self["@selectedVariableName"]=nil;
self._updateContextsList();
self._updateSourceArea();
self._updateInspector();
self._updateVariablesList();
$1=self._updateStatus();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectContext:",{aContext:aContext},$globals.Debugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "selectContext: aContext\x0a\x09selectedContext := aContext.\x0a\x09selectedVariable := nil.\x0a\x09selectedVariableName := nil.\x0a\x09self\x0a\x09\x09updateContextsList;\x0a\x09\x09updateSourceArea;\x0a\x09\x09updateInspector;\x0a\x09\x09updateVariablesList;\x0a\x09\x09updateStatus",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["updateContextsList", "updateSourceArea", "updateInspector", "updateVariablesList", "updateStatus"]
}),
$globals.Debugger);

$core.addMethod(
$core.method({
selector: "selectVariable:named:",
protocol: 'actions',
fn: function (anObject,aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@selectedVariable"]=anObject;
self["@selectedVariableName"]=aString;
$recv(self["@inspector"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(html)._with_($recv(anObject)._printString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._updateVariablesList();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectVariable:named:",{anObject:anObject,aString:aString},$globals.Debugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aString"],
source: "selectVariable: anObject named: aString\x0a\x09\x0a\x09selectedVariable := anObject.\x0a\x09selectedVariableName := aString.\x0a\x09inspector contents: [ :html | html with: anObject printString ].\x0a\x09self updateVariablesList",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "with:", "printString", "updateVariablesList"]
}),
$globals.Debugger);

$core.addMethod(
$core.method({
selector: "source",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self._method();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["method"]=1;
//>>excludeEnd("ctx");
if(($receiver = $2) == null || $receiver.isNil){
$1="Method doesn't exist!";
} else {
$1=$recv(self._method())._source();
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"source",{},$globals.Debugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "source\x0a\x09^ self method\x0a\x09\x09ifNil: [ 'Method doesn''t exist!' ]\x0a\x09\x09ifNotNil: [ self method source ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "method", "source"]
}),
$globals.Debugger);

$core.addMethod(
$core.method({
selector: "updateContextsList",
protocol: 'updating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@ul"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderContext_on_($recv(self._error())._context(),html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateContextsList",{},$globals.Debugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateContextsList\x0a\x09ul contents: [ :html |\x0a\x09\x09self renderContext: self error context on: html ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "renderContext:on:", "context", "error"]
}),
$globals.Debugger);

$core.addMethod(
$core.method({
selector: "updateInspector",
protocol: 'updating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@inspector"])._contents_((function(html){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateInspector",{},$globals.Debugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateInspector\x0a\x09inspector contents: [ :html | ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:"]
}),
$globals.Debugger);

$core.addMethod(
$core.method({
selector: "updateSourceArea",
protocol: 'updating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@sourceArea"])._val_(self._source());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateSourceArea",{},$globals.Debugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateSourceArea\x0a\x09sourceArea val: self source",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["val:", "source"]
}),
$globals.Debugger);

$core.addMethod(
$core.method({
selector: "updateStatus",
protocol: 'updating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
$1=$recv($recv(self["@sourceArea"])._val()).__eq(self._source());
if($core.assert($1)){
$2=self["@saveButton"];
if(($receiver = $2) == null || $receiver.isNil){
$2;
} else {
$recv(self["@saveButton"])._at_put_("disabled",true);
};
self["@unsavedChanges"]=false;
self["@unsavedChanges"];
} else {
$3=self["@saveButton"];
if(($receiver = $3) == null || $receiver.isNil){
$3;
} else {
$recv(self["@saveButton"])._removeAt_("disabled");
};
self["@unsavedChanges"]=true;
self["@unsavedChanges"];
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateStatus",{},$globals.Debugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateStatus\x0a\x09sourceArea val = self source\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09saveButton ifNotNil: [\x0a\x09\x09\x09\x09saveButton at: 'disabled' put: true ].\x0a\x09\x09\x09unsavedChanges := false ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09saveButton ifNotNil: [\x0a\x09\x09\x09\x09saveButton removeAt: 'disabled' ].\x0a\x09\x09\x09unsavedChanges := true ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "=", "val", "source", "ifNotNil:", "at:put:", "removeAt:"]
}),
$globals.Debugger);

$core.addMethod(
$core.method({
selector: "updateVariablesList",
protocol: 'updating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$receiver;
$recv(self["@ul2"])._contents_((function(html){
var li;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_("self");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._selectVariable_named_(self._receiver(),"self");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["selectVariable:named:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
li=$2;
li;
$3=$recv(self["@selectedVariableName"]).__eq("self");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
if($core.assert($3)){
$recv(li)._class_("selected");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
};
return $recv(self._allVariables())._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$4=$recv(html)._li();
$recv($4)._with_(key);
$5=$recv($4)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._selectVariable_named_(value,key);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)});
//>>excludeEnd("ctx");
}));
li=$5;
li;
$6=$recv(self["@selectedVariableName"]).__eq(key);
if($core.assert($6)){
return $recv(li)._class_("selected");
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({key:key,value:value},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html,li:li},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$7=self["@selectedVariable"];
if(($receiver = $7) == null || $receiver.isNil){
$recv(self["@inspectButton"])._at_put_("disabled",true);
} else {
$recv(self["@inspectButton"])._removeAt_("disabled");
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateVariablesList",{},$globals.Debugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateVariablesList\x0a\x09ul2 contents: [ :html | | li |\x0a\x09\x09li := html li\x0a\x09\x09\x09with: 'self';\x0a\x09\x09\x09onClick: [ self selectVariable: self receiver named: 'self' ].\x0a\x09\x09\x09\x09selectedVariableName = 'self' ifTrue: [ li class: 'selected' ].\x0a\x09\x09\x0a\x09\x09self allVariables keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09\x09\x09\x09li := html li\x0a\x09\x09\x09\x09\x09\x09\x09with: key;\x0a\x09\x09\x09\x09\x09\x09\x09onClick: [ self selectVariable: value named: key ].\x0a\x09\x09\x09\x09\x09\x09selectedVariableName = key ifTrue: [\x0a\x09\x09\x09\x09\x09\x09\x09li class: 'selected' ] ] ].\x0a\x09\x09\x09\x09\x09\x09\x09\x0a\x09selectedVariable\x0a\x09\x09ifNil: [ inspectButton at: 'disabled' put: true ]\x0a\x09\x09ifNotNil: [ inspectButton removeAt: 'disabled' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "with:", "li", "onClick:", "selectVariable:named:", "receiver", "ifTrue:", "=", "class:", "keysAndValuesDo:", "allVariables", "ifNil:ifNotNil:", "at:put:", "removeAt:"]
}),
$globals.Debugger);



$core.addClass('IDEInspector', $globals.TabWidget, ['label', 'variables', 'object', 'selectedVariable', 'variablesList', 'valueTextarea', 'diveButton', 'sourceArea'], 'IDE');
$core.addMethod(
$core.method({
selector: "canBeClosed",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "canBeClosed\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IDEInspector);

$core.addMethod(
$core.method({
selector: "dive",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self._variables())._at_(self._selectedVariable()))._inspect();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dive",{},$globals.IDEInspector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dive\x0a\x09(self variables at: self selectedVariable) inspect",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["inspect", "at:", "variables", "selectedVariable"]
}),
$globals.IDEInspector);

$core.addMethod(
$core.method({
selector: "inspect:",
protocol: 'actions',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@object"]=anObject;
self["@variables"]=[];
$recv(self["@object"])._inspectOn_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},$globals.IDEInspector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "inspect: anObject\x0a\x09object := anObject.\x0a\x09variables := #().\x0a\x09object inspectOn: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["inspectOn:"]
}),
$globals.IDEInspector);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@label"];
if(($receiver = $2) == null || $receiver.isNil){
$1="Inspector (nil)";
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"label",{},$globals.IDEInspector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ label ifNil: [ 'Inspector (nil)' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.IDEInspector);

$core.addMethod(
$core.method({
selector: "refresh",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._inspect_(self["@object"]);
self._updateVariablesList();
$1=self._updateValueTextarea();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"refresh",{},$globals.IDEInspector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "refresh\x0a\x09self\x0a\x09\x09inspect: object;\x0a\x09\x09updateVariablesList;\x0a\x09\x09updateValueTextarea",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["inspect:", "updateVariablesList", "updateValueTextarea"]
}),
$globals.IDEInspector);

$core.addMethod(
$core.method({
selector: "renderBottomPanelOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $SourceArea(){return $globals.SourceArea||(typeof SourceArea=="undefined"?nil:SourceArea)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$2;
$1=$recv(html)._div();
$recv($1)._class_("amber_sourceCode");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv($SourceArea())._new();
$recv($3)._receiver_(self["@object"]);
$recv($3)._onDoIt_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._refresh();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
$4=$recv($3)._yourself();
self["@sourceArea"]=$4;
self["@sourceArea"];
return $recv(self["@sourceArea"])._renderOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderBottomPanelOn:",{html:html},$globals.IDEInspector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderBottomPanelOn: html\x0a\x09html div\x0a\x09class: 'amber_sourceCode';\x0a\x09with: [\x0a\x09\x09sourceArea := SourceArea new\x0a\x09\x09receiver: object;\x0a\x09\x09onDoIt: [ self refresh ];\x0a\x09\x09yourself.\x0a\x09\x09\x09sourceArea renderOn: html ]",
referencedClasses: ["SourceArea"],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "receiver:", "new", "onDoIt:", "refresh", "yourself", "renderOn:"]
}),
$globals.IDEInspector);

$core.addMethod(
$core.method({
selector: "renderBoxOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._renderTopPanelOn_(html);
$1=self._renderBottomPanelOn_(html);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderBoxOn:",{html:html},$globals.IDEInspector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderBoxOn: html\x0a\x09self\x0a\x09\x09renderTopPanelOn: html;\x0a\x09\x09renderBottomPanelOn: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderTopPanelOn:", "renderBottomPanelOn:"]
}),
$globals.IDEInspector);

$core.addMethod(
$core.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$6,$5,$7,$8;
$1=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["button"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_("DoIt");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=self._sourceArea();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["sourceArea"]=1;
//>>excludeEnd("ctx");
return $recv($3)._doIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$4=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["button"]=2;
//>>excludeEnd("ctx");
$recv($4)._with_("PrintIt");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$5=$recv($4)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=self._sourceArea();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["sourceArea"]=2;
//>>excludeEnd("ctx");
return $recv($6)._printIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onClick:"]=2;
//>>excludeEnd("ctx");
$7=$recv(html)._button();
$recv($7)._with_("InspectIt");
$8=$recv($7)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._sourceArea())._inspectIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
self._updateButtons();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},$globals.IDEInspector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderButtonsOn: html\x0a\x09html button\x0a\x09\x09with: 'DoIt';\x0a\x09\x09onClick: [ self sourceArea doIt ].\x0a\x09html button\x0a\x09\x09with: 'PrintIt';\x0a\x09\x09onClick: [ self sourceArea printIt ].\x0a\x09html button\x0a\x09\x09with: 'InspectIt';\x0a\x09\x09onClick: [ self sourceArea inspectIt ].\x0a\x09self updateButtons",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "button", "onClick:", "doIt", "sourceArea", "printIt", "inspectIt", "updateButtons"]
}),
$globals.IDEInspector);

$core.addMethod(
$core.method({
selector: "renderTopPanelOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$7,$8,$9,$10,$6,$2,$11;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("top");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self["@variablesList"]=$recv($recv(html)._ul())._class_("amber_column variables");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
self["@variablesList"];
$3=$recv(html)._textarea();
$recv($3)._class_("amber_column value");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=3;
//>>excludeEnd("ctx");
$recv($3)._at_put_("readonly","readonly");
$4=$recv($3)._yourself();
self["@valueTextarea"]=$4;
self["@valueTextarea"];
$5=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div"]=2;
//>>excludeEnd("ctx");
$recv($5)._class_("amber_tabs inspector");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=4;
//>>excludeEnd("ctx");
$6=$recv($5)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$7=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["button"]=1;
//>>excludeEnd("ctx");
$recv($7)._class_("amber_button inspector refresh");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class:"]=5;
//>>excludeEnd("ctx");
$recv($7)._with_("Refresh");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$8=$recv($7)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._refresh();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$8;
$9=$recv(html)._button();
$recv($9)._class_("amber_button inspector dive");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class:"]=6;
//>>excludeEnd("ctx");
$recv($9)._with_("Dive");
$10=$recv($9)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._dive();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}));
self["@diveButton"]=$10;
return self["@diveButton"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$6;
return $recv($recv(html)._div())._class_("amber_clear");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
self._updateVariablesList();
$11=self._updateValueTextarea();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderTopPanelOn:",{html:html},$globals.IDEInspector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderTopPanelOn: html\x0a\x09html div\x0a\x09\x09class: 'top';\x0a\x09\x09with: [\x0a\x09\x09\x09variablesList := html ul class: 'amber_column variables'.\x0a\x09\x09\x09valueTextarea := html textarea class: 'amber_column value'; at: 'readonly' put: 'readonly'; yourself.\x0a\x09\x09\x09html div class: 'amber_tabs inspector'; with: [\x0a\x09\x09\x09\x09html button\x0a\x09\x09\x09\x09\x09class: 'amber_button inspector refresh';\x0a\x09\x09\x09\x09\x09with: 'Refresh';\x0a\x09\x09\x09\x09\x09onClick: [ self refresh ].\x0a\x09\x09\x09\x09diveButton := html button\x0a\x09\x09\x09\x09\x09class: 'amber_button inspector dive';\x0a\x09\x09\x09\x09\x09with: 'Dive';\x0a\x09\x09\x09\x09\x09onClick: [ self dive ]].\x0a\x09\x09\x09html div class: 'amber_clear' ].\x0a\x09self\x0a\x09\x09updateVariablesList;\x0a\x09\x09updateValueTextarea.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "ul", "textarea", "at:put:", "yourself", "button", "onClick:", "refresh", "dive", "updateVariablesList", "updateValueTextarea"]
}),
$globals.IDEInspector);

$core.addMethod(
$core.method({
selector: "selectVariable:",
protocol: 'updating',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._selectedVariable_(aString);
self._updateVariablesList();
self._updateValueTextarea();
$1=self._updateButtons();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectVariable:",{aString:aString},$globals.IDEInspector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "selectVariable: aString\x0a\x09self selectedVariable: aString.\x0a\x09self\x0a\x09\x09updateVariablesList;\x0a\x09\x09updateValueTextarea;\x0a\x09\x09updateButtons",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectedVariable:", "updateVariablesList", "updateValueTextarea", "updateButtons"]
}),
$globals.IDEInspector);

$core.addMethod(
$core.method({
selector: "selectedVariable",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selectedVariable"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectedVariable\x0a\x09^ selectedVariable",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IDEInspector);

$core.addMethod(
$core.method({
selector: "selectedVariable:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@selectedVariable"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "selectedVariable: aString\x0a\x09selectedVariable := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IDEInspector);

$core.addMethod(
$core.method({
selector: "setLabel:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@label"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "setLabel: aString\x0a\x09label := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IDEInspector);

$core.addMethod(
$core.method({
selector: "setVariables:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@variables"]=aCollection;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "setVariables: aCollection\x0a\x09variables := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IDEInspector);

$core.addMethod(
$core.method({
selector: "sourceArea",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@sourceArea"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sourceArea\x0a\x09^ sourceArea",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IDEInspector);

$core.addMethod(
$core.method({
selector: "updateButtons",
protocol: 'updating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=self._selectedVariable();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectedVariable"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["notNil"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(self._variables())._at_(self._selectedVariable()))._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
$recv(self["@diveButton"])._removeAt_("disabled");
} else {
$recv(self["@diveButton"])._at_put_("disabled",true);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateButtons",{},$globals.IDEInspector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateButtons\x0a\x09(self selectedVariable notNil and: [ (self variables at: self selectedVariable) notNil ])\x0a\x09\x09ifFalse: [ diveButton at: 'disabled' put: true ]\x0a\x09\x09ifTrue: [ diveButton removeAt: 'disabled' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:ifTrue:", "and:", "notNil", "selectedVariable", "at:", "variables", "at:put:", "removeAt:"]
}),
$globals.IDEInspector);

$core.addMethod(
$core.method({
selector: "updateValueTextarea",
protocol: 'updating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$4,$3,$2;
$1=$recv(self["@valueTextarea"])._asJQuery();
$4=self._selectedVariable();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectedVariable"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._isNil();
if($core.assert($3)){
$2="";
} else {
$2=$recv($recv(self._variables())._at_(self._selectedVariable()))._printString();
};
$recv($1)._val_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateValueTextarea",{},$globals.IDEInspector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateValueTextarea\x0a\x09valueTextarea asJQuery val: (self selectedVariable isNil\x0a\x09\x09ifTrue: [ '' ]\x0a\x09\x09ifFalse: [ (self variables at: self selectedVariable) printString ])",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["val:", "asJQuery", "ifTrue:ifFalse:", "isNil", "selectedVariable", "printString", "at:", "variables"]
}),
$globals.IDEInspector);

$core.addMethod(
$core.method({
selector: "updateVariablesList",
protocol: 'updating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
$recv(self["@variablesList"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._variables())._keysDo_((function(each){
var li;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
li=$recv(html)._li();
li;
$1=li;
$recv($1)._with_(each);
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._selectVariable_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
$2;
$3=$recv(self._selectedVariable()).__eq(each);
if($core.assert($3)){
return $recv(li)._class_("selected");
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each,li:li},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateVariablesList",{},$globals.IDEInspector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateVariablesList\x0a\x09variablesList contents: [ :html |\x0a\x09\x09self variables keysDo: [ :each || li |\x0a\x09\x09\x09li := html li.\x0a\x09\x09\x09li\x0a\x09\x09\x09\x09with: each;\x0a\x09\x09\x09\x09onClick: [ self selectVariable: each ].\x0a\x09\x09\x09self selectedVariable = each ifTrue: [\x0a\x09\x09\x09\x09li class: 'selected' ]] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "keysDo:", "variables", "li", "with:", "onClick:", "selectVariable:", "ifTrue:", "=", "selectedVariable", "class:"]
}),
$globals.IDEInspector);

$core.addMethod(
$core.method({
selector: "variables",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@variables"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "variables\x0a\x09^ variables",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IDEInspector);


$core.addMethod(
$core.method({
selector: "inspect:",
protocol: 'instance creation',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._inspect_(anObject);
$recv($2)._open();
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},$globals.IDEInspector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "inspect: anObject\x0a\x09^ self new\x0a\x09\x09inspect: anObject;\x0a\x09\x09open;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["inspect:", "new", "open", "yourself"]
}),
$globals.IDEInspector.klass);

$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._inspect_(anObject);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{anObject:anObject},$globals.IDEInspector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "on: anObject\x0a\x09^ self new\x0a\x09\x09inspect: anObject;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["inspect:", "new", "yourself"]
}),
$globals.IDEInspector.klass);


$core.addClass('IDETranscript', $globals.TabWidget, ['textarea'], 'IDE');
$core.addMethod(
$core.method({
selector: "clear",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self["@textarea"])._asJQuery())._val_("");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clear",{},$globals.IDETranscript)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clear\x0a\x09textarea asJQuery val: ''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["val:", "asJQuery"]
}),
$globals.IDETranscript);

$core.addMethod(
$core.method({
selector: "cr",
protocol: 'actions',
fn: function (){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@textarea"])._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._val_($recv($recv($recv(self["@textarea"])._asJQuery())._val()).__comma($recv($String())._cr()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cr",{},$globals.IDETranscript)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cr\x0a\x09textarea asJQuery val: textarea asJQuery val, String cr.",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["val:", "asJQuery", ",", "val", "cr"]
}),
$globals.IDETranscript);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Transcript";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Transcript'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IDETranscript);

$core.addMethod(
$core.method({
selector: "open",
protocol: 'actions',
fn: function (){
var self=this;
function $TabManager(){return $globals.TabManager||(typeof TabManager=="undefined"?nil:TabManager)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($TabManager())._current();
$recv($1)._open();
$2=$recv($1)._selectTab_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"open",{},$globals.IDETranscript)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "open\x0a\x09TabManager current\x0a\x09open;\x0a\x09selectTab: self",
referencedClasses: ["TabManager"],
//>>excludeEnd("ide");
messageSends: ["open", "current", "selectTab:"]
}),
$globals.IDETranscript);

$core.addMethod(
$core.method({
selector: "renderBoxOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
self["@textarea"]=$recv(html)._textarea();
$1=self["@textarea"];
$recv($1)._class_("amber_transcript");
$2=$recv($1)._at_put_("spellcheck","false");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderBoxOn:",{html:html},$globals.IDETranscript)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderBoxOn: html\x0a\x09textarea := html textarea.\x0a\x09textarea\x0a\x09class: 'amber_transcript';\x0a\x09at: 'spellcheck' put: 'false'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["textarea", "class:", "at:put:"]
}),
$globals.IDETranscript);

$core.addMethod(
$core.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._button();
$recv($1)._with_("Clear transcript");
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._clear();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},$globals.IDETranscript)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderButtonsOn: html\x0a\x09html button\x0a\x09with: 'Clear transcript';\x0a\x09onClick: [ self clear ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "button", "onClick:", "clear"]
}),
$globals.IDETranscript);

$core.addMethod(
$core.method({
selector: "show:",
protocol: 'actions',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self["@textarea"];
if(($receiver = $1) == null || $receiver.isNil){
self._open();
} else {
$1;
};
$2=$recv(self["@textarea"])._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($2)._val_($recv($recv($recv(self["@textarea"])._asJQuery())._val()).__comma($recv(anObject)._asString()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show:",{anObject:anObject},$globals.IDETranscript)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "show: anObject\x0a\x09textarea ifNil: [ self open ].\x0a\x09textarea asJQuery val: textarea asJQuery val, anObject asString.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "open", "val:", "asJQuery", ",", "val", "asString"]
}),
$globals.IDETranscript);


$globals.IDETranscript.klass.iVarNames = ['current'];
$core.addMethod(
$core.method({
selector: "current",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@current"];
if(($receiver = $2) == null || $receiver.isNil){
self["@current"]=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.IDETranscript.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=self["@current"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"current",{},$globals.IDETranscript.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x09^ current ifNil: [ current := super new ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.IDETranscript.klass);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($Transcript())._register_(self._current());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.IDETranscript.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09Transcript register: self current",
referencedClasses: ["Transcript"],
//>>excludeEnd("ide");
messageSends: ["register:", "current"]
}),
$globals.IDETranscript.klass);

$core.addMethod(
$core.method({
selector: "new",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._shouldNotImplement();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.IDETranscript.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09self shouldNotImplement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldNotImplement"]
}),
$globals.IDETranscript.klass);

$core.addMethod(
$core.method({
selector: "open",
protocol: 'instance creation',
fn: function (){
var self=this;
function $TabManager(){return $globals.TabManager||(typeof TabManager=="undefined"?nil:TabManager)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($TabManager())._current();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["current"]=1;
//>>excludeEnd("ctx");
$recv($1)._open();
$2=$recv($1)._selectTab_(self._current());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"open",{},$globals.IDETranscript.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "open\x0a\x09TabManager current\x0a\x09\x09open;\x0a\x09\x09selectTab: self current",
referencedClasses: ["TabManager"],
//>>excludeEnd("ide");
messageSends: ["open", "current", "selectTab:"]
}),
$globals.IDETranscript.klass);


$core.addClass('ProgressBar', $globals.TabWidget, ['percent', 'progressDiv', 'div'], 'IDE');
$core.addMethod(
$core.method({
selector: "percent",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@percent"];
if(($receiver = $2) == null || $receiver.isNil){
$1=(0);
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"percent",{},$globals.ProgressBar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "percent\x0a\x09^ percent ifNil: [ 0 ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.ProgressBar);

$core.addMethod(
$core.method({
selector: "percent:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
self["@percent"]=aNumber;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "percent: aNumber\x0a\x09percent := aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProgressBar);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
$recv($1)._class_("progress_bar");
$2=$recv($1)._yourself();
self["@div"]=$2;
self._renderProgressBar();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.ProgressBar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09div := html div\x0a\x09\x09class: 'progress_bar';\x0a\x09\x09yourself.\x0a\x09self renderProgressBar",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "yourself", "renderProgressBar"]
}),
$globals.ProgressBar);

$core.addMethod(
$core.method({
selector: "renderProgressBar",
protocol: 'rendering',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$2;
$recv(self["@div"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._div();
$recv($1)._class_("progress");
$3=$1;
$4=$recv("width:".__comma($recv(self._percent())._asString())).__comma("%");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._style_($4);
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderProgressBar",{},$globals.ProgressBar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "renderProgressBar\x0a\x09div contents: [ :html |\x0a\x09\x09html div\x0a\x09\x09\x09class: 'progress';\x0a\x09\x09\x09style: 'width:', self percent asString, '%' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "class:", "div", "style:", ",", "asString", "percent"]
}),
$globals.ProgressBar);

$core.addMethod(
$core.method({
selector: "updatePercent:",
protocol: 'updating',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._percent_(aNumber);
self._renderProgressBar();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updatePercent:",{aNumber:aNumber},$globals.ProgressBar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "updatePercent: aNumber\x0a\x09self percent: aNumber.\x0a\x09self renderProgressBar",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["percent:", "renderProgressBar"]
}),
$globals.ProgressBar);



$core.addClass('ReferencesBrowser', $globals.TabWidget, ['implementors', 'senders', 'implementorsList', 'input', 'timer', 'selector', 'sendersList', 'referencedClasses', 'referencedClassesList', 'matches', 'matchesList'], 'IDE');
$core.addMethod(
$core.method({
selector: "canBeClosed",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "canBeClosed\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ReferencesBrowser);

$core.addMethod(
$core.method({
selector: "classesAndMetaclasses",
protocol: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv($Smalltalk())._classes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["classes"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($recv($recv($Smalltalk())._classes())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classesAndMetaclasses",{},$globals.ReferencesBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classesAndMetaclasses\x0a\x09^ Smalltalk classes, (Smalltalk classes collect: [ :each | each class ])",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: [",", "classes", "collect:", "class"]
}),
$globals.ReferencesBrowser);

$core.addMethod(
$core.method({
selector: "implementors",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@implementors"];
if(($receiver = $2) == null || $receiver.isNil){
self["@implementors"]=$recv($Array())._new();
$1=self["@implementors"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"implementors",{},$globals.ReferencesBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "implementors\x0a\x09^ implementors ifNil: [ implementors := Array new ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.ReferencesBrowser);

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
$globals.ReferencesBrowser.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@selector"]="";
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ReferencesBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09selector := ''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.ReferencesBrowser);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "[ References ]";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ '[ References ]'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ReferencesBrowser);

$core.addMethod(
$core.method({
selector: "matches",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@matches"];
if(($receiver = $2) == null || $receiver.isNil){
self["@matches"]=$recv($Array())._new();
$1=self["@matches"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"matches",{},$globals.ReferencesBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "matches\x0a\x09^ matches ifNil: [ matches := Array new ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.ReferencesBrowser);

$core.addMethod(
$core.method({
selector: "openBrowserOn:",
protocol: 'actions',
fn: function (aMethod){
var self=this;
var browser;
function $Browser(){return $globals.Browser||(typeof Browser=="undefined"?nil:Browser)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$4,$1,$5,$6,$7;
$3=$recv(aMethod)._methodClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["methodClass"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._isMetaclass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isMetaclass"]=1;
//>>excludeEnd("ctx");
if($core.assert($2)){
$4=$recv(aMethod)._methodClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["methodClass"]=2;
//>>excludeEnd("ctx");
$1=$recv($4)._instanceClass();
} else {
$1=$recv(aMethod)._methodClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["methodClass"]=3;
//>>excludeEnd("ctx");
};
browser=$recv($Browser())._openOn_($1);
$5=$recv($recv(aMethod)._methodClass())._isMetaclass();
if($core.assert($5)){
$recv(browser)._selectTab_("class");
};
$6=browser;
$recv($6)._selectProtocol_($recv(aMethod)._category());
$7=$recv($6)._selectMethod_(aMethod);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"openBrowserOn:",{aMethod:aMethod,browser:browser},$globals.ReferencesBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod"],
source: "openBrowserOn: aMethod\x0a\x09| browser |\x0a\x09browser := Browser openOn: (aMethod methodClass isMetaclass\x0a\x09\x09ifTrue: [ aMethod methodClass instanceClass ] ifFalse: [ aMethod methodClass ]).\x0a\x09aMethod methodClass isMetaclass ifTrue: [ browser selectTab: #class ].\x0a\x09browser\x0a\x09\x09selectProtocol: aMethod category;\x0a\x09\x09selectMethod: aMethod",
referencedClasses: ["Browser"],
//>>excludeEnd("ide");
messageSends: ["openOn:", "ifTrue:ifFalse:", "isMetaclass", "methodClass", "instanceClass", "ifTrue:", "selectTab:", "selectProtocol:", "category", "selectMethod:"]
}),
$globals.ReferencesBrowser);

$core.addMethod(
$core.method({
selector: "referencedClasses",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@referencedClasses"];
if(($receiver = $2) == null || $receiver.isNil){
self["@referencedClasses"]=$recv($Array())._new();
$1=self["@referencedClasses"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"referencedClasses",{},$globals.ReferencesBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "referencedClasses\x0a\x09^ referencedClasses ifNil: [ referencedClasses := Array new ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.ReferencesBrowser);

$core.addMethod(
$core.method({
selector: "renderBoxOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._renderInputOn_(html);
self._renderImplementorsOn_(html);
self._renderSendersOn_(html);
self._renderReferencedClassesOn_(html);
$1=self._renderMatchesOn_(html);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderBoxOn:",{html:html},$globals.ReferencesBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderBoxOn: html\x0a\x09self\x0a\x09\x09renderInputOn: html;\x0a\x09\x09renderImplementorsOn: html;\x0a\x09\x09renderSendersOn: html;\x0a\x09\x09renderReferencedClassesOn: html;\x0a\x09\x09renderMatchesOn: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderInputOn:", "renderImplementorsOn:", "renderSendersOn:", "renderReferencedClassesOn:", "renderMatchesOn:"]
}),
$globals.ReferencesBrowser);

$core.addMethod(
$core.method({
selector: "renderImplementorsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@implementorsList"]=$recv($recv(html)._ul())._class_("amber_column implementors");
self._updateImplementorsList();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderImplementorsOn:",{html:html},$globals.ReferencesBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderImplementorsOn: html\x0a\x09implementorsList := html ul class: 'amber_column implementors'.\x0a\x09self updateImplementorsList",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "ul", "updateImplementorsList"]
}),
$globals.ReferencesBrowser);

$core.addMethod(
$core.method({
selector: "renderInputOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._input();
$recv($1)._class_("implementors");
$2=$recv($1)._yourself();
self["@input"]=$2;
$recv($recv(self["@input"])._asJQuery())._val_(self["@selector"]);
self._setInputEvents();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderInputOn:",{html:html},$globals.ReferencesBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderInputOn: html\x0a\x09input := html input\x0a\x09\x09class: 'implementors';\x0a\x09\x09yourself.\x0a\x09input asJQuery val: selector.\x0a\x09self setInputEvents",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "input", "yourself", "val:", "asJQuery", "setInputEvents"]
}),
$globals.ReferencesBrowser);

$core.addMethod(
$core.method({
selector: "renderMatchesOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@matchesList"]=$recv($recv(html)._ul())._class_("amber_column matches");
self._updateMatchesList();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderMatchesOn:",{html:html},$globals.ReferencesBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderMatchesOn: html\x0a\x09matchesList := html ul class: 'amber_column matches'.\x0a\x09self updateMatchesList",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "ul", "updateMatchesList"]
}),
$globals.ReferencesBrowser);

$core.addMethod(
$core.method({
selector: "renderReferencedClassesOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@referencedClassesList"]=$recv($recv(html)._ul())._class_("amber_column referenced_classes");
self._updateReferencedClassesList();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderReferencedClassesOn:",{html:html},$globals.ReferencesBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderReferencedClassesOn: html\x0a\x09referencedClassesList := html ul class: 'amber_column referenced_classes'.\x0a\x09self updateReferencedClassesList",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "ul", "updateReferencedClassesList"]
}),
$globals.ReferencesBrowser);

$core.addMethod(
$core.method({
selector: "renderSendersOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@sendersList"]=$recv($recv(html)._ul())._class_("amber_column senders");
self._updateSendersList();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSendersOn:",{html:html},$globals.ReferencesBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSendersOn: html\x0a\x09sendersList := html ul class: 'amber_column senders'.\x0a\x09self updateSendersList",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "ul", "updateSendersList"]
}),
$globals.ReferencesBrowser);

$core.addMethod(
$core.method({
selector: "search:",
protocol: 'actions',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._searchReferencesFor_(aString);
self._updateImplementorsList();
self._updateSendersList();
self._updateReferencedClassesList();
$1=self._updateMatchesList();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"search:",{aString:aString},$globals.ReferencesBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "search: aString\x0a\x09self\x0a\x09\x09searchReferencesFor: aString;\x0a\x09\x09updateImplementorsList;\x0a\x09\x09updateSendersList;\x0a\x09\x09updateReferencedClassesList;\x0a\x09\x09updateMatchesList",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["searchReferencesFor:", "updateImplementorsList", "updateSendersList", "updateReferencedClassesList", "updateMatchesList"]
}),
$globals.ReferencesBrowser);

$core.addMethod(
$core.method({
selector: "searchMethodSource",
protocol: 'actions',
fn: function (){
var self=this;
var regex;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
regex=$recv(self["@selector"])._allButFirst();
$recv(self._classesAndMetaclasses())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._methodDictionary())._valuesDo_((function(value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=$recv($recv(value)._source())._match_(regex);
if($core.assert($1)){
return $recv(self._matches())._add_(value);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({value:value},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"searchMethodSource",{regex:regex},$globals.ReferencesBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "searchMethodSource\x0a\x09| regex |\x0a\x09regex := selector allButFirst.\x0a\x09self classesAndMetaclasses do: [ :each |\x0a\x09\x09each methodDictionary valuesDo: [ :value |\x0a\x09\x09\x09(value source match: regex) ifTrue: [\x0a\x09\x09\x09\x09self matches add: value ]] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["allButFirst", "do:", "classesAndMetaclasses", "valuesDo:", "methodDictionary", "ifTrue:", "match:", "source", "add:", "matches"]
}),
$globals.ReferencesBrowser);

$core.addMethod(
$core.method({
selector: "searchReferencedClasses",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$recv(self._classesAndMetaclasses())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._methodDictionary())._valuesDo_((function(value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$2=$recv(value)._referencedClasses();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["referencedClasses"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._includes_(self["@selector"]);
if($core.assert($1)){
return $recv(self._referencedClasses())._add_(value);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({value:value},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"searchReferencedClasses",{},$globals.ReferencesBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "searchReferencedClasses\x0a\x09self classesAndMetaclasses do: [ :each |\x0a\x09\x09each methodDictionary valuesDo: [ :value |\x0a\x09\x09\x09(value referencedClasses includes: selector) ifTrue: [\x0a\x09\x09\x09\x09self referencedClasses add: value ]] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "classesAndMetaclasses", "valuesDo:", "methodDictionary", "ifTrue:", "includes:", "referencedClasses", "add:"]
}),
$globals.ReferencesBrowser);

$core.addMethod(
$core.method({
selector: "searchReferencesFor:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self["@selector"]=aString;
self["@implementors"]=$recv($Array())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self["@senders"]=$recv($Array())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
self["@referencedClasses"]=$recv($Array())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
self["@matches"]=$recv($Array())._new();
self._searchMethodSource();
$1=$recv(self["@selector"])._match_("^[A-Z]");
if($core.assert($1)){
self._searchReferencedClasses();
} else {
self._searchSelectorReferences();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"searchReferencesFor:",{aString:aString},$globals.ReferencesBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "searchReferencesFor: aString\x0a\x09selector := aString.\x0a\x09implementors := Array new.\x0a\x09senders := Array new.\x0a\x09referencedClasses := Array new.\x0a\x09matches := Array new.\x0a\x09self searchMethodSource.\x0a\x09(selector match: '^[A-Z]')\x0a\x09\x09ifFalse: [ self searchSelectorReferences ]\x0a\x09\x09ifTrue: [ self searchReferencedClasses ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["new", "searchMethodSource", "ifFalse:ifTrue:", "match:", "searchSelectorReferences", "searchReferencedClasses"]
}),
$globals.ReferencesBrowser);

$core.addMethod(
$core.method({
selector: "searchSelectorReferences",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$recv(self._classesAndMetaclasses())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._methodDictionary())._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=$recv(key).__eq(self["@selector"]);
if($core.assert($1)){
$recv(self._implementors())._add_(value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
};
$2=$recv($recv(value)._messageSends())._includes_(self["@selector"]);
if($core.assert($2)){
return $recv(self._senders())._add_(value);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({key:key,value:value},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"searchSelectorReferences",{},$globals.ReferencesBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "searchSelectorReferences\x0a\x09self classesAndMetaclasses do: [ :each |\x0a\x09\x09each methodDictionary keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09key = selector ifTrue: [ self implementors add: value ].\x0a\x09\x09\x09(value messageSends includes: selector) ifTrue: [\x0a\x09\x09\x09\x09self senders add: value ]] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "classesAndMetaclasses", "keysAndValuesDo:", "methodDictionary", "ifTrue:", "=", "add:", "implementors", "includes:", "messageSends", "senders"]
}),
$globals.ReferencesBrowser);

$core.addMethod(
$core.method({
selector: "selector",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selector"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selector\x0a\x09^ selector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ReferencesBrowser);

$core.addMethod(
$core.method({
selector: "senders",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@senders"];
if(($receiver = $2) == null || $receiver.isNil){
self["@senders"]=$recv($Array())._new();
$1=self["@senders"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"senders",{},$globals.ReferencesBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "senders\x0a\x09^ senders ifNil: [ senders := Array new ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.ReferencesBrowser);

$core.addMethod(
$core.method({
selector: "setInputEvents",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2,$receiver;
$1=self["@input"];
$recv($1)._onKeyUp_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self["@timer"]=$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._search_($recv($recv(self["@input"])._asJQuery())._val());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_((100));
return self["@timer"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=$recv($1)._onKeyDown_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=self["@timer"];
if(($receiver = $3) == null || $receiver.isNil){
return $3;
} else {
return $recv(self["@timer"])._clearTimeout();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setInputEvents",{},$globals.ReferencesBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setInputEvents\x0a\x09input\x0a\x09\x09onKeyUp: [ timer := [ self search: input asJQuery val ] valueWithTimeout: 100 ];\x0a\x09\x09onKeyDown: [ timer ifNotNil: [ timer clearTimeout ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["onKeyUp:", "valueWithTimeout:", "search:", "val", "asJQuery", "onKeyDown:", "ifNotNil:", "clearTimeout"]
}),
$globals.ReferencesBrowser);

$core.addMethod(
$core.method({
selector: "updateImplementorsList",
protocol: 'updating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$7,$6,$5,$4,$3,$8,$9,$10,$11,$12;
$recv(self["@implementorsList"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("column_label");
$2=$1;
$7=self._implementors();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["implementors"]=1;
//>>excludeEnd("ctx");
$6=$recv($7)._size();
$5=$recv($6)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$4="Implementors (".__comma($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__comma(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($2)._with_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$8=$recv($1)._style_("font-weight: bold");
$8;
return $recv(self._implementors())._do_((function(each){
var li;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
li=$recv(html)._li();
li;
$9=li;
$10=$9;
$11=$recv($recv($recv($recv(each)._methodClass())._asString()).__comma(" >> ")).__comma(self._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx[","]=3;
//>>excludeEnd("ctx");
$recv($10)._with_($11);
$12=$recv($9)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._openBrowserOn_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
return $12;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each,li:li},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateImplementorsList",{},$globals.ReferencesBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateImplementorsList\x0a\x09implementorsList contents: [ :html |\x0a\x09html li\x0a\x09\x09class: 'column_label';\x0a\x09\x09with: 'Implementors (', self implementors size asString, ')';\x0a\x09\x09style: 'font-weight: bold'.\x0a\x09self implementors do: [ :each || li |\x0a\x09\x09li := html li.\x0a\x09\x09li\x0a\x09\x09with: (each methodClass asString, ' >> ', self selector);\x0a\x09\x09onClick: [ self openBrowserOn: each ]] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "class:", "li", "with:", ",", "asString", "size", "implementors", "style:", "do:", "methodClass", "selector", "onClick:", "openBrowserOn:"]
}),
$globals.ReferencesBrowser);

$core.addMethod(
$core.method({
selector: "updateMatchesList",
protocol: 'updating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$7,$6,$5,$4,$3,$8,$9,$10,$11,$12;
$recv(self["@matchesList"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("column_label");
$2=$1;
$7=self._matches();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["matches"]=1;
//>>excludeEnd("ctx");
$6=$recv($7)._size();
$5=$recv($6)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$4="Regex matches (".__comma($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__comma(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($2)._with_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$8=$recv($1)._style_("font-weight: bold");
$8;
return $recv(self._matches())._do_((function(each){
var li;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
li=$recv(html)._li();
li;
$9=li;
$10=$9;
$11=$recv($recv($recv($recv(each)._methodClass())._asString()).__comma(" >> ")).__comma($recv(each)._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx[","]=3;
//>>excludeEnd("ctx");
$recv($10)._with_($11);
$12=$recv($9)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._openBrowserOn_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
return $12;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each,li:li},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateMatchesList",{},$globals.ReferencesBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateMatchesList\x0a\x09matchesList contents: [ :html |\x0a\x09html li\x0a\x09\x09class: 'column_label';\x0a\x09\x09with: 'Regex matches (', self matches size asString, ')';\x0a\x09\x09style: 'font-weight: bold'.\x0a\x09self matches do: [ :each || li |\x0a\x09\x09li := html li.\x0a\x09\x09li\x0a\x09\x09with: (each methodClass asString, ' >> ', each selector);\x0a\x09\x09onClick: [ self openBrowserOn: each ]] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "class:", "li", "with:", ",", "asString", "size", "matches", "style:", "do:", "methodClass", "selector", "onClick:", "openBrowserOn:"]
}),
$globals.ReferencesBrowser);

$core.addMethod(
$core.method({
selector: "updateReferencedClassesList",
protocol: 'updating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$7,$6,$5,$4,$3,$8,$9,$10,$11,$12;
$recv(self["@referencedClassesList"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("column_label");
$2=$1;
$7=self._referencedClasses();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["referencedClasses"]=1;
//>>excludeEnd("ctx");
$6=$recv($7)._size();
$5=$recv($6)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$4="Class references (".__comma($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__comma(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($2)._with_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$8=$recv($1)._style_("font-weight: bold");
$8;
return $recv(self._referencedClasses())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$9=$recv(html)._li();
$10=$9;
$11=$recv($recv($recv($recv(each)._methodClass())._asString()).__comma(" >> ")).__comma($recv(each)._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx[","]=3;
//>>excludeEnd("ctx");
$recv($10)._with_($11);
$12=$recv($9)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._openBrowserOn_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
return $12;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateReferencedClassesList",{},$globals.ReferencesBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateReferencedClassesList\x0a\x09referencedClassesList contents: [ :html |\x0a\x09html li\x0a\x09\x09class: 'column_label';\x0a\x09\x09with: 'Class references (', self referencedClasses size asString, ')';\x0a\x09\x09style: 'font-weight: bold'.\x0a\x09self referencedClasses do: [ :each |\x0a\x09\x09html li\x0a\x09\x09\x09with: (each methodClass asString, ' >> ', each selector);\x0a\x09\x09\x09onClick: [ self openBrowserOn: each ]] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "class:", "li", "with:", ",", "asString", "size", "referencedClasses", "style:", "do:", "methodClass", "selector", "onClick:", "openBrowserOn:"]
}),
$globals.ReferencesBrowser);

$core.addMethod(
$core.method({
selector: "updateSendersList",
protocol: 'updating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$7,$6,$5,$4,$3,$8,$9,$10,$11,$12;
$recv(self["@sendersList"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("column_label");
$2=$1;
$7=self._senders();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["senders"]=1;
//>>excludeEnd("ctx");
$6=$recv($7)._size();
$5=$recv($6)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$4="Senders (".__comma($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__comma(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($2)._with_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$8=$recv($1)._style_("font-weight: bold");
$8;
return $recv(self._senders())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$9=$recv(html)._li();
$10=$9;
$11=$recv($recv($recv($recv(each)._methodClass())._asString()).__comma(" >> ")).__comma($recv(each)._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx[","]=3;
//>>excludeEnd("ctx");
$recv($10)._with_($11);
$12=$recv($9)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._openBrowserOn_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
return $12;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateSendersList",{},$globals.ReferencesBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateSendersList\x0a\x09sendersList contents: [ :html |\x0a\x09html li\x0a\x09\x09class: 'column_label';\x0a\x09\x09with: 'Senders (', self senders size asString, ')';\x0a\x09\x09style: 'font-weight: bold'.\x0a\x09self senders do: [ :each |\x0a\x09\x09html li\x0a\x09\x09\x09with: (each methodClass asString, ' >> ', each selector);\x0a\x09\x09\x09onClick: [ self openBrowserOn: each ]] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "class:", "li", "with:", ",", "asString", "size", "senders", "style:", "do:", "methodClass", "selector", "onClick:", "openBrowserOn:"]
}),
$globals.ReferencesBrowser);


$core.addMethod(
$core.method({
selector: "search:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._searchReferencesFor_(aString);
$3=$recv($2)._open();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"search:",{aString:aString},$globals.ReferencesBrowser.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "search: aString\x0a\x09^ self new\x0a\x09\x09searchReferencesFor: aString;\x0a\x09\x09open",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["searchReferencesFor:", "new", "open"]
}),
$globals.ReferencesBrowser.klass);


$core.addClass('TestRunner', $globals.TabWidget, ['selectedCategories', 'packagesList', 'selectedClasses', 'classesList', 'selectedMethods', 'progressBar', 'methodsList', 'result', 'statusDiv'], 'IDE');
$core.addMethod(
$core.method({
selector: "allClasses",
protocol: 'accessing',
fn: function (){
var self=this;
function $TestCase(){return $globals.TestCase||(typeof TestCase=="undefined"?nil:TestCase)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($TestCase())._allSubclasses())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._isAbstract())._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allClasses",{},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allClasses\x0a\x09^ TestCase allSubclasses select: [ :each | each isAbstract not ]",
referencedClasses: ["TestCase"],
//>>excludeEnd("ide");
messageSends: ["select:", "allSubclasses", "not", "isAbstract"]
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "classes",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$1=$recv($recv(self._allClasses())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._selectedCategories())._includes_($recv(each)._category());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})))._sort_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(a)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["name"]=1;
//>>excludeEnd("ctx");
return $recv($2).__gt($recv(b)._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classes",{},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classes\x0a\x09^ (self allClasses\x0a\x09select: [ :each | self selectedCategories includes: each category ])\x0a\x09sort: [ :a :b | a name > b name ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sort:", "select:", "allClasses", "includes:", "selectedCategories", "category", ">", "name"]
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $TestResult(){return $globals.TestResult||(typeof TestResult=="undefined"?nil:TestResult)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.TestRunner.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@result"]=$recv($TestResult())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09result := TestResult new",
referencedClasses: ["TestResult"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "isSelectedCategory:",
protocol: 'testing',
fn: function (aCategory){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._selectedCategories())._includes_(aCategory);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isSelectedCategory:",{aCategory:aCategory},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCategory"],
source: "isSelectedCategory: aCategory\x0a\x09^ (self selectedCategories includes: aCategory)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["includes:", "selectedCategories"]
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "isSelectedClass:",
protocol: 'testing',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._selectedClasses())._includes_(aClass);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isSelectedClass:",{aClass:aClass},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "isSelectedClass: aClass\x0a\x09^ (self selectedClasses includes: aClass)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["includes:", "selectedClasses"]
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "SUnit";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'SUnit'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "packages",
protocol: 'accessing',
fn: function (){
var self=this;
var packages;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1,$4;
packages=$recv($Array())._new();
$recv(self._allClasses())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=packages;
$3=$recv(each)._category();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["category"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._includes_($3);
if(!$core.assert($1)){
return $recv(packages)._add_($recv(each)._category());
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$4=$recv(packages)._sort();
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"packages",{packages:packages},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "packages\x0a\x09| packages |\x0a\x09packages := Array new.\x0a\x09self allClasses do: [ :each |\x0a\x09(packages includes: each category) ifFalse: [\x0a\x09\x09packages add: each category ]].\x0a\x09^ packages sort",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["new", "do:", "allClasses", "ifFalse:", "includes:", "category", "add:", "sort"]
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "performFailure:",
protocol: 'actions',
fn: function (aTestCase){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aTestCase)._runCase();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"performFailure:",{aTestCase:aTestCase},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTestCase"],
source: "performFailure: aTestCase\x0a\x09aTestCase runCase",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["runCase"]
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "printErrors",
protocol: 'printing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv($recv(self._result())._errors())._size())._asString()).__comma(" errors, ");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printErrors",{},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printErrors\x0a\x09^ self result errors size asString , ' errors, '",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "asString", "size", "errors", "result"]
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "printFailures",
protocol: 'printing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv($recv(self._result())._failures())._size())._asString()).__comma(" failures");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printFailures",{},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printFailures\x0a\x09^ self result failures size asString, ' failures'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "asString", "size", "failures", "result"]
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "printPasses",
protocol: 'printing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $6,$5,$9,$8,$7,$4,$3,$2,$1;
$6=self._result();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["result"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._runs();
$9=self._result();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["result"]=2;
//>>excludeEnd("ctx");
$8=$recv($9)._errors();
$7=$recv($8)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__minus($7);
$3=$recv($4).__minus($recv($recv(self._result())._failures())._size());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._asString();
$1=$recv($2).__comma(" passes, ");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printPasses",{},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printPasses\x0a\x09^ (self result runs - self result errors size - self result failures size) asString , ' passes, '",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "asString", "-", "runs", "result", "size", "errors", "failures"]
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "printTotal",
protocol: 'printing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv(self._result())._total())._asString()).__comma(" runs, ");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printTotal",{},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printTotal\x0a\x09^ self result total asString, ' runs, '",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "asString", "total", "result"]
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "progressBar",
protocol: 'accessing',
fn: function (){
var self=this;
function $ProgressBar(){return $globals.ProgressBar||(typeof ProgressBar=="undefined"?nil:ProgressBar)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@progressBar"];
if(($receiver = $2) == null || $receiver.isNil){
self["@progressBar"]=$recv($ProgressBar())._new();
$1=self["@progressBar"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"progressBar",{},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "progressBar\x0a\x09^ progressBar ifNil: [ progressBar := ProgressBar new ]",
referencedClasses: ["ProgressBar"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "renderBoxOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._renderCategoriesOn_(html);
self._renderClassesOn_(html);
$1=self._renderResultsOn_(html);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderBoxOn:",{html:html},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderBoxOn: html\x0a\x09self\x0a\x09renderCategoriesOn: html;\x0a\x09renderClassesOn: html;\x0a\x09renderResultsOn: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderCategoriesOn:", "renderClassesOn:", "renderResultsOn:"]
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._button();
$recv($1)._with_("Run selected");
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._run_(self._testCases());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderButtonsOn: html\x0a\x09html button\x0a\x09with: 'Run selected';\x0a\x09onClick: [ self run: self testCases ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "button", "onClick:", "run:", "testCases"]
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "renderCategoriesOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@packagesList"]=$recv($recv(html)._ul())._class_("amber_column sunit packages");
self._updateCategoriesList();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderCategoriesOn:",{html:html},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderCategoriesOn: html\x0a\x09packagesList := html ul class: 'amber_column sunit packages'.\x0a\x09self updateCategoriesList",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "ul", "updateCategoriesList"]
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "renderClassesOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@classesList"]=$recv($recv(html)._ul())._class_("amber_column sunit classes");
self._updateClassesList();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderClassesOn:",{html:html},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderClassesOn: html\x0a\x09classesList := html ul class: 'amber_column sunit classes'.\x0a\x09self updateClassesList",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "ul", "updateClassesList"]
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "renderErrorsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$recv($recv(self._result())._errors())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._li();
$recv($1)._class_("errors");
$2=$1;
$3=$recv($recv($recv($recv(each)._class())._name()).__comma(" >> ")).__comma($recv(each)._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($2)._with_($3);
$4=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._performFailure_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderErrorsOn:",{html:html},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderErrorsOn: html\x0a\x09self result errors do: [ :each |\x0a\x09\x09html li\x0a\x09\x09\x09class: 'errors';\x0a\x09\x09\x09with: each class name, ' >> ', each selector;\x0a\x09\x09\x09\x09\x09\x09onClick: [ self performFailure: each ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "errors", "result", "class:", "li", "with:", ",", "name", "class", "selector", "onClick:", "performFailure:"]
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "renderFailuresOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$recv($recv(self._result())._failures())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._li();
$recv($1)._class_("failures");
$2=$1;
$3=$recv($recv($recv($recv(each)._class())._name()).__comma(" >> ")).__comma($recv(each)._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($2)._with_($3);
$4=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._performFailure_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderFailuresOn:",{html:html},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderFailuresOn: html\x0a\x09self result failures do: [ :each |\x0a\x09\x09html li\x0a\x09\x09\x09class: 'failures';\x0a\x09\x09\x09with: each class name, ' >> ', each selector;\x0a\x09\x09\x09\x09\x09\x09onClick: [ self performFailure: each ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "failures", "result", "class:", "li", "with:", ",", "name", "class", "selector", "onClick:", "performFailure:"]
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "renderResultsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@statusDiv"]=$recv(html)._div();
$recv(html)._with_(self._progressBar());
self["@methodsList"]=$recv($recv(html)._ul())._class_("amber_column sunit results");
self._updateMethodsList();
self._updateStatusDiv();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderResultsOn:",{html:html},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderResultsOn: html\x0a\x09statusDiv := html div.\x0a\x09html with: self progressBar.\x0a\x09methodsList := html ul class: 'amber_column sunit results'.\x0a\x09self updateMethodsList.\x0a\x09self updateStatusDiv",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["div", "with:", "progressBar", "class:", "ul", "updateMethodsList", "updateStatusDiv"]
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "result",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@result"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "result\x0a\x09^ result",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "run:",
protocol: 'actions',
fn: function (aCollection){
var self=this;
var worker;
function $TestSuiteRunner(){return $globals.TestSuiteRunner||(typeof TestSuiteRunner=="undefined"?nil:TestSuiteRunner)}
function $ResultAnnouncement(){return $globals.ResultAnnouncement||(typeof ResultAnnouncement=="undefined"?nil:ResultAnnouncement)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
worker=$recv($TestSuiteRunner())._on_(aCollection);
self["@result"]=$recv(worker)._result();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["result"]=1;
//>>excludeEnd("ctx");
$recv($recv(worker)._announcer())._on_do_($ResultAnnouncement(),(function(ann){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($recv(ann)._result()).__eq_eq(self["@result"]);
if($core.assert($1)){
$recv(self._progressBar())._updatePercent_($recv($recv($recv(self["@result"])._runs()).__slash($recv(self["@result"])._total())).__star((100)));
self._updateStatusDiv();
return self._updateMethodsList();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(worker)._run();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"run:",{aCollection:aCollection,worker:worker},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "run: aCollection\x0a| worker |\x0a\x09worker := TestSuiteRunner on: aCollection.\x0a\x09result := worker result.\x0a\x09worker announcer on: ResultAnnouncement do: [ :ann |\x0a\x09\x09ann result == result ifTrue: [\x0a\x09\x09\x09self progressBar updatePercent: result runs / result total * 100.\x0a\x09\x09\x09self updateStatusDiv.\x0a\x09\x09\x09self updateMethodsList\x0a\x09\x09]\x0a\x09].\x0a\x09worker run",
referencedClasses: ["TestSuiteRunner", "ResultAnnouncement"],
//>>excludeEnd("ide");
messageSends: ["on:", "result", "on:do:", "announcer", "ifTrue:", "==", "updatePercent:", "progressBar", "*", "/", "runs", "total", "updateStatusDiv", "updateMethodsList", "run"]
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "selectAllCategories",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$recv(self._packages())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(self["@selectedCategories"])._includes_(each);
if(!$core.assert($1)){
return $recv(self._selectedCategories())._add_(each);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._updateCategoriesList();
$2=self._updateClassesList();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectAllCategories",{},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectAllCategories\x0a\x09self packages do: [ :each |\x0a\x09\x09(selectedCategories includes: each) ifFalse: [\x0a\x09\x09\x09self selectedCategories add: each ]].\x0a\x09self\x0a\x09\x09updateCategoriesList;\x0a\x09\x09updateClassesList",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "packages", "ifFalse:", "includes:", "add:", "selectedCategories", "updateCategoriesList", "updateClassesList"]
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "selectAllClasses",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$recv(self._classes())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(self["@selectedClasses"])._includes_(each);
if(!$core.assert($1)){
return $recv(self._selectedClasses())._add_(each);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._updateCategoriesList();
$2=self._updateClassesList();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectAllClasses",{},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectAllClasses\x0a\x09self classes do: [ :each |\x0a\x09\x09(selectedClasses includes: each) ifFalse: [\x0a\x09\x09\x09self selectedClasses add: each ]].\x0a\x09self\x0a\x09\x09updateCategoriesList;\x0a\x09\x09updateClassesList",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "classes", "ifFalse:", "includes:", "add:", "selectedClasses", "updateCategoriesList", "updateClassesList"]
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "selectedCategories",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@selectedCategories"];
if(($receiver = $2) == null || $receiver.isNil){
self["@selectedCategories"]=$recv($Array())._new();
$1=self["@selectedCategories"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectedCategories",{},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectedCategories\x0a\x09^ selectedCategories ifNil: [ selectedCategories := Array new ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "selectedClasses",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@selectedClasses"];
if(($receiver = $2) == null || $receiver.isNil){
self["@selectedClasses"]=$recv($Array())._new();
$1=self["@selectedClasses"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectedClasses",{},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectedClasses\x0a\x09^ selectedClasses ifNil: [ selectedClasses := Array new ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "statusInfo",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv($recv(self._printTotal()).__comma(self._printPasses())).__comma(self._printErrors());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma(self._printFailures());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"statusInfo",{},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "statusInfo\x0a\x09^ self printTotal, self printPasses, self printErrors, self printFailures",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "printTotal", "printPasses", "printErrors", "printFailures"]
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "testCases",
protocol: 'accessing',
fn: function (){
var self=this;
var testCases;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
testCases=[];
$recv($recv(self._selectedClasses())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._selectedCategories())._includes_($recv(each)._category());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(testCases)._addAll_($recv(each)._buildSuite());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$1=testCases;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCases",{testCases:testCases},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCases\x0a\x09| testCases |\x0a\x09testCases := #().\x0a\x09(self selectedClasses\x0a\x09\x09select: [ :each | self selectedCategories includes: each category ])\x0a\x09\x09do: [ :each | testCases addAll: each buildSuite ].\x0a\x09^ testCases",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "select:", "selectedClasses", "includes:", "selectedCategories", "category", "addAll:", "buildSuite"]
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "toggleCategory:",
protocol: 'actions',
fn: function (aCategory){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._isSelectedCategory_(aCategory);
if($core.assert($1)){
$recv(self["@selectedCategories"])._remove_(aCategory);
} else {
$recv(self["@selectedCategories"])._add_(aCategory);
};
self._updateCategoriesList();
$2=self._updateClassesList();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toggleCategory:",{aCategory:aCategory},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCategory"],
source: "toggleCategory: aCategory\x0a\x09(self isSelectedCategory: aCategory)\x0a\x09\x09ifFalse: [ selectedCategories add: aCategory ]\x0a\x09\x09ifTrue: [ selectedCategories remove: aCategory ].\x0a\x09self\x0a\x09\x09updateCategoriesList;\x0a\x09\x09updateClassesList",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:ifTrue:", "isSelectedCategory:", "add:", "remove:", "updateCategoriesList", "updateClassesList"]
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "toggleClass:",
protocol: 'actions',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._isSelectedClass_(aClass);
if($core.assert($1)){
$recv(self["@selectedClasses"])._remove_(aClass);
} else {
$recv(self["@selectedClasses"])._add_(aClass);
};
self._updateClassesList();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toggleClass:",{aClass:aClass},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "toggleClass: aClass\x0a\x09(self isSelectedClass: aClass)\x0a\x09\x09ifFalse: [ selectedClasses add: aClass ]\x0a\x09\x09ifTrue: [ selectedClasses remove: aClass ].\x0a\x09self\x0a\x09\x09updateClassesList",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:ifTrue:", "isSelectedClass:", "add:", "remove:", "updateClassesList"]
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "updateCategoriesList",
protocol: 'updating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$recv(self["@packagesList"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("all");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_("All");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._selectAllCategories();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$2;
return $recv(self._packages())._do_((function(each){
var li;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
li=$recv(html)._li();
li;
$3=$recv(self._selectedCategories())._includes_(each);
if($core.assert($3)){
$recv(li)._class_("selected");
};
$4=li;
$recv($4)._with_(each);
$5=$recv($4)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._toggleCategory_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)});
//>>excludeEnd("ctx");
}));
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each,li:li},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateCategoriesList",{},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateCategoriesList\x0a\x09packagesList contents: [ :html |\x0a\x09\x09html li\x0a\x09\x09class: 'all';\x0a\x09\x09with: 'All';\x0a\x09\x09onClick: [ self selectAllCategories ].\x0a\x09self packages do: [ :each || li |\x0a\x09\x09li := html li.\x0a\x09\x09(self selectedCategories includes: each) ifTrue: [\x0a\x09\x09li class: 'selected' ].\x0a\x09\x09li\x0a\x09\x09with: each;\x0a\x09\x09onClick: [ self toggleCategory: each ]] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "class:", "li", "with:", "onClick:", "selectAllCategories", "do:", "packages", "ifTrue:", "includes:", "selectedCategories", "toggleCategory:"]
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "updateClassesList",
protocol: 'updating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6;
$recv(self["@classesList"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(self._selectedCategories())._isEmpty();
if(!$core.assert($1)){
$2=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=1;
//>>excludeEnd("ctx");
$recv($2)._class_("all");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$recv($2)._with_("All");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$3=$recv($2)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._selectAllClasses();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$3;
};
return $recv(self._classes())._do_((function(each){
var li;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
li=$recv(html)._li();
li;
$4=$recv(self._selectedClasses())._includes_(each);
if($core.assert($4)){
$recv(li)._class_("selected");
};
$5=li;
$recv($5)._with_($recv(each)._name());
$6=$recv($5)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._toggleClass_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,6)});
//>>excludeEnd("ctx");
}));
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each,li:li},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateClassesList",{},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateClassesList\x0a\x09classesList contents: [ :html |\x0a\x09(self selectedCategories isEmpty) ifFalse: [\x0a\x09\x09html li\x0a\x09\x09\x09class: 'all';\x0a\x09\x09\x09with: 'All';\x0a\x09\x09\x09onClick: [ self selectAllClasses ]].\x0a\x09self classes do: [ :each || li |\x0a\x09\x09li := html li.\x0a\x09\x09(self selectedClasses includes: each) ifTrue: [\x0a\x09\x09\x09li class: 'selected' ].\x0a\x09\x09li\x0a\x09\x09\x09with: each name;\x0a\x09\x09\x09onClick: [ self toggleClass: each ]] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "ifFalse:", "isEmpty", "selectedCategories", "class:", "li", "with:", "onClick:", "selectAllClasses", "do:", "classes", "ifTrue:", "includes:", "selectedClasses", "name", "toggleClass:"]
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "updateMethodsList",
protocol: 'updating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@methodsList"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._renderErrorsOn_(html);
return self._renderFailuresOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateMethodsList",{},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateMethodsList\x0a\x09methodsList contents: [ :html |\x0a\x09\x09self renderErrorsOn: html.\x0a\x09\x09\x09\x09self renderFailuresOn: html ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "renderErrorsOn:", "renderFailuresOn:"]
}),
$globals.TestRunner);

$core.addMethod(
$core.method({
selector: "updateStatusDiv",
protocol: 'updating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@statusDiv"])._class_("sunit status ".__comma($recv(self["@result"])._status()));
$recv(self["@statusDiv"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._span())._with_(self._statusInfo());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateStatusDiv",{},$globals.TestRunner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateStatusDiv\x0a\x09statusDiv class: 'sunit status ', result status.\x0a\x09statusDiv contents: [ :html |\x0a\x09\x09html span with: self statusInfo ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", ",", "status", "contents:", "with:", "span", "statusInfo"]
}),
$globals.TestRunner);



$core.addClass('Workspace', $globals.TabWidget, ['sourceArea'], 'IDE');
$core.addMethod(
$core.method({
selector: "clearWorkspace",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@sourceArea"])._clear();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clearWorkspace",{},$globals.Workspace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clearWorkspace\x0a\x09sourceArea clear",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["clear"]
}),
$globals.Workspace);

$core.addMethod(
$core.method({
selector: "doIt",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@sourceArea"])._doIt();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doIt",{},$globals.Workspace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doIt\x0a\x09sourceArea doIt",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["doIt"]
}),
$globals.Workspace);

$core.addMethod(
$core.method({
selector: "fileIn",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@sourceArea"])._fileIn();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fileIn",{},$globals.Workspace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fileIn\x0a\x09sourceArea fileIn",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fileIn"]
}),
$globals.Workspace);

$core.addMethod(
$core.method({
selector: "inspectIt",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@sourceArea"])._inspectIt();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectIt",{},$globals.Workspace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inspectIt\x0a\x09sourceArea inspectIt",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["inspectIt"]
}),
$globals.Workspace);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Workspace";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Workspace'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Workspace);

$core.addMethod(
$core.method({
selector: "printIt",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@sourceArea"])._printIt();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printIt",{},$globals.Workspace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printIt\x0a\x09sourceArea printIt",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printIt"]
}),
$globals.Workspace);

$core.addMethod(
$core.method({
selector: "renderBoxOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $SourceArea(){return $globals.SourceArea||(typeof SourceArea=="undefined"?nil:SourceArea)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@sourceArea"]=$recv($SourceArea())._new();
$recv(self["@sourceArea"])._renderOn_(html);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderBoxOn:",{html:html},$globals.Workspace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderBoxOn: html\x0a\x09sourceArea := SourceArea new.\x0a\x09sourceArea renderOn: html",
referencedClasses: ["SourceArea"],
//>>excludeEnd("ide");
messageSends: ["new", "renderOn:"]
}),
$globals.Workspace);

$core.addMethod(
$core.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10;
$1=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["button"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_("DoIt");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$recv($1)._title_("ctrl+d");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["title:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$3=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["button"]=2;
//>>excludeEnd("ctx");
$recv($3)._with_("PrintIt");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$recv($3)._title_("ctrl+p");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["title:"]=2;
//>>excludeEnd("ctx");
$4=$recv($3)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._printIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onClick:"]=2;
//>>excludeEnd("ctx");
$5=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["button"]=3;
//>>excludeEnd("ctx");
$recv($5)._with_("InspectIt");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$recv($5)._title_("ctrl+i");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["title:"]=3;
//>>excludeEnd("ctx");
$6=$recv($5)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._inspectIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onClick:"]=3;
//>>excludeEnd("ctx");
$7=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["button"]=4;
//>>excludeEnd("ctx");
$recv($7)._with_("FileIn");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$recv($7)._title_("ctrl+f");
$8=$recv($7)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._fileIn();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onClick:"]=4;
//>>excludeEnd("ctx");
$9=$recv(html)._button();
$recv($9)._with_("Clear workspace");
$10=$recv($9)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._clearWorkspace();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},$globals.Workspace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderButtonsOn: html\x0a\x09html button\x0a\x09with: 'DoIt';\x0a\x09title: 'ctrl+d';\x0a\x09onClick: [ self doIt ].\x0a\x09html button\x0a\x09with: 'PrintIt';\x0a\x09title: 'ctrl+p';\x0a\x09onClick: [ self printIt ].\x0a\x09html button\x0a\x09with: 'InspectIt';\x0a\x09title: 'ctrl+i';\x0a\x09onClick: [ self inspectIt ].\x0a\x09html button\x0a\x09with: 'FileIn';\x0a\x09title: 'ctrl+f';\x0a\x09onClick: [ self fileIn ].\x0a\x09html button\x0a\x09with: 'Clear workspace';\x0a\x09onClick: [ self clearWorkspace ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "button", "title:", "onClick:", "doIt", "printIt", "inspectIt", "fileIn", "clearWorkspace"]
}),
$globals.Workspace);

$core.addMethod(
$core.method({
selector: "show",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Workspace.superclass.fn.prototype._show.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(self["@sourceArea"])._focus();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show",{},$globals.Workspace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "show\x0a\x09super show.\x0a\x09sourceArea focus.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["show", "focus"]
}),
$globals.Workspace);


$core.addMethod(
$core.method({
selector: "inspectOn:",
protocol: '*IDE',
fn: function (anInspector){
var self=this;
var variables;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
variables=$recv($Dictionary())._new();
$recv(variables)._at_put_("#self",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv(variables)._at_put_("#keys",self._keys());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
self._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(variables)._at_put_(key,value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(anInspector)._setLabel_(self._printString());
$1=$recv(anInspector)._setVariables_(variables);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},$globals.AssociativeCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self.\x0a\x09variables at: '#keys' put: self keys.\x0a\x09self keysAndValuesDo: [ :key :value |\x0a\x09\x09variables at: key put: value ].\x0a\x09anInspector\x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: variables",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new", "at:put:", "keys", "keysAndValuesDo:", "setLabel:", "printString", "setVariables:"]
}),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "inspectOn:",
protocol: '*IDE',
fn: function (anInspector){
var self=this;
var variables;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
variables=$recv($Dictionary())._new();
$recv(variables)._at_put_("#self",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
self._withIndexDo_((function(each,i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(variables)._at_put_(i,each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(anInspector)._setLabel_(self._printString());
$1=$recv(anInspector)._setVariables_(variables);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},$globals.Collection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self.\x0a\x09self withIndexDo: [ :each :i |\x0a\x09\x09variables at: i put: each ].\x0a\x09anInspector\x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: variables",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new", "at:put:", "withIndexDo:", "setLabel:", "printString", "setVariables:"]
}),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "inspectOn:",
protocol: '*IDE',
fn: function (anInspector){
var self=this;
var variables;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
variables=$recv($Dictionary())._new();
$recv(variables)._at_put_("#self",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv(variables)._at_put_("#year",self._year());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv(variables)._at_put_("#month",self._month());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$recv(variables)._at_put_("#day",self._day());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
$recv(variables)._at_put_("#hours",self._hours());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=5;
//>>excludeEnd("ctx");
$recv(variables)._at_put_("#minutes",self._minutes());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=6;
//>>excludeEnd("ctx");
$recv(variables)._at_put_("#seconds",self._seconds());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=7;
//>>excludeEnd("ctx");
$recv(variables)._at_put_("#milliseconds",self._milliseconds());
$recv(anInspector)._setLabel_(self._printString());
$1=$recv(anInspector)._setVariables_(variables);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},$globals.Date)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self.\x0a\x09variables at: '#year' put: self year.\x0a\x09variables at: '#month' put: self month.\x0a\x09variables at: '#day' put: self day.\x0a\x09variables at: '#hours' put: self hours.\x0a\x09variables at: '#minutes' put: self minutes.\x0a\x09variables at: '#seconds' put: self seconds.\x0a\x09variables at: '#milliseconds' put: self milliseconds.\x0a\x09anInspector\x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: variables",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new", "at:put:", "year", "month", "day", "hours", "minutes", "seconds", "milliseconds", "setLabel:", "printString", "setVariables:"]
}),
$globals.Date);

$core.addMethod(
$core.method({
selector: "inspectOn:",
protocol: '*IDE',
fn: function (anInspector){
var self=this;
var variables;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
variables=$recv($Dictionary())._new();
$recv(variables)._at_put_("#self",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv(variables)._at_put_("#home",self._home());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv(variables)._at_put_("#receiver",self._receiver());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$recv(variables)._at_put_("#selector",self._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
$recv(variables)._at_put_("#locals",self._locals());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=5;
//>>excludeEnd("ctx");
$recv($recv(self._class())._instanceVariableNames())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(variables)._at_put_(each,self._instVarAt_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(anInspector)._setLabel_(self._printString());
$1=$recv(anInspector)._setVariables_(variables);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},$globals.MethodContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self.\x0a\x09variables at: '#home' put: self home.\x0a\x09variables at: '#receiver' put: self receiver.\x0a\x09variables at: '#selector' put: self selector.\x0a\x09variables at: '#locals' put: self locals.\x0a\x09self class instanceVariableNames do: [ :each |\x0a\x09\x09variables at: each put: (self instVarAt: each) ].\x0a\x09anInspector\x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: variables",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new", "at:put:", "home", "receiver", "selector", "locals", "do:", "instanceVariableNames", "class", "instVarAt:", "setLabel:", "printString", "setVariables:"]
}),
$globals.MethodContext);

$core.addMethod(
$core.method({
selector: "inspectOn:",
protocol: '*IDE',
fn: function (anInspector){
var self=this;
var variables,i;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
variables=$recv($Dictionary())._new();
$recv(variables)._at_put_("#self",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
i=(1);
self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(variables)._at_put_(i,each);
i=$recv(i).__plus((1));
return i;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(anInspector)._setLabel_(self._printString());
$1=$recv(anInspector)._setVariables_(variables);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables,i:i},$globals.Set)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables i |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self.\x0a\x09i := 1.\x0a\x09self do: [ :each |\x0a\x09\x09variables at: i put: each.\x0a\x09\x09i := i + 1 ].\x0a\x09anInspector\x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: variables",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new", "at:put:", "do:", "+", "setLabel:", "printString", "setVariables:"]
}),
$globals.Set);

$core.addMethod(
$core.method({
selector: "inspectOn:",
protocol: '*IDE',
fn: function (anInspector){
var self=this;
var label;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1,$5,$4;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.String.superclass.fn.prototype._inspectOn_.apply($recv(self), [anInspector]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$3=self._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._size();
$1=$recv($2).__gt((30));
if($core.assert($1)){
$5=self._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._copyFrom_to_((1),(30));
label=$recv($4).__comma("...'");
label;
} else {
label=self._printString();
label;
};
$recv(anInspector)._setLabel_(label);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,label:label},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| label |\x0a\x09super inspectOn: anInspector.\x0a\x09self printString size > 30\x0a\x09\x09ifTrue: [ label := (self printString copyFrom: 1 to: 30), '...''' ]\x0a\x09\x09ifFalse: [ label := self printString ].\x0a\x09anInspector setLabel: label",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["inspectOn:", "ifTrue:ifFalse:", ">", "size", "printString", ",", "copyFrom:to:", "setLabel:"]
}),
$globals.String);

});
