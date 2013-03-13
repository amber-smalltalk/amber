smalltalk.addPackage('IDE');
smalltalk.addClass('ClassesList', smalltalk.Widget, ['browser', 'ul', 'nodes'], 'IDE');
smalltalk.addMethod(
"_browser",
smalltalk.method({
selector: "browser",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@browser"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"browser",{},smalltalk.ClassesList)})},
messageSends: []}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_browser_",
smalltalk.method({
selector: "browser:",
fn: function (aBrowser){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@browser"]=aBrowser;
return self}, function($ctx1) {$ctx1.fill(self,"browser:",{aBrowser:aBrowser},smalltalk.ClassesList)})},
messageSends: []}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_category",
smalltalk.method({
selector: "category",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._browser())._selectedPackage();
return $1;
}, function($ctx1) {$ctx1.fill(self,"category",{},smalltalk.ClassesList)})},
messageSends: ["selectedPackage", "browser"]}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_getNodes",
smalltalk.method({
selector: "getNodes",
fn: function (){
var self=this;
var classes,children,others;
return smalltalk.withContext(function($ctx1) { var $1,$2;
classes=_st(_st(self)._browser())._classes();
children=[];
others=[];
_st(classes)._do_((function(each){
return smalltalk.withContext(function($ctx2) {$1=_st(classes)._includes_(_st(each)._superclass());
if(smalltalk.assert($1)){
return _st(others)._add_(each);
} else {
return _st(children)._add_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=_st(children)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st((smalltalk.ClassesListNode || ClassesListNode))._on_browser_classes_level_(each,_st(self)._browser(),others,(0));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $2;
}, function($ctx1) {$ctx1.fill(self,"getNodes",{classes:classes,children:children,others:others},smalltalk.ClassesList)})},
messageSends: ["classes", "browser", "do:", "ifFalse:ifTrue:", "add:", "includes:", "superclass", "collect:", "on:browser:classes:level:"]}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self["@nodes"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@nodes"]=_st(self)._getNodes();
self["@nodes"];
} else {
$1;
};
$2=self["@nodes"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"nodes",{},smalltalk.ClassesList)})},
messageSends: ["ifNil:", "getNodes"]}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._ul();
_st($1)._class_("amber_column browser classes");
$2=_st($1)._yourself();
self["@ul"]=$2;
_st(self)._updateNodes();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.ClassesList)})},
messageSends: ["class:", "ul", "yourself", "updateNodes"]}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_resetNodes",
smalltalk.method({
selector: "resetNodes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@nodes"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"resetNodes",{},smalltalk.ClassesList)})},
messageSends: []}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_updateNodes",
smalltalk.method({
selector: "updateNodes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@ul"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx3) {return _st(each)._renderOn_(html);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateNodes",{},smalltalk.ClassesList)})},
messageSends: ["contents:", "do:", "renderOn:", "nodes"]}),
smalltalk.ClassesList);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aBrowser){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._browser_(aBrowser);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aBrowser:aBrowser},smalltalk.ClassesList.klass)})},
messageSends: ["browser:", "new", "yourself"]}),
smalltalk.ClassesList.klass);


smalltalk.addClass('ClassesListNode', smalltalk.Widget, ['browser', 'theClass', 'level', 'nodes'], 'IDE');
smalltalk.addMethod(
"_browser",
smalltalk.method({
selector: "browser",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@browser"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"browser",{},smalltalk.ClassesListNode)})},
messageSends: []}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_browser_",
smalltalk.method({
selector: "browser:",
fn: function (aBrowser){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@browser"]=aBrowser;
return self}, function($ctx1) {$ctx1.fill(self,"browser:",{aBrowser:aBrowser},smalltalk.ClassesListNode)})},
messageSends: []}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_getNodesFrom_",
smalltalk.method({
selector: "getNodesFrom:",
fn: function (aCollection){
var self=this;
var children,others;
return smalltalk.withContext(function($ctx1) { var $1;
children=[];
others=[];
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {$1=_st(_st(each)._superclass()).__eq(_st(self)._theClass());
if(smalltalk.assert($1)){
return _st(children)._add_(each);
} else {
return _st(others)._add_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
self["@nodes"]=_st(children)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st((smalltalk.ClassesListNode || ClassesListNode))._on_browser_classes_level_(each,_st(self)._browser(),others,_st(_st(self)._level()).__plus((1)));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"getNodesFrom:",{aCollection:aCollection,children:children,others:others},smalltalk.ClassesListNode)})},
messageSends: ["do:", "ifTrue:ifFalse:", "add:", "=", "theClass", "superclass", "collect:", "on:browser:classes:level:", "browser", "+", "level"]}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
var str;
return smalltalk.withContext(function($ctx1) { var $1;
str=_st(_st((smalltalk.String || String))._new())._writeStream();
_st(_st(self)._level())._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {return _st(str)._nextPutAll_("&nbsp;&nbsp;&nbsp;&nbsp;");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(str)._nextPutAll_(_st(_st(self)._theClass())._name());
$1=_st(str)._contents();
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{str:str},smalltalk.ClassesListNode)})},
messageSends: ["writeStream", "new", "timesRepeat:", "nextPutAll:", "level", "name", "theClass", "contents"]}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_level",
smalltalk.method({
selector: "level",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@level"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"level",{},smalltalk.ClassesListNode)})},
messageSends: []}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_level_",
smalltalk.method({
selector: "level:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@level"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"level:",{anInteger:anInteger},smalltalk.ClassesListNode)})},
messageSends: []}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@nodes"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"nodes",{},smalltalk.ClassesListNode)})},
messageSends: []}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
var li,cssClass;
return smalltalk.withContext(function($ctx1) { var $1,$2;
cssClass="";
li=_st(_st(html)._li())._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._browser())._selectClass_(_st(self)._theClass());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(li)._asJQuery())._html_(_st(self)._label());
$1=_st(_st(_st(self)._browser())._selectedClass()).__eq(_st(self)._theClass());
if(smalltalk.assert($1)){
cssClass=_st(cssClass).__comma(" selected");
cssClass;
};
$2=_st(_st(_st(self)._theClass())._comment())._isEmpty();
if(! smalltalk.assert($2)){
cssClass=_st(cssClass).__comma(" commented");
cssClass;
};
_st(li)._class_(cssClass);
_st(_st(self)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,li:li,cssClass:cssClass},smalltalk.ClassesListNode)})},
messageSends: ["onClick:", "selectClass:", "theClass", "browser", "li", "html:", "label", "asJQuery", "ifTrue:", ",", "=", "selectedClass", "ifFalse:", "isEmpty", "comment", "class:", "do:", "renderOn:", "nodes"]}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@theClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.ClassesListNode)})},
messageSends: []}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass},smalltalk.ClassesListNode)})},
messageSends: []}),
smalltalk.ClassesListNode);


smalltalk.addMethod(
"_on_browser_classes_level_",
smalltalk.method({
selector: "on:browser:classes:level:",
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
}, function($ctx1) {$ctx1.fill(self,"on:browser:classes:level:",{aClass:aClass,aBrowser:aBrowser,aCollection:aCollection,anInteger:anInteger},smalltalk.ClassesListNode.klass)})},
messageSends: ["theClass:", "new", "browser:", "level:", "getNodesFrom:", "yourself"]}),
smalltalk.ClassesListNode.klass);


smalltalk.addClass('DebugErrorHandler', smalltalk.ErrorHandler, [], 'IDE');
smalltalk.addMethod(
"_handleError_",
smalltalk.method({
selector: "handleError:",
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st((function(){
return smalltalk.withContext(function($ctx2) {$1=_st((smalltalk.Debugger || Debugger))._new();
_st($1)._error_(anError);
$2=_st($1)._open();
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_((smalltalk.Error || Error),(function(error){
return smalltalk.withContext(function($ctx2) {return _st(_st((smalltalk.ErrorHandler || ErrorHandler))._new())._handleError_(error);
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"handleError:",{anError:anError},smalltalk.DebugErrorHandler)})},
messageSends: ["on:do:", "handleError:", "new", "error:", "open"]}),
smalltalk.DebugErrorHandler);


smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._register();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.DebugErrorHandler.klass)})},
messageSends: ["register"]}),
smalltalk.DebugErrorHandler.klass);


smalltalk.addClass('SourceArea', smalltalk.Widget, ['editor', 'div', 'receiver', 'onDoIt'], 'IDE');
smalltalk.addMethod(
"_clear",
smalltalk.method({
selector: "clear",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._val_("");
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.SourceArea)})},
messageSends: ["val:"]}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_currentLine",
smalltalk.method({
selector: "currentLine",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@editor"])._getLine_(_st(_st(self["@editor"])._getCursor())._line());
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentLine",{},smalltalk.SourceArea)})},
messageSends: ["getLine:", "line", "getCursor"]}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_currentLineOrSelection",
smalltalk.method({
selector: "currentLineOrSelection",
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
}, function($ctx1) {$ctx1.fill(self,"currentLineOrSelection",{},smalltalk.SourceArea)})},
messageSends: ["ifFalse:ifTrue:", "currentLine", "selection", "somethingSelected"]}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_doIt",
smalltalk.method({
selector: "doIt",
fn: function (){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { var $1,$2;
result=_st(self)._eval_(_st(self)._currentLineOrSelection());
$1=_st(self)._onDoIt();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(_st(self)._onDoIt())._value();
};
$2=result;
return $2;
}, function($ctx1) {$ctx1.fill(self,"doIt",{result:result},smalltalk.SourceArea)})},
messageSends: ["eval:", "currentLineOrSelection", "ifNotNil:", "value", "onDoIt"]}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_editor",
smalltalk.method({
selector: "editor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@editor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"editor",{},smalltalk.SourceArea)})},
messageSends: []}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_eval_",
smalltalk.method({
selector: "eval:",
fn: function (aString){
var self=this;
var compiler;
return smalltalk.withContext(function($ctx1) { var $1,$2;
var $early={};
try {
compiler=_st((smalltalk.Compiler || Compiler))._new();
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(compiler)._parseExpression_(aString);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_((smalltalk.Error || Error),(function(ex){
return smalltalk.withContext(function($ctx2) {$1=_st(window)._alert_(_st(ex)._messageText());
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})}));
$2=_st(compiler)._evaluateExpression_on_(aString,_st(self)._receiver());
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"eval:",{aString:aString,compiler:compiler},smalltalk.SourceArea)})},
messageSends: ["new", "on:do:", "alert:", "messageText", "parseExpression:", "evaluateExpression:on:", "receiver"]}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_fileIn",
smalltalk.method({
selector: "fileIn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.Importer || Importer))._new())._import_(_st(_st(self)._currentLineOrSelection())._readStream());
return self}, function($ctx1) {$ctx1.fill(self,"fileIn",{},smalltalk.SourceArea)})},
messageSends: ["import:", "readStream", "currentLineOrSelection", "new"]}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_focus",
smalltalk.method({
selector: "focus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._editor())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"focus",{},smalltalk.SourceArea)})},
messageSends: ["focus", "editor"]}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_handleKeyDown_",
smalltalk.method({
selector: "handleKeyDown:",
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
return self}, function($ctx1) {$ctx1.fill(self,"handleKeyDown:",{anEvent:anEvent},smalltalk.SourceArea)})},
messageSends: []}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_inspectIt",
smalltalk.method({
selector: "inspectIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._doIt())._inspect();
return self}, function($ctx1) {$ctx1.fill(self,"inspectIt",{},smalltalk.SourceArea)})},
messageSends: ["inspect", "doIt"]}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_onDoIt",
smalltalk.method({
selector: "onDoIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@onDoIt"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"onDoIt",{},smalltalk.SourceArea)})},
messageSends: []}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_onDoIt_",
smalltalk.method({
selector: "onDoIt:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@onDoIt"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"onDoIt:",{aBlock:aBlock},smalltalk.SourceArea)})},
messageSends: []}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_onKeyDown_",
smalltalk.method({
selector: "onKeyDown:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@div"])._onKeyDown_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onKeyDown:",{aBlock:aBlock},smalltalk.SourceArea)})},
messageSends: ["onKeyDown:"]}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_onKeyUp_",
smalltalk.method({
selector: "onKeyUp:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@div"])._onKeyUp_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onKeyUp:",{aBlock:aBlock},smalltalk.SourceArea)})},
messageSends: ["onKeyUp:"]}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_print_",
smalltalk.method({
selector: "print:",
fn: function (aString){
var self=this;
var start,stop,currentLine;
return smalltalk.withContext(function($ctx1) { currentLine=_st(_st(self["@editor"])._getCursor_(false))._line();
start=_st((smalltalk.HashedCollection || HashedCollection))._new();
_st(start)._at_put_("line",currentLine);
_st(start)._at_put_("ch",_st(_st(self["@editor"])._getCursor_(false))._ch());
_st(_st(self["@editor"])._getSelection())._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {_st(start)._at_put_("ch",_st(_st(self["@editor"])._getLine_(currentLine))._size());
return _st(self["@editor"])._setSelection_end_(smalltalk.HashedCollection._fromPairs_([_st("line").__minus_gt(currentLine),_st("ch").__minus_gt((0))]),start);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
stop=_st((smalltalk.HashedCollection || HashedCollection))._new();
_st(stop)._at_put_("line",currentLine);
_st(stop)._at_put_("ch",_st(_st(_st(start)._at_("ch")).__plus(_st(aString)._size())).__plus((2)));
_st(self["@editor"])._replaceSelection_(_st(_st(_st(_st(self["@editor"])._getSelection()).__comma(" ")).__comma(aString)).__comma(" "));
_st(self["@editor"])._setCursor_(_st(self["@editor"])._getCursor_(true));
_st(self["@editor"])._setSelection_end_(stop,start);
return self}, function($ctx1) {$ctx1.fill(self,"print:",{aString:aString,start:start,stop:stop,currentLine:currentLine},smalltalk.SourceArea)})},
messageSends: ["line", "getCursor:", "new", "at:put:", "ch", "ifEmpty:", "size", "getLine:", "setSelection:end:", "->", "getSelection", "+", "at:", "replaceSelection:", ",", "setCursor:"]}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_printIt",
smalltalk.method({
selector: "printIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._print_(_st(_st(self)._doIt())._printString());
_st(self)._focus();
return self}, function($ctx1) {$ctx1.fill(self,"printIt",{},smalltalk.SourceArea)})},
messageSends: ["print:", "printString", "doIt", "focus"]}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@receiver"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st((smalltalk.DoIt || DoIt))._new();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},smalltalk.SourceArea)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@receiver"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{anObject:anObject},smalltalk.SourceArea)})},
messageSends: []}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
var textarea;
return smalltalk.withContext(function($ctx1) { self["@div"]=_st(_st(html)._div())._class_("source");
_st(self["@div"])._with_((function(){
return smalltalk.withContext(function($ctx2) {textarea=_st(html)._textarea();
return textarea;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self)._setEditorOn_(_st(textarea)._element());
_st(self["@div"])._onKeyDown_((function(e){
return smalltalk.withContext(function($ctx2) {return _st(self)._handleKeyDown_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,textarea:textarea},smalltalk.SourceArea)})},
messageSends: ["class:", "div", "with:", "textarea", "setEditorOn:", "element", "onKeyDown:", "handleKeyDown:"]}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_selection",
smalltalk.method({
selector: "selection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@editor"])._getSelection();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selection",{},smalltalk.SourceArea)})},
messageSends: ["getSelection"]}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_setEditorOn_",
smalltalk.method({
selector: "setEditorOn:",
fn: function (aTextarea){
var self=this;
return smalltalk.withContext(function($ctx1) { self['@editor'] = CodeMirror.fromTextArea(aTextarea, {
		theme: 'amber',
				lineNumbers: true,
				enterMode: 'flat',
				indentWithTabs: true,
				indentUnit: 4,
				matchBrackets: true,
				electricChars: false
	});
return self}, function($ctx1) {$ctx1.fill(self,"setEditorOn:",{aTextarea:aTextarea},smalltalk.SourceArea)})},
messageSends: []}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_val",
smalltalk.method({
selector: "val",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@editor"])._getValue();
return $1;
}, function($ctx1) {$ctx1.fill(self,"val",{},smalltalk.SourceArea)})},
messageSends: ["getValue"]}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_val_",
smalltalk.method({
selector: "val:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@editor"])._setValue_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"val:",{aString:aString},smalltalk.SourceArea)})},
messageSends: ["setValue:"]}),
smalltalk.SourceArea);


smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Widget.klass.fn.prototype._initialize.apply(_st(self), []);
_st(self)._setupCodeMirror();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.SourceArea.klass)})},
messageSends: ["initialize", "setupCodeMirror"]}),
smalltalk.SourceArea.klass);

smalltalk.addMethod(
"_setupCodeMirror",
smalltalk.method({
selector: "setupCodeMirror",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) {  CodeMirror.keyMap["default"].fallthrough = ["basic"] ;
return self}, function($ctx1) {$ctx1.fill(self,"setupCodeMirror",{},smalltalk.SourceArea.klass)})},
messageSends: []}),
smalltalk.SourceArea.klass);


smalltalk.addClass('TabManager', smalltalk.Widget, ['selectedTab', 'tabs', 'opened', 'ul', 'input'], 'IDE');
smalltalk.addMethod(
"_addTab_",
smalltalk.method({
selector: "addTab:",
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._tabs())._add_(aWidget);
_st(aWidget)._appendToJQuery_(_st("#amber")._asJQuery());
_st(aWidget)._hide();
return self}, function($ctx1) {$ctx1.fill(self,"addTab:",{aWidget:aWidget},smalltalk.TabManager)})},
messageSends: ["add:", "tabs", "appendToJQuery:", "asJQuery", "hide"]}),
smalltalk.TabManager);

smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@opened"];
if(smalltalk.assert($1)){
_st(_st("#amber")._asJQuery())._hide();
_st(_st(self["@ul"])._asJQuery())._hide();
_st(self["@selectedTab"])._hide();
_st(self)._removeBodyMargin();
_st(_st("body")._asJQuery())._removeClass_("amberBody");
self["@opened"]=false;
self["@opened"];
};
return self}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.TabManager)})},
messageSends: ["ifTrue:", "hide", "asJQuery", "removeBodyMargin", "removeClass:"]}),
smalltalk.TabManager);

smalltalk.addMethod(
"_closeTab_",
smalltalk.method({
selector: "closeTab:",
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._removeTab_(aWidget);
_st(self)._selectTab_(_st(_st(self)._tabs())._last());
_st(aWidget)._remove();
_st(self)._update();
return self}, function($ctx1) {$ctx1.fill(self,"closeTab:",{aWidget:aWidget},smalltalk.TabManager)})},
messageSends: ["removeTab:", "selectTab:", "last", "tabs", "remove", "update"]}),
smalltalk.TabManager);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6;
smalltalk.Widget.fn.prototype._initialize.apply(_st(self), []);
self["@opened"]=true;
_st((function(html){
return smalltalk.withContext(function($ctx2) {return _st(_st(html)._div())._id_("amber");
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}))._appendToJQuery_(_st("body")._asJQuery());
_st(_st("body")._asJQuery())._addClass_("amberBody");
_st(self)._appendToJQuery_(_st("#amber")._asJQuery());
$1=self;
_st($1)._addTab_(_st((smalltalk.IDETranscript || IDETranscript))._current());
_st($1)._addTab_(_st((smalltalk.Workspace || Workspace))._new());
$2=_st($1)._addTab_(_st((smalltalk.TestRunner || TestRunner))._new());
_st(self)._selectTab_(_st(_st(self)._tabs())._last());
$3=self;
_st($3)._onResize_((function(){
return smalltalk.withContext(function($ctx2) {$4=self;
_st($4)._updateBodyMargin();
$5=_st($4)._updatePosition();
return $5;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$6=_st($3)._onWindowResize_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._updatePosition();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TabManager)})},
messageSends: ["initialize", "appendToJQuery:", "asJQuery", "id:", "div", "addClass:", "addTab:", "current", "new", "selectTab:", "last", "tabs", "onResize:", "updateBodyMargin", "updatePosition", "onWindowResize:"]}),
smalltalk.TabManager);

smalltalk.addMethod(
"_labelFor_",
smalltalk.method({
selector: "labelFor:",
fn: function (aWidget){
var self=this;
var label,maxSize;
return smalltalk.withContext(function($ctx1) { var $1,$2;
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
messageSends: ["copyFrom:to:", "min:", "size", "label", "ifTrue:", ",", ">"]}),
smalltalk.TabManager);

smalltalk.addMethod(
"_newBrowserTab",
smalltalk.method({
selector: "newBrowserTab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((smalltalk.Browser || Browser))._open();
return self}, function($ctx1) {$ctx1.fill(self,"newBrowserTab",{},smalltalk.TabManager)})},
messageSends: ["open"]}),
smalltalk.TabManager);

smalltalk.addMethod(
"_onResize_",
smalltalk.method({
selector: "onResize:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { jQuery('#amber').resizable({
	handles: 'n',
	resize: aBlock,
	minHeight: 230
});
return self}, function($ctx1) {$ctx1.fill(self,"onResize:",{aBlock:aBlock},smalltalk.TabManager)})},
messageSends: []}),
smalltalk.TabManager);

smalltalk.addMethod(
"_onWindowResize_",
smalltalk.method({
selector: "onWindowResize:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { jQuery(window).resize(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onWindowResize:",{aBlock:aBlock},smalltalk.TabManager)})},
messageSends: []}),
smalltalk.TabManager);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@opened"];
if(! smalltalk.assert($1)){
_st(_st("body")._asJQuery())._addClass_("amberBody");
_st(_st("#amber")._asJQuery())._show();
_st(_st(self["@ul"])._asJQuery())._show();
_st(self)._updateBodyMargin();
_st(self["@selectedTab"])._show();
self["@opened"]=true;
self["@opened"];
};
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.TabManager)})},
messageSends: ["ifFalse:", "addClass:", "asJQuery", "show", "updateBodyMargin"]}),
smalltalk.TabManager);

smalltalk.addMethod(
"_removeBodyMargin",
smalltalk.method({
selector: "removeBodyMargin",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._setBodyMargin_((0));
return self}, function($ctx1) {$ctx1.fill(self,"removeBodyMargin",{},smalltalk.TabManager)})},
messageSends: ["setBodyMargin:"]}),
smalltalk.TabManager);

smalltalk.addMethod(
"_removeTab_",
smalltalk.method({
selector: "removeTab:",
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._tabs())._remove_(aWidget);
_st(self)._update();
return self}, function($ctx1) {$ctx1.fill(self,"removeTab:",{aWidget:aWidget},smalltalk.TabManager)})},
messageSends: ["remove:", "tabs", "update"]}),
smalltalk.TabManager);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
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
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.TabManager)})},
messageSends: ["id:", "div", "renderToolbarOn:", "ul", "yourself", "renderTabs"]}),
smalltalk.TabManager);

smalltalk.addMethod(
"_renderTabFor_on_",
smalltalk.method({
selector: "renderTabFor:on:",
fn: function (aWidget,html){
var self=this;
var li;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$5,$6,$7,$4,$8;
li=_st(html)._li();
$1=_st(self["@selectedTab"]).__eq(aWidget);
if(smalltalk.assert($1)){
_st(li)._class_("selected");
};
$2=li;
_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {_st(_st(html)._span())._class_("ltab");
$3=_st(html)._span();
_st($3)._class_("mtab");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {$5=_st(aWidget)._canBeClosed();
if(smalltalk.assert($5)){
$6=_st(html)._span();
_st($6)._class_("close");
_st($6)._with_("x");
$7=_st($6)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {return _st(self)._closeTab_(aWidget);
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
$7;
};
return _st(_st(html)._span())._with_(_st(self)._labelFor_(aWidget));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$4;
return _st(_st(html)._span())._class_("rtab");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$8=_st($2)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._selectTab_(aWidget);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderTabFor:on:",{aWidget:aWidget,html:html,li:li},smalltalk.TabManager)})},
messageSends: ["li", "ifTrue:", "class:", "=", "with:", "span", "onClick:", "closeTab:", "canBeClosed", "labelFor:", "selectTab:"]}),
smalltalk.TabManager);

smalltalk.addMethod(
"_renderTabs",
smalltalk.method({
selector: "renderTabs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
_st(self["@ul"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {_st(_st(self)._tabs())._do_((function(each){
return smalltalk.withContext(function($ctx3) {return _st(self)._renderTabFor_on_(each,html);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
$1=_st(html)._li();
_st($1)._class_("newtab");
_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {_st(_st(html)._span())._class_("ltab");
$2=_st(html)._span();
_st($2)._class_("mtab");
$3=_st($2)._with_(" + ");
$3;
return _st(_st(html)._span())._class_("rtab");
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$4=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._newBrowserTab();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderTabs",{},smalltalk.TabManager)})},
messageSends: ["contents:", "do:", "renderTabFor:on:", "tabs", "class:", "li", "with:", "span", "onClick:", "newBrowserTab"]}),
smalltalk.TabManager);

smalltalk.addMethod(
"_renderToolbarOn_",
smalltalk.method({
selector: "renderToolbarOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$5,$6,$7,$2;
$1=_st(html)._div();
_st($1)._id_("amber_toolbar");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {$3=_st(html)._input();
_st($3)._class_("implementors");
$4=_st($3)._yourself();
self["@input"]=$4;
self["@input"];
_st(self["@input"])._onKeyPress_((function(event){
return smalltalk.withContext(function($ctx3) {$5=_st(_st(event)._keyCode()).__eq((13));
if(smalltalk.assert($5)){
return _st(self)._search_(_st(_st(self["@input"])._asJQuery())._val());
};
}, function($ctx3) {$ctx3.fillBlock({event:event},$ctx1)})}));
$6=_st(html)._div();
_st($6)._id_("amber_close");
$7=_st($6)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._close();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $7;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderToolbarOn:",{html:html},smalltalk.TabManager)})},
messageSends: ["id:", "div", "with:", "class:", "input", "yourself", "onKeyPress:", "ifTrue:", "search:", "val", "asJQuery", "=", "keyCode", "onClick:", "close"]}),
smalltalk.TabManager);

smalltalk.addMethod(
"_search_",
smalltalk.method({
selector: "search:",
fn: function (aString){
var self=this;
var searchedClass;
return smalltalk.withContext(function($ctx1) { var $1;
searchedClass=_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._at_(aString);
$1=_st(searchedClass)._isClass();
if(smalltalk.assert($1)){
_st((smalltalk.Browser || Browser))._openOn_(searchedClass);
} else {
_st((smalltalk.ReferencesBrowser || ReferencesBrowser))._search_(aString);
};
return self}, function($ctx1) {$ctx1.fill(self,"search:",{aString:aString,searchedClass:searchedClass},smalltalk.TabManager)})},
messageSends: ["at:", "current", "ifTrue:ifFalse:", "openOn:", "search:", "isClass"]}),
smalltalk.TabManager);

smalltalk.addMethod(
"_selectTab_",
smalltalk.method({
selector: "selectTab:",
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._open();
self["@selectedTab"]=aWidget;
_st(_st(self)._tabs())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._hide();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(aWidget)._show();
_st(self)._update();
return self}, function($ctx1) {$ctx1.fill(self,"selectTab:",{aWidget:aWidget},smalltalk.TabManager)})},
messageSends: ["open", "do:", "hide", "tabs", "show", "update"]}),
smalltalk.TabManager);

smalltalk.addMethod(
"_setBodyMargin_",
smalltalk.method({
selector: "setBodyMargin:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(".amberBody")._asJQuery())._css_put_("margin-bottom",_st(_st(anInteger)._asString()).__comma("px"));
return self}, function($ctx1) {$ctx1.fill(self,"setBodyMargin:",{anInteger:anInteger},smalltalk.TabManager)})},
messageSends: ["css:put:", ",", "asString", "asJQuery"]}),
smalltalk.TabManager);

smalltalk.addMethod(
"_tabs",
smalltalk.method({
selector: "tabs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@tabs"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@tabs"]=_st((smalltalk.Array || Array))._new();
$1=self["@tabs"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabs",{},smalltalk.TabManager)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.TabManager);

smalltalk.addMethod(
"_update",
smalltalk.method({
selector: "update",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._renderTabs();
return self}, function($ctx1) {$ctx1.fill(self,"update",{},smalltalk.TabManager)})},
messageSends: ["renderTabs"]}),
smalltalk.TabManager);

smalltalk.addMethod(
"_updateBodyMargin",
smalltalk.method({
selector: "updateBodyMargin",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._setBodyMargin_(_st(_st("#amber")._asJQuery())._height());
return self}, function($ctx1) {$ctx1.fill(self,"updateBodyMargin",{},smalltalk.TabManager)})},
messageSends: ["setBodyMargin:", "height", "asJQuery"]}),
smalltalk.TabManager);

smalltalk.addMethod(
"_updatePosition",
smalltalk.method({
selector: "updatePosition",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { jQuery('#amber').css('top', '').css('bottom', '0px');
return self}, function($ctx1) {$ctx1.fill(self,"updatePosition",{},smalltalk.TabManager)})},
messageSends: []}),
smalltalk.TabManager);


smalltalk.TabManager.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@current"]=smalltalk.Widget.klass.fn.prototype._new.apply(_st(self), []);
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.TabManager.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.TabManager.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.TabManager.klass)})},
messageSends: ["shouldNotImplement"]}),
smalltalk.TabManager.klass);

smalltalk.addMethod(
"_toggleAmberIDE",
smalltalk.method({
selector: "toggleAmberIDE",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(_st(_st(window)._jQuery_("#amber"))._length()).__eq((0));
if(smalltalk.assert($1)){
_st((smalltalk.Browser || Browser))._open();
} else {
$2=_st(_st(window)._jQuery_("#amber"))._is_(":visible");
if(smalltalk.assert($2)){
_st(_st((smalltalk.TabManager || TabManager))._current())._close();
} else {
_st(_st((smalltalk.TabManager || TabManager))._current())._open();
};
};
return self}, function($ctx1) {$ctx1.fill(self,"toggleAmberIDE",{},smalltalk.TabManager.klass)})},
messageSends: ["ifTrue:ifFalse:", "open", "close", "current", "is:", "jQuery:", "=", "length"]}),
smalltalk.TabManager.klass);


smalltalk.addClass('TabWidget', smalltalk.Widget, ['div'], 'IDE');
smalltalk.addMethod(
"_canBeClosed",
smalltalk.method({
selector: "canBeClosed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"canBeClosed",{},smalltalk.TabWidget)})},
messageSends: []}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.TabManager || TabManager))._current())._closeTab_(self);
return self}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.TabWidget)})},
messageSends: ["closeTab:", "current"]}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_hide",
smalltalk.method({
selector: "hide",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@div"])._asJQuery())._hide();
return self}, function($ctx1) {$ctx1.fill(self,"hide",{},smalltalk.TabWidget)})},
messageSends: ["hide", "asJQuery"]}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.TabWidget)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.TabManager || TabManager))._current())._addTab_(self);
_st(_st((smalltalk.TabManager || TabManager))._current())._selectTab_(self);
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.TabWidget)})},
messageSends: ["addTab:", "current", "selectTab:"]}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_remove",
smalltalk.method({
selector: "remove",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@div"])._asJQuery())._remove();
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.TabWidget)})},
messageSends: ["remove", "asJQuery"]}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"renderBoxOn:",{html:html},smalltalk.TabWidget)})},
messageSends: []}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},smalltalk.TabWidget)})},
messageSends: []}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._div();
_st($1)._class_("amberTool");
$2=_st($1)._yourself();
self["@div"]=$2;
_st(self)._renderTab();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.TabWidget)})},
messageSends: ["class:", "div", "yourself", "renderTab"]}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_renderTab",
smalltalk.method({
selector: "renderTab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
_st(self["@div"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {$1=_st(html)._div();
_st($1)._class_("amber_box");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._renderBoxOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$2;
$3=_st(html)._div();
_st($3)._class_("amber_buttons");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._renderButtonsOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderTab",{},smalltalk.TabWidget)})},
messageSends: ["contents:", "class:", "div", "with:", "renderBoxOn:", "renderButtonsOn:"]}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_show",
smalltalk.method({
selector: "show",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@div"])._asJQuery())._show();
return self}, function($ctx1) {$ctx1.fill(self,"show",{},smalltalk.TabWidget)})},
messageSends: ["show", "asJQuery"]}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_update",
smalltalk.method({
selector: "update",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._renderTab();
return self}, function($ctx1) {$ctx1.fill(self,"update",{},smalltalk.TabWidget)})},
messageSends: ["renderTab"]}),
smalltalk.TabWidget);


smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._open();
return $1;
}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.TabWidget.klass)})},
messageSends: ["open", "new"]}),
smalltalk.TabWidget.klass);


smalltalk.addClass('Browser', smalltalk.TabWidget, ['selectedPackage', 'selectedClass', 'selectedProtocol', 'selectedMethod', 'packagesList', 'classesList', 'protocolsList', 'methodsList', 'sourceArea', 'tabsList', 'selectedTab', 'saveButton', 'classButtons', 'methodButtons', 'unsavedChanges'], 'IDE');
smalltalk.addMethod(
"_addInstanceVariableNamed_toClass_",
smalltalk.method({
selector: "addInstanceVariableNamed:toClass:",
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(_st(aClass)._instanceVariableNames())._copy();
_st($1)._add_(aString);
$2=_st($1)._yourself();
_st(_st((smalltalk.ClassBuilder || ClassBuilder))._new())._addSubclassOf_named_instanceVariableNames_package_(_st(aClass)._superclass(),_st(aClass)._name(),$2,_st(_st(aClass)._package())._name());
return self}, function($ctx1) {$ctx1.fill(self,"addInstanceVariableNamed:toClass:",{aString:aString,aClass:aClass},smalltalk.Browser)})},
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "superclass", "name", "add:", "copy", "instanceVariableNames", "yourself", "package", "new"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_addNewClass",
smalltalk.method({
selector: "addNewClass",
fn: function (){
var self=this;
var className;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
className=_st(window)._prompt_("New class");
$1=_st(_st(className)._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) {return _st(className)._notEmpty();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
_st((smalltalk.Object || Object))._subclass_instanceVariableNames_package_(className,"",_st(self)._selectedPackage());
$2=self;
_st($2)._resetClassesList();
$3=_st($2)._updateClassesList();
$3;
_st(self)._selectClass_(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._at_(className));
};
return self}, function($ctx1) {$ctx1.fill(self,"addNewClass",{className:className},smalltalk.Browser)})},
messageSends: ["prompt:", "ifTrue:", "subclass:instanceVariableNames:package:", "selectedPackage", "resetClassesList", "updateClassesList", "selectClass:", "at:", "current", "and:", "notEmpty", "notNil"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_addNewProtocol",
smalltalk.method({
selector: "addNewProtocol",
fn: function (){
var self=this;
var newProtocol;
return smalltalk.withContext(function($ctx1) { var $1;
newProtocol=_st(window)._prompt_("New method protocol");
$1=_st(_st(newProtocol)._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) {return _st(newProtocol)._notEmpty();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
_st(self["@selectedMethod"])._category_(newProtocol);
_st(self)._setMethodProtocol_(newProtocol);
};
return self}, function($ctx1) {$ctx1.fill(self,"addNewProtocol",{newProtocol:newProtocol},smalltalk.Browser)})},
messageSends: ["prompt:", "ifTrue:", "category:", "setMethodProtocol:", "and:", "notEmpty", "notNil"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_ajaxPutAt_data_",
smalltalk.method({
selector: "ajaxPutAt:data:",
fn: function (aURL,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(jQuery)._ajax_options_(aURL,smalltalk.HashedCollection._fromPairs_([_st("type").__minus_gt("PUT"),_st("data").__minus_gt(aString),_st("contentType").__minus_gt("text/plain;charset=UTF-8"),_st("error").__minus_gt((function(xhr){
return smalltalk.withContext(function($ctx2) {return _st(window)._alert_(_st(_st(_st(_st("Commiting ").__comma(aURL)).__comma(" failed with reason: \x22")).__comma(_st(xhr)._responseText())).__comma("\x22"));
}, function($ctx2) {$ctx2.fillBlock({xhr:xhr},$ctx1)})}))]));
return self}, function($ctx1) {$ctx1.fill(self,"ajaxPutAt:data:",{aURL:aURL,aString:aString},smalltalk.Browser)})},
messageSends: ["ajax:options:", "->", "alert:", ",", "responseText"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_canBeClosed",
smalltalk.method({
selector: "canBeClosed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"canBeClosed",{},smalltalk.Browser)})},
messageSends: []}),
smalltalk.Browser);

smalltalk.addMethod(
"_cancelChanges",
smalltalk.method({
selector: "cancelChanges",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@unsavedChanges"];
if(smalltalk.assert($2)){
$1=_st(window)._confirm_("Cancel changes?");
} else {
$1=true;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"cancelChanges",{},smalltalk.Browser)})},
messageSends: ["ifTrue:ifFalse:", "confirm:"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_classCommentSource",
smalltalk.method({
selector: "classCommentSource",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@selectedClass"])._comment();
return $1;
}, function($ctx1) {$ctx1.fill(self,"classCommentSource",{},smalltalk.Browser)})},
messageSends: ["comment"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_classDeclarationSource",
smalltalk.method({
selector: "classDeclarationSource",
fn: function (){
var self=this;
var stream;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7;
stream=_st("")._writeStream();
$1=self["@selectedClass"];
if(($receiver = $1) == nil || $receiver == undefined){
$2=_st(self)._classDeclarationTemplate();
return $2;
} else {
$1;
};
$3=stream;
_st($3)._nextPutAll_(_st(_st(self["@selectedClass"])._superclass())._asString());
_st($3)._nextPutAll_(" subclass: #");
_st($3)._nextPutAll_(_st(self["@selectedClass"])._name());
_st($3)._nextPutAll_(_st(_st((smalltalk.String || String))._lf()).__comma(_st((smalltalk.String || String))._tab()));
$4=_st($3)._nextPutAll_("instanceVariableNames: '");
_st(_st(self["@selectedClass"])._instanceVariableNames())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(stream)._nextPutAll_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return _st(stream)._nextPutAll_(" ");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$5=stream;
_st($5)._nextPutAll_(_st(_st("'").__comma(_st((smalltalk.String || String))._lf())).__comma(_st((smalltalk.String || String))._tab()));
_st($5)._nextPutAll_("package: '");
_st($5)._nextPutAll_(_st(self["@selectedClass"])._category());
$6=_st($5)._nextPutAll_("'");
$7=_st(stream)._contents();
return $7;
}, function($ctx1) {$ctx1.fill(self,"classDeclarationSource",{stream:stream},smalltalk.Browser)})},
messageSends: ["writeStream", "ifNil:", "classDeclarationTemplate", "nextPutAll:", "asString", "superclass", "name", ",", "tab", "lf", "do:separatedBy:", "instanceVariableNames", "category", "contents"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_classDeclarationTemplate",
smalltalk.method({
selector: "classDeclarationTemplate",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st("Object subclass: #NameOfSubclass\x0a\x09instanceVariableNames: ''\x0a\x09package: '").__comma(_st(self)._selectedPackage())).__comma("'");
return $1;
}, function($ctx1) {$ctx1.fill(self,"classDeclarationTemplate",{},smalltalk.Browser)})},
messageSends: [",", "selectedPackage"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_classes",
smalltalk.method({
selector: "classes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._classes())._select_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(each)._category()).__eq(self["@selectedPackage"]);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._sort_((function(a,b){
return smalltalk.withContext(function($ctx2) {return _st(_st(a)._name()).__lt(_st(b)._name());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})})))._asSet();
return $1;
}, function($ctx1) {$ctx1.fill(self,"classes",{},smalltalk.Browser)})},
messageSends: ["asSet", "sort:", "<", "name", "select:", "=", "category", "classes", "current"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_commitPackage",
smalltalk.method({
selector: "commitPackage",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selectedPackage"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
package_=_st((smalltalk.Package || Package))._named_(self["@selectedPackage"]);
package_;
_st([_st((smalltalk.Exporter || Exporter)).__minus_gt(_st(_st(_st(_st(package_)._commitPathJs()).__comma("/")).__comma(self["@selectedPackage"])).__comma(".js")),_st((smalltalk.StrippedExporter || StrippedExporter)).__minus_gt(_st(_st(_st(_st(package_)._commitPathJs()).__comma("/")).__comma(self["@selectedPackage"])).__comma(".deploy.js")),_st((smalltalk.ChunkExporter || ChunkExporter)).__minus_gt(_st(_st(_st(_st(package_)._commitPathSt()).__comma("/")).__comma(self["@selectedPackage"])).__comma(".st"))])._do_((function(commitStrategy){
var fileContents;
return smalltalk.withContext(function($ctx2) {fileContents=_st(_st(_st(commitStrategy)._key())._new())._exportPackage_(self["@selectedPackage"]);
fileContents;
return _st(self)._ajaxPutAt_data_(_st(commitStrategy)._value(),fileContents);
}, function($ctx2) {$ctx2.fillBlock({commitStrategy:commitStrategy,fileContents:fileContents},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"commitPackage",{},smalltalk.Browser)})},
messageSends: ["ifNotNil:", "named:", "do:", "exportPackage:", "new", "key", "ajaxPutAt:data:", "value", "->", ",", "commitPathJs", "commitPathSt"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_compile",
smalltalk.method({
selector: "compile",
fn: function (){
var self=this;
var currentEditLine;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
_st(self)._disableSaveButton();
currentEditLine=_st(_st(self["@sourceArea"])._editor())._getCursor();
$1=_st(self["@selectedTab"]).__eq(smalltalk.symbolFor("comment"));
if(smalltalk.assert($1)){
$2=self["@selectedClass"];
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
_st(self)._compileClassComment();
};
} else {
$3=_st(_st(self["@selectedProtocol"])._notNil())._or_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self["@selectedMethod"])._notNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($3)){
_st(self)._compileMethodDefinition();
} else {
_st(self)._compileDefinition();
};
};
_st(_st(self["@sourceArea"])._editor())._setCursor_(currentEditLine);
return self}, function($ctx1) {$ctx1.fill(self,"compile",{currentEditLine:currentEditLine},smalltalk.Browser)})},
messageSends: ["disableSaveButton", "getCursor", "editor", "ifTrue:ifFalse:", "ifNotNil:", "compileClassComment", "ifFalse:ifTrue:", "compileDefinition", "compileMethodDefinition", "or:", "notNil", "=", "setCursor:"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_compileClassComment",
smalltalk.method({
selector: "compileClassComment",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@selectedClass"])._comment_(_st(self["@sourceArea"])._val());
return self}, function($ctx1) {$ctx1.fill(self,"compileClassComment",{},smalltalk.Browser)})},
messageSends: ["comment:", "val"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_compileDefinition",
smalltalk.method({
selector: "compileDefinition",
fn: function (){
var self=this;
var newClass;
return smalltalk.withContext(function($ctx1) { var $1,$2;
newClass=_st(_st((smalltalk.Compiler || Compiler))._new())._evaluateExpression_(_st(self["@sourceArea"])._val());
$1=self;
_st($1)._resetClassesList();
_st($1)._updateCategoriesList();
$2=_st($1)._updateClassesList();
_st(self)._selectClass_(newClass);
return self}, function($ctx1) {$ctx1.fill(self,"compileDefinition",{newClass:newClass},smalltalk.Browser)})},
messageSends: ["evaluateExpression:", "val", "new", "resetClassesList", "updateCategoriesList", "updateClassesList", "selectClass:"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_compileMethodDefinition",
smalltalk.method({
selector: "compileMethodDefinition",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@selectedTab"]).__eq(smalltalk.symbolFor("instance"));
if(smalltalk.assert($1)){
_st(self)._compileMethodDefinitionFor_(self["@selectedClass"]);
} else {
_st(self)._compileMethodDefinitionFor_(_st(self["@selectedClass"])._class());
};
return self}, function($ctx1) {$ctx1.fill(self,"compileMethodDefinition",{},smalltalk.Browser)})},
messageSends: ["ifTrue:ifFalse:", "compileMethodDefinitionFor:", "class", "="]}),
smalltalk.Browser);

smalltalk.addMethod(
"_compileMethodDefinitionFor_",
smalltalk.method({
selector: "compileMethodDefinitionFor:",
fn: function (aClass){
var self=this;
var compiler,method,source,node;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6;
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
compiler=_st((smalltalk.Compiler || Compiler))._new();
_st(compiler)._source_(source);
node=_st(compiler)._parse_(source);
$2=_st(node)._isParseFailure();
if(smalltalk.assert($2)){
$3=_st(window)._alert_(_st(_st(_st("PARSE ERROR: ").__comma(_st(node)._reason())).__comma(", position: ")).__comma(_st(_st(node)._position())._asString()));
return $3;
};
_st(compiler)._currentClass_(aClass);
method=_st(compiler)._eval_(_st(compiler)._compileNode_(node));
_st(_st(compiler)._unknownVariables())._do_((function(each){
return smalltalk.withContext(function($ctx2) {$4=_st(window)._at_(each);
if(($receiver = $4) == nil || $receiver == undefined){
$5=_st(window)._confirm_(_st(_st("Declare '").__comma(each)).__comma("' as instance variable?"));
if(smalltalk.assert($5)){
_st(self)._addInstanceVariableNamed_toClass_(each,aClass);
$6=_st(self)._compileMethodDefinitionFor_(aClass);
throw $early=[$6];
};
} else {
return $4;
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(_st((smalltalk.ClassBuilder || ClassBuilder))._new())._installMethod_forClass_category_(method,aClass,self["@selectedProtocol"]);
_st(self)._updateMethodsList();
_st(self)._selectMethod_(method);
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"compileMethodDefinitionFor:",{aClass:aClass,compiler:compiler,method:method,source:source,node:node},smalltalk.Browser)})},
messageSends: ["val", "ifNil:", "category", "new", "source:", "parse:", "ifTrue:", "alert:", ",", "asString", "position", "reason", "isParseFailure", "currentClass:", "eval:", "compileNode:", "do:", "addInstanceVariableNamed:toClass:", "compileMethodDefinitionFor:", "confirm:", "at:", "unknownVariables", "installMethod:forClass:category:", "updateMethodsList", "selectMethod:"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_copyClass",
smalltalk.method({
selector: "copyClass",
fn: function (){
var self=this;
var className;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
className=_st(window)._prompt_("Copy class");
$1=_st(_st(className)._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) {return _st(className)._notEmpty();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
_st(_st((smalltalk.ClassBuilder || ClassBuilder))._new())._copyClass_named_(_st(self)._selectedClass(),className);
$2=self;
_st($2)._resetClassesList();
$3=_st($2)._updateClassesList();
$3;
_st(self)._selectClass_(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._at_(className));
};
return self}, function($ctx1) {$ctx1.fill(self,"copyClass",{className:className},smalltalk.Browser)})},
messageSends: ["prompt:", "ifTrue:", "copyClass:named:", "selectedClass", "new", "resetClassesList", "updateClassesList", "selectClass:", "at:", "current", "and:", "notEmpty", "notNil"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_declarationSource",
smalltalk.method({
selector: "declarationSource",
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
}, function($ctx1) {$ctx1.fill(self,"declarationSource",{},smalltalk.Browser)})},
messageSends: ["ifTrue:ifFalse:", "classDeclarationSource", "metaclassDeclarationSource", "="]}),
smalltalk.Browser);

smalltalk.addMethod(
"_disableSaveButton",
smalltalk.method({
selector: "disableSaveButton",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@saveButton"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self["@saveButton"])._at_put_("disabled",true);
};
self["@unsavedChanges"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"disableSaveButton",{},smalltalk.Browser)})},
messageSends: ["ifNotNil:", "at:put:"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_dummyMethodSource",
smalltalk.method({
selector: "dummyMethodSource",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "messageSelectorAndArgumentNames\x0a\x09\x22comment stating purpose of message\x22\x0a\x0a\x09| temporary variable names |\x0a\x09statements";
}, function($ctx1) {$ctx1.fill(self,"dummyMethodSource",{},smalltalk.Browser)})},
messageSends: []}),
smalltalk.Browser);

smalltalk.addMethod(
"_handleSourceAreaKeyDown_",
smalltalk.method({
selector: "handleSourceAreaKeyDown:",
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
return self}, function($ctx1) {$ctx1.fill(self,"handleSourceAreaKeyDown:",{anEvent:anEvent},smalltalk.Browser)})},
messageSends: []}),
smalltalk.Browser);

smalltalk.addMethod(
"_hideClassButtons",
smalltalk.method({
selector: "hideClassButtons",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@classButtons"])._asJQuery())._hide();
return self}, function($ctx1) {$ctx1.fill(self,"hideClassButtons",{},smalltalk.Browser)})},
messageSends: ["hide", "asJQuery"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_hideMethodButtons",
smalltalk.method({
selector: "hideMethodButtons",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@methodButtons"])._asJQuery())._hide();
return self}, function($ctx1) {$ctx1.fill(self,"hideMethodButtons",{},smalltalk.Browser)})},
messageSends: ["hide", "asJQuery"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.TabWidget.fn.prototype._initialize.apply(_st(self), []);
self["@selectedTab"]=smalltalk.symbolFor("instance");
self["@selectedPackage"]=_st(_st(self)._packages())._first();
self["@unsavedChanges"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Browser)})},
messageSends: ["initialize", "first", "packages"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@selectedClass"];
if(($receiver = $2) == nil || $receiver == undefined){
$1="Browser (nil)";
} else {
$1=_st("Browser: ").__comma(_st(self["@selectedClass"])._name());
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.Browser)})},
messageSends: ["ifNil:ifNotNil:", ",", "name"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_metaclassDeclarationSource",
smalltalk.method({
selector: "metaclassDeclarationSource",
fn: function (){
var self=this;
var stream;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
stream=_st("")._writeStream();
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
return smalltalk.withContext(function($ctx2) {return _st(stream)._nextPutAll_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return _st(stream)._nextPutAll_(" ");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(stream)._nextPutAll_("'");
};
$4=_st(stream)._contents();
return $4;
}, function($ctx1) {$ctx1.fill(self,"metaclassDeclarationSource",{stream:stream},smalltalk.Browser)})},
messageSends: ["writeStream", "ifNotNil:", "nextPutAll:", "asString", "do:separatedBy:", "instanceVariableNames", "class", "contents"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_methodSource",
smalltalk.method({
selector: "methodSource",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@selectedMethod"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self)._dummyMethodSource();
} else {
$1=_st(self["@selectedMethod"])._source();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodSource",{},smalltalk.Browser)})},
messageSends: ["ifNil:ifNotNil:", "dummyMethodSource", "source"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_methods",
smalltalk.method({
selector: "methods",
fn: function (){
var self=this;
var klass;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$6,$7,$5,$4;
$1=_st(self["@selectedTab"]).__eq(smalltalk.symbolFor("comment"));
if(smalltalk.assert($1)){
return [];
};
$2=self["@selectedClass"];
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
$3=_st(self["@selectedTab"]).__eq(smalltalk.symbolFor("instance"));
if(smalltalk.assert($3)){
klass=self["@selectedClass"];
} else {
klass=_st(self["@selectedClass"])._class();
};
klass;
};
$6=self["@selectedProtocol"];
if(($receiver = $6) == nil || $receiver == undefined){
$7=klass;
if(($receiver = $7) == nil || $receiver == undefined){
$5=[];
} else {
$5=_st(_st(klass)._methodDictionary())._values();
};
} else {
$5=_st(_st(_st(klass)._methodDictionary())._values())._select_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(each)._category()).__eq(self["@selectedProtocol"]);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
};
$4=_st($5)._sort_((function(a,b){
return smalltalk.withContext(function($ctx2) {return _st(_st(a)._selector()).__lt(_st(b)._selector());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}));
return $4;
}, function($ctx1) {$ctx1.fill(self,"methods",{klass:klass},smalltalk.Browser)})},
messageSends: ["ifTrue:", "=", "ifNotNil:", "ifTrue:ifFalse:", "class", "sort:", "<", "selector", "ifNil:ifNotNil:", "values", "methodDictionary", "select:", "category"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
fn: function (){
var self=this;
var packages;
return smalltalk.withContext(function($ctx1) { var $1,$2;
packages=_st((smalltalk.Array || Array))._new();
_st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._classes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {$1=_st(packages)._includes_(_st(each)._category());
if(! smalltalk.assert($1)){
return _st(packages)._add_(_st(each)._category());
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=_st(packages)._sort();
return $2;
}, function($ctx1) {$ctx1.fill(self,"packages",{packages:packages},smalltalk.Browser)})},
messageSends: ["new", "do:", "ifFalse:", "add:", "category", "includes:", "classes", "current", "sort"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_protocols",
smalltalk.method({
selector: "protocols",
fn: function (){
var self=this;
var klass;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7;
$1=self["@selectedClass"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
$2=_st(self["@selectedTab"]).__eq(smalltalk.symbolFor("comment"));
if(smalltalk.assert($2)){
return [];
};
$3=_st(self["@selectedTab"]).__eq(smalltalk.symbolFor("instance"));
if(smalltalk.assert($3)){
klass=self["@selectedClass"];
} else {
klass=_st(self["@selectedClass"])._class();
};
klass;
$4=_st(_st(klass)._methodDictionary())._isEmpty();
if(smalltalk.assert($4)){
$5=_st((smalltalk.Array || Array))._with_("not yet classified");
return $5;
};
$6=_st(klass)._protocols();
return $6;
};
$7=_st((smalltalk.Array || Array))._new();
return $7;
}, function($ctx1) {$ctx1.fill(self,"protocols",{klass:klass},smalltalk.Browser)})},
messageSends: ["ifNotNil:", "ifTrue:", "=", "ifTrue:ifFalse:", "class", "with:", "isEmpty", "methodDictionary", "protocols", "new"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_removeClass",
smalltalk.method({
selector: "removeClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(window)._confirm_(_st(_st("Do you really want to remove ").__comma(_st(self["@selectedClass"])._name())).__comma("?"));
if(smalltalk.assert($1)){
_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._removeClass_(self["@selectedClass"]);
_st(self)._resetClassesList();
_st(self)._selectClass_(nil);
};
return self}, function($ctx1) {$ctx1.fill(self,"removeClass",{},smalltalk.Browser)})},
messageSends: ["ifTrue:", "removeClass:", "current", "resetClassesList", "selectClass:", "confirm:", ",", "name"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_removeMethod",
smalltalk.method({
selector: "removeMethod",
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
return self}, function($ctx1) {$ctx1.fill(self,"removeMethod",{},smalltalk.Browser)})},
messageSends: ["ifTrue:", "ifTrue:ifFalse:", "removeCompiledMethod:", "class", "=", "selectMethod:", "confirm:", ",", "selector", "cancelChanges"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_removePackage",
smalltalk.method({
selector: "removePackage",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(window)._confirm_(_st(_st("Do you really want to remove the whole package ").__comma(self["@selectedPackage"])).__comma(" with all its classes?"));
if(smalltalk.assert($1)){
_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._removePackage_(self["@selectedPackage"]);
_st(self)._updateCategoriesList();
};
return self}, function($ctx1) {$ctx1.fill(self,"removePackage",{},smalltalk.Browser)})},
messageSends: ["ifTrue:", "removePackage:", "current", "updateCategoriesList", "confirm:", ","]}),
smalltalk.Browser);

smalltalk.addMethod(
"_renameClass",
smalltalk.method({
selector: "renameClass",
fn: function (){
var self=this;
var newName;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
newName=_st(window)._prompt_(_st("Rename class ").__comma(_st(self["@selectedClass"])._name()));
$1=_st(_st(newName)._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) {return _st(newName)._notEmpty();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
_st(self["@selectedClass"])._rename_(newName);
$2=self;
_st($2)._updateClassesList();
$3=_st($2)._updateSourceAndButtons();
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"renameClass",{newName:newName},smalltalk.Browser)})},
messageSends: ["prompt:", ",", "name", "ifTrue:", "rename:", "updateClassesList", "updateSourceAndButtons", "and:", "notEmpty", "notNil"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_renamePackage",
smalltalk.method({
selector: "renamePackage",
fn: function (){
var self=this;
var newName;
return smalltalk.withContext(function($ctx1) { var $1,$2;
newName=_st(window)._prompt_(_st("Rename package ").__comma(self["@selectedPackage"]));
$1=newName;
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
$2=_st(newName)._notEmpty();
if(smalltalk.assert($2)){
_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._renamePackage_to_(self["@selectedPackage"],newName);
_st(self)._updateCategoriesList();
};
};
return self}, function($ctx1) {$ctx1.fill(self,"renamePackage",{newName:newName},smalltalk.Browser)})},
messageSends: ["prompt:", ",", "ifNotNil:", "ifTrue:", "renamePackage:to:", "current", "updateCategoriesList", "notEmpty"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_renderBottomPanelOn_",
smalltalk.method({
selector: "renderBottomPanelOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._div();
_st($1)._class_("amber_sourceCode");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {self["@sourceArea"]=_st((smalltalk.SourceArea || SourceArea))._new();
self["@sourceArea"];
_st(self["@sourceArea"])._renderOn_(html);
_st(self["@sourceArea"])._onKeyDown_((function(e){
return smalltalk.withContext(function($ctx3) {return _st(self)._handleSourceAreaKeyDown_(e);
}, function($ctx3) {$ctx3.fillBlock({e:e},$ctx1)})}));
return _st(self["@sourceArea"])._onKeyUp_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._updateStatus();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderBottomPanelOn:",{html:html},smalltalk.Browser)})},
messageSends: ["class:", "div", "with:", "new", "renderOn:", "onKeyDown:", "handleSourceAreaKeyDown:", "onKeyUp:", "updateStatus"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self;
_st($1)._renderTopPanelOn_(html);
_st($1)._renderTabsOn_(html);
$2=_st($1)._renderBottomPanelOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderBoxOn:",{html:html},smalltalk.Browser)})},
messageSends: ["renderTopPanelOn:", "renderTabsOn:", "renderBottomPanelOn:"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$5,$6,$7,$8,$9,$10,$4;
self["@saveButton"]=_st(html)._button();
$1=self["@saveButton"];
_st($1)._with_("Save");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._compile();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@methodButtons"]=_st(html)._span();
self["@classButtons"]=_st(html)._span();
$3=_st(html)._div();
_st($3)._class_("right");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx2) {$5=_st(html)._button();
_st($5)._with_("DoIt");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self["@sourceArea"])._doIt();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$6;
$7=_st(html)._button();
_st($7)._with_("PrintIt");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self["@sourceArea"])._printIt();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$8;
$9=_st(html)._button();
_st($9)._with_("InspectIt");
$10=_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self["@sourceArea"])._inspectIt();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $10;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self)._updateSourceAndButtons();
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},smalltalk.Browser)})},
messageSends: ["button", "with:", "onClick:", "compile", "span", "class:", "div", "doIt", "printIt", "inspectIt", "updateSourceAndButtons"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_renderTabsOn_",
smalltalk.method({
selector: "renderTabsOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@tabsList"]=_st(_st(html)._ul())._class_("amber_tabs amber_browser");
_st(self)._updateTabsList();
return self}, function($ctx1) {$ctx1.fill(self,"renderTabsOn:",{html:html},smalltalk.Browser)})},
messageSends: ["class:", "ul", "updateTabsList"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_renderTopPanelOn_",
smalltalk.method({
selector: "renderTopPanelOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$5,$6,$7,$8,$9,$10,$4,$11,$12,$2;
$1=_st(html)._div();
_st($1)._class_("top");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {self["@packagesList"]=_st(_st(html)._ul())._class_("amber_column browser packages");
self["@packagesList"];
$3=_st(html)._div();
_st($3)._class_("amber_packagesButtons");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {$5=_st(html)._button();
_st($5)._title_("Commit classes in this package to disk");
_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {return _st(self)._commitPackage();
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
$6=_st($5)._with_("Commit");
$6;
$7=_st(html)._button();
_st($7)._title_("Rename package");
_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {return _st(self)._renamePackage();
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
$8=_st($7)._with_("Rename");
$8;
$9=_st(html)._button();
_st($9)._title_("Remove this package from the system");
_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {return _st(self)._removePackage();
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
$10=_st($9)._with_("Remove");
return $10;
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$4;
self["@classesList"]=_st((smalltalk.ClassesList || ClassesList))._on_(self);
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
messageSends: ["class:", "div", "with:", "ul", "title:", "button", "onClick:", "commitPackage", "renamePackage", "removePackage", "on:", "renderOn:", "updateCategoriesList", "updateClassesList", "updateProtocolsList", "updateMethodsList"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_resetClassesList",
smalltalk.method({
selector: "resetClassesList",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@classesList"])._resetNodes();
return self}, function($ctx1) {$ctx1.fill(self,"resetClassesList",{},smalltalk.Browser)})},
messageSends: ["resetNodes"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_search_",
smalltalk.method({
selector: "search:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(self)._cancelChanges();
if(smalltalk.assert($1)){
searchedClass=_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._at_(aString);
searchedClass;
$2=_st(searchedClass)._isClass();
if(smalltalk.assert($2)){
_st(_st(self)._class())._openOn_(searchedClass);
} else {
_st(self)._searchReferencesOf_(aString);
};
};
return self}, function($ctx1) {$ctx1.fill(self,"search:",{aString:aString},smalltalk.Browser)})},
messageSends: ["ifTrue:", "at:", "current", "ifTrue:ifFalse:", "openOn:", "class", "searchReferencesOf:", "isClass", "cancelChanges"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_searchClassReferences",
smalltalk.method({
selector: "searchClassReferences",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((smalltalk.ReferencesBrowser || ReferencesBrowser))._search_(_st(self["@selectedClass"])._name());
return self}, function($ctx1) {$ctx1.fill(self,"searchClassReferences",{},smalltalk.Browser)})},
messageSends: ["search:", "name"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_searchReferencesOf_",
smalltalk.method({
selector: "searchReferencesOf:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((smalltalk.ReferencesBrowser || ReferencesBrowser))._search_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"searchReferencesOf:",{aString:aString},smalltalk.Browser)})},
messageSends: ["search:"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectCategory_",
smalltalk.method({
selector: "selectCategory:",
fn: function (aCategory){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=_st(self)._cancelChanges();
if(smalltalk.assert($1)){
self["@selectedPackage"]=aCategory;
self["@selectedPackage"];
self["@selectedMethod"]=nil;
self["@selectedProtocol"]=self["@selectedMethod"];
self["@selectedClass"]=self["@selectedProtocol"];
self["@selectedClass"];
_st(self)._resetClassesList();
$2=self;
_st($2)._updateCategoriesList();
_st($2)._updateClassesList();
_st($2)._updateProtocolsList();
_st($2)._updateMethodsList();
$3=_st($2)._updateSourceAndButtons();
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"selectCategory:",{aCategory:aCategory},smalltalk.Browser)})},
messageSends: ["ifTrue:", "resetClassesList", "updateCategoriesList", "updateClassesList", "updateProtocolsList", "updateMethodsList", "updateSourceAndButtons", "cancelChanges"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectClass_",
smalltalk.method({
selector: "selectClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=_st(self)._cancelChanges();
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
messageSends: ["ifTrue:", "updateClassesList", "updateProtocolsList", "updateMethodsList", "updateSourceAndButtons", "cancelChanges"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectMethod_",
smalltalk.method({
selector: "selectMethod:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=_st(self)._cancelChanges();
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
messageSends: ["ifTrue:", "updateProtocolsList", "updateMethodsList", "updateSourceAndButtons", "cancelChanges"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectProtocol_",
smalltalk.method({
selector: "selectProtocol:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=_st(self)._cancelChanges();
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
messageSends: ["ifTrue:", "updateProtocolsList", "updateMethodsList", "updateSourceAndButtons", "cancelChanges"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectTab_",
smalltalk.method({
selector: "selectTab:",
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
return self}, function($ctx1) {$ctx1.fill(self,"selectTab:",{aString:aString},smalltalk.Browser)})},
messageSends: ["ifTrue:", "selectProtocol:", "updateTabsList", "cancelChanges"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectedClass",
smalltalk.method({
selector: "selectedClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selectedClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedClass",{},smalltalk.Browser)})},
messageSends: []}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectedPackage",
smalltalk.method({
selector: "selectedPackage",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selectedPackage"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedPackage",{},smalltalk.Browser)})},
messageSends: []}),
smalltalk.Browser);

smalltalk.addMethod(
"_setMethodProtocol_",
smalltalk.method({
selector: "setMethodProtocol:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
$1=_st(self)._cancelChanges();
if(smalltalk.assert($1)){
$2=_st(_st(self)._protocols())._includes_(aString);
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
_st(self)._addNewProtocol();
};
};
return self}, function($ctx1) {$ctx1.fill(self,"setMethodProtocol:",{aString:aString},smalltalk.Browser)})},
messageSends: ["ifTrue:", "ifFalse:ifTrue:", "addNewProtocol", "category:", "updateProtocolsList", "updateMethodsList", "updateSourceAndButtons", "includes:", "protocols", "cancelChanges"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_showClassButtons",
smalltalk.method({
selector: "showClassButtons",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@classButtons"])._asJQuery())._show();
return self}, function($ctx1) {$ctx1.fill(self,"showClassButtons",{},smalltalk.Browser)})},
messageSends: ["show", "asJQuery"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_showMethodButtons",
smalltalk.method({
selector: "showMethodButtons",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@methodButtons"])._asJQuery())._show();
return self}, function($ctx1) {$ctx1.fill(self,"showMethodButtons",{},smalltalk.Browser)})},
messageSends: ["show", "asJQuery"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$2,$5,$4;
$1=_st(self["@selectedTab"]).__eq(smalltalk.symbolFor("comment"));
if(! smalltalk.assert($1)){
$3=_st(_st(self["@selectedProtocol"])._notNil())._or_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self["@selectedMethod"])._notNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($3)){
$2=_st(self)._methodSource();
} else {
$2=_st(self)._declarationSource();
};
return $2;
};
$5=self["@selectedClass"];
if(($receiver = $5) == nil || $receiver == undefined){
$4="";
} else {
$4=_st(self)._classCommentSource();
};
return $4;
}, function($ctx1) {$ctx1.fill(self,"source",{},smalltalk.Browser)})},
messageSends: ["ifFalse:", "ifFalse:ifTrue:", "declarationSource", "methodSource", "or:", "notNil", "=", "ifNil:ifNotNil:", "classCommentSource"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateCategoriesList",
smalltalk.method({
selector: "updateCategoriesList",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
_st(self["@packagesList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._packages())._do_((function(each){
var li,label;
return smalltalk.withContext(function($ctx3) {$1=_st(each)._isEmpty();
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
return smalltalk.withContext(function($ctx4) {return _st(self)._selectCategory_(each);
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
return $4;
}, function($ctx3) {$ctx3.fillBlock({each:each,li:li,label:label},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateCategoriesList",{},smalltalk.Browser)})},
messageSends: ["contents:", "do:", "ifTrue:ifFalse:", "isEmpty", "li", "ifTrue:", "class:", "=", "with:", "onClick:", "selectCategory:", "packages"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateClassesList",
smalltalk.method({
selector: "updateClassesList",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.TabManager || TabManager))._current())._update();
_st(self["@classesList"])._updateNodes();
return self}, function($ctx1) {$ctx1.fill(self,"updateClassesList",{},smalltalk.Browser)})},
messageSends: ["update", "current", "updateNodes"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateMethodsList",
smalltalk.method({
selector: "updateMethodsList",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
_st(self["@methodsList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._methods())._do_((function(each){
var li;
return smalltalk.withContext(function($ctx3) {li=_st(html)._li();
li;
$1=_st(self["@selectedMethod"]).__eq(each);
if(smalltalk.assert($1)){
_st(li)._class_("selected");
};
$2=li;
_st($2)._with_(_st(each)._selector());
$3=_st($2)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {return _st(self)._selectMethod_(each);
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
return $3;
}, function($ctx3) {$ctx3.fillBlock({each:each,li:li},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateMethodsList",{},smalltalk.Browser)})},
messageSends: ["contents:", "do:", "li", "ifTrue:", "class:", "=", "with:", "selector", "onClick:", "selectMethod:", "methods"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateProtocolsList",
smalltalk.method({
selector: "updateProtocolsList",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
_st(self["@protocolsList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._protocols())._do_((function(each){
var li;
return smalltalk.withContext(function($ctx3) {li=_st(html)._li();
li;
$1=_st(self["@selectedProtocol"]).__eq(each);
if(smalltalk.assert($1)){
_st(li)._class_("selected");
};
$2=li;
_st($2)._with_(each);
$3=_st($2)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {return _st(self)._selectProtocol_(each);
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
return $3;
}, function($ctx3) {$ctx3.fillBlock({each:each,li:li},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateProtocolsList",{},smalltalk.Browser)})},
messageSends: ["contents:", "do:", "li", "ifTrue:", "class:", "=", "with:", "onClick:", "selectProtocol:", "protocols"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateSourceAndButtons",
smalltalk.method({
selector: "updateSourceAndButtons",
fn: function (){
var self=this;
var currentProtocol;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$15,$16,$17,$18,$19,$20,$14,$21,$22,$24,$25,$26,$27,$23,$28,$29;
_st(self)._disableSaveButton();
_st(self["@classButtons"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {$1=_st(html)._button();
_st($1)._title_("Create a new class");
_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._addNewClass();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$2=_st($1)._with_("New class");
$2;
$3=_st(html)._button();
_st($3)._with_("Rename class");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._renameClass();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$4;
$5=_st(html)._button();
_st($5)._with_("Copy class");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._copyClass();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$6;
$7=_st(html)._button();
_st($7)._with_("Remove class");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._removeClass();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$8;
$9=_st(html)._button();
_st($9)._with_("References");
$10=_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._searchClassReferences();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $10;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
_st(self["@methodButtons"])._contents_((function(html){
var protocolSelect,referencesSelect;
return smalltalk.withContext(function($ctx2) {$11=_st(html)._button();
_st($11)._with_("Remove method");
$12=_st($11)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._removeMethod();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$12;
protocolSelect=_st(html)._select();
protocolSelect;
$13=protocolSelect;
_st($13)._onChange_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._setMethodProtocol_(_st(_st(protocolSelect)._asJQuery())._val());
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$14=_st($13)._with_((function(){
return smalltalk.withContext(function($ctx3) {$15=_st(html)._option();
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
return smalltalk.withContext(function($ctx4) {return _st(self["@selectedMethod"])._notNil();
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
if(smalltalk.assert($19)){
currentProtocol=_st(self["@selectedMethod"])._category();
currentProtocol;
};
return _st(_st(self)._protocols())._do_((function(each){
var option;
return smalltalk.withContext(function($ctx4) {option=_st(_st(html)._option())._with_(each);
option;
$20=_st(currentProtocol).__eq(each);
if(smalltalk.assert($20)){
return _st(option)._at_put_("selected","selected");
};
}, function($ctx4) {$ctx4.fillBlock({each:each,option:option},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$14;
$21=_st(self["@selectedMethod"])._isNil();
if(! smalltalk.assert($21)){
referencesSelect=_st(html)._select();
referencesSelect;
$22=referencesSelect;
_st($22)._onChange_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._searchReferencesOf_(_st(_st(referencesSelect)._asJQuery())._val());
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$23=_st($22)._with_((function(){
var option;
return smalltalk.withContext(function($ctx3) {$24=_st(html)._option();
_st($24)._with_("References");
_st($24)._at_put_("disabled","disabled");
$25=_st($24)._at_put_("selected","selected");
$25;
$26=_st(html)._option();
_st($26)._class_("important");
$27=_st($26)._with_(_st(self["@selectedMethod"])._selector());
$27;
return _st(_st(_st(self["@selectedMethod"])._messageSends())._sorted())._do_((function(each){
return smalltalk.withContext(function($ctx4) {return _st(_st(html)._option())._with_(each);
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({option:option},$ctx1)})}));
return $23;
};
}, function($ctx2) {$ctx2.fillBlock({html:html,protocolSelect:protocolSelect,referencesSelect:referencesSelect},$ctx1)})}));
$28=_st(self["@selectedMethod"])._isNil();
if(smalltalk.assert($28)){
_st(self)._hideMethodButtons();
$29=_st(_st(self["@selectedClass"])._isNil())._or_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self["@selectedProtocol"])._notNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($29)){
_st(self)._hideClassButtons();
} else {
_st(self)._showClassButtons();
};
} else {
_st(self)._hideClassButtons();
_st(self)._showMethodButtons();
};
_st(self["@sourceArea"])._val_(_st(self)._source());
return self}, function($ctx1) {$ctx1.fill(self,"updateSourceAndButtons",{currentProtocol:currentProtocol},smalltalk.Browser)})},
messageSends: ["disableSaveButton", "contents:", "title:", "button", "onClick:", "addNewClass", "with:", "renameClass", "copyClass", "removeClass", "searchClassReferences", "removeMethod", "select", "onChange:", "setMethodProtocol:", "val", "asJQuery", "option", "at:put:", "class:", "ifTrue:", "category", "and:", "notNil", "isNil", "do:", "=", "protocols", "ifFalse:", "searchReferencesOf:", "selector", "sorted", "messageSends", "ifTrue:ifFalse:", "hideMethodButtons", "hideClassButtons", "showClassButtons", "or:", "showMethodButtons", "val:", "source"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateStatus",
smalltalk.method({
selector: "updateStatus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=_st(_st(self["@sourceArea"])._val()).__eq(_st(self)._source());
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
messageSends: ["ifTrue:ifFalse:", "ifNotNil:", "at:put:", "removeAt:", "=", "source", "val"]}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateTabsList",
smalltalk.method({
selector: "updateTabsList",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15;
_st(self["@tabsList"])._contents_((function(html){
var li;
return smalltalk.withContext(function($ctx2) {li=_st(html)._li();
li;
$1=_st(self["@selectedTab"]).__eq(smalltalk.symbolFor("instance"));
if(smalltalk.assert($1)){
_st(li)._class_("selected");
};
$2=li;
_st($2)._with_((function(){
return smalltalk.withContext(function($ctx3) {_st(_st(html)._span())._class_("ltab");
$3=_st(html)._span();
_st($3)._class_("mtab");
$4=_st($3)._with_("Instance");
$4;
return _st(_st(html)._span())._class_("rtab");
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$5=_st($2)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._selectTab_(smalltalk.symbolFor("instance"));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$5;
li=_st(html)._li();
li;
$6=_st(self["@selectedTab"]).__eq(smalltalk.symbolFor("class"));
if(smalltalk.assert($6)){
_st(li)._class_("selected");
};
$7=li;
_st($7)._with_((function(){
return smalltalk.withContext(function($ctx3) {_st(_st(html)._span())._class_("ltab");
$8=_st(html)._span();
_st($8)._class_("mtab");
$9=_st($8)._with_("Class");
$9;
return _st(_st(html)._span())._class_("rtab");
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$10=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._selectTab_(smalltalk.symbolFor("class"));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$10;
li=_st(html)._li();
li;
$11=_st(self["@selectedTab"]).__eq(smalltalk.symbolFor("comment"));
if(smalltalk.assert($11)){
_st(li)._class_("selected");
};
$12=li;
_st($12)._with_((function(){
return smalltalk.withContext(function($ctx3) {_st(_st(html)._span())._class_("ltab");
$13=_st(html)._span();
_st($13)._class_("mtab");
$14=_st($13)._with_("Comment");
$14;
return _st(_st(html)._span())._class_("rtab");
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$15=_st($12)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._selectTab_(smalltalk.symbolFor("comment"));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $15;
}, function($ctx2) {$ctx2.fillBlock({html:html,li:li},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateTabsList",{},smalltalk.Browser)})},
messageSends: ["contents:", "li", "ifTrue:", "class:", "=", "with:", "span", "onClick:", "selectTab:"]}),
smalltalk.Browser);


smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._new())._open();
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.Browser.klass)})},
messageSends: ["open", "new"]}),
smalltalk.Browser.klass);

smalltalk.addMethod(
"_openOn_",
smalltalk.method({
selector: "openOn:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._open();
_st($2)._selectCategory_(_st(aClass)._category());
$3=_st($2)._selectClass_(aClass);
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"openOn:",{aClass:aClass},smalltalk.Browser.klass)})},
messageSends: ["open", "new", "selectCategory:", "category", "selectClass:"]}),
smalltalk.Browser.klass);


smalltalk.addClass('Debugger', smalltalk.TabWidget, ['error', 'selectedContext', 'sourceArea', 'ul', 'ul2', 'inspector', 'saveButton', 'unsavedChanges', 'selectedVariable', 'selectedVariableName', 'inspectButton'], 'IDE');
smalltalk.addMethod(
"_allVariables",
smalltalk.method({
selector: "allVariables",
fn: function (){
var self=this;
var all;
return smalltalk.withContext(function($ctx1) { var $1;
all=_st((smalltalk.Dictionary || Dictionary))._new();
_st(_st(_st(_st(self)._receiver())._class())._allInstanceVariableNames())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(all)._at_put_(each,_st(_st(self)._receiver())._instVarAt_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(_st(self["@selectedContext"])._locals())._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {return _st(all)._at_put_(key,value);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
$1=all;
return $1;
}, function($ctx1) {$ctx1.fill(self,"allVariables",{all:all},smalltalk.Debugger)})},
messageSends: ["new", "do:", "at:put:", "instVarAt:", "receiver", "allInstanceVariableNames", "class", "keysAndValuesDo:", "locals"]}),
smalltalk.Debugger);

smalltalk.addMethod(
"_canBeClosed",
smalltalk.method({
selector: "canBeClosed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"canBeClosed",{},smalltalk.Debugger)})},
messageSends: []}),
smalltalk.Debugger);

smalltalk.addMethod(
"_error",
smalltalk.method({
selector: "error",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@error"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"error",{},smalltalk.Debugger)})},
messageSends: []}),
smalltalk.Debugger);

smalltalk.addMethod(
"_error_",
smalltalk.method({
selector: "error:",
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@error"]=anError;
return self}, function($ctx1) {$ctx1.fill(self,"error:",{anError:anError},smalltalk.Debugger)})},
messageSends: []}),
smalltalk.Debugger);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.TabWidget.fn.prototype._initialize.apply(_st(self), []);
_st(self["@unsavedChanges"]).__eq(false);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Debugger)})},
messageSends: ["initialize", "="]}),
smalltalk.Debugger);

smalltalk.addMethod(
"_inspectSelectedVariable",
smalltalk.method({
selector: "inspectSelectedVariable",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@selectedVariable"])._inspect();
return self}, function($ctx1) {$ctx1.fill(self,"inspectSelectedVariable",{},smalltalk.Debugger)})},
messageSends: ["inspect"]}),
smalltalk.Debugger);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "[Debugger]";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.Debugger)})},
messageSends: []}),
smalltalk.Debugger);

smalltalk.addMethod(
"_method",
smalltalk.method({
selector: "method",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@selectedContext"])._method();
return $1;
}, function($ctx1) {$ctx1.fill(self,"method",{},smalltalk.Debugger)})},
messageSends: ["method"]}),
smalltalk.Debugger);

smalltalk.addMethod(
"_proceed",
smalltalk.method({
selector: "proceed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._close();
_st(_st(self["@selectedContext"])._receiver())._perform_withArguments_(_st(self["@selectedContext"])._selector(),_st(self["@selectedContext"])._temps());
return self}, function($ctx1) {$ctx1.fill(self,"proceed",{},smalltalk.Debugger)})},
messageSends: ["close", "perform:withArguments:", "selector", "temps", "receiver"]}),
smalltalk.Debugger);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@selectedContext"])._receiver();
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},smalltalk.Debugger)})},
messageSends: ["receiver"]}),
smalltalk.Debugger);

smalltalk.addMethod(
"_renderBottomPanelOn_",
smalltalk.method({
selector: "renderBottomPanelOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._div();
_st($1)._class_("amber_sourceCode debugger");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {self["@sourceArea"]=_st((smalltalk.SourceArea || SourceArea))._new();
self["@sourceArea"];
return _st(self["@sourceArea"])._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@ul2"]=_st(_st(html)._ul())._class_("amber_column debugger variables");
self["@inspector"]=_st(_st(html)._div())._class_("amber_column debugger inspector");
_st(self["@sourceArea"])._onKeyUp_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._updateStatus();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderBottomPanelOn:",{html:html},smalltalk.Debugger)})},
messageSends: ["class:", "div", "with:", "new", "renderOn:", "ul", "onKeyUp:", "updateStatus"]}),
smalltalk.Debugger);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self;
_st($1)._renderTopPanelOn_(html);
$2=_st($1)._renderBottomPanelOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderBoxOn:",{html:html},smalltalk.Debugger)})},
messageSends: ["renderTopPanelOn:", "renderBottomPanelOn:"]}),
smalltalk.Debugger);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16;
$1=_st(html)._button();
_st($1)._with_("Save");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._save();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@saveButton"]=$2;
$3=_st(html)._button();
_st($3)._with_("DoIt");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self["@sourceArea"])._doIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$5=_st(html)._button();
_st($5)._with_("PrintIt");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self["@sourceArea"])._printIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$7=_st(html)._button();
_st($7)._with_("InspectIt");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self["@sourceArea"])._inspectIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$9=_st(html)._button();
_st($9)._with_("Proceed");
$10=_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._proceed();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$11=_st(html)._button();
_st($11)._with_("Abandon");
$12=_st($11)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._close();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$13=_st(html)._button();
_st($13)._class_("amber_button debugger inspect");
_st($13)._with_("Inspect");
$14=_st($13)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._inspectSelectedVariable();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@inspectButton"]=$14;
$15=self;
_st($15)._updateSourceArea();
_st($15)._updateStatus();
_st($15)._updateVariablesList();
$16=_st($15)._updateInspector();
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},smalltalk.Debugger)})},
messageSends: ["with:", "button", "onClick:", "save", "doIt", "printIt", "inspectIt", "proceed", "close", "class:", "inspectSelectedVariable", "updateSourceArea", "updateStatus", "updateVariablesList", "updateInspector"]}),
smalltalk.Debugger);

smalltalk.addMethod(
"_renderContext_on_",
smalltalk.method({
selector: "renderContext:on:",
fn: function (aContext,html){
var self=this;
var li;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
li=_st(html)._li();
$1=_st(self["@selectedContext"]).__eq(aContext);
if(smalltalk.assert($1)){
_st(li)._class_("selected");
};
$2=li;
_st($2)._with_(_st(aContext)._asString());
$3=_st($2)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._selectContext_(aContext);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$4=_st(aContext)._outerContext();
if(($receiver = $4) == nil || $receiver == undefined){
$4;
} else {
_st(self)._renderContext_on_(_st(aContext)._outerContext(),html);
};
return self}, function($ctx1) {$ctx1.fill(self,"renderContext:on:",{aContext:aContext,html:html,li:li},smalltalk.Debugger)})},
messageSends: ["li", "ifTrue:", "class:", "=", "with:", "asString", "onClick:", "selectContext:", "ifNotNil:", "renderContext:on:", "outerContext"]}),
smalltalk.Debugger);

smalltalk.addMethod(
"_renderTopPanelOn_",
smalltalk.method({
selector: "renderTopPanelOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$5,$6,$2;
self["@selectedContext"]=_st(_st(self)._error())._context();
$1=_st(html)._div();
_st($1)._class_("top");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {$3=_st(html)._div();
_st($3)._class_("label");
$4=_st($3)._with_(_st(_st(self)._error())._messageText());
$4;
$5=_st(html)._ul();
_st($5)._class_("amber_column debugger contexts");
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._renderContext_on_(_st(_st(self)._error())._context(),html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
self["@ul"]=$6;
return self["@ul"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderTopPanelOn:",{html:html},smalltalk.Debugger)})},
messageSends: ["context", "error", "class:", "div", "with:", "messageText", "ul", "renderContext:on:"]}),
smalltalk.Debugger);

smalltalk.addMethod(
"_save",
smalltalk.method({
selector: "save",
fn: function (){
var self=this;
var protocol;
return smalltalk.withContext(function($ctx1) { protocol=_st(_st(_st(_st(_st(self["@selectedContext"])._receiver())._class())._methodDictionary())._at_(_st(self["@selectedContext"])._selector()))._category();
_st(_st(_st(self["@selectedContext"])._receiver())._class())._compile_category_(_st(self["@sourceArea"])._val(),protocol);
_st(self)._updateStatus();
return self}, function($ctx1) {$ctx1.fill(self,"save",{protocol:protocol},smalltalk.Debugger)})},
messageSends: ["category", "at:", "selector", "methodDictionary", "class", "receiver", "compile:category:", "val", "updateStatus"]}),
smalltalk.Debugger);

smalltalk.addMethod(
"_selectContext_",
smalltalk.method({
selector: "selectContext:",
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
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
messageSends: ["updateContextsList", "updateSourceArea", "updateInspector", "updateVariablesList", "updateStatus"]}),
smalltalk.Debugger);

smalltalk.addMethod(
"_selectVariable_named_",
smalltalk.method({
selector: "selectVariable:named:",
fn: function (anObject,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@selectedVariable"]=anObject;
self["@selectedVariableName"]=aString;
_st(self["@inspector"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {return _st(html)._with_(_st(anObject)._printString());
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
_st(self)._updateVariablesList();
return self}, function($ctx1) {$ctx1.fill(self,"selectVariable:named:",{anObject:anObject,aString:aString},smalltalk.Debugger)})},
messageSends: ["contents:", "with:", "printString", "updateVariablesList"]}),
smalltalk.Debugger);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
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
}, function($ctx1) {$ctx1.fill(self,"source",{},smalltalk.Debugger)})},
messageSends: ["ifNil:ifNotNil:", "source", "method"]}),
smalltalk.Debugger);

smalltalk.addMethod(
"_updateContextsList",
smalltalk.method({
selector: "updateContextsList",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@ul"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {return _st(self)._renderContext_on_(_st(_st(self)._error())._context(),html);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateContextsList",{},smalltalk.Debugger)})},
messageSends: ["contents:", "renderContext:on:", "context", "error"]}),
smalltalk.Debugger);

smalltalk.addMethod(
"_updateInspector",
smalltalk.method({
selector: "updateInspector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@inspector"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateInspector",{},smalltalk.Debugger)})},
messageSends: ["contents:"]}),
smalltalk.Debugger);

smalltalk.addMethod(
"_updateSourceArea",
smalltalk.method({
selector: "updateSourceArea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@sourceArea"])._val_(_st(self)._source());
return self}, function($ctx1) {$ctx1.fill(self,"updateSourceArea",{},smalltalk.Debugger)})},
messageSends: ["val:", "source"]}),
smalltalk.Debugger);

smalltalk.addMethod(
"_updateStatus",
smalltalk.method({
selector: "updateStatus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=_st(_st(self["@sourceArea"])._val()).__eq(_st(self)._source());
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
messageSends: ["ifTrue:ifFalse:", "ifNotNil:", "at:put:", "removeAt:", "=", "source", "val"]}),
smalltalk.Debugger);

smalltalk.addMethod(
"_updateVariablesList",
smalltalk.method({
selector: "updateVariablesList",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7;
_st(self["@ul2"])._contents_((function(html){
var li;
return smalltalk.withContext(function($ctx2) {$1=_st(html)._li();
_st($1)._with_("self");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._selectVariable_named_(_st(self)._receiver(),"self");
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
li=$2;
li;
$3=_st(self["@selectedVariableName"]).__eq("self");
if(smalltalk.assert($3)){
_st(li)._class_("selected");
};
return _st(_st(self)._allVariables())._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx3) {$4=_st(html)._li();
_st($4)._with_(key);
$5=_st($4)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {return _st(self)._selectVariable_named_(value,key);
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
li=$5;
li;
$6=_st(self["@selectedVariableName"]).__eq(key);
if(smalltalk.assert($6)){
return _st(li)._class_("selected");
};
}, function($ctx3) {$ctx3.fillBlock({key:key,value:value},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html,li:li},$ctx1)})}));
$7=self["@selectedVariable"];
if(($receiver = $7) == nil || $receiver == undefined){
_st(self["@inspectButton"])._at_put_("disabled",true);
} else {
_st(self["@inspectButton"])._removeAt_("disabled");
};
return self}, function($ctx1) {$ctx1.fill(self,"updateVariablesList",{},smalltalk.Debugger)})},
messageSends: ["contents:", "with:", "li", "onClick:", "selectVariable:named:", "receiver", "ifTrue:", "class:", "=", "keysAndValuesDo:", "allVariables", "ifNil:ifNotNil:", "at:put:", "removeAt:"]}),
smalltalk.Debugger);



smalltalk.addClass('IDETranscript', smalltalk.TabWidget, ['textarea'], 'IDE');
smalltalk.addMethod(
"_clear",
smalltalk.method({
selector: "clear",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@textarea"])._asJQuery())._val_("");
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.IDETranscript)})},
messageSends: ["val:", "asJQuery"]}),
smalltalk.IDETranscript);

smalltalk.addMethod(
"_cr",
smalltalk.method({
selector: "cr",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@textarea"])._asJQuery())._val_(_st(_st(_st(self["@textarea"])._asJQuery())._val()).__comma(_st((smalltalk.String || String))._cr()));
return self}, function($ctx1) {$ctx1.fill(self,"cr",{},smalltalk.IDETranscript)})},
messageSends: ["val:", ",", "cr", "val", "asJQuery"]}),
smalltalk.IDETranscript);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Transcript";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.IDETranscript)})},
messageSends: []}),
smalltalk.IDETranscript);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.TabManager || TabManager))._current();
_st($1)._open();
$2=_st($1)._selectTab_(self);
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.IDETranscript)})},
messageSends: ["open", "current", "selectTab:"]}),
smalltalk.IDETranscript);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
self["@textarea"]=_st(html)._textarea();
$1=self["@textarea"];
_st($1)._class_("amber_transcript");
$2=_st($1)._at_put_("spellcheck","false");
return self}, function($ctx1) {$ctx1.fill(self,"renderBoxOn:",{html:html},smalltalk.IDETranscript)})},
messageSends: ["textarea", "class:", "at:put:"]}),
smalltalk.IDETranscript);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._button();
_st($1)._with_("Clear transcript");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._clear();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},smalltalk.IDETranscript)})},
messageSends: ["with:", "button", "onClick:", "clear"]}),
smalltalk.IDETranscript);

smalltalk.addMethod(
"_show_",
smalltalk.method({
selector: "show:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@textarea"];
if(($receiver = $1) == nil || $receiver == undefined){
_st(self)._open();
} else {
$1;
};
_st(_st(self["@textarea"])._asJQuery())._val_(_st(_st(_st(self["@textarea"])._asJQuery())._val()).__comma(_st(anObject)._asString()));
return self}, function($ctx1) {$ctx1.fill(self,"show:",{anObject:anObject},smalltalk.IDETranscript)})},
messageSends: ["ifNil:", "open", "val:", ",", "asString", "val", "asJQuery"]}),
smalltalk.IDETranscript);


smalltalk.IDETranscript.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@current"]=smalltalk.TabWidget.klass.fn.prototype._new.apply(_st(self), []);
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.IDETranscript.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.IDETranscript.klass);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((smalltalk.Transcript || Transcript))._register_(_st(self)._current());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.IDETranscript.klass)})},
messageSends: ["register:", "current"]}),
smalltalk.IDETranscript.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.IDETranscript.klass)})},
messageSends: ["shouldNotImplement"]}),
smalltalk.IDETranscript.klass);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.TabManager || TabManager))._current();
_st($1)._open();
$2=_st($1)._selectTab_(_st(self)._current());
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.IDETranscript.klass)})},
messageSends: ["open", "current", "selectTab:"]}),
smalltalk.IDETranscript.klass);


smalltalk.addClass('Inspector', smalltalk.TabWidget, ['label', 'variables', 'object', 'selectedVariable', 'variablesList', 'valueTextarea', 'diveButton', 'sourceArea'], 'IDE');
smalltalk.addMethod(
"_canBeClosed",
smalltalk.method({
selector: "canBeClosed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"canBeClosed",{},smalltalk.Inspector)})},
messageSends: []}),
smalltalk.Inspector);

smalltalk.addMethod(
"_dive",
smalltalk.method({
selector: "dive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st(self)._variables())._at_(_st(self)._selectedVariable()))._inspect();
return self}, function($ctx1) {$ctx1.fill(self,"dive",{},smalltalk.Inspector)})},
messageSends: ["inspect", "at:", "selectedVariable", "variables"]}),
smalltalk.Inspector);

smalltalk.addMethod(
"_inspect_",
smalltalk.method({
selector: "inspect:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@object"]=anObject;
self["@variables"]=[];
_st(self["@object"])._inspectOn_(self);
return self}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},smalltalk.Inspector)})},
messageSends: ["inspectOn:"]}),
smalltalk.Inspector);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@label"];
if(($receiver = $2) == nil || $receiver == undefined){
$1="Inspector (nil)";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.Inspector)})},
messageSends: ["ifNil:"]}),
smalltalk.Inspector);

smalltalk.addMethod(
"_refresh",
smalltalk.method({
selector: "refresh",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self;
_st($1)._inspect_(self["@object"]);
_st($1)._updateVariablesList();
$2=_st($1)._updateValueTextarea();
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{},smalltalk.Inspector)})},
messageSends: ["inspect:", "updateVariablesList", "updateValueTextarea"]}),
smalltalk.Inspector);

smalltalk.addMethod(
"_renderBottomPanelOn_",
smalltalk.method({
selector: "renderBottomPanelOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_("amber_sourceCode");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {$3=_st((smalltalk.SourceArea || SourceArea))._new();
_st($3)._receiver_(self["@object"]);
_st($3)._onDoIt_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._refresh();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$4=_st($3)._yourself();
self["@sourceArea"]=$4;
self["@sourceArea"];
return _st(self["@sourceArea"])._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderBottomPanelOn:",{html:html},smalltalk.Inspector)})},
messageSends: ["class:", "div", "with:", "receiver:", "new", "onDoIt:", "refresh", "yourself", "renderOn:"]}),
smalltalk.Inspector);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self;
_st($1)._renderTopPanelOn_(html);
$2=_st($1)._renderBottomPanelOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderBoxOn:",{html:html},smalltalk.Inspector)})},
messageSends: ["renderTopPanelOn:", "renderBottomPanelOn:"]}),
smalltalk.Inspector);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6;
$1=_st(html)._button();
_st($1)._with_("DoIt");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._sourceArea())._doIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=_st(html)._button();
_st($3)._with_("PrintIt");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._sourceArea())._printIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$5=_st(html)._button();
_st($5)._with_("InspectIt");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._sourceArea())._inspectIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self)._updateButtons();
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},smalltalk.Inspector)})},
messageSends: ["with:", "button", "onClick:", "doIt", "sourceArea", "printIt", "inspectIt", "updateButtons"]}),
smalltalk.Inspector);

smalltalk.addMethod(
"_renderTopPanelOn_",
smalltalk.method({
selector: "renderTopPanelOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$5,$7,$8,$9,$10,$6,$2,$11,$12;
$1=_st(html)._div();
_st($1)._class_("top");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {self["@variablesList"]=_st(_st(html)._ul())._class_("amber_column variables");
self["@variablesList"];
$3=_st(html)._textarea();
_st($3)._class_("amber_column value");
$4=_st($3)._at_put_("readonly","readonly");
self["@valueTextarea"]=$4;
self["@valueTextarea"];
$5=_st(html)._div();
_st($5)._class_("amber_tabs inspector");
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx3) {$7=_st(html)._button();
_st($7)._class_("amber_button inspector refresh");
_st($7)._with_("Refresh");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {return _st(self)._refresh();
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
$8;
$9=_st(html)._button();
_st($9)._class_("amber_button inspector dive");
_st($9)._with_("Dive");
$10=_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {return _st(self)._dive();
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
self["@diveButton"]=$10;
return self["@diveButton"];
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$6;
return _st(_st(html)._div())._class_("amber_clear");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$11=self;
_st($11)._updateVariablesList();
$12=_st($11)._updateValueTextarea();
return self}, function($ctx1) {$ctx1.fill(self,"renderTopPanelOn:",{html:html},smalltalk.Inspector)})},
messageSends: ["class:", "div", "with:", "ul", "textarea", "at:put:", "button", "onClick:", "refresh", "dive", "updateVariablesList", "updateValueTextarea"]}),
smalltalk.Inspector);

smalltalk.addMethod(
"_selectVariable_",
smalltalk.method({
selector: "selectVariable:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self)._selectedVariable_(aString);
$1=self;
_st($1)._updateVariablesList();
_st($1)._updateValueTextarea();
$2=_st($1)._updateButtons();
return self}, function($ctx1) {$ctx1.fill(self,"selectVariable:",{aString:aString},smalltalk.Inspector)})},
messageSends: ["selectedVariable:", "updateVariablesList", "updateValueTextarea", "updateButtons"]}),
smalltalk.Inspector);

smalltalk.addMethod(
"_selectedVariable",
smalltalk.method({
selector: "selectedVariable",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selectedVariable"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedVariable",{},smalltalk.Inspector)})},
messageSends: []}),
smalltalk.Inspector);

smalltalk.addMethod(
"_selectedVariable_",
smalltalk.method({
selector: "selectedVariable:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@selectedVariable"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"selectedVariable:",{aString:aString},smalltalk.Inspector)})},
messageSends: []}),
smalltalk.Inspector);

smalltalk.addMethod(
"_setLabel_",
smalltalk.method({
selector: "setLabel:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@label"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"setLabel:",{aString:aString},smalltalk.Inspector)})},
messageSends: []}),
smalltalk.Inspector);

smalltalk.addMethod(
"_setVariables_",
smalltalk.method({
selector: "setVariables:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@variables"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"setVariables:",{aCollection:aCollection},smalltalk.Inspector)})},
messageSends: []}),
smalltalk.Inspector);

smalltalk.addMethod(
"_sourceArea",
smalltalk.method({
selector: "sourceArea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@sourceArea"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"sourceArea",{},smalltalk.Inspector)})},
messageSends: []}),
smalltalk.Inspector);

smalltalk.addMethod(
"_updateButtons",
smalltalk.method({
selector: "updateButtons",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._selectedVariable())._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(self)._variables())._at_(_st(self)._selectedVariable()))._notNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
_st(self["@diveButton"])._removeAt_("disabled");
} else {
_st(self["@diveButton"])._at_put_("disabled",true);
};
return self}, function($ctx1) {$ctx1.fill(self,"updateButtons",{},smalltalk.Inspector)})},
messageSends: ["ifFalse:ifTrue:", "at:put:", "removeAt:", "and:", "notNil", "at:", "selectedVariable", "variables"]}),
smalltalk.Inspector);

smalltalk.addMethod(
"_updateValueTextarea",
smalltalk.method({
selector: "updateValueTextarea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$2;
$1=_st(self["@valueTextarea"])._asJQuery();
$3=_st(_st(self)._selectedVariable())._isNil();
if(smalltalk.assert($3)){
$2="";
} else {
$2=_st(_st(_st(self)._variables())._at_(_st(self)._selectedVariable()))._printString();
};
_st($1)._val_($2);
return self}, function($ctx1) {$ctx1.fill(self,"updateValueTextarea",{},smalltalk.Inspector)})},
messageSends: ["val:", "ifTrue:ifFalse:", "printString", "at:", "selectedVariable", "variables", "isNil", "asJQuery"]}),
smalltalk.Inspector);

smalltalk.addMethod(
"_updateVariablesList",
smalltalk.method({
selector: "updateVariablesList",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
_st(self["@variablesList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(self)._variables())._keys())._do_((function(each){
var li;
return smalltalk.withContext(function($ctx3) {li=_st(html)._li();
li;
$1=li;
_st($1)._with_(each);
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {return _st(self)._selectVariable_(each);
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
$2;
$3=_st(_st(self)._selectedVariable()).__eq(each);
if(smalltalk.assert($3)){
return _st(li)._class_("selected");
};
}, function($ctx3) {$ctx3.fillBlock({each:each,li:li},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateVariablesList",{},smalltalk.Inspector)})},
messageSends: ["contents:", "do:", "li", "with:", "onClick:", "selectVariable:", "ifTrue:", "class:", "=", "selectedVariable", "keys", "variables"]}),
smalltalk.Inspector);

smalltalk.addMethod(
"_variables",
smalltalk.method({
selector: "variables",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@variables"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"variables",{},smalltalk.Inspector)})},
messageSends: []}),
smalltalk.Inspector);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._inspect_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anObject:anObject},smalltalk.Inspector.klass)})},
messageSends: ["inspect:", "new", "yourself"]}),
smalltalk.Inspector.klass);


smalltalk.addClass('ProgressBar', smalltalk.TabWidget, ['percent', 'progressDiv', 'div'], 'IDE');
smalltalk.addMethod(
"_percent",
smalltalk.method({
selector: "percent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@percent"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=(0);
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"percent",{},smalltalk.ProgressBar)})},
messageSends: ["ifNil:"]}),
smalltalk.ProgressBar);

smalltalk.addMethod(
"_percent_",
smalltalk.method({
selector: "percent:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@percent"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"percent:",{aNumber:aNumber},smalltalk.ProgressBar)})},
messageSends: []}),
smalltalk.ProgressBar);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._div();
_st($1)._class_("progress_bar");
$2=_st($1)._yourself();
self["@div"]=$2;
_st(self)._renderProgressBar();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.ProgressBar)})},
messageSends: ["class:", "div", "yourself", "renderProgressBar"]}),
smalltalk.ProgressBar);

smalltalk.addMethod(
"_renderProgressBar",
smalltalk.method({
selector: "renderProgressBar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self["@div"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {$1=_st(html)._div();
_st($1)._class_("progress");
$2=_st($1)._style_(_st(_st("width:").__comma(_st(_st(self)._percent())._asString())).__comma("%"));
return $2;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderProgressBar",{},smalltalk.ProgressBar)})},
messageSends: ["contents:", "class:", "div", "style:", ",", "asString", "percent"]}),
smalltalk.ProgressBar);

smalltalk.addMethod(
"_updatePercent_",
smalltalk.method({
selector: "updatePercent:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._percent_(aNumber);
_st(self)._renderProgressBar();
return self}, function($ctx1) {$ctx1.fill(self,"updatePercent:",{aNumber:aNumber},smalltalk.ProgressBar)})},
messageSends: ["percent:", "renderProgressBar"]}),
smalltalk.ProgressBar);



smalltalk.addClass('ReferencesBrowser', smalltalk.TabWidget, ['implementors', 'senders', 'implementorsList', 'input', 'timer', 'selector', 'sendersList', 'referencedClasses', 'referencedClassesList', 'matches', 'matchesList'], 'IDE');
smalltalk.addMethod(
"_canBeClosed",
smalltalk.method({
selector: "canBeClosed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"canBeClosed",{},smalltalk.ReferencesBrowser)})},
messageSends: []}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_classesAndMetaclasses",
smalltalk.method({
selector: "classesAndMetaclasses",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._classes()).__comma(_st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._classes())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._class();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})));
return $1;
}, function($ctx1) {$ctx1.fill(self,"classesAndMetaclasses",{},smalltalk.ReferencesBrowser)})},
messageSends: [",", "collect:", "class", "classes", "current"]}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_implementors",
smalltalk.method({
selector: "implementors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@implementors"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@implementors"]=_st((smalltalk.Array || Array))._new();
$1=self["@implementors"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"implementors",{},smalltalk.ReferencesBrowser)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.TabWidget.fn.prototype._initialize.apply(_st(self), []);
self["@selector"]="";
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ReferencesBrowser)})},
messageSends: ["initialize"]}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "[References]";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.ReferencesBrowser)})},
messageSends: []}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_matches",
smalltalk.method({
selector: "matches",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@matches"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@matches"]=_st((smalltalk.Array || Array))._new();
$1=self["@matches"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"matches",{},smalltalk.ReferencesBrowser)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_openBrowserOn_",
smalltalk.method({
selector: "openBrowserOn:",
fn: function (aMethod){
var self=this;
var browser;
return smalltalk.withContext(function($ctx1) { var $1,$3,$2,$4,$5,$6;
$1=(smalltalk.Browser || Browser);
$3=_st(_st(aMethod)._methodClass())._isMetaclass();
if(smalltalk.assert($3)){
$2=_st(_st(aMethod)._methodClass())._instanceClass();
} else {
$2=_st(aMethod)._methodClass();
};
browser=_st($1)._openOn_($2);
$4=_st(_st(aMethod)._methodClass())._isMetaclass();
if(smalltalk.assert($4)){
_st(browser)._selectTab_(smalltalk.symbolFor("class"));
};
$5=browser;
_st($5)._selectProtocol_(_st(aMethod)._category());
$6=_st($5)._selectMethod_(aMethod);
return self}, function($ctx1) {$ctx1.fill(self,"openBrowserOn:",{aMethod:aMethod,browser:browser},smalltalk.ReferencesBrowser)})},
messageSends: ["openOn:", "ifTrue:ifFalse:", "instanceClass", "methodClass", "isMetaclass", "ifTrue:", "selectTab:", "selectProtocol:", "category", "selectMethod:"]}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_referencedClasses",
smalltalk.method({
selector: "referencedClasses",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@referencedClasses"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@referencedClasses"]=_st((smalltalk.Array || Array))._new();
$1=self["@referencedClasses"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"referencedClasses",{},smalltalk.ReferencesBrowser)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self;
_st($1)._renderInputOn_(html);
_st($1)._renderImplementorsOn_(html);
_st($1)._renderSendersOn_(html);
_st($1)._renderReferencedClassesOn_(html);
$2=_st($1)._renderMatchesOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderBoxOn:",{html:html},smalltalk.ReferencesBrowser)})},
messageSends: ["renderInputOn:", "renderImplementorsOn:", "renderSendersOn:", "renderReferencedClassesOn:", "renderMatchesOn:"]}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_renderImplementorsOn_",
smalltalk.method({
selector: "renderImplementorsOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@implementorsList"]=_st(_st(html)._ul())._class_("amber_column implementors");
_st(self)._updateImplementorsList();
return self}, function($ctx1) {$ctx1.fill(self,"renderImplementorsOn:",{html:html},smalltalk.ReferencesBrowser)})},
messageSends: ["class:", "ul", "updateImplementorsList"]}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_renderInputOn_",
smalltalk.method({
selector: "renderInputOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._input();
_st($1)._class_("implementors");
$2=_st($1)._yourself();
self["@input"]=$2;
_st(_st(self["@input"])._asJQuery())._val_(self["@selector"]);
_st(self)._setInputEvents();
return self}, function($ctx1) {$ctx1.fill(self,"renderInputOn:",{html:html},smalltalk.ReferencesBrowser)})},
messageSends: ["class:", "input", "yourself", "val:", "asJQuery", "setInputEvents"]}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_renderMatchesOn_",
smalltalk.method({
selector: "renderMatchesOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@matchesList"]=_st(_st(html)._ul())._class_("amber_column matches");
_st(self)._updateMatchesList();
return self}, function($ctx1) {$ctx1.fill(self,"renderMatchesOn:",{html:html},smalltalk.ReferencesBrowser)})},
messageSends: ["class:", "ul", "updateMatchesList"]}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_renderReferencedClassesOn_",
smalltalk.method({
selector: "renderReferencedClassesOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@referencedClassesList"]=_st(_st(html)._ul())._class_("amber_column referenced_classes");
_st(self)._updateReferencedClassesList();
return self}, function($ctx1) {$ctx1.fill(self,"renderReferencedClassesOn:",{html:html},smalltalk.ReferencesBrowser)})},
messageSends: ["class:", "ul", "updateReferencedClassesList"]}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_renderSendersOn_",
smalltalk.method({
selector: "renderSendersOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@sendersList"]=_st(_st(html)._ul())._class_("amber_column senders");
_st(self)._updateSendersList();
return self}, function($ctx1) {$ctx1.fill(self,"renderSendersOn:",{html:html},smalltalk.ReferencesBrowser)})},
messageSends: ["class:", "ul", "updateSendersList"]}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_search_",
smalltalk.method({
selector: "search:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self;
_st($1)._searchReferencesFor_(aString);
_st($1)._updateImplementorsList();
_st($1)._updateSendersList();
_st($1)._updateReferencedClassesList();
$2=_st($1)._updateMatchesList();
return self}, function($ctx1) {$ctx1.fill(self,"search:",{aString:aString},smalltalk.ReferencesBrowser)})},
messageSends: ["searchReferencesFor:", "updateImplementorsList", "updateSendersList", "updateReferencedClassesList", "updateMatchesList"]}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_searchMethodSource",
smalltalk.method({
selector: "searchMethodSource",
fn: function (){
var self=this;
var regex;
return smalltalk.withContext(function($ctx1) { var $1;
regex=_st(self["@selector"])._allButFirst();
_st(_st(self)._classesAndMetaclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(each)._methodDictionary())._values())._do_((function(value){
return smalltalk.withContext(function($ctx3) {$1=_st(_st(value)._source())._match_(regex);
if(smalltalk.assert($1)){
return _st(_st(self)._matches())._add_(value);
};
}, function($ctx3) {$ctx3.fillBlock({value:value},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"searchMethodSource",{regex:regex},smalltalk.ReferencesBrowser)})},
messageSends: ["allButFirst", "do:", "ifTrue:", "add:", "matches", "match:", "source", "values", "methodDictionary", "classesAndMetaclasses"]}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_searchReferencedClasses",
smalltalk.method({
selector: "searchReferencedClasses",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(_st(self)._classesAndMetaclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(each)._methodDictionary())._values())._do_((function(value){
return smalltalk.withContext(function($ctx3) {$1=_st(_st(value)._referencedClasses())._includes_(self["@selector"]);
if(smalltalk.assert($1)){
return _st(_st(self)._referencedClasses())._add_(value);
};
}, function($ctx3) {$ctx3.fillBlock({value:value},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"searchReferencedClasses",{},smalltalk.ReferencesBrowser)})},
messageSends: ["do:", "ifTrue:", "add:", "referencedClasses", "includes:", "values", "methodDictionary", "classesAndMetaclasses"]}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_searchReferencesFor_",
smalltalk.method({
selector: "searchReferencesFor:",
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
return self}, function($ctx1) {$ctx1.fill(self,"searchReferencesFor:",{aString:aString},smalltalk.ReferencesBrowser)})},
messageSends: ["new", "searchMethodSource", "ifFalse:ifTrue:", "searchSelectorReferences", "searchReferencedClasses", "match:"]}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_searchSelectorReferences",
smalltalk.method({
selector: "searchSelectorReferences",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(_st(self)._classesAndMetaclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(each)._methodDictionary())._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx3) {$1=_st(key).__eq(self["@selector"]);
if(smalltalk.assert($1)){
_st(_st(self)._implementors())._add_(value);
};
$2=_st(_st(value)._messageSends())._includes_(self["@selector"]);
if(smalltalk.assert($2)){
return _st(_st(self)._senders())._add_(value);
};
}, function($ctx3) {$ctx3.fillBlock({key:key,value:value},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"searchSelectorReferences",{},smalltalk.ReferencesBrowser)})},
messageSends: ["do:", "keysAndValuesDo:", "ifTrue:", "add:", "implementors", "=", "senders", "includes:", "messageSends", "methodDictionary", "classesAndMetaclasses"]}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.ReferencesBrowser)})},
messageSends: []}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_senders",
smalltalk.method({
selector: "senders",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@senders"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@senders"]=_st((smalltalk.Array || Array))._new();
$1=self["@senders"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"senders",{},smalltalk.ReferencesBrowser)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_setInputEvents",
smalltalk.method({
selector: "setInputEvents",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$2;
$1=self["@input"];
_st($1)._onKeyUp_((function(){
return smalltalk.withContext(function($ctx2) {self["@timer"]=_st((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._search_(_st(_st(self["@input"])._asJQuery())._val());
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._valueWithTimeout_((100));
return self["@timer"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st($1)._onKeyDown_((function(){
return smalltalk.withContext(function($ctx2) {$3=self["@timer"];
if(($receiver = $3) == nil || $receiver == undefined){
return $3;
} else {
return _st(self["@timer"])._clearTimeout();
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setInputEvents",{},smalltalk.ReferencesBrowser)})},
messageSends: ["onKeyUp:", "valueWithTimeout:", "search:", "val", "asJQuery", "onKeyDown:", "ifNotNil:", "clearTimeout"]}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_updateImplementorsList",
smalltalk.method({
selector: "updateImplementorsList",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
_st(self["@implementorsList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {$1=_st(html)._li();
_st($1)._class_("column_label");
_st($1)._with_(_st(_st("Implementors (").__comma(_st(_st(_st(self)._implementors())._size())._asString())).__comma(")"));
$2=_st($1)._style_("font-weight: bold");
$2;
return _st(_st(self)._implementors())._do_((function(each){
var li;
return smalltalk.withContext(function($ctx3) {li=_st(html)._li();
li;
$3=li;
_st($3)._with_(_st(_st(_st(_st(each)._methodClass())._asString()).__comma(" >> ")).__comma(_st(self)._selector()));
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {return _st(self)._openBrowserOn_(each);
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
return $4;
}, function($ctx3) {$ctx3.fillBlock({each:each,li:li},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateImplementorsList",{},smalltalk.ReferencesBrowser)})},
messageSends: ["contents:", "class:", "li", "with:", ",", "asString", "size", "implementors", "style:", "do:", "selector", "methodClass", "onClick:", "openBrowserOn:"]}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_updateMatchesList",
smalltalk.method({
selector: "updateMatchesList",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
_st(self["@matchesList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {$1=_st(html)._li();
_st($1)._class_("column_label");
_st($1)._with_(_st(_st("Regex matches (").__comma(_st(_st(_st(self)._matches())._size())._asString())).__comma(")"));
$2=_st($1)._style_("font-weight: bold");
$2;
return _st(_st(self)._matches())._do_((function(each){
var li;
return smalltalk.withContext(function($ctx3) {li=_st(html)._li();
li;
$3=li;
_st($3)._with_(_st(_st(_st(_st(each)._methodClass())._asString()).__comma(" >> ")).__comma(_st(each)._selector()));
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {return _st(self)._openBrowserOn_(each);
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
return $4;
}, function($ctx3) {$ctx3.fillBlock({each:each,li:li},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateMatchesList",{},smalltalk.ReferencesBrowser)})},
messageSends: ["contents:", "class:", "li", "with:", ",", "asString", "size", "matches", "style:", "do:", "selector", "methodClass", "onClick:", "openBrowserOn:"]}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_updateReferencedClassesList",
smalltalk.method({
selector: "updateReferencedClassesList",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
_st(self["@referencedClassesList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {$1=_st(html)._li();
_st($1)._class_("column_label");
_st($1)._with_(_st(_st("Class references (").__comma(_st(_st(_st(self)._referencedClasses())._size())._asString())).__comma(")"));
$2=_st($1)._style_("font-weight: bold");
$2;
return _st(_st(self)._referencedClasses())._do_((function(each){
return smalltalk.withContext(function($ctx3) {$3=_st(html)._li();
_st($3)._with_(_st(_st(_st(_st(each)._methodClass())._asString()).__comma(" >> ")).__comma(_st(each)._selector()));
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {return _st(self)._openBrowserOn_(each);
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
return $4;
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateReferencedClassesList",{},smalltalk.ReferencesBrowser)})},
messageSends: ["contents:", "class:", "li", "with:", ",", "asString", "size", "referencedClasses", "style:", "do:", "selector", "methodClass", "onClick:", "openBrowserOn:"]}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_updateSendersList",
smalltalk.method({
selector: "updateSendersList",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
_st(self["@sendersList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {$1=_st(html)._li();
_st($1)._class_("column_label");
_st($1)._with_(_st(_st("Senders (").__comma(_st(_st(_st(self)._senders())._size())._asString())).__comma(")"));
$2=_st($1)._style_("font-weight: bold");
$2;
return _st(_st(self)._senders())._do_((function(each){
return smalltalk.withContext(function($ctx3) {$3=_st(html)._li();
_st($3)._with_(_st(_st(_st(_st(each)._methodClass())._asString()).__comma(" >> ")).__comma(_st(each)._selector()));
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {return _st(self)._openBrowserOn_(each);
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
return $4;
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateSendersList",{},smalltalk.ReferencesBrowser)})},
messageSends: ["contents:", "class:", "li", "with:", ",", "asString", "size", "senders", "style:", "do:", "selector", "methodClass", "onClick:", "openBrowserOn:"]}),
smalltalk.ReferencesBrowser);


smalltalk.addMethod(
"_search_",
smalltalk.method({
selector: "search:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._searchReferencesFor_(aString);
$3=_st($2)._open();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"search:",{aString:aString},smalltalk.ReferencesBrowser.klass)})},
messageSends: ["searchReferencesFor:", "new", "open"]}),
smalltalk.ReferencesBrowser.klass);


smalltalk.addClass('TestRunner', smalltalk.TabWidget, ['selectedCategories', 'packagesList', 'selectedClasses', 'classesList', 'selectedMethods', 'progressBar', 'methodsList', 'result', 'statusDiv'], 'IDE');
smalltalk.addMethod(
"_allClasses",
smalltalk.method({
selector: "allClasses",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st((smalltalk.TestCase || TestCase))._allSubclasses())._select_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(each)._isAbstract())._not();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"allClasses",{},smalltalk.TestRunner)})},
messageSends: ["select:", "not", "isAbstract", "allSubclasses"]}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_classes",
smalltalk.method({
selector: "classes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._allClasses())._select_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._selectedCategories())._includes_(_st(each)._category());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._sort_((function(a,b){
return smalltalk.withContext(function($ctx2) {return _st(_st(a)._name()).__gt(_st(b)._name());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"classes",{},smalltalk.TestRunner)})},
messageSends: ["sort:", ">", "name", "select:", "includes:", "category", "selectedCategories", "allClasses"]}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.TabWidget.fn.prototype._initialize.apply(_st(self), []);
self["@result"]=_st((smalltalk.TestResult || TestResult))._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TestRunner)})},
messageSends: ["initialize", "new"]}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_isSelectedCategory_",
smalltalk.method({
selector: "isSelectedCategory:",
fn: function (aCategory){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._selectedCategories())._includes_(aCategory);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isSelectedCategory:",{aCategory:aCategory},smalltalk.TestRunner)})},
messageSends: ["includes:", "selectedCategories"]}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_isSelectedClass_",
smalltalk.method({
selector: "isSelectedClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._selectedClasses())._includes_(aClass);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isSelectedClass:",{aClass:aClass},smalltalk.TestRunner)})},
messageSends: ["includes:", "selectedClasses"]}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "SUnit";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.TestRunner)})},
messageSends: []}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
fn: function (){
var self=this;
var packages;
return smalltalk.withContext(function($ctx1) { var $1,$2;
packages=_st((smalltalk.Array || Array))._new();
_st(_st(self)._allClasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {$1=_st(packages)._includes_(_st(each)._category());
if(! smalltalk.assert($1)){
return _st(packages)._add_(_st(each)._category());
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=_st(packages)._sort();
return $2;
}, function($ctx1) {$ctx1.fill(self,"packages",{packages:packages},smalltalk.TestRunner)})},
messageSends: ["new", "do:", "ifFalse:", "add:", "category", "includes:", "allClasses", "sort"]}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_performFailure_",
smalltalk.method({
selector: "performFailure:",
fn: function (aTestCase){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aTestCase)._runCase();
return self}, function($ctx1) {$ctx1.fill(self,"performFailure:",{aTestCase:aTestCase},smalltalk.TestRunner)})},
messageSends: ["runCase"]}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_printErrors",
smalltalk.method({
selector: "printErrors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(_st(self)._result())._errors())._size())._asString()).__comma(" errors, ");
return $1;
}, function($ctx1) {$ctx1.fill(self,"printErrors",{},smalltalk.TestRunner)})},
messageSends: [",", "asString", "size", "errors", "result"]}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_printFailures",
smalltalk.method({
selector: "printFailures",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(_st(self)._result())._failures())._size())._asString()).__comma(" failures");
return $1;
}, function($ctx1) {$ctx1.fill(self,"printFailures",{},smalltalk.TestRunner)})},
messageSends: [",", "asString", "size", "failures", "result"]}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_printPasses",
smalltalk.method({
selector: "printPasses",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(_st(_st(self)._result())._runs()).__minus(_st(_st(_st(self)._result())._errors())._size())).__minus(_st(_st(_st(self)._result())._failures())._size()))._asString()).__comma(" passes, ");
return $1;
}, function($ctx1) {$ctx1.fill(self,"printPasses",{},smalltalk.TestRunner)})},
messageSends: [",", "asString", "-", "size", "failures", "result", "errors", "runs"]}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_printTotal",
smalltalk.method({
selector: "printTotal",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(self)._result())._total())._asString()).__comma(" runs, ");
return $1;
}, function($ctx1) {$ctx1.fill(self,"printTotal",{},smalltalk.TestRunner)})},
messageSends: [",", "asString", "total", "result"]}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_progressBar",
smalltalk.method({
selector: "progressBar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@progressBar"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@progressBar"]=_st((smalltalk.ProgressBar || ProgressBar))._new();
$1=self["@progressBar"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"progressBar",{},smalltalk.TestRunner)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self;
_st($1)._renderCategoriesOn_(html);
_st($1)._renderClassesOn_(html);
$2=_st($1)._renderResultsOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderBoxOn:",{html:html},smalltalk.TestRunner)})},
messageSends: ["renderCategoriesOn:", "renderClassesOn:", "renderResultsOn:"]}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._button();
_st($1)._with_("Run selected");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._run_(_st(self)._testCases());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},smalltalk.TestRunner)})},
messageSends: ["with:", "button", "onClick:", "run:", "testCases"]}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_renderCategoriesOn_",
smalltalk.method({
selector: "renderCategoriesOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@packagesList"]=_st(_st(html)._ul())._class_("amber_column sunit packages");
_st(self)._updateCategoriesList();
return self}, function($ctx1) {$ctx1.fill(self,"renderCategoriesOn:",{html:html},smalltalk.TestRunner)})},
messageSends: ["class:", "ul", "updateCategoriesList"]}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_renderClassesOn_",
smalltalk.method({
selector: "renderClassesOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@classesList"]=_st(_st(html)._ul())._class_("amber_column sunit classes");
_st(self)._updateClassesList();
return self}, function($ctx1) {$ctx1.fill(self,"renderClassesOn:",{html:html},smalltalk.TestRunner)})},
messageSends: ["class:", "ul", "updateClassesList"]}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_renderErrorsOn_",
smalltalk.method({
selector: "renderErrorsOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(_st(_st(self)._result())._errors())._do_((function(each){
return smalltalk.withContext(function($ctx2) {$1=_st(html)._li();
_st($1)._class_("errors");
_st($1)._with_(_st(_st(_st(_st(each)._class())._name()).__comma(" >> ")).__comma(_st(each)._selector()));
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._performFailure_(each);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderErrorsOn:",{html:html},smalltalk.TestRunner)})},
messageSends: ["do:", "class:", "li", "with:", ",", "selector", "name", "class", "onClick:", "performFailure:", "errors", "result"]}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_renderFailuresOn_",
smalltalk.method({
selector: "renderFailuresOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(_st(_st(self)._result())._failures())._do_((function(each){
return smalltalk.withContext(function($ctx2) {$1=_st(html)._li();
_st($1)._class_("failures");
_st($1)._with_(_st(_st(_st(_st(each)._class())._name()).__comma(" >> ")).__comma(_st(each)._selector()));
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._performFailure_(each);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderFailuresOn:",{html:html},smalltalk.TestRunner)})},
messageSends: ["do:", "class:", "li", "with:", ",", "selector", "name", "class", "onClick:", "performFailure:", "failures", "result"]}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_renderResultsOn_",
smalltalk.method({
selector: "renderResultsOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@statusDiv"]=_st(html)._div();
_st(html)._with_(_st(self)._progressBar());
self["@methodsList"]=_st(_st(html)._ul())._class_("amber_column sunit results");
_st(self)._updateMethodsList();
_st(self)._updateStatusDiv();
return self}, function($ctx1) {$ctx1.fill(self,"renderResultsOn:",{html:html},smalltalk.TestRunner)})},
messageSends: ["div", "with:", "progressBar", "class:", "ul", "updateMethodsList", "updateStatusDiv"]}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_result",
smalltalk.method({
selector: "result",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@result"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"result",{},smalltalk.TestRunner)})},
messageSends: []}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_run_",
smalltalk.method({
selector: "run:",
fn: function (aCollection){
var self=this;
var worker;
return smalltalk.withContext(function($ctx1) { var $1;
worker=_st((smalltalk.TestSuiteRunner || TestSuiteRunner))._on_(aCollection);
self["@result"]=_st(worker)._result();
_st(_st(worker)._announcer())._on_do_((smalltalk.ResultAnnouncement || ResultAnnouncement),(function(ann){
return smalltalk.withContext(function($ctx2) {$1=_st(_st(ann)._result()).__eq_eq(self["@result"]);
if(smalltalk.assert($1)){
_st(_st(self)._progressBar())._updatePercent_(_st(_st(_st(self["@result"])._runs()).__slash(_st(self["@result"])._total())).__star((100)));
_st(self)._updateStatusDiv();
return _st(self)._updateMethodsList();
};
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st(worker)._run();
return self}, function($ctx1) {$ctx1.fill(self,"run:",{aCollection:aCollection,worker:worker},smalltalk.TestRunner)})},
messageSends: ["on:", "result", "on:do:", "ifTrue:", "updatePercent:", "*", "/", "total", "runs", "progressBar", "updateStatusDiv", "updateMethodsList", "==", "announcer", "run"]}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_selectAllCategories",
smalltalk.method({
selector: "selectAllCategories",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
_st(_st(self)._packages())._do_((function(each){
return smalltalk.withContext(function($ctx2) {$1=_st(self["@selectedCategories"])._includes_(each);
if(! smalltalk.assert($1)){
return _st(_st(self)._selectedCategories())._add_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=self;
_st($2)._updateCategoriesList();
$3=_st($2)._updateClassesList();
return self}, function($ctx1) {$ctx1.fill(self,"selectAllCategories",{},smalltalk.TestRunner)})},
messageSends: ["do:", "ifFalse:", "add:", "selectedCategories", "includes:", "packages", "updateCategoriesList", "updateClassesList"]}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_selectAllClasses",
smalltalk.method({
selector: "selectAllClasses",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
_st(_st(self)._classes())._do_((function(each){
return smalltalk.withContext(function($ctx2) {$1=_st(self["@selectedClasses"])._includes_(each);
if(! smalltalk.assert($1)){
return _st(_st(self)._selectedClasses())._add_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=self;
_st($2)._updateCategoriesList();
$3=_st($2)._updateClassesList();
return self}, function($ctx1) {$ctx1.fill(self,"selectAllClasses",{},smalltalk.TestRunner)})},
messageSends: ["do:", "ifFalse:", "add:", "selectedClasses", "includes:", "classes", "updateCategoriesList", "updateClassesList"]}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_selectedCategories",
smalltalk.method({
selector: "selectedCategories",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@selectedCategories"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@selectedCategories"]=_st((smalltalk.Array || Array))._new();
$1=self["@selectedCategories"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedCategories",{},smalltalk.TestRunner)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_selectedClasses",
smalltalk.method({
selector: "selectedClasses",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@selectedClasses"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@selectedClasses"]=_st((smalltalk.Array || Array))._new();
$1=self["@selectedClasses"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedClasses",{},smalltalk.TestRunner)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_statusInfo",
smalltalk.method({
selector: "statusInfo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(self)._printTotal()).__comma(_st(self)._printPasses())).__comma(_st(self)._printErrors())).__comma(_st(self)._printFailures());
return $1;
}, function($ctx1) {$ctx1.fill(self,"statusInfo",{},smalltalk.TestRunner)})},
messageSends: [",", "printFailures", "printErrors", "printPasses", "printTotal"]}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_testCases",
smalltalk.method({
selector: "testCases",
fn: function (){
var self=this;
var testCases;
return smalltalk.withContext(function($ctx1) { var $1;
testCases=[];
_st(_st(_st(self)._selectedClasses())._select_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._selectedCategories())._includes_(_st(each)._category());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(testCases)._addAll_(_st(each)._buildSuite());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=testCases;
return $1;
}, function($ctx1) {$ctx1.fill(self,"testCases",{testCases:testCases},smalltalk.TestRunner)})},
messageSends: ["do:", "addAll:", "buildSuite", "select:", "includes:", "category", "selectedCategories", "selectedClasses"]}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_toggleCategory_",
smalltalk.method({
selector: "toggleCategory:",
fn: function (aCategory){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=_st(self)._isSelectedCategory_(aCategory);
if(smalltalk.assert($1)){
_st(self["@selectedCategories"])._remove_(aCategory);
} else {
_st(self["@selectedCategories"])._add_(aCategory);
};
$2=self;
_st($2)._updateCategoriesList();
$3=_st($2)._updateClassesList();
return self}, function($ctx1) {$ctx1.fill(self,"toggleCategory:",{aCategory:aCategory},smalltalk.TestRunner)})},
messageSends: ["ifFalse:ifTrue:", "add:", "remove:", "isSelectedCategory:", "updateCategoriesList", "updateClassesList"]}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_toggleClass_",
smalltalk.method({
selector: "toggleClass:",
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
return self}, function($ctx1) {$ctx1.fill(self,"toggleClass:",{aClass:aClass},smalltalk.TestRunner)})},
messageSends: ["ifFalse:ifTrue:", "add:", "remove:", "isSelectedClass:", "updateClassesList"]}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_updateCategoriesList",
smalltalk.method({
selector: "updateCategoriesList",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5;
_st(self["@packagesList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {$1=_st(html)._li();
_st($1)._class_("all");
_st($1)._with_("All");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._selectAllCategories();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$2;
return _st(_st(self)._packages())._do_((function(each){
var li;
return smalltalk.withContext(function($ctx3) {li=_st(html)._li();
li;
$3=_st(_st(self)._selectedCategories())._includes_(each);
if(smalltalk.assert($3)){
_st(li)._class_("selected");
};
$4=li;
_st($4)._with_(each);
$5=_st($4)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {return _st(self)._toggleCategory_(each);
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
return $5;
}, function($ctx3) {$ctx3.fillBlock({each:each,li:li},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateCategoriesList",{},smalltalk.TestRunner)})},
messageSends: ["contents:", "class:", "li", "with:", "onClick:", "selectAllCategories", "do:", "ifTrue:", "includes:", "selectedCategories", "toggleCategory:", "packages"]}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_updateClassesList",
smalltalk.method({
selector: "updateClassesList",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6;
_st(self["@classesList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {$1=_st(_st(self)._selectedCategories())._isEmpty();
if(! smalltalk.assert($1)){
$2=_st(html)._li();
_st($2)._class_("all");
_st($2)._with_("All");
$3=_st($2)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._selectAllClasses();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$3;
};
return _st(_st(self)._classes())._do_((function(each){
var li;
return smalltalk.withContext(function($ctx3) {li=_st(html)._li();
li;
$4=_st(_st(self)._selectedClasses())._includes_(each);
if(smalltalk.assert($4)){
_st(li)._class_("selected");
};
$5=li;
_st($5)._with_(_st(each)._name());
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {return _st(self)._toggleClass_(each);
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
return $6;
}, function($ctx3) {$ctx3.fillBlock({each:each,li:li},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateClassesList",{},smalltalk.TestRunner)})},
messageSends: ["contents:", "ifFalse:", "class:", "li", "with:", "onClick:", "selectAllClasses", "isEmpty", "selectedCategories", "do:", "ifTrue:", "includes:", "selectedClasses", "name", "toggleClass:", "classes"]}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_updateMethodsList",
smalltalk.method({
selector: "updateMethodsList",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@methodsList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {_st(self)._renderErrorsOn_(html);
return _st(self)._renderFailuresOn_(html);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateMethodsList",{},smalltalk.TestRunner)})},
messageSends: ["contents:", "renderErrorsOn:", "renderFailuresOn:"]}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_updateStatusDiv",
smalltalk.method({
selector: "updateStatusDiv",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@statusDiv"])._class_(_st("sunit status ").__comma(_st(self["@result"])._status()));
_st(self["@statusDiv"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {return _st(_st(html)._span())._with_(_st(self)._statusInfo());
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateStatusDiv",{},smalltalk.TestRunner)})},
messageSends: ["class:", ",", "status", "contents:", "with:", "statusInfo", "span"]}),
smalltalk.TestRunner);



smalltalk.addClass('Workspace', smalltalk.TabWidget, ['sourceArea'], 'IDE');
smalltalk.addMethod(
"_clearWorkspace",
smalltalk.method({
selector: "clearWorkspace",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@sourceArea"])._clear();
return self}, function($ctx1) {$ctx1.fill(self,"clearWorkspace",{},smalltalk.Workspace)})},
messageSends: ["clear"]}),
smalltalk.Workspace);

smalltalk.addMethod(
"_doIt",
smalltalk.method({
selector: "doIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@sourceArea"])._doIt();
return self}, function($ctx1) {$ctx1.fill(self,"doIt",{},smalltalk.Workspace)})},
messageSends: ["doIt"]}),
smalltalk.Workspace);

smalltalk.addMethod(
"_fileIn",
smalltalk.method({
selector: "fileIn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@sourceArea"])._fileIn();
return self}, function($ctx1) {$ctx1.fill(self,"fileIn",{},smalltalk.Workspace)})},
messageSends: ["fileIn"]}),
smalltalk.Workspace);

smalltalk.addMethod(
"_inspectIt",
smalltalk.method({
selector: "inspectIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@sourceArea"])._inspectIt();
return self}, function($ctx1) {$ctx1.fill(self,"inspectIt",{},smalltalk.Workspace)})},
messageSends: ["inspectIt"]}),
smalltalk.Workspace);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Workspace";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.Workspace)})},
messageSends: []}),
smalltalk.Workspace);

smalltalk.addMethod(
"_printIt",
smalltalk.method({
selector: "printIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@sourceArea"])._printIt();
return self}, function($ctx1) {$ctx1.fill(self,"printIt",{},smalltalk.Workspace)})},
messageSends: ["printIt"]}),
smalltalk.Workspace);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@sourceArea"]=_st((smalltalk.SourceArea || SourceArea))._new();
_st(self["@sourceArea"])._renderOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderBoxOn:",{html:html},smalltalk.Workspace)})},
messageSends: ["new", "renderOn:"]}),
smalltalk.Workspace);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10;
$1=_st(html)._button();
_st($1)._with_("DoIt");
_st($1)._title_("ctrl+d");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._doIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=_st(html)._button();
_st($3)._with_("PrintIt");
_st($3)._title_("ctrl+p");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._printIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$5=_st(html)._button();
_st($5)._with_("InspectIt");
_st($5)._title_("ctrl+i");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._inspectIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$7=_st(html)._button();
_st($7)._with_("FileIn");
_st($7)._title_("ctrl+f");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._fileIn();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$9=_st(html)._button();
_st($9)._with_("Clear workspace");
$10=_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._clearWorkspace();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},smalltalk.Workspace)})},
messageSends: ["with:", "button", "title:", "onClick:", "doIt", "printIt", "inspectIt", "fileIn", "clearWorkspace"]}),
smalltalk.Workspace);

smalltalk.addMethod(
"_show",
smalltalk.method({
selector: "show",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.TabWidget.fn.prototype._show.apply(_st(self), []);
_st(self["@sourceArea"])._focus();
return self}, function($ctx1) {$ctx1.fill(self,"show",{},smalltalk.Workspace)})},
messageSends: ["show", "focus"]}),
smalltalk.Workspace);



smalltalk.addMethod(
"_inspect",
smalltalk.method({
selector: "inspect",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.Inspector || Inspector))._new();
_st($1)._inspect_(self);
$2=_st($1)._open();
return self}, function($ctx1) {$ctx1.fill(self,"inspect",{},smalltalk.Object)})},
messageSends: ["inspect:", "new", "open"]}),
smalltalk.Object);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
fn: function (anInspector){
var self=this;
var variables;
return smalltalk.withContext(function($ctx1) { var $1,$2;
variables=_st((smalltalk.Dictionary || Dictionary))._new();
_st(variables)._at_put_("#self",self);
_st(_st(_st(self)._class())._allInstanceVariableNames())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(variables)._at_put_(each,_st(self)._instVarAt_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=anInspector;
_st($1)._setLabel_(_st(self)._printString());
$2=_st($1)._setVariables_(variables);
return self}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},smalltalk.Object)})},
messageSends: ["new", "at:put:", "do:", "instVarAt:", "allInstanceVariableNames", "class", "setLabel:", "printString", "setVariables:"]}),
smalltalk.Object);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
fn: function (anInspector){
var self=this;
var variables;
return smalltalk.withContext(function($ctx1) { var $1,$2;
variables=_st((smalltalk.Dictionary || Dictionary))._new();
_st(variables)._at_put_("#self",self);
_st(self)._withIndexDo_((function(each,i){
return smalltalk.withContext(function($ctx2) {return _st(variables)._at_put_(i,each);
}, function($ctx2) {$ctx2.fillBlock({each:each,i:i},$ctx1)})}));
$1=anInspector;
_st($1)._setLabel_(_st(self)._printString());
$2=_st($1)._setVariables_(variables);
return self}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},smalltalk.Collection)})},
messageSends: ["new", "at:put:", "withIndexDo:", "setLabel:", "printString", "setVariables:"]}),
smalltalk.Collection);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
fn: function (anInspector){
var self=this;
var variables;
return smalltalk.withContext(function($ctx1) { var $1,$2;
variables=_st((smalltalk.Dictionary || Dictionary))._new();
_st(variables)._at_put_("#self",self);
_st(variables)._at_put_("#keys",_st(self)._keys());
_st(self)._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {return _st(variables)._at_put_(key,value);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
$1=anInspector;
_st($1)._setLabel_(_st(self)._printString());
$2=_st($1)._setVariables_(variables);
return self}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},smalltalk.HashedCollection)})},
messageSends: ["new", "at:put:", "keys", "keysAndValuesDo:", "setLabel:", "printString", "setVariables:"]}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
fn: function (anInspector){
var self=this;
var label;
return smalltalk.withContext(function($ctx1) { var $1;
smalltalk.CharacterArray.fn.prototype._inspectOn_.apply(_st(self), [anInspector]);
$1=_st(_st(_st(self)._printString())._size()).__gt((30));
if(smalltalk.assert($1)){
label=_st(_st(_st(self)._printString())._copyFrom_to_((1),(30))).__comma("...'");
label;
} else {
label=_st(self)._printString();
label;
};
_st(anInspector)._setLabel_(label);
return self}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,label:label},smalltalk.String)})},
messageSends: ["inspectOn:", "ifTrue:ifFalse:", ",", "copyFrom:to:", "printString", ">", "size", "setLabel:"]}),
smalltalk.String);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
fn: function (anInspector){
var self=this;
var variables;
return smalltalk.withContext(function($ctx1) { var $1,$2;
variables=_st((smalltalk.Dictionary || Dictionary))._new();
_st(variables)._at_put_("#self",self);
_st(self["@elements"])._withIndexDo_((function(each,i){
return smalltalk.withContext(function($ctx2) {return _st(variables)._at_put_(i,each);
}, function($ctx2) {$ctx2.fillBlock({each:each,i:i},$ctx1)})}));
$1=anInspector;
_st($1)._setLabel_(_st(self)._printString());
$2=_st($1)._setVariables_(variables);
return self}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},smalltalk.Set)})},
messageSends: ["new", "at:put:", "withIndexDo:", "setLabel:", "printString", "setVariables:"]}),
smalltalk.Set);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
fn: function (anInspector){
var self=this;
var variables;
return smalltalk.withContext(function($ctx1) { var $1,$2;
variables=_st((smalltalk.Dictionary || Dictionary))._new();
_st(variables)._at_put_("#self",self);
_st(variables)._at_put_("#year",_st(self)._year());
_st(variables)._at_put_("#month",_st(self)._month());
_st(variables)._at_put_("#day",_st(self)._day());
_st(variables)._at_put_("#hours",_st(self)._hours());
_st(variables)._at_put_("#minutes",_st(self)._minutes());
_st(variables)._at_put_("#seconds",_st(self)._seconds());
_st(variables)._at_put_("#milliseconds",_st(self)._milliseconds());
$1=anInspector;
_st($1)._setLabel_(_st(self)._printString());
$2=_st($1)._setVariables_(variables);
return self}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},smalltalk.Date)})},
messageSends: ["new", "at:put:", "year", "month", "day", "hours", "minutes", "seconds", "milliseconds", "setLabel:", "printString", "setVariables:"]}),
smalltalk.Date);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
fn: function (anInspector){
var self=this;
var variables;
return smalltalk.withContext(function($ctx1) { var $1,$2;
variables=_st((smalltalk.Dictionary || Dictionary))._new();
_st(variables)._at_put_("#self",self);
_st(variables)._at_put_("#home",_st(self)._home());
_st(variables)._at_put_("#receiver",_st(self)._receiver());
_st(variables)._at_put_("#selector",_st(self)._selector());
_st(variables)._at_put_("#temps",_st(self)._temps());
_st(_st(_st(self)._class())._instanceVariableNames())._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(variables)._at_put_(each,_st(self)._instVarAt_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=anInspector;
_st($1)._setLabel_(_st(self)._printString());
$2=_st($1)._setVariables_(variables);
return self}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},smalltalk.MethodContext)})},
messageSends: ["new", "at:put:", "home", "receiver", "selector", "temps", "do:", "instVarAt:", "instanceVariableNames", "class", "setLabel:", "printString", "setVariables:"]}),
smalltalk.MethodContext);

