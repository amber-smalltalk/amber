smalltalk.addPackage('Helios-Workspace');
smalltalk.addClass('HLCodeModel', smalltalk.Object, ['announcer', 'environment', 'receiver'], 'Helios-Workspace');
smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@announcer"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@announcer"]=_st((smalltalk.Announcer || Announcer))._new();
$1=self["@announcer"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{}, smalltalk.HLCodeModel)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
"_defaultReceiver",
smalltalk.method({
selector: "defaultReceiver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.DoIt || DoIt))._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultReceiver",{}, smalltalk.HLCodeModel)})},
messageSends: ["new"]}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
"_doIt_",
smalltalk.method({
selector: "doIt:",
fn: function (someCode){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._environment())._eval_on_(someCode,_st(self)._receiver());
return $1;
}, function($ctx1) {$ctx1.fill(self,"doIt:",{someCode:someCode}, smalltalk.HLCodeModel)})},
messageSends: ["eval:on:", "receiver", "environment"]}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
"_environment",
smalltalk.method({
selector: "environment",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@environment"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(_st((smalltalk.HLManager || HLManager))._current())._environment();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"environment",{}, smalltalk.HLCodeModel)})},
messageSends: ["ifNil:", "environment", "current"]}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
"_environment_",
smalltalk.method({
selector: "environment:",
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@environment"]=anEnvironment;
return self}, function($ctx1) {$ctx1.fill(self,"environment:",{anEnvironment:anEnvironment}, smalltalk.HLCodeModel)})},
messageSends: []}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@receiver"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@receiver"]=_st(self)._defaultReceiver();
$1=self["@receiver"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{}, smalltalk.HLCodeModel)})},
messageSends: ["ifNil:", "defaultReceiver"]}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@receiver"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{anObject:anObject}, smalltalk.HLCodeModel)})},
messageSends: []}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
"_subscribe_",
smalltalk.method({
selector: "subscribe:",
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aWidget)._subscribeTo_(_st(self)._announcer());
return self}, function($ctx1) {$ctx1.fill(self,"subscribe:",{aWidget:aWidget}, smalltalk.HLCodeModel)})},
messageSends: ["subscribeTo:", "announcer"]}),
smalltalk.HLCodeModel);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._environment_(anEnvironment);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anEnvironment:anEnvironment}, smalltalk.HLCodeModel.klass)})},
messageSends: ["environment:", "new", "yourself"]}),
smalltalk.HLCodeModel.klass);


smalltalk.addClass('HLCodeWidget', smalltalk.HLWidget, ['model', 'wrapper', 'code', 'editor'], 'Helios-Workspace');
smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._model())._announcer();
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{}, smalltalk.HLCodeWidget)})},
messageSends: ["announcer", "model"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_clear",
smalltalk.method({
selector: "clear",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._contents_("");
return self}, function($ctx1) {$ctx1.fill(self,"clear",{}, smalltalk.HLCodeWidget)})},
messageSends: ["contents:"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_configureEditor",
smalltalk.method({
selector: "configureEditor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._editor())._at_put_("amberCodeWidget",self);
return self}, function($ctx1) {$ctx1.fill(self,"configureEditor",{}, smalltalk.HLCodeWidget)})},
messageSends: ["at:put:", "editor"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@editor"])._getValue();
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{}, smalltalk.HLCodeWidget)})},
messageSends: ["getValue"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_contents_",
smalltalk.method({
selector: "contents:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@editor"])._setValue_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"contents:",{aString:aString}, smalltalk.HLCodeWidget)})},
messageSends: ["setValue:"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_currentLine",
smalltalk.method({
selector: "currentLine",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@editor"])._getLine_(_st(_st(self["@editor"])._getCursor())._line());
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentLine",{}, smalltalk.HLCodeWidget)})},
messageSends: ["getLine:", "line", "getCursor"]}),
smalltalk.HLCodeWidget);

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
}, function($ctx1) {$ctx1.fill(self,"currentLineOrSelection",{}, smalltalk.HLCodeWidget)})},
messageSends: ["ifFalse:ifTrue:", "currentLine", "selection", "somethingSelected"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_doIt",
smalltalk.method({
selector: "doIt",
fn: function (){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { var $1;
_st(_st(self)._announcer())._announce_(_st((smalltalk.HLDoItRequested || HLDoItRequested))._on_(self["@model"]));
result=_st(self["@model"])._doIt_(_st(self)._currentLineOrSelection());
_st(_st(self)._announcer())._announce_(_st((smalltalk.HLDoItExecuted || HLDoItExecuted))._on_(self["@model"]));
$1=result;
return $1;
}, function($ctx1) {$ctx1.fill(self,"doIt",{result:result}, smalltalk.HLCodeWidget)})},
messageSends: ["announce:", "on:", "announcer", "doIt:", "currentLineOrSelection"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_editor",
smalltalk.method({
selector: "editor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@editor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"editor",{}, smalltalk.HLCodeWidget)})},
messageSends: []}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_focus",
smalltalk.method({
selector: "focus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@editor"])._focus();
return self}, function($ctx1) {$ctx1.fill(self,"focus",{}, smalltalk.HLCodeWidget)})},
messageSends: ["focus"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_inspectIt",
smalltalk.method({
selector: "inspectIt",
fn: function (){
var self=this;
var newInspector;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._announcer())._announce_(_st((smalltalk.HLInspectItRequested || HLInspectItRequested))._on_(self["@model"]));
newInspector=_st(self)._makeInspectorOn_(_st(self)._doIt());
_st(newInspector)._open();
return self}, function($ctx1) {$ctx1.fill(self,"inspectIt",{newInspector:newInspector}, smalltalk.HLCodeWidget)})},
messageSends: ["announce:", "on:", "announcer", "makeInspectorOn:", "doIt", "open"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_makeInspectorOn_",
smalltalk.method({
selector: "makeInspectorOn:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.HLInspector || HLInspector))._new();
_st($2)._inspect_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeInspectorOn:",{anObject:anObject}, smalltalk.HLCodeWidget)})},
messageSends: ["inspect:", "new", "yourself"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@model"];
if(($receiver = $2) == nil || $receiver == undefined){
_st(self)._model_(_st((smalltalk.HLCodeModel || HLCodeModel))._new());
$1=self["@model"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{}, smalltalk.HLCodeWidget)})},
messageSends: ["ifNil:", "model:", "new"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@model"]=aModel;
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel}, smalltalk.HLCodeWidget)})},
messageSends: []}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_onDoIt",
smalltalk.method({
selector: "onDoIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._doIt();
return self}, function($ctx1) {$ctx1.fill(self,"onDoIt",{}, smalltalk.HLCodeWidget)})},
messageSends: ["doIt"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_onInspectIt",
smalltalk.method({
selector: "onInspectIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._inspectIt();
return self}, function($ctx1) {$ctx1.fill(self,"onInspectIt",{}, smalltalk.HLCodeWidget)})},
messageSends: ["inspectIt"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_onPrintIt",
smalltalk.method({
selector: "onPrintIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._printIt();
return self}, function($ctx1) {$ctx1.fill(self,"onPrintIt",{}, smalltalk.HLCodeWidget)})},
messageSends: ["printIt"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_onSaveIt",
smalltalk.method({
selector: "onSaveIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"onSaveIt",{}, smalltalk.HLCodeWidget)})},
messageSends: []}),
smalltalk.HLCodeWidget);

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
return self}, function($ctx1) {$ctx1.fill(self,"print:",{aString:aString,start:start,stop:stop,currentLine:currentLine}, smalltalk.HLCodeWidget)})},
messageSends: ["line", "getCursor:", "new", "at:put:", "ch", "ifEmpty:", "size", "getLine:", "setSelection:end:", "->", "getSelection", "+", "at:", "replaceSelection:", ",", "setCursor:"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_printIt",
smalltalk.method({
selector: "printIt",
fn: function (){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { result=_st(self)._doIt();
_st(_st(self)._announcer())._announce_(_st((smalltalk.HLPrintItRequested || HLPrintItRequested))._on_(self["@model"]));
_st(self)._print_(_st(result)._printString());
_st(self)._focus();
return self}, function($ctx1) {$ctx1.fill(self,"printIt",{result:result}, smalltalk.HLCodeWidget)})},
messageSends: ["doIt", "announce:", "on:", "announcer", "print:", "printString", "focus"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._model())._receiver();
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{}, smalltalk.HLCodeWidget)})},
messageSends: ["receiver", "model"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._receiver_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{anObject:anObject}, smalltalk.HLCodeWidget)})},
messageSends: ["receiver:", "model"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@code"]=_st(html)._textarea();
_st(self)._setEditorOn_(_st(self["@code"])._element());
_st(self)._configureEditor();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html}, smalltalk.HLCodeWidget)})},
messageSends: ["textarea", "setEditorOn:", "element", "configureEditor"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_saveIt",
smalltalk.method({
selector: "saveIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"saveIt",{}, smalltalk.HLCodeWidget)})},
messageSends: []}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_selection",
smalltalk.method({
selector: "selection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@editor"])._getSelection();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selection",{}, smalltalk.HLCodeWidget)})},
messageSends: ["getSelection"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_selectionEnd",
smalltalk.method({
selector: "selectionEnd",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self["@code"])._element())._selectionEnd();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectionEnd",{}, smalltalk.HLCodeWidget)})},
messageSends: ["selectionEnd", "element"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_selectionEnd_",
smalltalk.method({
selector: "selectionEnd:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@code"])._element())._selectionEnd_(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"selectionEnd:",{anInteger:anInteger}, smalltalk.HLCodeWidget)})},
messageSends: ["selectionEnd:", "element"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_selectionStart",
smalltalk.method({
selector: "selectionStart",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self["@code"])._element())._selectionStart();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectionStart",{}, smalltalk.HLCodeWidget)})},
messageSends: ["selectionStart", "element"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
"_selectionStart_",
smalltalk.method({
selector: "selectionStart:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self["@code"])._element())._selectionStart_(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"selectionStart:",{anInteger:anInteger}, smalltalk.HLCodeWidget)})},
messageSends: ["selectionStart:", "element"]}),
smalltalk.HLCodeWidget);

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
                electricChars: false,
				keyMap: 'Amber'
	});
return self}, function($ctx1) {$ctx1.fill(self,"setEditorOn:",{aTextarea:aTextarea}, smalltalk.HLCodeWidget)})},
messageSends: []}),
smalltalk.HLCodeWidget);


smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
smalltalk.HLWidget.klass.fn.prototype._initialize.apply(_st(self), []);
$1=self;
_st($1)._setupCodeMirror();
_st($1)._setupCommands();
$2=_st($1)._setupKeyMaps();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.HLCodeWidget.klass)})},
messageSends: ["initialize", "setupCodeMirror", "setupCommands", "setupKeyMaps"]}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
"_keyMap",
smalltalk.method({
selector: "keyMap",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(_st(_st((smalltalk.HLManager || HLManager))._current())._keyBinder())._systemIsMac();
if(smalltalk.assert($2)){
$1=_st(self)._macKeyMap();
} else {
$1=_st(self)._pcKeyMap();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyMap",{}, smalltalk.HLCodeWidget.klass)})},
messageSends: ["ifTrue:ifFalse:", "macKeyMap", "pcKeyMap", "systemIsMac", "keyBinder", "current"]}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
"_macKeyMap",
smalltalk.method({
selector: "macKeyMap",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=smalltalk.HashedCollection._fromPairs_([_st("Alt-Backspace").__minus_gt("delWordBefore"),_st("Alt-Delete").__minus_gt("delWordAfter"),_st("Alt-Left").__minus_gt("goWordBoundaryLeft"),_st("Alt-Right").__minus_gt("goWordBoundaryRight"),_st("Cmd-A").__minus_gt("selectAll"),_st("Cmd-Alt-F").__minus_gt("replace"),_st("Cmd-D").__minus_gt("doIt"),_st("Cmd-Down").__minus_gt("goDocEnd"),_st("Cmd-End").__minus_gt("goDocEnd"),_st("Cmd-F").__minus_gt("find"),_st("Cmd-G").__minus_gt("findNext"),_st("Cmd-I").__minus_gt("inspectIt"),_st("Cmd-Left").__minus_gt("goLineStart"),_st("Cmd-P").__minus_gt("printIt"),_st("Cmd-Right").__minus_gt("goLineEnd"),_st("Cmd-S").__minus_gt("saveIt"),_st("Cmd-Up").__minus_gt("goDocStart"),_st("Cmd-Y").__minus_gt("redo"),_st("Cmd-Z").__minus_gt("undo"),_st("Cmd-[").__minus_gt("indentLess"),_st("Cmd-]").__minus_gt("indentMore"),_st("Ctrl-Alt-Backspace").__minus_gt("delWordAfter"),_st("Shift-Cmd-Alt-F").__minus_gt("replaceAll"),_st("Shift-Cmd-G").__minus_gt("findPrev"),_st("Shift-Cmd-Z").__minus_gt("redo"),_st("fallthrough").__minus_gt(["basic"])]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"macKeyMap",{}, smalltalk.HLCodeWidget.klass)})},
messageSends: ["->"]}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
"_pcKeyMap",
smalltalk.method({
selector: "pcKeyMap",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=[_st("Alt-Left").__minus_gt("goLineStart"),_st("Alt-Right").__minus_gt("goLineEnd"),_st("Alt-Up").__minus_gt("goDocStart"),_st("Ctrl-A").__minus_gt("selectAll"),_st("Ctrl-Backspace").__minus_gt("delWordBefore"),_st("Ctrl-D").__minus_gt("doIt"),_st("Ctrl-Delete").__minus_gt("delWordAfter"),_st("Ctrl-Down").__minus_gt("goDocEnd"),_st("Ctrl-End").__minus_gt("goDocEnd"),_st("Ctrl-F").__minus_gt("find"),_st("Ctrl-G").__minus_gt("findNext"),_st("Ctrl-I").__minus_gt("inspectIt"),_st("Ctrl-Home").__minus_gt("goDocStart"),_st("Ctrl-Left").__minus_gt("goWordBoundaryLeft"),_st("Ctrl-P").__minus_gt("printIt"),_st("Ctrl-Right").__minus_gt("goWordBoundaryRight"),_st("Ctrl-S").__minus_gt("saveIt"),_st("Ctrl-Y").__minus_gt("redo"),_st("Ctrl-Z").__minus_gt("undo"),_st("Ctrl-[").__minus_gt("indentLess"),_st("Ctrl-]").__minus_gt("indentMore"),_st("Shift-Ctrl-F").__minus_gt("replace"),_st("Shift-Ctrl-G").__minus_gt("findPrev"),_st("Shift-Ctrl-R").__minus_gt("replaceAll"),_st("Shift-Ctrl-Z").__minus_gt("redo"),_st("fallthrough").__minus_gt(["basic"])];
return $1;
}, function($ctx1) {$ctx1.fill(self,"pcKeyMap",{}, smalltalk.HLCodeWidget.klass)})},
messageSends: ["->"]}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
"_setupCodeMirror",
smalltalk.method({
selector: "setupCodeMirror",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) {  CodeMirror.keyMap.default.fallthrough = ["basic"] ;
return self}, function($ctx1) {$ctx1.fill(self,"setupCodeMirror",{}, smalltalk.HLCodeWidget.klass)})},
messageSends: []}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
"_setupCommands",
smalltalk.method({
selector: "setupCommands",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.CodeMirror || CodeMirror))._basicAt_("commands");
_st($1)._at_put_("doIt",(function(cm){
return smalltalk.withContext(function($ctx2) {return _st(_st(cm)._amberCodeWidget())._doIt();
}, function($ctx2) {$ctx2.fillBlock({cm:cm},$ctx1)})}));
_st($1)._at_put_("inspectIt",(function(cm){
return smalltalk.withContext(function($ctx2) {return _st(_st(cm)._amberCodeWidget())._inspectIt();
}, function($ctx2) {$ctx2.fillBlock({cm:cm},$ctx1)})}));
_st($1)._at_put_("printIt",(function(cm){
return smalltalk.withContext(function($ctx2) {return _st(_st(cm)._amberCodeWidget())._printIt();
}, function($ctx2) {$ctx2.fillBlock({cm:cm},$ctx1)})}));
$2=_st($1)._at_put_("saveIt",(function(cm){
return smalltalk.withContext(function($ctx2) {return _st(_st(cm)._amberCodeWidget())._saveIt();
}, function($ctx2) {$ctx2.fillBlock({cm:cm},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupCommands",{}, smalltalk.HLCodeWidget.klass)})},
messageSends: ["at:put:", "doIt", "amberCodeWidget", "basicAt:", "inspectIt", "printIt", "saveIt"]}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
"_setupKeyMaps",
smalltalk.method({
selector: "setupKeyMaps",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { CodeMirror.keyMap['Amber'] = self._keyMap();
return self}, function($ctx1) {$ctx1.fill(self,"setupKeyMaps",{}, smalltalk.HLCodeWidget.klass)})},
messageSends: []}),
smalltalk.HLCodeWidget.klass);


smalltalk.addClass('HLSourceCodeWidget', smalltalk.HLCodeWidget, [], 'Helios-Workspace');
smalltalk.addMethod(
"_onKeyDown_",
smalltalk.method({
selector: "onKeyDown:",
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=smalltalk.HLCodeWidget.fn.prototype._onKeyDown_.apply(_st(self), [anEvent]);
if(! smalltalk.assert($1)){
return false;
};
$2=_st(anEvent)._ctrlKey();
if(smalltalk.assert($2)){
$3=_st(_st(anEvent)._keyCode()).__eq((83));
if(smalltalk.assert($3)){
_st(self)._onSave();
_st(anEvent)._preventDefault();
return false;
};
};
return self}, function($ctx1) {$ctx1.fill(self,"onKeyDown:",{anEvent:anEvent}, smalltalk.HLSourceCodeWidget)})},
messageSends: ["ifFalse:", "onKeyDown:", "ifTrue:", "onSave", "preventDefault", "=", "keyCode", "ctrlKey"]}),
smalltalk.HLSourceCodeWidget);

smalltalk.addMethod(
"_onSave",
smalltalk.method({
selector: "onSave",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"onSave",{}, smalltalk.HLSourceCodeWidget)})},
messageSends: []}),
smalltalk.HLSourceCodeWidget);



smalltalk.addClass('HLWorkspace', smalltalk.HLWidget, ['model', 'codeWidget'], 'Helios-Workspace');
smalltalk.addMethod(
"_codeWidget",
smalltalk.method({
selector: "codeWidget",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$4,$1;
$2=self["@codeWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
$3=_st((smalltalk.HLCodeWidget || HLCodeWidget))._new();
_st($3)._model_(_st(_st(self)._model())._code());
$4=_st($3)._yourself();
self["@codeWidget"]=$4;
$1=self["@codeWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"codeWidget",{}, smalltalk.HLWorkspace)})},
messageSends: ["ifNil:", "model:", "code", "model", "new", "yourself"]}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@model"];
if(($receiver = $2) == nil || $receiver == undefined){
_st(self)._model_(_st((smalltalk.HLWorkspaceModel || HLWorkspaceModel))._new());
$1=self["@model"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{}, smalltalk.HLWorkspace)})},
messageSends: ["ifNil:", "model:", "new"]}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@model"]=aModel;
_st(_st(self)._codeWidget())._model_(_st(aModel)._code());
_st(self)._observeCodeWidget();
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel}, smalltalk.HLWorkspace)})},
messageSends: ["model:", "code", "codeWidget", "observeCodeWidget"]}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
"_observeCodeWidget",
smalltalk.method({
selector: "observeCodeWidget",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"observeCodeWidget",{}, smalltalk.HLWorkspace)})},
messageSends: []}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
"_onDoIt",
smalltalk.method({
selector: "onDoIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"onDoIt",{}, smalltalk.HLWorkspace)})},
messageSends: []}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
"_onInspectIt",
smalltalk.method({
selector: "onInspectIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"onInspectIt",{}, smalltalk.HLWorkspace)})},
messageSends: []}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
"_onPrintIt",
smalltalk.method({
selector: "onPrintIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"onPrintIt",{}, smalltalk.HLWorkspace)})},
messageSends: []}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(html)._with_(_st(self)._codeWidget());
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html}, smalltalk.HLWorkspace)})},
messageSends: ["with:", "codeWidget"]}),
smalltalk.HLWorkspace);


smalltalk.addMethod(
"_canBeOpenAsTab",
smalltalk.method({
selector: "canBeOpenAsTab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{}, smalltalk.HLWorkspace.klass)})},
messageSends: []}),
smalltalk.HLWorkspace.klass);

smalltalk.addMethod(
"_tabLabel",
smalltalk.method({
selector: "tabLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Workspace";
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{}, smalltalk.HLWorkspace.klass)})},
messageSends: []}),
smalltalk.HLWorkspace.klass);

smalltalk.addMethod(
"_tabPriority",
smalltalk.method({
selector: "tabPriority",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (10);
}, function($ctx1) {$ctx1.fill(self,"tabPriority",{}, smalltalk.HLWorkspace.klass)})},
messageSends: []}),
smalltalk.HLWorkspace.klass);


smalltalk.addClass('HLWorkspaceModel', smalltalk.Object, ['announcer', 'environment', 'code'], 'Helios-Workspace');
smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@announcer"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@announcer"]=_st((smalltalk.Announcer || Announcer))._new();
$1=self["@announcer"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{}, smalltalk.HLWorkspaceModel)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLWorkspaceModel);

smalltalk.addMethod(
"_code",
smalltalk.method({
selector: "code",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@code"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st((smalltalk.HLCodeModel || HLCodeModel))._on_(_st(self)._environment());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"code",{}, smalltalk.HLWorkspaceModel)})},
messageSends: ["ifNil:", "on:", "environment"]}),
smalltalk.HLWorkspaceModel);

smalltalk.addMethod(
"_environment",
smalltalk.method({
selector: "environment",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@environment"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(_st((smalltalk.HLManager || HLManager))._current())._environment();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"environment",{}, smalltalk.HLWorkspaceModel)})},
messageSends: ["ifNil:", "environment", "current"]}),
smalltalk.HLWorkspaceModel);

smalltalk.addMethod(
"_environment_",
smalltalk.method({
selector: "environment:",
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@environment"]=anEnvironment;
return self}, function($ctx1) {$ctx1.fill(self,"environment:",{anEnvironment:anEnvironment}, smalltalk.HLWorkspaceModel)})},
messageSends: []}),
smalltalk.HLWorkspaceModel);

smalltalk.addMethod(
"_onKeyDown_",
smalltalk.method({
selector: "onKeyDown:",
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
return self}, function($ctx1) {$ctx1.fill(self,"onKeyDown:",{anEvent:anEvent}, smalltalk.HLWorkspaceModel)})},
messageSends: []}),
smalltalk.HLWorkspaceModel);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._environment_(anEnvironment);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anEnvironment:anEnvironment}, smalltalk.HLWorkspaceModel.klass)})},
messageSends: ["environment:", "new", "yourself"]}),
smalltalk.HLWorkspaceModel.klass);


