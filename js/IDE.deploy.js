smalltalk.addPackage('IDE', {});
smalltalk.addClass('ClassesList', smalltalk.Widget, ['browser', 'ul', 'nodes'], 'IDE');
smalltalk.addMethod(
"_browser",
smalltalk.method({
selector: "browser",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@browser"];
}, self, "browser", [], smalltalk.ClassesList)}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_browser_",
smalltalk.method({
selector: "browser:",
fn: function (aBrowser){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@browser"]=aBrowser;
return self}, self, "browser:", [aBrowser], smalltalk.ClassesList)}
}),
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
}, self, "category", [], smalltalk.ClassesList)}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_getNodes",
smalltalk.method({
selector: "getNodes",
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
}, self, "getNodes", [], smalltalk.ClassesList)}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { if(($receiver = self["@nodes"]) == nil || $receiver == undefined){
self["@nodes"]=_st(self)._getNodes();
self["@nodes"];
} else {
self["@nodes"];
};
return self["@nodes"];
}, self, "nodes", [], smalltalk.ClassesList)}
}),
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
return self}, self, "renderOn:", [html], smalltalk.ClassesList)}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_resetNodes",
smalltalk.method({
selector: "resetNodes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@nodes"]=nil;
return self}, self, "resetNodes", [], smalltalk.ClassesList)}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
"_updateNodes",
smalltalk.method({
selector: "updateNodes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@ul"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._nodes())._do_((function(each){
return smalltalk.withContext(function($ctx3) { return _st(each)._renderOn_(html);
})}));
})}));
return self}, self, "updateNodes", [], smalltalk.ClassesList)}
}),
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
}, self, "on:", [aBrowser], smalltalk.ClassesList.klass)}
}),
smalltalk.ClassesList.klass);


smalltalk.addClass('ClassesListNode', smalltalk.Widget, ['browser', 'theClass', 'level', 'nodes'], 'IDE');
smalltalk.addMethod(
"_browser",
smalltalk.method({
selector: "browser",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@browser"];
}, self, "browser", [], smalltalk.ClassesListNode)}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_browser_",
smalltalk.method({
selector: "browser:",
fn: function (aBrowser){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@browser"]=aBrowser;
return self}, self, "browser:", [aBrowser], smalltalk.ClassesListNode)}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_getNodesFrom_",
smalltalk.method({
selector: "getNodesFrom:",
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
return self}, self, "getNodesFrom:", [aCollection], smalltalk.ClassesListNode)}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
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
}, self, "label", [], smalltalk.ClassesListNode)}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_level",
smalltalk.method({
selector: "level",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@level"];
}, self, "level", [], smalltalk.ClassesListNode)}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_level_",
smalltalk.method({
selector: "level:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@level"]=anInteger;
return self}, self, "level:", [anInteger], smalltalk.ClassesListNode)}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@nodes"];
}, self, "nodes", [], smalltalk.ClassesListNode)}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
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
return self}, self, "renderOn:", [html], smalltalk.ClassesListNode)}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@theClass"];
}, self, "theClass", [], smalltalk.ClassesListNode)}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@theClass"]=aClass;
return self}, self, "theClass:", [aClass], smalltalk.ClassesListNode)}
}),
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
}, self, "on:browser:classes:level:", [aClass,aBrowser,aCollection,anInteger], smalltalk.ClassesListNode.klass)}
}),
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
return smalltalk.withContext(function($ctx2) { $1=_st((smalltalk.Debugger || Debugger))._new();
_st($1)._error_(anError);
$2=_st($1)._open();
return $2;
})}))._on_do_((smalltalk.Error || Error),(function(error){
return smalltalk.withContext(function($ctx2) { return _st(_st((smalltalk.ErrorHandler || ErrorHandler))._new())._handleError_(error);
})}));
return self}, self, "handleError:", [anError], smalltalk.DebugErrorHandler)}
}),
smalltalk.DebugErrorHandler);


smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._register();
return self}, self, "initialize", [], smalltalk.DebugErrorHandler.klass)}
}),
smalltalk.DebugErrorHandler.klass);


smalltalk.addClass('SourceArea', smalltalk.Widget, ['editor', 'div', 'receiver', 'onDoIt'], 'IDE');
smalltalk.addMethod(
"_clear",
smalltalk.method({
selector: "clear",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._val_("");
return self}, self, "clear", [], smalltalk.SourceArea)}
}),
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
}, self, "currentLine", [], smalltalk.SourceArea)}
}),
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
}, self, "currentLineOrSelection", [], smalltalk.SourceArea)}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_doIt",
smalltalk.method({
selector: "doIt",
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
}, self, "doIt", [], smalltalk.SourceArea)}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_editor",
smalltalk.method({
selector: "editor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@editor"];
}, self, "editor", [], smalltalk.SourceArea)}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_eval_",
smalltalk.method({
selector: "eval:",
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
}, self, "eval:", [aString], smalltalk.SourceArea)}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_fileIn",
smalltalk.method({
selector: "fileIn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.Importer || Importer))._new())._import_(_st(_st(self)._currentLineOrSelection())._readStream());
return self}, self, "fileIn", [], smalltalk.SourceArea)}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_focus",
smalltalk.method({
selector: "focus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._editor())._focus();
return self}, self, "focus", [], smalltalk.SourceArea)}
}),
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
;
return self}, self, "handleKeyDown:", [anEvent], smalltalk.SourceArea)}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_inspectIt",
smalltalk.method({
selector: "inspectIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._doIt())._inspect();
return self}, self, "inspectIt", [], smalltalk.SourceArea)}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_onDoIt",
smalltalk.method({
selector: "onDoIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@onDoIt"];
}, self, "onDoIt", [], smalltalk.SourceArea)}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_onDoIt_",
smalltalk.method({
selector: "onDoIt:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@onDoIt"]=aBlock;
return self}, self, "onDoIt:", [aBlock], smalltalk.SourceArea)}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_onKeyDown_",
smalltalk.method({
selector: "onKeyDown:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@div"])._onKeyDown_(aBlock);
return self}, self, "onKeyDown:", [aBlock], smalltalk.SourceArea)}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_onKeyUp_",
smalltalk.method({
selector: "onKeyUp:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@div"])._onKeyUp_(aBlock);
return self}, self, "onKeyUp:", [aBlock], smalltalk.SourceArea)}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_print_",
smalltalk.method({
selector: "print:",
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
return self}, self, "print:", [aString], smalltalk.SourceArea)}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_printIt",
smalltalk.method({
selector: "printIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._print_(_st(_st(self)._doIt())._printString());
_st(self)._focus();
return self}, self, "printIt", [], smalltalk.SourceArea)}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@receiver"]) == nil || $receiver == undefined){
$1=_st((smalltalk.DoIt || DoIt))._new();
} else {
$1=self["@receiver"];
};
return $1;
}, self, "receiver", [], smalltalk.SourceArea)}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@receiver"]=anObject;
return self}, self, "receiver:", [anObject], smalltalk.SourceArea)}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
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
return self}, self, "renderOn:", [html], smalltalk.SourceArea)}
}),
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
}, self, "selection", [], smalltalk.SourceArea)}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_selectionEnd",
smalltalk.method({
selector: "selectionEnd",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(textarea, "_element", []), "_selectionEnd", []);
    return $1;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_selectionEnd_",
smalltalk.method({
selector: "selectionEnd:",
fn: function (anInteger) {
    var self = this;
    smalltalk.send(smalltalk.send(textarea, "_element", []), "_selectionEnd_", [anInteger]);
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_selectionStart",
smalltalk.method({
selector: "selectionStart",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(textarea, "_element", []), "_selectionStart", []);
    return $1;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_selectionStart_",
smalltalk.method({
selector: "selectionStart:",
fn: function (anInteger) {
    var self = this;
    smalltalk.send(smalltalk.send(textarea, "_element", []), "_selectionStart_", [anInteger]);
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_setEditorOn_",
smalltalk.method({
selector: "setEditorOn:",
fn: function (aTextarea) {
    var self = this;
    self['@editor'] = CodeMirror.fromTextArea(aTextarea, {theme: "amber", lineNumbers: true, enterMode: "flat", matchBrackets: true, electricChars: false});
    return self;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_val",
smalltalk.method({
selector: "val",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@editor'], "_getValue", []);
    return $1;
}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
"_val_",
smalltalk.method({
selector: "val:",
fn: function (aString) {
    var self = this;
    smalltalk.send(self['@editor'], "_setValue_", [aString]);
    return self;
}
}),
smalltalk.SourceArea);



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
return self}, self, "addTab:", [aWidget], smalltalk.TabManager)}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
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
return self}, self, "close", [], smalltalk.TabManager)}
}),
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
return self}, self, "closeTab:", [aWidget], smalltalk.TabManager)}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
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
return self}, self, "initialize", [], smalltalk.TabManager)}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_labelFor_",
smalltalk.method({
selector: "labelFor:",
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
}, self, "labelFor:", [aWidget], smalltalk.TabManager)}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_newBrowserTab",
smalltalk.method({
selector: "newBrowserTab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((smalltalk.Browser || Browser))._open();
return self}, self, "newBrowserTab", [], smalltalk.TabManager)}
}),
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
;
return self}, self, "onResize:", [aBlock], smalltalk.TabManager)}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_onWindowResize_",
smalltalk.method({
selector: "onWindowResize:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { jQuery(window).resize(aBlock);
;
return self}, self, "onWindowResize:", [aBlock], smalltalk.TabManager)}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
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
return self}, self, "open", [], smalltalk.TabManager)}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_removeBodyMargin",
smalltalk.method({
selector: "removeBodyMargin",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._setBodyMargin_((0));
return self}, self, "removeBodyMargin", [], smalltalk.TabManager)}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_removeTab_",
smalltalk.method({
selector: "removeTab:",
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._tabs())._remove_(aWidget);
_st(self)._update();
return self}, self, "removeTab:", [aWidget], smalltalk.TabManager)}
}),
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
return self}, self, "renderOn:", [html], smalltalk.TabManager)}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_renderTabFor_on_",
smalltalk.method({
selector: "renderTabFor:on:",
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
return self}, self, "renderTabFor:on:", [aWidget,html], smalltalk.TabManager)}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_renderTabs",
smalltalk.method({
selector: "renderTabs",
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
return self}, self, "renderTabs", [], smalltalk.TabManager)}
}),
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
return self}, self, "renderToolbarOn:", [html], smalltalk.TabManager)}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_search_",
smalltalk.method({
selector: "search:",
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
return self}, self, "search:", [aString], smalltalk.TabManager)}
}),
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
return smalltalk.withContext(function($ctx2) { return _st(each)._hide();
})}));
_st(aWidget)._show();
_st(self)._update();
return self}, self, "selectTab:", [aWidget], smalltalk.TabManager)}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_setBodyMargin_",
smalltalk.method({
selector: "setBodyMargin:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(".amberBody")._asJQuery())._css_put_("margin-bottom",_st(_st(anInteger)._asString()).__comma("px"));
return self}, self, "setBodyMargin:", [anInteger], smalltalk.TabManager)}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_tabs",
smalltalk.method({
selector: "tabs",
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
}, self, "tabs", [], smalltalk.TabManager)}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_update",
smalltalk.method({
selector: "update",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._renderTabs();
return self}, self, "update", [], smalltalk.TabManager)}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_updateBodyMargin",
smalltalk.method({
selector: "updateBodyMargin",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._setBodyMargin_(_st(_st("#amber")._asJQuery())._height());
return self}, self, "updateBodyMargin", [], smalltalk.TabManager)}
}),
smalltalk.TabManager);

smalltalk.addMethod(
"_updatePosition",
smalltalk.method({
selector: "updatePosition",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { jQuery('#amber').css('top', '').css('bottom', '0px');
;
return self}, self, "updatePosition", [], smalltalk.TabManager)}
}),
smalltalk.TabManager);


smalltalk.TabManager.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
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
}, self, "current", [], smalltalk.TabManager.klass)}
}),
smalltalk.TabManager.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._shouldNotImplement();
return self}, self, "new", [], smalltalk.TabManager.klass)}
}),
smalltalk.TabManager.klass);


smalltalk.addClass('TabWidget', smalltalk.Widget, ['div'], 'IDE');
smalltalk.addMethod(
"_canBeClosed",
smalltalk.method({
selector: "canBeClosed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, self, "canBeClosed", [], smalltalk.TabWidget)}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.TabManager || TabManager))._current())._closeTab_(self);
return self}, self, "close", [], smalltalk.TabWidget)}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_hide",
smalltalk.method({
selector: "hide",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@div"])._asJQuery())._hide();
return self}, self, "hide", [], smalltalk.TabWidget)}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, self, "label", [], smalltalk.TabWidget)}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.TabManager || TabManager))._current())._addTab_(self);
_st(_st((smalltalk.TabManager || TabManager))._current())._selectTab_(self);
return self}, self, "open", [], smalltalk.TabWidget)}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_remove",
smalltalk.method({
selector: "remove",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@div"])._asJQuery())._remove();
return self}, self, "remove", [], smalltalk.TabWidget)}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, self, "renderBoxOn:", [html], smalltalk.TabWidget)}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, self, "renderButtonsOn:", [html], smalltalk.TabWidget)}
}),
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
return self}, self, "renderOn:", [html], smalltalk.TabWidget)}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_renderTab",
smalltalk.method({
selector: "renderTab",
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
return self}, self, "renderTab", [], smalltalk.TabWidget)}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_show",
smalltalk.method({
selector: "show",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@div"])._asJQuery())._show();
return self}, self, "show", [], smalltalk.TabWidget)}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
"_update",
smalltalk.method({
selector: "update",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._renderTab();
return self}, self, "update", [], smalltalk.TabWidget)}
}),
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
}, self, "open", [], smalltalk.TabWidget.klass)}
}),
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
return self}, self, "addInstanceVariableNamed:toClass:", [aString,aClass], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_addNewClass",
smalltalk.method({
selector: "addNewClass",
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
return self}, self, "addNewClass", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_addNewProtocol",
smalltalk.method({
selector: "addNewProtocol",
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
return self}, self, "addNewProtocol", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_ajaxPutAt_data_",
smalltalk.method({
selector: "ajaxPutAt:data:",
fn: function (aURL,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(jQuery)._ajax_options_(aURL,smalltalk.HashedCollection._fromPairs_([_st("type").__minus_gt("PUT"),_st("data").__minus_gt(aString),_st("contentType").__minus_gt("text/plain;charset=UTF-8"),_st("error").__minus_gt((function(xhr){
return smalltalk.withContext(function($ctx2) { return _st(window)._alert_(_st(_st(_st(_st("Commiting ").__comma(aURL)).__comma(" failed with reason: \x22")).__comma(_st(xhr)._responseText())).__comma("\x22"));
})}))]));
return self}, self, "ajaxPutAt:data:", [aURL,aString], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_canBeClosed",
smalltalk.method({
selector: "canBeClosed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "canBeClosed", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_cancelChanges",
smalltalk.method({
selector: "cancelChanges",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(smalltalk.assert(self["@unsavedChanges"])){
$1=_st(window)._confirm_("Cancel changes?");
} else {
$1=true;
};
return $1;
}, self, "cancelChanges", [], smalltalk.Browser)}
}),
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
}, self, "classCommentSource", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_classDeclarationSource",
smalltalk.method({
selector: "classDeclarationSource",
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
}, self, "classDeclarationSource", [], smalltalk.Browser)}
}),
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
}, self, "classDeclarationTemplate", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_classes",
smalltalk.method({
selector: "classes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._classes())._select_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(_st(each)._category()).__eq(self["@selectedPackage"]);
})})))._sort_((function(a,b){
return smalltalk.withContext(function($ctx2) { return _st(_st(a)._name()).__lt(_st(b)._name());
})})))._asSet();
return $1;
}, self, "classes", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_commitPackage",
smalltalk.method({
selector: "commitPackage",
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
return self}, self, "commitPackage", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_compile",
smalltalk.method({
selector: "compile",
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
return self}, self, "compile", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_compileClassComment",
smalltalk.method({
selector: "compileClassComment",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@selectedClass"])._comment_(_st(self["@sourceArea"])._val());
return self}, self, "compileClassComment", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_compileDefinition",
smalltalk.method({
selector: "compileDefinition",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$ctx1.newClass=nil;
$ctx1.locals.newClass=_st(_st((smalltalk.Compiler || Compiler))._new())._evaluateExpression_(_st(self["@sourceArea"])._val());
_st(self)._resetClassesList();
_st(self)._updateCategoriesList();
$1=_st(self)._updateClassesList();
_st(self)._selectClass_($ctx1.locals.newClass);
return self}, self, "compileDefinition", [], smalltalk.Browser)}
}),
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
return self}, self, "compileMethodDefinition", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_compileMethodDefinitionFor_",
smalltalk.method({
selector: "compileMethodDefinitionFor:",
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
}, self, "compileMethodDefinitionFor:", [aClass], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_copyClass",
smalltalk.method({
selector: "copyClass",
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
return self}, self, "copyClass", [], smalltalk.Browser)}
}),
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
}, self, "declarationSource", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_disableSaveButton",
smalltalk.method({
selector: "disableSaveButton",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { if(($receiver = self["@saveButton"]) == nil || $receiver == undefined){
self["@saveButton"];
} else {
_st(self["@saveButton"])._at_put_("disabled",true);
};
self["@unsavedChanges"]=false;
return self}, self, "disableSaveButton", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_dummyMethodSource",
smalltalk.method({
selector: "dummyMethodSource",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "messageSelectorAndArgumentNames\x0a\x09\x22comment stating purpose of message\x22\x0a\x0a\x09| temporary variable names |\x0a\x09statements";
}, self, "dummyMethodSource", [], smalltalk.Browser)}
}),
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
;
return self}, self, "handleSourceAreaKeyDown:", [anEvent], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_hideClassButtons",
smalltalk.method({
selector: "hideClassButtons",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@classButtons"])._asJQuery())._hide();
return self}, self, "hideClassButtons", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_hideMethodButtons",
smalltalk.method({
selector: "hideMethodButtons",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@methodButtons"])._asJQuery())._hide();
return self}, self, "hideMethodButtons", [], smalltalk.Browser)}
}),
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
return self}, self, "initialize", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@selectedClass"]) == nil || $receiver == undefined){
$1="Browser (nil)";
} else {
$1=_st("Browser: ").__comma(_st(self["@selectedClass"])._name());
};
return $1;
}, self, "label", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_metaclassDeclarationSource",
smalltalk.method({
selector: "metaclassDeclarationSource",
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
}, self, "metaclassDeclarationSource", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_methodSource",
smalltalk.method({
selector: "methodSource",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@selectedMethod"]) == nil || $receiver == undefined){
$1=_st(self)._dummyMethodSource();
} else {
$1=_st(self["@selectedMethod"])._source();
};
return $1;
}, self, "methodSource", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_methods",
smalltalk.method({
selector: "methods",
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
}, self, "methods", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
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
}, self, "packages", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_protocols",
smalltalk.method({
selector: "protocols",
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
}, self, "protocols", [], smalltalk.Browser)}
}),
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
return self}, self, "removeClass", [], smalltalk.Browser)}
}),
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
return self}, self, "removeMethod", [], smalltalk.Browser)}
}),
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
return self}, self, "removePackage", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renameClass",
smalltalk.method({
selector: "renameClass",
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
return self}, self, "renameClass", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renamePackage",
smalltalk.method({
selector: "renamePackage",
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
return self}, self, "renamePackage", [], smalltalk.Browser)}
}),
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
return self}, self, "renderBottomPanelOn:", [html], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._renderTopPanelOn_(html);
_st(self)._renderTabsOn_(html);
$1=_st(self)._renderBottomPanelOn_(html);
return self}, self, "renderBoxOn:", [html], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
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
return self}, self, "renderButtonsOn:", [html], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renderTabsOn_",
smalltalk.method({
selector: "renderTabsOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@tabsList"]=_st(_st(html)._ul())._class_("amber_tabs amber_browser");
_st(self)._updateTabsList();
return self}, self, "renderTabsOn:", [html], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_renderTopPanelOn_",
smalltalk.method({
selector: "renderTopPanelOn:",
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
return self}, self, "renderTopPanelOn:", [html], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_resetClassesList",
smalltalk.method({
selector: "resetClassesList",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@classesList"])._resetNodes();
return self}, self, "resetClassesList", [], smalltalk.Browser)}
}),
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
return self}, self, "search:", [aString], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_searchClassReferences",
smalltalk.method({
selector: "searchClassReferences",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((smalltalk.ReferencesBrowser || ReferencesBrowser))._search_(_st(self["@selectedClass"])._name());
return self}, self, "searchClassReferences", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_searchReferencesOf_",
smalltalk.method({
selector: "searchReferencesOf:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((smalltalk.ReferencesBrowser || ReferencesBrowser))._search_(aString);
return self}, self, "searchReferencesOf:", [aString], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectCategory_",
smalltalk.method({
selector: "selectCategory:",
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
return self}, self, "selectCategory:", [aCategory], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectClass_",
smalltalk.method({
selector: "selectClass:",
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
return self}, self, "selectClass:", [aClass], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectMethod_",
smalltalk.method({
selector: "selectMethod:",
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
return self}, self, "selectMethod:", [aMethod], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectProtocol_",
smalltalk.method({
selector: "selectProtocol:",
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
return self}, self, "selectProtocol:", [aString], smalltalk.Browser)}
}),
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
return self}, self, "selectTab:", [aString], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectedClass",
smalltalk.method({
selector: "selectedClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@selectedClass"];
}, self, "selectedClass", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_selectedPackage",
smalltalk.method({
selector: "selectedPackage",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@selectedPackage"];
}, self, "selectedPackage", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_setMethodProtocol_",
smalltalk.method({
selector: "setMethodProtocol:",
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
return self}, self, "setMethodProtocol:", [aString], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_showClassButtons",
smalltalk.method({
selector: "showClassButtons",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@classButtons"])._asJQuery())._show();
return self}, self, "showClassButtons", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_showMethodButtons",
smalltalk.method({
selector: "showMethodButtons",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@methodButtons"])._asJQuery())._show();
return self}, self, "showMethodButtons", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
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
}, self, "source", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateCategoriesList",
smalltalk.method({
selector: "updateCategoriesList",
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
return self}, self, "updateCategoriesList", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateClassesList",
smalltalk.method({
selector: "updateClassesList",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.TabManager || TabManager))._current())._update();
_st(self["@classesList"])._updateNodes();
return self}, self, "updateClassesList", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateMethodsList",
smalltalk.method({
selector: "updateMethodsList",
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
return self}, self, "updateMethodsList", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateProtocolsList",
smalltalk.method({
selector: "updateProtocolsList",
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
return self}, self, "updateProtocolsList", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateSourceAndButtons",
smalltalk.method({
selector: "updateSourceAndButtons",
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
return self}, self, "updateSourceAndButtons", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateStatus",
smalltalk.method({
selector: "updateStatus",
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
return self}, self, "updateStatus", [], smalltalk.Browser)}
}),
smalltalk.Browser);

smalltalk.addMethod(
"_updateTabsList",
smalltalk.method({
selector: "updateTabsList",
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
return self}, self, "updateTabsList", [], smalltalk.Browser)}
}),
smalltalk.Browser);


smalltalk.addMethod(
"_commitPathJs",
smalltalk.method({
selector: "commitPathJs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "js";
}, self, "commitPathJs", [], smalltalk.Browser.klass)}
}),
smalltalk.Browser.klass);

smalltalk.addMethod(
"_commitPathSt",
smalltalk.method({
selector: "commitPathSt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "st";
}, self, "commitPathSt", [], smalltalk.Browser.klass)}
}),
smalltalk.Browser.klass);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._new())._open();
return self}, self, "open", [], smalltalk.Browser.klass)}
}),
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
}, self, "openOn:", [aClass], smalltalk.Browser.klass)}
}),
smalltalk.Browser.klass);


smalltalk.addClass('Debugger', smalltalk.TabWidget, ['error', 'selectedContext', 'sourceArea', 'ul', 'ul2', 'inspector', 'saveButton', 'unsavedChanges', 'selectedVariable', 'selectedVariableName', 'inspectButton'], 'IDE');
smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
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
}, self, "arguments", [], smalltalk.Debugger)}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_canBeClosed",
smalltalk.method({
selector: "canBeClosed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "canBeClosed", [], smalltalk.Debugger)}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_error",
smalltalk.method({
selector: "error",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@error"];
}, self, "error", [], smalltalk.Debugger)}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_error_",
smalltalk.method({
selector: "error:",
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@error"]=anError;
return self}, self, "error:", [anError], smalltalk.Debugger)}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.TabWidget.fn.prototype._initialize.apply(_st(self), []);
_st(self["@unsavedChanges"]).__eq(false);
return self}, self, "initialize", [], smalltalk.Debugger)}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_inspectSelectedVariable",
smalltalk.method({
selector: "inspectSelectedVariable",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@selectedVariable"])._inspect();
return self}, self, "inspectSelectedVariable", [], smalltalk.Debugger)}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "[Debugger]";
}, self, "label", [], smalltalk.Debugger)}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_method",
smalltalk.method({
selector: "method",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self["@selectedContext"])._receiver())._class())._lookupSelector_(_st(self["@selectedContext"])._selector());
return $1;
}, self, "method", [], smalltalk.Debugger)}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_proceed",
smalltalk.method({
selector: "proceed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._close();
_st(_st(self["@selectedContext"])._receiver())._perform_withArguments_(_st(self["@selectedContext"])._selector(),_st(self["@selectedContext"])._temps());
return self}, self, "proceed", [], smalltalk.Debugger)}
}),
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
}, self, "receiver", [], smalltalk.Debugger)}
}),
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
return smalltalk.withContext(function($ctx2) { self["@sourceArea"]=_st((smalltalk.SourceArea || SourceArea))._new();
self["@sourceArea"];
return _st(self["@sourceArea"])._renderOn_(html);
})}));
self["@ul2"]=_st(_st(html)._ul())._class_("amber_column debugger variables");
self["@inspector"]=_st(_st(html)._div())._class_("amber_column debugger inspector");
_st(self["@sourceArea"])._onKeyUp_((function(){
return smalltalk.withContext(function($ctx2) { return _st(self)._updateStatus();
})}));
return self}, self, "renderBottomPanelOn:", [html], smalltalk.Debugger)}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._renderTopPanelOn_(html);
$1=_st(self)._renderBottomPanelOn_(html);
return self}, self, "renderBoxOn:", [html], smalltalk.Debugger)}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
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
return self}, self, "renderButtonsOn:", [html], smalltalk.Debugger)}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_renderContext_on_",
smalltalk.method({
selector: "renderContext:on:",
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
return self}, self, "renderContext:on:", [aContext,html], smalltalk.Debugger)}
}),
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
return self}, self, "renderTopPanelOn:", [html], smalltalk.Debugger)}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_save",
smalltalk.method({
selector: "save",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { $ctx1.protocol=nil;
$ctx1.locals.protocol=_st(_st(_st(_st(_st(self["@selectedContext"])._receiver())._class())._methodDictionary())._at_(_st(self["@selectedContext"])._selector()))._category();
_st(_st(_st(self["@selectedContext"])._receiver())._class())._compile_category_(_st(self["@sourceArea"])._val(),$ctx1.locals.protocol);
_st(self)._updateStatus();
return self}, self, "save", [], smalltalk.Debugger)}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_selectContext_",
smalltalk.method({
selector: "selectContext:",
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
return self}, self, "selectContext:", [aContext], smalltalk.Debugger)}
}),
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
return smalltalk.withContext(function($ctx2) { return _st(html)._with_(_st(anObject)._printString());
})}));
_st(self)._updateVariablesList();
return self}, self, "selectVariable:named:", [anObject,aString], smalltalk.Debugger)}
}),
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
}, self, "source", [], smalltalk.Debugger)}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_updateContextsList",
smalltalk.method({
selector: "updateContextsList",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@ul"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) { return _st(self)._renderContext_on_(_st(_st(self)._error())._context(),html);
})}));
return self}, self, "updateContextsList", [], smalltalk.Debugger)}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_updateInspector",
smalltalk.method({
selector: "updateInspector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@inspector"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) { })}));
return self}, self, "updateInspector", [], smalltalk.Debugger)}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_updateSourceArea",
smalltalk.method({
selector: "updateSourceArea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@sourceArea"])._val_(_st(self)._source());
return self}, self, "updateSourceArea", [], smalltalk.Debugger)}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_updateStatus",
smalltalk.method({
selector: "updateStatus",
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
return self}, self, "updateStatus", [], smalltalk.Debugger)}
}),
smalltalk.Debugger);

smalltalk.addMethod(
"_updateVariablesList",
smalltalk.method({
selector: "updateVariablesList",
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
return self}, self, "updateVariablesList", [], smalltalk.Debugger)}
}),
smalltalk.Debugger);



smalltalk.addClass('IDETranscript', smalltalk.TabWidget, ['textarea'], 'IDE');
smalltalk.addMethod(
"_clear",
smalltalk.method({
selector: "clear",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@textarea"])._asJQuery())._val_("");
return self}, self, "clear", [], smalltalk.IDETranscript)}
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
"_cr",
smalltalk.method({
selector: "cr",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@textarea"])._asJQuery())._val_(_st(_st(_st(self["@textarea"])._asJQuery())._val()).__comma(_st((smalltalk.String || String))._cr()));
return self}, self, "cr", [], smalltalk.IDETranscript)}
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Transcript";
}, self, "label", [], smalltalk.IDETranscript)}
}),
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
return self}, self, "open", [], smalltalk.IDETranscript)}
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
self["@textarea"]=_st(html)._textarea();
_st(self["@textarea"])._class_("amber_transcript");
$1=_st(self["@textarea"])._at_put_("spellcheck","false");
return self}, self, "renderBoxOn:", [html], smalltalk.IDETranscript)}
}),
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
return smalltalk.withContext(function($ctx2) { return _st(self)._clear();
})}));
return self}, self, "renderButtonsOn:", [html], smalltalk.IDETranscript)}
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
"_show_",
smalltalk.method({
selector: "show:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { if(($receiver = self["@textarea"]) == nil || $receiver == undefined){
_st(self)._open();
} else {
self["@textarea"];
};
_st(_st(self["@textarea"])._asJQuery())._val_(_st(_st(_st(self["@textarea"])._asJQuery())._val()).__comma(_st(anObject)._asString()));
return self}, self, "show:", [anObject], smalltalk.IDETranscript)}
}),
smalltalk.IDETranscript);


smalltalk.IDETranscript.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
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
}, self, "current", [], smalltalk.IDETranscript.klass)}
}),
smalltalk.IDETranscript.klass);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((smalltalk.Transcript || Transcript))._register_(_st(self)._current());
return self}, self, "initialize", [], smalltalk.IDETranscript.klass)}
}),
smalltalk.IDETranscript.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._shouldNotImplement();
return self}, self, "new", [], smalltalk.IDETranscript.klass)}
}),
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
return self}, self, "open", [], smalltalk.IDETranscript.klass)}
}),
smalltalk.IDETranscript.klass);


smalltalk.addClass('Inspector', smalltalk.TabWidget, ['label', 'variables', 'object', 'selectedVariable', 'variablesList', 'valueTextarea', 'diveButton', 'sourceArea'], 'IDE');
smalltalk.addMethod(
"_canBeClosed",
smalltalk.method({
selector: "canBeClosed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "canBeClosed", [], smalltalk.Inspector)}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_dive",
smalltalk.method({
selector: "dive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st(self)._variables())._at_(_st(self)._selectedVariable()))._inspect();
return self}, self, "dive", [], smalltalk.Inspector)}
}),
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
return self}, self, "inspect:", [anObject], smalltalk.Inspector)}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@label"]) == nil || $receiver == undefined){
$1="Inspector (nil)";
} else {
$1=self["@label"];
};
return $1;
}, self, "label", [], smalltalk.Inspector)}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_refresh",
smalltalk.method({
selector: "refresh",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._inspect_(self["@object"]);
_st(self)._updateVariablesList();
$1=_st(self)._updateValueTextarea();
return self}, self, "refresh", [], smalltalk.Inspector)}
}),
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
return self}, self, "renderBottomPanelOn:", [html], smalltalk.Inspector)}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._renderTopPanelOn_(html);
$1=_st(self)._renderBottomPanelOn_(html);
return self}, self, "renderBoxOn:", [html], smalltalk.Inspector)}
}),
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
return self}, self, "renderButtonsOn:", [html], smalltalk.Inspector)}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_renderTopPanelOn_",
smalltalk.method({
selector: "renderTopPanelOn:",
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
return self}, self, "renderTopPanelOn:", [html], smalltalk.Inspector)}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_selectVariable_",
smalltalk.method({
selector: "selectVariable:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._selectedVariable_(aString);
_st(self)._updateVariablesList();
_st(self)._updateValueTextarea();
$1=_st(self)._updateButtons();
return self}, self, "selectVariable:", [aString], smalltalk.Inspector)}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_selectedVariable",
smalltalk.method({
selector: "selectedVariable",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@selectedVariable"];
}, self, "selectedVariable", [], smalltalk.Inspector)}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_selectedVariable_",
smalltalk.method({
selector: "selectedVariable:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@selectedVariable"]=aString;
return self}, self, "selectedVariable:", [aString], smalltalk.Inspector)}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_setLabel_",
smalltalk.method({
selector: "setLabel:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@label"]=aString;
return self}, self, "setLabel:", [aString], smalltalk.Inspector)}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_setVariables_",
smalltalk.method({
selector: "setVariables:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@variables"]=aCollection;
return self}, self, "setVariables:", [aCollection], smalltalk.Inspector)}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_sourceArea",
smalltalk.method({
selector: "sourceArea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@sourceArea"];
}, self, "sourceArea", [], smalltalk.Inspector)}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_updateButtons",
smalltalk.method({
selector: "updateButtons",
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
return self}, self, "updateButtons", [], smalltalk.Inspector)}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_updateValueTextarea",
smalltalk.method({
selector: "updateValueTextarea",
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
return self}, self, "updateValueTextarea", [], smalltalk.Inspector)}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_updateVariablesList",
smalltalk.method({
selector: "updateVariablesList",
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
return self}, self, "updateVariablesList", [], smalltalk.Inspector)}
}),
smalltalk.Inspector);

smalltalk.addMethod(
"_variables",
smalltalk.method({
selector: "variables",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@variables"];
}, self, "variables", [], smalltalk.Inspector)}
}),
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
}, self, "on:", [anObject], smalltalk.Inspector.klass)}
}),
smalltalk.Inspector.klass);


smalltalk.addClass('ProgressBar', smalltalk.TabWidget, ['percent', 'progressDiv', 'div'], 'IDE');
smalltalk.addMethod(
"_percent",
smalltalk.method({
selector: "percent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
if(($receiver = self["@percent"]) == nil || $receiver == undefined){
$1=(0);
} else {
$1=self["@percent"];
};
return $1;
}, self, "percent", [], smalltalk.ProgressBar)}
}),
smalltalk.ProgressBar);

smalltalk.addMethod(
"_percent_",
smalltalk.method({
selector: "percent:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@percent"]=aNumber;
return self}, self, "percent:", [aNumber], smalltalk.ProgressBar)}
}),
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
return self}, self, "renderOn:", [html], smalltalk.ProgressBar)}
}),
smalltalk.ProgressBar);

smalltalk.addMethod(
"_renderProgressBar",
smalltalk.method({
selector: "renderProgressBar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self["@div"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) { $1=_st(html)._div();
_st($1)._class_("progress");
$2=_st($1)._style_(_st(_st("width:").__comma(_st(_st(self)._percent())._asString())).__comma("%"));
return $2;
})}));
return self}, self, "renderProgressBar", [], smalltalk.ProgressBar)}
}),
smalltalk.ProgressBar);

smalltalk.addMethod(
"_updatePercent_",
smalltalk.method({
selector: "updatePercent:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._percent_(aNumber);
_st(self)._renderProgressBar();
return self}, self, "updatePercent:", [aNumber], smalltalk.ProgressBar)}
}),
smalltalk.ProgressBar);



smalltalk.addClass('ReferencesBrowser', smalltalk.TabWidget, ['implementors', 'senders', 'implementorsList', 'input', 'timer', 'selector', 'sendersList', 'referencedClasses', 'referencedClassesList', 'matches', 'matchesList'], 'IDE');
smalltalk.addMethod(
"_canBeClosed",
smalltalk.method({
selector: "canBeClosed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, self, "canBeClosed", [], smalltalk.ReferencesBrowser)}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_classesAndMetaclasses",
smalltalk.method({
selector: "classesAndMetaclasses",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._classes()).__comma(_st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._classes())._collect_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(each)._class();
})})));
return $1;
}, self, "classesAndMetaclasses", [], smalltalk.ReferencesBrowser)}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_implementors",
smalltalk.method({
selector: "implementors",
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
}, self, "implementors", [], smalltalk.ReferencesBrowser)}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.TabWidget.fn.prototype._initialize.apply(_st(self), []);
self["@selector"]="";
return self}, self, "initialize", [], smalltalk.ReferencesBrowser)}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "[References]";
}, self, "label", [], smalltalk.ReferencesBrowser)}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_matches",
smalltalk.method({
selector: "matches",
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
}, self, "matches", [], smalltalk.ReferencesBrowser)}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_openBrowserOn_",
smalltalk.method({
selector: "openBrowserOn:",
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
return self}, self, "openBrowserOn:", [aMethod], smalltalk.ReferencesBrowser)}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_referencedClasses",
smalltalk.method({
selector: "referencedClasses",
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
}, self, "referencedClasses", [], smalltalk.ReferencesBrowser)}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._renderInputOn_(html);
_st(self)._renderImplementorsOn_(html);
_st(self)._renderSendersOn_(html);
_st(self)._renderReferencedClassesOn_(html);
$1=_st(self)._renderMatchesOn_(html);
return self}, self, "renderBoxOn:", [html], smalltalk.ReferencesBrowser)}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_renderImplementorsOn_",
smalltalk.method({
selector: "renderImplementorsOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@implementorsList"]=_st(_st(html)._ul())._class_("amber_column implementors");
_st(self)._updateImplementorsList();
return self}, self, "renderImplementorsOn:", [html], smalltalk.ReferencesBrowser)}
}),
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
return self}, self, "renderInputOn:", [html], smalltalk.ReferencesBrowser)}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_renderMatchesOn_",
smalltalk.method({
selector: "renderMatchesOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@matchesList"]=_st(_st(html)._ul())._class_("amber_column matches");
_st(self)._updateMatchesList();
return self}, self, "renderMatchesOn:", [html], smalltalk.ReferencesBrowser)}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_renderReferencedClassesOn_",
smalltalk.method({
selector: "renderReferencedClassesOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@referencedClassesList"]=_st(_st(html)._ul())._class_("amber_column referenced_classes");
_st(self)._updateReferencedClassesList();
return self}, self, "renderReferencedClassesOn:", [html], smalltalk.ReferencesBrowser)}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_renderSendersOn_",
smalltalk.method({
selector: "renderSendersOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@sendersList"]=_st(_st(html)._ul())._class_("amber_column senders");
_st(self)._updateSendersList();
return self}, self, "renderSendersOn:", [html], smalltalk.ReferencesBrowser)}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_search_",
smalltalk.method({
selector: "search:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._searchReferencesFor_(aString);
_st(self)._updateImplementorsList();
_st(self)._updateSendersList();
_st(self)._updateReferencedClassesList();
$1=_st(self)._updateMatchesList();
return self}, self, "search:", [aString], smalltalk.ReferencesBrowser)}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_searchMethodSource",
smalltalk.method({
selector: "searchMethodSource",
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
return self}, self, "searchMethodSource", [], smalltalk.ReferencesBrowser)}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_searchReferencedClasses",
smalltalk.method({
selector: "searchReferencedClasses",
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
return self}, self, "searchReferencedClasses", [], smalltalk.ReferencesBrowser)}
}),
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
return self}, self, "searchReferencesFor:", [aString], smalltalk.ReferencesBrowser)}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_searchSelectorReferences",
smalltalk.method({
selector: "searchSelectorReferences",
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
return self}, self, "searchSelectorReferences", [], smalltalk.ReferencesBrowser)}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@selector"];
}, self, "selector", [], smalltalk.ReferencesBrowser)}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_senders",
smalltalk.method({
selector: "senders",
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
}, self, "senders", [], smalltalk.ReferencesBrowser)}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_setInputEvents",
smalltalk.method({
selector: "setInputEvents",
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
return self}, self, "setInputEvents", [], smalltalk.ReferencesBrowser)}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_updateImplementorsList",
smalltalk.method({
selector: "updateImplementorsList",
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
return self}, self, "updateImplementorsList", [], smalltalk.ReferencesBrowser)}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_updateMatchesList",
smalltalk.method({
selector: "updateMatchesList",
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
return self}, self, "updateMatchesList", [], smalltalk.ReferencesBrowser)}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_updateReferencedClassesList",
smalltalk.method({
selector: "updateReferencedClassesList",
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
return self}, self, "updateReferencedClassesList", [], smalltalk.ReferencesBrowser)}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
"_updateSendersList",
smalltalk.method({
selector: "updateSendersList",
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
return self}, self, "updateSendersList", [], smalltalk.ReferencesBrowser)}
}),
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
}, self, "search:", [aString], smalltalk.ReferencesBrowser.klass)}
}),
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
return smalltalk.withContext(function($ctx2) { return _st(_st(each)._isAbstract())._not();
})}));
return $1;
}, self, "allClasses", [], smalltalk.TestRunner)}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_classes",
smalltalk.method({
selector: "classes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(self)._allClasses())._select_((function(each){
return smalltalk.withContext(function($ctx2) { return _st(_st(self)._selectedCategories())._includes_(_st(each)._category());
})})))._sort_((function(a,b){
return smalltalk.withContext(function($ctx2) { return _st(_st(a)._name()).__gt(_st(b)._name());
})}));
return $1;
}, self, "classes", [], smalltalk.TestRunner)}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.TabWidget.fn.prototype._initialize.apply(_st(self), []);
self["@result"]=_st((smalltalk.TestResult || TestResult))._new();
return self}, self, "initialize", [], smalltalk.TestRunner)}
}),
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
}, self, "isSelectedCategory:", [aCategory], smalltalk.TestRunner)}
}),
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
}, self, "isSelectedClass:", [aClass], smalltalk.TestRunner)}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "SUnit";
}, self, "label", [], smalltalk.TestRunner)}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
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
}, self, "packages", [], smalltalk.TestRunner)}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_performFailure_",
smalltalk.method({
selector: "performFailure:",
fn: function (aTestCase){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aTestCase)._runCase();
return self}, self, "performFailure:", [aTestCase], smalltalk.TestRunner)}
}),
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
}, self, "printErrors", [], smalltalk.TestRunner)}
}),
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
}, self, "printFailures", [], smalltalk.TestRunner)}
}),
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
}, self, "printPasses", [], smalltalk.TestRunner)}
}),
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
}, self, "printTotal", [], smalltalk.TestRunner)}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_progressBar",
smalltalk.method({
selector: "progressBar",
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
}, self, "progressBar", [], smalltalk.TestRunner)}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._renderCategoriesOn_(html);
_st(self)._renderClassesOn_(html);
$1=_st(self)._renderResultsOn_(html);
return self}, self, "renderBoxOn:", [html], smalltalk.TestRunner)}
}),
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
return smalltalk.withContext(function($ctx2) { return _st(self)._run_(_st(self)._testCases());
})}));
return self}, self, "renderButtonsOn:", [html], smalltalk.TestRunner)}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_renderCategoriesOn_",
smalltalk.method({
selector: "renderCategoriesOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@packagesList"]=_st(_st(html)._ul())._class_("amber_column sunit packages");
_st(self)._updateCategoriesList();
return self}, self, "renderCategoriesOn:", [html], smalltalk.TestRunner)}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_renderClassesOn_",
smalltalk.method({
selector: "renderClassesOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@classesList"]=_st(_st(html)._ul())._class_("amber_column sunit classes");
_st(self)._updateClassesList();
return self}, self, "renderClassesOn:", [html], smalltalk.TestRunner)}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_renderErrorsOn_",
smalltalk.method({
selector: "renderErrorsOn:",
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
return self}, self, "renderErrorsOn:", [html], smalltalk.TestRunner)}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_renderFailuresOn_",
smalltalk.method({
selector: "renderFailuresOn:",
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
return self}, self, "renderFailuresOn:", [html], smalltalk.TestRunner)}
}),
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
return self}, self, "renderResultsOn:", [html], smalltalk.TestRunner)}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_result",
smalltalk.method({
selector: "result",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self["@result"];
}, self, "result", [], smalltalk.TestRunner)}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_run_",
smalltalk.method({
selector: "run:",
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
return self}, self, "run:", [aCollection], smalltalk.TestRunner)}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_selectAllCategories",
smalltalk.method({
selector: "selectAllCategories",
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
return self}, self, "selectAllCategories", [], smalltalk.TestRunner)}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_selectAllClasses",
smalltalk.method({
selector: "selectAllClasses",
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
return self}, self, "selectAllClasses", [], smalltalk.TestRunner)}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_selectedCategories",
smalltalk.method({
selector: "selectedCategories",
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
}, self, "selectedCategories", [], smalltalk.TestRunner)}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_selectedClasses",
smalltalk.method({
selector: "selectedClasses",
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
}, self, "selectedClasses", [], smalltalk.TestRunner)}
}),
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
}, self, "statusInfo", [], smalltalk.TestRunner)}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_testCases",
smalltalk.method({
selector: "testCases",
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
}, self, "testCases", [], smalltalk.TestRunner)}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_toggleCategory_",
smalltalk.method({
selector: "toggleCategory:",
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
return self}, self, "toggleCategory:", [aCategory], smalltalk.TestRunner)}
}),
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
return self}, self, "toggleClass:", [aClass], smalltalk.TestRunner)}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_updateCategoriesList",
smalltalk.method({
selector: "updateCategoriesList",
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
return self}, self, "updateCategoriesList", [], smalltalk.TestRunner)}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_updateClassesList",
smalltalk.method({
selector: "updateClassesList",
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
return self}, self, "updateClassesList", [], smalltalk.TestRunner)}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_updateMethodsList",
smalltalk.method({
selector: "updateMethodsList",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@methodsList"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) { _st(self)._renderErrorsOn_(html);
return _st(self)._renderFailuresOn_(html);
})}));
return self}, self, "updateMethodsList", [], smalltalk.TestRunner)}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
"_updateStatusDiv",
smalltalk.method({
selector: "updateStatusDiv",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@statusDiv"])._class_(_st("sunit status ").__comma(_st(self["@result"])._status()));
_st(self["@statusDiv"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) { return _st(_st(html)._span())._with_(_st(self)._statusInfo());
})}));
return self}, self, "updateStatusDiv", [], smalltalk.TestRunner)}
}),
smalltalk.TestRunner);



smalltalk.addClass('Workspace', smalltalk.TabWidget, ['sourceArea'], 'IDE');
smalltalk.addMethod(
"_clearWorkspace",
smalltalk.method({
selector: "clearWorkspace",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@sourceArea"])._clear();
return self}, self, "clearWorkspace", [], smalltalk.Workspace)}
}),
smalltalk.Workspace);

smalltalk.addMethod(
"_doIt",
smalltalk.method({
selector: "doIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@sourceArea"])._doIt();
return self}, self, "doIt", [], smalltalk.Workspace)}
}),
smalltalk.Workspace);

smalltalk.addMethod(
"_fileIn",
smalltalk.method({
selector: "fileIn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@sourceArea"])._fileIn();
return self}, self, "fileIn", [], smalltalk.Workspace)}
}),
smalltalk.Workspace);

smalltalk.addMethod(
"_inspectIt",
smalltalk.method({
selector: "inspectIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@sourceArea"])._inspectIt();
return self}, self, "inspectIt", [], smalltalk.Workspace)}
}),
smalltalk.Workspace);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Workspace";
}, self, "label", [], smalltalk.Workspace)}
}),
smalltalk.Workspace);

smalltalk.addMethod(
"_printIt",
smalltalk.method({
selector: "printIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@sourceArea"])._printIt();
return self}, self, "printIt", [], smalltalk.Workspace)}
}),
smalltalk.Workspace);

smalltalk.addMethod(
"_renderBoxOn_",
smalltalk.method({
selector: "renderBoxOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@sourceArea"]=_st((smalltalk.SourceArea || SourceArea))._new();
_st(self["@sourceArea"])._renderOn_(html);
return self}, self, "renderBoxOn:", [html], smalltalk.Workspace)}
}),
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
return self}, self, "renderButtonsOn:", [html], smalltalk.Workspace)}
}),
smalltalk.Workspace);

smalltalk.addMethod(
"_show",
smalltalk.method({
selector: "show",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.TabWidget.fn.prototype._show.apply(_st(self), []);
_st(self["@sourceArea"])._focus();
return self}, self, "show", [], smalltalk.Workspace)}
}),
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
return self}, self, "inspect", [], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
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
return self}, self, "inspectOn:", [anInspector], smalltalk.Object)}
}),
smalltalk.Object);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
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
return self}, self, "inspectOn:", [anInspector], smalltalk.Collection)}
}),
smalltalk.Collection);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
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
return self}, self, "inspectOn:", [anInspector], smalltalk.HashedCollection)}
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
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
return self}, self, "inspectOn:", [anInspector], smalltalk.String)}
}),
smalltalk.String);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
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
return self}, self, "inspectOn:", [anInspector], smalltalk.Set)}
}),
smalltalk.Set);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
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
return self}, self, "inspectOn:", [anInspector], smalltalk.Date)}
}),
smalltalk.Date);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
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
return self}, self, "inspectOn:", [anInspector], smalltalk.MethodContext)}
}),
smalltalk.MethodContext);

