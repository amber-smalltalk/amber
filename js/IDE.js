smalltalk.addPackage('IDE', {});
smalltalk.addClass('ClassesList', smalltalk.Widget, ['browser', 'ul', 'nodes'], 'IDE');
smalltalk.addMethod(
"_browser",
smalltalk.method({
selector: "browser",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@browser"];
}, self, "browser", [], smalltalk.ClassesList)},
args: [],
source: "browser\x0a\x09^browser",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_browser_",
smalltalk.method({
selector: "browser:",
category: 'accessing',
fn: function (aBrowser){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@browser"]=aBrowser;
return self}, self, "browser:", [aBrowser], smalltalk.ClassesList)},
args: ["aBrowser"],
source: "browser: aBrowser\x0a\x09browser := aBrowser",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_category",
smalltalk.method({
selector: "category",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._browser())._selectedPackage();
return $1;
}, self, "category", [], smalltalk.ClassesList)},
args: [],
source: "category\x0a\x09^self browser selectedPackage",
messageSends: ["selectedPackage", "browser"],
referencedClasses: []
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_getNodes",
smalltalk.method({
selector: "getNodes",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$ctx1.classes=nil;
$ctx1.children=nil;
$ctx1.others=nil;
$ctx1.locals.classes=_st(_st(self)._browser())._classes();
$ctx1.locals.children=[];
$ctx1.locals.others=[];
_st($ctx1.locals.classes)._do_((function(each){
return smalltalk.withContext(function($ctx2) { $1=_st($ctx1.locals.classes)._includes_(_st(each)._superclass());
if(smalltalk.assert($1)){
return _st($ctx1.locals.others)._add_(each);
} else {
return _st($ctx1.locals.children)._add_(each);
};
})}));
$2=_st($ctx1.locals.children)._collect_((function(each){
return smalltalk.withContext(function($ctx2) { return _st((smalltalk.ClassesListNode || ClassesListNode))._on_browser_classes_level_(each,_st(self)._browser(),$ctx1.locals.others,(0));
})}));
return $2;
}, self, "getNodes", [], smalltalk.ClassesList)},
args: [],
source: "getNodes\x0a\x09| classes children others |\x0a\x09classes := self browser classes.\x0a\x09children := #().\x0a\x09others := #().\x0a\x09classes do: [:each |\x0a\x09\x09(classes includes: each superclass)\x0a\x09\x09\x09ifFalse: [children add: each]\x0a\x09\x09\x09ifTrue: [others add: each]].\x0a\x09^children collect: [:each |\x0a\x09\x09ClassesListNode on: each browser: self browser classes: others level: 0]",
messageSends: ["classes", "browser", "do:", "ifFalse:ifTrue:", "add:", "includes:", "superclass", "collect:", "on:browser:classes:level:"],
referencedClasses: ["ClassesListNode"]
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { if(($receiver = self["@nodes"]) == nil || $receiver == undefined){
self["@nodes"]=_st(self)._getNodes();
self["@nodes"];
} else {
self["@nodes"];
};
return self["@nodes"];
}, self, "nodes", [], smalltalk.ClassesList)},
args: [],
source: "nodes\x0a\x09nodes ifNil: [nodes := self getNodes].\x0a\x09^nodes",
messageSends: ["ifNil:", "getNodes"],
referencedClasses: []
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._ul();
_st($1)._class_("amber_column browser classes");
$2=_st($1)._yourself();
self["@ul"]=$2;
_st(self)._updateNodes();
return self}, self, "renderOn:", [html], smalltalk.ClassesList)},
args: ["html"],
source: "renderOn: html\x0a\x09ul := html ul\x0a\x09\x09class: 'amber_column browser classes';\x0a\x09\x09yourself.\x0a\x09self updateNodes",
messageSends: ["class:", "ul", "yourself", "updateNodes"],
referencedClasses: []
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_resetNodes",
smalltalk.method({
selector: "resetNodes",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@nodes"]=nil;
return self}, self, "resetNodes", [], smalltalk.ClassesList)},
args: [],
source: "resetNodes\x0a\x09nodes := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_updateNodes",
smalltalk.method({
selector: "updateNodes",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@ul"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx3) { return _st(each)._renderOn_(html);
})}));
})}));
return self}, self, "updateNodes", [], smalltalk.ClassesList)},
args: [],
source: "updateNodes\x0a\x09ul contents: [:html |\x0a\x09\x09self nodes do: [:each |\x0a\x09\x09\x09each renderOn: html]]",
messageSends: ["contents:", "do:", "renderOn:", "nodes"],
referencedClasses: []
}),
smalltalk.ClassesList);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aBrowser){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._browser_(aBrowser);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "on:", [aBrowser], smalltalk.ClassesList.klass)},
args: ["aBrowser"],
source: "on: aBrowser\x0a\x09^self new \x0a\x09\x09browser: aBrowser; \x0a\x09\x09yourself",
messageSends: ["browser:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.ClassesList.klass);


smalltalk.addClass('ClassesListNode', smalltalk.Widget, ['browser', 'theClass', 'level', 'nodes'], 'IDE');
smalltalk.addMethod(
"_browser",
smalltalk.method({
selector: "browser",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@browser"];
}, self, "browser", [], smalltalk.ClassesListNode)},
args: [],
source: "browser\x0a\x09^browser",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_browser_",
smalltalk.method({
selector: "browser:",
category: 'accessing',
fn: function (aBrowser){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@browser"]=aBrowser;
return self}, self, "browser:", [aBrowser], smalltalk.ClassesListNode)},
args: ["aBrowser"],
source: "browser: aBrowser\x0a\x09browser := aBrowser",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_getNodesFrom_",
smalltalk.method({
selector: "getNodesFrom:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.children=nil;
$ctx1.others=nil;
$ctx1.locals.children=[];
$ctx1.locals.others=[];
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) { $1=_st(_st(each)._superclass()).__eq(_st(self)._theClass());
if(smalltalk.assert($1)){
return _st($ctx1.locals.children)._add_(each);
} else {
return _st($ctx1.locals.others)._add_(each);
};
})}));
self["@nodes"]=_st($ctx1.locals.children)._collect_((function(each){
return smalltalk.withContext(function($ctx2) { return _st((smalltalk.ClassesListNode || ClassesListNode))._on_browser_classes_level_(each,_st(self)._browser(),$ctx1.locals.others,_st(_st(self)._level()).__plus((1)));
})}));
return self}, self, "getNodesFrom:", [aCollection], smalltalk.ClassesListNode)},
args: ["aCollection"],
source: "getNodesFrom: aCollection\x0a\x09| children others |\x0a\x09children := #().\x0a\x09others := #().\x0a\x09aCollection do: [:each |\x0a\x09\x09(each superclass = self theClass)\x0a\x09\x09\x09ifTrue: [children add: each]\x0a\x09\x09\x09ifFalse: [others add: each]].\x0a\x09nodes:= children collect: [:each |\x0a\x09\x09ClassesListNode on: each browser: self browser classes: others level: self level + 1]",
messageSends: ["do:", "ifTrue:ifFalse:", "add:", "=", "theClass", "superclass", "collect:", "on:browser:classes:level:", "browser", "+", "level"],
referencedClasses: ["ClassesListNode"]
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.str=nil;
$ctx1.locals.str=_st(_st((smalltalk.String || String))._new())._writeStream();
_st(_st(self)._level())._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.str)._nextPutAll_("&nbsp;&nbsp;&nbsp;&nbsp;");
})}));
_st($ctx1.locals.str)._nextPutAll_(_st(_st(self)._theClass())._name());
$1=_st($ctx1.locals.str)._contents();
return $1;
}, self, "label", [], smalltalk.ClassesListNode)},
args: [],
source: "label\x0a\x09| str |\x0a\x09str := String new writeStream.\x0a\x09self level timesRepeat: [\x0a\x09\x09str nextPutAll: '&nbsp;&nbsp;&nbsp;&nbsp;'].\x0a\x09str nextPutAll: self theClass name.\x0a\x09^str contents",
messageSends: ["writeStream", "new", "timesRepeat:", "nextPutAll:", "level", "name", "theClass", "contents"],
referencedClasses: ["String"]
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_level",
smalltalk.method({
selector: "level",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@level"];
}, self, "level", [], smalltalk.ClassesListNode)},
args: [],
source: "level\x0a\x09^level",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_level_",
smalltalk.method({
selector: "level:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@level"]=anInteger;
return self}, self, "level:", [anInteger], smalltalk.ClassesListNode)},
args: ["anInteger"],
source: "level: anInteger\x0a\x09level := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@nodes"];
}, self, "nodes", [], smalltalk.ClassesListNode)},
args: [],
source: "nodes\x0a\x09^nodes",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: '',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$ctx1.li=nil;
$ctx1.cssClass=nil;
$ctx1.locals.cssClass="";
$ctx1.locals.li=_st(_st(html)._li())._onClick_((function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._browser())._selectClass_(_st(self)._theClass());
})}));
_st(_st($ctx1.locals.li)._asJQuery())._html_(_st(self)._label());
$1=_st(_st(_st(self)._browser())._selectedClass()).__eq(_st(self)._theClass());
if(smalltalk.assert($1)){
$ctx1.locals.cssClass=_st($ctx1.locals.cssClass).__comma(" selected");
$ctx1.locals.cssClass;
};
$2=_st(_st(_st(self)._theClass())._comment())._isEmpty();
if(! smalltalk.assert($2)){
$ctx1.locals.cssClass=_st($ctx1.locals.cssClass).__comma(" commented");
$ctx1.locals.cssClass;
};
_st($ctx1.locals.li)._class_($ctx1.locals.cssClass);
_st(_st(self)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(each)._renderOn_(html);
})}));
return self}, self, "renderOn:", [html], smalltalk.ClassesListNode)},
args: ["html"],
source: "renderOn: html\x0a\x09| li cssClass |\x0a\x09cssClass := ''.\x0a\x09li := html li \x0a\x09\x09onClick: [self browser selectClass: self theClass]. \x0a\x09li asJQuery html: self label.\x0a\x0a\x09self browser selectedClass = self theClass ifTrue:  [\x0a\x09\x09cssClass := cssClass, ' selected'].\x0a\x0a\x09self theClass comment isEmpty ifFalse: [\x0a\x09\x09cssClass := cssClass, ' commented'].\x0a\x0a\x09li class: cssClass.\x0a\x0a\x09self nodes do: [:each |\x0a\x09\x09each renderOn: html]",
messageSends: ["onClick:", "selectClass:", "theClass", "browser", "li", "html:", "label", "asJQuery", "ifTrue:", ",", "=", "selectedClass", "ifFalse:", "isEmpty", "comment", "class:", "do:", "renderOn:", "nodes"],
referencedClasses: []
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@theClass"];
}, self, "theClass", [], smalltalk.ClassesListNode)},
args: [],
source: "theClass\x0a\x09^theClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@theClass"]=aClass;
return self}, self, "theClass:", [aClass], smalltalk.ClassesListNode)},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassesListNode);


smalltalk.addMethod(
"_on_browser_classes_level_",
smalltalk.method({
selector: "on:browser:classes:level:",
category: 'instance creation',
fn: function (aClass,aBrowser,aCollection,anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._theClass_(aClass);
_st($2)._browser_(aBrowser);
_st($2)._level_(anInteger);
_st($2)._getNodesFrom_(aCollection);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "on:browser:classes:level:", [aClass,aBrowser,aCollection,anInteger], smalltalk.ClassesListNode.klass)},
args: ["aClass", "aBrowser", "aCollection", "anInteger"],
source: "on: aClass browser: aBrowser classes: aCollection level: anInteger\x0a\x09^self new\x0a\x09\x09theClass: aClass;\x0a\x09\x09browser: aBrowser;\x0a\x09\x09level: anInteger;\x0a\x09\x09getNodesFrom: aCollection;\x0a\x09\x09yourself",
messageSends: ["theClass:", "new", "browser:", "level:", "getNodesFrom:", "yourself"],
referencedClasses: []
}),
smalltalk.ClassesListNode.klass);


smalltalk.addClass('DebugErrorHandler', smalltalk.ErrorHandler, [], 'IDE');
smalltalk.addMethod(
"_handleError_",
smalltalk.method({
selector: "handleError:",
category: 'error handling',
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st((function(){
return smalltalk.withContext(function($ctx2) { $1=_st((smalltalk.Debugger || Debugger))._new();
_st($1)._error_(anError);
$2=_st($1)._open();
return $2;
})}))._on_do_((smalltalk.Error || Error),(function(error){
return smalltalk.withContext(function($ctx2) { return _st(_st((smalltalk.ErrorHandler || ErrorHandler))._new())._handleError_(error);
})}));
return self}, self, "handleError:", [anError], smalltalk.DebugErrorHandler)},
args: ["anError"],
source: "handleError: anError\x0a\x09[ Debugger new\x0a\x09\x09error: anError;\x0a\x09\x09open ] on: Error do: [ :error |\x0a\x09\x09\x09ErrorHandler new handleError: error ]",
messageSends: ["on:do:", "handleError:", "new", "error:", "open"],
referencedClasses: ["Error", "ErrorHandler", "Debugger"]
}),
smalltalk.DebugErrorHandler);


smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._register();
return self}, self, "initialize", [], smalltalk.DebugErrorHandler.klass)},
args: [],
source: "initialize\x0a\x09self register",
messageSends: ["register"],
referencedClasses: []
}),
smalltalk.DebugErrorHandler.klass);


smalltalk.addClass('SourceArea', smalltalk.Widget, ['editor', 'div', 'receiver', 'onDoIt'], 'IDE');
smalltalk.addMethod(
"_clear",
smalltalk.method({
selector: "clear",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._val_("");
return self}, self, "clear", [], smalltalk.SourceArea)},
args: [],
source: "clear\x0a      self val: ''",
messageSends: ["val:"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_currentLine",
smalltalk.method({
selector: "currentLine",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@editor"])._getLine_(_st(_st(self["@editor"])._getCursor())._line());
return $1;
}, self, "currentLine", [], smalltalk.SourceArea)},
args: [],
source: "currentLine\x0a    ^editor getLine: (editor getCursor line)",
messageSends: ["getLine:", "line", "getCursor"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_currentLineOrSelection",
smalltalk.method({
selector: "currentLineOrSelection",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self["@editor"])._somethingSelected();
if(smalltalk.assert($2)){
$1=_st(self)._selection();
} else {
$1=_st(self)._currentLine();
};
return $1;
}, self, "currentLineOrSelection", [], smalltalk.SourceArea)},
args: [],
source: "currentLineOrSelection\x0a    ^editor somethingSelected\x0a\x09ifFalse: [self currentLine]\x0a\x09ifTrue: [self selection]",
messageSends: ["ifFalse:ifTrue:", "currentLine", "selection", "somethingSelected"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_doIt",
smalltalk.method({
selector: "doIt",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.result=nil;
$ctx1.locals.result=_st(self)._eval_(_st(self)._currentLineOrSelection());
$1=_st(self)._onDoIt();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(_st(self)._onDoIt())._value();
};
return $ctx1.locals.result;
}, self, "doIt", [], smalltalk.SourceArea)},
args: [],
source: "doIt\x0a    | result |\x0a    result := self eval: self currentLineOrSelection.\x0a    self onDoIt ifNotNil: [self onDoIt value].\x0a    ^result",
messageSends: ["eval:", "currentLineOrSelection", "ifNotNil:", "value", "onDoIt"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_editor",
smalltalk.method({
selector: "editor",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@editor"];
}, self, "editor", [], smalltalk.SourceArea)},
args: [],
source: "editor\x0a\x09^editor",
messageSends: [],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_eval_",
smalltalk.method({
selector: "eval:",
category: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
var $early={};
try {
$ctx1.compiler=nil;
$ctx1.locals.compiler=_st((smalltalk.Compiler || Compiler))._new();
_st((function(){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.compiler)._parseExpression_(aString);
})}))._on_do_((smalltalk.Error || Error),(function(ex){
return smalltalk.withContext(function($ctx2) { $1=_st(window)._alert_(_st(ex)._messageText());
throw $early=[$1];
})}));
$2=_st(_st(_st($ctx1.locals.compiler)._eval_(_st($ctx1.locals.compiler)._compile_forClass_(_st(_st("doIt ^[").__comma(aString)).__comma("] value"),(smalltalk.DoIt || DoIt))))._fn())._applyTo_arguments_(_st(self)._receiver(),[]);
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, self, "eval:", [aString], smalltalk.SourceArea)},
args: ["aString"],
source: "eval: aString\x0a\x09| compiler  |\x0a\x09compiler := Compiler new.\x0a\x09[compiler parseExpression: aString] on: Error do: [:ex |\x0a\x09\x09^window alert: ex messageText].\x0a\x09^(compiler eval: (compiler compile: 'doIt ^[', aString, '] value' forClass: DoIt)) fn applyTo: self receiver arguments: #()",
messageSends: ["new", "on:do:", "alert:", "messageText", "parseExpression:", "applyTo:arguments:", "receiver", "fn", "eval:", "compile:forClass:", ","],
referencedClasses: ["Compiler", "Error", "DoIt"]
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_fileIn",
smalltalk.method({
selector: "fileIn",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.Importer || Importer))._new())._import_(_st(_st(self)._currentLineOrSelection())._readStream());
return self}, self, "fileIn", [], smalltalk.SourceArea)},
args: [],
source: "fileIn\x0a    Importer new import: self currentLineOrSelection readStream",
messageSends: ["import:", "readStream", "currentLineOrSelection", "new"],
referencedClasses: ["Importer"]
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_focus",
smalltalk.method({
selector: "focus",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._editor())._focus();
return self}, self, "focus", [], smalltalk.SourceArea)},
args: [],
source: "focus\x0a      self editor focus.",
messageSends: ["focus", "editor"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_handleKeyDown_",
smalltalk.method({
selector: "handleKeyDown:",
category: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { if(anEvent.ctrlKey) {
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
;
return self}, self, "handleKeyDown:", [anEvent], smalltalk.SourceArea)},
args: ["anEvent"],
source: "handleKeyDown: anEvent\x0a    <if(anEvent.ctrlKey) {\x0a\x09\x09if(anEvent.keyCode === 80) { //ctrl+p\x0a\x09\x09\x09self._printIt();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09\x09if(anEvent.keyCode === 68) { //ctrl+d\x0a\x09\x09\x09self._doIt();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09\x09if(anEvent.keyCode === 73) { //ctrl+i\x0a\x09\x09\x09self._inspectIt();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_inspectIt",
smalltalk.method({
selector: "inspectIt",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._doIt())._inspect();
return self}, self, "inspectIt", [], smalltalk.SourceArea)},
args: [],
source: "inspectIt\x0a    self doIt inspect",
messageSends: ["inspect", "doIt"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_onDoIt",
smalltalk.method({
selector: "onDoIt",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@onDoIt"];
}, self, "onDoIt", [], smalltalk.SourceArea)},
args: [],
source: "onDoIt\x0a\x09^onDoIt",
messageSends: [],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_onDoIt_",
smalltalk.method({
selector: "onDoIt:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@onDoIt"]=aBlock;
return self}, self, "onDoIt:", [aBlock], smalltalk.SourceArea)},
args: ["aBlock"],
source: "onDoIt: aBlock\x0a\x09onDoIt := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_onKeyDown_",
smalltalk.method({
selector: "onKeyDown:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@div"])._onKeyDown_(aBlock);
return self}, self, "onKeyDown:", [aBlock], smalltalk.SourceArea)},
args: ["aBlock"],
source: "onKeyDown: aBlock\x0a\x09div onKeyDown: aBlock",
messageSends: ["onKeyDown:"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_onKeyUp_",
smalltalk.method({
selector: "onKeyUp:",
category: 'events',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@div"])._onKeyUp_(aBlock);
return self}, self, "onKeyUp:", [aBlock], smalltalk.SourceArea)},
args: ["aBlock"],
source: "onKeyUp: aBlock\x0a\x09div onKeyUp: aBlock",
messageSends: ["onKeyUp:"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_print_",
smalltalk.method({
selector: "print:",
category: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { $ctx1.start=nil;
$ctx1.stop=nil;
$ctx1.currentLine=nil;
$ctx1.locals.currentLine=_st(_st(self["@editor"])._getCursor_(false))._line();
$ctx1.locals.start=_st((smalltalk.HashedCollection || HashedCollection))._new();
_st($ctx1.locals.start)._at_put_("line",$ctx1.locals.currentLine);
_st($ctx1.locals.start)._at_put_("ch",_st(_st(self["@editor"])._getCursor_(false))._ch());
_st(_st(self["@editor"])._getSelection())._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) { _st($ctx1.locals.start)._at_put_("ch",_st(_st(self["@editor"])._getLine_($ctx1.locals.currentLine))._size());
return _st(self["@editor"])._setSelection_end_(smalltalk.HashedCollection._fromPairs_([_st("line").__minus_gt($ctx1.locals.currentLine),_st("ch").__minus_gt((0))]),$ctx1.locals.start);
})}));
$ctx1.locals.stop=_st((smalltalk.HashedCollection || HashedCollection))._new();
_st($ctx1.locals.stop)._at_put_("line",$ctx1.locals.currentLine);
_st($ctx1.locals.stop)._at_put_("ch",_st(_st(_st($ctx1.locals.start)._at_("ch")).__plus(_st(aString)._size())).__plus((2)));
_st(self["@editor"])._replaceSelection_(_st(_st(_st(_st(self["@editor"])._getSelection()).__comma(" ")).__comma(aString)).__comma(" "));
_st(self["@editor"])._setCursor_(_st(self["@editor"])._getCursor_(true));
_st(self["@editor"])._setSelection_end_($ctx1.locals.stop,$ctx1.locals.start);
return self}, self, "print:", [aString], smalltalk.SourceArea)},
args: ["aString"],
source: "print: aString\x0a\x09| start stop currentLine |\x0a    currentLine := (editor getCursor: false) line.\x0a\x09start := HashedCollection new.\x0a\x09start at: 'line' put: currentLine.\x0a\x09start at: 'ch' put: (editor getCursor: false) ch.\x0a    (editor getSelection) ifEmpty: [\x0a    \x09\x22select current line if selection is empty\x22\x0a    \x09start at: 'ch' put: (editor getLine: currentLine) size.\x0a        editor setSelection: #{'line' -> currentLine. 'ch' -> 0} end: start.\x0a    ].\x0a\x09stop := HashedCollection new.\x0a\x09stop at: 'line' put: currentLine.\x0a\x09stop at: 'ch' put: ((start at: 'ch') + aString size + 2).\x0a\x0a\x09editor replaceSelection: (editor getSelection, ' ', aString, ' ').\x0a\x09editor setCursor: (editor getCursor: true).\x0a\x09editor setSelection: stop end: start",
messageSends: ["line", "getCursor:", "new", "at:put:", "ch", "ifEmpty:", "size", "getLine:", "setSelection:end:", "->", "getSelection", "+", "at:", "replaceSelection:", ",", "setCursor:"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_printIt",
smalltalk.method({
selector: "printIt",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._print_(_st(_st(self)._doIt())._printString());
_st(self)._focus();
return self}, self, "printIt", [], smalltalk.SourceArea)},
args: [],
source: "printIt\x0a    self print: self doIt printString.\x0a\x09self focus.",
messageSends: ["print:", "printString", "doIt", "focus"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@receiver"]) == nil || $receiver == undefined){
$1=_st((smalltalk.DoIt || DoIt))._new();
} else {
$1=self["@receiver"];
};
return $1;
}, self, "receiver", [], smalltalk.SourceArea)},
args: [],
source: "receiver\x0a\x09^receiver ifNil: [DoIt new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["DoIt"]
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@receiver"]=anObject;
return self}, self, "receiver:", [anObject], smalltalk.SourceArea)},
args: ["anObject"],
source: "receiver: anObject\x0a\x09receiver := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { $ctx1.textarea=nil;
self["@div"]=_st(_st(html)._div())._class_("source");
_st(self["@div"])._with_((function(){
return smalltalk.withContext(function($ctx2) { $ctx1.locals.textarea=_st(html)._textarea();
return $ctx1.locals.textarea;
})}));
_st(self)._setEditorOn_(_st($ctx1.locals.textarea)._element());
_st(self["@div"])._onKeyDown_((function(e){
return smalltalk.withContext(function($ctx2) { return _st(self)._handleKeyDown_(e);
})}));
return self}, self, "renderOn:", [html], smalltalk.SourceArea)},
args: ["html"],
source: "renderOn: html\x0a    | textarea |\x0a    div := html div class: 'source'.\x0a    div with: [textarea := html textarea].\x0a    self setEditorOn: textarea element.\x0a    div onKeyDown: [:e | self handleKeyDown: e]",
messageSends: ["class:", "div", "with:", "textarea", "setEditorOn:", "element", "onKeyDown:", "handleKeyDown:"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_selection",
smalltalk.method({
selector: "selection",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@editor"])._getSelection();
return $1;
}, self, "selection", [], smalltalk.SourceArea)},
args: [],
source: "selection\x0a\x09^editor getSelection",
messageSends: ["getSelection"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_selectionEnd",
smalltalk.method({
selector: "selectionEnd",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(textarea, "_element", []), "_selectionEnd", []);
    return $1;
},
args: [],
source: "selectionEnd\x0a   ^textarea element selectionEnd",
messageSends: ["selectionEnd", "element"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_selectionEnd_",
smalltalk.method({
selector: "selectionEnd:",
category: 'accessing',
fn: function (anInteger) {
    var self = this;
    smalltalk.send(smalltalk.send(textarea, "_element", []), "_selectionEnd_", [anInteger]);
    return self;
},
args: ["anInteger"],
source: "selectionEnd: anInteger\x0a   textarea element selectionEnd: anInteger",
messageSends: ["selectionEnd:", "element"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_selectionStart",
smalltalk.method({
selector: "selectionStart",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(textarea, "_element", []), "_selectionStart", []);
    return $1;
},
args: [],
source: "selectionStart\x0a   ^textarea element selectionStart",
messageSends: ["selectionStart", "element"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_selectionStart_",
smalltalk.method({
selector: "selectionStart:",
category: 'accessing',
fn: function (anInteger) {
    var self = this;
    smalltalk.send(smalltalk.send(textarea, "_element", []), "_selectionStart_", [anInteger]);
    return self;
},
args: ["anInteger"],
source: "selectionStart: anInteger\x0a   textarea element selectionStart: anInteger",
messageSends: ["selectionStart:", "element"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_setEditorOn_",
smalltalk.method({
selector: "setEditorOn:",
category: 'accessing',
fn: function (aTextarea) {
    var self = this;
    self['@editor'] = CodeMirror.fromTextArea(aTextarea, {theme: "amber", lineNumbers: true, enterMode: "flat", matchBrackets: true, electricChars: false});
    return self;
},
args: ["aTextarea"],
source: "setEditorOn: aTextarea\x0a\x09<self['@editor'] = CodeMirror.fromTextArea(aTextarea, {\x0a\x09\x09theme: 'amber',\x0a                lineNumbers: true,\x0a                enterMode: 'flat',\x0a                matchBrackets: true,\x0a                electricChars: false\x0a\x09})>",
messageSends: [],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_val",
smalltalk.method({
selector: "val",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@editor'], "_getValue", []);
    return $1;
},
args: [],
source: "val\x0a    ^editor getValue",
messageSends: ["getValue"],
referencedClasses: []
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_val_",
smalltalk.method({
selector: "val:",
category: 'accessing',
fn: function (aString) {
    var self = this;
    smalltalk.send(self['@editor'], "_setValue_", [aString]);
    return self;
},
args: ["aString"],
source: "val: aString\x0a    editor setValue: aString",
messageSends: ["setValue:"],
referencedClasses: []
}),
smalltalk.SourceArea);



smalltalk.addClass('TabManager', smalltalk.Widget, ['selectedTab', 'tabs', 'opened', 'ul', 'input'], 'IDE');
smalltalk.addMethod(
"_addTab_",
smalltalk.method({
selector: "addTab:",
category: 'adding/Removing',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._tabs())._add_(aWidget);
_st(aWidget)._appendToJQuery_(_st("#amber")._asJQuery());
_st(aWidget)._hide();
return self}, self, "addTab:", [aWidget], smalltalk.TabManager)},
args: ["aWidget"],
source: "addTab: aWidget\x0a    self tabs add: aWidget.\x0a    aWidget appendToJQuery: '#amber' asJQuery.\x0a    aWidget hide",
messageSends: ["add:", "tabs", "appendToJQuery:", "asJQuery", "hide"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { if(smalltalk.assert(self["@opened"])){
_st(_st("#amber")._asJQuery())._hide();
_st(_st(self["@ul"])._asJQuery())._hide();
_st(self["@selectedTab"])._hide();
_st(self)._removeBodyMargin();
_st(_st("body")._asJQuery())._removeClass_("amberBody");
self["@opened"]=false;
self["@opened"];
};
return self}, self, "close", [], smalltalk.TabManager)},
args: [],
source: "close\x0a    opened ifTrue: [\x0a\x09'#amber' asJQuery hide.\x0a\x09ul asJQuery hide.\x0a\x09selectedTab hide.\x0a\x09self removeBodyMargin.\x0a\x09'body' asJQuery removeClass: 'amberBody'.\x0a\x09opened := false]",
messageSends: ["ifTrue:", "hide", "asJQuery", "removeBodyMargin", "removeClass:"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_closeTab_",
smalltalk.method({
selector: "closeTab:",
category: 'actions',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._removeTab_(aWidget);
_st(self)._selectTab_(_st(_st(self)._tabs())._last());
_st(aWidget)._remove();
_st(self)._update();
return self}, self, "closeTab:", [aWidget], smalltalk.TabManager)},
args: ["aWidget"],
source: "closeTab: aWidget\x0a    self removeTab: aWidget.\x0a    self selectTab: self tabs last.\x0a    aWidget remove.\x0a    self update",
messageSends: ["removeTab:", "selectTab:", "last", "tabs", "remove", "update"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
smalltalk.Widget.fn.prototype._initialize.apply(_st(self), []);
self["@opened"]=true;
_st((function(html){
return smalltalk.withContext(function($ctx2) { return _st(_st(html)._div())._id_("amber");
})}))._appendToJQuery_(_st("body")._asJQuery());
_st(_st("body")._asJQuery())._addClass_("amberBody");
_st(self)._appendToJQuery_(_st("#amber")._asJQuery());
_st(self)._addTab_(_st((smalltalk.IDETranscript || IDETranscript))._current());
_st(self)._addTab_(_st((smalltalk.Workspace || Workspace))._new());
$1=_st(self)._addTab_(_st((smalltalk.TestRunner || TestRunner))._new());
_st(self)._selectTab_(_st(_st(self)._tabs())._last());
_st(self)._onResize_((function(){
return smalltalk.withContext(function($ctx2) { _st(self)._updateBodyMargin();
$2=_st(self)._updatePosition();
return $2;
})}));
$3=_st(self)._onWindowResize_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._updatePosition();
})}));
return self}, self, "initialize", [], smalltalk.TabManager)},
args: [],
source: "initialize\x0a    super initialize.\x0a    opened := true.\x0a    [:html | html div id: 'amber'] appendToJQuery: 'body' asJQuery.\x0a    'body' asJQuery \x0a\x09addClass: 'amberBody'.\x0a    self appendToJQuery: '#amber' asJQuery.\x0a    self \x0a\x09addTab: IDETranscript current;\x0a\x09addTab: Workspace new;\x0a\x09addTab: TestRunner new.\x0a    self selectTab: self tabs last.\x0a    self \x0a\x09onResize: [self updateBodyMargin; updatePosition];\x0a\x09onWindowResize: [self updatePosition]",
messageSends: ["initialize", "appendToJQuery:", "asJQuery", "id:", "div", "addClass:", "addTab:", "current", "new", "selectTab:", "last", "tabs", "onResize:", "updateBodyMargin", "updatePosition", "onWindowResize:"],
referencedClasses: ["IDETranscript", "Workspace", "TestRunner"]
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_labelFor_",
smalltalk.method({
selector: "labelFor:",
category: 'accessing',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.label=nil;
$ctx1.maxSize=nil;
$ctx1.locals.maxSize=(15);
$ctx1.locals.label=_st(_st(aWidget)._label())._copyFrom_to_((0),_st(_st(_st(aWidget)._label())._size())._min_($ctx1.locals.maxSize));
$1=_st(_st(_st(aWidget)._label())._size()).__gt($ctx1.locals.maxSize);
if(smalltalk.assert($1)){
$ctx1.locals.label=_st($ctx1.locals.label).__comma("...");
$ctx1.locals.label;
};
return $ctx1.locals.label;
}, self, "labelFor:", [aWidget], smalltalk.TabManager)},
args: ["aWidget"],
source: "labelFor: aWidget\x0a\x09| label maxSize |\x0a\x09maxSize := 15.\x0a\x09label := aWidget label copyFrom: 0 to: (aWidget label size min: maxSize).\x0a\x09aWidget label size > maxSize ifTrue: [\x0a\x09\x09label := label, '...'].\x0a\x09^label",
messageSends: ["copyFrom:to:", "min:", "size", "label", "ifTrue:", ",", ">"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_newBrowserTab",
smalltalk.method({
selector: "newBrowserTab",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((smalltalk.Browser || Browser))._open();
return self}, self, "newBrowserTab", [], smalltalk.TabManager)},
args: [],
source: "newBrowserTab\x0a    Browser open",
messageSends: ["open"],
referencedClasses: ["Browser"]
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_onResize_",
smalltalk.method({
selector: "onResize:",
category: 'actions',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { jQuery('#amber').resizable({
	handles: 'n', 
	resize: aBlock,
	minHeight: 230
});
;
return self}, self, "onResize:", [aBlock], smalltalk.TabManager)},
args: ["aBlock"],
source: "onResize: aBlock\x0a    <jQuery('#amber').resizable({\x0a\x09handles: 'n', \x0a\x09resize: aBlock,\x0a\x09minHeight: 230\x0a})>",
messageSends: [],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_onWindowResize_",
smalltalk.method({
selector: "onWindowResize:",
category: 'actions',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { jQuery(window).resize(aBlock);
;
return self}, self, "onWindowResize:", [aBlock], smalltalk.TabManager)},
args: ["aBlock"],
source: "onWindowResize: aBlock\x0a    <jQuery(window).resize(aBlock)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { if(! smalltalk.assert(self["@opened"])){
_st(_st("body")._asJQuery())._addClass_("amberBody");
_st(_st("#amber")._asJQuery())._show();
_st(_st(self["@ul"])._asJQuery())._show();
_st(self)._updateBodyMargin();
_st(self["@selectedTab"])._show();
self["@opened"]=true;
self["@opened"];
};
return self}, self, "open", [], smalltalk.TabManager)},
args: [],
source: "open\x0a    opened ifFalse: [\x0a\x09'body' asJQuery addClass: 'amberBody'.\x0a\x09'#amber' asJQuery show.\x0a\x09ul asJQuery show.\x0a\x09self updateBodyMargin.\x0a\x09selectedTab show.\x0a\x09opened := true]",
messageSends: ["ifFalse:", "addClass:", "asJQuery", "show", "updateBodyMargin"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_removeBodyMargin",
smalltalk.method({
selector: "removeBodyMargin",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._setBodyMargin_((0));
return self}, self, "removeBodyMargin", [], smalltalk.TabManager)},
args: [],
source: "removeBodyMargin\x0a    self setBodyMargin: 0",
messageSends: ["setBodyMargin:"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_removeTab_",
smalltalk.method({
selector: "removeTab:",
category: 'adding/Removing',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._tabs())._remove_(aWidget);
_st(self)._update();
return self}, self, "removeTab:", [aWidget], smalltalk.TabManager)},
args: ["aWidget"],
source: "removeTab: aWidget\x0a    self tabs remove: aWidget.\x0a    self update",
messageSends: ["remove:", "tabs", "update"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(_st(html)._div())._id_("logo");
_st(self)._renderToolbarOn_(html);
$1=_st(html)._ul();
_st($1)._id_("amberTabs");
$2=_st($1)._yourself();
self["@ul"]=$2;
_st(self)._renderTabs();
return self}, self, "renderOn:", [html], smalltalk.TabManager)},
args: ["html"],
source: "renderOn: html\x0a\x09html div id: 'logo'.\x0a\x09self renderToolbarOn: html.\x0a\x09ul := html ul\x0a\x09\x09id: 'amberTabs';\x0a\x09\x09yourself.\x0a\x09self renderTabs",
messageSends: ["id:", "div", "renderToolbarOn:", "ul", "yourself", "renderTabs"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_renderTabFor_on_",
smalltalk.method({
selector: "renderTabFor:on:",
category: 'rendering',
fn: function (aWidget,html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$4,$5,$6,$3,$7;
$ctx1.li=nil;
$ctx1.locals.li=_st(html)._li();
$1=_st(self["@selectedTab"]).__eq(aWidget);
if(smalltalk.assert($1)){
_st($ctx1.locals.li)._class_("selected");
};
_st($ctx1.locals.li)._with_((function(){
return smalltalk.withContext(function($ctx2) { _st(_st(html)._span())._class_("ltab");
$2=_st(html)._span();
_st($2)._class_("mtab");
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx3) { $4=_st(aWidget)._canBeClosed();
if(smalltalk.assert($4)){
$5=_st(html)._span();
_st($5)._class_("close");
_st($5)._with_("x");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx4) { return _st(self)._closeTab_(aWidget);
})}));
$6;
};
return _st(_st(html)._span())._with_(_st(self)._labelFor_(aWidget));
})}));
$3;
return _st(_st(html)._span())._class_("rtab");
})}));
$7=_st($ctx1.locals.li)._onClick_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._selectTab_(aWidget);
})}));
return self}, self, "renderTabFor:on:", [aWidget,html], smalltalk.TabManager)},
args: ["aWidget", "html"],
source: "renderTabFor: aWidget on: html\x0a\x09| li |\x0a\x09li := html li.\x0a\x09selectedTab = aWidget ifTrue: [\x0a\x09li class: 'selected'].\x0a\x09li with: [\x0a\x09\x09html span class: 'ltab'.\x0a\x09\x09html span\x0a\x09\x09\x09class: 'mtab';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09aWidget canBeClosed ifTrue: [\x0a\x09\x09\x09\x09\x09html span \x0a\x09\x09\x09\x09\x09\x09class: 'close';\x0a\x09\x09\x09\x09\x09\x09with: 'x';\x0a\x09\x09\x09\x09\x09onClick: [self closeTab: aWidget]].\x0a\x09\x09\x09html span with: (self labelFor: aWidget)].\x0a\x09\x09html span class: 'rtab'];\x0a\x09onClick: [self selectTab: aWidget]",
messageSends: ["li", "ifTrue:", "class:", "=", "with:", "span", "onClick:", "closeTab:", "canBeClosed", "labelFor:", "selectTab:"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_renderTabs",
smalltalk.method({
selector: "renderTabs",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
_st(self["@ul"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) { _st(_st(self)._tabs())._do_((function(each){
return smalltalk.withContext(function($ctx3) { return _st(self)._renderTabFor_on_(each,html);
})}));
$1=_st(html)._li();
_st($1)._class_("newtab");
_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) { _st(_st(html)._span())._class_("ltab");
$2=_st(html)._span();
_st($2)._class_("mtab");
$3=_st($2)._with_(" + ");
$3;
return _st(_st(html)._span())._class_("rtab");
})}));
$4=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._newBrowserTab();
})}));
return $4;
})}));
return self}, self, "renderTabs", [], smalltalk.TabManager)},
args: [],
source: "renderTabs\x0a\x09ul contents: [:html |\x0a\x09    self tabs do: [:each |\x0a\x09\x09self renderTabFor: each on: html].\x0a\x09    html li\x0a\x09\x09class: 'newtab';\x0a\x09\x09with: [\x0a\x09\x09\x09html span class: 'ltab'.\x0a\x09\x09\x09html span class: 'mtab'; with: ' + '.\x0a\x09\x09\x09html span class: 'rtab'];\x0a\x09\x09onClick: [self newBrowserTab]]",
messageSends: ["contents:", "do:", "renderTabFor:on:", "tabs", "class:", "li", "with:", "span", "onClick:", "newBrowserTab"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_renderToolbarOn_",
smalltalk.method({
selector: "renderToolbarOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$5,$6,$7,$2;
$1=_st(html)._div();
_st($1)._id_("amber_toolbar");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) { $3=_st(html)._input();
_st($3)._class_("implementors");
$4=_st($3)._yourself();
self["@input"]=$4;
self["@input"];
_st(self["@input"])._onKeyPress_((function(event){
return smalltalk.withContext(function($ctx3) { $5=_st(_st(event)._keyCode()).__eq((13));
if(smalltalk.assert($5)){
return _st(self)._search_(_st(_st(self["@input"])._asJQuery())._val());
};
})}));
$6=_st(html)._div();
_st($6)._id_("amber_close");
$7=_st($6)._onClick_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._close();
})}));
return $7;
})}));
return self}, self, "renderToolbarOn:", [html], smalltalk.TabManager)},
args: ["html"],
source: "renderToolbarOn: html\x0a\x09html div \x0a\x09\x09id: 'amber_toolbar';\x0a\x09\x09with: [\x0a\x09\x09\x09input := html input \x0a\x09\x09\x09\x09class: 'implementors';\x0a\x09\x09\x09\x09yourself.\x0a\x09\x09\x09input onKeyPress: [:event |\x0a\x09\x09\x09\x09event keyCode = 13 ifTrue: [\x0a\x09\x09\x09\x09self search: input asJQuery val]].\x0a\x09\x09\x09html div id: 'amber_close'; onClick: [self close]]",
messageSends: ["id:", "div", "with:", "class:", "input", "yourself", "onKeyPress:", "ifTrue:", "search:", "val", "asJQuery", "=", "keyCode", "onClick:", "close"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_search_",
smalltalk.method({
selector: "search:",
category: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.searchedClass=nil;
$ctx1.locals.searchedClass=_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._at_(aString);
$1=_st($ctx1.locals.searchedClass)._isClass();
if(smalltalk.assert($1)){
_st((smalltalk.Browser || Browser))._openOn_($ctx1.locals.searchedClass);
} else {
_st((smalltalk.ReferencesBrowser || ReferencesBrowser))._search_(aString);
};
return self}, self, "search:", [aString], smalltalk.TabManager)},
args: ["aString"],
source: "search: aString\x0a\x09| searchedClass |\x0a\x09searchedClass := Smalltalk current at: aString.\x0a\x09\x09searchedClass isClass\x0a\x09\x09\x09ifTrue: [Browser openOn: searchedClass]\x0a\x09\x09\x09ifFalse: [ReferencesBrowser search: aString]",
messageSends: ["at:", "current", "ifTrue:ifFalse:", "openOn:", "search:", "isClass"],
referencedClasses: ["Smalltalk", "Browser", "ReferencesBrowser"]
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_selectTab_",
smalltalk.method({
selector: "selectTab:",
category: 'actions',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._open();
self["@selectedTab"]=aWidget;
_st(_st(self)._tabs())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(each)._hide();
})}));
_st(aWidget)._show();
_st(self)._update();
return self}, self, "selectTab:", [aWidget], smalltalk.TabManager)},
args: ["aWidget"],
source: "selectTab: aWidget\x0a    self open.\x0a    selectedTab := aWidget.\x0a    self tabs do: [:each |\x0a\x09each hide].\x0a    aWidget show.\x0a\x09\x0a    self update",
messageSends: ["open", "do:", "hide", "tabs", "show", "update"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_setBodyMargin_",
smalltalk.method({
selector: "setBodyMargin:",
category: 'actions',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(".amberBody")._asJQuery())._css_put_("margin-bottom",_st(_st(anInteger)._asString()).__comma("px"));
return self}, self, "setBodyMargin:", [anInteger], smalltalk.TabManager)},
args: ["anInteger"],
source: "setBodyMargin: anInteger\x0a    '.amberBody' asJQuery css: 'margin-bottom' put: anInteger asString, 'px'",
messageSends: ["css:put:", ",", "asString", "asJQuery"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_tabs",
smalltalk.method({
selector: "tabs",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@tabs"]) == nil || $receiver == undefined){
self["@tabs"]=_st((smalltalk.Array || Array))._new();
$1=self["@tabs"];
} else {
$1=self["@tabs"];
};
return $1;
}, self, "tabs", [], smalltalk.TabManager)},
args: [],
source: "tabs\x0a    ^tabs ifNil: [tabs := Array new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_update",
smalltalk.method({
selector: "update",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._renderTabs();
return self}, self, "update", [], smalltalk.TabManager)},
args: [],
source: "update\x0a\x09self renderTabs",
messageSends: ["renderTabs"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_updateBodyMargin",
smalltalk.method({
selector: "updateBodyMargin",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._setBodyMargin_(_st(_st("#amber")._asJQuery())._height());
return self}, self, "updateBodyMargin", [], smalltalk.TabManager)},
args: [],
source: "updateBodyMargin\x0a    self setBodyMargin: '#amber' asJQuery height",
messageSends: ["setBodyMargin:", "height", "asJQuery"],
referencedClasses: []
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_updatePosition",
smalltalk.method({
selector: "updatePosition",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { jQuery('#amber').css('top', '').css('bottom', '0px');
;
return self}, self, "updatePosition", [], smalltalk.TabManager)},
args: [],
source: "updatePosition\x0a    <jQuery('#amber').css('top', '').css('bottom', '0px')>",
messageSends: [],
referencedClasses: []
}),
smalltalk.TabManager);


smalltalk.TabManager.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@current"]) == nil || $receiver == undefined){
self["@current"]=smalltalk.Widget.klass.fn.prototype._new.apply(_st(self), []);
$1=self["@current"];
} else {
$1=self["@current"];
};
return $1;
}, self, "current", [], smalltalk.TabManager.klass)},
args: [],
source: "current\x0a    ^current ifNil: [current := super new]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.TabManager.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._shouldNotImplement();
return self}, self, "new", [], smalltalk.TabManager.klass)},
args: [],
source: "new\x0a    self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.TabManager.klass);


smalltalk.addClass('TabWidget', smalltalk.Widget, ['div'], 'IDE');
smalltalk.addMethod(
"_canBeClosed",
smalltalk.method({
selector: "canBeClosed",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "canBeClosed", [], smalltalk.TabWidget)},
args: [],
source: "canBeClosed\x0a    ^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.TabManager || TabManager))._current())._closeTab_(self);
return self}, self, "close", [], smalltalk.TabWidget)},
args: [],
source: "close\x0a    TabManager current closeTab: self",
messageSends: ["closeTab:", "current"],
referencedClasses: ["TabManager"]
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_hide",
smalltalk.method({
selector: "hide",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@div"])._asJQuery())._hide();
return self}, self, "hide", [], smalltalk.TabWidget)},
args: [],
source: "hide\x0a\x09div asJQuery hide",
messageSends: ["hide", "asJQuery"],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, self, "label", [], smalltalk.TabWidget)},
args: [],
source: "label\x0a    self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.TabManager || TabManager))._current())._addTab_(self);
_st(_st((smalltalk.TabManager || TabManager))._current())._selectTab_(self);
return self}, self, "open", [], smalltalk.TabWidget)},
args: [],
source: "open\x0a    TabManager current addTab: self.\x0a    TabManager current selectTab: self",
messageSends: ["addTab:", "current", "selectTab:"],
referencedClasses: ["TabManager"]
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_remove",
smalltalk.method({
selector: "remove",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@div"])._asJQuery())._remove();
return self}, self, "remove", [], smalltalk.TabWidget)},
args: [],
source: "remove\x0a\x09div asJQuery remove",
messageSends: ["remove", "asJQuery"],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, self, "renderBoxOn:", [html], smalltalk.TabWidget)},
args: ["html"],
source: "renderBoxOn: html",
messageSends: [],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, self, "renderButtonsOn:", [html], smalltalk.TabWidget)},
args: ["html"],
source: "renderButtonsOn: html",
messageSends: [],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._div();
_st($1)._class_("amberTool");
$2=_st($1)._yourself();
self["@div"]=$2;
_st(self)._renderTab();
return self}, self, "renderOn:", [html], smalltalk.TabWidget)},
args: ["html"],
source: "renderOn: html\x0a\x09div := html div\x0a\x09\x09class: 'amberTool';\x0a\x09\x09yourself.\x0a\x09self renderTab",
messageSends: ["class:", "div", "yourself", "renderTab"],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_renderTab",
smalltalk.method({
selector: "renderTab",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
_st(self["@div"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) { $1=_st(html)._div();
_st($1)._class_("amber_box");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._renderBoxOn_(html);
})}));
$2;
$3=_st(html)._div();
_st($3)._class_("amber_buttons");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._renderButtonsOn_(html);
})}));
return $4;
})}));
return self}, self, "renderTab", [], smalltalk.TabWidget)},
args: [],
source: "renderTab\x0a\x09div contents: [:html |\x0a\x09    html div\x0a\x09\x09class: 'amber_box';\x0a\x09\x09with: [self renderBoxOn: html].\x0a\x09    html div\x0a\x09\x09class: 'amber_buttons';\x0a\x09\x09with: [self renderButtonsOn: html]]",
messageSends: ["contents:", "class:", "div", "with:", "renderBoxOn:", "renderButtonsOn:"],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_show",
smalltalk.method({
selector: "show",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@div"])._asJQuery())._show();
return self}, self, "show", [], smalltalk.TabWidget)},
args: [],
source: "show\x0a\x09div asJQuery show",
messageSends: ["show", "asJQuery"],
referencedClasses: []
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_update",
smalltalk.method({
selector: "update",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._renderTab();
return self}, self, "update", [], smalltalk.TabWidget)},
args: [],
source: "update\x0a\x09self renderTab",
messageSends: ["renderTab"],
referencedClasses: []
}),
smalltalk.TabWidget);


smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._open();
return $1;
}, self, "open", [], smalltalk.TabWidget.klass)},
args: [],
source: "open\x0a    ^self new open",
messageSends: ["open", "new"],
referencedClasses: []
}),
smalltalk.TabWidget.klass);


smalltalk.addClass('Browser', smalltalk.TabWidget, ['selectedPackage', 'selectedClass', 'selectedProtocol', 'selectedMethod', 'packagesList', 'classesList', 'protocolsList', 'methodsList', 'sourceArea', 'tabsList', 'selectedTab', 'saveButton', 'classButtons', 'methodButtons', 'unsavedChanges'], 'IDE');
smalltalk.addMethod(
"_addInstanceVariableNamed_toClass_",
smalltalk.method({
selector: "addInstanceVariableNamed:toClass:",
category: 'actions',
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(_st(aClass)._instanceVariableNames())._copy();
_st($1)._add_(aString);
$2=_st($1)._yourself();
_st(_st((smalltalk.ClassBuilder || ClassBuilder))._new())._addSubclassOf_named_instanceVariableNames_package_(_st(aClass)._superclass(),_st(aClass)._name(),$2,_st(_st(aClass)._package())._name());
return self}, self, "addInstanceVariableNamed:toClass:", [aString,aClass], smalltalk.Browser)},
args: ["aString", "aClass"],
source: "addInstanceVariableNamed: aString toClass: aClass\x0a\x09ClassBuilder new\x0a\x09\x09addSubclassOf: aClass superclass \x0a\x09\x09named: aClass name \x0a\x09\x09instanceVariableNames: (aClass instanceVariableNames copy add: aString; yourself)\x0a\x09\x09package: aClass package name",
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "superclass", "name", "add:", "copy", "instanceVariableNames", "yourself", "package", "new"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_addNewClass",
smalltalk.method({
selector: "addNewClass",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$ctx1.className=nil;
$ctx1.locals.className=_st(window)._prompt_("New class");
$1=_st(_st($ctx1.locals.className)._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.className)._notEmpty();
})}));
if(smalltalk.assert($1)){
_st((smalltalk.Object || Object))._subclass_instanceVariableNames_package_($ctx1.locals.className,"",_st(self)._selectedPackage());
_st(self)._resetClassesList();
$2=_st(self)._updateClassesList();
$2;
_st(self)._selectClass_(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._at_($ctx1.locals.className));
};
return self}, self, "addNewClass", [], smalltalk.Browser)},
args: [],
source: "addNewClass\x0a\x09| className |\x0a\x09className := window prompt: 'New class'.\x0a\x09(className notNil and: [className notEmpty]) ifTrue: [\x0a\x09\x09Object subclass: className instanceVariableNames: '' package: self selectedPackage.\x0a          \x09 self \x0a\x09\x09\x09resetClassesList;\x0a\x09\x09\x09updateClassesList.\x0a\x09\x09self selectClass: (Smalltalk current at: className)]",
messageSends: ["prompt:", "ifTrue:", "subclass:instanceVariableNames:package:", "selectedPackage", "resetClassesList", "updateClassesList", "selectClass:", "at:", "current", "and:", "notEmpty", "notNil"],
referencedClasses: ["Object", "Smalltalk"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_addNewProtocol",
smalltalk.method({
selector: "addNewProtocol",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.newProtocol=nil;
$ctx1.locals.newProtocol=_st(window)._prompt_("New method protocol");
$1=_st(_st($ctx1.locals.newProtocol)._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.newProtocol)._notEmpty();
})}));
if(smalltalk.assert($1)){
_st(self["@selectedMethod"])._category_($ctx1.locals.newProtocol);
_st(self)._setMethodProtocol_($ctx1.locals.newProtocol);
};
return self}, self, "addNewProtocol", [], smalltalk.Browser)},
args: [],
source: "addNewProtocol\x0a    | newProtocol |\x0a    newProtocol := window prompt: 'New method protocol'.\x0a    (newProtocol notNil and: [newProtocol notEmpty]) ifTrue: [\x0a\x09selectedMethod category: newProtocol.\x0a\x09self setMethodProtocol: newProtocol]",
messageSends: ["prompt:", "ifTrue:", "category:", "setMethodProtocol:", "and:", "notEmpty", "notNil"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_ajaxPutAt_data_",
smalltalk.method({
selector: "ajaxPutAt:data:",
category: 'network',
fn: function (aURL,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(jQuery)._ajax_options_(aURL,smalltalk.HashedCollection._fromPairs_([_st("type").__minus_gt("PUT"),_st("data").__minus_gt(aString),_st("contentType").__minus_gt("text/plain;charset=UTF-8"),_st("error").__minus_gt((function(xhr){
return smalltalk.withContext(function($ctx2) { return _st(window)._alert_(_st(_st(_st(_st("Commiting ").__comma(aURL)).__comma(" failed with reason: \x22")).__comma(_st(xhr)._responseText())).__comma("\x22"));
})}))]));
return self}, self, "ajaxPutAt:data:", [aURL,aString], smalltalk.Browser)},
args: ["aURL", "aString"],
source: "ajaxPutAt: aURL data: aString\x0a\x09jQuery\x0a\x09\x09ajax: aURL\x09options: #{\x09'type' -> 'PUT'.\x0a\x09\x09\x09\x09\x09\x09\x09\x09'data' -> aString.\x0a\x09\x09\x09\x09\x09\x09\x09\x09'contentType' -> 'text/plain;charset=UTF-8'.\x0a\x09\x09\x09\x09\x09\x09\x09\x09'error' -> [:xhr | window alert: 'Commiting ' , aURL , ' failed with reason: \x22' , (xhr responseText) , '\x22'] }",
messageSends: ["ajax:options:", "->", "alert:", ",", "responseText"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_canBeClosed",
smalltalk.method({
selector: "canBeClosed",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "canBeClosed", [], smalltalk.Browser)},
args: [],
source: "canBeClosed\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_cancelChanges",
smalltalk.method({
selector: "cancelChanges",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(smalltalk.assert(self["@unsavedChanges"])){
$1=_st(window)._confirm_("Cancel changes?");
} else {
$1=true;
};
return $1;
}, self, "cancelChanges", [], smalltalk.Browser)},
args: [],
source: "cancelChanges\x0a    ^unsavedChanges \x0a\x09ifTrue: [window confirm: 'Cancel changes?']\x0a\x09ifFalse: [true]",
messageSends: ["ifTrue:ifFalse:", "confirm:"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_classCommentSource",
smalltalk.method({
selector: "classCommentSource",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@selectedClass"])._comment();
return $1;
}, self, "classCommentSource", [], smalltalk.Browser)},
args: [],
source: "classCommentSource\x0a    ^selectedClass comment",
messageSends: ["comment"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_classDeclarationSource",
smalltalk.method({
selector: "classDeclarationSource",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
$ctx1.stream=nil;
$ctx1.locals.stream=_st("")._writeStream();
if(($receiver = self["@selectedClass"]) == nil || $receiver == undefined){
$1=_st(self)._classDeclarationTemplate();
return $1;
} else {
self["@selectedClass"];
};
_st($ctx1.locals.stream)._nextPutAll_(_st(_st(self["@selectedClass"])._superclass())._asString());
_st($ctx1.locals.stream)._nextPutAll_(" subclass: #");
_st($ctx1.locals.stream)._nextPutAll_(_st(self["@selectedClass"])._name());
_st($ctx1.locals.stream)._nextPutAll_(_st(_st((smalltalk.String || String))._lf()).__comma(_st((smalltalk.String || String))._tab()));
$2=_st($ctx1.locals.stream)._nextPutAll_("instanceVariableNames: '");
_st(_st(self["@selectedClass"])._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.stream)._nextPutAll_(each);
})}),(function(){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.stream)._nextPutAll_(" ");
})}));
_st($ctx1.locals.stream)._nextPutAll_(_st(_st("'").__comma(_st((smalltalk.String || String))._lf())).__comma(_st((smalltalk.String || String))._tab()));
_st($ctx1.locals.stream)._nextPutAll_("package: '");
_st($ctx1.locals.stream)._nextPutAll_(_st(self["@selectedClass"])._category());
$3=_st($ctx1.locals.stream)._nextPutAll_("'");
$4=_st($ctx1.locals.stream)._contents();
return $4;
}, self, "classDeclarationSource", [], smalltalk.Browser)},
args: [],
source: "classDeclarationSource\x0a\x09| stream |\x0a\x09stream := '' writeStream.\x0a\x09selectedClass ifNil: [^self classDeclarationTemplate].\x0a\x09stream \x0a\x09    nextPutAll: selectedClass superclass asString;\x0a\x09    nextPutAll: ' subclass: #';\x0a\x09    nextPutAll: selectedClass name;\x0a\x09    nextPutAll: String lf, String tab;\x0a\x09    nextPutAll: 'instanceVariableNames: '''.\x0a\x09selectedClass instanceVariableNames \x0a\x09    do: [:each | stream nextPutAll: each] \x0a\x09    separatedBy: [stream nextPutAll: ' '].\x0a\x09stream\x0a\x09    nextPutAll: '''', String lf, String tab;\x0a\x09    nextPutAll: 'package: ''';\x0a\x09    nextPutAll: selectedClass category;\x0a\x09    nextPutAll: ''''.\x0a\x09^stream contents",
messageSends: ["writeStream", "ifNil:", "classDeclarationTemplate", "nextPutAll:", "asString", "superclass", "name", ",", "tab", "lf", "do:separatedBy:", "instanceVariableNames", "category", "contents"],
referencedClasses: ["String"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_classDeclarationTemplate",
smalltalk.method({
selector: "classDeclarationTemplate",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st("Object subclass: #NameOfSubclass\x0a\x09instanceVariableNames: ''\x0a\x09package: '").__comma(_st(self)._selectedPackage())).__comma("'");
return $1;
}, self, "classDeclarationTemplate", [], smalltalk.Browser)},
args: [],
source: "classDeclarationTemplate\x0a\x09^'Object subclass: #NameOfSubclass\x0a\x09instanceVariableNames: ''''\x0a\x09package: ''', self selectedPackage, ''''",
messageSends: [",", "selectedPackage"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_classes",
smalltalk.method({
selector: "classes",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._classes())._select_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(_st(each)._category()).__eq(self["@selectedPackage"]);
})})))._sort_((function(a,b){
return smalltalk.withContext(function($ctx2) { return _st(_st(a)._name()).__lt(_st(b)._name());
})})))._asSet();
return $1;
}, self, "classes", [], smalltalk.Browser)},
args: [],
source: "classes\x0a    ^((Smalltalk current classes \x0a\x09select: [:each | each category = selectedPackage])\x0a\x09sort: [:a :b | a name < b name]) asSet",
messageSends: ["asSet", "sort:", "<", "name", "select:", "=", "category", "classes", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_commitPackage",
smalltalk.method({
selector: "commitPackage",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { if(($receiver = self["@selectedPackage"]) == nil || $receiver == undefined){
self["@selectedPackage"];
} else {
$ctx1.package=nil;
$ctx1.locals.package_=_st((smalltalk.Package || Package))._named_(self["@selectedPackage"]);
$ctx1.locals.package_;
_st([_st((smalltalk.Exporter || Exporter)).__minus_gt(_st(_st(_st(_st($ctx1.locals.package_)._commitPathJs()).__comma("/")).__comma(self["@selectedPackage"])).__comma(".js")),_st((smalltalk.StrippedExporter || StrippedExporter)).__minus_gt(_st(_st(_st(_st($ctx1.locals.package_)._commitPathJs()).__comma("/")).__comma(self["@selectedPackage"])).__comma(".deploy.js")),_st((smalltalk.ChunkExporter || ChunkExporter)).__minus_gt(_st(_st(_st(_st($ctx1.locals.package_)._commitPathSt()).__comma("/")).__comma(self["@selectedPackage"])).__comma(".st"))])._do_((function(commitStrategy){
return smalltalk.withContext(function($ctx2) { $ctx2.fileContents=nil;
$ctx2.locals.fileContents=_st(_st(_st(commitStrategy)._key())._new())._exportPackage_(self["@selectedPackage"]);
$ctx2.locals.fileContents;
return _st(self)._ajaxPutAt_data_(_st(commitStrategy)._value(),$ctx2.locals.fileContents);
})}));
};
return self}, self, "commitPackage", [], smalltalk.Browser)},
args: [],
source: "commitPackage\x0a\x09selectedPackage ifNotNil: [ |package|\x0a\x09\x09package := Package named: selectedPackage.\x0a\x09\x09{  \x09Exporter              -> (package commitPathJs, '/', selectedPackage, '.js').\x0a\x09\x09\x09StrippedExporter -> (package commitPathJs, '/', selectedPackage, '.deploy.js').\x0a\x09\x09\x09ChunkExporter    -> (package commitPathSt, '/', selectedPackage, '.st')\x0a\x09\x09} do: [:commitStrategy| |fileContents|\x0a\x09\x09\x09fileContents := (commitStrategy key new exportPackage: selectedPackage).\x0a\x09\x09\x09self ajaxPutAt: commitStrategy value data:  fileContents\x0a  \x09\x09]\x0a\x09]",
messageSends: ["ifNotNil:", "named:", "do:", "exportPackage:", "new", "key", "ajaxPutAt:data:", "value", "->", ",", "commitPathJs", "commitPathSt"],
referencedClasses: ["Package", "Exporter", "StrippedExporter", "ChunkExporter"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_compile",
smalltalk.method({
selector: "compile",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$ctx1.currentEditLine=nil;
_st(self)._disableSaveButton();
$ctx1.locals.currentEditLine=_st(_st(self["@sourceArea"])._editor())._getCursor();
$1=_st(self["@selectedTab"]).__eq(smalltalk.symbolFor("comment"));
if(smalltalk.assert($1)){
if(($receiver = self["@selectedClass"]) == nil || $receiver == undefined){
self["@selectedClass"];
} else {
_st(self)._compileClassComment();
};
} else {
$2=_st(_st(self["@selectedProtocol"])._notNil())._or_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self["@selectedMethod"])._notNil();
})}));
if(smalltalk.assert($2)){
_st(self)._compileMethodDefinition();
} else {
_st(self)._compileDefinition();
};
};
_st(_st(self["@sourceArea"])._editor())._setCursor_($ctx1.locals.currentEditLine);
return self}, self, "compile", [], smalltalk.Browser)},
args: [],
source: "compile\x0a    | currentEditLine |\x0a    self disableSaveButton.\x0a    currentEditLine := sourceArea editor getCursor.\x0a    selectedTab = #comment \x0a\x09ifTrue: [\x0a\x09\x09\x09selectedClass ifNotNil: [\x0a\x09\x09\x09\x09self compileClassComment]]\x0a\x09ifFalse: [\x0a\x09\x09\x09(selectedProtocol notNil or: [selectedMethod notNil])\x0a\x09\x09\x09\x09ifFalse: [self compileDefinition]\x0a\x09\x09\x09\x09ifTrue: [self compileMethodDefinition]].\x0a    sourceArea editor setCursor: currentEditLine.",
messageSends: ["disableSaveButton", "getCursor", "editor", "ifTrue:ifFalse:", "ifNotNil:", "compileClassComment", "ifFalse:ifTrue:", "compileDefinition", "compileMethodDefinition", "or:", "notNil", "=", "setCursor:"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_compileClassComment",
smalltalk.method({
selector: "compileClassComment",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@selectedClass"])._comment_(_st(self["@sourceArea"])._val());
return self}, self, "compileClassComment", [], smalltalk.Browser)},
args: [],
source: "compileClassComment\x0a    selectedClass comment: sourceArea val",
messageSends: ["comment:", "val"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_compileDefinition",
smalltalk.method({
selector: "compileDefinition",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.newClass=nil;
$ctx1.locals.newClass=_st(_st((smalltalk.Compiler || Compiler))._new())._evaluateExpression_(_st(self["@sourceArea"])._val());
_st(self)._resetClassesList();
_st(self)._updateCategoriesList();
$1=_st(self)._updateClassesList();
_st(self)._selectClass_($ctx1.locals.newClass);
return self}, self, "compileDefinition", [], smalltalk.Browser)},
args: [],
source: "compileDefinition\x0a    | newClass |\x0a    newClass := Compiler new evaluateExpression: sourceArea val.\x0a    self \x0a\x09resetClassesList;\x0a\x09updateCategoriesList;\x0a\x09updateClassesList.\x0a    self selectClass: newClass",
messageSends: ["evaluateExpression:", "val", "new", "resetClassesList", "updateCategoriesList", "updateClassesList", "selectClass:"],
referencedClasses: ["Compiler"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_compileMethodDefinition",
smalltalk.method({
selector: "compileMethodDefinition",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@selectedTab"]).__eq(smalltalk.symbolFor("instance"));
if(smalltalk.assert($1)){
_st(self)._compileMethodDefinitionFor_(self["@selectedClass"]);
} else {
_st(self)._compileMethodDefinitionFor_(_st(self["@selectedClass"])._class());
};
return self}, self, "compileMethodDefinition", [], smalltalk.Browser)},
args: [],
source: "compileMethodDefinition\x0a    selectedTab = #instance\x0a\x09ifTrue: [self compileMethodDefinitionFor: selectedClass]\x0a\x09ifFalse: [self compileMethodDefinitionFor: selectedClass class]",
messageSends: ["ifTrue:ifFalse:", "compileMethodDefinitionFor:", "class", "="],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_compileMethodDefinitionFor_",
smalltalk.method({
selector: "compileMethodDefinitionFor:",
category: 'actions',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5;
var $early={};
try {
$ctx1.compiler=nil;
$ctx1.method=nil;
$ctx1.source=nil;
$ctx1.node=nil;
$ctx1.locals.source=_st(self["@sourceArea"])._val();
if(($receiver = self["@selectedProtocol"]) == nil || $receiver == undefined){
self["@selectedProtocol"]=_st(self["@selectedMethod"])._category();
self["@selectedProtocol"];
} else {
self["@selectedProtocol"];
};
$ctx1.locals.compiler=_st((smalltalk.Compiler || Compiler))._new();
_st($ctx1.locals.compiler)._source_($ctx1.locals.source);
$ctx1.locals.node=_st($ctx1.locals.compiler)._parse_($ctx1.locals.source);
$1=_st($ctx1.locals.node)._isParseFailure();
if(smalltalk.assert($1)){
$2=_st(window)._alert_(_st(_st(_st("PARSE ERROR: ").__comma(_st($ctx1.locals.node)._reason())).__comma(", position: ")).__comma(_st(_st($ctx1.locals.node)._position())._asString()));
return $2;
};
_st($ctx1.locals.compiler)._currentClass_(aClass);
$ctx1.locals.method=_st($ctx1.locals.compiler)._eval_(_st($ctx1.locals.compiler)._compileNode_($ctx1.locals.node));
_st($ctx1.locals.method)._category_(self["@selectedProtocol"]);
_st(_st($ctx1.locals.compiler)._unknownVariables())._do_((function(each){
return smalltalk.withContext(function($ctx2) { $3=_st(window)._at_(each);
if(($receiver = $3) == nil || $receiver == undefined){
$4=_st(window)._confirm_(_st(_st("Declare '").__comma(each)).__comma("' as instance variable?"));
if(smalltalk.assert($4)){
_st(self)._addInstanceVariableNamed_toClass_(each,aClass);
$5=_st(self)._compileMethodDefinitionFor_(aClass);
throw $early=[$5];
};
} else {
return $3;
};
})}));
_st(aClass)._addCompiledMethod_($ctx1.locals.method);
_st($ctx1.locals.compiler)._setupClass_(aClass);
_st(self)._updateMethodsList();
_st(self)._selectMethod_($ctx1.locals.method);
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, self, "compileMethodDefinitionFor:", [aClass], smalltalk.Browser)},
args: ["aClass"],
source: "compileMethodDefinitionFor: aClass\x0a    | compiler method source node | \x0a    source := sourceArea val.\x0a    selectedProtocol ifNil: [selectedProtocol := selectedMethod category].\x0a    compiler := Compiler new.\x0a    compiler source: source.\x0a    node := compiler parse: source.\x0a    node isParseFailure ifTrue: [\x0a\x09^window alert: 'PARSE ERROR: ', node reason, ', position: ', node position asString].\x0a    compiler currentClass: aClass.\x0a    method := compiler eval: (compiler compileNode: node).\x0a    method category: selectedProtocol.\x0a    compiler unknownVariables do: [:each |\x0a         \x22Do not try to redeclare javascript's objects\x22\x0a         (window at: each) ifNil: [\x0a\x09 \x09(window confirm: 'Declare ''', each, ''' as instance variable?') ifTrue: [\x0a\x09\x09\x09self addInstanceVariableNamed: each toClass: aClass.\x0a\x09\x09\x09^self compileMethodDefinitionFor: aClass]]].\x0a    aClass addCompiledMethod: method.\x0a    compiler setupClass: aClass.\x0a    self updateMethodsList.\x0a    self selectMethod: method",
messageSends: ["val", "ifNil:", "category", "new", "source:", "parse:", "ifTrue:", "alert:", ",", "asString", "position", "reason", "isParseFailure", "currentClass:", "eval:", "compileNode:", "category:", "do:", "addInstanceVariableNamed:toClass:", "compileMethodDefinitionFor:", "confirm:", "at:", "unknownVariables", "addCompiledMethod:", "setupClass:", "updateMethodsList", "selectMethod:"],
referencedClasses: ["Compiler"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_copyClass",
smalltalk.method({
selector: "copyClass",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$ctx1.className=nil;
$ctx1.locals.className=_st(window)._prompt_("Copy class");
$1=_st(_st($ctx1.locals.className)._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.className)._notEmpty();
})}));
if(smalltalk.assert($1)){
_st(_st((smalltalk.ClassBuilder || ClassBuilder))._new())._copyClass_named_(_st(self)._selectedClass(),$ctx1.locals.className);
_st(self)._resetClassesList();
$2=_st(self)._updateClassesList();
$2;
_st(self)._selectClass_(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._at_($ctx1.locals.className));
};
return self}, self, "copyClass", [], smalltalk.Browser)},
args: [],
source: "copyClass\x0a\x09| className |\x0a\x09className := window prompt: 'Copy class'.\x0a\x09(className notNil and: [className notEmpty]) ifTrue: [\x0a\x09\x09ClassBuilder new copyClass: self selectedClass named: className.\x0a          \x09 self \x0a\x09\x09\x09resetClassesList;\x0a\x09\x09\x09updateClassesList.\x0a\x09\x09self selectClass: (Smalltalk current at: className)]",
messageSends: ["prompt:", "ifTrue:", "copyClass:named:", "selectedClass", "new", "resetClassesList", "updateClassesList", "selectClass:", "at:", "current", "and:", "notEmpty", "notNil"],
referencedClasses: ["ClassBuilder", "Smalltalk"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_declarationSource",
smalltalk.method({
selector: "declarationSource",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self["@selectedTab"]).__eq(smalltalk.symbolFor("instance"));
if(smalltalk.assert($2)){
$1=_st(self)._classDeclarationSource();
} else {
$1=_st(self)._metaclassDeclarationSource();
};
return $1;
}, self, "declarationSource", [], smalltalk.Browser)},
args: [],
source: "declarationSource\x0a    ^selectedTab = #instance\x0a\x09ifTrue: [self classDeclarationSource]\x0a\x09ifFalse: [self metaclassDeclarationSource]",
messageSends: ["ifTrue:ifFalse:", "classDeclarationSource", "metaclassDeclarationSource", "="],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_disableSaveButton",
smalltalk.method({
selector: "disableSaveButton",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { if(($receiver = self["@saveButton"]) == nil || $receiver == undefined){
self["@saveButton"];
} else {
_st(self["@saveButton"])._at_put_("disabled",true);
};
self["@unsavedChanges"]=false;
return self}, self, "disableSaveButton", [], smalltalk.Browser)},
args: [],
source: "disableSaveButton\x0a    saveButton ifNotNil: [\x0a\x09saveButton at: 'disabled' put: true].\x0a    unsavedChanges := false",
messageSends: ["ifNotNil:", "at:put:"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_dummyMethodSource",
smalltalk.method({
selector: "dummyMethodSource",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "messageSelectorAndArgumentNames\x0a\x09\x22comment stating purpose of message\x22\x0a\x0a\x09| temporary variable names |\x0a\x09statements";
}, self, "dummyMethodSource", [], smalltalk.Browser)},
args: [],
source: "dummyMethodSource\x0a    ^'messageSelectorAndArgumentNames\x0a\x09\x22comment stating purpose of message\x22\x0a\x0a\x09| temporary variable names |\x0a\x09statements'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_handleSourceAreaKeyDown_",
smalltalk.method({
selector: "handleSourceAreaKeyDown:",
category: 'actions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { if(anEvent.ctrlKey) {
		if(anEvent.keyCode === 83) { //ctrl+s
			self._compile();
			anEvent.preventDefault();
			return false;
		}
	}
	;
;
return self}, self, "handleSourceAreaKeyDown:", [anEvent], smalltalk.Browser)},
args: ["anEvent"],
source: "handleSourceAreaKeyDown: anEvent\x0a\x09 <if(anEvent.ctrlKey) {\x0a\x09\x09if(anEvent.keyCode === 83) { //ctrl+s\x0a\x09\x09\x09self._compile();\x0a\x09\x09\x09anEvent.preventDefault();\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_hideClassButtons",
smalltalk.method({
selector: "hideClassButtons",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@classButtons"])._asJQuery())._hide();
return self}, self, "hideClassButtons", [], smalltalk.Browser)},
args: [],
source: "hideClassButtons\x0a    classButtons asJQuery hide",
messageSends: ["hide", "asJQuery"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_hideMethodButtons",
smalltalk.method({
selector: "hideMethodButtons",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@methodButtons"])._asJQuery())._hide();
return self}, self, "hideMethodButtons", [], smalltalk.Browser)},
args: [],
source: "hideMethodButtons\x0a    methodButtons asJQuery hide",
messageSends: ["hide", "asJQuery"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.TabWidget.fn.prototype._initialize.apply(_st(self), []);
self["@selectedTab"]=smalltalk.symbolFor("instance");
self["@selectedPackage"]=_st(_st(self)._packages())._first();
self["@unsavedChanges"]=false;
return self}, self, "initialize", [], smalltalk.Browser)},
args: [],
source: "initialize\x0a    super initialize.\x0a    selectedTab := #instance.\x0a    selectedPackage := self packages first.\x0a    unsavedChanges := false",
messageSends: ["initialize", "first", "packages"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@selectedClass"]) == nil || $receiver == undefined){
$1="Browser (nil)";
} else {
$1=_st("Browser: ").__comma(_st(self["@selectedClass"])._name());
};
return $1;
}, self, "label", [], smalltalk.Browser)},
args: [],
source: "label\x0a    ^selectedClass \x0a\x09ifNil: ['Browser (nil)']\x0a\x09ifNotNil: ['Browser: ', selectedClass name]",
messageSends: ["ifNil:ifNotNil:", ",", "name"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_metaclassDeclarationSource",
smalltalk.method({
selector: "metaclassDeclarationSource",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$ctx1.stream=nil;
$ctx1.locals.stream=_st("")._writeStream();
if(($receiver = self["@selectedClass"]) == nil || $receiver == undefined){
self["@selectedClass"];
} else {
_st($ctx1.locals.stream)._nextPutAll_(_st(self["@selectedClass"])._asString());
_st($ctx1.locals.stream)._nextPutAll_(" class ");
$1=_st($ctx1.locals.stream)._nextPutAll_("instanceVariableNames: '");
$1;
_st(_st(_st(self["@selectedClass"])._class())._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.stream)._nextPutAll_(each);
})}),(function(){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.stream)._nextPutAll_(" ");
})}));
_st($ctx1.locals.stream)._nextPutAll_("'");
};
$2=_st($ctx1.locals.stream)._contents();
return $2;
}, self, "metaclassDeclarationSource", [], smalltalk.Browser)},
args: [],
source: "metaclassDeclarationSource\x0a    | stream |\x0a    stream := '' writeStream.\x0a    selectedClass ifNotNil: [\x0a\x09stream \x0a\x09    nextPutAll: selectedClass asString;\x0a\x09    nextPutAll: ' class ';\x0a\x09    nextPutAll: 'instanceVariableNames: '''.\x0a\x09selectedClass class instanceVariableNames\x0a\x09    do: [:each | stream nextPutAll: each]\x0a\x09    separatedBy: [stream nextPutAll: ' '].\x0a\x09stream nextPutAll: ''''].\x0a    ^stream contents",
messageSends: ["writeStream", "ifNotNil:", "nextPutAll:", "asString", "do:separatedBy:", "instanceVariableNames", "class", "contents"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_methodSource",
smalltalk.method({
selector: "methodSource",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@selectedMethod"]) == nil || $receiver == undefined){
$1=_st(self)._dummyMethodSource();
} else {
$1=_st(self["@selectedMethod"])._source();
};
return $1;
}, self, "methodSource", [], smalltalk.Browser)},
args: [],
source: "methodSource\x0a    ^selectedMethod\x0a\x09ifNil: [self dummyMethodSource]\x0a\x09ifNotNil: [selectedMethod source]",
messageSends: ["ifNil:ifNotNil:", "dummyMethodSource", "source"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_methods",
smalltalk.method({
selector: "methods",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$4,$3;
$ctx1.klass=nil;
$1=_st(self["@selectedTab"]).__eq(smalltalk.symbolFor("comment"));
if(smalltalk.assert($1)){
return [];
};
if(($receiver = self["@selectedClass"]) == nil || $receiver == undefined){
self["@selectedClass"];
} else {
$2=_st(self["@selectedTab"]).__eq(smalltalk.symbolFor("instance"));
if(smalltalk.assert($2)){
$ctx1.locals.klass=self["@selectedClass"];
} else {
$ctx1.locals.klass=_st(self["@selectedClass"])._class();
};
$ctx1.locals.klass;
};
if(($receiver = self["@selectedProtocol"]) == nil || $receiver == undefined){
if(($receiver = $ctx1.locals.klass) == nil || $receiver == undefined){
$4=[];
} else {
$4=_st(_st($ctx1.locals.klass)._methodDictionary())._values();
};
} else {
$4=_st(_st(_st($ctx1.locals.klass)._methodDictionary())._values())._select_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(_st(each)._category()).__eq(self["@selectedProtocol"]);
})}));
};
$3=_st($4)._sort_((function(a,b){
return smalltalk.withContext(function($ctx2) { return _st(_st(a)._selector()).__lt(_st(b)._selector());
})}));
return $3;
}, self, "methods", [], smalltalk.Browser)},
args: [],
source: "methods\x0a    | klass |\x0a    selectedTab = #comment ifTrue: [^#()].\x0a    selectedClass ifNotNil: [\x0a\x09klass := selectedTab = #instance\x0a\x09    ifTrue: [selectedClass]\x0a\x09    ifFalse: [selectedClass class]].\x0a    ^(selectedProtocol \x0a\x09ifNil: [\x0a\x09    klass \x0a\x09\x09ifNil: [#()] \x0a\x09\x09ifNotNil: [klass methodDictionary values]]\x0a\x09ifNotNil: [\x0a\x09    klass methodDictionary values select: [:each |\x0a\x09\x09each category = selectedProtocol]]) sort: [:a :b | a selector < b selector]",
messageSends: ["ifTrue:", "=", "ifNotNil:", "ifTrue:ifFalse:", "class", "sort:", "<", "selector", "ifNil:ifNotNil:", "values", "methodDictionary", "select:", "category"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$ctx1.packages=nil;
$ctx1.locals.packages=_st((smalltalk.Array || Array))._new();
_st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._classes())._do_((function(each){
return smalltalk.withContext(function($ctx2) { $1=_st($ctx1.locals.packages)._includes_(_st(each)._category());
if(! smalltalk.assert($1)){
return _st($ctx1.locals.packages)._add_(_st(each)._category());
};
})}));
$2=_st($ctx1.locals.packages)._sort();
return $2;
}, self, "packages", [], smalltalk.Browser)},
args: [],
source: "packages\x0a    | packages |\x0a    packages := Array new.\x0a    Smalltalk current classes do: [:each |\x0a\x09(packages includes: each category) ifFalse: [\x0a\x09    packages add: each category]].\x0a    ^packages sort",
messageSends: ["new", "do:", "ifFalse:", "add:", "category", "includes:", "classes", "current", "sort"],
referencedClasses: ["Array", "Smalltalk"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_protocols",
smalltalk.method({
selector: "protocols",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6;
$ctx1.klass=nil;
if(($receiver = self["@selectedClass"]) == nil || $receiver == undefined){
self["@selectedClass"];
} else {
$1=_st(self["@selectedTab"]).__eq(smalltalk.symbolFor("comment"));
if(smalltalk.assert($1)){
return [];
};
$2=_st(self["@selectedTab"]).__eq(smalltalk.symbolFor("instance"));
if(smalltalk.assert($2)){
$ctx1.locals.klass=self["@selectedClass"];
} else {
$ctx1.locals.klass=_st(self["@selectedClass"])._class();
};
$ctx1.locals.klass;
$3=_st(_st($ctx1.locals.klass)._methodDictionary())._isEmpty();
if(smalltalk.assert($3)){
$4=_st((smalltalk.Array || Array))._with_("not yet classified");
return $4;
};
$5=_st($ctx1.locals.klass)._protocols();
return $5;
};
$6=_st((smalltalk.Array || Array))._new();
return $6;
}, self, "protocols", [], smalltalk.Browser)},
args: [],
source: "protocols\x0a    | klass |\x0a    selectedClass ifNotNil: [\x0a\x09selectedTab = #comment ifTrue: [^#()].\x0a\x09klass := selectedTab = #instance\x0a\x09    ifTrue: [selectedClass]\x0a\x09    ifFalse: [selectedClass class].\x0a\x09klass methodDictionary isEmpty ifTrue: [\x0a\x09    ^Array with: 'not yet classified'].\x0a\x09^klass protocols].\x0a    ^Array new",
messageSends: ["ifNotNil:", "ifTrue:", "=", "ifTrue:ifFalse:", "class", "with:", "isEmpty", "methodDictionary", "protocols", "new"],
referencedClasses: ["Array"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_removeClass",
smalltalk.method({
selector: "removeClass",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(window)._confirm_(_st(_st("Do you really want to remove ").__comma(_st(self["@selectedClass"])._name())).__comma("?"));
if(smalltalk.assert($1)){
_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._removeClass_(self["@selectedClass"]);
_st(self)._resetClassesList();
_st(self)._selectClass_(nil);
};
return self}, self, "removeClass", [], smalltalk.Browser)},
args: [],
source: "removeClass\x0a    (window confirm: 'Do you really want to remove ', selectedClass name, '?')\x0a\x09ifTrue: [\x0a\x09    Smalltalk current removeClass: selectedClass.\x0a\x09    self resetClassesList.\x0a\x09    self selectClass: nil]",
messageSends: ["ifTrue:", "removeClass:", "current", "resetClassesList", "selectClass:", "confirm:", ",", "name"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_removeMethod",
smalltalk.method({
selector: "removeMethod",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=_st(self)._cancelChanges();
if(smalltalk.assert($1)){
$2=_st(window)._confirm_(_st(_st("Do you really want to remove #").__comma(_st(self["@selectedMethod"])._selector())).__comma("?"));
if(smalltalk.assert($2)){
$3=_st(self["@selectedTab"]).__eq(smalltalk.symbolFor("instance"));
if(smalltalk.assert($3)){
_st(self["@selectedClass"])._removeCompiledMethod_(self["@selectedMethod"]);
} else {
_st(_st(self["@selectedClass"])._class())._removeCompiledMethod_(self["@selectedMethod"]);
};
_st(self)._selectMethod_(nil);
};
};
return self}, self, "removeMethod", [], smalltalk.Browser)},
args: [],
source: "removeMethod\x0a    self cancelChanges ifTrue: [\x0a\x09(window confirm: 'Do you really want to remove #', selectedMethod selector, '?')\x0a\x09    ifTrue: [\x0a\x09\x09selectedTab = #instance \x0a\x09\x09\x09ifTrue: [selectedClass removeCompiledMethod: selectedMethod]\x0a\x09\x09\x09ifFalse: [selectedClass class removeCompiledMethod: selectedMethod].\x0a\x09\x09self selectMethod: nil]]",
messageSends: ["ifTrue:", "ifTrue:ifFalse:", "removeCompiledMethod:", "class", "=", "selectMethod:", "confirm:", ",", "selector", "cancelChanges"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_removePackage",
smalltalk.method({
selector: "removePackage",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(window)._confirm_(_st(_st("Do you really want to remove the whole package ").__comma(self["@selectedPackage"])).__comma(" with all its classes?"));
if(smalltalk.assert($1)){
_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._removePackage_(self["@selectedPackage"]);
_st(self)._updateCategoriesList();
};
return self}, self, "removePackage", [], smalltalk.Browser)},
args: [],
source: "removePackage\x0a\x0a  (window confirm: 'Do you really want to remove the whole package ', selectedPackage, ' with all its classes?')\x0a\x09ifTrue: [\x0a\x09    Smalltalk current removePackage: selectedPackage.\x0a\x09    self updateCategoriesList]",
messageSends: ["ifTrue:", "removePackage:", "current", "updateCategoriesList", "confirm:", ","],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renameClass",
smalltalk.method({
selector: "renameClass",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$ctx1.newName=nil;
$ctx1.locals.newName=_st(window)._prompt_(_st("Rename class ").__comma(_st(self["@selectedClass"])._name()));
$1=_st(_st($ctx1.locals.newName)._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.newName)._notEmpty();
})}));
if(smalltalk.assert($1)){
_st(self["@selectedClass"])._rename_($ctx1.locals.newName);
_st(self)._updateClassesList();
$2=_st(self)._updateSourceAndButtons();
$2;
};
return self}, self, "renameClass", [], smalltalk.Browser)},
args: [],
source: "renameClass\x0a    | newName |\x0a    newName := window prompt: 'Rename class ', selectedClass name.\x0a    (newName notNil and: [newName notEmpty]) ifTrue: [\x0a\x09selectedClass rename: newName.\x0a\x09self \x0a\x09\x09updateClassesList;\x0a\x09\x09updateSourceAndButtons]",
messageSends: ["prompt:", ",", "name", "ifTrue:", "rename:", "updateClassesList", "updateSourceAndButtons", "and:", "notEmpty", "notNil"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renamePackage",
smalltalk.method({
selector: "renamePackage",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.newName=nil;
$ctx1.locals.newName=_st(window)._prompt_(_st("Rename package ").__comma(self["@selectedPackage"]));
if(($receiver = $ctx1.locals.newName) == nil || $receiver == undefined){
$ctx1.locals.newName;
} else {
$1=_st($ctx1.locals.newName)._notEmpty();
if(smalltalk.assert($1)){
_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._renamePackage_to_(self["@selectedPackage"],$ctx1.locals.newName);
_st(self)._updateCategoriesList();
};
};
return self}, self, "renamePackage", [], smalltalk.Browser)},
args: [],
source: "renamePackage\x0a\x0a  | newName |\x0a  newName := window prompt: 'Rename package ', selectedPackage.\x0a  newName ifNotNil: [\x0a    newName notEmpty ifTrue: [\x0a\x09Smalltalk current renamePackage: selectedPackage to: newName.\x0a\x09self updateCategoriesList]]",
messageSends: ["prompt:", ",", "ifNotNil:", "ifTrue:", "renamePackage:to:", "current", "updateCategoriesList", "notEmpty"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renderBottomPanelOn_",
smalltalk.method({
selector: "renderBottomPanelOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._div();
_st($1)._class_("amber_sourceCode");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) { self["@sourceArea"]=_st((smalltalk.SourceArea || SourceArea))._new();
self["@sourceArea"];
_st(self["@sourceArea"])._renderOn_(html);
_st(self["@sourceArea"])._onKeyDown_((function(e){
return smalltalk.withContext(function($ctx3) { return _st(self)._handleSourceAreaKeyDown_(e);
})}));
return _st(self["@sourceArea"])._onKeyUp_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._updateStatus();
})}));
})}));
return self}, self, "renderBottomPanelOn:", [html], smalltalk.Browser)},
args: ["html"],
source: "renderBottomPanelOn: html\x0a    html div\x0a\x09class: 'amber_sourceCode';\x0a\x09with: [\x0a\x09    sourceArea := SourceArea new.\x0a\x09    sourceArea renderOn: html.\x0a            sourceArea onKeyDown: [:e |\x0a                                   self handleSourceAreaKeyDown: e].\x0a\x09    sourceArea onKeyUp: [self updateStatus]]",
messageSends: ["class:", "div", "with:", "new", "renderOn:", "onKeyDown:", "handleSourceAreaKeyDown:", "onKeyUp:", "updateStatus"],
referencedClasses: ["SourceArea"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._renderTopPanelOn_(html);
_st(self)._renderTabsOn_(html);
$1=_st(self)._renderBottomPanelOn_(html);
return self}, self, "renderBoxOn:", [html], smalltalk.Browser)},
args: ["html"],
source: "renderBoxOn: html\x0a    self \x0a\x09renderTopPanelOn: html;\x0a\x09renderTabsOn: html;\x0a\x09renderBottomPanelOn: html",
messageSends: ["renderTopPanelOn:", "renderTabsOn:", "renderBottomPanelOn:"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$4,$5,$6,$7,$8,$9,$3;
self["@saveButton"]=_st(html)._button();
_st(self["@saveButton"])._with_("Save");
$1=_st(self["@saveButton"])._onClick_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._compile();
})}));
self["@methodButtons"]=_st(html)._span();
self["@classButtons"]=_st(html)._span();
$2=_st(html)._div();
_st($2)._class_("right");
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) { $4=_st(html)._button();
_st($4)._with_("DoIt");
$5=_st($4)._onClick_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self["@sourceArea"])._doIt();
})}));
$5;
$6=_st(html)._button();
_st($6)._with_("PrintIt");
$7=_st($6)._onClick_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self["@sourceArea"])._printIt();
})}));
$7;
$8=_st(html)._button();
_st($8)._with_("InspectIt");
$9=_st($8)._onClick_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self["@sourceArea"])._inspectIt();
})}));
return $9;
})}));
_st(self)._updateSourceAndButtons();
return self}, self, "renderButtonsOn:", [html], smalltalk.Browser)},
args: ["html"],
source: "renderButtonsOn: html\x0a    saveButton := html button.\x0a    saveButton \x0a\x09with: 'Save';\x0a\x09onClick: [self compile].\x0a    methodButtons := html span.\x0a    classButtons := html span.\x0a    html div \x0a\x09class: 'right';\x0a\x09with: [\x0a\x09\x09html button\x0a\x09\x09\x09with: 'DoIt';\x0a\x09\x09\x09onClick: [sourceArea doIt].\x0a\x09\x09html button\x0a\x09\x09\x09with: 'PrintIt';\x0a\x09\x09\x09onClick: [sourceArea printIt].\x0a\x09\x09html button with: 'InspectIt';\x0a\x09\x09\x09onClick: [sourceArea inspectIt]]. \x0a    self updateSourceAndButtons",
messageSends: ["button", "with:", "onClick:", "compile", "span", "class:", "div", "doIt", "printIt", "inspectIt", "updateSourceAndButtons"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renderTabsOn_",
smalltalk.method({
selector: "renderTabsOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@tabsList"]=_st(_st(html)._ul())._class_("amber_tabs amber_browser");
_st(self)._updateTabsList();
return self}, self, "renderTabsOn:", [html], smalltalk.Browser)},
args: ["html"],
source: "renderTabsOn: html\x0a    tabsList := html ul class: 'amber_tabs amber_browser'.\x0a    self updateTabsList.",
messageSends: ["class:", "ul", "updateTabsList"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renderTopPanelOn_",
smalltalk.method({
selector: "renderTopPanelOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$5,$6,$7,$8,$9,$10,$4,$11,$2;
$1=_st(html)._div();
_st($1)._class_("top");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) { self["@packagesList"]=_st(_st(html)._ul())._class_("amber_column browser packages");
self["@packagesList"];
$3=_st(html)._div();
_st($3)._class_("amber_packagesButtons");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) { $5=_st(html)._button();
_st($5)._title_("Commit classes in this package to disk");
_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx4) { return _st(self)._commitPackage();
})}));
$6=_st($5)._with_("Commit");
$6;
$7=_st(html)._button();
_st($7)._title_("Rename package");
_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx4) { return _st(self)._renamePackage();
})}));
$8=_st($7)._with_("Rename");
$8;
$9=_st(html)._button();
_st($9)._title_("Remove this package from the system");
_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx4) { return _st(self)._removePackage();
})}));
$10=_st($9)._with_("Remove");
return $10;
})}));
$4;
self["@classesList"]=_st((smalltalk.ClassesList || ClassesList))._on_(self);
self["@classesList"];
_st(self["@classesList"])._renderOn_(html);
self["@protocolsList"]=_st(_st(html)._ul())._class_("amber_column browser protocols");
self["@protocolsList"];
self["@methodsList"]=_st(_st(html)._ul())._class_("amber_column browser methods");
self["@methodsList"];
_st(self)._updateCategoriesList();
_st(self)._updateClassesList();
_st(self)._updateProtocolsList();
$11=_st(self)._updateMethodsList();
$11;
return _st(_st(html)._div())._class_("amber_clear");
})}));
return self}, self, "renderTopPanelOn:", [html], smalltalk.Browser)},
args: ["html"],
source: "renderTopPanelOn: html\x0a\x09html div \x0a\x09\x09class: 'top'; \x0a\x09\x09with: [\x0a\x09\x09\x09packagesList := html ul class: 'amber_column browser packages'.\x0a          \x09\x09html div class: 'amber_packagesButtons'; with: [\x0a\x09\x09\x09\x09html button \x0a\x09\x09\x09\x09\x09title: 'Commit classes in this package to disk';\x0a\x09\x09\x09\x09\x09onClick: [self commitPackage];\x0a\x09\x09\x09\x09\x09with: 'Commit'.\x0a        \x09\x09\x09html button\x0a\x09\x09\x09\x09\x09title: 'Rename package';\x0a\x09\x09\x09\x09\x09onClick: [self renamePackage];\x0a\x09\x09\x09\x09\x09with: 'Rename'.\x0a        \x09\x09\x09html button\x0a\x09\x09\x09\x09\x09title: 'Remove this package from the system';\x0a\x09\x09\x09\x09\x09onClick: [self removePackage];\x0a\x09\x09\x09\x09\x09with: 'Remove'].\x0a\x09\x09\x09classesList := ClassesList on: self.\x0a\x09\x09\x09classesList renderOn: html.\x0a\x09\x09\x09protocolsList := html ul class: 'amber_column browser protocols'.\x0a\x09\x09\x09methodsList := html ul class: 'amber_column browser methods'.\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09updateCategoriesList;\x0a\x09\x09\x09\x09updateClassesList;\x0a\x09\x09\x09\x09updateProtocolsList;\x0a\x09\x09\x09\x09updateMethodsList.\x0a\x09\x09\x09html div class: 'amber_clear']",
messageSends: ["class:", "div", "with:", "ul", "title:", "button", "onClick:", "commitPackage", "renamePackage", "removePackage", "on:", "renderOn:", "updateCategoriesList", "updateClassesList", "updateProtocolsList", "updateMethodsList"],
referencedClasses: ["ClassesList"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_resetClassesList",
smalltalk.method({
selector: "resetClassesList",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@classesList"])._resetNodes();
return self}, self, "resetClassesList", [], smalltalk.Browser)},
args: [],
source: "resetClassesList\x0a\x09classesList resetNodes",
messageSends: ["resetNodes"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_search_",
smalltalk.method({
selector: "search:",
category: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(self)._cancelChanges();
if(smalltalk.assert($1)){
$ctx1.searchedClass=nil;
$ctx1.locals.searchedClass=_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._at_(aString);
$ctx1.locals.searchedClass;
$2=_st($ctx1.locals.searchedClass)._isClass();
if(smalltalk.assert($2)){
_st(_st(self)._class())._openOn_($ctx1.locals.searchedClass);
} else {
_st(self)._searchReferencesOf_(aString);
};
};
return self}, self, "search:", [aString], smalltalk.Browser)},
args: ["aString"],
source: "search: aString\x0a\x09self cancelChanges ifTrue: [| searchedClass |\x0a\x09\x09searchedClass := Smalltalk current at: aString.\x0a\x09\x09searchedClass isClass\x0a\x09\x09\x09ifTrue: [self class openOn: searchedClass]\x0a\x09\x09\x09ifFalse: [self searchReferencesOf: aString]]",
messageSends: ["ifTrue:", "at:", "current", "ifTrue:ifFalse:", "openOn:", "class", "searchReferencesOf:", "isClass", "cancelChanges"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_searchClassReferences",
smalltalk.method({
selector: "searchClassReferences",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((smalltalk.ReferencesBrowser || ReferencesBrowser))._search_(_st(self["@selectedClass"])._name());
return self}, self, "searchClassReferences", [], smalltalk.Browser)},
args: [],
source: "searchClassReferences\x0a\x09ReferencesBrowser search: selectedClass name",
messageSends: ["search:", "name"],
referencedClasses: ["ReferencesBrowser"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_searchReferencesOf_",
smalltalk.method({
selector: "searchReferencesOf:",
category: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((smalltalk.ReferencesBrowser || ReferencesBrowser))._search_(aString);
return self}, self, "searchReferencesOf:", [aString], smalltalk.Browser)},
args: ["aString"],
source: "searchReferencesOf: aString\x0a\x09ReferencesBrowser search: aString",
messageSends: ["search:"],
referencedClasses: ["ReferencesBrowser"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectCategory_",
smalltalk.method({
selector: "selectCategory:",
category: 'actions',
fn: function (aCategory){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(self)._cancelChanges();
if(smalltalk.assert($1)){
self["@selectedPackage"]=aCategory;
self["@selectedPackage"];
self["@selectedMethod"]=nil;
self["@selectedProtocol"]=self["@selectedMethod"];
self["@selectedClass"]=self["@selectedProtocol"];
self["@selectedClass"];
_st(self)._resetClassesList();
_st(self)._updateCategoriesList();
_st(self)._updateClassesList();
_st(self)._updateProtocolsList();
_st(self)._updateMethodsList();
$2=_st(self)._updateSourceAndButtons();
$2;
};
return self}, self, "selectCategory:", [aCategory], smalltalk.Browser)},
args: ["aCategory"],
source: "selectCategory: aCategory\x0a    self cancelChanges ifTrue: [\x0a\x09selectedPackage := aCategory.\x0a\x09selectedClass := selectedProtocol := selectedMethod :=  nil.\x0a\x09self resetClassesList.\x0a\x09self \x0a\x09    updateCategoriesList;\x0a\x09    updateClassesList;\x0a\x09    updateProtocolsList;\x0a\x09    updateMethodsList;\x0a\x09    updateSourceAndButtons]",
messageSends: ["ifTrue:", "resetClassesList", "updateCategoriesList", "updateClassesList", "updateProtocolsList", "updateMethodsList", "updateSourceAndButtons", "cancelChanges"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectClass_",
smalltalk.method({
selector: "selectClass:",
category: 'actions',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(self)._cancelChanges();
if(smalltalk.assert($1)){
self["@selectedClass"]=aClass;
self["@selectedClass"];
self["@selectedMethod"]=nil;
self["@selectedProtocol"]=self["@selectedMethod"];
self["@selectedProtocol"];
_st(self)._updateClassesList();
_st(self)._updateProtocolsList();
_st(self)._updateMethodsList();
$2=_st(self)._updateSourceAndButtons();
$2;
};
return self}, self, "selectClass:", [aClass], smalltalk.Browser)},
args: ["aClass"],
source: "selectClass: aClass\x0a    self cancelChanges ifTrue: [\x0a\x09selectedClass := aClass.\x0a\x09selectedProtocol := selectedMethod := nil.\x0a\x09self \x0a\x09    updateClassesList;\x0a\x09    updateProtocolsList;\x0a\x09    updateMethodsList;\x0a\x09    updateSourceAndButtons]",
messageSends: ["ifTrue:", "updateClassesList", "updateProtocolsList", "updateMethodsList", "updateSourceAndButtons", "cancelChanges"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectMethod_",
smalltalk.method({
selector: "selectMethod:",
category: 'actions',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(self)._cancelChanges();
if(smalltalk.assert($1)){
self["@selectedMethod"]=aMethod;
self["@selectedMethod"];
_st(self)._updateProtocolsList();
_st(self)._updateMethodsList();
$2=_st(self)._updateSourceAndButtons();
$2;
};
return self}, self, "selectMethod:", [aMethod], smalltalk.Browser)},
args: ["aMethod"],
source: "selectMethod: aMethod\x0a    self cancelChanges ifTrue: [\x0a\x09selectedMethod := aMethod.\x0a\x09self \x0a\x09    updateProtocolsList;\x0a\x09    updateMethodsList;\x0a\x09    updateSourceAndButtons]",
messageSends: ["ifTrue:", "updateProtocolsList", "updateMethodsList", "updateSourceAndButtons", "cancelChanges"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectProtocol_",
smalltalk.method({
selector: "selectProtocol:",
category: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(self)._cancelChanges();
if(smalltalk.assert($1)){
self["@selectedProtocol"]=aString;
self["@selectedProtocol"];
self["@selectedMethod"]=nil;
self["@selectedMethod"];
_st(self)._updateProtocolsList();
_st(self)._updateMethodsList();
$2=_st(self)._updateSourceAndButtons();
$2;
};
return self}, self, "selectProtocol:", [aString], smalltalk.Browser)},
args: ["aString"],
source: "selectProtocol: aString\x0a    self cancelChanges ifTrue: [\x0a\x09selectedProtocol := aString.\x0a\x09selectedMethod := nil.\x0a\x09self \x0a\x09    updateProtocolsList;\x0a\x09    updateMethodsList;\x0a\x09    updateSourceAndButtons]",
messageSends: ["ifTrue:", "updateProtocolsList", "updateMethodsList", "updateSourceAndButtons", "cancelChanges"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectTab_",
smalltalk.method({
selector: "selectTab:",
category: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._cancelChanges();
if(smalltalk.assert($1)){
self["@selectedTab"]=aString;
self["@selectedTab"];
_st(self)._selectProtocol_(nil);
_st(self)._updateTabsList();
};
return self}, self, "selectTab:", [aString], smalltalk.Browser)},
args: ["aString"],
source: "selectTab: aString\x0a    self cancelChanges ifTrue: [\x0a\x09selectedTab := aString.\x0a\x09self selectProtocol: nil.\x0a\x09self updateTabsList]",
messageSends: ["ifTrue:", "selectProtocol:", "updateTabsList", "cancelChanges"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectedClass",
smalltalk.method({
selector: "selectedClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@selectedClass"];
}, self, "selectedClass", [], smalltalk.Browser)},
args: [],
source: "selectedClass\x0a\x09^selectedClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectedPackage",
smalltalk.method({
selector: "selectedPackage",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@selectedPackage"];
}, self, "selectedPackage", [], smalltalk.Browser)},
args: [],
source: "selectedPackage\x0a\x09^selectedPackage",
messageSends: [],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_setMethodProtocol_",
smalltalk.method({
selector: "setMethodProtocol:",
category: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=_st(self)._cancelChanges();
if(smalltalk.assert($1)){
$2=_st(_st(self)._protocols())._includes_(aString);
if(smalltalk.assert($2)){
_st(self["@selectedMethod"])._category_(aString);
self["@selectedProtocol"]=aString;
self["@selectedProtocol"];
self["@selectedMethod"]=self["@selectedMethod"];
self["@selectedMethod"];
_st(self)._updateProtocolsList();
_st(self)._updateMethodsList();
$3=_st(self)._updateSourceAndButtons();
$3;
} else {
_st(self)._addNewProtocol();
};
};
return self}, self, "setMethodProtocol:", [aString], smalltalk.Browser)},
args: ["aString"],
source: "setMethodProtocol: aString\x0a    self cancelChanges ifTrue: [\x0a\x09(self protocols includes: aString)\x0a\x09    ifFalse: [self addNewProtocol]\x0a\x09    ifTrue: [\x0a\x09\x09selectedMethod category: aString.\x0a\x09\x09selectedProtocol := aString.\x0a\x09\x09selectedMethod := selectedMethod.\x0a\x09\x09self \x0a\x09\x09    updateProtocolsList;\x0a\x09\x09    updateMethodsList;\x0a\x09\x09    updateSourceAndButtons]]",
messageSends: ["ifTrue:", "ifFalse:ifTrue:", "addNewProtocol", "category:", "updateProtocolsList", "updateMethodsList", "updateSourceAndButtons", "includes:", "protocols", "cancelChanges"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_showClassButtons",
smalltalk.method({
selector: "showClassButtons",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@classButtons"])._asJQuery())._show();
return self}, self, "showClassButtons", [], smalltalk.Browser)},
args: [],
source: "showClassButtons\x0a    classButtons asJQuery show",
messageSends: ["show", "asJQuery"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_showMethodButtons",
smalltalk.method({
selector: "showMethodButtons",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@methodButtons"])._asJQuery())._show();
return self}, self, "showMethodButtons", [], smalltalk.Browser)},
args: [],
source: "showMethodButtons\x0a    methodButtons asJQuery show",
messageSends: ["show", "asJQuery"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$2,$4;
$1=_st(self["@selectedTab"]).__eq(smalltalk.symbolFor("comment"));
if(! smalltalk.assert($1)){
$3=_st(_st(self["@selectedProtocol"])._notNil())._or_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self["@selectedMethod"])._notNil();
})}));
if(smalltalk.assert($3)){
$2=_st(self)._methodSource();
} else {
$2=_st(self)._declarationSource();
};
return $2;
};
if(($receiver = self["@selectedClass"]) == nil || $receiver == undefined){
$4="";
} else {
$4=_st(self)._classCommentSource();
};
return $4;
}, self, "source", [], smalltalk.Browser)},
args: [],
source: "source\x0a    selectedTab = #comment ifFalse: [\x0a\x09^(selectedProtocol notNil or: [selectedMethod notNil])\x0a\x09    ifFalse: [self declarationSource]\x0a\x09    ifTrue: [self methodSource]].\x0a    ^selectedClass\x0a\x09ifNil: ['']\x0a\x09ifNotNil: [self classCommentSource]",
messageSends: ["ifFalse:", "ifFalse:ifTrue:", "declarationSource", "methodSource", "or:", "notNil", "=", "ifNil:ifNotNil:", "classCommentSource"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateCategoriesList",
smalltalk.method({
selector: "updateCategoriesList",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
_st(self["@packagesList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._packages())._do_((function(each){
return smalltalk.withContext(function($ctx3) { $ctx3.li=nil;
$ctx3.label=nil;
$1=_st(each)._isEmpty();
if(smalltalk.assert($1)){
$ctx3.locals.label="Unclassified";
$ctx3.locals.label;
} else {
$ctx3.locals.label=each;
$ctx3.locals.label;
};
$ctx3.locals.li=_st(html)._li();
$ctx3.locals.li;
$2=_st(self["@selectedPackage"]).__eq(each);
if(smalltalk.assert($2)){
_st($ctx3.locals.li)._class_("selected");
};
_st($ctx3.locals.li)._with_($ctx3.locals.label);
$3=_st($ctx3.locals.li)._onClick_((function(){
return smalltalk.withContext(function($ctx4) { return _st(self)._selectCategory_(each);
})}));
return $3;
})}));
})}));
return self}, self, "updateCategoriesList", [], smalltalk.Browser)},
args: [],
source: "updateCategoriesList\x0a    packagesList contents: [:html |\x0a\x09self packages do: [:each || li label |\x0a\x09    each isEmpty \x0a\x09\x09ifTrue: [label := 'Unclassified']\x0a\x09\x09ifFalse: [label := each].\x0a\x09    li := html li.\x0a\x09    selectedPackage = each ifTrue: [\x0a\x09\x09li class: 'selected'].\x0a\x09    li\x0a\x09\x09with: label;\x0a\x09\x09onClick: [self selectCategory: each]]]",
messageSends: ["contents:", "do:", "ifTrue:ifFalse:", "isEmpty", "li", "ifTrue:", "class:", "=", "with:", "onClick:", "selectCategory:", "packages"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateClassesList",
smalltalk.method({
selector: "updateClassesList",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.TabManager || TabManager))._current())._update();
_st(self["@classesList"])._updateNodes();
return self}, self, "updateClassesList", [], smalltalk.Browser)},
args: [],
source: "updateClassesList\x0a    TabManager current update.\x0a    classesList updateNodes",
messageSends: ["update", "current", "updateNodes"],
referencedClasses: ["TabManager"]
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateMethodsList",
smalltalk.method({
selector: "updateMethodsList",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self["@methodsList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._methods())._do_((function(each){
return smalltalk.withContext(function($ctx3) { $ctx3.li=nil;
$ctx3.locals.li=_st(html)._li();
$ctx3.locals.li;
$1=_st(self["@selectedMethod"]).__eq(each);
if(smalltalk.assert($1)){
_st($ctx3.locals.li)._class_("selected");
};
_st($ctx3.locals.li)._with_(_st(each)._selector());
$2=_st($ctx3.locals.li)._onClick_((function(){
return smalltalk.withContext(function($ctx4) { return _st(self)._selectMethod_(each);
})}));
return $2;
})}));
})}));
return self}, self, "updateMethodsList", [], smalltalk.Browser)},
args: [],
source: "updateMethodsList\x0a    methodsList contents: [:html |\x0a\x09self methods do: [:each || li |\x0a\x09    li := html li.\x0a\x09    selectedMethod = each ifTrue: [\x0a\x09\x09li class: 'selected'].\x0a\x09    li\x0a\x09\x09with: each selector;\x0a\x09\x09onClick: [self selectMethod: each]]]",
messageSends: ["contents:", "do:", "li", "ifTrue:", "class:", "=", "with:", "selector", "onClick:", "selectMethod:", "methods"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateProtocolsList",
smalltalk.method({
selector: "updateProtocolsList",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self["@protocolsList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._protocols())._do_((function(each){
return smalltalk.withContext(function($ctx3) { $ctx3.li=nil;
$ctx3.locals.li=_st(html)._li();
$ctx3.locals.li;
$1=_st(self["@selectedProtocol"]).__eq(each);
if(smalltalk.assert($1)){
_st($ctx3.locals.li)._class_("selected");
};
_st($ctx3.locals.li)._with_(each);
$2=_st($ctx3.locals.li)._onClick_((function(){
return smalltalk.withContext(function($ctx4) { return _st(self)._selectProtocol_(each);
})}));
return $2;
})}));
})}));
return self}, self, "updateProtocolsList", [], smalltalk.Browser)},
args: [],
source: "updateProtocolsList\x0a    protocolsList contents: [:html |\x0a\x09self protocols do: [:each || li |\x0a\x09    li := html li.\x0a\x09    selectedProtocol = each ifTrue: [\x0a\x09\x09li class: 'selected'].\x0a\x09    li \x0a\x09\x09with: each;\x0a\x09\x09onClick: [self selectProtocol: each]]]",
messageSends: ["contents:", "do:", "li", "ifTrue:", "class:", "=", "with:", "onClick:", "selectProtocol:", "protocols"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateSourceAndButtons",
smalltalk.method({
selector: "updateSourceAndButtons",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$14,$15,$16,$17,$18,$19,$13,$20,$22,$23,$24,$25,$21,$26,$27;
$ctx1.currentProtocol=nil;
_st(self)._disableSaveButton();
_st(self["@classButtons"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) { $1=_st(html)._button();
_st($1)._title_("Create a new class");
_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._addNewClass();
})}));
$2=_st($1)._with_("New class");
$2;
$3=_st(html)._button();
_st($3)._with_("Rename class");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._renameClass();
})}));
$4;
$5=_st(html)._button();
_st($5)._with_("Copy class");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._copyClass();
})}));
$6;
$7=_st(html)._button();
_st($7)._with_("Remove class");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._removeClass();
})}));
$8;
$9=_st(html)._button();
_st($9)._with_("References");
$10=_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._searchClassReferences();
})}));
return $10;
})}));
_st(self["@methodButtons"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) { $ctx2.protocolSelect=nil;
$ctx2.referencesSelect=nil;
$11=_st(html)._button();
_st($11)._with_("Remove method");
$12=_st($11)._onClick_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._removeMethod();
})}));
$12;
$ctx2.locals.protocolSelect=_st(html)._select();
$ctx2.locals.protocolSelect;
_st($ctx2.locals.protocolSelect)._onChange_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._setMethodProtocol_(_st(_st($ctx2.locals.protocolSelect)._asJQuery())._val());
})}));
$13=_st($ctx2.locals.protocolSelect)._with_((function(){
return smalltalk.withContext(function($ctx3) { $14=_st(html)._option();
_st($14)._with_("Method protocol");
$15=_st($14)._at_put_("disabled","disabled");
$15;
$16=_st(html)._option();
_st($16)._class_("important");
$17=_st($16)._with_("New...");
$17;
$ctx1.locals.currentProtocol=self["@selectedProtocol"];
$ctx1.locals.currentProtocol;
$18=_st(_st($ctx1.locals.currentProtocol)._isNil())._and_((function(){
return smalltalk.withContext(function($ctx4) { return _st(self["@selectedMethod"])._notNil();
})}));
if(smalltalk.assert($18)){
$ctx1.locals.currentProtocol=_st(self["@selectedMethod"])._category();
$ctx1.locals.currentProtocol;
};
return _st(_st(self)._protocols())._do_((function(each){
return smalltalk.withContext(function($ctx4) { option=_st(_st(html)._option())._with_(each);
option;
$19=_st($ctx1.locals.currentProtocol).__eq(each);
if(smalltalk.assert($19)){
return _st(option)._at_put_("selected","selected");
};
})}));
})}));
$13;
$20=_st(self["@selectedMethod"])._isNil();
if(! smalltalk.assert($20)){
$ctx2.locals.referencesSelect=_st(html)._select();
$ctx2.locals.referencesSelect;
_st($ctx2.locals.referencesSelect)._onChange_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._searchReferencesOf_(_st(_st($ctx2.locals.referencesSelect)._asJQuery())._val());
})}));
$21=_st($ctx2.locals.referencesSelect)._with_((function(){
return smalltalk.withContext(function($ctx3) { $ctx3.option=nil;
$22=_st(html)._option();
_st($22)._with_("References");
_st($22)._at_put_("disabled","disabled");
$23=_st($22)._at_put_("selected","selected");
$23;
$24=_st(html)._option();
_st($24)._class_("important");
$25=_st($24)._with_(_st(self["@selectedMethod"])._selector());
$25;
return _st(_st(_st(self["@selectedMethod"])._messageSends())._sorted())._do_((function(each){
return smalltalk.withContext(function($ctx4) { return _st(_st(html)._option())._with_(each);
})}));
})}));
return $21;
};
})}));
$26=_st(self["@selectedMethod"])._isNil();
if(smalltalk.assert($26)){
_st(self)._hideMethodButtons();
$27=_st(_st(self["@selectedClass"])._isNil())._or_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self["@selectedProtocol"])._notNil();
})}));
if(smalltalk.assert($27)){
_st(self)._hideClassButtons();
} else {
_st(self)._showClassButtons();
};
} else {
_st(self)._hideClassButtons();
_st(self)._showMethodButtons();
};
_st(self["@sourceArea"])._val_(_st(self)._source());
return self}, self, "updateSourceAndButtons", [], smalltalk.Browser)},
args: [],
source: "updateSourceAndButtons\x0a\x09| currentProtocol |\x0a\x0a\x09self disableSaveButton.\x0a\x09classButtons contents: [:html |\x0a\x09\x09html button\x0a\x09\x09\x09title: 'Create a new class';\x0a\x09\x09\x09onClick: [self addNewClass];\x0a\x09\x09\x09with: 'New class'.\x0a\x09\x09html button\x0a\x09\x09\x09with: 'Rename class';\x0a\x09\x09\x09onClick: [self renameClass].\x0a\x09\x09html button\x0a\x09\x09\x09with: 'Copy class';\x0a\x09\x09\x09onClick: [self copyClass].\x0a\x09\x09html button\x0a\x09\x09\x09with: 'Remove class';\x0a\x09\x09\x09onClick: [self removeClass].\x0a\x09\x09html button\x0a\x09\x09\x09with: 'References';\x0a\x09\x09\x09onClick: [self searchClassReferences]].\x0a\x09methodButtons contents: [:html | | protocolSelect referencesSelect |\x0a\x09\x09html button\x0a\x09\x09\x09with: 'Remove method';\x0a\x09\x09\x09onClick: [self removeMethod].\x0a\x09\x09protocolSelect := html select.\x0a                protocolSelect\x0a\x09\x09\x09onChange: [ self setMethodProtocol: protocolSelect asJQuery val];\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html option\x0a\x09\x09\x09\x09\x09with: 'Method protocol';\x0a\x09\x09\x09\x09\x09at: 'disabled' put: 'disabled'.\x0a\x09\x09\x09\x09html option\x0a\x09\x09\x09\x09\x09class: 'important';\x0a\x09\x09\x09\x09\x09with: 'New...'.\x0a                currentProtocol := selectedProtocol.\x0a                (currentProtocol isNil and: [ selectedMethod notNil ])\x0a                \x09ifTrue: [ currentProtocol := selectedMethod category].\x0a\x09\x09\x09\x09self protocols do: [:each |\x0a\x09\x09\x09\x09\x09option := html option with: each.\x0a\x09\x09\x09\x09\x09currentProtocol = each ifTrue: [ option at: 'selected' put: 'selected' ] ]].\x0a\x09\x09selectedMethod isNil ifFalse: [\x0a\x09\x09\x09referencesSelect := html select.\x0a                        referencesSelect\x0a\x09\x09\x09\x09onChange: [self searchReferencesOf: referencesSelect asJQuery val];\x0a\x09\x09\x09\x09with: [ |option|\x0a\x09\x09\x09\x09\x09html option\x0a\x09\x09\x09\x09\x09\x09with: 'References';\x0a\x09\x09\x09\x09\x09\x09at: 'disabled' put: 'disabled';\x0a                        at: 'selected' put: 'selected'.\x0a\x09\x09\x09\x09\x09html option\x0a\x09\x09\x09\x09\x09\x09class: 'important';\x0a\x09\x09\x09\x09\x09\x09with: selectedMethod selector.\x0a\x09\x09\x09\x09\x09selectedMethod messageSends sorted do: [:each |\x0a\x09\x09\x09\x09\x09\x09html option with: each]]]].\x0a\x09selectedMethod isNil\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09self hideMethodButtons.\x0a\x09\x09\x09\x09(selectedClass isNil or: [selectedProtocol notNil])\x0a\x09\x09\x09\x09\x09ifTrue: [self hideClassButtons]\x0a\x09\x09\x09\x09\x09ifFalse: [self showClassButtons]]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09self hideClassButtons.\x0a\x09\x09\x09self showMethodButtons].\x0a\x09sourceArea val: self source",
messageSends: ["disableSaveButton", "contents:", "title:", "button", "onClick:", "addNewClass", "with:", "renameClass", "copyClass", "removeClass", "searchClassReferences", "removeMethod", "select", "onChange:", "setMethodProtocol:", "val", "asJQuery", "option", "at:put:", "class:", "ifTrue:", "category", "and:", "notNil", "isNil", "do:", "=", "protocols", "ifFalse:", "searchReferencesOf:", "selector", "sorted", "messageSends", "ifTrue:ifFalse:", "hideMethodButtons", "hideClassButtons", "showClassButtons", "or:", "showMethodButtons", "val:", "source"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateStatus",
smalltalk.method({
selector: "updateStatus",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self["@sourceArea"])._val()).__eq(_st(self)._source());
if(smalltalk.assert($1)){
if(($receiver = self["@saveButton"]) == nil || $receiver == undefined){
self["@saveButton"];
} else {
_st(self["@saveButton"])._at_put_("disabled",true);
};
self["@unsavedChanges"]=false;
self["@unsavedChanges"];
} else {
if(($receiver = self["@saveButton"]) == nil || $receiver == undefined){
self["@saveButton"];
} else {
_st(self["@saveButton"])._removeAt_("disabled");
};
self["@unsavedChanges"]=true;
self["@unsavedChanges"];
};
return self}, self, "updateStatus", [], smalltalk.Browser)},
args: [],
source: "updateStatus\x0a\x09sourceArea val = self source\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09saveButton ifNotNil: [\x0a\x09\x09\x09\x09saveButton at: 'disabled' put: true].\x0a\x09\x09\x09\x09unsavedChanges := false]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09saveButton ifNotNil: [\x0a\x09\x09\x09\x09saveButton removeAt: 'disabled'].\x0a\x09\x09\x09unsavedChanges := true]",
messageSends: ["ifTrue:ifFalse:", "ifNotNil:", "at:put:", "removeAt:", "=", "source", "val"],
referencedClasses: []
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateTabsList",
smalltalk.method({
selector: "updateTabsList",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12;
_st(self["@tabsList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) { $ctx2.li=nil;
$ctx2.locals.li=_st(html)._li();
$ctx2.locals.li;
$1=_st(self["@selectedTab"]).__eq(smalltalk.symbolFor("instance"));
if(smalltalk.assert($1)){
_st($ctx2.locals.li)._class_("selected");
};
_st($ctx2.locals.li)._with_((function(){
return smalltalk.withContext(function($ctx3) { _st(_st(html)._span())._class_("ltab");
$2=_st(html)._span();
_st($2)._class_("mtab");
$3=_st($2)._with_("Instance");
$3;
return _st(_st(html)._span())._class_("rtab");
})}));
$4=_st($ctx2.locals.li)._onClick_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._selectTab_(smalltalk.symbolFor("instance"));
})}));
$4;
$ctx2.locals.li=_st(html)._li();
$ctx2.locals.li;
$5=_st(self["@selectedTab"]).__eq(smalltalk.symbolFor("class"));
if(smalltalk.assert($5)){
_st($ctx2.locals.li)._class_("selected");
};
_st($ctx2.locals.li)._with_((function(){
return smalltalk.withContext(function($ctx3) { _st(_st(html)._span())._class_("ltab");
$6=_st(html)._span();
_st($6)._class_("mtab");
$7=_st($6)._with_("Class");
$7;
return _st(_st(html)._span())._class_("rtab");
})}));
$8=_st($ctx2.locals.li)._onClick_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._selectTab_(smalltalk.symbolFor("class"));
})}));
$8;
$ctx2.locals.li=_st(html)._li();
$ctx2.locals.li;
$9=_st(self["@selectedTab"]).__eq(smalltalk.symbolFor("comment"));
if(smalltalk.assert($9)){
_st($ctx2.locals.li)._class_("selected");
};
_st($ctx2.locals.li)._with_((function(){
return smalltalk.withContext(function($ctx3) { _st(_st(html)._span())._class_("ltab");
$10=_st(html)._span();
_st($10)._class_("mtab");
$11=_st($10)._with_("Comment");
$11;
return _st(_st(html)._span())._class_("rtab");
})}));
$12=_st($ctx2.locals.li)._onClick_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._selectTab_(smalltalk.symbolFor("comment"));
})}));
return $12;
})}));
return self}, self, "updateTabsList", [], smalltalk.Browser)},
args: [],
source: "updateTabsList\x0a    tabsList contents: [:html || li |\x0a\x09li := html li.\x0a\x09selectedTab = #instance ifTrue: [li class: 'selected'].\x0a\x09li\x0a\x09    with: [\x0a\x09\x09html span class: 'ltab'.\x0a\x09\x09html span class: 'mtab'; with: 'Instance'.\x0a\x09\x09html span class: 'rtab'];\x0a\x09    onClick: [self selectTab: #instance].\x0a\x09li := html li.\x0a\x09selectedTab = #class ifTrue: [li class: 'selected'].\x0a\x09li\x0a\x09    with: [\x0a\x09\x09html span class: 'ltab'.\x0a\x09\x09html span class: 'mtab'; with: 'Class'.\x0a\x09\x09html span class: 'rtab'];\x0a\x09    onClick: [self selectTab: #class].\x0a\x09li := html li.\x0a\x09selectedTab = #comment ifTrue: [li class: 'selected'].\x0a\x09li\x0a\x09    with: [\x0a\x09\x09html span class: 'ltab'.\x0a\x09\x09html span class: 'mtab'; with: 'Comment'.\x0a\x09\x09html span class: 'rtab'];\x0a\x09    onClick: [self selectTab: #comment]]",
messageSends: ["contents:", "li", "ifTrue:", "class:", "=", "with:", "span", "onClick:", "selectTab:"],
referencedClasses: []
}),
smalltalk.Browser);


smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
category: 'convenience',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._new())._open();
return self}, self, "open", [], smalltalk.Browser.klass)},
args: [],
source: "open\x0a    self new open",
messageSends: ["open", "new"],
referencedClasses: []
}),
smalltalk.Browser.klass);

smalltalk.addMethod(
"_openOn_",
smalltalk.method({
selector: "openOn:",
category: 'convenience',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._open();
_st($2)._selectCategory_(_st(aClass)._category());
$3=_st($2)._selectClass_(aClass);
$1=$3;
return $1;
}, self, "openOn:", [aClass], smalltalk.Browser.klass)},
args: ["aClass"],
source: "openOn: aClass\x0a    ^self new\x0a\x09open;\x0a\x09selectCategory: aClass category;\x0a\x09selectClass: aClass",
messageSends: ["open", "new", "selectCategory:", "category", "selectClass:"],
referencedClasses: []
}),
smalltalk.Browser.klass);


smalltalk.addClass('Debugger', smalltalk.TabWidget, ['error', 'selectedContext', 'sourceArea', 'ul', 'ul2', 'inspector', 'saveButton', 'unsavedChanges', 'selectedVariable', 'selectedVariableName', 'inspectButton'], 'IDE');
smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._method();
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(_st(self["@selectedContext"])._temps())._collect_((function(each){
return smalltalk.withContext(function($ctx2) { return nil;
})}));
} else {
$1=_st(_st(self)._method())._arguments();
};
return $1;
}, self, "arguments", [], smalltalk.Debugger)},
args: [],
source: "arguments\x0a\x09^self method \x0a\x09\x09ifNil: [selectedContext temps collect: [:each | nil]]\x0a\x09\x09ifNotNil: [self method arguments]",
messageSends: ["ifNil:ifNotNil:", "collect:", "temps", "arguments", "method"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_canBeClosed",
smalltalk.method({
selector: "canBeClosed",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "canBeClosed", [], smalltalk.Debugger)},
args: [],
source: "canBeClosed\x0a    ^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_error",
smalltalk.method({
selector: "error",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@error"];
}, self, "error", [], smalltalk.Debugger)},
args: [],
source: "error\x0a\x09^error",
messageSends: [],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_error_",
smalltalk.method({
selector: "error:",
category: 'accessing',
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@error"]=anError;
return self}, self, "error:", [anError], smalltalk.Debugger)},
args: ["anError"],
source: "error: anError\x0a\x09error := anError",
messageSends: [],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.TabWidget.fn.prototype._initialize.apply(_st(self), []);
_st(self["@unsavedChanges"]).__eq(false);
return self}, self, "initialize", [], smalltalk.Debugger)},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09unsavedChanges = false",
messageSends: ["initialize", "="],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_inspectSelectedVariable",
smalltalk.method({
selector: "inspectSelectedVariable",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@selectedVariable"])._inspect();
return self}, self, "inspectSelectedVariable", [], smalltalk.Debugger)},
args: [],
source: "inspectSelectedVariable\x0a\x09selectedVariable inspect",
messageSends: ["inspect"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "[Debugger]";
}, self, "label", [], smalltalk.Debugger)},
args: [],
source: "label\x0a\x09^'[Debugger]'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_method",
smalltalk.method({
selector: "method",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self["@selectedContext"])._receiver())._class())._lookupSelector_(_st(self["@selectedContext"])._selector());
return $1;
}, self, "method", [], smalltalk.Debugger)},
args: [],
source: "method\x0a\x09^selectedContext receiver class lookupSelector: selectedContext selector",
messageSends: ["lookupSelector:", "selector", "class", "receiver"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_proceed",
smalltalk.method({
selector: "proceed",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._close();
_st(_st(self["@selectedContext"])._receiver())._perform_withArguments_(_st(self["@selectedContext"])._selector(),_st(self["@selectedContext"])._temps());
return self}, self, "proceed", [], smalltalk.Debugger)},
args: [],
source: "proceed\x0a\x09self close.\x0a\x09selectedContext receiver perform: selectedContext selector withArguments: selectedContext temps",
messageSends: ["close", "perform:withArguments:", "selector", "temps", "receiver"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@selectedContext"])._receiver();
return $1;
}, self, "receiver", [], smalltalk.Debugger)},
args: [],
source: "receiver\x0a\x09^selectedContext receiver",
messageSends: ["receiver"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_renderBottomPanelOn_",
smalltalk.method({
selector: "renderBottomPanelOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._div();
_st($1)._class_("amber_sourceCode debugger");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) { self["@sourceArea"]=_st((smalltalk.SourceArea || SourceArea))._new();
self["@sourceArea"];
return _st(self["@sourceArea"])._renderOn_(html);
})}));
self["@ul2"]=_st(_st(html)._ul())._class_("amber_column debugger variables");
self["@inspector"]=_st(_st(html)._div())._class_("amber_column debugger inspector");
_st(self["@sourceArea"])._onKeyUp_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._updateStatus();
})}));
return self}, self, "renderBottomPanelOn:", [html], smalltalk.Debugger)},
args: ["html"],
source: "renderBottomPanelOn: html\x0a\x09html div\x0a\x09\x09class: 'amber_sourceCode debugger';\x0a\x09\x09with: [\x0a\x09\x09\x09sourceArea := SourceArea new.\x0a\x09\x09\x09sourceArea renderOn: html].\x0a\x09ul2 := html ul class: 'amber_column debugger variables'.\x0a\x09inspector := html div class: 'amber_column debugger inspector'.\x0a\x09sourceArea\x0a\x09\x09onKeyUp: [self updateStatus]",
messageSends: ["class:", "div", "with:", "new", "renderOn:", "ul", "onKeyUp:", "updateStatus"],
referencedClasses: ["SourceArea"]
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._renderTopPanelOn_(html);
$1=_st(self)._renderBottomPanelOn_(html);
return self}, self, "renderBoxOn:", [html], smalltalk.Debugger)},
args: ["html"],
source: "renderBoxOn: html\x0a   self \x0a\x09renderTopPanelOn: html;\x0a\x09renderBottomPanelOn: html",
messageSends: ["renderTopPanelOn:", "renderBottomPanelOn:"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15;
_st(self)._inspect();
$1=_st(html)._button();
_st($1)._with_("Save");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._save();
})}));
self["@saveButton"]=$2;
$3=_st(html)._button();
_st($3)._with_("DoIt");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self["@sourceArea"])._doIt();
})}));
$5=_st(html)._button();
_st($5)._with_("PrintIt");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self["@sourceArea"])._printIt();
})}));
$7=_st(html)._button();
_st($7)._with_("InspectIt");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self["@sourceArea"])._inspectIt();
})}));
$9=_st(html)._button();
_st($9)._with_("Proceed");
$10=_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._proceed();
})}));
$11=_st(html)._button();
_st($11)._with_("Abandon");
$12=_st($11)._onClick_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._close();
})}));
$13=_st(html)._button();
_st($13)._class_("amber_button debugger inspect");
_st($13)._with_("Inspect");
$14=_st($13)._onClick_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._inspectSelectedVariable();
})}));
self["@inspectButton"]=$14;
_st(self)._updateSourceArea();
_st(self)._updateStatus();
_st(self)._updateVariablesList();
$15=_st(self)._updateInspector();
return self}, self, "renderButtonsOn:", [html], smalltalk.Debugger)},
args: ["html"],
source: "renderButtonsOn: html\x0a\x09self inspect.\x0a\x09saveButton := html button\x0a\x09\x09with: 'Save';\x0a\x09\x09onClick: [self save].\x0a\x09html button\x0a\x09\x09with: 'DoIt';\x0a\x09\x09onClick: [sourceArea doIt].\x0a\x09html button\x0a\x09\x09with: 'PrintIt';\x0a\x09\x09onClick: [sourceArea printIt].\x0a\x09html button\x0a\x09\x09with: 'InspectIt';\x0a\x09\x09onClick: [sourceArea inspectIt].\x0a\x09html button \x0a\x09\x09with: 'Proceed';\x0a\x09\x09onClick: [self proceed].\x0a\x09html button\x0a\x09\x09with: 'Abandon';\x0a\x09\x09onClick: [self close].\x0a\x09inspectButton := html button\x0a\x09\x09class: 'amber_button debugger inspect';\x0a\x09\x09with: 'Inspect';\x0a\x09\x09onClick: [self inspectSelectedVariable].\x0a\x09 self \x0a\x09\x09updateSourceArea;\x0a\x09\x09updateStatus;\x0a\x09\x09updateVariablesList;\x0a\x09\x09updateInspector",
messageSends: ["inspect", "with:", "button", "onClick:", "save", "doIt", "printIt", "inspectIt", "proceed", "close", "class:", "inspectSelectedVariable", "updateSourceArea", "updateStatus", "updateVariablesList", "updateInspector"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_renderContext_on_",
smalltalk.method({
selector: "renderContext:on:",
category: 'rendering',
fn: function (aContext,html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$ctx1.li=nil;
$ctx1.locals.li=_st(html)._li();
$1=_st(self["@selectedContext"]).__eq(aContext);
if(smalltalk.assert($1)){
_st($ctx1.locals.li)._class_("selected");
};
_st($ctx1.locals.li)._with_(_st(aContext)._asString());
$2=_st($ctx1.locals.li)._onClick_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._selectContext_(aContext);
})}));
$3=_st(aContext)._home();
if(($receiver = $3) == nil || $receiver == undefined){
$3;
} else {
_st(self)._renderContext_on_(_st(aContext)._home(),html);
};
return self}, self, "renderContext:on:", [aContext,html], smalltalk.Debugger)},
args: ["aContext", "html"],
source: "renderContext: aContext on: html\x0a\x09| li |\x0a\x09li := html li.\x0a\x09selectedContext = aContext ifTrue: [\x0a\x09\x09li class: 'selected'].\x0a\x09li \x0a\x09\x09with: aContext asString;\x0a\x09\x09onClick: [self selectContext: aContext].\x0a\x09aContext home ifNotNil: [self renderContext: aContext home on: html]",
messageSends: ["li", "ifTrue:", "class:", "=", "with:", "asString", "onClick:", "selectContext:", "ifNotNil:", "renderContext:on:", "home"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_renderTopPanelOn_",
smalltalk.method({
selector: "renderTopPanelOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$5,$6,$2;
self["@selectedContext"]=_st(_st(self)._error())._context();
$1=_st(html)._div();
_st($1)._class_("top");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) { $3=_st(html)._div();
_st($3)._class_("label");
$4=_st($3)._with_(_st(_st(self)._error())._messageText());
$4;
$5=_st(html)._ul();
_st($5)._class_("amber_column debugger contexts");
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._renderContext_on_(_st(_st(self)._error())._context(),html);
})}));
self["@ul"]=$6;
return self["@ul"];
})}));
return self}, self, "renderTopPanelOn:", [html], smalltalk.Debugger)},
args: ["html"],
source: "renderTopPanelOn: html\x0a\x09selectedContext := self error context.\x0a\x09html div \x0a\x09\x09class: 'top'; \x0a\x09\x09with: [\x0a\x09\x09\x09html div \x0a\x09\x09\x09\x09class: 'label';\x0a\x09\x09\x09\x09with: self error messageText.\x0a\x09\x09\x09ul := html ul \x0a\x09\x09\x09\x09class: 'amber_column debugger contexts';\x0a\x09\x09\x09\x09with: [self renderContext: self error context on: html]]",
messageSends: ["context", "error", "class:", "div", "with:", "messageText", "ul", "renderContext:on:"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_save",
smalltalk.method({
selector: "save",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { $ctx1.protocol=nil;
$ctx1.locals.protocol=_st(_st(_st(_st(_st(self["@selectedContext"])._receiver())._class())._methodDictionary())._at_(_st(self["@selectedContext"])._selector()))._category();
_st(_st(_st(self["@selectedContext"])._receiver())._class())._compile_category_(_st(self["@sourceArea"])._val(),$ctx1.locals.protocol);
_st(self)._updateStatus();
return self}, self, "save", [], smalltalk.Debugger)},
args: [],
source: "save\x0a\x09| protocol |\x0a\x09protocol := (selectedContext receiver class methodDictionary at: selectedContext selector) category.\x0a\x09selectedContext receiver class compile: sourceArea val category: protocol.\x0a\x09self updateStatus",
messageSends: ["category", "at:", "selector", "methodDictionary", "class", "receiver", "compile:category:", "val", "updateStatus"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_selectContext_",
smalltalk.method({
selector: "selectContext:",
category: 'actions',
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
self["@selectedContext"]=aContext;
self["@selectedVariable"]=nil;
self["@selectedVariableName"]=nil;
_st(self)._updateContextsList();
_st(self)._updateSourceArea();
_st(self)._updateInspector();
_st(self)._updateVariablesList();
$1=_st(self)._updateStatus();
return self}, self, "selectContext:", [aContext], smalltalk.Debugger)},
args: ["aContext"],
source: "selectContext: aContext\x0a\x09selectedContext := aContext.\x0a\x09selectedVariable := nil.\x0a\x09selectedVariableName := nil.\x0a\x09self \x0a\x09\x09updateContextsList;\x0a\x09\x09updateSourceArea;\x0a\x09\x09updateInspector;\x0a\x09\x09updateVariablesList;\x0a\x09\x09updateStatus",
messageSends: ["updateContextsList", "updateSourceArea", "updateInspector", "updateVariablesList", "updateStatus"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_selectVariable_named_",
smalltalk.method({
selector: "selectVariable:named:",
category: 'actions',
fn: function (anObject,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@selectedVariable"]=anObject;
self["@selectedVariableName"]=aString;
_st(self["@inspector"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) { return _st(html)._with_(_st(anObject)._printString());
})}));
_st(self)._updateVariablesList();
return self}, self, "selectVariable:named:", [anObject,aString], smalltalk.Debugger)},
args: ["anObject", "aString"],
source: "selectVariable: anObject named: aString\x0a\x09selectedVariable := anObject.\x0a\x09selectedVariableName := aString.\x0a\x09inspector contents: [:html | html with: anObject printString].\x0a\x09self updateVariablesList",
messageSends: ["contents:", "with:", "printString", "updateVariablesList"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self)._method();
if(($receiver = $2) == nil || $receiver == undefined){
$1="Method doesn't exist!";
} else {
$1=_st(_st(self)._method())._source();
};
return $1;
}, self, "source", [], smalltalk.Debugger)},
args: [],
source: "source\x0a\x09^self method \x0a\x09\x09ifNil: ['Method doesn''t exist!']\x0a\x09\x09ifNotNil: [self method source]",
messageSends: ["ifNil:ifNotNil:", "source", "method"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_updateContextsList",
smalltalk.method({
selector: "updateContextsList",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@ul"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) { return _st(self)._renderContext_on_(_st(_st(self)._error())._context(),html);
})}));
return self}, self, "updateContextsList", [], smalltalk.Debugger)},
args: [],
source: "updateContextsList\x0a\x09ul contents: [:html |\x0a\x09\x09self renderContext: self error context on: html]",
messageSends: ["contents:", "renderContext:on:", "context", "error"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_updateInspector",
smalltalk.method({
selector: "updateInspector",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@inspector"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) { })}));
return self}, self, "updateInspector", [], smalltalk.Debugger)},
args: [],
source: "updateInspector\x0a\x09inspector contents: [:html |]",
messageSends: ["contents:"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_updateSourceArea",
smalltalk.method({
selector: "updateSourceArea",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@sourceArea"])._val_(_st(self)._source());
return self}, self, "updateSourceArea", [], smalltalk.Debugger)},
args: [],
source: "updateSourceArea\x0a\x09 sourceArea val: self source",
messageSends: ["val:", "source"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_updateStatus",
smalltalk.method({
selector: "updateStatus",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self["@sourceArea"])._val()).__eq(_st(self)._source());
if(smalltalk.assert($1)){
if(($receiver = self["@saveButton"]) == nil || $receiver == undefined){
self["@saveButton"];
} else {
_st(self["@saveButton"])._at_put_("disabled",true);
};
self["@unsavedChanges"]=false;
self["@unsavedChanges"];
} else {
if(($receiver = self["@saveButton"]) == nil || $receiver == undefined){
self["@saveButton"];
} else {
_st(self["@saveButton"])._removeAt_("disabled");
};
self["@unsavedChanges"]=true;
self["@unsavedChanges"];
};
return self}, self, "updateStatus", [], smalltalk.Debugger)},
args: [],
source: "updateStatus\x0a\x09sourceArea val = self source\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09saveButton ifNotNil: [\x0a\x09\x09\x09\x09saveButton at: 'disabled' put: true].\x0a\x09\x09\x09unsavedChanges := false]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09saveButton ifNotNil: [\x0a\x09\x09\x09\x09saveButton removeAt: 'disabled'].\x0a\x09\x09\x09unsavedChanges := true]",
messageSends: ["ifTrue:ifFalse:", "ifNotNil:", "at:put:", "removeAt:", "=", "source", "val"],
referencedClasses: []
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_updateVariablesList",
smalltalk.method({
selector: "updateVariablesList",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7,$8,$9;
_st(self["@ul2"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) { $ctx2.li=nil;
$1=_st(html)._li();
_st($1)._with_("self");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._selectVariable_named_(_st(self)._receiver(),"self");
})}));
$ctx2.locals.li=$2;
$ctx2.locals.li;
$3=_st(self["@selectedVariableName"]).__eq("self");
if(smalltalk.assert($3)){
_st($ctx2.locals.li)._class_("selected");
};
_st(_st(self)._arguments())._withIndexDo_((function(each,index){
return smalltalk.withContext(function($ctx3) { $ctx3.param=nil;
$ctx3.locals.param=_st(_st(self["@selectedContext"])._temps())._at_(index);
$ctx3.locals.param;
$4=_st(html)._li();
_st($4)._with_(each);
$5=_st($4)._onClick_((function(){
return smalltalk.withContext(function($ctx4) { return _st(self)._selectVariable_named_($ctx3.locals.param,each);
})}));
$ctx2.locals.li=$5;
$ctx2.locals.li;
$6=_st(self["@selectedVariableName"]).__eq(each);
if(smalltalk.assert($6)){
return _st($ctx2.locals.li)._class_("selected");
};
})}));
return _st(_st(_st(_st(self)._receiver())._class())._allInstanceVariableNames())._do_((function(each){
return smalltalk.withContext(function($ctx3) { $ctx3.ivar=nil;
$ctx3.locals.ivar=_st(_st(self)._receiver())._instVarAt_(each);
$ctx3.locals.ivar;
$7=_st(html)._li();
_st($7)._with_(each);
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx4) { return _st(self)._selectVariable_named_($ctx3.locals.ivar,each);
})}));
$ctx2.locals.li=$8;
$ctx2.locals.li;
$9=_st(self["@selectedVariableName"]).__eq(each);
if(smalltalk.assert($9)){
return _st($ctx2.locals.li)._class_("selected");
};
})}));
})}));
if(($receiver = self["@selectedVariable"]) == nil || $receiver == undefined){
_st(self["@inspectButton"])._at_put_("disabled",true);
} else {
_st(self["@inspectButton"])._removeAt_("disabled");
};
return self}, self, "updateVariablesList", [], smalltalk.Debugger)},
args: [],
source: "updateVariablesList\x0a\x09ul2 contents: [:html | | li |\x0a\x09\x09li := html li \x0a\x09\x09\x09with: 'self';\x0a\x09\x09\x09onClick: [self selectVariable: self receiver named: 'self'].\x0a                selectedVariableName = 'self' ifTrue: [\x0a\x09\x09\x09li class: 'selected'].\x0a                self arguments withIndexDo: [:each :index | | param |\x0a                        param := selectedContext temps at: index.\x0a                        li := html li \x0a\x09\x09\x09\x09with: each;\x0a\x09\x09\x09\x09onClick: [self selectVariable: param named: each].\x0a                         selectedVariableName = each ifTrue: [\x0a\x09\x09\x09\x09li class: 'selected']].\x0a                self receiver class allInstanceVariableNames do: [:each | | ivar |\x0a                        ivar := self receiver instVarAt: each.\x0a                        li := html li \x0a\x09\x09\x09\x09with: each;\x0a\x09\x09\x09\x09onClick: [self selectVariable: ivar named: each].\x0a                         selectedVariableName = each ifTrue: [\x0a\x09\x09\x09\x09li class: 'selected']]].\x0a\x09selectedVariable ifNil: [inspectButton at: 'disabled' put: true] ifNotNil: [inspectButton removeAt: 'disabled']",
messageSends: ["contents:", "with:", "li", "onClick:", "selectVariable:named:", "receiver", "ifTrue:", "class:", "=", "withIndexDo:", "at:", "temps", "arguments", "do:", "instVarAt:", "allInstanceVariableNames", "class", "ifNil:ifNotNil:", "at:put:", "removeAt:"],
referencedClasses: []
}),
smalltalk.Debugger);



smalltalk.addClass('IDETranscript', smalltalk.TabWidget, ['textarea'], 'IDE');
smalltalk.addMethod(
"_clear",
smalltalk.method({
selector: "clear",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@textarea"])._asJQuery())._val_("");
return self}, self, "clear", [], smalltalk.IDETranscript)},
args: [],
source: "clear\x0a    textarea asJQuery val: ''",
messageSends: ["val:", "asJQuery"],
referencedClasses: []
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
"_cr",
smalltalk.method({
selector: "cr",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@textarea"])._asJQuery())._val_(_st(_st(_st(self["@textarea"])._asJQuery())._val()).__comma(_st((smalltalk.String || String))._cr()));
return self}, self, "cr", [], smalltalk.IDETranscript)},
args: [],
source: "cr\x0a    textarea asJQuery val: textarea asJQuery val, String cr.",
messageSends: ["val:", ",", "cr", "val", "asJQuery"],
referencedClasses: ["String"]
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Transcript";
}, self, "label", [], smalltalk.IDETranscript)},
args: [],
source: "label\x0a    ^'Transcript'",
messageSends: [],
referencedClasses: []
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.TabManager || TabManager))._current();
_st($1)._open();
$2=_st($1)._selectTab_(self);
return self}, self, "open", [], smalltalk.IDETranscript)},
args: [],
source: "open\x0a    TabManager current \x0a\x09open;\x0a\x09selectTab: self",
messageSends: ["open", "current", "selectTab:"],
referencedClasses: ["TabManager"]
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
self["@textarea"]=_st(html)._textarea();
_st(self["@textarea"])._class_("amber_transcript");
$1=_st(self["@textarea"])._at_put_("spellcheck","false");
return self}, self, "renderBoxOn:", [html], smalltalk.IDETranscript)},
args: ["html"],
source: "renderBoxOn: html\x0a    textarea := html textarea.\x0a    textarea \x0a\x09class: 'amber_transcript';\x0a\x09at: 'spellcheck' put: 'false'",
messageSends: ["textarea", "class:", "at:put:"],
referencedClasses: []
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._button();
_st($1)._with_("Clear transcript");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._clear();
})}));
return self}, self, "renderButtonsOn:", [html], smalltalk.IDETranscript)},
args: ["html"],
source: "renderButtonsOn: html\x0a    html button\x0a\x09with: 'Clear transcript';\x0a\x09onClick: [self clear]",
messageSends: ["with:", "button", "onClick:", "clear"],
referencedClasses: []
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
"_show_",
smalltalk.method({
selector: "show:",
category: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { if(($receiver = self["@textarea"]) == nil || $receiver == undefined){
_st(self)._open();
} else {
self["@textarea"];
};
_st(_st(self["@textarea"])._asJQuery())._val_(_st(_st(_st(self["@textarea"])._asJQuery())._val()).__comma(_st(anObject)._asString()));
return self}, self, "show:", [anObject], smalltalk.IDETranscript)},
args: ["anObject"],
source: "show: anObject\x0a    textarea ifNil: [self open].\x0a    textarea asJQuery val: textarea asJQuery val, anObject asString.",
messageSends: ["ifNil:", "open", "val:", ",", "asString", "val", "asJQuery"],
referencedClasses: []
}),
smalltalk.IDETranscript);


smalltalk.IDETranscript.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@current"]) == nil || $receiver == undefined){
self["@current"]=smalltalk.TabWidget.klass.fn.prototype._new.apply(_st(self), []);
$1=self["@current"];
} else {
$1=self["@current"];
};
return $1;
}, self, "current", [], smalltalk.IDETranscript.klass)},
args: [],
source: "current\x0a\x09^current ifNil: [current := super new]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.IDETranscript.klass);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((smalltalk.Transcript || Transcript))._register_(_st(self)._current());
return self}, self, "initialize", [], smalltalk.IDETranscript.klass)},
args: [],
source: "initialize\x0a\x09Transcript register: self current",
messageSends: ["register:", "current"],
referencedClasses: ["Transcript"]
}),
smalltalk.IDETranscript.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._shouldNotImplement();
return self}, self, "new", [], smalltalk.IDETranscript.klass)},
args: [],
source: "new\x0a    self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.IDETranscript.klass);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.TabManager || TabManager))._current();
_st($1)._open();
$2=_st($1)._selectTab_(_st(self)._current());
return self}, self, "open", [], smalltalk.IDETranscript.klass)},
args: [],
source: "open\x0a    TabManager current \x0a\x09open;\x0a\x09selectTab: self current",
messageSends: ["open", "current", "selectTab:"],
referencedClasses: ["TabManager"]
}),
smalltalk.IDETranscript.klass);


smalltalk.addClass('Inspector', smalltalk.TabWidget, ['label', 'variables', 'object', 'selectedVariable', 'variablesList', 'valueTextarea', 'diveButton', 'sourceArea'], 'IDE');
smalltalk.addMethod(
"_canBeClosed",
smalltalk.method({
selector: "canBeClosed",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "canBeClosed", [], smalltalk.Inspector)},
args: [],
source: "canBeClosed\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_dive",
smalltalk.method({
selector: "dive",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st(self)._variables())._at_(_st(self)._selectedVariable()))._inspect();
return self}, self, "dive", [], smalltalk.Inspector)},
args: [],
source: "dive\x0a\x09(self variables at: self selectedVariable) inspect",
messageSends: ["inspect", "at:", "selectedVariable", "variables"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_inspect_",
smalltalk.method({
selector: "inspect:",
category: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@object"]=anObject;
self["@variables"]=[];
_st(self["@object"])._inspectOn_(self);
return self}, self, "inspect:", [anObject], smalltalk.Inspector)},
args: ["anObject"],
source: "inspect: anObject\x0a\x09object := anObject.\x0a\x09variables := #().\x0a\x09object inspectOn: self",
messageSends: ["inspectOn:"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@label"]) == nil || $receiver == undefined){
$1="Inspector (nil)";
} else {
$1=self["@label"];
};
return $1;
}, self, "label", [], smalltalk.Inspector)},
args: [],
source: "label\x0a\x09^label ifNil: ['Inspector (nil)']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_refresh",
smalltalk.method({
selector: "refresh",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._inspect_(self["@object"]);
_st(self)._updateVariablesList();
$1=_st(self)._updateValueTextarea();
return self}, self, "refresh", [], smalltalk.Inspector)},
args: [],
source: "refresh\x0a\x09self \x0a\x09\x09inspect: object; \x0a\x09\x09updateVariablesList;\x0a\x09\x09updateValueTextarea",
messageSends: ["inspect:", "updateVariablesList", "updateValueTextarea"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_renderBottomPanelOn_",
smalltalk.method({
selector: "renderBottomPanelOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_("amber_sourceCode");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) { $3=_st((smalltalk.SourceArea || SourceArea))._new();
_st($3)._receiver_(self["@object"]);
_st($3)._onDoIt_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._refresh();
})}));
$4=_st($3)._yourself();
self["@sourceArea"]=$4;
self["@sourceArea"];
return _st(self["@sourceArea"])._renderOn_(html);
})}));
return self}, self, "renderBottomPanelOn:", [html], smalltalk.Inspector)},
args: ["html"],
source: "renderBottomPanelOn: html\x0a    html div\x0a\x09class: 'amber_sourceCode';\x0a\x09with: [\x0a\x09    sourceArea := SourceArea new\x0a\x09\x09receiver: object;\x0a\x09\x09onDoIt: [self refresh];\x0a\x09\x09yourself.\x0a            sourceArea renderOn: html]",
messageSends: ["class:", "div", "with:", "receiver:", "new", "onDoIt:", "refresh", "yourself", "renderOn:"],
referencedClasses: ["SourceArea"]
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._renderTopPanelOn_(html);
$1=_st(self)._renderBottomPanelOn_(html);
return self}, self, "renderBoxOn:", [html], smalltalk.Inspector)},
args: ["html"],
source: "renderBoxOn: html\x0a\x09self \x0a\x09\x09renderTopPanelOn: html;\x0a\x09\x09renderBottomPanelOn: html",
messageSends: ["renderTopPanelOn:", "renderBottomPanelOn:"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6;
$1=_st(html)._button();
_st($1)._with_("DoIt");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._sourceArea())._doIt();
})}));
$3=_st(html)._button();
_st($3)._with_("PrintIt");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._sourceArea())._printIt();
})}));
$5=_st(html)._button();
_st($5)._with_("InspectIt");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._sourceArea())._inspectIt();
})}));
_st(self)._updateButtons();
return self}, self, "renderButtonsOn:", [html], smalltalk.Inspector)},
args: ["html"],
source: "renderButtonsOn: html\x0a\x09html button \x0a\x09\x09with: 'DoIt';\x0a\x09\x09onClick: [self sourceArea doIt].\x0a\x09html button \x0a\x09\x09with: 'PrintIt';\x0a\x09\x09onClick: [self sourceArea printIt].\x0a\x09html button \x0a\x09\x09with: 'InspectIt';\x0a\x09\x09onClick: [self sourceArea inspectIt].\x0a\x09self updateButtons",
messageSends: ["with:", "button", "onClick:", "doIt", "sourceArea", "printIt", "inspectIt", "updateButtons"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_renderTopPanelOn_",
smalltalk.method({
selector: "renderTopPanelOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$5,$7,$8,$9,$10,$6,$2,$11;
$1=_st(html)._div();
_st($1)._class_("top");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) { self["@variablesList"]=_st(_st(html)._ul())._class_("amber_column variables");
self["@variablesList"];
$3=_st(html)._textarea();
_st($3)._class_("amber_column value");
$4=_st($3)._at_put_("readonly","readonly");
self["@valueTextarea"]=$4;
self["@valueTextarea"];
$5=_st(html)._div();
_st($5)._class_("amber_tabs inspector");
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx3) { $7=_st(html)._button();
_st($7)._class_("amber_button inspector refresh");
_st($7)._with_("Refresh");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx4) { return _st(self)._refresh();
})}));
$8;
$9=_st(html)._button();
_st($9)._class_("amber_button inspector dive");
_st($9)._with_("Dive");
$10=_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx4) { return _st(self)._dive();
})}));
self["@diveButton"]=$10;
return self["@diveButton"];
})}));
$6;
return _st(_st(html)._div())._class_("amber_clear");
})}));
_st(self)._updateVariablesList();
$11=_st(self)._updateValueTextarea();
return self}, self, "renderTopPanelOn:", [html], smalltalk.Inspector)},
args: ["html"],
source: "renderTopPanelOn: html\x0a\x09html div \x0a\x09\x09class: 'top'; \x0a\x09\x09with: [\x0a\x09\x09\x09variablesList := html ul class: 'amber_column variables'.\x0a\x09\x09\x09valueTextarea := html textarea class: 'amber_column value'; at: 'readonly' put: 'readonly'.\x0a\x09\x09\x09html div class: 'amber_tabs inspector'; with: [\x0a\x09\x09\x09\x09html button\x0a\x09\x09\x09\x09\x09class: 'amber_button inspector refresh';\x0a\x09\x09\x09\x09\x09with: 'Refresh';\x0a\x09\x09\x09\x09\x09onClick: [self refresh].\x0a\x09\x09\x09\x09diveButton := html button \x0a\x09\x09\x09\x09\x09class: 'amber_button inspector dive';\x0a\x09\x09\x09\x09\x09with: 'Dive'; \x0a\x09\x09\x09\x09\x09onClick: [self dive]].\x0a\x09\x09\x09html div class: 'amber_clear'].\x0a\x09self\x0a\x09\x09updateVariablesList;\x0a\x09\x09updateValueTextarea.",
messageSends: ["class:", "div", "with:", "ul", "textarea", "at:put:", "button", "onClick:", "refresh", "dive", "updateVariablesList", "updateValueTextarea"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_selectVariable_",
smalltalk.method({
selector: "selectVariable:",
category: 'updating',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._selectedVariable_(aString);
_st(self)._updateVariablesList();
_st(self)._updateValueTextarea();
$1=_st(self)._updateButtons();
return self}, self, "selectVariable:", [aString], smalltalk.Inspector)},
args: ["aString"],
source: "selectVariable: aString\x0a\x09self selectedVariable: aString.\x0a\x09self \x0a\x09\x09updateVariablesList;\x0a\x09\x09updateValueTextarea;\x0a\x09\x09updateButtons",
messageSends: ["selectedVariable:", "updateVariablesList", "updateValueTextarea", "updateButtons"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_selectedVariable",
smalltalk.method({
selector: "selectedVariable",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@selectedVariable"];
}, self, "selectedVariable", [], smalltalk.Inspector)},
args: [],
source: "selectedVariable\x0a\x09^selectedVariable",
messageSends: [],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_selectedVariable_",
smalltalk.method({
selector: "selectedVariable:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@selectedVariable"]=aString;
return self}, self, "selectedVariable:", [aString], smalltalk.Inspector)},
args: ["aString"],
source: "selectedVariable: aString\x0a\x09selectedVariable := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_setLabel_",
smalltalk.method({
selector: "setLabel:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@label"]=aString;
return self}, self, "setLabel:", [aString], smalltalk.Inspector)},
args: ["aString"],
source: "setLabel: aString\x0a\x09label := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_setVariables_",
smalltalk.method({
selector: "setVariables:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@variables"]=aCollection;
return self}, self, "setVariables:", [aCollection], smalltalk.Inspector)},
args: ["aCollection"],
source: "setVariables: aCollection\x0a\x09variables := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_sourceArea",
smalltalk.method({
selector: "sourceArea",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@sourceArea"];
}, self, "sourceArea", [], smalltalk.Inspector)},
args: [],
source: "sourceArea\x0a\x09^sourceArea",
messageSends: [],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_updateButtons",
smalltalk.method({
selector: "updateButtons",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._selectedVariable())._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) { return _st(_st(_st(self)._variables())._at_(_st(self)._selectedVariable()))._notNil();
})}));
if(smalltalk.assert($1)){
_st(self["@diveButton"])._removeAt_("disabled");
} else {
_st(self["@diveButton"])._at_put_("disabled",true);
};
return self}, self, "updateButtons", [], smalltalk.Inspector)},
args: [],
source: "updateButtons\x0a\x09(self selectedVariable notNil and: [(self variables at: self selectedVariable) notNil])\x0a\x09\x09ifFalse: [diveButton at: 'disabled' put: true] \x0a\x09\x09ifTrue: [diveButton removeAt: 'disabled']",
messageSends: ["ifFalse:ifTrue:", "at:put:", "removeAt:", "and:", "notNil", "at:", "selectedVariable", "variables"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_updateValueTextarea",
smalltalk.method({
selector: "updateValueTextarea",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(_st(self)._selectedVariable())._isNil();
if(smalltalk.assert($2)){
$1="";
} else {
$1=_st(_st(_st(self)._variables())._at_(_st(self)._selectedVariable()))._printString();
};
_st(_st(self["@valueTextarea"])._asJQuery())._val_($1);
return self}, self, "updateValueTextarea", [], smalltalk.Inspector)},
args: [],
source: "updateValueTextarea\x0a\x09valueTextarea asJQuery val: (self selectedVariable isNil\x0a\x09\x09ifTrue: ['']\x0a\x09\x09ifFalse: [(self variables at: self selectedVariable) printString])",
messageSends: ["val:", "ifTrue:ifFalse:", "printString", "at:", "selectedVariable", "variables", "isNil", "asJQuery"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_updateVariablesList",
smalltalk.method({
selector: "updateVariablesList",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self["@variablesList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) { return _st(_st(_st(self)._variables())._keys())._do_((function(each){
return smalltalk.withContext(function($ctx3) { $ctx3.li=nil;
$ctx3.locals.li=_st(html)._li();
$ctx3.locals.li;
_st($ctx3.locals.li)._with_(each);
$1=_st($ctx3.locals.li)._onClick_((function(){
return smalltalk.withContext(function($ctx4) { return _st(self)._selectVariable_(each);
})}));
$1;
$2=_st(_st(self)._selectedVariable()).__eq(each);
if(smalltalk.assert($2)){
return _st($ctx3.locals.li)._class_("selected");
};
})}));
})}));
return self}, self, "updateVariablesList", [], smalltalk.Inspector)},
args: [],
source: "updateVariablesList\x0a\x09variablesList contents: [:html |\x0a\x09\x09self variables keys do: [:each || li |\x0a\x09\x09\x09li := html li.\x0a\x09\x09\x09li\x0a\x09\x09\x09\x09with: each;\x0a\x09\x09\x09\x09onClick: [self selectVariable: each].\x0a\x09\x09\x09self selectedVariable = each ifTrue: [\x0a\x09\x09\x09\x09li class: 'selected']]]",
messageSends: ["contents:", "do:", "li", "with:", "onClick:", "selectVariable:", "ifTrue:", "class:", "=", "selectedVariable", "keys", "variables"],
referencedClasses: []
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_variables",
smalltalk.method({
selector: "variables",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@variables"];
}, self, "variables", [], smalltalk.Inspector)},
args: [],
source: "variables\x0a\x09^variables",
messageSends: [],
referencedClasses: []
}),
smalltalk.Inspector);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._inspect_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, self, "on:", [anObject], smalltalk.Inspector.klass)},
args: ["anObject"],
source: "on: anObject\x0a\x09^self new\x0a\x09\x09inspect: anObject;\x0a\x09\x09yourself",
messageSends: ["inspect:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Inspector.klass);


smalltalk.addClass('ProgressBar', smalltalk.TabWidget, ['percent', 'progressDiv', 'div'], 'IDE');
smalltalk.addMethod(
"_percent",
smalltalk.method({
selector: "percent",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@percent"]) == nil || $receiver == undefined){
$1=(0);
} else {
$1=self["@percent"];
};
return $1;
}, self, "percent", [], smalltalk.ProgressBar)},
args: [],
source: "percent\x0a\x09^percent ifNil: [0]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.ProgressBar);

smalltalk.addMethod(
"_percent_",
smalltalk.method({
selector: "percent:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@percent"]=aNumber;
return self}, self, "percent:", [aNumber], smalltalk.ProgressBar)},
args: ["aNumber"],
source: "percent: aNumber\x0a\x09percent := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProgressBar);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._div();
_st($1)._class_("progress_bar");
$2=_st($1)._yourself();
self["@div"]=$2;
_st(self)._renderProgressBar();
return self}, self, "renderOn:", [html], smalltalk.ProgressBar)},
args: ["html"],
source: "renderOn: html \x0a\x09div := html div \x0a\x09\x09class: 'progress_bar';\x0a\x09\x09yourself.\x0a\x09self renderProgressBar",
messageSends: ["class:", "div", "yourself", "renderProgressBar"],
referencedClasses: []
}),
smalltalk.ProgressBar);

smalltalk.addMethod(
"_renderProgressBar",
smalltalk.method({
selector: "renderProgressBar",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self["@div"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) { $1=_st(html)._div();
_st($1)._class_("progress");
$2=_st($1)._style_(_st(_st("width:").__comma(_st(_st(self)._percent())._asString())).__comma("%"));
return $2;
})}));
return self}, self, "renderProgressBar", [], smalltalk.ProgressBar)},
args: [],
source: "renderProgressBar\x0a\x09div contents: [:html |\x0a\x09\x09html div \x0a\x09\x09\x09class: 'progress';\x0a\x09\x09\x09style: 'width:', self percent asString, '%']",
messageSends: ["contents:", "class:", "div", "style:", ",", "asString", "percent"],
referencedClasses: []
}),
smalltalk.ProgressBar);

smalltalk.addMethod(
"_updatePercent_",
smalltalk.method({
selector: "updatePercent:",
category: 'updating',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._percent_(aNumber);
_st(self)._renderProgressBar();
return self}, self, "updatePercent:", [aNumber], smalltalk.ProgressBar)},
args: ["aNumber"],
source: "updatePercent: aNumber\x0a\x09self percent: aNumber.\x0a\x09self renderProgressBar",
messageSends: ["percent:", "renderProgressBar"],
referencedClasses: []
}),
smalltalk.ProgressBar);



smalltalk.addClass('ReferencesBrowser', smalltalk.TabWidget, ['implementors', 'senders', 'implementorsList', 'input', 'timer', 'selector', 'sendersList', 'referencedClasses', 'referencedClassesList', 'matches', 'matchesList'], 'IDE');
smalltalk.addMethod(
"_canBeClosed",
smalltalk.method({
selector: "canBeClosed",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "canBeClosed", [], smalltalk.ReferencesBrowser)},
args: [],
source: "canBeClosed\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_classesAndMetaclasses",
smalltalk.method({
selector: "classesAndMetaclasses",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._classes()).__comma(_st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._classes())._collect_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(each)._class();
})})));
return $1;
}, self, "classesAndMetaclasses", [], smalltalk.ReferencesBrowser)},
args: [],
source: "classesAndMetaclasses\x0a\x09^Smalltalk current classes, (Smalltalk current classes collect: [:each | each class])",
messageSends: [",", "collect:", "class", "classes", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_implementors",
smalltalk.method({
selector: "implementors",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@implementors"]) == nil || $receiver == undefined){
self["@implementors"]=_st((smalltalk.Array || Array))._new();
$1=self["@implementors"];
} else {
$1=self["@implementors"];
};
return $1;
}, self, "implementors", [], smalltalk.ReferencesBrowser)},
args: [],
source: "implementors\x0a\x09^implementors ifNil: [implementors := Array new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.TabWidget.fn.prototype._initialize.apply(_st(self), []);
self["@selector"]="";
return self}, self, "initialize", [], smalltalk.ReferencesBrowser)},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09selector := ''",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "[References]";
}, self, "label", [], smalltalk.ReferencesBrowser)},
args: [],
source: "label\x0a\x09^'[References]'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_matches",
smalltalk.method({
selector: "matches",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@matches"]) == nil || $receiver == undefined){
self["@matches"]=_st((smalltalk.Array || Array))._new();
$1=self["@matches"];
} else {
$1=self["@matches"];
};
return $1;
}, self, "matches", [], smalltalk.ReferencesBrowser)},
args: [],
source: "matches\x0a\x09^matches ifNil: [matches := Array new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_openBrowserOn_",
smalltalk.method({
selector: "openBrowserOn:",
category: 'actions',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1,$3,$4;
$ctx1.browser=nil;
$2=_st(_st(aMethod)._methodClass())._isMetaclass();
if(smalltalk.assert($2)){
$1=_st(_st(aMethod)._methodClass())._instanceClass();
} else {
$1=_st(aMethod)._methodClass();
};
$ctx1.locals.browser=_st((smalltalk.Browser || Browser))._openOn_($1);
$3=_st(_st(aMethod)._methodClass())._isMetaclass();
if(smalltalk.assert($3)){
_st($ctx1.locals.browser)._selectTab_(smalltalk.symbolFor("class"));
};
_st($ctx1.locals.browser)._selectProtocol_(_st(aMethod)._category());
$4=_st($ctx1.locals.browser)._selectMethod_(aMethod);
return self}, self, "openBrowserOn:", [aMethod], smalltalk.ReferencesBrowser)},
args: ["aMethod"],
source: "openBrowserOn: aMethod\x0a       | browser |\x0a       browser := Browser openOn: (aMethod methodClass isMetaclass \x0a\x09\x09ifTrue: [aMethod methodClass instanceClass] ifFalse: [aMethod methodClass]).\x0a       aMethod methodClass isMetaclass ifTrue: [browser selectTab: #class].\x0a       browser\x0a               selectProtocol: aMethod category;\x0a               selectMethod: aMethod",
messageSends: ["openOn:", "ifTrue:ifFalse:", "instanceClass", "methodClass", "isMetaclass", "ifTrue:", "selectTab:", "selectProtocol:", "category", "selectMethod:"],
referencedClasses: ["Browser"]
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_referencedClasses",
smalltalk.method({
selector: "referencedClasses",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@referencedClasses"]) == nil || $receiver == undefined){
self["@referencedClasses"]=_st((smalltalk.Array || Array))._new();
$1=self["@referencedClasses"];
} else {
$1=self["@referencedClasses"];
};
return $1;
}, self, "referencedClasses", [], smalltalk.ReferencesBrowser)},
args: [],
source: "referencedClasses\x0a\x09^referencedClasses ifNil: [referencedClasses := Array new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._renderInputOn_(html);
_st(self)._renderImplementorsOn_(html);
_st(self)._renderSendersOn_(html);
_st(self)._renderReferencedClassesOn_(html);
$1=_st(self)._renderMatchesOn_(html);
return self}, self, "renderBoxOn:", [html], smalltalk.ReferencesBrowser)},
args: ["html"],
source: "renderBoxOn: html\x0a\x09self \x0a\x09\x09renderInputOn: html;\x0a\x09\x09renderImplementorsOn: html;\x0a\x09\x09renderSendersOn: html;\x0a\x09\x09renderReferencedClassesOn: html;\x0a\x09\x09renderMatchesOn: html",
messageSends: ["renderInputOn:", "renderImplementorsOn:", "renderSendersOn:", "renderReferencedClassesOn:", "renderMatchesOn:"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_renderImplementorsOn_",
smalltalk.method({
selector: "renderImplementorsOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@implementorsList"]=_st(_st(html)._ul())._class_("amber_column implementors");
_st(self)._updateImplementorsList();
return self}, self, "renderImplementorsOn:", [html], smalltalk.ReferencesBrowser)},
args: ["html"],
source: "renderImplementorsOn: html\x0a\x09implementorsList := html ul class: 'amber_column implementors'.\x0a\x09self updateImplementorsList",
messageSends: ["class:", "ul", "updateImplementorsList"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_renderInputOn_",
smalltalk.method({
selector: "renderInputOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._input();
_st($1)._class_("implementors");
$2=_st($1)._yourself();
self["@input"]=$2;
_st(_st(self["@input"])._asJQuery())._val_(self["@selector"]);
_st(self)._setInputEvents();
return self}, self, "renderInputOn:", [html], smalltalk.ReferencesBrowser)},
args: ["html"],
source: "renderInputOn: html\x0a\x09input := html input \x0a\x09\x09class: 'implementors';\x0a\x09\x09yourself.\x0a\x09input asJQuery val: selector.\x0a\x09self setInputEvents",
messageSends: ["class:", "input", "yourself", "val:", "asJQuery", "setInputEvents"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_renderMatchesOn_",
smalltalk.method({
selector: "renderMatchesOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@matchesList"]=_st(_st(html)._ul())._class_("amber_column matches");
_st(self)._updateMatchesList();
return self}, self, "renderMatchesOn:", [html], smalltalk.ReferencesBrowser)},
args: ["html"],
source: "renderMatchesOn: html\x0a\x09matchesList := html ul class: 'amber_column matches'.\x0a\x09self updateMatchesList",
messageSends: ["class:", "ul", "updateMatchesList"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_renderReferencedClassesOn_",
smalltalk.method({
selector: "renderReferencedClassesOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@referencedClassesList"]=_st(_st(html)._ul())._class_("amber_column referenced_classes");
_st(self)._updateReferencedClassesList();
return self}, self, "renderReferencedClassesOn:", [html], smalltalk.ReferencesBrowser)},
args: ["html"],
source: "renderReferencedClassesOn: html\x0a\x09referencedClassesList := html ul class: 'amber_column referenced_classes'.\x0a\x09self updateReferencedClassesList",
messageSends: ["class:", "ul", "updateReferencedClassesList"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_renderSendersOn_",
smalltalk.method({
selector: "renderSendersOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@sendersList"]=_st(_st(html)._ul())._class_("amber_column senders");
_st(self)._updateSendersList();
return self}, self, "renderSendersOn:", [html], smalltalk.ReferencesBrowser)},
args: ["html"],
source: "renderSendersOn: html\x0a\x09sendersList := html ul class: 'amber_column senders'.\x0a\x09self updateSendersList",
messageSends: ["class:", "ul", "updateSendersList"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_search_",
smalltalk.method({
selector: "search:",
category: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._searchReferencesFor_(aString);
_st(self)._updateImplementorsList();
_st(self)._updateSendersList();
_st(self)._updateReferencedClassesList();
$1=_st(self)._updateMatchesList();
return self}, self, "search:", [aString], smalltalk.ReferencesBrowser)},
args: ["aString"],
source: "search: aString\x0a\x09self \x0a\x09\x09searchReferencesFor: aString;\x0a\x09\x09updateImplementorsList;\x0a\x09\x09updateSendersList;\x0a\x09\x09updateReferencedClassesList;\x0a\x09\x09updateMatchesList",
messageSends: ["searchReferencesFor:", "updateImplementorsList", "updateSendersList", "updateReferencedClassesList", "updateMatchesList"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_searchMethodSource",
smalltalk.method({
selector: "searchMethodSource",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.regex=nil;
$ctx1.locals.regex=_st(self["@selector"])._allButFirst();
_st(_st(self)._classesAndMetaclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(_st(_st(each)._methodDictionary())._values())._do_((function(value){
return smalltalk.withContext(function($ctx3) { $1=_st(_st(value)._source())._match_($ctx1.locals.regex);
if(smalltalk.assert($1)){
return _st(_st(self)._matches())._add_(value);
};
})}));
})}));
return self}, self, "searchMethodSource", [], smalltalk.ReferencesBrowser)},
args: [],
source: "searchMethodSource\x0a\x09| regex |\x0a\x09regex := selector allButFirst.\x0a\x09self classesAndMetaclasses do: [:each |\x0a\x09\x09each methodDictionary values do: [:value |\x0a\x09\x09\x09(value source match: regex) ifTrue: [\x0a\x09\x09\x09\x09self matches add: value]]]",
messageSends: ["allButFirst", "do:", "ifTrue:", "add:", "matches", "match:", "source", "values", "methodDictionary", "classesAndMetaclasses"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_searchReferencedClasses",
smalltalk.method({
selector: "searchReferencedClasses",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(_st(self)._classesAndMetaclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(_st(_st(each)._methodDictionary())._values())._do_((function(value){
return smalltalk.withContext(function($ctx3) { $1=_st(_st(value)._referencedClasses())._includes_(self["@selector"]);
if(smalltalk.assert($1)){
return _st(_st(self)._referencedClasses())._add_(value);
};
})}));
})}));
return self}, self, "searchReferencedClasses", [], smalltalk.ReferencesBrowser)},
args: [],
source: "searchReferencedClasses\x0a\x09self classesAndMetaclasses do: [:each |\x0a\x09\x09each methodDictionary values do: [:value |\x0a\x09\x09\x09(value referencedClasses includes: selector) ifTrue: [\x0a\x09\x09\x09\x09self referencedClasses add: value]]]",
messageSends: ["do:", "ifTrue:", "add:", "referencedClasses", "includes:", "values", "methodDictionary", "classesAndMetaclasses"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_searchReferencesFor_",
smalltalk.method({
selector: "searchReferencesFor:",
category: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
self["@selector"]=aString;
self["@implementors"]=_st((smalltalk.Array || Array))._new();
self["@senders"]=_st((smalltalk.Array || Array))._new();
self["@referencedClasses"]=_st((smalltalk.Array || Array))._new();
self["@matches"]=_st((smalltalk.Array || Array))._new();
_st(self)._searchMethodSource();
$1=_st(self["@selector"])._match_("^[A-Z]");
if(smalltalk.assert($1)){
_st(self)._searchReferencedClasses();
} else {
_st(self)._searchSelectorReferences();
};
return self}, self, "searchReferencesFor:", [aString], smalltalk.ReferencesBrowser)},
args: ["aString"],
source: "searchReferencesFor: aString\x0a\x09selector := aString.\x0a\x09implementors := Array new.\x0a\x09senders := Array new.\x0a\x09referencedClasses := Array new.\x0a\x09matches := Array new.\x0a\x09self searchMethodSource.\x0a\x09(selector match: '^[A-Z]') \x0a\x09\x09ifFalse: [self searchSelectorReferences]\x0a\x09\x09ifTrue: [self searchReferencedClasses]",
messageSends: ["new", "searchMethodSource", "ifFalse:ifTrue:", "searchSelectorReferences", "searchReferencedClasses", "match:"],
referencedClasses: ["Array"]
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_searchSelectorReferences",
smalltalk.method({
selector: "searchSelectorReferences",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(_st(self)._classesAndMetaclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(_st(each)._methodDictionary())._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx3) { $1=_st(key).__eq(self["@selector"]);
if(smalltalk.assert($1)){
_st(_st(self)._implementors())._add_(value);
};
$2=_st(_st(value)._messageSends())._includes_(self["@selector"]);
if(smalltalk.assert($2)){
return _st(_st(self)._senders())._add_(value);
};
})}));
})}));
return self}, self, "searchSelectorReferences", [], smalltalk.ReferencesBrowser)},
args: [],
source: "searchSelectorReferences\x0a\x09self classesAndMetaclasses do: [:each | \x0a\x09\x09each methodDictionary keysAndValuesDo: [:key :value | \x0a\x09\x09\x09key = selector ifTrue: [self implementors add: value].\x0a\x09\x09\x09(value messageSends includes: selector) ifTrue: [\x0a\x09\x09\x09\x09self senders add: value]]]",
messageSends: ["do:", "keysAndValuesDo:", "ifTrue:", "add:", "implementors", "=", "senders", "includes:", "messageSends", "methodDictionary", "classesAndMetaclasses"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@selector"];
}, self, "selector", [], smalltalk.ReferencesBrowser)},
args: [],
source: "selector\x0a\x09^selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_senders",
smalltalk.method({
selector: "senders",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@senders"]) == nil || $receiver == undefined){
self["@senders"]=_st((smalltalk.Array || Array))._new();
$1=self["@senders"];
} else {
$1=self["@senders"];
};
return $1;
}, self, "senders", [], smalltalk.ReferencesBrowser)},
args: [],
source: "senders\x0a\x09^senders ifNil: [senders := Array new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_setInputEvents",
smalltalk.method({
selector: "setInputEvents",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self["@input"])._onKeyUp_((function(){
return smalltalk.withContext(function($ctx2) { self["@timer"]=_st((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._search_(_st(_st(self["@input"])._asJQuery())._val());
})}))._valueWithTimeout_((100));
return self["@timer"];
})}));
$1=_st(self["@input"])._onKeyDown_((function(){
return smalltalk.withContext(function($ctx2) { if(($receiver = self["@timer"]) == nil || $receiver == undefined){
return self["@timer"];
} else {
return _st(self["@timer"])._clearTimeout();
};
})}));
return self}, self, "setInputEvents", [], smalltalk.ReferencesBrowser)},
args: [],
source: "setInputEvents\x0a\x09input\x0a\x09\x09onKeyUp: [timer := [self search: input asJQuery val] valueWithTimeout: 100];\x0a\x09\x09onKeyDown: [timer ifNotNil: [timer clearTimeout]]",
messageSends: ["onKeyUp:", "valueWithTimeout:", "search:", "val", "asJQuery", "onKeyDown:", "ifNotNil:", "clearTimeout"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_updateImplementorsList",
smalltalk.method({
selector: "updateImplementorsList",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
_st(self["@implementorsList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) { $1=_st(html)._li();
_st($1)._class_("column_label");
_st($1)._with_(_st(_st("Implementors (").__comma(_st(_st(_st(self)._implementors())._size())._asString())).__comma(")"));
$2=_st($1)._style_("font-weight: bold");
$2;
return _st(_st(self)._implementors())._do_((function(each){
return smalltalk.withContext(function($ctx3) { $ctx3.li=nil;
$ctx3.locals.li=_st(html)._li();
$ctx3.locals.li;
_st($ctx3.locals.li)._with_(_st(_st(_st(_st(each)._methodClass())._asString()).__comma(" >> ")).__comma(_st(self)._selector()));
$3=_st($ctx3.locals.li)._onClick_((function(){
return smalltalk.withContext(function($ctx4) { return _st(self)._openBrowserOn_(each);
})}));
return $3;
})}));
})}));
return self}, self, "updateImplementorsList", [], smalltalk.ReferencesBrowser)},
args: [],
source: "updateImplementorsList\x0a    implementorsList contents: [:html |\x0a\x09html li\x0a\x09\x09class: 'column_label'; \x0a\x09\x09with: 'Implementors (', self implementors size asString, ')';\x0a\x09\x09style: 'font-weight: bold'.\x0a\x09self implementors do: [:each || li |\x0a\x09    li := html li.\x0a\x09    li\x0a\x09\x09with: (each methodClass asString, ' >> ', self selector);\x0a\x09\x09onClick: [self openBrowserOn: each]]]",
messageSends: ["contents:", "class:", "li", "with:", ",", "asString", "size", "implementors", "style:", "do:", "selector", "methodClass", "onClick:", "openBrowserOn:"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_updateMatchesList",
smalltalk.method({
selector: "updateMatchesList",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
_st(self["@matchesList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) { $1=_st(html)._li();
_st($1)._class_("column_label");
_st($1)._with_(_st(_st("Regex matches (").__comma(_st(_st(_st(self)._matches())._size())._asString())).__comma(")"));
$2=_st($1)._style_("font-weight: bold");
$2;
return _st(_st(self)._matches())._do_((function(each){
return smalltalk.withContext(function($ctx3) { $ctx3.li=nil;
$ctx3.locals.li=_st(html)._li();
$ctx3.locals.li;
_st($ctx3.locals.li)._with_(_st(_st(_st(_st(each)._methodClass())._asString()).__comma(" >> ")).__comma(_st(each)._selector()));
$3=_st($ctx3.locals.li)._onClick_((function(){
return smalltalk.withContext(function($ctx4) { return _st(self)._openBrowserOn_(each);
})}));
return $3;
})}));
})}));
return self}, self, "updateMatchesList", [], smalltalk.ReferencesBrowser)},
args: [],
source: "updateMatchesList\x0a    matchesList contents: [:html |\x0a\x09html li\x0a\x09\x09class: 'column_label'; \x0a\x09\x09with: 'Regex matches (', self matches size asString, ')';\x0a\x09\x09style: 'font-weight: bold'.\x0a\x09self matches do: [:each || li |\x0a\x09    li := html li.\x0a\x09    li\x0a\x09\x09with: (each methodClass asString, ' >> ', each selector);\x0a\x09\x09onClick: [self openBrowserOn: each]]]",
messageSends: ["contents:", "class:", "li", "with:", ",", "asString", "size", "matches", "style:", "do:", "selector", "methodClass", "onClick:", "openBrowserOn:"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_updateReferencedClassesList",
smalltalk.method({
selector: "updateReferencedClassesList",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
_st(self["@referencedClassesList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) { $1=_st(html)._li();
_st($1)._class_("column_label");
_st($1)._with_(_st(_st("Class references (").__comma(_st(_st(_st(self)._referencedClasses())._size())._asString())).__comma(")"));
$2=_st($1)._style_("font-weight: bold");
$2;
return _st(_st(self)._referencedClasses())._do_((function(each){
return smalltalk.withContext(function($ctx3) { $3=_st(html)._li();
_st($3)._with_(_st(_st(_st(_st(each)._methodClass())._asString()).__comma(" >> ")).__comma(_st(each)._selector()));
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx4) { return _st(self)._openBrowserOn_(each);
})}));
return $4;
})}));
})}));
return self}, self, "updateReferencedClassesList", [], smalltalk.ReferencesBrowser)},
args: [],
source: "updateReferencedClassesList\x0a\x09referencedClassesList contents: [:html |\x0a\x09html li\x0a\x09\x09class: 'column_label'; \x0a\x09\x09with: 'Class references (', self referencedClasses size asString, ')';\x0a\x09\x09style: 'font-weight: bold'.\x0a\x09self referencedClasses do: [:each |\x0a\x09\x09html li\x0a\x09\x09\x09with: (each methodClass asString, ' >> ', each selector);\x0a\x09\x09\x09onClick: [self openBrowserOn: each]]]",
messageSends: ["contents:", "class:", "li", "with:", ",", "asString", "size", "referencedClasses", "style:", "do:", "selector", "methodClass", "onClick:", "openBrowserOn:"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_updateSendersList",
smalltalk.method({
selector: "updateSendersList",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
_st(self["@sendersList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) { $1=_st(html)._li();
_st($1)._class_("column_label");
_st($1)._with_(_st(_st("Senders (").__comma(_st(_st(_st(self)._senders())._size())._asString())).__comma(")"));
$2=_st($1)._style_("font-weight: bold");
$2;
return _st(_st(self)._senders())._do_((function(each){
return smalltalk.withContext(function($ctx3) { $3=_st(html)._li();
_st($3)._with_(_st(_st(_st(_st(each)._methodClass())._asString()).__comma(" >> ")).__comma(_st(each)._selector()));
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx4) { return _st(self)._openBrowserOn_(each);
})}));
return $4;
})}));
})}));
return self}, self, "updateSendersList", [], smalltalk.ReferencesBrowser)},
args: [],
source: "updateSendersList\x0a\x09sendersList contents: [:html |\x0a\x09html li\x0a\x09\x09class: 'column_label'; \x0a\x09\x09with: 'Senders (', self senders size asString, ')';\x0a\x09\x09style: 'font-weight: bold'.\x0a\x09self senders do: [:each |\x0a\x09\x09html li\x0a\x09\x09\x09with: (each methodClass asString, ' >> ', each selector);\x0a\x09\x09\x09onClick: [self openBrowserOn: each]]]",
messageSends: ["contents:", "class:", "li", "with:", ",", "asString", "size", "senders", "style:", "do:", "selector", "methodClass", "onClick:", "openBrowserOn:"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser);


smalltalk.addMethod(
"_search_",
smalltalk.method({
selector: "search:",
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._searchReferencesFor_(aString);
$3=_st($2)._open();
$1=$3;
return $1;
}, self, "search:", [aString], smalltalk.ReferencesBrowser.klass)},
args: ["aString"],
source: "search: aString\x0a\x09^self new\x0a\x09\x09searchReferencesFor: aString;\x0a\x09\x09open",
messageSends: ["searchReferencesFor:", "new", "open"],
referencedClasses: []
}),
smalltalk.ReferencesBrowser.klass);


smalltalk.addClass('TestRunner', smalltalk.TabWidget, ['selectedCategories', 'packagesList', 'selectedClasses', 'classesList', 'selectedMethods', 'progressBar', 'methodsList', 'result', 'statusDiv'], 'IDE');
smalltalk.addMethod(
"_allClasses",
smalltalk.method({
selector: "allClasses",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st((smalltalk.TestCase || TestCase))._allSubclasses())._select_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(_st(each)._isAbstract())._not();
})}));
return $1;
}, self, "allClasses", [], smalltalk.TestRunner)},
args: [],
source: "allClasses\x0a\x09^TestCase allSubclasses select: [ :each | each isAbstract not ]",
messageSends: ["select:", "not", "isAbstract", "allSubclasses"],
referencedClasses: ["TestCase"]
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_classes",
smalltalk.method({
selector: "classes",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._allClasses())._select_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._selectedCategories())._includes_(_st(each)._category());
})})))._sort_((function(a,b){
return smalltalk.withContext(function($ctx2) { return _st(_st(a)._name()).__gt(_st(b)._name());
})}));
return $1;
}, self, "classes", [], smalltalk.TestRunner)},
args: [],
source: "classes\x0a    ^(self allClasses \x0a\x09select: [:each | self selectedCategories includes: each category])\x0a\x09sort: [:a :b | a name > b name]",
messageSends: ["sort:", ">", "name", "select:", "includes:", "category", "selectedCategories", "allClasses"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.TabWidget.fn.prototype._initialize.apply(_st(self), []);
self["@result"]=_st((smalltalk.TestResult || TestResult))._new();
return self}, self, "initialize", [], smalltalk.TestRunner)},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09result := TestResult new",
messageSends: ["initialize", "new"],
referencedClasses: ["TestResult"]
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_isSelectedCategory_",
smalltalk.method({
selector: "isSelectedCategory:",
category: 'testing',
fn: function (aCategory){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._selectedCategories())._includes_(aCategory);
return $1;
}, self, "isSelectedCategory:", [aCategory], smalltalk.TestRunner)},
args: ["aCategory"],
source: "isSelectedCategory: aCategory\x0a\x09^(self selectedCategories includes: aCategory)",
messageSends: ["includes:", "selectedCategories"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_isSelectedClass_",
smalltalk.method({
selector: "isSelectedClass:",
category: 'testing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._selectedClasses())._includes_(aClass);
return $1;
}, self, "isSelectedClass:", [aClass], smalltalk.TestRunner)},
args: ["aClass"],
source: "isSelectedClass: aClass\x0a\x09^(self selectedClasses includes: aClass)",
messageSends: ["includes:", "selectedClasses"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "SUnit";
}, self, "label", [], smalltalk.TestRunner)},
args: [],
source: "label\x0a    ^'SUnit'",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$ctx1.packages=nil;
$ctx1.locals.packages=_st((smalltalk.Array || Array))._new();
_st(_st(self)._allClasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) { $1=_st($ctx1.locals.packages)._includes_(_st(each)._category());
if(! smalltalk.assert($1)){
return _st($ctx1.locals.packages)._add_(_st(each)._category());
};
})}));
$2=_st($ctx1.locals.packages)._sort();
return $2;
}, self, "packages", [], smalltalk.TestRunner)},
args: [],
source: "packages\x0a    | packages |\x0a    packages := Array new.\x0a    self allClasses do: [:each |\x0a\x09(packages includes: each category) ifFalse: [\x0a\x09    packages add: each category]].\x0a    ^packages sort",
messageSends: ["new", "do:", "ifFalse:", "add:", "category", "includes:", "allClasses", "sort"],
referencedClasses: ["Array"]
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_performFailure_",
smalltalk.method({
selector: "performFailure:",
category: 'actions',
fn: function (aTestCase){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aTestCase)._runCase();
return self}, self, "performFailure:", [aTestCase], smalltalk.TestRunner)},
args: ["aTestCase"],
source: "performFailure: aTestCase\x0a\x09aTestCase runCase",
messageSends: ["runCase"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_printErrors",
smalltalk.method({
selector: "printErrors",
category: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(_st(self)._result())._errors())._size())._asString()).__comma(" errors, ");
return $1;
}, self, "printErrors", [], smalltalk.TestRunner)},
args: [],
source: "printErrors\x0a\x09^self result errors size asString , ' errors, '",
messageSends: [",", "asString", "size", "errors", "result"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_printFailures",
smalltalk.method({
selector: "printFailures",
category: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(_st(self)._result())._failures())._size())._asString()).__comma(" failures");
return $1;
}, self, "printFailures", [], smalltalk.TestRunner)},
args: [],
source: "printFailures\x0a\x09^self result failures size asString, ' failures'",
messageSends: [",", "asString", "size", "failures", "result"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_printPasses",
smalltalk.method({
selector: "printPasses",
category: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(_st(_st(self)._result())._runs()).__minus(_st(_st(_st(self)._result())._errors())._size())).__minus(_st(_st(_st(self)._result())._failures())._size()))._asString()).__comma(" passes, ");
return $1;
}, self, "printPasses", [], smalltalk.TestRunner)},
args: [],
source: "printPasses\x0a\x09^(self result runs - self result errors size - self result failures size) asString , ' passes, '",
messageSends: [",", "asString", "-", "size", "failures", "result", "errors", "runs"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_printTotal",
smalltalk.method({
selector: "printTotal",
category: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(self)._result())._total())._asString()).__comma(" runs, ");
return $1;
}, self, "printTotal", [], smalltalk.TestRunner)},
args: [],
source: "printTotal\x0a\x09^self result total asString, ' runs, '",
messageSends: [",", "asString", "total", "result"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_progressBar",
smalltalk.method({
selector: "progressBar",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@progressBar"]) == nil || $receiver == undefined){
self["@progressBar"]=_st((smalltalk.ProgressBar || ProgressBar))._new();
$1=self["@progressBar"];
} else {
$1=self["@progressBar"];
};
return $1;
}, self, "progressBar", [], smalltalk.TestRunner)},
args: [],
source: "progressBar\x0a\x09^progressBar ifNil: [progressBar := ProgressBar new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["ProgressBar"]
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._renderCategoriesOn_(html);
_st(self)._renderClassesOn_(html);
$1=_st(self)._renderResultsOn_(html);
return self}, self, "renderBoxOn:", [html], smalltalk.TestRunner)},
args: ["html"],
source: "renderBoxOn: html\x0a    self \x0a\x09renderCategoriesOn: html;\x0a\x09renderClassesOn: html;\x0a\x09renderResultsOn: html",
messageSends: ["renderCategoriesOn:", "renderClassesOn:", "renderResultsOn:"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._button();
_st($1)._with_("Run selected");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._run_(_st(self)._testCases());
})}));
return self}, self, "renderButtonsOn:", [html], smalltalk.TestRunner)},
args: ["html"],
source: "renderButtonsOn: html\x0a    html button\x0a\x09with: 'Run selected';\x0a\x09onClick: [self run: self testCases]",
messageSends: ["with:", "button", "onClick:", "run:", "testCases"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_renderCategoriesOn_",
smalltalk.method({
selector: "renderCategoriesOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@packagesList"]=_st(_st(html)._ul())._class_("amber_column sunit packages");
_st(self)._updateCategoriesList();
return self}, self, "renderCategoriesOn:", [html], smalltalk.TestRunner)},
args: ["html"],
source: "renderCategoriesOn: html\x0a\x09packagesList := html ul class: 'amber_column sunit packages'.\x0a\x09self updateCategoriesList",
messageSends: ["class:", "ul", "updateCategoriesList"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_renderClassesOn_",
smalltalk.method({
selector: "renderClassesOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@classesList"]=_st(_st(html)._ul())._class_("amber_column sunit classes");
_st(self)._updateClassesList();
return self}, self, "renderClassesOn:", [html], smalltalk.TestRunner)},
args: ["html"],
source: "renderClassesOn: html\x0a\x09classesList := html ul class: 'amber_column sunit classes'.\x0a\x09self updateClassesList",
messageSends: ["class:", "ul", "updateClassesList"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_renderErrorsOn_",
smalltalk.method({
selector: "renderErrorsOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(_st(_st(self)._result())._errors())._do_((function(each){
return smalltalk.withContext(function($ctx2) { $1=_st(html)._li();
_st($1)._class_("errors");
_st($1)._with_(_st(_st(_st(_st(each)._class())._name()).__comma(" >> ")).__comma(_st(each)._selector()));
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._performFailure_(each);
})}));
return $2;
})}));
return self}, self, "renderErrorsOn:", [html], smalltalk.TestRunner)},
args: ["html"],
source: "renderErrorsOn: html\x0a\x09self result errors do: [:each |\x0a\x09\x09html li \x0a\x09\x09\x09class: 'errors';\x0a\x09\x09\x09with: each class name, ' >> ', each selector;\x0a                        onClick: [self performFailure: each]]",
messageSends: ["do:", "class:", "li", "with:", ",", "selector", "name", "class", "onClick:", "performFailure:", "errors", "result"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_renderFailuresOn_",
smalltalk.method({
selector: "renderFailuresOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(_st(_st(self)._result())._failures())._do_((function(each){
return smalltalk.withContext(function($ctx2) { $1=_st(html)._li();
_st($1)._class_("failures");
_st($1)._with_(_st(_st(_st(_st(each)._class())._name()).__comma(" >> ")).__comma(_st(each)._selector()));
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._performFailure_(each);
})}));
return $2;
})}));
return self}, self, "renderFailuresOn:", [html], smalltalk.TestRunner)},
args: ["html"],
source: "renderFailuresOn: html\x0a\x09self result failures do: [:each |\x0a\x09\x09html li \x0a\x09\x09\x09class: 'failures';\x0a\x09\x09\x09with: each class name, ' >> ', each selector;\x0a                        onClick: [self performFailure: each]]",
messageSends: ["do:", "class:", "li", "with:", ",", "selector", "name", "class", "onClick:", "performFailure:", "failures", "result"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_renderResultsOn_",
smalltalk.method({
selector: "renderResultsOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@statusDiv"]=_st(html)._div();
_st(html)._with_(_st(self)._progressBar());
self["@methodsList"]=_st(_st(html)._ul())._class_("amber_column sunit results");
_st(self)._updateMethodsList();
_st(self)._updateStatusDiv();
return self}, self, "renderResultsOn:", [html], smalltalk.TestRunner)},
args: ["html"],
source: "renderResultsOn: html\x0a\x09statusDiv := html div.\x0a\x09html with: self progressBar.\x0a\x09methodsList := html ul class: 'amber_column sunit results'.\x0a\x09self updateMethodsList.\x0a\x09self updateStatusDiv",
messageSends: ["div", "with:", "progressBar", "class:", "ul", "updateMethodsList", "updateStatusDiv"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_result",
smalltalk.method({
selector: "result",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@result"];
}, self, "result", [], smalltalk.TestRunner)},
args: [],
source: "result\x0a\x09^result",
messageSends: [],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_run_",
smalltalk.method({
selector: "run:",
category: 'actions',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.worker=nil;
$ctx1.locals.worker=_st((smalltalk.TestSuiteRunner || TestSuiteRunner))._on_(aCollection);
self["@result"]=_st($ctx1.locals.worker)._result();
_st(_st($ctx1.locals.worker)._announcer())._on_do_((smalltalk.ResultAnnouncement || ResultAnnouncement),(function(ann){
return smalltalk.withContext(function($ctx2) { $1=_st(_st(ann)._result()).__eq_eq(self["@result"]);
if(smalltalk.assert($1)){
_st(_st(self)._progressBar())._updatePercent_(_st(_st(_st(self["@result"])._runs()).__slash(_st(self["@result"])._total())).__star((100)));
_st(self)._updateStatusDiv();
return _st(self)._updateMethodsList();
};
})}));
_st($ctx1.locals.worker)._run();
return self}, self, "run:", [aCollection], smalltalk.TestRunner)},
args: ["aCollection"],
source: "run: aCollection\x0a| worker |\x0a\x09worker := TestSuiteRunner on: aCollection.\x0a\x09result := worker result.\x0a    worker announcer on: ResultAnnouncement do: [:ann |\x0a    \x09ann result == result ifTrue: [\x0a\x09\x09\x09self progressBar updatePercent: result runs / result total * 100.\x0a\x09\x09\x09self updateStatusDiv.\x0a\x09\x09\x09self updateMethodsList\x0a  \x09\x09]\x0a\x09].\x0a\x09worker run",
messageSends: ["on:", "result", "on:do:", "ifTrue:", "updatePercent:", "*", "/", "total", "runs", "progressBar", "updateStatusDiv", "updateMethodsList", "==", "announcer", "run"],
referencedClasses: ["TestSuiteRunner", "ResultAnnouncement"]
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_selectAllCategories",
smalltalk.method({
selector: "selectAllCategories",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(_st(self)._packages())._do_((function(each){
return smalltalk.withContext(function($ctx2) { $1=_st(self["@selectedCategories"])._includes_(each);
if(! smalltalk.assert($1)){
return _st(_st(self)._selectedCategories())._add_(each);
};
})}));
_st(self)._updateCategoriesList();
$2=_st(self)._updateClassesList();
return self}, self, "selectAllCategories", [], smalltalk.TestRunner)},
args: [],
source: "selectAllCategories\x0a\x09self packages do: [:each | \x0a\x09\x09(selectedCategories includes: each) ifFalse: [\x0a\x09\x09\x09self selectedCategories add: each]].\x0a\x09self \x0a\x09    updateCategoriesList;\x0a\x09    updateClassesList",
messageSends: ["do:", "ifFalse:", "add:", "selectedCategories", "includes:", "packages", "updateCategoriesList", "updateClassesList"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_selectAllClasses",
smalltalk.method({
selector: "selectAllClasses",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(_st(self)._classes())._do_((function(each){
return smalltalk.withContext(function($ctx2) { $1=_st(self["@selectedClasses"])._includes_(each);
if(! smalltalk.assert($1)){
return _st(_st(self)._selectedClasses())._add_(each);
};
})}));
_st(self)._updateCategoriesList();
$2=_st(self)._updateClassesList();
return self}, self, "selectAllClasses", [], smalltalk.TestRunner)},
args: [],
source: "selectAllClasses\x0a\x09self classes do: [:each | \x0a\x09\x09(selectedClasses includes: each) ifFalse: [\x0a\x09\x09\x09self selectedClasses add: each]].\x0a\x09self \x0a\x09    updateCategoriesList;\x0a\x09    updateClassesList",
messageSends: ["do:", "ifFalse:", "add:", "selectedClasses", "includes:", "classes", "updateCategoriesList", "updateClassesList"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_selectedCategories",
smalltalk.method({
selector: "selectedCategories",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@selectedCategories"]) == nil || $receiver == undefined){
self["@selectedCategories"]=_st((smalltalk.Array || Array))._new();
$1=self["@selectedCategories"];
} else {
$1=self["@selectedCategories"];
};
return $1;
}, self, "selectedCategories", [], smalltalk.TestRunner)},
args: [],
source: "selectedCategories\x0a\x09^selectedCategories ifNil: [selectedCategories := Array new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_selectedClasses",
smalltalk.method({
selector: "selectedClasses",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@selectedClasses"]) == nil || $receiver == undefined){
self["@selectedClasses"]=_st((smalltalk.Array || Array))._new();
$1=self["@selectedClasses"];
} else {
$1=self["@selectedClasses"];
};
return $1;
}, self, "selectedClasses", [], smalltalk.TestRunner)},
args: [],
source: "selectedClasses\x0a\x09^selectedClasses  ifNil: [selectedClasses := Array new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_statusInfo",
smalltalk.method({
selector: "statusInfo",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(self)._printTotal()).__comma(_st(self)._printPasses())).__comma(_st(self)._printErrors())).__comma(_st(self)._printFailures());
return $1;
}, self, "statusInfo", [], smalltalk.TestRunner)},
args: [],
source: "statusInfo\x0a\x09^self printTotal, self printPasses, self printErrors, self printFailures",
messageSends: [",", "printFailures", "printErrors", "printPasses", "printTotal"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_testCases",
smalltalk.method({
selector: "testCases",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { $ctx1.testCases=nil;
$ctx1.locals.testCases=[];
_st(_st(_st(self)._selectedClasses())._select_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._selectedCategories())._includes_(_st(each)._category());
})})))._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.testCases)._addAll_(_st(each)._buildSuite());
})}));
return $ctx1.locals.testCases;
}, self, "testCases", [], smalltalk.TestRunner)},
args: [],
source: "testCases\x0a\x09| testCases |\x0a\x09testCases := #().\x0a\x09(self selectedClasses\x0a\x09\x09select: [:each | self selectedCategories includes: each category])\x0a\x09\x09do: [:each | testCases addAll: each buildSuite].\x0a\x09^testCases",
messageSends: ["do:", "addAll:", "buildSuite", "select:", "includes:", "category", "selectedCategories", "selectedClasses"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_toggleCategory_",
smalltalk.method({
selector: "toggleCategory:",
category: 'actions',
fn: function (aCategory){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(self)._isSelectedCategory_(aCategory);
if(smalltalk.assert($1)){
_st(self["@selectedCategories"])._remove_(aCategory);
} else {
_st(self["@selectedCategories"])._add_(aCategory);
};
_st(self)._updateCategoriesList();
$2=_st(self)._updateClassesList();
return self}, self, "toggleCategory:", [aCategory], smalltalk.TestRunner)},
args: ["aCategory"],
source: "toggleCategory: aCategory\x0a\x09(self isSelectedCategory: aCategory) \x0a\x09\x09ifFalse: [selectedCategories add: aCategory]\x0a\x09\x09ifTrue: [selectedCategories remove: aCategory].\x0a\x09self \x0a\x09    updateCategoriesList;\x0a\x09    updateClassesList",
messageSends: ["ifFalse:ifTrue:", "add:", "remove:", "isSelectedCategory:", "updateCategoriesList", "updateClassesList"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_toggleClass_",
smalltalk.method({
selector: "toggleClass:",
category: 'actions',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._isSelectedClass_(aClass);
if(smalltalk.assert($1)){
_st(self["@selectedClasses"])._remove_(aClass);
} else {
_st(self["@selectedClasses"])._add_(aClass);
};
_st(self)._updateClassesList();
return self}, self, "toggleClass:", [aClass], smalltalk.TestRunner)},
args: ["aClass"],
source: "toggleClass: aClass\x0a\x09(self isSelectedClass: aClass) \x0a\x09\x09ifFalse: [selectedClasses add: aClass]\x0a\x09\x09ifTrue: [selectedClasses remove: aClass].\x0a\x09self \x0a\x09    updateClassesList",
messageSends: ["ifFalse:ifTrue:", "add:", "remove:", "isSelectedClass:", "updateClassesList"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_updateCategoriesList",
smalltalk.method({
selector: "updateCategoriesList",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
_st(self["@packagesList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) { $1=_st(html)._li();
_st($1)._class_("all");
_st($1)._with_("All");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._selectAllCategories();
})}));
$2;
return _st(_st(self)._packages())._do_((function(each){
return smalltalk.withContext(function($ctx3) { $ctx3.li=nil;
$ctx3.locals.li=_st(html)._li();
$ctx3.locals.li;
$3=_st(_st(self)._selectedCategories())._includes_(each);
if(smalltalk.assert($3)){
_st($ctx3.locals.li)._class_("selected");
};
_st($ctx3.locals.li)._with_(each);
$4=_st($ctx3.locals.li)._onClick_((function(){
return smalltalk.withContext(function($ctx4) { return _st(self)._toggleCategory_(each);
})}));
return $4;
})}));
})}));
return self}, self, "updateCategoriesList", [], smalltalk.TestRunner)},
args: [],
source: "updateCategoriesList\x0a    packagesList contents: [:html |\x0a\x09    html li \x0a\x09\x09class: 'all';\x0a\x09\x09with: 'All';\x0a\x09\x09onClick: [self selectAllCategories].\x0a\x09self packages do: [:each || li |\x0a\x09    li := html li.\x0a\x09    (self selectedCategories includes: each) ifTrue: [\x0a\x09\x09li class: 'selected'].\x0a\x09    li\x0a\x09\x09with: each;\x0a\x09\x09onClick: [self toggleCategory: each]]]",
messageSends: ["contents:", "class:", "li", "with:", "onClick:", "selectAllCategories", "do:", "ifTrue:", "includes:", "selectedCategories", "toggleCategory:", "packages"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_updateClassesList",
smalltalk.method({
selector: "updateClassesList",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5;
_st(self["@classesList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) { $1=_st(_st(self)._selectedCategories())._isEmpty();
if(! smalltalk.assert($1)){
$2=_st(html)._li();
_st($2)._class_("all");
_st($2)._with_("All");
$3=_st($2)._onClick_((function(){
return smalltalk.withContext(function($ctx3) { return _st(self)._selectAllClasses();
})}));
$3;
};
return _st(_st(self)._classes())._do_((function(each){
return smalltalk.withContext(function($ctx3) { $ctx3.li=nil;
$ctx3.locals.li=_st(html)._li();
$ctx3.locals.li;
$4=_st(_st(self)._selectedClasses())._includes_(each);
if(smalltalk.assert($4)){
_st($ctx3.locals.li)._class_("selected");
};
_st($ctx3.locals.li)._with_(_st(each)._name());
$5=_st($ctx3.locals.li)._onClick_((function(){
return smalltalk.withContext(function($ctx4) { return _st(self)._toggleClass_(each);
})}));
return $5;
})}));
})}));
return self}, self, "updateClassesList", [], smalltalk.TestRunner)},
args: [],
source: "updateClassesList\x0a    classesList contents: [:html |\x0a\x09(self selectedCategories isEmpty) ifFalse: [\x0a\x09\x09html li\x0a\x09\x09\x09class: 'all';\x0a\x09\x09\x09with: 'All';\x0a\x09\x09\x09onClick: [self selectAllClasses]].\x0a\x09self classes do: [:each || li |\x0a\x09\x09li := html li.\x0a\x09\x09(self selectedClasses includes: each) ifTrue: [\x0a\x09\x09\x09li class: 'selected'].\x0a\x09\x09li\x0a\x09\x09\x09with: each name;\x0a\x09\x09\x09onClick: [self toggleClass: each]]]",
messageSends: ["contents:", "ifFalse:", "class:", "li", "with:", "onClick:", "selectAllClasses", "isEmpty", "selectedCategories", "do:", "ifTrue:", "includes:", "selectedClasses", "name", "toggleClass:", "classes"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_updateMethodsList",
smalltalk.method({
selector: "updateMethodsList",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@methodsList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) { _st(self)._renderErrorsOn_(html);
return _st(self)._renderFailuresOn_(html);
})}));
return self}, self, "updateMethodsList", [], smalltalk.TestRunner)},
args: [],
source: "updateMethodsList\x0a\x09methodsList contents: [:html |\x0a\x09\x09self renderErrorsOn: html.\x0a                self renderFailuresOn: html]",
messageSends: ["contents:", "renderErrorsOn:", "renderFailuresOn:"],
referencedClasses: []
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_updateStatusDiv",
smalltalk.method({
selector: "updateStatusDiv",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@statusDiv"])._class_(_st("sunit status ").__comma(_st(self["@result"])._status()));
_st(self["@statusDiv"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) { return _st(_st(html)._span())._with_(_st(self)._statusInfo());
})}));
return self}, self, "updateStatusDiv", [], smalltalk.TestRunner)},
args: [],
source: "updateStatusDiv\x0a\x09statusDiv class: 'sunit status ', result status.\x0a\x09statusDiv contents: [:html |\x0a\x09\x09html span with: self statusInfo]",
messageSends: ["class:", ",", "status", "contents:", "with:", "statusInfo", "span"],
referencedClasses: []
}),
smalltalk.TestRunner);



smalltalk.addClass('Workspace', smalltalk.TabWidget, ['sourceArea'], 'IDE');
smalltalk.addMethod(
"_clearWorkspace",
smalltalk.method({
selector: "clearWorkspace",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@sourceArea"])._clear();
return self}, self, "clearWorkspace", [], smalltalk.Workspace)},
args: [],
source: "clearWorkspace\x0a    sourceArea clear",
messageSends: ["clear"],
referencedClasses: []
}),
smalltalk.Workspace);

smalltalk.addMethod(
"_doIt",
smalltalk.method({
selector: "doIt",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@sourceArea"])._doIt();
return self}, self, "doIt", [], smalltalk.Workspace)},
args: [],
source: "doIt\x0a   sourceArea doIt",
messageSends: ["doIt"],
referencedClasses: []
}),
smalltalk.Workspace);

smalltalk.addMethod(
"_fileIn",
smalltalk.method({
selector: "fileIn",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@sourceArea"])._fileIn();
return self}, self, "fileIn", [], smalltalk.Workspace)},
args: [],
source: "fileIn\x0a    sourceArea fileIn",
messageSends: ["fileIn"],
referencedClasses: []
}),
smalltalk.Workspace);

smalltalk.addMethod(
"_inspectIt",
smalltalk.method({
selector: "inspectIt",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@sourceArea"])._inspectIt();
return self}, self, "inspectIt", [], smalltalk.Workspace)},
args: [],
source: "inspectIt\x0a    sourceArea inspectIt",
messageSends: ["inspectIt"],
referencedClasses: []
}),
smalltalk.Workspace);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Workspace";
}, self, "label", [], smalltalk.Workspace)},
args: [],
source: "label\x0a    ^'Workspace'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Workspace);

smalltalk.addMethod(
"_printIt",
smalltalk.method({
selector: "printIt",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@sourceArea"])._printIt();
return self}, self, "printIt", [], smalltalk.Workspace)},
args: [],
source: "printIt\x0a\x09sourceArea printIt",
messageSends: ["printIt"],
referencedClasses: []
}),
smalltalk.Workspace);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@sourceArea"]=_st((smalltalk.SourceArea || SourceArea))._new();
_st(self["@sourceArea"])._renderOn_(html);
return self}, self, "renderBoxOn:", [html], smalltalk.Workspace)},
args: ["html"],
source: "renderBoxOn: html\x0a    sourceArea := SourceArea new.\x0a    sourceArea renderOn: html",
messageSends: ["new", "renderOn:"],
referencedClasses: ["SourceArea"]
}),
smalltalk.Workspace);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10;
$1=_st(html)._button();
_st($1)._with_("DoIt");
_st($1)._title_("ctrl+d");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._doIt();
})}));
$3=_st(html)._button();
_st($3)._with_("PrintIt");
_st($3)._title_("ctrl+p");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._printIt();
})}));
$5=_st(html)._button();
_st($5)._with_("InspectIt");
_st($5)._title_("ctrl+i");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._inspectIt();
})}));
$7=_st(html)._button();
_st($7)._with_("FileIn");
_st($7)._title_("ctrl+f");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._fileIn();
})}));
$9=_st(html)._button();
_st($9)._with_("Clear workspace");
$10=_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._clearWorkspace();
})}));
return self}, self, "renderButtonsOn:", [html], smalltalk.Workspace)},
args: ["html"],
source: "renderButtonsOn: html\x0a    html button\x0a\x09with: 'DoIt';\x0a\x09title: 'ctrl+d';\x0a\x09onClick: [self doIt].\x0a    html button\x0a\x09with: 'PrintIt';\x0a\x09title: 'ctrl+p';\x0a\x09onClick: [self printIt].\x0a    html button\x0a\x09with: 'InspectIt';\x0a\x09title: 'ctrl+i';\x0a\x09onClick: [self inspectIt].\x0a    html button\x0a\x09with: 'FileIn';\x0a\x09title: 'ctrl+f';\x0a\x09onClick: [self fileIn].\x0a    html button\x0a\x09with: 'Clear workspace';\x0a\x09onClick: [self clearWorkspace]",
messageSends: ["with:", "button", "title:", "onClick:", "doIt", "printIt", "inspectIt", "fileIn", "clearWorkspace"],
referencedClasses: []
}),
smalltalk.Workspace);

smalltalk.addMethod(
"_show",
smalltalk.method({
selector: "show",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.TabWidget.fn.prototype._show.apply(_st(self), []);
_st(self["@sourceArea"])._focus();
return self}, self, "show", [], smalltalk.Workspace)},
args: [],
source: "show\x0a\x09super show.\x0a\x09sourceArea focus.",
messageSends: ["show", "focus"],
referencedClasses: []
}),
smalltalk.Workspace);



smalltalk.addMethod(
"_inspect",
smalltalk.method({
selector: "inspect",
category: '*IDE',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.Inspector || Inspector))._new();
_st($1)._inspect_(self);
$2=_st($1)._open();
return self}, self, "inspect", [], smalltalk.Object)},
args: [],
source: "inspect\x0a\x09Inspector new \x0a\x09\x09inspect: self;\x0a\x09\x09open",
messageSends: ["inspect:", "new", "open"],
referencedClasses: ["Inspector"]
}),
smalltalk.Object);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
category: '*IDE',
fn: function (anInspector){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.variables=nil;
$ctx1.locals.variables=_st((smalltalk.Dictionary || Dictionary))._new();
_st($ctx1.locals.variables)._at_put_("#self",self);
_st(_st(_st(self)._class())._allInstanceVariableNames())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.variables)._at_put_(each,_st(self)._instVarAt_(each));
})}));
_st(anInspector)._setLabel_(_st(self)._printString());
$1=_st(anInspector)._setVariables_($ctx1.locals.variables);
return self}, self, "inspectOn:", [anInspector], smalltalk.Object)},
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self.\x0a\x09self class allInstanceVariableNames do: [:each |\x0a\x09\x09variables at: each put: (self instVarAt: each)].\x0a\x09anInspector \x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: variables",
messageSends: ["new", "at:put:", "do:", "instVarAt:", "allInstanceVariableNames", "class", "setLabel:", "printString", "setVariables:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.Object);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
category: '*IDE',
fn: function (anInspector){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.variables=nil;
$ctx1.locals.variables=_st((smalltalk.Dictionary || Dictionary))._new();
_st($ctx1.locals.variables)._at_put_("#self",self);
_st(self)._withIndexDo_((function(each,i){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.variables)._at_put_(i,each);
})}));
_st(anInspector)._setLabel_(_st(self)._printString());
$1=_st(anInspector)._setVariables_($ctx1.locals.variables);
return self}, self, "inspectOn:", [anInspector], smalltalk.Collection)},
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self.\x0a\x09self withIndexDo: [:each :i |\x0a\x09\x09variables at: i put: each].\x0a\x09anInspector \x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: variables",
messageSends: ["new", "at:put:", "withIndexDo:", "setLabel:", "printString", "setVariables:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.Collection);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
category: '*IDE',
fn: function (anInspector){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.variables=nil;
$ctx1.locals.variables=_st((smalltalk.Dictionary || Dictionary))._new();
_st($ctx1.locals.variables)._at_put_("#self",self);
_st($ctx1.locals.variables)._at_put_("#keys",_st(self)._keys());
_st(self)._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.variables)._at_put_(key,value);
})}));
_st(anInspector)._setLabel_(_st(self)._printString());
$1=_st(anInspector)._setVariables_($ctx1.locals.variables);
return self}, self, "inspectOn:", [anInspector], smalltalk.HashedCollection)},
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self.\x0a\x09variables at: '#keys' put: self keys.\x0a\x09self keysAndValuesDo: [:key :value |\x0a\x09\x09variables at: key put: value].\x0a\x09anInspector \x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: variables",
messageSends: ["new", "at:put:", "keys", "keysAndValuesDo:", "setLabel:", "printString", "setVariables:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
category: '*IDE',
fn: function (anInspector){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.label=nil;
smalltalk.CharacterArray.fn.prototype._inspectOn_.apply(_st(self), [anInspector]);
$1=_st(_st(_st(self)._printString())._size()).__gt((30));
if(smalltalk.assert($1)){
$ctx1.locals.label=_st(_st(_st(self)._printString())._copyFrom_to_((1),(30))).__comma("...'");
$ctx1.locals.label;
} else {
$ctx1.locals.label=_st(self)._printString();
$ctx1.locals.label;
};
_st(anInspector)._setLabel_($ctx1.locals.label);
return self}, self, "inspectOn:", [anInspector], smalltalk.String)},
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| label |\x0a\x09super inspectOn: anInspector.\x0a\x09self printString size > 30 \x0a\x09\x09ifTrue: [label := (self printString copyFrom: 1 to: 30), '...''']\x0a\x09\x09ifFalse: [label := self printString]. \x0a\x09anInspector setLabel: label",
messageSends: ["inspectOn:", "ifTrue:ifFalse:", ",", "copyFrom:to:", "printString", ">", "size", "setLabel:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
category: '*IDE',
fn: function (anInspector){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.variables=nil;
$ctx1.locals.variables=_st((smalltalk.Dictionary || Dictionary))._new();
_st($ctx1.locals.variables)._at_put_("#self",self);
_st(self["@elements"])._withIndexDo_((function(each,i){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.variables)._at_put_(i,each);
})}));
_st(anInspector)._setLabel_(_st(self)._printString());
$1=_st(anInspector)._setVariables_($ctx1.locals.variables);
return self}, self, "inspectOn:", [anInspector], smalltalk.Set)},
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self.\x0a\x09elements withIndexDo: [:each :i |\x0a\x09\x09variables at: i put: each].\x0a\x09anInspector \x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: variables",
messageSends: ["new", "at:put:", "withIndexDo:", "setLabel:", "printString", "setVariables:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.Set);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
category: '*IDE',
fn: function (anInspector){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.variables=nil;
$ctx1.locals.variables=_st((smalltalk.Dictionary || Dictionary))._new();
_st($ctx1.locals.variables)._at_put_("#self",self);
_st($ctx1.locals.variables)._at_put_("#year",_st(self)._year());
_st($ctx1.locals.variables)._at_put_("#month",_st(self)._month());
_st($ctx1.locals.variables)._at_put_("#day",_st(self)._day());
_st($ctx1.locals.variables)._at_put_("#hours",_st(self)._hours());
_st($ctx1.locals.variables)._at_put_("#minutes",_st(self)._minutes());
_st($ctx1.locals.variables)._at_put_("#seconds",_st(self)._seconds());
_st($ctx1.locals.variables)._at_put_("#milliseconds",_st(self)._milliseconds());
_st(anInspector)._setLabel_(_st(self)._printString());
$1=_st(anInspector)._setVariables_($ctx1.locals.variables);
return self}, self, "inspectOn:", [anInspector], smalltalk.Date)},
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self.\x0a\x09variables at: '#year' put: self year.\x0a\x09variables at: '#month' put: self month.\x0a\x09variables at: '#day' put: self day.\x0a\x09variables at: '#hours' put: self hours.\x0a\x09variables at: '#minutes' put: self minutes.\x0a\x09variables at: '#seconds' put: self seconds.\x0a\x09variables at: '#milliseconds' put: self milliseconds.\x0a\x09anInspector \x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: variables",
messageSends: ["new", "at:put:", "year", "month", "day", "hours", "minutes", "seconds", "milliseconds", "setLabel:", "printString", "setVariables:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.Date);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
category: '*IDE',
fn: function (anInspector){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.variables=nil;
$ctx1.locals.variables=_st((smalltalk.Dictionary || Dictionary))._new();
_st($ctx1.locals.variables)._at_put_("#self",self);
_st($ctx1.locals.variables)._at_put_("#home",_st(self)._home());
_st($ctx1.locals.variables)._at_put_("#receiver",_st(self)._receiver());
_st($ctx1.locals.variables)._at_put_("#selector",_st(self)._selector());
_st($ctx1.locals.variables)._at_put_("#temps",_st(self)._temps());
_st(_st(_st(self)._class())._instanceVariableNames())._do_((function(each){
return smalltalk.withContext(function($ctx2) { return _st($ctx1.locals.variables)._at_put_(each,_st(self)._instVarAt_(each));
})}));
_st(anInspector)._setLabel_(_st(self)._printString());
$1=_st(anInspector)._setVariables_($ctx1.locals.variables);
return self}, self, "inspectOn:", [anInspector], smalltalk.MethodContext)},
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self.\x0a\x09variables at: '#home' put: self home.\x0a\x09variables at: '#receiver' put: self receiver.\x0a\x09variables at: '#selector' put: self selector.\x0a\x09variables at: '#temps' put: self temps.\x0a\x09self class instanceVariableNames do: [:each |\x0a\x09\x09variables at: each put: (self instVarAt: each)].\x0a\x09anInspector \x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: variables",
messageSends: ["new", "at:put:", "home", "receiver", "selector", "temps", "do:", "instVarAt:", "instanceVariableNames", "class", "setLabel:", "printString", "setVariables:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.MethodContext);

