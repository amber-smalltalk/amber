smalltalk.addPackage('IDE');
smalltalk.addClass('ClassesList', smalltalk.Widget, ['browser', 'ul', 'nodes'], 'IDE');
smalltalk.addMethod(
smalltalk.method({
selector: "browser",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@browser"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"browser",{},smalltalk.ClassesList)})},
args: [],
source: "browser\x0a\x09^browser",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesList);

smalltalk.addMethod(
smalltalk.method({
selector: "browser:",
category: 'accessing',
fn: function (aBrowser){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@browser"]=aBrowser;
return self}, function($ctx1) {$ctx1.fill(self,"browser:",{aBrowser:aBrowser},smalltalk.ClassesList)})},
args: ["aBrowser"],
source: "browser: aBrowser\x0a\x09browser := aBrowser",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesList);

smalltalk.addMethod(
smalltalk.method({
selector: "category",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._browser())._selectedPackage();
return $1;
}, function($ctx1) {$ctx1.fill(self,"category",{},smalltalk.ClassesList)})},
args: [],
source: "category\x0a\x09^self browser selectedPackage",
messageSends: ["selectedPackage", "browser"],
referencedClasses: []
}),
smalltalk.ClassesList);

smalltalk.addMethod(
smalltalk.method({
selector: "getNodes",
category: 'accessing',
fn: function (){
var self=this;
var classes,children,others;
function $ClassesListNode(){return smalltalk.ClassesListNode||(typeof ClassesListNode=="undefined"?nil:ClassesListNode)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
classes=_st(self._browser())._classes();
children=[];
others=[];
_st(classes)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(classes)._includes_(_st(each)._superclass());
if(smalltalk.assert($1)){
return _st(others)._add_(each);
} else {
return _st(children)._add_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=_st(children)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st($ClassesListNode())._on_browser_classes_level_(each,self._browser(),others,(0));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $2;
}, function($ctx1) {$ctx1.fill(self,"getNodes",{classes:classes,children:children,others:others},smalltalk.ClassesList)})},
args: [],
source: "getNodes\x0a\x09| classes children others |\x0a\x09classes := self browser classes.\x0a\x09children := #().\x0a\x09others := #().\x0a\x09classes do: [:each |\x0a\x09\x09(classes includes: each superclass)\x0a\x09\x09\x09ifFalse: [children add: each]\x0a\x09\x09\x09ifTrue: [others add: each]].\x0a\x09^children collect: [:each |\x0a\x09\x09ClassesListNode on: each browser: self browser classes: others level: 0]",
messageSends: ["classes", "browser", "do:", "ifFalse:ifTrue:", "add:", "includes:", "superclass", "collect:", "on:browser:classes:level:"],
referencedClasses: ["ClassesListNode"]
}),
smalltalk.ClassesList);

smalltalk.addMethod(
smalltalk.method({
selector: "nodes",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@nodes"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@nodes"]=self._getNodes();
self["@nodes"];
} else {
$1;
};
$2=self["@nodes"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"nodes",{},smalltalk.ClassesList)})},
args: [],
source: "nodes\x0a\x09nodes ifNil: [nodes := self getNodes].\x0a\x09^nodes",
messageSends: ["ifNil:", "getNodes"],
referencedClasses: []
}),
smalltalk.ClassesList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._ul();
_st($1)._class_("amber_column browser classes");
$2=_st($1)._yourself();
self["@ul"]=$2;
self._updateNodes();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.ClassesList)})},
args: ["html"],
source: "renderOn: html\x0a\x09ul := html ul\x0a\x09\x09class: 'amber_column browser classes';\x0a\x09\x09yourself.\x0a\x09self updateNodes",
messageSends: ["class:", "ul", "yourself", "updateNodes"],
referencedClasses: []
}),
smalltalk.ClassesList);

smalltalk.addMethod(
smalltalk.method({
selector: "resetNodes",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@nodes"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"resetNodes",{},smalltalk.ClassesList)})},
args: [],
source: "resetNodes\x0a\x09nodes := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesList);

smalltalk.addMethod(
smalltalk.method({
selector: "updateNodes",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@ul"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(self._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(each)._renderOn_(html);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateNodes",{},smalltalk.ClassesList)})},
args: [],
source: "updateNodes\x0a\x09ul contents: [:html |\x0a\x09\x09self nodes do: [:each |\x0a\x09\x09\x09each renderOn: html]]",
messageSends: ["contents:", "do:", "renderOn:", "nodes"],
referencedClasses: []
}),
smalltalk.ClassesList);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aBrowser){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._browser_(aBrowser);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aBrowser:aBrowser},smalltalk.ClassesList.klass)})},
args: ["aBrowser"],
source: "on: aBrowser\x0a\x09^self new\x0a\x09\x09browser: aBrowser;\x0a\x09\x09yourself",
messageSends: ["browser:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.ClassesList.klass);


smalltalk.addClass('ClassesListNode', smalltalk.Widget, ['browser', 'theClass', 'level', 'nodes'], 'IDE');
smalltalk.addMethod(
smalltalk.method({
selector: "browser",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@browser"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"browser",{},smalltalk.ClassesListNode)})},
args: [],
source: "browser\x0a\x09^browser",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
smalltalk.method({
selector: "browser:",
category: 'accessing',
fn: function (aBrowser){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@browser"]=aBrowser;
return self}, function($ctx1) {$ctx1.fill(self,"browser:",{aBrowser:aBrowser},smalltalk.ClassesListNode)})},
args: ["aBrowser"],
source: "browser: aBrowser\x0a\x09browser := aBrowser",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
smalltalk.method({
selector: "getNodesFrom:",
category: 'accessing',
fn: function (aCollection){
var self=this;
var children,others;
function $ClassesListNode(){return smalltalk.ClassesListNode||(typeof ClassesListNode=="undefined"?nil:ClassesListNode)}
return smalltalk.withContext(function($ctx1) { 
var $1;
children=[];
others=[];
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(each)._superclass()).__eq(self._theClass());
if(smalltalk.assert($1)){
return _st(children)._add_(each);
} else {
return _st(others)._add_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
self["@nodes"]=_st(children)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st($ClassesListNode())._on_browser_classes_level_(each,self._browser(),others,_st(self._level()).__plus((1)));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"getNodesFrom:",{aCollection:aCollection,children:children,others:others},smalltalk.ClassesListNode)})},
args: ["aCollection"],
source: "getNodesFrom: aCollection\x0a\x09| children others |\x0a\x09children := #().\x0a\x09others := #().\x0a\x09aCollection do: [:each |\x0a\x09\x09(each superclass = self theClass)\x0a\x09\x09\x09ifTrue: [children add: each]\x0a\x09\x09\x09ifFalse: [others add: each]].\x0a\x09nodes:= children collect: [:each |\x0a\x09\x09ClassesListNode on: each browser: self browser classes: others level: self level + 1]",
messageSends: ["do:", "ifTrue:ifFalse:", "add:", "=", "theClass", "superclass", "collect:", "on:browser:classes:level:", "browser", "+", "level"],
referencedClasses: ["ClassesListNode"]
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
var str;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
str=_st(_st($String())._new())._writeStream();
_st(self._level())._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(str)._nextPutAll_("&nbsp;&nbsp;&nbsp;&nbsp;");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(str)._nextPutAll_(_st(self._theClass())._name());
$1=_st(str)._contents();
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{str:str},smalltalk.ClassesListNode)})},
args: [],
source: "label\x0a\x09| str |\x0a\x09str := String new writeStream.\x0a\x09self level timesRepeat: [\x0a\x09\x09str nextPutAll: '&nbsp;&nbsp;&nbsp;&nbsp;'].\x0a\x09str nextPutAll: self theClass name.\x0a\x09^str contents",
messageSends: ["writeStream", "new", "timesRepeat:", "nextPutAll:", "level", "name", "theClass", "contents"],
referencedClasses: ["String"]
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
smalltalk.method({
selector: "level",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@level"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"level",{},smalltalk.ClassesListNode)})},
args: [],
source: "level\x0a\x09^level",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
smalltalk.method({
selector: "level:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@level"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"level:",{anInteger:anInteger},smalltalk.ClassesListNode)})},
args: ["anInteger"],
source: "level: anInteger\x0a\x09level := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
smalltalk.method({
selector: "nodes",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@nodes"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"nodes",{},smalltalk.ClassesListNode)})},
args: [],
source: "nodes\x0a\x09^nodes",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: '',
fn: function (html){
var self=this;
var li,cssClass;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
cssClass="";
li=_st(_st(html)._li())._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._browser())._selectClass_(self._theClass());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(li)._asJQuery())._html_(self._label());
$1=_st(_st(self._browser())._selectedClass()).__eq(self._theClass());
if(smalltalk.assert($1)){
cssClass=_st(cssClass).__comma(" selected");
cssClass;
};
$2=_st(_st(self._theClass())._comment())._isEmpty();
if(! smalltalk.assert($2)){
cssClass=_st(cssClass).__comma(" commented");
cssClass;
};
_st(li)._class_(cssClass);
_st(self._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,li:li,cssClass:cssClass},smalltalk.ClassesListNode)})},
args: ["html"],
source: "renderOn: html\x0a\x09| li cssClass |\x0a\x09cssClass := ''.\x0a\x09li := html li\x0a\x09\x09onClick: [self browser selectClass: self theClass].\x0a\x09li asJQuery html: self label.\x0a\x0a\x09self browser selectedClass = self theClass ifTrue: [\x0a\x09\x09cssClass := cssClass, ' selected'].\x0a\x0a\x09self theClass comment isEmpty ifFalse: [\x0a\x09\x09cssClass := cssClass, ' commented'].\x0a\x0a\x09li class: cssClass.\x0a\x0a\x09self nodes do: [:each |\x0a\x09\x09each renderOn: html]",
messageSends: ["onClick:", "selectClass:", "theClass", "browser", "li", "html:", "label", "asJQuery", "ifTrue:", ",", "=", "selectedClass", "ifFalse:", "isEmpty", "comment", "class:", "do:", "renderOn:", "nodes"],
referencedClasses: []
}),
smalltalk.ClassesListNode);

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
}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.ClassesListNode)})},
args: [],
source: "theClass\x0a\x09^theClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass},smalltalk.ClassesListNode)})},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesListNode);


smalltalk.addMethod(
smalltalk.method({
selector: "on:browser:classes:level:",
category: 'instance creation',
fn: function (aClass,aBrowser,aCollection,anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._theClass_(aClass);
_st($2)._browser_(aBrowser);
_st($2)._level_(anInteger);
_st($2)._getNodesFrom_(aCollection);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:browser:classes:level:",{aClass:aClass,aBrowser:aBrowser,aCollection:aCollection,anInteger:anInteger},smalltalk.ClassesListNode.klass)})},
args: ["aClass", "aBrowser", "aCollection", "anInteger"],
source: "on: aClass browser: aBrowser classes: aCollection level: anInteger\x0a\x09^self new\x0a\x09\x09theClass: aClass;\x0a\x09\x09browser: aBrowser;\x0a\x09\x09level: anInteger;\x0a\x09\x09getNodesFrom: aCollection;\x0a\x09\x09yourself",
messageSends: ["theClass:", "new", "browser:", "level:", "getNodesFrom:", "yourself"],
referencedClasses: []
}),
smalltalk.ClassesListNode.klass);


smalltalk.addClass('DebugErrorHandler', smalltalk.ErrorHandler, [], 'IDE');
smalltalk.addMethod(
smalltalk.method({
selector: "handleError:",
category: 'error handling',
fn: function (anError){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
function $ErrorHandler(){return smalltalk.ErrorHandler||(typeof ErrorHandler=="undefined"?nil:ErrorHandler)}
function $Debugger(){return smalltalk.Debugger||(typeof Debugger=="undefined"?nil:Debugger)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st($Debugger())._new();
_st($1)._error_(anError);
$2=_st($1)._open();
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_($Error(),(function(error){
return smalltalk.withContext(function($ctx2) {
return _st(_st($ErrorHandler())._new())._handleError_(error);
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"handleError:",{anError:anError},smalltalk.DebugErrorHandler)})},
args: ["anError"],
source: "handleError: anError\x0a\x09[ Debugger new\x0a\x09\x09error: anError;\x0a\x09\x09open ] on: Error do: [ :error |\x0a\x09\x09\x09ErrorHandler new handleError: error ]",
messageSends: ["on:do:", "handleError:", "new", "error:", "open"],
referencedClasses: ["Error", "ErrorHandler", "Debugger"]
}),
smalltalk.DebugErrorHandler);


smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._register();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.DebugErrorHandler.klass)})},
args: [],
source: "initialize\x0a\x09self register",
messageSends: ["register"],
referencedClasses: []
}),
smalltalk.DebugErrorHandler.klass);


smalltalk.addClass('SourceArea', smalltalk.Widget, ['editor', 'div', 'receiver', 'onDoIt'], 'IDE');
smalltalk.addMethod(
smalltalk.method({
selector: "clear",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._val_("");
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.SourceArea)})},
args: [],
source: "clear\x0a\x09self val: ''",
messageSends: ["val:"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
smalltalk.method({
selector: "currentLine",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@editor"])._getLine_(_st(_st(self["@editor"])._getCursor())._line());
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentLine",{},smalltalk.SourceArea)})},
args: [],
source: "currentLine\x0a\x09^editor getLine: (editor getCursor line)",
messageSends: ["getLine:", "line", "getCursor"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
smalltalk.method({
selector: "currentLineOrSelection",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self["@editor"])._somethingSelected();
if(smalltalk.assert($2)){
$1=self._selection();
} else {
$1=self._currentLine();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentLineOrSelection",{},smalltalk.SourceArea)})},
args: [],
source: "currentLineOrSelection\x0a\x09^editor somethingSelected\x0a\x09ifFalse: [self currentLine]\x0a\x09ifTrue: [self selection]",
messageSends: ["ifFalse:ifTrue:", "currentLine", "selection", "somethingSelected"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
smalltalk.method({
selector: "doIt",
category: 'actions',
fn: function (){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
result=self._eval_(self._currentLineOrSelection());
$1=self._onDoIt();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self._onDoIt())._value();
};
$2=result;
return $2;
}, function($ctx1) {$ctx1.fill(self,"doIt",{result:result},smalltalk.SourceArea)})},
args: [],
source: "doIt\x0a\x09| result |\x0a\x09result := self eval: self currentLineOrSelection.\x0a\x09self onDoIt ifNotNil: [self onDoIt value].\x0a\x09^result",
messageSends: ["eval:", "currentLineOrSelection", "ifNotNil:", "value", "onDoIt"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
smalltalk.method({
selector: "editor",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@editor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"editor",{},smalltalk.SourceArea)})},
args: [],
source: "editor\x0a\x09^editor",
messageSends: [],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
smalltalk.method({
selector: "eval:",
category: 'actions',
fn: function (aString){
var self=this;
var compiler;
function $Compiler(){return smalltalk.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
compiler=_st($Compiler())._new();
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(compiler)._parseExpression_(aString);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_($Error(),(function(ex){
return smalltalk.withContext(function($ctx2) {
$1=_st(window)._alert_(_st(ex)._messageText());
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})}));
$2=_st(compiler)._evaluateExpression_on_(aString,self._receiver());
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"eval:",{aString:aString,compiler:compiler},smalltalk.SourceArea)})},
args: ["aString"],
source: "eval: aString\x0a\x09| compiler |\x0a\x09compiler := Compiler new.\x0a\x09[ compiler parseExpression: aString ] on: Error do: [:ex |\x0a\x09\x09^window alert: ex messageText].\x0a\x09^compiler evaluateExpression: aString on: self receiver",
messageSends: ["new", "on:do:", "alert:", "messageText", "parseExpression:", "evaluateExpression:on:", "receiver"],
referencedClasses: ["Compiler", "Error"]
}),
smalltalk.SourceArea);

smalltalk.addMethod(
smalltalk.method({
selector: "fileIn",
category: 'actions',
fn: function (){
var self=this;
function $Importer(){return smalltalk.Importer||(typeof Importer=="undefined"?nil:Importer)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($Importer())._new())._import_(_st(self._currentLineOrSelection())._readStream());
return self}, function($ctx1) {$ctx1.fill(self,"fileIn",{},smalltalk.SourceArea)})},
args: [],
source: "fileIn\x0a\x09Importer new import: self currentLineOrSelection readStream",
messageSends: ["import:", "readStream", "currentLineOrSelection", "new"],
referencedClasses: ["Importer"]
}),
smalltalk.SourceArea);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._editor())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"focus",{},smalltalk.SourceArea)})},
args: [],
source: "focus\x0a\x09self editor focus.",
messageSends: ["focus", "editor"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyDown:",
category: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
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
return self}, function($ctx1) {$ctx1.fill(self,"handleKeyDown:",{anEvent:anEvent},smalltalk.SourceArea)})},
args: ["anEvent"],
source: "handleKeyDown: anEvent\x0a\x09<if(anEvent.ctrlKey) {\x0a\x09\x09if(anEvent.keyCode === 80) { //ctrl+p\x0a\x09\x09\x09self._printIt();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09\x09if(anEvent.keyCode === 68) { //ctrl+d\x0a\x09\x09\x09self._doIt();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09\x09if(anEvent.keyCode === 73) { //ctrl+i\x0a\x09\x09\x09self._inspectIt();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectIt",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._doIt())._inspect();
return self}, function($ctx1) {$ctx1.fill(self,"inspectIt",{},smalltalk.SourceArea)})},
args: [],
source: "inspectIt\x0a\x09self doIt inspect",
messageSends: ["inspect", "doIt"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
smalltalk.method({
selector: "onDoIt",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@onDoIt"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"onDoIt",{},smalltalk.SourceArea)})},
args: [],
source: "onDoIt\x0a\x09^onDoIt",
messageSends: [],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
smalltalk.method({
selector: "onDoIt:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@onDoIt"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"onDoIt:",{aBlock:aBlock},smalltalk.SourceArea)})},
args: ["aBlock"],
source: "onDoIt: aBlock\x0a\x09onDoIt := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyDown:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@div"])._onKeyDown_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onKeyDown:",{aBlock:aBlock},smalltalk.SourceArea)})},
args: ["aBlock"],
source: "onKeyDown: aBlock\x0a\x09div onKeyDown: aBlock",
messageSends: ["onKeyDown:"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
smalltalk.method({
selector: "onKeyUp:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@div"])._onKeyUp_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onKeyUp:",{aBlock:aBlock},smalltalk.SourceArea)})},
args: ["aBlock"],
source: "onKeyUp: aBlock\x0a\x09div onKeyUp: aBlock",
messageSends: ["onKeyUp:"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
smalltalk.method({
selector: "print:",
category: 'actions',
fn: function (aString){
var self=this;
var start,stop,currentLine;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
currentLine=_st(_st(self["@editor"])._getCursor_(false))._line();
start=_st($HashedCollection())._new();
_st(start)._at_put_("line",currentLine);
_st(start)._at_put_("ch",_st(_st(self["@editor"])._getCursor_(false))._ch());
_st(_st(self["@editor"])._getSelection())._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
_st(start)._at_put_("ch",_st(_st(self["@editor"])._getLine_(currentLine))._size());
return _st(self["@editor"])._setSelection_end_(smalltalk.HashedCollection._from_(["line".__minus_gt(currentLine),"ch".__minus_gt((0))]),start);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
stop=_st($HashedCollection())._new();
_st(stop)._at_put_("line",currentLine);
_st(stop)._at_put_("ch",_st(_st(_st(start)._at_("ch")).__plus(_st(aString)._size())).__plus((2)));
_st(self["@editor"])._replaceSelection_(_st(_st(_st(_st(self["@editor"])._getSelection()).__comma(" ")).__comma(aString)).__comma(" "));
_st(self["@editor"])._setCursor_(_st(self["@editor"])._getCursor_(true));
_st(self["@editor"])._setSelection_end_(stop,start);
return self}, function($ctx1) {$ctx1.fill(self,"print:",{aString:aString,start:start,stop:stop,currentLine:currentLine},smalltalk.SourceArea)})},
args: ["aString"],
source: "print: aString\x0a\x09| start stop currentLine |\x0a\x09currentLine := (editor getCursor: false) line.\x0a\x09start := HashedCollection new.\x0a\x09start at: 'line' put: currentLine.\x0a\x09start at: 'ch' put: (editor getCursor: false) ch.\x0a\x09(editor getSelection) ifEmpty: [\x0a\x09\x09\x22select current line if selection is empty\x22\x0a\x09\x09start at: 'ch' put: (editor getLine: currentLine) size.\x0a\x09\x09editor setSelection: #{'line' -> currentLine. 'ch' -> 0} end: start.\x0a\x09].\x0a\x09stop := HashedCollection new.\x0a\x09stop at: 'line' put: currentLine.\x0a\x09stop at: 'ch' put: ((start at: 'ch') + aString size + 2).\x0a\x0a\x09editor replaceSelection: (editor getSelection, ' ', aString, ' ').\x0a\x09editor setCursor: (editor getCursor: true).\x0a\x09editor setSelection: stop end: start",
messageSends: ["line", "getCursor:", "new", "at:put:", "ch", "ifEmpty:", "size", "getLine:", "setSelection:end:", "->", "getSelection", "+", "at:", "replaceSelection:", ",", "setCursor:"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.SourceArea);

smalltalk.addMethod(
smalltalk.method({
selector: "printIt",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._print_(_st(self._doIt())._printString());
self._focus();
return self}, function($ctx1) {$ctx1.fill(self,"printIt",{},smalltalk.SourceArea)})},
args: [],
source: "printIt\x0a\x09self print: self doIt printString.\x0a\x09self focus.",
messageSends: ["print:", "printString", "doIt", "focus"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
category: 'accessing',
fn: function (){
var self=this;
function $DoIt(){return smalltalk.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@receiver"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st($DoIt())._new();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},smalltalk.SourceArea)})},
args: [],
source: "receiver\x0a\x09^receiver ifNil: [DoIt new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["DoIt"]
}),
smalltalk.SourceArea);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@receiver"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{anObject:anObject},smalltalk.SourceArea)})},
args: ["anObject"],
source: "receiver: anObject\x0a\x09receiver := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
var textarea;
return smalltalk.withContext(function($ctx1) { 
self["@div"]=_st(_st(html)._div())._class_("source");
_st(self["@div"])._with_((function(){
return smalltalk.withContext(function($ctx2) {
textarea=_st(html)._textarea();
return textarea;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self._setEditorOn_(_st(textarea)._element());
_st(self["@div"])._onKeyDown_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._handleKeyDown_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,textarea:textarea},smalltalk.SourceArea)})},
args: ["html"],
source: "renderOn: html\x0a\x09| textarea |\x0a\x09div := html div class: 'source'.\x0a\x09div with: [textarea := html textarea].\x0a\x09self setEditorOn: textarea element.\x0a\x09div onKeyDown: [:e | self handleKeyDown: e]",
messageSends: ["class:", "div", "with:", "textarea", "setEditorOn:", "element", "onKeyDown:", "handleKeyDown:"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
smalltalk.method({
selector: "selection",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@editor"])._getSelection();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selection",{},smalltalk.SourceArea)})},
args: [],
source: "selection\x0a\x09^editor getSelection",
messageSends: ["getSelection"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
smalltalk.method({
selector: "setEditorOn:",
category: 'accessing',
fn: function (aTextarea){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self['@editor'] = CodeMirror.fromTextArea(aTextarea, {
		theme: 'amber',
				lineNumbers: true,
				enterMode: 'flat',
				indentWithTabs: true,
				indentUnit: 4,
				matchBrackets: true,
				electricChars: false
	});
return self}, function($ctx1) {$ctx1.fill(self,"setEditorOn:",{aTextarea:aTextarea},smalltalk.SourceArea)})},
args: ["aTextarea"],
source: "setEditorOn: aTextarea\x0a\x09<self['@editor'] = CodeMirror.fromTextArea(aTextarea, {\x0a\x09\x09theme: 'amber',\x0a\x09\x09\x09\x09lineNumbers: true,\x0a\x09\x09\x09\x09enterMode: 'flat',\x0a\x09\x09\x09\x09indentWithTabs: true,\x0a\x09\x09\x09\x09indentUnit: 4,\x0a\x09\x09\x09\x09matchBrackets: true,\x0a\x09\x09\x09\x09electricChars: false\x0a\x09})>",
messageSends: [],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
smalltalk.method({
selector: "val",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@editor"])._getValue();
return $1;
}, function($ctx1) {$ctx1.fill(self,"val",{},smalltalk.SourceArea)})},
args: [],
source: "val\x0a\x09^editor getValue",
messageSends: ["getValue"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
smalltalk.method({
selector: "val:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@editor"])._setValue_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"val:",{aString:aString},smalltalk.SourceArea)})},
args: ["aString"],
source: "val: aString\x0a\x09editor setValue: aString",
messageSends: ["setValue:"],
referencedClasses: []
}),
smalltalk.SourceArea);


smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.SourceArea.klass.superclass.fn.prototype._initialize.apply(_st(self), []);
self._setupCodeMirror();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.SourceArea.klass)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self setupCodeMirror",
messageSends: ["initialize", "setupCodeMirror"],
referencedClasses: []
}),
smalltalk.SourceArea.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "setupCodeMirror",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 CodeMirror.keyMap["default"].fallthrough = ["basic"] ;
return self}, function($ctx1) {$ctx1.fill(self,"setupCodeMirror",{},smalltalk.SourceArea.klass)})},
args: [],
source: "setupCodeMirror\x0a\x09< CodeMirror.keyMap[\x22default\x22].fallthrough = [\x22basic\x22] >",
messageSends: [],
referencedClasses: []
}),
smalltalk.SourceArea.klass);


smalltalk.addClass('TabManager', smalltalk.Widget, ['selectedTab', 'tabs', 'opened', 'ul', 'input'], 'IDE');
smalltalk.addMethod(
smalltalk.method({
selector: "addTab:",
category: 'adding/Removing',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._tabs())._add_(aWidget);
_st(aWidget)._appendToJQuery_("#amber"._asJQuery());
_st(aWidget)._hide();
return self}, function($ctx1) {$ctx1.fill(self,"addTab:",{aWidget:aWidget},smalltalk.TabManager)})},
args: ["aWidget"],
source: "addTab: aWidget\x0a\x09self tabs add: aWidget.\x0a\x09aWidget appendToJQuery: '#amber' asJQuery.\x0a\x09aWidget hide",
messageSends: ["add:", "tabs", "appendToJQuery:", "asJQuery", "hide"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
smalltalk.method({
selector: "close",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@opened"];
if(smalltalk.assert($1)){
_st("#amber"._asJQuery())._hide();
_st(_st(self["@ul"])._asJQuery())._hide();
_st(self["@selectedTab"])._hide();
self._removeBodyMargin();
_st("body"._asJQuery())._removeClass_("amberBody");
self["@opened"]=false;
self["@opened"];
};
return self}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.TabManager)})},
args: [],
source: "close\x0a\x09opened ifTrue: [\x0a\x09'#amber' asJQuery hide.\x0a\x09ul asJQuery hide.\x0a\x09selectedTab hide.\x0a\x09self removeBodyMargin.\x0a\x09'body' asJQuery removeClass: 'amberBody'.\x0a\x09opened := false]",
messageSends: ["ifTrue:", "hide", "asJQuery", "removeBodyMargin", "removeClass:"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
smalltalk.method({
selector: "closeTab:",
category: 'actions',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._removeTab_(aWidget);
self._selectTab_(_st(self._tabs())._last());
_st(aWidget)._remove();
self._update();
return self}, function($ctx1) {$ctx1.fill(self,"closeTab:",{aWidget:aWidget},smalltalk.TabManager)})},
args: ["aWidget"],
source: "closeTab: aWidget\x0a\x09self removeTab: aWidget.\x0a\x09self selectTab: self tabs last.\x0a\x09aWidget remove.\x0a\x09self update",
messageSends: ["removeTab:", "selectTab:", "last", "tabs", "remove", "update"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $IDETranscript(){return smalltalk.IDETranscript||(typeof IDETranscript=="undefined"?nil:IDETranscript)}
function $Workspace(){return smalltalk.Workspace||(typeof Workspace=="undefined"?nil:Workspace)}
function $TestRunner(){return smalltalk.TestRunner||(typeof TestRunner=="undefined"?nil:TestRunner)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
smalltalk.TabManager.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@opened"]=true;
_st((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._div())._id_("amber");
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}))._appendToJQuery_("body"._asJQuery());
_st("body"._asJQuery())._addClass_("amberBody");
self._appendToJQuery_("#amber"._asJQuery());
$1=self;
_st($1)._addTab_(_st($IDETranscript())._current());
_st($1)._addTab_(_st($Workspace())._new());
$2=_st($1)._addTab_(_st($TestRunner())._new());
self._selectTab_(_st(self._tabs())._last());
$3=self;
_st($3)._onResize_((function(){
return smalltalk.withContext(function($ctx2) {
$4=self;
_st($4)._updateBodyMargin();
$5=_st($4)._updatePosition();
return $5;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$6=_st($3)._onWindowResize_((function(){
return smalltalk.withContext(function($ctx2) {
return self._updatePosition();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TabManager)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09opened := true.\x0a\x09[:html | html div id: 'amber'] appendToJQuery: 'body' asJQuery.\x0a\x09'body' asJQuery\x0a\x09addClass: 'amberBody'.\x0a\x09self appendToJQuery: '#amber' asJQuery.\x0a\x09self\x0a\x09addTab: IDETranscript current;\x0a\x09addTab: Workspace new;\x0a\x09addTab: TestRunner new.\x0a\x09self selectTab: self tabs last.\x0a\x09self\x0a\x09onResize: [self updateBodyMargin; updatePosition];\x0a\x09onWindowResize: [self updatePosition]",
messageSends: ["initialize", "appendToJQuery:", "asJQuery", "id:", "div", "addClass:", "addTab:", "current", "new", "selectTab:", "last", "tabs", "onResize:", "updateBodyMargin", "updatePosition", "onWindowResize:"],
referencedClasses: ["IDETranscript", "Workspace", "TestRunner"]
}),
smalltalk.TabManager);

smalltalk.addMethod(
smalltalk.method({
selector: "labelFor:",
category: 'accessing',
fn: function (aWidget){
var self=this;
var label,maxSize;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
maxSize=(15);
label=_st(_st(aWidget)._label())._copyFrom_to_((0),_st(_st(_st(aWidget)._label())._size())._min_(maxSize));
$1=_st(_st(_st(aWidget)._label())._size()).__gt(maxSize);
if(smalltalk.assert($1)){
label=_st(label).__comma("...");
label;
};
$2=label;
return $2;
}, function($ctx1) {$ctx1.fill(self,"labelFor:",{aWidget:aWidget,label:label,maxSize:maxSize},smalltalk.TabManager)})},
args: ["aWidget"],
source: "labelFor: aWidget\x0a\x09| label maxSize |\x0a\x09maxSize := 15.\x0a\x09label := aWidget label copyFrom: 0 to: (aWidget label size min: maxSize).\x0a\x09aWidget label size > maxSize ifTrue: [\x0a\x09\x09label := label, '...'].\x0a\x09^label",
messageSends: ["copyFrom:to:", "min:", "size", "label", "ifTrue:", ",", ">"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
smalltalk.method({
selector: "newBrowserTab",
category: 'actions',
fn: function (){
var self=this;
function $Browser(){return smalltalk.Browser||(typeof Browser=="undefined"?nil:Browser)}
return smalltalk.withContext(function($ctx1) { 
_st($Browser())._open();
return self}, function($ctx1) {$ctx1.fill(self,"newBrowserTab",{},smalltalk.TabManager)})},
args: [],
source: "newBrowserTab\x0a\x09Browser open",
messageSends: ["open"],
referencedClasses: ["Browser"]
}),
smalltalk.TabManager);

smalltalk.addMethod(
smalltalk.method({
selector: "onResize:",
category: 'actions',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
jQuery('#amber').resizable({
	handles: 'n',
	resize: aBlock,
	minHeight: 230
});
return self}, function($ctx1) {$ctx1.fill(self,"onResize:",{aBlock:aBlock},smalltalk.TabManager)})},
args: ["aBlock"],
source: "onResize: aBlock\x0a\x09<jQuery('#amber').resizable({\x0a\x09handles: 'n',\x0a\x09resize: aBlock,\x0a\x09minHeight: 230\x0a})>",
messageSends: [],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
smalltalk.method({
selector: "onWindowResize:",
category: 'actions',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
jQuery(window).resize(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onWindowResize:",{aBlock:aBlock},smalltalk.TabManager)})},
args: ["aBlock"],
source: "onWindowResize: aBlock\x0a\x09<jQuery(window).resize(aBlock)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@opened"];
if(! smalltalk.assert($1)){
_st("body"._asJQuery())._addClass_("amberBody");
_st("#amber"._asJQuery())._show();
_st(_st(self["@ul"])._asJQuery())._show();
self._updateBodyMargin();
_st(self["@selectedTab"])._show();
self["@opened"]=true;
self["@opened"];
};
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.TabManager)})},
args: [],
source: "open\x0a\x09opened ifFalse: [\x0a\x09'body' asJQuery addClass: 'amberBody'.\x0a\x09'#amber' asJQuery show.\x0a\x09ul asJQuery show.\x0a\x09self updateBodyMargin.\x0a\x09selectedTab show.\x0a\x09opened := true]",
messageSends: ["ifFalse:", "addClass:", "asJQuery", "show", "updateBodyMargin"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
smalltalk.method({
selector: "removeBodyMargin",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._setBodyMargin_((0));
return self}, function($ctx1) {$ctx1.fill(self,"removeBodyMargin",{},smalltalk.TabManager)})},
args: [],
source: "removeBodyMargin\x0a\x09self setBodyMargin: 0",
messageSends: ["setBodyMargin:"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
smalltalk.method({
selector: "removeTab:",
category: 'adding/Removing',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._tabs())._remove_(aWidget);
self._update();
return self}, function($ctx1) {$ctx1.fill(self,"removeTab:",{aWidget:aWidget},smalltalk.TabManager)})},
args: ["aWidget"],
source: "removeTab: aWidget\x0a\x09self tabs remove: aWidget.\x0a\x09self update",
messageSends: ["remove:", "tabs", "update"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(html)._div())._id_("logo");
self._renderToolbarOn_(html);
$1=_st(html)._ul();
_st($1)._id_("amberTabs");
$2=_st($1)._yourself();
self["@ul"]=$2;
self._renderTabs();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.TabManager)})},
args: ["html"],
source: "renderOn: html\x0a\x09html div id: 'logo'.\x0a\x09self renderToolbarOn: html.\x0a\x09ul := html ul\x0a\x09\x09id: 'amberTabs';\x0a\x09\x09yourself.\x0a\x09self renderTabs",
messageSends: ["id:", "div", "renderToolbarOn:", "ul", "yourself", "renderTabs"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTabFor:on:",
category: 'rendering',
fn: function (aWidget,html){
var self=this;
var li;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$6,$7,$4,$8;
li=_st(html)._li();
$1=_st(self["@selectedTab"]).__eq(aWidget);
if(smalltalk.assert($1)){
_st(li)._class_("selected");
};
$2=li;
_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._span())._class_("ltab");
$3=_st(html)._span();
_st($3)._class_("mtab");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$5=_st(aWidget)._canBeClosed();
if(smalltalk.assert($5)){
$6=_st(html)._span();
_st($6)._class_("close");
_st($6)._with_("x");
$7=_st($6)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._closeTab_(aWidget);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
$7;
};
return _st(_st(html)._span())._with_(self._labelFor_(aWidget));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$4;
return _st(_st(html)._span())._class_("rtab");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$8=_st($2)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._selectTab_(aWidget);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderTabFor:on:",{aWidget:aWidget,html:html,li:li},smalltalk.TabManager)})},
args: ["aWidget", "html"],
source: "renderTabFor: aWidget on: html\x0a\x09| li |\x0a\x09li := html li.\x0a\x09selectedTab = aWidget ifTrue: [\x0a\x09li class: 'selected'].\x0a\x09li with: [\x0a\x09\x09html span class: 'ltab'.\x0a\x09\x09html span\x0a\x09\x09\x09class: 'mtab';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09aWidget canBeClosed ifTrue: [\x0a\x09\x09\x09\x09\x09html span\x0a\x09\x09\x09\x09\x09\x09class: 'close';\x0a\x09\x09\x09\x09\x09\x09with: 'x';\x0a\x09\x09\x09\x09\x09onClick: [self closeTab: aWidget]].\x0a\x09\x09\x09html span with: (self labelFor: aWidget)].\x0a\x09\x09html span class: 'rtab'];\x0a\x09onClick: [self selectTab: aWidget]",
messageSends: ["li", "ifTrue:", "class:", "=", "with:", "span", "onClick:", "closeTab:", "canBeClosed", "labelFor:", "selectTab:"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTabs",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
_st(self["@ul"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
_st(self._tabs())._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return self._renderTabFor_on_(each,html);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2)})}));
$1=_st(html)._li();
_st($1)._class_("newtab");
_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(html)._span())._class_("ltab");
$2=_st(html)._span();
_st($2)._class_("mtab");
$3=_st($2)._with_(" + ");
$3;
return _st(_st(html)._span())._class_("rtab");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$4=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._newBrowserTab();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderTabs",{},smalltalk.TabManager)})},
args: [],
source: "renderTabs\x0a\x09ul contents: [:html |\x0a\x09\x09self tabs do: [:each |\x0a\x09\x09self renderTabFor: each on: html].\x0a\x09\x09html li\x0a\x09\x09class: 'newtab';\x0a\x09\x09with: [\x0a\x09\x09\x09html span class: 'ltab'.\x0a\x09\x09\x09html span class: 'mtab'; with: ' + '.\x0a\x09\x09\x09html span class: 'rtab'];\x0a\x09\x09onClick: [self newBrowserTab]]",
messageSends: ["contents:", "do:", "renderTabFor:on:", "tabs", "class:", "li", "with:", "span", "onClick:", "newBrowserTab"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
smalltalk.method({
selector: "renderToolbarOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$2;
$1=_st(html)._div();
_st($1)._id_("amber_toolbar");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._input();
_st($3)._class_("implementors");
$4=_st($3)._yourself();
self["@input"]=$4;
self["@input"];
_st(self["@input"])._onKeyPress_((function(event){
return smalltalk.withContext(function($ctx3) {
$5=_st(_st(event)._keyCode()).__eq((13));
if(smalltalk.assert($5)){
return self._search_(_st(_st(self["@input"])._asJQuery())._val());
};
}, function($ctx3) {$ctx3.fillBlock({event:event},$ctx2)})}));
$6=_st(html)._div();
_st($6)._id_("amber_close");
$7=_st($6)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._close();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return $7;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderToolbarOn:",{html:html},smalltalk.TabManager)})},
args: ["html"],
source: "renderToolbarOn: html\x0a\x09html div\x0a\x09\x09id: 'amber_toolbar';\x0a\x09\x09with: [\x0a\x09\x09\x09input := html input\x0a\x09\x09\x09\x09class: 'implementors';\x0a\x09\x09\x09\x09yourself.\x0a\x09\x09\x09input onKeyPress: [:event |\x0a\x09\x09\x09\x09event keyCode = 13 ifTrue: [\x0a\x09\x09\x09\x09self search: input asJQuery val]].\x0a\x09\x09\x09html div id: 'amber_close'; onClick: [self close]]",
messageSends: ["id:", "div", "with:", "class:", "input", "yourself", "onKeyPress:", "ifTrue:", "search:", "val", "asJQuery", "=", "keyCode", "onClick:", "close"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
smalltalk.method({
selector: "search:",
category: 'actions',
fn: function (aString){
var self=this;
var searchedClass;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $Browser(){return smalltalk.Browser||(typeof Browser=="undefined"?nil:Browser)}
function $ReferencesBrowser(){return smalltalk.ReferencesBrowser||(typeof ReferencesBrowser=="undefined"?nil:ReferencesBrowser)}
return smalltalk.withContext(function($ctx1) { 
var $1;
searchedClass=_st(_st($Smalltalk())._current())._at_(aString);
$1=_st(searchedClass)._isClass();
if(smalltalk.assert($1)){
_st($Browser())._openOn_(searchedClass);
} else {
_st($ReferencesBrowser())._search_(aString);
};
return self}, function($ctx1) {$ctx1.fill(self,"search:",{aString:aString,searchedClass:searchedClass},smalltalk.TabManager)})},
args: ["aString"],
source: "search: aString\x0a\x09| searchedClass |\x0a\x09searchedClass := Smalltalk current at: aString.\x0a\x09\x09searchedClass isClass\x0a\x09\x09\x09ifTrue: [Browser openOn: searchedClass]\x0a\x09\x09\x09ifFalse: [ReferencesBrowser search: aString]",
messageSends: ["at:", "current", "ifTrue:ifFalse:", "openOn:", "search:", "isClass"],
referencedClasses: ["Smalltalk", "Browser", "ReferencesBrowser"]
}),
smalltalk.TabManager);

smalltalk.addMethod(
smalltalk.method({
selector: "selectTab:",
category: 'actions',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._open();
self["@selectedTab"]=aWidget;
_st(self._tabs())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._hide();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(aWidget)._show();
self._update();
return self}, function($ctx1) {$ctx1.fill(self,"selectTab:",{aWidget:aWidget},smalltalk.TabManager)})},
args: ["aWidget"],
source: "selectTab: aWidget\x0a\x09self open.\x0a\x09selectedTab := aWidget.\x0a\x09self tabs do: [:each |\x0a\x09each hide].\x0a\x09aWidget show.\x0a\x09\x0a\x09self update",
messageSends: ["open", "do:", "hide", "tabs", "show", "update"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
smalltalk.method({
selector: "setBodyMargin:",
category: 'actions',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(".amberBody"._asJQuery())._css_put_("margin-bottom",_st(_st(anInteger)._asString()).__comma("px"));
return self}, function($ctx1) {$ctx1.fill(self,"setBodyMargin:",{anInteger:anInteger},smalltalk.TabManager)})},
args: ["anInteger"],
source: "setBodyMargin: anInteger\x0a\x09'.amberBody' asJQuery css: 'margin-bottom' put: anInteger asString, 'px'",
messageSends: ["css:put:", ",", "asString", "asJQuery"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
smalltalk.method({
selector: "tabs",
category: 'accessing',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@tabs"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@tabs"]=_st($Array())._new();
$1=self["@tabs"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabs",{},smalltalk.TabManager)})},
args: [],
source: "tabs\x0a\x09^tabs ifNil: [tabs := Array new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.TabManager);

smalltalk.addMethod(
smalltalk.method({
selector: "update",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._renderTabs();
return self}, function($ctx1) {$ctx1.fill(self,"update",{},smalltalk.TabManager)})},
args: [],
source: "update\x0a\x09self renderTabs",
messageSends: ["renderTabs"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
smalltalk.method({
selector: "updateBodyMargin",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._setBodyMargin_(_st("#amber"._asJQuery())._height());
return self}, function($ctx1) {$ctx1.fill(self,"updateBodyMargin",{},smalltalk.TabManager)})},
args: [],
source: "updateBodyMargin\x0a\x09self setBodyMargin: '#amber' asJQuery height",
messageSends: ["setBodyMargin:", "height", "asJQuery"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
smalltalk.method({
selector: "updatePosition",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
jQuery('#amber').css('top', '').css('bottom', '0px');
return self}, function($ctx1) {$ctx1.fill(self,"updatePosition",{},smalltalk.TabManager)})},
args: [],
source: "updatePosition\x0a\x09<jQuery('#amber').css('top', '').css('bottom', '0px')>",
messageSends: [],
referencedClasses: []
}),
smalltalk.TabManager);


smalltalk.TabManager.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@current"]=smalltalk.TabManager.klass.superclass.fn.prototype._new.apply(_st(self), []);
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.TabManager.klass)})},
args: [],
source: "current\x0a\x09^current ifNil: [current := super new]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.TabManager.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.TabManager.klass)})},
args: [],
source: "new\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.TabManager.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "toggleAmberIDE",
category: 'actions',
fn: function (){
var self=this;
function $Browser(){return smalltalk.Browser||(typeof Browser=="undefined"?nil:Browser)}
function $TabManager(){return smalltalk.TabManager||(typeof TabManager=="undefined"?nil:TabManager)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(_st(window)._jQuery_("#amber"))._length()).__eq((0));
if(smalltalk.assert($1)){
_st($Browser())._open();
} else {
$2=_st(_st(window)._jQuery_("#amber"))._is_(":visible");
if(smalltalk.assert($2)){
_st(_st($TabManager())._current())._close();
} else {
_st(_st($TabManager())._current())._open();
};
};
return self}, function($ctx1) {$ctx1.fill(self,"toggleAmberIDE",{},smalltalk.TabManager.klass)})},
args: [],
source: "toggleAmberIDE\x0a\x09(window jQuery: '#amber') length = 0\x0a\x09\x09ifTrue: [ Browser open ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09((window jQuery: '#amber') is: ':visible')\x0a\x09\x09\x09\x09ifTrue: [ TabManager current close ]\x0a\x09\x09\x09\x09ifFalse: [ TabManager current open ] ]",
messageSends: ["ifTrue:ifFalse:", "open", "close", "current", "is:", "jQuery:", "=", "length"],
referencedClasses: ["Browser", "TabManager"]
}),
smalltalk.TabManager.klass);


smalltalk.addClass('TabWidget', smalltalk.Widget, ['div'], 'IDE');
smalltalk.addMethod(
smalltalk.method({
selector: "canBeClosed",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"canBeClosed",{},smalltalk.TabWidget)})},
args: [],
source: "canBeClosed\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "close",
category: 'actions',
fn: function (){
var self=this;
function $TabManager(){return smalltalk.TabManager||(typeof TabManager=="undefined"?nil:TabManager)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($TabManager())._current())._closeTab_(self);
return self}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.TabWidget)})},
args: [],
source: "close\x0a\x09TabManager current closeTab: self",
messageSends: ["closeTab:", "current"],
referencedClasses: ["TabManager"]
}),
smalltalk.TabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "hide",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@div"])._asJQuery())._hide();
return self}, function($ctx1) {$ctx1.fill(self,"hide",{},smalltalk.TabWidget)})},
args: [],
source: "hide\x0a\x09div asJQuery hide",
messageSends: ["hide", "asJQuery"],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.TabWidget)})},
args: [],
source: "label\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
category: 'actions',
fn: function (){
var self=this;
function $TabManager(){return smalltalk.TabManager||(typeof TabManager=="undefined"?nil:TabManager)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($TabManager())._current())._addTab_(self);
_st(_st($TabManager())._current())._selectTab_(self);
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.TabWidget)})},
args: [],
source: "open\x0a\x09TabManager current addTab: self.\x0a\x09TabManager current selectTab: self",
messageSends: ["addTab:", "current", "selectTab:"],
referencedClasses: ["TabManager"]
}),
smalltalk.TabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@div"])._asJQuery())._remove();
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.TabWidget)})},
args: [],
source: "remove\x0a\x09div asJQuery remove",
messageSends: ["remove", "asJQuery"],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBoxOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderBoxOn:",{html:html},smalltalk.TabWidget)})},
args: ["html"],
source: "renderBoxOn: html",
messageSends: [],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},smalltalk.TabWidget)})},
args: ["html"],
source: "renderButtonsOn: html",
messageSends: [],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("amberTool");
$2=_st($1)._yourself();
self["@div"]=$2;
self._renderTab();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.TabWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x09div := html div\x0a\x09\x09class: 'amberTool';\x0a\x09\x09yourself.\x0a\x09self renderTab",
messageSends: ["class:", "div", "yourself", "renderTab"],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTab",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
_st(self["@div"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._div();
_st($1)._class_("amber_box");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return self._renderBoxOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$2;
$3=_st(html)._div();
_st($3)._class_("amber_buttons");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return self._renderButtonsOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderTab",{},smalltalk.TabWidget)})},
args: [],
source: "renderTab\x0a\x09div contents: [:html |\x0a\x09\x09html div\x0a\x09\x09class: 'amber_box';\x0a\x09\x09with: [self renderBoxOn: html].\x0a\x09\x09html div\x0a\x09\x09class: 'amber_buttons';\x0a\x09\x09with: [self renderButtonsOn: html]]",
messageSends: ["contents:", "class:", "div", "with:", "renderBoxOn:", "renderButtonsOn:"],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@div"])._asJQuery())._show();
return self}, function($ctx1) {$ctx1.fill(self,"show",{},smalltalk.TabWidget)})},
args: [],
source: "show\x0a\x09div asJQuery show",
messageSends: ["show", "asJQuery"],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "update",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._renderTab();
return self}, function($ctx1) {$ctx1.fill(self,"update",{},smalltalk.TabWidget)})},
args: [],
source: "update\x0a\x09self renderTab",
messageSends: ["renderTab"],
referencedClasses: []
}),
smalltalk.TabWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "open",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._open();
return $1;
}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.TabWidget.klass)})},
args: [],
source: "open\x0a\x09^self new open",
messageSends: ["open", "new"],
referencedClasses: []
}),
smalltalk.TabWidget.klass);


smalltalk.addClass('Browser', smalltalk.TabWidget, ['selectedPackage', 'selectedClass', 'selectedProtocol', 'selectedMethod', 'packagesList', 'classesList', 'protocolsList', 'methodsList', 'sourceArea', 'tabsList', 'selectedTab', 'saveButton', 'classButtons', 'methodButtons', 'unsavedChanges'], 'IDE');
smalltalk.addMethod(
smalltalk.method({
selector: "addInstanceVariableNamed:toClass:",
category: 'actions',
fn: function (aString,aClass){
var self=this;
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(aClass)._instanceVariableNames())._copy();
_st($1)._add_(aString);
$2=_st($1)._yourself();
_st(_st($ClassBuilder())._new())._addSubclassOf_named_instanceVariableNames_package_(_st(aClass)._superclass(),_st(aClass)._name(),$2,_st(_st(aClass)._package())._name());
return self}, function($ctx1) {$ctx1.fill(self,"addInstanceVariableNamed:toClass:",{aString:aString,aClass:aClass},smalltalk.Browser)})},
args: ["aString", "aClass"],
source: "addInstanceVariableNamed: aString toClass: aClass\x0a\x09ClassBuilder new\x0a\x09\x09addSubclassOf: aClass superclass\x0a\x09\x09named: aClass name\x0a\x09\x09instanceVariableNames: (aClass instanceVariableNames copy add: aString; yourself)\x0a\x09\x09package: aClass package name",
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "superclass", "name", "add:", "copy", "instanceVariableNames", "yourself", "package", "new"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "addNewClass",
category: 'actions',
fn: function (){
var self=this;
var className;
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
className=_st(window)._prompt_("New class");
$1=_st(_st(className)._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(className)._notEmpty();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
_st($Object())._subclass_instanceVariableNames_package_(className,"",self._selectedPackage());
$2=self;
_st($2)._resetClassesList();
$3=_st($2)._updateClassesList();
$3;
self._selectClass_(_st(_st($Smalltalk())._current())._at_(className));
};
return self}, function($ctx1) {$ctx1.fill(self,"addNewClass",{className:className},smalltalk.Browser)})},
args: [],
source: "addNewClass\x0a\x09| className |\x0a\x09className := window prompt: 'New class'.\x0a\x09(className notNil and: [className notEmpty]) ifTrue: [\x0a\x09\x09Object subclass: className instanceVariableNames: '' package: self selectedPackage.\x0a\x09\x09\x09self\x0a\x09\x09\x09resetClassesList;\x0a\x09\x09\x09updateClassesList.\x0a\x09\x09self selectClass: (Smalltalk current at: className)]",
messageSends: ["prompt:", "ifTrue:", "subclass:instanceVariableNames:package:", "selectedPackage", "resetClassesList", "updateClassesList", "selectClass:", "at:", "current", "and:", "notEmpty", "notNil"],
referencedClasses: ["Object", "Smalltalk"]
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "addNewProtocol",
category: 'actions',
fn: function (){
var self=this;
var newProtocol;
return smalltalk.withContext(function($ctx1) { 
var $1;
newProtocol=_st(window)._prompt_("New method protocol");
$1=_st(_st(newProtocol)._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(newProtocol)._notEmpty();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
_st(self["@selectedMethod"])._category_(newProtocol);
self._setMethodProtocol_(newProtocol);
};
return self}, function($ctx1) {$ctx1.fill(self,"addNewProtocol",{newProtocol:newProtocol},smalltalk.Browser)})},
args: [],
source: "addNewProtocol\x0a\x09| newProtocol |\x0a\x09newProtocol := window prompt: 'New method protocol'.\x0a\x09(newProtocol notNil and: [newProtocol notEmpty]) ifTrue: [\x0a\x09selectedMethod category: newProtocol.\x0a\x09self setMethodProtocol: newProtocol]",
messageSends: ["prompt:", "ifTrue:", "category:", "setMethodProtocol:", "and:", "notEmpty", "notNil"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "canBeClosed",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"canBeClosed",{},smalltalk.Browser)})},
args: [],
source: "canBeClosed\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "cancelChanges",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@unsavedChanges"];
if(smalltalk.assert($2)){
$1=_st(window)._confirm_("Cancel changes?");
} else {
$1=true;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"cancelChanges",{},smalltalk.Browser)})},
args: [],
source: "cancelChanges\x0a\x09^unsavedChanges\x0a\x09ifTrue: [window confirm: 'Cancel changes?']\x0a\x09ifFalse: [true]",
messageSends: ["ifTrue:ifFalse:", "confirm:"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "classCommentSource",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@selectedClass"])._comment();
return $1;
}, function($ctx1) {$ctx1.fill(self,"classCommentSource",{},smalltalk.Browser)})},
args: [],
source: "classCommentSource\x0a\x09^selectedClass comment",
messageSends: ["comment"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "classDeclarationSource",
category: 'accessing',
fn: function (){
var self=this;
var stream;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7;
stream=""._writeStream();
$1=self["@selectedClass"];
if(($receiver = $1) == nil || $receiver == undefined){
$2=self._classDeclarationTemplate();
return $2;
} else {
$1;
};
$3=stream;
_st($3)._nextPutAll_(_st(_st(self["@selectedClass"])._superclass())._asString());
_st($3)._nextPutAll_(" subclass: #");
_st($3)._nextPutAll_(_st(self["@selectedClass"])._name());
_st($3)._nextPutAll_(_st(_st($String())._lf()).__comma(_st($String())._tab()));
$4=_st($3)._nextPutAll_("instanceVariableNames: '");
_st(_st(self["@selectedClass"])._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(stream)._nextPutAll_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(stream)._nextPutAll_(" ");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$5=stream;
_st($5)._nextPutAll_(_st("'".__comma(_st($String())._lf())).__comma(_st($String())._tab()));
_st($5)._nextPutAll_("package: '");
_st($5)._nextPutAll_(_st(self["@selectedClass"])._category());
$6=_st($5)._nextPutAll_("'");
$7=_st(stream)._contents();
return $7;
}, function($ctx1) {$ctx1.fill(self,"classDeclarationSource",{stream:stream},smalltalk.Browser)})},
args: [],
source: "classDeclarationSource\x0a\x09| stream |\x0a\x09stream := '' writeStream.\x0a\x09selectedClass ifNil: [^self classDeclarationTemplate].\x0a\x09stream\x0a\x09\x09nextPutAll: selectedClass superclass asString;\x0a\x09\x09nextPutAll: ' subclass: #';\x0a\x09\x09nextPutAll: selectedClass name;\x0a\x09\x09nextPutAll: String lf, String tab;\x0a\x09\x09nextPutAll: 'instanceVariableNames: '''.\x0a\x09selectedClass instanceVariableNames\x0a\x09\x09do: [:each | stream nextPutAll: each]\x0a\x09\x09separatedBy: [stream nextPutAll: ' '].\x0a\x09stream\x0a\x09\x09nextPutAll: '''', String lf, String tab;\x0a\x09\x09nextPutAll: 'package: ''';\x0a\x09\x09nextPutAll: selectedClass category;\x0a\x09\x09nextPutAll: ''''.\x0a\x09^stream contents",
messageSends: ["writeStream", "ifNil:", "classDeclarationTemplate", "nextPutAll:", "asString", "superclass", "name", ",", "tab", "lf", "do:separatedBy:", "instanceVariableNames", "category", "contents"],
referencedClasses: ["String"]
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "classDeclarationTemplate",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("Object subclass: #NameOfSubclass\x0a\x09instanceVariableNames: ''\x0a\x09package: '".__comma(self._selectedPackage())).__comma("'");
return $1;
}, function($ctx1) {$ctx1.fill(self,"classDeclarationTemplate",{},smalltalk.Browser)})},
args: [],
source: "classDeclarationTemplate\x0a\x09^'Object subclass: #NameOfSubclass\x0a\x09instanceVariableNames: ''''\x0a\x09package: ''', self selectedPackage, ''''",
messageSends: [",", "selectedPackage"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "classes",
category: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(_st($Smalltalk())._current())._classes())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._category()).__eq(self["@selectedPackage"]);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._sort_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(a)._name()).__lt(_st(b)._name());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})})))._asSet();
return $1;
}, function($ctx1) {$ctx1.fill(self,"classes",{},smalltalk.Browser)})},
args: [],
source: "classes\x0a\x09^((Smalltalk current classes\x0a\x09select: [:each | each category = selectedPackage])\x0a\x09sort: [:a :b | a name < b name]) asSet",
messageSends: ["asSet", "sort:", "<", "name", "select:", "=", "category", "classes", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "commitPackage",
category: 'actions',
fn: function (){
var self=this;
function $Package(){return smalltalk.Package||(typeof Package=="undefined"?nil:Package)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selectedPackage"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(_st($Package())._named_(self["@selectedPackage"]))._commit();
};
return self}, function($ctx1) {$ctx1.fill(self,"commitPackage",{},smalltalk.Browser)})},
args: [],
source: "commitPackage\x0a\x09selectedPackage ifNotNil: [\x0a\x09\x09(Package named: selectedPackage) commit ]",
messageSends: ["ifNotNil:", "commit", "named:"],
referencedClasses: ["Package"]
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "compile",
category: 'actions',
fn: function (){
var self=this;
var currentEditLine;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
self._disableSaveButton();
currentEditLine=_st(_st(self["@sourceArea"])._editor())._getCursor();
$1=_st(self["@selectedTab"]).__eq("comment");
if(smalltalk.assert($1)){
$2=self["@selectedClass"];
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
self._compileClassComment();
};
} else {
$3=_st(_st(self["@selectedProtocol"])._notNil())._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@selectedMethod"])._notNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($3)){
self._compileMethodDefinition();
} else {
self._compileDefinition();
};
};
_st(_st(self["@sourceArea"])._editor())._setCursor_(currentEditLine);
return self}, function($ctx1) {$ctx1.fill(self,"compile",{currentEditLine:currentEditLine},smalltalk.Browser)})},
args: [],
source: "compile\x0a\x09| currentEditLine |\x0a\x09self disableSaveButton.\x0a\x09currentEditLine := sourceArea editor getCursor.\x0a\x09selectedTab = #comment\x0a\x09ifTrue: [\x0a\x09\x09\x09selectedClass ifNotNil: [\x0a\x09\x09\x09\x09self compileClassComment]]\x0a\x09ifFalse: [\x0a\x09\x09\x09(selectedProtocol notNil or: [selectedMethod notNil])\x0a\x09\x09\x09\x09ifFalse: [self compileDefinition]\x0a\x09\x09\x09\x09ifTrue: [self compileMethodDefinition]].\x0a\x09sourceArea editor setCursor: currentEditLine.",
messageSends: ["disableSaveButton", "getCursor", "editor", "ifTrue:ifFalse:", "ifNotNil:", "compileClassComment", "ifFalse:ifTrue:", "compileDefinition", "compileMethodDefinition", "or:", "notNil", "=", "setCursor:"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "compileClassComment",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@selectedClass"])._comment_(_st(self["@sourceArea"])._val());
return self}, function($ctx1) {$ctx1.fill(self,"compileClassComment",{},smalltalk.Browser)})},
args: [],
source: "compileClassComment\x0a\x09selectedClass comment: sourceArea val",
messageSends: ["comment:", "val"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "compileDefinition",
category: 'actions',
fn: function (){
var self=this;
var newClass;
function $Compiler(){return smalltalk.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
newClass=_st(_st($Compiler())._new())._evaluateExpression_(_st(self["@sourceArea"])._val());
$1=self;
_st($1)._resetClassesList();
_st($1)._updateCategoriesList();
$2=_st($1)._updateClassesList();
self._selectClass_(newClass);
return self}, function($ctx1) {$ctx1.fill(self,"compileDefinition",{newClass:newClass},smalltalk.Browser)})},
args: [],
source: "compileDefinition\x0a\x09| newClass |\x0a\x09newClass := Compiler new evaluateExpression: sourceArea val.\x0a\x09self\x0a\x09resetClassesList;\x0a\x09updateCategoriesList;\x0a\x09updateClassesList.\x0a\x09self selectClass: newClass",
messageSends: ["evaluateExpression:", "val", "new", "resetClassesList", "updateCategoriesList", "updateClassesList", "selectClass:"],
referencedClasses: ["Compiler"]
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "compileMethodDefinition",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@selectedTab"]).__eq("instance");
if(smalltalk.assert($1)){
self._compileMethodDefinitionFor_(self["@selectedClass"]);
} else {
self._compileMethodDefinitionFor_(_st(self["@selectedClass"])._class());
};
return self}, function($ctx1) {$ctx1.fill(self,"compileMethodDefinition",{},smalltalk.Browser)})},
args: [],
source: "compileMethodDefinition\x0a\x09selectedTab = #instance\x0a\x09ifTrue: [self compileMethodDefinitionFor: selectedClass]\x0a\x09ifFalse: [self compileMethodDefinitionFor: selectedClass class]",
messageSends: ["ifTrue:ifFalse:", "compileMethodDefinitionFor:", "class", "="],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "compileMethodDefinitionFor:",
category: 'actions',
fn: function (aClass){
var self=this;
var compiler,method,source,node;
function $Compiler(){return smalltalk.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
var $early={};
try {
source=_st(self["@sourceArea"])._val();
$1=self["@selectedProtocol"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@selectedProtocol"]=_st(self["@selectedMethod"])._category();
self["@selectedProtocol"];
} else {
$1;
};
compiler=_st($Compiler())._new();
_st(compiler)._source_(source);
node=_st(compiler)._parse_(source);
$2=_st(node)._isParseFailure();
if(smalltalk.assert($2)){
$3=_st(window)._alert_(_st(_st("PARSE ERROR: ".__comma(_st(node)._reason())).__comma(", position: ")).__comma(_st(_st(node)._position())._asString()));
return $3;
};
_st(compiler)._currentClass_(aClass);
method=_st(compiler)._eval_(_st(compiler)._compileNode_(node));
_st(_st(compiler)._unknownVariables())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$4=_st(window)._at_(each);
if(($receiver = $4) == nil || $receiver == undefined){
$5=_st(window)._confirm_(_st("Declare '".__comma(each)).__comma("' as instance variable?"));
if(smalltalk.assert($5)){
self._addInstanceVariableNamed_toClass_(each,aClass);
$6=self._compileMethodDefinitionFor_(aClass);
throw $early=[$6];
};
} else {
return $4;
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(_st($ClassBuilder())._new())._installMethod_forClass_category_(method,aClass,self["@selectedProtocol"]);
self._updateMethodsList();
self._selectMethod_(method);
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"compileMethodDefinitionFor:",{aClass:aClass,compiler:compiler,method:method,source:source,node:node},smalltalk.Browser)})},
args: ["aClass"],
source: "compileMethodDefinitionFor: aClass\x0a\x09| compiler method source node |\x0a\x09source := sourceArea val.\x0a\x09selectedProtocol ifNil: [ selectedProtocol := selectedMethod category ].\x0a\x09compiler := Compiler new.\x0a\x09compiler source: source.\x0a\x09node := compiler parse: source.\x0a\x09node isParseFailure ifTrue: [\x0a\x09^window alert: 'PARSE ERROR: ', node reason, ', position: ', node position asString].\x0a\x09compiler currentClass: aClass.\x0a\x09method := compiler eval: (compiler compileNode: node).\x0a\x09compiler unknownVariables do: [:each |\x0a\x09\x09\x22Do not try to redeclare javascript's objects\x22\x0a\x09\x09(window at: each) ifNil: [\x0a\x09\x09(window confirm: 'Declare ''', each, ''' as instance variable?') ifTrue: [\x0a\x09\x09\x09self addInstanceVariableNamed: each toClass: aClass.\x0a\x09\x09\x09^self compileMethodDefinitionFor: aClass]]].\x0a\x09ClassBuilder new installMethod: method forClass: aClass category: selectedProtocol.\x0a\x09self updateMethodsList.\x0a\x09self selectMethod: method",
messageSends: ["val", "ifNil:", "category", "new", "source:", "parse:", "ifTrue:", "alert:", ",", "asString", "position", "reason", "isParseFailure", "currentClass:", "eval:", "compileNode:", "do:", "addInstanceVariableNamed:toClass:", "compileMethodDefinitionFor:", "confirm:", "at:", "unknownVariables", "installMethod:forClass:category:", "updateMethodsList", "selectMethod:"],
referencedClasses: ["Compiler", "ClassBuilder"]
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "copyClass",
category: 'actions',
fn: function (){
var self=this;
var className;
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
className=_st(window)._prompt_("Copy class");
$1=_st(_st(className)._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(className)._notEmpty();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
_st(_st($ClassBuilder())._new())._copyClass_named_(self._selectedClass(),className);
$2=self;
_st($2)._resetClassesList();
$3=_st($2)._updateClassesList();
$3;
self._selectClass_(_st(_st($Smalltalk())._current())._at_(className));
};
return self}, function($ctx1) {$ctx1.fill(self,"copyClass",{className:className},smalltalk.Browser)})},
args: [],
source: "copyClass\x0a\x09| className |\x0a\x09className := window prompt: 'Copy class'.\x0a\x09(className notNil and: [className notEmpty]) ifTrue: [\x0a\x09\x09ClassBuilder new copyClass: self selectedClass named: className.\x0a\x09\x09\x09self\x0a\x09\x09\x09resetClassesList;\x0a\x09\x09\x09updateClassesList.\x0a\x09\x09self selectClass: (Smalltalk current at: className)]",
messageSends: ["prompt:", "ifTrue:", "copyClass:named:", "selectedClass", "new", "resetClassesList", "updateClassesList", "selectClass:", "at:", "current", "and:", "notEmpty", "notNil"],
referencedClasses: ["ClassBuilder", "Smalltalk"]
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "declarationSource",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self["@selectedTab"]).__eq("instance");
if(smalltalk.assert($2)){
$1=self._classDeclarationSource();
} else {
$1=self._metaclassDeclarationSource();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"declarationSource",{},smalltalk.Browser)})},
args: [],
source: "declarationSource\x0a\x09^selectedTab = #instance\x0a\x09ifTrue: [self classDeclarationSource]\x0a\x09ifFalse: [self metaclassDeclarationSource]",
messageSends: ["ifTrue:ifFalse:", "classDeclarationSource", "metaclassDeclarationSource", "="],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "disableSaveButton",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@saveButton"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self["@saveButton"])._at_put_("disabled",true);
};
self["@unsavedChanges"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"disableSaveButton",{},smalltalk.Browser)})},
args: [],
source: "disableSaveButton\x0a\x09saveButton ifNotNil: [\x0a\x09saveButton at: 'disabled' put: true].\x0a\x09unsavedChanges := false",
messageSends: ["ifNotNil:", "at:put:"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "dummyMethodSource",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "messageSelectorAndArgumentNames\x0a\x09\x22comment stating purpose of message\x22\x0a\x0a\x09| temporary variable names |\x0a\x09statements";
}, function($ctx1) {$ctx1.fill(self,"dummyMethodSource",{},smalltalk.Browser)})},
args: [],
source: "dummyMethodSource\x0a\x09^'messageSelectorAndArgumentNames\x0a\x09\x22comment stating purpose of message\x22\x0a\x0a\x09| temporary variable names |\x0a\x09statements'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "handleSourceAreaKeyDown:",
category: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
if(anEvent.ctrlKey) {
		if(anEvent.keyCode === 83) { //ctrl+s
			self._compile();
			anEvent.preventDefault();
			return false;
		}
	}
	;
return self}, function($ctx1) {$ctx1.fill(self,"handleSourceAreaKeyDown:",{anEvent:anEvent},smalltalk.Browser)})},
args: ["anEvent"],
source: "handleSourceAreaKeyDown: anEvent\x0a\x09<if(anEvent.ctrlKey) {\x0a\x09\x09if(anEvent.keyCode === 83) { //ctrl+s\x0a\x09\x09\x09self._compile();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "hideClassButtons",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@classButtons"])._asJQuery())._hide();
return self}, function($ctx1) {$ctx1.fill(self,"hideClassButtons",{},smalltalk.Browser)})},
args: [],
source: "hideClassButtons\x0a\x09classButtons asJQuery hide",
messageSends: ["hide", "asJQuery"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "hideMethodButtons",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@methodButtons"])._asJQuery())._hide();
return self}, function($ctx1) {$ctx1.fill(self,"hideMethodButtons",{},smalltalk.Browser)})},
args: [],
source: "hideMethodButtons\x0a\x09methodButtons asJQuery hide",
messageSends: ["hide", "asJQuery"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Browser.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@selectedTab"]="instance";
self["@selectedPackage"]=_st(self._packages())._first();
self["@unsavedChanges"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Browser)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09selectedTab := #instance.\x0a\x09selectedPackage := self packages first.\x0a\x09unsavedChanges := false",
messageSends: ["initialize", "first", "packages"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@selectedClass"];
if(($receiver = $2) == nil || $receiver == undefined){
$1="Browser (nil)";
} else {
$1="Browser: ".__comma(_st(self["@selectedClass"])._name());
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.Browser)})},
args: [],
source: "label\x0a\x09^selectedClass\x0a\x09ifNil: ['Browser (nil)']\x0a\x09ifNotNil: ['Browser: ', selectedClass name]",
messageSends: ["ifNil:ifNotNil:", ",", "name"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "metaclassDeclarationSource",
category: 'accessing',
fn: function (){
var self=this;
var stream;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
stream=""._writeStream();
$1=self["@selectedClass"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
$2=stream;
_st($2)._nextPutAll_(_st(self["@selectedClass"])._asString());
_st($2)._nextPutAll_(" class ");
$3=_st($2)._nextPutAll_("instanceVariableNames: '");
$3;
_st(_st(_st(self["@selectedClass"])._class())._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(stream)._nextPutAll_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(stream)._nextPutAll_(" ");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(stream)._nextPutAll_("'");
};
$4=_st(stream)._contents();
return $4;
}, function($ctx1) {$ctx1.fill(self,"metaclassDeclarationSource",{stream:stream},smalltalk.Browser)})},
args: [],
source: "metaclassDeclarationSource\x0a\x09| stream |\x0a\x09stream := '' writeStream.\x0a\x09selectedClass ifNotNil: [\x0a\x09stream\x0a\x09\x09nextPutAll: selectedClass asString;\x0a\x09\x09nextPutAll: ' class ';\x0a\x09\x09nextPutAll: 'instanceVariableNames: '''.\x0a\x09selectedClass class instanceVariableNames\x0a\x09\x09do: [:each | stream nextPutAll: each]\x0a\x09\x09separatedBy: [stream nextPutAll: ' '].\x0a\x09stream nextPutAll: ''''].\x0a\x09^stream contents",
messageSends: ["writeStream", "ifNotNil:", "nextPutAll:", "asString", "do:separatedBy:", "instanceVariableNames", "class", "contents"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "methodSource",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@selectedMethod"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=self._dummyMethodSource();
} else {
$1=_st(self["@selectedMethod"])._source();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodSource",{},smalltalk.Browser)})},
args: [],
source: "methodSource\x0a\x09^selectedMethod\x0a\x09ifNil: [self dummyMethodSource]\x0a\x09ifNotNil: [selectedMethod source]",
messageSends: ["ifNil:ifNotNil:", "dummyMethodSource", "source"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "methods",
category: 'accessing',
fn: function (){
var self=this;
var klass;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$7,$8,$6,$5;
$1=_st(self["@selectedTab"]).__eq("comment");
if(smalltalk.assert($1)){
$2=[];
return $2;
};
$3=self["@selectedClass"];
if(($receiver = $3) == nil || $receiver == undefined){
$3;
} else {
$4=_st(self["@selectedTab"]).__eq("instance");
if(smalltalk.assert($4)){
klass=self["@selectedClass"];
} else {
klass=_st(self["@selectedClass"])._class();
};
klass;
};
$7=self["@selectedProtocol"];
if(($receiver = $7) == nil || $receiver == undefined){
$8=klass;
if(($receiver = $8) == nil || $receiver == undefined){
$6=[];
} else {
$6=_st(_st(klass)._methodDictionary())._values();
};
} else {
$6=_st(_st(_st(klass)._methodDictionary())._values())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._category()).__eq(self["@selectedProtocol"]);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
};
$5=_st($6)._sort_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(a)._selector()).__lt(_st(b)._selector());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}));
return $5;
}, function($ctx1) {$ctx1.fill(self,"methods",{klass:klass},smalltalk.Browser)})},
args: [],
source: "methods\x0a\x09| klass |\x0a\x09selectedTab = #comment ifTrue: [^#()].\x0a\x09selectedClass ifNotNil: [\x0a\x09klass := selectedTab = #instance\x0a\x09\x09ifTrue: [selectedClass]\x0a\x09\x09ifFalse: [selectedClass class]].\x0a\x09^(selectedProtocol\x0a\x09ifNil: [\x0a\x09\x09klass\x0a\x09\x09ifNil: [#()]\x0a\x09\x09ifNotNil: [klass methodDictionary values]]\x0a\x09ifNotNil: [\x0a\x09\x09klass methodDictionary values select: [:each |\x0a\x09\x09each category = selectedProtocol]]) sort: [:a :b | a selector < b selector]",
messageSends: ["ifTrue:", "=", "ifNotNil:", "ifTrue:ifFalse:", "class", "sort:", "<", "selector", "ifNil:ifNotNil:", "values", "methodDictionary", "select:", "category"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "packages",
category: 'accessing',
fn: function (){
var self=this;
var packages;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
packages=_st($Array())._new();
_st(_st(_st($Smalltalk())._current())._classes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(packages)._includes_(_st(each)._category());
if(! smalltalk.assert($1)){
return _st(packages)._add_(_st(each)._category());
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=_st(packages)._sort();
return $2;
}, function($ctx1) {$ctx1.fill(self,"packages",{packages:packages},smalltalk.Browser)})},
args: [],
source: "packages\x0a\x09| packages |\x0a\x09packages := Array new.\x0a\x09Smalltalk current classes do: [:each |\x0a\x09(packages includes: each category) ifFalse: [\x0a\x09\x09packages add: each category]].\x0a\x09^packages sort",
messageSends: ["new", "do:", "ifFalse:", "add:", "category", "includes:", "classes", "current", "sort"],
referencedClasses: ["Array", "Smalltalk"]
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "protocols",
category: 'accessing',
fn: function (){
var self=this;
var klass;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
$1=self["@selectedClass"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
$2=_st(self["@selectedTab"]).__eq("comment");
if(smalltalk.assert($2)){
$3=[];
return $3;
};
$4=_st(self["@selectedTab"]).__eq("instance");
if(smalltalk.assert($4)){
klass=self["@selectedClass"];
} else {
klass=_st(self["@selectedClass"])._class();
};
klass;
$5=_st(_st(klass)._methodDictionary())._isEmpty();
if(smalltalk.assert($5)){
$6=_st($Array())._with_("not yet classified");
return $6;
};
$7=_st(klass)._protocols();
return $7;
};
$8=_st($Array())._new();
return $8;
}, function($ctx1) {$ctx1.fill(self,"protocols",{klass:klass},smalltalk.Browser)})},
args: [],
source: "protocols\x0a\x09| klass |\x0a\x09selectedClass ifNotNil: [\x0a\x09selectedTab = #comment ifTrue: [^#()].\x0a\x09klass := selectedTab = #instance\x0a\x09\x09ifTrue: [selectedClass]\x0a\x09\x09ifFalse: [selectedClass class].\x0a\x09klass methodDictionary isEmpty ifTrue: [\x0a\x09\x09^Array with: 'not yet classified'].\x0a\x09^klass protocols].\x0a\x09^Array new",
messageSends: ["ifNotNil:", "ifTrue:", "=", "ifTrue:ifFalse:", "class", "with:", "isEmpty", "methodDictionary", "protocols", "new"],
referencedClasses: ["Array"]
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "removeClass",
category: 'actions',
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(window)._confirm_(_st("Do you really want to remove ".__comma(_st(self["@selectedClass"])._name())).__comma("?"));
if(smalltalk.assert($1)){
_st(_st($Smalltalk())._current())._removeClass_(self["@selectedClass"]);
self._resetClassesList();
self._selectClass_(nil);
};
return self}, function($ctx1) {$ctx1.fill(self,"removeClass",{},smalltalk.Browser)})},
args: [],
source: "removeClass\x0a\x09(window confirm: 'Do you really want to remove ', selectedClass name, '?')\x0a\x09ifTrue: [\x0a\x09\x09Smalltalk current removeClass: selectedClass.\x0a\x09\x09self resetClassesList.\x0a\x09\x09self selectClass: nil]",
messageSends: ["ifTrue:", "removeClass:", "current", "resetClassesList", "selectClass:", "confirm:", ",", "name"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMethod",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._cancelChanges();
if(smalltalk.assert($1)){
$2=_st(window)._confirm_(_st("Do you really want to remove #".__comma(_st(self["@selectedMethod"])._selector())).__comma("?"));
if(smalltalk.assert($2)){
$3=_st(self["@selectedTab"]).__eq("instance");
if(smalltalk.assert($3)){
_st(self["@selectedClass"])._removeCompiledMethod_(self["@selectedMethod"]);
} else {
_st(_st(self["@selectedClass"])._class())._removeCompiledMethod_(self["@selectedMethod"]);
};
self._selectMethod_(nil);
};
};
return self}, function($ctx1) {$ctx1.fill(self,"removeMethod",{},smalltalk.Browser)})},
args: [],
source: "removeMethod\x0a\x09self cancelChanges ifTrue: [\x0a\x09(window confirm: 'Do you really want to remove #', selectedMethod selector, '?')\x0a\x09\x09ifTrue: [\x0a\x09\x09selectedTab = #instance\x0a\x09\x09\x09ifTrue: [selectedClass removeCompiledMethod: selectedMethod]\x0a\x09\x09\x09ifFalse: [selectedClass class removeCompiledMethod: selectedMethod].\x0a\x09\x09self selectMethod: nil]]",
messageSends: ["ifTrue:", "ifTrue:ifFalse:", "removeCompiledMethod:", "class", "=", "selectMethod:", "confirm:", ",", "selector", "cancelChanges"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "removePackage",
category: 'actions',
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(window)._confirm_(_st("Do you really want to remove the whole package ".__comma(self["@selectedPackage"])).__comma(" with all its classes?"));
if(smalltalk.assert($1)){
_st(_st($Smalltalk())._current())._removePackage_(self["@selectedPackage"]);
self._updateCategoriesList();
};
return self}, function($ctx1) {$ctx1.fill(self,"removePackage",{},smalltalk.Browser)})},
args: [],
source: "removePackage\x0a\x0a\x09(window confirm: 'Do you really want to remove the whole package ', selectedPackage, ' with all its classes?')\x0a\x09ifTrue: [\x0a\x09\x09Smalltalk current removePackage: selectedPackage.\x0a\x09\x09self updateCategoriesList]",
messageSends: ["ifTrue:", "removePackage:", "current", "updateCategoriesList", "confirm:", ","],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "renameClass",
category: 'actions',
fn: function (){
var self=this;
var newName;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
newName=_st(window)._prompt_("Rename class ".__comma(_st(self["@selectedClass"])._name()));
$1=_st(_st(newName)._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(newName)._notEmpty();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
_st(self["@selectedClass"])._rename_(newName);
$2=self;
_st($2)._updateClassesList();
$3=_st($2)._updateSourceAndButtons();
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"renameClass",{newName:newName},smalltalk.Browser)})},
args: [],
source: "renameClass\x0a\x09| newName |\x0a\x09newName := window prompt: 'Rename class ', selectedClass name.\x0a\x09(newName notNil and: [newName notEmpty]) ifTrue: [\x0a\x09selectedClass rename: newName.\x0a\x09self\x0a\x09\x09updateClassesList;\x0a\x09\x09updateSourceAndButtons]",
messageSends: ["prompt:", ",", "name", "ifTrue:", "rename:", "updateClassesList", "updateSourceAndButtons", "and:", "notEmpty", "notNil"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "renamePackage",
category: 'actions',
fn: function (){
var self=this;
var newName;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
newName=_st(window)._prompt_("Rename package ".__comma(self["@selectedPackage"]));
$1=newName;
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
$2=_st(newName)._notEmpty();
if(smalltalk.assert($2)){
_st(_st($Smalltalk())._current())._renamePackage_to_(self["@selectedPackage"],newName);
self._updateCategoriesList();
};
};
return self}, function($ctx1) {$ctx1.fill(self,"renamePackage",{newName:newName},smalltalk.Browser)})},
args: [],
source: "renamePackage\x0a\x0a\x09| newName |\x0a\x09newName := window prompt: 'Rename package ', selectedPackage.\x0a\x09newName ifNotNil: [\x0a\x09newName notEmpty ifTrue: [\x0a\x09Smalltalk current renamePackage: selectedPackage to: newName.\x0a\x09self updateCategoriesList]]",
messageSends: ["prompt:", ",", "ifNotNil:", "ifTrue:", "renamePackage:to:", "current", "updateCategoriesList", "notEmpty"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBottomPanelOn:",
category: 'rendering',
fn: function (html){
var self=this;
function $SourceArea(){return smalltalk.SourceArea||(typeof SourceArea=="undefined"?nil:SourceArea)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("amber_sourceCode");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self["@sourceArea"]=_st($SourceArea())._new();
self["@sourceArea"];
_st(self["@sourceArea"])._renderOn_(html);
_st(self["@sourceArea"])._onKeyDown_((function(e){
return smalltalk.withContext(function($ctx3) {
return self._handleSourceAreaKeyDown_(e);
}, function($ctx3) {$ctx3.fillBlock({e:e},$ctx2)})}));
return _st(self["@sourceArea"])._onKeyUp_((function(){
return smalltalk.withContext(function($ctx3) {
return self._updateStatus();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderBottomPanelOn:",{html:html},smalltalk.Browser)})},
args: ["html"],
source: "renderBottomPanelOn: html\x0a\x09html div\x0a\x09class: 'amber_sourceCode';\x0a\x09with: [\x0a\x09\x09sourceArea := SourceArea new.\x0a\x09\x09sourceArea renderOn: html.\x0a\x09\x09\x09sourceArea onKeyDown: [:e |\x0a\x09\x09\x09\x09self handleSourceAreaKeyDown: e].\x0a\x09\x09sourceArea onKeyUp: [self updateStatus]]",
messageSends: ["class:", "div", "with:", "new", "renderOn:", "onKeyDown:", "handleSourceAreaKeyDown:", "onKeyUp:", "updateStatus"],
referencedClasses: ["SourceArea"]
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBoxOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._renderTopPanelOn_(html);
_st($1)._renderTabsOn_(html);
$2=_st($1)._renderBottomPanelOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderBoxOn:",{html:html},smalltalk.Browser)})},
args: ["html"],
source: "renderBoxOn: html\x0a\x09self\x0a\x09renderTopPanelOn: html;\x0a\x09renderTabsOn: html;\x0a\x09renderBottomPanelOn: html",
messageSends: ["renderTopPanelOn:", "renderTabsOn:", "renderBottomPanelOn:"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$6,$7,$8,$9,$10,$4;
self["@saveButton"]=_st(html)._button();
$1=self["@saveButton"];
_st($1)._with_("Save");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._compile();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@methodButtons"]=_st(html)._span();
self["@classButtons"]=_st(html)._span();
$3=_st(html)._div();
_st($3)._class_("right");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$5=_st(html)._button();
_st($5)._with_("DoIt");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self["@sourceArea"])._doIt();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$6;
$7=_st(html)._button();
_st($7)._with_("PrintIt");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self["@sourceArea"])._printIt();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$8;
$9=_st(html)._button();
_st($9)._with_("InspectIt");
$10=_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self["@sourceArea"])._inspectIt();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return $10;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self._updateSourceAndButtons();
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},smalltalk.Browser)})},
args: ["html"],
source: "renderButtonsOn: html\x0a\x09saveButton := html button.\x0a\x09saveButton\x0a\x09with: 'Save';\x0a\x09onClick: [self compile].\x0a\x09methodButtons := html span.\x0a\x09classButtons := html span.\x0a\x09html div\x0a\x09class: 'right';\x0a\x09with: [\x0a\x09\x09html button\x0a\x09\x09\x09with: 'DoIt';\x0a\x09\x09\x09onClick: [sourceArea doIt].\x0a\x09\x09html button\x0a\x09\x09\x09with: 'PrintIt';\x0a\x09\x09\x09onClick: [sourceArea printIt].\x0a\x09\x09html button with: 'InspectIt';\x0a\x09\x09\x09onClick: [sourceArea inspectIt]].\x0a\x09self updateSourceAndButtons",
messageSends: ["button", "with:", "onClick:", "compile", "span", "class:", "div", "doIt", "printIt", "inspectIt", "updateSourceAndButtons"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTabsOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@tabsList"]=_st(_st(html)._ul())._class_("amber_tabs amber_browser");
self._updateTabsList();
return self}, function($ctx1) {$ctx1.fill(self,"renderTabsOn:",{html:html},smalltalk.Browser)})},
args: ["html"],
source: "renderTabsOn: html\x0a\x09tabsList := html ul class: 'amber_tabs amber_browser'.\x0a\x09self updateTabsList.",
messageSends: ["class:", "ul", "updateTabsList"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTopPanelOn:",
category: 'rendering',
fn: function (html){
var self=this;
function $ClassesList(){return smalltalk.ClassesList||(typeof ClassesList=="undefined"?nil:ClassesList)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$6,$7,$8,$9,$10,$4,$11,$12,$2;
$1=_st(html)._div();
_st($1)._class_("top");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self["@packagesList"]=_st(_st(html)._ul())._class_("amber_column browser packages");
self["@packagesList"];
$3=_st(html)._div();
_st($3)._class_("amber_packagesButtons");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$5=_st(html)._button();
_st($5)._title_("Commit classes in this package to disk");
_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._commitPackage();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
$6=_st($5)._with_("Commit");
$6;
$7=_st(html)._button();
_st($7)._title_("Rename package");
_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._renamePackage();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
$8=_st($7)._with_("Rename");
$8;
$9=_st(html)._button();
_st($9)._title_("Remove this package from the system");
_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._removePackage();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
$10=_st($9)._with_("Remove");
return $10;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$4;
self["@classesList"]=_st($ClassesList())._on_(self);
self["@classesList"];
_st(self["@classesList"])._renderOn_(html);
self["@protocolsList"]=_st(_st(html)._ul())._class_("amber_column browser protocols");
self["@protocolsList"];
self["@methodsList"]=_st(_st(html)._ul())._class_("amber_column browser methods");
self["@methodsList"];
$11=self;
_st($11)._updateCategoriesList();
_st($11)._updateClassesList();
_st($11)._updateProtocolsList();
$12=_st($11)._updateMethodsList();
$12;
return _st(_st(html)._div())._class_("amber_clear");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderTopPanelOn:",{html:html},smalltalk.Browser)})},
args: ["html"],
source: "renderTopPanelOn: html\x0a\x09html div\x0a\x09\x09class: 'top';\x0a\x09\x09with: [\x0a\x09\x09\x09packagesList := html ul class: 'amber_column browser packages'.\x0a\x09\x09\x09\x09html div class: 'amber_packagesButtons'; with: [\x0a\x09\x09\x09\x09html button\x0a\x09\x09\x09\x09\x09title: 'Commit classes in this package to disk';\x0a\x09\x09\x09\x09\x09onClick: [self commitPackage];\x0a\x09\x09\x09\x09\x09with: 'Commit'.\x0a\x09\x09\x09\x09\x09html button\x0a\x09\x09\x09\x09\x09title: 'Rename package';\x0a\x09\x09\x09\x09\x09onClick: [self renamePackage];\x0a\x09\x09\x09\x09\x09with: 'Rename'.\x0a\x09\x09\x09\x09\x09html button\x0a\x09\x09\x09\x09\x09title: 'Remove this package from the system';\x0a\x09\x09\x09\x09\x09onClick: [self removePackage];\x0a\x09\x09\x09\x09\x09with: 'Remove'].\x0a\x09\x09\x09classesList := ClassesList on: self.\x0a\x09\x09\x09classesList renderOn: html.\x0a\x09\x09\x09protocolsList := html ul class: 'amber_column browser protocols'.\x0a\x09\x09\x09methodsList := html ul class: 'amber_column browser methods'.\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09updateCategoriesList;\x0a\x09\x09\x09\x09updateClassesList;\x0a\x09\x09\x09\x09updateProtocolsList;\x0a\x09\x09\x09\x09updateMethodsList.\x0a\x09\x09\x09html div class: 'amber_clear']",
messageSends: ["class:", "div", "with:", "ul", "title:", "button", "onClick:", "commitPackage", "renamePackage", "removePackage", "on:", "renderOn:", "updateCategoriesList", "updateClassesList", "updateProtocolsList", "updateMethodsList"],
referencedClasses: ["ClassesList"]
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "resetClassesList",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@classesList"])._resetNodes();
return self}, function($ctx1) {$ctx1.fill(self,"resetClassesList",{},smalltalk.Browser)})},
args: [],
source: "resetClassesList\x0a\x09classesList resetNodes",
messageSends: ["resetNodes"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "search:",
category: 'actions',
fn: function (aString){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._cancelChanges();
if(smalltalk.assert($1)){
var searchedClass;
searchedClass=_st(_st($Smalltalk())._current())._at_(aString);
searchedClass;
$2=_st(searchedClass)._isClass();
if(smalltalk.assert($2)){
_st(self._class())._openOn_(searchedClass);
} else {
self._searchReferencesOf_(aString);
};
};
return self}, function($ctx1) {$ctx1.fill(self,"search:",{aString:aString},smalltalk.Browser)})},
args: ["aString"],
source: "search: aString\x0a\x09self cancelChanges ifTrue: [| searchedClass |\x0a\x09\x09searchedClass := Smalltalk current at: aString.\x0a\x09\x09searchedClass isClass\x0a\x09\x09\x09ifTrue: [self class openOn: searchedClass]\x0a\x09\x09\x09ifFalse: [self searchReferencesOf: aString]]",
messageSends: ["ifTrue:", "at:", "current", "ifTrue:ifFalse:", "openOn:", "class", "searchReferencesOf:", "isClass", "cancelChanges"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "searchClassReferences",
category: 'actions',
fn: function (){
var self=this;
function $ReferencesBrowser(){return smalltalk.ReferencesBrowser||(typeof ReferencesBrowser=="undefined"?nil:ReferencesBrowser)}
return smalltalk.withContext(function($ctx1) { 
_st($ReferencesBrowser())._search_(_st(self["@selectedClass"])._name());
return self}, function($ctx1) {$ctx1.fill(self,"searchClassReferences",{},smalltalk.Browser)})},
args: [],
source: "searchClassReferences\x0a\x09ReferencesBrowser search: selectedClass name",
messageSends: ["search:", "name"],
referencedClasses: ["ReferencesBrowser"]
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "searchReferencesOf:",
category: 'actions',
fn: function (aString){
var self=this;
function $ReferencesBrowser(){return smalltalk.ReferencesBrowser||(typeof ReferencesBrowser=="undefined"?nil:ReferencesBrowser)}
return smalltalk.withContext(function($ctx1) { 
_st($ReferencesBrowser())._search_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"searchReferencesOf:",{aString:aString},smalltalk.Browser)})},
args: ["aString"],
source: "searchReferencesOf: aString\x0a\x09ReferencesBrowser search: aString",
messageSends: ["search:"],
referencedClasses: ["ReferencesBrowser"]
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "selectCategory:",
category: 'actions',
fn: function (aCategory){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._cancelChanges();
if(smalltalk.assert($1)){
self["@selectedPackage"]=aCategory;
self["@selectedPackage"];
self["@selectedMethod"]=nil;
self["@selectedProtocol"]=self["@selectedMethod"];
self["@selectedClass"]=self["@selectedProtocol"];
self["@selectedClass"];
self._resetClassesList();
$2=self;
_st($2)._updateCategoriesList();
_st($2)._updateClassesList();
_st($2)._updateProtocolsList();
_st($2)._updateMethodsList();
$3=_st($2)._updateSourceAndButtons();
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"selectCategory:",{aCategory:aCategory},smalltalk.Browser)})},
args: ["aCategory"],
source: "selectCategory: aCategory\x0a\x09self cancelChanges ifTrue: [\x0a\x09selectedPackage := aCategory.\x0a\x09selectedClass := selectedProtocol := selectedMethod := nil.\x0a\x09self resetClassesList.\x0a\x09self\x0a\x09\x09updateCategoriesList;\x0a\x09\x09updateClassesList;\x0a\x09\x09updateProtocolsList;\x0a\x09\x09updateMethodsList;\x0a\x09\x09updateSourceAndButtons]",
messageSends: ["ifTrue:", "resetClassesList", "updateCategoriesList", "updateClassesList", "updateProtocolsList", "updateMethodsList", "updateSourceAndButtons", "cancelChanges"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "selectClass:",
category: 'actions',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._cancelChanges();
if(smalltalk.assert($1)){
self["@selectedClass"]=aClass;
self["@selectedClass"];
self["@selectedMethod"]=nil;
self["@selectedProtocol"]=self["@selectedMethod"];
self["@selectedProtocol"];
$2=self;
_st($2)._updateClassesList();
_st($2)._updateProtocolsList();
_st($2)._updateMethodsList();
$3=_st($2)._updateSourceAndButtons();
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"selectClass:",{aClass:aClass},smalltalk.Browser)})},
args: ["aClass"],
source: "selectClass: aClass\x0a\x09self cancelChanges ifTrue: [\x0a\x09selectedClass := aClass.\x0a\x09selectedProtocol := selectedMethod := nil.\x0a\x09self\x0a\x09\x09updateClassesList;\x0a\x09\x09updateProtocolsList;\x0a\x09\x09updateMethodsList;\x0a\x09\x09updateSourceAndButtons]",
messageSends: ["ifTrue:", "updateClassesList", "updateProtocolsList", "updateMethodsList", "updateSourceAndButtons", "cancelChanges"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "selectMethod:",
category: 'actions',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._cancelChanges();
if(smalltalk.assert($1)){
self["@selectedMethod"]=aMethod;
self["@selectedMethod"];
$2=self;
_st($2)._updateProtocolsList();
_st($2)._updateMethodsList();
$3=_st($2)._updateSourceAndButtons();
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"selectMethod:",{aMethod:aMethod},smalltalk.Browser)})},
args: ["aMethod"],
source: "selectMethod: aMethod\x0a\x09self cancelChanges ifTrue: [\x0a\x09selectedMethod := aMethod.\x0a\x09self\x0a\x09\x09updateProtocolsList;\x0a\x09\x09updateMethodsList;\x0a\x09\x09updateSourceAndButtons]",
messageSends: ["ifTrue:", "updateProtocolsList", "updateMethodsList", "updateSourceAndButtons", "cancelChanges"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "selectProtocol:",
category: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._cancelChanges();
if(smalltalk.assert($1)){
self["@selectedProtocol"]=aString;
self["@selectedProtocol"];
self["@selectedMethod"]=nil;
self["@selectedMethod"];
$2=self;
_st($2)._updateProtocolsList();
_st($2)._updateMethodsList();
$3=_st($2)._updateSourceAndButtons();
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"selectProtocol:",{aString:aString},smalltalk.Browser)})},
args: ["aString"],
source: "selectProtocol: aString\x0a\x09self cancelChanges ifTrue: [\x0a\x09selectedProtocol := aString.\x0a\x09selectedMethod := nil.\x0a\x09self\x0a\x09\x09updateProtocolsList;\x0a\x09\x09updateMethodsList;\x0a\x09\x09updateSourceAndButtons]",
messageSends: ["ifTrue:", "updateProtocolsList", "updateMethodsList", "updateSourceAndButtons", "cancelChanges"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "selectTab:",
category: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._cancelChanges();
if(smalltalk.assert($1)){
self["@selectedTab"]=aString;
self["@selectedTab"];
self._selectProtocol_(nil);
self._updateTabsList();
};
return self}, function($ctx1) {$ctx1.fill(self,"selectTab:",{aString:aString},smalltalk.Browser)})},
args: ["aString"],
source: "selectTab: aString\x0a\x09self cancelChanges ifTrue: [\x0a\x09selectedTab := aString.\x0a\x09self selectProtocol: nil.\x0a\x09self updateTabsList]",
messageSends: ["ifTrue:", "selectProtocol:", "updateTabsList", "cancelChanges"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selectedClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedClass",{},smalltalk.Browser)})},
args: [],
source: "selectedClass\x0a\x09^selectedClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedPackage",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selectedPackage"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedPackage",{},smalltalk.Browser)})},
args: [],
source: "selectedPackage\x0a\x09^selectedPackage",
messageSends: [],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "setMethodProtocol:",
category: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=self._cancelChanges();
if(smalltalk.assert($1)){
$2=_st(self._protocols())._includes_(aString);
if(smalltalk.assert($2)){
_st(self["@selectedMethod"])._category_(aString);
self["@selectedProtocol"]=aString;
self["@selectedProtocol"];
self["@selectedMethod"]=self["@selectedMethod"];
self["@selectedMethod"];
$3=self;
_st($3)._updateProtocolsList();
_st($3)._updateMethodsList();
$4=_st($3)._updateSourceAndButtons();
$4;
} else {
self._addNewProtocol();
};
};
return self}, function($ctx1) {$ctx1.fill(self,"setMethodProtocol:",{aString:aString},smalltalk.Browser)})},
args: ["aString"],
source: "setMethodProtocol: aString\x0a\x09self cancelChanges ifTrue: [\x0a\x09(self protocols includes: aString)\x0a\x09\x09ifFalse: [self addNewProtocol]\x0a\x09\x09ifTrue: [\x0a\x09\x09selectedMethod category: aString.\x0a\x09\x09selectedProtocol := aString.\x0a\x09\x09selectedMethod := selectedMethod.\x0a\x09\x09self\x0a\x09\x09\x09updateProtocolsList;\x0a\x09\x09\x09updateMethodsList;\x0a\x09\x09\x09updateSourceAndButtons]]",
messageSends: ["ifTrue:", "ifFalse:ifTrue:", "addNewProtocol", "category:", "updateProtocolsList", "updateMethodsList", "updateSourceAndButtons", "includes:", "protocols", "cancelChanges"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "showClassButtons",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@classButtons"])._asJQuery())._show();
return self}, function($ctx1) {$ctx1.fill(self,"showClassButtons",{},smalltalk.Browser)})},
args: [],
source: "showClassButtons\x0a\x09classButtons asJQuery show",
messageSends: ["show", "asJQuery"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "showMethodButtons",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@methodButtons"])._asJQuery())._show();
return self}, function($ctx1) {$ctx1.fill(self,"showMethodButtons",{},smalltalk.Browser)})},
args: [],
source: "showMethodButtons\x0a\x09methodButtons asJQuery show",
messageSends: ["show", "asJQuery"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "source",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$5,$4;
$1=_st(self["@selectedTab"]).__eq("comment");
if(! smalltalk.assert($1)){
$3=_st(_st(self["@selectedProtocol"])._notNil())._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@selectedMethod"])._notNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($3)){
$2=self._methodSource();
} else {
$2=self._declarationSource();
};
return $2;
};
$5=self["@selectedClass"];
if(($receiver = $5) == nil || $receiver == undefined){
$4="";
} else {
$4=self._classCommentSource();
};
return $4;
}, function($ctx1) {$ctx1.fill(self,"source",{},smalltalk.Browser)})},
args: [],
source: "source\x0a\x09selectedTab = #comment ifFalse: [\x0a\x09^(selectedProtocol notNil or: [selectedMethod notNil])\x0a\x09\x09ifFalse: [self declarationSource]\x0a\x09\x09ifTrue: [self methodSource]].\x0a\x09^selectedClass\x0a\x09ifNil: ['']\x0a\x09ifNotNil: [self classCommentSource]",
messageSends: ["ifFalse:", "ifFalse:ifTrue:", "declarationSource", "methodSource", "or:", "notNil", "=", "ifNil:ifNotNil:", "classCommentSource"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "updateCategoriesList",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
_st(self["@packagesList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(self._packages())._do_((function(each){
var li,label;
return smalltalk.withContext(function($ctx3) {
$1=_st(each)._isEmpty();
if(smalltalk.assert($1)){
label="Unclassified";
label;
} else {
label=each;
label;
};
li=_st(html)._li();
li;
$2=_st(self["@selectedPackage"]).__eq(each);
if(smalltalk.assert($2)){
_st(li)._class_("selected");
};
$3=li;
_st($3)._with_(label);
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._selectCategory_(each);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
return $4;
}, function($ctx3) {$ctx3.fillBlock({each:each,li:li,label:label},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateCategoriesList",{},smalltalk.Browser)})},
args: [],
source: "updateCategoriesList\x0a\x09packagesList contents: [:html |\x0a\x09self packages do: [:each || li label |\x0a\x09\x09each isEmpty\x0a\x09\x09ifTrue: [label := 'Unclassified']\x0a\x09\x09ifFalse: [label := each].\x0a\x09\x09li := html li.\x0a\x09\x09selectedPackage = each ifTrue: [\x0a\x09\x09li class: 'selected'].\x0a\x09\x09li\x0a\x09\x09with: label;\x0a\x09\x09onClick: [self selectCategory: each]]]",
messageSends: ["contents:", "do:", "ifTrue:ifFalse:", "isEmpty", "li", "ifTrue:", "class:", "=", "with:", "onClick:", "selectCategory:", "packages"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "updateClassesList",
category: 'updating',
fn: function (){
var self=this;
function $TabManager(){return smalltalk.TabManager||(typeof TabManager=="undefined"?nil:TabManager)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($TabManager())._current())._update();
_st(self["@classesList"])._updateNodes();
return self}, function($ctx1) {$ctx1.fill(self,"updateClassesList",{},smalltalk.Browser)})},
args: [],
source: "updateClassesList\x0a\x09TabManager current update.\x0a\x09classesList updateNodes",
messageSends: ["update", "current", "updateNodes"],
referencedClasses: ["TabManager"]
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMethodsList",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
_st(self["@methodsList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(self._methods())._do_((function(each){
var li;
return smalltalk.withContext(function($ctx3) {
li=_st(html)._li();
li;
$1=_st(self["@selectedMethod"]).__eq(each);
if(smalltalk.assert($1)){
_st(li)._class_("selected");
};
$2=li;
_st($2)._with_(_st(each)._selector());
$3=_st($2)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._selectMethod_(each);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
return $3;
}, function($ctx3) {$ctx3.fillBlock({each:each,li:li},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateMethodsList",{},smalltalk.Browser)})},
args: [],
source: "updateMethodsList\x0a\x09methodsList contents: [:html |\x0a\x09self methods do: [:each || li |\x0a\x09\x09li := html li.\x0a\x09\x09selectedMethod = each ifTrue: [\x0a\x09\x09li class: 'selected'].\x0a\x09\x09li\x0a\x09\x09with: each selector;\x0a\x09\x09onClick: [self selectMethod: each]]]",
messageSends: ["contents:", "do:", "li", "ifTrue:", "class:", "=", "with:", "selector", "onClick:", "selectMethod:", "methods"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "updateProtocolsList",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
_st(self["@protocolsList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(self._protocols())._do_((function(each){
var li;
return smalltalk.withContext(function($ctx3) {
li=_st(html)._li();
li;
$1=_st(self["@selectedProtocol"]).__eq(each);
if(smalltalk.assert($1)){
_st(li)._class_("selected");
};
$2=li;
_st($2)._with_(each);
$3=_st($2)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._selectProtocol_(each);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
return $3;
}, function($ctx3) {$ctx3.fillBlock({each:each,li:li},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateProtocolsList",{},smalltalk.Browser)})},
args: [],
source: "updateProtocolsList\x0a\x09protocolsList contents: [:html |\x0a\x09self protocols do: [:each || li |\x0a\x09\x09li := html li.\x0a\x09\x09selectedProtocol = each ifTrue: [\x0a\x09\x09li class: 'selected'].\x0a\x09\x09li\x0a\x09\x09with: each;\x0a\x09\x09onClick: [self selectProtocol: each]]]",
messageSends: ["contents:", "do:", "li", "ifTrue:", "class:", "=", "with:", "onClick:", "selectProtocol:", "protocols"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSourceAndButtons",
category: 'updating',
fn: function (){
var self=this;
var currentProtocol;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$15,$16,$17,$18,$19,$20,$14,$21,$22,$24,$25,$26,$27,$23,$28,$29;
self._disableSaveButton();
_st(self["@classButtons"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._button();
_st($1)._title_("Create a new class");
_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._addNewClass();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$2=_st($1)._with_("New class");
$2;
$3=_st(html)._button();
_st($3)._with_("Rename class");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._renameClass();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$4;
$5=_st(html)._button();
_st($5)._with_("Copy class");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._copyClass();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$6;
$7=_st(html)._button();
_st($7)._with_("Remove class");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._removeClass();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$8;
$9=_st(html)._button();
_st($9)._with_("References");
$10=_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._searchClassReferences();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return $10;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
_st(self["@methodButtons"])._contents_((function(html){
var protocolSelect,referencesSelect;
return smalltalk.withContext(function($ctx2) {
$11=_st(html)._button();
_st($11)._with_("Remove method");
$12=_st($11)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._removeMethod();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$12;
protocolSelect=_st(html)._select();
protocolSelect;
$13=protocolSelect;
_st($13)._onChange_((function(){
return smalltalk.withContext(function($ctx3) {
return self._setMethodProtocol_(_st(_st(protocolSelect)._asJQuery())._val());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$14=_st($13)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$15=_st(html)._option();
_st($15)._with_("Method protocol");
$16=_st($15)._at_put_("disabled","disabled");
$16;
$17=_st(html)._option();
_st($17)._class_("important");
$18=_st($17)._with_("New...");
$18;
currentProtocol=self["@selectedProtocol"];
currentProtocol;
$19=_st(_st(currentProtocol)._isNil())._and_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(self["@selectedMethod"])._notNil();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
if(smalltalk.assert($19)){
currentProtocol=_st(self["@selectedMethod"])._category();
currentProtocol;
};
return _st(self._protocols())._do_((function(each){
var option;
return smalltalk.withContext(function($ctx4) {
option=_st(_st(html)._option())._with_(each);
option;
$20=_st(currentProtocol).__eq(each);
if(smalltalk.assert($20)){
return _st(option)._at_put_("selected","selected");
};
}, function($ctx4) {$ctx4.fillBlock({each:each,option:option},$ctx3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$14;
$21=_st(self["@selectedMethod"])._isNil();
if(! smalltalk.assert($21)){
referencesSelect=_st(html)._select();
referencesSelect;
$22=referencesSelect;
_st($22)._onChange_((function(){
return smalltalk.withContext(function($ctx3) {
return self._searchReferencesOf_(_st(_st(referencesSelect)._asJQuery())._val());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$23=_st($22)._with_((function(){
var option;
return smalltalk.withContext(function($ctx3) {
$24=_st(html)._option();
_st($24)._with_("References");
_st($24)._at_put_("disabled","disabled");
$25=_st($24)._at_put_("selected","selected");
$25;
$26=_st(html)._option();
_st($26)._class_("important");
$27=_st($26)._with_(_st(self["@selectedMethod"])._selector());
$27;
return _st(_st(_st(self["@selectedMethod"])._messageSends())._sorted())._do_((function(each){
return smalltalk.withContext(function($ctx4) {
return _st(_st(html)._option())._with_(each);
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3)})}));
}, function($ctx3) {$ctx3.fillBlock({option:option},$ctx2)})}));
return $23;
};
}, function($ctx2) {$ctx2.fillBlock({html:html,protocolSelect:protocolSelect,referencesSelect:referencesSelect},$ctx1)})}));
$28=_st(self["@selectedMethod"])._isNil();
if(smalltalk.assert($28)){
self._hideMethodButtons();
$29=_st(_st(self["@selectedClass"])._isNil())._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@selectedProtocol"])._notNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($29)){
self._hideClassButtons();
} else {
self._showClassButtons();
};
} else {
self._hideClassButtons();
self._showMethodButtons();
};
_st(self["@sourceArea"])._val_(self._source());
return self}, function($ctx1) {$ctx1.fill(self,"updateSourceAndButtons",{currentProtocol:currentProtocol},smalltalk.Browser)})},
args: [],
source: "updateSourceAndButtons\x0a\x09| currentProtocol |\x0a\x0a\x09self disableSaveButton.\x0a\x09classButtons contents: [:html |\x0a\x09\x09html button\x0a\x09\x09\x09title: 'Create a new class';\x0a\x09\x09\x09onClick: [self addNewClass];\x0a\x09\x09\x09with: 'New class'.\x0a\x09\x09html button\x0a\x09\x09\x09with: 'Rename class';\x0a\x09\x09\x09onClick: [self renameClass].\x0a\x09\x09html button\x0a\x09\x09\x09with: 'Copy class';\x0a\x09\x09\x09onClick: [self copyClass].\x0a\x09\x09html button\x0a\x09\x09\x09with: 'Remove class';\x0a\x09\x09\x09onClick: [self removeClass].\x0a\x09\x09html button\x0a\x09\x09\x09with: 'References';\x0a\x09\x09\x09onClick: [self searchClassReferences]].\x0a\x09methodButtons contents: [:html | | protocolSelect referencesSelect |\x0a\x09\x09html button\x0a\x09\x09\x09with: 'Remove method';\x0a\x09\x09\x09onClick: [self removeMethod].\x0a\x09\x09protocolSelect := html select.\x0a\x09\x09\x09\x09protocolSelect\x0a\x09\x09\x09onChange: [ self setMethodProtocol: protocolSelect asJQuery val];\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html option\x0a\x09\x09\x09\x09\x09with: 'Method protocol';\x0a\x09\x09\x09\x09\x09at: 'disabled' put: 'disabled'.\x0a\x09\x09\x09\x09html option\x0a\x09\x09\x09\x09\x09class: 'important';\x0a\x09\x09\x09\x09\x09with: 'New...'.\x0a\x09\x09\x09\x09currentProtocol := selectedProtocol.\x0a\x09\x09\x09\x09(currentProtocol isNil and: [ selectedMethod notNil ])\x0a\x09\x09\x09\x09\x09ifTrue: [ currentProtocol := selectedMethod category].\x0a\x09\x09\x09\x09self protocols do: [:each | | option |\x0a\x09\x09\x09\x09\x09option := html option with: each.\x0a\x09\x09\x09\x09\x09currentProtocol = each ifTrue: [ option at: 'selected' put: 'selected' ] ]].\x0a\x09\x09selectedMethod isNil ifFalse: [\x0a\x09\x09\x09referencesSelect := html select.\x0a\x09\x09\x09\x09\x09\x09referencesSelect\x0a\x09\x09\x09\x09onChange: [self searchReferencesOf: referencesSelect asJQuery val];\x0a\x09\x09\x09\x09with: [ |option|\x0a\x09\x09\x09\x09\x09html option\x0a\x09\x09\x09\x09\x09\x09with: 'References';\x0a\x09\x09\x09\x09\x09\x09at: 'disabled' put: 'disabled';\x0a\x09\x09\x09\x09\x09\x09at: 'selected' put: 'selected'.\x0a\x09\x09\x09\x09\x09html option\x0a\x09\x09\x09\x09\x09\x09class: 'important';\x0a\x09\x09\x09\x09\x09\x09with: selectedMethod selector.\x0a\x09\x09\x09\x09\x09selectedMethod messageSends sorted do: [:each |\x0a\x09\x09\x09\x09\x09\x09html option with: each]]]].\x0a\x09selectedMethod isNil\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09self hideMethodButtons.\x0a\x09\x09\x09\x09(selectedClass isNil or: [selectedProtocol notNil])\x0a\x09\x09\x09\x09\x09ifTrue: [self hideClassButtons]\x0a\x09\x09\x09\x09\x09ifFalse: [self showClassButtons]]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09self hideClassButtons.\x0a\x09\x09\x09self showMethodButtons].\x0a\x09sourceArea val: self source",
messageSends: ["disableSaveButton", "contents:", "title:", "button", "onClick:", "addNewClass", "with:", "renameClass", "copyClass", "removeClass", "searchClassReferences", "removeMethod", "select", "onChange:", "setMethodProtocol:", "val", "asJQuery", "option", "at:put:", "class:", "ifTrue:", "category", "and:", "notNil", "isNil", "do:", "=", "protocols", "ifFalse:", "searchReferencesOf:", "selector", "sorted", "messageSends", "ifTrue:ifFalse:", "hideMethodButtons", "hideClassButtons", "showClassButtons", "or:", "showMethodButtons", "val:", "source"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "updateStatus",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(_st(self["@sourceArea"])._val()).__eq(self._source());
if(smalltalk.assert($1)){
$2=self["@saveButton"];
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
_st(self["@saveButton"])._at_put_("disabled",true);
};
self["@unsavedChanges"]=false;
self["@unsavedChanges"];
} else {
$3=self["@saveButton"];
if(($receiver = $3) == nil || $receiver == undefined){
$3;
} else {
_st(self["@saveButton"])._removeAt_("disabled");
};
self["@unsavedChanges"]=true;
self["@unsavedChanges"];
};
return self}, function($ctx1) {$ctx1.fill(self,"updateStatus",{},smalltalk.Browser)})},
args: [],
source: "updateStatus\x0a\x09sourceArea val = self source\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09saveButton ifNotNil: [\x0a\x09\x09\x09\x09saveButton at: 'disabled' put: true].\x0a\x09\x09\x09\x09unsavedChanges := false]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09saveButton ifNotNil: [\x0a\x09\x09\x09\x09saveButton removeAt: 'disabled'].\x0a\x09\x09\x09unsavedChanges := true]",
messageSends: ["ifTrue:ifFalse:", "ifNotNil:", "at:put:", "removeAt:", "=", "source", "val"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
smalltalk.method({
selector: "updateTabsList",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15;
_st(self["@tabsList"])._contents_((function(html){
var li;
return smalltalk.withContext(function($ctx2) {
li=_st(html)._li();
li;
$1=_st(self["@selectedTab"]).__eq("instance");
if(smalltalk.assert($1)){
_st(li)._class_("selected");
};
$2=li;
_st($2)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(html)._span())._class_("ltab");
$3=_st(html)._span();
_st($3)._class_("mtab");
$4=_st($3)._with_("Instance");
$4;
return _st(_st(html)._span())._class_("rtab");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$5=_st($2)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._selectTab_("instance");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$5;
li=_st(html)._li();
li;
$6=_st(self["@selectedTab"]).__eq("class");
if(smalltalk.assert($6)){
_st(li)._class_("selected");
};
$7=li;
_st($7)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(html)._span())._class_("ltab");
$8=_st(html)._span();
_st($8)._class_("mtab");
$9=_st($8)._with_("Class");
$9;
return _st(_st(html)._span())._class_("rtab");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$10=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._selectTab_("class");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$10;
li=_st(html)._li();
li;
$11=_st(self["@selectedTab"]).__eq("comment");
if(smalltalk.assert($11)){
_st(li)._class_("selected");
};
$12=li;
_st($12)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(html)._span())._class_("ltab");
$13=_st(html)._span();
_st($13)._class_("mtab");
$14=_st($13)._with_("Comment");
$14;
return _st(_st(html)._span())._class_("rtab");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$15=_st($12)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._selectTab_("comment");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return $15;
}, function($ctx2) {$ctx2.fillBlock({html:html,li:li},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateTabsList",{},smalltalk.Browser)})},
args: [],
source: "updateTabsList\x0a\x09tabsList contents: [:html || li |\x0a\x09li := html li.\x0a\x09selectedTab = #instance ifTrue: [li class: 'selected'].\x0a\x09li\x0a\x09\x09with: [\x0a\x09\x09html span class: 'ltab'.\x0a\x09\x09html span class: 'mtab'; with: 'Instance'.\x0a\x09\x09html span class: 'rtab'];\x0a\x09\x09onClick: [self selectTab: #instance].\x0a\x09li := html li.\x0a\x09selectedTab = #class ifTrue: [li class: 'selected'].\x0a\x09li\x0a\x09\x09with: [\x0a\x09\x09html span class: 'ltab'.\x0a\x09\x09html span class: 'mtab'; with: 'Class'.\x0a\x09\x09html span class: 'rtab'];\x0a\x09\x09onClick: [self selectTab: #class].\x0a\x09li := html li.\x0a\x09selectedTab = #comment ifTrue: [li class: 'selected'].\x0a\x09li\x0a\x09\x09with: [\x0a\x09\x09html span class: 'ltab'.\x0a\x09\x09html span class: 'mtab'; with: 'Comment'.\x0a\x09\x09html span class: 'rtab'];\x0a\x09\x09onClick: [self selectTab: #comment]]",
messageSends: ["contents:", "li", "ifTrue:", "class:", "=", "with:", "span", "onClick:", "selectTab:"],
referencedClasses: []
}),
smalltalk.Browser);


smalltalk.addMethod(
smalltalk.method({
selector: "open",
category: 'convenience',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._new())._open();
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.Browser.klass)})},
args: [],
source: "open\x0a\x09self new open",
messageSends: ["open", "new"],
referencedClasses: []
}),
smalltalk.Browser.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "openOn:",
category: 'convenience',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._open();
_st($2)._selectCategory_(_st(aClass)._category());
$3=_st($2)._selectClass_(aClass);
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"openOn:",{aClass:aClass},smalltalk.Browser.klass)})},
args: ["aClass"],
source: "openOn: aClass\x0a\x09^self new\x0a\x09open;\x0a\x09selectCategory: aClass category;\x0a\x09selectClass: aClass",
messageSends: ["open", "new", "selectCategory:", "category", "selectClass:"],
referencedClasses: []
}),
smalltalk.Browser.klass);


smalltalk.addClass('Debugger', smalltalk.TabWidget, ['error', 'selectedContext', 'sourceArea', 'ul', 'ul2', 'inspector', 'saveButton', 'unsavedChanges', 'selectedVariable', 'selectedVariableName', 'inspectButton'], 'IDE');
smalltalk.addMethod(
smalltalk.method({
selector: "allVariables",
category: 'accessing',
fn: function (){
var self=this;
var all;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1;
all=_st($Dictionary())._new();
_st(_st(_st(self._receiver())._class())._allInstanceVariableNames())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(all)._at_put_(each,_st(self._receiver())._instVarAt_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(_st(self["@selectedContext"])._locals())._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(all)._at_put_(key,value);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
$1=all;
return $1;
}, function($ctx1) {$ctx1.fill(self,"allVariables",{all:all},smalltalk.Debugger)})},
args: [],
source: "allVariables\x0a\x09| all |\x0a\x09all := Dictionary new.\x0a\x0a\x09self receiver class allInstanceVariableNames do: [:each |\x0a\x09\x09all at: each put: (self receiver instVarAt: each) ].\x0a\x09\x0a\x09selectedContext locals keysAndValuesDo: [ :key :value |\x0a\x09\x09all at: key put: value ].\x0a\x09\x0a\x09^ all",
messageSends: ["new", "do:", "at:put:", "instVarAt:", "receiver", "allInstanceVariableNames", "class", "keysAndValuesDo:", "locals"],
referencedClasses: ["Dictionary"]
}),
smalltalk.Debugger);

smalltalk.addMethod(
smalltalk.method({
selector: "canBeClosed",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"canBeClosed",{},smalltalk.Debugger)})},
args: [],
source: "canBeClosed\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
smalltalk.method({
selector: "error",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@error"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"error",{},smalltalk.Debugger)})},
args: [],
source: "error\x0a\x09^error",
messageSends: [],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
smalltalk.method({
selector: "error:",
category: 'accessing',
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@error"]=anError;
return self}, function($ctx1) {$ctx1.fill(self,"error:",{anError:anError},smalltalk.Debugger)})},
args: ["anError"],
source: "error: anError\x0a\x09error := anError",
messageSends: [],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Debugger.superclass.fn.prototype._initialize.apply(_st(self), []);
_st(self["@unsavedChanges"]).__eq(false);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Debugger)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09unsavedChanges = false",
messageSends: ["initialize", "="],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectSelectedVariable",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@selectedVariable"])._inspect();
return self}, function($ctx1) {$ctx1.fill(self,"inspectSelectedVariable",{},smalltalk.Debugger)})},
args: [],
source: "inspectSelectedVariable\x0a\x09selectedVariable inspect",
messageSends: ["inspect"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "[Debugger]";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.Debugger)})},
args: [],
source: "label\x0a\x09^'[Debugger]'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
smalltalk.method({
selector: "method",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@selectedContext"])._method();
return $1;
}, function($ctx1) {$ctx1.fill(self,"method",{},smalltalk.Debugger)})},
args: [],
source: "method\x0a\x09^selectedContext method",
messageSends: ["method"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
smalltalk.method({
selector: "proceed",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._close();
_st(_st(self["@selectedContext"])._receiver())._perform_withArguments_(_st(self["@selectedContext"])._selector(),_st(self["@selectedContext"])._temps());
return self}, function($ctx1) {$ctx1.fill(self,"proceed",{},smalltalk.Debugger)})},
args: [],
source: "proceed\x0a\x09self close.\x0a\x09selectedContext receiver perform: selectedContext selector withArguments: selectedContext temps",
messageSends: ["close", "perform:withArguments:", "selector", "temps", "receiver"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@selectedContext"])._receiver();
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},smalltalk.Debugger)})},
args: [],
source: "receiver\x0a\x09^selectedContext receiver",
messageSends: ["receiver"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBottomPanelOn:",
category: 'rendering',
fn: function (html){
var self=this;
function $SourceArea(){return smalltalk.SourceArea||(typeof SourceArea=="undefined"?nil:SourceArea)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("amber_sourceCode debugger");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self["@sourceArea"]=_st($SourceArea())._new();
self["@sourceArea"];
return _st(self["@sourceArea"])._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@ul2"]=_st(_st(html)._ul())._class_("amber_column debugger variables");
self["@inspector"]=_st(_st(html)._div())._class_("amber_column debugger inspector");
_st(self["@sourceArea"])._onKeyUp_((function(){
return smalltalk.withContext(function($ctx2) {
return self._updateStatus();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderBottomPanelOn:",{html:html},smalltalk.Debugger)})},
args: ["html"],
source: "renderBottomPanelOn: html\x0a\x09html div\x0a\x09\x09class: 'amber_sourceCode debugger';\x0a\x09\x09with: [\x0a\x09\x09\x09sourceArea := SourceArea new.\x0a\x09\x09\x09sourceArea renderOn: html].\x0a\x09ul2 := html ul class: 'amber_column debugger variables'.\x0a\x09inspector := html div class: 'amber_column debugger inspector'.\x0a\x09sourceArea\x0a\x09\x09onKeyUp: [self updateStatus]",
messageSends: ["class:", "div", "with:", "new", "renderOn:", "ul", "onKeyUp:", "updateStatus"],
referencedClasses: ["SourceArea"]
}),
smalltalk.Debugger);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBoxOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._renderTopPanelOn_(html);
$2=_st($1)._renderBottomPanelOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderBoxOn:",{html:html},smalltalk.Debugger)})},
args: ["html"],
source: "renderBoxOn: html\x0a\x09self\x0a\x09\x09renderTopPanelOn: html;\x0a\x09\x09renderBottomPanelOn: html",
messageSends: ["renderTopPanelOn:", "renderBottomPanelOn:"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16;
$1=_st(html)._button();
_st($1)._with_("Save");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._save();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@saveButton"]=$2;
$3=_st(html)._button();
_st($3)._with_("DoIt");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@sourceArea"])._doIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$5=_st(html)._button();
_st($5)._with_("PrintIt");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@sourceArea"])._printIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$7=_st(html)._button();
_st($7)._with_("InspectIt");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@sourceArea"])._inspectIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$9=_st(html)._button();
_st($9)._with_("Proceed");
$10=_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._proceed();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$11=_st(html)._button();
_st($11)._with_("Abandon");
$12=_st($11)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._close();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$13=_st(html)._button();
_st($13)._class_("amber_button debugger inspect");
_st($13)._with_("Inspect");
$14=_st($13)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._inspectSelectedVariable();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@inspectButton"]=$14;
$15=self;
_st($15)._updateSourceArea();
_st($15)._updateStatus();
_st($15)._updateVariablesList();
$16=_st($15)._updateInspector();
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},smalltalk.Debugger)})},
args: ["html"],
source: "renderButtonsOn: html\x0a\x09saveButton := html button\x0a\x09\x09with: 'Save';\x0a\x09\x09onClick: [self save].\x0a\x09html button\x0a\x09\x09with: 'DoIt';\x0a\x09\x09onClick: [sourceArea doIt].\x0a\x09html button\x0a\x09\x09with: 'PrintIt';\x0a\x09\x09onClick: [sourceArea printIt].\x0a\x09html button\x0a\x09\x09with: 'InspectIt';\x0a\x09\x09onClick: [sourceArea inspectIt].\x0a\x09html button\x0a\x09\x09with: 'Proceed';\x0a\x09\x09onClick: [self proceed].\x0a\x09html button\x0a\x09\x09with: 'Abandon';\x0a\x09\x09onClick: [self close].\x0a\x09inspectButton := html button\x0a\x09\x09class: 'amber_button debugger inspect';\x0a\x09\x09with: 'Inspect';\x0a\x09\x09onClick: [self inspectSelectedVariable].\x0a\x09self\x0a\x09\x09updateSourceArea;\x0a\x09\x09updateStatus;\x0a\x09\x09updateVariablesList;\x0a\x09\x09updateInspector",
messageSends: ["with:", "button", "onClick:", "save", "doIt", "printIt", "inspectIt", "proceed", "close", "class:", "inspectSelectedVariable", "updateSourceArea", "updateStatus", "updateVariablesList", "updateInspector"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContext:on:",
category: 'rendering',
fn: function (aContext,html){
var self=this;
var li;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
li=_st(html)._li();
$1=_st(self["@selectedContext"]).__eq(aContext);
if(smalltalk.assert($1)){
_st(li)._class_("selected");
};
$2=li;
_st($2)._with_(_st(aContext)._asString());
$3=_st($2)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._selectContext_(aContext);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$4=_st(aContext)._outerContext();
if(($receiver = $4) == nil || $receiver == undefined){
$4;
} else {
self._renderContext_on_(_st(aContext)._outerContext(),html);
};
return self}, function($ctx1) {$ctx1.fill(self,"renderContext:on:",{aContext:aContext,html:html,li:li},smalltalk.Debugger)})},
args: ["aContext", "html"],
source: "renderContext: aContext on: html\x0a\x09| li |\x0a\x09li := html li.\x0a\x09selectedContext = aContext ifTrue: [\x0a\x09\x09li class: 'selected'].\x0a\x09li\x0a\x09\x09with: aContext asString;\x0a\x09\x09onClick: [self selectContext: aContext].\x0a\x09aContext outerContext ifNotNil: [self renderContext: aContext outerContext on: html]",
messageSends: ["li", "ifTrue:", "class:", "=", "with:", "asString", "onClick:", "selectContext:", "ifNotNil:", "renderContext:on:", "outerContext"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTopPanelOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$2;
self["@selectedContext"]=_st(self._error())._context();
$1=_st(html)._div();
_st($1)._class_("top");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
_st($3)._class_("label");
$4=_st($3)._with_(_st(self._error())._messageText());
$4;
$5=_st(html)._ul();
_st($5)._class_("amber_column debugger contexts");
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return self._renderContext_on_(_st(self._error())._context(),html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
self["@ul"]=$6;
return self["@ul"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderTopPanelOn:",{html:html},smalltalk.Debugger)})},
args: ["html"],
source: "renderTopPanelOn: html\x0a\x09selectedContext := self error context.\x0a\x09html div\x0a\x09\x09class: 'top';\x0a\x09\x09with: [\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'label';\x0a\x09\x09\x09\x09with: self error messageText.\x0a\x09\x09\x09ul := html ul\x0a\x09\x09\x09\x09class: 'amber_column debugger contexts';\x0a\x09\x09\x09\x09with: [self renderContext: self error context on: html]]",
messageSends: ["context", "error", "class:", "div", "with:", "messageText", "ul", "renderContext:on:"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
smalltalk.method({
selector: "save",
category: 'actions',
fn: function (){
var self=this;
var protocol;
return smalltalk.withContext(function($ctx1) { 
protocol=_st(_st(_st(_st(_st(self["@selectedContext"])._receiver())._class())._methodDictionary())._at_(_st(self["@selectedContext"])._selector()))._category();
_st(_st(_st(self["@selectedContext"])._receiver())._class())._compile_category_(_st(self["@sourceArea"])._val(),protocol);
self._updateStatus();
return self}, function($ctx1) {$ctx1.fill(self,"save",{protocol:protocol},smalltalk.Debugger)})},
args: [],
source: "save\x0a\x09| protocol |\x0a\x09protocol := (selectedContext receiver class methodDictionary at: selectedContext selector) category.\x0a\x09selectedContext receiver class compile: sourceArea val category: protocol.\x0a\x09self updateStatus",
messageSends: ["category", "at:", "selector", "methodDictionary", "class", "receiver", "compile:category:", "val", "updateStatus"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
smalltalk.method({
selector: "selectContext:",
category: 'actions',
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@selectedContext"]=aContext;
self["@selectedVariable"]=nil;
self["@selectedVariableName"]=nil;
$1=self;
_st($1)._updateContextsList();
_st($1)._updateSourceArea();
_st($1)._updateInspector();
_st($1)._updateVariablesList();
$2=_st($1)._updateStatus();
return self}, function($ctx1) {$ctx1.fill(self,"selectContext:",{aContext:aContext},smalltalk.Debugger)})},
args: ["aContext"],
source: "selectContext: aContext\x0a\x09selectedContext := aContext.\x0a\x09selectedVariable := nil.\x0a\x09selectedVariableName := nil.\x0a\x09self\x0a\x09\x09updateContextsList;\x0a\x09\x09updateSourceArea;\x0a\x09\x09updateInspector;\x0a\x09\x09updateVariablesList;\x0a\x09\x09updateStatus",
messageSends: ["updateContextsList", "updateSourceArea", "updateInspector", "updateVariablesList", "updateStatus"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
smalltalk.method({
selector: "selectVariable:named:",
category: 'actions',
fn: function (anObject,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selectedVariable"]=anObject;
self["@selectedVariableName"]=aString;
_st(self["@inspector"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(html)._with_(_st(anObject)._printString());
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
self._updateVariablesList();
return self}, function($ctx1) {$ctx1.fill(self,"selectVariable:named:",{anObject:anObject,aString:aString},smalltalk.Debugger)})},
args: ["anObject", "aString"],
source: "selectVariable: anObject named: aString\x0a\x09\x0a\x09selectedVariable := anObject.\x0a\x09selectedVariableName := aString.\x0a\x09inspector contents: [:html | html with: anObject printString].\x0a\x09self updateVariablesList",
messageSends: ["contents:", "with:", "printString", "updateVariablesList"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
smalltalk.method({
selector: "source",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._method();
if(($receiver = $2) == nil || $receiver == undefined){
$1="Method doesn't exist!";
} else {
$1=_st(self._method())._source();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"source",{},smalltalk.Debugger)})},
args: [],
source: "source\x0a\x09^self method\x0a\x09\x09ifNil: ['Method doesn''t exist!']\x0a\x09\x09ifNotNil: [self method source]",
messageSends: ["ifNil:ifNotNil:", "source", "method"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
smalltalk.method({
selector: "updateContextsList",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@ul"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
return self._renderContext_on_(_st(self._error())._context(),html);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateContextsList",{},smalltalk.Debugger)})},
args: [],
source: "updateContextsList\x0a\x09ul contents: [:html |\x0a\x09\x09self renderContext: self error context on: html]",
messageSends: ["contents:", "renderContext:on:", "context", "error"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
smalltalk.method({
selector: "updateInspector",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@inspector"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateInspector",{},smalltalk.Debugger)})},
args: [],
source: "updateInspector\x0a\x09inspector contents: [:html |]",
messageSends: ["contents:"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSourceArea",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@sourceArea"])._val_(self._source());
return self}, function($ctx1) {$ctx1.fill(self,"updateSourceArea",{},smalltalk.Debugger)})},
args: [],
source: "updateSourceArea\x0a\x09sourceArea val: self source",
messageSends: ["val:", "source"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
smalltalk.method({
selector: "updateStatus",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(_st(self["@sourceArea"])._val()).__eq(self._source());
if(smalltalk.assert($1)){
$2=self["@saveButton"];
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
_st(self["@saveButton"])._at_put_("disabled",true);
};
self["@unsavedChanges"]=false;
self["@unsavedChanges"];
} else {
$3=self["@saveButton"];
if(($receiver = $3) == nil || $receiver == undefined){
$3;
} else {
_st(self["@saveButton"])._removeAt_("disabled");
};
self["@unsavedChanges"]=true;
self["@unsavedChanges"];
};
return self}, function($ctx1) {$ctx1.fill(self,"updateStatus",{},smalltalk.Debugger)})},
args: [],
source: "updateStatus\x0a\x09sourceArea val = self source\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09saveButton ifNotNil: [\x0a\x09\x09\x09\x09saveButton at: 'disabled' put: true].\x0a\x09\x09\x09unsavedChanges := false]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09saveButton ifNotNil: [\x0a\x09\x09\x09\x09saveButton removeAt: 'disabled'].\x0a\x09\x09\x09unsavedChanges := true]",
messageSends: ["ifTrue:ifFalse:", "ifNotNil:", "at:put:", "removeAt:", "=", "source", "val"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
smalltalk.method({
selector: "updateVariablesList",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7;
_st(self["@ul2"])._contents_((function(html){
var li;
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._li();
_st($1)._with_("self");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._selectVariable_named_(self._receiver(),"self");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
li=$2;
li;
$3=_st(self["@selectedVariableName"]).__eq("self");
if(smalltalk.assert($3)){
_st(li)._class_("selected");
};
return _st(self._allVariables())._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx3) {
$4=_st(html)._li();
_st($4)._with_(key);
$5=_st($4)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._selectVariable_named_(value,key);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
li=$5;
li;
$6=_st(self["@selectedVariableName"]).__eq(key);
if(smalltalk.assert($6)){
return _st(li)._class_("selected");
};
}, function($ctx3) {$ctx3.fillBlock({key:key,value:value},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html,li:li},$ctx1)})}));
$7=self["@selectedVariable"];
if(($receiver = $7) == nil || $receiver == undefined){
_st(self["@inspectButton"])._at_put_("disabled",true);
} else {
_st(self["@inspectButton"])._removeAt_("disabled");
};
return self}, function($ctx1) {$ctx1.fill(self,"updateVariablesList",{},smalltalk.Debugger)})},
args: [],
source: "updateVariablesList\x0a\x09ul2 contents: [ :html | | li |\x0a\x09\x09li := html li\x0a\x09\x09\x09with: 'self';\x0a\x09\x09\x09onClick: [ self selectVariable: self receiver named: 'self' ].\x0a\x09\x09\x09\x09selectedVariableName = 'self' ifTrue: [ li class: 'selected' ].\x0a\x09\x09\x0a\x09\x09self allVariables keysAndValuesDo: [:key :value |\x0a\x09\x09\x09\x09\x09\x09li := html li\x0a\x09\x09\x09\x09\x09\x09\x09with: key;\x0a\x09\x09\x09\x09\x09\x09\x09onClick: [ self selectVariable: value named: key ].\x0a\x09\x09\x09\x09\x09\x09selectedVariableName = key ifTrue: [\x0a\x09\x09\x09\x09\x09\x09\x09li class: 'selected' ] ] ].\x0a\x09\x09\x09\x09\x09\x09\x09\x0a\x09selectedVariable\x0a\x09\x09ifNil: [ inspectButton at: 'disabled' put: true ]\x0a\x09\x09ifNotNil: [ inspectButton removeAt: 'disabled' ]",
messageSends: ["contents:", "with:", "li", "onClick:", "selectVariable:named:", "receiver", "ifTrue:", "class:", "=", "keysAndValuesDo:", "allVariables", "ifNil:ifNotNil:", "at:put:", "removeAt:"],
referencedClasses: []
}),
smalltalk.Debugger);



smalltalk.addClass('IDETranscript', smalltalk.TabWidget, ['textarea'], 'IDE');
smalltalk.addMethod(
smalltalk.method({
selector: "clear",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@textarea"])._asJQuery())._val_("");
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.IDETranscript)})},
args: [],
source: "clear\x0a\x09textarea asJQuery val: ''",
messageSends: ["val:", "asJQuery"],
referencedClasses: []
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
smalltalk.method({
selector: "cr",
category: 'actions',
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@textarea"])._asJQuery())._val_(_st(_st(_st(self["@textarea"])._asJQuery())._val()).__comma(_st($String())._cr()));
return self}, function($ctx1) {$ctx1.fill(self,"cr",{},smalltalk.IDETranscript)})},
args: [],
source: "cr\x0a\x09textarea asJQuery val: textarea asJQuery val, String cr.",
messageSends: ["val:", ",", "cr", "val", "asJQuery"],
referencedClasses: ["String"]
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Transcript";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.IDETranscript)})},
args: [],
source: "label\x0a\x09^'Transcript'",
messageSends: [],
referencedClasses: []
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
category: 'actions',
fn: function (){
var self=this;
function $TabManager(){return smalltalk.TabManager||(typeof TabManager=="undefined"?nil:TabManager)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($TabManager())._current();
_st($1)._open();
$2=_st($1)._selectTab_(self);
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.IDETranscript)})},
args: [],
source: "open\x0a\x09TabManager current\x0a\x09open;\x0a\x09selectTab: self",
messageSends: ["open", "current", "selectTab:"],
referencedClasses: ["TabManager"]
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBoxOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@textarea"]=_st(html)._textarea();
$1=self["@textarea"];
_st($1)._class_("amber_transcript");
$2=_st($1)._at_put_("spellcheck","false");
return self}, function($ctx1) {$ctx1.fill(self,"renderBoxOn:",{html:html},smalltalk.IDETranscript)})},
args: ["html"],
source: "renderBoxOn: html\x0a\x09textarea := html textarea.\x0a\x09textarea\x0a\x09class: 'amber_transcript';\x0a\x09at: 'spellcheck' put: 'false'",
messageSends: ["textarea", "class:", "at:put:"],
referencedClasses: []
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._button();
_st($1)._with_("Clear transcript");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._clear();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},smalltalk.IDETranscript)})},
args: ["html"],
source: "renderButtonsOn: html\x0a\x09html button\x0a\x09with: 'Clear transcript';\x0a\x09onClick: [self clear]",
messageSends: ["with:", "button", "onClick:", "clear"],
referencedClasses: []
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
smalltalk.method({
selector: "show:",
category: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@textarea"];
if(($receiver = $1) == nil || $receiver == undefined){
self._open();
} else {
$1;
};
_st(_st(self["@textarea"])._asJQuery())._val_(_st(_st(_st(self["@textarea"])._asJQuery())._val()).__comma(_st(anObject)._asString()));
return self}, function($ctx1) {$ctx1.fill(self,"show:",{anObject:anObject},smalltalk.IDETranscript)})},
args: ["anObject"],
source: "show: anObject\x0a\x09textarea ifNil: [self open].\x0a\x09textarea asJQuery val: textarea asJQuery val, anObject asString.",
messageSends: ["ifNil:", "open", "val:", ",", "asString", "val", "asJQuery"],
referencedClasses: []
}),
smalltalk.IDETranscript);


smalltalk.IDETranscript.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@current"]=smalltalk.IDETranscript.klass.superclass.fn.prototype._new.apply(_st(self), []);
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.IDETranscript.klass)})},
args: [],
source: "current\x0a\x09^current ifNil: [current := super new]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.IDETranscript.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
_st($Transcript())._register_(self._current());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.IDETranscript.klass)})},
args: [],
source: "initialize\x0a\x09Transcript register: self current",
messageSends: ["register:", "current"],
referencedClasses: ["Transcript"]
}),
smalltalk.IDETranscript.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.IDETranscript.klass)})},
args: [],
source: "new\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.IDETranscript.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
category: 'instance creation',
fn: function (){
var self=this;
function $TabManager(){return smalltalk.TabManager||(typeof TabManager=="undefined"?nil:TabManager)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($TabManager())._current();
_st($1)._open();
$2=_st($1)._selectTab_(self._current());
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.IDETranscript.klass)})},
args: [],
source: "open\x0a\x09TabManager current\x0a\x09open;\x0a\x09selectTab: self current",
messageSends: ["open", "current", "selectTab:"],
referencedClasses: ["TabManager"]
}),
smalltalk.IDETranscript.klass);


smalltalk.addClass('Inspector', smalltalk.TabWidget, ['label', 'variables', 'object', 'selectedVariable', 'variablesList', 'valueTextarea', 'diveButton', 'sourceArea'], 'IDE');
smalltalk.addMethod(
smalltalk.method({
selector: "canBeClosed",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"canBeClosed",{},smalltalk.Inspector)})},
args: [],
source: "canBeClosed\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
smalltalk.method({
selector: "dive",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._variables())._at_(self._selectedVariable()))._inspect();
return self}, function($ctx1) {$ctx1.fill(self,"dive",{},smalltalk.Inspector)})},
args: [],
source: "dive\x0a\x09(self variables at: self selectedVariable) inspect",
messageSends: ["inspect", "at:", "selectedVariable", "variables"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
smalltalk.method({
selector: "inspect:",
category: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@object"]=anObject;
self["@variables"]=[];
_st(self["@object"])._inspectOn_(self);
return self}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},smalltalk.Inspector)})},
args: ["anObject"],
source: "inspect: anObject\x0a\x09object := anObject.\x0a\x09variables := #().\x0a\x09object inspectOn: self",
messageSends: ["inspectOn:"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@label"];
if(($receiver = $2) == nil || $receiver == undefined){
$1="Inspector (nil)";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.Inspector)})},
args: [],
source: "label\x0a\x09^label ifNil: ['Inspector (nil)']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
smalltalk.method({
selector: "refresh",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._inspect_(self["@object"]);
_st($1)._updateVariablesList();
$2=_st($1)._updateValueTextarea();
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{},smalltalk.Inspector)})},
args: [],
source: "refresh\x0a\x09self\x0a\x09\x09inspect: object;\x0a\x09\x09updateVariablesList;\x0a\x09\x09updateValueTextarea",
messageSends: ["inspect:", "updateVariablesList", "updateValueTextarea"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBottomPanelOn:",
category: 'rendering',
fn: function (html){
var self=this;
function $SourceArea(){return smalltalk.SourceArea||(typeof SourceArea=="undefined"?nil:SourceArea)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_("amber_sourceCode");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st($SourceArea())._new();
_st($3)._receiver_(self["@object"]);
_st($3)._onDoIt_((function(){
return smalltalk.withContext(function($ctx3) {
return self._refresh();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$4=_st($3)._yourself();
self["@sourceArea"]=$4;
self["@sourceArea"];
return _st(self["@sourceArea"])._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderBottomPanelOn:",{html:html},smalltalk.Inspector)})},
args: ["html"],
source: "renderBottomPanelOn: html\x0a\x09html div\x0a\x09class: 'amber_sourceCode';\x0a\x09with: [\x0a\x09\x09sourceArea := SourceArea new\x0a\x09\x09receiver: object;\x0a\x09\x09onDoIt: [self refresh];\x0a\x09\x09yourself.\x0a\x09\x09\x09sourceArea renderOn: html]",
messageSends: ["class:", "div", "with:", "receiver:", "new", "onDoIt:", "refresh", "yourself", "renderOn:"],
referencedClasses: ["SourceArea"]
}),
smalltalk.Inspector);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBoxOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._renderTopPanelOn_(html);
$2=_st($1)._renderBottomPanelOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderBoxOn:",{html:html},smalltalk.Inspector)})},
args: ["html"],
source: "renderBoxOn: html\x0a\x09self\x0a\x09\x09renderTopPanelOn: html;\x0a\x09\x09renderBottomPanelOn: html",
messageSends: ["renderTopPanelOn:", "renderBottomPanelOn:"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
$1=_st(html)._button();
_st($1)._with_("DoIt");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._sourceArea())._doIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=_st(html)._button();
_st($3)._with_("PrintIt");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._sourceArea())._printIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$5=_st(html)._button();
_st($5)._with_("InspectIt");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._sourceArea())._inspectIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self._updateButtons();
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},smalltalk.Inspector)})},
args: ["html"],
source: "renderButtonsOn: html\x0a\x09html button\x0a\x09\x09with: 'DoIt';\x0a\x09\x09onClick: [self sourceArea doIt].\x0a\x09html button\x0a\x09\x09with: 'PrintIt';\x0a\x09\x09onClick: [self sourceArea printIt].\x0a\x09html button\x0a\x09\x09with: 'InspectIt';\x0a\x09\x09onClick: [self sourceArea inspectIt].\x0a\x09self updateButtons",
messageSends: ["with:", "button", "onClick:", "doIt", "sourceArea", "printIt", "inspectIt", "updateButtons"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTopPanelOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$7,$8,$9,$10,$6,$2,$11,$12;
$1=_st(html)._div();
_st($1)._class_("top");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self["@variablesList"]=_st(_st(html)._ul())._class_("amber_column variables");
self["@variablesList"];
$3=_st(html)._textarea();
_st($3)._class_("amber_column value");
$4=_st($3)._at_put_("readonly","readonly");
self["@valueTextarea"]=$4;
self["@valueTextarea"];
$5=_st(html)._div();
_st($5)._class_("amber_tabs inspector");
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$7=_st(html)._button();
_st($7)._class_("amber_button inspector refresh");
_st($7)._with_("Refresh");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._refresh();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
$8;
$9=_st(html)._button();
_st($9)._class_("amber_button inspector dive");
_st($9)._with_("Dive");
$10=_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._dive();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
self["@diveButton"]=$10;
return self["@diveButton"];
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$6;
return _st(_st(html)._div())._class_("amber_clear");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$11=self;
_st($11)._updateVariablesList();
$12=_st($11)._updateValueTextarea();
return self}, function($ctx1) {$ctx1.fill(self,"renderTopPanelOn:",{html:html},smalltalk.Inspector)})},
args: ["html"],
source: "renderTopPanelOn: html\x0a\x09html div\x0a\x09\x09class: 'top';\x0a\x09\x09with: [\x0a\x09\x09\x09variablesList := html ul class: 'amber_column variables'.\x0a\x09\x09\x09valueTextarea := html textarea class: 'amber_column value'; at: 'readonly' put: 'readonly'.\x0a\x09\x09\x09html div class: 'amber_tabs inspector'; with: [\x0a\x09\x09\x09\x09html button\x0a\x09\x09\x09\x09\x09class: 'amber_button inspector refresh';\x0a\x09\x09\x09\x09\x09with: 'Refresh';\x0a\x09\x09\x09\x09\x09onClick: [self refresh].\x0a\x09\x09\x09\x09diveButton := html button\x0a\x09\x09\x09\x09\x09class: 'amber_button inspector dive';\x0a\x09\x09\x09\x09\x09with: 'Dive';\x0a\x09\x09\x09\x09\x09onClick: [self dive]].\x0a\x09\x09\x09html div class: 'amber_clear'].\x0a\x09self\x0a\x09\x09updateVariablesList;\x0a\x09\x09updateValueTextarea.",
messageSends: ["class:", "div", "with:", "ul", "textarea", "at:put:", "button", "onClick:", "refresh", "dive", "updateVariablesList", "updateValueTextarea"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
smalltalk.method({
selector: "selectVariable:",
category: 'updating',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._selectedVariable_(aString);
$1=self;
_st($1)._updateVariablesList();
_st($1)._updateValueTextarea();
$2=_st($1)._updateButtons();
return self}, function($ctx1) {$ctx1.fill(self,"selectVariable:",{aString:aString},smalltalk.Inspector)})},
args: ["aString"],
source: "selectVariable: aString\x0a\x09self selectedVariable: aString.\x0a\x09self\x0a\x09\x09updateVariablesList;\x0a\x09\x09updateValueTextarea;\x0a\x09\x09updateButtons",
messageSends: ["selectedVariable:", "updateVariablesList", "updateValueTextarea", "updateButtons"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedVariable",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selectedVariable"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedVariable",{},smalltalk.Inspector)})},
args: [],
source: "selectedVariable\x0a\x09^selectedVariable",
messageSends: [],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedVariable:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selectedVariable"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"selectedVariable:",{aString:aString},smalltalk.Inspector)})},
args: ["aString"],
source: "selectedVariable: aString\x0a\x09selectedVariable := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
smalltalk.method({
selector: "setLabel:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@label"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"setLabel:",{aString:aString},smalltalk.Inspector)})},
args: ["aString"],
source: "setLabel: aString\x0a\x09label := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
smalltalk.method({
selector: "setVariables:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@variables"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"setVariables:",{aCollection:aCollection},smalltalk.Inspector)})},
args: ["aCollection"],
source: "setVariables: aCollection\x0a\x09variables := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
smalltalk.method({
selector: "sourceArea",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@sourceArea"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"sourceArea",{},smalltalk.Inspector)})},
args: [],
source: "sourceArea\x0a\x09^sourceArea",
messageSends: [],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
smalltalk.method({
selector: "updateButtons",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._selectedVariable())._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self._variables())._at_(self._selectedVariable()))._notNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
_st(self["@diveButton"])._removeAt_("disabled");
} else {
_st(self["@diveButton"])._at_put_("disabled",true);
};
return self}, function($ctx1) {$ctx1.fill(self,"updateButtons",{},smalltalk.Inspector)})},
args: [],
source: "updateButtons\x0a\x09(self selectedVariable notNil and: [(self variables at: self selectedVariable) notNil])\x0a\x09\x09ifFalse: [diveButton at: 'disabled' put: true]\x0a\x09\x09ifTrue: [diveButton removeAt: 'disabled']",
messageSends: ["ifFalse:ifTrue:", "at:put:", "removeAt:", "and:", "notNil", "at:", "selectedVariable", "variables"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
smalltalk.method({
selector: "updateValueTextarea",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
$1=_st(self["@valueTextarea"])._asJQuery();
$3=_st(self._selectedVariable())._isNil();
if(smalltalk.assert($3)){
$2="";
} else {
$2=_st(_st(self._variables())._at_(self._selectedVariable()))._printString();
};
_st($1)._val_($2);
return self}, function($ctx1) {$ctx1.fill(self,"updateValueTextarea",{},smalltalk.Inspector)})},
args: [],
source: "updateValueTextarea\x0a\x09valueTextarea asJQuery val: (self selectedVariable isNil\x0a\x09\x09ifTrue: ['']\x0a\x09\x09ifFalse: [(self variables at: self selectedVariable) printString])",
messageSends: ["val:", "ifTrue:ifFalse:", "printString", "at:", "selectedVariable", "variables", "isNil", "asJQuery"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
smalltalk.method({
selector: "updateVariablesList",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
_st(self["@variablesList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self._variables())._keys())._do_((function(each){
var li;
return smalltalk.withContext(function($ctx3) {
li=_st(html)._li();
li;
$1=li;
_st($1)._with_(each);
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._selectVariable_(each);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
$2;
$3=_st(self._selectedVariable()).__eq(each);
if(smalltalk.assert($3)){
return _st(li)._class_("selected");
};
}, function($ctx3) {$ctx3.fillBlock({each:each,li:li},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateVariablesList",{},smalltalk.Inspector)})},
args: [],
source: "updateVariablesList\x0a\x09variablesList contents: [:html |\x0a\x09\x09self variables keys do: [:each || li |\x0a\x09\x09\x09li := html li.\x0a\x09\x09\x09li\x0a\x09\x09\x09\x09with: each;\x0a\x09\x09\x09\x09onClick: [self selectVariable: each].\x0a\x09\x09\x09self selectedVariable = each ifTrue: [\x0a\x09\x09\x09\x09li class: 'selected']]]",
messageSends: ["contents:", "do:", "li", "with:", "onClick:", "selectVariable:", "ifTrue:", "class:", "=", "selectedVariable", "keys", "variables"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
smalltalk.method({
selector: "variables",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@variables"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"variables",{},smalltalk.Inspector)})},
args: [],
source: "variables\x0a\x09^variables",
messageSends: [],
referencedClasses: []
}),
smalltalk.Inspector);


smalltalk.addMethod(
smalltalk.method({
selector: "inspect:",
category: 'instance creation',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._inspect_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},smalltalk.Inspector.klass)})},
args: ["anObject"],
source: "inspect: anObject\x0a\x09^self new\x0a\x09\x09inspect: anObject;\x0a\x09\x09yourself",
messageSends: ["inspect:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Inspector.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._inspect_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anObject:anObject},smalltalk.Inspector.klass)})},
args: ["anObject"],
source: "on: anObject\x0a\x09^self new\x0a\x09\x09inspect: anObject;\x0a\x09\x09yourself",
messageSends: ["inspect:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Inspector.klass);


smalltalk.addClass('ProgressBar', smalltalk.TabWidget, ['percent', 'progressDiv', 'div'], 'IDE');
smalltalk.addMethod(
smalltalk.method({
selector: "percent",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@percent"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=(0);
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"percent",{},smalltalk.ProgressBar)})},
args: [],
source: "percent\x0a\x09^percent ifNil: [0]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.ProgressBar);

smalltalk.addMethod(
smalltalk.method({
selector: "percent:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@percent"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"percent:",{aNumber:aNumber},smalltalk.ProgressBar)})},
args: ["aNumber"],
source: "percent: aNumber\x0a\x09percent := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProgressBar);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("progress_bar");
$2=_st($1)._yourself();
self["@div"]=$2;
self._renderProgressBar();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.ProgressBar)})},
args: ["html"],
source: "renderOn: html\x0a\x09div := html div\x0a\x09\x09class: 'progress_bar';\x0a\x09\x09yourself.\x0a\x09self renderProgressBar",
messageSends: ["class:", "div", "yourself", "renderProgressBar"],
referencedClasses: []
}),
smalltalk.ProgressBar);

smalltalk.addMethod(
smalltalk.method({
selector: "renderProgressBar",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self["@div"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._div();
_st($1)._class_("progress");
$2=_st($1)._style_(_st("width:".__comma(_st(self._percent())._asString())).__comma("%"));
return $2;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderProgressBar",{},smalltalk.ProgressBar)})},
args: [],
source: "renderProgressBar\x0a\x09div contents: [:html |\x0a\x09\x09html div\x0a\x09\x09\x09class: 'progress';\x0a\x09\x09\x09style: 'width:', self percent asString, '%']",
messageSends: ["contents:", "class:", "div", "style:", ",", "asString", "percent"],
referencedClasses: []
}),
smalltalk.ProgressBar);

smalltalk.addMethod(
smalltalk.method({
selector: "updatePercent:",
category: 'updating',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._percent_(aNumber);
self._renderProgressBar();
return self}, function($ctx1) {$ctx1.fill(self,"updatePercent:",{aNumber:aNumber},smalltalk.ProgressBar)})},
args: ["aNumber"],
source: "updatePercent: aNumber\x0a\x09self percent: aNumber.\x0a\x09self renderProgressBar",
messageSends: ["percent:", "renderProgressBar"],
referencedClasses: []
}),
smalltalk.ProgressBar);



smalltalk.addClass('ReferencesBrowser', smalltalk.TabWidget, ['implementors', 'senders', 'implementorsList', 'input', 'timer', 'selector', 'sendersList', 'referencedClasses', 'referencedClassesList', 'matches', 'matchesList'], 'IDE');
smalltalk.addMethod(
smalltalk.method({
selector: "canBeClosed",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"canBeClosed",{},smalltalk.ReferencesBrowser)})},
args: [],
source: "canBeClosed\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "classesAndMetaclasses",
category: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st($Smalltalk())._current())._classes()).__comma(_st(_st(_st($Smalltalk())._current())._classes())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._class();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})));
return $1;
}, function($ctx1) {$ctx1.fill(self,"classesAndMetaclasses",{},smalltalk.ReferencesBrowser)})},
args: [],
source: "classesAndMetaclasses\x0a\x09^Smalltalk current classes, (Smalltalk current classes collect: [:each | each class])",
messageSends: [",", "collect:", "class", "classes", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "implementors",
category: 'accessing',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@implementors"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@implementors"]=_st($Array())._new();
$1=self["@implementors"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"implementors",{},smalltalk.ReferencesBrowser)})},
args: [],
source: "implementors\x0a\x09^implementors ifNil: [implementors := Array new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ReferencesBrowser.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@selector"]="";
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ReferencesBrowser)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09selector := ''",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "[References]";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.ReferencesBrowser)})},
args: [],
source: "label\x0a\x09^'[References]'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "matches",
category: 'accessing',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@matches"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@matches"]=_st($Array())._new();
$1=self["@matches"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"matches",{},smalltalk.ReferencesBrowser)})},
args: [],
source: "matches\x0a\x09^matches ifNil: [matches := Array new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "openBrowserOn:",
category: 'actions',
fn: function (aMethod){
var self=this;
var browser;
function $Browser(){return smalltalk.Browser||(typeof Browser=="undefined"?nil:Browser)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$5,$6;
$1=$Browser();
$3=_st(_st(aMethod)._methodClass())._isMetaclass();
if(smalltalk.assert($3)){
$2=_st(_st(aMethod)._methodClass())._instanceClass();
} else {
$2=_st(aMethod)._methodClass();
};
browser=_st($1)._openOn_($2);
$4=_st(_st(aMethod)._methodClass())._isMetaclass();
if(smalltalk.assert($4)){
_st(browser)._selectTab_("class");
};
$5=browser;
_st($5)._selectProtocol_(_st(aMethod)._category());
$6=_st($5)._selectMethod_(aMethod);
return self}, function($ctx1) {$ctx1.fill(self,"openBrowserOn:",{aMethod:aMethod,browser:browser},smalltalk.ReferencesBrowser)})},
args: ["aMethod"],
source: "openBrowserOn: aMethod\x0a\x09| browser |\x0a\x09browser := Browser openOn: (aMethod methodClass isMetaclass\x0a\x09\x09ifTrue: [aMethod methodClass instanceClass] ifFalse: [aMethod methodClass]).\x0a\x09aMethod methodClass isMetaclass ifTrue: [browser selectTab: #class].\x0a\x09browser\x0a\x09\x09selectProtocol: aMethod category;\x0a\x09\x09selectMethod: aMethod",
messageSends: ["openOn:", "ifTrue:ifFalse:", "instanceClass", "methodClass", "isMetaclass", "ifTrue:", "selectTab:", "selectProtocol:", "category", "selectMethod:"],
referencedClasses: ["Browser"]
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "referencedClasses",
category: 'accessing',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@referencedClasses"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@referencedClasses"]=_st($Array())._new();
$1=self["@referencedClasses"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"referencedClasses",{},smalltalk.ReferencesBrowser)})},
args: [],
source: "referencedClasses\x0a\x09^referencedClasses ifNil: [referencedClasses := Array new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBoxOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._renderInputOn_(html);
_st($1)._renderImplementorsOn_(html);
_st($1)._renderSendersOn_(html);
_st($1)._renderReferencedClassesOn_(html);
$2=_st($1)._renderMatchesOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderBoxOn:",{html:html},smalltalk.ReferencesBrowser)})},
args: ["html"],
source: "renderBoxOn: html\x0a\x09self\x0a\x09\x09renderInputOn: html;\x0a\x09\x09renderImplementorsOn: html;\x0a\x09\x09renderSendersOn: html;\x0a\x09\x09renderReferencedClassesOn: html;\x0a\x09\x09renderMatchesOn: html",
messageSends: ["renderInputOn:", "renderImplementorsOn:", "renderSendersOn:", "renderReferencedClassesOn:", "renderMatchesOn:"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "renderImplementorsOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@implementorsList"]=_st(_st(html)._ul())._class_("amber_column implementors");
self._updateImplementorsList();
return self}, function($ctx1) {$ctx1.fill(self,"renderImplementorsOn:",{html:html},smalltalk.ReferencesBrowser)})},
args: ["html"],
source: "renderImplementorsOn: html\x0a\x09implementorsList := html ul class: 'amber_column implementors'.\x0a\x09self updateImplementorsList",
messageSends: ["class:", "ul", "updateImplementorsList"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "renderInputOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._input();
_st($1)._class_("implementors");
$2=_st($1)._yourself();
self["@input"]=$2;
_st(_st(self["@input"])._asJQuery())._val_(self["@selector"]);
self._setInputEvents();
return self}, function($ctx1) {$ctx1.fill(self,"renderInputOn:",{html:html},smalltalk.ReferencesBrowser)})},
args: ["html"],
source: "renderInputOn: html\x0a\x09input := html input\x0a\x09\x09class: 'implementors';\x0a\x09\x09yourself.\x0a\x09input asJQuery val: selector.\x0a\x09self setInputEvents",
messageSends: ["class:", "input", "yourself", "val:", "asJQuery", "setInputEvents"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "renderMatchesOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@matchesList"]=_st(_st(html)._ul())._class_("amber_column matches");
self._updateMatchesList();
return self}, function($ctx1) {$ctx1.fill(self,"renderMatchesOn:",{html:html},smalltalk.ReferencesBrowser)})},
args: ["html"],
source: "renderMatchesOn: html\x0a\x09matchesList := html ul class: 'amber_column matches'.\x0a\x09self updateMatchesList",
messageSends: ["class:", "ul", "updateMatchesList"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "renderReferencedClassesOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@referencedClassesList"]=_st(_st(html)._ul())._class_("amber_column referenced_classes");
self._updateReferencedClassesList();
return self}, function($ctx1) {$ctx1.fill(self,"renderReferencedClassesOn:",{html:html},smalltalk.ReferencesBrowser)})},
args: ["html"],
source: "renderReferencedClassesOn: html\x0a\x09referencedClassesList := html ul class: 'amber_column referenced_classes'.\x0a\x09self updateReferencedClassesList",
messageSends: ["class:", "ul", "updateReferencedClassesList"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSendersOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@sendersList"]=_st(_st(html)._ul())._class_("amber_column senders");
self._updateSendersList();
return self}, function($ctx1) {$ctx1.fill(self,"renderSendersOn:",{html:html},smalltalk.ReferencesBrowser)})},
args: ["html"],
source: "renderSendersOn: html\x0a\x09sendersList := html ul class: 'amber_column senders'.\x0a\x09self updateSendersList",
messageSends: ["class:", "ul", "updateSendersList"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "search:",
category: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._searchReferencesFor_(aString);
_st($1)._updateImplementorsList();
_st($1)._updateSendersList();
_st($1)._updateReferencedClassesList();
$2=_st($1)._updateMatchesList();
return self}, function($ctx1) {$ctx1.fill(self,"search:",{aString:aString},smalltalk.ReferencesBrowser)})},
args: ["aString"],
source: "search: aString\x0a\x09self\x0a\x09\x09searchReferencesFor: aString;\x0a\x09\x09updateImplementorsList;\x0a\x09\x09updateSendersList;\x0a\x09\x09updateReferencedClassesList;\x0a\x09\x09updateMatchesList",
messageSends: ["searchReferencesFor:", "updateImplementorsList", "updateSendersList", "updateReferencedClassesList", "updateMatchesList"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "searchMethodSource",
category: 'actions',
fn: function (){
var self=this;
var regex;
return smalltalk.withContext(function($ctx1) { 
var $1;
regex=_st(self["@selector"])._allButFirst();
_st(self._classesAndMetaclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(each)._methodDictionary())._values())._do_((function(value){
return smalltalk.withContext(function($ctx3) {
$1=_st(_st(value)._source())._match_(regex);
if(smalltalk.assert($1)){
return _st(self._matches())._add_(value);
};
}, function($ctx3) {$ctx3.fillBlock({value:value},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"searchMethodSource",{regex:regex},smalltalk.ReferencesBrowser)})},
args: [],
source: "searchMethodSource\x0a\x09| regex |\x0a\x09regex := selector allButFirst.\x0a\x09self classesAndMetaclasses do: [:each |\x0a\x09\x09each methodDictionary values do: [:value |\x0a\x09\x09\x09(value source match: regex) ifTrue: [\x0a\x09\x09\x09\x09self matches add: value]]]",
messageSends: ["allButFirst", "do:", "ifTrue:", "add:", "matches", "match:", "source", "values", "methodDictionary", "classesAndMetaclasses"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "searchReferencedClasses",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self._classesAndMetaclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(each)._methodDictionary())._values())._do_((function(value){
return smalltalk.withContext(function($ctx3) {
$1=_st(_st(value)._referencedClasses())._includes_(self["@selector"]);
if(smalltalk.assert($1)){
return _st(self._referencedClasses())._add_(value);
};
}, function($ctx3) {$ctx3.fillBlock({value:value},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"searchReferencedClasses",{},smalltalk.ReferencesBrowser)})},
args: [],
source: "searchReferencedClasses\x0a\x09self classesAndMetaclasses do: [:each |\x0a\x09\x09each methodDictionary values do: [:value |\x0a\x09\x09\x09(value referencedClasses includes: selector) ifTrue: [\x0a\x09\x09\x09\x09self referencedClasses add: value]]]",
messageSends: ["do:", "ifTrue:", "add:", "referencedClasses", "includes:", "values", "methodDictionary", "classesAndMetaclasses"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "searchReferencesFor:",
category: 'actions',
fn: function (aString){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@selector"]=aString;
self["@implementors"]=_st($Array())._new();
self["@senders"]=_st($Array())._new();
self["@referencedClasses"]=_st($Array())._new();
self["@matches"]=_st($Array())._new();
self._searchMethodSource();
$1=_st(self["@selector"])._match_("^[A-Z]");
if(smalltalk.assert($1)){
self._searchReferencedClasses();
} else {
self._searchSelectorReferences();
};
return self}, function($ctx1) {$ctx1.fill(self,"searchReferencesFor:",{aString:aString},smalltalk.ReferencesBrowser)})},
args: ["aString"],
source: "searchReferencesFor: aString\x0a\x09selector := aString.\x0a\x09implementors := Array new.\x0a\x09senders := Array new.\x0a\x09referencedClasses := Array new.\x0a\x09matches := Array new.\x0a\x09self searchMethodSource.\x0a\x09(selector match: '^[A-Z]')\x0a\x09\x09ifFalse: [self searchSelectorReferences]\x0a\x09\x09ifTrue: [self searchReferencedClasses]",
messageSends: ["new", "searchMethodSource", "ifFalse:ifTrue:", "searchSelectorReferences", "searchReferencedClasses", "match:"],
referencedClasses: ["Array"]
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "searchSelectorReferences",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self._classesAndMetaclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._methodDictionary())._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx3) {
$1=_st(key).__eq(self["@selector"]);
if(smalltalk.assert($1)){
_st(self._implementors())._add_(value);
};
$2=_st(_st(value)._messageSends())._includes_(self["@selector"]);
if(smalltalk.assert($2)){
return _st(self._senders())._add_(value);
};
}, function($ctx3) {$ctx3.fillBlock({key:key,value:value},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"searchSelectorReferences",{},smalltalk.ReferencesBrowser)})},
args: [],
source: "searchSelectorReferences\x0a\x09self classesAndMetaclasses do: [:each |\x0a\x09\x09each methodDictionary keysAndValuesDo: [:key :value |\x0a\x09\x09\x09key = selector ifTrue: [self implementors add: value].\x0a\x09\x09\x09(value messageSends includes: selector) ifTrue: [\x0a\x09\x09\x09\x09self senders add: value]]]",
messageSends: ["do:", "keysAndValuesDo:", "ifTrue:", "add:", "implementors", "=", "senders", "includes:", "messageSends", "methodDictionary", "classesAndMetaclasses"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.ReferencesBrowser)})},
args: [],
source: "selector\x0a\x09^selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "senders",
category: 'accessing',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@senders"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@senders"]=_st($Array())._new();
$1=self["@senders"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"senders",{},smalltalk.ReferencesBrowser)})},
args: [],
source: "senders\x0a\x09^senders ifNil: [senders := Array new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "setInputEvents",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
$1=self["@input"];
_st($1)._onKeyUp_((function(){
return smalltalk.withContext(function($ctx2) {
self["@timer"]=_st((function(){
return smalltalk.withContext(function($ctx3) {
return self._search_(_st(_st(self["@input"])._asJQuery())._val());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}))._valueWithTimeout_((100));
return self["@timer"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st($1)._onKeyDown_((function(){
return smalltalk.withContext(function($ctx2) {
$3=self["@timer"];
if(($receiver = $3) == nil || $receiver == undefined){
return $3;
} else {
return _st(self["@timer"])._clearTimeout();
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setInputEvents",{},smalltalk.ReferencesBrowser)})},
args: [],
source: "setInputEvents\x0a\x09input\x0a\x09\x09onKeyUp: [timer := [self search: input asJQuery val] valueWithTimeout: 100];\x0a\x09\x09onKeyDown: [timer ifNotNil: [timer clearTimeout]]",
messageSends: ["onKeyUp:", "valueWithTimeout:", "search:", "val", "asJQuery", "onKeyDown:", "ifNotNil:", "clearTimeout"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "updateImplementorsList",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
_st(self["@implementorsList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._li();
_st($1)._class_("column_label");
_st($1)._with_(_st("Implementors (".__comma(_st(_st(self._implementors())._size())._asString())).__comma(")"));
$2=_st($1)._style_("font-weight: bold");
$2;
return _st(self._implementors())._do_((function(each){
var li;
return smalltalk.withContext(function($ctx3) {
li=_st(html)._li();
li;
$3=li;
_st($3)._with_(_st(_st(_st(_st(each)._methodClass())._asString()).__comma(" >> ")).__comma(self._selector()));
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._openBrowserOn_(each);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
return $4;
}, function($ctx3) {$ctx3.fillBlock({each:each,li:li},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateImplementorsList",{},smalltalk.ReferencesBrowser)})},
args: [],
source: "updateImplementorsList\x0a\x09implementorsList contents: [:html |\x0a\x09html li\x0a\x09\x09class: 'column_label';\x0a\x09\x09with: 'Implementors (', self implementors size asString, ')';\x0a\x09\x09style: 'font-weight: bold'.\x0a\x09self implementors do: [:each || li |\x0a\x09\x09li := html li.\x0a\x09\x09li\x0a\x09\x09with: (each methodClass asString, ' >> ', self selector);\x0a\x09\x09onClick: [self openBrowserOn: each]]]",
messageSends: ["contents:", "class:", "li", "with:", ",", "asString", "size", "implementors", "style:", "do:", "selector", "methodClass", "onClick:", "openBrowserOn:"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMatchesList",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
_st(self["@matchesList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._li();
_st($1)._class_("column_label");
_st($1)._with_(_st("Regex matches (".__comma(_st(_st(self._matches())._size())._asString())).__comma(")"));
$2=_st($1)._style_("font-weight: bold");
$2;
return _st(self._matches())._do_((function(each){
var li;
return smalltalk.withContext(function($ctx3) {
li=_st(html)._li();
li;
$3=li;
_st($3)._with_(_st(_st(_st(_st(each)._methodClass())._asString()).__comma(" >> ")).__comma(_st(each)._selector()));
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._openBrowserOn_(each);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
return $4;
}, function($ctx3) {$ctx3.fillBlock({each:each,li:li},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateMatchesList",{},smalltalk.ReferencesBrowser)})},
args: [],
source: "updateMatchesList\x0a\x09matchesList contents: [:html |\x0a\x09html li\x0a\x09\x09class: 'column_label';\x0a\x09\x09with: 'Regex matches (', self matches size asString, ')';\x0a\x09\x09style: 'font-weight: bold'.\x0a\x09self matches do: [:each || li |\x0a\x09\x09li := html li.\x0a\x09\x09li\x0a\x09\x09with: (each methodClass asString, ' >> ', each selector);\x0a\x09\x09onClick: [self openBrowserOn: each]]]",
messageSends: ["contents:", "class:", "li", "with:", ",", "asString", "size", "matches", "style:", "do:", "selector", "methodClass", "onClick:", "openBrowserOn:"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "updateReferencedClassesList",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
_st(self["@referencedClassesList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._li();
_st($1)._class_("column_label");
_st($1)._with_(_st("Class references (".__comma(_st(_st(self._referencedClasses())._size())._asString())).__comma(")"));
$2=_st($1)._style_("font-weight: bold");
$2;
return _st(self._referencedClasses())._do_((function(each){
return smalltalk.withContext(function($ctx3) {
$3=_st(html)._li();
_st($3)._with_(_st(_st(_st(_st(each)._methodClass())._asString()).__comma(" >> ")).__comma(_st(each)._selector()));
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._openBrowserOn_(each);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
return $4;
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateReferencedClassesList",{},smalltalk.ReferencesBrowser)})},
args: [],
source: "updateReferencedClassesList\x0a\x09referencedClassesList contents: [:html |\x0a\x09html li\x0a\x09\x09class: 'column_label';\x0a\x09\x09with: 'Class references (', self referencedClasses size asString, ')';\x0a\x09\x09style: 'font-weight: bold'.\x0a\x09self referencedClasses do: [:each |\x0a\x09\x09html li\x0a\x09\x09\x09with: (each methodClass asString, ' >> ', each selector);\x0a\x09\x09\x09onClick: [self openBrowserOn: each]]]",
messageSends: ["contents:", "class:", "li", "with:", ",", "asString", "size", "referencedClasses", "style:", "do:", "selector", "methodClass", "onClick:", "openBrowserOn:"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSendersList",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
_st(self["@sendersList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._li();
_st($1)._class_("column_label");
_st($1)._with_(_st("Senders (".__comma(_st(_st(self._senders())._size())._asString())).__comma(")"));
$2=_st($1)._style_("font-weight: bold");
$2;
return _st(self._senders())._do_((function(each){
return smalltalk.withContext(function($ctx3) {
$3=_st(html)._li();
_st($3)._with_(_st(_st(_st(_st(each)._methodClass())._asString()).__comma(" >> ")).__comma(_st(each)._selector()));
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._openBrowserOn_(each);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
return $4;
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateSendersList",{},smalltalk.ReferencesBrowser)})},
args: [],
source: "updateSendersList\x0a\x09sendersList contents: [:html |\x0a\x09html li\x0a\x09\x09class: 'column_label';\x0a\x09\x09with: 'Senders (', self senders size asString, ')';\x0a\x09\x09style: 'font-weight: bold'.\x0a\x09self senders do: [:each |\x0a\x09\x09html li\x0a\x09\x09\x09with: (each methodClass asString, ' >> ', each selector);\x0a\x09\x09\x09onClick: [self openBrowserOn: each]]]",
messageSends: ["contents:", "class:", "li", "with:", ",", "asString", "size", "senders", "style:", "do:", "selector", "methodClass", "onClick:", "openBrowserOn:"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);


smalltalk.addMethod(
smalltalk.method({
selector: "search:",
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._searchReferencesFor_(aString);
$3=_st($2)._open();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"search:",{aString:aString},smalltalk.ReferencesBrowser.klass)})},
args: ["aString"],
source: "search: aString\x0a\x09^self new\x0a\x09\x09searchReferencesFor: aString;\x0a\x09\x09open",
messageSends: ["searchReferencesFor:", "new", "open"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser.klass);


smalltalk.addClass('TestRunner', smalltalk.TabWidget, ['selectedCategories', 'packagesList', 'selectedClasses', 'classesList', 'selectedMethods', 'progressBar', 'methodsList', 'result', 'statusDiv'], 'IDE');
smalltalk.addMethod(
smalltalk.method({
selector: "allClasses",
category: 'accessing',
fn: function (){
var self=this;
function $TestCase(){return smalltalk.TestCase||(typeof TestCase=="undefined"?nil:TestCase)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($TestCase())._allSubclasses())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._isAbstract())._not();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"allClasses",{},smalltalk.TestRunner)})},
args: [],
source: "allClasses\x0a\x09^TestCase allSubclasses select: [ :each | each isAbstract not ]",
messageSends: ["select:", "not", "isAbstract", "allSubclasses"],
referencedClasses: ["TestCase"]
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "classes",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._allClasses())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self._selectedCategories())._includes_(_st(each)._category());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._sort_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(a)._name()).__gt(_st(b)._name());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"classes",{},smalltalk.TestRunner)})},
args: [],
source: "classes\x0a\x09^(self allClasses\x0a\x09select: [:each | self selectedCategories includes: each category])\x0a\x09sort: [:a :b | a name > b name]",
messageSends: ["sort:", ">", "name", "select:", "includes:", "category", "selectedCategories", "allClasses"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $TestResult(){return smalltalk.TestResult||(typeof TestResult=="undefined"?nil:TestResult)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.TestRunner.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@result"]=_st($TestResult())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TestRunner)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09result := TestResult new",
messageSends: ["initialize", "new"],
referencedClasses: ["TestResult"]
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "isSelectedCategory:",
category: 'testing',
fn: function (aCategory){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._selectedCategories())._includes_(aCategory);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isSelectedCategory:",{aCategory:aCategory},smalltalk.TestRunner)})},
args: ["aCategory"],
source: "isSelectedCategory: aCategory\x0a\x09^(self selectedCategories includes: aCategory)",
messageSends: ["includes:", "selectedCategories"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "isSelectedClass:",
category: 'testing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._selectedClasses())._includes_(aClass);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isSelectedClass:",{aClass:aClass},smalltalk.TestRunner)})},
args: ["aClass"],
source: "isSelectedClass: aClass\x0a\x09^(self selectedClasses includes: aClass)",
messageSends: ["includes:", "selectedClasses"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "SUnit";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.TestRunner)})},
args: [],
source: "label\x0a\x09^'SUnit'",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "packages",
category: 'accessing',
fn: function (){
var self=this;
var packages;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
packages=_st($Array())._new();
_st(self._allClasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(packages)._includes_(_st(each)._category());
if(! smalltalk.assert($1)){
return _st(packages)._add_(_st(each)._category());
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=_st(packages)._sort();
return $2;
}, function($ctx1) {$ctx1.fill(self,"packages",{packages:packages},smalltalk.TestRunner)})},
args: [],
source: "packages\x0a\x09| packages |\x0a\x09packages := Array new.\x0a\x09self allClasses do: [:each |\x0a\x09(packages includes: each category) ifFalse: [\x0a\x09\x09packages add: each category]].\x0a\x09^packages sort",
messageSends: ["new", "do:", "ifFalse:", "add:", "category", "includes:", "allClasses", "sort"],
referencedClasses: ["Array"]
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "performFailure:",
category: 'actions',
fn: function (aTestCase){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aTestCase)._runCase();
return self}, function($ctx1) {$ctx1.fill(self,"performFailure:",{aTestCase:aTestCase},smalltalk.TestRunner)})},
args: ["aTestCase"],
source: "performFailure: aTestCase\x0a\x09aTestCase runCase",
messageSends: ["runCase"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "printErrors",
category: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(self._result())._errors())._size())._asString()).__comma(" errors, ");
return $1;
}, function($ctx1) {$ctx1.fill(self,"printErrors",{},smalltalk.TestRunner)})},
args: [],
source: "printErrors\x0a\x09^self result errors size asString , ' errors, '",
messageSends: [",", "asString", "size", "errors", "result"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "printFailures",
category: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(self._result())._failures())._size())._asString()).__comma(" failures");
return $1;
}, function($ctx1) {$ctx1.fill(self,"printFailures",{},smalltalk.TestRunner)})},
args: [],
source: "printFailures\x0a\x09^self result failures size asString, ' failures'",
messageSends: [",", "asString", "size", "failures", "result"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "printPasses",
category: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(_st(self._result())._runs()).__minus(_st(_st(self._result())._errors())._size())).__minus(_st(_st(self._result())._failures())._size()))._asString()).__comma(" passes, ");
return $1;
}, function($ctx1) {$ctx1.fill(self,"printPasses",{},smalltalk.TestRunner)})},
args: [],
source: "printPasses\x0a\x09^(self result runs - self result errors size - self result failures size) asString , ' passes, '",
messageSends: [",", "asString", "-", "size", "failures", "result", "errors", "runs"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "printTotal",
category: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self._result())._total())._asString()).__comma(" runs, ");
return $1;
}, function($ctx1) {$ctx1.fill(self,"printTotal",{},smalltalk.TestRunner)})},
args: [],
source: "printTotal\x0a\x09^self result total asString, ' runs, '",
messageSends: [",", "asString", "total", "result"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "progressBar",
category: 'accessing',
fn: function (){
var self=this;
function $ProgressBar(){return smalltalk.ProgressBar||(typeof ProgressBar=="undefined"?nil:ProgressBar)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@progressBar"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@progressBar"]=_st($ProgressBar())._new();
$1=self["@progressBar"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"progressBar",{},smalltalk.TestRunner)})},
args: [],
source: "progressBar\x0a\x09^progressBar ifNil: [progressBar := ProgressBar new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["ProgressBar"]
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBoxOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._renderCategoriesOn_(html);
_st($1)._renderClassesOn_(html);
$2=_st($1)._renderResultsOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderBoxOn:",{html:html},smalltalk.TestRunner)})},
args: ["html"],
source: "renderBoxOn: html\x0a\x09self\x0a\x09renderCategoriesOn: html;\x0a\x09renderClassesOn: html;\x0a\x09renderResultsOn: html",
messageSends: ["renderCategoriesOn:", "renderClassesOn:", "renderResultsOn:"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._button();
_st($1)._with_("Run selected");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._run_(self._testCases());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},smalltalk.TestRunner)})},
args: ["html"],
source: "renderButtonsOn: html\x0a\x09html button\x0a\x09with: 'Run selected';\x0a\x09onClick: [self run: self testCases]",
messageSends: ["with:", "button", "onClick:", "run:", "testCases"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "renderCategoriesOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@packagesList"]=_st(_st(html)._ul())._class_("amber_column sunit packages");
self._updateCategoriesList();
return self}, function($ctx1) {$ctx1.fill(self,"renderCategoriesOn:",{html:html},smalltalk.TestRunner)})},
args: ["html"],
source: "renderCategoriesOn: html\x0a\x09packagesList := html ul class: 'amber_column sunit packages'.\x0a\x09self updateCategoriesList",
messageSends: ["class:", "ul", "updateCategoriesList"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "renderClassesOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@classesList"]=_st(_st(html)._ul())._class_("amber_column sunit classes");
self._updateClassesList();
return self}, function($ctx1) {$ctx1.fill(self,"renderClassesOn:",{html:html},smalltalk.TestRunner)})},
args: ["html"],
source: "renderClassesOn: html\x0a\x09classesList := html ul class: 'amber_column sunit classes'.\x0a\x09self updateClassesList",
messageSends: ["class:", "ul", "updateClassesList"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "renderErrorsOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(self._result())._errors())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._li();
_st($1)._class_("errors");
_st($1)._with_(_st(_st(_st(_st(each)._class())._name()).__comma(" >> ")).__comma(_st(each)._selector()));
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._performFailure_(each);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderErrorsOn:",{html:html},smalltalk.TestRunner)})},
args: ["html"],
source: "renderErrorsOn: html\x0a\x09self result errors do: [:each |\x0a\x09\x09html li\x0a\x09\x09\x09class: 'errors';\x0a\x09\x09\x09with: each class name, ' >> ', each selector;\x0a\x09\x09\x09\x09\x09\x09onClick: [self performFailure: each]]",
messageSends: ["do:", "class:", "li", "with:", ",", "selector", "name", "class", "onClick:", "performFailure:", "errors", "result"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "renderFailuresOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(self._result())._failures())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._li();
_st($1)._class_("failures");
_st($1)._with_(_st(_st(_st(_st(each)._class())._name()).__comma(" >> ")).__comma(_st(each)._selector()));
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._performFailure_(each);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderFailuresOn:",{html:html},smalltalk.TestRunner)})},
args: ["html"],
source: "renderFailuresOn: html\x0a\x09self result failures do: [:each |\x0a\x09\x09html li\x0a\x09\x09\x09class: 'failures';\x0a\x09\x09\x09with: each class name, ' >> ', each selector;\x0a\x09\x09\x09\x09\x09\x09onClick: [self performFailure: each]]",
messageSends: ["do:", "class:", "li", "with:", ",", "selector", "name", "class", "onClick:", "performFailure:", "failures", "result"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "renderResultsOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@statusDiv"]=_st(html)._div();
_st(html)._with_(self._progressBar());
self["@methodsList"]=_st(_st(html)._ul())._class_("amber_column sunit results");
self._updateMethodsList();
self._updateStatusDiv();
return self}, function($ctx1) {$ctx1.fill(self,"renderResultsOn:",{html:html},smalltalk.TestRunner)})},
args: ["html"],
source: "renderResultsOn: html\x0a\x09statusDiv := html div.\x0a\x09html with: self progressBar.\x0a\x09methodsList := html ul class: 'amber_column sunit results'.\x0a\x09self updateMethodsList.\x0a\x09self updateStatusDiv",
messageSends: ["div", "with:", "progressBar", "class:", "ul", "updateMethodsList", "updateStatusDiv"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "result",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@result"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"result",{},smalltalk.TestRunner)})},
args: [],
source: "result\x0a\x09^result",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "run:",
category: 'actions',
fn: function (aCollection){
var self=this;
var worker;
function $TestSuiteRunner(){return smalltalk.TestSuiteRunner||(typeof TestSuiteRunner=="undefined"?nil:TestSuiteRunner)}
function $ResultAnnouncement(){return smalltalk.ResultAnnouncement||(typeof ResultAnnouncement=="undefined"?nil:ResultAnnouncement)}
return smalltalk.withContext(function($ctx1) { 
var $1;
worker=_st($TestSuiteRunner())._on_(aCollection);
self["@result"]=_st(worker)._result();
_st(_st(worker)._announcer())._on_do_($ResultAnnouncement(),(function(ann){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(ann)._result()).__eq_eq(self["@result"]);
if(smalltalk.assert($1)){
_st(self._progressBar())._updatePercent_(_st(_st(_st(self["@result"])._runs()).__slash(_st(self["@result"])._total())).__star((100)));
self._updateStatusDiv();
return self._updateMethodsList();
};
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st(worker)._run();
return self}, function($ctx1) {$ctx1.fill(self,"run:",{aCollection:aCollection,worker:worker},smalltalk.TestRunner)})},
args: ["aCollection"],
source: "run: aCollection\x0a| worker |\x0a\x09worker := TestSuiteRunner on: aCollection.\x0a\x09result := worker result.\x0a\x09worker announcer on: ResultAnnouncement do: [:ann |\x0a\x09\x09ann result == result ifTrue: [\x0a\x09\x09\x09self progressBar updatePercent: result runs / result total * 100.\x0a\x09\x09\x09self updateStatusDiv.\x0a\x09\x09\x09self updateMethodsList\x0a\x09\x09]\x0a\x09].\x0a\x09worker run",
messageSends: ["on:", "result", "on:do:", "ifTrue:", "updatePercent:", "*", "/", "total", "runs", "progressBar", "updateStatusDiv", "updateMethodsList", "==", "announcer", "run"],
referencedClasses: ["TestSuiteRunner", "ResultAnnouncement"]
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "selectAllCategories",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
_st(self._packages())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(self["@selectedCategories"])._includes_(each);
if(! smalltalk.assert($1)){
return _st(self._selectedCategories())._add_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=self;
_st($2)._updateCategoriesList();
$3=_st($2)._updateClassesList();
return self}, function($ctx1) {$ctx1.fill(self,"selectAllCategories",{},smalltalk.TestRunner)})},
args: [],
source: "selectAllCategories\x0a\x09self packages do: [:each |\x0a\x09\x09(selectedCategories includes: each) ifFalse: [\x0a\x09\x09\x09self selectedCategories add: each]].\x0a\x09self\x0a\x09\x09updateCategoriesList;\x0a\x09\x09updateClassesList",
messageSends: ["do:", "ifFalse:", "add:", "selectedCategories", "includes:", "packages", "updateCategoriesList", "updateClassesList"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "selectAllClasses",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
_st(self._classes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(self["@selectedClasses"])._includes_(each);
if(! smalltalk.assert($1)){
return _st(self._selectedClasses())._add_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=self;
_st($2)._updateCategoriesList();
$3=_st($2)._updateClassesList();
return self}, function($ctx1) {$ctx1.fill(self,"selectAllClasses",{},smalltalk.TestRunner)})},
args: [],
source: "selectAllClasses\x0a\x09self classes do: [:each |\x0a\x09\x09(selectedClasses includes: each) ifFalse: [\x0a\x09\x09\x09self selectedClasses add: each]].\x0a\x09self\x0a\x09\x09updateCategoriesList;\x0a\x09\x09updateClassesList",
messageSends: ["do:", "ifFalse:", "add:", "selectedClasses", "includes:", "classes", "updateCategoriesList", "updateClassesList"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedCategories",
category: 'accessing',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@selectedCategories"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@selectedCategories"]=_st($Array())._new();
$1=self["@selectedCategories"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedCategories",{},smalltalk.TestRunner)})},
args: [],
source: "selectedCategories\x0a\x09^selectedCategories ifNil: [selectedCategories := Array new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedClasses",
category: 'accessing',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@selectedClasses"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@selectedClasses"]=_st($Array())._new();
$1=self["@selectedClasses"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedClasses",{},smalltalk.TestRunner)})},
args: [],
source: "selectedClasses\x0a\x09^selectedClasses ifNil: [selectedClasses := Array new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "statusInfo",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self._printTotal()).__comma(self._printPasses())).__comma(self._printErrors())).__comma(self._printFailures());
return $1;
}, function($ctx1) {$ctx1.fill(self,"statusInfo",{},smalltalk.TestRunner)})},
args: [],
source: "statusInfo\x0a\x09^self printTotal, self printPasses, self printErrors, self printFailures",
messageSends: [",", "printFailures", "printErrors", "printPasses", "printTotal"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "testCases",
category: 'accessing',
fn: function (){
var self=this;
var testCases;
return smalltalk.withContext(function($ctx1) { 
var $1;
testCases=[];
_st(_st(self._selectedClasses())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self._selectedCategories())._includes_(_st(each)._category());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(testCases)._addAll_(_st(each)._buildSuite());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=testCases;
return $1;
}, function($ctx1) {$ctx1.fill(self,"testCases",{testCases:testCases},smalltalk.TestRunner)})},
args: [],
source: "testCases\x0a\x09| testCases |\x0a\x09testCases := #().\x0a\x09(self selectedClasses\x0a\x09\x09select: [:each | self selectedCategories includes: each category])\x0a\x09\x09do: [:each | testCases addAll: each buildSuite].\x0a\x09^testCases",
messageSends: ["do:", "addAll:", "buildSuite", "select:", "includes:", "category", "selectedCategories", "selectedClasses"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "toggleCategory:",
category: 'actions',
fn: function (aCategory){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._isSelectedCategory_(aCategory);
if(smalltalk.assert($1)){
_st(self["@selectedCategories"])._remove_(aCategory);
} else {
_st(self["@selectedCategories"])._add_(aCategory);
};
$2=self;
_st($2)._updateCategoriesList();
$3=_st($2)._updateClassesList();
return self}, function($ctx1) {$ctx1.fill(self,"toggleCategory:",{aCategory:aCategory},smalltalk.TestRunner)})},
args: ["aCategory"],
source: "toggleCategory: aCategory\x0a\x09(self isSelectedCategory: aCategory)\x0a\x09\x09ifFalse: [selectedCategories add: aCategory]\x0a\x09\x09ifTrue: [selectedCategories remove: aCategory].\x0a\x09self\x0a\x09\x09updateCategoriesList;\x0a\x09\x09updateClassesList",
messageSends: ["ifFalse:ifTrue:", "add:", "remove:", "isSelectedCategory:", "updateCategoriesList", "updateClassesList"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "toggleClass:",
category: 'actions',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isSelectedClass_(aClass);
if(smalltalk.assert($1)){
_st(self["@selectedClasses"])._remove_(aClass);
} else {
_st(self["@selectedClasses"])._add_(aClass);
};
self._updateClassesList();
return self}, function($ctx1) {$ctx1.fill(self,"toggleClass:",{aClass:aClass},smalltalk.TestRunner)})},
args: ["aClass"],
source: "toggleClass: aClass\x0a\x09(self isSelectedClass: aClass)\x0a\x09\x09ifFalse: [selectedClasses add: aClass]\x0a\x09\x09ifTrue: [selectedClasses remove: aClass].\x0a\x09self\x0a\x09\x09updateClassesList",
messageSends: ["ifFalse:ifTrue:", "add:", "remove:", "isSelectedClass:", "updateClassesList"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "updateCategoriesList",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
_st(self["@packagesList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._li();
_st($1)._class_("all");
_st($1)._with_("All");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._selectAllCategories();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$2;
return _st(self._packages())._do_((function(each){
var li;
return smalltalk.withContext(function($ctx3) {
li=_st(html)._li();
li;
$3=_st(self._selectedCategories())._includes_(each);
if(smalltalk.assert($3)){
_st(li)._class_("selected");
};
$4=li;
_st($4)._with_(each);
$5=_st($4)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._toggleCategory_(each);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
return $5;
}, function($ctx3) {$ctx3.fillBlock({each:each,li:li},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateCategoriesList",{},smalltalk.TestRunner)})},
args: [],
source: "updateCategoriesList\x0a\x09packagesList contents: [:html |\x0a\x09\x09html li\x0a\x09\x09class: 'all';\x0a\x09\x09with: 'All';\x0a\x09\x09onClick: [self selectAllCategories].\x0a\x09self packages do: [:each || li |\x0a\x09\x09li := html li.\x0a\x09\x09(self selectedCategories includes: each) ifTrue: [\x0a\x09\x09li class: 'selected'].\x0a\x09\x09li\x0a\x09\x09with: each;\x0a\x09\x09onClick: [self toggleCategory: each]]]",
messageSends: ["contents:", "class:", "li", "with:", "onClick:", "selectAllCategories", "do:", "ifTrue:", "includes:", "selectedCategories", "toggleCategory:", "packages"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "updateClassesList",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
_st(self["@classesList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
$1=_st(self._selectedCategories())._isEmpty();
if(! smalltalk.assert($1)){
$2=_st(html)._li();
_st($2)._class_("all");
_st($2)._with_("All");
$3=_st($2)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._selectAllClasses();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$3;
};
return _st(self._classes())._do_((function(each){
var li;
return smalltalk.withContext(function($ctx3) {
li=_st(html)._li();
li;
$4=_st(self._selectedClasses())._includes_(each);
if(smalltalk.assert($4)){
_st(li)._class_("selected");
};
$5=li;
_st($5)._with_(_st(each)._name());
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._toggleClass_(each);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
return $6;
}, function($ctx3) {$ctx3.fillBlock({each:each,li:li},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateClassesList",{},smalltalk.TestRunner)})},
args: [],
source: "updateClassesList\x0a\x09classesList contents: [:html |\x0a\x09(self selectedCategories isEmpty) ifFalse: [\x0a\x09\x09html li\x0a\x09\x09\x09class: 'all';\x0a\x09\x09\x09with: 'All';\x0a\x09\x09\x09onClick: [self selectAllClasses]].\x0a\x09self classes do: [:each || li |\x0a\x09\x09li := html li.\x0a\x09\x09(self selectedClasses includes: each) ifTrue: [\x0a\x09\x09\x09li class: 'selected'].\x0a\x09\x09li\x0a\x09\x09\x09with: each name;\x0a\x09\x09\x09onClick: [self toggleClass: each]]]",
messageSends: ["contents:", "ifFalse:", "class:", "li", "with:", "onClick:", "selectAllClasses", "isEmpty", "selectedCategories", "do:", "ifTrue:", "includes:", "selectedClasses", "name", "toggleClass:", "classes"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMethodsList",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@methodsList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
self._renderErrorsOn_(html);
return self._renderFailuresOn_(html);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateMethodsList",{},smalltalk.TestRunner)})},
args: [],
source: "updateMethodsList\x0a\x09methodsList contents: [:html |\x0a\x09\x09self renderErrorsOn: html.\x0a\x09\x09\x09\x09self renderFailuresOn: html]",
messageSends: ["contents:", "renderErrorsOn:", "renderFailuresOn:"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
smalltalk.method({
selector: "updateStatusDiv",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@statusDiv"])._class_("sunit status ".__comma(_st(self["@result"])._status()));
_st(self["@statusDiv"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._span())._with_(self._statusInfo());
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateStatusDiv",{},smalltalk.TestRunner)})},
args: [],
source: "updateStatusDiv\x0a\x09statusDiv class: 'sunit status ', result status.\x0a\x09statusDiv contents: [:html |\x0a\x09\x09html span with: self statusInfo]",
messageSends: ["class:", ",", "status", "contents:", "with:", "statusInfo", "span"],
referencedClasses: []
}),
smalltalk.TestRunner);



smalltalk.addClass('Workspace', smalltalk.TabWidget, ['sourceArea'], 'IDE');
smalltalk.addMethod(
smalltalk.method({
selector: "clearWorkspace",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@sourceArea"])._clear();
return self}, function($ctx1) {$ctx1.fill(self,"clearWorkspace",{},smalltalk.Workspace)})},
args: [],
source: "clearWorkspace\x0a\x09sourceArea clear",
messageSends: ["clear"],
referencedClasses: []
}),
smalltalk.Workspace);

smalltalk.addMethod(
smalltalk.method({
selector: "doIt",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@sourceArea"])._doIt();
return self}, function($ctx1) {$ctx1.fill(self,"doIt",{},smalltalk.Workspace)})},
args: [],
source: "doIt\x0a\x09sourceArea doIt",
messageSends: ["doIt"],
referencedClasses: []
}),
smalltalk.Workspace);

smalltalk.addMethod(
smalltalk.method({
selector: "fileIn",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@sourceArea"])._fileIn();
return self}, function($ctx1) {$ctx1.fill(self,"fileIn",{},smalltalk.Workspace)})},
args: [],
source: "fileIn\x0a\x09sourceArea fileIn",
messageSends: ["fileIn"],
referencedClasses: []
}),
smalltalk.Workspace);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectIt",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@sourceArea"])._inspectIt();
return self}, function($ctx1) {$ctx1.fill(self,"inspectIt",{},smalltalk.Workspace)})},
args: [],
source: "inspectIt\x0a\x09sourceArea inspectIt",
messageSends: ["inspectIt"],
referencedClasses: []
}),
smalltalk.Workspace);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Workspace";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.Workspace)})},
args: [],
source: "label\x0a\x09^'Workspace'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Workspace);

smalltalk.addMethod(
smalltalk.method({
selector: "printIt",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@sourceArea"])._printIt();
return self}, function($ctx1) {$ctx1.fill(self,"printIt",{},smalltalk.Workspace)})},
args: [],
source: "printIt\x0a\x09sourceArea printIt",
messageSends: ["printIt"],
referencedClasses: []
}),
smalltalk.Workspace);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBoxOn:",
category: 'rendering',
fn: function (html){
var self=this;
function $SourceArea(){return smalltalk.SourceArea||(typeof SourceArea=="undefined"?nil:SourceArea)}
return smalltalk.withContext(function($ctx1) { 
self["@sourceArea"]=_st($SourceArea())._new();
_st(self["@sourceArea"])._renderOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderBoxOn:",{html:html},smalltalk.Workspace)})},
args: ["html"],
source: "renderBoxOn: html\x0a\x09sourceArea := SourceArea new.\x0a\x09sourceArea renderOn: html",
messageSends: ["new", "renderOn:"],
referencedClasses: ["SourceArea"]
}),
smalltalk.Workspace);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10;
$1=_st(html)._button();
_st($1)._with_("DoIt");
_st($1)._title_("ctrl+d");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._doIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=_st(html)._button();
_st($3)._with_("PrintIt");
_st($3)._title_("ctrl+p");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._printIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$5=_st(html)._button();
_st($5)._with_("InspectIt");
_st($5)._title_("ctrl+i");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._inspectIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$7=_st(html)._button();
_st($7)._with_("FileIn");
_st($7)._title_("ctrl+f");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._fileIn();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$9=_st(html)._button();
_st($9)._with_("Clear workspace");
$10=_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._clearWorkspace();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},smalltalk.Workspace)})},
args: ["html"],
source: "renderButtonsOn: html\x0a\x09html button\x0a\x09with: 'DoIt';\x0a\x09title: 'ctrl+d';\x0a\x09onClick: [self doIt].\x0a\x09html button\x0a\x09with: 'PrintIt';\x0a\x09title: 'ctrl+p';\x0a\x09onClick: [self printIt].\x0a\x09html button\x0a\x09with: 'InspectIt';\x0a\x09title: 'ctrl+i';\x0a\x09onClick: [self inspectIt].\x0a\x09html button\x0a\x09with: 'FileIn';\x0a\x09title: 'ctrl+f';\x0a\x09onClick: [self fileIn].\x0a\x09html button\x0a\x09with: 'Clear workspace';\x0a\x09onClick: [self clearWorkspace]",
messageSends: ["with:", "button", "title:", "onClick:", "doIt", "printIt", "inspectIt", "fileIn", "clearWorkspace"],
referencedClasses: []
}),
smalltalk.Workspace);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Workspace.superclass.fn.prototype._show.apply(_st(self), []);
_st(self["@sourceArea"])._focus();
return self}, function($ctx1) {$ctx1.fill(self,"show",{},smalltalk.Workspace)})},
args: [],
source: "show\x0a\x09super show.\x0a\x09sourceArea focus.",
messageSends: ["show", "focus"],
referencedClasses: []
}),
smalltalk.Workspace);



smalltalk.addMethod(
smalltalk.method({
selector: "inspectOn:",
category: '*IDE',
fn: function (anInspector){
var self=this;
var variables;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
variables=_st($Dictionary())._new();
_st(variables)._at_put_("#self",self);
self._withIndexDo_((function(each,i){
return smalltalk.withContext(function($ctx2) {
return _st(variables)._at_put_(i,each);
}, function($ctx2) {$ctx2.fillBlock({each:each,i:i},$ctx1)})}));
$1=anInspector;
_st($1)._setLabel_(self._printString());
$2=_st($1)._setVariables_(variables);
return self}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},smalltalk.Collection)})},
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self.\x0a\x09self withIndexDo: [:each :i |\x0a\x09\x09variables at: i put: each].\x0a\x09anInspector\x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: variables",
messageSends: ["new", "at:put:", "withIndexDo:", "setLabel:", "printString", "setVariables:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectOn:",
category: '*IDE',
fn: function (anInspector){
var self=this;
var variables;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
variables=_st($Dictionary())._new();
_st(variables)._at_put_("#self",self);
_st(variables)._at_put_("#keys",self._keys());
self._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(variables)._at_put_(key,value);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
$1=anInspector;
_st($1)._setLabel_(self._printString());
$2=_st($1)._setVariables_(variables);
return self}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},smalltalk.HashedCollection)})},
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self.\x0a\x09variables at: '#keys' put: self keys.\x0a\x09self keysAndValuesDo: [:key :value |\x0a\x09\x09variables at: key put: value].\x0a\x09anInspector\x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: variables",
messageSends: ["new", "at:put:", "keys", "keysAndValuesDo:", "setLabel:", "printString", "setVariables:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectOn:",
category: '*IDE',
fn: function (anInspector){
var self=this;
var label;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.String.superclass.fn.prototype._inspectOn_.apply(_st(self), [anInspector]);
$1=_st(_st(self._printString())._size()).__gt((30));
if(smalltalk.assert($1)){
label=_st(_st(self._printString())._copyFrom_to_((1),(30))).__comma("...'");
label;
} else {
label=self._printString();
label;
};
_st(anInspector)._setLabel_(label);
return self}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,label:label},smalltalk.String)})},
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| label |\x0a\x09super inspectOn: anInspector.\x0a\x09self printString size > 30\x0a\x09\x09ifTrue: [label := (self printString copyFrom: 1 to: 30), '...''']\x0a\x09\x09ifFalse: [label := self printString].\x0a\x09anInspector setLabel: label",
messageSends: ["inspectOn:", "ifTrue:ifFalse:", ",", "copyFrom:to:", "printString", ">", "size", "setLabel:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectOn:",
category: '*IDE',
fn: function (anInspector){
var self=this;
var variables;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
variables=_st($Dictionary())._new();
_st(variables)._at_put_("#self",self);
_st(self["@elements"])._withIndexDo_((function(each,i){
return smalltalk.withContext(function($ctx2) {
return _st(variables)._at_put_(i,each);
}, function($ctx2) {$ctx2.fillBlock({each:each,i:i},$ctx1)})}));
$1=anInspector;
_st($1)._setLabel_(self._printString());
$2=_st($1)._setVariables_(variables);
return self}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},smalltalk.Set)})},
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self.\x0a\x09elements withIndexDo: [:each :i |\x0a\x09\x09variables at: i put: each].\x0a\x09anInspector\x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: variables",
messageSends: ["new", "at:put:", "withIndexDo:", "setLabel:", "printString", "setVariables:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectOn:",
category: '*IDE',
fn: function (anInspector){
var self=this;
var variables;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
variables=_st($Dictionary())._new();
_st(variables)._at_put_("#self",self);
_st(variables)._at_put_("#year",self._year());
_st(variables)._at_put_("#month",self._month());
_st(variables)._at_put_("#day",self._day());
_st(variables)._at_put_("#hours",self._hours());
_st(variables)._at_put_("#minutes",self._minutes());
_st(variables)._at_put_("#seconds",self._seconds());
_st(variables)._at_put_("#milliseconds",self._milliseconds());
$1=anInspector;
_st($1)._setLabel_(self._printString());
$2=_st($1)._setVariables_(variables);
return self}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},smalltalk.Date)})},
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self.\x0a\x09variables at: '#year' put: self year.\x0a\x09variables at: '#month' put: self month.\x0a\x09variables at: '#day' put: self day.\x0a\x09variables at: '#hours' put: self hours.\x0a\x09variables at: '#minutes' put: self minutes.\x0a\x09variables at: '#seconds' put: self seconds.\x0a\x09variables at: '#milliseconds' put: self milliseconds.\x0a\x09anInspector\x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: variables",
messageSends: ["new", "at:put:", "year", "month", "day", "hours", "minutes", "seconds", "milliseconds", "setLabel:", "printString", "setVariables:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectOn:",
category: '*IDE',
fn: function (anInspector){
var self=this;
var variables;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
variables=_st($Dictionary())._new();
_st(variables)._at_put_("#self",self);
_st(variables)._at_put_("#home",self._home());
_st(variables)._at_put_("#receiver",self._receiver());
_st(variables)._at_put_("#selector",self._selector());
_st(variables)._at_put_("#temps",self._temps());
_st(_st(self._class())._instanceVariableNames())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(variables)._at_put_(each,self._instVarAt_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=anInspector;
_st($1)._setLabel_(self._printString());
$2=_st($1)._setVariables_(variables);
return self}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},smalltalk.MethodContext)})},
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self.\x0a\x09variables at: '#home' put: self home.\x0a\x09variables at: '#receiver' put: self receiver.\x0a\x09variables at: '#selector' put: self selector.\x0a\x09variables at: '#temps' put: self temps.\x0a\x09self class instanceVariableNames do: [:each |\x0a\x09\x09variables at: each put: (self instVarAt: each)].\x0a\x09anInspector\x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: variables",
messageSends: ["new", "at:put:", "home", "receiver", "selector", "temps", "do:", "instVarAt:", "instanceVariableNames", "class", "setLabel:", "printString", "setVariables:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.MethodContext);

