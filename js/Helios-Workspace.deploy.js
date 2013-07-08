smalltalk.addPackage('Helios-Workspace');
smalltalk.addClass('HLCodeModel', smalltalk.Object, ['announcer', 'environment', 'receiver'], 'Helios-Workspace');
smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
function $Announcer(){return smalltalk.Announcer||(typeof Announcer=="undefined"?nil:Announcer)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@announcer"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@announcer"]=_st($Announcer())._new();
$1=self["@announcer"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.HLCodeModel)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultReceiver",
fn: function (){
var self=this;
function $DoIt(){return smalltalk.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($DoIt())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultReceiver",{},smalltalk.HLCodeModel)})},
messageSends: ["new"]}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
smalltalk.method({
selector: "doIt:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._environment())._eval_on_(aString,self._receiver());
return $1;
}, function($ctx1) {$ctx1.fill(self,"doIt:",{aString:aString},smalltalk.HLCodeModel)})},
messageSends: ["eval:on:", "receiver", "environment"]}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
smalltalk.method({
selector: "environment",
fn: function (){
var self=this;
function $HLManager(){return smalltalk.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@environment"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(_st($HLManager())._current())._environment();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"environment",{},smalltalk.HLCodeModel)})},
messageSends: ["ifNil:", "environment", "current"]}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
smalltalk.method({
selector: "environment:",
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@environment"]=anEnvironment;
return self}, function($ctx1) {$ctx1.fill(self,"environment:",{anEnvironment:anEnvironment},smalltalk.HLCodeModel)})},
messageSends: []}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
smalltalk.method({
selector: "inspect:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._environment())._inspect_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},smalltalk.HLCodeModel)})},
messageSends: ["inspect:", "environment"]}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@receiver"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@receiver"]=self._defaultReceiver();
$1=self["@receiver"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},smalltalk.HLCodeModel)})},
messageSends: ["ifNil:", "defaultReceiver"]}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@receiver"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{anObject:anObject},smalltalk.HLCodeModel)})},
messageSends: []}),
smalltalk.HLCodeModel);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._environment_(anEnvironment);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anEnvironment:anEnvironment},smalltalk.HLCodeModel.klass)})},
messageSends: ["environment:", "new", "yourself"]}),
smalltalk.HLCodeModel.klass);


smalltalk.addClass('HLCodeWidget', smalltalk.HLWidget, ['model', 'wrapper', 'code', 'editor', 'state'], 'Helios-Workspace');
smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._announcer();
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.HLCodeWidget)})},
messageSends: ["announcer", "model"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "canHaveFocus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"canHaveFocus",{},smalltalk.HLCodeWidget)})},
messageSends: []}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "clear",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._contents_("");
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.HLCodeWidget)})},
messageSends: ["contents:"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "configureEditor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._editor())._at_put_("amberCodeWidget",self);
_st(self._editor())._on_do_("change",(function(){
return smalltalk.withContext(function($ctx2) {
return self._onChange();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"configureEditor",{},smalltalk.HLCodeWidget)})},
messageSends: ["at:put:", "editor", "on:do:", "onChange"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "contents",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@editor"])._getValue();
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{},smalltalk.HLCodeWidget)})},
messageSends: ["getValue"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "contents:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@editor"])._setValue_(aString);
$1=self["@state"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
self._updateState();
};
return self}, function($ctx1) {$ctx1.fill(self,"contents:",{aString:aString},smalltalk.HLCodeWidget)})},
messageSends: ["setValue:", "ifNotNil:", "updateState"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "currentLine",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@editor"])._getLine_(_st(_st(self["@editor"])._getCursor())._line());
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentLine",{},smalltalk.HLCodeWidget)})},
messageSends: ["getLine:", "line", "getCursor"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "currentLineOrSelection",
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
}, function($ctx1) {$ctx1.fill(self,"currentLineOrSelection",{},smalltalk.HLCodeWidget)})},
messageSends: ["ifFalse:ifTrue:", "currentLine", "selection", "somethingSelected"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "doIt",
fn: function (){
var self=this;
var result;
function $HLDoItRequested(){return smalltalk.HLDoItRequested||(typeof HLDoItRequested=="undefined"?nil:HLDoItRequested)}
function $HLDoItExecuted(){return smalltalk.HLDoItExecuted||(typeof HLDoItExecuted=="undefined"?nil:HLDoItExecuted)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(self._model())._announcer())._announce_(_st($HLDoItRequested())._on_(self["@model"]));
result=_st(self["@model"])._doIt_(self._currentLineOrSelection());
_st(_st(self._model())._announcer())._announce_(_st($HLDoItExecuted())._on_(self["@model"]));
$1=result;
return $1;
}, function($ctx1) {$ctx1.fill(self,"doIt",{result:result},smalltalk.HLCodeWidget)})},
messageSends: ["announce:", "on:", "announcer", "model", "doIt:", "currentLineOrSelection"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "editor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@editor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"editor",{},smalltalk.HLCodeWidget)})},
messageSends: []}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "editorOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["theme".__minus_gt("amber"),"lineNumbers".__minus_gt(true),"enterMode".__minus_gt("flat"),"indentWithTabs".__minus_gt(true),"indentUnit".__minus_gt((4)),"matchBrackets".__minus_gt(true),"electricChars".__minus_gt(false),"keyMap".__minus_gt("Amber"),"extraKeys".__minus_gt(smalltalk.HashedCollection._from_(["Shift-Space".__minus_gt("autocomplete")]))]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"editorOptions",{},smalltalk.HLCodeWidget)})},
messageSends: ["->"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@editor"])._focus();
return self}, function($ctx1) {$ctx1.fill(self,"focus",{},smalltalk.HLCodeWidget)})},
messageSends: ["focus"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "hasFocus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@code"])._asJQuery())._is_(":active");
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasFocus",{},smalltalk.HLCodeWidget)})},
messageSends: ["is:", "asJQuery"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "hasModification",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"hasModification",{},smalltalk.HLCodeWidget)})},
messageSends: []}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectIt",
fn: function (){
var self=this;
var newInspector;
function $HLInspectItRequested(){return smalltalk.HLInspectItRequested||(typeof HLInspectItRequested=="undefined"?nil:HLInspectItRequested)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._model())._announcer())._announce_(_st($HLInspectItRequested())._on_(self["@model"]));
_st(self._model())._inspect_(self._doIt());
return self}, function($ctx1) {$ctx1.fill(self,"inspectIt",{newInspector:newInspector},smalltalk.HLCodeWidget)})},
messageSends: ["announce:", "on:", "announcer", "model", "inspect:", "doIt"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "messageHintFor:token:",
fn: function (anEditor,aToken){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(_st(_st(_st($Smalltalk())._current())._at_("allSelectors"))._value())._asSet())._asArray())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._includesSubString_(_st(aToken)._string());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq(_st(aToken)._string());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageHintFor:token:",{anEditor:anEditor,aToken:aToken},smalltalk.HLCodeWidget)})},
messageSends: ["reject:", "=", "string", "select:", "includesSubString:", "asArray", "asSet", "value", "at:", "current"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
fn: function (){
var self=this;
function $HLCodeModel(){return smalltalk.HLCodeModel||(typeof HLCodeModel=="undefined"?nil:HLCodeModel)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@model"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@model"]=_st($HLCodeModel())._new();
$1=self["@model"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.HLCodeWidget)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=aModel;
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},smalltalk.HLCodeWidget)})},
messageSends: []}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onChange",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._updateState();
return self}, function($ctx1) {$ctx1.fill(self,"onChange",{},smalltalk.HLCodeWidget)})},
messageSends: ["updateState"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onDoIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._doIt();
return self}, function($ctx1) {$ctx1.fill(self,"onDoIt",{},smalltalk.HLCodeWidget)})},
messageSends: ["doIt"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onInspectIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._inspectIt();
return self}, function($ctx1) {$ctx1.fill(self,"onInspectIt",{},smalltalk.HLCodeWidget)})},
messageSends: ["inspectIt"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onPrintIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._printIt();
return self}, function($ctx1) {$ctx1.fill(self,"onPrintIt",{},smalltalk.HLCodeWidget)})},
messageSends: ["printIt"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onSaveIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"onSaveIt",{},smalltalk.HLCodeWidget)})},
messageSends: []}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "print:",
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
return self}, function($ctx1) {$ctx1.fill(self,"print:",{aString:aString,start:start,stop:stop,currentLine:currentLine},smalltalk.HLCodeWidget)})},
messageSends: ["line", "getCursor:", "new", "at:put:", "ch", "ifEmpty:", "size", "getLine:", "setSelection:end:", "->", "getSelection", "+", "at:", "replaceSelection:", ",", "setCursor:"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "printIt",
fn: function (){
var self=this;
var result;
function $HLPrintItRequested(){return smalltalk.HLPrintItRequested||(typeof HLPrintItRequested=="undefined"?nil:HLPrintItRequested)}
return smalltalk.withContext(function($ctx1) { 
result=self._doIt();
_st(_st(self._model())._announcer())._announce_(_st($HLPrintItRequested())._on_(self["@model"]));
self._print_(_st(result)._printString());
self._focus();
return self}, function($ctx1) {$ctx1.fill(self,"printIt",{result:result},smalltalk.HLCodeWidget)})},
messageSends: ["doIt", "announce:", "on:", "announcer", "model", "print:", "printString", "focus"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._model())._receiver();
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},smalltalk.HLCodeWidget)})},
messageSends: ["receiver", "model"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._receiver_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{anObject:anObject},smalltalk.HLCodeWidget)})},
messageSends: ["receiver:", "model"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
$1=_st(html)._button();
_st($1)._class_("button");
_st($1)._with_("DoIt");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._doIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=_st(html)._button();
_st($3)._class_("button");
_st($3)._with_("PrintIt");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._printIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$5=_st(html)._button();
_st($5)._class_("button");
_st($5)._with_("InspectIt");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._inspectIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},smalltalk.HLCodeWidget)})},
messageSends: ["class:", "button", "with:", "onClick:", "doIt", "printIt", "inspectIt"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
$1=_st(html)._div();
_st($1)._class_("editor");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self["@code"]=_st(html)._textarea();
return self["@code"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@state"]=_st(_st(html)._div())._class_("state");
$3=_st(html)._div();
_st($3)._class_("buttons_bar");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderButtonsOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$5=self;
_st($5)._setEditorOn_(_st(self["@code"])._element());
_st($5)._configureEditor();
$6=_st($5)._updateState();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLCodeWidget)})},
messageSends: ["class:", "div", "with:", "textarea", "renderButtonsOn:", "setEditorOn:", "element", "configureEditor", "updateState"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "saveIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"saveIt",{},smalltalk.HLCodeWidget)})},
messageSends: []}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@editor"])._getSelection();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selection",{},smalltalk.HLCodeWidget)})},
messageSends: ["getSelection"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionEnd",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@code"])._element())._selectionEnd();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectionEnd",{},smalltalk.HLCodeWidget)})},
messageSends: ["selectionEnd", "element"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionEnd:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@code"])._element())._selectionEnd_(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"selectionEnd:",{anInteger:anInteger},smalltalk.HLCodeWidget)})},
messageSends: ["selectionEnd:", "element"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionStart",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@code"])._element())._selectionStart();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectionStart",{},smalltalk.HLCodeWidget)})},
messageSends: ["selectionStart", "element"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionStart:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@code"])._element())._selectionStart_(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"selectionStart:",{anInteger:anInteger},smalltalk.HLCodeWidget)})},
messageSends: ["selectionStart:", "element"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setEditorOn:",
fn: function (aTextarea){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self['@editor'] = CodeMirror.fromTextArea(aTextarea, self._editorOptions());
return self}, function($ctx1) {$ctx1.fill(self,"setEditorOn:",{aTextarea:aTextarea},smalltalk.HLCodeWidget)})},
messageSends: []}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "updateState",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._hasModification();
if(smalltalk.assert($1)){
_st(_st(self["@state"])._asJQuery())._addClass_("modified");
} else {
_st(_st(self["@state"])._asJQuery())._removeClass_("modified");
};
return self}, function($ctx1) {$ctx1.fill(self,"updateState",{},smalltalk.HLCodeWidget)})},
messageSends: ["ifTrue:ifFalse:", "addClass:", "asJQuery", "removeClass:", "hasModification"]}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "variableHintFor:token:",
fn: function (anEditor,aToken){
var self=this;
var variables,classNames,pseudoVariables;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
variables=_st(_st(_st(_st(window)._jQuery_(_st(_st(anEditor)._display())._wrapper()))._find_("span.cm-variable"))._get())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(window)._jQuery_(each))._html();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
classNames=_st(_st(_st($Smalltalk())._current())._classes())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._name();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
pseudoVariables=_st(_st($Smalltalk())._current())._pseudoVariableNames();
$1=_st(_st(_st(_st(_st(_st(variables).__comma(classNames)).__comma(pseudoVariables))._asSet())._asArray())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._includesSubString_(_st(aToken)._string());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq(_st(aToken)._string());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"variableHintFor:token:",{anEditor:anEditor,aToken:aToken,variables:variables,classNames:classNames,pseudoVariables:pseudoVariables},smalltalk.HLCodeWidget)})},
messageSends: ["collect:", "html", "jQuery:", "get", "find:", "wrapper", "display", "name", "classes", "current", "pseudoVariableNames", "reject:", "=", "string", "select:", "includesSubString:", "asArray", "asSet", ","]}),
smalltalk.HLCodeWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "hintFor:options:",
fn: function (anEditor,options){
var self=this;
var cursor,token,completions;
function $CodeMirror(){return smalltalk.CodeMirror||(typeof CodeMirror=="undefined"?nil:CodeMirror)}
function $HLCodeWidget(){return smalltalk.HLCodeWidget||(typeof HLCodeWidget=="undefined"?nil:HLCodeWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
cursor=_st(anEditor)._getCursor();
token=_st(anEditor)._getTokenAt_(cursor);
_st(token)._at_put_("state",_st(_st(_st($CodeMirror())._basicAt_("innerMode"))._value_value_(_st(anEditor)._getMode(),_st(token)._at_("state")))._state());
$1=_st(_st(token)._type()).__eq("variable");
if(smalltalk.assert($1)){
completions=_st($HLCodeWidget())._variableHintFor_token_(anEditor,token);
} else {
completions=_st($HLCodeWidget())._messageHintFor_token_(anEditor,token);
};
$2=smalltalk.HashedCollection._from_(["list".__minus_gt(completions),"from".__minus_gt(_st(_st($CodeMirror())._basicAt_("Pos"))._value_value_(_st(cursor)._line(),_st(token)._end())),"to".__minus_gt(_st(_st($CodeMirror())._basicAt_("Pos"))._value_value_(_st(cursor)._line(),_st(token)._start()))]);
return $2;
}, function($ctx1) {$ctx1.fill(self,"hintFor:options:",{anEditor:anEditor,options:options,cursor:cursor,token:token,completions:completions},smalltalk.HLCodeWidget.klass)})},
messageSends: ["getCursor", "getTokenAt:", "at:put:", "state", "value:value:", "getMode", "at:", "basicAt:", "ifTrue:ifFalse:", "variableHintFor:token:", "messageHintFor:token:", "=", "type", "->", "line", "end", "start"]}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.HLCodeWidget.klass.superclass.fn.prototype._initialize.apply(_st(self), []);
$1=self;
_st($1)._setupCodeMirror();
_st($1)._setupCommands();
$2=_st($1)._setupKeyMaps();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.HLCodeWidget.klass)})},
messageSends: ["initialize", "setupCodeMirror", "setupCommands", "setupKeyMaps"]}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "keyMap",
fn: function (){
var self=this;
function $HLManager(){return smalltalk.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(_st($HLManager())._current())._keyBinder())._systemIsMac();
if(smalltalk.assert($2)){
$1=self._macKeyMap();
} else {
$1=self._pcKeyMap();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyMap",{},smalltalk.HLCodeWidget.klass)})},
messageSends: ["ifTrue:ifFalse:", "macKeyMap", "pcKeyMap", "systemIsMac", "keyBinder", "current"]}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "macKeyMap",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["Alt-Backspace".__minus_gt("delWordBefore"),"Alt-Delete".__minus_gt("delWordAfter"),"Alt-Left".__minus_gt("goWordBoundaryLeft"),"Alt-Right".__minus_gt("goWordBoundaryRight"),"Cmd-A".__minus_gt("selectAll"),"Cmd-Alt-F".__minus_gt("replace"),"Cmd-D".__minus_gt("doIt"),"Cmd-Down".__minus_gt("goDocEnd"),"Cmd-End".__minus_gt("goDocEnd"),"Cmd-F".__minus_gt("find"),"Cmd-G".__minus_gt("findNext"),"Cmd-I".__minus_gt("inspectIt"),"Cmd-Left".__minus_gt("goLineStart"),"Cmd-P".__minus_gt("printIt"),"Cmd-Right".__minus_gt("goLineEnd"),"Cmd-S".__minus_gt("saveIt"),"Cmd-Up".__minus_gt("goDocStart"),"Cmd-Y".__minus_gt("redo"),"Cmd-Z".__minus_gt("undo"),"Cmd-[".__minus_gt("indentLess"),"Cmd-]".__minus_gt("indentMore"),"Ctrl-Alt-Backspace".__minus_gt("delWordAfter"),"Shift-Cmd-Alt-F".__minus_gt("replaceAll"),"Shift-Cmd-G".__minus_gt("findPrev"),"Shift-Cmd-Z".__minus_gt("redo"),"fallthrough".__minus_gt(["basic","emacsy"])]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"macKeyMap",{},smalltalk.HLCodeWidget.klass)})},
messageSends: ["->"]}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "messageHintFor:token:",
fn: function (anEditor,aToken){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(anEditor)._at_("amberCodeWidget"))._messageHintFor_token_(anEditor,aToken);
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageHintFor:token:",{anEditor:anEditor,aToken:aToken},smalltalk.HLCodeWidget.klass)})},
messageSends: ["messageHintFor:token:", "at:"]}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "pcKeyMap",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["Alt-Left".__minus_gt("goLineStart"),"Alt-Right".__minus_gt("goLineEnd"),"Alt-Up".__minus_gt("goDocStart"),"Ctrl-A".__minus_gt("selectAll"),"Ctrl-Backspace".__minus_gt("delWordBefore"),"Ctrl-D".__minus_gt("doIt"),"Ctrl-Delete".__minus_gt("delWordAfter"),"Ctrl-Down".__minus_gt("goDocEnd"),"Ctrl-End".__minus_gt("goDocEnd"),"Ctrl-F".__minus_gt("find"),"Ctrl-G".__minus_gt("findNext"),"Ctrl-I".__minus_gt("inspectIt"),"Ctrl-Home".__minus_gt("goDocStart"),"Ctrl-Left".__minus_gt("goWordBoundaryLeft"),"Ctrl-P".__minus_gt("printIt"),"Ctrl-Right".__minus_gt("goWordBoundaryRight"),"Ctrl-S".__minus_gt("saveIt"),"Ctrl-Y".__minus_gt("redo"),"Ctrl-Z".__minus_gt("undo"),"Ctrl-[".__minus_gt("indentLess"),"Ctrl-]".__minus_gt("indentMore"),"Shift-Ctrl-F".__minus_gt("replace"),"Shift-Ctrl-G".__minus_gt("findPrev"),"Shift-Ctrl-R".__minus_gt("replaceAll"),"Shift-Ctrl-Z".__minus_gt("redo"),"fallthrough".__minus_gt(["basic"])]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"pcKeyMap",{},smalltalk.HLCodeWidget.klass)})},
messageSends: ["->"]}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "setupCodeMirror",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 
		CodeMirror.keyMap.default.fallthrough = ["basic"];
		CodeMirror.commands.autocomplete = function(cm) {
        	CodeMirror.showHint(cm, self._hintFor_options_);
      	}
	;
return self}, function($ctx1) {$ctx1.fill(self,"setupCodeMirror",{},smalltalk.HLCodeWidget.klass)})},
messageSends: []}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "setupCommands",
fn: function (){
var self=this;
function $CodeMirror(){return smalltalk.CodeMirror||(typeof CodeMirror=="undefined"?nil:CodeMirror)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($CodeMirror())._basicAt_("commands");
_st($1)._at_put_("doIt",(function(cm){
return smalltalk.withContext(function($ctx2) {
return _st(_st(cm)._amberCodeWidget())._doIt();
}, function($ctx2) {$ctx2.fillBlock({cm:cm},$ctx1)})}));
_st($1)._at_put_("inspectIt",(function(cm){
return smalltalk.withContext(function($ctx2) {
return _st(_st(cm)._amberCodeWidget())._inspectIt();
}, function($ctx2) {$ctx2.fillBlock({cm:cm},$ctx1)})}));
_st($1)._at_put_("printIt",(function(cm){
return smalltalk.withContext(function($ctx2) {
return _st(_st(cm)._amberCodeWidget())._printIt();
}, function($ctx2) {$ctx2.fillBlock({cm:cm},$ctx1)})}));
$2=_st($1)._at_put_("saveIt",(function(cm){
return smalltalk.withContext(function($ctx2) {
return _st(_st(cm)._amberCodeWidget())._saveIt();
}, function($ctx2) {$ctx2.fillBlock({cm:cm},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupCommands",{},smalltalk.HLCodeWidget.klass)})},
messageSends: ["at:put:", "doIt", "amberCodeWidget", "basicAt:", "inspectIt", "printIt", "saveIt"]}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "setupKeyMaps",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
CodeMirror.keyMap['Amber'] = self._keyMap();
return self}, function($ctx1) {$ctx1.fill(self,"setupKeyMaps",{},smalltalk.HLCodeWidget.klass)})},
messageSends: []}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "variableHintFor:token:",
fn: function (anEditor,aToken){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(anEditor)._at_("amberCodeWidget"))._variableHintFor_token_(anEditor,aToken);
return $1;
}, function($ctx1) {$ctx1.fill(self,"variableHintFor:token:",{anEditor:anEditor,aToken:aToken},smalltalk.HLCodeWidget.klass)})},
messageSends: ["variableHintFor:token:", "at:"]}),
smalltalk.HLCodeWidget.klass);


smalltalk.addClass('HLNavigationCodeWidget', smalltalk.HLCodeWidget, ['methodContents'], 'Helios-Workspace');
smalltalk.addMethod(
smalltalk.method({
selector: "configureEditor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLNavigationCodeWidget.superclass.fn.prototype._configureEditor.apply(_st(self), []);
self._contents_(self._methodContents());
return self}, function($ctx1) {$ctx1.fill(self,"configureEditor",{},smalltalk.HLNavigationCodeWidget)})},
messageSends: ["configureEditor", "contents:", "methodContents"]}),
smalltalk.HLNavigationCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "contents:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._methodContents_(aString);
smalltalk.HLNavigationCodeWidget.superclass.fn.prototype._contents_.apply(_st(self), [aString]);
return self}, function($ctx1) {$ctx1.fill(self,"contents:",{aString:aString},smalltalk.HLNavigationCodeWidget)})},
messageSends: ["methodContents:", "contents:"]}),
smalltalk.HLNavigationCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "hasModification",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._methodContents()).__eq(self._contents()))._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasModification",{},smalltalk.HLNavigationCodeWidget)})},
messageSends: ["not", "=", "contents", "methodContents"]}),
smalltalk.HLNavigationCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "methodContents",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@methodContents"];
if(($receiver = $2) == nil || $receiver == undefined){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodContents",{},smalltalk.HLNavigationCodeWidget)})},
messageSends: ["ifNil:"]}),
smalltalk.HLNavigationCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "methodContents:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@methodContents"]=aString;
$1=self["@methodContents"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodContents:",{aString:aString},smalltalk.HLNavigationCodeWidget)})},
messageSends: []}),
smalltalk.HLNavigationCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "previous",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"previous",{},smalltalk.HLNavigationCodeWidget)})},
messageSends: []}),
smalltalk.HLNavigationCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "previous:",
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"previous:",{aWidget:aWidget},smalltalk.HLNavigationCodeWidget)})},
messageSends: []}),
smalltalk.HLNavigationCodeWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "canBeOpenAsTab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{},smalltalk.HLNavigationCodeWidget.klass)})},
messageSends: []}),
smalltalk.HLNavigationCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (aBrowserModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._browserModel_(aBrowserModel);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aBrowserModel:aBrowserModel},smalltalk.HLNavigationCodeWidget.klass)})},
messageSends: ["browserModel:", "new", "yourself"]}),
smalltalk.HLNavigationCodeWidget.klass);


smalltalk.addClass('HLBrowserCodeWidget', smalltalk.HLNavigationCodeWidget, ['browserModel'], 'Helios-Workspace');
smalltalk.addMethod(
smalltalk.method({
selector: "browserModel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@browserModel"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"browserModel",{},smalltalk.HLBrowserCodeWidget)})},
messageSends: []}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "browserModel:",
fn: function (aBrowserModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@browserModel"]=aBrowserModel;
$1=self;
_st($1)._observeSystem();
$2=_st($1)._observeBrowserModel();
return self}, function($ctx1) {$ctx1.fill(self,"browserModel:",{aBrowserModel:aBrowserModel},smalltalk.HLBrowserCodeWidget)})},
messageSends: ["observeSystem", "observeBrowserModel"]}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeBrowserModel",
fn: function (){
var self=this;
function $HLSaveSourceCode(){return smalltalk.HLSaveSourceCode||(typeof HLSaveSourceCode=="undefined"?nil:HLSaveSourceCode)}
function $HLShowInstanceToggled(){return smalltalk.HLShowInstanceToggled||(typeof HLShowInstanceToggled=="undefined"?nil:HLShowInstanceToggled)}
function $HLSourceCodeSaved(){return smalltalk.HLSourceCodeSaved||(typeof HLSourceCodeSaved=="undefined"?nil:HLSourceCodeSaved)}
function $HLAboutToChange(){return smalltalk.HLAboutToChange||(typeof HLAboutToChange=="undefined"?nil:HLAboutToChange)}
function $HLParseErrorRaised(){return smalltalk.HLParseErrorRaised||(typeof HLParseErrorRaised=="undefined"?nil:HLParseErrorRaised)}
function $HLCompileErrorRaised(){return smalltalk.HLCompileErrorRaised||(typeof HLCompileErrorRaised=="undefined"?nil:HLCompileErrorRaised)}
function $HLUnknownVariableErrorRaised(){return smalltalk.HLUnknownVariableErrorRaised||(typeof HLUnknownVariableErrorRaised=="undefined"?nil:HLUnknownVariableErrorRaised)}
function $HLInstVarAdded(){return smalltalk.HLInstVarAdded||(typeof HLInstVarAdded=="undefined"?nil:HLInstVarAdded)}
function $HLMethodSelected(){return smalltalk.HLMethodSelected||(typeof HLMethodSelected=="undefined"?nil:HLMethodSelected)}
function $HLClassSelected(){return smalltalk.HLClassSelected||(typeof HLClassSelected=="undefined"?nil:HLClassSelected)}
function $HLProtocolSelected(){return smalltalk.HLProtocolSelected||(typeof HLProtocolSelected=="undefined"?nil:HLProtocolSelected)}
function $HLSourceCodeFocusRequested(){return smalltalk.HLSourceCodeFocusRequested||(typeof HLSourceCodeFocusRequested=="undefined"?nil:HLSourceCodeFocusRequested)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._browserModel())._announcer();
_st($1)._on_send_to_($HLSaveSourceCode(),"onSaveIt",self);
_st($1)._on_send_to_($HLShowInstanceToggled(),"onShowInstanceToggled",self);
_st($1)._on_send_to_($HLSourceCodeSaved(),"onSourceCodeSaved",self);
_st($1)._on_send_to_($HLAboutToChange(),"onBrowserAboutToChange:",self);
_st($1)._on_send_to_($HLParseErrorRaised(),"onParseError:",self);
_st($1)._on_send_to_($HLCompileErrorRaised(),"onCompileError:",self);
_st($1)._on_send_to_($HLUnknownVariableErrorRaised(),"onUnknownVariableError:",self);
_st($1)._on_send_to_($HLInstVarAdded(),"onInstVarAdded",self);
_st($1)._on_send_to_($HLMethodSelected(),"onMethodSelected:",self);
_st($1)._on_send_to_($HLClassSelected(),"onClassSelected:",self);
_st($1)._on_send_to_($HLProtocolSelected(),"onProtocolSelected:",self);
$2=_st($1)._on_send_to_($HLSourceCodeFocusRequested(),"onSourceCodeFocusRequested",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeBrowserModel",{},smalltalk.HLBrowserCodeWidget)})},
messageSends: ["on:send:to:", "announcer", "browserModel"]}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeSystem",
fn: function (){
var self=this;
function $MethodModified(){return smalltalk.MethodModified||(typeof MethodModified=="undefined"?nil:MethodModified)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._browserModel())._systemAnnouncer())._on_send_to_($MethodModified(),"onMethodModified:",self);
return self}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},smalltalk.HLBrowserCodeWidget)})},
messageSends: ["on:send:to:", "systemAnnouncer", "browserModel"]}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onBrowserAboutToChange:",
fn: function (anAnnouncement){
var self=this;
var block;
function $HLChangeForbidden(){return smalltalk.HLChangeForbidden||(typeof HLChangeForbidden=="undefined"?nil:HLChangeForbidden)}
return smalltalk.withContext(function($ctx1) { 
var $1;
block=_st(anAnnouncement)._actionBlock();
$1=self._hasModification();
if(smalltalk.assert($1)){
self._confirm_ifTrue_("Changes have not been saved. Do you want to discard these changes?",(function(){
return smalltalk.withContext(function($ctx2) {
self._methodContents_(self._contents());
return _st(block)._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st($HLChangeForbidden())._signal();
};
return self}, function($ctx1) {$ctx1.fill(self,"onBrowserAboutToChange:",{anAnnouncement:anAnnouncement,block:block},smalltalk.HLBrowserCodeWidget)})},
messageSends: ["actionBlock", "ifTrue:", "confirm:ifTrue:", "methodContents:", "contents", "value", "signal", "hasModification"]}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassSelected:",
fn: function (anAnnouncement){
var self=this;
var class_;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
class_=_st(anAnnouncement)._item();
$1=class_;
if(($receiver = $1) == nil || $receiver == undefined){
$2=self._contents_("");
return $2;
} else {
$1;
};
self._contents_(_st(class_)._definition());
return self}, function($ctx1) {$ctx1.fill(self,"onClassSelected:",{anAnnouncement:anAnnouncement,class_:class_},smalltalk.HLBrowserCodeWidget)})},
messageSends: ["item", "ifNil:", "contents:", "definition"]}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onCompileError:",
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._alert_(_st(_st(anAnnouncement)._error())._messageText());
return self}, function($ctx1) {$ctx1.fill(self,"onCompileError:",{anAnnouncement:anAnnouncement},smalltalk.HLBrowserCodeWidget)})},
messageSends: ["alert:", "messageText", "error"]}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onInstVarAdded",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._browserModel())._save_(self._contents());
return self}, function($ctx1) {$ctx1.fill(self,"onInstVarAdded",{},smalltalk.HLBrowserCodeWidget)})},
messageSends: ["save:", "contents", "browserModel"]}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodModified:",
fn: function (anAnnouncement){
var self=this;
var method;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
method=_st(anAnnouncement)._method();
$1=_st(_st(self._browserModel())._selectedClass()).__eq(_st(method)._methodClass());
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st(self._browserModel())._selectedMethod();
if(($receiver = $3) == nil || $receiver == undefined){
$4=self;
return $4;
} else {
$3;
};
$5=_st(_st(_st(self._browserModel())._selectedMethod())._selector()).__eq(_st(method)._selector());
if(! smalltalk.assert($5)){
$6=self;
return $6;
};
self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onMethodModified:",{anAnnouncement:anAnnouncement,method:method},smalltalk.HLBrowserCodeWidget)})},
messageSends: ["method", "ifFalse:", "=", "methodClass", "selectedClass", "browserModel", "ifNil:", "selectedMethod", "selector", "refresh"]}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodSelected:",
fn: function (anAnnouncement){
var self=this;
var method;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
method=_st(anAnnouncement)._item();
$1=method;
if(($receiver = $1) == nil || $receiver == undefined){
$2=self._contents_("");
return $2;
} else {
$1;
};
self._contents_(_st(method)._source());
return self}, function($ctx1) {$ctx1.fill(self,"onMethodSelected:",{anAnnouncement:anAnnouncement,method:method},smalltalk.HLBrowserCodeWidget)})},
messageSends: ["item", "ifNil:", "contents:", "source"]}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onParseError:",
fn: function (anAnnouncement){
var self=this;
var lineIndex,newContents;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
lineIndex=(1);
self._contents_(_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
return _st(self._contents())._linesDo_((function(each){
return smalltalk.withContext(function($ctx3) {
$1=_st(lineIndex).__eq(_st(anAnnouncement)._line());
if(smalltalk.assert($1)){
$2=stream;
_st($2)._nextPutAll_(_st(each)._copyFrom_to_((1),_st(anAnnouncement)._column()));
_st($2)._nextPutAll_("<- ");
_st($2)._nextPutAll_(_st(anAnnouncement)._message());
_st($2)._nextPutAll_(" ");
$3=_st($2)._nextPutAll_(_st(each)._copyFrom_to_(_st(_st(anAnnouncement)._column()).__plus((1)),_st(each)._size()));
$3;
} else {
_st(stream)._nextPutAll_(each);
};
_st(stream)._nextPutAll_(_st($String())._cr());
lineIndex=_st(lineIndex).__plus((1));
return lineIndex;
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"onParseError:",{anAnnouncement:anAnnouncement,lineIndex:lineIndex,newContents:newContents},smalltalk.HLBrowserCodeWidget)})},
messageSends: ["contents:", "streamContents:", "linesDo:", "ifTrue:ifFalse:", "nextPutAll:", "copyFrom:to:", "column", "message", "+", "size", "=", "line", "cr", "contents"]}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onProtocolSelected:",
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._browserModel())._selectedClass();
if(($receiver = $1) == nil || $receiver == undefined){
$2=self._contents_("");
return $2;
} else {
$1;
};
self._contents_(_st(_st(self._browserModel())._selectedClass())._definition());
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolSelected:",{anAnnouncement:anAnnouncement},smalltalk.HLBrowserCodeWidget)})},
messageSends: ["ifNil:", "contents:", "selectedClass", "browserModel", "definition"]}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onSaveIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._browserModel())._save_(self._contents());
return self}, function($ctx1) {$ctx1.fill(self,"onSaveIt",{},smalltalk.HLBrowserCodeWidget)})},
messageSends: ["save:", "contents", "browserModel"]}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onShowInstanceToggled",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._browserModel())._selectedClass();
if(($receiver = $1) == nil || $receiver == undefined){
$2=self._contents_("");
return $2;
} else {
$1;
};
self._contents_(_st(_st(self._browserModel())._selectedClass())._definition());
return self}, function($ctx1) {$ctx1.fill(self,"onShowInstanceToggled",{},smalltalk.HLBrowserCodeWidget)})},
messageSends: ["ifNil:", "contents:", "selectedClass", "browserModel", "definition"]}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onSourceCodeFocusRequested",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onSourceCodeFocusRequested",{},smalltalk.HLBrowserCodeWidget)})},
messageSends: ["focus"]}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onSourceCodeSaved",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._methodContents_(self._contents());
self._updateState();
return self}, function($ctx1) {$ctx1.fill(self,"onSourceCodeSaved",{},smalltalk.HLBrowserCodeWidget)})},
messageSends: ["methodContents:", "contents", "updateState"]}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onUnknownVariableError:",
fn: function (anAnnouncement){
var self=this;
var error;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
error=_st(anAnnouncement)._error();
self._confirm_ifTrue_(_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
$1=stream;
_st($1)._nextPutAll_(_st(error)._messageText());
_st($1)._nextPutAll_(_st($String())._cr());
$2=_st($1)._nextPutAll_("Would you like to define an instance variable?");
return $2;
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1)})})),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._browserModel())._addInstVarNamed_(_st(error)._variableName());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"onUnknownVariableError:",{anAnnouncement:anAnnouncement,error:error},smalltalk.HLBrowserCodeWidget)})},
messageSends: ["error", "confirm:ifTrue:", "streamContents:", "nextPutAll:", "messageText", "cr", "addInstVarNamed:", "variableName", "browserModel"]}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "refresh",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=self._hasModification();
if(smalltalk.assert($1)){
$2=self;
return $2;
};
$3=self._hasFocus();
if(smalltalk.assert($3)){
$4=self;
return $4;
};
self._contents_(_st(_st(self._browserModel())._selectedMethod())._source());
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{},smalltalk.HLBrowserCodeWidget)})},
messageSends: ["ifTrue:", "hasModification", "hasFocus", "contents:", "source", "selectedMethod", "browserModel"]}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._button();
_st($1)._class_("button");
_st($1)._with_("SaveIt");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._saveIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
smalltalk.HLBrowserCodeWidget.superclass.fn.prototype._renderButtonsOn_.apply(_st(self), [html]);
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},smalltalk.HLBrowserCodeWidget)})},
messageSends: ["class:", "button", "with:", "onClick:", "saveIt", "renderButtonsOn:"]}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "saveIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._browserModel())._saveSourceCode();
return self}, function($ctx1) {$ctx1.fill(self,"saveIt",{},smalltalk.HLBrowserCodeWidget)})},
messageSends: ["saveSourceCode", "browserModel"]}),
smalltalk.HLBrowserCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "unregister",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLBrowserCodeWidget.superclass.fn.prototype._unregsiter.apply(_st(self), []);
_st(_st(self._browserModel())._announcer())._unsubscribe_(self);
_st(_st(self._browserModel())._systemAnnouncer())._unsubscribe_(self);
return self}, function($ctx1) {$ctx1.fill(self,"unregister",{},smalltalk.HLBrowserCodeWidget)})},
messageSends: ["unregsiter", "unsubscribe:", "announcer", "browserModel", "systemAnnouncer"]}),
smalltalk.HLBrowserCodeWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "canBeOpenAsTab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{},smalltalk.HLBrowserCodeWidget.klass)})},
messageSends: []}),
smalltalk.HLBrowserCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (aBrowserModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._browserModel_(aBrowserModel);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aBrowserModel:aBrowserModel},smalltalk.HLBrowserCodeWidget.klass)})},
messageSends: ["browserModel:", "new", "yourself"]}),
smalltalk.HLBrowserCodeWidget.klass);


smalltalk.addClass('HLWorkspace', smalltalk.HLWidget, ['codeWidget', 'transcript'], 'Helios-Workspace');
smalltalk.addMethod(
smalltalk.method({
selector: "canHaveFocus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"canHaveFocus",{},smalltalk.HLWorkspace)})},
messageSends: []}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
smalltalk.method({
selector: "codeWidget",
fn: function (){
var self=this;
function $HLCodeWidget(){return smalltalk.HLCodeWidget||(typeof HLCodeWidget=="undefined"?nil:HLCodeWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@codeWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@codeWidget"]=_st($HLCodeWidget())._new();
$1=self["@codeWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"codeWidget",{},smalltalk.HLWorkspace)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._codeWidget())._focus();
return $1;
}, function($ctx1) {$ctx1.fill(self,"focus",{},smalltalk.HLWorkspace)})},
messageSends: ["focus", "codeWidget"]}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
function $HLHorizontalSplitter(){return smalltalk.HLHorizontalSplitter||(typeof HLHorizontalSplitter=="undefined"?nil:HLHorizontalSplitter)}
function $HLContainer(){return smalltalk.HLContainer||(typeof HLContainer=="undefined"?nil:HLContainer)}
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st($HLContainer())._with_(_st($HLHorizontalSplitter())._with_with_(self._codeWidget(),(function(canvas){
return smalltalk.withContext(function($ctx2) {
return self._renderTranscriptOn_(canvas);
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1)})}))));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLWorkspace)})},
messageSends: ["with:", "with:with:", "codeWidget", "renderTranscriptOn:"]}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTranscriptOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_("transcript-container");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
_st($3)._class_("list-label");
$4=_st($3)._with_("Transcript");
$4;
return _st(self._transcript())._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderTranscriptOn:",{html:html},smalltalk.HLWorkspace)})},
messageSends: ["class:", "div", "with:", "renderOn:", "transcript"]}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
smalltalk.method({
selector: "transcript",
fn: function (){
var self=this;
function $HLTranscript(){return smalltalk.HLTranscript||(typeof HLTranscript=="undefined"?nil:HLTranscript)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@transcript"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@transcript"]=_st($HLTranscript())._new();
$1=self["@transcript"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"transcript",{},smalltalk.HLWorkspace)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
smalltalk.method({
selector: "unregister",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLWorkspace.superclass.fn.prototype._unregister.apply(_st(self), []);
_st(self._transcript())._unregister();
return self}, function($ctx1) {$ctx1.fill(self,"unregister",{},smalltalk.HLWorkspace)})},
messageSends: ["unregister", "transcript"]}),
smalltalk.HLWorkspace);


smalltalk.addMethod(
smalltalk.method({
selector: "canBeOpenAsTab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{},smalltalk.HLWorkspace.klass)})},
messageSends: []}),
smalltalk.HLWorkspace.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "workspace";
}, function($ctx1) {$ctx1.fill(self,"tabClass",{},smalltalk.HLWorkspace.klass)})},
messageSends: []}),
smalltalk.HLWorkspace.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Workspace";
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{},smalltalk.HLWorkspace.klass)})},
messageSends: []}),
smalltalk.HLWorkspace.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabPriority",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (10);
}, function($ctx1) {$ctx1.fill(self,"tabPriority",{},smalltalk.HLWorkspace.klass)})},
messageSends: []}),
smalltalk.HLWorkspace.klass);


